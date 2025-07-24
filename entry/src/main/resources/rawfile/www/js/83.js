(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[83],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/task/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/task/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_task_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/task.js */ "./src/api/task.js");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {},
  data: function data() {
    return {
      searchKeyword: '',
      taskType: '',
      taskStatus: '',
      taskTypeOption: [{
        text: '请选择任务类型',
        value: ''
      }],
      taskStatusOption: [{
        text: '请选择任务状态',
        value: ''
      }, {
        text: '待反馈',
        value: '待反馈'
      }, {
        text: '待审核',
        value: '待审核'
      }, {
        text: '已办结',
        value: '已办结'
      }],
      list: []
    };
  },
  mounted: function mounted() {
    this.queryList();
    this.queryTaskType();
  },
  methods: {
    queryList: function queryList() {
      var _this = this;

      Object(_api_task_js__WEBPACK_IMPORTED_MODULE_3__["getTaskList"])({
        page: 1,
        limit: 100,
        login_user: 1,
        name: this.searchKeyword,
        type: this.taskType,
        status: this.taskStatus
      }).then(function (res) {
        _this.list = res.data.list;
      });
    },
    //查询任务类型下拉框
    queryTaskType: function queryTaskType() {
      var _this2 = this;

      Object(_api_task_js__WEBPACK_IMPORTED_MODULE_3__["getTaskTypeList"])().then(function (res) {
        res.data.forEach(function (item) {
          _this2.taskTypeOption.push({
            text: item.name,
            value: item.name
          });
        });
      });
    },
    onToDetail: function onToDetail(task) {
      this.$router.push({
        path: "/Task/detail",
        query: {
          id: task.id
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/task/index.vue?vue&type=template&id=dfd5253c&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/task/index.vue?vue&type=template&id=dfd5253c&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c("div", { staticClass: "home-header-wrapper fs" }, [
      _vm._m(0),
      _c(
        "div",
        {
          staticClass: "add-btn",
          on: {
            click: function ($event) {
              return _vm.$router.push("/Task/add")
            },
          },
        },
        [_vm._v(" 发布新任务 ")]
      ),
    ]),
    _c(
      "div",
      { staticStyle: { "background-color": "#fff" } },
      [
        _c("van-search", {
          staticStyle: { margin: "0 3px 3px" },
          attrs: { placeholder: "请输入标签搜索专题" },
          on: { search: _vm.queryList },
          model: {
            value: _vm.searchKeyword,
            callback: function ($$v) {
              _vm.searchKeyword = $$v
            },
            expression: "searchKeyword",
          },
        }),
        _c(
          "van-dropdown-menu",
          { attrs: { "active-color": "#1989fa" } },
          [
            _c("van-dropdown-item", {
              attrs: { options: _vm.taskTypeOption },
              on: { change: _vm.queryList },
              model: {
                value: _vm.taskType,
                callback: function ($$v) {
                  _vm.taskType = $$v
                },
                expression: "taskType",
              },
            }),
            _c("van-dropdown-item", {
              attrs: { options: _vm.taskStatusOption },
              on: { change: _vm.queryList },
              model: {
                value: _vm.taskStatus,
                callback: function ($$v) {
                  _vm.taskStatus = $$v
                },
                expression: "taskStatus",
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
      { staticClass: "task-wrapper" },
      _vm._l(_vm.list, function (item) {
        return _c(
          "div",
          {
            staticClass: "task-box",
            on: {
              click: function ($event) {
                return _vm.onToDetail(item)
              },
            },
          },
          [
            _c("div", { staticClass: "task-box-title" }, [
              _vm._v(" " + _vm._s(item.type) + "：" + _vm._s(item.title) + " "),
            ]),
            _c("div", { staticClass: "task-box-des" }, [
              _c("span", { staticClass: "label" }, [_vm._v("发布时间：")]),
              _vm._v(_vm._s(item.create_time) + " "),
            ]),
            _c("div", { staticClass: "task-box-des" }, [
              _c("span", { staticClass: "label" }, [_vm._v("截止时间：")]),
              _vm._v(_vm._s(item.deadline) + " "),
            ]),
            _c("div", { staticClass: "task-box-des" }, [
              _c("span", { staticClass: "label" }, [_vm._v("处理人：")]),
              _vm._v(_vm._s(item.handle_user) + " "),
            ]),
            _c("div", { staticClass: "task-btn-wrapper" }, [
              _c(
                "span",
                {
                  class:
                    item.status === "待反馈"
                      ? "feedback"
                      : item.status === "待审核"
                      ? "check"
                      : "end",
                },
                [_vm._v(_vm._s(item.status))]
              ),
            ]),
          ]
        )
      }),
      0
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "fs" }, [
      _c("img", {
        staticStyle: { "margin-right": "20px" },
        attrs: { src: __webpack_require__(/*! ../../assets/logo.png */ "./src/assets/logo.png") },
      }),
      _vm._v(" 任务调度 "),
    ])
  },
]
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/task/index.vue?vue&type=style&index=0&id=dfd5253c&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/task/index.vue?vue&type=style&index=0&id=dfd5253c&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @/assets/下拉.png */ "./src/assets/下拉.png");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! @/assets/bj.png */ "./src/assets/bj.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n[data-v-dfd5253c] .van-search__content {\n  border: 1px solid #efefef;\n  background-color: #fff;\n}\n[data-v-dfd5253c] .van-dropdown-menu__title {\n  font-size: 13px;\n  color: #666;\n}\n[data-v-dfd5253c] .van-dropdown-menu__title::after {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n  background-position: center center;\n  background-size: 100% 100%;\n  width: 24px;\n  height: 24px;\n  right: -26px;\n  top: 30%;\n  border: 0;\n  transform: none;\n}\n[data-v-dfd5253c] .van-dropdown-menu__bar {\n  padding: 0 15px 12px;\n  height: 32px;\n  box-shadow: none;\n}\n[data-v-dfd5253c] .van-dropdown-menu__item {\n  border: 1px solid #efefef;\n  margin-right: 14px;\n}\n[data-v-dfd5253c] .van-dropdown-menu__item:last-child {\n  margin-right: 0;\n}\n.fs[data-v-dfd5253c] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.add-btn[data-v-dfd5253c] {\n  padding: 6px 9px;\n  background-color: #2784f4;\n  font-size: 14px;\n  color: #fff;\n  font-weight: normal;\n}\n.home-header-wrapper[data-v-dfd5253c] {\n  padding: 7px 15px;\n  background-color: #fff;\n  color: #333333;\n  font-weight: bold;\n}\n.home-header-wrapper img[data-v-dfd5253c] {\n  width: 24px;\n  height: 24px;\n}\n.task-wrapper[data-v-dfd5253c] {\n  margin-top: 8px;\n  padding: 12px 15px 80px;\n  height: calc(100vh - 250px);\n  overflow: auto;\n  background-color: #fff;\n}\n.task-wrapper .task-box[data-v-dfd5253c] {\n  position: relative;\n  padding: 22px 23px 15px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat;\n  background-size: 100% 100%;\n}\n.task-wrapper .task-box .task-box-title[data-v-dfd5253c] {\n  padding-bottom: 10px;\n  color: #333;\n  font-size: 14px;\n  font-weight: bold;\n}\n.task-wrapper .task-box .task-box-des[data-v-dfd5253c] {\n  padding-bottom: 4px;\n  color: #999;\n  font-size: 13px;\n  line-height: 18px;\n}\n.task-wrapper .task-box .task-box-des .label[data-v-dfd5253c] {\n  color: #333;\n}\n.task-wrapper .task-box .task-btn-wrapper[data-v-dfd5253c] {\n  position: absolute;\n  top: 70px;\n  right: 25px;\n  color: #fff;\n  font-size: 13px;\n}\n.task-wrapper .task-box .feedback[data-v-dfd5253c] {\n  padding: 5px 12px;\n  border-radius: 2px;\n  background-color: #f23333;\n}\n.task-wrapper .task-box .check[data-v-dfd5253c] {\n  padding: 5px 12px;\n  border-radius: 2px;\n  background-color: #ffbf39;\n}\n.task-wrapper .task-box .end[data-v-dfd5253c] {\n  padding: 5px 12px;\n  border-radius: 2px;\n  background-color: #08d236;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/task/index.vue?vue&type=style&index=0&id=dfd5253c&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/task/index.vue?vue&type=style&index=0&id=dfd5253c&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=dfd5253c&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/task/index.vue?vue&type=style&index=0&id=dfd5253c&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5783bac2", content, false, {"sourceMap":false,"shadowMode":false});
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

/***/ "./src/assets/bj.png":
/*!***************************!*\
  !*** ./src/assets/bj.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bj.png";

/***/ }),

/***/ "./src/assets/logo.png":
/*!*****************************!*\
  !*** ./src/assets/logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.png";

/***/ }),

/***/ "./src/assets/下拉.png":
/*!***************************!*\
  !*** ./src/assets/下拉.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAMKADAAQAAAABAAAAMAAAAADbN2wMAAACCElEQVRoBe2UPUgjYRCGZ9YLhz+ghdUVCoJoIXcWamN1lWg0WHiI6K6ehTZZPRHBMrUi/qyNCiqJcqAWEkyhhTZWuSsMiIWFpZVFBFEkJnMz4pYmuO6BxQyE3Zn93tl5n3zfAmgoASWgBJSAElACSkAJKAEloASUgBLwRAA9qVgUNMM7CPgVEKyDqJP00qfTsluAIEoIqUTU6fXSw/AietFUEVAdERx3WeH2t/YRjWilBxBVv1XvrvdsoOQTdjH9vwBUmiOMB62xQbdpoausFY1opcdzr0KiV54XvVIvWL44S943tnb8fso8NPEgtfzrrm9sebxMJU/ziZn8NBEt8xoDEY9Kyio7dtdm0vk0+Z55PgNu05GRlcD1w/kGb4X+5xqC01xT+SsSieTcNXLl3PhzdbPAe96WnM/P9pfihp+rq6MZyb3Guw3Ii5kohobGZnM5mnwZZLemAk3HcR4lt23781WaYnz7Q3LDwLn45tIU/wMk+XvCFwPuAEHTZgM0yzkDxpOKcuiWZ+lb2GeX3/mWB8apRMyZk7of4asBGShkhQeyAOs8aoBdpKTG2+sbW8rwgRuOR5e3pOZX+G5ABgua420I2T3GXSY5v+SOoKgnEVs8lNzP+C8GZMCQOdGUxcw67/JiAwJ98dg8f3I1lIASUAJKQAkoASWgBJSAElACSkAJfBgC/wBJXpKohVBQgwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/views/task/index.vue":
/*!**********************************!*\
  !*** ./src/views/task/index.vue ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_dfd5253c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=dfd5253c&scoped=true& */ "./src/views/task/index.vue?vue&type=template&id=dfd5253c&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/task/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_dfd5253c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=dfd5253c&lang=scss&scoped=true& */ "./src/views/task/index.vue?vue&type=style&index=0&id=dfd5253c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_dfd5253c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_dfd5253c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "dfd5253c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/task/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/task/index.vue?vue&type=script&lang=js&":
/*!***********************************************************!*\
  !*** ./src/views/task/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/task/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/task/index.vue?vue&type=style&index=0&id=dfd5253c&lang=scss&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./src/views/task/index.vue?vue&type=style&index=0&id=dfd5253c&lang=scss&scoped=true& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_dfd5253c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=dfd5253c&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/task/index.vue?vue&type=style&index=0&id=dfd5253c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_dfd5253c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_dfd5253c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_dfd5253c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_dfd5253c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/task/index.vue?vue&type=template&id=dfd5253c&scoped=true&":
/*!*****************************************************************************!*\
  !*** ./src/views/task/index.vue?vue&type=template&id=dfd5253c&scoped=true& ***!
  \*****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_dfd5253c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=dfd5253c&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/task/index.vue?vue&type=template&id=dfd5253c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_dfd5253c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_dfd5253c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3Rhc2svaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YXNrL2luZGV4LnZ1ZT80M2Y0Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3Rhc2svaW5kZXgudnVlP2MzNTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3Rhc2svaW5kZXgudnVlPzUyNjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS90YXNrLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvYmoucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbG9nby5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy/kuIvmi4kucG5nIiwid2VicGFjazovLy8uL3NyYy92aWV3cy90YXNrL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFzay9pbmRleC52dWU/NzkwMCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFzay9pbmRleC52dWU/ODI4MSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvdGFzay9pbmRleC52dWU/NjE2MyJdLCJuYW1lcyI6WyJnZXRUYXNrTGlzdCIsImxpbWl0IiwicGFnZSIsIm5hbWUiLCJzdGF0dXMiLCJ0eXBlIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInBhcmFtcyIsImdldFRhc2tUeXBlTGlzdCIsInBvc3RUYXNrQWRkIiwiZGF0YSIsImdldFRhc2tEaXNwb3NlIiwiZGl2aXNpb25fY29kZSIsImdldFRhc2tEZXRhaWwiLCJpZCIsInBvc3RUYXNrRmVlZGJhY2siLCJwb3N0VGFza0NoZWNrIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7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O0FBQ0E7O0FBQ08sU0FBU00sYUFBVCxDQUF1Qk4sSUFBdkIsRUFBNkI7QUFDbEMsU0FBT04sd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUUsbUJBRFE7QUFFYkMsVUFBTSxFQUFFLE1BRks7QUFHYkksUUFBSSxFQUFFQTtBQUhPLEdBQUQsQ0FBZDtBQUtELEM7Ozs7Ozs7Ozs7O0FDakdELGlCQUFpQixxQkFBdUIsZ0I7Ozs7Ozs7Ozs7O0FDQXhDLGlCQUFpQixxQkFBdUIsa0I7Ozs7Ozs7Ozs7O0FDQXhDLGlDQUFpQyx3NEI7Ozs7Ozs7Ozs7OztBQ0FqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdHO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUcxRjtBQUM2RjtBQUM3RixnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsNEZBQU07QUFDUixFQUFFLHFHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUE4UixDQUFnQixzVUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FsVDtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy84My5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImhvbWUtaGVhZGVyLXdyYXBwZXIgZnNcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZzXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCIuLi8uLi9hc3NldHMvbG9nby5wbmdcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDogMjBweFwiLz5cclxuICAgICAgICDku7vliqHosIPluqZcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhZGQtYnRuXCIgQGNsaWNrPVwiJHJvdXRlci5wdXNoKCcvVGFzay9hZGQnKVwiPlxyXG4gICAgICAgIOWPkeW4g+aWsOS7u+WKoVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBzdHlsZT1cImJhY2tncm91bmQtY29sb3I6ICNmZmZcIj5cclxuICAgICAgPHZhbi1zZWFyY2ggc3R5bGU9XCJtYXJnaW46IDAgM3B4IDNweFwiIHYtbW9kZWw9XCJzZWFyY2hLZXl3b3JkXCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXmoIfnrb7mkJzntKLkuJPpophcIiBAc2VhcmNoPVwicXVlcnlMaXN0XCIvPlxyXG4gICAgICA8dmFuLWRyb3Bkb3duLW1lbnUgYWN0aXZlLWNvbG9yPVwiIzE5ODlmYVwiPlxyXG4gICAgICAgIDx2YW4tZHJvcGRvd24taXRlbSB2LW1vZGVsPVwidGFza1R5cGVcIiA6b3B0aW9ucz1cInRhc2tUeXBlT3B0aW9uXCIgQGNoYW5nZT1cInF1ZXJ5TGlzdFwiLz5cclxuICAgICAgICA8dmFuLWRyb3Bkb3duLWl0ZW0gdi1tb2RlbD1cInRhc2tTdGF0dXNcIiA6b3B0aW9ucz1cInRhc2tTdGF0dXNPcHRpb25cIiAgQGNoYW5nZT1cInF1ZXJ5TGlzdFwiLz5cclxuICAgICAgPC92YW4tZHJvcGRvd24tbWVudT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInRhc2std3JhcHBlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGFzay1ib3hcIiB2LWZvcj1cIml0ZW0gaW4gbGlzdFwiIEBjbGljaz1cIm9uVG9EZXRhaWwoaXRlbSlcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1ib3gtdGl0bGVcIj5cclxuICAgICAgICAgIHt7aXRlbS50eXBlfX3vvJp7e2l0ZW0udGl0bGV9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWJveC1kZXNcIj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj7lj5HluIPml7bpl7TvvJo8L3NwYW4+e3tpdGVtLmNyZWF0ZV90aW1lfX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1ib3gtZGVzXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+5oiq5q2i5pe26Ze077yaPC9zcGFuPnt7aXRlbS5kZWFkbGluZX19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stYm94LWRlc1wiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPuWkhOeQhuS6uu+8mjwvc3Bhbj57e2l0ZW0uaGFuZGxlX3VzZXJ9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWJ0bi13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8c3BhbiA6Y2xhc3M9XCJpdGVtLnN0YXR1cz09PSflvoXlj43ppognPydmZWVkYmFjayc6aXRlbS5zdGF0dXM9PT0n5b6F5a6h5qC4Jz8nY2hlY2snOidlbmQnXCI+e3tpdGVtLnN0YXR1c319PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQge2dldFRhc2tMaXN0LCBnZXRUYXNrVHlwZUxpc3R9IGZyb20gJ0AvYXBpL3Rhc2suanMnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiaW5kZXhcIixcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHNlYXJjaEtleXdvcmQ6ICcnLFxyXG4gICAgICAgIHRhc2tUeXBlOiAnJyxcclxuICAgICAgICB0YXNrU3RhdHVzOiAnJyxcclxuICAgICAgICB0YXNrVHlwZU9wdGlvbjogW1xyXG4gICAgICAgICAge3RleHQ6ICfor7fpgInmi6nku7vliqHnsbvlnosnLCB2YWx1ZTogJyd9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgdGFza1N0YXR1c09wdGlvbjogW1xyXG4gICAgICAgICAge3RleHQ6ICfor7fpgInmi6nku7vliqHnirbmgIEnLCB2YWx1ZTogJyd9LFxyXG4gICAgICAgICAge3RleHQ6ICflvoXlj43ppognLCB2YWx1ZTogJ+W+heWPjemmiCd9LFxyXG4gICAgICAgICAge3RleHQ6ICflvoXlrqHmoLgnLCB2YWx1ZTogJ+W+heWuoeaguCd9LFxyXG4gICAgICAgICAge3RleHQ6ICflt7Llip7nu5MnLCB2YWx1ZTogJ+W3suWKnue7kyd9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbGlzdDogW11cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgIHRoaXMucXVlcnlMaXN0KClcclxuICAgICAgdGhpcy5xdWVyeVRhc2tUeXBlKClcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIHF1ZXJ5TGlzdCgpIHtcclxuICAgICAgICBnZXRUYXNrTGlzdCh7XHJcbiAgICAgICAgICBwYWdlOiAxLFxyXG4gICAgICAgICAgbGltaXQ6IDEwMCxcclxuICAgICAgICAgIGxvZ2luX3VzZXI6IDEsXHJcbiAgICAgICAgICBuYW1lOiB0aGlzLnNlYXJjaEtleXdvcmQsXHJcbiAgICAgICAgICB0eXBlOiB0aGlzLnRhc2tUeXBlLFxyXG4gICAgICAgICAgc3RhdHVzOiB0aGlzLnRhc2tTdGF0dXMsXHJcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgdGhpcy5saXN0ID0gcmVzLmRhdGEubGlzdFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIC8v5p+l6K+i5Lu75Yqh57G75Z6L5LiL5ouJ5qGGXHJcbiAgICAgIHF1ZXJ5VGFza1R5cGUoKSB7XHJcbiAgICAgICAgZ2V0VGFza1R5cGVMaXN0KCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgcmVzLmRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgICAgdGhpcy50YXNrVHlwZU9wdGlvbi5wdXNoKHt0ZXh0OiBpdGVtLm5hbWUsIHZhbHVlOiBpdGVtLm5hbWV9KVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgb25Ub0RldGFpbCh0YXNrKSB7XHJcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgcGF0aDogXCIvVGFzay9kZXRhaWxcIixcclxuICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgIGlkOiB0YXNrLmlkXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcblxyXG4gIDo6di1kZWVwIC52YW4tc2VhcmNoX19jb250ZW50IHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNlZmVmZWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgOjp2LWRlZXAgLnZhbi1kcm9wZG93bi1tZW51X190aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICBjb2xvcjogIzY2NjtcclxuICB9XHJcblxyXG4gIDo6di1kZWVwIC52YW4tZHJvcGRvd24tbWVudV9fdGl0bGU6OmFmdGVyIHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIn5AL2Fzc2V0cy/kuIvmi4kucG5nXCIpIG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgaGVpZ2h0OiAyNHB4O1xyXG4gICAgcmlnaHQ6IC0yNnB4O1xyXG4gICAgdG9wOiAzMCU7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgfVxyXG5cclxuICA6OnYtZGVlcCAudmFuLWRyb3Bkb3duLW1lbnVfX2JhciB7XHJcbiAgICBwYWRkaW5nOiAwIDE1cHggMTJweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgfVxyXG5cclxuICA6OnYtZGVlcCAudmFuLWRyb3Bkb3duLW1lbnVfX2l0ZW0ge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2VmZWZlZjtcclxuICAgIG1hcmdpbi1yaWdodDogMTRweDtcclxuXHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuZnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuYWRkLWJ0biB7XHJcbiAgICBwYWRkaW5nOiA2cHggOXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI3ODRmNDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICB9XHJcblxyXG4gIC5ob21lLWhlYWRlci13cmFwcGVyIHtcclxuICAgIHBhZGRpbmc6IDdweCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgIGhlaWdodDogMjRweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50YXNrLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgcGFkZGluZzogMTJweCAxNXB4IDgwcHg7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNTBweCk7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblxyXG4gICAgLnRhc2stYm94IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBwYWRkaW5nOiAyMnB4IDIzcHggMTVweDtcclxuICAgICAgYmFja2dyb3VuZDogdXJsKFwifkAvYXNzZXRzL2JqLnBuZ1wiKSBuby1yZXBlYXQ7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG5cclxuICAgICAgLnRhc2stYm94LXRpdGxlIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgICAgICBjb2xvcjogIzMzMztcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50YXNrLWJveC1kZXMge1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0cHg7XHJcbiAgICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG5cclxuICAgICAgICAubGFiZWwge1xyXG4gICAgICAgICAgY29sb3I6ICMzMzM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAudGFzay1idG4td3JhcHBlciB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogNzBweDtcclxuICAgICAgICByaWdodDogMjVweDtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5mZWVkYmFjayB7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDEycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmMjMzMzM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jaGVjayB7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDEycHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmJmMzk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5lbmQge1xyXG4gICAgICAgIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDhkMjM2O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3N0eWxlPlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJob21lLWhlYWRlci13cmFwcGVyIGZzXCIgfSwgW1xuICAgICAgX3ZtLl9tKDApLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJhZGQtYnRuXCIsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uJHJvdXRlci5wdXNoKFwiL1Rhc2svYWRkXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoXCIg5Y+R5biD5paw5Lu75YqhIFwiKV1cbiAgICAgICksXG4gICAgXSksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNTdHlsZTogeyBcImJhY2tncm91bmQtY29sb3JcIjogXCIjZmZmXCIgfSB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInZhbi1zZWFyY2hcIiwge1xuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCIwIDNweCAzcHhcIiB9LFxuICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIuivt+i+k+WFpeagh+etvuaQnOe0ouS4k+mimFwiIH0sXG4gICAgICAgICAgb246IHsgc2VhcmNoOiBfdm0ucXVlcnlMaXN0IH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoS2V5d29yZCxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5zZWFyY2hLZXl3b3JkID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2hLZXl3b3JkXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidmFuLWRyb3Bkb3duLW1lbnVcIixcbiAgICAgICAgICB7IGF0dHJzOiB7IFwiYWN0aXZlLWNvbG9yXCI6IFwiIzE5ODlmYVwiIH0gfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInZhbi1kcm9wZG93bi1pdGVtXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgb3B0aW9uczogX3ZtLnRhc2tUeXBlT3B0aW9uIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLnF1ZXJ5TGlzdCB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udGFza1R5cGUsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS50YXNrVHlwZSA9ICQkdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0YXNrVHlwZVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfYyhcInZhbi1kcm9wZG93bi1pdGVtXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgb3B0aW9uczogX3ZtLnRhc2tTdGF0dXNPcHRpb24gfSxcbiAgICAgICAgICAgICAgb246IHsgY2hhbmdlOiBfdm0ucXVlcnlMaXN0IH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS50YXNrU3RhdHVzLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0udGFza1N0YXR1cyA9ICQkdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0YXNrU3RhdHVzXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInRhc2std3JhcHBlclwiIH0sXG4gICAgICBfdm0uX2woX3ZtLmxpc3QsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhc2stYm94XCIsXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25Ub0RldGFpbChpdGVtKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGFzay1ib3gtdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhpdGVtLnR5cGUpICsgXCLvvJpcIiArIF92bS5fcyhpdGVtLnRpdGxlKSArIFwiIFwiKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0YXNrLWJveC1kZXNcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW192bS5fdihcIuWPkeW4g+aXtumXtO+8mlwiKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0uY3JlYXRlX3RpbWUpICsgXCIgXCIpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhc2stYm94LWRlc1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbX3ZtLl92KFwi5oiq5q2i5pe26Ze077yaXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5kZWFkbGluZSkgKyBcIiBcIiksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGFzay1ib3gtZGVzXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtfdm0uX3YoXCLlpITnkIbkurrvvJpcIildKSxcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLmhhbmRsZV91c2VyKSArIFwiIFwiKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0YXNrLWJ0bi13cmFwcGVyXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zdGF0dXMgPT09IFwi5b6F5Y+N6aaIXCJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiZmVlZGJhY2tcIlxuICAgICAgICAgICAgICAgICAgICAgIDogaXRlbS5zdGF0dXMgPT09IFwi5b6F5a6h5qC4XCJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwiY2hlY2tcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJlbmRcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uc3RhdHVzKSldXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIH0pLFxuICAgICAgMFxuICAgICksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmc1wiIH0sIFtcbiAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tcmlnaHRcIjogXCIyMHB4XCIgfSxcbiAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2xvZ28ucG5nXCIpIH0sXG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiDku7vliqHosIPluqYgXCIpLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIid1c2Ugc3RyaWN0JztcbnZhciAkZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5mb3JFYWNoO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2ZvckVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbm1vZHVsZS5leHBvcnRzID0gIVNUUklDVF9NRVRIT0QgPyBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gIHJldHVybiAkZm9yRWFjaCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWZvcmVhY2ggLS0gc2FmZVxufSA6IFtdLmZvckVhY2g7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIERPTUl0ZXJhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20taXRlcmFibGVzJyk7XG52YXIgRE9NVG9rZW5MaXN0UHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS10b2tlbi1saXN0LXByb3RvdHlwZScpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbnZhciBoYW5kbGVQcm90b3R5cGUgPSBmdW5jdGlvbiAoQ29sbGVjdGlvblByb3RvdHlwZSkge1xuICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGUgJiYgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoICE9PSBmb3JFYWNoKSB0cnkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCAnZm9yRWFjaCcsIGZvckVhY2gpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCA9IGZvckVhY2g7XG4gIH1cbn07XG5cbmZvciAodmFyIENPTExFQ1RJT05fTkFNRSBpbiBET01JdGVyYWJsZXMpIHtcbiAgaWYgKERPTUl0ZXJhYmxlc1tDT0xMRUNUSU9OX05BTUVdKSB7XG4gICAgaGFuZGxlUHJvdG90eXBlKGdsb2JhbFRoaXNbQ09MTEVDVElPTl9OQU1FXSAmJiBnbG9iYWxUaGlzW0NPTExFQ1RJT05fTkFNRV0ucHJvdG90eXBlKTtcbiAgfVxufVxuXG5oYW5kbGVQcm90b3R5cGUoRE9NVG9rZW5MaXN0UHJvdG90eXBlKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiQC9hc3NldHMv5LiL5ouJLnBuZ1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IHJlcXVpcmUoXCJAL2Fzc2V0cy9iai5wbmdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbltkYXRhLXYtZGZkNTI1M2NdIC52YW4tc2VhcmNoX19jb250ZW50IHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZmVmZWY7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5bZGF0YS12LWRmZDUyNTNjXSAudmFuLWRyb3Bkb3duLW1lbnVfX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGNvbG9yOiAjNjY2O1xcbn1cXG5bZGF0YS12LWRmZDUyNTNjXSAudmFuLWRyb3Bkb3duLW1lbnVfX3RpdGxlOjphZnRlciB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgcmlnaHQ6IC0yNnB4O1xcbiAgdG9wOiAzMCU7XFxuICBib3JkZXI6IDA7XFxuICB0cmFuc2Zvcm06IG5vbmU7XFxufVxcbltkYXRhLXYtZGZkNTI1M2NdIC52YW4tZHJvcGRvd24tbWVudV9fYmFyIHtcXG4gIHBhZGRpbmc6IDAgMTVweCAxMnB4O1xcbiAgaGVpZ2h0OiAzMnB4O1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuW2RhdGEtdi1kZmQ1MjUzY10gLnZhbi1kcm9wZG93bi1tZW51X19pdGVtIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZmVmZWY7XFxuICBtYXJnaW4tcmlnaHQ6IDE0cHg7XFxufVxcbltkYXRhLXYtZGZkNTI1M2NdIC52YW4tZHJvcGRvd24tbWVudV9faXRlbTpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1yaWdodDogMDtcXG59XFxuLmZzW2RhdGEtdi1kZmQ1MjUzY10ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5hZGQtYnRuW2RhdGEtdi1kZmQ1MjUzY10ge1xcbiAgcGFkZGluZzogNnB4IDlweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMyNzg0ZjQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxufVxcbi5ob21lLWhlYWRlci13cmFwcGVyW2RhdGEtdi1kZmQ1MjUzY10ge1xcbiAgcGFkZGluZzogN3B4IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmhvbWUtaGVhZGVyLXdyYXBwZXIgaW1nW2RhdGEtdi1kZmQ1MjUzY10ge1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxufVxcbi50YXNrLXdyYXBwZXJbZGF0YS12LWRmZDUyNTNjXSB7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxuICBwYWRkaW5nOiAxMnB4IDE1cHggODBweDtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDI1MHB4KTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG59XFxuLnRhc2std3JhcHBlciAudGFzay1ib3hbZGF0YS12LWRmZDUyNTNjXSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAyMnB4IDIzcHggMTVweDtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxufVxcbi50YXNrLXdyYXBwZXIgLnRhc2stYm94IC50YXNrLWJveC10aXRsZVtkYXRhLXYtZGZkNTI1M2NdIHtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbiAgY29sb3I6ICMzMzM7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLnRhc2std3JhcHBlciAudGFzay1ib3ggLnRhc2stYm94LWRlc1tkYXRhLXYtZGZkNTI1M2NdIHtcXG4gIHBhZGRpbmctYm90dG9tOiA0cHg7XFxuICBjb2xvcjogIzk5OTtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbn1cXG4udGFzay13cmFwcGVyIC50YXNrLWJveCAudGFzay1ib3gtZGVzIC5sYWJlbFtkYXRhLXYtZGZkNTI1M2NdIHtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG4udGFzay13cmFwcGVyIC50YXNrLWJveCAudGFzay1idG4td3JhcHBlcltkYXRhLXYtZGZkNTI1M2NdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNzBweDtcXG4gIHJpZ2h0OiAyNXB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LXNpemU6IDEzcHg7XFxufVxcbi50YXNrLXdyYXBwZXIgLnRhc2stYm94IC5mZWVkYmFja1tkYXRhLXYtZGZkNTI1M2NdIHtcXG4gIHBhZGRpbmc6IDVweCAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YyMzMzMztcXG59XFxuLnRhc2std3JhcHBlciAudGFzay1ib3ggLmNoZWNrW2RhdGEtdi1kZmQ1MjUzY10ge1xcbiAgcGFkZGluZzogNXB4IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiZjM5O1xcbn1cXG4udGFzay13cmFwcGVyIC50YXNrLWJveCAuZW5kW2RhdGEtdi1kZmQ1MjUzY10ge1xcbiAgcGFkZGluZzogNXB4IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDhkMjM2O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWRmZDUyNTNjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNTc4M2JhYzJcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kZmQ1MjUzYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWRmZDUyNTNjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xyXG5cclxuLyoqXHJcbiAqIOS7u+WKoeWIl+ihqFxyXG4gKiBAcGFyYW0gbGltaXQg5p2h5pWwXHJcbiAqIEBwYXJhbSBwYWdlIOW9k+WJjemhtVxyXG4gKiBAcGFyYW0gbmFtZSDmqKHns4rmkJzntKJcclxuICogQHBhcmFtIHN0YXR1cyDku7vliqHnirbmgIFcclxuICogQHBhcmFtIHR5cGUg5Lu75Yqh57G75Z6LXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXNrTGlzdCh7bGltaXQsIHBhZ2UsIG5hbWUsIHN0YXR1cywgdHlwZX0pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBwL3Rhc2svdGFza19pbmZvX2xpc3QnLFxyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBsaW1pdCxcclxuICAgICAgcGFnZSxcclxuICAgICAgbmFtZSxcclxuICAgICAgc3RhdHVzLFxyXG4gICAgICB0eXBlXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOS7u+WKoeexu+Wei1xyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFza1R5cGVMaXN0KCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvdGFzay90YXNrX3R5cGVfbGlzdCcsXHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgcGFyYW1zOiB7fVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlj5HluIPku7vliqFcclxuICogQHBhcmFtIGRhdGEg5Lu75Yqh5bGe5oCnXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3N0VGFza0FkZChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC90YXNrL2luc2VydF90YXNrX2luZm8nLFxyXG4gICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICBkYXRhOiBkYXRhXHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWkhOe9ruWvueixoeS4i+aLiVxyXG4gKiBAcGFyYW0gZGl2aXNpb25fY29kZSDlvZPliY3nmbvlvZXnlKjmiLfnmoTooYzmlL/ljLrliJJcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRhc2tEaXNwb3NlKCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvdGFzay9zaXRlX2xpc3QnLFxyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBkaXZpc2lvbl9jb2RlOiAnNTMwMTE1J1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDku7vliqHor6bmg4VcclxuICogQHBhcmFtIGlkIOS7u+WKoWlkXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUYXNrRGV0YWlsKHtpZH0pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBwL3Rhc2svZGV0YWlsJyxcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgaWRcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICog5Y+N6aaIXHJcbiAqIEBwYXJhbSBkYXRhIOWPjemmiOWxnuaAp1xyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcG9zdFRhc2tGZWVkYmFjayhkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC90YXNrL2ZlZWRiYWNrJyxcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgZGF0YTogZGF0YVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlrqHmoLhcclxuICogQHBhcmFtIGRhdGEg5a6h5qC45bGe5oCnXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3N0VGFza0NoZWNrKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBwL3Rhc2svZXhhbWluZScsXHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGRhdGE6IGRhdGFcclxuICB9KVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9iai5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvbG9nby5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEQUFBQUF3Q0FZQUFBQlhBdm1IQUFBQUFYTlNSMElBcnM0YzZRQUFBRVJsV0VsbVRVMEFLZ0FBQUFnQUFZZHBBQVFBQUFBQkFBQUFHZ0FBQUFBQUE2QUJBQU1BQUFBQkFBRUFBS0FDQUFRQUFBQUJBQUFBTUtBREFBUUFBQUFCQUFBQU1BQUFBQURiTjJ3TUFBQUNDRWxFUVZSb0JlMlVQVWdqWVJDR1o5WUxoeitnaGRVVkNvSm9JWGNXYW1OMWxXZzBXSGlJNks2ZWhUWlpQUkhCTXJVaS9xeU5DaXFKY3FBV0VreWhoVFpXdVNzTWlJV0ZwWlZGQkZFa0puTXo0cFltdU82QnhReUUzWm45M3RsNW4zemZBbWdvQVNXZ0JKU0FFbEFDU2tBSktBRWxvQVNVZ0JMd1JBQTlxVmdVTk1NN0NQZ1ZFS3lEcUpQMDBxZlRzbHVBSUVvSXFVVFU2ZlhTdy9BaWV0RlVFVkFkRVJ4M1dlSDJ0L1lSaldpbEJ4QlZ2MVh2cnZkc29PUVRkakg5dndCVW1pT01CNjJ4UWJkcG9hdXNGWTFvcGNkenIwS2lWNTRYdlZJdldMNDRTOTQzdG5iOGZzbzhOUEVndGZ6cnJtOXNlYnhNSlUvemlabjhOQkV0OHhvREVZOUt5aW83ZHRkbTB2azArWjU1UGdOdTA1R1JsY0Qxdy9rR2I0WCs1eHFDMDF4VCtTc1NpZVRjTlhMbDNQaHpkYlBBZTk2V25NL1A5cGZpaHArcnE2TVp5YjNHdXczSWk1a29ob2JHWm5NNW1ud1paTGVtQWszSGNSNGx0MjM3ODFXYVluejdRM0xEd0xuNDV0SVUvd01rK1h2Q0Z3UHVBRUhUWmdNMHl6a0R4cE9LY3VpV1orbGIyR2VYMy9tV0I4YXBSTXlaazdvZjRhc0JHU2hraFFleUFPczhhb0JkcEtURzIrc2JXOHJ3Z1J1T1I1ZTNwT1pYK0c1QUJndWE0MjBJMlQzR1hTWTV2K1NPb0tnbkVWczhsTnpQK0M4R1pNQ1FPZEdVeGN3NjcvSmlBd0o5OGRnOGYzSTFsSUFTVUFKS1FBa29BU1dnQkpTQUVsQUNTa0FKZkJnQy93QkpYcEtvaFZCUWd3QUFBQUJKUlU1RXJrSmdnZz09XCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kZmQ1MjUzYyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kZmQ1MjUzYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImRmZDUyNTNjXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2RmZDUyNTNjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2RmZDUyNTNjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2RmZDUyNTNjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZGZkNTI1M2Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZGZkNTI1M2MnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy90YXNrL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWRmZDUyNTNjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWRmZDUyNTNjJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==