(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[76],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/task/taskDetail.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/task/taskDetail.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.splice.js */ "./node_modules/core-js/modules/es.array.splice.js");
/* harmony import */ var core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_splice_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vant */ "./node_modules/vant/es/index.js");
/* harmony import */ var _api_task_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/api/task.js */ "./src/api/task.js");
/* harmony import */ var _api_upload_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/api/upload.js */ "./src/api/upload.js");





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "taskDetail",
  components: {},
  data: function data() {
    return {
      task: {},
      process: [],
      showFeedback: false,
      showCheck: false,
      feedback: '',
      fileList: [],
      fileName: '',
      fileUrl: '',
      btnLoading: false,
      check: {
        result: '通过',
        remark: ''
      }
    };
  },
  mounted: function mounted() {
    this.queryTaskDetail();
  },
  methods: {
    //任务详情
    queryTaskDetail: function queryTaskDetail() {
      var _this = this;

      Object(_api_task_js__WEBPACK_IMPORTED_MODULE_6__["getTaskDetail"])({
        id: this.$route.query.id
      }).then(function (res) {
        _this.task = res.data.info;
        _this.process = res.data.process;
        console.log(_this.process);
      });
    },
    onBeforeRead: function onBeforeRead(event) {
      var _this2 = this;

      /*if (event.size > (100 * 1024 * 1024)) {
        this.$toast('文件大小不能超过100M');
        return
      } else if ((event.type !== 'image/jpeg') && (event.type !== 'image/png') && (event.type !== 'image/jpg') && (event.type !== 'video/mp4')) {
        this.$toast('格式为png、jpg、jpeg、MP4');
        return
      }*/
      var formData = new FormData();
      formData.append('file', event);
      formData.append('bucket', '');
      Object(_api_upload_js__WEBPACK_IMPORTED_MODULE_7__["postFileUpload"])(formData).then(function (res) {
        console.log(res.data);

        _this2.fileList.push({
          id: res.data.id,
          url: res.data.relative_url,
          name: res.data.original_name
        });
      });
    },
    //图片删除
    onDeleteFile: function onDeleteFile(file) {
      var _this3 = this;

      this.fileList.forEach(function (item, i) {
        if (item.url === file.url) {
          _this3.fileList.splice(i, 1);
        }
      });
    },
    //文件下载
    onDownLoad: function onDownLoad(url) {
      window.open(url);
    },
    //反馈
    onSureFeedback: function onSureFeedback() {
      var _this4 = this;

      if (this.feedback === '') {
        Object(vant__WEBPACK_IMPORTED_MODULE_5__["Toast"])('反馈内容不能为空');
        return;
      }

      var fileId = this.fileList.map(function (item) {
        return item.id;
      }).join(',');
      this.addBtnLoading = true;
      Object(_api_task_js__WEBPACK_IMPORTED_MODULE_6__["postTaskFeedback"])({
        feedback_content: this.feedback,
        handle_user: '李四',
        handle_user_id: '2',
        task_id: this.task.id,
        file_id: fileId
      }).then(function (res) {
        _this4.showFeedback = false;
        _this4.addBtnLoading = false;

        if (res.code === '200') {
          Object(vant__WEBPACK_IMPORTED_MODULE_5__["Toast"])('反馈成功');
          _this4.feedback = '';
          _this4.fileList = [];

          _this4.queryTaskDetail();
        } else {
          Object(vant__WEBPACK_IMPORTED_MODULE_5__["Toast"])('失败');
        }
      });
    },
    //审核
    onSureCheck: function onSureCheck() {
      var _this5 = this;

      this.addBtnLoading = true;
      Object(_api_task_js__WEBPACK_IMPORTED_MODULE_6__["postTaskCheck"])({
        feedback_id: this.task.feedback_id,
        handle_user: '王五',
        handle_user_id: '3',
        illustrate: this.check.remark,
        result: this.check.result,
        task_id: this.task.id
      }).then(function (res) {
        _this5.showCheck = false;
        _this5.addBtnLoading = false;

        if (res.code === '200') {
          Object(vant__WEBPACK_IMPORTED_MODULE_5__["Toast"])('审核成功');
          _this5.check = {
            remark: '',
            result: ''
          };

          _this5.queryTaskDetail();
        } else {
          Object(vant__WEBPACK_IMPORTED_MODULE_5__["Toast"])('失败');
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/task/taskDetail.vue?vue&type=template&id=87e68c54&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/task/taskDetail.vue?vue&type=template&id=87e68c54&scoped=true& ***!
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
  return _c(
    "div",
    [
      _c("van-nav-bar", {
        attrs: { "left-text": "任务详情", "left-arrow": "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
      }),
      _c("div", { staticClass: "detail-wrapper" }, [
        _c("div", { staticClass: "detail-title" }, [
          _vm._v(
            " " + _vm._s(_vm.task.type) + "：" + _vm._s(_vm.task.title) + " "
          ),
          _c(
            "span",
            {
              class: [
                "flow-btn",
                _vm.task.status === "待反馈"
                  ? "feedback"
                  : _vm.task.status === "待审核"
                  ? "check"
                  : "end",
              ],
            },
            [_vm._v(_vm._s(_vm.task.status))]
          ),
        ]),
        _c("div", { staticClass: "detail-des" }, [
          _c("span", { staticClass: "label" }, [_vm._v("发布时间：")]),
          _vm._v(_vm._s(_vm.task.create_time) + " "),
        ]),
        _c("div", { staticClass: "detail-des" }, [
          _c("span", { staticClass: "label" }, [_vm._v("截止时间：")]),
          _vm._v(_vm._s(_vm.task.deadline) + " "),
        ]),
        _c("div", { staticClass: "detail-des" }, [
          _c("span", { staticClass: "label" }, [_vm._v("处理人：")]),
          _vm._v(_vm._s(_vm.task.handle_user) + " "),
        ]),
        _c("div", { staticClass: "detail-des" }, [
          _c("span", { staticClass: "label" }, [_vm._v("任务内容：")]),
          _vm._v(_vm._s(_vm.task.content) + " "),
        ]),
        _c("div", { staticClass: "detail-des" }, [
          _c("span", { staticClass: "label" }, [_vm._v("处置对象：")]),
          _vm._v(_vm._s(_vm.task.site_name) + " "),
        ]),
        _c("div", { staticClass: "detail-des" }, [
          _c("span", { staticClass: "label" }, [_vm._v("详细地址：")]),
          _vm._v(_vm._s(_vm.task.address) + " "),
        ]),
        _c(
          "div",
          { staticClass: "detail-footer" },
          [
            _vm.task.status === "待反馈"
              ? _c(
                  "van-button",
                  {
                    staticStyle: { width: "90%" },
                    attrs: { round: "", type: "info" },
                    on: {
                      click: function ($event) {
                        _vm.showFeedback = true
                      },
                    },
                  },
                  [_vm._v("反馈 ")]
                )
              : _vm._e(),
            _vm.task.status === "待审核"
              ? _c(
                  "van-button",
                  {
                    staticStyle: { width: "90%" },
                    attrs: { round: "", type: "info" },
                    on: {
                      click: function ($event) {
                        _vm.showCheck = true
                      },
                    },
                  },
                  [_vm._v("审核 ")]
                )
              : _vm._e(),
          ],
          1
        ),
      ]),
      _vm._l(_vm.process, function (item) {
        return [
          item.feedback
            ? _c("div", { staticClass: "detail-wrapper" }, [
                _c("div", { staticClass: "detail-title" }, [
                  _vm._v(" 反馈内容 "),
                ]),
                _c("div", { staticClass: "detail-des" }, [
                  _c("span", { staticClass: "label" }, [_vm._v("反馈时间：")]),
                  _vm._v(_vm._s(item.feedback.time) + " "),
                ]),
                _c("div", { staticClass: "detail-des" }, [
                  _c("span", { staticClass: "label" }, [_vm._v("处理人：")]),
                  _vm._v(_vm._s(item.feedback.handle_user) + " "),
                ]),
                _c("div", { staticClass: "detail-des" }, [
                  _c("span", { staticClass: "label" }, [_vm._v("反馈内容：")]),
                  _vm._v(_vm._s(item.feedback.feedback_content) + " "),
                ]),
                _c(
                  "div",
                  {
                    staticClass: "detail-des",
                    staticStyle: { display: "flex" },
                  },
                  [
                    _c(
                      "span",
                      { staticClass: "label", staticStyle: { width: "45px" } },
                      [_vm._v("附件：")]
                    ),
                    _c(
                      "div",
                      { staticStyle: { width: "calc(100% - 45px)" } },
                      _vm._l(item.feedback.file_list, function (itemFile) {
                        return _c(
                          "div",
                          {
                            staticStyle: {
                              color: "#2f87f0",
                              "text-decoration": "underline",
                              "padding-bottom": "5px",
                            },
                            on: {
                              click: function ($event) {
                                return _vm.onDownLoad(itemFile.relative_url)
                              },
                            },
                          },
                          [_vm._v(_vm._s(itemFile.original_name) + " ")]
                        )
                      }),
                      0
                    ),
                  ]
                ),
              ])
            : _vm._e(),
          item.examine
            ? _c("div", { staticClass: "detail-wrapper" }, [
                _c("div", { staticClass: "detail-title" }, [
                  _vm._v(" 审核内容 "),
                ]),
                _c("div", { staticClass: "detail-des" }, [
                  _c("span", { staticClass: "label" }, [_vm._v("反馈时间：")]),
                  _vm._v(_vm._s(item.examine.time) + " "),
                ]),
                _c("div", { staticClass: "detail-des" }, [
                  _c("span", { staticClass: "label" }, [_vm._v("处理人：")]),
                  _vm._v(_vm._s(item.examine.handle_user) + " "),
                ]),
                _c("div", { staticClass: "detail-des" }, [
                  _c("span", { staticClass: "label" }, [_vm._v("审核结果：")]),
                  _vm._v(_vm._s(item.examine.result) + " "),
                ]),
                _c("div", { staticClass: "detail-des" }, [
                  _c("span", { staticClass: "label" }, [_vm._v("审核说明：")]),
                  _vm._v(_vm._s(item.examine.illustrate) + " "),
                ]),
              ])
            : _vm._e(),
        ]
      }),
      _c(
        "van-popup",
        {
          attrs: { closeable: false, round: "" },
          model: {
            value: _vm.showFeedback,
            callback: function ($$v) {
              _vm.showFeedback = $$v
            },
            expression: "showFeedback",
          },
        },
        [
          _c("div", { staticClass: "popTitle" }, [_vm._v("反馈")]),
          _c(
            "div",
            { staticClass: "popWrapper" },
            [
              _c("div", { staticClass: "popItem" }, [
                _c("span", { staticClass: "label" }, [_vm._v("反馈内容：")]),
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.feedback,
                      expression: "feedback",
                    },
                  ],
                  staticClass: "inputW",
                  attrs: { rows: "4" },
                  domProps: { value: _vm.feedback },
                  on: {
                    input: function ($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.feedback = $event.target.value
                    },
                  },
                }),
              ]),
              _c(
                "div",
                { staticClass: "popItem" },
                [
                  _c("span", { staticClass: "label" }, [_vm._v("附件：")]),
                  _c(
                    "van-uploader",
                    {
                      attrs: {
                        "before-read": _vm.onBeforeRead,
                        accept: ".doc,.docx,.xls,.xlsx,.ppt,.pptx",
                      },
                    },
                    [
                      _c(
                        "van-button",
                        { attrs: { icon: "plus", type: "primary" } },
                        [_vm._v("上传文件")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._l(_vm.fileList, function (itemFile) {
                return _c(
                  "div",
                  { staticClass: "popFile" },
                  [
                    _c(
                      "span",
                      {
                        staticClass: "label",
                        on: {
                          click: function ($event) {
                            return _vm.onDownLoad(itemFile.url)
                          },
                        },
                      },
                      [_vm._v(_vm._s(itemFile.name))]
                    ),
                    _c("van-icon", {
                      attrs: { name: "cross", color: "#2f87f0" },
                      on: {
                        click: function ($event) {
                          return _vm.onDeleteFile(itemFile)
                        },
                      },
                    }),
                  ],
                  1
                )
              }),
            ],
            2
          ),
          _c("div", { staticClass: "popFooter" }, [
            _c(
              "div",
              {
                on: {
                  click: function ($event) {
                    _vm.showFeedback = false
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
                on: { click: _vm.onSureFeedback },
              },
              [_vm._v("确认 ")]
            ),
          ]),
        ]
      ),
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
          _c("div", { staticClass: "popTitle" }, [_vm._v("审核")]),
          _c("div", { staticClass: "popWrapper" }, [
            _c(
              "div",
              { staticClass: "popItem" },
              [
                _c("span", { staticClass: "label" }, [_vm._v("结果：")]),
                _c(
                  "van-radio-group",
                  {
                    attrs: { direction: "horizontal" },
                    model: {
                      value: _vm.check.result,
                      callback: function ($$v) {
                        _vm.$set(_vm.check, "result", $$v)
                      },
                      expression: "check.result",
                    },
                  },
                  [
                    _c("van-radio", { attrs: { name: "通过" } }, [
                      _vm._v("通过"),
                    ]),
                    _c("van-radio", { attrs: { name: "不通过" } }, [
                      _vm._v("不通过"),
                    ]),
                  ],
                  1
                ),
              ],
              1
            ),
            _c("div", { staticClass: "popItem" }, [
              _c("span", { staticClass: "label" }, [_vm._v("说明：")]),
              _c("textarea", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.check.remark,
                    expression: "check.remark",
                  },
                ],
                staticClass: "inputW",
                attrs: { rows: "4", placeholder: "请输入" },
                domProps: { value: _vm.check.remark },
                on: {
                  input: function ($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.$set(_vm.check, "remark", $event.target.value)
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
              [_vm._v("确认 ")]
            ),
          ]),
        ]
      ),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/array-set-length.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/internals/array-set-length.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");

var $TypeError = TypeError;
// eslint-disable-next-line es/no-object-getownpropertydescriptor -- safe
var getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;

// Safari < 13 does not throw an error in this case
var SILENT_ON_NON_WRITABLE_LENGTH_SET = DESCRIPTORS && !function () {
  // makes no sense without proper strict mode support
  if (this !== undefined) return true;
  try {
    // eslint-disable-next-line es/no-object-defineproperty -- safe
    Object.defineProperty([], 'length', { writable: false }).length = 1;
  } catch (error) {
    return error instanceof TypeError;
  }
}();

module.exports = SILENT_ON_NON_WRITABLE_LENGTH_SET ? function (O, length) {
  if (isArray(O) && !getOwnPropertyDescriptor(O, 'length').writable) {
    throw new $TypeError('Cannot set read only .length');
  } return O.length = length;
} : function (O, length) {
  return O.length = length;
};


/***/ }),

/***/ "./node_modules/core-js/internals/does-not-exceed-safe-integer.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/internals/does-not-exceed-safe-integer.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


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

/***/ "./node_modules/core-js/modules/es.array.splice.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.splice.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var toAbsoluteIndex = __webpack_require__(/*! ../internals/to-absolute-index */ "./node_modules/core-js/internals/to-absolute-index.js");
var toIntegerOrInfinity = __webpack_require__(/*! ../internals/to-integer-or-infinity */ "./node_modules/core-js/internals/to-integer-or-infinity.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var setArrayLength = __webpack_require__(/*! ../internals/array-set-length */ "./node_modules/core-js/internals/array-set-length.js");
var doesNotExceedSafeInteger = __webpack_require__(/*! ../internals/does-not-exceed-safe-integer */ "./node_modules/core-js/internals/does-not-exceed-safe-integer.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var deletePropertyOrThrow = __webpack_require__(/*! ../internals/delete-property-or-throw */ "./node_modules/core-js/internals/delete-property-or-throw.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('splice');

var max = Math.max;
var min = Math.min;

// `Array.prototype.splice` method
// https://tc39.es/ecma262/#sec-array.prototype.splice
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  splice: function splice(start, deleteCount /* , ...items */) {
    var O = toObject(this);
    var len = lengthOfArrayLike(O);
    var actualStart = toAbsoluteIndex(start, len);
    var argumentsLength = arguments.length;
    var insertCount, actualDeleteCount, A, k, from, to;
    if (argumentsLength === 0) {
      insertCount = actualDeleteCount = 0;
    } else if (argumentsLength === 1) {
      insertCount = 0;
      actualDeleteCount = len - actualStart;
    } else {
      insertCount = argumentsLength - 2;
      actualDeleteCount = min(max(toIntegerOrInfinity(deleteCount), 0), len - actualStart);
    }
    doesNotExceedSafeInteger(len + insertCount - actualDeleteCount);
    A = arraySpeciesCreate(O, actualDeleteCount);
    for (k = 0; k < actualDeleteCount; k++) {
      from = actualStart + k;
      if (from in O) createProperty(A, k, O[from]);
    }
    A.length = actualDeleteCount;
    if (insertCount < actualDeleteCount) {
      for (k = actualStart; k < len - actualDeleteCount; k++) {
        from = k + actualDeleteCount;
        to = k + insertCount;
        if (from in O) O[to] = O[from];
        else deletePropertyOrThrow(O, to);
      }
      for (k = len; k > len - actualDeleteCount + insertCount; k--) deletePropertyOrThrow(O, k - 1);
    } else if (insertCount > actualDeleteCount) {
      for (k = len - actualDeleteCount; k > actualStart; k--) {
        from = k + actualDeleteCount - 1;
        to = k + insertCount - 1;
        if (from in O) O[to] = O[from];
        else deletePropertyOrThrow(O, to);
      }
    }
    for (k = 0; k < insertCount; k++) {
      O[k + actualStart] = arguments[k + 2];
    }
    setArrayLength(O, len - actualDeleteCount + insertCount);
    return A;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ "./node_modules/core-js/internals/dom-token-list-prototype.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(globalThis[COLLECTION_NAME] && globalThis[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/task/taskDetail.vue?vue&type=style&index=0&id=87e68c54&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/task/taskDetail.vue?vue&type=style&index=0&id=87e68c54&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".detail-wrapper[data-v-87e68c54] {\n  margin-top: 8px;\n  background-color: #fff;\n  padding: 14px 15px;\n}\n.detail-wrapper .detail-title[data-v-87e68c54] {\n  padding-bottom: 16px;\n  color: #333;\n  font-size: 16px;\n  font-weight: bold;\n}\n.detail-wrapper .detail-footer[data-v-87e68c54] {\n  margin-top: 8px;\n  text-align: center;\n}\n.detail-wrapper .flow-btn[data-v-87e68c54] {\n  padding: 5px 12px;\n  border-radius: 2px;\n  color: #fff;\n  font-size: 13px;\n  font-weight: normal;\n}\n.detail-wrapper .feedback[data-v-87e68c54] {\n  background-color: #f23333;\n}\n.detail-wrapper .check[data-v-87e68c54] {\n  background-color: #ffbf39;\n}\n.detail-wrapper .end[data-v-87e68c54] {\n  background-color: #08d236;\n}\n.detail-wrapper .detail-des[data-v-87e68c54] {\n  padding-bottom: 8px;\n  color: #333;\n  font-size: 14px;\n}\n.detail-wrapper .detail-des .label[data-v-87e68c54] {\n  color: #999;\n}\n.popTitle[data-v-87e68c54] {\n  text-align: center;\n  font-weight: bold;\n  line-height: 50px;\n}\n.popWrapper[data-v-87e68c54] {\n  max-height: 50vh;\n}\n.popWrapper .popItem[data-v-87e68c54] {\n  display: flex;\n  width: 250px;\n  padding: 10px;\n  font-size: 14px;\n  color: #999;\n}\n.popWrapper .popItem .label[data-v-87e68c54] {\n  width: 75px;\n}\n.popWrapper .popItem .inputW[data-v-87e68c54] {\n  border: 1px solid #ebedf0;\n  padding-left: 5px;\n  width: 150px;\n}\n.popFile[data-v-87e68c54] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 160px;\n  margin-left: 85px;\n  padding: 5px 0;\n}\n.popFile .label[data-v-87e68c54] {\n  width: 90%;\n  height: 24px;\n  color: #2f87f0;\n  text-decoration: underline;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.popFooter[data-v-87e68c54] {\n  display: flex;\n  border-top: 1px solid #ebedf0;\n}\n.popFooter div[data-v-87e68c54] {\n  width: 50%;\n  padding: 14px 0;\n  text-align: center;\n  font-size: 16px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/task/taskDetail.vue?vue&type=style&index=0&id=87e68c54&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/task/taskDetail.vue?vue&type=style&index=0&id=87e68c54&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./taskDetail.vue?vue&type=style&index=0&id=87e68c54&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/task/taskDetail.vue?vue&type=style&index=0&id=87e68c54&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("001821b3", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/api/task.js":
/*!*************************!*\
  !*** ./src/api/task.js ***!
  \*************************/
/*! exports provided: getTaskList, getTaskTypeList, postTaskAdd, getTaskDispose, getTaskDetail, postTaskFeedback, postTaskCheck */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaskList", function() { return getTaskList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaskTypeList", function() { return getTaskTypeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postTaskAdd", function() { return postTaskAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaskDispose", function() { return getTaskDispose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaskDetail", function() { return getTaskDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postTaskFeedback", function() { return postTaskFeedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postTaskCheck", function() { return postTaskCheck; });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request */ "./src/api/request.js");


/**
 * 任务列表
 * @param limit 条数
 * @param page 当前页
 * @param name 模糊搜索
 * @param status 任务状态
 * @param type 任务类型
 * */

function getTaskList(_ref) {
  var limit = _ref.limit,
      page = _ref.page,
      name = _ref.name,
      status = _ref.status,
      type = _ref.type;
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/app/task/task_info_list',
    method: 'GET',
    params: {
      limit: limit,
      page: page,
      name: name,
      status: status,
      type: type
    }
  });
}
/**
 * 任务类型
 * */

function getTaskTypeList() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/app/task/task_type_list',
    method: 'GET',
    params: {}
  });
}
/**
 * 发布任务
 * @param data 任务属性
 * */

function postTaskAdd(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/app/task/insert_task_info',
    method: 'POST',
    data: data
  });
}
/**
 * 处置对象下拉
 * @param division_code 当前登录用户的行政区划
 * */

function getTaskDispose() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/app/task/site_list',
    method: 'GET',
    params: {
      division_code: '530115'
    }
  });
}
/**
 * 任务详情
 * @param id 任务id
 * */

function getTaskDetail(_ref2) {
  var id = _ref2.id;
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/app/task/detail',
    method: 'GET',
    params: {
      id: id
    }
  });
}
/**
 * 反馈
 * @param data 反馈属性
 * */

function postTaskFeedback(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/app/task/feedback',
    method: 'POST',
    data: data
  });
}
/**
 * 审核
 * @param data 审核属性
 * */

function postTaskCheck(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_1__["default"])({
    url: '/app/task/examine',
    method: 'POST',
    data: data
  });
}

/***/ }),

/***/ "./src/api/upload.js":
/*!***************************!*\
  !*** ./src/api/upload.js ***!
  \***************************/
/*! exports provided: postFileUpload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postFileUpload", function() { return postFileUpload; });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./src/api/request.js");

/**
 * 反馈的文件上传
 * @param formData 文件上传
 * */

function postFileUpload(formData) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/minio/upload',
    method: 'POST',
    headers: {
      "content-type": "multipart/form-data"
    },
    data: formData
  });
}

/***/ }),

/***/ "./src/views/task/taskDetail.vue":
/*!***************************************!*\
  !*** ./src/views/task/taskDetail.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _taskDetail_vue_vue_type_template_id_87e68c54_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskDetail.vue?vue&type=template&id=87e68c54&scoped=true& */ "./src/views/task/taskDetail.vue?vue&type=template&id=87e68c54&scoped=true&");
/* harmony import */ var _taskDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskDetail.vue?vue&type=script&lang=js& */ "./src/views/task/taskDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _taskDetail_vue_vue_type_style_index_0_id_87e68c54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskDetail.vue?vue&type=style&index=0&id=87e68c54&lang=scss&scoped=true& */ "./src/views/task/taskDetail.vue?vue&type=style&index=0&id=87e68c54&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _taskDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _taskDetail_vue_vue_type_template_id_87e68c54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _taskDetail_vue_vue_type_template_id_87e68c54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "87e68c54",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/task/taskDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/task/taskDetail.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/views/task/taskDetail.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./taskDetail.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/task/taskDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/task/taskDetail.vue?vue&type=style&index=0&id=87e68c54&lang=scss&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./src/views/task/taskDetail.vue?vue&type=style&index=0&id=87e68c54&lang=scss&scoped=true& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskDetail_vue_vue_type_style_index_0_id_87e68c54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./taskDetail.vue?vue&type=style&index=0&id=87e68c54&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/task/taskDetail.vue?vue&type=style&index=0&id=87e68c54&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskDetail_vue_vue_type_style_index_0_id_87e68c54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskDetail_vue_vue_type_style_index_0_id_87e68c54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskDetail_vue_vue_type_style_index_0_id_87e68c54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskDetail_vue_vue_type_style_index_0_id_87e68c54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/task/taskDetail.vue?vue&type=template&id=87e68c54&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./src/views/task/taskDetail.vue?vue&type=template&id=87e68c54&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskDetail_vue_vue_type_template_id_87e68c54_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./taskDetail.vue?vue&type=template&id=87e68c54&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/task/taskDetail.vue?vue&type=template&id=87e68c54&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskDetail_vue_vue_type_template_id_87e68c54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskDetail_vue_vue_type_template_id_87e68c54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3Rhc2svdGFza0RldGFpbC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3Rhc2svdGFza0RldGFpbC52dWU/NDE5ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LXNldC1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvZXMtbm90LWV4Y2VlZC1zYWZlLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5zcGxpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLmZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YXNrL3Rhc2tEZXRhaWwudnVlPzA1NjciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3Rhc2svdGFza0RldGFpbC52dWU/OTk4OCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL3Rhc2suanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS91cGxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3Rhc2svdGFza0RldGFpbC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3Rhc2svdGFza0RldGFpbC52dWU/ZmY0NCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFzay90YXNrRGV0YWlsLnZ1ZT83MTJjIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YXNrL3Rhc2tEZXRhaWwudnVlPzQwNWYiXSwibmFtZXMiOlsiZ2V0VGFza0xpc3QiLCJsaW1pdCIsInBhZ2UiLCJuYW1lIiwic3RhdHVzIiwidHlwZSIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJwYXJhbXMiLCJnZXRUYXNrVHlwZUxpc3QiLCJwb3N0VGFza0FkZCIsImRhdGEiLCJnZXRUYXNrRGlzcG9zZSIsImRpdmlzaW9uX2NvZGUiLCJnZXRUYXNrRGV0YWlsIiwiaWQiLCJwb3N0VGFza0ZlZWRiYWNrIiwicG9zdFRhc2tDaGVjayIsInBvc3RGaWxlVXBsb2FkIiwiZm9ybURhdGEiLCJoZWFkZXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5SUE7QUFDQTtBQUNBO0FBRUE7QUFDQSxvQkFEQTtBQUVBLGdCQUZBO0FBR0EsTUFIQSxrQkFHQTtBQUNBO0FBQ0EsY0FEQTtBQUVBLGlCQUZBO0FBR0EseUJBSEE7QUFJQSxzQkFKQTtBQUtBLGtCQUxBO0FBTUEsa0JBTkE7QUFPQSxrQkFQQTtBQVFBLGlCQVJBO0FBU0EsdUJBVEE7QUFVQTtBQUNBLG9CQURBO0FBRUE7QUFGQTtBQVZBO0FBZUEsR0FuQkE7QUFvQkEsU0FwQkEscUJBb0JBO0FBQ0E7QUFDQSxHQXRCQTtBQXVCQTtBQUNBO0FBQ0EsbUJBRkEsNkJBRUE7QUFBQTs7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUpBO0FBS0EsS0FSQTtBQVNBLGdCQVRBLHdCQVNBLEtBVEEsRUFTQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsT0FIQTtBQUlBLEtBeEJBO0FBeUJBO0FBQ0EsZ0JB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LHNCQUFnQjtBQURULEtBSEk7QUFNYlQsUUFBSSxFQUFFUTtBQU5PLEdBQUQsQ0FBZDtBQVFELEM7Ozs7Ozs7Ozs7OztBQ2ZEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUc7QUFDdkM7QUFDTDtBQUNzQzs7O0FBRy9GO0FBQzZGO0FBQzdGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSxpR0FBTTtBQUNSLEVBQUUsMEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQW1TLENBQWdCLDJVQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXZUO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzLzc2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8dmFuLW5hdi1iYXJcclxuICAgICAgICBsZWZ0LXRleHQ9XCLku7vliqHor6bmg4VcIlxyXG4gICAgICAgIGxlZnQtYXJyb3dcclxuICAgICAgICBAY2xpY2stbGVmdD1cIiRyb3V0ZXIuZ28oLTEpXCJcclxuICAgIC8+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsLXdyYXBwZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImRldGFpbC10aXRsZVwiPlxyXG4gICAgICAgIHt7dGFzay50eXBlfX3vvJp7e3Rhc2sudGl0bGV9fSA8c3BhblxyXG4gICAgICAgICAgOmNsYXNzPVwiWydmbG93LWJ0bicsdGFzay5zdGF0dXM9PT0n5b6F5Y+N6aaIJz8nZmVlZGJhY2snOnRhc2suc3RhdHVzPT09J+W+heWuoeaguCc/J2NoZWNrJzonZW5kJ11cIj57e3Rhc2suc3RhdHVzfX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsLWRlc1wiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj7lj5HluIPml7bpl7TvvJo8L3NwYW4+e3t0YXNrLmNyZWF0ZV90aW1lfX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWwtZGVzXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPuaIquatouaXtumXtO+8mjwvc3Bhbj57e3Rhc2suZGVhZGxpbmV9fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImRldGFpbC1kZXNcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+5aSE55CG5Lq677yaPC9zcGFuPnt7dGFzay5oYW5kbGVfdXNlcn19XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsLWRlc1wiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj7ku7vliqHlhoXlrrnvvJo8L3NwYW4+e3t0YXNrLmNvbnRlbnR9fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImRldGFpbC1kZXNcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+5aSE572u5a+56LGh77yaPC9zcGFuPnt7dGFzay5zaXRlX25hbWV9fVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImRldGFpbC1kZXNcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+6K+m57uG5Zyw5Z2A77yaPC9zcGFuPnt7dGFzay5hZGRyZXNzfX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWwtZm9vdGVyXCI+XHJcbiAgICAgICAgPHZhbi1idXR0b24gdi1pZj1cInRhc2suc3RhdHVzPT09J+W+heWPjemmiCdcIiByb3VuZCB0eXBlPVwiaW5mb1wiIHN0eWxlPVwid2lkdGg6IDkwJVwiIEBjbGljaz1cInNob3dGZWVkYmFjayA9IHRydWVcIj7lj43ppohcclxuICAgICAgICA8L3Zhbi1idXR0b24+XHJcbiAgICAgICAgPHZhbi1idXR0b24gdi1pZj1cInRhc2suc3RhdHVzPT09J+W+heWuoeaguCdcIiByb3VuZCB0eXBlPVwiaW5mb1wiIHN0eWxlPVwid2lkdGg6IDkwJVwiIEBjbGljaz1cInNob3dDaGVjayA9IHRydWVcIj7lrqHmoLhcclxuICAgICAgICA8L3Zhbi1idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPHRlbXBsYXRlIHYtZm9yPVwiaXRlbSBpbiBwcm9jZXNzXCI+XHJcbiAgICAgIDxkaXYgdi1pZj1cIml0ZW0uZmVlZGJhY2tcIiBjbGFzcz1cImRldGFpbC13cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbC10aXRsZVwiPlxyXG4gICAgICAgICAg5Y+N6aaI5YaF5a65XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbC1kZXNcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj7lj43ppojml7bpl7TvvJo8L3NwYW4+e3tpdGVtLmZlZWRiYWNrLnRpbWV9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWwtZGVzXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+5aSE55CG5Lq677yaPC9zcGFuPnt7aXRlbS5mZWVkYmFjay5oYW5kbGVfdXNlcn19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbC1kZXNcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj7lj43ppojlhoXlrrnvvJo8L3NwYW4+e3tpdGVtLmZlZWRiYWNrLmZlZWRiYWNrX2NvbnRlbnR9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWwtZGVzXCIgc3R5bGU9XCJkaXNwbGF5OiBmbGV4XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCIgc3R5bGU9XCJ3aWR0aDogNDVweFwiPumZhOS7tu+8mjwvc3Bhbj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogY2FsYygxMDAlIC0gNDVweClcIj5cclxuICAgICAgICAgICAgPGRpdiB2LWZvcj1cIml0ZW1GaWxlIGluIGl0ZW0uZmVlZGJhY2suZmlsZV9saXN0XCJcclxuICAgICAgICAgICAgICAgICBzdHlsZT1cImNvbG9yOiAjMmY4N2YwO3RleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO3BhZGRpbmctYm90dG9tOiA1cHg7XCJcclxuICAgICAgICAgICAgICAgICBAY2xpY2s9XCJvbkRvd25Mb2FkKGl0ZW1GaWxlLnJlbGF0aXZlX3VybClcIj57e2l0ZW1GaWxlLm9yaWdpbmFsX25hbWUgfX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IHYtaWY9XCJpdGVtLmV4YW1pbmVcIiBjbGFzcz1cImRldGFpbC13cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbC10aXRsZVwiPlxyXG4gICAgICAgICAg5a6h5qC45YaF5a65XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbC1kZXNcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj7lj43ppojml7bpl7TvvJo8L3NwYW4+e3tpdGVtLmV4YW1pbmUudGltZX19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbC1kZXNcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj7lpITnkIbkurrvvJo8L3NwYW4+e3tpdGVtLmV4YW1pbmUuaGFuZGxlX3VzZXJ9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWwtZGVzXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+5a6h5qC457uT5p6c77yaPC9zcGFuPnt7aXRlbS5leGFtaW5lLnJlc3VsdH19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbC1kZXNcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj7lrqHmoLjor7TmmI7vvJo8L3NwYW4+e3tpdGVtLmV4YW1pbmUuaWxsdXN0cmF0ZX19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC90ZW1wbGF0ZT5cclxuXHJcblxyXG4gICAgPCEtLeWPjemmiOW8ueahhi0tPlxyXG4gICAgPHZhbi1wb3B1cCB2LW1vZGVsPVwic2hvd0ZlZWRiYWNrXCIgOmNsb3NlYWJsZT1cImZhbHNlXCIgcm91bmQ+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwb3BUaXRsZVwiPuWPjemmiDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicG9wV3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb3BJdGVtXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+5Y+N6aaI5YaF5a6577yaPC9zcGFuPlxyXG4gICAgICAgICAgPHRleHRhcmVhIHJvd3M9XCI0XCIgdi1tb2RlbD1cImZlZWRiYWNrXCIgY2xhc3M9XCJpbnB1dFdcIj48L3RleHRhcmVhPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb3BJdGVtXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+6ZmE5Lu277yaPC9zcGFuPlxyXG4gICAgICAgICAgPHZhbi11cGxvYWRlciA6YmVmb3JlLXJlYWQ9XCJvbkJlZm9yZVJlYWRcIiBhY2NlcHQ9XCIuZG9jLC5kb2N4LC54bHMsLnhsc3gsLnBwdCwucHB0eFwiPlxyXG4gICAgICAgICAgICA8dmFuLWJ1dHRvbiBpY29uPVwicGx1c1wiIHR5cGU9XCJwcmltYXJ5XCI+5LiK5Lyg5paH5Lu2PC92YW4tYnV0dG9uPlxyXG4gICAgICAgICAgPC92YW4tdXBsb2FkZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBvcEZpbGVcIiB2LWZvcj1cIml0ZW1GaWxlIGluIGZpbGVMaXN0XCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCIgc3R5bGU9XCJcIiBAY2xpY2s9XCJvbkRvd25Mb2FkKGl0ZW1GaWxlLnVybClcIj57e2l0ZW1GaWxlLm5hbWV9fTwvc3Bhbj5cclxuICAgICAgICAgIDx2YW4taWNvbiBuYW1lPVwiY3Jvc3NcIiBjb2xvcj1cIiMyZjg3ZjBcIiBAY2xpY2s9XCJvbkRlbGV0ZUZpbGUoaXRlbUZpbGUpXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInBvcEZvb3RlclwiPlxyXG4gICAgICAgIDxkaXYgQGNsaWNrPVwic2hvd0ZlZWRiYWNrID0gZmFsc2VcIj7lj5bmtog8L2Rpdj5cclxuICAgICAgICA8ZGl2IDpsb2FkaW5nPVwiYnRuTG9hZGluZ1wiIEBjbGljaz1cIm9uU3VyZUZlZWRiYWNrXCIgc3R5bGU9XCJjb2xvcjogIzE5ODlmYTtib3JkZXItbGVmdDogMXB4IHNvbGlkICNlYmVkZjBcIj7noa7orqRcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L3Zhbi1wb3B1cD5cclxuXHJcblxyXG4gICAgPCEtLeWuoeaguOW8ueahhi0tPlxyXG4gICAgPHZhbi1wb3B1cCB2LW1vZGVsPVwic2hvd0NoZWNrXCIgOmNsb3NlYWJsZT1cImZhbHNlXCIgcm91bmQ+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwb3BUaXRsZVwiPuWuoeaguDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicG9wV3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb3BJdGVtXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+57uT5p6c77yaPC9zcGFuPlxyXG4gICAgICAgICAgPHZhbi1yYWRpby1ncm91cCB2LW1vZGVsPVwiY2hlY2sucmVzdWx0XCIgZGlyZWN0aW9uPVwiaG9yaXpvbnRhbFwiPlxyXG4gICAgICAgICAgICA8dmFuLXJhZGlvIG5hbWU9XCLpgJrov4dcIj7pgJrov4c8L3Zhbi1yYWRpbz5cclxuICAgICAgICAgICAgPHZhbi1yYWRpbyBuYW1lPVwi5LiN6YCa6L+HXCI+5LiN6YCa6L+HPC92YW4tcmFkaW8+XHJcbiAgICAgICAgICA8L3Zhbi1yYWRpby1ncm91cD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9wSXRlbVwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPuivtOaYju+8mjwvc3Bhbj5cclxuICAgICAgICAgIDx0ZXh0YXJlYSByb3dzPVwiNFwiIHYtbW9kZWw9XCJjaGVjay5yZW1hcmtcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpVwiIGNsYXNzPVwiaW5wdXRXXCI+PC90ZXh0YXJlYT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwb3BGb290ZXJcIj5cclxuICAgICAgICA8ZGl2IEBjbGljaz1cInNob3dDaGVjayA9IGZhbHNlXCI+5Y+W5raIPC9kaXY+XHJcbiAgICAgICAgPGRpdiA6bG9hZGluZz1cImJ0bkxvYWRpbmdcIiBAY2xpY2s9XCJvblN1cmVDaGVja1wiIHN0eWxlPVwiY29sb3I6ICMxOTg5ZmE7Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWJlZGYwXCI+56Gu6K6kXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC92YW4tcG9wdXA+XHJcblxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQge1RvYXN0fSBmcm9tIFwidmFudFwiO1xyXG4gIGltcG9ydCB7cG9zdFRhc2tGZWVkYmFjaywgcG9zdFRhc2tDaGVjaywgZ2V0VGFza0RldGFpbH0gZnJvbSAnQC9hcGkvdGFzay5qcydcclxuICBpbXBvcnQge3Bvc3RGaWxlVXBsb2FkfSBmcm9tICdAL2FwaS91cGxvYWQuanMnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwidGFza0RldGFpbFwiLFxyXG4gICAgY29tcG9uZW50czoge30sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRhc2s6IHt9LFxyXG4gICAgICAgIHByb2Nlc3M6IFtdLFxyXG4gICAgICAgIHNob3dGZWVkYmFjazogZmFsc2UsXHJcbiAgICAgICAgc2hvd0NoZWNrOiBmYWxzZSxcclxuICAgICAgICBmZWVkYmFjazogJycsXHJcbiAgICAgICAgZmlsZUxpc3Q6IFtdLFxyXG4gICAgICAgIGZpbGVOYW1lOiAnJyxcclxuICAgICAgICBmaWxlVXJsOiAnJyxcclxuICAgICAgICBidG5Mb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBjaGVjazoge1xyXG4gICAgICAgICAgcmVzdWx0OiAn6YCa6L+HJyxcclxuICAgICAgICAgIHJlbWFyazogJycsXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgdGhpcy5xdWVyeVRhc2tEZXRhaWwoKVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgLy/ku7vliqHor6bmg4VcclxuICAgICAgcXVlcnlUYXNrRGV0YWlsKCkge1xyXG4gICAgICAgIGdldFRhc2tEZXRhaWwoe2lkOiB0aGlzLiRyb3V0ZS5xdWVyeS5pZH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIHRoaXMudGFzayA9IHJlcy5kYXRhLmluZm87XHJcbiAgICAgICAgICB0aGlzLnByb2Nlc3MgPSByZXMuZGF0YS5wcm9jZXNzO1xyXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9jZXNzKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIG9uQmVmb3JlUmVhZChldmVudCkge1xyXG4gICAgICAgIC8qaWYgKGV2ZW50LnNpemUgPiAoMTAwICogMTAyNCAqIDEwMjQpKSB7XHJcbiAgICAgICAgICB0aGlzLiR0b2FzdCgn5paH5Lu25aSn5bCP5LiN6IO96LaF6L+HMTAwTScpO1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfSBlbHNlIGlmICgoZXZlbnQudHlwZSAhPT0gJ2ltYWdlL2pwZWcnKSAmJiAoZXZlbnQudHlwZSAhPT0gJ2ltYWdlL3BuZycpICYmIChldmVudC50eXBlICE9PSAnaW1hZ2UvanBnJykgJiYgKGV2ZW50LnR5cGUgIT09ICd2aWRlby9tcDQnKSkge1xyXG4gICAgICAgICAgdGhpcy4kdG9hc3QoJ+agvOW8j+S4unBuZ+OAgWpwZ+OAgWpwZWfjgIFNUDQnKTtcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH0qL1xyXG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdmaWxlJywgZXZlbnQpO1xyXG4gICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnYnVja2V0JywgJycpO1xyXG4gICAgICAgIHBvc3RGaWxlVXBsb2FkKGZvcm1EYXRhKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSlcclxuICAgICAgICAgIHRoaXMuZmlsZUxpc3QucHVzaCh7aWQ6IHJlcy5kYXRhLmlkLCB1cmw6IHJlcy5kYXRhLnJlbGF0aXZlX3VybCwgbmFtZTogcmVzLmRhdGEub3JpZ2luYWxfbmFtZX0pXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgLy/lm77niYfliKDpmaRcclxuICAgICAgb25EZWxldGVGaWxlKGZpbGUpIHtcclxuICAgICAgICB0aGlzLmZpbGVMaXN0LmZvckVhY2goKGl0ZW0sIGkpID0+IHtcclxuICAgICAgICAgIGlmIChpdGVtLnVybCA9PT0gZmlsZS51cmwpIHtcclxuICAgICAgICAgICAgdGhpcy5maWxlTGlzdC5zcGxpY2UoaSwgMSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICAvL+aWh+S7tuS4i+i9vVxyXG4gICAgICBvbkRvd25Mb2FkKHVybCkge1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKHVybClcclxuICAgICAgfSxcclxuICAgICAgLy/lj43ppohcclxuICAgICAgb25TdXJlRmVlZGJhY2soKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZmVlZGJhY2sgPT09ICcnKSB7XHJcbiAgICAgICAgICBUb2FzdCgn5Y+N6aaI5YaF5a655LiN6IO95Li656m6Jyk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBmaWxlSWQgPSB0aGlzLmZpbGVMaXN0Lm1hcChpdGVtID0+IGl0ZW0uaWQpLmpvaW4oJywnKTtcclxuICAgICAgICB0aGlzLmFkZEJ0bkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHBvc3RUYXNrRmVlZGJhY2soe1xyXG4gICAgICAgICAgZmVlZGJhY2tfY29udGVudDogdGhpcy5mZWVkYmFjayxcclxuICAgICAgICAgIGhhbmRsZV91c2VyOiAn5p2O5ZubJyxcclxuICAgICAgICAgIGhhbmRsZV91c2VyX2lkOiAnMicsXHJcbiAgICAgICAgICB0YXNrX2lkOiB0aGlzLnRhc2suaWQsXHJcbiAgICAgICAgICBmaWxlX2lkOiBmaWxlSWRcclxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNob3dGZWVkYmFjayA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5hZGRCdG5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICBpZiAocmVzLmNvZGUgPT09ICcyMDAnKSB7XHJcbiAgICAgICAgICAgIFRvYXN0KCflj43ppojmiJDlip8nKTtcclxuICAgICAgICAgICAgdGhpcy5mZWVkYmFjayA9ICcnO1xyXG4gICAgICAgICAgICB0aGlzLmZpbGVMaXN0ID0gW107XHJcbiAgICAgICAgICAgIHRoaXMucXVlcnlUYXNrRGV0YWlsKCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBUb2FzdCgn5aSx6LSlJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgLy/lrqHmoLhcclxuICAgICAgb25TdXJlQ2hlY2soKSB7XHJcbiAgICAgICAgdGhpcy5hZGRCdG5Mb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBwb3N0VGFza0NoZWNrKHtcclxuICAgICAgICAgIGZlZWRiYWNrX2lkOiB0aGlzLnRhc2suZmVlZGJhY2tfaWQsXHJcbiAgICAgICAgICBoYW5kbGVfdXNlcjogJ+eOi+S6lCcsXHJcbiAgICAgICAgICBoYW5kbGVfdXNlcl9pZDogJzMnLFxyXG4gICAgICAgICAgaWxsdXN0cmF0ZTogdGhpcy5jaGVjay5yZW1hcmssXHJcbiAgICAgICAgICByZXN1bHQ6IHRoaXMuY2hlY2sucmVzdWx0LFxyXG4gICAgICAgICAgdGFza19pZDogdGhpcy50YXNrLmlkLFxyXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIHRoaXMuc2hvd0NoZWNrID0gZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLmFkZEJ0bkxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIGlmIChyZXMuY29kZSA9PT0gJzIwMCcpIHtcclxuICAgICAgICAgICAgVG9hc3QoJ+WuoeaguOaIkOWKnycpO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrID0ge1xyXG4gICAgICAgICAgICAgIHJlbWFyazogJycsXHJcbiAgICAgICAgICAgICAgcmVzdWx0OiAnJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucXVlcnlUYXNrRGV0YWlsKCk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBUb2FzdCgn5aSx6LSlJyk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIC5kZXRhaWwtd3JhcHBlciB7XHJcbiAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTRweCAxNXB4O1xyXG5cclxuICAgIC5kZXRhaWwtdGl0bGUge1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcclxuICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmRldGFpbC1mb290ZXIge1xyXG4gICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuZmxvdy1idG4ge1xyXG4gICAgICBwYWRkaW5nOiA1cHggMTJweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgfVxyXG5cclxuICAgIC5mZWVkYmFjayB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMjMzMzM7XHJcbiAgICB9XHJcblxyXG4gICAgLmNoZWNrIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYmYzOTtcclxuICAgIH1cclxuXHJcbiAgICAuZW5kIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzA4ZDIzNjtcclxuICAgIH1cclxuXHJcbiAgICAuZGV0YWlsLWRlcyB7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgICAubGFiZWwge1xyXG4gICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucG9wVGl0bGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICB9XHJcblxyXG4gIC5wb3BXcmFwcGVyIHtcclxuICAgIG1heC1oZWlnaHQ6IGNhbGMoNTB2aCk7XHJcblxyXG4gICAgLnBvcEl0ZW0ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6ICM5OTk7XHJcblxyXG4gICAgICAubGFiZWwge1xyXG4gICAgICAgIHdpZHRoOiA3NXB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaW5wdXRXIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZWJlZGYwO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgIHdpZHRoOiAxNTBweFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAucG9wRmlsZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA4NXB4O1xyXG4gICAgcGFkZGluZzogNXB4IDA7XHJcblxyXG4gICAgLmxhYmVsIHtcclxuICAgICAgd2lkdGg6IDkwJTtcclxuICAgICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgICBjb2xvcjogIzJmODdmMDtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBvcEZvb3RlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYmVkZjA7XHJcblxyXG4gICAgZGl2IHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgcGFkZGluZzogMTRweCAwO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICB9XHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJ2YW4tbmF2LWJhclwiLCB7XG4gICAgICAgIGF0dHJzOiB7IFwibGVmdC10ZXh0XCI6IFwi5Lu75Yqh6K+m5oOFXCIsIFwibGVmdC1hcnJvd1wiOiBcIlwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgXCJjbGljay1sZWZ0XCI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0uJHJvdXRlci5nbygtMSlcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRldGFpbC13cmFwcGVyXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRldGFpbC10aXRsZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIiBcIiArIF92bS5fcyhfdm0udGFzay50eXBlKSArIFwi77yaXCIgKyBfdm0uX3MoX3ZtLnRhc2sudGl0bGUpICsgXCIgXCJcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgXCJmbG93LWJ0blwiLFxuICAgICAgICAgICAgICAgIF92bS50YXNrLnN0YXR1cyA9PT0gXCLlvoXlj43ppohcIlxuICAgICAgICAgICAgICAgICAgPyBcImZlZWRiYWNrXCJcbiAgICAgICAgICAgICAgICAgIDogX3ZtLnRhc2suc3RhdHVzID09PSBcIuW+heWuoeaguFwiXG4gICAgICAgICAgICAgICAgICA/IFwiY2hlY2tcIlxuICAgICAgICAgICAgICAgICAgOiBcImVuZFwiLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS50YXNrLnN0YXR1cykpXVxuICAgICAgICAgICksXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRldGFpbC1kZXNcIiB9LCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbX3ZtLl92KFwi5Y+R5biD5pe26Ze077yaXCIpXSksXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udGFzay5jcmVhdGVfdGltZSkgKyBcIiBcIiksXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRldGFpbC1kZXNcIiB9LCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbX3ZtLl92KFwi5oiq5q2i5pe26Ze077yaXCIpXSksXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udGFzay5kZWFkbGluZSkgKyBcIiBcIiksXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRldGFpbC1kZXNcIiB9LCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbX3ZtLl92KFwi5aSE55CG5Lq677yaXCIpXSksXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udGFzay5oYW5kbGVfdXNlcikgKyBcIiBcIiksXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRldGFpbC1kZXNcIiB9LCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbX3ZtLl92KFwi5Lu75Yqh5YaF5a6577yaXCIpXSksXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udGFzay5jb250ZW50KSArIFwiIFwiKSxcbiAgICAgICAgXSksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGV0YWlsLWRlc1wiIH0sIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtfdm0uX3YoXCLlpITnva7lr7nosaHvvJpcIildKSxcbiAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS50YXNrLnNpdGVfbmFtZSkgKyBcIiBcIiksXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRldGFpbC1kZXNcIiB9LCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbX3ZtLl92KFwi6K+m57uG5Zyw5Z2A77yaXCIpXSksXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udGFzay5hZGRyZXNzKSArIFwiIFwiKSxcbiAgICAgICAgXSksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkZXRhaWwtZm9vdGVyXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0udGFzay5zdGF0dXMgPT09IFwi5b6F5Y+N6aaIXCJcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwidmFuLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCI5MCVcIiB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyByb3VuZDogXCJcIiwgdHlwZTogXCJpbmZvXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3dGZWVkYmFjayA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLlj43ppoggXCIpXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF92bS50YXNrLnN0YXR1cyA9PT0gXCLlvoXlrqHmoLhcIlxuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJ2YW4tYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjkwJVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdW5kOiBcIlwiLCB0eXBlOiBcImluZm9cIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hvd0NoZWNrID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIuWuoeaguCBcIildXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgXSksXG4gICAgICBfdm0uX2woX3ZtLnByb2Nlc3MsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgaXRlbS5mZWVkYmFja1xuICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRldGFpbC13cmFwcGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGV0YWlsLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIOWPjemmiOWGheWuuSBcIiksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkZXRhaWwtZGVzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbX3ZtLl92KFwi5Y+N6aaI5pe26Ze077yaXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0uZmVlZGJhY2sudGltZSkgKyBcIiBcIiksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkZXRhaWwtZGVzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbX3ZtLl92KFwi5aSE55CG5Lq677yaXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0uZmVlZGJhY2suaGFuZGxlX3VzZXIpICsgXCIgXCIpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGV0YWlsLWRlc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW192bS5fdihcIuWPjemmiOWGheWuue+8mlwiKV0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLmZlZWRiYWNrLmZlZWRiYWNrX2NvbnRlbnQpICsgXCIgXCIpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGV0YWlsLWRlc1wiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBkaXNwbGF5OiBcImZsZXhcIiB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiLCBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCI0NXB4XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLpmYTku7bvvJpcIildXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCJjYWxjKDEwMCUgLSA0NXB4KVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woaXRlbS5mZWVkYmFjay5maWxlX2xpc3QsIGZ1bmN0aW9uIChpdGVtRmlsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMyZjg3ZjBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1kZWNvcmF0aW9uXCI6IFwidW5kZXJsaW5lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBhZGRpbmctYm90dG9tXCI6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkRvd25Mb2FkKGl0ZW1GaWxlLnJlbGF0aXZlX3VybClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbUZpbGUub3JpZ2luYWxfbmFtZSkgKyBcIiBcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIGl0ZW0uZXhhbWluZVxuICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRldGFpbC13cmFwcGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGV0YWlsLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIOWuoeaguOWGheWuuSBcIiksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkZXRhaWwtZGVzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbX3ZtLl92KFwi5Y+N6aaI5pe26Ze077yaXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0uZXhhbWluZS50aW1lKSArIFwiIFwiKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRldGFpbC1kZXNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtfdm0uX3YoXCLlpITnkIbkurrvvJpcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5leGFtaW5lLmhhbmRsZV91c2VyKSArIFwiIFwiKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImRldGFpbC1kZXNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtfdm0uX3YoXCLlrqHmoLjnu5PmnpzvvJpcIildKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5leGFtaW5lLnJlc3VsdCkgKyBcIiBcIiksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkZXRhaWwtZGVzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbX3ZtLl92KFwi5a6h5qC46K+05piO77yaXCIpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0uZXhhbWluZS5pbGx1c3RyYXRlKSArIFwiIFwiKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF1cbiAgICAgIH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwidmFuLXBvcHVwXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBjbG9zZWFibGU6IGZhbHNlLCByb3VuZDogXCJcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnNob3dGZWVkYmFjayxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5zaG93RmVlZGJhY2sgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcInNob3dGZWVkYmFja1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBvcFRpdGxlXCIgfSwgW192bS5fdihcIuWPjemmiFwiKV0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicG9wV3JhcHBlclwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicG9wSXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtfdm0uX3YoXCLlj43ppojlhoXlrrnvvJpcIildKSxcbiAgICAgICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZlZWRiYWNrLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmVlZGJhY2tcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFdcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvd3M6IFwiNFwiIH0sXG4gICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZlZWRiYWNrIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF92bS5mZWVkYmFjayA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicG9wSXRlbVwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbX3ZtLl92KFwi6ZmE5Lu277yaXCIpXSksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2YW4tdXBsb2FkZXJcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImJlZm9yZS1yZWFkXCI6IF92bS5vbkJlZm9yZVJlYWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NlcHQ6IFwiLmRvYywuZG9jeCwueGxzLC54bHN4LC5wcHQsLnBwdHhcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInZhbi1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgaWNvbjogXCJwbHVzXCIsIHR5cGU6IFwicHJpbWFyeVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLkuIrkvKDmlofku7ZcIildXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5maWxlTGlzdCwgZnVuY3Rpb24gKGl0ZW1GaWxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicG9wRmlsZVwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxhYmVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25Eb3duTG9hZChpdGVtRmlsZS51cmwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbUZpbGUubmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInZhbi1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcImNyb3NzXCIsIGNvbG9yOiBcIiMyZjg3ZjBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uRGVsZXRlRmlsZShpdGVtRmlsZSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwb3BGb290ZXJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0uc2hvd0ZlZWRiYWNrID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIuWPlua2iFwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMTk4OWZhXCIsXG4gICAgICAgICAgICAgICAgICBcImJvcmRlci1sZWZ0XCI6IFwiMXB4IHNvbGlkICNlYmVkZjBcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxvYWRpbmc6IF92bS5idG5Mb2FkaW5nIH0sXG4gICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vblN1cmVGZWVkYmFjayB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwi56Gu6K6kIFwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2YW4tcG9wdXBcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IGNsb3NlYWJsZTogZmFsc2UsIHJvdW5kOiBcIlwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hvd0NoZWNrLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLnNob3dDaGVjayA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2hvd0NoZWNrXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicG9wVGl0bGVcIiB9LCBbX3ZtLl92KFwi5a6h5qC4XCIpXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwb3BXcmFwcGVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicG9wSXRlbVwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtfdm0uX3YoXCLnu5PmnpzvvJpcIildKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidmFuLXJhZGlvLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpcmVjdGlvbjogXCJob3Jpem9udGFsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNoZWNrLnJlc3VsdCxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmNoZWNrLCBcInJlc3VsdFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNoZWNrLnJlc3VsdFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2YW4tcmFkaW9cIiwgeyBhdHRyczogeyBuYW1lOiBcIumAmui/h1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIumAmui/h1wiKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidmFuLXJhZGlvXCIsIHsgYXR0cnM6IHsgbmFtZTogXCLkuI3pgJrov4dcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLkuI3pgJrov4dcIiksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwb3BJdGVtXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtfdm0uX3YoXCLor7TmmI7vvJpcIildKSxcbiAgICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNoZWNrLnJlbWFyayxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjaGVjay5yZW1hcmtcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFdcIixcbiAgICAgICAgICAgICAgICBhdHRyczogeyByb3dzOiBcIjRcIiwgcGxhY2Vob2xkZXI6IFwi6K+36L6T5YWlXCIgfSxcbiAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmNoZWNrLnJlbWFyayB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uY2hlY2ssIFwicmVtYXJrXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwb3BGb290ZXJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0uc2hvd0NoZWNrID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIuWPlua2iFwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMTk4OWZhXCIsXG4gICAgICAgICAgICAgICAgICBcImJvcmRlci1sZWZ0XCI6IFwiMXB4IHNvbGlkICNlYmVkZjBcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGxvYWRpbmc6IF92bS5idG5Mb2FkaW5nIH0sXG4gICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vblN1cmVDaGVjayB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwi56Gu6K6kIFwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIndXNlIHN0cmljdCc7XG52YXIgJGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZm9yRWFjaDtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdmb3JFYWNoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG5tb2R1bGUuZXhwb3J0cyA9ICFTVFJJQ1RfTUVUSE9EID8gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICByZXR1cm4gJGZvckVhY2godGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcbn0gOiBbXS5mb3JFYWNoO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xuXG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yIC0tIHNhZmVcbnZhciBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG4vLyBTYWZhcmkgPCAxMyBkb2VzIG5vdCB0aHJvdyBhbiBlcnJvciBpbiB0aGlzIGNhc2VcbnZhciBTSUxFTlRfT05fTk9OX1dSSVRBQkxFX0xFTkdUSF9TRVQgPSBERVNDUklQVE9SUyAmJiAhZnVuY3Rpb24gKCkge1xuICAvLyBtYWtlcyBubyBzZW5zZSB3aXRob3V0IHByb3BlciBzdHJpY3QgbW9kZSBzdXBwb3J0XG4gIGlmICh0aGlzICE9PSB1bmRlZmluZWQpIHJldHVybiB0cnVlO1xuICB0cnkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShbXSwgJ2xlbmd0aCcsIHsgd3JpdGFibGU6IGZhbHNlIH0pLmxlbmd0aCA9IDE7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgcmV0dXJuIGVycm9yIGluc3RhbmNlb2YgVHlwZUVycm9yO1xuICB9XG59KCk7XG5cbm1vZHVsZS5leHBvcnRzID0gU0lMRU5UX09OX05PTl9XUklUQUJMRV9MRU5HVEhfU0VUID8gZnVuY3Rpb24gKE8sIGxlbmd0aCkge1xuICBpZiAoaXNBcnJheShPKSAmJiAhZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sICdsZW5ndGgnKS53cml0YWJsZSkge1xuICAgIHRocm93IG5ldyAkVHlwZUVycm9yKCdDYW5ub3Qgc2V0IHJlYWQgb25seSAubGVuZ3RoJyk7XG4gIH0gcmV0dXJuIE8ubGVuZ3RoID0gbGVuZ3RoO1xufSA6IGZ1bmN0aW9uIChPLCBsZW5ndGgpIHtcbiAgcmV0dXJuIE8ubGVuZ3RoID0gbGVuZ3RoO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xudmFyIE1BWF9TQUZFX0lOVEVHRVIgPSAweDFGRkZGRkZGRkZGRkZGOyAvLyAyICoqIDUzIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA+IE1BWF9TQUZFX0lOVEVHRVIpIHRocm93ICRUeXBlRXJyb3IoJ01heGltdW0gYWxsb3dlZCBpbmRleCBleGNlZWRlZCcpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJG1hcCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5tYXA7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ21hcCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIG1hcDogZnVuY3Rpb24gbWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1hYnNvbHV0ZS1pbmRleCcpO1xudmFyIHRvSW50ZWdlck9ySW5maW5pdHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8taW50ZWdlci1vci1pbmZpbml0eScpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgc2V0QXJyYXlMZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc2V0LWxlbmd0aCcpO1xudmFyIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2VzLW5vdC1leGNlZWQtc2FmZS1pbnRlZ2VyJyk7XG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgZGVsZXRlUHJvcGVydHlPclRocm93ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RlbGV0ZS1wcm9wZXJ0eS1vci10aHJvdycpO1xudmFyIGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWhhcy1zcGVjaWVzLXN1cHBvcnQnKTtcblxudmFyIEhBU19TUEVDSUVTX1NVUFBPUlQgPSBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdzcGxpY2UnKTtcblxudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLnNwbGljZWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5zcGxpY2Vcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIHNwbGljZTogZnVuY3Rpb24gc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCAvKiAsIC4uLml0ZW1zICovKSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCh0aGlzKTtcbiAgICB2YXIgbGVuID0gbGVuZ3RoT2ZBcnJheUxpa2UoTyk7XG4gICAgdmFyIGFjdHVhbFN0YXJ0ID0gdG9BYnNvbHV0ZUluZGV4KHN0YXJ0LCBsZW4pO1xuICAgIHZhciBhcmd1bWVudHNMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIHZhciBpbnNlcnRDb3VudCwgYWN0dWFsRGVsZXRlQ291bnQsIEEsIGssIGZyb20sIHRvO1xuICAgIGlmIChhcmd1bWVudHNMZW5ndGggPT09IDApIHtcbiAgICAgIGluc2VydENvdW50ID0gYWN0dWFsRGVsZXRlQ291bnQgPSAwO1xuICAgIH0gZWxzZSBpZiAoYXJndW1lbnRzTGVuZ3RoID09PSAxKSB7XG4gICAgICBpbnNlcnRDb3VudCA9IDA7XG4gICAgICBhY3R1YWxEZWxldGVDb3VudCA9IGxlbiAtIGFjdHVhbFN0YXJ0O1xuICAgIH0gZWxzZSB7XG4gICAgICBpbnNlcnRDb3VudCA9IGFyZ3VtZW50c0xlbmd0aCAtIDI7XG4gICAgICBhY3R1YWxEZWxldGVDb3VudCA9IG1pbihtYXgodG9JbnRlZ2VyT3JJbmZpbml0eShkZWxldGVDb3VudCksIDApLCBsZW4gLSBhY3R1YWxTdGFydCk7XG4gICAgfVxuICAgIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlcihsZW4gKyBpbnNlcnRDb3VudCAtIGFjdHVhbERlbGV0ZUNvdW50KTtcbiAgICBBID0gYXJyYXlTcGVjaWVzQ3JlYXRlKE8sIGFjdHVhbERlbGV0ZUNvdW50KTtcbiAgICBmb3IgKGsgPSAwOyBrIDwgYWN0dWFsRGVsZXRlQ291bnQ7IGsrKykge1xuICAgICAgZnJvbSA9IGFjdHVhbFN0YXJ0ICsgaztcbiAgICAgIGlmIChmcm9tIGluIE8pIGNyZWF0ZVByb3BlcnR5KEEsIGssIE9bZnJvbV0pO1xuICAgIH1cbiAgICBBLmxlbmd0aCA9IGFjdHVhbERlbGV0ZUNvdW50O1xuICAgIGlmIChpbnNlcnRDb3VudCA8IGFjdHVhbERlbGV0ZUNvdW50KSB7XG4gICAgICBmb3IgKGsgPSBhY3R1YWxTdGFydDsgayA8IGxlbiAtIGFjdHVhbERlbGV0ZUNvdW50OyBrKyspIHtcbiAgICAgICAgZnJvbSA9IGsgKyBhY3R1YWxEZWxldGVDb3VudDtcbiAgICAgICAgdG8gPSBrICsgaW5zZXJ0Q291bnQ7XG4gICAgICAgIGlmIChmcm9tIGluIE8pIE9bdG9dID0gT1tmcm9tXTtcbiAgICAgICAgZWxzZSBkZWxldGVQcm9wZXJ0eU9yVGhyb3coTywgdG8pO1xuICAgICAgfVxuICAgICAgZm9yIChrID0gbGVuOyBrID4gbGVuIC0gYWN0dWFsRGVsZXRlQ291bnQgKyBpbnNlcnRDb3VudDsgay0tKSBkZWxldGVQcm9wZXJ0eU9yVGhyb3coTywgayAtIDEpO1xuICAgIH0gZWxzZSBpZiAoaW5zZXJ0Q291bnQgPiBhY3R1YWxEZWxldGVDb3VudCkge1xuICAgICAgZm9yIChrID0gbGVuIC0gYWN0dWFsRGVsZXRlQ291bnQ7IGsgPiBhY3R1YWxTdGFydDsgay0tKSB7XG4gICAgICAgIGZyb20gPSBrICsgYWN0dWFsRGVsZXRlQ291bnQgLSAxO1xuICAgICAgICB0byA9IGsgKyBpbnNlcnRDb3VudCAtIDE7XG4gICAgICAgIGlmIChmcm9tIGluIE8pIE9bdG9dID0gT1tmcm9tXTtcbiAgICAgICAgZWxzZSBkZWxldGVQcm9wZXJ0eU9yVGhyb3coTywgdG8pO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKGsgPSAwOyBrIDwgaW5zZXJ0Q291bnQ7IGsrKykge1xuICAgICAgT1trICsgYWN0dWFsU3RhcnRdID0gYXJndW1lbnRzW2sgKyAyXTtcbiAgICB9XG4gICAgc2V0QXJyYXlMZW5ndGgoTywgbGVuIC0gYWN0dWFsRGVsZXRlQ291bnQgKyBpbnNlcnRDb3VudCk7XG4gICAgcmV0dXJuIEE7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBET01JdGVyYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcycpO1xudmFyIERPTVRva2VuTGlzdFByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20tdG9rZW4tbGlzdC1wcm90b3R5cGUnKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xuXG52YXIgaGFuZGxlUHJvdG90eXBlID0gZnVuY3Rpb24gKENvbGxlY3Rpb25Qcm90b3R5cGUpIHtcbiAgLy8gc29tZSBDaHJvbWUgdmVyc2lvbnMgaGF2ZSBub24tY29uZmlndXJhYmxlIG1ldGhvZHMgb24gRE9NVG9rZW5MaXN0XG4gIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlICYmIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCAhPT0gZm9yRWFjaCkgdHJ5IHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ29sbGVjdGlvblByb3RvdHlwZSwgJ2ZvckVhY2gnLCBmb3JFYWNoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggPSBmb3JFYWNoO1xuICB9XG59O1xuXG5mb3IgKHZhciBDT0xMRUNUSU9OX05BTUUgaW4gRE9NSXRlcmFibGVzKSB7XG4gIGlmIChET01JdGVyYWJsZXNbQ09MTEVDVElPTl9OQU1FXSkge1xuICAgIGhhbmRsZVByb3RvdHlwZShnbG9iYWxUaGlzW0NPTExFQ1RJT05fTkFNRV0gJiYgZ2xvYmFsVGhpc1tDT0xMRUNUSU9OX05BTUVdLnByb3RvdHlwZSk7XG4gIH1cbn1cblxuaGFuZGxlUHJvdG90eXBlKERPTVRva2VuTGlzdFByb3RvdHlwZSk7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmRldGFpbC13cmFwcGVyW2RhdGEtdi04N2U2OGM1NF0ge1xcbiAgbWFyZ2luLXRvcDogOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHBhZGRpbmc6IDE0cHggMTVweDtcXG59XFxuLmRldGFpbC13cmFwcGVyIC5kZXRhaWwtdGl0bGVbZGF0YS12LTg3ZTY4YzU0XSB7XFxuICBwYWRkaW5nLWJvdHRvbTogMTZweDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5kZXRhaWwtd3JhcHBlciAuZGV0YWlsLWZvb3RlcltkYXRhLXYtODdlNjhjNTRdIHtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmRldGFpbC13cmFwcGVyIC5mbG93LWJ0bltkYXRhLXYtODdlNjhjNTRdIHtcXG4gIHBhZGRpbmc6IDVweCAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG4uZGV0YWlsLXdyYXBwZXIgLmZlZWRiYWNrW2RhdGEtdi04N2U2OGM1NF0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyMzMzMztcXG59XFxuLmRldGFpbC13cmFwcGVyIC5jaGVja1tkYXRhLXYtODdlNjhjNTRdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmJmMzk7XFxufVxcbi5kZXRhaWwtd3JhcHBlciAuZW5kW2RhdGEtdi04N2U2OGM1NF0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzA4ZDIzNjtcXG59XFxuLmRldGFpbC13cmFwcGVyIC5kZXRhaWwtZGVzW2RhdGEtdi04N2U2OGM1NF0ge1xcbiAgcGFkZGluZy1ib3R0b206IDhweDtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uZGV0YWlsLXdyYXBwZXIgLmRldGFpbC1kZXMgLmxhYmVsW2RhdGEtdi04N2U2OGM1NF0ge1xcbiAgY29sb3I6ICM5OTk7XFxufVxcbi5wb3BUaXRsZVtkYXRhLXYtODdlNjhjNTRdIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XFxufVxcbi5wb3BXcmFwcGVyW2RhdGEtdi04N2U2OGM1NF0ge1xcbiAgbWF4LWhlaWdodDogNTB2aDtcXG59XFxuLnBvcFdyYXBwZXIgLnBvcEl0ZW1bZGF0YS12LTg3ZTY4YzU0XSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDI1MHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjOTk5O1xcbn1cXG4ucG9wV3JhcHBlciAucG9wSXRlbSAubGFiZWxbZGF0YS12LTg3ZTY4YzU0XSB7XFxuICB3aWR0aDogNzVweDtcXG59XFxuLnBvcFdyYXBwZXIgLnBvcEl0ZW0gLmlucHV0V1tkYXRhLXYtODdlNjhjNTRdIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlYmVkZjA7XFxuICBwYWRkaW5nLWxlZnQ6IDVweDtcXG4gIHdpZHRoOiAxNTBweDtcXG59XFxuLnBvcEZpbGVbZGF0YS12LTg3ZTY4YzU0XSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiAxNjBweDtcXG4gIG1hcmdpbi1sZWZ0OiA4NXB4O1xcbiAgcGFkZGluZzogNXB4IDA7XFxufVxcbi5wb3BGaWxlIC5sYWJlbFtkYXRhLXYtODdlNjhjNTRdIHtcXG4gIHdpZHRoOiA5MCU7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBjb2xvcjogIzJmODdmMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuLnBvcEZvb3RlcltkYXRhLXYtODdlNjhjNTRdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2ViZWRmMDtcXG59XFxuLnBvcEZvb3RlciBkaXZbZGF0YS12LTg3ZTY4YzU0XSB7XFxuICB3aWR0aDogNTAlO1xcbiAgcGFkZGluZzogMTRweCAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Rhc2tEZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODdlNjhjNTQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIwMDE4MjFiM1wiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Rhc2tEZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ODdlNjhjNTQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YXNrRGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTg3ZTY4YzU0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xyXG5cclxuLyoqXHJcbiAqIOS7u+WKoeWIl+ihqFxyXG4gKiBAcGFyYW0gbGltaXQg5p2h5pWwXHJcbiAqIEBwYXJhbSBwYWdlIOW9k+WJjemhtVxyXG4gKiBAcGFyYW0gbmFtZSDmqKHns4rmkJzntKJcclxuICogQHBhcmFtIHN0YXR1cyDku7vliqHnirbmgIFcclxuICogQHBhcmFtIHR5cGUg5Lu75Yqh57G75Z6LXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXNrTGlzdCh7bGltaXQsIHBhZ2UsIG5hbWUsIHN0YXR1cywgdHlwZX0pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBwL3Rhc2svdGFza19pbmZvX2xpc3QnLFxyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBsaW1pdCxcclxuICAgICAgcGFnZSxcclxuICAgICAgbmFtZSxcclxuICAgICAgc3RhdHVzLFxyXG4gICAgICB0eXBlXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOS7u+WKoeexu+Wei1xyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFza1R5cGVMaXN0KCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvdGFzay90YXNrX3R5cGVfbGlzdCcsXHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgcGFyYW1zOiB7fVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlj5HluIPku7vliqFcclxuICogQHBhcmFtIGRhdGEg5Lu75Yqh5bGe5oCnXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3N0VGFza0FkZChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC90YXNrL2luc2VydF90YXNrX2luZm8nLFxyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBkYXRhOiBkYXRhXHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWkhOe9ruWvueixoeS4i+aLiVxyXG4gKiBAcGFyYW0gZGl2aXNpb25fY29kZSDlvZPliY3nmbvlvZXnlKjmiLfnmoTooYzmlL/ljLrliJJcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRhc2tEaXNwb3NlKCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvdGFzay9zaXRlX2xpc3QnLFxyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBkaXZpc2lvbl9jb2RlOiAnNTMwMTE1J1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDku7vliqHor6bmg4VcclxuICogQHBhcmFtIGlkIOS7u+WKoWlkXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXNrRGV0YWlsKHtpZH0pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBwL3Rhc2svZGV0YWlsJyxcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICog5Y+N6aaIXHJcbiAqIEBwYXJhbSBkYXRhIOWPjemmiOWxnuaAp1xyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcG9zdFRhc2tGZWVkYmFjayhkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC90YXNrL2ZlZWRiYWNrJyxcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgZGF0YTogZGF0YVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlrqHmoLhcclxuICogQHBhcmFtIGRhdGEg5a6h5qC45bGe5oCnXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3N0VGFza0NoZWNrKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBwL3Rhc2svZXhhbWluZScsXHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGRhdGE6IGRhdGFcclxuICB9KVxyXG59XHJcbiIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcclxuXHJcbi8qKlxyXG4gKiDlj43ppojnmoTmlofku7bkuIrkvKBcclxuICogQHBhcmFtIGZvcm1EYXRhIOaWh+S7tuS4iuS8oFxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcG9zdEZpbGVVcGxvYWQoZm9ybURhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvbWluaW8vdXBsb2FkJyxcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBcImNvbnRlbnQtdHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIlxyXG4gICAgfSxcclxuICAgIGRhdGE6IGZvcm1EYXRhXHJcbiAgfSlcclxufVxyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3Rhc2tEZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg3ZTY4YzU0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3Rhc2tEZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi90YXNrRGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi90YXNrRGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTg3ZTY4YzU0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiODdlNjhjNTRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnODdlNjhjNTQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnODdlNjhjNTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnODdlNjhjNTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3Rhc2tEZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTg3ZTY4YzU0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzg3ZTY4YzU0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvdGFzay90YXNrRGV0YWlsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFza0RldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFza0RldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YXNrRGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTg3ZTY4YzU0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFza0RldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODdlNjhjNTQmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9