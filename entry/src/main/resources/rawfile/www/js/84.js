(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[84],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airPollutionList/index.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airPollutionList/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_air_quality_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/air_quality.js */ "./src/api/air_quality.js");
/* harmony import */ var _components_areaFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/areaFilter */ "./src/components/areaFilter.vue");





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    areaFilter: _components_areaFilter__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      search: '',
      publicData: [],
      loading: false,
      finished: false,
      // 是否已加载完成，加载完成后不再触发load事件
      refreshing: false,
      // 下拉状态
      listQuery: {
        page: 1,
        // 当前页码数
        limit: 15 // 一页显示10条

      },
      siteId: '',
      typeName: '',
      typeId: '',
      xzqh: '',
      showFilter: false
    };
  },
  mounted: function mounted() {
    this.siteId = this.$route.query.siteId;
    this.typeName = this.$route.query.typeName;
    this.typeId = this.$route.query.typeId; //二级类型的id

    this.typeTabId = this.$route.query.typeTabId; //一级tab的id

    this.xzqh = '昆明市';
    this.loadData();
  },
  methods: {
    getDivision: function getDivision(arr) {
      if (arr.length > 0) {
        this.xzqh = arr.join(',');
        this.publicData = [];
        this.listQuery.page = 1;
        this.loadData();
      }
    },
    onSearch: function onSearch() {
      this.publicData = [];
      this.listQuery.page = 1;
      this.loadData();
    },
    loadData: function loadData() {
      this.ydzf();
    },
    toMap: function toMap(item) {
      this.$router.push({
        name: 'involveAirPollutionMap',
        query: {
          siteId: this.siteId,
          typeId: this.typeTabId,
          enterpriseName: item.enterpriseName,
          enterpriseAddress: item.address,
          enterpriseJD: item.longitude,
          enterpriseWD: item.latitude
        }
      });
    },
    ydzf: function ydzf() {
      var _this = this;

      var info = {
        name: this.search,
        siteId: this.siteId,
        typeId: this.typeId
      };
      Object(_api_air_quality_js__WEBPACK_IMPORTED_MODULE_5__["pollList"])(info).then(function (res) {
        var rdata = res.data; // 是否是第一次进入页面page==1 直接赋值

        if (_this.listQuery.page == 1) {
          _this.publicData = rdata;
        } else {
          // 如果不是则在后面追加数据，
          rdata.records.forEach(function (item) {
            _this.publicData.push(item);
          });
        } // 关闭loading


        _this.loading = false; // 当还有数据是page++

        /*if (rdata.records.length === this.listQuery.limit && rdata.total !== this.listQuery.limit) {
          this.listQuery.page++;
          this.loading = false;
        } else {
          this.finished = true;
        }*/
      });
    },
    onLoad: function onLoad() {
      var _this2 = this;

      setTimeout(function () {
        _this2.loadData();
      }, 1000);
    },
    onRefresh: function onRefresh() {
      var _this3 = this;

      setTimeout(function () {
        _this3.listQuery.page = 1;

        _this3.loadData();

        _this3.refreshing = false;
      }, 500);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airPollutionList/index.vue?vue&type=template&id=e0a6f25c&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airPollutionList/index.vue?vue&type=template&id=e0a6f25c&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "lawExamine" },
    [
      _c("van-nav-bar", {
        attrs: { title: _vm.typeName, "left-arrow": "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
      }),
      _c("areaFilter", {
        attrs: { isShow: _vm.showFilter },
        on: {
          getFilter: _vm.getDivision,
          close: function ($event) {
            _vm.showFilter = false
          },
        },
      }),
      _c("van-search", {
        attrs: { shape: "round", placeholder: "" },
        on: { search: _vm.onRefresh },
        model: {
          value: _vm.search,
          callback: function ($$v) {
            _vm.search = $$v
          },
          expression: "search",
        },
      }),
      _c(
        "div",
        { staticClass: "refreshbox" },
        [
          _c(
            "van-pull-refresh",
            {
              on: { refresh: _vm.onRefresh },
              model: {
                value: _vm.refreshing,
                callback: function ($$v) {
                  _vm.refreshing = $$v
                },
                expression: "refreshing",
              },
            },
            [
              _c(
                "van-list",
                {
                  attrs: {
                    finished: _vm.finished,
                    "finished-text": "没有更多了",
                    "immediate-check": false,
                    offset: 50,
                  },
                  on: { load: _vm.onLoad },
                  model: {
                    value: _vm.loading,
                    callback: function ($$v) {
                      _vm.loading = $$v
                    },
                    expression: "loading",
                  },
                },
                _vm._l(_vm.publicData, function (item) {
                  return _c(
                    "div",
                    {
                      staticClass: "around-wrapper fs",
                      on: {
                        click: function ($event) {
                          return _vm.toMap(item)
                        },
                      },
                    },
                    [
                      _c("img", {
                        staticStyle: { width: "16px", "margin-right": "7px" },
                        attrs: { src: __webpack_require__(/*! @/assets/公司.png */ "./src/assets/公司.png") },
                      }),
                      _c("div", { staticStyle: { width: "70%" } }, [
                        _c("div", { staticClass: "fs company-name" }, [
                          _c("span", { staticClass: "name text-ellipsis" }, [
                            _vm._v(_vm._s(item.enterpriseName)),
                          ]),
                          _c("span", { staticClass: "factor" }, [
                            _vm._v(_vm._s(item.treeName)),
                          ]),
                        ]),
                        _c("div", { staticClass: "des text-ellipsis" }, [
                          _vm._v(" " + _vm._s(item.address) + " "),
                        ]),
                      ]),
                      _c("div", { staticClass: "map-icon" }, [
                        _vm._v(" 地图"),
                        _c("img", {
                          attrs: {
                            src: __webpack_require__(/*! @/assets/moreMap.png */ "./src/assets/moreMap.png"),
                            width: "18",
                          },
                        }),
                      ]),
                    ]
                  )
                }),
                0
              ),
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

/***/ "./node_modules/core-js/internals/same-value.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/same-value.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x !== x && y !== y;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.search.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.search.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/core-js/internals/is-null-or-undefined.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var sameValue = __webpack_require__(/*! ../internals/same-value */ "./node_modules/core-js/internals/same-value.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

// @@search logic
fixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, SEARCH);
      return searcher ? call(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeSearch, rx, S);

      if (res.done) return res.value;

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airPollutionList/index.vue?vue&type=style&index=0&id=e0a6f25c&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airPollutionList/index.vue?vue&type=style&index=0&id=e0a6f25c&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".lawExamine[data-v-e0a6f25c] {\n  height: 100vh;\n  background: white;\n}\n.lawExamine .refreshbox[data-v-e0a6f25c] {\n  height: calc(100vh - 106px);\n  overflow-y: auto;\n}\n.lawExamine .text-ellipsis[data-v-e0a6f25c] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  font-size: 12px;\n}\n.lawExamine .map-icon[data-v-e0a6f25c] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  width: 15%;\n  text-align: right;\n  padding-right: 8px;\n  font-size: 12px;\n  color: #999;\n}\n.into-map[data-v-e0a6f25c] {\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 14px;\n  font-weight: normal;\n}\n.around-wrapper[data-v-e0a6f25c] {\n  margin: 0 25px;\n  padding: 8px 0;\n  border-bottom: 1px solid rgba(18, 18, 54, 0.05);\n}\n.around-wrapper[data-v-e0a6f25c]:last-child {\n  border-bottom: 0;\n}\n.around-wrapper .factor[data-v-e0a6f25c] {\n  margin-left: 10px;\n  padding: 2px 8px;\n  border-radius: 2px;\n  background: rgba(68, 123, 252, 0.1);\n  color: #447bfc;\n  font-size: 10px;\n}\n.around-wrapper .company-name[data-v-e0a6f25c] {\n  width: 100%;\n  justify-content: flex-start;\n  margin-bottom: 5px;\n}\n.around-wrapper .name[data-v-e0a6f25c] {\n  max-width: 70%;\n  color: #121236;\n  font-size: 14px;\n}\n.around-wrapper .des[data-v-e0a6f25c] {\n  font-size: 12px;\n  color: rgba(18, 18, 54, 0.5);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airPollutionList/index.vue?vue&type=style&index=0&id=e0a6f25c&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airPollutionList/index.vue?vue&type=style&index=0&id=e0a6f25c&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=e0a6f25c&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airPollutionList/index.vue?vue&type=style&index=0&id=e0a6f25c&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("89358c12", content, false, {"sourceMap":false,"shadowMode":false});
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

/***/ "./src/assets/moreMap.png":
/*!********************************!*\
  !*** ./src/assets/moreMap.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFhSURBVFiF7VZbboQwDJxUcK41Um4F0rIS3CoS2XOB5H4ESoAANm21P8xnHvbErwlw48aHYa5cslVfAwDYPGZL/HJN7v+dgK36GmyeO9teSyRTOS8HBh8eIbAhKB72pXDerZY8DL9guADgF2enFAkgYmqrnsAmJuBdmxUJgjRb5kKSCnEEFjD8Sqy9Vyu0OfMLAmtjKeNeaOsSgSXi9pvX9jrjENIu8ABiB2TLoRtTQSMhStw5hbhdbDkcN+AKrs1EtuUpSBXeH5xVTcJNq6WxadEj6IpQ8jJNpLQEXJP7EwdeK0jqNnRNXu9uKl+vJmCrnsY571POXZN7W/WksanRgif2C9C7NiuiIhXL8mkEIiGanE91MBvfhp7AppNEQzIJfxxvFDB8Th7TS6f9KBKEk4koS8E8BYOxdLEForEmCCRZpgWGi0UNhF/P2R1RDegmYcgpJdUwOH3jwiy4ceOj+Ab5GJxkf+Lb7wAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/公司.png":
/*!***************************!*\
  !*** ./src/assets/公司.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFuSURBVFiF7VdbioQwEKxe9FyrkFsZiILeSph4rgi9HybiqEkm+JqPLZif0e6qdPol8DDoqAMhTQGgAKD7Nte3CBDSFGBSlnjhjZu+zesUX9nHhABmUn57rEE8gEmB6TeFPChgcUqAVyedSBsXcitQpZLvChDV+MLeKQEsSc/Cm4CZ3JESNwBwNqlXAFw2d1l5FeEaP3cRfa2AaBnavNiCeEit+WQBUyluSnACH26icQE2+1OYClGNnNIRr8kBJiWkeUSABnEJQINJiWrkmJB4Ero5sIKvOdn/tZCmtvNBCWngu5JgBOw8eO39RDVyyLZv87rvMgJxE4pGNAmFNI3nsQ7ZLoUIaeCLRvQKzqh166MW1ch2ws4+H++Ejwu4rBXPdpH3jrTiAou79NoF3osKsFWwuxuElpSQXZKAGNEZdo8n4b+AedbPfX+xDSfAfUOEbSf/AHHpcoSAzTp+F3TfZWVmFQ1nrVgfIz3K1+APOTPQdN+wLWUAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/views/airHomePage/airPollutionList/index.vue":
/*!**********************************************************!*\
  !*** ./src/views/airHomePage/airPollutionList/index.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_e0a6f25c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=e0a6f25c&scoped=true& */ "./src/views/airHomePage/airPollutionList/index.vue?vue&type=template&id=e0a6f25c&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/airHomePage/airPollutionList/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_e0a6f25c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=e0a6f25c&lang=scss&scoped=true& */ "./src/views/airHomePage/airPollutionList/index.vue?vue&type=style&index=0&id=e0a6f25c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_e0a6f25c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_e0a6f25c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e0a6f25c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/airHomePage/airPollutionList/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/airHomePage/airPollutionList/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./src/views/airHomePage/airPollutionList/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airPollutionList/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/airHomePage/airPollutionList/index.vue?vue&type=style&index=0&id=e0a6f25c&lang=scss&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./src/views/airHomePage/airPollutionList/index.vue?vue&type=style&index=0&id=e0a6f25c&lang=scss&scoped=true& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e0a6f25c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=e0a6f25c&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airPollutionList/index.vue?vue&type=style&index=0&id=e0a6f25c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e0a6f25c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e0a6f25c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e0a6f25c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e0a6f25c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/airHomePage/airPollutionList/index.vue?vue&type=template&id=e0a6f25c&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./src/views/airHomePage/airPollutionList/index.vue?vue&type=template&id=e0a6f25c&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_e0a6f25c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=e0a6f25c&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airPollutionList/index.vue?vue&type=template&id=e0a6f25c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_e0a6f25c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_e0a6f25c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclBvbGx1dGlvbkxpc3QvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJQb2xsdXRpb25MaXN0L2luZGV4LnZ1ZT84YjdiIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zYW1lLXZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnNlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyUG9sbHV0aW9uTGlzdC9pbmRleC52dWU/MTU5YSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyUG9sbHV0aW9uTGlzdC9pbmRleC52dWU/YjYxNyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2Fpcl9xdWFsaXR5LmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbW9yZU1hcC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy/lhazlj7gucG5nIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJQb2xsdXRpb25MaXN0L2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyUG9sbHV0aW9uTGlzdC9pbmRleC52dWU/M2RkNiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyUG9sbHV0aW9uTGlzdC9pbmRleC52dWU/Y2JiMSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyUG9sbHV0aW9uTGlzdC9pbmRleC52dWU/NThlYiJdLCJuYW1lcyI6WyJiYXNlVXJsIiwicHJvY2VzcyIsInJhbmtpbmciLCJkYXRhIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInBhcmFtcyIsImFpckNpdHlEYXRhIiwiYWlyQ2l0eUFzc2Vzc0NvbmRpdGlvbiIsImFpckNpdHlBc3Nlc3NUZW5kZW5jeSIsImFpclBvbGx1dGFudFJhdGlvIiwiYWlyUG9sbHV0YW50U2l0ZVJhdGlvIiwiYWlyUG9sbHV0YW50WWVhciIsImFpclBvbGx1dGFudFNpdGVZZWFyIiwiYWlyUXVhbGl0eVJhbmtpbmciLCJhaXJRdWFsaXR5U2l0ZUxpc3QiLCJhaXJSYW5raW5nIiwib3ZlcnByb29mQWxlcnRzIiwiYWlyUmFua2luYXNkYXNkYWciLCJhaXJRdWFsaXR5U2l0ZURhdGEiLCJhaXJRdWFsaXR5U2l0ZURhdGFUeXBlIiwic2l0ZUNvbXBhcmlzb24iLCJhaXJRdWFsaXR5U2l0ZURhdGFUeXBlQW5vdGhlciIsImdldEFpclNpdGUiLCJhaXJRdWFsaXR5U2l0ZUNhbGVuZGFyIiwiaWFxaUNhbGVuZGFyIiwiYWlyWWVhckNhbGVuZGFyIiwid2VhdGhlckZvcmVjYXN0IiwiZ2V0RGl2aXNpb25OYW1lIiwieWVhckFpclF1YWxpdHlSYXRpbyIsImFpclNpdGVRdWFsaXR5UmFua2luZyIsInJlZ2lvblF1YWxpdHlSYW5raW5nIiwiYWlyUmVnaW9uIiwicG9sbFNpemUiLCJ0eXBlTGlzdCIsInRyZWVMaXN0IiwicG9sbExpc3QiLCJyZWdpb25QcmVkaWN0aW9uIiwiYWlyTWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQ0E7QUFDQTtBQUVBO0FBQ0EsZUFEQTtBQUVBO0FBQ0E7QUFEQSxHQUZBO0FBS0EsTUFMQSxrQkFLQTtBQUNBO0FBQ0EsZ0JBREE7QUFFQSxvQkFGQTtBQUdBLG9CQUhBO0FBSUEscUJBSkE7QUFJQTtBQUNBLHVCQUxBO0FBS0E7QUFDQTtBQUNBLGVBREE7QUFDQTtBQUNBLGlCQUZBLENBRUE7O0FBRkEsT0FOQTtBQVVBLGdCQVZBO0FBV0Esa0JBWEE7QUFZQSxnQkFaQTtBQWFBLGNBYkE7QUFjQTtBQWRBO0FBZ0JBLEdBdEJBO0FB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c1VBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBOVQ7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvODQuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImxhd0V4YW1pbmVcIj5cclxuICAgIDx2YW4tbmF2LWJhciA6dGl0bGU9XCJ0eXBlTmFtZVwiIGxlZnQtYXJyb3cgQGNsaWNrLWxlZnQ9XCIkcm91dGVyLmdvKC0xKVwiPlxyXG4gICAgPC92YW4tbmF2LWJhcj5cclxuXHJcbiAgICA8IS0t6KGM5pS/5Yy65YiS562b6YCJ5by55qGGLS0+XHJcbiAgICA8YXJlYUZpbHRlciA6aXNTaG93PVwic2hvd0ZpbHRlclwiIEBnZXRGaWx0ZXI9XCJnZXREaXZpc2lvblwiIEBjbG9zZT1cInNob3dGaWx0ZXI9ZmFsc2VcIi8+XHJcblxyXG4gICAgPHZhbi1zZWFyY2ggdi1tb2RlbD1cInNlYXJjaFwiIHNoYXBlPVwicm91bmRcIiBAc2VhcmNoPVwib25SZWZyZXNoXCIgcGxhY2Vob2xkZXI9XCJcIi8+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInJlZnJlc2hib3hcIj5cclxuICAgICAgPHZhbi1wdWxsLXJlZnJlc2ggdi1tb2RlbD1cInJlZnJlc2hpbmdcIiBAcmVmcmVzaD1cIm9uUmVmcmVzaFwiPlxyXG4gICAgICAgIDx2YW4tbGlzdCB2LW1vZGVsPVwibG9hZGluZ1wiIDpmaW5pc2hlZD1cImZpbmlzaGVkXCIgZmluaXNoZWQtdGV4dD1cIuayoeacieabtOWkmuS6hlwiXHJcbiAgICAgICAgICAgICAgICAgIDppbW1lZGlhdGUtY2hlY2s9XCJmYWxzZVwiIEBsb2FkPVwib25Mb2FkXCIgOm9mZnNldD0nNTAnPlxyXG4gICAgICAgICAgPGRpdiB2LWZvcj1cIml0ZW0gaW4gcHVibGljRGF0YVwiIGNsYXNzPVwiYXJvdW5kLXdyYXBwZXIgZnNcIiBAY2xpY2s9XCJ0b01hcChpdGVtKVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIkAvYXNzZXRzL+WFrOWPuC5wbmdcIiBzdHlsZT1cIndpZHRoOiAxNnB4O21hcmdpbi1yaWdodDogN3B4XCI+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDogNzAlO1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmcyBjb21wYW55LW5hbWVcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibmFtZSB0ZXh0LWVsbGlwc2lzXCI+e3tpdGVtLmVudGVycHJpc2VOYW1lfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZhY3RvclwiPnt7aXRlbS50cmVlTmFtZX19PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXMgdGV4dC1lbGxpcHNpc1wiPlxyXG4gICAgICAgICAgICAgICAge3tpdGVtLmFkZHJlc3N9fVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hcC1pY29uXCI+XHJcbiAgICAgICAgICAgICAg5Zyw5Zu+PGltZyBzcmM9XCJ+QC9hc3NldHMvbW9yZU1hcC5wbmdcIiB3aWR0aD1cIjE4XCIvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvdmFuLWxpc3Q+XHJcbiAgICAgIDwvdmFuLXB1bGwtcmVmcmVzaD5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHtwb2xsTGlzdH0gZnJvbSAnQC9hcGkvYWlyX3F1YWxpdHkuanMnXHJcbiAgaW1wb3J0IGFyZWFGaWx0ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9hcmVhRmlsdGVyXCI7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiaW5kZXhcIixcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgYXJlYUZpbHRlclxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc2VhcmNoOiAnJyxcclxuICAgICAgICBwdWJsaWNEYXRhOiBbXSxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBmaW5pc2hlZDogZmFsc2UsIC8vIOaYr+WQpuW3suWKoOi9veWujOaIkO+8jOWKoOi9veWujOaIkOWQjuS4jeWGjeinpuWPkWxvYWTkuovku7ZcclxuICAgICAgICByZWZyZXNoaW5nOiBmYWxzZSwgLy8g5LiL5ouJ54q25oCBXHJcbiAgICAgICAgbGlzdFF1ZXJ5OiB7XHJcbiAgICAgICAgICBwYWdlOiAxLCAvLyDlvZPliY3pobXnoIHmlbBcclxuICAgICAgICAgIGxpbWl0OiAxNSwgLy8g5LiA6aG15pi+56S6MTDmnaFcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNpdGVJZDogJycsXHJcbiAgICAgICAgdHlwZU5hbWU6ICcnLFxyXG4gICAgICAgIHR5cGVJZDogJycsXHJcbiAgICAgICAgeHpxaDogJycsXHJcbiAgICAgICAgc2hvd0ZpbHRlcjogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgIHRoaXMuc2l0ZUlkID0gdGhpcy4kcm91dGUucXVlcnkuc2l0ZUlkO1xyXG4gICAgICB0aGlzLnR5cGVOYW1lID0gdGhpcy4kcm91dGUucXVlcnkudHlwZU5hbWU7XHJcbiAgICAgIHRoaXMudHlwZUlkID0gdGhpcy4kcm91dGUucXVlcnkudHlwZUlkOyAvL+S6jOe6p+exu+Wei+eahGlkXHJcbiAgICAgIHRoaXMudHlwZVRhYklkID0gdGhpcy4kcm91dGUucXVlcnkudHlwZVRhYklkOyAgLy/kuIDnuqd0YWLnmoRpZFxyXG4gICAgICB0aGlzLnh6cWggPSAn5piG5piO5biCJztcclxuICAgICAgdGhpcy5sb2FkRGF0YSgpO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgZ2V0RGl2aXNpb24oYXJyKSB7XHJcbiAgICAgICAgaWYgKGFyci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICB0aGlzLnh6cWggPSBhcnIuam9pbignLCcpO1xyXG4gICAgICAgICAgdGhpcy5wdWJsaWNEYXRhID0gW107XHJcbiAgICAgICAgICB0aGlzLmxpc3RRdWVyeS5wYWdlID0gMTtcclxuICAgICAgICAgIHRoaXMubG9hZERhdGEoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uU2VhcmNoKCkge1xyXG4gICAgICAgIHRoaXMucHVibGljRGF0YSA9IFtdO1xyXG4gICAgICAgIHRoaXMubGlzdFF1ZXJ5LnBhZ2UgPSAxO1xyXG4gICAgICAgIHRoaXMubG9hZERhdGEoKTtcclxuICAgICAgfSxcclxuICAgICAgbG9hZERhdGEoKSB7XHJcbiAgICAgICAgdGhpcy55ZHpmKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHRvTWFwKGl0ZW0pe1xyXG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgbmFtZTogJ2ludm9sdmVBaXJQb2xsdXRpb25NYXAnLFxyXG4gICAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICAgIHNpdGVJZDogdGhpcy5zaXRlSWQsXHJcbiAgICAgICAgICAgICAgdHlwZUlkOiB0aGlzLnR5cGVUYWJJZCxcclxuICAgICAgICAgICAgICBlbnRlcnByaXNlTmFtZTogaXRlbS5lbnRlcnByaXNlTmFtZSxcclxuICAgICAgICAgICAgICBlbnRlcnByaXNlQWRkcmVzczogaXRlbS5hZGRyZXNzLFxyXG4gICAgICAgICAgICAgIGVudGVycHJpc2VKRDogaXRlbS5sb25naXR1ZGUsXHJcbiAgICAgICAgICAgICAgZW50ZXJwcmlzZVdEOiBpdGVtLmxhdGl0dWRlLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgICB9LFxyXG4gICAgICB5ZHpmKCkge1xyXG4gICAgICAgIGxldCBpbmZvID0ge1xyXG4gICAgICAgICAgbmFtZTogdGhpcy5zZWFyY2gsXHJcbiAgICAgICAgICBzaXRlSWQ6IHRoaXMuc2l0ZUlkLFxyXG4gICAgICAgICAgdHlwZUlkOiB0aGlzLnR5cGVJZCxcclxuICAgICAgICB9XHJcbiAgICAgICAgcG9sbExpc3QoaW5mbykudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgbGV0IHJkYXRhID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAvLyDmmK/lkKbmmK/nrKzkuIDmrKHov5vlhaXpobXpnaJwYWdlPT0xIOebtOaOpei1i+WAvFxyXG4gICAgICAgICAgaWYgKHRoaXMubGlzdFF1ZXJ5LnBhZ2UgPT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnB1YmxpY0RhdGEgPSByZGF0YTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIOWmguaenOS4jeaYr+WImeWcqOWQjumdoui/veWKoOaVsOaNru+8jFxyXG4gICAgICAgICAgICByZGF0YS5yZWNvcmRzLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5wdWJsaWNEYXRhLnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8g5YWz6ZetbG9hZGluZ1xyXG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAvLyDlvZPov5jmnInmlbDmja7mmK9wYWdlKytcclxuICAgICAgICAgIC8qaWYgKHJkYXRhLnJlY29yZHMubGVuZ3RoID09PSB0aGlzLmxpc3RRdWVyeS5saW1pdCAmJiByZGF0YS50b3RhbCAhPT0gdGhpcy5saXN0UXVlcnkubGltaXQpIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0UXVlcnkucGFnZSsrO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoZWQgPSB0cnVlO1xyXG4gICAgICAgICAgfSovXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICB9LFxyXG4gICAgICBvblJlZnJlc2goKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmxpc3RRdWVyeS5wYWdlID0gMTtcclxuICAgICAgICAgIHRoaXMubG9hZERhdGEoKTtcclxuICAgICAgICAgIHRoaXMucmVmcmVzaGluZyA9IGZhbHNlO1xyXG4gICAgICAgIH0sIDUwMCk7XHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuXHJcbiAgLmxhd0V4YW1pbmUge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoKTtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcblxyXG4gICAgLnJlZnJlc2hib3gge1xyXG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDZweCk7XHJcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICB9XHJcblxyXG4gICAgLnRleHQtZWxsaXBzaXMge1xyXG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXAtaWNvbiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgIHdpZHRoOiAxNSU7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY29sb3I6ICM5OTk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaW50by1tYXAge1xyXG4gICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgfVxyXG5cclxuICAuYXJvdW5kLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luOiAwIDI1cHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE4LCAxOCwgNTQsIDAuMDUpO1xyXG5cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLmZhY3RvcntcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmc6IDJweCA4cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSg2OCwgMTIzLCAyNTIsIDAuMSk7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDY4LCAxMjMsIDI1MiwgMSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29tcGFueS1uYW1le1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hbWUge1xyXG4gICAgICBtYXgtd2lkdGg6IDcwJTtcclxuICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGVzIHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJsYXdFeGFtaW5lXCIgfSxcbiAgICBbXG4gICAgICBfYyhcInZhbi1uYXYtYmFyXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgdGl0bGU6IF92bS50eXBlTmFtZSwgXCJsZWZ0LWFycm93XCI6IFwiXCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcImNsaWNrLWxlZnRcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLmdvKC0xKVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIF9jKFwiYXJlYUZpbHRlclwiLCB7XG4gICAgICAgIGF0dHJzOiB7IGlzU2hvdzogX3ZtLnNob3dGaWx0ZXIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBnZXRGaWx0ZXI6IF92bS5nZXREaXZpc2lvbixcbiAgICAgICAgICBjbG9zZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgX3ZtLnNob3dGaWx0ZXIgPSBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIF9jKFwidmFuLXNlYXJjaFwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHNoYXBlOiBcInJvdW5kXCIsIHBsYWNlaG9sZGVyOiBcIlwiIH0sXG4gICAgICAgIG9uOiB7IHNlYXJjaDogX3ZtLm9uUmVmcmVzaCB9LFxuICAgICAgICBtb2RlbDoge1xuICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLFxuICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICBfdm0uc2VhcmNoID0gJCR2XG4gICAgICAgICAgfSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaFwiLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJyZWZyZXNoYm94XCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2YW4tcHVsbC1yZWZyZXNoXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG9uOiB7IHJlZnJlc2g6IF92bS5vblJlZnJlc2ggfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnJlZnJlc2hpbmcsXG4gICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5yZWZyZXNoaW5nID0gJCR2XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInJlZnJlc2hpbmdcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidmFuLWxpc3RcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICBmaW5pc2hlZDogX3ZtLmZpbmlzaGVkLFxuICAgICAgICAgICAgICAgICAgICBcImZpbmlzaGVkLXRleHRcIjogXCLmsqHmnInmm7TlpJrkuoZcIixcbiAgICAgICAgICAgICAgICAgICAgXCJpbW1lZGlhdGUtY2hlY2tcIjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldDogNTAsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgbG9hZDogX3ZtLm9uTG9hZCB9LFxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5sb2FkaW5nLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5sb2FkaW5nID0gJCR2XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwibG9hZGluZ1wiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0ucHVibGljRGF0YSwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFyb3VuZC13cmFwcGVyIGZzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udG9NYXAoaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjE2cHhcIiwgXCJtYXJnaW4tcmlnaHRcIjogXCI3cHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMv5YWs5Y+4LnBuZ1wiKSB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiNzAlXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZzIGNvbXBhbnktbmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmFtZSB0ZXh0LWVsbGlwc2lzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5lbnRlcnByaXNlTmFtZSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFjdG9yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS50cmVlTmFtZSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkZXMgdGV4dC1lbGxpcHNpc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKGl0ZW0uYWRkcmVzcykgKyBcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1hcC1pY29uXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIOWcsOWbvlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy9tb3JlTWFwLnBuZ1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxOFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIndXNlIHN0cmljdCc7XG4vLyBgU2FtZVZhbHVlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2FtZXZhbHVlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmlzIHx8IGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIHggPT09IHkgPyB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSA6IHggIT09IHggJiYgeSAhPT0geTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBzYW1lVmFsdWUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2FtZS12YWx1ZScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xuXG4vLyBAQHNlYXJjaCBsb2dpY1xuZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ3NlYXJjaCcsIGZ1bmN0aW9uIChTRUFSQ0gsIG5hdGl2ZVNlYXJjaCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc2VhcmNoYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc2VhcmNoXG4gICAgZnVuY3Rpb24gc2VhcmNoKHJlZ2V4cCkge1xuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgdmFyIHNlYXJjaGVyID0gaXNOdWxsT3JVbmRlZmluZWQocmVnZXhwKSA/IHVuZGVmaW5lZCA6IGdldE1ldGhvZChyZWdleHAsIFNFQVJDSCk7XG4gICAgICByZXR1cm4gc2VhcmNoZXIgPyBjYWxsKHNlYXJjaGVyLCByZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW1NFQVJDSF0odG9TdHJpbmcoTykpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzZWFyY2hcbiAgICBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICB2YXIgcnggPSBhbk9iamVjdCh0aGlzKTtcbiAgICAgIHZhciBTID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUobmF0aXZlU2VhcmNoLCByeCwgUyk7XG5cbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgdmFyIHByZXZpb3VzTGFzdEluZGV4ID0gcngubGFzdEluZGV4O1xuICAgICAgaWYgKCFzYW1lVmFsdWUocHJldmlvdXNMYXN0SW5kZXgsIDApKSByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xuICAgICAgaWYgKCFzYW1lVmFsdWUocngubGFzdEluZGV4LCBwcmV2aW91c0xhc3RJbmRleCkpIHJ4Lmxhc3RJbmRleCA9IHByZXZpb3VzTGFzdEluZGV4O1xuICAgICAgcmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/IC0xIDogcmVzdWx0LmluZGV4O1xuICAgIH1cbiAgXTtcbn0pO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5sYXdFeGFtaW5lW2RhdGEtdi1lMGE2ZjI1Y10ge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbn1cXG4ubGF3RXhhbWluZSAucmVmcmVzaGJveFtkYXRhLXYtZTBhNmYyNWNdIHtcXG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDEwNnB4KTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcbi5sYXdFeGFtaW5lIC50ZXh0LWVsbGlwc2lzW2RhdGEtdi1lMGE2ZjI1Y10ge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLmxhd0V4YW1pbmUgLm1hcC1pY29uW2RhdGEtdi1lMGE2ZjI1Y10ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgd2lkdGg6IDE1JTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgcGFkZGluZy1yaWdodDogOHB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6ICM5OTk7XFxufVxcbi5pbnRvLW1hcFtkYXRhLXYtZTBhNmYyNWNdIHtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG4uYXJvdW5kLXdyYXBwZXJbZGF0YS12LWUwYTZmMjVjXSB7XFxuICBtYXJnaW46IDAgMjVweDtcXG4gIHBhZGRpbmc6IDhweCAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTgsIDE4LCA1NCwgMC4wNSk7XFxufVxcbi5hcm91bmQtd3JhcHBlcltkYXRhLXYtZTBhNmYyNWNdOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG59XFxuLmFyb3VuZC13cmFwcGVyIC5mYWN0b3JbZGF0YS12LWUwYTZmMjVjXSB7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIHBhZGRpbmc6IDJweCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDY4LCAxMjMsIDI1MiwgMC4xKTtcXG4gIGNvbG9yOiAjNDQ3YmZjO1xcbiAgZm9udC1zaXplOiAxMHB4O1xcbn1cXG4uYXJvdW5kLXdyYXBwZXIgLmNvbXBhbnktbmFtZVtkYXRhLXYtZTBhNmYyNWNdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbn1cXG4uYXJvdW5kLXdyYXBwZXIgLm5hbWVbZGF0YS12LWUwYTZmMjVjXSB7XFxuICBtYXgtd2lkdGg6IDcwJTtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uYXJvdW5kLXdyYXBwZXIgLmRlc1tkYXRhLXYtZTBhNmYyNWNdIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZTBhNmYyNWMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI4OTM1OGMxMlwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWUwYTZmMjVjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZTBhNmYyNWMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XHJcbmxldCBiYXNlVXJsID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gXCIvYWlyXCIgOiBcIi9haXJcIjsgLy/mnI3liqHlmajmmK9haXLnsbvvvIzmnKzlnLDmsqHmnInliqBcclxuLypcclxu6aaW6aG156m65rCU6LSo6YeP5o6l5Y+jXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmFua2luZyhkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9jb21wZXRpdGlvbi9yYW5raW5nJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t5bCP5pe244CB5pel5pWw5o2uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWlyQ2l0eURhdGEoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eS9haXJDaXR5RGF0YScsXHJcblx0XHRtZXRob2Q6ICdnZXQnLFxyXG5cdFx0cGFyYW1zOiBkYXRhXHJcblx0fSlcclxufVxyXG4vKlxyXG7nqbrmsJTotKjph48tLeiAg+aguOaDheWGtVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFpckNpdHlBc3Nlc3NDb25kaXRpb24oZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eS9haXJDaXR5QXNzZXNzQ29uZGl0aW9uJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t6LaL5Yq/57uf6K6hXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWlyQ2l0eUFzc2Vzc1RlbmRlbmN5KGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHkvYWlyQ2l0eUFzc2Vzc1RlbmRlbmN5JyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t5rGh5p+T54mp5Y2g5q+ULS3ooYzmlL/ljLrln5/nmoRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhaXJQb2xsdXRhbnRSYXRpbyhkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5L2FpclBvbGx1dGFudFJhdGlvJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t5rGh5p+T54mp5Y2g5q+ULS3nq5nngrnnmoRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhaXJQb2xsdXRhbnRTaXRlUmF0aW8oZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eVNpdGUvYWlyUG9sbHV0YW50U2l0ZVJhdGlvJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t5rGh5p+T54mp5bm05bqm57uf6K6hLS3ljLrln5/nmoRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhaXJQb2xsdXRhbnRZZWFyKGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHkvYWlyUG9sbHV0YW50WWVhcicsXHJcblx0XHRtZXRob2Q6ICdnZXQnLFxyXG5cdFx0cGFyYW1zOmRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t5rGh5p+T54mp5bm05bqm57uf6K6hLS3ljZXkuKrnq5nngrnnmoRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhaXJQb2xsdXRhbnRTaXRlWWVhcihkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9haXJQb2xsdXRhbnRTaXRlWWVhcicsXHJcblx0XHRtZXRob2Q6ICdnZXQnLFxyXG5cdFx0cGFyYW1zOiBkYXRhXHJcblx0fSlcclxufVxyXG4vKlxyXG7nqbrmsJTotKjph48tLeaOkuWQjVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFpclF1YWxpdHlSYW5raW5nKGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHkvYWlyUXVhbGl0eVJhbmtpbmcnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3nqbrmsJTotKjph4/nq5nngrnmlbDmja4t5Zu96ICDL+ecgeiAg+WIl+ihqFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFpclF1YWxpdHlTaXRlTGlzdChkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9haXJRdWFsaXR5U2l0ZXNEYXRhJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t56m65rCU56uZ54K55o6S5ZCNXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWlyUmFua2luZyhkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9haXJSYW5raW5nJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t6L+RMjTlsI/ml7botoXmoIflkYroraZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvdmVycHJvb2ZBbGVydHMoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eVNpdGUvb3ZlcnByb29mQWxlcnRzJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t56m65rCU56uZ54K55o6S5ZCNXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWlyUmFua2luYXNkYXNkYWcoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eVNpdGUvYWlyUmFua2luZycsXHJcblx0XHRtZXRob2Q6ICdnZXQnLFxyXG5cdFx0cGFyYW1zOiBkYXRhXHJcblx0fSlcclxufVxyXG4vKlxyXG7nqbrmsJTotKjph48tLeWNleermeeCueermeeCueaVsOaNrlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFpclF1YWxpdHlTaXRlRGF0YShkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9haXJRdWFsaXR5U2l0ZURhdGEnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3ljZXnq5nngrnnq5nngrnlsI/ml7bjgIHml6XmlbDmja4t5qih5Z2XXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWlyUXVhbGl0eVNpdGVEYXRhVHlwZShkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9haXJRdWFsaXR5U2l0ZURhdGFUeXBlJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t5Y2V56uZ54K556uZ54K55bCP5pe244CB5pel5pWw5o2uLeWvueavlOaVsOaNruaKmOe6v+WbvlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNpdGVDb21wYXJpc29uKGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHlTaXRlL3NpdGVDb21wYXJpc29uJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t5Y2V56uZ56uZ54K55pWw5o2uIOS6lOWIhumSnyDlkIzmr5QtLeaKmOe6v+WbvuWSjOaVsOaNruWIl+ihqFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFpclF1YWxpdHlTaXRlRGF0YVR5cGVBbm90aGVyKGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHlTaXRlL2FpclF1YWxpdHlTaXRlRGF0YVR5cGVBbm90aGVyJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t56m65rCU56uZ54K5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWlyU2l0ZShkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9nZXRBaXJTaXRlJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t56m65rCU56uZ54K55pel5Y6GXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWlyUXVhbGl0eVNpdGVDYWxlbmRhcihkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9haXJRdWFsaXR5U2l0ZUNhbGVuZGFyJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t56m65rCU56uZ54K55pel5Y6GaWFxaVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlhcWlDYWxlbmRhcihkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9pYXFpQ2FsZW5kYXInLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3nqbrmsJTnq5nngrnlhajlubTml6XljoZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhaXJZZWFyQ2FsZW5kYXIoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eVNpdGUvYWlyWWVhckNhbGVuZGFyJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t5aSp5rCU6aKE5oqlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd2VhdGhlckZvcmVjYXN0KGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHkvd2VhdGhlckZvcmVjYXN0JyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t6KGM5pS/5Yy65YiSXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGl2aXNpb25OYW1lKGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHkvZ2V0RGl2aXNpb25OYW1lJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHQvLyBwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcblxyXG4vKlxyXG7nqbrmsJTotKjph48tLeWFqOW5tOepuuawlOi0qOmHj+WNoOavlFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHllYXJBaXJRdWFsaXR5UmF0aW8oZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eS95ZWFyQWlyUXVhbGl0eVJhdGlvJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlC3nq5nngrnnqbrmsJTotKjph4/mjpLlkI1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhaXJTaXRlUXVhbGl0eVJhbmtpbmcoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eS9haXJTaXRlUXVhbGl0eVJhbmtpbmcnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCULeWMuuWOv+epuuawlOi0qOmHj+aOkuWQjVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lvblF1YWxpdHlSYW5raW5nKGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHkvcmVnaW9uUXVhbGl0eVJhbmtpbmcnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCULeWMuuWOv+epuuawlOaPj+i/sFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFpclJlZ2lvbihkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5L2FpclJlZ2lvbicsXHJcblx0XHRtZXRob2Q6ICdnZXQnLFxyXG5cdFx0cGFyYW1zOiBkYXRhXHJcblx0fSlcclxufVxyXG4vKlxyXG7nqbrmsJQt56uZ54K55raJ5rCU5rGh5p+T5rqQ5pWw5o2uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcG9sbFNpemUoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eVNpdGUvcG9sbFNpemUnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCULeermeeCuea2ieawlOaxoeafk+a6kOS4gOe6p1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVMaXN0KGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHlTaXRlL3R5cGVMaXN0JyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlC3nq5nngrnmtonmsJTmsaHmn5PmupDlrZDpm4ZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmVlTGlzdChkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS90cmVlTGlzdCcsXHJcblx0XHRtZXRob2Q6ICdnZXQnLFxyXG5cdFx0cGFyYW1zOiBkYXRhXHJcblx0fSlcclxufVxyXG4vKlxyXG7nqbrmsJQt56uZ54K55raJ5rCU5rGh5p+T5rqQ5a2Q6ZuG56uZ54K55L+h5oGvXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcG9sbExpc3QoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eVNpdGUvcG9sbExpc3QnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCULeepuuawlOmihOaKpVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lvblByZWRpY3Rpb24oZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eVNpdGUvcmVnaW9uUHJlZGljdGlvbicsXHJcblx0XHRtZXRob2Q6ICdnZXQnLFxyXG5cdFx0cGFyYW1zOiBkYXRhXHJcblx0fSlcclxufVxyXG4vKlxyXG7nqbrmsJQt56uZ54K55ZGo6L655rCU6LGh56uZXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWlyTWwoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eVNpdGUvYWlyTWwnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBWUFBQUJ6ZW5yMEFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUZoU1VSQlZGaUY3VlpiYm9Rd0RKeFVjSzQxVW00RjBySVMzQ29TMlhPQjVINEVTb0FBTm0yMVA4eG5IdmJFcndsdzQ4YUhZYTVjc2xWZkF3RFlQR1pML0hKTjd2K2RnSzM2R215ZU85dGVTeVJUT1M4SEJoOGVJYkFoS0I3MnBYRGVyWlk4REw5Z3VBRGdGMmVuRkFrZ1ltcXJuc0FtSnVCZG14VUpnalJiNWtLU0NuRUVGakQ4U3F5OVZ5dTBPZk1MQW10aktlTmVhT3NTZ1NYaTlwdlg5anJqRU5JdThBQmlCMlRMb1J0VFFTTWhTdHc1aGJoZGJEa2NOK0FLcnMxRXR1VXBTQlhlSDV4VlRjSk5xNld4YWRFajZJcFE4akpOcExRRVhKUDdFd2RlSzBqcU5uUk5YdTl1S2wrdkptQ3Juc1k1NzFQT1haTjdXL1drc2FuUmdpZjJDOUM3Tml1aUloWEw4bWtFSWlHYW5FOTFNQnZmaHA3QXBwTkVReklKZnh4dkZEQjhUaDdUUzZmOUtCS0VrNGtvUzhFOEJZT3hkTEVGb3JFbUNDUlpwZ1dHaTBVTmhGL1AyUjFSRGVnbVljZ3BKZFV3T0gzandpeTRjZU9qK0FiNUdKeGtmK0xiN3dBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWdDQVlBQUFCemVucjBBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFGdVNVUkJWRmlGN1ZkYmlvUXdFS3hlOUZ5cmtGc1ppSUxlU3BoNHJnaTlIeWJpcUVrbStKcVBMWmlmMGU2cWRQb2w4RERvcUFNaFRRR2dBS0Q3TnRlM0NCRFNGR0JTbG5qaGpadSt6ZXNVWDluSGhBQm1VbjU3ckVFOGdFbUI2VGVGUENoZ2NVcUFWeWVkU0JzWGNpdFFwWkx2Q2hEVitNTGVLUUVzU2MvQ200Q1ozSkVTTndCd05xbFhBRncyZDFsNUZlRWFQM2NSZmEyQWFCbmF2TmlDZUVpdCtXUUJVeWx1U25BQ0gyNmljUUUyKzFPWUNsR05uTklScjhrQkppV2tlVVNBQm5FSlFJTkppV3JrbUpCNEVybzVzSUt2T2RuL3RaQ210dk5CQ1duZ3U1SmdCT3c4ZU8zOVJEVnl5TFp2ODdydk1nSnhFNHBHTkFtRk5JM25zUTdaTG9VSWFlQ0xSdlFLenFoMTY2TVcxY2gyd3M0K0grK0Vqd3U0ckJYUGRwSDNqclRpQW91NzlOb0Yzb3NLc0ZXd3V4dUVscFNRWFpLQUdORVpkbzhuNGIrQWVkYlBmWCt4RFNmQWZVT0ViU2YvQUhIcGNvU0F6VHArRjNUZlpXVm1GUTFuclZnZkl6M0sxK0FQT1RQUWROK3dMV1VBQUFBQVNVVk9SSzVDWUlJPVwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTBhNmYyNWMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZTBhNmYyNWMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJlMGE2ZjI1Y1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdlMGE2ZjI1YycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdlMGE2ZjI1YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdlMGE2ZjI1YycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWUwYTZmMjVjJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2UwYTZmMjVjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyUG9sbHV0aW9uTGlzdC9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lMGE2ZjI1YyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lMGE2ZjI1YyZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=