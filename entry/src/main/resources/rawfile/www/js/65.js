(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[65],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/basinHomePage/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/basinHomePage/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_waterHomePage_components_cityWater__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/views/waterHomePage/components/cityWater */ "./src/views/waterHomePage/components/cityWater.vue");
/* harmony import */ var _views_waterHomePage_drinkDetail_components_cityDrink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/views/waterHomePage/drinkDetail/components/cityDrink */ "./src/views/waterHomePage/drinkDetail/components/cityDrink.vue");
/* harmony import */ var _views_searchComponents_components_water_waterSource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/views/searchComponents/components/water/waterSource */ "./src/views/searchComponents/components/water/waterSource.vue");
/* harmony import */ var _views_searchComponents_components_water_waterEcology__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/views/searchComponents/components/water/waterEcology */ "./src/views/searchComponents/components/water/waterEcology.vue");
/* harmony import */ var _views_searchComponents_components_water_waterPollution__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/views/searchComponents/components/water/waterPollution */ "./src/views/searchComponents/components/water/waterPollution.vue");
/* harmony import */ var _views_waterHomePage_components_basinRiver__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/views/waterHomePage/components/basinRiver */ "./src/views/waterHomePage/components/basinRiver.vue");
/* harmony import */ var _components_common_test_floatTest__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/common/test/floatTest */ "./src/components/common/test/floatTest.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    cityWater: _views_waterHomePage_components_cityWater__WEBPACK_IMPORTED_MODULE_0__["default"],
    cityDrink: _views_waterHomePage_drinkDetail_components_cityDrink__WEBPACK_IMPORTED_MODULE_1__["default"],
    waterSource: _views_searchComponents_components_water_waterSource__WEBPACK_IMPORTED_MODULE_2__["default"],
    waterPollution: _views_searchComponents_components_water_waterPollution__WEBPACK_IMPORTED_MODULE_4__["default"],
    waterEcology: _views_searchComponents_components_water_waterEcology__WEBPACK_IMPORTED_MODULE_3__["default"],
    basinRiver: _views_waterHomePage_components_basinRiver__WEBPACK_IMPORTED_MODULE_5__["default"],
    floatTest: _components_common_test_floatTest__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      searchObj: {
        parameter: ''
      }
    };
  },
  mounted: function mounted() {
    this.searchObj = this.$store.state.searchObj;
  },
  methods: {
    onMapQuery: function onMapQuery() {
      this.$router.push({
        name: 'rangeMap',
        query: {
          type: '流域'
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/basinRiver.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/basinRiver.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_water_envir_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/water_envir.js */ "./src/api/water_envir.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_1__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "basinRiver",
  data: function data() {
    return {
      obj: {},
      searchObj: null
    };
  },
  mounted: function mounted() {
    this.searchObj = this.$store.state.searchObj;
    this.queryData();
  },
  methods: {
    queryData: function queryData() {
      var _this = this;

      Object(_api_water_envir_js__WEBPACK_IMPORTED_MODULE_0__["riverCourseStat"])({
        basin: this.searchObj.parameter,
        dataTime: dayjs__WEBPACK_IMPORTED_MODULE_1___default()().format('YYYY-MM')
      }).then(function (res) {
        _this.obj = res.data;
      });
    },
    toDetail: function toDetail(type) {
      this.$router.push({
        name: 'basinRiver',
        query: {
          basinName: this.searchObj.parameter,
          type: type
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/basinHomePage/index.vue?vue&type=template&id=46a49a94&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/basinHomePage/index.vue?vue&type=template&id=46a49a94&scoped=true& ***!
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
    [
      _c("van-nav-bar", {
        attrs: {
          title: _vm.searchObj.parameter + "水环境",
          "left-arrow": "",
          fixed: "",
        },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
        scopedSlots: _vm._u([
          {
            key: "right",
            fn: function () {
              return [
                _c(
                  "span",
                  { staticClass: "into-map", on: { click: _vm.onMapQuery } },
                  [_vm._v("进入地图")]
                ),
                _c("img", {
                  staticStyle: { width: "20px" },
                  attrs: { src: __webpack_require__(/*! @/assets/moreMap.png */ "./src/assets/moreMap.png") },
                }),
              ]
            },
            proxy: true,
          },
        ]),
      }),
      _c(
        "div",
        { staticClass: "scroll-to-top-wrapper" },
        [_c("cityWater"), _c("cityDrink"), _c("basinRiver"), _c("waterSource")],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/basinRiver.vue?vue&type=template&id=3cc51b10&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/basinRiver.vue?vue&type=template&id=3cc51b10&scoped=true& ***!
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
  return _c("div", { staticClass: "card-no-border-wrapper" }, [
    _vm._m(0),
    _c("div", { staticClass: "basin-river-wrapper" }, [
      _c(
        "div",
        {
          staticClass: "basin-river-box",
          on: {
            click: function ($event) {
              return _vm.toDetail("")
            },
          },
        },
        [
          _vm._v(" 河道总数"),
          _c("br"),
          _c("div", [
            _c("span", [_vm._v(_vm._s(_vm.obj.total))]),
            _vm._v(" 条 "),
          ]),
        ]
      ),
      _c(
        "div",
        {
          staticClass: "basin-river-box",
          on: {
            click: function ($event) {
              return _vm.toDetail("yl")
            },
          },
        },
        [
          _vm._v(" 优良水体"),
          _c("br"),
          _c("div", [_c("span", [_vm._v(_vm._s(_vm.obj.yl))]), _vm._v(" 个 ")]),
        ]
      ),
      _c(
        "div",
        {
          staticClass: "basin-river-box",
          on: {
            click: function ($event) {
              return _vm.toDetail("lw")
            },
          },
        },
        [
          _vm._v(" 劣V类水体"),
          _c("br"),
          _c("div", [_c("span", [_vm._v(_vm._s(_vm.obj.lw))]), _vm._v(" 个 ")]),
        ]
      ),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-no-border-title" }, [
      _c("div", { staticClass: "name" }, [_vm._v("河道")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/basinHomePage/index.vue?vue&type=style&index=0&id=46a49a94&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/basinHomePage/index.vue?vue&type=style&index=0&id=46a49a94&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".into-map[data-v-46a49a94] {\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 14px;\n  font-weight: normal;\n  text-decoration: underline;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/basinRiver.vue?vue&type=style&index=0&id=3cc51b10&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/basinRiver.vue?vue&type=style&index=0&id=3cc51b10&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @/assets/waterHomePage/河道-总数.png */ "./src/assets/waterHomePage/河道-总数.png");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! @/assets/waterHomePage/河道-优良.png */ "./src/assets/waterHomePage/河道-优良.png");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! @/assets/waterHomePage/河道-劣V.png */ "./src/assets/waterHomePage/河道-劣V.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n.card-no-border-wrapper[data-v-3cc51b10] {\n  margin: 4px 17px;\n  padding-bottom: 10px;\n}\n.card-no-border-wrapper .card-no-border-title[data-v-3cc51b10] {\n  display: flex;\n  align-items: center;\n  padding: 10px 0;\n}\n.card-no-border-wrapper .card-no-border-title .name[data-v-3cc51b10] {\n  color: black;\n  font-size: 18px;\n  font-weight: bold;\n}\n.card-no-border-wrapper .card-no-border-title .time[data-v-3cc51b10] {\n  padding-left: 10px;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.basin-river-wrapper[data-v-3cc51b10] {\n  display: flex;\n  justify-content: space-between;\n}\n.basin-river-wrapper .basin-river-box[data-v-3cc51b10] {\n  width: 23%;\n  padding: 7px 15px;\n  border-radius: 10px;\n  font-size: 13px;\n  color: rgba(37, 57, 111, 0.6);\n  line-height: 24px;\n}\n.basin-river-wrapper .basin-river-box span[data-v-3cc51b10] {\n  color: #25396f;\n  font-weight: bold;\n  font-size: 18px;\n}\n.basin-river-wrapper .basin-river-box[data-v-3cc51b10]:first-child {\n  position: relative;\n  background: #f2f7ff;\n}\n.basin-river-wrapper .basin-river-box[data-v-3cc51b10]:first-child:before {\n  content: \"\";\n  position: absolute;\n  bottom: 2px;\n  right: -1px;\n  width: 25px;\n  height: 42px;\n  border-radius: 0 0 10px 0;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n  background-position: left bottom;\n}\n.basin-river-wrapper .basin-river-box[data-v-3cc51b10]:nth-child(2) {\n  position: relative;\n  background: #f0feff;\n}\n.basin-river-wrapper .basin-river-box[data-v-3cc51b10]:nth-child(2):before {\n  content: \"\";\n  position: absolute;\n  bottom: 2px;\n  right: -1px;\n  width: 25px;\n  height: 42px;\n  border-radius: 0 0 10px 0;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat;\n  background-position: left bottom;\n}\n.basin-river-wrapper .basin-river-box[data-v-3cc51b10]:nth-child(3) {\n  position: relative;\n  background: #fcf7f4;\n}\n.basin-river-wrapper .basin-river-box[data-v-3cc51b10]:nth-child(3):before {\n  content: \"\";\n  position: absolute;\n  bottom: 2px;\n  right: -1px;\n  width: 25px;\n  height: 42px;\n  border-radius: 0 0 10px 0;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") no-repeat;\n  background-position: left bottom;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/basinHomePage/index.vue?vue&type=style&index=0&id=46a49a94&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/basinHomePage/index.vue?vue&type=style&index=0&id=46a49a94&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=46a49a94&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/basinHomePage/index.vue?vue&type=style&index=0&id=46a49a94&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2f4915d3", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/basinRiver.vue?vue&type=style&index=0&id=3cc51b10&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/basinRiver.vue?vue&type=style&index=0&id=3cc51b10&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./basinRiver.vue?vue&type=style&index=0&id=3cc51b10&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/basinRiver.vue?vue&type=style&index=0&id=3cc51b10&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("58e604ce", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/moreMap.png":
/*!********************************!*\
  !*** ./src/assets/moreMap.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFhSURBVFiF7VZbboQwDJxUcK41Um4F0rIS3CoS2XOB5H4ESoAANm21P8xnHvbErwlw48aHYa5cslVfAwDYPGZL/HJN7v+dgK36GmyeO9teSyRTOS8HBh8eIbAhKB72pXDerZY8DL9guADgF2enFAkgYmqrnsAmJuBdmxUJgjRb5kKSCnEEFjD8Sqy9Vyu0OfMLAmtjKeNeaOsSgSXi9pvX9jrjENIu8ABiB2TLoRtTQSMhStw5hbhdbDkcN+AKrs1EtuUpSBXeH5xVTcJNq6WxadEj6IpQ8jJNpLQEXJP7EwdeK0jqNnRNXu9uKl+vJmCrnsY571POXZN7W/WksanRgif2C9C7NiuiIhXL8mkEIiGanE91MBvfhp7AppNEQzIJfxxvFDB8Th7TS6f9KBKEk4koS8E8BYOxdLEForEmCCRZpgWGi0UNhF/P2R1RDegmYcgpJdUwOH3jwiy4ceOj+Ab5GJxkf+Lb7wAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/waterHomePage/河道-优良.png":
/*!********************************************!*\
  !*** ./src/assets/waterHomePage/河道-优良.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAsCAYAAAD8WEF4AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAALHSURBVFiFzZjNjtMwFIXPjeJBeQiEWIxGCPEAs8JdzgoNEkg8TZKnYTHLWbCsq1mwZDH8CCFgwUNUxa0Pi/QnCXaSTpM2R7LkKm775cS+J7ZgT/2xVgOSEtD7frdNAuYA8FipzH+9o35bqwWSygCQ/4v5Ew9wJ9g16LR3pgYRzJ/WgDvB/rLLKY7iaFVSA+4E+9MuORhRixw4OVfKAB1gf1irMaSrlLTxusCcq3hSdEeg79Zm0gBNYX6hVDYKWKAAbnL54iyWCuw3a3XrYzlUwtm6Z56t52Lp/8PAwskW9kvLoxhCFObPa+Xp619/5RHhJAIKUFBSAjhmAyX9XMCVb2DmG7uipNH9wmaOkjoAp2gE9P3Cbt11gAmMQ7TpnLSJvNzAvlDKhMbFkOLxn1i6/MHHs3V2DO1TET5A4DoBxCNwFUA1nUJMsRsJLUu0XiYZkbNlBZ0dC2y3adD8C4ZSbDUOVeSgiYaXlVI/xNTgLPPLM/9e6IEyH601cO07jhBTFCrAl496BQUAXCplKPAW/Tqsr/nrLGH6Bt2CkDPffy6XuzFeJhdyVqDv5rsi3Zfu5lY7+F+YKjcUaOE5G8l0trA5AETucKcpklLC26PDq8F69a4iBFdxXzqwGpxOo4/bqNT3MQlG5GypGARfEUcDW9aDFpgARthP3LoIjTvnyjTws4SdpTC/6jfFzIe5NSL+uO0yDYJx2zMoAOAqUYboOW6J4eLWBeK2MsbP5HfWAfp2gLi9nduM4o/b+jSotxU5C1cDkent3G4WlzmYVCQFoLtUn8AY0/LyvV29g8etC/QBAGT+KlFm3HWWMATz66Q4wBtN3L5OdieKJCcAcJ1UTxljFKVEHxOsTXXIjaIVmDeeQx2hOXRLSQGAm7nNmnaeQ+ttEnc6gY8A4E2iMp7I4RWK+dlFlTt6XwSBluFdNgRn75L9Iv0fbTpYerw6vI0AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/waterHomePage/河道-劣V.png":
/*!********************************************!*\
  !*** ./src/assets/waterHomePage/河道-劣V.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAsCAYAAAD8WEF4AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAALGSURBVFiFzZnNattAFIXPFd6FNJhiShoc8DIPkE2hdEwfTKMn0/XKiy696NKkorhtoG7INtHpQlEs2TOS7MiyDgzo58rz6TJzz4ws2FN8vDcQCSEw+z5bL4kAQM7eW+fdpj+TQSIEjgG5JUEkZyO7e7mBMlDGrUNVdiqRnJeBG8L+iQGaYzDVKJLzDzY/aQj7i0fDqe99KueXCjSA5ePK4JjjlAhrIlTeXU6BPSbYMcWHnxYifmgykosr2wtY4AUY/izLxZWUYLlOTOUbtiHhDACQQmU41lL/D4kFPP2nnL7Ccp3YlzranYhIhmNbuvQvieGaI8Q0AACu7yyEIUB02oQh1z/K9ZvpzBMfBlzfWYAhmOIkDanJGHKl6onDAEgz8FNK+OX1cDhR/l06YoAByG7HqUvcHqOO7BEIQKIPjevlBtgVA2Bw+jHwoqenwomDKSUGOXWv5GHqT2ZLzu+D7U1mnzeHTibWZlYBRi3RGK+V7mjfzAoiGd3Yg7DcUt5/VxDuHUdpFLiZAp8Vtgya8YxuFKC6+yzKzRR4rE3bBt1wcObus1C6PHbrzixpuFqY1jlXCwOk7gXTUylyt1XWWUHM34tscqXQN5Nmqzrjn8+FQXtQnc3XDZ2scwuly8kkfaqzBR1YZ0+kvjuYvHXMdqq6MVu36hIonluy26DGbkusDiapzmwkH2/t4XQ7UibfFIHHbktyrWcrdgpy1SooAEDGtwpSfTuBDavrvs9u2UO7pc9uQcNkblrnTObWa7flSFebVU2wmMk8n1zaAmsIVnzjrStdItrMbis+mLWnitJFRHL9SXtkCoXjnEmgEEZy/VmBHpmCjDMgAEDK7OPxpHANmd0quvgHZg9tQ+YKwOfIt43orLGZSwoAcBnb5jvP9iUT0+gLfJAFTy3AU2V42viliidcxgZIDXj0LCuEM5l8tfs89B+Sra4g2FoHFAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/waterHomePage/河道-总数.png":
/*!********************************************!*\
  !*** ./src/assets/waterHomePage/河道-总数.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAAsCAYAAAD8WEF4AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAM3SURBVFiFzZmxjtNAEIb/WRIgOo4TFEhX0IAogoQoERWbgoKnsv1UFBTZCCEeIAVCFBTREaFDhJOFolPO81PkcnFyu7ZDnJx/aSUnXmu+THZmdtaCDZVOaUUQQWA3fbZMAiQAcHBH4sD9akqntMBuIK+JSA4714ErwaZTWgX6tUMVKzlaA25VeSojIoA7ISpQdPaXODpYAlfy7OSv7p30Siq9B4figAqwk5RWoXZnMCJR4W3APbxnejuzv6lO0yz+lSpD4zTNYmCDbLBrnaZZTIa9/Oi+kRXYcUp7iyz8W7YVyQEAqDHu+HItLvTzLIsBeO2rMb0r2PFZFgv9E3clCpLjo1tx/rvxH+0LaK/NpekZABhPspiKSAnsc1AR/Zhof41q4J0LRuZkksUKRMQ8k+5/0J5MsivvXkCdb55C0VJFA8KMbxZXjx+03eh35p3VIhDtvzitS2z+E308BAxJNGF8P53ZJez1+wqgdYOFNKgQU8vr8htQPuOHmBrjWeZgvUzSIM/iYnnpDzCixWJat2g1tpUCVgKlFFjNniGm4DKgIOket+Mt+NblvoxnTujvOKosA0PO3b4+agYFAHSP246A89lbAQ8wGQWwPki4ukEXUmLgs5lfs14mDXhWATscLZN0XRqOZpZE5LOZY/V6tawo9Iej2SK4XA2sEQEbiud8gPmYBCjOBlxGbzCK61KWqwp+JmlQns1ttHxMJJtTwcqWAdCgCpbfwXo9iwbtDVBWFFASYBBxIlJPuVUtLrdlASZFASZIXj25HW/JmJf7/G3mjKw1iJfKSjYy8woW6DxfPb1TJygA4PWztlOK89nLy9vdEjCBjtPVDXoFAg58NvM1zM+kIc+K/fhtausG/fT1PCb95xP5cus/Y5BBeM3S9D9+PZ8Hl6rbmlQkUsAGO+myoqDqyjbf0cLQ/zKuWgzbKtp8k5K86XZcY/JsHiPH5Agmve5dBzSogvWed9zimmAPAHrd5XfA/ETGkXt4A7OB1iEXMlnGJNRG7GsoWKlKCgB8GE5j7GHPGtLbF51KR4PmcnKsQLLv89nL/Fr55cbKL3o/nFpocX9fiwSOxODdy068yWP/APeZe+9kJThwAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/views/waterHomePage/basinHomePage/index.vue":
/*!*********************************************************!*\
  !*** ./src/views/waterHomePage/basinHomePage/index.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_46a49a94_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=46a49a94&scoped=true& */ "./src/views/waterHomePage/basinHomePage/index.vue?vue&type=template&id=46a49a94&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/basinHomePage/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_46a49a94_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=46a49a94&lang=scss&scoped=true& */ "./src/views/waterHomePage/basinHomePage/index.vue?vue&type=style&index=0&id=46a49a94&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_46a49a94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_46a49a94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "46a49a94",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/basinHomePage/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/basinHomePage/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./src/views/waterHomePage/basinHomePage/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/basinHomePage/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/basinHomePage/index.vue?vue&type=style&index=0&id=46a49a94&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/basinHomePage/index.vue?vue&type=style&index=0&id=46a49a94&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_46a49a94_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=46a49a94&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/basinHomePage/index.vue?vue&type=style&index=0&id=46a49a94&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_46a49a94_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_46a49a94_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_46a49a94_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_46a49a94_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/waterHomePage/basinHomePage/index.vue?vue&type=template&id=46a49a94&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./src/views/waterHomePage/basinHomePage/index.vue?vue&type=template&id=46a49a94&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_46a49a94_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=46a49a94&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/basinHomePage/index.vue?vue&type=template&id=46a49a94&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_46a49a94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_46a49a94_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/waterHomePage/components/basinRiver.vue":
/*!***********************************************************!*\
  !*** ./src/views/waterHomePage/components/basinRiver.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basinRiver_vue_vue_type_template_id_3cc51b10_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basinRiver.vue?vue&type=template&id=3cc51b10&scoped=true& */ "./src/views/waterHomePage/components/basinRiver.vue?vue&type=template&id=3cc51b10&scoped=true&");
/* harmony import */ var _basinRiver_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basinRiver.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/components/basinRiver.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _basinRiver_vue_vue_type_style_index_0_id_3cc51b10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basinRiver.vue?vue&type=style&index=0&id=3cc51b10&lang=scss&scoped=true& */ "./src/views/waterHomePage/components/basinRiver.vue?vue&type=style&index=0&id=3cc51b10&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _basinRiver_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _basinRiver_vue_vue_type_template_id_3cc51b10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _basinRiver_vue_vue_type_template_id_3cc51b10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3cc51b10",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/components/basinRiver.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/components/basinRiver.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./src/views/waterHomePage/components/basinRiver.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_basinRiver_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./basinRiver.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/basinRiver.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_basinRiver_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/components/basinRiver.vue?vue&type=style&index=0&id=3cc51b10&lang=scss&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/components/basinRiver.vue?vue&type=style&index=0&id=3cc51b10&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_basinRiver_vue_vue_type_style_index_0_id_3cc51b10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./basinRiver.vue?vue&type=style&index=0&id=3cc51b10&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/basinRiver.vue?vue&type=style&index=0&id=3cc51b10&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_basinRiver_vue_vue_type_style_index_0_id_3cc51b10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_basinRiver_vue_vue_type_style_index_0_id_3cc51b10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_basinRiver_vue_vue_type_style_index_0_id_3cc51b10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_basinRiver_vue_vue_type_style_index_0_id_3cc51b10_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/waterHomePage/components/basinRiver.vue?vue&type=template&id=3cc51b10&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./src/views/waterHomePage/components/basinRiver.vue?vue&type=template&id=3cc51b10&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_basinRiver_vue_vue_type_template_id_3cc51b10_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./basinRiver.vue?vue&type=template&id=3cc51b10&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/basinRiver.vue?vue&type=template&id=3cc51b10&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_basinRiver_vue_vue_type_template_id_3cc51b10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_basinRiver_vue_vue_type_template_id_3cc51b10_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvYmFzaW5Ib21lUGFnZS9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvYmFzaW5SaXZlci52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvYmFzaW5Ib21lUGFnZS9pbmRleC52dWU/ZTU3MiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL2Jhc2luUml2ZXIudnVlP2U0ZmIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvYmFzaW5Ib21lUGFnZS9pbmRleC52dWU/MGYzNCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL2Jhc2luUml2ZXIudnVlPzc0YTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvYmFzaW5Ib21lUGFnZS9pbmRleC52dWU/OTY2OCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL2Jhc2luUml2ZXIudnVlPzNmYjQiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9tb3JlTWFwLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3dhdGVySG9tZVBhZ2Uv5rKz6YGTLeS8mOiJry5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy93YXRlckhvbWVQYWdlL+ays+mBky3liqNWLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3dhdGVySG9tZVBhZ2Uv5rKz6YGTLeaAu+aVsC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvYmFzaW5Ib21lUGFnZS9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvYmFzaW5Ib21lUGFnZS9pbmRleC52dWU/YTdjNSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9iYXNpbkhvbWVQYWdlL2luZGV4LnZ1ZT8zYjFiIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2Jhc2luSG9tZVBhZ2UvaW5kZXgudnVlPzA3MDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy9iYXNpblJpdmVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL2Jhc2luUml2ZXIudnVlP2VlYTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy9iYXNpblJpdmVyLnZ1ZT9jODhmIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvYmFzaW5SaXZlci52dWU/NGJlMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBREE7QUFFQTtBQUNBLGdHQURBO0FBRUEsNEdBRkE7QUFHQSw2R0FIQTtBQUlBLG1IQUpBO0FBS0EsK0dBTEE7QUFNQSxrR0FOQTtBQU9BO0FBUEEsR0FGQTtBQVdBLE1BWEEsa0JBV0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0EsR0FqQkE7QUFrQkEsU0FsQkEscUJBa0JBO0FBQ0E7QUFDQSxHQXBCQTtBQXFCQTtBQUNBLGNBREEsd0JBQ0E7QUFDQTtBQUNBLHdCQURBO0FBRUE7QUFDQTtBQURBO0FBRkE7QUFNQTtBQVJBO0FBckJBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWkE7QUFDQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSxNQUZBLGtCQUVBO0FBQ0E7QUFDQSxhQURBO0FBRUE7QUFGQTtBQUlBLEdBUEE7QUFRQSxTQVJBLHFCQVFBO0FBQ0E7QUFDQTtBQUNBLEdBWEE7QUFZQTtBQUNBLGFBREEsdUJBQ0E7QUFBQTs7QUFDQTtBQUNBLHVDQURBO0FBRUE7QUFGQSxTQUdBLElBSEEsQ0FHQTtBQUNBO0FBQ0EsT0FMQTtBQU1BLEtBUkE7QUFTQSxZQVRBLG9CQVNBLElBVEEsRUFTQTtBQUNBO0FBQ0EsMEJBREE7QUFFQTtBQUNBLDZDQURBO0FBRUE7QUFGQTtBQUZBO0FBT0E7QUFqQkE7QUFaQSxHOzs7Ozs7Ozs7Ozs7QUNsQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsK0JBQStCLHdCQUF3QixFQUFFO0FBQzVFO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnQkFBZ0I7QUFDaEQsMEJBQTBCLE1BQU0sbUJBQU8sQ0FBQyxzREFBc0IsR0FBRztBQUNqRSxpQkFBaUI7QUFDakI7QUFDQSxhQUFhO0FBQ2I7QUFDQSxXQUFXO0FBQ1g7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVMsdUNBQXVDO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isd0NBQXdDO0FBQzVEO0FBQ0EsZUFBZSxxQ0FBcUM7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsV0FBVztBQUNYLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixXQUFXO0FBQ1gsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFdBQVc7QUFDWCxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixzQ0FBc0M7QUFDNUQsaUJBQWlCLHNCQUFzQjtBQUN2QztBQUNBLEdBQUc7QUFDSDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDdkVBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsOEdBQXlEO0FBQ25HO0FBQ0E7QUFDQSxjQUFjLFFBQVMsK0JBQStCLGlDQUFpQyxvQkFBb0Isd0JBQXdCLCtCQUErQixHQUFHO0FBQ3JLO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsOEdBQXlEO0FBQ25HLHNDQUFzQyxtQkFBTyxDQUFDLG9IQUE0RDtBQUMxRyxvQ0FBb0MsbUJBQU8sQ0FBQyw4RUFBa0M7QUFDOUUsb0NBQW9DLG1CQUFPLENBQUMsOEVBQWtDO0FBQzlFLG9DQUFvQyxtQkFBTyxDQUFDLDhFQUFrQztBQUM5RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFTLHNCQUFzQiw0Q0FBNEMscUJBQXFCLHlCQUF5QixHQUFHLGtFQUFrRSxrQkFBa0Isd0JBQXdCLG9CQUFvQixHQUFHLHdFQUF3RSxpQkFBaUIsb0JBQW9CLHNCQUFzQixHQUFHLHdFQUF3RSx1QkFBdUIsaUNBQWlDLG9CQUFvQixHQUFHLHlDQUF5QyxrQkFBa0IsbUNBQW1DLEdBQUcsMERBQTBELGVBQWUsc0JBQXNCLHdCQUF3QixvQkFBb0Isa0NBQWtDLHNCQUFzQixHQUFHLCtEQUErRCxtQkFBbUIsc0JBQXNCLG9CQUFvQixHQUFHLHNFQUFzRSx1QkFBdUIsd0JBQXdCLEdBQUcsNkVBQTZFLGtCQUFrQix1QkFBdUIsZ0JBQWdCLGdCQUFnQixnQkFBZ0IsaUJBQWlCLDhCQUE4QiwwRUFBMEUscUNBQXFDLEdBQUcsdUVBQXVFLHVCQUF1Qix3QkFBd0IsR0FBRyw4RUFBOEUsa0JBQWtCLHVCQUF1QixnQkFBZ0IsZ0JBQWdCLGdCQUFnQixpQkFBaUIsOEJBQThCLDBFQUEwRSxxQ0FBcUMsR0FBRyx1RUFBdUUsdUJBQXVCLHdCQUF3QixHQUFHLDhFQUE4RSxrQkFBa0IsdUJBQXVCLGdCQUFnQixnQkFBZ0IsZ0JBQWdCLGlCQUFpQiw4QkFBOEIsMEVBQTBFLHFDQUFxQyxHQUFHO0FBQ2p4RTtBQUNBOzs7Ozs7Ozs7Ozs7QUNiQTs7QUFFQTtBQUNBLGNBQWMsbUJBQU8sQ0FBQyw4ekJBQXlkO0FBQy9lO0FBQ0EsNENBQTRDLFFBQVM7QUFDckQ7QUFDQTtBQUNBLFVBQVUsbUJBQU8sQ0FBQyxnSUFBbUU7QUFDckYsOENBQThDLHFDQUFxQztBQUNuRjtBQUNBLEdBQUcsS0FBVSxFQUFFLEU7Ozs7Ozs7Ozs7O0FDWGY7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMscTBCQUE4ZDtBQUNwZjtBQUNBLDRDQUE0QyxRQUFTO0FBQ3JEO0FBQ0E7QUFDQSxVQUFVLG1CQUFPLENBQUMsZ0lBQW1FO0FBQ3JGLDhDQUE4QyxxQ0FBcUM7QUFDbkY7QUFDQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7OztBQ1hmLGlDQUFpQyxvbEI7Ozs7Ozs7Ozs7O0FDQWpDLGlDQUFpQyxnakM7Ozs7Ozs7Ozs7O0FDQWpDLGlDQUFpQyxnakM7Ozs7Ozs7Ozs7O0FDQWpDLGlDQUFpQyxvc0M7Ozs7Ozs7Ozs7OztBQ0FqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdHO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUcxRjtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsNEZBQU07QUFDUixFQUFFLHFHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUEwUyxDQUFnQixzVUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E5VDtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUc7QUFDdkM7QUFDTDtBQUNzQzs7O0FBRy9GO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLGdGQUFNO0FBQ1IsRUFBRSxpR0FBTTtBQUNSLEVBQUUsMEdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQStTLENBQWdCLDJVQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQW5VO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzLzY1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8dmFuLW5hdi1iYXJcclxuICAgICAgICA6dGl0bGU9XCJzZWFyY2hPYmoucGFyYW1ldGVyKyfmsLTnjq/looMnXCJcclxuICAgICAgICBsZWZ0LWFycm93XHJcbiAgICAgICAgZml4ZWRcclxuICAgICAgICBAY2xpY2stbGVmdD1cIiRyb3V0ZXIuZ28oLTEpXCJcclxuICAgID5cclxuICAgICAgPHRlbXBsYXRlICNyaWdodD5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImludG8tbWFwXCIgQGNsaWNrPVwib25NYXBRdWVyeVwiPui/m+WFpeWcsOWbvjwvc3Bhbj5cclxuICAgICAgICA8aW1nIHNyYz1cIkAvYXNzZXRzL21vcmVNYXAucG5nXCIgc3R5bGU9XCJ3aWR0aDogMjBweFwiLz5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgIDwvdmFuLW5hdi1iYXI+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2Nyb2xsLXRvLXRvcC13cmFwcGVyXCI+XHJcblxyXG48IS0tICAgICAgPGZsb2F0VGVzdCB2LXNob3c9XCJzZWFyY2hPYmoucGFyYW1ldGVyPT0n5pmu5rih5rKz5rWB5Z+fJ1wiLz4tLT5cclxuXHJcbiAgICAgIDxjaXR5V2F0ZXIvPlxyXG5cclxuICAgICAgPGNpdHlEcmluay8+XHJcblxyXG4gICAgICA8YmFzaW5SaXZlci8+XHJcblxyXG4gICAgICA8IS0t5rC06LWE5rqQLS0+XHJcbiAgICAgIDx3YXRlclNvdXJjZS8+XHJcblxyXG4gICAgICA8IS0t5rC055Sf5oCBLS0+XHJcbjwhLS0gICAgICA8d2F0ZXJFY29sb2d5Lz4tLT5cclxuXHJcbiAgICAgIDwhLS3mtonmsLTmsaHmn5PmupAt6ZyA6LCD56CULS0+XHJcbjwhLS0gICAgICA8d2F0ZXJQb2xsdXRpb24vPi0tPlxyXG5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgY2l0eVdhdGVyIGZyb20gXCJAL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy9jaXR5V2F0ZXJcIjtcclxuICBpbXBvcnQgY2l0eURyaW5rIGZyb20gXCJAL3ZpZXdzL3dhdGVySG9tZVBhZ2UvZHJpbmtEZXRhaWwvY29tcG9uZW50cy9jaXR5RHJpbmtcIjtcclxuICBpbXBvcnQgd2F0ZXJTb3VyY2UgZnJvbSBcIkAvdmlld3Mvc2VhcmNoQ29tcG9uZW50cy9jb21wb25lbnRzL3dhdGVyL3dhdGVyU291cmNlXCI7XHJcbiAgaW1wb3J0IHdhdGVyRWNvbG9neSBmcm9tIFwiQC92aWV3cy9zZWFyY2hDb21wb25lbnRzL2NvbXBvbmVudHMvd2F0ZXIvd2F0ZXJFY29sb2d5XCI7XHJcbiAgaW1wb3J0IHdhdGVyUG9sbHV0aW9uIGZyb20gXCJAL3ZpZXdzL3NlYXJjaENvbXBvbmVudHMvY29tcG9uZW50cy93YXRlci93YXRlclBvbGx1dGlvblwiO1xyXG4gIGltcG9ydCBiYXNpblJpdmVyIGZyb20gXCJAL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy9iYXNpblJpdmVyXCI7XHJcbiAgaW1wb3J0IGZsb2F0VGVzdCBmcm9tIFwiQC9jb21wb25lbnRzL2NvbW1vbi90ZXN0L2Zsb2F0VGVzdFwiXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJpbmRleFwiLFxyXG4gICAgY29tcG9uZW50czp7XHJcbiAgICAgIGNpdHlXYXRlcixcclxuICAgICAgY2l0eURyaW5rLFxyXG4gICAgICB3YXRlclNvdXJjZSxcclxuICAgICAgd2F0ZXJQb2xsdXRpb24sXHJcbiAgICAgIHdhdGVyRWNvbG9neSxcclxuICAgICAgYmFzaW5SaXZlcixcclxuICAgICAgZmxvYXRUZXN0XHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzZWFyY2hPYmo6IHtcclxuICAgICAgICAgIHBhcmFtZXRlcjogJydcclxuICAgICAgICB9LFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKXtcclxuICAgICAgdGhpcy5zZWFyY2hPYmogPSB0aGlzLiRzdG9yZS5zdGF0ZS5zZWFyY2hPYmo7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczp7XHJcbiAgICAgIG9uTWFwUXVlcnkoKXtcclxuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICBuYW1lOiAncmFuZ2VNYXAnLFxyXG4gICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgdHlwZTogJ+a1geWfnydcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICAuaW50by1tYXAge1xyXG4gICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZC1uby1ib3JkZXItd3JhcHBlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtbm8tYm9yZGVyLXRpdGxlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5rKz6YGTPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJiYXNpbi1yaXZlci13cmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJiYXNpbi1yaXZlci1ib3hcIiBAY2xpY2s9XCJ0b0RldGFpbCgnJylcIj5cclxuICAgICAgICDmsrPpgZPmgLvmlbA8YnIvPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3Bhbj57e29iai50b3RhbH19PC9zcGFuPlxyXG4gICAgICAgICAg5p2hXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYmFzaW4tcml2ZXItYm94XCIgQGNsaWNrPVwidG9EZXRhaWwoJ3lsJylcIj5cclxuICAgICAgICDkvJjoia/msLTkvZM8YnIvPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3Bhbj57e29iai55bH19PC9zcGFuPlxyXG4gICAgICAgICAg5LiqXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYmFzaW4tcml2ZXItYm94XCIgQGNsaWNrPVwidG9EZXRhaWwoJ2x3JylcIj5cclxuICAgICAgICDliqNW57G75rC05L2TPGJyLz5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgPHNwYW4+e3tvYmoubHd9fTwvc3Bhbj5cclxuICAgICAgICAgIOS4qlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQge3JpdmVyQ291cnNlU3RhdH0gZnJvbSAnQC9hcGkvd2F0ZXJfZW52aXIuanMnXHJcbiAgaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiYmFzaW5SaXZlclwiLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBvYmo6IHt9LFxyXG4gICAgICAgIHNlYXJjaE9iajogbnVsbCxcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICB0aGlzLnNlYXJjaE9iaiA9IHRoaXMuJHN0b3JlLnN0YXRlLnNlYXJjaE9iajtcclxuICAgICAgdGhpcy5xdWVyeURhdGEoKVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgcXVlcnlEYXRhKCl7XHJcbiAgICAgICAgcml2ZXJDb3Vyc2VTdGF0KHtcclxuICAgICAgICAgIGJhc2luOiB0aGlzLnNlYXJjaE9iai5wYXJhbWV0ZXIsXHJcbiAgICAgICAgICBkYXRhVGltZTogZGF5anMoKS5mb3JtYXQoJ1lZWVktTU0nKVxyXG4gICAgICAgIH0pLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICB0aGlzLm9iaiA9IHJlcy5kYXRhO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIHRvRGV0YWlsKHR5cGUpe1xyXG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgIG5hbWU6ICdiYXNpblJpdmVyJyxcclxuICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgIGJhc2luTmFtZTogdGhpcy5zZWFyY2hPYmoucGFyYW1ldGVyLFxyXG4gICAgICAgICAgICB0eXBlOiB0eXBlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICBAaW1wb3J0IFwiQC92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvY2FyZE5vQm9yZGVyLnNjc3NcIjtcclxuXHJcbiAgLmJhc2luLXJpdmVyLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAuYmFzaW4tcml2ZXItYm94IHtcclxuICAgICAgd2lkdGg6IDIzJTtcclxuICAgICAgcGFkZGluZzogN3B4IDE1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgICAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDAuNik7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG5cclxuICAgICAgc3BhbiB7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDEpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQyLCAyNDcsIDI1NSwgMSk7XHJcblxyXG4gICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBib3R0b206IDJweDtcclxuICAgICAgICAgIHJpZ2h0OiAtMXB4O1xyXG4gICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwifkAvYXNzZXRzL3dhdGVySG9tZVBhZ2Uv5rKz6YGTLeaAu+aVsC5wbmdcIikgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBib3R0b207XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQwLCAyNTQsIDI1NSwgMSk7XHJcblxyXG4gICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBib3R0b206IDJweDtcclxuICAgICAgICAgIHJpZ2h0OiAtMXB4O1xyXG4gICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwifkAvYXNzZXRzL3dhdGVySG9tZVBhZ2Uv5rKz6YGTLeS8mOiJry5wbmdcIikgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBib3R0b207XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAmOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjUyLCAyNDcsIDI0NCwgMSk7XHJcblxyXG4gICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICBib3R0b206IDJweDtcclxuICAgICAgICAgIHJpZ2h0OiAtMXB4O1xyXG4gICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDQycHg7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAwO1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKFwifkAvYXNzZXRzL3dhdGVySG9tZVBhZ2Uv5rKz6YGTLeWKo1YucG5nXCIpIG5vLXJlcGVhdDtcclxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgYm90dG9tO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcInZhbi1uYXYtYmFyXCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0aXRsZTogX3ZtLnNlYXJjaE9iai5wYXJhbWV0ZXIgKyBcIuawtOeOr+Wig1wiLFxuICAgICAgICAgIFwibGVmdC1hcnJvd1wiOiBcIlwiLFxuICAgICAgICAgIGZpeGVkOiBcIlwiLFxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIFwiY2xpY2stbGVmdFwiOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLiRyb3V0ZXIuZ28oLTEpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiBcInJpZ2h0XCIsXG4gICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImludG8tbWFwXCIsIG9uOiB7IGNsaWNrOiBfdm0ub25NYXBRdWVyeSB9IH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi6L+b5YWl5Zyw5Zu+XCIpXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMjBweFwiIH0sXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy9tb3JlTWFwLnBuZ1wiKSB9LFxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSksXG4gICAgICB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNjcm9sbC10by10b3Atd3JhcHBlclwiIH0sXG4gICAgICAgIFtfYyhcImNpdHlXYXRlclwiKSwgX2MoXCJjaXR5RHJpbmtcIiksIF9jKFwiYmFzaW5SaXZlclwiKSwgX2MoXCJ3YXRlclNvdXJjZVwiKV0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtbm8tYm9yZGVyLXdyYXBwZXJcIiB9LCBbXG4gICAgX3ZtLl9tKDApLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYmFzaW4tcml2ZXItd3JhcHBlclwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmFzaW4tcml2ZXItYm94XCIsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0udG9EZXRhaWwoXCJcIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fdihcIiDmsrPpgZPmgLvmlbBcIiksXG4gICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLm9iai50b3RhbCkpXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIg5p2hIFwiKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmFzaW4tcml2ZXItYm94XCIsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0udG9EZXRhaWwoXCJ5bFwiKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl92KFwiIOS8mOiJr+awtOS9k1wiKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIFtfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLm9iai55bCkpXSksIF92bS5fdihcIiDkuKogXCIpXSksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJhc2luLXJpdmVyLWJveFwiLFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvRGV0YWlsKFwibHdcIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fdihcIiDliqNW57G75rC05L2TXCIpLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgW19jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0ub2JqLmx3KSldKSwgX3ZtLl92KFwiIOS4qiBcIildKSxcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICBdKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtbm8tYm9yZGVyLXRpdGxlXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuYW1lXCIgfSwgW192bS5fdihcIuays+mBk1wiKV0pLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaW50by1tYXBbZGF0YS12LTQ2YTQ5YTk0XSB7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IHJlcXVpcmUoXCJAL2Fzc2V0cy93YXRlckhvbWVQYWdlL+ays+mBky3mgLvmlbAucG5nXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gcmVxdWlyZShcIkAvYXNzZXRzL3dhdGVySG9tZVBhZ2Uv5rKz6YGTLeS8mOiJry5wbmdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSByZXF1aXJlKFwiQC9hc3NldHMvd2F0ZXJIb21lUGFnZS/msrPpgZMt5YqjVi5wbmdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGNoYXJzZXQgXFxcIlVURi04XFxcIjtcXG4uY2FyZC1uby1ib3JkZXItd3JhcHBlcltkYXRhLXYtM2NjNTFiMTBdIHtcXG4gIG1hcmdpbjogNHB4IDE3cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLmNhcmQtbm8tYm9yZGVyLXdyYXBwZXIgLmNhcmQtbm8tYm9yZGVyLXRpdGxlW2RhdGEtdi0zY2M1MWIxMF0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxufVxcbi5jYXJkLW5vLWJvcmRlci13cmFwcGVyIC5jYXJkLW5vLWJvcmRlci10aXRsZSAubmFtZVtkYXRhLXYtM2NjNTFiMTBdIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uY2FyZC1uby1ib3JkZXItd3JhcHBlciAuY2FyZC1uby1ib3JkZXItdGl0bGUgLnRpbWVbZGF0YS12LTNjYzUxYjEwXSB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4uYmFzaW4tcml2ZXItd3JhcHBlcltkYXRhLXYtM2NjNTFiMTBdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5iYXNpbi1yaXZlci13cmFwcGVyIC5iYXNpbi1yaXZlci1ib3hbZGF0YS12LTNjYzUxYjEwXSB7XFxuICB3aWR0aDogMjMlO1xcbiAgcGFkZGluZzogN3B4IDE1cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbiAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDAuNik7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG59XFxuLmJhc2luLXJpdmVyLXdyYXBwZXIgLmJhc2luLXJpdmVyLWJveCBzcGFuW2RhdGEtdi0zY2M1MWIxMF0ge1xcbiAgY29sb3I6ICMyNTM5NmY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuLmJhc2luLXJpdmVyLXdyYXBwZXIgLmJhc2luLXJpdmVyLWJveFtkYXRhLXYtM2NjNTFiMTBdOmZpcnN0LWNoaWxkIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6ICNmMmY3ZmY7XFxufVxcbi5iYXNpbi1yaXZlci13cmFwcGVyIC5iYXNpbi1yaXZlci1ib3hbZGF0YS12LTNjYzUxYjEwXTpmaXJzdC1jaGlsZDpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDJweDtcXG4gIHJpZ2h0OiAtMXB4O1xcbiAgd2lkdGg6IDI1cHg7XFxuICBoZWlnaHQ6IDQycHg7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgMTBweCAwO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGJvdHRvbTtcXG59XFxuLmJhc2luLXJpdmVyLXdyYXBwZXIgLmJhc2luLXJpdmVyLWJveFtkYXRhLXYtM2NjNTFiMTBdOm50aC1jaGlsZCgyKSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiAjZjBmZWZmO1xcbn1cXG4uYmFzaW4tcml2ZXItd3JhcHBlciAuYmFzaW4tcml2ZXItYm94W2RhdGEtdi0zY2M1MWIxMF06bnRoLWNoaWxkKDIpOmJlZm9yZSB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMnB4O1xcbiAgcmlnaHQ6IC0xcHg7XFxuICB3aWR0aDogMjVweDtcXG4gIGhlaWdodDogNDJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxMHB4IDA7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGxlZnQgYm90dG9tO1xcbn1cXG4uYmFzaW4tcml2ZXItd3JhcHBlciAuYmFzaW4tcml2ZXItYm94W2RhdGEtdi0zY2M1MWIxMF06bnRoLWNoaWxkKDMpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6ICNmY2Y3ZjQ7XFxufVxcbi5iYXNpbi1yaXZlci13cmFwcGVyIC5iYXNpbi1yaXZlci1ib3hbZGF0YS12LTNjYzUxYjEwXTpudGgtY2hpbGQoMyk6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAycHg7XFxuICByaWdodDogLTFweDtcXG4gIHdpZHRoOiAyNXB4O1xcbiAgaGVpZ2h0OiA0MnB4O1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDEwcHggMDtcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBib3R0b207XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDZhNDlhOTQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIyZjQ5MTVkM1wiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ2YTQ5YTk0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDZhNDlhOTQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYmFzaW5SaXZlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zY2M1MWIxMCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjU4ZTYwNGNlXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYmFzaW5SaXZlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zY2M1MWIxMCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Jhc2luUml2ZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2NjNTFiMTAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDQUFBQUFnQ0FZQUFBQnplbnIwQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBRmhTVVJCVkZpRjdWWmJib1F3REp4VWNLNDFVbTRGMHJJUzNDb1MyWE9CNUg0RVNvQUFObTIxUDh4bkh2YkVyd2x3NDhhSFlhNWNzbFZmQXdEWVBHWkwvSEpON3YrZGdLMzZHbXllTzl0ZVN5UlRPUzhIQmg4ZUliQWhLQjcycFhEZXJaWThETDlndUFEZ0YyZW5GQWtnWW1xcm5zQW1KdUJkbXhVSmdqUmI1a0tTQ25FRUZqRDhTcXk5Vnl1ME9mTUxBbXRqS2VOZWFPc1NnU1hpOXB2WDlqcmpFTkl1OEFCaUIyVExvUnRUUVNNaFN0dzVoYmhkYkRrY04rQUtyczFFdHVVcFNCWGVINXhWVGNKTnE2V3hhZEVqNklwUThqSk5wTFFFWEpQN0V3ZGVLMGpxTm5STlh1OXVLbCt2Sm1Dcm5zWTU3MVBPWFpON1cvV2tzYW5SZ2lmMkM5QzdOaXVpSWhYTDhta0VJaUdhbkU5MU1CdmZocDdBcHBORVF6SUpmeHh2RkRCOFRoN1RTNmY5S0JLRWs0a29TOEU4QllPeGRMRUZvckVtQ0NSWnBnV0dpMFVOaEYvUDJSMVJEZWdtWWNncEpkVXdPSDNqd2l5NGNlT2orQWI1R0p4a2YrTGI3d0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ3NBQUFBc0NBWUFBQUQ4V0VGNEFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUxIU1VSQlZGaUZ6WmpOanRNd0ZJWFBqZUpCZVFpRVdJeEdDUEVBczhKZHpnb05Fa2c4VFpLbllUSExXYkNzcTFtd1pESDhDQ0Znd1VOVXhhMFBpL1FuQ1hhU1RwTTJSN0xrS203NzVjUytKN1pnVC8yeFZnT1NFdEQ3ZnJkTkF1WUE4RmlwekgrOW8zNWJxd1dTeWdDUS80djVFdzl3SjlnMTZMUjNwZ1lSekovV2dEdkIvckxMS1k3aWFGVlNBKzRFKzlNdU9SaFJpeHc0T1ZmS0FCMWdmMWlyTWFTcmxMVHh1c0NjcTNoU2RFZWc3OVptMGdCTllYNmhWRFlLV0tBQWJuTDU0aXlXQ3V3M2EzWHJZemxVd3RtNlo1NnQ1MkxwLzhQQXdza1c5a3ZMb3hoQ0ZPYlBhK1hwNjE5LzVSSGhKQUlLVUZCU0FqaG1BeVg5WE1DVmIyRG1HN3VpcE5IOXdtYU9ram9BcDJnRTlQM0NidDExZ0FtTVE3VHBuTFNKdk56QXZsREtoTWJGa09MeG4xaTYvTUhIczNWMkRPMVRFVDVBNERvQnhDTndGVUExblVKTXNSc0pMVXUwWGlZWmtiTmxCWjBkQzJ5M2FkRDhDNFpTYkRVT1ZlU2dpWWFYbFZJL3hOVGdMUFBMTS85ZTZJRXlINjAxY08wN2poQlRGQ3JBbDQ5NkJRVUFYQ3BsS1BBVy9UcXNyL25yTEdINkJ0MkNrRFBmZnk2WHV6RmVKaGR5VnFEdjVyc2kzWmZ1NWxZNytGK1lLamNVYU9FNUc4bDB0ckE1QUVUdWNLY3BrbExDMjZQRHE4RjY5YTRpQkZkeFh6cXdHcHhPbzQvYnFOVDNNUWxHNUd5cEdBUmZFVWNEVzlhREZwZ0FSdGhQM0xvSWpUdm55alR3czRTZHBUQy82amZGekllNU5TTCt1TzB5RFlKeDJ6TW9BT0FxVVlib09XNko0ZUxXQmVLMk1zYlA1SGZXQWZwMmdMaTluZHVNNG8vYitqU290eFU1QzFjRGtlbnQzRzRXbHptWVZDUUZvTHRVbjhBWTAvTHl2VjI5ZzhldEMvUUJBR1QrS2xGbTNIV1dNQVR6NjZRNHdCdE4zTDVPZGllS0pDY0FjSjFVVHhsakZLVkVIeE9zVFhYSWphSVZtRGVlUXgyaE9YUkxTUUdBbTduTm1uYWVRK3R0RW5jNmdZOEE0RTJpTXA3STRSV0srZGxGbFR0Nlh3U0JsdUZkTmdSbjc1TDlJdjBmYlRwWWVydzZ2STBBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ3NBQUFBc0NBWUFBQUQ4V0VGNEFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUxHU1VSQlZGaUZ6Wm5OYXR0QUZJWFBGZDZGTkpoaVNob2M4RElQa0UyaGRFd2ZUS01uMC9YS2l5Njk2Tktrb3JodG9HN0lOdEhwUWxFczJUT1M3TWl5RGd6bzU4cno2VEp6ejR3czJGTjh2RGNRQ1NFdyt6NWJMNGtBUU03ZVcrZmRwaitUUVNJRWpnRzVKVUVrWnlPN2U3bUJNbERHclVOVmRpcVJuSmVCRzhMK2lRR2FZekRWS0pMekR6WS9hUWo3aTBmRHFlOTlLdWVYQ2pTQTVlUEs0SmpqbEFocklsVGVYVTZCUFNiWU1jV0hueFlpZm1neWtvc3Iyd3RZNEFVWS9pekx4WldVWUxsT1RPVWJ0aUhoREFDUVFtVTQxbEwvRDRrRlBQMm5uTDdDY3AzWWx6cmFuWWhJaG1OYnV2UXZpZUdhSThRMEFBQ3U3eXlFSVVCMDJvUWgxei9LOVp2cHpCTWZCbHpmV1lBaG1PSWtEYW5KR0hLbDZvbkRBRWd6OEZOSytPWDFjRGhSL2wwNllvQUJ5RzdIcVV2Y0hxT083QkVJUUtJUGpldmxCdGdWQTJCdytqSHdvcWVud29tREtTVUdPWFd2NUdIcVQyWkx6dStEN1UxbW56ZUhUaWJXWmxZQlJpM1JHSytWN21qZnpBb2lHZDNZZzdEY1V0NS9WeER1SFVkcEZMaVpBcDhWdGd5YThZeHVGS0M2K3l6S3pSUjRyRTNiQnQxd2NPYnVzMUM2UEhicnppeHB1RnFZMWpsWEN3T2s3Z1hUVXlseXQxWFdXVUhNMzR0c2NxWFFONU5tcXpyam44K0ZRWHRRbmMzWERaMnNjd3VseThra2ZhcXpCUjFZWjAra3ZqdVl2SFhNZHFxNk1WdTM2aElvbmx1eTI2REdia3VzRGlhcHptd2tIMi90NFhRN1VpYmZGSUhIYmt0eXJXY3JkZ3B5MVNvb0FFREd0d3BTZlR1QkRhdnJ2czl1MlVPN3BjOXVRY05rYmxyblRPYldhN2ZsU0ZlYlZVMndtTWs4bjF6YUFtc0lWbnpqclN0ZEl0ck1iaXMrbUxXbml0SkZSSEw5U1h0a0NvWGpuRW1nRUVaeS9WbUJIcG1DakRNZ0FFREs3T1B4cEhBTm1kMHF1dmdIWmc5dFErWUt3T2ZJdDQzb3JMR1pTd29BY0JuYjVqdlA5aVVUMCtnTGZKQUZUeTNBVTJWNDJ2aWxpaWRjeGdaSURYajBMQ3VFTTVsOHRmczg5QitTcmE0ZzJGb0hGQUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ3NBQUFBc0NBWUFBQUQ4V0VGNEFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQU0zU1VSQlZGaUZ6Wm14anROQUVJYi9XUklnT280VEZFaFgwSUFvZ29Rb0VSV2Jnb0tuc3YxVUZCVFpDQ0VlSUFWQ0ZCVFJFYUZEaEpPRm9sUE84MVBrY25GeXU3WkRuSngvYVNVblhtdStUSFptZHRhQ0RaVk9hVVVRUVdBM2ZiWk1BaVFBY0hCSDRzRDlha3FudE1CdUlLK0pTQTQ3MTRFcndhWlRXZ1g2dFVNVkt6bGFBMjVWZVNvaklvQTdJU3BRZFBhWE9EcFlBbGZ5N09TdjdwMzBTaXE5QjRmaWdBcXdrNVJXb1habk1DSlI0VzNBUGJ4bmVqdXp2NmxPMHl6K2xTcEQ0elROWW1DRGJMQnJuYVpaVElhOS9PaStrUlhZY1VwN2l5ejhXN1lWeVFFQXFESHUrSEl0THZUekxJc0JlTzJyTWIwcjJQRlpGZ3Y5RTNjbENwTGpvMXR4L3J2eEgrMExhSy9OcGVrWkFCaFBzcGlLU0Fuc2MxQVIvWmhvZjQxcTRKMExSdVpra3NVS1JNUThrKzUvMEo1TXNpdnZYa0NkYjU1QzBWSkZBOEtNYnhaWGp4KzAzZWgzNXAzVkloRHR2eml0UzJ6K0UzMDhCQXhKTkdGOFA1M1pKZXoxK3dxZ2RZT0ZOS2dRVTh2cjhodFFQdU9IbUJyaldlWmd2VXpTSU0vaVlubnBEekNpeFdKYXQyZzF0cFVDVmdLbEZGak5uaUdtNERLZ0lPa2V0K010K05ibHZveG5UdWp2T0tvc0EwUE8zYjQrYWdZRkFIU1AyNDZBODlsYkFROHdHUVd3UGtpNHVrRVhVbUxnczVsZnMxNG1EWGhXQVRzY0xaTjBYUnFPWnBaRTVMT1pZL1Y2dGF3bzlJZWoyU0s0WEEyc0VRRWJpdWQ4Z1BtWUJDak9CbHhHYnpDSzYxS1dxd3ArSm1sUW5zMXR0SHhNSkp0VHdjcVdBZENnQ3BiZndYbzlpd2J0RFZCV0ZGQVNZQkJ4SWxKUHVWVXRMcmRsQVNaRkFTWklYajI1SFcvSm1KZjcvRzNtakt3MWlKZktTall5OHdvVzZEeGZQYjFUSnlnQTRQV3p0bE9LODluTHk5dmRFakNCanRQVkRYb0ZBZzU4TnZNMXpNK2tJYytLL2ZodGF1c0cvZlQxUENiOTV4UDVjdXMvWTVCQmVNM1M5RDkrUFo4SGw2cmJtbFFrVXNBR08rbXlvcURxeWpiZjBjTFEvekt1V2d6Ykt0cDhrNUs4NlhaY1kvSnNIaVBINUFnbXZlNWRCelNvZ3ZXZWQ5emltbUFQQUhyZDVYZkEvRVRHa1h0NEE3T0IxaUVYTWxuR0pOUkc3R3NvV0tsS0NnQjhHRTVqN0dIUEd0TGJGNTFLUjRQbWNuS3NRTEx2ODluTC9GcjU1Y2JLTDNvL25GcG9jWDlmaXdTT3hPRGR5MDY4eVdQL0FQZVplKzlrSlRod0FBQUFBRWxGVGtTdVFtQ0NcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ2YTQ5YTk0JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ2YTQ5YTk0Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNDZhNDlhOTRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDZhNDlhOTQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDZhNDlhOTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDZhNDlhOTQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NmE0OWE5NCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0NmE0OWE5NCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvYmFzaW5Ib21lUGFnZS9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00NmE0OWE5NCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00NmE0OWE5NCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vYmFzaW5SaXZlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2NjNTFiMTAmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYmFzaW5SaXZlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2Jhc2luUml2ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2Jhc2luUml2ZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2NjNTFiMTAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIzY2M1MWIxMFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczY2M1MWIxMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczY2M1MWIxMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczY2M1MWIxMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vYmFzaW5SaXZlci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2NjNTFiMTAmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignM2NjNTFiMTAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvYmFzaW5SaXZlci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Jhc2luUml2ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Jhc2luUml2ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYmFzaW5SaXZlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zY2M1MWIxMCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Jhc2luUml2ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNjYzUxYjEwJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==