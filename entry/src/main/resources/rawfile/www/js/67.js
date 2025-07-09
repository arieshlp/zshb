(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[67],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/taskDispatch.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/taskDispatch.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_taskDispatch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/taskDispatch.js */ "./src/api/taskDispatch.js");
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vant */ "./node_modules/vant/es/index.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "taskDispatch",
  props: {
    siteObj: {
      type: Object,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      dialog: true,
      content: '',
      dispatchUser: '',
      dispatchUserId: '',
      columns: [],
      showPicker: false
    };
  },
  mounted: function mounted() {
    this.queryDisposeUser();
  },
  methods: {
    //查询处置对象
    queryDisposeUser: function queryDisposeUser() {
      var _this = this;

      Object(_api_taskDispatch_js__WEBPACK_IMPORTED_MODULE_1__["getTaskDispose"])().then(function (res) {
        _this.columns = res.data.map(function (item) {
          return {
            text: item.username,
            value: item.id
          };
        });
      });
    },
    onAddTask: function onAddTask() {
      var _this2 = this;

      console.log(this.siteObj);

      if (this.content === '') {
        Object(vant__WEBPACK_IMPORTED_MODULE_2__["Toast"])('请输入任务内容');
        return;
      }

      if (this.dispatchUserId === '') {
        Object(vant__WEBPACK_IMPORTED_MODULE_2__["Toast"])('请选择处置对象');
        return;
      }

      var tempD = {
        content: this.content,
        userId: this.dispatchUserId,
        username: this.dispatchUser,
        jd: this.siteObj.longitude || '',
        wd: this.siteObj.latitude || '',
        relaId: this.siteObj.siteId || this.siteObj.id,
        relaType: this.siteObj.relaType
      };
      console.log(tempD);
      Object(_api_taskDispatch_js__WEBPACK_IMPORTED_MODULE_1__["postTaskAdd"])(tempD).then(function (res) {
        if (res.code == 200) {
          Object(vant__WEBPACK_IMPORTED_MODULE_2__["Toast"])('成功');
          _this2.dialog = false;

          _this2.$emit('closePop');
        }
      });
    },
    onConfirm: function onConfirm(value) {
      this.dispatchUser = value.text;
      this.dispatchUserId = value.value;
      this.showPicker = false;
    },
    closeModal: function closeModal() {
      this.dialog = false;
      this.$emit('closePop');
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airAlarm/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airAlarm/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_air_quality__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/air_quality */ "./src/api/air_quality.js");
/* harmony import */ var _components_taskDispatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/taskDispatch */ "./src/components/taskDispatch.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    taskDispatch: _components_taskDispatch__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      // tabArr: ['全部', 'AQI指标超标','日均值超标','AQI连续超标'],
      tabArr: ['全部'],
      tabIndex: 0,
      xzqh: "",
      queryFlag: '',
      list: [],
      addTaskVisible: false,
      siteObj: {},
      siteId: null
    };
  },
  mounted: function mounted() {
    this.xzqh = this.$route.query.xzqh;
    this.siteId = this.$route.query.siteId;
    this.queryFlag = this.$route.query.queryFlag;

    if (this.detailsParameter) {
      this.xzqh = this.detailsParameter;
    }

    this.loadData();
  },
  methods: {
    changeTab: function changeTab(index) {
      this.tabIndex = index;
    },
    goDetailPage: function goDetailPage(item) {
      this.$router.push({
        name: 'airStationDetail',
        query: {
          siteId: item.siteId,
          siteName: item.siteName,
          siteLevel: item.siteLevel,
          title: "空气质量站点详情",
          xzqh: this.$route.query.xzqh
        }
      });
    },
    loadData: function loadData() {
      var _this = this;

      var info = {
        divisionName: this.xzqh,
        siteId: this.siteId
      };
      Object(_api_air_quality__WEBPACK_IMPORTED_MODULE_0__["overproofAlerts"])(info).then(function (res) {
        _this.list = res.data;
      });
    },
    addTask: function addTask(data) {
      data.relaType = 'air';
      this.siteObj = data;
      this.addTaskVisible = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/taskDispatch.vue?vue&type=template&id=a2239ca2&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/taskDispatch.vue?vue&type=template&id=a2239ca2&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      _c(
        "van-popup",
        {
          style: { width: "90%" },
          model: {
            value: _vm.dialog,
            callback: function ($$v) {
              _vm.dialog = $$v
            },
            expression: "dialog",
          },
        },
        [
          _c(
            "div",
            { staticClass: "popupWrapper" },
            [
              _c("p", [_vm._v("任务调度")]),
              _c("van-field", {
                attrs: {
                  label: "任务内容",
                  placeholder: "请输入任务内容",
                  type: "textarea",
                },
                model: {
                  value: _vm.content,
                  callback: function ($$v) {
                    _vm.content = $$v
                  },
                  expression: "content",
                },
              }),
              _c("van-field", {
                attrs: {
                  readonly: "",
                  clickable: "",
                  name: "picker",
                  value: _vm.dispatchUser,
                  label: "处置对象",
                  placeholder: "点击选择处置对象",
                },
                on: {
                  click: function ($event) {
                    _vm.showPicker = true
                  },
                },
              }),
              _c(
                "div",
                { staticClass: "popupFooter" },
                [
                  _c(
                    "van-button",
                    {
                      attrs: { type: "default" },
                      on: { click: _vm.closeModal },
                    },
                    [_vm._v("取消")]
                  ),
                  _c(
                    "van-button",
                    { attrs: { type: "info" }, on: { click: _vm.onAddTask } },
                    [_vm._v("确定")]
                  ),
                ],
                1
              ),
            ],
            1
          ),
        ]
      ),
      _c(
        "van-popup",
        {
          attrs: { position: "bottom" },
          model: {
            value: _vm.showPicker,
            callback: function ($$v) {
              _vm.showPicker = $$v
            },
            expression: "showPicker",
          },
        },
        [
          _c("van-picker", {
            attrs: { "show-toolbar": "", columns: _vm.columns },
            on: {
              confirm: _vm.onConfirm,
              cancel: function ($event) {
                _vm.showPicker = false
              },
            },
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

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airAlarm/index.vue?vue&type=template&id=69bef87b&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airAlarm/index.vue?vue&type=template&id=69bef87b&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        attrs: { title: "空气质量超标告警", "left-arrow": "", fixed: "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
      }),
      _c(
        "div",
        { staticClass: "scroll-to-top-wrapper" },
        [
          _vm._l(_vm.list, function (item) {
            return _c(
              "div",
              {
                staticClass: "overlist",
                on: {
                  click: function ($event) {
                    return _vm.goDetailPage(item)
                  },
                },
              },
              [
                _c("span", { staticStyle: { width: "30%" } }, [
                  _vm._v(_vm._s(item.siteName)),
                ]),
                _c("span", [
                  _vm._v(
                    _vm._s(
                      _vm.queryFlag === 0
                        ? item.exceedFactorValue
                        : item.exceedFactorIaqi
                    )
                  ),
                ]),
                _c("span", [_vm._v(_vm._s(item.exceedFactorName))]),
                _c("span", { staticClass: "time" }, [
                  _vm._v(_vm._s(item.exceedRecordTime.substr(0, 13))),
                ]),
              ]
            )
          }),
          _vm.list.length === 0
            ? _c("van-empty", { attrs: { description: "暂无数据" } })
            : _vm._e(),
        ],
        2
      ),
      _vm.addTaskVisible
        ? _c("taskDispatch", {
            attrs: { siteObj: _vm.siteObj },
            on: {
              closePop: function ($event) {
                _vm.addTaskVisible = false
              },
            },
          })
        : _vm._e(),
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/taskDispatch.vue?vue&type=style&index=0&id=a2239ca2&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/taskDispatch.vue?vue&type=style&index=0&id=a2239ca2&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".van-popup[data-v-a2239ca2] {\n  border-radius: 8px;\n}\n.popupWrapper[data-v-a2239ca2] {\n  padding: 16px;\n}\n.popupWrapper p[data-v-a2239ca2] {\n  font-size: 16px;\n  text-align: center;\n}\n.popupWrapper .content[data-v-a2239ca2] {\n  padding: 10px 0;\n  margin: 10px 0;\n  line-height: 20px;\n  font-size: 14px;\n  color: #888d95;\n  max-height: calc(100vh - 350px);\n  overflow: auto;\n  white-space: pre-line;\n}\n.popupWrapper .popupFooter[data-v-a2239ca2] {\n  margin-top: 20px;\n  display: flex;\n  justify-content: space-around;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airAlarm/index.vue?vue&type=style&index=0&id=69bef87b&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airAlarm/index.vue?vue&type=style&index=0&id=69bef87b&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".tab-wrapper[data-v-69bef87b] {\n  padding: 20px 0;\n  width: 100%;\n  overflow-x: auto;\n  white-space: nowrap;\n  background: #fafafa;\n}\n.tab-wrapper .tab-item[data-v-69bef87b] {\n  display: inline;\n  margin: 0 5px;\n  padding: 5px 12px;\n  border-radius: 50px;\n  background: #fff;\n  text-align: center;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 14px;\n}\n.tab-wrapper .active[data-v-69bef87b] {\n  color: #fff;\n  background: #3f7bff;\n}\n.overlist[data-v-69bef87b] {\n  position: relative;\n  border-radius: 10px;\n  background: #ffffff;\n  border: 1px solid white;\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);\n  margin: 0px 5px 3px;\n  padding: 10px 0px 10px 10px;\n  display: flex;\n  align-items: flex-start;\n}\n.overlist > span[data-v-69bef87b] {\n  font-size: 14px;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: left;\n  margin-right: 10px;\n}\n.overlist > span[data-v-69bef87b]:first-child {\n  color: black;\n}\n.overlist > span[data-v-69bef87b]:nth-child(2) {\n  display: inline-block;\n  border-radius: 10px;\n  background: linear-gradient(223.7deg, #ffbf00 0%, #ffe596 100%);\n  color: white;\n  padding: 2px 13px;\n  font-size: 12px;\n}\n.overlist > span[data-v-69bef87b]:nth-child(3) {\n  color: #ff8d1a;\n}\n.overlist .time[data-v-69bef87b] {\n  margin-right: 0;\n}\n.task-btn[data-v-69bef87b] {\n  position: absolute;\n  right: 10px;\n  bottom: 10px;\n  text-align: right;\n  font-size: 12px;\n  color: #a299ff;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/taskDispatch.vue?vue&type=style&index=0&id=a2239ca2&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/taskDispatch.vue?vue&type=style&index=0&id=a2239ca2&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./taskDispatch.vue?vue&type=style&index=0&id=a2239ca2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/taskDispatch.vue?vue&type=style&index=0&id=a2239ca2&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("cdb74c14", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airAlarm/index.vue?vue&type=style&index=0&id=69bef87b&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airAlarm/index.vue?vue&type=style&index=0&id=69bef87b&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=69bef87b&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airAlarm/index.vue?vue&type=style&index=0&id=69bef87b&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("14fb836e", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/api/air_quality.js":
/*!********************************!*\
  !*** ./src/api/air_quality.js ***!
  \********************************/
/*! exports provided: ranking, airCityData, airCityAssessCondition, airCityAssessTendency, airPollutantRatio, airPollutantSiteRatio, airPollutantYear, airPollutantSiteYear, airQualityRanking, airQualitySiteList, airRanking, overproofAlerts, airRankinasdasdag, airQualitySiteData, airQualitySiteDataType, siteComparison, airQualitySiteDataTypeAnother, getAirSite, airQualitySiteCalendar, iaqiCalendar, airYearCalendar, weatherForecast, getDivisionName, yearAirQualityRatio, airSiteQualityRanking, regionQualityRanking, airRegion, pollSize, typeList, treeList, pollList, regionPrediction, airMl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ranking", function() { return ranking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airCityData", function() { return airCityData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airCityAssessCondition", function() { return airCityAssessCondition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airCityAssessTendency", function() { return airCityAssessTendency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airPollutantRatio", function() { return airPollutantRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airPollutantSiteRatio", function() { return airPollutantSiteRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airPollutantYear", function() { return airPollutantYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airPollutantSiteYear", function() { return airPollutantSiteYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airQualityRanking", function() { return airQualityRanking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airQualitySiteList", function() { return airQualitySiteList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airRanking", function() { return airRanking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overproofAlerts", function() { return overproofAlerts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airRankinasdasdag", function() { return airRankinasdasdag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airQualitySiteData", function() { return airQualitySiteData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airQualitySiteDataType", function() { return airQualitySiteDataType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteComparison", function() { return siteComparison; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airQualitySiteDataTypeAnother", function() { return airQualitySiteDataTypeAnother; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAirSite", function() { return getAirSite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airQualitySiteCalendar", function() { return airQualitySiteCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iaqiCalendar", function() { return iaqiCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airYearCalendar", function() { return airYearCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weatherForecast", function() { return weatherForecast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDivisionName", function() { return getDivisionName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yearAirQualityRatio", function() { return yearAirQualityRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airSiteQualityRanking", function() { return airSiteQualityRanking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regionQualityRanking", function() { return regionQualityRanking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airRegion", function() { return airRegion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pollSize", function() { return pollSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeList", function() { return typeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "treeList", function() { return treeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pollList", function() { return pollList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regionPrediction", function() { return regionPrediction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airMl", function() { return airMl; });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./src/api/request.js");

var baseUrl =  false ? undefined : "/air"; //服务器是air类，本地没有加

/*
首页空气质量接口
 */

function ranking(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/competition/ranking',
    method: 'get',
    params: data
  });
}
/*
空气质量--小时、日数据
 */

function airCityData(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQuality/airCityData',
    method: 'get',
    params: data
  });
}
/*
空气质量--考核情况
 */

function airCityAssessCondition(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQuality/airCityAssessCondition',
    method: 'get',
    params: data
  });
}
/*
空气质量--趋势统计
 */

function airCityAssessTendency(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQuality/airCityAssessTendency',
    method: 'get',
    params: data
  });
}
/*
空气质量--污染物占比--行政区域的
 */

function airPollutantRatio(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQuality/airPollutantRatio',
    method: 'get',
    params: data
  });
}
/*
空气质量--污染物占比--站点的
 */

function airPollutantSiteRatio(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/airPollutantSiteRatio',
    method: 'get',
    params: data
  });
}
/*
空气质量--污染物年度统计--区域的
 */

function airPollutantYear(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQuality/airPollutantYear',
    method: 'get',
    params: data
  });
}
/*
空气质量--污染物年度统计--单个站点的
 */

function airPollutantSiteYear(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/airPollutantSiteYear',
    method: 'get',
    params: data
  });
}
/*
空气质量--排名
 */

function airQualityRanking(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQuality/airQualityRanking',
    method: 'get',
    params: data
  });
}
/*
空气质量--空气质量站点数据-国考/省考列表
 */

function airQualitySiteList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/airQualitySitesData',
    method: 'get',
    params: data
  });
}
/*
空气质量--空气站点排名
 */

function airRanking(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/airRanking',
    method: 'get',
    params: data
  });
}
/*
空气质量--近24小时超标告警
 */

function overproofAlerts(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/overproofAlerts',
    method: 'get',
    params: data
  });
}
/*
空气质量--空气站点排名
 */

function airRankinasdasdag(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/airRanking',
    method: 'get',
    params: data
  });
}
/*
空气质量--单站点站点数据
 */

function airQualitySiteData(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/airQualitySiteData',
    method: 'get',
    params: data
  });
}
/*
空气质量--单站点站点小时、日数据-模块
 */

function airQualitySiteDataType(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/airQualitySiteDataType',
    method: 'get',
    params: data
  });
}
/*
空气质量--单站点站点小时、日数据-对比数据折线图
 */

function siteComparison(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/siteComparison',
    method: 'get',
    params: data
  });
}
/*
空气质量--单站站点数据 五分钟 同比--折线图和数据列表
 */

function airQualitySiteDataTypeAnother(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/airQualitySiteDataTypeAnother',
    method: 'get',
    params: data
  });
}
/*
空气质量--空气站点
 */

function getAirSite(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/getAirSite',
    method: 'get',
    params: data
  });
}
/*
空气质量--空气站点日历
 */

function airQualitySiteCalendar(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/airQualitySiteCalendar',
    method: 'get',
    params: data
  });
}
/*
空气质量--空气站点日历iaqi
 */

function iaqiCalendar(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/iaqiCalendar',
    method: 'get',
    params: data
  });
}
/*
空气质量--空气站点全年日历
 */

function airYearCalendar(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/airYearCalendar',
    method: 'get',
    params: data
  });
}
/*
空气质量--天气预报
 */

function weatherForecast(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQuality/weatherForecast',
    method: 'get',
    params: data
  });
}
/*
空气质量--行政区划
 */

function getDivisionName(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQuality/getDivisionName',
    method: 'get' // params: data

  });
}
/*
空气质量--全年空气质量占比
 */

function yearAirQualityRatio(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQuality/yearAirQualityRatio',
    method: 'get',
    params: data
  });
}
/*
空气-站点空气质量排名
 */

function airSiteQualityRanking(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQuality/airSiteQualityRanking',
    method: 'get',
    params: data
  });
}
/*
空气-区县空气质量排名
 */

function regionQualityRanking(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQuality/regionQualityRanking',
    method: 'get',
    params: data
  });
}
/*
空气-区县空气描述
 */

function airRegion(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQuality/airRegion',
    method: 'get',
    params: data
  });
}
/*
空气-站点涉气污染源数据
 */

function pollSize(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/pollSize',
    method: 'get',
    params: data
  });
}
/*
空气-站点涉气污染源一级
 */

function typeList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/typeList',
    method: 'get',
    params: data
  });
}
/*
空气-站点涉气污染源子集
 */

function treeList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/treeList',
    method: 'get',
    params: data
  });
}
/*
空气-站点涉气污染源子集站点信息
 */

function pollList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/pollList',
    method: 'get',
    params: data
  });
}
/*
空气-空气预报
 */

function regionPrediction(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/regionPrediction',
    method: 'get',
    params: data
  });
}
/*
空气-站点周边气象站
 */

function airMl(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/airMl',
    method: 'get',
    params: data
  });
}

/***/ }),

/***/ "./src/api/taskDispatch.js":
/*!*********************************!*\
  !*** ./src/api/taskDispatch.js ***!
  \*********************************/
/*! exports provided: getTaskList, postTaskAdd, getTaskDispose, postTaskFeedback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaskList", function() { return getTaskList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postTaskAdd", function() { return postTaskAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaskDispose", function() { return getTaskDispose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postTaskFeedback", function() { return postTaskFeedback; });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./src/api/request.js");

/**
 * 任务列表
 * @param userId 当前用户id
 * */

function getTaskList() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/pollut/pollution/taskList',
    method: 'GET',
    params: {
      userId: ''
    }
  });
}
/**
 * 发布任务
 * @param data 任务属性
 * */

function postTaskAdd(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/pollut/pollution/insTask',
    method: 'POST',
    data: data
  });
}
/**
 * 处置对象下拉
 * @param division_code 当前登录用户的行政区划
 * */

function getTaskDispose() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/ps/user/getAllUser',
    method: 'GET',
    params: {}
  });
}
/**
 * 反馈
 * @param data 反馈属性
 * */

function postTaskFeedback(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/pollut/pollution/updTask',
    method: 'POST',
    data: data
  });
}

/***/ }),

/***/ "./src/components/taskDispatch.vue":
/*!*****************************************!*\
  !*** ./src/components/taskDispatch.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _taskDispatch_vue_vue_type_template_id_a2239ca2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskDispatch.vue?vue&type=template&id=a2239ca2&scoped=true& */ "./src/components/taskDispatch.vue?vue&type=template&id=a2239ca2&scoped=true&");
/* harmony import */ var _taskDispatch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskDispatch.vue?vue&type=script&lang=js& */ "./src/components/taskDispatch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _taskDispatch_vue_vue_type_style_index_0_id_a2239ca2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskDispatch.vue?vue&type=style&index=0&id=a2239ca2&lang=scss&scoped=true& */ "./src/components/taskDispatch.vue?vue&type=style&index=0&id=a2239ca2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _taskDispatch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _taskDispatch_vue_vue_type_template_id_a2239ca2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _taskDispatch_vue_vue_type_template_id_a2239ca2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a2239ca2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/taskDispatch.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/taskDispatch.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./src/components/taskDispatch.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskDispatch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../node_modules/babel-loader/lib!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./taskDispatch.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/taskDispatch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskDispatch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/taskDispatch.vue?vue&type=style&index=0&id=a2239ca2&lang=scss&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./src/components/taskDispatch.vue?vue&type=style&index=0&id=a2239ca2&lang=scss&scoped=true& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskDispatch_vue_vue_type_style_index_0_id_a2239ca2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./taskDispatch.vue?vue&type=style&index=0&id=a2239ca2&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/taskDispatch.vue?vue&type=style&index=0&id=a2239ca2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskDispatch_vue_vue_type_style_index_0_id_a2239ca2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskDispatch_vue_vue_type_style_index_0_id_a2239ca2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskDispatch_vue_vue_type_style_index_0_id_a2239ca2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskDispatch_vue_vue_type_style_index_0_id_a2239ca2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/taskDispatch.vue?vue&type=template&id=a2239ca2&scoped=true&":
/*!************************************************************************************!*\
  !*** ./src/components/taskDispatch.vue?vue&type=template&id=a2239ca2&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskDispatch_vue_vue_type_template_id_a2239ca2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../node_modules/vue-loader/lib??vue-loader-options!./taskDispatch.vue?vue&type=template&id=a2239ca2&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/taskDispatch.vue?vue&type=template&id=a2239ca2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskDispatch_vue_vue_type_template_id_a2239ca2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_taskDispatch_vue_vue_type_template_id_a2239ca2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/airHomePage/airAlarm/index.vue":
/*!**************************************************!*\
  !*** ./src/views/airHomePage/airAlarm/index.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_69bef87b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=69bef87b&scoped=true& */ "./src/views/airHomePage/airAlarm/index.vue?vue&type=template&id=69bef87b&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/airHomePage/airAlarm/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_69bef87b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=69bef87b&lang=scss&scoped=true& */ "./src/views/airHomePage/airAlarm/index.vue?vue&type=style&index=0&id=69bef87b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_69bef87b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_69bef87b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "69bef87b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/airHomePage/airAlarm/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/airHomePage/airAlarm/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/views/airHomePage/airAlarm/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airAlarm/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/airHomePage/airAlarm/index.vue?vue&type=style&index=0&id=69bef87b&lang=scss&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./src/views/airHomePage/airAlarm/index.vue?vue&type=style&index=0&id=69bef87b&lang=scss&scoped=true& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_69bef87b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=69bef87b&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airAlarm/index.vue?vue&type=style&index=0&id=69bef87b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_69bef87b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_69bef87b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_69bef87b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_69bef87b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/airHomePage/airAlarm/index.vue?vue&type=template&id=69bef87b&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./src/views/airHomePage/airAlarm/index.vue?vue&type=template&id=69bef87b&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_69bef87b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=69bef87b&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airAlarm/index.vue?vue&type=template&id=69bef87b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_69bef87b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_69bef87b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvdGFza0Rpc3BhdGNoLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpckFsYXJtL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrRGlzcGF0Y2gudnVlPzA5NmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpckFsYXJtL2luZGV4LnZ1ZT8zODkwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkubWFwLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Rhc2tEaXNwYXRjaC52dWU/ZTBlOCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyQWxhcm0vaW5kZXgudnVlPzMwODkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFza0Rpc3BhdGNoLnZ1ZT9mYzFjIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJBbGFybS9pbmRleC52dWU/OTU3MSIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2Fpcl9xdWFsaXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9hcGkvdGFza0Rpc3BhdGNoLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Rhc2tEaXNwYXRjaC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGFza0Rpc3BhdGNoLnZ1ZT80ZDc4Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3Rhc2tEaXNwYXRjaC52dWU/Mjk0ZSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy90YXNrRGlzcGF0Y2gudnVlPzNhYTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpckFsYXJtL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyQWxhcm0vaW5kZXgudnVlPzc5NDciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpckFsYXJtL2luZGV4LnZ1ZT9kNDJjIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJBbGFybS9pbmRleC52dWU/MWFkZiJdLCJuYW1lcyI6WyJiYXNlVXJsIiwicHJvY2VzcyIsInJhbmtpbmciLCJkYXRhIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInBhcmFtcyIsImFpckNpdHlEYXRhIiwiYWlyQ2l0eUFzc2Vzc0NvbmRpdGlvbiIsImFpckNpdHlBc3Nlc3NUZW5kZW5jeSIsImFpclBvbGx1dGFudFJhdGlvIiwiYWlyUG9sbHV0YW50U2l0ZVJhdGlvIiwiYWlyUG9sbHV0YW50WWVhciIsImFpclBvbGx1dGFudFNpdGVZZWFyIiwiYWlyUXVhbGl0eVJhbmtpbmciLCJhaXJRdWFsaXR5U2l0ZUxpc3QiLCJhaXJSYW5raW5nIiwib3ZlcnByb29mQWxlcnRzIiwiYWlyUmFua2luYXNkYXNkYWciLCJhaXJRdWFsaXR5U2l0ZURhdGEiLCJhaXJRdWFsaXR5U2l0ZURhdGFUeXBlIiwic2l0ZUNvbXBhcmlzb24iLCJhaXJRdWFsaXR5U2l0ZURhdGFUeXBlQW5vdGhlciIsImdldEFpclNpdGUiLCJhaXJRdWFsaXR5U2l0ZUNhbGVuZGFyIiwiaWFxaUNhbGVuZGFyIiwiYWlyWWVhckNhbGVuZGFyIiwid2VhdGhlckZvcmVjYXN0IiwiZ2V0RGl2aXNpb25OYW1lIiwieWVhckFpclF1YWxpdHlSYXRpbyIsImFpclNpdGVRdWFsaXR5UmFua2luZyIsInJlZ2lvblF1YWxpdHlSYW5raW5nIiwiYWlyUmVnaW9uIiwicG9sbFNpemUiLCJ0eXBlTGlzdCIsInRyZWVMaXN0IiwicG9sbExpc3QiLCJyZWdpb25QcmVkaWN0aW9uIiwiYWlyTWwiLCJnZXRUYXNrTGlzdCIsInVzZXJJZCIsInBvc3RUYXNrQWRkIiwiZ2V0VGFza0Rpc3Bvc2UiLCJwb3N0VGFza0ZlZWRiYWNrIl0sIm1hcHBpbmdz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QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBMFMsQ0FBZ0Isc1VBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBOVQ7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvNjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDx2YW4tcG9wdXAgdi1tb2RlbD1cImRpYWxvZ1wiIDpzdHlsZT1cInsgd2lkdGg6ICc5MCUnIH1cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInBvcHVwV3JhcHBlclwiPlxyXG4gICAgICAgIDxwPuS7u+WKoeiwg+W6pjwvcD5cclxuICAgICAgICA8dmFuLWZpZWxkIHYtbW9kZWw9XCJjb250ZW50XCIgbGFiZWw9XCLku7vliqHlhoXlrrlcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeS7u+WKoeWGheWuuVwiIHR5cGU9XCJ0ZXh0YXJlYVwiLz5cclxuICAgICAgICA8dmFuLWZpZWxkXHJcbiAgICAgICAgICAgIHJlYWRvbmx5XHJcbiAgICAgICAgICAgIGNsaWNrYWJsZVxyXG4gICAgICAgICAgICBuYW1lPVwicGlja2VyXCJcclxuICAgICAgICAgICAgOnZhbHVlPVwiZGlzcGF0Y2hVc2VyXCJcclxuICAgICAgICAgICAgbGFiZWw9XCLlpITnva7lr7nosaFcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIueCueWHu+mAieaLqeWkhOe9ruWvueixoVwiXHJcbiAgICAgICAgICAgIEBjbGljaz1cInNob3dQaWNrZXIgPSB0cnVlXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwb3B1cEZvb3RlclwiPlxyXG4gICAgICAgICAgPHZhbi1idXR0b24gdHlwZT1cImRlZmF1bHRcIiBAY2xpY2s9XCJjbG9zZU1vZGFsXCI+5Y+W5raIPC92YW4tYnV0dG9uPlxyXG4gICAgICAgICAgPHZhbi1idXR0b24gdHlwZT1cImluZm9cIiBAY2xpY2s9XCJvbkFkZFRhc2tcIj7noa7lrpo8L3Zhbi1idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC92YW4tcG9wdXA+XHJcbiAgICA8dmFuLXBvcHVwIHYtbW9kZWw9XCJzaG93UGlja2VyXCIgcG9zaXRpb249XCJib3R0b21cIj5cclxuICAgICAgPHZhbi1waWNrZXJcclxuICAgICAgICAgIHNob3ctdG9vbGJhclxyXG4gICAgICAgICAgOmNvbHVtbnM9XCJjb2x1bW5zXCJcclxuICAgICAgICAgIEBjb25maXJtPVwib25Db25maXJtXCJcclxuICAgICAgICAgIEBjYW5jZWw9XCJzaG93UGlja2VyID0gZmFsc2VcIlxyXG4gICAgICAvPlxyXG4gICAgPC92YW4tcG9wdXA+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCB7IGdldFRhc2tEaXNwb3NlLCBwb3N0VGFza0FkZCB9IGZyb20gJ0AvYXBpL3Rhc2tEaXNwYXRjaC5qcyc7XHJcbiAgaW1wb3J0IHtUb2FzdH0gZnJvbSAndmFudCdcclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcInRhc2tEaXNwYXRjaFwiLFxyXG4gICAgcHJvcHM6e1xyXG4gICAgICBzaXRlT2JqOntcclxuICAgICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgICAgZGVmYXVsdDogKCk9PiB7fVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBkaWFsb2c6IHRydWUsXHJcbiAgICAgICAgY29udGVudDogJycsXHJcbiAgICAgICAgZGlzcGF0Y2hVc2VyOiAnJyxcclxuICAgICAgICBkaXNwYXRjaFVzZXJJZDogJycsXHJcbiAgICAgICAgY29sdW1uczogW10sXHJcbiAgICAgICAgc2hvd1BpY2tlcjogZmFsc2UsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICB0aGlzLnF1ZXJ5RGlzcG9zZVVzZXIoKTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIC8v5p+l6K+i5aSE572u5a+56LGhXHJcbiAgICAgIHF1ZXJ5RGlzcG9zZVVzZXIoKXtcclxuICAgICAgICBnZXRUYXNrRGlzcG9zZSgpLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICB0aGlzLmNvbHVtbnMgPSByZXMuZGF0YS5tYXAoaXRlbT0+e1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgIHRleHQ6IGl0ZW0udXNlcm5hbWUsXHJcbiAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0uaWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBvbkFkZFRhc2soKXtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNpdGVPYmopO1xyXG5cclxuICAgICAgICBpZih0aGlzLmNvbnRlbnQ9PT0nJyl7XHJcbiAgICAgICAgICBUb2FzdCgn6K+36L6T5YWl5Lu75Yqh5YaF5a65Jyk7XHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5kaXNwYXRjaFVzZXJJZD09PScnKXtcclxuICAgICAgICAgIFRvYXN0KCfor7fpgInmi6nlpITnva7lr7nosaEnKTtcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgdGVtcEQgPSB7XHJcbiAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXHJcbiAgICAgICAgICB1c2VySWQ6IHRoaXMuZGlzcGF0Y2hVc2VySWQsXHJcbiAgICAgICAgICB1c2VybmFtZTogdGhpcy5kaXNwYXRjaFVzZXIsXHJcbiAgICAgICAgICBqZDogdGhpcy5zaXRlT2JqLmxvbmdpdHVkZXx8JycsXHJcbiAgICAgICAgICB3ZDogdGhpcy5zaXRlT2JqLmxhdGl0dWRlfHwnJyxcclxuICAgICAgICAgIHJlbGFJZDogdGhpcy5zaXRlT2JqLnNpdGVJZHx8dGhpcy5zaXRlT2JqLmlkLFxyXG4gICAgICAgICAgcmVsYVR5cGU6IHRoaXMuc2l0ZU9iai5yZWxhVHlwZSxcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codGVtcEQpO1xyXG4gICAgICAgIHBvc3RUYXNrQWRkKHRlbXBEKS50aGVuKHJlcz0+e1xyXG4gICAgICAgICAgaWYocmVzLmNvZGU9PTIwMCl7XHJcbiAgICAgICAgICAgIFRvYXN0KCfmiJDlip8nKTtcclxuICAgICAgICAgICAgdGhpcy5kaWFsb2cgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY2xvc2VQb3AnKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBvbkNvbmZpcm0odmFsdWUpIHtcclxuICAgICAgICB0aGlzLmRpc3BhdGNoVXNlciA9IHZhbHVlLnRleHQ7XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaFVzZXJJZCA9IHZhbHVlLnZhbHVlO1xyXG4gICAgICAgIHRoaXMuc2hvd1BpY2tlciA9IGZhbHNlO1xyXG4gICAgICB9LFxyXG4gICAgICBjbG9zZU1vZGFsKCkge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy4kZW1pdCgnY2xvc2VQb3AnKTtcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIC52YW4tcG9wdXAge1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH1cclxuXHJcbiAgLnBvcHVwV3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50IHtcclxuICAgICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgICBtYXJnaW46IDEwcHggMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgY29sb3I6IHJnYigxMzYsIDE0MSwgMTQ5KTtcclxuICAgICAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDM1MHB4KTtcclxuICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgIHdoaXRlLXNwYWNlOiBwcmUtbGluZTtcclxuICAgIH1cclxuXHJcbiAgICAucG9wdXBGb290ZXIge1xyXG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIH1cclxuICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPHZhbi1uYXYtYmFyXHJcbiAgICAgICAgdGl0bGU9XCLnqbrmsJTotKjph4/otoXmoIflkYroraZcIlxyXG4gICAgICAgIGxlZnQtYXJyb3dcclxuICAgICAgICBAY2xpY2stbGVmdD1cIiRyb3V0ZXIuZ28oLTEpXCJcclxuICAgICAgICBmaXhlZFxyXG4gICAgPlxyXG4gICAgPC92YW4tbmF2LWJhcj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwic2Nyb2xsLXRvLXRvcC13cmFwcGVyXCI+XHJcbiAgICAgIDwhLS08ZGl2IGNsYXNzPVwidGFiLXdyYXBwZXJcIj5cclxuICAgICAgICA8ZGl2IHYtZm9yPVwiKGl0ZW0saSkgaW4gdGFiQXJyXCIgOmNsYXNzPVwiWyd0YWItaXRlbScsIGk9PT10YWJJbmRleD8nYWN0aXZlJzonJ11cIiBAY2xpY2s9XCJjaGFuZ2VUYWIoaSlcIj5cclxuICAgICAgICAgIHt7aXRlbX19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2Pi0tPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cIm92ZXJsaXN0XCIgdi1mb3I9XCJpdGVtIGluIGxpc3RcIiBAY2xpY2s9XCJnb0RldGFpbFBhZ2UoaXRlbSlcIj5cclxuICAgICAgICA8c3BhbiBzdHlsZT1cIndpZHRoOiAzMCVcIj57e2l0ZW0uc2l0ZU5hbWV9fTwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj57e3F1ZXJ5RmxhZz09PTA/aXRlbS5leGNlZWRGYWN0b3JWYWx1ZTppdGVtLmV4Y2VlZEZhY3RvcklhcWl9fTwvc3Bhbj5cclxuICAgICAgICA8c3Bhbj57e2l0ZW0uZXhjZWVkRmFjdG9yTmFtZX19PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGltZVwiPnt7aXRlbS5leGNlZWRSZWNvcmRUaW1lLnN1YnN0cigwLDEzKX19PC9zcGFuPlxyXG4gICAgICAgIDwhLS0gICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWJ0blwiIEBjbGljaz1cImFkZFRhc2soaXRlbSlcIj7ku7vliqHosIPluqY8L2Rpdj4tLT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8dmFuLWVtcHR5IHYtaWY9XCJsaXN0Lmxlbmd0aD09PTBcIiBkZXNjcmlwdGlvbj1cIuaaguaXoOaVsOaNrlwiIC8+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0t5Lu75Yqh6LCD5bqmLS0+XHJcbiAgICA8dGFza0Rpc3BhdGNoIHYtaWY9XCJhZGRUYXNrVmlzaWJsZVwiIDpzaXRlT2JqPVwic2l0ZU9ialwiIEBjbG9zZVBvcD1cImFkZFRhc2tWaXNpYmxlPWZhbHNlXCIvPlxyXG5cclxuICA8L2Rpdj5cclxuXHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCB7b3ZlcnByb29mQWxlcnRzfSBmcm9tICdAL2FwaS9haXJfcXVhbGl0eSc7XHJcbiAgaW1wb3J0IHRhc2tEaXNwYXRjaCBmcm9tIFwiQC9jb21wb25lbnRzL3Rhc2tEaXNwYXRjaFwiO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcImluZGV4XCIsXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgIHRhc2tEaXNwYXRjaFxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gdGFiQXJyOiBbJ+WFqOmDqCcsICdBUUnmjIfmoIfotoXmoIcnLCfml6XlnYflgLzotoXmoIcnLCdBUUnov57nu63otoXmoIcnXSxcclxuICAgICAgICB0YWJBcnI6IFsn5YWo6YOoJ10sXHJcbiAgICAgICAgdGFiSW5kZXg6IDAsXHJcbiAgICAgICAgeHpxaDogXCJcIixcclxuICAgICAgICBxdWVyeUZsYWc6ICcnLFxyXG4gICAgICAgIGxpc3Q6IFtdLFxyXG4gICAgICAgIGFkZFRhc2tWaXNpYmxlOiBmYWxzZSxcclxuICAgICAgICBzaXRlT2JqOiB7fSxcclxuICAgICAgICBzaXRlSWQ6IG51bGwsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICB0aGlzLnh6cWggPSB0aGlzLiRyb3V0ZS5xdWVyeS54enFoO1xyXG4gICAgICB0aGlzLnNpdGVJZCA9IHRoaXMuJHJvdXRlLnF1ZXJ5LnNpdGVJZDtcclxuICAgICAgdGhpcy5xdWVyeUZsYWcgPSB0aGlzLiRyb3V0ZS5xdWVyeS5xdWVyeUZsYWc7XHJcbiAgICAgIGlmICh0aGlzLmRldGFpbHNQYXJhbWV0ZXIpIHtcclxuICAgICAgICB0aGlzLnh6cWggPSB0aGlzLmRldGFpbHNQYXJhbWV0ZXJcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxvYWREYXRhKCk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBjaGFuZ2VUYWIoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLnRhYkluZGV4ID0gaW5kZXg7XHJcbiAgICAgIH0sXHJcbiAgICAgIGdvRGV0YWlsUGFnZShpdGVtKSB7XHJcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgbmFtZTogJ2FpclN0YXRpb25EZXRhaWwnLFxyXG4gICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgc2l0ZUlkOiBpdGVtLnNpdGVJZCxcclxuICAgICAgICAgICAgc2l0ZU5hbWU6IGl0ZW0uc2l0ZU5hbWUsXHJcbiAgICAgICAgICAgIHNpdGVMZXZlbDogaXRlbS5zaXRlTGV2ZWwsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIuepuuawlOi0qOmHj+ermeeCueivpuaDhVwiLFxyXG4gICAgICAgICAgICB4enFoOiB0aGlzLiRyb3V0ZS5xdWVyeS54enFoXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgbG9hZERhdGEoKSB7XHJcbiAgICAgICAgbGV0IGluZm8gPSB7XHJcbiAgICAgICAgICBkaXZpc2lvbk5hbWU6IHRoaXMueHpxaCxcclxuICAgICAgICAgIHNpdGVJZDogdGhpcy5zaXRlSWQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBvdmVycHJvb2ZBbGVydHMoaW5mbykudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgdGhpcy5saXN0ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgYWRkVGFzayhkYXRhKSB7XHJcbiAgICAgICAgZGF0YS5yZWxhVHlwZSA9ICdhaXInO1xyXG4gICAgICAgIHRoaXMuc2l0ZU9iaiA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5hZGRUYXNrVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIC50YWItd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgYmFja2dyb3VuZDogI2ZhZmFmYTtcclxuXHJcbiAgICAudGFiLWl0ZW0ge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAxMnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoNjMsIDEyMywgMjU1LCAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5vdmVybGlzdCB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgIG1hcmdpbjogMHB4IDVweCAzcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDBweCAxMHB4IDEwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgPiBzcGFuIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcblxyXG4gICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpudGgtY2hpbGQoMikge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjMuN2RlZywgcmdiYSgyNTUsIDE5MSwgMCwgMSkgMCUsIHJnYmEoMjU1LCAyMjksIDE1MCwgMSkgMTAwJSk7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgcGFkZGluZzogMnB4IDEzcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAxNDEsIDI2LCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50aW1lIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRhc2stYnRuIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogI2EyOTlmZjtcclxuICB9XHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwidmFuLXBvcHVwXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdHlsZTogeyB3aWR0aDogXCI5MCVcIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmRpYWxvZyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5kaWFsb2cgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImRpYWxvZ1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBvcHVwV3JhcHBlclwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwi5Lu75Yqh6LCD5bqmXCIpXSksXG4gICAgICAgICAgICAgIF9jKFwidmFuLWZpZWxkXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi5Lu75Yqh5YaF5a65XCIsXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCLor7fovpPlhaXku7vliqHlhoXlrrlcIixcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dGFyZWFcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uY29udGVudCA9ICQkdlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY29udGVudFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcInZhbi1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgY2xpY2thYmxlOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgbmFtZTogXCJwaWNrZXJcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGlzcGF0Y2hVc2VyLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi5aSE572u5a+56LGhXCIsXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCLngrnlh7vpgInmi6nlpITnva7lr7nosaFcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0uc2hvd1BpY2tlciA9IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwb3B1cEZvb3RlclwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidmFuLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJkZWZhdWx0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNsb3NlTW9kYWwgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuWPlua2iFwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2YW4tYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgdHlwZTogXCJpbmZvXCIgfSwgb246IHsgY2xpY2s6IF92bS5vbkFkZFRhc2sgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi56Gu5a6aXCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcInZhbi1wb3B1cFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgcG9zaXRpb246IFwiYm90dG9tXCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5zaG93UGlja2VyLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLnNob3dQaWNrZXIgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcInNob3dQaWNrZXJcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ2YW4tcGlja2VyXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IFwic2hvdy10b29sYmFyXCI6IFwiXCIsIGNvbHVtbnM6IF92bS5jb2x1bW5zIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjb25maXJtOiBfdm0ub25Db25maXJtLFxuICAgICAgICAgICAgICBjYW5jZWw6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2hvd1BpY2tlciA9IGZhbHNlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcInZhbi1uYXYtYmFyXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwi56m65rCU6LSo6YeP6LaF5qCH5ZGK6K2mXCIsIFwibGVmdC1hcnJvd1wiOiBcIlwiLCBmaXhlZDogXCJcIiB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIFwiY2xpY2stbGVmdFwiOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLiRyb3V0ZXIuZ28oLTEpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2Nyb2xsLXRvLXRvcC13cmFwcGVyXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fbChfdm0ubGlzdCwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm92ZXJsaXN0XCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ29EZXRhaWxQYWdlKGl0ZW0pXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCIzMCVcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5zaXRlTmFtZSkpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ucXVlcnlGbGFnID09PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICA/IGl0ZW0uZXhjZWVkRmFjdG9yVmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgIDogaXRlbS5leGNlZWRGYWN0b3JJYXFpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uZXhjZWVkRmFjdG9yTmFtZSkpXSksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGltZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5leGNlZWRSZWNvcmRUaW1lLnN1YnN0cigwLCAxMykpKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5saXN0Lmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgPyBfYyhcInZhbi1lbXB0eVwiLCB7IGF0dHJzOiB7IGRlc2NyaXB0aW9uOiBcIuaaguaXoOaVsOaNrlwiIH0gfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgICksXG4gICAgICBfdm0uYWRkVGFza1Zpc2libGVcbiAgICAgICAgPyBfYyhcInRhc2tEaXNwYXRjaFwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBzaXRlT2JqOiBfdm0uc2l0ZU9iaiB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xvc2VQb3A6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uYWRkVGFza1Zpc2libGUgPSBmYWxzZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJG1hcCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5tYXA7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ21hcCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIG1hcDogZnVuY3Rpb24gbWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudmFuLXBvcHVwW2RhdGEtdi1hMjIzOWNhMl0ge1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcbn1cXG4ucG9wdXBXcmFwcGVyW2RhdGEtdi1hMjIzOWNhMl0ge1xcbiAgcGFkZGluZzogMTZweDtcXG59XFxuLnBvcHVwV3JhcHBlciBwW2RhdGEtdi1hMjIzOWNhMl0ge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4ucG9wdXBXcmFwcGVyIC5jb250ZW50W2RhdGEtdi1hMjIzOWNhMl0ge1xcbiAgcGFkZGluZzogMTBweCAwO1xcbiAgbWFyZ2luOiAxMHB4IDA7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjODg4ZDk1O1xcbiAgbWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDM1MHB4KTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcbn1cXG4ucG9wdXBXcmFwcGVyIC5wb3B1cEZvb3RlcltkYXRhLXYtYTIyMzljYTJdIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRhYi13cmFwcGVyW2RhdGEtdi02OWJlZjg3Yl0ge1xcbiAgcGFkZGluZzogMjBweCAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XFxufVxcbi50YWItd3JhcHBlciAudGFiLWl0ZW1bZGF0YS12LTY5YmVmODdiXSB7XFxuICBkaXNwbGF5OiBpbmxpbmU7XFxuICBtYXJnaW46IDAgNXB4O1xcbiAgcGFkZGluZzogNXB4IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi50YWItd3JhcHBlciAuYWN0aXZlW2RhdGEtdi02OWJlZjg3Yl0ge1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiAjM2Y3YmZmO1xcbn1cXG4ub3Zlcmxpc3RbZGF0YS12LTY5YmVmODdiXSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMHB4IDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuICBtYXJnaW46IDBweCA1cHggM3B4O1xcbiAgcGFkZGluZzogMTBweCAwcHggMTBweCAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG4ub3Zlcmxpc3QgPiBzcGFuW2RhdGEtdi02OWJlZjg3Yl0ge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5vdmVybGlzdCA+IHNwYW5bZGF0YS12LTY5YmVmODdiXTpmaXJzdC1jaGlsZCB7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi5vdmVybGlzdCA+IHNwYW5bZGF0YS12LTY5YmVmODdiXTpudGgtY2hpbGQoMikge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjMuN2RlZywgI2ZmYmYwMCAwJSwgI2ZmZTU5NiAxMDAlKTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHBhZGRpbmc6IDJweCAxM3B4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4ub3Zlcmxpc3QgPiBzcGFuW2RhdGEtdi02OWJlZjg3Yl06bnRoLWNoaWxkKDMpIHtcXG4gIGNvbG9yOiAjZmY4ZDFhO1xcbn1cXG4ub3Zlcmxpc3QgLnRpbWVbZGF0YS12LTY5YmVmODdiXSB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcbi50YXNrLWJ0bltkYXRhLXYtNjliZWY4N2JdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAxMHB4O1xcbiAgYm90dG9tOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogI2EyOTlmZjtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90YXNrRGlzcGF0Y2gudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTIyMzljYTImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJjZGI3NGMxNFwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Rhc2tEaXNwYXRjaC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hMjIzOWNhMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Rhc2tEaXNwYXRjaC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hMjIzOWNhMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02OWJlZjg3YiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjE0ZmI4MzZlXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjliZWY4N2ImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02OWJlZjg3YiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcclxubGV0IGJhc2VVcmwgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBcIi9haXJcIiA6IFwiL2FpclwiOyAvL+acjeWKoeWZqOaYr2Fpcuexu++8jOacrOWcsOayoeacieWKoFxyXG4vKlxyXG7pppbpobXnqbrmsJTotKjph4/mjqXlj6NcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5raW5nKGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2NvbXBldGl0aW9uL3JhbmtpbmcnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3lsI/ml7bjgIHml6XmlbDmja5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhaXJDaXR5RGF0YShkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5L2FpckNpdHlEYXRhJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t6ICD5qC45oOF5Ya1XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWlyQ2l0eUFzc2Vzc0NvbmRpdGlvbihkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5L2FpckNpdHlBc3Nlc3NDb25kaXRpb24nLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3otovlir/nu5/orqFcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhaXJDaXR5QXNzZXNzVGVuZGVuY3koZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eS9haXJDaXR5QXNzZXNzVGVuZGVuY3knLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3msaHmn5PnianljaDmr5QtLeihjOaUv+WMuuWfn+eahFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFpclBvbGx1dGFudFJhdGlvKGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHkvYWlyUG9sbHV0YW50UmF0aW8nLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3msaHmn5PnianljaDmr5QtLeermeeCueeahFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFpclBvbGx1dGFudFNpdGVSYXRpbyhkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9haXJQb2xsdXRhbnRTaXRlUmF0aW8nLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3msaHmn5PnianlubTluqbnu5/orqEtLeWMuuWfn+eahFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFpclBvbGx1dGFudFllYXIoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eS9haXJQb2xsdXRhbnRZZWFyJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6ZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3msaHmn5PnianlubTluqbnu5/orqEtLeWNleS4quermeeCueeahFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFpclBvbGx1dGFudFNpdGVZZWFyKGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHlTaXRlL2FpclBvbGx1dGFudFNpdGVZZWFyJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t5o6S5ZCNXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWlyUXVhbGl0eVJhbmtpbmcoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eS9haXJRdWFsaXR5UmFua2luZycsXHJcblx0XHRtZXRob2Q6ICdnZXQnLFxyXG5cdFx0cGFyYW1zOiBkYXRhXHJcblx0fSlcclxufVxyXG4vKlxyXG7nqbrmsJTotKjph48tLeepuuawlOi0qOmHj+ermeeCueaVsOaNri3lm73ogIMv55yB6ICD5YiX6KGoXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWlyUXVhbGl0eVNpdGVMaXN0KGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHlTaXRlL2FpclF1YWxpdHlTaXRlc0RhdGEnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3nqbrmsJTnq5nngrnmjpLlkI1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhaXJSYW5raW5nKGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHlTaXRlL2FpclJhbmtpbmcnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3ov5EyNOWwj+aXtui2heagh+WRiuitplxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG92ZXJwcm9vZkFsZXJ0cyhkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9vdmVycHJvb2ZBbGVydHMnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3nqbrmsJTnq5nngrnmjpLlkI1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhaXJSYW5raW5hc2Rhc2RhZyhkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9haXJSYW5raW5nJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t5Y2V56uZ54K556uZ54K55pWw5o2uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWlyUXVhbGl0eVNpdGVEYXRhKGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHlTaXRlL2FpclF1YWxpdHlTaXRlRGF0YScsXHJcblx0XHRtZXRob2Q6ICdnZXQnLFxyXG5cdFx0cGFyYW1zOiBkYXRhXHJcblx0fSlcclxufVxyXG4vKlxyXG7nqbrmsJTotKjph48tLeWNleermeeCueermeeCueWwj+aXtuOAgeaXpeaVsOaNri3mqKHlnZdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhaXJRdWFsaXR5U2l0ZURhdGFUeXBlKGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHlTaXRlL2FpclF1YWxpdHlTaXRlRGF0YVR5cGUnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3ljZXnq5nngrnnq5nngrnlsI/ml7bjgIHml6XmlbDmja4t5a+55q+U5pWw5o2u5oqY57q/5Zu+XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2l0ZUNvbXBhcmlzb24oZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eVNpdGUvc2l0ZUNvbXBhcmlzb24nLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3ljZXnq5nnq5nngrnmlbDmja4g5LqU5YiG6ZKfIOWQjOavlC0t5oqY57q/5Zu+5ZKM5pWw5o2u5YiX6KGoXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWlyUXVhbGl0eVNpdGVEYXRhVHlwZUFub3RoZXIoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eVNpdGUvYWlyUXVhbGl0eVNpdGVEYXRhVHlwZUFub3RoZXInLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3nqbrmsJTnq5nngrlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBaXJTaXRlKGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHlTaXRlL2dldEFpclNpdGUnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3nqbrmsJTnq5nngrnml6XljoZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhaXJRdWFsaXR5U2l0ZUNhbGVuZGFyKGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHlTaXRlL2FpclF1YWxpdHlTaXRlQ2FsZW5kYXInLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3nqbrmsJTnq5nngrnml6XljoZpYXFpXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaWFxaUNhbGVuZGFyKGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHlTaXRlL2lhcWlDYWxlbmRhcicsXHJcblx0XHRtZXRob2Q6ICdnZXQnLFxyXG5cdFx0cGFyYW1zOiBkYXRhXHJcblx0fSlcclxufVxyXG4vKlxyXG7nqbrmsJTotKjph48tLeepuuawlOermeeCueWFqOW5tOaXpeWOhlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFpclllYXJDYWxlbmRhcihkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9haXJZZWFyQ2FsZW5kYXInLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3lpKnmsJTpooTmiqVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB3ZWF0aGVyRm9yZWNhc3QoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eS93ZWF0aGVyRm9yZWNhc3QnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3ooYzmlL/ljLrliJJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREaXZpc2lvbk5hbWUoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eS9nZXREaXZpc2lvbk5hbWUnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdC8vIHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuXHJcbi8qXHJcbuepuuawlOi0qOmHjy0t5YWo5bm056m65rCU6LSo6YeP5Y2g5q+UXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24geWVhckFpclF1YWxpdHlSYXRpbyhkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5L3llYXJBaXJRdWFsaXR5UmF0aW8nLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCULeermeeCueepuuawlOi0qOmHj+aOkuWQjVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFpclNpdGVRdWFsaXR5UmFua2luZyhkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5L2FpclNpdGVRdWFsaXR5UmFua2luZycsXHJcblx0XHRtZXRob2Q6ICdnZXQnLFxyXG5cdFx0cGFyYW1zOiBkYXRhXHJcblx0fSlcclxufVxyXG4vKlxyXG7nqbrmsJQt5Yy65Y6/56m65rCU6LSo6YeP5o6S5ZCNXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVnaW9uUXVhbGl0eVJhbmtpbmcoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eS9yZWdpb25RdWFsaXR5UmFua2luZycsXHJcblx0XHRtZXRob2Q6ICdnZXQnLFxyXG5cdFx0cGFyYW1zOiBkYXRhXHJcblx0fSlcclxufVxyXG4vKlxyXG7nqbrmsJQt5Yy65Y6/56m65rCU5o+P6L+wXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWlyUmVnaW9uKGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHkvYWlyUmVnaW9uJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlC3nq5nngrnmtonmsJTmsaHmn5PmupDmlbDmja5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2xsU2l6ZShkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9wb2xsU2l6ZScsXHJcblx0XHRtZXRob2Q6ICdnZXQnLFxyXG5cdFx0cGFyYW1zOiBkYXRhXHJcblx0fSlcclxufVxyXG4vKlxyXG7nqbrmsJQt56uZ54K55raJ5rCU5rGh5p+T5rqQ5LiA57qnXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHlwZUxpc3QoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eVNpdGUvdHlwZUxpc3QnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCULeermeeCuea2ieawlOaxoeafk+a6kOWtkOmbhlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyZWVMaXN0KGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHlTaXRlL3RyZWVMaXN0JyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlC3nq5nngrnmtonmsJTmsaHmn5PmupDlrZDpm4bnq5nngrnkv6Hmga9cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2xsTGlzdChkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9wb2xsTGlzdCcsXHJcblx0XHRtZXRob2Q6ICdnZXQnLFxyXG5cdFx0cGFyYW1zOiBkYXRhXHJcblx0fSlcclxufVxyXG4vKlxyXG7nqbrmsJQt56m65rCU6aKE5oqlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVnaW9uUHJlZGljdGlvbihkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9yZWdpb25QcmVkaWN0aW9uJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlC3nq5nngrnlkajovrnmsJTosaHnq5lcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhaXJNbChkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9haXJNbCcsXHJcblx0XHRtZXRob2Q6ICdnZXQnLFxyXG5cdFx0cGFyYW1zOiBkYXRhXHJcblx0fSlcclxufVxyXG4iLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XHJcblxyXG4vKipcclxuICog5Lu75Yqh5YiX6KGoXHJcbiAqIEBwYXJhbSB1c2VySWQg5b2T5YmN55So5oi3aWRcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRhc2tMaXN0KCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9wb2xsdXQvcG9sbHV0aW9uL3Rhc2tMaXN0JyxcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgdXNlcklkOiAnJ1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlj5HluIPku7vliqFcclxuICogQHBhcmFtIGRhdGEg5Lu75Yqh5bGe5oCnXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3N0VGFza0FkZChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL3BvbGx1dC9wb2xsdXRpb24vaW5zVGFzaycsXHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGRhdGE6IGRhdGFcclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICog5aSE572u5a+56LGh5LiL5ouJXHJcbiAqIEBwYXJhbSBkaXZpc2lvbl9jb2RlIOW9k+WJjeeZu+W9leeUqOaIt+eahOihjOaUv+WMuuWIklxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFza0Rpc3Bvc2UoKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL3BzL3VzZXIvZ2V0QWxsVXNlcicsXHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgcGFyYW1zOiB7XHJcblxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlj43ppohcclxuICogQHBhcmFtIGRhdGEg5Y+N6aaI5bGe5oCnXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3N0VGFza0ZlZWRiYWNrKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvcG9sbHV0L3BvbGx1dGlvbi91cGRUYXNrJyxcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgZGF0YTogZGF0YVxyXG4gIH0pXHJcbn1cclxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi90YXNrRGlzcGF0Y2gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWEyMjM5Y2EyJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3Rhc2tEaXNwYXRjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3Rhc2tEaXNwYXRjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vdGFza0Rpc3BhdGNoLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWEyMjM5Y2EyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYTIyMzljYTJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYTIyMzljYTInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYTIyMzljYTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYTIyMzljYTInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3Rhc2tEaXNwYXRjaC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTIyMzljYTImc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYTIyMzljYTInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL3Rhc2tEaXNwYXRjaC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Rhc2tEaXNwYXRjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGFza0Rpc3BhdGNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Rhc2tEaXNwYXRjaC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hMjIzOWNhMiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Rhc2tEaXNwYXRjaC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTIyMzljYTImc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02OWJlZjg3YiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02OWJlZjg3YiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjY5YmVmODdiXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzY5YmVmODdiJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY5YmVmODdiJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY5YmVmODdiJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjliZWY4N2Imc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjliZWY4N2InLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9haXJIb21lUGFnZS9haXJBbGFybS9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02OWJlZjg3YiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02OWJlZjg3YiZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=