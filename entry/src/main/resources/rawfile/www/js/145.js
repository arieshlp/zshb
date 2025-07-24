(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[145],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/industrySource.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/industrySource.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_pollution_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/pollution_source */ "./src/api/pollution_source.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "industrySource",
  data: function data() {
    return {
      activeIndex: 0,
      name: "",
      gasTDSums: [],
      //废气污染源排放量
      waterTDSums: [],
      //废水污染源排放量
      wmaterials: [],
      //主要原辅材料
      wconsume: [],
      //主要能源消耗
      waterTDTrfas: [],
      //废水治理设施
      prodProcesses: []
    };
  },
  mounted: function mounted() {
    this.name = this.$route.query.name;
    this.loadData();
  },
  methods: {
    loadData: function loadData() {
      var _this = this;

      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_1__["sgspsDetailGyy"])({
        baseId: this.$route.query.id
      }).then(function (res) {
        var rdata = res.data;
        _this.gasTDSums = rdata.gasTDSums;
        _this.waterTDSums = rdata.waterTDSums;
        _this.prodProcesses = rdata.prodProcesses;
        _this.wmaterials = rdata.wmaterials;
        _this.wconsume = rdata.wconsume;
        _this.waterTDTrfas = rdata.waterTDTrfas;
      });
    },
    changeTab: function changeTab(index) {
      this.activeIndex = index;
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/industrySource.vue?vue&type=template&id=3298a148&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/industrySource.vue?vue&type=template&id=3298a148&scoped=true& ***!
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
    {
      staticStyle: {
        height: "calc(100vh)",
        "overflow-y": "auto",
        background: "#fff",
      },
    },
    [
      _c("van-nav-bar", {
        attrs: { title: _vm.name, "left-arrow": "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
      }),
      _c(
        "div",
        { staticClass: "company-wrapper" },
        [
          _c("div", { staticClass: "company-title" }, [
            _vm._v(" 产品信息(全厂合计) "),
          ]),
          _c("div", { staticClass: "company-tab-wrapper" }, [
            _c(
              "div",
              {
                class: [
                  "company-tab-item",
                  _vm.activeIndex === 0 ? "active" : "",
                ],
                on: {
                  click: function ($event) {
                    return _vm.changeTab(0)
                  },
                },
              },
              [_vm._v(" 废水污染源排放量 ")]
            ),
            _c(
              "div",
              {
                class: [
                  "company-tab-item",
                  _vm.activeIndex === 1 ? "active" : "",
                ],
                on: {
                  click: function ($event) {
                    return _vm.changeTab(1)
                  },
                },
              },
              [_vm._v(" 废气污染源排放量 ")]
            ),
          ]),
          _vm._l(_vm.waterTDSums, function (item) {
            return _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.activeIndex === 0,
                    expression: "activeIndex===0",
                  },
                ],
                staticClass: "company-box",
              },
              [
                _c("div", { staticClass: "half_width" }, [
                  _c("span", [_vm._v("治理设施数(套)")]),
                  _c("span", [_vm._v(_vm._s(item.sewageGovernNum))]),
                ]),
                _c("div", { staticClass: "half_width" }, [
                  _c("span", [_vm._v("设计处理能力（万立方米/日）")]),
                  _c("span", [_vm._v(_vm._s(item.processCapacity))]),
                ]),
                _c("div", { staticClass: "half_width" }, [
                  _c("span", [_vm._v("年实际处理水量（万立方米）")]),
                  _c("span", [_vm._v(_vm._s(item.actualDealVolume))]),
                ]),
                _c("div", { staticClass: "half_width" }, [
                  _c("span", [_vm._v("取水量（万立方米/日）")]),
                  _c("span", [_vm._v(_vm._s(item.waterGet))]),
                ]),
                _c("div", { staticClass: "three_width" }, [
                  _c("span", [_vm._v("化学需氧量(吨)")]),
                  _c("span", [_vm._v("排 " + _vm._s(item.codDischarge))]),
                  _c("span", [_vm._v("产 " + _vm._s(item.codGenCount))]),
                ]),
                _c("div", { staticClass: "three_width" }, [
                  _c("span", [_vm._v("氨氮(吨)")]),
                  _c("span", [_vm._v("排 " + _vm._s(item.nh3nCount))]),
                  _c("span", [_vm._v("产 " + _vm._s(item.nh3nDischargeCount))]),
                ]),
                _c("div", { staticClass: "three_width" }, [
                  _c("span", [_vm._v("总氮(吨)")]),
                  _c("span", [_vm._v("排 " + _vm._s(item.tnCount))]),
                  _c("span", [_vm._v("产 " + _vm._s(item.tnDischarge))]),
                ]),
                _c("div", { staticClass: "three_width" }, [
                  _c("span", [_vm._v("总磷(吨)")]),
                  _c("span", [_vm._v("排 " + _vm._s(item.tpCount))]),
                  _c("span", [_vm._v("产 " + _vm._s(item.tpDischarge))]),
                ]),
                _c("div", { staticClass: "three_width" }, [
                  _c("span", [_vm._v("石油类(千克)")]),
                  _c("span", [_vm._v("排 " + _vm._s(item.oilCount))]),
                  _c("span", [_vm._v("产 " + _vm._s(item.oilDischarge) + "1")]),
                ]),
                _c("div", { staticClass: "three_width" }, [
                  _c("span", [_vm._v("挥发酚(千克)")]),
                  _c("span", [_vm._v("排 " + _vm._s(item.phenolCount))]),
                  _c("span", [
                    _vm._v("产 " + _vm._s(item.phenolDischarge) + "1"),
                  ]),
                ]),
                _c("div", { staticClass: "three_width" }, [
                  _c("span", [_vm._v("氰化物(千克)")]),
                  _c("span", [_vm._v("排 " + _vm._s(item.cyanideCount))]),
                  _c("span", [_vm._v("产 " + _vm._s(item.cyanideDischarge))]),
                ]),
                _c("div", { staticClass: "three_width" }, [
                  _c("span", [_vm._v("总砷(千克)")]),
                  _c("span", [_vm._v("排 " + _vm._s(item.tasCount))]),
                  _c("span", [_vm._v("产 " + _vm._s(item.tasDischarge))]),
                ]),
                _c("div", { staticClass: "three_width" }, [
                  _c("span", [_vm._v("总铅(千克)")]),
                  _c("span", [_vm._v("排 " + _vm._s(item.tpbCount))]),
                  _c("span", [_vm._v("产 " + _vm._s(item.tpbDischarge))]),
                ]),
                _c("div", { staticClass: "three_width" }, [
                  _c("span", [_vm._v("总镉(千克)")]),
                  _c("span", [_vm._v("排 " + _vm._s(item.tcdCount))]),
                  _c("span", [_vm._v("产 " + _vm._s(item.tcdDischarge))]),
                ]),
                _c("div", { staticClass: "three_width" }, [
                  _c("span", [_vm._v("总铬(千克)")]),
                  _c("span", [_vm._v("排 " + _vm._s(item.tcrCount))]),
                  _c("span", [_vm._v("产 " + _vm._s(item.tcrDischarge))]),
                ]),
                _c("div", { staticClass: "three_width" }, [
                  _c("span", [_vm._v("六价铬(千克)")]),
                  _c("span", [_vm._v("排 " + _vm._s(item.cr6Count))]),
                  _c("span", [_vm._v("产 " + _vm._s(item.cr6Discharge))]),
                ]),
                _c("div", { staticClass: "three_width" }, [
                  _c("span", [_vm._v("总汞(千克)")]),
                  _c("span", [_vm._v("排 " + _vm._s(item.thgCount))]),
                  _c("span", [_vm._v("产 " + _vm._s(item.thgDischarge))]),
                ]),
              ]
            )
          }),
          _vm._l(_vm.gasTDSums, function (item) {
            return _c(
              "div",
              {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.activeIndex === 1,
                    expression: "activeIndex===1",
                  },
                ],
                staticClass: "company-box",
              },
              [
                _c("div", { staticClass: "three_width" }, [
                  _c("span", [_vm._v("脱硫治理设施数(套)")]),
                  _c("span", [_vm._v(_vm._s(item.desulfDeviceQty))]),
                ]),
                _c("div", { staticClass: "three_width" }, [
                  _c("span", [_vm._v("脱硝治理设施(套)")]),
                  _c("span", [_vm._v(_vm._s(item.denoxDeviceQty))]),
                ]),
                _c("div", { staticClass: "three_width" }, [
                  _c("span", [_vm._v("除尘治理设施(套)")]),
                  _c("span", [_vm._v(_vm._s(item.dustRemovalQty))]),
                ]),
                _c("div", { staticClass: "three_width" }, [
                  _c("span", [_vm._v("二氧化硫(吨)")]),
                  _c("span", [_vm._v("排 " + _vm._s(item.so2DischargeTotal))]),
                  _c("span", [_vm._v("产 " + _vm._s(item.so2CountTotal))]),
                ]),
                _c("div", { staticClass: "three_width" }, [
                  _c("span", [_vm._v("氮氧化物(吨)")]),
                  _c("span", [_vm._v("排 " + _vm._s(item.noxDischargeTotal))]),
                  _c("span", [_vm._v("产 " + _vm._s(item.noxCountTotal))]),
                ]),
                _c("div", { staticClass: "three_width" }, [
                  _c("span", [_vm._v("颗粒物(吨)")]),
                  _c("span", [_vm._v("排 " + _vm._s(item.pmDischargeTotal))]),
                  _c("span", [_vm._v("产 " + _vm._s(item.pmCountTotal))]),
                ]),
                _c("div", { staticClass: "three_width" }, [
                  _c("span", [_vm._v("挥发性有机物(千克)")]),
                  _c("span", [_vm._v("排 " + _vm._s(item.vocDischargeTotal))]),
                  _c("span", [_vm._v("产 " + _vm._s(item.vocCountTotal))]),
                ]),
                _c("div", { staticClass: "three_width" }, [
                  _c("span", [_vm._v("氨(千克)")]),
                  _c("span", [_vm._v("排 " + _vm._s(item.nh3DischargeTotal))]),
                ]),
                _c("div", { staticClass: "three_width" }, [
                  _c("span", [_vm._v("废气砷(千克)")]),
                  _c("span", [_vm._v("排 " + _vm._s(item.asDischargeTotal))]),
                  _c("span", [_vm._v("产 " + _vm._s(item.asCountTotal))]),
                ]),
                _c("div", { staticClass: "three_width" }, [
                  _c("span", [_vm._v("废气铅(千克)")]),
                  _c("span", [_vm._v("排 " + _vm._s(item.pbDischargeTotal))]),
                  _c("span", [_vm._v("产 " + _vm._s(item.pbCountTotal))]),
                ]),
                _c("div", { staticClass: "three_width" }, [
                  _c("span", [_vm._v("废气镉(千克)")]),
                  _c("span", [_vm._v("排 " + _vm._s(item.cdDischargeTotal))]),
                  _c("span", [_vm._v("产 " + _vm._s(item.cdCountTotal))]),
                ]),
                _c("div", { staticClass: "three_width" }, [
                  _c("span", [_vm._v("废气铬(千克)")]),
                  _c("span", [_vm._v("排 " + _vm._s(item.crCountTotal))]),
                  _c("span", [_vm._v("产 " + _vm._s(item.desulfDeviceQty))]),
                ]),
                _c("div", { staticClass: "three_width" }, [
                  _c("span", [_vm._v("废气汞(千克)")]),
                  _c("span", [_vm._v("排 " + _vm._s(item.hgDischargeTotal))]),
                  _c("span", [_vm._v("产 " + _vm._s(item.hgCountTotal))]),
                ]),
              ]
            )
          }),
        ],
        2
      ),
      _vm._l(_vm.prodProcesses, function (item, inx) {
        return _c("div", { staticClass: "company-wrapper" }, [
          _c("div", { staticClass: "company-title" }, [
            _vm._v(" 产品工艺 " + _vm._s(inx + 1) + " "),
          ]),
          _c("div", { staticClass: "company-item fs" }, [
            _c("span", [_vm._v("产品名称")]),
            _c("span", [_vm._v(_vm._s(item.mainProdName))]),
          ]),
          _c("div", { staticClass: "company-item fs" }, [
            _c("span", [_vm._v("生产工艺名称")]),
            _c("span", [_vm._v(_vm._s(item.mainCraftName))]),
          ]),
          _c("div", { staticClass: "company-box" }, [
            _c("div", { staticClass: "half_width" }, [
              _c("span", [_vm._v("生产能力(吨)")]),
              _c("span", [_vm._v(_vm._s(item.mainProdAbility))]),
            ]),
            _c("div", { staticClass: "half_width" }, [
              _c("span", [_vm._v("实际产量(吨)")]),
              _c("span", [_vm._v(_vm._s(item.mainProdYield))]),
            ]),
          ]),
        ])
      }),
      _vm._l(_vm.wmaterials, function (item, i) {
        return _c("div", { staticClass: "company-wrapper" }, [
          _c("div", { staticClass: "company-title" }, [
            _vm._v(" 主要原辅材料" + _vm._s(i + 1) + " "),
          ]),
          _c("div", { staticClass: "company-box" }, [
            _c("div", { staticClass: "half_width" }, [
              _c("span", [_vm._v("原辅材料/能源名称")]),
              _c("span", [_vm._v(_vm._s(item.mainMaterial))]),
            ]),
            _c("div", { staticClass: "half_width" }, [
              _c("span", [_vm._v("使用量(吨)")]),
              _c("span", [_vm._v(_vm._s(item.mainMaterialUse))]),
            ]),
          ]),
        ])
      }),
      _vm._l(_vm.wconsume, function (item, index) {
        return _c("div", { staticClass: "company-wrapper" }, [
          _c("div", { staticClass: "company-title" }, [
            _vm._v(" 主要能源消耗 " + _vm._s(index + 1) + " "),
          ]),
          _c("div", { staticClass: "company-box" }, [
            _c("div", { staticClass: "three_width" }, [
              _c("span", [_vm._v("原辅材料/能源名称")]),
              _c("span", [_vm._v(_vm._s(item.mainEnergyName))]),
            ]),
            _c("div", { staticClass: "three_width" }, [
              _c("span", [_vm._v("使用量(吨)")]),
              _c("span", [_vm._v(_vm._s(item.mainEnergyActualuse))]),
            ]),
            _c("div", { staticClass: "three_width" }, [
              _c("span", [_vm._v("用作原辅材料量(吨)")]),
              _c("span", [_vm._v(_vm._s(item.mainEnergyOriuse))]),
            ]),
          ]),
        ])
      }),
      _vm._l(_vm.waterTDTrfas, function (item, indx) {
        return _c("div", { staticClass: "company-wrapper" }, [
          _c("div", { staticClass: "company-title" }, [
            _vm._v(" 废水治理设施 "),
          ]),
          _c("div", { staticClass: "company-box" }, [
            _c("div", { staticClass: "half_width" }, [
              _c("span", [_vm._v("废水类型名称")]),
              _c("span", [_vm._v(_vm._s(item.sewageTypeName))]),
            ]),
            _c("div", { staticClass: "half_width" }, [
              _c("span", [_vm._v("处理方法名称")]),
              _c("span", [_vm._v(_vm._s(item.dealMethodName))]),
            ]),
            _c("div", { staticClass: "three_width" }, [
              _c("span", [_vm._v("年运行小时(h)")]),
              _c("span", [_vm._v(_vm._s(item.runtimeY))]),
            ]),
            _c("div", { staticClass: "three_width" }, [
              _c("span", [_vm._v("年实际处理水量(吨)")]),
              _c("span", [_vm._v(_vm._s(item.actualDealVolume))]),
            ]),
            _c("div", { staticClass: "three_width" }, [
              _c("span", [_vm._v("处理后废水去向")]),
              _c("span", [_vm._v(_vm._s(item.outputDirection))]),
            ]),
          ]),
        ])
      }),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/industrySource.vue?vue&type=style&index=0&id=3298a148&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/industrySource.vue?vue&type=style&index=0&id=3298a148&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".company-wrapper[data-v-3298a148] {\n  border-radius: 10px;\n  background: linear-gradient(0deg, rgba(68, 123, 252, 0) 70%, rgba(68, 123, 252, 0.06) 100%), white;\n  border: 1px solid white;\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);\n  margin-top: 6px;\n}\n.company-wrapper .company-title[data-v-3298a148] {\n  padding: 10px 10px 8px 15px;\n  font-size: 14px;\n  font-weight: bold;\n  line-height: 20.27px;\n  color: #447bfc;\n  text-align: left;\n  vertical-align: top;\n}\n.company-wrapper .company-tab-wrapper[data-v-3298a148] {\n  display: flex;\n  margin: 0 10px;\n}\n.company-wrapper .company-tab-wrapper .company-tab-item[data-v-3298a148] {\n  width: 50%;\n  padding-bottom: 5px;\n  text-align: center;\n  border-bottom: 2px;\n}\n.company-wrapper .company-tab-wrapper .active[data-v-3298a148] {\n  color: #3982f7;\n  border-bottom: 2px solid #3982f7;\n}\n.company-wrapper .company-item[data-v-3298a148] {\n  margin: 5px 30px;\n  font-size: 12px;\n}\n.company-wrapper .company-item span[data-v-3298a148]:first-child {\n  color: #666;\n}\n.company-wrapper .company-item span[data-v-3298a148]:nth-child(2), .company-wrapper .company-item span[data-v-3298a148]:nth-child(3) {\n  width: 60%;\n  text-align: right;\n  color: #333;\n  font-weight: bold;\n}\n.company-wrapper .company-box[data-v-3298a148] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.company-wrapper .company-box .half_width[data-v-3298a148], .company-wrapper .company-box .three_width[data-v-3298a148] {\n  display: flex;\n  flex-direction: column;\n  margin: 5px 0;\n  width: 50%;\n  text-align: center;\n  font-size: 12px;\n  line-height: 20px;\n}\n.company-wrapper .company-box .half_width span[data-v-3298a148]:first-child, .company-wrapper .company-box .three_width span[data-v-3298a148]:first-child {\n  color: #666;\n}\n.company-wrapper .company-box .half_width span[data-v-3298a148]:nth-child(2), .company-wrapper .company-box .half_width span[data-v-3298a148]:nth-child(3), .company-wrapper .company-box .three_width span[data-v-3298a148]:nth-child(2), .company-wrapper .company-box .three_width span[data-v-3298a148]:nth-child(3) {\n  color: #333;\n  font-weight: bold;\n}\n.company-wrapper .company-box .half_width[data-v-3298a148] {\n  width: 50%;\n}\n.company-wrapper .company-box .three_width[data-v-3298a148] {\n  width: 33%;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/industrySource.vue?vue&type=style&index=0&id=3298a148&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/industrySource.vue?vue&type=style&index=0&id=3298a148&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./industrySource.vue?vue&type=style&index=0&id=3298a148&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/industrySource.vue?vue&type=style&index=0&id=3298a148&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("c5eb08b8", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/views/pollution/detail/industrySource.vue":
/*!*******************************************************!*\
  !*** ./src/views/pollution/detail/industrySource.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _industrySource_vue_vue_type_template_id_3298a148_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./industrySource.vue?vue&type=template&id=3298a148&scoped=true& */ "./src/views/pollution/detail/industrySource.vue?vue&type=template&id=3298a148&scoped=true&");
/* harmony import */ var _industrySource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./industrySource.vue?vue&type=script&lang=js& */ "./src/views/pollution/detail/industrySource.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _industrySource_vue_vue_type_style_index_0_id_3298a148_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./industrySource.vue?vue&type=style&index=0&id=3298a148&lang=scss&scoped=true& */ "./src/views/pollution/detail/industrySource.vue?vue&type=style&index=0&id=3298a148&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _industrySource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _industrySource_vue_vue_type_template_id_3298a148_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _industrySource_vue_vue_type_template_id_3298a148_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3298a148",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/pollution/detail/industrySource.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/pollution/detail/industrySource.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./src/views/pollution/detail/industrySource.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_industrySource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./industrySource.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/industrySource.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_industrySource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/pollution/detail/industrySource.vue?vue&type=style&index=0&id=3298a148&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./src/views/pollution/detail/industrySource.vue?vue&type=style&index=0&id=3298a148&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_industrySource_vue_vue_type_style_index_0_id_3298a148_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./industrySource.vue?vue&type=style&index=0&id=3298a148&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/industrySource.vue?vue&type=style&index=0&id=3298a148&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_industrySource_vue_vue_type_style_index_0_id_3298a148_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_industrySource_vue_vue_type_style_index_0_id_3298a148_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_industrySource_vue_vue_type_style_index_0_id_3298a148_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_industrySource_vue_vue_type_style_index_0_id_3298a148_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/pollution/detail/industrySource.vue?vue&type=template&id=3298a148&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./src/views/pollution/detail/industrySource.vue?vue&type=template&id=3298a148&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_industrySource_vue_vue_type_template_id_3298a148_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./industrySource.vue?vue&type=template&id=3298a148&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/industrySource.vue?vue&type=template&id=3298a148&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_industrySource_vue_vue_type_template_id_3298a148_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_industrySource_vue_vue_type_template_id_3298a148_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvaW5kdXN0cnlTb3VyY2UudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2luZHVzdHJ5U291cmNlLnZ1ZT84MDQ2Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2luZHVzdHJ5U291cmNlLnZ1ZT9iOTIwIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2luZHVzdHJ5U291cmNlLnZ1ZT85NWY4Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2luZHVzdHJ5U291cmNlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9pbmR1c3RyeVNvdXJjZS52dWU/MzM5NyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9pbmR1c3RyeVNvdXJjZS52dWU/YTQwMCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9pbmR1c3RyeVNvdXJjZS52dWU/MzRhMSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOFFBO0FBQ0E7QUFDQSx3QkFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBLG9CQURBO0FBRUEsY0FGQTtBQUdBLG1CQUhBO0FBR0E7QUFDQSxxQkFKQTtBQUlBO0FBQ0Esb0JBTEE7QUFLQTtBQUNBLGtCQU5BO0FBTUE7QUFDQSxzQkFQQTtBQU9BO0FBQ0E7QUFSQTtBQVVBLEdBYkE7QUFjQSxTQWRBLHFCQWNBO0FBQ0E7QUFDQTtBQUNBLEdBakJBO0FBa0JBO0FBQ0EsWUFEQSxzQkFDQTtBQUFBOztBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FSQTtBQVNBLEtBWEE7QUFZQSxhQVpBLHFCQVlBLEtBWkEsRUFZQTtBQUNBO0FBQ0E7QUFkQTtBQWxCQSxHOzs7Ozs7Ozs7Ozs7QUMvUUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBLGdCQUFnQixvQ0FBb0M7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQTtBQUNBLFNBQVMsaUNBQWlDO0FBQzFDO0FBQ0EscUJBQXFCLCtCQUErQjtBQUNwRDtBQUNBO0FBQ0EscUJBQXFCLHFDQUFxQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQixpQkFBaUI7QUFDakIsZUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25CO0FBQ0E7QUFDQSxlQUFlO0FBQ2Y7QUFDQSwyQkFBMkIsNEJBQTRCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw0QkFBNEI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDRCQUE0QjtBQUN2RDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNEJBQTRCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw2QkFBNkI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNkJBQTZCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDZCQUE2QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw2QkFBNkI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNkJBQTZCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDZCQUE2QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNkJBQTZCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDZCQUE2QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw2QkFBNkI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNkJBQTZCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDZCQUE2QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw2QkFBNkI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNkJBQTZCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsMkJBQTJCLDZCQUE2QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNkJBQTZCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw2QkFBNkI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDZCQUE2QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw2QkFBNkI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNkJBQTZCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDZCQUE2QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw2QkFBNkI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDZCQUE2QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw2QkFBNkI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNkJBQTZCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDZCQUE2QjtBQUN4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw2QkFBNkI7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLGlDQUFpQztBQUMzRCxxQkFBcUIsK0JBQStCO0FBQ3BEO0FBQ0E7QUFDQSxxQkFBcUIsaUNBQWlDO0FBQ3REO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixpQ0FBaUM7QUFDdEQ7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRCx1QkFBdUIsNEJBQTRCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw0QkFBNEI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLDBCQUEwQixpQ0FBaUM7QUFDM0QscUJBQXFCLCtCQUErQjtBQUNwRDtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRCx1QkFBdUIsNEJBQTRCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw0QkFBNEI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBLDBCQUEwQixpQ0FBaUM7QUFDM0QscUJBQXFCLCtCQUErQjtBQUNwRDtBQUNBO0FBQ0EscUJBQXFCLDZCQUE2QjtBQUNsRCx1QkFBdUIsNkJBQTZCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw2QkFBNkI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDZCQUE2QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsMEJBQTBCLGlDQUFpQztBQUMzRCxxQkFBcUIsK0JBQStCO0FBQ3BEO0FBQ0E7QUFDQSxxQkFBcUIsNkJBQTZCO0FBQ2xELHVCQUF1Qiw0QkFBNEI7QUFDbkQ7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDRCQUE0QjtBQUNuRDtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsNkJBQTZCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw2QkFBNkI7QUFDcEQ7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDZCQUE2QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JWQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDhHQUF5RDtBQUNuRztBQUNBO0FBQ0EsY0FBYyxRQUFTLHNDQUFzQyx3QkFBd0IsdUdBQXVHLDRCQUE0QixpREFBaUQsb0JBQW9CLEdBQUcsb0RBQW9ELGdDQUFnQyxvQkFBb0Isc0JBQXNCLHlCQUF5QixtQkFBbUIscUJBQXFCLHdCQUF3QixHQUFHLDBEQUEwRCxrQkFBa0IsbUJBQW1CLEdBQUcsNEVBQTRFLGVBQWUsd0JBQXdCLHVCQUF1Qix1QkFBdUIsR0FBRyxrRUFBa0UsbUJBQW1CLHFDQUFxQyxHQUFHLG1EQUFtRCxxQkFBcUIsb0JBQW9CLEdBQUcsb0VBQW9FLGdCQUFnQixHQUFHLHdJQUF3SSxlQUFlLHNCQUFzQixnQkFBZ0Isc0JBQXNCLEdBQUcsa0RBQWtELGtCQUFrQixvQkFBb0IsR0FBRywySEFBMkgsa0JBQWtCLDJCQUEyQixrQkFBa0IsZUFBZSx1QkFBdUIsb0JBQW9CLHNCQUFzQixHQUFHLDZKQUE2SixnQkFBZ0IsR0FBRyw0VEFBNFQsZ0JBQWdCLHNCQUFzQixHQUFHLDhEQUE4RCxlQUFlLEdBQUcsK0RBQStELGVBQWUsR0FBRztBQUN2eUU7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7O0FBRUE7QUFDQSxjQUFjLG1CQUFPLENBQUMscTBCQUFrZTtBQUN4ZjtBQUNBLDRDQUE0QyxRQUFTO0FBQ3JEO0FBQ0E7QUFDQSxVQUFVLG1CQUFPLENBQUMsZ0lBQW1FO0FBQ3JGLDhDQUE4QyxxQ0FBcUM7QUFDbkY7QUFDQSxHQUFHLEtBQVUsRUFBRSxFOzs7Ozs7Ozs7Ozs7QUNYZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXlHO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUduRztBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSxvRkFBTTtBQUNSLEVBQUUscUdBQU07QUFDUixFQUFFLDhHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUFtVCxDQUFnQiwrVUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0F2VTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy8xNDUuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IGNhbGMoMTAwdmgpO292ZXJmbG93LXk6IGF1dG87YmFja2dyb3VuZDogI2ZmZlwiPlxuICAgIDx2YW4tbmF2LWJhclxuICAgICAgICA6dGl0bGU9XCJuYW1lXCJcbiAgICAgICAgbGVmdC1hcnJvd1xuICAgICAgICBAY2xpY2stbGVmdD1cIiRyb3V0ZXIuZ28oLTEpXCJcbiAgICA+XG4gICAgPC92YW4tbmF2LWJhcj5cblxuICAgIDxkaXYgY2xhc3M9XCJjb21wYW55LXdyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb21wYW55LXRpdGxlXCI+XG4gICAgICAgIOS6p+WTgeS/oeaBryjlhajljoLlkIjorqEpXG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImNvbXBhbnktdGFiLXdyYXBwZXJcIj5cbiAgICAgICAgPGRpdiA6Y2xhc3M9XCJbJ2NvbXBhbnktdGFiLWl0ZW0nLGFjdGl2ZUluZGV4PT09MD8gJ2FjdGl2ZSc6JyddXCIgQGNsaWNrPVwiY2hhbmdlVGFiKDApXCI+XG4gICAgICAgICAg5bqf5rC05rGh5p+T5rqQ5o6S5pS+6YePXG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IDpjbGFzcz1cIlsnY29tcGFueS10YWItaXRlbScsYWN0aXZlSW5kZXg9PT0xPyAnYWN0aXZlJzonJ11cIiBAY2xpY2s9XCJjaGFuZ2VUYWIoMSlcIj5cbiAgICAgICAgICDlup/msJTmsaHmn5PmupDmjpLmlL7ph49cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPCEtLeW6n+eJqeaxoeafk+a6kOaOkuaUvumHjy0tPlxuICAgICAgPGRpdiB2LXNob3c9XCJhY3RpdmVJbmRleD09PTBcIiBjbGFzcz1cImNvbXBhbnktYm94XCIgdi1mb3I9XCJpdGVtIGluIHdhdGVyVERTdW1zXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoXCI+XG4gICAgICAgICAgPHNwYW4+5rK755CG6K6+5pa95pWwKOWllyk8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+e3tpdGVtLnNld2FnZUdvdmVybk51bX19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhhbGZfd2lkdGhcIj5cbiAgICAgICAgICA8c3Bhbj7orr7orqHlpITnkIbog73lipvvvIjkuIfnq4vmlrnnsbMv5pel77yJPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPnt7aXRlbS5wcm9jZXNzQ2FwYWNpdHl9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoXCI+XG4gICAgICAgICAgPHNwYW4+5bm05a6e6ZmF5aSE55CG5rC06YeP77yI5LiH56uL5pa557Gz77yJPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPnt7aXRlbS5hY3R1YWxEZWFsVm9sdW1lfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGFsZl93aWR0aFwiPlxuICAgICAgICAgIDxzcGFuPuWPluawtOmHj++8iOS4h+eri+aWueexsy/ml6XvvIk8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+e3tpdGVtLndhdGVyR2V0fX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGhyZWVfd2lkdGhcIj5cbiAgICAgICAgICA8c3Bhbj7ljJblrabpnIDmsKfph48o5ZCoKTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj7mjpIge3tpdGVtLmNvZERpc2NoYXJnZX19PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPuS6pyB7e2l0ZW0uY29kR2VuQ291bnR9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aHJlZV93aWR0aFwiPlxuICAgICAgICAgIDxzcGFuPuawqOawrijlkKgpPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPuaOkiB7e2l0ZW0ubmgzbkNvdW50fX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4+5LqnIHt7aXRlbS5uaDNuRGlzY2hhcmdlQ291bnR9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aHJlZV93aWR0aFwiPlxuICAgICAgICAgIDxzcGFuPuaAu+awrijlkKgpPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPuaOkiB7e2l0ZW0udG5Db3VudH19PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPuS6pyB7e2l0ZW0udG5EaXNjaGFyZ2V9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aHJlZV93aWR0aFwiPlxuICAgICAgICAgIDxzcGFuPuaAu+ejtyjlkKgpPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPuaOkiB7e2l0ZW0udHBDb3VudH19PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPuS6pyB7e2l0ZW0udHBEaXNjaGFyZ2V9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJ0aHJlZV93aWR0aFwiPlxuXHRcdFx0XHQgIDxzcGFuPuefs+ayueexuyjljYPlhYspPC9zcGFuPlxuXHRcdFx0XHQgIDxzcGFuPuaOkiB7e2l0ZW0ub2lsQ291bnR9fTwvc3Bhbj5cblx0XHRcdFx0ICA8c3Bhbj7kuqcge3tpdGVtLm9pbERpc2NoYXJnZX19MTwvc3Bhbj5cblx0XHRcdFx0PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aHJlZV93aWR0aFwiPlxuICAgICAgICAgIDxzcGFuPuaMpeWPkemFmijljYPlhYspPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPuaOkiB7e2l0ZW0ucGhlbm9sQ291bnR9fTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj7kuqcge3tpdGVtLnBoZW5vbERpc2NoYXJnZX19MTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aHJlZV93aWR0aFwiPlxuICAgICAgICAgIDxzcGFuPuawsOWMlueJqSjljYPlhYspPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPuaOkiB7e2l0ZW0uY3lhbmlkZUNvdW50fX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4+5LqnIHt7aXRlbS5jeWFuaWRlRGlzY2hhcmdlfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGhyZWVfd2lkdGhcIj5cbiAgICAgICAgICA8c3Bhbj7mgLvnoLco5Y2D5YWLKTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj7mjpIge3tpdGVtLnRhc0NvdW50fX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4+5LqnIHt7aXRlbS50YXNEaXNjaGFyZ2V9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aHJlZV93aWR0aFwiPlxuICAgICAgICAgIDxzcGFuPuaAu+mThSjljYPlhYspPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPuaOkiB7e2l0ZW0udHBiQ291bnR9fTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj7kuqcge3tpdGVtLnRwYkRpc2NoYXJnZX19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRocmVlX3dpZHRoXCI+XG4gICAgICAgICAgPHNwYW4+5oC76ZWJKOWNg+WFiyk8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+5o6SIHt7aXRlbS50Y2RDb3VudH19PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPuS6pyB7e2l0ZW0udGNkRGlzY2hhcmdlfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGhyZWVfd2lkdGhcIj5cbiAgICAgICAgICA8c3Bhbj7mgLvpk6wo5Y2D5YWLKTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj7mjpIge3tpdGVtLnRjckNvdW50fX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4+5LqnIHt7aXRlbS50Y3JEaXNjaGFyZ2V9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aHJlZV93aWR0aFwiPlxuICAgICAgICAgIDxzcGFuPuWFreS7t+mTrCjljYPlhYspPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPuaOkiB7e2l0ZW0uY3I2Q291bnR9fTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj7kuqcge3tpdGVtLmNyNkRpc2NoYXJnZX19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRocmVlX3dpZHRoXCI+XG4gICAgICAgICAgPHNwYW4+5oC75rGeKOWNg+WFiyk8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+5o6SIHt7aXRlbS50aGdDb3VudH19PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPuS6pyB7e2l0ZW0udGhnRGlzY2hhcmdlfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDwhLS3lup/msJTmsaHmn5PmupDmjpLmlL7ph48tLT5cbiAgICAgIDxkaXYgdi1zaG93PVwiYWN0aXZlSW5kZXg9PT0xXCIgY2xhc3M9XCJjb21wYW55LWJveFwiIHYtZm9yPVwiaXRlbSBpbiBnYXNURFN1bXNcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRocmVlX3dpZHRoXCI+XG4gICAgICAgICAgPHNwYW4+6ISx56Gr5rK755CG6K6+5pa95pWwKOWllyk8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+e3tpdGVtLmRlc3VsZkRldmljZVF0eX19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRocmVlX3dpZHRoXCI+XG4gICAgICAgICAgPHNwYW4+6ISx56Gd5rK755CG6K6+5pa9KOWllyk8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+e3tpdGVtLmRlbm94RGV2aWNlUXR5fX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGhyZWVfd2lkdGhcIj5cbiAgICAgICAgICA8c3Bhbj7pmaTlsJjmsrvnkIborr7mlr0o5aWXKTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj57e2l0ZW0uZHVzdFJlbW92YWxRdHl9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aHJlZV93aWR0aFwiPlxuICAgICAgICAgIDxzcGFuPuS6jOawp+WMluehqyjlkKgpPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPuaOkiB7e2l0ZW0uc28yRGlzY2hhcmdlVG90YWx9fTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj7kuqcge3tpdGVtLnNvMkNvdW50VG90YWx9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aHJlZV93aWR0aFwiPlxuICAgICAgICAgIDxzcGFuPuawruawp+WMlueJqSjlkKgpPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPuaOkiB7e2l0ZW0ubm94RGlzY2hhcmdlVG90YWx9fTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj7kuqcge3tpdGVtLm5veENvdW50VG90YWx9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aHJlZV93aWR0aFwiPlxuICAgICAgICAgIDxzcGFuPumil+eykueJqSjlkKgpPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPuaOkiB7e2l0ZW0ucG1EaXNjaGFyZ2VUb3RhbH19PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPuS6pyB7e2l0ZW0ucG1Db3VudFRvdGFsfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGhyZWVfd2lkdGhcIj5cbiAgICAgICAgICA8c3Bhbj7mjKXlj5HmgKfmnInmnLrniako5Y2D5YWLKTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj7mjpIge3tpdGVtLnZvY0Rpc2NoYXJnZVRvdGFsfX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4+5LqnIHt7aXRlbS52b2NDb3VudFRvdGFsfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGhyZWVfd2lkdGhcIj5cbiAgICAgICAgICA8c3Bhbj7msKgo5Y2D5YWLKTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj7mjpIge3tpdGVtLm5oM0Rpc2NoYXJnZVRvdGFsfX08L3NwYW4+XG4gICAgICAgICAgPCEtLSA8c3Bhbj7kuqcge3tpdGVtLmRlc3VsZkRldmljZVF0eX19PC9zcGFuPiAtLT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aHJlZV93aWR0aFwiPlxuICAgICAgICAgIDxzcGFuPuW6n+awlOegtyjljYPlhYspPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPuaOkiB7e2l0ZW0uYXNEaXNjaGFyZ2VUb3RhbH19PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPuS6pyB7e2l0ZW0uYXNDb3VudFRvdGFsfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGhyZWVfd2lkdGhcIj5cbiAgICAgICAgICA8c3Bhbj7lup/msJTpk4Uo5Y2D5YWLKTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj7mjpIge3tpdGVtLnBiRGlzY2hhcmdlVG90YWx9fTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj7kuqcge3tpdGVtLnBiQ291bnRUb3RhbH19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRocmVlX3dpZHRoXCI+XG4gICAgICAgICAgPHNwYW4+5bqf5rCU6ZWJKOWNg+WFiyk8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+5o6SIHt7aXRlbS5jZERpc2NoYXJnZVRvdGFsfX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4+5LqnIHt7aXRlbS5jZENvdW50VG90YWx9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aHJlZV93aWR0aFwiPlxuICAgICAgICAgIDxzcGFuPuW6n+awlOmTrCjljYPlhYspPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPuaOkiB7e2l0ZW0uY3JDb3VudFRvdGFsfX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4+5LqnIHt7aXRlbS5kZXN1bGZEZXZpY2VRdHl9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aHJlZV93aWR0aFwiPlxuICAgICAgICAgIDxzcGFuPuW6n+awlOaxnijljYPlhYspPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPuaOkiB7e2l0ZW0uaGdEaXNjaGFyZ2VUb3RhbH19PC9zcGFuPlxuICAgICAgICAgIDxzcGFuPuS6pyB7e2l0ZW0uaGdDb3VudFRvdGFsfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cblxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbXBhbnktd3JhcHBlclwiIHYtZm9yPVwiKGl0ZW0saW54KSBpbiBwcm9kUHJvY2Vzc2VzXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29tcGFueS10aXRsZVwiPlxuICAgICAgICDkuqflk4Hlt6Xoiboge3tpbngrMX19XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb21wYW55LWl0ZW0gZnNcIj5cbiAgICAgICAgPHNwYW4+5Lqn5ZOB5ZCN56ewPC9zcGFuPlxuICAgICAgICA8c3Bhbj57e2l0ZW0ubWFpblByb2ROYW1lfX08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb21wYW55LWl0ZW0gZnNcIj5cbiAgICAgICAgPHNwYW4+55Sf5Lqn5bel6Im65ZCN56ewPC9zcGFuPlxuICAgICAgICA8c3Bhbj57e2l0ZW0ubWFpbkNyYWZ0TmFtZX19PC9zcGFuPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29tcGFueS1ib3hcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhhbGZfd2lkdGhcIj5cbiAgICAgICAgICA8c3Bhbj7nlJ/kuqfog73lipso5ZCoKTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj57e2l0ZW0ubWFpblByb2RBYmlsaXR5fX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGFsZl93aWR0aFwiPlxuICAgICAgICAgIDxzcGFuPuWunumZheS6p+mHjyjlkKgpPC9zcGFuPlxuICAgICAgICAgIDxzcGFuPnt7aXRlbS5tYWluUHJvZFlpZWxkfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29tcGFueS13cmFwcGVyXCIgdi1mb3I9XCIoaXRlbSxpKSBpbiB3bWF0ZXJpYWxzXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29tcGFueS10aXRsZVwiPlxuICAgICAgICDkuLvopoHljp/ovoXmnZDmlpl7e2krMX19XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb21wYW55LWJveFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGFsZl93aWR0aFwiPlxuICAgICAgICAgIDxzcGFuPuWOn+i+headkOaWmS/og73mupDlkI3np7A8L3NwYW4+XG4gICAgICAgICAgPHNwYW4+e3tpdGVtLm1haW5NYXRlcmlhbH19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhhbGZfd2lkdGhcIj5cbiAgICAgICAgICA8c3Bhbj7kvb/nlKjph48o5ZCoKTwvc3Bhbj5cbiAgICAgICAgICA8c3Bhbj57e2l0ZW0ubWFpbk1hdGVyaWFsVXNlfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29tcGFueS13cmFwcGVyXCIgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gd2NvbnN1bWVcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb21wYW55LXRpdGxlXCI+XG4gICAgICAgIOS4u+imgeiDvea6kOa2iOiAlyB7e2luZGV4KzF9fVxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29tcGFueS1ib3hcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRocmVlX3dpZHRoXCI+XG4gICAgICAgICAgPHNwYW4+5Y6f6L6F5p2Q5paZL+iDvea6kOWQjeensDwvc3Bhbj5cblx0XHRcdFx0XHQ8c3Bhbj57e2l0ZW0ubWFpbkVuZXJneU5hbWV9fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0aHJlZV93aWR0aFwiPlxuICAgICAgICAgIDxzcGFuPuS9v+eUqOmHjyjlkKgpPC9zcGFuPlxuXHRcdFx0XHRcdDxzcGFuPnt7aXRlbS5tYWluRW5lcmd5QWN0dWFsdXNlfX08L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGhyZWVfd2lkdGhcIj5cbiAgICAgICAgICA8c3Bhbj7nlKjkvZzljp/ovoXmnZDmlpnph48o5ZCoKTwvc3Bhbj5cblx0XHRcdFx0XHQ8c3Bhbj57e2l0ZW0ubWFpbkVuZXJneU9yaXVzZX19PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG5cdFx0PGRpdiBjbGFzcz1cImNvbXBhbnktd3JhcHBlclwiIHYtZm9yPVwiKGl0ZW0saW5keCkgaW4gd2F0ZXJURFRyZmFzXCI+XG5cdFx0ICA8ZGl2IGNsYXNzPVwiY29tcGFueS10aXRsZVwiPlxuXHRcdCAgICDlup/msLTmsrvnkIborr7mlr1cblx0XHQgIDwvZGl2PlxuXHRcdCAgPGRpdiBjbGFzcz1cImNvbXBhbnktYm94XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoXCI+XG5cdFx0XHRcdCAgPHNwYW4+5bqf5rC057G75Z6L5ZCN56ewPC9zcGFuPlxuXHRcdFx0XHQgIDxzcGFuPnt7aXRlbS5zZXdhZ2VUeXBlTmFtZX19PC9zcGFuPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cImhhbGZfd2lkdGhcIj5cblx0XHRcdFx0ICA8c3Bhbj7lpITnkIbmlrnms5XlkI3np7A8L3NwYW4+XG5cdFx0XHRcdCAgPHNwYW4+e3tpdGVtLmRlYWxNZXRob2ROYW1lfX08L3NwYW4+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdCAgICA8ZGl2IGNsYXNzPVwidGhyZWVfd2lkdGhcIj5cblx0XHQgICAgICA8c3Bhbj7lubTov5DooYzlsI/ml7YoaCk8L3NwYW4+XG5cdFx0XHRcdCAgPHNwYW4+e3tpdGVtLnJ1bnRpbWVZfX08L3NwYW4+XG5cdFx0ICAgIDwvZGl2PlxuXHRcdCAgICA8ZGl2IGNsYXNzPVwidGhyZWVfd2lkdGhcIj5cblx0XHQgICAgICA8c3Bhbj7lubTlrp7pmYXlpITnkIbmsLTph48o5ZCoKTwvc3Bhbj5cblx0XHRcdFx0ICA8c3Bhbj57e2l0ZW0uYWN0dWFsRGVhbFZvbHVtZX19PC9zcGFuPlxuXHRcdCAgICA8L2Rpdj5cblx0XHQgICAgPGRpdiBjbGFzcz1cInRocmVlX3dpZHRoXCI+XG5cdFx0ICAgICAgPHNwYW4+5aSE55CG5ZCO5bqf5rC05Y675ZCRPC9zcGFuPlxuXHRcdFx0XHQgIDxzcGFuPnt7aXRlbS5vdXRwdXREaXJlY3Rpb259fTwvc3Bhbj5cblx0XHQgICAgPC9kaXY+XG5cdFx0ICA8L2Rpdj5cblx0XHQ8L2Rpdj5cblxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7IHNnc3BzRGV0YWlsR3l5IH0gZnJvbSAnQC9hcGkvcG9sbHV0aW9uX3NvdXJjZSc7XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcImluZHVzdHJ5U291cmNlXCIsXG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFjdGl2ZUluZGV4OiAwLFxuXHRcdFx0XHRuYW1lOlwiXCIsXG5cdFx0XHRcdGdhc1REU3VtczpbXSwvL+W6n+awlOaxoeafk+a6kOaOkuaUvumHj1xuXHRcdFx0XHR3YXRlclREU3VtczpbXSwvL+W6n+awtOaxoeafk+a6kOaOkuaUvumHj1xuXHRcdFx0XHR3bWF0ZXJpYWxzOltdLC8v5Li76KaB5Y6f6L6F5p2Q5paZXG5cdFx0XHRcdHdjb25zdW1lOltdLC8v5Li76KaB6IO95rqQ5raI6ICXXG5cdFx0XHRcdHdhdGVyVERUcmZhczpbXSwvL+W6n+awtOayu+eQhuiuvuaWvVxuICAgICAgICBwcm9kUHJvY2Vzc2VzOiBbXVxuICAgICAgfVxuICAgIH0sXG4gICAgbW91bnRlZCgpIHtcblx0XHRcdHRoaXMubmFtZSA9IHRoaXMuJHJvdXRlLnF1ZXJ5Lm5hbWU7XG4gICAgXHR0aGlzLmxvYWREYXRhKClcbiAgICB9LFxuICAgIG1ldGhvZHM6IHtcbiAgICBcdGxvYWREYXRhKCl7XG4gICAgXHRcdHNnc3BzRGV0YWlsR3l5KHtiYXNlSWQ6dGhpcy4kcm91dGUucXVlcnkuaWR9KS50aGVuKHJlcz0+e1xuXHRcdFx0XHRcdGxldCByZGF0YSA9IHJlcy5kYXRhO1xuXHRcdFx0XHRcdHRoaXMuZ2FzVERTdW1zID0gcmRhdGEuZ2FzVERTdW1zO1xuXHRcdFx0XHRcdHRoaXMud2F0ZXJURFN1bXMgPSByZGF0YS53YXRlclREU3Vtcztcblx0XHRcdFx0XHR0aGlzLnByb2RQcm9jZXNzZXMgPSByZGF0YS5wcm9kUHJvY2Vzc2VzO1xuICAgIFx0XHRcdHRoaXMud21hdGVyaWFscyA9IHJkYXRhLndtYXRlcmlhbHM7XG5cdFx0XHRcdFx0dGhpcy53Y29uc3VtZSA9IHJkYXRhLndjb25zdW1lO1xuXHRcdFx0XHRcdHRoaXMud2F0ZXJURFRyZmFzID0gcmRhdGEud2F0ZXJURFRyZmFzO1xuICAgIFx0XHR9KVxuICAgIFx0fSxcbiAgICAgIGNoYW5nZVRhYihpbmRleCkge1xuICAgICAgICB0aGlzLmFjdGl2ZUluZGV4ID0gaW5kZXg7XG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuICAuY29tcGFueS13cmFwcGVyIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDY4LCAxMjMsIDI1MiwgMCkgNzAlLCByZ2JhKDY4LCAxMjMsIDI1MiwgMC4wNikgMTAwJSksIHdoaXRlO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgIG1hcmdpbi10b3A6IDZweDtcblxuICAgIC5jb21wYW55LXRpdGxlIHtcbiAgICAgIHBhZGRpbmc6IDEwcHggMTBweCA4cHggMTVweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgbGluZS1oZWlnaHQ6IDIwLjI3cHg7XG4gICAgICBjb2xvcjogIzQ0N2JmYztcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICAgIH1cblxuICAgIC5jb21wYW55LXRhYi13cmFwcGVyIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBtYXJnaW46IDAgMTBweDtcblxuICAgICAgLmNvbXBhbnktdGFiLWl0ZW0ge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDJweDtcbiAgICAgIH1cblxuICAgICAgLmFjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiAjMzk4MmY3O1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgIzM5ODJmNztcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY29tcGFueS1pdGVtIHtcbiAgICAgIG1hcmdpbjogNXB4IDMwcHg7XG4gICAgICBmb250LXNpemU6IDEycHg7XG5cbiAgICAgIHNwYW46Zmlyc3QtY2hpbGQge1xuICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgIH1cblxuICAgICAgc3BhbjpudGgtY2hpbGQoMiksIHNwYW46bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGNvbG9yOiAjMzMzO1xuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuY29tcGFueS1ib3gge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgLmhhbGZfd2lkdGgsIC50aHJlZV93aWR0aCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIG1hcmdpbjogNXB4IDA7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcblxuICAgICAgICBzcGFuOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICBjb2xvcjogIzY2NjtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW46bnRoLWNoaWxkKDIpLCBzcGFuOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgY29sb3I6ICMzMzM7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmhhbGZfd2lkdGgge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgfVxuXG4gICAgICAudGhyZWVfd2lkdGgge1xuICAgICAgICB3aWR0aDogMzMlO1xuICAgICAgfVxuXG4gICAgfVxuICB9XG48L3N0eWxlPlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICBoZWlnaHQ6IFwiY2FsYygxMDB2aClcIixcbiAgICAgICAgXCJvdmVyZmxvdy15XCI6IFwiYXV0b1wiLFxuICAgICAgICBiYWNrZ3JvdW5kOiBcIiNmZmZcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcInZhbi1uYXYtYmFyXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgdGl0bGU6IF92bS5uYW1lLCBcImxlZnQtYXJyb3dcIjogXCJcIiB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIFwiY2xpY2stbGVmdFwiOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLiRyb3V0ZXIuZ28oLTEpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29tcGFueS13cmFwcGVyXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tcGFueS10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIiDkuqflk4Hkv6Hmga8o5YWo5Y6C5ZCI6K6hKSBcIiksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb21wYW55LXRhYi13cmFwcGVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgXCJjb21wYW55LXRhYi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICBfdm0uYWN0aXZlSW5kZXggPT09IDAgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoYW5nZVRhYigwKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiIOW6n+awtOaxoeafk+a6kOaOkuaUvumHjyBcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgXCJjb21wYW55LXRhYi1pdGVtXCIsXG4gICAgICAgICAgICAgICAgICBfdm0uYWN0aXZlSW5kZXggPT09IDEgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoYW5nZVRhYigxKVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiIOW6n+awlOaxoeafk+a6kOaOkuaUvumHjyBcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fbChfdm0ud2F0ZXJURFN1bXMsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmFjdGl2ZUluZGV4ID09PSAwLFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImFjdGl2ZUluZGV4PT09MFwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbXBhbnktYm94XCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhhbGZfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuayu+eQhuiuvuaWveaVsCjlpZcpXCIpXSksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS5zZXdhZ2VHb3Zlcm5OdW0pKV0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGFsZl93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6K6+6K6h5aSE55CG6IO95Yqb77yI5LiH56uL5pa557GzL+aXpe+8iVwiKV0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ucHJvY2Vzc0NhcGFjaXR5KSldKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhhbGZfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuW5tOWunumZheWkhOeQhuawtOmHj++8iOS4h+eri+aWueexs++8iVwiKV0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uYWN0dWFsRGVhbFZvbHVtZSkpXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYWxmX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlj5bmsLTph4/vvIjkuIfnq4vmlrnnsbMv5pel77yJXCIpXSksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS53YXRlckdldCkpXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aHJlZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5YyW5a2m6ZyA5rCn6YePKOWQqClcIildKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5o6SIFwiICsgX3ZtLl9zKGl0ZW0uY29kRGlzY2hhcmdlKSldKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5LqnIFwiICsgX3ZtLl9zKGl0ZW0uY29kR2VuQ291bnQpKV0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGhyZWVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuawqOawrijlkKgpXCIpXSksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaOkiBcIiArIF92bS5fcyhpdGVtLm5oM25Db3VudCkpXSksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuS6pyBcIiArIF92bS5fcyhpdGVtLm5oM25EaXNjaGFyZ2VDb3VudCkpXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aHJlZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5oC75rCuKOWQqClcIildKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5o6SIFwiICsgX3ZtLl9zKGl0ZW0udG5Db3VudCkpXSksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuS6pyBcIiArIF92bS5fcyhpdGVtLnRuRGlzY2hhcmdlKSldKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRocmVlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmgLvno7co5ZCoKVwiKV0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmjpIgXCIgKyBfdm0uX3MoaXRlbS50cENvdW50KSldKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5LqnIFwiICsgX3ZtLl9zKGl0ZW0udHBEaXNjaGFyZ2UpKV0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGhyZWVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuefs+ayueexuyjljYPlhYspXCIpXSksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaOkiBcIiArIF92bS5fcyhpdGVtLm9pbENvdW50KSldKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5LqnIFwiICsgX3ZtLl9zKGl0ZW0ub2lsRGlzY2hhcmdlKSArIFwiMVwiKV0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGhyZWVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaMpeWPkemFmijljYPlhYspXCIpXSksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaOkiBcIiArIF92bS5fcyhpdGVtLnBoZW5vbENvdW50KSldKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuS6pyBcIiArIF92bS5fcyhpdGVtLnBoZW5vbERpc2NoYXJnZSkgKyBcIjFcIiksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRocmVlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmsLDljJbniako5Y2D5YWLKVwiKV0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmjpIgXCIgKyBfdm0uX3MoaXRlbS5jeWFuaWRlQ291bnQpKV0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLkuqcgXCIgKyBfdm0uX3MoaXRlbS5jeWFuaWRlRGlzY2hhcmdlKSldKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRocmVlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmgLvnoLco5Y2D5YWLKVwiKV0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmjpIgXCIgKyBfdm0uX3MoaXRlbS50YXNDb3VudCkpXSksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuS6pyBcIiArIF92bS5fcyhpdGVtLnRhc0Rpc2NoYXJnZSkpXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aHJlZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5oC76ZOFKOWNg+WFiylcIildKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5o6SIFwiICsgX3ZtLl9zKGl0ZW0udHBiQ291bnQpKV0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLkuqcgXCIgKyBfdm0uX3MoaXRlbS50cGJEaXNjaGFyZ2UpKV0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGhyZWVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaAu+mViSjljYPlhYspXCIpXSksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaOkiBcIiArIF92bS5fcyhpdGVtLnRjZENvdW50KSldKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5LqnIFwiICsgX3ZtLl9zKGl0ZW0udGNkRGlzY2hhcmdlKSldKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRocmVlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmgLvpk6wo5Y2D5YWLKVwiKV0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmjpIgXCIgKyBfdm0uX3MoaXRlbS50Y3JDb3VudCkpXSksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuS6pyBcIiArIF92bS5fcyhpdGVtLnRjckRpc2NoYXJnZSkpXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aHJlZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5YWt5Lu36ZOsKOWNg+WFiylcIildKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5o6SIFwiICsgX3ZtLl9zKGl0ZW0uY3I2Q291bnQpKV0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLkuqcgXCIgKyBfdm0uX3MoaXRlbS5jcjZEaXNjaGFyZ2UpKV0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGhyZWVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaAu+axnijljYPlhYspXCIpXSksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaOkiBcIiArIF92bS5fcyhpdGVtLnRoZ0NvdW50KSldKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5LqnIFwiICsgX3ZtLl9zKGl0ZW0udGhnRGlzY2hhcmdlKSldKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fbChfdm0uZ2FzVERTdW1zLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5hY3RpdmVJbmRleCA9PT0gMSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJhY3RpdmVJbmRleD09PTFcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb21wYW55LWJveFwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aHJlZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6ISx56Gr5rK755CG6K6+5pa95pWwKOWllylcIildKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLmRlc3VsZkRldmljZVF0eSkpXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aHJlZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6ISx56Gd5rK755CG6K6+5pa9KOWllylcIildKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLmRlbm94RGV2aWNlUXR5KSldKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRocmVlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLpmaTlsJjmsrvnkIborr7mlr0o5aWXKVwiKV0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uZHVzdFJlbW92YWxRdHkpKV0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGhyZWVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuS6jOawp+WMluehqyjlkKgpXCIpXSksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaOkiBcIiArIF92bS5fcyhpdGVtLnNvMkRpc2NoYXJnZVRvdGFsKSldKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5LqnIFwiICsgX3ZtLl9zKGl0ZW0uc28yQ291bnRUb3RhbCkpXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aHJlZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5rCu5rCn5YyW54mpKOWQqClcIildKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5o6SIFwiICsgX3ZtLl9zKGl0ZW0ubm94RGlzY2hhcmdlVG90YWwpKV0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLkuqcgXCIgKyBfdm0uX3MoaXRlbS5ub3hDb3VudFRvdGFsKSldKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRocmVlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLpopfnspLniako5ZCoKVwiKV0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmjpIgXCIgKyBfdm0uX3MoaXRlbS5wbURpc2NoYXJnZVRvdGFsKSldKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5LqnIFwiICsgX3ZtLl9zKGl0ZW0ucG1Db3VudFRvdGFsKSldKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRocmVlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmjKXlj5HmgKfmnInmnLrniako5Y2D5YWLKVwiKV0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmjpIgXCIgKyBfdm0uX3MoaXRlbS52b2NEaXNjaGFyZ2VUb3RhbCkpXSksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuS6pyBcIiArIF92bS5fcyhpdGVtLnZvY0NvdW50VG90YWwpKV0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGhyZWVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuawqCjljYPlhYspXCIpXSksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaOkiBcIiArIF92bS5fcyhpdGVtLm5oM0Rpc2NoYXJnZVRvdGFsKSldKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRocmVlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlup/msJTnoLco5Y2D5YWLKVwiKV0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmjpIgXCIgKyBfdm0uX3MoaXRlbS5hc0Rpc2NoYXJnZVRvdGFsKSldKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5LqnIFwiICsgX3ZtLl9zKGl0ZW0uYXNDb3VudFRvdGFsKSldKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRocmVlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlup/msJTpk4Uo5Y2D5YWLKVwiKV0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmjpIgXCIgKyBfdm0uX3MoaXRlbS5wYkRpc2NoYXJnZVRvdGFsKSldKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5LqnIFwiICsgX3ZtLl9zKGl0ZW0ucGJDb3VudFRvdGFsKSldKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRocmVlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlup/msJTplYko5Y2D5YWLKVwiKV0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmjpIgXCIgKyBfdm0uX3MoaXRlbS5jZERpc2NoYXJnZVRvdGFsKSldKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5LqnIFwiICsgX3ZtLl9zKGl0ZW0uY2RDb3VudFRvdGFsKSldKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRocmVlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlup/msJTpk6wo5Y2D5YWLKVwiKV0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmjpIgXCIgKyBfdm0uX3MoaXRlbS5jckNvdW50VG90YWwpKV0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLkuqcgXCIgKyBfdm0uX3MoaXRlbS5kZXN1bGZEZXZpY2VRdHkpKV0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGhyZWVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuW6n+awlOaxnijljYPlhYspXCIpXSksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaOkiBcIiArIF92bS5fcyhpdGVtLmhnRGlzY2hhcmdlVG90YWwpKV0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLkuqcgXCIgKyBfdm0uX3MoaXRlbS5oZ0NvdW50VG90YWwpKV0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgICksXG4gICAgICBfdm0uX2woX3ZtLnByb2RQcm9jZXNzZXMsIGZ1bmN0aW9uIChpdGVtLCBpbngpIHtcbiAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tcGFueS13cmFwcGVyXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tcGFueS10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIiDkuqflk4Hlt6XoibogXCIgKyBfdm0uX3MoaW54ICsgMSkgKyBcIiBcIiksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb21wYW55LWl0ZW0gZnNcIiB9LCBbXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuS6p+WTgeWQjeensFwiKV0pLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ubWFpblByb2ROYW1lKSldKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbXBhbnktaXRlbSBmc1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi55Sf5Lqn5bel6Im65ZCN56ewXCIpXSksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS5tYWluQ3JhZnROYW1lKSldKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbXBhbnktYm94XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYWxmX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIueUn+S6p+iDveWKmyjlkKgpXCIpXSksXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLm1haW5Qcm9kQWJpbGl0eSkpXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGFsZl93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlrp7pmYXkuqfph48o5ZCoKVwiKV0pLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS5tYWluUHJvZFlpZWxkKSldKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKVxuICAgICAgfSksXG4gICAgICBfdm0uX2woX3ZtLndtYXRlcmlhbHMsIGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbXBhbnktd3JhcHBlclwiIH0sIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbXBhbnktdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCIg5Li76KaB5Y6f6L6F5p2Q5paZXCIgKyBfdm0uX3MoaSArIDEpICsgXCIgXCIpLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tcGFueS1ib3hcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhhbGZfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5Y6f6L6F5p2Q5paZL+iDvea6kOWQjeensFwiKV0pLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS5tYWluTWF0ZXJpYWwpKV0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhhbGZfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5L2/55So6YePKOWQqClcIildKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ubWFpbk1hdGVyaWFsVXNlKSldKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKVxuICAgICAgfSksXG4gICAgICBfdm0uX2woX3ZtLndjb25zdW1lLCBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tcGFueS13cmFwcGVyXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tcGFueS10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIiDkuLvopoHog73mupDmtojogJcgXCIgKyBfdm0uX3MoaW5kZXggKyAxKSArIFwiIFwiKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbXBhbnktYm94XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aHJlZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLljp/ovoXmnZDmlpkv6IO95rqQ5ZCN56ewXCIpXSksXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLm1haW5FbmVyZ3lOYW1lKSldKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aHJlZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLkvb/nlKjph48o5ZCoKVwiKV0pLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS5tYWluRW5lcmd5QWN0dWFsdXNlKSldKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aHJlZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLnlKjkvZzljp/ovoXmnZDmlpnph48o5ZCoKVwiKV0pLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS5tYWluRW5lcmd5T3JpdXNlKSldKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKVxuICAgICAgfSksXG4gICAgICBfdm0uX2woX3ZtLndhdGVyVERUcmZhcywgZnVuY3Rpb24gKGl0ZW0sIGluZHgpIHtcbiAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tcGFueS13cmFwcGVyXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tcGFueS10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIiDlup/msLTmsrvnkIborr7mlr0gXCIpLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tcGFueS1ib3hcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhhbGZfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5bqf5rC057G75Z6L5ZCN56ewXCIpXSksXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLnNld2FnZVR5cGVOYW1lKSldKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYWxmX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuWkhOeQhuaWueazleWQjeensFwiKV0pLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS5kZWFsTWV0aG9kTmFtZSkpXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGhyZWVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5bm06L+Q6KGM5bCP5pe2KGgpXCIpXSksXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLnJ1bnRpbWVZKSldKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aHJlZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlubTlrp7pmYXlpITnkIbmsLTph48o5ZCoKVwiKV0pLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS5hY3R1YWxEZWFsVm9sdW1lKSldKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aHJlZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlpITnkIblkI7lup/msLTljrvlkJFcIildKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ub3V0cHV0RGlyZWN0aW9uKSldKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKVxuICAgICAgfSksXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbXBhbnktd3JhcHBlcltkYXRhLXYtMzI5OGExNDhdIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMGRlZywgcmdiYSg2OCwgMTIzLCAyNTIsIDApIDcwJSwgcmdiYSg2OCwgMTIzLCAyNTIsIDAuMDYpIDEwMCUpLCB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMHB4IDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuICBtYXJnaW4tdG9wOiA2cHg7XFxufVxcbi5jb21wYW55LXdyYXBwZXIgLmNvbXBhbnktdGl0bGVbZGF0YS12LTMyOThhMTQ4XSB7XFxuICBwYWRkaW5nOiAxMHB4IDEwcHggOHB4IDE1cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGxpbmUtaGVpZ2h0OiAyMC4yN3B4O1xcbiAgY29sb3I6ICM0NDdiZmM7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuLmNvbXBhbnktd3JhcHBlciAuY29tcGFueS10YWItd3JhcHBlcltkYXRhLXYtMzI5OGExNDhdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDAgMTBweDtcXG59XFxuLmNvbXBhbnktd3JhcHBlciAuY29tcGFueS10YWItd3JhcHBlciAuY29tcGFueS10YWItaXRlbVtkYXRhLXYtMzI5OGExNDhdIHtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4O1xcbn1cXG4uY29tcGFueS13cmFwcGVyIC5jb21wYW55LXRhYi13cmFwcGVyIC5hY3RpdmVbZGF0YS12LTMyOThhMTQ4XSB7XFxuICBjb2xvcjogIzM5ODJmNztcXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjMzk4MmY3O1xcbn1cXG4uY29tcGFueS13cmFwcGVyIC5jb21wYW55LWl0ZW1bZGF0YS12LTMyOThhMTQ4XSB7XFxuICBtYXJnaW46IDVweCAzMHB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4uY29tcGFueS13cmFwcGVyIC5jb21wYW55LWl0ZW0gc3BhbltkYXRhLXYtMzI5OGExNDhdOmZpcnN0LWNoaWxkIHtcXG4gIGNvbG9yOiAjNjY2O1xcbn1cXG4uY29tcGFueS13cmFwcGVyIC5jb21wYW55LWl0ZW0gc3BhbltkYXRhLXYtMzI5OGExNDhdOm50aC1jaGlsZCgyKSwgLmNvbXBhbnktd3JhcHBlciAuY29tcGFueS1pdGVtIHNwYW5bZGF0YS12LTMyOThhMTQ4XTpudGgtY2hpbGQoMykge1xcbiAgd2lkdGg6IDYwJTtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgY29sb3I6ICMzMzM7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmNvbXBhbnktd3JhcHBlciAuY29tcGFueS1ib3hbZGF0YS12LTMyOThhMTQ4XSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbn1cXG4uY29tcGFueS13cmFwcGVyIC5jb21wYW55LWJveCAuaGFsZl93aWR0aFtkYXRhLXYtMzI5OGExNDhdLCAuY29tcGFueS13cmFwcGVyIC5jb21wYW55LWJveCAudGhyZWVfd2lkdGhbZGF0YS12LTMyOThhMTQ4XSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbjogNXB4IDA7XFxuICB3aWR0aDogNTAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxufVxcbi5jb21wYW55LXdyYXBwZXIgLmNvbXBhbnktYm94IC5oYWxmX3dpZHRoIHNwYW5bZGF0YS12LTMyOThhMTQ4XTpmaXJzdC1jaGlsZCwgLmNvbXBhbnktd3JhcHBlciAuY29tcGFueS1ib3ggLnRocmVlX3dpZHRoIHNwYW5bZGF0YS12LTMyOThhMTQ4XTpmaXJzdC1jaGlsZCB7XFxuICBjb2xvcjogIzY2NjtcXG59XFxuLmNvbXBhbnktd3JhcHBlciAuY29tcGFueS1ib3ggLmhhbGZfd2lkdGggc3BhbltkYXRhLXYtMzI5OGExNDhdOm50aC1jaGlsZCgyKSwgLmNvbXBhbnktd3JhcHBlciAuY29tcGFueS1ib3ggLmhhbGZfd2lkdGggc3BhbltkYXRhLXYtMzI5OGExNDhdOm50aC1jaGlsZCgzKSwgLmNvbXBhbnktd3JhcHBlciAuY29tcGFueS1ib3ggLnRocmVlX3dpZHRoIHNwYW5bZGF0YS12LTMyOThhMTQ4XTpudGgtY2hpbGQoMiksIC5jb21wYW55LXdyYXBwZXIgLmNvbXBhbnktYm94IC50aHJlZV93aWR0aCBzcGFuW2RhdGEtdi0zMjk4YTE0OF06bnRoLWNoaWxkKDMpIHtcXG4gIGNvbG9yOiAjMzMzO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5jb21wYW55LXdyYXBwZXIgLmNvbXBhbnktYm94IC5oYWxmX3dpZHRoW2RhdGEtdi0zMjk4YTE0OF0ge1xcbiAgd2lkdGg6IDUwJTtcXG59XFxuLmNvbXBhbnktd3JhcHBlciAuY29tcGFueS1ib3ggLnRocmVlX3dpZHRoW2RhdGEtdi0zMjk4YTE0OF0ge1xcbiAgd2lkdGg6IDMzJTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmR1c3RyeVNvdXJjZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zMjk4YTE0OCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImM1ZWIwOGI4XCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kdXN0cnlTb3VyY2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzI5OGExNDgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmR1c3RyeVNvdXJjZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zMjk4YTE0OCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kdXN0cnlTb3VyY2UudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMyOThhMTQ4JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZHVzdHJ5U291cmNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kdXN0cnlTb3VyY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZHVzdHJ5U291cmNlLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTMyOThhMTQ4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMzI5OGExNDhcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzI5OGExNDgnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzI5OGExNDgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzI5OGExNDgnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZHVzdHJ5U291cmNlLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMjk4YTE0OCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczMjk4YTE0OCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvaW5kdXN0cnlTb3VyY2UudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmR1c3RyeVNvdXJjZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kdXN0cnlTb3VyY2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kdXN0cnlTb3VyY2UudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzI5OGExNDgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmR1c3RyeVNvdXJjZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzI5OGExNDgmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9