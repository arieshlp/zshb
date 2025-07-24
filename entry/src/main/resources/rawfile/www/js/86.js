(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[86],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/switch/mapAirPollutionSwitch.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/switch/mapAirPollutionSwitch.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
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
  name: "mapAirPollutionSwitch",
  props: {
    switchList: {
      type: Array,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      /*switchList:  [{
        name: '钢铁行业',
        checked: true,
        value: '1',
      }, {
        name: '燃煤电厂',
        checked: true,
        value: '2',
      }, {
        name: '建材',
        checked: true,
        value: '3',
      }, {
        name: '物流园区',
        checked: true,
        value: '4',
      },  {
        name: '建筑工地',
        checked: true,
        value: '5',
      }, {
        name: '裸露土地',
        checked: true,
        value: '6',
      }],*/
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

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/involveAirPollutionMap.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/involveAirPollutionMap.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2.js */ "./node_modules/@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _views_gis_components_mapItem_vue__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/views/gis/components/mapItem.vue */ "./src/views/gis/components/mapItem.vue");
/* harmony import */ var _views_gis_components_pop_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/views/gis/components/pop/index */ "./src/views/gis/components/pop/index.vue");
/* harmony import */ var _views_gis_components_switch_mapAirPollutionSwitch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/views/gis/components/switch/mapAirPollutionSwitch */ "./src/views/gis/components/switch/mapAirPollutionSwitch.vue");
/* harmony import */ var _api_water_envir__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/api/water_envir */ "./src/api/water_envir.js");
/* harmony import */ var _api_air_quality_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/api/air_quality.js */ "./src/api/air_quality.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_12__);







//
//
//
//
//
//
//
//
//
//
//
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
  name: "involveAirPollutionMap",
  components: {
    mapItem: _views_gis_components_mapItem_vue__WEBPACK_IMPORTED_MODULE_7__["default"],
    mapSitePop: _views_gis_components_pop_index__WEBPACK_IMPORTED_MODULE_8__["default"],
    mapAirPollutionSwitch: _views_gis_components_switch_mapAirPollutionSwitch__WEBPACK_IMPORTED_MODULE_9__["default"]
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
      switchArr: [],
      siteId: null,
      typeId: null,
      secondTypeId: [],
      centerObj: {},
      enterpriseName: null,
      isFirst: true
    };
  },
  mounted: function mounted() {
    this.location = ['', ''];
    this.siteId = this.$route.query.siteId;
    this.typeId = this.$route.query.typeId;
    this.enterpriseName = this.$route.query.enterpriseName;
    this.querySecondMenu();
  },
  methods: {
    querySecondMenu: function querySecondMenu() {
      var _this = this;

      Object(_api_air_quality_js__WEBPACK_IMPORTED_MODULE_11__["treeList"])({
        siteId: this.siteId,
        typeId: this.typeId
      }).then(function (res) {
        _this.switchArr = res.data.map(function (item) {
          return {
            name: item.NAME,
            value: item.ID,
            checked: true
          };
        });
      });
    },
    //先渲染空气站点
    queryAirSite: function queryAirSite() {
      var _this2 = this;

      return Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var info;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                info = {
                  dataType: 1,
                  siteId: _this2.siteId,
                  divisionName: '',
                  aqi: ''
                };
                Object(_api_air_quality_js__WEBPACK_IMPORTED_MODULE_11__["airQualitySiteDataType"])(info).then(function (res) {
                  _this2.centerObj = res.data;

                  _this2.$refs.mapRef.addPoint({
                    JD: _this2.centerObj.longitude,
                    WD: _this2.centerObj.latitude,
                    type: "air",
                    id: _this2.siteId,
                    name: _this2.centerObj.siteName,
                    aqi: _this2.centerObj.aqi
                  }, "location_layer");

                  _this2.$refs.mapRef.panToCoordinate([_this2.centerObj.longitude, _this2.centerObj.latitude], 5);
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    //如果污染源名称存在就默认展示污染源的弹框
    getEnterObj: function getEnterObj() {
      if (this.isFirst) {
        if (this.enterpriseName) {
          this.siteObj = {
            enterpriseName: this.$route.query.enterpriseName,
            address: this.$route.query.enterpriseAddress,
            JD: this.$route.query.enterpriseJD,
            WD: this.$route.query.enterpriseWD,
            type: "wryAir"
          };
          this.$refs.mapRef.panToCoordinate([this.siteObj.JD, this.siteObj.WD], 12);
          this.showSitePop = true;
        }

        this.isFirst = false;
      }
    },
    //地图点击弹框展示
    showSite: function showSite(show, obj) {
      this.showSitePop = show;
      this.siteObj = obj;
    },
    //查询站点的涉气污染源
    queryPurPlant: function queryPurPlant() {
      var _this3 = this;

      return new Promise(function (resolve) {
        try {
          Object(_api_air_quality_js__WEBPACK_IMPORTED_MODULE_11__["pollList"])({
            name: '',
            siteId: _this3.siteId,
            typeId: _this3.secondTypeId.join(',')
          }).then(function (res) {
            var filterD = res.data.map(function (item) {
              return Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])(Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_0__["default"])({}, item), {}, {
                id: item.id,
                JD: item.longitude,
                WD: item.latitude,
                type: 'wryAir'
              });
            });
            _this3.mapWaterList = filterD;
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
    },
    //右上角的类型切换
    changeSwitch: function changeSwitch(data) {
      var _this4 = this;

      return Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var water;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (_this4.$refs.mapRef) {
                  _this4.$refs.mapRef.clearLayers('water_layer');
                }

                _this4.closePop();

                _this4.secondTypeId = data.filter(function (item) {
                  return item.checked;
                }).map(function (item) {
                  return item.value;
                });
                _context2.next = 5;
                return _this4.queryPurPlant();

              case 5:
                water = _context2.sent;
                water.map(function (item) {
                  _this4.$refs.mapRef.addPoint(item, 'water_layer');
                });

                _this4.getEnterObj();

              case 8:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/switch/mapAirPollutionSwitch.vue?vue&type=template&id=ee2b70b4&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/switch/mapAirPollutionSwitch.vue?vue&type=template&id=ee2b70b4&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _vm.switchList && _vm.switchList.length > 0
    ? _c(
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
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/involveAirPollutionMap.vue?vue&type=template&id=e1251952&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/involveAirPollutionMap.vue?vue&type=template&id=e1251952&scoped=true& ***!
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
  return _c(
    "div",
    { staticStyle: { height: "calc(100vh)", position: "relative" } },
    [
      _c("van-nav-bar", {
        attrs: { title: "周边污染源", "left-arrow": "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
      }),
      _c("mapItem", {
        ref: "mapRef",
        attrs: { location: _vm.location },
        on: { inited: _vm.queryAirSite, showSite: _vm.showSite },
      }),
      _c("mapAirPollutionSwitch", {
        attrs: { mapType: _vm.mapType, switchList: _vm.switchArr },
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/switch/mapAirPollutionSwitch.vue?vue&type=style&index=0&id=ee2b70b4&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/switch/mapAirPollutionSwitch.vue?vue&type=style&index=0&id=ee2b70b4&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".switch-wrapper[data-v-ee2b70b4] {\n  position: absolute;\n  right: 8px;\n  top: 90px;\n  padding: 6px 8px;\n  border-radius: 4px;\n  background-color: #fff;\n  z-index: 9;\n}\n.switch-wrapper .switch-item[data-v-ee2b70b4] {\n  display: flex;\n  align-items: center;\n  padding-bottom: 9px;\n  font-size: 12px;\n  color: #000;\n}\n.switch-wrapper .switch-item[data-v-ee2b70b4]:last-child {\n  padding-bottom: 0;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/switch/mapAirPollutionSwitch.vue?vue&type=style&index=0&id=ee2b70b4&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/gis/components/switch/mapAirPollutionSwitch.vue?vue&type=style&index=0&id=ee2b70b4&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./mapAirPollutionSwitch.vue?vue&type=style&index=0&id=ee2b70b4&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/switch/mapAirPollutionSwitch.vue?vue&type=style&index=0&id=ee2b70b4&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("36fdec52", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/views/gis/components/switch/mapAirPollutionSwitch.vue":
/*!*******************************************************************!*\
  !*** ./src/views/gis/components/switch/mapAirPollutionSwitch.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mapAirPollutionSwitch_vue_vue_type_template_id_ee2b70b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mapAirPollutionSwitch.vue?vue&type=template&id=ee2b70b4&scoped=true& */ "./src/views/gis/components/switch/mapAirPollutionSwitch.vue?vue&type=template&id=ee2b70b4&scoped=true&");
/* harmony import */ var _mapAirPollutionSwitch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mapAirPollutionSwitch.vue?vue&type=script&lang=js& */ "./src/views/gis/components/switch/mapAirPollutionSwitch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _mapAirPollutionSwitch_vue_vue_type_style_index_0_id_ee2b70b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mapAirPollutionSwitch.vue?vue&type=style&index=0&id=ee2b70b4&lang=scss&scoped=true& */ "./src/views/gis/components/switch/mapAirPollutionSwitch.vue?vue&type=style&index=0&id=ee2b70b4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _mapAirPollutionSwitch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _mapAirPollutionSwitch_vue_vue_type_template_id_ee2b70b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _mapAirPollutionSwitch_vue_vue_type_template_id_ee2b70b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "ee2b70b4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/gis/components/switch/mapAirPollutionSwitch.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/gis/components/switch/mapAirPollutionSwitch.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./src/views/gis/components/switch/mapAirPollutionSwitch.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapAirPollutionSwitch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./mapAirPollutionSwitch.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/switch/mapAirPollutionSwitch.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapAirPollutionSwitch_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/gis/components/switch/mapAirPollutionSwitch.vue?vue&type=style&index=0&id=ee2b70b4&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./src/views/gis/components/switch/mapAirPollutionSwitch.vue?vue&type=style&index=0&id=ee2b70b4&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapAirPollutionSwitch_vue_vue_type_style_index_0_id_ee2b70b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./mapAirPollutionSwitch.vue?vue&type=style&index=0&id=ee2b70b4&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/switch/mapAirPollutionSwitch.vue?vue&type=style&index=0&id=ee2b70b4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapAirPollutionSwitch_vue_vue_type_style_index_0_id_ee2b70b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapAirPollutionSwitch_vue_vue_type_style_index_0_id_ee2b70b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapAirPollutionSwitch_vue_vue_type_style_index_0_id_ee2b70b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapAirPollutionSwitch_vue_vue_type_style_index_0_id_ee2b70b4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/gis/components/switch/mapAirPollutionSwitch.vue?vue&type=template&id=ee2b70b4&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./src/views/gis/components/switch/mapAirPollutionSwitch.vue?vue&type=template&id=ee2b70b4&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapAirPollutionSwitch_vue_vue_type_template_id_ee2b70b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./mapAirPollutionSwitch.vue?vue&type=template&id=ee2b70b4&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/components/switch/mapAirPollutionSwitch.vue?vue&type=template&id=ee2b70b4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapAirPollutionSwitch_vue_vue_type_template_id_ee2b70b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_mapAirPollutionSwitch_vue_vue_type_template_id_ee2b70b4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/gis/involveAirPollutionMap.vue":
/*!**************************************************!*\
  !*** ./src/views/gis/involveAirPollutionMap.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _involveAirPollutionMap_vue_vue_type_template_id_e1251952_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involveAirPollutionMap.vue?vue&type=template&id=e1251952&scoped=true& */ "./src/views/gis/involveAirPollutionMap.vue?vue&type=template&id=e1251952&scoped=true&");
/* harmony import */ var _involveAirPollutionMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./involveAirPollutionMap.vue?vue&type=script&lang=js& */ "./src/views/gis/involveAirPollutionMap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _involveAirPollutionMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _involveAirPollutionMap_vue_vue_type_template_id_e1251952_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _involveAirPollutionMap_vue_vue_type_template_id_e1251952_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "e1251952",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/gis/involveAirPollutionMap.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/gis/involveAirPollutionMap.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/views/gis/involveAirPollutionMap.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_involveAirPollutionMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./involveAirPollutionMap.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/involveAirPollutionMap.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_involveAirPollutionMap_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/gis/involveAirPollutionMap.vue?vue&type=template&id=e1251952&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./src/views/gis/involveAirPollutionMap.vue?vue&type=template&id=e1251952&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_involveAirPollutionMap_vue_vue_type_template_id_e1251952_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./involveAirPollutionMap.vue?vue&type=template&id=e1251952&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/gis/involveAirPollutionMap.vue?vue&type=template&id=e1251952&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_involveAirPollutionMap_vue_vue_type_template_id_e1251952_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_involveAirPollutionMap_vue_vue_type_template_id_e1251952_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3N3aXRjaC9tYXBBaXJQb2xsdXRpb25Td2l0Y2gudnVlIiwid2VicGFjazovLy9zcmMvdmlld3MvZ2lzL2ludm9sdmVBaXJQb2xsdXRpb25NYXAudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9naXMvY29tcG9uZW50cy9zd2l0Y2gvbWFwQWlyUG9sbHV0aW9uU3dpdGNoLnZ1ZT9hZjg4Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9naXMvaW52b2x2ZUFpclBvbGx1dGlvbk1hcC52dWU/YWU4YiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2lzL2NvbXBvbmVudHMvc3dpdGNoL21hcEFpclBvbGx1dGlvblN3aXRjaC52dWU/ZjUzMyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2lzL2NvbXBvbmVudHMvc3dpdGNoL21hcEFpclBvbGx1dGlvblN3aXRjaC52dWU/YWE3YiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2lzL2NvbXBvbmVudHMvc3dpdGNoL21hcEFpclBvbGx1dGlvblN3aXRjaC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3N3aXRjaC9tYXBBaXJQb2xsdXRpb25Td2l0Y2gudnVlP2ViZGEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3N3aXRjaC9tYXBBaXJQb2xsdXRpb25Td2l0Y2gudnVlPzQzODgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9jb21wb25lbnRzL3N3aXRjaC9tYXBBaXJQb2xsdXRpb25Td2l0Y2gudnVlP2RlN2MiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9pbnZvbHZlQWlyUG9sbHV0aW9uTWFwLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZ2lzL2ludm9sdmVBaXJQb2xsdXRpb25NYXAudnVlP2VmOTEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2dpcy9pbnZv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Ozs7Ozs7O0FDQW5VO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy84Ni5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IHYtaWY9XCJzd2l0Y2hMaXN0JiZzd2l0Y2hMaXN0Lmxlbmd0aD4wXCIgY2xhc3M9XCJzd2l0Y2gtd3JhcHBlclwiPlxyXG4gICAgPGRpdiB2LWZvcj1cIml0ZW0gaW4gc3dpdGNoTGlzdFwiIGNsYXNzPVwic3dpdGNoLWl0ZW1cIj5cclxuICAgICAgPHZhbi1zd2l0Y2ggdi1tb2RlbD1cIml0ZW0uY2hlY2tlZFwiIHNpemU9XCIxMHB4XCIgYWN0aXZlLWNvbG9yPVwicmdiKDc5LDEwNCwyMzcpXCIgaW5hY3RpdmUtY29sb3I9XCIjZDhkOGQ4XCJcclxuICAgICAgICAgICAgICAgICAgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDlweFwiLz5cclxuICAgICAge3tpdGVtLm5hbWV9fVxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwibWFwQWlyUG9sbHV0aW9uU3dpdGNoXCIsXHJcbiAgICBwcm9wczp7XHJcbiAgICAgIHN3aXRjaExpc3Q6IHtcclxuICAgICAgICB0eXBlOiBBcnJheSxcclxuICAgICAgICBkZWZhdWx0OiAoKT0+e31cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLypzd2l0Y2hMaXN0OiAgW3tcclxuICAgICAgICAgIG5hbWU6ICfpkqLpk4HooYzkuJonLFxyXG4gICAgICAgICAgY2hlY2tlZDogdHJ1ZSxcclxuICAgICAgICAgIHZhbHVlOiAnMScsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgbmFtZTogJ+eHg+eFpOeUteWOgicsXHJcbiAgICAgICAgICBjaGVja2VkOiB0cnVlLFxyXG4gICAgICAgICAgdmFsdWU6ICcyJyxcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICBuYW1lOiAn5bu65p2QJyxcclxuICAgICAgICAgIGNoZWNrZWQ6IHRydWUsXHJcbiAgICAgICAgICB2YWx1ZTogJzMnLFxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgIG5hbWU6ICfnianmtYHlm63ljLonLFxyXG4gICAgICAgICAgY2hlY2tlZDogdHJ1ZSxcclxuICAgICAgICAgIHZhbHVlOiAnNCcsXHJcbiAgICAgICAgfSwgIHtcclxuICAgICAgICAgIG5hbWU6ICflu7rnrZHlt6XlnLAnLFxyXG4gICAgICAgICAgY2hlY2tlZDogdHJ1ZSxcclxuICAgICAgICAgIHZhbHVlOiAnNScsXHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgbmFtZTogJ+ijuOmcsuWcn+WcsCcsXHJcbiAgICAgICAgICBjaGVja2VkOiB0cnVlLFxyXG4gICAgICAgICAgdmFsdWU6ICc2JyxcclxuICAgICAgICB9XSwqL1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgc3dpdGNoTGlzdDoge1xyXG4gICAgICAgIGhhbmRsZXIobmV3RCkge1xyXG4gICAgICAgICAgdGhpcy4kZW1pdCgnY2hhbmdlU3dpdGNoJywgbmV3RClcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRlZXA6IHRydWUsXHJcbiAgICAgICAgaW1tZWRpYXRlOiBmYWxzZVxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgIC8vIHRoaXMuc3dpdGNoTGlzdCA9IHRoaXMucG9sbHV0aW9uTGlzdFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHt9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICAuc3dpdGNoLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDhweDtcclxuICAgIHRvcDogOTBweDtcclxuICAgIHBhZGRpbmc6IDZweCA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgei1pbmRleDogOTtcclxuXHJcbiAgICAuc3dpdGNoLWl0ZW0ge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogOXB4O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG5cclxuICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IGNhbGMoMTAwdmgpO3Bvc2l0aW9uOiByZWxhdGl2ZVwiPlxyXG4gICAgPHZhbi1uYXYtYmFyXHJcbiAgICAgICAgdGl0bGU9XCLlkajovrnmsaHmn5PmupBcIlxyXG4gICAgICAgIGxlZnQtYXJyb3dcclxuICAgICAgICBAY2xpY2stbGVmdD1cIiRyb3V0ZXIuZ28oLTEpXCJcclxuICAgID5cclxuICAgIDwvdmFuLW5hdi1iYXI+XHJcblxyXG4gICAgPCEtLeWcsOWbvi0tPlxyXG4gICAgPG1hcEl0ZW0gcmVmPVwibWFwUmVmXCIgQGluaXRlZD1cInF1ZXJ5QWlyU2l0ZVwiIEBzaG93U2l0ZT1cInNob3dTaXRlXCIgOmxvY2F0aW9uPVwibG9jYXRpb25cIi8+XHJcblxyXG4gICAgPG1hcEFpclBvbGx1dGlvblN3aXRjaCA6bWFwVHlwZT1cIm1hcFR5cGVcIiA6c3dpdGNoTGlzdD1cInN3aXRjaEFyclwiIEBjaGFuZ2VTd2l0Y2g9XCJjaGFuZ2VTd2l0Y2hcIi8+XHJcblxyXG4gICAgPCEtLeWcsOWbvuW8ueahhi0tPlxyXG4gICAgPG1hcFNpdGVQb3Agdi1pZj1cInNob3dTaXRlUG9wXCIgOnNpdGVPYmo9XCJzaXRlT2JqXCIgQGNsb3NlUG9wPVwiY2xvc2VQb3BcIi8+XHJcblxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgbWFwSXRlbSBmcm9tICdAL3ZpZXdzL2dpcy9jb21wb25lbnRzL21hcEl0ZW0udnVlJ1xyXG4gIGltcG9ydCBtYXBTaXRlUG9wIGZyb20gXCJAL3ZpZXdzL2dpcy9jb21wb25lbnRzL3BvcC9pbmRleFwiO1xyXG4gIGltcG9ydCBtYXBBaXJQb2xsdXRpb25Td2l0Y2ggZnJvbSBcIkAvdmlld3MvZ2lzL2NvbXBvbmVudHMvc3dpdGNoL21hcEFpclBvbGx1dGlvblN3aXRjaFwiO1xyXG4gIGltcG9ydCB7d2F0ZXJQbGFudExpc3R9IGZyb20gXCJAL2FwaS93YXRlcl9lbnZpclwiO1xyXG4gIGltcG9ydCB7dHJlZUxpc3QsIGFpclF1YWxpdHlTaXRlRGF0YVR5cGUsIHBvbGxMaXN0fSBmcm9tICdAL2FwaS9haXJfcXVhbGl0eS5qcydcclxuICBpbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiaW52b2x2ZUFpclBvbGx1dGlvbk1hcFwiLFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICBtYXBJdGVtLFxyXG4gICAgICBtYXBTaXRlUG9wLFxyXG4gICAgICBtYXBBaXJQb2xsdXRpb25Td2l0Y2hcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGxvY2F0aW9uOiBudWxsLFxyXG4gICAgICAgIG1hcFR5cGU6IDAsXHJcbiAgICAgICAgbWFwTGlzdDogW10sXHJcbiAgICAgICAgbWFwQWlyTGlzdDogW10sXHJcbiAgICAgICAgbWFwV2F0ZXJMaXN0OiBbXSxcclxuICAgICAgICBtYXBQb2xsdXRpb25MaXN0OiBbXSxcclxuICAgICAgICBtYXBUYXNrTGlzdDogW10sXHJcbiAgICAgICAgc2hvd1NpdGVQb3A6IGZhbHNlLFxyXG4gICAgICAgIHNpdGVPYmo6IHtcclxuICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgdHlwZTogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3dpdGNoQXJyOiBbXSxcclxuICAgICAgICBzaXRlSWQ6IG51bGwsXHJcbiAgICAgICAgdHlwZUlkOiBudWxsLFxyXG4gICAgICAgIHNlY29uZFR5cGVJZDogW10sXHJcbiAgICAgICAgY2VudGVyT2JqOiB7fSxcclxuICAgICAgICBlbnRlcnByaXNlTmFtZTogbnVsbCxcclxuICAgICAgICBpc0ZpcnN0OiB0cnVlXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICB0aGlzLmxvY2F0aW9uID0gWycnLCAnJ107XHJcbiAgICAgIHRoaXMuc2l0ZUlkID0gdGhpcy4kcm91dGUucXVlcnkuc2l0ZUlkO1xyXG4gICAgICB0aGlzLnR5cGVJZCA9IHRoaXMuJHJvdXRlLnF1ZXJ5LnR5cGVJZDtcclxuICAgICAgdGhpcy5lbnRlcnByaXNlTmFtZSA9IHRoaXMuJHJvdXRlLnF1ZXJ5LmVudGVycHJpc2VOYW1lO1xyXG4gICAgICB0aGlzLnF1ZXJ5U2Vjb25kTWVudSgpO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgcXVlcnlTZWNvbmRNZW51KCkge1xyXG4gICAgICAgIHRyZWVMaXN0KHtcclxuICAgICAgICAgIHNpdGVJZDogdGhpcy5zaXRlSWQsXHJcbiAgICAgICAgICB0eXBlSWQ6IHRoaXMudHlwZUlkLFxyXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIHRoaXMuc3dpdGNoQXJyID0gcmVzLmRhdGEubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge25hbWU6IGl0ZW0uTkFNRSwgdmFsdWU6IGl0ZW0uSUQsIGNoZWNrZWQ6IHRydWV9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIC8v5YWI5riy5p+T56m65rCU56uZ54K5XHJcbiAgICAgIGFzeW5jIHF1ZXJ5QWlyU2l0ZSgpIHtcclxuICAgICAgICBsZXQgaW5mbyA9IHtcclxuICAgICAgICAgIGRhdGFUeXBlOiAxLFxyXG4gICAgICAgICAgc2l0ZUlkOiB0aGlzLnNpdGVJZCxcclxuICAgICAgICAgIGRpdmlzaW9uTmFtZTogJycsXHJcbiAgICAgICAgICBhcWk6ICcnLFxyXG4gICAgICAgIH1cclxuICAgICAgICBhaXJRdWFsaXR5U2l0ZURhdGFUeXBlKGluZm8pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIHRoaXMuY2VudGVyT2JqID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICB0aGlzLiRyZWZzLm1hcFJlZi5hZGRQb2ludCh7XHJcbiAgICAgICAgICAgIEpEOiB0aGlzLmNlbnRlck9iai5sb25naXR1ZGUsXHJcbiAgICAgICAgICAgIFdEOiB0aGlzLmNlbnRlck9iai5sYXRpdHVkZSxcclxuICAgICAgICAgICAgdHlwZTogXCJhaXJcIixcclxuICAgICAgICAgICAgaWQ6IHRoaXMuc2l0ZUlkLFxyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLmNlbnRlck9iai5zaXRlTmFtZSxcclxuICAgICAgICAgICAgYXFpOiB0aGlzLmNlbnRlck9iai5hcWksXHJcbiAgICAgICAgICB9LCBcImxvY2F0aW9uX2xheWVyXCIpO1xyXG4gICAgICAgICAgdGhpcy4kcmVmcy5tYXBSZWYucGFuVG9Db29yZGluYXRlKFt0aGlzLmNlbnRlck9iai5sb25naXR1ZGUsIHRoaXMuY2VudGVyT2JqLmxhdGl0dWRlXSwgNSk7XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIC8v5aaC5p6c5rGh5p+T5rqQ5ZCN56ew5a2Y5Zyo5bCx6buY6K6k5bGV56S65rGh5p+T5rqQ55qE5by55qGGXHJcbiAgICAgIGdldEVudGVyT2JqKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzRmlyc3QpIHtcclxuICAgICAgICAgIGlmICh0aGlzLmVudGVycHJpc2VOYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2l0ZU9iaiA9IHtcclxuICAgICAgICAgICAgICBlbnRlcnByaXNlTmFtZTogdGhpcy4kcm91dGUucXVlcnkuZW50ZXJwcmlzZU5hbWUsXHJcbiAgICAgICAgICAgICAgYWRkcmVzczogdGhpcy4kcm91dGUucXVlcnkuZW50ZXJwcmlzZUFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgSkQ6IHRoaXMuJHJvdXRlLnF1ZXJ5LmVudGVycHJpc2VKRCxcclxuICAgICAgICAgICAgICBXRDogdGhpcy4kcm91dGUucXVlcnkuZW50ZXJwcmlzZVdELFxyXG4gICAgICAgICAgICAgIHR5cGU6IFwid3J5QWlyXCIsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuJHJlZnMubWFwUmVmLnBhblRvQ29vcmRpbmF0ZShbdGhpcy5zaXRlT2JqLkpELCB0aGlzLnNpdGVPYmouV0RdLCAxMik7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd1NpdGVQb3AgPSB0cnVlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5pc0ZpcnN0ID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgICAvL+WcsOWbvueCueWHu+W8ueahhuWxleekulxyXG4gICAgICBzaG93U2l0ZShzaG93LCBvYmopIHtcclxuICAgICAgICB0aGlzLnNob3dTaXRlUG9wID0gc2hvdztcclxuICAgICAgICB0aGlzLnNpdGVPYmogPSBvYmo7XHJcbiAgICAgIH0sXHJcbiAgICAgIC8v5p+l6K+i56uZ54K555qE5raJ5rCU5rGh5p+T5rqQXHJcbiAgICAgIHF1ZXJ5UHVyUGxhbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcG9sbExpc3Qoe1xyXG4gICAgICAgICAgICAgIG5hbWU6ICcnLFxyXG4gICAgICAgICAgICAgIHNpdGVJZDogdGhpcy5zaXRlSWQsXHJcbiAgICAgICAgICAgICAgdHlwZUlkOiB0aGlzLnNlY29uZFR5cGVJZC5qb2luKCcsJyksXHJcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgIGxldCBmaWx0ZXJEID0gcmVzLmRhdGEubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsuLi5pdGVtLCBpZDogaXRlbS5pZCwgSkQ6IGl0ZW0ubG9uZ2l0dWRlLCBXRDogaXRlbS5sYXRpdHVkZSwgdHlwZTogJ3dyeUFpcicsfVxyXG4gICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgdGhpcy5tYXBXYXRlckxpc3QgPSBmaWx0ZXJEO1xyXG4gICAgICAgICAgICAgIHJlc29sdmUoZmlsdGVyRClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmVzb2x2ZShbXSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICAvL+WFs+mXreWcsOWbvuW8ueahhlxyXG4gICAgICBjbG9zZVBvcCgpIHtcclxuICAgICAgICB0aGlzLnNob3dTaXRlUG9wID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy4kcmVmcy5tYXBSZWYuY2xlYXJTZWxlY3RCeUF0dHJpYnV0ZSgpO1xyXG4gICAgICB9LFxyXG4gICAgICAvL+WPs+S4iuinkueahOexu+Wei+WIh+aNolxyXG4gICAgICBhc3luYyBjaGFuZ2VTd2l0Y2goZGF0YSkge1xyXG4gICAgICAgIGlmKHRoaXMuJHJlZnMubWFwUmVmKXtcclxuICAgICAgICAgIHRoaXMuJHJlZnMubWFwUmVmLmNsZWFyTGF5ZXJzKCd3YXRlcl9sYXllcicpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jbG9zZVBvcCgpO1xyXG4gICAgICAgIHRoaXMuc2Vjb25kVHlwZUlkID0gZGF0YS5maWx0ZXIoaXRlbSA9PiBpdGVtLmNoZWNrZWQpLm1hcChpdGVtID0+IGl0ZW0udmFsdWUpO1xyXG4gICAgICAgIGxldCB3YXRlciA9IGF3YWl0IHRoaXMucXVlcnlQdXJQbGFudCgpO1xyXG4gICAgICAgIHdhdGVyLm1hcChpdGVtID0+IHtcclxuICAgICAgICAgIHRoaXMuJHJlZnMubWFwUmVmLmFkZFBvaW50KGl0ZW0sICd3YXRlcl9sYXllcicpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuZ2V0RW50ZXJPYmooKTtcclxuXHJcbiAgICAgIH0sXHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLnN3aXRjaExpc3QgJiYgX3ZtLnN3aXRjaExpc3QubGVuZ3RoID4gMFxuICAgID8gX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic3dpdGNoLXdyYXBwZXJcIiB9LFxuICAgICAgICBfdm0uX2woX3ZtLnN3aXRjaExpc3QsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic3dpdGNoLWl0ZW1cIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInZhbi1zd2l0Y2hcIiwge1xuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLXJpZ2h0XCI6IFwiOXB4XCIgfSxcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgc2l6ZTogXCIxMHB4XCIsXG4gICAgICAgICAgICAgICAgICBcImFjdGl2ZS1jb2xvclwiOiBcInJnYig3OSwxMDQsMjM3KVwiLFxuICAgICAgICAgICAgICAgICAgXCJpbmFjdGl2ZS1jb2xvclwiOiBcIiNkOGQ4ZDhcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogaXRlbS5jaGVja2VkLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoaXRlbSwgXCJjaGVja2VkXCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIml0ZW0uY2hlY2tlZFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoaXRlbS5uYW1lKSArIFwiIFwiKSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICB9KSxcbiAgICAgICAgMFxuICAgICAgKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcImNhbGMoMTAwdmgpXCIsIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwidmFuLW5hdi1iYXJcIiwge1xuICAgICAgICBhdHRyczogeyB0aXRsZTogXCLlkajovrnmsaHmn5PmupBcIiwgXCJsZWZ0LWFycm93XCI6IFwiXCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcImNsaWNrLWxlZnRcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLmdvKC0xKVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIF9jKFwibWFwSXRlbVwiLCB7XG4gICAgICAgIHJlZjogXCJtYXBSZWZcIixcbiAgICAgICAgYXR0cnM6IHsgbG9jYXRpb246IF92bS5sb2NhdGlvbiB9LFxuICAgICAgICBvbjogeyBpbml0ZWQ6IF92bS5xdWVyeUFpclNpdGUsIHNob3dTaXRlOiBfdm0uc2hvd1NpdGUgfSxcbiAgICAgIH0pLFxuICAgICAgX2MoXCJtYXBBaXJQb2xsdXRpb25Td2l0Y2hcIiwge1xuICAgICAgICBhdHRyczogeyBtYXBUeXBlOiBfdm0ubWFwVHlwZSwgc3dpdGNoTGlzdDogX3ZtLnN3aXRjaEFyciB9LFxuICAgICAgICBvbjogeyBjaGFuZ2VTd2l0Y2g6IF92bS5jaGFuZ2VTd2l0Y2ggfSxcbiAgICAgIH0pLFxuICAgICAgX3ZtLnNob3dTaXRlUG9wXG4gICAgICAgID8gX2MoXCJtYXBTaXRlUG9wXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHNpdGVPYmo6IF92bS5zaXRlT2JqIH0sXG4gICAgICAgICAgICBvbjogeyBjbG9zZVBvcDogX3ZtLmNsb3NlUG9wIH0sXG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuc3dpdGNoLXdyYXBwZXJbZGF0YS12LWVlMmI3MGI0XSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogOHB4O1xcbiAgdG9wOiA5MHB4O1xcbiAgcGFkZGluZzogNnB4IDhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB6LWluZGV4OiA5O1xcbn1cXG4uc3dpdGNoLXdyYXBwZXIgLnN3aXRjaC1pdGVtW2RhdGEtdi1lZTJiNzBiNF0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogOXB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6ICMwMDA7XFxufVxcbi5zd2l0Y2gtd3JhcHBlciAuc3dpdGNoLWl0ZW1bZGF0YS12LWVlMmI3MGI0XTpsYXN0LWNoaWxkIHtcXG4gIHBhZGRpbmctYm90dG9tOiAwO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL21hcEFpclBvbGx1dGlvblN3aXRjaC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1lZTJiNzBiNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjM2ZmRlYzUyXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWFwQWlyUG9sbHV0aW9uU3dpdGNoLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWVlMmI3MGI0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWFwQWlyUG9sbHV0aW9uU3dpdGNoLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWVlMmI3MGI0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9tYXBBaXJQb2xsdXRpb25Td2l0Y2gudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWVlMmI3MGI0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL21hcEFpclBvbGx1dGlvblN3aXRjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL21hcEFpclBvbGx1dGlvblN3aXRjaC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vbWFwQWlyUG9sbHV0aW9uU3dpdGNoLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWVlMmI3MGI0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiZWUyYjcwYjRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnZWUyYjcwYjQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnZWUyYjcwYjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnZWUyYjcwYjQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL21hcEFpclBvbGx1dGlvblN3aXRjaC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZWUyYjcwYjQmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZWUyYjcwYjQnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9naXMvY29tcG9uZW50cy9zd2l0Y2gvbWFwQWlyUG9sbHV0aW9uU3dpdGNoLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWFwQWlyUG9sbHV0aW9uU3dpdGNoLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9tYXBBaXJQb2xsdXRpb25Td2l0Y2gudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWFwQWlyUG9sbHV0aW9uU3dpdGNoLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWVlMmI3MGI0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbWFwQWlyUG9sbHV0aW9uU3dpdGNoLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lZTJiNzBiNCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW52b2x2ZUFpclBvbGx1dGlvbk1hcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTEyNTE5NTImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW52b2x2ZUFpclBvbGx1dGlvbk1hcC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2ludm9sdmVBaXJQb2xsdXRpb25NYXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJlMTI1MTk1MlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdlMTI1MTk1MicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdlMTI1MTk1MicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdlMTI1MTk1MicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW52b2x2ZUFpclBvbGx1dGlvbk1hcC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZTEyNTE5NTImc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZTEyNTE5NTInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9naXMvaW52b2x2ZUFpclBvbGx1dGlvbk1hcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ludm9sdmVBaXJQb2xsdXRpb25NYXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2ludm9sdmVBaXJQb2xsdXRpb25NYXAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbnZvbHZlQWlyUG9sbHV0aW9uTWFwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1lMTI1MTk1MiZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=