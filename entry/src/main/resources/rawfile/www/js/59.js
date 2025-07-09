(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[59],{

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js");


function _defineProperty(e, r, t) {
  return (r = Object(_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectSpread2; });
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./defineProperty.js */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");









function ownKeys(e, r) {
  var t = Object.keys(e);

  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }

  return t;
}

function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      Object(_defineProperty_js__WEBPACK_IMPORTED_MODULE_7__["default"])(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }

  return e;
}



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toPrimitive; });
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");








function toPrimitive(t, r) {
  if ("object" != Object(_typeof_js__WEBPACK_IMPORTED_MODULE_6__["default"])(t) || !t) return t;
  var e = t[Symbol.toPrimitive];

  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != Object(_typeof_js__WEBPACK_IMPORTED_MODULE_6__["default"])(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }

  return ("string" === r ? String : Number)(t);
}



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return toPropertyKey; });
/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js");



function toPropertyKey(t) {
  var i = Object(_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__["default"])(t, "string");
  return "symbol" == Object(_typeof_js__WEBPACK_IMPORTED_MODULE_0__["default"])(i) ? i : i + "";
}



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_5__);







function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/examineSiteList/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/examineSiteList/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _views_waterHomePage_examineSiteList_components_timeSelect_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/views/waterHomePage/examineSiteList/components/timeSelect.vue */ "./src/views/waterHomePage/examineSiteList/components/timeSelect.vue");
/* harmony import */ var _components_areaFilter_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/components/areaFilter.vue */ "./src/components/areaFilter.vue");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _api_water_envir__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/api/water_envir */ "./src/api/water_envir.js");








//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    timeSelect: _views_waterHomePage_examineSiteList_components_timeSelect_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    areaFilter: _components_areaFilter_vue__WEBPACK_IMPORTED_MODULE_9__["default"]
  },
  data: function data() {
    return {
      activeTitle: 0,
      dataType: '',
      areaShow: false,
      active: 0,
      timeType: "时",
      nowTime: "",
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
      dataobj: {
        exceed: 0,
        upToStandard: 0,
        total: 0
      },
      list: [],
      title: "",
      dataList: [],
      xzqh: "",
      exceedSite: null,
      first: true
    };
  },
  mounted: function mounted() {
    this.title = this.$route.query.type;

    if (this.title === '国省控') {
      //国控自动、省控市控手工，国省控时默认查省控的
      this.arr = this.provinceTab;
      this.timeType = "月";
      this.dataType = '省控';
    } else {
      this.dataType = this.$route.query.type;
    }

    if (this.$route.query.type === "国控") {
      this.arr = this.countryTab;
      this.timeType = "时";
    } else if (this.$route.query.type === "市控") {
      this.arr = this.provinceTab;
      this.timeType = "月";
    }
  },

  /*activated() {
    this.title = this.$route.query.type;
    if (this.$route.query.type === "国控") {
      this.arr = this.countryTab;
      this.timeType = "时";
    } else if (this.$route.query.type === "省控") {
      this.arr = this.provinceTab;
      this.timeType = "月";
    }
  },*/
  destroyed: function destroyed() {
    this.first = true;
  },
  methods: {
    loadData: function loadData() {
      var _this = this;

      var xzqh = "";
      var ly = "";

      if (this.$route.query.xzqh) {
        xzqh = this.$route.query.xzqh;
        ly = "";
      } else {
        xzqh = "昆明市";
      }

      if (this.$route.query.ly) {
        ly = this.$route.query.ly;
        xzqh = "";
      } else {
        ly = "";
      }

      if (this.xzqh.length > 0) {
        xzqh = this.xzqh;
      }

      var info = {
        dataType: this.dataType,
        dateTime: this.timeType === "时" ? this.nowTime + ":00" : this.nowTime,
        region: xzqh,
        timeType: this.timeType,
        basinName: ly,
        firstFlag: this.first
      };
      Object(_api_water_envir__WEBPACK_IMPORTED_MODULE_11__["sectionList"])(info).then(function (res) {
        if (res.code == 200) {
          _this.dataobj = res.data;
          _this.list = res.data.list.map(function (item) {
            return Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item), {}, {
              show: false
            });
          });
          _this.dataList = res.data.list.map(function (item) {
            return Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item), {}, {
              show: false
            });
          });
          _this.first = false;
        }
      });
    },
    //查询站点详情
    querySiteDes: function querySiteDes(item) {
      var _this2 = this;

      var queryData = {
        type: item.type,
        dateTime: '',
        siteId: item.siteId,
        timeType: this.timeType
      };
      Object(_api_water_envir__WEBPACK_IMPORTED_MODULE_11__["upStreamOver"])(queryData).then(function (res) {
        if (res.code == 200) {
          if (res.data.length === 0) {
            _this2.exceedSite = '无';
          } else {
            _this2.exceedSite = res.data.map(function (item) {
              return item.siteName;
            }).join(',');
          }
        }
      });
    },
    stationChange: function stationChange(type) {
      if (type === "sum") {
        this.list = this.dataList;
      } else if (type === "db") {
        this.list = this.dataList.filter(function (item) {
          return item.state === "达标";
        });
      } else if (type === "cb") {
        this.list = this.dataList.filter(function (item) {
          return item.state === "超标";
        });
      }
    },
    onClickRight: function onClickRight() {
      this.areaShow = true;
    },
    getDivision: function getDivision(arr) {
      this.areaShow = false;

      if (arr.length > 0) {
        this.xzqh = arr.join(",");
        this.loadData();
      }
    },
    tabChange: function tabChange(data, index) {
      this.active = index;
      this.timeType = data.val; // this.loadData();
    },
    //头部title切换
    onChangeTabTitle: function onChangeTabTitle(index) {
      this.activeTitle = index;

      if (index === 0) {
        this.dataType = '省控';
        this.timeType = '月';
        this.arr = this.provinceTab;
      } else {
        this.dataType = '国控';
        this.timeType = '时';
        this.arr = this.countryTab;
      }
    },
    replaceString: function replaceString(value) {
      if (value) {
        return value.replace("类", "");
      } else {
        return "";
      }
    },
    judgeLevel: function judgeLevel(value) {
      return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_10__["imgJugdeLevel"])(value);
    },
    judgeTargetLevel: function judgeTargetLevel(value) {
      if (value === null) {
        return "target2";
      } else if (value === "Ⅱ") {
        return "target2";
      } else if (value === "Ⅲ") {
        return "target3";
      } else if (value === "Ⅳ") {
        return "target4";
      } else if (value === "Ⅴ") {
        return "target5";
      } else if (value === "劣Ⅴ") {
        return "target6";
      } else {
        return "target0";
      }
    },
    timeFn: function timeFn(data) {
      this.nowTime = data;
      this.loadData();
    },
    toStation: function toStation(item, type) {
      if ((type == "时" || type == "日") && (item.siteName == "蒙姑" || item.siteName == "狗街" || item.siteName == "尼格水文站（拖木嘎）" || item.siteName == "四级站" || item.siteName == "盐塘" || item.siteName == "松华坝坝口")) {
        console.log(this.nowTime);
        this.$router.push({
          name: "stationDetail",
          query: {
            // mc: item.siteName,
            type: '月',
            id: item.siteId,
            time: this.nowTime.substr(0, 7) // listType: item.type,
            // zdType: item.monitoringMethod,
            // gsType: this.$route.query.type

          }
        });
      } else {
        this.$router.push({
          name: "stationDetail",
          query: {
            type: type,
            id: item.siteId,
            time: this.nowTime
          }
        });
      }
    },
    //是否显示详情
    onChangeShow: function onChangeShow(item, i) {
      if (item.show === true) {
        this.list[i].show = false;
      } else {
        this.list[i].show = true;
      }

      this.querySiteDes(item);
    }
  },
  beforeRouteLeave: function beforeRouteLeave(to, from, next) {
    if (to.name == "stationDetail") {
      from.meta.keepAlive = true;
    } else {
      from.meta.keepAlive = false;
    }

    next();
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/examineSiteList/index.vue?vue&type=template&id=0436ca95&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/examineSiteList/index.vue?vue&type=template&id=0436ca95&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "nationalAuto" },
    [
      _c(
        "van-nav-bar",
        {
          attrs: { "left-arrow": "", "right-text": "筛选" },
          on: {
            "click-left": function ($event) {
              return _vm.$router.go(-1)
            },
            "click-right": _vm.onClickRight,
          },
        },
        [
          _c(
            "template",
            { slot: "title" },
            [
              _vm.title !== "国省控"
                ? [_vm._v(_vm._s(_vm.title) + "断面")]
                : [
                    _c(
                      "span",
                      {
                        class:
                          _vm.activeTitle === 0
                            ? "title-box-active"
                            : "title-box",
                        on: {
                          click: function ($event) {
                            return _vm.onChangeTabTitle(0)
                          },
                        },
                      },
                      [_vm._v("省控断面")]
                    ),
                    _c(
                      "span",
                      {
                        class:
                          _vm.activeTitle === 1
                            ? "title-box-active"
                            : "title-box",
                        on: {
                          click: function ($event) {
                            return _vm.onChangeTabTitle(1)
                          },
                        },
                      },
                      [_vm._v("国控断面")]
                    ),
                  ],
            ],
            2
          ),
        ],
        2
      ),
      _c("areaFilter", {
        attrs: { isShow: _vm.areaShow },
        on: {
          getFilter: _vm.getDivision,
          close: function ($event) {
            _vm.areaShow = false
          },
        },
      }),
      _c("div", { staticClass: "card-tab" }, [
        _c(
          "ul",
          _vm._l(_vm.arr, function (item, index) {
            return _c(
              "li",
              {
                class: { active: _vm.active == index },
                on: {
                  click: function ($event) {
                    return _vm.tabChange(item, index)
                  },
                },
              },
              [_vm._v(_vm._s(item.label) + " ")]
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
            attrs: { option: _vm.timeType },
            on: { getTime: _vm.timeFn },
          }),
          _c("div", { staticClass: "wrapper-top fs" }, [
            _c(
              "div",
              {
                staticClass: "top-box sum fs",
                on: {
                  click: function ($event) {
                    return _vm.stationChange("sum")
                  },
                },
              },
              [
                _vm._m(0),
                _c("div", { staticClass: "box-right" }, [
                  _c("span", [_vm._v(_vm._s(_vm.dataobj.total))]),
                  _c("span", [_vm._v("个")]),
                ]),
              ]
            ),
            _c(
              "div",
              {
                staticClass: "top-box db fs",
                on: {
                  click: function ($event) {
                    return _vm.stationChange("db")
                  },
                },
              },
              [
                _vm._m(1),
                _c("div", { staticClass: "box-right" }, [
                  _c("span", [_vm._v(_vm._s(_vm.dataobj.upToStandard))]),
                  _c("span", [_vm._v("个")]),
                ]),
              ]
            ),
            _c(
              "div",
              {
                staticClass: "top-box cb fs",
                on: {
                  click: function ($event) {
                    return _vm.stationChange("cb")
                  },
                },
              },
              [
                _vm._m(2),
                _c("div", { staticClass: "box-right" }, [
                  _c("span", [_vm._v(_vm._s(_vm.dataobj.exceed))]),
                  _c("span", [_vm._v("个")]),
                ]),
              ]
            ),
          ]),
          _c(
            "div",
            { staticClass: "wrapper-bottom" },
            [
              _vm._l(_vm.list, function (item, i) {
                return [
                  _c(
                    "div",
                    {
                      staticClass: "wrapper-list",
                      style: {
                        background:
                          item.state == "超标" ? "rgba(254, 79, 2, 0.03)" : "",
                      },
                      on: {
                        click: function ($event) {
                          return _vm.onChangeShow(item, i)
                        },
                      },
                    },
                    [
                      _c("div", { staticClass: "list-mc" }, [
                        _vm._v(_vm._s(item.siteName)),
                      ]),
                      _c("div", { staticClass: "list-xz" }, [
                        _c(
                          "div",
                          {
                            staticClass: "xz-words",
                            style: {
                              backgroundImage:
                                "url(" +
                                _vm.judgeLevel(
                                  _vm.replaceString(item.waterQualityLevel)
                                ) +
                                ")",
                            },
                          },
                          [
                            _vm._v(
                              _vm._s(
                                _vm.replaceString(item.waterQualityLevel) || "-"
                              ) + " "
                            ),
                          ]
                        ),
                      ]),
                      _c("div", { staticClass: "list-words" }, [
                        _vm._v("目标"),
                      ]),
                      _c(
                        "div",
                        { staticClass: "list-mb" },
                        [
                          _c(
                            "div",
                            {
                              class: [
                                "mb-words",
                                _vm.judgeTargetLevel(
                                  _vm.replaceString(item.waterQualityTarget)
                                ),
                              ],
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.replaceString(item.waterQualityTarget) ||
                                    "-"
                                ) + " "
                              ),
                            ]
                          ),
                          item.show
                            ? _c("van-icon", {
                                attrs: {
                                  name: "arrow-down",
                                  color: "#a6a6a6",
                                  size: "12",
                                },
                              })
                            : _c("van-icon", {
                                attrs: {
                                  name: "arrow-up",
                                  color: "#a6a6a6",
                                  size: "12",
                                },
                              }),
                        ],
                        1
                      ),
                    ]
                  ),
                  item.show
                    ? _c("div", { staticClass: "site-info-wrapper" }, [
                        _c("div", { staticClass: "fs site-info-name" }, [
                          _c("div", [
                            _vm._v(" 数据时间 "),
                            _c("span", [_vm._v(_vm._s(item.monitoringTime))]),
                          ]),
                          _c(
                            "span",
                            {
                              staticClass: "link",
                              on: {
                                click: function ($event) {
                                  return _vm.toStation(item, _vm.timeType)
                                },
                              },
                            },
                            [_vm._v("点击查看详情")]
                          ),
                        ]),
                        _c("div", { staticClass: "site-info-name" }, [
                          _vm._v(" 考核县(市) "),
                          _c("span", [_vm._v(_vm._s(item.areaName))]),
                        ]),
                        _c(
                          "div",
                          { staticClass: "site-info-factor" },
                          [
                            _vm._l(item.factorList, function (itemC) {
                              return [
                                itemC.overStandard === false
                                  ? _c(
                                      "div",
                                      { staticClass: "site-info-factor-item" },
                                      [
                                        _vm._v(
                                          " " + _vm._s(itemC.factorName) + " "
                                        ),
                                        _c("span", [
                                          _vm._v(
                                            _vm._s(itemC.value) +
                                              _vm._s(itemC.unit)
                                          ),
                                        ]),
                                      ]
                                    )
                                  : _c(
                                      "div",
                                      {
                                        staticClass: "site-info-factor-item",
                                        staticStyle: { color: "red" },
                                      },
                                      [
                                        _vm._v(
                                          " " + _vm._s(itemC.factorName) + " "
                                        ),
                                        _c(
                                          "span",
                                          { staticStyle: { color: "red" } },
                                          [
                                            _vm._v(
                                              _vm._s(itemC.value) +
                                                _vm._s(itemC.unit) +
                                                " " +
                                                _vm._s(itemC.multiplier) +
                                                "倍"
                                            ),
                                          ]
                                        ),
                                      ]
                                    ),
                              ]
                            }),
                          ],
                          2
                        ),
                        _c(
                          "div",
                          {
                            staticClass: "site-info-other",
                            staticStyle: {
                              color: "rgba(84, 117, 248, 1)",
                              "font-weight": "bold",
                            },
                          },
                          [
                            _vm._v(
                              " 上游超标断面：" + _vm._s(_vm.exceedSite) + " "
                            ),
                          ]
                        ),
                        _c(
                          "div",
                          {
                            staticClass: "site-info-other",
                            staticStyle: { "text-align": "right" },
                          },
                          [
                            _c("van-icon", {
                              attrs: {
                                name: "info",
                                size: "14",
                                color: "rgba(196, 196, 196, 1)",
                              },
                            }),
                            _vm._v(" 自动监测数据未经国家审核，仅供参考 "),
                          ],
                          1
                        ),
                      ])
                    : _vm._e(),
                ]
              }),
            ],
            2
          ),
        ],
        1
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
    return _c("div", { staticClass: "box-left" }, [
      _c("img", { attrs: { src: __webpack_require__(/*! @/assets/dmsum.png */ "./src/assets/dmsum.png"), alt: "" } }),
      _c("span", [_vm._v("总数")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-left" }, [
      _c("img", { attrs: { src: __webpack_require__(/*! @/assets/dmdb.png */ "./src/assets/dmdb.png"), alt: "" } }),
      _c("span", [_vm._v("达标")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "box-left" }, [
      _c("img", { attrs: { src: __webpack_require__(/*! @/assets/dmcb.png */ "./src/assets/dmcb.png"), alt: "" } }),
      _c("span", [_vm._v("超标")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/core-js/internals/date-to-primitive.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/date-to-primitive.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var ordinaryToPrimitive = __webpack_require__(/*! ../internals/ordinary-to-primitive */ "./node_modules/core-js/internals/ordinary-to-primitive.js");

var $TypeError = TypeError;

// `Date.prototype[@@toPrimitive](hint)` method implementation
// https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
module.exports = function (hint) {
  anObject(this);
  if (hint === 'string' || hint === 'default') hint = 'string';
  else if (hint !== 'number') throw new $TypeError('Incorrect hint');
  return ordinaryToPrimitive(this, hint);
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.date.to-primitive.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es.date.to-primitive.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");
var dateToPrimitive = __webpack_require__(/*! ../internals/date-to-primitive */ "./node_modules/core-js/internals/date-to-primitive.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");

var TO_PRIMITIVE = wellKnownSymbol('toPrimitive');
var DatePrototype = Date.prototype;

// `Date.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-date.prototype-@@toprimitive
if (!hasOwn(DatePrototype, TO_PRIMITIVE)) {
  defineBuiltIn(DatePrototype, TO_PRIMITIVE, dateToPrimitive);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.get-own-property-descriptor.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var nativeGetOwnPropertyDescriptor = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js").f;
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");

var FORCED = !DESCRIPTORS || fails(function () { nativeGetOwnPropertyDescriptor(1); });

// `Object.getOwnPropertyDescriptor` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptor
$({ target: 'Object', stat: true, forced: FORCED, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(it, key) {
    return nativeGetOwnPropertyDescriptor(toIndexedObject(it), key);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js":
/*!********************************************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.get-own-property-descriptors.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var ownKeys = __webpack_require__(/*! ../internals/own-keys */ "./node_modules/core-js/internals/own-keys.js");
var toIndexedObject = __webpack_require__(/*! ../internals/to-indexed-object */ "./node_modules/core-js/internals/to-indexed-object.js");
var getOwnPropertyDescriptorModule = __webpack_require__(/*! ../internals/object-get-own-property-descriptor */ "./node_modules/core-js/internals/object-get-own-property-descriptor.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");

// `Object.getOwnPropertyDescriptors` method
// https://tc39.es/ecma262/#sec-object.getownpropertydescriptors
$({ target: 'Object', stat: true, sham: !DESCRIPTORS }, {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIndexedObject(object);
    var getOwnPropertyDescriptor = getOwnPropertyDescriptorModule.f;
    var keys = ownKeys(O);
    var result = {};
    var index = 0;
    var key, descriptor;
    while (keys.length > index) {
      descriptor = getOwnPropertyDescriptor(O, key = keys[index++]);
      if (descriptor !== undefined) createProperty(result, key, descriptor);
    }
    return result;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.object.keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.object.keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var nativeKeys = __webpack_require__(/*! ../internals/object-keys */ "./node_modules/core-js/internals/object-keys.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var FAILS_ON_PRIMITIVES = fails(function () { nativeKeys(1); });

// `Object.keys` method
// https://tc39.es/ecma262/#sec-object.keys
$({ target: 'Object', stat: true, forced: FAILS_ON_PRIMITIVES }, {
  keys: function keys(it) {
    return nativeKeys(toObject(it));
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es.symbol.to-primitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/modules/es.symbol.to-primitive.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var defineWellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol-define */ "./node_modules/core-js/internals/well-known-symbol-define.js");
var defineSymbolToPrimitive = __webpack_require__(/*! ../internals/symbol-define-to-primitive */ "./node_modules/core-js/internals/symbol-define-to-primitive.js");

// `Symbol.toPrimitive` well-known symbol
// https://tc39.es/ecma262/#sec-symbol.toprimitive
defineWellKnownSymbol('toPrimitive');

// `Symbol.prototype[@@toPrimitive]` method
// https://tc39.es/ecma262/#sec-symbol.prototype-@@toprimitive
defineSymbolToPrimitive();


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/examineSiteList/index.vue?vue&type=style&index=0&id=0436ca95&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/examineSiteList/index.vue?vue&type=style&index=0&id=0436ca95&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".card-tab[data-v-0436ca95] {\n  width: 100%;\n  height: 50px;\n  background: #fff;\n}\n.card-tab ul[data-v-0436ca95] {\n  width: calc(100% - 60px);\n  margin: 0 30px;\n  height: 100%;\n  display: flex;\n}\n.card-tab ul li[data-v-0436ca95] {\n  flex: 1;\n  line-height: 30px;\n  font-size: 14px;\n  color: rgba(18, 18, 54, 0.5);\n  margin: 12px 10px 0;\n  text-align: center;\n}\n.card-tab ul .active[data-v-0436ca95] {\n  height: 30px;\n  border-radius: 28px;\n  background: linear-gradient(225deg, #4975ec 0%, #97b3ff 100%);\n  box-shadow: 0px 2px 10px rgba(84, 125, 239, 0.4);\n  color: #fff;\n}\n.content-wrapper[data-v-0436ca95] {\n  height: calc(100vh - 104px);\n  width: 100%;\n}\n.content-wrapper .wrapper-top[data-v-0436ca95] {\n  margin: 4px 6px;\n}\n.content-wrapper .wrapper-top .top-box[data-v-0436ca95] {\n  width: 32%;\n  height: 32px;\n  border-radius: 10px;\n  font-size: 12px;\n  color: rgba(18, 18, 54, 0.5);\n}\n.content-wrapper .wrapper-top .top-box .box-left[data-v-0436ca95] {\n  display: flex;\n  align-items: center;\n}\n.content-wrapper .wrapper-top .top-box .box-left img[data-v-0436ca95] {\n  padding: 0 6px 0 4px;\n}\n.content-wrapper .wrapper-top .top-box .box-right span[data-v-0436ca95]:first-child {\n  font-size: 14px;\n  font-weight: 600;\n  color: #121236;\n}\n.content-wrapper .wrapper-top .top-box .box-right span[data-v-0436ca95]:last-child {\n  margin: 0 10px 0 4px;\n}\n.content-wrapper .wrapper-top .sum[data-v-0436ca95] {\n  border: 1px solid rgba(68, 123, 252, 0.5);\n}\n.content-wrapper .wrapper-top .db[data-v-0436ca95] {\n  border: 1px solid rgba(0, 186, 173, 0.5);\n}\n.content-wrapper .wrapper-top .cb[data-v-0436ca95] {\n  border: 1px solid rgba(254, 79, 2, 0.5);\n}\n.content-wrapper .wrapper-bottom[data-v-0436ca95] {\n  width: 100%;\n  height: calc(100% - 90px);\n  overflow-y: auto;\n}\n.content-wrapper .wrapper-bottom .wrapper-list[data-v-0436ca95] {\n  width: calc(100% - 12px);\n  height: 54px;\n  margin: 6px;\n  border-radius: 10px;\n  background: rgba(68, 123, 252, 0.03);\n  display: flex;\n  align-items: center;\n}\n.content-wrapper .wrapper-bottom .wrapper-list .list-mc[data-v-0436ca95] {\n  width: calc(45% - 15px);\n  padding-left: 15px;\n  font-size: 14px;\n  color: black;\n}\n.content-wrapper .wrapper-bottom .wrapper-list .list-xz[data-v-0436ca95] {\n  width: 25%;\n  display: flex;\n  align-items: center;\n}\n.content-wrapper .wrapper-bottom .wrapper-list .list-xz .xz-words[data-v-0436ca95] {\n  min-width: 34px;\n  padding: 0 4px;\n  width: auto;\n  height: 18px;\n  text-align: center;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 18px;\n  color: white;\n  display: inline-block;\n}\n.content-wrapper .wrapper-bottom .wrapper-list .list-words[data-v-0436ca95] {\n  width: 10%;\n  font-size: 14px;\n  font-weight: 400;\n  color: rgba(18, 18, 54, 0.5);\n}\n.content-wrapper .wrapper-bottom .wrapper-list .list-mb[data-v-0436ca95] {\n  width: 15%;\n  display: flex;\n  align-items: center;\n}\n.content-wrapper .wrapper-bottom .wrapper-list .list-mb .mb-words[data-v-0436ca95] {\n  width: 30px;\n  height: 18px;\n  margin-right: 15px;\n  text-align: center;\n  border-radius: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 18px;\n}\n.content-wrapper .wrapper-bottom .site-info-wrapper[data-v-0436ca95] {\n  margin: 0 6px;\n  border-radius: 10px;\n  background: #f7faff;\n  border: 1px solid #e1e9fc;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.content-wrapper .wrapper-bottom .site-info-wrapper .site-info-name[data-v-0436ca95] {\n  padding: 4px 21px;\n}\n.content-wrapper .wrapper-bottom .site-info-wrapper .site-info-name span[data-v-0436ca95] {\n  color: #121236;\n}\n.content-wrapper .wrapper-bottom .site-info-wrapper .site-info-name .link[data-v-0436ca95] {\n  color: #5475f8;\n  text-decoration: underline;\n}\n.content-wrapper .wrapper-bottom .site-info-wrapper .site-info-factor[data-v-0436ca95] {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 4px 9px;\n  padding: 6px 12px 2px;\n  background: #e1e9fc;\n  border-radius: 10px;\n}\n.content-wrapper .wrapper-bottom .site-info-wrapper .site-info-factor .site-info-factor-item[data-v-0436ca95] {\n  width: 50%;\n  padding-bottom: 4px;\n}\n.content-wrapper .wrapper-bottom .site-info-wrapper .site-info-factor .site-info-factor-item span[data-v-0436ca95] {\n  color: #121236;\n}\n.content-wrapper .wrapper-bottom .site-info-wrapper .site-info-other[data-v-0436ca95] {\n  margin: 0 12px;\n  padding-bottom: 7px;\n}\n.title-box[data-v-0436ca95] {\n  display: inline-block;\n  padding: 8px;\n  font-size: 15px;\n  font-weight: normal;\n}\n.title-box-active[data-v-0436ca95] {\n  padding: 8px;\n  background: linear-gradient(225deg, #4975ec 0%, #97b3ff 100%);\n  box-shadow: 0px 2px 5px rgba(84, 125, 239, 0.4);\n  border-radius: 28px;\n  font-size: 15px;\n  font-weight: normal;\n  color: #fff;\n}\n.target2[data-v-0436ca95] {\n  color: #165dff;\n  border: 1px solid #165dff;\n}\n.target3[data-v-0436ca95] {\n  color: #27d043;\n  border: 1px solid #27d043;\n}\n.target4[data-v-0436ca95] {\n  color: #ffc338;\n  border: 1px solid #ffc338;\n}\n.target5[data-v-0436ca95] {\n  color: #fd8e01;\n  border: 1px solid #fd8e01;\n}\n.target6[data-v-0436ca95] {\n  color: #fe4f02;\n  border: 1px solid #fe4f02;\n}\n.target0[data-v-0436ca95] {\n  color: #a0a0a0;\n  border: 1px solid #a0a0a0;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/examineSiteList/index.vue?vue&type=style&index=0&id=0436ca95&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/examineSiteList/index.vue?vue&type=style&index=0&id=0436ca95&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=0436ca95&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/examineSiteList/index.vue?vue&type=style&index=0&id=0436ca95&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("9821816e", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/dmcb.png":
/*!*****************************!*\
  !*** ./src/assets/dmcb.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACdSURBVBiVhZHREcMwCEMl7L3iThBvFGejdIIme9WoX258qdvyxYF44oDoQjkmAHB4ojSJPMLmpfWtJT7z4fB0jjJRWHw2NYg1IRnWsHnh9txxCakuABBrtiLgsIGod1EOKVKa7K7bd+FJj6OGwXanX2phR81WRgMf5ByTUZr+CRvQyLD6zMcvIgC8r1SzldE6yjH1dY7s2vcAoP/gCyAqTq+1nxb6AAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/dmdb.png":
/*!*****************************!*\
  !*** ./src/assets/dmdb.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACfSURBVCiRnZFLDoMwDERfkh7MXdDuW3Ge0PNEsIcsCAcr7gLxK59KfbvYM7GtgSNiEGKQ77LZiHor2D6hzoMKmIR5v8jytDY0VYtqx/1ZTG90nmD6K1meLAB1WazEe6jzAHYqnIkHhwyGncMOiUEuANg+bZq3x/XY2VTtz9/rshhW+osY5HTKojfnEIOgzqParW5S5/eDWxrHtIFROPIBvXxF3C2GtnsAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/dmsum.png":
/*!******************************!*\
  !*** ./src/assets/dmsum.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACWSURBVCiRlVFbCsMgEJyVeK8NeKsKMWBvJdScy8LmQ02NjSmdr33MzDIsMICxiY1N3M+pJwFgABFCy1GTrMHreBKYx/sFki147Y4+C4q1zMHrqIqza8mXyBehan9LzmAAUFfBRjA28VTq2C/Dc5rHyhzwl7sDmgx/wdjEd1fa3ecPNjGEFpBsaDPl2ffjTsL6YQCVWLEDxw5ELOwduQEAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/views/waterHomePage/examineSiteList/index.vue":
/*!***********************************************************!*\
  !*** ./src/views/waterHomePage/examineSiteList/index.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_0436ca95_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=0436ca95&scoped=true& */ "./src/views/waterHomePage/examineSiteList/index.vue?vue&type=template&id=0436ca95&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/examineSiteList/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_0436ca95_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=0436ca95&lang=scss&scoped=true& */ "./src/views/waterHomePage/examineSiteList/index.vue?vue&type=style&index=0&id=0436ca95&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_0436ca95_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_0436ca95_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0436ca95",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/examineSiteList/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/examineSiteList/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./src/views/waterHomePage/examineSiteList/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/examineSiteList/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/examineSiteList/index.vue?vue&type=style&index=0&id=0436ca95&lang=scss&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/examineSiteList/index.vue?vue&type=style&index=0&id=0436ca95&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0436ca95_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=0436ca95&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/examineSiteList/index.vue?vue&type=style&index=0&id=0436ca95&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0436ca95_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0436ca95_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0436ca95_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_0436ca95_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/waterHomePage/examineSiteList/index.vue?vue&type=template&id=0436ca95&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./src/views/waterHomePage/examineSiteList/index.vue?vue&type=template&id=0436ca95&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0436ca95_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=0436ca95&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/examineSiteList/index.vue?vue&type=template&id=0436ca95&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0436ca95_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_0436ca95_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvUHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b1Byb3BlcnR5S2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2V4YW1pbmVTaXRlTGlzdC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvZXhhbWluZVNpdGVMaXN0L2luZGV4LnZ1ZT8wM2RkIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kYXRlLXRvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmRhdGUudG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wudG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2V4YW1pbmVTaXRlTGlzdC9pbmRleC52dWU/N2U0MCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9leGFtaW5lU2l0ZUxpc3QvaW5kZXgudnVlP2E2MmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9kbWNiLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2RtZGIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvZG1zdW0ucG5nIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2V4YW1pbmVTaXRlTGlzdC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvZXhhbWluZVNpdGVMaXN0L2luZGV4LnZ1ZT9kNzJkIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2V4YW1pbmVTaXRlTGlzdC9pbmRleC52dWU/MzIwNSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9leGFtaW5lU2l0ZUxpc3QvaW5kZXgudnVlPzBjZGIiXSwibmFtZXMiOlsiX2RlZmluZVByb3BlcnR5IiwiZSIsInIiLCJ0IiwidG9Qcm9wZXJ0eUtleSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJvd25LZXlzIiwia2V5cyIsImdldE93blByb3BlcnR5U3ltYm9scyIsIm8iLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJwdXNoIiwiYXBwbHkiLCJfb2JqZWN0U3ByZWFkMiIsImFyZ3VtZW50cyIsImxlbmd0aCIsImZvckVhY2giLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzIiwiZGVmaW5lUHJvcGVydGllcyIsInRvUHJpbWl0aXZlIiwiX3R5cGVvZiIsIlN5bWJvbCIsImkiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiTnVtYmVyIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBLFNBQVNBLGVBQVQsQ0FBeUJDLENBQXpCLEVBQTRCQyxDQUE1QixFQUErQkMsQ0FBL0IsRUFBa0M7QUFDaEMsU0FBTyxDQUFDRCxDQUFDLEdBQUdFLGlFQUFhLENBQUNGLENBQUQsQ0FBbEIsS0FBMEJELENBQTFCLEdBQThCSSxNQUFNLENBQUNDLGNBQVAsQ0FBc0JMLENBQXRCLEVBQXlCQyxDQUF6QixFQUE0QjtBQUMvREssU0FBSyxFQUFFSixDQUR3RDtBQUUvREssY0FBVSxFQUFFLENBQUMsQ0FGa0Q7QUFHL0RDLGdCQUFZLEVBQUUsQ0FBQyxDQUhnRDtBQUkvREMsWUFBUSxFQUFFLENBQUM7QUFKb0QsR0FBNUIsQ0FBOUIsR0FLRlQsQ0FBQyxDQUFDQyxDQUFELENBQUQsR0FBT0MsQ0FMTCxFQUtRRixDQUxmO0FBTUQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkQ7O0FBQ0EsU0FBU1UsT0FBVCxDQUFpQlYsQ0FBakIsRUFBb0JDLENBQXBCLEVBQXVCO0FBQ3JCLE1BQUlDLENBQUMsR0FBR0UsTUFBTSxDQUFDTyxJQUFQLENBQVlYLENBQVosQ0FBUjs7QUFDQSxNQUFJSSxNQUFNLENBQUNRLHFCQUFYLEVBQWtDO0FBQ2hDLFFBQUlDLENBQUMsR0FBR1QsTUFBTSxDQUFDUSxxQkFBUCxDQUE2QlosQ0FBN0IsQ0FBUjtBQUNBQyxLQUFDLEtBQUtZLENBQUMsR0FBR0EsQ0FBQyxDQUFDQyxNQUFGLENBQVMsVUFBVWIsQ0FBVixFQUFhO0FBQzlCLGFBQU9HLE1BQU0sQ0FBQ1csd0JBQVAsQ0FBZ0NmLENBQWhDLEVBQW1DQyxDQUFuQyxFQUFzQ00sVUFBN0M7QUFDRCxLQUZTLENBQVQsQ0FBRCxFQUVLTCxDQUFD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QUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvNTkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdG9Qcm9wZXJ0eUtleSBmcm9tIFwiLi90b1Byb3BlcnR5S2V5LmpzXCI7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkoZSwgciwgdCkge1xuICByZXR1cm4gKHIgPSB0b1Byb3BlcnR5S2V5KHIpKSBpbiBlID8gT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHIsIHtcbiAgICB2YWx1ZTogdCxcbiAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICBjb25maWd1cmFibGU6ICEwLFxuICAgIHdyaXRhYmxlOiAhMFxuICB9KSA6IGVbcl0gPSB0LCBlO1xufVxuZXhwb3J0IHsgX2RlZmluZVByb3BlcnR5IGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgZGVmaW5lUHJvcGVydHkgZnJvbSBcIi4vZGVmaW5lUHJvcGVydHkuanNcIjtcbmZ1bmN0aW9uIG93bktleXMoZSwgcikge1xuICB2YXIgdCA9IE9iamVjdC5rZXlzKGUpO1xuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBvID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTtcbiAgICByICYmIChvID0gby5maWx0ZXIoZnVuY3Rpb24gKHIpIHtcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsIHIpLmVudW1lcmFibGU7XG4gICAgfSkpLCB0LnB1c2guYXBwbHkodCwgbyk7XG4gIH1cbiAgcmV0dXJuIHQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMihlKSB7XG4gIGZvciAodmFyIHIgPSAxOyByIDwgYXJndW1lbnRzLmxlbmd0aDsgcisrKSB7XG4gICAgdmFyIHQgPSBudWxsICE9IGFyZ3VtZW50c1tyXSA/IGFyZ3VtZW50c1tyXSA6IHt9O1xuICAgIHIgJSAyID8gb3duS2V5cyhPYmplY3QodCksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eShlLCByLCB0W3JdKTtcbiAgICB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnModCkpIDogb3duS2V5cyhPYmplY3QodCkpLmZvckVhY2goZnVuY3Rpb24gKHIpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCByLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsIHIpKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZTtcbn1cbmV4cG9ydCB7IF9vYmplY3RTcHJlYWQyIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmZ1bmN0aW9uIHRvUHJpbWl0aXZlKHQsIHIpIHtcbiAgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7XG4gIHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICBpZiAodm9pZCAwICE9PSBlKSB7XG4gICAgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICB9XG4gIHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7XG59XG5leHBvcnQgeyB0b1ByaW1pdGl2ZSBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5pbXBvcnQgdG9QcmltaXRpdmUgZnJvbSBcIi4vdG9QcmltaXRpdmUuanNcIjtcbmZ1bmN0aW9uIHRvUHJvcGVydHlLZXkodCkge1xuICB2YXIgaSA9IHRvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpO1xuICByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IGkgKyBcIlwiO1xufVxuZXhwb3J0IHsgdG9Qcm9wZXJ0eUtleSBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvO1xuICB9IDogZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbztcbiAgfSwgX3R5cGVvZihvKTtcbn1cbmV4cG9ydCB7IF90eXBlb2YgYXMgZGVmYXVsdCB9OyIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwibmF0aW9uYWxBdXRvXCI+XHJcbiAgICA8dmFuLW5hdi1iYXIgbGVmdC1hcnJvdyByaWdodC10ZXh0PVwi562b6YCJXCIgQGNsaWNrLWxlZnQ9XCIkcm91dGVyLmdvKC0xKVwiXHJcbiAgICAgICAgICAgICAgICAgQGNsaWNrLXJpZ2h0PVwib25DbGlja1JpZ2h0XCI+XHJcbiAgICAgIDx0ZW1wbGF0ZSAgc2xvdD1cInRpdGxlXCI+XHJcbiAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJ0aXRsZSE9PSflm73nnIHmjqcnXCI+e3t0aXRsZX195pat6Z2iPC90ZW1wbGF0ZT5cclxuICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxyXG4gICAgICAgICAgPHNwYW4gOmNsYXNzPVwiYWN0aXZlVGl0bGU9PT0wPyd0aXRsZS1ib3gtYWN0aXZlJzondGl0bGUtYm94J1wiIEBjbGljaz1cIm9uQ2hhbmdlVGFiVGl0bGUoMClcIj7nnIHmjqfmlq3pnaI8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiA6Y2xhc3M9XCJhY3RpdmVUaXRsZT09PTE/J3RpdGxlLWJveC1hY3RpdmUnOid0aXRsZS1ib3gnXCIgQGNsaWNrPVwib25DaGFuZ2VUYWJUaXRsZSgxKVwiPuWbveaOp+aWremdojwvc3Bhbj5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG4gICAgPC92YW4tbmF2LWJhcj5cclxuXHJcbiAgICA8IS0t6KGM5pS/5Yy65YiS562b6YCJ5by55qGGLS0+XHJcbiAgICA8YXJlYUZpbHRlciA6aXNTaG93PVwiYXJlYVNob3dcIiBAZ2V0RmlsdGVyPVwiZ2V0RGl2aXNpb25cIiBAY2xvc2U9XCJhcmVhU2hvdz1mYWxzZVwiLz5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC10YWJcIj5cclxuICAgICAgPHVsPlxyXG4gICAgICAgIDxsaSB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gYXJyXCIgOmNsYXNzPVwieyBhY3RpdmU6IGFjdGl2ZSA9PSBpbmRleCB9XCIgQGNsaWNrPVwidGFiQ2hhbmdlKGl0ZW0sIGluZGV4KVwiPnt7XHJcbiAgICAgICAgICBpdGVtLmxhYmVsIH19XHJcbiAgICAgICAgPC9saT5cclxuICAgICAgPC91bD5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXdyYXBwZXJcIj5cclxuICAgICAgPHRpbWVTZWxlY3QgOm9wdGlvbj1cInRpbWVUeXBlXCIgQGdldFRpbWU9XCJ0aW1lRm5cIi8+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ3cmFwcGVyLXRvcCBmc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0b3AtYm94IHN1bSBmc1wiIEBjbGljaz1cInN0YXRpb25DaGFuZ2UoJ3N1bScpXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWxlZnRcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJ+QC9hc3NldHMvZG1zdW0ucG5nXCIgYWx0PVwiXCIvPlxyXG4gICAgICAgICAgICA8c3Bhbj7mgLvmlbA8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3gtcmlnaHRcIj5cclxuICAgICAgICAgICAgPHNwYW4+e3sgZGF0YW9iai50b3RhbCB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+5LiqPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvcC1ib3ggZGIgZnNcIiBAY2xpY2s9XCJzdGF0aW9uQ2hhbmdlKCdkYicpXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWxlZnRcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJ+QC9hc3NldHMvZG1kYi5wbmdcIiBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgIDxzcGFuPui+vuaghzwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1yaWdodFwiPlxyXG4gICAgICAgICAgICA8c3Bhbj57eyBkYXRhb2JqLnVwVG9TdGFuZGFyZCB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+5LiqPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRvcC1ib3ggY2IgZnNcIiBAY2xpY2s9XCJzdGF0aW9uQ2hhbmdlKCdjYicpXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94LWxlZnRcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJ+QC9hc3NldHMvZG1jYi5wbmdcIiBhbHQ9XCJcIi8+XHJcbiAgICAgICAgICAgIDxzcGFuPui2heaghzwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJveC1yaWdodFwiPlxyXG4gICAgICAgICAgICA8c3Bhbj57eyBkYXRhb2JqLmV4Y2VlZCB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+5LiqPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwid3JhcHBlci1ib3R0b21cIj5cclxuICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCIoaXRlbSxpKSBpbiBsaXN0XCI+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndyYXBwZXItbGlzdFwiIDpzdHlsZT1cInsgYmFja2dyb3VuZDogaXRlbS5zdGF0ZSA9PSAn6LaF5qCHJyA/ICdyZ2JhKDI1NCwgNzksIDIsIDAuMDMpJyA6ICcnIH1cIiBAY2xpY2s9XCJvbkNoYW5nZVNob3coaXRlbSxpKVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC1tY1wiPnt7IGl0ZW0uc2l0ZU5hbWUgfX08L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QteHpcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwieHotd29yZHNcIlxyXG4gICAgICAgICAgICAgICAgICAgOnN0eWxlPVwieyBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIGp1ZGdlTGV2ZWwocmVwbGFjZVN0cmluZyhpdGVtLndhdGVyUXVhbGl0eUxldmVsKSkgKyAnKScgfVwiPnt7XHJcbiAgICAgICAgICAgICAgICByZXBsYWNlU3RyaW5nKGl0ZW0ud2F0ZXJRdWFsaXR5TGV2ZWwpIHx8IFwiLVwiIH19XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC13b3Jkc1wiPuebruaghzwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC1tYlwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiWydtYi13b3JkcycsIGp1ZGdlVGFyZ2V0TGV2ZWwocmVwbGFjZVN0cmluZyhpdGVtLndhdGVyUXVhbGl0eVRhcmdldCkpXVwiPnt7XHJcbiAgICAgICAgICAgICAgICByZXBsYWNlU3RyaW5nKGl0ZW0ud2F0ZXJRdWFsaXR5VGFyZ2V0KSB8fCBcIi1cIiB9fVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDx2YW4taWNvbiB2LWlmPVwiaXRlbS5zaG93XCIgbmFtZT1cImFycm93LWRvd25cIiBjb2xvcj1cIiNhNmE2YTZcIiBzaXplPVwiMTJcIi8+XHJcbiAgICAgICAgICAgICAgPHZhbi1pY29uIHYtZWxzZSBuYW1lPVwiYXJyb3ctdXBcIiBjb2xvcj1cIiNhNmE2YTZcIiBzaXplPVwiMTJcIi8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiB2LWlmPVwiaXRlbS5zaG93XCIgY2xhc3M9XCJzaXRlLWluZm8td3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZnMgc2l0ZS1pbmZvLW5hbWVcIj5cclxuICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAg5pWw5o2u5pe26Ze0XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj57e2l0ZW0ubW9uaXRvcmluZ1RpbWV9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmtcIiBAY2xpY2s9XCJ0b1N0YXRpb24oaXRlbSwgdGltZVR5cGUpXCI+54K55Ye75p+l55yL6K+m5oOFPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNpdGUtaW5mby1uYW1lXCI+XHJcbiAgICAgICAgICAgICAg6ICD5qC45Y6/KOW4gilcclxuICAgICAgICAgICAgICA8c3Bhbj57e2l0ZW0uYXJlYU5hbWV9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaXRlLWluZm8tZmFjdG9yXCI+XHJcbiAgICAgICAgICAgICAgPHRlbXBsYXRlICB2LWZvcj1cIml0ZW1DIGluIGl0ZW0uZmFjdG9yTGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiaXRlbUMub3ZlclN0YW5kYXJkPT09ZmFsc2VcIiBjbGFzcz1cInNpdGUtaW5mby1mYWN0b3ItaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICB7e2l0ZW1DLmZhY3Rvck5hbWV9fSA8c3Bhbj57e2l0ZW1DLnZhbHVlfX17e2l0ZW1DLnVuaXR9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJzaXRlLWluZm8tZmFjdG9yLWl0ZW1cIiBzdHlsZT1cImNvbG9yOiByZWRcIj5cclxuICAgICAgICAgICAgICAgICAge3tpdGVtQy5mYWN0b3JOYW1lfX0gPHNwYW4gc3R5bGU9XCJjb2xvcjogcmVkXCI+e3tpdGVtQy52YWx1ZX19e3tpdGVtQy51bml0fX0gIHt7aXRlbUMubXVsdGlwbGllcn195YCNPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2l0ZS1pbmZvLW90aGVyXCIgc3R5bGU9XCJjb2xvcjogcmdiYSg4NCwgMTE3LCAyNDgsIDEpO2ZvbnQtd2VpZ2h0OiBib2xkXCI+XHJcbiAgICAgICAgICAgICAg5LiK5ri46LaF5qCH5pat6Z2i77yae3tleGNlZWRTaXRlfX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaXRlLWluZm8tb3RoZXJcIiBzdHlsZT1cInRleHQtYWxpZ246IHJpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgPHZhbi1pY29uIG5hbWU9XCJpbmZvXCIgc2l6ZT1cIjE0XCIgY29sb3I9XCJyZ2JhKDE5NiwgMTk2LCAxOTYsIDEpXCIvPlxyXG4gICAgICAgICAgICAgIOiHquWKqOebkea1i+aVsOaNruacque7j+WbveWutuWuoeaguO+8jOS7heS+m+WPguiAg1xyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCB0aW1lU2VsZWN0IGZyb20gXCJAL3ZpZXdzL3dhdGVySG9tZVBhZ2UvZXhhbWluZVNpdGVMaXN0L2NvbXBvbmVudHMvdGltZVNlbGVjdC52dWVcIjtcclxuICBpbXBvcnQgYXJlYUZpbHRlciBmcm9tIFwiQC9jb21wb25lbnRzL2FyZWFGaWx0ZXIudnVlXCI7XHJcbiAgaW1wb3J0IHtpbWdKdWdkZUxldmVsfSBmcm9tIFwiQC91dGlscy91dGlsc1wiO1xyXG4gIGltcG9ydCB7c2VjdGlvbkxpc3QsIHVwU3RyZWFtT3Zlcn0gZnJvbSBcIkAvYXBpL3dhdGVyX2VudmlyXCI7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiaW5kZXhcIixcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgdGltZVNlbGVjdCxcclxuICAgICAgYXJlYUZpbHRlclxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYWN0aXZlVGl0bGU6IDAsXHJcbiAgICAgICAgZGF0YVR5cGU6ICcnLFxyXG4gICAgICAgIGFyZWFTaG93OiBmYWxzZSxcclxuICAgICAgICBhY3RpdmU6IDAsXHJcbiAgICAgICAgdGltZVR5cGU6IFwi5pe2XCIsXHJcbiAgICAgICAgbm93VGltZTogXCJcIixcclxuICAgICAgICBjb3VudHJ5VGFiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIuaXtuWAvFwiLFxyXG4gICAgICAgICAgICB2YWw6IFwi5pe2XCIsXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIuaXpeWAvFwiLFxyXG4gICAgICAgICAgICB2YWw6IFwi5pelXCIsXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIuaciOWAvFwiLFxyXG4gICAgICAgICAgICB2YWw6IFwi5pyIXCIsXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIuW5tOWAvFwiLFxyXG4gICAgICAgICAgICB2YWw6IFwi5bm0XCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcHJvdmluY2VUYWI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwi5pyI5YC8XCIsXHJcbiAgICAgICAgICAgIHZhbDogXCLmnIhcIixcclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwi5bm05YC8XCIsXHJcbiAgICAgICAgICAgIHZhbDogXCLlubRcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBhcnI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwi5pe25YC8XCIsXHJcbiAgICAgICAgICAgIHZhbDogXCLml7ZcIixcclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwi5pel5YC8XCIsXHJcbiAgICAgICAgICAgIHZhbDogXCLml6VcIixcclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwi5pyI5YC8XCIsXHJcbiAgICAgICAgICAgIHZhbDogXCLmnIhcIixcclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwi5bm05YC8XCIsXHJcbiAgICAgICAgICAgIHZhbDogXCLlubRcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBkYXRhb2JqOiB7XHJcbiAgICAgICAgICBleGNlZWQ6IDAsXHJcbiAgICAgICAgICB1cFRvU3RhbmRhcmQ6IDAsXHJcbiAgICAgICAgICB0b3RhbDogMCxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxpc3Q6IFtdLFxyXG4gICAgICAgIHRpdGxlOiBcIlwiLFxyXG4gICAgICAgIGRhdGFMaXN0OiBbXSxcclxuICAgICAgICB4enFoOiBcIlwiLFxyXG4gICAgICAgIGV4Y2VlZFNpdGU6IG51bGwsXHJcbiAgICAgICAgZmlyc3Q6IHRydWVcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG5cclxuICAgICAgdGhpcy50aXRsZSA9IHRoaXMuJHJvdXRlLnF1ZXJ5LnR5cGU7XHJcbiAgICAgIGlmKHRoaXMudGl0bGU9PT0n5Zu955yB5o6nJyl7ICAvL+WbveaOp+iHquWKqOOAgeecgeaOp+W4guaOp+aJi+W3pe+8jOWbveecgeaOp+aXtum7mOiupOafpeecgeaOp+eahFxyXG4gICAgICAgIHRoaXMuYXJyID0gdGhpcy5wcm92aW5jZVRhYjtcclxuICAgICAgICB0aGlzLnRpbWVUeXBlID0gXCLmnIhcIjtcclxuICAgICAgICB0aGlzLmRhdGFUeXBlID0gJ+ecgeaOpyc7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMuZGF0YVR5cGUgPSB0aGlzLiRyb3V0ZS5xdWVyeS50eXBlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy4kcm91dGUucXVlcnkudHlwZSA9PT0gXCLlm73mjqdcIikge1xyXG4gICAgICAgIHRoaXMuYXJyID0gdGhpcy5jb3VudHJ5VGFiO1xyXG4gICAgICAgIHRoaXMudGltZVR5cGUgPSBcIuaXtlwiO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuJHJvdXRlLnF1ZXJ5LnR5cGUgPT09IFwi5biC5o6nXCIpIHtcclxuICAgICAgICB0aGlzLmFyciA9IHRoaXMucHJvdmluY2VUYWI7XHJcbiAgICAgICAgdGhpcy50aW1lVHlwZSA9IFwi5pyIXCI7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICAvKmFjdGl2YXRlZCgpIHtcclxuICAgICAgdGhpcy50aXRsZSA9IHRoaXMuJHJvdXRlLnF1ZXJ5LnR5cGU7XHJcbiAgICAgIGlmICh0aGlzLiRyb3V0ZS5xdWVyeS50eXBlID09PSBcIuWbveaOp1wiKSB7XHJcbiAgICAgICAgdGhpcy5hcnIgPSB0aGlzLmNvdW50cnlUYWI7XHJcbiAgICAgICAgdGhpcy50aW1lVHlwZSA9IFwi5pe2XCI7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy4kcm91dGUucXVlcnkudHlwZSA9PT0gXCLnnIHmjqdcIikge1xyXG4gICAgICAgIHRoaXMuYXJyID0gdGhpcy5wcm92aW5jZVRhYjtcclxuICAgICAgICB0aGlzLnRpbWVUeXBlID0gXCLmnIhcIjtcclxuICAgICAgfVxyXG4gICAgfSwqL1xyXG4gICAgZGVzdHJveWVkKCkge1xyXG4gICAgICB0aGlzLmZpcnN0ID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGxvYWREYXRhKCkge1xyXG4gICAgICAgIGxldCB4enFoID0gXCJcIjtcclxuICAgICAgICBsZXQgbHkgPSBcIlwiO1xyXG4gICAgICAgIGlmICh0aGlzLiRyb3V0ZS5xdWVyeS54enFoKSB7XHJcbiAgICAgICAgICB4enFoID0gdGhpcy4kcm91dGUucXVlcnkueHpxaDtcclxuICAgICAgICAgIGx5ID0gXCJcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgeHpxaCA9IFwi5piG5piO5biCXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLiRyb3V0ZS5xdWVyeS5seSkge1xyXG4gICAgICAgICAgbHkgPSB0aGlzLiRyb3V0ZS5xdWVyeS5seTtcclxuICAgICAgICAgIHh6cWggPSBcIlwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBseSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnh6cWgubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgeHpxaCA9IHRoaXMueHpxaDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGluZm8gPSB7XHJcbiAgICAgICAgICBkYXRhVHlwZTogdGhpcy5kYXRhVHlwZSxcclxuICAgICAgICAgIGRhdGVUaW1lOiB0aGlzLnRpbWVUeXBlID09PSBcIuaXtlwiID8gdGhpcy5ub3dUaW1lICsgXCI6MDBcIiA6IHRoaXMubm93VGltZSxcclxuICAgICAgICAgIHJlZ2lvbjogeHpxaCxcclxuICAgICAgICAgIHRpbWVUeXBlOiB0aGlzLnRpbWVUeXBlLFxyXG4gICAgICAgICAgYmFzaW5OYW1lOiBseSxcclxuICAgICAgICAgIGZpcnN0RmxhZzogdGhpcy5maXJzdFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgc2VjdGlvbkxpc3QoaW5mbykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YW9iaiA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3QgPSByZXMuZGF0YS5saXN0Lm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICByZXR1cm4gey4uLml0ZW0sIHNob3c6IGZhbHNlfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhTGlzdCA9IHJlcy5kYXRhLmxpc3QubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgIHJldHVybiB7Li4uaXRlbSwgc2hvdzogZmFsc2V9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0ID0gZmFsc2U7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8v5p+l6K+i56uZ54K56K+m5oOFXHJcbiAgICAgIHF1ZXJ5U2l0ZURlcyhpdGVtKXtcclxuICAgICAgICBsZXQgcXVlcnlEYXRhID0ge1xyXG4gICAgICAgICAgdHlwZTogaXRlbS50eXBlLFxyXG4gICAgICAgICAgZGF0ZVRpbWU6ICcnLFxyXG4gICAgICAgICAgc2l0ZUlkOiBpdGVtLnNpdGVJZCxcclxuICAgICAgICAgIHRpbWVUeXBlOiB0aGlzLnRpbWVUeXBlLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdXBTdHJlYW1PdmVyKHF1ZXJ5RGF0YSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIGlmKHJlcy5kYXRhLmxlbmd0aD09PTApe1xyXG4gICAgICAgICAgICAgIHRoaXMuZXhjZWVkU2l0ZSA9ICfml6AnO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICB0aGlzLmV4Y2VlZFNpdGUgPSByZXMuZGF0YS5tYXAoaXRlbT0+e3JldHVybiBpdGVtLnNpdGVOYW1lfSkuam9pbignLCcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIHN0YXRpb25DaGFuZ2UodHlwZSkge1xyXG4gICAgICAgIGlmICh0eXBlID09PSBcInN1bVwiKSB7XHJcbiAgICAgICAgICB0aGlzLmxpc3QgPSB0aGlzLmRhdGFMaXN0O1xyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJkYlwiKSB7XHJcbiAgICAgICAgICB0aGlzLmxpc3QgPSB0aGlzLmRhdGFMaXN0LmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS5zdGF0ZSA9PT0gXCLovr7moIdcIlxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcImNiXCIpIHtcclxuICAgICAgICAgIHRoaXMubGlzdCA9IHRoaXMuZGF0YUxpc3QuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtLnN0YXRlID09PSBcIui2heagh1wiXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uQ2xpY2tSaWdodCgpIHtcclxuICAgICAgICB0aGlzLmFyZWFTaG93ID0gdHJ1ZTtcclxuICAgICAgfSxcclxuICAgICAgZ2V0RGl2aXNpb24oYXJyKSB7XHJcbiAgICAgICAgdGhpcy5hcmVhU2hvdyA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChhcnIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgdGhpcy54enFoID0gYXJyLmpvaW4oXCIsXCIpO1xyXG4gICAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgdGFiQ2hhbmdlKGRhdGEsIGluZGV4KSB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBpbmRleDtcclxuICAgICAgICB0aGlzLnRpbWVUeXBlID0gZGF0YS52YWw7XHJcbiAgICAgICAgLy8gdGhpcy5sb2FkRGF0YSgpO1xyXG4gICAgICB9LFxyXG4gICAgICAvL+WktOmDqHRpdGxl5YiH5o2iXHJcbiAgICAgIG9uQ2hhbmdlVGFiVGl0bGUoaW5kZXgpe1xyXG4gICAgICAgIHRoaXMuYWN0aXZlVGl0bGUgPSBpbmRleDtcclxuICAgICAgICBpZihpbmRleD09PTApe1xyXG4gICAgICAgICAgdGhpcy5kYXRhVHlwZSA9ICfnnIHmjqcnO1xyXG4gICAgICAgICAgdGhpcy50aW1lVHlwZSA9ICfmnIgnO1xyXG4gICAgICAgICAgdGhpcy5hcnIgPSB0aGlzLnByb3ZpbmNlVGFiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmRhdGFUeXBlID0gJ+WbveaOpyc7XHJcbiAgICAgICAgICB0aGlzLnRpbWVUeXBlID0gJ+aXtic7XHJcbiAgICAgICAgICB0aGlzLmFyciA9IHRoaXMuY291bnRyeVRhYjtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHJlcGxhY2VTdHJpbmcodmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKFwi57G7XCIsIFwiXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGp1ZGdlTGV2ZWwodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gaW1nSnVnZGVMZXZlbCh2YWx1ZSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGp1ZGdlVGFyZ2V0TGV2ZWwodmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICAgIHJldHVybiBcInRhcmdldDJcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIuKFoVwiKSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJ0YXJnZXQyXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCLihaJcIikge1xyXG4gICAgICAgICAgcmV0dXJuIFwidGFyZ2V0M1wiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwi4oWjXCIpIHtcclxuICAgICAgICAgIHJldHVybiBcInRhcmdldDRcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIuKFpFwiKSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJ0YXJnZXQ1XCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCLliqPihaRcIikge1xyXG4gICAgICAgICAgcmV0dXJuIFwidGFyZ2V0NlwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJ0YXJnZXQwXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB0aW1lRm4oZGF0YSkge1xyXG4gICAgICAgIHRoaXMubm93VGltZSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5sb2FkRGF0YSgpO1xyXG4gICAgICB9LFxyXG4gICAgICB0b1N0YXRpb24oaXRlbSwgdHlwZSkge1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICh0eXBlID09IFwi5pe2XCIgfHwgdHlwZSA9PSBcIuaXpVwiKSAmJlxyXG4gICAgICAgICAgKGl0ZW0uc2l0ZU5hbWUgPT0gXCLokpnlp5FcIiB8fCBpdGVtLnNpdGVOYW1lID09IFwi54uX6KGXXCIgfHwgaXRlbS5zaXRlTmFtZSA9PSBcIuWwvOagvOawtOaWh+erme+8iOaLluacqOWYju+8iVwiIHx8IGl0ZW0uc2l0ZU5hbWUgPT0gXCLlm5vnuqfnq5lcIiB8fCBpdGVtLnNpdGVOYW1lID09IFwi55uQ5aGYXCIgfHwgaXRlbS5zaXRlTmFtZSA9PSBcIuadvuWNjuWdneWdneWPo1wiKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5ub3dUaW1lKVxyXG4gICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICBuYW1lOiBcInN0YXRpb25EZXRhaWxcIixcclxuICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICAvLyBtYzogaXRlbS5zaXRlTmFtZSxcclxuICAgICAgICAgICAgICB0eXBlOiAn5pyIJyxcclxuICAgICAgICAgICAgICBpZDogaXRlbS5zaXRlSWQsXHJcbiAgICAgICAgICAgICAgdGltZTogdGhpcy5ub3dUaW1lLnN1YnN0cigwLCA3KSxcclxuICAgICAgICAgICAgICAvLyBsaXN0VHlwZTogaXRlbS50eXBlLFxyXG4gICAgICAgICAgICAgIC8vIHpkVHlwZTogaXRlbS5tb25pdG9yaW5nTWV0aG9kLFxyXG4gICAgICAgICAgICAgIC8vIGdzVHlwZTogdGhpcy4kcm91dGUucXVlcnkudHlwZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgbmFtZTogXCJzdGF0aW9uRGV0YWlsXCIsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgdHlwZTogdHlwZSxcclxuICAgICAgICAgICAgICBpZDogaXRlbS5zaXRlSWQsXHJcbiAgICAgICAgICAgICAgdGltZTogdGhpcy5ub3dUaW1lLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICAvL+aYr+WQpuaYvuekuuivpuaDhVxyXG4gICAgICBvbkNoYW5nZVNob3coaXRlbSxpKXtcclxuICAgICAgICBpZihpdGVtLnNob3c9PT10cnVlKXtcclxuICAgICAgICAgIHRoaXMubGlzdFtpXS5zaG93ID0gZmFsc2U7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLmxpc3RbaV0uc2hvdyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucXVlcnlTaXRlRGVzKGl0ZW0pXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBiZWZvcmVSb3V0ZUxlYXZlKHRvLCBmcm9tLCBuZXh0KSB7XHJcbiAgICAgIGlmICh0by5uYW1lID09IFwic3RhdGlvbkRldGFpbFwiKSB7XHJcbiAgICAgICAgZnJvbS5tZXRhLmtlZXBBbGl2ZSA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZnJvbS5tZXRhLmtlZXBBbGl2ZSA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIG5leHQoKTtcclxuICAgIH0sXHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICAuY2FyZC10YWIge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cclxuICAgIHVsIHtcclxuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG4gICAgICBtYXJnaW46IDAgMzBweDtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgbGkge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgICAgbWFyZ2luOiAxMnB4IDEwcHggMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyOHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjVkZWcsIHJnYmEoNzMsIDExNywgMjM2LCAxKSAwJSwgcmdiYSgxNTEsIDE3OSwgMjU1LCAxKSAxMDAlKTtcclxuICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDEwcHggcmdiYSg4NCwgMTI1LCAyMzksIDAuNCk7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jb250ZW50LXdyYXBwZXIge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTA0cHgpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcblxyXG4gICAgLndyYXBwZXItdG9wIHtcclxuICAgICAgbWFyZ2luOiA0cHggNnB4O1xyXG5cclxuICAgICAgLnRvcC1ib3gge1xyXG4gICAgICAgIHdpZHRoOiAzMiU7XHJcbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcblxyXG4gICAgICAgIC5ib3gtbGVmdCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDZweCAwIDRweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5ib3gtcmlnaHQge1xyXG4gICAgICAgICAgc3BhbjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgc3BhbjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDEwcHggMCA0cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuc3VtIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDY4LCAxMjMsIDI1MiwgMC41KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmRiIHtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDE4NiwgMTczLCAwLjUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2Ige1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU0LCA3OSwgMiwgMC41KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC53cmFwcGVyLWJvdHRvbSB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDkwcHgpO1xyXG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG5cclxuICAgICAgLndyYXBwZXItbGlzdCB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEycHgpO1xyXG4gICAgICAgIGhlaWdodDogNTRweDtcclxuICAgICAgICBtYXJnaW46IDZweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNjgsIDEyMywgMjUyLCAwLjAzKTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIC5saXN0LW1jIHtcclxuICAgICAgICAgIHdpZHRoOiBjYWxjKDQ1JSAtIDE1cHgpO1xyXG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGlzdC14eiB7XHJcbiAgICAgICAgICB3aWR0aDogMjUlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgLnh6LXdvcmRzIHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOiAzNHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDRweDtcclxuICAgICAgICAgICAgd2lkdGg6IGF1dG87XHJcbiAgICAgICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGlzdC13b3JkcyB7XHJcbiAgICAgICAgICB3aWR0aDogMTAlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAubGlzdC1tYiB7XHJcbiAgICAgICAgICB3aWR0aDogMTUlO1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgLm1iLXdvcmRzIHtcclxuICAgICAgICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuc2l0ZS1pbmZvLXdyYXBwZXIge1xyXG4gICAgICAgIG1hcmdpbjogMCA2cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NywgMjUwLCAyNTUsIDEpO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjI1LCAyMzMsIDI1MiwgMSk7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcblxyXG4gICAgICAgIC5zaXRlLWluZm8tbmFtZSB7XHJcbiAgICAgICAgICBwYWRkaW5nOiA0cHggMjFweDtcclxuXHJcbiAgICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMSk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLmxpbmsge1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSg4NCwgMTE3LCAyNDgsIDEpO1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5zaXRlLWluZm8tZmFjdG9yIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICBtYXJnaW46IDRweCA5cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiA2cHggMTJweCAycHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyNSwgMjMzLCAyNTIsIDEpO1xyXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICAgICAgICAuc2l0ZS1pbmZvLWZhY3Rvci1pdGVtIHtcclxuICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuXHJcbiAgICAgICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuc2l0ZS1pbmZvLW90aGVyIHtcclxuICAgICAgICAgIG1hcmdpbjogMCAxMnB4O1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDdweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50aXRsZS1ib3h7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIH1cclxuXHJcbiAgLnRpdGxlLWJveC1hY3RpdmV7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCAjNDk3NWVjIDAlLCAjOTdiM2ZmIDEwMCUpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggcmdiYSg4NCwgMTI1LCAyMzksIDAuNCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyOHB4O1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgLnRhcmdldDIge1xyXG4gICAgY29sb3I6IHJnYmEoMjIsIDkzLCAyNTUsIDEpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMiwgOTMsIDI1NSwgMSk7XHJcbiAgfVxyXG5cclxuICAudGFyZ2V0MyB7XHJcbiAgICBjb2xvcjogcmdiYSgzOSwgMjA4LCA2NywgMSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDM5LCAyMDgsIDY3LCAxKTtcclxuICB9XHJcblxyXG4gIC50YXJnZXQ0IHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMTk1LCA1NiwgMSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMTk1LCA1NiwgMSk7XHJcbiAgfVxyXG5cclxuICAudGFyZ2V0NSB7XHJcbiAgICBjb2xvcjogcmdiYSgyNTMsIDE0MiwgMSwgMSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1MywgMTQyLCAxLCAxKTtcclxuICB9XHJcblxyXG4gIC50YXJnZXQ2IHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NCwgNzksIDIsIDEpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTQsIDc5LCAyLCAxKTtcclxuICB9XHJcblxyXG4gIC50YXJnZXQwIHtcclxuICAgIGNvbG9yOiByZ2JhKDE2MCwgMTYwLCAxNjAsIDEpO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxNjAsIDE2MCwgMTYwLCAxKTtcclxuICB9XHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJuYXRpb25hbEF1dG9cIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInZhbi1uYXYtYmFyXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBcImxlZnQtYXJyb3dcIjogXCJcIiwgXCJyaWdodC10ZXh0XCI6IFwi562b6YCJXCIgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgXCJjbGljay1sZWZ0XCI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLmdvKC0xKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFwiY2xpY2stcmlnaHRcIjogX3ZtLm9uQ2xpY2tSaWdodCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInRlbXBsYXRlXCIsXG4gICAgICAgICAgICB7IHNsb3Q6IFwidGl0bGVcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0udGl0bGUgIT09IFwi5Zu955yB5o6nXCJcbiAgICAgICAgICAgICAgICA/IFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkgKyBcIuaWremdolwiKV1cbiAgICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hY3RpdmVUaXRsZSA9PT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ0aXRsZS1ib3gtYWN0aXZlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwidGl0bGUtYm94XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25DaGFuZ2VUYWJUaXRsZSgwKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLnnIHmjqfmlq3pnaJcIildXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYWN0aXZlVGl0bGUgPT09IDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwidGl0bGUtYm94LWFjdGl2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcInRpdGxlLWJveFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uQ2hhbmdlVGFiVGl0bGUoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5Zu95o6n5pat6Z2iXCIpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKSxcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICAgIF9jKFwiYXJlYUZpbHRlclwiLCB7XG4gICAgICAgIGF0dHJzOiB7IGlzU2hvdzogX3ZtLmFyZWFTaG93IH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgZ2V0RmlsdGVyOiBfdm0uZ2V0RGl2aXNpb24sXG4gICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIF92bS5hcmVhU2hvdyA9IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRhYlwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgIF92bS5fbChfdm0uYXJyLCBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IHsgYWN0aXZlOiBfdm0uYWN0aXZlID09IGluZGV4IH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udGFiQ2hhbmdlKGl0ZW0sIGluZGV4KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtLmxhYmVsKSArIFwiIFwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICB9KSxcbiAgICAgICAgICAwXG4gICAgICAgICksXG4gICAgICBdKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtd3JhcHBlclwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInRpbWVTZWxlY3RcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgb3B0aW9uOiBfdm0udGltZVR5cGUgfSxcbiAgICAgICAgICAgIG9uOiB7IGdldFRpbWU6IF92bS50aW1lRm4gfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndyYXBwZXItdG9wIGZzXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0b3AtYm94IHN1bSBmc1wiLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnN0YXRpb25DaGFuZ2UoXCJzdW1cIilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZGF0YW9iai50b3RhbCkpXSksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuS4qlwiKV0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0b3AtYm94IGRiIGZzXCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc3RhdGlvbkNoYW5nZShcImRiXCIpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmRhdGFvYmoudXBUb1N0YW5kYXJkKSldKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5LiqXCIpXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRvcC1ib3ggY2IgZnNcIixcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zdGF0aW9uQ2hhbmdlKFwiY2JcIilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZGF0YW9iai5leGNlZWQpKV0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLkuKpcIildKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIndyYXBwZXItYm90dG9tXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5saXN0LCBmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIndyYXBwZXItbGlzdFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnN0YXRlID09IFwi6LaF5qCHXCIgPyBcInJnYmEoMjU0LCA3OSwgMiwgMC4wMylcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkNoYW5nZVNob3coaXRlbSwgaSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGlzdC1tY1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5zaXRlTmFtZSkpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGlzdC14elwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwieHotd29yZHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVybChcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5qdWRnZUxldmVsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZXBsYWNlU3RyaW5nKGl0ZW0ud2F0ZXJRdWFsaXR5TGV2ZWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIilcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVwbGFjZVN0cmluZyhpdGVtLndhdGVyUXVhbGl0eUxldmVsKSB8fCBcIi1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArIFwiIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxpc3Qtd29yZHNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLnm67moIdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsaXN0LW1iXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1iLXdvcmRzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5qdWRnZVRhcmdldExldmVsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZXBsYWNlU3RyaW5nKGl0ZW0ud2F0ZXJRdWFsaXR5VGFyZ2V0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZXBsYWNlU3RyaW5nKGl0ZW0ud2F0ZXJRdWFsaXR5VGFyZ2V0KSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArIFwiIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zaG93XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInZhbi1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImFycm93LWRvd25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjYTZhNmE2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwidmFuLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYXJyb3ctdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjYTZhNmE2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBpdGVtLnNob3dcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNpdGUtaW5mby13cmFwcGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmcyBzaXRlLWluZm8tbmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiDmlbDmja7ml7bpl7QgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLm1vbml0b3JpbmdUaW1lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS50b1N0YXRpb24oaXRlbSwgX3ZtLnRpbWVUeXBlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLngrnlh7vmn6XnnIvor6bmg4VcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2l0ZS1pbmZvLW5hbWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiDogIPmoLjljr8o5biCKSBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLmFyZWFOYW1lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2l0ZS1pbmZvLWZhY3RvclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woaXRlbS5mYWN0b3JMaXN0LCBmdW5jdGlvbiAoaXRlbUMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1DLm92ZXJTdGFuZGFyZCA9PT0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNpdGUtaW5mby1mYWN0b3ItaXRlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArIF92bS5fcyhpdGVtQy5mYWN0b3JOYW1lKSArIFwiIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaXRlbUMudmFsdWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaXRlbUMudW5pdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2l0ZS1pbmZvLWZhY3Rvci1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwicmVkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICsgX3ZtLl9zKGl0ZW1DLmZhY3Rvck5hbWUpICsgXCIgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcInJlZFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtQy52YWx1ZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGl0ZW1DLnVuaXQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtQy5tdWx0aXBsaWVyKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIuWAjVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2l0ZS1pbmZvLW90aGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoODQsIDExNywgMjQ4LCAxKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LXdlaWdodFwiOiBcImJvbGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIg5LiK5ri46LaF5qCH5pat6Z2i77yaXCIgKyBfdm0uX3MoX3ZtLmV4Y2VlZFNpdGUpICsgXCIgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzaXRlLWluZm8tb3RoZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcInRleHQtYWxpZ25cIjogXCJyaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInZhbi1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcIjE0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoMTk2LCAxOTYsIDE5NiwgMSlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIOiHquWKqOebkea1i+aVsOaNruacque7j+WbveWutuWuoeaguO+8jOS7heS+m+WPguiAgyBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApLFxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3gtbGVmdFwiIH0sIFtcbiAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMvZG1zdW0ucG5nXCIpLCBhbHQ6IFwiXCIgfSB9KSxcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5oC75pWwXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LWxlZnRcIiB9LCBbXG4gICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL2RtZGIucG5nXCIpLCBhbHQ6IFwiXCIgfSB9KSxcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6L6+5qCHXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94LWxlZnRcIiB9LCBbXG4gICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL2RtY2IucG5nXCIpLCBhbHQ6IFwiXCIgfSB9KSxcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6LaF5qCHXCIpXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIG9yZGluYXJ5VG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3JkaW5hcnktdG8tcHJpbWl0aXZlJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgRGF0ZS5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1kYXRlLnByb3RvdHlwZS1AQHRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChoaW50KSB7XG4gIGFuT2JqZWN0KHRoaXMpO1xuICBpZiAoaGludCA9PT0gJ3N0cmluZycgfHwgaGludCA9PT0gJ2RlZmF1bHQnKSBoaW50ID0gJ3N0cmluZyc7XG4gIGVsc2UgaWYgKGhpbnQgIT09ICdudW1iZXInKSB0aHJvdyBuZXcgJFR5cGVFcnJvcignSW5jb3JyZWN0IGhpbnQnKTtcbiAgcmV0dXJuIG9yZGluYXJ5VG9QcmltaXRpdmUodGhpcywgaGludCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciBkYXRlVG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGF0ZS10by1wcmltaXRpdmUnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1BSSU1JVElWRSA9IHdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcbnZhciBEYXRlUHJvdG90eXBlID0gRGF0ZS5wcm90b3R5cGU7XG5cbi8vIGBEYXRlLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWRhdGUucHJvdG90eXBlLUBAdG9wcmltaXRpdmVcbmlmICghaGFzT3duKERhdGVQcm90b3R5cGUsIFRPX1BSSU1JVElWRSkpIHtcbiAgZGVmaW5lQnVpbHRJbihEYXRlUHJvdG90eXBlLCBUT19QUklNSVRJVkUsIGRhdGVUb1ByaW1pdGl2ZSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xuXG52YXIgRk9SQ0VEID0gIURFU0NSSVBUT1JTIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHsgbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKDEpOyB9KTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQsIHNoYW06ICFERVNDUklQVE9SUyB9LCB7XG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgICByZXR1cm4gbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRvSW5kZXhlZE9iamVjdChpdCksIGtleSk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvcnNcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBzaGFtOiAhREVTQ1JJUFRPUlMgfSwge1xuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9iamVjdCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gICAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICAgIHZhciBrZXlzID0gb3duS2V5cyhPKTtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIga2V5LCBkZXNjcmlwdG9yO1xuICAgIHdoaWxlIChrZXlzLmxlbmd0aCA+IGluZGV4KSB7XG4gICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIGtleSA9IGtleXNbaW5kZXgrK10pO1xuICAgICAgaWYgKGRlc2NyaXB0b3IgIT09IHVuZGVmaW5lZCkgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIG5hdGl2ZUtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgRkFJTFNfT05fUFJJTUlUSVZFUyA9IGZhaWxzKGZ1bmN0aW9uICgpIHsgbmF0aXZlS2V5cygxKTsgfSk7XG5cbi8vIGBPYmplY3Qua2V5c2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5rZXlzXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBGQUlMU19PTl9QUklNSVRJVkVTIH0sIHtcbiAga2V5czogZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC1kZWZpbmUnKTtcbnZhciBkZWZpbmVTeW1ib2xUb1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtZGVmaW5lLXRvLXByaW1pdGl2ZScpO1xuXG4vLyBgU3ltYm9sLnRvUHJpbWl0aXZlYCB3ZWxsLWtub3duIHN5bWJvbFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zeW1ib2wudG9wcmltaXRpdmVcbmRlZmluZVdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcblxuLy8gYFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV1gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zeW1ib2wucHJvdG90eXBlLUBAdG9wcmltaXRpdmVcbmRlZmluZVN5bWJvbFRvUHJpbWl0aXZlKCk7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNhcmQtdGFiW2RhdGEtdi0wNDM2Y2E5NV0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbn1cXG4uY2FyZC10YWIgdWxbZGF0YS12LTA0MzZjYTk1XSB7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gNjBweCk7XFxuICBtYXJnaW46IDAgMzBweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5jYXJkLXRhYiB1bCBsaVtkYXRhLXYtMDQzNmNhOTVdIHtcXG4gIGZsZXg6IDE7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBtYXJnaW46IDEycHggMTBweCAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uY2FyZC10YWIgdWwgLmFjdGl2ZVtkYXRhLXYtMDQzNmNhOTVdIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCAjNDk3NWVjIDAlLCAjOTdiM2ZmIDEwMCUpO1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxMHB4IHJnYmEoODQsIDEyNSwgMjM5LCAwLjQpO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5jb250ZW50LXdyYXBwZXJbZGF0YS12LTA0MzZjYTk1XSB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDRweCk7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlci10b3BbZGF0YS12LTA0MzZjYTk1XSB7XFxuICBtYXJnaW46IDRweCA2cHg7XFxufVxcbi5jb250ZW50LXdyYXBwZXIgLndyYXBwZXItdG9wIC50b3AtYm94W2RhdGEtdi0wNDM2Y2E5NV0ge1xcbiAgd2lkdGg6IDMyJTtcXG4gIGhlaWdodDogMzJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbn1cXG4uY29udGVudC13cmFwcGVyIC53cmFwcGVyLXRvcCAudG9wLWJveCAuYm94LWxlZnRbZGF0YS12LTA0MzZjYTk1XSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlci10b3AgLnRvcC1ib3ggLmJveC1sZWZ0IGltZ1tkYXRhLXYtMDQzNmNhOTVdIHtcXG4gIHBhZGRpbmc6IDAgNnB4IDAgNHB4O1xcbn1cXG4uY29udGVudC13cmFwcGVyIC53cmFwcGVyLXRvcCAudG9wLWJveCAuYm94LXJpZ2h0IHNwYW5bZGF0YS12LTA0MzZjYTk1XTpmaXJzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6ICMxMjEyMzY7XFxufVxcbi5jb250ZW50LXdyYXBwZXIgLndyYXBwZXItdG9wIC50b3AtYm94IC5ib3gtcmlnaHQgc3BhbltkYXRhLXYtMDQzNmNhOTVdOmxhc3QtY2hpbGQge1xcbiAgbWFyZ2luOiAwIDEwcHggMCA0cHg7XFxufVxcbi5jb250ZW50LXdyYXBwZXIgLndyYXBwZXItdG9wIC5zdW1bZGF0YS12LTA0MzZjYTk1XSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDY4LCAxMjMsIDI1MiwgMC41KTtcXG59XFxuLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlci10b3AgLmRiW2RhdGEtdi0wNDM2Y2E5NV0ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAxODYsIDE3MywgMC41KTtcXG59XFxuLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlci10b3AgLmNiW2RhdGEtdi0wNDM2Y2E5NV0ge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTQsIDc5LCAyLCAwLjUpO1xcbn1cXG4uY29udGVudC13cmFwcGVyIC53cmFwcGVyLWJvdHRvbVtkYXRhLXYtMDQzNmNhOTVdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA5MHB4KTtcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxufVxcbi5jb250ZW50LXdyYXBwZXIgLndyYXBwZXItYm90dG9tIC53cmFwcGVyLWxpc3RbZGF0YS12LTA0MzZjYTk1XSB7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMTJweCk7XFxuICBoZWlnaHQ6IDU0cHg7XFxuICBtYXJnaW46IDZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDY4LCAxMjMsIDI1MiwgMC4wMyk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlci1ib3R0b20gLndyYXBwZXItbGlzdCAubGlzdC1tY1tkYXRhLXYtMDQzNmNhOTVdIHtcXG4gIHdpZHRoOiBjYWxjKDQ1JSAtIDE1cHgpO1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4uY29udGVudC13cmFwcGVyIC53cmFwcGVyLWJvdHRvbSAud3JhcHBlci1saXN0IC5saXN0LXh6W2RhdGEtdi0wNDM2Y2E5NV0ge1xcbiAgd2lkdGg6IDI1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uY29udGVudC13cmFwcGVyIC53cmFwcGVyLWJvdHRvbSAud3JhcHBlci1saXN0IC5saXN0LXh6IC54ei13b3Jkc1tkYXRhLXYtMDQzNmNhOTVdIHtcXG4gIG1pbi13aWR0aDogMzRweDtcXG4gIHBhZGRpbmc6IDAgNHB4O1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IDE4cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICBjb2xvcjogd2hpdGU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5jb250ZW50LXdyYXBwZXIgLndyYXBwZXItYm90dG9tIC53cmFwcGVyLWxpc3QgLmxpc3Qtd29yZHNbZGF0YS12LTA0MzZjYTk1XSB7XFxuICB3aWR0aDogMTAlO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxufVxcbi5jb250ZW50LXdyYXBwZXIgLndyYXBwZXItYm90dG9tIC53cmFwcGVyLWxpc3QgLmxpc3QtbWJbZGF0YS12LTA0MzZjYTk1XSB7XFxuICB3aWR0aDogMTUlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5jb250ZW50LXdyYXBwZXIgLndyYXBwZXItYm90dG9tIC53cmFwcGVyLWxpc3QgLmxpc3QtbWIgLm1iLXdvcmRzW2RhdGEtdi0wNDM2Y2E5NV0ge1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDE1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxufVxcbi5jb250ZW50LXdyYXBwZXIgLndyYXBwZXItYm90dG9tIC5zaXRlLWluZm8td3JhcHBlcltkYXRhLXYtMDQzNmNhOTVdIHtcXG4gIG1hcmdpbjogMCA2cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogI2Y3ZmFmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlMWU5ZmM7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4uY29udGVudC13cmFwcGVyIC53cmFwcGVyLWJvdHRvbSAuc2l0ZS1pbmZvLXdyYXBwZXIgLnNpdGUtaW5mby1uYW1lW2RhdGEtdi0wNDM2Y2E5NV0ge1xcbiAgcGFkZGluZzogNHB4IDIxcHg7XFxufVxcbi5jb250ZW50LXdyYXBwZXIgLndyYXBwZXItYm90dG9tIC5zaXRlLWluZm8td3JhcHBlciAuc2l0ZS1pbmZvLW5hbWUgc3BhbltkYXRhLXYtMDQzNmNhOTVdIHtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbn1cXG4uY29udGVudC13cmFwcGVyIC53cmFwcGVyLWJvdHRvbSAuc2l0ZS1pbmZvLXdyYXBwZXIgLnNpdGUtaW5mby1uYW1lIC5saW5rW2RhdGEtdi0wNDM2Y2E5NV0ge1xcbiAgY29sb3I6ICM1NDc1Zjg7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuLmNvbnRlbnQtd3JhcHBlciAud3JhcHBlci1ib3R0b20gLnNpdGUtaW5mby13cmFwcGVyIC5zaXRlLWluZm8tZmFjdG9yW2RhdGEtdi0wNDM2Y2E5NV0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIG1hcmdpbjogNHB4IDlweDtcXG4gIHBhZGRpbmc6IDZweCAxMnB4IDJweDtcXG4gIGJhY2tncm91bmQ6ICNlMWU5ZmM7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uY29udGVudC13cmFwcGVyIC53cmFwcGVyLWJvdHRvbSAuc2l0ZS1pbmZvLXdyYXBwZXIgLnNpdGUtaW5mby1mYWN0b3IgLnNpdGUtaW5mby1mYWN0b3ItaXRlbVtkYXRhLXYtMDQzNmNhOTVdIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbn1cXG4uY29udGVudC13cmFwcGVyIC53cmFwcGVyLWJvdHRvbSAuc2l0ZS1pbmZvLXdyYXBwZXIgLnNpdGUtaW5mby1mYWN0b3IgLnNpdGUtaW5mby1mYWN0b3ItaXRlbSBzcGFuW2RhdGEtdi0wNDM2Y2E5NV0ge1xcbiAgY29sb3I6ICMxMjEyMzY7XFxufVxcbi5jb250ZW50LXdyYXBwZXIgLndyYXBwZXItYm90dG9tIC5zaXRlLWluZm8td3JhcHBlciAuc2l0ZS1pbmZvLW90aGVyW2RhdGEtdi0wNDM2Y2E5NV0ge1xcbiAgbWFyZ2luOiAwIDEycHg7XFxuICBwYWRkaW5nLWJvdHRvbTogN3B4O1xcbn1cXG4udGl0bGUtYm94W2RhdGEtdi0wNDM2Y2E5NV0ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG59XFxuLnRpdGxlLWJveC1hY3RpdmVbZGF0YS12LTA0MzZjYTk1XSB7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCAjNDk3NWVjIDAlLCAjOTdiM2ZmIDEwMCUpO1xcbiAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggcmdiYSg4NCwgMTI1LCAyMzksIDAuNCk7XFxuICBib3JkZXItcmFkaXVzOiAyOHB4O1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4udGFyZ2V0MltkYXRhLXYtMDQzNmNhOTVdIHtcXG4gIGNvbG9yOiAjMTY1ZGZmO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzE2NWRmZjtcXG59XFxuLnRhcmdldDNbZGF0YS12LTA0MzZjYTk1XSB7XFxuICBjb2xvcjogIzI3ZDA0MztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyN2QwNDM7XFxufVxcbi50YXJnZXQ0W2RhdGEtdi0wNDM2Y2E5NV0ge1xcbiAgY29sb3I6ICNmZmMzMzg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZjMzM4O1xcbn1cXG4udGFyZ2V0NVtkYXRhLXYtMDQzNmNhOTVdIHtcXG4gIGNvbG9yOiAjZmQ4ZTAxO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZkOGUwMTtcXG59XFxuLnRhcmdldDZbZGF0YS12LTA0MzZjYTk1XSB7XFxuICBjb2xvcjogI2ZlNGYwMjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZTRmMDI7XFxufVxcbi50YXJnZXQwW2RhdGEtdi0wNDM2Y2E5NV0ge1xcbiAgY29sb3I6ICNhMGEwYTA7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjYTBhMGEwO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA0MzZjYTk1Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiOTgyMTgxNmVcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wNDM2Y2E5NSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTA0MzZjYTk1Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQXNBQUFBTENBWUFBQUNwckhjbUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUNkU1VSQlZCaVZoWkhSRWNNd0NFTWw3TDNpVGhCdkZHZWpkSUltZTlXb1gyNThxZHZ5eFlGNDRvRG9RamttQUhCNG9qU0pQTUxtcGZXdEpUN3o0ZkIwampKUldIdzJOWWcxSVJuV3NIbmg5dHh4Q2FrdUFCQnJ0aUxnc0lHb2QxRU9LVkthN0s3YmQrRkpqNk9Hd1hhblgycGhSODFXUmdNZjVCeVRVWnIrQ1J2UXlMRDZ6TWN2SWdDOHIxU3psZEU2eWpIMWRZN3MydmNBb1AvZ0N5QXFUcSsxbnhiNkFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUF3QUFBQU1DQVlBQUFCV2RWem5BQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFDZlNVUkJWQ2lSblpGTERvTXdERVJma2g3TVhkRHVXM0dlMFBORXNJY3NDQWNyN2dMeEs1OUtmYnZZTTdHdGdTTmlFR0tRNzdMWmlIb3IyRDZoem9NS21JUjV2OGp5dERZMFZZdHF4LzFaVEc5MG5tRDZLMW1lTEFCMVdhekVlNmp6QUhZcW5Ja0hod3lHbmNNT2lVRXVBTmcrYlpxM3gvWFkyVlR0ejkvcnNoaFcrb3NZNUhUS29qZm5FSU9nenFQYXJXNVM1L2VEV3hySHRJRlJPUElCdlh4RjNDMkd0bnNBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQXdBQUFBTUNBWUFBQUJXZFZ6bkFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUNXU1VSQlZDaVJsVkZiQ3NNZ0VKeVZlSzhOZUtzS01XQnZKZFNjeThMbVEwMk5qU21kcjMzTXpESXNNSUN4aVkxTjNNK3BKd0ZnQUJGQ3kxR1RyTUhyZUJLWXgvc0ZraTE0N1k0K0M0cTF6TUhycUlxemE4bVh5QmVoYW45THptQUFVRmZCUmpBMjhWVHEyQy9EYzVySHloendsN3NEbWd4L3dkakVkMWZhM2VjUE5qR0VGcEJzYURQbDJmZmpUc0w2WVFDVldMRUR4dzVFTE93ZHVRRUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNDM2Y2E5NSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wNDM2Y2E5NSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjA0MzZjYTk1XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzA0MzZjYTk1JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzA0MzZjYTk1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzA0MzZjYTk1JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDQzNmNhOTUmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMDQzNmNhOTUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy93YXRlckhvbWVQYWdlL2V4YW1pbmVTaXRlTGlzdC9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0wNDM2Y2E5NSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wNDM2Y2E5NSZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=