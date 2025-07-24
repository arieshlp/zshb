(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39],{

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

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/lakeMonitorSite.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/components/lakeMonitorSite.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _api_water_envir__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/water_envir */ "./src/api/water_envir.js");
/* harmony import */ var _views_waterHomePage_stationDetail_stationDetail_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/views/waterHomePage/stationDetail/stationDetail.scss */ "./src/views/waterHomePage/stationDetail/stationDetail.scss");
/* harmony import */ var _views_waterHomePage_stationDetail_stationDetail_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_views_waterHomePage_stationDetail_stationDetail_scss__WEBPACK_IMPORTED_MODULE_4__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "lakeMonitorSite",
  props: {
    list: {
      type: Array,
      default: function _default() {}
    },
    time: {
      type: String,
      default: function _default() {}
    },
    timeType: {
      type: String,
      default: function _default() {}
    },
    title: {
      type: String,
      default: function _default() {}
    }
  },

  /* watch: {
     time: function (newD, oldD) {
       this.getData()
     },
     id: function (newD, oldD) {
       this.getData()
     }
   },*/
  data: function data() {
    return {
      upList: [],
      show: false
    };
  },
  methods: {
    toStation: function toStation(item) {
      this.$router.push({
        name: "stationDetail",
        query: {
          // mc: item.siteName,
          type: item.mode === '手工' ? '月' : '时',
          // level: item.sectionType,
          id: item.siteId,
          time: this.time // listType: item.type,
          // zdType: item.monitoringMethod,

        }
      }).catch(function () {});
    },
    replaceString: function replaceString(value) {
      if (value) {
        return value.replace("类", "");
      } else {
        return "";
      }
    },
    judgeLevel: function judgeLevel(value) {
      return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["imgJugdeLevel"])(value);
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
    onChangeShow: function onChangeShow() {
      this.show = !this.show;
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/surroundPollution.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/components/surroundPollution.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_water_envir__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/water_envir */ "./src/api/water_envir.js");
/* harmony import */ var _views_waterHomePage_stationDetail_stationDetail_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/views/waterHomePage/stationDetail/stationDetail.scss */ "./src/views/waterHomePage/stationDetail/stationDetail.scss");
/* harmony import */ var _views_waterHomePage_stationDetail_stationDetail_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_views_waterHomePage_stationDetail_stationDetail_scss__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
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
  name: "surroundPollution",
  props: {
    id: {
      type: String,
      default: function _default() {}
    },
    dataObj: {
      type: Object,
      default: function _default() {}
    }
  },
  watch: {
    id: function id(newD, oldD) {
      this.getData();
    }
  },
  data: function data() {
    return {
      waterPollutinNum: 0,
      show: false,
      list: []
    };
  },
  methods: {
    getData: function getData() {
      var _this = this;

      var info = {
        sectionId: this.id
      };
      Object(_api_water_envir__WEBPACK_IMPORTED_MODULE_0__["upstreamPollution"])(info).then(function (res) {
        if (res.code == 200) {
          _this.waterPollutinNum = res.data.length;
          _this.list = res.data;
        }
      });
    },
    onChangeShow: function onChangeShow() {
      this.show = !this.show;
    },
    toCompany: function toCompany(item) {
      this.$router.push({
        name: "companyDetail",
        query: {
          id: item.id,
          type: 'red'
        }
      });
    },
    toWaterLocation: function toWaterLocation() {
      this.$router.push({
        name: "surroundMap",
        query: {
          siteId: this.id,
          longitude: this.dataObj.longitude,
          latitude: this.dataObj.latitude
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/upOutlet.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/components/upOutlet.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_waterHomePage_stationDetail_stationDetail_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/views/waterHomePage/stationDetail/stationDetail.scss */ "./src/views/waterHomePage/stationDetail/stationDetail.scss");
/* harmony import */ var _views_waterHomePage_stationDetail_stationDetail_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_waterHomePage_stationDetail_stationDetail_scss__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
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
  name: "upOutlet",
  props: {
    list: {
      type: Array,
      default: function _default() {}
    },
    timeType: {
      type: String,
      default: function _default() {}
    },
    time: {
      type: String,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      show: false
    };
  },
  methods: {
    onChangeShow: function onChangeShow() {
      this.show = !this.show;
    },
    onDetail: function onDetail(data) {
      this.$router.push({
        name: "upstreamOutletDetail",
        query: {
          id: data.id,
          name: data.locationInfo
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/upPurPlant.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/components/upPurPlant.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_waterHomePage_stationDetail_stationDetail_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/views/waterHomePage/stationDetail/stationDetail.scss */ "./src/views/waterHomePage/stationDetail/stationDetail.scss");
/* harmony import */ var _views_waterHomePage_stationDetail_stationDetail_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_waterHomePage_stationDetail_stationDetail_scss__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
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
  name: "upPurPlant",
  props: {
    list: {
      type: Array,
      default: function _default() {}
    },
    timeType: {
      type: String,
      default: function _default() {}
    },
    time: {
      type: String,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      show: false
    };
  },
  methods: {
    onChangeShow: function onChangeShow() {
      this.show = !this.show;
    },
    toJhc: function toJhc(item) {
      this.$router.push({
        name: "purPlantDetail",
        query: {
          // timeType: this.timeType,
          name: item.enterpriseName,
          id: item.plantId // time: this.time,
          // type: item.type,

        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/upReservoir.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/components/upReservoir.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_waterHomePage_stationDetail_stationDetail_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/views/waterHomePage/stationDetail/stationDetail.scss */ "./src/views/waterHomePage/stationDetail/stationDetail.scss");
/* harmony import */ var _views_waterHomePage_stationDetail_stationDetail_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_waterHomePage_stationDetail_stationDetail_scss__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
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
  name: "upReservoir",
  props: {
    list: {
      type: Array,
      default: function _default() {}
    },
    timeType: {
      type: String,
      default: function _default() {}
    },
    time: {
      type: String,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      show: false
    };
  },
  methods: {
    toJhc: function toJhc(item) {},
    onChangeShow: function onChangeShow() {
      this.show = !this.show;
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/upRiver.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/components/upRiver.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: "upRiver",
  data: function data() {
    return {
      upList: []
    };
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/upSite.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/components/upSite.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _views_waterHomePage_stationDetail_stationDetail_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/views/waterHomePage/stationDetail/stationDetail.scss */ "./src/views/waterHomePage/stationDetail/stationDetail.scss");
/* harmony import */ var _views_waterHomePage_stationDetail_stationDetail_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_views_waterHomePage_stationDetail_stationDetail_scss__WEBPACK_IMPORTED_MODULE_3__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "upSite",
  props: {
    list: {
      type: Array,
      default: function _default() {}
    },
    time: {
      type: String,
      default: function _default() {}
    },
    timeType: {
      type: String,
      default: function _default() {}
    }
  },

  /* watch: {
     time: function (newD, oldD) {
       this.getData()
     },
     id: function (newD, oldD) {
       this.getData()
     }
   },*/
  data: function data() {
    return {
      show: false,
      isFirst: true
    };
  },
  mounted: function mounted() {
    var _this = this;

    setTimeout(function () {
      if (_this.isFirst === true) {
        console.log(_this.isFirst);

        _this.$nextTick(function () {
          var isArrow = [];
          console.log(_this.list);

          for (var i = 0; i < _this.list.length; i++) {
            isArrow.push(_this.list[i].isShow);
          }

          if (isArrow.indexOf(true) > -1) {
            _this.show = true;
          } else {
            _this.show = false;
          }
        });

        _this.isFirst = false;
      }
    }, 2000);
  },
  methods: {
    toStation: function toStation(item) {
      this.$router.push({
        name: "stationDetail",
        query: {
          // mc: item.siteName,
          type: this.timeType,
          // level: item.sectionType,
          id: item.siteId,
          time: this.time // listType: item.type,
          // zdType: item.monitoringMethod,

        }
      }).catch(function () {});
    },
    replaceString: function replaceString(value) {
      if (value) {
        return value.replace("类", "");
      } else {
        return "";
      }
    },
    judgeLevel: function judgeLevel(value) {
      return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["imgJugdeLevel"])(value);
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
    onChangeShow: function onChangeShow() {
      this.show = !this.show;
    },
    onChangeShowFactor: function onChangeShowFactor(item, i) {
      if (item.isShow === true) {
        this.list[i].isShow = false;
      } else {
        this.list[i].isShow = true;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/waterProject.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/components/waterProject.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_waterHomePage_stationDetail_stationDetail_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/views/waterHomePage/stationDetail/stationDetail.scss */ "./src/views/waterHomePage/stationDetail/stationDetail.scss");
/* harmony import */ var _views_waterHomePage_stationDetail_stationDetail_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_waterHomePage_stationDetail_stationDetail_scss__WEBPACK_IMPORTED_MODULE_0__);
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
  name: "waterProject",
  data: function data() {
    return {
      upList: []
    };
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/weatherStation.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/components/weatherStation.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_waterHomePage_stationDetail_stationDetail_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/views/waterHomePage/stationDetail/stationDetail.scss */ "./src/views/waterHomePage/stationDetail/stationDetail.scss");
/* harmony import */ var _views_waterHomePage_stationDetail_stationDetail_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_views_waterHomePage_stationDetail_stationDetail_scss__WEBPACK_IMPORTED_MODULE_0__);
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
  name: "weatherStation",
  data: function data() {
    return {
      upList: []
    };
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _views_waterHomePage_examineSiteList_components_timeSelect_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/views/waterHomePage/examineSiteList/components/timeSelect.vue */ "./src/views/waterHomePage/examineSiteList/components/timeSelect.vue");
/* harmony import */ var _views_waterHomePage_stationDetail_components_statusItem_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/views/waterHomePage/stationDetail/components/statusItem.vue */ "./src/views/waterHomePage/stationDetail/components/statusItem.vue");
/* harmony import */ var _views_waterHomePage_stationDetail_components_monitorItem_vue__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/views/waterHomePage/stationDetail/components/monitorItem.vue */ "./src/views/waterHomePage/stationDetail/components/monitorItem.vue");
/* harmony import */ var _views_waterHomePage_stationDetail_components_lakeMonitorSite_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/views/waterHomePage/stationDetail/components/lakeMonitorSite.vue */ "./src/views/waterHomePage/stationDetail/components/lakeMonitorSite.vue");
/* harmony import */ var _views_waterHomePage_stationDetail_components_upSite_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/views/waterHomePage/stationDetail/components/upSite.vue */ "./src/views/waterHomePage/stationDetail/components/upSite.vue");
/* harmony import */ var _views_waterHomePage_stationDetail_components_upPurPlant_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/views/waterHomePage/stationDetail/components/upPurPlant.vue */ "./src/views/waterHomePage/stationDetail/components/upPurPlant.vue");
/* harmony import */ var _views_waterHomePage_stationDetail_components_upRiver_vue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/views/waterHomePage/stationDetail/components/upRiver.vue */ "./src/views/waterHomePage/stationDetail/components/upRiver.vue");
/* harmony import */ var _views_waterHomePage_stationDetail_components_upReservoir_vue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/views/waterHomePage/stationDetail/components/upReservoir.vue */ "./src/views/waterHomePage/stationDetail/components/upReservoir.vue");
/* harmony import */ var _views_waterHomePage_stationDetail_components_waterProject_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/views/waterHomePage/stationDetail/components/waterProject.vue */ "./src/views/waterHomePage/stationDetail/components/waterProject.vue");
/* harmony import */ var _views_waterHomePage_stationDetail_components_weatherStation_vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/views/waterHomePage/stationDetail/components/weatherStation.vue */ "./src/views/waterHomePage/stationDetail/components/weatherStation.vue");
/* harmony import */ var _views_waterHomePage_stationDetail_components_upOutlet_vue__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/views/waterHomePage/stationDetail/components/upOutlet.vue */ "./src/views/waterHomePage/stationDetail/components/upOutlet.vue");
/* harmony import */ var _views_waterHomePage_stationDetail_components_surroundPollution_vue__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/views/waterHomePage/stationDetail/components/surroundPollution.vue */ "./src/views/waterHomePage/stationDetail/components/surroundPollution.vue");
/* harmony import */ var _api_water_envir__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/api/water_envir */ "./src/api/water_envir.js");






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    lakeMonitorSite: _views_waterHomePage_stationDetail_components_lakeMonitorSite_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    timeSelect: _views_waterHomePage_examineSiteList_components_timeSelect_vue__WEBPACK_IMPORTED_MODULE_6__["default"],
    statusItem: _views_waterHomePage_stationDetail_components_statusItem_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    monitorItem: _views_waterHomePage_stationDetail_components_monitorItem_vue__WEBPACK_IMPORTED_MODULE_8__["default"],
    upSite: _views_waterHomePage_stationDetail_components_upSite_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    upPurPlant: _views_waterHomePage_stationDetail_components_upPurPlant_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    upRiver: _views_waterHomePage_stationDetail_components_upRiver_vue__WEBPACK_IMPORTED_MODULE_12__["default"],
    upOutlet: _views_waterHomePage_stationDetail_components_upOutlet_vue__WEBPACK_IMPORTED_MODULE_16__["default"],
    surroundPollution: _views_waterHomePage_stationDetail_components_surroundPollution_vue__WEBPACK_IMPORTED_MODULE_17__["default"],
    upReservoir: _views_waterHomePage_stationDetail_components_upReservoir_vue__WEBPACK_IMPORTED_MODULE_13__["default"],
    waterProject: _views_waterHomePage_stationDetail_components_waterProject_vue__WEBPACK_IMPORTED_MODULE_14__["default"],
    weatherStation: _views_waterHomePage_stationDetail_components_weatherStation_vue__WEBPACK_IMPORTED_MODULE_15__["default"]
  },
  data: function data() {
    return {
      title: "",
      active: 0,
      active1: 0,
      timeType: "",
      flagType: "",
      level: "",
      tabPath: "/hourValue",
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
        val: "时",
        path: "/hourValue"
      }, {
        label: "日值",
        path: "/dayValue",
        val: "日"
      }, {
        label: "月值",
        val: "月",
        path: "/monthValue"
      }, {
        label: "年值",
        path: "/yearValue",
        val: "年"
      }],
      id: '',
      stationName: "",
      nowTime: "",
      listType: "",
      dataobj: {},
      siteDetailInfo: {},
      queryParams: {},
      upList: [],
      lakeMonitorList: [],
      upJhcList: [],
      upReservoirList: [],
      upSewageList: []
    };
  },
  mounted: function mounted() {
    this.initData();
  },
  methods: {
    initData: function initData() {
      var _this = this;

      return Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var tempD, tempGsType;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _this.id = _this.$route.query.id;
                _this.timeType = _this.$route.query.type; //时、日、月、年

                _this.flagType = _this.$route.query.flagType; //为了区分饮用水源地断面

                _this.nowTime = _this.$route.query.time;
                console.log(_this.nowTime);
                _context.next = 7;
                return _this.querySiteDes();

              case 7:
                tempD = _context.sent;
                _this.level = tempD.ctrlLevel ? tempD.ctrlLevel.substr(0, 1) : '';
                tempGsType = tempD.ctrlLevel;
                console.log(tempGsType);

                if (tempGsType) {
                  if (tempGsType === "国控" || tempD.monitorType === "自动") {
                    _this.arr = _this.countryTab;
                  } else {
                    _this.arr = _this.provinceTab;
                  }
                } else {
                  if (tempD.monitorType === "手工") {
                    _this.arr = _this.provinceTab;
                  } else {
                    _this.arr = _this.countryTab;
                  }
                }

                _this.stationName = tempD.siteName;
                _this.listType = tempD.siteType; //断面/湖库等

                _this.title = tempD.siteName;
                _this.queryParams = {
                  type: _this.listType,
                  dateTime: _this.timeType === "时" ? _this.nowTime + ":00" : _this.nowTime,
                  siteId: _this.id,
                  timeType: _this.timeType
                };

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    //查询站点信息详情，如站点id、国省控、手工、自动等
    querySiteDes: function querySiteDes() {
      var _this2 = this;

      console.log(this.id, this.timeType);
      var tempFlag = '';

      if (this.id == 2 && this.timeType === '时') {
        //滇池草海
        console.log('滇池草海');
        tempFlag = 0;
      } else if (this.id == 2 && this.timeType === '月') {
        //冷水河
        console.log('冷水河');
        tempFlag = 1;
      } else {
        tempFlag = '';
      }

      return new Promise(function (resolve) {
        try {
          Object(_api_water_envir__WEBPACK_IMPORTED_MODULE_18__["stationDes"])({
            siteId: _this2.id,
            type: _this2.id === '233' ? '湖库' : _this2.flagType,
            flag: tempFlag
          }).then(function (res) {
            _this2.siteDetailInfo = res.data; //

            resolve(res.data);
          });
        } catch (e) {
          resolve([]);
        }
      });
    },
    queryAll: function queryAll() {
      var _this3 = this;

      return Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(_this3.listType === '')) {
                  _context2.next = 3;
                  break;
                }

                _context2.next = 3;
                return _this3.initData();

              case 3:
                _this3.queryParams = {
                  type: _this3.listType,
                  dateTime: _this3.timeType === "时" ? _this3.nowTime + ":00" : _this3.nowTime,
                  siteId: _this3.id,
                  timeType: _this3.timeType
                };

                _this3.loadData();

                if (_this3.listType === '湖库') {
                  _this3.queryLakeMonitor();
                } else {
                  _this3.queryUpSite();

                  _this3.queryUpPurPlant();

                  _this3.queryReservoir();

                  _this3.querySewage();
                }

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    loadData: function loadData() {
      var _this4 = this;

      Object(_api_water_envir__WEBPACK_IMPORTED_MODULE_18__["stationInfo"])(this.queryParams).then(function (res) {
        if (res.code == 200) {
          _this4.dataobj = res.data;
        }
      });
    },
    //上游监测断面
    queryUpSite: function queryUpSite() {
      var _this5 = this;

      Object(_api_water_envir__WEBPACK_IMPORTED_MODULE_18__["getUpList"])({
        sectionId: this.id,
        dataTime: this.timeType === "时" ? this.nowTime + ":00" : this.nowTime,
        dataType: this.timeType
      }).then(function (res) {
        if (res.code == 200) {
          //断面监测因子超标默认展开
          _this5.upList = res.data.map(function (item) {
            var tempShow = false;

            for (var i in item.factorList) {
              if (item.factorList[i].overStandard === true) {
                tempShow = true;
              }
            }

            return Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item), {}, {
              isShow: tempShow
            });
          });
        }
      });
    },
    //上游水库
    queryReservoir: function queryReservoir() {
      var _this6 = this;

      Object(_api_water_envir__WEBPACK_IMPORTED_MODULE_18__["upStreamWater"])({
        sectionId: this.id
      }).then(function (res) {
        if (res.code == 200) {
          _this6.upReservoirList = res.data;
        }
      });
    },
    //上游排口
    querySewage: function querySewage() {
      var _this7 = this;

      Object(_api_water_envir__WEBPACK_IMPORTED_MODULE_18__["upstreamSewage"])({
        sectionId: this.id
      }).then(function (res) {
        if (res.code == 200) {
          _this7.upSewageList = res.data;
        }
      });
    },
    //上游水质净化厂
    queryUpPurPlant: function queryUpPurPlant() {
      var _this8 = this;

      Object(_api_water_envir__WEBPACK_IMPORTED_MODULE_18__["purificationPlant"])(this.queryParams).then(function (res) {
        if (res.code == 200) {
          _this8.upJhcList = res.data;
        }
      });
    },
    queryLakeMonitor: function queryLakeMonitor() {
      var _this9 = this;

      Object(_api_water_envir__WEBPACK_IMPORTED_MODULE_18__["lakeSiteList"])({
        dataTime: this.timeType === "时" ? this.nowTime + ":00" : this.nowTime,
        dataType: this.timeType,
        waterBodyName: this.title
      }).then(function (res) {
        _this9.lakeMonitorList = res.data;
      });
    },
    tabChange: function tabChange(data) {
      this.timeType = data.val;
      this.queryAll();
    },
    timeFn: function timeFn(data) {
      this.nowTime = data.toString();
      this.queryAll();
    },
    toMap: function toMap() {
      console.log(this.siteDetailInfo);
      this.$router.push({
        name: 'airLocationMap',
        query: Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.siteDetailInfo), {}, {
          siteInitType: 'water'
        })
      });
    }
  },
  watch: {
    "$route.query.id": function $routeQueryId(val, old) {
      if (val != old) {
        this.listType = '';
        this.initData();
        this.queryAll();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/lakeMonitorSite.vue?vue&type=template&id=266bfff2&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/components/lakeMonitorSite.vue?vue&type=template&id=266bfff2&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "card-list" },
    [
      _c("div", { staticClass: "list-top", on: { click: _vm.onChangeShow } }, [
        _c("div", { staticClass: "list-title" }, [
          _vm._v(_vm._s(_vm.title) + "监测断面"),
        ]),
        _c("div", { staticClass: "list-length" }, [
          _vm._v(_vm._s(_vm.list.length) + "个"),
        ]),
        _vm.list.length > 0
          ? _c(
              "div",
              { staticClass: "list-right" },
              [
                _vm.show
                  ? _c("van-icon", {
                      attrs: {
                        name: "arrow-down",
                        color: "#a6a6a6",
                        size: "12",
                      },
                    })
                  : _c("van-icon", {
                      attrs: { name: "arrow-up", color: "#a6a6a6", size: "12" },
                    }),
              ],
              1
            )
          : _vm._e(),
      ]),
      _vm.show
        ? _vm._l(_vm.list, function (item) {
            return _c(
              "div",
              {
                staticClass: "list-info",
                staticStyle: { height: "auto" },
                style: {
                  background: item.zt == "超" ? "rgba(254, 79, 2, 0.03)" : "",
                },
                on: {
                  click: function ($event) {
                    return _vm.toStation(item)
                  },
                },
              },
              [
                _c("div", { staticClass: "list-item" }, [
                  _c("div", { staticClass: "list-mc" }, [
                    _vm._v(_vm._s(item.name)),
                  ]),
                  _c("div", { staticClass: "list-xz" }, [
                    _c(
                      "div",
                      {
                        staticClass: "xz-words",
                        style: {
                          backgroundImage:
                            "url(" +
                            _vm.judgeLevel(_vm.replaceString(item.level)) +
                            ")",
                        },
                      },
                      [_vm._v(_vm._s(_vm.replaceString(item.level) || "-"))]
                    ),
                  ]),
                  _c("div", { staticClass: "list-words" }, [_vm._v("目标")]),
                  _c("div", { staticClass: "list-mb" }, [
                    _c(
                      "div",
                      {
                        class: [
                          "mb-words",
                          _vm.judgeTargetLevel(_vm.replaceString(item.target)),
                        ],
                      },
                      [_vm._v(_vm._s(_vm.replaceString(item.target) || "-"))]
                    ),
                  ]),
                ]),
              ]
            )
          })
        : _vm._e(),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/surroundPollution.vue?vue&type=template&id=e54053be&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/components/surroundPollution.vue?vue&type=template&id=e54053be&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "card-list" },
    [
      _c("div", { staticClass: "list-top", on: { click: _vm.onChangeShow } }, [
        _c("div", { staticClass: "list-title" }, [_vm._v("周边涉水污染源")]),
        _c("div", { staticClass: "list-length" }, [
          _vm._v(_vm._s(_vm.waterPollutinNum) + "家"),
        ]),
        _vm.list.length > 0
          ? _c(
              "div",
              { staticClass: "list-right" },
              [
                _vm.show
                  ? _c("van-icon", {
                      attrs: {
                        name: "arrow-down",
                        color: "#a6a6a6",
                        size: "12",
                      },
                    })
                  : _c("van-icon", {
                      attrs: { name: "arrow-up", color: "#a6a6a6", size: "12" },
                    }),
              ],
              1
            )
          : _vm._e(),
      ]),
      _vm._l(_vm.list, function (item) {
        return _vm.show
          ? _c(
              "div",
              {
                staticClass: "list-content",
                on: {
                  click: function ($event) {
                    return _vm.toCompany(item)
                  },
                },
              },
              [
                _c("div", { staticClass: "content-left" }, [
                  _c("div", { staticClass: "left-name" }, [
                    _vm._v(_vm._s(item.name)),
                  ]),
                ]),
                _vm._m(0, true),
              ]
            )
          : _vm._e()
      }),
    ],
    2
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-right" }, [
      _vm._v("查看"),
      _c("img", { attrs: { src: __webpack_require__(/*! @/assets/toright.png */ "./src/assets/toright.png"), alt: "" } }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/upOutlet.vue?vue&type=template&id=025c5003&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/components/upOutlet.vue?vue&type=template&id=025c5003&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "card-list" },
    [
      _c("div", { staticClass: "list-top", on: { click: _vm.onChangeShow } }, [
        _c("div", { staticClass: "list-title" }, [_vm._v("上游排污口")]),
        _c("div", { staticClass: "list-length" }, [
          _vm._v(_vm._s(_vm.list.length) + "个"),
        ]),
        _vm.list.length > 0
          ? _c(
              "div",
              { staticClass: "list-right" },
              [
                _vm.show
                  ? _c("van-icon", {
                      attrs: {
                        name: "arrow-down",
                        color: "#a6a6a6",
                        size: "12",
                      },
                    })
                  : _c("van-icon", {
                      attrs: { name: "arrow-up", color: "#a6a6a6", size: "12" },
                    }),
              ],
              1
            )
          : _vm._e(),
      ]),
      _vm._l(_vm.list, function (item) {
        return _vm.show
          ? _c(
              "div",
              {
                staticClass: "list-content",
                on: {
                  click: function ($event) {
                    return _vm.onDetail(item)
                  },
                },
              },
              [
                _c("div", { staticClass: "content-left" }, [
                  _c("div", { staticClass: "left-name" }, [
                    _vm._v(_vm._s(item.dischargeMethod)),
                  ]),
                  _c("div", { staticClass: "left-words" }, [
                    _vm._v(_vm._s(item.locationInfo)),
                  ]),
                ]),
                _vm._m(0, true),
              ]
            )
          : _vm._e()
      }),
    ],
    2
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-right" }, [
      _vm._v("查看"),
      _c("img", { attrs: { src: __webpack_require__(/*! @/assets/toright.png */ "./src/assets/toright.png"), alt: "" } }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/upPurPlant.vue?vue&type=template&id=1b36cf54&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/components/upPurPlant.vue?vue&type=template&id=1b36cf54&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "card-list" },
    [
      _c("div", { staticClass: "list-top", on: { click: _vm.onChangeShow } }, [
        _c("div", { staticClass: "list-title" }, [_vm._v("上游水质净化厂")]),
        _c("div", { staticClass: "list-length" }, [
          _vm._v(_vm._s(_vm.list.length) + "家"),
        ]),
        _vm.list.length > 0
          ? _c(
              "div",
              { staticClass: "list-right" },
              [
                _vm.show
                  ? _c("van-icon", {
                      attrs: {
                        name: "arrow-down",
                        color: "#a6a6a6",
                        size: "12",
                      },
                    })
                  : _c("van-icon", {
                      attrs: { name: "arrow-up", color: "#a6a6a6", size: "12" },
                    }),
              ],
              1
            )
          : _vm._e(),
      ]),
      _vm._l(_vm.list, function (item) {
        return _vm.show
          ? _c(
              "div",
              {
                staticClass: "list-content",
                on: {
                  click: function ($event) {
                    return _vm.toJhc(item)
                  },
                },
              },
              [
                _c("div", { staticClass: "content-left" }, [
                  _c("div", { staticClass: "left-name" }, [
                    _vm._v(_vm._s(item.enterpriseName)),
                  ]),
                  _c("div", { staticClass: "left-words" }, [
                    _vm._v("与国考断面直线距离：" + _vm._s(item.distance)),
                  ]),
                ]),
                _vm._m(0, true),
              ]
            )
          : _vm._e()
      }),
    ],
    2
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "content-right" }, [
      _vm._v("查看"),
      _c("img", { attrs: { src: __webpack_require__(/*! @/assets/toright.png */ "./src/assets/toright.png"), alt: "" } }),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/upReservoir.vue?vue&type=template&id=714b8ae9&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/components/upReservoir.vue?vue&type=template&id=714b8ae9&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "card-list" },
    [
      _c("div", { staticClass: "list-top", on: { click: _vm.onChangeShow } }, [
        _c("div", { staticClass: "list-title" }, [_vm._v("上游水库")]),
        _c("div", { staticClass: "list-length" }, [
          _vm._v(_vm._s(_vm.list.length) + "个"),
        ]),
        _vm.list.length > 0
          ? _c(
              "div",
              { staticClass: "list-right" },
              [
                _vm.show
                  ? _c("van-icon", {
                      attrs: {
                        name: "arrow-down",
                        color: "#a6a6a6",
                        size: "12",
                      },
                    })
                  : _c("van-icon", {
                      attrs: { name: "arrow-up", color: "#a6a6a6", size: "12" },
                    }),
              ],
              1
            )
          : _vm._e(),
      ]),
      _vm._l(_vm.list, function (item) {
        return _vm.show
          ? _c(
              "div",
              {
                staticClass: "list-content",
                on: {
                  click: function ($event) {
                    return _vm.toJhc(item)
                  },
                },
              },
              [
                _c("div", { staticClass: "content-left" }, [
                  _c("div", { staticClass: "left-name" }, [
                    _vm._v(_vm._s(item.bodyName) + "(库容："),
                    _c("span", [_vm._v("-")]),
                    _vm._v("亿m³)"),
                  ]),
                  _c("div", { staticClass: "left-words" }, [
                    _vm._v("月补水量：" + _vm._s(item.distance)),
                  ]),
                ]),
              ]
            )
          : _vm._e()
      }),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/upRiver.vue?vue&type=template&id=c04321f4&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/components/upRiver.vue?vue&type=template&id=c04321f4&scoped=true& ***!
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
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-list" }, [
      _c("div", { staticClass: "list-top" }, [
        _c("div", { staticClass: "list-title" }, [_vm._v("上游支流")]),
        _c("div", { staticClass: "list-length" }, [_vm._v("0个")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/upSite.vue?vue&type=template&id=a8db4c86&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/components/upSite.vue?vue&type=template&id=a8db4c86&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "card-list" },
    [
      _c("div", { staticClass: "list-top", on: { click: _vm.onChangeShow } }, [
        _c("div", { staticClass: "list-title" }, [_vm._v("上游监测断面")]),
        _c("div", { staticClass: "list-length" }, [
          _vm._v(_vm._s(_vm.list.length) + "个"),
        ]),
        _vm.list.length > 0
          ? _c(
              "div",
              { staticClass: "list-right" },
              [
                _vm.show
                  ? _c("van-icon", {
                      attrs: {
                        name: "arrow-down",
                        color: "#a6a6a6",
                        size: "12",
                      },
                    })
                  : _c("van-icon", {
                      attrs: { name: "arrow-up", color: "#a6a6a6", size: "12" },
                    }),
              ],
              1
            )
          : _vm._e(),
      ]),
      _vm.show
        ? _vm._l(_vm.list, function (item, i) {
            return _c(
              "div",
              {
                staticClass: "list-info",
                staticStyle: { height: "auto" },
                style: {
                  background: item.zt == "超" ? "rgba(254, 79, 2, 0.03)" : "",
                },
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "list-item",
                    on: {
                      click: function ($event) {
                        return _vm.onChangeShowFactor(item, i)
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
                            )
                          ),
                        ]
                      ),
                    ]),
                    _c("div", { staticClass: "list-words" }, [_vm._v("目标")]),
                    _c("div", { staticClass: "list-mb" }, [
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
                              _vm.replaceString(item.waterQualityTarget) || "-"
                            )
                          ),
                        ]
                      ),
                    ]),
                    item.isShow === true
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
                item.isShow === true
                  ? [
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
                                return _vm.toStation(item)
                              },
                            },
                          },
                          [_vm._v("点击查看详情")]
                        ),
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
                                      _c("span", [
                                        _vm._v(
                                          _vm._s(itemC.value) +
                                            _vm._s(itemC.unit) +
                                            " " +
                                            _vm._s(itemC.multiplier) +
                                            "倍 "
                                        ),
                                      ]),
                                    ]
                                  ),
                            ]
                          }),
                        ],
                        2
                      ),
                    ]
                  : _vm._e(),
              ],
              2
            )
          })
        : _vm._e(),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/waterProject.vue?vue&type=template&id=0c9c0606&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/components/waterProject.vue?vue&type=template&id=0c9c0606&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-list" }, [
      _c("div", { staticClass: "list-top" }, [
        _c("div", { staticClass: "list-title" }, [_vm._v("调水工程")]),
        _c("div", { staticClass: "list-length" }, [_vm._v("0个")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/weatherStation.vue?vue&type=template&id=49c31c4a&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/components/weatherStation.vue?vue&type=template&id=49c31c4a&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm._m(0)
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-list" }, [
      _c("div", { staticClass: "list-top" }, [
        _c("div", { staticClass: "list-title" }, [_vm._v("周边气象站点")]),
        _c("div", { staticClass: "list-length" }, [_vm._v("0个")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/index.vue?vue&type=template&id=38cc5874&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/index.vue?vue&type=template&id=38cc5874&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
            attrs: { option: _vm.timeType, time: _vm.nowTime },
            on: { getTime: _vm.timeFn },
          }),
          _c(
            "div",
            { staticClass: "card-content-detail" },
            [
              _c("statusItem", { attrs: { dataObj: _vm.dataobj } }),
              _c("monitorItem", {
                attrs: {
                  id: _vm.id,
                  time: _vm.nowTime,
                  timeType: _vm.timeType,
                  listType: _vm.listType,
                  stationName: _vm.stationName,
                },
              }),
              _vm._m(0),
              _vm.listType === "湖库"
                ? _c("lakeMonitorSite", {
                    attrs: {
                      list: _vm.lakeMonitorList,
                      time: _vm.nowTime,
                      timeType: _vm.timeType,
                      title: _vm.title,
                    },
                  })
                : [
                    _c("upSite", {
                      attrs: {
                        list: _vm.upList,
                        time: _vm.nowTime,
                        timeType: _vm.timeType,
                      },
                    }),
                    _c("upRiver"),
                    _c("upOutlet", {
                      attrs: {
                        list: _vm.upSewageList,
                        time: _vm.nowTime,
                        timeType: _vm.timeType,
                      },
                    }),
                    _c("upPurPlant", {
                      attrs: {
                        list: _vm.upJhcList,
                        time: _vm.nowTime,
                        timeType: _vm.timeType,
                      },
                    }),
                    _c("upReservoir", {
                      attrs: {
                        list: _vm.upReservoirList,
                        time: _vm.nowTime,
                        timeType: _vm.timeType,
                      },
                    }),
                    _c("waterProject"),
                    _c("weatherStation"),
                    _c("surroundPollution", {
                      attrs: { id: _vm.id, dataObj: _vm.siteDetailInfo },
                    }),
                  ],
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
    return _c("div", { staticClass: "site-analysis" }, [
      _c("img", {
        staticStyle: { "padding-right": "10px" },
        attrs: { src: __webpack_require__(/*! @/assets/site-analysis-icon.png */ "./src/assets/site-analysis-icon.png"), width: "24" },
      }),
      _vm._v(" 生态环境大数据分析结果 "),
    ])
  },
]
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/upSite.vue?vue&type=style&index=0&id=a8db4c86&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/components/upSite.vue?vue&type=style&index=0&id=a8db4c86&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".site-info-factor[data-v-a8db4c86] {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 4px 9px;\n  padding: 6px 12px 2px;\n  background: #e1e9fc;\n  border-radius: 10px;\n  font-size: 12px;\n}\n.site-info-factor .site-info-factor-item[data-v-a8db4c86] {\n  width: 50%;\n  padding-bottom: 4px;\n}\n.site-info-factor .site-info-factor-item span[data-v-a8db4c86] {\n  color: #121236;\n}\n.site-info-name[data-v-a8db4c86] {\n  padding: 4px 15px;\n  font-size: 12px;\n}\n.site-info-name span[data-v-a8db4c86] {\n  color: #121236;\n}\n.site-info-name .link[data-v-a8db4c86] {\n  color: #5475f8;\n  text-decoration: underline;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/index.vue?vue&type=style&index=0&id=38cc5874&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/index.vue?vue&type=style&index=0&id=38cc5874&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".stationDetail[data-v-38cc5874] {\n  height: 100vh;\n  width: 100%;\n}\n.stationDetail .card-tab[data-v-38cc5874] {\n  width: 100%;\n  height: 50px;\n  background: #fff;\n}\n.stationDetail .card-tab ul[data-v-38cc5874] {\n  width: calc(100% - 60px);\n  margin: 0 30px;\n  height: 100%;\n  display: flex;\n}\n.stationDetail .card-tab ul li[data-v-38cc5874] {\n  flex: 1;\n  float: left;\n  line-height: 30px;\n  text-align: center;\n  font-size: 14px;\n  color: rgba(18, 18, 54, 0.5);\n  margin: 12px 10px 0;\n}\n.stationDetail .card-tab ul .active[data-v-38cc5874] {\n  height: 30px;\n  opacity: 1;\n  border-radius: 28px;\n  background: linear-gradient(225deg, #4975ec 0%, #97b3ff 100%);\n  box-shadow: 0px 2px 10px rgba(84, 125, 239, 0.4);\n  color: #fff;\n}\n.stationDetail .content-wrapper[data-v-38cc5874] {\n  height: calc(100vh - 104px);\n  width: 100%;\n}\n.stationDetail .content-wrapper .card-content-detail[data-v-38cc5874] {\n  width: 100%;\n  height: calc(100% - 50px);\n  overflow: auto;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/index.vue?vue&type=style&index=1&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/index.vue?vue&type=style&index=1&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @/assets/lxbg.png */ "./src/assets/lxbg.png");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! @/assets/site-analysis.png */ "./src/assets/site-analysis.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, ".stationDetail .van-nav-bar__text {\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 14px;\n  font-weight: 500;\n}\n.stationDetail .van-search__content--round {\n  background: rgba(18, 18, 54, 0.03);\n}\n.stationDetail .van-nav-bar__right {\n  font-size: 12px;\n  font-weight: 500;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: rgba(18, 18, 54, 0.5);\n}\n.stationDetail .zdlx {\n  width: 20px;\n  height: 20px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-size: 12px;\n  font-weight: 400;\n  letter-spacing: 0px;\n  text-align: center;\n  line-height: 20px;\n  color: white;\n  float: left;\n  margin-right: 4px;\n}\n.site-analysis {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 9px 0;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: cover;\n  color: #5475f8;\n  font-size: 16px;\n  font-weight: bold;\n}\n.warning-box {\n  margin: 0px 8px 7px;\n  padding: 6px 15px;\n  border-radius: 4px;\n  background: rgba(255, 141, 26, 0.05);\n  border: 1px solid rgba(255, 141, 26, 0.2);\n  font-size: 12px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/upSite.vue?vue&type=style&index=0&id=a8db4c86&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/components/upSite.vue?vue&type=style&index=0&id=a8db4c86&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./upSite.vue?vue&type=style&index=0&id=a8db4c86&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/upSite.vue?vue&type=style&index=0&id=a8db4c86&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("22c2057e", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/index.vue?vue&type=style&index=0&id=38cc5874&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/index.vue?vue&type=style&index=0&id=38cc5874&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=38cc5874&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/index.vue?vue&type=style&index=0&id=38cc5874&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("28d1ccc4", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/index.vue?vue&type=style&index=1&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/stationDetail/index.vue?vue&type=style&index=1&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/index.vue?vue&type=style&index=1&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2b644199", content, false, {"sourceMap":false,"shadowMode":false});
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

/***/ "./src/assets/site-analysis-icon.png":
/*!*******************************************!*\
  !*** ./src/assets/site-analysis-icon.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/toright.png":
/*!********************************!*\
  !*** ./src/assets/toright.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACnSURBVCiRhVJtCsMgDH0J814WeqsVZsHdSlju1YH7MW3Tktj3T3xfiRIumJctotKrHSOorgBQckiaR4YgXs0Odl27ATVRUiljUJ1KDsIAYIjEFTYumWltLrcF1YlHrruBcc+u642YMZrHR7Sr6iSrEdWVzSp3y0F/x+f3g/PDCwYfobwfxKeEA66ocxkASg7irl63+P+atFfVmJctAejzSU8pOYjm/QD4UUteaLTw6wAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/components/lakeMonitorSite.vue":
/*!******************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/components/lakeMonitorSite.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lakeMonitorSite_vue_vue_type_template_id_266bfff2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lakeMonitorSite.vue?vue&type=template&id=266bfff2&scoped=true& */ "./src/views/waterHomePage/stationDetail/components/lakeMonitorSite.vue?vue&type=template&id=266bfff2&scoped=true&");
/* harmony import */ var _lakeMonitorSite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lakeMonitorSite.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/stationDetail/components/lakeMonitorSite.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _lakeMonitorSite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _lakeMonitorSite_vue_vue_type_template_id_266bfff2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _lakeMonitorSite_vue_vue_type_template_id_266bfff2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "266bfff2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/stationDetail/components/lakeMonitorSite.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/components/lakeMonitorSite.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/components/lakeMonitorSite.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lakeMonitorSite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./lakeMonitorSite.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/lakeMonitorSite.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lakeMonitorSite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/components/lakeMonitorSite.vue?vue&type=template&id=266bfff2&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/components/lakeMonitorSite.vue?vue&type=template&id=266bfff2&scoped=true& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lakeMonitorSite_vue_vue_type_template_id_266bfff2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./lakeMonitorSite.vue?vue&type=template&id=266bfff2&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/lakeMonitorSite.vue?vue&type=template&id=266bfff2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lakeMonitorSite_vue_vue_type_template_id_266bfff2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lakeMonitorSite_vue_vue_type_template_id_266bfff2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/components/surroundPollution.vue":
/*!********************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/components/surroundPollution.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _surroundPollution_vue_vue_type_template_id_e54053be_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./surroundPollution.vue?vue&type=template&id=e54053be&scoped=true& */ "./src/views/waterHomePage/stationDetail/components/surroundPollution.vue?vue&type=template&id=e54053be&scoped=true&");
/* harmony import */ var _surroundPollution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./surroundPollution.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/stationDetail/components/surroundPollution.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _surroundPollution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _surroundPollution_vue_vue_type_template_id_e54053be_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _surroundPollution_vue_vue_type_template_id_e54053be_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e54053be",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/stationDetail/components/surroundPollution.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/components/surroundPollution.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/components/surroundPollution.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_surroundPollution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./surroundPollution.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/surroundPollution.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_surroundPollution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/components/surroundPollution.vue?vue&type=template&id=e54053be&scoped=true&":
/*!***************************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/components/surroundPollution.vue?vue&type=template&id=e54053be&scoped=true& ***!
  \***************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_surroundPollution_vue_vue_type_template_id_e54053be_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./surroundPollution.vue?vue&type=template&id=e54053be&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/surroundPollution.vue?vue&type=template&id=e54053be&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_surroundPollution_vue_vue_type_template_id_e54053be_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_surroundPollution_vue_vue_type_template_id_e54053be_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/components/upOutlet.vue":
/*!***********************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/components/upOutlet.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _upOutlet_vue_vue_type_template_id_025c5003_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upOutlet.vue?vue&type=template&id=025c5003&scoped=true& */ "./src/views/waterHomePage/stationDetail/components/upOutlet.vue?vue&type=template&id=025c5003&scoped=true&");
/* harmony import */ var _upOutlet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upOutlet.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/stationDetail/components/upOutlet.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _upOutlet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _upOutlet_vue_vue_type_template_id_025c5003_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _upOutlet_vue_vue_type_template_id_025c5003_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "025c5003",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/stationDetail/components/upOutlet.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/components/upOutlet.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/components/upOutlet.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upOutlet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./upOutlet.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/upOutlet.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upOutlet_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/components/upOutlet.vue?vue&type=template&id=025c5003&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/components/upOutlet.vue?vue&type=template&id=025c5003&scoped=true& ***!
  \******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upOutlet_vue_vue_type_template_id_025c5003_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./upOutlet.vue?vue&type=template&id=025c5003&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/upOutlet.vue?vue&type=template&id=025c5003&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upOutlet_vue_vue_type_template_id_025c5003_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upOutlet_vue_vue_type_template_id_025c5003_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/components/upPurPlant.vue":
/*!*************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/components/upPurPlant.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _upPurPlant_vue_vue_type_template_id_1b36cf54_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upPurPlant.vue?vue&type=template&id=1b36cf54&scoped=true& */ "./src/views/waterHomePage/stationDetail/components/upPurPlant.vue?vue&type=template&id=1b36cf54&scoped=true&");
/* harmony import */ var _upPurPlant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upPurPlant.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/stationDetail/components/upPurPlant.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _upPurPlant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _upPurPlant_vue_vue_type_template_id_1b36cf54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _upPurPlant_vue_vue_type_template_id_1b36cf54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1b36cf54",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/stationDetail/components/upPurPlant.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/components/upPurPlant.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/components/upPurPlant.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upPurPlant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./upPurPlant.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/upPurPlant.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upPurPlant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/components/upPurPlant.vue?vue&type=template&id=1b36cf54&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/components/upPurPlant.vue?vue&type=template&id=1b36cf54&scoped=true& ***!
  \********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upPurPlant_vue_vue_type_template_id_1b36cf54_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./upPurPlant.vue?vue&type=template&id=1b36cf54&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/upPurPlant.vue?vue&type=template&id=1b36cf54&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upPurPlant_vue_vue_type_template_id_1b36cf54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upPurPlant_vue_vue_type_template_id_1b36cf54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/components/upReservoir.vue":
/*!**************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/components/upReservoir.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _upReservoir_vue_vue_type_template_id_714b8ae9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upReservoir.vue?vue&type=template&id=714b8ae9&scoped=true& */ "./src/views/waterHomePage/stationDetail/components/upReservoir.vue?vue&type=template&id=714b8ae9&scoped=true&");
/* harmony import */ var _upReservoir_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upReservoir.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/stationDetail/components/upReservoir.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _upReservoir_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _upReservoir_vue_vue_type_template_id_714b8ae9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _upReservoir_vue_vue_type_template_id_714b8ae9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "714b8ae9",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/stationDetail/components/upReservoir.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/components/upReservoir.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/components/upReservoir.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upReservoir_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./upReservoir.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/upReservoir.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upReservoir_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/components/upReservoir.vue?vue&type=template&id=714b8ae9&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/components/upReservoir.vue?vue&type=template&id=714b8ae9&scoped=true& ***!
  \*********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upReservoir_vue_vue_type_template_id_714b8ae9_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./upReservoir.vue?vue&type=template&id=714b8ae9&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/upReservoir.vue?vue&type=template&id=714b8ae9&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upReservoir_vue_vue_type_template_id_714b8ae9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upReservoir_vue_vue_type_template_id_714b8ae9_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/components/upRiver.vue":
/*!**********************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/components/upRiver.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _upRiver_vue_vue_type_template_id_c04321f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upRiver.vue?vue&type=template&id=c04321f4&scoped=true& */ "./src/views/waterHomePage/stationDetail/components/upRiver.vue?vue&type=template&id=c04321f4&scoped=true&");
/* harmony import */ var _upRiver_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upRiver.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/stationDetail/components/upRiver.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _upRiver_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _upRiver_vue_vue_type_template_id_c04321f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _upRiver_vue_vue_type_template_id_c04321f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c04321f4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/stationDetail/components/upRiver.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/components/upRiver.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/components/upRiver.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upRiver_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./upRiver.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/upRiver.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upRiver_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/components/upRiver.vue?vue&type=template&id=c04321f4&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/components/upRiver.vue?vue&type=template&id=c04321f4&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upRiver_vue_vue_type_template_id_c04321f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./upRiver.vue?vue&type=template&id=c04321f4&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/upRiver.vue?vue&type=template&id=c04321f4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upRiver_vue_vue_type_template_id_c04321f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upRiver_vue_vue_type_template_id_c04321f4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/components/upSite.vue":
/*!*********************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/components/upSite.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _upSite_vue_vue_type_template_id_a8db4c86_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upSite.vue?vue&type=template&id=a8db4c86&scoped=true& */ "./src/views/waterHomePage/stationDetail/components/upSite.vue?vue&type=template&id=a8db4c86&scoped=true&");
/* harmony import */ var _upSite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./upSite.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/stationDetail/components/upSite.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _upSite_vue_vue_type_style_index_0_id_a8db4c86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upSite.vue?vue&type=style&index=0&id=a8db4c86&lang=scss&scoped=true& */ "./src/views/waterHomePage/stationDetail/components/upSite.vue?vue&type=style&index=0&id=a8db4c86&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _upSite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _upSite_vue_vue_type_template_id_a8db4c86_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _upSite_vue_vue_type_template_id_a8db4c86_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a8db4c86",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/stationDetail/components/upSite.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/components/upSite.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/components/upSite.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upSite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./upSite.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/upSite.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upSite_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/components/upSite.vue?vue&type=style&index=0&id=a8db4c86&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/components/upSite.vue?vue&type=style&index=0&id=a8db4c86&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upSite_vue_vue_type_style_index_0_id_a8db4c86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./upSite.vue?vue&type=style&index=0&id=a8db4c86&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/upSite.vue?vue&type=style&index=0&id=a8db4c86&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upSite_vue_vue_type_style_index_0_id_a8db4c86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upSite_vue_vue_type_style_index_0_id_a8db4c86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upSite_vue_vue_type_style_index_0_id_a8db4c86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upSite_vue_vue_type_style_index_0_id_a8db4c86_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/components/upSite.vue?vue&type=template&id=a8db4c86&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/components/upSite.vue?vue&type=template&id=a8db4c86&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upSite_vue_vue_type_template_id_a8db4c86_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./upSite.vue?vue&type=template&id=a8db4c86&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/upSite.vue?vue&type=template&id=a8db4c86&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upSite_vue_vue_type_template_id_a8db4c86_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_upSite_vue_vue_type_template_id_a8db4c86_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/components/waterProject.vue":
/*!***************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/components/waterProject.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _waterProject_vue_vue_type_template_id_0c9c0606_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./waterProject.vue?vue&type=template&id=0c9c0606&scoped=true& */ "./src/views/waterHomePage/stationDetail/components/waterProject.vue?vue&type=template&id=0c9c0606&scoped=true&");
/* harmony import */ var _waterProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./waterProject.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/stationDetail/components/waterProject.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _waterProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _waterProject_vue_vue_type_template_id_0c9c0606_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _waterProject_vue_vue_type_template_id_0c9c0606_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0c9c0606",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/stationDetail/components/waterProject.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/components/waterProject.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/components/waterProject.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./waterProject.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/waterProject.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterProject_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/components/waterProject.vue?vue&type=template&id=0c9c0606&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/components/waterProject.vue?vue&type=template&id=0c9c0606&scoped=true& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterProject_vue_vue_type_template_id_0c9c0606_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./waterProject.vue?vue&type=template&id=0c9c0606&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/waterProject.vue?vue&type=template&id=0c9c0606&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterProject_vue_vue_type_template_id_0c9c0606_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterProject_vue_vue_type_template_id_0c9c0606_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/components/weatherStation.vue":
/*!*****************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/components/weatherStation.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _weatherStation_vue_vue_type_template_id_49c31c4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherStation.vue?vue&type=template&id=49c31c4a&scoped=true& */ "./src/views/waterHomePage/stationDetail/components/weatherStation.vue?vue&type=template&id=49c31c4a&scoped=true&");
/* harmony import */ var _weatherStation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weatherStation.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/stationDetail/components/weatherStation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _weatherStation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _weatherStation_vue_vue_type_template_id_49c31c4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _weatherStation_vue_vue_type_template_id_49c31c4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "49c31c4a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/stationDetail/components/weatherStation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/components/weatherStation.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/components/weatherStation.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weatherStation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./weatherStation.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/weatherStation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weatherStation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/components/weatherStation.vue?vue&type=template&id=49c31c4a&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/components/weatherStation.vue?vue&type=template&id=49c31c4a&scoped=true& ***!
  \************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weatherStation_vue_vue_type_template_id_49c31c4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./weatherStation.vue?vue&type=template&id=49c31c4a&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/components/weatherStation.vue?vue&type=template&id=49c31c4a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weatherStation_vue_vue_type_template_id_49c31c4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_weatherStation_vue_vue_type_template_id_49c31c4a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/index.vue":
/*!*********************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/index.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_38cc5874_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=38cc5874&scoped=true& */ "./src/views/waterHomePage/stationDetail/index.vue?vue&type=template&id=38cc5874&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/stationDetail/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_38cc5874_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=38cc5874&lang=scss&scoped=true& */ "./src/views/waterHomePage/stationDetail/index.vue?vue&type=style&index=0&id=38cc5874&lang=scss&scoped=true&");
/* harmony import */ var _index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=1&lang=scss& */ "./src/views/waterHomePage/stationDetail/index.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_38cc5874_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_38cc5874_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "38cc5874",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/stationDetail/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/index.vue?vue&type=style&index=0&id=38cc5874&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/index.vue?vue&type=style&index=0&id=38cc5874&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_38cc5874_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=38cc5874&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/index.vue?vue&type=style&index=0&id=38cc5874&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_38cc5874_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_38cc5874_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_38cc5874_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_38cc5874_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/index.vue?vue&type=style&index=1&lang=scss&":
/*!*******************************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/index.vue?vue&type=style&index=1&lang=scss& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/index.vue?vue&type=style&index=1&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/waterHomePage/stationDetail/index.vue?vue&type=template&id=38cc5874&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./src/views/waterHomePage/stationDetail/index.vue?vue&type=template&id=38cc5874&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_38cc5874_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=38cc5874&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/stationDetail/index.vue?vue&type=template&id=38cc5874&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_38cc5874_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_38cc5874_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZGVmaW5lUHJvcGVydHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFNwcmVhZDIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvUHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b1Byb3BlcnR5S2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvY29tcG9uZW50cy9sYWtlTW9uaXRvclNpdGUudnVlIiwid2VicGFjazovLy9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvc3Vycm91bmRQb2xsdXRpb24udnVlIiwid2VicGFjazovLy9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvdXBPdXRsZXQudnVlIiwid2VicGFjazovLy9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvdXBQdXJQbGFudC52dWUiLCJ3ZWJwYWNrOi8vL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvY29tcG9uZW50cy91cFJlc2Vydm9pci52dWUiLCJ3ZWJwYWNrOi8vL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvY29tcG9uZW50cy91cFJpdmVyLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9jb21wb25lbnRzL3VwU2l0ZS52dWUiLCJ3ZWJwYWNrOi8vL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvY29tcG9uZW50cy93YXRlclByb2plY3QudnVlIiwid2VicGFjazovLy9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvd2VhdGhlclN0YXRpb24udnVlIiwid2VicGFjazovLy9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvbGFrZU1vbml0b3JTaXRlLnZ1ZT9kNjVjIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvY29tcG9uZW50cy9zdXJyb3VuZFBvbGx1dGlvbi52dWU/MTJhNSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvdXBPdXRsZXQudnVlPzg0MWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9jb21wb25lbnRzL3VwUHVyUGxhbnQudnVlPzYwMmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9jb21wb25lbnRzL3VwUmVzZXJ2b2lyLnZ1ZT85MzYyIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvY29tcG9uZW50cy91cFJpdmVyLnZ1ZT80NTk4Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvY29tcG9uZW50cy91cFNpdGUudnVlPzgxOTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9jb21wb25lbnRzL3dhdGVyUHJvamVjdC52dWU/NjAzNSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvd2VhdGhlclN0YXRpb24udnVlPzZmYTciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9pbmRleC52dWU/MzliYiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2RhdGUtdG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmlsdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuZGF0ZS50by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3Qua2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN5bWJvbC50by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLmZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvc3RhdGlvbkRldGFpbC5zY3NzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvY29tcG9uZW50cy91cFNpdGUudnVlPzFjYzMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9pbmRleC52dWU/ZjJmMiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2luZGV4LnZ1ZT9mOWRiIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvY29tcG9uZW50cy91cFNpdGUudnVlP2VkZDciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9pbmRleC52dWU/MDg0NiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2luZGV4LnZ1ZT8wMDdmIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvbGlzdGJnLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3NpdGUtYW5hbHlzaXMtaWNvbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy90b3JpZ2h0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvbGFrZU1vbml0b3JTaXRlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvbGFrZU1vbml0b3JTaXRlLnZ1ZT9iYTMyIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvY29tcG9uZW50cy9sYWtlTW9uaXRvclNpdGUudnVlPzA5YmMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9jb21wb25lbnRzL3N1cnJvdW5kUG9sbHV0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvc3Vycm91bmRQb2xsdXRpb24udnVlPzk2ZDAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9jb21wb25lbnRzL3N1cnJvdW5kUG9sbHV0aW9uLnZ1ZT9lOWU1Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvY29tcG9uZW50cy91cE91dGxldC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9jb21wb25lbnRzL3VwT3V0bGV0LnZ1ZT81NWE4Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvY29tcG9uZW50cy91cE91dGxldC52dWU/YzQ3NCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvdXBQdXJQbGFudC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9jb21wb25lbnRzL3VwUHVyUGxhbnQudnVlPzk2ZjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9jb21wb25lbnRzL3VwUHVyUGxhbnQudnVlPzU5MTciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9jb21wb25lbnRzL3VwUmVzZXJ2b2lyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvdXBSZXNlcnZvaXIudnVlPzQ2MzkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9jb21wb25lbnRzL3VwUmVzZXJ2b2lyLnZ1ZT8yYjU1Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvY29tcG9uZW50cy91cFJpdmVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvdXBSaXZlci52dWU/ZWJjMCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvdXBSaXZlci52dWU/MGJiZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvdXBTaXRlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvdXBTaXRlLnZ1ZT84YWUwIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvY29tcG9uZW50cy91cFNpdGUudnVlPzI5YTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9jb21wb25lbnRzL3VwU2l0ZS52dWU/ZGU2YSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvd2F0ZXJQcm9qZWN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvd2F0ZXJQcm9qZWN0LnZ1ZT81NTc3Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvY29tcG9uZW50cy93YXRlclByb2plY3QudnVlPzMxMjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9jb21wb25lbnRzL3dlYXRoZXJTdGF0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvd2VhdGhlclN0YXRpb24udnVlPzk5NmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9jb21wb25lbnRzL3dlYXRoZXJTdGF0aW9uLnZ1ZT80NTdhIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvaW5kZXgudnVlPzY1NTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9pbmRleC52dWU/MmE2NiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2luZGV4LnZ1ZT8xNzFmIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvaW5kZXgudnVlP2RjNDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9zdGF0aW9uRGV0YWlsLnNjc3M/NTMxMiJdLCJuYW1lcyI6WyJfZGVmaW5lUHJvcGVydHkiLCJlIiwiciIsInQiLCJ0b1Byb3BlcnR5S2V5IiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJ2YWx1ZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIm93bktleXMiLCJrZXlzIiwiZ2V0T3duUHJvcGVydHlTeW1ib2xzIiwibyIsImZpbHRlciIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsInB1c2giLCJhcHBseSIsIl9vYmplY3RTcHJlYWQyIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiZm9yRWFjaCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwidG9QcmltaXRpdmUiLCJfdHlwZW9mIiwiU3ltYm9sIiwiaSIsImNhbGwiLCJUeXBlRXJyb3IiLCJTdHJpbmciLCJOdW1iZXIiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7O0FBQ0EsU0FBU0EsZUFBVCxDQUF5QkMsQ0FBekIsRUFBNEJDLENBQTVCLEVBQStCQyxDQUEvQixFQUFrQztBQUNoQyxTQUFPLENBQUNELENBQUMsR0FBR0UsaUVBQWEsQ0FBQ0YsQ0FBRCxDQUFsQixLQUEwQkQsQ0FBMUIsR0FBOEJJLE1BQU0sQ0FBQ0MsY0FBUCxDQUFzQkwsQ0FBdEIsRUFBeUJDLENBQXpCLEVBQTRCO0FBQy9ESyxTQUFLLEVBQUVKLENBRHdEO0FBRS9ESyxjQUFVLEVBQUUsQ0FBQyxDQUZrRDtBQUcvREMsZ0JBQVksRUFBRSxDQUFDLENBSGdEO0FBSS9EQyxZQUFRLEVBQUUsQ0FBQztBQUpvRCxHQUE1QixDQUE5QixHQUtGVCxDQUFDLENBQUNDLENBQUQsQ0FBRCxHQUFPQyxDQUxMLEVBS1FGLENBTGY7QUFNRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSRDs7QUFDQSxTQUFTVSxPQUFULENBQWlCVixDQUFqQixFQUFvQkMsQ0FBcEIsRUFBdUI7QUFDckIsTUFBSUMsQ0FBQyxHQUFHRSxNQUFNLENBQUNPLElBQVAsQ0FBWVgsQ0FBWixDQUFSOztBQUNBLE1BQUlJLE1BQU0sQ0FBQ1EscUJBQVgsRUFBa0M7QUFDaEMsUUFBSUMsQ0FBQyxHQUFHVCxNQUFNLENBQUNRLHFCQUFQLENBQTZCWixDQUE3QixDQUFSO0FBQ0FDLEtBQUMsS0FBS1ksQ0FBQyxHQUFHQSxDQUFDLENBQUNDLE1BQUYsQ0FBUyxVQUFVYixDQUFWLEVBQWE7QUFDOUIsYUFBT0csTUFBTSxDQUFDVyx3QkFBUCxDQUFnQ2YsQ0FBaEMsRUFBbUNDLENBQW5DLEVBQXNDTSxVQUE3QztBQUNELEtBRlMs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S0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDeENmO0FBQUE7QUFBQSx3Q0FBMFMsQ0FBZ0Isc1VBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBOVQ7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMsdVpBQW9PO0FBQzFQO0FBQ0EsNENBQTRDLFFBQVM7QUFDckQ7QUFDQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyxnSUFBbUU7QUFDckYsOENBQThDLHFDQUFxQztBQUNuRjtBQUNBLEdBQUcsS0FBVSxFQUFFLEUiLCJmaWxlIjoianMvMzkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdG9Qcm9wZXJ0eUtleSBmcm9tIFwiLi90b1Byb3BlcnR5S2V5LmpzXCI7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkoZSwgciwgdCkge1xuICByZXR1cm4gKHIgPSB0b1Byb3BlcnR5S2V5KHIpKSBpbiBlID8gT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHIsIHtcbiAgICB2YWx1ZTogdCxcbiAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICBjb25maWd1cmFibGU6ICEwLFxuICAgIHdyaXRhYmxlOiAhMFxuICB9KSA6IGVbcl0gPSB0LCBlO1xufVxuZXhwb3J0IHsgX2RlZmluZVByb3BlcnR5IGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgZGVmaW5lUHJvcGVydHkgZnJvbSBcIi4vZGVmaW5lUHJvcGVydHkuanNcIjtcbmZ1bmN0aW9uIG93bktleXMoZSwgcikge1xuICB2YXIgdCA9IE9iamVjdC5rZXlzKGUpO1xuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBvID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTtcbiAgICByICYmIChvID0gby5maWx0ZXIoZnVuY3Rpb24gKHIpIHtcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsIHIpLmVudW1lcmFibGU7XG4gICAgfSkpLCB0LnB1c2guYXBwbHkodCwgbyk7XG4gIH1cbiAgcmV0dXJuIHQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMihlKSB7XG4gIGZvciAodmFyIHIgPSAxOyByIDwgYXJndW1lbnRzLmxlbmd0aDsgcisrKSB7XG4gICAgdmFyIHQgPSBudWxsICE9IGFyZ3VtZW50c1tyXSA/IGFyZ3VtZW50c1tyXSA6IHt9O1xuICAgIHIgJSAyID8gb3duS2V5cyhPYmplY3QodCksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eShlLCByLCB0W3JdKTtcbiAgICB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnModCkpIDogb3duS2V5cyhPYmplY3QodCkpLmZvckVhY2goZnVuY3Rpb24gKHIpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCByLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsIHIpKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZTtcbn1cbmV4cG9ydCB7IF9vYmplY3RTcHJlYWQyIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiLi90eXBlb2YuanNcIjtcbmZ1bmN0aW9uIHRvUHJpbWl0aXZlKHQsIHIpIHtcbiAgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7XG4gIHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdO1xuICBpZiAodm9pZCAwICE9PSBlKSB7XG4gICAgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICB9XG4gIHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7XG59XG5leHBvcnQgeyB0b1ByaW1pdGl2ZSBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5pbXBvcnQgdG9QcmltaXRpdmUgZnJvbSBcIi4vdG9QcmltaXRpdmUuanNcIjtcbmZ1bmN0aW9uIHRvUHJvcGVydHlLZXkodCkge1xuICB2YXIgaSA9IHRvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpO1xuICByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IGkgKyBcIlwiO1xufVxuZXhwb3J0IHsgdG9Qcm9wZXJ0eUtleSBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvO1xuICB9IDogZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbztcbiAgfSwgX3R5cGVvZihvKTtcbn1cbmV4cG9ydCB7IF90eXBlb2YgYXMgZGVmYXVsdCB9OyIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZC1saXN0XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibGlzdC10b3BcIiBAY2xpY2s9XCJvbkNoYW5nZVNob3dcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImxpc3QtdGl0bGVcIj57e3RpdGxlfX3nm5HmtYvmlq3pnaI8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImxpc3QtbGVuZ3RoXCI+e3sgbGlzdC5sZW5ndGggfX3kuKo8L2Rpdj5cclxuICAgICAgPGRpdiB2LWlmPVwibGlzdC5sZW5ndGg+MFwiIGNsYXNzPVwibGlzdC1yaWdodFwiPlxyXG4gICAgICAgIDx2YW4taWNvbiB2LWlmPVwic2hvd1wiIG5hbWU9XCJhcnJvdy1kb3duXCIgY29sb3I9XCIjYTZhNmE2XCIgc2l6ZT1cIjEyXCIvPlxyXG4gICAgICAgIDx2YW4taWNvbiB2LWVsc2UgbmFtZT1cImFycm93LXVwXCIgY29sb3I9XCIjYTZhNmE2XCIgc2l6ZT1cIjEyXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPHRlbXBsYXRlIHYtaWY9XCJzaG93XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibGlzdC1pbmZvXCIgc3R5bGU9XCJoZWlnaHQ6IGF1dG87XCIgdi1mb3I9XCJpdGVtIGluIGxpc3RcIiA6c3R5bGU9XCJ7IGJhY2tncm91bmQ6IGl0ZW0uenQgPT0gJ+i2hScgPyAncmdiYSgyNTQsIDc5LCAyLCAwLjAzKScgOiAnJyB9XCIgQGNsaWNrPVwidG9TdGF0aW9uKGl0ZW0pXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LWl0ZW1cIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImxpc3QtbWNcIj57eyBpdGVtLm5hbWUgfX08L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImxpc3QteHpcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwieHotd29yZHNcIiA6c3R5bGU9XCJ7IGJhY2tncm91bmRJbWFnZTogJ3VybCgnICsganVkZ2VMZXZlbChyZXBsYWNlU3RyaW5nKGl0ZW0ubGV2ZWwpKSArICcpJyB9XCI+e3sgcmVwbGFjZVN0cmluZyhpdGVtLmxldmVsKSB8fCBcIi1cIiB9fTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImxpc3Qtd29yZHNcIj7nm67moIc8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImxpc3QtbWJcIj5cclxuICAgICAgICA8ZGl2IDpjbGFzcz1cIlsnbWItd29yZHMnLCBqdWRnZVRhcmdldExldmVsKHJlcGxhY2VTdHJpbmcoaXRlbS50YXJnZXQpKV1cIj57eyByZXBsYWNlU3RyaW5nKGl0ZW0udGFyZ2V0KSB8fCBcIi1cIiB9fTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8L3RlbXBsYXRlPlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgeyBpbWdKdWdkZUxldmVsIH0gZnJvbSBcIkAvdXRpbHMvdXRpbHNcIjtcclxuICBpbXBvcnQgeyBnZXRVcExpc3R9IGZyb20gXCJAL2FwaS93YXRlcl9lbnZpclwiO1xyXG4gIGltcG9ydCBcIkAvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL3N0YXRpb25EZXRhaWwuc2Nzc1wiO1xyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwibGFrZU1vbml0b3JTaXRlXCIsXHJcbiAgICBwcm9wczoge1xyXG4gICAgICBsaXN0OiB7XHJcbiAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgZGVmYXVsdDogKCkgPT4ge1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgdGltZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBkZWZhdWx0OiAoKSA9PiB7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB0aW1lVHlwZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBkZWZhdWx0OiAoKSA9PiB7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB0aXRsZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBkZWZhdWx0OiAoKSA9PiB7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgLyogd2F0Y2g6IHtcclxuICAgICAgdGltZTogZnVuY3Rpb24gKG5ld0QsIG9sZEQpIHtcclxuICAgICAgICB0aGlzLmdldERhdGEoKVxyXG4gICAgICB9LFxyXG4gICAgICBpZDogZnVuY3Rpb24gKG5ld0QsIG9sZEQpIHtcclxuICAgICAgICB0aGlzLmdldERhdGEoKVxyXG4gICAgICB9XHJcbiAgICB9LCovXHJcbiAgICBkYXRhKCl7XHJcbiAgICAgIHJldHVybntcclxuICAgICAgICB1cExpc3Q6IFtdLFxyXG4gICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICB0b1N0YXRpb24oaXRlbSkge1xyXG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgIG5hbWU6IFwic3RhdGlvbkRldGFpbFwiLFxyXG4gICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgLy8gbWM6IGl0ZW0uc2l0ZU5hbWUsXHJcbiAgICAgICAgICAgIHR5cGU6IGl0ZW0ubW9kZT09PSfmiYvlt6UnPyfmnIgnOifml7YnLFxyXG4gICAgICAgICAgICAvLyBsZXZlbDogaXRlbS5zZWN0aW9uVHlwZSxcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uc2l0ZUlkLFxyXG4gICAgICAgICAgICB0aW1lOiB0aGlzLnRpbWUsXHJcbiAgICAgICAgICAgIC8vIGxpc3RUeXBlOiBpdGVtLnR5cGUsXHJcbiAgICAgICAgICAgIC8vIHpkVHlwZTogaXRlbS5tb25pdG9yaW5nTWV0aG9kLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KS5jYXRjaCgoKT0+e30pO1xyXG4gICAgICB9LFxyXG4gICAgICByZXBsYWNlU3RyaW5nKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZShcIuexu1wiLCBcIlwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBqdWRnZUxldmVsKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIGltZ0p1Z2RlTGV2ZWwodmFsdWUpO1xyXG4gICAgICB9LFxyXG4gICAgICBqdWRnZVRhcmdldExldmVsKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJ0YXJnZXQyXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCLihaFcIikge1xyXG4gICAgICAgICAgcmV0dXJuIFwidGFyZ2V0MlwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwi4oWiXCIpIHtcclxuICAgICAgICAgIHJldHVybiBcInRhcmdldDNcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIuKFo1wiKSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJ0YXJnZXQ0XCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCLihaRcIikge1xyXG4gICAgICAgICAgcmV0dXJuIFwidGFyZ2V0NVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwi5Yqj4oWkXCIpIHtcclxuICAgICAgICAgIHJldHVybiBcInRhcmdldDZcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIFwidGFyZ2V0MFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgb25DaGFuZ2VTaG93KCl7XHJcbiAgICAgICAgdGhpcy5zaG93ID0gIXRoaXMuc2hvdztcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZC1saXN0XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibGlzdC10b3BcIiBAY2xpY2s9XCJvbkNoYW5nZVNob3dcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImxpc3QtdGl0bGVcIj7lkajovrnmtonmsLTmsaHmn5PmupA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImxpc3QtbGVuZ3RoXCI+e3sgd2F0ZXJQb2xsdXRpbk51bSB9feWutjwvZGl2PlxyXG48IS0tICAgICAgPGRpdiBjbGFzcz1cImxpc3QtcmlnaHRcIiBAY2xpY2s9XCJ0b1dhdGVyTG9jYXRpb24oKVwiPuafpeecizxpbWcgc3JjPVwifkAvYXNzZXRzL3RvcmlnaHQucG5nXCIgYWx0PVwiXCIgLz48L2Rpdj4tLT5cclxuICAgICAgPGRpdiB2LWlmPVwibGlzdC5sZW5ndGg+MFwiIGNsYXNzPVwibGlzdC1yaWdodFwiPlxyXG4gICAgICAgIDx2YW4taWNvbiB2LWlmPVwic2hvd1wiIG5hbWU9XCJhcnJvdy1kb3duXCIgY29sb3I9XCIjYTZhNmE2XCIgc2l6ZT1cIjEyXCIvPlxyXG4gICAgICAgIDx2YW4taWNvbiB2LWVsc2UgbmFtZT1cImFycm93LXVwXCIgY29sb3I9XCIjYTZhNmE2XCIgc2l6ZT1cIjEyXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiB2LWlmPVwic2hvd1wiIGNsYXNzPVwibGlzdC1jb250ZW50XCIgdi1mb3I9XCJpdGVtIGluIGxpc3RcIiBAY2xpY2s9XCJ0b0NvbXBhbnkoaXRlbSlcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtbGVmdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LW5hbWVcIj57eyBpdGVtLm5hbWUgfX08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXJpZ2h0XCI+5p+l55yLPGltZyBzcmM9XCJ+QC9hc3NldHMvdG9yaWdodC5wbmdcIiBhbHQ9XCJcIi8+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHsgdXBzdHJlYW1Qb2xsdXRpb259IGZyb20gXCJAL2FwaS93YXRlcl9lbnZpclwiO1xyXG4gIGltcG9ydCBcIkAvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL3N0YXRpb25EZXRhaWwuc2Nzc1wiO1xyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwic3Vycm91bmRQb2xsdXRpb25cIixcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGlkOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6ICgpID0+IHtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGRhdGFPYmo6e1xyXG4gICAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgICBkZWZhdWx0OiAoKT0+e31cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgIGlkOiBmdW5jdGlvbiAobmV3RCwgb2xkRCkge1xyXG4gICAgICAgIHRoaXMuZ2V0RGF0YSgpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhKCl7XHJcbiAgICAgIHJldHVybntcclxuICAgICAgICB3YXRlclBvbGx1dGluTnVtOiAwLFxyXG4gICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgIGxpc3Q6IFtdXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGdldERhdGEoKSB7XHJcbiAgICAgICAgbGV0IGluZm8gPSB7XHJcbiAgICAgICAgICBzZWN0aW9uSWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB1cHN0cmVhbVBvbGx1dGlvbihpbmZvKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgdGhpcy53YXRlclBvbGx1dGluTnVtID0gcmVzLmRhdGEubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3QgPSByZXMuZGF0YTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgb25DaGFuZ2VTaG93KCl7XHJcbiAgICAgICAgdGhpcy5zaG93ID0gIXRoaXMuc2hvdztcclxuICAgICAgfSxcclxuICAgICAgdG9Db21wYW55KGl0ZW0pe1xyXG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgIG5hbWU6IFwiY29tcGFueURldGFpbFwiLFxyXG4gICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQsXHJcbiAgICAgICAgICAgIHR5cGU6ICdyZWQnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICB0b1dhdGVyTG9jYXRpb24oKXtcclxuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICBuYW1lOiBcInN1cnJvdW5kTWFwXCIsXHJcbiAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICBzaXRlSWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogdGhpcy5kYXRhT2JqLmxvbmdpdHVkZSxcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IHRoaXMuZGF0YU9iai5sYXRpdHVkZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZC1saXN0XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibGlzdC10b3BcIiBAY2xpY2s9XCJvbkNoYW5nZVNob3dcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImxpc3QtdGl0bGVcIj7kuIrmuLjmjpLmsaHlj6M8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImxpc3QtbGVuZ3RoXCI+e3sgbGlzdC5sZW5ndGggfX3kuKo8L2Rpdj5cclxuICAgICAgPGRpdiB2LWlmPVwibGlzdC5sZW5ndGg+MFwiIGNsYXNzPVwibGlzdC1yaWdodFwiPlxyXG4gICAgICAgIDx2YW4taWNvbiB2LWlmPVwic2hvd1wiIG5hbWU9XCJhcnJvdy1kb3duXCIgY29sb3I9XCIjYTZhNmE2XCIgc2l6ZT1cIjEyXCIvPlxyXG4gICAgICAgIDx2YW4taWNvbiB2LWVsc2UgbmFtZT1cImFycm93LXVwXCIgY29sb3I9XCIjYTZhNmE2XCIgc2l6ZT1cIjEyXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiB2LWlmPVwic2hvd1wiIGNsYXNzPVwibGlzdC1jb250ZW50XCIgdi1mb3I9XCJpdGVtIGluIGxpc3RcIiBAY2xpY2s9XCJvbkRldGFpbChpdGVtKVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1sZWZ0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtbmFtZVwiPnt7IGl0ZW0uZGlzY2hhcmdlTWV0aG9kIH19PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtd29yZHNcIj57eyBpdGVtLmxvY2F0aW9uSW5mbyB9fTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtcmlnaHRcIj7mn6XnnIs8aW1nIHNyYz1cIn5AL2Fzc2V0cy90b3JpZ2h0LnBuZ1wiIGFsdD1cIlwiLz48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgXCJAL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9zdGF0aW9uRGV0YWlsLnNjc3NcIjtcclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcInVwT3V0bGV0XCIsXHJcbiAgICBwcm9wczoge1xyXG4gICAgICBsaXN0OiB7XHJcbiAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgZGVmYXVsdDogKCkgPT4ge1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgdGltZVR5cGU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdDogKCkgPT4ge1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgdGltZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBkZWZhdWx0OiAoKSA9PiB7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczp7XHJcbiAgICAgIG9uQ2hhbmdlU2hvdygpe1xyXG4gICAgICAgIHRoaXMuc2hvdyA9ICF0aGlzLnNob3c7XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uRGV0YWlsKGRhdGEpe1xyXG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgIG5hbWU6IFwidXBzdHJlYW1PdXRsZXREZXRhaWxcIixcclxuICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgIGlkOiBkYXRhLmlkLFxyXG4gICAgICAgICAgICBuYW1lOiBkYXRhLmxvY2F0aW9uSW5mbyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuXHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZC1saXN0XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwibGlzdC10b3BcIiBAY2xpY2s9XCJvbkNoYW5nZVNob3dcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImxpc3QtdGl0bGVcIj7kuIrmuLjmsLTotKjlh4DljJbljoI8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImxpc3QtbGVuZ3RoXCI+e3sgbGlzdC5sZW5ndGggfX3lrrY8L2Rpdj5cclxuICAgICAgPGRpdiB2LWlmPVwibGlzdC5sZW5ndGg+MFwiIGNsYXNzPVwibGlzdC1yaWdodFwiPlxyXG4gICAgICAgIDx2YW4taWNvbiB2LWlmPVwic2hvd1wiIG5hbWU9XCJhcnJvdy1kb3duXCIgY29sb3I9XCIjYTZhNmE2XCIgc2l6ZT1cIjEyXCIvPlxyXG4gICAgICAgIDx2YW4taWNvbiB2LWVsc2UgbmFtZT1cImFycm93LXVwXCIgY29sb3I9XCIjYTZhNmE2XCIgc2l6ZT1cIjEyXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiB2LWlmPVwic2hvd1wiIGNsYXNzPVwibGlzdC1jb250ZW50XCIgdi1mb3I9XCJpdGVtIGluIGxpc3RcIiBAY2xpY2s9XCJ0b0poYyhpdGVtKVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1sZWZ0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxlZnQtbmFtZVwiPnt7IGl0ZW0uZW50ZXJwcmlzZU5hbWUgfX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibGVmdC13b3Jkc1wiPuS4juWbveiAg+aWremdouebtOe6v+i3neemu++8mnt7IGl0ZW0uZGlzdGFuY2UgfX08L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXJpZ2h0XCI+5p+l55yLPGltZyBzcmM9XCJ+QC9hc3NldHMvdG9yaWdodC5wbmdcIiBhbHQ9XCJcIi8+PC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IFwiQC92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvc3RhdGlvbkRldGFpbC5zY3NzXCI7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwidXBQdXJQbGFudFwiLFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbGlzdDoge1xyXG4gICAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICAgIGRlZmF1bHQ6ICgpID0+IHtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHRpbWVUeXBlOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6ICgpID0+IHtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHRpbWU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdDogKCkgPT4ge1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgb25DaGFuZ2VTaG93KCl7XHJcbiAgICAgICAgdGhpcy5zaG93ID0gIXRoaXMuc2hvdztcclxuICAgICAgfSxcclxuICAgICAgdG9KaGMoaXRlbSkge1xyXG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgIG5hbWU6IFwicHVyUGxhbnREZXRhaWxcIixcclxuICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgIC8vIHRpbWVUeXBlOiB0aGlzLnRpbWVUeXBlLFxyXG4gICAgICAgICAgICBuYW1lOiBpdGVtLmVudGVycHJpc2VOYW1lLFxyXG4gICAgICAgICAgICBpZDogaXRlbS5wbGFudElkLFxyXG4gICAgICAgICAgICAvLyB0aW1lOiB0aGlzLnRpbWUsXHJcbiAgICAgICAgICAgIC8vIHR5cGU6IGl0ZW0udHlwZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNhcmQtbGlzdFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImxpc3QtdG9wXCIgQGNsaWNrPVwib25DaGFuZ2VTaG93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LXRpdGxlXCI+5LiK5ri45rC05bqTPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LWxlbmd0aFwiPnt7IGxpc3QubGVuZ3RoIH195LiqPC9kaXY+XHJcbiAgICAgIDxkaXYgdi1pZj1cImxpc3QubGVuZ3RoPjBcIiBjbGFzcz1cImxpc3QtcmlnaHRcIj5cclxuICAgICAgICA8dmFuLWljb24gdi1pZj1cInNob3dcIiBuYW1lPVwiYXJyb3ctZG93blwiIGNvbG9yPVwiI2E2YTZhNlwiIHNpemU9XCIxMlwiLz5cclxuICAgICAgICA8dmFuLWljb24gdi1lbHNlIG5hbWU9XCJhcnJvdy11cFwiIGNvbG9yPVwiI2E2YTZhNlwiIHNpemU9XCIxMlwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgdi1pZj1cInNob3dcIiBjbGFzcz1cImxpc3QtY29udGVudFwiIHYtZm9yPVwiaXRlbSBpbiBsaXN0XCIgQGNsaWNrPVwidG9KaGMoaXRlbSlcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtbGVmdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LW5hbWVcIj57eyBpdGVtLmJvZHlOYW1lIH19KOW6k+Wuue+8mjxzcGFuPi08L3NwYW4+5Lq/bcKzKTwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsZWZ0LXdvcmRzXCI+5pyI6KGl5rC06YeP77yae3sgaXRlbS5kaXN0YW5jZSB9fTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuPCEtLSAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXJpZ2h0XCI+5p+l55yLPGltZyBzcmM9XCJ+QC9hc3NldHMvdG9yaWdodC5wbmdcIiBhbHQ9XCJcIi8+PC9kaXY+LS0+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IFwiQC92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvc3RhdGlvbkRldGFpbC5zY3NzXCI7XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJ1cFJlc2Vydm9pclwiLFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbGlzdDoge1xyXG4gICAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICAgIGRlZmF1bHQ6ICgpID0+IHtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHRpbWVUeXBlOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6ICgpID0+IHtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHRpbWU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdDogKCkgPT4ge1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgdG9KaGMoaXRlbSkge1xyXG5cclxuICAgICAgfSxcclxuICAgICAgb25DaGFuZ2VTaG93KCl7XHJcbiAgICAgICAgdGhpcy5zaG93ID0gIXRoaXMuc2hvdztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjYXJkLWxpc3RcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJsaXN0LXRvcFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibGlzdC10aXRsZVwiPuS4iua4uOaUr+a1gTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibGlzdC1sZW5ndGhcIj4w5LiqPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJ1cFJpdmVyXCIsXHJcbiAgICBkYXRhKCl7XHJcbiAgICAgIHJldHVybntcclxuICAgICAgICB1cExpc3Q6IFtdXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcblxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNhcmQtbGlzdFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImxpc3QtdG9wXCIgQGNsaWNrPVwib25DaGFuZ2VTaG93XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LXRpdGxlXCI+5LiK5ri455uR5rWL5pat6Z2iPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LWxlbmd0aFwiPnt7IGxpc3QubGVuZ3RoIH195LiqPC9kaXY+XHJcbiAgICAgIDxkaXYgdi1pZj1cImxpc3QubGVuZ3RoPjBcIiBjbGFzcz1cImxpc3QtcmlnaHRcIj5cclxuICAgICAgICA8dmFuLWljb24gdi1pZj1cInNob3dcIiBuYW1lPVwiYXJyb3ctZG93blwiIGNvbG9yPVwiI2E2YTZhNlwiIHNpemU9XCIxMlwiLz5cclxuICAgICAgICA8dmFuLWljb24gdi1lbHNlIG5hbWU9XCJhcnJvdy11cFwiIGNvbG9yPVwiI2E2YTZhNlwiIHNpemU9XCIxMlwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8dGVtcGxhdGUgdi1pZj1cInNob3dcIj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LWluZm9cIiBzdHlsZT1cImhlaWdodDogYXV0bztcIiB2LWZvcj1cIihpdGVtLGkpIGluIGxpc3RcIiA6c3R5bGU9XCJ7IGJhY2tncm91bmQ6IGl0ZW0uenQgPT0gJ+i2hScgPyAncmdiYSgyNTQsIDc5LCAyLCAwLjAzKScgOiAnJyB9XCIgPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdC1pdGVtXCIgQGNsaWNrPVwib25DaGFuZ2VTaG93RmFjdG9yKGl0ZW0saSlcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LW1jXCI+e3sgaXRlbS5zaXRlTmFtZSB9fTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3QteHpcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInh6LXdvcmRzXCIgOnN0eWxlPVwieyBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIGp1ZGdlTGV2ZWwocmVwbGFjZVN0cmluZyhpdGVtLndhdGVyUXVhbGl0eUxldmVsKSkgKyAnKScgfVwiPnt7IHJlcGxhY2VTdHJpbmcoaXRlbS53YXRlclF1YWxpdHlMZXZlbCkgfHwgXCItXCIgfX08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImxpc3Qtd29yZHNcIj7nm67moIc8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LW1iXCI+XHJcbiAgICAgICAgICAgIDxkaXYgOmNsYXNzPVwiWydtYi13b3JkcycsIGp1ZGdlVGFyZ2V0TGV2ZWwocmVwbGFjZVN0cmluZyhpdGVtLndhdGVyUXVhbGl0eVRhcmdldCkpXVwiPnt7IHJlcGxhY2VTdHJpbmcoaXRlbS53YXRlclF1YWxpdHlUYXJnZXQpIHx8IFwiLVwiIH19PC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDx2YW4taWNvbiB2LWlmPVwiaXRlbS5pc1Nob3c9PT10cnVlXCIgbmFtZT1cImFycm93LWRvd25cIiBjb2xvcj1cIiNhNmE2YTZcIiBzaXplPVwiMTJcIi8+XHJcbiAgICAgICAgICA8dmFuLWljb24gdi1lbHNlIG5hbWU9XCJhcnJvdy11cFwiIGNvbG9yPVwiI2E2YTZhNlwiIHNpemU9XCIxMlwiLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIml0ZW0uaXNTaG93PT09dHJ1ZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmcyBzaXRlLWluZm8tbmFtZVwiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAg5pWw5o2u5pe26Ze0XHJcbiAgICAgICAgICAgIDxzcGFuPnt7aXRlbS5tb25pdG9yaW5nVGltZX19PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImxpbmtcIiBAY2xpY2s9XCJ0b1N0YXRpb24oaXRlbSlcIj7ngrnlh7vmn6XnnIvor6bmg4U8L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNpdGUtaW5mby1mYWN0b3JcIj5cclxuICAgICAgICAgIDx0ZW1wbGF0ZSAgdi1mb3I9XCJpdGVtQyBpbiBpdGVtLmZhY3Rvckxpc3RcIj5cclxuICAgICAgICAgICAgPGRpdiB2LWlmPVwiaXRlbUMub3ZlclN0YW5kYXJkPT09ZmFsc2VcIiBjbGFzcz1cInNpdGUtaW5mby1mYWN0b3ItaXRlbVwiPlxyXG4gICAgICAgICAgICAgIHt7aXRlbUMuZmFjdG9yTmFtZX19IDxzcGFuPnt7aXRlbUMudmFsdWV9fXt7aXRlbUMudW5pdH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJzaXRlLWluZm8tZmFjdG9yLWl0ZW1cIiBzdHlsZT1cImNvbG9yOiByZWRcIj5cclxuICAgICAgICAgICAgICB7e2l0ZW1DLmZhY3Rvck5hbWV9fSA8c3Bhbj57e2l0ZW1DLnZhbHVlfX17e2l0ZW1DLnVuaXR9fSB7e2l0ZW1DLm11bHRpcGxpZXJ9feWAjSA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvdGVtcGxhdGU+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCB7IGltZ0p1Z2RlTGV2ZWwgfSBmcm9tIFwiQC91dGlscy91dGlsc1wiO1xyXG4gIGltcG9ydCBcIkAvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL3N0YXRpb25EZXRhaWwuc2Nzc1wiO1xyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwidXBTaXRlXCIsXHJcbiAgICBwcm9wczoge1xyXG4gICAgICBsaXN0OiB7XHJcbiAgICAgICAgdHlwZTogQXJyYXksXHJcbiAgICAgICAgZGVmYXVsdDogKCkgPT4ge1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgdGltZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBkZWZhdWx0OiAoKSA9PiB7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICB0aW1lVHlwZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICBkZWZhdWx0OiAoKSA9PiB7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgLyogd2F0Y2g6IHtcclxuICAgICAgdGltZTogZnVuY3Rpb24gKG5ld0QsIG9sZEQpIHtcclxuICAgICAgICB0aGlzLmdldERhdGEoKVxyXG4gICAgICB9LFxyXG4gICAgICBpZDogZnVuY3Rpb24gKG5ld0QsIG9sZEQpIHtcclxuICAgICAgICB0aGlzLmdldERhdGEoKVxyXG4gICAgICB9XHJcbiAgICB9LCovXHJcbiAgICBkYXRhKCl7XHJcbiAgICAgIHJldHVybntcclxuICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICBpc0ZpcnN0OiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpPT57XHJcbiAgICAgICAgaWYodGhpcy5pc0ZpcnN0PT09dHJ1ZSl7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlzRmlyc3QpXHJcbiAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKT0+e1xyXG4gICAgICAgICAgICBsZXQgaXNBcnJvdyA9IFtdO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmxpc3QpXHJcbiAgICAgICAgICAgIGZvcihsZXQgaT0gMDtpPHRoaXMubGlzdC5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgICBpc0Fycm93LnB1c2godGhpcy5saXN0W2ldLmlzU2hvdylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihpc0Fycm93LmluZGV4T2YodHJ1ZSk+LTEpe1xyXG4gICAgICAgICAgICAgIHRoaXMuc2hvdyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgICAgdGhpcy5pc0ZpcnN0ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LDIwMDApXHJcblxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgdG9TdGF0aW9uKGl0ZW0pIHtcclxuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICBuYW1lOiBcInN0YXRpb25EZXRhaWxcIixcclxuICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgIC8vIG1jOiBpdGVtLnNpdGVOYW1lLFxyXG4gICAgICAgICAgICB0eXBlOiB0aGlzLnRpbWVUeXBlLFxyXG4gICAgICAgICAgICAvLyBsZXZlbDogaXRlbS5zZWN0aW9uVHlwZSxcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uc2l0ZUlkLFxyXG4gICAgICAgICAgICB0aW1lOiB0aGlzLnRpbWUsXHJcbiAgICAgICAgICAgIC8vIGxpc3RUeXBlOiBpdGVtLnR5cGUsXHJcbiAgICAgICAgICAgIC8vIHpkVHlwZTogaXRlbS5tb25pdG9yaW5nTWV0aG9kLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KS5jYXRjaCgoKT0+e30pO1xyXG4gICAgICB9LFxyXG4gICAgICByZXBsYWNlU3RyaW5nKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZShcIuexu1wiLCBcIlwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBqdWRnZUxldmVsKHZhbHVlKSB7XHJcbiAgICAgICAgcmV0dXJuIGltZ0p1Z2RlTGV2ZWwodmFsdWUpO1xyXG4gICAgICB9LFxyXG4gICAgICBqdWRnZVRhcmdldExldmVsKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJ0YXJnZXQyXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCLihaFcIikge1xyXG4gICAgICAgICAgcmV0dXJuIFwidGFyZ2V0MlwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwi4oWiXCIpIHtcclxuICAgICAgICAgIHJldHVybiBcInRhcmdldDNcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIuKFo1wiKSB7XHJcbiAgICAgICAgICByZXR1cm4gXCJ0YXJnZXQ0XCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWx1ZSA9PT0gXCLihaRcIikge1xyXG4gICAgICAgICAgcmV0dXJuIFwidGFyZ2V0NVwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IFwi5Yqj4oWkXCIpIHtcclxuICAgICAgICAgIHJldHVybiBcInRhcmdldDZcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIFwidGFyZ2V0MFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgb25DaGFuZ2VTaG93KCl7XHJcbiAgICAgICAgdGhpcy5zaG93ID0gIXRoaXMuc2hvdztcclxuICAgICAgfSxcclxuICAgICAgb25DaGFuZ2VTaG93RmFjdG9yKGl0ZW0sIGkpe1xyXG4gICAgICAgIGlmKGl0ZW0uaXNTaG93PT09dHJ1ZSl7XHJcbiAgICAgICAgICB0aGlzLmxpc3RbaV0uaXNTaG93ID0gZmFsc2U7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICB0aGlzLmxpc3RbaV0uaXNTaG93ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIC5zaXRlLWluZm8tZmFjdG9yIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtYXJnaW46IDRweCA5cHg7XHJcbiAgICBwYWRkaW5nOiA2cHggMTJweCAycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIyNSwgMjMzLCAyNTIsIDEpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbiAgICAuc2l0ZS1pbmZvLWZhY3Rvci1pdGVtIHtcclxuICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDRweDtcclxuXHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2l0ZS1pbmZvLW5hbWUge1xyXG4gICAgcGFkZGluZzogNHB4IDE1cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcblxyXG4gICAgc3BhbiB7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC5saW5rIHtcclxuICAgICAgY29sb3I6IHJnYmEoODQsIDExNywgMjQ4LCAxKTtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICB9XHJcbiAgfVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNhcmQtbGlzdFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImxpc3QtdG9wXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LXRpdGxlXCI+6LCD5rC05bel56iLPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LWxlbmd0aFwiPjDkuKo8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgXCJAL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9zdGF0aW9uRGV0YWlsLnNjc3NcIjtcclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcIndhdGVyUHJvamVjdFwiLFxyXG4gICAgZGF0YSgpe1xyXG4gICAgICByZXR1cm57XHJcbiAgICAgICAgdXBMaXN0OiBbXVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjYXJkLWxpc3RcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJsaXN0LXRvcFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibGlzdC10aXRsZVwiPuWRqOi+ueawlOixoeermeeCuTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibGlzdC1sZW5ndGhcIj4w5LiqPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IFwiQC92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvc3RhdGlvbkRldGFpbC5zY3NzXCI7XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJ3ZWF0aGVyU3RhdGlvblwiLFxyXG4gICAgZGF0YSgpe1xyXG4gICAgICByZXR1cm57XHJcbiAgICAgICAgdXBMaXN0OiBbXVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkPlxyXG5cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJzdGF0aW9uRGV0YWlsXCI+XHJcbiAgICA8dmFuLW5hdi1iYXIgbGVmdC1hcnJvdyBAY2xpY2stbGVmdD1cIiRyb3V0ZXIuZ28oLTEpXCI+XHJcbiAgICAgIDx0ZW1wbGF0ZSAjdGl0bGU+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwibGV2ZWxcIiBjbGFzcz1cInpkbHhcIj57eyBsZXZlbCB9fTwvZGl2PlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaW50by1tYXBcIj57eyB0aXRsZSB9fTwvc3Bhbj5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPCEtLTx0ZW1wbGF0ZSAjcmlnaHQ+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJuYXYtdGFnXCIgQGNsaWNrPVwidG9NYXBcIj7ov5vlhaXlnLDlm748L3NwYW4+XHJcbiAgICAgICAgPGltZyBzcmM9XCJ+QC9hc3NldHMvbW9yZU1hcC5wbmdcIiB3aWR0aD1cIjE4XCIvPlxyXG4gICAgICA8L3RlbXBsYXRlPi0tPlxyXG4gICAgPC92YW4tbmF2LWJhcj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRhYlwiPlxyXG4gICAgICA8dWw+XHJcbiAgICAgICAgPGxpIHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBhcnJcIiA6Y2xhc3M9XCJ7IGFjdGl2ZTogdGltZVR5cGUgPT0gaXRlbS52YWwgfVwiIEBjbGljaz1cInRhYkNoYW5nZShpdGVtLCBpbmRleClcIj57e1xyXG4gICAgICAgICAgaXRlbS5sYWJlbCB9fVxyXG4gICAgICAgIDwvbGk+XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb250ZW50LXdyYXBwZXJcIj5cclxuICAgICAgPHRpbWVTZWxlY3QgOm9wdGlvbj1cInRpbWVUeXBlXCIgOnRpbWU9XCJub3dUaW1lXCIgQGdldFRpbWU9XCJ0aW1lRm5cIi8+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnQtZGV0YWlsXCI+XHJcblxyXG4gICAgICAgIDwhLS3nirbmgIEtLT5cclxuICAgICAgICA8c3RhdHVzSXRlbSA6ZGF0YU9iaj1cImRhdGFvYmpcIi8+XHJcblxyXG4gICAgICAgIDwhLS08ZGl2IGNsYXNzPVwiZnMgd2FybmluZy1ib3hcIiBAY2xpY2s9XCJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmc1wiIHN0eWxlPVwiY29sb3I6IHJnYmEoMjU1LCAxNDEsIDI2LCAxKVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIkAvYXNzZXRzL2Fpci1zaXRlLXdhcm5pbmcucG5nXCIgd2lkdGg9XCIxNFwiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiA4cHhcIj5cclxuICAgICAgICAgICAg6LaF5qCH5ZGK6K2mXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgc3R5bGU9XCJjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpXCI+5p+l55yL6LaF5qCH6K6w5b2VXHJcbiAgICAgICAgICAgIDx2YW4taWNvbiBuYW1lPVwiYXJyb3dcIi8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4tLT5cclxuXHJcbiAgICAgICAgPCEtLeWboOWtkOWIh+aNoi0tPlxyXG4gICAgICAgIDxtb25pdG9ySXRlbSA6aWQ9XCJpZFwiIDp0aW1lPVwibm93VGltZVwiIDp0aW1lVHlwZT1cInRpbWVUeXBlXCIgOmxpc3RUeXBlPVwibGlzdFR5cGVcIiA6c3RhdGlvbk5hbWU9XCJzdGF0aW9uTmFtZVwiLz5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNpdGUtYW5hbHlzaXNcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMvc2l0ZS1hbmFseXNpcy1pY29uLnBuZ1wiIHdpZHRoPVwiMjRcIiBzdHlsZT1cInBhZGRpbmctcmlnaHQ6IDEwcHhcIi8+XHJcbiAgICAgICAgICDnlJ/mgIHnjq/looPlpKfmlbDmja7liIbmnpDnu5PmnpxcclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPCEtLea5luW6k+ebkea1i+aWremdoi0tPlxyXG4gICAgICAgIDxsYWtlTW9uaXRvclNpdGUgdi1pZj1cImxpc3RUeXBlPT09J+a5luW6kydcIiA6bGlzdD1cImxha2VNb25pdG9yTGlzdFwiIDp0aW1lPVwibm93VGltZVwiIDp0aW1lVHlwZT1cInRpbWVUeXBlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgIDp0aXRsZT1cInRpdGxlXCIvPlxyXG5cclxuICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxyXG5cclxuICAgICAgICAgIDwhLS3kuIrmuLjnm5HmtYvmlq3pnaItLT5cclxuICAgICAgICAgIDx1cFNpdGUgOmxpc3Q9XCJ1cExpc3RcIiA6dGltZT1cIm5vd1RpbWVcIiA6dGltZVR5cGU9XCJ0aW1lVHlwZVwiLz5cclxuXHJcbiAgICAgICAgICA8IS0t5LiK5ri45pSv5rWBLS0+XHJcbiAgICAgICAgICA8dXBSaXZlci8+XHJcblxyXG4gICAgICAgICAgPCEtLeS4iua4uOaOkuWPoy0tPlxyXG4gICAgICAgICAgPHVwT3V0bGV0IDpsaXN0PVwidXBTZXdhZ2VMaXN0XCIgOnRpbWU9XCJub3dUaW1lXCIgOnRpbWVUeXBlPVwidGltZVR5cGVcIi8+XHJcblxyXG4gICAgICAgICAgPCEtLeS4iua4uOawtOi0qOWHgOWMluWOgi0tPlxyXG4gICAgICAgICAgPHVwUHVyUGxhbnQgOmxpc3Q9XCJ1cEpoY0xpc3RcIiA6dGltZT1cIm5vd1RpbWVcIiA6dGltZVR5cGU9XCJ0aW1lVHlwZVwiLz5cclxuXHJcbiAgICAgICAgICA8IS0t5LiK5ri45rC05bqTLS0+XHJcbiAgICAgICAgICA8dXBSZXNlcnZvaXIgOmxpc3Q9XCJ1cFJlc2Vydm9pckxpc3RcIiA6dGltZT1cIm5vd1RpbWVcIiA6dGltZVR5cGU9XCJ0aW1lVHlwZVwiLz5cclxuXHJcbiAgICAgICAgICA8IS0t6LCD5rC05bel56iLLS0+XHJcbiAgICAgICAgICA8d2F0ZXJQcm9qZWN0Lz5cclxuXHJcbiAgICAgICAgICA8IS0t5ZGo6L655rCU6LGh56uZ54K5LS0+XHJcbiAgICAgICAgICA8d2VhdGhlclN0YXRpb24vPlxyXG5cclxuICAgICAgICAgIDwhLS3lkajovrnmtonmsLTmsaHmn5PmupAtLT5cclxuICAgICAgICAgIDxzdXJyb3VuZFBvbGx1dGlvbiA6aWQ9XCJpZFwiIDpkYXRhT2JqPVwic2l0ZURldGFpbEluZm9cIi8+XHJcblxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCB0aW1lU2VsZWN0IGZyb20gXCJAL3ZpZXdzL3dhdGVySG9tZVBhZ2UvZXhhbWluZVNpdGVMaXN0L2NvbXBvbmVudHMvdGltZVNlbGVjdC52dWVcIjtcclxuICBpbXBvcnQgc3RhdHVzSXRlbSBmcm9tIFwiQC92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvY29tcG9uZW50cy9zdGF0dXNJdGVtLnZ1ZVwiO1xyXG4gIGltcG9ydCBtb25pdG9ySXRlbSBmcm9tIFwiQC92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvY29tcG9uZW50cy9tb25pdG9ySXRlbS52dWVcIjtcclxuICBpbXBvcnQgbGFrZU1vbml0b3JTaXRlIGZyb20gXCJAL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9jb21wb25lbnRzL2xha2VNb25pdG9yU2l0ZS52dWVcIjtcclxuICBpbXBvcnQgdXBTaXRlIGZyb20gXCJAL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9jb21wb25lbnRzL3VwU2l0ZS52dWVcIjtcclxuICBpbXBvcnQgdXBQdXJQbGFudCBmcm9tIFwiQC92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvY29tcG9uZW50cy91cFB1clBsYW50LnZ1ZVwiO1xyXG4gIGltcG9ydCB1cFJpdmVyIGZyb20gXCJAL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9jb21wb25lbnRzL3VwUml2ZXIudnVlXCI7XHJcbiAgaW1wb3J0IHVwUmVzZXJ2b2lyIGZyb20gXCJAL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9jb21wb25lbnRzL3VwUmVzZXJ2b2lyLnZ1ZVwiO1xyXG4gIGltcG9ydCB3YXRlclByb2plY3QgZnJvbSBcIkAvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvd2F0ZXJQcm9qZWN0LnZ1ZVwiO1xyXG4gIGltcG9ydCB3ZWF0aGVyU3RhdGlvbiBmcm9tIFwiQC92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvY29tcG9uZW50cy93ZWF0aGVyU3RhdGlvbi52dWVcIjtcclxuICBpbXBvcnQgdXBPdXRsZXQgZnJvbSBcIkAvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvdXBPdXRsZXQudnVlXCI7XHJcbiAgaW1wb3J0IHN1cnJvdW5kUG9sbHV0aW9uIGZyb20gXCJAL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9jb21wb25lbnRzL3N1cnJvdW5kUG9sbHV0aW9uLnZ1ZVwiO1xyXG4gIGltcG9ydCB7XHJcbiAgICBzdGF0aW9uSW5mbyxcclxuICAgIHN0YXRpb25EZXMsXHJcbiAgICBwdXJpZmljYXRpb25QbGFudCxcclxuICAgIGdldFVwTGlzdCxcclxuICAgIGxha2VTaXRlTGlzdCxcclxuICAgIHVwU3RyZWFtV2F0ZXIsXHJcbiAgICB1cHN0cmVhbVNld2FnZVxyXG4gIH0gZnJvbSBcIkAvYXBpL3dhdGVyX2VudmlyXCI7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiaW5kZXhcIixcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgbGFrZU1vbml0b3JTaXRlLFxyXG4gICAgICB0aW1lU2VsZWN0LFxyXG4gICAgICBzdGF0dXNJdGVtLFxyXG4gICAgICBtb25pdG9ySXRlbSxcclxuICAgICAgdXBTaXRlLFxyXG4gICAgICB1cFB1clBsYW50LFxyXG4gICAgICB1cFJpdmVyLFxyXG4gICAgICB1cE91dGxldCxcclxuICAgICAgc3Vycm91bmRQb2xsdXRpb24sXHJcbiAgICAgIHVwUmVzZXJ2b2lyLFxyXG4gICAgICB3YXRlclByb2plY3QsXHJcbiAgICAgIHdlYXRoZXJTdGF0aW9uXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB0aXRsZTogXCJcIixcclxuICAgICAgICBhY3RpdmU6IDAsXHJcbiAgICAgICAgYWN0aXZlMTogMCxcclxuICAgICAgICB0aW1lVHlwZTogXCJcIixcclxuICAgICAgICBmbGFnVHlwZTogXCJcIixcclxuICAgICAgICBsZXZlbDogXCJcIixcclxuICAgICAgICB0YWJQYXRoOiBcIi9ob3VyVmFsdWVcIixcclxuICAgICAgICBjb3VudHJ5VGFiOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIuaXtuWAvFwiLFxyXG4gICAgICAgICAgICB2YWw6IFwi5pe2XCIsXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIuaXpeWAvFwiLFxyXG4gICAgICAgICAgICB2YWw6IFwi5pelXCIsXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIuaciOWAvFwiLFxyXG4gICAgICAgICAgICB2YWw6IFwi5pyIXCIsXHJcbiAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIuW5tOWAvFwiLFxyXG4gICAgICAgICAgICB2YWw6IFwi5bm0XCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgcHJvdmluY2VUYWI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwi5pyI5YC8XCIsXHJcbiAgICAgICAgICAgIHZhbDogXCLmnIhcIixcclxuICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwi5bm05YC8XCIsXHJcbiAgICAgICAgICAgIHZhbDogXCLlubRcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgICBhcnI6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwi5pe25YC8XCIsXHJcbiAgICAgICAgICAgIHZhbDogXCLml7ZcIixcclxuICAgICAgICAgICAgcGF0aDogXCIvaG91clZhbHVlXCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogXCLml6XlgLxcIixcclxuICAgICAgICAgICAgcGF0aDogXCIvZGF5VmFsdWVcIixcclxuICAgICAgICAgICAgdmFsOiBcIuaXpVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwi5pyI5YC8XCIsXHJcbiAgICAgICAgICAgIHZhbDogXCLmnIhcIixcclxuICAgICAgICAgICAgcGF0aDogXCIvbW9udGhWYWx1ZVwiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwi5bm05YC8XCIsXHJcbiAgICAgICAgICAgIHBhdGg6IFwiL3llYXJWYWx1ZVwiLFxyXG4gICAgICAgICAgICB2YWw6IFwi5bm0XCIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgaWQ6ICcnLFxyXG4gICAgICAgIHN0YXRpb25OYW1lOiBcIlwiLFxyXG4gICAgICAgIG5vd1RpbWU6IFwiXCIsXHJcbiAgICAgICAgbGlzdFR5cGU6IFwiXCIsXHJcbiAgICAgICAgZGF0YW9iajoge30sXHJcbiAgICAgICAgc2l0ZURldGFpbEluZm86IHt9LFxyXG4gICAgICAgIHF1ZXJ5UGFyYW1zOiB7fSxcclxuICAgICAgICB1cExpc3Q6IFtdLFxyXG4gICAgICAgIGxha2VNb25pdG9yTGlzdDogW10sXHJcbiAgICAgICAgdXBKaGNMaXN0OiBbXSxcclxuICAgICAgICB1cFJlc2Vydm9pckxpc3Q6IFtdLFxyXG4gICAgICAgIHVwU2V3YWdlTGlzdDogW10sXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgdGhpcy5pbml0RGF0YSgpXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBhc3luYyBpbml0RGF0YSgpIHtcclxuICAgICAgICB0aGlzLmlkID0gdGhpcy4kcm91dGUucXVlcnkuaWQ7XHJcbiAgICAgICAgdGhpcy50aW1lVHlwZSA9IHRoaXMuJHJvdXRlLnF1ZXJ5LnR5cGU7ICAvL+aXtuOAgeaXpeOAgeaciOOAgeW5tFxyXG4gICAgICAgIHRoaXMuZmxhZ1R5cGUgPSB0aGlzLiRyb3V0ZS5xdWVyeS5mbGFnVHlwZTsgIC8v5Li65LqG5Yy65YiG6aWu55So5rC05rqQ5Zyw5pat6Z2iXHJcbiAgICAgICAgdGhpcy5ub3dUaW1lID0gdGhpcy4kcm91dGUucXVlcnkudGltZTtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5vd1RpbWUpXHJcblxyXG4gICAgICAgIGxldCB0ZW1wRCA9IGF3YWl0IHRoaXMucXVlcnlTaXRlRGVzKCk7XHJcblxyXG4gICAgICAgIHRoaXMubGV2ZWwgPSB0ZW1wRC5jdHJsTGV2ZWwgPyB0ZW1wRC5jdHJsTGV2ZWwuc3Vic3RyKDAsIDEpIDogJyc7XHJcbiAgICAgICAgbGV0IHRlbXBHc1R5cGUgPSB0ZW1wRC5jdHJsTGV2ZWw7XHJcbiAgICAgICAgY29uc29sZS5sb2codGVtcEdzVHlwZSlcclxuICAgICAgICBpZiAodGVtcEdzVHlwZSkge1xyXG4gICAgICAgICAgaWYgKHRlbXBHc1R5cGUgPT09IFwi5Zu95o6nXCIgfHwgdGVtcEQubW9uaXRvclR5cGUgPT09IFwi6Ieq5YqoXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5hcnIgPSB0aGlzLmNvdW50cnlUYWI7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFyciA9IHRoaXMucHJvdmluY2VUYWI7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmICh0ZW1wRC5tb25pdG9yVHlwZSA9PT0gXCLmiYvlt6VcIikge1xyXG4gICAgICAgICAgICB0aGlzLmFyciA9IHRoaXMucHJvdmluY2VUYWI7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmFyciA9IHRoaXMuY291bnRyeVRhYjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3RhdGlvbk5hbWUgPSB0ZW1wRC5zaXRlTmFtZTtcclxuICAgICAgICB0aGlzLmxpc3RUeXBlID0gdGVtcEQuc2l0ZVR5cGU7ICAvL+aWremdoi/muZblupPnrYlcclxuICAgICAgICB0aGlzLnRpdGxlID0gdGVtcEQuc2l0ZU5hbWU7XHJcblxyXG4gICAgICAgIHRoaXMucXVlcnlQYXJhbXMgPSB7XHJcbiAgICAgICAgICB0eXBlOiB0aGlzLmxpc3RUeXBlLFxyXG4gICAgICAgICAgZGF0ZVRpbWU6IHRoaXMudGltZVR5cGUgPT09IFwi5pe2XCIgPyB0aGlzLm5vd1RpbWUgKyBcIjowMFwiIDogdGhpcy5ub3dUaW1lLFxyXG4gICAgICAgICAgc2l0ZUlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgdGltZVR5cGU6IHRoaXMudGltZVR5cGUsXHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICAvL+afpeivouermeeCueS/oeaBr+ivpuaDhe+8jOWmguermeeCuWlk44CB5Zu955yB5o6n44CB5omL5bel44CB6Ieq5Yqo562JXHJcbiAgICAgIHF1ZXJ5U2l0ZURlcygpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmlkLHRoaXMudGltZVR5cGUpXHJcbiAgICAgICAgbGV0IHRlbXBGbGFnID0gJyc7XHJcbiAgICAgICAgaWYodGhpcy5pZD09MiYmdGhpcy50aW1lVHlwZT09PSfml7YnKXtcclxuICAgICAgICAgIC8v5ruH5rGg6I2J5rW3XHJcbiAgICAgICAgICBjb25zb2xlLmxvZygn5ruH5rGg6I2J5rW3JylcclxuICAgICAgICAgIHRlbXBGbGFnID0gMDtcclxuICAgICAgICB9ZWxzZSBpZih0aGlzLmlkPT0yJiZ0aGlzLnRpbWVUeXBlPT09J+aciCcpe1xyXG4gICAgICAgICAgLy/lhrfmsLTmsrNcclxuICAgICAgICAgIGNvbnNvbGUubG9nKCflhrfmsLTmsrMnKVxyXG4gICAgICAgICAgdGVtcEZsYWcgPSAxO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgdGVtcEZsYWcgPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgc3RhdGlvbkRlcyh7XHJcbiAgICAgICAgICAgICAgc2l0ZUlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICAgIHR5cGU6IHRoaXMuaWQ9PT0nMjMzJz8n5rmW5bqTJzp0aGlzLmZsYWdUeXBlLFxyXG4gICAgICAgICAgICAgIGZsYWc6IHRlbXBGbGFnXHJcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnNpdGVEZXRhaWxJbmZvID0gcmVzLmRhdGE7IC8vXHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShbXSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyBxdWVyeUFsbCgpIHtcclxuICAgICAgICBpZiAodGhpcy5saXN0VHlwZSA9PT0gJycpIHtcclxuICAgICAgICAgIGF3YWl0IHRoaXMuaW5pdERhdGEoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5xdWVyeVBhcmFtcyA9IHtcclxuICAgICAgICAgIHR5cGU6IHRoaXMubGlzdFR5cGUsXHJcbiAgICAgICAgICBkYXRlVGltZTogdGhpcy50aW1lVHlwZSA9PT0gXCLml7ZcIiA/IHRoaXMubm93VGltZSArIFwiOjAwXCIgOiB0aGlzLm5vd1RpbWUsXHJcbiAgICAgICAgICBzaXRlSWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICB0aW1lVHlwZTogdGhpcy50aW1lVHlwZSxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubG9hZERhdGEoKTtcclxuICAgICAgICBpZiAodGhpcy5saXN0VHlwZSA9PT0gJ+a5luW6kycpIHtcclxuICAgICAgICAgIHRoaXMucXVlcnlMYWtlTW9uaXRvcigpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLnF1ZXJ5VXBTaXRlKCk7XHJcbiAgICAgICAgICB0aGlzLnF1ZXJ5VXBQdXJQbGFudCgpO1xyXG4gICAgICAgICAgdGhpcy5xdWVyeVJlc2Vydm9pcigpO1xyXG4gICAgICAgICAgdGhpcy5xdWVyeVNld2FnZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgbG9hZERhdGEoKSB7XHJcbiAgICAgICAgc3RhdGlvbkluZm8odGhpcy5xdWVyeVBhcmFtcykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICBpZiAocmVzLmNvZGUgPT0gMjAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YW9iaiA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICAvL+S4iua4uOebkea1i+aWremdolxyXG4gICAgICBxdWVyeVVwU2l0ZSgpIHtcclxuICAgICAgICBnZXRVcExpc3Qoe1xyXG4gICAgICAgICAgc2VjdGlvbklkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgZGF0YVRpbWU6IHRoaXMudGltZVR5cGUgPT09IFwi5pe2XCIgPyB0aGlzLm5vd1RpbWUgKyBcIjowMFwiIDogdGhpcy5ub3dUaW1lLFxyXG4gICAgICAgICAgZGF0YVR5cGU6IHRoaXMudGltZVR5cGUsXHJcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlcy5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAvL+aWremdouebkea1i+WboOWtkOi2heagh+m7mOiupOWxleW8gFxyXG4gICAgICAgICAgICB0aGlzLnVwTGlzdCA9IHJlcy5kYXRhLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgICAgICBsZXQgdGVtcFNob3cgPSBmYWxzZTtcclxuICAgICAgICAgICAgICBmb3IobGV0IGkgaW4gaXRlbS5mYWN0b3JMaXN0KXtcclxuICAgICAgICAgICAgICAgIGlmKGl0ZW0uZmFjdG9yTGlzdFtpXS5vdmVyU3RhbmRhcmQ9PT10cnVlKXtcclxuICAgICAgICAgICAgICAgICAgdGVtcFNob3cgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uaXRlbSxcclxuICAgICAgICAgICAgICAgIGlzU2hvdzogdGVtcFNob3dcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIC8v5LiK5ri45rC05bqTXHJcbiAgICAgIHF1ZXJ5UmVzZXJ2b2lyKCkge1xyXG4gICAgICAgIHVwU3RyZWFtV2F0ZXIoe1xyXG4gICAgICAgICAgc2VjdGlvbklkOiB0aGlzLmlkLFxyXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgdGhpcy51cFJlc2Vydm9pckxpc3QgPSByZXMuZGF0YTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICAvL+S4iua4uOaOkuWPo1xyXG4gICAgICBxdWVyeVNld2FnZSgpIHtcclxuICAgICAgICB1cHN0cmVhbVNld2FnZSh7XHJcbiAgICAgICAgICBzZWN0aW9uSWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlcy5jb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICB0aGlzLnVwU2V3YWdlTGlzdCA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIC8v5LiK5ri45rC06LSo5YeA5YyW5Y6CXHJcbiAgICAgIHF1ZXJ5VXBQdXJQbGFudCgpIHtcclxuICAgICAgICBwdXJpZmljYXRpb25QbGFudCh0aGlzLnF1ZXJ5UGFyYW1zKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgdGhpcy51cEpoY0xpc3QgPSByZXMuZGF0YTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgcXVlcnlMYWtlTW9uaXRvcigpIHtcclxuICAgICAgICBsYWtlU2l0ZUxpc3Qoe1xyXG4gICAgICAgICAgZGF0YVRpbWU6IHRoaXMudGltZVR5cGUgPT09IFwi5pe2XCIgPyB0aGlzLm5vd1RpbWUgKyBcIjowMFwiIDogdGhpcy5ub3dUaW1lLFxyXG4gICAgICAgICAgZGF0YVR5cGU6IHRoaXMudGltZVR5cGUsXHJcbiAgICAgICAgICB3YXRlckJvZHlOYW1lOiB0aGlzLnRpdGxlLFxyXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIHRoaXMubGFrZU1vbml0b3JMaXN0ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgdGFiQ2hhbmdlKGRhdGEpIHtcclxuICAgICAgICB0aGlzLnRpbWVUeXBlID0gZGF0YS52YWw7XHJcbiAgICAgICAgdGhpcy5xdWVyeUFsbCgpXHJcbiAgICAgIH0sXHJcbiAgICAgIHRpbWVGbihkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5ub3dUaW1lID0gZGF0YS50b1N0cmluZygpO1xyXG4gICAgICAgIHRoaXMucXVlcnlBbGwoKVxyXG4gICAgICB9LFxyXG4gICAgICB0b01hcCgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNpdGVEZXRhaWxJbmZvKVxyXG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgIG5hbWU6ICdhaXJMb2NhdGlvbk1hcCcsXHJcbiAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICAuLi50aGlzLnNpdGVEZXRhaWxJbmZvLFxyXG4gICAgICAgICAgICBzaXRlSW5pdFR5cGU6ICd3YXRlcicsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgIFwiJHJvdXRlLnF1ZXJ5LmlkXCIodmFsLCBvbGQpIHtcclxuICAgICAgICBpZiAodmFsICE9IG9sZCkge1xyXG4gICAgICAgICAgdGhpcy5saXN0VHlwZSA9ICcnO1xyXG4gICAgICAgICAgdGhpcy5pbml0RGF0YSgpXHJcbiAgICAgICAgICB0aGlzLnF1ZXJ5QWxsKClcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIC5zdGF0aW9uRGV0YWlsIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAuY2FyZC10YWIge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cclxuICAgICAgdWwge1xyXG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcclxuICAgICAgICBtYXJnaW46IDAgMzBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgbGkge1xyXG4gICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgICAgICAgbWFyZ2luOiAxMnB4IDEwcHggMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hY3RpdmUge1xyXG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI4cHg7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCByZ2JhKDczLCAxMTcsIDIzNiwgMSkgMCUsIHJnYmEoMTUxLCAxNzksIDI1NSwgMSkgMTAwJSk7XHJcbiAgICAgICAgICBib3gtc2hhZG93OiAwcHggMnB4IDEwcHggcmdiYSg4NCwgMTI1LCAyMzksIDAuNCk7XHJcbiAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudC13cmFwcGVyIHtcclxuICAgICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTA0cHgpO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgIC5jYXJkLWNvbnRlbnQtZGV0YWlsIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDUwcHgpO1xyXG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3N0eWxlPlxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuICAuc3RhdGlvbkRldGFpbCB7XHJcbiAgICAudmFuLW5hdi1iYXJfX3RleHQge1xyXG4gICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICB9XHJcblxyXG4gICAgLnZhbi1zZWFyY2hfX2NvbnRlbnQtLXJvdW5kIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgxOCwgMTgsIDU0LCAwLjAzKTtcclxuICAgIH1cclxuXHJcbiAgICAudmFuLW5hdi1iYXJfX3JpZ2h0IHtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1xyXG4gICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgfVxyXG5cclxuICAgIC56ZGx4IHtcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgYmFja2dyb3VuZDogdXJsKFwifkAvYXNzZXRzL2x4YmcucG5nXCIpO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2l0ZS1hbmFseXNpcyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzogOXB4IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCJ+QC9hc3NldHMvc2l0ZS1hbmFseXNpcy5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgY29sb3I6IHJnYmEoODQsIDExNywgMjQ4LCAxKTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxuXHJcbiAgLndhcm5pbmctYm94IHtcclxuICAgIG1hcmdpbjogMHB4IDhweCA3cHg7XHJcbiAgICBwYWRkaW5nOiA2cHggMTVweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxNDEsIDI2LCAwLjA1KTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAxNDEsIDI2LCAwLjIpO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gIH1cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtbGlzdFwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaXN0LXRvcFwiLCBvbjogeyBjbGljazogX3ZtLm9uQ2hhbmdlU2hvdyB9IH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaXN0LXRpdGxlXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSArIFwi55uR5rWL5pat6Z2iXCIpLFxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaXN0LWxlbmd0aFwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5saXN0Lmxlbmd0aCkgKyBcIuS4qlwiKSxcbiAgICAgICAgXSksXG4gICAgICAgIF92bS5saXN0Lmxlbmd0aCA+IDBcbiAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxpc3QtcmlnaHRcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLnNob3dcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJ2YW4taWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYXJyb3ctZG93blwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiI2E2YTZhNlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICA6IF9jKFwidmFuLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwiYXJyb3ctdXBcIiwgY29sb3I6IFwiI2E2YTZhNlwiLCBzaXplOiBcIjEyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgXSksXG4gICAgICBfdm0uc2hvd1xuICAgICAgICA/IF92bS5fbChfdm0ubGlzdCwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtaW5mb1wiLFxuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGhlaWdodDogXCJhdXRvXCIgfSxcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogaXRlbS56dCA9PSBcIui2hVwiID8gXCJyZ2JhKDI1NCwgNzksIDIsIDAuMDMpXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udG9TdGF0aW9uKGl0ZW0pXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxpc3QtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGlzdC1tY1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLm5hbWUpKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaXN0LXh6XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInh6LXdvcmRzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cmwoXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5qdWRnZUxldmVsKF92bS5yZXBsYWNlU3RyaW5nKGl0ZW0ubGV2ZWwpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnJlcGxhY2VTdHJpbmcoaXRlbS5sZXZlbCkgfHwgXCItXCIpKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaXN0LXdvcmRzXCIgfSwgW192bS5fdihcIuebruagh1wiKV0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaXN0LW1iXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibWItd29yZHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmp1ZGdlVGFyZ2V0TGV2ZWwoX3ZtLnJlcGxhY2VTdHJpbmcoaXRlbS50YXJnZXQpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ucmVwbGFjZVN0cmluZyhpdGVtLnRhcmdldCkgfHwgXCItXCIpKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJjYXJkLWxpc3RcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGlzdC10b3BcIiwgb246IHsgY2xpY2s6IF92bS5vbkNoYW5nZVNob3cgfSB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGlzdC10aXRsZVwiIH0sIFtfdm0uX3YoXCLlkajovrnmtonmsLTmsaHmn5PmupBcIildKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaXN0LWxlbmd0aFwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS53YXRlclBvbGx1dGluTnVtKSArIFwi5a62XCIpLFxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLmxpc3QubGVuZ3RoID4gMFxuICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGlzdC1yaWdodFwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uc2hvd1xuICAgICAgICAgICAgICAgICAgPyBfYyhcInZhbi1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJhcnJvdy1kb3duXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjYTZhNmE2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIDogX2MoXCJ2YW4taWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJhcnJvdy11cFwiLCBjb2xvcjogXCIjYTZhNmE2XCIsIHNpemU6IFwiMTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBdKSxcbiAgICAgIF92bS5fbChfdm0ubGlzdCwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIF92bS5zaG93XG4gICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtY29udGVudFwiLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvQ29tcGFueShpdGVtKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LWxlZnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxlZnQtbmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLm5hbWUpKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fbSgwLCB0cnVlKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LXJpZ2h0XCIgfSwgW1xuICAgICAgX3ZtLl92KFwi5p+l55yLXCIpLFxuICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy90b3JpZ2h0LnBuZ1wiKSwgYWx0OiBcIlwiIH0gfSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtbGlzdFwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaXN0LXRvcFwiLCBvbjogeyBjbGljazogX3ZtLm9uQ2hhbmdlU2hvdyB9IH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaXN0LXRpdGxlXCIgfSwgW192bS5fdihcIuS4iua4uOaOkuaxoeWPo1wiKV0pLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxpc3QtbGVuZ3RoXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmxpc3QubGVuZ3RoKSArIFwi5LiqXCIpLFxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLmxpc3QubGVuZ3RoID4gMFxuICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGlzdC1yaWdodFwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uc2hvd1xuICAgICAgICAgICAgICAgICAgPyBfYyhcInZhbi1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJhcnJvdy1kb3duXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjYTZhNmE2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIDogX2MoXCJ2YW4taWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJhcnJvdy11cFwiLCBjb2xvcjogXCIjYTZhNmE2XCIsIHNpemU6IFwiMTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBdKSxcbiAgICAgIF92bS5fbChfdm0ubGlzdCwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIF92bS5zaG93XG4gICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtY29udGVudFwiLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uRGV0YWlsKGl0ZW0pXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtbGVmdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGVmdC1uYW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0uZGlzY2hhcmdlTWV0aG9kKSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGVmdC13b3Jkc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLmxvY2F0aW9uSW5mbykpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDAsIHRydWUpLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgfSksXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtcmlnaHRcIiB9LCBbXG4gICAgICBfdm0uX3YoXCLmn6XnnItcIiksXG4gICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL3RvcmlnaHQucG5nXCIpLCBhbHQ6IFwiXCIgfSB9KSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1saXN0XCIgfSxcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxpc3QtdG9wXCIsIG9uOiB7IGNsaWNrOiBfdm0ub25DaGFuZ2VTaG93IH0gfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxpc3QtdGl0bGVcIiB9LCBbX3ZtLl92KFwi5LiK5ri45rC06LSo5YeA5YyW5Y6CXCIpXSksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGlzdC1sZW5ndGhcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGlzdC5sZW5ndGgpICsgXCLlrrZcIiksXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0ubGlzdC5sZW5ndGggPiAwXG4gICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsaXN0LXJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5zaG93XG4gICAgICAgICAgICAgICAgICA/IF9jKFwidmFuLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImFycm93LWRvd25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNhNmE2YTZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwiMTJcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgOiBfYyhcInZhbi1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcImFycm93LXVwXCIsIGNvbG9yOiBcIiNhNmE2YTZcIiwgc2l6ZTogXCIxMlwiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF0pLFxuICAgICAgX3ZtLl9sKF92bS5saXN0LCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gX3ZtLnNob3dcbiAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdC1jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udG9KaGMoaXRlbSlcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC1sZWZ0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZWZ0LW5hbWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5lbnRlcnByaXNlTmFtZSkpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxlZnQtd29yZHNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuS4juWbveiAg+aWremdouebtOe6v+i3neemu++8mlwiICsgX3ZtLl9zKGl0ZW0uZGlzdGFuY2UpKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fbSgwLCB0cnVlKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LXJpZ2h0XCIgfSwgW1xuICAgICAgX3ZtLl92KFwi5p+l55yLXCIpLFxuICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy90b3JpZ2h0LnBuZ1wiKSwgYWx0OiBcIlwiIH0gfSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtbGlzdFwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaXN0LXRvcFwiLCBvbjogeyBjbGljazogX3ZtLm9uQ2hhbmdlU2hvdyB9IH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaXN0LXRpdGxlXCIgfSwgW192bS5fdihcIuS4iua4uOawtOW6k1wiKV0pLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxpc3QtbGVuZ3RoXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmxpc3QubGVuZ3RoKSArIFwi5LiqXCIpLFxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLmxpc3QubGVuZ3RoID4gMFxuICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGlzdC1yaWdodFwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uc2hvd1xuICAgICAgICAgICAgICAgICAgPyBfYyhcInZhbi1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJhcnJvdy1kb3duXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjYTZhNmE2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIDogX2MoXCJ2YW4taWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJhcnJvdy11cFwiLCBjb2xvcjogXCIjYTZhNmE2XCIsIHNpemU6IFwiMTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBdKSxcbiAgICAgIF92bS5fbChfdm0ubGlzdCwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIF92bS5zaG93XG4gICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpc3QtY29udGVudFwiLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvSmhjKGl0ZW0pXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtbGVmdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGVmdC1uYW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0uYm9keU5hbWUpICsgXCIo5bqT5a6577yaXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIi1cIildKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5Lq/bcKzKVwiKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZWZ0LXdvcmRzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLmnIjooaXmsLTph4/vvJpcIiArIF92bS5fcyhpdGVtLmRpc3RhbmNlKSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIH0pLFxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLl9tKDApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWxpc3RcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxpc3QtdG9wXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxpc3QtdGl0bGVcIiB9LCBbX3ZtLl92KFwi5LiK5ri45pSv5rWBXCIpXSksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGlzdC1sZW5ndGhcIiB9LCBbX3ZtLl92KFwiMOS4qlwiKV0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtbGlzdFwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaXN0LXRvcFwiLCBvbjogeyBjbGljazogX3ZtLm9uQ2hhbmdlU2hvdyB9IH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaXN0LXRpdGxlXCIgfSwgW192bS5fdihcIuS4iua4uOebkea1i+aWremdolwiKV0pLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxpc3QtbGVuZ3RoXCIgfSwgW1xuICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmxpc3QubGVuZ3RoKSArIFwi5LiqXCIpLFxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLmxpc3QubGVuZ3RoID4gMFxuICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGlzdC1yaWdodFwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uc2hvd1xuICAgICAgICAgICAgICAgICAgPyBfYyhcInZhbi1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJhcnJvdy1kb3duXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjYTZhNmE2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcIjEyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIDogX2MoXCJ2YW4taWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJhcnJvdy11cFwiLCBjb2xvcjogXCIjYTZhNmE2XCIsIHNpemU6IFwiMTJcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBdKSxcbiAgICAgIF92bS5zaG93XG4gICAgICAgID8gX3ZtLl9sKF92bS5saXN0LCBmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdC1pbmZvXCIsXG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcImF1dG9cIiB9LFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBpdGVtLnp0ID09IFwi6LaFXCIgPyBcInJnYmEoMjU0LCA3OSwgMiwgMC4wMylcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGlzdC1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25DaGFuZ2VTaG93RmFjdG9yKGl0ZW0sIGkpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGlzdC1tY1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0uc2l0ZU5hbWUpKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGlzdC14elwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInh6LXdvcmRzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cmwoXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmp1ZGdlTGV2ZWwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZXBsYWNlU3RyaW5nKGl0ZW0ud2F0ZXJRdWFsaXR5TGV2ZWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5yZXBsYWNlU3RyaW5nKGl0ZW0ud2F0ZXJRdWFsaXR5TGV2ZWwpIHx8IFwiLVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxpc3Qtd29yZHNcIiB9LCBbX3ZtLl92KFwi55uu5qCHXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGlzdC1tYlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJtYi13b3Jkc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5qdWRnZVRhcmdldExldmVsKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlcGxhY2VTdHJpbmcoaXRlbS53YXRlclF1YWxpdHlUYXJnZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucmVwbGFjZVN0cmluZyhpdGVtLndhdGVyUXVhbGl0eVRhcmdldCkgfHwgXCItXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uaXNTaG93ID09PSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInZhbi1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcImFycm93LWRvd25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjYTZhNmE2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF9jKFwidmFuLWljb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiYXJyb3ctdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjYTZhNmE2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCIxMlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgaXRlbS5pc1Nob3cgPT09IHRydWVcbiAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZnMgc2l0ZS1pbmZvLW5hbWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiDmlbDmja7ml7bpl7QgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS5tb25pdG9yaW5nVGltZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS50b1N0YXRpb24oaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIueCueWHu+afpeeci+ivpuaDhVwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzaXRlLWluZm8tZmFjdG9yXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKGl0ZW0uZmFjdG9yTGlzdCwgZnVuY3Rpb24gKGl0ZW1DKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW1DLm92ZXJTdGFuZGFyZCA9PT0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNpdGUtaW5mby1mYWN0b3ItaXRlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiBcIiArIF92bS5fcyhpdGVtQy5mYWN0b3JOYW1lKSArIFwiIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGl0ZW1DLnZhbHVlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtQy51bml0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNpdGUtaW5mby1mYWN0b3ItaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJyZWRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICsgX3ZtLl9zKGl0ZW1DLmZhY3Rvck5hbWUpICsgXCIgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaXRlbUMudmFsdWUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGl0ZW1DLnVuaXQpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaXRlbUMubXVsdGlwbGllcikgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIuWAjSBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uX20oMClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtbGlzdFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGlzdC10b3BcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGlzdC10aXRsZVwiIH0sIFtfdm0uX3YoXCLosIPmsLTlt6XnqItcIildKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaXN0LWxlbmd0aFwiIH0sIFtfdm0uX3YoXCIw5LiqXCIpXSksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uX20oMClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtbGlzdFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGlzdC10b3BcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGlzdC10aXRsZVwiIH0sIFtfdm0uX3YoXCLlkajovrnmsJTosaHnq5nngrlcIildKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsaXN0LWxlbmd0aFwiIH0sIFtfdm0uX3YoXCIw5LiqXCIpXSksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwic3RhdGlvbkRldGFpbFwiIH0sXG4gICAgW1xuICAgICAgX2MoXCJ2YW4tbmF2LWJhclwiLCB7XG4gICAgICAgIGF0dHJzOiB7IFwibGVmdC1hcnJvd1wiOiBcIlwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgXCJjbGljay1sZWZ0XCI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0uJHJvdXRlci5nbygtMSlcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IFwidGl0bGVcIixcbiAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgX3ZtLmxldmVsXG4gICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiemRseFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5sZXZlbCkpLFxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpbnRvLW1hcFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBwcm94eTogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICBdKSxcbiAgICAgIH0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRhYlwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgIF92bS5fbChfdm0uYXJyLCBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IHsgYWN0aXZlOiBfdm0udGltZVR5cGUgPT0gaXRlbS52YWwgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS50YWJDaGFuZ2UoaXRlbSwgaW5kZXgpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ubGFiZWwpICsgXCIgXCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIDBcbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudC13cmFwcGVyXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidGltZVNlbGVjdFwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBvcHRpb246IF92bS50aW1lVHlwZSwgdGltZTogX3ZtLm5vd1RpbWUgfSxcbiAgICAgICAgICAgIG9uOiB7IGdldFRpbWU6IF92bS50aW1lRm4gfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtY29udGVudC1kZXRhaWxcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInN0YXR1c0l0ZW1cIiwgeyBhdHRyczogeyBkYXRhT2JqOiBfdm0uZGF0YW9iaiB9IH0pLFxuICAgICAgICAgICAgICBfYyhcIm1vbml0b3JJdGVtXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgaWQ6IF92bS5pZCxcbiAgICAgICAgICAgICAgICAgIHRpbWU6IF92bS5ub3dUaW1lLFxuICAgICAgICAgICAgICAgICAgdGltZVR5cGU6IF92bS50aW1lVHlwZSxcbiAgICAgICAgICAgICAgICAgIGxpc3RUeXBlOiBfdm0ubGlzdFR5cGUsXG4gICAgICAgICAgICAgICAgICBzdGF0aW9uTmFtZTogX3ZtLnN0YXRpb25OYW1lLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgIF92bS5saXN0VHlwZSA9PT0gXCLmuZblupNcIlxuICAgICAgICAgICAgICAgID8gX2MoXCJsYWtlTW9uaXRvclNpdGVcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGxpc3Q6IF92bS5sYWtlTW9uaXRvckxpc3QsXG4gICAgICAgICAgICAgICAgICAgICAgdGltZTogX3ZtLm5vd1RpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgdGltZVR5cGU6IF92bS50aW1lVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogX3ZtLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ1cFNpdGVcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0OiBfdm0udXBMaXN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogX3ZtLm5vd1RpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lVHlwZTogX3ZtLnRpbWVUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInVwUml2ZXJcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidXBPdXRsZXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0OiBfdm0udXBTZXdhZ2VMaXN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogX3ZtLm5vd1RpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lVHlwZTogX3ZtLnRpbWVUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInVwUHVyUGxhbnRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0OiBfdm0udXBKaGNMaXN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogX3ZtLm5vd1RpbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aW1lVHlwZTogX3ZtLnRpbWVUeXBlLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInVwUmVzZXJ2b2lyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdDogX3ZtLnVwUmVzZXJ2b2lyTGlzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IF92bS5ub3dUaW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZVR5cGU6IF92bS50aW1lVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ3YXRlclByb2plY3RcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwid2VhdGhlclN0YXRpb25cIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3Vycm91bmRQb2xsdXRpb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBfdm0uaWQsIGRhdGFPYmo6IF92bS5zaXRlRGV0YWlsSW5mbyB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgICksXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNpdGUtYW5hbHlzaXNcIiB9LCBbXG4gICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgIHN0YXRpY1N0eWxlOiB7IFwicGFkZGluZy1yaWdodFwiOiBcIjEwcHhcIiB9LFxuICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy9zaXRlLWFuYWx5c2lzLWljb24ucG5nXCIpLCB3aWR0aDogXCIyNFwiIH0sXG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiDnlJ/mgIHnjq/looPlpKfmlbDmja7liIbmnpDnu5PmnpwgXCIpLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIid1c2Ugc3RyaWN0JztcbnZhciAkZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5mb3JFYWNoO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2ZvckVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbm1vZHVsZS5leHBvcnRzID0gIVNUUklDVF9NRVRIT0QgPyBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gIHJldHVybiAkZm9yRWFjaCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWZvcmVhY2ggLS0gc2FmZVxufSA6IFtdLmZvckVhY2g7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgb3JkaW5hcnlUb1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vcmRpbmFyeS10by1wcmltaXRpdmUnKTtcblxudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG5cbi8vIGBEYXRlLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KWAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWRhdGUucHJvdG90eXBlLUBAdG9wcmltaXRpdmVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGhpbnQpIHtcbiAgYW5PYmplY3QodGhpcyk7XG4gIGlmIChoaW50ID09PSAnc3RyaW5nJyB8fCBoaW50ID09PSAnZGVmYXVsdCcpIGhpbnQgPSAnc3RyaW5nJztcbiAgZWxzZSBpZiAoaGludCAhPT0gJ251bWJlcicpIHRocm93IG5ldyAkVHlwZUVycm9yKCdJbmNvcnJlY3QgaGludCcpO1xuICByZXR1cm4gb3JkaW5hcnlUb1ByaW1pdGl2ZSh0aGlzLCBoaW50KTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciAkZmlsdGVyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZpbHRlcjtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG5cbnZhciBIQVNfU1BFQ0lFU19TVVBQT1JUID0gYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCgnZmlsdGVyJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZmlsdGVyYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZpbHRlclxuLy8gd2l0aCBhZGRpbmcgc3VwcG9ydCBvZiBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBmb3JjZWQ6ICFIQVNfU1BFQ0lFU19TVVBQT1JUIH0sIHtcbiAgZmlsdGVyOiBmdW5jdGlvbiBmaWx0ZXIoY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgICByZXR1cm4gJGZpbHRlcih0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciBkYXRlVG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGF0ZS10by1wcmltaXRpdmUnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1BSSU1JVElWRSA9IHdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcbnZhciBEYXRlUHJvdG90eXBlID0gRGF0ZS5wcm90b3R5cGU7XG5cbi8vIGBEYXRlLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWRhdGUucHJvdG90eXBlLUBAdG9wcmltaXRpdmVcbmlmICghaGFzT3duKERhdGVQcm90b3R5cGUsIFRPX1BSSU1JVElWRSkpIHtcbiAgZGVmaW5lQnVpbHRJbihEYXRlUHJvdG90eXBlLCBUT19QUklNSVRJVkUsIGRhdGVUb1ByaW1pdGl2ZSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xuXG52YXIgRk9SQ0VEID0gIURFU0NSSVBUT1JTIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHsgbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKDEpOyB9KTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQsIHNoYW06ICFERVNDUklQVE9SUyB9LCB7XG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgICByZXR1cm4gbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRvSW5kZXhlZE9iamVjdChpdCksIGtleSk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvcnNcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBzaGFtOiAhREVTQ1JJUFRPUlMgfSwge1xuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9iamVjdCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gICAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICAgIHZhciBrZXlzID0gb3duS2V5cyhPKTtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIga2V5LCBkZXNjcmlwdG9yO1xuICAgIHdoaWxlIChrZXlzLmxlbmd0aCA+IGluZGV4KSB7XG4gICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIGtleSA9IGtleXNbaW5kZXgrK10pO1xuICAgICAgaWYgKGRlc2NyaXB0b3IgIT09IHVuZGVmaW5lZCkgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIG5hdGl2ZUtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgRkFJTFNfT05fUFJJTUlUSVZFUyA9IGZhaWxzKGZ1bmN0aW9uICgpIHsgbmF0aXZlS2V5cygxKTsgfSk7XG5cbi8vIGBPYmplY3Qua2V5c2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5rZXlzXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBGQUlMU19PTl9QUklNSVRJVkVTIH0sIHtcbiAga2V5czogZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGRlZmluZVdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbC1kZWZpbmUnKTtcbnZhciBkZWZpbmVTeW1ib2xUb1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zeW1ib2wtZGVmaW5lLXRvLXByaW1pdGl2ZScpO1xuXG4vLyBgU3ltYm9sLnRvUHJpbWl0aXZlYCB3ZWxsLWtub3duIHN5bWJvbFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zeW1ib2wudG9wcmltaXRpdmVcbmRlZmluZVdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcblxuLy8gYFN5bWJvbC5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV1gIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zeW1ib2wucHJvdG90eXBlLUBAdG9wcmltaXRpdmVcbmRlZmluZVN5bWJvbFRvUHJpbWl0aXZlKCk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIERPTUl0ZXJhYmxlcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20taXRlcmFibGVzJyk7XG52YXIgRE9NVG9rZW5MaXN0UHJvdG90eXBlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS10b2tlbi1saXN0LXByb3RvdHlwZScpO1xudmFyIGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2gnKTtcbnZhciBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLW5vbi1lbnVtZXJhYmxlLXByb3BlcnR5Jyk7XG5cbnZhciBoYW5kbGVQcm90b3R5cGUgPSBmdW5jdGlvbiAoQ29sbGVjdGlvblByb3RvdHlwZSkge1xuICAvLyBzb21lIENocm9tZSB2ZXJzaW9ucyBoYXZlIG5vbi1jb25maWd1cmFibGUgbWV0aG9kcyBvbiBET01Ub2tlbkxpc3RcbiAgaWYgKENvbGxlY3Rpb25Qcm90b3R5cGUgJiYgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoICE9PSBmb3JFYWNoKSB0cnkge1xuICAgIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eShDb2xsZWN0aW9uUHJvdG90eXBlLCAnZm9yRWFjaCcsIGZvckVhY2gpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCA9IGZvckVhY2g7XG4gIH1cbn07XG5cbmZvciAodmFyIENPTExFQ1RJT05fTkFNRSBpbiBET01JdGVyYWJsZXMpIHtcbiAgaWYgKERPTUl0ZXJhYmxlc1tDT0xMRUNUSU9OX05BTUVdKSB7XG4gICAgaGFuZGxlUHJvdG90eXBlKGdsb2JhbFRoaXNbQ09MTEVDVElPTl9OQU1FXSAmJiBnbG9iYWxUaGlzW0NPTExFQ1RJT05fTkFNRV0ucHJvdG90eXBlKTtcbiAgfVxufVxuXG5oYW5kbGVQcm90b3R5cGUoRE9NVG9rZW5MaXN0UHJvdG90eXBlKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiQC9hc3NldHMvbGlzdGJnLnBuZ1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNhcmQtbGlzdCB7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBvcGFjaXR5OiAxO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoNjgsIDEyMywgMjUyLCAwLjEpIDAlLCByZ2JhKDY4LCAxMjMsIDI1MiwgMCkgNDBweCksIHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBtYXJnaW46IDAgOXB4IDEwcHggOXB4O1xcbn1cXG4uY2FyZC1saXN0IC5saXN0LXRvcCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uY2FyZC1saXN0IC5saXN0LXRvcCAubGlzdC10aXRsZSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgY29sb3I6ICM0NDdiZmM7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxufVxcbi5jYXJkLWxpc3QgLmxpc3QtdG9wIC5saXN0LWxlbmd0aCB7XFxuICB3aWR0aDogYXV0bztcXG4gIGhlaWdodDogMThweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG9wYWNpdHk6IDE7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIHBhZGRpbmc6IDAgNnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzI3ZDA0MztcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBjb2xvcjogIzI3ZDA0MztcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG4uY2FyZC1saXN0IC5saXN0LXRvcCAubGlzdC1yaWdodCB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDIwcHg7XFxufVxcbi5jYXJkLWxpc3QgLmxpc3QtaW5mbyB7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMTJweCk7XFxuICBoZWlnaHQ6IDU0cHg7XFxuICBtYXJnaW46IDhweCA2cHg7XFxuICBvcGFjaXR5OiAxO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbiAgYm94LXNoYWRvdzogMHB4IDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxufVxcbi5jYXJkLWxpc3QgLmxpc3QtaW5mbyAubGlzdC1pdGVtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA1NHB4O1xcbn1cXG4uY2FyZC1saXN0IC5saXN0LWluZm8gLmxpc3QtbWMge1xcbiAgd2lkdGg6IGNhbGMoNTAlIC0gMTVweCk7XFxuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6IGJsYWNrO1xcbn1cXG4uY2FyZC1saXN0IC5saXN0LWluZm8gLmxpc3QteHoge1xcbiAgd2lkdGg6IDI1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uY2FyZC1saXN0IC5saXN0LWluZm8gLmxpc3QteHogLnh6LXdvcmRzIHtcXG4gIHdpZHRoOiA0MnB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDEwMCU7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xcbn1cXG4uY2FyZC1saXN0IC5saXN0LWluZm8gLmxpc3Qtd29yZHMge1xcbiAgd2lkdGg6IDEwJTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbn1cXG4uY2FyZC1saXN0IC5saXN0LWluZm8gLmxpc3QtbWIge1xcbiAgd2lkdGg6IDE1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uY2FyZC1saXN0IC5saXN0LWluZm8gLmxpc3QtbWIgLm1iLXdvcmRzIHtcXG4gIHdpZHRoOiAzMHB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbn1cXG4uY2FyZC1saXN0IC5saXN0LWNvbnRlbnQge1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDEycHgpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luOiA2cHg7XFxuICBvcGFjaXR5OiAxO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLmNhcmQtbGlzdCAubGlzdC1jb250ZW50IC5jb250ZW50LWxlZnQge1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDY2cHgpO1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5jYXJkLWxpc3QgLmxpc3QtY29udGVudCAuY29udGVudC1sZWZ0IC5sZWZ0LW5hbWUge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxufVxcbi5jYXJkLWxpc3QgLmxpc3QtY29udGVudCAuY29udGVudC1sZWZ0IC5sZWZ0LXdvcmRzIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG59XFxuLmNhcmQtbGlzdCAubGlzdC1jb250ZW50IC5jb250ZW50LXJpZ2h0IHtcXG4gIHdpZHRoOiA2NnB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIGZsb2F0OiByaWdodDtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbn1cXG4uY2FyZC1saXN0IC5saXN0LWNvbnRlbnQgLmNvbnRlbnQtcmlnaHQgaW1nIHtcXG4gIHdpZHRoOiAxNHB4O1xcbiAgaGVpZ2h0OiAxNHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDJweDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc2l0ZS1pbmZvLWZhY3RvcltkYXRhLXYtYThkYjRjODZdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW46IDRweCA5cHg7XFxuICBwYWRkaW5nOiA2cHggMTJweCAycHg7XFxuICBiYWNrZ3JvdW5kOiAjZTFlOWZjO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLnNpdGUtaW5mby1mYWN0b3IgLnNpdGUtaW5mby1mYWN0b3ItaXRlbVtkYXRhLXYtYThkYjRjODZdIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbn1cXG4uc2l0ZS1pbmZvLWZhY3RvciAuc2l0ZS1pbmZvLWZhY3Rvci1pdGVtIHNwYW5bZGF0YS12LWE4ZGI0Yzg2XSB7XFxuICBjb2xvcjogIzEyMTIzNjtcXG59XFxuLnNpdGUtaW5mby1uYW1lW2RhdGEtdi1hOGRiNGM4Nl0ge1xcbiAgcGFkZGluZzogNHB4IDE1cHg7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5zaXRlLWluZm8tbmFtZSBzcGFuW2RhdGEtdi1hOGRiNGM4Nl0ge1xcbiAgY29sb3I6ICMxMjEyMzY7XFxufVxcbi5zaXRlLWluZm8tbmFtZSAubGlua1tkYXRhLXYtYThkYjRjODZdIHtcXG4gIGNvbG9yOiAjNTQ3NWY4O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnN0YXRpb25EZXRhaWxbZGF0YS12LTM4Y2M1ODc0XSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5zdGF0aW9uRGV0YWlsIC5jYXJkLXRhYltkYXRhLXYtMzhjYzU4NzRdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG59XFxuLnN0YXRpb25EZXRhaWwgLmNhcmQtdGFiIHVsW2RhdGEtdi0zOGNjNTg3NF0ge1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xcbiAgbWFyZ2luOiAwIDMwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4uc3RhdGlvbkRldGFpbCAuY2FyZC10YWIgdWwgbGlbZGF0YS12LTM4Y2M1ODc0XSB7XFxuICBmbGV4OiAxO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBtYXJnaW46IDEycHggMTBweCAwO1xcbn1cXG4uc3RhdGlvbkRldGFpbCAuY2FyZC10YWIgdWwgLmFjdGl2ZVtkYXRhLXYtMzhjYzU4NzRdIHtcXG4gIGhlaWdodDogMzBweDtcXG4gIG9wYWNpdHk6IDE7XFxuICBib3JkZXItcmFkaXVzOiAyOHB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyNWRlZywgIzQ5NzVlYyAwJSwgIzk3YjNmZiAxMDAlKTtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggMTBweCByZ2JhKDg0LCAxMjUsIDIzOSwgMC40KTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uc3RhdGlvbkRldGFpbCAuY29udGVudC13cmFwcGVyW2RhdGEtdi0zOGNjNTg3NF0ge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTA0cHgpO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5zdGF0aW9uRGV0YWlsIC5jb250ZW50LXdyYXBwZXIgLmNhcmQtY29udGVudC1kZXRhaWxbZGF0YS12LTM4Y2M1ODc0XSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNTBweCk7XFxuICBvdmVyZmxvdzogYXV0bztcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiQC9hc3NldHMvbHhiZy5wbmdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSByZXF1aXJlKFwiQC9hc3NldHMvc2l0ZS1hbmFseXNpcy5wbmdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3RhdGlvbkRldGFpbCAudmFuLW5hdi1iYXJfX3RleHQge1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi5zdGF0aW9uRGV0YWlsIC52YW4tc2VhcmNoX19jb250ZW50LS1yb3VuZCB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDE4LCAxOCwgNTQsIDAuMDMpO1xcbn1cXG4uc3RhdGlvbkRldGFpbCAudmFuLW5hdi1iYXJfX3JpZ2h0IHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbn1cXG4uc3RhdGlvbkRldGFpbCAuemRseCB7XFxuICB3aWR0aDogMjBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIik7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBtYXJnaW4tcmlnaHQ6IDRweDtcXG59XFxuLnNpdGUtYW5hbHlzaXMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDlweCAwO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxuICBjb2xvcjogIzU0NzVmODtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ud2FybmluZy1ib3gge1xcbiAgbWFyZ2luOiAwcHggOHB4IDdweDtcXG4gIHBhZGRpbmc6IDZweCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE0MSwgMjYsIDAuMDUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDE0MSwgMjYsIDAuMik7XFxuICBmb250LXNpemU6IDEycHg7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdXBTaXRlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWE4ZGI0Yzg2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMjJjMjA1N2VcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91cFNpdGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YThkYjRjODYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91cFNpdGUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YThkYjRjODYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzhjYzU4NzQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIyOGQxY2NjNFwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM4Y2M1ODc0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzhjYzU4NzQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmbGFuZz1zY3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIyYjY0NDE5OVwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmbGFuZz1zY3NzJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUF0SUFBQUJtQ0FZQUFBRG1ybmJnQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBY3lTVVJCVkhpYzdkMWJqRjFWSGNmeDM5cG5ibTBIMms1YVo2cWxVS2JJTkpUWVVpdFZpZ1JiVUNLaVJORkV3NU1SZ3I2UXFLU0pFSnNveEFmamc0bEVJVHlRRUhrdzhaSVlJeVFZc1VaTkRBUnZZQkFNb1Y2NGc3U0Z0dE01eXdkYWVySFhqZVhNME0vbjVjelorK3lWLzNuN1ptZk5QaVZ2d0lhYmRxMHF0ZlArYnEwWGxXUmRrb1Z2WkQwQUFEakJuazNONWxySy9YM04xUDMzZkczZ0QyMFhLc2Q3d1ljMjFUTjJUKzcrYkZLdUxpWHZhSkpTU2tyZDg5cDJFQUFBT05GcVRVMVNhMDJ0cjcwK1dWTHVuRXB6eHk5dUx2ODhucldPT1h3M2ZHWFgycVQ1VXFmSkpmMTlHZXpyWkdEMlFNcTVTMHNtRnBlTXprMUc1eWVqODBybURCMzNkd0lBZ0JObSs0N2txUmRybm5rcGVmby95U05iYXY3MFJNMnJPOU9kbk1xdXlkM1oyYTM1YVZPbnZuSHZMWU4vUHBZMWp4clNWOXhRVDNtMXYvdjFwcWxYelJuSzNNSCt6TDVzZFpOM241VXNQODBOYUFBQVpxNkhuNno1L2Q5cTdubXdadWV1c20zYnpyeGN1N2xyc3IvNTZpODNsUjFIdXZhSUpYenhqVHZPN3RUT2QwNmQxWnd6ZHppakZ5eFB1Zks5VFVaTytmOStBUUFBNktYblhrNSsrSnR1ZnZmWGRGL2FYcC9aK21vZWFMTHJ1bnR2bnIzbGNOY2NOcVEzM0ZpWHAwN2R1bWlrbkhQNndpeTg5ckltaXhlY21NRUJBR0E2ZU9LWm10dC9YclBsdWZyc3YxL0lnMDA2bjd2MzVuTEltRDVrU0svZnVPUE0wdW43OXZpaWN2NTU0MWx3OVFlYXpCbzRzVU1EQU1CMHNIMUhjdWQ5M2Z6eGlUejMrTC9xcjJwMmZQNitXNGFmUHZoei94UFNsMjZxYit0T1RuMXIrV2xsL1lhVlpleUs4KzJEQmdEZzVQT0RYOWRzL2t0OTZ1RW42MDg2dXpwZnZQZWJaZnYrNTV2OTMxeTFxUTUwSjd0ZlhuRjZXYnZtckl4OTVEMGlHZ0NBazlQSDMxZHk3aGtaTy9lTXNxRTcxTDArdFI0UXh3ZUU5SXU3Sno5ejl0dnJCUk9MTS82SmRVMktqZ1lBNENUVk5NbW5MbXd5dmlqalp5K3FINzdrcGx4MndQbTlmMXg2WTEwNk1xZHowY1NTY3Y1SDE5b1REUUFBcDg1T0xsOVRNckdrbkQ5M3p0UW4xMjE4YWY3ZWM2K0hkRGZkeTFlZlZWYXZYRnFhc2ZtSFhnZ0FBRTQyWjR5V1RDd3V6WnF6bXRXeis0Ylg3ejNlSk1rSE45WmxTMGZyeE5MUnJGanpUdnM1QUFCZ2Yyc25TaFl2eUlyVFIzUHh1bzExZnJJbnBDYzdVOHRYbmRtc2ZOZlNaTEMvdDBNQ0FNQjBNenlVckRnOVdYVm1zM0t3UHhOSjBseTFxUTUwYWthWExLeXJGeTl3TnhvQUFBN2x0QVVsU3hibXZFNTNha21TOUwxWU03WitWVm0yY0c0Wm5EM1k2L0VBQUdCNm1qY25tVHM3UXhldkxLdUdicWcvYStya3Jubkx4c3I0NkR4M293RUE0SEJLU1Vibko4dkd5dmkyL2gwalRWUEt3TmhJbHN3Yjd2Vm9BQUF3dlkwTWw0eU5aRW5wbHNHbVRLWE9IeTZMQnZ0NlBSWUFBRXh2UXdQSi9PR3lxTDh6V0pwdVgvOHJ3ME1aNmV2MGVpd0FBSmplQnZxUzRhR003RXAyTjVuY3NYM1dZT1lJYVFBQU9MSytUakpyTUhNRys3S3o2Y3dhMnVibndBRUE0T2hLU1dZTkpOM2tsYVo1UHR1SGhEUUFBQnlUb1lHa2VUN2JTNUxVV211dkJ3SUFnSm1pbEZLYVhnOEJBQUF6a1pBR0FJQVdoRFFBQUxRZ3BBRUFvQVVoRFFBQUxRaHBBQUJvUVVnREFFQUxRaG9BQUZvUTBnQUEwSUtRQmdDQUZvUTBBQUMwSUtRQkFLQUZJUTBBQUMwSWFRQUFhRUZJQXdCQUMwSWFBQUJhRU5JQUFOQ0NrQVlBZ0JhRU5BQUF0Q0NrQVFDZ0JTRU5BQUF0Q0drQUFHaEJTQU1BUUF0Q0dnQUFXaERTQUFEUWdwQUdBSUFXaERRQUFMUWdwQUVBb0FVaERRQUFMUWhwQUFCb1FVZ0RBRUFMUWhvQUFGb1EwZ0FBMElLUUJnQ0FGb1EwQUFDMElLUUJBS0FGSVEwQUFDMElhUUFBYUVGSUF3QkFDMElhQUFCYUVOSUFBTkNDa0FZQWdCYUVOQUFBdENDa0FRQ2dCU0VOQUFBdENHa0FBR2hCU0FNQVFBdENHZ0FBV2hEU0FBRFFncEFHQUlBV2hEUUFBTFFncEFFQW9BVWhEUUFBTFFocEFBQm9RVWdEQUVBTFFob0FBRm9RMGdBQTBJS1FCZ0NBRnZhRzlOYWVUZ0VBQURQSDFtUmZTRC9kdzBFQUFHQW1lVHJaRjlLUDlYQVFBQUNZU1I1TDlvWDBRejBjQkFBQVpwS0hrbjBodmJtSGd3QUF3RXl5T1VsS2t0UmFTNUtYa3d6M2NpSUFBSmptdGlhWlcwcXBUWktVVW1xUzcvZDJKZ0FBbVBidTN0UE9CenhIK3JZZURRTUFBRFBGNjgzOGVraVhVaDVJY2xkUHhnRUFnT252cmozTm5HVFBIdW05YXEzalNSNUowdjltVHdVQUFOUFlaSktKVXNyZjl4NDQ0Q2ZDU3ltUEo3bit6WjRLQUFDbXVldjNqK2prb0R2U2U5VmF2NWZrbWpkbEpBQUFtTjV1SzZWY2UvREJRNFowa3RSYWY1VGtZeWQwSkFBQW1ONStYRXE1OGxBbkRodlNpWmdHQU9Da2R0aUlUZzdhSTMyd1BSZDZMQjRBQUNlYjd4NHBvcE9qaEhTUzdOa1A4b1c4OXArS0FBRHdWcll0eVRXbGxPdU85c0dqaG5TU2xGSnVUYkk4bmpNTkFNQmIxMjE1N1JGM3R4L0xoNCs0Ui9wUWFxMnI4OW9UUFQ2ZFpQaDRyd2NBZ0dsa1M1SzdrOXhSU25uMGVDNDg3cERlcTlaYWtseVc1TUlrSzVNc1N6S2E1SlMyYXdJQXdBa3lsZVNGSlA5SThtaVNCNU5zTHFYOHRxZFRBUURBeWVhL25jNVVPUWJNT0FjQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURBQUFBQXVDQVlBQUFCdTNwcHNBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFvT1NVUkJWR2lCN1psN2pGM0ZmY2MvdjVsenpqM24zbjN2c3JaM0YzWmpzTEdOTVRVbUJCZWFBRzdJaTBRRlZKSTBMYXJTSkdxclNrV3Qya1lWcEtWVjBvcFVDb2xVTmFqL1ZFcFNsRVNsSkcxSUs0dmFVTndZSjlpWXVNYjQvVnpiKy9aOW51Zjgrc2NsTkZRcWErZDZpeXJ4dTNjMG1xdWorWDAvZDJaKzg1czU4UC9jN0ZKMnJvOC83c3ROTjdGOSszWmRTajlMWnJWYjF2LzFTMnVHMzdlVVBzeFNkdjZOK3gvWmZlSmpELzk0S1gwc0tjRDRuYjk0WGRjOUgxdStsRDZXRktBcjVOWnk2SzlhU2gvU2FRZmJ0bTN6b3JIYnk5MWQ2ZGpaMmV5QnczWHpubHV2OHNjTTJtZUVpa0tPYXNNSXMvOTJNTjYvWlZYMFQrV0svdy8wMEJxRFdFUTZXdUFkQWJ4NHZMWTI4TUo3UmZUam5wWFZSdkNmZUxISnI5MWN3VGZTN2x4QVVHWnFPY2N2S0RlTytLU0YxaDFzUzNQM1RWdXRmbmZObWl0cS82Y0FxaW92bmt4K3ArVGIzd29zMS9qRytOWW9SbUQvbVppb0VyQnUyQ0lDb2lCRytNYXVLcjkwWXpkbEsrUU9zcndneWFUV1NOM09RdmlqbnhzTjl2d3NXaTU1RFR4OTZGRHB4WlB4NTB1ZS9WTGttYlZsMy9paHB3VFdFSGpDalJObGpzMmtXQ3Q0QmdKZkVGR1N3akFRQ2lVTGtROVJZQ21YcEx1N1pONGJpRDY1OTNoNjQ4OENjTWtqc09kVStydStrUzlFZ1pSTFZyQ0dkckdRRnNKOEkrZlp3eTNHaGtzRUZrUmdjaTVqdE05bjNiQ2x2Mnd4UU9FZ0xTRExsV2FxeEprZVNOWGRzMkdrZEdESkFIYWZiTDA3c041VGtTLzlKVit3Umpnd2xiSGpoSEN1RGtraExEUWMxY1NSRklJcXI2K0JMbDhvK1paS1NlajJIUnRHbEE5ZWEra09EWEViZ0diaWR0WTB2dnRkWXoyemx4M2cwQ0V0TmNKMFh5V3cxMFMrRUR0NDhNazYwNjJJZ1lyUVhTcVlQL1lqSmwvWlJWYWZRZk1VUmNFcG9FaXBtM0J3bk5HTmQ1R0Z5MmtrRUdjRkgxcWQ4SHQzZEpIbFNpUFJ2SlVYZjdCK0pIenNzZ084ZERxNXYrelp2L01zMFk1aktYKzcwMkhUZWZLenU1ay8rQnpOaFJuU05DSFBDMFIrdWx0Rm5RTlZVSWVLWXJ3U3ZhTnJHVng3Qi82S2pZeDBGVHg0UjhSSWIwQXJkYy9HNG4zMCttVnkvbUowZVJmejBMRmpHaVplY1ZmZ0VVNVdIZC9lNnlqVkQzUHErYS9SVy9heFdwQ3I0TEJZYTRIL0VkcU50bjlTVUJTbnl1enhsNWs1dXB1QmxadUkzL2tBWDlrYTgrajl5ekJHTjVaY05nRmNGTUJGUmFHdGsvSFdhcXQ0d0xNaXp4eG9rYVFacjN6bkMxeDkxU2haN3BpWm1pSnB0Y2pTbERoTlNOS0VPRTJJMDFhN1RsTGlMQ2JPWTVJOEpjMVRjcWZrZWNIa3Z1M003ZjBPdTA3a0hKMXFZa1I2RGt6bFR6KzJ2ZkhweXdMd2dhL1d2aFRuZWxzbEVOOHpzUE5veXNMUlhZeVBYNDB4UG5NejB5UnBRcXZWb05XbzBhelhhTmFxcjVVNnJWcVZWcjFLcTFaL3JkU0lhM1dTUm9Na1RzbHpXRGo1TWlWWDUrbTlkVVNnWkJrNDN3eSsrUE5mUExkK01YMkxUaUV4NW81bW5GRXVCV1NGNC9SOGdVNGZZVVZYTjJjblQ5RnNOa2ppSm1rUzQvSUNwMFU3K2dEL1BaWGtwOXJTL21xN1JxRTVQMG5nYXV5YjdNSUk5SVpLSzNGQkxLWFZ3TDZPQUJxWks3ZHloeEZocGw1UUZBWHBoU24ybmRxTGVpRjVrZlBPVDN5RW9aV2pyd3QrK1YrZTQ5V3R6L01URWhWaHc0ZnZaUFc3YndFRk1YQms1MHZzZWZMNzRKUzBVY1UzS2JNTjhJelEzeFZ3YXE0aGNlNHRxbS9SQjg1WHlkSmNFU0ROQzhRSTZoeFpubU9rUUhHc3VQbDZwRndDaGE3bFEyeGFNY3poWjErZ1NGS2d2WmxkZGVzbW9va1JGQWdxRWVzblJqbTQ3VDlvek02aldyUnpKOCtDZ0RYQ21YbEhLN0dMSm5xTEFpdzBpcmdlTzBEcENUMEV3Zm9sVkJYbkhIa2M4NjFQL1RGNWtZSlQxdDI5aGZYM3ZhOGRPbjlpVHZuZVp4OXRrd0M5NDZQYy9SZC9pTXNMQVB4U2lCK0U5RlI4bkNwRm9aeXRGcG80MHpsQVZwdkt6c3dFT08yak94SWlUNkIvREhVRld1UTQ1MURuVUtlSUtnZTMvanRIbjM4QmwrVnY3RWg1ZlVwVlQwN3k1RzgvUkZ5dFlRVEtQWU40NVI3R0J5MktVRTBLcG1kbkdTZ3ZEckJvRkJvSzA2bnArVHJOdEQzTWE1Y1p5cU1iVU9jbzhoaGM4WWFvbjhjSjhmeWJaOGRhT0ZwelZWUVZFVWYvNkNxSWh0bThzb1FCRHB5dTArL0hic0RQRmpvR1dEZmU5N1dodm01M2ZMcUZLdHkxTHNMdkcyZjVoaTJralhueXRBbWFJQlJBZTZxOXNmQ0dkdnRUZ09hSXk3Q2lUR3orWmFMSTUvWnJTMWdMcjB3MnVXSGw0SkhyaHFNM2pVQVhCWEREMnRGL0hLcEVteGJxemFlUzNPbkc4WUNSaW1ONDh5Y1pYblV6V1hNYWwxVFJ2SW5talhaZEpLK1ZHQzFhOEZwYlhJcHhNVVpUeUJ1SWEzSEx4LzhFaHE3bnZ2V0czc2hTYnlhelEyWHowWUgrOFAxUFBMaHkwZDM0a3JMUmt6UDUzL2krZlBKSFJ4ckI1NzdYcERBKzliMVBjTzdIVHlPMlRCSTNjWG5XL2wrTUJXbW5GWUlESElMZ2wwSTh6OE12aFZ6emdkL0hkVS93cml1Rmg5NWZwcTlpejdwQ1BsTUo1Wjh2VnRNbG53Y201NHMvTDlUOTVwNWpyYUd2LzZET25wTUpUYldVYVZJOStSSmtOWXpubzZydERVc0UzMW9VaHl1VW9HK01ZTmwxMU9zSkt3ZUZtMWRHL1BwdFBXNWt3TnRWc2ZaellTaGJMMFhQSlFNY09xUWx2emRibHpqNzlmUDFZdTJyazZuc1B4UHp5dW1VZzJlYXpOVnlIQmF4QnJFZVJoUUxlQ2c5cFppTks3dFp2ZHh5UlcvRThnR2ZnUzRUOTBUbXkwT0R3V1B2NkpKemw2cW5vMFA5djc2YXJGbG8yRWZQTm1UTjZRVTNObG1WcUptQ3VBSXJpbStWY2dDOWtUQVFXYnJEZGp1d1hFaHpkMEtMNUx1ZitZWGVoenZSMFBHMWlxcmFXbEo4OEllbjNGL3RQeStybnRxZHljeUNZbENzZ2tFeFJyQld1T2thdzZZSm81dXVORHV1NnVQaHJ0QjdUa1RjNGw3K2Q3dW84OENiaURlSjR6ZWNNNThmNlRHRFdlRms5N0VDQ2lFb0dad3FTUUt0ek9BY3JGZ0d2N3JDRTBWdlUyTyttc0d2QUxzNzBkRFJ6ZHorNmVZTnJjUjl0cFhMa0dkVURwd3JhR1dXcU51ajNHZXA5QWFVQndOTXI2WHdMRWVtaFF1dDltNlI1bHc3VjlldlBQNjQrbThad01IVCthZDNIRXNuNm9tajVBc25adHBIUjFOV3ZHVmd5dzZ2WCtrZVUwU1UrWVdNdWJvajlJU0ZXUG43RjJxYlAzeGZldmRiQmpBeEhHM3BEVTM3QWd1b054MHVMVWd6UjY2TzJDa3BybjI3bGVla3JadzRVd3pnSEl3TWVsTHU4ai9SaVlhTzFzQi9uazIwd0plUnZuYWVOdFFGbW1SY09PZElzYlRtUENRQ2loeHBKRVNoSS9EYWQwSlRUY2VwQlpXZGh4dWRTT2hzQks1Ykh2M1pSTDg1bk9XNUt4eHNYdVd6b2l0SDUxdlVEN2JJNXh0a3B4dmtweHFFYWNLbXEzMkdld3dpUXBxNStNNVY0UTlLSVgvYWlZYU9YakZ0K2RRanI2TEZNNnV2OEVmVFhOZUVnZVg2ZC9oVTZ6bjFhb1pwSlpRMVozUkF1T2YyQ2gvWjNNVkF4ZEpib2dnRDg5RFVmUGJJbGpXVlE1MW82SGdmQUtobCtwNWFrMmRtbTJwYk9TUzVvaUxxaENPdTBNRzhvRjhBM3dwOW9iS3NJbFd2UjlaY0lYSzJVOStYNVFWSGw4ZHpvZWYrc2orU1E3MGhjOTJoVElaR3Y2MUhaVzFSdUh1dHlBL0xQak1ERWVjR0lyT2pPNUI3TDRkNHVFd2pBS0NxNFh6SzZpUmxNRW1KeFhKZ3ZFL212NlZxVjV4a3ZEZmd5dDRTZVNYaytGQlp6bHd1djIvYjIvYTJ2VzF2cmYwWENUVURSZm5jd0VJQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUE0QUFBQU9DQVlBQUFBZlNDM1JBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFDblNVUkJWQ2lSaFZKdENzTWdESDBKODE0V2Vxc1Zac0hkU2xqdTFZSDdNVzNUa3RqM1QzeGZpUkl1bUpjdG90S3JIU09vcmdCUWNraWFSNFlnWHMwT2RsMjdBVFZSVWlsalVKMUtEc0lBWUlqRUZUWXVtV2x0THJjRjFZbEhycnVCY2MrdTY0MllNWnJIUjdTcjZpU3JFZFdWelNwM3kwRi94K2YzZy9QREN3WWZvYndmeEtlRUE2Nm9jeGtBU2c3aXJsNjMrUCthdEZmVm1KY3RBZWp6U1U4cE9Zam0vUUQ0VVV0ZWFMVHc2d0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9sYWtlTW9uaXRvclNpdGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI2NmJmZmYyJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2xha2VNb25pdG9yU2l0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2xha2VNb25pdG9yU2l0ZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjI2NmJmZmYyXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzI2NmJmZmYyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzI2NmJmZmYyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzI2NmJmZmYyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9sYWtlTW9uaXRvclNpdGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI2NmJmZmYyJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzI2NmJmZmYyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvbGFrZU1vbml0b3JTaXRlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGFrZU1vbml0b3JTaXRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sYWtlTW9uaXRvclNpdGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sYWtlTW9uaXRvclNpdGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI2NmJmZmYyJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9zdXJyb3VuZFBvbGx1dGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTU0MDUzYmUmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc3Vycm91bmRQb2xsdXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9zdXJyb3VuZFBvbGx1dGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImU1NDA1M2JlXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2U1NDA1M2JlJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2U1NDA1M2JlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2U1NDA1M2JlJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9zdXJyb3VuZFBvbGx1dGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTU0MDUzYmUmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZTU0MDUzYmUnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy93YXRlckhvbWVQYWdlL3N0YXRpb25EZXRhaWwvY29tcG9uZW50cy9zdXJyb3VuZFBvbGx1dGlvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3N1cnJvdW5kUG9sbHV0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zdXJyb3VuZFBvbGx1dGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3N1cnJvdW5kUG9sbHV0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lNTQwNTNiZSZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vdXBPdXRsZXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAyNWM1MDAzJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VwT3V0bGV0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdXBPdXRsZXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwMjVjNTAwM1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwMjVjNTAwMycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwMjVjNTAwMycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwMjVjNTAwMycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vdXBPdXRsZXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAyNWM1MDAzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzAyNWM1MDAzJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvdXBPdXRsZXQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91cE91dGxldC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdXBPdXRsZXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91cE91dGxldC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDI1YzUwMDMmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3VwUHVyUGxhbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFiMzZjZjU0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VwUHVyUGxhbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91cFB1clBsYW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMWIzNmNmNTRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMWIzNmNmNTQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWIzNmNmNTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWIzNmNmNTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3VwUHVyUGxhbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFiMzZjZjU0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzFiMzZjZjU0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvdXBQdXJQbGFudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VwUHVyUGxhbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VwUHVyUGxhbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91cFB1clBsYW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYjM2Y2Y1NCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vdXBSZXNlcnZvaXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcxNGI4YWU5JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VwUmVzZXJ2b2lyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdXBSZXNlcnZvaXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI3MTRiOGFlOVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc3MTRiOGFlOScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc3MTRiOGFlOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc3MTRiOGFlOScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vdXBSZXNlcnZvaXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcxNGI4YWU5JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzcxNGI4YWU5Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvdXBSZXNlcnZvaXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91cFJlc2Vydm9pci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdXBSZXNlcnZvaXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91cFJlc2Vydm9pci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzE0YjhhZTkmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3VwUml2ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMwNDMyMWY0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VwUml2ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91cFJpdmVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYzA0MzIxZjRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYzA0MzIxZjQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYzA0MzIxZjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYzA0MzIxZjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3VwUml2ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWMwNDMyMWY0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2MwNDMyMWY0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvdXBSaXZlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VwUml2ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VwUml2ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91cFJpdmVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jMDQzMjFmNCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vdXBTaXRlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hOGRiNGM4NiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91cFNpdGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91cFNpdGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3VwU2l0ZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hOGRiNGM4NiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImE4ZGI0Yzg2XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2E4ZGI0Yzg2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2E4ZGI0Yzg2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2E4ZGI0Yzg2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi91cFNpdGUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWE4ZGI0Yzg2JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2E4ZGI0Yzg2Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvdXBTaXRlLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdXBTaXRlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91cFNpdGUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdXBTaXRlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWE4ZGI0Yzg2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdXBTaXRlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hOGRiNGM4NiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vd2F0ZXJQcm9qZWN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYzljMDYwNiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi93YXRlclByb2plY3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi93YXRlclByb2plY3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwYzljMDYwNlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwYzljMDYwNicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwYzljMDYwNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwYzljMDYwNicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vd2F0ZXJQcm9qZWN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYzljMDYwNiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwYzljMDYwNicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2Uvc3RhdGlvbkRldGFpbC9jb21wb25lbnRzL3dhdGVyUHJvamVjdC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3dhdGVyUHJvamVjdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vd2F0ZXJQcm9qZWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vd2F0ZXJQcm9qZWN0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wYzljMDYwNiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vd2VhdGhlclN0YXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ5YzMxYzRhJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3dlYXRoZXJTdGF0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vd2VhdGhlclN0YXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI0OWMzMWM0YVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc0OWMzMWM0YScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc0OWMzMWM0YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc0OWMzMWM0YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vd2VhdGhlclN0YXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ5YzMxYzRhJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQ5YzMxYzRhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2NvbXBvbmVudHMvd2VhdGhlclN0YXRpb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93ZWF0aGVyU3RhdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vd2VhdGhlclN0YXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93ZWF0aGVyU3RhdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDljMzFjNGEmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zOGNjNTg3NCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zOGNjNTg3NCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzdHlsZTEgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIzOGNjNTg3NFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczOGNjNTg3NCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczOGNjNTg3NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczOGNjNTg3NCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM4Y2M1ODc0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzM4Y2M1ODc0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9zdGF0aW9uRGV0YWlsL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM4Y2M1ODc0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTM4Y2M1ODc0JnNjb3BlZD10cnVlJlwiIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMy0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0zLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMy0zIS4vc3RhdGlvbkRldGFpbC5zY3NzXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjVmNzI2NzkxXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0zLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0zLTMhLi9zdGF0aW9uRGV0YWlsLnNjc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0zLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTMtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0zLTMhLi9zdGF0aW9uRGV0YWlsLnNjc3NcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59Il0sInNvdXJjZVJvb3QiOiIifQ==