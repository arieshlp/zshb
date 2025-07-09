(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[105],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/feedback/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/feedback/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_common_feedback_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/common/feedback/api */ "./src/components/common/feedback/api.js");
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


var lastPageTemp;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "index",
  data: function data() {
    return {
      lastPageTitle: '',
      lastPage: {},
      text: ''
    };
  },
  beforeRouteEnter: function beforeRouteEnter(to, from, next) {
    next();
    lastPageTemp = from;
  },
  mounted: function mounted() {
    this.lastPage = lastPageTemp;
    this.lastPageTitle = lastPageTemp.meta.title; // this.lastPage

    console.log(lastPageTemp);
  },
  methods: {
    toList: function toList() {
      this.$router.replace('/feedbackResult');
    },
    submit: function submit() {
      var _this = this;

      Object(_components_common_feedback_api__WEBPACK_IMPORTED_MODULE_2__["submitFeedback"])({
        phone: localStorage.getItem('phone'),
        fkmk: this.lastPageTitle,
        fkmx: this.text,
        fkly: this.lastPage.fullPath
      }).then(function (res) {
        if (res.data) {
          vant__WEBPACK_IMPORTED_MODULE_3__["Dialog"].alert({
            title: '提交成功',
            message: '提交成功，我们会尽快处理！'
          }).then(function () {
            _this.$router.replace('/feedbackResult');
          });
        } else {
          Object(vant__WEBPACK_IMPORTED_MODULE_3__["Notify"])('提交失败');
        }
      }).catch(function (e) {
        Object(vant__WEBPACK_IMPORTED_MODULE_3__["Notify"])('提交失败');
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/feedback/index.vue?vue&type=template&id=71d45262&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/feedback/index.vue?vue&type=template&id=71d45262&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        attrs: { title: "使用意见", "left-arrow": "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
          "click-right": _vm.toList,
        },
        scopedSlots: _vm._u([
          {
            key: "right",
            fn: function () {
              return [
                _c("span", { staticStyle: { "font-weight": "normal" } }, [
                  _vm._v("处理情况"),
                ]),
              ]
            },
            proxy: true,
          },
        ]),
      }),
      _c("div", { staticClass: "name-field" }, [
        _c("span", { staticClass: "label" }, [_vm._v("模块名称")]),
        _c("span", { staticClass: "value" }, [
          _vm._v(_vm._s(_vm.lastPageTitle)),
        ]),
      ]),
      _c("p", { staticStyle: { margin: "8px 24px", "font-size": "14px" } }, [
        _vm._v("反馈内容"),
      ]),
      _c(
        "div",
        { staticClass: "textarea-wrapper" },
        [
          _c("van-field", {
            attrs: { type: "textarea", placeholder: "请输入反馈内容" },
            model: {
              value: _vm.text,
              callback: function ($$v) {
                _vm.text = $$v
              },
              expression: "text",
            },
          }),
        ],
        1
      ),
      _c(
        "div",
        { staticClass: "button-wrapper" },
        [
          _c(
            "van-button",
            {
              attrs: { type: "info", round: "", block: "" },
              on: { click: _vm.submit },
            },
            [_vm._v("提交")]
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

/***/ "./node_modules/core-js/modules/es.string.split.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.split.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/core-js/internals/is-null-or-undefined.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");
var stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ "./node_modules/core-js/internals/regexp-sticky-helpers.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min = Math.min;
var push = uncurryThis([].push);
var stringSlice = uncurryThis(''.slice);

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

var BUGGY = 'abbc'.split(/(b)*/)[1] === 'c' ||
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  'test'.split(/(?:)/, -1).length !== 4 ||
  'ab'.split(/(?:ab)*/).length !== 2 ||
  '.'.split(/(.?)(.?)/).length !== 4 ||
  // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
  '.'.split(/()()/).length > 1 ||
  ''.split(/.?/).length;

// @@split logic
fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit = '0'.split(undefined, 0).length ? function (separator, limit) {
    return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
  } : nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = isNullOrUndefined(separator) ? undefined : getMethod(separator, SPLIT);
      return splitter
        ? call(splitter, separator, O, limit)
        : call(internalSplit, toString(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject(this);
      var S = toString(string);

      if (!BUGGY) {
        var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
        if (res.done) return res.value;
      }

      var C = speciesConstructor(rx, RegExp);
      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (UNSUPPORTED_Y ? 'g' : 'y');
      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return regExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = regExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          push(A, stringSlice(S, p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            push(A, z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      push(A, stringSlice(S, p));
      return A;
    }
  ];
}, BUGGY || !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/feedback/index.vue?vue&type=style&index=0&id=71d45262&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/feedback/index.vue?vue&type=style&index=0&id=71d45262&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".name-field[data-v-71d45262] {\n  margin: 16px 8px;\n  height: 40px;\n  line-height: 40px;\n  background: linear-gradient(225deg, #ebf1ff, #e6ecfc);\n  font-size: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  border-radius: 20px;\n  padding: 0 20px;\n}\n.name-field .label[data-v-71d45262] {\n  color: rgba(18, 18, 54, 0.5);\n}\n.name-field .value[data-v-71d45262] {\n  color: #447bfc;\n}\n.textarea-wrapper[data-v-71d45262] {\n  margin: 8px;\n  border-radius: 20px;\n  padding: 10px;\n  /*background: white;*/\n  /*::v-deep .van-field__control {*/\n  /*  min-height: 150px;*/\n  /*}*/\n}\n.button-wrapper[data-v-71d45262] {\n  margin: 16px 8px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/feedback/index.vue?vue&type=style&index=0&id=71d45262&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/feedback/index.vue?vue&type=style&index=0&id=71d45262&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=71d45262&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/feedback/index.vue?vue&type=style&index=0&id=71d45262&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("120175bc", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/components/common/feedback/api.js":
/*!***********************************************!*\
  !*** ./src/components/common/feedback/api.js ***!
  \***********************************************/
/*! exports provided: submitFeedback, queryFeedback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitFeedback", function() { return submitFeedback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryFeedback", function() { return queryFeedback; });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);



 // axios.defaults.baseURL = process.env.NODE_ENV === "production" ? "http://10.221.29.4:48686/wrygjApp133" : "./wry";

axios__WEBPACK_IMPORTED_MODULE_3___default.a.defaults.baseURL = "http://10.221.29.4:48686/wrygjApp133"; // 创建axios实例

var service = axios__WEBPACK_IMPORTED_MODULE_3___default.a.create({
  timeout: 20000,
  retry: 2,
  // 请求次数,
  retryInterval: 1000 // 请求超时后，1s再次请求

});
service.interceptors.request.use(function (config) {
  var tempUrl = config.url.split("/");

  if (tempUrl[1] === "app") {
    config.baseURL = "http://10.221.29.4:7001";
  } else if (tempUrl[1] === "health") {
    config.baseURL = Object({"NODE_ENV":"development","VUE_APP_URL_app":"http://10.221.29.4:7001","BASE_URL":""}).VUE_APP_URL_health;
  } else if (tempUrl[1] === "minio") {
    config.baseURL = Object({"NODE_ENV":"development","VUE_APP_URL_app":"http://10.221.29.4:7001","BASE_URL":""}).VUE_APP_URL_minio;
  } else if (tempUrl[1] === "pollution_survey") {
    config.baseURL = Object({"NODE_ENV":"development","VUE_APP_URL_app":"http://10.221.29.4:7001","BASE_URL":""}).VUE_APP_URL_pollution_survey;
  } else if (tempUrl[1] === "system-service-login") {
    config.baseURL = Object({"NODE_ENV":"development","VUE_APP_URL_app":"http://10.221.29.4:7001","BASE_URL":""}).VUE_APP_URL_system_service_login;
  } // console.log(config.baseURL)

  /*if (store.state.user.user?.YH_ID) {
  config.headers["yhId"] = store.state.user.user.YH_ID;
  }
  if (store.state.user.user?.Token) {
  config.headers["X-Access-Token"] = store.state.user.user.Token;
  }*/


  return config;
}, function (error) {
  console.log(error); // for debug

  return Promise.reject(error);
});
service.interceptors.response.use(function (response) {
  //接口9999 可能登录异常或token过期重新登录

  /*if (response.data.code === '500' && response.data.msg === 'token异常') {
  router.push('/login')
  }*/
  return response.data;
}, function (error) {
  Promise.reject(error);
}); // 反馈

var submitFeedback = function submitFeedback(params) {
  return service({
    url: '/log/cgXtFkb',
    method: 'get',
    params: params
  });
};
var queryFeedback = function queryFeedback(params) {
  return service({
    url: '/log/cgXtFkb/show',
    method: 'get',
    params: params
  });
};

/***/ }),

/***/ "./src/views/feedback/index.vue":
/*!**************************************!*\
  !*** ./src/views/feedback/index.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_71d45262_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=71d45262&scoped=true& */ "./src/views/feedback/index.vue?vue&type=template&id=71d45262&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/feedback/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_71d45262_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=71d45262&lang=scss&scoped=true& */ "./src/views/feedback/index.vue?vue&type=style&index=0&id=71d45262&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_71d45262_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_71d45262_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "71d45262",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/feedback/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/feedback/index.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/views/feedback/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/feedback/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/feedback/index.vue?vue&type=style&index=0&id=71d45262&lang=scss&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./src/views/feedback/index.vue?vue&type=style&index=0&id=71d45262&lang=scss&scoped=true& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_71d45262_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=71d45262&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/feedback/index.vue?vue&type=style&index=0&id=71d45262&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_71d45262_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_71d45262_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_71d45262_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_71d45262_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/feedback/index.vue?vue&type=template&id=71d45262&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./src/views/feedback/index.vue?vue&type=template&id=71d45262&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_71d45262_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=71d45262&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/feedback/index.vue?vue&type=template&id=71d45262&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_71d45262_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_71d45262_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2ZlZWRiYWNrL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZmVlZGJhY2svaW5kZXgudnVlP2E1MTQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuc3BsaXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2ZlZWRiYWNrL2luZGV4LnZ1ZT80N2Y5Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9mZWVkYmFjay9pbmRleC52dWU/MWM3ZiIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vZmVlZGJhY2svYXBpLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9mZWVkYmFjay9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2ZlZWRiYWNrL2luZGV4LnZ1ZT9jYTg0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9mZWVkYmFjay9pbmRleC52dWU/OTA5ZiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZmVlZGJhY2svaW5kZXgudnVlP2E0ODkiXSwibmFtZXMiOlsiYXhpb3MiLCJkZWZhdWx0cyIsImJhc2VVUkwiLCJzZXJ2aWNlIiwiY3JlYXRlIiwidGltZW91dCIsInJldHJ5IiwicmV0cnlJbnRlcnZhbCIsImludGVyY2VwdG9ycyIsInJlcXVlc3QiLCJ1c2UiLCJjb25maWciLCJ0ZW1wVXJsIiwidXJsIiwic3BsaXQiLCJwcm9jZXNzIiwiVlVFX0FQUF9VUkxfaGVhbHRoIiwiVlVFX0FQUF9VUkxfbWluaW8iLCJWVUVfQVBQX1VSTF9wb2xsdXRpb25fc3VydmV5IiwiVlVFX0FQUF9VUkxfc3lzdGVtX3NlcnZpY2VfbG9naW4iLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJQcm9taXNlIiwicmVqZWN0IiwicmVzcG9uc2UiLCJkYXRhIiwic3VibWl0RmVlZGJhY2siLCJwYXJhbXMiLCJtZXRob2QiLCJxdWVyeUZlZWRi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Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy8xMDUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBzdHlsZT1cImhlaWdodDogMTAwdmhcIj5cclxuICAgIDx2YW4tbmF2LWJhciB0aXRsZT1cIuS9v+eUqOaEj+ingVwiIGxlZnQtYXJyb3cgQGNsaWNrLWxlZnQ9XCIkcm91dGVyLmdvKC0xKVwiIEBjbGljay1yaWdodD1cInRvTGlzdFwiPlxyXG4gICAgICA8dGVtcGxhdGUgI3JpZ2h0PjxzcGFuIHN0eWxlPVwiZm9udC13ZWlnaHQ6IG5vcm1hbFwiPuWkhOeQhuaDheWGtTwvc3Bhbj48L3RlbXBsYXRlPlxyXG4gICAgPC92YW4tbmF2LWJhcj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwibmFtZS1maWVsZFwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+5qih5Z2X5ZCN56ewPC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cInZhbHVlXCI+e3sgbGFzdFBhZ2VUaXRsZSB9fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxwIHN0eWxlPVwibWFyZ2luOiA4cHggMjRweDsgZm9udC1zaXplOiAxNHB4XCI+5Y+N6aaI5YaF5a65PC9wPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0YXJlYS13cmFwcGVyXCI+XHJcbiAgICAgIDx2YW4tZmllbGQgdHlwZT1cInRleHRhcmVhXCIgdi1tb2RlbD1cInRleHRcIiBwbGFjZWhvbGRlcj1cIuivt+i+k+WFpeWPjemmiOWGheWuuVwiPjwvdmFuLWZpZWxkPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImJ1dHRvbi13cmFwcGVyXCI+XHJcbiAgICAgIDx2YW4tYnV0dG9uIHR5cGU9XCJpbmZvXCIgcm91bmQgYmxvY2sgQGNsaWNrPVwic3VibWl0XCI+5o+Q5LqkPC92YW4tYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCB7c3VibWl0RmVlZGJhY2t9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2NvbW1vbi9mZWVkYmFjay9hcGlcIjtcclxuICBpbXBvcnQge0RpYWxvZywgTm90aWZ5fSBmcm9tIFwidmFudFwiO1xyXG5cclxuICBsZXQgbGFzdFBhZ2VUZW1wXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJpbmRleFwiLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBsYXN0UGFnZVRpdGxlOiAnJyxcclxuICAgICAgICBsYXN0UGFnZToge30sXHJcbiAgICAgICAgdGV4dDogJydcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGJlZm9yZVJvdXRlRW50ZXIodG8sIGZyb20sIG5leHQpIHtcclxuICAgICAgbmV4dCgpXHJcbiAgICAgIGxhc3RQYWdlVGVtcCA9IGZyb21cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICB0aGlzLmxhc3RQYWdlID0gbGFzdFBhZ2VUZW1wXHJcbiAgICAgIHRoaXMubGFzdFBhZ2VUaXRsZSA9IGxhc3RQYWdlVGVtcC5tZXRhLnRpdGxlXHJcbiAgICAgIC8vIHRoaXMubGFzdFBhZ2VcclxuICAgICAgY29uc29sZS5sb2cobGFzdFBhZ2VUZW1wKVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgdG9MaXN0KCkge1xyXG4gICAgICAgIHRoaXMuJHJvdXRlci5yZXBsYWNlKCcvZmVlZGJhY2tSZXN1bHQnKVxyXG4gICAgICB9LFxyXG4gICAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgc3VibWl0RmVlZGJhY2soe1xyXG4gICAgICAgICAgcGhvbmU6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwaG9uZScpLFxyXG4gICAgICAgICAgZmttazogdGhpcy5sYXN0UGFnZVRpdGxlLFxyXG4gICAgICAgICAgZmtteDogdGhpcy50ZXh0LFxyXG4gICAgICAgICAgZmtseTogdGhpcy5sYXN0UGFnZS5mdWxsUGF0aCxcclxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzLmRhdGEpIHtcclxuICAgICAgICAgICAgRGlhbG9nLmFsZXJ0KHtcclxuICAgICAgICAgICAgICB0aXRsZTogJ+aPkOS6pOaIkOWKnycsXHJcbiAgICAgICAgICAgICAgbWVzc2FnZTogJ+aPkOS6pOaIkOWKn++8jOaIkeS7rOS8muWwveW/q+WkhOeQhu+8gSdcclxuICAgICAgICAgICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnJlcGxhY2UoJy9mZWVkYmFja1Jlc3VsdCcpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBOb3RpZnkoJ+aPkOS6pOWksei0pScpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSkuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICBOb3RpZnkoJ+aPkOS6pOWksei0pScpXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgLm5hbWUtZmllbGQge1xyXG4gICAgbWFyZ2luOiAxNnB4IDhweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyNWRlZywgcmdiYSgyMzUsIDI0MSwgMjU1LCAxKSwgcmdiYSgyMzAsIDIzNiwgMjUyLCAxKSk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcblxyXG4gICAgLmxhYmVsIHtcclxuICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgIH1cclxuXHJcbiAgICAudmFsdWUge1xyXG4gICAgICBjb2xvcjogIzQ0N2JmYztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50ZXh0YXJlYS13cmFwcGVyIHtcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAvKmJhY2tncm91bmQ6IHdoaXRlOyovXHJcblxyXG4gICAgLy9taW4taGVpZ2h0OiAzMjBweDtcclxuICAgIC5jb250ZW50IHtcclxuICAgICAgLy9ib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC8qOjp2LWRlZXAgLnZhbi1maWVsZF9fY29udHJvbCB7Ki9cclxuICAgIC8qICBtaW4taGVpZ2h0OiAxNTBweDsqL1xyXG4gICAgLyp9Ki9cclxuICB9XHJcblxyXG4gIC5idXR0b24td3JhcHBlciB7XHJcbiAgICBtYXJnaW46IDE2cHggOHB4O1xyXG4gIH1cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCIxMDB2aFwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcInZhbi1uYXYtYmFyXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwi5L2/55So5oSP6KeBXCIsIFwibGVmdC1hcnJvd1wiOiBcIlwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgXCJjbGljay1sZWZ0XCI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0uJHJvdXRlci5nbygtMSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xpY2stcmlnaHRcIjogX3ZtLnRvTGlzdCxcbiAgICAgICAgfSxcbiAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiBcInJpZ2h0XCIsXG4gICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY1N0eWxlOiB7IFwiZm9udC13ZWlnaHRcIjogXCJub3JtYWxcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIuWkhOeQhuaDheWGtVwiKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0pLFxuICAgICAgfSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hbWUtZmllbGRcIiB9LCBbXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW192bS5fdihcIuaooeWdl+WQjeensFwiKV0pLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ2YWx1ZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sYXN0UGFnZVRpdGxlKSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfYyhcInBcIiwgeyBzdGF0aWNTdHlsZTogeyBtYXJnaW46IFwiOHB4IDI0cHhcIiwgXCJmb250LXNpemVcIjogXCIxNHB4XCIgfSB9LCBbXG4gICAgICAgIF92bS5fdihcIuWPjemmiOWGheWuuVwiKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGV4dGFyZWEtd3JhcHBlclwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInZhbi1maWVsZFwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRleHRhcmVhXCIsIHBsYWNlaG9sZGVyOiBcIuivt+i+k+WFpeWPjemmiOWGheWuuVwiIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnRleHQsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnRleHQgPSAkJHZcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0ZXh0XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnV0dG9uLXdyYXBwZXJcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInZhbi1idXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJpbmZvXCIsIHJvdW5kOiBcIlwiLCBibG9jazogXCJcIiB9LFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnN1Ym1pdCB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCLmj5DkuqRcIildXG4gICAgICAgICAgKSxcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkdmFuY2Utc3RyaW5nLWluZGV4Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG52YXIgc3RpY2t5SGVscGVycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtc3RpY2t5LWhlbHBlcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgVU5TVVBQT1JURURfWSA9IHN0aWNreUhlbHBlcnMuVU5TVVBQT1JURURfWTtcbnZhciBNQVhfVUlOVDMyID0gMHhGRkZGRkZGRjtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbnZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbi8vIENocm9tZSA1MSBoYXMgYSBidWdneSBcInNwbGl0XCIgaW1wbGVtZW50YXRpb24gd2hlbiBSZWdFeHAjZXhlYyAhPT0gbmF0aXZlRXhlY1xuLy8gV2VleCBKUyBoYXMgZnJvemVuIGJ1aWx0LWluIHByb3RvdHlwZXMsIHNvIHVzZSB0cnkgLyBjYXRjaCB3cmFwcGVyXG52YXIgU1BMSVRfV09SS1NfV0lUSF9PVkVSV1JJVFRFTl9FWEVDID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlZ2V4cC9uby1lbXB0eS1ncm91cCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICB2YXIgcmUgPSAvKD86KS87XG4gIHZhciBvcmlnaW5hbEV4ZWMgPSByZS5leGVjO1xuICByZS5leGVjID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gb3JpZ2luYWxFeGVjLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gIHZhciByZXN1bHQgPSAnYWInLnNwbGl0KHJlKTtcbiAgcmV0dXJuIHJlc3VsdC5sZW5ndGggIT09IDIgfHwgcmVzdWx0WzBdICE9PSAnYScgfHwgcmVzdWx0WzFdICE9PSAnYic7XG59KTtcblxudmFyIEJVR0dZID0gJ2FiYmMnLnNwbGl0KC8oYikqLylbMV0gPT09ICdjJyB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVnZXhwL25vLWVtcHR5LWdyb3VwIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gICd0ZXN0Jy5zcGxpdCgvKD86KS8sIC0xKS5sZW5ndGggIT09IDQgfHxcbiAgJ2FiJy5zcGxpdCgvKD86YWIpKi8pLmxlbmd0aCAhPT0gMiB8fFxuICAnLicuc3BsaXQoLyguPykoLj8pLykubGVuZ3RoICE9PSA0IHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWdleHAvbm8tZW1wdHktY2FwdHVyaW5nLWdyb3VwLCByZWdleHAvbm8tZW1wdHktZ3JvdXAgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgJy4nLnNwbGl0KC8oKSgpLykubGVuZ3RoID4gMSB8fFxuICAnJy5zcGxpdCgvLj8vKS5sZW5ndGg7XG5cbi8vIEBAc3BsaXQgbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdzcGxpdCcsIGZ1bmN0aW9uIChTUExJVCwgbmF0aXZlU3BsaXQsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICB2YXIgaW50ZXJuYWxTcGxpdCA9ICcwJy5zcGxpdCh1bmRlZmluZWQsIDApLmxlbmd0aCA/IGZ1bmN0aW9uIChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgcmV0dXJuIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwID8gW10gOiBjYWxsKG5hdGl2ZVNwbGl0LCB0aGlzLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgfSA6IG5hdGl2ZVNwbGl0O1xuXG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc3BsaXRgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zcGxpdFxuICAgIGZ1bmN0aW9uIHNwbGl0KHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgIHZhciBzcGxpdHRlciA9IGlzTnVsbE9yVW5kZWZpbmVkKHNlcGFyYXRvcikgPyB1bmRlZmluZWQgOiBnZXRNZXRob2Qoc2VwYXJhdG9yLCBTUExJVCk7XG4gICAgICByZXR1cm4gc3BsaXR0ZXJcbiAgICAgICAgPyBjYWxsKHNwbGl0dGVyLCBzZXBhcmF0b3IsIE8sIGxpbWl0KVxuICAgICAgICA6IGNhbGwoaW50ZXJuYWxTcGxpdCwgdG9TdHJpbmcoTyksIHNlcGFyYXRvciwgbGltaXQpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNwbGl0XG4gICAgLy9cbiAgICAvLyBOT1RFOiBUaGlzIGNhbm5vdCBiZSBwcm9wZXJseSBwb2x5ZmlsbGVkIGluIGVuZ2luZXMgdGhhdCBkb24ndCBzdXBwb3J0XG4gICAgLy8gdGhlICd5JyBmbGFnLlxuICAgIGZ1bmN0aW9uIChzdHJpbmcsIGxpbWl0KSB7XG4gICAgICB2YXIgcnggPSBhbk9iamVjdCh0aGlzKTtcbiAgICAgIHZhciBTID0gdG9TdHJpbmcoc3RyaW5nKTtcblxuICAgICAgaWYgKCFCVUdHWSkge1xuICAgICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKGludGVybmFsU3BsaXQsIHJ4LCBTLCBsaW1pdCwgaW50ZXJuYWxTcGxpdCAhPT0gbmF0aXZlU3BsaXQpO1xuICAgICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBDID0gc3BlY2llc0NvbnN0cnVjdG9yKHJ4LCBSZWdFeHApO1xuICAgICAgdmFyIHVuaWNvZGVNYXRjaGluZyA9IHJ4LnVuaWNvZGU7XG4gICAgICB2YXIgZmxhZ3MgPSAocnguaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAocngubXVsdGlsaW5lID8gJ20nIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChyeC51bmljb2RlID8gJ3UnIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChVTlNVUFBPUlRFRF9ZID8gJ2cnIDogJ3knKTtcbiAgICAgIC8vIF4oPyArIHJ4ICsgKSBpcyBuZWVkZWQsIGluIGNvbWJpbmF0aW9uIHdpdGggc29tZSBTIHNsaWNpbmcsIHRvXG4gICAgICAvLyBzaW11bGF0ZSB0aGUgJ3knIGZsYWcuXG4gICAgICB2YXIgc3BsaXR0ZXIgPSBuZXcgQyhVTlNVUFBPUlRFRF9ZID8gJ14oPzonICsgcnguc291cmNlICsgJyknIDogcngsIGZsYWdzKTtcbiAgICAgIHZhciBsaW0gPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gTUFYX1VJTlQzMiA6IGxpbWl0ID4+PiAwO1xuICAgICAgaWYgKGxpbSA9PT0gMCkgcmV0dXJuIFtdO1xuICAgICAgaWYgKFMubGVuZ3RoID09PSAwKSByZXR1cm4gcmVnRXhwRXhlYyhzcGxpdHRlciwgUykgPT09IG51bGwgPyBbU10gOiBbXTtcbiAgICAgIHZhciBwID0gMDtcbiAgICAgIHZhciBxID0gMDtcbiAgICAgIHZhciBBID0gW107XG4gICAgICB3aGlsZSAocSA8IFMubGVuZ3RoKSB7XG4gICAgICAgIHNwbGl0dGVyLmxhc3RJbmRleCA9IFVOU1VQUE9SVEVEX1kgPyAwIDogcTtcbiAgICAgICAgdmFyIHogPSByZWdFeHBFeGVjKHNwbGl0dGVyLCBVTlNVUFBPUlRFRF9ZID8gc3RyaW5nU2xpY2UoUywgcSkgOiBTKTtcbiAgICAgICAgdmFyIGU7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB6ID09PSBudWxsIHx8XG4gICAgICAgICAgKGUgPSBtaW4odG9MZW5ndGgoc3BsaXR0ZXIubGFzdEluZGV4ICsgKFVOU1VQUE9SVEVEX1kgPyBxIDogMCkpLCBTLmxlbmd0aCkpID09PSBwXG4gICAgICAgICkge1xuICAgICAgICAgIHEgPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgcSwgdW5pY29kZU1hdGNoaW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwdXNoKEEsIHN0cmluZ1NsaWNlKFMsIHAsIHEpKTtcbiAgICAgICAgICBpZiAoQS5sZW5ndGggPT09IGxpbSkgcmV0dXJuIEE7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gei5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIHB1c2goQSwgeltpXSk7XG4gICAgICAgICAgICBpZiAoQS5sZW5ndGggPT09IGxpbSkgcmV0dXJuIEE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHEgPSBwID0gZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcHVzaChBLCBzdHJpbmdTbGljZShTLCBwKSk7XG4gICAgICByZXR1cm4gQTtcbiAgICB9XG4gIF07XG59LCBCVUdHWSB8fCAhU1BMSVRfV09SS1NfV0lUSF9PVkVSV1JJVFRFTl9FWEVDLCBVTlNVUFBPUlRFRF9ZKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubmFtZS1maWVsZFtkYXRhLXYtNzFkNDUyNjJdIHtcXG4gIG1hcmdpbjogMTZweCA4cHg7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjVkZWcsICNlYmYxZmYsICNlNmVjZmMpO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgcGFkZGluZzogMCAyMHB4O1xcbn1cXG4ubmFtZS1maWVsZCAubGFiZWxbZGF0YS12LTcxZDQ1MjYyXSB7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbn1cXG4ubmFtZS1maWVsZCAudmFsdWVbZGF0YS12LTcxZDQ1MjYyXSB7XFxuICBjb2xvcjogIzQ0N2JmYztcXG59XFxuLnRleHRhcmVhLXdyYXBwZXJbZGF0YS12LTcxZDQ1MjYyXSB7XFxuICBtYXJnaW46IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgLypiYWNrZ3JvdW5kOiB3aGl0ZTsqL1xcbiAgLyo6OnYtZGVlcCAudmFuLWZpZWxkX19jb250cm9sIHsqL1xcbiAgLyogIG1pbi1oZWlnaHQ6IDE1MHB4OyovXFxuICAvKn0qL1xcbn1cXG4uYnV0dG9uLXdyYXBwZXJbZGF0YS12LTcxZDQ1MjYyXSB7XFxuICBtYXJnaW46IDE2cHggOHB4O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTcxZDQ1MjYyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMTIwMTc1YmNcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03MWQ0NTI2MiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTcxZDQ1MjYyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuLy8gYXhpb3MuZGVmYXVsdHMuYmFzZVVSTCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcInByb2R1Y3Rpb25cIiA/IFwiaHR0cDovLzEwLjIyMS4yOS40OjQ4Njg2L3dyeWdqQXBwMTMzXCIgOiBcIi4vd3J5XCI7XHJcbmF4aW9zLmRlZmF1bHRzLmJhc2VVUkwgPSBcImh0dHA6Ly8xMC4yMjEuMjkuNDo0ODY4Ni93cnlnakFwcDEzM1wiO1xyXG4vLyDliJvlu7pheGlvc+WunuS+i1xyXG5jb25zdCBzZXJ2aWNlID0gYXhpb3MuY3JlYXRlKHtcclxuICAgIHRpbWVvdXQ6IDIwMDAwLFxyXG4gICAgcmV0cnk6IDIsIC8vIOivt+axguasoeaVsCxcclxuICAgIHJldHJ5SW50ZXJ2YWw6IDEwMDAsIC8vIOivt+axgui2heaXtuWQju+8jDFz5YaN5qyh6K+35rGCXHJcbn0pO1xyXG5cclxuc2VydmljZS5pbnRlcmNlcHRvcnMucmVxdWVzdC51c2UoXHJcbiAgICAoY29uZmlnKSA9PiB7XHJcbiAgICAgICAgbGV0IHRlbXBVcmwgPSBjb25maWcudXJsLnNwbGl0KFwiL1wiKTtcclxuICAgICAgICBpZiAodGVtcFVybFsxXSA9PT0gXCJhcHBcIikge1xyXG4gICAgICAgICAgICBjb25maWcuYmFzZVVSTCA9IHByb2Nlc3MuZW52LlZVRV9BUFBfVVJMX2FwcDtcclxuICAgICAgICB9IGVsc2UgaWYgKHRlbXBVcmxbMV0gPT09IFwiaGVhbHRoXCIpIHtcclxuICAgICAgICAgICAgY29uZmlnLmJhc2VVUkwgPSBwcm9jZXNzLmVudi5WVUVfQVBQX1VSTF9oZWFsdGg7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0ZW1wVXJsWzFdID09PSBcIm1pbmlvXCIpIHtcclxuICAgICAgICAgICAgY29uZmlnLmJhc2VVUkwgPSBwcm9jZXNzLmVudi5WVUVfQVBQX1VSTF9taW5pbztcclxuICAgICAgICB9IGVsc2UgaWYgKHRlbXBVcmxbMV0gPT09IFwicG9sbHV0aW9uX3N1cnZleVwiKSB7XHJcbiAgICAgICAgICAgIGNvbmZpZy5iYXNlVVJMID0gcHJvY2Vzcy5lbnYuVlVFX0FQUF9VUkxfcG9sbHV0aW9uX3N1cnZleTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRlbXBVcmxbMV0gPT09IFwic3lzdGVtLXNlcnZpY2UtbG9naW5cIikge1xyXG4gICAgICAgICAgICBjb25maWcuYmFzZVVSTCA9IHByb2Nlc3MuZW52LlZVRV9BUFBfVVJMX3N5c3RlbV9zZXJ2aWNlX2xvZ2luO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjb25maWcuYmFzZVVSTClcclxuICAgICAgICAvKmlmIChzdG9yZS5zdGF0ZS51c2VyLnVzZXI/LllIX0lEKSB7XHJcbiAgICAgIGNvbmZpZy5oZWFkZXJzW1wieWhJZFwiXSA9IHN0b3JlLnN0YXRlLnVzZXIudXNlci5ZSF9JRDtcclxuICAgIH1cclxuICAgIGlmIChzdG9yZS5zdGF0ZS51c2VyLnVzZXI/LlRva2VuKSB7XHJcbiAgICAgIGNvbmZpZy5oZWFkZXJzW1wiWC1BY2Nlc3MtVG9rZW5cIl0gPSBzdG9yZS5zdGF0ZS51c2VyLnVzZXIuVG9rZW47XHJcbiAgICB9Ki9cclxuICAgICAgICByZXR1cm4gY29uZmlnO1xyXG4gICAgfSxcclxuICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTsgLy8gZm9yIGRlYnVnXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KGVycm9yKTtcclxuICAgIH1cclxuKTtcclxuXHJcbnNlcnZpY2UuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZShcclxuICAgIChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIC8v5o6l5Y+jOTk5OSDlj6/og73nmbvlvZXlvILluLjmiJZ0b2tlbui/h+acn+mHjeaWsOeZu+W9lVxyXG4gICAgICAgIC8qaWYgKHJlc3BvbnNlLmRhdGEuY29kZSA9PT0gJzUwMCcgJiYgcmVzcG9uc2UuZGF0YS5tc2cgPT09ICd0b2tlbuW8guW4uCcpIHtcclxuICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpXHJcbiAgICB9Ki9cclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0sXHJcbiAgICAoZXJyb3IpID0+IHtcclxuICAgICAgICBQcm9taXNlLnJlamVjdChlcnJvcik7XHJcbiAgICB9XHJcbik7XHJcblxyXG4vLyDlj43ppohcclxuZXhwb3J0IGNvbnN0IHN1Ym1pdEZlZWRiYWNrID0gKHBhcmFtcykgPT4ge1xyXG4gICAgcmV0dXJuIHNlcnZpY2Uoe1xyXG4gICAgICAgIHVybDogJy9sb2cvY2dYdEZrYicsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXNcclxuICAgIH0pXHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcXVlcnlGZWVkYmFjayA9IChwYXJhbXMpID0+IHtcclxuICAgIHJldHVybiBzZXJ2aWNlKHtcclxuICAgICAgICB1cmw6ICcvbG9nL2NnWHRGa2Ivc2hvdycsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXNcclxuICAgIH0pXHJcbn07XHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcxZDQ1MjYyJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTcxZDQ1MjYyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNzFkNDUyNjJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNzFkNDUyNjInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzFkNDUyNjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzFkNDUyNjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03MWQ0NTI2MiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3MWQ0NTI2MicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL2ZlZWRiYWNrL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTcxZDQ1MjYyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcxZDQ1MjYyJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==