(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[98],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/login/indexMock.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/login/indexMock.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vant */ "./node_modules/vant/es/index.js");
/* harmony import */ var _api_api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/api.js */ "./src/api/api.js");
/* harmony import */ var _api_login_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/login.js */ "./src/api/login.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Test',
  data: function data() {
    return {
      userName: "",
      passWord: "",
      verifySecond: 60,
      timer: null,
      count: false,
      uuid: '',
      exitAppTicker: false
    };
  },
  mounted: function mounted() {
    document.addEventListener('backbutton', this.exitToast, false);
  },
  deactivated: function deactivated() {
    document.removeEventListener('backbutton', this.exitToast, false);
  },
  destroyed: function destroyed() {
    document.removeEventListener('backbutton', this.exitToast, false);
  },
  methods: {
    exitToast: function exitToast() {
      var _this = this;

      if (this.$route.path !== '/login') {
        return;
      }

      if (!this.exitAppTicker) {
        this.exitAppTicker = true;
        Object(vant__WEBPACK_IMPORTED_MODULE_2__["Toast"])("再按一次退出!");
        setTimeout(function () {
          _this.exitAppTicker = false;
        }, 2000);
      } else {
        navigator.app.exitApp(); //退出app
      }
    },
    userLoginMock: function userLoginMock() {
      var _this2 = this;

      return Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return axios__WEBPACK_IMPORTED_MODULE_5___default.a.post('/zshb/login', {
                  username: _this2.userName,
                  password: _this2.passWord
                });

              case 3:
                response = _context.sent;

                if (response.data.code === 200) {
                  Object(vant__WEBPACK_IMPORTED_MODULE_2__["Toast"])('登录成功');

                  _this2.$router.push({
                    path: '/loginSuccess'
                  }); // 保存token或执行其他登录成功后的操作

                } else {
                  Object(vant__WEBPACK_IMPORTED_MODULE_2__["Toast"])(response.data.message);
                }

                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                Object(vant__WEBPACK_IMPORTED_MODULE_2__["Toast"])('请求失败，请重试');

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 7]]);
      }))();
    },
    countDown: function countDown() {
      var _this3 = this;

      this.timer = setInterval(function () {
        if (_this3.verifySecond > 0) {
          _this3.verifySecond--;
        } else {
          _this3.count = false;
          clearInterval(_this3.timer);
        }
      }, 1000);
    }
  },
  beforeDestroy: function beforeDestroy() {
    clearInterval(this.timer);
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/login/indexMock.vue?vue&type=template&id=fe8a4fa8&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/login/indexMock.vue?vue&type=template&id=fe8a4fa8&scoped=true& ***!
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
  return _c("div", { staticClass: "login" }, [
    _vm._m(0),
    _vm._m(1),
    _c(
      "div",
      { staticClass: "loginContent" },
      [
        _c("div", { staticClass: "titleName" }, [_vm._v("手机号")]),
        _c("van-field", {
          staticClass: "input-formatter",
          attrs: { placeholder: "请输入手机号", clearable: "" },
          model: {
            value: _vm.userName,
            callback: function ($$v) {
              _vm.userName = $$v
            },
            expression: "userName",
          },
        }),
        _c("div", { staticClass: "titleName" }, [_vm._v("验证码")]),
        _c("van-field", {
          staticClass: "input-formatter",
          attrs: { placeholder: "验证码", clearable: "" },
          model: {
            value: _vm.passWord,
            callback: function ($$v) {
              _vm.passWord = $$v
            },
            expression: "passWord",
          },
        }),
      ],
      1
    ),
    _c(
      "div",
      { staticStyle: { margin: "5vh 5% 0" } },
      [
        _c(
          "van-button",
          {
            staticStyle: { height: "56px", "font-size": "18px" },
            attrs: { type: "info", block: "", round: "" },
            on: { click: _vm.userLoginMock },
          },
          [_vm._v("登录")]
        ),
      ],
      1
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "logo-top" }, [
      _c("div", { staticClass: "logo-top-wrapper" }, [
        _c(
          "div",
          {
            staticStyle: {
              display: "flex",
              "align-items": "center",
              "justify-content": "center",
              width: "100%",
            },
          },
          [
            _c("img", {
              staticClass: "img",
              attrs: { src: __webpack_require__(/*! @/assets/icon13.png */ "./src/assets/icon13.png"), alt: "" },
            }),
            _c("span", { staticClass: "name" }, [_vm._v("掌上环保")]),
          ]
        ),
        _c("div", { staticClass: "logo-top-company" }, [
          _vm._v("昆明市生态环境局"),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { margin: "4vh 5%" } }, [
      _c("span", { staticStyle: { "font-size": "30px", color: "#25396F" } }, [
        _vm._v("您好！"),
      ]),
      _c("br"),
      _c(
        "div",
        {
          staticStyle: {
            "font-size": "15px",
            color: "rgba(37, 57, 111, 0.5)",
            "padding-top": "10px",
          },
        },
        [_vm._v("欢迎登录昆明掌上环保")]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/login/indexMock.vue?vue&type=style&index=0&id=fe8a4fa8&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/login/indexMock.vue?vue&type=style&index=0&id=fe8a4fa8&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @/assets/logo-header.png */ "./src/assets/logo-header.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".login[data-v-fe8a4fa8] {\n  width: 100vw;\n  height: 100vh;\n  background-color: #fff;\n}\n.login .logo-top[data-v-fe8a4fa8] {\n  padding: 10vh 20% 0;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n  background-position: center top;\n  background-size: 150% 60%;\n  color: #082859;\n  font-size: 14px;\n  text-align: center;\n  letter-spacing: 3px;\n}\n.login .logo-top .logo-top-wrapper[data-v-fe8a4fa8] {\n  position: relative;\n}\n.login .logo-top .logo-top-wrapper img[data-v-fe8a4fa8] {\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  margin-right: 10px;\n}\n.login .logo-top .logo-top-wrapper .name[data-v-fe8a4fa8] {\n  color: #082859;\n  font-size: 26px;\n  letter-spacing: 5px;\n  font-weight: bold;\n}\n.login .logo-top .logo-top-wrapper .logo-top-company[data-v-fe8a4fa8] {\n  margin-top: 20px;\n  width: 100%;\n  text-align: center;\n}\n.login .loginContent[data-v-fe8a4fa8] {\n  margin: 0 5%;\n}\n.login .loginContent .words[data-v-fe8a4fa8] {\n  width: 100%;\n  height: 50px;\n  font-size: 36px;\n  font-weight: 500;\n  letter-spacing: 0px;\n  line-height: 50px;\n  color: #1f1f1f;\n  text-align: left;\n}\n.login .loginContent .titleName[data-v-fe8a4fa8] {\n  padding: 18px 0 13px;\n  font-size: 16px;\n  color: #25396F;\n  font-weight: 500;\n  text-align: left;\n}\n.login .loginContent .input-formatter[data-v-fe8a4fa8] {\n  width: 100%;\n  height: 56px;\n  opacity: 1;\n  border-radius: 50px;\n  background: #F4F6FF;\n  border: 1px solid #F4F6FF;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-indent: 30px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/login/indexMock.vue?vue&type=style&index=0&id=fe8a4fa8&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/login/indexMock.vue?vue&type=style&index=0&id=fe8a4fa8&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./indexMock.vue?vue&type=style&index=0&id=fe8a4fa8&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/login/indexMock.vue?vue&type=style&index=0&id=fe8a4fa8&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5bfd736e", content, false, {"sourceMap":false,"shadowMode":false});
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

/***/ "./src/assets/icon13.png":
/*!*******************************!*\
  !*** ./src/assets/icon13.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/icon13.png";

/***/ }),

/***/ "./src/assets/logo-header.png":
/*!************************************!*\
  !*** ./src/assets/logo-header.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo-header.png";

/***/ }),

/***/ "./src/views/login/indexMock.vue":
/*!***************************************!*\
  !*** ./src/views/login/indexMock.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _indexMock_vue_vue_type_template_id_fe8a4fa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./indexMock.vue?vue&type=template&id=fe8a4fa8&scoped=true& */ "./src/views/login/indexMock.vue?vue&type=template&id=fe8a4fa8&scoped=true&");
/* harmony import */ var _indexMock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./indexMock.vue?vue&type=script&lang=js& */ "./src/views/login/indexMock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _indexMock_vue_vue_type_style_index_0_id_fe8a4fa8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./indexMock.vue?vue&type=style&index=0&id=fe8a4fa8&lang=scss&scoped=true& */ "./src/views/login/indexMock.vue?vue&type=style&index=0&id=fe8a4fa8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _indexMock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _indexMock_vue_vue_type_template_id_fe8a4fa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _indexMock_vue_vue_type_template_id_fe8a4fa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "fe8a4fa8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/login/indexMock.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/login/indexMock.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/views/login/indexMock.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indexMock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./indexMock.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/login/indexMock.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indexMock_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/login/indexMock.vue?vue&type=style&index=0&id=fe8a4fa8&lang=scss&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./src/views/login/indexMock.vue?vue&type=style&index=0&id=fe8a4fa8&lang=scss&scoped=true& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indexMock_vue_vue_type_style_index_0_id_fe8a4fa8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./indexMock.vue?vue&type=style&index=0&id=fe8a4fa8&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/login/indexMock.vue?vue&type=style&index=0&id=fe8a4fa8&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indexMock_vue_vue_type_style_index_0_id_fe8a4fa8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indexMock_vue_vue_type_style_index_0_id_fe8a4fa8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indexMock_vue_vue_type_style_index_0_id_fe8a4fa8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indexMock_vue_vue_type_style_index_0_id_fe8a4fa8_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/login/indexMock.vue?vue&type=template&id=fe8a4fa8&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./src/views/login/indexMock.vue?vue&type=template&id=fe8a4fa8&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indexMock_vue_vue_type_template_id_fe8a4fa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./indexMock.vue?vue&type=template&id=fe8a4fa8&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/login/indexMock.vue?vue&type=template&id=fe8a4fa8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indexMock_vue_vue_type_template_id_fe8a4fa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_indexMock_vue_vue_type_template_id_fe8a4fa8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2xvZ2luL2luZGV4TW9jay52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2xvZ2luL2luZGV4TW9jay52dWU/ZTkyZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbG9naW4vaW5kZXhNb2NrLnZ1ZT8zNjMxIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9sb2dpbi9pbmRleE1vY2sudnVlPzY1NGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9pY29uMTMucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbG9nby1oZWFkZXIucG5nIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9sb2dpbi9pbmRleE1vY2sudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9sb2dpbi9pbmRleE1vY2sudnVlPzlkZDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2xvZ2luL2luZGV4TW9jay52dWU/YmJhYSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvbG9naW4vaW5kZXhNb2NrLnZ1ZT83YmU4Il0sIm5hbWVzIjpbImxvZ2luIiwidG9rZW4iLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwicGFyYW1zIiwibG9naW5fY2x1ZSIsInNpdGVTZWFyY2giLCJwYWdlIiwibGltaXQiLCJuYW1lIiwic3lzTm90aWNlSW5mbyIsIm5vdGljZVJlYWQiLCJub3RpY2VJZCIsImxhd1NlYXJjaCIsImlkIiwibmVpZ2hib3VyU2l0ZVNlYXJjaCIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwibnVtYmVyIiwid2F0ZXJTaXRlRmluZSIsInR5cGUiLCJkcmlua1dhdGVyU3VtbWFyeSIsIndhcm5pbmdBaXIiLCJ3YXJuaW5nV2F0ZXIiLCJ3YXJuaW5nRWFybHlXYXRlciIsIndhdGVyU3RhdGlvbiIsIm9iamVjdGlkIiwiamNmcyIsImFpclF1YWxpdHkiLCJkYXRhIiwiYWlyUXVhbGl0eUlBUUkiLCJkaWFuV2F0ZXJRdWFsaXR5IiwiZ2V0Tm90aWNlTGlzdCIsIkdJU1BvbGx1dGl0b24iLCJHSVNXYXRlciIsIkdJU0NoYW5uZWwiLCJkd21jIiwiZ3FtYyIsImdldEFpclNpdGUiLCJ0aW1lIiwidXNlckxvZ2luIiwicHdkIiwidXNlck5hbWUiLCJwYXNzd29yZCIsInVzZXJTdWJzY3JpYmUiLCJUb2tlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxjQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxrQkFGQTtBQUdBLHNCQUhBO0FBSUEsaUJBSkE7QUFLQSxrQkFMQTtBQU1BLGNBTkE7QUFPQTtBQVBBO0FBU0EsR0FaQTtBQWFBLFNBYkEscUJBYUE7QUFDQTtBQUNBLEdBZkE7QUFnQkEsYUFoQkEseUJBZ0JBO0FBQ0E7QUFDQSxHQWxCQTtBQW1CQSxXQW5CQSx1QkFtQkE7QUFDQTtBQUNBLEdBckJBO0FBc0JBO0FBQ0EsYUFEQSx1QkFDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQSxFQUVBLElBRkE7QUFHQSxPQU5BLE1BTUE7QUFDQSxnQ0FEQSxDQUNBO0FBQ0E7QUFDQSxLQWRBO0FBZUEsaUJBZkEsMkJBZUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRUE7QUFDQSwyQ0FEQTtBQUVBO0FBRkEsa0JBRkE7O0FBQUE7QUFFQSx3QkFGQTs7QUFNQTtBQUNBOztBQUNBO0FBQ0E7QUFEQSxxQkFGQSxDQUtBOztBQUNBLGlCQU5BLE1BTUE7QUFDQTtBQUNBOztBQWRBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBZ0JBOztBQWhCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWtCQSxLQWpDQTtBQWtDQSxhQWxDQSx1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O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQWtTLENBQWdCLDBVQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXRUO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzLzk4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJsb2dpblwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImxvZ28tdG9wXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJsb2dvLXRvcC13cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7IGFsaWduLWl0ZW1zOiBjZW50ZXI7IGp1c3RpZnktY29udGVudDogY2VudGVyOyB3aWR0aDogMTAwJTtcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMvaWNvbjEzLnBuZ1wiIGNsYXNzPVwiaW1nXCIgYWx0PVwiXCIvPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYW1lXCI+5o6M5LiK546v5L+dPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsb2dvLXRvcC1jb21wYW55XCI+5piG5piO5biC55Sf5oCB546v5aKD5bGAPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBzdHlsZT1cIm1hcmdpbjogNHZoIDUlO1wiPlxyXG4gICAgICA8c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMzBweDtjb2xvcjogIzI1Mzk2RjtcIj7mgqjlpb3vvIE8L3NwYW4+PGJyLz5cclxuICAgICAgPGRpdiBzdHlsZT1cImZvbnQtc2l6ZTogMTVweDtjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMC41KTtwYWRkaW5nLXRvcDogMTBweFwiPuasoui/jueZu+W9leaYhuaYjuaOjOS4iueOr+S/nTwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImxvZ2luQ29udGVudFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGVOYW1lXCI+5omL5py65Y+3PC9kaXY+XHJcbiAgICAgIDx2YW4tZmllbGQgdi1tb2RlbD1cInVzZXJOYW1lXCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXmiYvmnLrlj7dcIiBjbGVhcmFibGUgY2xhc3M9XCJpbnB1dC1mb3JtYXR0ZXJcIi8+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZU5hbWVcIj7pqozor4HnoIE8L2Rpdj5cclxuICAgICAgPHZhbi1maWVsZCB2LW1vZGVsPVwicGFzc1dvcmRcIiBwbGFjZWhvbGRlcj1cIumqjOivgeeggVwiIGNsZWFyYWJsZSBjbGFzcz1cImlucHV0LWZvcm1hdHRlclwiPlxyXG4gICAgICAgIDwhLS08dGVtcGxhdGUgI2J1dHRvbj5cclxuICAgICAgICAgIDxzcGFuIHYtc2hvdz1cImNvdW50XCIgc3R5bGU9XCJjb2xvcjogIzI0NzdFOFwiPnt7IHZlcmlmeVNlY29uZCB9feenkuWQjumHjeaWsOWPkemAgTwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuIHYtc2hvdz1cIiFjb3VudFwiIHN0eWxlPVwiY29sb3I6ICMyNDc3RThcIiBAY2xpY2s9XCJvblNlbmRWZXJpdHlcIj7lj5HpgIHpqozor4HnoIE8L3NwYW4+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT4tLT5cclxuICAgICAgPC92YW4tZmllbGQ+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IHN0eWxlPVwibWFyZ2luOiA1dmggNSUgMDtcIj5cclxuICAgICAgPHZhbi1idXR0b24gdHlwZT1cImluZm9cIiBibG9jayByb3VuZCBAY2xpY2s9XCJ1c2VyTG9naW5Nb2NrXCIgc3R5bGU9XCJoZWlnaHQ6IDU2cHg7IGZvbnQtc2l6ZTogMThweDtcIj7nmbvlvZU8L3Zhbi1idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCB7VG9hc3R9IGZyb20gXCJ2YW50XCI7XHJcbiAgaW1wb3J0IHt1c2VyTG9naW59IGZyb20gJ0AvYXBpL2FwaS5qcydcclxuICBpbXBvcnQge3Bob25lQ29kZSwgcGhvbmVDb2RlTG9naW59IGZyb20gJ0AvYXBpL2xvZ2luLmpzJ1xyXG4gIGltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6ICdUZXN0JyxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlck5hbWU6IFwiXCIsXHJcbiAgICAgICAgcGFzc1dvcmQ6IFwiXCIsXHJcbiAgICAgICAgdmVyaWZ5U2Vjb25kOiA2MCxcclxuICAgICAgICB0aW1lcjogbnVsbCxcclxuICAgICAgICBjb3VudDogZmFsc2UsXHJcbiAgICAgICAgdXVpZDogJycsXHJcbiAgICAgICAgZXhpdEFwcFRpY2tlcjogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2JhY2tidXR0b24nLCB0aGlzLmV4aXRUb2FzdCwgZmFsc2UpXHJcbiAgICB9LFxyXG4gICAgZGVhY3RpdmF0ZWQoKSB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JhY2tidXR0b24nLCB0aGlzLmV4aXRUb2FzdCwgZmFsc2UpXHJcbiAgICB9LFxyXG4gICAgZGVzdHJveWVkKCkge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdiYWNrYnV0dG9uJywgdGhpcy5leGl0VG9hc3QsIGZhbHNlKVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgZXhpdFRvYXN0KCkge1xyXG4gICAgICAgICAgaWYgKHRoaXMuJHJvdXRlLnBhdGggIT09ICcvbG9naW4nKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAoIXRoaXMuZXhpdEFwcFRpY2tlcikge1xyXG4gICAgICAgICAgICAgIHRoaXMuZXhpdEFwcFRpY2tlciA9IHRydWVcclxuICAgICAgICAgICAgICBUb2FzdChcIuWGjeaMieS4gOasoemAgOWHuiFcIik7XHJcbiAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMuZXhpdEFwcFRpY2tlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgIH0sIDIwMDApO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICBuYXZpZ2F0b3IuYXBwLmV4aXRBcHAoKTsgLy/pgIDlh7phcHBcclxuICAgICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgYXN5bmMgdXNlckxvZ2luTW9jaygpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KCcvenNoYi9sb2dpbicsIHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IHRoaXMudXNlck5hbWUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLnBhc3NXb3JkXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmNvZGUgPT09IDIwMCkge1xyXG4gICAgICAgICAgICBUb2FzdCgn55m75b2V5oiQ5YqfJyk7XHJcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICBwYXRoOiAnL2xvZ2luU3VjY2VzcycsXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8vIOS/neWtmHRva2Vu5oiW5omn6KGM5YW25LuW55m75b2V5oiQ5Yqf5ZCO55qE5pON5L2cXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBUb2FzdChyZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICBUb2FzdCgn6K+35rGC5aSx6LSl77yM6K+36YeN6K+VJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBjb3VudERvd24oKSB7XHJcbiAgICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgIGlmICh0aGlzLnZlcmlmeVNlY29uZCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy52ZXJpZnlTZWNvbmQtLTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBiZWZvcmVEZXN0cm95KCkge1xyXG4gICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICAubG9naW4ge1xyXG4gICAgd2lkdGg6IDEwMHZ3O1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcblxyXG4gICAgLmxvZ28tdG9wIHtcclxuICAgICAgcGFkZGluZzogMTB2aCAyMCUgMDtcclxuICAgICAgYmFja2dyb3VuZDogdXJsKFwifkAvYXNzZXRzL2xvZ28taGVhZGVyLnBuZ1wiKSBuby1yZXBlYXQ7XHJcbiAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciB0b3A7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTUwJSA2MCU7XHJcbiAgICAgIGNvbG9yOiAjMDgyODU5O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcclxuXHJcbiAgICAgIC5sb2dvLXRvcC13cmFwcGVyIHtcclxuICAgICAgICAvL2Rpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgY29sb3I6ICMwODI4NTk7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogNXB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubG9nby10b3AtY29tcGFueSB7XHJcbiAgICAgICAgICAvL3Bvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubG9naW5Db250ZW50IHtcclxuICAgICAgbWFyZ2luOiAwIDUlO1xyXG5cclxuICAgICAgLndvcmRzIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgICBjb2xvcjogcmdiYSgzMSwgMzEsIDMxLCAxKTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGl0bGVOYW1lIHtcclxuICAgICAgICBwYWRkaW5nOiAxOHB4IDAgMTNweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICMyNTM5NkY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaW5wdXQtZm9ybWF0dGVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDU2cHg7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGNEY2RkY7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0Y0RjZGRjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgdGV4dC1pbmRlbnQ6IDMwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc3R5bGU+XHJcblxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ2luXCIgfSwgW1xuICAgIF92bS5fbSgwKSxcbiAgICBfdm0uX20oMSksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJsb2dpbkNvbnRlbnRcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlTmFtZVwiIH0sIFtfdm0uX3YoXCLmiYvmnLrlj7dcIildKSxcbiAgICAgICAgX2MoXCJ2YW4tZmllbGRcIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0LWZvcm1hdHRlclwiLFxuICAgICAgICAgIGF0dHJzOiB7IHBsYWNlaG9sZGVyOiBcIuivt+i+k+WFpeaJi+acuuWPt1wiLCBjbGVhcmFibGU6IFwiXCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS51c2VyTmFtZSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgIF92bS51c2VyTmFtZSA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwidXNlck5hbWVcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZU5hbWVcIiB9LCBbX3ZtLl92KFwi6aqM6K+B56CBXCIpXSksXG4gICAgICAgIF9jKFwidmFuLWZpZWxkXCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dC1mb3JtYXR0ZXJcIixcbiAgICAgICAgICBhdHRyczogeyBwbGFjZWhvbGRlcjogXCLpqozor4HnoIFcIiwgY2xlYXJhYmxlOiBcIlwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0ucGFzc1dvcmQsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICBfdm0ucGFzc1dvcmQgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcInBhc3NXb3JkXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNTdHlsZTogeyBtYXJnaW46IFwiNXZoIDUlIDBcIiB9IH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidmFuLWJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCI1NnB4XCIsIFwiZm9udC1zaXplXCI6IFwiMThweFwiIH0sXG4gICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImluZm9cIiwgYmxvY2s6IFwiXCIsIHJvdW5kOiBcIlwiIH0sXG4gICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnVzZXJMb2dpbk1vY2sgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCLnmbvlvZVcIildXG4gICAgICAgICksXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsb2dvLXRvcFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibG9nby10b3Atd3JhcHBlclwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgXCJhbGlnbi1pdGVtc1wiOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICBcImp1c3RpZnktY29udGVudFwiOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbWdcIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMvaWNvbjEzLnBuZ1wiKSwgYWx0OiBcIlwiIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hbWVcIiB9LCBbX3ZtLl92KFwi5o6M5LiK546v5L+dXCIpXSksXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxvZ28tdG9wLWNvbXBhbnlcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwi5piG5piO5biC55Sf5oCB546v5aKD5bGAXCIpLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCI0dmggNSVcIiB9IH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY1N0eWxlOiB7IFwiZm9udC1zaXplXCI6IFwiMzBweFwiLCBjb2xvcjogXCIjMjUzOTZGXCIgfSB9LCBbXG4gICAgICAgIF92bS5fdihcIuaCqOWlve+8gVwiKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXCJiclwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMTVweFwiLFxuICAgICAgICAgICAgY29sb3I6IFwicmdiYSgzNywgNTcsIDExMSwgMC41KVwiLFxuICAgICAgICAgICAgXCJwYWRkaW5nLXRvcFwiOiBcIjEwcHhcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwi5qyi6L+O55m75b2V5piG5piO5o6M5LiK546v5L+dXCIpXVxuICAgICAgKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIkAvYXNzZXRzL2xvZ28taGVhZGVyLnBuZ1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmxvZ2luW2RhdGEtdi1mZThhNGZhOF0ge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxufVxcbi5sb2dpbiAubG9nby10b3BbZGF0YS12LWZlOGE0ZmE4XSB7XFxuICBwYWRkaW5nOiAxMHZoIDIwJSAwO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgdG9wO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxNTAlIDYwJTtcXG4gIGNvbG9yOiAjMDgyODU5O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcXG59XFxuLmxvZ2luIC5sb2dvLXRvcCAubG9nby10b3Atd3JhcHBlcltkYXRhLXYtZmU4YTRmYThdIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmxvZ2luIC5sb2dvLXRvcCAubG9nby10b3Atd3JhcHBlciBpbWdbZGF0YS12LWZlOGE0ZmE4XSB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcbi5sb2dpbiAubG9nby10b3AgLmxvZ28tdG9wLXdyYXBwZXIgLm5hbWVbZGF0YS12LWZlOGE0ZmE4XSB7XFxuICBjb2xvcjogIzA4Mjg1OTtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG4gIGxldHRlci1zcGFjaW5nOiA1cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmxvZ2luIC5sb2dvLXRvcCAubG9nby10b3Atd3JhcHBlciAubG9nby10b3AtY29tcGFueVtkYXRhLXYtZmU4YTRmYThdIHtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmxvZ2luIC5sb2dpbkNvbnRlbnRbZGF0YS12LWZlOGE0ZmE4XSB7XFxuICBtYXJnaW46IDAgNSU7XFxufVxcbi5sb2dpbiAubG9naW5Db250ZW50IC53b3Jkc1tkYXRhLXYtZmU4YTRmYThdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XFxuICBsaW5lLWhlaWdodDogNTBweDtcXG4gIGNvbG9yOiAjMWYxZjFmO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuLmxvZ2luIC5sb2dpbkNvbnRlbnQgLnRpdGxlTmFtZVtkYXRhLXYtZmU4YTRmYThdIHtcXG4gIHBhZGRpbmc6IDE4cHggMCAxM3B4O1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICMyNTM5NkY7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG59XFxuLmxvZ2luIC5sb2dpbkNvbnRlbnQgLmlucHV0LWZvcm1hdHRlcltkYXRhLXYtZmU4YTRmYThdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1NnB4O1xcbiAgb3BhY2l0eTogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBiYWNrZ3JvdW5kOiAjRjRGNkZGO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI0Y0RjZGRjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWluZGVudDogMzBweDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleE1vY2sudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZmU4YTRmYTgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI1YmZkNzM2ZVwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4TW9jay52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mZThhNGZhOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4TW9jay52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mZThhNGZhOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcclxuXHJcbi8qKlxyXG4gKiDnmbvlvZVcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luKHRva2VuKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC9sb2dpbi91c2VyX2luZm8nLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgICB0b2tlbjogdG9rZW5cclxuICAgIH1cclxuICB9KVxyXG59XHJcbi8qKlxyXG4gKiDnmbvlvZUtLee6v+e0olxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbG9naW5fY2x1ZSh0b2tlbikge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9tYW5hZ2UvbG9naW4vdG9rZW5fdXNlcl9pbmZvJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgdG9rZW46IHRva2VuXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG4vKipcclxuICog56uZ54K55pCc57SiXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaXRlU2VhcmNoKHtwYWdlLCBsaW1pdCwgbmFtZX0pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBwL2hvbWUvbGlzdCcsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIHBhZ2U6IHBhZ2UsXHJcbiAgICAgIGxpbWl0OiBsaW1pdCxcclxuICAgICAgbmFtZTogbmFtZVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDnlKjmiLfpgJrnn6VcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN5c05vdGljZUluZm8oKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC9zeXNOb3RpY2VJbmZvJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOeUqOaIt+mAmuefpVxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbm90aWNlUmVhZCh7bm90aWNlSWR9KSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC9zeXNOb3RpY2VJbmZvL3JlYWQnLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBub3RpY2VJZDogbm90aWNlSWRcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICog5rOV5b6L5rOV6KeE5pCc57SiXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsYXdTZWFyY2goeyBuYW1lfSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9pbnRlcmZhY2UvcmV0cmlldmFsL2RvY3VtZW50X3NlYXJjaCcsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIHBhZ2U6IDEsXHJcbiAgICAgIGxpbWl0OiAxMDAwLFxyXG4gICAgICBpZDogJzUwNCw1MDUsNTA2JyxcclxuICAgICAgbmFtZTogbmFtZVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlkajovrnnq5nngrnmkJzntKJcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG5laWdoYm91clNpdGVTZWFyY2goe2xvbmdpdHVkZSwgbGF0aXR1ZGUsIG51bWJlcn0pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBwL2hvbWUvc3Vycm91bmRpbmcnLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBsb25naXR1ZGUsIGxhdGl0dWRlLCBudW1iZXJcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICog5Zu955yB6ICD56uZ54K55LyY6Imv5oOF5Ya1XHJcbiAqIEBwYXJhbSB0eXBlIDHlm73ogIMy55yB6ICDXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXRlclNpdGVGaW5lKHt0eXBlfSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvaG9tZS8nK3R5cGUsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOmlrueUqOawtOa6kOWcsOamguWGtVxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZHJpbmtXYXRlclN1bW1hcnkoKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC9ob21lJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICog6LaF5qCH5ZGK6K2mLeawlFxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd2FybmluZ0FpcigpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBwL2hvbWUvYWlyV2FybmluZycsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOi2heagh+WRiuitpi3msLRcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHdhcm5pbmdXYXRlcigpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvRENNUk0xMzAvbWVzc2FnZS9hYm5vcm1hbERhdGEnLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDotoXmoIfpooToraYt5rC0XHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXJuaW5nRWFybHlXYXRlcigpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvd2F0ZXIvY29tbW9uL3dhcm5pbmdzJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vLyDmsLTnq5nor6bmg4VcclxuZXhwb3J0IGZ1bmN0aW9uIHdhdGVyU3RhdGlvbihvYmplY3RpZCwgdHlwZSwgamNmcykge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9EQ01STTEzMC9seWR0L2dldEx5ZHRHaycsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIG9iamVjdGlkLCB0eXBlLCBqY2ZzLFxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlhajluILnqbrmsJTotKjph49cclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFpclF1YWxpdHkoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvaG9tZS9haXInLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczpkYXRhXHJcbiAgfSlcclxufVxyXG4vKipcclxuICog5YWo5biC56m65rCU6LSo6YePSUFRSVxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWlyUXVhbGl0eUlBUUkoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvaG9tZS9nZXRJbmRleElhcWknLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczpkYXRhXHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOa7h+axoOawtOi0qOeKtuWGtVxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGlhbldhdGVyUXVhbGl0eSgpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBwL2hvbWUvc2l0dWF0aW9uJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vL+mAmuefpeWFrOWRiiAtIOWIl+ihqFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm90aWNlTGlzdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2tlcF9tYW5hZ2Uvbm90aWNlL3F1ZXJ5TGlzdEluZm8nLFxyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIHBhcmFtczogZGF0YVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHSVMt5omA5pyJ5rGh5p+T5rqQXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBHSVNQb2xsdXRpdG9uKCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9wb2xsdXQvcG9sbHV0aW9uL2dldEFsbFN1bW1hcnknLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHSVMt5omA5pyJ5rC0XHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBHSVNXYXRlcigpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvd2F0ZXIvdmlzdWFsaXphdGlvbi9hbGwtc2VjdGlvbicsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIEdJUy3mn6Xmsp/muKBcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEdJU0NoYW5uZWwoe25hbWV9KSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL3dhdGVyL3dhdGVyR3F4eCcsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIGR3bWM6IG5hbWUsXHJcbiAgICAgIGdxbWM6IG5hbWVcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICog5aSn5rCU56uZ54K5XHJcbiAqIEBwYXJhbSB0eXBlIDPlhajpg6hcclxuICogQHBhcmFtIHRpbWUg5a+G56CBXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBaXJTaXRlKHt0aW1lfSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJ2h0dHA6Ly8xMTYuNTIuNi4xMTg6MTg4OTkvS1FaTFlaVy9ob21lL3JlYWxkYXRhP3R5cGU9MyZ0aW1lPScgKyB0aW1lLFxyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIGRhdGE6IHt9XHJcbiAgfSlcclxufVxyXG5cclxuLy8g55So5oi355m75b2VXHJcbmV4cG9ydCBjb25zdCB1c2VyTG9naW4gPSAobmFtZSwgcHdkKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL3N5c3RlbS1zZXJ2aWNlLWxvZ2luL3VzZXIvbG9naW4nLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgICB1c2VyTmFtZTogbmFtZSxcclxuICAgICAgcGFzc3dvcmQ6IHB3ZFxyXG4gICAgfVxyXG4gIH0pXHJcbn07XHJcblxyXG4vKipcclxuICog55So5oi357uE5Lu26K6i6ZiFXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VyU3Vic2NyaWJlKHRva2VuKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC9ob21lL3VzZXJTdWJzY3JpYmUnLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBUb2tlbjogdG9rZW5cclxuICAgIH1cclxuICB9KVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9pY29uMTMucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL2xvZ28taGVhZGVyLnBuZ1wiOyIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXhNb2NrLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mZThhNGZhOCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleE1vY2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleE1vY2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZGV4TW9jay52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mZThhNGZhOCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImZlOGE0ZmE4XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2ZlOGE0ZmE4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2ZlOGE0ZmE4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2ZlOGE0ZmE4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbmRleE1vY2sudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWZlOGE0ZmE4JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2ZlOGE0ZmE4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvbG9naW4vaW5kZXhNb2NrLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXhNb2NrLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleE1vY2sudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXhNb2NrLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWZlOGE0ZmE4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXhNb2NrLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mZThhNGZhOCZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=