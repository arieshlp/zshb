(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[106],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/notice/messageCenter.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/notice/messageCenter.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/api */ "./src/api/api.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      list: [],
      showFlag: false,
      idArr: []
    };
  },
  mounted: function mounted() {
    // document.addEventListener("messageReceived", function(result) {
    //     alert(result);
    // }, false);
    this.queryList(); // 注册推送
    // huaweiPush.register(function(token) {
    //     alert(token);
    // }, function(err) {
    //     alert(err);
    // }, []);
    //
  },
  methods: {
    queryList: function queryList() {
      var _this = this;

      Object(_api_api__WEBPACK_IMPORTED_MODULE_2__["sysNoticeInfo"])().then(function (res) {
        _this.list = res.data;
        _this.noticeId = res.data.map(function (item) {
          return item.noticeId;
        });
      });
    },
    onRead: function onRead(id) {
      var _this2 = this;

      Object(_api_api__WEBPACK_IMPORTED_MODULE_2__["noticeRead"])({
        noticeId: id
      }).then(function (res) {
        _this2.queryList();
      });
    },
    onReadAll: function onReadAll() {
      this.showFlag = true;
    },
    onSure: function onSure() {
      var _this3 = this;

      Object(_api_api__WEBPACK_IMPORTED_MODULE_2__["noticeRead"])({
        noticeId: this.noticeId.join(',')
      }).then(function (res) {
        _this3.showFlag = false;

        _this3.queryList();
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/notice/messageCenter.vue?vue&type=template&id=58d178df&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/notice/messageCenter.vue?vue&type=template&id=58d178df&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticStyle: { height: "calc(100vh)", "overflow-y": "auto" } },
    [
      _c("van-nav-bar", {
        attrs: {
          title: "消息中心",
          "right-text": "一键已读",
          fixed: "",
          "left-arrow": "",
        },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
          "click-right": _vm.onReadAll,
        },
      }),
      _c(
        "div",
        { staticClass: "task-wrapper" },
        [
          _vm._l(_vm.list, function (item) {
            return _c(
              "div",
              {
                staticClass: "task-box",
                on: {
                  click: function ($event) {
                    return _vm.onRead(item.noticeId)
                  },
                },
              },
              [
                _c("div", { staticClass: "fs task-box-title" }, [
                  _c("div", { staticClass: "send-subject" }),
                  _c(
                    "span",
                    {
                      staticStyle: {
                        color: "#aab2c8",
                        "font-weight": "normal",
                      },
                    },
                    [_vm._v(_vm._s(item.createTime))]
                  ),
                ]),
                _c(
                  "div",
                  { staticStyle: { color: "#25396f", padding: "8px" } },
                  [_vm._v(" " + _vm._s(item.content) + " ")]
                ),
              ]
            )
          }),
          _vm.list.length === 0
            ? _c("van-empty", { attrs: { description: "暂无数据" } })
            : _vm._e(),
        ],
        2
      ),
      _c(
        "van-popup",
        {
          staticStyle: { width: "50%" },
          attrs: { position: "center", round: "" },
          on: {
            close: function ($event) {
              _vm.showFlag = false
            },
          },
          model: {
            value: _vm.showFlag,
            callback: function ($$v) {
              _vm.showFlag = $$v
            },
            expression: "showFlag",
          },
        },
        [
          _c("div", { staticClass: "title" }, [_vm._v(" 是否一键已读 ")]),
          _c("div", { staticClass: "footer" }, [
            _c(
              "div",
              {
                staticClass: "cancel",
                on: {
                  click: function ($event) {
                    _vm.showFlag = false
                  },
                },
              },
              [_vm._v("取消")]
            ),
            _c("div", { staticClass: "sure", on: { click: _vm.onSure } }, [
              _vm._v("确定"),
            ]),
          ]),
        ]
      ),
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/notice/messageCenter.vue?vue&type=style&index=0&id=58d178df&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/notice/messageCenter.vue?vue&type=style&index=0&id=58d178df&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".task-wrapper[data-v-58d178df] {\n  margin-top: 50px;\n  padding: 12px;\n  overflow: auto;\n}\n.task-wrapper .task-box[data-v-58d178df] {\n  position: relative;\n  margin: 5px 0;\n  border-radius: 10px;\n  border: 1px solid #e3f0ff;\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);\n  font-size: 12px;\n  color: #756868;\n}\n.task-wrapper .task-box .task-box-title[data-v-58d178df] {\n  padding: 10px;\n  color: #447bfc;\n  font-size: 12px;\n  font-weight: bold;\n  background: #f9fafd;\n  border-radius: 10px 10px 0 0;\n}\n.title[data-v-58d178df] {\n  margin: 20px auto;\n  padding-left: 10px;\n  text-align: center;\n  font-size: 16px;\n  color: black;\n}\n.footer[data-v-58d178df] {\n  display: flex;\n  justify-content: space-between;\n  border-top: 1px solid rgba(18, 18, 54, 0.1);\n}\n.footer div[data-v-58d178df] {\n  padding: 15px 0;\n  width: 50%;\n  text-align: center;\n  font-size: 14px;\n}\n.footer .cancel[data-v-58d178df] {\n  border-right: 1px solid rgba(18, 18, 54, 0.1);\n  color: rgba(0, 0, 0, 0.5);\n}\n.footer .sure[data-v-58d178df] {\n  color: #447bfc;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/notice/messageCenter.vue?vue&type=style&index=0&id=58d178df&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/notice/messageCenter.vue?vue&type=style&index=0&id=58d178df&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./messageCenter.vue?vue&type=style&index=0&id=58d178df&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/notice/messageCenter.vue?vue&type=style&index=0&id=58d178df&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1a7e1d9f", content, false, {"sourceMap":false,"shadowMode":false});
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

/***/ "./src/views/notice/messageCenter.vue":
/*!********************************************!*\
  !*** ./src/views/notice/messageCenter.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _messageCenter_vue_vue_type_template_id_58d178df_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./messageCenter.vue?vue&type=template&id=58d178df&scoped=true& */ "./src/views/notice/messageCenter.vue?vue&type=template&id=58d178df&scoped=true&");
/* harmony import */ var _messageCenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./messageCenter.vue?vue&type=script&lang=js& */ "./src/views/notice/messageCenter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _messageCenter_vue_vue_type_style_index_0_id_58d178df_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./messageCenter.vue?vue&type=style&index=0&id=58d178df&lang=scss&scoped=true& */ "./src/views/notice/messageCenter.vue?vue&type=style&index=0&id=58d178df&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _messageCenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _messageCenter_vue_vue_type_template_id_58d178df_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _messageCenter_vue_vue_type_template_id_58d178df_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "58d178df",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/notice/messageCenter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/notice/messageCenter.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./src/views/notice/messageCenter.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_messageCenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./messageCenter.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/notice/messageCenter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_messageCenter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/notice/messageCenter.vue?vue&type=style&index=0&id=58d178df&lang=scss&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./src/views/notice/messageCenter.vue?vue&type=style&index=0&id=58d178df&lang=scss&scoped=true& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_messageCenter_vue_vue_type_style_index_0_id_58d178df_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./messageCenter.vue?vue&type=style&index=0&id=58d178df&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/notice/messageCenter.vue?vue&type=style&index=0&id=58d178df&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_messageCenter_vue_vue_type_style_index_0_id_58d178df_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_messageCenter_vue_vue_type_style_index_0_id_58d178df_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_messageCenter_vue_vue_type_style_index_0_id_58d178df_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_messageCenter_vue_vue_type_style_index_0_id_58d178df_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/notice/messageCenter.vue?vue&type=template&id=58d178df&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./src/views/notice/messageCenter.vue?vue&type=template&id=58d178df&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_messageCenter_vue_vue_type_template_id_58d178df_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./messageCenter.vue?vue&type=template&id=58d178df&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/notice/messageCenter.vue?vue&type=template&id=58d178df&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_messageCenter_vue_vue_type_template_id_58d178df_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_messageCenter_vue_vue_type_template_id_58d178df_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL25vdGljZS9tZXNzYWdlQ2VudGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvbm90aWNlL21lc3NhZ2VDZW50ZXIudnVlPzk0MmUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL25vdGljZS9tZXNzYWdlQ2VudGVyLnZ1ZT82MjhmIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9ub3RpY2UvbWVzc2FnZUNlbnRlci52dWU/ZThmYyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvbm90aWNlL21lc3NhZ2VDZW50ZXIudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9ub3RpY2UvbWVzc2FnZUNlbnRlci52dWU/ZDJjYSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvbm90aWNlL21lc3NhZ2VDZW50ZXIudnVlP2YyNTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL25vdGljZS9tZXNzYWdlQ2VudGVyLnZ1ZT84MmIwIl0sIm5hbWVzIjpbImxvZ2luIiwidG9rZW4iLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwicGFyYW1zIiwibG9naW5fY2x1ZSIsInNpdGVTZWFyY2giLCJwYWdlIiwibGltaXQiLCJuYW1lIiwic3lzTm90aWNlSW5mbyIsIm5vdGljZVJlYWQiLCJub3RpY2VJZCIsImxhd1NlYXJjaCIsImlkIiwibmVpZ2hib3VyU2l0ZVNlYXJjaCIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwibnVtYmVyIiwid2F0ZXJTaXRlRmluZSIsInR5cGUiLCJkcmlua1dhdGVyU3VtbWFyeSIsIndhcm5pbmdBaXIiLCJ3YXJuaW5nV2F0ZXIiLCJ3YXJuaW5nRWFybHlXYXRlciIsIndhdGVyU3RhdGlvbiIsIm9iamVjdGlkIiwiamNmcyIsImFpclF1YWxpdHkiLCJkYXRhIiwiYWlyUXVhbGl0eUlBUUkiLCJkaWFuV2F0ZXJRdWFsaXR5IiwiZ2V0Tm90aWNlTGlzdCIsIkdJU1BvbGx1dGl0b24iLCJHSVNXYXRlciIsIkdJU0NoYW5uZWwiLCJkd21jIiwiZ3FtYyIsImdldEFpclNpdGUiLCJ0aW1lIiwidXNlckxvZ2luIiwicHdkIiwidXNlck5hbWUiLCJwYXNzd29yZCIsInVzZXJTdWJzY3JpYmUiLCJUb2tlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0NBO0FBRUE7QUFDQSxlQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0EsY0FEQTtBQUVBLHFCQUZBO0FBR0E7QUFIQTtBQUtBLEdBUkE7QUFTQSxTQVRBLHFCQVNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEscUJBTEEsQ0FNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBdEJBO0FBdUJBO0FBQ0EsYUFEQSx1QkFDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQTtBQUdBLE9BTEE7QUFNQSxLQVJBO0FBU0EsVUFUQSxrQkFTQSxFQVRBLEVBU0E7QUFBQTs7QUFDQTtBQUNBO0FBREEsU0FFQSxJQUZBLENBRUE7QUFDQTtBQUNBLE9BSkE7QUFLQSxLQWZBO0FBZ0JBLGFBaEJBLHVCQWdCQTtBQUNBO0FBQ0EsS0FsQkE7QUFtQkEsVUFuQkEsb0JBbUJBO0FBQUE7O0FBQ0E7QUFDQTtBQURBLFNBRUEsSUFGQSxDQUVBO0FBQ0E7O0FBQ0E7QUFDQSxPQUxBO0FBTUE7QUExQkE7QUF2QkEsRzs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssZUFBZSw4Q0FBOEMsRUFBRTtBQUNwRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxTQUFT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Rks7QUFHYkMsVUFBTSxFQUFFO0FBQ05zQyxjQUFRLEVBQUVqQyxJQURKO0FBRU5rQyxjQUFRLEVBQUVGO0FBRko7QUFISyxHQUFELENBQWQ7QUFRRCxDQVRNO0FBV1A7QUFDQTtBQUNBOztBQUNPLFNBQVNHLGFBQVQsQ0FBdUI1QyxLQUF2QixFQUE4QjtBQUNuQyxTQUFPQyx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRSx5QkFEUTtBQUViQyxVQUFNLEVBQUUsS0FGSztBQUdiQyxVQUFNLEVBQUU7QUFDTnlDLFdBQUssRUFBRTdDO0FBREQ7QUFISyxHQUFELENBQWQ7QUFPRCxDOzs7Ozs7Ozs7Ozs7QUN6UkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUF3RztBQUN2QztBQUNMO0FBQ3NDOzs7QUFHbEc7QUFDNkY7QUFDN0YsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsbUZBQU07QUFDUixFQUFFLG9HQUFNO0FBQ1IsRUFBRSw2R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBc1MsQ0FBZ0IsOFVBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBMVQ7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvMTA2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IGNhbGMoMTAwdmgpO292ZXJmbG93LXk6IGF1dG87XCI+XHJcbiAgICA8dmFuLW5hdi1iYXJcclxuICAgICAgICB0aXRsZT1cIua2iOaBr+S4reW/g1wiXHJcbiAgICAgICAgcmlnaHQtdGV4dD1cIuS4gOmUruW3suivu1wiXHJcbiAgICAgICAgZml4ZWRcclxuICAgICAgICBsZWZ0LWFycm93XHJcbiAgICAgICAgQGNsaWNrLWxlZnQ9XCIkcm91dGVyLmdvKC0xKVwiXHJcbiAgICAgICAgQGNsaWNrLXJpZ2h0PVwib25SZWFkQWxsXCJcclxuICAgID5cclxuICAgIDwvdmFuLW5hdi1iYXI+XHJcbiAgICA8ZGl2IGNsYXNzPVwidGFzay13cmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWJveFwiIHYtZm9yPVwiaXRlbSBpbiBsaXN0XCIgQGNsaWNrPVwib25SZWFkKGl0ZW0ubm90aWNlSWQpXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZzIHRhc2stYm94LXRpdGxlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VuZC1zdWJqZWN0XCI+XHJcbiAgICAgICAgICAgIDwhLS0gICAgICAgICAgICDmsLTnjq/looMtLT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9XCJjb2xvcjogI2FhYjJjODtmb250LXdlaWdodDogbm9ybWFsXCI+e3tpdGVtLmNyZWF0ZVRpbWV9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPVwiY29sb3I6ICMyNTM5NmY7cGFkZGluZzogOHB4XCI+XHJcbiAgICAgICAgICB7e2l0ZW0uY29udGVudH19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8dmFuLWVtcHR5IHYtaWY9XCJsaXN0Lmxlbmd0aD09PTBcIiBkZXNjcmlwdGlvbj1cIuaaguaXoOaVsOaNrlwiIC8+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8dmFuLXBvcHVwIHYtbW9kZWw9XCJzaG93RmxhZ1wiIHBvc2l0aW9uPVwiY2VudGVyXCIgcm91bmQgQGNsb3NlPVwic2hvd0ZsYWcgPSBmYWxzZVwiIHN0eWxlPVwid2lkdGg6IDUwJVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAgICDmmK/lkKbkuIDplK7lt7Lor7tcclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FuY2VsXCIgQGNsaWNrPVwic2hvd0ZsYWcgPSBmYWxzZVwiPuWPlua2iDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdXJlXCIgQGNsaWNrPVwib25TdXJlXCI+56Gu5a6aPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC92YW4tcG9wdXA+XHJcblxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQge3N5c05vdGljZUluZm8sIG5vdGljZVJlYWR9IGZyb20gXCIuLi8uLi9hcGkvYXBpXCI7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiaW5kZXhcIixcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbGlzdDogW10sXHJcbiAgICAgICAgc2hvd0ZsYWc6IGZhbHNlLFxyXG4gICAgICAgIGlkQXJyOiBbXSxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlUmVjZWl2ZWRcIiwgZnVuY3Rpb24ocmVzdWx0KSB7XHJcbiAgICAgIC8vICAgICBhbGVydChyZXN1bHQpO1xyXG4gICAgICAvLyB9LCBmYWxzZSk7XHJcblxyXG4gICAgICB0aGlzLnF1ZXJ5TGlzdCgpXHJcbiAgICAgIC8vIOazqOWGjOaOqOmAgVxyXG4gICAgICAvLyBodWF3ZWlQdXNoLnJlZ2lzdGVyKGZ1bmN0aW9uKHRva2VuKSB7XHJcbiAgICAgIC8vICAgICBhbGVydCh0b2tlbik7XHJcbiAgICAgIC8vIH0sIGZ1bmN0aW9uKGVycikge1xyXG4gICAgICAvLyAgICAgYWxlcnQoZXJyKTtcclxuICAgICAgLy8gfSwgW10pO1xyXG4gICAgICAvL1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgcXVlcnlMaXN0KCkge1xyXG4gICAgICAgIHN5c05vdGljZUluZm8oKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLmxpc3QgPSByZXMuZGF0YTtcclxuICAgICAgICAgIHRoaXMubm90aWNlSWQgPSByZXMuZGF0YS5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLm5vdGljZUlkXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBvblJlYWQoaWQpIHtcclxuICAgICAgICBub3RpY2VSZWFkKHtcclxuICAgICAgICAgIG5vdGljZUlkOiBpZCxcclxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLnF1ZXJ5TGlzdCgpXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgb25SZWFkQWxsKCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0ZsYWcgPSB0cnVlO1xyXG4gICAgICB9LFxyXG4gICAgICBvblN1cmUoKSB7XHJcbiAgICAgICAgbm90aWNlUmVhZCh7XHJcbiAgICAgICAgICBub3RpY2VJZDogdGhpcy5ub3RpY2VJZC5qb2luKCcsJyksXHJcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zaG93RmxhZyA9IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5xdWVyeUxpc3QoKVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG5cclxuICAudGFzay13cmFwcGVyIHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICBwYWRkaW5nOiAxMnB4O1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gICAgLnRhc2stYm94IHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBtYXJnaW46IDVweCAwO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTNmMGZmO1xyXG4gICAgICBib3gtc2hhZG93OiAwcHggNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBjb2xvcjogIzc1Njg2ODtcclxuXHJcbiAgICAgIC50YXNrLWJveC10aXRsZSB7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBjb2xvcjogIzQ0N2JmYztcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2Y5ZmFmZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgfVxyXG5cclxuICAuZm9vdGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgxOCwgMTgsIDU0LCAwLjEpO1xyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgIHBhZGRpbmc6IDE1cHggMDtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNhbmNlbCB7XHJcbiAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMTgsIDE4LCA1NCwgMC4xKTtcclxuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuICAgIH1cclxuXHJcbiAgICAuc3VyZSB7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDY4LCAxMjMsIDI1MiwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG48L3N0eWxlPlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcImNhbGMoMTAwdmgpXCIsIFwib3ZlcmZsb3cteVwiOiBcImF1dG9cIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXCJ2YW4tbmF2LWJhclwiLCB7XG4gICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgdGl0bGU6IFwi5raI5oGv5Lit5b+DXCIsXG4gICAgICAgICAgXCJyaWdodC10ZXh0XCI6IFwi5LiA6ZSu5bey6K+7XCIsXG4gICAgICAgICAgZml4ZWQ6IFwiXCIsXG4gICAgICAgICAgXCJsZWZ0LWFycm93XCI6IFwiXCIsXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgXCJjbGljay1sZWZ0XCI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0uJHJvdXRlci5nbygtMSlcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiY2xpY2stcmlnaHRcIjogX3ZtLm9uUmVhZEFsbCxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFzay13cmFwcGVyXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fbChfdm0ubGlzdCwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhc2stYm94XCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25SZWFkKGl0ZW0ubm90aWNlSWQpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZzIHRhc2stYm94LXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzZW5kLXN1YmplY3RcIiB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjYWFiMmM4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtd2VpZ2h0XCI6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbS5jcmVhdGVUaW1lKSldXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwiIzI1Mzk2ZlwiLCBwYWRkaW5nOiBcIjhweFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCIgXCIgKyBfdm0uX3MoaXRlbS5jb250ZW50KSArIFwiIFwiKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLmxpc3QubGVuZ3RoID09PSAwXG4gICAgICAgICAgICA/IF9jKFwidmFuLWVtcHR5XCIsIHsgYXR0cnM6IHsgZGVzY3JpcHRpb246IFwi5pqC5peg5pWw5o2uXCIgfSB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcInZhbi1wb3B1cFwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiNTAlXCIgfSxcbiAgICAgICAgICBhdHRyczogeyBwb3NpdGlvbjogXCJjZW50ZXJcIiwgcm91bmQ6IFwiXCIgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgX3ZtLnNob3dGbGFnID0gZmFsc2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5zaG93RmxhZyxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5zaG93RmxhZyA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2hvd0ZsYWdcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiIH0sIFtfdm0uX3YoXCIg5piv5ZCm5LiA6ZSu5bey6K+7IFwiKV0pLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZm9vdGVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYW5jZWxcIixcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3dGbGFnID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIuWPlua2iFwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInN1cmVcIiwgb246IHsgY2xpY2s6IF92bS5vblN1cmUgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIuehruWumlwiKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdXG4gICAgICApLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJG1hcCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5tYXA7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ21hcCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLm1hcGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5tYXBcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIG1hcDogZnVuY3Rpb24gbWFwKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRtYXAodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGFzay13cmFwcGVyW2RhdGEtdi01OGQxNzhkZl0ge1xcbiAgbWFyZ2luLXRvcDogNTBweDtcXG4gIHBhZGRpbmc6IDEycHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XFxuLnRhc2std3JhcHBlciAudGFzay1ib3hbZGF0YS12LTU4ZDE3OGRmXSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBtYXJnaW46IDVweCAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlM2YwZmY7XFxuICBib3gtc2hhZG93OiAwcHggNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjNzU2ODY4O1xcbn1cXG4udGFzay13cmFwcGVyIC50YXNrLWJveCAudGFzay1ib3gtdGl0bGVbZGF0YS12LTU4ZDE3OGRmXSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgY29sb3I6ICM0NDdiZmM7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQ6ICNmOWZhZmQ7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMCAwO1xcbn1cXG4udGl0bGVbZGF0YS12LTU4ZDE3OGRmXSB7XFxuICBtYXJnaW46IDIwcHggYXV0bztcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLmZvb3RlcltkYXRhLXYtNThkMTc4ZGZdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgxOCwgMTgsIDU0LCAwLjEpO1xcbn1cXG4uZm9vdGVyIGRpdltkYXRhLXYtNThkMTc4ZGZdIHtcXG4gIHBhZGRpbmc6IDE1cHggMDtcXG4gIHdpZHRoOiA1MCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi5mb290ZXIgLmNhbmNlbFtkYXRhLXYtNThkMTc4ZGZdIHtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMTgsIDE4LCA1NCwgMC4xKTtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcbi5mb290ZXIgLnN1cmVbZGF0YS12LTU4ZDE3OGRmXSB7XFxuICBjb2xvcjogIzQ0N2JmYztcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tZXNzYWdlQ2VudGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU4ZDE3OGRmJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMWE3ZTFkOWZcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tZXNzYWdlQ2VudGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU4ZDE3OGRmJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWVzc2FnZUNlbnRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01OGQxNzhkZiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcclxuXHJcbi8qKlxyXG4gKiDnmbvlvZVcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luKHRva2VuKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC9sb2dpbi91c2VyX2luZm8nLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgICB0b2tlbjogdG9rZW5cclxuICAgIH1cclxuICB9KVxyXG59XHJcbi8qKlxyXG4gKiDnmbvlvZUtLee6v+e0olxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbG9naW5fY2x1ZSh0b2tlbikge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9tYW5hZ2UvbG9naW4vdG9rZW5fdXNlcl9pbmZvJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgdG9rZW46IHRva2VuXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG4vKipcclxuICog56uZ54K55pCc57SiXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaXRlU2VhcmNoKHtwYWdlLCBsaW1pdCwgbmFtZX0pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBwL2hvbWUvbGlzdCcsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIHBhZ2U6IHBhZ2UsXHJcbiAgICAgIGxpbWl0OiBsaW1pdCxcclxuICAgICAgbmFtZTogbmFtZVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDnlKjmiLfpgJrnn6VcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN5c05vdGljZUluZm8oKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC9zeXNOb3RpY2VJbmZvJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOeUqOaIt+mAmuefpVxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbm90aWNlUmVhZCh7bm90aWNlSWR9KSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC9zeXNOb3RpY2VJbmZvL3JlYWQnLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBub3RpY2VJZDogbm90aWNlSWRcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICog5rOV5b6L5rOV6KeE5pCc57SiXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsYXdTZWFyY2goeyBuYW1lfSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9pbnRlcmZhY2UvcmV0cmlldmFsL2RvY3VtZW50X3NlYXJjaCcsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIHBhZ2U6IDEsXHJcbiAgICAgIGxpbWl0OiAxMDAwLFxyXG4gICAgICBpZDogJzUwNCw1MDUsNTA2JyxcclxuICAgICAgbmFtZTogbmFtZVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlkajovrnnq5nngrnmkJzntKJcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG5laWdoYm91clNpdGVTZWFyY2goe2xvbmdpdHVkZSwgbGF0aXR1ZGUsIG51bWJlcn0pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBwL2hvbWUvc3Vycm91bmRpbmcnLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBsb25naXR1ZGUsIGxhdGl0dWRlLCBudW1iZXJcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICog5Zu955yB6ICD56uZ54K55LyY6Imv5oOF5Ya1XHJcbiAqIEBwYXJhbSB0eXBlIDHlm73ogIMy55yB6ICDXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXRlclNpdGVGaW5lKHt0eXBlfSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvaG9tZS8nK3R5cGUsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOmlrueUqOawtOa6kOWcsOamguWGtVxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZHJpbmtXYXRlclN1bW1hcnkoKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC9ob21lJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICog6LaF5qCH5ZGK6K2mLeawlFxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd2FybmluZ0FpcigpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBwL2hvbWUvYWlyV2FybmluZycsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOi2heagh+WRiuitpi3msLRcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHdhcm5pbmdXYXRlcigpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvRENNUk0xMzAvbWVzc2FnZS9hYm5vcm1hbERhdGEnLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDotoXmoIfpooToraYt5rC0XHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXJuaW5nRWFybHlXYXRlcigpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvd2F0ZXIvY29tbW9uL3dhcm5pbmdzJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vLyDmsLTnq5nor6bmg4VcclxuZXhwb3J0IGZ1bmN0aW9uIHdhdGVyU3RhdGlvbihvYmplY3RpZCwgdHlwZSwgamNmcykge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9EQ01STTEzMC9seWR0L2dldEx5ZHRHaycsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIG9iamVjdGlkLCB0eXBlLCBqY2ZzLFxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlhajluILnqbrmsJTotKjph49cclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFpclF1YWxpdHkoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvaG9tZS9haXInLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczpkYXRhXHJcbiAgfSlcclxufVxyXG4vKipcclxuICog5YWo5biC56m65rCU6LSo6YePSUFRSVxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWlyUXVhbGl0eUlBUUkoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvaG9tZS9nZXRJbmRleElhcWknLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczpkYXRhXHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOa7h+axoOawtOi0qOeKtuWGtVxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGlhbldhdGVyUXVhbGl0eSgpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBwL2hvbWUvc2l0dWF0aW9uJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vL+mAmuefpeWFrOWRiiAtIOWIl+ihqFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm90aWNlTGlzdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2tlcF9tYW5hZ2Uvbm90aWNlL3F1ZXJ5TGlzdEluZm8nLFxyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIHBhcmFtczogZGF0YVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHSVMt5omA5pyJ5rGh5p+T5rqQXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBHSVNQb2xsdXRpdG9uKCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9wb2xsdXQvcG9sbHV0aW9uL2dldEFsbFN1bW1hcnknLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHSVMt5omA5pyJ5rC0XHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBHSVNXYXRlcigpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvd2F0ZXIvdmlzdWFsaXphdGlvbi9hbGwtc2VjdGlvbicsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIEdJUy3mn6Xmsp/muKBcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEdJU0NoYW5uZWwoe25hbWV9KSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL3dhdGVyL3dhdGVyR3F4eCcsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIGR3bWM6IG5hbWUsXHJcbiAgICAgIGdxbWM6IG5hbWVcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICog5aSn5rCU56uZ54K5XHJcbiAqIEBwYXJhbSB0eXBlIDPlhajpg6hcclxuICogQHBhcmFtIHRpbWUg5a+G56CBXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBaXJTaXRlKHt0aW1lfSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJ2h0dHA6Ly8xMTYuNTIuNi4xMTg6MTg4OTkvS1FaTFlaVy9ob21lL3JlYWxkYXRhP3R5cGU9MyZ0aW1lPScgKyB0aW1lLFxyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIGRhdGE6IHt9XHJcbiAgfSlcclxufVxyXG5cclxuLy8g55So5oi355m75b2VXHJcbmV4cG9ydCBjb25zdCB1c2VyTG9naW4gPSAobmFtZSwgcHdkKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL3N5c3RlbS1zZXJ2aWNlLWxvZ2luL3VzZXIvbG9naW4nLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgICB1c2VyTmFtZTogbmFtZSxcclxuICAgICAgcGFzc3dvcmQ6IHB3ZFxyXG4gICAgfVxyXG4gIH0pXHJcbn07XHJcblxyXG4vKipcclxuICog55So5oi357uE5Lu26K6i6ZiFXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VyU3Vic2NyaWJlKHRva2VuKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC9ob21lL3VzZXJTdWJzY3JpYmUnLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBUb2tlbjogdG9rZW5cclxuICAgIH1cclxuICB9KVxyXG59XHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbWVzc2FnZUNlbnRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NThkMTc4ZGYmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbWVzc2FnZUNlbnRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL21lc3NhZ2VDZW50ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL21lc3NhZ2VDZW50ZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NThkMTc4ZGYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1OGQxNzhkZlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1OGQxNzhkZicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1OGQxNzhkZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1OGQxNzhkZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbWVzc2FnZUNlbnRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NThkMTc4ZGYmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNThkMTc4ZGYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9ub3RpY2UvbWVzc2FnZUNlbnRlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21lc3NhZ2VDZW50ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21lc3NhZ2VDZW50ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWVzc2FnZUNlbnRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01OGQxNzhkZiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21lc3NhZ2VDZW50ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU4ZDE3OGRmJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==