(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/inHand/inHandDetail/index.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/inHand/inHandDetail/index.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappMock_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vant */ "./node_modules/vant/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_4__);



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      currentUserId: localStorage.getItem("userId"),
      currentDept: localStorage.getItem('dept'),
      clueId: '',
      navTitle: '待办详情',
      loading: false,
      receiveIds: '',
      showOpration: true,
      // 操作按钮是否显示
      showFeedBack: false,
      //
      baseInfo: {},
      images: [],
      files: [],
      examineInfo: {},
      approveInfo: {},
      distributionInfo: {},
      verifyInfo: {},
      completionInfo: {},
      recordInfo: {},
      images_record: [],
      files_record: [],
      expandOne: true,
      expandTwo: true,
      expandThree: false,
      activeIndex: 0,
      stepData: [],
      showOne: '',
      flowId: '',
      // 审核/审批
      showCheck: false,
      title: '审核',
      status: '是',
      opinion: '',
      approvalInfo: {
        joint_status: '是',
        joint_department: '',
        leader_user_id: '',
        leader_user: ''
      },
      bmList: ['昆明市发展和改革委员会', '昆明市工业和信息化局', '昆明市科学技术局', '昆明市民族宗教事务委员会', '昆明市公安局', '昆明市民政局', '昆明市司法局', '昆明市财政局', '昆明市人力资源和社会保障局', '昆明市自然资源和规划局', '昆明市住房和城乡建设局', '昆明市交通运输局', '昆明市农业农村局'],
      showPickerType: false,
      leaderList: [],
      showPickerDept: false,
      btnLoading: false,
      func: null,
      checkboxValue: [],
      checkedAll: false,
      // 分发
      showDistribute: false,
      distributeInfo: {
        type: '支队',
        leader_user_id: '',
        leader_user: '',
        dept: '',
        dept_id: ''
      },
      broanchs: [],
      persons: [],
      showPickerLeader: false,
      showPickerLeader2: false,
      // 核实
      verifyDatas: {
        file_id: '',
        verify_results: '经核实，不存在违法行为',
        note: ''
      },
      showVerify: false,
      showApply: false,
      showApplyFinish: false,
      checkRecordId: '',
      fileList: [],
      checkingInfo: [],
      active: [],
      // 办结
      finishInfo: {
        rectification_status: '是',
        rectification_content: ''
      },
      // 整改反馈
      showFeed: false,
      feedbackInfo: {
        finish_time: ''
      },
      datePop: false,
      //现场检查记录
      start: '',
      end: '',
      showPickerDate1: false,
      showPickerDate2: false,
      showPickerDate3: false,
      showPickerDate4: false,
      showPickerDate5: false,
      showPickerDate6: false,
      maxDate: new Date(),
      currentDate: new Date(),
      currentTime: '00:00',
      //整改反馈信息
      rectificationInfo: {},
      taskType: '' //为空或者null 是线索，有值的 是闭环

    };
  },
  mounted: function mounted() {
    this.navTitle = this.$route.params.flag;
    this.clueId = this.$route.params.clueId;
    this.queryClueDetail();
  },
  methods: {
    queryClueDetail: function queryClueDetail() {
      var _this = this;

      return Object(D_helipingWork_APP_kmEnvPortable_webappMock_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_4___default.a.post('/zshb/queryInHandDetail', {
                  id: _this.clueId
                });

              case 2:
                response = _context.sent;

                if (response.data.code === 200) {
                  _this.baseInfo = response.data.data.detail_info;
                  _this.showOne = response.data.data.detail_info.business_unit;
                  _this.taskType = _this.baseInfo.task_type;
                  _this.completionInfo = response.data.data.completion;
                  _this.files = _this.baseInfo.file_list;
                } else {
                  Object(vant__WEBPACK_IMPORTED_MODULE_3__["Toast"])(response.data.message);
                }

              case 4:
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
    download: function download(url) {
      window.open(url);
    },
    expand: function expand(flag) {
      if (flag === 1) {
        this.expandOne = !this.expandOne;
      } else if (flag === 2) {
        this.expandTwo = !this.expandTwo;
      } else if (flag === 3) {
        this.expandThree = !this.expandThree;
      }
    },
    // ================================= 处理
    checkData: function checkData() {
      this.opinion = '';
      this.showCheck = true;
      this.title = '处理';
    },
    //提交
    onSureCheck: function onSureCheck() {
      // this.btnLoading = true;
      // let params = {};
      // this.func(params).then(res =>{
      //     if(res.code === '200'){
      //         Toast(this.title + '成功!');
      this.showCheck = false;
      this.baseInfo.status = '已处理';
      this.completionInfo.opinion = this.opinion; //     } else {
      //         Toast('失败!');
      //     }
      // }).finally(re =>{
      //     this.btnLoading = false;
      // })
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"9d17f796-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/inHand/inHandDetail/index.vue?vue&type=template&id=099cdb79&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9d17f796-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/inHand/inHandDetail/index.vue?vue&type=template&id=099cdb79&scoped=true& ***!
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
      _c(
        "div",
        {
          staticClass: "clue-detail-wrapper",
          staticStyle: { height: "calc(100vh - 135px)" },
        },
        [
          _c("div", { staticClass: "base_div" }, [
            _c("div", { staticClass: "base_title_top" }, [
              _c("span", { staticClass: "name" }, [
                _vm._v(_vm._s(_vm.baseInfo.type)),
              ]),
              _c(
                "div",
                {
                  staticClass: "state",
                  style: _vm.getStyleColor(_vm.baseInfo.status),
                },
                [_vm._v(_vm._s(_vm.baseInfo.status))]
              ),
            ]),
            _c("div", { staticClass: "base_title_bottom" }, [
              _c("div", { staticStyle: { "font-size": "14px" } }, [
                _c("span", { staticClass: "name" }, [
                  _vm._v(_vm._s(_vm.baseInfo.create_user)),
                ]),
                _c("span", { staticClass: "dept" }, [
                  _vm._v("（" + _vm._s(_vm.baseInfo.ssbm) + "）"),
                ]),
              ]),
              _c("span", { staticStyle: { width: "145px" } }, [
                _vm._v(_vm._s(_vm.baseInfo.create_time)),
              ]),
            ]),
          ]),
          _vm._m(0),
          _vm.expandOne === true
            ? _c("div", { staticClass: "content_div" }, [
                _c("div", { staticClass: "content_div_item" }, [
                  _c("span", { staticClass: "text" }, [_vm._v("线索来源")]),
                  _c("br"),
                  _c("span", { staticClass: "value" }, [
                    _vm._v(" " + _vm._s(_vm.baseInfo.type)),
                  ]),
                ]),
                _c("div", { staticClass: "content_div_item" }, [
                  _c("span", { staticClass: "text" }, [_vm._v("相关企业名称")]),
                  _c("br"),
                  _c("span", { staticClass: "value" }, [
                    _vm._v(
                      " " +
                        _vm._s(_vm.baseInfo.enterpriseInfos[0].enterprise_name)
                    ),
                  ]),
                ]),
                _c("div", { staticClass: "content_div_item two" }, [
                  _c("div", { staticClass: "content_div_item" }, [
                    _c("span", { staticClass: "text" }, [_vm._v("法定代表人")]),
                    _c("br"),
                    _c("span", { staticClass: "value" }, [
                      _vm._v(
                        " " +
                          _vm._s(
                            _vm.baseInfo.enterpriseInfos[0].legal_representative
                          )
                      ),
                    ]),
                  ]),
                  _c("div", { staticClass: "content_div_item" }, [
                    _c("span", { staticClass: "text" }, [_vm._v("联系电话")]),
                    _c("br"),
                    _c("span", { staticClass: "value" }, [
                      _vm._v(
                        " " +
                          _vm._s(
                            _vm.baseInfo.enterpriseInfos[0]
                              .legal_representative_tel
                          )
                      ),
                    ]),
                  ]),
                ]),
                _c("div", { staticClass: "content_div_item" }, [
                  _c("span", { staticClass: "text" }, [_vm._v("企业地址")]),
                  _c("br"),
                  _c("span", { staticClass: "value" }, [
                    _vm._v(
                      " " +
                        _vm._s(
                          _vm.baseInfo.enterpriseInfos[0].enterprise_address
                        )
                    ),
                  ]),
                ]),
                _c("div", { staticClass: "content_div_item" }, [
                  _c("span", { staticClass: "text" }, [_vm._v("基本情况")]),
                  _c("br"),
                  _c("span", { staticClass: "value" }, [
                    _vm._v(" " + _vm._s(_vm.baseInfo.basic_info)),
                  ]),
                ]),
                _c("div", { staticClass: "content_div_item" }, [
                  _c("span", { staticClass: "text" }, [_vm._v("备注")]),
                  _c("br"),
                  _c("span", { staticClass: "value" }, [
                    _vm._v(" " + _vm._s(_vm.baseInfo.notes)),
                  ]),
                ]),
              ])
            : _vm._e(),
          _vm.baseInfo.status === "已处理"
            ? _c("div", { staticClass: "center_title" }, [
                _c("span", [_vm._v("处理信息")]),
              ])
            : _vm._e(),
          _vm.baseInfo.status === "已处理"
            ? _c("div", { staticClass: "content_div" }, [
                _c("div", { staticClass: "content_div_item" }, [
                  _c("span", { staticClass: "text" }, [_vm._v("处理人")]),
                  _c("br"),
                  _c("span", { staticClass: "value" }, [
                    _vm._v(" " + _vm._s(_vm.completionInfo.person)),
                  ]),
                ]),
                _c("div", { staticClass: "content_div_item" }, [
                  _c("span", { staticClass: "text" }, [_vm._v("处理时间")]),
                  _c("br"),
                  _c("span", { staticClass: "value" }, [
                    _vm._v(" " + _vm._s(_vm.completionInfo.date)),
                  ]),
                ]),
                _c("div", { staticClass: "content_div_item" }, [
                  _c("span", { staticClass: "text" }, [_vm._v("处理意见")]),
                  _c("br"),
                  _c("span", { staticClass: "value" }, [
                    _vm._v(" " + _vm._s(_vm.completionInfo.opinion)),
                  ]),
                ]),
              ])
            : _vm._e(),
        ]
      ),
      _vm.baseInfo.status === "待处理" && _vm.showOpration
        ? _c("div", { staticClass: "clue-detail-bottom" }, [
            _c(
              "div",
              {
                staticClass: "yes",
                on: {
                  click: function ($event) {
                    return _vm.checkData()
                  },
                },
              },
              [_vm._v("处理")]
            ),
          ])
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
    return _c("div", { staticClass: "center_title" }, [
      _c("span", [_vm._v("基本信息")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/core-js/modules/es.date.to-string.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-string.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4`
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");

var DatePrototype = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var nativeDateToString = uncurryThis(DatePrototype[TO_STRING]);
var thisTimeValue = uncurryThis(DatePrototype.getTime);

// `Date.prototype.toString` method
// https://tc39.es/ecma262/#sec-date.prototype.tostring
if (String(new Date(NaN)) !== INVALID_DATE) {
  defineBuiltIn(DatePrototype, TO_STRING, function toString() {
    var value = thisTimeValue(this);
    // eslint-disable-next-line no-self-compare -- NaN check
    return value === value ? nativeDateToString(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/inHand/inHandDetail/index.vue?vue&type=style&index=0&id=099cdb79&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/inHand/inHandDetail/index.vue?vue&type=style&index=0&id=099cdb79&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".clue-detail-wrapper[data-v-099cdb79] {\n  overflow-y: auto;\n  background-color: #F4F5F7;\n}\n.clue-detail-wrapper .base_div[data-v-099cdb79] {\n  margin: 10px;\n  background: #fff;\n  border-radius: 10px;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n  padding: 15px;\n}\n.clue-detail-wrapper .base_div .base_title_top[data-v-099cdb79] {\n  display: flex;\n  align-items: center;\n  font-weight: 600;\n}\n.clue-detail-wrapper .base_div .base_title_top .name[data-v-099cdb79] {\n  font-size: 18px;\n  color: #000000;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  width: calc(100% - 50px);\n}\n.clue-detail-wrapper .base_div .base_title_top .state[data-v-099cdb79] {\n  margin-left: 5px;\n  width: 50px;\n  text-align: center;\n  height: 20px;\n  line-height: 20px;\n  border-radius: 4px;\n}\n.clue-detail-wrapper .base_div .base_title_bottom[data-v-099cdb79] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 10px;\n}\n.clue-detail-wrapper .base_div .base_title_bottom .name[data-v-099cdb79] {\n  color: #000000;\n}\n.clue-detail-wrapper .base_div .base_title_bottom .dept[data-v-099cdb79] {\n  color: #447bfc;\n}\n.clue-detail-wrapper .center_title[data-v-099cdb79] {\n  display: flex;\n  justify-content: space-between;\n  margin: 0 20px;\n  font-size: 16px;\n  height: 40px;\n  line-height: 40px;\n}\n.clue-detail-wrapper .center_title .expand[data-v-099cdb79] {\n  color: #447bfc;\n  font-size: 12px;\n}\n.clue-detail-wrapper .center_title .expand .iconfont[data-v-099cdb79] {\n  margin-left: 5px;\n}\n.clue-detail-wrapper .center_title .expand .rightIcon[data-v-099cdb79] {\n  transform: rotate(180deg);\n}\n.clue-detail-wrapper .content_div[data-v-099cdb79] {\n  margin: 10px;\n  background: #ffffff;\n  padding: 15px;\n  border-radius: 10px;\n}\n.clue-detail-wrapper .content_div .content_div_item[data-v-099cdb79] {\n  line-height: 20px;\n  margin-bottom: 5px;\n}\n.clue-detail-wrapper .content_div .content_div_item .text[data-v-099cdb79] {\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.clue-detail-wrapper .content_div .content_div_item .value[data-v-099cdb79] {\n  color: #121236;\n  font-size: 14px;\n}\n.clue-detail-wrapper .content_div .content_div_item .val[data-v-099cdb79] {\n  color: #121236;\n  font-size: 14px;\n  border: 1px solid rgba(18, 18, 54, 0.1);\n  padding: 5px 16px;\n  border-radius: 4px;\n}\n.clue-detail-wrapper .content_div .content_div_item .file_div[data-v-099cdb79] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px;\n}\n.clue-detail-wrapper .content_div .content_div_item .file_div a[data-v-099cdb79] {\n  color: #447bfc;\n  margin-right: 20px;\n  cursor: pointer;\n  text-decoration: underline;\n  font-size: 14px;\n}\n.clue-detail-wrapper .content_div .content_div_item p[data-v-099cdb79] {\n  line-height: 16px;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n  padding: 0;\n  margin: 6px 0;\n}\n.clue-detail-wrapper .content_div .two[data-v-099cdb79] {\n  display: flex;\n  justify-content: space-between;\n}\n.clue-detail-wrapper .content_div .two div[data-v-099cdb79] {\n  width: 50%;\n}\n.clue-detail-bottom[data-v-099cdb79] {\n  background: #ffffff;\n  height: 80px;\n  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.clue-detail-bottom .yes[data-v-099cdb79] {\n  width: 130px;\n  height: 35px;\n  line-height: 35px;\n  opacity: 1;\n  border-radius: 20px;\n  background: linear-gradient(142.91deg, #447bfc 0%, #7ca1f7 100%);\n  text-align: center;\n  color: #fff;\n}\n.clue-detail-bottom .no[data-v-099cdb79] {\n  width: 130px;\n  height: 35px;\n  line-height: 35px;\n  opacity: 1;\n  border-radius: 20px;\n  background: linear-gradient(142.91deg, rgba(250, 138, 57, 0.05) 0%, rgba(18, 18, 54, 0.01) 100%);\n  border: 1px solid #ff8d1a;\n  text-align: center;\n  color: #ff8d1a;\n  margin-left: 10px;\n}\n.popTitle[data-v-099cdb79] {\n  text-align: center;\n  font-weight: bold;\n  line-height: 50px;\n}\n.popWrapper[data-v-099cdb79] {\n  max-height: 50vh;\n}\n.popWrapper .popItem[data-v-099cdb79] {\n  display: flex;\n  width: 330px;\n  padding: 10px;\n  font-size: 14px;\n  color: #999;\n}\n.popWrapper .popItem .label[data-v-099cdb79] {\n  width: 160px;\n}\n.popWrapper .popItem .inputW[data-v-099cdb79] {\n  border: 1px solid #ebedf0;\n  padding-left: 5px;\n  width: calc(100% - 85px);\n}\n.popWrapper .popItem .search-item[data-v-099cdb79] {\n  width: 100%;\n  padding: 6px;\n  /*background: rgba(246, 246, 246, 1);*/\n  border-radius: 6px;\n  color: rgba(0, 0, 0, 0.8);\n  margin-right: 5px;\n}\n.popWrapper .popFile[data-v-099cdb79] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 160px;\n  margin-left: 85px;\n  padding: 5px 0;\n}\n.popWrapper .popFile .label[data-v-099cdb79] {\n  width: 90%;\n  height: 24px;\n  color: #2f87f0;\n  text-decoration: underline;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.popFooter[data-v-099cdb79] {\n  display: flex;\n  border-top: 1px solid #ebedf0;\n}\n.popFooter div[data-v-099cdb79] {\n  width: 50%;\n  padding: 14px 0;\n  text-align: center;\n  font-size: 16px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/inHand/inHandDetail/index.vue?vue&type=style&index=1&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/inHand/inHandDetail/index.vue?vue&type=style&index=1&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".van-steps--vertical {\n  padding: 15px 0 10px 45px;\n}\n.van-steps--vertical .van-step__line {\n  top: 44px;\n  left: -17px;\n  width: 3px;\n  height: 20px;\n  color: rgba(18, 18, 54, 0.1);\n}\n.van-steps--vertical :not(:last-child)::after {\n  border-bottom-width: 0;\n}\n.van-step--finish .van-step__circle, .van-step--finish .van-step__line {\n  background-color: rgba(18, 18, 54, 0.1);\n}\n.van-steps .van-hairline {\n  height: 50px;\n}\n.van-steps .van-step__circle-container {\n  width: 40px;\n  background: #447bfc;\n  height: 40px;\n  border-radius: 40px;\n}\n.van-steps .step-item {\n  left: 14px;\n  position: absolute;\n  display: flex;\n  width: 315px;\n  height: 40px;\n  text-align: center;\n  align-items: center;\n  font-size: 12px;\n}\n.van-steps .step-item .step-active-icon .finish-icon {\n  position: absolute;\n  top: 30px;\n  left: 15px;\n}\n.van-steps .step-item .step_title {\n  margin-left: 30px;\n  line-height: 25px;\n  width: calc(100% - 55px);\n  color: #121236;\n}\n.van-steps .step-item .step_title .stepName {\n  font-size: 16px;\n}\n.van-steps .step-item .step_title .stepDept {\n  color: #447bfc;\n  margin-left: 10px;\n}\n.van-steps .step-item .step_title .department {\n  color: rgba(18, 18, 54, 0.5);\n}\n.van-steps .step-item .step_title .status {\n  color: #ff8d1a;\n  margin-left: 10px;\n}\n.van-steps .step-item .title-active {\n  color: rgba(18, 18, 54, 0.5);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/inHand/inHandDetail/index.vue?vue&type=style&index=0&id=099cdb79&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/inHand/inHandDetail/index.vue?vue&type=style&index=0&id=099cdb79&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=099cdb79&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/inHand/inHandDetail/index.vue?vue&type=style&index=0&id=099cdb79&scoped=true&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("79fbb0ca", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/inHand/inHandDetail/index.vue?vue&type=style&index=1&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/inHand/inHandDetail/index.vue?vue&type=style&index=1&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/inHand/inHandDetail/index.vue?vue&type=style&index=1&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("370eb99e", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/views/inHand/inHandDetail/index.vue":
/*!*************************************************!*\
  !*** ./src/views/inHand/inHandDetail/index.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_099cdb79_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=099cdb79&scoped=true& */ "./src/views/inHand/inHandDetail/index.vue?vue&type=template&id=099cdb79&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/inHand/inHandDetail/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_099cdb79_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=099cdb79&scoped=true&lang=scss& */ "./src/views/inHand/inHandDetail/index.vue?vue&type=style&index=0&id=099cdb79&scoped=true&lang=scss&");
/* harmony import */ var _index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=1&lang=scss& */ "./src/views/inHand/inHandDetail/index.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_099cdb79_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_099cdb79_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "099cdb79",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/inHand/inHandDetail/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/inHand/inHandDetail/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./src/views/inHand/inHandDetail/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/inHand/inHandDetail/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/inHand/inHandDetail/index.vue?vue&type=style&index=0&id=099cdb79&scoped=true&lang=scss&":
/*!***********************************************************************************************************!*\
  !*** ./src/views/inHand/inHandDetail/index.vue?vue&type=style&index=0&id=099cdb79&scoped=true&lang=scss& ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_099cdb79_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=099cdb79&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/inHand/inHandDetail/index.vue?vue&type=style&index=0&id=099cdb79&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_099cdb79_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_099cdb79_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_099cdb79_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_099cdb79_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/inHand/inHandDetail/index.vue?vue&type=style&index=1&lang=scss&":
/*!***********************************************************************************!*\
  !*** ./src/views/inHand/inHandDetail/index.vue?vue&type=style&index=1&lang=scss& ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/inHand/inHandDetail/index.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/inHand/inHandDetail/index.vue?vue&type=template&id=099cdb79&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./src/views/inHand/inHandDetail/index.vue?vue&type=template&id=099cdb79&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_9d17f796_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_099cdb79_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"9d17f796-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=099cdb79&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"9d17f796-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/inHand/inHandDetail/index.vue?vue&type=template&id=099cdb79&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_9d17f796_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_099cdb79_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_9d17f796_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_099cdb79_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2luSGFuZC9pbkhhbmREZXRhaWwvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9pbkhhbmQvaW5IYW5kRGV0YWlsL2luZGV4LnZ1ZT9iZWNlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuZGF0ZS50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2luSGFuZC9pbkhhbmREZXRhaWwvaW5kZXgudnVlP2NiMjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2luSGFuZC9pbkhhbmREZXRhaWwvaW5kZXgudnVlP2E1OTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2luSGFuZC9pbkhhbmREZXRhaWwvaW5kZXgudnVlPzBlZTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2luSGFuZC9pbkhhbmREZXRhaWwvaW5kZXgudnVlPzUyZjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2luSGFuZC9pbkhhbmREZXRhaWwvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9pbkhhbmQvaW5IYW5kRGV0YWlsL2luZGV4LnZ1ZT9jYmI1Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9pbkhhbmQvaW5IYW5kRGV0YWlsL2luZGV4LnZ1ZT8zZjVhIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9pbkhhbmQvaW5IYW5kRGV0YWlsL2luZGV4LnZ1ZT8zYTA4Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9pbkhhbmQvaW5IYW5kRGV0YWlsL2luZGV4LnZ1ZT8wYzM1Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdHQTtBQUNBO0FBQ0E7QUFDQSxl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aUMsR0FBRyw2Q0FBNkMsbUJBQW1CLHNCQUFzQixHQUFHLHVDQUF1QyxpQ0FBaUMsR0FBRztBQUN2NUM7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsc3pCQUF5ZDtBQUMvZTtBQUNBLDRDQUE0QyxRQUFTO0FBQ3JEO0FBQ0E7QUFDQSxVQUFVLG1CQUFPLENBQUMsZ0lBQW1FO0FBQ3JGLDhDQUE4QyxxQ0FBcUM7QUFDbkY7QUFDQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7OztBQ1hmOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLHN3QkFBaWM7QUFDdmQ7QUFDQSw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLGdJQUFtRTtBQUNyRiw4Q0FBOEMscUNBQXFDO0FBQ25GO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDWGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdHO0FBQ3ZDO0FBQ0w7QUFDc0M7QUFDeEI7OztBQUdsRTtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsNEZBQU07QUFDUixFQUFFLHFHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN4Q2Y7QUFBQTtBQUFBLHdDQUEwUyxDQUFnQixzVUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E5VDtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzLzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2PlxyXG4gICAgICAgIDx2YW4tbmF2LWJhciA6dGl0bGU9XCJuYXZUaXRsZVwiIGxlZnQtYXJyb3cgQGNsaWNrLWxlZnQ9XCIkcm91dGVyLmdvKC0xKVwiLz5cclxuICAgICAgICA8dmFuLWxvYWRpbmcgdi1pZj1cImxvYWRpbmdcIiBzaXplPVwiMjRweFwiIGNvbG9yPVwiIzAwOTRmZlwiIHZlcnRpY2FsIHN0eWxlPVwibWFyZ2luLXRvcDogNTAlXCI+5Yqg6L295LitLi4uPC92YW4tbG9hZGluZz5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2x1ZS1kZXRhaWwtd3JhcHBlclwiIHN0eWxlPVwiaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTM1cHgpXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYXNlX2RpdlwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJhc2VfdGl0bGVfdG9wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYW1lXCI+e3sgYmFzZUluZm8udHlwZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdGVcIiA6c3R5bGU9XCJnZXRTdHlsZUNvbG9yKGJhc2VJbmZvLnN0YXR1cylcIj57eyBiYXNlSW5mby5zdGF0dXMgfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJhc2VfdGl0bGVfYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImZvbnQtc2l6ZTogMTRweDtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYW1lXCI+e3tiYXNlSW5mby5jcmVhdGVfdXNlcn19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlcHRcIj7vvIh7e2Jhc2VJbmZvLnNzYm19fe+8iTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cIndpZHRoOiAxNDVweDtcIj57e2Jhc2VJbmZvLmNyZWF0ZV90aW1lfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXJfdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPuWfuuacrOS/oeaBrzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiZXhwYW5kXCIgQGNsaWNrPVwiZXhwYW5kKDEpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgZXhwYW5kT25lID09PSB0cnVlID8gJ+aUtui1tycgOiAn5bGV5byAJ319PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2YW4taWNvbiA6Y2xhc3M9XCJleHBhbmRPbmUgPT09IHRydWUgPyAnaWNvbmZvbnQgdmFuLWljb24tYXJyb3ctZG93bic6J2ljb25mb250IHZhbi1pY29uLWFycm93LWxlZnQgcmlnaHRJY29uJ1wiPjwvdmFuLWljb24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj4tLT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgdi1pZj1cImV4cGFuZE9uZSA9PT0gdHJ1ZVwiIGNsYXNzPVwiY29udGVudF9kaXZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X2Rpdl9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+57q/57Si5p2l5rqQPC9zcGFuPjxicj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+IHt7IGJhc2VJbmZvLnR5cGUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X2Rpdl9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+55u45YWz5LyB5Lia5ZCN56ewPC9zcGFuPjxicj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+IHt7IGJhc2VJbmZvLmVudGVycHJpc2VJbmZvc1swXS5lbnRlcnByaXNlX25hbWUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X2Rpdl9pdGVtIHR3b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X2Rpdl9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPuazleWumuS7o+ihqOS6ujwvc3Bhbj48YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4ge3sgYmFzZUluZm8uZW50ZXJwcmlzZUluZm9zWzBdLmxlZ2FsX3JlcHJlc2VudGF0aXZlIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X2Rpdl9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGV4dFwiPuiBlOezu+eUteivnTwvc3Bhbj48YnI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4ge3sgYmFzZUluZm8uZW50ZXJwcmlzZUluZm9zWzBdLmxlZ2FsX3JlcHJlc2VudGF0aXZlX3RlbCB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfZGl2X2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj7kvIHkuJrlnLDlnYA8L3NwYW4+PGJyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4ge3sgYmFzZUluZm8uZW50ZXJwcmlzZUluZm9zWzBdLmVudGVycHJpc2VfYWRkcmVzcyB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfZGl2X2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj7ln7rmnKzmg4XlhrU8L3NwYW4+PGJyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4ge3sgYmFzZUluZm8uYmFzaWNfaW5mbyB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfZGl2X2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj7lpIfms6g8L3NwYW4+PGJyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4ge3sgYmFzZUluZm8ubm90ZXMgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgdi1pZj1cImJhc2VJbmZvLnN0YXR1cyA9PT0gJ+W3suWkhOeQhidcIiBjbGFzcz1cImNlbnRlcl90aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+5aSE55CG5L+h5oGvPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiYmFzZUluZm8uc3RhdHVzID09PSAn5bey5aSE55CGJ1wiIGNsYXNzPVwiY29udGVudF9kaXZcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50X2Rpdl9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZXh0XCI+5aSE55CG5Lq6PC9zcGFuPjxicj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+IHt7IGNvbXBsZXRpb25JbmZvLnBlcnNvbiB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfZGl2X2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj7lpITnkIbml7bpl7Q8L3NwYW4+PGJyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4ge3sgY29tcGxldGlvbkluZm8uZGF0ZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfZGl2X2l0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRleHRcIj7lpITnkIbmhI/op4E8L3NwYW4+PGJyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidmFsdWVcIj4ge3sgY29tcGxldGlvbkluZm8ub3BpbmlvbiB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHYtaWY9XCJiYXNlSW5mby5zdGF0dXMgPT09ICflvoXlpITnkIYnICYmIHNob3dPcHJhdGlvblwiIGNsYXNzPVwiY2x1ZS1kZXRhaWwtYm90dG9tXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ5ZXNcIiBAY2xpY2s9XCJjaGVja0RhdGEoKVwiPuWkhOeQhjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS3lpITnkIblvLnmoYYtLT5cclxuICAgICAgICA8dmFuLXBvcHVwIHYtbW9kZWw9XCJzaG93Q2hlY2tcIiA6Y2xvc2VhYmxlPVwiZmFsc2VcIiByb3VuZD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcFRpdGxlXCI+e3sgdGl0bGUgfX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcFdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3BJdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJ3aWR0aDogODBweDtcIj7lpITnkIbmhI/op4HvvJo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHJvd3M9XCI2XCIgdi1tb2RlbD1cIm9waW5pb25cIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpVwiIGNsYXNzPVwiaW5wdXRXXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcEZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBAY2xpY2s9XCJzaG93Q2hlY2sgPSBmYWxzZVwiPuWPlua2iDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiA6bG9hZGluZz1cImJ0bkxvYWRpbmdcIiBAY2xpY2s9XCJvblN1cmVDaGVja1wiIHN0eWxlPVwiY29sb3I6ICMxOTg5ZmE7Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWJlZGYwXCI+56Gu6K6kPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvdmFuLXBvcHVwPlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHtUb2FzdH0gZnJvbSBcInZhbnRcIjtcclxuICAgIGltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbmFtZTogXCJpbmRleFwiLFxyXG4gICAgICAgIGRhdGEgKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudFVzZXJJZDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIiksXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50RGVwdDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2RlcHQnKSxcclxuICAgICAgICAgICAgICAgIGNsdWVJZDogJycsXHJcbiAgICAgICAgICAgICAgICBuYXZUaXRsZTogJ+W+heWKnuivpuaDhScsXHJcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHJlY2VpdmVJZHM6ICcnLFxyXG4gICAgICAgICAgICAgICAgc2hvd09wcmF0aW9uOiB0cnVlLCAvLyDmk43kvZzmjInpkq7mmK/lkKbmmL7npLpcclxuICAgICAgICAgICAgICAgIHNob3dGZWVkQmFjazogZmFsc2UsLy9cclxuICAgICAgICAgICAgICAgIGJhc2VJbmZvOiB7fSxcclxuICAgICAgICAgICAgICAgIGltYWdlczogW10sXHJcbiAgICAgICAgICAgICAgICBmaWxlczogW10sXHJcbiAgICAgICAgICAgICAgICBleGFtaW5lSW5mbzoge30sXHJcbiAgICAgICAgICAgICAgICBhcHByb3ZlSW5mbzoge30sXHJcbiAgICAgICAgICAgICAgICBkaXN0cmlidXRpb25JbmZvOiB7fSxcclxuICAgICAgICAgICAgICAgIHZlcmlmeUluZm86IHt9LFxyXG4gICAgICAgICAgICAgICAgY29tcGxldGlvbkluZm86IHt9LFxyXG4gICAgICAgICAgICAgICAgcmVjb3JkSW5mbzoge30sXHJcbiAgICAgICAgICAgICAgICBpbWFnZXNfcmVjb3JkOiBbXSxcclxuICAgICAgICAgICAgICAgIGZpbGVzX3JlY29yZDogW10sXHJcbiAgICAgICAgICAgICAgICBleHBhbmRPbmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBleHBhbmRUd286IHRydWUsXHJcbiAgICAgICAgICAgICAgICBleHBhbmRUaHJlZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBhY3RpdmVJbmRleDogMCxcclxuICAgICAgICAgICAgICAgIHN0ZXBEYXRhOltdLFxyXG4gICAgICAgICAgICAgICAgc2hvd09uZTogJycsXHJcbiAgICAgICAgICAgICAgICBmbG93SWQ6JycsXHJcbiAgICAgICAgICAgICAgICAvLyDlrqHmoLgv5a6h5om5XHJcbiAgICAgICAgICAgICAgICBzaG93Q2hlY2s6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICflrqHmoLgnLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAn5pivJyxcclxuICAgICAgICAgICAgICAgIG9waW5pb246ICcnLFxyXG4gICAgICAgICAgICAgICAgYXBwcm92YWxJbmZvOntcclxuICAgICAgICAgICAgICAgICAgICBqb2ludF9zdGF0dXM6ICfmmK8nLFxyXG4gICAgICAgICAgICAgICAgICAgIGpvaW50X2RlcGFydG1lbnQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlYWRlcl91c2VyX2lkOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBsZWFkZXJfdXNlcjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBibUxpc3Q6IFsn5piG5piO5biC5Y+R5bGV5ZKM5pS56Z2p5aeU5ZGY5LyaJywn5piG5piO5biC5bel5Lia5ZKM5L+h5oGv5YyW5bGAJywn5piG5piO5biC56eR5a2m5oqA5pyv5bGAJywn5piG5piO5biC5rCR5peP5a6X5pWZ5LqL5Yqh5aeU5ZGY5LyaJyxcclxuICAgICAgICAgICAgICAgICAgICAn5piG5piO5biC5YWs5a6J5bGAJywn5piG5piO5biC5rCR5pS/5bGAJywn5piG5piO5biC5Y+45rOV5bGAJywn5piG5piO5biC6LSi5pS/5bGAJywn5piG5piO5biC5Lq65Yqb6LWE5rqQ5ZKM56S+5Lya5L+d6Zqc5bGAJyxcclxuICAgICAgICAgICAgICAgICAgICAn5piG5piO5biC6Ieq54S26LWE5rqQ5ZKM6KeE5YiS5bGAJywn5piG5piO5biC5L2P5oi/5ZKM5Z+O5Lmh5bu66K6+5bGAJywn5piG5piO5biC5Lqk6YCa6L+Q6L6T5bGAJywn5piG5piO5biC5Yac5Lia5Yac5p2R5bGAJ1xyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHNob3dQaWNrZXJUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxlYWRlckxpc3Q6IFtdLFxyXG4gICAgICAgICAgICAgICAgc2hvd1BpY2tlckRlcHQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYnRuTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmdW5jOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgY2hlY2tib3hWYWx1ZTogW10sXHJcbiAgICAgICAgICAgICAgICBjaGVja2VkQWxsOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8vIOWIhuWPkVxyXG4gICAgICAgICAgICAgICAgc2hvd0Rpc3RyaWJ1dGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZGlzdHJpYnV0ZUluZm86IHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAn5pSv6ZifJyxcclxuICAgICAgICAgICAgICAgICAgICBsZWFkZXJfdXNlcl9pZDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVhZGVyX3VzZXI6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlcHQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlcHRfaWQ6ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgYnJvYW5jaHM6W10sXHJcbiAgICAgICAgICAgICAgICBwZXJzb25zOiBbXSxcclxuICAgICAgICAgICAgICAgIHNob3dQaWNrZXJMZWFkZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2hvd1BpY2tlckxlYWRlcjI6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8g5qC45a6eXHJcbiAgICAgICAgICAgICAgICB2ZXJpZnlEYXRhczp7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZV9pZDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgdmVyaWZ5X3Jlc3VsdHM6ICfnu4/moLjlrp7vvIzkuI3lrZjlnKjov53ms5XooYzkuLonLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vdGU6ICcnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2hvd1ZlcmlmeTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaG93QXBwbHk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2hvd0FwcGx5RmluaXNoOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGNoZWNrUmVjb3JkSWQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgZmlsZUxpc3Q6IFtdLFxyXG4gICAgICAgICAgICAgICAgY2hlY2tpbmdJbmZvOiBbXSxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZTogW10sXHJcbiAgICAgICAgICAgICAgICAvLyDlip7nu5NcclxuICAgICAgICAgICAgICAgIGZpbmlzaEluZm86IHtcclxuICAgICAgICAgICAgICAgICAgICByZWN0aWZpY2F0aW9uX3N0YXR1czogJ+aYrycsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVjdGlmaWNhdGlvbl9jb250ZW50OiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC8vIOaVtOaUueWPjemmiFxyXG4gICAgICAgICAgICAgICAgc2hvd0ZlZWQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZmVlZGJhY2tJbmZvOntcclxuICAgICAgICAgICAgICAgICAgICBmaW5pc2hfdGltZTogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBkYXRlUG9wOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIC8v546w5Zy65qOA5p+l6K6w5b2VXHJcbiAgICAgICAgICAgICAgICBzdGFydDogJycsXHJcbiAgICAgICAgICAgICAgICBlbmQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgc2hvd1BpY2tlckRhdGUxOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNob3dQaWNrZXJEYXRlMjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaG93UGlja2VyRGF0ZTM6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2hvd1BpY2tlckRhdGU0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNob3dQaWNrZXJEYXRlNTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaG93UGlja2VyRGF0ZTY6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbWF4RGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnREYXRlOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFRpbWU6ICcwMDowMCcsXHJcbiAgICAgICAgICAgICAgICAvL+aVtOaUueWPjemmiOS/oeaBr1xyXG4gICAgICAgICAgICAgICAgcmVjdGlmaWNhdGlvbkluZm86e30sXHJcbiAgICAgICAgICAgICAgICB0YXNrVHlwZTogJycgLy/kuLrnqbrmiJbogIVudWxsIOaYr+e6v+e0ou+8jOacieWAvOeahCDmmK/pl63njq9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbW91bnRlZCgpIHtcclxuICAgICAgICAgICAgdGhpcy5uYXZUaXRsZSA9IHRoaXMuJHJvdXRlLnBhcmFtcy5mbGFnO1xyXG4gICAgICAgICAgICB0aGlzLmNsdWVJZCA9IHRoaXMuJHJvdXRlLnBhcmFtcy5jbHVlSWQ7XHJcbiAgICAgICAgICAgIHRoaXMucXVlcnlDbHVlRGV0YWlsKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOntcclxuICAgICAgICAgICAgYXN5bmMgcXVlcnlDbHVlRGV0YWlsKCl7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoJy96c2hiL3F1ZXJ5SW5IYW5kRGV0YWlsJywgeyBpZDogdGhpcy5jbHVlSWQgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5jb2RlID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2VJbmZvID0gcmVzcG9uc2UuZGF0YS5kYXRhLmRldGFpbF9pbmZvO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd09uZSA9IHJlc3BvbnNlLmRhdGEuZGF0YS5kZXRhaWxfaW5mby5idXNpbmVzc191bml0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGFza1R5cGUgPSB0aGlzLmJhc2VJbmZvLnRhc2tfdHlwZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRpb25JbmZvID1yZXNwb25zZS5kYXRhLmRhdGEuY29tcGxldGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVzID0gdGhpcy5iYXNlSW5mby5maWxlX2xpc3Q7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIFRvYXN0KHJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldFN0eWxlQ29sb3Ioc3RhdGUpe1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlID09PSAn5b6F5aGr5YaZJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnYmFja2dyb3VuZDogcmdiYSgyNDQsIDEzMSwgMCwgMC4xKTtjb2xvcjpyZ2JhKDI0NCwgMTMxLCAwLCAxKTsnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gJ+W+heWuoeaguCcgfHxzdGF0ZSA9PT0gJ+W+heWuoeaJuScgfHwgc3RhdGUgPT09ICflvoXliIblj5EnIHx8IHN0YXRlID09PSAn5b6F5qC45a6eJ3x8IHN0YXRlID09PSAn5b6F5aSE55CGJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnYmFja2dyb3VuZDogcmdiYSgyNTUsIDE0MSwgMjYsIDAuMSk7Y29sb3I6cmdiYSgyNTUsIDE0MSwgMjYsIDEpOyc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSAn5b6F5Yqe57uTJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnYmFja2dyb3VuZDogcmdiYSgyMjcsIDIxOCwgMCwgMC4xKTtjb2xvcjpyZ2JhKDIyNywgMjE4LCAwLCAxKTsnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gJ+W3suWKnue7kycgfHwgc3RhdGUgPT09ICflt7LlpITnkIYnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdiYWNrZ3JvdW5kOiByZ2JhKDIsIDIxNywgMTI3LCAwLjEpO2NvbG9yOnJnYmEoMiwgMjE3LCAxMjcsIDEpOyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRvd25sb2FkKHVybCl7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cub3Blbih1cmwpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBleHBhbmQoZmxhZyl7XHJcbiAgICAgICAgICAgICAgICBpZihmbGFnID09PSAxKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZE9uZSA9ICF0aGlzLmV4cGFuZE9uZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihmbGFnID09PSAyKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZFR3byA9ICF0aGlzLmV4cGFuZFR3bztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihmbGFnID09PSAzKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZFRocmVlID0gIXRoaXMuZXhwYW5kVGhyZWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSDlpITnkIZcclxuICAgICAgICAgICAgY2hlY2tEYXRhKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9waW5pb24gPSAnJztcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NoZWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGl0bGUgPSAn5aSE55CGJztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy/mj5DkuqRcclxuICAgICAgICAgICAgb25TdXJlQ2hlY2soKXtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuYnRuTG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAvLyBsZXQgcGFyYW1zID0ge307XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmZ1bmMocGFyYW1zKS50aGVuKHJlcyA9PntcclxuICAgICAgICAgICAgICAgIC8vICAgICBpZihyZXMuY29kZSA9PT0gJzIwMCcpe1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBUb2FzdCh0aGlzLnRpdGxlICsgJ+aIkOWKnyEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Q2hlY2sgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5iYXNlSW5mby5zdGF0dXMgPSAn5bey5aSE55CGJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0aW9uSW5mby5vcGluaW9uID0gdGhpcy5vcGluaW9uO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIFRvYXN0KCflpLHotKUhJyk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfSkuZmluYWxseShyZSA9PntcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmJ0bkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG4gICAgLmNsdWUtZGV0YWlsLXdyYXBwZXIge1xyXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjVGNztcclxuICAgICAgICAuYmFzZV9kaXYge1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgLmJhc2VfdGl0bGVfdG9wIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgICAgIC5uYW1lIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zdGF0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYmFzZV90aXRsZV9ib3R0b20ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmRlcHQge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDY4LCAxMjMsIDI1MiwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmNlbnRlcl90aXRsZXtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgMjBweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgICAgICAgICAuZXhwYW5kIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDY4LCAxMjMsIDI1MiwgMSk7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAuaWNvbmZvbnQge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAucmlnaHRJY29uIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250ZW50X2RpdiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgICAgICAgcGFkZGluZzogMTVweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgLmNvbnRlbnRfZGl2X2l0ZW0ge1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudmFsdWUge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC52YWwge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE4LCAxOCwgNTQsIDAuMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmZpbGVfZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSg2OCwgMTIzLCAyNTIsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBwIHtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogNnB4IDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnR3byB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDo1MCVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jbHVlLWRldGFpbC1ib3R0b20ge1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCAwcHggMjBweCAgcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIC55ZXMge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDIuOTFkZWcsICM0NDdiZmMgMCUsICM3Y2ExZjcgMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAubm8ge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDIuOTFkZWcsIHJnYmEoMjUwLCAxMzgsIDU3LCAwLjA1KSAwJSwgcmdiYSgxOCwgMTgsIDU0LCAwLjAxKSAxMDAlKTtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAxNDEsIDI2LCAxKTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMTQxLCAyNiwgMSk7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgIH1cclxuICAgIC5wb3BUaXRsZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLnBvcFdyYXBwZXIge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoNTB2aCk7XHJcblxyXG4gICAgICAgIC5wb3BJdGVtIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgd2lkdGg6IDMzMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgICAubGFiZWwge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pbnB1dFcge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ViZWRmMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDg1cHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zZWFyY2gtaXRlbSB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDZweDtcclxuICAgICAgICAgICAgICAgIC8qYmFja2dyb3VuZDogcmdiYSgyNDYsIDI0NiwgMjQ2LCAxKTsqL1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wb3BGaWxlIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICB3aWR0aDogMTYwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4NXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMDtcclxuXHJcbiAgICAgICAgICAgIC5sYWJlbCB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICMyZjg3ZjA7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucG9wRm9vdGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWJlZGYwO1xyXG5cclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNHB4IDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zdHlsZT5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcbiAgICAudmFuLXN0ZXBzLS12ZXJ0aWNhbCB7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAwIDEwcHggNDVweDtcclxuICAgICAgICAudmFuLXN0ZXBfX2xpbmUge1xyXG4gICAgICAgICAgICB0b3A6IDQ0cHg7XHJcbiAgICAgICAgICAgIGxlZnQ6IC0xN3B4O1xyXG4gICAgICAgICAgICB3aWR0aDogM3B4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDpub3QoOmxhc3QtY2hpbGQpOjphZnRlciB7XHJcbiAgICAgICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC52YW4tc3RlcC0tZmluaXNoIC52YW4tc3RlcF9fY2lyY2xlLCAudmFuLXN0ZXAtLWZpbmlzaCAudmFuLXN0ZXBfX2xpbmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC4xKTtcclxuICAgIH1cclxuICAgIC52YW4tc3RlcHMge1xyXG4gICAgICAgIC52YW4taGFpcmxpbmUge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC52YW4tc3RlcF9fY2lyY2xlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA0MHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDY4LCAxMjMsIDI1MiwgMSk7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnN0ZXAtaXRlbSB7XHJcbiAgICAgICAgICAgIGxlZnQ6IDE0cHg7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgd2lkdGg6IDMxNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAuc3RlcC1hY3RpdmUtaWNvbiB7XHJcbiAgICAgICAgICAgICAgICAuZmluaXNoLWljb24ge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMTVweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc3RlcF90aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMzBweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDU1cHgpO1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMSk7XHJcbiAgICAgICAgICAgICAgICAuc3RlcE5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5zdGVwRGVwdCB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoNjgsIDEyMywgMjUyLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5kZXBhcnRtZW50IHtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnN0YXR1cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAxNDEsIDI2LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudGl0bGUtYWN0aXZlIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJ2YW4tbmF2LWJhclwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHRpdGxlOiBfdm0ubmF2VGl0bGUsIFwibGVmdC1hcnJvd1wiOiBcIlwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgXCJjbGljay1sZWZ0XCI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0uJHJvdXRlci5nbygtMSlcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBfdm0ubG9hZGluZ1xuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJ2YW4tbG9hZGluZ1wiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi10b3BcIjogXCI1MCVcIiB9LFxuICAgICAgICAgICAgICBhdHRyczogeyBzaXplOiBcIjI0cHhcIiwgY29sb3I6IFwiIzAwOTRmZlwiLCB2ZXJ0aWNhbDogXCJcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCLliqDovb3kuK0uLi5cIildXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJjbHVlLWRldGFpbC13cmFwcGVyXCIsXG4gICAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcImNhbGMoMTAwdmggLSAxMzVweClcIiB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJiYXNlX2RpdlwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYmFzZV90aXRsZV90b3BcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hbWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uYmFzZUluZm8udHlwZSkpLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgc3R5bGU6IF92bS5nZXRTdHlsZUNvbG9yKF92bS5iYXNlSW5mby5zdGF0dXMpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmJhc2VJbmZvLnN0YXR1cykpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJhc2VfdGl0bGVfYm90dG9tXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY1N0eWxlOiB7IFwiZm9udC1zaXplXCI6IFwiMTRweFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hbWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5iYXNlSW5mby5jcmVhdGVfdXNlcikpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImRlcHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCLvvIhcIiArIF92bS5fcyhfdm0uYmFzZUluZm8uc3NibSkgKyBcIu+8iVwiKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjE0NXB4XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uYmFzZUluZm8uY3JlYXRlX3RpbWUpKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgX3ZtLmV4cGFuZE9uZSA9PT0gdHJ1ZVxuICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRfZGl2XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudF9kaXZfaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KFwi57q/57Si5p2l5rqQXCIpXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsdWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uYmFzZUluZm8udHlwZSkpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50X2Rpdl9pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtfdm0uX3YoXCLnm7jlhbPkvIHkuJrlkI3np7BcIildKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uYmFzZUluZm8uZW50ZXJwcmlzZUluZm9zWzBdLmVudGVycHJpc2VfbmFtZSlcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudF9kaXZfaXRlbSB0d29cIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRfZGl2X2l0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KFwi5rOV5a6a5Luj6KGo5Lq6XCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5iYXNlSW5mby5lbnRlcnByaXNlSW5mb3NbMF0ubGVnYWxfcmVwcmVzZW50YXRpdmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRfZGl2X2l0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KFwi6IGU57O755S16K+dXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5iYXNlSW5mby5lbnRlcnByaXNlSW5mb3NbMF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5sZWdhbF9yZXByZXNlbnRhdGl2ZV90ZWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50X2Rpdl9pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtfdm0uX3YoXCLkvIHkuJrlnLDlnYBcIildKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmJhc2VJbmZvLmVudGVycHJpc2VJbmZvc1swXS5lbnRlcnByaXNlX2FkZHJlc3NcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudF9kaXZfaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KFwi5Z+65pys5oOF5Ya1XCIpXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsdWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uYmFzZUluZm8uYmFzaWNfaW5mbykpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50X2Rpdl9pdGVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGV4dFwiIH0sIFtfdm0uX3YoXCLlpIfms6hcIildKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5iYXNlSW5mby5ub3RlcykpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5iYXNlSW5mby5zdGF0dXMgPT09IFwi5bey5aSE55CGXCJcbiAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJfdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlpITnkIbkv6Hmga9cIildKSxcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLmJhc2VJbmZvLnN0YXR1cyA9PT0gXCLlt7LlpITnkIZcIlxuICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRfZGl2XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudF9kaXZfaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KFwi5aSE55CG5Lq6XCIpXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsdWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uY29tcGxldGlvbkluZm8ucGVyc29uKSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRfZGl2X2l0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0ZXh0XCIgfSwgW192bS5fdihcIuWkhOeQhuaXtumXtFwiKV0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbHVlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmNvbXBsZXRpb25JbmZvLmRhdGUpKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudF9kaXZfaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRleHRcIiB9LCBbX3ZtLl92KFwi5aSE55CG5oSP6KeBXCIpXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidmFsdWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uY29tcGxldGlvbkluZm8ub3BpbmlvbikpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLmJhc2VJbmZvLnN0YXR1cyA9PT0gXCLlvoXlpITnkIZcIiAmJiBfdm0uc2hvd09wcmF0aW9uXG4gICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbHVlLWRldGFpbC1ib3R0b21cIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInllc1wiLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoZWNrRGF0YSgpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCLlpITnkIZcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2YW4tcG9wdXBcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IGNsb3NlYWJsZTogZmFsc2UsIHJvdW5kOiBcIlwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hvd0NoZWNrLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLnNob3dDaGVjayA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2hvd0NoZWNrXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicG9wVGl0bGVcIiB9LCBbX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKV0pLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicG9wV3JhcHBlclwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicG9wSXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiODBweFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIuWkhOeQhuaEj+inge+8mlwiKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5vcGluaW9uLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm9waW5pb25cIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFdcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyByb3dzOiBcIjZcIiwgcGxhY2Vob2xkZXI6IFwi6K+36L6T5YWlXCIgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLm9waW5pb24gfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3ZtLm9waW5pb24gPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwb3BGb290ZXJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0uc2hvd0NoZWNrID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIuWPlua2iFwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMTk4OWZhXCIsXG4gICAgICAgICAgICAgICAgICBcImJvcmRlci1sZWZ0XCI6IFwiMXB4IHNvbGlkICNlYmVkZjBcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxvYWRpbmc6IF92bS5idG5Mb2FkaW5nIH0sXG4gICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vblN1cmVDaGVjayB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwi56Gu6K6kXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyX3RpdGxlXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLln7rmnKzkv6Hmga9cIildKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIndXNlIHN0cmljdCc7XG4vLyBUT0RPOiBSZW1vdmUgZnJvbSBgY29yZS1qc0A0YFxudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG5cbnZhciBEYXRlUHJvdG90eXBlID0gRGF0ZS5wcm90b3R5cGU7XG52YXIgSU5WQUxJRF9EQVRFID0gJ0ludmFsaWQgRGF0ZSc7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciBuYXRpdmVEYXRlVG9TdHJpbmcgPSB1bmN1cnJ5VGhpcyhEYXRlUHJvdG90eXBlW1RPX1NUUklOR10pO1xudmFyIHRoaXNUaW1lVmFsdWUgPSB1bmN1cnJ5VGhpcyhEYXRlUHJvdG90eXBlLmdldFRpbWUpO1xuXG4vLyBgRGF0ZS5wcm90b3R5cGUudG9TdHJpbmdgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1kYXRlLnByb3RvdHlwZS50b3N0cmluZ1xuaWYgKFN0cmluZyhuZXcgRGF0ZShOYU4pKSAhPT0gSU5WQUxJRF9EQVRFKSB7XG4gIGRlZmluZUJ1aWx0SW4oRGF0ZVByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICB2YXIgdmFsdWUgPSB0aGlzVGltZVZhbHVlKHRoaXMpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmUgLS0gTmFOIGNoZWNrXG4gICAgcmV0dXJuIHZhbHVlID09PSB2YWx1ZSA/IG5hdGl2ZURhdGVUb1N0cmluZyh0aGlzKSA6IElOVkFMSURfREFURTtcbiAgfSk7XG59XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNsdWUtZGV0YWlsLXdyYXBwZXJbZGF0YS12LTA5OWNkYjc5XSB7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjVGNztcXG59XFxuLmNsdWUtZGV0YWlsLXdyYXBwZXIgLmJhc2VfZGl2W2RhdGEtdi0wOTljZGI3OV0ge1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgcGFkZGluZzogMTVweDtcXG59XFxuLmNsdWUtZGV0YWlsLXdyYXBwZXIgLmJhc2VfZGl2IC5iYXNlX3RpdGxlX3RvcFtkYXRhLXYtMDk5Y2RiNzldIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmNsdWUtZGV0YWlsLXdyYXBwZXIgLmJhc2VfZGl2IC5iYXNlX3RpdGxlX3RvcCAubmFtZVtkYXRhLXYtMDk5Y2RiNzldIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA1MHB4KTtcXG59XFxuLmNsdWUtZGV0YWlsLXdyYXBwZXIgLmJhc2VfZGl2IC5iYXNlX3RpdGxlX3RvcCAuc3RhdGVbZGF0YS12LTA5OWNkYjc5XSB7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG59XFxuLmNsdWUtZGV0YWlsLXdyYXBwZXIgLmJhc2VfZGl2IC5iYXNlX3RpdGxlX2JvdHRvbVtkYXRhLXYtMDk5Y2RiNzldIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XFxuLmNsdWUtZGV0YWlsLXdyYXBwZXIgLmJhc2VfZGl2IC5iYXNlX3RpdGxlX2JvdHRvbSAubmFtZVtkYXRhLXYtMDk5Y2RiNzldIHtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbn1cXG4uY2x1ZS1kZXRhaWwtd3JhcHBlciAuYmFzZV9kaXYgLmJhc2VfdGl0bGVfYm90dG9tIC5kZXB0W2RhdGEtdi0wOTljZGI3OV0ge1xcbiAgY29sb3I6ICM0NDdiZmM7XFxufVxcbi5jbHVlLWRldGFpbC13cmFwcGVyIC5jZW50ZXJfdGl0bGVbZGF0YS12LTA5OWNkYjc5XSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgbWFyZ2luOiAwIDIwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG59XFxuLmNsdWUtZGV0YWlsLXdyYXBwZXIgLmNlbnRlcl90aXRsZSAuZXhwYW5kW2RhdGEtdi0wOTljZGI3OV0ge1xcbiAgY29sb3I6ICM0NDdiZmM7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5jbHVlLWRldGFpbC13cmFwcGVyIC5jZW50ZXJfdGl0bGUgLmV4cGFuZCAuaWNvbmZvbnRbZGF0YS12LTA5OWNkYjc5XSB7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbn1cXG4uY2x1ZS1kZXRhaWwtd3JhcHBlciAuY2VudGVyX3RpdGxlIC5leHBhbmQgLnJpZ2h0SWNvbltkYXRhLXYtMDk5Y2RiNzldIHtcXG4gIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcbi5jbHVlLWRldGFpbC13cmFwcGVyIC5jb250ZW50X2RpdltkYXRhLXYtMDk5Y2RiNzldIHtcXG4gIG1hcmdpbjogMTBweDtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICBwYWRkaW5nOiAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLmNsdWUtZGV0YWlsLXdyYXBwZXIgLmNvbnRlbnRfZGl2IC5jb250ZW50X2Rpdl9pdGVtW2RhdGEtdi0wOTljZGI3OV0ge1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcbi5jbHVlLWRldGFpbC13cmFwcGVyIC5jb250ZW50X2RpdiAuY29udGVudF9kaXZfaXRlbSAudGV4dFtkYXRhLXYtMDk5Y2RiNzldIHtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5jbHVlLWRldGFpbC13cmFwcGVyIC5jb250ZW50X2RpdiAuY29udGVudF9kaXZfaXRlbSAudmFsdWVbZGF0YS12LTA5OWNkYjc5XSB7XFxuICBjb2xvcjogIzEyMTIzNjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLmNsdWUtZGV0YWlsLXdyYXBwZXIgLmNvbnRlbnRfZGl2IC5jb250ZW50X2Rpdl9pdGVtIC52YWxbZGF0YS12LTA5OWNkYjc5XSB7XFxuICBjb2xvcjogIzEyMTIzNjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTgsIDE4LCA1NCwgMC4xKTtcXG4gIHBhZGRpbmc6IDVweCAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG4uY2x1ZS1kZXRhaWwtd3JhcHBlciAuY29udGVudF9kaXYgLmNvbnRlbnRfZGl2X2l0ZW0gLmZpbGVfZGl2W2RhdGEtdi0wOTljZGI3OV0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcbi5jbHVlLWRldGFpbC13cmFwcGVyIC5jb250ZW50X2RpdiAuY29udGVudF9kaXZfaXRlbSAuZmlsZV9kaXYgYVtkYXRhLXYtMDk5Y2RiNzldIHtcXG4gIGNvbG9yOiAjNDQ3YmZjO1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi5jbHVlLWRldGFpbC13cmFwcGVyIC5jb250ZW50X2RpdiAuY29udGVudF9kaXZfaXRlbSBwW2RhdGEtdi0wOTljZGI3OV0ge1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogNnB4IDA7XFxufVxcbi5jbHVlLWRldGFpbC13cmFwcGVyIC5jb250ZW50X2RpdiAudHdvW2RhdGEtdi0wOTljZGI3OV0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmNsdWUtZGV0YWlsLXdyYXBwZXIgLmNvbnRlbnRfZGl2IC50d28gZGl2W2RhdGEtdi0wOTljZGI3OV0ge1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuLmNsdWUtZGV0YWlsLWJvdHRvbVtkYXRhLXYtMDk5Y2RiNzldIHtcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICBoZWlnaHQ6IDgwcHg7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jbHVlLWRldGFpbC1ib3R0b20gLnllc1tkYXRhLXYtMDk5Y2RiNzldIHtcXG4gIHdpZHRoOiAxMzBweDtcXG4gIGhlaWdodDogMzVweDtcXG4gIGxpbmUtaGVpZ2h0OiAzNXB4O1xcbiAgb3BhY2l0eTogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQyLjkxZGVnLCAjNDQ3YmZjIDAlLCAjN2NhMWY3IDEwMCUpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5jbHVlLWRldGFpbC1ib3R0b20gLm5vW2RhdGEtdi0wOTljZGI3OV0ge1xcbiAgd2lkdGg6IDEzMHB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgbGluZS1oZWlnaHQ6IDM1cHg7XFxuICBvcGFjaXR5OiAxO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDIuOTFkZWcsIHJnYmEoMjUwLCAxMzgsIDU3LCAwLjA1KSAwJSwgcmdiYSgxOCwgMTgsIDU0LCAwLjAxKSAxMDAlKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjhkMWE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI2ZmOGQxYTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG4ucG9wVGl0bGVbZGF0YS12LTA5OWNkYjc5XSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xcbn1cXG4ucG9wV3JhcHBlcltkYXRhLXYtMDk5Y2RiNzldIHtcXG4gIG1heC1oZWlnaHQ6IDUwdmg7XFxufVxcbi5wb3BXcmFwcGVyIC5wb3BJdGVtW2RhdGEtdi0wOTljZGI3OV0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAzMzBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogIzk5OTtcXG59XFxuLnBvcFdyYXBwZXIgLnBvcEl0ZW0gLmxhYmVsW2RhdGEtdi0wOTljZGI3OV0ge1xcbiAgd2lkdGg6IDE2MHB4O1xcbn1cXG4ucG9wV3JhcHBlciAucG9wSXRlbSAuaW5wdXRXW2RhdGEtdi0wOTljZGI3OV0ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ViZWRmMDtcXG4gIHBhZGRpbmctbGVmdDogNXB4O1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDg1cHgpO1xcbn1cXG4ucG9wV3JhcHBlciAucG9wSXRlbSAuc2VhcmNoLWl0ZW1bZGF0YS12LTA5OWNkYjc5XSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDZweDtcXG4gIC8qYmFja2dyb3VuZDogcmdiYSgyNDYsIDI0NiwgMjQ2LCAxKTsqL1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbn1cXG4ucG9wV3JhcHBlciAucG9wRmlsZVtkYXRhLXYtMDk5Y2RiNzldIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDE2MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDg1cHg7XFxuICBwYWRkaW5nOiA1cHggMDtcXG59XFxuLnBvcFdyYXBwZXIgLnBvcEZpbGUgLmxhYmVsW2RhdGEtdi0wOTljZGI3OV0ge1xcbiAgd2lkdGg6IDkwJTtcXG4gIGhlaWdodDogMjRweDtcXG4gIGNvbG9yOiAjMmY4N2YwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG4ucG9wRm9vdGVyW2RhdGEtdi0wOTljZGI3OV0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZWJlZGYwO1xcbn1cXG4ucG9wRm9vdGVyIGRpdltkYXRhLXYtMDk5Y2RiNzldIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nOiAxNHB4IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnZhbi1zdGVwcy0tdmVydGljYWwge1xcbiAgcGFkZGluZzogMTVweCAwIDEwcHggNDVweDtcXG59XFxuLnZhbi1zdGVwcy0tdmVydGljYWwgLnZhbi1zdGVwX19saW5lIHtcXG4gIHRvcDogNDRweDtcXG4gIGxlZnQ6IC0xN3B4O1xcbiAgd2lkdGg6IDNweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuMSk7XFxufVxcbi52YW4tc3RlcHMtLXZlcnRpY2FsIDpub3QoOmxhc3QtY2hpbGQpOjphZnRlciB7XFxuICBib3JkZXItYm90dG9tLXdpZHRoOiAwO1xcbn1cXG4udmFuLXN0ZXAtLWZpbmlzaCAudmFuLXN0ZXBfX2NpcmNsZSwgLnZhbi1zdGVwLS1maW5pc2ggLnZhbi1zdGVwX19saW5lIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC4xKTtcXG59XFxuLnZhbi1zdGVwcyAudmFuLWhhaXJsaW5lIHtcXG4gIGhlaWdodDogNTBweDtcXG59XFxuLnZhbi1zdGVwcyAudmFuLXN0ZXBfX2NpcmNsZS1jb250YWluZXIge1xcbiAgd2lkdGg6IDQwcHg7XFxuICBiYWNrZ3JvdW5kOiAjNDQ3YmZjO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcXG59XFxuLnZhbi1zdGVwcyAuc3RlcC1pdGVtIHtcXG4gIGxlZnQ6IDE0cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDMxNXB4O1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLnZhbi1zdGVwcyAuc3RlcC1pdGVtIC5zdGVwLWFjdGl2ZS1pY29uIC5maW5pc2gtaWNvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDMwcHg7XFxuICBsZWZ0OiAxNXB4O1xcbn1cXG4udmFuLXN0ZXBzIC5zdGVwLWl0ZW0gLnN0ZXBfdGl0bGUge1xcbiAgbWFyZ2luLWxlZnQ6IDMwcHg7XFxuICBsaW5lLWhlaWdodDogMjVweDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA1NXB4KTtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbn1cXG4udmFuLXN0ZXBzIC5zdGVwLWl0ZW0gLnN0ZXBfdGl0bGUgLnN0ZXBOYW1lIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XFxuLnZhbi1zdGVwcyAuc3RlcC1pdGVtIC5zdGVwX3RpdGxlIC5zdGVwRGVwdCB7XFxuICBjb2xvcjogIzQ0N2JmYztcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG4udmFuLXN0ZXBzIC5zdGVwLWl0ZW0gLnN0ZXBfdGl0bGUgLmRlcGFydG1lbnQge1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG59XFxuLnZhbi1zdGVwcyAuc3RlcC1pdGVtIC5zdGVwX3RpdGxlIC5zdGF0dXMge1xcbiAgY29sb3I6ICNmZjhkMWE7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG59XFxuLnZhbi1zdGVwcyAuc3RlcC1pdGVtIC50aXRsZS1hY3RpdmUge1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wOTljZGI3OSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjc5ZmJiMGNhXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDk5Y2RiNzkmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wOTljZGI3OSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZsYW5nPXNjc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjM3MGViOTllXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZsYW5nPXNjc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA5OWNkYjc5JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA5OWNkYjc5JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuaW1wb3J0IHN0eWxlMSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjA5OWNkYjc5XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE1vY2tcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDk5Y2RiNzknKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDk5Y2RiNzknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDk5Y2RiNzknLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wOTljZGI3OSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwOTljZGI3OScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL2luSGFuZC9pbkhhbmREZXRhaWwvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDk5Y2RiNzkmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiOWQxN2Y3OTYtdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDk5Y2RiNzkmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9