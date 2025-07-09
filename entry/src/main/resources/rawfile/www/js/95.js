(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[95],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/commonFunction/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/commonFunction/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/login */ "./src/api/login.js");
/* harmony import */ var _api_case__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/case */ "./src/api/case.js");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../api/api */ "./src/api/api.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/utils */ "./src/utils/utils.js");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      indexRole: {},
      menuList: [],
      caseUndoNum: 0,
      token: null,
      currentLocation: null
    };
  },
  mounted: function mounted() {
    this.getUserInfo();
    this.token = this.$store.state.token;
    document.addEventListener("deviceready", this.onDeviceReady, false);
  },
  methods: {
    onDeviceReady: function onDeviceReady() {
      var _this = this;

      var options = {
        enableHighAccuracy: true,
        // 是否使用 GPS
        maximumAge: 30000,
        // 缓存时间
        timeout: 27000,
        // 超时时间
        coorType: 'wgs84' // 默认是 gcj02，可填 bd09ll wgs84、gcj02以获取百度经纬度用于访问百度 API

      };
      navigator.geolocation.getCurrentPosition(function (info) {
        _this.currentLocation = info;
      }, function (error) {
        alert('失败');
      }, options);
    },
    // onGis() {
    //   this.$router.push("/envInspectors");
    // },
    getUserInfo: function getUserInfo() {
      var _this2 = this;

      Object(_api_api__WEBPACK_IMPORTED_MODULE_5__["login"])(this.$store.state.token).then(function (res) {
        _this2.queryUserBtn(res.data.user.objectid);
      });
    },
    //查询用户关联的menu
    queryUserBtn: function queryUserBtn(id) {
      var _this3 = this;

      Object(_api_login__WEBPACK_IMPORTED_MODULE_3__["getUserBtnList"])({
        userId: id
      }).then(function (res) {
        var tempD = res.data.filter(function (item) {
          return item.name !== "GIS";
        });
        _this3.menuList = tempD.filter(function (item) {
          if (item.flag && item.name == "案件审批") {
            _this3.initCaseUndoNum();
          }

          return item.flag;
        });
      });
    },
    initCaseUndoNum: function initCaseUndoNum() {
      var _this4 = this;

      var search = {
        pageNum: 1,
        pageSize: 9999,
        type: "",
        year: "",
        status: "待审批"
      };
      Object(_api_case__WEBPACK_IMPORTED_MODULE_4__["queryTypeCaseList"])(search).then(function (res) {
        _this4.caseUndoNum = res.data.total;
      });
    },
    onLink: function onLink(item) {
      console.log(item);
      var otherArr = ['自由裁量', '环保标准', '法律法规', '调度平台', '水环境'];
      var url = "";

      if (otherArr.indexOf(item.name) > -1) {
        url = item.url + "?token=" + this.token;
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["openBrowser"])(url);
      } else {
        if (item.name === "气环境") {
          url = "http://10.221.29.4:17000/kqzl/#/Home" + "?phone=" + localStorage.getItem("phone");
          Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["openBrowser"])(url);
        } else if (item.name === "污染源") {
          url = "http://10.221.29.4:17001/wrygj/index.html#/sso?title=首页&token=" + this.token + '&jd=' + this.currentLocation.coords.longitude + '&wd=' + this.currentLocation.coords.latitude;
          Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["openBrowser"])(url);
        } else if (item.name === "执法监测") {
          url = "http://10.221.29.4:17001/wrygj/index.html#/sso?title=执法监测&token=" + this.token;
          Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["openBrowser"])(url);
        } else if (item.name === "督办事项") {
          url = "http://10.221.29.4:17001/wrygj/index.html#/sso?title=督办事项&token=" + this.token;
          Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["openBrowser"])(url);
        } else if (item.name === "任务下达") {
          url = "http://10.221.29.4:17001/wrygj/index.html#/sso?title=任务下达&token=" + this.token + '&jd=' + this.currentLocation.coords.longitude + '&wd=' + this.currentLocation.coords.latitude;
          Object(_utils_utils__WEBPACK_IMPORTED_MODULE_6__["openBrowser"])(url);
        } else {
          this.$router.push(item.url);
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/commonFunction/index.vue?vue&type=template&id=5bb726c0&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/commonFunction/index.vue?vue&type=template&id=5bb726c0&scoped=true& ***!
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
    [
      _c("van-nav-bar", {
        attrs: { title: "常用功能", "left-arrow": "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
      }),
      _c("div", { staticClass: "function-wrapper" }, [
        _c(
          "div",
          { staticClass: "function-box" },
          _vm._l(_vm.menuList, function (item) {
            return _c(
              "div",
              {
                staticClass: "function-item",
                on: {
                  click: function ($event) {
                    return _vm.onLink(item)
                  },
                },
              },
              [
                item.icon ? _c("img", { attrs: { src: item.icon } }) : _vm._e(),
                _vm._v(" " + _vm._s(item.name) + " "),
                item.name === "案件审批"
                  ? _c("div", { staticClass: "number" }, [
                      _c("span", [_vm._v(_vm._s(_vm.caseUndoNum))]),
                    ])
                  : _vm._e(),
              ]
            )
          }),
          0
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/commonFunction/index.vue?vue&type=style&index=0&id=5bb726c0&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/commonFunction/index.vue?vue&type=style&index=0&id=5bb726c0&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fs[data-v-5bb726c0] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.function-wrapper[data-v-5bb726c0] {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  margin: 10px 13px;\n  padding: 0 0 13px;\n  border: 1px solid white;\n  background: linear-gradient(to bottom, #f5fdff, white);\n  border-radius: 10px;\n}\n.function-wrapper .function-title[data-v-5bb726c0] {\n  padding-bottom: 8px;\n  color: #121236;\n  font-size: 16px;\n}\n.function-wrapper .function-box[data-v-5bb726c0] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n}\n.function-wrapper .function-box .function-item[data-v-5bb726c0] {\n  display: flex;\n  justify-content: flex-start;\n  text-align: center;\n  flex-direction: column;\n  width: 20%;\n  font-size: 12px;\n  margin: 3px 0;\n}\n.function-wrapper .function-box .function-item img[data-v-5bb726c0] {\n  margin: 7px auto;\n  height: 28px;\n}\n.function-wrapper .function-box .function-item .old-app-icon[data-v-5bb726c0] {\n  transform: scale(1.2);\n  border-radius: 5px;\n}\n.function-wrapper .function-box .function-item .number[data-v-5bb726c0] {\n  background: red;\n  color: white;\n  width: 18px;\n  height: 18px;\n  border-radius: 18px;\n  line-height: 18px;\n  position: absolute;\n  margin-left: 40px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/commonFunction/index.vue?vue&type=style&index=0&id=5bb726c0&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/commonFunction/index.vue?vue&type=style&index=0&id=5bb726c0&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=5bb726c0&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/commonFunction/index.vue?vue&type=style&index=0&id=5bb726c0&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("0a7aae2c", content, false, {"sourceMap":false,"shadowMode":false});
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

/***/ "./src/views/commonFunction/index.vue":
/*!********************************************!*\
  !*** ./src/views/commonFunction/index.vue ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_5bb726c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=5bb726c0&scoped=true& */ "./src/views/commonFunction/index.vue?vue&type=template&id=5bb726c0&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/commonFunction/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_5bb726c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=5bb726c0&lang=scss&scoped=true& */ "./src/views/commonFunction/index.vue?vue&type=style&index=0&id=5bb726c0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_5bb726c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_5bb726c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5bb726c0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/commonFunction/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/commonFunction/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./src/views/commonFunction/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/commonFunction/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/commonFunction/index.vue?vue&type=style&index=0&id=5bb726c0&lang=scss&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./src/views/commonFunction/index.vue?vue&type=style&index=0&id=5bb726c0&lang=scss&scoped=true& ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5bb726c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=5bb726c0&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/commonFunction/index.vue?vue&type=style&index=0&id=5bb726c0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5bb726c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5bb726c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5bb726c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5bb726c0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/commonFunction/index.vue?vue&type=template&id=5bb726c0&scoped=true&":
/*!***************************************************************************************!*\
  !*** ./src/views/commonFunction/index.vue?vue&type=template&id=5bb726c0&scoped=true& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5bb726c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=5bb726c0&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/commonFunction/index.vue?vue&type=template&id=5bb726c0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5bb726c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_5bb726c0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2NvbW1vbkZ1bmN0aW9uL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY29tbW9uRnVuY3Rpb24vaW5kZXgudnVlP2Y5OTMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5maWx0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2NvbW1vbkZ1bmN0aW9uL2luZGV4LnZ1ZT83YmM2Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jb21tb25GdW5jdGlvbi9pbmRleC52dWU/NDg0MCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2Nhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2NvbW1vbkZ1bmN0aW9uL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvY29tbW9uRnVuY3Rpb24vaW5kZXgudnVlPzcyZjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2NvbW1vbkZ1bmN0aW9uL2luZGV4LnZ1ZT9jYjkyIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9jb21tb25GdW5jdGlvbi9pbmRleC52dWU/Y2EwMyJdLCJuYW1lcyI6WyJsb2dpbiIsInRva2VuIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInBhcmFtcyIsImxvZ2luX2NsdWUiLCJzaXRlU2VhcmNoIiwicGFnZSIsImxpbWl0IiwibmFtZSIsInN5c05vdGljZUluZm8iLCJub3RpY2VSZWFkIiwibm90aWNlSWQiLCJsYXdTZWFyY2giLCJpZCIsIm5laWdoYm91clNpdGVTZWFyY2giLCJsb25naXR1ZGUiLCJsYXRpdHVkZSIsIm51bWJlciIsIndhdGVyU2l0ZUZpbmUiLCJ0eXBlIiwiZHJpbmtXYXRlclN1bW1hcnkiLCJ3YXJuaW5nQWlyIiwid2FybmluZ1dhdGVyIiwid2FybmluZ0Vhcmx5V2F0ZXIiLCJ3YXRlclN0YXRpb24iLCJvYmplY3RpZCIsImpjZnMiLCJhaXJRdWFsaXR5IiwiZGF0YSIsImFpclF1YWxpdHlJQVFJIiwiZGlhbldhdGVyUXVhbGl0eSIsImdldE5vdGljZUxpc3QiLCJHSVNQb2xsdXRpdG9uIiwiR0lTV2F0ZXIiLCJHSVNDaGFubmVsIiwiZHdtYyIsImdxbWMiLCJnZXRBaXJTaXRlIiwidGltZSIsInVzZXJMb2dpbiIsInB3ZCIsInVzZXJOYW1lIiwicGFzc3dvcmQiLCJ1c2VyU3Vic2NyaWJlIiwiVG9rZW4iLCJxdWVyeVNlbGVjdEJ5SWQiLCJkaXNjdXNzU2VsZWN0QnlDYXNlSWQiLCJzdXBlcnZpc2VTZWxlY3RCeUNhc2VJZCIsImxlZ2FsU2VsZWN0QnlDYXNlSWQiLCJzZWxlY3RCeUNhc2VJZCIsInB1bmlzaFNlbGVjdEJ5Q2FzZUlkIiwiZ2V0SGVhcmluZ0J5Q2FzZUlkIiwic3RhZ2VTZWxlY3RCeUNhc2VJZCIsImdldFVzZXJJbmZvIiwiZ2V0VXNlckxpc3QiLCJxdWVyeVR5cGVDYXNlTGlzdCIsImFkZFJlcG9ydCIsImdldFJlcG9ydERldGFpbCIsInNpZ25SZXBvcnQiLCJjb3VudEluZm8iLCJnZXRBbGxSZXBvcnQiLCJjaGVja1B3ZCIsInF1ZXJ5RGl2aXNpb24iLCJnZXRTdXBlckJhdGNoIiwiZ2V0U3VwZXJMaXN0IiwiaW5mbyIsImdldFN1cGVyTGlzdERldGFpbCIsImJvYXJkIiwiY291bnR5TGlzdCIsImluZm9MaXN0IiwiYmFzZUluZm8iLCJkaXN0cmlidXRlIiwiaGFuZGxlIiwiZmluYWwiLCJjb21wYW55IiwicHJvYmxlbSIsInRpbWVHcm91cCIsInVuaXQiLCJwcm9ibGVtTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsZUFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBLG1CQURBO0FBRUEsa0JBRkE7QUFHQSxvQkFIQTtBQUlBLGlCQUpB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ImZpbGUiOiJqcy85NS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPHZhbi1uYXYtYmFyXHJcbiAgICAgICAgdGl0bGU9XCLluLjnlKjlip/og71cIlxyXG4gICAgICAgIGxlZnQtYXJyb3dcclxuICAgICAgICBAY2xpY2stbGVmdD1cIiRyb3V0ZXIuZ28oLTEpXCJcclxuICAgID5cclxuICAgIDwvdmFuLW5hdi1iYXI+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImZ1bmN0aW9uLXdyYXBwZXJcIj5cclxuICAgICAgPCEtLTxkaXYgY2xhc3M9XCJmdW5jdGlvbi10aXRsZVwiPlxyXG4gICAgICAgIOawtOeOr+Wig1xyXG4gICAgICA8L2Rpdj4tLT5cclxuICAgICAgPGRpdiBjbGFzcz1cImZ1bmN0aW9uLWJveFwiPlxyXG4gICAgICAgIDxkaXYgdi1mb3I9XCJpdGVtIGluIG1lbnVMaXN0XCIgY2xhc3M9XCJmdW5jdGlvbi1pdGVtXCIgQGNsaWNrPVwib25MaW5rKGl0ZW0pXCI+XHJcbiAgICAgICAgICA8aW1nIHYtaWY9XCJpdGVtLmljb25cIiA6c3JjPVwiaXRlbS5pY29uXCIgLz5cclxuICAgICAgICAgIHt7IGl0ZW0ubmFtZSB9fVxyXG4gICAgICAgICAgPCEtLSDmoYjku7blvoXlrqHmibnmlbDph48gLS0+XHJcbiAgICAgICAgICA8ZGl2IHYtaWY9XCJpdGVtLm5hbWUgPT09ICfmoYjku7blrqHmibknXCIgY2xhc3M9XCJudW1iZXJcIj5cclxuICAgICAgICAgICAgPHNwYW4+e3sgY2FzZVVuZG9OdW0gfX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJmdW5jdGlvbi1pdGVtXCIgQGNsaWNrPVwib25HaXMoKVwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJ+QC9hc3NldHMvR0lTLemAieS4rS5wbmdcIiBzdHlsZT1cIndpZHRoOiA0MHB4OyBoZWlnaHQ6IDQwcHhcIiAvPlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT1cIm1hcmdpbi10b3A6IC0xMHB4XCI+552j5a+fPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+IC0tPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHsgZ2V0VXNlckJ0bkxpc3QgfSBmcm9tIFwiQC9hcGkvbG9naW5cIjtcclxuaW1wb3J0IHsgcXVlcnlUeXBlQ2FzZUxpc3QgfSBmcm9tIFwiQC9hcGkvY2FzZVwiO1xyXG5pbXBvcnQgeyBsb2dpbiB9IGZyb20gXCIuLi8uLi9hcGkvYXBpXCI7XHJcbmltcG9ydCB7IG9wZW5Ccm93c2VyIH0gZnJvbSBcIkAvdXRpbHMvdXRpbHNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcImluZGV4XCIsXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGluZGV4Um9sZToge30sXHJcbiAgICAgIG1lbnVMaXN0OiBbXSxcclxuICAgICAgY2FzZVVuZG9OdW06IDAsXHJcbiAgICAgIHRva2VuOiBudWxsLFxyXG4gICAgICBjdXJyZW50TG9jYXRpb246IG51bGxcclxuICAgIH07XHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgdGhpcy5nZXRVc2VySW5mbygpO1xyXG4gICAgdGhpcy50b2tlbiA9IHRoaXMuJHN0b3JlLnN0YXRlLnRva2VuO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJkZXZpY2VyZWFkeVwiLCB0aGlzLm9uRGV2aWNlUmVhZHksIGZhbHNlKTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIG9uRGV2aWNlUmVhZHkoKSB7XHJcbiAgICAgIGxldCBfdGhpcyA9IHRoaXM7XHJcbiAgICAgIHZhciBvcHRpb25zID0ge1xyXG4gICAgICAgIGVuYWJsZUhpZ2hBY2N1cmFjeTogdHJ1ZSwgIC8vIOaYr+WQpuS9v+eUqCBHUFNcclxuICAgICAgICBtYXhpbXVtQWdlOiAzMDAwMCwgICAgICAgICAvLyDnvJPlrZjml7bpl7RcclxuICAgICAgICB0aW1lb3V0OiAyNzAwMCwgICAgICAgICAgICAvLyDotoXml7bml7bpl7RcclxuICAgICAgICBjb29yVHlwZTogJ3dnczg0JyAgICAgICAgIC8vIOm7mOiupOaYryBnY2owMu+8jOWPr+WhqyBiZDA5bGwgd2dzODTjgIFnY2owMuS7peiOt+WPlueZvuW6pue7j+e6rOW6pueUqOS6juiuv+mXrueZvuW6piBBUElcclxuICAgICAgfVxyXG4gICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24uZ2V0Q3VycmVudFBvc2l0aW9uKGZ1bmN0aW9uKGluZm8pe1xyXG4gICAgICAgIF90aGlzLmN1cnJlbnRMb2NhdGlvbiA9IGluZm87XHJcbiAgICAgIH0sIGZ1bmN0aW9uKGVycm9yKXtcclxuICAgICAgICBhbGVydCgn5aSx6LSlJylcclxuICAgICAgfSwgb3B0aW9ucyk7XHJcbiAgICB9LFxyXG4gICAgLy8gb25HaXMoKSB7XHJcbiAgICAvLyAgIHRoaXMuJHJvdXRlci5wdXNoKFwiL2Vudkluc3BlY3RvcnNcIik7XHJcbiAgICAvLyB9LFxyXG4gICAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICAgIGxvZ2luKHRoaXMuJHN0b3JlLnN0YXRlLnRva2VuKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICB0aGlzLnF1ZXJ5VXNlckJ0bihyZXMuZGF0YS51c2VyLm9iamVjdGlkKTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgLy/mn6Xor6LnlKjmiLflhbPogZTnmoRtZW51XHJcbiAgICBxdWVyeVVzZXJCdG4oaWQpIHtcclxuICAgICAgZ2V0VXNlckJ0bkxpc3QoeyB1c2VySWQ6IGlkIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGxldCB0ZW1wRCA9IHJlcy5kYXRhLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW0ubmFtZSAhPT0gXCJHSVNcIjtcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm1lbnVMaXN0ID0gdGVtcEQuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICBpZiAoaXRlbS5mbGFnICYmIGl0ZW0ubmFtZSA9PSBcIuahiOS7tuWuoeaJuVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdENhc2VVbmRvTnVtKCk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICByZXR1cm4gaXRlbS5mbGFnO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBpbml0Q2FzZVVuZG9OdW0oKSB7XHJcbiAgICAgIGxldCBzZWFyY2ggPSB7XHJcbiAgICAgICAgcGFnZU51bTogMSxcclxuICAgICAgICBwYWdlU2l6ZTogOTk5OSxcclxuICAgICAgICB0eXBlOiBcIlwiLFxyXG4gICAgICAgIHllYXI6IFwiXCIsXHJcbiAgICAgICAgc3RhdHVzOiBcIuW+heWuoeaJuVwiLFxyXG4gICAgICB9O1xyXG4gICAgICBxdWVyeVR5cGVDYXNlTGlzdChzZWFyY2gpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMuY2FzZVVuZG9OdW0gPSByZXMuZGF0YS50b3RhbDtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgb25MaW5rKGl0ZW0pIHtcclxuICAgICAgY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICAgIGxldCBvdGhlckFyciA9IFsn6Ieq55Sx6KOB6YePJywgJ+eOr+S/neagh+WHhicsICfms5Xlvovms5Xop4QnLCfosIPluqblubPlj7AnLCAn5rC0546v5aKDJ107XHJcbiAgICAgIGxldCB1cmwgPSBcIlwiO1xyXG4gICAgICBpZiAob3RoZXJBcnIuaW5kZXhPZihpdGVtLm5hbWUpID4gLTEpIHtcclxuICAgICAgICB1cmwgPSBpdGVtLnVybCArIFwiP3Rva2VuPVwiICsgdGhpcy50b2tlbjtcclxuICAgICAgICBvcGVuQnJvd3Nlcih1cmwpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChpdGVtLm5hbWUgPT09IFwi5rCU546v5aKDXCIpIHtcclxuICAgICAgICAgIHVybCA9IFwiaHR0cDovLzEwLjIyMS4yOS40OjE3MDAwL2txemwvIy9Ib21lXCIgKyBcIj9waG9uZT1cIiArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGhvbmVcIik7XHJcbiAgICAgICAgICBvcGVuQnJvd3Nlcih1cmwpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS5uYW1lID09PSBcIuaxoeafk+a6kFwiKSB7XHJcbiAgICAgICAgICB1cmwgPSBcImh0dHA6Ly8xMC4yMjEuMjkuNDoxNzAwMS93cnlnai9pbmRleC5odG1sIy9zc28/dGl0bGU96aaW6aG1JnRva2VuPVwiICsgdGhpcy50b2tlbisnJmpkPScrdGhpcy5jdXJyZW50TG9jYXRpb24uY29vcmRzLmxvbmdpdHVkZSsnJndkPScrdGhpcy5jdXJyZW50TG9jYXRpb24uY29vcmRzLmxhdGl0dWRlO1xyXG4gICAgICAgICAgb3BlbkJyb3dzZXIodXJsKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0ubmFtZSA9PT0gXCLmiafms5Xnm5HmtYtcIikge1xyXG4gICAgICAgICAgdXJsID0gXCJodHRwOi8vMTAuMjIxLjI5LjQ6MTcwMDEvd3J5Z2ovaW5kZXguaHRtbCMvc3NvP3RpdGxlPeaJp+azleebkea1iyZ0b2tlbj1cIiArIHRoaXMudG9rZW47XHJcbiAgICAgICAgICBvcGVuQnJvd3Nlcih1cmwpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS5uYW1lID09PSBcIuedo+WKnuS6i+mhuVwiKSB7XHJcbiAgICAgICAgICB1cmwgPSBcImh0dHA6Ly8xMC4yMjEuMjkuNDoxNzAwMS93cnlnai9pbmRleC5odG1sIy9zc28/dGl0bGU9552j5Yqe5LqL6aG5JnRva2VuPVwiICsgdGhpcy50b2tlbjtcclxuICAgICAgICAgIG9wZW5Ccm93c2VyKHVybCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtLm5hbWUgPT09IFwi5Lu75Yqh5LiL6L6+XCIpIHtcclxuICAgICAgICAgIHVybCA9IFwiaHR0cDovLzEwLjIyMS4yOS40OjE3MDAxL3dyeWdqL2luZGV4Lmh0bWwjL3Nzbz90aXRsZT3ku7vliqHkuIvovr4mdG9rZW49XCIgKyB0aGlzLnRva2VuKycmamQ9Jyt0aGlzLmN1cnJlbnRMb2NhdGlvbi5jb29yZHMubG9uZ2l0dWRlKycmd2Q9Jyt0aGlzLmN1cnJlbnRMb2NhdGlvbi5jb29yZHMubGF0aXR1ZGU7XHJcbiAgICAgICAgICBvcGVuQnJvd3Nlcih1cmwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaChpdGVtLnVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4uZnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZ1bmN0aW9uLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgbWFyZ2luOiAxMHB4IDEzcHg7XHJcbiAgcGFkZGluZzogMCAwIDEzcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2IoMjQ1LCAyNTMsIDI1NSksIHJnYigyNTUsIDI1NSwgMjU1KSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgLmZ1bmN0aW9uLXRpdGxlIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XHJcbiAgICBjb2xvcjogIzEyMTIzNjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcblxyXG4gIC5mdW5jdGlvbi1ib3gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHJcbiAgICAuZnVuY3Rpb24taXRlbSB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICB3aWR0aDogMjAlO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIG1hcmdpbjogM3B4IDA7XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIG1hcmdpbjogN3B4IGF1dG87XHJcbiAgICAgICAgLy90cmFuc2Zvcm06IHNjYWxlKDAuNSk7XHJcbiAgICAgICAgaGVpZ2h0OiAyOHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5vbGQtYXBwLWljb24ge1xyXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLm51bWJlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDE4cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0MHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJ2YW4tbmF2LWJhclwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHRpdGxlOiBcIuW4uOeUqOWKn+iDvVwiLCBcImxlZnQtYXJyb3dcIjogXCJcIiB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIFwiY2xpY2stbGVmdFwiOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLiRyb3V0ZXIuZ28oLTEpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmdW5jdGlvbi13cmFwcGVyXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZnVuY3Rpb24tYm94XCIgfSxcbiAgICAgICAgICBfdm0uX2woX3ZtLm1lbnVMaXN0LCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZnVuY3Rpb24taXRlbVwiLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uTGluayhpdGVtKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgaXRlbS5pY29uID8gX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IGl0ZW0uaWNvbiB9IH0pIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKGl0ZW0ubmFtZSkgKyBcIiBcIiksXG4gICAgICAgICAgICAgICAgaXRlbS5uYW1lID09PSBcIuahiOS7tuWuoeaJuVwiXG4gICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibnVtYmVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uY2FzZVVuZG9OdW0pKV0pLFxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIDBcbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbHRlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maWx0ZXI7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2ZpbHRlcicpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRmaWx0ZXIodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZnNbZGF0YS12LTViYjcyNmMwXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uZnVuY3Rpb24td3JhcHBlcltkYXRhLXYtNWJiNzI2YzBdIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBtYXJnaW46IDEwcHggMTNweDtcXG4gIHBhZGRpbmc6IDAgMCAxM3B4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjZjVmZGZmLCB3aGl0ZSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uZnVuY3Rpb24td3JhcHBlciAuZnVuY3Rpb24tdGl0bGVbZGF0YS12LTViYjcyNmMwXSB7XFxuICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbiAgY29sb3I6ICMxMjEyMzY7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5mdW5jdGlvbi13cmFwcGVyIC5mdW5jdGlvbi1ib3hbZGF0YS12LTViYjcyNmMwXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbn1cXG4uZnVuY3Rpb24td3JhcHBlciAuZnVuY3Rpb24tYm94IC5mdW5jdGlvbi1pdGVtW2RhdGEtdi01YmI3MjZjMF0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMjAlO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbWFyZ2luOiAzcHggMDtcXG59XFxuLmZ1bmN0aW9uLXdyYXBwZXIgLmZ1bmN0aW9uLWJveCAuZnVuY3Rpb24taXRlbSBpbWdbZGF0YS12LTViYjcyNmMwXSB7XFxuICBtYXJnaW46IDdweCBhdXRvO1xcbiAgaGVpZ2h0OiAyOHB4O1xcbn1cXG4uZnVuY3Rpb24td3JhcHBlciAuZnVuY3Rpb24tYm94IC5mdW5jdGlvbi1pdGVtIC5vbGQtYXBwLWljb25bZGF0YS12LTViYjcyNmMwXSB7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxufVxcbi5mdW5jdGlvbi13cmFwcGVyIC5mdW5jdGlvbi1ib3ggLmZ1bmN0aW9uLWl0ZW0gLm51bWJlcltkYXRhLXYtNWJiNzI2YzBdIHtcXG4gIGJhY2tncm91bmQ6IHJlZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAxOHB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWJiNzI2YzAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIwYTdhYWUyY1wiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTViYjcyNmMwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWJiNzI2YzAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XHJcblxyXG4vKipcclxuICog55m75b2VXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2dpbih0b2tlbikge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvbG9naW4vdXNlcl9pbmZvJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgdG9rZW46IHRva2VuXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG4vKipcclxuICog55m75b2VLS3nur/ntKJcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luX2NsdWUodG9rZW4pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvbWFuYWdlL2xvZ2luL3Rva2VuX3VzZXJfaW5mbycsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIHRva2VuOiB0b2tlblxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuLyoqXHJcbiAqIOermeeCueaQnOe0olxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2l0ZVNlYXJjaCh7cGFnZSwgbGltaXQsIG5hbWV9KSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC9ob21lL2xpc3QnLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBwYWdlOiBwYWdlLFxyXG4gICAgICBsaW1pdDogbGltaXQsXHJcbiAgICAgIG5hbWU6IG5hbWVcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICog55So5oi36YCa55+lXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzeXNOb3RpY2VJbmZvKCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvc3lzTm90aWNlSW5mbycsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDnlKjmiLfpgJrnn6VcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG5vdGljZVJlYWQoe25vdGljZUlkfSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvc3lzTm90aWNlSW5mby9yZWFkJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgbm90aWNlSWQ6IG5vdGljZUlkXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOazleW+i+azleinhOaQnOe0olxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGF3U2VhcmNoKHsgbmFtZX0pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvaW50ZXJmYWNlL3JldHJpZXZhbC9kb2N1bWVudF9zZWFyY2gnLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBwYWdlOiAxLFxyXG4gICAgICBsaW1pdDogMTAwMCxcclxuICAgICAgaWQ6ICc1MDQsNTA1LDUwNicsXHJcbiAgICAgIG5hbWU6IG5hbWVcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICog5ZGo6L6556uZ54K55pCc57SiXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBuZWlnaGJvdXJTaXRlU2VhcmNoKHtsb25naXR1ZGUsIGxhdGl0dWRlLCBudW1iZXJ9KSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC9ob21lL3N1cnJvdW5kaW5nJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgbG9uZ2l0dWRlLCBsYXRpdHVkZSwgbnVtYmVyXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWbveecgeiAg+ermeeCueS8mOiJr+aDheWGtVxyXG4gKiBAcGFyYW0gdHlwZSAx5Zu96ICDMuecgeiAg1xyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd2F0ZXJTaXRlRmluZSh7dHlwZX0pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBwL2hvbWUvJyt0eXBlLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDppa7nlKjmsLTmupDlnLDmpoLlhrVcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRyaW5rV2F0ZXJTdW1tYXJ5KCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvaG9tZScsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOi2heagh+WRiuitpi3msJRcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHdhcm5pbmdBaXIoKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC9ob21lL2Fpcldhcm5pbmcnLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDotoXmoIflkYroraYt5rC0XHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXJuaW5nV2F0ZXIoKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL0RDTVJNMTMwL21lc3NhZ2UvYWJub3JtYWxEYXRhJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICog6LaF5qCH6aKE6K2mLeawtFxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd2FybmluZ0Vhcmx5V2F0ZXIoKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL3dhdGVyL2NvbW1vbi93YXJuaW5ncycsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLy8g5rC056uZ6K+m5oOFXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXRlclN0YXRpb24ob2JqZWN0aWQsIHR5cGUsIGpjZnMpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvRENNUk0xMzAvbHlkdC9nZXRMeWR0R2snLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBvYmplY3RpZCwgdHlwZSwgamNmcyxcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICog5YWo5biC56m65rCU6LSo6YePXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhaXJRdWFsaXR5KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBwL2hvbWUvYWlyJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6ZGF0YVxyXG4gIH0pXHJcbn1cclxuLyoqXHJcbiAqIOWFqOW4guepuuawlOi0qOmHj0lBUUlcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFpclF1YWxpdHlJQVFJKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBwL2hvbWUvZ2V0SW5kZXhJYXFpJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6ZGF0YVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmu4fmsaDmsLTotKjnirblhrVcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRpYW5XYXRlclF1YWxpdHkoKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC9ob21lL3NpdHVhdGlvbicsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLy/pgJrnn6XlhazlkYogLSDliJfooahcclxuZXhwb3J0IGZ1bmN0aW9uIGdldE5vdGljZUxpc3QoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9rZXBfbWFuYWdlL25vdGljZS9xdWVyeUxpc3RJbmZvJyxcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICBwYXJhbXM6IGRhdGFcclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICogR0lTLeaJgOacieaxoeafk+a6kFxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gR0lTUG9sbHV0aXRvbigpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvcG9sbHV0L3BvbGx1dGlvbi9nZXRBbGxTdW1tYXJ5JyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICogR0lTLeaJgOacieawtFxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gR0lTV2F0ZXIoKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL3dhdGVyL3Zpc3VhbGl6YXRpb24vYWxsLXNlY3Rpb24nLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHSVMt5p+l5rKf5rigXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBHSVNDaGFubmVsKHtuYW1lfSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy93YXRlci93YXRlckdxeHgnLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBkd21jOiBuYW1lLFxyXG4gICAgICBncW1jOiBuYW1lXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWkp+awlOermeeCuVxyXG4gKiBAcGFyYW0gdHlwZSAz5YWo6YOoXHJcbiAqIEBwYXJhbSB0aW1lIOWvhueggVxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWlyU2l0ZSh7dGltZX0pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICdodHRwOi8vMTE2LjUyLjYuMTE4OjE4ODk5L0tRWkxZWlcvaG9tZS9yZWFsZGF0YT90eXBlPTMmdGltZT0nICsgdGltZSxcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICBkYXRhOiB7fVxyXG4gIH0pXHJcbn1cclxuXHJcbi8vIOeUqOaIt+eZu+W9lVxyXG5leHBvcnQgY29uc3QgdXNlckxvZ2luID0gKG5hbWUsIHB3ZCkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9zeXN0ZW0tc2VydmljZS1sb2dpbi91c2VyL2xvZ2luJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgdXNlck5hbWU6IG5hbWUsXHJcbiAgICAgIHBhc3N3b3JkOiBwd2RcclxuICAgIH1cclxuICB9KVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIOeUqOaIt+e7hOS7tuiuoumYhVxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlclN1YnNjcmliZSh0b2tlbikge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvaG9tZS91c2VyU3Vic2NyaWJlJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgVG9rZW46IHRva2VuXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG4iLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XHJcblxyXG4vKipcclxuICog5qGI5Lu26K+m5oOFXHJcbiAqICovXHJcbmV4cG9ydCBjb25zdCBxdWVyeVNlbGVjdEJ5SWQgPShpZCk9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwaS9jYXNlL3NlbGVjdEJ5SWQvJytpZCxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgfSlcclxufVxyXG4vLyDpm4bkvZPorqjorrror6bmg4VcclxuZXhwb3J0IGNvbnN0IGRpc2N1c3NTZWxlY3RCeUNhc2VJZCA9IChpZCkgPT57XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwaS9kaXNjdXNzL3NlbGVjdEJ5Q2FzZUlkLycraWQsXHJcbiAgICBtZXRob2Q6ICdwb3N0JyxcclxuICB9KVxyXG59O1xyXG4vLyDor6bmg4VcclxuZXhwb3J0IGNvbnN0IHN1cGVydmlzZVNlbGVjdEJ5Q2FzZUlkID0gKGlkKSA9PntcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBpL3N1cGVydmlzZS9zZWxlY3RCeUNhc2VJZC8nK2lkLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICB9KVxyXG59O1xyXG4vLyDlkYrnn6Xor6bmg4VcclxuZXhwb3J0IGNvbnN0IGxlZ2FsU2VsZWN0QnlDYXNlSWQgPSAoaWQpID0+e1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcGkvbGVnYWwvc2VsZWN0QnlDYXNlSWQvJytpZCxcclxuICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gIH0pXHJcbn07XHJcbi8vIOWRiuefpeivpuaDhVxyXG5leHBvcnQgY29uc3Qgc2VsZWN0QnlDYXNlSWQgPSAoaWQpID0+e1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcGkvaW5mb3JtL3NlbGVjdEJ5Q2FzZUlkLycraWQsXHJcbiAgICBtZXRob2Q6ICdwb3N0JyxcclxuICB9KVxyXG59O1xyXG4vLyDor6bmg4VcclxuZXhwb3J0IGNvbnN0IHB1bmlzaFNlbGVjdEJ5Q2FzZUlkID0gKGlkKSA9PntcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBpL3B1bmlzaC9zZWxlY3RCeUNhc2VJZC8nK2lkLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICB9KVxyXG59O1xyXG4vLyDor6bmg4VcclxuZXhwb3J0IGNvbnN0IGdldEhlYXJpbmdCeUNhc2VJZCA9IChpZCkgPT57XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwaS9oZWFyaW5nL2dldEhlYXJpbmdCeUNhc2VJZC8nK2lkLFxyXG4gICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgfSlcclxufTtcclxuLy8g6K+m5oOFXHJcbmV4cG9ydCBjb25zdCBzdGFnZVNlbGVjdEJ5Q2FzZUlkID0gKGlkKSA9PntcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBpL3N0YWdlL3NlbGVjdEJ5Q2FzZUlkLycraWQsXHJcbiAgICBtZXRob2Q6ICdwb3N0JyxcclxuICB9KVxyXG59O1xyXG5cclxuLy/moLnmja50b2tlbuiOt+WPluS8geS4muS/oeaBr1xyXG5leHBvcnQgY29uc3QgZ2V0VXNlckluZm8gPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvdXNlci9nZXRJbmZvXCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v6I635Y+W55So5oi3XHJcbmV4cG9ydCBjb25zdCBnZXRVc2VyTGlzdCA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS91c2VyXCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v5p+l55yL5a6h5om55a2Q6aG55YiX6KGoXHJcbmV4cG9ydCBjb25zdCBxdWVyeVR5cGVDYXNlTGlzdCA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS9hcHByb3ZhbC9xdWVyeUFwcExpc3RcIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/mlrDlu7rlrqHmibnooahcclxuZXhwb3J0IGNvbnN0IGFkZFJlcG9ydCA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS9hcHByb3ZhbC9pbnNcIixcclxuICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v6I635Y+W5Y2V5Liq5a6h5om56KGo5L+h5oGvXHJcbmV4cG9ydCBjb25zdCBnZXRSZXBvcnREZXRhaWwgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvYXBwcm92YWxcIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/nrb7lkI3lrqHmiblcclxuZXhwb3J0IGNvbnN0IHNpZ25SZXBvcnQgPSAoZGF0YSx0eXBlKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS9hcHByb3ZhbC9zaWduP3R5cGU9XCIrdHlwZSxcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4vL+e7n+iuoVxyXG5leHBvcnQgY29uc3QgY291bnRJbmZvID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL3JhL2FwcHJvdmFsL2dldFN0YXRcIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/or6bmg4VcclxuZXhwb3J0IGNvbnN0IGdldEFsbFJlcG9ydCA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS9hcHByb3ZhbC9kZXRhaWxcIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/moKHpqozlr4bnoIFcclxuZXhwb3J0IGNvbnN0IGNoZWNrUHdkID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL3JhL3VzZXIvY2hlY2tQd2RcIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/mlK/pmJ8v5YiG5bGA5LiL5ouJ5qGGXHJcbmV4cG9ydCBjb25zdCBxdWVyeURpdmlzaW9uID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL3JhL3VzZXIvZGl2XCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCJcclxuICB9KTtcclxufTtcclxuLy/njq/kv53nnaPlr58t6I635Y+W5om55qyh5YiX6KGoXHJcbmV4cG9ydCBjb25zdCBnZXRTdXBlckJhdGNoID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2JhdGNoTGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4vL+eOr+S/needo+Wvny3ojrflj5bmibnmrKHliJfooahcclxuZXhwb3J0IGNvbnN0IGdldFN1cGVyTGlzdCA9IChpbmZvLGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2xpc3RcIixcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBwYXJhbXM6IGluZm8sXHJcbiAgICBkYXRhIDogZGF0YVxyXG4gIH0pO1xyXG59O1xyXG4vL+eOr+S/needo+Wvny3ojrflj5bmibnmrKHliJfooahcclxuZXhwb3J0IGNvbnN0IGdldFN1cGVyTGlzdERldGFpbCA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9cIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YVxyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJvYXJkKCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvYm9hcmRcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvdW50eUxpc3QocGFyYW1zKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9ib2FyZC9nZXRDb3VudHlcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogcGFyYW1zLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5mb0xpc3QocGFyYW1zKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbmZvL2xpc3RcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogcGFyYW1zLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gYmFzZUluZm8ocGFyYW1zKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbmZvL2dldEJ5SWRcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogcGFyYW1zLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGlzdHJpYnV0ZShwYXJhbXMpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luZm8vZGlzdHJpYnV0ZS9cIiArIHBhcmFtcyxcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZShwYXJhbXMpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luZm8vaGFuZGxlL1wiICsgcGFyYW1zLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmluYWwocGFyYW1zKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbmZvL2ZpbmFsL1wiICsgcGFyYW1zLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY29tcGFueShwYXJhbXMpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luZm8vcXlCeUluZm9JZFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBwYXJhbXMsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9ibGVtKCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5zcGVjdGlvbklzc3Vlc1wiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdGltZUdyb3VwKCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5zcGVjdGlvbklzc3Vlcy90aW1lR3JvdXBcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVuaXQoKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbnNwZWN0aW9uSXNzdWVzL2dldFVuaXRcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByb2JsZW1MaXN0KHBhcmFtcykge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5zcGVjdGlvbklzc3Vlcy9wYWdlTGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IHBhcmFtcyxcclxuICB9KTtcclxufVxyXG5cclxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWJiNzI2YzAmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWJiNzI2YzAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1YmI3MjZjMFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1YmI3MjZjMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1YmI3MjZjMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1YmI3MjZjMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTViYjcyNmMwJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzViYjcyNmMwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvY29tbW9uRnVuY3Rpb24vaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWJiNzI2YzAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWJiNzI2YzAmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9