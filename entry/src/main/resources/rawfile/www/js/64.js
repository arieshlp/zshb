(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[64],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/inHand/inHandApply/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/inHand/inHandApply/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "ClueHandleApply",
  data: function data() {
    return {
      navTitle: '待办应用',
      applyList: [{
        name: '线索',
        imgUrl1: __webpack_require__(/*! ../../../assets/clue/clueIcon/矩形1.png */ "./src/assets/clue/clueIcon/矩形1.png"),
        imgUrl2: __webpack_require__(/*! ../../../assets/clue/clueIcon/圆形1.png */ "./src/assets/clue/clueIcon/圆形1.png"),
        imgUrl3: __webpack_require__(/*! ../../../assets/clue/clueIcon/线索.png */ "./src/assets/clue/clueIcon/线索.png")
      }, {
        name: '督办',
        imgUrl1: __webpack_require__(/*! ../../../assets/clue/superviseIcon/矩形2.png */ "./src/assets/clue/superviseIcon/矩形2.png"),
        imgUrl2: __webpack_require__(/*! ../../../assets/clue/superviseIcon/圆形2.png */ "./src/assets/clue/superviseIcon/圆形2.png"),
        imgUrl3: __webpack_require__(/*! ../../../assets/clue/superviseIcon/督办.png */ "./src/assets/clue/superviseIcon/督办.png")
      }, {
        name: '执法',
        imgUrl1: __webpack_require__(/*! ../../../assets/clue/lawIcon/矩形3.png */ "./src/assets/clue/lawIcon/矩形3.png"),
        imgUrl2: __webpack_require__(/*! ../../../assets/clue/lawIcon/圆形3.png */ "./src/assets/clue/lawIcon/圆形3.png"),
        imgUrl3: __webpack_require__(/*! ../../../assets/clue/lawIcon/执法.png */ "./src/assets/clue/lawIcon/执法.png")
      }, {
        name: '监测',
        imgUrl1: __webpack_require__(/*! ../../../assets/clue/monitorIcon/矩形4.png */ "./src/assets/clue/monitorIcon/矩形4.png"),
        imgUrl2: __webpack_require__(/*! ../../../assets/clue/monitorIcon/圆形4.png */ "./src/assets/clue/monitorIcon/圆形4.png"),
        imgUrl3: __webpack_require__(/*! ../../../assets/clue/monitorIcon/监测.png */ "./src/assets/clue/monitorIcon/监测.png")
      }],
      applyList2: [{
        name: '闭环',
        imgUrl1: __webpack_require__(/*! ../../../assets/clue/clueIcon/矩形1.png */ "./src/assets/clue/clueIcon/矩形1.png"),
        imgUrl2: __webpack_require__(/*! ../../../assets/clue/clueIcon/圆形1.png */ "./src/assets/clue/clueIcon/圆形1.png"),
        imgUrl3: __webpack_require__(/*! ../../../assets/clue/clueIcon/线索.png */ "./src/assets/clue/clueIcon/线索.png")
      }]
    };
  },
  mounted: function mounted() {
    this.$store.state.type = '待办事项';
  },
  methods: {
    goToApply: function goToApply(data) {
      if (data.name === '线索') {
        this.$store.state.type = '我的审批-线索';
        this.$router.push({
          name: 'inHand',
          params: {}
        });
      } else if (data.name === '闭环') {
        this.$store.state.type = '我的审批-闭环';
        this.$router.push({
          name: 'inHand',
          params: {}
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/inHand/inHandApply/index.vue?vue&type=template&id=191e63c8&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/inHand/inHandApply/index.vue?vue&type=template&id=191e63c8&scoped=true& ***!
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
      _c("van-nav-bar", {
        attrs: { title: _vm.navTitle, "left-arrow": "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
      }),
      _c("div", { staticClass: "apply-wrapper" }, [
        _vm._m(0),
        _c(
          "div",
          { staticClass: "apply_div" },
          _vm._l(_vm.applyList, function (item) {
            return _c(
              "div",
              {
                staticClass: "apply_div_item",
                on: {
                  click: function ($event) {
                    return _vm.goToApply(item)
                  },
                },
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "items",
                    style: { "background-image": "url(" + item.imgUrl1 + ")" },
                  },
                  [
                    _c("img", {
                      staticClass: "icon",
                      attrs: { src: item.imgUrl2 },
                    }),
                    _c("img", {
                      staticClass: "icons",
                      attrs: { src: item.imgUrl3 },
                    }),
                  ]
                ),
                _c("span", [_vm._v(_vm._s(item.name))]),
              ]
            )
          }),
          0
        ),
        _vm._m(1),
        _c(
          "div",
          { staticClass: "apply_div" },
          _vm._l(_vm.applyList2, function (item) {
            return _c(
              "div",
              {
                staticClass: "apply_div_item",
                on: {
                  click: function ($event) {
                    return _vm.goToApply(item)
                  },
                },
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "items",
                    style: { "background-image": "url(" + item.imgUrl1 + ")" },
                  },
                  [
                    _c("img", {
                      staticClass: "icon",
                      attrs: { src: item.imgUrl2 },
                    }),
                    _c("img", {
                      staticClass: "icons",
                      attrs: { src: item.imgUrl3 },
                    }),
                  ]
                ),
                _c("span", [_vm._v(_vm._s(item.name))]),
              ]
            )
          }),
          0
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "apply_title" }, [
      _c("span", [_vm._v("线索")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "apply_title" }, [
      _c("span", [_vm._v("环保码")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/inHand/inHandApply/index.vue?vue&type=style&index=0&id=191e63c8&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/inHand/inHandApply/index.vue?vue&type=style&index=0&id=191e63c8&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".apply-wrapper[data-v-191e63c8] {\n  height: calc(100vh - 54px);\n}\n.apply-wrapper .apply_title[data-v-191e63c8] {\n  height: 40px;\n  line-height: 40px;\n  padding-left: 15px;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 14px;\n}\n.apply-wrapper .apply_div[data-v-191e63c8] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 95%;\n  margin: 0 auto;\n}\n.apply-wrapper .apply_div .apply_div_item[data-v-191e63c8] {\n  width: 85px;\n  height: 70px;\n  border-radius: 10px;\n  display: grid;\n  text-align: center;\n  font-size: 12px;\n  color: #121236;\n  align-items: center;\n  padding: 10px 0;\n}\n.apply-wrapper .apply_div .apply_div_item .items[data-v-191e63c8] {\n  background-repeat: no-repeat;\n  width: 25px;\n  position: relative;\n  left: calc(50% - 12px);\n  display: grid;\n}\n.apply-wrapper .apply_div .apply_div_item .items .icon[data-v-191e63c8] {\n  position: relative;\n  top: 10px;\n  left: 10px;\n}\n.apply-wrapper .apply_div .apply_div_item .items .icons[data-v-191e63c8] {\n  position: relative;\n  top: -15px;\n  left: 5px;\n}\n.apply-wrapper .apply_div > .apply_div_item[data-v-191e63c8]:nth-child(1) {\n  background: rgba(53, 90, 252, 0.05);\n}\n.apply-wrapper .apply_div > .apply_div_item[data-v-191e63c8]:nth-child(2) {\n  background: rgba(2, 217, 127, 0.05);\n}\n.apply-wrapper .apply_div > .apply_div_item[data-v-191e63c8]:nth-child(3) {\n  background: rgba(155, 84, 255, 0.05);\n}\n.apply-wrapper .apply_div > .apply_div_item[data-v-191e63c8]:nth-child(4) {\n  background: rgba(255, 130, 11, 0.05);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/inHand/inHandApply/index.vue?vue&type=style&index=0&id=191e63c8&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/inHand/inHandApply/index.vue?vue&type=style&index=0&id=191e63c8&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=191e63c8&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/inHand/inHandApply/index.vue?vue&type=style&index=0&id=191e63c8&scoped=true&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("01176a16", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/clue/clueIcon/圆形1.png":
/*!******************************************!*\
  !*** ./src/assets/clue/clueIcon/圆形1.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFiSURBVDiNrdRLSgNBEAbgv6rTM9EoZhAFx4UHcO/GLLyEIFmIR/EcroIBPYAXcKWgBHeuxIiiiBgNIQ+dR5ULjcLECTqZf1lNf91Q1U1Iydq2zmuEuQIFJVFyiKGkGlLk9AfS7VyszrSwS5LcR8lCpaqemGA5jslNOwwABIitsQ8ndXpKBde31I84XBoHJaPGvpzVqTkCZsF+biuv5wfFawBgANjY0XJW7BNhb32r53+DgzDws2LDRGyXNnaaRVOptj2BszgpCACRzCtH4s7lgQFAzEGZY+JSXqCJyWVjxs/bf8Mqo8M9EQjVMF+QdJAbJhCGup28QFLpcDSLl7xAZ8ptcWOPQi7Yx8k56RzXqM0AcLpP9zHbblaKBTLluHfA11sGgP77ZTNLg1ggPG2vjmv0BiT+w81NNTcWK4zQ+xOm2gu6rdvGkd8f1n4d6kpVvSB+XyDDs6kQnOfGIT0n1z4AUyqKvkIxKJEAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/clue/clueIcon/矩形1.png":
/*!******************************************!*\
  !*** ./src/assets/clue/clueIcon/矩形1.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGxSURBVEiJpZSxTsMwFEWvHUsVHYBfYUVCYuBTKjEgJjZYkOAz2JDozoDEDwBCbCxIiJFPoG1sPz8GN43rxI2TZons+N37jn0dAQDPL+bQOXG1KHEMKcZEgHOAY/8mtxxXc7ScY//mcA2DtcGXAB4uJ8WtmD7pg71d+aqNGC00w1jAVgK0Lk4EUGRaNUPOf2PyxgzAWtypnbG81kaMZiVjUQLW+iLrgkKqu6RYNDQPqRiQwEQVUpzM5l5cm3phSBCLUGS+ZhYYOQaUMRhrg9XWNETD7nIIohpFDjAEkE1300UU1sQaqpq0KdGeBPFYrSHR5m62IkhuSwbBJnO1ukAUCbV0NyRVimh9YZ+E5Jgrx4Dl+gxyCVpFtyUYkiq1+qFlEHSmqqWukyD3TFKpatyDPgnJiXTjHgwlSAXCE0Qpyk1ITqpqAk50MyRVSzPHwU22Awg2ETEDQOIMchOSIqjEAUCWGr+u5QyS4441oTgASOv4Eew/pIxsdJgpo0gbAJz8/ikujMYb0NzfPgRtjxDiTFSD0xs6/5vzkbbYtzbKOEeRpJrWtYgzxKcs5PT9Xnz8A9KDdUKe3G6hAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/clue/clueIcon/线索.png":
/*!*****************************************!*\
  !*** ./src/assets/clue/clueIcon/线索.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAALCAYAAABLcGxfAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABtSURBVCiRjY9bDoMwEANnEfdqejLCyUJPNv0gvERJM9J+rS3bUFGTzxQ1AwQn1MRvJiAB88P/jppV4790NxSAsaMOtc5aqY4tjcEbeY+q10q4dDvcHQzA0iuGdfQHmNRXQzdHxAIwREQG3r0JX/3WeiU2pM/3AAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/clue/lawIcon/圆形3.png":
/*!*****************************************!*\
  !*** ./src/assets/clue/lawIcon/圆形3.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFISURBVDiNrdTPSkJREMfx75yr1yCkblGgLYK2vUwFQbioXISv0VO4CMxaRJCLgl4nCIoiIiUuptbtzLRSyjJK7293/n1mcYYRRuR43ea9MJMETDsIA4clSoKjk1Xim1Wa+/uiw+9keOOkZFHXs2RKblQxAAM/9c799rk8jgRrW1ZUT+E36Ie09hpy3V+4CTGAucMNW/kC1tdsdkwMAB8Q1basOAAtS3FcrB/1FOq7NhVUSxaJsjgpCKA9zIkykwYGIFlmXZAwnRZoSs5Z5vd++2+c0+/NPRGIkqQKeuimhYmiLgiJ0wJ9hthpnlZaYPhK01UOJAnhYVLMK3H5Qp4dwE5D7hy0x8VE0VyeW/g0bW7hepwPEkUl4ap8JD0Ymodnmxa0Pcs+IPoLpsoLb9xULqUzKPDTxWrJooxnQZT8SCjkqXIqT8NnH/lwew8KLp+kAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/clue/lawIcon/执法.png":
/*!****************************************!*\
  !*** ./src/assets/clue/lawIcon/执法.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACpSURBVCiRfVLLFYRACEu2MelMrEynMvZgUBx55jI/EgIM0CAiLE7sEWFdTEfyQtq19zmO0+WqdSPpEtoBZNYDwABw1AwPFAcdjPkoNUhxxlL2g6Rzqs+KrYoDAEimOC5itfcFkryIatACYNP7WmKHCC7xs3Ga2TUvNcur/TznfAHgp5q6uhKGZ3NulKzeBtxO3jHlm72yV4tfqqHVsr5OkA3ZprpGfr+KP5eF4ZdSw0rVAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/clue/lawIcon/矩形3.png":
/*!*****************************************!*\
  !*** ./src/assets/clue/lawIcon/矩形3.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGXSURBVEiJrVa7SgUxED1ZAleuFvdXbAXRwj/RQhArS0Es/AxrrSwUf8BKCwvBxsJKsLQV2c3MWORhkpvrPgPLns1uzslJJjOrAOD9QbYYODU1diuFOTMgBAgDLPYOBpgtTi4BmABI6BNj8CaCq51DdaFebmVzfYFHajAzDUC1JSdHKpQSJ5j+RPyEwrMVvNRrGzgng1nzA5gaYOMGUkRIGTkVsKSirh1oKOwZR06NFehFvOqd2GXTQphTk5FHdpeEuoo6rJkcMfUg7jEB7WeckHfBHZ3pYlR0JO4iqoMapcqljRziRsedRZGMrK+oHhQhPdxo9h+0hNvKeG8R1Rgb7y1ulh0UiMeI6qSj5WANcWNPcssyjRHVPo8ng6bIRbGDEvEUacLugSsWU+afEByS78GIE7u0b2Irzv+5aKAbSKhoqKjBJ0fLlNilAs5DOsMxOQBUbHCnfJHOhTLRuG6UcKFx9fWBE0N4Uoh+TfKTvcpNhEtNBEfKP9yfyXH9jW0xWJBB+N/x0RBmW4ievCmFV8W43r9Rz79oHmtR6lmNYQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/clue/monitorIcon/圆形4.png":
/*!*********************************************!*\
  !*** ./src/assets/clue/monitorIcon/圆形4.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEuSURBVDiNrdTLTgIxFMbx/zlFQAgZJl4ScOHj+QouNOlK38UHcmUk0WiMASTD3aGtCwILRrzMTJdt+utJztcj7FnhpnWEpBGpaUKoYgg4SZHVDHOQ8DkZiMXv3pMMdBvFLN0Z6mv7HgPAiwN5FTt53wsG2+iidH6EMiX5oVwvehkwF7at1n+IXTwC6Bprt3NjAKpxsI3uFqS66ubGtiidYKmbcBnFGHdaGAQIlaDUl1EpGACmrWilWZqnvqaYX/L2XxOXDXcx0EtaLmhW8xI9r2glKY0TlyjH02FpoDscqFyQouGtMCYuETsaKYBczV8QMynAedzyGTZ/GcCNe3jN0yBPrfEglgXszsM7DPf1c1Tjv1FmCuMnscw2W9+Gej21Fyeoae2H6Isd93ePvgADyWjz1RZzZQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/clue/monitorIcon/监测.png":
/*!********************************************!*\
  !*** ./src/assets/clue/monitorIcon/监测.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAANCAYAAACZ3F9/AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABsSURBVCiRxZHLDYAwDENfEHsRNmsna5nMXACVqByohPDNVp7yQ1LSexWTJAY0jUCfgDX4DKy3pLN4OnIPvrRFESxNkUvyHiRJ8arniP7gL/3zjjzAZYvJcRAPcQUws3oGc4ASsHQ6LMBG898dXwetdZA+QhoAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/clue/monitorIcon/矩形4.png":
/*!*********************************************!*\
  !*** ./src/assets/clue/monitorIcon/矩形4.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGwSURBVEiJtZW9ah0xEIU/7RUYXwikce1ncGcCARdp8wqp0gVXKe3CRR7DkC4Gl3kDV3YRSJEmtcFlmgRf5+7uzKTYn7t/WmkhFogVK+kcnZkzkgOw7xevMDuj3JyQ+TUYqIIZmNZjnfg3mK+6URY/Mf3i3l5/cnbz7ogXh7dIvof8BS1AStCyuwnU+kQq00SqgIFloHLp2T+4QIs9ykcoNyB5f3MItPdfJ5Q4cKv3Hr9+Q/6nBt/Wp282SBiou2Zy3sCBR2WNbKEsqvDETpdKWofOY1IDh8BlnjS0pv56VEGGMmOgMgIKkfoqIVLLmpG/hHSkQNM3JK3pzPvWx42CpOSlk/pdeGaSt4R0MPZthSbbMJKLAYbvJziiJBieMGlfQdvTbRjLhd9Jitg06R4ak+5ctCR5yaQyrIMY6HJXRWy6wFWzNn2me6hzm3b6/7qHzACaHMw8h0td1QEHyCieHioXTRTbyAARpSo98IpA5StWvdP9omuAAvUxRTpumnH/6yOS3+FWu1vVElV05yabfXDt8PPxKfnv12jxsn3hJGDDJhQmlepx+0FmV+588+0fGk5upoNZkrcAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/clue/superviseIcon/圆形2.png":
/*!***********************************************!*\
  !*** ./src/assets/clue/superviseIcon/圆形2.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFASURBVDiNrdTfSgJBFMfx78yu7oaEblGgXYgh2AP4Tr1C3c1F0bv0Er2DFyUVSEURoRJLWraemS5iqfxH6v7uZg7zmYE5M4p5uTrexguKiBSAPL7nGEuC74YgMfWghzJ2cpmagu7OIgajPZQEczcDsCIE+Sfq5mU+2DYVnJQXQlNHcn0OTjrpUK+FATi1xbXZ/wt2TGklLI1IRNtUfsAxlZWxNE7KXJjQo3UUodTu2iBASTtNLixmggEklDRWCpmBSgKN8hb325LRKJlu7jXBJFvQ6vfMNIvVhDbODMy7WNOv9jMDfb+naR4maPu8NuZcTM28fj+9xukjyr2tjFksG/4D/P5txO9gveUvyMfijW6pmQ+Y/A/ducfNZRWR6F9YMh7wGdzTNMN0anZTt44icuEOyObMuvYGQJeG6U6WvgAcV23z+2H7lgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/clue/superviseIcon/督办.png":
/*!**********************************************!*\
  !*** ./src/assets/clue/superviseIcon/督办.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADZSURBVDiNtZCxDcJQEEOfEQNAT8EGVNQJDWILVgCxQDZgAqT0SKwQUlHCCIwAExxF7ktfUT4QIVx9+Z/tO8M/YWa5mZW/GJTW4Jya0Rtx4c8HsAdqSfm3yUVkgJltfJOyPTtIJUsqInoE3IB7r2TnSjOrUpphlDoF7nGylzfz9E6EE6bAmqawWJxJGgN1agu1BcCW5ubMv2pJ4bRM0iK1DWZ29ravEVeFXryjZB+xSdXi+pkkjDtN4g5Wb/RPSRcX1YGUVMjFE+AALIFTSzwHjpJ2IZ1PZfbBCwIIrlyq1Mm6AAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/clue/superviseIcon/矩形2.png":
/*!***********************************************!*\
  !*** ./src/assets/clue/superviseIcon/矩形2.png ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAZCAYAAAArK+5dAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAICSURBVEiJpZatjtVAFMd/0wzZ5G5IgIQHwZKQrCC8AW+AIygEAoPgFQiGtSBA4dEgcBgSNFgIgdx258w5iH7N1917lx3Tdto55/81bR3A2/DhdsQ93dpw4ug2ERAMNSNiRDMiEAFdrtd7CkRjusYG4lfMXr+4ev+5e3n27taN7vrH3uRoa4EBQcyQpIikTab5+b5iyFRcpmZqhuEQ5ZXfuONnvcnRHxvYWiCYEtCsSDRDpuKSMBjPyeeWJo7OuQe+48rdv9aztUBvglCgXxaSNEuORWNJZFN1eLG46RHOLBIqdCvKvFnBrJqb1yhesFWWCt28sI1yDkMlXQLIx8lQmR6SgkG5oEQ5A8kBrGHwC1JYmuwzMfOkki5n62OC/MLyHMDWZw+WJl5SntGDy8jTYFsC8elFhbKxoEK5J86+Sk9pWDP/VH7t2u0+NTGXaX/GD2G7O0UHmpj61WK7ePDf8ixNGi/DkQFteQ7I+BrnOuozWx+T4hXKxoIWytSvMs6+zG9l4jkZP+SVXe2Di5q4i60yjmwflLt3X8YrZtOcsY6uR77PHaVh+MyqjHE6P7MsiwN0Au8NhzYkEHJ25x4bxQHtvv368XggfsI5ysimH6JyQ5ZAmsPZQzef3/t5+ug34c6g8dr4VwFiukZQR0kUJdj4fyQosVXbuS/a6Ztw88nnf+HAGaTDFYyDAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/views/inHand/inHandApply/index.vue":
/*!************************************************!*\
  !*** ./src/views/inHand/inHandApply/index.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_191e63c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=191e63c8&scoped=true& */ "./src/views/inHand/inHandApply/index.vue?vue&type=template&id=191e63c8&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/inHand/inHandApply/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_191e63c8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=191e63c8&scoped=true&lang=scss& */ "./src/views/inHand/inHandApply/index.vue?vue&type=style&index=0&id=191e63c8&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_191e63c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_191e63c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "191e63c8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/inHand/inHandApply/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/inHand/inHandApply/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./src/views/inHand/inHandApply/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/inHand/inHandApply/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/inHand/inHandApply/index.vue?vue&type=style&index=0&id=191e63c8&scoped=true&lang=scss&":
/*!**********************************************************************************************************!*\
  !*** ./src/views/inHand/inHandApply/index.vue?vue&type=style&index=0&id=191e63c8&scoped=true&lang=scss& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_191e63c8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=191e63c8&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/inHand/inHandApply/index.vue?vue&type=style&index=0&id=191e63c8&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_191e63c8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_191e63c8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_191e63c8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_191e63c8_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/inHand/inHandApply/index.vue?vue&type=template&id=191e63c8&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./src/views/inHand/inHandApply/index.vue?vue&type=template&id=191e63c8&scoped=true& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_191e63c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=191e63c8&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/inHand/inHandApply/index.vue?vue&type=template&id=191e63c8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_191e63c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_191e63c8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2luSGFuZC9pbkhhbmRBcHBseS9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2luSGFuZC9pbkhhbmRBcHBseS9pbmRleC52dWU/Yzc4MiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvaW5IYW5kL2luSGFuZEFwcGx5L2luZGV4LnZ1ZT9hOWViIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9pbkhhbmQvaW5IYW5kQXBwbHkvaW5kZXgudnVlP2EyMTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9jbHVlL2NsdWVJY29uL+WchuW9ojEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvY2x1ZS9jbHVlSWNvbi/nn6nlvaIxLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2NsdWUvY2x1ZUljb24v57q/57SiLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2NsdWUvbGF3SWNvbi/lnIblvaIzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2NsdWUvbGF3SWNvbi/miafms5UucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvY2x1ZS9sYXdJY29uL+efqeW9ojMucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvY2x1ZS9tb25pdG9ySWNvbi/lnIblvaI0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2NsdWUvbW9uaXRvckljb24v55uR5rWLLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2NsdWUvbW9uaXRvckljb24v55+p5b2iNC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9jbHVlL3N1cGVydmlzZUljb24v5ZyG5b2iMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9jbHVlL3N1cGVydmlzZUljb24v552j5YqeLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2NsdWUvc3VwZXJ2aXNlSWNvbi/nn6nlvaIyLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvaW5IYW5kL2luSGFuZEFwcGx5L2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvaW5IYW5kL2luSGFuZEFwcGx5L2luZGV4LnZ1ZT82Yjc5Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9pbkhhbmQvaW5IYW5kQXBwbHkvaW5kZXgudnVlPzljZDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2luSGFuZC9pbkhhbmRBcHBseS9pbmRleC52dWU/ZTQzMiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNBO0FBQ0EseUJBREE7QUFFQSxNQUZBLGtCQUVBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLGtCQUNBO0FBQ0Esa0JBREE7QUFFQSx1SEFGQTtBQUdBLHVIQUhBO0FBSUE7QUFKQSxPQURBLEVBT0E7QUFDQSxrQkFEQTtBQUVBLGlJQUZBO0FBR0EsaUlBSEE7QUFJQTtBQUpBLE9BUEEsRUFhQTtBQUNBLGtCQURBO0FBRUEscUhBRkE7QUFHQSxxSEFIQTtBQUlBO0FBSkEsT0FiQSxFQW1CQTtBQUNBLGtCQURBO0FBRUEsNkhBRkE7QUFHQSw2SEFIQTtBQUlBO0FBSkEsT0FuQkEsQ0FGQTtBQTRCQSxtQkFDQTtBQUNBLGtCQURBO0FBRUEsdUhBRkE7QUFHQSx1SEFIQTtBQUlBO0FBSkEsT0FEQTtBQTVCQTtBQXFDQSxHQXhDQTtBQXlDQSxTQXpDQSxxQkF5Q0E7QUFDQTtBQUNBLEdBM0NBO0FBNENBO0FBQ0EsYUFEQSxxQkFDQSxJQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQSxPQUhBLE1BR0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQVRBO0FBNUNBLEc7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLHdDQUF3QztBQUN4RDtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87QUFDUCxpQkFBaUIsK0JBQStCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMkJBQTJCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtEQUFrRDtBQUM5RSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG9CQUFvQjtBQUNsRCxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLDhCQUE4QixvQkFBb0I7QUFDbEQscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMkJBQTJCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsaUJBQWlCO0FBQ2pCLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGtEQUFrRDtBQUM5RSxtQkFBbUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLG9CQUFvQjtBQUNsRCxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLDhCQUE4QixvQkFBb0I7QUFDbEQscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDZCQUE2QjtBQUNuRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDZCQUE2QjtBQUNuRDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNySEE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyw4R0FBeUQ7QUFDbkc7QUFDQTtBQUNBLGNBQWMsUUFBUyxvQ0FBb0MsK0JBQStCLEdBQUcsZ0RBQWdELGlCQUFpQixzQkFBc0IsdUJBQXVCLGlDQUFpQyxvQkFBb0IsR0FBRyw4Q0FBOEMsa0JBQWtCLG1DQUFtQyx3QkFBd0IsZUFBZSxtQkFBbUIsR0FBRyw4REFBOEQsZ0JBQWdCLGlCQUFpQix3QkFBd0Isa0JBQWtCLHVCQUF1QixvQkFBb0IsbUJBQW1CLHdCQUF3QixvQkFBb0IsR0FBRyxxRUFBcUUsaUNBQWlDLGdCQUFnQix1QkFBdUIsMkJBQTJCLGtCQUFrQixHQUFHLDJFQUEyRSx1QkFBdUIsY0FBYyxlQUFlLEdBQUcsNEVBQTRFLHVCQUF1QixlQUFlLGNBQWMsR0FBRyw2RUFBNkUsd0NBQXdDLEdBQUcsNkVBQTZFLHdDQUF3QyxHQUFHLDZFQUE2RSx5Q0FBeUMsR0FBRyw2RUFBNkUseUNBQXlDLEdBQUc7QUFDN2pEO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLHF6QkFBeWQ7QUFDL2U7QUFDQSw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLGdJQUFtRTtBQUNyRiw4Q0FBOEMscUNBQXFDO0FBQ25GO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7QUNYZixpQ0FBaUMsb2xCOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsNHJCOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsNFE7Ozs7Ozs7Ozs7O0FDQWpDLGlDQUFpQyxnakI7Ozs7Ozs7Ozs7O0FDQWpDLGlDQUFpQyw0Vjs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLDRwQjs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLGdoQjs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLDRROzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsNHJCOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsd2lCOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsNFo7Ozs7Ozs7Ozs7O0FDQWpDLGlDQUFpQyx3eUI7Ozs7Ozs7Ozs7OztBQ0FqQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdHO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUcxRjtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsNEZBQU07QUFDUixFQUFFLHFHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUEwUyxDQUFnQixzVUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E5VDtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy82NC5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG4gICAgPHZhbi1uYXYtYmFyIDp0aXRsZT1cIm5hdlRpdGxlXCIgbGVmdC1hcnJvdyBAY2xpY2stbGVmdD1cIiRyb3V0ZXIuZ28oLTEpXCI+PC92YW4tbmF2LWJhcj5cclxuICAgIDxkaXYgY2xhc3M9XCJhcHBseS13cmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhcHBseV90aXRsZVwiPlxyXG4gICAgICAgIDxzcGFuPue6v+e0ojwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJhcHBseV9kaXZcIj5cclxuICAgICAgICA8ZGl2IHYtZm9yPVwiaXRlbSBpbiBhcHBseUxpc3RcIiBjbGFzcz1cImFwcGx5X2Rpdl9pdGVtXCIgQGNsaWNrPVwiZ29Ub0FwcGx5KGl0ZW0pXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbXNcIiA6c3R5bGU9XCJ7J2JhY2tncm91bmQtaW1hZ2UnOid1cmwoJysgaXRlbS5pbWdVcmwxICsnKSd9XCI+XHJcbiAgICAgICAgICAgIDxpbWcgOnNyYz1cIml0ZW0uaW1nVXJsMlwiIGNsYXNzPVwiaWNvblwiPlxyXG4gICAgICAgICAgICA8aW1nIDpzcmM9XCJpdGVtLmltZ1VybDNcIiBjbGFzcz1cImljb25zXCI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxzcGFuPnt7aXRlbS5uYW1lfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYXBwbHlfdGl0bGVcIj5cclxuICAgICAgICA8c3Bhbj7njq/kv53noIE8L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiYXBwbHlfZGl2XCI+XHJcbiAgICAgICAgPGRpdiB2LWZvcj1cIml0ZW0gaW4gYXBwbHlMaXN0MlwiIGNsYXNzPVwiYXBwbHlfZGl2X2l0ZW1cIiBAY2xpY2s9XCJnb1RvQXBwbHkoaXRlbSlcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtc1wiIDpzdHlsZT1cInsnYmFja2dyb3VuZC1pbWFnZSc6J3VybCgnKyBpdGVtLmltZ1VybDEgKycpJ31cIj5cclxuICAgICAgICAgICAgPGltZyA6c3JjPVwiaXRlbS5pbWdVcmwyXCIgY2xhc3M9XCJpY29uXCI+XHJcbiAgICAgICAgICAgIDxpbWcgOnNyYz1cIml0ZW0uaW1nVXJsM1wiIGNsYXNzPVwiaWNvbnNcIj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPHNwYW4+e3tpdGVtLm5hbWV9fTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJDbHVlSGFuZGxlQXBwbHlcIixcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgbmF2VGl0bGU6ICflvoXlip7lupTnlKgnLFxyXG4gICAgICAgIGFwcGx5TGlzdDogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAn57q/57SiJyxcclxuICAgICAgICAgICAgaW1nVXJsMTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2NsdWUvY2x1ZUljb24v55+p5b2iMS5wbmcnKSxcclxuICAgICAgICAgICAgaW1nVXJsMjogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2NsdWUvY2x1ZUljb24v5ZyG5b2iMS5wbmcnKSxcclxuICAgICAgICAgICAgaW1nVXJsMzogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2NsdWUvY2x1ZUljb24v57q/57SiLnBuZycpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAn552j5YqeJyxcclxuICAgICAgICAgICAgaW1nVXJsMTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2NsdWUvc3VwZXJ2aXNlSWNvbi/nn6nlvaIyLnBuZycpLFxyXG4gICAgICAgICAgICBpbWdVcmwyOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvY2x1ZS9zdXBlcnZpc2VJY29uL+WchuW9ojIucG5nJyksXHJcbiAgICAgICAgICAgIGltZ1VybDM6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9jbHVlL3N1cGVydmlzZUljb24v552j5YqeLnBuZycpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAn5omn5rOVJyxcclxuICAgICAgICAgICAgaW1nVXJsMTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2NsdWUvbGF3SWNvbi/nn6nlvaIzLnBuZycpLFxyXG4gICAgICAgICAgICBpbWdVcmwyOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvY2x1ZS9sYXdJY29uL+WchuW9ojMucG5nJyksXHJcbiAgICAgICAgICAgIGltZ1VybDM6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy9jbHVlL2xhd0ljb24v5omn5rOVLnBuZycpXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBuYW1lOiAn55uR5rWLJyxcclxuICAgICAgICAgICAgaW1nVXJsMTogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2NsdWUvbW9uaXRvckljb24v55+p5b2iNC5wbmcnKSxcclxuICAgICAgICAgICAgaW1nVXJsMjogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2NsdWUvbW9uaXRvckljb24v5ZyG5b2iNC5wbmcnKSxcclxuICAgICAgICAgICAgaW1nVXJsMzogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL2NsdWUvbW9uaXRvckljb24v55uR5rWLLnBuZycpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBhcHBseUxpc3QyOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIG5hbWU6ICfpl63njq8nLFxyXG4gICAgICAgICAgICBpbWdVcmwxOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvY2x1ZS9jbHVlSWNvbi/nn6nlvaIxLnBuZycpLFxyXG4gICAgICAgICAgICBpbWdVcmwyOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvY2x1ZS9jbHVlSWNvbi/lnIblvaIxLnBuZycpLFxyXG4gICAgICAgICAgICBpbWdVcmwzOiByZXF1aXJlKCcuLi8uLi8uLi9hc3NldHMvY2x1ZS9jbHVlSWNvbi/nur/ntKIucG5nJylcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgdGhpcy4kc3RvcmUuc3RhdGUudHlwZSA9ICflvoXlip7kuovpobknO1xyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgZ29Ub0FwcGx5KGRhdGEpIHtcclxuICAgICAgICBpZiAoZGF0YS5uYW1lID09PSAn57q/57SiJykge1xyXG4gICAgICAgICAgdGhpcy4kc3RvcmUuc3RhdGUudHlwZSA9ICfmiJHnmoTlrqHmibkt57q/57SiJztcclxuICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiAnaW5IYW5kJywgcGFyYW1zOiB7fX0pXHJcbiAgICAgICAgfSBlbHNlIGlmIChkYXRhLm5hbWUgPT09ICfpl63njq8nKSB7XHJcbiAgICAgICAgICB0aGlzLiRzdG9yZS5zdGF0ZS50eXBlID0gJ+aIkeeahOWuoeaJuS3pl63njq8nO1xyXG4gICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6ICdpbkhhbmQnLCBwYXJhbXM6IHt9fSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZCBsYW5nPVwic2Nzc1wiPlxyXG4gIC5hcHBseS13cmFwcGVyIHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDU0cHgpO1xyXG5cclxuICAgIC5hcHBseV90aXRsZSB7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxuICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5hcHBseV9kaXYge1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIHdpZHRoOiA5NSU7XHJcbiAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG5cclxuICAgICAgLmFwcGx5X2Rpdl9pdGVtIHtcclxuICAgICAgICB3aWR0aDogODVweDtcclxuICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgY29sb3I6ICMxMjEyMzY7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDA7XHJcblxyXG4gICAgICAgIC5pdGVtcyB7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICBsZWZ0OiBjYWxjKDUwJSAtIDEycHgpO1xyXG4gICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuXHJcbiAgICAgICAgICAuaWNvbiB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIC5pY29ucyB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgdG9wOiAtMTVweDtcclxuICAgICAgICAgICAgbGVmdDogNXB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgIH1cclxuXHJcbiAgICAgID4gLmFwcGx5X2Rpdl9pdGVtOm50aC1jaGlsZCgxKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSg1MywgOTAsIDI1MiwgMC4wNSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgID4gLmFwcGx5X2Rpdl9pdGVtOm50aC1jaGlsZCgyKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyLCAyMTcsIDEyNywgMC4wNSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgID4gLmFwcGx5X2Rpdl9pdGVtOm50aC1jaGlsZCgzKSB7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNTUsIDg0LCAyNTUsIDAuMDUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICA+IC5hcHBseV9kaXZfaXRlbTpudGgtY2hpbGQoNCkge1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAxMzAsIDExLCAwLjA1KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcInZhbi1uYXYtYmFyXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgdGl0bGU6IF92bS5uYXZUaXRsZSwgXCJsZWZ0LWFycm93XCI6IFwiXCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcImNsaWNrLWxlZnRcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLmdvKC0xKVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYXBwbHktd3JhcHBlclwiIH0sIFtcbiAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYXBwbHlfZGl2XCIgfSxcbiAgICAgICAgICBfdm0uX2woX3ZtLmFwcGx5TGlzdCwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFwcGx5X2Rpdl9pdGVtXCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ29Ub0FwcGx5KGl0ZW0pXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIml0ZW1zXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IFwiYmFja2dyb3VuZC1pbWFnZVwiOiBcInVybChcIiArIGl0ZW0uaW1nVXJsMSArIFwiKVwiIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogaXRlbS5pbWdVcmwyIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IGl0ZW0uaW1nVXJsMyB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLm5hbWUpKV0pLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSksXG4gICAgICAgICAgMFxuICAgICAgICApLFxuICAgICAgICBfdm0uX20oMSksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJhcHBseV9kaXZcIiB9LFxuICAgICAgICAgIF92bS5fbChfdm0uYXBwbHlMaXN0MiwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImFwcGx5X2Rpdl9pdGVtXCIsXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ29Ub0FwcGx5KGl0ZW0pXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIml0ZW1zXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7IFwiYmFja2dyb3VuZC1pbWFnZVwiOiBcInVybChcIiArIGl0ZW0uaW1nVXJsMSArIFwiKVwiIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogaXRlbS5pbWdVcmwyIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbnNcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IGl0ZW0uaW1nVXJsMyB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLm5hbWUpKV0pLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSksXG4gICAgICAgICAgMFxuICAgICAgICApLFxuICAgICAgXSksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFwcGx5X3RpdGxlXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLnur/ntKJcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhcHBseV90aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi546v5L+d56CBXCIpXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5hcHBseS13cmFwcGVyW2RhdGEtdi0xOTFlNjNjOF0ge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTRweCk7XFxufVxcbi5hcHBseS13cmFwcGVyIC5hcHBseV90aXRsZVtkYXRhLXYtMTkxZTYzYzhdIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLmFwcGx5LXdyYXBwZXIgLmFwcGx5X2RpdltkYXRhLXYtMTkxZTYzYzhdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDk1JTtcXG4gIG1hcmdpbjogMCBhdXRvO1xcbn1cXG4uYXBwbHktd3JhcHBlciAuYXBwbHlfZGl2IC5hcHBseV9kaXZfaXRlbVtkYXRhLXYtMTkxZTYzYzhdIHtcXG4gIHdpZHRoOiA4NXB4O1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogIzEyMTIzNjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxufVxcbi5hcHBseS13cmFwcGVyIC5hcHBseV9kaXYgLmFwcGx5X2Rpdl9pdGVtIC5pdGVtc1tkYXRhLXYtMTkxZTYzYzhdIHtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICB3aWR0aDogMjVweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IGNhbGMoNTAlIC0gMTJweCk7XFxuICBkaXNwbGF5OiBncmlkO1xcbn1cXG4uYXBwbHktd3JhcHBlciAuYXBwbHlfZGl2IC5hcHBseV9kaXZfaXRlbSAuaXRlbXMgLmljb25bZGF0YS12LTE5MWU2M2M4XSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDEwcHg7XFxuICBsZWZ0OiAxMHB4O1xcbn1cXG4uYXBwbHktd3JhcHBlciAuYXBwbHlfZGl2IC5hcHBseV9kaXZfaXRlbSAuaXRlbXMgLmljb25zW2RhdGEtdi0xOTFlNjNjOF0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAtMTVweDtcXG4gIGxlZnQ6IDVweDtcXG59XFxuLmFwcGx5LXdyYXBwZXIgLmFwcGx5X2RpdiA+IC5hcHBseV9kaXZfaXRlbVtkYXRhLXYtMTkxZTYzYzhdOm50aC1jaGlsZCgxKSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDUzLCA5MCwgMjUyLCAwLjA1KTtcXG59XFxuLmFwcGx5LXdyYXBwZXIgLmFwcGx5X2RpdiA+IC5hcHBseV9kaXZfaXRlbVtkYXRhLXYtMTkxZTYzYzhdOm50aC1jaGlsZCgyKSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDIsIDIxNywgMTI3LCAwLjA1KTtcXG59XFxuLmFwcGx5LXdyYXBwZXIgLmFwcGx5X2RpdiA+IC5hcHBseV9kaXZfaXRlbVtkYXRhLXYtMTkxZTYzYzhdOm50aC1jaGlsZCgzKSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDE1NSwgODQsIDI1NSwgMC4wNSk7XFxufVxcbi5hcHBseS13cmFwcGVyIC5hcHBseV9kaXYgPiAuYXBwbHlfZGl2X2l0ZW1bZGF0YS12LTE5MWU2M2M4XTpudGgtY2hpbGQoNCkge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDEzMCwgMTEsIDAuMDUpO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE5MWU2M2M4JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMDExNzZhMTZcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xOTFlNjNjOCZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE5MWU2M2M4JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBWUFBQUNOaVIwTkFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUZpU1VSQlZEaU5yZFJMU2dOQkVBYmd2NnJUTTlFb1poQUZ4NFVIY08vR0xMeUVJRm1JUi9FY3JvSUJQWUFYY0tXZ0JIZXV4SWlpaUJnTklRK2RSNVVMamNMRUNUcVpmMWxOZjkxUTFVMUl5ZHEyem11RXVRSUZKVkZ5aUtHa0dsTGs5QWZTN1Z5c3pyU3dTNUxjUjhsQ3BhcWVtR0E1anNsTk93d0FCSWl0c1E4bmRYcEtCZGUzMUk4NFhCb0hKYVBHdnB6VnFUa0Nac0YrYml1djV3ZkZhd0JnQU5qWTBYSlc3Qk5oYjMycjUzK0RnekR3czJMRFJHeVhObmFhUlZPcHRqMkJzemdwQ0FDUnpDdEg0czdsZ1FGQXpFR1pZK0pTWHFDSnlXVmp4cy9iZjhNcW84TTlFUWpWTUYrUWRKQWJKaENHdXAyOFFGTHBjRFNMbDd4QVo4cHRjV09QUWk3WXg4azU2UnpYcU0wQWNMcFA5ekhiYmxhS0JUTGx1SGZBMTFzR2dQNzdaVE5MZzFnZ1BHMnZqbXYwQmlUK3c4MU5OVGNXSzR6USt4T20yZ3U2cmR2R2tkOGYxbjRkNmtwVnZTQitYeUREczZrUW5PZkdJVDBuMXo0QVV5cUt2a0l4S0pFQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJnQUFBQVpDQVlBQUFBcksrNWRBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFHeFNVUkJWRWlKcFpTeFRzTXdGRVd2SFVzVkhZQmZZVVZDWXVCVEtqRWdKalpZa09BejJKRG96b0RFRHdCQ2JDeElpSkZQb0cxc1B6OEdONDNyeEkyVFpvbnMrTjM3am4wZEFRRFBMK2JRT1hHMUtIRU1LY1pFZ0hPQVkvOG10eHhYYzdTY1kvL21jQTJEdGNHWEFCNHVKOFd0bUQ3cGc3MWQrYXFOR0MwMHcxakFWZ0swTGs0RVVHUmFOVVBPZjJQeXhnekFXdHlwbmJHODFrYU1aaVZqVVFMVytpTHJna0txdTZSWU5EUVBxUmlRd0VRVlVwek01bDVjbTNwaFNCQ0xVR1MrWmhZWU9RYVVNUmhyZzlYV05FVEQ3bklJb2hwRkRqQUVrRTEzMDBVVTFzUWFxcHEwS2RHZUJQRllyU0hSNW02MklraHVTd2JCSm5PMXVrQVVDYlYwTnlSVmltaDlZWitFNUpncng0RGwrZ3h5Q1ZwRnR5VVlraXExK3FGbEVIU21xcVd1a3lEM1RGS3BhdHlEUGduSmlYVGpIZ3dsU0FYQ0UwUXB5azFJVHFwcUFrNTBNeVJWU3pQSHdVMjJBd2cyRVRFRFFPSU1jaE9TSXFqRUFVQ1dHcit1NVF5UzQ0NDFvVGdBU092NEVldy9wSXhzZEpncG8wZ2JBSno4L2lrdWpNWWIwTnpmUGdSdGp4RGlURlNEMHhzNi81dnprYmJZdHpiS09FZVJwSnJXdFlnenhLY3M1UFQ5WG56OEE5S0RkVUtlM0c2aEFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUF3QUFBQUxDQVlBQUFCTGNHeGZBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFCdFNVUkJWQ2lSalk5YkRvTXdFQU5uRWZkcWVqTEN5VUpQTnYwZ3ZFUkpNOUorclMzYlVGR1R6eFExQXdRbjFNUnZKaUFCODhQL2pwcFY0NzkwTnhTQXNhTU90YzVhcVk0dGpjRWJlWStxMTBxNGREdmNIUXpBMGl1R2RmUUhtTlJYUXpkSHhBSXdSRVFHM3IwSlgvM1dlaVUycE0vM0FBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJRQUFBQVVDQVlBQUFDTmlSME5BQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFGSVNVUkJWRGlOcmRUUFNrSlJFTWZ4NzV5cjF5Q2tibEdnTFlLMnZVd0ZRYmlvWElTdjBWTzRDTXhhUkpDTGdsNG5DSW9pSWlVdXB0YnR6TFJTeWpKSzcyOTMvbjFtY1lZUlJ1UjQzZWE5TUpNRVREc0lBNGNsU29LamsxWGltMVdhKy91aXcrOWtlT09rWkZIWHMyUktibFF4QUFNLzljNzk5cms4amdSclcxWlVUK0UzNkllMDlocHkzVis0Q1RHQXVjTU5XL2tDMXRkc2Rrd01BQjhRMWJhc09BQXRTM0ZjckIvMUZPcTdOaFZVU3hhSnNqZ3BDS0E5eklreWt3WUdJRmxtWFpBd25SWm9TczVaNXZkKysyK2MwKy9OUFJHSWtxUUtldWltaFltaUxnaUowd0o5aHRocG5sWmFZUGhLMDFVT0pBbmhZVkxNSzNINVFwNGR3RTVEN2h5MHg4VkUwVnllVy9nMGJXN2hlcHdQRWtVbDRhcDhKRDBZbW9kbm14YTBQY3MrSVBvTHBzb0xiOXhVTHFVektQRFR4V3JKb294blFaVDhTQ2prcVhJcVQ4Tm5IL2x3ZXc4S0xwK2tBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBNEFBQUFPQ0FZQUFBQWZTQzNSQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBQ3BTVVJCVkNpUmZWTExGWVJBQ0V1Mk1lbE1yRXluTXZaZ1VCeDU1akkvRWdJTTBDQWlMRTdzRVdGZFRFZnlRdHExOXptTzArV3FkU1BwRXRvQlpOWUR3QUJ3MUF3UEZBY2RqUGtvTlVoeHhsTDJnNlJ6cXMrS3JZb0RBRWltT0M1aXRmY0ZrcnlJYXRBQ1lOUDdXbUtIQ0M3eHMzR2EyVFV2TmN1ci9Uem5mQUhncDVxNnVoS0daM051bEt6ZUJ0eE8zakhsbTcyeVY0dGZxcUhWc3I1T2tBM1pwcnBHZnIrS1A1ZUY0WmRTdzByVkFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJnQUFBQVpDQVlBQUFBcksrNWRBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFHWFNVUkJWRWlKclZhN1NnVXhFRDFaQWxldUZ2ZFhiQVhSd2ovUlFoQXJTMEVzL0F4cnJTd1VmOEJLQ3d2QnhzSktzTFFWMmMzTVdPUmhrcHZyUGdQTG5zMXV6c2xKSmpPckFPRDlRYllZT0RVMWRpdUZPVE1nQkFnRExQWU9CcGd0VGk0Qm1BQkk2Qk5qOENhQ3E1MURkYUZlYm1WemZZRkhhakF6RFVDMUpTZEhLcFFTSjVqK1JQeUV3ck1Wdk5Sckd6Z25nMW56QTVnYVlPTUdVa1JJR1RrVnNLU2lyaDFvS093WlIwNk5GZWhGdk9xZDJHWFRRcGhUazVGSGRwZUV1b282ckprY01mVWc3akVCN1dlY2tIZkJIWjNwWWxSMEpPNGlxb01hcGNxbGpSemlSc2VkUlpHTXJLK29IaFFoUGR4bzloKzBoTnZLZUc4UjFSZ2I3eTF1bGgwVWlNZUk2cVNqNVdBTmNXTlBjc3N5alJIVlBvOG5nNmJJUmJHREV2RVVhY0x1Z1NzV1UrYWZFQnlTNzhHSUU3dTBiMklyenYrNWFLQWJTS2hvcUtqQkowZkxsTmlsQXM1RE9zTXhPUUJVYkhDbmZKSE9oVExSdUc2VWNLRng5ZldCRTBONFVvaCtUZktUdmNwTmhFdE5CRWZLUDl5ZnlYSDlqVzB4V0pCQitOL3gwUkJtVzRpZXZDbUZWOFc0M3I5Uno3OW9IbXRSNmxtTllRQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCUUFBQUFVQ0FZQUFBQ05pUjBOQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBRXVTVVJCVkRpTnJkVExUZ0l4Rk1ieC96bEZRQWdaSmw0U2NPSGorUW91Tk9sSzM4VUhjbVVrMFdpTUFTVEQzYUd0Q3dJTFJyek1USmR0K3V0Snp0Y2o3Rm5ocG5XRXBCR3BhVUtvWWdnNFNaSFZESE9ROERrWmlNWHYzcE1NZEJ2RkxOMFo2bXY3SGdQQWl3TjVGVHQ1M3dzRzIraWlkSDZFTWlYNW9Wd3ZlaGt3RjdhdDFuK0lYVHdDNkJwcnQzTmpBS3B4c0kzdUZxUzY2dWJHdGlpZFlLbWJjQm5GR0hkYUdBUUlsYURVbDFFcEdBQ21yV2lsV1pxbnZxYVlYL0wyWHhPWERYY3gwRXRhTG1oVzh4STlyMmdsS1kwVGx5akgwMkZwb0RzY3FGeVFvdUd0TUNZdUVUc2FLWUJjelY4UU15bkFlZHp5R1RaL0djQ05lM2pOMHlCUHJmRWdsZ1hzenNNN0RQZjFjMVRqdjFGbUN1TW5zY3cyVzkrR2VqMjFGeWVvYWUySDZJc2Q5M2VQdmdBRHlXanoxUlp6WlFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUE0QUFBQU5DQVlBQUFDWjNGOS9BQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFCc1NVUkJWQ2lSeFpITERZQXdERU5mRUhzUk5tc25hNW5NWEFDVnFCeW9oUEROVnA3eVExTFNleFdUSkFZMGpVQ2ZnRFg0REt5M3BMTjRPbklQdnJSRkVTeE5rVXZ5SGlSSjhhcm5pUDdnTC8zempqekFaWXZKY1JBUGNRVXdzM29HYzRBU3NIUTZMTUJHODk4ZFh3ZXRkWkErUWhvQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJnQUFBQVpDQVlBQUFBcksrNWRBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFHd1NVUkJWRWlKdFpXOWFoMHhFSVUvN1JVWVh3aWtjZTFuY0djQ0FSZHA4d3FwMGdWWEtlM0NSUjdEa0M0R2wza0RWM1lSU0pFbXRjRmxtZ1JmNSs3dXpLVFluN3QvV21raEZvZ1ZLK2tjblpremtnT3c3eGV2TUR1ajNKeVErVFVZcUlJWm1OWmpuZmczbUsrNlVSWS9NZjNpM2w1L2NuYno3b2dYaDdkSXZvZjhCUzFBU3RDeXV3blUra1FxMDBTcWdJRmxvSExwMlQrNFFJczl5a2NvTnlCNWYzTUl0UGRmSjVRNGNLdjNIcjkrUS82bkJ0L1dwMjgyU0Jpb3UyWnkzc0NCUjJXTmJLRXNxdkRFVHBkS1dvZk9ZMUlEaDhCbG5qUzBwdjU2VkVHR01tT2dNZ0lLa2ZvcUlWTExtcEcvaEhTa1FOTTNKSzNwelB2V3g0MkNwT1Nsay9wZGVHYVN0NFIwTVBadGhTYmJNSktMQVlidkp6aWlKQmllTUdsZlFkdlRiUmpMaGQ5Sml0ZzA2UjRhays1Y3RDUjV5YVF5cklNWTZISlhSV3k2d0ZXek5uMm1lNmh6bTNiNi83cUh6QUNhSE13OGgwdGQxUUVIeUNpZUhpb1hUUlRieUFBUnBTbzk4SXBBNVN0V3ZkUDlvbXVBQXZVeFJUcHVtbkgvNnlPUzMrRld1MXZWRWxWMDV5YWJmWER0OFBQeEtmbnYxMmp4c24zaEpHRERKaFFtbGVweCswRm1WKzU4OCswZkdrNXVwb05aa3JjQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJRQUFBQVVDQVlBQUFDTmlSME5BQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFGQVNVUkJWRGlOcmRUZlNnSkJGTWZ4Nzh5dTdvYUVibEdnWFlnaDJBUDRUcjFDM2MxRjBidjBFcjJERnlVVlNFVVJvUkpMV3JhZW1TNWlxZnhINnY3dVpnN3ptWUU1TTRwNXVUcmV4Z3VLaUJTQVBMN25HRXVDNzRZZ01mV2doekoyY3BtYWd1N09JZ2FqUFpRRWN6Y0RzQ0lFK1NmcTVtVSsyRFlWbkpRWFFsTkhjbjBPVGpycFVLK0ZBVGkxeGJYWi93dDJUR2tsTEkxSVJOdFVmc0F4bFpXeE5FN0tYSmpRbzNVVW9kVHUyaUJBU1R0TkxpeG1nZ0VrbERSV0NwbUJTZ0tOOGhiMzI1TFJLSmx1N2pYQkpGdlE2dmZNTkl2VmhEYk9ETXk3V05PdjlqTURmYituYVI0bWFQdThOdVpjVE0yOGZqKzl4dWtqeXIydGpGa3NHLzREL1A1dHhPOWd2ZVV2eU1maWpXNnBtUStZL0EvZHVjZk5aUldSNkY5WU1oN3dHZHpUTk1OMGFuWlR0NDRpY3VFT3lPYk11dllHUUplRzZVNld2Z0FjVjIzeisySDdsZ0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBUUNBWUFBQUFmOC85aEFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQURaU1VSQlZEaU50WkN4RGNKUUVFT2ZFUU5BVDhFR1ZOUUpEV0lMVmdDeFFEWmdBcVQwU0t3UVVsSENDSXdBRXh4RjdrdGZVVDRRSVZ4OStaL3RPOE0vWVdhNW1aVy9HSlRXNEp5YTBSdHg0YzhIc0FkcVNmbTN5VVZrZ0psdGZKT3lQVHRJSlVzcUlub0UzSUI3cjJUblNqT3JVcHBobERvRjduR3lsemZ6OUU2RUU2YkFtcWF3V0p4SkdnTjFhZ3UxQmNDVzV1Yk12MnBKNGJSTTBpSzFEV1oyOXJhdkVWZUZYcnlqWkIreFNkWGkrcGtrakR0TjRnNVdiL1JQU1JjWDFZR1VWTWpGRStBQUxJRlRTendIanBKMklaMVBaZmJCQ3dJSXJseXExTW02QUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQmdBQUFBWkNBWUFBQUFySys1ZEFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUlDU1VSQlZFaUpwWmF0anRWQUZNZC8wd3paNUc1SWdJUUh3WktRckNDOEFXK0FJeWdFQW9QZ0ZRaUd0U0JBNGRFZ2NCZ1NORmdJZ2R4MjU4dzVpSDdOMTkxN2x4M1RkdG81NS84MWJSM0EyL0RoZHNROTNkcHc0dWcyRVJBTU5TTmlSRE1pRUFGZHJ0ZDdDa1JqdXNZRzRsZk1Ycis0ZXYrNWUzbjI3dGFON3ZySDN1Um9hNEVCUWN5UXBJaWtUYWI1K2I1aXlGUmNwbVpxaHVFUTVaWGZ1T05udmNuUkh4dllXaUNZRXRDc1NEUkRwdUtTTUJqUHllZVdKbzdPdVFlKzQ4cmR2OWF6dFVCdmdsQ2dYeGFTTkV1T1JXTkpaRk4xZUxHNDZSSE9MQklxZEN2S3ZGbkJySnFiMXloZXNGV1dDdDI4c0kxeURrTWxYUUxJeDhsUW1SNlNna0c1b0VRNUE4a0JyR0h3QzFKWW11d3pNZk9ra2k1bjYyT0MvTUx5SE1EV1p3K1dKbDVTbnRHRHk4alRZRnNDOGVsRmhiS3hvRUs1Sjg2K1NrOXBXRFAvVkg3dDJ1MCtOVEdYYVgvR0QyRzdPMFVIbXBqNjFXSzdlUERmOGl4TkdpL0RrUUZ0ZVE3SStCcm5PdW96V3grVDRoWEt4b0lXeXRTdk1zNit6RzlsNGprWlArU1ZYZTJEaTVxNGk2MHlqbXdmbEx0M1g4WXJadE9jc1k2dVI3N1BIYVZoK015cWpIRTZQN01zaXdOMEF1OE5oellrRUhKMjV4NGJ4UUh0dnYzNjhYZ2dmc0k1eXNpbUg2SnlRNVpBbXNQWlF6ZWYzL3Q1K3VnMzRjNmc4ZHI0VndGaXVrWlFSMGtVSmRqNGZ5UW9zVlhidVMvYTZadHc4OG5uZitIQUdhVERGWXlEQUFBQUFFbEZUa1N1UW1DQ1wiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTkxZTYzYzgmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTkxZTYzYzgmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxOTFlNjNjOFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxOTFlNjNjOCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxOTFlNjNjOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxOTFlNjNjOCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE5MWU2M2M4JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzE5MWU2M2M4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvaW5IYW5kL2luSGFuZEFwcGx5L2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE5MWU2M2M4JnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE5MWU2M2M4JnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==