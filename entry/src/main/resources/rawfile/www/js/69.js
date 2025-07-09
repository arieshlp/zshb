(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[69],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/switch/mapSwitch.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/switch/mapSwitch.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "mapSwitch",
  data: function data() {
    return {
      checked: false,
      switchList: [{
        name: '水',
        checked: true,
        value: '4'
      }, {
        name: '气',
        checked: true,
        value: '1'
      }, {
        name: '污染源',
        checked: true,
        value: '6'
      }, {
        name: '任务调度',
        checked: true,
        value: '6'
      }]
    };
  },
  watch: {
    switchList: {
      handler: function handler(newD) {
        this.$emit('changeSwitch', newD);
      },
      deep: true,
      immediate: false
    }
  },
  mounted: function mounted() {// this.switchList = this.pollutionList
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _views_gis_components_mapItem_vue__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/views/gis/components/mapItem.vue */ "./src/views/gis/components/mapItem.vue");
/* harmony import */ var _views_gis_components_switch_mapSwitch_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/views/gis/components/switch/mapSwitch.vue */ "./src/views/gis/components/switch/mapSwitch.vue");
/* harmony import */ var _views_gis_components_pop_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/views/gis/components/pop/index */ "./src/views/gis/components/pop/index.vue");
/* harmony import */ var _api_air_quality_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/api/air_quality.js */ "./src/api/air_quality.js");
/* harmony import */ var _api_api_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @/api/api.js */ "./src/api/api.js");
/* harmony import */ var _api_taskDispatch_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/api/taskDispatch.js */ "./src/api/taskDispatch.js");









//
//
//
//
//
//
//
//
//
//
//
//
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
    mapItem: _views_gis_components_mapItem_vue__WEBPACK_IMPORTED_MODULE_9__["default"],
    mapSitePop: _views_gis_components_pop_index__WEBPACK_IMPORTED_MODULE_11__["default"],
    mapSwitch: _views_gis_components_switch_mapSwitch_vue__WEBPACK_IMPORTED_MODULE_10__["default"]
  },
  data: function data() {
    return {
      location: null,
      mapType: 0,
      mapList: [],
      mapAirList: [],
      mapWaterList: [],
      mapPollutionList: [],
      mapTaskList: [],
      showSitePop: false,
      siteObj: {
        name: '',
        type: 0
      },
      flagCodeSwitch: true,
      //环保码是否选中
      flagOutleSwitch: true //入河排口是否选中

    };
  },
  mounted: function mounted() {
    this.location = ['', ''];
  },
  methods: {
    queryNeighbour: function queryNeighbour() {
      var _this = this;

      return Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var water, air, task, pollution, arr;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.queryWaterSite();

              case 2:
                water = _context.sent;
                _context.next = 5;
                return _this.queryAirSite();

              case 5:
                air = _context.sent;
                // let task = await this.queryTaskDispatch();
                task = [];
                _context.next = 9;
                return _this.queryPollution();

              case 9:
                pollution = _context.sent;
                arr = water.concat(air, task, pollution);
                arr.map(function (item) {
                  _this.$refs.mapRef.addPoint(item, 'water_layer');
                });

                _this.$refs.mapRef.panToCoordinate([102.7951, 24.8278], 5);

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    //地图切换
    changeSwitch: function changeSwitch(data) {
      var _this2 = this;

      /** checkArr 选中的图层
       * **/
      var checkArr = data.filter(function (item) {
        return item.checked;
      }).map(function (item) {
        return item.name;
      });
      var tempWater = [],
          tempAir = [],
          tempWry = [],
          tempTask = [];
      checkArr.forEach(function (item) {
        if (item === '水') {
          tempWater = _this2.mapWaterList;
        } else if (item === '气') {
          tempAir = _this2.mapAirList;
        } else if (item === '污染源') {
          tempWry = _this2.mapPollutionList;
        } else if (item === '任务调度') {
          tempTask = _this2.mapTaskList;
        }
      });
      this.mapList = tempWater.concat(tempAir, tempWry, tempTask);
      this.renderPoint();
      this.closePop();
    },
    //地图点位渲染
    renderPoint: function renderPoint() {
      var _this3 = this;

      this.$refs.mapRef.clearLayers('water_layer');
      this.mapList.forEach(function (item) {
        _this3.$refs.mapRef.addPoint(item, 'water_layer');
      });
    },
    //地图点击弹框展示
    showSite: function showSite(show, obj) {
      this.showSitePop = show;
      this.siteObj = obj;
    },
    //查询所有水站点
    queryWaterSite: function queryWaterSite() {
      var _this4 = this;

      return new Promise(function (resolve) {
        try {
          Object(_api_api_js__WEBPACK_IMPORTED_MODULE_13__["GISWater"])().then(function (res) {
            var filterD = res.data.map(function (item) {
              return Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item), {}, {
                siteId: item.sectionId,
                JD: item.longitude,
                WD: item.latitude,
                type: 'water',
                siteType: item.type
              });
            });
            _this4.mapWaterList = filterD;
            resolve(filterD);
          });
        } catch (e) {
          resolve([]);
        }
      });
    },
    //查询所有大气站点
    queryAirSite: function queryAirSite() {
      var _this5 = this;

      return new Promise(function (resolve) {
        try {
          Object(_api_air_quality_js__WEBPACK_IMPORTED_MODULE_12__["getAirSite"])({
            type: 2
          }).then(function (res) {
            var filterD = res.data.map(function (item) {
              return Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item), {}, {
                siteId: item.id,
                JD: item.longitude,
                WD: item.latitude,
                type: 'air'
              });
            });
            _this5.mapAirList = filterD;
            resolve(filterD);
          });
        } catch (e) {
          resolve([]);
        }
      });
    },
    //查询污染源
    queryPollution: function queryPollution() {
      var _this6 = this;

      return Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", new Promise(function (resolve) {
                  try {
                    Object(_api_api_js__WEBPACK_IMPORTED_MODULE_13__["GISPollutiton"])().then(function (res) {
                      var filterD = res.data.map(function (item) {
                        return Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item), {}, {
                          JD: item.jd,
                          WD: item.wd,
                          name: item.wrymc,
                          level: '',
                          type: 'wry'
                        });
                      });
                      _this6.mapPollutionList = filterD;
                      resolve(filterD);
                    });
                  } catch (e) {
                    resolve([]);
                  }
                }));

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    //查询所有任务调度
    queryTaskDispatch: function queryTaskDispatch() {
      var _this7 = this;

      return new Promise(function (resolve) {
        try {
          Object(_api_taskDispatch_js__WEBPACK_IMPORTED_MODULE_14__["getTaskList"])().then(function (res) {
            var filterD = res.data.map(function (item) {
              return Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item), {}, {
                siteId: item.id,
                JD: item.jd,
                WD: item.wd,
                type: 'task'
              });
            });
            _this7.mapTaskList = filterD;
            resolve(filterD);
          });
        } catch (e) {
          resolve([]);
        }
      });
    },
    //关闭地图弹框
    closePop: function closePop() {
      this.showSitePop = false;
      this.$refs.mapRef.clearSelectByAttribute();
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/switch/mapSwitch.vue?vue&type=template&id=70942006&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/switch/mapSwitch.vue?vue&type=template&id=70942006&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "switch-wrapper" },
    _vm._l(_vm.switchList, function (item) {
      return _c(
        "div",
        { staticClass: "switch-item" },
        [
          _c("van-switch", {
            staticStyle: { "margin-right": "9px" },
            attrs: {
              size: "10px",
              "active-color": "rgb(79,104,237)",
              "inactive-color": "#d8d8d8",
            },
            model: {
              value: item.checked,
              callback: function ($$v) {
                _vm.$set(item, "checked", $$v)
              },
              expression: "item.checked",
            },
          }),
          _vm._v(" " + _vm._s(item.name) + " "),
        ],
        1
      )
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/index.vue?vue&type=template&id=711aeb2c&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/index.vue?vue&type=template&id=711aeb2c&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticStyle: { height: "calc(100vh)", position: "relative" } },
    [
      _c("van-nav-bar", {
        attrs: { title: "GIS", "left-arrow": "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
      }),
      _c("mapItem", {
        ref: "mapRef",
        attrs: { location: _vm.location },
        on: { inited: _vm.queryNeighbour, showSite: _vm.showSite },
      }),
      _c("mapSwitch", {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.mapType !== 2,
            expression: "mapType!==2",
          },
        ],
        attrs: { mapType: _vm.mapType },
        on: { changeSwitch: _vm.changeSwitch },
      }),
      _vm.showSitePop
        ? _c("mapSitePop", {
            attrs: { siteObj: _vm.siteObj },
            on: { closePop: _vm.closePop },
          })
        : _vm._e(),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/switch/mapSwitch.vue?vue&type=style&index=0&id=70942006&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/switch/mapSwitch.vue?vue&type=style&index=0&id=70942006&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".switch-wrapper[data-v-70942006] {\n  position: absolute;\n  right: 8px;\n  top: 90px;\n  padding: 6px 8px;\n  border-radius: 4px;\n  background-color: #fff;\n  z-index: 9;\n}\n.switch-wrapper .switch-item[data-v-70942006] {\n  display: flex;\n  align-items: center;\n  padding-bottom: 9px;\n  font-size: 12px;\n  color: #000;\n}\n.switch-wrapper .switch-item[data-v-70942006]:last-child {\n  padding-bottom: 0;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/index.vue?vue&type=style&index=0&id=711aeb2c&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/index.vue?vue&type=style&index=0&id=711aeb2c&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fs[data-v-711aeb2c] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.home-header-wrapper[data-v-711aeb2c] {\n  padding: 10px 15px;\n  background-color: #fff;\n  font-weight: bold;\n}\n.home-header-wrapper img[data-v-711aeb2c] {\n  width: 24px;\n  height: 24px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/switch/mapSwitch.vue?vue&type=style&index=0&id=70942006&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/switch/mapSwitch.vue?vue&type=style&index=0&id=70942006&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./mapSwitch.vue?vue&type=style&index=0&id=70942006&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/switch/mapSwitch.vue?vue&type=style&index=0&id=70942006&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("d9ec5096", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/index.vue?vue&type=style&index=0&id=711aeb2c&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/index.vue?vue&type=style&index=0&id=711aeb2c&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=711aeb2c&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/index.vue?vue&type=style&index=0&id=711aeb2c&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5bb79e3b", content, false, {"sourceMap":false,"shadowMode":false});
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

/***/ "./src/api/taskDispatch.js":
/*!*********************************!*\
  !*** ./src/api/taskDispatch.js ***!
  \*********************************/
/*! exports provided: getTaskList, postTaskAdd, getTaskDispose, postTaskFeedback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaskList", function() { return getTaskList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postTaskAdd", function() { return postTaskAdd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaskDispose", function() { return getTaskDispose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postTaskFeedback", function() { return postTaskFeedback; });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./src/api/request.js");

/**
 * 任务列表
 * @param userId 当前用户id
 * */

function getTaskList() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/pollut/pollution/taskList',
    method: 'GET',
    params: {
      userId: ''
    }
  });
}
/**
 * 发布任务
 * @param data 任务属性
 * */

function postTaskAdd(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/pollut/pollution/insTask',
    method: 'POST',
    data: data
  });
}
/**
 * 处置对象下拉
 * @param division_code 当前登录用户的行政区划
 * */

function getTaskDispose() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/ps/user/getAllUser',
    method: 'GET',
    params: {}
  });
}
/**
 * 反馈
 * @param data 反馈属性
 * */

function postTaskFeedback(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/pollut/pollution/updTask',
    method: 'POST',
    data: data
  });
}

/***/ }),

/***/ "./src/views/gis/components/switch/mapSwitch.vue":
/*!*******************************************************!*\
  !*** ./src/views/gis/components/switch/mapSwitch.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mapSwitch_vue_vue_type_template_id_70942006_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapSwitch.vue?vue&type=template&id=70942006&scoped=true& */ "./src/views/gis/components/switch/mapSwitch.vue?vue&type=template&id=70942006&scoped=true&");
/* harmony import */ var _mapSwitch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapSwitch.vue?vue&type=script&lang=js& */ "./src/views/gis/components/switch/mapSwitch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _mapSwitch_vue_vue_type_style_index_0_id_70942006_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapSwitch.vue?vue&type=style&index=0&id=70942006&lang=scss&scoped=true& */ "./src/views/gis/components/switch/mapSwitch.vue?vue&type=style&index=0&id=70942006&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _mapSwitch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mapSwitch_vue_vue_type_template_id_70942006_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _mapSwitch_vue_vue_type_template_id_70942006_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "70942006",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/gis/components/switch/mapSwitch.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/gis/components/switch/mapSwitch.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./src/views/gis/components/switch/mapSwitch.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapSwitch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./mapSwitch.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/switch/mapSwitch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapSwitch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/gis/components/switch/mapSwitch.vue?vue&type=style&index=0&id=70942006&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./src/views/gis/components/switch/mapSwitch.vue?vue&type=style&index=0&id=70942006&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapSwitch_vue_vue_type_style_index_0_id_70942006_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./mapSwitch.vue?vue&type=style&index=0&id=70942006&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/switch/mapSwitch.vue?vue&type=style&index=0&id=70942006&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapSwitch_vue_vue_type_style_index_0_id_70942006_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapSwitch_vue_vue_type_style_index_0_id_70942006_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapSwitch_vue_vue_type_style_index_0_id_70942006_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapSwitch_vue_vue_type_style_index_0_id_70942006_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/gis/components/switch/mapSwitch.vue?vue&type=template&id=70942006&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./src/views/gis/components/switch/mapSwitch.vue?vue&type=template&id=70942006&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapSwitch_vue_vue_type_template_id_70942006_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./mapSwitch.vue?vue&type=template&id=70942006&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/switch/mapSwitch.vue?vue&type=template&id=70942006&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapSwitch_vue_vue_type_template_id_70942006_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapSwitch_vue_vue_type_template_id_70942006_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/gis/index.vue":
/*!*********************************!*\
  !*** ./src/views/gis/index.vue ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_711aeb2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=711aeb2c&scoped=true& */ "./src/views/gis/index.vue?vue&type=template&id=711aeb2c&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/gis/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_711aeb2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=711aeb2c&lang=scss&scoped=true& */ "./src/views/gis/index.vue?vue&type=style&index=0&id=711aeb2c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_711aeb2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_711aeb2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "711aeb2c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/gis/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/gis/index.vue?vue&type=script&lang=js&":
/*!**********************************************************!*\
  !*** ./src/views/gis/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/gis/index.vue?vue&type=style&index=0&id=711aeb2c&lang=scss&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./src/views/gis/index.vue?vue&type=style&index=0&id=711aeb2c&lang=scss&scoped=true& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_711aeb2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=711aeb2c&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/index.vue?vue&type=style&index=0&id=711aeb2c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_711aeb2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_711aeb2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_711aeb2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_711aeb2c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/gis/index.vue?vue&type=template&id=711aeb2c&scoped=true&":
/*!****************************************************************************!*\
  !*** ./src/views/gis/index.vue?vue&type=template&id=711aeb2c&scoped=true& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_711aeb2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=711aeb2c&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/index.vue?vue&type=template&id=711aeb2c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_711aeb2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_711aeb2c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3N3aXRjaC9tYXBTd2l0Y2gudnVlIiwid2VicGFjazovLy9zcmMvdmlld3MvZ2lzL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2lzL2NvbXBvbmVudHMvc3dpdGNoL21hcFN3aXRjaC52dWU/Nzg3NCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2lzL2luZGV4LnZ1ZT85NmZiIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9naXMvY29tcG9uZW50cy9zd2l0Y2gvbWFwU3dpdGNoLnZ1ZT9mY2Y3Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9naXMvaW5kZXgudnVlPzZjMmQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3N3aXRjaC9tYXBTd2l0Y2gudnVlP2JkOWQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9pbmRleC52dWU/Y2YxZSIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL3Rhc2tEaXNwYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2lzL2NvbXBvbmVudHMvc3dpdGNoL21hcFN3aXRjaC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3N3aXRjaC9tYXBTd2l0Y2gudnVlP2Y5YWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3N3aXRjaC9tYXBTd2l0Y2gudnVlP2U4Y2QiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3N3aXRjaC9tYXBTd2l0Y2gudnVlP2ZmNzAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9pbmRleC52dWU/ZjBmMCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2lzL2luZGV4LnZ1ZT9lMjk2Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9naXMvaW5kZXgudnVlPzNiOWYiXSwibmFtZXMiOlsibG9naW4iLCJ0b2tlbiIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJwYXJhbXMiLCJsb2dpbl9jbHVlIiwic2l0ZVNlYXJjaCIsInBhZ2UiLCJsaW1pdCIsIm5hbWUiLCJzeXNOb3RpY2VJbmZvIiwibm90aWNlUmVhZCIsIm5vdGljZUlkIiwibGF3U2VhcmNoIiwiaWQiLCJuZWlnaGJvdXJTaXRlU2VhcmNoIiwibG9uZ2l0dWRlIiwibGF0aXR1ZGUiLCJudW1iZXIiLCJ3YXRlclNpdGVGaW5lIiwidHlwZSIsImRyaW5rV2F0ZXJTdW1tYXJ5Iiwid2FybmluZ0FpciIsIndhcm5pbmdXYXRlciIsIndhcm5pbmdFYXJseVdhdGVyIiwid2F0ZXJTdGF0aW9uIiwib2JqZWN0aWQiLCJqY2ZzIiwiYWlyUXVhbGl0eSIsImRhdGEiLCJhaXJRdWFsaXR5SUFRSSIsImRpYW5XYXRlclF1YWxpdHkiLCJnZXROb3RpY2VMaXN0IiwiR0lTUG9sbHV0aXRvbiIsIkdJU1dhdGVyIiwiR0lTQ2hhbm5lbCIsImR3bWMiLCJncW1jIiwiZ2V0QWlyU2l0ZSIsInRpbWUiLCJ1c2VyTG9naW4iLCJwd2QiLCJ1c2VyTmFtZSIsInBhc3N3b3JkIiwidXNlclN1YnNjcmliZSIsIlRva2VuIiwiZ2V0VGFza0xpc3QiLCJ1c2VySWQiLCJwb3N0VGFza0FkZCIsImdldFRhc2tEaXNwb3NlIiwicG9zdFRhc2tGZWVkYmFjayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBV0E7QUFDQSxtQkFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBLG9CQURBO0FBRUE7QUFDQSxpQkFEQTtBQUVBLHFCQUZBO0FBR0E7QUFIQSxTQUlBO0FBQ0EsaUJBREE7QUFFQSxxQkFGQTtBQUdBO0FBSEEsT0FKQSxFQVFBO0FBQ0EsbUJBREE7QUFFQSxxQkFGQTtBQUdBO0FBSEEsT0FSQSxFQVlBO0FBQ0Esb0JBREE7QUFFQSxx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YXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJzd2l0Y2gtd3JhcHBlclwiPlxyXG4gICAgPGRpdiB2LWZvcj1cIml0ZW0gaW4gc3dpdGNoTGlzdFwiIGNsYXNzPVwic3dpdGNoLWl0ZW1cIj5cclxuICAgICAgPHZhbi1zd2l0Y2ggdi1tb2RlbD1cIml0ZW0uY2hlY2tlZFwiIHNpemU9XCIxMHB4XCIgYWN0aXZlLWNvbG9yPVwicmdiKDc5LDEwNCwyMzcpXCIgaW5hY3RpdmUtY29sb3I9XCIjZDhkOGQ4XCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDlweFwiLz5cclxuICAgICAge3tpdGVtLm5hbWV9fVxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwibWFwU3dpdGNoXCIsXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGNoZWNrZWQ6IGZhbHNlLFxyXG4gICAgICAgIHN3aXRjaExpc3Q6ICBbe1xyXG4gICAgICAgICAgbmFtZTogJ+awtCcsXHJcbiAgICAgICAgICBjaGVja2VkOiB0cnVlLFxyXG4gICAgICAgICAgdmFsdWU6ICc0JyxcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBuYW1lOiAn5rCUJyxcclxuICAgICAgICAgIGNoZWNrZWQ6IHRydWUsXHJcbiAgICAgICAgICB2YWx1ZTogJzEnLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIG5hbWU6ICfmsaHmn5PmupAnLFxyXG4gICAgICAgICAgY2hlY2tlZDogdHJ1ZSxcclxuICAgICAgICAgIHZhbHVlOiAnNicsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgbmFtZTogJ+S7u+WKoeiwg+W6picsXHJcbiAgICAgICAgICBjaGVja2VkOiB0cnVlLFxyXG4gICAgICAgICAgdmFsdWU6ICc2JyxcclxuICAgICAgICB9XSxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgIHN3aXRjaExpc3Q6IHtcclxuICAgICAgICBoYW5kbGVyKG5ld0QpIHtcclxuICAgICAgICAgIHRoaXMuJGVtaXQoJ2NoYW5nZVN3aXRjaCcsIG5ld0QpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWVwOiB0cnVlLFxyXG4gICAgICAgIGltbWVkaWF0ZTogZmFsc2VcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAvLyB0aGlzLnN3aXRjaExpc3QgPSB0aGlzLnBvbGx1dGlvbkxpc3RcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7fVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgLnN3aXRjaC13cmFwcGVyIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiA4cHg7XHJcbiAgICB0b3A6IDkwcHg7XHJcbiAgICBwYWRkaW5nOiA2cHggOHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHotaW5kZXg6IDk7XHJcblxyXG4gICAgLnN3aXRjaC1pdGVtIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDlweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBjb2xvcjogIzAwMDtcclxuXHJcbiAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IHN0eWxlPVwiaGVpZ2h0OiBjYWxjKDEwMHZoKTtwb3NpdGlvbjogcmVsYXRpdmVcIj5cclxuICAgIDx2YW4tbmF2LWJhclxyXG4gICAgICAgIHRpdGxlPVwiR0lTXCJcclxuICAgICAgICBsZWZ0LWFycm93XHJcbiAgICAgICAgQGNsaWNrLWxlZnQ9XCIkcm91dGVyLmdvKC0xKVwiXHJcbiAgICA+XHJcbiAgICA8L3Zhbi1uYXYtYmFyPlxyXG5cclxuICAgIDwhLS3lnLDlm74tLT5cclxuICAgIDxtYXBJdGVtIHJlZj1cIm1hcFJlZlwiIEBpbml0ZWQ9XCJxdWVyeU5laWdoYm91clwiIEBzaG93U2l0ZT1cInNob3dTaXRlXCIgOmxvY2F0aW9uPVwibG9jYXRpb25cIi8+XHJcblxyXG4gICAgPCEtLeWcsOWbvuWbvuWxguWIh+aNoi0tPlxyXG4gICAgPG1hcFN3aXRjaCB2LXNob3c9XCJtYXBUeXBlIT09MlwiIDptYXBUeXBlPVwibWFwVHlwZVwiIEBjaGFuZ2VTd2l0Y2g9XCJjaGFuZ2VTd2l0Y2hcIi8+XHJcblxyXG4gICAgPCEtLeWcsOWbvuW8ueahhi0tPlxyXG4gICAgPG1hcFNpdGVQb3Agdi1pZj1cInNob3dTaXRlUG9wXCIgOnNpdGVPYmo9XCJzaXRlT2JqXCIgQGNsb3NlUG9wPVwiY2xvc2VQb3BcIi8+XHJcblxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgbWFwSXRlbSBmcm9tICdAL3ZpZXdzL2dpcy9jb21wb25lbnRzL21hcEl0ZW0udnVlJ1xyXG4gIGltcG9ydCBtYXBTd2l0Y2ggZnJvbSAnQC92aWV3cy9naXMvY29tcG9uZW50cy9zd2l0Y2gvbWFwU3dpdGNoLnZ1ZSdcclxuICBpbXBvcnQgbWFwU2l0ZVBvcCBmcm9tIFwiQC92aWV3cy9naXMvY29tcG9uZW50cy9wb3AvaW5kZXhcIjtcclxuICBpbXBvcnQge2dldEFpclNpdGV9IGZyb20gJ0AvYXBpL2Fpcl9xdWFsaXR5LmpzJ1xyXG4gIGltcG9ydCB7R0lTUG9sbHV0aXRvbiwgR0lTV2F0ZXJ9IGZyb20gJ0AvYXBpL2FwaS5qcydcclxuICBpbXBvcnQge2dldFRhc2tMaXN0fSBmcm9tICdAL2FwaS90YXNrRGlzcGF0Y2guanMnO1xyXG5cclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcImluZGV4XCIsXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgIG1hcEl0ZW0sXHJcbiAgICAgIG1hcFNpdGVQb3AsXHJcbiAgICAgIG1hcFN3aXRjaFxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbG9jYXRpb246IG51bGwsXHJcbiAgICAgICAgbWFwVHlwZTogMCxcclxuICAgICAgICBtYXBMaXN0OiBbXSxcclxuICAgICAgICBtYXBBaXJMaXN0OiBbXSxcclxuICAgICAgICBtYXBXYXRlckxpc3Q6IFtdLFxyXG4gICAgICAgIG1hcFBvbGx1dGlvbkxpc3Q6IFtdLFxyXG4gICAgICAgIG1hcFRhc2tMaXN0OiBbXSxcclxuICAgICAgICBzaG93U2l0ZVBvcDogZmFsc2UsXHJcbiAgICAgICAgc2l0ZU9iajoge1xyXG4gICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICB0eXBlOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmbGFnQ29kZVN3aXRjaDogdHJ1ZSwgLy/njq/kv53noIHmmK/lkKbpgInkuK1cclxuICAgICAgICBmbGFnT3V0bGVTd2l0Y2g6IHRydWUsIC8v5YWl5rKz5o6S5Y+j5piv5ZCm6YCJ5LitXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICB0aGlzLmxvY2F0aW9uID0gWycnLCAnJ11cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGFzeW5jIHF1ZXJ5TmVpZ2hib3VyKCkge1xyXG4gICAgICAgIGxldCB3YXRlciA9IGF3YWl0IHRoaXMucXVlcnlXYXRlclNpdGUoKTtcclxuICAgICAgICBsZXQgYWlyID0gYXdhaXQgdGhpcy5xdWVyeUFpclNpdGUoKTtcclxuICAgICAgICAvLyBsZXQgdGFzayA9IGF3YWl0IHRoaXMucXVlcnlUYXNrRGlzcGF0Y2goKTtcclxuICAgICAgICBsZXQgdGFzayA9IFtdO1xyXG4gICAgICAgIGxldCBwb2xsdXRpb24gPSBhd2FpdCB0aGlzLnF1ZXJ5UG9sbHV0aW9uKCk7XHJcblxyXG4gICAgICAgIGxldCBhcnIgPSB3YXRlci5jb25jYXQoYWlyLHRhc2sscG9sbHV0aW9uKVxyXG4gICAgICAgIGFyci5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICB0aGlzLiRyZWZzLm1hcFJlZi5hZGRQb2ludChpdGVtLCAnd2F0ZXJfbGF5ZXInKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuJHJlZnMubWFwUmVmLnBhblRvQ29vcmRpbmF0ZShbMTAyLjc5NTEsIDI0LjgyNzhdLCA1KTtcclxuICAgICAgfSxcclxuICAgICAgLy/lnLDlm77liIfmjaJcclxuICAgICAgY2hhbmdlU3dpdGNoKGRhdGEpIHtcclxuXHJcbiAgICAgICAgLyoqIGNoZWNrQXJyIOmAieS4reeahOWbvuWxglxyXG4gICAgICAgICAqICoqL1xyXG4gICAgICAgIGxldCBjaGVja0FyciA9IGRhdGEuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jaGVja2VkKS5tYXAoaXRlbSA9PiBpdGVtLm5hbWUpO1xyXG5cclxuICAgICAgICBsZXQgdGVtcFdhdGVyID0gW10sIHRlbXBBaXIgPSBbXSwgdGVtcFdyeSA9IFtdLCB0ZW1wVGFzayA9IFtdO1xyXG4gICAgICAgIGNoZWNrQXJyLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgICAgICBpZiAoaXRlbSA9PT0gJ+awtCcpIHtcclxuICAgICAgICAgICAgdGVtcFdhdGVyID0gdGhpcy5tYXBXYXRlckxpc3Q7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0gPT09ICfmsJQnKSB7XHJcbiAgICAgICAgICAgIHRlbXBBaXIgPSB0aGlzLm1hcEFpckxpc3Q7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0gPT09ICfmsaHmn5PmupAnKSB7XHJcbiAgICAgICAgICAgIHRlbXBXcnkgPSB0aGlzLm1hcFBvbGx1dGlvbkxpc3Q7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKGl0ZW0gPT09ICfku7vliqHosIPluqYnKSB7XHJcbiAgICAgICAgICAgIHRlbXBUYXNrID0gdGhpcy5tYXBUYXNrTGlzdDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLm1hcExpc3QgPSB0ZW1wV2F0ZXIuY29uY2F0KHRlbXBBaXIsIHRlbXBXcnksIHRlbXBUYXNrKTtcclxuICAgICAgICB0aGlzLnJlbmRlclBvaW50KCk7XHJcbiAgICAgICAgdGhpcy5jbG9zZVBvcCgpO1xyXG4gICAgICB9LFxyXG4gICAgICAvL+WcsOWbvueCueS9jea4suafk1xyXG4gICAgICByZW5kZXJQb2ludCgpIHtcclxuICAgICAgICB0aGlzLiRyZWZzLm1hcFJlZi5jbGVhckxheWVycygnd2F0ZXJfbGF5ZXInKTtcclxuICAgICAgICB0aGlzLm1hcExpc3QuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgICAgIHRoaXMuJHJlZnMubWFwUmVmLmFkZFBvaW50KGl0ZW0sICd3YXRlcl9sYXllcicpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIC8v5Zyw5Zu+54K55Ye75by55qGG5bGV56S6XHJcbiAgICAgIHNob3dTaXRlKHNob3csIG9iaikge1xyXG4gICAgICAgIHRoaXMuc2hvd1NpdGVQb3AgPSBzaG93O1xyXG4gICAgICAgIHRoaXMuc2l0ZU9iaiA9IG9iajtcclxuICAgICAgfSxcclxuICAgICAgLy/mn6Xor6LmiYDmnInmsLTnq5nngrlcclxuICAgICAgcXVlcnlXYXRlclNpdGUoKXtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBHSVNXYXRlcigpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCBmaWx0ZXJEID0gcmVzLmRhdGEubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5pdGVtLCBzaXRlSWQ6IGl0ZW0uc2VjdGlvbklkLCBKRDogaXRlbS5sb25naXR1ZGUsIFdEOiBpdGVtLmxhdGl0dWRlLCB0eXBlOiAnd2F0ZXInICxzaXRlVHlwZTogaXRlbS50eXBlfVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgdGhpcy5tYXBXYXRlckxpc3QgPSBmaWx0ZXJEO1xyXG4gICAgICAgICAgICAgIHJlc29sdmUoZmlsdGVyRClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShbXSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICAvL+afpeivouaJgOacieWkp+awlOermeeCuVxyXG4gICAgICBxdWVyeUFpclNpdGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZ2V0QWlyU2l0ZSh7dHlwZTogMn0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCBmaWx0ZXJEID0gcmVzLmRhdGEubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5pdGVtLCBzaXRlSWQ6IGl0ZW0uaWQsIEpEOiBpdGVtLmxvbmdpdHVkZSwgV0Q6IGl0ZW0ubGF0aXR1ZGUsIHR5cGU6ICdhaXInfVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgdGhpcy5tYXBBaXJMaXN0ID0gZmlsdGVyRDtcclxuICAgICAgICAgICAgICByZXNvbHZlKGZpbHRlckQpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoW10pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgLy/mn6Xor6LmsaHmn5PmupBcclxuICAgICAgYXN5bmMgcXVlcnlQb2xsdXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgR0lTUG9sbHV0aXRvbigpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCBmaWx0ZXJEID0gcmVzLmRhdGEubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5pdGVtLCBKRDogaXRlbS5qZCwgV0Q6IGl0ZW0ud2QsIG5hbWU6IGl0ZW0ud3J5bWMsIGxldmVsOiAnJywgdHlwZTogJ3dyeSd9XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB0aGlzLm1hcFBvbGx1dGlvbkxpc3QgPSBmaWx0ZXJEXHJcbiAgICAgICAgICAgICAgcmVzb2x2ZShmaWx0ZXJEKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXNvbHZlKFtdKVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIC8v5p+l6K+i5omA5pyJ5Lu75Yqh6LCD5bqmXHJcbiAgICAgIHF1ZXJ5VGFza0Rpc3BhdGNoKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGdldFRhc2tMaXN0KCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgbGV0IGZpbHRlckQgPSByZXMuZGF0YS5tYXAoaXRlbSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gey4uLml0ZW0sIHNpdGVJZDogaXRlbS5pZCwgSkQ6IGl0ZW0uamQsIFdEOiBpdGVtLndkLCB0eXBlOiAndGFzayd9XHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICB0aGlzLm1hcFRhc2tMaXN0ID0gZmlsdGVyRDtcclxuICAgICAgICAgICAgICByZXNvbHZlKGZpbHRlckQpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJlc29sdmUoW10pXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgLy/lhbPpl63lnLDlm77lvLnmoYZcclxuICAgICAgY2xvc2VQb3AoKSB7XHJcbiAgICAgICAgdGhpcy5zaG93U2l0ZVBvcCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuJHJlZnMubWFwUmVmLmNsZWFyU2VsZWN0QnlBdHRyaWJ1dGUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgLmZzIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgLmhvbWUtaGVhZGVyLXdyYXBwZXIge1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG48L3N0eWxlPlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwic3dpdGNoLXdyYXBwZXJcIiB9LFxuICAgIF92bS5fbChfdm0uc3dpdGNoTGlzdCwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHJldHVybiBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzd2l0Y2gtaXRlbVwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInZhbi1zd2l0Y2hcIiwge1xuICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tcmlnaHRcIjogXCI5cHhcIiB9LFxuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgc2l6ZTogXCIxMHB4XCIsXG4gICAgICAgICAgICAgIFwiYWN0aXZlLWNvbG9yXCI6IFwicmdiKDc5LDEwNCwyMzcpXCIsXG4gICAgICAgICAgICAgIFwiaW5hY3RpdmUtY29sb3JcIjogXCIjZDhkOGQ4XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IGl0ZW0uY2hlY2tlZCxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHNldChpdGVtLCBcImNoZWNrZWRcIiwgJCR2KVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0uY2hlY2tlZFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoaXRlbS5uYW1lKSArIFwiIFwiKSxcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIH0pLFxuICAgIDBcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiY2FsYygxMDB2aClcIiwgcG9zaXRpb246IFwicmVsYXRpdmVcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXCJ2YW4tbmF2LWJhclwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHRpdGxlOiBcIkdJU1wiLCBcImxlZnQtYXJyb3dcIjogXCJcIiB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIFwiY2xpY2stbGVmdFwiOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLiRyb3V0ZXIuZ28oLTEpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgX2MoXCJtYXBJdGVtXCIsIHtcbiAgICAgICAgcmVmOiBcIm1hcFJlZlwiLFxuICAgICAgICBhdHRyczogeyBsb2NhdGlvbjogX3ZtLmxvY2F0aW9uIH0sXG4gICAgICAgIG9uOiB7IGluaXRlZDogX3ZtLnF1ZXJ5TmVpZ2hib3VyLCBzaG93U2l0ZTogX3ZtLnNob3dTaXRlIH0sXG4gICAgICB9KSxcbiAgICAgIF9jKFwibWFwU3dpdGNoXCIsIHtcbiAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgIHZhbHVlOiBfdm0ubWFwVHlwZSAhPT0gMixcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwibWFwVHlwZSE9PTJcIixcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICBhdHRyczogeyBtYXBUeXBlOiBfdm0ubWFwVHlwZSB9LFxuICAgICAgICBvbjogeyBjaGFuZ2VTd2l0Y2g6IF92bS5jaGFuZ2VTd2l0Y2ggfSxcbiAgICAgIH0pLFxuICAgICAgX3ZtLnNob3dTaXRlUG9wXG4gICAgICAgID8gX2MoXCJtYXBTaXRlUG9wXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHNpdGVPYmo6IF92bS5zaXRlT2JqIH0sXG4gICAgICAgICAgICBvbjogeyBjbG9zZVBvcDogX3ZtLmNsb3NlUG9wIH0sXG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3dpdGNoLXdyYXBwZXJbZGF0YS12LTcwOTQyMDA2XSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogOHB4O1xcbiAgdG9wOiA5MHB4O1xcbiAgcGFkZGluZzogNnB4IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB6LWluZGV4OiA5O1xcbn1cXG4uc3dpdGNoLXdyYXBwZXIgLnN3aXRjaC1pdGVtW2RhdGEtdi03MDk0MjAwNl0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogOXB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6ICMwMDA7XFxufVxcbi5zd2l0Y2gtd3JhcHBlciAuc3dpdGNoLWl0ZW1bZGF0YS12LTcwOTQyMDA2XTpsYXN0LWNoaWxkIHtcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5mc1tkYXRhLXYtNzExYWViMmNdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uaG9tZS1oZWFkZXItd3JhcHBlcltkYXRhLXYtNzExYWViMmNdIHtcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmhvbWUtaGVhZGVyLXdyYXBwZXIgaW1nW2RhdGEtdi03MTFhZWIyY10ge1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWFwU3dpdGNoLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTcwOTQyMDA2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiZDllYzUwOTZcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tYXBTd2l0Y2gudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzA5NDIwMDYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tYXBTd2l0Y2gudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzA5NDIwMDYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzExYWViMmMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI1YmI3OWUzYlwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTcxMWFlYjJjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzExYWViMmMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XHJcblxyXG4vKipcclxuICog55m75b2VXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBsb2dpbih0b2tlbikge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvbG9naW4vdXNlcl9pbmZvJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgdG9rZW46IHRva2VuXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG4vKipcclxuICog55m75b2VLS3nur/ntKJcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGxvZ2luX2NsdWUodG9rZW4pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvbWFuYWdlL2xvZ2luL3Rva2VuX3VzZXJfaW5mbycsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICAgIHRva2VuOiB0b2tlblxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuLyoqXHJcbiAqIOermeeCueaQnOe0olxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2l0ZVNlYXJjaCh7cGFnZSwgbGltaXQsIG5hbWV9KSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC9ob21lL2xpc3QnLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBwYWdlOiBwYWdlLFxyXG4gICAgICBsaW1pdDogbGltaXQsXHJcbiAgICAgIG5hbWU6IG5hbWVcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICog55So5oi36YCa55+lXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzeXNOb3RpY2VJbmZvKCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvc3lzTm90aWNlSW5mbycsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDnlKjmiLfpgJrnn6VcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG5vdGljZVJlYWQoe25vdGljZUlkfSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvc3lzTm90aWNlSW5mby9yZWFkJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgbm90aWNlSWQ6IG5vdGljZUlkXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOazleW+i+azleinhOaQnOe0olxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gbGF3U2VhcmNoKHsgbmFtZX0pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvaW50ZXJmYWNlL3JldHJpZXZhbC9kb2N1bWVudF9zZWFyY2gnLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBwYWdlOiAxLFxyXG4gICAgICBsaW1pdDogMTAwMCxcclxuICAgICAgaWQ6ICc1MDQsNTA1LDUwNicsXHJcbiAgICAgIG5hbWU6IG5hbWVcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICog5ZGo6L6556uZ54K55pCc57SiXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBuZWlnaGJvdXJTaXRlU2VhcmNoKHtsb25naXR1ZGUsIGxhdGl0dWRlLCBudW1iZXJ9KSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC9ob21lL3N1cnJvdW5kaW5nJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgbG9uZ2l0dWRlLCBsYXRpdHVkZSwgbnVtYmVyXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWbveecgeiAg+ermeeCueS8mOiJr+aDheWGtVxyXG4gKiBAcGFyYW0gdHlwZSAx5Zu96ICDMuecgeiAg1xyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd2F0ZXJTaXRlRmluZSh7dHlwZX0pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBwL2hvbWUvJyt0eXBlLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDppa7nlKjmsLTmupDlnLDmpoLlhrVcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRyaW5rV2F0ZXJTdW1tYXJ5KCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvaG9tZScsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOi2heagh+WRiuitpi3msJRcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHdhcm5pbmdBaXIoKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC9ob21lL2Fpcldhcm5pbmcnLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDotoXmoIflkYroraYt5rC0XHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXJuaW5nV2F0ZXIoKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL0RDTVJNMTMwL21lc3NhZ2UvYWJub3JtYWxEYXRhJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICog6LaF5qCH6aKE6K2mLeawtFxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd2FybmluZ0Vhcmx5V2F0ZXIoKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL3dhdGVyL2NvbW1vbi93YXJuaW5ncycsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLy8g5rC056uZ6K+m5oOFXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXRlclN0YXRpb24ob2JqZWN0aWQsIHR5cGUsIGpjZnMpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvRENNUk0xMzAvbHlkdC9nZXRMeWR0R2snLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBvYmplY3RpZCwgdHlwZSwgamNmcyxcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICog5YWo5biC56m65rCU6LSo6YePXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhaXJRdWFsaXR5KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBwL2hvbWUvYWlyJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6ZGF0YVxyXG4gIH0pXHJcbn1cclxuLyoqXHJcbiAqIOWFqOW4guepuuawlOi0qOmHj0lBUUlcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFpclF1YWxpdHlJQVFJKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBwL2hvbWUvZ2V0SW5kZXhJYXFpJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6ZGF0YVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDmu4fmsaDmsLTotKjnirblhrVcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRpYW5XYXRlclF1YWxpdHkoKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwcC9ob21lL3NpdHVhdGlvbicsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgcGFyYW1zOiB7XHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLy/pgJrnn6XlhazlkYogLSDliJfooahcclxuZXhwb3J0IGZ1bmN0aW9uIGdldE5vdGljZUxpc3QoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9rZXBfbWFuYWdlL25vdGljZS9xdWVyeUxpc3RJbmZvJyxcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICBwYXJhbXM6IGRhdGFcclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICogR0lTLeaJgOacieaxoeafk+a6kFxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gR0lTUG9sbHV0aXRvbigpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvcG9sbHV0L3BvbGx1dGlvbi9nZXRBbGxTdW1tYXJ5JyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgIH1cclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICogR0lTLeaJgOacieawtFxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gR0lTV2F0ZXIoKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL3dhdGVyL3Zpc3VhbGl6YXRpb24vYWxsLXNlY3Rpb24nLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBHSVMt5p+l5rKf5rigXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBHSVNDaGFubmVsKHtuYW1lfSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy93YXRlci93YXRlckdxeHgnLFxyXG4gICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgIHBhcmFtczoge1xyXG4gICAgICBkd21jOiBuYW1lLFxyXG4gICAgICBncW1jOiBuYW1lXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuLyoqXHJcbiAqIOWkp+awlOermeeCuVxyXG4gKiBAcGFyYW0gdHlwZSAz5YWo6YOoXHJcbiAqIEBwYXJhbSB0aW1lIOWvhueggVxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWlyU2l0ZSh7dGltZX0pIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICdodHRwOi8vMTE2LjUyLjYuMTE4OjE4ODk5L0tRWkxZWlcvaG9tZS9yZWFsZGF0YT90eXBlPTMmdGltZT0nICsgdGltZSxcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICBkYXRhOiB7fVxyXG4gIH0pXHJcbn1cclxuXHJcbi8vIOeUqOaIt+eZu+W9lVxyXG5leHBvcnQgY29uc3QgdXNlckxvZ2luID0gKG5hbWUsIHB3ZCkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9zeXN0ZW0tc2VydmljZS1sb2dpbi91c2VyL2xvZ2luJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgdXNlck5hbWU6IG5hbWUsXHJcbiAgICAgIHBhc3N3b3JkOiBwd2RcclxuICAgIH1cclxuICB9KVxyXG59O1xyXG5cclxuLyoqXHJcbiAqIOeUqOaIt+e7hOS7tuiuoumYhVxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdXNlclN1YnNjcmliZSh0b2tlbikge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcHAvaG9tZS91c2VyU3Vic2NyaWJlJyxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgVG9rZW46IHRva2VuXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG4iLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XHJcblxyXG4vKipcclxuICog5Lu75Yqh5YiX6KGoXHJcbiAqIEBwYXJhbSB1c2VySWQg5b2T5YmN55So5oi3aWRcclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRhc2tMaXN0KCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9wb2xsdXQvcG9sbHV0aW9uL3Rhc2tMaXN0JyxcclxuICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICBwYXJhbXM6IHtcclxuICAgICAgdXNlcklkOiAnJ1xyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlj5HluIPku7vliqFcclxuICogQHBhcmFtIGRhdGEg5Lu75Yqh5bGe5oCnXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3N0VGFza0FkZChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL3BvbGx1dC9wb2xsdXRpb24vaW5zVGFzaycsXHJcbiAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgIGRhdGE6IGRhdGFcclxuICB9KVxyXG59XHJcblxyXG4vKipcclxuICog5aSE572u5a+56LGh5LiL5ouJXHJcbiAqIEBwYXJhbSBkaXZpc2lvbl9jb2RlIOW9k+WJjeeZu+W9leeUqOaIt+eahOihjOaUv+WMuuWIklxyXG4gKiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGFza0Rpc3Bvc2UoKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL3BzL3VzZXIvZ2V0QWxsVXNlcicsXHJcbiAgICBtZXRob2Q6ICdHRVQnLFxyXG4gICAgcGFyYW1zOiB7XHJcblxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlj43ppohcclxuICogQHBhcmFtIGRhdGEg5Y+N6aaI5bGe5oCnXHJcbiAqICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwb3N0VGFza0ZlZWRiYWNrKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvcG9sbHV0L3BvbGx1dGlvbi91cGRUYXNrJyxcclxuICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgZGF0YTogZGF0YVxyXG4gIH0pXHJcbn1cclxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9tYXBTd2l0Y2gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcwOTQyMDA2JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL21hcFN3aXRjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL21hcFN3aXRjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vbWFwU3dpdGNoLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTcwOTQyMDA2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNzA5NDIwMDZcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNzA5NDIwMDYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzA5NDIwMDYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzA5NDIwMDYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL21hcFN3aXRjaC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzA5NDIwMDYmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNzA5NDIwMDYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9naXMvY29tcG9uZW50cy9zd2l0Y2gvbWFwU3dpdGNoLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWFwU3dpdGNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tYXBTd2l0Y2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWFwU3dpdGNoLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTcwOTQyMDA2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWFwU3dpdGNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03MDk0MjAwNiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTcxMWFlYjJjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTcxMWFlYjJjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNzExYWViMmNcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNzExYWViMmMnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNzExYWViMmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNzExYWViMmMnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03MTFhZWIyYyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc3MTFhZWIyYycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL2dpcy9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03MTFhZWIyYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03MTFhZWIyYyZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=