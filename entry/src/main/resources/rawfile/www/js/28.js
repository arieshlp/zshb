(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/homePage/components/cityAir.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/homePage/components/cityAir.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_api_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/api.js */ "./src/api/api.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/utils */ "./src/utils/utils.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _views_airHomePage_components_airQualityOverview__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/views/airHomePage/components/airQualityOverview */ "./src/views/airHomePage/components/airQualityOverview.vue");
/* harmony import */ var _views_airHomePage_components_hourAirQuality__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/views/airHomePage/components/hourAirQuality */ "./src/views/airHomePage/components/hourAirQuality.vue");



//
//
//
//
//
//
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
  name: "cityAir",
  components: {
    airQualityOverview: _views_airHomePage_components_airQualityOverview__WEBPACK_IMPORTED_MODULE_6__["default"],
    hourAirQuality: _views_airHomePage_components_hourAirQuality__WEBPACK_IMPORTED_MODULE_7__["default"]
  },
  props: {
    detailsParameter: String,
    type: String
  },
  data: function data() {
    return {
      xzqh: "",
      info: {
        kind: ''
      },
      searchObj: {}
    };
  },
  mounted: function mounted() {
    this.searchObj = this.$store.state.searchObj;

    if (this.detailsParameter) {
      this.xzqh = this.searchObj.parameter;
    } else {
      this.searchObj = this.$store.state.searchObj;
      this.xzqh = this.searchObj.parameter;
    }

    this.queryData();
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
                console.log(tempD);
                _this.info = tempD;

              case 5:
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
        Object(_api_api_js__WEBPACK_IMPORTED_MODULE_3__["airQuality"])({
          divisionName: _this2.xzqh
        }).then(function (res) {
          resolve(res.data);
        });
      });
    },
    onCity: function onCity(flag) {
      this.$router.push({
        name: 'airHomePage',
        query: {
          xqtype: "空气质量",
          title: "空气质量",
          xzqh: this.xzqh
        }
      });
    },
    formatTime: function formatTime(value) {
      return dayjs__WEBPACK_IMPORTED_MODULE_5___default()(value).format('YYYY-MM-DD HH');
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/homePage/components/cityWater.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/homePage/components/cityWater.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_setdate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/setdate */ "./src/utils/setdate.js");
/* harmony import */ var _api_water_envir__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/water_envir */ "./src/api/water_envir.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "cityWater",
  data: function data() {
    return {
      today: Object(_utils_setdate__WEBPACK_IMPORTED_MODULE_0__["getThisDate"])(),
      area: "昆明市",
      waterdata: [],
      searchObj: {},
      countryImg: __webpack_require__(/*! ../../../assets/国.png */ "./src/assets/国.png"),
      provinceImg: __webpack_require__(/*! ../../../assets/省.png */ "./src/assets/省.png"),
      cityImg: __webpack_require__(/*! ../../../assets/市.png */ "./src/assets/市.png")
    };
  },
  mounted: function mounted() {
    this.searchObj = this.$store.state.searchObj;
    console.log(this.searchObj);
    this.loadData();
  },
  methods: {
    loadData: function loadData() {
      var _this = this;

      Object(_api_water_envir__WEBPACK_IMPORTED_MODULE_1__["waterBasicData"])({
        dataType: this.searchObj.parameter
      }).then(function (res) {
        _this.waterdata = res.data;
      });
    },
    toIndex: function toIndex() {
      var searchData = {
        moduleName: '',
        resourcePath: '',
        type: '',
        parameter: this.searchObj.parameter,
        componentName: ''
      };
      this.$store.commit('setSearchObj', searchData);
      this.$router.push({
        name: 'waterHomePage',
        query: {
          xzqh: this.searchObj.parameter
        }
      });
    },
    toDetail: function toDetail(flag) {
      this.$router.push({
        name: "examineSiteList",
        query: {
          type: flag,
          xzqh: this.searchObj.parameter
        }
      });
    },
    controlImg: function controlImg(type) {
      if (type) {
        var imgHtml = '';

        for (var i in type) {
          if (type[i] === '国') {
            imgHtml += '<img src="' + this.countryImg + '" style="width: 20px"/>';
          } else if (type[i] === '省') {
            imgHtml += '<img src="' + this.provinceImg + '" style="width: 20px"/>';
          } else if (type[i] === '市') {
            imgHtml += '<img src="' + this.cityImg + '" style="width: 20px"/>';
          }
        }

        return imgHtml;
      }
    }
  },
  watch: {
    area: function area(val, old) {
      if (val != old) {
        this.loadData();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/homePage/components/cityAir.vue?vue&type=template&id=2eb4b446&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/homePage/components/cityAir.vue?vue&type=template&id=2eb4b446&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "card-wrapper" },
    [
      _c(
        "div",
        {
          staticClass: "fs",
          on: {
            click: function ($event) {
              return _vm.onCity(0)
            },
          },
        },
        [
          _c("div", { staticClass: "fs" }, [
            _c("div", { staticClass: "card-title card-title-air" }, [
              _vm._v(_vm._s(_vm.xzqh) + "空气质量"),
            ]),
          ]),
          _c(
            "span",
            { staticClass: "time", staticStyle: { "padding-right": "13px" } },
            [_vm._v(_vm._s(_vm.formatTime(_vm.info.time)))]
          ),
        ]
      ),
      _c("airQualityOverview", { attrs: { queryFlag: 0 } }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/homePage/components/cityWater.vue?vue&type=template&id=c80b1f2c&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/homePage/components/cityWater.vue?vue&type=template&id=c80b1f2c&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "card-wrapper", staticStyle: { "padding-bottom": "14px" } },
    [
      _c("div", { staticClass: "fs", on: { click: _vm.toIndex } }, [
        _c("div", { staticClass: "card-title card-title-water" }, [
          _vm._v(_vm._s(_vm.searchObj.parameter) + "水环境概况"),
        ]),
        _c("span", { staticClass: "time" }, [
          _vm._v("累计截至" + _vm._s(_vm.waterdata[0].dataTime) + " "),
        ]),
      ]),
      _vm._l(_vm.waterdata, function (item, i) {
        return _c(
          "div",
          {
            staticClass: "base-wrapper",
            on: {
              click: function ($event) {
                return _vm.toDetail(item.type)
              },
            },
          },
          [
            _c("div", { staticClass: "base-title" }, [
              _c("div", {
                domProps: { innerHTML: _vm._s(_vm.controlImg(item.type)) },
              }),
            ]),
            _c(
              "div",
              { staticClass: "fs", staticStyle: { margin: "0 17px 0" } },
              [
                _c("div", { staticClass: "card-summary" }, [
                  _c(
                    "span",
                    { staticStyle: { color: "rgba(68, 123, 252, 1)" } },
                    [_vm._v("优良水体")]
                  ),
                  _c("div", [
                    _c("span", { staticClass: "polluteNum" }, [
                      _vm._v(_vm._s(item.excellent)),
                    ]),
                    _vm._v("个 "),
                  ]),
                ]),
                _c("div", { staticClass: "card-summary" }, [
                  _c(
                    "span",
                    { staticStyle: { color: "rgba(68, 123, 252, 1)" } },
                    [_vm._v("劣V类")]
                  ),
                  _c("div", [
                    _c(
                      "span",
                      {
                        staticClass: "polluteNum",
                        staticStyle: { color: "rgba(254, 79, 2, 1)" },
                      },
                      [_vm._v(_vm._s(item.poor))]
                    ),
                    _vm._v("个 "),
                  ]),
                ]),
                _c("div", { staticClass: "card-summary" }, [
                  _c(
                    "span",
                    { staticStyle: { color: "rgba(18, 18, 54, 0.5)" } },
                    [_vm._v("总")]
                  ),
                  _c("div", [
                    _c("span", { staticClass: "polluteNum" }, [
                      _vm._v(_vm._s(item.num)),
                    ]),
                    _vm._v("个 "),
                  ]),
                ]),
              ]
            ),
            _c(
              "div",
              { staticClass: "fs", staticStyle: { margin: "3px 13px 0 3px" } },
              [
                _c("div", { staticClass: "progress-wrapper" }, [
                  _c("div", {
                    staticClass: "standard",
                    style: "width:" + item.excellentRate,
                  }),
                ]),
                _c("div", [
                  _c(
                    "span",
                    {
                      staticStyle: {
                        color: "#121236",
                        "font-size": "14px",
                        "font-weight": "bold",
                      },
                    },
                    [_vm._v(_vm._s(item.excellentRate))]
                  ),
                  _c("br"),
                  _c(
                    "span",
                    {
                      staticStyle: {
                        "font-size": "12px",
                        color: "rgba(18, 18, 54, 0.5)",
                        "font-weight": "normal",
                      },
                    },
                    [_vm._v("优良率")]
                  ),
                ]),
              ]
            ),
          ]
        )
      }),
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/homePage/components/cityAir.vue?vue&type=style&index=0&id=2eb4b446&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/homePage/components/cityAir.vue?vue&type=style&index=0&id=2eb4b446&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fs[data-v-2eb4b446] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.level1[data-v-2eb4b446] {\n  display: inline-block;\n  padding: 2px 13px;\n  background: #00e400;\n  border-radius: 10px;\n  color: #fff;\n  font-size: 14px;\n}\n.time[data-v-2eb4b446] {\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.card-wrapper[data-v-2eb4b446] {\n  padding-bottom: 5px;\n}\n.card-content[data-v-2eb4b446] {\n  display: flex;\n  align-items: center;\n  margin: 6px 14px;\n  padding: 7px 12px;\n  background-color: rgba(242, 247, 255, 0.5);\n  border-radius: 10px;\n}\n.card-content .statis-sum[data-v-2eb4b446] {\n  width: 25%;\n  text-align: center;\n  color: #121236;\n  font-size: 26px;\n}\n.card-content .statis-item[data-v-2eb4b446] {\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  width: 30%;\n  color: #121236;\n  font-size: 16px;\n  line-height: 36px;\n}\n.card-content .statis-item .time[data-v-2eb4b446] {\n  line-height: 20px;\n  padding-right: 0;\n}\n.card-summary[data-v-2eb4b446] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 43%;\n  padding: 7px;\n  margin-bottom: 7px;\n  background: rgba(252, 248, 240, 0.3);\n  border: 1px solid rgba(252, 201, 98, 0.3);\n  border-radius: 4px;\n  font-size: 12px;\n  color: rgba(18, 18, 54, 0.5);\n}\n.card-summary .num[data-v-2eb4b446] {\n  color: #5271FF;\n  font-weight: bold;\n}\n.card-summary .polluteNum[data-v-2eb4b446] {\n  color: #FF8D1A;\n  font-weight: bold;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/homePage/components/cityWater.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/homePage/components/cityWater.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".card-no-border-wrapper {\n  margin: 4px 17px;\n  padding-bottom: 10px;\n}\n.card-no-border-wrapper .card-no-border-title {\n  display: flex;\n  align-items: center;\n  padding: 10px 0;\n}\n.card-no-border-wrapper .card-no-border-title .name {\n  color: black;\n  font-size: 18px;\n  font-weight: bold;\n}\n.card-no-border-wrapper .card-no-border-title .time {\n  padding-left: 10px;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.van-dropdown-menu__title {\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.8);\n}\n.van-dropdown-menu__bar {\n  background-color: transparent;\n  height: 28px;\n  box-shadow: none;\n}\n.van-dropdown-menu__item {\n  margin-right: 10px;\n  background-color: #f6f6f6;\n  border-radius: 6px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/homePage/components/cityWater.vue?vue&type=style&index=1&id=c80b1f2c&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/homePage/components/cityWater.vue?vue&type=style&index=1&id=c80b1f2c&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".base-wrapper[data-v-c80b1f2c] {\n  position: relative;\n  margin: 11px 0 0;\n  padding: 6px 3px;\n  border-radius: 10px;\n  background: linear-gradient(180deg, #f2f7ff 0%, rgba(242, 247, 255, 0) 100%);\n}\n.base-wrapper[data-v-c80b1f2c]::before {\n  content: \"\";\n  width: 1px;\n  height: 75px;\n  background: rgba(107, 155, 250, 0.5);\n  position: absolute;\n  top: 24px;\n  left: 6px;\n}\n.base-wrapper[data-v-c80b1f2c]::after {\n  content: \"\";\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background: rgba(107, 155, 250, 0.5);\n  position: absolute;\n  bottom: 0px;\n  left: 4px;\n}\n.base-wrapper .base-title[data-v-c80b1f2c] {\n  padding-left: 3px;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n}\n.base-wrapper .base-title div[data-v-c80b1f2c] {\n  color: rgba(18, 18, 54, 0.5);\n}\n.base-wrapper .base-title div span[data-v-c80b1f2c] {\n  font-size: 14px;\n  color: #121236;\n}\n.base-wrapper .card-summary[data-v-c80b1f2c] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 27%;\n  padding: 7px;\n  background: rgba(68, 123, 252, 0.05);\n  border: 1px solid rgba(68, 123, 252, 0.1);\n  border-radius: 4px;\n  font-size: 12px;\n  color: rgba(18, 18, 54, 0.5);\n}\n.base-wrapper .card-summary .num[data-v-c80b1f2c] {\n  color: #5271ff;\n  font-weight: bold;\n}\n.base-wrapper .card-summary .polluteNum[data-v-c80b1f2c] {\n  color: #121236;\n  font-size: 12px;\n  font-weight: bold;\n  text-decoration: underline;\n}\n.base-wrapper .progress-wrapper[data-v-c80b1f2c] {\n  display: flex;\n  align-items: center;\n  width: 82%;\n  padding: 0 3px;\n  height: 13px;\n  background: #f8fbff;\n  border: 1px solid rgba(82, 113, 255, 0.5);\n  border-left: 0;\n}\n.base-wrapper .progress-wrapper .standard[data-v-c80b1f2c] {\n  height: 9px;\n  border-radius: 10px;\n  margin-right: 5px;\n  background: linear-gradient(270deg, #00d2ff 0%, #2c3cfe 100%);\n  box-shadow: 0px 10px 20px rgba(20, 31, 159, 0.15);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/homePage/components/cityAir.vue?vue&type=style&index=0&id=2eb4b446&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/homePage/components/cityAir.vue?vue&type=style&index=0&id=2eb4b446&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./cityAir.vue?vue&type=style&index=0&id=2eb4b446&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/homePage/components/cityAir.vue?vue&type=style&index=0&id=2eb4b446&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2030a6b4", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/homePage/components/cityWater.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/homePage/components/cityWater.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./cityWater.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/homePage/components/cityWater.vue?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("010cf88a", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/homePage/components/cityWater.vue?vue&type=style&index=1&id=c80b1f2c&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/homePage/components/cityWater.vue?vue&type=style&index=1&id=c80b1f2c&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./cityWater.vue?vue&type=style&index=1&id=c80b1f2c&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/homePage/components/cityWater.vue?vue&type=style&index=1&id=c80b1f2c&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("6789250b", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/*! exports provided: querySupervision, queryHbmTrend, queryHbmAnalysis, queryHbmCodeAnalysis, queryApprovalList, submitDeptApproval, queryClueTypes, queryWRYList, queryAreas, getTaskInfo, getEvaluateInfo, getRiskType, queryRuleList, queryHbmDepartment, checkRules, editRules, queryWRYMap, queryStatistics, complaintProportion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "querySupervision", function() { return querySupervision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryHbmTrend", function() { return queryHbmTrend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryHbmAnalysis", function() { return queryHbmAnalysis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryHbmCodeAnalysis", function() { return queryHbmCodeAnalysis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryApprovalList", function() { return queryApprovalList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitDeptApproval", function() { return submitDeptApproval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryClueTypes", function() { return queryClueTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryWRYList", function() { return queryWRYList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAreas", function() { return queryAreas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaskInfo", function() { return getTaskInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEvaluateInfo", function() { return getEvaluateInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRiskType", function() { return getRiskType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryRuleList", function() { return queryRuleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryHbmDepartment", function() { return queryHbmDepartment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkRules", function() { return checkRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editRules", function() { return editRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryWRYMap", function() { return queryWRYMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryStatistics", function() { return queryStatistics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "complaintProportion", function() { return complaintProportion; });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./src/api/request.js");
 // ======================================== 首页 =====================================
//环保码

var querySupervision = function querySupervision() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/home/supervision',
    method: 'get',
    params: {}
  });
}; //环保码变化趋势

var queryHbmTrend = function queryHbmTrend(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/home/changing_trends',
    method: 'get',
    params: params
  });
}; //环保码原因分析

var queryHbmAnalysis = function queryHbmAnalysis(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/home/cause_analysis',
    method: 'get',
    params: params
  });
}; //环保码原因详情

var queryHbmCodeAnalysis = function queryHbmCodeAnalysis(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/home/pollution_detail',
    method: 'get',
    params: params
  });
}; //待审核列表

var queryApprovalList = function queryApprovalList(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/examine/pending_review_list',
    method: 'get',
    params: params
  });
}; //审核

var submitDeptApproval = function submitDeptApproval(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/examine/department_approval',
    method: 'post',
    data: params
  });
}; // 赋码类型下拉框

var queryClueTypes = function queryClueTypes() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/examine/type_list',
    method: 'get',
    params: {}
  });
}; //污染源列表

var queryWRYList = function queryWRYList(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/home/pollution_list',
    method: 'get',
    params: params
  });
}; //区域下拉框

var queryAreas = function queryAreas() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/home/division_list',
    method: 'get',
    params: {}
  });
}; //任务概括

var getTaskInfo = function getTaskInfo() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/law/task_summarize',
    method: 'get',
    params: {}
  });
}; //风险总览

var getEvaluateInfo = function getEvaluateInfo(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/evaluate/region_map',
    method: 'get',
    params: data
  });
}; // 风险问题类型

var getRiskType = function getRiskType() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/evaluate/top_info',
    method: 'get',
    params: {}
  });
}; // ==================================== 赋码规则 ====================================
//环保码规则查询

var queryRuleList = function queryRuleList(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/evaluate/rule_list',
    method: 'get',
    params: params
  });
}; //部门下拉框

var queryHbmDepartment = function queryHbmDepartment() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/interface/dept/dept_tree',
    method: 'GET',
    params: {}
  });
}; //校验

var checkRules = function checkRules(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/evaluate/check',
    method: 'get',
    params: params
  });
}; // 修改规则

var editRules = function editRules(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/evaluate/update',
    method: 'post',
    data: params
  });
}; // ====================================== 地图 ===================================
// 地图点位

var queryWRYMap = function queryWRYMap(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/home/pollution_map',
    method: 'get',
    params: params
  });
}; // ====================================== 统计报表 ===================================

var queryStatistics = function queryStatistics() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/app/statistics/division_pie',
    method: 'get',
    params: {}
  });
}; // ====================================== 动态评价 ===================================
//各区域投诉占比

var complaintProportion = function complaintProportion(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/cluster/airQuality/complaintProportion',
    method: 'get',
    params: data
  });
};

/***/ }),

/***/ "./src/api/water_envir.js":
/*!********************************!*\
  !*** ./src/api/water_envir.js ***!
  \********************************/
/*! exports provided: ranking, yearRankList, rankList, rankDetail, scaleMarks, waterBasicData, sectionInfo, sectionList, stationInfo, upStreamOver, lakeSiteList, querySectionInfo, stationDes, riverCourseDetail, hourLine, waterPollution, upstreamPollution, getUpList, upStreamWater, upstreamSewage, purificationPlant, dataTable, jhcInfo, lyBasin, lyDetail, dcSz, dcSzList, yysInfo, skList, waterBodyList, waterPlantList, reservoirList, waterPlantRiver, waterPlantSite, resourceStat, waterFunctionList, waterFunctionDetail, involveWater, sewageDetail, sewagePcDetail, sewageSyDetail, sewageJcDetail, sewageZzDetail, pollutionList, sewageStat, riverCourseStat, riverCourseList, waterList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ranking", function() { return ranking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yearRankList", function() { return yearRankList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rankList", function() { return rankList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rankDetail", function() { return rankDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleMarks", function() { return scaleMarks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waterBasicData", function() { return waterBasicData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sectionInfo", function() { return sectionInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sectionList", function() { return sectionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stationInfo", function() { return stationInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upStreamOver", function() { return upStreamOver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lakeSiteList", function() { return lakeSiteList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "querySectionInfo", function() { return querySectionInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stationDes", function() { return stationDes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "riverCourseDetail", function() { return riverCourseDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hourLine", function() { return hourLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waterPollution", function() { return waterPollution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upstreamPollution", function() { return upstreamPollution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUpList", function() { return getUpList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upStreamWater", function() { return upStreamWater; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upstreamSewage", function() { return upstreamSewage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purificationPlant", function() { return purificationPlant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataTable", function() { return dataTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jhcInfo", function() { return jhcInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lyBasin", function() { return lyBasin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lyDetail", function() { return lyDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dcSz", function() { return dcSz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dcSzList", function() { return dcSzList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yysInfo", function() { return yysInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skList", function() { return skList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waterBodyList", function() { return waterBodyList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waterPlantList", function() { return waterPlantList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reservoirList", function() { return reservoirList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waterPlantRiver", function() { return waterPlantRiver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waterPlantSite", function() { return waterPlantSite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceStat", function() { return resourceStat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waterFunctionList", function() { return waterFunctionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waterFunctionDetail", function() { return waterFunctionDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "involveWater", function() { return involveWater; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sewageDetail", function() { return sewageDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sewagePcDetail", function() { return sewagePcDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sewageSyDetail", function() { return sewageSyDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sewageJcDetail", function() { return sewageJcDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sewageZzDetail", function() { return sewageZzDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pollutionList", function() { return pollutionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sewageStat", function() { return sewageStat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "riverCourseStat", function() { return riverCourseStat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "riverCourseList", function() { return riverCourseList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waterList", function() { return waterList; });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./src/api/request.js");

var baseUrl = "/water"; //服务器是water类，本地没有加

/*
大竞赛水治理排名
 */

function ranking(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/competition/ranking",
    method: "get",
    params: data
  });
}
/*
水环境年底排名列表
 */

function yearRankList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/competition/yearRankList",
    method: "get",
    params: data
  });
}
/*
大竞赛水治理排名详情
 */

function rankList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/competition/rankList",
    method: "get",
    params: data
  });
}
/*
大竞赛水治理排名各区域详情
 */

function rankDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/competition/rankDetail",
    method: "get",
    params: data
  });
}
/*
 各县（市）区、开发度假园区季度地表水环境质量评分详情
 */

function scaleMarks(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/competition/scaleMarks",
    method: "get",
    params: data
  });
}
/*
全市水环境概况总体情况
 */

function waterBasicData(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/BasicData",
    method: "get",
    params: data
  });
}
/*
断面信息
 */

function sectionInfo(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/waterBasicData/sectionInfo",
    method: "post",
    data: data
  });
}
/*
断面列表--国、省、市
 */

function sectionList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/BasicData/sectionList",
    method: "post",
    data: data
  });
} // 断面信息--国、省、市

function stationInfo(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section",
    method: "post",
    data: data
  });
} // 断面信息--查询上游超标

function upStreamOver(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section/upStreamOver",
    method: "post",
    data: data
  });
} // 断面信息--查询湖库的监测断面

function lakeSiteList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section/lakeSiteList",
    method: "get",
    params: data
  });
} // 断面-河流时值曲线

function querySectionInfo(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section/querySectionInfo",
    method: "get",
    params: data
  });
} // 断面信息--国、省、市

function stationDes(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section/siteDetail",
    method: "GET",
    params: data
  });
} // 河流详情-河道详情

function riverCourseDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/BasicData/riverCourseDetail",
    method: "GET",
    params: data
  });
} // 断面-时值曲线

function hourLine(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section/curve",
    method: "post",
    data: data
  });
} // 断面信息--周边涉水污染源

function waterPollution(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section/pollution",
    method: "get",
    params: data
  });
}
function upstreamPollution(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section/upstreamPollution",
    method: "get",
    params: data
  });
} // 断面信息--上游断面列表
// export function getUpList(data) {
//   return request({
//     url: baseUrl + "/water/section/upStream",
//     method: "post",
//     data: data,
//   });
// }

function getUpList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section/upstreamSection",
    method: "get",
    params: data
  });
} // 断面信息--上游水库

function upStreamWater(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section/upstreamWater",
    method: "get",
    params: data
  });
} // 断面信息--上游排口

function upstreamSewage(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section/upstreamSewage",
    method: "get",
    params: data
  });
} // 断面信息--上游水质净化厂

function purificationPlant(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section/purificationPlant",
    method: "post",
    data: data
  });
} // 断面--监测详情

function dataTable(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section/dataTable",
    method: "post",
    data: data
  });
} // 断面--水质净化厂详情

function jhcInfo(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/plant",
    method: "post",
    data: data
  });
} // 昆明水环境-流域水质优良概况

function lyBasin(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/basin",
    method: "get",
    params: data
  });
} // 昆明水环境-流域水质优良概况-详情

function lyDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/basin/details",
    method: "get",
    params: data
  });
} // 首页 - 滇池水质

function dcSz() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/BasicData/dcData",
    method: "get"
  });
} // 首页 - 滇池水质 - 水质列表

function dcSzList() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/lake/dcList",
    method: "get"
  });
} // 首页-饮用水源地

function yysInfo(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/BasicData/drinkSource",
    method: "get",
    params: data
  });
} // 首页-饮用水源地-水库列表

function skList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/lake/drinkSourceList",
    method: "get",
    params: data
  });
} // 昆明市水环境-水库分布及库容

function waterBodyList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/BasicData/waterBodyDistribution",
    method: "get",
    params: data
  });
} // 昆明市水环境-水质净化厂分布

function waterPlantList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/plant",
    method: "get",
    params: data
  });
} // 昆明市水环境-水库分布

function reservoirList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/common/waterList",
    method: "get",
    params: data
  });
} // 水质净化厂河道断面详情

function waterPlantRiver(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/plant/detail",
    method: "get",
    params: data
  });
} // 水质净化厂补水断面

function waterPlantSite(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/plant/sites",
    method: "get",
    params: data
  });
}
/*
首页水资源查询
 */

function resourceStat(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/common/resourceStat",
    method: "get",
    params: data
  });
} // 水功能区列表

function waterFunctionList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/common/waterFuncList",
    method: "get",
    params: data
  });
} // 水功能区详情

function waterFunctionDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/common/waterFuncDetail",
    method: "get",
    params: data
  });
}
/*
首页涉水污染源
 */

function involveWater(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/pollution/stat",
    method: "get",
    params: data
  });
}
/*
首页涉水污染源详情
 */

function sewageDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/pollution/sewageDetail",
    method: "get",
    params: data
  });
}
/*
排口详情-排查列表
 */

function sewagePcDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/pollution/sewagePcDetail",
    method: "get",
    params: data
  });
}
/*
排口详情-溯源列表
 */

function sewageSyDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/pollution/sewageSyDetail",
    method: "get",
    params: data
  });
}
/*
排口详情-监测列表
 */

function sewageJcDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/pollution/sewageJcDetail",
    method: "get",
    params: data
  });
}
/*
排口详情-整治列表
 */

function sewageZzDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/pollution/sewageZzDetail",
    method: "get",
    params: data
  });
}
/*
涉水污染源列表
 */

function pollutionList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/pollution/sswrylb",
    method: "get",
    params: data
  });
}
/*
首页涉水污染源列表tab总数
 */

function sewageStat(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/pollution/sewageStat",
    method: "get",
    params: data
  });
}
/*
流域-河道信息统计
 */

function riverCourseStat(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/BasicData/riverCourseStat",
    method: "get",
    params: data
  });
}
/*
流域-河道情况
 */

function riverCourseList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/BasicData/riverCourseList",
    method: "get",
    params: data
  });
}
/*
流域-根据流域查询河道下拉框
 */

function waterList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/basin/waterList",
    method: "get",
    params: data
  });
}

/***/ }),

/***/ "./src/assets/国.png":
/*!**************************!*\
  !*** ./src/assets/国.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAASbSURBVFiFxZlLaB5VFMd/52YiuGiJ2yQm6wp5tImVqKEBF13UCCJKwSbopgEVTHWjC0HcSRfJosFGUetbslKDIlR8EGzVpIYkvlZVIo0vhEhWUnOPi5k73533fJ8pHhi+uTP3nsf/f86dM/MJNeX4W9r5T8C4gVER+jD0GKFDBERATPSbPg/H2yJsirAhwtJ17SyeuV226tiVqgl3v6kjwLQI96UdMPnO1BqrsmAMs/NjcrElB4fmtb3remZEeLhZ43UDiWSOfZx6fliu1nbwzhd1AMOrIvTXcqZFx92Bsi7tTM6Pylqlg0df0FED74thX5UzTVNccg/YaROOPTcmS4UOHj2rAwhLIpFze2RcBEwNXcCOBIz6SMYODs1r+w27rIjQX4nMf6G0ai6ss59hl5Nxqu6/yoxa+lXBKlgbHXlj2zhUQa13aOo8PS6a68bQzw4zCQSPzOiIMVzYUySaoTjnnjHcOj8mFw2AKtOlyLSCRGpts4zYXaYB5LZntdMEXKlCYqAreR2vkglzJ54L3loac/21P/xZjaJaugIM42ojsg3gzlPj0+N5O2brcv+7nq0Cu2IYD9Qyqg4B6+UAKQWRvL7SQMQh5RDMXM+5f+9N4XXr2fLtCmCcXWU0sLv0icl6byWpwMkry1laTBOF4xxUjRTmoGgbzvYFVukxeVCblIJIXDpMHG4OxW9/h+/+yOqpsNsTqKXDmizFYhsF4FOsGhbMxDBNyVMfhbQ6sbZBadpuXHyGjkCVwsLwHfcVr/4Md5zJUvzhFKz/Ak9+UEy3H2iR3di2hUCLKE1XVpqanEDCCeHeFqOSQiZXT9quNw5iqAsUGo/eOPKiQNLGi/LLp7jIbjQ/SXFONDYVuRsfvBEO9mQLQ4ETh5LXNn6Fb36L9PqBltklj+IakasNx4Pd8MAtZGSgMzx8eePrMDcLKS7JxSzFqcoybkEq8pc+h5cvJIvhk0dh7Qo8/k44HuxuOCZNUuweFqaqCXAPcV9x0UPfBaAWJm6G03fBiaGkbj/QqmbEFlJcVFkexbm0uGUK574AFCYPh6i2RLGBwGrxZhlDXTe5U8bPfZlEK0Fxnt3U2CQQLEHRpqr45BEY6k065dAZ7IbZe5L3BrpgbQteW85BsARFK2wHicjKYPcUX/oJDvWCaMMRVVjd9BxTb+vxmtaMg2WpJWwGZbt+EcUrP4ZOtvKKEDNRJ7WUjfJHHeRSXKQwbjDKGKmi2FursBSUVmUOxavPsCdSJ7VEWExSnNf+RGMnZz8OfzM9ILHS/PvR9QdHIp/KUsuAKAvvnZSteo86geXLoeK58+W5VvXSP9gd/lZ1UQKzANI7pfp/fUUoeVeeO/+QPAJuoy6jONX+VDYUNRnxO6WEXcP6XwGnXErV7mZc+1MVSKLBqNgdcuzuAJOXphrfCgOrBa+YTSCRXlu1FeUFosKOEY59Op38Rhiozb5ilrU/1yQQYV3amPzssewHzPrdzLULZO7vDk75tCYdVL4HDtRComY+1QpEWJA2Zr96ovwjeqBwHMvbKhwo66xz35XrB7KNsimwobBkDYurT9f7G+JfVBDRdoHRQ+4AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/市.png":
/*!**************************!*\
  !*** ./src/assets/市.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAR2SURBVFiFtZlNaB1VFMd/52YiuGipCy28aPalyUul7aLWh9lIoDULN6WroAsr+EUiXehGBBXsKlkY2ihCcWFK0E2D2IUWNWBFrDUvfi0lmviBi0hWUnOPi5l5786dOx/vJR24zNzMPV///znn3jcRal5nF7XxX8SkgZYIoxiGjXBABERATHL3n+P5lgjrIqyJsHLXIMtvPSybdexK1YLH39cTwLQIZ3wHTNiZWnNVloxhbmFcbvTl4NEFHRy6m1kRnu3VeN1Akmuefcy8fUxu13bwsXd1DMN7IjRrOdOn4+lAacsgUwstWa10cOIdbRn4SAz7qpzpmeKSd8D2gHD64risFDo4cUnHEFZEEuf2yLgImBq6gG2JaLlIdhw8uqCD9+zwjQjNSmR2Q2nVWmizn2NpTnZSdf9tZtXSVAWrYG0yQnPbHaqg1hnqPfvzorXpHJpsM5tB8JFZPWEMX+4pEr1QHHhnDA8tjMsNA6DKdCkyNZA4fG88ilDslRG7wzSAnLygDROx0W8+meT5jQkYOQivfAo//LU3uamWIYNhslaOFKCYRr6Y1N2ZkQAyCWq95qYYJo1aWiHYe03u9ias/RGjePi+8NoQpaWB7NCK7A6jYpJykaSuLVgH6ieOw5GhbGMS/9m5Xn8Uvv/TabbugriV8OPf8OHPsS3XLpLYNiAwGlll2AQWdRqQhbEGjA3R0zVysHrNBxV2EYbl+GuqpZt8D+3l46dg7Xd4+druW1W6WUSqjvc+1Cb5s3UUWE+hjZWlPCtx/nhIhOcFdju2LUTap4JQIKmHVsOBpMiUUJqbR9YWI5PuAKnAkyfhwQeyeZQpAKDZgAunuoi6xQRxj7zSLmfEDSRLcSAa6yhQhSP3U3k1G+XvOylQZpcQxUWUpgo0vr2wBN/9lk/u68/D6gacv5pP/rEGvHkqUeODUpJKeYq9wjCOgGoXgWBgLkIeMmq7QVrXVgHFYmLxPMVeNBmKUxtpIZBVmL7LUejK0g20qsKtFFFcVFkpguqg5MqmYkqOEXXeB2ULUisKIeHDbnyKtaDXhSj2ZDsUh3qsNzeZIilBMd0b3RwM9bpCil1ZvCIpQdEKW1Fh1w8pCFHsyhZRbJ3WU5QeodQS1qOyrp+jOLVRUAi+A1+cj9sRdPvn6kYJxb5dZa18q+uHYrrrbv0a30W6jl7+KllbA0WFlSiIRMH84idw6XrXqUKKE8efWyR8ekkPGBWpJcJyFGoJoXlukw/NXYorjNsApRm7ytLVc7JZb6vzFRYEcvMX+Ha9fpWWNWmBOUjbTB8KQmvPXQ5QWsCIv416uuavPRN/lqumOFXWJxJlKNqQXUP7n4iZRFv904wtQcJvEabK8eJAtoGpm093vxVGVhOZXSDhy9Y6rXiBqLBthNOfTWe/EUaa9rkqheYOBiK0ZYCpz1/Mf8Csf5q5c4HM/3uAGZfWrIPKT8ChWkjUzKdagQhLMsDc1y+Vf0SPFM5iuaLCobKTde4nZm+BbKGsC6wprFjD8q1X6/0b4n/7Uz4dM4TExQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/省.png":
/*!**************************!*\
  !*** ./src/assets/省.png ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAUVSURBVFiFxZlNbBVVFMd/53Zq4gJSEzRAbYnLFvsepTWGaoWNskASDBUJHzXpAhI1sbhyJSzYuCDtwioVWYAGsEsJiYnxs1EitIW2JO60lvDhDtOVwd7r4t773sy8eTP3FYg3mczcmXvP+d///5w7580TAtve82b9vxE7FfSL0IWiXQktIiACotw5fW3790RYFGFehMnHmrn40YtyO8SvFA147ZzZAgyLsCcNQGWDCeobw4RSjI5vk8srAtgzbppbH2dEhLcbdR66ENfGWMWRT3vlfjDAV0+bMoqzIpSCwKwQuD8wzEkzg+P9MlsIcPsp06/gkihWFYFpWOKcZ8BSk7Djk20yWRfg9pOmjDAp4sA9JOcioAJsAUsS0R9nsgKwZ9w0P7HMlAilQmYeRNKisTDHanp9TFZCdfV9RoymZAxoA1q7I6uvq4cxYHTsMKnrdL/eWN+HEkuMJBjcOmK2KMUvD5WJRiTOeKYUfePb5LICMIbhXGYCmdj4JHSuyZ7bqCJ6mWEAeeFDs15F3FppPCl33bUWjr8CN/6Co989nNg0mlaFYmdQjKRYvDQE+8qxlcd2gzgzA53w5QB0rGlcEVHsVEbTn0V7noH9my2Qyn139i0+3iM/uhV2d9RKmpWQFV/L9Cu9TFcW+noGutbBgR7r9PPpmEFTC84YuDAHH3xrn73eCQMdxSzGwHYpbWhvZIs42OvATSUNeoCQTIQ9z8LGp1IgO4NDqV0ZTUu9zIpPKq+HE7ug3Apnr8LZK7UGLYXVecdfhr0l+3z+bhJkx5r8jHa2WyJjAO12RHFbt+tr5W5rGNltjZ/5Fc5ciWWetplckRjYtwn2ddv++Vm4MGvHepBvdMUWleG34luD9BwzJnRL6G6D2VvZW8Tgc1X5AebuwLnrcONucmzNa7TAb6R1lYnEIF19A9jAgmuLVOs4DZva4M3nbbfc6oDdhi9mYP5O1VaFGeUuda2fGr9ufFLimPOKQTdh8wZ7HuqzQ7rbqGmztyxzpbVQWocvo+zZFgKcn82QNMuvW0hkdMaEVH/sAGxurwWUbuXWKpNZbf5OLNsD/JIpcSwxvMSfTULPBisxyoId6oN3J+C6j8mCePr6kE0gXUfSmr6yWGslTq1Ga5j6A6YXqg69vOWnrVMvoX8vQwwczpZrRmdLmsWqlnoSFxlwMvl4DG5u31M5kqZxRNokJc2iPW3Qx9Hpn+HaTffIZywkZMadT+yy6zKOmXQoZfVVIklyWEwb9ACnFxxAb7DefuZtmZjEASxq4V5UNybyDLj28f4GJaZA4jQOYdFKXJBZKmXAM3jqJ5hZrCaDKDsuS/LRgQCJ034N88kkSbMISYmdAQ9wagFm/kxKmvsVIUTimF8Dk1EjMVG5dgAPveSMSewUC4F030vsC4yi0BLhYlLinMxSMQPxymVmoSqrz1gva/x+d1uygtEZkib8Gia+OiS3g151aYNXf4feZ+Dk98kNPE/i7ja4fjND4josCowCyIbDxvxfXxFyfiuPffOWvAN+o86TOFX+hAR30FYVq5QSfhVzf0cc8TEbJnFWHVdnIZUaMvS1mfS7BAxOH65+K4y0cXMegIn0XF0HeN5CjLCkhB0/DCe/EUaVjbPIoHqECxHmpInBH9+r/YAZXs08uoWM/dPCkbisSYCG34COICYaqOMCJJ6QJkavvJ//ET0ysBfNBSN05FXW8Z+YK1jIPQyLAvMGJrXi4rVjYX9D/Af80JqnOE51LAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/views/homePage/components/cityAir.vue":
/*!***************************************************!*\
  !*** ./src/views/homePage/components/cityAir.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cityAir_vue_vue_type_template_id_2eb4b446_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cityAir.vue?vue&type=template&id=2eb4b446&scoped=true& */ "./src/views/homePage/components/cityAir.vue?vue&type=template&id=2eb4b446&scoped=true&");
/* harmony import */ var _cityAir_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cityAir.vue?vue&type=script&lang=js& */ "./src/views/homePage/components/cityAir.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _cityAir_vue_vue_type_style_index_0_id_2eb4b446_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cityAir.vue?vue&type=style&index=0&id=2eb4b446&lang=scss&scoped=true& */ "./src/views/homePage/components/cityAir.vue?vue&type=style&index=0&id=2eb4b446&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _cityAir_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cityAir_vue_vue_type_template_id_2eb4b446_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cityAir_vue_vue_type_template_id_2eb4b446_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2eb4b446",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/homePage/components/cityAir.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/homePage/components/cityAir.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./src/views/homePage/components/cityAir.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityAir_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./cityAir.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/homePage/components/cityAir.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityAir_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/homePage/components/cityAir.vue?vue&type=style&index=0&id=2eb4b446&lang=scss&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./src/views/homePage/components/cityAir.vue?vue&type=style&index=0&id=2eb4b446&lang=scss&scoped=true& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityAir_vue_vue_type_style_index_0_id_2eb4b446_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./cityAir.vue?vue&type=style&index=0&id=2eb4b446&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/homePage/components/cityAir.vue?vue&type=style&index=0&id=2eb4b446&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityAir_vue_vue_type_style_index_0_id_2eb4b446_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityAir_vue_vue_type_style_index_0_id_2eb4b446_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityAir_vue_vue_type_style_index_0_id_2eb4b446_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityAir_vue_vue_type_style_index_0_id_2eb4b446_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/homePage/components/cityAir.vue?vue&type=template&id=2eb4b446&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./src/views/homePage/components/cityAir.vue?vue&type=template&id=2eb4b446&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityAir_vue_vue_type_template_id_2eb4b446_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./cityAir.vue?vue&type=template&id=2eb4b446&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/homePage/components/cityAir.vue?vue&type=template&id=2eb4b446&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityAir_vue_vue_type_template_id_2eb4b446_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityAir_vue_vue_type_template_id_2eb4b446_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/homePage/components/cityWater.vue":
/*!*****************************************************!*\
  !*** ./src/views/homePage/components/cityWater.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cityWater_vue_vue_type_template_id_c80b1f2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cityWater.vue?vue&type=template&id=c80b1f2c&scoped=true& */ "./src/views/homePage/components/cityWater.vue?vue&type=template&id=c80b1f2c&scoped=true&");
/* harmony import */ var _cityWater_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cityWater.vue?vue&type=script&lang=js& */ "./src/views/homePage/components/cityWater.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _cityWater_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cityWater.vue?vue&type=style&index=0&lang=scss& */ "./src/views/homePage/components/cityWater.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _cityWater_vue_vue_type_style_index_1_id_c80b1f2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cityWater.vue?vue&type=style&index=1&id=c80b1f2c&lang=scss&scoped=true& */ "./src/views/homePage/components/cityWater.vue?vue&type=style&index=1&id=c80b1f2c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _cityWater_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cityWater_vue_vue_type_template_id_c80b1f2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cityWater_vue_vue_type_template_id_c80b1f2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c80b1f2c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/homePage/components/cityWater.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/homePage/components/cityWater.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./src/views/homePage/components/cityWater.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityWater_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./cityWater.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/homePage/components/cityWater.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityWater_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/homePage/components/cityWater.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************!*\
  !*** ./src/views/homePage/components/cityWater.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityWater_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./cityWater.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/homePage/components/cityWater.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityWater_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityWater_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityWater_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityWater_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/homePage/components/cityWater.vue?vue&type=style&index=1&id=c80b1f2c&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./src/views/homePage/components/cityWater.vue?vue&type=style&index=1&id=c80b1f2c&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityWater_vue_vue_type_style_index_1_id_c80b1f2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./cityWater.vue?vue&type=style&index=1&id=c80b1f2c&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/homePage/components/cityWater.vue?vue&type=style&index=1&id=c80b1f2c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityWater_vue_vue_type_style_index_1_id_c80b1f2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityWater_vue_vue_type_style_index_1_id_c80b1f2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityWater_vue_vue_type_style_index_1_id_c80b1f2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityWater_vue_vue_type_style_index_1_id_c80b1f2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/homePage/components/cityWater.vue?vue&type=template&id=c80b1f2c&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./src/views/homePage/components/cityWater.vue?vue&type=template&id=c80b1f2c&scoped=true& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityWater_vue_vue_type_template_id_c80b1f2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./cityWater.vue?vue&type=template&id=c80b1f2c&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/homePage/components/cityWater.vue?vue&type=template&id=c80b1f2c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityWater_vue_vue_type_template_id_c80b1f2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityWater_vue_vue_type_template_id_c80b1f2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2hvbWVQYWdlL2NvbXBvbmVudHMvY2l0eUFpci52dWUiLCJ3ZWJwYWNrOi8vL3NyYy92aWV3cy9ob21lUGFnZS9jb21wb25lbnRzL2NpdHlXYXRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2hvbWVQYWdlL2NvbXBvbmVudHMvY2l0eUFpci52dWU/MTRhYSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvaG9tZVBhZ2UvY29tcG9uZW50cy9jaXR5V2F0ZXIudnVlP2ZlY2IiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvaG9tZVBhZ2UvY29tcG9uZW50cy9jaXR5QWlyLnZ1ZT84YWJlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9ob21lUGFnZS9jb21wb25lbnRzL2NpdHlXYXRlci52dWU/MjQxOSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvaG9tZVBhZ2UvY29tcG9uZW50cy9jaXR5V2F0ZXIudnVlPzUyYTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2hvbWVQYWdlL2NvbXBvbmVudHMvY2l0eUFpci52dWU/ZGVhOSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvaG9tZVBhZ2UvY29tcG9uZW50cy9jaXR5V2F0ZXIudnVlP2ZhNzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2hvbWVQYWdlL2NvbXBvbmVudHMvY2l0eVdhdGVyLnZ1ZT84N2RiIiwid2VicGFjazovLy8uL3NyYy9hcGkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS93YXRlcl9lbnZpci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL+WbvS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy/luIIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMv55yBLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvaG9tZVBhZ2UvY29tcG9uZW50cy9jaXR5QWlyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvaG9tZVBhZ2UvY29tcG9uZW50cy9jaXR5QWlyLnZ1ZT8xMDk5Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9ob21lUGFnZS9jb21wb25lbnRzL2NpdHlBaXIudnVlPzk1Y2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2hvbWVQYWdlL2NvbXBvbmVudHMvY2l0eUFpci52dWU/ZjIyZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvaG9tZVBhZ2UvY29tcG9uZW50cy9jaXR5V2F0ZXIudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9ob21lUGFnZS9jb21wb25lbnRzL2NpdHlXYXRlci52dWU/ZGZkZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvaG9tZVBhZ2UvY29tcG9uZW50cy9jaXR5V2F0ZXIudnVlP2U0MjciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2hvbWVQYWdlL2NvbXBvbmVudHMvY2l0eVdhdGVyLnZ1ZT8xYmU3Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9ob21lUGFnZS9jb21wb25lbnRzL2NpdHlXYXRlci52dWU/ZDNhMCJdLCJuYW1lcyI6WyJxdWVyeVN1cGVydmlzaW9uIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInBhcmFtcyIsInF1ZXJ5SGJtVHJlbmQiLCJxdWVyeUhibUFuYWx5c2lzIiwicXVlcnlIYm1Db2RlQW5hbHlzaXMiLCJxdWVyeUFwcHJvdmFsTGlzdCIsInN1Ym1pdERlcHRBcHByb3ZhbCIsImRhdGEiLCJxdWVyeUNsdWVUeXBlcyIsInF1ZXJ5V1JZTGlzdCIsInF1ZXJ5QXJlYXMiLCJnZXRUYXNrSW5mbyIsImdldEV2YWx1YXRlSW5mbyIsImdldFJpc2tUeXBlIiwicXVlcnlSdWxlTGlzdCIsInF1ZXJ5SGJtRGVwYXJ0bWVudCIsImNoZWNrUnVsZXMiLCJlZGl0UnVsZXMiLCJxdWVyeVdSWU1hcCIsInF1ZXJ5U3RhdGlzdGljcyIsImNvbXBsYWludFByb3BvcnRpb24iLCJiYXNlVXJsIiwicmFua2luZyIsInllYXJSYW5rTGlzdCIsInJhbmtMaXN0IiwicmFua0RldGFpbCIsInNjYWxlTWFya3MiLCJ3YXRlckJhc2ljRGF0YSIsInNlY3Rpb25JbmZvIiwic2VjdGlvbkxpc3QiLCJzdGF0aW9uSW5mbyIsInVwU3RyZWFtT3ZlciIsImxha2VTaXRlTGlzdCIsInF1ZXJ5U2VjdGlvbkluZm8iLCJzdGF0aW9uRGVzIiwicml2ZXJDb3Vyc2VEZXRhaWwiLCJob3VyTGluZSIsIndhdGVyUG9sbHV0aW9uIiwidXBzdHJlYW1Qb2xsdXRpb24iLCJnZXRVcExpc3QiLCJ1cFN0cmVhbVdhdGVyIiwidXBzdHJlYW1TZXdhZ2UiLCJwdXJpZmljYXRpb25QbGFudCIsImRhdGFUYWJsZSIsImpoY0luZm8iLCJseUJhc2luIiwibHlEZXRhaWwiLCJkY1N6IiwiZGNTekxpc3QiLCJ5eXNJbmZvIiwic2tMaXN0Iiwid2F0ZXJCb2R5TGlzdCIsIndhdGVyUGxhbnRMaXN0IiwicmVzZXJ2b2lyTGlzdCIsIndhdGVyUGxhbnRSaXZlciIsIndhdGVyUGxhbnRTaXRlIiwicmVzb3VyY2VTdGF0Iiwid2F0ZXJGdW5jdGlvbkxpc3QiLCJ3YXRlckZ1bmN0aW9uRGV0YWlsIiwiaW52b2x2ZVdhdGVyIiwic2V3YWdlRGV0YWlsIiwic2V3YWdlUGNEZXRhaWwiLCJzZXdhZ2VTeURldGFpbCIsInNld2FnZUpjRGV0YWlsIiwic2V3YWdlWnpEZXRhaWwiLCJwb2xsdXRpb25MaXN0Iiwic2V3YWdlU3RhdCIsInJpdmVyQ291cnNlU3RhdCIsInJpdmVyQ291cnNlTGlzdCIsIndhdGVyTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQSxpQkFEQTtBQUVBO0FBQ0EsZ0hBREE7QUFFQTtBQUZBLEdBRkE7QUFNQTtBQUNBLDRCQURBO0FBRUE7QUFGQSxHQU5BO0FBVUEsTUFWQSxrQkFVQTtBQUNBO0FBQ0EsY0FEQTtBQUVBO0FBQ0E7QUFEQSxPQUZBO0FBS0E7QUFMQTtBQU9BLEdBbEJBO0FBbUJBLFNBbkJBLHFCQW1CQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSxLQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQTdCQTtBQThCQTtBQUNBLGFBREEsdUJBQ0E7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUNBLGVBREE7O0FBQUE7QUFDQSxxQkFEQTtBQUVBO0FBQ0E7O0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQSxLQUxBO0FBTUEsV0FOQSxxQkFNQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQURBLFdBRUEsSUFGQSxDQUVBO0FBQ0E7QUFDQSxTQUpBO0FBS0EsT0FOQTtBQU9BLEtBZEE7QUFlQSxVQWZBLGtCQWVBLElBZkEsRUFlQTtBQUNBO0FBQ0EsMkJBREE7QUFFQTtBQUNBLHdCQURBO0FBRUEsdUJBRkE7QUFHQTtBQUhBO0FBRkE7QUFRQSxLQXhCQTtBQXlCQSxjQXpCQSxzQkF5QkEsS0F6QkEsRUF5QkE7QUFDQTtBQUNBO0FBM0JBO0FBOUJBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDK0JBO0FBQ0E7QUFDQTtBQUNBLG1CQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0EsaUZBREE7QUFFQSxpQkFGQTtBQUdBLG1CQUhBO0FBSUEsbUJBSkE7QUFLQSx3RkFMQTtBQU1BLHlGQU5BO0FBT0E7QUFQQTtBQVNBLEdBWkE7QUFhQSxTQWJBLHFCQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FqQkE7QUFrQkE7QUFDQSxZQURBLHNCQUNBO0FBQUE7O0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQSxPQUZBO0FBR0EsS0FMQTtBQU1BLFdBTkEscUJBTUE7QUFDQTtBQUNBLHNCQURBO0FBRUEsd0JBRkE7QUFHQSxnQkFIQTtBQUlBLDJDQUpBO0FBS0E7QUFMQTtBQU9BO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBR0EsS0FsQkE7QUFtQkEsWUFuQkEsb0JBbUJBLElBbkJBLEVBbUJBO0FBQ0E7QUFDQSwrQkFEQTtBQUVBO0FBQ0Esb0JBREE7QUFFQTtBQUZBO0FBRkE7QUFPQSxLQTNCQTtBQTRCQSxjQTVCQSxzQkE0QkEsSUE1QkEsRUE0QkE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBRkEsTUFFQTtBQUNBO0FBQ0EsV0FGQSxNQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQTFDQSxHQWxCQTtBQThEQTtBQUNBLFFBREEsZ0JBQ0EsR0FEQSxFQUNBLEdBREEsRUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUE5REEsRzs7Ozs7Ozs7Ozs7O0FDeERBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssOEJBQThCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBLHFCQUFxQixvQkFBb0I7QUFDekMsdUJBQXVCLDJDQUEyQztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxvQ0FBb0MsMEJBQTBCLEVBQUU7QUFDN0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsU0FBUyxlQUFlLEVBQUU7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ3JDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLDRDQUE0QywyQkFBMkIsRUFBRTtBQUM5RTtBQUNBLGlCQUFpQix5QkFBeUIscUJBQXFCLEVBQUU7QUFDakUsbUJBQW1CLDZDQUE2QztBQUNoRTtBQUNBO0FBQ0Esb0JBQW9CLHNCQUFzQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmLGFBQWE7QUFDYixXQUFXO0FBQ1g7QUFDQSx1QkFBdUIsNEJBQTRCO0FBQ25EO0FBQ0EsMkJBQTJCLCtDQUErQztBQUMxRSxlQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsZUFBZSxrQ0FBa0MscUJBQXFCLEVBQUU7QUFDeEU7QUFDQSwyQkFBMkIsOEJBQThCO0FBQ3pEO0FBQ0E7QUFDQSxxQkFBcUIsZUFBZSxpQ0FBaUMsRUFBRTtBQUN2RTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsNEJBQTRCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsOEJBQThCO0FBQ3pEO0FBQ0E7QUFDQSxxQkFBcUIsZUFBZSxpQ0FBaUMsRUFBRTtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNDQUFzQywrQkFBK0I7QUFDckUsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsOEJBQThCO0FBQ3pEO0FBQ0E7QUFDQSxxQkFBcUIsZUFBZSxpQ0FBaUMsRUFBRTtBQUN2RTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsNEJBQTRCO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsa0NBQWtDLDJCQUEyQixFQUFFO0FBQzlFO0FBQ0EsMkJBQTJCLGtDQUFrQztBQUM3RDtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQ2hJYTtBQUNiLGVBQWUsbUJBQU8sQ0FBQyx5RkFBOEI7QUFDckQsMEJBQTBCLG1CQUFPLENBQUMsdUdBQXFDOztBQUV2RTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7OztBQ1hZO0FBQ2IsaUJBQWlCLG1CQUFPLENBQUMsaUZBQTBCO0FBQ25ELG1CQUFtQixtQkFBTyxDQUFDLHFGQUE0QjtBQUN2RCw0QkFBNEIsbUJBQU8sQ0FBQywyR0FBdUM7QUFDM0UsY0FBYyxtQkFBTyxDQUFDLHVGQUE2QjtBQUNuRCxrQ0FBa0MsbUJBQU8sQ0FBQyx1SEFBNkM7O0FBRXZGO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUN0QkE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyw4R0FBeUQ7QUFDbkc7QUFDQTtBQUNBLGNBQWMsUUFBUyx5QkFBeUIsa0JBQWtCLG1DQUFtQyx3QkFBd0IsR0FBRyw0QkFBNEIsMEJBQTBCLHNCQUFzQix3QkFBd0Isd0JBQXdCLGdCQUFnQixvQkFBb0IsR0FBRywwQkFBMEIsaUNBQWlDLG9CQUFvQixHQUFHLGtDQUFrQyx3QkFBd0IsR0FBRyxrQ0FBa0Msa0JBQWtCLHdCQUF3QixxQkFBcUIsc0JBQXNCLCtDQUErQyx3QkFBd0IsR0FBRyw4Q0FBOEMsZUFBZSx1QkFBdUIsbUJBQW1CLG9CQUFvQixHQUFHLCtDQUErQyxrQkFBa0Isd0JBQXdCLDJCQUEyQixlQUFlLG1CQUFtQixvQkFBb0Isc0JBQXNCLEdBQUcscURBQXFELHNCQUFzQixxQkFBcUIsR0FBRyxrQ0FBa0Msa0JBQWtCLHdCQUF3QixtQ0FBbUMsZUFBZSxpQkFBaUIsdUJBQXVCLHlDQUF5Qyw4Q0FBOEMsdUJBQXVCLG9CQUFvQixpQ0FBaUMsR0FBRyx1Q0FBdUMsbUJBQW1CLHNCQUFzQixHQUFHLDhDQUE4QyxtQkFBbUIsc0JBQXNCLEdBQUc7QUFDaGhEO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsOEdBQXlEO0FBQ25HO0FBQ0E7QUFDQSxjQUFjLFFBQVMsNEJBQTRCLHFCQUFxQix5QkFBeUIsR0FBRyxpREFBaUQsa0JBQWtCLHdCQUF3QixvQkFBb0IsR0FBRyx1REFBdUQsaUJBQWlCLG9CQUFvQixzQkFBc0IsR0FBRyx1REFBdUQsdUJBQXVCLGlDQUFpQyxvQkFBb0IsR0FBRyw2QkFBNkIsb0JBQW9CLDhCQUE4QixHQUFHLDJCQUEyQixrQ0FBa0MsaUJBQWlCLHFCQUFxQixHQUFHLDRCQUE0Qix1QkFBdUIsOEJBQThCLHVCQUF1QixHQUFHO0FBQ3B2QjtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDhHQUF5RDtBQUNuRztBQUNBO0FBQ0EsY0FBYyxRQUFTLG1DQUFtQyx1QkFBdUIscUJBQXFCLHFCQUFxQix3QkFBd0IsaUZBQWlGLEdBQUcsMENBQTBDLGtCQUFrQixlQUFlLGlCQUFpQix5Q0FBeUMsdUJBQXVCLGNBQWMsY0FBYyxHQUFHLHlDQUF5QyxrQkFBa0IsZUFBZSxnQkFBZ0IsdUJBQXVCLHlDQUF5Qyx1QkFBdUIsZ0JBQWdCLGNBQWMsR0FBRyw4Q0FBOEMsc0JBQXNCLGtCQUFrQix3QkFBd0Isb0JBQW9CLEdBQUcsa0RBQWtELGlDQUFpQyxHQUFHLHVEQUF1RCxvQkFBb0IsbUJBQW1CLEdBQUcsZ0RBQWdELGtCQUFrQix3QkFBd0IsbUNBQW1DLGVBQWUsaUJBQWlCLHlDQUF5Qyw4Q0FBOEMsdUJBQXVCLG9CQUFvQixpQ0FBaUMsR0FBRyxxREFBcUQsbUJBQW1CLHNCQUFzQixHQUFHLDREQUE0RCxtQkFBbUIsb0JBQW9CLHNCQUFzQiwrQkFBK0IsR0FBRyxvREFBb0Qsa0JBQWtCLHdCQUF3QixlQUFlLG1CQUFtQixpQkFBaUIsd0JBQXdCLDhDQUE4QyxtQkFBbUIsR0FBRyw4REFBOEQsZ0JBQWdCLHdCQUF3QixzQkFBc0Isa0VBQWtFLHNEQUFzRCxHQUFHO0FBQ245RDtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQywwekJBQTJkO0FBQ2pmO0FBQ0EsNENBQTRDLFFBQVM7QUFDckQ7QUFDQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyxnSUFBbUU7QUFDckYsOENBQThDLHFDQUFxQztBQUNuRjtBQUNBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7O0FDWGY7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsOHdCQUFxYztBQUMzZDtBQUNBLDRDQUE0QyxRQUFTO0FBQ3JEO0FBQ0E7QUFDQSxVQUFVLG1CQUFPLENBQUMsZ0lBQW1FO0FBQ3JGLDhDQUE4QyxxQ0FBcUM7QUFDbkY7QUFDQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7OztBQ1hmOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLDh6QkFBNmQ7QUFDbmY7QUFDQSw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLGdJQUFtRTtBQUNyRiw4Q0FBOEMscUNBQXFDO0FBQ25GO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDWGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBQ0E7QUFDQTs7QUFDTyxJQUFNQSxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQW1CLEdBQUs7QUFDakMsU0FBT0Msd0RBQU8sQ0FBQztBQUNYQyxPQUFHLEVBQUUsMEJBRE07QUFFWEMsVUFBTSxFQUFFLEtBRkc7QUFHWEMsVUFBTSxFQUFFO0FBSEcsR0FBRCxDQUFkO0FBS0gsQ0FOTSxDLENBT1A7O0FBQ08sSUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDRCxNQUFELEVBQVc7QUFDcEMsU0FBT0gsd0RBQU8sQ0FBQztBQUNYQyxPQUFHLEVBQUUsOEJBRE07QUFFWEMsVUFBTSxFQUFFLEtBRkc7QUFHWEMsVUFBTSxFQUFFQTtBQUhHLEdBQUQsQ0FBZDtBQUtILENBTk0sQyxDQU9QOztBQUNPLElBQU1FLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBbUIsQ0FBQ0YsTUFBRCxFQUFXO0FBQ3ZDLFNBQU9ILHdEQUFPLENBQUM7QUFDWEMsT0FBRyxFQUFFLDZCQURNO0FBRVhDLFVBQU0sRUFBRSxLQUZHO0FBR1hDLFVBQU0sRUFBRUE7QUFIRyxHQUFELENBQWQ7QUFLSCxDQU5NLEMsQ0FPUDs7QUFDTyxJQUFNRyxvQkFBb0IsR0FBRyxTQUF2QkEsb0JBQXVCLENBQUNILE1BQUQsRUFBVztBQUMzQyxTQUFPSCx3REFBTyxDQUFDO0FBQ1hDLE9BQUcsRUFBRSwrQkFETTtBQUVYQyxVQUFNLEVBQUUsS0FGRztBQUdYQyxVQUFNLEVBQUVBO0FBSEcsR0FBRCxDQUFkO0FBS0gsQ0FOTSxDLENBT1A7O0FBQ08sSUFBTUksaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDSixNQUFELEVBQVc7QUFDeEMsU0FBT0gsd0RBQU8sQ0FBQztBQUNYQyxPQUFHLEVBQUUscUNBRE07QUFFWEMsVUFBTSxFQUFFLEtBRkc7QUFHWEMsVUFBTSxFQUFFQTtBQUhHLEdBQUQsQ0FBZDtBQUtILENBTk0sQyxDQU9QOztBQUNPLElBQU1LLGtCQUFrQixHQUFHLFNBQXJCQSxrQkFBcUIsQ0FBQ0wsTUFBRCxFQUFXO0FBQ3pDLFNBQU9ILHdEQUFPLENBQUM7QUFDWEMsT0FBRyxFQUFFLHFDQURNO0FBRVhDLFVBQU0sRUFBRSxNQUZHO0FBR1hPLFFBQUksRUFBRU47QUFISyxHQUFELENBQWQ7QUFLSCxDQU5NLEMsQ0FPUDs7QUFDTyxJQUFNTyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQUs7QUFDL0IsU0FBT1Ysd0RBQU8sQ0FBQztBQUNYQyxPQUFHLEVBQUUsMkJBRE07QUFFWEMsVUFBTSxFQUFFLEtBRkc7QUFHWEMsVUFBTSxFQUFFO0FBSEcsR0FBRCxDQUFkO0FBS0gsQ0FOTSxDLENBT1A7O0FBQ08sSUFBTVEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ1IsTUFBRCxFQUFXO0FBQ25DLFNBQU9ILHdEQUFPLENBQUM7QUFDWEMsT0FBRyxFQUFFLDZCQURNO0FBRVhDLFVBQU0sRUFBRSxLQUZHO0FBR1hDLFVBQU0sRUFBRUE7QUFIRyxHQUFELENBQWQ7QUFLSCxDQU5NLEMsQ0FPUDs7QUFDTyxJQUFNUyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFLO0FBQzNCLFNBQU9aLHdEQUFPLENBQUM7QUFDWEMsT0FBRyxFQUFFLDRCQURNO0FBRVhDLFVBQU0sRUFBRSxLQUZHO0FBR1hDLFVBQU0sRUFBRTtBQUhHLEdBQUQsQ0FBZDtBQUtILENBTk0sQyxDQU9QOztBQUNPLElBQU1VLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQUs7QUFDNUIsU0FBT2Isd0RBQU8sQ0FBQztBQUNYQyxPQUFHLEVBQUUsNEJBRE07QUFFWEMsVUFBTSxFQUFFLEtBRkc7QUFHWEMsVUFBTSxFQUFFO0FBSEcsR0FBRCxDQUFkO0FBS0gsQ0FOTSxDLENBT1A7O0FBQ08sSUFBTVcsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixDQUFDTCxJQUFELEVBQVM7QUFDcEMsU0FBT1Qsd0RBQU8sQ0FBQztBQUNYQyxPQUFHLEVBQUUsNkJBRE07QUFFWEMsVUFBTSxFQUFFLEtBRkc7QUFHWEMsVUFBTSxFQUFFTTtBQUhHLEdBQUQsQ0FBZDtBQUtILENBTk0sQyxDQU9QOztBQUNPLElBQU1NLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQUs7QUFDNUIsU0FBT2Ysd0RBQU8sQ0FBQztBQUNYQyxPQUFHLEVBQUUsMkJBRE07QUFFWEMsVUFBTSxFQUFFLEtBRkc7QUFHWEMsVUFBTSxFQUFFO0FBSEcsR0FBRCxDQUFkO0FBS0gsQ0FOTSxDLENBT1A7QUFDQTs7QUFDTyxJQUFNYSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNiLE1BQUQsRUFBVztBQUNwQyxTQUFPSCx3REFBTyxDQUFDO0FBQ1hDLE9BQUcsRUFBRSw0QkFETTtBQUVYQyxVQUFNLEVBQUUsS0FGRztBQUdYQyxVQUFNLEVBQUVBO0FBSEcsR0FBRCxDQUFkO0FBS0gsQ0FOTSxDLENBT1A7O0FBQ08sSUFBTWMsa0JBQWtCLEdBQUcsU0FBckJBLGtCQUFxQixHQUFLO0FBQ25DLFNBQU9qQix3REFBTyxDQUFDO0FBQ1hDLE9BQUcsRUFBRSwyQkFETTtBQUVYQyxVQUFNLEVBQUUsS0FGRztBQUdYQyxVQUFNLEVBQUU7QUFIRyxHQUFELENBQWQ7QUFLSCxDQU5NLEMsQ0FPUDs7QUFDTyxJQUFNZSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxDQUFDZixNQUFELEVBQVc7QUFDakMsU0FBT0gsd0RBQU8sQ0FBQztBQUNYQyxPQUFHLEVBQUUsd0JBRE07QUFFWEMsVUFBTSxFQUFFLEtBRkc7QUFHWEMsVUFBTSxFQUFFQTtBQUhHLEdBQUQsQ0FBZDtBQUtILENBTk0sQyxDQU9QOztBQUNPLElBQU1nQixTQUFTLEdBQUcsU0FBWkEsU0FBWSxDQUFDaEIsTUFBRCxFQUFXO0FBQ2hDLFNBQU9ILHdEQUFPLENBQUM7QUFDWEMsT0FBRyxFQUFFLHlCQURNO0FBRVhDLFVBQU0sRUFBRSxNQUZHO0FBR1hPLFFBQUksRUFBRU47QUFISyxHQUFELENBQWQ7QUFLSCxDQU5NLEMsQ0FPUDtBQUNBOztBQUNPLElBQU1pQixXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDakIsTUFBRCxFQUFXO0FBQ2xDLFNBQU9ILHdEQUFPLENBQUM7QUFDWEMsT0FBRyxFQUFFLDRCQURNO0FBRVhDLFVBQU0sRUFBRSxLQUZHO0FBR1hDLFVBQU0sRUFBRUE7QUFIRyxHQUFELENBQWQ7QUFLSCxDQU5NLEMsQ0FPUDs7QUFDTyxJQUFNa0IsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFLO0FBQ2hDLFNBQU9yQix3REFBTyxDQUFDO0FBQ1hDLE9BQUcsRUFBRSw4QkFETTtBQUVYQyxVQUFNLEVBQUUsS0FGRztBQUdYQyxVQUFNLEVBQUU7QUFIRyxHQUFELENBQWQ7QUFLSCxDQU5NLEMsQ0FPUDtBQUNBOztBQUNPLElBQU1tQixtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNiLElBQUQsRUFBUztBQUN4QyxTQUFPVCx3REFBTyxDQUFDO0FBQ1hDLE9BQUcsRUFBQyx5Q0FETztBQUVYQyxVQUFNLEVBQUUsS0FGRztBQUdYQyxVQUFNLEVBQUVNO0FBSEcsR0FBRCxDQUFkO0FBS0gsQ0FOTSxDOzs7Ozs7Ozs7Ozs7QUN0SlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0EsSUFBSWMsT0FBTyxHQUFHLFFBQWQsQyxDQUF3Qjs7QUFDeEI7QUFDQTtBQUNBOztBQUNPLFNBQVNDLE9BQVQsQ0FBaUJmLElBQWpCLEVBQXVCO0FBQzVCLFNBQU9ULHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFc0IsT0FBTyxHQUFHLDRCQURGO0FBRWJyQixVQUFNLEVBQUUsS0FGSztBQUdiQyxVQUFNLEVBQUVNO0FBSEssR0FBRCxDQUFkO0FBS0Q7QUFDRDtBQUNBO0FBQ0E7O0FBQ08sU0FBU2dCLFlBQVQsQ0FBc0JoQixJQUF0QixFQUE0QjtBQUNqQyxTQUFPVCx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRXNCLE9BQU8sR0FBRyxpQ0FERjtBQUVickIsVUFBTSxFQUFFLEtBRks7QUFHYkMsVUFBTSxFQUFFTTtBQUhLLEdBQUQsQ0FBZDtBQUtEO0FBQ0Q7QUFDQTtBQUNBOztBQUNPLFNBQVNpQixRQUFULENBQWtCakIsSUFBbEIsRUFBd0I7QUFDN0IsU0FBT1Qsd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUVzQixPQUFPLEdBQUcsNkJBREY7QUFFYnJCLFVBQU0sRUFBRSxLQUZLO0FBR2JDLFVBQU0sRUFBRU07QUFISyxHQUFELENBQWQ7QUFLRDtBQUNEO0FBQ0E7QUFDQTs7QUFDTyxTQUFTa0IsVUFBVCxDQUFvQmxCLElBQXBCLEVBQTBCO0FBQy9CLFNBQU9ULHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFc0IsT0FBTyxHQUFHLCtCQURGO0FBRWJyQixVQUFNLEVBQUUsS0FGSztBQUdiQyxVQUFNLEVBQUVNO0FBSEssR0FBRCxDQUFkO0FBS0Q7QUFDRDtBQUNBO0FBQ0E7O0FBQ08sU0FBU21CLFVBQVQsQ0FBb0JuQixJQUFwQixFQUEwQjtBQUMvQixTQUFPVCx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRXNCLE9BQU8sR0FBRywrQkFERjtBQUVickIsVUFBTSxFQUFFLEtBRks7QUFHYkMsVUFBTSxFQUFFTTtBQUhLLEdBQUQsQ0FBZDtBQUtEO0FBQ0Q7QUFDQTtBQUNBOztBQUNPLFNBQVNvQixjQUFULENBQXdCcEIsSUFBeEIsRUFBOEI7QUFDbkMsU0FBT1Qsd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUVzQixPQUFPLEdBQUcsa0JBREY7QUFFYnJCLFVBQU0sRUFBRSxLQUZLO0FBR2JDLFVBQU0sRUFBRU07QUFISyxHQUFELENBQWQ7QUFLRDtBQUNEO0FBQ0E7QUFDQTs7QUFDTyxTQUFTcUIsV0FBVCxDQUFxQnJCLElBQXJCLEVBQTJCO0FBQ2hDLFNBQU9ULHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFc0IsT0FBTyxHQUFHLDZCQURGO0FBRWJyQixVQUFNLEVBQUUsTUFGSztBQUdiTyxRQUFJLEVBQUVBO0FBSE8sR0FBRCxDQUFkO0FBS0Q7QUFDRDtBQUNBO0FBQ0E7O0FBQ08sU0FBU3NCLFdBQVQsQ0FBcUJ0QixJQUFyQixFQUEyQjtBQUNoQyxTQUFPVCx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRXNCLE9BQU8sR0FBRyw4QkFERjtBQUVickIsVUFBTSxFQUFFLE1BRks7QUFHYk8sUUFBSSxFQUFFQTtBQUhPLEdBQUQsQ0FBZDtBQUtELEMsQ0FFRDs7QUFDTyxTQUFTdUIsV0FBVCxDQUFxQnZCLElBQXJCLEVBQTJCO0FBQ2hDLFNBQU9ULHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFc0IsT0FBTyxHQUFHLGdCQURGO0FBRWJyQixVQUFNLEVBQUUsTUFGSztBQUdiTyxRQUFJLEVBQUVBO0FBSE8sR0FBRCxDQUFkO0FBS0QsQyxDQUVEOztBQUNPLFNBQVN3QixZQUFULENBQXNCeEIsSUFBdEIsRUFBNEI7QUFDakMsU0FBT1Qsd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUVzQixPQUFPLEdBQUcsNkJBREY7QUFFYnJCLFVBQU0sRUFBRSxNQUZLO0FBR2JPLFFBQUksRUFBRUE7QUFITyxHQUFELENBQWQ7QUFLRCxDLENBRUQ7O0FBQ08sU0FBU3lCLFlBQVQsQ0FBc0J6QixJQUF0QixFQUE0QjtBQUNqQyxTQUFPVCx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRXNCLE9BQU8sR0FBRyw2QkFERjtBQUVickIsVUFBTSxFQUFFLEtBRks7QUFHYkMsVUFBTSxFQUFFTTtBQUhLLEdBQUQsQ0FBZDtBQUtELEMsQ0FFRDs7QUFDTyxTQUFTMEIsZ0JBQVQsQ0FBMEIxQixJQUExQixFQUFnQztBQUNyQyxTQUFPVCx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRXNCLE9BQU8sR0FBRyxpQ0FERjtBQUVickIsVUFBTSxFQUFFLEtBRks7QUFHYkMsVUFBTSxFQUFFTTtBQUhLLEdBQUQsQ0FBZDtBQUtELEMsQ0FFRDs7QUFDTyxTQUFTMkIsVUFBVCxDQUFvQjNCLElBQXBCLEVBQTBCO0FBQy9CLFNBQU9ULHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFc0IsT0FBTyxHQUFHLDJCQURGO0FBRWJyQixVQUFNLEVBQUUsS0FGSztBQUdiQyxVQUFNLEVBQUVNO0FBSEssR0FBRCxDQUFkO0FBS0QsQyxDQUVEOztBQUNPLFNBQVM0QixpQkFBVCxDQUEyQjVCLElBQTNCLEVBQWlDO0FBQ3RDLFNBQU9ULHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFc0IsT0FBTyxHQUFHLG9DQURGO0FBRWJyQixVQUFNLEVBQUUsS0FGSztBQUdiQyxVQUFNLEVBQUVNO0FBSEssR0FBRCxDQUFkO0FBS0QsQyxDQUVEOztBQUNPLFNBQVM2QixRQUFULENBQWtCN0IsSUFBbEIsRUFBd0I7QUFDN0IsU0FBT1Qsd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUVzQixPQUFPLEdBQUcsc0JBREY7QUFFYnJCLFVBQU0sRUFBRSxNQUZLO0FBR2JPLFFBQUksRUFBRUE7QUFITyxHQUFELENBQWQ7QUFLRCxDLENBRUQ7O0FBQ08sU0FBUzhCLGNBQVQsQ0FBd0I5QixJQUF4QixFQUE4QjtBQUNuQyxTQUFPVCx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRXNCLE9BQU8sR0FBRywwQkFERjtBQUVickIsVUFBTSxFQUFFLEtBRks7QUFHYkMsVUFBTSxFQUFFTTtBQUhLLEdBQUQsQ0FBZDtBQUtEO0FBRU0sU0FBUytCLGlCQUFULENBQTJCL0IsSUFBM0IsRUFBaUM7QUFDdEMsU0FBT1Qsd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUVzQixPQUFPLEdBQUcsa0NBREY7QUFFYnJCLFVBQU0sRUFBRSxLQUZLO0FBR2JDLFVBQU0sRUFBRU07QUFISyxHQUFELENBQWQ7QUFLRCxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDTyxTQUFTZ0MsU0FBVCxDQUFtQmhDLElBQW5CLEVBQXlCO0FBQzlCLFNBQU9ULHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFc0IsT0FBTyxHQUFHLGdDQURGO0FBRWJyQixVQUFNLEVBQUUsS0FGSztBQUdiQyxVQUFNLEVBQUVNO0FBSEssR0FBRCxDQUFkO0FBS0QsQyxDQUVEOztBQUNPLFNBQVNpQyxhQUFULENBQXVCakMsSUFBdkIsRUFBNkI7QUFDbEMsU0FBT1Qsd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUVzQixPQUFPLEdBQUcsOEJBREY7QUFFYnJCLFVBQU0sRUFBRSxLQUZLO0FBR2JDLFVBQU0sRUFBRU07QUFISyxHQUFELENBQWQ7QUFLRCxDLENBRUQ7O0FBQ08sU0FBU2tDLGNBQVQsQ0FBd0JsQyxJQUF4QixFQUE4QjtBQUNuQyxTQUFPVCx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRXNCLE9BQU8sR0FBRywrQkFERjtBQUVickIsVUFBTSxFQUFFLEtBRks7QUFHYkMsVUFBTSxFQUFFTTtBQUhLLEdBQUQsQ0FBZDtBQUtELEMsQ0FFRDs7QUFDTyxTQUFTbUMsaUJBQVQsQ0FBMkJuQyxJQUEzQixFQUFpQztBQUN0QyxTQUFPVCx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRXNCLE9BQU8sR0FBRyxrQ0FERjtBQUVickIsVUFBTSxFQUFFLE1BRks7QUFHYk8sUUFBSSxFQUFFQTtBQUhPLEdBQUQsQ0FBZDtBQUtELEMsQ0FFRDs7QUFDTyxTQUFTb0MsU0FBVCxDQUFtQnBDLElBQW5CLEVBQXlCO0FBQzlCLFNBQU9ULHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFc0IsT0FBTyxHQUFHLDBCQURGO0FBRWJyQixVQUFNLEVBQUUsTUFGSztBQUdiTyxRQUFJLEVBQUVBO0FBSE8sR0FBRCxDQUFkO0FBS0QsQyxDQUVEOztBQUNPLFNBQVNxQyxPQUFULENBQWlCckMsSUFBakIsRUFBdUI7QUFDNUIsU0FBT1Qsd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUVzQixPQUFPLEdBQUcsY0FERjtBQUVickIsVUFBTSxFQUFFLE1BRks7QUFHYk8sUUFBSSxFQUFFQTtBQUhPLEdBQUQsQ0FBZDtBQUtELEMsQ0FFRDs7QUFDTyxTQUFTc0MsT0FBVCxDQUFpQnRDLElBQWpCLEVBQXVCO0FBQzVCLFNBQU9ULHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFc0IsT0FBTyxHQUFHLGNBREY7QUFFYnJCLFVBQU0sRUFBRSxLQUZLO0FBR2JDLFVBQU0sRUFBRU07QUFISyxHQUFELENBQWQ7QUFLRCxDLENBRUQ7O0FBQ08sU0FBU3VDLFFBQVQsQ0FBa0J2QyxJQUFsQixFQUF3QjtBQUM3QixTQUFPVCx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRXNCLE9BQU8sR0FBRyxzQkFERjtBQUVickIsVUFBTSxFQUFFLEtBRks7QUFHYkMsVUFBTSxFQUFFTTtBQUhLLEdBQUQsQ0FBZDtBQUtELEMsQ0FFRDs7QUFDTyxTQUFTd0MsSUFBVCxHQUFnQjtBQUNyQixTQUFPakQsd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUVzQixPQUFPLEdBQUcseUJBREY7QUFFYnJCLFVBQU0sRUFBRTtBQUZLLEdBQUQsQ0FBZDtBQUlELEMsQ0FFRDs7QUFDTyxTQUFTZ0QsUUFBVCxHQUFvQjtBQUN6QixTQUFPbEQsd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUVzQixPQUFPLEdBQUcsb0JBREY7QUFFYnJCLFVBQU0sRUFBRTtBQUZLLEdBQUQsQ0FBZDtBQUlELEMsQ0FFRDs7QUFDTyxTQUFTaUQsT0FBVCxDQUFpQjFDLElBQWpCLEVBQXVCO0FBQzVCLFNBQU9ULHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFc0IsT0FBTyxHQUFHLDhCQURGO0FBRWJyQixVQUFNLEVBQUUsS0FGSztBQUdiQyxVQUFNLEVBQUVNO0FBSEssR0FBRCxDQUFkO0FBS0QsQyxDQUNEOztBQUNPLFNBQVMyQyxNQUFULENBQWdCM0MsSUFBaEIsRUFBc0I7QUFDM0IsU0FBT1Qsd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUVzQixPQUFPLEdBQUcsNkJBREY7QUFFYnJCLFVBQU0sRUFBRSxLQUZLO0FBR2JDLFVBQU0sRUFBRU07QUFISyxHQUFELENBQWQ7QUFLRCxDLENBRUQ7O0FBQ08sU0FBUzRDLGFBQVQsQ0FBdUI1QyxJQUF2QixFQUE2QjtBQUNsQyxTQUFPVCx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRXNCLE9BQU8sR0FBRyx3Q0FERjtBQUVickIsVUFBTSxFQUFFLEtBRks7QUFHYkMsVUFBTSxFQUFFTTtBQUhLLEdBQUQsQ0FBZDtBQUtELEMsQ0FFRDs7QUFDTyxTQUFTNkMsY0FBVCxDQUF3QjdDLElBQXhCLEVBQThCO0FBQ25DLFNBQU9ULHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFc0IsT0FBTyxHQUFHLGNBREY7QUFFYnJCLFVBQU0sRUFBRSxLQUZLO0FBR2JDLFVBQU0sRUFBRU07QUFISyxHQUFELENBQWQ7QUFLRCxDLENBRUQ7O0FBQ08sU0FBUzhDLGFBQVQsQ0FBdUI5QyxJQUF2QixFQUE2QjtBQUNsQyxTQUFPVCx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRXNCLE9BQU8sR0FBRyxtQkFERjtBQUVickIsVUFBTSxFQUFFLEtBRks7QUFHYkMsVUFBTSxFQUFFTTtBQUhLLEdBQUQsQ0FBZDtBQUtELEMsQ0FFRDs7QUFDTyxTQUFTK0MsZUFBVCxDQUF5Qi9DLElBQXpCLEVBQStCO0FBQ3BDLFNBQU9ULHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFc0IsT0FBTyxHQUFHLHFCQURGO0FBRWJyQixVQUFNLEVBQUUsS0FGSztBQUdiQyxVQUFNLEVBQUVNO0FBSEssR0FBRCxDQUFkO0FBS0QsQyxDQUVEOztBQUNPLFNBQVNnRCxjQUFULENBQXdCaEQsSUFBeEIsRUFBOEI7QUFDbkMsU0FBT1Qsd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUVzQixPQUFPLEdBQUcsb0JBREY7QUFFYnJCLFVBQU0sRUFBRSxLQUZLO0FBR2JDLFVBQU0sRUFBRU07QUFISyxHQUFELENBQWQ7QUFLRDtBQUVEO0FBQ0E7QUFDQTs7QUFDTyxTQUFTaUQsWUFBVCxDQUFzQmpELElBQXRCLEVBQTRCO0FBQ2pDLFNBQU9ULHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFc0IsT0FBTyxHQUFHLHNCQURGO0FBRWJyQixVQUFNLEVBQUUsS0FGSztBQUdiQyxVQUFNLEVBQUVNO0FBSEssR0FBRCxDQUFkO0FBS0QsQyxDQUVEOztBQUNPLFNBQVNrRCxpQkFBVCxDQUEyQmxELElBQTNCLEVBQWlDO0FBQ3RDLFNBQU9ULHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFc0IsT0FBTyxHQUFHLHVCQURGO0FBRWJyQixVQUFNLEVBQUUsS0FGSztBQUdiQyxVQUFNLEVBQUVNO0FBSEssR0FBRCxDQUFkO0FBS0QsQyxDQUVEOztBQUNPLFNBQVNtRCxtQkFBVCxDQUE2Qm5ELElBQTdCLEVBQW1DO0FBQ3hDLFNBQU9ULHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFc0IsT0FBTyxHQUFHLHlCQURGO0FBRWJyQixVQUFNLEVBQUUsS0FGSztBQUdiQyxVQUFNLEVBQUVNO0FBSEssR0FBRCxDQUFkO0FBS0Q7QUFFRDtBQUNBO0FBQ0E7O0FBQ08sU0FBU29ELFlBQVQsQ0FBc0JwRCxJQUF0QixFQUE0QjtBQUNqQyxTQUFPVCx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRXNCLE9BQU8sR0FBRyxpQkFERjtBQUVickIsVUFBTSxFQUFFLEtBRks7QUFHYkMsVUFBTSxFQUFFTTtBQUhLLEdBQUQsQ0FBZDtBQUtEO0FBRUQ7QUFDQTtBQUNBOztBQUNPLFNBQVNxRCxZQUFULENBQXNCckQsSUFBdEIsRUFBNEI7QUFDakMsU0FBT1Qsd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUVzQixPQUFPLEdBQUcseUJBREY7QUFFYnJCLFVBQU0sRUFBRSxLQUZLO0FBR2JDLFVBQU0sRUFBRU07QUFISyxHQUFELENBQWQ7QUFLRDtBQUVEO0FBQ0E7QUFDQTs7QUFDTyxTQUFTc0QsY0FBVCxDQUF3QnRELElBQXhCLEVBQThCO0FBQ25DLFNBQU9ULHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFc0IsT0FBTyxHQUFHLDJCQURGO0FBRWJyQixVQUFNLEVBQUUsS0FGSztBQUdiQyxVQUFNLEVBQUVNO0FBSEssR0FBRCxDQUFkO0FBS0Q7QUFFRDtBQUNBO0FBQ0E7O0FBQ08sU0FBU3VELGNBQVQsQ0FBd0J2RCxJQUF4QixFQUE4QjtBQUNuQyxTQUFPVCx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRXNCLE9BQU8sR0FBRywyQkFERjtBQUVickIsVUFBTSxFQUFFLEtBRks7QUFHYkMsVUFBTSxFQUFFTTtBQUhLLEdBQUQsQ0FBZDtBQUtEO0FBRUQ7QUFDQTtBQUNBOztBQUNPLFNBQVN3RCxjQUFULENBQXdCeEQsSUFBeEIsRUFBOEI7QUFDbkMsU0FBT1Qsd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUVzQixPQUFPLEdBQUcsMkJBREY7QUFFYnJCLFVBQU0sRUFBRSxLQUZLO0FBR2JDLFVBQU0sRUFBRU07QUFISyxHQUFELENBQWQ7QUFLRDtBQUVEO0FBQ0E7QUFDQTs7QUFDTyxTQUFTeUQsY0FBVCxDQUF3QnpELElBQXhCLEVBQThCO0FBQ25DLFNBQU9ULHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFc0IsT0FBTyxHQUFHLDJCQURGO0FBRWJyQixVQUFNLEVBQUUsS0FGSztBQUdiQyxVQUFNLEVBQUVNO0FBSEssR0FBRCxDQUFkO0FBS0Q7QUFFRDtBQUNBO0FBQ0E7O0FBQ08sU0FBUzBELGFBQVQsQ0FBdUIxRCxJQUF2QixFQUE2QjtBQUNsQyxTQUFPVCx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRXNCLE9BQU8sR0FBRyxvQkFERjtBQUVickIsVUFBTSxFQUFFLEtBRks7QUFHYkMsVUFBTSxFQUFFTTtBQUhLLEdBQUQsQ0FBZDtBQUtEO0FBRUQ7QUFDQTtBQUNBOztBQUNPLFNBQVMyRCxVQUFULENBQW9CM0QsSUFBcEIsRUFBMEI7QUFDL0IsU0FBT1Qsd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUVzQixPQUFPLEdBQUcsdUJBREY7QUFFYnJCLFVBQU0sRUFBRSxLQUZLO0FBR2JDLFVBQU0sRUFBRU07QUFISyxHQUFELENBQWQ7QUFLRDtBQUVEO0FBQ0E7QUFDQTs7QUFDTyxTQUFTNEQsZUFBVCxDQUF5QjVELElBQXpCLEVBQStCO0FBQ3BDLFNBQU9ULHdEQUFPLENBQUM7QUFDYkMsT0FBRyxFQUFFc0IsT0FBTyxHQUFHLGtDQURGO0FBRWJyQixVQUFNLEVBQUUsS0FGSztBQUdiQyxVQUFNLEVBQUVNO0FBSEssR0FBRCxDQUFkO0FBS0Q7QUFFRDtBQUNBO0FBQ0E7O0FBQ08sU0FBUzZELGVBQVQsQ0FBeUI3RCxJQUF6QixFQUErQjtBQUNwQyxTQUFPVCx3REFBTyxDQUFDO0FBQ2JDLE9BQUcsRUFBRXNCLE9BQU8sR0FBRyxrQ0FERjtBQUVickIsVUFBTSxFQUFFLEtBRks7QUFHYkMsVUFBTSxFQUFFTTtBQUhLLEdBQUQsQ0FBZDtBQUtEO0FBRUQ7QUFDQTtBQUNBOztBQUNPLFNBQVM4RCxTQUFULENBQW1COUQsSUFBbkIsRUFBeUI7QUFDOUIsU0FBT1Qsd0RBQU8sQ0FBQztBQUNiQyxPQUFHLEVBQUVzQixPQUFPLEdBQUcsd0JBREY7QUFFYnJCLFVBQU0sRUFBRSxLQUZLO0FBR2JDLFVBQU0sRUFBRU07QUFISyxHQUFELENBQWQ7QUFLRCxDOzs7Ozs7Ozs7OztBQ3BkRCxpQ0FBaUMsZ3FEOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsZ25EOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsbzBEOzs7Ozs7Ozs7Ozs7QUNBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRztBQUN2QztBQUNMO0FBQ3NDOzs7QUFHNUY7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsNkVBQU07QUFDUixFQUFFLDhGQUFNO0FBQ1IsRUFBRSx1R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBNFMsQ0FBZ0Isd1VBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBaFU7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBb0c7QUFDdkM7QUFDTDtBQUNjO0FBQ3dCOzs7QUFHOUY7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsK0VBQU07QUFDUixFQUFFLGdHQUFNO0FBQ1IsRUFBRSx5R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDeENmO0FBQUE7QUFBQSx3Q0FBOFMsQ0FBZ0IsMFVBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBbFU7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy8yOC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZC13cmFwcGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZnNcIiBAY2xpY2s9XCJvbkNpdHkoMClcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZzXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGl0bGUgY2FyZC10aXRsZS1haXJcIj57e3h6cWh9feepuuawlOi0qOmHjzwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJ0aW1lXCIgc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiAxM3B4O1wiPnt7Zm9ybWF0VGltZShpbmZvLnRpbWUpfX08L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8YWlyUXVhbGl0eU92ZXJ2aWV3IDpxdWVyeUZsYWc9XCIwXCIvPlxyXG48IS0tICAgIDxob3VyQWlyUXVhbGl0eSB2LWlmPVwidHlwZSAhPT0gJ2hibSdcIi8+LS0+XHJcblxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQge2FpclF1YWxpdHl9IGZyb20gJ0AvYXBpL2FwaS5qcydcclxuICBpbXBvcnQge29wZW5Ccm93c2VyfSBmcm9tIFwiQC91dGlscy91dGlsc1wiO1xyXG4gIGltcG9ydCBkYXlqcyBmcm9tICdkYXlqcydcclxuXHJcbiAgaW1wb3J0IGFpclF1YWxpdHlPdmVydmlldyBmcm9tIFwiQC92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2FpclF1YWxpdHlPdmVydmlld1wiO1xyXG4gIGltcG9ydCBob3VyQWlyUXVhbGl0eSBmcm9tIFwiQC92aWV3cy9haXJIb21lUGFnZS9jb21wb25lbnRzL2hvdXJBaXJRdWFsaXR5XCI7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiY2l0eUFpclwiLFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICBhaXJRdWFsaXR5T3ZlcnZpZXcsXHJcbiAgICAgIGhvdXJBaXJRdWFsaXR5LFxyXG4gICAgfSxcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGRldGFpbHNQYXJhbWV0ZXI6IFN0cmluZyxcclxuICAgICAgdHlwZTogU3RyaW5nXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB4enFoOiBcIlwiLFxyXG4gICAgICAgIGluZm86IHtcclxuICAgICAgICAgIGtpbmQ6ICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWFyY2hPYmo6IHt9LFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgdGhpcy5zZWFyY2hPYmogPSB0aGlzLiRzdG9yZS5zdGF0ZS5zZWFyY2hPYmo7XHJcbiAgICAgIGlmICh0aGlzLmRldGFpbHNQYXJhbWV0ZXIpIHtcclxuICAgICAgICB0aGlzLnh6cWggPSB0aGlzLnNlYXJjaE9iai5wYXJhbWV0ZXJcclxuICAgICAgfWVsc2V7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hPYmogPSB0aGlzLiRzdG9yZS5zdGF0ZS5zZWFyY2hPYmo7XHJcbiAgICAgICAgdGhpcy54enFoID0gdGhpcy5zZWFyY2hPYmoucGFyYW1ldGVyXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucXVlcnlEYXRhKClcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGFzeW5jIHF1ZXJ5RGF0YSgpIHtcclxuICAgICAgICBsZXQgdGVtcEQgPSBhd2FpdCB0aGlzLmdldERhdGEoKTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0ZW1wRClcclxuICAgICAgICB0aGlzLmluZm8gPSB0ZW1wRDtcclxuICAgICAgfSxcclxuICAgICAgZ2V0RGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgIGFpclF1YWxpdHkoe1xyXG4gICAgICAgICAgICBkaXZpc2lvbk5hbWU6IHRoaXMueHpxaCxcclxuICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSlcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSkpXHJcbiAgICAgIH0sXHJcbiAgICAgIG9uQ2l0eShmbGFnKSB7XHJcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgbmFtZTogJ2FpckhvbWVQYWdlJyxcclxuICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgIHhxdHlwZTogXCLnqbrmsJTotKjph49cIixcclxuICAgICAgICAgICAgdGl0bGU6IFwi56m65rCU6LSo6YePXCIsXHJcbiAgICAgICAgICAgIHh6cWg6IHRoaXMueHpxaCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgZm9ybWF0VGltZSh2YWx1ZSkge1xyXG4gICAgICAgIHJldHVybiBkYXlqcyh2YWx1ZSkuZm9ybWF0KCdZWVlZLU1NLUREIEhIJylcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcblxyXG4gIC5mcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIC5sZXZlbDEge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMnB4IDEzcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDIyOCwgMCwgMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG5cclxuICAudGltZSB7XHJcbiAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogNnB4IDE0cHg7XHJcbiAgICBwYWRkaW5nOiA3cHggMTJweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQyLCAyNDcsIDI1NSwgMC41KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgLnN0YXRpcy1zdW0ge1xyXG4gICAgICB3aWR0aDogMjUlO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDEpO1xyXG4gICAgICBmb250LXNpemU6IDI2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0YXRpcy1pdGVtIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgY29sb3I6ICMxMjEyMzY7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDM2cHg7XHJcblxyXG4gICAgICAudGltZSB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNhcmQtc3VtbWFyeSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiA0MyU7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1MiwgMjQ4LCAyNDAsIDAuMyk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1MiwgMjAxLCA5OCwgMC4zKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcblxyXG4gICAgLm51bSB7XHJcbiAgICAgIGNvbG9yOiAjNTI3MUZGO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICAucG9sbHV0ZU51bSB7XHJcbiAgICAgIGNvbG9yOiAjRkY4RDFBO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZC13cmFwcGVyXCIgc3R5bGU9XCJwYWRkaW5nLWJvdHRvbTogMTRweFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZzXCIgQGNsaWNrPVwidG9JbmRleFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10aXRsZSBjYXJkLXRpdGxlLXdhdGVyXCI+e3tzZWFyY2hPYmoucGFyYW1ldGVyfX3msLTnjq/looPmpoLlhrU8L2Rpdj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJ0aW1lXCI+57Sv6K6h5oiq6Ieze3sgd2F0ZXJkYXRhWzBdLmRhdGFUaW1lIH19IDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJiYXNlLXdyYXBwZXJcIiB2LWZvcj1cIihpdGVtLCBpKSBpbiB3YXRlcmRhdGFcIiBAY2xpY2s9XCJ0b0RldGFpbChpdGVtLnR5cGUpXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJiYXNlLXRpdGxlXCI+XHJcbiAgICAgICAgPGRpdiB2LWh0bWw9XCJjb250cm9sSW1nKGl0ZW0udHlwZSlcIi8+XHJcbiAgICAgICAgPCEtLTxpbWcgdi1pZj1cIml0ZW0udHlwZSA9PSAn5Zu95o6nJ1wiIHNyYz1cIkAvYXNzZXRzL+WbvS5wbmdcIiBzdHlsZT1cIndpZHRoOiAyMHB4XCIgLz5cclxuICAgICAgICA8aW1nIHYtaWY9XCJpdGVtLnR5cGUgPT0gJ+ecgeaOpydcIiBzcmM9XCJAL2Fzc2V0cy/nnIEucG5nXCIgc3R5bGU9XCJ3aWR0aDogMjBweFwiIC8+XHJcbiAgICAgICAgPGltZyB2LWlmPVwiaXRlbS50eXBlID09ICfluILmjqcnXCIgc3JjPVwiQC9hc3NldHMv5biCLnBuZ1wiIHN0eWxlPVwid2lkdGg6IDIwcHhcIiAvPi0tPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmc1wiIHN0eWxlPVwibWFyZ2luOiAwIDE3cHggMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXN1bW1hcnlcIj5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6IHJnYmEoNjgsIDEyMywgMjUyLCAxKVwiPuS8mOiJr+awtOS9kzwvc3Bhbj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9sbHV0ZU51bVwiPnt7IGl0ZW0uZXhjZWxsZW50IH19PC9zcGFuPuS4qlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtc3VtbWFyeVwiPlxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9XCJjb2xvcjogcmdiYSg2OCwgMTIzLCAyNTIsIDEpXCI+5YqjVuexuzwvc3Bhbj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9sbHV0ZU51bVwiIHN0eWxlPVwiY29sb3I6IHJnYmEoMjU0LCA3OSwgMiwgMSlcIj57eyBpdGVtLnBvb3IgfX08L3NwYW4+5LiqXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1zdW1tYXJ5XCI+XHJcbiAgICAgICAgICA8c3BhbiBzdHlsZT1cImNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSlcIj7mgLs8L3NwYW4+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvbGx1dGVOdW1cIj57eyBpdGVtLm51bSB9fTwvc3Bhbj7kuKpcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmc1wiIHN0eWxlPVwibWFyZ2luOiAzcHggMTNweCAwIDNweFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8IS0tICsnJScgLS0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhbmRhcmRcIiA6c3R5bGU9XCInd2lkdGg6JyArIGl0ZW0uZXhjZWxsZW50UmF0ZVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3BhbiBzdHlsZT1cImNvbG9yOiAjMTIxMjM2OyBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiBib2xkXCI+e3sgaXRlbS5leGNlbGxlbnRSYXRlIH19PC9zcGFuPjxici8+XHJcbiAgICAgICAgICA8c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMTJweDtjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO2ZvbnQtd2VpZ2h0OiBub3JtYWxcIj7kvJjoia/njoc8L3NwYW4+XHJcbiAgICAgICAgICA8IS0tIDxzcGFuIHN0eWxlPVwiY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtmb250LXNpemU6IDEycHhcIj4lPC9zcGFuPiAtLT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgeyBnZXRUaGlzRGF0ZSB9IGZyb20gXCJAL3V0aWxzL3NldGRhdGVcIjtcclxuICBpbXBvcnQgeyB3YXRlckJhc2ljRGF0YSB9IGZyb20gXCJAL2FwaS93YXRlcl9lbnZpclwiO1xyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiY2l0eVdhdGVyXCIsXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRvZGF5OiBnZXRUaGlzRGF0ZSgpLFxyXG4gICAgICAgIGFyZWE6IFwi5piG5piO5biCXCIsXHJcbiAgICAgICAgd2F0ZXJkYXRhOiBbXSxcclxuICAgICAgICBzZWFyY2hPYmo6IHt9LFxyXG4gICAgICAgIGNvdW50cnlJbWc6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy/lm70ucG5nJyksXHJcbiAgICAgICAgcHJvdmluY2VJbWc6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy/nnIEucG5nJyksXHJcbiAgICAgICAgY2l0eUltZzogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL+W4gi5wbmcnKSxcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICB0aGlzLnNlYXJjaE9iaiA9IHRoaXMuJHN0b3JlLnN0YXRlLnNlYXJjaE9iajtcclxuICAgICAgY29uc29sZS5sb2codGhpcy5zZWFyY2hPYmopXHJcbiAgICAgIHRoaXMubG9hZERhdGEoKTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGxvYWREYXRhKCkge1xyXG4gICAgICAgIHdhdGVyQmFzaWNEYXRhKHsgZGF0YVR5cGU6IHRoaXMuc2VhcmNoT2JqLnBhcmFtZXRlciB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIHRoaXMud2F0ZXJkYXRhID0gcmVzLmRhdGE7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHRvSW5kZXgoKXtcclxuICAgICAgICBsZXQgc2VhcmNoRGF0YSA9IHtcclxuICAgICAgICAgIG1vZHVsZU5hbWU6ICcnLFxyXG4gICAgICAgICAgcmVzb3VyY2VQYXRoOiAnJyxcclxuICAgICAgICAgIHR5cGU6ICcnLFxyXG4gICAgICAgICAgcGFyYW1ldGVyOiB0aGlzLnNlYXJjaE9iai5wYXJhbWV0ZXIsXHJcbiAgICAgICAgICBjb21wb25lbnROYW1lOiAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3NldFNlYXJjaE9iaicsIHNlYXJjaERhdGEpO1xyXG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiAnd2F0ZXJIb21lUGFnZScscXVlcnk6IHtcclxuICAgICAgICAgICAgeHpxaDogdGhpcy5zZWFyY2hPYmoucGFyYW1ldGVyXHJcbiAgICAgICAgICB9fSlcclxuICAgICAgfSxcclxuICAgICAgdG9EZXRhaWwoZmxhZykge1xyXG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgIG5hbWU6IFwiZXhhbWluZVNpdGVMaXN0XCIsXHJcbiAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICB0eXBlOiBmbGFnLFxyXG4gICAgICAgICAgICB4enFoOiB0aGlzLnNlYXJjaE9iai5wYXJhbWV0ZXJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGNvbnRyb2xJbWcodHlwZSl7XHJcbiAgICAgICAgaWYodHlwZSl7XHJcbiAgICAgICAgICBsZXQgaW1nSHRtbCA9ICcnO1xyXG4gICAgICAgICAgZm9yKGxldCBpIGluIHR5cGUpe1xyXG4gICAgICAgICAgICBpZih0eXBlW2ldPT09J+WbvScpe1xyXG4gICAgICAgICAgICAgIGltZ0h0bWwrPSc8aW1nIHNyYz1cIicrdGhpcy5jb3VudHJ5SW1nKydcIiBzdHlsZT1cIndpZHRoOiAyMHB4XCIvPidcclxuICAgICAgICAgICAgfWVsc2UgaWYodHlwZVtpXT09PSfnnIEnKXtcclxuICAgICAgICAgICAgICBpbWdIdG1sKz0nPGltZyBzcmM9XCInK3RoaXMucHJvdmluY2VJbWcrJ1wiIHN0eWxlPVwid2lkdGg6IDIwcHhcIi8+J1xyXG4gICAgICAgICAgICB9ZWxzZSBpZih0eXBlW2ldPT09J+W4gicpe1xyXG4gICAgICAgICAgICAgIGltZ0h0bWwrPSc8aW1nIHNyYz1cIicrdGhpcy5jaXR5SW1nKydcIiBzdHlsZT1cIndpZHRoOiAyMHB4XCIvPidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIGltZ0h0bWxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICBhcmVhKHZhbCwgb2xkKSB7XHJcbiAgICAgICAgaWYgKHZhbCAhPSBvbGQpIHtcclxuICAgICAgICAgIHRoaXMubG9hZERhdGEoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcbiAgQGltcG9ydCBcIkAvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL2NhcmROb0JvcmRlci5zY3NzXCI7XHJcblxyXG4gIC52YW4tZHJvcGRvd24tbWVudV9fdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICB9XHJcbiAgLnZhbi1kcm9wZG93bi1tZW51X19iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuICAudmFuLWRyb3Bkb3duLW1lbnVfX2l0ZW0ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDYsIDI0NiwgMjQ2LCAxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICB9XHJcbjwvc3R5bGU+XHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICAuYmFzZS13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbjogMTFweCAwIDA7XHJcbiAgICBwYWRkaW5nOiA2cHggM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjQyLCAyNDcsIDI1NSwgMSkgMCUsIHJnYmEoMjQyLCAyNDcsIDI1NSwgMCkgMTAwJSk7XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgd2lkdGg6IDFweDtcclxuICAgICAgaGVpZ2h0OiA3NXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwNywgMTU1LCAyNTAsIDAuNSk7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgdG9wOiAyNHB4O1xyXG4gICAgICBsZWZ0OiA2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgJjo6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgICB3aWR0aDogNXB4O1xyXG4gICAgICBoZWlnaHQ6IDVweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwNywgMTU1LCAyNTAsIDAuNSk7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgYm90dG9tOiAwcHg7XHJcbiAgICAgIGxlZnQ6IDRweDtcclxuICAgIH1cclxuXHJcbiAgICAuYmFzZS10aXRsZSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogM3B4O1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcblxyXG4gICAgICBkaXYge1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1zdW1tYXJ5IHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICB3aWR0aDogMjclO1xyXG4gICAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoNjgsIDEyMywgMjUyLCAwLjA1KTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg2OCwgMTIzLCAyNTIsIDAuMSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG5cclxuICAgICAgLm51bSB7XHJcbiAgICAgICAgY29sb3I6ICM1MjcxZmY7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5wb2xsdXRlTnVtIHtcclxuICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAxKTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucHJvZ3Jlc3Mtd3JhcHBlciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiA4MiU7XHJcbiAgICAgIHBhZGRpbmc6IDAgM3B4O1xyXG4gICAgICBoZWlnaHQ6IDEzcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ4LCAyNTEsIDI1NSwgMSk7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoODIsIDExMywgMjU1LCAwLjUpO1xyXG4gICAgICBib3JkZXItbGVmdDogMDtcclxuXHJcbiAgICAgIC5zdGFuZGFyZCB7XHJcbiAgICAgICAgaGVpZ2h0OiA5cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCByZ2JhKDAsIDIxMCwgMjU1LCAxKSAwJSwgcmdiYSg0NCwgNjAsIDI1NCwgMSkgMTAwJSk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDIwLCAzMSwgMTU5LCAwLjE1KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtd3JhcHBlclwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJmc1wiLFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uQ2l0eSgwKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmc1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZSBjYXJkLXRpdGxlLWFpclwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ueHpxaCkgKyBcIuepuuawlOi0qOmHj1wiKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRpbWVcIiwgc3RhdGljU3R5bGU6IHsgXCJwYWRkaW5nLXJpZ2h0XCI6IFwiMTNweFwiIH0gfSxcbiAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5mb3JtYXRUaW1lKF92bS5pbmZvLnRpbWUpKSldXG4gICAgICAgICAgKSxcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF9jKFwiYWlyUXVhbGl0eU92ZXJ2aWV3XCIsIHsgYXR0cnM6IHsgcXVlcnlGbGFnOiAwIH0gfSksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC13cmFwcGVyXCIsIHN0YXRpY1N0eWxlOiB7IFwicGFkZGluZy1ib3R0b21cIjogXCIxNHB4XCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZnNcIiwgb246IHsgY2xpY2s6IF92bS50b0luZGV4IH0gfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGUgY2FyZC10aXRsZS13YXRlclwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5zZWFyY2hPYmoucGFyYW1ldGVyKSArIFwi5rC0546v5aKD5qaC5Ya1XCIpLFxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGltZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCLntK/orqHmiKroh7NcIiArIF92bS5fcyhfdm0ud2F0ZXJkYXRhWzBdLmRhdGFUaW1lKSArIFwiIFwiKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF92bS5fbChfdm0ud2F0ZXJkYXRhLCBmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJiYXNlLXdyYXBwZXJcIixcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS50b0RldGFpbChpdGVtLnR5cGUpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJiYXNlLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmNvbnRyb2xJbWcoaXRlbS50eXBlKSkgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZzXCIsIHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCIwIDE3cHggMFwiIH0gfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1zdW1tYXJ5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcInJnYmEoNjgsIDEyMywgMjUyLCAxKVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuS8mOiJr+awtOS9k1wiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInBvbGx1dGVOdW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLmV4Y2VsbGVudCkpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5LiqIFwiKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1zdW1tYXJ5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcInJnYmEoNjgsIDEyMywgMjUyLCAxKVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuWKo1bnsbtcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwb2xsdXRlTnVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJyZ2JhKDI1NCwgNzksIDIsIDEpXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ucG9vcikpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLkuKogXCIpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXN1bW1hcnlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwicmdiYSgxOCwgMTgsIDU0LCAwLjUpXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5oC7XCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwicG9sbHV0ZU51bVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0ubnVtKSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLkuKogXCIpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmc1wiLCBzdGF0aWNTdHlsZTogeyBtYXJnaW46IFwiM3B4IDEzcHggMCAzcHhcIiB9IH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInByb2dyZXNzLXdyYXBwZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInN0YW5kYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiBcIndpZHRoOlwiICsgaXRlbS5leGNlbGxlbnRSYXRlLFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMxMjEyMzZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMTRweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LXdlaWdodFwiOiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtLmV4Y2VsbGVudFJhdGUpKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmdiYSgxOCwgMTgsIDU0LCAwLjUpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtd2VpZ2h0XCI6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuS8mOiJr+eOh1wiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICB9KSxcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIid1c2Ugc3RyaWN0JztcbnZhciAkZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5mb3JFYWNoO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2ZvckVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbm1vZHVsZS5leHBvcnRzID0gIVNUUklDVF9NRVRIT0QgPyBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gIHJldHVybiAkZm9yRWFjaCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWZvcmVhY2ggLS0gc2FmZVxufSA6IFtdLmZvckVhY2g7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIERPTUl0ZXJhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20taXRlcmFibGVzJyk7XG52YXIgRE9NVG9rZW5MaXN0UHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS10b2tlbi1saXN0LXByb3RvdHlwZScpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbnZhciBoYW5kbGVQcm90b3R5cGUgPSBmdW5jdGlvbiAoQ29sbGVjdGlvblByb3RvdHlwZSkge1xuICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGUgJiYgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoICE9PSBmb3JFYWNoKSB0cnkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCAnZm9yRWFjaCcsIGZvckVhY2gpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCA9IGZvckVhY2g7XG4gIH1cbn07XG5cbmZvciAodmFyIENPTExFQ1RJT05fTkFNRSBpbiBET01JdGVyYWJsZXMpIHtcbiAgaWYgKERPTUl0ZXJhYmxlc1tDT0xMRUNUSU9OX05BTUVdKSB7XG4gICAgaGFuZGxlUHJvdG90eXBlKGdsb2JhbFRoaXNbQ09MTEVDVElPTl9OQU1FXSAmJiBnbG9iYWxUaGlzW0NPTExFQ1RJT05fTkFNRV0ucHJvdG90eXBlKTtcbiAgfVxufVxuXG5oYW5kbGVQcm90b3R5cGUoRE9NVG9rZW5MaXN0UHJvdG90eXBlKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZnNbZGF0YS12LTJlYjRiNDQ2XSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmxldmVsMVtkYXRhLXYtMmViNGI0NDZdIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDJweCAxM3B4O1xcbiAgYmFja2dyb3VuZDogIzAwZTQwMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLnRpbWVbZGF0YS12LTJlYjRiNDQ2XSB7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4uY2FyZC13cmFwcGVyW2RhdGEtdi0yZWI0YjQ0Nl0ge1xcbiAgcGFkZGluZy1ib3R0b206IDVweDtcXG59XFxuLmNhcmQtY29udGVudFtkYXRhLXYtMmViNGI0NDZdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiA2cHggMTRweDtcXG4gIHBhZGRpbmc6IDdweCAxMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDIsIDI0NywgMjU1LCAwLjUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLmNhcmQtY29udGVudCAuc3RhdGlzLXN1bVtkYXRhLXYtMmViNGI0NDZdIHtcXG4gIHdpZHRoOiAyNSU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzEyMTIzNjtcXG4gIGZvbnQtc2l6ZTogMjZweDtcXG59XFxuLmNhcmQtY29udGVudCAuc3RhdGlzLWl0ZW1bZGF0YS12LTJlYjRiNDQ2XSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMzAlO1xcbiAgY29sb3I6ICMxMjEyMzY7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBsaW5lLWhlaWdodDogMzZweDtcXG59XFxuLmNhcmQtY29udGVudCAuc3RhdGlzLWl0ZW0gLnRpbWVbZGF0YS12LTJlYjRiNDQ2XSB7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIHBhZGRpbmctcmlnaHQ6IDA7XFxufVxcbi5jYXJkLXN1bW1hcnlbZGF0YS12LTJlYjRiNDQ2XSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHdpZHRoOiA0MyU7XFxuICBwYWRkaW5nOiA3cHg7XFxuICBtYXJnaW4tYm90dG9tOiA3cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1MiwgMjQ4LCAyNDAsIDAuMyk7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1MiwgMjAxLCA5OCwgMC4zKTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxufVxcbi5jYXJkLXN1bW1hcnkgLm51bVtkYXRhLXYtMmViNGI0NDZdIHtcXG4gIGNvbG9yOiAjNTI3MUZGO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5jYXJkLXN1bW1hcnkgLnBvbGx1dGVOdW1bZGF0YS12LTJlYjRiNDQ2XSB7XFxuICBjb2xvcjogI0ZGOEQxQTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jYXJkLW5vLWJvcmRlci13cmFwcGVyIHtcXG4gIG1hcmdpbjogNHB4IDE3cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLmNhcmQtbm8tYm9yZGVyLXdyYXBwZXIgLmNhcmQtbm8tYm9yZGVyLXRpdGxlIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTBweCAwO1xcbn1cXG4uY2FyZC1uby1ib3JkZXItd3JhcHBlciAuY2FyZC1uby1ib3JkZXItdGl0bGUgLm5hbWUge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5jYXJkLW5vLWJvcmRlci13cmFwcGVyIC5jYXJkLW5vLWJvcmRlci10aXRsZSAudGltZSB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4udmFuLWRyb3Bkb3duLW1lbnVfX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVxcbi52YW4tZHJvcGRvd24tbWVudV9fYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuLnZhbi1kcm9wZG93bi1tZW51X19pdGVtIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmJhc2Utd3JhcHBlcltkYXRhLXYtYzgwYjFmMmNdIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMTFweCAwIDA7XFxuICBwYWRkaW5nOiA2cHggM3B4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsICNmMmY3ZmYgMCUsIHJnYmEoMjQyLCAyNDcsIDI1NSwgMCkgMTAwJSk7XFxufVxcbi5iYXNlLXdyYXBwZXJbZGF0YS12LWM4MGIxZjJjXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDFweDtcXG4gIGhlaWdodDogNzVweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMTA3LCAxNTUsIDI1MCwgMC41KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjRweDtcXG4gIGxlZnQ6IDZweDtcXG59XFxuLmJhc2Utd3JhcHBlcltkYXRhLXYtYzgwYjFmMmNdOjphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiA1cHg7XFxuICBoZWlnaHQ6IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMTA3LCAxNTUsIDI1MCwgMC41KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMHB4O1xcbiAgbGVmdDogNHB4O1xcbn1cXG4uYmFzZS13cmFwcGVyIC5iYXNlLXRpdGxlW2RhdGEtdi1jODBiMWYyY10ge1xcbiAgcGFkZGluZy1sZWZ0OiAzcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLmJhc2Utd3JhcHBlciAuYmFzZS10aXRsZSBkaXZbZGF0YS12LWM4MGIxZjJjXSB7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbn1cXG4uYmFzZS13cmFwcGVyIC5iYXNlLXRpdGxlIGRpdiBzcGFuW2RhdGEtdi1jODBiMWYyY10ge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6ICMxMjEyMzY7XFxufVxcbi5iYXNlLXdyYXBwZXIgLmNhcmQtc3VtbWFyeVtkYXRhLXYtYzgwYjFmMmNdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgd2lkdGg6IDI3JTtcXG4gIHBhZGRpbmc6IDdweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNjgsIDEyMywgMjUyLCAwLjA1KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNjgsIDEyMywgMjUyLCAwLjEpO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG59XFxuLmJhc2Utd3JhcHBlciAuY2FyZC1zdW1tYXJ5IC5udW1bZGF0YS12LWM4MGIxZjJjXSB7XFxuICBjb2xvcjogIzUyNzFmZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uYmFzZS13cmFwcGVyIC5jYXJkLXN1bW1hcnkgLnBvbGx1dGVOdW1bZGF0YS12LWM4MGIxZjJjXSB7XFxuICBjb2xvcjogIzEyMTIzNjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbi5iYXNlLXdyYXBwZXIgLnByb2dyZXNzLXdyYXBwZXJbZGF0YS12LWM4MGIxZjJjXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiA4MiU7XFxuICBwYWRkaW5nOiAwIDNweDtcXG4gIGhlaWdodDogMTNweDtcXG4gIGJhY2tncm91bmQ6ICNmOGZiZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDgyLCAxMTMsIDI1NSwgMC41KTtcXG4gIGJvcmRlci1sZWZ0OiAwO1xcbn1cXG4uYmFzZS13cmFwcGVyIC5wcm9ncmVzcy13cmFwcGVyIC5zdGFuZGFyZFtkYXRhLXYtYzgwYjFmMmNdIHtcXG4gIGhlaWdodDogOXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG1hcmdpbi1yaWdodDogNXB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI3MGRlZywgIzAwZDJmZiAwJSwgIzJjM2NmZSAxMDAlKTtcXG4gIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSgyMCwgMzEsIDE1OSwgMC4xNSk7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2l0eUFpci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yZWI0YjQ0NiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjIwMzBhNmI0XCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2l0eUFpci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yZWI0YjQ0NiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NpdHlBaXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmViNGI0NDYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2l0eVdhdGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMDEwY2Y4OGFcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaXR5V2F0ZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaXR5V2F0ZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2l0eVdhdGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPWM4MGIxZjJjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNjc4OTI1MGJcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaXR5V2F0ZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9YzgwYjFmMmMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaXR5V2F0ZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9YzgwYjFmMmMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0g6aaW6aG1ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy/njq/kv53noIFcclxuZXhwb3J0IGNvbnN0IHF1ZXJ5U3VwZXJ2aXNpb24gPSAoKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2hvbWUvc3VwZXJ2aXNpb24nLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiB7fVxyXG4gICAgfSlcclxufTtcclxuLy/njq/kv53noIHlj5jljJbotovlir9cclxuZXhwb3J0IGNvbnN0IHF1ZXJ5SGJtVHJlbmQgPSAocGFyYW1zKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2hvbWUvY2hhbmdpbmdfdHJlbmRzJyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICB9KVxyXG59O1xyXG4vL+eOr+S/neeggeWOn+WboOWIhuaekFxyXG5leHBvcnQgY29uc3QgcXVlcnlIYm1BbmFseXNpcyA9IChwYXJhbXMpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvaG9tZS9jYXVzZV9hbmFseXNpcycsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHBhcmFtc1xyXG4gICAgfSlcclxufTtcclxuLy/njq/kv53noIHljp/lm6Dor6bmg4VcclxuZXhwb3J0IGNvbnN0IHF1ZXJ5SGJtQ29kZUFuYWx5c2lzID0gKHBhcmFtcykgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9ob21lL3BvbGx1dGlvbl9kZXRhaWwnLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgIH0pXHJcbn07XHJcbi8v5b6F5a6h5qC45YiX6KGoXHJcbmV4cG9ydCBjb25zdCBxdWVyeUFwcHJvdmFsTGlzdCA9IChwYXJhbXMpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvZXhhbWluZS9wZW5kaW5nX3Jldmlld19saXN0JyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICB9KVxyXG59O1xyXG4vL+WuoeaguFxyXG5leHBvcnQgY29uc3Qgc3VibWl0RGVwdEFwcHJvdmFsID0gKHBhcmFtcykgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9leGFtaW5lL2RlcGFydG1lbnRfYXBwcm92YWwnLFxyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIGRhdGE6IHBhcmFtc1xyXG4gICAgfSlcclxufTtcclxuLy8g6LWL56CB57G75Z6L5LiL5ouJ5qGGXHJcbmV4cG9ydCBjb25zdCBxdWVyeUNsdWVUeXBlcyA9ICgpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvZXhhbWluZS90eXBlX2xpc3QnLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiB7fVxyXG4gICAgfSlcclxufTtcclxuLy/msaHmn5PmupDliJfooahcclxuZXhwb3J0IGNvbnN0IHF1ZXJ5V1JZTGlzdCA9IChwYXJhbXMpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvaG9tZS9wb2xsdXRpb25fbGlzdCcsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHBhcmFtc1xyXG4gICAgfSlcclxufTtcclxuLy/ljLrln5/kuIvmi4nmoYZcclxuZXhwb3J0IGNvbnN0IHF1ZXJ5QXJlYXMgPSAoKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2hvbWUvZGl2aXNpb25fbGlzdCcsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHt9XHJcbiAgICB9KVxyXG59O1xyXG4vL+S7u+WKoeamguaLrFxyXG5leHBvcnQgY29uc3QgZ2V0VGFza0luZm8gPSAoKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2xhdy90YXNrX3N1bW1hcml6ZScsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHt9XHJcbiAgICB9KVxyXG59O1xyXG4vL+mjjumZqeaAu+iniFxyXG5leHBvcnQgY29uc3QgZ2V0RXZhbHVhdGVJbmZvID0gKGRhdGEpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvZXZhbHVhdGUvcmVnaW9uX21hcCcsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IGRhdGFcclxuICAgIH0pXHJcbn07XHJcbi8vIOmjjumZqemXrumimOexu+Wei1xyXG5leHBvcnQgY29uc3QgZ2V0Umlza1R5cGUgPSAoKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2V2YWx1YXRlL3RvcF9pbmZvJyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczoge31cclxuICAgIH0pXHJcbn07XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSDotYvnoIHop4TliJkgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8v546v5L+d56CB6KeE5YiZ5p+l6K+iXHJcbmV4cG9ydCBjb25zdCBxdWVyeVJ1bGVMaXN0ID0gKHBhcmFtcykgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9ldmFsdWF0ZS9ydWxlX2xpc3QnLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgIH0pXHJcbn07XHJcbi8v6YOo6Zeo5LiL5ouJ5qGGXHJcbmV4cG9ydCBjb25zdCBxdWVyeUhibURlcGFydG1lbnQgPSAoKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaW50ZXJmYWNlL2RlcHQvZGVwdF90cmVlJyxcclxuICAgICAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgICAgIHBhcmFtczoge31cclxuICAgIH0pXHJcbn07XHJcbi8v5qCh6aqMXHJcbmV4cG9ydCBjb25zdCBjaGVja1J1bGVzID0gKHBhcmFtcykgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9ldmFsdWF0ZS9jaGVjaycsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHBhcmFtc1xyXG4gICAgfSlcclxufTtcclxuLy8g5L+u5pS56KeE5YiZXHJcbmV4cG9ydCBjb25zdCBlZGl0UnVsZXMgPSAocGFyYW1zKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2V2YWx1YXRlL3VwZGF0ZScsXHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgZGF0YTogcGFyYW1zXHJcbiAgICB9KVxyXG59O1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSDlnLDlm74gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8g5Zyw5Zu+54K55L2NXHJcbmV4cG9ydCBjb25zdCBxdWVyeVdSWU1hcCA9IChwYXJhbXMpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvaG9tZS9wb2xsdXRpb25fbWFwJyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICB9KVxyXG59O1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSDnu5/orqHmiqXooaggPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGNvbnN0IHF1ZXJ5U3RhdGlzdGljcyA9ICgpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9hcHAvc3RhdGlzdGljcy9kaXZpc2lvbl9waWUnLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiB7fVxyXG4gICAgfSlcclxufTtcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0g5Yqo5oCB6K+E5Lu3ID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8v5ZCE5Yy65Z+f5oqV6K+J5Y2g5q+UXHJcbmV4cG9ydCBjb25zdCBjb21wbGFpbnRQcm9wb3J0aW9uID0gKGRhdGEpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDonL2NsdXN0ZXIvYWlyUXVhbGl0eS9jb21wbGFpbnRQcm9wb3J0aW9uJyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczogZGF0YVxyXG4gICAgfSlcclxufVxyXG4iLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XHJcbmxldCBiYXNlVXJsID0gXCIvd2F0ZXJcIjsgLy/mnI3liqHlmajmmK93YXRlcuexu++8jOacrOWcsOayoeacieWKoFxyXG4vKlxyXG7lpKfnq57otZvmsLTmsrvnkIbmjpLlkI1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5raW5nKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9jb21wZXRpdGlvbi9yYW5raW5nXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuLypcclxu5rC0546v5aKD5bm05bqV5o6S5ZCN5YiX6KGoXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24geWVhclJhbmtMaXN0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9jb21wZXRpdGlvbi95ZWFyUmFua0xpc3RcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG4vKlxyXG7lpKfnq57otZvmsLTmsrvnkIbmjpLlkI3or6bmg4VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5rTGlzdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvY29tcGV0aXRpb24vcmFua0xpc3RcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG4vKlxyXG7lpKfnq57otZvmsLTmsrvnkIbmjpLlkI3lkITljLrln5/or6bmg4VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5rRGV0YWlsKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9jb21wZXRpdGlvbi9yYW5rRGV0YWlsXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuLypcclxuIOWQhOWOv++8iOW4gu+8ieWMuuOAgeW8gOWPkeW6puWBh+WbreWMuuWto+W6puWcsOihqOawtOeOr+Wig+i0qOmHj+ivhOWIhuivpuaDhVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlTWFya3MoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL2NvbXBldGl0aW9uL3NjYWxlTWFya3NcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG4vKlxyXG7lhajluILmsLTnjq/looPmpoLlhrXmgLvkvZPmg4XlhrVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXRlckJhc2ljRGF0YShkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvQmFzaWNEYXRhXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuLypcclxu5pat6Z2i5L+h5oGvXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VjdGlvbkluZm8oZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyQmFzaWNEYXRhL3NlY3Rpb25JbmZvXCIsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9KTtcclxufVxyXG4vKlxyXG7mlq3pnaLliJfooagtLeWbveOAgeecgeOAgeW4glxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNlY3Rpb25MaXN0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9CYXNpY0RhdGEvc2VjdGlvbkxpc3RcIixcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmlq3pnaLkv6Hmga8tLeWbveOAgeecgeOAgeW4glxyXG5leHBvcnQgZnVuY3Rpb24gc3RhdGlvbkluZm8oZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3NlY3Rpb25cIixcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmlq3pnaLkv6Hmga8tLeafpeivouS4iua4uOi2heagh1xyXG5leHBvcnQgZnVuY3Rpb24gdXBTdHJlYW1PdmVyKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9zZWN0aW9uL3VwU3RyZWFtT3ZlclwiLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaWremdouS/oeaBry0t5p+l6K+i5rmW5bqT55qE55uR5rWL5pat6Z2iXHJcbmV4cG9ydCBmdW5jdGlvbiBsYWtlU2l0ZUxpc3QoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3NlY3Rpb24vbGFrZVNpdGVMaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaWremdoi3msrPmtYHml7blgLzmm7Lnur9cclxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5U2VjdGlvbkluZm8oZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3NlY3Rpb24vcXVlcnlTZWN0aW9uSW5mb1wiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmlq3pnaLkv6Hmga8tLeWbveOAgeecgeOAgeW4glxyXG5leHBvcnQgZnVuY3Rpb24gc3RhdGlvbkRlcyhkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvc2VjdGlvbi9zaXRlRGV0YWlsXCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOays+a1geivpuaDhS3msrPpgZPor6bmg4VcclxuZXhwb3J0IGZ1bmN0aW9uIHJpdmVyQ291cnNlRGV0YWlsKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9CYXNpY0RhdGEvcml2ZXJDb3Vyc2VEZXRhaWxcIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5pat6Z2iLeaXtuWAvOabsue6v1xyXG5leHBvcnQgZnVuY3Rpb24gaG91ckxpbmUoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3NlY3Rpb24vY3VydmVcIixcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmlq3pnaLkv6Hmga8tLeWRqOi+uea2ieawtOaxoeafk+a6kFxyXG5leHBvcnQgZnVuY3Rpb24gd2F0ZXJQb2xsdXRpb24oZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3NlY3Rpb24vcG9sbHV0aW9uXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cHN0cmVhbVBvbGx1dGlvbihkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvc2VjdGlvbi91cHN0cmVhbVBvbGx1dGlvblwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmlq3pnaLkv6Hmga8tLeS4iua4uOaWremdouWIl+ihqFxyXG4vLyBleHBvcnQgZnVuY3Rpb24gZ2V0VXBMaXN0KGRhdGEpIHtcclxuLy8gICByZXR1cm4gcmVxdWVzdCh7XHJcbi8vICAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9zZWN0aW9uL3VwU3RyZWFtXCIsXHJcbi8vICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4vLyAgICAgZGF0YTogZGF0YSxcclxuLy8gICB9KTtcclxuLy8gfVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXBMaXN0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9zZWN0aW9uL3Vwc3RyZWFtU2VjdGlvblwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmlq3pnaLkv6Hmga8tLeS4iua4uOawtOW6k1xyXG5leHBvcnQgZnVuY3Rpb24gdXBTdHJlYW1XYXRlcihkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvc2VjdGlvbi91cHN0cmVhbVdhdGVyXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaWremdouS/oeaBry0t5LiK5ri45o6S5Y+jXHJcbmV4cG9ydCBmdW5jdGlvbiB1cHN0cmVhbVNld2FnZShkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvc2VjdGlvbi91cHN0cmVhbVNld2FnZVwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmlq3pnaLkv6Hmga8tLeS4iua4uOawtOi0qOWHgOWMluWOglxyXG5leHBvcnQgZnVuY3Rpb24gcHVyaWZpY2F0aW9uUGxhbnQoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3NlY3Rpb24vcHVyaWZpY2F0aW9uUGxhbnRcIixcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmlq3pnaItLeebkea1i+ivpuaDhVxyXG5leHBvcnQgZnVuY3Rpb24gZGF0YVRhYmxlKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9zZWN0aW9uL2RhdGFUYWJsZVwiLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaWremdoi0t5rC06LSo5YeA5YyW5Y6C6K+m5oOFXHJcbmV4cG9ydCBmdW5jdGlvbiBqaGNJbmZvKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9wbGFudFwiLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaYhuaYjuawtOeOr+Wigy3mtYHln5/msLTotKjkvJjoia/mpoLlhrVcclxuZXhwb3J0IGZ1bmN0aW9uIGx5QmFzaW4oZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL2Jhc2luXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaYhuaYjuawtOeOr+Wigy3mtYHln5/msLTotKjkvJjoia/mpoLlhrUt6K+m5oOFXHJcbmV4cG9ydCBmdW5jdGlvbiBseURldGFpbChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvYmFzaW4vZGV0YWlsc1wiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDpppbpobUgLSDmu4fmsaDmsLTotKhcclxuZXhwb3J0IGZ1bmN0aW9uIGRjU3ooKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvQmFzaWNEYXRhL2RjRGF0YVwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOmmlumhtSAtIOa7h+axoOawtOi0qCAtIOawtOi0qOWIl+ihqFxyXG5leHBvcnQgZnVuY3Rpb24gZGNTekxpc3QoKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvbGFrZS9kY0xpc3RcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIlxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDpppbpobUt6aWu55So5rC05rqQ5ZywXHJcbmV4cG9ydCBmdW5jdGlvbiB5eXNJbmZvKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9CYXNpY0RhdGEvZHJpbmtTb3VyY2VcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YVxyXG4gIH0pO1xyXG59XHJcbi8vIOmmlumhtS3ppa7nlKjmsLTmupDlnLAt5rC05bqT5YiX6KGoXHJcbmV4cG9ydCBmdW5jdGlvbiBza0xpc3QoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL2xha2UvZHJpbmtTb3VyY2VMaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGFcclxuICB9KTtcclxufVxyXG5cclxuLy8g5piG5piO5biC5rC0546v5aKDLeawtOW6k+WIhuW4g+WPiuW6k+WuuVxyXG5leHBvcnQgZnVuY3Rpb24gd2F0ZXJCb2R5TGlzdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvQmFzaWNEYXRhL3dhdGVyQm9keURpc3RyaWJ1dGlvblwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaYhuaYjuW4guawtOeOr+Wigy3msLTotKjlh4DljJbljoLliIbluINcclxuZXhwb3J0IGZ1bmN0aW9uIHdhdGVyUGxhbnRMaXN0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9wbGFudFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaYhuaYjuW4guawtOeOr+Wigy3msLTlupPliIbluINcclxuZXhwb3J0IGZ1bmN0aW9uIHJlc2Vydm9pckxpc3QoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL2NvbW1vbi93YXRlckxpc3RcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YVxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmsLTotKjlh4DljJbljoLmsrPpgZPmlq3pnaLor6bmg4VcclxuZXhwb3J0IGZ1bmN0aW9uIHdhdGVyUGxhbnRSaXZlcihkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvcGxhbnQvZGV0YWlsXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGFcclxuICB9KTtcclxufVxyXG5cclxuLy8g5rC06LSo5YeA5YyW5Y6C6KGl5rC05pat6Z2iXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXRlclBsYW50U2l0ZShkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvcGxhbnQvc2l0ZXNcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YVxyXG4gIH0pO1xyXG59XHJcblxyXG4vKlxyXG7pppbpobXmsLTotYTmupDmn6Xor6JcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNvdXJjZVN0YXQoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL2NvbW1vbi9yZXNvdXJjZVN0YXRcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5rC05Yqf6IO95Yy65YiX6KGoXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXRlckZ1bmN0aW9uTGlzdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvY29tbW9uL3dhdGVyRnVuY0xpc3RcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YVxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmsLTlip/og73ljLror6bmg4VcclxuZXhwb3J0IGZ1bmN0aW9uIHdhdGVyRnVuY3Rpb25EZXRhaWwoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL2NvbW1vbi93YXRlckZ1bmNEZXRhaWxcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YVxyXG4gIH0pO1xyXG59XHJcblxyXG4vKlxyXG7pppbpobXmtonmsLTmsaHmn5PmupBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnZvbHZlV2F0ZXIoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3BvbGx1dGlvbi9zdGF0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qXHJcbummlumhtea2ieawtOaxoeafk+a6kOivpuaDhVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNld2FnZURldGFpbChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvcG9sbHV0aW9uL3Nld2FnZURldGFpbFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vKlxyXG7mjpLlj6Por6bmg4Ut5o6S5p+l5YiX6KGoXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V3YWdlUGNEZXRhaWwoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3BvbGx1dGlvbi9zZXdhZ2VQY0RldGFpbFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vKlxyXG7mjpLlj6Por6bmg4Ut5rqv5rqQ5YiX6KGoXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V3YWdlU3lEZXRhaWwoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3BvbGx1dGlvbi9zZXdhZ2VTeURldGFpbFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vKlxyXG7mjpLlj6Por6bmg4Ut55uR5rWL5YiX6KGoXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V3YWdlSmNEZXRhaWwoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3BvbGx1dGlvbi9zZXdhZ2VKY0RldGFpbFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vKlxyXG7mjpLlj6Por6bmg4Ut5pW05rK75YiX6KGoXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V3YWdlWnpEZXRhaWwoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3BvbGx1dGlvbi9zZXdhZ2VaekRldGFpbFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vKlxyXG7mtonmsLTmsaHmn5PmupDliJfooahcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2xsdXRpb25MaXN0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi9wb2xsdXRpb24vc3N3cnlsYlwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vKlxyXG7pppbpobXmtonmsLTmsaHmn5PmupDliJfooah0YWLmgLvmlbBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXdhZ2VTdGF0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi9wb2xsdXRpb24vc2V3YWdlU3RhdFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vKlxyXG7mtYHln58t5rKz6YGT5L+h5oGv57uf6K6hXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcml2ZXJDb3Vyc2VTdGF0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9CYXNpY0RhdGEvcml2ZXJDb3Vyc2VTdGF0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qXHJcbua1geWfny3msrPpgZPmg4XlhrVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByaXZlckNvdXJzZUxpc3QoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL0Jhc2ljRGF0YS9yaXZlckNvdXJzZUxpc3RcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLypcclxu5rWB5Z+fLeagueaNrua1geWfn+afpeivouays+mBk+S4i+aLieahhlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHdhdGVyTGlzdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvYmFzaW4vd2F0ZXJMaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ2dBQUFBb0NBWUFBQUNNL3JodEFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQVNiU1VSQlZGaUZ4WmxMYUI1VkZNZC81MllpdUdpSjJ5UW02d3A1dEltVnFLRUJGMTNVQ0NKS3dTYm9wZ0VWVEhXakMwSGNTUmZKb3NGR1VldGJzbEtESWxSOEVHelZwSVlrdmxaVklvMHZoRWhXVW5PUGk1azczNTMzZko4cEhoaSt1VFAzbnNmL2Y4NmRNL01KTmVYNFc5cjVUOEM0Z1ZFUitqRDBHS0ZEQkVSQVRQU2JQZy9IMnlKc2lyQWh3dEoxN1N5ZXVWMjI2dGlWcWdsM3Y2a2p3TFFJOTZVZE1Qbk8xQnFyc21BTXMvTmpjckVsQjRmbXRiM3JlbVpFZUxoWjQzVURpV1NPZlp4NmZsaXUxbmJ3emhkMUFNT3JJdlRYY3FaRng5MkJzaTd0VE02UHlscWxnMGRmMEZFRDc0dGhYNVV6VFZOY2NnL1lhUk9PUFRjbVM0VU9IajJyQXdoTElwRnplMlJjQkV3TlhjQ09CSXo2U01ZT0RzMXIrdzI3cklqUVg0bk1mNkcwYWk2c3M1OWhsNU54cXU2L3lveGErbFhCS2xnYkhYbGoyemhVUWExM2FPbzhQUzZhNjhiUXp3NHpDUVNQek9pSU1WellVeVNhb1Rqbm5qSGNPajhtRncyQUt0T2x5TFNDUkdwdHM0ellYYVlCNUxabnRkTUVYS2xDWXFBcmVSMnZrZ2x6SjU0TDNsb2FjLzIxUC94WmphSmF1Z0lNNDJvanNnM2d6bFBqMCtONU8yYnJjdis3bnEwQ3UySVlEOVF5cWc0QjYrVUFLUVdSdkw3U1FNUWg1UkRNWE0rNWYrOU40WFhyMmZMdENtQ2NYV1Uwc0x2MGljbDZieVdwd01rcnkxbGFUQk9GNHh4VWpSVG1vR2dienZZRlZ1a3hlVkNibElKSVhEcE1IRzRPeFc5L2grLyt5T3Fwc05zVHFLWERtaXpGWWhzRjRGT3NHaGJNeERCTnlWTWZoYlE2c2JaQmFkcHVYSHlHamtDVndzTHdIZmNWci80TWQ1ekpVdnpoRkt6L0FrOStVRXkzSDJpUjNkaTJoVUNMS0UxWFZwcWFuRURDQ2VIZUZxT1NRaVpYVDlxdU53NWlxQXNVR28vZU9QS2lRTkxHaS9MTHA3aklialEvU1hGT05EWVZ1UnNmdkJFTzltUUxRNEVUaDVMWE5uNkZiMzZMOVBxQmx0a2xqK0lha2FzTng0UGQ4TUF0WkdTZ016eDhlZVByTURjTEtTN0p4U3pGcWNveWJrRXE4cGMraDVjdkpJdmhrMGRoN1FvOC9rNDRIdXh1T0NaTlV1d2VGcWFxQ1hBUGNWOXgwVVBmQmFBV0ptNkcwM2ZCaWFHa2JqL1FxbWJFRmxKY1ZGa2V4Ym0wdUdVSzU3NEFGQ1lQaDZpMlJMR0J3R3J4WmhsRFhUZTVVOGJQZlpsRUswRnhudDNVMkNRUUxFSFJwcXI0NUJFWTZrMDY1ZEFaN0liWmU1TDNCcnBnYlF0ZVc4NUJzQVJGSzJ3SGljaktZUGNVWC9vSkR2V0NhTU1SVlZqZDlCeFRiK3Z4bXRhTWcyV3BKV3dHWmJ0K0VjVXJQNFpPdHZLS0VETlJKN1dVamZKSEhlUlNYS1F3YmpES0dLbWkyRnVyc0JTVVZtVU94YXZQc0NkU0o3VkVXRXhTbk5mK1JHTW5aejhPZnpNOUlMSFMvUHZSOVFkSElwL0tVc3VBS0F2dm5aU3Rlbzg2Z2VYTG9lSzU4K1c1VnZYU1A5Z2QvbFoxVVFLekFOSTdwZnAvZlVVb2VWZWVPLytRUEFKdW95NmpPTlgrVkRZVU5SbnhPNldFWGNQNlh3R25YRXJWN21aYysxTVZTS0xCcU5nZGN1enVBSk9YcGhyZkNnT3JCYStZVFNDUlhsdTFGZVVGb3NLT0VZNTlPcDM4Umhpb3piNWlsclUvMXlRUVlWM2FtUHpzc2V3SHpQcmR6TFVMWk83dkRrNzV0Q1lkVkw0SER0UkNvbVkrMVFwRVdKQTJacjk2b3Z3amVxQndITXZiS2h3bzY2eHozNVhyQjdLTnNpbXdvYkJrRFl1clQ5ZjdHK0pmVkJEUmRvSFJRKzRBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ2dBQUFBb0NBWUFBQUNNL3JodEFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQVIyU1VSQlZGaUZ0WmxOYUIxVkZNZC81MllpdUdpcEN5MjhhUGFseVV1bDdhTFdoOWxJb0RVTE42V3JvQXNyK0VVaVhlaEdCQlhzS2xrWTJpaENjV0ZLMEUyRDJJVVdOV0JGckRVdmZpMGxtdmlCaTBoV1VuT1BpNWw1Nzg2ZE94L3ZKUjI0ek56TVBWLy8vem5uM2pjUmFsNW5GN1h4WDhTa2daWUlveGlHalhCQUJFUkFUSEwzbitQNWxnanJJcXlKc0hMWElNdHZQU3liZGV4SzFZTEgzOWNUd0xRSVozd0hUTmlaV25OVmxveGhibUZjYnZUbDRORUZIUnk2bTFrUm51M1ZlTjFBa211ZWZjeThmVXh1MTNid3NYZDFETU43SWpSck9kT240K2xBYWNzZ1V3c3RXYTEwY09JZGJSbjRTQXo3cXB6cG1lS1NkOEQyZ0hENjRyaXNGRG80Y1VuSEVGWkVFdWYyeUxnSW1CcTZnRzJKYUxsSWRodzh1cUNEOSt6d2pRak5TbVIyUTJuVldtaXpuMk5wVG5aU2RmOXRadFhTVkFXcllHMHlRblBiSGFxZzFobnFQZnZ6b3JYcEhKcHNNNXRCOEpGWlBXRU1YKzRwRXIxUUhIaG5EQTh0ak1zTkE2REtkQ2t5TlpBNGZHODhpbERzbFJHN3d6U0FuTHlnRFJPeDBXOCttZVQ1alFrWU9RaXZmQW8vL0xVM3VhbVdJWU5oc2xhT0ZLQ1lScjZZMU4yWmtRQXlDV3E5NXFZWUpvMWFXaUhZZTAzdTlpYXMvUkdqZVBpKzhOb1FwYVdCN05DSzdBNmpZcEp5a2FTdUxWZ0g2aWVPdzVHaGJHTVMvOW01WG44VXZ2L1RhYmJ1Z3JpVjhPUGY4T0hQc1MzWExwTFlOaUF3R2xsbDJBUVdkUnFRaGJFR2pBM1IwelZ5c0hyTkJ4VjJFWWJsK0d1cXBadDhEKzNsNDZkZzdYZDQrZHJ1VzFXNldVU3FqdmMrMUNiNXMzVVVXRStoalpXbFBDdHgvbmhJaE9jRmRqdTJMVVRhcDRKUUlLbUhWc09CcE1pVVVKcWJSOVlXSTVQdUFLbkFreWZod1FleWVaUXBBS0RaZ0F1bnVvaTZ4UVJ4ajd6U0xtZkVEU1JMY1NBYTZ5aFFoU1AzVTNrMUcrWHZPeWxRWnBjUXhVV1VwZ28wdnIyd0JOLzlsay91NjgvRDZnYWN2NXBQL3JFR3ZIa3FVZU9EVXBKS2VZcTl3akNPZ0dvWGdXQmdMa0llTW1xN1FWclhWZ0hGWW1MeFBNVmVOQm1LVXh0cElaQlZtTDdMVWVqSzBnMjBxc0t0RkZGY1ZGa3BndXFnNU1xbVlrcU9FWFhlQjJVTFVpc0tJZUhEYm55S3RhRFhoU2oyWkRzVWgzcXNOemVaSWlsQk1kMGIzUndNOWJwQ2lsMVp2Q0lwUWRFS1cxRmgxdzhwQ0ZIc3loWlJiSjNXVTVRZW9kUVMxcU95cnArak9MVlJVQWkrQTErY2o5c1JkUHZuNmtZSnhiNWRaYTE4cSt1SFlycnJidjBhMzBXNmpsNytLbGxiQTBXRmxTaUlSTUg4NGlkdzZYclhxVUtLRThlZld5Ujhla2tQR0JXcEpjSnlGR29Kb1hsdWt3L05YWW9yak5zQXBSbTd5dExWYzdKWmI2dnpGUllFY3ZNWCtIYTlmcFdXTldtQk9VamJUQjhLUW12UFhRNVFXc0NJdjQxNnV1YXZQUk4vbHF1bU9GWFdKeEpsS05xUVhVUDduNGlaUkZ2OTA0d3RRY0p2RWFiSzhlSkF0b0dwbTA5M3Z4VkdWaE9aWFNEaHk5WTZyWGlCcUxCdGhOT2ZUV2UvRVVhYTlya3FoZVlPQmlLMFpZQ3B6MS9NZjhDc2Y1cTVjNEhNLzN1QUdaZldySVBLVDhDaFdralV6S2RhZ1FoTE1zRGMxeStWZjBTUEZNNWl1YUxDb2JLVGRlNG5abStCYktHc0M2d3ByRmpEOHExWDYvMGI0bi83VXo0ZE00VEV4UUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ2dBQUFBb0NBWUFBQUNNL3JodEFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQVVWU1VSQlZGaUZ4WmxOYkJWVkZNZC81M1pxNGdKU0V6UkFiWW5MRnZzZXBUV0dhb1dOc2tBU0RCVUpIelhwQWhJMXNiaHlKU3pZdUNEdHdpb1ZXWUFHc0VzSmlZbnhzMUVpdElXMkpPNjBsdkRoRHRPVndkN3I0dDc3M3N5OGVUUDNGWWczbWN6Y21YdlArZC8vLzV3NzU4MFRBdHZlODJiOXZ4RTdGZlNMMElXaVhRa3RJaUFDb3R3NWZXMzc5MFJZRkdGZWhNbkhtcm40MFl0eU84U3ZGQTE0N1p6WkFneUxzQ2NOUUdXRENlb2J3NFJTakk1dms4c3JBdGd6YnBwYkgyZEVoTGNiZFI2NkVOZkdXTVdSVDN2bGZqREFWMCtiTW9xeklwU0N3S3dRdUQ4d3pFa3pnK1A5TWxzSWNQc3AwNi9na2loV0ZZRnBXT0tjWjhCU2s3RGprMjB5V1JmZzlwT21qREFwNHNBOUpPY2lvQUpzQVVzUzBSOW5zZ0t3Wjl3MFA3SE1sQWlsUW1ZZVJOS2lzVERIYW5wOVRGWkNkZlY5Um95bVpBeG9BMXE3STZ1dnE0Y3hZSFRzTUtucmRML2VXTitIRWt1TUpCamNPbUsyS01VdkQ1V0pSaVRPZUtZVWZlUGI1TElDTUliaFhHWUNtZGo0SkhTdXlaN2JxQ0o2bVdFQWVlRkRzMTVGM0ZwcFBDbDMzYlVXanI4Q04vNkNvOTg5bk5nMG1sYUZZbWRRaktSWXZEUUUrOHF4bGNkMmd6Z3pBNTN3NVFCMHJHbGNFVkhzVkViVG4wVjdub0g5bXkyUXluMTM5aTArM2lNL3VoVjJkOVJLbXBXUUZWL0w5Q3U5VEZjVytub0d1dGJCZ1I3cjlQUHBtRUZUQzg0WXVEQUhIM3hybjczZUNRTWR4U3pHd0hZcGJXaHZaSXM0Mk92QVRTVU5lb0NRVElROXo4TEdwMUlnTzRORHFWMFpUVXU5eklwUEtxK0hFN3VnM0FwbnI4TFpLN1VHTFlYVmVjZGZocjBsKzN6K2JoSmt4NXI4akhhMld5SmpBTzEyUkhGYnQrdHI1VzVyR05sdGpaLzVGYzVjaVdXZXRwbGNrUmpZdHduMmRkdisrVm00TUd2SGVwQnZkTVVXbGVHMzRsdUQ5Qnd6Sm5STDZHNkQyVnZaVzhUZ2MxWDVBZWJ1d0xucmNPTnVjbXpOYTdUQWI2UjFsWW5FSUYxOUE5akFnbXVMVk9zNERadmE0TTNuYmJmYzZvRGRoaTltWVA1TzFWYUZHZVV1ZGEyZkdyOXVmRkxpbVBPS1FUZGg4d1o3SHVxelE3cmJxR216dHl4enBiVlFXb2N2byt6WkZnS2NuODJRTk11dlcwaGtkTWFFVkgvc0FHeHVyd1dVYnVYV0twTlpiZjVPTE5zRC9KSXBjU3d4dk1TZlRVTFBCaXN4eW9JZDZvTjNKK0M2ajhtQ2VQcjZrRTBnWFVmU21yNnlXR3NsVHExR2E1ajZBNllYcWc2OXZPV25yVk12b1g4dlF3d2N6cFpyUm1kTG1zV3Fsbm9TRnhsd012bDRERzV1MzFNNWtxWnhSTm9rSmMyaVBXM1F4OUhwbitIYVRmZklaeXdrWk1hZFQreXk2ektPbVhRb1pmVlZJa2x5V0V3YjlBQ25GeHhBYjdEZWZ1WnRtWmpFQVN4cTRWNVVOeWJ5RExqMjhmNEdKYVpBNGpRT1lkRktYSkJaS21YQU0zanFKNWhackNhREtEc3VTL0xSZ1FDSjAzNE44OGtrU2JNSVNZbWRBUTl3YWdGbS9reEttdnNWSVVUaW1GOERrMUVqTVZHNWRnQVB2ZVNNU2V3VUM0RjAzMHZzQzR5aTBCTGhZbExpbk14U01RUHh5bVZtb1NxcnoxZ3ZhL3grZDF1eWd0RVpraWI4R2lhK09pUzNnMTUxYVlOWGY0ZmVaK0RrOThrTlBFL2k3amE0ZmpORDRqb3NDb3dDeUliRHh2eGZYeEZ5Zml1UGZmT1d2QU4rbzg2VE9GWCtoQVIzMEZZVnE1UVNmaFZ6ZjBjYzhURWJKbkZXSFZkbklaVWFNdlMxbWZTN0JBeE9INjUrSzR5MGNYTWVnSW4wWEYwSGVONUNqTENraEIwL0RDZS9FVWFWamJQSW9IcUVDeEhtcEluQkg5K3IvWUFaWHMwOHVvV00vZFBDa2Jpc1NZQ0czNENPSUNZYXFPTUNKSjZRSmthdnZKLy9FVDB5c0JmTkJTTjA1RlhXOForWUsxaklQUXlMQXZNR0pyWGk0clZqWVg5RC9BZjgwSnFuT0U1MUxBQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2NpdHlBaXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJlYjRiNDQ2JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NpdHlBaXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jaXR5QWlyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9jaXR5QWlyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJlYjRiNDQ2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMmViNGI0NDZcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMmViNGI0NDYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMmViNGI0NDYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMmViNGI0NDYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2NpdHlBaXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJlYjRiNDQ2JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJlYjRiNDQ2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvaG9tZVBhZ2UvY29tcG9uZW50cy9jaXR5QWlyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2l0eUFpci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2l0eUFpci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaXR5QWlyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJlYjRiNDQ2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2l0eUFpci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmViNGI0NDYmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2NpdHlXYXRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YzgwYjFmMmMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY2l0eVdhdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vY2l0eVdhdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9jaXR5V2F0ZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5pbXBvcnQgc3R5bGUxIGZyb20gXCIuL2NpdHlXYXRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD1jODBiMWYyYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImM4MGIxZjJjXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2M4MGIxZjJjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2M4MGIxZjJjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2M4MGIxZjJjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9jaXR5V2F0ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWM4MGIxZjJjJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2M4MGIxZjJjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvaG9tZVBhZ2UvY29tcG9uZW50cy9jaXR5V2F0ZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaXR5V2F0ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NpdHlXYXRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaXR5V2F0ZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2l0eVdhdGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPWM4MGIxZjJjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2l0eVdhdGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jODBiMWYyYyZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=