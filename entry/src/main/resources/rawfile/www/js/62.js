(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[62],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airExamineSiteList/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airExamineSiteList/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_airUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/airUtils.js */ "./src/utils/airUtils.js");
/* harmony import */ var _api_air_quality_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/air_quality.js */ "./src/api/air_quality.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      // tabArr: ['国考', '其他'],
      tabArr: ['浓度', 'IAQI'],
      tabIndex: 0,
      dataType: '1',
      factor: 'AQI',
      order: '1',
      desInfo: '',
      optionDataType: [{
        text: '小时数据',
        value: '1'
      }, {
        text: '日数据',
        value: '2'
      }],
      tabDataTypeIndex: 0,
      optionFactor: [{
        text: 'AQI',
        value: 'AQI'
      }, {
        text: 'PM2.5',
        value: 'PM25'
      }, {
        text: 'PM10',
        value: 'PM10'
      }, {
        text: 'SO2',
        value: 'SO2'
      }, {
        text: 'NO2',
        value: 'NO2'
      }, {
        text: 'CO',
        value: 'CO'
      }],
      optionOrder: [{
        text: '排序低到高',
        value: '1'
      }, {
        text: '排序高到低',
        value: '2'
      }],
      areaList: [],
      //列表数据
      xzqh: '',
      loading: false,
      siteType: null
    };
  },
  mounted: function mounted() {
    this.xzqh = this.$route.query.xzqh;
    this.tabIndex = Number(this.$route.query.queryFlag);
    this.siteType = this.$route.query.type;
    this.queryList();
  },
  filters: {
    getColor: function getColor(key) {
      var status = "";

      if (key == null) {
        status = 'hour_white_bg';
      } else if (key <= 50) {
        status = 'hour_green_bg';
      } else if (key <= 100 && key > 50) {
        status = 'hour_yellow_bg';
      } else if (key <= 150 && key > 100) {
        status = 'hour_orange_bg';
      } else if (key <= 200 && key > 150) {
        status = 'hour_red_bg';
      } else if (key > 200) {
        status = 'hour_deepred_bg';
      } else {
        status = 'hour_white_bg';
      }

      return status;
    }
  },
  methods: {
    //浓度/Iaqi切换
    changeTab: function changeTab(index) {
      this.tabIndex = index;
      this.queryList();
    },
    changeDataType: function changeDataType(index) {
      this.tabDataTypeIndex = index;
      this.queryList();
    },
    //查询列表数据
    queryList: function queryList() {
      var _this = this;

      this.loading = true;
      this.areaList = [];
      var params = {
        dateType: this.tabDataTypeIndex === 0 ? '1' : '2',
        //小时数据1 日数据2
        itemType: this.factor,
        //因子
        order: this.order,
        //排序从低到高1 从高到低2
        divisionName: this.xzqh,
        type: this.siteType === '国控' ? '1' : '2',
        //国控1 其他2
        aqi: this.tabIndex === 0 ? '' : 'iaqi'
      };
      Object(_api_air_quality_js__WEBPACK_IMPORTED_MODULE_2__["airQualitySiteList"])(params).then(function (res) {
        _this.areaList = res.data.data;
        _this.desInfo = res.data.text + '，' + res.data.info;
        _this.loading = false;
      });
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
    jugdeAQIColor: function jugdeAQIColor(value) {
      return Object(_utils_airUtils_js__WEBPACK_IMPORTED_MODULE_1__["AQIJugdeTextColor"])(value);
    },
    onCalenderBgColor: function onCalenderBgColor(yzName, count) {
      return Object(_utils_airUtils_js__WEBPACK_IMPORTED_MODULE_1__["getCalenderBgColor"])(yzName, count);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airExamineSiteList/index.vue?vue&type=template&id=53c707a0&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airExamineSiteList/index.vue?vue&type=template&id=53c707a0&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        attrs: { title: "空气质量站点数据", "left-arrow": "", fixed: "" },
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
          _c(
            "div",
            { staticClass: "tab-wrapper" },
            _vm._l(_vm.tabArr, function (item, i) {
              return _c(
                "div",
                {
                  class: ["tab-item", i === _vm.tabIndex ? "active" : ""],
                  on: {
                    click: function ($event) {
                      return _vm.changeTab(i)
                    },
                  },
                },
                [_vm._v(_vm._s(item) + " ")]
              )
            }),
            0
          ),
          _c(
            "div",
            { staticClass: "quality-info " },
            [
              _c("van-icon", { attrs: { name: "info-o" } }),
              _vm._v(" " + _vm._s(_vm.desInfo) + " "),
            ],
            1
          ),
          _c(
            "div",
            { staticClass: "tab-data-wrapper" },
            _vm._l(_vm.optionDataType, function (item, i) {
              return _c(
                "div",
                {
                  class: [
                    "tab-data-item",
                    i === _vm.tabDataTypeIndex ? "active" : "",
                  ],
                  on: {
                    click: function ($event) {
                      return _vm.changeDataType(i)
                    },
                  },
                },
                [_vm._v(_vm._s(item.text) + " ")]
              )
            }),
            0
          ),
          _vm.loading
            ? _c(
                "van-loading",
                {
                  staticStyle: { "text-align": "center", margin: "20px 0" },
                  attrs: { size: "20px" },
                },
                [_vm._v("加载中...")]
              )
            : _vm._e(),
          _vm._l(_vm.areaList, function (item) {
            return _c(
              "div",
              {
                staticClass: "site-box",
                on: {
                  click: function ($event) {
                    return _vm.goDetailPage(item)
                  },
                },
              },
              [
                _c("div", { staticClass: "site-title fs" }, [
                  _c("div", { staticClass: "site-name" }, [
                    _c("img", {
                      attrs: { src: __webpack_require__(/*! @/assets/query/location.png */ "./src/assets/query/location.png") },
                    }),
                    _c(
                      "span",
                      {
                        staticClass: "name",
                        staticStyle: {
                          "text-decoration": "underline",
                          cursor: "pointer",
                        },
                      },
                      [_vm._v(_vm._s(item.siteName))]
                    ),
                    _c(
                      "span",
                      {
                        staticStyle: { "font-weight": "normal" },
                        style: _vm.jugdeAQIColor(item.aqi),
                      },
                      [
                        _vm._v(
                          _vm._s(item.value) + "(" + _vm._s(item.aqi) + ")"
                        ),
                      ]
                    ),
                  ]),
                  _c(
                    "span",
                    {
                      staticStyle: {
                        "font-size": "12px",
                        color: "rgba(37, 57, 111, 0.5)",
                      },
                    },
                    [_vm._v(_vm._s(item.monitoringTime))]
                  ),
                ]),
                _vm.tabDataTypeIndex === 0
                  ? _c("div", { staticClass: "site-statu" }, [
                      _c("div", { staticClass: "site-monitor-box" }, [
                        _c("img", {
                          attrs: { src: __webpack_require__(/*! @/assets/query/湿度.png */ "./src/assets/query/湿度.png") },
                        }),
                        _vm._v(" 湿度：" + _vm._s(item.humidity) + "% "),
                      ]),
                      _c("div", { staticClass: "site-monitor-box" }, [
                        _c("img", {
                          attrs: { src: __webpack_require__(/*! @/assets/query/风向.png */ "./src/assets/query/风向.png") },
                        }),
                        _vm._v(" 风向：" + _vm._s(item.windDirection) + " "),
                      ]),
                      _c("div", { staticClass: "site-monitor-box" }, [
                        _c("img", {
                          attrs: { src: __webpack_require__(/*! @/assets/query/风速.png */ "./src/assets/query/风速.png") },
                        }),
                        _vm._v(" 风速：" + _vm._s(item.windSpeed) + " "),
                      ]),
                      _c("div", { staticClass: "site-monitor-box" }, [
                        _c("img", {
                          attrs: { src: __webpack_require__(/*! @/assets/query/气压.png */ "./src/assets/query/气压.png") },
                        }),
                        _vm._v(" 气压：" + _vm._s(item.pressure) + " "),
                      ]),
                      _c("div", { staticClass: "site-monitor-box" }, [
                        _c("img", {
                          attrs: { src: __webpack_require__(/*! @/assets/query/温度.png */ "./src/assets/query/温度.png") },
                        }),
                        _vm._v(" 温度：" + _vm._s(item.temperature) + "℃ "),
                      ]),
                    ])
                  : _vm._e(),
                _c("div", { staticClass: "site-monitor" }, [
                  _c(
                    "div",
                    {
                      style:
                        item.pm25 === "-"
                          ? _vm.onCalenderBgColor("", "")
                          : _vm.onCalenderBgColor("pm25", item.pm25),
                    },
                    [_vm._m(0, true), _c("span", [_vm._v(_vm._s(item.pm25))])]
                  ),
                  _c(
                    "div",
                    {
                      style:
                        item.pm10 === "-"
                          ? _vm.onCalenderBgColor("", "")
                          : _vm.onCalenderBgColor("pm10", item.pm10),
                    },
                    [_vm._m(1, true), _c("span", [_vm._v(_vm._s(item.pm10))])]
                  ),
                  _c(
                    "div",
                    {
                      style:
                        item.so2 === "-"
                          ? _vm.onCalenderBgColor("", "")
                          : _vm.onCalenderBgColor("so2", item.so2),
                    },
                    [_vm._m(2, true), _c("span", [_vm._v(_vm._s(item.so2))])]
                  ),
                  _c(
                    "div",
                    {
                      style:
                        item.no2 === "-"
                          ? _vm.onCalenderBgColor("", "")
                          : _vm.onCalenderBgColor("no2", item.no2),
                    },
                    [_vm._m(3, true), _c("span", [_vm._v(_vm._s(item.no2))])]
                  ),
                  _c(
                    "div",
                    {
                      style:
                        item.co === "-"
                          ? _vm.onCalenderBgColor("", "")
                          : _vm.onCalenderBgColor("co", item.co),
                    },
                    [_vm._m(4, true), _c("span", [_vm._v(_vm._s(item.co))])]
                  ),
                  _c(
                    "div",
                    {
                      style:
                        item.ozone === "-"
                          ? _vm.onCalenderBgColor("", "")
                          : _vm.onCalenderBgColor("OZONE", item.ozone),
                    },
                    [_vm._m(5, true), _c("span", [_vm._v(_vm._s(item.ozone))])]
                  ),
                ]),
              ]
            )
          }),
        ],
        2
      ),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "monitor-unit" }, [
      _c("span", { staticStyle: { color: "rgba(37, 57, 111, 1)" } }, [
        _vm._v("PM2.5"),
      ]),
      _c("span", [_vm._v("ug/m³")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "monitor-unit" }, [
      _c("span", { staticStyle: { color: "rgba(37, 57, 111, 1)" } }, [
        _vm._v("PM10"),
      ]),
      _c("span", [_vm._v("ug/m³")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "monitor-unit" }, [
      _c("span", { staticStyle: { color: "rgba(37, 57, 111, 1)" } }, [
        _vm._v("SO2"),
      ]),
      _c("span", [_vm._v("ug/m³")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "monitor-unit" }, [
      _c("span", { staticStyle: { color: "rgba(37, 57, 111, 1)" } }, [
        _vm._v("NO2"),
      ]),
      _c("span", [_vm._v("ug/m³")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "monitor-unit" }, [
      _c("span", { staticStyle: { color: "rgba(37, 57, 111, 1)" } }, [
        _vm._v("CO"),
      ]),
      _c("span", [_vm._v("mg/m³")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "monitor-unit" }, [
      _c("span", { staticStyle: { color: "rgba(37, 57, 111, 1)" } }, [
        _vm._v("O3"),
      ]),
      _c("span", [_vm._v("ug/m³")]),
    ])
  },
]
render._withStripped = true



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

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var doesNotExceedSafeInteger = __webpack_require__(/*! ../internals/does-not-exceed-safe-integer */ "./node_modules/core-js/internals/does-not-exceed-safe-integer.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/environment-v8-version */ "./node_modules/core-js/internals/environment-v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport('concat');

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        doesNotExceedSafeInteger(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
});


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airExamineSiteList/index.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airExamineSiteList/index.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".van-dropdown-menu__title {\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.8);\n}\n.van-dropdown-menu__bar {\n  background-color: transparent;\n  height: 28px;\n  box-shadow: none;\n}\n.van-dropdown-menu__item {\n  margin-right: 10px;\n  background-color: #f6f6f6;\n  border-radius: 6px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airExamineSiteList/index.vue?vue&type=style&index=1&id=53c707a0&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airExamineSiteList/index.vue?vue&type=style&index=1&id=53c707a0&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @/assets/pollution-tab-bg.png */ "./src/assets/pollution-tab-bg.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".tab-wrapper[data-v-53c707a0] {\n  display: flex;\n  align-items: center;\n  margin: 16px 0 10px;\n}\n.tab-wrapper .tab-item[data-v-53c707a0] {\n  width: 20%;\n  text-align: center;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 14px;\n}\n.tab-wrapper .active[data-v-53c707a0] {\n  color: rgba(18, 18, 54, 0.8);\n  font-weight: bold;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n  background-position: center bottom;\n  background-size: 27px 8px;\n}\n.tab-data-wrapper[data-v-53c707a0] {\n  display: flex;\n  align-items: center;\n  margin: 12px 15px;\n}\n.tab-data-wrapper .tab-data-item[data-v-53c707a0] {\n  margin-right: 20px;\n  padding: 6px 16px;\n  border-radius: 50px;\n  background: rgba(63, 123, 255, 0.1);\n  text-align: center;\n  color: #3f7bff;\n  font-size: 14px;\n}\n.tab-data-wrapper .active[data-v-53c707a0] {\n  color: #fff;\n  background: #3f7bff;\n}\n.quality-info[data-v-53c707a0] {\n  display: flex;\n  align-items: center;\n  margin: 10px 15px 0px;\n  padding: 8px 13px;\n  border-radius: 4px;\n  background: rgba(255, 141, 26, 0.05);\n  border: 1px solid rgba(255, 141, 26, 0.2);\n  font-size: 12px;\n  color: rgba(18, 18, 54, 0.5);\n}\n.quality-info span[data-v-53c707a0] {\n  font-weight: bold;\n}\n.site-box[data-v-53c707a0] {\n  margin: 4px 8px;\n  box-shadow: 0 2px 2px #ddd;\n  background: #fff;\n  border-radius: 10px;\n}\n.site-box .site-title[data-v-53c707a0] {\n  padding: 7px 10px;\n  border-bottom: 1px solid rgba(37, 57, 111, 0.1);\n}\n.site-box .site-title .site-name[data-v-53c707a0] {\n  display: flex;\n  align-items: center;\n  font-size: 14px;\n  font-weight: bold;\n  color: #25396F;\n}\n.site-box .site-title .site-name img[data-v-53c707a0] {\n  width: 9px;\n  padding-right: 10px;\n}\n.site-box .site-title .site-name .name[data-v-53c707a0] {\n  display: inline-block;\n  max-width: 150px;\n  height: 17px;\n  margin-right: 5px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.site-box .site-statu[data-v-53c707a0] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.site-box .site-statu .site-monitor-box[data-v-53c707a0] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 33%;\n  margin-top: 10px;\n  font-size: 12px;\n}\n.site-box .site-statu .site-monitor-box img[data-v-53c707a0] {\n  width: 12px;\n  height: 12px;\n}\n.site-box .site-monitor[data-v-53c707a0] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 5px 9px;\n  font-size: 14px;\n}\n.site-box .site-monitor div[data-v-53c707a0] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 29%;\n  margin-top: 5px;\n  padding: 0 7px;\n  border-radius: 2px;\n  color: rgba(37, 57, 111, 0.5);\n}\n.site-box .site-monitor .monitor-unit[data-v-53c707a0] {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  font-size: 10px;\n}\n\n/*.level1Bg {*/\n/*  background: rgba(0, 228, 0, 0.05);*/\n/*}*/\n/*.hour_white_bg {*/\n/*  // border: 1px solid rgba(204, 204, 204, 0.3);*/\n/*  background: linear-gradient(228.1deg, rgba(4, 199, 4, 0.05) 0%, rgba(255, 255, 255, 1) 100%);*/\n/*  > span {*/\n/*    &:last-child {*/\n/*      color: rgba(204, 204, 204, 1);*/\n/*    }*/\n/*  }*/\n/*}*/\n/*.hour_green_bg {*/\n/*  // border: 1px solid rgba(4, 199, 4, 0.3);*/\n/*  background: linear-gradient(228.1deg, rgba(4, 199, 4, 0.05) 0%, rgba(255, 255, 255, 1) 100%);*/\n/*  > span {*/\n/*    &:last-child {*/\n/*      color: rgba(4, 199, 4, 1);*/\n/*    }*/\n/*  }*/\n/*}*/\n/*.hour_yellow_bg {*/\n/*  !*border: 1px solid rgba(255, 217, 0, 0.3);*!*/\n/*  background: linear-gradient(228.1deg, rgba(255, 191, 0, 0.05) 0%, rgba(255, 255, 255, 1) 100%);*/\n/*  >span {*/\n/*    &:last-child {*/\n/*      color: rgba(255, 191, 0, 1);*/\n/*    }*/\n/*  }*/\n/*}*/\n/*.hour_orange_bg {*/\n/*  !*border: 1px solid rgba(255, 126, 0, 0.3);*!*/\n/*  background: linear-gradient(228.1deg, rgba(255, 126, 0, 0.05) 0%, rgba(255, 255, 255, 1) 100%);*/\n/*  >span {*/\n/*    &:last-child {*/\n/*      color: rgba(255, 126, 0, 1);*/\n/*    }*/\n/*  }*/\n/*}*/\n/*.hour_red_bg {*/\n/*  // border: 1px solid rgba(255, 0, 0, 0.3);*/\n/*  background: linear-gradient(228.1deg, rgba(255, 0, 0, 0.05) 0%, rgba(255, 255, 255, 1) 100%);*/\n/*  > span {*/\n/*    &:last-child {*/\n/*      color: rgba(255, 0, 0, 1);*/\n/*    }*/\n/*  }*/\n/*}*/\n/*.hour_deepred_bg {*/\n/*  // border: 1px solid rgba(153, 0, 76, 0.3);*/\n/*  background: linear-gradient(228.1deg, rgba(4, 199, 4, 0.05) 0%, rgba(255, 255, 255, 1) 100%);*/\n/*  > span {*/\n/*    &:last-child {*/\n/*      color: rgba(153, 0, 76, 1);*/\n/*    }*/\n/*  }*/\n/*}*/", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airExamineSiteList/index.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airExamineSiteList/index.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airExamineSiteList/index.vue?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("7e61952c", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airExamineSiteList/index.vue?vue&type=style&index=1&id=53c707a0&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airExamineSiteList/index.vue?vue&type=style&index=1&id=53c707a0&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&id=53c707a0&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airExamineSiteList/index.vue?vue&type=style&index=1&id=53c707a0&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5dafa724", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/pollution-tab-bg.png":
/*!*****************************************!*\
  !*** ./src/assets/pollution-tab-bg.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAQCAYAAACycufIAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADnSURBVEiJ3ZTRacRADETfaNekgOvheshfwlWVj4ATDNeUA5c20sMVEIitfKwVu4A7TDSw7EqsBg0SIzY4vfojzsGYzCcqokoUoLqoQGWaK1YKLDFzu90K2sSy9mf2StRKBby958ixcin+a8lp5WPhi/rg803cjiF/G4eu15+w3o/8cAT49+IA5M9GXjyt4iYOOzZyF6ziPJe4ceh6Azi9eCphgTa5h1xTAy6wXctMkH9CiEtoJhDikpkJmddyHLoLgGV1SgDL6pSQcS0XpwQwvrnu2cs9YR9nXal87d3ITeD+Pg5dH+EvPNFNNRNXy44AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/query/location.png":
/*!***************************************!*\
  !*** ./src/assets/query/location.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAALBAMAAABfd7ooAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAPUExURUR7/EdwTER8+0R8+0R7/PyCLQIAAAAEdFJOU78AgEC73eGNAAAAQElEQVQI1x3KwQ2AMAwDQD8ygB0WCFIHAIkBSuv9ZyLic6+Dap4E7UWMWb4Q7+GCd7bhaB/bRP5Hw/2VS61u8QMsHwiO6X+H0gAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/query/气压.png":
/*!*********************************!*\
  !*** ./src/assets/query/气压.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAXCAYAAAD+4+QTAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIHSURBVEiJrVXLkaMwFOwnOwP7ap8MKQxwsZzJZIAyMGSgiWBDsebCEIOHw1b57BT89oAeoxEGe2e3q6gCIXW/vwgPkBamAgBm3gPQftkBABG9325wXWvdHAfNkTPzMVoOyXS4zkz1lNhIZJcZTcSnYQNRfW5sFf4PySJj3OfH22FWJBQQcr92jCwfGRCIjYQGkVCAmQ5da12Sl6eA3BHRu+wPcyRiIhR7v/yyqnc5FiCiei65Qpzk5f7c2ENaGDDzMS0MQiHsMqOTvORdZjQAJHl5SvKSpbIeIS1MleQle8OGb/m/AIDV5uUXgN9d+1Z74tfY5TlcL61bb3MC8Lre5nRubLXaZNV6m9P10jrlrdfMVPfhGsf0Gfj9zucKRFRL1Sml+uR1rXVxeCR84bc894S8oXqXGX279T21y4xWXtnFVkm1SW7SwlREfJLnXr6kOJSCDt/VlPtdax0zHcTtuPuZ+TjtUR8ygUJfpkP9E/W5EaFzYytmGnXxDMJ+csy8XyJI1t8m+x6ibtcAnPKqeu5g11oXegj0Hs9NXwklM9XLqU0xfDEMpJ8f8+M9xCCSFqZ6FK5H90YIGVNda506N7YKG+d/QBpcQvythJ+dVY8gXkhkFsDX7GHmo8ybnwqEs094FvLzemndapNp+CH3E6Gp+2R0/co9IvfKvwrMHniWPDwzde4PZlFqVmB1Zq4AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/query/温度.png":
/*!*********************************!*\
  !*** ./src/assets/query/温度.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIlSURBVFiF3VfNVeMwEJ4vuxUAR+DtwXEL2L4gStkKog5sd+BUsKVYuRDXQPIe7IMrlJDZQySeUCxbihMO+51ieTzzZf4Fmoi0kBUz3xORAFDvdqS2XaNCv8cJjJdEpACs9G9ixkMMiaONz/MFp4Ws7PN5vmjn+aIN1fPTPUgyKWYzEr4Pnh6bauiZGTXAxxFIMikAbpn9HySZtGOs3PfbrlHzfBFq/9ADAGqdVL04dWy/ENDKT2ogioANq7w+AWDlxtySLY/J/l4CSSaFKSkbzCyI6IBAn+wkAtuuUWkha/d8txsOj66eQZkgAkSH5XUueAnYMI3FlwNTMBsTSDIpiEgQkWDmUj9/H4Ft1ygA9b4/nL7HB4XgnPkw6oFz4/8l4I5pH4JywIaemCUzC2Y89MnogVamhRzNn2gPmFk/VBFPj01lkRgkEOUBPXRos172/nOXRFpIMye8JH7EELi4vmsB1O+vnSLah+Py5u4PEf3SIuLqNod5//7aqcubTFxc538/3rqXPp3BITCutGMKcEn0dX1zu6Ve0bzTcmoViFGJEcQSUEFKraV2rHUHE9C7gHCOe5XbYUoLWQFYTSZg4MbXJQHgYJEZQtTNyOwFbhnapGyXmzV/s1567UT1AXPpSAtZ2W72xRngdswjUX3g4617ubrNwcylXe8udH94JiK1WS9/D+k86nJq5gHtk1KZJLPWeAGgDtkjJt+OLcOfZGKu6P8AJVoojIKdhPUAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/query/湿度.png":
/*!*********************************!*\
  !*** ./src/assets/query/湿度.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGuSURBVFiF7VZLbsIwEH2T3qBl2SIqAWcgbGpu0p6A3IDkBuEEpSeJ2ZD0CoQFEmzhCJkugivLkMROkbrJ21iWx/N5M/YM0KHDP+PhL5dH/jzp9f3X0yGTbXVQ24vjaRAy8+KylXm6nLXR04oBwzgADHp9n9ow4cyAbpyZZgBAxEm5UrTdxKGLPicGhpNAAPypjOVpvDofs32v7xMAAUA8Pvvr8zHb2+r0XBwgKiM3I91u4pCIIl3GWqetoEZ9ZcGN/HmCkgnrorRiwMh7VCWnnYkyXXdyQIGIol0Wy6rzXRZL11Q0pkCPPk+XVilTqWCmWZ3DgAMDKjJL2XW5NrPQ6AAzvwFAUUDaOuAia8OAAMr8VgkMJ4EYT4NQ7TVZcQ8HpDJSqcSDYOaFkrF9AbYO1EIv0hssmXt3B+oKauTPWRnXi9TzSurV3To09oLTIZNPL5MQwMD85y89AMz0kafxCrh6to2/oVUzUs2GCO962z0dMnk+fn8pp8xmZdOe2/SCX7q3mzhUBXdJkVDntm3ZaR64MYhcK3ScCVqNZOrN6yMZEa2LArLp6+3QoYOJH9Jx5AMZLuunAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/query/风向.png":
/*!*********************************!*\
  !*** ./src/assets/query/风向.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEwSURBVEiJ1VXLcYMwEH3LpBScGnAuUSoyHRh3gCuycsGpAacW1gezsBb6INszmbwTg9D77K4Q8N9BryIqq9oUBQwzfxLRd9+1DQC8vYKYiPcAG+bbO2Y2AJ4T0MTuGhEd5DlLYCaFAVgvWWY6EPFpIZZPfE/6+9NaAHj/qBtm3gPA5XyceIMJUm6FWCDkujzeBGvcugi5v0swf5R2G4LrfhIoq9qIAyHWs5yC7B0GLIxMcXRM19UwwK4oj72cj19BAb1Bu3LF3FSb7Y5Da16BlJhuYqy5giIm0Hdt03dtozeXVW0WLj3NXSXgwN7I5jTiPjYMqwWYJ5cGmMsXc58lME6RBbxj/byAhv6ppc5KloAq0ygULw/wwI222e5OGPsQGk2N7BJJijXuH4bvLPwZrulbxCgqSXlQAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/query/风速.png":
/*!*********************************!*\
  !*** ./src/assets/query/风速.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAG2SURBVEiJ1VXBkZtAEOzGF4Htp+2XUAygj1aZXAaQAZABisChgD4SMUj3sOv8PYdA+wEjLUjcHSp/rl9bzDDb29OzC3x08N4fwzipALhzIbI47st8nBfMLbyIUhfGiUjuJG5Ohy1JFpKyRZS6cf6nuRt8/RE9ktwd92X+90/zCwBenpv6y/fIBQH58tzUfv7DXPaSstNhe0taB2A3/jhrgyCAkzBguIhSRyr7Lz1o22HxME4qUpVJduufWSfo4XrWFYC6a3RZTyXfswGs+Omw3byVeyXRLavZ916OgmQBnGfhdTLjAl6s9rVdrtIcAHytwzipJBZPzTskCgI44OKE5SrNJWXLVQoAkLQmeWVDUhkwbL6Ps0SS1n7guC9z87ukDIAb56DzvgvjRHbCKwK2MD2nGje6e2pbWz+MiMSNL9nDJciCVLVcpbmvsw1SdwJuOimBtkVfWJmR6uRU5RMfjPyo0cbCYcKStrkf64bvYo7BHPRHo+nZtqifmvJNr/vobtlLr24O2tTYT8C9Fpz9HrwHvp3vftEMpnnbou5uW639nsx+cMb4/C3+DegniUdg2uYfF/8AF7ndO8fALdAAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/views/airHomePage/airExamineSiteList/index.vue":
/*!************************************************************!*\
  !*** ./src/views/airHomePage/airExamineSiteList/index.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_53c707a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=53c707a0&scoped=true& */ "./src/views/airHomePage/airExamineSiteList/index.vue?vue&type=template&id=53c707a0&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/airHomePage/airExamineSiteList/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&lang=scss& */ "./src/views/airHomePage/airExamineSiteList/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _index_vue_vue_type_style_index_1_id_53c707a0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=1&id=53c707a0&lang=scss&scoped=true& */ "./src/views/airHomePage/airExamineSiteList/index.vue?vue&type=style&index=1&id=53c707a0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_53c707a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_53c707a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "53c707a0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/airHomePage/airExamineSiteList/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/airHomePage/airExamineSiteList/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./src/views/airHomePage/airExamineSiteList/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airExamineSiteList/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/airHomePage/airExamineSiteList/index.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************!*\
  !*** ./src/views/airHomePage/airExamineSiteList/index.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airExamineSiteList/index.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/airHomePage/airExamineSiteList/index.vue?vue&type=style&index=1&id=53c707a0&lang=scss&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./src/views/airHomePage/airExamineSiteList/index.vue?vue&type=style&index=1&id=53c707a0&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_53c707a0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&id=53c707a0&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airExamineSiteList/index.vue?vue&type=style&index=1&id=53c707a0&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_53c707a0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_53c707a0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_53c707a0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_53c707a0_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/airHomePage/airExamineSiteList/index.vue?vue&type=template&id=53c707a0&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./src/views/airHomePage/airExamineSiteList/index.vue?vue&type=template&id=53c707a0&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_53c707a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=53c707a0&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airExamineSiteList/index.vue?vue&type=template&id=53c707a0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_53c707a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_53c707a0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpckV4YW1pbmVTaXRlTGlzdC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpckV4YW1pbmVTaXRlTGlzdC9pbmRleC52dWU/MTlhMCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmNvbmNhdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyRXhhbWluZVNpdGVMaXN0L2luZGV4LnZ1ZT8zMDAxIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJFeGFtaW5lU2l0ZUxpc3QvaW5kZXgudnVlPzNkNzgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpckV4YW1pbmVTaXRlTGlzdC9pbmRleC52dWU/MzA5MSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyRXhhbWluZVNpdGVMaXN0L2luZGV4LnZ1ZT8wMWU2Iiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcG9sbHV0aW9uLXRhYi1iZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9xdWVyeS9sb2NhdGlvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9xdWVyeS/msJTljosucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcXVlcnkv5rip5bqmLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3F1ZXJ5L+a5v+W6pi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9xdWVyeS/po47lkJEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcXVlcnkv6aOO6YCfLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyRXhhbWluZVNpdGVMaXN0L2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyRXhhbWluZVNpdGVMaXN0L2luZGV4LnZ1ZT9lZTBlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJFeGFtaW5lU2l0ZUxpc3QvaW5kZXgudnVlP2NiMTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpckV4YW1pbmVTaXRlTGlzdC9pbmRleC52dWU/NjkwYyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyRXhhbWluZVNpdGVMaXN0L2luZGV4LnZ1ZT9kNjlkIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkhBO0FBQ0E7QUFDQTtBQUVBO0FBQ0EsZUFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBRkE7QUFHQSxpQkFIQTtBQUlBLG1CQUpBO0FBS0EsbUJBTEE7QUFNQSxnQkFOQTtBQU9BLGlCQVBBO0FBUUEsdUJBQ0E7QUFBQTtBQUFBO0FBQUEsT0FEQSxFQUVBO0FBQUE7QUFBQTtBQUFBLE9BRkEsQ0FSQTtBQVlBLHlCQVpBO0FBYUEscUJBQ0E7QUFBQTtBQUFBO0FBQUEsT0FEQSxFQUVBO0FBQUE7QUFBQTtBQUFBLE9BRkEsRUFHQTtBQUFBO0FBQUE7QUFBQSxPQUhBLEVBSUE7QUFBQTtBQUFBO0FBQUEsT0FKQSxFQUtBO0FBQUE7QUFBQTtBQUFBLE9BTEEsRUFNQTtBQUFBO0FBQUE7QUFBQSxPQU5BLENBYkE7QUFxQkEsb0JBQ0E7QUFBQTtBQUFBO0FBQUEsT0FEQSxFQUVBO0FB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Rjs7Ozs7Ozs7Ozs7O0FDeENmO0FBQUE7QUFBQSx3Q0FBMFMsQ0FBZ0Isc1VBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBOVQ7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy82Mi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8dmFuLW5hdi1iYXJcbiAgICAgICAgdGl0bGU9XCLnqbrmsJTotKjph4/nq5nngrnmlbDmja5cIlxuICAgICAgICBsZWZ0LWFycm93XG4gICAgICAgIGZpeGVkXG4gICAgICAgIEBjbGljay1sZWZ0PVwiJHJvdXRlci5nbygtMSlcIlxuICAgID5cbiAgICA8L3Zhbi1uYXYtYmFyPlxuXG4gICAgPGRpdiBjbGFzcz1cInNjcm9sbC10by10b3Atd3JhcHBlclwiPlxuXG4gICAgICA8IS0tPGRpdiBjbGFzcz1cInRhYi13cmFwcGVyXCI+XG4gICAgICAgIDxkaXYgdi1mb3I9XCIoaXRlbSxpKSBpbiB0YWJBcnJcIiA6Y2xhc3M9XCJbJ3RhYi1pdGVtJywgaT09PXRhYkluZGV4PydhY3RpdmUnOicnXVwiIEBjbGljaz1cImNoYW5nZVRhYihpKVwiPnt7aXRlbX19XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+LS0+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YWItd3JhcHBlclwiPlxuICAgICAgICA8ZGl2IHYtZm9yPVwiKGl0ZW0saSkgaW4gdGFiQXJyXCIgOmNsYXNzPVwiWyd0YWItaXRlbScsIGk9PT10YWJJbmRleD8nYWN0aXZlJzonJ11cIiBAY2xpY2s9XCJjaGFuZ2VUYWIoaSlcIj57e2l0ZW19fVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8IS0tIDxkaXYgY2xhc3M9XCJmc1wiIHN0eWxlPVwibWFyZ2luLWxlZnQ6IDE1cHg7bWFyZ2luLXRvcDogNXB4XCI+XG4gICAgICAgICA8dmFuLWRyb3Bkb3duLW1lbnUgYWN0aXZlLWNvbG9yPVwiIzE5ODlmYVwiIHN0eWxlPVwid2lkdGg6IDgwJTtcIj5cbiAgICAgICAgICAgPHZhbi1kcm9wZG93bi1pdGVtIHYtbW9kZWw9XCJkYXRhVHlwZVwiIDpvcHRpb25zPVwib3B0aW9uRGF0YVR5cGVcIiBAY2hhbmdlPVwiY2hhbmdlRGF0YVR5cGVcIi8+XG4gICAgICAgICAgIDx2YW4tZHJvcGRvd24taXRlbSB2LW1vZGVsPVwiZmFjdG9yXCIgOm9wdGlvbnM9XCJvcHRpb25GYWN0b3JcIiBAY2hhbmdlPVwiY2hhbmdlRGF0YVR5cGVcIi8+XG4gICAgICAgICAgIDx2YW4tZHJvcGRvd24taXRlbSB2LW1vZGVsPVwib3JkZXJcIiA6b3B0aW9ucz1cIm9wdGlvbk9yZGVyXCIgQGNoYW5nZT1cImNoYW5nZURhdGFUeXBlXCIvPlxuICAgICAgICAgPC92YW4tZHJvcGRvd24tbWVudT5cbiAgICAgICA8L2Rpdj4tLT5cblxuICAgICAgPGRpdiBjbGFzcz1cInF1YWxpdHktaW5mbyBcIj5cbiAgICAgICAgPHZhbi1pY29uIG5hbWU9XCJpbmZvLW9cIi8+XG4gICAgICAgIHt7ZGVzSW5mb319XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInRhYi1kYXRhLXdyYXBwZXJcIj5cbiAgICAgICAgPGRpdiB2LWZvcj1cIihpdGVtLGkpIGluIG9wdGlvbkRhdGFUeXBlXCIgOmNsYXNzPVwiWyd0YWItZGF0YS1pdGVtJywgaT09PXRhYkRhdGFUeXBlSW5kZXg/J2FjdGl2ZSc6JyddXCJcbiAgICAgICAgICAgICBAY2xpY2s9XCJjaGFuZ2VEYXRhVHlwZShpKVwiPnt7aXRlbS50ZXh0fX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHZhbi1sb2FkaW5nIHYtaWY9XCJsb2FkaW5nXCIgc2l6ZT1cIjIwcHhcIiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjttYXJnaW46IDIwcHggMFwiPuWKoOi9veS4rS4uLjwvdmFuLWxvYWRpbmc+XG4gICAgICA8ZGl2IGNsYXNzPVwic2l0ZS1ib3hcIiB2LWZvcj1cIml0ZW0gaW4gYXJlYUxpc3RcIiBAY2xpY2s9XCJnb0RldGFpbFBhZ2UoaXRlbSlcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNpdGUtdGl0bGUgZnNcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2l0ZS1uYW1lXCI+XG4gICAgICAgICAgICA8aW1nIHNyYz1cIkAvYXNzZXRzL3F1ZXJ5L2xvY2F0aW9uLnBuZ1wiLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmFtZVwiIHN0eWxlPVwidGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7Y3Vyc29yOiBwb2ludGVyXCI+e3tpdGVtLnNpdGVOYW1lfX08L3NwYW4+XG4gICAgICAgICAgICA8c3BhbiA6c3R5bGU9XCJqdWdkZUFRSUNvbG9yKGl0ZW0uYXFpKVwiIHN0eWxlPVwiZm9udC13ZWlnaHQ6IG5vcm1hbFwiPnt7aXRlbS52YWx1ZX19KHt7aXRlbS5hcWl9fSk8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPHNwYW4gc3R5bGU9XCJmb250LXNpemU6IDEycHg7Y29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDAuNSlcIj57e2l0ZW0ubW9uaXRvcmluZ1RpbWV9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwhLS3lsI/ml7bmlbDmja7miY3mmL7npLrmub/luqbpo47lkJEtLT5cbiAgICAgICAgPGRpdiB2LWlmPVwidGFiRGF0YVR5cGVJbmRleD09PTBcIiBjbGFzcz1cInNpdGUtc3RhdHVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2l0ZS1tb25pdG9yLWJveFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJAL2Fzc2V0cy9xdWVyeS/mub/luqYucG5nXCIvPlxuICAgICAgICAgICAg5rm/5bqm77yae3tpdGVtLmh1bWlkaXR5fX0lXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNpdGUtbW9uaXRvci1ib3hcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMvcXVlcnkv6aOO5ZCRLnBuZ1wiLz5cbiAgICAgICAgICAgIOmjjuWQke+8mnt7aXRlbS53aW5kRGlyZWN0aW9ufX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2l0ZS1tb25pdG9yLWJveFwiPlxuICAgICAgICAgICAgPGltZyBzcmM9XCJAL2Fzc2V0cy9xdWVyeS/po47pgJ8ucG5nXCIvPlxuICAgICAgICAgICAg6aOO6YCf77yae3tpdGVtLndpbmRTcGVlZH19XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNpdGUtbW9uaXRvci1ib3hcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMvcXVlcnkv5rCU5Y6LLnBuZ1wiLz5cbiAgICAgICAgICAgIOawlOWOi++8mnt7aXRlbS5wcmVzc3VyZX19XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNpdGUtbW9uaXRvci1ib3hcIj5cbiAgICAgICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMvcXVlcnkv5rip5bqmLnBuZ1wiLz5cbiAgICAgICAgICAgIOa4qeW6pu+8mnt7aXRlbS50ZW1wZXJhdHVyZX194oSDXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic2l0ZS1tb25pdG9yXCI+XG4gICAgICAgICAgPGRpdiAgOnN0eWxlPVwiaXRlbS5wbTI1ID09PSAnLScgPyBvbkNhbGVuZGVyQmdDb2xvcignJywgJycpIDogb25DYWxlbmRlckJnQ29sb3IoJ3BtMjUnLCBpdGVtLnBtMjUpXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9uaXRvci11bml0XCI+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDEpXCI+UE0yLjU8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuPnVnL23Cszwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4+e3tpdGVtLnBtMjV9fTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2ICA6c3R5bGU9XCJpdGVtLnBtMTAgPT09ICctJyA/IG9uQ2FsZW5kZXJCZ0NvbG9yKCcnLCAnJykgOiBvbkNhbGVuZGVyQmdDb2xvcigncG0xMCcsIGl0ZW0ucG0xMClcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb25pdG9yLXVuaXRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMSlcIj5QTTEwPC9zcGFuPlxuICAgICAgICAgICAgICA8c3Bhbj51Zy9twrM8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuPnt7aXRlbS5wbTEwfX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiA6c3R5bGU9XCJpdGVtLnNvMiA9PT0gJy0nID8gb25DYWxlbmRlckJnQ29sb3IoJycsICcnKSA6IG9uQ2FsZW5kZXJCZ0NvbG9yKCdzbzInLCBpdGVtLnNvMilcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb25pdG9yLXVuaXRcIj5cbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMSlcIj5TTzI8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuPnVnL23Cszwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4+e3tpdGVtLnNvMn19PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgOnN0eWxlPVwiaXRlbS5ubzIgPT09ICctJyA/IG9uQ2FsZW5kZXJCZ0NvbG9yKCcnLCAnJykgOiBvbkNhbGVuZGVyQmdDb2xvcignbm8yJywgaXRlbS5ubzIpXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9uaXRvci11bml0XCI+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDEpXCI+Tk8yPC9zcGFuPlxuICAgICAgICAgICAgICA8c3Bhbj51Zy9twrM8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuPnt7aXRlbS5ubzJ9fTwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IDpzdHlsZT1cIml0ZW0uY28gPT09ICctJyA/IG9uQ2FsZW5kZXJCZ0NvbG9yKCcnLCAnJykgOiBvbkNhbGVuZGVyQmdDb2xvcignY28nLCBpdGVtLmNvKVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vbml0b3ItdW5pdFwiPlxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cImNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAxKVwiPkNPPC9zcGFuPlxuICAgICAgICAgICAgICA8c3Bhbj5tZy9twrM8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzcGFuPnt7aXRlbS5jb319PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgOnN0eWxlPVwiaXRlbS5vem9uZSA9PT0gJy0nID8gb25DYWxlbmRlckJnQ29sb3IoJycsICcnKSA6IG9uQ2FsZW5kZXJCZ0NvbG9yKCdPWk9ORScsIGl0ZW0ub3pvbmUpXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9uaXRvci11bml0XCI+XG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDEpXCI+TzM8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuPnVnL23Cszwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4+e3tpdGVtLm96b25lfX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQge0FRSUp1Z2RlVGV4dENvbG9yfSBmcm9tIFwiQC91dGlscy9haXJVdGlscy5qc1wiO1xuICBpbXBvcnQge2FpclF1YWxpdHlTaXRlTGlzdH0gZnJvbSAnQC9hcGkvYWlyX3F1YWxpdHkuanMnXG4gIGltcG9ydCB7Z2V0Q2FsZW5kZXJCZ0NvbG9yfSBmcm9tICdAL3V0aWxzL2FpclV0aWxzLmpzJ1xuXG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcImluZGV4XCIsXG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIC8vIHRhYkFycjogWyflm73ogIMnLCAn5YW25LuWJ10sXG4gICAgICAgIHRhYkFycjogWyfmtZPluqYnLCAnSUFRSSddLFxuICAgICAgICB0YWJJbmRleDogMCxcbiAgICAgICAgZGF0YVR5cGU6ICcxJyxcbiAgICAgICAgZmFjdG9yOiAnQVFJJyxcbiAgICAgICAgb3JkZXI6ICcxJyxcbiAgICAgICAgZGVzSW5mbzogJycsXG4gICAgICAgIG9wdGlvbkRhdGFUeXBlOiBbXG4gICAgICAgICAge3RleHQ6ICflsI/ml7bmlbDmja4nLCB2YWx1ZTogJzEnfSxcbiAgICAgICAgICB7dGV4dDogJ+aXpeaVsOaNricsIHZhbHVlOiAnMid9LFxuICAgICAgICBdLFxuICAgICAgICB0YWJEYXRhVHlwZUluZGV4OiAwLFxuICAgICAgICBvcHRpb25GYWN0b3I6IFtcbiAgICAgICAgICB7dGV4dDogJ0FRSScsIHZhbHVlOiAnQVFJJ30sXG4gICAgICAgICAge3RleHQ6ICdQTTIuNScsIHZhbHVlOiAnUE0yNSd9LFxuICAgICAgICAgIHt0ZXh0OiAnUE0xMCcsIHZhbHVlOiAnUE0xMCd9LFxuICAgICAgICAgIHt0ZXh0OiAnU08yJywgdmFsdWU6ICdTTzInfSxcbiAgICAgICAgICB7dGV4dDogJ05PMicsIHZhbHVlOiAnTk8yJ30sXG4gICAgICAgICAge3RleHQ6ICdDTycsIHZhbHVlOiAnQ08nfSxcbiAgICAgICAgXSxcbiAgICAgICAgb3B0aW9uT3JkZXI6IFtcbiAgICAgICAgICB7dGV4dDogJ+aOkuW6j+S9juWIsOmrmCcsIHZhbHVlOiAnMSd9LFxuICAgICAgICAgIHt0ZXh0OiAn5o6S5bqP6auY5Yiw5L2OJywgdmFsdWU6ICcyJ30sXG4gICAgICAgIF0sXG4gICAgICAgIGFyZWFMaXN0OiBbXSwgLy/liJfooajmlbDmja5cbiAgICAgICAgeHpxaDogJycsXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBzaXRlVHlwZTogbnVsbCxcbiAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICB0aGlzLnh6cWggPSB0aGlzLiRyb3V0ZS5xdWVyeS54enFoO1xuICAgICAgdGhpcy50YWJJbmRleCA9IE51bWJlcih0aGlzLiRyb3V0ZS5xdWVyeS5xdWVyeUZsYWcpO1xuICAgICAgdGhpcy5zaXRlVHlwZSA9IHRoaXMuJHJvdXRlLnF1ZXJ5LnR5cGU7XG4gICAgICB0aGlzLnF1ZXJ5TGlzdCgpO1xuICAgIH0sXG4gICAgZmlsdGVyczoge1xuICAgICAgZ2V0Q29sb3Ioa2V5KSB7XG4gICAgICAgIGxldCBzdGF0dXMgPSBcIlwiO1xuICAgICAgICBpZiAoa2V5ID09IG51bGwpIHtcbiAgICAgICAgICBzdGF0dXMgPSAnaG91cl93aGl0ZV9iZyc7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5IDw9IDUwKSB7XG4gICAgICAgICAgc3RhdHVzID0gJ2hvdXJfZ3JlZW5fYmcnO1xuICAgICAgICB9IGVsc2UgaWYgKGtleSA8PSAxMDAgJiYga2V5ID4gNTApIHtcbiAgICAgICAgICBzdGF0dXMgPSAnaG91cl95ZWxsb3dfYmcnO1xuICAgICAgICB9IGVsc2UgaWYgKGtleSA8PSAxNTAgJiYga2V5ID4gMTAwKSB7XG4gICAgICAgICAgc3RhdHVzID0gJ2hvdXJfb3JhbmdlX2JnJztcbiAgICAgICAgfSBlbHNlIGlmIChrZXkgPD0gMjAwICYmIGtleSA+IDE1MCkge1xuICAgICAgICAgIHN0YXR1cyA9ICdob3VyX3JlZF9iZyc7XG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID4gMjAwKSB7XG4gICAgICAgICAgc3RhdHVzID0gJ2hvdXJfZGVlcHJlZF9iZyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RhdHVzID0gJ2hvdXJfd2hpdGVfYmcnO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzdGF0dXM7XG4gICAgICB9XG4gICAgfSxcbiAgICBtZXRob2RzOiB7XG4gICAgICAvL+a1k+W6pi9JYXFp5YiH5o2iXG4gICAgICBjaGFuZ2VUYWIoaW5kZXgpIHtcbiAgICAgICAgdGhpcy50YWJJbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLnF1ZXJ5TGlzdCgpO1xuICAgICAgfSxcbiAgICAgIGNoYW5nZURhdGFUeXBlKGluZGV4KSB7XG4gICAgICAgIHRoaXMudGFiRGF0YVR5cGVJbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLnF1ZXJ5TGlzdCgpO1xuICAgICAgfSxcbiAgICAgIC8v5p+l6K+i5YiX6KGo5pWw5o2uXG4gICAgICBxdWVyeUxpc3QoKSB7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgIHRoaXMuYXJlYUxpc3QgPSBbXTtcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcbiAgICAgICAgICBkYXRlVHlwZTogdGhpcy50YWJEYXRhVHlwZUluZGV4ID09PSAwID8gJzEnIDogJzInLCAvL+Wwj+aXtuaVsOaNrjEg5pel5pWw5o2uMlxuICAgICAgICAgIGl0ZW1UeXBlOiB0aGlzLmZhY3RvciwgLy/lm6DlrZBcbiAgICAgICAgICBvcmRlcjogdGhpcy5vcmRlciwgLy/mjpLluo/ku47kvY7liLDpq5gxIOS7jumrmOWIsOS9jjJcbiAgICAgICAgICBkaXZpc2lvbk5hbWU6IHRoaXMueHpxaCxcbiAgICAgICAgICB0eXBlOiB0aGlzLnNpdGVUeXBlID09PSAn5Zu95o6nJyA/ICcxJyA6ICcyJywgLy/lm73mjqcxIOWFtuS7ljJcbiAgICAgICAgICBhcWk6IHRoaXMudGFiSW5kZXggPT09IDAgPyAnJyA6ICdpYXFpJ1xuICAgICAgICB9XG4gICAgICAgIGFpclF1YWxpdHlTaXRlTGlzdChwYXJhbXMpLnRoZW4ocmVzID0+IHtcbiAgICAgICAgICB0aGlzLmFyZWFMaXN0ID0gcmVzLmRhdGEuZGF0YTtcbiAgICAgICAgICB0aGlzLmRlc0luZm8gPSByZXMuZGF0YS50ZXh0ICsgJ++8jCcgKyByZXMuZGF0YS5pbmZvO1xuICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgICAgfSxcbiAgICAgIGdvRGV0YWlsUGFnZShpdGVtKSB7XG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcbiAgICAgICAgICBuYW1lOiAnYWlyU3RhdGlvbkRldGFpbCcsXG4gICAgICAgICAgcXVlcnk6IHtcbiAgICAgICAgICAgIHNpdGVJZDogaXRlbS5zaXRlSWQsXG4gICAgICAgICAgICBzaXRlTmFtZTogaXRlbS5zaXRlTmFtZSxcbiAgICAgICAgICAgIHNpdGVMZXZlbDogaXRlbS5zaXRlTGV2ZWwsXG4gICAgICAgICAgICB0aXRsZTogXCLnqbrmsJTotKjph4/nq5nngrnor6bmg4VcIixcbiAgICAgICAgICAgIHh6cWg6IHRoaXMuJHJvdXRlLnF1ZXJ5Lnh6cWhcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAganVnZGVBUUlDb2xvcih2YWx1ZSkge1xuICAgICAgICByZXR1cm4gQVFJSnVnZGVUZXh0Q29sb3IodmFsdWUpXG4gICAgICB9LFxuICAgICAgb25DYWxlbmRlckJnQ29sb3IoeXpOYW1lLCBjb3VudCkge1xuICAgICAgICByZXR1cm4gZ2V0Q2FsZW5kZXJCZ0NvbG9yKHl6TmFtZSwgY291bnQpXG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuICAudmFuLWRyb3Bkb3duLW1lbnVfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcbiAgfVxuXG4gIC52YW4tZHJvcGRvd24tbWVudV9fYmFyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBoZWlnaHQ6IDI4cHg7XG4gICAgYm94LXNoYWRvdzogbm9uZTtcbiAgfVxuXG4gIC52YW4tZHJvcGRvd24tbWVudV9faXRlbSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ2LCAyNDYsIDI0NiwgMSk7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICB9XG48L3N0eWxlPlxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuXG4gIC50YWItd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIG1hcmdpbjogMTZweCAwIDEwcHg7XG5cbiAgICAudGFiLWl0ZW0ge1xuICAgICAgd2lkdGg6IDIwJTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLmFjdGl2ZSB7XG4gICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjgpO1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoXCJ+QC9hc3NldHMvcG9sbHV0aW9uLXRhYi1iZy5wbmdcIikgbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMjdweCA4cHg7XG4gICAgfVxuICB9XG5cbiAgLnRhYi1kYXRhLXdyYXBwZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDEycHggMTVweDtcblxuICAgIC50YWItZGF0YS1pdGVtIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgIHBhZGRpbmc6IDZweCAxNnB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNTBweDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoNjMsIDEyMywgMjU1LCAwLjEpO1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgY29sb3I6IHJnYmEoNjMsIDEyMywgMjU1LCAxKTtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAuYWN0aXZlIHtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgYmFja2dyb3VuZDogcmdiYSg2MywgMTIzLCAyNTUsIDEpO1xuICAgIH1cbiAgfVxuXG4gIC5xdWFsaXR5LWluZm8ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDEwcHggMTVweCAwcHg7XG4gICAgcGFkZGluZzogOHB4IDEzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNDEsIDI2LCAwLjA1KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMTQxLCAyNiwgMC4yKTtcbiAgICBmb250LXNpemU6IDEycHg7XG4gICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcblxuICAgIHNwYW4ge1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICB9XG5cbiAgLnNpdGUtYm94IHtcbiAgICBtYXJnaW46IDRweCA4cHg7XG4gICAgYm94LXNoYWRvdzogMCAycHggMnB4ICNkZGQ7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgLnNpdGUtdGl0bGUge1xuICAgICAgcGFkZGluZzogN3B4IDEwcHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgzNywgNTcsIDExMSwgMC4xKTtcblxuICAgICAgLnNpdGUtbmFtZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiAjMjUzOTZGO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgd2lkdGg6IDlweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xuICAgICAgICAgIGhlaWdodDogMTdweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2l0ZS1zdGF0dSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAuc2l0ZS1tb25pdG9yLWJveCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB3aWR0aDogMzMlO1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG5cbiAgICAgICAgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICBoZWlnaHQ6IDEycHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc2l0ZS1tb25pdG9yIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBwYWRkaW5nOiA1cHggOXB4O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgICBkaXYge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAyOSU7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgcGFkZGluZzogMCA3cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDAuNSk7XG5cbiAgICAgIH1cblxuICAgICAgLm1vbml0b3ItdW5pdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKi5sZXZlbDFCZyB7Ki9cbiAgLyogIGJhY2tncm91bmQ6IHJnYmEoMCwgMjI4LCAwLCAwLjA1KTsqL1xuICAvKn0qL1xuXG4gIC8qLmhvdXJfd2hpdGVfYmcgeyovXG4gIC8qICAvLyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIwNCwgMjA0LCAyMDQsIDAuMyk7Ki9cbiAgLyogIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjguMWRlZywgcmdiYSg0LCAxOTksIDQsIDAuMDUpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDEwMCUpOyovXG5cbiAgLyogID4gc3BhbiB7Ki9cbiAgLyogICAgJjpsYXN0LWNoaWxkIHsqL1xuICAvKiAgICAgIGNvbG9yOiByZ2JhKDIwNCwgMjA0LCAyMDQsIDEpOyovXG4gIC8qICAgIH0qL1xuICAvKiAgfSovXG4gIC8qfSovXG5cbiAgLyouaG91cl9ncmVlbl9iZyB7Ki9cbiAgLyogIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNCwgMTk5LCA0LCAwLjMpOyovXG4gIC8qICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI4LjFkZWcsIHJnYmEoNCwgMTk5LCA0LCAwLjA1KSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAxMDAlKTsqL1xuXG4gIC8qICA+IHNwYW4geyovXG4gIC8qICAgICY6bGFzdC1jaGlsZCB7Ki9cbiAgLyogICAgICBjb2xvcjogcmdiYSg0LCAxOTksIDQsIDEpOyovXG4gIC8qICAgIH0qL1xuICAvKiAgfSovXG4gIC8qfSovXG5cbiAgLyouaG91cl95ZWxsb3dfYmcgeyovXG4gIC8qICAhKmJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyMTcsIDAsIDAuMyk7KiEqL1xuICAvKiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyOC4xZGVnLCByZ2JhKDI1NSwgMTkxLCAwLCAwLjA1KSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAxMDAlKTsqL1xuXG4gIC8qICA+c3BhbiB7Ki9cbiAgLyogICAgJjpsYXN0LWNoaWxkIHsqL1xuICAvKiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMTkxLCAwLCAxKTsqL1xuICAvKiAgICB9Ki9cbiAgLyogIH0qL1xuICAvKn0qL1xuICAvKi5ob3VyX29yYW5nZV9iZyB7Ki9cbiAgLyogICEqYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDEyNiwgMCwgMC4zKTsqISovXG4gIC8qICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI4LjFkZWcsIHJnYmEoMjU1LCAxMjYsIDAsIDAuMDUpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDEwMCUpOyovXG5cbiAgLyogID5zcGFuIHsqL1xuICAvKiAgICAmOmxhc3QtY2hpbGQgeyovXG4gIC8qICAgICAgY29sb3I6IHJnYmEoMjU1LCAxMjYsIDAsIDEpOyovXG4gIC8qICAgIH0qL1xuICAvKiAgfSovXG4gIC8qfSovXG5cbiAgLyouaG91cl9yZWRfYmcgeyovXG4gIC8qICAvLyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMCwgMCwgMC4zKTsqL1xuICAvKiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyOC4xZGVnLCByZ2JhKDI1NSwgMCwgMCwgMC4wNSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMTAwJSk7Ki9cblxuICAvKiAgPiBzcGFuIHsqL1xuICAvKiAgICAmOmxhc3QtY2hpbGQgeyovXG4gIC8qICAgICAgY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAxKTsqL1xuICAvKiAgICB9Ki9cbiAgLyogIH0qL1xuICAvKn0qL1xuXG4gIC8qLmhvdXJfZGVlcHJlZF9iZyB7Ki9cbiAgLyogIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTUzLCAwLCA3NiwgMC4zKTsqL1xuICAvKiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyOC4xZGVnLCByZ2JhKDQsIDE5OSwgNCwgMC4wNSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMTAwJSk7Ki9cblxuICAvKiAgPiBzcGFuIHsqL1xuICAvKiAgICAmOmxhc3QtY2hpbGQgeyovXG4gIC8qICAgICAgY29sb3I6IHJnYmEoMTUzLCAwLCA3NiwgMSk7Ki9cbiAgLyogICAgfSovXG4gIC8qICB9Ki9cbiAgLyp9Ki9cblxuPC9zdHlsZT5cbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJ2YW4tbmF2LWJhclwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHRpdGxlOiBcIuepuuawlOi0qOmHj+ermeeCueaVsOaNrlwiLCBcImxlZnQtYXJyb3dcIjogXCJcIiwgZml4ZWQ6IFwiXCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcImNsaWNrLWxlZnRcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLmdvKC0xKVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNjcm9sbC10by10b3Atd3JhcHBlclwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYi13cmFwcGVyXCIgfSxcbiAgICAgICAgICAgIF92bS5fbChfdm0udGFiQXJyLCBmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjbGFzczogW1widGFiLWl0ZW1cIiwgaSA9PT0gX3ZtLnRhYkluZGV4ID8gXCJhY3RpdmVcIiA6IFwiXCJdLFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoYW5nZVRhYihpKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl0ZW0pICsgXCIgXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicXVhbGl0eS1pbmZvIFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwidmFuLWljb25cIiwgeyBhdHRyczogeyBuYW1lOiBcImluZm8tb1wiIH0gfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uZGVzSW5mbykgKyBcIiBcIiksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0YWItZGF0YS13cmFwcGVyXCIgfSxcbiAgICAgICAgICAgIF92bS5fbChfdm0ub3B0aW9uRGF0YVR5cGUsIGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgIFwidGFiLWRhdGEtaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICBpID09PSBfdm0udGFiRGF0YVR5cGVJbmRleCA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFuZ2VEYXRhVHlwZShpKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl0ZW0udGV4dCkgKyBcIiBcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgMFxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLmxvYWRpbmdcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJ2YW4tbG9hZGluZ1wiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwidGV4dC1hbGlnblwiOiBcImNlbnRlclwiLCBtYXJnaW46IFwiMjBweCAwXCIgfSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNpemU6IFwiMjBweFwiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5Yqg6L295LitLi4uXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fbChfdm0uYXJlYUxpc3QsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzaXRlLWJveFwiLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdvRGV0YWlsUGFnZShpdGVtKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzaXRlLXRpdGxlIGZzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzaXRlLW5hbWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy9xdWVyeS9sb2NhdGlvbi5wbmdcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5hbWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1kZWNvcmF0aW9uXCI6IFwidW5kZXJsaW5lXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbS5zaXRlTmFtZSkpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImZvbnQtd2VpZ2h0XCI6IFwibm9ybWFsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiBfdm0uanVnZGVBUUlDb2xvcihpdGVtLmFxaSksXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtLnZhbHVlKSArIFwiKFwiICsgX3ZtLl9zKGl0ZW0uYXFpKSArIFwiKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmdiYSgzNywgNTcsIDExMSwgMC41KVwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ubW9uaXRvcmluZ1RpbWUpKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLnRhYkRhdGFUeXBlSW5kZXggPT09IDBcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzaXRlLXN0YXR1XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2l0ZS1tb25pdG9yLWJveFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMvcXVlcnkv5rm/5bqmLnBuZ1wiKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIg5rm/5bqm77yaXCIgKyBfdm0uX3MoaXRlbS5odW1pZGl0eSkgKyBcIiUgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2l0ZS1tb25pdG9yLWJveFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMvcXVlcnkv6aOO5ZCRLnBuZ1wiKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIg6aOO5ZCR77yaXCIgKyBfdm0uX3MoaXRlbS53aW5kRGlyZWN0aW9uKSArIFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNpdGUtbW9uaXRvci1ib3hcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL3F1ZXJ5L+mjjumAny5wbmdcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIOmjjumAn++8mlwiICsgX3ZtLl9zKGl0ZW0ud2luZFNwZWVkKSArIFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNpdGUtbW9uaXRvci1ib3hcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL3F1ZXJ5L+awlOWOiy5wbmdcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIOawlOWOi++8mlwiICsgX3ZtLl9zKGl0ZW0ucHJlc3N1cmUpICsgXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2l0ZS1tb25pdG9yLWJveFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMvcXVlcnkv5rip5bqmLnBuZ1wiKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIg5rip5bqm77yaXCIgKyBfdm0uX3MoaXRlbS50ZW1wZXJhdHVyZSkgKyBcIuKEgyBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2l0ZS1tb25pdG9yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZTpcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucG0yNSA9PT0gXCItXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0ub25DYWxlbmRlckJnQ29sb3IoXCJcIiwgXCJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0ub25DYWxlbmRlckJnQ29sb3IoXCJwbTI1XCIsIGl0ZW0ucG0yNSksXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX20oMCwgdHJ1ZSksIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLnBtMjUpKV0pXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnBtMTAgPT09IFwiLVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLm9uQ2FsZW5kZXJCZ0NvbG9yKFwiXCIsIFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLm9uQ2FsZW5kZXJCZ0NvbG9yKFwicG0xMFwiLCBpdGVtLnBtMTApLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl9tKDEsIHRydWUpLCBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS5wbTEwKSldKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zbzIgPT09IFwiLVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLm9uQ2FsZW5kZXJCZ0NvbG9yKFwiXCIsIFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLm9uQ2FsZW5kZXJCZ0NvbG9yKFwic28yXCIsIGl0ZW0uc28yKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fbSgyLCB0cnVlKSwgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uc28yKSldKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5ubzIgPT09IFwiLVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLm9uQ2FsZW5kZXJCZ0NvbG9yKFwiXCIsIFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLm9uQ2FsZW5kZXJCZ0NvbG9yKFwibm8yXCIsIGl0ZW0ubm8yKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fbSgzLCB0cnVlKSwgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ubm8yKSldKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOlxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5jbyA9PT0gXCItXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0ub25DYWxlbmRlckJnQ29sb3IoXCJcIiwgXCJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0ub25DYWxlbmRlckJnQ29sb3IoXCJjb1wiLCBpdGVtLmNvKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fbSg0LCB0cnVlKSwgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uY28pKV0pXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU6XG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLm96b25lID09PSBcIi1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5vbkNhbGVuZGVyQmdDb2xvcihcIlwiLCBcIlwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5vbkNhbGVuZGVyQmdDb2xvcihcIk9aT05FXCIsIGl0ZW0ub3pvbmUpLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl9tKDUsIHRydWUpLCBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS5vem9uZSkpXSldXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgICksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vbml0b3ItdW5pdFwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcInJnYmEoMzcsIDU3LCAxMTEsIDEpXCIgfSB9LCBbXG4gICAgICAgIF92bS5fdihcIlBNMi41XCIpLFxuICAgICAgXSksXG4gICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcInVnL23Cs1wiKV0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vbml0b3ItdW5pdFwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcInJnYmEoMzcsIDU3LCAxMTEsIDEpXCIgfSB9LCBbXG4gICAgICAgIF92bS5fdihcIlBNMTBcIiksXG4gICAgICBdKSxcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwidWcvbcKzXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9uaXRvci11bml0XCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwicmdiYSgzNywgNTcsIDExMSwgMSlcIiB9IH0sIFtcbiAgICAgICAgX3ZtLl92KFwiU08yXCIpLFxuICAgICAgXSksXG4gICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcInVnL23Cs1wiKV0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vbml0b3ItdW5pdFwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcInJnYmEoMzcsIDU3LCAxMTEsIDEpXCIgfSB9LCBbXG4gICAgICAgIF92bS5fdihcIk5PMlwiKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJ1Zy9twrNcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb25pdG9yLXVuaXRcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJyZ2JhKDM3LCA1NywgMTExLCAxKVwiIH0gfSwgW1xuICAgICAgICBfdm0uX3YoXCJDT1wiKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJtZy9twrNcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb25pdG9yLXVuaXRcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJyZ2JhKDM3LCA1NywgMTExLCAxKVwiIH0gfSwgW1xuICAgICAgICBfdm0uX3YoXCJPM1wiKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJ1Zy9twrNcIildKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIndXNlIHN0cmljdCc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxRkZGRkZGRkZGRkZGRjsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPiBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyAkVHlwZUVycm9yKCdNYXhpbXVtIGFsbG93ZWQgaW5kZXggZXhjZWVkZWQnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvZXMtbm90LWV4Y2VlZC1zYWZlLWludGVnZXInKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC12OC12ZXJzaW9uJyk7XG5cbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRSA9IHdlbGxLbm93blN5bWJvbCgnaXNDb25jYXRTcHJlYWRhYmxlJyk7XG5cbi8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzlcbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUID0gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgYXJyYXkgPSBbXTtcbiAgYXJyYXlbSVNfQ09OQ0FUX1NQUkVBREFCTEVdID0gZmFsc2U7XG4gIHJldHVybiBhcnJheS5jb25jYXQoKVswXSAhPT0gYXJyYXk7XG59KTtcblxudmFyIGlzQ29uY2F0U3ByZWFkYWJsZSA9IGZ1bmN0aW9uIChPKSB7XG4gIGlmICghaXNPYmplY3QoTykpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNwcmVhZGFibGUgPSBPW0lTX0NPTkNBVF9TUFJFQURBQkxFXTtcbiAgcmV0dXJuIHNwcmVhZGFibGUgIT09IHVuZGVmaW5lZCA/ICEhc3ByZWFkYWJsZSA6IGlzQXJyYXkoTyk7XG59O1xuXG52YXIgRk9SQ0VEID0gIUlTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgfHwgIWFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2NvbmNhdCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmNvbmNhdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5jb25jYXRcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBpc0NvbmNhdFNwcmVhZGFibGUgYW5kIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGFyaXR5OiAxLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycyAtLSByZXF1aXJlZCBmb3IgYC5sZW5ndGhgXG4gIGNvbmNhdDogZnVuY3Rpb24gY29uY2F0KGFyZykge1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIEEgPSBhcnJheVNwZWNpZXNDcmVhdGUoTywgMCk7XG4gICAgdmFyIG4gPSAwO1xuICAgIHZhciBpLCBrLCBsZW5ndGgsIGxlbiwgRTtcbiAgICBmb3IgKGkgPSAtMSwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBFID0gaSA9PT0gLTEgPyBPIDogYXJndW1lbnRzW2ldO1xuICAgICAgaWYgKGlzQ29uY2F0U3ByZWFkYWJsZShFKSkge1xuICAgICAgICBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShFKTtcbiAgICAgICAgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyKG4gKyBsZW4pO1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbGVuOyBrKyssIG4rKykgaWYgKGsgaW4gRSkgY3JlYXRlUHJvcGVydHkoQSwgbiwgRVtrXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIobiArIDEpO1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShBLCBuKyssIEUpO1xuICAgICAgfVxuICAgIH1cbiAgICBBLmxlbmd0aCA9IG47XG4gICAgcmV0dXJuIEE7XG4gIH1cbn0pO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi52YW4tZHJvcGRvd24tbWVudV9fdGl0bGUge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG59XFxuLnZhbi1kcm9wZG93bi1tZW51X19iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG4udmFuLWRyb3Bkb3duLW1lbnVfX2l0ZW0ge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiQC9hc3NldHMvcG9sbHV0aW9uLXRhYi1iZy5wbmdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50YWItd3JhcHBlcltkYXRhLXYtNTNjNzA3YTBdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAxNnB4IDAgMTBweDtcXG59XFxuLnRhYi13cmFwcGVyIC50YWItaXRlbVtkYXRhLXYtNTNjNzA3YTBdIHtcXG4gIHdpZHRoOiAyMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4udGFiLXdyYXBwZXIgLmFjdGl2ZVtkYXRhLXYtNTNjNzA3YTBdIHtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuOCk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMjdweCA4cHg7XFxufVxcbi50YWItZGF0YS13cmFwcGVyW2RhdGEtdi01M2M3MDdhMF0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDEycHggMTVweDtcXG59XFxuLnRhYi1kYXRhLXdyYXBwZXIgLnRhYi1kYXRhLWl0ZW1bZGF0YS12LTUzYzcwN2EwXSB7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICBwYWRkaW5nOiA2cHggMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDYzLCAxMjMsIDI1NSwgMC4xKTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiAjM2Y3YmZmO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4udGFiLWRhdGEtd3JhcHBlciAuYWN0aXZlW2RhdGEtdi01M2M3MDdhMF0ge1xcbiAgY29sb3I6ICNmZmY7XFxuICBiYWNrZ3JvdW5kOiAjM2Y3YmZmO1xcbn1cXG4ucXVhbGl0eS1pbmZvW2RhdGEtdi01M2M3MDdhMF0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHggMTVweCAwcHg7XFxuICBwYWRkaW5nOiA4cHggMTNweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNDEsIDI2LCAwLjA1KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAxNDEsIDI2LCAwLjIpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG59XFxuLnF1YWxpdHktaW5mbyBzcGFuW2RhdGEtdi01M2M3MDdhMF0ge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5zaXRlLWJveFtkYXRhLXYtNTNjNzA3YTBdIHtcXG4gIG1hcmdpbjogNHB4IDhweDtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAjZGRkO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5zaXRlLWJveCAuc2l0ZS10aXRsZVtkYXRhLXYtNTNjNzA3YTBdIHtcXG4gIHBhZGRpbmc6IDdweCAxMHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMzcsIDU3LCAxMTEsIDAuMSk7XFxufVxcbi5zaXRlLWJveCAuc2l0ZS10aXRsZSAuc2l0ZS1uYW1lW2RhdGEtdi01M2M3MDdhMF0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGNvbG9yOiAjMjUzOTZGO1xcbn1cXG4uc2l0ZS1ib3ggLnNpdGUtdGl0bGUgLnNpdGUtbmFtZSBpbWdbZGF0YS12LTUzYzcwN2EwXSB7XFxuICB3aWR0aDogOXB4O1xcbiAgcGFkZGluZy1yaWdodDogMTBweDtcXG59XFxuLnNpdGUtYm94IC5zaXRlLXRpdGxlIC5zaXRlLW5hbWUgLm5hbWVbZGF0YS12LTUzYzcwN2EwXSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXgtd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiAxN3B4O1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4uc2l0ZS1ib3ggLnNpdGUtc3RhdHVbZGF0YS12LTUzYzcwN2EwXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4uc2l0ZS1ib3ggLnNpdGUtc3RhdHUgLnNpdGUtbW9uaXRvci1ib3hbZGF0YS12LTUzYzcwN2EwXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDMzJTtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5zaXRlLWJveCAuc2l0ZS1zdGF0dSAuc2l0ZS1tb25pdG9yLWJveCBpbWdbZGF0YS12LTUzYzcwN2EwXSB7XFxuICB3aWR0aDogMTJweDtcXG4gIGhlaWdodDogMTJweDtcXG59XFxuLnNpdGUtYm94IC5zaXRlLW1vbml0b3JbZGF0YS12LTUzYzcwN2EwXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogNXB4IDlweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLnNpdGUtYm94IC5zaXRlLW1vbml0b3IgZGl2W2RhdGEtdi01M2M3MDdhMF0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMjklO1xcbiAgbWFyZ2luLXRvcDogNXB4O1xcbiAgcGFkZGluZzogMCA3cHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMC41KTtcXG59XFxuLnNpdGUtYm94IC5zaXRlLW1vbml0b3IgLm1vbml0b3ItdW5pdFtkYXRhLXYtNTNjNzA3YTBdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG59XFxuXFxuLyoubGV2ZWwxQmcgeyovXFxuLyogIGJhY2tncm91bmQ6IHJnYmEoMCwgMjI4LCAwLCAwLjA1KTsqL1xcbi8qfSovXFxuLyouaG91cl93aGl0ZV9iZyB7Ki9cXG4vKiAgLy8gYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMDQsIDIwNCwgMjA0LCAwLjMpOyovXFxuLyogIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjguMWRlZywgcmdiYSg0LCAxOTksIDQsIDAuMDUpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDEwMCUpOyovXFxuLyogID4gc3BhbiB7Ki9cXG4vKiAgICAmOmxhc3QtY2hpbGQgeyovXFxuLyogICAgICBjb2xvcjogcmdiYSgyMDQsIDIwNCwgMjA0LCAxKTsqL1xcbi8qICAgIH0qL1xcbi8qICB9Ki9cXG4vKn0qL1xcbi8qLmhvdXJfZ3JlZW5fYmcgeyovXFxuLyogIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNCwgMTk5LCA0LCAwLjMpOyovXFxuLyogIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjguMWRlZywgcmdiYSg0LCAxOTksIDQsIDAuMDUpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDEwMCUpOyovXFxuLyogID4gc3BhbiB7Ki9cXG4vKiAgICAmOmxhc3QtY2hpbGQgeyovXFxuLyogICAgICBjb2xvcjogcmdiYSg0LCAxOTksIDQsIDEpOyovXFxuLyogICAgfSovXFxuLyogIH0qL1xcbi8qfSovXFxuLyouaG91cl95ZWxsb3dfYmcgeyovXFxuLyogICEqYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDIxNywgMCwgMC4zKTsqISovXFxuLyogIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjguMWRlZywgcmdiYSgyNTUsIDE5MSwgMCwgMC4wNSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMTAwJSk7Ki9cXG4vKiAgPnNwYW4geyovXFxuLyogICAgJjpsYXN0LWNoaWxkIHsqL1xcbi8qICAgICAgY29sb3I6IHJnYmEoMjU1LCAxOTEsIDAsIDEpOyovXFxuLyogICAgfSovXFxuLyogIH0qL1xcbi8qfSovXFxuLyouaG91cl9vcmFuZ2VfYmcgeyovXFxuLyogICEqYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDEyNiwgMCwgMC4zKTsqISovXFxuLyogIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjguMWRlZywgcmdiYSgyNTUsIDEyNiwgMCwgMC4wNSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMTAwJSk7Ki9cXG4vKiAgPnNwYW4geyovXFxuLyogICAgJjpsYXN0LWNoaWxkIHsqL1xcbi8qICAgICAgY29sb3I6IHJnYmEoMjU1LCAxMjYsIDAsIDEpOyovXFxuLyogICAgfSovXFxuLyogIH0qL1xcbi8qfSovXFxuLyouaG91cl9yZWRfYmcgeyovXFxuLyogIC8vIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAwLCAwLCAwLjMpOyovXFxuLyogIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjguMWRlZywgcmdiYSgyNTUsIDAsIDAsIDAuMDUpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDEwMCUpOyovXFxuLyogID4gc3BhbiB7Ki9cXG4vKiAgICAmOmxhc3QtY2hpbGQgeyovXFxuLyogICAgICBjb2xvcjogcmdiYSgyNTUsIDAsIDAsIDEpOyovXFxuLyogICAgfSovXFxuLyogIH0qL1xcbi8qfSovXFxuLyouaG91cl9kZWVwcmVkX2JnIHsqL1xcbi8qICAvLyBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE1MywgMCwgNzYsIDAuMyk7Ki9cXG4vKiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyOC4xZGVnLCByZ2JhKDQsIDE5OSwgNCwgMC4wNSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMTAwJSk7Ki9cXG4vKiAgPiBzcGFuIHsqL1xcbi8qICAgICY6bGFzdC1jaGlsZCB7Ki9cXG4vKiAgICAgIGNvbG9yOiByZ2JhKDE1MywgMCwgNzYsIDEpOyovXFxuLyogICAgfSovXFxuLyogIH0qL1xcbi8qfSovXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjdlNjE5NTJjXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD01M2M3MDdhMCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjVkYWZhNzI0XCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9NTNjNzA3YTAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD01M2M3MDdhMCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURjQUFBQVFDQVlBQUFDeWN1ZklBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFEblNVUkJWRWlKM1pUUmFjUkFERVRmYU5la2dPdmhlc2hmd2xXVmo0QVRETmVVQTVjMjBzTVZFSWl0Zkt3VnU0QTdURFN3N0Vxc0JnMFNJelk0dmZvanpzR1l6Q2Nxb2tvVW9McW9RR1dhSzFZS0xERnp1OTBLMnNTeTltZjJTdFJLQmJ5OTU4aXhjaW4rYThscDVXUGhpL3JnODAzY2ppRi9HNGV1MTUrdzNvLzhjQVQ0OStJQTVNOUdYanl0NGlZT096WnlGNnppUEplNGNlaDZBemk5ZUNwaGdUYTVoMXhUQXk2d1hjdE1rSDlDaUV0b0poRGlrcGtKbWRkeUhMb0xnR1YxU2dETDZwU1FjUzBYcHdRd3ZybnUyY3M5WVI5blhhbDg3ZDNJVGVEK1BnNWRIK0V2UE5GTk5STlh5NDRBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWtBQUFBTEJBTUFBQUJmZDdvb0FBQUFCR2RCVFVFQUFMR1BDL3hoQlFBQUFBRnpVa2RDQUs3T0hPa0FBQUFQVUV4VVJVUjcvRWR3VEVSOCswUjgrMFI3L1B5Q0xRSUFBQUFFZEZKT1U3OEFnRUM3M2VHTkFBQUFRRWxFUVZRSTF4M0t3UTJBTUF3RFFEOHlnQjBXQ0ZJSEFJa0JTdXY5WnlMaWM2K0RhcDRFN1VXTVdiNFE3K0dDZDdiaGFCL2JSUDVIdy8yVlM2MXU4UU1zSHdpTzZYK0gwZ0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQmtBQUFBWENBWUFBQUQrNCtRVEFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUlIU1VSQlZFaUpyVlhMa2FNd0ZPd25Pd1A3YXA4TUtReHdzWnpKWklBeU1HU2dpV0JEc2ViQ0VJT0h3MWI1N0JUODlvQWVveEVHZTJlM3E2Z0NJWFcvdndnUGtCYW1BZ0JtM2dQUWZ0a0JBQkc5MzI1d1hXdmRIQWZOa1RQek1Wb095WFM0emt6MWxOaElaSmNaVGNTbllRTlJmVzVzRmY0UHlTSmozT2ZIMjJGV0pCUVFjcjkyakN3ZkdSQ0lqWVFHa1ZDQW1RNWRhMTJTbDZlQTNCSFJ1K3dQY3lSaUloUjd2L3l5cW5jNUZpQ2llaTY1UXB6azVmN2MyRU5hR0REek1TME1RaUhzTXFPVHZPUmRaalFBSkhsNVN2S1NwYkllSVMxTWxlUWxlOE9HYi9tL0FJRFY1dVVYZ045ZCsxWjc0dGZZNVRsY0w2MWJiM01DOExyZTVuUnViTFhhWk5WNm05UDEwanJscmRmTVZQZmhHc2YwR2ZqOXp1Y0tSRlJMMVNtbCt1UjFyWFZ4ZUNSODRiYzg5NFM4b1hxWEdYMjc5VDIxeTR4V1h0bkZWa20xU1c3U3dsUkVmSkxuWHI2a09KU0NEdC9WbFB0ZGF4MHpIY1R0dVB1WitUanRVUjh5Z1VKZnBrUDlFL1c1RWFGell5dG1Hblh4RE1KK2NzeThYeUpJMXQ4bSt4NmlidGNBblBLcWV1NWcxMW9YZWdqMEhzOU5Yd2tsTTlYTHFVMHhmREVNcEo4ZjgrTTl4Q0NTRnFaNkZLNUg5MFlJR1ZOZGE1MDZON1lLRytkL1FCcGNRdnl0aEorZFZZOGdYa2hrRnNEWDdHSG1vOHlibndxRXMwOTRGdkx6ZW1uZGFwTnArQ0gzRTZHcCsyUjAvY285SXZmS3Z3ck1IbmlXUER3emRlNFBabEZxVm1CMVpxNEFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDQUFBQUFnQ0FZQUFBQnplbnIwQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBSWxTVVJCVkZpRjNWZk5WZU13RUo0dnV4VUFSK0R0d1hFTDJMNGdTdGtLb2c1c2QrQlVzS1ZZdVJEWFFQSWU3SU1ybEpEWlF5U2VVQ3hiaWhNTys1MWllVHp6WmY0Rm1vaTBrQlV6M3hPUkFGRHZkcVMyWGFOQ3Y4Y0pqSmRFcEFDczlHOWl4a01NaWFPTnovTUZwNFdzN1BONXZtam4rYUlOMWZQVFBVZ3lLV1l6RXI0UG5oNmJhdWlaR1RYQXh4RklNaWtBYnBuOUh5U1p0R09zM1BmYnJsSHpmQkZxLzlBREFHcWRWTDA0ZFd5L0VOREtUMm9naW9BTnE3dytBV0RseHR5U0xZL0ovbDRDU1NhRktTa2J6Q3lJNklCQW4rd2tBdHV1VVdraGEvZDh0eHNPajY2ZVFaa2dBa1NINVhVdWVBbllNSTNGbHdOVE1Cc1RTRElwaUVnUWtXRG1VajkvSDRGdDF5Z0E5YjQvbkw3SEI0WGduUGt3Nm9GejQvOGw0STVwSDRKeXdJYWVtQ1V6QzJZODlNbm9nVmFtaFJ6Tm4yZ1BtRmsvVkJGUGowMWxrUmdrRU9VQlBYUm9zMTcyL25PWFJGcElNeWU4Skg3RUVMaTR2bXNCMU8rdm5TTGFoK1B5NXU0UEVmM1NJdUxxTm9kNS8vN2FxY3ViVEZ4YzUzOC8zcnFYUHAzQklUQ3V0R01LY0VuMGRYMXp1NlZlMGJ6VGNtb1ZpRkdKRWNRU1VFRktyYVYyckhVSEU5QzdnSENPZTVYYllVb0xXUUZZVFNaZzRNYlhKUUhnWUpFWlF0VE55T3dGYmhuYXBHeVhtelYvczE1NjdVVDFBWFBwU0F0WjJXNzJ4Um5nZHN3alVYM2c0NjE3dWJyTndjeWxYZTh1ZEg5NEppSzFXUzkvRCtrODZuSnE1Z0h0azFLWkpMUFdlQUdnRHRrakp0K09MY09mWkdLdTZQOEFKVm9vaklLZGhQVUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDQUFBQUFnQ0FZQUFBQnplbnIwQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBR3VTVVJCVkZpRjdWWkxic0l3RUgyVDNxQmwyU0lxQVdjZ2JHcHUwcDZBM0lEa0J1RUVwU2VKMlpEMENvUUZFbXpoQ0prdWdpdkxrTVJPa2JySjIxaVd4L041TS9ZTTBLSERQK1BoTDVkSC9qenA5ZjNYMHlHVGJYVlEyNHZqYVJBeTgrS3lsWG02bkxYUjA0b0J3emdBREhwOW45b3c0Y3lBYnB5WlpnQkF4RW01VXJUZHhLR0xQaWNHaHBOQUFQeXBqT1ZwdkRvZnMzMnY3eE1BQVVBOFB2dnI4ekhiMityMFhCd2dLaU0zSTkxdTRwQ0lJbDNHV3FldG9FWjlaY0dOL0htQ2tnbnJvclJpd01oN1ZDV25uWWt5WFhkeVFJR0lvbDBXeTZyelhSWkwxMVEwcGtDUFBrK1hWaWxUcVdDbVdaM0RnQU1ES2pKTDJYVzVOclBRNkFBenZ3RkFVVURhT3VBaWE4T0FBTXI4VmdrTUo0RVlUNE5RN1RWWmNROEhwREpTcWNTRFlPYUZrckY5QWJZTzFFSXYwaHNzbVh0M0Irb0thdVRQV1JuWGk5VHpTdXJWM1RvMDlvTFRJWk5QTDVNUXdNRDg1eTg5QU16MGthZnhDcmg2dG8yL29WVXpVczJHQ085NjJ6MGRNbmsrZm44cHA4eG1aZE9lMi9TQ1g3cTNtemhVQlhkSmtWRG50bTNaYVI2NE1ZaGNLM1NjQ1ZxTlpPck42eU1aRWEyTEFyTHA2KzNRb1lPSkg5Sng1QU1aTHV1bkFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJnQUFBQVlDQVlBQUFEZ2R6MzRBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFFd1NVUkJWRWlKMVZYTGNZTXdFSDNMcEJTY0duQXVVU295SFJoM2dDdXljc0dwQWFjVzFnZXpzQmI2SU5zem1id1RnOUQ3N0s0UThOOUJyeUlxcTlvVUJRd3pmeExSZDkrMURRQzh2WUtZaVBjQUcrYmJPMlkyQUo0VDBNVHVHaEVkNURsTFlDYUZBVmd2V1dZNkVQRnBJWlpQZkUvNis5TmFBSGovcUJ0bTNnUEE1WHljZUlNSlVtNkZXQ0RrdWp6ZUJHdmN1Z2k1djBzd2Y1UjJHNExyZmhJb3E5cUlBeUhXczV5QzdCMEdMSXhNY1hSTTE5VXd3SzRvajcyY2oxOUJBYjFCdTNMRjNGU2I3WTVEYTE2QmxKaHVZcXk1Z2lJbTBIZHQwM2R0b3plWFZXMFdMajNOWFNYZ3dON0k1alRpUGpZTXF3V1lKNWNHbU1zWGM1OGxNRTZSQmJ4ai9ieUFodjZwcGM1S2xvQXEweWdVTHcvd3dJMjIyZTVPR1BzUUdrMk43QkpKaWpYdUg0YnZMUHdacnVsYnhDZ3FTWGxRQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQmdBQUFBWUNBWUFBQURnZHozNEFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUcyU1VSQlZFaUoxVlhCa1p0QUVPekdGNEh0cCsyWFVBeWdqMWFaWEFhUUFaQUJpc0NoZ0Q0U01VajNzT3Y4UFlkQSt3RWpMVWpjSFNwL3JsOWJ6RERiMjlPekMzeDA4TjRmd3ppcEFMaHpJYkk0N3N0OG5CZk1MYnlJVWhmR2lVanVKRzVPaHkxSkZwS3lSWlM2Y2Y2bnVSdDgvUkU5a3R3ZDkyWCs5MC96Q3dCZW5wdjZ5L2ZJQlFINTh0elVmdjdEWFBhU3N0TmhlMHRhQjJBMy9qaHJneUNBa3pCZ3VJaFNSeXI3THoxbzIySHhNRTRxVXBWSmR1dWZXU2ZvNFhyV0ZZQzZhM1JaVHlYZnN3R3MrT213M2J5VmV5WFJMYXZaOTE2T2dtUUJuR2ZoZFRMakFsNnM5clZkcnRJY0FIeXR3emlwSkJaUHpUc2tDZ0k0NE9LRTVTck5KV1hMVlFvQWtMUW1lV1ZEVWhrd2JMNlBzMFNTMW43Z3VDOXo4N3VrRElBYjU2RHp2Z3ZqUkhiQ0t3SzJNRDJuR2plNmUycGJXeitNaU1TTkw5bkRKY2lDVkxWY3BibXZzdzFTZHdKdU9pbUJ0a1ZmV0ptUjZ1UlU1Uk1malB5bzBjYkNZY0tTdHJrZjY0YnZZbzdCSFBSSG8rblp0cWlmbXZKTnIvdm9idGxMcjI0TzJ0VFlUOEM5RnB6OUhyd0h2cDN2ZnRFTXBubmJvdTV1VzYzOW5zeCtjTWI0L0MzK0RlZ25pVWRnMnVZZkYvOEFGN25kTzhmQUxkQUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01M2M3MDdhMCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcbmltcG9ydCBzdHlsZTEgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9NTNjNzA3YTAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1M2M3MDdhMFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1M2M3MDdhMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1M2M3MDdhMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1M2M3MDdhMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUzYzcwN2EwJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzUzYzcwN2EwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyRXhhbWluZVNpdGVMaXN0L2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPTUzYzcwN2EwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTUzYzcwN2EwJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==