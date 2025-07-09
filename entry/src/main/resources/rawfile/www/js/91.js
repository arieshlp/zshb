(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[91],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/envInspectors/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/envInspectors/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_case__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/case */ "./src/api/case.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      boardObj: {},
      problemObj: {}
    };
  },
  mounted: function mounted() {
    this.getBoard();
    this.getProblem();
  },
  methods: {
    getBoard: function getBoard() {
      var _this = this;

      Object(_api_case__WEBPACK_IMPORTED_MODULE_0__["board"])().then(function (res) {
        _this.boardObj = res.data;
      });
    },
    getProblem: function getProblem() {
      var _this2 = this;

      Object(_api_case__WEBPACK_IMPORTED_MODULE_0__["problem"])().then(function (res) {
        _this2.problemObj = res.data;
      });
    },
    toTask: function toTask() {
      this.$router.push({
        name: "correctionTask",
        query: {}
      });
    },
    toHistoryData: function toHistoryData() {
      this.$router.push("/Supervision");
    },
    toList: function toList(type, data) {
      this.$router.push({
        name: "comList",
        query: {
          type: type,
          lx: data
        }
      });
    },
    toCompletion: function toCompletion(type, data) {
      this.$router.push({
        name: "completionStatus",
        query: {
          type: type,
          lx: data
        }
      });
    },
    toAcceptance: function toAcceptance(type, data) {
      this.$router.push({
        name: "acceptanceStatus",
        query: {
          type: type,
          lx: data
        }
      });
    },
    toImportant: function toImportant(type, data) {
      this.$router.push({
        name: "importantStatus",
        query: {
          type: type,
          lx: data
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/envInspectors/index.vue?vue&type=template&id=ff44477c&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/envInspectors/index.vue?vue&type=template&id=ff44477c&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        attrs: { title: "环保督察", "left-arrow": "" },
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
                  staticStyle: {
                    width: "18px",
                    height: "18px",
                    "margin-right": "2px",
                  },
                  attrs: { src: __webpack_require__(/*! @/assets/hisData.png */ "./src/assets/hisData.png") },
                  on: { click: _vm.toHistoryData },
                }),
                _c(
                  "span",
                  {
                    staticStyle: {
                      "font-weight": "normal",
                      color: "rgba(68, 123, 252, 1)",
                      "font-size": "12px",
                      "text-decoration": "underline",
                      cursor: "pointer",
                    },
                    on: { click: _vm.toHistoryData },
                  },
                  [_vm._v("查看历史数据")]
                ),
              ]
            },
            proxy: true,
          },
        ]),
      }),
      _c("div", { staticClass: "env-inspectors-container" }, [
        _c(
          "div",
          {
            staticClass: "env-inspectors-top",
            on: {
              click: function ($event) {
                return _vm.toTask("")
              },
            },
          },
          [
            _c("div", { staticClass: "top" }, [_vm._v("督察报告整改任务清单")]),
            _c("div", { staticClass: "bottom" }, [
              _c("div", { staticClass: "bottomBox" }, [
                _c("div", { staticClass: "boxTop" }, [_vm._v("总任务数")]),
                _c("div", { staticClass: "boxBottom" }, [
                  _c("span", { staticClass: "num" }, [
                    _vm._v(_vm._s(_vm.problemObj.sum)),
                  ]),
                  _c("span", { staticClass: "text" }, [_vm._v("件")]),
                ]),
              ]),
              _c("div", { staticClass: "boxLine" }),
              _c("div", { staticClass: "bottomBox" }, [
                _c("div", { staticClass: "boxTop" }, [_vm._v("整改中")]),
                _c("div", { staticClass: "boxBottom" }, [
                  _c("span", { staticClass: "num" }, [
                    _vm._v(_vm._s(_vm.problemObj.unresolved)),
                  ]),
                  _c("span", { staticClass: "text" }, [_vm._v("件")]),
                ]),
              ]),
              _c("div", { staticClass: "boxLine" }),
              _c("div", { staticClass: "bottomBox" }, [
                _c("div", { staticClass: "boxTop" }, [_vm._v("已完成")]),
                _c("div", { staticClass: "boxBottom" }, [
                  _c("span", { staticClass: "num" }, [
                    _vm._v(_vm._s(_vm.problemObj.resolved)),
                  ]),
                  _c("span", { staticClass: "text" }, [_vm._v("件")]),
                ]),
              ]),
            ]),
          ]
        ),
        _c("div", { staticClass: "env-inspectors-body" }, [
          _vm._m(0),
          _c("div", { staticClass: "env-inspectors-list" }, [
            _c("div", { staticClass: "env-inspectors-header-first" }, [
              _c("div", { staticClass: "env-inspectors-header-avatar" }),
              _c("div", { staticClass: "env-inspectors-header-title" }, [
                _vm._v("接件总数"),
              ]),
              _c(
                "div",
                { staticClass: "env-inspectors-header-time" },
                [
                  _c("van-icon", { attrs: { name: "replay" } }),
                  _vm._v(" 数据更新：" + _vm._s(_vm.boardObj.time)),
                ],
                1
              ),
            ]),
            _c("div", { staticClass: "env-inspectors-wrapper" }, [
              _c(
                "div",
                {
                  staticClass: "env-inspectors-content",
                  on: {
                    click: function ($event) {
                      return _vm.toList("督察案件总数", "1")
                    },
                  },
                },
                [
                  _c("div", { staticClass: "env-inspectors-content-item" }, [
                    _c("span", { staticClass: "item-first" }, [
                      _vm._v(_vm._s(_vm.boardObj.sum)),
                    ]),
                    _c("span", { staticClass: "item-second" }, [_vm._v("件")]),
                  ]),
                  _c("div", { staticClass: "env-inspectors-content-line" }),
                  _c("div", { staticClass: "env-inspectors-content-item" }, [
                    _vm._m(1),
                    _c("span", { staticClass: "item-fourth" }, [
                      _vm._v(_vm._s(_vm.boardObj.focus)),
                    ]),
                    _c("span", { staticClass: "item-fifth" }, [_vm._v("件")]),
                  ]),
                ]
              ),
            ]),
            _vm._m(2),
            _c(
              "div",
              {
                staticClass: "env-inspectors-wrapper",
                on: {
                  click: function ($event) {
                    return _vm.toCompletion("办结情况", "3")
                  },
                },
              },
              [
                _c("div", { staticClass: "env-inspectors-content" }, [
                  _c("div", { staticClass: "env-inspectors-content-item" }, [
                    _vm._m(3),
                    _c("span", { staticClass: "item-first" }, [
                      _vm._v(_vm._s(_vm.boardObj.rectificationCompleted)),
                    ]),
                    _c("span", { staticClass: "item-second" }, [_vm._v("件")]),
                  ]),
                  _c("div", { staticClass: "env-inspectors-content-line" }),
                  _c("div", { staticClass: "env-inspectors-content-item" }, [
                    _vm._m(4),
                    _c("span", { staticClass: "item-first" }, [
                      _vm._v(_vm._s(_vm.boardObj.stageCompletion)),
                    ]),
                    _c("span", { staticClass: "item-second" }, [_vm._v("件")]),
                  ]),
                  _c("div", { staticClass: "env-inspectors-content-line" }),
                  _c("div", { staticClass: "env-inspectors-content-item" }, [
                    _vm._m(5),
                    _c("span", { staticClass: "item-first" }, [
                      _vm._v(_vm._s(_vm.boardObj.incompleteRectification)),
                    ]),
                    _c("span", { staticClass: "item-second" }, [_vm._v("件")]),
                  ]),
                ]),
              ]
            ),
            _vm._m(6),
            _c(
              "div",
              {
                staticClass: "env-inspectors-wrapper",
                on: {
                  click: function ($event) {
                    return _vm.toList("正在整改情况", "2")
                  },
                },
              },
              [
                _c("div", { staticClass: "env-inspectors-content" }, [
                  _c("div", { staticClass: "env-inspectors-content-item" }, [
                    _vm._m(7),
                    _c("span", { staticClass: "item-first" }, [
                      _vm._v(_vm._s(_vm.boardObj.incompleteRectification)),
                    ]),
                    _c("span", { staticClass: "item-second" }, [_vm._v("件")]),
                  ]),
                  _c("div", { staticClass: "env-inspectors-content-line" }),
                  _c("div", { staticClass: "env-inspectors-content-item" }, [
                    _vm._m(8),
                    _c("span", { staticClass: "item-eighth" }, [
                      _vm._v(_vm._s(_vm.boardObj.nearExpiration)),
                    ]),
                    _c("span", { staticClass: "item-ninth" }, [_vm._v("件")]),
                  ]),
                ]),
              ]
            ),
            _vm._m(9),
            _c(
              "div",
              {
                staticClass: "env-inspectors-wrapper",
                on: {
                  click: function ($event) {
                    return _vm.toAcceptance("验收情况", "4")
                  },
                },
              },
              [
                _c("div", { staticClass: "env-inspectors-content" }, [
                  _c("div", { staticClass: "env-inspectors-content-item" }, [
                    _vm._m(10),
                    _c("span", { staticClass: "item-first" }, [
                      _vm._v(_vm._s(_vm.boardObj.shouldBeAccepted)),
                    ]),
                    _c("span", { staticClass: "item-second" }, [_vm._v("件")]),
                  ]),
                  _c("div", { staticClass: "env-inspectors-content-line" }),
                  _c("div", { staticClass: "env-inspectors-content-item" }, [
                    _vm._m(11),
                    _c("span", { staticClass: "item-first" }, [
                      _vm._v(_vm._s(_vm.boardObj.selfInspection)),
                    ]),
                    _c("span", { staticClass: "item-second" }, [_vm._v("件")]),
                  ]),
                  _c("div", { staticClass: "env-inspectors-content-line" }),
                  _c("div", { staticClass: "env-inspectors-content-item" }, [
                    _vm._m(12),
                    _c("span", { staticClass: "item-first" }, [
                      _vm._v(_vm._s(_vm.boardObj.municipalLevel)),
                    ]),
                    _c("span", { staticClass: "item-second" }, [_vm._v("件")]),
                  ]),
                ]),
              ]
            ),
            _vm._m(13),
            _c(
              "div",
              {
                staticClass: "env-inspectors-wrapper",
                on: {
                  click: function ($event) {
                    return _vm.toImportant("重点件验收情况", "5")
                  },
                },
              },
              [
                _c("div", { staticClass: "env-inspectors-content" }, [
                  _c("div", { staticClass: "env-inspectors-content-item" }, [
                    _vm._m(14),
                    _c("span", { staticClass: "item-first" }, [
                      _vm._v(_vm._s(_vm.boardObj.focusShouldBeAccepted)),
                    ]),
                    _c("span", { staticClass: "item-second" }, [_vm._v("件")]),
                  ]),
                  _c("div", { staticClass: "env-inspectors-content-line" }),
                  _c("div", { staticClass: "env-inspectors-content-item" }, [
                    _vm._m(15),
                    _c("span", { staticClass: "item-first" }, [
                      _vm._v(_vm._s(_vm.boardObj.focusSelfInspection)),
                    ]),
                    _c("span", { staticClass: "item-second" }, [_vm._v("件")]),
                  ]),
                  _c("div", { staticClass: "env-inspectors-content-line" }),
                  _c("div", { staticClass: "env-inspectors-content-item" }, [
                    _vm._m(16),
                    _c("span", { staticClass: "item-first" }, [
                      _vm._v(_vm._s(_vm.boardObj.focusMunicipalLevel)),
                    ]),
                    _c("span", { staticClass: "item-second" }, [_vm._v("件")]),
                  ]),
                ]),
                _c("div", { staticClass: "env-inspectors-content" }, [
                  _c("div", { staticClass: "env-inspectors-content-item" }, [
                    _vm._m(17),
                    _c("span", { staticClass: "item-first" }, [
                      _vm._v(_vm._s(_vm.boardObj.applyProvinceLevel)),
                    ]),
                    _c("span", { staticClass: "item-second" }, [_vm._v("件")]),
                  ]),
                  _c("div", { staticClass: "env-inspectors-content-line" }),
                  _c("div", { staticClass: "env-inspectors-content-item" }, [
                    _vm._m(18),
                    _c("span", { staticClass: "item-first" }, [
                      _vm._v(_vm._s(_vm.boardObj.passProvinceLevel)),
                    ]),
                    _c("span", { staticClass: "item-second" }, [_vm._v("件")]),
                  ]),
                ]),
              ]
            ),
          ]),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "env-inspectors-title" }, [
      _c("div", { staticClass: "text" }, [_vm._v("中央生态环境保护督察")]),
      _c("img", {
        staticClass: "pic",
        attrs: { src: __webpack_require__(/*! @/assets/bottomLine.png */ "./src/assets/bottomLine.png") },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "item-third" }, [
      _vm._v("重点关注数"),
      _c("br"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "env-inspectors-header" }, [
      _c("div", { staticClass: "env-inspectors-header-avatar" }),
      _c("div", { staticClass: "env-inspectors-header-title" }, [
        _vm._v("办结情况"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "item-sixth" }, [
      _vm._v("已完成整改数"),
      _c("br"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "item-sixth" }, [
      _vm._v("阶段性完成数"),
      _c("br"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "item-sixth" }, [
      _vm._v("正在整改数"),
      _c("br"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "env-inspectors-header" }, [
      _c("div", { staticClass: "env-inspectors-header-avatar" }),
      _c("div", { staticClass: "env-inspectors-header-title" }, [
        _vm._v("正在整改情况"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "item-sixth" }, [
      _vm._v("正在整改数"),
      _c("br"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "item-seventh" }, [
      _vm._v("临近到期（近一个月）"),
      _c("br"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "env-inspectors-header" }, [
      _c("div", { staticClass: "env-inspectors-header-avatar" }),
      _c("div", { staticClass: "env-inspectors-header-title" }, [
        _vm._v("验收情况"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "item-sixth" }, [
      _vm._v("应验收数"),
      _c("br"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "item-sixth" }, [
      _vm._v("自查自验数"),
      _c("br"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "item-sixth" }, [
      _vm._v("市级验收数"),
      _c("br"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "env-inspectors-header" }, [
      _c("div", { staticClass: "env-inspectors-header-avatar" }),
      _c("div", { staticClass: "env-inspectors-header-title" }, [
        _vm._v("重点件验收情况"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "item-sixth" }, [
      _vm._v("应验收数"),
      _c("br"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "item-sixth" }, [
      _vm._v("自查自验数"),
      _c("br"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "item-sixth" }, [
      _vm._v("市级验收数"),
      _c("br"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "item-sixth" }, [
      _vm._v("申请省级验收数"),
      _c("br"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "item-sixth" }, [
      _vm._v("通过省级验收数"),
      _c("br"),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/envInspectors/index.vue?vue&type=style&index=0&id=ff44477c&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/envInspectors/index.vue?vue&type=style&index=0&id=ff44477c&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @/assets/taskbgp.png */ "./src/assets/taskbgp.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".env-inspectors-container[data-v-ff44477c] {\n  width: 100%;\n  background-color: #ffffff;\n}\n.env-inspectors-container .env-inspectors-top[data-v-ff44477c] {\n  width: calc(100% - 22px);\n  height: auto;\n  margin: 10px 0 10px 10px;\n  border-radius: 8px;\n  padding: 8px 10px;\n  box-sizing: border-box;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n}\n.env-inspectors-container .env-inspectors-top .top[data-v-ff44477c] {\n  font-size: 22px;\n  font-weight: 700;\n  color: white;\n}\n.env-inspectors-container .env-inspectors-top .bottom[data-v-ff44477c] {\n  display: flex;\n  text-align: center;\n  align-items: center;\n}\n.env-inspectors-container .env-inspectors-top .bottom .bottomBox[data-v-ff44477c] {\n  width: 100px;\n}\n.env-inspectors-container .env-inspectors-top .bottom .bottomBox .boxTop[data-v-ff44477c] {\n  font-size: 12px;\n  font-weight: 400;\n  color: white;\n}\n.env-inspectors-container .env-inspectors-top .bottom .bottomBox .boxBottom .num[data-v-ff44477c] {\n  font-size: 22px;\n  font-weight: 700;\n  color: white;\n  margin-right: 5px;\n}\n.env-inspectors-container .env-inspectors-top .bottom .bottomBox .boxBottom .text[data-v-ff44477c] {\n  color: white;\n  font-size: 14px;\n}\n.env-inspectors-container .env-inspectors-top .bottom .boxLine[data-v-ff44477c] {\n  height: 15px;\n  align-content: center;\n  opacity: 1;\n  border: 1px solid rgba(255, 255, 255, 0.5);\n}\n.env-inspectors-container .env-inspectors-body[data-v-ff44477c] {\n  background-color: white;\n}\n.env-inspectors-container .env-inspectors-body .env-inspectors-title[data-v-ff44477c] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #25396f;\n  padding: 15px 0 0 20px;\n  box-sizing: border-box;\n  height: 45px;\n}\n.env-inspectors-container .env-inspectors-body .env-inspectors-title .text[data-v-ff44477c] {\n  z-index: 999;\n}\n.env-inspectors-container .env-inspectors-body .env-inspectors-title .pic[data-v-ff44477c] {\n  position: relative;\n  bottom: 18px;\n  opacity: 0.8;\n}\n.env-inspectors-container .env-inspectors-body .env-inspectors-list[data-v-ff44477c] {\n  overflow-y: auto;\n  height: calc(100vh - 220px);\n}\n.env-inspectors-container .env-inspectors-body .env-inspectors-list .env-inspectors-header-first[data-v-ff44477c] {\n  margin-top: 10px;\n  width: 100%;\n  height: 40px;\n  border-radius: 10px;\n  background: linear-gradient(180deg, rgba(73, 156, 251, 0.4) 0%, rgba(72, 156, 251, 0) 100%);\n}\n.env-inspectors-container .env-inspectors-body .env-inspectors-list .env-inspectors-header-first .env-inspectors-header-avatar[data-v-ff44477c] {\n  width: 4px;\n  height: 14px;\n  background: #4361ee;\n  float: left;\n  margin: 13px 5px 13px 20px;\n}\n.env-inspectors-container .env-inspectors-body .env-inspectors-list .env-inspectors-header-first .env-inspectors-header-title[data-v-ff44477c] {\n  float: left;\n  line-height: 40px;\n  font-size: 14px;\n  color: #4361ee;\n}\n.env-inspectors-container .env-inspectors-body .env-inspectors-list .env-inspectors-header-first .env-inspectors-header-time[data-v-ff44477c] {\n  float: right;\n  line-height: 40px;\n  font-size: 12px;\n  color: rgba(7, 20, 40, 0.5);\n  margin-right: 20px;\n}\n.env-inspectors-container .env-inspectors-body .env-inspectors-list .env-inspectors-header[data-v-ff44477c] {\n  width: 100%;\n  height: 40px;\n}\n.env-inspectors-container .env-inspectors-body .env-inspectors-list .env-inspectors-header .env-inspectors-header-avatar[data-v-ff44477c] {\n  width: 4px;\n  height: 14px;\n  background: #4361ee;\n  float: left;\n  margin: 13px 5px 13px 20px;\n}\n.env-inspectors-container .env-inspectors-body .env-inspectors-list .env-inspectors-header .env-inspectors-header-title[data-v-ff44477c] {\n  float: left;\n  line-height: 40px;\n  font-size: 14px;\n  color: #4361ee;\n}\n.env-inspectors-container .env-inspectors-body .env-inspectors-list .env-inspectors-header .env-inspectors-header-time[data-v-ff44477c] {\n  float: right;\n  line-height: 40px;\n  font-size: 12px;\n  color: rgba(7, 20, 40, 0.5);\n  margin-right: 20px;\n}\n.env-inspectors-container .env-inspectors-body .env-inspectors-list .env-inspectors-wrapper[data-v-ff44477c] {\n  width: calc(100% - 22px);\n  height: auto;\n  margin-left: 10px;\n  border-radius: 8px;\n  background: linear-gradient(138.24deg, #e0ecff 0%, rgba(237, 244, 255, 0.8) 100%);\n  border: 1px solid white;\n}\n.env-inspectors-container .env-inspectors-body .env-inspectors-list .env-inspectors-wrapper .env-inspectors-content[data-v-ff44477c] {\n  width: calc(100% - 22px);\n  height: 80px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.env-inspectors-container .env-inspectors-body .env-inspectors-list .env-inspectors-wrapper .env-inspectors-content .env-inspectors-content-item[data-v-ff44477c] {\n  flex: 1;\n  text-align: center;\n}\n.env-inspectors-container .env-inspectors-body .env-inspectors-list .env-inspectors-wrapper .env-inspectors-content .env-inspectors-content-line[data-v-ff44477c] {\n  width: 1px;\n  height: 16px;\n  background-color: rgba(67, 97, 238, 0.2);\n}\n.env-inspectors-container .env-inspectors-body .env-inspectors-list .env-inspectors-wrapper .env-inspectors-content .item-first[data-v-ff44477c] {\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: 0px;\n  line-height: 25.78px;\n  color: #25396f;\n}\n.env-inspectors-container .env-inspectors-body .env-inspectors-list .env-inspectors-wrapper .env-inspectors-content .item-second[data-v-ff44477c] {\n  color: rgba(37, 57, 111, 0.8);\n  margin-left: 10px;\n}\n.env-inspectors-container .env-inspectors-body .env-inspectors-list .env-inspectors-wrapper .env-inspectors-content .item-third[data-v-ff44477c] {\n  font-size: 12px;\n  font-weight: 400;\n  letter-spacing: 0px;\n  line-height: 18px;\n  color: #ff5733;\n}\n.env-inspectors-container .env-inspectors-body .env-inspectors-list .env-inspectors-wrapper .env-inspectors-content .item-fourth[data-v-ff44477c] {\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: 0px;\n  line-height: 31.86px;\n  color: #d43030;\n}\n.env-inspectors-container .env-inspectors-body .env-inspectors-list .env-inspectors-wrapper .env-inspectors-content .item-fifth[data-v-ff44477c] {\n  margin-left: 10px;\n  color: rgba(212, 48, 48, 0.8);\n}\n.env-inspectors-container .env-inspectors-body .env-inspectors-list .env-inspectors-wrapper .env-inspectors-content .item-sixth[data-v-ff44477c] {\n  font-size: 12px;\n  font-weight: 400;\n  letter-spacing: 0px;\n  line-height: 18px;\n  color: rgba(37, 57, 111, 0.5);\n}\n.env-inspectors-container .env-inspectors-body .env-inspectors-list .env-inspectors-wrapper .env-inspectors-content .item-seventh[data-v-ff44477c] {\n  font-size: 12px;\n  font-weight: 400;\n  letter-spacing: 0px;\n  line-height: 18px;\n  color: #ff8d1a;\n}\n.env-inspectors-container .env-inspectors-body .env-inspectors-list .env-inspectors-wrapper .env-inspectors-content .item-eighth[data-v-ff44477c] {\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: 0px;\n  line-height: 31.86px;\n  color: #ff8d1a;\n}\n.env-inspectors-container .env-inspectors-body .env-inspectors-list .env-inspectors-wrapper .env-inspectors-content .item-ninth[data-v-ff44477c] {\n  margin-left: 10px;\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0px;\n  line-height: 31.86px;\n  color: #ff8d1a;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/envInspectors/index.vue?vue&type=style&index=0&id=ff44477c&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/envInspectors/index.vue?vue&type=style&index=0&id=ff44477c&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=ff44477c&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/envInspectors/index.vue?vue&type=style&index=0&id=ff44477c&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("392f255c", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/api/case.js":
/*!*************************!*\
  !*** ./src/api/case.js ***!
  \*************************/
/*! exports provided: querySelectById, discussSelectByCaseId, superviseSelectByCaseId, legalSelectByCaseId, selectByCaseId, punishSelectByCaseId, getHearingByCaseId, stageSelectByCaseId, getUserInfo, getUserList, queryTypeCaseList, addReport, getReportDetail, signReport, countInfo, getAllReport, checkPwd, queryDivision, getSuperBatch, getSuperList, getSuperListDetail, board, countyList, infoList, baseInfo, distribute, handle, final, company, problem, timeGroup, unit, problemList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "querySelectById", function() { return querySelectById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "discussSelectByCaseId", function() { return discussSelectByCaseId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "superviseSelectByCaseId", function() { return superviseSelectByCaseId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "legalSelectByCaseId", function() { return legalSelectByCaseId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectByCaseId", function() { return selectByCaseId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "punishSelectByCaseId", function() { return punishSelectByCaseId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHearingByCaseId", function() { return getHearingByCaseId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stageSelectByCaseId", function() { return stageSelectByCaseId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return getUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserList", function() { return getUserList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryTypeCaseList", function() { return queryTypeCaseList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addReport", function() { return addReport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReportDetail", function() { return getReportDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signReport", function() { return signReport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countInfo", function() { return countInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllReport", function() { return getAllReport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkPwd", function() { return checkPwd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryDivision", function() { return queryDivision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuperBatch", function() { return getSuperBatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuperList", function() { return getSuperList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuperListDetail", function() { return getSuperListDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "board", function() { return board; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countyList", function() { return countyList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoList", function() { return infoList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseInfo", function() { return baseInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distribute", function() { return distribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handle", function() { return handle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "final", function() { return final; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "company", function() { return company; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "problem", function() { return problem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeGroup", function() { return timeGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unit", function() { return unit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "problemList", function() { return problemList; });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./src/api/request.js");

/**
 * 案件详情
 * */

var querySelectById = function querySelectById(id) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/case/selectById/' + id,
    method: 'get'
  });
}; // 集体讨论详情

var discussSelectByCaseId = function discussSelectByCaseId(id) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/discuss/selectByCaseId/' + id,
    method: 'post'
  });
}; // 详情

var superviseSelectByCaseId = function superviseSelectByCaseId(id) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/supervise/selectByCaseId/' + id,
    method: 'get'
  });
}; // 告知详情

var legalSelectByCaseId = function legalSelectByCaseId(id) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/legal/selectByCaseId/' + id,
    method: 'post'
  });
}; // 告知详情

var selectByCaseId = function selectByCaseId(id) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/inform/selectByCaseId/' + id,
    method: 'post'
  });
}; // 详情

var punishSelectByCaseId = function punishSelectByCaseId(id) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/punish/selectByCaseId/' + id,
    method: 'get'
  });
}; // 详情

var getHearingByCaseId = function getHearingByCaseId(id) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/hearing/getHearingByCaseId/' + id,
    method: 'post'
  });
}; // 详情

var stageSelectByCaseId = function stageSelectByCaseId(id) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/stage/selectByCaseId/' + id,
    method: 'post'
  });
}; //根据token获取企业信息

var getUserInfo = function getUserInfo(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/user/getInfo",
    method: "GET",
    params: data
  });
}; //获取用户

var getUserList = function getUserList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/user",
    method: "GET",
    params: data
  });
}; //查看审批子项列表

var queryTypeCaseList = function queryTypeCaseList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/approval/queryAppList",
    method: "GET",
    params: data
  });
}; //新建审批表

var addReport = function addReport(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/approval/ins",
    method: "PUT",
    data: data
  });
}; //获取单个审批表信息

var getReportDetail = function getReportDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/approval",
    method: "GET",
    params: data
  });
}; //签名审批

var signReport = function signReport(data, type) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/approval/sign?type=" + type,
    method: "POST",
    data: data
  });
}; //统计

var countInfo = function countInfo(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/approval/getStat",
    method: "GET",
    params: data
  });
}; //详情

var getAllReport = function getAllReport(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/approval/detail",
    method: "GET",
    params: data
  });
}; //校验密码

var checkPwd = function checkPwd(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/user/checkPwd",
    method: "GET",
    params: data
  });
}; //支队/分局下拉框

var queryDivision = function queryDivision(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/user/div",
    method: "GET"
  });
}; //环保督察-获取批次列表

var getSuperBatch = function getSuperBatch(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/batchList",
    method: "GET",
    params: data
  });
}; //环保督察-获取批次列表

var getSuperList = function getSuperList(info, data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/list",
    method: "POST",
    params: info,
    data: data
  });
}; //环保督察-获取批次列表

var getSuperListDetail = function getSuperListDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/",
    method: "GET",
    params: data
  });
};
function board() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/board",
    method: "get"
  });
}
function countyList(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/board/getCounty",
    method: "get",
    params: params
  });
}
function infoList(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/info/list",
    method: "get",
    params: params
  });
}
function baseInfo(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/info/getById",
    method: "get",
    params: params
  });
}
function distribute(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/info/distribute/" + params,
    method: "get"
  });
}
function handle(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/info/handle/" + params,
    method: "get"
  });
}
function final(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/info/final/" + params,
    method: "get"
  });
}
function company(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/info/qyByInfoId",
    method: "get",
    params: params
  });
}
function problem() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/inspectionIssues",
    method: "get"
  });
}
function timeGroup() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/inspectionIssues/timeGroup",
    method: "get"
  });
}
function unit() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/inspectionIssues/getUnit",
    method: "get"
  });
}
function problemList(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/inspectionIssues/pageList",
    method: "post",
    data: params
  });
}

/***/ }),

/***/ "./src/assets/bottomLine.png":
/*!***********************************!*\
  !*** ./src/assets/bottomLine.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALoAAAAGCAYAAAB0BoT/AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACjSURBVFiF7ZYxDoMwDEWfc0F6I5KxPUbbM2TuzcxQQIRUQhURCchv8reHWF+JY2Hkdlev0AOg5KxzK60b9RpaN+p/6UI9JekGPErCip4U6+m3Dm6h+7koGMalcPCd5pX7aA977DkHe1LouBDf4gWge6ju/SJaXF2SdEPf8mlXl4N7gv33Kr5EAJxN8xGb4Dln90QIU+hUFru5YVwEgU98ip/0AAPMeVu7OnKJAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/hisData.png":
/*!********************************!*\
  !*** ./src/assets/hisData.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFdSURBVFiF7VfRjoMgEBwu+l2HCX8liZrYvzKRfhcmew+luFJBtPUulzhPWtyd6bLMKnDhjyH4jdJWnkk29KWJClD1NAI4VQAEdUNftvynL7Z4P5X8AfMLHBf+GeZToG0LEt95UXQPu5nlkc/rtWMXF1BPlEUOmOFWVAFpCxJN7Hl3/FbFFLMUqpDnAz6R0laCRANKxkmQkErbFw8AAifcA0c+7gpKGtFexEuejFHavi/AJZFHYkPh2cOIN1GiYc1wK6qNplxshW9CVU/jRjMJLzJGf2Ce5A4jszdxEqw6vgKuJG1GuMx4xkCQYWTRmCK28A4W/aItQCIU4NcP+cCGa5rgPiQHmJueUYE1wiUEdc/L+RQEBrEC40srqDtkRGEeLiAjYQO3ZUNftm5v94tg/x5YjmOJ7fKZTEOKkoez4PAwYiLy3qZXyD8iAGBj+QEuxqReXk7D2R84Fz6KH+aVoFeOPBQKAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/taskbgp.png":
/*!********************************!*\
  !*** ./src/assets/taskbgp.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/taskbgp.png";

/***/ }),

/***/ "./src/views/envInspectors/index.vue":
/*!*******************************************!*\
  !*** ./src/views/envInspectors/index.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_ff44477c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=ff44477c&scoped=true& */ "./src/views/envInspectors/index.vue?vue&type=template&id=ff44477c&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/envInspectors/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_ff44477c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=ff44477c&lang=scss&scoped=true& */ "./src/views/envInspectors/index.vue?vue&type=style&index=0&id=ff44477c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_ff44477c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_ff44477c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ff44477c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/envInspectors/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/envInspectors/index.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./src/views/envInspectors/index.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/envInspectors/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/envInspectors/index.vue?vue&type=style&index=0&id=ff44477c&lang=scss&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./src/views/envInspectors/index.vue?vue&type=style&index=0&id=ff44477c&lang=scss&scoped=true& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ff44477c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=ff44477c&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/envInspectors/index.vue?vue&type=style&index=0&id=ff44477c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ff44477c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ff44477c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ff44477c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_ff44477c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/envInspectors/index.vue?vue&type=template&id=ff44477c&scoped=true&":
/*!**************************************************************************************!*\
  !*** ./src/views/envInspectors/index.vue?vue&type=template&id=ff44477c&scoped=true& ***!
  \**************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ff44477c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=ff44477c&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/envInspectors/index.vue?vue&type=template&id=ff44477c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ff44477c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_ff44477c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2Vudkluc3BlY3RvcnMvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9lbnZJbnNwZWN0b3JzL2luZGV4LnZ1ZT8zYjliIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9lbnZJbnNwZWN0b3JzL2luZGV4LnZ1ZT81M2JkIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9lbnZJbnNwZWN0b3JzL2luZGV4LnZ1ZT9jOGQyIiwid2VicGFjazovLy8uL3NyYy9hcGkvY2FzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2JvdHRvbUxpbmUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvaGlzRGF0YS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90YXNrYmdwLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZW52SW5zcGVjdG9ycy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Vudkluc3BlY3RvcnMvaW5kZXgudnVlPzQ0NWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Vudkluc3BlY3RvcnMvaW5kZXgudnVlPzZhMjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Vudkluc3BlY3RvcnMvaW5kZXgudnVlP2YzODQiXSwibmFtZXMiOlsicXVlcnlTZWxlY3RCeUlkIiwiaWQiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiZGlzY3Vzc1NlbGVjdEJ5Q2FzZUlkIiwic3VwZXJ2aXNlU2VsZWN0QnlDYXNlSWQiLCJsZWdhbFNlbGVjdEJ5Q2FzZUlkIiwic2VsZWN0QnlDYXNlSWQiLCJwdW5pc2hTZWxlY3RCeUNhc2VJZCIsImdldEhlYXJpbmdCeUNhc2VJZCIsInN0YWdlU2VsZWN0QnlDYXNlSWQiLCJnZXRVc2VySW5mbyIsImRhdGEiLCJwYXJhbXMiLCJnZXRVc2VyTGlzdCIsInF1ZXJ5VHlwZUNhc2VMaXN0IiwiYWRkUmVwb3J0IiwiZ2V0UmVwb3J0RGV0YWlsIiwic2lnblJlcG9ydCIsInR5cGUiLCJjb3VudEluZm8iLCJnZXRBbGxSZXBvcnQiLCJjaGVja1B3ZCIsInF1ZXJ5RGl2aXNpb24iLCJnZXRTdXBlckJhdGNoIiwiZ2V0U3VwZXJMaXN0IiwiaW5mbyIsImdldFN1cGVyTGlzdERldGFpbCIsImJvYXJkIiwiY291bnR5TGlzdCIsImluZm9MaXN0IiwiYmFzZUluZm8iLCJkaXN0cmlidXRlIiwiaGFuZGxlIiwiZmluYWwiLCJjb21wYW55IiwicHJvYmxlbSIsInRpbWVHcm91cCIsInVuaXQiLCJwcm9ibGVtTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErSkE7QUFFQTtBQUNBLGVBREE7QUFFQSxNQUZBLGtCQUVBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkE7QUFJQSxHQVBBO0FBUUEsU0FSQSxxQkFRQTtBQUNBO0FBQ0E7QUFDQSxHQVhBO0FBWUE7QUFDQSxZQURBLHNCQUNBO0FBQUE7O0FBQ0E7QUFDQTtBQUNBLE9BRkE7QUFHQSxLQUxBO0FBTUEsY0FOQSx3QkFNQTtBQUFBOztBQUNBO0FBQ0E7QUFDQSxPQUZBO0FBR0EsS0FWQTtBQVdBLFVBWEEsb0JBV0E7QUFDQTtBQUNBLDhCQURBO0FBRUE7QUFGQTtBQU1BLEtBbEJBO0FBbUJBLGlCQW5CQSwyQkFtQkE7QUFDQTtBQUNBLEtBckJBO0FBc0JBLFVBdEJBLGtCQXNCQSxJQXRCQSxFQXNCQSxJQXRCQSxFQXNCQTtBQUNBO0FBQ0EsdUJBREE7QUFFQTtBQUNBLG9CQURBO0FBRUE7QUFGQTtBQUZBO0FBT0EsS0E5QkE7QUErQkEsZ0JBL0JBLHdCQStCQSxJQS9CQSxFQStCQSxJQS9CQSxFQStCQTtBQUNBO0FB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Ozs7Ozs7QUM3UEQsaUNBQWlDLG9WOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsNGtCOzs7Ozs7Ozs7OztBQ0FqQyxpQkFBaUIscUJBQXVCLHFCOzs7Ozs7Ozs7Ozs7QUNBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnRztBQUN2QztBQUNMO0FBQ3NDOzs7QUFHMUY7QUFDNkY7QUFDN0YsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLDRGQUFNO0FBQ1IsRUFBRSxxR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBOFIsQ0FBZ0Isc1VBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBbFQ7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvOTEuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBzdHlsZT1cImhlaWdodDogMTAwdmhcIj5cclxuICAgIDx2YW4tbmF2LWJhciB0aXRsZT1cIueOr+S/needo+Wvn1wiIGxlZnQtYXJyb3cgQGNsaWNrLWxlZnQ9XCIkcm91dGVyLmdvKC0xKVwiPlxyXG4gICAgICA8dGVtcGxhdGUgI3JpZ2h0XHJcbiAgICAgICAgPjxpbWcgc3JjPVwiQC9hc3NldHMvaGlzRGF0YS5wbmdcIiBzdHlsZT1cIndpZHRoOiAxOHB4OyBoZWlnaHQ6IDE4cHg7IG1hcmdpbi1yaWdodDogMnB4XCIgQGNsaWNrPVwidG9IaXN0b3J5RGF0YVwiIC8+PHNwYW5cclxuICAgICAgICAgIHN0eWxlPVwiZm9udC13ZWlnaHQ6IG5vcm1hbDsgY29sb3I6IHJnYmEoNjgsIDEyMywgMjUyLCAxKTsgZm9udC1zaXplOiAxMnB4OyB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgY3Vyc29yOiBwb2ludGVyXCJcclxuICAgICAgICAgIEBjbGljaz1cInRvSGlzdG9yeURhdGFcIlxyXG4gICAgICAgICAgPuafpeeci+WOhuWPsuaVsOaNrjwvc3BhblxyXG4gICAgICAgID48L3RlbXBsYXRlXHJcbiAgICAgID5cclxuICAgIDwvdmFuLW5hdi1iYXI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy10b3BcIiBAY2xpY2s9XCJ0b1Rhc2soJycpXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvcFwiPuedo+Wvn+aKpeWRiuaVtOaUueS7u+WKoea4heWNlTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b21cIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3R0b21Cb3hcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveFRvcFwiPuaAu+S7u+WKoeaVsDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94Qm90dG9tXCI+PHNwYW4gY2xhc3M9XCJudW1cIj57e3Byb2JsZW1PYmouc3VtfX08L3NwYW4+PHNwYW4gY2xhc3M9XCJ0ZXh0XCI+5Lu2PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94TGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbUJveFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94VG9wXCI+5pW05pS55LitPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3hCb3R0b21cIj48c3BhbiBjbGFzcz1cIm51bVwiPnt7cHJvYmxlbU9iai51bnJlc29sdmVkfX08L3NwYW4+PHNwYW4gY2xhc3M9XCJ0ZXh0XCI+5Lu2PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94TGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJvdHRvbUJveFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94VG9wXCI+5bey5a6M5oiQPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3hCb3R0b21cIj48c3BhbiBjbGFzcz1cIm51bVwiPnt7cHJvYmxlbU9iai5yZXNvbHZlZH19PC9zcGFuPjxzcGFuIGNsYXNzPVwidGV4dFwiPuS7tjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLWJvZHlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtdGl0bGVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZXh0XCI+5Lit5aSu55Sf5oCB546v5aKD5L+d5oqk552j5a+fPC9kaXY+XHJcbiAgICAgICAgICA8aW1nIGNsYXNzPVwicGljXCIgc3JjPVwiQC9hc3NldHMvYm90dG9tTGluZS5wbmdcIiAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1saXN0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtaGVhZGVyLWZpcnN0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1oZWFkZXItYXZhdGFyXCI+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtaGVhZGVyLXRpdGxlXCI+5o6l5Lu25oC75pWwPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1oZWFkZXItdGltZVwiPjx2YW4taWNvbiBuYW1lPVwicmVwbGF5XCIgLz4g5pWw5o2u5pu05paw77yae3sgYm9hcmRPYmoudGltZSB9fTwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtY29udGVudFwiIEBjbGljaz1cInRvTGlzdCgn552j5a+f5qGI5Lu25oC75pWwJywgJzEnKVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1jb250ZW50LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS1maXJzdFwiPnt7IGJvYXJkT2JqLnN1bSB9fTwvc3BhblxyXG4gICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwiaXRlbS1zZWNvbmRcIj7ku7Y8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLWNvbnRlbnQtbGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1jb250ZW50LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS10aGlyZFwiPumHjeeCueWFs+azqOaVsDxiciAvPjwvc3Bhbj48c3BhbiBjbGFzcz1cIml0ZW0tZm91cnRoXCI+e3sgYm9hcmRPYmouZm9jdXMgfX08L3NwYW5cclxuICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cIml0ZW0tZmlmdGhcIj7ku7Y8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLWhlYWRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtaGVhZGVyLWF2YXRhclwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtaGVhZGVyLXRpdGxlXCI+5Yqe57uT5oOF5Ya1PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy13cmFwcGVyXCIgQGNsaWNrPVwidG9Db21wbGV0aW9uKCflip7nu5Pmg4XlhrUnLCAnMycpXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLWNvbnRlbnQtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpdGVtLXNpeHRoXCI+5bey5a6M5oiQ5pW05pS55pWwPGJyIC8+PC9zcGFuPjxzcGFuIGNsYXNzPVwiaXRlbS1maXJzdFwiPnt7IGJvYXJkT2JqLnJlY3RpZmljYXRpb25Db21wbGV0ZWQgfX08L3NwYW5cclxuICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cIml0ZW0tc2Vjb25kXCI+5Lu2PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1jb250ZW50LWxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtY29udGVudC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIml0ZW0tc2l4dGhcIj7pmLbmrrXmgKflrozmiJDmlbA8YnIgLz48L3NwYW4+PHNwYW4gY2xhc3M9XCJpdGVtLWZpcnN0XCI+e3sgYm9hcmRPYmouc3RhZ2VDb21wbGV0aW9uIH19PC9zcGFuXHJcbiAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJpdGVtLXNlY29uZFwiPuS7tjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtY29udGVudC1saW5lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLWNvbnRlbnQtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpdGVtLXNpeHRoXCI+5q2j5Zyo5pW05pS55pWwPGJyIC8+PC9zcGFuPjxzcGFuIGNsYXNzPVwiaXRlbS1maXJzdFwiPnt7IGJvYXJkT2JqLmluY29tcGxldGVSZWN0aWZpY2F0aW9uIH19PC9zcGFuXHJcbiAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJpdGVtLXNlY29uZFwiPuS7tjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1oZWFkZXItYXZhdGFyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1oZWFkZXItdGl0bGVcIj7mraPlnKjmlbTmlLnmg4XlhrU8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLXdyYXBwZXJcIiBAY2xpY2s9XCJ0b0xpc3QoJ+ato+WcqOaVtOaUueaDheWGtScsICcyJylcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtY29udGVudC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIml0ZW0tc2l4dGhcIj7mraPlnKjmlbTmlLnmlbA8YnIgLz48L3NwYW4+PHNwYW4gY2xhc3M9XCJpdGVtLWZpcnN0XCI+e3sgYm9hcmRPYmouaW5jb21wbGV0ZVJlY3RpZmljYXRpb24gfX08L3NwYW5cclxuICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cIml0ZW0tc2Vjb25kXCI+5Lu2PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1jb250ZW50LWxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtY29udGVudC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIml0ZW0tc2V2ZW50aFwiPuS4tOi/keWIsOacn++8iOi/keS4gOS4quaciO+8iTxiciAvPjwvc3Bhbj48c3BhbiBjbGFzcz1cIml0ZW0tZWlnaHRoXCI+e3sgYm9hcmRPYmoubmVhckV4cGlyYXRpb24gfX08L3NwYW5cclxuICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cIml0ZW0tbmludGhcIj7ku7Y8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1oZWFkZXItYXZhdGFyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1oZWFkZXItdGl0bGVcIj7pqozmlLbmg4XlhrU8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLXdyYXBwZXJcIiBAY2xpY2s9XCJ0b0FjY2VwdGFuY2UoJ+mqjOaUtuaDheWGtScsICc0JylcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtY29udGVudC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIml0ZW0tc2l4dGhcIj7lupTpqozmlLbmlbA8YnIgLz48L3NwYW4+PHNwYW4gY2xhc3M9XCJpdGVtLWZpcnN0XCI+e3sgYm9hcmRPYmouc2hvdWxkQmVBY2NlcHRlZCB9fTwvc3BhblxyXG4gICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwiaXRlbS1zZWNvbmRcIj7ku7Y8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLWNvbnRlbnQtbGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1jb250ZW50LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS1zaXh0aFwiPuiHquafpeiHqumqjOaVsDxiciAvPjwvc3Bhbj48c3BhbiBjbGFzcz1cIml0ZW0tZmlyc3RcIj57eyBib2FyZE9iai5zZWxmSW5zcGVjdGlvbiB9fTwvc3BhblxyXG4gICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwiaXRlbS1zZWNvbmRcIj7ku7Y8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLWNvbnRlbnQtbGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1jb250ZW50LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS1zaXh0aFwiPuW4gue6p+mqjOaUtuaVsDxiciAvPjwvc3Bhbj48c3BhbiBjbGFzcz1cIml0ZW0tZmlyc3RcIj57eyBib2FyZE9iai5tdW5pY2lwYWxMZXZlbCB9fTwvc3BhblxyXG4gICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwiaXRlbS1zZWNvbmRcIj7ku7Y8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1oZWFkZXItYXZhdGFyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1oZWFkZXItdGl0bGVcIj7ph43ngrnku7bpqozmlLbmg4XlhrU8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLXdyYXBwZXJcIiBAY2xpY2s9XCJ0b0ltcG9ydGFudCgn6YeN54K55Lu26aqM5pS25oOF5Ya1JywgJzUnKVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1jb250ZW50LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS1zaXh0aFwiPuW6lOmqjOaUtuaVsDxiciAvPjwvc3Bhbj48c3BhbiBjbGFzcz1cIml0ZW0tZmlyc3RcIj57eyBib2FyZE9iai5mb2N1c1Nob3VsZEJlQWNjZXB0ZWQgfX08L3NwYW5cclxuICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cIml0ZW0tc2Vjb25kXCI+5Lu2PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1jb250ZW50LWxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZW52LWluc3BlY3RvcnMtY29udGVudC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIml0ZW0tc2l4dGhcIj7oh6rmn6Xoh6rpqozmlbA8YnIgLz48L3NwYW4+PHNwYW4gY2xhc3M9XCJpdGVtLWZpcnN0XCI+e3sgYm9hcmRPYmouZm9jdXNTZWxmSW5zcGVjdGlvbiB9fTwvc3BhblxyXG4gICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwiaXRlbS1zZWNvbmRcIj7ku7Y8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLWNvbnRlbnQtbGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1jb250ZW50LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS1zaXh0aFwiPuW4gue6p+mqjOaUtuaVsDxiciAvPjwvc3Bhbj48c3BhbiBjbGFzcz1cIml0ZW0tZmlyc3RcIj57eyBib2FyZE9iai5mb2N1c011bmljaXBhbExldmVsIH19PC9zcGFuXHJcbiAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJpdGVtLXNlY29uZFwiPuS7tjwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLWNvbnRlbnQtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpdGVtLXNpeHRoXCI+55Sz6K+355yB57qn6aqM5pS25pWwPGJyIC8+PC9zcGFuPjxzcGFuIGNsYXNzPVwiaXRlbS1maXJzdFwiPnt7IGJvYXJkT2JqLmFwcGx5UHJvdmluY2VMZXZlbCB9fTwvc3BhblxyXG4gICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwiaXRlbS1zZWNvbmRcIj7ku7Y8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVudi1pbnNwZWN0b3JzLWNvbnRlbnQtbGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlbnYtaW5zcGVjdG9ycy1jb250ZW50LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXRlbS1zaXh0aFwiPumAmui/h+ecgee6p+mqjOaUtuaVsDxiciAvPjwvc3Bhbj48c3BhbiBjbGFzcz1cIml0ZW0tZmlyc3RcIj57eyBib2FyZE9iai5wYXNzUHJvdmluY2VMZXZlbCB9fTwvc3BhblxyXG4gICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwiaXRlbS1zZWNvbmRcIj7ku7Y8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBib2FyZCxwcm9ibGVtIH0gZnJvbSBcIkAvYXBpL2Nhc2VcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcImluZGV4XCIsXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGJvYXJkT2JqOiB7fSxcclxuICAgICAgcHJvYmxlbU9iajp7fVxyXG4gICAgfTtcclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICB0aGlzLmdldEJvYXJkKCk7XHJcbiAgICB0aGlzLmdldFByb2JsZW0oKTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGdldEJvYXJkKCkge1xyXG4gICAgICBib2FyZCgpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMuYm9hcmRPYmogPSByZXMuZGF0YTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0UHJvYmxlbSgpe1xyXG4gICAgICBwcm9ibGVtKCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcm9ibGVtT2JqID0gcmVzLmRhdGE7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHRvVGFzaygpIHtcclxuICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgIG5hbWU6IFwiY29ycmVjdGlvblRhc2tcIixcclxuICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgdG9IaXN0b3J5RGF0YSgpIHtcclxuICAgICAgdGhpcy4kcm91dGVyLnB1c2goXCIvU3VwZXJ2aXNpb25cIik7XHJcbiAgICB9LFxyXG4gICAgdG9MaXN0KHR5cGUsIGRhdGEpIHtcclxuICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgIG5hbWU6IFwiY29tTGlzdFwiLFxyXG4gICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgbHg6IGRhdGEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgdG9Db21wbGV0aW9uKHR5cGUsIGRhdGEpIHtcclxuICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgIG5hbWU6IFwiY29tcGxldGlvblN0YXR1c1wiLFxyXG4gICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgbHg6IGRhdGEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgdG9BY2NlcHRhbmNlKHR5cGUsIGRhdGEpIHtcclxuICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgIG5hbWU6IFwiYWNjZXB0YW5jZVN0YXR1c1wiLFxyXG4gICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgbHg6IGRhdGEsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgdG9JbXBvcnRhbnQodHlwZSwgZGF0YSkge1xyXG4gICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgbmFtZTogXCJpbXBvcnRhbnRTdGF0dXNcIixcclxuICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICAgIGx4OiBkYXRhLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgLy8gaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjVweCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcclxuICAvLyBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIC5lbnYtaW5zcGVjdG9ycy10b3Age1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIycHgpO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG5cclxuICAgIG1hcmdpbjogMTBweCAwIDEwcHggMTBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgIHBhZGRpbmc6IDhweCAxMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC8vIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudChcclxuICAgIC8vICAgMTM5LjU5ZGVnLFxyXG4gICAgLy8gICByZ2JhKDI1MiwgMTYzLCA3MywgMSkgMCUsXHJcbiAgICAvLyAgIHJnYmEoMjU1LCAxODQsIDExMiwgMSkgMTAwJVxyXG4gICAgLy8gKTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIn5AL2Fzc2V0cy90YXNrYmdwLnBuZ1wiKTtcclxuICAgIC50b3Age1xyXG4gICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgfVxyXG4gICAgLmJvdHRvbSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgLmJvdHRvbUJveCB7XHJcbiAgICAgICAgLy8gYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmVkO1xyXG5cclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgLmJveFRvcCB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ib3hCb3R0b20ge1xyXG4gICAgICAgICAgLm51bSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLnRleHQge1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuYm94TGluZSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNXB4O1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAuZW52LWluc3BlY3RvcnMtYm9keSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgLmVudi1pbnNwZWN0b3JzLXRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMSk7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMCAwIDIwcHg7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgLnRleHQge1xyXG4gICAgICAgIHotaW5kZXg6IDk5OTtcclxuICAgICAgfVxyXG4gICAgICAucGljIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgYm90dG9tOiAxOHB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmVudi1pbnNwZWN0b3JzLWxpc3Qge1xyXG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyMjBweCk7XHJcbiAgICAgIC5lbnYtaW5zcGVjdG9ycy1oZWFkZXItZmlyc3Qge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSg3MywgMTU2LCAyNTEsIDAuNCkgMCUsIHJnYmEoNzIsIDE1NiwgMjUxLCAwKSAxMDAlKTtcclxuICAgICAgICAuZW52LWluc3BlY3RvcnMtaGVhZGVyLWF2YXRhciB7XHJcbiAgICAgICAgICB3aWR0aDogNHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg2NywgOTcsIDIzOCwgMSk7XHJcbiAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIG1hcmdpbjogMTNweCA1cHggMTNweCAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZW52LWluc3BlY3RvcnMtaGVhZGVyLXRpdGxlIHtcclxuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSg2NywgOTcsIDIzOCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5lbnYtaW5zcGVjdG9ycy1oZWFkZXItdGltZSB7XHJcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDcsIDIwLCA0MCwgMC41KTtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLmVudi1pbnNwZWN0b3JzLWhlYWRlciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgIC5lbnYtaW5zcGVjdG9ycy1oZWFkZXItYXZhdGFyIHtcclxuICAgICAgICAgIHdpZHRoOiA0cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDY3LCA5NywgMjM4LCAxKTtcclxuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgbWFyZ2luOiAxM3B4IDVweCAxM3B4IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5lbnYtaW5zcGVjdG9ycy1oZWFkZXItdGl0bGUge1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDY3LCA5NywgMjM4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmVudi1pbnNwZWN0b3JzLWhlYWRlci10aW1lIHtcclxuICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoNywgMjAsIDQwLCAwLjUpO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAuZW52LWluc3BlY3RvcnMtd3JhcHBlciB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIycHgpO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDEzOC4yNGRlZywgcmdiYSgyMjQsIDIzNiwgMjU1LCAxKSAwJSwgcmdiYSgyMzcsIDI0NCwgMjU1LCAwLjgpIDEwMCUpO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgLmVudi1pbnNwZWN0b3JzLWNvbnRlbnQge1xyXG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIycHgpO1xyXG4gICAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAuZW52LWluc3BlY3RvcnMtY29udGVudC1pdGVtIHtcclxuICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLmVudi1pbnNwZWN0b3JzLWNvbnRlbnQtbGluZSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NywgOTcsIDIzOCwgMC4yKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pdGVtLWZpcnN0IHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjUuNzhweDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLml0ZW0tc2Vjb25kIHtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDAuOCk7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLml0ZW0tdGhpcmQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDg3LCA1MSwgMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXRlbS1mb3VydGgge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMS44NnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyMTIsIDQ4LCA0OCwgMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXRlbS1maWZ0aCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyMTIsIDQ4LCA0OCwgMC44KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pdGVtLXNpeHRoIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDAuNSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXRlbS1zZXZlbnRoIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAxNDEsIDI2LCAxKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC5pdGVtLWVpZ2h0aCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMxLjg2cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMTQxLCAyNiwgMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAuaXRlbS1uaW50aCB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMS44NnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDE0MSwgMjYsIDEpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG48L3N0eWxlPlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjEwMHZoXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwidmFuLW5hdi1iYXJcIiwge1xuICAgICAgICBhdHRyczogeyB0aXRsZTogXCLnjq/kv53nnaPlr59cIiwgXCJsZWZ0LWFycm93XCI6IFwiXCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcImNsaWNrLWxlZnRcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLmdvKC0xKVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogXCJyaWdodFwiLFxuICAgICAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxOHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIxOHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIFwibWFyZ2luLXJpZ2h0XCI6IFwiMnB4XCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMvaGlzRGF0YS5wbmdcIikgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udG9IaXN0b3J5RGF0YSB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgXCJmb250LXdlaWdodFwiOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoNjgsIDEyMywgMjUyLCAxKVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1kZWNvcmF0aW9uXCI6IFwidW5kZXJsaW5lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS50b0hpc3RvcnlEYXRhIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIuafpeeci+WOhuWPsuaVsOaNrlwiKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSksXG4gICAgICB9KSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW52LWluc3BlY3RvcnMtY29udGFpbmVyXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVudi1pbnNwZWN0b3JzLXRvcFwiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvVGFzayhcIlwiKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wXCIgfSwgW192bS5fdihcIuedo+Wvn+aKpeWRiuaVtOaUueS7u+WKoea4heWNlVwiKV0pLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3R0b21cIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm90dG9tQm94XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94VG9wXCIgfSwgW192bS5fdihcIuaAu+S7u+WKoeaVsFwiKV0pLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94Qm90dG9tXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibnVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5wcm9ibGVtT2JqLnN1bSkpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihcIuS7tlwiKV0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3hMaW5lXCIgfSksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm90dG9tQm94XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94VG9wXCIgfSwgW192bS5fdihcIuaVtOaUueS4rVwiKV0pLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94Qm90dG9tXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibnVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5wcm9ibGVtT2JqLnVucmVzb2x2ZWQpKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtfdm0uX3YoXCLku7ZcIildKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94TGluZVwiIH0pLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJvdHRvbUJveFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveFRvcFwiIH0sIFtfdm0uX3YoXCLlt7LlrozmiJBcIildKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveEJvdHRvbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm51bVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucHJvYmxlbU9iai5yZXNvbHZlZCkpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihcIuS7tlwiKV0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1ib2R5XCIgfSwgW1xuICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVudi1pbnNwZWN0b3JzLWxpc3RcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVudi1pbnNwZWN0b3JzLWhlYWRlci1maXJzdFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1oZWFkZXItYXZhdGFyXCIgfSksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW52LWluc3BlY3RvcnMtaGVhZGVyLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIuaOpeS7tuaAu+aVsFwiKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1oZWFkZXItdGltZVwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2YW4taWNvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwicmVwbGF5XCIgfSB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiDmlbDmja7mm7TmlrDvvJpcIiArIF92bS5fcyhfdm0uYm9hcmRPYmoudGltZSkpLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVudi1pbnNwZWN0b3JzLXdyYXBwZXJcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZW52LWluc3BlY3RvcnMtY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvTGlzdChcIuedo+Wvn+ahiOS7tuaAu+aVsFwiLCBcIjFcIilcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVudi1pbnNwZWN0b3JzLWNvbnRlbnQtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbS1maXJzdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5ib2FyZE9iai5zdW0pKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0tc2Vjb25kXCIgfSwgW192bS5fdihcIuS7tlwiKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVudi1pbnNwZWN0b3JzLWNvbnRlbnQtbGluZVwiIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1jb250ZW50LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbS1mb3VydGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uYm9hcmRPYmouZm9jdXMpKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0tZmlmdGhcIiB9LCBbX3ZtLl92KFwi5Lu2XCIpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZW52LWluc3BlY3RvcnMtd3JhcHBlclwiLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvQ29tcGxldGlvbihcIuWKnue7k+aDheWGtVwiLCBcIjNcIilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW52LWluc3BlY3RvcnMtY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW52LWluc3BlY3RvcnMtY29udGVudC1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX20oMyksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0tZmlyc3RcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uYm9hcmRPYmoucmVjdGlmaWNhdGlvbkNvbXBsZXRlZCkpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbS1zZWNvbmRcIiB9LCBbX3ZtLl92KFwi5Lu2XCIpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW52LWluc3BlY3RvcnMtY29udGVudC1saW5lXCIgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVudi1pbnNwZWN0b3JzLWNvbnRlbnQtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDQpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtLWZpcnN0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmJvYXJkT2JqLnN0YWdlQ29tcGxldGlvbikpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbS1zZWNvbmRcIiB9LCBbX3ZtLl92KFwi5Lu2XCIpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW52LWluc3BlY3RvcnMtY29udGVudC1saW5lXCIgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVudi1pbnNwZWN0b3JzLWNvbnRlbnQtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDUpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtLWZpcnN0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmJvYXJkT2JqLmluY29tcGxldGVSZWN0aWZpY2F0aW9uKSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtLXNlY29uZFwiIH0sIFtfdm0uX3YoXCLku7ZcIildKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl9tKDYpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy13cmFwcGVyXCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udG9MaXN0KFwi5q2j5Zyo5pW05pS55oOF5Ya1XCIsIFwiMlwiKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1jb250ZW50LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbSg3KSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbS1maXJzdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5ib2FyZE9iai5pbmNvbXBsZXRlUmVjdGlmaWNhdGlvbikpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbS1zZWNvbmRcIiB9LCBbX3ZtLl92KFwi5Lu2XCIpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW52LWluc3BlY3RvcnMtY29udGVudC1saW5lXCIgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVudi1pbnNwZWN0b3JzLWNvbnRlbnQtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDgpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtLWVpZ2h0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5ib2FyZE9iai5uZWFyRXhwaXJhdGlvbikpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbS1uaW50aFwiIH0sIFtfdm0uX3YoXCLku7ZcIildKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl9tKDkpLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy13cmFwcGVyXCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udG9BY2NlcHRhbmNlKFwi6aqM5pS25oOF5Ya1XCIsIFwiNFwiKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1jb250ZW50LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbSgxMCksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0tZmlyc3RcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uYm9hcmRPYmouc2hvdWxkQmVBY2NlcHRlZCkpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbS1zZWNvbmRcIiB9LCBbX3ZtLl92KFwi5Lu2XCIpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW52LWluc3BlY3RvcnMtY29udGVudC1saW5lXCIgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVudi1pbnNwZWN0b3JzLWNvbnRlbnQtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDExKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbS1maXJzdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5ib2FyZE9iai5zZWxmSW5zcGVjdGlvbikpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbS1zZWNvbmRcIiB9LCBbX3ZtLl92KFwi5Lu2XCIpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW52LWluc3BlY3RvcnMtY29udGVudC1saW5lXCIgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVudi1pbnNwZWN0b3JzLWNvbnRlbnQtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDEyKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbS1maXJzdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5ib2FyZE9iai5tdW5pY2lwYWxMZXZlbCkpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbS1zZWNvbmRcIiB9LCBbX3ZtLl92KFwi5Lu2XCIpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fbSgxMyksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImVudi1pbnNwZWN0b3JzLXdyYXBwZXJcIixcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS50b0ltcG9ydGFudChcIumHjeeCueS7tumqjOaUtuaDheWGtVwiLCBcIjVcIilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW52LWluc3BlY3RvcnMtY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW52LWluc3BlY3RvcnMtY29udGVudC1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX20oMTQpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtLWZpcnN0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmJvYXJkT2JqLmZvY3VzU2hvdWxkQmVBY2NlcHRlZCkpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbS1zZWNvbmRcIiB9LCBbX3ZtLl92KFwi5Lu2XCIpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW52LWluc3BlY3RvcnMtY29udGVudC1saW5lXCIgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVudi1pbnNwZWN0b3JzLWNvbnRlbnQtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDE1KSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbS1maXJzdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5ib2FyZE9iai5mb2N1c1NlbGZJbnNwZWN0aW9uKSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtLXNlY29uZFwiIH0sIFtfdm0uX3YoXCLku7ZcIildKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1jb250ZW50LWxpbmVcIiB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW52LWluc3BlY3RvcnMtY29udGVudC1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX20oMTYpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtLWZpcnN0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmJvYXJkT2JqLmZvY3VzTXVuaWNpcGFsTGV2ZWwpKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0tc2Vjb25kXCIgfSwgW192bS5fdihcIuS7tlwiKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1jb250ZW50LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbSgxNyksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0tZmlyc3RcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uYm9hcmRPYmouYXBwbHlQcm92aW5jZUxldmVsKSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtLXNlY29uZFwiIH0sIFtfdm0uX3YoXCLku7ZcIildKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1jb250ZW50LWxpbmVcIiB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW52LWluc3BlY3RvcnMtY29udGVudC1pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX20oMTgpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtLWZpcnN0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmJvYXJkT2JqLnBhc3NQcm92aW5jZUxldmVsKSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtLXNlY29uZFwiIH0sIFtfdm0uX3YoXCLku7ZcIildKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy10aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtfdm0uX3YoXCLkuK3lpK7nlJ/mgIHnjq/looPkv53miqTnnaPlr59cIildKSxcbiAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwicGljXCIsXG4gICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL2JvdHRvbUxpbmUucG5nXCIpIH0sXG4gICAgICB9KSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbS10aGlyZFwiIH0sIFtcbiAgICAgIF92bS5fdihcIumHjeeCueWFs+azqOaVsFwiKSxcbiAgICAgIF9jKFwiYnJcIiksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW52LWluc3BlY3RvcnMtaGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1oZWFkZXItYXZhdGFyXCIgfSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVudi1pbnNwZWN0b3JzLWhlYWRlci10aXRsZVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwi5Yqe57uT5oOF5Ya1XCIpLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0tc2l4dGhcIiB9LCBbXG4gICAgICBfdm0uX3YoXCLlt7LlrozmiJDmlbTmlLnmlbBcIiksXG4gICAgICBfYyhcImJyXCIpLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtLXNpeHRoXCIgfSwgW1xuICAgICAgX3ZtLl92KFwi6Zi25q615oCn5a6M5oiQ5pWwXCIpLFxuICAgICAgX2MoXCJiclwiKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbS1zaXh0aFwiIH0sIFtcbiAgICAgIF92bS5fdihcIuato+WcqOaVtOaUueaVsFwiKSxcbiAgICAgIF9jKFwiYnJcIiksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW52LWluc3BlY3RvcnMtaGVhZGVyXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1oZWFkZXItYXZhdGFyXCIgfSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVudi1pbnNwZWN0b3JzLWhlYWRlci10aXRsZVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwi5q2j5Zyo5pW05pS55oOF5Ya1XCIpLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0tc2l4dGhcIiB9LCBbXG4gICAgICBfdm0uX3YoXCLmraPlnKjmlbTmlLnmlbBcIiksXG4gICAgICBfYyhcImJyXCIpLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtLXNldmVudGhcIiB9LCBbXG4gICAgICBfdm0uX3YoXCLkuLTov5HliLDmnJ/vvIjov5HkuIDkuKrmnIjvvIlcIiksXG4gICAgICBfYyhcImJyXCIpLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVudi1pbnNwZWN0b3JzLWhlYWRlclwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW52LWluc3BlY3RvcnMtaGVhZGVyLWF2YXRhclwiIH0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1oZWFkZXItdGl0bGVcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIumqjOaUtuaDheWGtVwiKSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtLXNpeHRoXCIgfSwgW1xuICAgICAgX3ZtLl92KFwi5bqU6aqM5pS25pWwXCIpLFxuICAgICAgX2MoXCJiclwiKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbS1zaXh0aFwiIH0sIFtcbiAgICAgIF92bS5fdihcIuiHquafpeiHqumqjOaVsFwiKSxcbiAgICAgIF9jKFwiYnJcIiksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0tc2l4dGhcIiB9LCBbXG4gICAgICBfdm0uX3YoXCLluILnuqfpqozmlLbmlbBcIiksXG4gICAgICBfYyhcImJyXCIpLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImVudi1pbnNwZWN0b3JzLWhlYWRlclwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZW52LWluc3BlY3RvcnMtaGVhZGVyLWF2YXRhclwiIH0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJlbnYtaW5zcGVjdG9ycy1oZWFkZXItdGl0bGVcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIumHjeeCueS7tumqjOaUtuaDheWGtVwiKSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtLXNpeHRoXCIgfSwgW1xuICAgICAgX3ZtLl92KFwi5bqU6aqM5pS25pWwXCIpLFxuICAgICAgX2MoXCJiclwiKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbS1zaXh0aFwiIH0sIFtcbiAgICAgIF92bS5fdihcIuiHquafpeiHqumqjOaVsFwiKSxcbiAgICAgIF9jKFwiYnJcIiksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIml0ZW0tc2l4dGhcIiB9LCBbXG4gICAgICBfdm0uX3YoXCLluILnuqfpqozmlLbmlbBcIiksXG4gICAgICBfYyhcImJyXCIpLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpdGVtLXNpeHRoXCIgfSwgW1xuICAgICAgX3ZtLl92KFwi55Sz6K+355yB57qn6aqM5pS25pWwXCIpLFxuICAgICAgX2MoXCJiclwiKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaXRlbS1zaXh0aFwiIH0sIFtcbiAgICAgIF92bS5fdihcIumAmui/h+ecgee6p+mqjOaUtuaVsFwiKSxcbiAgICAgIF9jKFwiYnJcIiksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCJAL2Fzc2V0cy90YXNrYmdwLnBuZ1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lcltkYXRhLXYtZmY0NDQ3N2NdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAuZW52LWluc3BlY3RvcnMtdG9wW2RhdGEtdi1mZjQ0NDc3Y10ge1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIycHgpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luOiAxMHB4IDAgMTBweCAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbiAgcGFkZGluZzogOHB4IDEwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAuZW52LWluc3BlY3RvcnMtdG9wIC50b3BbZGF0YS12LWZmNDQ0NzdjXSB7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uZW52LWluc3BlY3RvcnMtY29udGFpbmVyIC5lbnYtaW5zcGVjdG9ycy10b3AgLmJvdHRvbVtkYXRhLXYtZmY0NDQ3N2NdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZW52LWluc3BlY3RvcnMtY29udGFpbmVyIC5lbnYtaW5zcGVjdG9ycy10b3AgLmJvdHRvbSAuYm90dG9tQm94W2RhdGEtdi1mZjQ0NDc3Y10ge1xcbiAgd2lkdGg6IDEwMHB4O1xcbn1cXG4uZW52LWluc3BlY3RvcnMtY29udGFpbmVyIC5lbnYtaW5zcGVjdG9ycy10b3AgLmJvdHRvbSAuYm90dG9tQm94IC5ib3hUb3BbZGF0YS12LWZmNDQ0NzdjXSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG4uZW52LWluc3BlY3RvcnMtY29udGFpbmVyIC5lbnYtaW5zcGVjdG9ycy10b3AgLmJvdHRvbSAuYm90dG9tQm94IC5ib3hCb3R0b20gLm51bVtkYXRhLXYtZmY0NDQ3N2NdIHtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogd2hpdGU7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAuZW52LWluc3BlY3RvcnMtdG9wIC5ib3R0b20gLmJvdHRvbUJveCAuYm94Qm90dG9tIC50ZXh0W2RhdGEtdi1mZjQ0NDc3Y10ge1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uZW52LWluc3BlY3RvcnMtY29udGFpbmVyIC5lbnYtaW5zcGVjdG9ycy10b3AgLmJvdHRvbSAuYm94TGluZVtkYXRhLXYtZmY0NDQ3N2NdIHtcXG4gIGhlaWdodDogMTVweDtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG9wYWNpdHk6IDE7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxufVxcbi5lbnYtaW5zcGVjdG9ycy1jb250YWluZXIgLmVudi1pbnNwZWN0b3JzLWJvZHlbZGF0YS12LWZmNDQ0NzdjXSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAuZW52LWluc3BlY3RvcnMtYm9keSAuZW52LWluc3BlY3RvcnMtdGl0bGVbZGF0YS12LWZmNDQ0NzdjXSB7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6ICMyNTM5NmY7XFxuICBwYWRkaW5nOiAxNXB4IDAgMCAyMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGhlaWdodDogNDVweDtcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAuZW52LWluc3BlY3RvcnMtYm9keSAuZW52LWluc3BlY3RvcnMtdGl0bGUgLnRleHRbZGF0YS12LWZmNDQ0NzdjXSB7XFxuICB6LWluZGV4OiA5OTk7XFxufVxcbi5lbnYtaW5zcGVjdG9ycy1jb250YWluZXIgLmVudi1pbnNwZWN0b3JzLWJvZHkgLmVudi1pbnNwZWN0b3JzLXRpdGxlIC5waWNbZGF0YS12LWZmNDQ0NzdjXSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3R0b206IDE4cHg7XFxuICBvcGFjaXR5OiAwLjg7XFxufVxcbi5lbnYtaW5zcGVjdG9ycy1jb250YWluZXIgLmVudi1pbnNwZWN0b3JzLWJvZHkgLmVudi1pbnNwZWN0b3JzLWxpc3RbZGF0YS12LWZmNDQ0NzdjXSB7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjIwcHgpO1xcbn1cXG4uZW52LWluc3BlY3RvcnMtY29udGFpbmVyIC5lbnYtaW5zcGVjdG9ycy1ib2R5IC5lbnYtaW5zcGVjdG9ycy1saXN0IC5lbnYtaW5zcGVjdG9ycy1oZWFkZXItZmlyc3RbZGF0YS12LWZmNDQ0NzdjXSB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSg3MywgMTU2LCAyNTEsIDAuNCkgMCUsIHJnYmEoNzIsIDE1NiwgMjUxLCAwKSAxMDAlKTtcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAuZW52LWluc3BlY3RvcnMtYm9keSAuZW52LWluc3BlY3RvcnMtbGlzdCAuZW52LWluc3BlY3RvcnMtaGVhZGVyLWZpcnN0IC5lbnYtaW5zcGVjdG9ycy1oZWFkZXItYXZhdGFyW2RhdGEtdi1mZjQ0NDc3Y10ge1xcbiAgd2lkdGg6IDRweDtcXG4gIGhlaWdodDogMTRweDtcXG4gIGJhY2tncm91bmQ6ICM0MzYxZWU7XFxuICBmbG9hdDogbGVmdDtcXG4gIG1hcmdpbjogMTNweCA1cHggMTNweCAyMHB4O1xcbn1cXG4uZW52LWluc3BlY3RvcnMtY29udGFpbmVyIC5lbnYtaW5zcGVjdG9ycy1ib2R5IC5lbnYtaW5zcGVjdG9ycy1saXN0IC5lbnYtaW5zcGVjdG9ycy1oZWFkZXItZmlyc3QgLmVudi1pbnNwZWN0b3JzLWhlYWRlci10aXRsZVtkYXRhLXYtZmY0NDQ3N2NdIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogIzQzNjFlZTtcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAuZW52LWluc3BlY3RvcnMtYm9keSAuZW52LWluc3BlY3RvcnMtbGlzdCAuZW52LWluc3BlY3RvcnMtaGVhZGVyLWZpcnN0IC5lbnYtaW5zcGVjdG9ycy1oZWFkZXItdGltZVtkYXRhLXYtZmY0NDQ3N2NdIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IHJnYmEoNywgMjAsIDQwLCAwLjUpO1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG4uZW52LWluc3BlY3RvcnMtY29udGFpbmVyIC5lbnYtaW5zcGVjdG9ycy1ib2R5IC5lbnYtaW5zcGVjdG9ycy1saXN0IC5lbnYtaW5zcGVjdG9ycy1oZWFkZXJbZGF0YS12LWZmNDQ0NzdjXSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDBweDtcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAuZW52LWluc3BlY3RvcnMtYm9keSAuZW52LWluc3BlY3RvcnMtbGlzdCAuZW52LWluc3BlY3RvcnMtaGVhZGVyIC5lbnYtaW5zcGVjdG9ycy1oZWFkZXItYXZhdGFyW2RhdGEtdi1mZjQ0NDc3Y10ge1xcbiAgd2lkdGg6IDRweDtcXG4gIGhlaWdodDogMTRweDtcXG4gIGJhY2tncm91bmQ6ICM0MzYxZWU7XFxuICBmbG9hdDogbGVmdDtcXG4gIG1hcmdpbjogMTNweCA1cHggMTNweCAyMHB4O1xcbn1cXG4uZW52LWluc3BlY3RvcnMtY29udGFpbmVyIC5lbnYtaW5zcGVjdG9ycy1ib2R5IC5lbnYtaW5zcGVjdG9ycy1saXN0IC5lbnYtaW5zcGVjdG9ycy1oZWFkZXIgLmVudi1pbnNwZWN0b3JzLWhlYWRlci10aXRsZVtkYXRhLXYtZmY0NDQ3N2NdIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogIzQzNjFlZTtcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAuZW52LWluc3BlY3RvcnMtYm9keSAuZW52LWluc3BlY3RvcnMtbGlzdCAuZW52LWluc3BlY3RvcnMtaGVhZGVyIC5lbnYtaW5zcGVjdG9ycy1oZWFkZXItdGltZVtkYXRhLXYtZmY0NDQ3N2NdIHtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IHJnYmEoNywgMjAsIDQwLCAwLjUpO1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG4uZW52LWluc3BlY3RvcnMtY29udGFpbmVyIC5lbnYtaW5zcGVjdG9ycy1ib2R5IC5lbnYtaW5zcGVjdG9ycy1saXN0IC5lbnYtaW5zcGVjdG9ycy13cmFwcGVyW2RhdGEtdi1mZjQ0NDc3Y10ge1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIycHgpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM4LjI0ZGVnLCAjZTBlY2ZmIDAlLCByZ2JhKDIzNywgMjQ0LCAyNTUsIDAuOCkgMTAwJSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAuZW52LWluc3BlY3RvcnMtYm9keSAuZW52LWluc3BlY3RvcnMtbGlzdCAuZW52LWluc3BlY3RvcnMtd3JhcHBlciAuZW52LWluc3BlY3RvcnMtY29udGVudFtkYXRhLXYtZmY0NDQ3N2NdIHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMnB4KTtcXG4gIGhlaWdodDogODBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZW52LWluc3BlY3RvcnMtY29udGFpbmVyIC5lbnYtaW5zcGVjdG9ycy1ib2R5IC5lbnYtaW5zcGVjdG9ycy1saXN0IC5lbnYtaW5zcGVjdG9ycy13cmFwcGVyIC5lbnYtaW5zcGVjdG9ycy1jb250ZW50IC5lbnYtaW5zcGVjdG9ycy1jb250ZW50LWl0ZW1bZGF0YS12LWZmNDQ0NzdjXSB7XFxuICBmbGV4OiAxO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZW52LWluc3BlY3RvcnMtY29udGFpbmVyIC5lbnYtaW5zcGVjdG9ycy1ib2R5IC5lbnYtaW5zcGVjdG9ycy1saXN0IC5lbnYtaW5zcGVjdG9ycy13cmFwcGVyIC5lbnYtaW5zcGVjdG9ycy1jb250ZW50IC5lbnYtaW5zcGVjdG9ycy1jb250ZW50LWxpbmVbZGF0YS12LWZmNDQ0NzdjXSB7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg2NywgOTcsIDIzOCwgMC4yKTtcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAuZW52LWluc3BlY3RvcnMtYm9keSAuZW52LWluc3BlY3RvcnMtbGlzdCAuZW52LWluc3BlY3RvcnMtd3JhcHBlciAuZW52LWluc3BlY3RvcnMtY29udGVudCAuaXRlbS1maXJzdFtkYXRhLXYtZmY0NDQ3N2NdIHtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI1Ljc4cHg7XFxuICBjb2xvcjogIzI1Mzk2ZjtcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAuZW52LWluc3BlY3RvcnMtYm9keSAuZW52LWluc3BlY3RvcnMtbGlzdCAuZW52LWluc3BlY3RvcnMtd3JhcHBlciAuZW52LWluc3BlY3RvcnMtY29udGVudCAuaXRlbS1zZWNvbmRbZGF0YS12LWZmNDQ0NzdjXSB7XFxuICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMC44KTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG4uZW52LWluc3BlY3RvcnMtY29udGFpbmVyIC5lbnYtaW5zcGVjdG9ycy1ib2R5IC5lbnYtaW5zcGVjdG9ycy1saXN0IC5lbnYtaW5zcGVjdG9ycy13cmFwcGVyIC5lbnYtaW5zcGVjdG9ycy1jb250ZW50IC5pdGVtLXRoaXJkW2RhdGEtdi1mZjQ0NDc3Y10ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIGNvbG9yOiAjZmY1NzMzO1xcbn1cXG4uZW52LWluc3BlY3RvcnMtY29udGFpbmVyIC5lbnYtaW5zcGVjdG9ycy1ib2R5IC5lbnYtaW5zcGVjdG9ycy1saXN0IC5lbnYtaW5zcGVjdG9ycy13cmFwcGVyIC5lbnYtaW5zcGVjdG9ycy1jb250ZW50IC5pdGVtLWZvdXJ0aFtkYXRhLXYtZmY0NDQ3N2NdIHtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDMxLjg2cHg7XFxuICBjb2xvcjogI2Q0MzAzMDtcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAuZW52LWluc3BlY3RvcnMtYm9keSAuZW52LWluc3BlY3RvcnMtbGlzdCAuZW52LWluc3BlY3RvcnMtd3JhcHBlciAuZW52LWluc3BlY3RvcnMtY29udGVudCAuaXRlbS1maWZ0aFtkYXRhLXYtZmY0NDQ3N2NdIHtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgY29sb3I6IHJnYmEoMjEyLCA0OCwgNDgsIDAuOCk7XFxufVxcbi5lbnYtaW5zcGVjdG9ycy1jb250YWluZXIgLmVudi1pbnNwZWN0b3JzLWJvZHkgLmVudi1pbnNwZWN0b3JzLWxpc3QgLmVudi1pbnNwZWN0b3JzLXdyYXBwZXIgLmVudi1pbnNwZWN0b3JzLWNvbnRlbnQgLml0ZW0tc2l4dGhbZGF0YS12LWZmNDQ0NzdjXSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDAuNSk7XFxufVxcbi5lbnYtaW5zcGVjdG9ycy1jb250YWluZXIgLmVudi1pbnNwZWN0b3JzLWJvZHkgLmVudi1pbnNwZWN0b3JzLWxpc3QgLmVudi1pbnNwZWN0b3JzLXdyYXBwZXIgLmVudi1pbnNwZWN0b3JzLWNvbnRlbnQgLml0ZW0tc2V2ZW50aFtkYXRhLXYtZmY0NDQ3N2NdIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICBjb2xvcjogI2ZmOGQxYTtcXG59XFxuLmVudi1pbnNwZWN0b3JzLWNvbnRhaW5lciAuZW52LWluc3BlY3RvcnMtYm9keSAuZW52LWluc3BlY3RvcnMtbGlzdCAuZW52LWluc3BlY3RvcnMtd3JhcHBlciAuZW52LWluc3BlY3RvcnMtY29udGVudCAuaXRlbS1laWdodGhbZGF0YS12LWZmNDQ0NzdjXSB7XFxuICBmb250LXNpemU6IDIycHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcXG4gIGxpbmUtaGVpZ2h0OiAzMS44NnB4O1xcbiAgY29sb3I6ICNmZjhkMWE7XFxufVxcbi5lbnYtaW5zcGVjdG9ycy1jb250YWluZXIgLmVudi1pbnNwZWN0b3JzLWJvZHkgLmVudi1pbnNwZWN0b3JzLWxpc3QgLmVudi1pbnNwZWN0b3JzLXdyYXBwZXIgLmVudi1pbnNwZWN0b3JzLWNvbnRlbnQgLml0ZW0tbmludGhbZGF0YS12LWZmNDQ0NzdjXSB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDMxLjg2cHg7XFxuICBjb2xvcjogI2ZmOGQxYTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mZjQ0NDc3YyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjM5MmYyNTVjXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZmY0NDQ3N2MmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mZjQ0NDc3YyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcclxuXHJcbi8qKlxyXG4gKiDmoYjku7bor6bmg4VcclxuICogKi9cclxuZXhwb3J0IGNvbnN0IHF1ZXJ5U2VsZWN0QnlJZCA9KGlkKT0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBpL2Nhc2Uvc2VsZWN0QnlJZC8nK2lkLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICB9KVxyXG59XHJcbi8vIOmbhuS9k+iuqOiuuuivpuaDhVxyXG5leHBvcnQgY29uc3QgZGlzY3Vzc1NlbGVjdEJ5Q2FzZUlkID0gKGlkKSA9PntcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBpL2Rpc2N1c3Mvc2VsZWN0QnlDYXNlSWQvJytpZCxcclxuICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gIH0pXHJcbn07XHJcbi8vIOivpuaDhVxyXG5leHBvcnQgY29uc3Qgc3VwZXJ2aXNlU2VsZWN0QnlDYXNlSWQgPSAoaWQpID0+e1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcGkvc3VwZXJ2aXNlL3NlbGVjdEJ5Q2FzZUlkLycraWQsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gIH0pXHJcbn07XHJcbi8vIOWRiuefpeivpuaDhVxyXG5leHBvcnQgY29uc3QgbGVnYWxTZWxlY3RCeUNhc2VJZCA9IChpZCkgPT57XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwaS9sZWdhbC9zZWxlY3RCeUNhc2VJZC8nK2lkLFxyXG4gICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgfSlcclxufTtcclxuLy8g5ZGK55+l6K+m5oOFXHJcbmV4cG9ydCBjb25zdCBzZWxlY3RCeUNhc2VJZCA9IChpZCkgPT57XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwaS9pbmZvcm0vc2VsZWN0QnlDYXNlSWQvJytpZCxcclxuICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gIH0pXHJcbn07XHJcbi8vIOivpuaDhVxyXG5leHBvcnQgY29uc3QgcHVuaXNoU2VsZWN0QnlDYXNlSWQgPSAoaWQpID0+e1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcGkvcHVuaXNoL3NlbGVjdEJ5Q2FzZUlkLycraWQsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gIH0pXHJcbn07XHJcbi8vIOivpuaDhVxyXG5leHBvcnQgY29uc3QgZ2V0SGVhcmluZ0J5Q2FzZUlkID0gKGlkKSA9PntcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBpL2hlYXJpbmcvZ2V0SGVhcmluZ0J5Q2FzZUlkLycraWQsXHJcbiAgICBtZXRob2Q6ICdwb3N0JyxcclxuICB9KVxyXG59O1xyXG4vLyDor6bmg4VcclxuZXhwb3J0IGNvbnN0IHN0YWdlU2VsZWN0QnlDYXNlSWQgPSAoaWQpID0+e1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcGkvc3RhZ2Uvc2VsZWN0QnlDYXNlSWQvJytpZCxcclxuICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gIH0pXHJcbn07XHJcblxyXG4vL+agueaNrnRva2Vu6I635Y+W5LyB5Lia5L+h5oGvXHJcbmV4cG9ydCBjb25zdCBnZXRVc2VySW5mbyA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS91c2VyL2dldEluZm9cIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/ojrflj5bnlKjmiLdcclxuZXhwb3J0IGNvbnN0IGdldFVzZXJMaXN0ID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL3JhL3VzZXJcIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/mn6XnnIvlrqHmibnlrZDpobnliJfooahcclxuZXhwb3J0IGNvbnN0IHF1ZXJ5VHlwZUNhc2VMaXN0ID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL3JhL2FwcHJvdmFsL3F1ZXJ5QXBwTGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4vL+aWsOW7uuWuoeaJueihqFxyXG5leHBvcnQgY29uc3QgYWRkUmVwb3J0ID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL3JhL2FwcHJvdmFsL2luc1wiLFxyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/ojrflj5bljZXkuKrlrqHmibnooajkv6Hmga9cclxuZXhwb3J0IGNvbnN0IGdldFJlcG9ydERldGFpbCA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS9hcHByb3ZhbFwiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4vL+etvuWQjeWuoeaJuVxyXG5leHBvcnQgY29uc3Qgc2lnblJlcG9ydCA9IChkYXRhLHR5cGUpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL3JhL2FwcHJvdmFsL3NpZ24/dHlwZT1cIit0eXBlLFxyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v57uf6K6hXHJcbmV4cG9ydCBjb25zdCBjb3VudEluZm8gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvYXBwcm92YWwvZ2V0U3RhdFwiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4vL+ivpuaDhVxyXG5leHBvcnQgY29uc3QgZ2V0QWxsUmVwb3J0ID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL3JhL2FwcHJvdmFsL2RldGFpbFwiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4vL+agoemqjOWvhueggVxyXG5leHBvcnQgY29uc3QgY2hlY2tQd2QgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvdXNlci9jaGVja1B3ZFwiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4vL+aUr+mYny/liIblsYDkuIvmi4nmoYZcclxuZXhwb3J0IGNvbnN0IHF1ZXJ5RGl2aXNpb24gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvdXNlci9kaXZcIixcclxuICAgIG1ldGhvZDogXCJHRVRcIlxyXG4gIH0pO1xyXG59O1xyXG4vL+eOr+S/needo+Wvny3ojrflj5bmibnmrKHliJfooahcclxuZXhwb3J0IGNvbnN0IGdldFN1cGVyQmF0Y2ggPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvYmF0Y2hMaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v546v5L+d552j5a+fLeiOt+WPluaJueasoeWIl+ihqFxyXG5leHBvcnQgY29uc3QgZ2V0U3VwZXJMaXN0ID0gKGluZm8sZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvbGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIHBhcmFtczogaW5mbyxcclxuICAgIGRhdGEgOiBkYXRhXHJcbiAgfSk7XHJcbn07XHJcbi8v546v5L+d552j5a+fLeiOt+WPluaJueasoeWIl+ihqFxyXG5leHBvcnQgY29uc3QgZ2V0U3VwZXJMaXN0RGV0YWlsID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL1wiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhXHJcbiAgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYm9hcmQoKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9ib2FyZFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY291bnR5TGlzdChwYXJhbXMpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2JvYXJkL2dldENvdW50eVwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBwYXJhbXMsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbmZvTGlzdChwYXJhbXMpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luZm8vbGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBwYXJhbXMsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBiYXNlSW5mbyhwYXJhbXMpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luZm8vZ2V0QnlJZFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBwYXJhbXMsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkaXN0cmlidXRlKHBhcmFtcykge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5mby9kaXN0cmlidXRlL1wiICsgcGFyYW1zLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaGFuZGxlKHBhcmFtcykge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5mby9oYW5kbGUvXCIgKyBwYXJhbXMsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5hbChwYXJhbXMpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luZm8vZmluYWwvXCIgKyBwYXJhbXMsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb21wYW55KHBhcmFtcykge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5mby9xeUJ5SW5mb0lkXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IHBhcmFtcyxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByb2JsZW0oKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbnNwZWN0aW9uSXNzdWVzXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0aW1lR3JvdXAoKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbnNwZWN0aW9uSXNzdWVzL3RpbWVHcm91cFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdW5pdCgpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luc3BlY3Rpb25Jc3N1ZXMvZ2V0VW5pdFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJvYmxlbUxpc3QocGFyYW1zKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbnNwZWN0aW9uSXNzdWVzL3BhZ2VMaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogcGFyYW1zLFxyXG4gIH0pO1xyXG59XHJcblxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFMb0FBQUFHQ0FZQUFBQjBCb1QvQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBQ2pTVVJCVkZpRjdaWXhEb013REVXZmMwRjZJNUt4UFViYk0yVHV6Y3hRUUlSVVFoVVJDY2h2OHJlSFdGK0pZMkhrZGxldjBBT2c1S3h6SzYwYjlScGFOK3AvNlVJOUpla0dQRXJDaXA0VTYrbTNEbTZoKzdrb0dNYWxjUENkNXBYN2FBOTc3RGtIZTFMb3VCRGY0Z1dnZTZqdS9TSmFYRjJTZEVQZjhtbFhsNE43Z3YzM0tyNUVBSnhOOHhHYjREbG45MFFJVStoVUZydTVZVndFZ1U5OGlwLzBBQVBNZVZ1N09uS0pBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDQUFBQUFnQ0FZQUFBQnplbnIwQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBRmRTVVJCVkZpRjdWZlJqb01nRUJ3dStsMkhDWDhsaVpyWXZ6S1JmaGNtZXcrbHVGSkJ0UFV1bHpoUFd0eWQ2YkxNS25EaGp5SDRqZEpXbmtrMjlLV0pDbEQxTkFJNFZRQUVkVU5mdHZ5bkw3WjRQNVg4QWZNTEhCZitHZVpUb0cwTEV0OTVVWFFQdTVubGtjL3J0V01YRjFCUGxFVU9tT0ZXVkFGcEN4Sk43SGwzL0ZiRkZMTVVxcERuQXo2UjBsYUNSQU5LeGttUWtFcmJGdzhBQWlmY0EwYys3Z3BLR3RGZXhFdWVqRkhhdmkvQUpaRkhZa1BoMmNPSU4xR2lZYzF3SzZxTnBseHNoVzlDVlUvalJqTUpMekpHZjJDZTVBNGpzemR4RXF3NnZnS3VKRzFHdU14NHhrQ1FZV1RSbUNLMjhBNFcvYUl0UUNJVTROY1ArY0NHYTVyZ1BpUUhtSnVlVVlFMXdpVUVkYy9MK1JRRUJyRUM0MHNycUR0a1JHRWVMaUFqWVFPM1pVTmZ0bTV2OTR0Zy94NVlqbU9KN2ZLWlRFT0trb2V6NFBBd1lpTHkzcVpYeUQ4aUFHQmorUUV1eHFSZVhrN0QyUjg0Rno2S0grYVZvRmVPUEJRS0FBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy90YXNrYmdwLnBuZ1wiOyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWZmNDQ0NzdjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWZmNDQ0NzdjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZmY0NDQ3N2NcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZmY0NDQ3N2MnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZmY0NDQ3N2MnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZmY0NDQ3N2MnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mZjQ0NDc3YyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdmZjQ0NDc3YycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL2Vudkluc3BlY3RvcnMvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZmY0NDQ3N2MmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmY0NDQ3N2Mmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9