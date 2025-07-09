(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[60],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/surroundTouch.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/surroundTouch.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_search_components_resultItem_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/views/search/components/resultItem.vue */ "./src/views/search/components/resultItem.vue");
//
//
//
//
//
//
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
  name: "surroundTouch",
  components: {
    resultItem: _views_search_components_resultItem_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      finished: false
    };
  },
  props: {
    list: {
      type: Array,
      default: function _default() {
        return [];
      }
    }
  },
  computed: {},
  methods: {
    swipertop: function swipertop() {
      this.$refs.surroundInfo.style = "height:160vw;transition:height 0.5s;bottom:0;";
    },
    swiperbottom: function swiperbottom() {
      this.$refs.surroundInfo.style = "height:60px;bottom:1px;transition:height 0.5s;";
    }
  },
  mounted: function mounted() {
    this.$refs.surroundInfo.style = "height:60px;bottom:1px;background:#fff;transition:height 0.5s;";
  },
  watch: {}
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/surroundMap.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/surroundMap.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _views_gis_components_mapItem_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/views/gis/components/mapItem.vue */ "./src/views/gis/components/mapItem.vue");
/* harmony import */ var _views_gis_components_pop_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/views/gis/components/pop/index */ "./src/views/gis/components/pop/index.vue");
/* harmony import */ var _api_api_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/api/api.js */ "./src/api/api.js");
/* harmony import */ var _api_water_envir__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/api/water_envir */ "./src/api/water_envir.js");
/* harmony import */ var _views_gis_components_surroundTouch_vue__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/views/gis/components/surroundTouch.vue */ "./src/views/gis/components/surroundTouch.vue");







//
//
//
//
//
//
//
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
  name: "surroundMap",
  components: {
    surroundTouch: _views_gis_components_surroundTouch_vue__WEBPACK_IMPORTED_MODULE_11__["default"],
    mapItem: _views_gis_components_mapItem_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    mapSitePop: _views_gis_components_pop_index__WEBPACK_IMPORTED_MODULE_8__["default"]
  },
  data: function data() {
    return {
      showSitePop: false,
      siteObj: {
        name: '',
        type: 0
      },
      location: null,
      mapList: [],
      siteId: ''
    };
  },
  created: function created() {},
  mounted: function mounted() {
    if (this.$route.query.siteId) {
      this.siteId = this.$route.query.siteId;
    }

    this.location = [Number(this.$route.query.longitude), Number(this.$route.query.latitude)];
    console.log(this.$route);
  },
  methods: {
    queryNeighbour: function queryNeighbour() {
      var _this = this;

      return Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var mapPoints;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                mapPoints = [];

                if (!_this.siteId) {
                  _context.next = 7;
                  break;
                }

                _context.next = 4;
                return _this.queryArroundPollution();

              case 4:
                mapPoints = _context.sent;
                _context.next = 10;
                break;

              case 7:
                _context.next = 9;
                return _this.queryArroundSite();

              case 9:
                mapPoints = _context.sent;

              case 10:
                mapPoints.map(function (item) {
                  _this.$refs.mapRef.addPoint(item, 'water_layer');
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    //通过定位查询周边站点、空气和污染源
    queryArroundSite: function queryArroundSite() {
      var _this2 = this;

      return new Promise(function (resolve) {
        try {
          Object(_api_api_js__WEBPACK_IMPORTED_MODULE_9__["neighbourSiteSearch"])({
            longitude: _this2.location[0],
            latitude: _this2.location[1],
            number: 1000
          }).then(function (res) {
            _this2.mapList = res.data;
            var tempD = res.data.map(function (item) {
              return Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item), {}, {
                listType: item.type,
                JD: item.jd,
                WD: item.wd,
                type: item.siteType === 'poll' ? 'wryOther' : item.siteType,
                sectionName: item.siteName,
                sectionId: item.siteId
              });
            });
            resolve(tempD);
          });
        } catch (e) {
          resolve([]);
        }
      });
    },
    //通过站点的周边污染源进来查询周边污染
    queryArroundPollution: function queryArroundPollution() {
      var _this3 = this;

      return new Promise(function (resolve) {
        try {
          Object(_api_water_envir__WEBPACK_IMPORTED_MODULE_10__["waterPollution"])({
            sectionId: _this3.siteId
          }).then(function (res) {
            var tempD = res.data.map(function (item) {
              return Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item), {}, {
                JD: item.longitude,
                WD: item.latitude,
                type: 'wry',
                siteName: item.enterpriseName,
                siteType: 'poll',
                siteId: item.dataId,
                siteLabel: item.labelList.map(function (item) {
                  return item.labelName;
                }).join(','),
                siteLabelColor: item.labelList.map(function (item) {
                  return item.labelColor;
                }).join(','),
                wrymc: item.enterpriseName,
                tyshxydm: item.socialCreditCode,
                fddbr: item.legalRepresentative,
                fddbrdh: item.enterprisePhone,
                hymc: item.pollutType,
                szdz: item.address
              });
            });
            _this3.mapList = tempD;
            resolve(tempD);
          });
        } catch (e) {
          resolve([]);
        }
      });
    },
    //地图点击弹框展示
    showSite: function showSite(show, obj) {
      if (obj && obj.siteType) {
        this.showSitePop = show;
        this.siteObj = obj;
      }

      console.log(this.siteObj);
    },
    //关闭地图弹框
    closePop: function closePop() {
      this.showSitePop = false;
      this.$refs.mapRef.clearSelectByAttribute();
    },
    //回到定位
    onBackLoaction: function onBackLoaction() {
      this.closePop();
      this.$refs.mapRef.panToCoordinate(this.location, 9);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/surroundTouch.vue?vue&type=template&id=0e8fe000&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/surroundTouch.vue?vue&type=template&id=0e8fe000& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    "v-touch",
    {
      staticClass: "wrapper",
      on: { swipeup: _vm.swipertop, swipedown: _vm.swiperbottom },
    },
    [
      _c("div", { ref: "menuContainer", staticClass: "menu-container" }, [
        _c("div", { ref: "surroundInfo", staticClass: "surroundInfo" }, [
          _c("div", { ref: "", staticClass: "surroundTop" }, [
            _c("p", { staticClass: "title" }, [_vm._v("周边数据站点")]),
            _c("p", { staticClass: "line" }),
          ]),
          _c(
            "div",
            { staticClass: "infoContent" },
            _vm._l(_vm.list, function (item, i) {
              return _c("resultItem", { key: i, attrs: { item: item } })
            }),
            1
          ),
        ]),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/surroundMap.vue?vue&type=template&id=830fba54&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/surroundMap.vue?vue&type=template&id=830fba54&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticStyle: { position: "relative" } },
    [
      _c("van-nav-bar", {
        attrs: {
          title: "查看地图",
          "left-arrow": "",
          "right-text": "回到定位",
        },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
          "click-right": _vm.onBackLoaction,
        },
      }),
      _c("mapItem", {
        ref: "mapRef",
        attrs: { location: _vm.location },
        on: { inited: _vm.queryNeighbour, showSite: _vm.showSite },
      }),
      _vm.showSitePop
        ? _c("mapSitePop", {
            attrs: { siteObj: _vm.siteObj },
            on: { closePop: _vm.closePop },
          })
        : _vm._e(),
      _c("surroundTouch", { attrs: { list: _vm.mapList } }),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/core-js/modules/es.string.split.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.split.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/core-js/internals/is-null-or-undefined.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");
var stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ "./node_modules/core-js/internals/regexp-sticky-helpers.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min = Math.min;
var push = uncurryThis([].push);
var stringSlice = uncurryThis(''.slice);

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

var BUGGY = 'abbc'.split(/(b)*/)[1] === 'c' ||
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  'test'.split(/(?:)/, -1).length !== 4 ||
  'ab'.split(/(?:ab)*/).length !== 2 ||
  '.'.split(/(.?)(.?)/).length !== 4 ||
  // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
  '.'.split(/()()/).length > 1 ||
  ''.split(/.?/).length;

// @@split logic
fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit = '0'.split(undefined, 0).length ? function (separator, limit) {
    return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
  } : nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = isNullOrUndefined(separator) ? undefined : getMethod(separator, SPLIT);
      return splitter
        ? call(splitter, separator, O, limit)
        : call(internalSplit, toString(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject(this);
      var S = toString(string);

      if (!BUGGY) {
        var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
        if (res.done) return res.value;
      }

      var C = speciesConstructor(rx, RegExp);
      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (UNSUPPORTED_Y ? 'g' : 'y');
      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return regExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = regExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          push(A, stringSlice(S, p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            push(A, z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      push(A, stringSlice(S, p));
      return A;
    }
  ];
}, BUGGY || !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/surroundTouch.vue?vue&type=style&index=0&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/surroundTouch.vue?vue&type=style&index=0&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".v-touch {\n  touch-action: pan-y !important;\n}\n.surroundInfo {\n  width: 100%;\n  height: 40px;\n  position: absolute;\n  bottom: 20px;\n  z-index: 8;\n  border-top: 1px solid #f0f0f0;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n.surroundInfo .surroundTop {\n  width: 100%;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  border-bottom: 1px solid #ddd;\n  background: white;\n  position: relative;\n  border-top-left-radius: 10px;\n  border-top-right-radius: 10px;\n}\n.surroundInfo .surroundTop .title {\n  width: 46vw;\n  font-size: 16px;\n  padding: 2vw 0 2vw 2vw;\n  color: #6492ff;\n  font-weight: 600;\n  margin: 0;\n}\n.surroundInfo .surroundTop .line {\n  width: 8vw;\n  height: 1vw;\n  background: #dddddd;\n  border-radius: 2px;\n}\n.surroundInfo .surroundTop .close {\n  position: absolute;\n  right: 2vw;\n  top: 2vw;\n}\n.surroundInfo .surroundTop .close img {\n  display: block;\n}\n.surroundInfo .infoContent {\n  width: 100%;\n  height: calc(100% - 41px);\n  background: white;\n  overflow-y: scroll;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/surroundMap.vue?vue&type=style&index=0&id=830fba54&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/surroundMap.vue?vue&type=style&index=0&id=830fba54&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fs[data-v-830fba54] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.home-header-wrapper[data-v-830fba54] {\n  padding: 10px 15px;\n  background-color: #fff;\n  font-weight: bold;\n}\n.home-header-wrapper img[data-v-830fba54] {\n  width: 24px;\n  height: 24px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/surroundTouch.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/surroundTouch.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./surroundTouch.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/surroundTouch.vue?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("a3b75cea", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/surroundMap.vue?vue&type=style&index=0&id=830fba54&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/surroundMap.vue?vue&type=style&index=0&id=830fba54&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./surroundMap.vue?vue&type=style&index=0&id=830fba54&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/surroundMap.vue?vue&type=style&index=0&id=830fba54&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("563fd71c", content, false, {"sourceMap":false,"shadowMode":false});
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

/***/ "./src/views/gis/components/surroundTouch.vue":
/*!****************************************************!*\
  !*** ./src/views/gis/components/surroundTouch.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _surroundTouch_vue_vue_type_template_id_0e8fe000___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./surroundTouch.vue?vue&type=template&id=0e8fe000& */ "./src/views/gis/components/surroundTouch.vue?vue&type=template&id=0e8fe000&");
/* harmony import */ var _surroundTouch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./surroundTouch.vue?vue&type=script&lang=js& */ "./src/views/gis/components/surroundTouch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _surroundTouch_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./surroundTouch.vue?vue&type=style&index=0&lang=scss& */ "./src/views/gis/components/surroundTouch.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _surroundTouch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _surroundTouch_vue_vue_type_template_id_0e8fe000___WEBPACK_IMPORTED_MODULE_0__["render"],
  _surroundTouch_vue_vue_type_template_id_0e8fe000___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/gis/components/surroundTouch.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/gis/components/surroundTouch.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./src/views/gis/components/surroundTouch.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_surroundTouch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./surroundTouch.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/surroundTouch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_surroundTouch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/gis/components/surroundTouch.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************!*\
  !*** ./src/views/gis/components/surroundTouch.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_surroundTouch_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./surroundTouch.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/surroundTouch.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_surroundTouch_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_surroundTouch_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_surroundTouch_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_surroundTouch_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/gis/components/surroundTouch.vue?vue&type=template&id=0e8fe000&":
/*!***********************************************************************************!*\
  !*** ./src/views/gis/components/surroundTouch.vue?vue&type=template&id=0e8fe000& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_surroundTouch_vue_vue_type_template_id_0e8fe000___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./surroundTouch.vue?vue&type=template&id=0e8fe000& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/surroundTouch.vue?vue&type=template&id=0e8fe000&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_surroundTouch_vue_vue_type_template_id_0e8fe000___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_surroundTouch_vue_vue_type_template_id_0e8fe000___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/gis/surroundMap.vue":
/*!***************************************!*\
  !*** ./src/views/gis/surroundMap.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _surroundMap_vue_vue_type_template_id_830fba54_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./surroundMap.vue?vue&type=template&id=830fba54&scoped=true& */ "./src/views/gis/surroundMap.vue?vue&type=template&id=830fba54&scoped=true&");
/* harmony import */ var _surroundMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./surroundMap.vue?vue&type=script&lang=js& */ "./src/views/gis/surroundMap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _surroundMap_vue_vue_type_style_index_0_id_830fba54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./surroundMap.vue?vue&type=style&index=0&id=830fba54&lang=scss&scoped=true& */ "./src/views/gis/surroundMap.vue?vue&type=style&index=0&id=830fba54&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _surroundMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _surroundMap_vue_vue_type_template_id_830fba54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _surroundMap_vue_vue_type_template_id_830fba54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "830fba54",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/gis/surroundMap.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/gis/surroundMap.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./src/views/gis/surroundMap.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_surroundMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./surroundMap.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/surroundMap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_surroundMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/gis/surroundMap.vue?vue&type=style&index=0&id=830fba54&lang=scss&scoped=true&":
/*!*************************************************************************************************!*\
  !*** ./src/views/gis/surroundMap.vue?vue&type=style&index=0&id=830fba54&lang=scss&scoped=true& ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_surroundMap_vue_vue_type_style_index_0_id_830fba54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./surroundMap.vue?vue&type=style&index=0&id=830fba54&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/surroundMap.vue?vue&type=style&index=0&id=830fba54&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_surroundMap_vue_vue_type_style_index_0_id_830fba54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_surroundMap_vue_vue_type_style_index_0_id_830fba54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_surroundMap_vue_vue_type_style_index_0_id_830fba54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_surroundMap_vue_vue_type_style_index_0_id_830fba54_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/gis/surroundMap.vue?vue&type=template&id=830fba54&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./src/views/gis/surroundMap.vue?vue&type=template&id=830fba54&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_surroundMap_vue_vue_type_template_id_830fba54_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./surroundMap.vue?vue&type=template&id=830fba54&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/surroundMap.vue?vue&type=template&id=830fba54&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_surroundMap_vue_vue_type_template_id_830fba54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_surroundMap_vue_vue_type_template_id_830fba54_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3N1cnJvdW5kVG91Y2gudnVlIiwid2VicGFjazovLy9zcmMvdmlld3MvZ2lzL3N1cnJvdW5kTWFwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2lzL2NvbXBvbmVudHMvc3Vycm91bmRUb3VjaC52dWU/OTdlMSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2lzL3N1cnJvdW5kTWFwLnZ1ZT8yNzYxIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnNwbGl0LmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9naXMvY29tcG9uZW50cy9zdXJyb3VuZFRvdWNoLnZ1ZT8yYWNjIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9naXMvc3Vycm91bmRNYXAudnVlPzQyNDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3N1cnJvdW5kVG91Y2gudnVlPzQ4NDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9zdXJyb3VuZE1hcC52dWU/NGMxZCIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL+WbvS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy/luIIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMv55yBLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2lzL2NvbXBvbmVudHMvc3Vycm91bmRUb3VjaC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3N1cnJvdW5kVG91Y2gudnVlP2E4NDAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3N1cnJvdW5kVG91Y2gudnVlPzlmY2YiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3N1cnJvdW5kVG91Y2gudnVlPzVmYjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9zdXJyb3VuZE1hcC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9zdXJyb3VuZE1hcC52dWU/MGI1YSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2lzL3N1cnJvdW5kTWFwLnZ1ZT9hNjJiIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9naXMvc3Vycm91bmRNYXAudnVlP2I1ZmIiXSwibmFtZXMiOlsibG9naW4iLCJ0b2tlbiIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJwYXJhbXMiLCJsb2dpbl9jbHVlIiwic2l0ZVNlYXJjaCIsInBhZ2UiLCJsaW1pdCIsIm5hbWUiLCJzeXNOb3RpY2VJbmZvIiwibm90aWNlUmVhZCIsIm5vdGljZUlkIiwibGF3U2VhcmNoIiwiaWQiLCJuZWlnaGJvdXJTaXRlU2VhcmNoIiwibG9uZ2l0dWRlIiwibGF0aXR1ZGUiLCJudW1iZXIiLCJ3YXRlclNpdGVGaW5lIiwidHlwZSIsImRyaW5rV2F0ZXJTdW1tYXJ5Iiwid2FybmluZ0FpciIsIndhcm5pbmdXYXRlciIsIndhcm5pbmdFYXJseVdhdGVyIiwid2F0ZXJTdGF0aW9uIiwib2JqZWN0aWQiLCJqY2ZzIiwiYWlyUXVhbGl0eSIsImRhdGEiLCJhaXJRdWFsaXR5SUFRSSIsImRpYW5XYXRlclF1YWxpdHkiLCJnZXROb3RpY2VMaXN0IiwiR0lTUG9sbHV0aXRvbiIsIkdJU1dhdGVyIiwiR0lTQ2hhbm5lbCIsImR3bWMiLCJncW1jIiwiZ2V0QWlyU2l0ZSIsInRpbWUiLCJ1c2VyTG9naW4iLCJwd2QiLCJ1c2VyTmFtZSIsInBhc3N3b3JkIiwidXNlclN1YnNjcmliZSIsIlRva2VuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQkE7QUFFQTtBQUNBLHVCQURBO0FBRUE7QUFBQTtBQUFBLEdBRkE7QUFHQSxNQUhBLGtCQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0EsR0FQQTtBQVFBO0FBQ0E7QUFDQSxpQkFEQTtBQUVB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Z0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQW9TLENBQWdCLDRVQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXhUO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzLzYwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDx2LXRvdWNoIEBzd2lwZXVwPVwic3dpcGVydG9wXCIgQHN3aXBlZG93bj1cInN3aXBlcmJvdHRvbVwiIGNsYXNzPVwid3JhcHBlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cIm1lbnUtY29udGFpbmVyXCIgcmVmPVwibWVudUNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic3Vycm91bmRJbmZvXCIgcmVmPVwic3Vycm91bmRJbmZvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInN1cnJvdW5kVG9wXCIgcmVmPVwiXCI+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlXCI+5ZGo6L655pWw5o2u56uZ54K5PC9wPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJsaW5lXCI+PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvQ29udGVudFwiPlxyXG4gICAgICAgICAgPHJlc3VsdEl0ZW0gdi1mb3I9XCIoaXRlbSxpKSBpbiBsaXN0XCIgOmtleT1cImlcIiA6aXRlbT1cIml0ZW1cIj48L3Jlc3VsdEl0ZW0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC92LXRvdWNoPlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCByZXN1bHRJdGVtIGZyb20gXCJAL3ZpZXdzL3NlYXJjaC9jb21wb25lbnRzL3Jlc3VsdEl0ZW0udnVlXCI7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwic3Vycm91bmRUb3VjaFwiLFxyXG4gICAgY29tcG9uZW50czoge3Jlc3VsdEl0ZW19LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBmaW5pc2hlZDogZmFsc2UsXHJcbiAgICAgIH07XHJcbiAgICB9LFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbGlzdDoge1xyXG4gICAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICAgIGRlZmF1bHQ6ICgpID0+IFtdXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge30sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIHN3aXBlcnRvcDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuJHJlZnMuc3Vycm91bmRJbmZvLnN0eWxlID1cclxuICAgICAgICAgIFwiaGVpZ2h0OjE2MHZ3O3RyYW5zaXRpb246aGVpZ2h0IDAuNXM7Ym90dG9tOjA7XCI7XHJcbiAgICAgIH0sXHJcbiAgICAgIHN3aXBlcmJvdHRvbTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuJHJlZnMuc3Vycm91bmRJbmZvLnN0eWxlID1cclxuICAgICAgICAgIFwiaGVpZ2h0OjYwcHg7Ym90dG9tOjFweDt0cmFuc2l0aW9uOmhlaWdodCAwLjVzO1wiO1xyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgIHRoaXMuJHJlZnMuc3Vycm91bmRJbmZvLnN0eWxlID1cclxuICAgICAgICBcImhlaWdodDo2MHB4O2JvdHRvbToxcHg7YmFja2dyb3VuZDojZmZmO3RyYW5zaXRpb246aGVpZ2h0IDAuNXM7XCI7XHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6IHt9LFxyXG4gIH07XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuICAudi10b3VjaCB7XHJcbiAgICB0b3VjaC1hY3Rpb246IHBhbi15ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuc3Vycm91bmRJbmZvIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAyMHB4O1xyXG4gICAgei1pbmRleDogODtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjBmMGYwO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgIC5zdXJyb3VuZFRvcCB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xyXG5cclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICB3aWR0aDogNDZ2dztcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgcGFkZGluZzogMnZ3IDAgMnZ3IDJ2dztcclxuICAgICAgICBjb2xvcjogIzY0OTJmZjtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLmxpbmUge1xyXG4gICAgICAgIHdpZHRoOiA4dnc7XHJcbiAgICAgICAgaGVpZ2h0OiAxdnc7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2RkZGRkZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC5jbG9zZSB7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAydnc7XHJcbiAgICAgICAgdG9wOiAydnc7XHJcblxyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAvLyBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAvLyB0b3A6IDEuNHZ3O1xyXG4gICAgICAgICAgLy8gcmlnaHQ6IDEuNHZ3O1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmluZm9Db250ZW50IHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNDFweCk7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICAgIH1cclxuICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IHN0eWxlPVwicG9zaXRpb246IHJlbGF0aXZlXCI+XHJcbiAgICA8dmFuLW5hdi1iYXIgdGl0bGU9XCLmn6XnnIvlnLDlm75cIiBsZWZ0LWFycm93IEBjbGljay1sZWZ0PVwiJHJvdXRlci5nbygtMSlcIiByaWdodC10ZXh0PVwi5Zue5Yiw5a6a5L2NXCJcclxuICAgICAgICAgICAgICAgICBAY2xpY2stcmlnaHQ9XCJvbkJhY2tMb2FjdGlvblwiPjwvdmFuLW5hdi1iYXI+XHJcblxyXG4gICAgPCEtLeWcsOWbvi0tPlxyXG4gICAgPG1hcEl0ZW0gQGluaXRlZD1cInF1ZXJ5TmVpZ2hib3VyXCIgcmVmPVwibWFwUmVmXCIgQHNob3dTaXRlPVwic2hvd1NpdGVcIiA6bG9jYXRpb249XCJsb2NhdGlvblwiLz5cclxuXHJcbiAgICA8IS0t5Zyw5Zu+5by55qGGLS0+XHJcbiAgICA8bWFwU2l0ZVBvcCB2LWlmPVwic2hvd1NpdGVQb3BcIiA6c2l0ZU9iaj1cInNpdGVPYmpcIiBAY2xvc2VQb3A9XCJjbG9zZVBvcFwiLz5cclxuXHJcbiAgICA8c3Vycm91bmRUb3VjaCA6bGlzdD1cIm1hcExpc3RcIi8+XHJcblxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgbWFwSXRlbSBmcm9tICdAL3ZpZXdzL2dpcy9jb21wb25lbnRzL21hcEl0ZW0udnVlJ1xyXG4gIGltcG9ydCBtYXBTaXRlUG9wIGZyb20gXCJAL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC9pbmRleFwiO1xyXG4gIGltcG9ydCB7bmVpZ2hib3VyU2l0ZVNlYXJjaH0gZnJvbSAnQC9hcGkvYXBpLmpzJztcclxuICBpbXBvcnQgeyB3YXRlclBvbGx1dGlvbiB9IGZyb20gXCJAL2FwaS93YXRlcl9lbnZpclwiO1xyXG4gIGltcG9ydCBzdXJyb3VuZFRvdWNoIGZyb20gXCJAL3ZpZXdzL2dpcy9jb21wb25lbnRzL3N1cnJvdW5kVG91Y2gudnVlXCI7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwic3Vycm91bmRNYXBcIixcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgc3Vycm91bmRUb3VjaCxcclxuICAgICAgbWFwSXRlbSxcclxuICAgICAgbWFwU2l0ZVBvcCxcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHNob3dTaXRlUG9wOiBmYWxzZSxcclxuICAgICAgICBzaXRlT2JqOiB7XHJcbiAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgIHR5cGU6IDBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvY2F0aW9uOiBudWxsLFxyXG4gICAgICAgIG1hcExpc3Q6IFtdLFxyXG4gICAgICAgIHNpdGVJZDogJycsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjcmVhdGVkKCkge1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgIGlmKHRoaXMuJHJvdXRlLnF1ZXJ5LnNpdGVJZCl7XHJcbiAgICAgICAgdGhpcy5zaXRlSWQgPSB0aGlzLiRyb3V0ZS5xdWVyeS5zaXRlSWRcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxvY2F0aW9uID0gW1xyXG4gICAgICAgIE51bWJlcih0aGlzLiRyb3V0ZS5xdWVyeS5sb25naXR1ZGUpLFxyXG4gICAgICAgIE51bWJlcih0aGlzLiRyb3V0ZS5xdWVyeS5sYXRpdHVkZSksXHJcbiAgICAgIF1cclxuICAgICAgY29uc29sZS5sb2codGhpcy4kcm91dGUpXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBhc3luYyBxdWVyeU5laWdoYm91cigpIHtcclxuICAgICAgICBsZXQgbWFwUG9pbnRzID0gW107XHJcbiAgICAgICAgaWYodGhpcy5zaXRlSWQpe1xyXG4gICAgICAgICAgbWFwUG9pbnRzID0gYXdhaXQgdGhpcy5xdWVyeUFycm91bmRQb2xsdXRpb24oKTtcclxuICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgIG1hcFBvaW50cyA9IGF3YWl0IHRoaXMucXVlcnlBcnJvdW5kU2l0ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbWFwUG9pbnRzLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgIHRoaXMuJHJlZnMubWFwUmVmLmFkZFBvaW50KGl0ZW0sICd3YXRlcl9sYXllcicpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIC8v6YCa6L+H5a6a5L2N5p+l6K+i5ZGo6L6556uZ54K544CB56m65rCU5ZKM5rGh5p+T5rqQXHJcbiAgICAgIHF1ZXJ5QXJyb3VuZFNpdGUoKXtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBuZWlnaGJvdXJTaXRlU2VhcmNoKHtcclxuICAgICAgICAgICAgICBsb25naXR1ZGU6IHRoaXMubG9jYXRpb25bMF0sXHJcbiAgICAgICAgICAgICAgbGF0aXR1ZGU6IHRoaXMubG9jYXRpb25bMV0sXHJcbiAgICAgICAgICAgICAgbnVtYmVyOiAxMDAwXHJcbiAgICAgICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLm1hcExpc3QgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICBsZXQgdGVtcEQgPSByZXMuZGF0YS5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm57XHJcbiAgICAgICAgICAgICAgICAgIC4uLml0ZW0sXHJcbiAgICAgICAgICAgICAgICAgIGxpc3RUeXBlOiBpdGVtLnR5cGUsXHJcbiAgICAgICAgICAgICAgICAgIEpEOiBpdGVtLmpkLFxyXG4gICAgICAgICAgICAgICAgICBXRDogaXRlbS53ZCxcclxuICAgICAgICAgICAgICAgICAgdHlwZTogaXRlbS5zaXRlVHlwZSA9PT0gJ3BvbGwnID8gJ3dyeU90aGVyJyA6IGl0ZW0uc2l0ZVR5cGUsXHJcbiAgICAgICAgICAgICAgICAgIHNlY3Rpb25OYW1lOiBpdGVtLnNpdGVOYW1lLFxyXG4gICAgICAgICAgICAgICAgICBzZWN0aW9uSWQ6IGl0ZW0uc2l0ZUlkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICByZXNvbHZlKHRlbXBEKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXNvbHZlKFtdKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIC8v6YCa6L+H56uZ54K555qE5ZGo6L655rGh5p+T5rqQ6L+b5p2l5p+l6K+i5ZGo6L655rGh5p+TXHJcbiAgICAgIHF1ZXJ5QXJyb3VuZFBvbGx1dGlvbigpe1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHdhdGVyUG9sbHV0aW9uKHtcclxuICAgICAgICAgICAgICBzZWN0aW9uSWQ6IHRoaXMuc2l0ZUlkLFxyXG4gICAgICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IHRlbXBEID0gcmVzLmRhdGEubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJue1xyXG4gICAgICAgICAgICAgICAgICAuLi5pdGVtLFxyXG4gICAgICAgICAgICAgICAgICBKRDogaXRlbS5sb25naXR1ZGUsXHJcbiAgICAgICAgICAgICAgICAgIFdEOiBpdGVtLmxhdGl0dWRlLFxyXG4gICAgICAgICAgICAgICAgICB0eXBlOiAnd3J5JyxcclxuICAgICAgICAgICAgICAgICAgc2l0ZU5hbWU6IGl0ZW0uZW50ZXJwcmlzZU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgIHNpdGVUeXBlOiAncG9sbCcsXHJcbiAgICAgICAgICAgICAgICAgIHNpdGVJZDogaXRlbS5kYXRhSWQsXHJcbiAgICAgICAgICAgICAgICAgIHNpdGVMYWJlbDogaXRlbS5sYWJlbExpc3QubWFwKGl0ZW09PntyZXR1cm4gaXRlbS5sYWJlbE5hbWV9KS5qb2luKCcsJyksXHJcbiAgICAgICAgICAgICAgICAgIHNpdGVMYWJlbENvbG9yOiBpdGVtLmxhYmVsTGlzdC5tYXAoaXRlbT0+e3JldHVybiBpdGVtLmxhYmVsQ29sb3J9KS5qb2luKCcsJyksXHJcbiAgICAgICAgICAgICAgICAgIHdyeW1jOiBpdGVtLmVudGVycHJpc2VOYW1lLFxyXG4gICAgICAgICAgICAgICAgICB0eXNoeHlkbTogaXRlbS5zb2NpYWxDcmVkaXRDb2RlLFxyXG4gICAgICAgICAgICAgICAgICBmZGRicjogaXRlbS5sZWdhbFJlcHJlc2VudGF0aXZlLFxyXG4gICAgICAgICAgICAgICAgICBmZGRicmRoOiBpdGVtLmVudGVycHJpc2VQaG9uZSxcclxuICAgICAgICAgICAgICAgICAgaHltYzogaXRlbS5wb2xsdXRUeXBlLFxyXG4gICAgICAgICAgICAgICAgICBzemR6OiBpdGVtLmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB0aGlzLm1hcExpc3QgPSB0ZW1wRDtcclxuICAgICAgICAgICAgICByZXNvbHZlKHRlbXBEKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXNvbHZlKFtdKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIC8v5Zyw5Zu+54K55Ye75by55qGG5bGV56S6XHJcbiAgICAgIHNob3dTaXRlKHNob3csIG9iaikge1xyXG4gICAgICAgIGlmIChvYmogJiYgb2JqLnNpdGVUeXBlKSB7XHJcbiAgICAgICAgICB0aGlzLnNob3dTaXRlUG9wID0gc2hvdztcclxuICAgICAgICAgIHRoaXMuc2l0ZU9iaiA9IG9iajtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zaXRlT2JqKVxyXG4gICAgICB9LFxyXG4gICAgICAvL+WFs+mXreWcsOWbvuW8ueahhlxyXG4gICAgICBjbG9zZVBvcCgpIHtcclxuICAgICAgICB0aGlzLnNob3dTaXRlUG9wID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy4kcmVmcy5tYXBSZWYuY2xlYXJTZWxlY3RCeUF0dHJpYnV0ZSgpO1xyXG4gICAgICB9LFxyXG4gICAgICAvL+WbnuWIsOWumuS9jVxyXG4gICAgICBvbkJhY2tMb2FjdGlvbigpIHtcclxuICAgICAgICB0aGlzLmNsb3NlUG9wKCk7XHJcbiAgICAgICAgdGhpcy4kcmVmcy5tYXBSZWYucGFuVG9Db29yZGluYXRlKHRoaXMubG9jYXRpb24sIDkpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICAuZnMge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuaG9tZS1oZWFkZXItd3JhcHBlciB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDI0cHg7XHJcbiAgICAgIGhlaWdodDogMjRweDtcclxuICAgIH1cclxuICB9XHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi10b3VjaFwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcIndyYXBwZXJcIixcbiAgICAgIG9uOiB7IHN3aXBldXA6IF92bS5zd2lwZXJ0b3AsIHN3aXBlZG93bjogX3ZtLnN3aXBlcmJvdHRvbSB9LFxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyByZWY6IFwibWVudUNvbnRhaW5lclwiLCBzdGF0aWNDbGFzczogXCJtZW51LWNvbnRhaW5lclwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyByZWY6IFwic3Vycm91bmRJbmZvXCIsIHN0YXRpY0NsYXNzOiBcInN1cnJvdW5kSW5mb1wiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHJlZjogXCJcIiwgc3RhdGljQ2xhc3M6IFwic3Vycm91bmRUb3BcIiB9LCBbXG4gICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiIH0sIFtfdm0uX3YoXCLlkajovrnmlbDmja7nq5nngrlcIildKSxcbiAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImxpbmVcIiB9KSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImluZm9Db250ZW50XCIgfSxcbiAgICAgICAgICAgIF92bS5fbChfdm0ubGlzdCwgZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFwicmVzdWx0SXRlbVwiLCB7IGtleTogaSwgYXR0cnM6IHsgaXRlbTogaXRlbSB9IH0pXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNTdHlsZTogeyBwb3NpdGlvbjogXCJyZWxhdGl2ZVwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcInZhbi1uYXYtYmFyXCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0aXRsZTogXCLmn6XnnIvlnLDlm75cIixcbiAgICAgICAgICBcImxlZnQtYXJyb3dcIjogXCJcIixcbiAgICAgICAgICBcInJpZ2h0LXRleHRcIjogXCLlm57liLDlrprkvY1cIixcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcImNsaWNrLWxlZnRcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLmdvKC0xKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGljay1yaWdodFwiOiBfdm0ub25CYWNrTG9hY3Rpb24sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIF9jKFwibWFwSXRlbVwiLCB7XG4gICAgICAgIHJlZjogXCJtYXBSZWZcIixcbiAgICAgICAgYXR0cnM6IHsgbG9jYXRpb246IF92bS5sb2NhdGlvbiB9LFxuICAgICAgICBvbjogeyBpbml0ZWQ6IF92bS5xdWVyeU5laWdoYm91ciwgc2hvd1NpdGU6IF92bS5zaG93U2l0ZSB9LFxuICAgICAgfSksXG4gICAgICBfdm0uc2hvd1NpdGVQb3BcbiAgICAgICAgPyBfYyhcIm1hcFNpdGVQb3BcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgc2l0ZU9iajogX3ZtLnNpdGVPYmogfSxcbiAgICAgICAgICAgIG9uOiB7IGNsb3NlUG9wOiBfdm0uY2xvc2VQb3AgfSxcbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX2MoXCJzdXJyb3VuZFRvdWNoXCIsIHsgYXR0cnM6IHsgbGlzdDogX3ZtLm1hcExpc3QgfSB9KSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkdmFuY2Utc3RyaW5nLWluZGV4Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG52YXIgc3RpY2t5SGVscGVycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtc3RpY2t5LWhlbHBlcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgVU5TVVBQT1JURURfWSA9IHN0aWNreUhlbHBlcnMuVU5TVVBQT1JURURfWTtcbnZhciBNQVhfVUlOVDMyID0gMHhGRkZGRkZGRjtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbnZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbi8vIENocm9tZSA1MSBoYXMgYSBidWdneSBcInNwbGl0XCIgaW1wbGVtZW50YXRpb24gd2hlbiBSZWdFeHAjZXhlYyAhPT0gbmF0aXZlRXhlY1xuLy8gV2VleCBKUyBoYXMgZnJvemVuIGJ1aWx0LWluIHByb3RvdHlwZXMsIHNvIHVzZSB0cnkgLyBjYXRjaCB3cmFwcGVyXG52YXIgU1BMSVRfV09SS1NfV0lUSF9PVkVSV1JJVFRFTl9FWEVDID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlZ2V4cC9uby1lbXB0eS1ncm91cCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICB2YXIgcmUgPSAvKD86KS87XG4gIHZhciBvcmlnaW5hbEV4ZWMgPSByZS5leGVjO1xuICByZS5leGVjID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gb3JpZ2luYWxFeGVjLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gIHZhciByZXN1bHQgPSAnYWInLnNwbGl0KHJlKTtcbiAgcmV0dXJuIHJlc3VsdC5sZW5ndGggIT09IDIgfHwgcmVzdWx0WzBdICE9PSAnYScgfHwgcmVzdWx0WzFdICE9PSAnYic7XG59KTtcblxudmFyIEJVR0dZID0gJ2FiYmMnLnNwbGl0KC8oYikqLylbMV0gPT09ICdjJyB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVnZXhwL25vLWVtcHR5LWdyb3VwIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gICd0ZXN0Jy5zcGxpdCgvKD86KS8sIC0xKS5sZW5ndGggIT09IDQgfHxcbiAgJ2FiJy5zcGxpdCgvKD86YWIpKi8pLmxlbmd0aCAhPT0gMiB8fFxuICAnLicuc3BsaXQoLyguPykoLj8pLykubGVuZ3RoICE9PSA0IHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWdleHAvbm8tZW1wdHktY2FwdHVyaW5nLWdyb3VwLCByZWdleHAvbm8tZW1wdHktZ3JvdXAgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgJy4nLnNwbGl0KC8oKSgpLykubGVuZ3RoID4gMSB8fFxuICAnJy5zcGxpdCgvLj8vKS5sZW5ndGg7XG5cbi8vIEBAc3BsaXQgbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdzcGxpdCcsIGZ1bmN0aW9uIChTUExJVCwgbmF0aXZlU3BsaXQsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICB2YXIgaW50ZXJuYWxTcGxpdCA9ICcwJy5zcGxpdCh1bmRlZmluZWQsIDApLmxlbmd0aCA/IGZ1bmN0aW9uIChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgcmV0dXJuIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwID8gW10gOiBjYWxsKG5hdGl2ZVNwbGl0LCB0aGlzLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgfSA6IG5hdGl2ZVNwbGl0O1xuXG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc3BsaXRgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zcGxpdFxuICAgIGZ1bmN0aW9uIHNwbGl0KHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgIHZhciBzcGxpdHRlciA9IGlzTnVsbE9yVW5kZWZpbmVkKHNlcGFyYXRvcikgPyB1bmRlZmluZWQgOiBnZXRNZXRob2Qoc2VwYXJhdG9yLCBTUExJVCk7XG4gICAgICByZXR1cm4gc3BsaXR0ZXJcbiAgICAgICAgPyBjYWxsKHNwbGl0dGVyLCBzZXBhcmF0b3IsIE8sIGxpbWl0KVxuICAgICAgICA6IGNhbGwoaW50ZXJuYWxTcGxpdCwgdG9TdHJpbmcoTyksIHNlcGFyYXRvciwgbGltaXQpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNwbGl0XG4gICAgLy9cbiAgICAvLyBOT1RFOiBUaGlzIGNhbm5vdCBiZSBwcm9wZXJseSBwb2x5ZmlsbGVkIGluIGVuZ2luZXMgdGhhdCBkb24ndCBzdXBwb3J0XG4gICAgLy8gdGhlICd5JyBmbGFnLlxuICAgIGZ1bmN0aW9uIChzdHJpbmcsIGxpbWl0KSB7XG4gICAgICB2YXIgcnggPSBhbk9iamVjdCh0aGlzKTtcbiAgICAgIHZhciBTID0gdG9TdHJpbmcoc3RyaW5nKTtcblxuICAgICAgaWYgKCFCVUdHWSkge1xuICAgICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKGludGVybmFsU3BsaXQsIHJ4LCBTLCBsaW1pdCwgaW50ZXJuYWxTcGxpdCAhPT0gbmF0aXZlU3BsaXQpO1xuICAgICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBDID0gc3BlY2llc0NvbnN0cnVjdG9yKHJ4LCBSZWdFeHApO1xuICAgICAgdmFyIHVuaWNvZGVNYXRjaGluZyA9IHJ4LnVuaWNvZGU7XG4gICAgICB2YXIgZmxhZ3MgPSAocnguaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAocngubXVsdGlsaW5lID8gJ20nIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChyeC51bmljb2RlID8gJ3UnIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChVTlNVUFBPUlRFRF9ZID8gJ2cnIDogJ3knKTtcbiAgICAgIC8vIF4oPyArIHJ4ICsgKSBpcyBuZWVkZWQsIGluIGNvbWJpbmF0aW9uIHdpdGggc29tZSBTIHNsaWNpbmcsIHRvXG4gICAgICAvLyBzaW11bGF0ZSB0aGUgJ3knIGZsYWcuXG4gICAgICB2YXIgc3BsaXR0ZXIgPSBuZXcgQyhVTlNVUFBPUlRFRF9ZID8gJ14oPzonICsgcnguc291cmNlICsgJyknIDogcngsIGZsYWdzKTtcbiAgICAgIHZhciBsaW0gPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gTUFYX1VJTlQzMiA6IGxpbWl0ID4+PiAwO1xuICAgICAgaWYgKGxpbSA9PT0gMCkgcmV0dXJuIFtdO1xuICAgICAgaWYgKFMubGVuZ3RoID09PSAwKSByZXR1cm4gcmVnRXhwRXhlYyhzcGxpdHRlciwgUykgPT09IG51bGwgPyBbU10gOiBbXTtcbiAgICAgIHZhciBwID0gMDtcbiAgICAgIHZhciBxID0gMDtcbiAgICAgIHZhciBBID0gW107XG4gICAgICB3aGlsZSAocSA8IFMubGVuZ3RoKSB7XG4gICAgICAgIHNwbGl0dGVyLmxhc3RJbmRleCA9IFVOU1VQUE9SVEVEX1kgPyAwIDogcTtcbiAgICAgICAgdmFyIHogPSByZWdFeHBFeGVjKHNwbGl0dGVyLCBVTlNVUFBPUlRFRF9ZID8gc3RyaW5nU2xpY2UoUywgcSkgOiBTKTtcbiAgICAgICAgdmFyIGU7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB6ID09PSBudWxsIHx8XG4gICAgICAgICAgKGUgPSBtaW4odG9MZW5ndGgoc3BsaXR0ZXIubGFzdEluZGV4ICsgKFVOU1VQUE9SVEVEX1kgPyBxIDogMCkpLCBTLmxlbmd0aCkpID09PSBwXG4gICAgICAgICkge1xuICAgICAgICAgIHEgPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgcSwgdW5pY29kZU1hdGNoaW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwdXNoKEEsIHN0cmluZ1NsaWNlKFMsIHAsIHEpKTtcbiAgICAgICAgICBpZiAoQS5sZW5ndGggPT09IGxpbSkgcmV0dXJuIEE7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gei5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIHB1c2goQSwgeltpXSk7XG4gICAgICAgICAgICBpZiAoQS5sZW5ndGggPT09IGxpbSkgcmV0dXJuIEE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHEgPSBwID0gZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcHVzaChBLCBzdHJpbmdTbGljZShTLCBwKSk7XG4gICAgICByZXR1cm4gQTtcbiAgICB9XG4gIF07XG59LCBCVUdHWSB8fCAhU1BMSVRfV09SS1NfV0lUSF9PVkVSV1JJVFRFTl9FWEVDLCBVTlNVUFBPUlRFRF9ZKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudi10b3VjaCB7XFxuICB0b3VjaC1hY3Rpb246IHBhbi15ICFpbXBvcnRhbnQ7XFxufVxcbi5zdXJyb3VuZEluZm8ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDIwcHg7XFxuICB6LWluZGV4OiA4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMGYwZjA7XFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMHB4O1xcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XFxufVxcbi5zdXJyb3VuZEluZm8gLnN1cnJvdW5kVG9wIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAxMHB4O1xcbn1cXG4uc3Vycm91bmRJbmZvIC5zdXJyb3VuZFRvcCAudGl0bGUge1xcbiAgd2lkdGg6IDQ2dnc7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBwYWRkaW5nOiAydncgMCAydncgMnZ3O1xcbiAgY29sb3I6ICM2NDkyZmY7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG4uc3Vycm91bmRJbmZvIC5zdXJyb3VuZFRvcCAubGluZSB7XFxuICB3aWR0aDogOHZ3O1xcbiAgaGVpZ2h0OiAxdnc7XFxuICBiYWNrZ3JvdW5kOiAjZGRkZGRkO1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbn1cXG4uc3Vycm91bmRJbmZvIC5zdXJyb3VuZFRvcCAuY2xvc2Uge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDJ2dztcXG4gIHRvcDogMnZ3O1xcbn1cXG4uc3Vycm91bmRJbmZvIC5zdXJyb3VuZFRvcCAuY2xvc2UgaW1nIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uc3Vycm91bmRJbmZvIC5pbmZvQ29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNDFweCk7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZnNbZGF0YS12LTgzMGZiYTU0XSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmhvbWUtaGVhZGVyLXdyYXBwZXJbZGF0YS12LTgzMGZiYTU0XSB7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5ob21lLWhlYWRlci13cmFwcGVyIGltZ1tkYXRhLXYtODMwZmJhNTRdIHtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3N1cnJvdW5kVG91Y2gudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJhM2I3NWNlYVwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3N1cnJvdW5kVG91Y2gudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zdXJyb3VuZFRvdWNoLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3N1cnJvdW5kTWFwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTgzMGZiYTU0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNTYzZmQ3MWNcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zdXJyb3VuZE1hcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04MzBmYmE1NCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3N1cnJvdW5kTWFwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTgzMGZiYTU0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xyXG5cclxuLyoqXHJcbiAqIOeZu+W9lVxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbG9naW4odG9rZW4pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBwL2xvZ2luL3VzZXJfaW5mbycsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIHRva2VuOiB0b2tlblxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuLyoqXHJcbiAqIOeZu+W9lS0t57q/57SiXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2dpbl9jbHVlKHRva2VuKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL21hbmFnZS9sb2dpbi90b2tlbl91c2VyX2luZm8nLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgICB0b2tlbjogdG9rZW5cclxuICAgIH1cclxuICB9KVxyXG59XHJcbi8qKlxyXG4gKiDnq5nngrnmkJzntKJcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNpdGVTZWFyY2goe3BhZ2UsIGxpbWl0LCBuYW1lfSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvaG9tZS9saXN0JyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgcGFnZTogcGFnZSxcclxuICAgICAgbGltaXQ6IGxpbWl0LFxyXG4gICAgICBuYW1lOiBuYW1lXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOeUqOaIt+mAmuefpVxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc3lzTm90aWNlSW5mbygpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBwL3N5c05vdGljZUluZm8nLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICog55So5oi36YCa55+lXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBub3RpY2VSZWFkKHtub3RpY2VJZH0pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBwL3N5c05vdGljZUluZm8vcmVhZCcsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIG5vdGljZUlkOiBub3RpY2VJZFxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDms5Xlvovms5Xop4TmkJzntKJcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxhd1NlYXJjaCh7IG5hbWV9KSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2ludGVyZmFjZS9yZXRyaWV2YWwvZG9jdW1lbnRfc2VhcmNoJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgcGFnZTogMSxcclxuICAgICAgbGltaXQ6IDEwMDAsXHJcbiAgICAgIGlkOiAnNTA0LDUwNSw1MDYnLFxyXG4gICAgICBuYW1lOiBuYW1lXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWRqOi+ueermeeCueaQnOe0olxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbmVpZ2hib3VyU2l0ZVNlYXJjaCh7bG9uZ2l0dWRlLCBsYXRpdHVkZSwgbnVtYmVyfSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvaG9tZS9zdXJyb3VuZGluZycsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIGxvbmdpdHVkZSwgbGF0aXR1ZGUsIG51bWJlclxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlm73nnIHogIPnq5nngrnkvJjoia/mg4XlhrVcclxuICogQHBhcmFtIHR5cGUgMeWbveiAgzLnnIHogINcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHdhdGVyU2l0ZUZpbmUoe3R5cGV9KSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC9ob21lLycrdHlwZSxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICog6aWu55So5rC05rqQ5Zyw5qaC5Ya1XHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkcmlua1dhdGVyU3VtbWFyeSgpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBwL2hvbWUnLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDotoXmoIflkYroraYt5rCUXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXJuaW5nQWlyKCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvaG9tZS9haXJXYXJuaW5nJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICog6LaF5qCH5ZGK6K2mLeawtFxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd2FybmluZ1dhdGVyKCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9EQ01STTEzMC9tZXNzYWdlL2Fibm9ybWFsRGF0YScsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOi2heagh+mihOitpi3msLRcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHdhcm5pbmdFYXJseVdhdGVyKCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy93YXRlci9jb21tb24vd2FybmluZ3MnLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8vIOawtOermeivpuaDhVxyXG5leHBvcnQgZnVuY3Rpb24gd2F0ZXJTdGF0aW9uKG9iamVjdGlkLCB0eXBlLCBqY2ZzKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL0RDTVJNMTMwL2x5ZHQvZ2V0THlkdEdrJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgb2JqZWN0aWQsIHR5cGUsIGpjZnMsXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWFqOW4guepuuawlOi0qOmHj1xyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWlyUXVhbGl0eShkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC9ob21lL2FpcicsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOmRhdGFcclxuICB9KVxyXG59XHJcbi8qKlxyXG4gKiDlhajluILnqbrmsJTotKjph49JQVFJXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhaXJRdWFsaXR5SUFRSShkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC9ob21lL2dldEluZGV4SWFxaScsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOmRhdGFcclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICog5ruH5rGg5rC06LSo54q25Ya1XHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBkaWFuV2F0ZXJRdWFsaXR5KCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvaG9tZS9zaXR1YXRpb24nLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8v6YCa55+l5YWs5ZGKIC0g5YiX6KGoXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROb3RpY2VMaXN0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcva2VwX21hbmFnZS9ub3RpY2UvcXVlcnlMaXN0SW5mbycsXHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgcGFyYW1zOiBkYXRhXHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIEdJUy3miYDmnInmsaHmn5PmupBcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEdJU1BvbGx1dGl0b24oKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL3BvbGx1dC9wb2xsdXRpb24vZ2V0QWxsU3VtbWFyeScsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIEdJUy3miYDmnInmsLRcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIEdJU1dhdGVyKCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy93YXRlci92aXN1YWxpemF0aW9uL2FsbC1zZWN0aW9uJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICogR0lTLeafpeayn+a4oFxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gR0lTQ2hhbm5lbCh7bmFtZX0pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvd2F0ZXIvd2F0ZXJHcXh4JyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgZHdtYzogbmFtZSxcclxuICAgICAgZ3FtYzogbmFtZVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlpKfmsJTnq5nngrlcclxuICogQHBhcmFtIHR5cGUgM+WFqOmDqFxyXG4gKiBAcGFyYW0gdGltZSDlr4bnoIFcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFpclNpdGUoe3RpbWV9KSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnaHR0cDovLzExNi41Mi42LjExODoxODg5OS9LUVpMWVpXL2hvbWUvcmVhbGRhdGE/dHlwZT0zJnRpbWU9JyArIHRpbWUsXHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgZGF0YToge31cclxuICB9KVxyXG59XHJcblxyXG4vLyDnlKjmiLfnmbvlvZVcclxuZXhwb3J0IGNvbnN0IHVzZXJMb2dpbiA9IChuYW1lLCBwd2QpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvc3lzdGVtLXNlcnZpY2UtbG9naW4vdXNlci9sb2dpbicsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIHVzZXJOYW1lOiBuYW1lLFxyXG4gICAgICBwYXNzd29yZDogcHdkXHJcbiAgICB9XHJcbiAgfSlcclxufTtcclxuXHJcbi8qKlxyXG4gKiDnlKjmiLfnu4Tku7borqLpmIVcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHVzZXJTdWJzY3JpYmUodG9rZW4pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBwL2hvbWUvdXNlclN1YnNjcmliZScsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIFRva2VuOiB0b2tlblxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ2dBQUFBb0NBWUFBQUNNL3JodEFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQVNiU1VSQlZGaUZ4WmxMYUI1VkZNZC81MllpdUdpSjJ5UW02d3A1dEltVnFLRUJGMTNVQ0NKS3dTYm9wZ0VWVEhXakMwSGNTUmZKb3NGR1VldGJzbEtESWxSOEVHelZwSVlrdmxaVklvMHZoRWhXVW5PUGk1azczNTMzZko4cEhoaSt1VFAzbnNmL2Y4NmRNL01KTmVYNFc5cjVUOEM0Z1ZFUitqRDBHS0ZEQkVSQVRQU2JQZy9IMnlKc2lyQWh3dEoxN1N5ZXVWMjI2dGlWcWdsM3Y2a2p3TFFJOTZVZE1Qbk8xQnFyc21BTXMvTmpjckVsQjRmbXRiM3JlbVpFZUxoWjQzVURpV1NPZlp4NmZsaXUxbmJ3emhkMUFNT3JJdlRYY3FaRng5MkJzaTd0VE02UHlscWxnMGRmMEZFRDc0dGhYNVV6VFZOY2NnL1lhUk9PUFRjbVM0VU9IajJyQXdoTElwRnplMlJjQkV3TlhjQ09CSXo2U01ZT0RzMXIrdzI3cklqUVg0bk1mNkcwYWk2c3M1OWhsNU54cXU2L3lveGErbFhCS2xnYkhYbGoyemhVUWExM2FPbzhQUzZhNjhiUXp3NHpDUVNQek9pSU1WellVeVNhb1Rqbm5qSGNPajhtRncyQUt0T2x5TFNDUkdwdHM0ellYYVlCNUxabnRkTUVYS2xDWXFBcmVSMnZrZ2x6SjU0TDNsb2FjLzIxUC94WmphSmF1Z0lNNDJvanNnM2d6bFBqMCtONU8yYnJjdis3bnEwQ3UySVlEOVF5cWc0QjYrVUFLUVdSdkw3U1FNUWg1UkRNWE0rNWYrOU40WFhyMmZMdENtQ2NYV1Uwc0x2MGljbDZieVdwd01rcnkxbGFUQk9GNHh4VWpSVG1vR2dienZZRlZ1a3hlVkNibElKSVhEcE1IRzRPeFc5L2grLyt5T3Fwc05zVHFLWERtaXpGWWhzRjRGT3NHaGJNeERCTnlWTWZoYlE2c2JaQmFkcHVYSHlHamtDVndzTHdIZmNWci80TWQ1ekpVdnpoRkt6L0FrOStVRXkzSDJpUjNkaTJoVUNMS0UxWFZwcWFuRURDQ2VIZUZxT1NRaVpYVDlxdU53NWlxQXNVR28vZU9QS2lRTkxHaS9MTHA3aklialEvU1hGT05EWVZ1UnNmdkJFTzltUUxRNEVUaDVMWE5uNkZiMzZMOVBxQmx0a2xqK0lha2FzTng0UGQ4TUF0WkdTZ016eDhlZVByTURjTEtTN0p4U3pGcWNveWJrRXE4cGMraDVjdkpJdmhrMGRoN1FvOC9rNDRIdXh1T0NaTlV1d2VGcWFxQ1hBUGNWOXgwVVBmQmFBV0ptNkcwM2ZCaWFHa2JqL1FxbWJFRmxKY1ZGa2V4Ym0wdUdVSzU3NEFGQ1lQaDZpMlJMR0J3R3J4WmhsRFhUZTVVOGJQZlpsRUswRnhudDNVMkNRUUxFSFJwcXI0NUJFWTZrMDY1ZEFaN0liWmU1TDNCcnBnYlF0ZVc4NUJzQVJGSzJ3SGljaktZUGNVWC9vSkR2V0NhTU1SVlZqZDlCeFRiK3Z4bXRhTWcyV3BKV3dHWmJ0K0VjVXJQNFpPdHZLS0VETlJKN1dVamZKSEhlUlNYS1F3YmpES0dLbWkyRnVyc0JTVVZtVU94YXZQc0NkU0o3VkVXRXhTbk5mK1JHTW5aejhPZnpNOUlMSFMvUHZSOVFkSElwL0tVc3VBS0F2dm5aU3Rlbzg2Z2VYTG9lSzU4K1c1VnZYU1A5Z2QvbFoxVVFLekFOSTdwZnAvZlVVb2VWZWVPLytRUEFKdW95NmpPTlgrVkRZVU5SbnhPNldFWGNQNlh3R25YRXJWN21aYysxTVZTS0xCcU5nZGN1enVBSk9YcGhyZkNnT3JCYStZVFNDUlhsdTFGZVVGb3NLT0VZNTlPcDM4Umhpb3piNWlsclUvMXlRUVlWM2FtUHpzc2V3SHpQcmR6TFVMWk83dkRrNzV0Q1lkVkw0SER0UkNvbVkrMVFwRVdKQTJacjk2b3Z3amVxQndITXZiS2h3bzY2eHozNVhyQjdLTnNpbXdvYkJrRFl1clQ5ZjdHK0pmVkJEUmRvSFJRKzRBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ2dBQUFBb0NBWUFBQUNNL3JodEFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQVIyU1VSQlZGaUZ0WmxOYUIxVkZNZC81MllpdUdpcEN5MjhhUGFseVV1bDdhTFdoOWxJb0RVTE42V3JvQXNyK0VVaVhlaEdCQlhzS2xrWTJpaENjV0ZLMEUyRDJJVVdOV0JGckRVdmZpMGxtdmlCaTBoV1VuT1BpNWw1Nzg2ZE94L3ZKUjI0ek56TVBWLy8vem5uM2pjUmFsNW5GN1h4WDhTa2daWUlveGlHalhCQUJFUkFUSEwzbitQNWxnanJJcXlKc0hMWElNdHZQU3liZGV4SzFZTEgzOWNUd0xRSVozd0hUTmlaV25OVmxveGhibUZjYnZUbDRORUZIUnk2bTFrUm51M1ZlTjFBa211ZWZjeThmVXh1MTNid3NYZDFETU43SWpSck9kT240K2xBYWNzZ1V3c3RXYTEwY09JZGJSbjRTQXo3cXB6cG1lS1NkOEQyZ0hENjRyaXNGRG80Y1VuSEVGWkVFdWYyeUxnSW1CcTZnRzJKYUxsSWRodzh1cUNEOSt6d2pRak5TbVIyUTJuVldtaXpuMk5wVG5aU2RmOXRadFhTVkFXcllHMHlRblBiSGFxZzFobnFQZnZ6b3JYcEhKcHNNNXRCOEpGWlBXRU1YKzRwRXIxUUhIaG5EQTh0ak1zTkE2REtkQ2t5TlpBNGZHODhpbERzbFJHN3d6U0FuTHlnRFJPeDBXOCttZVQ1alFrWU9RaXZmQW8vL0xVM3VhbVdJWU5oc2xhT0ZLQ1lScjZZMU4yWmtRQXlDV3E5NXFZWUpvMWFXaUhZZTAzdTlpYXMvUkdqZVBpKzhOb1FwYVdCN05DSzdBNmpZcEp5a2FTdUxWZ0g2aWVPdzVHaGJHTVMvOW01WG44VXZ2L1RhYmJ1Z3JpVjhPUGY4T0hQc1MzWExwTFlOaUF3R2xsbDJBUVdkUnFRaGJFR2pBM1IwelZ5c0hyTkJ4VjJFWWJsK0d1cXBadDhEKzNsNDZkZzdYZDQrZHJ1VzFXNldVU3FqdmMrMUNiNXMzVVVXRStoalpXbFBDdHgvbmhJaE9jRmRqdTJMVVRhcDRKUUlLbUhWc09CcE1pVVVKcWJSOVlXSTVQdUFLbkFreWZod1FleWVaUXBBS0RaZ0F1bnVvaTZ4UVJ4ajd6U0xtZkVEU1JMY1NBYTZ5aFFoU1AzVTNrMUcrWHZPeWxRWnBjUXhVV1VwZ28wdnIyd0JOLzlsay91NjgvRDZnYWN2NXBQL3JFR3ZIa3FVZU9EVXBKS2VZcTl3akNPZ0dvWGdXQmdMa0llTW1xN1FWclhWZ0hGWW1MeFBNVmVOQm1LVXh0cElaQlZtTDdMVWVqSzBnMjBxc0t0RkZGY1ZGa3BndXFnNU1xbVlrcU9FWFhlQjJVTFVpc0tJZUhEYm55S3RhRFhoU2oyWkRzVWgzcXNOemVaSWlsQk1kMGIzUndNOWJwQ2lsMVp2Q0lwUWRFS1cxRmgxdzhwQ0ZIc3loWlJiSjNXVTVRZW9kUVMxcU95cnArak9MVlJVQWkrQTErY2o5c1JkUHZuNmtZSnhiNWRaYTE4cSt1SFlycnJidjBhMzBXNmpsNytLbGxiQTBXRmxTaUlSTUg4NGlkdzZYclhxVUtLRThlZld5Ujhla2tQR0JXcEpjSnlGR29Kb1hsdWt3L05YWW9yak5zQXBSbTd5dExWYzdKWmI2dnpGUllFY3ZNWCtIYTlmcFdXTldtQk9VamJUQjhLUW12UFhRNVFXc0NJdjQxNnV1YXZQUk4vbHF1bU9GWFdKeEpsS05xUVhVUDduNGlaUkZ2OTA0d3RRY0p2RWFiSzhlSkF0b0dwbTA5M3Z4VkdWaE9aWFNEaHk5WTZyWGlCcUxCdGhOT2ZUV2UvRVVhYTlya3FoZVlPQmlLMFpZQ3B6MS9NZjhDc2Y1cTVjNEhNLzN1QUdaZldySVBLVDhDaFdralV6S2RhZ1FoTE1zRGMxeStWZjBTUEZNNWl1YUxDb2JLVGRlNG5abStCYktHc0M2d3ByRmpEOHExWDYvMGI0bi83VXo0ZE00VEV4UUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ2dBQUFBb0NBWUFBQUNNL3JodEFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQVVWU1VSQlZGaUZ4WmxOYkJWVkZNZC81M1pxNGdKU0V6UkFiWW5MRnZzZXBUV0dhb1dOc2tBU0RCVUpIelhwQWhJMXNiaHlKU3pZdUNEdHdpb1ZXWUFHc0VzSmlZbnhzMUVpdElXMkpPNjBsdkRoRHRPVndkN3I0dDc3M3N5OGVUUDNGWWczbWN6Y21YdlArZC8vLzV3NzU4MFRBdHZlODJiOXZ4RTdGZlNMMElXaVhRa3RJaUFDb3R3NWZXMzc5MFJZRkdGZWhNbkhtcm40MFl0eU84U3ZGQTE0N1p6WkFneUxzQ2NOUUdXRENlb2J3NFJTakk1dms4c3JBdGd6YnBwYkgyZEVoTGNiZFI2NkVOZkdXTVdSVDN2bGZqREFWMCtiTW9xeklwU0N3S3dRdUQ4d3pFa3pnK1A5TWxzSWNQc3AwNi9na2loV0ZZRnBXT0tjWjhCU2s3RGprMjB5V1JmZzlwT21qREFwNHNBOUpPY2lvQUpzQVVzUzBSOW5zZ0t3Wjl3MFA3SE1sQWlsUW1ZZVJOS2lzVERIYW5wOVRGWkNkZlY5Um95bVpBeG9BMXE3STZ1dnE0Y3hZSFRzTUtucmRML2VXTitIRWt1TUpCamNPbUsyS01VdkQ1V0pSaVRPZUtZVWZlUGI1TElDTUliaFhHWUNtZGo0SkhTdXlaN2JxQ0o2bVdFQWVlRkRzMTVGM0ZwcFBDbDMzYlVXanI4Q04vNkNvOTg5bk5nMG1sYUZZbWRRaktSWXZEUUUrOHF4bGNkMmd6Z3pBNTN3NVFCMHJHbGNFVkhzVkViVG4wVjdub0g5bXkyUXluMTM5aTArM2lNL3VoVjJkOVJLbXBXUUZWL0w5Q3U5VEZjVytub0d1dGJCZ1I3cjlQUHBtRUZUQzg0WXVEQUhIM3hybjczZUNRTWR4U3pHd0hZcGJXaHZaSXM0Mk92QVRTVU5lb0NRVElROXo4TEdwMUlnTzRORHFWMFpUVXU5eklwUEtxK0hFN3VnM0FwbnI4TFpLN1VHTFlYVmVjZGZocjBsKzN6K2JoSmt4NXI4akhhMld5SmpBTzEyUkhGYnQrdHI1VzVyR05sdGpaLzVGYzVjaVdXZXRwbGNrUmpZdHduMmRkdisrVm00TUd2SGVwQnZkTVVXbGVHMzRsdUQ5Qnd6Sm5STDZHNkQyVnZaVzhUZ2MxWDVBZWJ1d0xucmNPTnVjbXpOYTdUQWI2UjFsWW5FSUYxOUE5akFnbXVMVk9zNERadmE0TTNuYmJmYzZvRGRoaTltWVA1TzFWYUZHZVV1ZGEyZkdyOXVmRkxpbVBPS1FUZGg4d1o3SHVxelE3cmJxR216dHl4enBiVlFXb2N2byt6WkZnS2NuODJRTk11dlcwaGtkTWFFVkgvc0FHeHVyd1dVYnVYV0twTlpiZjVPTE5zRC9KSXBjU3d4dk1TZlRVTFBCaXN4eW9JZDZvTjNKK0M2ajhtQ2VQcjZrRTBnWFVmU21yNnlXR3NsVHExR2E1ajZBNllYcWc2OXZPV25yVk12b1g4dlF3d2N6cFpyUm1kTG1zV3Fsbm9TRnhsd012bDRERzV1MzFNNWtxWnhSTm9rSmMyaVBXM1F4OUhwbitIYVRmZklaeXdrWk1hZFQreXk2ektPbVhRb1pmVlZJa2x5V0V3YjlBQ25GeHhBYjdEZWZ1WnRtWmpFQVN4cTRWNVVOeWJ5RExqMjhmNEdKYVpBNGpRT1lkRktYSkJaS21YQU0zanFKNWhackNhREtEc3VTL0xSZ1FDSjAzNE44OGtrU2JNSVNZbWRBUTl3YWdGbS9reEttdnNWSVVUaW1GOERrMUVqTVZHNWRnQVB2ZVNNU2V3VUM0RjAzMHZzQzR5aTBCTGhZbExpbk14U01RUHh5bVZtb1NxcnoxZ3ZhL3grZDF1eWd0RVpraWI4R2lhK09pUzNnMTUxYVlOWGY0ZmVaK0RrOThrTlBFL2k3amE0ZmpORDRqb3NDb3dDeUliRHh2eGZYeEZ5Zml1UGZmT1d2QU4rbzg2VE9GWCtoQVIzMEZZVnE1UVNmaFZ6ZjBjYzhURWJKbkZXSFZkbklaVWFNdlMxbWZTN0JBeE9INjUrSzR5MGNYTWVnSW4wWEYwSGVONUNqTENraEIwL0RDZS9FVWFWamJQSW9IcUVDeEhtcEluQkg5K3IvWUFaWHMwOHVvV00vZFBDa2Jpc1NZQ0czNENPSUNZYXFPTUNKSjZRSmthdnZKLy9FVDB5c0JmTkJTTjA1RlhXOForWUsxaklQUXlMQXZNR0pyWGk0clZqWVg5RC9BZjgwSnFuT0U1MUxBQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3N1cnJvdW5kVG91Y2gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTBlOGZlMDAwJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3N1cnJvdW5kVG91Y2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9zdXJyb3VuZFRvdWNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9zdXJyb3VuZFRvdWNoLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzBlOGZlMDAwJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzBlOGZlMDAwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzBlOGZlMDAwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9zdXJyb3VuZFRvdWNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZThmZTAwMCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwZThmZTAwMCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3N1cnJvdW5kVG91Y2gudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zdXJyb3VuZFRvdWNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zdXJyb3VuZFRvdWNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3N1cnJvdW5kVG91Y2gudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zdXJyb3VuZFRvdWNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wZThmZTAwMCZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vc3Vycm91bmRNYXAudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTgzMGZiYTU0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3N1cnJvdW5kTWFwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vc3Vycm91bmRNYXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3N1cnJvdW5kTWFwLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTgzMGZiYTU0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiODMwZmJhNTRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnODMwZmJhNTQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnODMwZmJhNTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnODMwZmJhNTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3N1cnJvdW5kTWFwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04MzBmYmE1NCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc4MzBmYmE1NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL2dpcy9zdXJyb3VuZE1hcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3N1cnJvdW5kTWFwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zdXJyb3VuZE1hcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zdXJyb3VuZE1hcC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD04MzBmYmE1NCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3N1cnJvdW5kTWFwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04MzBmYmE1NCZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=