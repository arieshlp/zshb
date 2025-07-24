(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/inHand/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/inHand/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "MineClue",
  data: function data() {
    return {
      navTitle: '待办事项',
      searchKeyword: '',
      tabArr: ['待处理', '已处理'],
      activeIndex: 0,
      loading: false,
      clueList: [],
      showCheck: false,
      title: '',
      clueId: '',
      btnLoading: false
    };
  },
  mounted: function mounted() {
    this.queryMineClues();
  },
  methods: {
    onChangeTab: function onChangeTab(idx) {
      this.activeIndex = idx;
      this.queryMineClues();
    },
    queryMineClues: function queryMineClues() {
      var _this = this;

      return Object(D_helipingWork_APP_kmEnvPortable_webappMock_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var type, response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                type = _this.activeIndex === 0 ? '待处理' : '已处理';
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_3___default.a.post('/zshb/queryInHandList', {
                  type: type
                });

              case 3:
                response = _context.sent;

                if (response.data.code === 200) {
                  _this.clueList = response.data.data;
                } else {
                  Object(vant__WEBPACK_IMPORTED_MODULE_2__["Toast"])(response.data.message);
                }

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getStyleColor: function getStyleColor(state) {
      if (state === '待填写') {
        return 'background: rgba(244, 131, 0, 0.1);color:rgba(244, 131, 0, 1);';
      } else if (state === '待审核' || state === '待审批' || state === '待分发' || state === '待核实' || state === '待处理') {
        return 'background: rgba(255, 141, 26, 0.1);color:rgba(255, 141, 26, 1);';
      } else if (state === '待办结') {
        return 'background: rgba(227, 218, 0, 0.1);color:rgba(227, 218, 0, 1);';
      } else if (state === '已办结' || state === '已处理') {
        return 'background: rgba(2, 217, 127, 0.1);color:rgba(2, 217, 127, 1);';
      }
    },
    // ============================ 处理
    dealData: function dealData(data) {
      this.clueId = data.id;
      this.opinion = '';
      this.showCheck = true;
      this.title = '处理';
    },
    //提交
    onSureCheck: function onSureCheck() {
      this.showCheck = false;

      for (var i = 0; i < this.clueList.length; i++) {
        if (this.clueList[i].id === this.clueId) {
          this.clueList[i].status = '已处理';
        }
      } // this.activeIndex = 1;
      // this.queryMineClues();

    },
    // ======================== 详情
    toDetail: function toDetail(item) {
      var title = '待办详情';
      this.$router.push({
        name: 'inHandDetail',
        params: {
          flag: title,
          clueId: item.id
        }
      });
    },
    goSearch: function goSearch() {
      this.show = true;
    },
    onSearch: function onSearch() {
      this.queryMineClues();
      this.show = false;
    },
    //跳转待办应用
    goToHandleList: function goToHandleList() {
      this.$router.push({
        name: 'inHandApply',
        params: {}
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"9d17f796-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/inHand/index.vue?vue&type=template&id=243897d1&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9d17f796-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/inHand/index.vue?vue&type=template&id=243897d1&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        attrs: { title: _vm.navTitle, "left-arrow": "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
      }),
      _vm.loading
        ? _c(
            "van-loading",
            {
              staticStyle: { "margin-top": "50%" },
              attrs: { size: "24px", color: "#0094ff", vertical: "" },
            },
            [_vm._v("加载中...")]
          )
        : _vm._e(),
      _vm.loading === false
        ? _c(
            "div",
            { staticClass: "list-wrapper" },
            _vm._l(_vm.clueList, function (item) {
              return _c("div", { staticClass: "clue-wrapper" }, [
                _c(
                  "div",
                  {
                    staticClass: "clue-wrapper-item",
                    on: {
                      click: function ($event) {
                        return _vm.toDetail(item)
                      },
                    },
                  },
                  [
                    _vm._m(0, true),
                    _c("div", { staticClass: "title_time" }, [
                      _c(
                        "span",
                        {
                          staticClass: "state",
                          style: _vm.getStyleColor(item.status),
                        },
                        [_vm._v(_vm._s(item.status))]
                      ),
                      _c("span", [
                        _vm._v("填报时间：" + _vm._s(item.create_time)),
                      ]),
                    ]),
                    _c("div", { staticClass: "title" }, [
                      _c("span", [_vm._v(_vm._s(item.type))]),
                    ]),
                    _c("div", { staticClass: "title_content" }, [
                      _c("span", [
                        _vm._v("基本情况：" + _vm._s(item.basic_info)),
                      ]),
                    ]),
                    _c(
                      "div",
                      {
                        staticClass: "title_content",
                        staticStyle: { color: "rgba(68, 123, 252, 1)" },
                      },
                      [
                        _c("span", [
                          _vm._v("对应企业：" + _vm._s(item.enterprise_name)),
                        ]),
                      ]
                    ),
                  ]
                ),
                _c("div", { staticClass: "title_bottom" }, [
                  _c("div", { staticStyle: { display: "flex" } }, [
                    _c("span", [_vm._v("由")]),
                    _c(
                      "div",
                      {
                        staticStyle: {
                          "text-overflow": "ellipsis",
                          overflow: "hidden",
                          "white-space": "nowrap",
                          "max-width": "140px",
                        },
                      },
                      [_c("label", [_vm._v(_vm._s(item.ssbm))])]
                    ),
                    _c("span", [_vm._v("提交")]),
                  ]),
                  _c("div", { staticClass: "bottom_btn" }, [
                    item.status === "待处理"
                      ? _c(
                          "div",
                          {
                            staticClass: "yes",
                            on: {
                              click: function ($event) {
                                return _vm.dealData(item)
                              },
                            },
                          },
                          [_vm._v("处理")]
                        )
                      : _c(
                          "div",
                          {
                            staticClass: "no",
                            on: {
                              click: function ($event) {
                                return _vm.toDetail(item)
                              },
                            },
                          },
                          [_vm._v("详情")]
                        ),
                  ]),
                ]),
              ])
            }),
            0
          )
        : _vm._e(),
      _c(
        "van-popup",
        {
          attrs: { closeable: false, round: "" },
          model: {
            value: _vm.showCheck,
            callback: function ($$v) {
              _vm.showCheck = $$v
            },
            expression: "showCheck",
          },
        },
        [
          _c("div", { staticClass: "popTitle" }, [_vm._v(_vm._s(_vm.title))]),
          _c("div", { staticClass: "popWrapper" }, [
            _c("div", { staticClass: "popItem" }, [
              _c("span", { staticStyle: { width: "80px" } }, [
                _vm._v("处理意见："),
              ]),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.opinion,
                    expression: "opinion",
                  },
                ],
                staticClass: "inputW",
                attrs: { rows: "6", placeholder: "请输入" },
                domProps: { value: _vm.opinion },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.opinion = $event.target.value
                  },
                },
              }),
            ]),
          ]),
          _c("div", { staticClass: "popFooter" }, [
            _c(
              "div",
              {
                on: {
                  click: function ($event) {
                    _vm.showCheck = false
                  },
                },
              },
              [_vm._v("取消")]
            ),
            _c(
              "div",
              {
                staticStyle: {
                  color: "#1989fa",
                  "border-left": "1px solid #ebedf0",
                },
                attrs: { loading: _vm.btnLoading },
                on: { click: _vm.onSureCheck },
              },
              [_vm._v("确认")]
            ),
          ]),
        ]
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
    return _c("div", { staticClass: "title_image" }, [
      _c("img", { attrs: { src: __webpack_require__(/*! ../../assets/title_left.png */ "./src/assets/title_left.png") } }),
      _c("span", [_vm._v("待办事项")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/inHand/index.vue?vue&type=style&index=0&id=243897d1&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/inHand/index.vue?vue&type=style&index=0&id=243897d1&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @/assets/矩形 1.png */ "./src/assets/矩形 1.png");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../../assets/title_backImg.png */ "./src/assets/title_backImg.png");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../../assets/bottom.png */ "./src/assets/bottom.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n.clue-tab-wrapper[data-v-243897d1] {\n  padding: 15px 10px;\n  background: #fff;\n  display: flex;\n  align-items: center;\n}\n.clue-tab-wrapper .active[data-v-243897d1] {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center bottom;\n  background-size: 100% 30%;\n  color: #121236 !important;\n}\n.clue-tab-wrapper .activeItem[data-v-243897d1] {\n  width: 105px;\n  height: 30px;\n  line-height: 30px;\n  opacity: 1;\n  border-radius: 28px;\n  color: #ffffff !important;\n  background: linear-gradient(225deg, #4975ec 0%, #97b3ff 100%);\n  box-shadow: 0 4px 34px rgba(84, 125, 239, 0.4);\n}\n.clue-tab-wrapper .text[data-v-243897d1] {\n  width: 105px;\n  color: rgba(18, 18, 54, 0.5);\n  margin-right: 20px;\n  text-align: center;\n}\n.clue-tab-wrapper .tabText[data-v-243897d1] {\n  margin: 0 40px 0 10px;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 18px;\n}\n.list-wrapper[data-v-243897d1] {\n  height: calc(100vh - 110px);\n  overflow-y: auto;\n}\n.list-wrapper .clue-wrapper[data-v-243897d1] {\n  margin: 25px 10px;\n  background: #fff;\n  border-radius: 25px;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.list-wrapper .clue-wrapper .clue-wrapper-item[data-v-243897d1] {\n  padding: 15px 15px 5px 15px;\n  line-height: 30px;\n}\n.list-wrapper .clue-wrapper .clue-wrapper-item .title_image[data-v-243897d1] {\n  position: relative;\n  top: -37px;\n  left: -35px;\n  height: 0;\n}\n.list-wrapper .clue-wrapper .clue-wrapper-item .title_image span[data-v-243897d1] {\n  position: relative;\n  left: -77px;\n  top: -31px;\n  font-size: 12px;\n  color: #fff;\n}\n.list-wrapper .clue-wrapper .clue-wrapper-item .title_time[data-v-243897d1] {\n  text-align: right;\n}\n.list-wrapper .clue-wrapper .clue-wrapper-item .title_time .state[data-v-243897d1] {\n  padding: 3px 10px;\n  margin-right: 10px;\n}\n.list-wrapper .clue-wrapper .clue-wrapper-item .title[data-v-243897d1] {\n  font-size: 18px;\n  color: #000000;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.list-wrapper .clue-wrapper .clue-wrapper-item .finish[data-v-243897d1] {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-repeat: no-repeat;\n}\n.list-wrapper .clue-wrapper .title_bottom[data-v-243897d1] {\n  height: 45px;\n  line-height: 45px;\n  padding: 0 15px;\n  font-size: 14px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  display: flex;\n  justify-content: space-between;\n}\n.list-wrapper .clue-wrapper .title_bottom label[data-v-243897d1] {\n  margin: 0 5px;\n  color: #121236;\n}\n.list-wrapper .clue-wrapper .title_bottom .bottom_btn[data-v-243897d1] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.list-wrapper .clue-wrapper .title_bottom .bottom_btn .yes[data-v-243897d1] {\n  width: 80px;\n  height: 26px;\n  line-height: 26px;\n  opacity: 1;\n  border-radius: 20px;\n  background: linear-gradient(142.91deg, #447bfc 0%, #7ca1f7 100%);\n  text-align: center;\n  color: #fff;\n}\n.list-wrapper .clue-wrapper .title_bottom .bottom_btn .no[data-v-243897d1] {\n  width: 80px;\n  height: 26px;\n  line-height: 26px;\n  opacity: 1;\n  border-radius: 20px;\n  background: linear-gradient(142.91deg, rgba(250, 138, 57, 0.05) 0%, rgba(18, 18, 54, 0.01) 100%);\n  border: 1px solid #ff8d1a;\n  text-align: center;\n  color: #ff8d1a;\n  margin-left: 10px;\n}\n.list-wrapper .clue-wrapper .clue-finish-item[data-v-243897d1] {\n  line-height: 30px;\n}\n.list-wrapper .clue-wrapper .clue-finish-item .finish_title[data-v-243897d1] {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-repeat: no-repeat;\n  font-size: 12px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 50px;\n  padding: 0 15px;\n}\n.list-wrapper .clue-wrapper .clue-finish-item .finish_title .name[data-v-243897d1] {\n  font-size: 18px;\n  color: #000000;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  width: calc(100% - 170px);\n}\n.list-wrapper .clue-wrapper .clue-finish-item .finish_title .state[data-v-243897d1] {\n  width: 50px;\n  height: 20px;\n  line-height: 20px;\n  border-radius: 4px;\n  text-align: center;\n  margin-right: 5px;\n}\n.list-wrapper .clue-wrapper .clue-finish-item .finish_title .time[data-v-243897d1] {\n  color: rgba(18, 18, 54, 0.5);\n  width: 115px;\n}\n.list-wrapper .clue-wrapper .clue-finish-item .finish_content[data-v-243897d1] {\n  padding: 0 15px;\n}\n.list-wrapper .clue-wrapper .finish_bottom[data-v-243897d1] {\n  height: 35px;\n  line-height: 35px;\n  padding: 0 15px;\n  font-size: 14px;\n  text-align: right;\n  color: #447bfc;\n}\n.popTitle[data-v-243897d1] {\n  text-align: center;\n  font-weight: bold;\n  line-height: 50px;\n}\n.popWrapper[data-v-243897d1] {\n  max-height: 50vh;\n}\n.popWrapper .popItem[data-v-243897d1] {\n  display: flex;\n  width: 330px;\n  padding: 10px;\n  font-size: 14px;\n  color: #999;\n}\n.popWrapper .popItem .label[data-v-243897d1] {\n  width: 160px;\n}\n.popWrapper .popItem .inputW[data-v-243897d1] {\n  border: 1px solid #ebedf0;\n  padding-left: 5px;\n  width: calc(100% - 85px);\n}\n.popFooter[data-v-243897d1] {\n  display: flex;\n  border-top: 1px solid #ebedf0;\n}\n.popFooter div[data-v-243897d1] {\n  width: 50%;\n  padding: 14px 0;\n  text-align: center;\n  font-size: 16px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/inHand/index.vue?vue&type=style&index=0&id=243897d1&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/inHand/index.vue?vue&type=style&index=0&id=243897d1&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=243897d1&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/inHand/index.vue?vue&type=style&index=0&id=243897d1&scoped=true&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("d86eca8c", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/bottom.png":
/*!*******************************!*\
  !*** ./src/assets/bottom.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXYAAAAsCAYAAABxPJNAAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAOrSURBVHic7d3NbltFGIfxZ8Z2aJKSBASqkPqRql2VFeoN9Ca4njRXwTVUbFiAKnbdIj42oEqgICqECAgUaOmHmvicYeE5zsSJ2zRxcTs8v03+noxn3nMSvbKOnZOQ7v+0wVhM0OYc9nOMaRTbUW666aTx9BgSbTGfNq83VuSY2F+k2LOb3xZ75n266b1U5JhoptQI0JYZiKnIFPmIeg8cWypyL9E0h/fvdeelHWWAphnNf+7+vdH5aCieW6wz+sbhcxljom2KuvLcXpmLn1ePg3l/6SKXteQ87HI+pvL4xuPFmmWNo80SDCfqmsjDPLWfikyR+4lhftCfrGuY9++P9hwO85wu94/Iea9xzvXuAYOcU57LHtDlIQz6ib2c+/1j1E6eT35ufjAYTMkTc3ZzDQtd3s3z8/hgkGsbJPY3SowmAwsT+WmR83qpy0+BN4r8vPHRmSpSMZ6m/D7k8TNnEk8AnsDi4hH58Sg/znlpqciLiUc5Ly/lDCynxMOcz1LkvOc/wJsUOY8/AFZyvg+s5vw3sNYdx1v56w7wds5/Au/k/Afwbs6/A+dy3gbey/kX4HzO94D1nLeAqznfBa7l/DVwPec7wI2cPwY+zHkT2Mg5EAIpIkmqio1dkipjY5ekytjYJakyNnZJqoyNXZIqY2OXpMrY2CWpMjZ2SaqMjV2SKmNjl6TK2NglqTI2dkmqjI1dkipjY5ekytjYJakyNnZJqoyNXZIqY2OXpMrY2CWpMjZ2SaqMjV2SKmNjl6TK2NglqTKRxO68i5AkzU4kxIfzLkKSNDsR0s68i5Ckl+LsvAuYj0gv/DbvIiRJsxNp4s/zLkKSNDuRlfNbvoEqSa+/EEgAMYSQiPHbeRckSZqN0efYe+GbOdchSZqRCBCWL/5K2/qqXZJeW2Gc9v/yNC7cIaZ2DtVIkk6pu74ORWMPqxd2aJvP51OSJOmkQgipfHzgXjFh9cqXhOj1dkl1+F/8Xf1Gmhw5dBOwsHLpUxLf/zcFSZJOIU2+Wocpd3cMa5dvkdIPL78mSdLJbB66BNOZetvesHb5FnhZRpJeOZt3Uwg3p37Y5Zn3Yw+r65/R798m4adlJOnV0Iab05s6HOMfbYTli1/Rho8I6bvZ1SVJejE32hBCM+3yS6l/nOXC2qW/gE/So3tfMOQDIu/TsnDqOiVJz3A9AS1T3iSd5liNvROW17eB7ZTSbR78eIWmf4GYzhF7a6R2GWz2kvTCtoCrACS4dqJmXvoXRcGFUUXI3lUAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/title_backImg.png":
/*!**************************************!*\
  !*** ./src/assets/title_backImg.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXYAAAAsCAYAAABxPJNAAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAALQSURBVHic7dzBThpBHMfx/86yCyywFK0xJiZtGk9eeQEOXhrjcZ/Fo3jy3ltfoX2JvoBXL22aNjWpjW21KlpXzPSgbsVZYVAIMvl+DjA7O3/mn5D8QiaAJw/0+o0uBmcSnp8dBSqM/UCL6l6Il7e2Ip2e60JQ0Xa7dIyZQmhbe2LWFqsWtWZdMKCulo2OjXthqWbZ77ExLFrVHhkzxXJsuecfY6YU1S1rD42ZqPpMy8HgyoM7i6Jqw3LP38ZMJZ7Jr/11d+KnsaQWP7fcd7/nqj4zl1+3d/X0o2ey96oxO2+5p4jI956r2fkFLd9sa3dl93o0t7Bot+cXYyCLiy+taj9mo0/Z6MXSkpYdq52vXS1eXl7O9ty+fXtb+ri62Ww2+/b7IXswZqXValm/N+9vPSRJMsR7+t/m5qZsbGzk1nqe96DXvFEYZnHzrQ4anyWKYimd752qbhhpX2KRVKT7mC4AABmtdfYh+SEhbxXsyTvtX+xI7ezraVl8kXPzgzQAYAxuQn6YgB8Y7GttHXV2JL5MT3OPWQAA4zdMwPcN9pV1XU9TiUbVGADgcbTW3qBwV/fdWN3SDd8n1AHgqdGS/0WVG7nBvrqlG91jKY2nJQDAOBnBvrKu64Q6AEyvnmBfa+uI4xcAmG5ZsCeJ9i9F4kk2AwB4vCzYD15J9TLtfyAPAHj6lIhIq60LHMEAgBuUiEhZCHUAcIUSEUnTTnnSjQAARkMlbR0WpHLvD5UAANNF7YuEk24CADA6qvtXgkk3AQAYHVXzTob6T3YAwNOmUq/K+ToAOEQV+vzDIwBg+hDqAOAYgh0AHEOwA4BjCHYAcAzBDgCOIdgBwDEEOwA4hmAHAMcQ7ADgGIIdABxDsAOAYwh2AHAMwQ4AjiHYAcAxBDsAOIZgBwDHEOwA4BiCHQAcQ7ADgGMIdgBwDMEOAI4h2AHAMQQ7ADiGYAcAx/wDsNKXPk7kfpoAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/title_left.png":
/*!***********************************!*\
  !*** ./src/assets/title_left.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/矩形 1.png":
/*!*****************************!*\
  !*** ./src/assets/矩形 1.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAICAYAAACLUr1bAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADBSURBVDiNzZKxTQNREETf7N1+ZByAZJsCaMEpDdCIMwqgAYoCWUhUgdwBFVig7xuCwzjw5d9PGq12tMELVgDrjfN2WR+Ifm4fMkxajDNID0ORSNylRNqkdexIKdJ2MaQg+bsRLqAExojELuMep55j958CBOg5AG5W+zuin3Nx+D4A5NmitcoUMh8B0EVdtpaZYqB76x+ffPUD161lzvFu+6KvYMGqtcoUst4BYjhwkf+H2AJErd/71i7n+NO1ewX4BWpOOkkAPfLyAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/views/inHand/index.vue":
/*!************************************!*\
  !*** ./src/views/inHand/index.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_243897d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=243897d1&scoped=true& */ "./src/views/inHand/index.vue?vue&type=template&id=243897d1&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/inHand/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_243897d1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=243897d1&scoped=true&lang=scss& */ "./src/views/inHand/index.vue?vue&type=style&index=0&id=243897d1&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_243897d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_243897d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "243897d1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/inHand/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/inHand/index.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/views/inHand/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/inHand/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/inHand/index.vue?vue&type=style&index=0&id=243897d1&scoped=true&lang=scss&":
/*!**********************************************************************************************!*\
  !*** ./src/views/inHand/index.vue?vue&type=style&index=0&id=243897d1&scoped=true&lang=scss& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_243897d1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=243897d1&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/inHand/index.vue?vue&type=style&index=0&id=243897d1&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_243897d1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_243897d1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_243897d1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_243897d1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/inHand/index.vue?vue&type=template&id=243897d1&scoped=true&":
/*!*******************************************************************************!*\
  !*** ./src/views/inHand/index.vue?vue&type=template&id=243897d1&scoped=true& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_9d17f796_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_243897d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9d17f796-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=243897d1&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"9d17f796-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/inHand/index.vue?vue&type=template&id=243897d1&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_9d17f796_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_243897d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_9d17f796_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_243897d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2luSGFuZC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2luSGFuZC9pbmRleC52dWU/NzBhZiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvaW5IYW5kL2luZGV4LnZ1ZT9mMjA1Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9pbkhhbmQvaW5kZXgudnVlPzk4NGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ib3R0b20ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdGl0bGVfYmFja0ltZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90aXRsZV9sZWZ0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL+efqeW9oiAxLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvaW5IYW5kL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvaW5IYW5kL2luZGV4LnZ1ZT9hNDdlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9pbkhhbmQvaW5kZXgudnVlP2I3ODgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2luSGFuZC9pbmRleC52dWU/YjM3OSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBbUVBO0FBQ0E7QUFDQTtBQUNBLGtCQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0Esc0JBREE7QUFFQSx1QkFGQTtBQUdBLDRCQUhBO0FBSUEsb0JBSkE7QUFLQSxvQkFMQTtBQU1BLGtCQU5BO0FBT0Esc0JBUEE7QUFRQSxlQVJBO0FBU0EsZ0JBVEE7QUFVQTtBQVZBO0FBWUEsR0FmQTtBQWdCQSxTQWhCQSxxQkFnQkE7QUFDQTtBQUNBLEdBbEJBO0FBbUJBO0FBQ0EsZUFEQSx1QkFDQSxHQURBLEVBQ0E7QUFDQTtBQUNB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QTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzLzMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDx2YW4tbmF2LWJhciA6dGl0bGU9XCJuYXZUaXRsZVwiIGxlZnQtYXJyb3cgQGNsaWNrLWxlZnQ9XCIkcm91dGVyLmdvKC0xKVwiPjwvdmFuLW5hdi1iYXI+XHJcbiAgICAgICAgPCEtLeWktOmDqHRhYi0tPlxyXG4gICAgICAgIDwhLS08ZGl2IHYtaWY9XCJuYXZUaXRsZSA9PT0gJ+W+heWKnuS6i+mhuSdcIiBjbGFzcz1cImNsdWUtdGFiLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiB2LWZvcj1cIihpdGVtLGkpIGluIHRhYkFyclwiIDpjbGFzcz1cImFjdGl2ZUluZGV4PT09aT8nYWN0aXZlSXRlbSB0ZXh0JzondGV4dCdcIiBAY2xpY2s9XCJvbkNoYW5nZVRhYihpKVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3tpdGVtfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2Pi0tPlxyXG4gICAgICAgPCEtLSA8ZGl2IHYtZWxzZSBjbGFzcz1cImNsdWUtdGFiLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPHNwYW4gdi1mb3I9XCIoaXRlbSxpKSBpbiB0YWJBcnJcIiA6Y2xhc3M9XCJhY3RpdmVJbmRleD09PWk/J2FjdGl2ZSB0YWJUZXh0JzondGFiVGV4dCdcIiBAY2xpY2s9XCJvbkNoYW5nZVRhYihpKVwiPnt7aXRlbX19PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2Pi0tPlxyXG4gICAgICAgIDx2YW4tbG9hZGluZyB2LWlmPVwibG9hZGluZ1wiIHNpemU9XCIyNHB4XCIgY29sb3I9XCIjMDA5NGZmXCIgdmVydGljYWwgc3R5bGU9XCJtYXJnaW4tdG9wOiA1MCVcIj7liqDovb3kuK0uLi48L3Zhbi1sb2FkaW5nPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LXdyYXBwZXJcIiB2LWlmPVwibG9hZGluZz09PWZhbHNlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJpdGVtIGluIGNsdWVMaXN0XCIgY2xhc3M9XCJjbHVlLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbHVlLXdyYXBwZXItaXRlbVwiIEBjbGljaz1cInRvRGV0YWlsKGl0ZW0pXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlX2ltYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vYXNzZXRzL3RpdGxlX2xlZnQucG5nXCIgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7lvoXlip7kuovpobk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlX3RpbWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0ZVwiIDpzdHlsZT1cImdldFN0eWxlQ29sb3IoaXRlbS5zdGF0dXMpXCI+e3sgaXRlbS5zdGF0dXMgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPuWhq+aKpeaXtumXtO+8mnt7IGl0ZW0uY3JlYXRlX3RpbWUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IGl0ZW0udHlwZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVfY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7ln7rmnKzmg4XlhrXvvJp7eyBpdGVtLmJhc2ljX2luZm8gfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlX2NvbnRlbnRcIiBzdHlsZT1cImNvbG9yOiByZ2JhKDY4LCAxMjMsIDI1MiwgMSk7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPuWvueW6lOS8geS4mu+8mnt7IGl0ZW0uZW50ZXJwcmlzZV9uYW1lIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVfYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPueUsTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cInRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO292ZXJmbG93OiBoaWRkZW47d2hpdGUtc3BhY2U6IG5vd3JhcDttYXgtd2lkdGg6MTQwcHg7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+e3sgaXRlbS5zc2JtIH19PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPuaPkOS6pDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm90dG9tX2J0blwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJpdGVtLnN0YXR1cyA9PT0gJ+W+heWkhOeQhidcIiBjbGFzcz1cInllc1wiIEBjbGljaz1cImRlYWxEYXRhKGl0ZW0pXCI+5aSE55CGPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwibm9cIiBAY2xpY2s9XCJ0b0RldGFpbChpdGVtKVwiPuivpuaDhTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS3lpITnkIblvLnmoYYtLT5cclxuICAgICAgICA8dmFuLXBvcHVwIHYtbW9kZWw9XCJzaG93Q2hlY2tcIiA6Y2xvc2VhYmxlPVwiZmFsc2VcIiByb3VuZD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcFRpdGxlXCI+e3sgdGl0bGUgfX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcFdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3BJdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJ3aWR0aDogODBweDtcIj7lpITnkIbmhI/op4HvvJo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHJvd3M9XCI2XCIgdi1tb2RlbD1cIm9waW5pb25cIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpVwiIGNsYXNzPVwiaW5wdXRXXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcEZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBAY2xpY2s9XCJzaG93Q2hlY2sgPSBmYWxzZVwiPuWPlua2iDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiA6bG9hZGluZz1cImJ0bkxvYWRpbmdcIiBAY2xpY2s9XCJvblN1cmVDaGVja1wiIHN0eWxlPVwiY29sb3I6ICMxOTg5ZmE7Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWJlZGYwXCI+56Gu6K6kPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvdmFuLXBvcHVwPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHtUb2FzdH0gZnJvbSBcInZhbnRcIjtcclxuICAgIGltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbmFtZTogXCJNaW5lQ2x1ZVwiLFxyXG4gICAgICAgIGRhdGEgKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbmF2VGl0bGU6ICflvoXlip7kuovpobknLFxyXG4gICAgICAgICAgICAgICAgc2VhcmNoS2V5d29yZDogJycsXHJcbiAgICAgICAgICAgICAgICB0YWJBcnI6IFsn5b6F5aSE55CGJywgJ+W3suWkhOeQhiddLFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlSW5kZXg6IDAsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNsdWVMaXN0OiBbXSxcclxuICAgICAgICAgICAgICAgIHNob3dDaGVjazogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICAgICAgICBjbHVlSWQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgYnRuTG9hZGluZzogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICAgICAgdGhpcy5xdWVyeU1pbmVDbHVlcygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBvbkNoYW5nZVRhYihpZHgpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IGlkeDtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVlcnlNaW5lQ2x1ZXMoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmMgcXVlcnlNaW5lQ2x1ZXMoKXtcclxuICAgICAgICAgICAgICAgIGxldCB0eXBlID0gdGhpcy5hY3RpdmVJbmRleCA9PT0gMCA/ICflvoXlpITnkIYnIDogJ+W3suWkhOeQhic7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy96c2hiL3F1ZXJ5SW5IYW5kTGlzdCcsIHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0eXBlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmNvZGUgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2x1ZUxpc3QgPSByZXNwb25zZS5kYXRhLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIFRvYXN0KHJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldFN0eWxlQ29sb3Ioc3RhdGUpe1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlID09PSAn5b6F5aGr5YaZJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnYmFja2dyb3VuZDogcmdiYSgyNDQsIDEzMSwgMCwgMC4xKTtjb2xvcjpyZ2JhKDI0NCwgMTMxLCAwLCAxKTsnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gJ+W+heWuoeaguCcgfHxzdGF0ZSA9PT0gJ+W+heWuoeaJuScgfHwgc3RhdGUgPT09ICflvoXliIblj5EnIHx8IHN0YXRlID09PSAn5b6F5qC45a6eJ3x8IHN0YXRlID09PSAn5b6F5aSE55CGJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnYmFja2dyb3VuZDogcmdiYSgyNTUsIDE0MSwgMjYsIDAuMSk7Y29sb3I6cmdiYSgyNTUsIDE0MSwgMjYsIDEpOyc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSAn5b6F5Yqe57uTJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnYmFja2dyb3VuZDogcmdiYSgyMjcsIDIxOCwgMCwgMC4xKTtjb2xvcjpyZ2JhKDIyNywgMjE4LCAwLCAxKTsnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gJ+W3suWKnue7kycgfHwgc3RhdGU9PT0gJ+W3suWkhOeQhicpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJ2JhY2tncm91bmQ6IHJnYmEoMiwgMjE3LCAxMjcsIDAuMSk7Y29sb3I6cmdiYSgyLCAyMTcsIDEyNywgMSk7JztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PSDlpITnkIZcclxuICAgICAgICAgICAgZGVhbERhdGEoZGF0YSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsdWVJZCA9IGRhdGEuaWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9waW5pb24gPSAnJztcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NoZWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGl0bGUgPSAn5aSE55CGJztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy/mj5DkuqRcclxuICAgICAgICAgICAgb25TdXJlQ2hlY2soKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NoZWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGk9MDtpPHRoaXMuY2x1ZUxpc3QubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5jbHVlTGlzdFtpXS5pZCA9PT0gdGhpcy5jbHVlSWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsdWVMaXN0W2ldLnN0YXR1cyA9ICflt7LlpITnkIYnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuYWN0aXZlSW5kZXggPSAxO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5xdWVyeU1pbmVDbHVlcygpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT0g6K+m5oOFXHJcbiAgICAgICAgICAgIHRvRGV0YWlsKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGxldCB0aXRsZSA9ICflvoXlip7or6bmg4UnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6ICdpbkhhbmREZXRhaWwnLCBwYXJhbXM6IHtmbGFnOnRpdGxlLGNsdWVJZDppdGVtLmlkfX0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdvU2VhcmNoKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBvblNlYXJjaCgpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xdWVyeU1pbmVDbHVlcygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8v6Lez6L2s5b6F5Yqe5bqU55SoXHJcbiAgICAgICAgICAgIGdvVG9IYW5kbGVMaXN0KCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogJ2luSGFuZEFwcGx5JywgcGFyYW1zOiB7fX0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG4gICAgLmNsdWUtdGFiLXdyYXBwZXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDE1cHggMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwifkAvYXNzZXRzL+efqeW9oiAxLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGJvdHRvbTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDMwJTtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMSkhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWN0aXZlSXRlbSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjhweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmYhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCByZ2JhKDczLCAxMTcsIDIzNiwgMSkgMCUsIHJnYmEoMTUxLCAxNzksIDI1NSwgMSkgMTAwJSk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDM0cHggIHJnYmEoODQsIDEyNSwgMjM5LCAwLjQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDVweDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50YWJUZXh0IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDQwcHggMCAxMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxpc3Qtd3JhcHBlcntcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTBweCk7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAuY2x1ZS13cmFwcGVyIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAyNXB4IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgLmNsdWUtd3JhcHBlci1pdGVtIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMTVweCA1cHggMTVweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgLnRpdGxlX2ltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMzdweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMzVweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogLTc3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTMxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRpdGxlX3RpbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZmluaXNoIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvdGl0bGVfYmFja0ltZy5wbmdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGl0bGVfYm90dG9tIHtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogNDVweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vYXNzZXRzL2JvdHRvbS5wbmdcIik7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjowIDVweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5ib3R0b21fYnRuIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIC55ZXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0Mi45MWRlZywgIzQ0N2JmYyAwJSwgIzdjYTFmNyAxMDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLm5vIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDIuOTFkZWcsIHJnYmEoMjUwLCAxMzgsIDU3LCAwLjA1KSAwJSwgcmdiYSgxOCwgMTgsIDU0LCAwLjAxKSAxMDAlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDE0MSwgMjYsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMTQxLCAyNiwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuY2x1ZS1maW5pc2gtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgIC5maW5pc2hfdGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy90aXRsZV9iYWNrSW1nLnBuZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE3MHB4KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnRpbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmZpbmlzaF9jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZpbmlzaF9ib3R0b20ge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDY4LCAxMjMsIDI1MiwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucG9wVGl0bGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIH1cclxuICAgIC5wb3BXcmFwcGVyIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiBjYWxjKDUwdmgpO1xyXG4gICAgICAgIC5wb3BJdGVtIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgd2lkdGg6IDMzMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgICAubGFiZWwge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pbnB1dFcge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ViZWRmMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDg1cHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnBvcEZvb3RlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2ViZWRmMDtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNHB4IDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcInZhbi1uYXYtYmFyXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgdGl0bGU6IF92bS5uYXZUaXRsZSwgXCJsZWZ0LWFycm93XCI6IFwiXCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcImNsaWNrLWxlZnRcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLmdvKC0xKVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIF92bS5sb2FkaW5nXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcInZhbi1sb2FkaW5nXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLXRvcFwiOiBcIjUwJVwiIH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNpemU6IFwiMjRweFwiLCBjb2xvcjogXCIjMDA5NGZmXCIsIHZlcnRpY2FsOiBcIlwiIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIuWKoOi9veS4rS4uLlwiKV1cbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0ubG9hZGluZyA9PT0gZmFsc2VcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxpc3Qtd3JhcHBlclwiIH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLmNsdWVMaXN0LCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbHVlLXdyYXBwZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjbHVlLXdyYXBwZXItaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvRGV0YWlsKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbSgwLCB0cnVlKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZV90aW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN0YXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBfdm0uZ2V0U3R5bGVDb2xvcihpdGVtLnN0YXR1cyksXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbS5zdGF0dXMpKV1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLloavmiqXml7bpl7TvvJpcIiArIF92bS5fcyhpdGVtLmNyZWF0ZV90aW1lKSksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLnR5cGUpKV0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZV9jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLln7rmnKzmg4XlhrXvvJpcIiArIF92bS5fcyhpdGVtLmJhc2ljX2luZm8pKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGl0bGVfY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwicmdiYSg2OCwgMTIzLCAyNTIsIDEpXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuWvueW6lOS8geS4mu+8mlwiICsgX3ZtLl9zKGl0ZW0uZW50ZXJwcmlzZV9uYW1lKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlX2JvdHRvbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljU3R5bGU6IHsgZGlzcGxheTogXCJmbGV4XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi55SxXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LW92ZXJmbG93XCI6IFwiZWxsaXBzaXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwid2hpdGUtc3BhY2VcIjogXCJub3dyYXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYXgtd2lkdGhcIjogXCIxNDBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImxhYmVsXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uc3NibSkpXSldXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5o+Q5LqkXCIpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm90dG9tX2J0blwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zdGF0dXMgPT09IFwi5b6F5aSE55CGXCJcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwieWVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZGVhbERhdGEoaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuWkhOeQhlwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS50b0RldGFpbChpdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi6K+m5oOFXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX2MoXG4gICAgICAgIFwidmFuLXBvcHVwXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBjbG9zZWFibGU6IGZhbHNlLCByb3VuZDogXCJcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnNob3dDaGVjayxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5zaG93Q2hlY2sgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcInNob3dDaGVja1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBvcFRpdGxlXCIgfSwgW192bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSldKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBvcFdyYXBwZXJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBvcEl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjgwcHhcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCLlpITnkIbmhI/op4HvvJpcIiksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ub3BpbmlvbixcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJvcGluaW9uXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRXXCIsXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93czogXCI2XCIsIHBsYWNlaG9sZGVyOiBcIuivt+i+k+WFpVwiIH0sXG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5vcGluaW9uIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF92bS5vcGluaW9uID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicG9wRm9vdGVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3dDaGVjayA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCLlj5bmtohcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzE5ODlmYVwiLFxuICAgICAgICAgICAgICAgICAgXCJib3JkZXItbGVmdFwiOiBcIjFweCBzb2xpZCAjZWJlZGYwXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyBsb2FkaW5nOiBfdm0uYnRuTG9hZGluZyB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ub25TdXJlQ2hlY2sgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIuehruiupFwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlX2ltYWdlXCIgfSwgW1xuICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCIuLi8uLi9hc3NldHMvdGl0bGVfbGVmdC5wbmdcIikgfSB9KSxcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5b6F5Yqe5LqL6aG5XCIpXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCJAL2Fzc2V0cy/nn6nlvaIgMS5wbmdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSByZXF1aXJlKFwiLi4vLi4vYXNzZXRzL3RpdGxlX2JhY2tJbWcucG5nXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fID0gcmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9ib3R0b20ucG5nXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBjaGFyc2V0IFxcXCJVVEYtOFxcXCI7XFxuLmNsdWUtdGFiLXdyYXBwZXJbZGF0YS12LTI0Mzg5N2QxXSB7XFxuICBwYWRkaW5nOiAxNXB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jbHVlLXRhYi13cmFwcGVyIC5hY3RpdmVbZGF0YS12LTI0Mzg5N2QxXSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdCBjZW50ZXIgYm90dG9tO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDMwJTtcXG4gIGNvbG9yOiAjMTIxMjM2ICFpbXBvcnRhbnQ7XFxufVxcbi5jbHVlLXRhYi13cmFwcGVyIC5hY3RpdmVJdGVtW2RhdGEtdi0yNDM4OTdkMV0ge1xcbiAgd2lkdGg6IDEwNXB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICBvcGFjaXR5OiAxO1xcbiAgYm9yZGVyLXJhZGl1czogMjhweDtcXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCAjNDk3NWVjIDAlLCAjOTdiM2ZmIDEwMCUpO1xcbiAgYm94LXNoYWRvdzogMCA0cHggMzRweCByZ2JhKDg0LCAxMjUsIDIzOSwgMC40KTtcXG59XFxuLmNsdWUtdGFiLXdyYXBwZXIgLnRleHRbZGF0YS12LTI0Mzg5N2QxXSB7XFxuICB3aWR0aDogMTA1cHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uY2x1ZS10YWItd3JhcHBlciAudGFiVGV4dFtkYXRhLXYtMjQzODk3ZDFdIHtcXG4gIG1hcmdpbjogMCA0MHB4IDAgMTBweDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcbi5saXN0LXdyYXBwZXJbZGF0YS12LTI0Mzg5N2QxXSB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTBweCk7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4ubGlzdC13cmFwcGVyIC5jbHVlLXdyYXBwZXJbZGF0YS12LTI0Mzg5N2QxXSB7XFxuICBtYXJnaW46IDI1cHggMTBweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4O1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLmxpc3Qtd3JhcHBlciAuY2x1ZS13cmFwcGVyIC5jbHVlLXdyYXBwZXItaXRlbVtkYXRhLXYtMjQzODk3ZDFdIHtcXG4gIHBhZGRpbmc6IDE1cHggMTVweCA1cHggMTVweDtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbn1cXG4ubGlzdC13cmFwcGVyIC5jbHVlLXdyYXBwZXIgLmNsdWUtd3JhcHBlci1pdGVtIC50aXRsZV9pbWFnZVtkYXRhLXYtMjQzODk3ZDFdIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogLTM3cHg7XFxuICBsZWZ0OiAtMzVweDtcXG4gIGhlaWdodDogMDtcXG59XFxuLmxpc3Qtd3JhcHBlciAuY2x1ZS13cmFwcGVyIC5jbHVlLXdyYXBwZXItaXRlbSAudGl0bGVfaW1hZ2Ugc3BhbltkYXRhLXYtMjQzODk3ZDFdIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IC03N3B4O1xcbiAgdG9wOiAtMzFweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4ubGlzdC13cmFwcGVyIC5jbHVlLXdyYXBwZXIgLmNsdWUtd3JhcHBlci1pdGVtIC50aXRsZV90aW1lW2RhdGEtdi0yNDM4OTdkMV0ge1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxufVxcbi5saXN0LXdyYXBwZXIgLmNsdWUtd3JhcHBlciAuY2x1ZS13cmFwcGVyLWl0ZW0gLnRpdGxlX3RpbWUgLnN0YXRlW2RhdGEtdi0yNDM4OTdkMV0ge1xcbiAgcGFkZGluZzogM3B4IDEwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5saXN0LXdyYXBwZXIgLmNsdWUtd3JhcHBlciAuY2x1ZS13cmFwcGVyLWl0ZW0gLnRpdGxlW2RhdGEtdi0yNDM4OTdkMV0ge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4ubGlzdC13cmFwcGVyIC5jbHVlLXdyYXBwZXIgLmNsdWUtd3JhcHBlci1pdGVtIC5maW5pc2hbZGF0YS12LTI0Mzg5N2QxXSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG59XFxuLmxpc3Qtd3JhcHBlciAuY2x1ZS13cmFwcGVyIC50aXRsZV9ib3R0b21bZGF0YS12LTI0Mzg5N2QxXSB7XFxuICBoZWlnaHQ6IDQ1cHg7XFxuICBsaW5lLWhlaWdodDogNDVweDtcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIik7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbn1cXG4ubGlzdC13cmFwcGVyIC5jbHVlLXdyYXBwZXIgLnRpdGxlX2JvdHRvbSBsYWJlbFtkYXRhLXYtMjQzODk3ZDFdIHtcXG4gIG1hcmdpbjogMCA1cHg7XFxuICBjb2xvcjogIzEyMTIzNjtcXG59XFxuLmxpc3Qtd3JhcHBlciAuY2x1ZS13cmFwcGVyIC50aXRsZV9ib3R0b20gLmJvdHRvbV9idG5bZGF0YS12LTI0Mzg5N2QxXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmxpc3Qtd3JhcHBlciAuY2x1ZS13cmFwcGVyIC50aXRsZV9ib3R0b20gLmJvdHRvbV9idG4gLnllc1tkYXRhLXYtMjQzODk3ZDFdIHtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiAyNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XFxuICBvcGFjaXR5OiAxO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDIuOTFkZWcsICM0NDdiZmMgMCUsICM3Y2ExZjcgMTAwJSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmxpc3Qtd3JhcHBlciAuY2x1ZS13cmFwcGVyIC50aXRsZV9ib3R0b20gLmJvdHRvbV9idG4gLm5vW2RhdGEtdi0yNDM4OTdkMV0ge1xcbiAgd2lkdGg6IDgwcHg7XFxuICBoZWlnaHQ6IDI2cHg7XFxuICBsaW5lLWhlaWdodDogMjZweDtcXG4gIG9wYWNpdHk6IDE7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0Mi45MWRlZywgcmdiYSgyNTAsIDEzOCwgNTcsIDAuMDUpIDAlLCByZ2JhKDE4LCAxOCwgNTQsIDAuMDEpIDEwMCUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmOGQxYTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjZmY4ZDFhO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcbi5saXN0LXdyYXBwZXIgLmNsdWUtd3JhcHBlciAuY2x1ZS1maW5pc2gtaXRlbVtkYXRhLXYtMjQzODk3ZDFdIHtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbn1cXG4ubGlzdC13cmFwcGVyIC5jbHVlLXdyYXBwZXIgLmNsdWUtZmluaXNoLWl0ZW0gLmZpbmlzaF90aXRsZVtkYXRhLXYtMjQzODk3ZDFdIHtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxufVxcbi5saXN0LXdyYXBwZXIgLmNsdWUtd3JhcHBlciAuY2x1ZS1maW5pc2gtaXRlbSAuZmluaXNoX3RpdGxlIC5uYW1lW2RhdGEtdi0yNDM4OTdkMV0ge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY29sb3I6ICMwMDAwMDA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDE3MHB4KTtcXG59XFxuLmxpc3Qtd3JhcHBlciAuY2x1ZS13cmFwcGVyIC5jbHVlLWZpbmlzaC1pdGVtIC5maW5pc2hfdGl0bGUgLnN0YXRlW2RhdGEtdi0yNDM4OTdkMV0ge1xcbiAgd2lkdGg6IDUwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4ubGlzdC13cmFwcGVyIC5jbHVlLXdyYXBwZXIgLmNsdWUtZmluaXNoLWl0ZW0gLmZpbmlzaF90aXRsZSAudGltZVtkYXRhLXYtMjQzODk3ZDFdIHtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICB3aWR0aDogMTE1cHg7XFxufVxcbi5saXN0LXdyYXBwZXIgLmNsdWUtd3JhcHBlciAuY2x1ZS1maW5pc2gtaXRlbSAuZmluaXNoX2NvbnRlbnRbZGF0YS12LTI0Mzg5N2QxXSB7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxufVxcbi5saXN0LXdyYXBwZXIgLmNsdWUtd3JhcHBlciAuZmluaXNoX2JvdHRvbVtkYXRhLXYtMjQzODk3ZDFdIHtcXG4gIGhlaWdodDogMzVweDtcXG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBjb2xvcjogIzQ0N2JmYztcXG59XFxuLnBvcFRpdGxlW2RhdGEtdi0yNDM4OTdkMV0ge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBsaW5lLWhlaWdodDogNTBweDtcXG59XFxuLnBvcFdyYXBwZXJbZGF0YS12LTI0Mzg5N2QxXSB7XFxuICBtYXgtaGVpZ2h0OiA1MHZoO1xcbn1cXG4ucG9wV3JhcHBlciAucG9wSXRlbVtkYXRhLXYtMjQzODk3ZDFdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMzMwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6ICM5OTk7XFxufVxcbi5wb3BXcmFwcGVyIC5wb3BJdGVtIC5sYWJlbFtkYXRhLXYtMjQzODk3ZDFdIHtcXG4gIHdpZHRoOiAxNjBweDtcXG59XFxuLnBvcFdyYXBwZXIgLnBvcEl0ZW0gLmlucHV0V1tkYXRhLXYtMjQzODk3ZDFdIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmVkZjA7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA4NXB4KTtcXG59XFxuLnBvcEZvb3RlcltkYXRhLXYtMjQzODk3ZDFdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ViZWRmMDtcXG59XFxuLnBvcEZvb3RlciBkaXZbZGF0YS12LTI0Mzg5N2QxXSB7XFxuICB3aWR0aDogNTAlO1xcbiAgcGFkZGluZzogMTRweCAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI0Mzg5N2QxJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiZDg2ZWNhOGNcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNDM4OTdkMSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI0Mzg5N2QxJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBWFlBQUFBc0NBWUFBQUJ4UEpOQUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQU9yU1VSQlZIaWM3ZDNOYmx0RkdJZnhaOFoyYUpLU0JBU3FrUHFScWwyVkZlb045Q2E0bmpSWHdUVlViRmlBS25iZElqNDJvRXFnSUNxRUNBZ1VhT21IbXZpY1llRTV6c1NKMnpSeGNUczh2MDMrbm94bjNuTVN2YktPblpPUTd2KzB3VmhNME9ZYzluT01hUlRiVVc2NjZhVHg5QmdTYlRHZk5xODNWdVNZMkYrazJMT2IzeFo3NW4yNjZiMVU1SmhvcHRRSTBKWVppS25JRlBtSWVnOGNXeXB5TDlFMGgvZnZkZWVsSFdXQXBobk5mKzcrdmRINWFDaWVXNnd6K3NiaGN4bGpvbTJLdXZMY1hwbUxuMWVQZzNsLzZTS1h0ZVE4N0hJK3B2TDR4dVBGbW1XTm84MFNEQ2ZxbXNqRFBMV2Zpa3lSKzRsaGZ0Q2ZyR3VZOSsrUDlod084NXd1OTQvSWVhOXh6dlh1QVlPY1U1N0xIdERsSVF6NmliMmMrLzFqMUU2ZVQzNXVmakFZVE1rVGMzWnpEUXRkM3MzejgvaGdrR3NiSlBZM1Nvd21Bd3NUK1dtUjgzcXB5MCtCTjRyOHZQSFJtU3BTTVo2bS9EN2s4VE5uRWs4QW5zRGk0aEg1OFNnL3pubHBxY2lMaVVjNUx5L2xEQ3lueE1PY3oxTGt2T2Mvd0pzVU9ZOC9BRlp5dmcrczV2dzNzTllkeDF2NTZ3N3dkczUvQXUvay9BZndiczYvQStkeTNnYmV5L2tYNEh6Tzk0RDFuTGVBcXpuZkJhN2wvRFZ3UGVjN3dJMmNQd1krekhrVDJNZzVFQUlwSWttcWlvMWRraXBqWTVla3l0allKYWt5Tm5aSnFveU5YWklxWTJPWHBNclkyQ1dwTWpaMlNhcU1qVjJTS21Oamw2VEsyTmdscVRJMmRrbXFqSTFka2lwalk1ZWt5dGpZSmFreU5uWkpxb3lOWFpJcVkyT1hwTXJZMkNXcE1qWjJTYXFNalYyU0ttTmpsNlRLMk5nbHFUS1J4TzY4aTVBa3pVNGt4SWZ6TGtLU05Ec1IwczY4aTVDa2wrTHN2QXVZajBndi9EYnZJaVJKc3hOcDRzL3pMa0tTTkR1UmxmTmJ2b0VxU2ErL0VFZ0FNWVNRaVBIYmVSY2tTWnFOMGVmWWUrR2JPZGNoU1pxUkNCQ1dMLzVLMi9xcVhaSmVXMkdjOXYveU5DN2NJYVoyRHRWSWtrNnB1NzRPUldNUHF4ZDJhSnZQNTFPU0pPbWtRZ2lwZkh6Z1hqRmg5Y3FYaE9qMWRrbDErRi84WGYxR21odzVkQk93c0hMcFV4TGYvemNGU1pKT0lVMitXb2NwZDNjTWE1ZHZrZElQTDc4bVNkTEpiQjY2Qk5PWmV0dmVzSGI1Rm5oWlJwSmVPWnQzVXdnM3AzN1k1Wm4zWXcrcjY1L1I3OThtNGFkbEpPblYwSWFiMDVzNkhPTWZiWVRsaTEvUmhvOEk2YnZaMVNWSmVqRTMyaEJDTSszeVM2bC9uT1hDMnFXL2dFL1NvM3RmTU9RREl1L1RzbkRxT2lWSnozQTlBUzFUM2lTZDVsaU52Uk9XMTdlQjdaVFNiUjc4ZUlXbWY0R1l6aEY3YTZSMkdXejJrdlRDdG9DckFDUzRkcUptWHZvWFJjR0ZVVVhJM2xVQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVhZQUFBQXNDQVlBQUFCeFBKTkFBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFMUVNVUkJWSGljN2R6QlRocEJITWZ4Lzg2eUN5eXdGSzB4SmladEdrOWVlUUVPWGhyamNaL0ZvM2p5M2x0Zm9YMkp2b0JYTDIyYU5qV3BqVzIxS2xwWHpQU2dic1ZaWVZBSU12bCtEakE3TzMvbW41RDhRaWFBSncvMCtvMHVCbWNTbnA4ZEJTcU0vVUNMNmw2SWw3ZTJJcDJlNjBKUTBYYTdkSXlaUW1oYmUyTFdGcXNXdFdaZE1LQ3VsbzJPalh0aHFXYlo3N0V4TEZyVkhoa3p4WEpzdWVjZlk2WVUxUzFyRDQyWnFQcE15OEhneW9NN2k2SnF3M0xQMzhaTUpaN0pyLzExZCtLbnNhUVdQN2ZjZDcvbnFqNHpsMSszZC9YMG8yZXk5Nm94TzIrNXA0akk5NTZyMmZrRkxkOXNhM2RsOTNvMHQ3Qm90K2NYWXlDTGl5K3RhajltbzAvWjZNWFNrcFlkcTUydlhTMWVYbDdPOXR5K2ZYdGIrcmk2Mld3MisvYjdJWHN3WnFYVmFsbS9OKzl2UFNSSk1zUjcrdC9tNXFac2JHemsxbnFlOTZEWHZGRVlabkh6clE0YW55V0tZaW1kNzUycWJoaHBYMktSVktUN21DNEFBQm10ZGZZaCtTRWhieFhzeVR2dFgreEk3ZXpyYVZsOGtYUHpnelFBWUF4dVFuNllnQjhZN0d0dEhYVjJKTDVNVDNPUFdRQUE0emRNd1BjTjlwVjFYVTlUaVViVkdBRGdjYlRXM3FCd1YvZmRXTjNTRGQ4bjFBSGdxZEdTLzBXVkc3bkJ2cnFsRzkxaktZMm5KUURBT0JuQnZyS3U2NFE2QUV5dm5tQmZhK3VJNHhjQW1HNVpzQ2VKOWk5RjRrazJBd0I0dkN6WUQxNUo5VEx0ZnlBUEFIajZsSWhJcTYwTEhNRUFnQnVVaUVoWkNIVUFjSVVTRVVuVFRublNqUUFBUmtNbGJSMFdwSEx2RDVVQUFOTkY3WXVFazI0Q0FEQTZxdnRYZ2trM0FRQVlIVlh6VG9iNlQzWUF3Tk9tVXEvSytUb0FPRVFWK3Z6REl3QmcraERxQU9BWWdoMEFIRU93QTRCakNIWUFjQXpCRGdDT0lkZ0J3REVFT3dBNGhtQUhBTWNRN0FEZ0dJSWRBQnhEc0FPQVl3aDJBSEFNd1E0QWppSFlBY0F4QkRzQU9JWmdCd0RIRU93QTRCaUNIUUFjUTdBRGdHTUlkZ0J3RE1FT0FJNGgyQUhBTVFRN0FEaUdZQWNBeC93RHNOS1hQazdrZnBvQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUc0QUFBQkFDQVlBQUFENy9VSzlBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFYTVNVUkJWSGljN1Z0TmkxUkhGTDMxbmlRaFkxRGNTSmdNTG9USk5yaFJDTWsvaUdUbk9tRVVYRXZpSWhHekM0aGpWdVl2aElCQ2tPREhJa05jSnB1NEU4d2lvT0JHSXhpR2lXSzZiaFk5M2ZOZTFhMnFXMVczWGxlM2ZVRHNyby96YnQ5VDUxYTlOOTBBU3l5eHhIQlFzdzVBQUtVL0F4Ym1UMEt0d3RVYWx3K0RDbHhEZ21xSW9RU0tDam1ycEMycVdENklDamwwQWw5SHdVeUlDRGhFSXBkaTBjZ1NzR1JTU3dzMjFJSW91VmNsYzVmNjhCSzg4K1RVSEhHVDVrb25KNVZ2bmtUaUlFV01xRG1TQ1l2bFdqU3hLTVNJTVJQaFluZ1dSZUJTb3JER0Rya1hTWStyRFp5RVM0M0pTcEtVRVBPeUwwcTVSa1M4MHNMNXhwUVNkRWlFRXV6cXp4YXY1R3AzalNIYmQyNStjYUpWK3FOV3dRZW85ZnNLOVNxaVBnU0lMV29OZ0JvUXgvOVBYMnRtRzJvWWMyQy9MWW1qMjRaRUc4M3g3cmZicmZHUlUwVUhBSUI5Z2NrVVVwMWl0VC85K2N2MUEyKzJuN2NBcDFEck5VQUFSQTBLT2xFajdyN3IvRU0wMmlkaisvd0k1aEFFZEhKMDIzd2NkR3hlWG5jK2ZPSjQrMk9GRXhIdDJZM3pxd2RXM3JpZ0FEZW1LNU1VaDJDaW1oRUJYUUtiQ1VRWFI3Zk5Kd0l0c0pkM1BKWVNJaVNlRXltT2M0RWwydWlYQzZlVmFqWUI4RzNRb2RWZHppRitjY0JLSjgzcldpQW1ieThYTWVJNSsyS0VTemxvOUVYYnV2aDlvOVNaK1hCSVNGeGt4amE1bUN5NHdxVWNZcnB6Rkc1OWN4MFVuRFFIT1IyQ3dIYklkSHlRTjg0aFlWNkd3SGJKRjNGZDR4Z2NBMHJVZ0dnTWgwd0VNYWVZVjZJRWxuQklJRFpycFhsNXJaN3NXeDJPY0xFbHNpZmFhT3ZpVlZNMHJrUG9aQTN1RUhkVllNVTJuU1I2WHlyaHVDN01nOGhHbzlTWjNvaGNoNUNybStQZVdJY3dxZ0lyTmlkTUlhT0VEUWtYNDdiZSs4Zlh6NzNYTlBzdTI5TXlIV0swSWRNaDR3NitRM2hWd1I4YmNTZ1NjNTIwNHlaUWh3L3UveG9BVitodU9ZZjBCZ1I1bVE3eDNucDBibEVDc1RHZGw0UlU0Ynh1Ky91bmMrdE5vemJzYVRJT3dVSU9RZHNoSk84ZUZjKzlBS0FKaGhoWVRpM2hPSFh3bmYyZmtUMEJoNkNWV05vaE5xK01RNndMU1p4NngzalNlYTBjcjZQZ0V5NmR0R2xPMFQwZGh6aEY2TGJQd2lGSXhrWlhCV1pzQ2g3UStVaEhpdU44WlZMOWMrdXJFd0M0NW1VSUpERG9FRjhDbmU2TnVDOWt4WWJNMkFDMGh0KzkrVWlBZUtsY2VhdjlrTzZSY1FqMXFJem4zdDBHMXI3SmlRM0E1Q0FmMlFIQXkxZDRtMkRKZ3Z3ZWgrb1kzVzYrU1hNSXpSdmhFRWNvRmluRkVidHZqbkh2Nkhjdjd0SmQ2UkFYVGltMVR2ZlU1eERhdlhaVjJDT25lUDBjb3hGdWVwZ2NXb2ZoRWk3NVlLSUFWcjBET2duMHIrVHlEckhpRXE0S0d1SGEydVVYUDFJUlI4S2FML24zdUFrT1VkZWxIT0l0ZjBNN3hHb0x4ZFpwUUlwRDNmL2pVWHVXWUJCQkNlSE03MWE0SGNKeUhoREpvdHJ5SGRLUE42NHFHUFB2UDlvZWZmckpEenZQaVY0UmxIcmtaU0RkSVU2WGlUdkVVUlU4c1ZGVllhVDF0VjhmdGg4ZnYvcnlMMksyNjdYcktrNlVjQndOcTBwNlZySXZnV1VjNHE0S3dYMXpkelRDdlZmL3FTdEhMdTFJN0duV3B6UGhFZzRoN1lCQ1dvbittb0lqSkVjQzJRN3g4Q0xoRURldk56YU5DRThRNEU5RS9HMzdYMzFuZmZQNVhXdFVJYmNCcEg5aDFmdjBoRGt1ZEExT2YybjRFaHBhZGpGQ3hWNkhPRWpzSWZsdmNSQW5YdWhhdFlGVEoyS0VpQllOUUU0NHN5M0hhYldKR0Nwak1XNFMyL3Q4d2dISXVjN0ZOZXNmZktRbWtyVTdRMWkwWkNFbGhhUGFZc1NxeldrbVhFbE9GU1RXeVQza0NPZnE1NWJGMm43Z0dMdjZwWVdNR2g4U0RrRGdHOHdaUExVaDU1VEo1V0VoOXpkdXZuN0pramlVc0NrSmpSVW5xMFJPTU1TdlNoZkJhU2FTanZDQlBrNy9GSksveTVhOG1hNUYwQmdINWdnV2V5M1dIamVCaEhqY01mTUNjVUc0S0hXeW0wZDNjU0Rsd0p5eEFGRCtvRkJhRktFSDRhSVFQL3BUR09ySnhUeTVLZ1dTcDFFV2NoSTZxN2sxSU5lMWc5ekhsWnhmbWk4SEpVcXFHS2RVb21wS2VLMFFYUWlMN0pnYVVPd2dWQ0xSUy9IS24xd0hTZkxySW1SeHNib1lPcW1MSk9LZ1FwbW9MWkUxeFROVFlaWllZb21hOEQvcElseXh6Wkd2OGdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNnQUFBQUlDQVlBQUFDTFVyMWJBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFEQlNVUkJWRGlOelpLeFRRTlJFRVRmN04xK1pCeUFaSnNDYU1FcERkQ0lNd3FnQVlvQ1dVaFVnZHdCRlZpZzd4dUN3emp3NWQ5UEdxMTJ0TUVMVmdEcmpmTjJXUitJZm00Zk1reGFqRE5JRDBPUlNOeWxSTnFrZGV4SUtkSjJNYVFnK2JzUkxxQUV4b2pFTHVNZXA1NWo5NThDQk9nNUFHNVcrenVpbjNOeCtENEE1Tm1pdGNvVU1oOEIwRVZkdHBhWllxQjc2eCtmZlBVRDE2MWx6dkZ1KzZLdllNR3F0Y29Vc3Q0QllqaHdrZitIMkFKRXJkLzcxaTduK05PMWV3WDRCV3BPT2trQVBmTHlBQUFBQUVsRlRrU3VRbUNDXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNDM4OTdkMSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNDM4OTdkMSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjI0Mzg5N2QxXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE1vY2tcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMjQzODk3ZDEnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMjQzODk3ZDEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMjQzODk3ZDEnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNDM4OTdkMSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyNDM4OTdkMScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL2luSGFuZC9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNDM4OTdkMSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI5ZDE3Zjc5Ni12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yNDM4OTdkMSZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=