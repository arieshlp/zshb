(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayLikeToArray; });
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);

  for (var e = 0, n = Array(a); e < a; e++) {
    n[e] = r[e];
  }

  return n;
}



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithHoles; });
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}



/***/ }),

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

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArrayLimit; });
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







function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];

  if (null != t) {
    var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;

    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0) {
        ;
      }
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }

    return a;
  }
}



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableRest; });
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
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

/***/ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _slicedToArray; });
/* harmony import */ var _arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");
/* harmony import */ var _iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArrayLimit.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableRest.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");





function _slicedToArray(r, e) {
  return Object(_arrayWithHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r) || Object(_iterableToArrayLimit_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r, e) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(r, e) || Object(_nonIterableRest_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
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

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _unsupportedIterableToArray; });
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");









function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_7__["default"])(r, a) : void 0;
  }
}



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/air/mapAirWeather.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/pop/air/mapAirWeather.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_mapPoint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/mapPoint.js */ "./src/utils/mapPoint.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "mapAirWeather",
  props: {
    siteObj: {
      type: Object,
      default: function _default() {}
    }
  },
  data: function data() {
    return {};
  },
  watch: {
    siteObj: function siteObj() {
      this.getData();
    }
  },
  mounted: function mounted() {// this.getData()
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/air/mapAirWry.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/pop/air/mapAirWry.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "mapWry",
  data: function data() {
    return {};
  },
  props: {
    siteObj: {
      type: Object,
      default: function _default() {}
    }
  },
  watch: {
    siteObj: function siteObj() {}
  },
  mounted: function mounted() {},
  methods: {
    toDetail: function toDetail() {
      this.$router.push({
        name: "companyDetail",
        query: {
          id: this.siteObj.id,
          type: 'red'
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/air/mapSiteAir.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/pop/air/mapSiteAir.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_mapPoint_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/mapPoint.js */ "./src/utils/mapPoint.js");
/* harmony import */ var _api_old_air__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/old_air */ "./src/api/old_air.js");
/* harmony import */ var _api_air_quality_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/air_quality.js */ "./src/api/air_quality.js");
/* harmony import */ var _utils_airUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/airUtils.js */ "./src/utils/airUtils.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "mapSiteAir",
  props: {
    siteObj: {
      type: Object,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      siteData: {}
    };
  },
  watch: {
    siteObj: function siteObj() {
      this.getData();
    }
  },
  mounted: function mounted() {
    this.getData();
  },
  methods: {
    getData: function getData() {
      var _this = this;

      console.log(this.siteObj);
      var info2 = {
        dataType: 1,
        siteId: this.siteObj.id,
        divisionName: '',
        aqi: ''
      };
      Object(_api_air_quality_js__WEBPACK_IMPORTED_MODULE_2__["airQualitySiteDataType"])(info2).then(function (res) {
        _this.siteData = res.data;
      });
      /*Promise.all([stationData(1), stationData(2), stationData(4)]).then(([res1, res2, res3]) => {
        const all = [...res1.DATA, ...res2.DATA, ...res3.DATA]
        this.siteData = all.find(item => item.OBJECTID == this.siteObj.siteId)
        console.log(this.siteData)
      })*/
    },
    toDetail: function toDetail() {
      this.$router.push({
        name: 'airStationDetail',
        query: {
          siteId: this.siteObj.siteId,
          siteName: this.siteObj.siteName,
          siteLevel: this.siteObj.siteLabel,
          title: "空气质量站点详情"
        }
      });
    },
    judgeLevelReturn: function judgeLevelReturn(level) {
      return Object(_utils_mapPoint_js__WEBPACK_IMPORTED_MODULE_0__["judgeAirLevel"])(level);
    },
    getColor: function getColor(value, factor) {
      /*let status = '';
      if (key == null) {
        status = 'air_greenbg';
      } else if (key <= 50) {
        status = 'air_greenbg';
      } else if (key <= 100 && key > 50) {
        status = 'air_yellow_bg';
      } else if (key <= 150 && key > 100) {
        status = 'air_orangebg';
      } else if (key <= 200 && key > 150) {
        status = 'air_redbg';
      } else {
        status = 'air_whiterbg';
      }
      return status;*/
      if (value === '' || value === '-') {
        return Object(_utils_airUtils_js__WEBPACK_IMPORTED_MODULE_3__["getCalenderBgColor"])('', '');
      }

      return Object(_utils_airUtils_js__WEBPACK_IMPORTED_MODULE_3__["getCalenderBgColor"])(factor, value);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/pop/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_gis_components_pop_air_mapSiteAir__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/views/gis/components/pop/air/mapSiteAir */ "./src/views/gis/components/pop/air/mapSiteAir.vue");
/* harmony import */ var _views_gis_components_pop_air_mapAirWry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/views/gis/components/pop/air/mapAirWry */ "./src/views/gis/components/pop/air/mapAirWry.vue");
/* harmony import */ var _views_gis_components_pop_water_mapSiteWater__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/views/gis/components/pop/water/mapSiteWater */ "./src/views/gis/components/pop/water/mapSiteWater.vue");
/* harmony import */ var _views_gis_components_pop_water_branchSitePop__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/views/gis/components/pop/water/branchSitePop */ "./src/views/gis/components/pop/water/branchSitePop.vue");
/* harmony import */ var _views_gis_components_pop_water_zfxsPop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/views/gis/components/pop/water/zfxsPop */ "./src/views/gis/components/pop/water/zfxsPop.vue");
/* harmony import */ var _views_gis_components_pop_wry_mapPurPlant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/gis/components/pop/wry/mapPurPlant */ "./src/views/gis/components/pop/wry/mapPurPlant.vue");
/* harmony import */ var _views_gis_components_pop_wry_mapWry__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/views/gis/components/pop/wry/mapWry */ "./src/views/gis/components/pop/wry/mapWry.vue");
/* harmony import */ var _views_gis_components_pop_wry_mapWryOther__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/views/gis/components/pop/wry/mapWryOther */ "./src/views/gis/components/pop/wry/mapWryOther.vue");
/* harmony import */ var _views_gis_components_pop_air_mapAirWeather__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/views/gis/components/pop/air/mapAirWeather */ "./src/views/gis/components/pop/air/mapAirWeather.vue");
//
//
//
//
//
//
//
//
//
//
//
//
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
  props: {
    siteObj: {
      type: Object,
      default: function _default() {}
    }
  },
  components: {
    mapSiteWater: _views_gis_components_pop_water_mapSiteWater__WEBPACK_IMPORTED_MODULE_2__["default"],
    mapPurPlant: _views_gis_components_pop_wry_mapPurPlant__WEBPACK_IMPORTED_MODULE_5__["default"],
    mapWry: _views_gis_components_pop_wry_mapWry__WEBPACK_IMPORTED_MODULE_6__["default"],
    mapSiteAir: _views_gis_components_pop_air_mapSiteAir__WEBPACK_IMPORTED_MODULE_0__["default"],
    mapWryOther: _views_gis_components_pop_wry_mapWryOther__WEBPACK_IMPORTED_MODULE_7__["default"],
    mapAirWry: _views_gis_components_pop_air_mapAirWry__WEBPACK_IMPORTED_MODULE_1__["default"],
    mapAirWeather: _views_gis_components_pop_air_mapAirWeather__WEBPACK_IMPORTED_MODULE_8__["default"],
    branchSitePop: _views_gis_components_pop_water_branchSitePop__WEBPACK_IMPORTED_MODULE_3__["default"],
    zfxsPop: _views_gis_components_pop_water_zfxsPop__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  methods: {
    closePop: function closePop() {
      this.$emit("closePop");
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/water/branchSitePop.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/pop/water/branchSitePop.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var coordtransform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! coordtransform */ "./node_modules/coordtransform/index.js");
/* harmony import */ var coordtransform__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(coordtransform__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! vant */ "./node_modules/vant/es/index.js");




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var mapLx = "";


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "sitePollution",
  data: function data() {
    return {
      mapShow: true,
      mapLx: "",
      pointObj: {},
      location: [],
      message: ''
    };
  },
  props: {
    siteObj: {
      type: Object,
      default: function _default() {}
    }
  },
  watch: {
    siteObj: function siteObj() {// this.locate();
    }
  },
  mounted: function mounted() {
    var _this = this;

    return Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.locate();

            case 2:
              result = _context.sent;
              localNavigation.check(function (successCallback) {
                mapLx = successCallback;
              }, function (e) {
                console.log("b", e);
              });

              if (result === '定位失败') {
                Object(vant__WEBPACK_IMPORTED_MODULE_5__["Toast"])("定位失败");
                _this.message = result;
              } else {
                console.log(result);
                _this.location = result;
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    locate: function locate() {
      return new Promise(function (resolve) {
        try {
          window.suc.locate.locate(function (location) {
            resolve([location.Longitude, location.Latitude]); //       this.location = [location.Longitude,location.Latitude]
            // console.log(this.location)
          }, function (error) {
            resolve('定位失败');
          });
        } catch (e) {
          resolve(coordtransform__WEBPACK_IMPORTED_MODULE_4___default.a.wgs84togcj02(102.82797786933142, 24.89106777437279)); // resolve([this.$route.query.JD,this.$route.query.WD])
        }
      });
    },
    mapClick: function mapClick() {
      this.mapShow = false;
    },
    gdMap: function gdMap() {
      var options = {
        enableHighAccuracy: true,
        // 是否使用 GPS
        maximumAge: 30000,
        // 缓存时间
        timeout: 27000,
        // 超时时间
        coorType: 'bd09ll' // 默认是 gcj02，可填 bd09ll wgs84、gcj02以获取百度经纬度用于访问百度 API

      };
      navigator.geolocation.getCurrentPosition(function (info) {
        alert(JSON.stringify(info));
      }, function (error) {}, options);
      openGaodeMap();
      return;

      if (mapLx == "amap" || mapLx == "amapbaidu") {
        localNavigation.start(function () {}, function (e) {
          alert(e);
        }, {
          type: "amap",
          toLng: this.siteObj.JD,
          toLat: this.siteObj.WD,
          myLng: this.location[0],
          myLat: this.location[1]
        });
      } else {
        this.$dialog.alert({
          message: "请下载高德地图或者使用其他地图！"
        });
      }
    },
    bdMap: function bdMap() {
      if (mapLx == "baidu" || mapLx == "amapbaidu") {
        localNavigation.start(function () {}, function (e) {
          alert(e);
        }, {
          type: "baidu",
          toLng: this.siteObj.JD,
          toLat: this.siteObj.WD,
          myLng: this.location[0],
          myLat: this.location[1]
        });
      } else {
        this.$dialog.alert({
          message: "请下载百度地图或者使用其他地图！"
        });
      }
    },
    wyMap: function wyMap() {
      localNavigation.start(function () {}, function (e) {
        alert(e);
      }, {
        type: "auto",
        toLng: this.siteObj.JD,
        toLat: this.siteObj.WD,
        myLng: this.location[0],
        myLat: this.location[1]
      });
    },
    qx: function qx() {
      this.mapShow = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/water/mapSiteWater.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/pop/water/mapSiteWater.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api_water_envir_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/water_envir.js */ "./src/api/water_envir.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/utils */ "./src/utils/utils.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_setdate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/utils/setdate.js */ "./src/utils/setdate.js");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "mapSiteWater",
  props: {
    siteObj: {
      type: Object,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      siteData: {
        yzlist: []
      }
    };
  },
  watch: {
    siteObj: function siteObj() {
      this.getData();
    }
  },
  mounted: function mounted() {
    this.getData();
  },
  methods: {
    getData: function getData() {
      var _this = this;

      console.log(this.siteObj);
      console.log(Object(_utils_setdate_js__WEBPACK_IMPORTED_MODULE_6__["fourHourTime"])());
      /*
      手工 只有月年值
      * */

      var timeType = '',
          dateTime = '';

      if (this.siteObj.monitorMethod) {
        if (this.siteObj.monitorMethod == "手工监测") {
          dateTime = dayjs__WEBPACK_IMPORTED_MODULE_5___default()().format('YYYY-MM');
          timeType = '月';
        } else {
          dateTime = Object(_utils_setdate_js__WEBPACK_IMPORTED_MODULE_6__["fourHourTime"])();
          timeType = '时';
        }
      } else {
        if (this.siteObj.monitoringMode === '自动') {
          timeType = '时';
          dateTime = Object(_utils_setdate_js__WEBPACK_IMPORTED_MODULE_6__["fourHourTime"])();
        } else {
          timeType = '月';
          dateTime = dayjs__WEBPACK_IMPORTED_MODULE_5___default()().format('YYYY-MM');
        }
      }

      Object(_api_water_envir_js__WEBPACK_IMPORTED_MODULE_3__["stationInfo"])({
        dateTime: dateTime,
        siteId: this.siteObj.sectionId,
        timeType: timeType,
        type: this.siteObj.siteType
      }).then(function (res) {
        _this.siteData = Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, res.data), {}, {
          name: _this.siteObj.sectionName
        });
      });
    },
    toDetail: function toDetail() {
      /*
      手工 只有月年值
      * */
      var timeType = '',
          dateTime = '';

      if (this.siteObj.monitoringMode === '自动') {
        timeType = '时';
        dateTime = dayjs__WEBPACK_IMPORTED_MODULE_5___default()().subtract(4, 'hour').format('YYYY-MM-DD HH:00');
      } else {
        timeType = '月';
        dateTime = dayjs__WEBPACK_IMPORTED_MODULE_5___default()().format('YYYY-MM');
      }

      this.$router.push({
        name: "stationDetail",
        query: {
          mc: this.siteObj.sectionName,
          type: timeType,
          id: this.siteObj.sectionId,
          time: dateTime,
          listType: this.siteObj.siteType,
          zdType: this.siteObj.monitoringMethod
        }
      });
    },
    replaceString: function replaceString(value) {
      if (value) {
        return value.replace('类', '');
      } else {
        return '-';
      }
    },
    judgeLevel: function judgeLevel(value) {
      return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_4__["imgJugdeLevel"])(value);
    },
    judgeTargetLevel: function judgeTargetLevel(value) {
      if (value === null) {
        return 'target2';
      } else if (value === 'Ⅱ') {
        return 'target2';
      } else if (value === 'Ⅲ') {
        return 'target3';
      } else if (value === 'Ⅳ') {
        return 'target4';
      } else if (value === 'Ⅴ') {
        return 'target5';
      } else if (value === '劣Ⅴ') {
        return 'target6';
      } else {
        return 'target0';
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/water/zfxsPop.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/pop/water/zfxsPop.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var coordtransform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! coordtransform */ "./node_modules/coordtransform/index.js");
/* harmony import */ var coordtransform__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(coordtransform__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vant */ "./node_modules/vant/es/index.js");
/* harmony import */ var _api_clue_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/clue.js */ "./src/api/clue.js");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var mapLx = "";



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "sitePollution",
  data: function data() {
    return {
      mapShow: true,
      mapLx: "",
      pointObj: {},
      location: [],
      message: "",
      dataObj: {}
    };
  },
  props: {
    siteObj: {
      type: Object,
      default: function _default() {}
    }
  },
  watch: {
    siteObj: function siteObj() {
      this.locate();
    }
  },
  mounted: function mounted() {
    var _this = this;

    return Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _this.getXs();

              _context.next = 3;
              return _this.locate();

            case 3:
              result = _context.sent;
              localNavigation.check(function (successCallback) {
                mapLx = successCallback;
              }, function (e) {
                console.log("b", e);
              });

              if (result === "定位失败") {
                Object(vant__WEBPACK_IMPORTED_MODULE_4__["Toast"])("定位失败");
                _this.message = result;
              } else {
                console.log(result);
                _this.location = result;
              }

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    locate: function locate() {
      return new Promise(function (resolve) {
        try {
          window.suc.locate.locate(function (location) {
            resolve([location.Longitude, location.Latitude]); //       this.location = [location.Longitude,location.Latitude]
            // console.log(this.location)
          }, function (error) {
            resolve("定位失败");
          });
        } catch (e) {
          resolve(coordtransform__WEBPACK_IMPORTED_MODULE_3___default.a.wgs84togcj02(102.82797786933142, 24.89106777437279)); // resolve([this.$route.query.JD,this.$route.query.WD])
        }
      });
    },
    getXs: function getXs() {
      var _this2 = this;

      Object(_api_clue_js__WEBPACK_IMPORTED_MODULE_5__["xsDetail"])({
        id: this.siteObj.id
      }).then(function (res) {
        _this2.dataObj = res.data;
      });
    },
    mapClick: function mapClick() {
      this.mapShow = false;
    },
    gdMap: function gdMap() {
      if (mapLx == "amap" || mapLx == "amapbaidu") {
        localNavigation.start(function () {}, function (e) {
          alert(e);
        }, {
          type: "amap",
          toLng: this.siteObj.JD,
          toLat: this.siteObj.WD,
          myLng: this.location[0],
          myLat: this.location[1]
        });
      } else {
        this.$dialog.alert({
          message: "请下载高德地图或者使用其他地图！"
        });
      }
    },
    bdMap: function bdMap() {
      if (mapLx == "baidu" || mapLx == "amapbaidu") {
        localNavigation.start(function () {}, function (e) {
          alert(e);
        }, {
          type: "baidu",
          toLng: this.siteObj.JD,
          toLat: this.siteObj.WD,
          myLng: this.location[0],
          myLat: this.location[1]
        });
      } else {
        this.$dialog.alert({
          message: "请下载百度地图或者使用其他地图！"
        });
      }
    },
    wyMap: function wyMap() {
      localNavigation.start(function () {}, function (e) {
        alert(e);
      }, {
        type: "auto",
        toLng: this.siteObj.JD,
        toLat: this.siteObj.WD,
        myLng: this.location[0],
        myLat: this.location[1]
      });
    },
    qx: function qx() {
      this.mapShow = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/wry/mapPurPlant.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/pop/wry/mapPurPlant.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
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
  name: "mapPurPlant",
  data: function data() {
    return {
      loading: false,
      nowYearMonthDayHours: ""
    };
  },
  props: {
    siteObj: {
      type: Object,
      default: function _default() {}
    }
  },
  watch: {
    siteObj: function siteObj() {}
  },
  mounted: function mounted() {
    this.get_present_data();
  },
  methods: {
    get_present_data: function get_present_data() {
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
      this.nowYearMonthDayHours = year + "-" + month + "-" + day + " " + hours + ":00:00";
    },
    toDetail: function toDetail() {
      this.$router.push({
        name: "purPlantDetail",
        query: {
          timeType: "时",
          mc: this.siteObj.enterpriseName,
          id: this.siteObj.dataId,
          time: this.nowYearMonthDayHours,
          type: "水质净化厂"
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/wry/mapWry.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/pop/wry/mapWry.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "mapWry",
  data: function data() {
    return {};
  },
  props: {
    siteObj: {
      type: Object,
      default: function _default() {}
    }
  },
  watch: {
    siteObj: function siteObj() {}
  },
  mounted: function mounted() {},
  methods: {
    toDetail: function toDetail() {
      this.$router.push({
        name: "companyDetail",
        query: {
          id: this.siteObj.id,
          type: 'red'
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/wry/mapWryOther.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/pop/wry/mapWryOther.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vant */ "./node_modules/vant/es/index.js");
/* harmony import */ var coordtransform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! coordtransform */ "./node_modules/coordtransform/index.js");
/* harmony import */ var coordtransform__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(coordtransform__WEBPACK_IMPORTED_MODULE_7__);





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



var mapLx = "";
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "mapWryOther",
  data: function data() {
    return {
      mapShow: true,
      // mapLx: "",
      pointObj: {},
      location: [],
      loading: false
    };
  },
  props: {
    siteObj: {
      type: Object,
      default: function _default() {}
    }
  },
  watch: {
    siteObj: {
      handler: function handler(newD, oldD) {
        this.getData();
      },
      deep: true,
      immediate: true
    }
  },
  mounted: function mounted() {
    var _this = this;

    return Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.locate();

            case 2:
              result = _context.sent;
              localNavigation.check(function (successCallback) {
                mapLx = successCallback;
              }, function (e) {
                console.log("b", e);
              });

              if (result === '定位失败') {
                Object(vant__WEBPACK_IMPORTED_MODULE_6__["Toast"])("定位失败");
                _this.message = result;
              } else {
                _this.location = result;
              }

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: {
    getData: function getData() {
      this.location = [this.siteObj.JD, this.siteObj.WD];
      this.getList(this.location);
    },
    toDetail: function toDetail() {
      this.$router.push({
        name: "companyDetail",
        query: {
          id: this.siteObj.siteId,
          type: 'red'
        }
      });
    },
    getList: function getList(_ref) {
      var _this2 = this;

      var _ref2 = Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, 2),
          jd = _ref2[0],
          wd = _ref2[1];

      var url = "http://10.221.29.4:48686/wrygjApp133/index/surrounding";
      var params = {
        longitude: jd,
        latitude: wd,
        number: ""
      };
      this.loading = true;
      axios__WEBPACK_IMPORTED_MODULE_5___default()({
        url: url,
        params: params,
        method: "get"
      }).then(function (res) {
        if (res.data && res.data.page && res.data.page.length > 0) {
          var item = res.data.page.find(function (item) {
            return item.yyyd.id === _this2.siteObj.siteId;
          });
          console.log(_this2.siteObj.siteId, item);
          _this2.pointObj = {
            qymc: item.yyyd.wrymc,
            //
            jl: item.distance,
            //
            xydm: item.yyyd.tyshxydm,
            //
            szdz: item.yyyd.szdz,
            //
            fddbr: item.yyyd.fddbr,
            //
            hylb: item.yyyd.hymc,
            //
            fddbrdh: item.yyyd.lxrdh //

          };
        }
      }).finally(function () {
        _this2.loading = false;
      });
    },
    mapClick: function mapClick() {
      this.mapShow = false;
    },
    locate: function locate() {
      return new Promise(function (resolve) {
        try {
          window.suc.locate.locate(function (location) {
            resolve([location.Longitude, location.Latitude]);
          }, function (error) {
            resolve('定位失败');
          });
        } catch (e) {
          resolve(coordtransform__WEBPACK_IMPORTED_MODULE_7___default.a.wgs84togcj02(102.82797786933142, 24.89106777437279));
        }
      });
    },
    gdMap: function gdMap() {
      if (mapLx == "amap" || mapLx == "amapbaidu") {
        localNavigation.start(function () {}, function (e) {
          alert(e);
        }, {
          type: "amap",
          toLng: this.siteObj.JD,
          toLat: this.siteObj.WD,
          myLng: this.location[0],
          myLat: this.location[1]
        });
      } else {
        this.$dialog.alert({
          message: "请下载高德地图或者使用其他地图！"
        });
      }
    },
    bdMap: function bdMap() {
      if (mapLx == "baidu" || mapLx == "amapbaidu") {
        localNavigation.start(function () {}, function (e) {
          alert(e);
        }, {
          type: "baidu",
          toLng: this.siteObj.JD,
          toLat: this.siteObj.WD,
          myLng: this.location[0],
          myLat: this.location[1]
        });
      } else {
        this.$dialog.alert({
          message: "请下载百度地图或者使用其他地图！"
        });
      }
    },
    wyMap: function wyMap() {
      localNavigation.start(function () {}, function (e) {
        alert(e);
      }, {
        type: "auto",
        toLng: this.siteObj.JD,
        toLat: this.siteObj.WD,
        myLng: this.location[0],
        myLat: this.location[1]
      });
    },
    qx: function qx() {
      this.mapShow = true;
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/air/mapAirWeather.vue?vue&type=template&id=13b30ce2&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/pop/air/mapAirWeather.vue?vue&type=template&id=13b30ce2&scoped=true& ***!
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
  return _c("div", { staticClass: "map-pop-wrapper" }, [
    _c(
      "div",
      { staticClass: "pop-title-wrapper fs" },
      [
        _c(
          "div",
          {
            staticStyle: {
              display: "inline-flex",
              "align-items": "center",
              width: "63%",
            },
          },
          [
            _c("img", {
              attrs: {
                src: __webpack_require__(/*! @/assets/编组.png */ "./src/assets/编组.png"),
                width: "9",
                height: "11",
              },
            }),
            _c("span", { staticClass: "site-name" }, [
              _vm._v(_vm._s(_vm.siteObj.name)),
            ]),
          ]
        ),
        _vm.siteObj.dateTime
          ? _c("span", { staticClass: "time" }, [
              _vm._v(" " + _vm._s(_vm.siteObj.dateTime) + " "),
            ])
          : _vm._e(),
        _c("van-icon", {
          staticClass: "close",
          attrs: { name: "clear", color: "#A6ABB3", size: 20 },
          on: {
            click: function ($event) {
              return _vm.$emit("close")
            },
          },
        }),
      ],
      1
    ),
    _c("div", { staticClass: "content-box" }, [
      _c("div", { staticClass: "site-statu" }, [
        _c("div", { staticClass: "site-monitor-box" }, [
          _c("img", { attrs: { src: __webpack_require__(/*! @/assets/query/湿度.png */ "./src/assets/query/湿度.png") } }),
          _vm._v(" 湿度：" + _vm._s(_vm.siteObj.rhu) + "% "),
        ]),
        _c("div", { staticClass: "site-monitor-box" }, [
          _c("img", { attrs: { src: __webpack_require__(/*! @/assets/query/风向.png */ "./src/assets/query/风向.png") } }),
          _vm._v(" 风向：" + _vm._s(_vm.siteObj.winDinst) + " "),
        ]),
        _c("div", { staticClass: "site-monitor-box" }, [
          _c("img", { attrs: { src: __webpack_require__(/*! @/assets/query/风速.png */ "./src/assets/query/风速.png") } }),
          _vm._v(" 风速：" + _vm._s(_vm.siteObj.winSinst) + " "),
        ]),
        _c("div", { staticClass: "site-monitor-box" }, [
          _c("img", { attrs: { src: __webpack_require__(/*! @/assets/query/气压.png */ "./src/assets/query/气压.png") } }),
          _vm._v(" 气压：" + _vm._s(_vm.siteObj.prs) + " "),
        ]),
        _c("div", { staticClass: "site-monitor-box" }, [
          _c("img", { attrs: { src: __webpack_require__(/*! @/assets/query/温度.png */ "./src/assets/query/温度.png") } }),
          _vm._v(" 温度：" + _vm._s(_vm.siteObj.tem) + "℃ "),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/air/mapAirWry.vue?vue&type=template&id=5feab028&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/pop/air/mapAirWry.vue?vue&type=template&id=5feab028& ***!
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
  return _c("div", { staticClass: "airWyrInfo" }, [
    _c(
      "div",
      { staticClass: "pointerTop" },
      [
        _c("p", { staticClass: "title", on: { click: _vm.toDetail } }, [
          _c("img", {
            staticStyle: { width: "12px", "margin-right": "5px" },
            attrs: { src: __webpack_require__(/*! @/assets/编组.png */ "./src/assets/编组.png") },
          }),
          _vm._v(" " + _vm._s(_vm.siteObj.enterpriseName) + " "),
        ]),
        _c("van-icon", {
          staticClass: "close",
          attrs: { name: "clear", color: "#A6ABB3", size: 20 },
          on: {
            click: function ($event) {
              return _vm.$emit("close")
            },
          },
        }),
      ],
      1
    ),
    _c("div", { staticClass: "address" }, [
      _vm._v(" " + _vm._s(_vm.siteObj.address) + " "),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/air/mapSiteAir.vue?vue&type=template&id=4876e19b&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/pop/air/mapSiteAir.vue?vue&type=template&id=4876e19b&scoped=true& ***!
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
  return _c("div", { staticClass: "map-pop-wrapper" }, [
    _c(
      "div",
      { staticClass: "pop-title-wrapper fs" },
      [
        _c(
          "div",
          {
            staticStyle: {
              display: "inline-flex",
              "align-items": "center",
              width: "73%",
            },
          },
          [
            _c("img", {
              attrs: {
                src: __webpack_require__(/*! @/assets/编组.png */ "./src/assets/编组.png"),
                width: "9",
                height: "11",
              },
            }),
            _c(
              "span",
              { staticClass: "site-name", on: { click: _vm.toDetail } },
              [_vm._v(_vm._s(_vm.siteData.siteName))]
            ),
            _c(
              "span",
              { class: "level" + _vm.judgeLevelReturn(_vm.siteData.kind) },
              [
                _vm._v(
                  _vm._s(_vm.siteData.kind) +
                    "(" +
                    _vm._s(_vm.siteData.aqi) +
                    ")"
                ),
              ]
            ),
          ]
        ),
        _vm.siteData.monitoringTime
          ? _c("span", { staticClass: "time" }, [
              _vm._v(
                " " + _vm._s(_vm.siteData.monitoringTime.substring(0, 13)) + " "
              ),
            ])
          : _vm._e(),
        _c("van-icon", {
          staticClass: "close",
          attrs: { name: "clear", color: "#A6ABB3", size: 20 },
          on: {
            click: function ($event) {
              return _vm.$emit("close")
            },
          },
        }),
      ],
      1
    ),
    _c("div", { staticClass: "content-box" }, [
      _c("div", { staticClass: "site-statu" }, [
        _c("div", { staticClass: "site-monitor-box" }, [
          _c("img", { attrs: { src: __webpack_require__(/*! @/assets/query/湿度.png */ "./src/assets/query/湿度.png") } }),
          _vm._v(" 湿度：" + _vm._s(_vm.siteData.humidity) + "% "),
        ]),
        _c("div", { staticClass: "site-monitor-box" }, [
          _c("img", { attrs: { src: __webpack_require__(/*! @/assets/query/风向.png */ "./src/assets/query/风向.png") } }),
          _vm._v(" 风向：" + _vm._s(_vm.siteData.windDirection) + " "),
        ]),
        _c("div", { staticClass: "site-monitor-box" }, [
          _c("img", { attrs: { src: __webpack_require__(/*! @/assets/query/风速.png */ "./src/assets/query/风速.png") } }),
          _vm._v(" 风速：" + _vm._s(_vm.siteData.windSpeed) + " "),
        ]),
        _c("div", { staticClass: "site-monitor-box" }, [
          _c("img", { attrs: { src: __webpack_require__(/*! @/assets/query/气压.png */ "./src/assets/query/气压.png") } }),
          _vm._v(" 气压：" + _vm._s(_vm.siteData.pressure) + " "),
        ]),
        _c("div", { staticClass: "site-monitor-box" }, [
          _c("img", { attrs: { src: __webpack_require__(/*! @/assets/query/温度.png */ "./src/assets/query/温度.png") } }),
          _vm._v(" 温度：" + _vm._s(_vm.siteData.temperature) + "℃ "),
        ]),
      ]),
      _c("div", { staticClass: "content-monitor" }, [
        _c("div", { style: _vm.getColor(_vm.siteData.pm25, "pm25") }, [
          _c("span", [_vm._v(_vm._s(_vm.siteData.pm25))]),
          _vm._v("PM2.5 "),
        ]),
        _c("div", { style: _vm.getColor(_vm.siteData.pm10, "pm10") }, [
          _c("span", [_vm._v(_vm._s(_vm.siteData.pm10))]),
          _vm._v("PM10 "),
        ]),
        _c("div", { style: _vm.getColor(_vm.siteData.so2, "so2") }, [
          _c("span", [_vm._v(_vm._s(_vm.siteData.so2))]),
          _vm._v("SO2 "),
        ]),
        _c("div", { style: _vm.getColor(_vm.siteData.no2, "no2") }, [
          _c("span", [_vm._v(_vm._s(_vm.siteData.no2))]),
          _vm._v("NO2 "),
        ]),
        _c("div", { style: _vm.getColor(_vm.siteData.co, "co") }, [
          _c("span", [_vm._v(_vm._s(_vm.siteData.co))]),
          _vm._v("CO "),
        ]),
        _c("div", { style: _vm.getColor(_vm.siteData.ozone, "ozone") }, [
          _c("span", [_vm._v(_vm._s(_vm.siteData.ozone))]),
          _vm._v("O3 "),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/index.vue?vue&type=template&id=62d4a8f3&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/pop/index.vue?vue&type=template&id=62d4a8f3&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      _vm.siteObj.type === "water"
        ? _c("mapSiteWater", {
            attrs: { siteObj: _vm.siteObj },
            on: { close: _vm.closePop },
          })
        : _vm._e(),
      _vm.siteObj.type === "purPlant"
        ? _c("mapPurPlant", {
            attrs: { siteObj: _vm.siteObj },
            on: { close: _vm.closePop },
          })
        : _vm._e(),
      _vm.siteObj.type === "wry"
        ? _c("mapWry", {
            attrs: { siteObj: _vm.siteObj },
            on: { close: _vm.closePop },
          })
        : _vm._e(),
      _vm.siteObj.type === "wryAir"
        ? _c("mapAirWry", {
            attrs: { siteObj: _vm.siteObj },
            on: { close: _vm.closePop },
          })
        : _vm._e(),
      _vm.siteObj.type === "airWeather"
        ? _c("mapAirWeather", {
            attrs: { siteObj: _vm.siteObj },
            on: { close: _vm.closePop },
          })
        : _vm.siteObj.type === "branch"
        ? _c("branchSitePop", {
            attrs: { siteObj: _vm.siteObj },
            on: { close: _vm.closePop },
          })
        : _vm._e(),
      _vm.siteObj.type === "xsgl"
        ? _c("zfxsPop", {
            attrs: { siteObj: _vm.siteObj },
            on: { close: _vm.closePop },
          })
        : _vm._e(),
      _vm.siteObj.type === "air"
        ? _c("mapSiteAir", {
            attrs: { siteObj: _vm.siteObj },
            on: { close: _vm.closePop },
          })
        : _vm._e(),
      _vm.siteObj.type === "wryOther"
        ? _c("mapWryOther", {
            attrs: { siteObj: _vm.siteObj },
            on: { close: _vm.closePop },
          })
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/water/branchSitePop.vue?vue&type=template&id=1e59dbf1&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/pop/water/branchSitePop.vue?vue&type=template&id=1e59dbf1&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "sitePointerInfo" }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.mapShow,
            expression: "mapShow",
          },
        ],
      },
      [
        _c(
          "div",
          { staticClass: "pointerTop" },
          [
            _c("p", { staticClass: "title" }, [
              _c("img", {
                staticStyle: { width: "16px", "margin-right": "7px" },
                attrs: { src: __webpack_require__(/*! @/assets/point/编组 2.png */ "./src/assets/point/编组 2.png") },
              }),
              _vm._v(" " + _vm._s(_vm.siteObj.dwmc) + " "),
            ]),
            _c("van-icon", {
              staticClass: "close",
              attrs: { name: "clear", color: "#A6ABB3", size: 20 },
              on: {
                click: function ($event) {
                  return _vm.$emit("close")
                },
              },
            }),
          ],
          1
        ),
        _c("div", { staticClass: "infoContent" }, [
          _c("div", { staticClass: "infoBox" }, [
            _vm._v(" 沟渠名称： "),
            _c("span", [_vm._v(_vm._s(_vm.siteObj.gqmc || "-"))]),
          ]),
          _c("div", { staticClass: "infoBox" }, [
            _vm._v(" 所属区域： "),
            _c("span", [_vm._v(_vm._s(_vm.siteObj.xzqh || "-"))]),
          ]),
          _c("div", { staticClass: "infoBox" }, [
            _vm._v(" 经度： "),
            _c("span", [_vm._v(_vm._s(_vm.siteObj.JD || "-"))]),
          ]),
          _c("div", { staticClass: "infoBox" }, [
            _vm._v(" 纬度： "),
            _c("span", [_vm._v(_vm._s(_vm.siteObj.WD || "-"))]),
          ]),
        ]),
      ]
    ),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.mapShow,
            expression: "!mapShow",
          },
        ],
        staticClass: "mapTab",
      },
      [
        _c(
          "div",
          {
            staticClass: "mapBtn",
            on: {
              click: function ($event) {
                return _vm.gdMap()
              },
            },
          },
          [_vm._v("高德地图")]
        ),
        _c(
          "div",
          {
            staticClass: "mapBtn",
            on: {
              click: function ($event) {
                return _vm.bdMap()
              },
            },
          },
          [_vm._v("百度地图")]
        ),
        _c(
          "div",
          {
            staticClass: "mapBtn",
            on: {
              click: function ($event) {
                return _vm.wyMap()
              },
            },
          },
          [_vm._v("自动获取地图")]
        ),
        _c(
          "div",
          {
            staticClass: "qxBtn",
            on: {
              click: function ($event) {
                return _vm.qx()
              },
            },
          },
          [_vm._v("取消")]
        ),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/water/mapSiteWater.vue?vue&type=template&id=2f3cc2bb&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/pop/water/mapSiteWater.vue?vue&type=template&id=2f3cc2bb&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "map-pop-wrapper" }, [
    _c(
      "div",
      { staticClass: "pop-title-wrapper" },
      [
        _vm.siteData.state === "达标"
          ? _c("div", { staticClass: "standard" })
          : _c("div", { staticClass: "exceed" }),
        _vm._v(" " + _vm._s(_vm.siteData.jcsjParam) + " "),
        _c("van-icon", {
          staticClass: "close",
          attrs: { name: "clear", color: "#A6ABB3", size: 20 },
          on: {
            click: function ($event) {
              return _vm.$emit("close")
            },
          },
        }),
      ],
      1
    ),
    _c(
      "div",
      { staticClass: "name-wrapper name", on: { click: _vm.toDetail } },
      [
        _c("span", { staticStyle: { "text-decoration": "underline" } }, [
          _vm._v(_vm._s(_vm.siteData.siteName)),
        ]),
        _c(
          "span",
          {
            staticClass: "site-status",
            style: {
              backgroundImage:
                "url(" +
                _vm.judgeLevel(
                  _vm.replaceString(_vm.siteData.waterQualityLevel)
                ) +
                ")",
              margin: "0 16px",
            },
          },
          [
            _vm._v(
              " " +
                _vm._s(_vm.replaceString(_vm.siteData.waterQualityLevel)) +
                " "
            ),
          ]
        ),
        _c(
          "span",
          {
            class: [
              "target-level",
              _vm.judgeTargetLevel(
                _vm.replaceString(_vm.siteData.waterQualityTarget)
              ),
            ],
          },
          [
            _vm._v(
              " " +
                _vm._s(_vm.replaceString(_vm.siteData.waterQualityTarget)) +
                " "
            ),
          ]
        ),
      ]
    ),
    _c(
      "div",
      {
        class: [
          "content-monitor",
          _vm.siteData.state === "达标" ? "content-standard" : "content-exceed",
        ],
      },
      [
        _vm._l(_vm.siteData.factorList, function (item) {
          return _c("div", [
            _c("span", [_vm._v(_vm._s(item.factorName) + ":")]),
            _vm._v(" " + _vm._s(item.value) + " " + _vm._s(item.unit) + " "),
          ])
        }),
        _c(
          "div",
          { staticClass: "notice" },
          [
            _c("van-icon", {
              staticStyle: { "margin-right": "5px" },
              attrs: { name: "warning" },
            }),
            _vm._v(" " + _vm._s(_vm.siteData.dataSource) + " "),
          ],
          1
        ),
      ],
      2
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/water/zfxsPop.vue?vue&type=template&id=1c0ff85a&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/pop/water/zfxsPop.vue?vue&type=template&id=1c0ff85a&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "sitePointerInfo" }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.mapShow,
            expression: "mapShow",
          },
        ],
      },
      [
        _c(
          "div",
          { staticClass: "pointerTop" },
          [
            _c("p", { staticClass: "title" }, [
              _c("img", {
                staticStyle: { width: "16px", "margin-right": "7px" },
                attrs: { src: __webpack_require__(/*! @/assets/point/编组 2.png */ "./src/assets/point/编组 2.png") },
              }),
              _vm._v(
                " " + _vm._s(_vm.dataObj.detail_info.enterprise_name) + " "
              ),
            ]),
            _c("van-icon", {
              staticClass: "close",
              attrs: { name: "clear", color: "#A6ABB3", size: 20 },
              on: {
                click: function ($event) {
                  return _vm.$emit("close")
                },
              },
            }),
          ],
          1
        ),
        _c("div", { staticClass: "infoContent" }, [
          _c("div", { staticClass: "infoBox" }, [
            _c("div", { staticClass: "title" }, [_vm._v("线索类型：")]),
            _c("div", { staticClass: "words" }, [
              _vm._v(_vm._s(_vm.dataObj.detail_info.classification || "-")),
            ]),
          ]),
          _c("div", { staticClass: "infoBox" }, [
            _c("div", { staticClass: "title" }, [_vm._v("线索来源：")]),
            _c("div", { staticClass: "words" }, [
              _vm._v(_vm._s(_vm.dataObj.detail_info.type || "-")),
            ]),
          ]),
          _c("div", { staticClass: "infoBox" }, [
            _c("div", { staticClass: "title" }, [_vm._v("线索描述：")]),
            _c("div", { staticClass: "words" }, [
              _vm._v(_vm._s(_vm.dataObj.detail_info.basic_info || "-")),
            ]),
          ]),
          _c("div", { staticClass: "infoBox" }, [
            _c("div", { staticClass: "title" }, [_vm._v("线索状态：")]),
            _c(
              "div",
              {
                staticClass: "words",
                style: {
                  color:
                    _vm.dataObj.detail_info.status == "已办结"
                      ? "rgb(74, 227, 123)"
                      : "rgb(0, 182, 255)",
                },
              },
              [_vm._v(_vm._s(_vm.dataObj.detail_info.status || "-"))]
            ),
          ]),
        ]),
      ]
    ),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.mapShow,
            expression: "!mapShow",
          },
        ],
        staticClass: "mapTab",
      },
      [
        _c(
          "div",
          {
            staticClass: "mapBtn",
            on: {
              click: function ($event) {
                return _vm.gdMap()
              },
            },
          },
          [_vm._v("高德地图")]
        ),
        _c(
          "div",
          {
            staticClass: "mapBtn",
            on: {
              click: function ($event) {
                return _vm.bdMap()
              },
            },
          },
          [_vm._v("百度地图")]
        ),
        _c(
          "div",
          {
            staticClass: "mapBtn",
            on: {
              click: function ($event) {
                return _vm.wyMap()
              },
            },
          },
          [_vm._v("自动获取地图")]
        ),
        _c(
          "div",
          {
            staticClass: "qxBtn",
            on: {
              click: function ($event) {
                return _vm.qx()
              },
            },
          },
          [_vm._v("取消")]
        ),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/wry/mapPurPlant.vue?vue&type=template&id=2aca36aa&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/pop/wry/mapPurPlant.vue?vue&type=template&id=2aca36aa& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "pointerInfo" }, [
    _c(
      "div",
      { staticClass: "pointerTop" },
      [
        _c("p", { staticClass: "title", on: { click: _vm.toDetail } }, [
          _c("img", {
            staticStyle: { width: "16px", "margin-right": "7px" },
            attrs: { src: __webpack_require__(/*! @/assets/公司.png */ "./src/assets/公司.png") },
          }),
          _vm._v(" " + _vm._s(_vm.siteObj.enterpriseName) + " "),
        ]),
        _c("van-icon", {
          staticClass: "close",
          attrs: { name: "clear", color: "#A6ABB3", size: 20 },
          on: {
            click: function ($event) {
              return _vm.$emit("close")
            },
          },
        }),
      ],
      1
    ),
    _c("div", { staticClass: "infoContent" }, [
      _c("div", { staticClass: "infoBox" }, [
        _c("p", [_vm._v("统一社会信用代码：")]),
        _c("p", [_vm._v(_vm._s(_vm.siteObj.equipmentCode))]),
      ]),
      _c("div", { staticClass: "infoBox" }, [
        _c("p", [_vm._v("所属区域：")]),
        _c("p", [_vm._v(_vm._s(_vm.siteObj.division))]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/wry/mapWry.vue?vue&type=template&id=61270462&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/pop/wry/mapWry.vue?vue&type=template&id=61270462& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "pointerInfo" }, [
    _c(
      "div",
      { staticClass: "pointerTop" },
      [
        _c("p", { staticClass: "title", on: { click: _vm.toDetail } }, [
          _c("img", {
            staticStyle: { width: "16px", "margin-right": "7px" },
            attrs: { src: __webpack_require__(/*! @/assets/公司.png */ "./src/assets/公司.png") },
          }),
          _vm._v(" " + _vm._s(_vm.siteObj.wrymc) + " "),
        ]),
        _c("van-icon", {
          staticClass: "close",
          attrs: { name: "clear", color: "#A6ABB3", size: 20 },
          on: {
            click: function ($event) {
              return _vm.$emit("close")
            },
          },
        }),
      ],
      1
    ),
    _c("div", { staticClass: "infoContent" }, [
      _c("div", { staticClass: "infoBox" }, [
        _c("p", [_vm._v("统一社会信用代码：")]),
        _c("p", [_vm._v(_vm._s(_vm.siteObj.tyshxydm))]),
      ]),
      _c("div", { staticClass: "infoBox" }, [
        _c("p", [_vm._v("行业类别：")]),
        _c("p", [_vm._v(_vm._s(_vm.siteObj.hymc))]),
      ]),
      _c("div", { staticClass: "infoBox" }, [
        _c("p", [_vm._v("所在地址：")]),
        _c("p", [_vm._v(_vm._s(_vm.siteObj.szdz))]),
      ]),
      _c("div", { staticClass: "infoBox" }, [
        _c("p", [_vm._v("法定代表人：")]),
        _c("p", [_vm._v(_vm._s(_vm.siteObj.fddbr))]),
      ]),
      _c("div", { staticClass: "infoBox" }, [
        _c("p", [_vm._v("法定代表人电话号码：")]),
        _c("p", [
          _c(
            "a",
            {
              staticStyle: { color: "#447bfc", "text-decoration": "underline" },
              attrs: { href: "tel:" + _vm.siteObj.fddbrdh },
            },
            [_vm._v(_vm._s(_vm.siteObj.fddbrdh))]
          ),
        ]),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/wry/mapWryOther.vue?vue&type=template&id=5d9285fe&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/pop/wry/mapWryOther.vue?vue&type=template&id=5d9285fe& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "pointerInfo" }, [
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.mapShow,
            expression: "mapShow",
          },
        ],
      },
      [
        _vm.loading
          ? _c(
              "div",
              {
                staticStyle: {
                  height: "200px",
                  display: "flex",
                  "align-items": "center",
                  "justify-content": "center",
                },
              },
              [_c("van-loading")],
              1
            )
          : [
              _c(
                "div",
                { staticClass: "pointerTop" },
                [
                  _c(
                    "p",
                    { staticClass: "title", on: { click: _vm.toDetail } },
                    [
                      _c("img", {
                        staticStyle: { width: "16px", "margin-right": "7px" },
                        attrs: { src: __webpack_require__(/*! @/assets/公司.png */ "./src/assets/公司.png") },
                      }),
                      _vm._v(" " + _vm._s(_vm.pointObj.qymc) + " "),
                    ]
                  ),
                  _c("van-icon", {
                    staticClass: "close",
                    attrs: { name: "clear", color: "#A6ABB3", size: 20 },
                    on: {
                      click: function ($event) {
                        return _vm.$emit("close")
                      },
                    },
                  }),
                ],
                1
              ),
              _c("div", { staticClass: "infoContent" }, [
                _c("div", { staticClass: "infoBox" }, [
                  _c("p", [_vm._v("统一社会信用代码：")]),
                  _c("p", [_vm._v(_vm._s(_vm.pointObj.xydm))]),
                ]),
                _c("div", { staticClass: "infoBox" }, [
                  _c("p", [_vm._v("行业类别：")]),
                  _c("p", [_vm._v(_vm._s(_vm.pointObj.hylb))]),
                ]),
                _c("div", { staticClass: "infoBox" }, [
                  _c("p", [_vm._v("所在地址：")]),
                  _c("p", [_vm._v(_vm._s(_vm.pointObj.szdz))]),
                ]),
                _c("div", { staticClass: "infoBox" }, [
                  _c("p", [_vm._v("法定代表人：")]),
                  _c("p", [_vm._v(_vm._s(_vm.pointObj.fddbr))]),
                ]),
                _c("div", { staticClass: "infoBox" }, [
                  _c("p", [_vm._v("法定代表人电话号码：")]),
                  _c("p", [
                    _c(
                      "a",
                      {
                        staticStyle: {
                          color: "#447bfc",
                          "text-decoration": "underline",
                        },
                        attrs: { href: "tel:" + _vm.pointObj.fddbrdh },
                      },
                      [_vm._v(_vm._s(_vm.pointObj.fddbrdh))]
                    ),
                  ]),
                ]),
              ]),
            ],
      ],
      2
    ),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: !_vm.mapShow,
            expression: "!mapShow",
          },
        ],
        staticClass: "mapTab",
      },
      [
        _c(
          "div",
          {
            staticClass: "mapBtn",
            on: {
              click: function ($event) {
                return _vm.gdMap()
              },
            },
          },
          [_vm._v("高德地图")]
        ),
        _c(
          "div",
          {
            staticClass: "mapBtn",
            on: {
              click: function ($event) {
                return _vm.bdMap()
              },
            },
          },
          [_vm._v("百度地图")]
        ),
        _c(
          "div",
          {
            staticClass: "mapBtn",
            on: {
              click: function ($event) {
                return _vm.wyMap()
              },
            },
          },
          [_vm._v("自动获取地图")]
        ),
        _c(
          "div",
          {
            staticClass: "qxBtn",
            on: {
              click: function ($event) {
                return _vm.qx()
              },
            },
          },
          [_vm._v("取消")]
        ),
      ]
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/coordtransform/index.js":
/*!**********************************************!*\
  !*** ./node_modules/coordtransform/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Created by Wandergis on 2015/7/8.
 * 提供了百度坐标（BD09）、国测局坐标（火星坐标，GCJ02）、和WGS84坐标系之间的转换
 */
//UMD魔法代码
// if the module has no dependencies, the above pattern can be simplified to
(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function () {
  //定义一些常量
  var x_PI = 3.14159265358979324 * 3000.0 / 180.0;
  var PI = 3.1415926535897932384626;
  var a = 6378245.0;
  var ee = 0.00669342162296594323;
  /**
   * 百度坐标系 (BD-09) 与 火星坐标系 (GCJ-02)的转换
   * 即 百度 转 谷歌、高德
   * @param bd_lon
   * @param bd_lat
   * @returns {*[]}
   */
  var bd09togcj02 = function bd09togcj02(bd_lon, bd_lat) {
    var bd_lon = +bd_lon;
    var bd_lat = +bd_lat;
    var x = bd_lon - 0.0065;
    var y = bd_lat - 0.006;
    var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_PI);
    var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_PI);
    var gg_lng = z * Math.cos(theta);
    var gg_lat = z * Math.sin(theta);
    return [gg_lng, gg_lat]
  };

  /**
   * 火星坐标系 (GCJ-02) 与百度坐标系 (BD-09) 的转换
   * 即谷歌、高德 转 百度
   * @param lng
   * @param lat
   * @returns {*[]}
   */
  var gcj02tobd09 = function gcj02tobd09(lng, lat) {
    var lat = +lat;
    var lng = +lng;
    var z = Math.sqrt(lng * lng + lat * lat) + 0.00002 * Math.sin(lat * x_PI);
    var theta = Math.atan2(lat, lng) + 0.000003 * Math.cos(lng * x_PI);
    var bd_lng = z * Math.cos(theta) + 0.0065;
    var bd_lat = z * Math.sin(theta) + 0.006;
    return [bd_lng, bd_lat]
  };

  /**
   * WGS84转GCj02
   * @param lng
   * @param lat
   * @returns {*[]}
   */
  var wgs84togcj02 = function wgs84togcj02(lng, lat) {
    var lat = +lat;
    var lng = +lng;
    if (out_of_china(lng, lat)) {
      return [lng, lat]
    } else {
      var dlat = transformlat(lng - 105.0, lat - 35.0);
      var dlng = transformlng(lng - 105.0, lat - 35.0);
      var radlat = lat / 180.0 * PI;
      var magic = Math.sin(radlat);
      magic = 1 - ee * magic * magic;
      var sqrtmagic = Math.sqrt(magic);
      dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI);
      dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI);
      var mglat = lat + dlat;
      var mglng = lng + dlng;
      return [mglng, mglat]
    }
  };

  /**
   * GCJ02 转换为 WGS84
   * @param lng
   * @param lat
   * @returns {*[]}
   */
  var gcj02towgs84 = function gcj02towgs84(lng, lat) {
    var lat = +lat;
    var lng = +lng;
    if (out_of_china(lng, lat)) {
      return [lng, lat]
    } else {
      var dlat = transformlat(lng - 105.0, lat - 35.0);
      var dlng = transformlng(lng - 105.0, lat - 35.0);
      var radlat = lat / 180.0 * PI;
      var magic = Math.sin(radlat);
      magic = 1 - ee * magic * magic;
      var sqrtmagic = Math.sqrt(magic);
      dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI);
      dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI);
      var mglat = lat + dlat;
      var mglng = lng + dlng;
      return [lng * 2 - mglng, lat * 2 - mglat]
    }
  };

  var transformlat = function transformlat(lng, lat) {
    var lat = +lat;
    var lng = +lng;
    var ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng));
    ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(lat * PI) + 40.0 * Math.sin(lat / 3.0 * PI)) * 2.0 / 3.0;
    ret += (160.0 * Math.sin(lat / 12.0 * PI) + 320 * Math.sin(lat * PI / 30.0)) * 2.0 / 3.0;
    return ret
  };

  var transformlng = function transformlng(lng, lat) {
    var lat = +lat;
    var lng = +lng;
    var ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng));
    ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(lng * PI) + 40.0 * Math.sin(lng / 3.0 * PI)) * 2.0 / 3.0;
    ret += (150.0 * Math.sin(lng / 12.0 * PI) + 300.0 * Math.sin(lng / 30.0 * PI)) * 2.0 / 3.0;
    return ret
  };

  /**
   * 判断是否在国内，不在国内则不做偏移
   * @param lng
   * @param lat
   * @returns {boolean}
   */
  var out_of_china = function out_of_china(lng, lat) {
    var lat = +lat;
    var lng = +lng;
    // 纬度3.86~53.55,经度73.66~135.05 
    return !(lng > 73.66 && lng < 135.05 && lat > 3.86 && lat < 53.55);
  };

  return {
    bd09togcj02: bd09togcj02,
    gcj02tobd09: gcj02tobd09,
    wgs84togcj02: wgs84togcj02,
    gcj02towgs84: gcj02towgs84
  }
}));


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

/***/ "./node_modules/core-js/modules/es.array.from.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.from.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var from = __webpack_require__(/*! ../internals/array-from */ "./node_modules/core-js/internals/array-from.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");

var INCORRECT_ITERATION = !checkCorrectnessOfIteration(function (iterable) {
  // eslint-disable-next-line es/no-array-from -- required for testing
  Array.from(iterable);
});

// `Array.from` method
// https://tc39.es/ecma262/#sec-array.from
$({ target: 'Array', stat: true, forced: INCORRECT_ITERATION }, {
  from: from
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

/***/ "./node_modules/core-js/modules/es.regexp.test.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/es.regexp.test.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove from `core-js@4` since it's moved to entry points
__webpack_require__(/*! ../modules/es.regexp.exec */ "./node_modules/core-js/modules/es.regexp.exec.js");
var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");

var DELEGATES_TO_EXEC = function () {
  var execCalled = false;
  var re = /[ac]/;
  re.exec = function () {
    execCalled = true;
    return /./.exec.apply(this, arguments);
  };
  return re.test('abc') === true && execCalled;
}();

var nativeTest = /./.test;

// `RegExp.prototype.test` method
// https://tc39.es/ecma262/#sec-regexp.prototype.test
$({ target: 'RegExp', proto: true, forced: !DELEGATES_TO_EXEC }, {
  test: function (S) {
    var R = anObject(this);
    var string = toString(S);
    var exec = R.exec;
    if (!isCallable(exec)) return call(nativeTest, R, string);
    var result = call(exec, R, string);
    if (result === null) return false;
    anObject(result);
    return true;
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/air/mapAirWeather.vue?vue&type=style&index=0&id=13b30ce2&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/pop/air/mapAirWeather.vue?vue&type=style&index=0&id=13b30ce2&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".map-pop-wrapper[data-v-13b30ce2] {\n  position: fixed;\n  bottom: 12px;\n  left: 7px;\n  right: 7px;\n  background-color: #fff;\n  z-index: 9;\n  border-radius: 10px;\n}\n.map-pop-wrapper .pop-title-wrapper[data-v-13b30ce2] {\n  position: relative;\n  padding: 12px 30px 12px 18px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 14px;\n}\n.map-pop-wrapper .pop-title-wrapper .site-name[data-v-13b30ce2] {\n  display: inline-block;\n  max-width: 70%;\n  margin-left: 8px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  color: #121236;\n  font-size: 14px;\n}\n.map-pop-wrapper .pop-title-wrapper .time[data-v-13b30ce2] {\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.map-pop-wrapper .pop-title-wrapper .close[data-v-13b30ce2] {\n  position: absolute;\n  right: 0px;\n  top: 0px;\n}\n.map-pop-wrapper .pop-time[data-v-13b30ce2] {\n  margin-top: 11px;\n  margin-right: 15px;\n  text-align: right;\n  color: #999;\n  font-size: 12px;\n}\n.map-pop-wrapper .content-box[data-v-13b30ce2] {\n  margin: 5px;\n  border: 1px solid #447bfc;\n  border-radius: 10px;\n  background: linear-gradient(180deg, rgba(68, 123, 252, 0.1) 0%, rgba(68, 123, 252, 0) 20%);\n}\n.map-pop-wrapper .site-statu[data-v-13b30ce2], .map-pop-wrapper .content-monitor[data-v-13b30ce2] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.map-pop-wrapper .site-statu[data-v-13b30ce2] {\n  margin: 10px 0;\n}\n.map-pop-wrapper .site-statu .site-monitor-box[data-v-13b30ce2] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 33%;\n  margin-top: 10px;\n  font-size: 12px;\n  color: #25396f;\n}\n.map-pop-wrapper .site-statu .site-monitor-box img[data-v-13b30ce2] {\n  width: 12px;\n  height: 12px;\n}\n.map-pop-wrapper .content-monitor[data-v-13b30ce2] {\n  padding: 0 15px;\n}\n.map-pop-wrapper .content-monitor div[data-v-13b30ce2] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 27%;\n  margin: 0 10px 10px 0;\n  padding: 8px 6px;\n  color: #76aaeb;\n  font-size: 13px;\n  background-color: #f2f7ff;\n}\n.map-pop-wrapper .content-monitor div[data-v-13b30ce2]:nth-child(3n) {\n  margin-right: 0;\n}\n.map-pop-wrapper .content-monitor span[data-v-13b30ce2] {\n  color: #333;\n}\n.map-pop-wrapper .level0[data-v-13b30ce2] {\n  color: #78dd88;\n}\n.map-pop-wrapper .level1[data-v-13b30ce2] {\n  color: #f4cd4f;\n}\n.map-pop-wrapper .level2[data-v-13b30ce2] {\n  color: #ea9c3a;\n}\n.map-pop-wrapper .level3[data-v-13b30ce2] {\n  color: #cd7060;\n}\n.map-pop-wrapper .level4[data-v-13b30ce2] {\n  color: #7767cb;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/air/mapAirWry.vue?vue&type=style&index=0&lang=scss&scope=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/pop/air/mapAirWry.vue?vue&type=style&index=0&lang=scss&scope=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".airWyrInfo {\n  position: fixed;\n  bottom: 12px;\n  left: 7px;\n  right: 7px;\n  background-color: #fff;\n  z-index: 9;\n  border-radius: 10px;\n}\n.airWyrInfo .pointerTop {\n  width: calc(100% - 32px);\n  height: auto;\n  display: flex;\n  align-items: center;\n  position: relative;\n  justify-content: space-between;\n  padding: 0 16px;\n}\n.airWyrInfo .pointerTop .title {\n  font-size: 14px;\n  color: #25396f;\n  font-weight: normal;\n  text-decoration: none;\n}\n.airWyrInfo .pointerTop .van-icon {\n  height: auto;\n  margin-left: auto;\n}\n.airWyrInfo .pointerTop .close {\n  position: absolute;\n  right: 0px;\n  top: 0px;\n}\n.airWyrInfo .address {\n  padding-left: 35px;\n  padding-bottom: 15px;\n  font-size: 12px;\n  color: rgba(18, 18, 54, 0.5);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/air/mapSiteAir.vue?vue&type=style&index=0&id=4876e19b&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/pop/air/mapSiteAir.vue?vue&type=style&index=0&id=4876e19b&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".map-pop-wrapper[data-v-4876e19b] {\n  position: fixed;\n  bottom: 12px;\n  left: 7px;\n  right: 7px;\n  background-color: #fff;\n  z-index: 9;\n  border-radius: 10px;\n}\n.map-pop-wrapper .pop-title-wrapper[data-v-4876e19b] {\n  position: relative;\n  padding: 12px 30px 12px 18px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 14px;\n}\n.map-pop-wrapper .pop-title-wrapper .site-name[data-v-4876e19b] {\n  display: inline-block;\n  max-width: 70%;\n  margin-left: 8px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n  color: #121236;\n  font-size: 14px;\n}\n.map-pop-wrapper .pop-title-wrapper .time[data-v-4876e19b] {\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.map-pop-wrapper .pop-title-wrapper .close[data-v-4876e19b] {\n  position: absolute;\n  right: 0px;\n  top: 0px;\n}\n.map-pop-wrapper .pop-time[data-v-4876e19b] {\n  margin-top: 11px;\n  margin-right: 15px;\n  text-align: right;\n  color: #999;\n  font-size: 12px;\n}\n.map-pop-wrapper .content-box[data-v-4876e19b] {\n  margin: 5px;\n  border: 1px solid #447bfc;\n  border-radius: 10px;\n  background: linear-gradient(180deg, rgba(68, 123, 252, 0.1) 0%, rgba(68, 123, 252, 0) 20%);\n}\n.map-pop-wrapper .site-statu[data-v-4876e19b], .map-pop-wrapper .content-monitor[data-v-4876e19b] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.map-pop-wrapper .site-statu[data-v-4876e19b] {\n  margin-top: 15px;\n  margin-bottom: 10px;\n}\n.map-pop-wrapper .site-statu .site-monitor-box[data-v-4876e19b] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 33%;\n  margin-top: 10px;\n  font-size: 12px;\n  color: #25396f;\n}\n.map-pop-wrapper .site-statu .site-monitor-box img[data-v-4876e19b] {\n  width: 12px;\n  height: 12px;\n}\n.map-pop-wrapper .content-monitor[data-v-4876e19b] {\n  padding: 0 15px;\n}\n.map-pop-wrapper .content-monitor div[data-v-4876e19b] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 27%;\n  margin: 0 10px 10px 0;\n  padding: 8px 6px;\n  font-size: 13px;\n  color: #333;\n}\n.map-pop-wrapper .content-monitor div[data-v-4876e19b]:nth-child(3n) {\n  margin-right: 0;\n}\n\n/*.air_greenbg {*/\n/*  background: rgba(4, 199, 4, 0.05);*/\n/*  > span {*/\n/*    color: rgba(4, 199, 4, 1);*/\n/*  }*/\n/*}*/\n/*.air_yellow_bg {*/\n/*  background: linear-gradient(228.1deg, rgba(255, 191, 0, 0.05) 0%, rgba(255, 255, 255, 1) 100%);*/\n/*  > span {*/\n/*    color: rgba(255, 191, 0, 1);*/\n/*  }*/\n/*}*/\n/*.air_orangebg {*/\n/*  background: linear-gradient(228.1deg, rgba(255, 126, 0, 0.05) 0%, rgba(255, 255, 255, 1) 100%);*/\n/*  > span {*/\n/*    color: rgba(255, 126, 0, 1);*/\n/*  }*/\n/*}*/\n/*.air_redbg {*/\n/*  background: linear-gradient(228.1deg, rgba(255, 0, 0, 0.05) 0%, rgba(255, 255, 255, 1) 100%);*/\n/*  > span {*/\n/*    color: rgba(255, 0, 0, 1);*/\n/*  }*/\n/*}*/\n/*.air_whiterbg {*/\n/*  background: linear-gradient(228.1deg, rgba(4, 199, 4, 0.05) 0%, rgba(255, 255, 255, 1) 100%);*/\n/*  > span {*/\n/*    color: rgba(204, 204, 204, 1);*/\n/*  }*/\n/*}*/", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/water/branchSitePop.vue?vue&type=style&index=0&id=1e59dbf1&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/pop/water/branchSitePop.vue?vue&type=style&index=0&id=1e59dbf1&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".sitePointerInfo[data-v-1e59dbf1] {\n  position: fixed;\n  bottom: 12px;\n  left: 7px;\n  right: 7px;\n  background-color: #fff;\n  z-index: 9;\n  border-radius: 10px;\n}\n.sitePointerInfo .van-button__text[data-v-1e59dbf1] {\n  font-size: 14px !important;\n}\n.sitePointerInfo .gotround[data-v-1e59dbf1] {\n  font-size: 13px;\n  color: #1d63e5;\n  font-weight: bold;\n  text-align: right;\n  padding: 6px 10px 10px;\n}\n.sitePointerInfo .pointerTop[data-v-1e59dbf1] {\n  width: calc(100% - 32px);\n  height: auto;\n  display: flex;\n  align-items: center;\n  position: relative;\n  justify-content: space-between;\n  padding: 0 16px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.sitePointerInfo .pointerTop .title[data-v-1e59dbf1] {\n  font-size: 16px;\n  color: #121236;\n  font-weight: bold;\n}\n.sitePointerInfo .pointerTop .van-icon[data-v-1e59dbf1] {\n  height: auto;\n  margin-left: auto;\n}\n.sitePointerInfo .pointerTop .close[data-v-1e59dbf1] {\n  position: absolute;\n  right: -5px;\n  top: -5px;\n}\n.sitePointerInfo .infoContent[data-v-1e59dbf1] {\n  margin: 0 5px;\n  padding: 5px 0;\n  border-radius: 10px;\n  background: linear-gradient(180deg, rgba(68, 123, 252, 0.1) 0%, rgba(68, 123, 252, 0) 100%);\n  border: 1px solid rgba(68, 123, 252, 0.4);\n  border-bottom: 1px solid #fff;\n}\n.sitePointerInfo .infoContent .infoBox[data-v-1e59dbf1] {\n  padding: 5px 0;\n  width: calc(100% - 5vw);\n  margin-left: 2.5vw;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  color: #25396f;\n}\n.sitePointerInfo .mapTab[data-v-1e59dbf1] {\n  width: 100%;\n  background-color: #f9f9f9;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n.sitePointerInfo .mapTab .mapBtn[data-v-1e59dbf1] {\n  width: 100%;\n  height: 42px;\n  line-height: 42px;\n  font-size: 14px;\n  text-align: center;\n  color: #333333;\n  background: #ffffff;\n  border-bottom: 1px solid #eeeeee;\n}\n.sitePointerInfo .mapTab .mapBtn[data-v-1e59dbf1]:first-child {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n.sitePointerInfo .mapTab .qxBtn[data-v-1e59dbf1] {\n  width: 100%;\n  height: 42px;\n  line-height: 42px;\n  font-size: 14px;\n  text-align: center;\n  color: #333333;\n  background: #ffffff;\n  margin-top: 10px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/water/mapSiteWater.vue?vue&type=style&index=0&id=2f3cc2bb&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/pop/water/mapSiteWater.vue?vue&type=style&index=0&id=2f3cc2bb&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @/assets/popStandard.png */ "./src/assets/popStandard.png");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! @/assets/popExceed.png */ "./src/assets/popExceed.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, ".map-pop-wrapper[data-v-2f3cc2bb] {\n  position: fixed;\n  bottom: 12px;\n  left: 7px;\n  right: 7px;\n  background-color: #fff;\n  z-index: 9;\n  border-radius: 10px;\n}\n.map-pop-wrapper .name[data-v-2f3cc2bb] {\n  display: flex;\n  align-items: center;\n  font-size: 18px;\n  color: #121236;\n  font-weight: bold;\n}\n.map-pop-wrapper .pop-title-wrapper[data-v-2f3cc2bb] {\n  position: relative;\n  padding: 8px 17px 0;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 14px;\n}\n.map-pop-wrapper .pop-title-wrapper .standard[data-v-2f3cc2bb], .map-pop-wrapper .pop-title-wrapper .exceed[data-v-2f3cc2bb] {\n  position: absolute;\n  left: -5px;\n  top: -10px;\n  width: 92px;\n  height: 26px;\n}\n.map-pop-wrapper .pop-title-wrapper .standard[data-v-2f3cc2bb] {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n  background-position: center;\n  background-size: 100% 100%;\n}\n.map-pop-wrapper .pop-title-wrapper .exceed[data-v-2f3cc2bb] {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat;\n  background-position: center;\n  background-size: 100% 100%;\n}\n.map-pop-wrapper .pop-title-wrapper .close[data-v-2f3cc2bb] {\n  position: absolute;\n  right: 5px;\n  top: 3px;\n}\n.map-pop-wrapper .name-wrapper[data-v-2f3cc2bb] {\n  margin: 11px 7px;\n}\n.map-pop-wrapper .content-standard[data-v-2f3cc2bb] {\n  border-radius: 10px;\n  background: linear-gradient(180deg, rgba(0, 186, 173, 0.1) 0%, rgba(0, 186, 173, 0) 100%);\n  border: 1px solid rgba(0, 186, 173, 0.2);\n}\n.map-pop-wrapper .content-exceed[data-v-2f3cc2bb] {\n  border-radius: 10px;\n  background: linear-gradient(180deg, rgba(250, 7, 7, 0.1) 0%, rgba(250, 12, 10, 0) 100%);\n  border: 1px solid rgba(250, 7, 7, 0.2);\n}\n.map-pop-wrapper .content-monitor[data-v-2f3cc2bb] {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0 5px 5px;\n  padding: 10px 15px 6px;\n  border-bottom: 1px solid #fff;\n}\n.map-pop-wrapper .content-monitor div[data-v-2f3cc2bb] {\n  width: 50%;\n  padding-bottom: 4px;\n  color: #25396f;\n  font-size: 14px;\n}\n.map-pop-wrapper .content-monitor .notice[data-v-2f3cc2bb] {\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  width: 100%;\n  padding: 6px 12px 0;\n  color: #8695AA;\n  font-size: 12px;\n}\n.map-pop-wrapper .content-monitor .notice img[data-v-2f3cc2bb] {\n  margin-right: 4px;\n}\n.map-pop-wrapper .target-level[data-v-2f3cc2bb] {\n  display: inline-block;\n  margin-left: 5px;\n  width: 30px;\n  height: 18px;\n  line-height: 18px;\n  border-radius: 4px;\n  font-size: 12px;\n  text-align: center;\n  box-sizing: border-box;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/water/zfxsPop.vue?vue&type=style&index=0&id=1c0ff85a&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/pop/water/zfxsPop.vue?vue&type=style&index=0&id=1c0ff85a&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".sitePointerInfo[data-v-1c0ff85a] {\n  position: fixed;\n  bottom: 12px;\n  left: 7px;\n  right: 7px;\n  background-color: #fff;\n  z-index: 9;\n  border-radius: 10px;\n}\n.sitePointerInfo .van-button__text[data-v-1c0ff85a] {\n  font-size: 14px !important;\n}\n.sitePointerInfo .gotround[data-v-1c0ff85a] {\n  font-size: 13px;\n  color: #1d63e5;\n  font-weight: bold;\n  text-align: right;\n  padding: 6px 10px 10px;\n}\n.sitePointerInfo .pointerTop[data-v-1c0ff85a] {\n  width: calc(100% - 32px);\n  height: auto;\n  display: flex;\n  align-items: center;\n  position: relative;\n  justify-content: space-between;\n  padding: 0 16px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.sitePointerInfo .pointerTop .title[data-v-1c0ff85a] {\n  font-size: 16px;\n  color: #121236;\n  font-weight: bold;\n}\n.sitePointerInfo .pointerTop .van-icon[data-v-1c0ff85a] {\n  height: auto;\n  margin-left: auto;\n}\n.sitePointerInfo .pointerTop .close[data-v-1c0ff85a] {\n  position: absolute;\n  right: -5px;\n  top: -5px;\n}\n.sitePointerInfo .infoContent[data-v-1c0ff85a] {\n  margin: 0 5px;\n  padding: 5px 0;\n  border-radius: 10px;\n  background: linear-gradient(180deg, rgba(68, 123, 252, 0.1) 0%, rgba(68, 123, 252, 0) 100%);\n  border: 1px solid rgba(68, 123, 252, 0.4);\n  border-bottom: 1px solid #fff;\n}\n.sitePointerInfo .infoContent .infoBox[data-v-1c0ff85a] {\n  padding: 5px 0;\n  width: calc(100% - 5vw);\n  margin-left: 2.5vw;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  color: #25396f;\n}\n.sitePointerInfo .infoContent .infoBox .title[data-v-1c0ff85a] {\n  width: 60px;\n}\n.sitePointerInfo .infoContent .infoBox .words[data-v-1c0ff85a] {\n  width: calc(100% - 60px);\n}\n.sitePointerInfo .mapTab[data-v-1c0ff85a] {\n  width: 100%;\n  background-color: #f9f9f9;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n.sitePointerInfo .mapTab .mapBtn[data-v-1c0ff85a] {\n  width: 100%;\n  height: 42px;\n  line-height: 42px;\n  font-size: 14px;\n  text-align: center;\n  color: #333333;\n  background: #ffffff;\n  border-bottom: 1px solid #eeeeee;\n}\n.sitePointerInfo .mapTab .mapBtn[data-v-1c0ff85a]:first-child {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n.sitePointerInfo .mapTab .qxBtn[data-v-1c0ff85a] {\n  width: 100%;\n  height: 42px;\n  line-height: 42px;\n  font-size: 14px;\n  text-align: center;\n  color: #333333;\n  background: #ffffff;\n  margin-top: 10px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/wry/mapPurPlant.vue?vue&type=style&index=0&lang=scss&scope=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/pop/wry/mapPurPlant.vue?vue&type=style&index=0&lang=scss&scope=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".pointerInfo {\n  position: fixed;\n  bottom: 12px;\n  left: 7px;\n  right: 7px;\n  background-color: #fff;\n  z-index: 9;\n  border-radius: 10px;\n}\n.pointerInfo .pointerTop {\n  width: calc(100% - 32px);\n  height: auto;\n  display: flex;\n  align-items: center;\n  position: relative;\n  justify-content: space-between;\n  padding: 0 16px;\n}\n.pointerInfo .pointerTop .title {\n  font-size: 16px;\n  color: #121236;\n  font-weight: bold;\n  text-decoration: underline;\n}\n.pointerInfo .pointerTop .van-icon {\n  height: auto;\n  margin-left: auto;\n}\n.pointerInfo .pointerTop .close {\n  position: absolute;\n  right: 5px;\n  top: 3px;\n}\n.pointerInfo .infoContent {\n  margin: 0 5px;\n  padding: 0 15px;\n  border-radius: 10px;\n  background: linear-gradient(180deg, rgba(68, 123, 252, 0.1) 0%, rgba(68, 123, 252, 0) 100%);\n  border: 1px solid rgba(68, 123, 252, 0.4);\n  border-bottom: 1px solid #fff;\n}\n.pointerInfo .infoContent .infoBox {\n  width: calc(100% - 5vw);\n  height: auto;\n  margin-left: 2.5vw;\n  display: flex;\n}\n.pointerInfo .infoContent .infoBox p {\n  font-size: 12px;\n  color: #25396f;\n  margin: 6px 0;\n}\n.pointerInfo .infoContent .infoBox p:nth-child(1) {\n  white-space: nowrap;\n}\n.pointerInfo .infoContent .infoBox p a {\n  color: #666;\n  text-decoration: underline;\n}\n.pointerInfo .infoContent .infoBox p:first-child {\n  color: rgba(37, 57, 111, 0.5);\n}\n.pointerInfo .infoContent .infoBox:first-child {\n  margin-top: 2vw;\n}\n.pointerInfo .infoContent .infoBox:last-child {\n  margin-bottom: 2vw;\n}\n.pointerInfo .daohang {\n  position: fixed;\n  bottom: 20px;\n  right: 30px;\n}\n.pointerInfo .daohang2 {\n  width: 200px;\n  line-height: 60px;\n  background: #fff;\n  border-radius: 25px;\n  text-align: center;\n  text-decoration: underline;\n  font-size: 14px;\n  color: #a0a0ff;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/wry/mapWry.vue?vue&type=style&index=0&lang=scss&scope=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/pop/wry/mapWry.vue?vue&type=style&index=0&lang=scss&scope=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".pointerInfo {\n  position: fixed;\n  bottom: 12px;\n  left: 7px;\n  right: 7px;\n  background-color: #fff;\n  z-index: 9;\n  border-radius: 10px;\n}\n.pointerInfo .pointerTop {\n  width: calc(100% - 32px);\n  height: auto;\n  display: flex;\n  align-items: center;\n  position: relative;\n  justify-content: space-between;\n  padding: 0 16px;\n}\n.pointerInfo .pointerTop .title {\n  font-size: 16px;\n  color: #121236;\n  font-weight: bold;\n  text-decoration: underline;\n}\n.pointerInfo .pointerTop .van-icon {\n  height: auto;\n  margin-left: auto;\n}\n.pointerInfo .pointerTop .close {\n  position: absolute;\n  right: 5px;\n  top: 3px;\n}\n.pointerInfo .infoContent {\n  margin: 0 5px;\n  padding: 0 15px;\n  border-radius: 10px;\n  background: linear-gradient(180deg, rgba(68, 123, 252, 0.1) 0%, rgba(68, 123, 252, 0) 100%);\n  border: 1px solid rgba(68, 123, 252, 0.4);\n  border-bottom: 1px solid #fff;\n}\n.pointerInfo .infoContent .infoBox {\n  width: calc(100% - 5vw);\n  height: auto;\n  margin-left: 2.5vw;\n  display: flex;\n}\n.pointerInfo .infoContent .infoBox p {\n  font-size: 12px;\n  color: #25396f;\n  margin: 6px 0;\n}\n.pointerInfo .infoContent .infoBox p:nth-child(1) {\n  white-space: nowrap;\n}\n.pointerInfo .infoContent .infoBox p a {\n  color: #666;\n  text-decoration: underline;\n}\n.pointerInfo .infoContent .infoBox p:first-child {\n  color: rgba(37, 57, 111, 0.5);\n}\n.pointerInfo .infoContent .infoBox:first-child {\n  margin-top: 2vw;\n}\n.pointerInfo .infoContent .infoBox:last-child {\n  margin-bottom: 2vw;\n}\n.pointerInfo .daohang {\n  position: fixed;\n  bottom: 20px;\n  right: 30px;\n}\n.pointerInfo .daohang2 {\n  width: 200px;\n  line-height: 60px;\n  background: #fff;\n  border-radius: 25px;\n  text-align: center;\n  text-decoration: underline;\n  font-size: 14px;\n  color: #a0a0ff;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/wry/mapWryOther.vue?vue&type=style&index=0&lang=scss&scope=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/pop/wry/mapWryOther.vue?vue&type=style&index=0&lang=scss&scope=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".gotround {\n  font-size: 13px;\n  color: #1d63e5;\n  font-weight: bold;\n  text-align: right;\n  padding: 6px 10px 10px;\n}\n.mapTab {\n  width: 100%;\n  background-color: #f9f9f9;\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n  line-height: 42px;\n  font-size: 14px;\n  color: #333333;\n}\n.mapTab .mapBtn {\n  width: 100%;\n  text-align: center;\n  color: #333333;\n  background: #ffffff;\n  border-bottom: 1px solid #eeeeee;\n}\n.mapTab .mapBtn:first-child {\n  border-top-left-radius: 20px;\n  border-top-right-radius: 20px;\n}\n.mapTab .qxBtn {\n  width: 100%;\n  text-align: center;\n  background: #ffffff;\n  margin-top: 10px;\n}\n.pointerInfo {\n  position: fixed;\n  bottom: 12px;\n  left: 7px;\n  right: 7px;\n  /*width: 100%;*/\n  background-color: #fff;\n  z-index: 9;\n  border-radius: 10px;\n}\n.pointerInfo .pointerTop {\n  width: calc(100% - 32px);\n  height: auto;\n  display: flex;\n  align-items: center;\n  position: relative;\n  justify-content: space-between;\n  padding: 0 16px;\n}\n.pointerInfo .pointerTop .title {\n  font-size: 16px;\n  color: #121236;\n  font-weight: bold;\n  text-decoration: underline;\n}\n.pointerInfo .pointerTop .van-icon {\n  height: auto;\n  margin-left: auto;\n}\n.pointerInfo .pointerTop .close {\n  position: absolute;\n  right: 5px;\n  top: 3px;\n}\n.pointerInfo .infoContent {\n  margin: 0 5px;\n  padding: 0 15px;\n  border-radius: 10px;\n  background: linear-gradient(180deg, rgba(68, 123, 252, 0.1) 0%, rgba(68, 123, 252, 0) 100%);\n  border: 1px solid rgba(68, 123, 252, 0.4);\n  border-bottom: 1px solid #fff;\n}\n.pointerInfo .infoContent .infoBox {\n  width: calc(100% - 5vw);\n  height: auto;\n  margin-left: 2.5vw;\n  display: flex;\n}\n.pointerInfo .infoContent .infoBox p {\n  font-size: 12px;\n  color: #25396f;\n  margin: 6px 0;\n}\n.pointerInfo .infoContent .infoBox p:nth-child(1) {\n  white-space: nowrap;\n}\n.pointerInfo .infoContent .infoBox p a {\n  color: #666;\n  text-decoration: underline;\n}\n.pointerInfo .infoContent .infoBox p:first-child {\n  color: rgba(37, 57, 111, 0.5);\n}\n.pointerInfo .infoContent .infoBox:first-child {\n  margin-top: 2vw;\n}\n.pointerInfo .infoContent .infoBox:last-child {\n  margin-bottom: 2vw;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/air/mapAirWeather.vue?vue&type=style&index=0&id=13b30ce2&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/pop/air/mapAirWeather.vue?vue&type=style&index=0&id=13b30ce2&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./mapAirWeather.vue?vue&type=style&index=0&id=13b30ce2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/air/mapAirWeather.vue?vue&type=style&index=0&id=13b30ce2&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("34401dac", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/air/mapAirWry.vue?vue&type=style&index=0&lang=scss&scope=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/pop/air/mapAirWry.vue?vue&type=style&index=0&lang=scss&scope=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./mapAirWry.vue?vue&type=style&index=0&lang=scss&scope=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/air/mapAirWry.vue?vue&type=style&index=0&lang=scss&scope=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("bb0255ce", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/air/mapSiteAir.vue?vue&type=style&index=0&id=4876e19b&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/pop/air/mapSiteAir.vue?vue&type=style&index=0&id=4876e19b&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./mapSiteAir.vue?vue&type=style&index=0&id=4876e19b&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/air/mapSiteAir.vue?vue&type=style&index=0&id=4876e19b&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5914ea02", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/water/branchSitePop.vue?vue&type=style&index=0&id=1e59dbf1&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/pop/water/branchSitePop.vue?vue&type=style&index=0&id=1e59dbf1&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./branchSitePop.vue?vue&type=style&index=0&id=1e59dbf1&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/water/branchSitePop.vue?vue&type=style&index=0&id=1e59dbf1&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("6e7388a7", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/water/mapSiteWater.vue?vue&type=style&index=0&id=2f3cc2bb&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/pop/water/mapSiteWater.vue?vue&type=style&index=0&id=2f3cc2bb&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./mapSiteWater.vue?vue&type=style&index=0&id=2f3cc2bb&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/water/mapSiteWater.vue?vue&type=style&index=0&id=2f3cc2bb&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("68b613b1", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/water/zfxsPop.vue?vue&type=style&index=0&id=1c0ff85a&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/pop/water/zfxsPop.vue?vue&type=style&index=0&id=1c0ff85a&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./zfxsPop.vue?vue&type=style&index=0&id=1c0ff85a&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/water/zfxsPop.vue?vue&type=style&index=0&id=1c0ff85a&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("cee6d368", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/wry/mapPurPlant.vue?vue&type=style&index=0&lang=scss&scope=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/pop/wry/mapPurPlant.vue?vue&type=style&index=0&lang=scss&scope=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./mapPurPlant.vue?vue&type=style&index=0&lang=scss&scope=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/wry/mapPurPlant.vue?vue&type=style&index=0&lang=scss&scope=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("672bb43e", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/wry/mapWry.vue?vue&type=style&index=0&lang=scss&scope=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/pop/wry/mapWry.vue?vue&type=style&index=0&lang=scss&scope=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./mapWry.vue?vue&type=style&index=0&lang=scss&scope=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/wry/mapWry.vue?vue&type=style&index=0&lang=scss&scope=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("7a10b391", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/wry/mapWryOther.vue?vue&type=style&index=0&lang=scss&scope=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/pop/wry/mapWryOther.vue?vue&type=style&index=0&lang=scss&scope=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./mapWryOther.vue?vue&type=style&index=0&lang=scss&scope=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/wry/mapWryOther.vue?vue&type=style&index=0&lang=scss&scope=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3c07eaee", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/api/clue.js":
/*!*************************!*\
  !*** ./src/api/clue.js ***!
  \*************************/
/*! exports provided: getInHandCount, getInHandCheckList, getClueDetail, getMineClueList, leaderCheck, hbmLeaderCheck, leaderCheckTwo, deptApproval, queryLeaderList, queryDepartmentList, queryDeptPersonList, queryLawList, broanchDistribute, saveCheckRecord, uploadFiles, addVerify, broanchVerify, finishFlow, hbmFinishFlow, feedBack, getXs, xsDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInHandCount", function() { return getInHandCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInHandCheckList", function() { return getInHandCheckList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClueDetail", function() { return getClueDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMineClueList", function() { return getMineClueList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leaderCheck", function() { return leaderCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hbmLeaderCheck", function() { return hbmLeaderCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leaderCheckTwo", function() { return leaderCheckTwo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deptApproval", function() { return deptApproval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryLeaderList", function() { return queryLeaderList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryDepartmentList", function() { return queryDepartmentList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryDeptPersonList", function() { return queryDeptPersonList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryLawList", function() { return queryLawList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "broanchDistribute", function() { return broanchDistribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveCheckRecord", function() { return saveCheckRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadFiles", function() { return uploadFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addVerify", function() { return addVerify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "broanchVerify", function() { return broanchVerify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finishFlow", function() { return finishFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hbmFinishFlow", function() { return hbmFinishFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedBack", function() { return feedBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getXs", function() { return getXs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xsDetail", function() { return xsDetail; });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./src/api/request.js");

/**
 * 查询待办数量
 * */

function getInHandCount(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/manage/qr_clue/user_count',
    method: 'get',
    params: data
  });
} //待办事项--待办审核列表

function getInHandCheckList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/manage/qr_clue/audit_list',
    method: 'get',
    params: data
  });
} //线索详情

function getClueDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/manage/qr_clue/one_detail',
    method: 'get',
    params: data
  });
} //我的审批列表

function getMineClueList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/manage/qr_clue/list',
    method: 'get',
    params: data
  });
} // 流程1：分管局长审批

var leaderCheck = function leaderCheck(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/manage/qr_clue/one_leader_approve',
    method: 'post',
    data: data
  });
}; // 闭环：分管局长审批

var hbmLeaderCheck = function hbmLeaderCheck(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/qr_clue/one_leader_approve',
    method: 'post',
    data: data
  });
}; // 流程2：分管局长审批

var leaderCheckTwo = function leaderCheckTwo(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/manage/qr_clue/two_leader_approve',
    method: 'post',
    data: data
  });
}; // 流程2：对口业务部门审核

var deptApproval = function deptApproval(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/manage/qr_clue/manage_dept_examine',
    method: 'post',
    data: data
  });
}; // 分管领导--下拉框

var queryLeaderList = function queryLeaderList() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/manage/qr_clue/user_info',
    method: 'get',
    params: {}
  });
}; //分发部门下拉

var queryDepartmentList = function queryDepartmentList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/manage/qr_clue/distribution_dept',
    method: 'get',
    params: data
  });
}; //分发部门--人员下拉

var queryDeptPersonList = function queryDeptPersonList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/manage/qr_clue/distribution_user',
    method: 'get',
    params: data
  });
}; //执法支队人员下拉

var queryLawList = function queryLawList() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/manage/qr_clue/detachment_user',
    method: 'get',
    params: {}
  });
}; // 支队分发

var broanchDistribute = function broanchDistribute(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/manage/qr_clue/distribution',
    method: 'post',
    data: data
  });
}; //保存现场监查记录

var saveCheckRecord = function saveCheckRecord(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/manage/qr_clue/record_examination',
    method: 'post',
    data: data
  });
}; //上传附件

function uploadFiles(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/minio/upload",
    method: "post",
    headers: {
      "content-type": "multipart/form-data"
    },
    data: data
  });
} //新增核实信息

var addVerify = function addVerify(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/manage/qr_clue/checking',
    method: 'post',
    data: data
  });
}; //支队核实

var broanchVerify = function broanchVerify(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/manage/qr_clue/verify',
    method: 'post',
    data: data
  });
}; //办结

var finishFlow = function finishFlow(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/manage/qr_clue/completion',
    method: 'post',
    data: data
  });
}; // 闭环：分管局长审批

var hbmFinishFlow = function hbmFinishFlow(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/qr_clue/completion',
    method: 'post',
    data: data
  });
}; //整改情况反馈

var feedBack = function feedBack(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/qr_clue/rectification',
    method: 'post',
    data: data
  });
}; //线索列表

var getXs = function getXs(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/manage/qr_clue/clue_list',
    method: 'get',
    params: data
  });
}; //线索详情

var xsDetail = function xsDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/manage/qr_clue/detail',
    method: 'get',
    params: data
  });
};

/***/ }),

/***/ "./src/api/old_air.js":
/*!****************************!*\
  !*** ./src/api/old_air.js ***!
  \****************************/
/*! exports provided: dayData, realData, yearData, stationData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dayData", function() { return dayData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "realData", function() { return realData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yearData", function() { return yearData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stationData", function() { return stationData; });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request */ "./src/api/request.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);



function dayData() {
  return new Promise(function (resolve, reject) {
    axios__WEBPACK_IMPORTED_MODULE_2___default()({
      url: 'http://116.52.6.118:18899/KQZLYZW/home/homeaqi?type=1'
    }).then(function (res) {
      resolve(res.data);
    }).catch(function (e) {
      reject(e);
    });
  });
}
function realData() {
  return new Promise(function (resolve, reject) {
    axios__WEBPACK_IMPORTED_MODULE_2___default()({
      url: 'http://116.52.6.118:18899/KQZLYZW/home/realdata?type=1'
    }).then(function (res) {
      resolve(res.data);
    }).catch(function (e) {
      reject(e);
    });
  });
}
function yearData() {
  return new Promise(function (resolve, reject) {
    axios__WEBPACK_IMPORTED_MODULE_2___default()({
      // url: 'http://116.52.6.118:18899/KQZLYZW/home/getKqzlZj?id='
      url: 'http://10.221.29.4:18899/KQZLYZW/home/getKqzlZj?id='
    }).then(function (res) {
      resolve(res.data);
    }).catch(function (e) {
      reject(e);
    });
  });
}
function stationData(type) {
  return new Promise(function (resolve, reject) {
    axios__WEBPACK_IMPORTED_MODULE_2___default()({
      // url: 'http://116.52.6.118:18899/KQZLYZW/home/realdata?type=' + type
      url: 'http://10.221.29.4:18899/KQZLYZW/home/realdata?type=' + type
    }).then(function (res) {
      resolve(res.data);
    }).catch(function (e) {
      reject(e);
    });
  });
}

/***/ }),

/***/ "./src/assets/point/编组 2.png":
/*!***********************************!*\
  !*** ./src/assets/point/编组 2.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAUCAYAAACAl21KAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEqADAAQAAAABAAAAFAAAAAAV6Uf1AAACV0lEQVQ4EZVUTWgTURCeecnWNu1a2u6W2p4qKP4UFMRLguJFiyL1ZBARimkR9SKKeFEhIiiIB39umsQ/eqlXBasiLSXiQREVEaogSC2SrdZGTSU/O87bsMvmJbXtO7w375tvvp2dmV0EZc0O97bms79jgLCLANYiUCsRzCDgBCE8Cgkt1XRw9JsSxnTfspLhEwAYJyLdB1eaCHMI4pKhrziP0fsl1+kIEcXFdPLJPQLa7zoWPBFGTL2rj8XykivkZt16fGFJIjKIoNfKTt2Qplz4PbVlnW3bb1goWIaWtqMIbDNj42PBEtmHWb5KROvYCI2bj0CwZSUUZ79A7tVNyE++qH4K2UcZHBPIKareYNsqaN55FbT2HkAtBJqxBpbvuAxaxwaVKl9xuwQFt7RL9TasjwKKyiQRERp69qlU1qEWenlIk8XOqV4RMlXIuYvG9lp4DjZ1lgQP3AfVW7Deq5BzL2aqcc70HWLcFkSYVqPm3g5BceZzBVz6NQV/XqcqMHlBwqfO+fPu1u5CvviJPwdnpjxmoA7qV+92ulbirv2deABUqKwCfzZFUa91tx0YnXQmO5OIDHP593oiizT4tZLmQHpQ0p0shLbsODclu8j4Mg0hU6c3nXJjHCGj/9lXTu2YCy50MtdGCsSaoyM/XK5XF2Pg+W1O9Yrr+N+JAs+Yg+MP/RxPSIKG3nmSxYb8BNXmeblmxNIXq3A/IP8vLNbPTb3jxz0b8TpnXrMETtc8os+wEpFzPCRn+e/ISQLxdrpWJr6Q+U0rGenLJMIfp1PhPfOzyp5/HeKyKlZeIgIAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/popExceed.png":
/*!**********************************!*\
  !*** ./src/assets/popExceed.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALgAAAA0CAYAAAA5QfJkAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAVjSURBVHic7Z1RbuMgEIaHKqfJa/y+6R0q1SfY3qJpe4vmBF0pd6j3vXnNddgHL8lkwmDAYCCaT6rUYhuT5PfPMECqIBLdd9vxF71DxdvY+gRhBgMo9a6+fgZ6YBVak+67N9D6F2i9TdEyQUjAFrQGABjoAW+B/xf27n9FglAXSv21FU8KXPfdFrT+FmELlTPYCpXrirNrC0K9DOrP8ZE7+MAdEHEL1aPUo0vcAIyDi7iFynG6NubGwUXcQtUo9e4rbgDi4CJuoWLYXLeL6yyKiFuokVHYbzGXnkMU3XdRFQhCRgZQ6jFW3ADYwXO593oz/hgO+yy3Ee6MGa6NWQGcY+/Zbbrh6ff4g1lvAE5HEbrAERVrc4wOrvWvFJWdWW8AXj/5Y8bRReQCJpFrX1UJAKCfN2nse70ZHRuHJFMc9uWFbtpt4+Pl9txQTkd7ue29Ouz58++XpK6NWSUJT2KEbTBhTEmhG0H5tD/mdfYdf18uhMN/c71hzD1rI4NrY4KXy95gi7Pn1LOk0OkAmEIFeNjHPcSu+6c4h9JGD5DNtTGrWfF3KnHTOk/HZT4kV2hijtPxgsvtT8fb8tDXkeJ11y7wzK6NmefgKd2sBDHtNzH51891uel5aDkV21SIQ3uMGsYo6VjEtTErSL3NzOZiHIe93UFpHJqTKUe2/W5rs68Ip3o83I7anTiEBV0bMz8Gp5gswOunW+gfL5eHoVRPgDMk1HkB+IwGFakR99TraL3Hi2Nx18akF/jT71E4hz0/+jfCic28pAA/WFwb8DlmXOByb59eAMfy9P3BvQB3L1+WGse48V7Wmov0AjcDNxM70g8Jf8ipB6gh+KTebBkUl3vbjlGRmYfGlRsHGNN8MelBQ+k04biGZCjbiBwCB7hkQowobGtRSoo7FuqK9GHFx7jwBvcI1PHx3+2GM8VdG5NH4AD2UAWHJiUFvt7YB4Wu8MP0RrasCADv1CEZECN6Uxe91jZesYUipUKTQgNJF/kETkMVAL6bXxpfAdBFYaHtpgLlHgbu3j4pRrqUoBxDbeIGyClwgOtQBZfVABWLTXS5nHAqlWrui98r1zX0vPKDy2pgd9UnA7/5JbMmU3DpwK8fPuX58TIO5vou3EmnZjxNT4fDOds1tvPKsK1x00xeBwe4DklqcW+A8AmVqRSgDd943ZS5BpktuLLWO913UFOoMs/BQ2bvQsSde2qac0KOXA+AL9wirxpFr/VOP290LW4+z8FT57SX2unjK3CcS7blpEPy1CErB22TQK1RiZvPD1HwoCZW5EbYIetY5mDLP8eEBCGu78p/0/N9H8AaHRwzuvmuZPpwnsDpGm6TK/YVOhX2UmvCqVhC2usLd25ouTlW6+Dch4JuHi9wOng0kxq+QscipucakecgRCgpvw1gapaSa9fUOpdWhF/IzeMFbttq9fp5cWVO6C5h0/pziNxXELFbxTA4hschim19zul4STXa7tuKkKdY2M3jBO7KZ2Ohm6l6un7DRzxGBLkHnX23bBrTNaHE7Qiyvdctb4K4uHn2BVnxAg+hpsEQnfUDuF1vAjDfMelrNu7sUy+91mYGdGlti2j9rfsua8iior4ywpaFoKI3Gxo4bOEJdvtWPzQfQjIiLWZPwsm2KSJO4DbwdDaOJ13gXTT3tfdQiCHDADTdWhQsaF+h4t0tIm5hjM2/z/+iMgHpHBwgbg30khuMhXZI5OZpBS4IKUkgchG4UD8pvgBfEKplnBx6i7lUHFxoi0A3FwcX2iLQzcXBhXbxcHNxcKFdPNxcHFy4D5iFW+Lgwn3A/JfABwAYlm2JIGRAqb+24gdQ6h1E5ELbDMBo+B+95e7V7FFf7gAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/popStandard.png":
/*!************************************!*\
  !*** ./src/assets/popStandard.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

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

/***/ "./src/assets/公司.png":
/*!***************************!*\
  !*** ./src/assets/公司.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFuSURBVFiF7VdbioQwEKxe9FyrkFsZiILeSph4rgi9HybiqEkm+JqPLZif0e6qdPol8DDoqAMhTQGgAKD7Nte3CBDSFGBSlnjhjZu+zesUX9nHhABmUn57rEE8gEmB6TeFPChgcUqAVyedSBsXcitQpZLvChDV+MLeKQEsSc/Cm4CZ3JESNwBwNqlXAFw2d1l5FeEaP3cRfa2AaBnavNiCeEit+WQBUyluSnACH26icQE2+1OYClGNnNIRr8kBJiWkeUSABnEJQINJiWrkmJB4Ero5sIKvOdn/tZCmtvNBCWngu5JgBOw8eO39RDVyyLZv87rvMgJxE4pGNAmFNI3nsQ7ZLoUIaeCLRvQKzqh166MW1ch2ws4+H++Ejwu4rBXPdpH3jrTiAou79NoF3osKsFWwuxuElpSQXZKAGNEZdo8n4b+AedbPfX+xDSfAfUOEbSf/AHHpcoSAzTp+F3TfZWVmFQ1nrVgfIz3K1+APOTPQdN+wLWUAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/编组.png":
/*!***************************!*\
  !*** ./src/assets/编组.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAcCAYAAAB75n/uAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAGKADAAQAAAABAAAAHAAAAAAXtdNtAAAEYklEQVRIDY1VTWhcVRi9333vOZUYZ6hGqlAoVTcuq6CLCAZpbYRiFlJ/ECxFkkobp7EFFSyZtjQoFaZJNma6FcVqFy5qMEUEsxGsXVkQBCnURalYJhZJ0mTe9Zzv3jszeWmKj3nv/p3vnPN99743Yu5yDb3dfNKIe1GMG3DObDfG9Rkj/P0lRv5A74cklW+/mqr8shENMOuvlw82n1/N83ER86wzDnxKCv6ALUaJzCdWjn89Vfm+yLYGOjrqSn+2mh+LuCq5BAp6wT41/CMIYkRxnSXOCQZu6hGpvDc9Lcu6gEdbYHjGZX//uvCNcW6wO9CBvC0UoxjYJeinOUEjMrv5ifJLjRFZ4bz1i8bcvNI8C+eDlLRWcFslYZ8C2gLtW++LIiquLfrEGjfY/O2fs5FXka+MNXe1cvddp9bqBIa8ey0EHyRCo11NAT0/UKyuY16zTtMXvjx935zFAMWTunfqCdQJyZAFg6zY2SxNd6eJ7UtwZ0m6G/hZzUAzBCbxmdI5uazL6+SWV48uPO1a7ifWo13vaFPBZuyLT8pnGFi8Xju6cBhJ1nU+xGhicMV9zLLsGStOhtQxVdWFz4Iu4Pb8RuQk5Rr26rw6ZjzuuCfs53k+ZKHYHzZH6xvBWhorJ4uui2PgT3rXWNGyRiEOXb/FOXqYKjELBbHu1i4+dm/PlSJhcUwM9moxGqOY3syG3Li24HMQ0vMbRIS1brlWk9UiYXE8Pm5aAmznYLBMXgQKW5ABthpqoSSaCd0AVXnzw6VHi4TF8b5jy9tR90p0HasB49hT40h1nZNxAWMVY4Bx+XCRcN1Y8mFuLG9vjO+O58DzOoTkcsyAC+wTqEHWHNlXW3xuHWmYeAtrCDmir0sgZazeIMMpvGwTm8yROJJGsLowLhHnLu6vLZ44OOEeiELs76/9eyLHGjYyaZc3GGwfFDFzMvyRK68uLV1zed7rc0OKRPBiEz4R/iW0VzmN0m0jVlHqBK8VcN4UAVQyt5J7Nm21jfdlASuNWBpmopFsyBBabho+htv01n5njZhYAb8fjJUGufVrWu4tTYD3hrfrwTEgthSLfbbaD2b0gAQjAXejt6c0wVxUoP6u3JQ0qbYDI5jfOvZBhFrrRQzfm3hq2qdPMcRBXKRKTgYA3blGTi3NYOP02HVmfY9C3XXu7rexBBnXmPlg00icC778cMeDpUM4VfPqGg+2WopgI84Xax4xaOd3bC4diuRs1wiM4G+ubLM92NCfI7mCmHa4Qwm0ZCqIeQomSXLp/kq2hxzdAsFb95Qxh+uucntl5SJq8pT/w+r8V/jjSk5+83nxWNtLWZbuPDMmzbVMhQziIoEP9WQDeAsvxGPXVQbdYLr2WdkLfT3pwJ3IyXfHDKLQuXMu+fFaq45MRuMRpiCz4AbhzZju35qM7d0rrRhTbO8qEMHVydXXXct8inGvF5JbkpgDk9X084jZqP1fAgx+Z9I9bvLWZxQo2fSN01X5fSPS7vn/AOvXN99eSeHvAAAAAElFTkSuQmCC"

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

/***/ "./src/views/gis/components/pop/air/mapAirWeather.vue":
/*!************************************************************!*\
  !*** ./src/views/gis/components/pop/air/mapAirWeather.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mapAirWeather_vue_vue_type_template_id_13b30ce2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapAirWeather.vue?vue&type=template&id=13b30ce2&scoped=true& */ "./src/views/gis/components/pop/air/mapAirWeather.vue?vue&type=template&id=13b30ce2&scoped=true&");
/* harmony import */ var _mapAirWeather_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapAirWeather.vue?vue&type=script&lang=js& */ "./src/views/gis/components/pop/air/mapAirWeather.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _mapAirWeather_vue_vue_type_style_index_0_id_13b30ce2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapAirWeather.vue?vue&type=style&index=0&id=13b30ce2&lang=scss&scoped=true& */ "./src/views/gis/components/pop/air/mapAirWeather.vue?vue&type=style&index=0&id=13b30ce2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _mapAirWeather_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mapAirWeather_vue_vue_type_template_id_13b30ce2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _mapAirWeather_vue_vue_type_template_id_13b30ce2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "13b30ce2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/gis/components/pop/air/mapAirWeather.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/gis/components/pop/air/mapAirWeather.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./src/views/gis/components/pop/air/mapAirWeather.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapAirWeather_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./mapAirWeather.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/air/mapAirWeather.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapAirWeather_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/gis/components/pop/air/mapAirWeather.vue?vue&type=style&index=0&id=13b30ce2&lang=scss&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./src/views/gis/components/pop/air/mapAirWeather.vue?vue&type=style&index=0&id=13b30ce2&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapAirWeather_vue_vue_type_style_index_0_id_13b30ce2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./mapAirWeather.vue?vue&type=style&index=0&id=13b30ce2&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/air/mapAirWeather.vue?vue&type=style&index=0&id=13b30ce2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapAirWeather_vue_vue_type_style_index_0_id_13b30ce2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapAirWeather_vue_vue_type_style_index_0_id_13b30ce2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapAirWeather_vue_vue_type_style_index_0_id_13b30ce2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapAirWeather_vue_vue_type_style_index_0_id_13b30ce2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/gis/components/pop/air/mapAirWeather.vue?vue&type=template&id=13b30ce2&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./src/views/gis/components/pop/air/mapAirWeather.vue?vue&type=template&id=13b30ce2&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapAirWeather_vue_vue_type_template_id_13b30ce2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./mapAirWeather.vue?vue&type=template&id=13b30ce2&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/air/mapAirWeather.vue?vue&type=template&id=13b30ce2&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapAirWeather_vue_vue_type_template_id_13b30ce2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapAirWeather_vue_vue_type_template_id_13b30ce2_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/gis/components/pop/air/mapAirWry.vue":
/*!********************************************************!*\
  !*** ./src/views/gis/components/pop/air/mapAirWry.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mapAirWry_vue_vue_type_template_id_5feab028___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapAirWry.vue?vue&type=template&id=5feab028& */ "./src/views/gis/components/pop/air/mapAirWry.vue?vue&type=template&id=5feab028&");
/* harmony import */ var _mapAirWry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapAirWry.vue?vue&type=script&lang=js& */ "./src/views/gis/components/pop/air/mapAirWry.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _mapAirWry_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapAirWry.vue?vue&type=style&index=0&lang=scss&scope=true& */ "./src/views/gis/components/pop/air/mapAirWry.vue?vue&type=style&index=0&lang=scss&scope=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _mapAirWry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mapAirWry_vue_vue_type_template_id_5feab028___WEBPACK_IMPORTED_MODULE_0__["render"],
  _mapAirWry_vue_vue_type_template_id_5feab028___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/gis/components/pop/air/mapAirWry.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/gis/components/pop/air/mapAirWry.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./src/views/gis/components/pop/air/mapAirWry.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapAirWry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./mapAirWry.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/air/mapAirWry.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapAirWry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/gis/components/pop/air/mapAirWry.vue?vue&type=style&index=0&lang=scss&scope=true&":
/*!*****************************************************************************************************!*\
  !*** ./src/views/gis/components/pop/air/mapAirWry.vue?vue&type=style&index=0&lang=scss&scope=true& ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapAirWry_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./mapAirWry.vue?vue&type=style&index=0&lang=scss&scope=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/air/mapAirWry.vue?vue&type=style&index=0&lang=scss&scope=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapAirWry_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapAirWry_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapAirWry_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapAirWry_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/gis/components/pop/air/mapAirWry.vue?vue&type=template&id=5feab028&":
/*!***************************************************************************************!*\
  !*** ./src/views/gis/components/pop/air/mapAirWry.vue?vue&type=template&id=5feab028& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapAirWry_vue_vue_type_template_id_5feab028___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./mapAirWry.vue?vue&type=template&id=5feab028& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/air/mapAirWry.vue?vue&type=template&id=5feab028&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapAirWry_vue_vue_type_template_id_5feab028___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapAirWry_vue_vue_type_template_id_5feab028___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/gis/components/pop/air/mapSiteAir.vue":
/*!*********************************************************!*\
  !*** ./src/views/gis/components/pop/air/mapSiteAir.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mapSiteAir_vue_vue_type_template_id_4876e19b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapSiteAir.vue?vue&type=template&id=4876e19b&scoped=true& */ "./src/views/gis/components/pop/air/mapSiteAir.vue?vue&type=template&id=4876e19b&scoped=true&");
/* harmony import */ var _mapSiteAir_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapSiteAir.vue?vue&type=script&lang=js& */ "./src/views/gis/components/pop/air/mapSiteAir.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _mapSiteAir_vue_vue_type_style_index_0_id_4876e19b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapSiteAir.vue?vue&type=style&index=0&id=4876e19b&lang=scss&scoped=true& */ "./src/views/gis/components/pop/air/mapSiteAir.vue?vue&type=style&index=0&id=4876e19b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _mapSiteAir_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mapSiteAir_vue_vue_type_template_id_4876e19b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _mapSiteAir_vue_vue_type_template_id_4876e19b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4876e19b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/gis/components/pop/air/mapSiteAir.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/gis/components/pop/air/mapSiteAir.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./src/views/gis/components/pop/air/mapSiteAir.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapSiteAir_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./mapSiteAir.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/air/mapSiteAir.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapSiteAir_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/gis/components/pop/air/mapSiteAir.vue?vue&type=style&index=0&id=4876e19b&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./src/views/gis/components/pop/air/mapSiteAir.vue?vue&type=style&index=0&id=4876e19b&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapSiteAir_vue_vue_type_style_index_0_id_4876e19b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./mapSiteAir.vue?vue&type=style&index=0&id=4876e19b&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/air/mapSiteAir.vue?vue&type=style&index=0&id=4876e19b&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapSiteAir_vue_vue_type_style_index_0_id_4876e19b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapSiteAir_vue_vue_type_style_index_0_id_4876e19b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapSiteAir_vue_vue_type_style_index_0_id_4876e19b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapSiteAir_vue_vue_type_style_index_0_id_4876e19b_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/gis/components/pop/air/mapSiteAir.vue?vue&type=template&id=4876e19b&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./src/views/gis/components/pop/air/mapSiteAir.vue?vue&type=template&id=4876e19b&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapSiteAir_vue_vue_type_template_id_4876e19b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./mapSiteAir.vue?vue&type=template&id=4876e19b&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/air/mapSiteAir.vue?vue&type=template&id=4876e19b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapSiteAir_vue_vue_type_template_id_4876e19b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapSiteAir_vue_vue_type_template_id_4876e19b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/gis/components/pop/index.vue":
/*!************************************************!*\
  !*** ./src/views/gis/components/pop/index.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_62d4a8f3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=62d4a8f3&scoped=true& */ "./src/views/gis/components/pop/index.vue?vue&type=template&id=62d4a8f3&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/gis/components/pop/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_62d4a8f3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_62d4a8f3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "62d4a8f3",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/gis/components/pop/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/gis/components/pop/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/views/gis/components/pop/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/gis/components/pop/index.vue?vue&type=template&id=62d4a8f3&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./src/views/gis/components/pop/index.vue?vue&type=template&id=62d4a8f3&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_62d4a8f3_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=62d4a8f3&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/index.vue?vue&type=template&id=62d4a8f3&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_62d4a8f3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_62d4a8f3_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/gis/components/pop/water/branchSitePop.vue":
/*!**************************************************************!*\
  !*** ./src/views/gis/components/pop/water/branchSitePop.vue ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _branchSitePop_vue_vue_type_template_id_1e59dbf1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./branchSitePop.vue?vue&type=template&id=1e59dbf1&scoped=true& */ "./src/views/gis/components/pop/water/branchSitePop.vue?vue&type=template&id=1e59dbf1&scoped=true&");
/* harmony import */ var _branchSitePop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./branchSitePop.vue?vue&type=script&lang=js& */ "./src/views/gis/components/pop/water/branchSitePop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _branchSitePop_vue_vue_type_style_index_0_id_1e59dbf1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./branchSitePop.vue?vue&type=style&index=0&id=1e59dbf1&lang=scss&scoped=true& */ "./src/views/gis/components/pop/water/branchSitePop.vue?vue&type=style&index=0&id=1e59dbf1&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _branchSitePop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _branchSitePop_vue_vue_type_template_id_1e59dbf1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _branchSitePop_vue_vue_type_template_id_1e59dbf1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1e59dbf1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/gis/components/pop/water/branchSitePop.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/gis/components/pop/water/branchSitePop.vue?vue&type=script&lang=js&":
/*!***************************************************************************************!*\
  !*** ./src/views/gis/components/pop/water/branchSitePop.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_branchSitePop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./branchSitePop.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/water/branchSitePop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_branchSitePop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/gis/components/pop/water/branchSitePop.vue?vue&type=style&index=0&id=1e59dbf1&lang=scss&scoped=true&":
/*!************************************************************************************************************************!*\
  !*** ./src/views/gis/components/pop/water/branchSitePop.vue?vue&type=style&index=0&id=1e59dbf1&lang=scss&scoped=true& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_branchSitePop_vue_vue_type_style_index_0_id_1e59dbf1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./branchSitePop.vue?vue&type=style&index=0&id=1e59dbf1&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/water/branchSitePop.vue?vue&type=style&index=0&id=1e59dbf1&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_branchSitePop_vue_vue_type_style_index_0_id_1e59dbf1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_branchSitePop_vue_vue_type_style_index_0_id_1e59dbf1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_branchSitePop_vue_vue_type_style_index_0_id_1e59dbf1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_branchSitePop_vue_vue_type_style_index_0_id_1e59dbf1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/gis/components/pop/water/branchSitePop.vue?vue&type=template&id=1e59dbf1&scoped=true&":
/*!*********************************************************************************************************!*\
  !*** ./src/views/gis/components/pop/water/branchSitePop.vue?vue&type=template&id=1e59dbf1&scoped=true& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_branchSitePop_vue_vue_type_template_id_1e59dbf1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./branchSitePop.vue?vue&type=template&id=1e59dbf1&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/water/branchSitePop.vue?vue&type=template&id=1e59dbf1&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_branchSitePop_vue_vue_type_template_id_1e59dbf1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_branchSitePop_vue_vue_type_template_id_1e59dbf1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/gis/components/pop/water/mapSiteWater.vue":
/*!*************************************************************!*\
  !*** ./src/views/gis/components/pop/water/mapSiteWater.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mapSiteWater_vue_vue_type_template_id_2f3cc2bb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapSiteWater.vue?vue&type=template&id=2f3cc2bb&scoped=true& */ "./src/views/gis/components/pop/water/mapSiteWater.vue?vue&type=template&id=2f3cc2bb&scoped=true&");
/* harmony import */ var _mapSiteWater_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapSiteWater.vue?vue&type=script&lang=js& */ "./src/views/gis/components/pop/water/mapSiteWater.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _mapSiteWater_vue_vue_type_style_index_0_id_2f3cc2bb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapSiteWater.vue?vue&type=style&index=0&id=2f3cc2bb&lang=scss&scoped=true& */ "./src/views/gis/components/pop/water/mapSiteWater.vue?vue&type=style&index=0&id=2f3cc2bb&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _mapSiteWater_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mapSiteWater_vue_vue_type_template_id_2f3cc2bb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _mapSiteWater_vue_vue_type_template_id_2f3cc2bb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2f3cc2bb",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/gis/components/pop/water/mapSiteWater.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/gis/components/pop/water/mapSiteWater.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./src/views/gis/components/pop/water/mapSiteWater.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapSiteWater_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./mapSiteWater.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/water/mapSiteWater.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapSiteWater_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/gis/components/pop/water/mapSiteWater.vue?vue&type=style&index=0&id=2f3cc2bb&lang=scss&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./src/views/gis/components/pop/water/mapSiteWater.vue?vue&type=style&index=0&id=2f3cc2bb&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapSiteWater_vue_vue_type_style_index_0_id_2f3cc2bb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./mapSiteWater.vue?vue&type=style&index=0&id=2f3cc2bb&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/water/mapSiteWater.vue?vue&type=style&index=0&id=2f3cc2bb&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapSiteWater_vue_vue_type_style_index_0_id_2f3cc2bb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapSiteWater_vue_vue_type_style_index_0_id_2f3cc2bb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapSiteWater_vue_vue_type_style_index_0_id_2f3cc2bb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapSiteWater_vue_vue_type_style_index_0_id_2f3cc2bb_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/gis/components/pop/water/mapSiteWater.vue?vue&type=template&id=2f3cc2bb&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./src/views/gis/components/pop/water/mapSiteWater.vue?vue&type=template&id=2f3cc2bb&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapSiteWater_vue_vue_type_template_id_2f3cc2bb_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./mapSiteWater.vue?vue&type=template&id=2f3cc2bb&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/water/mapSiteWater.vue?vue&type=template&id=2f3cc2bb&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapSiteWater_vue_vue_type_template_id_2f3cc2bb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapSiteWater_vue_vue_type_template_id_2f3cc2bb_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/gis/components/pop/water/zfxsPop.vue":
/*!********************************************************!*\
  !*** ./src/views/gis/components/pop/water/zfxsPop.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _zfxsPop_vue_vue_type_template_id_1c0ff85a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zfxsPop.vue?vue&type=template&id=1c0ff85a&scoped=true& */ "./src/views/gis/components/pop/water/zfxsPop.vue?vue&type=template&id=1c0ff85a&scoped=true&");
/* harmony import */ var _zfxsPop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zfxsPop.vue?vue&type=script&lang=js& */ "./src/views/gis/components/pop/water/zfxsPop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _zfxsPop_vue_vue_type_style_index_0_id_1c0ff85a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./zfxsPop.vue?vue&type=style&index=0&id=1c0ff85a&lang=scss&scoped=true& */ "./src/views/gis/components/pop/water/zfxsPop.vue?vue&type=style&index=0&id=1c0ff85a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _zfxsPop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _zfxsPop_vue_vue_type_template_id_1c0ff85a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _zfxsPop_vue_vue_type_template_id_1c0ff85a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1c0ff85a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/gis/components/pop/water/zfxsPop.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/gis/components/pop/water/zfxsPop.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./src/views/gis/components/pop/water/zfxsPop.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_zfxsPop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./zfxsPop.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/water/zfxsPop.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_zfxsPop_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/gis/components/pop/water/zfxsPop.vue?vue&type=style&index=0&id=1c0ff85a&lang=scss&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./src/views/gis/components/pop/water/zfxsPop.vue?vue&type=style&index=0&id=1c0ff85a&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_zfxsPop_vue_vue_type_style_index_0_id_1c0ff85a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./zfxsPop.vue?vue&type=style&index=0&id=1c0ff85a&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/water/zfxsPop.vue?vue&type=style&index=0&id=1c0ff85a&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_zfxsPop_vue_vue_type_style_index_0_id_1c0ff85a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_zfxsPop_vue_vue_type_style_index_0_id_1c0ff85a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_zfxsPop_vue_vue_type_style_index_0_id_1c0ff85a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_zfxsPop_vue_vue_type_style_index_0_id_1c0ff85a_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/gis/components/pop/water/zfxsPop.vue?vue&type=template&id=1c0ff85a&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./src/views/gis/components/pop/water/zfxsPop.vue?vue&type=template&id=1c0ff85a&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_zfxsPop_vue_vue_type_template_id_1c0ff85a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./zfxsPop.vue?vue&type=template&id=1c0ff85a&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/water/zfxsPop.vue?vue&type=template&id=1c0ff85a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_zfxsPop_vue_vue_type_template_id_1c0ff85a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_zfxsPop_vue_vue_type_template_id_1c0ff85a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/gis/components/pop/wry/mapPurPlant.vue":
/*!**********************************************************!*\
  !*** ./src/views/gis/components/pop/wry/mapPurPlant.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mapPurPlant_vue_vue_type_template_id_2aca36aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapPurPlant.vue?vue&type=template&id=2aca36aa& */ "./src/views/gis/components/pop/wry/mapPurPlant.vue?vue&type=template&id=2aca36aa&");
/* harmony import */ var _mapPurPlant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapPurPlant.vue?vue&type=script&lang=js& */ "./src/views/gis/components/pop/wry/mapPurPlant.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _mapPurPlant_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapPurPlant.vue?vue&type=style&index=0&lang=scss&scope=true& */ "./src/views/gis/components/pop/wry/mapPurPlant.vue?vue&type=style&index=0&lang=scss&scope=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _mapPurPlant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mapPurPlant_vue_vue_type_template_id_2aca36aa___WEBPACK_IMPORTED_MODULE_0__["render"],
  _mapPurPlant_vue_vue_type_template_id_2aca36aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/gis/components/pop/wry/mapPurPlant.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/gis/components/pop/wry/mapPurPlant.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./src/views/gis/components/pop/wry/mapPurPlant.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapPurPlant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./mapPurPlant.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/wry/mapPurPlant.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapPurPlant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/gis/components/pop/wry/mapPurPlant.vue?vue&type=style&index=0&lang=scss&scope=true&":
/*!*******************************************************************************************************!*\
  !*** ./src/views/gis/components/pop/wry/mapPurPlant.vue?vue&type=style&index=0&lang=scss&scope=true& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapPurPlant_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./mapPurPlant.vue?vue&type=style&index=0&lang=scss&scope=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/wry/mapPurPlant.vue?vue&type=style&index=0&lang=scss&scope=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapPurPlant_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapPurPlant_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapPurPlant_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapPurPlant_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/gis/components/pop/wry/mapPurPlant.vue?vue&type=template&id=2aca36aa&":
/*!*****************************************************************************************!*\
  !*** ./src/views/gis/components/pop/wry/mapPurPlant.vue?vue&type=template&id=2aca36aa& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapPurPlant_vue_vue_type_template_id_2aca36aa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./mapPurPlant.vue?vue&type=template&id=2aca36aa& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/wry/mapPurPlant.vue?vue&type=template&id=2aca36aa&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapPurPlant_vue_vue_type_template_id_2aca36aa___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapPurPlant_vue_vue_type_template_id_2aca36aa___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/gis/components/pop/wry/mapWry.vue":
/*!*****************************************************!*\
  !*** ./src/views/gis/components/pop/wry/mapWry.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mapWry_vue_vue_type_template_id_61270462___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapWry.vue?vue&type=template&id=61270462& */ "./src/views/gis/components/pop/wry/mapWry.vue?vue&type=template&id=61270462&");
/* harmony import */ var _mapWry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapWry.vue?vue&type=script&lang=js& */ "./src/views/gis/components/pop/wry/mapWry.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _mapWry_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapWry.vue?vue&type=style&index=0&lang=scss&scope=true& */ "./src/views/gis/components/pop/wry/mapWry.vue?vue&type=style&index=0&lang=scss&scope=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _mapWry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mapWry_vue_vue_type_template_id_61270462___WEBPACK_IMPORTED_MODULE_0__["render"],
  _mapWry_vue_vue_type_template_id_61270462___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/gis/components/pop/wry/mapWry.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/gis/components/pop/wry/mapWry.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./src/views/gis/components/pop/wry/mapWry.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapWry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./mapWry.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/wry/mapWry.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapWry_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/gis/components/pop/wry/mapWry.vue?vue&type=style&index=0&lang=scss&scope=true&":
/*!**************************************************************************************************!*\
  !*** ./src/views/gis/components/pop/wry/mapWry.vue?vue&type=style&index=0&lang=scss&scope=true& ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapWry_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./mapWry.vue?vue&type=style&index=0&lang=scss&scope=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/wry/mapWry.vue?vue&type=style&index=0&lang=scss&scope=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapWry_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapWry_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapWry_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapWry_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/gis/components/pop/wry/mapWry.vue?vue&type=template&id=61270462&":
/*!************************************************************************************!*\
  !*** ./src/views/gis/components/pop/wry/mapWry.vue?vue&type=template&id=61270462& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapWry_vue_vue_type_template_id_61270462___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./mapWry.vue?vue&type=template&id=61270462& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/wry/mapWry.vue?vue&type=template&id=61270462&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapWry_vue_vue_type_template_id_61270462___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapWry_vue_vue_type_template_id_61270462___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/gis/components/pop/wry/mapWryOther.vue":
/*!**********************************************************!*\
  !*** ./src/views/gis/components/pop/wry/mapWryOther.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mapWryOther_vue_vue_type_template_id_5d9285fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapWryOther.vue?vue&type=template&id=5d9285fe& */ "./src/views/gis/components/pop/wry/mapWryOther.vue?vue&type=template&id=5d9285fe&");
/* harmony import */ var _mapWryOther_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapWryOther.vue?vue&type=script&lang=js& */ "./src/views/gis/components/pop/wry/mapWryOther.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _mapWryOther_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapWryOther.vue?vue&type=style&index=0&lang=scss&scope=true& */ "./src/views/gis/components/pop/wry/mapWryOther.vue?vue&type=style&index=0&lang=scss&scope=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _mapWryOther_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mapWryOther_vue_vue_type_template_id_5d9285fe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _mapWryOther_vue_vue_type_template_id_5d9285fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/gis/components/pop/wry/mapWryOther.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/gis/components/pop/wry/mapWryOther.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./src/views/gis/components/pop/wry/mapWryOther.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapWryOther_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../../node_modules/babel-loader/lib!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./mapWryOther.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/wry/mapWryOther.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapWryOther_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/gis/components/pop/wry/mapWryOther.vue?vue&type=style&index=0&lang=scss&scope=true&":
/*!*******************************************************************************************************!*\
  !*** ./src/views/gis/components/pop/wry/mapWryOther.vue?vue&type=style&index=0&lang=scss&scope=true& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapWryOther_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./mapWryOther.vue?vue&type=style&index=0&lang=scss&scope=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/wry/mapWryOther.vue?vue&type=style&index=0&lang=scss&scope=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapWryOther_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapWryOther_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapWryOther_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapWryOther_vue_vue_type_style_index_0_lang_scss_scope_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/gis/components/pop/wry/mapWryOther.vue?vue&type=template&id=5d9285fe&":
/*!*****************************************************************************************!*\
  !*** ./src/views/gis/components/pop/wry/mapWryOther.vue?vue&type=template&id=5d9285fe& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapWryOther_vue_vue_type_template_id_5d9285fe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./mapWryOther.vue?vue&type=template&id=5d9285fe& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/pop/wry/mapWryOther.vue?vue&type=template&id=5d9285fe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapWryOther_vue_vue_type_template_id_5d9285fe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapWryOther_vue_vue_type_template_id_5d9285fe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRoSG9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2RlZmluZVByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVSZXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RTcHJlYWQyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS90b1ByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Qcm9wZXJ0eUtleS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC9haXIvbWFwQWlyV2VhdGhlci52dWUiLCJ3ZWJwYWNrOi8vL3NyYy92aWV3cy9naXMvY29tcG9uZW50cy9wb3AvYWlyL21hcEFpcldyeS52dWUiLCJ3ZWJwYWNrOi8vL3NyYy92aWV3cy9naXMvY29tcG9uZW50cy9wb3AvYWlyL21hcFNpdGVBaXIudnVlIiwid2VicGFjazovLy9zcmMvdmlld3MvZ2lzL2NvbXBvbmVudHMvcG9wL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC93YXRlci9icmFuY2hTaXRlUG9wLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC93YXRlci9tYXBTaXRlV2F0ZXIudnVlIiwid2VicGFjazovLy9zcmMvdmlld3MvZ2lzL2NvbXBvbmVudHMvcG9wL3dhdGVyL3pmeHNQb3AudnVlIiwid2VicGFjazovLy9zcmMvdmlld3MvZ2lzL2NvbXBvbmVudHMvcG9wL3dyeS9tYXBQdXJQbGFudC52dWUiLCJ3ZWJwYWNrOi8vL3NyYy92aWV3cy9naXMvY29tcG9uZW50cy9wb3Avd3J5L21hcFdyeS52dWUiLCJ3ZWJwYWNrOi8vL3NyYy92aWV3cy9naXMvY29tcG9uZW50cy9wb3Avd3J5L21hcFdyeU90aGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2lzL2NvbXBvbmVudHMvcG9wL2Fpci9tYXBBaXJXZWF0aGVyLnZ1ZT9jMDdlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9naXMvY29tcG9uZW50cy9wb3AvYWlyL21hcEFpcldyeS52dWU/N2MzNSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2lzL2NvbXBvbmVudHMvcG9wL2Fpci9tYXBTaXRlQWlyLnZ1ZT9lNDZhIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9naXMvY29tcG9uZW50cy9wb3AvaW5kZXgudnVlPzVlNjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC93YXRlci9icmFuY2hTaXRlUG9wLnZ1ZT82MTRhIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9naXMvY29tcG9uZW50cy9wb3Avd2F0ZXIvbWFwU2l0ZVdhdGVyLnZ1ZT8zZjY5Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9naXMvY29tcG9uZW50cy9wb3Avd2F0ZXIvemZ4c1BvcC52dWU/MmZhYiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2lzL2NvbXBvbmVudHMvcG9wL3dyeS9tYXBQdXJQbGFudC52dWU/YWJjZCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2lzL2NvbXBvbmVudHMvcG9wL3dyeS9tYXBXcnkudnVlPzM1ZDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC93cnkvbWFwV3J5T3RoZXIudnVlPzg4NzMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nvb3JkdHJhbnNmb3JtL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kYXRlLXRvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZpbHRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZyb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5kYXRlLnRvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLm9iamVjdC5rZXlzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMucmVnZXhwLnRlc3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zeW1ib2wudG8tcHJpbWl0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9naXMvY29tcG9uZW50cy9wb3AvYWlyL21hcEFpcldlYXRoZXIudnVlP2M0MmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC9haXIvbWFwQWlyV3J5LnZ1ZT8wNmFhIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9naXMvY29tcG9uZW50cy9wb3AvYWlyL21hcFNpdGVBaXIudnVlPzU5MTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC93YXRlci9icmFuY2hTaXRlUG9wLnZ1ZT80MzA2Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9naXMvY29tcG9uZW50cy9wb3Avd2F0ZXIvbWFwU2l0ZVdhdGVyLnZ1ZT9kNDkyIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9naXMvY29tcG9uZW50cy9wb3Avd2F0ZXIvemZ4c1BvcC52dWU/MjAzZCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2lzL2NvbXBvbmVudHMvcG9wL3dyeS9tYXBQdXJQbGFudC52dWU/MTFjOCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2lzL2NvbXBvbmVudHMvcG9wL3dyeS9tYXBXcnkudnVlPzE1NWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC93cnkvbWFwV3J5T3RoZXIudnVlPzQyMjkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC9haXIvbWFwQWlyV2VhdGhlci52dWU/MDM3OCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2lzL2NvbXBvbmVudHMvcG9wL2Fpci9tYXBBaXJXcnkudnVlPzU4MGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC9haXIvbWFwU2l0ZUFpci52dWU/ZTQyYyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2lzL2NvbXBvbmVudHMvcG9wL3dhdGVyL2JyYW5jaFNpdGVQb3AudnVlPzhkYTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC93YXRlci9tYXBTaXRlV2F0ZXIudnVlPzZmNDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC93YXRlci96ZnhzUG9wLnZ1ZT81OTcxIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9naXMvY29tcG9uZW50cy9wb3Avd3J5L21hcFB1clBsYW50LnZ1ZT8wZjU1Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9naXMvY29tcG9uZW50cy9wb3Avd3J5L21hcFdyeS52dWU/NjhjMCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2lzL2NvbXBvbmVudHMvcG9wL3dyeS9tYXBXcnlPdGhlci52dWU/NGZkNiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2NsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9vbGRfYWlyLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcG9pbnQv57yW57uEIDIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcG9wRXhjZWVkLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BvcFN0YW5kYXJkLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3F1ZXJ5L+awlOWOiy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9xdWVyeS/muKnluqYucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcXVlcnkv5rm/5bqmLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3F1ZXJ5L+mjjuWQkS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9xdWVyeS/po47pgJ8ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMv5YWs5Y+4LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL+e8lue7hC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3NldGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC9haXIvbWFwQWlyV2VhdGhlci52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC9haXIvbWFwQWlyV2VhdGhlci52dWU/ODMyMiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2lzL2NvbXBvbmVudHMvcG9wL2Fpci9tYXBBaXJXZWF0aGVyLnZ1ZT9lZjEyIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9naXMvY29tcG9uZW50cy9wb3AvYWlyL21hcEFpcldlYXRoZXIudnVlPzhlMWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC9haXIvbWFwQWlyV3J5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2lzL2NvbXBvbmVudHMvcG9wL2Fpci9tYXBBaXJXcnkudnVlP2RmOTciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC9haXIvbWFwQWlyV3J5LnZ1ZT85MWQ5Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9naXMvY29tcG9uZW50cy9wb3AvYWlyL21hcEFpcldyeS52dWU/ODRiMCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2lzL2NvbXBvbmVudHMvcG9wL2Fpci9tYXBTaXRlQWlyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2lzL2NvbXBvbmVudHMvcG9wL2Fpci9tYXBTaXRlQWlyLnZ1ZT9hZDUyIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9naXMvY29tcG9uZW50cy9wb3AvYWlyL21hcFNpdGVBaXIudnVlPzc4ZmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC9haXIvbWFwU2l0ZUFpci52dWU/NTJjMyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2lzL2NvbXBvbmVudHMvcG9wL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2lzL2NvbXBvbmVudHMvcG9wL2luZGV4LnZ1ZT9mMTU0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9naXMvY29tcG9uZW50cy9wb3AvaW5kZXgudnVlP2Q3ZjQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC93YXRlci9icmFuY2hTaXRlUG9wLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2lzL2NvbXBvbmVudHMvcG9wL3dhdGVyL2JyYW5jaFNpdGVQb3AudnVlPzM0NzkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC93YXRlci9icmFuY2hTaXRlUG9wLnZ1ZT9kNjg5Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9naXMvY29tcG9uZW50cy9wb3Avd2F0ZXIvYnJhbmNoU2l0ZVBvcC52dWU/ZmZlYiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2lzL2NvbXBvbmVudHMvcG9wL3dhdGVyL21hcFNpdGVXYXRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC93YXRlci9tYXBTaXRlV2F0ZXIudnVlPzU0NDIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC93YXRlci9tYXBTaXRlV2F0ZXIudnVlPzI5ZmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC93YXRlci9tYXBTaXRlV2F0ZXIudnVlPzZjY2IiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC93YXRlci96ZnhzUG9wLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2lzL2NvbXBvbmVudHMvcG9wL3dhdGVyL3pmeHNQb3AudnVlP2ZiYjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC93YXRlci96ZnhzUG9wLnZ1ZT82NGRiIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9naXMvY29tcG9uZW50cy9wb3Avd2F0ZXIvemZ4c1BvcC52dWU/ZmUzYSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2lzL2NvbXBvbmVudHMvcG9wL3dyeS9tYXBQdXJQbGFudC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC93cnkvbWFwUHVyUGxhbnQudnVlPzcxNDAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC93cnkvbWFwUHVyUGxhbnQudnVlPzI0NjciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC93cnkvbWFwUHVyUGxhbnQudnVlP2Y3MDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC93cnkvbWFwV3J5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2lzL2NvbXBvbmVudHMvcG9wL3dyeS9tYXBXcnkudnVlPzNlODAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC93cnkvbWFwV3J5LnZ1ZT82NTJlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9naXMvY29tcG9uZW50cy9wb3Avd3J5L21hcFdyeS52dWU/OWY3MSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2lzL2NvbXBvbmVudHMvcG9wL3dyeS9tYXBXcnlPdGhlci52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC93cnkvbWFwV3J5T3RoZXIudnVlPzNkMGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC93cnkvbWFwV3J5T3RoZXIudnVlPzFhNjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC93cnkvbWFwV3J5T3RoZXIudnVlPzczMGYiXSwibmFtZXMiOlsiX2FycmF5TGlrZVRvQXJyYXkiLCJyIiwiYSIsImxlbmd0aCIsImUiLCJuIiwiQXJyYXkiLCJfYXJyYXlXaXRoSG9sZXMiLCJpc0FycmF5IiwiX2RlZmluZVByb3BlcnR5IiwidCIsInRvUHJvcGVydHlLZXkiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsInZhbHVlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwibCIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiaSIsInUiLCJmIiwibyIsImNhbGwiLCJuZXh0IiwiZG9uZSIsInB1c2giLCJfbm9uSXRlcmFibGVSZXN0IiwiVHlwZUVycm9yIiwib3duS2V5cyIsImtleXMiLCJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJmaWx0ZXIiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJhcHBseSIsIl9vYmplY3RTcHJlYWQyIiwiYXJndW1lbnRzIiwiZm9yRWFjaCIsImdldE93blByb3BlcnR5RGVzY3JpcHRvcnMiLCJkZWZpbmVQcm9wZXJ0aWVzIiwiX3NsaWNlZFRvQXJyYXkiLCJhcnJheVdpdGhIb2xlcyIsIml0ZXJhYmxlVG9BcnJheUxpbWl0IiwidW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJub25JdGVyYWJsZVJlc3QiLCJ0b1ByaW1pdGl2ZSIsIl90eXBlb2YiLCJTdHJpbmciLCJOdW1iZXIiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsImFycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsInNsaWNlIiwibmFtZSIsImZyb20iLCJ0ZXN0IiwiZ2V0SW5IYW5kQ291bnQiLCJkYXRhIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInBhcmFtcyIsImdldEluSGFuZENoZWNrTGlzdCIsImdldENsdWVEZXRhaWwiLCJnZXRNaW5lQ2x1ZUxpc3QiLCJsZWFkZXJDaGVjayIsImhibUxlYWRlckNoZWNrIiwibGVhZGVyQ2hlY2tUd28iLCJkZXB0QXBwcm92YWwiLCJxdWVyeUxlYWRlckxpc3QiLCJxdWVyeURlcGFydG1lbnRMaXN0IiwicXVlcnlEZXB0UGVyc29uTGlzdCIsInF1ZXJ5TGF3TGlzdCIsImJyb2FuY2hEaXN0cmlidXRlIiwic2F2ZUNoZWNrUmVjb3JkIiwidXBsb2FkRmlsZXMiLCJoZWFkZXJzIiwiYWRkVmVyaWZ5IiwiYnJvYW5jaFZlcmlmeSIsImZpbmlzaEZsb3ciLCJoYm1GaW5pc2hGbG93IiwiZmVlZEJhY2siLCJnZXRYcyIsInhzRGV0YWlsIiwiZGF5RGF0YSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiYXhpb3MiLCJ0aGVuIiwicmVzIiwiY2F0Y2giLCJyZWFsRGF0YSIsInllYXJEYXRhIiwic3RhdGlvbkRhdGEiLCJ0eXBlIiwiZ2V0VGhpc0RhdGUiLCJub3dUaW1lIiwidGltZSIsIkRhdGUiLCJ5IiwiZ2V0RnVsbFllYXIiLCJsbSIsImdldE1vbnRoIiwibSIsImQiLCJnZXREYXRlIiwiaCIsImdldEhvdXJzIiwiTSIsImdldE1pbnV0ZXMiLCJzIiwiZ2V0U2Vjb25kcyIsImZvcm1hdERhdGUiLCJkYXRlIiwiaG91ckRhdGVGb3JtYXQiLCJ5ZWFyIiwibW9udGgiLCJkYXkiLCJob3VyIiwibW9udGhEYXRlRm9ybWF0IiwiZm91ckhvdXJUaW1lIiwibm93RGF0ZSIsImhvdXJzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBLFNBQVNBLGlCQUFULENBQTJCQyxDQUEzQixFQUE4QkMsQ0FBOUIsRUFBaUM7QUFDL0IsR0FBQyxRQUFRQSxDQUFSLElBQWFBLENBQUMsR0FBR0QsQ0FBQyxDQUFDRSxNQUFwQixNQUFnQ0QsQ0FBQyxHQUFHRCxDQUFDLENBQUNFLE1BQXRDOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQVIsRUFBV0MsQ0FBQyxHQUFHQyxLQUFLLENBQUNKLENBQUQsQ0FBekIsRUFBOEJFLENBQUMsR0FBR0YsQ0FBbEMsRUFBcUNFLENBQUMsRUFBdEM7QUFBMENDLEtBQUMsQ0FBQ0QsQ0FBRCxDQUFE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QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBbVUsQ0FBZ0IsdVVBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBdlY7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTBGO0FBQzNCO0FBQ0w7QUFDeUI7OztBQUduRjtBQUNzRztBQUN0RyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxpRkFBTTtBQUNSLEVBQUUsc0ZBQU07QUFDUixFQUFFLCtGQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUF3VSxDQUFnQiw0VUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E1VjtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy8xMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KHIsIGEpIHtcbiAgKG51bGwgPT0gYSB8fCBhID4gci5sZW5ndGgpICYmIChhID0gci5sZW5ndGgpO1xuICBmb3IgKHZhciBlID0gMCwgbiA9IEFycmF5KGEpOyBlIDwgYTsgZSsrKSBuW2VdID0gcltlXTtcbiAgcmV0dXJuIG47XG59XG5leHBvcnQgeyBfYXJyYXlMaWtlVG9BcnJheSBhcyBkZWZhdWx0IH07IiwiZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKHIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkocikpIHJldHVybiByO1xufVxuZXhwb3J0IHsgX2FycmF5V2l0aEhvbGVzIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgdG9Qcm9wZXJ0eUtleSBmcm9tIFwiLi90b1Byb3BlcnR5S2V5LmpzXCI7XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkoZSwgciwgdCkge1xuICByZXR1cm4gKHIgPSB0b1Byb3BlcnR5S2V5KHIpKSBpbiBlID8gT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHIsIHtcbiAgICB2YWx1ZTogdCxcbiAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICBjb25maWd1cmFibGU6ICEwLFxuICAgIHdyaXRhYmxlOiAhMFxuICB9KSA6IGVbcl0gPSB0LCBlO1xufVxuZXhwb3J0IHsgX2RlZmluZVByb3BlcnR5IGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQociwgbCkge1xuICB2YXIgdCA9IG51bGwgPT0gciA/IG51bGwgOiBcInVuZGVmaW5lZFwiICE9IHR5cGVvZiBTeW1ib2wgJiYgcltTeW1ib2wuaXRlcmF0b3JdIHx8IHJbXCJAQGl0ZXJhdG9yXCJdO1xuICBpZiAobnVsbCAhPSB0KSB7XG4gICAgdmFyIGUsXG4gICAgICBuLFxuICAgICAgaSxcbiAgICAgIHUsXG4gICAgICBhID0gW10sXG4gICAgICBmID0gITAsXG4gICAgICBvID0gITE7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChpID0gKHQgPSB0LmNhbGwocikpLm5leHQsIDAgPT09IGwpIHtcbiAgICAgICAgaWYgKE9iamVjdCh0KSAhPT0gdCkgcmV0dXJuO1xuICAgICAgICBmID0gITE7XG4gICAgICB9IGVsc2UgZm9yICg7ICEoZiA9IChlID0gaS5jYWxsKHQpKS5kb25lKSAmJiAoYS5wdXNoKGUudmFsdWUpLCBhLmxlbmd0aCAhPT0gbCk7IGYgPSAhMCk7XG4gICAgfSBjYXRjaCAocikge1xuICAgICAgbyA9ICEwLCBuID0gcjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFmICYmIG51bGwgIT0gdFtcInJldHVyblwiXSAmJiAodSA9IHRbXCJyZXR1cm5cIl0oKSwgT2JqZWN0KHUpICE9PSB1KSkgcmV0dXJuO1xuICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgaWYgKG8pIHRocm93IG47XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBhO1xuICB9XG59XG5leHBvcnQgeyBfaXRlcmFibGVUb0FycmF5TGltaXQgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5leHBvcnQgeyBfbm9uSXRlcmFibGVSZXN0IGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgZGVmaW5lUHJvcGVydHkgZnJvbSBcIi4vZGVmaW5lUHJvcGVydHkuanNcIjtcbmZ1bmN0aW9uIG93bktleXMoZSwgcikge1xuICB2YXIgdCA9IE9iamVjdC5rZXlzKGUpO1xuICBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykge1xuICAgIHZhciBvID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTtcbiAgICByICYmIChvID0gby5maWx0ZXIoZnVuY3Rpb24gKHIpIHtcbiAgICAgIHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsIHIpLmVudW1lcmFibGU7XG4gICAgfSkpLCB0LnB1c2guYXBwbHkodCwgbyk7XG4gIH1cbiAgcmV0dXJuIHQ7XG59XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkMihlKSB7XG4gIGZvciAodmFyIHIgPSAxOyByIDwgYXJndW1lbnRzLmxlbmd0aDsgcisrKSB7XG4gICAgdmFyIHQgPSBudWxsICE9IGFyZ3VtZW50c1tyXSA/IGFyZ3VtZW50c1tyXSA6IHt9O1xuICAgIHIgJSAyID8gb3duS2V5cyhPYmplY3QodCksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7XG4gICAgICBkZWZpbmVQcm9wZXJ0eShlLCByLCB0W3JdKTtcbiAgICB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnModCkpIDogb3duS2V5cyhPYmplY3QodCkpLmZvckVhY2goZnVuY3Rpb24gKHIpIHtcbiAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCByLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsIHIpKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gZTtcbn1cbmV4cG9ydCB7IF9vYmplY3RTcHJlYWQyIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgYXJyYXlXaXRoSG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRoSG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXlMaW1pdCBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXlMaW1pdC5qc1wiO1xuaW1wb3J0IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGZyb20gXCIuL3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgbm9uSXRlcmFibGVSZXN0IGZyb20gXCIuL25vbkl0ZXJhYmxlUmVzdC5qc1wiO1xuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkociwgZSkge1xuICByZXR1cm4gYXJyYXlXaXRoSG9sZXMocikgfHwgaXRlcmFibGVUb0FycmF5TGltaXQociwgZSkgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkociwgZSkgfHwgbm9uSXRlcmFibGVSZXN0KCk7XG59XG5leHBvcnQgeyBfc2xpY2VkVG9BcnJheSBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IF90eXBlb2YgZnJvbSBcIi4vdHlwZW9mLmpzXCI7XG5mdW5jdGlvbiB0b1ByaW1pdGl2ZSh0LCByKSB7XG4gIGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0O1xuICB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHZvaWQgMCAhPT0gZSkge1xuICAgIHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpO1xufVxuZXhwb3J0IHsgdG9QcmltaXRpdmUgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBfdHlwZW9mIGZyb20gXCIuL3R5cGVvZi5qc1wiO1xuaW1wb3J0IHRvUHJpbWl0aXZlIGZyb20gXCIuL3RvUHJpbWl0aXZlLmpzXCI7XG5mdW5jdGlvbiB0b1Byb3BlcnR5S2V5KHQpIHtcbiAgdmFyIGkgPSB0b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBpICsgXCJcIjtcbn1cbmV4cG9ydCB7IHRvUHJvcGVydHlLZXkgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF90eXBlb2Yobykge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIF90eXBlb2Yobyk7XG59XG5leHBvcnQgeyBfdHlwZW9mIGFzIGRlZmF1bHQgfTsiLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkociwgYSkge1xuICBpZiAocikge1xuICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiByKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShyLCBhKTtcbiAgICB2YXIgdCA9IHt9LnRvU3RyaW5nLmNhbGwocikuc2xpY2UoOCwgLTEpO1xuICAgIHJldHVybiBcIk9iamVjdFwiID09PSB0ICYmIHIuY29uc3RydWN0b3IgJiYgKHQgPSByLmNvbnN0cnVjdG9yLm5hbWUpLCBcIk1hcFwiID09PSB0IHx8IFwiU2V0XCIgPT09IHQgPyBBcnJheS5mcm9tKHIpIDogXCJBcmd1bWVudHNcIiA9PT0gdCB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdCh0KSA/IGFycmF5TGlrZVRvQXJyYXkociwgYSkgOiB2b2lkIDA7XG4gIH1cbn1cbmV4cG9ydCB7IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBhcyBkZWZhdWx0IH07IiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJtYXAtcG9wLXdyYXBwZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwb3AtdGl0bGUtd3JhcHBlciBmc1wiPlxyXG4gICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWZsZXg7YWxpZ24taXRlbXM6IGNlbnRlcjt3aWR0aDogNjMlXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJAL2Fzc2V0cy/nvJbnu4QucG5nXCIgd2lkdGg9XCI5XCIgaGVpZ2h0PVwiMTFcIi8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzaXRlLW5hbWVcIj57e3NpdGVPYmoubmFtZX19PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJ0aW1lXCIgdi1pZj1cInNpdGVPYmouZGF0ZVRpbWVcIj5cclxuICAgICAgICB7eyBzaXRlT2JqLmRhdGVUaW1lIH19XHJcbiAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgIDx2YW4taWNvbiBjbGFzcz1cImNsb3NlXCIgbmFtZT1cImNsZWFyXCIgQGNsaWNrPVwiJGVtaXQoJ2Nsb3NlJylcIiBjb2xvcj1cIiNBNkFCQjNcIiA6c2l6ZT1cIjIwXCIvPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRlbnQtYm94XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzaXRlLXN0YXR1XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNpdGUtbW9uaXRvci1ib3hcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMvcXVlcnkv5rm/5bqmLnBuZ1wiLz5cclxuICAgICAgICAgIOa5v+W6pu+8mnt7c2l0ZU9iai5yaHV9fSVcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2l0ZS1tb25pdG9yLWJveFwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJAL2Fzc2V0cy9xdWVyeS/po47lkJEucG5nXCIvPlxyXG4gICAgICAgICAg6aOO5ZCR77yae3tzaXRlT2JqLndpbkRpbnN0fX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2l0ZS1tb25pdG9yLWJveFwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJAL2Fzc2V0cy9xdWVyeS/po47pgJ8ucG5nXCIvPlxyXG4gICAgICAgICAg6aOO6YCf77yae3tzaXRlT2JqLndpblNpbnN0fX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2l0ZS1tb25pdG9yLWJveFwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJAL2Fzc2V0cy9xdWVyeS/msJTljosucG5nXCIvPlxyXG4gICAgICAgICAg5rCU5Y6L77yae3tzaXRlT2JqLnByc319XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNpdGUtbW9uaXRvci1ib3hcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMvcXVlcnkv5rip5bqmLnBuZ1wiLz5cclxuICAgICAgICAgIOa4qeW6pu+8mnt7c2l0ZU9iai50ZW19feKEg1xyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQge2p1ZGdlQWlyTGV2ZWx9IGZyb20gJ0AvdXRpbHMvbWFwUG9pbnQuanMnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwibWFwQWlyV2VhdGhlclwiLFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgc2l0ZU9iajoge1xyXG4gICAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgICBkZWZhdWx0OiAoKSA9PiB7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHt9XHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgc2l0ZU9iaigpIHtcclxuICAgICAgICB0aGlzLmdldERhdGEoKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgLy8gdGhpcy5nZXREYXRhKClcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7fVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgLm1hcC1wb3Atd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDEycHg7XHJcbiAgICBsZWZ0OiA3cHg7XHJcbiAgICByaWdodDogN3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHotaW5kZXg6IDk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgIC5wb3AtdGl0bGUtd3JhcHBlciB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgcGFkZGluZzogMTJweCAzMHB4IDEycHggMThweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgICAuc2l0ZS1uYW1lIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA3MCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgY29sb3I6ICMxMjEyMzY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGltZSB7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jbG9zZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucG9wLXRpbWUge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMXB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50LWJveCB7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDY4LCAxMjMsIDI1MiwgMSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoNjgsIDEyMywgMjUyLCAwLjEpIDAlLCByZ2JhKDY4LCAxMjMsIDI1MiwgMCkgMjAlKTtcclxuICAgIH1cclxuXHJcbiAgICAuc2l0ZS1zdGF0dSwgLmNvbnRlbnQtbW9uaXRvciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIH1cclxuXHJcbiAgICAuc2l0ZS1zdGF0dSB7XHJcbiAgICAgIG1hcmdpbjogMTBweCAwO1xyXG5cclxuICAgICAgLnNpdGUtbW9uaXRvci1ib3gge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMzMlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAxKTtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxMnB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMnB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50LW1vbml0b3Ige1xyXG4gICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcblxyXG4gICAgICBkaXYge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgd2lkdGg6IDI3JTtcclxuICAgICAgICBtYXJnaW46IDAgMTBweCAxMHB4IDA7XHJcbiAgICAgICAgcGFkZGluZzogOHB4IDZweDtcclxuICAgICAgICBjb2xvcjogIzc2YWFlYjtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2YyZjdmZjtcclxuXHJcbiAgICAgICAgJjpudGgtY2hpbGQoM24pIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmxldmVsMCB7XHJcbiAgICAgIGNvbG9yOiAjNzhkZDg4O1xyXG4gICAgfVxyXG5cclxuICAgIC5sZXZlbDEge1xyXG4gICAgICBjb2xvcjogI2Y0Y2Q0ZjtcclxuICAgIH1cclxuXHJcbiAgICAubGV2ZWwyIHtcclxuICAgICAgY29sb3I6ICNlYTljM2E7XHJcbiAgICB9XHJcblxyXG4gICAgLmxldmVsMyB7XHJcbiAgICAgIGNvbG9yOiAjY2Q3MDYwO1xyXG4gICAgfVxyXG5cclxuICAgIC5sZXZlbDQge1xyXG4gICAgICBjb2xvcjogIzc3NjdjYjtcclxuICAgIH1cclxuICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiYWlyV3lySW5mb1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBvaW50ZXJUb3BcIj5cclxuICAgICAgPHAgY2xhc3M9XCJ0aXRsZVwiIEBjbGljaz1cInRvRGV0YWlsXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJAL2Fzc2V0cy/nvJbnu4QucG5nXCIgc3R5bGU9XCJ3aWR0aDogMTJweDsgbWFyZ2luLXJpZ2h0OiA1cHhcIi8+XHJcbiAgICAgICAge3sgc2l0ZU9iai5lbnRlcnByaXNlTmFtZSB9fVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDx2YW4taWNvbiBjbGFzcz1cImNsb3NlXCIgbmFtZT1cImNsZWFyXCIgQGNsaWNrPVwiJGVtaXQoJ2Nsb3NlJylcIiBjb2xvcj1cIiNBNkFCQjNcIiA6c2l6ZT1cIjIwXCIvPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYWRkcmVzc1wiPlxyXG4gICAgICAge3sgc2l0ZU9iai5hZGRyZXNzIH19XHJcbiAgICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwibWFwV3J5XCIsXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHNpdGVPYmo6IHtcclxuICAgICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgICAgZGVmYXVsdDogKCkgPT4ge1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgc2l0ZU9iaigpIHtcclxuXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIHRvRGV0YWlsKCkge1xyXG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgIG5hbWU6IFwiY29tcGFueURldGFpbFwiLFxyXG4gICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuc2l0ZU9iai5pZCxcclxuICAgICAgICAgICAgdHlwZTogJ3JlZCdcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlPlxyXG4gIC5haXJXeXJJbmZvIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMTJweDtcclxuICAgIGxlZnQ6IDdweDtcclxuICAgIHJpZ2h0OiA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgLnBvaW50ZXJUb3Age1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzJweCk7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIHBhZGRpbmc6IDAgMTZweDtcclxuXHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAxKTtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLnZhbi1pY29uIHtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jbG9zZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYWRkcmVzc3tcclxuICAgICAgcGFkZGluZy1sZWZ0OiAzNXB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwibWFwLXBvcC13cmFwcGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwicG9wLXRpdGxlLXdyYXBwZXIgZnNcIj5cclxuICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1mbGV4O2FsaWduLWl0ZW1zOiBjZW50ZXI7d2lkdGg6IDczJVwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMv57yW57uELnBuZ1wiIHdpZHRoPVwiOVwiIGhlaWdodD1cIjExXCIvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwic2l0ZS1uYW1lXCIgQGNsaWNrPVwidG9EZXRhaWxcIj57e3NpdGVEYXRhLnNpdGVOYW1lfX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gOmNsYXNzPVwiJ2xldmVsJytqdWRnZUxldmVsUmV0dXJuKHNpdGVEYXRhLmtpbmQpXCI+e3tzaXRlRGF0YS5raW5kfX0oe3tzaXRlRGF0YS5hcWl9fSk8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8c3BhbiBjbGFzcz1cInRpbWVcIiB2LWlmPVwic2l0ZURhdGEubW9uaXRvcmluZ1RpbWVcIj5cclxuICAgICAgICB7eyBzaXRlRGF0YS5tb25pdG9yaW5nVGltZS5zdWJzdHJpbmcoMCwxMykgfX1cclxuICAgICAgPC9zcGFuPlxyXG5cclxuICAgICAgPHZhbi1pY29uIGNsYXNzPVwiY2xvc2VcIiBuYW1lPVwiY2xlYXJcIiBAY2xpY2s9XCIkZW1pdCgnY2xvc2UnKVwiIGNvbG9yPVwiI0E2QUJCM1wiIDpzaXplPVwiMjBcIi8+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1ib3hcIj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzaXRlLXN0YXR1XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNpdGUtbW9uaXRvci1ib3hcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMvcXVlcnkv5rm/5bqmLnBuZ1wiLz5cclxuICAgICAgICAgIOa5v+W6pu+8mnt7c2l0ZURhdGEuaHVtaWRpdHl9fSVcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2l0ZS1tb25pdG9yLWJveFwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJAL2Fzc2V0cy9xdWVyeS/po47lkJEucG5nXCIvPlxyXG4gICAgICAgICAg6aOO5ZCR77yae3tzaXRlRGF0YS53aW5kRGlyZWN0aW9ufX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2l0ZS1tb25pdG9yLWJveFwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJAL2Fzc2V0cy9xdWVyeS/po47pgJ8ucG5nXCIvPlxyXG4gICAgICAgICAg6aOO6YCf77yae3tzaXRlRGF0YS53aW5kU3BlZWR9fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaXRlLW1vbml0b3ItYm94XCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIkAvYXNzZXRzL3F1ZXJ5L+awlOWOiy5wbmdcIi8+XHJcbiAgICAgICAgICDmsJTljovvvJp7e3NpdGVEYXRhLnByZXNzdXJlfX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2l0ZS1tb25pdG9yLWJveFwiPlxyXG4gICAgICAgICAgPGltZyBzcmM9XCJAL2Fzc2V0cy9xdWVyeS/muKnluqYucG5nXCIvPlxyXG4gICAgICAgICAg5rip5bqm77yae3tzaXRlRGF0YS50ZW1wZXJhdHVyZX194oSDXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudC1tb25pdG9yXCI+XHJcbiAgICAgICAgPGRpdiA6c3R5bGU9XCJnZXRDb2xvcihzaXRlRGF0YS5wbTI1LCdwbTI1JylcIj5cclxuICAgICAgICAgIDxzcGFuPnt7c2l0ZURhdGEucG0yNX19PC9zcGFuPlBNMi41XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiA6c3R5bGU9XCJnZXRDb2xvcihzaXRlRGF0YS5wbTEwLCdwbTEwJylcIj5cclxuICAgICAgICAgIDxzcGFuPnt7c2l0ZURhdGEucG0xMH19PC9zcGFuPlBNMTBcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IDpzdHlsZT1cImdldENvbG9yKHNpdGVEYXRhLnNvMiwnc28yJylcIj5cclxuICAgICAgICAgIDxzcGFuPnt7c2l0ZURhdGEuc28yfX08L3NwYW4+U08yXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiA6c3R5bGU9XCJnZXRDb2xvcihzaXRlRGF0YS5ubzIsJ25vMicpXCI+XHJcbiAgICAgICAgICA8c3Bhbj57e3NpdGVEYXRhLm5vMn19PC9zcGFuPk5PMlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgOnN0eWxlPVwiZ2V0Q29sb3Ioc2l0ZURhdGEuY28sJ2NvJylcIj5cclxuICAgICAgICAgIDxzcGFuPnt7c2l0ZURhdGEuY299fTwvc3Bhbj5DT1xyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgOnN0eWxlPVwiZ2V0Q29sb3Ioc2l0ZURhdGEub3pvbmUsJ296b25lJylcIj5cclxuICAgICAgICAgIDxzcGFuPnt7c2l0ZURhdGEub3pvbmV9fTwvc3Bhbj5PM1xyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHtqdWRnZUFpckxldmVsfSBmcm9tICdAL3V0aWxzL21hcFBvaW50LmpzJ1xyXG4gIGltcG9ydCB7c3RhdGlvbkRhdGF9IGZyb20gXCJAL2FwaS9vbGRfYWlyXCI7XHJcbiAgaW1wb3J0IHthaXJRdWFsaXR5U2l0ZURhdGFUeXBlfSBmcm9tICdAL2FwaS9haXJfcXVhbGl0eS5qcyc7XHJcbiAgaW1wb3J0IHtnZXRDYWxlbmRlckJnQ29sb3J9IGZyb20gJ0AvdXRpbHMvYWlyVXRpbHMuanMnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwibWFwU2l0ZUFpclwiLFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgc2l0ZU9iajoge1xyXG4gICAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgICBkZWZhdWx0OiAoKSA9PiB7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzaXRlRGF0YToge31cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgIHNpdGVPYmooKSB7XHJcbiAgICAgICAgdGhpcy5nZXREYXRhKClcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgIHRoaXMuZ2V0RGF0YSgpXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBnZXREYXRhKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2l0ZU9iailcclxuICAgICAgICBsZXQgaW5mbzIgPSB7XHJcbiAgICAgICAgICBkYXRhVHlwZTogMSxcclxuICAgICAgICAgIHNpdGVJZDogdGhpcy5zaXRlT2JqLmlkLFxyXG4gICAgICAgICAgZGl2aXNpb25OYW1lOiAnJyxcclxuICAgICAgICAgIGFxaTogJycsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFpclF1YWxpdHlTaXRlRGF0YVR5cGUoaW5mbzIpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIHRoaXMuc2l0ZURhdGEgPSByZXMuZGF0YTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC8qUHJvbWlzZS5hbGwoW3N0YXRpb25EYXRhKDEpLCBzdGF0aW9uRGF0YSgyKSwgc3RhdGlvbkRhdGEoNCldKS50aGVuKChbcmVzMSwgcmVzMiwgcmVzM10pID0+IHtcclxuICAgICAgICAgIGNvbnN0IGFsbCA9IFsuLi5yZXMxLkRBVEEsIC4uLnJlczIuREFUQSwgLi4ucmVzMy5EQVRBXVxyXG4gICAgICAgICAgdGhpcy5zaXRlRGF0YSA9IGFsbC5maW5kKGl0ZW0gPT4gaXRlbS5PQkpFQ1RJRCA9PSB0aGlzLnNpdGVPYmouc2l0ZUlkKVxyXG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5zaXRlRGF0YSlcclxuICAgICAgICB9KSovXHJcbiAgICAgIH0sXHJcbiAgICAgIHRvRGV0YWlsKCkge1xyXG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgIG5hbWU6ICdhaXJTdGF0aW9uRGV0YWlsJyxcclxuICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgIHNpdGVJZDogdGhpcy5zaXRlT2JqLnNpdGVJZCxcclxuICAgICAgICAgICAgc2l0ZU5hbWU6IHRoaXMuc2l0ZU9iai5zaXRlTmFtZSxcclxuICAgICAgICAgICAgc2l0ZUxldmVsOiB0aGlzLnNpdGVPYmouc2l0ZUxhYmVsLFxyXG4gICAgICAgICAgICB0aXRsZTogXCLnqbrmsJTotKjph4/nq5nngrnor6bmg4VcIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGp1ZGdlTGV2ZWxSZXR1cm4obGV2ZWwpIHtcclxuICAgICAgICByZXR1cm4ganVkZ2VBaXJMZXZlbChsZXZlbClcclxuICAgICAgfSxcclxuICAgICAgZ2V0Q29sb3IodmFsdWUsIGZhY3Rvcikge1xyXG4gICAgICAgIC8qbGV0IHN0YXR1cyA9ICcnO1xyXG4gICAgICAgIGlmIChrZXkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgc3RhdHVzID0gJ2Fpcl9ncmVlbmJnJztcclxuICAgICAgICB9IGVsc2UgaWYgKGtleSA8PSA1MCkge1xyXG4gICAgICAgICAgc3RhdHVzID0gJ2Fpcl9ncmVlbmJnJztcclxuICAgICAgICB9IGVsc2UgaWYgKGtleSA8PSAxMDAgJiYga2V5ID4gNTApIHtcclxuICAgICAgICAgIHN0YXR1cyA9ICdhaXJfeWVsbG93X2JnJztcclxuICAgICAgICB9IGVsc2UgaWYgKGtleSA8PSAxNTAgJiYga2V5ID4gMTAwKSB7XHJcbiAgICAgICAgICBzdGF0dXMgPSAnYWlyX29yYW5nZWJnJztcclxuICAgICAgICB9IGVsc2UgaWYgKGtleSA8PSAyMDAgJiYga2V5ID4gMTUwKSB7XHJcbiAgICAgICAgICBzdGF0dXMgPSAnYWlyX3JlZGJnJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhdHVzID0gJ2Fpcl93aGl0ZXJiZyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdGF0dXM7Ki9cclxuICAgICAgICBpZih2YWx1ZT09PScnfHx2YWx1ZT09PSctJyl7XHJcbiAgICAgICAgICByZXR1cm4gZ2V0Q2FsZW5kZXJCZ0NvbG9yKCcnLCAnJylcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGdldENhbGVuZGVyQmdDb2xvcihmYWN0b3IsIHZhbHVlKVxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgLm1hcC1wb3Atd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDEycHg7XHJcbiAgICBsZWZ0OiA3cHg7XHJcbiAgICByaWdodDogN3B4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHotaW5kZXg6IDk7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgIC5wb3AtdGl0bGUtd3JhcHBlciB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgcGFkZGluZzogMTJweCAzMHB4IDEycHggMThweDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgICAuc2l0ZS1uYW1lIHtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgbWF4LXdpZHRoOiA3MCU7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgY29sb3I6ICMxMjEyMzY7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudGltZSB7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jbG9zZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAwcHg7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAucG9wLXRpbWUge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMXB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICBjb2xvcjogIzk5OTtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50LWJveCB7XHJcbiAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDY4LCAxMjMsIDI1MiwgMSk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoNjgsIDEyMywgMjUyLCAwLjEpIDAlLCByZ2JhKDY4LCAxMjMsIDI1MiwgMCkgMjAlKTtcclxuICAgIH1cclxuXHJcbiAgICAuc2l0ZS1zdGF0dSwgLmNvbnRlbnQtbW9uaXRvciB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIH1cclxuXHJcbiAgICAuc2l0ZS1zdGF0dSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgICAuc2l0ZS1tb25pdG9yLWJveCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAzMyU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDEpO1xyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDEycHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtbW9uaXRvciB7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTVweDtcclxuXHJcbiAgICAgIGRpdiB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogMjclO1xyXG4gICAgICAgIG1hcmdpbjogMCAxMHB4IDEwcHggMDtcclxuICAgICAgICBwYWRkaW5nOiA4cHggNnB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgICBjb2xvcjogIzMzMztcclxuXHJcbiAgICAgICAgJjpudGgtY2hpbGQoM24pIHtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgLyouYWlyX2dyZWVuYmcgeyovXHJcbiAgLyogIGJhY2tncm91bmQ6IHJnYmEoNCwgMTk5LCA0LCAwLjA1KTsqL1xyXG5cclxuICAvKiAgPiBzcGFuIHsqL1xyXG4gIC8qICAgIGNvbG9yOiByZ2JhKDQsIDE5OSwgNCwgMSk7Ki9cclxuICAvKiAgfSovXHJcbiAgLyp9Ki9cclxuXHJcbiAgLyouYWlyX3llbGxvd19iZyB7Ki9cclxuICAvKiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyOC4xZGVnLCByZ2JhKDI1NSwgMTkxLCAwLCAwLjA1KSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAxMDAlKTsqL1xyXG5cclxuICAvKiAgPiBzcGFuIHsqL1xyXG4gIC8qICAgIGNvbG9yOiByZ2JhKDI1NSwgMTkxLCAwLCAxKTsqL1xyXG4gIC8qICB9Ki9cclxuICAvKn0qL1xyXG5cclxuICAvKi5haXJfb3JhbmdlYmcgeyovXHJcbiAgLyogIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjguMWRlZywgcmdiYSgyNTUsIDEyNiwgMCwgMC4wNSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMTAwJSk7Ki9cclxuXHJcbiAgLyogID4gc3BhbiB7Ki9cclxuICAvKiAgICBjb2xvcjogcmdiYSgyNTUsIDEyNiwgMCwgMSk7Ki9cclxuICAvKiAgfSovXHJcbiAgLyp9Ki9cclxuXHJcbiAgLyouYWlyX3JlZGJnIHsqL1xyXG4gIC8qICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI4LjFkZWcsIHJnYmEoMjU1LCAwLCAwLCAwLjA1KSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAxMDAlKTsqL1xyXG5cclxuICAvKiAgPiBzcGFuIHsqL1xyXG4gIC8qICAgIGNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMSk7Ki9cclxuICAvKiAgfSovXHJcbiAgLyp9Ki9cclxuXHJcbiAgLyouYWlyX3doaXRlcmJnIHsqL1xyXG4gIC8qICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI4LjFkZWcsIHJnYmEoNCwgMTk5LCA0LCAwLjA1KSAwJSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSAxMDAlKTsqL1xyXG5cclxuICAvKiAgPiBzcGFuIHsqL1xyXG4gIC8qICAgIGNvbG9yOiByZ2JhKDIwNCwgMjA0LCAyMDQsIDEpOyovXHJcbiAgLyogIH0qL1xyXG4gIC8qfSovXHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPG1hcFNpdGVXYXRlciB2LWlmPVwic2l0ZU9iai50eXBlPT09J3dhdGVyJ1wiIDpzaXRlT2JqPVwic2l0ZU9ialwiIEBjbG9zZT1cImNsb3NlUG9wXCIvPlxyXG4gICAgPG1hcFB1clBsYW50IHYtaWY9XCJzaXRlT2JqLnR5cGU9PT0ncHVyUGxhbnQnXCIgOnNpdGVPYmo9XCJzaXRlT2JqXCIgQGNsb3NlPVwiY2xvc2VQb3BcIi8+XHJcbiAgICA8bWFwV3J5IHYtaWY9XCJzaXRlT2JqLnR5cGU9PT0nd3J5J1wiIDpzaXRlT2JqPVwic2l0ZU9ialwiIEBjbG9zZT1cImNsb3NlUG9wXCIvPlxyXG4gICAgPG1hcEFpcldyeSB2LWlmPVwic2l0ZU9iai50eXBlPT09J3dyeUFpcidcIiA6c2l0ZU9iaj1cInNpdGVPYmpcIiBAY2xvc2U9XCJjbG9zZVBvcFwiLz5cclxuXHJcbiAgICA8IS0t56m65rCU5ZGo6L655rCU6LGh56uZ54K5LS0+XHJcbiAgICA8bWFwQWlyV2VhdGhlciB2LWlmPVwic2l0ZU9iai50eXBlPT09J2FpcldlYXRoZXInXCIgOnNpdGVPYmo9XCJzaXRlT2JqXCIgQGNsb3NlPVwiY2xvc2VQb3BcIi8+XHJcblxyXG4gICAgPGJyYW5jaFNpdGVQb3Agdi1lbHNlLWlmPVwic2l0ZU9iai50eXBlPT09J2JyYW5jaCdcIiA6c2l0ZU9iaj1cInNpdGVPYmpcIiBAY2xvc2U9XCJjbG9zZVBvcFwiPjwvYnJhbmNoU2l0ZVBvcD5cclxuXHJcbiAgICA8emZ4c1BvcCB2LWlmPVwic2l0ZU9iai50eXBlPT09J3hzZ2wnXCIgOnNpdGVPYmo9XCJzaXRlT2JqXCIgQGNsb3NlPVwiY2xvc2VQb3BcIj48L3pmeHNQb3A+XHJcblxyXG4gICAgPCEtLeS7juWFtuS7lumhueebruafpeivouawlOermeeCueeahOaVsOaNri0tPlxyXG4gICAgPG1hcFNpdGVBaXIgdi1pZj1cInNpdGVPYmoudHlwZT09PSdhaXInXCIgOnNpdGVPYmo9XCJzaXRlT2JqXCIgQGNsb3NlPVwiY2xvc2VQb3BcIi8+XHJcbiAgICA8IS0t5LuO5YW25LuW6aG555uu5p+l6K+i5rGh5p+T5rqQ55qE5pWw5o2uLS0+XHJcbiAgICA8bWFwV3J5T3RoZXIgdi1pZj1cInNpdGVPYmoudHlwZT09PSd3cnlPdGhlcidcIiA6c2l0ZU9iaj1cInNpdGVPYmpcIiBAY2xvc2U9XCJjbG9zZVBvcFwiLz5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IG1hcFNpdGVBaXIgZnJvbSBcIkAvdmlld3MvZ2lzL2NvbXBvbmVudHMvcG9wL2Fpci9tYXBTaXRlQWlyXCI7XHJcbiAgaW1wb3J0IG1hcEFpcldyeSBmcm9tIFwiQC92aWV3cy9naXMvY29tcG9uZW50cy9wb3AvYWlyL21hcEFpcldyeVwiO1xyXG4gIGltcG9ydCBtYXBTaXRlV2F0ZXIgZnJvbSBcIkAvdmlld3MvZ2lzL2NvbXBvbmVudHMvcG9wL3dhdGVyL21hcFNpdGVXYXRlclwiO1xyXG4gIGltcG9ydCBicmFuY2hTaXRlUG9wIGZyb20gXCJAL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC93YXRlci9icmFuY2hTaXRlUG9wXCI7XHJcbiAgaW1wb3J0IHpmeHNQb3AgZnJvbSBcIkAvdmlld3MvZ2lzL2NvbXBvbmVudHMvcG9wL3dhdGVyL3pmeHNQb3BcIjtcclxuICBpbXBvcnQgbWFwUHVyUGxhbnQgZnJvbSBcIkAvdmlld3MvZ2lzL2NvbXBvbmVudHMvcG9wL3dyeS9tYXBQdXJQbGFudFwiO1xyXG4gIGltcG9ydCBtYXBXcnkgZnJvbSBcIkAvdmlld3MvZ2lzL2NvbXBvbmVudHMvcG9wL3dyeS9tYXBXcnlcIjtcclxuICBpbXBvcnQgbWFwV3J5T3RoZXIgZnJvbSBcIkAvdmlld3MvZ2lzL2NvbXBvbmVudHMvcG9wL3dyeS9tYXBXcnlPdGhlclwiO1xyXG4gIGltcG9ydCBtYXBBaXJXZWF0aGVyIGZyb20gXCJAL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC9haXIvbWFwQWlyV2VhdGhlclwiO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcImluZGV4XCIsXHJcbiAgICBwcm9wczp7XHJcbiAgICAgIHNpdGVPYmo6e1xyXG4gICAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgICBkZWZhdWx0OiAoKSA9PiB7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czp7XHJcbiAgICAgIG1hcFNpdGVXYXRlcixcclxuICAgICAgbWFwUHVyUGxhbnQsXHJcbiAgICAgIG1hcFdyeSxcclxuICAgICAgbWFwU2l0ZUFpcixcclxuICAgICAgbWFwV3J5T3RoZXIsXHJcbiAgICAgIG1hcEFpcldyeSxcclxuICAgICAgbWFwQWlyV2VhdGhlcixcclxuICAgICAgYnJhbmNoU2l0ZVBvcCxcclxuICAgICAgemZ4c1BvcFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6e1xyXG4gICAgICBjbG9zZVBvcCgpe1xyXG4gICAgICAgIHRoaXMuJGVtaXQoXCJjbG9zZVBvcFwiKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxuICA8ZGl2IGNsYXNzPVwic2l0ZVBvaW50ZXJJbmZvXCI+XG4gICAgPGRpdiB2LXNob3c9XCJtYXBTaG93XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwicG9pbnRlclRvcFwiPlxuICAgICAgICA8cCBjbGFzcz1cInRpdGxlXCI+XG4gICAgICAgICAgPGltZyBzcmM9XCJAL2Fzc2V0cy9wb2ludC/nvJbnu4QgMi5wbmdcIiBzdHlsZT1cIndpZHRoOiAxNnB4O21hcmdpbi1yaWdodDogN3B4XCI+XG4gICAgICAgICAge3sgc2l0ZU9iai5kd21jIH19XG4gICAgICAgIDwvcD5cbiAgICAgICAgPHZhbi1pY29uIGNsYXNzPVwiY2xvc2VcIiBuYW1lPVwiY2xlYXJcIiBAY2xpY2s9XCIkZW1pdCgnY2xvc2UnKVwiIGNvbG9yPVwiI0E2QUJCM1wiIDpzaXplPVwiMjBcIi8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvQ29udGVudFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb0JveFwiPlxuICAgICAgICAgIOayn+a4oOWQjeensO+8mlxuICAgICAgICAgIDxzcGFuPnt7IHNpdGVPYmouZ3FtY3x8Jy0nIH19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImluZm9Cb3hcIj5cbiAgICAgICAgICDmiYDlsZ7ljLrln5/vvJpcbiAgICAgICAgICA8c3Bhbj57eyBzaXRlT2JqLnh6cWh8fCctJyB9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvQm94XCI+XG4gICAgICAgICAg57uP5bqm77yaXG4gICAgICAgICAgPHNwYW4+e3sgc2l0ZU9iai5KRHx8Jy0nIH19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImluZm9Cb3hcIj5cbiAgICAgICAgICDnuqzluqbvvJpcbiAgICAgICAgICA8c3Bhbj57eyBzaXRlT2JqLldEfHwnLScgfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG48IS0tICAgICAgPGRpdiBjbGFzcz1cImdvdHJvdW5kXCIgQGNsaWNrPVwibWFwQ2xpY2soKVwiPuWvvOiIquWIsOi/memHjDwvZGl2Pi0tPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJtYXBUYWJcIiB2LXNob3c9XCIhbWFwU2hvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cIm1hcEJ0blwiIEBjbGljaz1cImdkTWFwKClcIj7pq5jlvrflnLDlm748L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJtYXBCdG5cIiBAY2xpY2s9XCJiZE1hcCgpXCI+55m+5bqm5Zyw5Zu+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibWFwQnRuXCIgQGNsaWNrPVwid3lNYXAoKVwiPuiHquWKqOiOt+WPluWcsOWbvjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInF4QnRuXCIgQGNsaWNrPVwicXgoKVwiPuWPlua2iDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG48c2NyaXB0PlxuICBsZXQgbWFwTHggPSBcIlwiO1xuICBpbXBvcnQgY29vcmR0cmFuc2Zvcm0gZnJvbSBcImNvb3JkdHJhbnNmb3JtXCI7XG4gIGltcG9ydCB7VG9hc3R9IGZyb20gXCJ2YW50XCI7XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwic2l0ZVBvbGx1dGlvblwiLFxuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBtYXBTaG93OiB0cnVlLFxuICAgICAgICBtYXBMeDogXCJcIixcbiAgICAgICAgcG9pbnRPYmo6IHt9LFxuICAgICAgICBsb2NhdGlvbjogW10sXG4gICAgICAgIG1lc3NhZ2U6ICcnXG4gICAgICB9O1xuICAgIH0sXG4gICAgcHJvcHM6IHtcbiAgICAgIHNpdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBkZWZhdWx0OiAoKSA9PiB7XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gICAgd2F0Y2g6IHtcbiAgICAgIHNpdGVPYmooKSB7XG4gICAgICAgIC8vIHRoaXMubG9jYXRlKCk7XG4gICAgICB9LFxuICAgIH0sXG4gICAgYXN5bmMgbW91bnRlZCgpIHtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubG9jYXRlKCk7XG4gICAgICBsb2NhbE5hdmlnYXRpb24uY2hlY2soXG4gICAgICAgIGZ1bmN0aW9uIChzdWNjZXNzQ2FsbGJhY2spIHtcbiAgICAgICAgICBtYXBMeCA9IHN1Y2Nlc3NDYWxsYmFjaztcbiAgICAgICAgfSxcbiAgICAgICAgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhcImJcIiwgZSk7XG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBpZiAocmVzdWx0ID09PSAn5a6a5L2N5aSx6LSlJykge1xuICAgICAgICBUb2FzdChcIuWumuS9jeWksei0pVwiKTtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gcmVzdWx0XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgICAgIHRoaXMubG9jYXRpb24gPSByZXN1bHRcbiAgICAgIH1cbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICAgIGxvY2F0ZSgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICB3aW5kb3cuc3VjLmxvY2F0ZS5sb2NhdGUoXG4gICAgICAgICAgICAgIChsb2NhdGlvbikgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoW2xvY2F0aW9uLkxvbmdpdHVkZSwgbG9jYXRpb24uTGF0aXR1ZGVdKVxuICAgICAgICAgICAgICAgIC8vICAgICAgIHRoaXMubG9jYXRpb24gPSBbbG9jYXRpb24uTG9uZ2l0dWRlLGxvY2F0aW9uLkxhdGl0dWRlXVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubG9jYXRpb24pXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoJ+WumuS9jeWksei0pScpXG5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXNvbHZlKGNvb3JkdHJhbnNmb3JtLndnczg0dG9nY2owMigxMDIuODI3OTc3ODY5MzMxNDIsIDI0Ljg5MTA2Nzc3NDM3Mjc5KSlcbiAgICAgICAgICAgIC8vIHJlc29sdmUoW3RoaXMuJHJvdXRlLnF1ZXJ5LkpELHRoaXMuJHJvdXRlLnF1ZXJ5LldEXSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9LFxuICAgICAgbWFwQ2xpY2soKSB7XG4gICAgICAgIHRoaXMubWFwU2hvdyA9IGZhbHNlO1xuICAgICAgfSxcbiAgICAgIGdkTWFwKCkge1xuXG4gICAgICAgIHZhciBvcHRpb25zID0ge1xuICAgICAgICAgIGVuYWJsZUhpZ2hBY2N1cmFjeTogdHJ1ZSwgIC8vIOaYr+WQpuS9v+eUqCBHUFNcbiAgICAgICAgICBtYXhpbXVtQWdlOiAzMDAwMCwgICAgICAgICAvLyDnvJPlrZjml7bpl7RcbiAgICAgICAgICB0aW1lb3V0OiAyNzAwMCwgICAgICAgICAgICAvLyDotoXml7bml7bpl7RcbiAgICAgICAgICBjb29yVHlwZTogJ2JkMDlsbCcgICAgICAgICAvLyDpu5jorqTmmK8gZ2NqMDLvvIzlj6/loasgYmQwOWxsIHdnczg044CBZ2NqMDLku6Xojrflj5bnmb7luqbnu4/nuqzluqbnlKjkuo7orr/pl67nmb7luqYgQVBJXG4gICAgICAgIH1cbiAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLmdldEN1cnJlbnRQb3NpdGlvbihmdW5jdGlvbihpbmZvKXtcbiAgICAgICAgICBhbGVydChKU09OLnN0cmluZ2lmeShpbmZvKSlcbiAgICAgICAgfSwgZnVuY3Rpb24oZXJyb3Ipe1xuXG4gICAgICAgIH0sIG9wdGlvbnMpO1xuXG4gICAgICAgIG9wZW5HYW9kZU1hcCgpO1xuXG4gICAgICAgIHJldHVyblxuXG4gICAgICAgIGlmIChtYXBMeCA9PSBcImFtYXBcIiB8fCBtYXBMeCA9PSBcImFtYXBiYWlkdVwiKSB7XG4gICAgICAgICAgbG9jYWxOYXZpZ2F0aW9uLnN0YXJ0KFxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgIGFsZXJ0KGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdHlwZTogXCJhbWFwXCIsXG4gICAgICAgICAgICAgIHRvTG5nOiB0aGlzLnNpdGVPYmouSkQsXG4gICAgICAgICAgICAgIHRvTGF0OiB0aGlzLnNpdGVPYmouV0QsXG4gICAgICAgICAgICAgIG15TG5nOiB0aGlzLmxvY2F0aW9uWzBdLFxuICAgICAgICAgICAgICBteUxhdDogdGhpcy5sb2NhdGlvblsxXSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuJGRpYWxvZy5hbGVydCh7XG4gICAgICAgICAgICBtZXNzYWdlOiBcIuivt+S4i+i9vemrmOW+t+WcsOWbvuaIluiAheS9v+eUqOWFtuS7luWcsOWbvu+8gVwiLFxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgYmRNYXAoKSB7XG4gICAgICAgIGlmIChtYXBMeCA9PSBcImJhaWR1XCIgfHwgbWFwTHggPT0gXCJhbWFwYmFpZHVcIikge1xuICAgICAgICAgIGxvY2FsTmF2aWdhdGlvbi5zdGFydChcbiAgICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgICAgICBhbGVydChlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiYmFpZHVcIixcbiAgICAgICAgICAgICAgdG9Mbmc6IHRoaXMuc2l0ZU9iai5KRCxcbiAgICAgICAgICAgICAgdG9MYXQ6IHRoaXMuc2l0ZU9iai5XRCxcbiAgICAgICAgICAgICAgbXlMbmc6IHRoaXMubG9jYXRpb25bMF0sXG4gICAgICAgICAgICAgIG15TGF0OiB0aGlzLmxvY2F0aW9uWzFdLFxuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy4kZGlhbG9nLmFsZXJ0KHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwi6K+35LiL6L2955m+5bqm5Zyw5Zu+5oiW6ICF5L2/55So5YW25LuW5Zyw5Zu+77yBXCIsXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB3eU1hcCgpIHtcbiAgICAgICAgbG9jYWxOYXZpZ2F0aW9uLnN0YXJ0KFxuICAgICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB9LFxuICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBhbGVydChlKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHR5cGU6IFwiYXV0b1wiLFxuICAgICAgICAgICAgdG9Mbmc6IHRoaXMuc2l0ZU9iai5KRCxcbiAgICAgICAgICAgIHRvTGF0OiB0aGlzLnNpdGVPYmouV0QsXG4gICAgICAgICAgICBteUxuZzogdGhpcy5sb2NhdGlvblswXSxcbiAgICAgICAgICAgIG15TGF0OiB0aGlzLmxvY2F0aW9uWzFdLFxuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgIH0sXG4gICAgICBxeCgpIHtcbiAgICAgICAgdGhpcy5tYXBTaG93ID0gdHJ1ZTtcbiAgICAgIH0sXG4gICAgfSxcbiAgfTtcbjwvc2NyaXB0PlxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuICAuc2l0ZVBvaW50ZXJJbmZvIHtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgYm90dG9tOiAxMnB4O1xuICAgIGxlZnQ6IDdweDtcbiAgICByaWdodDogN3B4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgei1pbmRleDogOTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgLnZhbi1idXR0b25fX3RleHQge1xuICAgICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgLmdvdHJvdW5kIHtcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgIGNvbG9yOiAjMWQ2M2U1O1xuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIHBhZGRpbmc6IDZweCAxMHB4IDEwcHg7XG4gICAgfVxuXG4gICAgLnBvaW50ZXJUb3Age1xuICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xuICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAxKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICB9XG5cbiAgICAgIC52YW4taWNvbiB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICB9XG5cbiAgICAgIC5jbG9zZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IC01cHg7XG4gICAgICAgIHRvcDogLTVweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuaW5mb0NvbnRlbnQge1xuICAgICAgbWFyZ2luOiAwIDVweDtcbiAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoNjgsIDEyMywgMjUyLCAwLjEpIDAlLCByZ2JhKDY4LCAxMjMsIDI1MiwgMCkgMTAwJSk7XG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDY4LCAxMjMsIDI1MiwgMC40KTtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xuXG4gICAgICAuaW5mb0JveCB7XG4gICAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNXZ3KTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIuNXZ3O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAubWFwVGFiIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcblxuICAgICAgLm1hcEJ0biB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MnB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlZWVlO1xuICAgICAgfVxuXG4gICAgICAubWFwQnRuOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gICAgICB9XG5cbiAgICAgIC5xeEJ0biB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDQycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MnB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICMzMzMzMzM7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG48L3N0eWxlPlxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJtYXAtcG9wLXdyYXBwZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwb3AtdGl0bGUtd3JhcHBlclwiPlxyXG4gICAgICA8ZGl2IHYtaWY9XCJzaXRlRGF0YS5zdGF0ZT09PSfovr7moIcnXCIgY2xhc3M9XCJzdGFuZGFyZFwiPjwvZGl2PlxyXG4gICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cImV4Y2VlZFwiPjwvZGl2PlxyXG4gICAgICB7eyBzaXRlRGF0YS5qY3NqUGFyYW0gfX1cclxuICAgICAgPHZhbi1pY29uIGNsYXNzPVwiY2xvc2VcIiBuYW1lPVwiY2xlYXJcIiBAY2xpY2s9XCIkZW1pdCgnY2xvc2UnKVwiIGNvbG9yPVwiI0E2QUJCM1wiIDpzaXplPVwiMjBcIi8+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwibmFtZS13cmFwcGVyIG5hbWVcIiBAY2xpY2s9XCJ0b0RldGFpbFwiPlxyXG4gICAgICA8c3BhbiBzdHlsZT1cInRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lXCI+e3tzaXRlRGF0YS5zaXRlTmFtZX19PC9zcGFuPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cInNpdGUtc3RhdHVzXCJcclxuICAgICAgICAgICAgOnN0eWxlPVwie2JhY2tncm91bmRJbWFnZTogJ3VybCgnICsganVkZ2VMZXZlbChyZXBsYWNlU3RyaW5nKHNpdGVEYXRhLndhdGVyUXVhbGl0eUxldmVsKSkgKyAnKScsIG1hcmdpbjogJzAgMTZweCcgfVwiPlxyXG4gICAgICAgIHt7cmVwbGFjZVN0cmluZyhzaXRlRGF0YS53YXRlclF1YWxpdHlMZXZlbCl9fVxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxzcGFuIDpjbGFzcz1cIlsndGFyZ2V0LWxldmVsJyxqdWRnZVRhcmdldExldmVsKHJlcGxhY2VTdHJpbmcoc2l0ZURhdGEud2F0ZXJRdWFsaXR5VGFyZ2V0KSldXCI+XHJcbiAgICAgICAgICAgIHt7cmVwbGFjZVN0cmluZyhzaXRlRGF0YS53YXRlclF1YWxpdHlUYXJnZXQpfX1cclxuICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiA6Y2xhc3M9XCJbJ2NvbnRlbnQtbW9uaXRvcicsc2l0ZURhdGEuc3RhdGU9PT0n6L6+5qCHJz8nY29udGVudC1zdGFuZGFyZCc6ICdjb250ZW50LWV4Y2VlZCddXCI+XHJcbiAgICAgIDxkaXYgdi1mb3I9XCJpdGVtIGluIHNpdGVEYXRhLmZhY3Rvckxpc3RcIj5cclxuICAgICAgICA8c3Bhbj57eyBpdGVtLmZhY3Rvck5hbWUgfX06PC9zcGFuPiB7e2l0ZW0udmFsdWV9fSB7e2l0ZW0udW5pdH19XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibm90aWNlXCI+XHJcbiAgICAgICAgPHZhbi1pY29uIG5hbWU9XCJ3YXJuaW5nXCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDVweDtcIi8+XHJcbiAgICAgICAge3sgc2l0ZURhdGEuZGF0YVNvdXJjZSB9fVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHtzdGF0aW9uSW5mb30gZnJvbSBcIkAvYXBpL3dhdGVyX2VudmlyLmpzXCI7XHJcbiAgaW1wb3J0IHtpbWdKdWdkZUxldmVsfSBmcm9tIFwiQC91dGlscy91dGlsc1wiO1xyXG4gIGltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbiAgaW1wb3J0IHtmb3VySG91clRpbWV9IGZyb20gXCJAL3V0aWxzL3NldGRhdGUuanNcIjtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJtYXBTaXRlV2F0ZXJcIixcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIHNpdGVPYmo6IHtcclxuICAgICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgICAgZGVmYXVsdDogKCkgPT4ge1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc2l0ZURhdGE6IHtcclxuICAgICAgICAgIHl6bGlzdDogW11cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICBzaXRlT2JqKCkge1xyXG4gICAgICAgIHRoaXMuZ2V0RGF0YSgpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICB0aGlzLmdldERhdGEoKVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgZ2V0RGF0YSgpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNpdGVPYmopXHJcbiAgICAgICAgY29uc29sZS5sb2coZm91ckhvdXJUaW1lKCkpXHJcbiAgICAgICAgLypcclxuICAgICAgICDmiYvlt6Ug5Y+q5pyJ5pyI5bm05YC8XHJcbiAgICAgICAgKiAqL1xyXG4gICAgICAgIGxldCB0aW1lVHlwZSA9ICcnLCBkYXRlVGltZSA9ICcnXHJcblxyXG4gICAgICAgIGlmKHRoaXMuc2l0ZU9iai5tb25pdG9yTWV0aG9kKXtcclxuICAgICAgICAgIGlmICh0aGlzLnNpdGVPYmoubW9uaXRvck1ldGhvZCA9PSBcIuaJi+W3peebkea1i1wiKSB7XHJcbiAgICAgICAgICAgIGRhdGVUaW1lID0gZGF5anMoKS5mb3JtYXQoJ1lZWVktTU0nKTtcclxuICAgICAgICAgICAgdGltZVR5cGUgPSAn5pyIJztcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRhdGVUaW1lID0gZm91ckhvdXJUaW1lKCk7XHJcbiAgICAgICAgICAgIHRpbWVUeXBlID0gJ+aXtic7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICBpZiAodGhpcy5zaXRlT2JqLm1vbml0b3JpbmdNb2RlID09PSAn6Ieq5YqoJykge1xyXG4gICAgICAgICAgICB0aW1lVHlwZSA9ICfml7YnO1xyXG4gICAgICAgICAgICBkYXRlVGltZSA9IGZvdXJIb3VyVGltZSgpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGltZVR5cGUgPSAn5pyIJ1xyXG4gICAgICAgICAgICBkYXRlVGltZSA9IGRheWpzKCkuZm9ybWF0KCdZWVlZLU1NJylcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc3RhdGlvbkluZm8oe1xyXG4gICAgICAgICAgZGF0ZVRpbWU6IGRhdGVUaW1lLFxyXG4gICAgICAgICAgc2l0ZUlkOiB0aGlzLnNpdGVPYmouc2VjdGlvbklkLFxyXG4gICAgICAgICAgdGltZVR5cGU6IHRpbWVUeXBlLFxyXG4gICAgICAgICAgdHlwZTogdGhpcy5zaXRlT2JqLnNpdGVUeXBlXHJcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgdGhpcy5zaXRlRGF0YSA9IHtcclxuICAgICAgICAgICAgLi4ucmVzLmRhdGEsXHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMuc2l0ZU9iai5zZWN0aW9uTmFtZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIHRvRGV0YWlsKCkge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAg5omL5belIOWPquacieaciOW5tOWAvFxyXG4gICAgICAgICogKi9cclxuICAgICAgICBsZXQgdGltZVR5cGUgPSAnJywgZGF0ZVRpbWUgPSAnJ1xyXG4gICAgICAgIGlmICh0aGlzLnNpdGVPYmoubW9uaXRvcmluZ01vZGUgPT09ICfoh6rliqgnKSB7XHJcbiAgICAgICAgICB0aW1lVHlwZSA9ICfml7YnO1xyXG4gICAgICAgICAgZGF0ZVRpbWUgPSBkYXlqcygpLnN1YnRyYWN0KDQsICdob3VyJykuZm9ybWF0KCdZWVlZLU1NLUREIEhIOjAwJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRpbWVUeXBlID0gJ+aciCdcclxuICAgICAgICAgIGRhdGVUaW1lID0gZGF5anMoKS5mb3JtYXQoJ1lZWVktTU0nKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICBuYW1lOiBcInN0YXRpb25EZXRhaWxcIixcclxuICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgIG1jOiB0aGlzLnNpdGVPYmouc2VjdGlvbk5hbWUsXHJcbiAgICAgICAgICAgIHR5cGU6IHRpbWVUeXBlLFxyXG4gICAgICAgICAgICBpZDogdGhpcy5zaXRlT2JqLnNlY3Rpb25JZCxcclxuICAgICAgICAgICAgdGltZTogZGF0ZVRpbWUsXHJcbiAgICAgICAgICAgIGxpc3RUeXBlOiB0aGlzLnNpdGVPYmouc2l0ZVR5cGUsXHJcbiAgICAgICAgICAgIHpkVHlwZTogdGhpcy5zaXRlT2JqLm1vbml0b3JpbmdNZXRob2QsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICByZXBsYWNlU3RyaW5nKHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgn57G7JywgJycpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiAnLSdcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIGp1ZGdlTGV2ZWwodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gaW1nSnVnZGVMZXZlbCh2YWx1ZSlcclxuICAgICAgfSxcclxuICAgICAganVkZ2VUYXJnZXRMZXZlbCh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkge1xyXG4gICAgICAgICAgcmV0dXJuICd0YXJnZXQyJztcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAn4oWhJykge1xyXG4gICAgICAgICAgcmV0dXJuICd0YXJnZXQyJztcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAn4oWiJykge1xyXG4gICAgICAgICAgcmV0dXJuICd0YXJnZXQzJztcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAn4oWjJykge1xyXG4gICAgICAgICAgcmV0dXJuICd0YXJnZXQ0JztcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAn4oWkJykge1xyXG4gICAgICAgICAgcmV0dXJuICd0YXJnZXQ1JztcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSAn5Yqj4oWkJykge1xyXG4gICAgICAgICAgcmV0dXJuICd0YXJnZXQ2JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuICd0YXJnZXQwJztcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICAubWFwLXBvcC13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMTJweDtcclxuICAgIGxlZnQ6IDdweDtcclxuICAgIHJpZ2h0OiA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgLm5hbWUge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDEpO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICAucG9wLXRpdGxlLXdyYXBwZXIge1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIHBhZGRpbmc6IDhweCAxN3B4IDA7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICAgIC5zdGFuZGFyZCwgLmV4Y2VlZCB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IC01cHg7XHJcbiAgICAgICAgdG9wOiAtMTBweDtcclxuICAgICAgICB3aWR0aDogOTJweDtcclxuICAgICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5zdGFuZGFyZCB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKFwifkAvYXNzZXRzL3BvcFN0YW5kYXJkLnBuZ1wiKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuZXhjZWVkIHtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCJ+QC9hc3NldHMvcG9wRXhjZWVkLnBuZ1wiKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2xvc2Uge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogNXB4O1xyXG4gICAgICAgIHRvcDogM3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLm5hbWUtd3JhcHBlciB7XHJcbiAgICAgIG1hcmdpbjogMTFweCA3cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmNvbnRlbnQtc3RhbmRhcmQge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDAsIDE4NiwgMTczLCAwLjEpIDAlLCByZ2JhKDAsIDE4NiwgMTczLCAwKSAxMDAlKTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAxODYsIDE3MywgMC4yKTtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGVudC1leGNlZWQge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1MCwgNywgNywgMC4xKSAwJSwgcmdiYSgyNTAsIDEyLCAxMCwgMCkgMTAwJSk7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjUwLCA3LCA3LCAwLjIpO1xyXG4gICAgfVxyXG5cclxuICAgIC5jb250ZW50LW1vbml0b3Ige1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgIG1hcmdpbjogMCA1cHggNXB4O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDE1cHggNnB4O1xyXG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcclxuXHJcbiAgICAgIGRpdiB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNHB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAxKTtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5ub3RpY2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCAxMnB4IDA7XHJcbiAgICAgICAgY29sb3I6Izg2OTVBQTtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDRweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLnRhcmdldC1sZXZlbCB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJzaXRlUG9pbnRlckluZm9cIj5cclxuICAgIDxkaXYgdi1zaG93PVwibWFwU2hvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicG9pbnRlclRvcFwiPlxyXG4gICAgICAgIDxwIGNsYXNzPVwidGl0bGVcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMvcG9pbnQv57yW57uEIDIucG5nXCIgc3R5bGU9XCJ3aWR0aDogMTZweDsgbWFyZ2luLXJpZ2h0OiA3cHhcIiAvPlxyXG4gICAgICAgICAge3sgZGF0YU9iai5kZXRhaWxfaW5mby5lbnRlcnByaXNlX25hbWUgfX1cclxuICAgICAgICA8L3A+XHJcbiAgICAgICAgPHZhbi1pY29uIGNsYXNzPVwiY2xvc2VcIiBuYW1lPVwiY2xlYXJcIiBAY2xpY2s9XCIkZW1pdCgnY2xvc2UnKVwiIGNvbG9yPVwiI0E2QUJCM1wiIDpzaXplPVwiMjBcIiAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImluZm9Db250ZW50XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImluZm9Cb3hcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPue6v+e0ouexu+Wei++8mjwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIndvcmRzXCI+e3sgZGF0YU9iai5kZXRhaWxfaW5mby5jbGFzc2lmaWNhdGlvbiB8fCBcIi1cIiB9fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvQm94XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj7nur/ntKLmnaXmupDvvJo8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3Jkc1wiPnt7IGRhdGFPYmouZGV0YWlsX2luZm8udHlwZSB8fCBcIi1cIiB9fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvQm94XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj7nur/ntKLmj4/ov7DvvJo8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3Jkc1wiPnt7IGRhdGFPYmouZGV0YWlsX2luZm8uYmFzaWNfaW5mbyB8fCBcIi1cIiB9fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvQm94XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj7nur/ntKLnirbmgIHvvJo8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3b3Jkc1wiIDpzdHlsZT1cInsgY29sb3I6IGRhdGFPYmouZGV0YWlsX2luZm8uc3RhdHVzID09ICflt7Llip7nu5MnID8gJ3JnYig3NCwgMjI3LCAxMjMpJyA6ICdyZ2IoMCwgMTgyLCAyNTUpJyB9XCI+e3sgZGF0YU9iai5kZXRhaWxfaW5mby5zdGF0dXMgfHwgXCItXCIgfX08L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbjwhLS0gICAgICA8ZGl2IGNsYXNzPVwiZ290cm91bmRcIiBAY2xpY2s9XCJtYXBDbGljaygpXCI+5a+86Iiq5Yiw6L+Z6YeMPC9kaXY+LS0+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJtYXBUYWJcIiB2LXNob3c9XCIhbWFwU2hvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibWFwQnRuXCIgQGNsaWNrPVwiZ2RNYXAoKVwiPumrmOW+t+WcsOWbvjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibWFwQnRuXCIgQGNsaWNrPVwiYmRNYXAoKVwiPueZvuW6puWcsOWbvjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibWFwQnRuXCIgQGNsaWNrPVwid3lNYXAoKVwiPuiHquWKqOiOt+WPluWcsOWbvjwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicXhCdG5cIiBAY2xpY2s9XCJxeCgpXCI+5Y+W5raIPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxubGV0IG1hcEx4ID0gXCJcIjtcclxuaW1wb3J0IGNvb3JkdHJhbnNmb3JtIGZyb20gXCJjb29yZHRyYW5zZm9ybVwiO1xyXG5pbXBvcnQgeyBUb2FzdCB9IGZyb20gXCJ2YW50XCI7XHJcbmltcG9ydCB7IHhzRGV0YWlsIH0gZnJvbSBcIkAvYXBpL2NsdWUuanNcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcInNpdGVQb2xsdXRpb25cIixcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbWFwU2hvdzogdHJ1ZSxcclxuICAgICAgbWFwTHg6IFwiXCIsXHJcbiAgICAgIHBvaW50T2JqOiB7fSxcclxuICAgICAgbG9jYXRpb246IFtdLFxyXG4gICAgICBtZXNzYWdlOiBcIlwiLFxyXG4gICAgICBkYXRhT2JqOiB7fSxcclxuICAgIH07XHJcbiAgfSxcclxuICBwcm9wczoge1xyXG4gICAgc2l0ZU9iajoge1xyXG4gICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgIGRlZmF1bHQ6ICgpID0+IHt9LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIHdhdGNoOiB7XHJcbiAgICBzaXRlT2JqKCkge1xyXG4gICAgICB0aGlzLmxvY2F0ZSgpO1xyXG4gICAgfSxcclxuICB9LFxyXG4gIGFzeW5jIG1vdW50ZWQoKSB7XHJcbiAgICB0aGlzLmdldFhzKCk7XHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCB0aGlzLmxvY2F0ZSgpO1xyXG4gICAgbG9jYWxOYXZpZ2F0aW9uLmNoZWNrKFxyXG4gICAgICBmdW5jdGlvbiAoc3VjY2Vzc0NhbGxiYWNrKSB7XHJcbiAgICAgICAgbWFwTHggPSBzdWNjZXNzQ2FsbGJhY2s7XHJcbiAgICAgIH0sXHJcbiAgICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJiXCIsIGUpO1xyXG4gICAgICB9XHJcbiAgICApO1xyXG4gICAgaWYgKHJlc3VsdCA9PT0gXCLlrprkvY3lpLHotKVcIikge1xyXG4gICAgICBUb2FzdChcIuWumuS9jeWksei0pVwiKTtcclxuICAgICAgdGhpcy5tZXNzYWdlID0gcmVzdWx0O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuICAgICAgdGhpcy5sb2NhdGlvbiA9IHJlc3VsdDtcclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGxvY2F0ZSgpIHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgIHdpbmRvdy5zdWMubG9jYXRlLmxvY2F0ZShcclxuICAgICAgICAgICAgKGxvY2F0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShbbG9jYXRpb24uTG9uZ2l0dWRlLCBsb2NhdGlvbi5MYXRpdHVkZV0pO1xyXG4gICAgICAgICAgICAgIC8vICAgICAgIHRoaXMubG9jYXRpb24gPSBbbG9jYXRpb24uTG9uZ2l0dWRlLGxvY2F0aW9uLkxhdGl0dWRlXVxyXG4gICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubG9jYXRpb24pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgIHJlc29sdmUoXCLlrprkvY3lpLHotKVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgcmVzb2x2ZShjb29yZHRyYW5zZm9ybS53Z3M4NHRvZ2NqMDIoMTAyLjgyNzk3Nzg2OTMzMTQyLCAyNC44OTEwNjc3NzQzNzI3OSkpO1xyXG4gICAgICAgICAgLy8gcmVzb2x2ZShbdGhpcy4kcm91dGUucXVlcnkuSkQsdGhpcy4kcm91dGUucXVlcnkuV0RdKVxyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0WHMoKSB7XHJcbiAgICAgIHhzRGV0YWlsKHsgaWQ6IHRoaXMuc2l0ZU9iai5pZCB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICB0aGlzLmRhdGFPYmogPSByZXMuZGF0YTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgbWFwQ2xpY2soKSB7XHJcbiAgICAgIHRoaXMubWFwU2hvdyA9IGZhbHNlO1xyXG4gICAgfSxcclxuICAgIGdkTWFwKCkge1xyXG4gICAgICBpZiAobWFwTHggPT0gXCJhbWFwXCIgfHwgbWFwTHggPT0gXCJhbWFwYmFpZHVcIikge1xyXG4gICAgICAgIGxvY2FsTmF2aWdhdGlvbi5zdGFydChcclxuICAgICAgICAgIGZ1bmN0aW9uICgpIHt9LFxyXG4gICAgICAgICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgYWxlcnQoZSk7XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcImFtYXBcIixcclxuICAgICAgICAgICAgdG9Mbmc6IHRoaXMuc2l0ZU9iai5KRCxcclxuICAgICAgICAgICAgdG9MYXQ6IHRoaXMuc2l0ZU9iai5XRCxcclxuICAgICAgICAgICAgbXlMbmc6IHRoaXMubG9jYXRpb25bMF0sXHJcbiAgICAgICAgICAgIG15TGF0OiB0aGlzLmxvY2F0aW9uWzFdLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy4kZGlhbG9nLmFsZXJ0KHtcclxuICAgICAgICAgIG1lc3NhZ2U6IFwi6K+35LiL6L296auY5b635Zyw5Zu+5oiW6ICF5L2/55So5YW25LuW5Zyw5Zu+77yBXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBiZE1hcCgpIHtcclxuICAgICAgaWYgKG1hcEx4ID09IFwiYmFpZHVcIiB8fCBtYXBMeCA9PSBcImFtYXBiYWlkdVwiKSB7XHJcbiAgICAgICAgbG9jYWxOYXZpZ2F0aW9uLnN0YXJ0KFxyXG4gICAgICAgICAgZnVuY3Rpb24gKCkge30sXHJcbiAgICAgICAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBhbGVydChlKTtcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiYmFpZHVcIixcclxuICAgICAgICAgICAgdG9Mbmc6IHRoaXMuc2l0ZU9iai5KRCxcclxuICAgICAgICAgICAgdG9MYXQ6IHRoaXMuc2l0ZU9iai5XRCxcclxuICAgICAgICAgICAgbXlMbmc6IHRoaXMubG9jYXRpb25bMF0sXHJcbiAgICAgICAgICAgIG15TGF0OiB0aGlzLmxvY2F0aW9uWzFdLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy4kZGlhbG9nLmFsZXJ0KHtcclxuICAgICAgICAgIG1lc3NhZ2U6IFwi6K+35LiL6L2955m+5bqm5Zyw5Zu+5oiW6ICF5L2/55So5YW25LuW5Zyw5Zu+77yBXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB3eU1hcCgpIHtcclxuICAgICAgbG9jYWxOYXZpZ2F0aW9uLnN0YXJ0KFxyXG4gICAgICAgIGZ1bmN0aW9uICgpIHt9LFxyXG4gICAgICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICBhbGVydChlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgIHR5cGU6IFwiYXV0b1wiLFxyXG4gICAgICAgICAgdG9Mbmc6IHRoaXMuc2l0ZU9iai5KRCxcclxuICAgICAgICAgIHRvTGF0OiB0aGlzLnNpdGVPYmouV0QsXHJcbiAgICAgICAgICBteUxuZzogdGhpcy5sb2NhdGlvblswXSxcclxuICAgICAgICAgIG15TGF0OiB0aGlzLmxvY2F0aW9uWzFdLFxyXG4gICAgICAgIH1cclxuICAgICAgKTtcclxuICAgIH0sXHJcbiAgICBxeCgpIHtcclxuICAgICAgdGhpcy5tYXBTaG93ID0gdHJ1ZTtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuLnNpdGVQb2ludGVySW5mbyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIGJvdHRvbTogMTJweDtcclxuICBsZWZ0OiA3cHg7XHJcbiAgcmlnaHQ6IDdweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHotaW5kZXg6IDk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgLnZhbi1idXR0b25fX3RleHQge1xyXG4gICAgZm9udC1zaXplOiAxNHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuZ290cm91bmQge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgY29sb3I6ICMxZDYzZTU7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogNnB4IDEwcHggMTBweDtcclxuICB9XHJcblxyXG4gIC5wb2ludGVyVG9wIHtcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogMCAxNnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmMGYwZjA7XHJcblxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAxKTtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgLnZhbi1pY29uIHtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIH1cclxuXHJcbiAgICAuY2xvc2Uge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAtNXB4O1xyXG4gICAgICB0b3A6IC01cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuaW5mb0NvbnRlbnQge1xyXG4gICAgbWFyZ2luOiAwIDVweDtcclxuICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoNjgsIDEyMywgMjUyLCAwLjEpIDAlLCByZ2JhKDY4LCAxMjMsIDI1MiwgMCkgMTAwJSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDY4LCAxMjMsIDI1MiwgMC40KTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xyXG5cclxuICAgIC5pbmZvQm94IHtcclxuICAgICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1dncpO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMi41dnc7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDEpO1xyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC53b3JkcyB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDYwcHgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubWFwVGFiIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y5ZjlmOTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuXHJcbiAgICAubWFwQnRuIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogNDJweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDQycHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBjb2xvcjogIzMzMzMzMztcclxuICAgICAgYmFja2dyb3VuZDogI2ZmZmZmZjtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWVlZWU7XHJcbiAgICB9XHJcblxyXG4gICAgLm1hcEJ0bjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDIwcHg7XHJcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5xeEJ0biB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA0MnB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwicG9pbnRlckluZm9cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJwb2ludGVyVG9wXCI+XHJcbiAgICAgIDxwIGNsYXNzPVwidGl0bGVcIiBAY2xpY2s9XCJ0b0RldGFpbFwiPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMv5YWs5Y+4LnBuZ1wiIHN0eWxlPVwid2lkdGg6IDE2cHg7IG1hcmdpbi1yaWdodDogN3B4XCIvPlxyXG4gICAgICAgIHt7IHNpdGVPYmouZW50ZXJwcmlzZU5hbWUgfX1cclxuICAgICAgPC9wPlxyXG4gICAgICA8dmFuLWljb24gY2xhc3M9XCJjbG9zZVwiIG5hbWU9XCJjbGVhclwiIEBjbGljaz1cIiRlbWl0KCdjbG9zZScpXCIgY29sb3I9XCIjQTZBQkIzXCIgOnNpemU9XCIyMFwiLz5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImluZm9Db250ZW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvQm94XCI+XHJcbiAgICAgICAgPHA+57uf5LiA56S+5Lya5L+h55So5Luj56CB77yaPC9wPlxyXG4gICAgICAgIDxwPnt7IHNpdGVPYmouZXF1aXBtZW50Q29kZSB9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvQm94XCI+XHJcbiAgICAgICAgPHA+5omA5bGe5Yy65Z+f77yaPC9wPlxyXG4gICAgICAgIDxwPnt7IHNpdGVPYmouZGl2aXNpb24gfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwibWFwUHVyUGxhbnRcIixcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgbm93WWVhck1vbnRoRGF5SG91cnM6IFwiXCJcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBwcm9wczoge1xyXG4gICAgICBzaXRlT2JqOiB7XHJcbiAgICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICAgIGRlZmF1bHQ6ICgpID0+IHtcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgIHNpdGVPYmooKSB7XHJcblxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgIHRoaXMuZ2V0X3ByZXNlbnRfZGF0YSgpO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgZ2V0X3ByZXNlbnRfZGF0YSgpIHtcclxuICAgICAgICBsZXQgbm93RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgbGV0IHllYXIgPSBub3dEYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgbGV0IG1vbnRoID0gbm93RGF0ZS5nZXRNb250aCgpICsgMTtcclxuICAgICAgICBsZXQgZGF5ID0gbm93RGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgICAgbGV0IGhvdXJzID0gbm93RGF0ZS5nZXRIb3VycygpO1xyXG4gICAgICAgIGlmIChob3VycyA8IDQgJiYgaG91cnMgPj0gMCkge1xyXG4gICAgICAgICAgaG91cnMgPSAwO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaG91cnMgPCA4ICYmIGhvdXJzID49IDQpIHtcclxuICAgICAgICAgIGhvdXJzID0gNDtcclxuICAgICAgICB9IGVsc2UgaWYgKGhvdXJzIDwgMTIgJiYgaG91cnMgPj0gOCkge1xyXG4gICAgICAgICAgaG91cnMgPSA4O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaG91cnMgPCAxNiAmJiBob3VycyA+PSAxMikge1xyXG4gICAgICAgICAgaG91cnMgPSAxMjtcclxuICAgICAgICB9IGVsc2UgaWYgKGhvdXJzIDwgMjAgJiYgaG91cnMgPj0gMTYpIHtcclxuICAgICAgICAgIGhvdXJzID0gMTY7XHJcbiAgICAgICAgfSBlbHNlIGlmIChob3VycyA8PSAyMyAmJiBob3VycyA+PSAyMCkge1xyXG4gICAgICAgICAgaG91cnMgPSAyMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgbW9udGggPSBtb250aCA8IDEwID8gXCIwXCIgKyBtb250aCA6IG1vbnRoO1xyXG4gICAgICAgIGRheSA9IGRheSA8IDEwID8gXCIwXCIgKyBkYXkgOiBkYXk7XHJcbiAgICAgICAgaG91cnMgPSBob3VycyA8IDEwID8gXCIwXCIgKyBob3VycyA6IGhvdXJzO1xyXG4gICAgICAgIHRoaXMubm93WWVhck1vbnRoRGF5SG91cnMgPSB5ZWFyICsgXCItXCIgKyBtb250aCArIFwiLVwiICsgZGF5ICsgXCIgXCIgKyBob3VycyArIFwiOjAwOjAwXCI7XHJcbiAgICAgIH0sXHJcbiAgICAgIHRvRGV0YWlsKCkge1xyXG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgIG5hbWU6IFwicHVyUGxhbnREZXRhaWxcIixcclxuICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgIHRpbWVUeXBlOiBcIuaXtlwiLFxyXG4gICAgICAgICAgICBtYzogdGhpcy5zaXRlT2JqLmVudGVycHJpc2VOYW1lLFxyXG4gICAgICAgICAgICBpZDogdGhpcy5zaXRlT2JqLmRhdGFJZCxcclxuICAgICAgICAgICAgdGltZTogdGhpcy5ub3dZZWFyTW9udGhEYXlIb3VycyxcclxuICAgICAgICAgICAgdHlwZTogXCLmsLTotKjlh4DljJbljoJcIixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZT5cclxuICAucG9pbnRlckluZm8ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAxMnB4O1xyXG4gICAgbGVmdDogN3B4O1xyXG4gICAgcmlnaHQ6IDdweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB6LWluZGV4OiA5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICAucG9pbnRlclRvcCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgcGFkZGluZzogMCAxNnB4O1xyXG5cclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMSk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC52YW4taWNvbiB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2xvc2Uge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogNXB4O1xyXG4gICAgICAgIHRvcDogM3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmluZm9Db250ZW50IHtcclxuICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDY4LCAxMjMsIDI1MiwgMC4xKSAwJSwgcmdiYSg2OCwgMTIzLCAyNTIsIDApIDEwMCUpO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDY4LCAxMjMsIDI1MiwgMC40KTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XHJcblxyXG4gICAgICAuaW5mb0JveCB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDV2dyk7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyLjV2dztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIC8vbGluZS1oZWlnaHQ6IDcuNXZ3O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDEpO1xyXG4gICAgICAgICAgbWFyZ2luOiA2cHggMDtcclxuXHJcbiAgICAgICAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHA6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDAuNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuaW5mb0JveDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnZ3O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaW5mb0JveDpsYXN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAydnc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZGFvaGFuZyB7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgYm90dG9tOiAyMHB4O1xyXG4gICAgICByaWdodDogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGFvaGFuZzIge1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGNvbG9yOiByZ2IoMTYwLCAxNjAsIDI1NSk7XHJcbiAgICB9XHJcblxyXG4gIH1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJwb2ludGVySW5mb1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cInBvaW50ZXJUb3BcIj5cclxuICAgICAgPHAgY2xhc3M9XCJ0aXRsZVwiIEBjbGljaz1cInRvRGV0YWlsXCI+XHJcbiAgICAgICAgPGltZyBzcmM9XCJAL2Fzc2V0cy/lhazlj7gucG5nXCIgc3R5bGU9XCJ3aWR0aDogMTZweDsgbWFyZ2luLXJpZ2h0OiA3cHhcIi8+XHJcbiAgICAgICAge3sgc2l0ZU9iai53cnltYyB9fVxyXG4gICAgICA8L3A+XHJcbiAgICAgIDx2YW4taWNvbiBjbGFzcz1cImNsb3NlXCIgbmFtZT1cImNsZWFyXCIgQGNsaWNrPVwiJGVtaXQoJ2Nsb3NlJylcIiBjb2xvcj1cIiNBNkFCQjNcIiA6c2l6ZT1cIjIwXCIvPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaW5mb0NvbnRlbnRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImluZm9Cb3hcIj5cclxuICAgICAgICA8cD7nu5/kuIDnpL7kvJrkv6HnlKjku6PnoIHvvJo8L3A+XHJcbiAgICAgICAgPHA+e3sgc2l0ZU9iai50eXNoeHlkbSB9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvQm94XCI+XHJcbiAgICAgICAgPHA+6KGM5Lia57G75Yir77yaPC9wPlxyXG4gICAgICAgIDxwPnt7IHNpdGVPYmouaHltYyB9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvQm94XCI+XHJcbiAgICAgICAgPHA+5omA5Zyo5Zyw5Z2A77yaPC9wPlxyXG4gICAgICAgIDxwPnt7IHNpdGVPYmouc3pkeiB9fTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvQm94XCI+XHJcbiAgICAgICAgPHA+5rOV5a6a5Luj6KGo5Lq677yaPC9wPlxyXG4gICAgICAgIDxwPnt7IHNpdGVPYmouZmRkYnIgfX08L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiaW5mb0JveFwiPlxyXG4gICAgICAgIDxwPuazleWumuS7o+ihqOS6uueUteivneWPt+egge+8mjwvcD5cclxuICAgICAgICA8cD5cclxuICAgICAgICAgIDxhIDpocmVmPVwiJ3RlbDonICsgc2l0ZU9iai5mZGRicmRoXCIgc3R5bGU9XCJjb2xvcjogIzQ0N2JmYzsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmVcIiA+e3sgc2l0ZU9iai5mZGRicmRoIH19PC9hPlxyXG4gICAgICAgIDwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcIm1hcFdyeVwiLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBwcm9wczoge1xyXG4gICAgICBzaXRlT2JqOiB7XHJcbiAgICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICAgIGRlZmF1bHQ6ICgpID0+IHtcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgIHNpdGVPYmooKSB7XHJcblxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICB0b0RldGFpbCgpIHtcclxuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICBuYW1lOiBcImNvbXBhbnlEZXRhaWxcIixcclxuICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLnNpdGVPYmouaWQsXHJcbiAgICAgICAgICAgIHR5cGU6ICdyZWQnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZT5cclxuICAucG9pbnRlckluZm8ge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAxMnB4O1xyXG4gICAgbGVmdDogN3B4O1xyXG4gICAgcmlnaHQ6IDdweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB6LWluZGV4OiA5O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuXHJcbiAgICAucG9pbnRlclRvcCB7XHJcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgcGFkZGluZzogMCAxNnB4O1xyXG5cclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMSk7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC52YW4taWNvbiB7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2xvc2Uge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogNXB4O1xyXG4gICAgICAgIHRvcDogM3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmluZm9Db250ZW50IHtcclxuICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDY4LCAxMjMsIDI1MiwgMC4xKSAwJSwgcmdiYSg2OCwgMTIzLCAyNTIsIDApIDEwMCUpO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDY4LCAxMjMsIDI1MiwgMC40KTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XHJcblxyXG4gICAgICAuaW5mb0JveCB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDV2dyk7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyLjV2dztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIC8vbGluZS1oZWlnaHQ6IDcuNXZ3O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDEpO1xyXG4gICAgICAgICAgbWFyZ2luOiA2cHggMDtcclxuXHJcbiAgICAgICAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHA6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDAuNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuaW5mb0JveDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnZ3O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaW5mb0JveDpsYXN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAydnc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZGFvaGFuZyB7XHJcbiAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgYm90dG9tOiAyMHB4O1xyXG4gICAgICByaWdodDogMzBweDtcclxuICAgIH1cclxuXHJcbiAgICAuZGFvaGFuZzIge1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGNvbG9yOiByZ2IoMTYwLCAxNjAsIDI1NSk7XHJcbiAgICB9XHJcbiAgfVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInBvaW50ZXJJbmZvXCI+XHJcbiAgICA8ZGl2IHYtc2hvdz1cIm1hcFNob3dcIj5cclxuICAgICAgPGRpdiB2LWlmPVwibG9hZGluZ1wiIHN0eWxlPVwiaGVpZ2h0OiAyMDBweDsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlcjsganVzdGlmeS1jb250ZW50OiBjZW50ZXJcIj5cclxuICAgICAgICA8dmFuLWxvYWRpbmcvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicG9pbnRlclRvcFwiPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJ0aXRsZVwiIEBjbGljaz1cInRvRGV0YWlsXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMv5YWs5Y+4LnBuZ1wiIHN0eWxlPVwid2lkdGg6IDE2cHg7bWFyZ2luLXJpZ2h0OiA3cHhcIj5cclxuICAgICAgICAgICAge3sgcG9pbnRPYmoucXltYyB9fVxyXG48IS0tICAgICAgICAgICAg77yI6Led5L2ge3sgcG9pbnRPYmouamwgfX1rbe+8iS0tPlxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHZhbi1pY29uIGNsYXNzPVwiY2xvc2VcIiBuYW1lPVwiY2xlYXJcIiBAY2xpY2s9XCIkZW1pdCgnY2xvc2UnKVwiIGNvbG9yPVwiI0E2QUJCM1wiIDpzaXplPVwiMjBcIi8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImluZm9Db250ZW50XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb0JveFwiPlxyXG4gICAgICAgICAgICA8cD7nu5/kuIDnpL7kvJrkv6HnlKjku6PnoIHvvJo8L3A+XHJcbiAgICAgICAgICAgIDxwPnt7IHBvaW50T2JqLnh5ZG0gfX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvQm94XCI+XHJcbiAgICAgICAgICAgIDxwPuihjOS4muexu+WIq++8mjwvcD5cclxuICAgICAgICAgICAgPHA+e3sgcG9pbnRPYmouaHlsYiB9fTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImluZm9Cb3hcIj5cclxuICAgICAgICAgICAgPHA+5omA5Zyo5Zyw5Z2A77yaPC9wPlxyXG4gICAgICAgICAgICA8cD57eyBwb2ludE9iai5zemR6IH19PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb0JveFwiPlxyXG4gICAgICAgICAgICA8cD7ms5Xlrprku6PooajkurrvvJo8L3A+XHJcbiAgICAgICAgICAgIDxwPnt7IHBvaW50T2JqLmZkZGJyIH19PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mb0JveFwiPlxyXG4gICAgICAgICAgICA8cD7ms5Xlrprku6PooajkurrnlLXor53lj7fnoIHvvJo8L3A+XHJcbiAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgIDxhIDpocmVmPVwiJ3RlbDonICsgcG9pbnRPYmouZmRkYnJkaFwiIHN0eWxlPVwiY29sb3I6ICM0NDdiZmM7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lXCI+e3tcclxuICAgICAgICAgICAgICAgIHBvaW50T2JqLmZkZGJyZGhcclxuICAgICAgICAgICAgICAgIH19PC9hPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbjwhLS0gICAgICAgIDxkaXYgY2xhc3M9XCJnb3Ryb3VuZFwiIEBjbGljaz1cIm1hcENsaWNrKClcIj7lr7zoiKrliLDov5nph4w8L2Rpdj4tLT5cclxuXHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwibWFwVGFiXCIgdi1zaG93PVwiIW1hcFNob3dcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1hcEJ0blwiIEBjbGljaz1cImdkTWFwKClcIj7pq5jlvrflnLDlm748L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1hcEJ0blwiIEBjbGljaz1cImJkTWFwKClcIj7nmb7luqblnLDlm748L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm1hcEJ0blwiIEBjbGljaz1cInd5TWFwKClcIj7oh6rliqjojrflj5blnLDlm748L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInF4QnRuXCIgQGNsaWNrPVwicXgoKVwiPuWPlua2iDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuICBpbXBvcnQge1RvYXN0fSBmcm9tIFwidmFudFwiO1xyXG4gIGltcG9ydCBjb29yZHRyYW5zZm9ybSBmcm9tIFwiY29vcmR0cmFuc2Zvcm1cIjtcclxuXHJcbiAgbGV0IG1hcEx4ID0gXCJcIjtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJtYXBXcnlPdGhlclwiLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBtYXBTaG93OiB0cnVlLFxyXG4gICAgICAgIC8vIG1hcEx4OiBcIlwiLFxyXG4gICAgICAgIHBvaW50T2JqOiB7fSxcclxuICAgICAgICBsb2NhdGlvbjogW10sXHJcbiAgICAgICAgbG9hZGluZzogZmFsc2VcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBwcm9wczoge1xyXG4gICAgICBzaXRlT2JqOiB7XHJcbiAgICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICAgIGRlZmF1bHQ6ICgpID0+IHtcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgIHNpdGVPYmo6IHtcclxuICAgICAgICBoYW5kbGVyKG5ld0QsIG9sZEQpIHtcclxuICAgICAgICAgIHRoaXMuZ2V0RGF0YSgpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWVwOiB0cnVlLFxyXG4gICAgICAgIGltbWVkaWF0ZTogdHJ1ZVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgbW91bnRlZCgpIHtcclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGhpcy5sb2NhdGUoKTtcclxuICAgICAgbG9jYWxOYXZpZ2F0aW9uLmNoZWNrKFxyXG4gICAgICAgIGZ1bmN0aW9uIChzdWNjZXNzQ2FsbGJhY2spIHtcclxuICAgICAgICAgIG1hcEx4ID0gc3VjY2Vzc0NhbGxiYWNrO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiYlwiLCBlKTtcclxuICAgICAgICB9XHJcbiAgICAgICk7XHJcbiAgICAgIGlmIChyZXN1bHQgPT09ICflrprkvY3lpLHotKUnKSB7XHJcbiAgICAgICAgVG9hc3QoXCLlrprkvY3lpLHotKVcIik7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gcmVzdWx0XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5sb2NhdGlvbiA9IHJlc3VsdFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBnZXREYXRhKCkge1xyXG4gICAgICAgIHRoaXMubG9jYXRpb24gPSBbXHJcbiAgICAgICAgICB0aGlzLnNpdGVPYmouSkQsXHJcbiAgICAgICAgICB0aGlzLnNpdGVPYmouV0RcclxuICAgICAgICBdXHJcbiAgICAgICAgdGhpcy5nZXRMaXN0KHRoaXMubG9jYXRpb24pO1xyXG4gICAgICB9LFxyXG4gICAgICB0b0RldGFpbCgpIHtcclxuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICBuYW1lOiBcImNvbXBhbnlEZXRhaWxcIixcclxuICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLnNpdGVPYmouc2l0ZUlkLFxyXG4gICAgICAgICAgICB0eXBlOiAncmVkJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBnZXRMaXN0KFtqZCwgd2RdKSB7XHJcbiAgICAgICAgbGV0IHVybCA9IFwiaHR0cDovLzEwLjIyMS4yOS40OjQ4Njg2L3dyeWdqQXBwMTMzL2luZGV4L3N1cnJvdW5kaW5nXCI7XHJcbiAgICAgICAgbGV0IHBhcmFtcyA9IHtcclxuICAgICAgICAgIGxvbmdpdHVkZTogamQsXHJcbiAgICAgICAgICBsYXRpdHVkZTogd2QsXHJcbiAgICAgICAgICBudW1iZXI6IFwiXCIsXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlXHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgdXJsLFxyXG4gICAgICAgICAgcGFyYW1zLFxyXG4gICAgICAgICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgaWYgKHJlcy5kYXRhICYmIHJlcy5kYXRhLnBhZ2UgJiYgcmVzLmRhdGEucGFnZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSByZXMuZGF0YS5wYWdlLmZpbmQoXHJcbiAgICAgICAgICAgICAgKGl0ZW0pID0+IGl0ZW0ueXl5ZC5pZCA9PT0gdGhpcy5zaXRlT2JqLnNpdGVJZFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNpdGVPYmouc2l0ZUlkLCBpdGVtKVxyXG4gICAgICAgICAgICB0aGlzLnBvaW50T2JqID0ge1xyXG4gICAgICAgICAgICAgIHF5bWM6IGl0ZW0ueXl5ZC53cnltYywgLy9cclxuICAgICAgICAgICAgICBqbDogaXRlbS5kaXN0YW5jZSwgIC8vXHJcbiAgICAgICAgICAgICAgeHlkbTogaXRlbS55eXlkLnR5c2h4eWRtLCAvL1xyXG4gICAgICAgICAgICAgIHN6ZHo6IGl0ZW0ueXl5ZC5zemR6LCAvL1xyXG4gICAgICAgICAgICAgIGZkZGJyOiBpdGVtLnl5eWQuZmRkYnIsIC8vXHJcbiAgICAgICAgICAgICAgaHlsYjogaXRlbS55eXlkLmh5bWMsIC8vXHJcbiAgICAgICAgICAgICAgZmRkYnJkaDogaXRlbS55eXlkLmx4cmRoLCAvL1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLmZpbmFsbHkoKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBtYXBDbGljaygpIHtcclxuICAgICAgICB0aGlzLm1hcFNob3cgPSBmYWxzZTtcclxuICAgICAgfSxcclxuICAgICAgbG9jYXRlKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zdWMubG9jYXRlLmxvY2F0ZShcclxuICAgICAgICAgICAgICAobG9jYXRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoW2xvY2F0aW9uLkxvbmdpdHVkZSwgbG9jYXRpb24uTGF0aXR1ZGVdKVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKCflrprkvY3lpLHotKUnKVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShjb29yZHRyYW5zZm9ybS53Z3M4NHRvZ2NqMDIoMTAyLjgyNzk3Nzg2OTMzMTQyLCAyNC44OTEwNjc3NzQzNzI3OSkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgZ2RNYXAoKSB7XHJcbiAgICAgICAgaWYgKG1hcEx4ID09IFwiYW1hcFwiIHx8IG1hcEx4ID09IFwiYW1hcGJhaWR1XCIpIHtcclxuICAgICAgICAgIGxvY2FsTmF2aWdhdGlvbi5zdGFydChcclxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgIGFsZXJ0KGUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJhbWFwXCIsXHJcbiAgICAgICAgICAgICAgdG9Mbmc6IHRoaXMuc2l0ZU9iai5KRCxcclxuICAgICAgICAgICAgICB0b0xhdDogdGhpcy5zaXRlT2JqLldELFxyXG4gICAgICAgICAgICAgIG15TG5nOiB0aGlzLmxvY2F0aW9uWzBdLFxyXG4gICAgICAgICAgICAgIG15TGF0OiB0aGlzLmxvY2F0aW9uWzFdLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLiRkaWFsb2cuYWxlcnQoe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBcIuivt+S4i+i9vemrmOW+t+WcsOWbvuaIluiAheS9v+eUqOWFtuS7luWcsOWbvu+8gVwiLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICBiZE1hcCgpIHtcclxuICAgICAgICBpZiAobWFwTHggPT0gXCJiYWlkdVwiIHx8IG1hcEx4ID09IFwiYW1hcGJhaWR1XCIpIHtcclxuICAgICAgICAgIGxvY2FsTmF2aWdhdGlvbi5zdGFydChcclxuICAgICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgIGFsZXJ0KGUpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdHlwZTogXCJiYWlkdVwiLFxyXG4gICAgICAgICAgICAgIHRvTG5nOiB0aGlzLnNpdGVPYmouSkQsXHJcbiAgICAgICAgICAgICAgdG9MYXQ6IHRoaXMuc2l0ZU9iai5XRCxcclxuICAgICAgICAgICAgICBteUxuZzogdGhpcy5sb2NhdGlvblswXSxcclxuICAgICAgICAgICAgICBteUxhdDogdGhpcy5sb2NhdGlvblsxXSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy4kZGlhbG9nLmFsZXJ0KHtcclxuICAgICAgICAgICAgbWVzc2FnZTogXCLor7fkuIvovb3nmb7luqblnLDlm77miJbogIXkvb/nlKjlhbbku5blnLDlm77vvIFcIixcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgd3lNYXAoKSB7XHJcbiAgICAgICAgbG9jYWxOYXZpZ2F0aW9uLnN0YXJ0KFxyXG4gICAgICAgICAgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KGUpO1xyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgdHlwZTogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgIHRvTG5nOiB0aGlzLnNpdGVPYmouSkQsXHJcbiAgICAgICAgICAgIHRvTGF0OiB0aGlzLnNpdGVPYmouV0QsXHJcbiAgICAgICAgICAgIG15TG5nOiB0aGlzLmxvY2F0aW9uWzBdLFxyXG4gICAgICAgICAgICBteUxhdDogdGhpcy5sb2NhdGlvblsxXSxcclxuICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG4gICAgICB9LFxyXG4gICAgICBxeCgpIHtcclxuICAgICAgICB0aGlzLm1hcFNob3cgPSB0cnVlO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG48L3NjcmlwdD5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGU+XHJcbiAgLmdvdHJvdW5kIHtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIGNvbG9yOiAjMWQ2M2U1O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmc6IDZweCAxMHB4IDEwcHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgLm1hcFRhYiB7XHJcbiAgICAvLyBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAvLyB0b3A6MjAwcHg7XHJcbiAgICAvLyBsZWZ0OiAwO1xyXG4gICAgLy8gcmlnaHQ6IDA7XHJcbiAgICAvLyB3aWR0aDogNTAlO1xyXG4gICAgLy8gbWFyZ2luOiAwIGF1dG87XHJcbiAgICAvLyBoZWlnaHQ6IDM0MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDQycHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxuXHJcbiAgICAubWFwQnRuIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmZmZmY7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlZWVlO1xyXG4gICAgfVxyXG5cclxuICAgIC5tYXBCdG46Zmlyc3QtY2hpbGQge1xyXG4gICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xyXG4gICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAucXhCdG4ge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnBvaW50ZXJJbmZvIHtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIGJvdHRvbTogMTJweDtcclxuICAgIGxlZnQ6IDdweDtcclxuICAgIHJpZ2h0OiA3cHg7XHJcbiAgICAvKndpZHRoOiAxMDAlOyovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgei1pbmRleDogOTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgLnBvaW50ZXJUb3Age1xyXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMzJweCk7XHJcbiAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIHBhZGRpbmc6IDAgMTZweDtcclxuXHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgLy93aWR0aDogY2FsYygxMDAlIC0gMjZ2dyk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDEpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudmFuLWljb24ge1xyXG4gICAgICAgIC8vd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2xvc2Uge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogNXB4O1xyXG4gICAgICAgIHRvcDogM3B4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmluZm9Db250ZW50IHtcclxuICAgICAgbWFyZ2luOiAwIDVweDtcclxuICAgICAgcGFkZGluZzogMCAxNXB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDY4LCAxMjMsIDI1MiwgMC4xKSAwJSwgcmdiYSg2OCwgMTIzLCAyNTIsIDApIDEwMCUpO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDY4LCAxMjMsIDI1MiwgMC40KTtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNmZmY7XHJcblxyXG4gICAgICAuaW5mb0JveCB7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDV2dyk7XHJcbiAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyLjV2dztcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIC8vbGluZS1oZWlnaHQ6IDcuNXZ3O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDEpO1xyXG4gICAgICAgICAgbWFyZ2luOiA2cHggMDtcclxuXHJcbiAgICAgICAgICAmOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHA6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDAuNSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuaW5mb0JveDpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMnZ3O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuaW5mb0JveDpsYXN0LWNoaWxkIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAydnc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWFwLXBvcC13cmFwcGVyXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwicG9wLXRpdGxlLXdyYXBwZXIgZnNcIiB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWZsZXhcIixcbiAgICAgICAgICAgICAgXCJhbGlnbi1pdGVtc1wiOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICB3aWR0aDogXCI2MyVcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMv57yW57uELnBuZ1wiKSxcbiAgICAgICAgICAgICAgICB3aWR0aDogXCI5XCIsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjExXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInNpdGUtbmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uc2l0ZU9iai5uYW1lKSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICAgIF92bS5zaXRlT2JqLmRhdGVUaW1lXG4gICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0aW1lXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLnNpdGVPYmouZGF0ZVRpbWUpICsgXCIgXCIpLFxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfYyhcInZhbi1pY29uXCIsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJjbG9zZVwiLFxuICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwiY2xlYXJcIiwgY29sb3I6IFwiI0E2QUJCM1wiLCBzaXplOiAyMCB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiY2xvc2VcIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LWJveFwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2l0ZS1zdGF0dVwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzaXRlLW1vbml0b3ItYm94XCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMvcXVlcnkv5rm/5bqmLnBuZ1wiKSB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiDmub/luqbvvJpcIiArIF92bS5fcyhfdm0uc2l0ZU9iai5yaHUpICsgXCIlIFwiKSxcbiAgICAgICAgXSksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2l0ZS1tb25pdG9yLWJveFwiIH0sIFtcbiAgICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL3F1ZXJ5L+mjjuWQkS5wbmdcIikgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIg6aOO5ZCR77yaXCIgKyBfdm0uX3MoX3ZtLnNpdGVPYmoud2luRGluc3QpICsgXCIgXCIpLFxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzaXRlLW1vbml0b3ItYm94XCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMvcXVlcnkv6aOO6YCfLnBuZ1wiKSB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiDpo47pgJ/vvJpcIiArIF92bS5fcyhfdm0uc2l0ZU9iai53aW5TaW5zdCkgKyBcIiBcIiksXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNpdGUtbW9uaXRvci1ib3hcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy9xdWVyeS/msJTljosucG5nXCIpIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIOawlOWOi++8mlwiICsgX3ZtLl9zKF92bS5zaXRlT2JqLnBycykgKyBcIiBcIiksXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNpdGUtbW9uaXRvci1ib3hcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy9xdWVyeS/muKnluqYucG5nXCIpIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIOa4qeW6pu+8mlwiICsgX3ZtLl9zKF92bS5zaXRlT2JqLnRlbSkgKyBcIuKEgyBcIiksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhaXJXeXJJbmZvXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwicG9pbnRlclRvcFwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIsIG9uOiB7IGNsaWNrOiBfdm0udG9EZXRhaWwgfSB9LCBbXG4gICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMTJweFwiLCBcIm1hcmdpbi1yaWdodFwiOiBcIjVweFwiIH0sXG4gICAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy/nvJbnu4QucG5nXCIpIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5zaXRlT2JqLmVudGVycHJpc2VOYW1lKSArIFwiIFwiKSxcbiAgICAgICAgXSksXG4gICAgICAgIF9jKFwidmFuLWljb25cIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlXCIsXG4gICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJjbGVhclwiLCBjb2xvcjogXCIjQTZBQkIzXCIsIHNpemU6IDIwIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJjbG9zZVwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFkZHJlc3NcIiB9LCBbXG4gICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLnNpdGVPYmouYWRkcmVzcykgKyBcIiBcIiksXG4gICAgXSksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtYXAtcG9wLXdyYXBwZXJcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJwb3AtdGl0bGUtd3JhcHBlciBmc1wiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogXCJpbmxpbmUtZmxleFwiLFxuICAgICAgICAgICAgICBcImFsaWduLWl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjczJVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy/nvJbnu4QucG5nXCIpLFxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjlcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTFcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNpdGUtbmFtZVwiLCBvbjogeyBjbGljazogX3ZtLnRvRGV0YWlsIH0gfSxcbiAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnNpdGVEYXRhLnNpdGVOYW1lKSldXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICB7IGNsYXNzOiBcImxldmVsXCIgKyBfdm0uanVkZ2VMZXZlbFJldHVybihfdm0uc2l0ZURhdGEua2luZCkgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uc2l0ZURhdGEua2luZCkgK1xuICAgICAgICAgICAgICAgICAgICBcIihcIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uc2l0ZURhdGEuYXFpKSArXG4gICAgICAgICAgICAgICAgICAgIFwiKVwiXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICAgIF92bS5zaXRlRGF0YS5tb25pdG9yaW5nVGltZVxuICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGltZVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiIFwiICsgX3ZtLl9zKF92bS5zaXRlRGF0YS5tb25pdG9yaW5nVGltZS5zdWJzdHJpbmcoMCwgMTMpKSArIFwiIFwiXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF9jKFwidmFuLWljb25cIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlXCIsXG4gICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJjbGVhclwiLCBjb2xvcjogXCIjQTZBQkIzXCIsIHNpemU6IDIwIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJjbG9zZVwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnQtYm94XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzaXRlLXN0YXR1XCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNpdGUtbW9uaXRvci1ib3hcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy9xdWVyeS/mub/luqYucG5nXCIpIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIOa5v+W6pu+8mlwiICsgX3ZtLl9zKF92bS5zaXRlRGF0YS5odW1pZGl0eSkgKyBcIiUgXCIpLFxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzaXRlLW1vbml0b3ItYm94XCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMvcXVlcnkv6aOO5ZCRLnBuZ1wiKSB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiDpo47lkJHvvJpcIiArIF92bS5fcyhfdm0uc2l0ZURhdGEud2luZERpcmVjdGlvbikgKyBcIiBcIiksXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNpdGUtbW9uaXRvci1ib3hcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy9xdWVyeS/po47pgJ8ucG5nXCIpIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIOmjjumAn++8mlwiICsgX3ZtLl9zKF92bS5zaXRlRGF0YS53aW5kU3BlZWQpICsgXCIgXCIpLFxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzaXRlLW1vbml0b3ItYm94XCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMvcXVlcnkv5rCU5Y6LLnBuZ1wiKSB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiDmsJTljovvvJpcIiArIF92bS5fcyhfdm0uc2l0ZURhdGEucHJlc3N1cmUpICsgXCIgXCIpLFxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzaXRlLW1vbml0b3ItYm94XCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMvcXVlcnkv5rip5bqmLnBuZ1wiKSB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiDmuKnluqbvvJpcIiArIF92bS5fcyhfdm0uc2l0ZURhdGEudGVtcGVyYXR1cmUpICsgXCLihIMgXCIpLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50LW1vbml0b3JcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3R5bGU6IF92bS5nZXRDb2xvcihfdm0uc2l0ZURhdGEucG0yNSwgXCJwbTI1XCIpIH0sIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnNpdGVEYXRhLnBtMjUpKV0pLFxuICAgICAgICAgIF92bS5fdihcIlBNMi41IFwiKSxcbiAgICAgICAgXSksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3R5bGU6IF92bS5nZXRDb2xvcihfdm0uc2l0ZURhdGEucG0xMCwgXCJwbTEwXCIpIH0sIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnNpdGVEYXRhLnBtMTApKV0pLFxuICAgICAgICAgIF92bS5fdihcIlBNMTAgXCIpLFxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdHlsZTogX3ZtLmdldENvbG9yKF92bS5zaXRlRGF0YS5zbzIsIFwic28yXCIpIH0sIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnNpdGVEYXRhLnNvMikpXSksXG4gICAgICAgICAgX3ZtLl92KFwiU08yIFwiKSxcbiAgICAgICAgXSksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3R5bGU6IF92bS5nZXRDb2xvcihfdm0uc2l0ZURhdGEubm8yLCBcIm5vMlwiKSB9LCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5zaXRlRGF0YS5ubzIpKV0pLFxuICAgICAgICAgIF92bS5fdihcIk5PMiBcIiksXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0eWxlOiBfdm0uZ2V0Q29sb3IoX3ZtLnNpdGVEYXRhLmNvLCBcImNvXCIpIH0sIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnNpdGVEYXRhLmNvKSldKSxcbiAgICAgICAgICBfdm0uX3YoXCJDTyBcIiksXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0eWxlOiBfdm0uZ2V0Q29sb3IoX3ZtLnNpdGVEYXRhLm96b25lLCBcIm96b25lXCIpIH0sIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnNpdGVEYXRhLm96b25lKSldKSxcbiAgICAgICAgICBfdm0uX3YoXCJPMyBcIiksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfdm0uc2l0ZU9iai50eXBlID09PSBcIndhdGVyXCJcbiAgICAgICAgPyBfYyhcIm1hcFNpdGVXYXRlclwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBzaXRlT2JqOiBfdm0uc2l0ZU9iaiB9LFxuICAgICAgICAgICAgb246IHsgY2xvc2U6IF92bS5jbG9zZVBvcCB9LFxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uc2l0ZU9iai50eXBlID09PSBcInB1clBsYW50XCJcbiAgICAgICAgPyBfYyhcIm1hcFB1clBsYW50XCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHNpdGVPYmo6IF92bS5zaXRlT2JqIH0sXG4gICAgICAgICAgICBvbjogeyBjbG9zZTogX3ZtLmNsb3NlUG9wIH0sXG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5zaXRlT2JqLnR5cGUgPT09IFwid3J5XCJcbiAgICAgICAgPyBfYyhcIm1hcFdyeVwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBzaXRlT2JqOiBfdm0uc2l0ZU9iaiB9LFxuICAgICAgICAgICAgb246IHsgY2xvc2U6IF92bS5jbG9zZVBvcCB9LFxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uc2l0ZU9iai50eXBlID09PSBcIndyeUFpclwiXG4gICAgICAgID8gX2MoXCJtYXBBaXJXcnlcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgc2l0ZU9iajogX3ZtLnNpdGVPYmogfSxcbiAgICAgICAgICAgIG9uOiB7IGNsb3NlOiBfdm0uY2xvc2VQb3AgfSxcbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLnNpdGVPYmoudHlwZSA9PT0gXCJhaXJXZWF0aGVyXCJcbiAgICAgICAgPyBfYyhcIm1hcEFpcldlYXRoZXJcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgc2l0ZU9iajogX3ZtLnNpdGVPYmogfSxcbiAgICAgICAgICAgIG9uOiB7IGNsb3NlOiBfdm0uY2xvc2VQb3AgfSxcbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5zaXRlT2JqLnR5cGUgPT09IFwiYnJhbmNoXCJcbiAgICAgICAgPyBfYyhcImJyYW5jaFNpdGVQb3BcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgc2l0ZU9iajogX3ZtLnNpdGVPYmogfSxcbiAgICAgICAgICAgIG9uOiB7IGNsb3NlOiBfdm0uY2xvc2VQb3AgfSxcbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLnNpdGVPYmoudHlwZSA9PT0gXCJ4c2dsXCJcbiAgICAgICAgPyBfYyhcInpmeHNQb3BcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgc2l0ZU9iajogX3ZtLnNpdGVPYmogfSxcbiAgICAgICAgICAgIG9uOiB7IGNsb3NlOiBfdm0uY2xvc2VQb3AgfSxcbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLnNpdGVPYmoudHlwZSA9PT0gXCJhaXJcIlxuICAgICAgICA/IF9jKFwibWFwU2l0ZUFpclwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBzaXRlT2JqOiBfdm0uc2l0ZU9iaiB9LFxuICAgICAgICAgICAgb246IHsgY2xvc2U6IF92bS5jbG9zZVBvcCB9LFxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uc2l0ZU9iai50eXBlID09PSBcIndyeU90aGVyXCJcbiAgICAgICAgPyBfYyhcIm1hcFdyeU90aGVyXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHNpdGVPYmo6IF92bS5zaXRlT2JqIH0sXG4gICAgICAgICAgICBvbjogeyBjbG9zZTogX3ZtLmNsb3NlUG9wIH0sXG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2l0ZVBvaW50ZXJJbmZvXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgIHZhbHVlOiBfdm0ubWFwU2hvdyxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwibWFwU2hvd1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicG9pbnRlclRvcFwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCIxNnB4XCIsIFwibWFyZ2luLXJpZ2h0XCI6IFwiN3B4XCIgfSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy9wb2ludC/nvJbnu4QgMi5wbmdcIikgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uc2l0ZU9iai5kd21jKSArIFwiIFwiKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX2MoXCJ2YW4taWNvblwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwiY2xlYXJcIiwgY29sb3I6IFwiI0E2QUJCM1wiLCBzaXplOiAyMCB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRlbWl0KFwiY2xvc2VcIilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mb0NvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvQm94XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiIOayn+a4oOWQjeensO+8miBcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnNpdGVPYmouZ3FtYyB8fCBcIi1cIikpXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvQm94XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiIOaJgOWxnuWMuuWfn++8miBcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnNpdGVPYmoueHpxaCB8fCBcIi1cIikpXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvQm94XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwiIOe7j+W6pu+8miBcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnNpdGVPYmouSkQgfHwgXCItXCIpKV0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mb0JveFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIiDnuqzluqbvvJogXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5zaXRlT2JqLldEIHx8IFwiLVwiKSldKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICBdXG4gICAgKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICB2YWx1ZTogIV92bS5tYXBTaG93LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIhbWFwU2hvd1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm1hcFRhYlwiLFxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYXBCdG5cIixcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nZE1hcCgpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIumrmOW+t+WcsOWbvlwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYXBCdG5cIixcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5iZE1hcCgpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIueZvuW6puWcsOWbvlwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYXBCdG5cIixcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS53eU1hcCgpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIuiHquWKqOiOt+WPluWcsOWbvlwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJxeEJ0blwiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnF4KClcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwi5Y+W5raIXCIpXVxuICAgICAgICApLFxuICAgICAgXVxuICAgICksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtYXAtcG9wLXdyYXBwZXJcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJwb3AtdGl0bGUtd3JhcHBlclwiIH0sXG4gICAgICBbXG4gICAgICAgIF92bS5zaXRlRGF0YS5zdGF0ZSA9PT0gXCLovr7moIdcIlxuICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzdGFuZGFyZFwiIH0pXG4gICAgICAgICAgOiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImV4Y2VlZFwiIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLnNpdGVEYXRhLmpjc2pQYXJhbSkgKyBcIiBcIiksXG4gICAgICAgIF9jKFwidmFuLWljb25cIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlXCIsXG4gICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJjbGVhclwiLCBjb2xvcjogXCIjQTZBQkIzXCIsIHNpemU6IDIwIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJjbG9zZVwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcIm5hbWUtd3JhcHBlciBuYW1lXCIsIG9uOiB7IGNsaWNrOiBfdm0udG9EZXRhaWwgfSB9LFxuICAgICAgW1xuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNTdHlsZTogeyBcInRleHQtZGVjb3JhdGlvblwiOiBcInVuZGVybGluZVwiIH0gfSwgW1xuICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnNpdGVEYXRhLnNpdGVOYW1lKSksXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzaXRlLXN0YXR1c1wiLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOlxuICAgICAgICAgICAgICAgIFwidXJsKFwiICtcbiAgICAgICAgICAgICAgICBfdm0uanVkZ2VMZXZlbChcbiAgICAgICAgICAgICAgICAgIF92bS5yZXBsYWNlU3RyaW5nKF92bS5zaXRlRGF0YS53YXRlclF1YWxpdHlMZXZlbClcbiAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICBcIilcIixcbiAgICAgICAgICAgICAgbWFyZ2luOiBcIjAgMTZweFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucmVwbGFjZVN0cmluZyhfdm0uc2l0ZURhdGEud2F0ZXJRdWFsaXR5TGV2ZWwpKSArXG4gICAgICAgICAgICAgICAgXCIgXCJcbiAgICAgICAgICAgICksXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICBcInRhcmdldC1sZXZlbFwiLFxuICAgICAgICAgICAgICBfdm0uanVkZ2VUYXJnZXRMZXZlbChcbiAgICAgICAgICAgICAgICBfdm0ucmVwbGFjZVN0cmluZyhfdm0uc2l0ZURhdGEud2F0ZXJRdWFsaXR5VGFyZ2V0KVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucmVwbGFjZVN0cmluZyhfdm0uc2l0ZURhdGEud2F0ZXJRdWFsaXR5VGFyZ2V0KSkgK1xuICAgICAgICAgICAgICAgIFwiIFwiXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgIF1cbiAgICApLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICBcImNvbnRlbnQtbW9uaXRvclwiLFxuICAgICAgICAgIF92bS5zaXRlRGF0YS5zdGF0ZSA9PT0gXCLovr7moIdcIiA/IFwiY29udGVudC1zdGFuZGFyZFwiIDogXCJjb250ZW50LWV4Y2VlZFwiLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX3ZtLl9sKF92bS5zaXRlRGF0YS5mYWN0b3JMaXN0LCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS5mYWN0b3JOYW1lKSArIFwiOlwiKV0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKGl0ZW0udmFsdWUpICsgXCIgXCIgKyBfdm0uX3MoaXRlbS51bml0KSArIFwiIFwiKSxcbiAgICAgICAgICBdKVxuICAgICAgICB9KSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm5vdGljZVwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJ2YW4taWNvblwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLXJpZ2h0XCI6IFwiNXB4XCIgfSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJ3YXJuaW5nXCIgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5zaXRlRGF0YS5kYXRhU291cmNlKSArIFwiIFwiKSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgIF0sXG4gICAgICAyXG4gICAgKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNpdGVQb2ludGVySW5mb1wiIH0sIFtcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICB2YWx1ZTogX3ZtLm1hcFNob3csXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcIm1hcFNob3dcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBvaW50ZXJUb3BcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMTZweFwiLCBcIm1hcmdpbi1yaWdodFwiOiBcIjdweFwiIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMvcG9pbnQv57yW57uEIDIucG5nXCIpIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCIgXCIgKyBfdm0uX3MoX3ZtLmRhdGFPYmouZGV0YWlsX2luZm8uZW50ZXJwcmlzZV9uYW1lKSArIFwiIFwiXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF9jKFwidmFuLWljb25cIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjbG9zZVwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcImNsZWFyXCIsIGNvbG9yOiBcIiNBNkFCQjNcIiwgc2l6ZTogMjAgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImNsb3NlXCIpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm9Db250ZW50XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mb0JveFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbX3ZtLl92KFwi57q/57Si57G75Z6L77yaXCIpXSksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndvcmRzXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5kYXRhT2JqLmRldGFpbF9pbmZvLmNsYXNzaWZpY2F0aW9uIHx8IFwiLVwiKSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm9Cb3hcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW192bS5fdihcIue6v+e0ouadpea6kO+8mlwiKV0pLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3b3Jkc1wiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGF0YU9iai5kZXRhaWxfaW5mby50eXBlIHx8IFwiLVwiKSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm9Cb3hcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW192bS5fdihcIue6v+e0ouaPj+i/sO+8mlwiKV0pLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3b3Jkc1wiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uZGF0YU9iai5kZXRhaWxfaW5mby5iYXNpY19pbmZvIHx8IFwiLVwiKSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm9Cb3hcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIgfSwgW192bS5fdihcIue6v+e0oueKtuaAge+8mlwiKV0pLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3b3Jkc1wiLFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBjb2xvcjpcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmRhdGFPYmouZGV0YWlsX2luZm8uc3RhdHVzID09IFwi5bey5Yqe57uTXCJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiKDc0LCAyMjcsIDEyMylcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJyZ2IoMCwgMTgyLCAyNTUpXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmRhdGFPYmouZGV0YWlsX2luZm8uc3RhdHVzIHx8IFwiLVwiKSldXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICAgIF1cbiAgICApLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgIHZhbHVlOiAhX3ZtLm1hcFNob3csXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcIiFtYXBTaG93XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwibWFwVGFiXCIsXG4gICAgICB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1hcEJ0blwiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdkTWFwKClcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwi6auY5b635Zyw5Zu+XCIpXVxuICAgICAgICApLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1hcEJ0blwiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmJkTWFwKClcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwi55m+5bqm5Zyw5Zu+XCIpXVxuICAgICAgICApLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1hcEJ0blwiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnd5TWFwKClcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwi6Ieq5Yqo6I635Y+W5Zyw5Zu+XCIpXVxuICAgICAgICApLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInF4QnRuXCIsXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucXgoKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCLlj5bmtohcIildXG4gICAgICAgICksXG4gICAgICBdXG4gICAgKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBvaW50ZXJJbmZvXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwicG9pbnRlclRvcFwiIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlXCIsIG9uOiB7IGNsaWNrOiBfdm0udG9EZXRhaWwgfSB9LCBbXG4gICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMTZweFwiLCBcIm1hcmdpbi1yaWdodFwiOiBcIjdweFwiIH0sXG4gICAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy/lhazlj7gucG5nXCIpIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5zaXRlT2JqLmVudGVycHJpc2VOYW1lKSArIFwiIFwiKSxcbiAgICAgICAgXSksXG4gICAgICAgIF9jKFwidmFuLWljb25cIiwge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNsb3NlXCIsXG4gICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJjbGVhclwiLCBjb2xvcjogXCIjQTZBQkIzXCIsIHNpemU6IDIwIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJjbG9zZVwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm9Db250ZW50XCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvQm94XCIgfSwgW1xuICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIue7n+S4gOekvuS8muS/oeeUqOS7o+egge+8mlwiKV0pLFxuICAgICAgICBfYyhcInBcIiwgW192bS5fdihfdm0uX3MoX3ZtLnNpdGVPYmouZXF1aXBtZW50Q29kZSkpXSksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mb0JveFwiIH0sIFtcbiAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCLmiYDlsZ7ljLrln5/vvJpcIildKSxcbiAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5zaXRlT2JqLmRpdmlzaW9uKSldKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicG9pbnRlckluZm9cIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJwb2ludGVyVG9wXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiwgb246IHsgY2xpY2s6IF92bS50b0RldGFpbCB9IH0sIFtcbiAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCIxNnB4XCIsIFwibWFyZ2luLXJpZ2h0XCI6IFwiN3B4XCIgfSxcbiAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL+WFrOWPuC5wbmdcIikgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLnNpdGVPYmoud3J5bWMpICsgXCIgXCIpLFxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXCJ2YW4taWNvblwiLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2xvc2VcIixcbiAgICAgICAgICBhdHRyczogeyBuYW1lOiBcImNsZWFyXCIsIGNvbG9yOiBcIiNBNkFCQjNcIiwgc2l6ZTogMjAgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF92bS4kZW1pdChcImNsb3NlXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIDFcbiAgICApLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mb0NvbnRlbnRcIiB9LCBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm9Cb3hcIiB9LCBbXG4gICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwi57uf5LiA56S+5Lya5L+h55So5Luj56CB77yaXCIpXSksXG4gICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uc2l0ZU9iai50eXNoeHlkbSkpXSksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaW5mb0JveFwiIH0sIFtcbiAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCLooYzkuJrnsbvliKvvvJpcIildKSxcbiAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5zaXRlT2JqLmh5bWMpKV0pLFxuICAgICAgXSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm9Cb3hcIiB9LCBbXG4gICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwi5omA5Zyo5Zyw5Z2A77yaXCIpXSksXG4gICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KF92bS5fcyhfdm0uc2l0ZU9iai5zemR6KSldKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvQm94XCIgfSwgW1xuICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIuazleWumuS7o+ihqOS6uu+8mlwiKV0pLFxuICAgICAgICBfYyhcInBcIiwgW192bS5fdihfdm0uX3MoX3ZtLnNpdGVPYmouZmRkYnIpKV0pLFxuICAgICAgXSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm9Cb3hcIiB9LCBbXG4gICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwi5rOV5a6a5Luj6KGo5Lq655S16K+d5Y+356CB77yaXCIpXSksXG4gICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwiIzQ0N2JmY1wiLCBcInRleHQtZGVjb3JhdGlvblwiOiBcInVuZGVybGluZVwiIH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IFwidGVsOlwiICsgX3ZtLnNpdGVPYmouZmRkYnJkaCB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5zaXRlT2JqLmZkZGJyZGgpKV1cbiAgICAgICAgICApLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgIF0pLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicG9pbnRlckluZm9cIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAge1xuICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgdmFsdWU6IF92bS5tYXBTaG93LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJtYXBTaG93XCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF92bS5sb2FkaW5nXG4gICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMjAwcHhcIixcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgXCJhbGlnbi1pdGVtc1wiOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgXCJqdXN0aWZ5LWNvbnRlbnRcIjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX2MoXCJ2YW4tbG9hZGluZ1wiKV0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBvaW50ZXJUb3BcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiLCBvbjogeyBjbGljazogX3ZtLnRvRGV0YWlsIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjE2cHhcIiwgXCJtYXJnaW4tcmlnaHRcIjogXCI3cHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMv5YWs5Y+4LnBuZ1wiKSB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0ucG9pbnRPYmoucXltYykgKyBcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcInZhbi1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2xvc2VcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJjbGVhclwiLCBjb2xvcjogXCIjQTZBQkIzXCIsIHNpemU6IDIwIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJGVtaXQoXCJjbG9zZVwiKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvQ29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm9Cb3hcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIue7n+S4gOekvuS8muS/oeeUqOS7o+egge+8mlwiKV0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5wb2ludE9iai54eWRtKSldKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm9Cb3hcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIuihjOS4muexu+WIq++8mlwiKV0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5wb2ludE9iai5oeWxiKSldKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm9Cb3hcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIuaJgOWcqOWcsOWdgO+8mlwiKV0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5wb2ludE9iai5zemR6KSldKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImluZm9Cb3hcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIuazleWumuS7o+ihqOS6uu+8mlwiKV0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5wb2ludE9iai5mZGRicikpXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbmZvQm94XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtfdm0uX3YoXCLms5Xlrprku6PooajkurrnlLXor53lj7fnoIHvvJpcIildKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM0NDdiZmNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWRlY29yYXRpb25cIjogXCJ1bmRlcmxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBcInRlbDpcIiArIF92bS5wb2ludE9iai5mZGRicmRoIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ucG9pbnRPYmouZmRkYnJkaCkpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSxcbiAgICAgIF0sXG4gICAgICAyXG4gICAgKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICB2YWx1ZTogIV92bS5tYXBTaG93LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIhbWFwU2hvd1wiLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICAgIHN0YXRpY0NsYXNzOiBcIm1hcFRhYlwiLFxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYXBCdG5cIixcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nZE1hcCgpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIumrmOW+t+WcsOWbvlwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYXBCdG5cIixcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5iZE1hcCgpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIueZvuW6puWcsOWbvlwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYXBCdG5cIixcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS53eU1hcCgpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIuiHquWKqOiOt+WPluWcsOWbvlwiKV1cbiAgICAgICAgKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJxeEJ0blwiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnF4KClcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwi5Y+W5raIXCIpXVxuICAgICAgICApLFxuICAgICAgXVxuICAgICksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IFdhbmRlcmdpcyBvbiAyMDE1LzcvOC5cbiAqIOaPkOS+m+S6hueZvuW6puWdkOagh++8iEJEMDnvvInjgIHlm73mtYvlsYDlnZDmoIfvvIjngavmmJ/lnZDmoIfvvIxHQ0owMu+8ieOAgeWSjFdHUzg05Z2Q5qCH57O75LmL6Ze055qE6L2s5o2iXG4gKi9cbi8vVU1E6a2U5rOV5Luj56CBXG4vLyBpZiB0aGUgbW9kdWxlIGhhcyBubyBkZXBlbmRlbmNpZXMsIHRoZSBhYm92ZSBwYXR0ZXJuIGNhbiBiZSBzaW1wbGlmaWVkIHRvXG4oZnVuY3Rpb24gKHJvb3QsIGZhY3RvcnkpIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIC8vIEFNRC4gUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZS5cbiAgICBkZWZpbmUoW10sIGZhY3RvcnkpO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKSB7XG4gICAgLy8gTm9kZS4gRG9lcyBub3Qgd29yayB3aXRoIHN0cmljdCBDb21tb25KUywgYnV0XG4gICAgLy8gb25seSBDb21tb25KUy1saWtlIGVudmlyb25tZW50cyB0aGF0IHN1cHBvcnQgbW9kdWxlLmV4cG9ydHMsXG4gICAgLy8gbGlrZSBOb2RlLlxuICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICB9IGVsc2Uge1xuICAgIC8vIEJyb3dzZXIgZ2xvYmFscyAocm9vdCBpcyB3aW5kb3cpXG4gICAgcm9vdC5jb29yZHRyYW5zZm9ybSA9IGZhY3RvcnkoKTtcbiAgfVxufSh0aGlzLCBmdW5jdGlvbiAoKSB7XG4gIC8v5a6a5LmJ5LiA5Lqb5bi46YePXG4gIHZhciB4X1BJID0gMy4xNDE1OTI2NTM1ODk3OTMyNCAqIDMwMDAuMCAvIDE4MC4wO1xuICB2YXIgUEkgPSAzLjE0MTU5MjY1MzU4OTc5MzIzODQ2MjY7XG4gIHZhciBhID0gNjM3ODI0NS4wO1xuICB2YXIgZWUgPSAwLjAwNjY5MzQyMTYyMjk2NTk0MzIzO1xuICAvKipcbiAgICog55m+5bqm5Z2Q5qCH57O7IChCRC0wOSkg5LiOIOeBq+aYn+WdkOagh+ezuyAoR0NKLTAyKeeahOi9rOaNolxuICAgKiDljbMg55m+5bqmIOi9rCDosLfmrYzjgIHpq5jlvrdcbiAgICogQHBhcmFtIGJkX2xvblxuICAgKiBAcGFyYW0gYmRfbGF0XG4gICAqIEByZXR1cm5zIHsqW119XG4gICAqL1xuICB2YXIgYmQwOXRvZ2NqMDIgPSBmdW5jdGlvbiBiZDA5dG9nY2owMihiZF9sb24sIGJkX2xhdCkge1xuICAgIHZhciBiZF9sb24gPSArYmRfbG9uO1xuICAgIHZhciBiZF9sYXQgPSArYmRfbGF0O1xuICAgIHZhciB4ID0gYmRfbG9uIC0gMC4wMDY1O1xuICAgIHZhciB5ID0gYmRfbGF0IC0gMC4wMDY7XG4gICAgdmFyIHogPSBNYXRoLnNxcnQoeCAqIHggKyB5ICogeSkgLSAwLjAwMDAyICogTWF0aC5zaW4oeSAqIHhfUEkpO1xuICAgIHZhciB0aGV0YSA9IE1hdGguYXRhbjIoeSwgeCkgLSAwLjAwMDAwMyAqIE1hdGguY29zKHggKiB4X1BJKTtcbiAgICB2YXIgZ2dfbG5nID0geiAqIE1hdGguY29zKHRoZXRhKTtcbiAgICB2YXIgZ2dfbGF0ID0geiAqIE1hdGguc2luKHRoZXRhKTtcbiAgICByZXR1cm4gW2dnX2xuZywgZ2dfbGF0XVxuICB9O1xuXG4gIC8qKlxuICAgKiDngavmmJ/lnZDmoIfns7sgKEdDSi0wMikg5LiO55m+5bqm5Z2Q5qCH57O7IChCRC0wOSkg55qE6L2s5o2iXG4gICAqIOWNs+iwt+atjOOAgemrmOW+tyDovawg55m+5bqmXG4gICAqIEBwYXJhbSBsbmdcbiAgICogQHBhcmFtIGxhdFxuICAgKiBAcmV0dXJucyB7KltdfVxuICAgKi9cbiAgdmFyIGdjajAydG9iZDA5ID0gZnVuY3Rpb24gZ2NqMDJ0b2JkMDkobG5nLCBsYXQpIHtcbiAgICB2YXIgbGF0ID0gK2xhdDtcbiAgICB2YXIgbG5nID0gK2xuZztcbiAgICB2YXIgeiA9IE1hdGguc3FydChsbmcgKiBsbmcgKyBsYXQgKiBsYXQpICsgMC4wMDAwMiAqIE1hdGguc2luKGxhdCAqIHhfUEkpO1xuICAgIHZhciB0aGV0YSA9IE1hdGguYXRhbjIobGF0LCBsbmcpICsgMC4wMDAwMDMgKiBNYXRoLmNvcyhsbmcgKiB4X1BJKTtcbiAgICB2YXIgYmRfbG5nID0geiAqIE1hdGguY29zKHRoZXRhKSArIDAuMDA2NTtcbiAgICB2YXIgYmRfbGF0ID0geiAqIE1hdGguc2luKHRoZXRhKSArIDAuMDA2O1xuICAgIHJldHVybiBbYmRfbG5nLCBiZF9sYXRdXG4gIH07XG5cbiAgLyoqXG4gICAqIFdHUzg06L2sR0NqMDJcbiAgICogQHBhcmFtIGxuZ1xuICAgKiBAcGFyYW0gbGF0XG4gICAqIEByZXR1cm5zIHsqW119XG4gICAqL1xuICB2YXIgd2dzODR0b2djajAyID0gZnVuY3Rpb24gd2dzODR0b2djajAyKGxuZywgbGF0KSB7XG4gICAgdmFyIGxhdCA9ICtsYXQ7XG4gICAgdmFyIGxuZyA9ICtsbmc7XG4gICAgaWYgKG91dF9vZl9jaGluYShsbmcsIGxhdCkpIHtcbiAgICAgIHJldHVybiBbbG5nLCBsYXRdXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBkbGF0ID0gdHJhbnNmb3JtbGF0KGxuZyAtIDEwNS4wLCBsYXQgLSAzNS4wKTtcbiAgICAgIHZhciBkbG5nID0gdHJhbnNmb3JtbG5nKGxuZyAtIDEwNS4wLCBsYXQgLSAzNS4wKTtcbiAgICAgIHZhciByYWRsYXQgPSBsYXQgLyAxODAuMCAqIFBJO1xuICAgICAgdmFyIG1hZ2ljID0gTWF0aC5zaW4ocmFkbGF0KTtcbiAgICAgIG1hZ2ljID0gMSAtIGVlICogbWFnaWMgKiBtYWdpYztcbiAgICAgIHZhciBzcXJ0bWFnaWMgPSBNYXRoLnNxcnQobWFnaWMpO1xuICAgICAgZGxhdCA9IChkbGF0ICogMTgwLjApIC8gKChhICogKDEgLSBlZSkpIC8gKG1hZ2ljICogc3FydG1hZ2ljKSAqIFBJKTtcbiAgICAgIGRsbmcgPSAoZGxuZyAqIDE4MC4wKSAvIChhIC8gc3FydG1hZ2ljICogTWF0aC5jb3MocmFkbGF0KSAqIFBJKTtcbiAgICAgIHZhciBtZ2xhdCA9IGxhdCArIGRsYXQ7XG4gICAgICB2YXIgbWdsbmcgPSBsbmcgKyBkbG5nO1xuICAgICAgcmV0dXJuIFttZ2xuZywgbWdsYXRdXG4gICAgfVxuICB9O1xuXG4gIC8qKlxuICAgKiBHQ0owMiDovazmjaLkuLogV0dTODRcbiAgICogQHBhcmFtIGxuZ1xuICAgKiBAcGFyYW0gbGF0XG4gICAqIEByZXR1cm5zIHsqW119XG4gICAqL1xuICB2YXIgZ2NqMDJ0b3dnczg0ID0gZnVuY3Rpb24gZ2NqMDJ0b3dnczg0KGxuZywgbGF0KSB7XG4gICAgdmFyIGxhdCA9ICtsYXQ7XG4gICAgdmFyIGxuZyA9ICtsbmc7XG4gICAgaWYgKG91dF9vZl9jaGluYShsbmcsIGxhdCkpIHtcbiAgICAgIHJldHVybiBbbG5nLCBsYXRdXG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBkbGF0ID0gdHJhbnNmb3JtbGF0KGxuZyAtIDEwNS4wLCBsYXQgLSAzNS4wKTtcbiAgICAgIHZhciBkbG5nID0gdHJhbnNmb3JtbG5nKGxuZyAtIDEwNS4wLCBsYXQgLSAzNS4wKTtcbiAgICAgIHZhciByYWRsYXQgPSBsYXQgLyAxODAuMCAqIFBJO1xuICAgICAgdmFyIG1hZ2ljID0gTWF0aC5zaW4ocmFkbGF0KTtcbiAgICAgIG1hZ2ljID0gMSAtIGVlICogbWFnaWMgKiBtYWdpYztcbiAgICAgIHZhciBzcXJ0bWFnaWMgPSBNYXRoLnNxcnQobWFnaWMpO1xuICAgICAgZGxhdCA9IChkbGF0ICogMTgwLjApIC8gKChhICogKDEgLSBlZSkpIC8gKG1hZ2ljICogc3FydG1hZ2ljKSAqIFBJKTtcbiAgICAgIGRsbmcgPSAoZGxuZyAqIDE4MC4wKSAvIChhIC8gc3FydG1hZ2ljICogTWF0aC5jb3MocmFkbGF0KSAqIFBJKTtcbiAgICAgIHZhciBtZ2xhdCA9IGxhdCArIGRsYXQ7XG4gICAgICB2YXIgbWdsbmcgPSBsbmcgKyBkbG5nO1xuICAgICAgcmV0dXJuIFtsbmcgKiAyIC0gbWdsbmcsIGxhdCAqIDIgLSBtZ2xhdF1cbiAgICB9XG4gIH07XG5cbiAgdmFyIHRyYW5zZm9ybWxhdCA9IGZ1bmN0aW9uIHRyYW5zZm9ybWxhdChsbmcsIGxhdCkge1xuICAgIHZhciBsYXQgPSArbGF0O1xuICAgIHZhciBsbmcgPSArbG5nO1xuICAgIHZhciByZXQgPSAtMTAwLjAgKyAyLjAgKiBsbmcgKyAzLjAgKiBsYXQgKyAwLjIgKiBsYXQgKiBsYXQgKyAwLjEgKiBsbmcgKiBsYXQgKyAwLjIgKiBNYXRoLnNxcnQoTWF0aC5hYnMobG5nKSk7XG4gICAgcmV0ICs9ICgyMC4wICogTWF0aC5zaW4oNi4wICogbG5nICogUEkpICsgMjAuMCAqIE1hdGguc2luKDIuMCAqIGxuZyAqIFBJKSkgKiAyLjAgLyAzLjA7XG4gICAgcmV0ICs9ICgyMC4wICogTWF0aC5zaW4obGF0ICogUEkpICsgNDAuMCAqIE1hdGguc2luKGxhdCAvIDMuMCAqIFBJKSkgKiAyLjAgLyAzLjA7XG4gICAgcmV0ICs9ICgxNjAuMCAqIE1hdGguc2luKGxhdCAvIDEyLjAgKiBQSSkgKyAzMjAgKiBNYXRoLnNpbihsYXQgKiBQSSAvIDMwLjApKSAqIDIuMCAvIDMuMDtcbiAgICByZXR1cm4gcmV0XG4gIH07XG5cbiAgdmFyIHRyYW5zZm9ybWxuZyA9IGZ1bmN0aW9uIHRyYW5zZm9ybWxuZyhsbmcsIGxhdCkge1xuICAgIHZhciBsYXQgPSArbGF0O1xuICAgIHZhciBsbmcgPSArbG5nO1xuICAgIHZhciByZXQgPSAzMDAuMCArIGxuZyArIDIuMCAqIGxhdCArIDAuMSAqIGxuZyAqIGxuZyArIDAuMSAqIGxuZyAqIGxhdCArIDAuMSAqIE1hdGguc3FydChNYXRoLmFicyhsbmcpKTtcbiAgICByZXQgKz0gKDIwLjAgKiBNYXRoLnNpbig2LjAgKiBsbmcgKiBQSSkgKyAyMC4wICogTWF0aC5zaW4oMi4wICogbG5nICogUEkpKSAqIDIuMCAvIDMuMDtcbiAgICByZXQgKz0gKDIwLjAgKiBNYXRoLnNpbihsbmcgKiBQSSkgKyA0MC4wICogTWF0aC5zaW4obG5nIC8gMy4wICogUEkpKSAqIDIuMCAvIDMuMDtcbiAgICByZXQgKz0gKDE1MC4wICogTWF0aC5zaW4obG5nIC8gMTIuMCAqIFBJKSArIDMwMC4wICogTWF0aC5zaW4obG5nIC8gMzAuMCAqIFBJKSkgKiAyLjAgLyAzLjA7XG4gICAgcmV0dXJuIHJldFxuICB9O1xuXG4gIC8qKlxuICAgKiDliKTmlq3mmK/lkKblnKjlm73lhoXvvIzkuI3lnKjlm73lhoXliJnkuI3lgZrlgY/np7tcbiAgICogQHBhcmFtIGxuZ1xuICAgKiBAcGFyYW0gbGF0XG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgdmFyIG91dF9vZl9jaGluYSA9IGZ1bmN0aW9uIG91dF9vZl9jaGluYShsbmcsIGxhdCkge1xuICAgIHZhciBsYXQgPSArbGF0O1xuICAgIHZhciBsbmcgPSArbG5nO1xuICAgIC8vIOe6rOW6pjMuODZ+NTMuNTUs57uP5bqmNzMuNjZ+MTM1LjA1IFxuICAgIHJldHVybiAhKGxuZyA+IDczLjY2ICYmIGxuZyA8IDEzNS4wNSAmJiBsYXQgPiAzLjg2ICYmIGxhdCA8IDUzLjU1KTtcbiAgfTtcblxuICByZXR1cm4ge1xuICAgIGJkMDl0b2djajAyOiBiZDA5dG9nY2owMixcbiAgICBnY2owMnRvYmQwOTogZ2NqMDJ0b2JkMDksXG4gICAgd2dzODR0b2djajAyOiB3Z3M4NHRvZ2NqMDIsXG4gICAgZ2NqMDJ0b3dnczg0OiBnY2owMnRvd2dzODRcbiAgfVxufSkpO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIG9yZGluYXJ5VG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb3JkaW5hcnktdG8tcHJpbWl0aXZlJyk7XG5cbnZhciAkVHlwZUVycm9yID0gVHlwZUVycm9yO1xuXG4vLyBgRGF0ZS5wcm90b3R5cGVbQEB0b1ByaW1pdGl2ZV0oaGludClgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1kYXRlLnByb3RvdHlwZS1AQHRvcHJpbWl0aXZlXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChoaW50KSB7XG4gIGFuT2JqZWN0KHRoaXMpO1xuICBpZiAoaGludCA9PT0gJ3N0cmluZycgfHwgaGludCA9PT0gJ2RlZmF1bHQnKSBoaW50ID0gJ3N0cmluZyc7XG4gIGVsc2UgaWYgKGhpbnQgIT09ICdudW1iZXInKSB0aHJvdyBuZXcgJFR5cGVFcnJvcignSW5jb3JyZWN0IGhpbnQnKTtcbiAgcmV0dXJuIG9yZGluYXJ5VG9QcmltaXRpdmUodGhpcywgaGludCk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbHRlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maWx0ZXI7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2ZpbHRlcicpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRmaWx0ZXIodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZyb20gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZnJvbScpO1xudmFyIGNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jaGVjay1jb3JyZWN0bmVzcy1vZi1pdGVyYXRpb24nKTtcblxudmFyIElOQ09SUkVDVF9JVEVSQVRJT04gPSAhY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uKGZ1bmN0aW9uIChpdGVyYWJsZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktZnJvbSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICBBcnJheS5mcm9tKGl0ZXJhYmxlKTtcbn0pO1xuXG4vLyBgQXJyYXkuZnJvbWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LmZyb21cbiQoeyB0YXJnZXQ6ICdBcnJheScsIHN0YXQ6IHRydWUsIGZvcmNlZDogSU5DT1JSRUNUX0lURVJBVElPTiB9LCB7XG4gIGZyb206IGZyb21cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGhhc093biA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9oYXMtb3duLXByb3BlcnR5Jyk7XG52YXIgZGVmaW5lQnVpbHRJbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZWZpbmUtYnVpbHQtaW4nKTtcbnZhciBkYXRlVG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGF0ZS10by1wcmltaXRpdmUnKTtcbnZhciB3ZWxsS25vd25TeW1ib2wgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvd2VsbC1rbm93bi1zeW1ib2wnKTtcblxudmFyIFRPX1BSSU1JVElWRSA9IHdlbGxLbm93blN5bWJvbCgndG9QcmltaXRpdmUnKTtcbnZhciBEYXRlUHJvdG90eXBlID0gRGF0ZS5wcm90b3R5cGU7XG5cbi8vIGBEYXRlLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWRhdGUucHJvdG90eXBlLUBAdG9wcmltaXRpdmVcbmlmICghaGFzT3duKERhdGVQcm90b3R5cGUsIFRPX1BSSU1JVElWRSkpIHtcbiAgZGVmaW5lQnVpbHRJbihEYXRlUHJvdG90eXBlLCBUT19QUklNSVRJVkUsIGRhdGVUb1ByaW1pdGl2ZSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIHRvSW5kZXhlZE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1pbmRleGVkLW9iamVjdCcpO1xudmFyIG5hdGl2ZUdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9vYmplY3QtZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJykuZjtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kZXNjcmlwdG9ycycpO1xuXG52YXIgRk9SQ0VEID0gIURFU0NSSVBUT1JTIHx8IGZhaWxzKGZ1bmN0aW9uICgpIHsgbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKDEpOyB9KTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1vYmplY3QuZ2V0b3ducHJvcGVydHlkZXNjcmlwdG9yXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBGT1JDRUQsIHNoYW06ICFERVNDUklQVE9SUyB9LCB7XG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpIHtcbiAgICByZXR1cm4gbmF0aXZlR2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRvSW5kZXhlZE9iamVjdChpdCksIGtleSk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVzY3JpcHRvcnMnKTtcbnZhciBvd25LZXlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL293bi1rZXlzJyk7XG52YXIgdG9JbmRleGVkT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWluZGV4ZWQtb2JqZWN0Jyk7XG52YXIgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yTW9kdWxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcblxuLy8gYE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmdldG93bnByb3BlcnR5ZGVzY3JpcHRvcnNcbiQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBzaGFtOiAhREVTQ1JJUFRPUlMgfSwge1xuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9iamVjdCkge1xuICAgIHZhciBPID0gdG9JbmRleGVkT2JqZWN0KG9iamVjdCk7XG4gICAgdmFyIGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGdldE93blByb3BlcnR5RGVzY3JpcHRvck1vZHVsZS5mO1xuICAgIHZhciBrZXlzID0gb3duS2V5cyhPKTtcbiAgICB2YXIgcmVzdWx0ID0ge307XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIga2V5LCBkZXNjcmlwdG9yO1xuICAgIHdoaWxlIChrZXlzLmxlbmd0aCA+IGluZGV4KSB7XG4gICAgICBkZXNjcmlwdG9yID0gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIGtleSA9IGtleXNbaW5kZXgrK10pO1xuICAgICAgaWYgKGRlc2NyaXB0b3IgIT09IHVuZGVmaW5lZCkgY3JlYXRlUHJvcGVydHkocmVzdWx0LCBrZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIG5hdGl2ZUtleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWtleXMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgRkFJTFNfT05fUFJJTUlUSVZFUyA9IGZhaWxzKGZ1bmN0aW9uICgpIHsgbmF0aXZlS2V5cygxKTsgfSk7XG5cbi8vIGBPYmplY3Qua2V5c2AgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW9iamVjdC5rZXlzXG4kKHsgdGFyZ2V0OiAnT2JqZWN0Jywgc3RhdDogdHJ1ZSwgZm9yY2VkOiBGQUlMU19PTl9QUklNSVRJVkVTIH0sIHtcbiAga2V5czogZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiBuYXRpdmVLZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGAgc2luY2UgaXQncyBtb3ZlZCB0byBlbnRyeSBwb2ludHNcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMucmVnZXhwLmV4ZWMnKTtcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcblxudmFyIERFTEVHQVRFU19UT19FWEVDID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZXhlY0NhbGxlZCA9IGZhbHNlO1xuICB2YXIgcmUgPSAvW2FjXS87XG4gIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7XG4gICAgZXhlY0NhbGxlZCA9IHRydWU7XG4gICAgcmV0dXJuIC8uLy5leGVjLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG4gIHJldHVybiByZS50ZXN0KCdhYmMnKSA9PT0gdHJ1ZSAmJiBleGVjQ2FsbGVkO1xufSgpO1xuXG52YXIgbmF0aXZlVGVzdCA9IC8uLy50ZXN0O1xuXG4vLyBgUmVnRXhwLnByb3RvdHlwZS50ZXN0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS50ZXN0XG4kKHsgdGFyZ2V0OiAnUmVnRXhwJywgcHJvdG86IHRydWUsIGZvcmNlZDogIURFTEVHQVRFU19UT19FWEVDIH0sIHtcbiAgdGVzdDogZnVuY3Rpb24gKFMpIHtcbiAgICB2YXIgUiA9IGFuT2JqZWN0KHRoaXMpO1xuICAgIHZhciBzdHJpbmcgPSB0b1N0cmluZyhTKTtcbiAgICB2YXIgZXhlYyA9IFIuZXhlYztcbiAgICBpZiAoIWlzQ2FsbGFibGUoZXhlYykpIHJldHVybiBjYWxsKG5hdGl2ZVRlc3QsIFIsIHN0cmluZyk7XG4gICAgdmFyIHJlc3VsdCA9IGNhbGwoZXhlYywgUiwgc3RyaW5nKTtcbiAgICBpZiAocmVzdWx0ID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgYW5PYmplY3QocmVzdWx0KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZGVmaW5lV2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sLWRlZmluZScpO1xudmFyIGRlZmluZVN5bWJvbFRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3N5bWJvbC1kZWZpbmUtdG8tcHJpbWl0aXZlJyk7XG5cbi8vIGBTeW1ib2wudG9QcmltaXRpdmVgIHdlbGwta25vd24gc3ltYm9sXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN5bWJvbC50b3ByaW1pdGl2ZVxuZGVmaW5lV2VsbEtub3duU3ltYm9sKCd0b1ByaW1pdGl2ZScpO1xuXG4vLyBgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN5bWJvbC5wcm90b3R5cGUtQEB0b3ByaW1pdGl2ZVxuZGVmaW5lU3ltYm9sVG9QcmltaXRpdmUoKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubWFwLXBvcC13cmFwcGVyW2RhdGEtdi0xM2IzMGNlMl0ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAxMnB4O1xcbiAgbGVmdDogN3B4O1xcbiAgcmlnaHQ6IDdweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB6LWluZGV4OiA5O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLm1hcC1wb3Atd3JhcHBlciAucG9wLXRpdGxlLXdyYXBwZXJbZGF0YS12LTEzYjMwY2UyXSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAxMnB4IDMwcHggMTJweCAxOHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4ubWFwLXBvcC13cmFwcGVyIC5wb3AtdGl0bGUtd3JhcHBlciAuc2l0ZS1uYW1lW2RhdGEtdi0xM2IzMGNlMl0ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWF4LXdpZHRoOiA3MCU7XFxuICBtYXJnaW4tbGVmdDogOHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4ubWFwLXBvcC13cmFwcGVyIC5wb3AtdGl0bGUtd3JhcHBlciAudGltZVtkYXRhLXYtMTNiMzBjZTJdIHtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5tYXAtcG9wLXdyYXBwZXIgLnBvcC10aXRsZS13cmFwcGVyIC5jbG9zZVtkYXRhLXYtMTNiMzBjZTJdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwcHg7XFxuICB0b3A6IDBweDtcXG59XFxuLm1hcC1wb3Atd3JhcHBlciAucG9wLXRpbWVbZGF0YS12LTEzYjMwY2UyXSB7XFxuICBtYXJnaW4tdG9wOiAxMXB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBjb2xvcjogIzk5OTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLm1hcC1wb3Atd3JhcHBlciAuY29udGVudC1ib3hbZGF0YS12LTEzYjMwY2UyXSB7XFxuICBtYXJnaW46IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM0NDdiZmM7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSg2OCwgMTIzLCAyNTIsIDAuMSkgMCUsIHJnYmEoNjgsIDEyMywgMjUyLCAwKSAyMCUpO1xcbn1cXG4ubWFwLXBvcC13cmFwcGVyIC5zaXRlLXN0YXR1W2RhdGEtdi0xM2IzMGNlMl0sIC5tYXAtcG9wLXdyYXBwZXIgLmNvbnRlbnQtbW9uaXRvcltkYXRhLXYtMTNiMzBjZTJdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi5tYXAtcG9wLXdyYXBwZXIgLnNpdGUtc3RhdHVbZGF0YS12LTEzYjMwY2UyXSB7XFxuICBtYXJnaW46IDEwcHggMDtcXG59XFxuLm1hcC1wb3Atd3JhcHBlciAuc2l0ZS1zdGF0dSAuc2l0ZS1tb25pdG9yLWJveFtkYXRhLXYtMTNiMzBjZTJdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMzMlO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjMjUzOTZmO1xcbn1cXG4ubWFwLXBvcC13cmFwcGVyIC5zaXRlLXN0YXR1IC5zaXRlLW1vbml0b3ItYm94IGltZ1tkYXRhLXYtMTNiMzBjZTJdIHtcXG4gIHdpZHRoOiAxMnB4O1xcbiAgaGVpZ2h0OiAxMnB4O1xcbn1cXG4ubWFwLXBvcC13cmFwcGVyIC5jb250ZW50LW1vbml0b3JbZGF0YS12LTEzYjMwY2UyXSB7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxufVxcbi5tYXAtcG9wLXdyYXBwZXIgLmNvbnRlbnQtbW9uaXRvciBkaXZbZGF0YS12LTEzYjMwY2UyXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHdpZHRoOiAyNyU7XFxuICBtYXJnaW46IDAgMTBweCAxMHB4IDA7XFxuICBwYWRkaW5nOiA4cHggNnB4O1xcbiAgY29sb3I6ICM3NmFhZWI7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjJmN2ZmO1xcbn1cXG4ubWFwLXBvcC13cmFwcGVyIC5jb250ZW50LW1vbml0b3IgZGl2W2RhdGEtdi0xM2IzMGNlMl06bnRoLWNoaWxkKDNuKSB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcbi5tYXAtcG9wLXdyYXBwZXIgLmNvbnRlbnQtbW9uaXRvciBzcGFuW2RhdGEtdi0xM2IzMGNlMl0ge1xcbiAgY29sb3I6ICMzMzM7XFxufVxcbi5tYXAtcG9wLXdyYXBwZXIgLmxldmVsMFtkYXRhLXYtMTNiMzBjZTJdIHtcXG4gIGNvbG9yOiAjNzhkZDg4O1xcbn1cXG4ubWFwLXBvcC13cmFwcGVyIC5sZXZlbDFbZGF0YS12LTEzYjMwY2UyXSB7XFxuICBjb2xvcjogI2Y0Y2Q0ZjtcXG59XFxuLm1hcC1wb3Atd3JhcHBlciAubGV2ZWwyW2RhdGEtdi0xM2IzMGNlMl0ge1xcbiAgY29sb3I6ICNlYTljM2E7XFxufVxcbi5tYXAtcG9wLXdyYXBwZXIgLmxldmVsM1tkYXRhLXYtMTNiMzBjZTJdIHtcXG4gIGNvbG9yOiAjY2Q3MDYwO1xcbn1cXG4ubWFwLXBvcC13cmFwcGVyIC5sZXZlbDRbZGF0YS12LTEzYjMwY2UyXSB7XFxuICBjb2xvcjogIzc3NjdjYjtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYWlyV3lySW5mbyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDEycHg7XFxuICBsZWZ0OiA3cHg7XFxuICByaWdodDogN3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHotaW5kZXg6IDk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uYWlyV3lySW5mbyAucG9pbnRlclRvcCB7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gMzJweCk7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDAgMTZweDtcXG59XFxuLmFpcld5ckluZm8gLnBvaW50ZXJUb3AgLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjMjUzOTZmO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuLmFpcld5ckluZm8gLnBvaW50ZXJUb3AgLnZhbi1pY29uIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG4uYWlyV3lySW5mbyAucG9pbnRlclRvcCAuY2xvc2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDBweDtcXG4gIHRvcDogMHB4O1xcbn1cXG4uYWlyV3lySW5mbyAuYWRkcmVzcyB7XFxuICBwYWRkaW5nLWxlZnQ6IDM1cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLm1hcC1wb3Atd3JhcHBlcltkYXRhLXYtNDg3NmUxOWJdIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMTJweDtcXG4gIGxlZnQ6IDdweDtcXG4gIHJpZ2h0OiA3cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgei1pbmRleDogOTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5tYXAtcG9wLXdyYXBwZXIgLnBvcC10aXRsZS13cmFwcGVyW2RhdGEtdi00ODc2ZTE5Yl0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMTJweCAzMHB4IDEycHggMThweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLm1hcC1wb3Atd3JhcHBlciAucG9wLXRpdGxlLXdyYXBwZXIgLnNpdGUtbmFtZVtkYXRhLXYtNDg3NmUxOWJdIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1heC13aWR0aDogNzAlO1xcbiAgbWFyZ2luLWxlZnQ6IDhweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBjb2xvcjogIzEyMTIzNjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLm1hcC1wb3Atd3JhcHBlciAucG9wLXRpdGxlLXdyYXBwZXIgLnRpbWVbZGF0YS12LTQ4NzZlMTliXSB7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4ubWFwLXBvcC13cmFwcGVyIC5wb3AtdGl0bGUtd3JhcHBlciAuY2xvc2VbZGF0YS12LTQ4NzZlMTliXSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMHB4O1xcbiAgdG9wOiAwcHg7XFxufVxcbi5tYXAtcG9wLXdyYXBwZXIgLnBvcC10aW1lW2RhdGEtdi00ODc2ZTE5Yl0ge1xcbiAgbWFyZ2luLXRvcDogMTFweDtcXG4gIG1hcmdpbi1yaWdodDogMTVweDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgY29sb3I6ICM5OTk7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5tYXAtcG9wLXdyYXBwZXIgLmNvbnRlbnQtYm94W2RhdGEtdi00ODc2ZTE5Yl0ge1xcbiAgbWFyZ2luOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjNDQ3YmZjO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoNjgsIDEyMywgMjUyLCAwLjEpIDAlLCByZ2JhKDY4LCAxMjMsIDI1MiwgMCkgMjAlKTtcXG59XFxuLm1hcC1wb3Atd3JhcHBlciAuc2l0ZS1zdGF0dVtkYXRhLXYtNDg3NmUxOWJdLCAubWFwLXBvcC13cmFwcGVyIC5jb250ZW50LW1vbml0b3JbZGF0YS12LTQ4NzZlMTliXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4ubWFwLXBvcC13cmFwcGVyIC5zaXRlLXN0YXR1W2RhdGEtdi00ODc2ZTE5Yl0ge1xcbiAgbWFyZ2luLXRvcDogMTVweDtcXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XFxufVxcbi5tYXAtcG9wLXdyYXBwZXIgLnNpdGUtc3RhdHUgLnNpdGUtbW9uaXRvci1ib3hbZGF0YS12LTQ4NzZlMTliXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDMzJTtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogIzI1Mzk2ZjtcXG59XFxuLm1hcC1wb3Atd3JhcHBlciAuc2l0ZS1zdGF0dSAuc2l0ZS1tb25pdG9yLWJveCBpbWdbZGF0YS12LTQ4NzZlMTliXSB7XFxuICB3aWR0aDogMTJweDtcXG4gIGhlaWdodDogMTJweDtcXG59XFxuLm1hcC1wb3Atd3JhcHBlciAuY29udGVudC1tb25pdG9yW2RhdGEtdi00ODc2ZTE5Yl0ge1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbn1cXG4ubWFwLXBvcC13cmFwcGVyIC5jb250ZW50LW1vbml0b3IgZGl2W2RhdGEtdi00ODc2ZTE5Yl0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB3aWR0aDogMjclO1xcbiAgbWFyZ2luOiAwIDEwcHggMTBweCAwO1xcbiAgcGFkZGluZzogOHB4IDZweDtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG4ubWFwLXBvcC13cmFwcGVyIC5jb250ZW50LW1vbml0b3IgZGl2W2RhdGEtdi00ODc2ZTE5Yl06bnRoLWNoaWxkKDNuKSB7XFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxufVxcblxcbi8qLmFpcl9ncmVlbmJnIHsqL1xcbi8qICBiYWNrZ3JvdW5kOiByZ2JhKDQsIDE5OSwgNCwgMC4wNSk7Ki9cXG4vKiAgPiBzcGFuIHsqL1xcbi8qICAgIGNvbG9yOiByZ2JhKDQsIDE5OSwgNCwgMSk7Ki9cXG4vKiAgfSovXFxuLyp9Ki9cXG4vKi5haXJfeWVsbG93X2JnIHsqL1xcbi8qICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI4LjFkZWcsIHJnYmEoMjU1LCAxOTEsIDAsIDAuMDUpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDEwMCUpOyovXFxuLyogID4gc3BhbiB7Ki9cXG4vKiAgICBjb2xvcjogcmdiYSgyNTUsIDE5MSwgMCwgMSk7Ki9cXG4vKiAgfSovXFxuLyp9Ki9cXG4vKi5haXJfb3JhbmdlYmcgeyovXFxuLyogIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjguMWRlZywgcmdiYSgyNTUsIDEyNiwgMCwgMC4wNSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMTAwJSk7Ki9cXG4vKiAgPiBzcGFuIHsqL1xcbi8qICAgIGNvbG9yOiByZ2JhKDI1NSwgMTI2LCAwLCAxKTsqL1xcbi8qICB9Ki9cXG4vKn0qL1xcbi8qLmFpcl9yZWRiZyB7Ki9cXG4vKiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyOC4xZGVnLCByZ2JhKDI1NSwgMCwgMCwgMC4wNSkgMCUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkgMTAwJSk7Ki9cXG4vKiAgPiBzcGFuIHsqL1xcbi8qICAgIGNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMSk7Ki9cXG4vKiAgfSovXFxuLyp9Ki9cXG4vKi5haXJfd2hpdGVyYmcgeyovXFxuLyogIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjguMWRlZywgcmdiYSg0LCAxOTksIDQsIDAuMDUpIDAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIDEwMCUpOyovXFxuLyogID4gc3BhbiB7Ki9cXG4vKiAgICBjb2xvcjogcmdiYSgyMDQsIDIwNCwgMjA0LCAxKTsqL1xcbi8qICB9Ki9cXG4vKn0qL1wiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNpdGVQb2ludGVySW5mb1tkYXRhLXYtMWU1OWRiZjFdIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMTJweDtcXG4gIGxlZnQ6IDdweDtcXG4gIHJpZ2h0OiA3cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgei1pbmRleDogOTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5zaXRlUG9pbnRlckluZm8gLnZhbi1idXR0b25fX3RleHRbZGF0YS12LTFlNTlkYmYxXSB7XFxuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcXG59XFxuLnNpdGVQb2ludGVySW5mbyAuZ290cm91bmRbZGF0YS12LTFlNTlkYmYxXSB7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBjb2xvcjogIzFkNjNlNTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBwYWRkaW5nOiA2cHggMTBweCAxMHB4O1xcbn1cXG4uc2l0ZVBvaW50ZXJJbmZvIC5wb2ludGVyVG9wW2RhdGEtdi0xZTU5ZGJmMV0ge1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwIDE2cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcXG59XFxuLnNpdGVQb2ludGVySW5mbyAucG9pbnRlclRvcCAudGl0bGVbZGF0YS12LTFlNTlkYmYxXSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogIzEyMTIzNjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uc2l0ZVBvaW50ZXJJbmZvIC5wb2ludGVyVG9wIC52YW4taWNvbltkYXRhLXYtMWU1OWRiZjFdIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG4uc2l0ZVBvaW50ZXJJbmZvIC5wb2ludGVyVG9wIC5jbG9zZVtkYXRhLXYtMWU1OWRiZjFdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAtNXB4O1xcbiAgdG9wOiAtNXB4O1xcbn1cXG4uc2l0ZVBvaW50ZXJJbmZvIC5pbmZvQ29udGVudFtkYXRhLXYtMWU1OWRiZjFdIHtcXG4gIG1hcmdpbjogMCA1cHg7XFxuICBwYWRkaW5nOiA1cHggMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDY4LCAxMjMsIDI1MiwgMC4xKSAwJSwgcmdiYSg2OCwgMTIzLCAyNTIsIDApIDEwMCUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg2OCwgMTIzLCAyNTIsIDAuNCk7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcXG59XFxuLnNpdGVQb2ludGVySW5mbyAuaW5mb0NvbnRlbnQgLmluZm9Cb3hbZGF0YS12LTFlNTlkYmYxXSB7XFxuICBwYWRkaW5nOiA1cHggMDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA1dncpO1xcbiAgbWFyZ2luLWxlZnQ6IDIuNXZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogIzI1Mzk2ZjtcXG59XFxuLnNpdGVQb2ludGVySW5mbyAubWFwVGFiW2RhdGEtdi0xZTU5ZGJmMV0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xcbn1cXG4uc2l0ZVBvaW50ZXJJbmZvIC5tYXBUYWIgLm1hcEJ0bltkYXRhLXYtMWU1OWRiZjFdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MnB4O1xcbiAgbGluZS1oZWlnaHQ6IDQycHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzMzMzMzMztcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZWVlZTtcXG59XFxuLnNpdGVQb2ludGVySW5mbyAubWFwVGFiIC5tYXBCdG5bZGF0YS12LTFlNTlkYmYxXTpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XFxufVxcbi5zaXRlUG9pbnRlckluZm8gLm1hcFRhYiAucXhCdG5bZGF0YS12LTFlNTlkYmYxXSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDJweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MnB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiQC9hc3NldHMvcG9wU3RhbmRhcmQucG5nXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gcmVxdWlyZShcIkAvYXNzZXRzL3BvcEV4Y2VlZC5wbmdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubWFwLXBvcC13cmFwcGVyW2RhdGEtdi0yZjNjYzJiYl0ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAxMnB4O1xcbiAgbGVmdDogN3B4O1xcbiAgcmlnaHQ6IDdweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB6LWluZGV4OiA5O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLm1hcC1wb3Atd3JhcHBlciAubmFtZVtkYXRhLXYtMmYzY2MyYmJdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgY29sb3I6ICMxMjEyMzY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLm1hcC1wb3Atd3JhcHBlciAucG9wLXRpdGxlLXdyYXBwZXJbZGF0YS12LTJmM2NjMmJiXSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiA4cHggMTdweCAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLm1hcC1wb3Atd3JhcHBlciAucG9wLXRpdGxlLXdyYXBwZXIgLnN0YW5kYXJkW2RhdGEtdi0yZjNjYzJiYl0sIC5tYXAtcG9wLXdyYXBwZXIgLnBvcC10aXRsZS13cmFwcGVyIC5leGNlZWRbZGF0YS12LTJmM2NjMmJiXSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAtNXB4O1xcbiAgdG9wOiAtMTBweDtcXG4gIHdpZHRoOiA5MnB4O1xcbiAgaGVpZ2h0OiAyNnB4O1xcbn1cXG4ubWFwLXBvcC13cmFwcGVyIC5wb3AtdGl0bGUtd3JhcHBlciAuc3RhbmRhcmRbZGF0YS12LTJmM2NjMmJiXSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAxMDAlO1xcbn1cXG4ubWFwLXBvcC13cmFwcGVyIC5wb3AtdGl0bGUtd3JhcHBlciAuZXhjZWVkW2RhdGEtdi0yZjNjYzJiYl0ge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcXG59XFxuLm1hcC1wb3Atd3JhcHBlciAucG9wLXRpdGxlLXdyYXBwZXIgLmNsb3NlW2RhdGEtdi0yZjNjYzJiYl0ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDVweDtcXG4gIHRvcDogM3B4O1xcbn1cXG4ubWFwLXBvcC13cmFwcGVyIC5uYW1lLXdyYXBwZXJbZGF0YS12LTJmM2NjMmJiXSB7XFxuICBtYXJnaW46IDExcHggN3B4O1xcbn1cXG4ubWFwLXBvcC13cmFwcGVyIC5jb250ZW50LXN0YW5kYXJkW2RhdGEtdi0yZjNjYzJiYl0ge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMCwgMTg2LCAxNzMsIDAuMSkgMCUsIHJnYmEoMCwgMTg2LCAxNzMsIDApIDEwMCUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAxODYsIDE3MywgMC4yKTtcXG59XFxuLm1hcC1wb3Atd3JhcHBlciAuY29udGVudC1leGNlZWRbZGF0YS12LTJmM2NjMmJiXSB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyNTAsIDcsIDcsIDAuMSkgMCUsIHJnYmEoMjUwLCAxMiwgMTAsIDApIDEwMCUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTAsIDcsIDcsIDAuMik7XFxufVxcbi5tYXAtcG9wLXdyYXBwZXIgLmNvbnRlbnQtbW9uaXRvcltkYXRhLXYtMmYzY2MyYmJdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBtYXJnaW46IDAgNXB4IDVweDtcXG4gIHBhZGRpbmc6IDEwcHggMTVweCA2cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcXG59XFxuLm1hcC1wb3Atd3JhcHBlciAuY29udGVudC1tb25pdG9yIGRpdltkYXRhLXYtMmYzY2MyYmJdIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nLWJvdHRvbTogNHB4O1xcbiAgY29sb3I6ICMyNTM5NmY7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi5tYXAtcG9wLXdyYXBwZXIgLmNvbnRlbnQtbW9uaXRvciAubm90aWNlW2RhdGEtdi0yZjNjYzJiYl0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiA2cHggMTJweCAwO1xcbiAgY29sb3I6ICM4Njk1QUE7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5tYXAtcG9wLXdyYXBwZXIgLmNvbnRlbnQtbW9uaXRvciAubm90aWNlIGltZ1tkYXRhLXYtMmYzY2MyYmJdIHtcXG4gIG1hcmdpbi1yaWdodDogNHB4O1xcbn1cXG4ubWFwLXBvcC13cmFwcGVyIC50YXJnZXQtbGV2ZWxbZGF0YS12LTJmM2NjMmJiXSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNpdGVQb2ludGVySW5mb1tkYXRhLXYtMWMwZmY4NWFdIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMTJweDtcXG4gIGxlZnQ6IDdweDtcXG4gIHJpZ2h0OiA3cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgei1pbmRleDogOTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5zaXRlUG9pbnRlckluZm8gLnZhbi1idXR0b25fX3RleHRbZGF0YS12LTFjMGZmODVhXSB7XFxuICBmb250LXNpemU6IDE0cHggIWltcG9ydGFudDtcXG59XFxuLnNpdGVQb2ludGVySW5mbyAuZ290cm91bmRbZGF0YS12LTFjMGZmODVhXSB7XFxuICBmb250LXNpemU6IDEzcHg7XFxuICBjb2xvcjogIzFkNjNlNTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XFxuICBwYWRkaW5nOiA2cHggMTBweCAxMHB4O1xcbn1cXG4uc2l0ZVBvaW50ZXJJbmZvIC5wb2ludGVyVG9wW2RhdGEtdi0xYzBmZjg1YV0ge1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwIDE2cHg7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2YwZjBmMDtcXG59XFxuLnNpdGVQb2ludGVySW5mbyAucG9pbnRlclRvcCAudGl0bGVbZGF0YS12LTFjMGZmODVhXSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogIzEyMTIzNjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uc2l0ZVBvaW50ZXJJbmZvIC5wb2ludGVyVG9wIC52YW4taWNvbltkYXRhLXYtMWMwZmY4NWFdIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG4uc2l0ZVBvaW50ZXJJbmZvIC5wb2ludGVyVG9wIC5jbG9zZVtkYXRhLXYtMWMwZmY4NWFdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAtNXB4O1xcbiAgdG9wOiAtNXB4O1xcbn1cXG4uc2l0ZVBvaW50ZXJJbmZvIC5pbmZvQ29udGVudFtkYXRhLXYtMWMwZmY4NWFdIHtcXG4gIG1hcmdpbjogMCA1cHg7XFxuICBwYWRkaW5nOiA1cHggMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDY4LCAxMjMsIDI1MiwgMC4xKSAwJSwgcmdiYSg2OCwgMTIzLCAyNTIsIDApIDEwMCUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg2OCwgMTIzLCAyNTIsIDAuNCk7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcXG59XFxuLnNpdGVQb2ludGVySW5mbyAuaW5mb0NvbnRlbnQgLmluZm9Cb3hbZGF0YS12LTFjMGZmODVhXSB7XFxuICBwYWRkaW5nOiA1cHggMDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA1dncpO1xcbiAgbWFyZ2luLWxlZnQ6IDIuNXZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogIzI1Mzk2ZjtcXG59XFxuLnNpdGVQb2ludGVySW5mbyAuaW5mb0NvbnRlbnQgLmluZm9Cb3ggLnRpdGxlW2RhdGEtdi0xYzBmZjg1YV0ge1xcbiAgd2lkdGg6IDYwcHg7XFxufVxcbi5zaXRlUG9pbnRlckluZm8gLmluZm9Db250ZW50IC5pbmZvQm94IC53b3Jkc1tkYXRhLXYtMWMwZmY4NWFdIHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA2MHB4KTtcXG59XFxuLnNpdGVQb2ludGVySW5mbyAubWFwVGFiW2RhdGEtdi0xYzBmZjg1YV0ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xcbn1cXG4uc2l0ZVBvaW50ZXJJbmZvIC5tYXBUYWIgLm1hcEJ0bltkYXRhLXYtMWMwZmY4NWFdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MnB4O1xcbiAgbGluZS1oZWlnaHQ6IDQycHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogIzMzMzMzMztcXG4gIGJhY2tncm91bmQ6ICNmZmZmZmY7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VlZWVlZTtcXG59XFxuLnNpdGVQb2ludGVySW5mbyAubWFwVGFiIC5tYXBCdG5bZGF0YS12LTFjMGZmODVhXTpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XFxufVxcbi5zaXRlUG9pbnRlckluZm8gLm1hcFRhYiAucXhCdG5bZGF0YS12LTFjMGZmODVhXSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDJweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MnB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucG9pbnRlckluZm8ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAxMnB4O1xcbiAgbGVmdDogN3B4O1xcbiAgcmlnaHQ6IDdweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB6LWluZGV4OiA5O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuLnBvaW50ZXJJbmZvIC5wb2ludGVyVG9wIHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAzMnB4KTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMCAxNnB4O1xcbn1cXG4ucG9pbnRlckluZm8gLnBvaW50ZXJUb3AgLnRpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuLnBvaW50ZXJJbmZvIC5wb2ludGVyVG9wIC52YW4taWNvbiB7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuLnBvaW50ZXJJbmZvIC5wb2ludGVyVG9wIC5jbG9zZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogNXB4O1xcbiAgdG9wOiAzcHg7XFxufVxcbi5wb2ludGVySW5mbyAuaW5mb0NvbnRlbnQge1xcbiAgbWFyZ2luOiAwIDVweDtcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDY4LCAxMjMsIDI1MiwgMC4xKSAwJSwgcmdiYSg2OCwgMTIzLCAyNTIsIDApIDEwMCUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg2OCwgMTIzLCAyNTIsIDAuNCk7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2ZmZjtcXG59XFxuLnBvaW50ZXJJbmZvIC5pbmZvQ29udGVudCAuaW5mb0JveCB7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gNXZ3KTtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiAyLjV2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5wb2ludGVySW5mbyAuaW5mb0NvbnRlbnQgLmluZm9Cb3ggcCB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogIzI1Mzk2ZjtcXG4gIG1hcmdpbjogNnB4IDA7XFxufVxcbi5wb2ludGVySW5mbyAuaW5mb0NvbnRlbnQgLmluZm9Cb3ggcDpudGgtY2hpbGQoMSkge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLnBvaW50ZXJJbmZvIC5pbmZvQ29udGVudCAuaW5mb0JveCBwIGEge1xcbiAgY29sb3I6ICM2NjY7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuLnBvaW50ZXJJbmZvIC5pbmZvQ29udGVudCAuaW5mb0JveCBwOmZpcnN0LWNoaWxkIHtcXG4gIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAwLjUpO1xcbn1cXG4ucG9pbnRlckluZm8gLmluZm9Db250ZW50IC5pbmZvQm94OmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi10b3A6IDJ2dztcXG59XFxuLnBvaW50ZXJJbmZvIC5pbmZvQ29udGVudCAuaW5mb0JveDpsYXN0LWNoaWxkIHtcXG4gIG1hcmdpbi1ib3R0b206IDJ2dztcXG59XFxuLnBvaW50ZXJJbmZvIC5kYW9oYW5nIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIGJvdHRvbTogMjBweDtcXG4gIHJpZ2h0OiAzMHB4O1xcbn1cXG4ucG9pbnRlckluZm8gLmRhb2hhbmcyIHtcXG4gIHdpZHRoOiAyMDBweDtcXG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDI1cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjYTBhMGZmO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5wb2ludGVySW5mbyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDEycHg7XFxuICBsZWZ0OiA3cHg7XFxuICByaWdodDogN3B4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHotaW5kZXg6IDk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4ucG9pbnRlckluZm8gLnBvaW50ZXJUb3Age1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwIDE2cHg7XFxufVxcbi5wb2ludGVySW5mbyAucG9pbnRlclRvcCAudGl0bGUge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICMxMjEyMzY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4ucG9pbnRlckluZm8gLnBvaW50ZXJUb3AgLnZhbi1pY29uIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG4ucG9pbnRlckluZm8gLnBvaW50ZXJUb3AgLmNsb3NlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1cHg7XFxuICB0b3A6IDNweDtcXG59XFxuLnBvaW50ZXJJbmZvIC5pbmZvQ29udGVudCB7XFxuICBtYXJnaW46IDAgNXB4O1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoNjgsIDEyMywgMjUyLCAwLjEpIDAlLCByZ2JhKDY4LCAxMjMsIDI1MiwgMCkgMTAwJSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDY4LCAxMjMsIDI1MiwgMC40KTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xcbn1cXG4ucG9pbnRlckluZm8gLmluZm9Db250ZW50IC5pbmZvQm94IHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA1dncpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IDIuNXZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLnBvaW50ZXJJbmZvIC5pbmZvQ29udGVudCAuaW5mb0JveCBwIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjMjUzOTZmO1xcbiAgbWFyZ2luOiA2cHggMDtcXG59XFxuLnBvaW50ZXJJbmZvIC5pbmZvQ29udGVudCAuaW5mb0JveCBwOm50aC1jaGlsZCgxKSB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4ucG9pbnRlckluZm8gLmluZm9Db250ZW50IC5pbmZvQm94IHAgYSB7XFxuICBjb2xvcjogIzY2NjtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4ucG9pbnRlckluZm8gLmluZm9Db250ZW50IC5pbmZvQm94IHA6Zmlyc3QtY2hpbGQge1xcbiAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDAuNSk7XFxufVxcbi5wb2ludGVySW5mbyAuaW5mb0NvbnRlbnQgLmluZm9Cb3g6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLXRvcDogMnZ3O1xcbn1cXG4ucG9pbnRlckluZm8gLmluZm9Db250ZW50IC5pbmZvQm94Omxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMnZ3O1xcbn1cXG4ucG9pbnRlckluZm8gLmRhb2hhbmcge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAyMHB4O1xcbiAgcmlnaHQ6IDMwcHg7XFxufVxcbi5wb2ludGVySW5mbyAuZGFvaGFuZzIge1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6ICNhMGEwZmY7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmdvdHJvdW5kIHtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGNvbG9yOiAjMWQ2M2U1O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LWFsaWduOiByaWdodDtcXG4gIHBhZGRpbmc6IDZweCAxMHB4IDEwcHg7XFxufVxcbi5tYXBUYWIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMjBweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDQycHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogIzMzMzMzMztcXG59XFxuLm1hcFRhYiAubWFwQnRuIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICMzMzMzMzM7XFxuICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZWVlZWU7XFxufVxcbi5tYXBUYWIgLm1hcEJ0bjpmaXJzdC1jaGlsZCB7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XFxufVxcbi5tYXBUYWIgLnF4QnRuIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxufVxcbi5wb2ludGVySW5mbyB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBib3R0b206IDEycHg7XFxuICBsZWZ0OiA3cHg7XFxuICByaWdodDogN3B4O1xcbiAgLyp3aWR0aDogMTAwJTsqL1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIHotaW5kZXg6IDk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4ucG9pbnRlckluZm8gLnBvaW50ZXJUb3Age1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDMycHgpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwIDE2cHg7XFxufVxcbi5wb2ludGVySW5mbyAucG9pbnRlclRvcCAudGl0bGUge1xcbiAgZm9udC1zaXplOiAxNnB4O1xcbiAgY29sb3I6ICMxMjEyMzY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4ucG9pbnRlckluZm8gLnBvaW50ZXJUb3AgLnZhbi1pY29uIHtcXG4gIGhlaWdodDogYXV0bztcXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbn1cXG4ucG9pbnRlckluZm8gLnBvaW50ZXJUb3AgLmNsb3NlIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiA1cHg7XFxuICB0b3A6IDNweDtcXG59XFxuLnBvaW50ZXJJbmZvIC5pbmZvQ29udGVudCB7XFxuICBtYXJnaW46IDAgNXB4O1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoNjgsIDEyMywgMjUyLCAwLjEpIDAlLCByZ2JhKDY4LCAxMjMsIDI1MiwgMCkgMTAwJSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDY4LCAxMjMsIDI1MiwgMC40KTtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZmZmO1xcbn1cXG4ucG9pbnRlckluZm8gLmluZm9Db250ZW50IC5pbmZvQm94IHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA1dncpO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbiAgbWFyZ2luLWxlZnQ6IDIuNXZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLnBvaW50ZXJJbmZvIC5pbmZvQ29udGVudCAuaW5mb0JveCBwIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjMjUzOTZmO1xcbiAgbWFyZ2luOiA2cHggMDtcXG59XFxuLnBvaW50ZXJJbmZvIC5pbmZvQ29udGVudCAuaW5mb0JveCBwOm50aC1jaGlsZCgxKSB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbn1cXG4ucG9pbnRlckluZm8gLmluZm9Db250ZW50IC5pbmZvQm94IHAgYSB7XFxuICBjb2xvcjogIzY2NjtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG4ucG9pbnRlckluZm8gLmluZm9Db250ZW50IC5pbmZvQm94IHA6Zmlyc3QtY2hpbGQge1xcbiAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDAuNSk7XFxufVxcbi5wb2ludGVySW5mbyAuaW5mb0NvbnRlbnQgLmluZm9Cb3g6Zmlyc3QtY2hpbGQge1xcbiAgbWFyZ2luLXRvcDogMnZ3O1xcbn1cXG4ucG9pbnRlckluZm8gLmluZm9Db250ZW50IC5pbmZvQm94Omxhc3QtY2hpbGQge1xcbiAgbWFyZ2luLWJvdHRvbTogMnZ3O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21hcEFpcldlYXRoZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTNiMzBjZTImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIzNDQwMWRhY1wiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21hcEFpcldlYXRoZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTNiMzBjZTImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tYXBBaXJXZWF0aGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTEzYjMwY2UyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21hcEFpcldyeS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3Mmc2NvcGU9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiYmIwMjU1Y2VcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tYXBBaXJXcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJnNjb3BlPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21hcEFpcldyeS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3Mmc2NvcGU9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21hcFNpdGVBaXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDg3NmUxOWImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI1OTE0ZWEwMlwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21hcFNpdGVBaXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDg3NmUxOWImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tYXBTaXRlQWlyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ4NzZlMTliJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2JyYW5jaFNpdGVQb3AudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWU1OWRiZjEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI2ZTczODhhN1wiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2JyYW5jaFNpdGVQb3AudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWU1OWRiZjEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9icmFuY2hTaXRlUG9wLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFlNTlkYmYxJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21hcFNpdGVXYXRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yZjNjYzJiYiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjY4YjYxM2IxXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWFwU2l0ZVdhdGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJmM2NjMmJiJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWFwU2l0ZVdhdGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJmM2NjMmJiJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3pmeHNQb3AudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWMwZmY4NWEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJjZWU2ZDM2OFwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3pmeHNQb3AudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWMwZmY4NWEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi96ZnhzUG9wLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTFjMGZmODVhJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21hcFB1clBsYW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZzY29wZT10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI2NzJiYjQzZVwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21hcFB1clBsYW50LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZzY29wZT10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tYXBQdXJQbGFudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3Mmc2NvcGU9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21hcFdyeS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3Mmc2NvcGU9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiN2ExMGIzOTFcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tYXBXcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJnNjb3BlPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21hcFdyeS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3Mmc2NvcGU9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21hcFdyeU90aGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZzY29wZT10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIzYzA3ZWFlZVwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21hcFdyeU90aGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZzY29wZT10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tYXBXcnlPdGhlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3Mmc2NvcGU9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xyXG5cclxuLyoqXHJcbiAqIOafpeivouW+heWKnuaVsOmHj1xyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5IYW5kQ291bnQoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9tYW5hZ2UvcXJfY2x1ZS91c2VyX2NvdW50JyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczogZGF0YVxyXG4gICAgfSlcclxufVxyXG4vL+W+heWKnuS6i+mhuS0t5b6F5Yqe5a6h5qC45YiX6KGoXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbkhhbmRDaGVja0xpc3QoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9tYW5hZ2UvcXJfY2x1ZS9hdWRpdF9saXN0JyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczogZGF0YVxyXG4gICAgfSlcclxufVxyXG4vL+e6v+e0ouivpuaDhVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2x1ZURldGFpbChkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL21hbmFnZS9xcl9jbHVlL29uZV9kZXRhaWwnLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiBkYXRhXHJcbiAgICB9KVxyXG59XHJcbi8v5oiR55qE5a6h5om55YiX6KGoXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRNaW5lQ2x1ZUxpc3QoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9tYW5hZ2UvcXJfY2x1ZS9saXN0JyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczogZGF0YVxyXG4gICAgfSlcclxufVxyXG4vLyDmtYHnqIsx77ya5YiG566h5bGA6ZW/5a6h5om5XHJcbmV4cG9ydCBjb25zdCBsZWFkZXJDaGVjayA9IChkYXRhKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvbWFuYWdlL3FyX2NsdWUvb25lX2xlYWRlcl9hcHByb3ZlJyxcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICB9KVxyXG59O1xyXG4vLyDpl63njq/vvJrliIbnrqHlsYDplb/lrqHmiblcclxuZXhwb3J0IGNvbnN0IGhibUxlYWRlckNoZWNrID0gKGRhdGEpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvcXJfY2x1ZS9vbmVfbGVhZGVyX2FwcHJvdmUnLFxyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIGRhdGE6IGRhdGFcclxuICAgIH0pXHJcbn07XHJcbi8vIOa1geeoizLvvJrliIbnrqHlsYDplb/lrqHmiblcclxuZXhwb3J0IGNvbnN0IGxlYWRlckNoZWNrVHdvID0gKGRhdGEpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9tYW5hZ2UvcXJfY2x1ZS90d29fbGVhZGVyX2FwcHJvdmUnLFxyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIGRhdGE6IGRhdGFcclxuICAgIH0pXHJcbn07XHJcbi8vIOa1geeoizLvvJrlr7nlj6PkuJrliqHpg6jpl6jlrqHmoLhcclxuZXhwb3J0IGNvbnN0IGRlcHRBcHByb3ZhbCA9IChkYXRhKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvbWFuYWdlL3FyX2NsdWUvbWFuYWdlX2RlcHRfZXhhbWluZScsXHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgfSlcclxufTtcclxuLy8g5YiG566h6aKG5a+8LS3kuIvmi4nmoYZcclxuZXhwb3J0IGNvbnN0IHF1ZXJ5TGVhZGVyTGlzdCA9ICgpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9tYW5hZ2UvcXJfY2x1ZS91c2VyX2luZm8nLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiB7fVxyXG4gICAgfSlcclxufTtcclxuLy/liIblj5Hpg6jpl6jkuIvmi4lcclxuZXhwb3J0IGNvbnN0IHF1ZXJ5RGVwYXJ0bWVudExpc3QgPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL21hbmFnZS9xcl9jbHVlL2Rpc3RyaWJ1dGlvbl9kZXB0JyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczogZGF0YVxyXG4gICAgfSlcclxufTtcclxuLy/liIblj5Hpg6jpl6gtLeS6uuWRmOS4i+aLiVxyXG5leHBvcnQgY29uc3QgcXVlcnlEZXB0UGVyc29uTGlzdCA9IChkYXRhKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvbWFuYWdlL3FyX2NsdWUvZGlzdHJpYnV0aW9uX3VzZXInLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiBkYXRhXHJcbiAgICB9KVxyXG59O1xyXG4vL+aJp+azleaUr+mYn+S6uuWRmOS4i+aLiVxyXG5leHBvcnQgY29uc3QgcXVlcnlMYXdMaXN0ID0gKCkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL21hbmFnZS9xcl9jbHVlL2RldGFjaG1lbnRfdXNlcicsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHt9XHJcbiAgICB9KVxyXG59O1xyXG4vLyDmlK/pmJ/liIblj5FcclxuZXhwb3J0IGNvbnN0IGJyb2FuY2hEaXN0cmlidXRlID0gKGRhdGEpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9tYW5hZ2UvcXJfY2x1ZS9kaXN0cmlidXRpb24nLFxyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIGRhdGE6IGRhdGFcclxuICAgIH0pXHJcbn07XHJcbi8v5L+d5a2Y546w5Zy655uR5p+l6K6w5b2VXHJcbmV4cG9ydCBjb25zdCBzYXZlQ2hlY2tSZWNvcmQgPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL21hbmFnZS9xcl9jbHVlL3JlY29yZF9leGFtaW5hdGlvbicsXHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgfSlcclxufTtcclxuLy/kuIrkvKDpmYTku7ZcclxuZXhwb3J0IGZ1bmN0aW9uIHVwbG9hZEZpbGVzKGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6IFwiL21pbmlvL3VwbG9hZFwiLFxyXG4gICAgICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBcImNvbnRlbnQtdHlwZVwiOiBcIm11bHRpcGFydC9mb3JtLWRhdGFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YTpkYXRhXHJcbiAgICB9KTtcclxufVxyXG4vL+aWsOWinuaguOWunuS/oeaBr1xyXG5leHBvcnQgY29uc3QgYWRkVmVyaWZ5ID0gKGRhdGEpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9tYW5hZ2UvcXJfY2x1ZS9jaGVja2luZycsXHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgfSlcclxufTtcclxuLy/mlK/pmJ/moLjlrp5cclxuZXhwb3J0IGNvbnN0IGJyb2FuY2hWZXJpZnkgPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL21hbmFnZS9xcl9jbHVlL3ZlcmlmeScsXHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgfSlcclxufTtcclxuLy/lip7nu5NcclxuZXhwb3J0IGNvbnN0IGZpbmlzaEZsb3cgPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL21hbmFnZS9xcl9jbHVlL2NvbXBsZXRpb24nLFxyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIGRhdGE6IGRhdGFcclxuICAgIH0pXHJcbn07XHJcbi8vIOmXreeOr++8muWIhueuoeWxgOmVv+WuoeaJuVxyXG5leHBvcnQgY29uc3QgaGJtRmluaXNoRmxvdyA9IChkYXRhKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL3FyX2NsdWUvY29tcGxldGlvbicsXHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgfSlcclxufTtcclxuLy/mlbTmlLnmg4XlhrXlj43ppohcclxuZXhwb3J0IGNvbnN0IGZlZWRCYWNrID0gKGRhdGEpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvcXJfY2x1ZS9yZWN0aWZpY2F0aW9uJyxcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICB9KVxyXG59O1xyXG5cclxuXHJcbi8v57q/57Si5YiX6KGoXHJcbmV4cG9ydCBjb25zdCBnZXRYcyA9IChkYXRhKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvbWFuYWdlL3FyX2NsdWUvY2x1ZV9saXN0JyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczogZGF0YVxyXG4gICAgfSlcclxufTtcclxuXHJcbi8v57q/57Si6K+m5oOFXHJcbmV4cG9ydCBjb25zdCB4c0RldGFpbCA9IChkYXRhKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvbWFuYWdlL3FyX2NsdWUvZGV0YWlsJyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczogZGF0YVxyXG4gICAgfSlcclxufTtcclxuIiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGF5RGF0YSgpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgICB1cmw6ICdodHRwOi8vMTE2LjUyLjYuMTE4OjE4ODk5L0tRWkxZWlcvaG9tZS9ob21lYXFpP3R5cGU9MSdcclxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzLmRhdGEpXHJcbiAgICAgICAgfSkuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICAgIHJlamVjdChlKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVhbERhdGEoKSB7XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGF4aW9zKHtcclxuICAgICAgICAgICAgdXJsOiAnaHR0cDovLzExNi41Mi42LjExODoxODg5OS9LUVpMWVpXL2hvbWUvcmVhbGRhdGE/dHlwZT0xJ1xyXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSlcclxuICAgICAgICB9KS5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgcmVqZWN0KGUpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHllYXJEYXRhKCkge1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBheGlvcyh7XHJcbiAgICAgICAgICAgIC8vIHVybDogJ2h0dHA6Ly8xMTYuNTIuNi4xMTg6MTg4OTkvS1FaTFlaVy9ob21lL2dldEtxemxaaj9pZD0nXHJcbiAgICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMC4yMjEuMjkuNDoxODg5OS9LUVpMWVpXL2hvbWUvZ2V0S3F6bFpqP2lkPSdcclxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzLmRhdGEpXHJcbiAgICAgICAgfSkuY2F0Y2goZSA9PiB7XHJcbiAgICAgICAgICAgIHJlamVjdChlKVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN0YXRpb25EYXRhKHR5cGUpIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgICAvLyB1cmw6ICdodHRwOi8vMTE2LjUyLjYuMTE4OjE4ODk5L0tRWkxZWlcvaG9tZS9yZWFsZGF0YT90eXBlPScgKyB0eXBlXHJcbiAgICAgICAgICAgIHVybDogJ2h0dHA6Ly8xMC4yMjEuMjkuNDoxODg5OS9LUVpMWVpXL2hvbWUvcmVhbGRhdGE/dHlwZT0nICsgdHlwZVxyXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZShyZXMuZGF0YSlcclxuICAgICAgICB9KS5jYXRjaChlID0+IHtcclxuICAgICAgICAgICAgcmVqZWN0KGUpXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQklBQUFBVUNBWUFBQUNBbDIxS0FBQUFBWE5TUjBJQXJzNGM2UUFBQUVSbFdFbG1UVTBBS2dBQUFBZ0FBWWRwQUFRQUFBQUJBQUFBR2dBQUFBQUFBNkFCQUFNQUFBQUJBQUVBQUtBQ0FBUUFBQUFCQUFBQUVxQURBQVFBQUFBQkFBQUFGQUFBQUFBVjZVZjFBQUFDVjBsRVFWUTRFWlZVVFdnVFVSQ2VlY25XTnUxYTJ1NlcycDRxS1A0VUZNUkxndUpGaXlMMVpCQVJpbWtSOVNLS2VGRWhJaWlJQjM5dW1zUS9lcWxYQmFzaUxTWGlRUkVWRWFvZ1NDMlNyZFpHVFNVL084N2JzTXZtSmJYdE83dzM3NXR2dnAyZG1WMEVaYzBPOTdibXM3OWpnTENMQU5ZaVVDc1J6Q0RnQkNFOENna3QxWFJ3OUpzU3huVGZzcExoRXdBWUp5TGRCMWVhQ0hNSTRwS2hyemlQMGZzbDEra0lFY1hGZFBMSlBRTGE3em9XUEJGR1RMMnJqOFh5a2l2a1p0MTZmR0ZKSWpLSW9OZktUdDJRcGx6NFBiVmxuVzNiYjFnb1dJYVd0cU1JYkROajQyUEJFdG1IV2I1S1JPdllDSTJiajBDd1pTVVVaNzlBN3RWTnlFKytxSDRLMlVjWkhCUElLYXJlWU5zcWFONTVGYlQySGtBdEJKcXhCcGJ2dUF4YXh3YVZLbDl4dXdRRnQ3Ukw5VGFzandLS3lpUVJFUnA2OXFsVTFxRVdlbmxJazhYT3FWNFJNbFhJdVl2RzlscDREaloxbGdRUDNBZlZXN0RlcTVCekwyYXFjYzcwSFdMY0ZrU1lWcVBtM2c1QmNlWnpCVno2TlFWL1hxY3FNSGxCd3FmTytmUHUxdTVDdnZpSlB3ZG5wanhtb0E3cVYrOTJ1bGJpcnYyZGVBQlVxS3dDZnpaRlVhOTF0eDBZblhRbU81T0lESFA1OTNvaWl6VDR0WkxtUUhwUTBwMHNoTGJzT0RjbHU4ajRNZzBoVTZjM25YSmpIQ0dqLzlsWFR1MllDeTUwTXRkR0NzU2FveU0vWEs1WEYyUGcrVzFPOVlycitOK0pBcytZZytNUC9SeFBTSUtHM25tU3hZYjhCTlhtZWJsbXhOSVhxM0EvSVA4dkxOYlBUYjNqeHowYjhUcG5Yck1FVHRjOG9zK3dFcEZ6UENSbitlL0lTUUx4ZHJwV0pyNlErVTByR2VuTEpNSWZwMVBoUGZPenlwNS9IZUt5S2xaZUlnSUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFMZ0FBQUEwQ0FZQUFBQTVRZkprQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBVmpTVVJCVkhpYzdaMVJidU1nRUlhSEtxZkphL3krNlIwcTFTZlkzcUpwZTR2bUJGMHBkNmozdlhuTmRkZ0hMOGxrd21EQVlDQ2FUNnJVWWh1VDVQZlBNRUNxSUJMZGQ5dnhGNzFEeGR2WStnUmhCZ01vOWE2K2ZnWjZZQlZhays2N045RDZGMmk5VGRFeVFVakFGclFHQUJqb0FXK0IveGYyN245RmdsQVhTdjIxRlU4S1hQZmRGclQrRm1FTGxUUFlDcFhyaXJOckMwSzlET3JQOFpFNytNQWRFSEVMMWFQVW8wdmNBSXlEaTdpRnluRzZOdWJHd1VYY1F0VW85ZTRyYmdEaTRDSnVvV0xZWExlTDZ5eUtpRnVva1ZIWWJ6R1hua01VM1hkUkZRaENSZ1pRNmpGVzNBRFl3WE81OTNvei9oZ08reXkzRWU2TUdhNk5XUUdjWSsvWmJicmg2ZmY0ZzFsdkFFNUhFYnJBRVJWcmM0d09ydld2RkpXZFdXOEFYai81WThiUlJlUUNKcEZyWDFVSkFLQ2ZOMm5zZTcwWkhSdUhKRk1jOXVXRmJ0cHQ0K1BsOXR4UVRrZDd1ZTI5T3V6NTgrK1hwSzZOV1NVSlQyS0ViVEJoVEVtaEcwSDV0RC9tZGZZZGYxOHVoTU4vYzcxaHpEMXJJNE5yWTRLWHk5NWdpN1BuMUxPazBPa0FtRUlGZU5qSFBjU3UrNmM0aDlKR0Q1RE50VEdyV2ZGM0tuSFRPay9IWlQ0a1YyaGlqdFB4Z3N2dFQ4ZmI4dERYa2VKMTF5N3d6SzZObWVmZ0tkMnNCREh0TnpINTE4OTF1ZWw1YURrVjIxU0lRM3VNR3NZbzZWakV0VEVyU0wzTnpPWmlISWU5M1VGcEhKcVRLVWUyL1c1cnM2OElwM284M0k3YW5UaUVCVjBiTXo4R3A1Z3N3T3VuVytnZkw1ZUhvVlJQZ0RNazFIa0IrSXdHRmFrUjk5VHJhTDNIaTJOeDE4YWtGL2pUNzFFNGh6MC8ramZDaWMyOHBBQS9XRndiOERsbVhPQnliNTllQU1meTlQM0J2UUIzTDErV0dzZTQ4VjdXbW92MEFqY0ROeE03MGc4SmY4aXBCNmdoK0tUZWJCa1VsM3ZiamxHUm1ZZkdsUnNIR05OOE1lbEJRK2swNGJpR1pDamJpQndDQjdoa1Fvd29iR3RSU29vN0Z1cUs5R0hGeDdqd0J2Y0kxUEh4MysyR004VmRHNU5INEFEMlVBV0hKaVVGdnQ3WUI0V3U4TVAwUnJhc0NBRHYxQ0VaRUNONlV4ZTkxalplc1lVaXBVS1RRZ05KRi9rRVRrTVZBTDZiWHhwZkFkQkZZYUh0cGdMbEhnYnUzajRwUnJxVW9CeERiZUlHeUNsd2dPdFFCWmZWQUJXTFRYUzVuSEFxbFdydWk5OHIxelgwdlBLRHkycGdkOVVuQTcvNUpiTW1VM0Rwd0s4ZlB1WDU4VElPNXZvdTNFbW5aanhOVDRmRE9kczF0dlBLc0sxeDAweGVCd2U0RGtscWNXK0E4QW1WcVJTZ0RkOTQzWlM1QnBrdHVMTFdPOTEzVUZPb01zL0JRMmJ2UXNTZGUycWFjMEtPWEErQUw5d2lyeHBGci9WT1AyOTBMVzQrejhGVDU3U1gydW5qSzNDY1M3YmxwRVB5MUNFckIyMlRRSzFSaVp2UEQxSHdvQ1pXNUViWUlldFk1bURMUDhlRUJDR3U3OHAvMC9OOUg4QWFIUnd6dXZtdVpQcHduc0RwR202VEsvWVZPaFgyVW12Q3FWaEMydXNMZDI1b3VUbFc2K0RjaDRKdUhpOXdPbmcwa3hxK1FzY2lwdWNha2VjZ1JDZ3B2dzFnYXBhU2E5ZlVPcGRXaEYvSXplTUZidHRxOWZwNWNXVk82QzVoMC9wemlOeFhFTEZieFRBNGhzY2hpbTE5enVsNFNUWGE3dHVLa0tkWTJNM2pCTzdLWjJPaG02bDZ1bjdEUnp4R0JMa0huWDIzYkJyVE5hSEU3UWl5dmRjdGI0SzR1SG4yQlZueEFnK2hwc0VRbmZVRHVGMXZBakRmTWVsck51N3NVeSs5MW1ZR2RHbHRpMmo5cmZzdWE4aWlvcjR5d3BhRm9LSTNHeG80Yk9FSmR2dFdQelFmUWpJaUxXWlB3c20yS1NKTzREYndkRGFPSjEzZ1hUVDN0ZmRRaUNIREFEVGRXaFFzYUYraDR0MHRJbTVoak0yL3ovK2lNZ0hwSEJ3Z2JnMzBraHVNaFhaSTVPWnBCUzRJS1VrZ2NoRzRVRDhwdmdCZkVLcGxuQng2aTdsVUhGeG9pMEEzRndjWDJpTFF6Y1hCaFhieGNITnhjS0ZkUE54Y0hGeTRENWlGVytMZ3duM0EvSmZBQndBWWxtMkpJR1JBcWIrMjRnZFE2aDFFNUVMYkRNQm8rQis5NWU3VjdGRmY3Z0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBTGdBQUFBMENBWUFBQUE1UWZKa0FBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQVoxU1VSQlZIaWM3WjB4Y3FNOEZNZWZuTDBBR2ZzQ2RoUDNhWGVNaTJUNzdIem5BYzZ6NC9UWkZKRW5iWHFuSVJlQU1TZlk4QlZFdGl3a2tFQUNrWG0vTGdhRVNQNzY2NzBuNFJEb3l2T2ZFQUFBeXF2by9HRVpkbTRQUVRwREtKQi9DZHo5UjhValA0emJldHJGUU1nR1NpYm1zbWZuRUtRdlpRamxGUUFBRlkvb0MveHBGd09CTDdkR1VTT2VVWlo3MmNmdEFuLytFMEk1ZTdIZUlRU3h5ZXlUeWo0bWpSZGR1RGFDK0FpaGNQK3dWUjJkS2E5RGNTTytRejYzVGVJR1VEazRpaHZ4bW1iWDVxazdPSW9iOFprU0VsMXhBNGdPanVKR3ZFVmQ2Mjdpc29xQzRrWjhwSVFFZmozRVhTNDloeWhQdTA0TklJZzdDQVh5dVlWZnYrT3VMWndkM0pGN2g4RUN3dXY1NmVjNFBiaTREZkxkNk9IYVBKWEFIYmwzdkZwRHRGeGZmTFlKNXJBdmNoUTZvdUFyMXI0M2k3VlZWQUluWkdOeitUME1GdkJ5KzFONUxBd1dBSUJ1amdoWWNtMmVxb3J5ZDJkRjNXR3dnR2gxY3hLd0RzbkhZVlNoeS9wS2k2enhtbmkxaGswd3IzMmVwTyt0MTdhMVk5ckc5NkJiaFVTSEh6YkNreTdDWmtUTEtvd1pTK2l5bVlZOFA3WmVKM3ZXYmZGcWRHOTZ6R3NoM1A0NnZ4QjQwMnpZaE00emVJRUQxK1pSTDlWckVxL1c4SEw3czVPNGVhTGxHc3E3QjRoWDYvYVRMU0p6eTZabkNZTkZUWlFBMVV4a0NwOTg5emxIWkJvelFQOEtpUTZ6S3Y3dWhpeUo3RXUwWFBjZUxDWWs2WHU5RDZzYjVma3F3ZG1hZmVneDc5M0d2dWpmaGxQWWFxU0RrRVRFL0lVSERsa2NPalZva1NuZFZ4WWpxd2FmS293UUswYXErSjBSclc0Z2dtcUFKZWs3eE9tNE9ZcGQ3RlpJZFBoaCt6VXpXbVRhRHB4OEhLUXpRSGc5SDJTYVpmMVV1ZVltbUdzL2krbzgwVTNiWmp5K0hkT1kzbXNjeDlvcWVqbTRqQ1I5aDIzeDJocVhiOTllZ1JhWmtZaHMwNVM4a2VkSDYvMGE2em5IWlhqWDVyRXU4R2gxQS9RdGd5UjloL0JXL2dkTlBnNUFpd3ppMWJEeHRpNXM5dUJERjkyQlNJdnN3clg1MllFUGgrZ3hydzB3L243MG1QZEt1T2t4OXlEWjFOL1c2Z3JyQWcrREJjU3JOY1RwUVJxQzBDSTd4WlMyRTFRVHdtQ2hES2VZUVBuWXQ3eDcwRzY3S1dabUEyVVR5TVhIZmlkeCt0aXBQSGp1dzhobFF2STVTQkxaUnU4eW9ReFdDWW5UUTgxRldOVmk2SEtnQ0MweTJMN3B4YmdtZlcxemVYWmNWdW5nazA4Zlp6WTlDSVg3MzhRSGNRTTRjSENHTEZUaFE1TXgzZHNVVlYrVlNmTFg3R0RLdnNndnJoV3JPN0l3U1F5SkFPeVVHanN4VWlMWmhET0JpNkVLUURWMXF4Wkt4a0Rsa3J4QVZPNmRmQnkrVmlMMTc4ZmEwaEUvTGJMYWViS2NSWGNXY2craHZva2J3S0hBQVNybm84ZkxPbkRUSXNyUXFCWnRkQVRJQnF1cTNhWTI5a1hlV0FzLzVRRGM0S0pIOVRYaWVlTW5sLzdnVk9BQTUxQUZRTzVBUHFNS3BVNlZrQytYRlo5Slp3Rk1GbXFJeC9sNzArT3I5QnJaZWVOUWh2QzBpMTB2dlp2aUpNbmtPWVVxSHNiZE1pSHF1bmNUcWtITW5sOFdJNHV1THM0dWszQmxBcEZ2YjRiMUVyaHNINGNNdG1OUWx6R1hwdm1FVFdkVGxXcmZoODJaS3ZtUWgwTmU3amtoRU1IZlhlbUwwSHNKbkMxY2RObEpwMnB2eUtTcFNZU3E1RkljZkxvVkN4M0I4MXNIZkp2dGpQSEV6WHVIS0N5SjdDTnlKbXgvS2dKNjdnMmdEaDNFWkpxRkhMVElwTWt0UDFCcTRja3hiNzNHU3p4dzgxNUpKb3VyMmNzS2NYb3dpclZwa1ozZVlHR3grbEF2UDdUdCtaWU5OcFdZVFFhbUtxeG9pckZWZzJJeVZHNE9ZeVNnblFYT1orL1JzdG9DeW0vdmJCTTZMMkx4M0dpNWRpOXdoV0NxZk9IY1I0Q3pVL2FKcS9rRVVwYmNxdHBtZlZBbHhKT3BTbFZ1SGxXTFFjTUp2YlBBYTFOd3NJRHdkbkZ5WlpYUW00VE53eGFKWEtFenk1d0hjTGQ3OE0vYUZGK3pjaU9iQ1dSN1VDWWo1RFlHZHZOT0FtK3FaL05DMzc2OVZ2dFJoQjExT3U4Wm5qY2QyUmU1N040dTNGQVdJOHRDRVJhMnlQcEFqN20wWDdZUysxRmdiajdBaHF4T0FqZk44SDJxNFo2Y2xPc1QvOVlOcTU3WWVGdUp2d2R6WjkwdHR6eXlBY2tQZko5K3YwYVVzeGQ0MmprTldVaVhyNHdRLzBqaDlid21ldlpDZ3dwWmVNTDJkd0JNK0krbWdjbFhWWFQ1V292cDRlNXJJem9KWEFiL0JvOXVQWnZmWXozMjk2TWdIdUFnQWJXMlZNOExXbmVGazkvVGdlSkdxdGo4OGVYMEx5cXROR25Kd1FIT1g3UnBJdGF1ZTZlUmI0NGxON2NxY0FTeGlnV1JvOEFSLytraGRPZmJaUkdrTnowMmJxR0RJOVBDME0zUndaRnBZZWptNk9ESWRORndjM1J3Wkxwb3VEazZPUEk5VUd6Y1FnZEh2Z2ZsbGZTL0JNNEFDQjI0S3doaW43TGN5ejZlQWZtWG9NaVJhVU1vekQ2cDdNai9DbXA5aEg2d2hxRUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCa0FBQUFYQ0FZQUFBRCs0K1FUQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBSUhTVVJCVkVpSnJWWExrYU13Rk93bk93UDdhcDhNS1F4d3NaekpaSUF5TUdTZ2lXQkRzZWJDRUlPSHcxYjU3QlQ4OW9BZW94RUdlMmUzcTZnQ0lYVy92d2dQa0JhbUFnQm0zZ1BRZnRrQkFCRzkzMjV3WFd2ZEhBZk5rVFB6TVZvT3lYUzR6a3oxbE5oSVpKY1pUY1NuWVFOUmZXNXNGZjRQeVNKajNPZkgyMkZXSkJRUWNyOTJqQ3dmR1JDSWpZUUdrVkNBbVE1ZGExMlNsNmVBM0JIUnUrd1BjeVJpSWhSN3YveXlxbmM1RmlDaWVpNjVRcHprNWY3YzJFTmFHRER6TVMwTVFpSHNNcU9Udk9SZFpqUUFKSGw1U3ZLU3BiSWVJUzFNbGVRbGU4T0diL20vQUlEVjV1VVhnTjlkKzFaNzR0Zlk1VGxjTDYxYmIzTUM4THJlNW5SdWJMWGFaTlY2bTlQMTBqcmxyZGZNVlBmaEdzZjBHZmo5enVjS1JGUkwxU21sK3VSMXJYVnhlQ1I4NGJjODk0UzhvWHFYR1gyNzlUMjF5NHhXWHRuRlZrbTFTVzdTd2xSRWZKTG5YcjZrT0pTQ0R0L1ZsUHRkYXgwekhjVHR1UHVaK1RqdFVSOHlnVUpmcGtQOUUvVzVFYUZ6WXl0bUduWHhETUorY3N5OFh5SkkxdDhtK3g2aWJ0Y0FuUEtxZXU1ZzExb1hlZ2owSHM5Tlh3a2xNOVhMcVUweGZERU1wSjhmOCtNOXhDQ1NGcVo2Rks1SDkwWUlHVk5kYTUwNk43WUtHK2QvUUJwY1F2eXRoSitkVlk4Z1hraGtGc0RYN0dIbW84eWJud3FFczA5NEZ2THplbW5kYXBOcCtDSDNFNkdwKzJSMC9jbzlJdmZLdndyTUhuaVdQRHd6ZGU0UFpsRnFWbUIxWnE0QUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWdDQVlBQUFCemVucjBBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFJbFNVUkJWRmlGM1ZmTlZlTXdFSjR2dXhVQVIrRHR3WEVMMkw0Z1N0a0tvZzVzZCtCVXNLVll1UkRYUVBJZTdJTXJsSkRaUXlTZVVDeGJpaE1PKzUxaWVUenpaZjRGbW9pMGtCVXozeE9SQUZEdmRxUzJYYU5DdjhjSmpKZEVwQUNzOUc5aXhrTU1pYU9Oei9NRnA0V3M3UE41dm1qbithSU4xZlBUUFVneUtXWXpFcjRQbmg2YmF1aVpHVFhBeHhGSU1pa0FicG45SHlTWnRHT3MzUGZicmxIemZCRnEvOUFEQUdxZFZMMDRkV3kvRU5ES1Qyb2dpb0FOcTd3K0FXRGx4dHlTTFkvSi9sNENTU2FGS1NrYnpDeUk2SUJBbit3a0F0dXVVV2toYS9kOHR4c09qNjZlUVprZ0FrU0g1WFV1ZUFuWU1JM0Zsd05UTUJzVFNESXBpRWdRa1dEbVVqOS9INEZ0MXlnQTliNC9uTDdIQjRYZ25Qa3c2b0Z6NC84bDRJNXBINEp5d0lhZW1DVXpDMlk4OU1ub2dWYW1oUnpObjJnUG1Gay9WQkZQajAxbGtSZ2tFT1VCUFhSb3MxNzIvbk9YUkZwSU15ZThKSDdFRUxpNHZtc0IxTyt2blNMYWgrUHk1dTRQRWYzU0l1THFOb2Q1Ly83YXFjdWJURnhjNTM4LzNycVhQcDNCSVRDdXRHTUtjRW4wZFgxenU2VmUwYnpUY21vVmlGR0pFY1FTVUVGS3JhVjJySFVIRTlDN2dIQ09lNVhiWVVvTFdRRllUU1pnNE1iWEpRSGdZSkVaUXRUTnlPd0ZiaG5hcEd5WG16Vi9zMTU2N1VUMUFYUHBTQXRaMlc3MnhSbmdkc3dqVVgzZzQ2MTd1YnJOd2N5bFhlOHVkSDk0SmlLMVdTOS9EK2s4Nm5KcTVnSHRrMUtaSkxQV2VBR2dEdGtqSnQrT0xjT2ZaR0t1NlA4QUpWb29qSUtkaFBVQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWdDQVlBQUFCemVucjBBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFHdVNVUkJWRmlGN1ZaTGJzSXdFSDJUM3FCbDJTSXFBV2NnYkdwdTBwNkEzSURrQnVFRXBTZUoyWkQwQ29RRkVtemhDSmt1Z2l2TGtNUk9rYnJKMjFpV3gvTjVNL1lNMEtIRFArUGhMNWRIL2p6cDlmM1gweUdUYlhWUTI0dmphUkF5OCtLeWxYbTZuTFhSMDRvQnd6Z0FESHA5bjlvdzRjeUFicHlaWmdCQXhFbTVVclRkeEtHTFBpY0docE5BQVB5cGpPVnB2RG9mczMydjd4TUFBVUE4UHZ2cjh6SGIyK3IwWEJ3Z0tpTTNJOTF1NHBDSUlsM0dXcWV0b0VaOVpjR04vSG1Da2ducm9yUml3TWg3VkNXbm5Za3lYWGR5UUlHSW9sMFd5NnJ6WFJaTDExUTBwa0NQUGsrWFZpbFRxV0NtV1ozRGdBTURLakpMMlhXNU5yUFE2QUF6dndGQVVVRGFPdUFpYThPQUFNcjhWZ2tNSjRFWVQ0TlE3VFZaY1E4SHBESlNxY1NEWU9hRmtyRjlBYllPMUVJdjBoc3NtWHQzQitvS2F1VFBXUm5YaTlUelN1clYzVG8wOW9MVElaTlBMNU1Rd01EODV5ODlBTXowa2FmeENyaDZ0bzIvb1ZVelVzMkdDTzk2MnowZE1uaytmbjhwcDh4bVpkT2UyL1NDWDdxM216aFVCWGRKa1ZEbnRtM1phUjY0TVloY0szU2NDVnFOWk9yTjZ5TVpFYTJMQXJMcDYrM1FvWU9KSDlKeDVBTVpMdXVuQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQmdBQUFBWUNBWUFBQURnZHozNEFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUV3U1VSQlZFaUoxVlhMY1lNd0VIM0xwQlNjR25BdVVTb3lIUmgzZ0N1eWNzR3BBYWNXMWdlenNCYjZJTnN6bWJ3VGc5RDc3SzRROE45QnJ5SXFxOW9VQlF3emZ4TFJkOSsxRFFDOHZZS1lpUGNBRytiYk8yWTJBSjRUME1UdUdoRWQ1RGxMWUNhRkFWZ3ZXV1k2RVBGcElaWlBmRS82KzlOYUFIai9xQnRtM2dQQTVYeWNlSU1KVW02RldDRGt1anplQkd2Y3VnaTV2MHN3ZjVSMkc0THJmaElvcTlxSUF5SFdzNXlDN0IwR0xJeE1jWFJNMTlVd3dLNG9qNzJjajE5QkFiMUJ1M0xGM0ZTYjdZNURhMTZCbEpodVlxeTVnaUltMEhkdDAzZHRvemVYVlcwV0xqM05YU1hnd043STVqVGlQallNcXdXWUo1Y0dtTXNYYzU4bE1FNlJCYnhqL2J5QWh2NnBwYzVLbG9BcTB5Z1VMdy93d0kyMjJlNU9HUHNRR2syTjdCSkppalh1SDRidkxQd1pydWxieENncVNYbFFBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCZ0FBQUFZQ0FZQUFBRGdkejM0QUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBRzJTVVJCVkVpSjFWWEJrWnRBRU96R0Y0SHRwKzJYVUF5Z2oxYVpYQWFRQVpBQmlzQ2hnRDRTTVVqM3NPdjhQWWRBK3dFakxVamNIU3Avcmw5YnpERGIyOU96QzN4MDhONGZ3emlwQUxoekliSTQ3c3Q4bkJmTUxieUlVaGZHaVVqdUpHNU9oeTFKRnBLeVJaUzZjZjZudVJ0OC9SRTlrdHdkOTJYKzkwL3pDd0JlbnB2NnkvZklCUUg1OHR6VWZ2N0RYUGFTc3ROaGUwdGFCMkEzL2pocmd5Q0FrekJndUloU1J5cjdMejFvMjJIeE1FNHFVcFZKZHV1ZldTZm80WHJXRllDNmEzUlpUeVhmc3dHcytPbXczYnlWZXlYUkxhdlo5MTZPZ21RQm5HZmhkVExqQWw2czlyVmRydEljQUh5dHd6aXBKQlpQelRza0NnSTQ0T0tFNVNyTkpXWExWUW9Ba0xRbWVXVkRVaGt3Ykw2UHMwU1MxbjdndUM5ejg3dWtESUFiNTZEenZndmpSSGJDS3dLMk1EMm5HamU2ZTJwYld6K01pTVNOTDluREpjaUNWTFZjcGJtdnN3MVNkd0p1T2ltQnRrVmZXSm1SNnVSVTVSTWZqUHlvMGNiQ1ljS1N0cmtmNjRidllvN0JIUFJIbytuWnRxaWZtdkpOci92b2J0bExyMjRPMnRUWVQ4QzlGcHo5SHJ3SHZwM3ZmdEVNcG5uYm91NXVXNjM5bnN4K2NNYjQvQzMrRGVnbmlVZGcydVlmRi84QUY3bmRPOGZBTGRBQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWdDQVlBQUFCemVucjBBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFGdVNVUkJWRmlGN1ZkYmlvUXdFS3hlOUZ5cmtGc1ppSUxlU3BoNHJnaTlIeWJpcUVrbStKcVBMWmlmMGU2cWRQb2w4RERvcUFNaFRRR2dBS0Q3TnRlM0NCRFNGR0JTbG5qaGpadSt6ZXNVWDluSGhBQm1VbjU3ckVFOGdFbUI2VGVGUENoZ2NVcUFWeWVkU0JzWGNpdFFwWkx2Q2hEVitNTGVLUUVzU2MvQ200Q1ozSkVTTndCd05xbFhBRncyZDFsNUZlRWFQM2NSZmEyQWFCbmF2TmlDZUVpdCtXUUJVeWx1U25BQ0gyNmljUUUyKzFPWUNsR05uTklScjhrQkppV2tlVVNBQm5FSlFJTkppV3JrbUpCNEVybzVzSUt2T2RuL3RaQ210dk5CQ1duZ3U1SmdCT3c4ZU8zOVJEVnl5TFp2ODdydk1nSnhFNHBHTkFtRk5JM25zUTdaTG9VSWFlQ0xSdlFLenFoMTY2TVcxY2gyd3M0K0grK0Vqd3U0ckJYUGRwSDNqclRpQW91NzlOb0Yzb3NLc0ZXd3V4dUVscFNRWFpLQUdORVpkbzhuNGIrQWVkYlBmWCt4RFNmQWZVT0ViU2YvQUhIcGNvU0F6VHArRjNUZlpXVm1GUTFuclZnZkl6M0sxK0FQT1RQUWROK3dMV1VBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQmdBQUFBY0NBWUFBQUI3NW4vdUFBQUFBWE5TUjBJQXJzNGM2UUFBQUVSbFdFbG1UVTBBS2dBQUFBZ0FBWWRwQUFRQUFBQUJBQUFBR2dBQUFBQUFBNkFCQUFNQUFBQUJBQUVBQUtBQ0FBUUFBQUFCQUFBQUdLQURBQVFBQUFBQkFBQUFIQUFBQUFBWHRkTnRBQUFFWWtsRVFWUklEWTFWVFdoY1ZSaTkzMzN2T1pVWVo2aEdxbEFvVlRjdXE2Q0xDQVpwYllSaUZsSi9FQ3hGa2tvYnA3RUZGU3ladGpRb0ZhWkpObWE2RmNWcUZ5NXFNRVVFc3hHc1hWa1FCQ25VUmFsWUpoWkowbVRlOVp6djNqc3plV21LajNudi9wM3ZuUE45OTc0M1l1NXlEYjNkZk5LSWUxR01HM0RPYkRmRzlSa2ovUDBsUnY1QTc0Y2tsVysvbXFyOHNoRU5NT3V2bHc4Mm4xL044M0VSODZ3ekRueEtDdjZBTFVhSnpDZFdqbjg5VmZtK3lMWUdPanJxU24rMm1oK0x1Q3E1QkFwNndUNDEvQ01JWWtSeG5TWE9DUVp1NmhHcHZEYzlMY3U2Z0VkYllIakdaWC8vdXZDTmNXNndPOUNCdkMwVW94allKZWluT1VFak1ydjVpZkpMalJGWjRiejFpOGJjdk5JOEMrZURsTFJXY0ZzbFlaOEMyZ0x0VysrTElpcXVMZnJFR2pmWS9PMmZzNUZYa2ErTU5YZTFjdmRkcDlicUJJYThleTBFSHlSQ28xMU5BVDAvVUt5dVkxNnpUdE1Ydmp4OTM1ekZBTVdUdW5mcUNkUUp5WkFGZzZ6WTJTeE5kNmVKN1V0d1owbTZHL2haelVBekJDYnhtZEk1dWF6TDYrU1dWNDh1UE8xYTdpZldvMTN2YUZQQlp1eUxUOHBuR0ZpOFhqdTZjQmhKMW5VK3hHaGljTVY5ekxMc0dTdE9odFF4VmRXRno0SXU0UGI4UnVRazVScjI2cnc2Wmp6dXVDZnM1M2srWktIWUh6Wkg2eHZCV2hvcko0dXVpMlBnVDNyWFdOR3lSaUVPWGIvRk9YcVlLakVMQmJIdTFpNCtkbS9QbFNKaGNVd005bW94R3FPWTNzeUczTGkyNEhNUTB2TWJSSVMxYnJsV2s5VWlZWEU4UG01YUFtem5ZTEJNWGdRS1c1QUJ0aHBxb1NTYUNkMEFWWG56dzZWSGk0VEY4YjVqeTl0UjkwcDBIYXNCNDloVDQwaDFuWk54QVdNVlk0QngrWENSY04xWThtRnVMRzl2ak8rTzU4RHpPb1RrY3N5QUMrd1RxRUhXSE5sWFczeHVIV21ZZUF0ckNEbWlyMHNnWmF6ZUlNTXB2R3dUbTh5Uk9KSkdzTG93TGhIbkx1NnZMWjQ0T09FZWlFTHM3Ni85ZXlMSEdqWXlhWmMzR0d3ZkZERnpNdnlSSzY4dUxWMXplZDdyYzBPS1JQQmlFejRSL2lXMFZ6bU4wbTBqVmxIcUJLOFZjTjRVQVZReXQ1SjdObTIxamZkbEFTdU5XQnBtb3BGc3lCQmFiaG8raHR2MDFuNW5qWmhZQWI4ZmpKVUd1ZlZyV3U0dFRZRDNocmZyd1RFZ3RoU0xmYmJhRDJiMGdBUWpBWGVqdDZjMHdWeFVvUDZ1M0pRMHFiWURJNWpmT3ZaQmhGcnJSUXpmbTNocTJxZFBNY1JCWEtSS1RnWUEzYmxHVGkzTllPUDAySFZtZlk5QzNYWHU3cmV4QkJuWG1QbGcwMGljQzc3OGNNZURwVU00VmZQcUdnKzJXb3BnSTg0WGF4NHhhT2QzYkM0ZGl1UnMxd2lNNEcrdWJMTTkyTkNmSTdtQ21IYTRRd20wWkNxSWVRb21TWExwL2txMmh4emRBc0ZiOTVReGgrdXVjbnRsNVNKcThwVC93K3I4Vi9qalNrNSs4M254V050TFdaYnVQRE1temJWTWhRemlJb0VQOVdRRGVBc3Z4R1BYVlFiZFlMcjJXZGtMZlQzcHdKM0l5WGZIREtMUXVYTXUrZkZhcTQ1TVJ1TVJwaUN6NEFiaHpaanUzNXFNN2QwcnJSaFRiTzhxRU1IVnlkWFhYY3Q4aW5HdkY1SmJrcGdEazlYMDg0alpxUDFmQWd4K1o5STlidkxXWnhRbzJmU04wMVg1ZlNQUzd2bi9BT3ZYTjk5ZVNlSHZBQUFBQUVsRlRrU3VRbUNDXCIiLCIvL+W9k+WJjeeUteiEkeaXtumXtC0t5b2T5pelXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUaGlzRGF0ZShlKSB7XHJcbi8vK1wiIFwiK2grXCI6XCIrTStcIjpcIitzO1xyXG5cdFx0bGV0IG5vd1RpbWUgPSBcIlwiO1xyXG5cdFx0bGV0IHRpbWU9IG5ldyBEYXRlKCk7XHJcblx0XHRsZXQgeT10aW1lLmdldEZ1bGxZZWFyKCk7XHJcblx0XHRsZXQgbG09dGltZS5nZXRNb250aCgpO1xyXG5cdFx0XHRsbT1sbTwxMD8nMCcrbG06bG07XHJcblx0XHRsZXQgbT10aW1lLmdldE1vbnRoKCkrMTtcclxuXHRcdFx0bT1tPDEwPycwJyttOm07XHJcblx0XHRsZXQgZD10aW1lLmdldERhdGUoKTtcclxuXHRcdFx0ZD1kPDEwPycwJytkOmQ7XHJcblx0XHRsZXQgaD10aW1lLmdldEhvdXJzKCk7XHJcblx0XHRcdGg9aDwxMD8nMCcraDpoO1xyXG5cdFx0bGV0IE0gPSB0aW1lLmdldE1pbnV0ZXMoKTtcclxuXHRcdFx0TT1NPDEwPycwJytNOk07XHJcblx0XHRsZXQgcyA9IHRpbWUuZ2V0U2Vjb25kcygpO1xyXG5cdFx0XHRzPXM8MTA/JzAnK3M6cztcclxuXHRcdGlmIChlID09PSAxKSB7XHJcblx0XHRcdG5vd1RpbWU9IHkrXCItXCIrIG0rXCItXCIrZCArICcgJyArIGggKyAnOicgKyBNICsgJzonICsgc1xyXG5cdFx0fWVsc2UgaWYoZSA9PSA0KXsvL+W9k+aciOeahOesrOS4gOWkqVxyXG5cdFx0XHRub3dUaW1lPSB5K1wiLVwiKyBtK1wiLTFcIjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG5vd1RpbWU9IHkrXCItXCIrIG0rXCItXCIrZFxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG5vd1RpbWU7XHJcbn1cclxuLy8g6L2s5YyW5pe26Ze0XHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUsbikge1xyXG5cdFx0bGV0IHRpbWU9IG5ldyBEYXRlKGRhdGUpO1xyXG5cdFx0bGV0IG5vd1RpbWU9IFwiXCI7XHJcblx0XHRsZXQgeT10aW1lLmdldEZ1bGxZZWFyKCk7XHJcblx0XHRsZXQgbT10aW1lLmdldE1vbnRoKCkrMTtcclxuXHRcdFx0bT1tPDEwPycwJyttOm07XHJcblx0XHRsZXQgZD10aW1lLmdldERhdGUoKTtcclxuXHRcdFx0ZD1kPDEwPycwJytkOmQ7XHJcblx0XHRsZXQgaD10aW1lLmdldEhvdXJzKCk7XHJcblx0XHRcdGg9aDwxMD8nMCcraDpoO1xyXG5cdFx0bGV0IE0gPSB0aW1lLmdldE1pbnV0ZXMoKTtcclxuXHRcdFx0TT1NPDEwPycwJytNOk07XHJcblx0XHRsZXQgcyA9IHRpbWUuZ2V0U2Vjb25kcygpO1xyXG5cdFx0XHRzPXM8MTA/JzAnK3M6cztcclxuXHRcdGlmKG49PVwieVwifHxuPT1cIuW5tFwiKXtcclxuXHRcdFx0bm93VGltZT0geVxyXG5cdFx0fWVsc2UgaWYobj09XCJNXCJ8fG49PVwi5pyIXCIpe1xyXG5cdFx0XHRub3dUaW1lPSB5K1wiLVwiKyBtXHJcblx0XHR9ZWxzZSBpZihuPT1cIm1cIil7XHJcblx0XHRcdG5vd1RpbWU9IHkrXCItXCIrIG0rXCItXCIrZCtcIiBcIitoK1wiOlwiK01cclxuXHRcdH1lbHNlIGlmKG49PVwiaFwifHxuPT1cIuaXtlwiKXtcclxuXHRcdFx0bm93VGltZT0geStcIi1cIisgbStcIi1cIitkK1wiIFwiK2hcclxuXHRcdH1lbHNlIGlmKG49PVwiZFwifHxuPT1cIuaXpVwiKXtcclxuXHRcdFx0bm93VGltZT0geStcIi1cIisgbStcIi1cIitkXHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0bm93VGltZT0geStcIi1cIisgbStcIi1cIitkK1wiIFwiK2grXCI6XCIrTStcIjpcIitzXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbm93VGltZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaG91ckRhdGVGb3JtYXQoZGF0ZSkge1xyXG5cdGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cdGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcblx0bGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG5cdGxldCBob3VyID0gZGF0ZS5nZXRIb3VycygpO1xyXG5cdGRhdGUgPSB5ZWFyICsgJy0nICsgKG1vbnRoID4gOSA/IG1vbnRoIDogJzAnICsgbW9udGgpICsgJy0nICsgKGRheSA+IDkgPyBkYXkgOiAnMCcgKyBkYXkpICsgJyAnICsgKGhvdXIgPiA5ID8gaG91ciA6ICcwJyArIGhvdXIpO1xyXG5cdHJldHVybiBkYXRlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBtb250aERhdGVGb3JtYXQoZGF0ZSkge1xyXG5cdGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cdGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcblx0ZGF0ZSA9IHllYXIgKyAnLScgKyAobW9udGggPiA5ID8gbW9udGggOiAnMCcgKyBtb250aCk7XHJcblx0cmV0dXJuIGRhdGU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZvdXJIb3VyVGltZSgpIHtcclxuXHRsZXQgbm93RGF0ZSA9IG5ldyBEYXRlKCk7XHJcblx0bGV0IHllYXIgPSBub3dEYXRlLmdldEZ1bGxZZWFyKCk7XHJcblx0bGV0IG1vbnRoID0gbm93RGF0ZS5nZXRNb250aCgpICsgMTtcclxuXHRsZXQgZGF5ID0gbm93RGF0ZS5nZXREYXRlKCk7XHJcblx0bGV0IGhvdXJzID0gbm93RGF0ZS5nZXRIb3VycygpO1xyXG5cdGlmIChob3VycyA8IDQgJiYgaG91cnMgPj0gMCkge1xyXG5cdFx0aG91cnMgPSAwO1xyXG5cdH0gZWxzZSBpZiAoaG91cnMgPCA4ICYmIGhvdXJzID49IDQpIHtcclxuXHRcdGhvdXJzID0gNDtcclxuXHR9IGVsc2UgaWYgKGhvdXJzIDwgMTIgJiYgaG91cnMgPj0gOCkge1xyXG5cdFx0aG91cnMgPSA4O1xyXG5cdH0gZWxzZSBpZiAoaG91cnMgPCAxNiAmJiBob3VycyA+PSAxMikge1xyXG5cdFx0aG91cnMgPSAxMjtcclxuXHR9IGVsc2UgaWYgKGhvdXJzIDwgMjAgJiYgaG91cnMgPj0gMTYpIHtcclxuXHRcdGhvdXJzID0gMTY7XHJcblx0fSBlbHNlIGlmIChob3VycyA8PSAyMyAmJiBob3VycyA+PSAyMCkge1xyXG5cdFx0aG91cnMgPSAyMDtcclxuXHR9XHJcblx0bW9udGggPSBtb250aCA8IDEwID8gXCIwXCIgKyBtb250aCA6IG1vbnRoO1xyXG5cdGRheSA9IGRheSA8IDEwID8gXCIwXCIgKyBkYXkgOiBkYXk7XHJcblx0aG91cnMgPSBob3VycyA8IDEwID8gXCIwXCIgKyBob3VycyA6IGhvdXJzO1xyXG5cdHJldHVybiB5ZWFyKyctJyttb250aCsnLScrZGF5KycgJytob3VycysnOjAwOjAwJ1xyXG59XHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbWFwQWlyV2VhdGhlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTNiMzBjZTImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbWFwQWlyV2VhdGhlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL21hcEFpcldlYXRoZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL21hcEFpcldlYXRoZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTNiMzBjZTImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxM2IzMGNlMlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxM2IzMGNlMicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxM2IzMGNlMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxM2IzMGNlMicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbWFwQWlyV2VhdGhlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTNiMzBjZTImc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTNiMzBjZTInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9naXMvY29tcG9uZW50cy9wb3AvYWlyL21hcEFpcldlYXRoZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tYXBBaXJXZWF0aGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tYXBBaXJXZWF0aGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21hcEFpcldlYXRoZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTNiMzBjZTImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tYXBBaXJXZWF0aGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xM2IzMGNlMiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbWFwQWlyV3J5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZmVhYjAyOCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9tYXBBaXJXcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9tYXBBaXJXcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL21hcEFpcldyeS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3Mmc2NvcGU9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzVmZWFiMDI4JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzVmZWFiMDI4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzVmZWFiMDI4JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9tYXBBaXJXcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVmZWFiMDI4JlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzVmZWFiMDI4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvZ2lzL2NvbXBvbmVudHMvcG9wL2Fpci9tYXBBaXJXcnkudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tYXBBaXJXcnkudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21hcEFpcldyeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tYXBBaXJXcnkudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJnNjb3BlPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21hcEFpcldyeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWZlYWIwMjgmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL21hcFNpdGVBaXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ4NzZlMTliJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL21hcFNpdGVBaXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9tYXBTaXRlQWlyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9tYXBTaXRlQWlyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ4NzZlMTliJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNDg3NmUxOWJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDg3NmUxOWInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDg3NmUxOWInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDg3NmUxOWInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL21hcFNpdGVBaXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ4NzZlMTliJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzQ4NzZlMTliJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvZ2lzL2NvbXBvbmVudHMvcG9wL2Fpci9tYXBTaXRlQWlyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWFwU2l0ZUFpci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWFwU2l0ZUFpci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tYXBTaXRlQWlyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ4NzZlMTliJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWFwU2l0ZUFpci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDg3NmUxOWImc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MmQ0YThmMyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNjJkNGE4ZjNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjJkNGE4ZjMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjJkNGE4ZjMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjJkNGE4ZjMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MmQ0YThmMyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2MmQ0YThmMycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MmQ0YThmMyZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vYnJhbmNoU2l0ZVBvcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWU1OWRiZjEmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYnJhbmNoU2l0ZVBvcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2JyYW5jaFNpdGVQb3AudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2JyYW5jaFNpdGVQb3AudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWU1OWRiZjEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxZTU5ZGJmMVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxZTU5ZGJmMScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxZTU5ZGJmMScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxZTU5ZGJmMScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vYnJhbmNoU2l0ZVBvcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWU1OWRiZjEmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMWU1OWRiZjEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9naXMvY29tcG9uZW50cy9wb3Avd2F0ZXIvYnJhbmNoU2l0ZVBvcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2JyYW5jaFNpdGVQb3AudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2JyYW5jaFNpdGVQb3AudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYnJhbmNoU2l0ZVBvcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xZTU5ZGJmMSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2JyYW5jaFNpdGVQb3AudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFlNTlkYmYxJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9tYXBTaXRlV2F0ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJmM2NjMmJiJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL21hcFNpdGVXYXRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL21hcFNpdGVXYXRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vbWFwU2l0ZVdhdGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJmM2NjMmJiJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMmYzY2MyYmJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMmYzY2MyYmInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMmYzY2MyYmInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMmYzY2MyYmInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL21hcFNpdGVXYXRlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmYzY2MyYmImc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMmYzY2MyYmInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9naXMvY29tcG9uZW50cy9wb3Avd2F0ZXIvbWFwU2l0ZVdhdGVyLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWFwU2l0ZVdhdGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tYXBTaXRlV2F0ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWFwU2l0ZVdhdGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJmM2NjMmJiJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWFwU2l0ZVdhdGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yZjNjYzJiYiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vemZ4c1BvcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWMwZmY4NWEmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vemZ4c1BvcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3pmeHNQb3AudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3pmeHNQb3AudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MWMwZmY4NWEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxYzBmZjg1YVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxYzBmZjg1YScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxYzBmZjg1YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxYzBmZjg1YScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vemZ4c1BvcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWMwZmY4NWEmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMWMwZmY4NWEnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9naXMvY29tcG9uZW50cy9wb3Avd2F0ZXIvemZ4c1BvcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3pmeHNQb3AudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3pmeHNQb3AudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vemZ4c1BvcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xYzBmZjg1YSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3pmeHNQb3AudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTFjMGZmODVhJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9tYXBQdXJQbGFudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MmFjYTM2YWEmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbWFwUHVyUGxhbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9tYXBQdXJQbGFudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vbWFwUHVyUGxhbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJnNjb3BlPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyYWNhMzZhYScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyYWNhMzZhYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyYWNhMzZhYScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbWFwUHVyUGxhbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJhY2EzNmFhJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzJhY2EzNmFhJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvZ2lzL2NvbXBvbmVudHMvcG9wL3dyeS9tYXBQdXJQbGFudC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21hcFB1clBsYW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tYXBQdXJQbGFudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tYXBQdXJQbGFudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3Mmc2NvcGU9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWFwUHVyUGxhbnQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJhY2EzNmFhJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9tYXBXcnkudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYxMjcwNDYyJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL21hcFdyeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL21hcFdyeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vbWFwV3J5LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZzY29wZT10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjEyNzA0NjInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjEyNzA0NjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjEyNzA0NjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL21hcFdyeS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjEyNzA0NjImXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNjEyNzA0NjInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9naXMvY29tcG9uZW50cy9wb3Avd3J5L21hcFdyeS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21hcFdyeS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWFwV3J5LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21hcFdyeS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3Mmc2NvcGU9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWFwV3J5LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MTI3MDQ2MiZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbWFwV3J5T3RoZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVkOTI4NWZlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL21hcFdyeU90aGVyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbWFwV3J5T3RoZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL21hcFdyeU90aGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZzY29wZT10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNWQ5Mjg1ZmUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNWQ5Mjg1ZmUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNWQ5Mjg1ZmUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL21hcFdyeU90aGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZDkyODVmZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1ZDkyODVmZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC93cnkvbWFwV3J5T3RoZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tYXBXcnlPdGhlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWFwV3J5T3RoZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWFwV3J5T3RoZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJnNjb3BlPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21hcFdyeU90aGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01ZDkyODVmZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=