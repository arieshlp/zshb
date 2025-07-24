(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityOverview.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/components/airQualityOverview.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_api_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/api.js */ "./src/api/api.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "airQualityOverview",
  props: {
    detailsParameter: String,
    //行政区划
    queryFlag: {
      type: Number,
      default: function _default() {}
    } //浓度 0 /IAQI 1

  },
  data: function data() {
    return {
      xzqh: "昆明市",
      info: {
        kind: ''
      }
    };
  },
  watch: {
    queryFlag: function queryFlag(newD) {
      this.queryData();
    }
  },
  mounted: function mounted() {
    // this.xzqh = this.$route.query.xzqh;
    if (this.detailsParameter) {
      this.xzqh = this.detailsParameter;
    } else {
      this.searchObj = this.$store.state.searchObj;
      this.xzqh = this.searchObj.parameter;
    }

    this.queryData();
  },
  filters: {
    getColor: function getColor(key) {
      var status = '';

      if (key == null) {
        status = 'hour_white_bg';
      } else if (key <= 50) {
        status = 'aqigreen';
      } else if (key <= 100 && key > 50) {
        status = 'aqiyellow';
      } else if (key <= 150 && key > 100) {
        status = 'aqiorange';
      } else if (key <= 200 && key > 150) {
        status = 'aqired';
      } else {
        status = 'hour_white_bg';
      }

      return status;
    },
    getColorBg: function getColorBg(key) {
      var status = '';

      if (key == null) {
        status = 'air_whiterbg';
      } else if (key === '优') {
        status = 'air_greenbg';
      } else if (key === '良') {
        status = 'air_yellow_bg';
      } else if (key === '轻度污染') {
        status = 'air_orangebg';
      } else if (key === '中度污染' || key == '重度污染') {
        status = 'air_redbg';
      } else {
        status = 'air_whiterbg';
      }

      return status;
    }
  },
  methods: {
    queryData: function queryData() {
      var _this = this;

      return Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var tempD;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.getData();

              case 2:
                tempD = _context.sent;
                _this.info = tempD;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getData: function getData() {
      var _this2 = this;

      return new Promise(function (resolve, reject) {
        var info = {
          divisionName: _this2.xzqh
        };
        var functionName = _this2.queryFlag === 0 ? _api_api_js__WEBPACK_IMPORTED_MODULE_4__["airQuality"] : _api_api_js__WEBPACK_IMPORTED_MODULE_4__["airQualityIAQI"];
        functionName(info).then(function (res) {
          resolve(res.data);
        });
      });
    },
    formatTime: function formatTime(value) {
      return dayjs__WEBPACK_IMPORTED_MODULE_5___default()(value).format('YYYY-MM-DD HH:mm');
    },
    getDayKind: function getDayKind(key) {
      var status = '';

      if (key == null) {
        status = '-';
      } else if (key <= 50) {
        status = '优';
      } else if (key <= 100 && key > 50) {
        status = '良';
      } else if (key <= 150 && key > 100) {
        status = '轻度污染';
      } else if (key <= 200 && key > 150) {
        status = '中度污染';
      } else if (key <= 300 && key > 200) {
        status = '重度污染';
      } else if (key > 300) {
        status = '严重污染';
      } else {
        status = '-';
      }

      return status;
    },
    toPointPage: function toPointPage() {
      this.$router.push({
        name: 'airHomePage',
        query: {
          xzqh: this.xzqh,
          title: "空气质量站点数据"
        }
      });
    },
    goCalender: function goCalender() {
      this.$router.push({
        name: 'airCalendarQuery',
        query: {
          siteId: "",
          siteName: this.xzqh === '' ? '昆明市' : this.xzqh,
          xzqh: this.xzqh === '' ? '昆明市' : this.xzqh,
          title: "空气质量日历",
          queryFlag: this.queryFlag
        }
      });
    },
    goSiteList: function goSiteList(type) {
      this.$router.push({
        name: 'airExamineSiteList',
        query: {
          type: type,
          queryFlag: this.queryFlag,
          xzqh: this.xzqh
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityOverview.vue?vue&type=template&id=771a80f4&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/components/airQualityOverview.vue?vue&type=template&id=771a80f4&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "air_header air_blue_bg" }, [
    _c("div", { staticClass: "data-time" }, [
      _vm._v(" 数据时间：" + _vm._s(_vm.formatTime(_vm.info.aqiTime)) + " "),
    ]),
    _c("div", { staticClass: "aqi-des" }, [_vm._v("实时AQI")]),
    _c("div", { staticClass: "fs aqi-wrapper" }, [
      _c("div", { staticClass: "fs" }, [
        _c("div", { staticClass: "number" }, [
          _vm._v(_vm._s(_vm.info.aqi || "-")),
        ]),
        _c(
          "span",
          {
            staticClass: "type-box",
            class: _vm._f("getColorBg")(_vm.info.kind),
          },
          [_vm._v(_vm._s(_vm.info.kind))]
        ),
        _vm._v(" " + _vm._s(_vm.xzqh) + " "),
      ]),
      _c("div", { staticClass: "pollution" }, [
        _vm._v(" 首要污染物：" + _vm._s(_vm.info.primaryPollutant) + " "),
      ]),
    ]),
    _c("div", { staticClass: "aqi-box" }, [
      _c("div", { staticClass: "fs" }, [
        _c("div", { staticClass: "title" }, [
          _vm._v("日累计AQI（"),
          _c(
            "span",
            { staticStyle: { "font-size": "16px", "font-weight": "bold" } },
            [_vm._v(_vm._s(_vm.info.dayAqi))]
          ),
          _vm._v("）"),
        ]),
        _c("span", { staticStyle: { "padding-right": "9px" } }, [
          _vm._v("日累计至" + _vm._s(_vm.formatTime(_vm.info.time))),
        ]),
      ]),
      _c("div", { staticClass: "fs site-wrapper" }, [
        _c("div", { staticStyle: { width: "40%" } }, [
          _vm._v(" 空气质量 "),
          _c(
            "span",
            {
              class: _vm._f("getColor")(_vm.info.dayAqi),
              staticStyle: { "font-size": "16px", "font-weight": "bold" },
            },
            [_vm._v(_vm._s(_vm.getDayKind(_vm.info.dayAqi)))]
          ),
        ]),
        _c("div", [
          _vm._v(" 首要污染物 "),
          _c(
            "span",
            {
              staticStyle: {
                color: "rgba(18, 18, 54, 1)",
                "font-size": "14px",
              },
            },
            [_vm._v(_vm._s(_vm.info.dayPrimaryPollutant))]
          ),
        ]),
        _c("div", { staticStyle: { "text-align": "center" } }, [
          _c("img", {
            staticClass: "calendar-box",
            attrs: { src: __webpack_require__(/*! @/assets/polluter/calendar.png */ "./src/assets/polluter/calendar.png") },
            on: { click: _vm.goCalender },
          }),
        ]),
      ]),
    ]),
    _c("div", { staticClass: "aqi-box" }, [
      _c("div", { staticClass: "fs" }, [
        _c("div", { staticClass: "title" }, [_vm._v("国控")]),
        _c("span", { staticStyle: { "padding-right": "9px" } }, [
          _vm._v("日累计至" + _vm._s(_vm.info.gkTime)),
        ]),
      ]),
      _c(
        "div",
        {
          staticClass: "fs site-wrapper",
          on: {
            click: function ($event) {
              return _vm.goSiteList("国控")
            },
          },
        },
        [
          _c("div", [
            _vm._v(" 国控站点 "),
            _c("span", { staticClass: "site-number" }, [
              _vm._v(_vm._s(_vm.info.gkCount)),
            ]),
          ]),
          _c("div", [
            _vm._v(" 优良 "),
            _c("span", { staticClass: "site-good" }, [
              _vm._v(_vm._s(_vm.info.gkGood)),
            ]),
          ]),
          _c("div", [
            _vm._v(" 轻度污染 "),
            _c("span", { staticClass: "site-polluted" }, [
              _vm._v(_vm._s(_vm.info.gkBad)),
            ]),
          ]),
        ]
      ),
    ]),
    _c("div", { staticClass: "aqi-box" }, [
      _c("div", { staticClass: "fs" }, [
        _c("div", { staticClass: "title" }, [_vm._v("省控")]),
        _c("span", { staticStyle: { "padding-right": "9px" } }, [
          _vm._v("日累计至" + _vm._s(_vm.info.skTime)),
        ]),
      ]),
      _c(
        "div",
        {
          staticClass: "fs site-wrapper",
          on: {
            click: function ($event) {
              return _vm.goSiteList("省控")
            },
          },
        },
        [
          _c("div", [
            _vm._v(" 省控站点 "),
            _c("span", { staticClass: "site-number" }, [
              _vm._v(_vm._s(_vm.info.skCount)),
            ]),
          ]),
          _c("div", [
            _vm._v(" 优良 "),
            _c("span", { staticClass: "site-good" }, [
              _vm._v(_vm._s(_vm.info.skGood)),
            ]),
          ]),
          _c("div", [
            _vm._v(" 轻度污染 "),
            _c("span", { staticClass: "site-polluted" }, [
              _vm._v(_vm._s(_vm.info.skBad)),
            ]),
          ]),
        ]
      ),
    ]),
    _c(
      "div",
      { staticClass: "aqi-box", staticStyle: { padding: "5px 10px" } },
      [
        _vm._v(" 空气质量累计优 "),
        _c("span", { staticStyle: { color: "rgba(67, 207, 124, 1)" } }, [
          _vm._v(_vm._s(_vm.info.excellent) + " 天"),
        ]),
        _vm._v("， 良 "),
        _c("span", { staticStyle: { color: "rgba(255, 141, 26, 0.8)" } }, [
          _vm._v(_vm._s(_vm.info.good) + " 天"),
        ]),
        _vm._v("， 优良率 "),
        _c("span", { staticStyle: { color: "rgba(68, 123, 252, 1)" } }, [
          _vm._v(_vm._s(_vm.info.excellentRat)),
        ]),
        _vm._v("， 轻度污染 "),
        _c("span", { staticStyle: { color: "rgba(255, 33, 26, 0.8)" } }, [
          _vm._v(_vm._s(_vm.info.bad) + "天"),
        ]),
        _vm._v("。 "),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityOverview.vue?vue&type=style&index=0&id=771a80f4&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/components/airQualityOverview.vue?vue&type=style&index=0&id=771a80f4&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".air_header[data-v-771a80f4] {\n  margin: 6px;\n  border-radius: 10px;\n}\n.air_header .data-time[data-v-771a80f4] {\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n  text-align: right;\n}\n.air_header .aqi-des[data-v-771a80f4] {\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.air_header .aqi-wrapper[data-v-771a80f4] {\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.air_header .aqi-wrapper .number[data-v-771a80f4] {\n  font-size: 36px;\n  color: #121236;\n  font-weight: bold;\n}\n.air_header .aqi-wrapper .type-box[data-v-771a80f4] {\n  margin: 0 8px;\n  padding: 0px 14px;\n  border-radius: 20px;\n  font-size: 16px;\n  color: #fff;\n  font-weight: bold;\n}\n.air_header .aqi-wrapper .pollution[data-v-771a80f4] {\n  font-size: 12px;\n}\n.air_header .aqi-box[data-v-771a80f4] {\n  margin: 3px 0;\n  padding: 5px 0;\n  background: rgba(255, 255, 255, 0.5);\n  border: 1px solid white;\n  border-radius: 10px;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.air_header .aqi-box .title[data-v-771a80f4] {\n  width: 116px;\n  height: 18px;\n  padding: 0 5px;\n  /*background: linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 99.44%);*/\n  background: linear-gradient(90deg, rgba(67, 207, 124, 0.3) 0%, rgba(255, 255, 255, 0) 99.44%);\n  color: rgba(18, 18, 54, 0.8);\n}\n.air_header .aqi-box .site-wrapper[data-v-771a80f4] {\n  margin: 10px 10px 0px;\n}\n.air_header .aqi-box .site-wrapper div[data-v-771a80f4] {\n  width: 33%;\n}\n.air_header .aqi-box .site-wrapper .calendar-box[data-v-771a80f4] {\n  padding: 4px 10px;\n  border-radius: 4px;\n  background: rgba(255, 255, 255, 0.5);\n  border: 1px solid rgba(68, 123, 252, 0.3);\n}\n.air_header .aqi-box .site-wrapper .site-number[data-v-771a80f4], .air_header .aqi-box .site-wrapper .site-good[data-v-771a80f4], .air_header .aqi-box .site-wrapper .site-polluted[data-v-771a80f4] {\n  font-size: 16px;\n  font-weight: bold;\n  text-decoration: underline;\n}\n.air_header .aqi-box .site-wrapper .site-number[data-v-771a80f4] {\n  color: #121236;\n}\n.air_header .aqi-box .site-wrapper .site-good[data-v-771a80f4] {\n  color: #43cf7c;\n}\n.air_header .aqi-box .site-wrapper .site-polluted[data-v-771a80f4] {\n  color: #ff8d1a;\n}\n.air_header .air_header_first[data-v-771a80f4] {\n  display: flex;\n}\n.air_header .air_header_first .air_header_left[data-v-771a80f4] {\n  width: 60%;\n  padding: 5px 10px 5px 30px;\n}\n.air_header .air_header_first .air_header_left .air_data[data-v-771a80f4] {\n  font-size: 34px;\n  font-weight: 700;\n  line-height: 50px;\n  text-align: center;\n  vertical-align: top;\n}\n.air_header .air_header_first .air_header_left .air_type[data-v-771a80f4] {\n  display: inline-block;\n  width: 40.22px;\n  height: 20px;\n  line-height: 20px;\n  border-radius: 10px;\n  background: linear-gradient(225deg, #00e400 0%, #62fc7c 100%);\n  color: #fff;\n  text-align: center;\n  margin: 15px 10px 0px 15px;\n}\n.air_header .air_header_first .air_header_left .air_city[data-v-771a80f4] {\n  display: inline-block;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 18px;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: left;\n  vertical-align: top;\n  margin: 17px 0px 0px;\n}\n.air_header .air_header_first .air_header_left .air_date[data-v-771a80f4] {\n  display: block;\n  font-size: 12px;\n  font-weight: 400;\n  letter-spacing: 0px;\n  line-height: 18px;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: left;\n  vertical-align: top;\n}\n.air_header .air_header_first .air_header_right[data-v-771a80f4] {\n  width: 40%;\n  padding: 10px 10px 5px 0px;\n}\n.air_header .air_header_first .air_header_right .air_top[data-v-771a80f4] {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 22px;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: right;\n  vertical-align: top;\n}\n.air_header .air_header_first .air_header_right .air_top > img[data-v-771a80f4] {\n  margin-right: 6px;\n  vertical-align: middle;\n}\n.air_header .air_header_first .air_header_right .air_bottom[data-v-771a80f4] {\n  display: flex;\n  padding: 5px 0px 5px 20px;\n}\n.air_header .air_header_first .air_header_right .air_bottom > div[data-v-771a80f4] {\n  width: 33%;\n  font-size: 10px;\n  font-weight: 400;\n  line-height: 18px;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: right;\n  vertical-align: top;\n}\n.air_header .air_header_first .air_header_right .air_bottom > div > span[data-v-771a80f4] {\n  display: block;\n}\n.air_header .air_header_first .air_header_right .air_bottom > div > span[data-v-771a80f4]:last-child {\n  color: #447bfc;\n  font-weight: 500;\n}\n.air_header .air_header_second[data-v-771a80f4] {\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.5);\n  border: 1px solid white;\n  /*backdrop-filter: blur(10px);*/\n  margin: 3px 10px;\n  display: flex;\n}\n.air_header .air_header_second > div[data-v-771a80f4] {\n  width: 33%;\n}\n.air_header .air_header_second > div > span[data-v-771a80f4] {\n  display: block;\n  font-size: 12px;\n  line-height: 18px;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: center;\n}\n.air_header .air_header_second > div > span[data-v-771a80f4]:first-child {\n  font-size: 16px;\n  font-weight: 600;\n  line-height: 26px;\n  color: #121236;\n}\n.air_header .air_header_third[data-v-771a80f4] {\n  margin: 5px 10px;\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 5px;\n}\n.air_header .air_header_third .air-box[data-v-771a80f4] {\n  border-radius: 10px;\n  background: rgba(255, 255, 255, 0.5);\n  border: 1px solid white;\n  width: calc(50% - 25px);\n  display: flex;\n  justify-content: space-between;\n  padding: 5px 10px;\n  font-size: 12px;\n  color: rgba(18, 18, 54, 0.5);\n}\n.air_blue_bg[data-v-771a80f4] {\n  padding: 10px;\n  /*background: url(\"~@/assets/polluter/airbg.png\") center no-repeat;*/\n  background-size: cover;\n  background: linear-gradient(180deg, rgba(67, 207, 124, 0.15) 0%, rgba(255, 255, 255, 0.01) 100%);\n  border-top: 1px solid rgba(250, 127, 5, 0.05);\n}\n.aqigreen[data-v-771a80f4] {\n  color: #3BC975;\n}\n.aqiyellow[data-v-771a80f4] {\n  color: #ffbf00;\n}\n.aqiorange[data-v-771a80f4] {\n  color: #ff7e00;\n}\n.aqired[data-v-771a80f4] {\n  color: red;\n}\n.air_greenbg[data-v-771a80f4] {\n  background: #00e400;\n}\n.air_yellow_bg[data-v-771a80f4] {\n  background: #ffbf00;\n}\n.air_orangebg[data-v-771a80f4] {\n  background: #ff7e00;\n}\n.air_redbg[data-v-771a80f4] {\n  background: red;\n}\n.air_whiterbg[data-v-771a80f4] {\n  background: #cccccc;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityOverview.vue?vue&type=style&index=0&id=771a80f4&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/components/airQualityOverview.vue?vue&type=style&index=0&id=771a80f4&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./airQualityOverview.vue?vue&type=style&index=0&id=771a80f4&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityOverview.vue?vue&type=style&index=0&id=771a80f4&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("23ccc333", content, false, {"sourceMap":false,"shadowMode":false});
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

/***/ "./src/assets/polluter/calendar.png":
/*!******************************************!*\
  !*** ./src/assets/polluter/calendar.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADtSURBVCiRnZA9LwRhFIWf885sSCSIQqnVqCQSBQVm4odIRKmxip2ofCVU/AP/QKXxUaqVKNRK9bw7R7ETmeyym3Wa25zn3idX2aEXnMYdoSPELvid/jgsga+FOmUr3CjrxC9geqD4dz7DmADAbBgTACAFwGrfnyYXo8pbRXkua78HCW8UXkzcvTK6tf0RxEGQjyuHZeFNx2TPRAB+9EIXD7tSpahPDz2c6Q3YbvTu6vkIXNZ6Dei/enVWBXOJmATWY6UJVM0bVn7VezrRKzDTWNBqaLYH9CTnWVFODXtEL1oDSI1ewDlWPhoCxPM3fYte6nzFYdAAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/utils/setdate.js":
/*!******************************!*\
  !*** ./src/utils/setdate.js ***!
  \******************************/
/*! exports provided: getThisDate, formatDate, hourDateFormat, monthDateFormat, fourHourTime */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getThisDate", function() { return getThisDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDate", function() { return formatDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hourDateFormat", function() { return hourDateFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "monthDateFormat", function() { return monthDateFormat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fourHourTime", function() { return fourHourTime; });
//当前电脑时间--当日
function getThisDate(e) {
  //+" "+h+":"+M+":"+s;
  var nowTime = "";
  var time = new Date();
  var y = time.getFullYear();
  var lm = time.getMonth();
  lm = lm < 10 ? '0' + lm : lm;
  var m = time.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = time.getDate();
  d = d < 10 ? '0' + d : d;
  var h = time.getHours();
  h = h < 10 ? '0' + h : h;
  var M = time.getMinutes();
  M = M < 10 ? '0' + M : M;
  var s = time.getSeconds();
  s = s < 10 ? '0' + s : s;

  if (e === 1) {
    nowTime = y + "-" + m + "-" + d + ' ' + h + ':' + M + ':' + s;
  } else if (e == 4) {
    //当月的第一天
    nowTime = y + "-" + m + "-1";
  } else {
    nowTime = y + "-" + m + "-" + d;
  }

  return nowTime;
} // 转化时间

function formatDate(date, n) {
  var time = new Date(date);
  var nowTime = "";
  var y = time.getFullYear();
  var m = time.getMonth() + 1;
  m = m < 10 ? '0' + m : m;
  var d = time.getDate();
  d = d < 10 ? '0' + d : d;
  var h = time.getHours();
  h = h < 10 ? '0' + h : h;
  var M = time.getMinutes();
  M = M < 10 ? '0' + M : M;
  var s = time.getSeconds();
  s = s < 10 ? '0' + s : s;

  if (n == "y" || n == "年") {
    nowTime = y;
  } else if (n == "M" || n == "月") {
    nowTime = y + "-" + m;
  } else if (n == "m") {
    nowTime = y + "-" + m + "-" + d + " " + h + ":" + M;
  } else if (n == "h" || n == "时") {
    nowTime = y + "-" + m + "-" + d + " " + h;
  } else if (n == "d" || n == "日") {
    nowTime = y + "-" + m + "-" + d;
  } else {
    nowTime = y + "-" + m + "-" + d + " " + h + ":" + M + ":" + s;
  }

  return nowTime;
}
function hourDateFormat(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var hour = date.getHours();
  date = year + '-' + (month > 9 ? month : '0' + month) + '-' + (day > 9 ? day : '0' + day) + ' ' + (hour > 9 ? hour : '0' + hour);
  return date;
}
function monthDateFormat(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  date = year + '-' + (month > 9 ? month : '0' + month);
  return date;
}
function fourHourTime() {
  var nowDate = new Date();
  var year = nowDate.getFullYear();
  var month = nowDate.getMonth() + 1;
  var day = nowDate.getDate();
  var hours = nowDate.getHours();

  if (hours < 4 && hours >= 0) {
    hours = 0;
  } else if (hours < 8 && hours >= 4) {
    hours = 4;
  } else if (hours < 12 && hours >= 8) {
    hours = 8;
  } else if (hours < 16 && hours >= 12) {
    hours = 12;
  } else if (hours < 20 && hours >= 16) {
    hours = 16;
  } else if (hours <= 23 && hours >= 20) {
    hours = 20;
  }

  month = month < 10 ? "0" + month : month;
  day = day < 10 ? "0" + day : day;
  hours = hours < 10 ? "0" + hours : hours;
  return year + '-' + month + '-' + day + ' ' + hours + ':00:00';
}

/***/ }),

/***/ "./src/views/airHomePage/components/airQualityOverview.vue":
/*!*****************************************************************!*\
  !*** ./src/views/airHomePage/components/airQualityOverview.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _airQualityOverview_vue_vue_type_template_id_771a80f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./airQualityOverview.vue?vue&type=template&id=771a80f4&scoped=true& */ "./src/views/airHomePage/components/airQualityOverview.vue?vue&type=template&id=771a80f4&scoped=true&");
/* harmony import */ var _airQualityOverview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./airQualityOverview.vue?vue&type=script&lang=js& */ "./src/views/airHomePage/components/airQualityOverview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _airQualityOverview_vue_vue_type_style_index_0_id_771a80f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./airQualityOverview.vue?vue&type=style&index=0&id=771a80f4&lang=scss&scoped=true& */ "./src/views/airHomePage/components/airQualityOverview.vue?vue&type=style&index=0&id=771a80f4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _airQualityOverview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _airQualityOverview_vue_vue_type_template_id_771a80f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _airQualityOverview_vue_vue_type_template_id_771a80f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "771a80f4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/airHomePage/components/airQualityOverview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/airHomePage/components/airQualityOverview.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./src/views/airHomePage/components/airQualityOverview.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityOverview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./airQualityOverview.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityOverview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityOverview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/airHomePage/components/airQualityOverview.vue?vue&type=style&index=0&id=771a80f4&lang=scss&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./src/views/airHomePage/components/airQualityOverview.vue?vue&type=style&index=0&id=771a80f4&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityOverview_vue_vue_type_style_index_0_id_771a80f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./airQualityOverview.vue?vue&type=style&index=0&id=771a80f4&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityOverview.vue?vue&type=style&index=0&id=771a80f4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityOverview_vue_vue_type_style_index_0_id_771a80f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityOverview_vue_vue_type_style_index_0_id_771a80f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityOverview_vue_vue_type_style_index_0_id_771a80f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityOverview_vue_vue_type_style_index_0_id_771a80f4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/airHomePage/components/airQualityOverview.vue?vue&type=template&id=771a80f4&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./src/views/airHomePage/components/airQualityOverview.vue?vue&type=template&id=771a80f4&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityOverview_vue_vue_type_template_id_771a80f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./airQualityOverview.vue?vue&type=template&id=771a80f4&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/components/airQualityOverview.vue?vue&type=template&id=771a80f4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityOverview_vue_vue_type_template_id_771a80f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airQualityOverview_vue_vue_type_template_id_771a80f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2NvbXBvbmVudHMvYWlyUXVhbGl0eU92ZXJ2aWV3LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvY29tcG9uZW50cy9haXJRdWFsaXR5T3ZlcnZpZXcudnVlP2VmNTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2NvbXBvbmVudHMvYWlyUXVhbGl0eU92ZXJ2aWV3LnZ1ZT9lYmY5Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2FpclF1YWxpdHlPdmVydmlldy52dWU/M2M4YiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BvbGx1dGVyL2NhbGVuZGFyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc2V0ZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvY29tcG9uZW50cy9haXJRdWFsaXR5T3ZlcnZpZXcudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2FpclF1YWxpdHlPdmVydmlldy52dWU/ZmZiOCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvY29tcG9uZW50cy9haXJRdWFsaXR5T3ZlcnZpZXcudnVlPzkyY2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2NvbXBvbmVudHMvYWlyUXVhbGl0eU92ZXJ2aWV3LnZ1ZT84MTc2Il0sIm5hbWVzIjpbImxvZ2luIiwidG9rZW4iLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwicGFyYW1zIiwibG9naW5fY2x1ZSIsInNpdGVTZWFyY2giLCJwYWdlIiwibGltaXQiLCJuYW1lIiwic3lzTm90aWNlSW5mbyIsIm5vdGljZVJlYWQiLCJub3RpY2VJZCIsImxhd1NlYXJjaCIsImlkIiwibmVpZ2hib3VyU2l0ZVNlYXJjaCIsImxvbmdpdHVkZSIsImxhdGl0dWRlIiwibnVtYmVyIiwid2F0ZXJTaXRlRmluZSIsInR5cGUiLCJkcmlua1dhdGVyU3VtbWFyeSIsIndhcm5pbmdBaXIiLCJ3YXJuaW5nV2F0ZXIiLCJ3YXJuaW5nRWFybHlXYXRlciIsIndhdGVyU3RhdGlvbiIsIm9iamVjdGlkIiwiamNmcyIsImFpclF1YWxpdHkiLCJkYXRhIiwiYWlyUXVhbGl0eUlBUUkiLCJkaWFuV2F0ZXJRdWFsaXR5IiwiZ2V0Tm90aWNlTGlzdCIsIkdJU1BvbGx1dGl0b24iLCJHSVNXYXRlciIsIkdJU0NoYW5uZWwiLCJkd21jIiwiZ3FtYyIsImdldEFpclNpdGUiLCJ0aW1lIiwidXNlckxvZ2luIiwicHdkIiwidXNlck5hbWUiLCJwYXNzd29yZCIsInVzZXJTdWJzY3JpYmUiLCJUb2tlbiIsImdldFRoaXNEYXRlIiwiZSIsIm5vd1RpbWUiLCJEYXRlIiwieSIsImdldEZ1bGxZZWFyIiwibG0iLCJnZXRNb250aCIsIm0iLCJkIiwiZ2V0RGF0ZSIsImgiLCJnZXRIb3VycyIsIk0iLCJnZXRNaW51dGVzIiwicyIsImdldFNlY29uZHMiLCJmb3JtYXREYXRlIiwiZGF0ZSIsIm4iLCJob3VyRGF0ZUZvcm1hdCIsInllYXIiLCJtb250aCIsImRheSIsImhvdXIiLCJtb250aERhdGVGb3JtYXQiLCJmb3VySG91clRpbWUiLCJub3dEYXRlIiwiaG91cnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXdIQTtBQUNBO0FBRUE7QUFDQSw0QkFEQTtBQUVBO0FBQ0EsNEJBREE7QUFDQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxvQ0FDQTtBQUhBLEtBRkEsQ0FNQTs7QUFOQSxHQUZB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QTtBQUFBO0FBQTZHO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUd2RztBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSx3RkFBTTtBQUNSLEVBQUUseUdBQU07QUFDUixFQUFFLGtIQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUF1VCxDQUFnQixtVkFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0EzVTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy8xMy5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiYWlyX2hlYWRlciBhaXJfYmx1ZV9iZ1wiPlxyXG4gICAgPCEtLTxkaXYgY2xhc3M9XCJhaXJfaGVhZGVyX2ZpcnN0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhaXJfaGVhZGVyX2xlZnRcIiBAY2xpY2s9XCJ0b1BvaW50UGFnZVwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYWlyX2RhdGFcIiA6Y2xhc3M9XCJpbmZvLmFxaXxnZXRDb2xvcigpXCI+e3tpbmZvLmFxaXx8Jy0nfX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhaXJfdHlwZVwiIDpjbGFzcz1cImluZm8ua2luZHxnZXRDb2xvckJnKClcIj57e2luZm8ua2luZH19PC9zcGFuPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiYWlyX2NpdHlcIj57e3h6cWh9fTwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImFpcl9kYXRlXCI+5pu05paw5pe26Ze077yae3tmb3JtYXRUaW1lKGluZm8udGltZSl9fTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhaXJfaGVhZGVyX3JpZ2h0XCI+XHJcbiAgICAgICAgJmx0OyEmbmRhc2g7IDxkaXYgY2xhc3M9XCJhaXJfdG9wXCIgQGNsaWNrPVwiJHJvdXRlci5wdXNoKCcvV2VhdGhlckZvcmVjYXN0P3h6cWg9Jyt4enFoKVwiPjxpbWcgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3BvbGx1dGVyL2Nsb3VkLnBuZ1wiLz7msJTosaHpooTmiqU8L2Rpdj4gJm5kYXNoOyZndDtcclxuICAgICAgICAmbHQ7ISZuZGFzaDsgPGRpdiBjbGFzcz1cImFpcl9ib3R0b21cIj5cclxuICAgICAgICAgICAgIDxkaXY+PHNwYW4+5LuK5aSpPC9zcGFuPjxzcGFuPuWkmuS6kTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgIDxkaXY+PHNwYW4+5piO5aSpPC9zcGFuPjxzcGFuPumYtembqDwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgIDxkaXY+PHNwYW4+5ZCO5aSpPC9zcGFuPjxzcGFuPuWkmuS6kTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgPC9kaXY+ICZuZGFzaDsmZ3Q7XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYWlyX2hlYWRlcl9zZWNvbmRcIiBAY2xpY2s9XCJ0b1BvaW50UGFnZVwiPlxyXG4gICAgICA8ZGl2PjxzcGFuPnt7aW5mby5wcmltYXJ5UG9sbHV0YW50fHwnLSd9fTwvc3Bhbj48c3Bhbj7pppbopoHmsaHmn5Pniak8L3NwYW4+PC9kaXY+XHJcbiAgICAgIDxkaXY+PHNwYW4+e3tpbmZvLmRheUFxaXx8Jy0nfX08L3NwYW4+PHNwYW4+5pel57Sv6K6hQVFJPC9zcGFuPjwvZGl2PlxyXG4gICAgICA8ZGl2PjxzcGFuPnt7aW5mby5leGNlbGxlbnRSYXR8fCctJ319PC9zcGFuPjxzcGFuPuWFqOW5tOS8mOiJr+eOhzwvc3Bhbj48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImFpcl9oZWFkZXJfdGhpcmRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFpci1ib3hcIiBAY2xpY2s9XCIkcm91dGVyLnB1c2goe25hbWU6ICdhaXJFeGFtaW5lU2l0ZUxpc3QnLHF1ZXJ5OiB7dHlwZTogJ+WbveiAgyd9fSlcIj5cclxuICAgICAgICA8ZGl2PuWbveiAgzxzcGFuIHN0eWxlPVwiY29sb3I6cmdiYSg2OCwgMTIzLCAyNTIsIDEpXCI+e3tpbmZvLmdrQ291bnR9fTwvc3Bhbj7kuKo8L2Rpdj5cclxuICAgICAgICA8ZGl2Pui9u+W6puaxoeafkzxzcGFuIHN0eWxlPVwiY29sb3I6cmdiYSgyNTUsIDE0MSwgMjYsIDEpXCI+e3tpbmZvLmdrQmFkfX08L3NwYW4+5LiqPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYWlyLWJveFwiIEBjbGljaz1cIiRyb3V0ZXIucHVzaCh7bmFtZTogJ2FpckV4YW1pbmVTaXRlTGlzdCcscXVlcnk6IHt0eXBlOiAn5YW25LuWJ319KVwiPlxyXG4gICAgICAgIDxkaXY+5YW25LuWPHNwYW4gc3R5bGU9XCJjb2xvcjpyZ2JhKDY4LCAxMjMsIDI1MiwgMSlcIj57e2luZm8uc2tDb3VudH19PC9zcGFuPuS4qjwvZGl2PlxyXG4gICAgICAgIDxkaXY+6L275bqm5rGh5p+TPHNwYW4gc3R5bGU9XCJjb2xvcjpyZ2JhKDI1NSwgMTQxLCAyNiwgMSlcIj57e2luZm8uc2tCYWR9fTwvc3Bhbj7kuKo8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj4tLT5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiZGF0YS10aW1lXCI+XHJcbiAgICAgIOaVsOaNruaXtumXtO+8mnt7Zm9ybWF0VGltZShpbmZvLmFxaVRpbWUpfX1cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImFxaS1kZXNcIj7lrp7ml7ZBUUk8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJmcyBhcWktd3JhcHBlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZnNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibnVtYmVyXCI+e3tpbmZvLmFxaXx8Jy0nfX08L2Rpdj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInR5cGUtYm94XCIgOmNsYXNzPVwiaW5mby5raW5kfGdldENvbG9yQmcoKVwiPnt7aW5mby5raW5kfX08L3NwYW4+XHJcbiAgICAgICAge3t4enFofX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwb2xsdXRpb25cIj5cclxuICAgICAgICDpppbopoHmsaHmn5PnianvvJp7e2luZm8ucHJpbWFyeVBvbGx1dGFudH19XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImFxaS1ib3hcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+5pel57Sv6K6hQVFJ77yIPHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDE2cHg7Zm9udC13ZWlnaHQ6IGJvbGRcIj57e2luZm8uZGF5QXFpfX08L3NwYW4+77yJPC9kaXY+XHJcbiAgICAgICAgPHNwYW4gc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiA5cHhcIj7ml6XntK/orqHoh7N7e2Zvcm1hdFRpbWUoaW5mby50aW1lKX19PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZzIHNpdGUtd3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogNDAlXCI+XHJcbiAgICAgICAgICDnqbrmsJTotKjph49cclxuICAgICAgICAgIDxzcGFuIDpjbGFzcz1cImluZm8uZGF5QXFpfGdldENvbG9yKClcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9XCJmb250LXNpemU6IDE2cHg7Zm9udC13ZWlnaHQ6IGJvbGRcIj57e2dldERheUtpbmQoaW5mby5kYXlBcWkpfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIOmmluimgeaxoeafk+eJqVxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9XCJjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAxKTtmb250LXNpemU6IDE0cHhcIj57e2luZm8uZGF5UHJpbWFyeVBvbGx1dGFudH19PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXJcIj5cclxuICAgICAgICAgIDxpbWcgY2xhc3M9XCJjYWxlbmRhci1ib3hcIiBzcmM9XCJAL2Fzc2V0cy9wb2xsdXRlci9jYWxlbmRhci5wbmdcIiBAY2xpY2s9XCJnb0NhbGVuZGVyXCI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiYXFpLWJveFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZnNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj7lm73mjqc8L2Rpdj5cclxuICAgICAgICA8c3BhbiBzdHlsZT1cInBhZGRpbmctcmlnaHQ6IDlweFwiPuaXpee0r+iuoeiHs3t7aW5mby5na1RpbWV9fTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmcyBzaXRlLXdyYXBwZXJcIiBAY2xpY2s9XCJnb1NpdGVMaXN0KCflm73mjqcnKVwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICDlm73mjqfnq5nngrlcclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2l0ZS1udW1iZXJcIj57e2luZm8uZ2tDb3VudH19PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICDkvJjoia9cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2l0ZS1nb29kXCI+e3tpbmZvLmdrR29vZH19PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICDovbvluqbmsaHmn5NcclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2l0ZS1wb2xsdXRlZFwiPnt7aW5mby5na0JhZH19PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImFxaS1ib3hcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlXCI+55yB5o6nPC9kaXY+XHJcbiAgICAgICAgPHNwYW4gc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiA5cHhcIj7ml6XntK/orqHoh7N7e2luZm8uc2tUaW1lfX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZnMgc2l0ZS13cmFwcGVyXCIgQGNsaWNrPVwiZ29TaXRlTGlzdCgn55yB5o6nJylcIj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAg55yB5o6n56uZ54K5XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInNpdGUtbnVtYmVyXCI+e3tpbmZvLnNrQ291bnR9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAg5LyY6ImvXHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInNpdGUtZ29vZFwiPnt7aW5mby5za0dvb2R9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAg6L275bqm5rGh5p+TXHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInNpdGUtcG9sbHV0ZWRcIj57e2luZm8uc2tCYWR9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJhcWktYm94XCIgc3R5bGU9XCJwYWRkaW5nOiA1cHggMTBweFwiPlxyXG4gICAgICDnqbrmsJTotKjph4/ntK/orqHkvJggPHNwYW4gc3R5bGU9XCJjb2xvcjogcmdiYSg2NywgMjA3LCAxMjQsIDEpXCI+e3tpbmZvLmV4Y2VsbGVudH19IOWkqTwvc3Bhbj7vvIxcclxuICAgICAg6ImvIDxzcGFuIHN0eWxlPVwiY29sb3I6IHJnYmEoMjU1LCAxNDEsIDI2LCAwLjgpXCI+e3tpbmZvLmdvb2R9fSDlpKk8L3NwYW4+77yMXHJcbiAgICAgIOS8mOiJr+eOhyA8c3BhbiBzdHlsZT1cImNvbG9yOiByZ2JhKDY4LCAxMjMsIDI1MiwgMSlcIj57e2luZm8uZXhjZWxsZW50UmF0fX08L3NwYW4+77yMXHJcbiAgICAgIOi9u+W6puaxoeafkyA8c3BhbiBzdHlsZT1cImNvbG9yOiByZ2JhKDI1NSwgMzMsIDI2LCAwLjgpXCI+e3tpbmZvLmJhZH195aSpPC9zcGFuPuOAglxyXG4gICAgPC9kaXY+XHJcblxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQge2FpclF1YWxpdHksIGFpclF1YWxpdHlJQVFJfSBmcm9tICdAL2FwaS9hcGkuanMnO1xyXG4gIGltcG9ydCBkYXlqcyBmcm9tICdkYXlqcydcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJhaXJRdWFsaXR5T3ZlcnZpZXdcIixcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGRldGFpbHNQYXJhbWV0ZXI6IFN0cmluZywgLy/ooYzmlL/ljLrliJJcclxuICAgICAgcXVlcnlGbGFnOiB7XHJcbiAgICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICAgIGRlZmF1bHQ6ICgpID0+IHtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIC8v5rWT5bqmIDAgL0lBUUkgMVxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgeHpxaDogXCLmmIbmmI7luIJcIixcclxuICAgICAgICBpbmZvOiB7XHJcbiAgICAgICAgICBraW5kOiAnJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICBxdWVyeUZsYWcobmV3RCkge1xyXG4gICAgICAgIHRoaXMucXVlcnlEYXRhKClcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgIC8vIHRoaXMueHpxaCA9IHRoaXMuJHJvdXRlLnF1ZXJ5Lnh6cWg7XHJcbiAgICAgIGlmICh0aGlzLmRldGFpbHNQYXJhbWV0ZXIpIHtcclxuICAgICAgICB0aGlzLnh6cWggPSB0aGlzLmRldGFpbHNQYXJhbWV0ZXJcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hPYmogPSB0aGlzLiRzdG9yZS5zdGF0ZS5zZWFyY2hPYmo7XHJcbiAgICAgICAgdGhpcy54enFoID0gdGhpcy5zZWFyY2hPYmoucGFyYW1ldGVyO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMucXVlcnlEYXRhKClcclxuICAgIH0sXHJcbiAgICBmaWx0ZXJzOiB7XHJcbiAgICAgIGdldENvbG9yKGtleSkge1xyXG4gICAgICAgIGxldCBzdGF0dXMgPSAnJztcclxuICAgICAgICBpZiAoa2V5ID09IG51bGwpIHtcclxuICAgICAgICAgIHN0YXR1cyA9ICdob3VyX3doaXRlX2JnJztcclxuICAgICAgICB9IGVsc2UgaWYgKGtleSA8PSA1MCkge1xyXG4gICAgICAgICAgc3RhdHVzID0gJ2FxaWdyZWVuJztcclxuICAgICAgICB9IGVsc2UgaWYgKGtleSA8PSAxMDAgJiYga2V5ID4gNTApIHtcclxuICAgICAgICAgIHN0YXR1cyA9ICdhcWl5ZWxsb3cnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5IDw9IDE1MCAmJiBrZXkgPiAxMDApIHtcclxuICAgICAgICAgIHN0YXR1cyA9ICdhcWlvcmFuZ2UnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5IDw9IDIwMCAmJiBrZXkgPiAxNTApIHtcclxuICAgICAgICAgIHN0YXR1cyA9ICdhcWlyZWQnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdGF0dXMgPSAnaG91cl93aGl0ZV9iZyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdGF0dXM7XHJcbiAgICAgIH0sXHJcbiAgICAgIGdldENvbG9yQmcoa2V5KSB7XHJcbiAgICAgICAgbGV0IHN0YXR1cyA9ICcnO1xyXG4gICAgICAgIGlmIChrZXkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgc3RhdHVzID0gJ2Fpcl93aGl0ZXJiZyc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICfkvJgnKSB7XHJcbiAgICAgICAgICBzdGF0dXMgPSAnYWlyX2dyZWVuYmcnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAn6ImvJykge1xyXG4gICAgICAgICAgc3RhdHVzID0gJ2Fpcl95ZWxsb3dfYmcnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAn6L275bqm5rGh5p+TJykge1xyXG4gICAgICAgICAgc3RhdHVzID0gJ2Fpcl9vcmFuZ2ViZyc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPT09ICfkuK3luqbmsaHmn5MnIHx8IGtleSA9PSAn6YeN5bqm5rGh5p+TJykge1xyXG4gICAgICAgICAgc3RhdHVzID0gJ2Fpcl9yZWRiZyc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHN0YXR1cyA9ICdhaXJfd2hpdGVyYmcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RhdHVzO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBhc3luYyBxdWVyeURhdGEoKSB7XHJcbiAgICAgICAgbGV0IHRlbXBEID0gYXdhaXQgdGhpcy5nZXREYXRhKCk7XHJcbiAgICAgICAgdGhpcy5pbmZvID0gdGVtcEQ7XHJcbiAgICAgIH0sXHJcbiAgICAgIGdldERhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICBsZXQgaW5mbyA9IHtcclxuICAgICAgICAgICAgZGl2aXNpb25OYW1lOiB0aGlzLnh6cWhcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxldCBmdW5jdGlvbk5hbWUgPSB0aGlzLnF1ZXJ5RmxhZyA9PT0gMCA/IGFpclF1YWxpdHkgOiBhaXJRdWFsaXR5SUFRSVxyXG4gICAgICAgICAgZnVuY3Rpb25OYW1lKGluZm8pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSkpXHJcbiAgICAgIH0sXHJcbiAgICAgIGZvcm1hdFRpbWUodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gZGF5anModmFsdWUpLmZvcm1hdCgnWVlZWS1NTS1ERCBISDptbScpXHJcbiAgICAgIH0sXHJcbiAgICAgIGdldERheUtpbmQoa2V5KSB7XHJcbiAgICAgICAgbGV0IHN0YXR1cyA9ICcnO1xyXG4gICAgICAgIGlmIChrZXkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgc3RhdHVzID0gJy0nO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5IDw9IDUwKSB7XHJcbiAgICAgICAgICBzdGF0dXMgPSAn5LyYJztcclxuICAgICAgICB9IGVsc2UgaWYgKGtleSA8PSAxMDAgJiYga2V5ID4gNTApIHtcclxuICAgICAgICAgIHN0YXR1cyA9ICfoia8nO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5IDw9IDE1MCAmJiBrZXkgPiAxMDApIHtcclxuICAgICAgICAgIHN0YXR1cyA9ICfovbvluqbmsaHmn5MnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5IDw9IDIwMCAmJiBrZXkgPiAxNTApIHtcclxuICAgICAgICAgIHN0YXR1cyA9ICfkuK3luqbmsaHmn5MnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5IDw9IDMwMCAmJiBrZXkgPiAyMDApIHtcclxuICAgICAgICAgIHN0YXR1cyA9ICfph43luqbmsaHmn5MnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID4gMzAwKSB7XHJcbiAgICAgICAgICBzdGF0dXMgPSAn5Lil6YeN5rGh5p+TJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhdHVzID0gJy0nO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RhdHVzO1xyXG4gICAgICB9LFxyXG4gICAgICB0b1BvaW50UGFnZSgpIHtcclxuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICBuYW1lOiAnYWlySG9tZVBhZ2UnLFxyXG4gICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgeHpxaDogdGhpcy54enFoLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLnqbrmsJTotKjph4/nq5nngrnmlbDmja5cIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGdvQ2FsZW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgbmFtZTogJ2FpckNhbGVuZGFyUXVlcnknLFxyXG4gICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgc2l0ZUlkOiBcIlwiLFxyXG4gICAgICAgICAgICBzaXRlTmFtZTogdGhpcy54enFoID09PSAnJyA/ICfmmIbmmI7luIInIDogdGhpcy54enFoLFxyXG4gICAgICAgICAgICB4enFoOiB0aGlzLnh6cWggPT09ICcnID8gJ+aYhuaYjuW4gicgOiB0aGlzLnh6cWgsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIuepuuawlOi0qOmHj+aXpeWOhlwiLFxyXG4gICAgICAgICAgICBxdWVyeUZsYWc6IHRoaXMucXVlcnlGbGFnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgZ29TaXRlTGlzdCh0eXBlKSB7XHJcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgbmFtZTogJ2FpckV4YW1pbmVTaXRlTGlzdCcsXHJcbiAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICB0eXBlOiB0eXBlLFxyXG4gICAgICAgICAgICBxdWVyeUZsYWc6IHRoaXMucXVlcnlGbGFnLFxyXG4gICAgICAgICAgICB4enFoOiB0aGlzLnh6cWhcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICAuYWlyX2hlYWRlciB7XHJcbiAgICBtYXJnaW46IDZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgLmRhdGEtdGltZSB7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLmFxaS1kZXMge1xyXG4gICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFxaS13cmFwcGVyIHtcclxuICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG5cclxuICAgICAgLm51bWJlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDEpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudHlwZS1ib3gge1xyXG4gICAgICAgIG1hcmdpbjogMCA4cHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDE0cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wb2xsdXRpb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hcWktYm94IHtcclxuICAgICAgbWFyZ2luOiAzcHggMDtcclxuICAgICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG5cclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICB3aWR0aDogMTE2cHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgICAgIC8qYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDk5LjQ0JSk7Ki9cclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoNjcsIDIwNywgMTI0LCAwLjMpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDk5LjQ0JSk7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC44KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnNpdGUtd3JhcHBlciB7XHJcbiAgICAgICAgbWFyZ2luOiAxMHB4IDEwcHggMHB4O1xyXG5cclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5jYWxlbmRhci1ib3gge1xyXG4gICAgICAgICAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDY4LCAxMjMsIDI1MiwgMC4zKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zaXRlLW51bWJlciwgLnNpdGUtZ29vZCwgLnNpdGUtcG9sbHV0ZWQge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zaXRlLW51bWJlciB7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zaXRlLWdvb2Qge1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoNjcsIDIwNywgMTI0LCAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zaXRlLXBvbGx1dGVkIHtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMTQxLCAyNiwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFpcl9oZWFkZXJfZmlyc3Qge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgLmFpcl9oZWFkZXJfbGVmdCB7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweCA1cHggMzBweDtcclxuXHJcbiAgICAgICAgLmFpcl9kYXRhIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgICAgICAgIC8vIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDEpO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5haXJfdHlwZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICB3aWR0aDogNDAuMjJweDtcclxuICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjVkZWcsICMwMGU0MDAgMCUsICM2MmZjN2MgMTAwJSk7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbjogMTVweCAxMHB4IDBweCAxNXB4O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIC5haXJfY2l0eSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgICBtYXJnaW46IDE3cHggMHB4IDBweDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5haXJfZGF0ZSB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuYWlyX2hlYWRlcl9yaWdodCB7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggNXB4IDBweDtcclxuXHJcbiAgICAgICAgLmFpcl90b3Age1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcblxyXG4gICAgICAgICAgPiBpbWcge1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDZweDtcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5haXJfYm90dG9tIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMHB4IDVweCAyMHB4O1xyXG5cclxuICAgICAgICAgID4gZGl2IHtcclxuICAgICAgICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcblxyXG4gICAgICAgICAgICA+IHNwYW4ge1xyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoNjgsIDEyMywgMjUyLCAxKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFpcl9oZWFkZXJfc2Vjb25kIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgICAvKmJhY2tkcm9wLWZpbHRlcjogYmx1cigxMHB4KTsqL1xyXG4gICAgICBtYXJnaW46IDNweCAxMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgPiBkaXYge1xyXG4gICAgICAgIHdpZHRoOiAzMyU7XHJcblxyXG4gICAgICAgID4gc3BhbiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFpcl9oZWFkZXJfdGhpcmQge1xyXG4gICAgICBtYXJnaW46IDVweCAxMHB4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcblxyXG4gICAgICAuYWlyLWJveCB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAyNXB4KTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFpcl9ibHVlX2JnIHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAvKmJhY2tncm91bmQ6IHVybChcIn5AL2Fzc2V0cy9wb2xsdXRlci9haXJiZy5wbmdcIikgY2VudGVyIG5vLXJlcGVhdDsqL1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcscmdiYSg2NywgMjA3LCAxMjQsIDAuMTUpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDEpIDEwMCUpO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjUwLCAxMjcsIDUsIDAuMDUpO1xyXG4gIH1cclxuXHJcbiAgLmFxaWdyZWVuIHtcclxuICAgIGNvbG9yOiAjM0JDOTc1O1xyXG4gIH1cclxuXHJcbiAgLmFxaXllbGxvdyB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTUsIDE5MSwgMCwgMSk7XHJcbiAgfVxyXG5cclxuICAuYXFpb3JhbmdlIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMTI2LCAwLCAxKTtcclxuICB9XHJcblxyXG4gIC5hcWlyZWQge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAxKTtcclxuICB9XHJcblxyXG4gIC5haXJfZ3JlZW5iZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDIyOCwgMCwgMSk7XHJcbiAgfVxyXG5cclxuICAuYWlyX3llbGxvd19iZyB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTkxLCAwLCAxKTtcclxuICB9XHJcblxyXG4gIC5haXJfb3JhbmdlYmcge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDEyNiwgMCwgMSk7XHJcbiAgfVxyXG5cclxuICAuYWlyX3JlZGJnIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAwLCAwLCAxKTtcclxuICB9XHJcblxyXG4gIC5haXJfd2hpdGVyYmcge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyMDQsIDIwNCwgMjA0LCAxKTtcclxuICB9XHJcblxyXG48L3N0eWxlPlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFpcl9oZWFkZXIgYWlyX2JsdWVfYmdcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkYXRhLXRpbWVcIiB9LCBbXG4gICAgICBfdm0uX3YoXCIg5pWw5o2u5pe26Ze077yaXCIgKyBfdm0uX3MoX3ZtLmZvcm1hdFRpbWUoX3ZtLmluZm8uYXFpVGltZSkpICsgXCIgXCIpLFxuICAgIF0pLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYXFpLWRlc1wiIH0sIFtfdm0uX3YoXCLlrp7ml7ZBUUlcIildKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZzIGFxaS13cmFwcGVyXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmc1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJudW1iZXJcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaW5mby5hcWkgfHwgXCItXCIpKSxcbiAgICAgICAgXSksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInR5cGUtYm94XCIsXG4gICAgICAgICAgICBjbGFzczogX3ZtLl9mKFwiZ2V0Q29sb3JCZ1wiKShfdm0uaW5mby5raW5kKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5pbmZvLmtpbmQpKV1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS54enFoKSArIFwiIFwiKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwb2xsdXRpb25cIiB9LCBbXG4gICAgICAgIF92bS5fdihcIiDpppbopoHmsaHmn5PnianvvJpcIiArIF92bS5fcyhfdm0uaW5mby5wcmltYXJ5UG9sbHV0YW50KSArIFwiIFwiKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYXFpLWJveFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZnNcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwi5pel57Sv6K6hQVFJ77yIXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IFwiZm9udC1zaXplXCI6IFwiMTZweFwiLCBcImZvbnQtd2VpZ2h0XCI6IFwiYm9sZFwiIH0gfSxcbiAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5pbmZvLmRheUFxaSkpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwi77yJXCIpLFxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljU3R5bGU6IHsgXCJwYWRkaW5nLXJpZ2h0XCI6IFwiOXB4XCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwi5pel57Sv6K6h6IezXCIgKyBfdm0uX3MoX3ZtLmZvcm1hdFRpbWUoX3ZtLmluZm8udGltZSkpKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZnMgc2l0ZS13cmFwcGVyXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjQwJVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcIiDnqbrmsJTotKjph48gXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNsYXNzOiBfdm0uX2YoXCJnZXRDb2xvclwiKShfdm0uaW5mby5kYXlBcWkpLFxuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImZvbnQtc2l6ZVwiOiBcIjE2cHhcIiwgXCJmb250LXdlaWdodFwiOiBcImJvbGRcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5nZXREYXlLaW5kKF92bS5pbmZvLmRheUFxaSkpKV1cbiAgICAgICAgICApLFxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgIF92bS5fdihcIiDpppbopoHmsaHmn5PniakgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IFwicmdiYSgxOCwgMTgsIDU0LCAxKVwiLFxuICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMTRweFwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5pbmZvLmRheVByaW1hcnlQb2xsdXRhbnQpKV1cbiAgICAgICAgICApLFxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNTdHlsZTogeyBcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIiB9IH0sIFtcbiAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYWxlbmRhci1ib3hcIixcbiAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL3BvbGx1dGVyL2NhbGVuZGFyLnBuZ1wiKSB9LFxuICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5nb0NhbGVuZGVyIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhcWktYm94XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmc1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiIH0sIFtfdm0uX3YoXCLlm73mjqdcIildKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljU3R5bGU6IHsgXCJwYWRkaW5nLXJpZ2h0XCI6IFwiOXB4XCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwi5pel57Sv6K6h6IezXCIgKyBfdm0uX3MoX3ZtLmluZm8uZ2tUaW1lKSksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZzIHNpdGUtd3JhcHBlclwiLFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdvU2l0ZUxpc3QoXCLlm73mjqdcIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcIiDlm73mjqfnq5nngrkgXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwic2l0ZS1udW1iZXJcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmluZm8uZ2tDb3VudCkpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiIOS8mOiJryBcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJzaXRlLWdvb2RcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmluZm8uZ2tHb29kKSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXCIg6L275bqm5rGh5p+TIFwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInNpdGUtcG9sbHV0ZWRcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmluZm8uZ2tCYWQpKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdXG4gICAgICApLFxuICAgIF0pLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYXFpLWJveFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZnNcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbX3ZtLl92KFwi55yB5o6nXCIpXSksXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY1N0eWxlOiB7IFwicGFkZGluZy1yaWdodFwiOiBcIjlweFwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihcIuaXpee0r+iuoeiHs1wiICsgX3ZtLl9zKF92bS5pbmZvLnNrVGltZSkpLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJmcyBzaXRlLXdyYXBwZXJcIixcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS5nb1NpdGVMaXN0KFwi55yB5o6nXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICBfdm0uX3YoXCIg55yB5o6n56uZ54K5IFwiKSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInNpdGUtbnVtYmVyXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pbmZvLnNrQ291bnQpKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgIF92bS5fdihcIiDkvJjoia8gXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwic2l0ZS1nb29kXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pbmZvLnNrR29vZCkpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiIOi9u+W6puaxoeafkyBcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJzaXRlLXBvbGx1dGVkXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5pbmZvLnNrQmFkKSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICBdKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImFxaS1ib3hcIiwgc3RhdGljU3R5bGU6IHsgcGFkZGluZzogXCI1cHggMTBweFwiIH0gfSxcbiAgICAgIFtcbiAgICAgICAgX3ZtLl92KFwiIOepuuawlOi0qOmHj+e0r+iuoeS8mCBcIiksXG4gICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcInJnYmEoNjcsIDIwNywgMTI0LCAxKVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmluZm8uZXhjZWxsZW50KSArIFwiIOWkqVwiKSxcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIu+8jCDoia8gXCIpLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJyZ2JhKDI1NSwgMTQxLCAyNiwgMC44KVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmluZm8uZ29vZCkgKyBcIiDlpKlcIiksXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCLvvIwg5LyY6Imv546HIFwiKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwicmdiYSg2OCwgMTIzLCAyNTIsIDEpXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaW5mby5leGNlbGxlbnRSYXQpKSxcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5fdihcIu+8jCDovbvluqbmsaHmn5MgXCIpLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJyZ2JhKDI1NSwgMzMsIDI2LCAwLjgpXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaW5mby5iYWQpICsgXCLlpKlcIiksXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCLjgIIgXCIpLFxuICAgICAgXVxuICAgICksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5haXJfaGVhZGVyW2RhdGEtdi03NzFhODBmNF0ge1xcbiAgbWFyZ2luOiA2cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uYWlyX2hlYWRlciAuZGF0YS10aW1lW2RhdGEtdi03NzFhODBmNF0ge1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG4uYWlyX2hlYWRlciAuYXFpLWRlc1tkYXRhLXYtNzcxYTgwZjRdIHtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5haXJfaGVhZGVyIC5hcWktd3JhcHBlcltkYXRhLXYtNzcxYTgwZjRdIHtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5haXJfaGVhZGVyIC5hcWktd3JhcHBlciAubnVtYmVyW2RhdGEtdi03NzFhODBmNF0ge1xcbiAgZm9udC1zaXplOiAzNnB4O1xcbiAgY29sb3I6ICMxMjEyMzY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmFpcl9oZWFkZXIgLmFxaS13cmFwcGVyIC50eXBlLWJveFtkYXRhLXYtNzcxYTgwZjRdIHtcXG4gIG1hcmdpbjogMCA4cHg7XFxuICBwYWRkaW5nOiAwcHggMTRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uYWlyX2hlYWRlciAuYXFpLXdyYXBwZXIgLnBvbGx1dGlvbltkYXRhLXYtNzcxYTgwZjRdIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLmFpcl9oZWFkZXIgLmFxaS1ib3hbZGF0YS12LTc3MWE4MGY0XSB7XFxuICBtYXJnaW46IDNweCAwO1xcbiAgcGFkZGluZzogNXB4IDA7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4uYWlyX2hlYWRlciAuYXFpLWJveCAudGl0bGVbZGF0YS12LTc3MWE4MGY0XSB7XFxuICB3aWR0aDogMTE2cHg7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICBwYWRkaW5nOiAwIDVweDtcXG4gIC8qYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDk5LjQ0JSk7Ki9cXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg2NywgMjA3LCAxMjQsIDAuMykgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgOTkuNDQlKTtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuOCk7XFxufVxcbi5haXJfaGVhZGVyIC5hcWktYm94IC5zaXRlLXdyYXBwZXJbZGF0YS12LTc3MWE4MGY0XSB7XFxuICBtYXJnaW46IDEwcHggMTBweCAwcHg7XFxufVxcbi5haXJfaGVhZGVyIC5hcWktYm94IC5zaXRlLXdyYXBwZXIgZGl2W2RhdGEtdi03NzFhODBmNF0ge1xcbiAgd2lkdGg6IDMzJTtcXG59XFxuLmFpcl9oZWFkZXIgLmFxaS1ib3ggLnNpdGUtd3JhcHBlciAuY2FsZW5kYXItYm94W2RhdGEtdi03NzFhODBmNF0ge1xcbiAgcGFkZGluZzogNHB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDY4LCAxMjMsIDI1MiwgMC4zKTtcXG59XFxuLmFpcl9oZWFkZXIgLmFxaS1ib3ggLnNpdGUtd3JhcHBlciAuc2l0ZS1udW1iZXJbZGF0YS12LTc3MWE4MGY0XSwgLmFpcl9oZWFkZXIgLmFxaS1ib3ggLnNpdGUtd3JhcHBlciAuc2l0ZS1nb29kW2RhdGEtdi03NzFhODBmNF0sIC5haXJfaGVhZGVyIC5hcWktYm94IC5zaXRlLXdyYXBwZXIgLnNpdGUtcG9sbHV0ZWRbZGF0YS12LTc3MWE4MGY0XSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4uYWlyX2hlYWRlciAuYXFpLWJveCAuc2l0ZS13cmFwcGVyIC5zaXRlLW51bWJlcltkYXRhLXYtNzcxYTgwZjRdIHtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbn1cXG4uYWlyX2hlYWRlciAuYXFpLWJveCAuc2l0ZS13cmFwcGVyIC5zaXRlLWdvb2RbZGF0YS12LTc3MWE4MGY0XSB7XFxuICBjb2xvcjogIzQzY2Y3YztcXG59XFxuLmFpcl9oZWFkZXIgLmFxaS1ib3ggLnNpdGUtd3JhcHBlciAuc2l0ZS1wb2xsdXRlZFtkYXRhLXYtNzcxYTgwZjRdIHtcXG4gIGNvbG9yOiAjZmY4ZDFhO1xcbn1cXG4uYWlyX2hlYWRlciAuYWlyX2hlYWRlcl9maXJzdFtkYXRhLXYtNzcxYTgwZjRdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5haXJfaGVhZGVyIC5haXJfaGVhZGVyX2ZpcnN0IC5haXJfaGVhZGVyX2xlZnRbZGF0YS12LTc3MWE4MGY0XSB7XFxuICB3aWR0aDogNjAlO1xcbiAgcGFkZGluZzogNXB4IDEwcHggNXB4IDMwcHg7XFxufVxcbi5haXJfaGVhZGVyIC5haXJfaGVhZGVyX2ZpcnN0IC5haXJfaGVhZGVyX2xlZnQgLmFpcl9kYXRhW2RhdGEtdi03NzFhODBmNF0ge1xcbiAgZm9udC1zaXplOiAzNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuLmFpcl9oZWFkZXIgLmFpcl9oZWFkZXJfZmlyc3QgLmFpcl9oZWFkZXJfbGVmdCAuYWlyX3R5cGVbZGF0YS12LTc3MWE4MGY0XSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNDAuMjJweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjVkZWcsICMwMGU0MDAgMCUsICM2MmZjN2MgMTAwJSk7XFxuICBjb2xvcjogI2ZmZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMTVweCAxMHB4IDBweCAxNXB4O1xcbn1cXG4uYWlyX2hlYWRlciAuYWlyX2hlYWRlcl9maXJzdCAuYWlyX2hlYWRlcl9sZWZ0IC5haXJfY2l0eVtkYXRhLXYtNzcxYTgwZjRdIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIG1hcmdpbjogMTdweCAwcHggMHB4O1xcbn1cXG4uYWlyX2hlYWRlciAuYWlyX2hlYWRlcl9maXJzdCAuYWlyX2hlYWRlcl9sZWZ0IC5haXJfZGF0ZVtkYXRhLXYtNzcxYTgwZjRdIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuLmFpcl9oZWFkZXIgLmFpcl9oZWFkZXJfZmlyc3QgLmFpcl9oZWFkZXJfcmlnaHRbZGF0YS12LTc3MWE4MGY0XSB7XFxuICB3aWR0aDogNDAlO1xcbiAgcGFkZGluZzogMTBweCAxMHB4IDVweCAwcHg7XFxufVxcbi5haXJfaGVhZGVyIC5haXJfaGVhZGVyX2ZpcnN0IC5haXJfaGVhZGVyX3JpZ2h0IC5haXJfdG9wW2RhdGEtdi03NzFhODBmNF0ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xcbiAgLXdlYmtpdC10ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuLmFpcl9oZWFkZXIgLmFpcl9oZWFkZXJfZmlyc3QgLmFpcl9oZWFkZXJfcmlnaHQgLmFpcl90b3AgPiBpbWdbZGF0YS12LTc3MWE4MGY0XSB7XFxuICBtYXJnaW4tcmlnaHQ6IDZweDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcbi5haXJfaGVhZGVyIC5haXJfaGVhZGVyX2ZpcnN0IC5haXJfaGVhZGVyX3JpZ2h0IC5haXJfYm90dG9tW2RhdGEtdi03NzFhODBmNF0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDVweCAwcHggNXB4IDIwcHg7XFxufVxcbi5haXJfaGVhZGVyIC5haXJfaGVhZGVyX2ZpcnN0IC5haXJfaGVhZGVyX3JpZ2h0IC5haXJfYm90dG9tID4gZGl2W2RhdGEtdi03NzFhODBmNF0ge1xcbiAgd2lkdGg6IDMzJTtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbi5haXJfaGVhZGVyIC5haXJfaGVhZGVyX2ZpcnN0IC5haXJfaGVhZGVyX3JpZ2h0IC5haXJfYm90dG9tID4gZGl2ID4gc3BhbltkYXRhLXYtNzcxYTgwZjRdIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uYWlyX2hlYWRlciAuYWlyX2hlYWRlcl9maXJzdCAuYWlyX2hlYWRlcl9yaWdodCAuYWlyX2JvdHRvbSA+IGRpdiA+IHNwYW5bZGF0YS12LTc3MWE4MGY0XTpsYXN0LWNoaWxkIHtcXG4gIGNvbG9yOiAjNDQ3YmZjO1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG59XFxuLmFpcl9oZWFkZXIgLmFpcl9oZWFkZXJfc2Vjb25kW2RhdGEtdi03NzFhODBmNF0ge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgLypiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7Ki9cXG4gIG1hcmdpbjogM3B4IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uYWlyX2hlYWRlciAuYWlyX2hlYWRlcl9zZWNvbmQgPiBkaXZbZGF0YS12LTc3MWE4MGY0XSB7XFxuICB3aWR0aDogMzMlO1xcbn1cXG4uYWlyX2hlYWRlciAuYWlyX2hlYWRlcl9zZWNvbmQgPiBkaXYgPiBzcGFuW2RhdGEtdi03NzFhODBmNF0ge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5haXJfaGVhZGVyIC5haXJfaGVhZGVyX3NlY29uZCA+IGRpdiA+IHNwYW5bZGF0YS12LTc3MWE4MGY0XTpmaXJzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XFxuICBjb2xvcjogIzEyMTIzNjtcXG59XFxuLmFpcl9oZWFkZXIgLmFpcl9oZWFkZXJfdGhpcmRbZGF0YS12LTc3MWE4MGY0XSB7XFxuICBtYXJnaW46IDVweCAxMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XFxufVxcbi5haXJfaGVhZGVyIC5haXJfaGVhZGVyX3RoaXJkIC5haXItYm94W2RhdGEtdi03NzFhODBmNF0ge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgd2lkdGg6IGNhbGMoNTAlIC0gMjVweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbn1cXG4uYWlyX2JsdWVfYmdbZGF0YS12LTc3MWE4MGY0XSB7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgLypiYWNrZ3JvdW5kOiB1cmwoXFxcIn5AL2Fzc2V0cy9wb2xsdXRlci9haXJiZy5wbmdcXFwiKSBjZW50ZXIgbm8tcmVwZWF0OyovXFxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSg2NywgMjA3LCAxMjQsIDAuMTUpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDEpIDEwMCUpO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjUwLCAxMjcsIDUsIDAuMDUpO1xcbn1cXG4uYXFpZ3JlZW5bZGF0YS12LTc3MWE4MGY0XSB7XFxuICBjb2xvcjogIzNCQzk3NTtcXG59XFxuLmFxaXllbGxvd1tkYXRhLXYtNzcxYTgwZjRdIHtcXG4gIGNvbG9yOiAjZmZiZjAwO1xcbn1cXG4uYXFpb3JhbmdlW2RhdGEtdi03NzFhODBmNF0ge1xcbiAgY29sb3I6ICNmZjdlMDA7XFxufVxcbi5hcWlyZWRbZGF0YS12LTc3MWE4MGY0XSB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG4uYWlyX2dyZWVuYmdbZGF0YS12LTc3MWE4MGY0XSB7XFxuICBiYWNrZ3JvdW5kOiAjMDBlNDAwO1xcbn1cXG4uYWlyX3llbGxvd19iZ1tkYXRhLXYtNzcxYTgwZjRdIHtcXG4gIGJhY2tncm91bmQ6ICNmZmJmMDA7XFxufVxcbi5haXJfb3JhbmdlYmdbZGF0YS12LTc3MWE4MGY0XSB7XFxuICBiYWNrZ3JvdW5kOiAjZmY3ZTAwO1xcbn1cXG4uYWlyX3JlZGJnW2RhdGEtdi03NzFhODBmNF0ge1xcbiAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG4uYWlyX3doaXRlcmJnW2RhdGEtdi03NzFhODBmNF0ge1xcbiAgYmFja2dyb3VuZDogI2NjY2NjYztcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9haXJRdWFsaXR5T3ZlcnZpZXcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzcxYTgwZjQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIyM2NjYzMzM1wiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FpclF1YWxpdHlPdmVydmlldy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NzFhODBmNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FpclF1YWxpdHlPdmVydmlldy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NzFhODBmNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcclxuXHJcbi8qKlxyXG4gKiDnmbvlvZVcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luKHRva2VuKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC9sb2dpbi91c2VyX2luZm8nLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgICB0b2tlbjogdG9rZW5cclxuICAgIH1cclxuICB9KVxyXG59XHJcbi8qKlxyXG4gKiDnmbvlvZUtLee6v+e0olxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbG9naW5fY2x1ZSh0b2tlbikge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9tYW5hZ2UvbG9naW4vdG9rZW5fdXNlcl9pbmZvJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgdG9rZW46IHRva2VuXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG4vKipcclxuICog56uZ54K55pCc57SiXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzaXRlU2VhcmNoKHtwYWdlLCBsaW1pdCwgbmFtZX0pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBwL2hvbWUvbGlzdCcsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIHBhZ2U6IHBhZ2UsXHJcbiAgICAgIGxpbWl0OiBsaW1pdCxcclxuICAgICAgbmFtZTogbmFtZVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDnlKjmiLfpgJrnn6VcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHN5c05vdGljZUluZm8oKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC9zeXNOb3RpY2VJbmZvJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOeUqOaIt+mAmuefpVxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbm90aWNlUmVhZCh7bm90aWNlSWR9KSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC9zeXNOb3RpY2VJbmZvL3JlYWQnLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBub3RpY2VJZDogbm90aWNlSWRcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICog5rOV5b6L5rOV6KeE5pCc57SiXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsYXdTZWFyY2goeyBuYW1lfSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9pbnRlcmZhY2UvcmV0cmlldmFsL2RvY3VtZW50X3NlYXJjaCcsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIHBhZ2U6IDEsXHJcbiAgICAgIGxpbWl0OiAxMDAwLFxyXG4gICAgICBpZDogJzUwNCw1MDUsNTA2JyxcclxuICAgICAgbmFtZTogbmFtZVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlkajovrnnq5nngrnmkJzntKJcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG5laWdoYm91clNpdGVTZWFyY2goe2xvbmdpdHVkZSwgbGF0aXR1ZGUsIG51bWJlcn0pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBwL2hvbWUvc3Vycm91bmRpbmcnLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBsb25naXR1ZGUsIGxhdGl0dWRlLCBudW1iZXJcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICog5Zu955yB6ICD56uZ54K55LyY6Imv5oOF5Ya1XHJcbiAqIEBwYXJhbSB0eXBlIDHlm73ogIMy55yB6ICDXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXRlclNpdGVGaW5lKHt0eXBlfSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvaG9tZS8nK3R5cGUsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOmlrueUqOawtOa6kOWcsOamguWGtVxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZHJpbmtXYXRlclN1bW1hcnkoKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC9ob21lJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICog6LaF5qCH5ZGK6K2mLeawlFxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd2FybmluZ0FpcigpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBwL2hvbWUvYWlyV2FybmluZycsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOi2heagh+WRiuitpi3msLRcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHdhcm5pbmdXYXRlcigpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvRENNUk0xMzAvbWVzc2FnZS9hYm5vcm1hbERhdGEnLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDotoXmoIfpooToraYt5rC0XHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXJuaW5nRWFybHlXYXRlcigpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvd2F0ZXIvY29tbW9uL3dhcm5pbmdzJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vLyDmsLTnq5nor6bmg4VcclxuZXhwb3J0IGZ1bmN0aW9uIHdhdGVyU3RhdGlvbihvYmplY3RpZCwgdHlwZSwgamNmcykge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9EQ01STTEzMC9seWR0L2dldEx5ZHRHaycsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIG9iamVjdGlkLCB0eXBlLCBqY2ZzLFxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlhajluILnqbrmsJTotKjph49cclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFpclF1YWxpdHkoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvaG9tZS9haXInLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczpkYXRhXHJcbiAgfSlcclxufVxyXG4vKipcclxuICog5YWo5biC56m65rCU6LSo6YePSUFRSVxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWlyUXVhbGl0eUlBUUkoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvaG9tZS9nZXRJbmRleElhcWknLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczpkYXRhXHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOa7h+axoOawtOi0qOeKtuWGtVxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGlhbldhdGVyUXVhbGl0eSgpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBwL2hvbWUvc2l0dWF0aW9uJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vL+mAmuefpeWFrOWRiiAtIOWIl+ihqFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Tm90aWNlTGlzdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2tlcF9tYW5hZ2Uvbm90aWNlL3F1ZXJ5TGlzdEluZm8nLFxyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIHBhcmFtczogZGF0YVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHSVMt5omA5pyJ5rGh5p+T5rqQXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBHSVNQb2xsdXRpdG9uKCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9wb2xsdXQvcG9sbHV0aW9uL2dldEFsbFN1bW1hcnknLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHSVMt5omA5pyJ5rC0XHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBHSVNXYXRlcigpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvd2F0ZXIvdmlzdWFsaXphdGlvbi9hbGwtc2VjdGlvbicsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIEdJUy3mn6Xmsp/muKBcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEdJU0NoYW5uZWwoe25hbWV9KSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL3dhdGVyL3dhdGVyR3F4eCcsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIGR3bWM6IG5hbWUsXHJcbiAgICAgIGdxbWM6IG5hbWVcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICog5aSn5rCU56uZ54K5XHJcbiAqIEBwYXJhbSB0eXBlIDPlhajpg6hcclxuICogQHBhcmFtIHRpbWUg5a+G56CBXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBaXJTaXRlKHt0aW1lfSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJ2h0dHA6Ly8xMTYuNTIuNi4xMTg6MTg4OTkvS1FaTFlaVy9ob21lL3JlYWxkYXRhP3R5cGU9MyZ0aW1lPScgKyB0aW1lLFxyXG4gICAgbWV0aG9kOiAnR0VUJyxcclxuICAgIGRhdGE6IHt9XHJcbiAgfSlcclxufVxyXG5cclxuLy8g55So5oi355m75b2VXHJcbmV4cG9ydCBjb25zdCB1c2VyTG9naW4gPSAobmFtZSwgcHdkKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL3N5c3RlbS1zZXJ2aWNlLWxvZ2luL3VzZXIvbG9naW4nLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgICB1c2VyTmFtZTogbmFtZSxcclxuICAgICAgcGFzc3dvcmQ6IHB3ZFxyXG4gICAgfVxyXG4gIH0pXHJcbn07XHJcblxyXG4vKipcclxuICog55So5oi357uE5Lu26K6i6ZiFXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiB1c2VyU3Vic2NyaWJlKHRva2VuKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC9ob21lL3VzZXJTdWJzY3JpYmUnLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBUb2tlbjogdG9rZW5cclxuICAgIH1cclxuICB9KVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUEwQUFBQU5DQVlBQUFCeTYrUjhBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFEdFNVUkJWQ2lSblpBOUx3UmhGSVdmODg1c1NDU0lRcW5WcUNRU0JRVm00b2RJUktteGlwMm9mQ1ZVL0FQL1FLWHhVYXFWS05SSzlidzdSN0VUbWV5eW0zV2EyNXpuM2lkWDJhRVhuTVlkb1NQRUx2aWQvamdzZ2ErRk9tVXIzQ2pyeEM5Z2VxRDRkejdEbUFEQWJCZ1RBQ0FGd0dyZm55WVhvOHBiUlhrdWE3OEhDVzhVWGt6Y3ZUSzZ0ZjBSeEVHUWp5dUhaZUZOeDJUUFJBQis5RUlYRDd0U3BhaFBEejJjNlEzWWJ2VHU2dmtJWE5aNkRlaS9lblZXQlhPSm1BVFdZNlVKVk0wYlZuN1ZlenJSS3pEVFdOQnFhTFlIOUNUbldWRk9EWHRFTDFvRFNJMWV3RGxXUGhvQ3hQTTNmWXRlNm56RllkQUFBQUFBU1VWT1JLNUNZSUk9XCIiLCIvL+W9k+WJjeeUteiEkeaXtumXtC0t5b2T5pelXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUaGlzRGF0ZShlKSB7XHJcbi8vK1wiIFwiK2grXCI6XCIrTStcIjpcIitzO1xyXG5cdFx0bGV0IG5vd1RpbWUgPSBcIlwiO1xyXG5cdFx0bGV0IHRpbWU9IG5ldyBEYXRlKCk7XHJcblx0XHRsZXQgeT10aW1lLmdldEZ1bGxZZWFyKCk7XHJcblx0XHRsZXQgbG09dGltZS5nZXRNb250aCgpO1xyXG5cdFx0XHRsbT1sbTwxMD8nMCcrbG06bG07XHJcblx0XHRsZXQgbT10aW1lLmdldE1vbnRoKCkrMTtcclxuXHRcdFx0bT1tPDEwPycwJyttOm07XHJcblx0XHRsZXQgZD10aW1lLmdldERhdGUoKTtcclxuXHRcdFx0ZD1kPDEwPycwJytkOmQ7XHJcblx0XHRsZXQgaD10aW1lLmdldEhvdXJzKCk7XHJcblx0XHRcdGg9aDwxMD8nMCcraDpoO1xyXG5cdFx0bGV0IE0gPSB0aW1lLmdldE1pbnV0ZXMoKTtcclxuXHRcdFx0TT1NPDEwPycwJytNOk07XHJcblx0XHRsZXQgcyA9IHRpbWUuZ2V0U2Vjb25kcygpO1xyXG5cdFx0XHRzPXM8MTA/JzAnK3M6cztcclxuXHRcdGlmIChlID09PSAxKSB7XHJcblx0XHRcdG5vd1RpbWU9IHkrXCItXCIrIG0rXCItXCIrZCArICcgJyArIGggKyAnOicgKyBNICsgJzonICsgc1xyXG5cdFx0fWVsc2UgaWYoZSA9PSA0KXsvL+W9k+aciOeahOesrOS4gOWkqVxyXG5cdFx0XHRub3dUaW1lPSB5K1wiLVwiKyBtK1wiLTFcIjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG5vd1RpbWU9IHkrXCItXCIrIG0rXCItXCIrZFxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG5vd1RpbWU7XHJcbn1cclxuLy8g6L2s5YyW5pe26Ze0XHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUsbikge1xyXG5cdFx0bGV0IHRpbWU9IG5ldyBEYXRlKGRhdGUpO1xyXG5cdFx0bGV0IG5vd1RpbWU9IFwiXCI7XHJcblx0XHRsZXQgeT10aW1lLmdldEZ1bGxZZWFyKCk7XHJcblx0XHRsZXQgbT10aW1lLmdldE1vbnRoKCkrMTtcclxuXHRcdFx0bT1tPDEwPycwJyttOm07XHJcblx0XHRsZXQgZD10aW1lLmdldERhdGUoKTtcclxuXHRcdFx0ZD1kPDEwPycwJytkOmQ7XHJcblx0XHRsZXQgaD10aW1lLmdldEhvdXJzKCk7XHJcblx0XHRcdGg9aDwxMD8nMCcraDpoO1xyXG5cdFx0bGV0IE0gPSB0aW1lLmdldE1pbnV0ZXMoKTtcclxuXHRcdFx0TT1NPDEwPycwJytNOk07XHJcblx0XHRsZXQgcyA9IHRpbWUuZ2V0U2Vjb25kcygpO1xyXG5cdFx0XHRzPXM8MTA/JzAnK3M6cztcclxuXHRcdGlmKG49PVwieVwifHxuPT1cIuW5tFwiKXtcclxuXHRcdFx0bm93VGltZT0geVxyXG5cdFx0fWVsc2UgaWYobj09XCJNXCJ8fG49PVwi5pyIXCIpe1xyXG5cdFx0XHRub3dUaW1lPSB5K1wiLVwiKyBtXHJcblx0XHR9ZWxzZSBpZihuPT1cIm1cIil7XHJcblx0XHRcdG5vd1RpbWU9IHkrXCItXCIrIG0rXCItXCIrZCtcIiBcIitoK1wiOlwiK01cclxuXHRcdH1lbHNlIGlmKG49PVwiaFwifHxuPT1cIuaXtlwiKXtcclxuXHRcdFx0bm93VGltZT0geStcIi1cIisgbStcIi1cIitkK1wiIFwiK2hcclxuXHRcdH1lbHNlIGlmKG49PVwiZFwifHxuPT1cIuaXpVwiKXtcclxuXHRcdFx0bm93VGltZT0geStcIi1cIisgbStcIi1cIitkXHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0bm93VGltZT0geStcIi1cIisgbStcIi1cIitkK1wiIFwiK2grXCI6XCIrTStcIjpcIitzXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbm93VGltZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaG91ckRhdGVGb3JtYXQoZGF0ZSkge1xyXG5cdGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cdGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcblx0bGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG5cdGxldCBob3VyID0gZGF0ZS5nZXRIb3VycygpO1xyXG5cdGRhdGUgPSB5ZWFyICsgJy0nICsgKG1vbnRoID4gOSA/IG1vbnRoIDogJzAnICsgbW9udGgpICsgJy0nICsgKGRheSA+IDkgPyBkYXkgOiAnMCcgKyBkYXkpICsgJyAnICsgKGhvdXIgPiA5ID8gaG91ciA6ICcwJyArIGhvdXIpO1xyXG5cdHJldHVybiBkYXRlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBtb250aERhdGVGb3JtYXQoZGF0ZSkge1xyXG5cdGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cdGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcblx0ZGF0ZSA9IHllYXIgKyAnLScgKyAobW9udGggPiA5ID8gbW9udGggOiAnMCcgKyBtb250aCk7XHJcblx0cmV0dXJuIGRhdGU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZvdXJIb3VyVGltZSgpIHtcclxuXHRsZXQgbm93RGF0ZSA9IG5ldyBEYXRlKCk7XHJcblx0bGV0IHllYXIgPSBub3dEYXRlLmdldEZ1bGxZZWFyKCk7XHJcblx0bGV0IG1vbnRoID0gbm93RGF0ZS5nZXRNb250aCgpICsgMTtcclxuXHRsZXQgZGF5ID0gbm93RGF0ZS5nZXREYXRlKCk7XHJcblx0bGV0IGhvdXJzID0gbm93RGF0ZS5nZXRIb3VycygpO1xyXG5cdGlmIChob3VycyA8IDQgJiYgaG91cnMgPj0gMCkge1xyXG5cdFx0aG91cnMgPSAwO1xyXG5cdH0gZWxzZSBpZiAoaG91cnMgPCA4ICYmIGhvdXJzID49IDQpIHtcclxuXHRcdGhvdXJzID0gNDtcclxuXHR9IGVsc2UgaWYgKGhvdXJzIDwgMTIgJiYgaG91cnMgPj0gOCkge1xyXG5cdFx0aG91cnMgPSA4O1xyXG5cdH0gZWxzZSBpZiAoaG91cnMgPCAxNiAmJiBob3VycyA+PSAxMikge1xyXG5cdFx0aG91cnMgPSAxMjtcclxuXHR9IGVsc2UgaWYgKGhvdXJzIDwgMjAgJiYgaG91cnMgPj0gMTYpIHtcclxuXHRcdGhvdXJzID0gMTY7XHJcblx0fSBlbHNlIGlmIChob3VycyA8PSAyMyAmJiBob3VycyA+PSAyMCkge1xyXG5cdFx0aG91cnMgPSAyMDtcclxuXHR9XHJcblx0bW9udGggPSBtb250aCA8IDEwID8gXCIwXCIgKyBtb250aCA6IG1vbnRoO1xyXG5cdGRheSA9IGRheSA8IDEwID8gXCIwXCIgKyBkYXkgOiBkYXk7XHJcblx0aG91cnMgPSBob3VycyA8IDEwID8gXCIwXCIgKyBob3VycyA6IGhvdXJzO1xyXG5cdHJldHVybiB5ZWFyKyctJyttb250aCsnLScrZGF5KycgJytob3VycysnOjAwOjAwJ1xyXG59XHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vYWlyUXVhbGl0eU92ZXJ2aWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03NzFhODBmNCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9haXJRdWFsaXR5T3ZlcnZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9haXJRdWFsaXR5T3ZlcnZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2FpclF1YWxpdHlPdmVydmlldy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03NzFhODBmNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjc3MWE4MGY0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzc3MWE4MGY0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc3MWE4MGY0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc3MWE4MGY0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9haXJRdWFsaXR5T3ZlcnZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc3MWE4MGY0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc3MWE4MGY0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvYWlySG9tZVBhZ2UvY29tcG9uZW50cy9haXJRdWFsaXR5T3ZlcnZpZXcudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9haXJRdWFsaXR5T3ZlcnZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FpclF1YWxpdHlPdmVydmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9haXJRdWFsaXR5T3ZlcnZpZXcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzcxYTgwZjQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9haXJRdWFsaXR5T3ZlcnZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc3MWE4MGY0JnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==