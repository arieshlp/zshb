(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[43],{

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

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _arrayWithoutHoles; });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");


function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return Object(_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r);
}



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _iterableToArray; });
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
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__);








function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _nonIterableSpread; });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}



/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _toConsumableArray; });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");





function _toConsumableArray(r) {
  return Object(_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__["default"])(r) || Object(_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__["default"])(r) || Object(_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__["default"])(r) || Object(_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
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

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/search/components/componentsItem.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/search/components/componentsItem.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);



//
//
//
//
//
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
  name: "componentsItem",
  props: {
    item: {
      type: Object,
      default: function _default() {}
    },
    searchValue: {
      type: String,
      default: ''
    }
  },
  methods: {
    toDetail: function toDetail(item) {
      var tempD = {
        componentName: item.componentName,
        moduleName: item.moduleName,
        resourcePath: item.resourcePath,
        type: item.type,
        parameter: item.parameter,
        detailsParameter: item.detailsParameter
      };
      this.$emit('showModule', tempD);
    },
    //与搜索字段与点位名称对比
    compare: function compare(value) {
      if (value.indexOf(this.searchValue) > -1) {
        var index = Number(value.indexOf(this.searchValue));
        var stringIndex = this.searchValue.length;
        var tempHtml = '';

        if (index > 0) {
          tempHtml += "".concat(value.slice(0, index));
        } else {
          tempHtml += "";
        }

        tempHtml += "<span style=\"color:#447BFC;\">".concat(this.searchValue, "</span>").concat(value.slice(index + stringIndex));
        return tempHtml;
      } else {
        return value;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/search/components/lawsItem.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/search/components/lawsItem.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);



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
  name: "lawsItem",
  props: {
    item: {
      type: Object,
      default: function _default() {}
    },
    searchValue: {
      type: String,
      default: ''
    }
  },
  methods: {
    toDetail: function toDetail(item) {
      this.$router.push({
        name: "pdfH5",
        query: {
          url: item.URL,
          name: item.FILENAME
        }
      }); // openBrowser(item.URL)
    },
    //与搜索字段与点位名称对比
    compare: function compare(value) {
      if (value.indexOf(this.searchValue) > -1) {
        var index = Number(value.indexOf(this.searchValue));
        var stringIndex = this.searchValue.length;
        var tempHtml = '';

        if (index > 0) {
          tempHtml += "".concat(value.slice(0, index));
        } else {
          tempHtml += "";
        }

        tempHtml += "<span style=\"color:#447BFC;\">".concat(this.searchValue, "</span>").concat(value.slice(index + stringIndex));
        return tempHtml;
      } else {
        return value;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/search/components/neighbour.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/search/components/neighbour.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var coordtransform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! coordtransform */ "./node_modules/coordtransform/index.js");
/* harmony import */ var coordtransform__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(coordtransform__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/api */ "./src/api/api.js");
/* harmony import */ var _views_search_components_resultItem_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/views/search/components/resultItem.vue */ "./src/views/search/components/resultItem.vue");
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vant */ "./node_modules/vant/es/index.js");




//
//
//
//
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
  name: "neighbour",
  components: {
    resultItem: _views_search_components_resultItem_vue__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      loading: false,
      neighbour: [],
      message: "",
      error: false,
      location: []
    };
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

              if (result === "定位失败") {
                _this.message = result;
                _this.error = true;
                _this.loading = false;
              } else {
                _this.location = result;

                _this.queryNeighbour();
              }

            case 4:
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
            console.log([location.Longitude, location.Latitude]);
            resolve([location.Longitude, location.Latitude]);
          }, function (error) {
            console.log(error);
            resolve("定位失败");
          });
        } catch (e) {
          console.log(e); // resolve('定位失败')

          resolve(coordtransform__WEBPACK_IMPORTED_MODULE_4___default.a.wgs84togcj02(102.82797786933142, 24.89106777437279));
        }
      });
    },
    queryNeighbour: function queryNeighbour() {
      var _this2 = this;

      Object(_api_api__WEBPACK_IMPORTED_MODULE_5__["neighbourSiteSearch"])({
        longitude: this.location[0],
        latitude: this.location[1],
        number: 1000
      }).then(function (res) {
        res.data.forEach(function (item) {
          item.listType = item.type;
        });
        _this2.neighbour = res.data;
        _this2.error = false;
        _this2.loading = false;
      });
    },
    toMap: function toMap() {
      if (this.location) {
        this.$router.push({
          name: "surroundMap",
          query: {
            longitude: this.location[0],
            latitude: this.location[1]
          }
        });
      } else {
        Object(vant__WEBPACK_IMPORTED_MODULE_7__["Toast"])("未获取到定位");
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/search/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/search/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _api_api_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/api/api.js */ "./src/api/api.js");
/* harmony import */ var _views_search_components_neighbour_vue__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/views/search/components/neighbour.vue */ "./src/views/search/components/neighbour.vue");
/* harmony import */ var _views_search_components_resultItem_vue__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @/views/search/components/resultItem.vue */ "./src/views/search/components/resultItem.vue");
/* harmony import */ var _views_search_components_componentsItem__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/views/search/components/componentsItem */ "./src/views/search/components/componentsItem.vue");
/* harmony import */ var _views_search_components_lawsItem__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/views/search/components/lawsItem */ "./src/views/search/components/lawsItem.vue");
/* harmony import */ var _views_searchComponents_index_vue__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/views/searchComponents/index.vue */ "./src/views/searchComponents/index.vue");













//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    neighbour: _views_search_components_neighbour_vue__WEBPACK_IMPORTED_MODULE_14__["default"],
    resultItem: _views_search_components_resultItem_vue__WEBPACK_IMPORTED_MODULE_15__["default"],
    searchComponents: _views_searchComponents_index_vue__WEBPACK_IMPORTED_MODULE_18__["default"],
    componentsItem: _views_search_components_componentsItem__WEBPACK_IMPORTED_MODULE_16__["default"],
    lawsItem: _views_search_components_lawsItem__WEBPACK_IMPORTED_MODULE_17__["default"]
  },
  data: function data() {
    return {
      searchValue: '',
      searchStore: this.$store.state.searchStore,
      showMore: false,
      nameList: [],
      list: [],
      //站点
      listComponents: [],
      //组件
      listLaws: [],
      //法规法规
      neighbour: [],
      loading: false,
      finished: false,
      pageTotal: 0,
      page: 0,
      first: true,
      siteCountryImg: __webpack_require__(/*! @/assets/国.png */ "./src/assets/国.png"),
      inputWaitTime: 0,
      showComponent: false,
      tabIndex: 0,
      tabArr: ['组件', '站点/断面/企业名称', '法律法规/环境标准'],
      lawLoading: true
    };
  },
  watch: {
    searchValue: function searchValue(newD) {
      if (newD === '') {
        this.first = true;
      }
    }
  },
  mounted: function mounted() {
    var search = document.getElementsByTagName('input')[0];
    search.focus();

    try {
      cordova.plugins.Keyboard.show();
    } catch (e) {}

    var ls = localStorage.getItem('searchStore');
    this.searchStore = ls ? ls.split(',') : [];
  },
  methods: {
    changeTab: function changeTab(index) {
      this.page = 0;
      this.tabIndex = index;
    },
    //查询法律法规环保标准
    queryLaws: function queryLaws() {
      var _this = this;

      // this.lawLoading = true;
      Object(_api_api_js__WEBPACK_IMPORTED_MODULE_13__["lawSearch"])({
        name: this.searchValue
      }).then(function (res) {
        // this.lawLoading = false;
        _this.listLaws = res.data.list;
      });
    },
    checkLastInput: function checkLastInput() {
      var time = new Date().getTime();
      return this.inputWaitTime !== 0 && time - this.inputWaitTime > 500;
    },
    onLoad: function onLoad() {
      var _this2 = this;

      if (this.first) {
        // this.loading = false;
        return;
      } // 异步更新数据


      setTimeout( /*#__PURE__*/Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var tempArr;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ++_this2.page;
                _context.next = 3;
                return _this2.queryList();

              case 3:
                tempArr = _context.sent;
                _this2.listComponents = tempArr.componentRecords;
                _this2.list = [].concat(Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(_this2.list), Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_toConsumableArray_js__WEBPACK_IMPORTED_MODULE_0__["default"])(tempArr.records)); // console.log(this.list)
                // 加载状态结束
                // this.loading = false;
                // 数据全部加载完成

                if (_this2.list.length >= _this2.pageTotal) {
                  _this2.finished = true;
                }

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      })), 1000);
    },
    queryList: function queryList() {
      var _this3 = this;

      return new Promise(function (resolve, reject) {
        Object(_api_api_js__WEBPACK_IMPORTED_MODULE_13__["siteSearch"])({
          page: _this3.page,
          limit: 100,
          name: _this3.searchValue
        }).then(function (res) {
          _this3.pageTotal = res.data.total;
          var tempComponeent = res.data.componentRecords; //将父级的parameter默认为children[0]的detailsParameter

          tempComponeent.forEach(function (item) {
            if (item.children.length > 0) {
              item.parameter = item.children[0].detailsParameter;
            }
          }); // let tempRecords = tempComponeent.concat(res.data.records);

          resolve(res.data);
        });
      });
    },
    onSearch: function onSearch() {
      if (this.searchValue === '') {
        // this.searchValue = this.$store.state.searchStore[0];
        this.first = true;
        this.showComponent = false;
        this.list = [];
        this.listComponents = [];
        this.listLaws = [];
        return;
      }

      if (this.checkLastInput()) {
        this.inputWaitTime = new Date().getTime();
        return;
      } // this.loading = true;
      // this.$store.commit('setSearchStore', this.searchValue);


      this.searchStore.unshift(this.searchValue);
      this.searchStore = Array.from(new Set(this.searchStore));
      localStorage.setItem('searchStore', this.searchStore.join(','));
      this.getDate();
      this.queryLaws();
    },
    onClickTag: function onClickTag(value) {
      this.searchValue = value;
      this.getDate();
      this.queryLaws();
    },
    getDate: function getDate() {
      this.first = false; // this.loading = true;

      this.showComponent = false;
      this.page = 0;
      this.list = [];
      this.onLoad();
    },
    onClear: function onClear() {
      this.searchStore = [];
      localStorage.setItem('searchStore', '');
    },
    //如果点击的是组件
    showModule: function showModule(data) {
      var _this4 = this;

      this.searchValue = data.componentName; //搜索栏是点击组件的名称

      this.showComponent = true;
      this.$refs.page.scrollTop = 0; // this.list = [];

      this.$store.commit('setSearchObj', data);
      this.$nextTick(function () {
        _this4.$refs.summaryAllRef.getComponent(data.type, data.resourcePath);
      });
    },
    back: function back() {
      if (this.showComponent) {
        this.showComponent = false;
      } else {
        this.$router.go(-1);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/search/components/componentsItem.vue?vue&type=template&id=60e7df56&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/search/components/componentsItem.vue?vue&type=template&id=60e7df56&scoped=true& ***!
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
  return _c("div", { staticClass: "search-site-item" }, [
    _c(
      "div",
      { staticStyle: { "font-size": "14px" } },
      [
        _c(
          "div",
          {
            on: {
              click: function ($event) {
                return _vm.toDetail(_vm.item)
              },
            },
          },
          [
            _c("van-icon", {
              staticStyle: { "margin-right": "10px" },
              attrs: { name: "search", color: "#ccc", size: "16" },
            }),
            _c("span", {
              domProps: {
                innerHTML: _vm._s(_vm.compare(_vm.item.componentName)),
              },
            }),
          ],
          1
        ),
        _vm._l(_vm.item.children, function (itemC) {
          return _c(
            "div",
            {
              staticClass: "search-site-item-children",
              on: {
                click: function ($event) {
                  return _vm.toDetail(itemC)
                },
              },
            },
            [
              _c("div", {
                domProps: {
                  innerHTML: _vm._s(_vm.compare(itemC.componentName)),
                },
              }),
            ]
          )
        }),
      ],
      2
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/search/components/lawsItem.vue?vue&type=template&id=3f123c50&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/search/components/lawsItem.vue?vue&type=template&id=3f123c50&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "search-site-item" }, [
    _c(
      "div",
      {
        staticStyle: { "font-size": "14px" },
        on: {
          click: function ($event) {
            return _vm.toDetail(_vm.item)
          },
        },
      },
      [
        _c("van-icon", {
          staticStyle: { "margin-right": "10px" },
          attrs: { name: "search", color: "#ccc", size: "16" },
        }),
        _c("span", {
          domProps: { innerHTML: _vm._s(_vm.compare(_vm.item.FILENAME)) },
        }),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/search/components/neighbour.vue?vue&type=template&id=6074767e&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/search/components/neighbour.vue?vue&type=template&id=6074767e&scoped=true& ***!
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
    [
      _c(
        "div",
        {
          staticClass: "recent-wrapper fs",
          staticStyle: { "margin-top": "20px" },
        },
        [
          _c("div", { staticClass: "recent-name" }, [_vm._v("周边数据站点")]),
          _c(
            "span",
            {
              staticStyle: {
                color: "#447bfc",
                "font-size": "12px",
                "text-decoration": "underline",
              },
              on: { click: _vm.toMap },
            },
            [_vm._v("查看地图")]
          ),
        ]
      ),
      _c(
        "van-list",
        {
          staticStyle: {
            "margin-top": "20px",
            background: "white",
            padding: "0 8px",
            "border-radius": "10px",
            overflow: "auto",
          },
          attrs: {
            "loading-text": "加载中",
            "error-text": _vm.message,
            error: _vm.error,
          },
          model: {
            value: _vm.loading,
            callback: function ($$v) {
              _vm.loading = $$v
            },
            expression: "loading",
          },
        },
        _vm._l(_vm.neighbour, function (item, i) {
          return _c("resultItem", { key: i, attrs: { item: item } })
        }),
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/search/index.vue?vue&type=template&id=a0fd5576&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/search/index.vue?vue&type=template&id=a0fd5576&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    {
      ref: "page",
      staticStyle: {
        overflow: "auto",
        height: "100vh",
        background: "linear-gradient(to bottom, white, #f5f6f8)",
      },
    },
    [
      _c(
        "div",
        { staticClass: "fs head" },
        [
          _c("van-icon", {
            attrs: { name: "arrow-left" },
            on: { click: _vm.back },
          }),
          _c("van-search", {
            ref: "search",
            staticStyle: { width: "100%" },
            attrs: {
              shape: "round",
              placeholder: "空气站点 / 水质断面 / 污染源企业",
              "show-action": "",
            },
            on: { input: _vm.onSearch },
            scopedSlots: _vm._u([
              {
                key: "action",
                fn: function () {
                  return [
                    _c(
                      "div",
                      {
                        staticStyle: { color: "#447BFC" },
                        on: { click: _vm.onSearch },
                      },
                      [_vm._v("搜索")]
                    ),
                  ]
                },
                proxy: true,
              },
            ]),
            model: {
              value: _vm.searchValue,
              callback: function ($$v) {
                _vm.searchValue = $$v
              },
              expression: "searchValue",
            },
          }),
        ],
        1
      ),
      _vm.first
        ? _c(
            "div",
            { staticStyle: { padding: "0 12px", "margin-top": "80px" } },
            [
              _c(
                "div",
                { staticClass: "recent-wrapper fs" },
                [
                  _c("div", { staticClass: "recent-name" }, [
                    _vm._v(" 最近搜索 "),
                  ]),
                  _c("van-icon", {
                    attrs: { name: "delete-o" },
                    on: { click: _vm.onClear },
                  }),
                ],
                1
              ),
              _c(
                "div",
                { staticClass: "tag-wrapper" },
                [
                  _vm._l(_vm.searchStore, function (item, i) {
                    return _c(
                      "div",
                      {
                        on: {
                          click: function ($event) {
                            return _vm.onClickTag(item)
                          },
                        },
                      },
                      [
                        i < 7
                          ? _c("div", { staticClass: "tag" }, [
                              _vm._v(_vm._s(item)),
                            ])
                          : _vm._e(),
                        i >= 7 && _vm.showMore === true
                          ? _c("div", { staticClass: "tag" }, [
                              _vm._v(_vm._s(item)),
                            ])
                          : _vm._e(),
                      ]
                    )
                  }),
                  _vm.searchStore.length >= 7
                    ? _c(
                        "div",
                        {
                          staticClass: "tag",
                          on: {
                            click: function ($event) {
                              _vm.showMore = !_vm.showMore
                            },
                          },
                        },
                        [
                          !_vm.showMore
                            ? _c("van-icon", { attrs: { name: "arrow-down" } })
                            : _c("van-icon", { attrs: { name: "arrow-up" } }),
                        ],
                        1
                      )
                    : _vm._e(),
                ],
                2
              ),
              _c("neighbour"),
            ],
            1
          )
        : !_vm.first && !_vm.showComponent
        ? [
            _c(
              "div",
              {
                staticClass: "sub-name",
                staticStyle: { "margin-top": "70px" },
              },
              [_vm._v("站点/断面/企业名称")]
            ),
            _c(
              "van-list",
              {
                staticStyle: { margin: "0 20px 0" },
                attrs: { finished: _vm.finished, "finished-text": "" },
                on: { load: _vm.onLoad },
              },
              [
                _vm._l(_vm.list, function (item, i) {
                  return _c("resultItem", {
                    key: item.siteName + "" + i,
                    attrs: { item: item, searchValue: _vm.searchValue },
                    on: { showModule: _vm.showModule },
                  })
                }),
                _vm.list.length == 0
                  ? _c("div", { staticClass: "none-data" }, [
                      _vm._v("没有更多了"),
                    ])
                  : _vm._e(),
              ],
              2
            ),
            [
              _c("div", { staticClass: "sub-name" }, [_vm._v("功能模块")]),
              _vm._l(_vm.listComponents, function (item, i) {
                return _c("componentsItem", {
                  key: item.siteName + "" + i,
                  staticStyle: { margin: "0 20px 0" },
                  attrs: { item: item, searchValue: _vm.searchValue },
                  on: { showModule: _vm.showModule },
                })
              }),
              _vm.listComponents.length == 0
                ? _c("div", { staticClass: "none-data" }, [
                    _vm._v("没有更多了"),
                  ])
                : _vm._e(),
              _c("div", { staticClass: "sub-name" }, [_vm._v("知识库")]),
              _vm._l(_vm.listLaws, function (item, i) {
                return _c("lawsItem", {
                  key: item.FILENAME + "" + i,
                  staticStyle: { margin: "0 20px 0" },
                  attrs: { item: item, searchValue: _vm.searchValue },
                  on: { showModule: _vm.showModule },
                })
              }),
              _vm.listLaws.length == 0
                ? _c("div", { staticClass: "none-data" }, [
                    _vm._v("没有更多了"),
                  ])
                : _vm._e(),
            ],
          ]
        : _vm._e(),
      _vm.showComponent
        ? _c("searchComponents", {
            ref: "summaryAllRef",
            staticStyle: { "margin-top": "70px" },
          })
        : _vm._e(),
    ],
    2
  )
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

/***/ "./node_modules/core-js/internals/array-buffer-non-extensible.js":
/*!***********************************************************************!*\
  !*** ./node_modules/core-js/internals/array-buffer-non-extensible.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// FF26- bug: ArrayBuffers are non-extensible, but Object.isExtensible does not report it
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = fails(function () {
  if (typeof ArrayBuffer == 'function') {
    var buffer = new ArrayBuffer(8);
    // eslint-disable-next-line es/no-object-isextensible, es/no-object-defineproperty -- safe
    if (Object.isExtensible(buffer)) Object.defineProperty(buffer, 'a', { value: 8 });
  }
});


/***/ }),

/***/ "./node_modules/core-js/internals/collection-strong.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/collection-strong.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ../internals/object-create */ "./node_modules/core-js/internals/object-create.js");
var defineBuiltInAccessor = __webpack_require__(/*! ../internals/define-built-in-accessor */ "./node_modules/core-js/internals/define-built-in-accessor.js");
var defineBuiltIns = __webpack_require__(/*! ../internals/define-built-ins */ "./node_modules/core-js/internals/define-built-ins.js");
var bind = __webpack_require__(/*! ../internals/function-bind-context */ "./node_modules/core-js/internals/function-bind-context.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/core-js/internals/is-null-or-undefined.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var defineIterator = __webpack_require__(/*! ../internals/iterator-define */ "./node_modules/core-js/internals/iterator-define.js");
var createIterResultObject = __webpack_require__(/*! ../internals/create-iter-result-object */ "./node_modules/core-js/internals/create-iter-result-object.js");
var setSpecies = __webpack_require__(/*! ../internals/set-species */ "./node_modules/core-js/internals/set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ../internals/descriptors */ "./node_modules/core-js/internals/descriptors.js");
var fastKey = __webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/core-js/internals/internal-metadata.js").fastKey;
var InternalStateModule = __webpack_require__(/*! ../internals/internal-state */ "./node_modules/core-js/internals/internal-state.js");

var setInternalState = InternalStateModule.set;
var internalStateGetterFor = InternalStateModule.getterFor;

module.exports = {
  getConstructor: function (wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER) {
    var Constructor = wrapper(function (that, iterable) {
      anInstance(that, Prototype);
      setInternalState(that, {
        type: CONSTRUCTOR_NAME,
        index: create(null),
        first: null,
        last: null,
        size: 0
      });
      if (!DESCRIPTORS) that.size = 0;
      if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
    });

    var Prototype = Constructor.prototype;

    var getInternalState = internalStateGetterFor(CONSTRUCTOR_NAME);

    var define = function (that, key, value) {
      var state = getInternalState(that);
      var entry = getEntry(that, key);
      var previous, index;
      // change existing entry
      if (entry) {
        entry.value = value;
      // create new entry
      } else {
        state.last = entry = {
          index: index = fastKey(key, true),
          key: key,
          value: value,
          previous: previous = state.last,
          next: null,
          removed: false
        };
        if (!state.first) state.first = entry;
        if (previous) previous.next = entry;
        if (DESCRIPTORS) state.size++;
        else that.size++;
        // add to index
        if (index !== 'F') state.index[index] = entry;
      } return that;
    };

    var getEntry = function (that, key) {
      var state = getInternalState(that);
      // fast case
      var index = fastKey(key);
      var entry;
      if (index !== 'F') return state.index[index];
      // frozen object case
      for (entry = state.first; entry; entry = entry.next) {
        if (entry.key === key) return entry;
      }
    };

    defineBuiltIns(Prototype, {
      // `{ Map, Set }.prototype.clear()` methods
      // https://tc39.es/ecma262/#sec-map.prototype.clear
      // https://tc39.es/ecma262/#sec-set.prototype.clear
      clear: function clear() {
        var that = this;
        var state = getInternalState(that);
        var entry = state.first;
        while (entry) {
          entry.removed = true;
          if (entry.previous) entry.previous = entry.previous.next = null;
          entry = entry.next;
        }
        state.first = state.last = null;
        state.index = create(null);
        if (DESCRIPTORS) state.size = 0;
        else that.size = 0;
      },
      // `{ Map, Set }.prototype.delete(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.delete
      // https://tc39.es/ecma262/#sec-set.prototype.delete
      'delete': function (key) {
        var that = this;
        var state = getInternalState(that);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.next;
          var prev = entry.previous;
          delete state.index[entry.index];
          entry.removed = true;
          if (prev) prev.next = next;
          if (next) next.previous = prev;
          if (state.first === entry) state.first = next;
          if (state.last === entry) state.last = prev;
          if (DESCRIPTORS) state.size--;
          else that.size--;
        } return !!entry;
      },
      // `{ Map, Set }.prototype.forEach(callbackfn, thisArg = undefined)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.foreach
      // https://tc39.es/ecma262/#sec-set.prototype.foreach
      forEach: function forEach(callbackfn /* , that = undefined */) {
        var state = getInternalState(this);
        var boundFunction = bind(callbackfn, arguments.length > 1 ? arguments[1] : undefined);
        var entry;
        while (entry = entry ? entry.next : state.first) {
          boundFunction(entry.value, entry.key, this);
          // revert to the last existing entry
          while (entry && entry.removed) entry = entry.previous;
        }
      },
      // `{ Map, Set}.prototype.has(key)` methods
      // https://tc39.es/ecma262/#sec-map.prototype.has
      // https://tc39.es/ecma262/#sec-set.prototype.has
      has: function has(key) {
        return !!getEntry(this, key);
      }
    });

    defineBuiltIns(Prototype, IS_MAP ? {
      // `Map.prototype.get(key)` method
      // https://tc39.es/ecma262/#sec-map.prototype.get
      get: function get(key) {
        var entry = getEntry(this, key);
        return entry && entry.value;
      },
      // `Map.prototype.set(key, value)` method
      // https://tc39.es/ecma262/#sec-map.prototype.set
      set: function set(key, value) {
        return define(this, key === 0 ? 0 : key, value);
      }
    } : {
      // `Set.prototype.add(value)` method
      // https://tc39.es/ecma262/#sec-set.prototype.add
      add: function add(value) {
        return define(this, value = value === 0 ? 0 : value, value);
      }
    });
    if (DESCRIPTORS) defineBuiltInAccessor(Prototype, 'size', {
      configurable: true,
      get: function () {
        return getInternalState(this).size;
      }
    });
    return Constructor;
  },
  setStrong: function (Constructor, CONSTRUCTOR_NAME, IS_MAP) {
    var ITERATOR_NAME = CONSTRUCTOR_NAME + ' Iterator';
    var getInternalCollectionState = internalStateGetterFor(CONSTRUCTOR_NAME);
    var getInternalIteratorState = internalStateGetterFor(ITERATOR_NAME);
    // `{ Map, Set }.prototype.{ keys, values, entries, @@iterator }()` methods
    // https://tc39.es/ecma262/#sec-map.prototype.entries
    // https://tc39.es/ecma262/#sec-map.prototype.keys
    // https://tc39.es/ecma262/#sec-map.prototype.values
    // https://tc39.es/ecma262/#sec-map.prototype-@@iterator
    // https://tc39.es/ecma262/#sec-set.prototype.entries
    // https://tc39.es/ecma262/#sec-set.prototype.keys
    // https://tc39.es/ecma262/#sec-set.prototype.values
    // https://tc39.es/ecma262/#sec-set.prototype-@@iterator
    defineIterator(Constructor, CONSTRUCTOR_NAME, function (iterated, kind) {
      setInternalState(this, {
        type: ITERATOR_NAME,
        target: iterated,
        state: getInternalCollectionState(iterated),
        kind: kind,
        last: null
      });
    }, function () {
      var state = getInternalIteratorState(this);
      var kind = state.kind;
      var entry = state.last;
      // revert to the last existing entry
      while (entry && entry.removed) entry = entry.previous;
      // get next entry
      if (!state.target || !(state.last = entry = entry ? entry.next : state.state.first)) {
        // or finish the iteration
        state.target = null;
        return createIterResultObject(undefined, true);
      }
      // return step by kind
      if (kind === 'keys') return createIterResultObject(entry.key, false);
      if (kind === 'values') return createIterResultObject(entry.value, false);
      return createIterResultObject([entry.key, entry.value], false);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // `{ Map, Set }.prototype[@@species]` accessors
    // https://tc39.es/ecma262/#sec-get-map-@@species
    // https://tc39.es/ecma262/#sec-get-set-@@species
    setSpecies(CONSTRUCTOR_NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/internals/collection.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/collection.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var isForced = __webpack_require__(/*! ../internals/is-forced */ "./node_modules/core-js/internals/is-forced.js");
var defineBuiltIn = __webpack_require__(/*! ../internals/define-built-in */ "./node_modules/core-js/internals/define-built-in.js");
var InternalMetadataModule = __webpack_require__(/*! ../internals/internal-metadata */ "./node_modules/core-js/internals/internal-metadata.js");
var iterate = __webpack_require__(/*! ../internals/iterate */ "./node_modules/core-js/internals/iterate.js");
var anInstance = __webpack_require__(/*! ../internals/an-instance */ "./node_modules/core-js/internals/an-instance.js");
var isCallable = __webpack_require__(/*! ../internals/is-callable */ "./node_modules/core-js/internals/is-callable.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/core-js/internals/is-null-or-undefined.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var checkCorrectnessOfIteration = __webpack_require__(/*! ../internals/check-correctness-of-iteration */ "./node_modules/core-js/internals/check-correctness-of-iteration.js");
var setToStringTag = __webpack_require__(/*! ../internals/set-to-string-tag */ "./node_modules/core-js/internals/set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ../internals/inherit-if-required */ "./node_modules/core-js/internals/inherit-if-required.js");

module.exports = function (CONSTRUCTOR_NAME, wrapper, common) {
  var IS_MAP = CONSTRUCTOR_NAME.indexOf('Map') !== -1;
  var IS_WEAK = CONSTRUCTOR_NAME.indexOf('Weak') !== -1;
  var ADDER = IS_MAP ? 'set' : 'add';
  var NativeConstructor = globalThis[CONSTRUCTOR_NAME];
  var NativePrototype = NativeConstructor && NativeConstructor.prototype;
  var Constructor = NativeConstructor;
  var exported = {};

  var fixMethod = function (KEY) {
    var uncurriedNativeMethod = uncurryThis(NativePrototype[KEY]);
    defineBuiltIn(NativePrototype, KEY,
      KEY === 'add' ? function add(value) {
        uncurriedNativeMethod(this, value === 0 ? 0 : value);
        return this;
      } : KEY === 'delete' ? function (key) {
        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY === 'get' ? function get(key) {
        return IS_WEAK && !isObject(key) ? undefined : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : KEY === 'has' ? function has(key) {
        return IS_WEAK && !isObject(key) ? false : uncurriedNativeMethod(this, key === 0 ? 0 : key);
      } : function set(key, value) {
        uncurriedNativeMethod(this, key === 0 ? 0 : key, value);
        return this;
      }
    );
  };

  var REPLACE = isForced(
    CONSTRUCTOR_NAME,
    !isCallable(NativeConstructor) || !(IS_WEAK || NativePrototype.forEach && !fails(function () {
      new NativeConstructor().entries().next();
    }))
  );

  if (REPLACE) {
    // create collection constructor
    Constructor = common.getConstructor(wrapper, CONSTRUCTOR_NAME, IS_MAP, ADDER);
    InternalMetadataModule.enable();
  } else if (isForced(CONSTRUCTOR_NAME, true)) {
    var instance = new Constructor();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) !== instance;
    // V8 ~ Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    // eslint-disable-next-line no-new -- required for testing
    var ACCEPT_ITERABLES = checkCorrectnessOfIteration(function (iterable) { new NativeConstructor(iterable); });
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new NativeConstructor();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      Constructor = wrapper(function (dummy, iterable) {
        anInstance(dummy, NativePrototype);
        var that = inheritIfRequired(new NativeConstructor(), dummy, Constructor);
        if (!isNullOrUndefined(iterable)) iterate(iterable, that[ADDER], { that: that, AS_ENTRIES: IS_MAP });
        return that;
      });
      Constructor.prototype = NativePrototype;
      NativePrototype.constructor = Constructor;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);

    // weak collections should not contains .clear method
    if (IS_WEAK && NativePrototype.clear) delete NativePrototype.clear;
  }

  exported[CONSTRUCTOR_NAME] = Constructor;
  $({ global: true, constructor: true, forced: Constructor !== NativeConstructor }, exported);

  setToStringTag(Constructor, CONSTRUCTOR_NAME);

  if (!IS_WEAK) common.setStrong(Constructor, CONSTRUCTOR_NAME, IS_MAP);

  return Constructor;
};


/***/ }),

/***/ "./node_modules/core-js/internals/freezing.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/internals/freezing.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

module.exports = !fails(function () {
  // eslint-disable-next-line es/no-object-isextensible, es/no-object-preventextensions -- required for testing
  return Object.isExtensible(Object.preventExtensions({}));
});


/***/ }),

/***/ "./node_modules/core-js/internals/internal-metadata.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/internals/internal-metadata.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var hiddenKeys = __webpack_require__(/*! ../internals/hidden-keys */ "./node_modules/core-js/internals/hidden-keys.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var hasOwn = __webpack_require__(/*! ../internals/has-own-property */ "./node_modules/core-js/internals/has-own-property.js");
var defineProperty = __webpack_require__(/*! ../internals/object-define-property */ "./node_modules/core-js/internals/object-define-property.js").f;
var getOwnPropertyNamesModule = __webpack_require__(/*! ../internals/object-get-own-property-names */ "./node_modules/core-js/internals/object-get-own-property-names.js");
var getOwnPropertyNamesExternalModule = __webpack_require__(/*! ../internals/object-get-own-property-names-external */ "./node_modules/core-js/internals/object-get-own-property-names-external.js");
var isExtensible = __webpack_require__(/*! ../internals/object-is-extensible */ "./node_modules/core-js/internals/object-is-extensible.js");
var uid = __webpack_require__(/*! ../internals/uid */ "./node_modules/core-js/internals/uid.js");
var FREEZING = __webpack_require__(/*! ../internals/freezing */ "./node_modules/core-js/internals/freezing.js");

var REQUIRED = false;
var METADATA = uid('meta');
var id = 0;

var setMetadata = function (it) {
  defineProperty(it, METADATA, { value: {
    objectID: 'O' + id++, // object ID
    weakData: {}          // weak collections IDs
  } });
};

var fastKey = function (it, create) {
  // return a primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMetadata(it);
  // return object ID
  } return it[METADATA].objectID;
};

var getWeakData = function (it, create) {
  if (!hasOwn(it, METADATA)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMetadata(it);
  // return the store of weak collections IDs
  } return it[METADATA].weakData;
};

// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZING && REQUIRED && isExtensible(it) && !hasOwn(it, METADATA)) setMetadata(it);
  return it;
};

var enable = function () {
  meta.enable = function () { /* empty */ };
  REQUIRED = true;
  var getOwnPropertyNames = getOwnPropertyNamesModule.f;
  var splice = uncurryThis([].splice);
  var test = {};
  test[METADATA] = 1;

  // prevent exposing of metadata key
  if (getOwnPropertyNames(test).length) {
    getOwnPropertyNamesModule.f = function (it) {
      var result = getOwnPropertyNames(it);
      for (var i = 0, length = result.length; i < length; i++) {
        if (result[i] === METADATA) {
          splice(result, i, 1);
          break;
        }
      } return result;
    };

    $({ target: 'Object', stat: true, forced: true }, {
      getOwnPropertyNames: getOwnPropertyNamesExternalModule.f
    });
  }
};

var meta = module.exports = {
  enable: enable,
  fastKey: fastKey,
  getWeakData: getWeakData,
  onFreeze: onFreeze
};

hiddenKeys[METADATA] = true;


/***/ }),

/***/ "./node_modules/core-js/internals/object-is-extensible.js":
/*!****************************************************************!*\
  !*** ./node_modules/core-js/internals/object-is-extensible.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var classof = __webpack_require__(/*! ../internals/classof-raw */ "./node_modules/core-js/internals/classof-raw.js");
var ARRAY_BUFFER_NON_EXTENSIBLE = __webpack_require__(/*! ../internals/array-buffer-non-extensible */ "./node_modules/core-js/internals/array-buffer-non-extensible.js");

// eslint-disable-next-line es/no-object-isextensible -- safe
var $isExtensible = Object.isExtensible;
var FAILS_ON_PRIMITIVES = fails(function () { $isExtensible(1); });

// `Object.isExtensible` method
// https://tc39.es/ecma262/#sec-object.isextensible
module.exports = (FAILS_ON_PRIMITIVES || ARRAY_BUFFER_NON_EXTENSIBLE) ? function isExtensible(it) {
  if (!isObject(it)) return false;
  if (ARRAY_BUFFER_NON_EXTENSIBLE && classof(it) === 'ArrayBuffer') return false;
  return $isExtensible ? $isExtensible(it) : true;
} : $isExtensible;


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

/***/ "./node_modules/core-js/modules/es.set.constructor.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es.set.constructor.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var collection = __webpack_require__(/*! ../internals/collection */ "./node_modules/core-js/internals/collection.js");
var collectionStrong = __webpack_require__(/*! ../internals/collection-strong */ "./node_modules/core-js/internals/collection-strong.js");

// `Set` constructor
// https://tc39.es/ecma262/#sec-set-objects
collection('Set', function (init) {
  return function Set() { return init(this, arguments.length ? arguments[0] : undefined); };
}, collectionStrong);


/***/ }),

/***/ "./node_modules/core-js/modules/es.set.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/es.set.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// TODO: Remove this module from `core-js@4` since it's replaced to module below
__webpack_require__(/*! ../modules/es.set.constructor */ "./node_modules/core-js/modules/es.set.constructor.js");


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/search/index.vue?vue&type=style&index=1&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/search/index.vue?vue&type=style&index=1&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n.site-tag {\n  padding: 3px;\n  border-radius: 2px;\n  font-size: 12px;\n  transform: scale(0.9);\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/search/components/componentsItem.vue?vue&type=style&index=0&id=60e7df56&scoped=true&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/search/components/componentsItem.vue?vue&type=style&index=0&id=60e7df56&scoped=true&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".search-site-item[data-v-60e7df56] {\n  padding: 10px 0;\n  border-bottom: 1px solid rgba(18, 18, 54, 0.04);\n  color: #000000;\n}\n.search-site-item .search-site-item-children[data-v-60e7df56] {\n  position: relative;\n  margin-left: 10px;\n  padding-top: 15px;\n  padding-left: 30px;\n  border-left: 1px dashed #447bfc;\n  color: #666;\n}\n.search-site-item .search-site-item-children[data-v-60e7df56]::before {\n  content: \"\";\n  width: 25px;\n  height: 10px;\n  position: absolute;\n  left: 0;\n  border-bottom: 1px dashed #447bfc;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/search/components/lawsItem.vue?vue&type=style&index=0&id=3f123c50&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/search/components/lawsItem.vue?vue&type=style&index=0&id=3f123c50&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".search-site-item[data-v-3f123c50] {\n  padding: 10px 0;\n  border-bottom: 1px solid rgba(18, 18, 54, 0.04);\n  color: #000000;\n}\n.search-site-item .search-site-item-children[data-v-3f123c50] {\n  position: relative;\n  margin-left: 10px;\n  padding-top: 15px;\n  padding-left: 30px;\n  border-left: 1px dashed #447bfc;\n  color: #666;\n}\n.search-site-item .search-site-item-children[data-v-3f123c50]::before {\n  content: \"\";\n  width: 25px;\n  height: 10px;\n  position: absolute;\n  left: 0;\n  border-bottom: 1px dashed #447bfc;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/search/components/neighbour.vue?vue&type=style&index=0&id=6074767e&scoped=true&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/search/components/neighbour.vue?vue&type=style&index=0&id=6074767e&scoped=true&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fs[data-v-6074767e] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/search/index.vue?vue&type=style&index=0&id=a0fd5576&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/search/index.vue?vue&type=style&index=0&id=a0fd5576&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @/assets/pollution-tab-bg.png */ "./src/assets/pollution-tab-bg.png");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! @/assets/recent-bg.png */ "./src/assets/recent-bg.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, ".tab-wrapper[data-v-a0fd5576] {\n  display: flex;\n  align-items: center;\n  margin: 16px auto 10px;\n}\n.tab-wrapper .tab-item[data-v-a0fd5576] {\n  width: 33%;\n  text-align: center;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 13px;\n}\n.tab-wrapper .active[data-v-a0fd5576] {\n  color: rgba(18, 18, 54, 0.8);\n  font-weight: bold;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n  background-position: center bottom;\n  background-size: 27px 8px;\n}\n.sub-name[data-v-a0fd5576] {\n  padding: 10px 20px;\n  color: rgba(18, 18, 54, 0.8);\n  font-weight: bold;\n}\n.van-search[data-v-a0fd5576] {\n  background: transparent;\n}\n.van-search .van-cell[data-v-a0fd5576] {\n  font-size: 12px;\n  padding: 8px 8px 8px 0;\n}\n.van-search__content[data-v-a0fd5576] {\n  background-color: #fff;\n  border: 1px solid rgba(18, 18, 54, 0.5);\n}\n.head[data-v-a0fd5576] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 2;\n  background: #F5F6F8;\n  padding: 0 12px;\n  box-shadow: #0000001c 0 0 7px 0;\n}\n.fs[data-v-a0fd5576] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.recent-wrapper[data-v-a0fd5576] {\n  margin: 13px 0;\n}\n.recent-wrapper .recent-name[data-v-a0fd5576] {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat;\n  background-position: center bottom;\n  background-size: 100% 30%;\n  color: #121236;\n  font-size: 16px;\n}\n.tag-wrapper[data-v-a0fd5576] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.tag-wrapper .tag[data-v-a0fd5576] {\n  padding: 3px 14px;\n  margin: 3px;\n  background-color: #fff;\n  border-radius: 20px;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.none-data[data-v-a0fd5576] {\n  color: #969799;\n  font-size: 14px;\n  line-height: 50px;\n  text-align: center;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/search/index.vue?vue&type=style&index=1&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/search/index.vue?vue&type=style&index=1&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/search/index.vue?vue&type=style&index=1&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3ffcfb7e", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/search/components/componentsItem.vue?vue&type=style&index=0&id=60e7df56&scoped=true&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/search/components/componentsItem.vue?vue&type=style&index=0&id=60e7df56&scoped=true&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./componentsItem.vue?vue&type=style&index=0&id=60e7df56&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/search/components/componentsItem.vue?vue&type=style&index=0&id=60e7df56&scoped=true&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("4a2e77a6", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/search/components/lawsItem.vue?vue&type=style&index=0&id=3f123c50&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/search/components/lawsItem.vue?vue&type=style&index=0&id=3f123c50&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./lawsItem.vue?vue&type=style&index=0&id=3f123c50&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/search/components/lawsItem.vue?vue&type=style&index=0&id=3f123c50&scoped=true&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("c7d20654", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/search/components/neighbour.vue?vue&type=style&index=0&id=6074767e&scoped=true&lang=scss&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/search/components/neighbour.vue?vue&type=style&index=0&id=6074767e&scoped=true&lang=scss& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./neighbour.vue?vue&type=style&index=0&id=6074767e&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/search/components/neighbour.vue?vue&type=style&index=0&id=6074767e&scoped=true&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("253b9b7d", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/search/index.vue?vue&type=style&index=0&id=a0fd5576&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/search/index.vue?vue&type=style&index=0&id=a0fd5576&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=a0fd5576&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/search/index.vue?vue&type=style&index=0&id=a0fd5576&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("808f8370", content, false, {"sourceMap":false,"shadowMode":false});
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

/***/ "./src/assets/recent-bg.png":
/*!**********************************!*\
  !*** ./src/assets/recent-bg.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAMCAYAAACqTLVoAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADOSURBVFiF7ZJLTsQwEESfq+cDGw4yp+SwnIDljOxi4SQ4S9h2PylKyirbHek1/oE/ESAeD/H1HfSXGF34Q9yewRjCXXiI9zfx7IE9s2/ibvEaAUPY4nqd7z4CLHwRFwssugPHOWPhEOE5x3CAhJid09qWbWHFb0Z46Xjbu3e8/SMWbkFbMhI4ZkbQ9nvjb50mGsL72tY51pYO+7xtfh+dZQ/rWUdnufP0BHPIIjMlQHJKgOSUAMkpAZJTAiSnBEhOCZCcEiA5JUBySoDk/ABVNlW8guWRlgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/views/search/components/componentsItem.vue":
/*!********************************************************!*\
  !*** ./src/views/search/components/componentsItem.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _componentsItem_vue_vue_type_template_id_60e7df56_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componentsItem.vue?vue&type=template&id=60e7df56&scoped=true& */ "./src/views/search/components/componentsItem.vue?vue&type=template&id=60e7df56&scoped=true&");
/* harmony import */ var _componentsItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./componentsItem.vue?vue&type=script&lang=js& */ "./src/views/search/components/componentsItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _componentsItem_vue_vue_type_style_index_0_id_60e7df56_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componentsItem.vue?vue&type=style&index=0&id=60e7df56&scoped=true&lang=scss& */ "./src/views/search/components/componentsItem.vue?vue&type=style&index=0&id=60e7df56&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _componentsItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _componentsItem_vue_vue_type_template_id_60e7df56_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _componentsItem_vue_vue_type_template_id_60e7df56_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "60e7df56",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/search/components/componentsItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/search/components/componentsItem.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./src/views/search/components/componentsItem.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_componentsItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./componentsItem.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/search/components/componentsItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_componentsItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/search/components/componentsItem.vue?vue&type=style&index=0&id=60e7df56&scoped=true&lang=scss&":
/*!******************************************************************************************************************!*\
  !*** ./src/views/search/components/componentsItem.vue?vue&type=style&index=0&id=60e7df56&scoped=true&lang=scss& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_componentsItem_vue_vue_type_style_index_0_id_60e7df56_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./componentsItem.vue?vue&type=style&index=0&id=60e7df56&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/search/components/componentsItem.vue?vue&type=style&index=0&id=60e7df56&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_componentsItem_vue_vue_type_style_index_0_id_60e7df56_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_componentsItem_vue_vue_type_style_index_0_id_60e7df56_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_componentsItem_vue_vue_type_style_index_0_id_60e7df56_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_componentsItem_vue_vue_type_style_index_0_id_60e7df56_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/search/components/componentsItem.vue?vue&type=template&id=60e7df56&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./src/views/search/components/componentsItem.vue?vue&type=template&id=60e7df56&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_componentsItem_vue_vue_type_template_id_60e7df56_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./componentsItem.vue?vue&type=template&id=60e7df56&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/search/components/componentsItem.vue?vue&type=template&id=60e7df56&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_componentsItem_vue_vue_type_template_id_60e7df56_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_componentsItem_vue_vue_type_template_id_60e7df56_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/search/components/lawsItem.vue":
/*!**************************************************!*\
  !*** ./src/views/search/components/lawsItem.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lawsItem_vue_vue_type_template_id_3f123c50_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lawsItem.vue?vue&type=template&id=3f123c50&scoped=true& */ "./src/views/search/components/lawsItem.vue?vue&type=template&id=3f123c50&scoped=true&");
/* harmony import */ var _lawsItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lawsItem.vue?vue&type=script&lang=js& */ "./src/views/search/components/lawsItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _lawsItem_vue_vue_type_style_index_0_id_3f123c50_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lawsItem.vue?vue&type=style&index=0&id=3f123c50&scoped=true&lang=scss& */ "./src/views/search/components/lawsItem.vue?vue&type=style&index=0&id=3f123c50&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _lawsItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _lawsItem_vue_vue_type_template_id_3f123c50_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _lawsItem_vue_vue_type_template_id_3f123c50_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3f123c50",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/search/components/lawsItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/search/components/lawsItem.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/views/search/components/lawsItem.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lawsItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./lawsItem.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/search/components/lawsItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lawsItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/search/components/lawsItem.vue?vue&type=style&index=0&id=3f123c50&scoped=true&lang=scss&":
/*!************************************************************************************************************!*\
  !*** ./src/views/search/components/lawsItem.vue?vue&type=style&index=0&id=3f123c50&scoped=true&lang=scss& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lawsItem_vue_vue_type_style_index_0_id_3f123c50_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./lawsItem.vue?vue&type=style&index=0&id=3f123c50&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/search/components/lawsItem.vue?vue&type=style&index=0&id=3f123c50&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lawsItem_vue_vue_type_style_index_0_id_3f123c50_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lawsItem_vue_vue_type_style_index_0_id_3f123c50_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lawsItem_vue_vue_type_style_index_0_id_3f123c50_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lawsItem_vue_vue_type_style_index_0_id_3f123c50_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/search/components/lawsItem.vue?vue&type=template&id=3f123c50&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./src/views/search/components/lawsItem.vue?vue&type=template&id=3f123c50&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lawsItem_vue_vue_type_template_id_3f123c50_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./lawsItem.vue?vue&type=template&id=3f123c50&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/search/components/lawsItem.vue?vue&type=template&id=3f123c50&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lawsItem_vue_vue_type_template_id_3f123c50_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lawsItem_vue_vue_type_template_id_3f123c50_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/search/components/neighbour.vue":
/*!***************************************************!*\
  !*** ./src/views/search/components/neighbour.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _neighbour_vue_vue_type_template_id_6074767e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./neighbour.vue?vue&type=template&id=6074767e&scoped=true& */ "./src/views/search/components/neighbour.vue?vue&type=template&id=6074767e&scoped=true&");
/* harmony import */ var _neighbour_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./neighbour.vue?vue&type=script&lang=js& */ "./src/views/search/components/neighbour.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _neighbour_vue_vue_type_style_index_0_id_6074767e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./neighbour.vue?vue&type=style&index=0&id=6074767e&scoped=true&lang=scss& */ "./src/views/search/components/neighbour.vue?vue&type=style&index=0&id=6074767e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _neighbour_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _neighbour_vue_vue_type_template_id_6074767e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _neighbour_vue_vue_type_template_id_6074767e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "6074767e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/search/components/neighbour.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/search/components/neighbour.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./src/views/search/components/neighbour.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_neighbour_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./neighbour.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/search/components/neighbour.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_neighbour_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/search/components/neighbour.vue?vue&type=style&index=0&id=6074767e&scoped=true&lang=scss&":
/*!*************************************************************************************************************!*\
  !*** ./src/views/search/components/neighbour.vue?vue&type=style&index=0&id=6074767e&scoped=true&lang=scss& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_neighbour_vue_vue_type_style_index_0_id_6074767e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./neighbour.vue?vue&type=style&index=0&id=6074767e&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/search/components/neighbour.vue?vue&type=style&index=0&id=6074767e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_neighbour_vue_vue_type_style_index_0_id_6074767e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_neighbour_vue_vue_type_style_index_0_id_6074767e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_neighbour_vue_vue_type_style_index_0_id_6074767e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_neighbour_vue_vue_type_style_index_0_id_6074767e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/search/components/neighbour.vue?vue&type=template&id=6074767e&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./src/views/search/components/neighbour.vue?vue&type=template&id=6074767e&scoped=true& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_neighbour_vue_vue_type_template_id_6074767e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./neighbour.vue?vue&type=template&id=6074767e&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/search/components/neighbour.vue?vue&type=template&id=6074767e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_neighbour_vue_vue_type_template_id_6074767e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_neighbour_vue_vue_type_template_id_6074767e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/search/index.vue":
/*!************************************!*\
  !*** ./src/views/search/index.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_a0fd5576_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=a0fd5576&scoped=true& */ "./src/views/search/index.vue?vue&type=template&id=a0fd5576&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/search/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_a0fd5576_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=a0fd5576&lang=scss&scoped=true& */ "./src/views/search/index.vue?vue&type=style&index=0&id=a0fd5576&lang=scss&scoped=true&");
/* harmony import */ var _index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=1&lang=css& */ "./src/views/search/index.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_a0fd5576_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_a0fd5576_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a0fd5576",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/search/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/search/index.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/views/search/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/search/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/search/index.vue?vue&type=style&index=0&id=a0fd5576&lang=scss&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./src/views/search/index.vue?vue&type=style&index=0&id=a0fd5576&lang=scss&scoped=true& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a0fd5576_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=a0fd5576&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/search/index.vue?vue&type=style&index=0&id=a0fd5576&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a0fd5576_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a0fd5576_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a0fd5576_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_a0fd5576_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/search/index.vue?vue&type=style&index=1&lang=css&":
/*!*********************************************************************!*\
  !*** ./src/views/search/index.vue?vue&type=style&index=1&lang=css& ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--7-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&lang=css& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/search/index.vue?vue&type=style&index=1&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/search/index.vue?vue&type=template&id=a0fd5576&scoped=true&":
/*!*******************************************************************************!*\
  !*** ./src/views/search/index.vue?vue&type=template&id=a0fd5576&scoped=true& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a0fd5576_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=a0fd5576&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/search/index.vue?vue&type=template&id=a0fd5576&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a0fd5576_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_a0fd5576_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vbm9uSXRlcmFibGVTcHJlYWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3RvQ29uc3VtYWJsZUFycmF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3NlYXJjaC9jb21wb25lbnRzL2NvbXBvbmVudHNJdGVtLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3NlYXJjaC9jb21wb25lbnRzL2xhd3NJdGVtLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3NlYXJjaC9jb21wb25lbnRzL25laWdoYm91ci52dWUiLCJ3ZWJwYWNrOi8vL3NyYy92aWV3cy9zZWFyY2gvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zZWFyY2gvY29tcG9uZW50cy9jb21wb25lbnRzSXRlbS52dWU/MTYzNSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2VhcmNoL2NvbXBvbmVudHMvbGF3c0l0ZW0udnVlPzJjNGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3NlYXJjaC9jb21wb25lbnRzL25laWdoYm91ci52dWU/MTUzZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2VhcmNoL2luZGV4LnZ1ZT85YjBmIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb29yZHRyYW5zZm9ybS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktYnVmZmVyLW5vbi1leHRlbnNpYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9jb2xsZWN0aW9uLXN0cm9uZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZnJlZXppbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2ludGVybmFsLW1ldGFkYXRhLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9vYmplY3QtaXMtZXh0ZW5zaWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmZyb20uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5yZWdleHAudGVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnNldC5jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnNldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2VhcmNoL2luZGV4LnZ1ZT81Zjg1Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zZWFyY2gvY29tcG9uZW50cy9jb21wb25lbnRzSXRlbS52dWU/YmUxZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2VhcmNoL2NvbXBvbmVudHMvbGF3c0l0ZW0udnVlP2Y2YjQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3NlYXJjaC9jb21wb25lbnRzL25laWdoYm91ci52dWU/YjM3OCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2VhcmNoL2luZGV4LnZ1ZT84NDM5Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zZWFyY2gvaW5kZXgudnVlPzkxNDEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3NlYXJjaC9jb21wb25lbnRzL2NvbXBvbmVudHNJdGVtLnZ1ZT9iZTczIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zZWFyY2gvY29tcG9uZW50cy9sYXdzSXRlbS52dWU/YmY2OSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2VhcmNoL2NvbXBvbmVudHMvbmVpZ2hib3VyLnZ1ZT81NzI3Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zZWFyY2gvaW5kZXgudnVlPzg3OGUqIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcG9sbHV0aW9uLXRhYi1iZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9yZWNlbnQtYmcucG5nIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zZWFyY2gvY29tcG9uZW50cy9jb21wb25lbnRzSXRlbS52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3NlYXJjaC9jb21wb25lbnRzL2NvbXBvbmVudHNJdGVtLnZ1ZT9lNDRlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zZWFyY2gvY29tcG9uZW50cy9jb21wb25lbnRzSXRlbS52dWU/MTRlMiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2VhcmNoL2NvbXBvbmVudHMvY29tcG9uZW50c0l0ZW0udnVlP2M4ZTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3NlYXJjaC9jb21wb25lbnRzL2xhd3NJdGVtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2VhcmNoL2NvbXBvbmVudHMvbGF3c0l0ZW0udnVlPzIyNzMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3NlYXJjaC9jb21wb25lbnRzL2xhd3NJdGVtLnZ1ZT83Njk0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zZWFyY2gvY29tcG9uZW50cy9sYXdzSXRlbS52dWU/ODg5ZCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2VhcmNoL2NvbXBvbmVudHMvbmVpZ2hib3VyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2VhcmNoL2NvbXBvbmVudHMvbmVpZ2hib3VyLnZ1ZT9hNmEzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zZWFyY2gvY29tcG9uZW50cy9uZWlnaGJvdXIudnVlPzBhOTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3NlYXJjaC9jb21wb25lbnRzL25laWdoYm91ci52dWU/MWUzMiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2VhcmNoL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2VhcmNoL2luZGV4LnZ1ZT9mNDk3Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zZWFyY2gvaW5kZXgudnVlPzA1NmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3NlYXJjaC9pbmRleC52dWU/NzJhYiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2VhcmNoL2luZGV4LnZ1ZT84NzhlIl0sIm5hbWVzIjpbIl9hcnJheUxpa2VUb0FycmF5IiwiciIsImEiLCJsZW5ndGgiLCJlIiwibiIsIkFycmF5IiwiX2FycmF5V2l0aG91dEhvbGVzIiwiaXNBcnJheSIsImFycmF5TGlrZVRvQXJyYXkiLCJfaXRlcmFibGVUb0FycmF5IiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJmcm9tIiwiX25vbkl0ZXJhYmxlU3ByZWFkIiwiVHlwZUVycm9yIiwiX3RvQ29uc3VtYWJsZUFycmF5IiwiYXJyYXlXaXRob3V0SG9sZXMiLCJpdGVyYWJsZVRvQXJyYXkiLCJ1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIm5vbkl0ZXJhYmxlU3ByZWFkIiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwidCIsInRvU3RyaW5n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MkdBQVU7QUFDMUIsRUFBRSwrRUFBTTtBQUNSLEVBQUUsZ0dBQU07QUFDUixFQUFFLHlHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUE4UyxDQUFnQiwwVUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FsVTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnRztBQUN2QztBQUNMO0FBQ3NDO0FBQ3pCOzs7QUFHakU7QUFDNkY7QUFDN0YsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLDRGQUFNO0FBQ1IsRUFBRSxxR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDeENmO0FBQUE7QUFBQSx3Q0FBOFIsQ0FBZ0Isc1VBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBbFQ7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy80My5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KHIsIGEpIHtcbiAgKG51bGwgPT0gYSB8fCBhID4gci5sZW5ndGgpICYmIChhID0gci5sZW5ndGgpO1xuICBmb3IgKHZhciBlID0gMCwgbiA9IEFycmF5KGEpOyBlIDwgYTsgZSsrKSBuW2VdID0gcltlXTtcbiAgcmV0dXJuIG47XG59XG5leHBvcnQgeyBfYXJyYXlMaWtlVG9BcnJheSBhcyBkZWZhdWx0IH07IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKHIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkocikpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KHIpO1xufVxuZXhwb3J0IHsgX2FycmF5V2l0aG91dEhvbGVzIGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KHIpIHtcbiAgaWYgKFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mIFN5bWJvbCAmJiBudWxsICE9IHJbU3ltYm9sLml0ZXJhdG9yXSB8fCBudWxsICE9IHJbXCJAQGl0ZXJhdG9yXCJdKSByZXR1cm4gQXJyYXkuZnJvbShyKTtcbn1cbmV4cG9ydCB7IF9pdGVyYWJsZVRvQXJyYXkgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5leHBvcnQgeyBfbm9uSXRlcmFibGVTcHJlYWQgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBhcnJheVdpdGhvdXRIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCI7XG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkocikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMocikgfHwgaXRlcmFibGVUb0FycmF5KHIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KHIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5leHBvcnQgeyBfdG9Db25zdW1hYmxlQXJyYXkgYXMgZGVmYXVsdCB9OyIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShyLCBhKSB7XG4gIGlmIChyKSB7XG4gICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIHIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KHIsIGEpO1xuICAgIHZhciB0ID0ge30udG9TdHJpbmcuY2FsbChyKS5zbGljZSg4LCAtMSk7XG4gICAgcmV0dXJuIFwiT2JqZWN0XCIgPT09IHQgJiYgci5jb25zdHJ1Y3RvciAmJiAodCA9IHIuY29uc3RydWN0b3IubmFtZSksIFwiTWFwXCIgPT09IHQgfHwgXCJTZXRcIiA9PT0gdCA/IEFycmF5LmZyb20ocikgOiBcIkFyZ3VtZW50c1wiID09PSB0IHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KHQpID8gYXJyYXlMaWtlVG9BcnJheShyLCBhKSA6IHZvaWQgMDtcbiAgfVxufVxuZXhwb3J0IHsgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IGFzIGRlZmF1bHQgfTsiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInNlYXJjaC1zaXRlLWl0ZW1cIj5cclxuICAgIDxkaXYgc3R5bGU9XCJmb250LXNpemU6IDE0cHg7XCI+XHJcbiAgICAgIDxkaXYgQGNsaWNrPVwidG9EZXRhaWwoaXRlbSlcIj5cclxuICAgICAgICA8dmFuLWljb24gbmFtZT1cInNlYXJjaFwiIGNvbG9yPVwiI2NjY1wiIHNpemU9XCIxNlwiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAxMHB4XCIvPlxyXG4gICAgICAgIDxzcGFuIHYtaHRtbD1cImNvbXBhcmUoaXRlbS5jb21wb25lbnROYW1lKVwiPjwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgdi1mb3I9XCJpdGVtQyBpbiBpdGVtLmNoaWxkcmVuXCIgQGNsaWNrPVwidG9EZXRhaWwoaXRlbUMpXCIgY2xhc3M9XCJzZWFyY2gtc2l0ZS1pdGVtLWNoaWxkcmVuXCI+XHJcbiAgICAgICAgPGRpdiB2LWh0bWw9XCJjb21wYXJlKGl0ZW1DLmNvbXBvbmVudE5hbWUpXCI+PC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiY29tcG9uZW50c0l0ZW1cIixcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGl0ZW06IHtcclxuICAgICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgICAgZGVmYXVsdDogKCkgPT4ge1xyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgICAgc2VhcmNoVmFsdWU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgZGVmYXVsdDogJydcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgdG9EZXRhaWwoaXRlbSkge1xyXG4gICAgICAgIGxldCB0ZW1wRCA9IHtcclxuICAgICAgICAgIGNvbXBvbmVudE5hbWU6IGl0ZW0uY29tcG9uZW50TmFtZSxcclxuICAgICAgICAgIG1vZHVsZU5hbWU6IGl0ZW0ubW9kdWxlTmFtZSxcclxuICAgICAgICAgIHJlc291cmNlUGF0aDogaXRlbS5yZXNvdXJjZVBhdGgsXHJcbiAgICAgICAgICB0eXBlOiBpdGVtLnR5cGUsXHJcbiAgICAgICAgICBwYXJhbWV0ZXI6IGl0ZW0ucGFyYW1ldGVyLFxyXG4gICAgICAgICAgZGV0YWlsc1BhcmFtZXRlcjogaXRlbS5kZXRhaWxzUGFyYW1ldGVyXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuJGVtaXQoJ3Nob3dNb2R1bGUnLCB0ZW1wRCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8v5LiO5pCc57Si5a2X5q615LiO54K55L2N5ZCN56ew5a+55q+UXHJcbiAgICAgIGNvbXBhcmUodmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUuaW5kZXhPZih0aGlzLnNlYXJjaFZhbHVlKSA+IC0xKSB7XHJcbiAgICAgICAgICBsZXQgaW5kZXggPSBOdW1iZXIodmFsdWUuaW5kZXhPZih0aGlzLnNlYXJjaFZhbHVlKSk7XHJcbiAgICAgICAgICBsZXQgc3RyaW5nSW5kZXggPSB0aGlzLnNlYXJjaFZhbHVlLmxlbmd0aDtcclxuICAgICAgICAgIGxldCB0ZW1wSHRtbCA9ICcnO1xyXG4gICAgICAgICAgaWYgKGluZGV4ID4gMCkge1xyXG4gICAgICAgICAgICB0ZW1wSHRtbCArPSBgJHt2YWx1ZS5zbGljZSgwLCBpbmRleCl9YFxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGVtcEh0bWwgKz0gYGBcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRlbXBIdG1sICs9IGA8c3BhbiBzdHlsZT1cImNvbG9yOiM0NDdCRkM7XCI+JHt0aGlzLnNlYXJjaFZhbHVlfTwvc3Bhbj4ke3ZhbHVlLnNsaWNlKGluZGV4ICsgc3RyaW5nSW5kZXgpfWBcclxuICAgICAgICAgIHJldHVybiB0ZW1wSHRtbFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gdmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuXHJcbiAgLnNlYXJjaC1zaXRlLWl0ZW0ge1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTgsIDE4LCA1NCwgMC4wNCk7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuXHJcbiAgICAuc2VhcmNoLXNpdGUtaXRlbS1jaGlsZHJlbiB7XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxNXB4O1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICAgIGJvcmRlci1sZWZ0OiAxcHggZGFzaGVkICM0NDdiZmM7XHJcbiAgICAgIGNvbG9yOiAjNjY2O1xyXG5cclxuICAgICAgJjo6YmVmb3JlIHtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICB3aWR0aDogMjVweDtcclxuICAgICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjNDQ3YmZjO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInNlYXJjaC1zaXRlLWl0ZW1cIj5cclxuICAgIDxkaXYgc3R5bGU9XCJmb250LXNpemU6IDE0cHg7XCIgQGNsaWNrPVwidG9EZXRhaWwoaXRlbSlcIj5cclxuICAgICAgPHZhbi1pY29uIG5hbWU9XCJzZWFyY2hcIiBjb2xvcj1cIiNjY2NcIiBzaXplPVwiMTZcIiBzdHlsZT1cIm1hcmdpbi1yaWdodDogMTBweFwiLz5cclxuICAgICAgPHNwYW4gdi1odG1sPVwiY29tcGFyZShpdGVtLkZJTEVOQU1FKVwiPjwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcImxhd3NJdGVtXCIsXHJcbiAgICBwcm9wczoge1xyXG4gICAgICBpdGVtOiB7XHJcbiAgICAgICAgdHlwZTogT2JqZWN0LFxyXG4gICAgICAgIGRlZmF1bHQ6ICgpID0+IHtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICAgIHNlYXJjaFZhbHVlOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIGRlZmF1bHQ6ICcnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIHRvRGV0YWlsKGl0ZW0pIHtcclxuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICBuYW1lOiBcInBkZkg1XCIsXHJcbiAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICB1cmw6IGl0ZW0uVVJMLFxyXG4gICAgICAgICAgICBuYW1lOiBpdGVtLkZJTEVOQU1FXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAvLyBvcGVuQnJvd3NlcihpdGVtLlVSTClcclxuICAgICAgfSxcclxuICAgICAgLy/kuI7mkJzntKLlrZfmrrXkuI7ngrnkvY3lkI3np7Dlr7nmr5RcclxuICAgICAgY29tcGFyZSh2YWx1ZSkge1xyXG4gICAgICAgIGlmICh2YWx1ZS5pbmRleE9mKHRoaXMuc2VhcmNoVmFsdWUpID4gLTEpIHtcclxuICAgICAgICAgIGxldCBpbmRleCA9IE51bWJlcih2YWx1ZS5pbmRleE9mKHRoaXMuc2VhcmNoVmFsdWUpKTtcclxuICAgICAgICAgIGxldCBzdHJpbmdJbmRleCA9IHRoaXMuc2VhcmNoVmFsdWUubGVuZ3RoO1xyXG4gICAgICAgICAgbGV0IHRlbXBIdG1sID0gJyc7XHJcbiAgICAgICAgICBpZiAoaW5kZXggPiAwKSB7XHJcbiAgICAgICAgICAgIHRlbXBIdG1sICs9IGAke3ZhbHVlLnNsaWNlKDAsIGluZGV4KX1gXHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0ZW1wSHRtbCArPSBgYFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGVtcEh0bWwgKz0gYDxzcGFuIHN0eWxlPVwiY29sb3I6IzQ0N0JGQztcIj4ke3RoaXMuc2VhcmNoVmFsdWV9PC9zcGFuPiR7dmFsdWUuc2xpY2UoaW5kZXggKyBzdHJpbmdJbmRleCl9YFxyXG4gICAgICAgICAgcmV0dXJuIHRlbXBIdG1sXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiB2YWx1ZVxyXG4gICAgICAgIH1cclxuICAgICAgfSxcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG5cclxuICAuc2VhcmNoLXNpdGUtaXRlbSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxOCwgMTgsIDU0LCAwLjA0KTtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG5cclxuICAgIC5zZWFyY2gtc2l0ZS1pdGVtLWNoaWxkcmVuIHtcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgICAgYm9yZGVyLWxlZnQ6IDFweCBkYXNoZWQgIzQ0N2JmYztcclxuICAgICAgY29sb3I6ICM2NjY7XHJcblxyXG4gICAgICAmOjpiZWZvcmUge1xyXG4gICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgICAgIGhlaWdodDogMTBweDtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICM0NDdiZmM7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInJlY2VudC13cmFwcGVyIGZzXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAyMHB4XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyZWNlbnQtbmFtZVwiPuWRqOi+ueaVsOaNruermeeCuTwvZGl2PlxyXG4gICAgICA8c3BhbiBzdHlsZT1cImNvbG9yOiAjNDQ3YmZjOyBmb250LXNpemU6IDEycHg7IHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lXCIgQGNsaWNrPVwidG9NYXBcIj7mn6XnnIvlnLDlm748L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8dmFuLWxpc3Qgdi1tb2RlbD1cImxvYWRpbmdcIiBsb2FkaW5nLXRleHQ9XCLliqDovb3kuK1cIiA6ZXJyb3ItdGV4dD1cIm1lc3NhZ2VcIiA6ZXJyb3I9XCJlcnJvclwiIHN0eWxlPVwibWFyZ2luLXRvcDogMjBweDsgYmFja2dyb3VuZDogd2hpdGU7IHBhZGRpbmc6IDAgOHB4OyBib3JkZXItcmFkaXVzOiAxMHB4OyBvdmVyZmxvdzogYXV0b1wiPlxyXG4gICAgICA8cmVzdWx0SXRlbSB2LWZvcj1cIihpdGVtLCBpKSBpbiBuZWlnaGJvdXJcIiA6a2V5PVwiaVwiIDppdGVtPVwiaXRlbVwiLz5cclxuICAgIDwvdmFuLWxpc3Q+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgY29vcmR0cmFuc2Zvcm0gZnJvbSBcImNvb3JkdHJhbnNmb3JtXCI7XHJcbmltcG9ydCB7IG5laWdoYm91clNpdGVTZWFyY2ggfSBmcm9tIFwiQC9hcGkvYXBpXCI7XHJcbmltcG9ydCByZXN1bHRJdGVtIGZyb20gXCJAL3ZpZXdzL3NlYXJjaC9jb21wb25lbnRzL3Jlc3VsdEl0ZW0udnVlXCI7XHJcbmltcG9ydCB7IFRvYXN0IH0gZnJvbSBcInZhbnRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcIm5laWdoYm91clwiLFxyXG4gIGNvbXBvbmVudHM6IHsgcmVzdWx0SXRlbSB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgbmVpZ2hib3VyOiBbXSxcclxuICAgICAgbWVzc2FnZTogXCJcIixcclxuICAgICAgZXJyb3I6IGZhbHNlLFxyXG4gICAgICBsb2NhdGlvbjogW10sXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgYXN5bmMgbW91bnRlZCgpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubG9jYXRlKCk7XHJcbiAgICBpZiAocmVzdWx0ID09PSBcIuWumuS9jeWksei0pVwiKSB7XHJcbiAgICAgIHRoaXMubWVzc2FnZSA9IHJlc3VsdDtcclxuICAgICAgdGhpcy5lcnJvciA9IHRydWU7XHJcbiAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5sb2NhdGlvbiA9IHJlc3VsdDtcclxuICAgICAgdGhpcy5xdWVyeU5laWdoYm91cigpO1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgbG9jYXRlKCkge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgd2luZG93LnN1Yy5sb2NhdGUubG9jYXRlKFxyXG4gICAgICAgICAgICAobG9jYXRpb24pID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhbbG9jYXRpb24uTG9uZ2l0dWRlLCBsb2NhdGlvbi5MYXRpdHVkZV0pO1xyXG4gICAgICAgICAgICAgIHJlc29sdmUoW2xvY2F0aW9uLkxvbmdpdHVkZSwgbG9jYXRpb24uTGF0aXR1ZGVdKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xyXG4gICAgICAgICAgICAgIHJlc29sdmUoXCLlrprkvY3lpLHotKVcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coZSk7XHJcbiAgICAgICAgICAvLyByZXNvbHZlKCflrprkvY3lpLHotKUnKVxyXG4gICAgICAgICAgcmVzb2x2ZShjb29yZHRyYW5zZm9ybS53Z3M4NHRvZ2NqMDIoMTAyLjgyNzk3Nzg2OTMzMTQyLCAyNC44OTEwNjc3NzQzNzI3OSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcXVlcnlOZWlnaGJvdXIoKSB7XHJcbiAgICAgIG5laWdoYm91clNpdGVTZWFyY2goe1xyXG4gICAgICAgIGxvbmdpdHVkZTogdGhpcy5sb2NhdGlvblswXSxcclxuICAgICAgICBsYXRpdHVkZTogdGhpcy5sb2NhdGlvblsxXSxcclxuICAgICAgICBudW1iZXI6IDEwMDAsXHJcbiAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHJlcy5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgIGl0ZW0ubGlzdFR5cGUgPSBpdGVtLnR5cGU7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5uZWlnaGJvdXIgPSByZXMuZGF0YTtcclxuICAgICAgICB0aGlzLmVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHRvTWFwKCkge1xyXG4gICAgICBpZiAodGhpcy5sb2NhdGlvbikge1xyXG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgIG5hbWU6IFwic3Vycm91bmRNYXBcIixcclxuICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgIGxvbmdpdHVkZTogdGhpcy5sb2NhdGlvblswXSxcclxuICAgICAgICAgICAgbGF0aXR1ZGU6IHRoaXMubG9jYXRpb25bMV0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIFRvYXN0KFwi5pyq6I635Y+W5Yiw5a6a5L2NXCIpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG4uZnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgcmVmPVwicGFnZVwiIHN0eWxlPVwib3ZlcmZsb3c6IGF1dG87IGhlaWdodDogMTAwdmg7YmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgd2hpdGUsICNmNWY2ZjgpO1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZzIGhlYWRcIj5cclxuICAgICAgPHZhbi1pY29uIG5hbWU9XCJhcnJvdy1sZWZ0XCIgQGNsaWNrPVwiYmFja1wiLz5cclxuICAgICAgPHZhbi1zZWFyY2ggdi1tb2RlbD1cInNlYXJjaFZhbHVlXCIgc2hhcGU9XCJyb3VuZFwiIHBsYWNlaG9sZGVyPVwi56m65rCU56uZ54K5IC8g5rC06LSo5pat6Z2iIC8g5rGh5p+T5rqQ5LyB5LiaXCIgc3R5bGU9XCJ3aWR0aDogMTAwJVwiXHJcbiAgICAgICAgICAgICAgICAgIHJlZj1cInNlYXJjaFwiIEBpbnB1dD1cIm9uU2VhcmNoXCIgc2hvdy1hY3Rpb24+XHJcbiAgICAgICAgPHRlbXBsYXRlICNhY3Rpb24+XHJcbiAgICAgICAgICA8ZGl2IEBjbGljaz1cIm9uU2VhcmNoXCIgc3R5bGU9XCJjb2xvcjogIzQ0N0JGQ1wiPuaQnOe0ojwvZGl2PlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDwvdmFuLXNlYXJjaD5cclxuICAgIDwvZGl2PlxyXG5cclxuXHJcbiAgICA8ZGl2IHYtaWY9XCJmaXJzdFwiIHN0eWxlPVwicGFkZGluZzogMCAxMnB4OyBtYXJnaW4tdG9wOiA4MHB4O1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicmVjZW50LXdyYXBwZXIgZnNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVjZW50LW5hbWVcIj5cclxuICAgICAgICAgIOacgOi/keaQnOe0olxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx2YW4taWNvbiBuYW1lPVwiZGVsZXRlLW9cIiBAY2xpY2s9XCJvbkNsZWFyXCIvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRhZy13cmFwcGVyXCI+XHJcbiAgICAgICAgPGRpdiB2LWZvcj1cIihpdGVtLGkpIGluIHNlYXJjaFN0b3JlXCIgQGNsaWNrPVwib25DbGlja1RhZyhpdGVtKVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhZ1wiIHYtaWY9XCJpPDdcIj57e2l0ZW19fTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRhZ1wiIHYtaWY9XCJpPj03JiZzaG93TW9yZT09PXRydWVcIj57e2l0ZW19fTwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YWdcIiBAY2xpY2s9XCJzaG93TW9yZT0hc2hvd01vcmVcIiB2LWlmPVwic2VhcmNoU3RvcmUubGVuZ3RoID49IDdcIj5cclxuICAgICAgICAgIDx2YW4taWNvbiB2LWlmPVwiIXNob3dNb3JlXCIgbmFtZT1cImFycm93LWRvd25cIi8+XHJcbiAgICAgICAgICA8dmFuLWljb24gdi1lbHNlIG5hbWU9XCJhcnJvdy11cFwiLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxuZWlnaGJvdXI+PC9uZWlnaGJvdXI+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0tPHRlbXBsYXRlIHYtZWxzZS1pZj1cIiFmaXJzdCYmIXNob3dDb21wb25lbnRcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInRhYi13cmFwcGVyXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiA4MHB4O1wiPlxyXG4gICAgICAgIDxkaXYgdi1mb3I9XCIoaXRlbSxpKSBpbiB0YWJBcnJcIiA6Y2xhc3M9XCJbJ3RhYi1pdGVtJywgaT09PXRhYkluZGV4PydhY3RpdmUnOicnXVwiIEBjbGljaz1cImNoYW5nZVRhYihpKVwiPnt7aXRlbX19XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAmbHQ7ISZuZGFzaDvnu4Tku7bmkJzntKImbmRhc2g7Jmd0O1xyXG4gICAgICA8dGVtcGxhdGUgdi1pZj1cInRhYkluZGV4PT09MFwiPlxyXG4gICAgICAgIDx2YW4tbG9hZGluZyB2LWlmPVwibG9hZGluZ1wiIHNpemU9XCIyMHB4XCIgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXI7bWFyZ2luOiAyNXB4IDBcIj7liqDovb3kuK0uLi48L3Zhbi1sb2FkaW5nPlxyXG4gICAgICAgIDx0ZW1wbGF0ZSB2LWVsc2U+XHJcbiAgICAgICAgICA8Y29tcG9uZW50c0l0ZW0gdi1mb3I9XCIoaXRlbSxpKSBpbiBsaXN0Q29tcG9uZW50c1wiIDprZXk9XCJpXCIgOml0ZW09XCJpdGVtXCIgOnNlYXJjaFZhbHVlPVwic2VhcmNoVmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEBzaG93TW9kdWxlPVwic2hvd01vZHVsZVwiIHN0eWxlPVwibWFyZ2luOiAwIDIwcHggMDtcIi8+XHJcbiAgICAgICAgICA8ZGl2IHYtaWY9XCJsaXN0Q29tcG9uZW50cy5sZW5ndGg9PTBcIiBjbGFzcz1cIm5vbmUtZGF0YVwiPuayoeacieabtOWkmuS6hjwvZGl2PlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICZsdDshJm5kYXNoO+ermeeCuS/mlq3pnaIv5LyB5Lia5ZCN56ew5pCc57SiJm5kYXNoOyZndDtcclxuICAgICAgPHZhbi1saXN0XHJcbiAgICAgICAgICB2LWlmPVwidGFiSW5kZXg9PT0xXCJcclxuICAgICAgICAgIHYtbW9kZWw9XCJsb2FkaW5nXCJcclxuICAgICAgICAgIDpmaW5pc2hlZD1cImZpbmlzaGVkXCJcclxuICAgICAgICAgIGZpbmlzaGVkLXRleHQ9XCLmsqHmnInmm7TlpJrkuoZcIlxyXG4gICAgICAgICAgQGxvYWQ9XCJvbkxvYWRcIlxyXG4gICAgICAgICAgc3R5bGU9XCJtYXJnaW46IDAgMjBweCAwO1wiXHJcbiAgICAgID5cclxuICAgICAgICA8cmVzdWx0SXRlbSB2LWZvcj1cIihpdGVtLGkpIGluIGxpc3RcIiA6a2V5PVwiaVwiIDppdGVtPVwiaXRlbVwiIDpzZWFyY2hWYWx1ZT1cInNlYXJjaFZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICBAc2hvd01vZHVsZT1cInNob3dNb2R1bGVcIj48L3Jlc3VsdEl0ZW0+XHJcbiAgICAgIDwvdmFuLWxpc3Q+XHJcbiAgICAgICZsdDshJm5kYXNoO+azleW+i+azleinhOaQnOe0oiZuZGFzaDsmZ3Q7XHJcbiAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwidGFiSW5kZXg9PT0yXCI+XHJcbiAgICAgICAgPHZhbi1sb2FkaW5nIHYtaWY9XCJsYXdMb2FkaW5nXCIgc2l6ZT1cIjIwcHhcIiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjttYXJnaW46IDI1cHggMFwiPuWKoOi9veS4rS4uLjwvdmFuLWxvYWRpbmc+XHJcbiAgICAgICAgPHRlbXBsYXRlIHYtZWxzZT5cclxuICAgICAgICAgIDxsYXdzSXRlbSB2LWZvcj1cIihpdGVtLGkpIGluIGxpc3RMYXdzXCIgOmtleT1cImlcIiA6aXRlbT1cIml0ZW1cIiA6c2VhcmNoVmFsdWU9XCJzZWFyY2hWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgQHNob3dNb2R1bGU9XCJzaG93TW9kdWxlXCIgc3R5bGU9XCJtYXJnaW46IDAgMjBweCAwO1wiLz5cclxuICAgICAgICAgIDxkaXYgdi1pZj1cImxpc3RMYXdzLmxlbmd0aD09MFwiIGNsYXNzPVwibm9uZS1kYXRhXCI+5rKh5pyJ5pu05aSa5LqGPC9kaXY+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgIDwvdGVtcGxhdGU+LS0+XHJcblxyXG4gICAgPCEtLemhuuW6j+aOkuWIly0tPlxyXG4gICAgPHRlbXBsYXRlIHYtZWxzZS1pZj1cIiFmaXJzdCYmIXNob3dDb21wb25lbnRcIj5cclxuICAgICAgPCEtLeermeeCuS/mlq3pnaIv5LyB5Lia5ZCN56ew5pCc57SiLS0+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzdWItbmFtZVwiIHN0eWxlPVwibWFyZ2luLXRvcDogNzBweFwiPuermeeCuS/mlq3pnaIv5LyB5Lia5ZCN56ewPC9kaXY+XHJcbiAgICAgIDx2YW4tbGlzdFxyXG4gICAgICAgICAgOmZpbmlzaGVkPVwiZmluaXNoZWRcIlxyXG4gICAgICAgICAgZmluaXNoZWQtdGV4dD1cIlwiXHJcbiAgICAgICAgICBAbG9hZD1cIm9uTG9hZFwiXHJcbiAgICAgICAgICBzdHlsZT1cIm1hcmdpbjogMCAyMHB4IDA7XCJcclxuXHJcbiAgICAgID5cclxuICAgICAgICA8cmVzdWx0SXRlbSB2LWZvcj1cIihpdGVtLGkpIGluIGxpc3RcIiA6a2V5PVwiaXRlbS5zaXRlTmFtZSsnJytpXCIgOml0ZW09XCJpdGVtXCIgOnNlYXJjaFZhbHVlPVwic2VhcmNoVmFsdWVcIiBAc2hvd01vZHVsZT1cInNob3dNb2R1bGVcIj48L3Jlc3VsdEl0ZW0+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwibGlzdC5sZW5ndGg9PTBcIiBjbGFzcz1cIm5vbmUtZGF0YVwiPuayoeacieabtOWkmuS6hjwvZGl2PlxyXG4gICAgICA8L3Zhbi1saXN0PlxyXG5cclxuICAgICAgPCEtLeetieermeeCueWFqOmDqOWKoOi9veWujOWQjuaYvuekuuWKn+iDveaooeWdl+WSjOefpeivhuW6ky0tPlxyXG4gICAgICA8dGVtcGxhdGU+XHJcblxyXG4gICAgICAgIDwhLS3nu4Tku7bmkJzntKItLT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3ViLW5hbWVcIj7lip/og73mqKHlnZc8L2Rpdj5cclxuICAgICAgICA8Y29tcG9uZW50c0l0ZW0gdi1mb3I9XCIoaXRlbSxpKSBpbiBsaXN0Q29tcG9uZW50c1wiIDprZXk9XCJpdGVtLnNpdGVOYW1lKycnK2lcIiA6aXRlbT1cIml0ZW1cIiA6c2VhcmNoVmFsdWU9XCJzZWFyY2hWYWx1ZVwiIEBzaG93TW9kdWxlPVwic2hvd01vZHVsZVwiIHN0eWxlPVwibWFyZ2luOiAwIDIwcHggMDtcIi8+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwibGlzdENvbXBvbmVudHMubGVuZ3RoPT0wXCIgY2xhc3M9XCJub25lLWRhdGFcIj7msqHmnInmm7TlpJrkuoY8L2Rpdj5cclxuXHJcbiAgICAgICAgPCEtLeazleW+i+azleinhOaQnOe0oi0tPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdWItbmFtZVwiPuefpeivhuW6kzwvZGl2PlxyXG4gICAgICAgIDxsYXdzSXRlbSB2LWZvcj1cIihpdGVtLGkpIGluIGxpc3RMYXdzXCIgOmtleT1cIml0ZW0uRklMRU5BTUUrJycraVwiIDppdGVtPVwiaXRlbVwiIDpzZWFyY2hWYWx1ZT1cInNlYXJjaFZhbHVlXCIgQHNob3dNb2R1bGU9XCJzaG93TW9kdWxlXCIgc3R5bGU9XCJtYXJnaW46IDAgMjBweCAwO1wiLz5cclxuICAgICAgICA8ZGl2IHYtaWY9XCJsaXN0TGF3cy5sZW5ndGg9PTBcIiBjbGFzcz1cIm5vbmUtZGF0YVwiPuayoeacieabtOWkmuS6hjwvZGl2PlxyXG5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgIDwvdGVtcGxhdGU+XHJcblxyXG4gICAgPCEtLee7hOS7tuaYvuekui0tPlxyXG4gICAgPHNlYXJjaENvbXBvbmVudHMgdi1pZj1cInNob3dDb21wb25lbnRcIiByZWY9XCJzdW1tYXJ5QWxsUmVmXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiA3MHB4XCIvPlxyXG5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHtzaXRlU2VhcmNoLCBsYXdTZWFyY2h9IGZyb20gJ0AvYXBpL2FwaS5qcydcclxuICBpbXBvcnQgbmVpZ2hib3VyIGZyb20gXCJAL3ZpZXdzL3NlYXJjaC9jb21wb25lbnRzL25laWdoYm91ci52dWVcIjtcclxuICBpbXBvcnQgcmVzdWx0SXRlbSBmcm9tIFwiQC92aWV3cy9zZWFyY2gvY29tcG9uZW50cy9yZXN1bHRJdGVtLnZ1ZVwiO1xyXG4gIGltcG9ydCBjb21wb25lbnRzSXRlbSBmcm9tIFwiQC92aWV3cy9zZWFyY2gvY29tcG9uZW50cy9jb21wb25lbnRzSXRlbVwiO1xyXG4gIGltcG9ydCBsYXdzSXRlbSBmcm9tIFwiQC92aWV3cy9zZWFyY2gvY29tcG9uZW50cy9sYXdzSXRlbVwiO1xyXG4gIGltcG9ydCBzZWFyY2hDb21wb25lbnRzIGZyb20gXCJAL3ZpZXdzL3NlYXJjaENvbXBvbmVudHMvaW5kZXgudnVlXCI7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiaW5kZXhcIixcclxuICAgIGNvbXBvbmVudHM6IHtuZWlnaGJvdXIsIHJlc3VsdEl0ZW0sIHNlYXJjaENvbXBvbmVudHMsIGNvbXBvbmVudHNJdGVtLCBsYXdzSXRlbX0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHNlYXJjaFZhbHVlOiAnJyxcclxuICAgICAgICBzZWFyY2hTdG9yZTogdGhpcy4kc3RvcmUuc3RhdGUuc2VhcmNoU3RvcmUsXHJcbiAgICAgICAgc2hvd01vcmU6IGZhbHNlLFxyXG4gICAgICAgIG5hbWVMaXN0OiBbXSxcclxuICAgICAgICBsaXN0OiBbXSwgLy/nq5nngrlcclxuICAgICAgICBsaXN0Q29tcG9uZW50czogW10sICAvL+e7hOS7tlxyXG4gICAgICAgIGxpc3RMYXdzOiBbXSwgIC8v5rOV6KeE5rOV6KeEXHJcbiAgICAgICAgbmVpZ2hib3VyOiBbXSxcclxuICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICBmaW5pc2hlZDogZmFsc2UsXHJcbiAgICAgICAgcGFnZVRvdGFsOiAwLFxyXG4gICAgICAgIHBhZ2U6IDAsXHJcbiAgICAgICAgZmlyc3Q6IHRydWUsXHJcbiAgICAgICAgc2l0ZUNvdW50cnlJbWc6IHJlcXVpcmUoJ0AvYXNzZXRzL+WbvS5wbmcnKSxcclxuICAgICAgICBpbnB1dFdhaXRUaW1lOiAwLFxyXG4gICAgICAgIHNob3dDb21wb25lbnQ6IGZhbHNlLFxyXG4gICAgICAgIHRhYkluZGV4OiAwLFxyXG4gICAgICAgIHRhYkFycjogWyfnu4Tku7YnLCAn56uZ54K5L+aWremdoi/kvIHkuJrlkI3np7AnLCAn5rOV5b6L5rOV6KeEL+eOr+Wig+agh+WHhiddLFxyXG4gICAgICAgIGxhd0xvYWRpbmc6IHRydWUsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICBzZWFyY2hWYWx1ZShuZXdEKSB7XHJcbiAgICAgICAgaWYgKG5ld0QgPT09ICcnKSB7XHJcbiAgICAgICAgICB0aGlzLmZpcnN0ID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaW5wdXQnKVswXVxyXG4gICAgICBzZWFyY2guZm9jdXMoKVxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvcmRvdmEucGx1Z2lucy5LZXlib2FyZC5zaG93KCk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuXHJcbiAgICAgIH1cclxuICAgICAgY29uc3QgbHMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2VhcmNoU3RvcmUnKVxyXG4gICAgICB0aGlzLnNlYXJjaFN0b3JlID0gbHMgPyBscy5zcGxpdCgnLCcpIDogW11cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGNoYW5nZVRhYihpbmRleCkge1xyXG4gICAgICAgIHRoaXMucGFnZSA9IDA7XHJcbiAgICAgICAgdGhpcy50YWJJbmRleCA9IGluZGV4O1xyXG4gICAgICB9LFxyXG4gICAgICAvL+afpeivouazleW+i+azleinhOeOr+S/neagh+WHhlxyXG4gICAgICBxdWVyeUxhd3MoKSB7XHJcbiAgICAgICAgLy8gdGhpcy5sYXdMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICBsYXdTZWFyY2goe1xyXG4gICAgICAgICAgbmFtZTogdGhpcy5zZWFyY2hWYWx1ZSxcclxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAvLyB0aGlzLmxhd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMubGlzdExhd3MgPSByZXMuZGF0YS5saXN0XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgY2hlY2tMYXN0SW5wdXQoKSB7XHJcbiAgICAgICAgY29uc3QgdGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRXYWl0VGltZSAhPT0gMCAmJiB0aW1lIC0gdGhpcy5pbnB1dFdhaXRUaW1lID4gNTAwXHJcbiAgICAgIH0sXHJcbiAgICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5maXJzdCkge1xyXG4gICAgICAgICAgLy8gdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIOW8guatpeabtOaWsOaVsOaNrlxyXG4gICAgICAgIHNldFRpbWVvdXQoYXN5bmMgKCkgPT4ge1xyXG5cclxuICAgICAgICAgICsrdGhpcy5wYWdlO1xyXG4gICAgICAgICAgbGV0IHRlbXBBcnIgPSBhd2FpdCB0aGlzLnF1ZXJ5TGlzdCgpO1xyXG4gICAgICAgICAgdGhpcy5saXN0Q29tcG9uZW50cyA9IHRlbXBBcnIuY29tcG9uZW50UmVjb3JkcztcclxuICAgICAgICAgIHRoaXMubGlzdCA9IFsuLi50aGlzLmxpc3QsIC4uLnRlbXBBcnIucmVjb3Jkc107XHJcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmxpc3QpXHJcblxyXG4gICAgICAgICAgLy8g5Yqg6L2954q25oCB57uT5p2fXHJcbiAgICAgICAgICAvLyB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAvLyDmlbDmja7lhajpg6jliqDovb3lrozmiJBcclxuICAgICAgICAgIGlmICh0aGlzLmxpc3QubGVuZ3RoID49IHRoaXMucGFnZVRvdGFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmluaXNoZWQgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMDApO1xyXG4gICAgICB9LFxyXG4gICAgICBxdWVyeUxpc3QoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKCgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICBzaXRlU2VhcmNoKHtcclxuICAgICAgICAgICAgcGFnZTogdGhpcy5wYWdlLFxyXG4gICAgICAgICAgICBsaW1pdDogMTAwLFxyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLnNlYXJjaFZhbHVlLFxyXG4gICAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VUb3RhbCA9IHJlcy5kYXRhLnRvdGFsO1xyXG4gICAgICAgICAgICBsZXQgdGVtcENvbXBvbmVlbnQgPSByZXMuZGF0YS5jb21wb25lbnRSZWNvcmRzO1xyXG4gICAgICAgICAgICAvL+WwhueItue6p+eahHBhcmFtZXRlcum7mOiupOS4umNoaWxkcmVuWzBd55qEZGV0YWlsc1BhcmFtZXRlclxyXG4gICAgICAgICAgICB0ZW1wQ29tcG9uZWVudC5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChpdGVtLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0ucGFyYW1ldGVyID0gaXRlbS5jaGlsZHJlblswXS5kZXRhaWxzUGFyYW1ldGVyXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAvLyBsZXQgdGVtcFJlY29yZHMgPSB0ZW1wQ29tcG9uZWVudC5jb25jYXQocmVzLmRhdGEucmVjb3Jkcyk7XHJcbiAgICAgICAgICAgIHJlc29sdmUocmVzLmRhdGEpXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pKVxyXG4gICAgICB9LFxyXG4gICAgICBvblNlYXJjaCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWFyY2hWYWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgIC8vIHRoaXMuc2VhcmNoVmFsdWUgPSB0aGlzLiRzdG9yZS5zdGF0ZS5zZWFyY2hTdG9yZVswXTtcclxuICAgICAgICAgIHRoaXMuZmlyc3QgPSB0cnVlXHJcbiAgICAgICAgICB0aGlzLnNob3dDb21wb25lbnQgPSBmYWxzZTtcclxuICAgICAgICAgIHRoaXMubGlzdCA9IFtdXHJcbiAgICAgICAgICB0aGlzLmxpc3RDb21wb25lbnRzID0gW11cclxuICAgICAgICAgIHRoaXMubGlzdExhd3MgPSBbXVxyXG4gICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrTGFzdElucHV0KCkpIHtcclxuICAgICAgICAgIHRoaXMuaW5wdXRXYWl0VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXHJcbiAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAvLyB0aGlzLiRzdG9yZS5jb21taXQoJ3NldFNlYXJjaFN0b3JlJywgdGhpcy5zZWFyY2hWYWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hTdG9yZS51bnNoaWZ0KHRoaXMuc2VhcmNoVmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoU3RvcmUgPSBBcnJheS5mcm9tKG5ldyBTZXQodGhpcy5zZWFyY2hTdG9yZSkpXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlYXJjaFN0b3JlJywgdGhpcy5zZWFyY2hTdG9yZS5qb2luKCcsJykpXHJcblxyXG4gICAgICAgIHRoaXMuZ2V0RGF0ZSgpO1xyXG4gICAgICAgIHRoaXMucXVlcnlMYXdzKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uQ2xpY2tUYWcodmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNlYXJjaFZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5nZXREYXRlKCk7XHJcbiAgICAgICAgdGhpcy5xdWVyeUxhd3MoKTtcclxuICAgICAgfSxcclxuICAgICAgZ2V0RGF0ZSgpIHtcclxuICAgICAgICB0aGlzLmZpcnN0ID0gZmFsc2U7XHJcbiAgICAgICAgLy8gdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnNob3dDb21wb25lbnQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnBhZ2UgPSAwO1xyXG4gICAgICAgIHRoaXMubGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMub25Mb2FkKCk7XHJcbiAgICAgIH0sXHJcbiAgICAgIG9uQ2xlYXIoKSB7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hTdG9yZSA9IFtdXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NlYXJjaFN0b3JlJywgJycpXHJcbiAgICAgIH0sXHJcbiAgICAgIC8v5aaC5p6c54K55Ye755qE5piv57uE5Lu2XHJcbiAgICAgIHNob3dNb2R1bGUoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuc2VhcmNoVmFsdWUgPSBkYXRhLmNvbXBvbmVudE5hbWU7IC8v5pCc57Si5qCP5piv54K55Ye757uE5Lu255qE5ZCN56ewXHJcbiAgICAgICAgdGhpcy5zaG93Q29tcG9uZW50ID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLiRyZWZzLnBhZ2Uuc2Nyb2xsVG9wID0gMDtcclxuICAgICAgICAvLyB0aGlzLmxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3NldFNlYXJjaE9iaicsIGRhdGEpO1xyXG4gICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuJHJlZnMuc3VtbWFyeUFsbFJlZi5nZXRDb21wb25lbnQoZGF0YS50eXBlLCBkYXRhLnJlc291cmNlUGF0aClcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBiYWNrKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNob3dDb21wb25lbnQpIHtcclxuICAgICAgICAgIHRoaXMuc2hvd0NvbXBvbmVudCA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLiRyb3V0ZXIuZ28oLTEpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICAudGFiLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDE2cHggYXV0byAxMHB4O1xyXG5cclxuICAgIC50YWItaXRlbSB7XHJcbiAgICAgIHdpZHRoOiAzMyU7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjgpO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgYmFja2dyb3VuZDogdXJsKFwifkAvYXNzZXRzL3BvbGx1dGlvbi10YWItYmcucG5nXCIpIG5vLXJlcGVhdDtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcclxuICAgICAgYmFja2dyb3VuZC1zaXplOiAyN3B4IDhweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zdWItbmFtZXtcclxuICAgIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuOCk7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICB9XHJcblxyXG4gIC52YW4tc2VhcmNoIHtcclxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIH1cclxuXHJcbiAgLnZhbi1zZWFyY2ggLnZhbi1jZWxsIHtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDA7XHJcbiAgfVxyXG5cclxuICAudmFuLXNlYXJjaF9fY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gIH1cclxuXHJcbiAgLmhlYWQge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIGJhY2tncm91bmQ6ICNGNUY2Rjg7XHJcbiAgICBwYWRkaW5nOiAwIDEycHg7XHJcbiAgICBib3gtc2hhZG93OiAjMDAwMDAwMWMgMCAwIDdweCAwXHJcbiAgfVxyXG5cclxuICAuZnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAucmVjZW50LXdyYXBwZXIge1xyXG4gICAgbWFyZ2luOiAxM3B4IDA7XHJcblxyXG4gICAgLnJlY2VudC1uYW1lIHtcclxuICAgICAgYmFja2dyb3VuZDogdXJsKFwifkAvYXNzZXRzL3JlY2VudC1iZy5wbmdcIikgbm8tcmVwZWF0O1xyXG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMzAlO1xyXG4gICAgICBjb2xvcjogIzEyMTIzNjtcclxuICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRhZy13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcblxyXG4gICAgLnRhZyB7XHJcbiAgICAgIHBhZGRpbmc6IDNweCAxNHB4O1xyXG4gICAgICBtYXJnaW46IDNweDtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm5vbmUtZGF0YSB7XHJcbiAgICBjb2xvcjogIzk2OTc5OTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbjwvc3R5bGU+XHJcbjxzdHlsZT5cclxuICAuc2l0ZS10YWcge1xyXG4gICAgcGFkZGluZzogM3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjkpO1xyXG4gIH1cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzZWFyY2gtc2l0ZS1pdGVtXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljU3R5bGU6IHsgXCJmb250LXNpemVcIjogXCIxNHB4XCIgfSB9LFxuICAgICAgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS50b0RldGFpbChfdm0uaXRlbSlcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInZhbi1pY29uXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tcmlnaHRcIjogXCIxMHB4XCIgfSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCJzZWFyY2hcIiwgY29sb3I6IFwiI2NjY1wiLCBzaXplOiBcIjE2XCIgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhfdm0uY29tcGFyZShfdm0uaXRlbS5jb21wb25lbnROYW1lKSksXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl9sKF92bS5pdGVtLmNoaWxkcmVuLCBmdW5jdGlvbiAoaXRlbUMpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzZWFyY2gtc2l0ZS1pdGVtLWNoaWxkcmVuXCIsXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udG9EZXRhaWwoaXRlbUMpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoX3ZtLmNvbXBhcmUoaXRlbUMuY29tcG9uZW50TmFtZSkpLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgfSksXG4gICAgICBdLFxuICAgICAgMlxuICAgICksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzZWFyY2gtc2l0ZS1pdGVtXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJmb250LXNpemVcIjogXCIxNHB4XCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS50b0RldGFpbChfdm0uaXRlbSlcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJ2YW4taWNvblwiLCB7XG4gICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tcmlnaHRcIjogXCIxMHB4XCIgfSxcbiAgICAgICAgICBhdHRyczogeyBuYW1lOiBcInNlYXJjaFwiLCBjb2xvcjogXCIjY2NjXCIsIHNpemU6IFwiMTZcIiB9LFxuICAgICAgICB9KSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICBkb21Qcm9wczogeyBpbm5lckhUTUw6IF92bS5fcyhfdm0uY29tcGFyZShfdm0uaXRlbS5GSUxFTkFNRSkpIH0sXG4gICAgICAgIH0pLFxuICAgICAgXSxcbiAgICAgIDFcbiAgICApLFxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJyZWNlbnQtd3JhcHBlciBmc1wiLFxuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLXRvcFwiOiBcIjIwcHhcIiB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyZWNlbnQtbmFtZVwiIH0sIFtfdm0uX3YoXCLlkajovrnmlbDmja7nq5nngrlcIildKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBcIiM0NDdiZmNcIixcbiAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICBcInRleHQtZGVjb3JhdGlvblwiOiBcInVuZGVybGluZVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnRvTWFwIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIuafpeeci+WcsOWbvlwiKV1cbiAgICAgICAgICApLFxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwidmFuLWxpc3RcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICBcIm1hcmdpbi10b3BcIjogXCIyMHB4XCIsXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBcIndoaXRlXCIsXG4gICAgICAgICAgICBwYWRkaW5nOiBcIjAgOHB4XCIsXG4gICAgICAgICAgICBcImJvcmRlci1yYWRpdXNcIjogXCIxMHB4XCIsXG4gICAgICAgICAgICBvdmVyZmxvdzogXCJhdXRvXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgXCJsb2FkaW5nLXRleHRcIjogXCLliqDovb3kuK1cIixcbiAgICAgICAgICAgIFwiZXJyb3ItdGV4dFwiOiBfdm0ubWVzc2FnZSxcbiAgICAgICAgICAgIGVycm9yOiBfdm0uZXJyb3IsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5sb2FkaW5nLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLmxvYWRpbmcgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImxvYWRpbmdcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBfdm0uX2woX3ZtLm5laWdoYm91ciwgZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXCJyZXN1bHRJdGVtXCIsIHsga2V5OiBpLCBhdHRyczogeyBpdGVtOiBpdGVtIH0gfSlcbiAgICAgICAgfSksXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHJlZjogXCJwYWdlXCIsXG4gICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICBvdmVyZmxvdzogXCJhdXRvXCIsXG4gICAgICAgIGhlaWdodDogXCIxMDB2aFwiLFxuICAgICAgICBiYWNrZ3JvdW5kOiBcImxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHdoaXRlLCAjZjVmNmY4KVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZzIGhlYWRcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ2YW4taWNvblwiLCB7XG4gICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcImFycm93LWxlZnRcIiB9LFxuICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5iYWNrIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXCJ2YW4tc2VhcmNoXCIsIHtcbiAgICAgICAgICAgIHJlZjogXCJzZWFyY2hcIixcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjEwMCVcIiB9LFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgc2hhcGU6IFwicm91bmRcIixcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwi56m65rCU56uZ54K5IC8g5rC06LSo5pat6Z2iIC8g5rGh5p+T5rqQ5LyB5LiaXCIsXG4gICAgICAgICAgICAgIFwic2hvdy1hY3Rpb25cIjogXCJcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjogeyBpbnB1dDogX3ZtLm9uU2VhcmNoIH0sXG4gICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGtleTogXCJhY3Rpb25cIixcbiAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCIjNDQ3QkZDXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ub25TZWFyY2ggfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLmkJzntKJcIildXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBwcm94eTogdHJ1ZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2hWYWx1ZSxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2VhcmNoVmFsdWUgPSAkJHZcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2hWYWx1ZVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5maXJzdFxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljU3R5bGU6IHsgcGFkZGluZzogXCIwIDEycHhcIiwgXCJtYXJnaW4tdG9wXCI6IFwiODBweFwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJlY2VudC13cmFwcGVyIGZzXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJlY2VudC1uYW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIg5pyA6L+R5pCc57SiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2YW4taWNvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwiZGVsZXRlLW9cIiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9uQ2xlYXIgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFnLXdyYXBwZXJcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uc2VhcmNoU3RvcmUsIGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkNsaWNrVGFnKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgaSA8IDdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICBpID49IDcgJiYgX3ZtLnNob3dNb3JlID09PSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWdcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0pKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uc2VhcmNoU3RvcmUubGVuZ3RoID49IDdcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hvd01vcmUgPSAhX3ZtLnNob3dNb3JlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uc2hvd01vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidmFuLWljb25cIiwgeyBhdHRyczogeyBuYW1lOiBcImFycm93LWRvd25cIiB9IH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcInZhbi1pY29uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJhcnJvdy11cFwiIH0gfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXCJuZWlnaGJvdXJcIiksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiAhX3ZtLmZpcnN0ICYmICFfdm0uc2hvd0NvbXBvbmVudFxuICAgICAgICA/IFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3ViLW5hbWVcIixcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi10b3BcIjogXCI3MHB4XCIgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIuermeeCuS/mlq3pnaIv5LyB5Lia5ZCN56ewXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInZhbi1saXN0XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBtYXJnaW46IFwiMCAyMHB4IDBcIiB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IGZpbmlzaGVkOiBfdm0uZmluaXNoZWQsIFwiZmluaXNoZWQtdGV4dFwiOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgb246IHsgbG9hZDogX3ZtLm9uTG9hZCB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5saXN0LCBmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwicmVzdWx0SXRlbVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogaXRlbS5zaXRlTmFtZSArIFwiXCIgKyBpLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpdGVtOiBpdGVtLCBzZWFyY2hWYWx1ZTogX3ZtLnNlYXJjaFZhbHVlIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IHNob3dNb2R1bGU6IF92bS5zaG93TW9kdWxlIH0sXG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5saXN0Lmxlbmd0aCA9PSAwXG4gICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibm9uZS1kYXRhXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuayoeacieabtOWkmuS6hlwiKSxcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3ViLW5hbWVcIiB9LCBbX3ZtLl92KFwi5Yqf6IO95qih5Z2XXCIpXSksXG4gICAgICAgICAgICAgIF92bS5fbChfdm0ubGlzdENvbXBvbmVudHMsIGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiY29tcG9uZW50c0l0ZW1cIiwge1xuICAgICAgICAgICAgICAgICAga2V5OiBpdGVtLnNpdGVOYW1lICsgXCJcIiArIGksXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBtYXJnaW46IFwiMCAyMHB4IDBcIiB9LFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaXRlbTogaXRlbSwgc2VhcmNoVmFsdWU6IF92bS5zZWFyY2hWYWx1ZSB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgc2hvd01vZHVsZTogX3ZtLnNob3dNb2R1bGUgfSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLmxpc3RDb21wb25lbnRzLmxlbmd0aCA9PSAwXG4gICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5vbmUtZGF0YVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5rKh5pyJ5pu05aSa5LqGXCIpLFxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInN1Yi1uYW1lXCIgfSwgW192bS5fdihcIuefpeivhuW6k1wiKV0pLFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLmxpc3RMYXdzLCBmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImxhd3NJdGVtXCIsIHtcbiAgICAgICAgICAgICAgICAgIGtleTogaXRlbS5GSUxFTkFNRSArIFwiXCIgKyBpLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgbWFyZ2luOiBcIjAgMjBweCAwXCIgfSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGl0ZW06IGl0ZW0sIHNlYXJjaFZhbHVlOiBfdm0uc2VhcmNoVmFsdWUgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IHNob3dNb2R1bGU6IF92bS5zaG93TW9kdWxlIH0sXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5saXN0TGF3cy5sZW5ndGggPT0gMFxuICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJub25lLWRhdGFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuayoeacieabtOWkmuS6hlwiKSxcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgXVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLnNob3dDb21wb25lbnRcbiAgICAgICAgPyBfYyhcInNlYXJjaENvbXBvbmVudHNcIiwge1xuICAgICAgICAgICAgcmVmOiBcInN1bW1hcnlBbGxSZWZcIixcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLXRvcFwiOiBcIjcwcHhcIiB9LFxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvKipcbiAqIENyZWF0ZWQgYnkgV2FuZGVyZ2lzIG9uIDIwMTUvNy84LlxuICog5o+Q5L6b5LqG55m+5bqm5Z2Q5qCH77yIQkQwOe+8ieOAgeWbvea1i+WxgOWdkOagh++8iOeBq+aYn+WdkOagh++8jEdDSjAy77yJ44CB5ZKMV0dTODTlnZDmoIfns7vkuYvpl7TnmoTovazmjaJcbiAqL1xuLy9VTUTprZTms5Xku6PnoIFcbi8vIGlmIHRoZSBtb2R1bGUgaGFzIG5vIGRlcGVuZGVuY2llcywgdGhlIGFib3ZlIHBhdHRlcm4gY2FuIGJlIHNpbXBsaWZpZWQgdG9cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgIGRlZmluZShbXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAvLyBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXRcbiAgICAvLyBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cyxcbiAgICAvLyBsaWtlIE5vZGUuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQnJvd3NlciBnbG9iYWxzIChyb290IGlzIHdpbmRvdylcbiAgICByb290LmNvb3JkdHJhbnNmb3JtID0gZmFjdG9yeSgpO1xuICB9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgLy/lrprkuYnkuIDkupvluLjph49cbiAgdmFyIHhfUEkgPSAzLjE0MTU5MjY1MzU4OTc5MzI0ICogMzAwMC4wIC8gMTgwLjA7XG4gIHZhciBQSSA9IDMuMTQxNTkyNjUzNTg5NzkzMjM4NDYyNjtcbiAgdmFyIGEgPSA2Mzc4MjQ1LjA7XG4gIHZhciBlZSA9IDAuMDA2NjkzNDIxNjIyOTY1OTQzMjM7XG4gIC8qKlxuICAgKiDnmb7luqblnZDmoIfns7sgKEJELTA5KSDkuI4g54Gr5pif5Z2Q5qCH57O7IChHQ0otMDIp55qE6L2s5o2iXG4gICAqIOWNsyDnmb7luqYg6L2sIOiwt+atjOOAgemrmOW+t1xuICAgKiBAcGFyYW0gYmRfbG9uXG4gICAqIEBwYXJhbSBiZF9sYXRcbiAgICogQHJldHVybnMgeypbXX1cbiAgICovXG4gIHZhciBiZDA5dG9nY2owMiA9IGZ1bmN0aW9uIGJkMDl0b2djajAyKGJkX2xvbiwgYmRfbGF0KSB7XG4gICAgdmFyIGJkX2xvbiA9ICtiZF9sb247XG4gICAgdmFyIGJkX2xhdCA9ICtiZF9sYXQ7XG4gICAgdmFyIHggPSBiZF9sb24gLSAwLjAwNjU7XG4gICAgdmFyIHkgPSBiZF9sYXQgLSAwLjAwNjtcbiAgICB2YXIgeiA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KSAtIDAuMDAwMDIgKiBNYXRoLnNpbih5ICogeF9QSSk7XG4gICAgdmFyIHRoZXRhID0gTWF0aC5hdGFuMih5LCB4KSAtIDAuMDAwMDAzICogTWF0aC5jb3MoeCAqIHhfUEkpO1xuICAgIHZhciBnZ19sbmcgPSB6ICogTWF0aC5jb3ModGhldGEpO1xuICAgIHZhciBnZ19sYXQgPSB6ICogTWF0aC5zaW4odGhldGEpO1xuICAgIHJldHVybiBbZ2dfbG5nLCBnZ19sYXRdXG4gIH07XG5cbiAgLyoqXG4gICAqIOeBq+aYn+WdkOagh+ezuyAoR0NKLTAyKSDkuI7nmb7luqblnZDmoIfns7sgKEJELTA5KSDnmoTovazmjaJcbiAgICog5Y2z6LC35q2M44CB6auY5b63IOi9rCDnmb7luqZcbiAgICogQHBhcmFtIGxuZ1xuICAgKiBAcGFyYW0gbGF0XG4gICAqIEByZXR1cm5zIHsqW119XG4gICAqL1xuICB2YXIgZ2NqMDJ0b2JkMDkgPSBmdW5jdGlvbiBnY2owMnRvYmQwOShsbmcsIGxhdCkge1xuICAgIHZhciBsYXQgPSArbGF0O1xuICAgIHZhciBsbmcgPSArbG5nO1xuICAgIHZhciB6ID0gTWF0aC5zcXJ0KGxuZyAqIGxuZyArIGxhdCAqIGxhdCkgKyAwLjAwMDAyICogTWF0aC5zaW4obGF0ICogeF9QSSk7XG4gICAgdmFyIHRoZXRhID0gTWF0aC5hdGFuMihsYXQsIGxuZykgKyAwLjAwMDAwMyAqIE1hdGguY29zKGxuZyAqIHhfUEkpO1xuICAgIHZhciBiZF9sbmcgPSB6ICogTWF0aC5jb3ModGhldGEpICsgMC4wMDY1O1xuICAgIHZhciBiZF9sYXQgPSB6ICogTWF0aC5zaW4odGhldGEpICsgMC4wMDY7XG4gICAgcmV0dXJuIFtiZF9sbmcsIGJkX2xhdF1cbiAgfTtcblxuICAvKipcbiAgICogV0dTODTovaxHQ2owMlxuICAgKiBAcGFyYW0gbG5nXG4gICAqIEBwYXJhbSBsYXRcbiAgICogQHJldHVybnMgeypbXX1cbiAgICovXG4gIHZhciB3Z3M4NHRvZ2NqMDIgPSBmdW5jdGlvbiB3Z3M4NHRvZ2NqMDIobG5nLCBsYXQpIHtcbiAgICB2YXIgbGF0ID0gK2xhdDtcbiAgICB2YXIgbG5nID0gK2xuZztcbiAgICBpZiAob3V0X29mX2NoaW5hKGxuZywgbGF0KSkge1xuICAgICAgcmV0dXJuIFtsbmcsIGxhdF1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGRsYXQgPSB0cmFuc2Zvcm1sYXQobG5nIC0gMTA1LjAsIGxhdCAtIDM1LjApO1xuICAgICAgdmFyIGRsbmcgPSB0cmFuc2Zvcm1sbmcobG5nIC0gMTA1LjAsIGxhdCAtIDM1LjApO1xuICAgICAgdmFyIHJhZGxhdCA9IGxhdCAvIDE4MC4wICogUEk7XG4gICAgICB2YXIgbWFnaWMgPSBNYXRoLnNpbihyYWRsYXQpO1xuICAgICAgbWFnaWMgPSAxIC0gZWUgKiBtYWdpYyAqIG1hZ2ljO1xuICAgICAgdmFyIHNxcnRtYWdpYyA9IE1hdGguc3FydChtYWdpYyk7XG4gICAgICBkbGF0ID0gKGRsYXQgKiAxODAuMCkgLyAoKGEgKiAoMSAtIGVlKSkgLyAobWFnaWMgKiBzcXJ0bWFnaWMpICogUEkpO1xuICAgICAgZGxuZyA9IChkbG5nICogMTgwLjApIC8gKGEgLyBzcXJ0bWFnaWMgKiBNYXRoLmNvcyhyYWRsYXQpICogUEkpO1xuICAgICAgdmFyIG1nbGF0ID0gbGF0ICsgZGxhdDtcbiAgICAgIHZhciBtZ2xuZyA9IGxuZyArIGRsbmc7XG4gICAgICByZXR1cm4gW21nbG5nLCBtZ2xhdF1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEdDSjAyIOi9rOaNouS4uiBXR1M4NFxuICAgKiBAcGFyYW0gbG5nXG4gICAqIEBwYXJhbSBsYXRcbiAgICogQHJldHVybnMgeypbXX1cbiAgICovXG4gIHZhciBnY2owMnRvd2dzODQgPSBmdW5jdGlvbiBnY2owMnRvd2dzODQobG5nLCBsYXQpIHtcbiAgICB2YXIgbGF0ID0gK2xhdDtcbiAgICB2YXIgbG5nID0gK2xuZztcbiAgICBpZiAob3V0X29mX2NoaW5hKGxuZywgbGF0KSkge1xuICAgICAgcmV0dXJuIFtsbmcsIGxhdF1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGRsYXQgPSB0cmFuc2Zvcm1sYXQobG5nIC0gMTA1LjAsIGxhdCAtIDM1LjApO1xuICAgICAgdmFyIGRsbmcgPSB0cmFuc2Zvcm1sbmcobG5nIC0gMTA1LjAsIGxhdCAtIDM1LjApO1xuICAgICAgdmFyIHJhZGxhdCA9IGxhdCAvIDE4MC4wICogUEk7XG4gICAgICB2YXIgbWFnaWMgPSBNYXRoLnNpbihyYWRsYXQpO1xuICAgICAgbWFnaWMgPSAxIC0gZWUgKiBtYWdpYyAqIG1hZ2ljO1xuICAgICAgdmFyIHNxcnRtYWdpYyA9IE1hdGguc3FydChtYWdpYyk7XG4gICAgICBkbGF0ID0gKGRsYXQgKiAxODAuMCkgLyAoKGEgKiAoMSAtIGVlKSkgLyAobWFnaWMgKiBzcXJ0bWFnaWMpICogUEkpO1xuICAgICAgZGxuZyA9IChkbG5nICogMTgwLjApIC8gKGEgLyBzcXJ0bWFnaWMgKiBNYXRoLmNvcyhyYWRsYXQpICogUEkpO1xuICAgICAgdmFyIG1nbGF0ID0gbGF0ICsgZGxhdDtcbiAgICAgIHZhciBtZ2xuZyA9IGxuZyArIGRsbmc7XG4gICAgICByZXR1cm4gW2xuZyAqIDIgLSBtZ2xuZywgbGF0ICogMiAtIG1nbGF0XVxuICAgIH1cbiAgfTtcblxuICB2YXIgdHJhbnNmb3JtbGF0ID0gZnVuY3Rpb24gdHJhbnNmb3JtbGF0KGxuZywgbGF0KSB7XG4gICAgdmFyIGxhdCA9ICtsYXQ7XG4gICAgdmFyIGxuZyA9ICtsbmc7XG4gICAgdmFyIHJldCA9IC0xMDAuMCArIDIuMCAqIGxuZyArIDMuMCAqIGxhdCArIDAuMiAqIGxhdCAqIGxhdCArIDAuMSAqIGxuZyAqIGxhdCArIDAuMiAqIE1hdGguc3FydChNYXRoLmFicyhsbmcpKTtcbiAgICByZXQgKz0gKDIwLjAgKiBNYXRoLnNpbig2LjAgKiBsbmcgKiBQSSkgKyAyMC4wICogTWF0aC5zaW4oMi4wICogbG5nICogUEkpKSAqIDIuMCAvIDMuMDtcbiAgICByZXQgKz0gKDIwLjAgKiBNYXRoLnNpbihsYXQgKiBQSSkgKyA0MC4wICogTWF0aC5zaW4obGF0IC8gMy4wICogUEkpKSAqIDIuMCAvIDMuMDtcbiAgICByZXQgKz0gKDE2MC4wICogTWF0aC5zaW4obGF0IC8gMTIuMCAqIFBJKSArIDMyMCAqIE1hdGguc2luKGxhdCAqIFBJIC8gMzAuMCkpICogMi4wIC8gMy4wO1xuICAgIHJldHVybiByZXRcbiAgfTtcblxuICB2YXIgdHJhbnNmb3JtbG5nID0gZnVuY3Rpb24gdHJhbnNmb3JtbG5nKGxuZywgbGF0KSB7XG4gICAgdmFyIGxhdCA9ICtsYXQ7XG4gICAgdmFyIGxuZyA9ICtsbmc7XG4gICAgdmFyIHJldCA9IDMwMC4wICsgbG5nICsgMi4wICogbGF0ICsgMC4xICogbG5nICogbG5nICsgMC4xICogbG5nICogbGF0ICsgMC4xICogTWF0aC5zcXJ0KE1hdGguYWJzKGxuZykpO1xuICAgIHJldCArPSAoMjAuMCAqIE1hdGguc2luKDYuMCAqIGxuZyAqIFBJKSArIDIwLjAgKiBNYXRoLnNpbigyLjAgKiBsbmcgKiBQSSkpICogMi4wIC8gMy4wO1xuICAgIHJldCArPSAoMjAuMCAqIE1hdGguc2luKGxuZyAqIFBJKSArIDQwLjAgKiBNYXRoLnNpbihsbmcgLyAzLjAgKiBQSSkpICogMi4wIC8gMy4wO1xuICAgIHJldCArPSAoMTUwLjAgKiBNYXRoLnNpbihsbmcgLyAxMi4wICogUEkpICsgMzAwLjAgKiBNYXRoLnNpbihsbmcgLyAzMC4wICogUEkpKSAqIDIuMCAvIDMuMDtcbiAgICByZXR1cm4gcmV0XG4gIH07XG5cbiAgLyoqXG4gICAqIOWIpOaWreaYr+WQpuWcqOWbveWGhe+8jOS4jeWcqOWbveWGheWImeS4jeWBmuWBj+enu1xuICAgKiBAcGFyYW0gbG5nXG4gICAqIEBwYXJhbSBsYXRcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICB2YXIgb3V0X29mX2NoaW5hID0gZnVuY3Rpb24gb3V0X29mX2NoaW5hKGxuZywgbGF0KSB7XG4gICAgdmFyIGxhdCA9ICtsYXQ7XG4gICAgdmFyIGxuZyA9ICtsbmc7XG4gICAgLy8g57qs5bqmMy44Nn41My41NSznu4/luqY3My42Nn4xMzUuMDUgXG4gICAgcmV0dXJuICEobG5nID4gNzMuNjYgJiYgbG5nIDwgMTM1LjA1ICYmIGxhdCA+IDMuODYgJiYgbGF0IDwgNTMuNTUpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYmQwOXRvZ2NqMDI6IGJkMDl0b2djajAyLFxuICAgIGdjajAydG9iZDA5OiBnY2owMnRvYmQwOSxcbiAgICB3Z3M4NHRvZ2NqMDI6IHdnczg0dG9nY2owMixcbiAgICBnY2owMnRvd2dzODQ6IGdjajAydG93Z3M4NFxuICB9XG59KSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBGRjI2LSBidWc6IEFycmF5QnVmZmVycyBhcmUgbm9uLWV4dGVuc2libGUsIGJ1dCBPYmplY3QuaXNFeHRlbnNpYmxlIGRvZXMgbm90IHJlcG9ydCBpdFxudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZmFpbHMoZnVuY3Rpb24gKCkge1xuICBpZiAodHlwZW9mIEFycmF5QnVmZmVyID09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgYnVmZmVyID0gbmV3IEFycmF5QnVmZmVyKDgpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaXNleHRlbnNpYmxlLCBlcy9uby1vYmplY3QtZGVmaW5lcHJvcGVydHkgLS0gc2FmZVxuICAgIGlmIChPYmplY3QuaXNFeHRlbnNpYmxlKGJ1ZmZlcikpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShidWZmZXIsICdhJywgeyB2YWx1ZTogOCB9KTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1jcmVhdGUnKTtcbnZhciBkZWZpbmVCdWlsdEluQWNjZXNzb3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluLWFjY2Vzc29yJyk7XG52YXIgZGVmaW5lQnVpbHRJbnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWlucycpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tYmluZC1jb250ZXh0Jyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1pbnN0YW5jZScpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG52YXIgaXRlcmF0ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pdGVyYXRlJyk7XG52YXIgZGVmaW5lSXRlcmF0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0b3ItZGVmaW5lJyk7XG52YXIgY3JlYXRlSXRlclJlc3VsdE9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtaXRlci1yZXN1bHQtb2JqZWN0Jyk7XG52YXIgc2V0U3BlY2llcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtc3BlY2llcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Rlc2NyaXB0b3JzJyk7XG52YXIgZmFzdEtleSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1tZXRhZGF0YScpLmZhc3RLZXk7XG52YXIgSW50ZXJuYWxTdGF0ZU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1zdGF0ZScpO1xuXG52YXIgc2V0SW50ZXJuYWxTdGF0ZSA9IEludGVybmFsU3RhdGVNb2R1bGUuc2V0O1xudmFyIGludGVybmFsU3RhdGVHZXR0ZXJGb3IgPSBJbnRlcm5hbFN0YXRlTW9kdWxlLmdldHRlckZvcjtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbiAod3JhcHBlciwgQ09OU1RSVUNUT1JfTkFNRSwgSVNfTUFQLCBBRERFUikge1xuICAgIHZhciBDb25zdHJ1Y3RvciA9IHdyYXBwZXIoZnVuY3Rpb24gKHRoYXQsIGl0ZXJhYmxlKSB7XG4gICAgICBhbkluc3RhbmNlKHRoYXQsIFByb3RvdHlwZSk7XG4gICAgICBzZXRJbnRlcm5hbFN0YXRlKHRoYXQsIHtcbiAgICAgICAgdHlwZTogQ09OU1RSVUNUT1JfTkFNRSxcbiAgICAgICAgaW5kZXg6IGNyZWF0ZShudWxsKSxcbiAgICAgICAgZmlyc3Q6IG51bGwsXG4gICAgICAgIGxhc3Q6IG51bGwsXG4gICAgICAgIHNpemU6IDBcbiAgICAgIH0pO1xuICAgICAgaWYgKCFERVNDUklQVE9SUykgdGhhdC5zaXplID0gMDtcbiAgICAgIGlmICghaXNOdWxsT3JVbmRlZmluZWQoaXRlcmFibGUpKSBpdGVyYXRlKGl0ZXJhYmxlLCB0aGF0W0FEREVSXSwgeyB0aGF0OiB0aGF0LCBBU19FTlRSSUVTOiBJU19NQVAgfSk7XG4gICAgfSk7XG5cbiAgICB2YXIgUHJvdG90eXBlID0gQ29uc3RydWN0b3IucHJvdG90eXBlO1xuXG4gICAgdmFyIGdldEludGVybmFsU3RhdGUgPSBpbnRlcm5hbFN0YXRlR2V0dGVyRm9yKENPTlNUUlVDVE9SX05BTUUpO1xuXG4gICAgdmFyIGRlZmluZSA9IGZ1bmN0aW9uICh0aGF0LCBrZXksIHZhbHVlKSB7XG4gICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoYXQpO1xuICAgICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICAgIHZhciBwcmV2aW91cywgaW5kZXg7XG4gICAgICAvLyBjaGFuZ2UgZXhpc3RpbmcgZW50cnlcbiAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICBlbnRyeS52YWx1ZSA9IHZhbHVlO1xuICAgICAgLy8gY3JlYXRlIG5ldyBlbnRyeVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3RhdGUubGFzdCA9IGVudHJ5ID0ge1xuICAgICAgICAgIGluZGV4OiBpbmRleCA9IGZhc3RLZXkoa2V5LCB0cnVlKSxcbiAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICAgICAgcHJldmlvdXM6IHByZXZpb3VzID0gc3RhdGUubGFzdCxcbiAgICAgICAgICBuZXh0OiBudWxsLFxuICAgICAgICAgIHJlbW92ZWQ6IGZhbHNlXG4gICAgICAgIH07XG4gICAgICAgIGlmICghc3RhdGUuZmlyc3QpIHN0YXRlLmZpcnN0ID0gZW50cnk7XG4gICAgICAgIGlmIChwcmV2aW91cykgcHJldmlvdXMubmV4dCA9IGVudHJ5O1xuICAgICAgICBpZiAoREVTQ1JJUFRPUlMpIHN0YXRlLnNpemUrKztcbiAgICAgICAgZWxzZSB0aGF0LnNpemUrKztcbiAgICAgICAgLy8gYWRkIHRvIGluZGV4XG4gICAgICAgIGlmIChpbmRleCAhPT0gJ0YnKSBzdGF0ZS5pbmRleFtpbmRleF0gPSBlbnRyeTtcbiAgICAgIH0gcmV0dXJuIHRoYXQ7XG4gICAgfTtcblxuICAgIHZhciBnZXRFbnRyeSA9IGZ1bmN0aW9uICh0aGF0LCBrZXkpIHtcbiAgICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhhdCk7XG4gICAgICAvLyBmYXN0IGNhc2VcbiAgICAgIHZhciBpbmRleCA9IGZhc3RLZXkoa2V5KTtcbiAgICAgIHZhciBlbnRyeTtcbiAgICAgIGlmIChpbmRleCAhPT0gJ0YnKSByZXR1cm4gc3RhdGUuaW5kZXhbaW5kZXhdO1xuICAgICAgLy8gZnJvemVuIG9iamVjdCBjYXNlXG4gICAgICBmb3IgKGVudHJ5ID0gc3RhdGUuZmlyc3Q7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm5leHQpIHtcbiAgICAgICAgaWYgKGVudHJ5LmtleSA9PT0ga2V5KSByZXR1cm4gZW50cnk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIGRlZmluZUJ1aWx0SW5zKFByb3RvdHlwZSwge1xuICAgICAgLy8gYHsgTWFwLCBTZXQgfS5wcm90b3R5cGUuY2xlYXIoKWAgbWV0aG9kc1xuICAgICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXAucHJvdG90eXBlLmNsZWFyXG4gICAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXNldC5wcm90b3R5cGUuY2xlYXJcbiAgICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgICB2YXIgc3RhdGUgPSBnZXRJbnRlcm5hbFN0YXRlKHRoYXQpO1xuICAgICAgICB2YXIgZW50cnkgPSBzdGF0ZS5maXJzdDtcbiAgICAgICAgd2hpbGUgKGVudHJ5KSB7XG4gICAgICAgICAgZW50cnkucmVtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgaWYgKGVudHJ5LnByZXZpb3VzKSBlbnRyeS5wcmV2aW91cyA9IGVudHJ5LnByZXZpb3VzLm5leHQgPSBudWxsO1xuICAgICAgICAgIGVudHJ5ID0gZW50cnkubmV4dDtcbiAgICAgICAgfVxuICAgICAgICBzdGF0ZS5maXJzdCA9IHN0YXRlLmxhc3QgPSBudWxsO1xuICAgICAgICBzdGF0ZS5pbmRleCA9IGNyZWF0ZShudWxsKTtcbiAgICAgICAgaWYgKERFU0NSSVBUT1JTKSBzdGF0ZS5zaXplID0gMDtcbiAgICAgICAgZWxzZSB0aGF0LnNpemUgPSAwO1xuICAgICAgfSxcbiAgICAgIC8vIGB7IE1hcCwgU2V0IH0ucHJvdG90eXBlLmRlbGV0ZShrZXkpYCBtZXRob2RzXG4gICAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hcC5wcm90b3R5cGUuZGVsZXRlXG4gICAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXNldC5wcm90b3R5cGUuZGVsZXRlXG4gICAgICAnZGVsZXRlJzogZnVuY3Rpb24gKGtleSkge1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhhdCk7XG4gICAgICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgIHZhciBuZXh0ID0gZW50cnkubmV4dDtcbiAgICAgICAgICB2YXIgcHJldiA9IGVudHJ5LnByZXZpb3VzO1xuICAgICAgICAgIGRlbGV0ZSBzdGF0ZS5pbmRleFtlbnRyeS5pbmRleF07XG4gICAgICAgICAgZW50cnkucmVtb3ZlZCA9IHRydWU7XG4gICAgICAgICAgaWYgKHByZXYpIHByZXYubmV4dCA9IG5leHQ7XG4gICAgICAgICAgaWYgKG5leHQpIG5leHQucHJldmlvdXMgPSBwcmV2O1xuICAgICAgICAgIGlmIChzdGF0ZS5maXJzdCA9PT0gZW50cnkpIHN0YXRlLmZpcnN0ID0gbmV4dDtcbiAgICAgICAgICBpZiAoc3RhdGUubGFzdCA9PT0gZW50cnkpIHN0YXRlLmxhc3QgPSBwcmV2O1xuICAgICAgICAgIGlmIChERVNDUklQVE9SUykgc3RhdGUuc2l6ZS0tO1xuICAgICAgICAgIGVsc2UgdGhhdC5zaXplLS07XG4gICAgICAgIH0gcmV0dXJuICEhZW50cnk7XG4gICAgICB9LFxuICAgICAgLy8gYHsgTWFwLCBTZXQgfS5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKWAgbWV0aG9kc1xuICAgICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXAucHJvdG90eXBlLmZvcmVhY2hcbiAgICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2V0LnByb3RvdHlwZS5mb3JlYWNoXG4gICAgICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGF0ID0gdW5kZWZpbmVkICovKSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IGdldEludGVybmFsU3RhdGUodGhpcyk7XG4gICAgICAgIHZhciBib3VuZEZ1bmN0aW9uID0gYmluZChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gICAgICAgIHZhciBlbnRyeTtcbiAgICAgICAgd2hpbGUgKGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uZXh0IDogc3RhdGUuZmlyc3QpIHtcbiAgICAgICAgICBib3VuZEZ1bmN0aW9uKGVudHJ5LnZhbHVlLCBlbnRyeS5rZXksIHRoaXMpO1xuICAgICAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgICAgIHdoaWxlIChlbnRyeSAmJiBlbnRyeS5yZW1vdmVkKSBlbnRyeSA9IGVudHJ5LnByZXZpb3VzO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gYHsgTWFwLCBTZXR9LnByb3RvdHlwZS5oYXMoa2V5KWAgbWV0aG9kc1xuICAgICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXAucHJvdG90eXBlLmhhc1xuICAgICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zZXQucHJvdG90eXBlLmhhc1xuICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KSB7XG4gICAgICAgIHJldHVybiAhIWdldEVudHJ5KHRoaXMsIGtleSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBkZWZpbmVCdWlsdElucyhQcm90b3R5cGUsIElTX01BUCA/IHtcbiAgICAgIC8vIGBNYXAucHJvdG90eXBlLmdldChrZXkpYCBtZXRob2RcbiAgICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbWFwLnByb3RvdHlwZS5nZXRcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgICAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGlzLCBrZXkpO1xuICAgICAgICByZXR1cm4gZW50cnkgJiYgZW50cnkudmFsdWU7XG4gICAgICB9LFxuICAgICAgLy8gYE1hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpYCBtZXRob2RcbiAgICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbWFwLnByb3RvdHlwZS5zZXRcbiAgICAgIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGRlZmluZSh0aGlzLCBrZXkgPT09IDAgPyAwIDoga2V5LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSA6IHtcbiAgICAgIC8vIGBTZXQucHJvdG90eXBlLmFkZCh2YWx1ZSlgIG1ldGhvZFxuICAgICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zZXQucHJvdG90eXBlLmFkZFxuICAgICAgYWRkOiBmdW5jdGlvbiBhZGQodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIGRlZmluZSh0aGlzLCB2YWx1ZSA9IHZhbHVlID09PSAwID8gMCA6IHZhbHVlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKERFU0NSSVBUT1JTKSBkZWZpbmVCdWlsdEluQWNjZXNzb3IoUHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gZ2V0SW50ZXJuYWxTdGF0ZSh0aGlzKS5zaXplO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfSxcbiAgc2V0U3Ryb25nOiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIENPTlNUUlVDVE9SX05BTUUsIElTX01BUCkge1xuICAgIHZhciBJVEVSQVRPUl9OQU1FID0gQ09OU1RSVUNUT1JfTkFNRSArICcgSXRlcmF0b3InO1xuICAgIHZhciBnZXRJbnRlcm5hbENvbGxlY3Rpb25TdGF0ZSA9IGludGVybmFsU3RhdGVHZXR0ZXJGb3IoQ09OU1RSVUNUT1JfTkFNRSk7XG4gICAgdmFyIGdldEludGVybmFsSXRlcmF0b3JTdGF0ZSA9IGludGVybmFsU3RhdGVHZXR0ZXJGb3IoSVRFUkFUT1JfTkFNRSk7XG4gICAgLy8gYHsgTWFwLCBTZXQgfS5wcm90b3R5cGUueyBrZXlzLCB2YWx1ZXMsIGVudHJpZXMsIEBAaXRlcmF0b3IgfSgpYCBtZXRob2RzXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1tYXAucHJvdG90eXBlLmVudHJpZXNcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hcC5wcm90b3R5cGUua2V5c1xuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtbWFwLnByb3RvdHlwZS52YWx1ZXNcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLW1hcC5wcm90b3R5cGUtQEBpdGVyYXRvclxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2V0LnByb3RvdHlwZS5lbnRyaWVzXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zZXQucHJvdG90eXBlLmtleXNcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXNldC5wcm90b3R5cGUudmFsdWVzXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zZXQucHJvdG90eXBlLUBAaXRlcmF0b3JcbiAgICBkZWZpbmVJdGVyYXRvcihDb25zdHJ1Y3RvciwgQ09OU1RSVUNUT1JfTkFNRSwgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gICAgICBzZXRJbnRlcm5hbFN0YXRlKHRoaXMsIHtcbiAgICAgICAgdHlwZTogSVRFUkFUT1JfTkFNRSxcbiAgICAgICAgdGFyZ2V0OiBpdGVyYXRlZCxcbiAgICAgICAgc3RhdGU6IGdldEludGVybmFsQ29sbGVjdGlvblN0YXRlKGl0ZXJhdGVkKSxcbiAgICAgICAga2luZDoga2luZCxcbiAgICAgICAgbGFzdDogbnVsbFxuICAgICAgfSk7XG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHN0YXRlID0gZ2V0SW50ZXJuYWxJdGVyYXRvclN0YXRlKHRoaXMpO1xuICAgICAgdmFyIGtpbmQgPSBzdGF0ZS5raW5kO1xuICAgICAgdmFyIGVudHJ5ID0gc3RhdGUubGFzdDtcbiAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgd2hpbGUgKGVudHJ5ICYmIGVudHJ5LnJlbW92ZWQpIGVudHJ5ID0gZW50cnkucHJldmlvdXM7XG4gICAgICAvLyBnZXQgbmV4dCBlbnRyeVxuICAgICAgaWYgKCFzdGF0ZS50YXJnZXQgfHwgIShzdGF0ZS5sYXN0ID0gZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm5leHQgOiBzdGF0ZS5zdGF0ZS5maXJzdCkpIHtcbiAgICAgICAgLy8gb3IgZmluaXNoIHRoZSBpdGVyYXRpb25cbiAgICAgICAgc3RhdGUudGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QodW5kZWZpbmVkLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIC8vIHJldHVybiBzdGVwIGJ5IGtpbmRcbiAgICAgIGlmIChraW5kID09PSAna2V5cycpIHJldHVybiBjcmVhdGVJdGVyUmVzdWx0T2JqZWN0KGVudHJ5LmtleSwgZmFsc2UpO1xuICAgICAgaWYgKGtpbmQgPT09ICd2YWx1ZXMnKSByZXR1cm4gY3JlYXRlSXRlclJlc3VsdE9iamVjdChlbnRyeS52YWx1ZSwgZmFsc2UpO1xuICAgICAgcmV0dXJuIGNyZWF0ZUl0ZXJSZXN1bHRPYmplY3QoW2VudHJ5LmtleSwgZW50cnkudmFsdWVdLCBmYWxzZSk7XG4gICAgfSwgSVNfTUFQID8gJ2VudHJpZXMnIDogJ3ZhbHVlcycsICFJU19NQVAsIHRydWUpO1xuXG4gICAgLy8gYHsgTWFwLCBTZXQgfS5wcm90b3R5cGVbQEBzcGVjaWVzXWAgYWNjZXNzb3JzXG4gICAgLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1nZXQtbWFwLUBAc3BlY2llc1xuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtZ2V0LXNldC1AQHNwZWNpZXNcbiAgICBzZXRTcGVjaWVzKENPTlNUUlVDVE9SX05BTUUpO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgZ2xvYmFsVGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nbG9iYWwtdGhpcycpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGlzRm9yY2VkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWZvcmNlZCcpO1xudmFyIGRlZmluZUJ1aWx0SW4gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZGVmaW5lLWJ1aWx0LWluJyk7XG52YXIgSW50ZXJuYWxNZXRhZGF0YU1vZHVsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pbnRlcm5hbC1tZXRhZGF0YScpO1xudmFyIGl0ZXJhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXRlcmF0ZScpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4taW5zdGFuY2UnKTtcbnZhciBpc0NhbGxhYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLWNhbGxhYmxlJyk7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jaGVjay1jb3JyZWN0bmVzcy1vZi1pdGVyYXRpb24nKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGluaGVyaXRJZlJlcXVpcmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2luaGVyaXQtaWYtcmVxdWlyZWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ09OU1RSVUNUT1JfTkFNRSwgd3JhcHBlciwgY29tbW9uKSB7XG4gIHZhciBJU19NQVAgPSBDT05TVFJVQ1RPUl9OQU1FLmluZGV4T2YoJ01hcCcpICE9PSAtMTtcbiAgdmFyIElTX1dFQUsgPSBDT05TVFJVQ1RPUl9OQU1FLmluZGV4T2YoJ1dlYWsnKSAhPT0gLTE7XG4gIHZhciBBRERFUiA9IElTX01BUCA/ICdzZXQnIDogJ2FkZCc7XG4gIHZhciBOYXRpdmVDb25zdHJ1Y3RvciA9IGdsb2JhbFRoaXNbQ09OU1RSVUNUT1JfTkFNRV07XG4gIHZhciBOYXRpdmVQcm90b3R5cGUgPSBOYXRpdmVDb25zdHJ1Y3RvciAmJiBOYXRpdmVDb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIHZhciBDb25zdHJ1Y3RvciA9IE5hdGl2ZUNvbnN0cnVjdG9yO1xuICB2YXIgZXhwb3J0ZWQgPSB7fTtcblxuICB2YXIgZml4TWV0aG9kID0gZnVuY3Rpb24gKEtFWSkge1xuICAgIHZhciB1bmN1cnJpZWROYXRpdmVNZXRob2QgPSB1bmN1cnJ5VGhpcyhOYXRpdmVQcm90b3R5cGVbS0VZXSk7XG4gICAgZGVmaW5lQnVpbHRJbihOYXRpdmVQcm90b3R5cGUsIEtFWSxcbiAgICAgIEtFWSA9PT0gJ2FkZCcgPyBmdW5jdGlvbiBhZGQodmFsdWUpIHtcbiAgICAgICAgdW5jdXJyaWVkTmF0aXZlTWV0aG9kKHRoaXMsIHZhbHVlID09PSAwID8gMCA6IHZhbHVlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9IDogS0VZID09PSAnZGVsZXRlJyA/IGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGtleSkgPyBmYWxzZSA6IHVuY3VycmllZE5hdGl2ZU1ldGhvZCh0aGlzLCBrZXkgPT09IDAgPyAwIDoga2V5KTtcbiAgICAgIH0gOiBLRVkgPT09ICdnZXQnID8gZnVuY3Rpb24gZ2V0KGtleSkge1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3Qoa2V5KSA/IHVuZGVmaW5lZCA6IHVuY3VycmllZE5hdGl2ZU1ldGhvZCh0aGlzLCBrZXkgPT09IDAgPyAwIDoga2V5KTtcbiAgICAgIH0gOiBLRVkgPT09ICdoYXMnID8gZnVuY3Rpb24gaGFzKGtleSkge1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3Qoa2V5KSA/IGZhbHNlIDogdW5jdXJyaWVkTmF0aXZlTWV0aG9kKHRoaXMsIGtleSA9PT0gMCA/IDAgOiBrZXkpO1xuICAgICAgfSA6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKSB7XG4gICAgICAgIHVuY3VycmllZE5hdGl2ZU1ldGhvZCh0aGlzLCBrZXkgPT09IDAgPyAwIDoga2V5LCB2YWx1ZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgICk7XG4gIH07XG5cbiAgdmFyIFJFUExBQ0UgPSBpc0ZvcmNlZChcbiAgICBDT05TVFJVQ1RPUl9OQU1FLFxuICAgICFpc0NhbGxhYmxlKE5hdGl2ZUNvbnN0cnVjdG9yKSB8fCAhKElTX1dFQUsgfHwgTmF0aXZlUHJvdG90eXBlLmZvckVhY2ggJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICAgIG5ldyBOYXRpdmVDb25zdHJ1Y3RvcigpLmVudHJpZXMoKS5uZXh0KCk7XG4gICAgfSkpXG4gICk7XG5cbiAgaWYgKFJFUExBQ0UpIHtcbiAgICAvLyBjcmVhdGUgY29sbGVjdGlvbiBjb25zdHJ1Y3RvclxuICAgIENvbnN0cnVjdG9yID0gY29tbW9uLmdldENvbnN0cnVjdG9yKHdyYXBwZXIsIENPTlNUUlVDVE9SX05BTUUsIElTX01BUCwgQURERVIpO1xuICAgIEludGVybmFsTWV0YWRhdGFNb2R1bGUuZW5hYmxlKCk7XG4gIH0gZWxzZSBpZiAoaXNGb3JjZWQoQ09OU1RSVUNUT1JfTkFNRSwgdHJ1ZSkpIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQ29uc3RydWN0b3IoKTtcbiAgICAvLyBlYXJseSBpbXBsZW1lbnRhdGlvbnMgbm90IHN1cHBvcnRzIGNoYWluaW5nXG4gICAgdmFyIEhBU05UX0NIQUlOSU5HID0gaW5zdGFuY2VbQURERVJdKElTX1dFQUsgPyB7fSA6IC0wLCAxKSAhPT0gaW5zdGFuY2U7XG4gICAgLy8gVjggfiBDaHJvbWl1bSA0MC0gd2Vhay1jb2xsZWN0aW9ucyB0aHJvd3Mgb24gcHJpbWl0aXZlcywgYnV0IHNob3VsZCByZXR1cm4gZmFsc2VcbiAgICB2YXIgVEhST1dTX09OX1BSSU1JVElWRVMgPSBmYWlscyhmdW5jdGlvbiAoKSB7IGluc3RhbmNlLmhhcygxKTsgfSk7XG4gICAgLy8gbW9zdCBlYXJseSBpbXBsZW1lbnRhdGlvbnMgZG9lc24ndCBzdXBwb3J0cyBpdGVyYWJsZXMsIG1vc3QgbW9kZXJuIC0gbm90IGNsb3NlIGl0IGNvcnJlY3RseVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXcgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgICB2YXIgQUNDRVBUX0lURVJBQkxFUyA9IGNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbihmdW5jdGlvbiAoaXRlcmFibGUpIHsgbmV3IE5hdGl2ZUNvbnN0cnVjdG9yKGl0ZXJhYmxlKTsgfSk7XG4gICAgLy8gZm9yIGVhcmx5IGltcGxlbWVudGF0aW9ucyAtMCBhbmQgKzAgbm90IHRoZSBzYW1lXG4gICAgdmFyIEJVR0dZX1pFUk8gPSAhSVNfV0VBSyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBWOCB+IENocm9taXVtIDQyLSBmYWlscyBvbmx5IHdpdGggNSsgZWxlbWVudHNcbiAgICAgIHZhciAkaW5zdGFuY2UgPSBuZXcgTmF0aXZlQ29uc3RydWN0b3IoKTtcbiAgICAgIHZhciBpbmRleCA9IDU7XG4gICAgICB3aGlsZSAoaW5kZXgtLSkgJGluc3RhbmNlW0FEREVSXShpbmRleCwgaW5kZXgpO1xuICAgICAgcmV0dXJuICEkaW5zdGFuY2UuaGFzKC0wKTtcbiAgICB9KTtcblxuICAgIGlmICghQUNDRVBUX0lURVJBQkxFUykge1xuICAgICAgQ29uc3RydWN0b3IgPSB3cmFwcGVyKGZ1bmN0aW9uIChkdW1teSwgaXRlcmFibGUpIHtcbiAgICAgICAgYW5JbnN0YW5jZShkdW1teSwgTmF0aXZlUHJvdG90eXBlKTtcbiAgICAgICAgdmFyIHRoYXQgPSBpbmhlcml0SWZSZXF1aXJlZChuZXcgTmF0aXZlQ29uc3RydWN0b3IoKSwgZHVtbXksIENvbnN0cnVjdG9yKTtcbiAgICAgICAgaWYgKCFpc051bGxPclVuZGVmaW5lZChpdGVyYWJsZSkpIGl0ZXJhdGUoaXRlcmFibGUsIHRoYXRbQURERVJdLCB7IHRoYXQ6IHRoYXQsIEFTX0VOVFJJRVM6IElTX01BUCB9KTtcbiAgICAgICAgcmV0dXJuIHRoYXQ7XG4gICAgICB9KTtcbiAgICAgIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IE5hdGl2ZVByb3RvdHlwZTtcbiAgICAgIE5hdGl2ZVByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IENvbnN0cnVjdG9yO1xuICAgIH1cblxuICAgIGlmIChUSFJPV1NfT05fUFJJTUlUSVZFUyB8fCBCVUdHWV9aRVJPKSB7XG4gICAgICBmaXhNZXRob2QoJ2RlbGV0ZScpO1xuICAgICAgZml4TWV0aG9kKCdoYXMnKTtcbiAgICAgIElTX01BUCAmJiBmaXhNZXRob2QoJ2dldCcpO1xuICAgIH1cblxuICAgIGlmIChCVUdHWV9aRVJPIHx8IEhBU05UX0NIQUlOSU5HKSBmaXhNZXRob2QoQURERVIpO1xuXG4gICAgLy8gd2VhayBjb2xsZWN0aW9ucyBzaG91bGQgbm90IGNvbnRhaW5zIC5jbGVhciBtZXRob2RcbiAgICBpZiAoSVNfV0VBSyAmJiBOYXRpdmVQcm90b3R5cGUuY2xlYXIpIGRlbGV0ZSBOYXRpdmVQcm90b3R5cGUuY2xlYXI7XG4gIH1cblxuICBleHBvcnRlZFtDT05TVFJVQ1RPUl9OQU1FXSA9IENvbnN0cnVjdG9yO1xuICAkKHsgZ2xvYmFsOiB0cnVlLCBjb25zdHJ1Y3RvcjogdHJ1ZSwgZm9yY2VkOiBDb25zdHJ1Y3RvciAhPT0gTmF0aXZlQ29uc3RydWN0b3IgfSwgZXhwb3J0ZWQpO1xuXG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBDT05TVFJVQ1RPUl9OQU1FKTtcblxuICBpZiAoIUlTX1dFQUspIGNvbW1vbi5zZXRTdHJvbmcoQ29uc3RydWN0b3IsIENPTlNUUlVDVE9SX05BTUUsIElTX01BUCk7XG5cbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaXNleHRlbnNpYmxlLCBlcy9uby1vYmplY3QtcHJldmVudGV4dGVuc2lvbnMgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgcmV0dXJuIE9iamVjdC5pc0V4dGVuc2libGUoT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKHt9KSk7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIHVuY3VycnlUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLXVuY3VycnktdGhpcycpO1xudmFyIGhpZGRlbktleXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGlkZGVuLWtleXMnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBoYXNPd24gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaGFzLW93bi1wcm9wZXJ0eScpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL29iamVjdC1kZWZpbmUtcHJvcGVydHknKS5mO1xudmFyIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzRXh0ZXJuYWxNb2R1bGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWdldC1vd24tcHJvcGVydHktbmFtZXMtZXh0ZXJuYWwnKTtcbnZhciBpc0V4dGVuc2libGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvb2JqZWN0LWlzLWV4dGVuc2libGUnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdWlkJyk7XG52YXIgRlJFRVpJTkcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnJlZXppbmcnKTtcblxudmFyIFJFUVVJUkVEID0gZmFsc2U7XG52YXIgTUVUQURBVEEgPSB1aWQoJ21ldGEnKTtcbnZhciBpZCA9IDA7XG5cbnZhciBzZXRNZXRhZGF0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBkZWZpbmVQcm9wZXJ0eShpdCwgTUVUQURBVEEsIHsgdmFsdWU6IHtcbiAgICBvYmplY3RJRDogJ08nICsgaWQrKywgLy8gb2JqZWN0IElEXG4gICAgd2Vha0RhdGE6IHt9ICAgICAgICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgSURzXG4gIH0gfSk7XG59O1xuXG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBhIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYgKCFoYXNPd24oaXQsIE1FVEFEQVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhZGF0YShpdCk7XG4gIC8vIHJldHVybiBvYmplY3QgSURcbiAgfSByZXR1cm4gaXRbTUVUQURBVEFdLm9iamVjdElEO1xufTtcblxudmFyIGdldFdlYWtEYXRhID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXNPd24oaXQsIE1FVEFEQVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBtZXRhZGF0YVxuICAgIGlmICghY3JlYXRlKSByZXR1cm4gZmFsc2U7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhZGF0YShpdCk7XG4gIC8vIHJldHVybiB0aGUgc3RvcmUgb2Ygd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSByZXR1cm4gaXRbTUVUQURBVEFdLndlYWtEYXRhO1xufTtcblxuLy8gYWRkIG1ldGFkYXRhIG9uIGZyZWV6ZS1mYW1pbHkgbWV0aG9kcyBjYWxsaW5nXG52YXIgb25GcmVlemUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKEZSRUVaSU5HICYmIFJFUVVJUkVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhc093bihpdCwgTUVUQURBVEEpKSBzZXRNZXRhZGF0YShpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cbnZhciBlbmFibGUgPSBmdW5jdGlvbiAoKSB7XG4gIG1ldGEuZW5hYmxlID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xuICBSRVFVSVJFRCA9IHRydWU7XG4gIHZhciBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZ2V0T3duUHJvcGVydHlOYW1lc01vZHVsZS5mO1xuICB2YXIgc3BsaWNlID0gdW5jdXJyeVRoaXMoW10uc3BsaWNlKTtcbiAgdmFyIHRlc3QgPSB7fTtcbiAgdGVzdFtNRVRBREFUQV0gPSAxO1xuXG4gIC8vIHByZXZlbnQgZXhwb3Npbmcgb2YgbWV0YWRhdGEga2V5XG4gIGlmIChnZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QpLmxlbmd0aCkge1xuICAgIGdldE93blByb3BlcnR5TmFtZXNNb2R1bGUuZiA9IGZ1bmN0aW9uIChpdCkge1xuICAgICAgdmFyIHJlc3VsdCA9IGdldE93blByb3BlcnR5TmFtZXMoaXQpO1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IHJlc3VsdC5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAocmVzdWx0W2ldID09PSBNRVRBREFUQSkge1xuICAgICAgICAgIHNwbGljZShyZXN1bHQsIGksIDEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9IHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgICQoeyB0YXJnZXQ6ICdPYmplY3QnLCBzdGF0OiB0cnVlLCBmb3JjZWQ6IHRydWUgfSwge1xuICAgICAgZ2V0T3duUHJvcGVydHlOYW1lczogZ2V0T3duUHJvcGVydHlOYW1lc0V4dGVybmFsTW9kdWxlLmZcbiAgICB9KTtcbiAgfVxufTtcblxudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgZW5hYmxlOiBlbmFibGUsXG4gIGZhc3RLZXk6IGZhc3RLZXksXG4gIGdldFdlYWtEYXRhOiBnZXRXZWFrRGF0YSxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuXG5oaWRkZW5LZXlzW01FVEFEQVRBXSA9IHRydWU7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NsYXNzb2YtcmF3Jyk7XG52YXIgQVJSQVlfQlVGRkVSX05PTl9FWFRFTlNJQkxFID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWJ1ZmZlci1ub24tZXh0ZW5zaWJsZScpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWlzZXh0ZW5zaWJsZSAtLSBzYWZlXG52YXIgJGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGU7XG52YXIgRkFJTFNfT05fUFJJTUlUSVZFUyA9IGZhaWxzKGZ1bmN0aW9uICgpIHsgJGlzRXh0ZW5zaWJsZSgxKTsgfSk7XG5cbi8vIGBPYmplY3QuaXNFeHRlbnNpYmxlYCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtb2JqZWN0LmlzZXh0ZW5zaWJsZVxubW9kdWxlLmV4cG9ydHMgPSAoRkFJTFNfT05fUFJJTUlUSVZFUyB8fCBBUlJBWV9CVUZGRVJfTk9OX0VYVEVOU0lCTEUpID8gZnVuY3Rpb24gaXNFeHRlbnNpYmxlKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gZmFsc2U7XG4gIGlmIChBUlJBWV9CVUZGRVJfTk9OX0VYVEVOU0lCTEUgJiYgY2xhc3NvZihpdCkgPT09ICdBcnJheUJ1ZmZlcicpIHJldHVybiBmYWxzZTtcbiAgcmV0dXJuICRpc0V4dGVuc2libGUgPyAkaXNFeHRlbnNpYmxlKGl0KSA6IHRydWU7XG59IDogJGlzRXh0ZW5zaWJsZTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZyb20gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktZnJvbScpO1xudmFyIGNoZWNrQ29ycmVjdG5lc3NPZkl0ZXJhdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jaGVjay1jb3JyZWN0bmVzcy1vZi1pdGVyYXRpb24nKTtcblxudmFyIElOQ09SUkVDVF9JVEVSQVRJT04gPSAhY2hlY2tDb3JyZWN0bmVzc09mSXRlcmF0aW9uKGZ1bmN0aW9uIChpdGVyYWJsZSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktZnJvbSAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICBBcnJheS5mcm9tKGl0ZXJhYmxlKTtcbn0pO1xuXG4vLyBgQXJyYXkuZnJvbWAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LmZyb21cbiQoeyB0YXJnZXQ6ICdBcnJheScsIHN0YXQ6IHRydWUsIGZvcmNlZDogSU5DT1JSRUNUX0lURVJBVElPTiB9LCB7XG4gIGZyb206IGZyb21cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gVE9ETzogUmVtb3ZlIGZyb20gYGNvcmUtanNANGAgc2luY2UgaXQncyBtb3ZlZCB0byBlbnRyeSBwb2ludHNcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXMucmVnZXhwLmV4ZWMnKTtcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tY2FsbCcpO1xudmFyIGlzQ2FsbGFibGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtY2FsbGFibGUnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hbi1vYmplY3QnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1zdHJpbmcnKTtcblxudmFyIERFTEVHQVRFU19UT19FWEVDID0gZnVuY3Rpb24gKCkge1xuICB2YXIgZXhlY0NhbGxlZCA9IGZhbHNlO1xuICB2YXIgcmUgPSAvW2FjXS87XG4gIHJlLmV4ZWMgPSBmdW5jdGlvbiAoKSB7XG4gICAgZXhlY0NhbGxlZCA9IHRydWU7XG4gICAgcmV0dXJuIC8uLy5leGVjLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG4gIHJldHVybiByZS50ZXN0KCdhYmMnKSA9PT0gdHJ1ZSAmJiBleGVjQ2FsbGVkO1xufSgpO1xuXG52YXIgbmF0aXZlVGVzdCA9IC8uLy50ZXN0O1xuXG4vLyBgUmVnRXhwLnByb3RvdHlwZS50ZXN0YCBtZXRob2Rcbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS50ZXN0XG4kKHsgdGFyZ2V0OiAnUmVnRXhwJywgcHJvdG86IHRydWUsIGZvcmNlZDogIURFTEVHQVRFU19UT19FWEVDIH0sIHtcbiAgdGVzdDogZnVuY3Rpb24gKFMpIHtcbiAgICB2YXIgUiA9IGFuT2JqZWN0KHRoaXMpO1xuICAgIHZhciBzdHJpbmcgPSB0b1N0cmluZyhTKTtcbiAgICB2YXIgZXhlYyA9IFIuZXhlYztcbiAgICBpZiAoIWlzQ2FsbGFibGUoZXhlYykpIHJldHVybiBjYWxsKG5hdGl2ZVRlc3QsIFIsIHN0cmluZyk7XG4gICAgdmFyIHJlc3VsdCA9IGNhbGwoZXhlYywgUiwgc3RyaW5nKTtcbiAgICBpZiAocmVzdWx0ID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgYW5PYmplY3QocmVzdWx0KTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY29sbGVjdGlvbiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb2xsZWN0aW9uJyk7XG52YXIgY29sbGVjdGlvblN0cm9uZyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jb2xsZWN0aW9uLXN0cm9uZycpO1xuXG4vLyBgU2V0YCBjb25zdHJ1Y3RvclxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zZXQtb2JqZWN0c1xuY29sbGVjdGlvbignU2V0JywgZnVuY3Rpb24gKGluaXQpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIFNldCgpIHsgcmV0dXJuIGluaXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCBjb2xsZWN0aW9uU3Ryb25nKTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIFRPRE86IFJlbW92ZSB0aGlzIG1vZHVsZSBmcm9tIGBjb3JlLWpzQDRgIHNpbmNlIGl0J3MgcmVwbGFjZWQgdG8gbW9kdWxlIGJlbG93XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzLnNldC5jb25zdHJ1Y3RvcicpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5zaXRlLXRhZyB7XFxuICBwYWRkaW5nOiAzcHg7XFxuICBib3JkZXItcmFkaXVzOiAycHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XFxufVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnNlYXJjaC1zaXRlLWl0ZW1bZGF0YS12LTYwZTdkZjU2XSB7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSgxOCwgMTgsIDU0LCAwLjA0KTtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbn1cXG4uc2VhcmNoLXNpdGUtaXRlbSAuc2VhcmNoLXNpdGUtaXRlbS1jaGlsZHJlbltkYXRhLXYtNjBlN2RmNTZdIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbiAgcGFkZGluZy10b3A6IDE1cHg7XFxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XFxuICBib3JkZXItbGVmdDogMXB4IGRhc2hlZCAjNDQ3YmZjO1xcbiAgY29sb3I6ICM2NjY7XFxufVxcbi5zZWFyY2gtc2l0ZS1pdGVtIC5zZWFyY2gtc2l0ZS1pdGVtLWNoaWxkcmVuW2RhdGEtdi02MGU3ZGY1Nl06OmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgIzQ0N2JmYztcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc2VhcmNoLXNpdGUtaXRlbVtkYXRhLXYtM2YxMjNjNTBdIHtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE4LCAxOCwgNTQsIDAuMDQpO1xcbiAgY29sb3I6ICMwMDAwMDA7XFxufVxcbi5zZWFyY2gtc2l0ZS1pdGVtIC5zZWFyY2gtc2l0ZS1pdGVtLWNoaWxkcmVuW2RhdGEtdi0zZjEyM2M1MF0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICBwYWRkaW5nLXRvcDogMTVweDtcXG4gIHBhZGRpbmctbGVmdDogMzBweDtcXG4gIGJvcmRlci1sZWZ0OiAxcHggZGFzaGVkICM0NDdiZmM7XFxuICBjb2xvcjogIzY2NjtcXG59XFxuLnNlYXJjaC1zaXRlLWl0ZW0gLnNlYXJjaC1zaXRlLWl0ZW0tY2hpbGRyZW5bZGF0YS12LTNmMTIzYzUwXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDEwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjNDQ3YmZjO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5mc1tkYXRhLXYtNjA3NDc2N2VdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCJAL2Fzc2V0cy9wb2xsdXRpb24tdGFiLWJnLnBuZ1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IHJlcXVpcmUoXCJAL2Fzc2V0cy9yZWNlbnQtYmcucG5nXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRhYi13cmFwcGVyW2RhdGEtdi1hMGZkNTU3Nl0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBtYXJnaW46IDE2cHggYXV0byAxMHB4O1xcbn1cXG4udGFiLXdyYXBwZXIgLnRhYi1pdGVtW2RhdGEtdi1hMGZkNTU3Nl0ge1xcbiAgd2lkdGg6IDMzJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBmb250LXNpemU6IDEzcHg7XFxufVxcbi50YWItd3JhcHBlciAuYWN0aXZlW2RhdGEtdi1hMGZkNTU3Nl0ge1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC44KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xcbiAgYmFja2dyb3VuZC1zaXplOiAyN3B4IDhweDtcXG59XFxuLnN1Yi1uYW1lW2RhdGEtdi1hMGZkNTU3Nl0ge1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC44KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4udmFuLXNlYXJjaFtkYXRhLXYtYTBmZDU1NzZdIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG4udmFuLXNlYXJjaCAudmFuLWNlbGxbZGF0YS12LWEwZmQ1NTc2XSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBwYWRkaW5nOiA4cHggOHB4IDhweCAwO1xcbn1cXG4udmFuLXNlYXJjaF9fY29udGVudFtkYXRhLXYtYTBmZDU1NzZdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxufVxcbi5oZWFkW2RhdGEtdi1hMGZkNTU3Nl0ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgei1pbmRleDogMjtcXG4gIGJhY2tncm91bmQ6ICNGNUY2Rjg7XFxuICBwYWRkaW5nOiAwIDEycHg7XFxuICBib3gtc2hhZG93OiAjMDAwMDAwMWMgMCAwIDdweCAwO1xcbn1cXG4uZnNbZGF0YS12LWEwZmQ1NTc2XSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLnJlY2VudC13cmFwcGVyW2RhdGEtdi1hMGZkNTU3Nl0ge1xcbiAgbWFyZ2luOiAxM3B4IDA7XFxufVxcbi5yZWNlbnQtd3JhcHBlciAucmVjZW50LW5hbWVbZGF0YS12LWEwZmQ1NTc2XSB7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlciBib3R0b207XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMzAlO1xcbiAgY29sb3I6ICMxMjEyMzY7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi50YWctd3JhcHBlcltkYXRhLXYtYTBmZDU1NzZdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxufVxcbi50YWctd3JhcHBlciAudGFnW2RhdGEtdi1hMGZkNTU3Nl0ge1xcbiAgcGFkZGluZzogM3B4IDE0cHg7XFxuICBtYXJnaW46IDNweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLm5vbmUtZGF0YVtkYXRhLXYtYTBmZDU1NzZdIHtcXG4gIGNvbG9yOiAjOTY5Nzk5O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNy1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy1vbmVPZi0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZsYW5nPWNzcyZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiM2ZmY2ZiN2VcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS03LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmxhbmc9Y3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS03LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmxhbmc9Y3NzJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29tcG9uZW50c0l0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjBlN2RmNTYmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI0YTJlNzdhNlwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbXBvbmVudHNJdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYwZTdkZjU2JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29tcG9uZW50c0l0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjBlN2RmNTYmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGF3c0l0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2YxMjNjNTAmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJjN2QyMDY1NFwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xhd3NJdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNmMTIzYzUwJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGF3c0l0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2YxMjNjNTAmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbmVpZ2hib3VyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYwNzQ3NjdlJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMjUzYjliN2RcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9uZWlnaGJvdXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjA3NDc2N2Umc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9uZWlnaGJvdXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjA3NDc2N2Umc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTBmZDU1NzYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI4MDhmODM3MFwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWEwZmQ1NTc2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTBmZDU1NzYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFEY0FBQUFRQ0FZQUFBQ3ljdWZJQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBRG5TVVJCVkVpSjNaVFJhY1JBREVUZmFOZWtnT3ZoZXNoZndsV1ZqNEFURE5lVUE1YzIwc01WRUlpdGZLd1Z1NEE3VERTdzdFcXNCZzBTSXpZNHZmb2p6c0dZekNjcW9rb1VvTHFvUUdXYUsxWUtMREZ6dTkwSzJzU3k5bWYyU3RSS0JieTk1OGl4Y2luK2E4bHA1V1BoaS9yZzgwM2NqaUYvRzRldTE1K3czby84Y0FUNDkrSUE1TTlHWGp5dDRpWU9Pelp5RjZ6aVBKZTRjZWg2QXppOWVDcGhnVGE1aDF4VEF5NndYY3RNa0g5Q2lFdG9KaERpa3BrSm1kZHlITG9MZ0dWMVNnREw2cFNRY1MwWHB3UXd2cm51MmNzOVlSOW5YYWw4N2QzSVRlRCtQZzVkSCtFdlBORk5OUk5YeTQ0QUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUlBQUFBQU1DQVlBQUFDcVRMVm9BQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFET1NVUkJWRmlGN1pKTFRzUXdFRVNmcStjREd3NHlwK1N3bklEbGpPeGk0U1E0UzloMlB5bEt5aXJiSGVrMS9vRS9FU0FlRC9IMUhmU1hHRjM0UTl5ZXdSakNYWGlJOXpmeDdJRTlzMi9pYnZFYUFVUFk0bnFkN3o0Q0xId1JGd3NzdWdQSE9XUGhFT0U1eDNDQWhKaWQwOXFXYldIRmIwWjQ2WGpidTNlOC9TTVdia0ZiTWhJNFprYlE5bnZqYjUwbUdzTDcydFk1MXBZTys3eHRmaCtkWlEvcldVZG51ZlAwQkhQSUlqTWxRSEpLZ09TVUFNa3BBWkpUQWlTbkJFaE9DWkNjRWlBNUpVQnlTb0RrL0FCVk5sVzhndVdSbGdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY29tcG9uZW50c0l0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYwZTdkZjU2JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NvbXBvbmVudHNJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vY29tcG9uZW50c0l0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2NvbXBvbmVudHNJdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYwZTdkZjU2JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNjBlN2RmNTZcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNjBlN2RmNTYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNjBlN2RmNTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNjBlN2RmNTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2NvbXBvbmVudHNJdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MGU3ZGY1NiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2MGU3ZGY1NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL3NlYXJjaC9jb21wb25lbnRzL2NvbXBvbmVudHNJdGVtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29tcG9uZW50c0l0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbXBvbmVudHNJdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbXBvbmVudHNJdGVtLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYwZTdkZjU2JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29tcG9uZW50c0l0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYwZTdkZjU2JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9sYXdzSXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2YxMjNjNTAmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbGF3c0l0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9sYXdzSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vbGF3c0l0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2YxMjNjNTAmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIzZjEyM2M1MFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczZjEyM2M1MCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczZjEyM2M1MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczZjEyM2M1MCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbGF3c0l0ZW0udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNmMTIzYzUwJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzNmMTIzYzUwJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3Mvc2VhcmNoL2NvbXBvbmVudHMvbGF3c0l0ZW0udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sYXdzSXRlbS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGF3c0l0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGF3c0l0ZW0udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2YxMjNjNTAmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sYXdzSXRlbS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2YxMjNjNTAmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL25laWdoYm91ci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjA3NDc2N2Umc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbmVpZ2hib3VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vbmVpZ2hib3VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9uZWlnaGJvdXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjA3NDc2N2Umc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2MDc0NzY3ZVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2MDc0NzY3ZScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2MDc0NzY3ZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2MDc0NzY3ZScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbmVpZ2hib3VyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MDc0NzY3ZSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2MDc0NzY3ZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL3NlYXJjaC9jb21wb25lbnRzL25laWdoYm91ci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25laWdoYm91ci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbmVpZ2hib3VyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25laWdoYm91ci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02MDc0NzY3ZSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL25laWdoYm91ci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjA3NDc2N2Umc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1hMGZkNTU3NiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1hMGZkNTU3NiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzdHlsZTEgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmbGFuZz1jc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImEwZmQ1NTc2XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2EwZmQ1NTc2JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2EwZmQ1NTc2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2EwZmQ1NTc2JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9YTBmZDU1NzYmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignYTBmZDU1NzYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9zZWFyY2gvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9YTBmZDU1NzYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tNy1vbmVPZi0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNy1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy1vbmVPZi0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZsYW5nPWNzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWEwZmQ1NTc2JnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==