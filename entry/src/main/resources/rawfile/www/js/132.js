(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[132],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/task/taskAdd.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/task/taskAdd.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vant */ "./node_modules/vant/es/index.js");
/* harmony import */ var _api_task_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/task.js */ "./src/api/task.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "taskAdd",
  data: function data() {
    return {
      addForm: {
        title: '',
        content: '',
        type: '',
        deadline: '',
        handle_user: localStorage.getItem("userName"),
        handle_user_id: localStorage.getItem("userId"),
        site_name: '',
        site_id: '',
        create_user_id: '1',
        create_user: '张三'
      },
      showPickerType: false,
      showPickerDispose: false,
      //处置对象
      showPickerHandler: false,
      //处理人
      showDeadline: false,
      columnsType: [],
      columnsDispose: [],
      columnsHandler: [],
      addBtnLoading: false
    };
  },
  mounted: function mounted() {
    this.queryTaskType();
    this.queryTaskDispose();
  },
  methods: {
    //查询任务类型下拉框
    queryTaskType: function queryTaskType() {
      var _this = this;

      Object(_api_task_js__WEBPACK_IMPORTED_MODULE_2__["getTaskTypeList"])().then(function (res) {
        _this.columnsType = res.data;
      });
    },
    //根据当前用户的行政区划查询处置对象下拉框
    queryTaskDispose: function queryTaskDispose() {
      var _this2 = this;

      Object(_api_task_js__WEBPACK_IMPORTED_MODULE_2__["getTaskDispose"])({
        division_code: ''
      }).then(function (res) {
        _this2.columnsDispose = res.data;
        _this2.columnsHandler = res.data;
      });
    },
    onAddTask: function onAddTask() {
      var _this3 = this;

      if (this.addForm.title === '') {
        Object(vant__WEBPACK_IMPORTED_MODULE_1__["Toast"])('任务标题不能为空');
        return;
      }

      if (this.addForm.type === '') {
        Object(vant__WEBPACK_IMPORTED_MODULE_1__["Toast"])('请选择任务类型');
        return;
      }

      if (this.addForm.site_name === '') {
        Object(vant__WEBPACK_IMPORTED_MODULE_1__["Toast"])('请选择处置对象');
        return;
      } // if(this.addForm.handle_user===''){
      //   Toast('请选择处理人');
      //   return;
      // }


      this.addBtnLoading = true;
      Object(_api_task_js__WEBPACK_IMPORTED_MODULE_2__["postTaskAdd"])(this.addForm).then(function (res) {
        _this3.addBtnLoading = false;

        if (res.code === '200') {
          Object(vant__WEBPACK_IMPORTED_MODULE_1__["Toast"])('任务发布成功');

          _this3.$router.push("/Task");
        } else {
          Object(vant__WEBPACK_IMPORTED_MODULE_1__["Toast"])('失败');
        }
      });
    },
    //任务类型picker确认
    onConfirmType: function onConfirmType(value) {
      this.showPickerType = false;
      this.addForm.type = value.name;
    },
    //处置对象picker确认
    onConfirmDispose: function onConfirmDispose(value) {
      this.showPickerDispose = false;
      this.addForm.site_name = value.wrymc;
      this.addForm.site_id = value.id;
      this.addForm.address = value.szdz;
    },
    //处理人picker确认
    onConfirmHandler: function onConfirmHandler(value) {
      this.showPickerHandler = false;
      this.addForm.handle_user = value.wrymc;
      this.addForm.handle_user_id = value.id;
    },
    onConfirmDeadline: function onConfirmDeadline(value) {
      this.showDeadline = false;
      this.addForm.deadline = this.dayjs(value).format("YYYY-MM-DD");
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/task/taskAdd.vue?vue&type=template&id=09391b28&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/task/taskAdd.vue?vue&type=template&id=09391b28&scoped=true& ***!
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
        attrs: { "left-text": "发布任务", "left-arrow": "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
      }),
      _c(
        "div",
        { staticClass: "add-wrapper" },
        [
          _c("van-field", {
            attrs: {
              required: "",
              label: "任务标题",
              placeholder: "任务标题",
              "input-align": "right",
            },
            model: {
              value: _vm.addForm.title,
              callback: function ($$v) {
                _vm.$set(_vm.addForm, "title", $$v)
              },
              expression: "addForm.title",
            },
          }),
          _c("van-field", {
            attrs: {
              required: "",
              "is-link": "",
              readonly: "",
              name: "picker",
              label: "任务类型",
              "input-align": "right",
              placeholder: "点击选择任务类型",
            },
            on: {
              click: function ($event) {
                _vm.showPickerType = true
              },
            },
            model: {
              value: _vm.addForm.type,
              callback: function ($$v) {
                _vm.$set(_vm.addForm, "type", $$v)
              },
              expression: "addForm.type",
            },
          }),
          _c(
            "van-popup",
            {
              attrs: { position: "bottom" },
              model: {
                value: _vm.showPickerType,
                callback: function ($$v) {
                  _vm.showPickerType = $$v
                },
                expression: "showPickerType",
              },
            },
            [
              _c("van-picker", {
                attrs: {
                  "show-toolbar": "",
                  columns: _vm.columnsType,
                  "value-key": "name",
                },
                on: {
                  confirm: _vm.onConfirmType,
                  cancel: function ($event) {
                    _vm.showPickerType = false
                  },
                },
              }),
            ],
            1
          ),
          _c("van-field", {
            attrs: {
              type: "textarea",
              label: "任务内容",
              placeholder: "任务内容",
              "input-align": "right",
            },
            model: {
              value: _vm.addForm.content,
              callback: function ($$v) {
                _vm.$set(_vm.addForm, "content", $$v)
              },
              expression: "addForm.content",
            },
          }),
          _c("van-field", {
            attrs: {
              "is-link": "",
              readonly: "",
              required: "",
              name: "picker",
              label: "处置对象",
              "input-align": "right",
              placeholder: "点击选择处置对象",
            },
            on: {
              click: function ($event) {
                _vm.showPickerDispose = true
              },
            },
            model: {
              value: _vm.addForm.site_name,
              callback: function ($$v) {
                _vm.$set(_vm.addForm, "site_name", $$v)
              },
              expression: "addForm.site_name",
            },
          }),
          _c(
            "van-popup",
            {
              attrs: { position: "bottom" },
              model: {
                value: _vm.showPickerDispose,
                callback: function ($$v) {
                  _vm.showPickerDispose = $$v
                },
                expression: "showPickerDispose",
              },
            },
            [
              _c("van-picker", {
                attrs: {
                  "show-toolbar": "",
                  columns: _vm.columnsDispose,
                  "value-key": "wrymc",
                },
                on: {
                  confirm: _vm.onConfirmDispose,
                  cancel: function ($event) {
                    _vm.showPickerDispose = false
                  },
                },
              }),
            ],
            1
          ),
          _c("van-field", {
            attrs: {
              label: "详细地址",
              placeholder: "详细地址",
              "input-align": "right",
            },
            model: {
              value: _vm.addForm.address,
              callback: function ($$v) {
                _vm.$set(_vm.addForm, "address", $$v)
              },
              expression: "addForm.address",
            },
          }),
          _c("van-field", {
            attrs: {
              readonly: "",
              clickable: "",
              name: "calendar",
              value: _vm.addForm.deadline,
              label: "截止时间",
              placeholder: "点击选择截止时间",
              "input-align": "right",
            },
            on: {
              click: function ($event) {
                _vm.showDeadline = true
              },
            },
          }),
          _c("van-calendar", {
            attrs: { color: "#1989fa" },
            on: { confirm: _vm.onConfirmDeadline },
            model: {
              value: _vm.showDeadline,
              callback: function ($$v) {
                _vm.showDeadline = $$v
              },
              expression: "showDeadline",
            },
          }),
          _c("van-field", {
            attrs: {
              required: "",
              label: "处理人",
              placeholder: "详细地址",
              "input-align": "right",
            },
            model: {
              value: _vm.addForm.handle_user,
              callback: function ($$v) {
                _vm.$set(_vm.addForm, "handle_user", $$v)
              },
              expression: "addForm.handle_user",
            },
          }),
          _c(
            "van-popup",
            {
              attrs: { position: "bottom" },
              model: {
                value: _vm.showPickerHandler,
                callback: function ($$v) {
                  _vm.showPickerHandler = $$v
                },
                expression: "showPickerHandler",
              },
            },
            [
              _c("van-picker", {
                attrs: {
                  "show-toolbar": "",
                  columns: _vm.columnsHandler,
                  "value-key": "wrymc",
                },
                on: {
                  confirm: _vm.onConfirmHandler,
                  cancel: function ($event) {
                    _vm.showPickerHandler = false
                  },
                },
              }),
            ],
            1
          ),
        ],
        1
      ),
      _c(
        "div",
        { staticStyle: { "text-align": "center" } },
        [
          _c(
            "van-button",
            {
              staticStyle: { width: "90%" },
              attrs: {
                round: "",
                type: "info",
                loading: _vm.addBtnLoading,
                "loading-text": "加载中...",
              },
              on: { click: _vm.onAddTask },
            },
            [_vm._v("确定 ")]
          ),
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/task/taskAdd.vue?vue&type=style&index=0&id=09391b28&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/task/taskAdd.vue?vue&type=style&index=0&id=09391b28&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".add-wrapper[data-v-09391b28] {\n  margin: 8px 0 22px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/task/taskAdd.vue?vue&type=style&index=0&id=09391b28&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/task/taskAdd.vue?vue&type=style&index=0&id=09391b28&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./taskAdd.vue?vue&type=style&index=0&id=09391b28&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/task/taskAdd.vue?vue&type=style&index=0&id=09391b28&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3778b1ff", content, false, {"sourceMap":false,"shadowMode":false});
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

/***/ "./src/views/task/taskAdd.vue":
/*!************************************!*\
  !*** ./src/views/task/taskAdd.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _taskAdd_vue_vue_type_template_id_09391b28_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskAdd.vue?vue&type=template&id=09391b28&scoped=true& */ "./src/views/task/taskAdd.vue?vue&type=template&id=09391b28&scoped=true&");
/* harmony import */ var _taskAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskAdd.vue?vue&type=script&lang=js& */ "./src/views/task/taskAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _taskAdd_vue_vue_type_style_index_0_id_09391b28_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskAdd.vue?vue&type=style&index=0&id=09391b28&lang=scss&scoped=true& */ "./src/views/task/taskAdd.vue?vue&type=style&index=0&id=09391b28&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _taskAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _taskAdd_vue_vue_type_template_id_09391b28_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _taskAdd_vue_vue_type_template_id_09391b28_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "09391b28",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/task/taskAdd.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/task/taskAdd.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/views/task/taskAdd.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./taskAdd.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/task/taskAdd.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskAdd_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/task/taskAdd.vue?vue&type=style&index=0&id=09391b28&lang=scss&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./src/views/task/taskAdd.vue?vue&type=style&index=0&id=09391b28&lang=scss&scoped=true& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskAdd_vue_vue_type_style_index_0_id_09391b28_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./taskAdd.vue?vue&type=style&index=0&id=09391b28&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/task/taskAdd.vue?vue&type=style&index=0&id=09391b28&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskAdd_vue_vue_type_style_index_0_id_09391b28_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskAdd_vue_vue_type_style_index_0_id_09391b28_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskAdd_vue_vue_type_style_index_0_id_09391b28_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskAdd_vue_vue_type_style_index_0_id_09391b28_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/task/taskAdd.vue?vue&type=template&id=09391b28&scoped=true&":
/*!*******************************************************************************!*\
  !*** ./src/views/task/taskAdd.vue?vue&type=template&id=09391b28&scoped=true& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskAdd_vue_vue_type_template_id_09391b28_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./taskAdd.vue?vue&type=template&id=09391b28&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/task/taskAdd.vue?vue&type=template&id=09391b28&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskAdd_vue_vue_type_template_id_09391b28_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskAdd_vue_vue_type_template_id_09391b28_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3Rhc2svdGFza0FkZC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3Rhc2svdGFza0FkZC52dWU/ZmQ2NSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFzay90YXNrQWRkLnZ1ZT84MjNiIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YXNrL3Rhc2tBZGQudnVlP2NmMjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS90YXNrLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YXNrL3Rhc2tBZGQudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YXNrL3Rhc2tBZGQudnVlPzRmYTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3Rhc2svdGFza0FkZC52dWU/NWI4ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFzay90YXNrQWRkLnZ1ZT81OWU4Il0sIm5hbWVzIjpbImdldFRhc2tMaXN0IiwibGltaXQiLCJwYWdlIiwibmFtZSIsInN0YXR1cyIsInR5cGUiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwicGFyYW1zIiwiZ2V0VGFza1R5cGVMaXN0IiwicG9zdFRhc2tBZGQiLCJkYXRhIiwiZ2V0VGFza0Rpc3Bvc2UiLCJkaXZpc2lvbl9jb2RlIiwiZ2V0VGFza0RldGFpbCIsImlkIiwicG9zdFRhc2tGZWVkYmFjayIsInBvc3RUYXNrQ2hlY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdIQTtBQUNBO0FBRUE7QUFDQSxpQkFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBREE7QUFFQSxtQkFGQTtBQUdBLGdCQUhBO0FBSUEsb0JBSkE7QUFLQSxxREFMQTtB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Q0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUFnUyxDQUFnQix3VUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FwVDtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy8xMzIuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDx2YW4tbmF2LWJhclxyXG4gICAgICAgIGxlZnQtdGV4dD1cIuWPkeW4g+S7u+WKoVwiXHJcbiAgICAgICAgbGVmdC1hcnJvd1xyXG4gICAgICAgIEBjbGljay1sZWZ0PVwiJHJvdXRlci5nbygtMSlcIlxyXG4gICAgLz5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiYWRkLXdyYXBwZXJcIj5cclxuICAgICAgPHZhbi1maWVsZFxyXG4gICAgICAgICAgdi1tb2RlbD1cImFkZEZvcm0udGl0bGVcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgIGxhYmVsPVwi5Lu75Yqh5qCH6aKYXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi5Lu75Yqh5qCH6aKYXCJcclxuICAgICAgICAgIGlucHV0LWFsaWduPVwicmlnaHRcIlxyXG4gICAgICAvPlxyXG4gICAgICA8dmFuLWZpZWxkXHJcbiAgICAgICAgICB2LW1vZGVsPVwiYWRkRm9ybS50eXBlXCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBpcy1saW5rXHJcbiAgICAgICAgICByZWFkb25seVxyXG4gICAgICAgICAgbmFtZT1cInBpY2tlclwiXHJcbiAgICAgICAgICBsYWJlbD1cIuS7u+WKoeexu+Wei1wiXHJcbiAgICAgICAgICBpbnB1dC1hbGlnbj1cInJpZ2h0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi54K55Ye76YCJ5oup5Lu75Yqh57G75Z6LXCJcclxuICAgICAgICAgIEBjbGljaz1cInNob3dQaWNrZXJUeXBlID0gdHJ1ZVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDx2YW4tcG9wdXAgdi1tb2RlbD1cInNob3dQaWNrZXJUeXBlXCIgcG9zaXRpb249XCJib3R0b21cIj5cclxuICAgICAgICA8dmFuLXBpY2tlclxyXG4gICAgICAgICAgICBzaG93LXRvb2xiYXJcclxuICAgICAgICAgICAgOmNvbHVtbnM9XCJjb2x1bW5zVHlwZVwiXHJcbiAgICAgICAgICAgIHZhbHVlLWtleT1cIm5hbWVcIlxyXG4gICAgICAgICAgICBAY29uZmlybT1cIm9uQ29uZmlybVR5cGVcIlxyXG4gICAgICAgICAgICBAY2FuY2VsPVwic2hvd1BpY2tlclR5cGUgPSBmYWxzZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC92YW4tcG9wdXA+XHJcbiAgICAgIDx2YW4tZmllbGRcclxuICAgICAgICAgIHYtbW9kZWw9XCJhZGRGb3JtLmNvbnRlbnRcIlxyXG4gICAgICAgICAgdHlwZT1cInRleHRhcmVhXCJcclxuICAgICAgICAgIGxhYmVsPVwi5Lu75Yqh5YaF5a65XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi5Lu75Yqh5YaF5a65XCJcclxuICAgICAgICAgIGlucHV0LWFsaWduPVwicmlnaHRcIlxyXG4gICAgICA+XHJcbiAgICAgIDwvdmFuLWZpZWxkPlxyXG4gICAgICA8dmFuLWZpZWxkXHJcbiAgICAgICAgICB2LW1vZGVsPVwiYWRkRm9ybS5zaXRlX25hbWVcIlxyXG4gICAgICAgICAgaXMtbGlua1xyXG4gICAgICAgICAgcmVhZG9ubHlcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBuYW1lPVwicGlja2VyXCJcclxuICAgICAgICAgIGxhYmVsPVwi5aSE572u5a+56LGhXCJcclxuICAgICAgICAgIGlucHV0LWFsaWduPVwicmlnaHRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLngrnlh7vpgInmi6nlpITnva7lr7nosaFcIlxyXG4gICAgICAgICAgQGNsaWNrPVwic2hvd1BpY2tlckRpc3Bvc2UgPSB0cnVlXCJcclxuICAgICAgLz5cclxuICAgICAgPHZhbi1wb3B1cCB2LW1vZGVsPVwic2hvd1BpY2tlckRpc3Bvc2VcIiBwb3NpdGlvbj1cImJvdHRvbVwiPlxyXG4gICAgICAgIDx2YW4tcGlja2VyXHJcbiAgICAgICAgICAgIHNob3ctdG9vbGJhclxyXG4gICAgICAgICAgICA6Y29sdW1ucz1cImNvbHVtbnNEaXNwb3NlXCJcclxuICAgICAgICAgICAgdmFsdWUta2V5PVwid3J5bWNcIlxyXG4gICAgICAgICAgICBAY29uZmlybT1cIm9uQ29uZmlybURpc3Bvc2VcIlxyXG4gICAgICAgICAgICBAY2FuY2VsPVwic2hvd1BpY2tlckRpc3Bvc2UgPSBmYWxzZVwiXHJcbiAgICAgICAgLz5cclxuICAgICAgPC92YW4tcG9wdXA+XHJcbiAgICAgIDx2YW4tZmllbGRcclxuICAgICAgICAgIHYtbW9kZWw9XCJhZGRGb3JtLmFkZHJlc3NcIlxyXG4gICAgICAgICAgbGFiZWw9XCLor6bnu4blnLDlnYBcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCLor6bnu4blnLDlnYBcIlxyXG4gICAgICAgICAgaW5wdXQtYWxpZ249XCJyaWdodFwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDx2YW4tZmllbGRcclxuICAgICAgICAgIHJlYWRvbmx5XHJcbiAgICAgICAgICBjbGlja2FibGVcclxuICAgICAgICAgIG5hbWU9XCJjYWxlbmRhclwiXHJcbiAgICAgICAgICA6dmFsdWU9XCJhZGRGb3JtLmRlYWRsaW5lXCJcclxuICAgICAgICAgIGxhYmVsPVwi5oiq5q2i5pe26Ze0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi54K55Ye76YCJ5oup5oiq5q2i5pe26Ze0XCJcclxuICAgICAgICAgIGlucHV0LWFsaWduPVwicmlnaHRcIlxyXG4gICAgICAgICAgQGNsaWNrPVwic2hvd0RlYWRsaW5lID0gdHJ1ZVwiXHJcbiAgICAgIC8+XHJcbiAgICAgIDx2YW4tY2FsZW5kYXIgdi1tb2RlbD1cInNob3dEZWFkbGluZVwiIGNvbG9yPVwiIzE5ODlmYVwiIEBjb25maXJtPVwib25Db25maXJtRGVhZGxpbmVcIi8+XHJcbiAgICAgIDx2YW4tZmllbGRcclxuICAgICAgICAgIHYtbW9kZWw9XCJhZGRGb3JtLmhhbmRsZV91c2VyXCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBsYWJlbD1cIuWkhOeQhuS6ulwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIuivpue7huWcsOWdgFwiXHJcbiAgICAgICAgICBpbnB1dC1hbGlnbj1cInJpZ2h0XCJcclxuICAgICAgLz5cclxuICAgICAgPCEtLTx2YW4tZmllbGRcclxuICAgICAgICAgIHYtbW9kZWw9XCJhZGRGb3JtLmhhbmRsZV91c2VyXCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICBpcy1saW5rXHJcbiAgICAgICAgICByZWFkb25seVxyXG4gICAgICAgICAgbmFtZT1cInBpY2tlclwiXHJcbiAgICAgICAgICBsYWJlbD1cIuWkhOeQhuS6ulwiXHJcbiAgICAgICAgICBpbnB1dC1hbGlnbj1cInJpZ2h0XCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwi54K55Ye76YCJ5oup5aSE55CG5Lq6XCJcclxuICAgICAgICAgIEBjbGljaz1cInNob3dQaWNrZXJIYW5kbGVyID0gdHJ1ZVwiXHJcbiAgICAgIC8+LS0+XHJcbiAgICAgIDx2YW4tcG9wdXAgdi1tb2RlbD1cInNob3dQaWNrZXJIYW5kbGVyXCIgcG9zaXRpb249XCJib3R0b21cIj5cclxuICAgICAgICA8dmFuLXBpY2tlclxyXG4gICAgICAgICAgICBzaG93LXRvb2xiYXJcclxuICAgICAgICAgICAgOmNvbHVtbnM9XCJjb2x1bW5zSGFuZGxlclwiXHJcbiAgICAgICAgICAgIHZhbHVlLWtleT1cIndyeW1jXCJcclxuICAgICAgICAgICAgQGNvbmZpcm09XCJvbkNvbmZpcm1IYW5kbGVyXCJcclxuICAgICAgICAgICAgQGNhbmNlbD1cInNob3dQaWNrZXJIYW5kbGVyID0gZmFsc2VcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvdmFuLXBvcHVwPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtcIj5cclxuICAgICAgPHZhbi1idXR0b24gcm91bmQgdHlwZT1cImluZm9cIiA6bG9hZGluZz1cImFkZEJ0bkxvYWRpbmdcIiBsb2FkaW5nLXRleHQ9XCLliqDovb3kuK0uLi5cIiBzdHlsZT1cIndpZHRoOiA5MCVcIlxyXG4gICAgICAgICAgICAgICAgICBAY2xpY2s9XCJvbkFkZFRhc2tcIj7noa7lrppcclxuICAgICAgPC92YW4tYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQge1RvYXN0fSBmcm9tIFwidmFudFwiO1xyXG4gIGltcG9ydCB7Z2V0VGFza1R5cGVMaXN0LCBnZXRUYXNrRGlzcG9zZSwgcG9zdFRhc2tBZGR9IGZyb20gJ0AvYXBpL3Rhc2suanMnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwidGFza0FkZFwiLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBhZGRGb3JtOiB7XHJcbiAgICAgICAgICB0aXRsZTogJycsXHJcbiAgICAgICAgICBjb250ZW50OiAnJyxcclxuICAgICAgICAgIHR5cGU6ICcnLFxyXG4gICAgICAgICAgZGVhZGxpbmU6ICcnLFxyXG4gICAgICAgICAgaGFuZGxlX3VzZXI6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlck5hbWVcIiksXHJcbiAgICAgICAgICBoYW5kbGVfdXNlcl9pZDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIiksXHJcbiAgICAgICAgICBzaXRlX25hbWU6ICcnLFxyXG4gICAgICAgICAgc2l0ZV9pZDogJycsXHJcbiAgICAgICAgICBjcmVhdGVfdXNlcl9pZDogJzEnLFxyXG4gICAgICAgICAgY3JlYXRlX3VzZXI6ICflvKDkuIknXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzaG93UGlja2VyVHlwZTogZmFsc2UsXHJcbiAgICAgICAgc2hvd1BpY2tlckRpc3Bvc2U6IGZhbHNlLCAvL+WkhOe9ruWvueixoVxyXG4gICAgICAgIHNob3dQaWNrZXJIYW5kbGVyOiBmYWxzZSwgLy/lpITnkIbkurpcclxuICAgICAgICBzaG93RGVhZGxpbmU6IGZhbHNlLFxyXG4gICAgICAgIGNvbHVtbnNUeXBlOiBbXSxcclxuICAgICAgICBjb2x1bW5zRGlzcG9zZTogW10sXHJcbiAgICAgICAgY29sdW1uc0hhbmRsZXI6IFtdLFxyXG4gICAgICAgIGFkZEJ0bkxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgdGhpcy5xdWVyeVRhc2tUeXBlKClcclxuICAgICAgdGhpcy5xdWVyeVRhc2tEaXNwb3NlKClcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIC8v5p+l6K+i5Lu75Yqh57G75Z6L5LiL5ouJ5qGGXHJcbiAgICAgIHF1ZXJ5VGFza1R5cGUoKSB7XHJcbiAgICAgICAgZ2V0VGFza1R5cGVMaXN0KCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jb2x1bW5zVHlwZSA9IHJlcy5kYXRhO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIC8v5qC55o2u5b2T5YmN55So5oi355qE6KGM5pS/5Yy65YiS5p+l6K+i5aSE572u5a+56LGh5LiL5ouJ5qGGXHJcbiAgICAgIHF1ZXJ5VGFza0Rpc3Bvc2UoKSB7XHJcbiAgICAgICAgZ2V0VGFza0Rpc3Bvc2Uoe2RpdmlzaW9uX2NvZGU6ICcnfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgdGhpcy5jb2x1bW5zRGlzcG9zZSA9IHJlcy5kYXRhXHJcbiAgICAgICAgICB0aGlzLmNvbHVtbnNIYW5kbGVyID0gcmVzLmRhdGFcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBvbkFkZFRhc2soKSB7XHJcbiAgICAgICAgaWYodGhpcy5hZGRGb3JtLnRpdGxlPT09Jycpe1xyXG4gICAgICAgICAgVG9hc3QoJ+S7u+WKoeagh+mimOS4jeiDveS4uuepuicpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmFkZEZvcm0udHlwZT09PScnKXtcclxuICAgICAgICAgIFRvYXN0KCfor7fpgInmi6nku7vliqHnsbvlnosnKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5hZGRGb3JtLnNpdGVfbmFtZT09PScnKXtcclxuICAgICAgICAgIFRvYXN0KCfor7fpgInmi6nlpITnva7lr7nosaEnKTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYodGhpcy5hZGRGb3JtLmhhbmRsZV91c2VyPT09Jycpe1xyXG4gICAgICAgIC8vICAgVG9hc3QoJ+ivt+mAieaLqeWkhOeQhuS6uicpO1xyXG4gICAgICAgIC8vICAgcmV0dXJuO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICB0aGlzLmFkZEJ0bkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHBvc3RUYXNrQWRkKHRoaXMuYWRkRm9ybSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgdGhpcy5hZGRCdG5Mb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICBpZiAocmVzLmNvZGUgPT09ICcyMDAnKSB7XHJcbiAgICAgICAgICAgIFRvYXN0KCfku7vliqHlj5HluIPmiJDlip8nKTtcclxuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goXCIvVGFza1wiKVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgVG9hc3QoJ+Wksei0pScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIC8v5Lu75Yqh57G75Z6LcGlja2Vy56Gu6K6kXHJcbiAgICAgIG9uQ29uZmlybVR5cGUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNob3dQaWNrZXJUeXBlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5hZGRGb3JtLnR5cGUgPSB2YWx1ZS5uYW1lO1xyXG4gICAgICB9LFxyXG4gICAgICAvL+WkhOe9ruWvueixoXBpY2tlcuehruiupFxyXG4gICAgICBvbkNvbmZpcm1EaXNwb3NlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5zaG93UGlja2VyRGlzcG9zZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWRkRm9ybS5zaXRlX25hbWUgPSB2YWx1ZS53cnltYztcclxuICAgICAgICB0aGlzLmFkZEZvcm0uc2l0ZV9pZCA9IHZhbHVlLmlkO1xyXG4gICAgICAgIHRoaXMuYWRkRm9ybS5hZGRyZXNzID0gdmFsdWUuc3pkejtcclxuICAgICAgfSxcclxuICAgICAgLy/lpITnkIbkurpwaWNrZXLnoa7orqRcclxuICAgICAgb25Db25maXJtSGFuZGxlcih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuc2hvd1BpY2tlckhhbmRsZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmFkZEZvcm0uaGFuZGxlX3VzZXIgPSB2YWx1ZS53cnltYztcclxuICAgICAgICB0aGlzLmFkZEZvcm0uaGFuZGxlX3VzZXJfaWQgPSB2YWx1ZS5pZDtcclxuICAgICAgfSxcclxuICAgICAgb25Db25maXJtRGVhZGxpbmUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNob3dEZWFkbGluZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYWRkRm9ybS5kZWFkbGluZSA9IHRoaXMuZGF5anModmFsdWUpLmZvcm1hdChcIllZWVktTU0tRERcIilcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgLmFkZC13cmFwcGVyIHtcclxuICAgIG1hcmdpbjogOHB4IDAgMjJweDtcclxuICB9XHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJ2YW4tbmF2LWJhclwiLCB7XG4gICAgICAgIGF0dHJzOiB7IFwibGVmdC10ZXh0XCI6IFwi5Y+R5biD5Lu75YqhXCIsIFwibGVmdC1hcnJvd1wiOiBcIlwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgXCJjbGljay1sZWZ0XCI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0uJHJvdXRlci5nbygtMSlcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJhZGQtd3JhcHBlclwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInZhbi1maWVsZFwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwi5Lu75Yqh5qCH6aKYXCIsXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIuS7u+WKoeagh+mimFwiLFxuICAgICAgICAgICAgICBcImlucHV0LWFsaWduXCI6IFwicmlnaHRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmFkZEZvcm0udGl0bGUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmFkZEZvcm0sIFwidGl0bGVcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImFkZEZvcm0udGl0bGVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJ2YW4tZmllbGRcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgcmVxdWlyZWQ6IFwiXCIsXG4gICAgICAgICAgICAgIFwiaXMtbGlua1wiOiBcIlwiLFxuICAgICAgICAgICAgICByZWFkb25seTogXCJcIixcbiAgICAgICAgICAgICAgbmFtZTogXCJwaWNrZXJcIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwi5Lu75Yqh57G75Z6LXCIsXG4gICAgICAgICAgICAgIFwiaW5wdXQtYWxpZ25cIjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCLngrnlh7vpgInmi6nku7vliqHnsbvlnotcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5zaG93UGlja2VyVHlwZSA9IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmFkZEZvcm0udHlwZSxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uYWRkRm9ybSwgXCJ0eXBlXCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJhZGRGb3JtLnR5cGVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInZhbi1wb3B1cFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczogeyBwb3NpdGlvbjogXCJib3R0b21cIiB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hvd1BpY2tlclR5cGUsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5zaG93UGlja2VyVHlwZSA9ICQkdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaG93UGlja2VyVHlwZVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2YW4tcGlja2VyXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgXCJzaG93LXRvb2xiYXJcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IF92bS5jb2x1bW5zVHlwZSxcbiAgICAgICAgICAgICAgICAgIFwidmFsdWUta2V5XCI6IFwibmFtZVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNvbmZpcm06IF92bS5vbkNvbmZpcm1UeXBlLFxuICAgICAgICAgICAgICAgICAgY2FuY2VsOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5zaG93UGlja2VyVHlwZSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwidmFuLWZpZWxkXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHR5cGU6IFwidGV4dGFyZWFcIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwi5Lu75Yqh5YaF5a65XCIsXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIuS7u+WKoeWGheWuuVwiLFxuICAgICAgICAgICAgICBcImlucHV0LWFsaWduXCI6IFwicmlnaHRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmFkZEZvcm0uY29udGVudCxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uYWRkRm9ybSwgXCJjb250ZW50XCIsICQkdilcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJhZGRGb3JtLmNvbnRlbnRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJ2YW4tZmllbGRcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgXCJpcy1saW5rXCI6IFwiXCIsXG4gICAgICAgICAgICAgIHJlYWRvbmx5OiBcIlwiLFxuICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgbmFtZTogXCJwaWNrZXJcIixcbiAgICAgICAgICAgICAgbGFiZWw6IFwi5aSE572u5a+56LGhXCIsXG4gICAgICAgICAgICAgIFwiaW5wdXQtYWxpZ25cIjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCLngrnlh7vpgInmi6nlpITnva7lr7nosaFcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5zaG93UGlja2VyRGlzcG9zZSA9IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmFkZEZvcm0uc2l0ZV9uYW1lLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5hZGRGb3JtLCBcInNpdGVfbmFtZVwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYWRkRm9ybS5zaXRlX25hbWVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInZhbi1wb3B1cFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBhdHRyczogeyBwb3NpdGlvbjogXCJib3R0b21cIiB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hvd1BpY2tlckRpc3Bvc2UsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5zaG93UGlja2VyRGlzcG9zZSA9ICQkdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaG93UGlja2VyRGlzcG9zZVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2YW4tcGlja2VyXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgXCJzaG93LXRvb2xiYXJcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IF92bS5jb2x1bW5zRGlzcG9zZSxcbiAgICAgICAgICAgICAgICAgIFwidmFsdWUta2V5XCI6IFwid3J5bWNcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjb25maXJtOiBfdm0ub25Db25maXJtRGlzcG9zZSxcbiAgICAgICAgICAgICAgICAgIGNhbmNlbDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0uc2hvd1BpY2tlckRpc3Bvc2UgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcInZhbi1maWVsZFwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBsYWJlbDogXCLor6bnu4blnLDlnYBcIixcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwi6K+m57uG5Zyw5Z2AXCIsXG4gICAgICAgICAgICAgIFwiaW5wdXQtYWxpZ25cIjogXCJyaWdodFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uYWRkRm9ybS5hZGRyZXNzLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5hZGRGb3JtLCBcImFkZHJlc3NcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImFkZEZvcm0uYWRkcmVzc1wiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcInZhbi1maWVsZFwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICByZWFkb25seTogXCJcIixcbiAgICAgICAgICAgICAgY2xpY2thYmxlOiBcIlwiLFxuICAgICAgICAgICAgICBuYW1lOiBcImNhbGVuZGFyXCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uYWRkRm9ybS5kZWFkbGluZSxcbiAgICAgICAgICAgICAgbGFiZWw6IFwi5oiq5q2i5pe26Ze0XCIsXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIueCueWHu+mAieaLqeaIquatouaXtumXtFwiLFxuICAgICAgICAgICAgICBcImlucHV0LWFsaWduXCI6IFwicmlnaHRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5zaG93RGVhZGxpbmUgPSB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwidmFuLWNhbGVuZGFyXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IGNvbG9yOiBcIiMxOTg5ZmFcIiB9LFxuICAgICAgICAgICAgb246IHsgY29uZmlybTogX3ZtLm9uQ29uZmlybURlYWRsaW5lIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNob3dEZWFkbGluZSxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2hvd0RlYWRsaW5lID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2hvd0RlYWRsaW5lXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF9jKFwidmFuLWZpZWxkXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHJlcXVpcmVkOiBcIlwiLFxuICAgICAgICAgICAgICBsYWJlbDogXCLlpITnkIbkurpcIixcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwi6K+m57uG5Zyw5Z2AXCIsXG4gICAgICAgICAgICAgIFwiaW5wdXQtYWxpZ25cIjogXCJyaWdodFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uYWRkRm9ybS5oYW5kbGVfdXNlcixcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uYWRkRm9ybSwgXCJoYW5kbGVfdXNlclwiLCAkJHYpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYWRkRm9ybS5oYW5kbGVfdXNlclwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwidmFuLXBvcHVwXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHBvc2l0aW9uOiBcImJvdHRvbVwiIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zaG93UGlja2VySGFuZGxlcixcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLnNob3dQaWNrZXJIYW5kbGVyID0gJCR2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNob3dQaWNrZXJIYW5kbGVyXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInZhbi1waWNrZXJcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBcInNob3ctdG9vbGJhclwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgY29sdW1uczogX3ZtLmNvbHVtbnNIYW5kbGVyLFxuICAgICAgICAgICAgICAgICAgXCJ2YWx1ZS1rZXlcIjogXCJ3cnltY1wiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNvbmZpcm06IF92bS5vbkNvbmZpcm1IYW5kbGVyLFxuICAgICAgICAgICAgICAgICAgY2FuY2VsOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5zaG93UGlja2VySGFuZGxlciA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljU3R5bGU6IHsgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInZhbi1idXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiOTAlXCIgfSxcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICByb3VuZDogXCJcIixcbiAgICAgICAgICAgICAgICB0eXBlOiBcImluZm9cIixcbiAgICAgICAgICAgICAgICBsb2FkaW5nOiBfdm0uYWRkQnRuTG9hZGluZyxcbiAgICAgICAgICAgICAgICBcImxvYWRpbmctdGV4dFwiOiBcIuWKoOi9veS4rS4uLlwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9uQWRkVGFzayB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCLnoa7lrpogXCIpXVxuICAgICAgICAgICksXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmFkZC13cmFwcGVyW2RhdGEtdi0wOTM5MWIyOF0ge1xcbiAgbWFyZ2luOiA4cHggMCAyMnB4O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Rhc2tBZGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDkzOTFiMjgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIzNzc4YjFmZlwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Rhc2tBZGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDkzOTFiMjgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YXNrQWRkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA5MzkxYjI4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xyXG5cclxuLyoqXHJcbiAqIOS7u+WKoeWIl+ihqFxyXG4gKiBAcGFyYW0gbGltaXQg5p2h5pWwXHJcbiAqIEBwYXJhbSBwYWdlIOW9k+WJjemhtVxyXG4gKiBAcGFyYW0gbmFtZSDmqKHns4rmkJzntKJcclxuICogQHBhcmFtIHN0YXR1cyDku7vliqHnirbmgIFcclxuICogQHBhcmFtIHR5cGUg5Lu75Yqh57G75Z6LXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXNrTGlzdCh7bGltaXQsIHBhZ2UsIG5hbWUsIHN0YXR1cywgdHlwZX0pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBwL3Rhc2svdGFza19pbmZvX2xpc3QnLFxyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBsaW1pdCxcclxuICAgICAgcGFnZSxcclxuICAgICAgbmFtZSxcclxuICAgICAgc3RhdHVzLFxyXG4gICAgICB0eXBlXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOS7u+WKoeexu+Wei1xyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFza1R5cGVMaXN0KCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvdGFzay90YXNrX3R5cGVfbGlzdCcsXHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgcGFyYW1zOiB7fVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlj5HluIPku7vliqFcclxuICogQHBhcmFtIGRhdGEg5Lu75Yqh5bGe5oCnXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3N0VGFza0FkZChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC90YXNrL2luc2VydF90YXNrX2luZm8nLFxyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBkYXRhOiBkYXRhXHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWkhOe9ruWvueixoeS4i+aLiVxyXG4gKiBAcGFyYW0gZGl2aXNpb25fY29kZSDlvZPliY3nmbvlvZXnlKjmiLfnmoTooYzmlL/ljLrliJJcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRhc2tEaXNwb3NlKCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvdGFzay9zaXRlX2xpc3QnLFxyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBkaXZpc2lvbl9jb2RlOiAnNTMwMTE1J1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDku7vliqHor6bmg4VcclxuICogQHBhcmFtIGlkIOS7u+WKoWlkXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXNrRGV0YWlsKHtpZH0pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBwL3Rhc2svZGV0YWlsJyxcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICog5Y+N6aaIXHJcbiAqIEBwYXJhbSBkYXRhIOWPjemmiOWxnuaAp1xyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcG9zdFRhc2tGZWVkYmFjayhkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC90YXNrL2ZlZWRiYWNrJyxcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgZGF0YTogZGF0YVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlrqHmoLhcclxuICogQHBhcmFtIGRhdGEg5a6h5qC45bGe5oCnXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3N0VGFza0NoZWNrKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBwL3Rhc2svZXhhbWluZScsXHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGRhdGE6IGRhdGFcclxuICB9KVxyXG59XHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vdGFza0FkZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDkzOTFiMjgmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vdGFza0FkZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3Rhc2tBZGQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3Rhc2tBZGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDkzOTFiMjgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwOTM5MWIyOFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwOTM5MWIyOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwOTM5MWIyOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwOTM5MWIyOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vdGFza0FkZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDkzOTFiMjgmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDkzOTFiMjgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy90YXNrL3Rhc2tBZGQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YXNrQWRkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YXNrQWRkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Rhc2tBZGQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDkzOTFiMjgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YXNrQWRkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wOTM5MWIyOCZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=