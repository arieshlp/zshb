(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[57],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/factorDetail/components/dataTable.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/factorDetail/components/dataTable.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "dataTable",
  props: {
    /*id: {
      type: String,
      default: () => {
      }
    },
    time: {
      type: String,
      default: () => {
      }
    },
    timeType: {
      type: String,
      default: () => {
      }
    },
    listType: {
      type: String,
      default: () => {
      }
    },
    stationName: {
      type: String,
      default: () => {
      }
    },*/
    factorList: {
      type: Array,
      default: function _default() {}
    },
    tableData: {
      type: Array,
      default: function _default() {}
    }
  },
  watch: {
    time: function time(newD, oldD) {
      this.getData();
      this.getTable();
    },
    id: function id(newD, oldD) {
      this.getData();
      this.getTable();
    }
  },
  data: function data() {
    return {
      /*factorList:[],
      list: [],
      tableData: []*/
    };
  },
  methods: {
    /*getData() {
      this.factorList = [];
      let info = {
        type: this.listType,
        dateTime: this.timeType === "时" ? this.time + ":00" : this.time,
        siteId: this.id,
        timeType: this.timeType,
      };
      hourLine(info).then(res => {
        let resData = res.data;
        this.factorList = resData.factorList;
      })
    },
    getTable() {
      let info = {
        type: this.listType,
        dateTime: this.timeType == "时" ? this.time + ":00" : this.time,
        siteId: this.id,
        timeType: this.timeType,
      };
      dataTable(info).then((res) => {
        if (res.code == 200) {
          this.tableData = res.data;
        }
      });
    },*/
    timeFormat: function timeFormat(data) {
      if (data) {
        if (this.timeType === '时') {
          return "".concat(data.substring(8, 10), "\u65E5").concat(data.substring(11, 13), "\u65F6");
        } else if (this.timeType === '日') {
          return "".concat(data.substring(5, 10));
        } else {
          return data;
        }
      } else {
        return '-';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/factorDetail/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/factorDetail/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _views_waterHomePage_examineSiteList_components_timeSelect_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/views/waterHomePage/examineSiteList/components/timeSelect.vue */ "./src/views/waterHomePage/examineSiteList/components/timeSelect.vue");
/* harmony import */ var _views_waterHomePage_stationDetail_components_monitorItem_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/waterHomePage/stationDetail/components/monitorItem.vue */ "./src/views/waterHomePage/stationDetail/components/monitorItem.vue");
/* harmony import */ var _views_waterHomePage_stationDetail_factorDetail_components_dataTable_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/views/waterHomePage/stationDetail/factorDetail/components/dataTable.vue */ "./src/views/waterHomePage/stationDetail/factorDetail/components/dataTable.vue");
/* harmony import */ var _stationDetail_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../stationDetail.scss */ "./src/views/waterHomePage/stationDetail/stationDetail.scss");
/* harmony import */ var _stationDetail_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_stationDetail_scss__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _api_water_envir__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/water_envir */ "./src/api/water_envir.js");




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    timeSelect: _views_waterHomePage_examineSiteList_components_timeSelect_vue__WEBPACK_IMPORTED_MODULE_4__["default"],
    monitorItem: _views_waterHomePage_stationDetail_components_monitorItem_vue__WEBPACK_IMPORTED_MODULE_5__["default"],
    dataTableItem: _views_waterHomePage_stationDetail_factorDetail_components_dataTable_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      level: '',
      title: "",
      active: 0,
      timeType: "",
      flagType: "",
      countryTab: [{
        label: "时值",
        val: "时"
      }, {
        label: "日值",
        val: "日"
      }, {
        label: "月值",
        val: "月"
      }, {
        label: "年值",
        val: "年"
      }],
      provinceTab: [{
        label: "月值",
        val: "月"
      }, {
        label: "年值",
        val: "年"
      }],
      arr: [{
        label: "时值",
        val: "时"
      }, {
        label: "日值",
        val: "日"
      }, {
        label: "月值",
        val: "月"
      }, {
        label: "年值",
        val: "年"
      }],
      id: '',
      nowTime: "",
      dataType: "",
      listType: "",
      stationName: "",
      tableData: [],
      factorList: [],
      queryParams: {}
    };
  },
  mounted: function mounted() {
    this.initData();
  },
  methods: {
    initData: function initData() {
      var _this = this;

      return Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var tempD, tempGsType;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.id = _this.$route.query.id;
                _this.timeType = _this.$route.query.timeType; //时、日、月、年

                _this.flagType = _this.$route.query.flagType; //为了区分饮用水源地断面

                _this.nowTime = _this.$route.query.time;
                _context.next = 6;
                return _this.querySiteDes();

              case 6:
                tempD = _context.sent;
                _this.level = tempD.ctrlLevel ? tempD.ctrlLevel.substr(0, 1) : '';
                tempGsType = tempD.ctrlLevel;

                if (tempGsType) {
                  if (tempGsType === "国控" || tempD.monitorType === "自动") {
                    _this.arr = _this.countryTab;
                  } else {
                    _this.arr = _this.provinceTab;
                  }
                } else {
                  if (tempD.monitorType == "手工") {
                    _this.arr = _this.provinceTab;
                  } else {
                    _this.arr = _this.countryTab;
                  }
                }

                _this.stationName = tempD.siteName;
                _this.listType = tempD.siteType; //断面/湖库等

                _this.title = tempD.siteName + "水质现状";
                _this.queryParams = {
                  type: _this.listType,
                  dateTime: _this.timeType === "时" ? _this.nowTime + ":00" : _this.nowTime,
                  siteId: _this.id,
                  timeType: _this.timeType
                };
                setTimeout(function () {
                  _this.queryDataDes();
                }, 1000);

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    queryDataDes: function queryDataDes() {
      this.queryParams = {
        type: this.listType,
        dateTime: this.timeType === "时" ? this.nowTime + ":00" : this.nowTime,
        siteId: this.id,
        timeType: this.timeType
      };
      this.getData();
      this.getTable();
    },
    //查询站点信息详情，如站点id、国省控、手工、自动等
    querySiteDes: function querySiteDes() {
      var _this2 = this;

      return new Promise(function (resolve) {
        try {
          Object(_api_water_envir__WEBPACK_IMPORTED_MODULE_8__["stationDes"])({
            siteId: _this2.id,
            type: _this2.flagType
          }).then(function (res) {
            resolve(res.data);
          });
        } catch (e) {
          resolve([]);
        }
      });
    },
    getData: function getData() {
      var _this3 = this;

      this.factorList = [];

      if (this.listType === '') {
        return;
      }

      Object(_api_water_envir__WEBPACK_IMPORTED_MODULE_8__["hourLine"])(this.queryParams).then(function (res) {
        var resData = res.data;
        _this3.factorList = resData.factorList;
      });
    },
    getTable: function getTable() {
      var _this4 = this;

      if (this.listType === '') {
        return;
      }

      Object(_api_water_envir__WEBPACK_IMPORTED_MODULE_8__["dataTable"])(this.queryParams).then(function (res) {
        if (res.code == 200) {
          _this4.tableData = res.data;
        }
      });
    },
    timeFn: function timeFn(data) {
      this.nowTime = data.toString();
      this.queryDataDes();
    },
    tabChange: function tabChange(data) {
      this.timeType = data.val;
      this.queryDataDes();
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/factorDetail/components/dataTable.vue?vue&type=template&id=09c20148&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/factorDetail/components/dataTable.vue?vue&type=template&id=09c20148&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "card-chart" }, [
    _vm._m(0),
    _c("table", { staticClass: "table-wrapper", attrs: { width: "100%" } }, [
      _c("thead", [
        _c(
          "tr",
          { staticClass: "table-header" },
          [
            _c("th", { attrs: { width: "80" } }, [_vm._v("时间")]),
            _vm._l(_vm.factorList, function (item) {
              return _c("th", [
                _vm._v(" " + _vm._s(item.factorName)),
                _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: item.factorName != "ph",
                        expression: "item.factorName != 'ph'",
                      },
                    ],
                  },
                  [_vm._v("（" + _vm._s(item.unit) + "）")]
                ),
              ])
            }),
          ],
          2
        ),
      ]),
      _c(
        "tbody",
        _vm._l(_vm.tableData, function (data) {
          return _c(
            "tr",
            [
              _c("td", [_vm._v(_vm._s(_vm.timeFormat(data.time)))]),
              _vm._l(_vm.factorList, function (e) {
                return _c("td", [
                  _vm._v(" " + _vm._s(data[e.factor].value) + " "),
                ])
              }),
            ],
            2
          )
        }),
        0
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "chart-top" }, [
      _c("div", { staticClass: "chart-title" }, [_vm._v("数据详情")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/factorDetail/index.vue?vue&type=template&id=0b95b7d1&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/factorDetail/index.vue?vue&type=template&id=0b95b7d1&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "stationDetail" },
    [
      _c("van-nav-bar", {
        attrs: { "left-arrow": "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
        scopedSlots: _vm._u([
          {
            key: "title",
            fn: function () {
              return [
                _vm.level
                  ? _c("div", { staticClass: "zdlx" }, [
                      _vm._v(_vm._s(_vm.level)),
                    ])
                  : _vm._e(),
                _c("span", { staticClass: "into-map" }, [
                  _vm._v(_vm._s(_vm.title)),
                ]),
              ]
            },
            proxy: true,
          },
        ]),
      }),
      _c("div", { staticClass: "card-tab" }, [
        _c(
          "ul",
          _vm._l(_vm.arr, function (item, index) {
            return _c(
              "li",
              {
                class: { active: _vm.timeType == item.val },
                on: {
                  click: function ($event) {
                    return _vm.tabChange(item, index)
                  },
                },
              },
              [_vm._v(_vm._s(item.label))]
            )
          }),
          0
        ),
      ]),
      _c(
        "div",
        { staticClass: "content-wrapper" },
        [
          _c("timeSelect", {
            attrs: { option: _vm.timeType, time: _vm.nowTime },
            on: { getTime: _vm.timeFn },
          }),
          _c(
            "div",
            { staticClass: "card-content-detail" },
            [
              _c("monitorItem", {
                attrs: {
                  id: _vm.id,
                  time: _vm.nowTime,
                  timeType: _vm.timeType,
                  listType: _vm.listType,
                  stationName: _vm.stationName,
                },
              }),
              _c("dataTableItem", {
                attrs: { factorList: _vm.factorList, tableData: _vm.tableData },
              }),
            ],
            1
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/views/waterHomePage/stationDetail/stationDetail.scss":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-3-1!./node_modules/postcss-loader/src??ref--9-oneOf-3-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-3-3!./src/views/waterHomePage/stationDetail/stationDetail.scss ***!
  \***************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @/assets/listbg.png */ "./src/assets/listbg.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".card-list {\n  width: calc(100% - 20px);\n  height: auto;\n  opacity: 1;\n  border-radius: 10px;\n  background: linear-gradient(180deg, rgba(68, 123, 252, 0.1) 0%, rgba(68, 123, 252, 0) 40px), white;\n  border: 1px solid white;\n  margin: 0 9px 10px 9px;\n}\n.card-list .list-top {\n  width: 100%;\n  height: 40px;\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n.card-list .list-top .list-title {\n  font-size: 14px;\n  font-weight: 600;\n  color: #447bfc;\n  padding-left: 15px;\n}\n.card-list .list-top .list-length {\n  width: auto;\n  height: 18px;\n  display: inline-block;\n  opacity: 1;\n  border-radius: 4px;\n  line-height: 18px;\n  padding: 0 6px;\n  border: 1px solid #27d043;\n  font-size: 12px;\n  font-weight: 500;\n  color: #27d043;\n  margin-left: 10px;\n}\n.card-list .list-top .list-right {\n  font-size: 14px;\n  color: rgba(18, 18, 54, 0.5);\n  position: absolute;\n  right: 20px;\n}\n.card-list .list-info {\n  width: calc(100% - 12px);\n  height: 54px;\n  margin: 8px 6px;\n  opacity: 1;\n  border-radius: 10px;\n  background: #fff;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: 100% 100%;\n  background-position: center center;\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);\n}\n.card-list .list-info .list-item {\n  display: flex;\n  align-items: center;\n  height: 54px;\n}\n.card-list .list-info .list-mc {\n  width: calc(50% - 15px);\n  padding-left: 15px;\n  font-size: 14px;\n  font-weight: 400;\n  color: black;\n}\n.card-list .list-info .list-xz {\n  width: 25%;\n  display: flex;\n  align-items: center;\n}\n.card-list .list-info .list-xz .xz-words {\n  width: 42px;\n  height: 18px;\n  text-align: center;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 18px;\n  color: white;\n  background-size: 100% 100%;\n  background-position: center center;\n}\n.card-list .list-info .list-words {\n  width: 10%;\n  font-size: 14px;\n  font-weight: 400;\n  color: rgba(18, 18, 54, 0.5);\n}\n.card-list .list-info .list-mb {\n  width: 15%;\n  display: flex;\n  align-items: center;\n}\n.card-list .list-info .list-mb .mb-words {\n  width: 30px;\n  height: 18px;\n  text-align: center;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 18px;\n}\n.card-list .list-content {\n  width: calc(100% - 12px);\n  height: auto;\n  display: inline-block;\n  margin: 6px;\n  opacity: 1;\n  border-radius: 10px;\n}\n.card-list .list-content .content-left {\n  width: calc(100% - 66px);\n  float: left;\n}\n.card-list .list-content .content-left .left-name {\n  font-size: 14px;\n  line-height: 30px;\n  color: black;\n  padding-left: 10px;\n}\n.card-list .list-content .content-left .left-words {\n  font-size: 12px;\n  line-height: 20px;\n  color: rgba(18, 18, 54, 0.5);\n  padding-left: 10px;\n}\n.card-list .list-content .content-right {\n  width: 66px;\n  font-size: 14px;\n  color: rgba(18, 18, 54, 0.5);\n  float: right;\n  line-height: 30px;\n}\n.card-list .list-content .content-right img {\n  width: 14px;\n  height: 14px;\n  margin-left: 10px;\n  position: relative;\n  top: 2px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/factorDetail/components/dataTable.vue?vue&type=style&index=0&id=09c20148&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/factorDetail/components/dataTable.vue?vue&type=style&index=0&id=09c20148&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".card-chart[data-v-09c20148] {\n  width: calc(100% - 20px);\n  min-height: 100px;\n  display: inline-block;\n  opacity: 1;\n  border-radius: 10px;\n  background: linear-gradient(180deg, rgba(68, 123, 252, 0.1) 0%, rgba(68, 123, 252, 0) 20%), white;\n  border: 1px solid white;\n  margin: 0 9px 10px 9px;\n}\n.card-chart .chart-top[data-v-09c20148] {\n  width: 100%;\n  height: 40px;\n  line-height: 40px;\n}\n.card-chart .chart-top .chart-title[data-v-09c20148] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #447bfc;\n  padding-left: 15px;\n  float: left;\n}\nth[data-v-09c20148] {\n  font-weight: bold;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/factorDetail/index.vue?vue&type=style&index=0&id=0b95b7d1&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/factorDetail/index.vue?vue&type=style&index=0&id=0b95b7d1&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".stationDetail[data-v-0b95b7d1] {\n  height: 100vh;\n  width: 100%;\n}\n.stationDetail .card-tab[data-v-0b95b7d1] {\n  width: 100%;\n  height: 50px;\n  background: #fff;\n}\n.stationDetail .card-tab ul[data-v-0b95b7d1] {\n  width: calc(100% - 60px);\n  margin: 0 30px;\n  height: 100%;\n  display: flex;\n}\n.stationDetail .card-tab ul li[data-v-0b95b7d1] {\n  flex: 1;\n  float: left;\n  line-height: 30px;\n  text-align: center;\n  font-size: 14px;\n  color: rgba(18, 18, 54, 0.5);\n  margin: 12px 10px 0;\n}\n.stationDetail .card-tab ul .active[data-v-0b95b7d1] {\n  height: 30px;\n  opacity: 1;\n  border-radius: 28px;\n  background: linear-gradient(225deg, #4975ec 0%, #97b3ff 100%);\n  box-shadow: 0px 2px 10px rgba(84, 125, 239, 0.4);\n  color: #fff;\n}\n.stationDetail .content-wrapper[data-v-0b95b7d1] {\n  height: calc(100vh - 104px);\n  width: 100%;\n}\n.stationDetail .content-wrapper .card-content-detail[data-v-0b95b7d1] {\n  width: 100%;\n  height: calc(100% - 50px);\n  overflow: auto;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/factorDetail/index.vue?vue&type=style&index=1&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/factorDetail/index.vue?vue&type=style&index=1&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @/assets/lxbg.png */ "./src/assets/lxbg.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".stationDetail .van-nav-bar__text {\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 14px;\n  font-weight: 500;\n}\n.stationDetail .van-search__content--round {\n  background: rgba(18, 18, 54, 0.03);\n}\n.stationDetail .van-nav-bar__right {\n  font-size: 12px;\n  font-weight: 500;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: rgba(18, 18, 54, 0.5);\n}\n.stationDetail .zdlx {\n  width: 20px;\n  height: 20px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-size: 12px;\n  font-weight: 400;\n  letter-spacing: 0px;\n  text-align: center;\n  line-height: 20px;\n  color: white;\n  float: left;\n  margin-right: 4px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/factorDetail/components/dataTable.vue?vue&type=style&index=0&id=09c20148&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/factorDetail/components/dataTable.vue?vue&type=style&index=0&id=09c20148&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./dataTable.vue?vue&type=style&index=0&id=09c20148&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/factorDetail/components/dataTable.vue?vue&type=style&index=0&id=09c20148&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("49ba8ee6", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/factorDetail/index.vue?vue&type=style&index=0&id=0b95b7d1&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/factorDetail/index.vue?vue&type=style&index=0&id=0b95b7d1&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=0b95b7d1&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/factorDetail/index.vue?vue&type=style&index=0&id=0b95b7d1&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("8e6c9b50", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/factorDetail/index.vue?vue&type=style&index=1&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/factorDetail/index.vue?vue&type=style&index=1&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/factorDetail/index.vue?vue&type=style&index=1&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("30ed3390", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/listbg.png":
/*!*******************************!*\
  !*** ./src/assets/listbg.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/factorDetail/components/dataTable.vue":
/*!*************************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/factorDetail/components/dataTable.vue ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dataTable_vue_vue_type_template_id_09c20148_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dataTable.vue?vue&type=template&id=09c20148&scoped=true& */ "./src/views/waterHomePage/stationDetail/factorDetail/components/dataTable.vue?vue&type=template&id=09c20148&scoped=true&");
/* harmony import */ var _dataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dataTable.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/stationDetail/factorDetail/components/dataTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _dataTable_vue_vue_type_style_index_0_id_09c20148_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataTable.vue?vue&type=style&index=0&id=09c20148&lang=scss&scoped=true& */ "./src/views/waterHomePage/stationDetail/factorDetail/components/dataTable.vue?vue&type=style&index=0&id=09c20148&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _dataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dataTable_vue_vue_type_template_id_09c20148_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _dataTable_vue_vue_type_template_id_09c20148_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "09c20148",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/stationDetail/factorDetail/components/dataTable.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/factorDetail/components/dataTable.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/factorDetail/components/dataTable.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./dataTable.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/factorDetail/components/dataTable.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dataTable_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/factorDetail/components/dataTable.vue?vue&type=style&index=0&id=09c20148&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/factorDetail/components/dataTable.vue?vue&type=style&index=0&id=09c20148&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dataTable_vue_vue_type_style_index_0_id_09c20148_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./dataTable.vue?vue&type=style&index=0&id=09c20148&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/factorDetail/components/dataTable.vue?vue&type=style&index=0&id=09c20148&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dataTable_vue_vue_type_style_index_0_id_09c20148_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dataTable_vue_vue_type_style_index_0_id_09c20148_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dataTable_vue_vue_type_style_index_0_id_09c20148_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dataTable_vue_vue_type_style_index_0_id_09c20148_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/factorDetail/components/dataTable.vue?vue&type=template&id=09c20148&scoped=true&":
/*!********************************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/factorDetail/components/dataTable.vue?vue&type=template&id=09c20148&scoped=true& ***!
  \********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dataTable_vue_vue_type_template_id_09c20148_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./dataTable.vue?vue&type=template&id=09c20148&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/factorDetail/components/dataTable.vue?vue&type=template&id=09c20148&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dataTable_vue_vue_type_template_id_09c20148_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_dataTable_vue_vue_type_template_id_09c20148_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/factorDetail/index.vue":
/*!**********************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/factorDetail/index.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_0b95b7d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=0b95b7d1&scoped=true& */ "./src/views/waterHomePage/stationDetail/factorDetail/index.vue?vue&type=template&id=0b95b7d1&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/stationDetail/factorDetail/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_0b95b7d1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=0b95b7d1&lang=scss&scoped=true& */ "./src/views/waterHomePage/stationDetail/factorDetail/index.vue?vue&type=style&index=0&id=0b95b7d1&lang=scss&scoped=true&");
/* harmony import */ var _index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=1&lang=scss& */ "./src/views/waterHomePage/stationDetail/factorDetail/index.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_0b95b7d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_0b95b7d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0b95b7d1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/stationDetail/factorDetail/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/factorDetail/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/factorDetail/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/factorDetail/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/factorDetail/index.vue?vue&type=style&index=0&id=0b95b7d1&lang=scss&scoped=true&":
/*!********************************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/factorDetail/index.vue?vue&type=style&index=0&id=0b95b7d1&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0b95b7d1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=0b95b7d1&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/factorDetail/index.vue?vue&type=style&index=0&id=0b95b7d1&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0b95b7d1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0b95b7d1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0b95b7d1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0b95b7d1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/factorDetail/index.vue?vue&type=style&index=1&lang=scss&":
/*!********************************************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/factorDetail/index.vue?vue&type=style&index=1&lang=scss& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/factorDetail/index.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/factorDetail/index.vue?vue&type=template&id=0b95b7d1&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/factorDetail/index.vue?vue&type=template&id=0b95b7d1&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0b95b7d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=0b95b7d1&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/factorDetail/index.vue?vue&type=template&id=0b95b7d1&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0b95b7d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0b95b7d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/stationDetail.scss":
/*!******************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/stationDetail.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-3-1!../../../../node_modules/postcss-loader/src??ref--9-oneOf-3-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-3-3!./stationDetail.scss */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./src/views/waterHomePage/stationDetail/stationDetail.scss");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5f726791", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9mYWN0b3JEZXRhaWwvY29tcG9uZW50cy9kYXRhVGFibGUudnVlIiwid2VicGFjazovLy9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2ZhY3RvckRldGFpbC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9mYWN0b3JEZXRhaWwvY29tcG9uZW50cy9kYXRhVGFibGUudnVlPzc5NTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9mYWN0b3JEZXRhaWwvaW5kZXgudnVlPzc1NjEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RvZXMtbm90LWV4Y2VlZC1zYWZlLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5hcnJheS5jb25jYXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9zdGF0aW9uRGV0YWlsLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9mYWN0b3JEZXRhaWwvY29tcG9uZW50cy9kYXRhVGFibGUudnVlPzgxMTYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9mYWN0b3JEZXRhaWwvaW5kZXgudnVlPzJhZDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9mYWN0b3JEZXRhaWwvaW5kZXgudnVlPzcwMWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9mYWN0b3JEZXRhaWwvY29tcG9uZW50cy9kYXRhVGFibGUudnVlPzRiMjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9mYWN0b3JEZXRhaWwvaW5kZXgudnVlPzgwMGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9mYWN0b3JEZXRhaWwvaW5kZXgudnVlP2E0NDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9saXN0YmcucG5nIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvZmFjdG9yRGV0YWlsL2NvbXBvbmVudHMvZGF0YVRhYmxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2ZhY3RvckRldGFpbC9jb21wb25lbnRzL2RhdGFUYWJsZS52dWU/Zjk2NiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2ZhY3RvckRldGFpbC9jb21wb25lbnRzL2RhdGFUYWJsZS52dWU/NmZkZCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2ZhY3RvckRldGFpbC9jb21wb25lbnRzL2RhdGFUYWJsZS52dWU/YWViZiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2ZhY3RvckRldGFpbC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9mYWN0b3JEZXRhaWwvaW5kZXgudnVlP2ZkMjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9mYWN0b3JEZXRhaWwvaW5kZXgudnVlPzFhZmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9mYWN0b3JEZXRhaWwvaW5kZXgudnVlPzU1NWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9mYWN0b3JEZXRhaWwvaW5kZXgudnVlP2M2OWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9zdGF0aW9uRGV0YWlsLnNjc3M/NTMxMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0QkE7QUFDQTtBQUNBLG1CQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBREE7QUFFQSxvQ0FDQTtBQUhBLEtBMUJBO0FBK0JBO0FBQ0EsaUJBREE7QUFFQSxvQ0FDQTtBQUhBO0FBL0JBLEdBRkE7QUF1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUpBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFSQSxHQXZDQTtBQWlEQSxNQWpEQSxrQkFpREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0EsR0F2REE7QUF3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0EzQkEsc0JBMkJBLElBM0JBLEVBMkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FGQSxNQUVBO0FBQ0E7QUFDQSxTQUZBLE1BRUE7QUFDQTtBQUNBO0FBQ0EsT0FSQSxNQVFBO0FBQ0E7QUFDQTtBQUVBO0FBeENBO0FBeERBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUEsd0NBQXNVLENBQWdCLDBVQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQTFWO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdHO0FBQ3ZDO0FBQ0w7QUFDc0M7QUFDeEI7OztBQUdsRTtBQUNtRztBQUNuRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsNEZBQU07QUFDUixFQUFFLHFHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN4Q2Y7QUFBQTtBQUFBLHdDQUFzVCxDQUFnQixzVUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0ExVTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyx1WkFBb087QUFDMVA7QUFDQSw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLGdJQUFtRTtBQUNyRiw4Q0FBOEMscUNBQXFDO0FBQ25GO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRSIsImZpbGUiOiJqcy81Ny5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZC1jaGFydFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNoYXJ0LXRvcFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2hhcnQtdGl0bGVcIj7mlbDmja7or6bmg4U8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlLXdyYXBwZXJcIiB3aWR0aD1cIjEwMCVcIj5cclxuICAgICAgPHRoZWFkPlxyXG4gICAgICA8dHIgY2xhc3M9XCJ0YWJsZS1oZWFkZXJcIj5cclxuICAgICAgICA8dGggd2lkdGg9XCI4MFwiPuaXtumXtDwvdGg+XHJcbiAgICAgICAgPHRoIHYtZm9yPVwiaXRlbSBpbiBmYWN0b3JMaXN0XCI+XHJcbiAgICAgICAgICB7eyBpdGVtLmZhY3Rvck5hbWUgfX08c3BhbiB2LXNob3c9XCJpdGVtLmZhY3Rvck5hbWUgIT0gJ3BoJ1wiPu+8iHt7IGl0ZW0udW5pdCB9fe+8iTwvc3Bhbj5cclxuICAgICAgICA8L3RoPlxyXG4gICAgICA8L3RyPlxyXG4gICAgICA8L3RoZWFkPlxyXG4gICAgICA8dGJvZHk+XHJcbiAgICAgIDx0ciB2LWZvcj1cImRhdGEgaW4gdGFibGVEYXRhXCI+XHJcbiAgICAgICAgPHRkPnt7IHRpbWVGb3JtYXQoZGF0YS50aW1lKX19PC90ZD5cclxuICAgICAgICA8dGQgdi1mb3I9XCJlIGluIGZhY3Rvckxpc3RcIj5cclxuICAgICAgICAgIHt7IGRhdGFbZS5mYWN0b3JdLnZhbHVlIH19XHJcbiAgICAgICAgPC90ZD5cclxuICAgICAgPC90cj5cclxuICAgICAgPC90Ym9keT5cclxuICAgIDwvdGFibGU+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCB7aG91ckxpbmUsZGF0YVRhYmxlfSBmcm9tIFwiQC9hcGkvd2F0ZXJfZW52aXJcIjtcclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcImRhdGFUYWJsZVwiLFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgLyppZDoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBkZWZhdWx0OiAoKSA9PiB7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB0aW1lOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6ICgpID0+IHtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHRpbWVUeXBlOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6ICgpID0+IHtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGxpc3RUeXBlOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6ICgpID0+IHtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHN0YXRpb25OYW1lOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6ICgpID0+IHtcclxuICAgICAgICB9XHJcbiAgICAgIH0sKi9cclxuICAgICAgZmFjdG9yTGlzdDoge1xyXG4gICAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICAgIGRlZmF1bHQ6ICgpID0+IHtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHRhYmxlRGF0YToge1xyXG4gICAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICAgIGRlZmF1bHQ6ICgpID0+IHtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgdGltZTogZnVuY3Rpb24gKG5ld0QsIG9sZEQpIHtcclxuICAgICAgICB0aGlzLmdldERhdGEoKVxyXG4gICAgICAgIHRoaXMuZ2V0VGFibGUoKVxyXG4gICAgICB9LFxyXG4gICAgICBpZDogZnVuY3Rpb24gKG5ld0QsIG9sZEQpIHtcclxuICAgICAgICB0aGlzLmdldERhdGEoKVxyXG4gICAgICAgIHRoaXMuZ2V0VGFibGUoKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YSgpe1xyXG4gICAgICByZXR1cm57XHJcbiAgICAgICAgLypmYWN0b3JMaXN0OltdLFxyXG4gICAgICAgIGxpc3Q6IFtdLFxyXG4gICAgICAgIHRhYmxlRGF0YTogW10qL1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAvKmdldERhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5mYWN0b3JMaXN0ID0gW107XHJcbiAgICAgICAgbGV0IGluZm8gPSB7XHJcbiAgICAgICAgICB0eXBlOiB0aGlzLmxpc3RUeXBlLFxyXG4gICAgICAgICAgZGF0ZVRpbWU6IHRoaXMudGltZVR5cGUgPT09IFwi5pe2XCIgPyB0aGlzLnRpbWUgKyBcIjowMFwiIDogdGhpcy50aW1lLFxyXG4gICAgICAgICAgc2l0ZUlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgdGltZVR5cGU6IHRoaXMudGltZVR5cGUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBob3VyTGluZShpbmZvKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICBsZXQgcmVzRGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgdGhpcy5mYWN0b3JMaXN0ID0gcmVzRGF0YS5mYWN0b3JMaXN0O1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGdldFRhYmxlKCkge1xyXG4gICAgICAgIGxldCBpbmZvID0ge1xyXG4gICAgICAgICAgdHlwZTogdGhpcy5saXN0VHlwZSxcclxuICAgICAgICAgIGRhdGVUaW1lOiB0aGlzLnRpbWVUeXBlID09IFwi5pe2XCIgPyB0aGlzLnRpbWUgKyBcIjowMFwiIDogdGhpcy50aW1lLFxyXG4gICAgICAgICAgc2l0ZUlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgdGltZVR5cGU6IHRoaXMudGltZVR5cGUsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBkYXRhVGFibGUoaW5mbykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFibGVEYXRhID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sKi9cclxuICAgICAgdGltZUZvcm1hdChkYXRhKXtcclxuICAgICAgICBpZihkYXRhKXtcclxuICAgICAgICAgIGlmKHRoaXMudGltZVR5cGU9PT0n5pe2Jyl7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHtkYXRhLnN1YnN0cmluZyg4LCAxMCl95pelJHtkYXRhLnN1YnN0cmluZygxMSwgMTMpfeaXtmBcclxuICAgICAgICAgIH1lbHNlIGlmKHRoaXMudGltZVR5cGU9PT0n5pelJyl7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHtkYXRhLnN1YnN0cmluZyg1LCAxMCl9YFxyXG4gICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICByZXR1cm4gJy0nXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgLmNhcmQtY2hhcnQge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xyXG4gICAgbWluLWhlaWdodDogMTAwcHg7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoNjgsIDEyMywgMjUyLCAwLjEpIDAlLCByZ2JhKDY4LCAxMjMsIDI1MiwgMCkgMjAlKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICBtYXJnaW46IDAgOXB4IDEwcHggOXB4O1xyXG5cclxuICAgIC5jaGFydC10b3Age1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogNDBweDtcclxuXHJcbiAgICAgIC5jaGFydC10aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoNjgsIDEyMywgMjUyLCAxKTtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG4gIHRoe1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInN0YXRpb25EZXRhaWxcIj5cclxuICAgIDx2YW4tbmF2LWJhciBsZWZ0LWFycm93IEBjbGljay1sZWZ0PVwiJHJvdXRlci5nbygtMSlcIj5cclxuICAgICAgPHRlbXBsYXRlICN0aXRsZT5cclxuICAgICAgICA8ZGl2IHYtaWY9XCJsZXZlbFwiIGNsYXNzPVwiemRseFwiPnt7bGV2ZWx9fTwvZGl2PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaW50by1tYXBcIj57e3RpdGxlfX08L3NwYW4+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8L3Zhbi1uYXYtYmFyPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtdGFiXCI+XHJcbiAgICAgIDx1bD5cclxuICAgICAgICA8bGkgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGFyclwiIDpjbGFzcz1cInsgYWN0aXZlOiB0aW1lVHlwZSA9PSBpdGVtLnZhbCB9XCIgQGNsaWNrPVwidGFiQ2hhbmdlKGl0ZW0sIGluZGV4KVwiPnt7IGl0ZW0ubGFiZWwgfX08L2xpPlxyXG4gICAgICA8L3VsPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudC13cmFwcGVyXCI+XHJcbiAgICAgIDx0aW1lU2VsZWN0IDpvcHRpb249XCJ0aW1lVHlwZVwiIDp0aW1lPVwibm93VGltZVwiIEBnZXRUaW1lPVwidGltZUZuXCIgLz5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudC1kZXRhaWxcIj5cclxuICAgICAgICA8IS0t5Zug5a2Q5YiH5o2iLS0+XHJcbiAgICAgICAgPG1vbml0b3JJdGVtIDppZD1cImlkXCIgOnRpbWU9XCJub3dUaW1lXCIgOnRpbWVUeXBlPVwidGltZVR5cGVcIiA6bGlzdFR5cGU9XCJsaXN0VHlwZVwiIDpzdGF0aW9uTmFtZT1cInN0YXRpb25OYW1lXCIvPlxyXG4gICAgICAgIDxkYXRhVGFibGVJdGVtIDpmYWN0b3JMaXN0PVwiZmFjdG9yTGlzdFwiIDp0YWJsZURhdGE9XCJ0YWJsZURhdGFcIi8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCB0aW1lU2VsZWN0IGZyb20gXCJAL3ZpZXdzL3dhdGVySG9tZVBhZ2UvZXhhbWluZVNpdGVMaXN0L2NvbXBvbmVudHMvdGltZVNlbGVjdC52dWVcIjtcclxuICBpbXBvcnQgbW9uaXRvckl0ZW0gZnJvbSBcIkAvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvbW9uaXRvckl0ZW0udnVlXCI7XHJcbiAgaW1wb3J0IGRhdGFUYWJsZUl0ZW0gZnJvbSBcIkAvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2ZhY3RvckRldGFpbC9jb21wb25lbnRzL2RhdGFUYWJsZS52dWVcIjtcclxuICBpbXBvcnQgXCIuLi9zdGF0aW9uRGV0YWlsLnNjc3NcIjtcclxuICBpbXBvcnQge3N0YXRpb25EZXMsIGhvdXJMaW5lLCBkYXRhVGFibGV9IGZyb20gXCJAL2FwaS93YXRlcl9lbnZpclwiO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcImluZGV4XCIsXHJcbiAgICBjb21wb25lbnRzOntcclxuICAgICAgdGltZVNlbGVjdCxcclxuICAgICAgbW9uaXRvckl0ZW0sXHJcbiAgICAgIGRhdGFUYWJsZUl0ZW1cclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxldmVsOiAnJyxcclxuICAgICAgICB0aXRsZTogXCJcIixcclxuICAgICAgICBhY3RpdmU6IDAsXHJcbiAgICAgICAgdGltZVR5cGU6IFwiXCIsXHJcbiAgICAgICAgZmxhZ1R5cGU6IFwiXCIsXHJcbiAgICAgICAgY291bnRyeVRhYjogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogXCLml7blgLxcIixcclxuICAgICAgICAgICAgdmFsOiBcIuaXtlwiLFxyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBsYWJlbDogXCLml6XlgLxcIixcclxuICAgICAgICAgICAgdmFsOiBcIuaXpVwiLFxyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBsYWJlbDogXCLmnIjlgLxcIixcclxuICAgICAgICAgICAgdmFsOiBcIuaciFwiLFxyXG4gICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBsYWJlbDogXCLlubTlgLxcIixcclxuICAgICAgICAgICAgdmFsOiBcIuW5tFwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIHByb3ZpbmNlVGFiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIuaciOWAvFwiLFxyXG4gICAgICAgICAgICB2YWw6IFwi5pyIXCIsXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIuW5tOWAvFwiLFxyXG4gICAgICAgICAgICB2YWw6IFwi5bm0XCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgYXJyOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIuaXtuWAvFwiLFxyXG4gICAgICAgICAgICB2YWw6IFwi5pe2XCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogXCLml6XlgLxcIixcclxuICAgICAgICAgICAgdmFsOiBcIuaXpVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwi5pyI5YC8XCIsXHJcbiAgICAgICAgICAgIHZhbDogXCLmnIhcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIuW5tOWAvFwiLFxyXG4gICAgICAgICAgICB2YWw6IFwi5bm0XCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgaWQ6ICcnLFxyXG4gICAgICAgIG5vd1RpbWU6IFwiXCIsXHJcbiAgICAgICAgZGF0YVR5cGU6IFwiXCIsXHJcbiAgICAgICAgbGlzdFR5cGU6IFwiXCIsXHJcbiAgICAgICAgc3RhdGlvbk5hbWU6IFwiXCIsXHJcbiAgICAgICAgdGFibGVEYXRhOiBbXSxcclxuICAgICAgICBmYWN0b3JMaXN0OiBbXSxcclxuICAgICAgICBxdWVyeVBhcmFtczoge31cclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICB0aGlzLmluaXREYXRhKClcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGFzeW5jIGluaXREYXRhKCkge1xyXG4gICAgICAgIHRoaXMuaWQgPSB0aGlzLiRyb3V0ZS5xdWVyeS5pZDtcclxuICAgICAgICB0aGlzLnRpbWVUeXBlID0gdGhpcy4kcm91dGUucXVlcnkudGltZVR5cGU7IC8v5pe244CB5pel44CB5pyI44CB5bm0XHJcbiAgICAgICAgdGhpcy5mbGFnVHlwZSA9IHRoaXMuJHJvdXRlLnF1ZXJ5LmZsYWdUeXBlOyAgLy/kuLrkuobljLrliIbppa7nlKjmsLTmupDlnLDmlq3pnaJcclxuICAgICAgICB0aGlzLm5vd1RpbWUgPSB0aGlzLiRyb3V0ZS5xdWVyeS50aW1lO1xyXG5cclxuICAgICAgICBsZXQgdGVtcEQgPSBhd2FpdCB0aGlzLnF1ZXJ5U2l0ZURlcygpO1xyXG5cclxuICAgICAgICB0aGlzLmxldmVsID0gdGVtcEQuY3RybExldmVsID8gdGVtcEQuY3RybExldmVsLnN1YnN0cigwLCAxKSA6ICcnO1xyXG4gICAgICAgIGxldCB0ZW1wR3NUeXBlID0gdGVtcEQuY3RybExldmVsO1xyXG4gICAgICAgIGlmICh0ZW1wR3NUeXBlKSB7XHJcbiAgICAgICAgICBpZiAodGVtcEdzVHlwZSA9PT0gXCLlm73mjqdcIiB8fCB0ZW1wRC5tb25pdG9yVHlwZSA9PT0gXCLoh6rliqhcIikge1xyXG4gICAgICAgICAgICB0aGlzLmFyciA9IHRoaXMuY291bnRyeVRhYjtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyID0gdGhpcy5wcm92aW5jZVRhYjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKHRlbXBELm1vbml0b3JUeXBlID09IFwi5omL5belXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5hcnIgPSB0aGlzLnByb3ZpbmNlVGFiO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hcnIgPSB0aGlzLmNvdW50cnlUYWI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN0YXRpb25OYW1lID0gdGVtcEQuc2l0ZU5hbWU7XHJcbiAgICAgICAgdGhpcy5saXN0VHlwZSA9IHRlbXBELnNpdGVUeXBlOyAgLy/mlq3pnaIv5rmW5bqT562JXHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRlbXBELnNpdGVOYW1lICsgXCLmsLTotKjnjrDnirZcIjtcclxuXHJcbiAgICAgICAgdGhpcy5xdWVyeVBhcmFtcyA9IHtcclxuICAgICAgICAgIHR5cGU6IHRoaXMubGlzdFR5cGUsXHJcbiAgICAgICAgICBkYXRlVGltZTogdGhpcy50aW1lVHlwZSA9PT0gXCLml7ZcIiA/IHRoaXMubm93VGltZSArIFwiOjAwXCIgOiB0aGlzLm5vd1RpbWUsXHJcbiAgICAgICAgICBzaXRlSWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICB0aW1lVHlwZTogdGhpcy50aW1lVHlwZSxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCk9PntcclxuICAgICAgICAgIHRoaXMucXVlcnlEYXRhRGVzKClcclxuICAgICAgICB9LDEwMDApXHJcbiAgICAgIH0sXHJcbiAgICAgIHF1ZXJ5RGF0YURlcygpe1xyXG4gICAgICAgIHRoaXMucXVlcnlQYXJhbXMgPSB7XHJcbiAgICAgICAgICB0eXBlOiB0aGlzLmxpc3RUeXBlLFxyXG4gICAgICAgICAgZGF0ZVRpbWU6IHRoaXMudGltZVR5cGUgPT09IFwi5pe2XCIgPyB0aGlzLm5vd1RpbWUgKyBcIjowMFwiIDogdGhpcy5ub3dUaW1lLFxyXG4gICAgICAgICAgc2l0ZUlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgdGltZVR5cGU6IHRoaXMudGltZVR5cGUsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2V0RGF0YSgpO1xyXG4gICAgICAgIHRoaXMuZ2V0VGFibGUoKTtcclxuICAgICAgfSxcclxuICAgICAgLy/mn6Xor6Lnq5nngrnkv6Hmga/or6bmg4XvvIzlpoLnq5nngrlpZOOAgeWbveecgeaOp+OAgeaJi+W3peOAgeiHquWKqOetiVxyXG4gICAgICBxdWVyeVNpdGVEZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgc3RhdGlvbkRlcyh7XHJcbiAgICAgICAgICAgICAgc2l0ZUlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICAgIHR5cGU6IHRoaXMuZmxhZ1R5cGVcclxuICAgICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgIHJlc29sdmUocmVzLmRhdGEpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoW10pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgZ2V0RGF0YSgpIHtcclxuICAgICAgICB0aGlzLmZhY3Rvckxpc3QgPSBbXTtcclxuICAgICAgICBpZih0aGlzLmxpc3RUeXBlPT09Jycpe1xyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGhvdXJMaW5lKHRoaXMucXVlcnlQYXJhbXMpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGxldCByZXNEYXRhID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICB0aGlzLmZhY3Rvckxpc3QgPSByZXNEYXRhLmZhY3Rvckxpc3Q7XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgZ2V0VGFibGUoKSB7XHJcbiAgICAgICAgaWYodGhpcy5saXN0VHlwZT09PScnKXtcclxuICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhVGFibGUodGhpcy5xdWVyeVBhcmFtcykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGFibGVEYXRhID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHRpbWVGbihkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5ub3dUaW1lID0gZGF0YS50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMucXVlcnlEYXRhRGVzKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHRhYkNoYW5nZShkYXRhKSB7XHJcbiAgICAgICAgdGhpcy50aW1lVHlwZSA9IGRhdGEudmFsO1xyXG4gICAgICAgIHRoaXMucXVlcnlEYXRhRGVzKClcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgLnN0YXRpb25EZXRhaWwge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoKTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgLmNhcmQtdGFiIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgdWwge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcclxuICAgICAgICBtYXJnaW46IDAgMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBsaSB7XHJcbiAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgICAgICBtYXJnaW46IDEycHggMTBweCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAyOHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyNWRlZywgcmdiYSg3MywgMTE3LCAyMzYsIDEpIDAlLCByZ2JhKDE1MSwgMTc5LCAyNTUsIDEpIDEwMCUpO1xyXG4gICAgICAgICAgYm94LXNoYWRvdzogMHB4IDJweCAxMHB4IHJnYmEoODQsIDEyNSwgMjM5LCAwLjQpO1xyXG4gICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuY29udGVudC13cmFwcGVyIHtcclxuICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTA0cHgpO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgLmNhcmQtY29udGVudC1kZXRhaWwge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNTBweCk7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc3R5bGU+XHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG4gIC5zdGF0aW9uRGV0YWlsIHtcclxuICAgIC52YW4tbmF2LWJhcl9fdGV4dCB7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIH1cclxuICAgIC52YW4tc2VhcmNoX19jb250ZW50LS1yb3VuZCB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTgsIDE4LCA1NCwgMC4wMyk7XHJcbiAgICB9XHJcbiAgICAudmFuLW5hdi1iYXJfX3JpZ2h0IHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG4gICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgfVxyXG4gICAgLnpkbHgge1xyXG4gICAgICB3aWR0aDogMjBweDtcclxuICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoXCJ+QC9hc3NldHMvbHhiZy5wbmdcIik7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgIH1cclxuICB9XHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1jaGFydFwiIH0sIFtcbiAgICBfdm0uX20oMCksXG4gICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLXdyYXBwZXJcIiwgYXR0cnM6IHsgd2lkdGg6IFwiMTAwJVwiIH0gfSwgW1xuICAgICAgX2MoXCJ0aGVhZFwiLCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLWhlYWRlclwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJ0aFwiLCB7IGF0dHJzOiB7IHdpZHRoOiBcIjgwXCIgfSB9LCBbX3ZtLl92KFwi5pe26Ze0XCIpXSksXG4gICAgICAgICAgICBfdm0uX2woX3ZtLmZhY3Rvckxpc3QsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcInRoXCIsIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoaXRlbS5mYWN0b3JOYW1lKSksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBpdGVtLmZhY3Rvck5hbWUgIT0gXCJwaFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJpdGVtLmZhY3Rvck5hbWUgIT0gJ3BoJ1wiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIu+8iFwiICsgX3ZtLl9zKGl0ZW0udW5pdCkgKyBcIu+8iVwiKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXSxcbiAgICAgICAgICAyXG4gICAgICAgICksXG4gICAgICBdKSxcbiAgICAgIF9jKFxuICAgICAgICBcInRib2R5XCIsXG4gICAgICAgIF92bS5fbChfdm0udGFibGVEYXRhLCBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhfdm0udGltZUZvcm1hdChkYXRhLnRpbWUpKSldKSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5mYWN0b3JMaXN0LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhkYXRhW2UuZmFjdG9yXS52YWx1ZSkgKyBcIiBcIiksXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgfSksXG4gICAgICAgIDBcbiAgICAgICksXG4gICAgXSksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjaGFydC10b3BcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNoYXJ0LXRpdGxlXCIgfSwgW192bS5fdihcIuaVsOaNruivpuaDhVwiKV0pLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJzdGF0aW9uRGV0YWlsXCIgfSxcbiAgICBbXG4gICAgICBfYyhcInZhbi1uYXYtYmFyXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgXCJsZWZ0LWFycm93XCI6IFwiXCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcImNsaWNrLWxlZnRcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLmdvKC0xKVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogXCJ0aXRsZVwiLFxuICAgICAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBfdm0ubGV2ZWxcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ6ZGx4XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmxldmVsKSksXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImludG8tbWFwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0pLFxuICAgICAgfSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGFiXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgX3ZtLl9sKF92bS5hcnIsIGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzczogeyBhY3RpdmU6IF92bS50aW1lVHlwZSA9PSBpdGVtLnZhbCB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRhYkNoYW5nZShpdGVtLCBpbmRleClcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbS5sYWJlbCkpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIDBcbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC13cmFwcGVyXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidGltZVNlbGVjdFwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBvcHRpb246IF92bS50aW1lVHlwZSwgdGltZTogX3ZtLm5vd1RpbWUgfSxcbiAgICAgICAgICAgIG9uOiB7IGdldFRpbWU6IF92bS50aW1lRm4gfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtY29udGVudC1kZXRhaWxcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcIm1vbml0b3JJdGVtXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IF92bS5pZCxcbiAgICAgICAgICAgICAgICAgIHRpbWU6IF92bS5ub3dUaW1lLFxuICAgICAgICAgICAgICAgICAgdGltZVR5cGU6IF92bS50aW1lVHlwZSxcbiAgICAgICAgICAgICAgICAgIGxpc3RUeXBlOiBfdm0ubGlzdFR5cGUsXG4gICAgICAgICAgICAgICAgICBzdGF0aW9uTmFtZTogX3ZtLnN0YXRpb25OYW1lLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcImRhdGFUYWJsZUl0ZW1cIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZhY3Rvckxpc3Q6IF92bS5mYWN0b3JMaXN0LCB0YWJsZURhdGE6IF92bS50YWJsZURhdGEgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIndXNlIHN0cmljdCc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxRkZGRkZGRkZGRkZGRjsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPiBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyAkVHlwZUVycm9yKCdNYXhpbXVtIGFsbG93ZWQgaW5kZXggZXhjZWVkZWQnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvZXMtbm90LWV4Y2VlZC1zYWZlLWludGVnZXInKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC12OC12ZXJzaW9uJyk7XG5cbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRSA9IHdlbGxLbm93blN5bWJvbCgnaXNDb25jYXRTcHJlYWRhYmxlJyk7XG5cbi8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzlcbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUID0gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgYXJyYXkgPSBbXTtcbiAgYXJyYXlbSVNfQ09OQ0FUX1NQUkVBREFCTEVdID0gZmFsc2U7XG4gIHJldHVybiBhcnJheS5jb25jYXQoKVswXSAhPT0gYXJyYXk7XG59KTtcblxudmFyIGlzQ29uY2F0U3ByZWFkYWJsZSA9IGZ1bmN0aW9uIChPKSB7XG4gIGlmICghaXNPYmplY3QoTykpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNwcmVhZGFibGUgPSBPW0lTX0NPTkNBVF9TUFJFQURBQkxFXTtcbiAgcmV0dXJuIHNwcmVhZGFibGUgIT09IHVuZGVmaW5lZCA/ICEhc3ByZWFkYWJsZSA6IGlzQXJyYXkoTyk7XG59O1xuXG52YXIgRk9SQ0VEID0gIUlTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgfHwgIWFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2NvbmNhdCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmNvbmNhdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5jb25jYXRcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBpc0NvbmNhdFNwcmVhZGFibGUgYW5kIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGFyaXR5OiAxLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycyAtLSByZXF1aXJlZCBmb3IgYC5sZW5ndGhgXG4gIGNvbmNhdDogZnVuY3Rpb24gY29uY2F0KGFyZykge1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIEEgPSBhcnJheVNwZWNpZXNDcmVhdGUoTywgMCk7XG4gICAgdmFyIG4gPSAwO1xuICAgIHZhciBpLCBrLCBsZW5ndGgsIGxlbiwgRTtcbiAgICBmb3IgKGkgPSAtMSwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBFID0gaSA9PT0gLTEgPyBPIDogYXJndW1lbnRzW2ldO1xuICAgICAgaWYgKGlzQ29uY2F0U3ByZWFkYWJsZShFKSkge1xuICAgICAgICBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShFKTtcbiAgICAgICAgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyKG4gKyBsZW4pO1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbGVuOyBrKyssIG4rKykgaWYgKGsgaW4gRSkgY3JlYXRlUHJvcGVydHkoQSwgbiwgRVtrXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIobiArIDEpO1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShBLCBuKyssIEUpO1xuICAgICAgfVxuICAgIH1cbiAgICBBLmxlbmd0aCA9IG47XG4gICAgcmV0dXJuIEE7XG4gIH1cbn0pO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCJAL2Fzc2V0cy9saXN0YmcucG5nXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2FyZC1saXN0IHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMHB4KTtcXG4gIGhlaWdodDogYXV0bztcXG4gIG9wYWNpdHk6IDE7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSg2OCwgMTIzLCAyNTIsIDAuMSkgMCUsIHJnYmEoNjgsIDEyMywgMjUyLCAwKSA0MHB4KSwgd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIG1hcmdpbjogMCA5cHggMTBweCA5cHg7XFxufVxcbi5jYXJkLWxpc3QgLmxpc3QtdG9wIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5jYXJkLWxpc3QgLmxpc3QtdG9wIC5saXN0LXRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBjb2xvcjogIzQ0N2JmYztcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG59XFxuLmNhcmQtbGlzdCAubGlzdC10b3AgLmxpc3QtbGVuZ3RoIHtcXG4gIHdpZHRoOiBhdXRvO1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgb3BhY2l0eTogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgcGFkZGluZzogMCA2cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMjdkMDQzO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjMjdkMDQzO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxufVxcbi5jYXJkLWxpc3QgLmxpc3QtdG9wIC5saXN0LXJpZ2h0IHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMjBweDtcXG59XFxuLmNhcmQtbGlzdCAubGlzdC1pbmZvIHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxMnB4KTtcXG4gIGhlaWdodDogNTRweDtcXG4gIG1hcmdpbjogOHB4IDZweDtcXG4gIG9wYWNpdHk6IDE7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxuICBib3gtc2hhZG93OiAwcHggNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG59XFxuLmNhcmQtbGlzdCAubGlzdC1pbmZvIC5saXN0LWl0ZW0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDU0cHg7XFxufVxcbi5jYXJkLWxpc3QgLmxpc3QtaW5mbyAubGlzdC1tYyB7XFxuICB3aWR0aDogY2FsYyg1MCUgLSAxNXB4KTtcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogYmxhY2s7XFxufVxcbi5jYXJkLWxpc3QgLmxpc3QtaW5mbyAubGlzdC14eiB7XFxuICB3aWR0aDogMjUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jYXJkLWxpc3QgLmxpc3QtaW5mbyAubGlzdC14eiAueHotd29yZHMge1xcbiAgd2lkdGg6IDQycHg7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBjZW50ZXI7XFxufVxcbi5jYXJkLWxpc3QgLmxpc3QtaW5mbyAubGlzdC13b3JkcyB7XFxuICB3aWR0aDogMTAlO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxufVxcbi5jYXJkLWxpc3QgLmxpc3QtaW5mbyAubGlzdC1tYiB7XFxuICB3aWR0aDogMTUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jYXJkLWxpc3QgLmxpc3QtaW5mbyAubGlzdC1tYiAubWItd29yZHMge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxufVxcbi5jYXJkLWxpc3QgLmxpc3QtY29udGVudCB7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMTJweCk7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW46IDZweDtcXG4gIG9wYWNpdHk6IDE7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uY2FyZC1saXN0IC5saXN0LWNvbnRlbnQgLmNvbnRlbnQtbGVmdCB7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gNjZweCk7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLmNhcmQtbGlzdCAubGlzdC1jb250ZW50IC5jb250ZW50LWxlZnQgLmxlZnQtbmFtZSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuLmNhcmQtbGlzdCAubGlzdC1jb250ZW50IC5jb250ZW50LWxlZnQgLmxlZnQtd29yZHMge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcbn1cXG4uY2FyZC1saXN0IC5saXN0LWNvbnRlbnQgLmNvbnRlbnQtcmlnaHQge1xcbiAgd2lkdGg6IDY2cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgZmxvYXQ6IHJpZ2h0O1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxufVxcbi5jYXJkLWxpc3QgLmxpc3QtY29udGVudCAuY29udGVudC1yaWdodCBpbWcge1xcbiAgd2lkdGg6IDE0cHg7XFxuICBoZWlnaHQ6IDE0cHg7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMnB4O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jYXJkLWNoYXJ0W2RhdGEtdi0wOWMyMDE0OF0ge1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xcbiAgbWluLWhlaWdodDogMTAwcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBvcGFjaXR5OiAxO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoNjgsIDEyMywgMjUyLCAwLjEpIDAlLCByZ2JhKDY4LCAxMjMsIDI1MiwgMCkgMjAlKSwgd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIG1hcmdpbjogMCA5cHggMTBweCA5cHg7XFxufVxcbi5jYXJkLWNoYXJ0IC5jaGFydC10b3BbZGF0YS12LTA5YzIwMTQ4XSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDBweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbn1cXG4uY2FyZC1jaGFydCAuY2hhcnQtdG9wIC5jaGFydC10aXRsZVtkYXRhLXYtMDljMjAxNDhdIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogIzQ0N2JmYztcXG4gIHBhZGRpbmctbGVmdDogMTVweDtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG50aFtkYXRhLXYtMDljMjAxNDhdIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5zdGF0aW9uRGV0YWlsW2RhdGEtdi0wYjk1YjdkMV0ge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uc3RhdGlvbkRldGFpbCAuY2FyZC10YWJbZGF0YS12LTBiOTViN2QxXSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxufVxcbi5zdGF0aW9uRGV0YWlsIC5jYXJkLXRhYiB1bFtkYXRhLXYtMGI5NWI3ZDFdIHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcXG4gIG1hcmdpbjogMCAzMHB4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLnN0YXRpb25EZXRhaWwgLmNhcmQtdGFiIHVsIGxpW2RhdGEtdi0wYjk1YjdkMV0ge1xcbiAgZmxleDogMTtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgbWFyZ2luOiAxMnB4IDEwcHggMDtcXG59XFxuLnN0YXRpb25EZXRhaWwgLmNhcmQtdGFiIHVsIC5hY3RpdmVbZGF0YS12LTBiOTViN2QxXSB7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBvcGFjaXR5OiAxO1xcbiAgYm9yZGVyLXJhZGl1czogMjhweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjVkZWcsICM0OTc1ZWMgMCUsICM5N2IzZmYgMTAwJSk7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDEwcHggcmdiYSg4NCwgMTI1LCAyMzksIDAuNCk7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLnN0YXRpb25EZXRhaWwgLmNvbnRlbnQtd3JhcHBlcltkYXRhLXYtMGI5NWI3ZDFdIHtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEwNHB4KTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uc3RhdGlvbkRldGFpbCAuY29udGVudC13cmFwcGVyIC5jYXJkLWNvbnRlbnQtZGV0YWlsW2RhdGEtdi0wYjk1YjdkMV0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDUwcHgpO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIkAvYXNzZXRzL2x4YmcucG5nXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3RhdGlvbkRldGFpbCAudmFuLW5hdi1iYXJfX3RleHQge1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi5zdGF0aW9uRGV0YWlsIC52YW4tc2VhcmNoX19jb250ZW50LS1yb3VuZCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDE4LCAxOCwgNTQsIDAuMDMpO1xcbn1cXG4uc3RhdGlvbkRldGFpbCAudmFuLW5hdi1iYXJfX3JpZ2h0IHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbn1cXG4uc3RhdGlvbkRldGFpbCAuemRseCB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBtYXJnaW4tcmlnaHQ6IDRweDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9kYXRhVGFibGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDljMjAxNDgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI0OWJhOGVlNlwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2RhdGFUYWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wOWMyMDE0OCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2RhdGFUYWJsZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wOWMyMDE0OCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wYjk1YjdkMSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjhlNmM5YjUwXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MGI5NWI3ZDEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wYjk1YjdkMSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZsYW5nPXNjc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjMwZWQzMzkwXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZsYW5nPXNjc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQXRJQUFBQm1DQVlBQUFEbXJuYmdBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFjeVNVUkJWSGljN2QxYmpGMVZIY2Z4MzlwbmJtMEgyazVhWjZxbFVLYklOSlRZVWl0VmlnUmJVQ0tpUk5GRXc1TVJncjZRcUtTSkVKc294QWZqZzRsRUlUeVFFSGt3OFpJWUl5UVlzVVpOREFSdllCQU1vVjY0ZzdTRnR0TTV5d2RhZXJIWGplWE0wTS9uNWN6WisreVYvM243Wm1mTlBpVnZ3SWFiZHEwcXRmUCticTBYbFdSZGtvVnZaRDBBQURqQm5rM041bHJLL1gzTjFQMzNmRzNnRDIwWEtzZDd3WWMyMVROMlQrNytiRkt1TGlYdmFKSlNTa3JkODlwMkVBQUFPTkZxVFUxU2EwMnRyNzArV1ZMdW5FcHp4eTl1THY4OG5yV09PWHczZkdYWDJxVDVVcWZKSmYxOUdlenJaR0QyUU1xNVMwc21GcGVNemsxRzV5ZWo4MHJtREIzM2R3SUFnQk5tKzQ3a3FSZHJubmtwZWZvL3lTTmJhdjcwUk0yck85T2RuTXF1eWQzWjJhMzVhVk9udm5IdkxZTi9QcFkxanhyU1Y5eFFUM20xdi92MXBxbFh6Um5LM01IK3pMNXNkWk4zbjVVc1A4ME5hQUFBWnE2SG42ejUvZDlxN25td1p1ZXVzbTNienJ4Y3U3bHJzci81Nmk4M2xSMUh1dmFJSlh6eGpUdk83dFRPZDA2ZDFad3pkemlqRnl4UHVmSzlUVVpPK2Y5K0FRQUE2S1huWGs1KytKdHVmdmZYZEYvYVhwL1orbW9lYUxMcnVudHZucjNsY05jY05xUTMzRmlYcDA3ZHVtaWtuSFA2d2l5ODlySW1peGVjbU1FQkFHQTZlT0tabXR0L1hyUGx1ZnJzdjEvSWcwMDZuN3YzNW5MSW1ENWtTSy9mdU9QTTB1bjc5dmlpY3Y1NTQxbHc5UWVhekJvNHNVTURBTUIwc0gxSGN1ZDkzZnp4aVR6MytML3FyMnAyZlA2K1c0YWZQdmh6L3hQU2wyNnFiK3RPVG4xcitXbGwvWWFWWmV5SzgrMkRCZ0RnNVBPRFg5ZHMva3Q5NnVFbjYwODZ1enBmdlBlYlpmdis1NXY5MzF5MXFRNTBKN3RmWG5GNldidm1ySXg5NUQwaUdnQ0FrOVBIMzFkeTdoa1pPL2VNc3FFNzFMMCt0UjRReHdlRTlJdTdKejl6OXR2ckJST0xNLzZKZFUyS2pnWUE0Q1RWTk1tbkxtd3l2aWpqWnkrcUg3N2twbHgyd1BtOWYxeDZZMTA2TXFkejBjU1NjdjVIMTlvVERRQUFwODVPTGw5VE1yR2tuRDkzenRRbjEyMThhZjdlYzYrSGREZmR5MWVmVlZhdlhGcWFzZm1IWGdnQUFFNDJaNHlXVEN3dXpacXptdFd6KzRiWDd6M2VKTWtITjlabFMwZnJ4TkxSckZqelR2czVBQUJnZjJzblNoWXZ5SXJUUjNQeHVvMTFmcklucENjN1U4dFhuZG1zZk5mU1pMQy90ME1DQU1CME16eVVyRGc5V1hWbXMzS3dQeE5KMGx5MXFRNTBha2FYTEt5ckZ5OXdOeG9BQUE3bHRBVWxTeGJtdkU1M2FrbVM5TDFZTTdaK1ZWbTJjRzRabkQzWTYvRUFBR0I2bWpjbm1UczdReGV2TEt1R2JxZy9hK3Jrcm5uTHhzcjQ2RHgzb3dFQTRIQktTVWJuSjh2R3l2aTIvaDBqVFZQS3dOaElsc3diN3ZWb0FBQXd2WTBNbDR5TlpFbnBsc0dtVEtYT0h5NkxCdnQ2UFJZQUFFeHZRd1BKL09HeXFMOHpXSnB1WC84cncwTVo2ZXYwZWl3QUFKamVCdnFTNGFHTTdFcDJONW5jc1gzV1lPWUlhUUFBT0xLK1RqSnJNSE1HKzdLejZjd2EydWJud0FFQTRPaEtTV1lOSk4za2xhWjVQdHVIaERRQUFCeVRvWUdrZVQ3YlM1TFVXbXV2QndJQWdKbWlsRkthWGc4QkFBQXprWkFHQUlBV2hEUUFBTFFncEFFQW9BVWhEUUFBTFFocEFBQm9RVWdEQUVBTFFob0FBRm9RMGdBQTBJS1FCZ0NBRm9RMEFBQzBJS1FCQUtBRklRMEFBQzBJYVFBQWFFRklBd0JBQzBJYUFBQmFFTklBQU5DQ2tBWUFnQmFFTkFBQXRDQ2tBUUNnQlNFTkFBQXRDR2tBQUdoQlNBTUFRQXRDR2dBQVdoRFNBQURRZ3BBR0FJQVdoRFFBQUxRZ3BBRUFvQVVoRFFBQUxRaHBBQUJvUVVnREFFQUxRaG9BQUZvUTBnQUEwSUtRQmdDQUZvUTBBQUMwSUtRQkFLQUZJUTBBQUMwSWFRQUFhRUZJQXdCQUMwSWFBQUJhRU5JQUFOQ0NrQVlBZ0JhRU5BQUF0Q0NrQVFDZ0JTRU5BQUF0Q0drQUFHaEJTQU1BUUF0Q0dnQUFXaERTQUFEUWdwQUdBSUFXaERRQUFMUWdwQUVBb0FVaERRQUFMUWhwQUFCb1FVZ0RBRUFMUWhvQUFGb1EwZ0FBMElLUUJnQ0FGdmFHOU5hZVRnRUFBRFBIMW1SZlNEL2R3MEVBQUdBbWVUclpGOUtQOVhBUUFBQ1lTUjVMOW9YMFF6MGNCQUFBWnBLSGtuMGh2Ym1IZ3dBQXdFeXlPVWxLa3RSYVM1S1hrd3ozY2lJQUFKam10aWFaVzBxcFRaS1VVbXFTNy9kMkpnQUFtUGJ1M3RQT0J6eEgrclllRFFNQUFEUEY2ODM4ZWtpWFVoNUljbGRQeGdFQWdPbnZyajNObkdUUEh1bTlhcTNqU1I1SjB2OW1Ud1VBQU5QWVpKS0pVc3JmOXg0NDRDZkNTeW1QSjduK3paNEtBQUNtdWV2M2oramtvRHZTZTlWYXY1ZmttamRsSkFBQW1ONXVLNlZjZS9EQlE0WjBrdFJhZjVUa1l5ZDBKQUFBbU41K1hFcTU4bEFuRGh2U2laZ0dBT0NrZHRpSVRnN2FJMzJ3UFJkNkxCNEFBQ2ViN3g0cG9wT2poSFNTN05rUDhvVzg5cCtLQUFEd1ZyWXR5VFdsbE91TzlzR2poblNTbEZKdVRiSThuak1OQU1CYjEyMTU3UkYzdHgvTGg0KzRSL3BRYXEycjg5b1RQVDZkWlBoNHJ3Y0FnR2xrUzVLN2s5eFJTbm4wZUM0ODdwRGVxOVpha2x5VzVNSWtLNU1zU3pLYTVKUzJhd0lBd0FreWxlU0ZKUDlJOG1pU0I1TnNMcVg4dHFkVEFRREF5ZWEvbmM1VU9RYk1PQWNBQUFBQVNVVk9SSzVDWUlJPVwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9kYXRhVGFibGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTA5YzIwMTQ4JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2RhdGFUYWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2RhdGFUYWJsZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vZGF0YVRhYmxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA5YzIwMTQ4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMDljMjAxNDhcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMDljMjAxNDgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMDljMjAxNDgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMDljMjAxNDgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2RhdGFUYWJsZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDljMjAxNDgmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDljMjAxNDgnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvZmFjdG9yRGV0YWlsL2NvbXBvbmVudHMvZGF0YVRhYmxlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZGF0YVRhYmxlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9kYXRhVGFibGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZGF0YVRhYmxlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA5YzIwMTQ4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZGF0YVRhYmxlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wOWMyMDE0OCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBiOTViN2QxJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBiOTViN2QxJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHN0eWxlMSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjBiOTViN2QxXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzBiOTViN2QxJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzBiOTViN2QxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzBiOTViN2QxJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MGI5NWI3ZDEmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMGI5NWI3ZDEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvZmFjdG9yRGV0YWlsL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTBiOTViN2QxJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBiOTViN2QxJnNjb3BlZD10cnVlJlwiIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0zLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMy0zIS4vc3RhdGlvbkRldGFpbC5zY3NzXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjVmNzI2NzkxXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0zLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0zLTMhLi9zdGF0aW9uRGV0YWlsLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0zLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0zLTMhLi9zdGF0aW9uRGV0YWlsLnNjc3NcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==