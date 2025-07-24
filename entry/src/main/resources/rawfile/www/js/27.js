(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[27],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/water/waterPollution.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/searchComponents/components/water/waterPollution.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_water_envir__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/water_envir */ "./src/api/water_envir.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "waterPollution",
  data: function data() {
    return {
      searchObj: {},
      obj: {}
    };
  },
  mounted: function mounted() {
    this.searchObj = this.$store.state.searchObj;
    console.log(this.searchObj);
    this.queryData();
  },
  methods: {
    queryData: function queryData() {
      var _this = this;

      var query = this.searchObj.parameter.indexOf('流域') > -1;
      Object(_api_water_envir__WEBPACK_IMPORTED_MODULE_0__["involveWater"])({
        divisionName: this.searchObj.parameter
      }).then(function (res) {
        _this.obj = res.data;
      });
    },
    onDetails: function onDetails(flag) {
      if (flag === '涉水污染源') {
        this.$router.push({
          name: 'involveWaterPollution',
          query: {
            xzqh: this.searchObj.parameter
          }
        });
      } else if (flag === '排口档案') {
        this.$router.push({
          name: 'upstreamOutlet',
          query: {
            xzqh: this.searchObj.parameter
          }
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/cityWater.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/cityWater.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_setdate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils/setdate */ "./src/utils/setdate.js");
/* harmony import */ var _api_water_envir__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/water_envir */ "./src/api/water_envir.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "cityWater",
  data: function data() {
    return {
      today: Object(_utils_setdate__WEBPACK_IMPORTED_MODULE_0__["getThisDate"])(),
      area: "昆明市",
      waterdata: [],
      searchObj: {},
      title: null,
      countryImg: __webpack_require__(/*! ../../../assets/国.png */ "./src/assets/国.png"),
      provinceImg: __webpack_require__(/*! ../../../assets/省.png */ "./src/assets/省.png"),
      cityImg: __webpack_require__(/*! ../../../assets/市.png */ "./src/assets/市.png")
    };
  },
  mounted: function mounted() {
    this.searchObj = this.$store.state.searchObj;
    this.loadData();

    if (this.searchObj.parameter === '昆明市') {
      this.title = '全市水环境概括';
    } else {
      this.title = this.searchObj.parameter + '概括';
    }
  },
  methods: {
    loadData: function loadData() {
      var _this = this;

      Object(_api_water_envir__WEBPACK_IMPORTED_MODULE_1__["waterBasicData"])({
        dataType: this.searchObj.parameter
      }).then(function (res) {
        _this.waterdata = res.data;
      });
    },
    toDetail: function toDetail(flag) {
      this.$router.push({
        name: "examineSiteList",
        query: {
          type: flag,
          xzqh: this.searchObj.parameter.indexOf('流域') === -1 ? this.searchObj.parameter : '',
          ly: this.searchObj.parameter.indexOf('流域') > -1 ? this.searchObj.parameter : ''
        }
      });
    },
    controlImg: function controlImg(type) {
      if (type) {
        var imgHtml = '';

        for (var i in type) {
          if (type[i] === '国') {
            imgHtml += '<img src="' + this.countryImg + '" style="width: 20px"/>';
          } else if (type[i] === '省') {
            imgHtml += '<img src="' + this.provinceImg + '" style="width: 20px"/>';
          } else if (type[i] === '市') {
            imgHtml += '<img src="' + this.cityImg + '" style="width: 20px"/>';
          }
        }

        return imgHtml;
      }
    }
  },
  watch: {
    area: function area(val, old) {
      if (val != old) {
        this.loadData();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/drinkDetail/components/cityDrink.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/drinkDetail/components/cityDrink.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var _api_water_envir__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/water_envir */ "./src/api/water_envir.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "cityDrink",
  data: function data() {
    return {
      searchObj: {},
      basinRef: null,
      countyRef: null,
      yysInfo: {}
    };
  },
  mounted: function mounted() {
    this.searchObj = this.$store.state.searchObj;
    this.getYys();
  },
  methods: {
    getYys: function getYys() {
      var _this = this;

      Object(_api_water_envir__WEBPACK_IMPORTED_MODULE_3__["yysInfo"])({
        basin: this.searchObj.parameter
      }).then(function (res) {
        _this.yysInfo = res.data;

        if (!_this.basinRef) {
          _this.basinRef = echarts__WEBPACK_IMPORTED_MODULE_2__["init"](_this.$refs.basinRef);
          setTimeout(function () {
            _this.initChart(_this.basinRef, "#6359E9", res.data.cityRate || '0%');
          });
        }

        if (!_this.countyRef) {
          _this.countyRef = echarts__WEBPACK_IMPORTED_MODULE_2__["init"](_this.$refs.countyRef);
          setTimeout(function () {
            _this.initChart(_this.countyRef, "#64CFF6", res.data.rate || '0%');
          });
        }
      });
    },
    initChart: function initChart(chartInstance, color, data) {
      var value = data.replace("%", "");
      var option = {
        title: [{
          text: "达标率",
          y: "75%",
          x: "center",
          textStyle: {
            fontSize: 12,
            fontWeight: "normal",
            color: "rgba(18, 18, 54, 0.5)"
          }
        }],
        angleAxis: {
          show: false,
          max: 100 * 360 / 180,
          //-45度到225度，二者偏移值是270度除360度
          type: "value",
          startAngle: 180,
          //极坐标初始角度
          splitLine: {
            show: false
          }
        },
        barMaxWidth: 18,
        //圆环宽度
        radiusAxis: {
          show: false,
          type: "category"
        },
        //圆环位置和大小
        polar: {
          center: ["50%", "60%"],
          radius: "160%"
        },
        series: [{
          type: "bar",
          data: [{
            //上层圆环，显示数据
            value: value,
            itemStyle: {
              color: color
            }
          }],
          barGap: "-100%",
          //柱间距离,上下两层圆环重合
          coordinateSystem: "polar",
          roundCap: true,
          //顶端圆角
          z: 3 //圆环层级，同zindex

        }, {
          //下层圆环，显示最大值
          type: "bar",
          data: [{
            value: 100,
            itemStyle: {
              color: "#EAEAEF",
              borderWidth: 0
            }
          }],
          barGap: "-100%",
          coordinateSystem: "polar",
          roundCap: true,
          z: 1
        }, //仪表盘
        {
          type: "gauge",
          startAngle: 225,
          //起始角度，同极坐标
          endAngle: -45,
          //终止角度，同极坐标
          axisLine: {
            show: false
          },
          splitLine: {
            show: false
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            show: false
          },
          splitLabel: {
            show: false
          },
          pointer: {
            // 分隔线
            show: false //是否显示指针

          },
          detail: {
            formatter: function formatter(params) {
              return value + "%";
            },
            color: "#2755F7",
            fontSize: 14,
            offsetCenter: [0, 15]
          },
          title: {
            show: false
          },
          data: [{
            value: value
          }]
        }]
      };
      chartInstance.setOption(option);
    },
    toDetail: function toDetail(type) {
      this.$router.push({
        name: "drinkDetail",
        query: {
          title: type + "饮用水源地",
          basin: this.searchObj.parameter
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/water/waterPollution.vue?vue&type=template&id=19acda0d&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/searchComponents/components/water/waterPollution.vue?vue&type=template&id=19acda0d&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      { staticClass: "source-wrapper", staticStyle: { "flex-wrap": "wrap" } },
      [
        _c("div", { staticClass: "source-box" }, [
          _c(
            "div",
            {
              staticClass: "source-name",
              on: {
                click: function ($event) {
                  return _vm.onDetails("涉水污染源")
                },
              },
            },
            [
              _c("img", {
                attrs: { src: __webpack_require__(/*! @/assets/waterHomePage/涉水.png */ "./src/assets/waterHomePage/涉水.png") },
              }),
              _vm._v("涉水污染源 "),
            ]
          ),
          _c("div", { staticStyle: { "padding-left": "20px" } }, [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "20px",
                  color: "rgba(18, 18, 54, 1)",
                },
              },
              [_vm._v(_vm._s(_vm.obj.wry))]
            ),
            _vm._v("家 "),
          ]),
        ]),
        _c("div", { staticClass: "source-box" }, [
          _c(
            "div",
            {
              staticClass: "source-name",
              on: {
                click: function ($event) {
                  return _vm.onDetails("排口档案")
                },
              },
            },
            [
              _c("img", {
                attrs: { src: __webpack_require__(/*! @/assets/waterHomePage/排口.png */ "./src/assets/waterHomePage/排口.png") },
              }),
              _vm._v("排口档案 "),
            ]
          ),
          _c("div", { staticStyle: { "padding-left": "20px" } }, [
            _c(
              "span",
              {
                staticStyle: {
                  "font-size": "20px",
                  color: "rgba(18, 18, 54, 1)",
                },
              },
              [_vm._v(_vm._s(_vm.obj.pk))]
            ),
            _vm._v("个 "),
          ]),
        ]),
      ]
    ),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-no-border-title" }, [
      _c("div", { staticClass: "name" }, [_vm._v("涉水污染源")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/cityWater.vue?vue&type=template&id=b074c552&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/cityWater.vue?vue&type=template&id=b074c552&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "card-no-border-wrapper" },
    [
      _c(
        "div",
        {
          staticClass: "card-no-border-title",
          on: {
            click: function ($event) {
              return _vm.$router.push({ name: "waterHomePage" })
            },
          },
        },
        [
          _c("div", { staticClass: "name" }, [_vm._v(_vm._s(_vm.title))]),
          _c("span", { staticClass: "time" }, [
            _vm._v("累计截至" + _vm._s(_vm.today) + " "),
          ]),
        ]
      ),
      _vm._l(_vm.waterdata, function (item, i) {
        return _c(
          "div",
          {
            staticClass: "base-wrapper",
            on: {
              click: function ($event) {
                return _vm.toDetail(item.type)
              },
            },
          },
          [
            _c("div", { staticClass: "base-title" }, [
              _c("div", {
                domProps: { innerHTML: _vm._s(_vm.controlImg(item.type)) },
              }),
            ]),
            _c(
              "div",
              { staticClass: "fs", staticStyle: { margin: "0 17px 0" } },
              [
                _c("div", { staticClass: "card-summary" }, [
                  _c(
                    "span",
                    { staticStyle: { color: "rgba(68, 123, 252, 1)" } },
                    [_vm._v("优良水体")]
                  ),
                  _c("div", [
                    _c("span", { staticClass: "polluteNum" }, [
                      _vm._v(_vm._s(item.excellent)),
                    ]),
                    _vm._v("个 "),
                  ]),
                ]),
                _c("div", { staticClass: "card-summary" }, [
                  _c(
                    "span",
                    { staticStyle: { color: "rgba(68, 123, 252, 1)" } },
                    [_vm._v("劣V类")]
                  ),
                  _c("div", [
                    _c(
                      "span",
                      {
                        staticClass: "polluteNum",
                        staticStyle: { color: "rgba(254, 79, 2, 1)" },
                      },
                      [_vm._v(_vm._s(item.poor))]
                    ),
                    _vm._v("个 "),
                  ]),
                ]),
                _c("div", { staticClass: "card-summary" }, [
                  _c(
                    "span",
                    { staticStyle: { color: "rgba(18, 18, 54, 0.5)" } },
                    [_vm._v("总")]
                  ),
                  _c("div", [
                    _c("span", { staticClass: "polluteNum" }, [
                      _vm._v(_vm._s(item.num)),
                    ]),
                    _vm._v("个 "),
                  ]),
                ]),
              ]
            ),
            _c(
              "div",
              { staticClass: "fs", staticStyle: { margin: "3px 13px 0 3px" } },
              [
                _c("div", { staticClass: "progress-wrapper" }, [
                  _c("div", {
                    staticClass: "standard",
                    style: "width:" + item.excellentRate,
                  }),
                ]),
                _c("div", [
                  _c(
                    "span",
                    {
                      staticStyle: {
                        color: "#121236",
                        "font-size": "14px",
                        "font-weight": "bold",
                      },
                    },
                    [_vm._v(_vm._s(item.excellentRate))]
                  ),
                  _c("br"),
                  _c(
                    "span",
                    {
                      staticStyle: {
                        "font-size": "12px",
                        color: "rgba(18, 18, 54, 0.5)",
                        "font-weight": "normal",
                      },
                    },
                    [_vm._v("优良率")]
                  ),
                ]),
              ]
            ),
          ]
        )
      }),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/drinkDetail/components/cityDrink.vue?vue&type=template&id=f6350ac4&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/drinkDetail/components/cityDrink.vue?vue&type=template&id=f6350ac4&scoped=true& ***!
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
  return _c("div", { staticClass: "card-no-border-wrapper" }, [
    _c("div", { staticClass: "card-no-border-title fs" }, [
      _c("div", { staticClass: "name" }, [
        _vm._v(_vm._s(_vm.searchObj.parameter) + "饮用水源地情况"),
      ]),
      _c("span", { staticClass: "time" }, [_vm._v("2024年 ")]),
    ]),
    _c("div", { staticClass: "fs" }, [
      _c(
        "div",
        {
          staticClass: "drink",
          on: {
            click: function ($event) {
              return _vm.toDetail("市级")
            },
          },
        },
        [
          _c("span", {
            staticClass: "circle",
            staticStyle: { background: "rgba(99, 89, 233, 1)" },
          }),
          _vm._v(" 市级( "),
          _c(
            "span",
            {
              staticStyle: {
                color: "rgba(18, 18, 54, 1)",
                "font-weight": "bold",
              },
            },
            [_vm._v(_vm._s(_vm.yysInfo.cityTotal))]
          ),
          _vm._v(" 个）"),
          _c("br"),
          _c("span", { staticClass: "standard" }, [
            _vm._v("达标" + _vm._s(_vm.yysInfo.cityUp) + "个"),
          ]),
        ]
      ),
      _c(
        "div",
        {
          staticClass: "drink",
          on: {
            click: function ($event) {
              return _vm.toDetail("县级以上")
            },
          },
        },
        [
          _c("span", {
            staticClass: "circle",
            staticStyle: { background: "rgba(100, 207, 246, 1)" },
          }),
          _vm._v(" 县级以上( "),
          _c(
            "span",
            {
              staticStyle: {
                color: "rgba(18, 18, 54, 1)",
                "font-weight": "bold",
              },
            },
            [_vm._v(_vm._s(_vm.yysInfo.total))]
          ),
          _vm._v(" 个）"),
          _c("br"),
          _c("span", { staticClass: "standard" }, [
            _vm._v("达标" + _vm._s(_vm.yysInfo.up) + "个"),
          ]),
        ]
      ),
    ]),
    _c("div", { staticClass: "fs" }, [
      _c("div", {
        ref: "basinRef",
        staticStyle: { height: "100px", width: "50%" },
        on: {
          click: function ($event) {
            return _vm.toDetail("市级")
          },
        },
      }),
      _c("div", {
        ref: "countyRef",
        staticStyle: { height: "100px", width: "50%" },
        on: {
          click: function ($event) {
            return _vm.toDetail("县级以上")
          },
        },
      }),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/water/waterPollution.vue?vue&type=style&index=0&id=19acda0d&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/searchComponents/components/water/waterPollution.vue?vue&type=style&index=0&id=19acda0d&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".card-no-border-wrapper[data-v-19acda0d] {\n  margin: 4px 17px;\n  padding-bottom: 10px;\n}\n.card-no-border-wrapper .card-no-border-title[data-v-19acda0d] {\n  display: flex;\n  align-items: center;\n  padding: 10px 0;\n}\n.card-no-border-wrapper .card-no-border-title .name[data-v-19acda0d] {\n  color: black;\n  font-size: 18px;\n  font-weight: bold;\n}\n.card-no-border-wrapper .card-no-border-title .time[data-v-19acda0d] {\n  padding-left: 10px;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.source-wrapper[data-v-19acda0d] {\n  display: flex;\n}\n.source-wrapper .source-box[data-v-19acda0d] {\n  width: 26%;\n  margin: 3px;\n  padding: 6px 8px;\n  border-radius: 10px;\n  background: #fafaff;\n  border: 1px solid #e9e9ff;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 13px;\n}\n.source-wrapper .source-box .source-name[data-v-19acda0d] {\n  display: flex;\n  align-items: center;\n  padding-bottom: 5px;\n}\n.source-wrapper .source-box .source-name img[data-v-19acda0d] {\n  width: 14px;\n  margin-right: 4px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/cityWater.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/cityWater.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".card-no-border-wrapper {\n  margin: 4px 17px;\n  padding-bottom: 10px;\n}\n.card-no-border-wrapper .card-no-border-title {\n  display: flex;\n  align-items: center;\n  padding: 10px 0;\n}\n.card-no-border-wrapper .card-no-border-title .name {\n  color: black;\n  font-size: 18px;\n  font-weight: bold;\n}\n.card-no-border-wrapper .card-no-border-title .time {\n  padding-left: 10px;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.van-dropdown-menu__title {\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.8);\n}\n.van-dropdown-menu__bar {\n  background-color: transparent;\n  height: 28px;\n  box-shadow: none;\n}\n.van-dropdown-menu__item {\n  margin-right: 10px;\n  background-color: #f6f6f6;\n  border-radius: 6px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/cityWater.vue?vue&type=style&index=1&id=b074c552&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/cityWater.vue?vue&type=style&index=1&id=b074c552&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".base-wrapper[data-v-b074c552] {\n  position: relative;\n  margin: 11px 0 0;\n  padding: 6px 3px;\n  border-radius: 10px;\n  background: linear-gradient(180deg, #f2f7ff 0%, rgba(242, 247, 255, 0) 100%);\n}\n.base-wrapper[data-v-b074c552]::before {\n  content: \"\";\n  width: 1px;\n  height: 75px;\n  background: rgba(107, 155, 250, 0.5);\n  position: absolute;\n  top: 24px;\n  left: 6px;\n}\n.base-wrapper[data-v-b074c552]::after {\n  content: \"\";\n  width: 5px;\n  height: 5px;\n  border-radius: 50%;\n  background: rgba(107, 155, 250, 0.5);\n  position: absolute;\n  bottom: 0px;\n  left: 4px;\n}\n.base-wrapper .base-title[data-v-b074c552] {\n  padding-left: 3px;\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n}\n.base-wrapper .base-title div[data-v-b074c552] {\n  color: rgba(18, 18, 54, 0.5);\n}\n.base-wrapper .base-title div span[data-v-b074c552] {\n  font-size: 14px;\n  color: #121236;\n}\n.base-wrapper .card-summary[data-v-b074c552] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  width: 27%;\n  padding: 7px;\n  background: rgba(68, 123, 252, 0.05);\n  border: 1px solid rgba(68, 123, 252, 0.1);\n  border-radius: 4px;\n  font-size: 12px;\n  color: rgba(18, 18, 54, 0.5);\n}\n.base-wrapper .card-summary .num[data-v-b074c552] {\n  color: #5271ff;\n  font-weight: bold;\n}\n.base-wrapper .card-summary .polluteNum[data-v-b074c552] {\n  color: #121236;\n  font-size: 12px;\n  font-weight: bold;\n  text-decoration: underline;\n}\n.base-wrapper .progress-wrapper[data-v-b074c552] {\n  display: flex;\n  align-items: center;\n  width: 82%;\n  padding: 0 3px;\n  height: 13px;\n  background: #f8fbff;\n  border: 1px solid rgba(82, 113, 255, 0.5);\n  border-left: 0;\n}\n.base-wrapper .progress-wrapper .standard[data-v-b074c552] {\n  height: 9px;\n  border-radius: 10px;\n  margin-right: 5px;\n  background: linear-gradient(270deg, #00d2ff 0%, #2c3cfe 100%);\n  box-shadow: 0px 10px 20px rgba(20, 31, 159, 0.15);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/drinkDetail/components/cityDrink.vue?vue&type=style&index=0&id=f6350ac4&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/drinkDetail/components/cityDrink.vue?vue&type=style&index=0&id=f6350ac4&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".card-no-border-wrapper[data-v-f6350ac4] {\n  margin: 4px 17px;\n  padding-bottom: 10px;\n}\n.card-no-border-wrapper .card-no-border-title[data-v-f6350ac4] {\n  display: flex;\n  align-items: center;\n  padding: 10px 0;\n}\n.card-no-border-wrapper .card-no-border-title .name[data-v-f6350ac4] {\n  color: black;\n  font-size: 18px;\n  font-weight: bold;\n}\n.card-no-border-wrapper .card-no-border-title .time[data-v-f6350ac4] {\n  padding-left: 10px;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.drink[data-v-f6350ac4] {\n  margin-top: 10px;\n  width: 50%;\n  text-align: center;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 14px;\n  line-height: 24px;\n}\n.drink .circle[data-v-f6350ac4] {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border-radius: 10px;\n}\n.drink .standard[data-v-f6350ac4] {\n  color: #43cf7c;\n  font-weight: bold;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/water/waterPollution.vue?vue&type=style&index=0&id=19acda0d&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/searchComponents/components/water/waterPollution.vue?vue&type=style&index=0&id=19acda0d&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./waterPollution.vue?vue&type=style&index=0&id=19acda0d&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/water/waterPollution.vue?vue&type=style&index=0&id=19acda0d&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("001b6254", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/cityWater.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/cityWater.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./cityWater.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/cityWater.vue?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("30b9ad92", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/cityWater.vue?vue&type=style&index=1&id=b074c552&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/cityWater.vue?vue&type=style&index=1&id=b074c552&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./cityWater.vue?vue&type=style&index=1&id=b074c552&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/cityWater.vue?vue&type=style&index=1&id=b074c552&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5d2d91a3", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/drinkDetail/components/cityDrink.vue?vue&type=style&index=0&id=f6350ac4&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/drinkDetail/components/cityDrink.vue?vue&type=style&index=0&id=f6350ac4&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./cityDrink.vue?vue&type=style&index=0&id=f6350ac4&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/drinkDetail/components/cityDrink.vue?vue&type=style&index=0&id=f6350ac4&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("4c2d4f0e", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/api/water_envir.js":
/*!********************************!*\
  !*** ./src/api/water_envir.js ***!
  \********************************/
/*! exports provided: ranking, yearRankList, rankList, rankDetail, scaleMarks, waterBasicData, sectionInfo, sectionList, stationInfo, upStreamOver, lakeSiteList, querySectionInfo, stationDes, riverCourseDetail, hourLine, waterPollution, upstreamPollution, getUpList, upStreamWater, upstreamSewage, purificationPlant, dataTable, jhcInfo, lyBasin, lyDetail, dcSz, dcSzList, yysInfo, skList, waterBodyList, waterPlantList, reservoirList, waterPlantRiver, waterPlantSite, resourceStat, waterFunctionList, waterFunctionDetail, involveWater, sewageDetail, sewagePcDetail, sewageSyDetail, sewageJcDetail, sewageZzDetail, pollutionList, sewageStat, riverCourseStat, riverCourseList, waterList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ranking", function() { return ranking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yearRankList", function() { return yearRankList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rankList", function() { return rankList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rankDetail", function() { return rankDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scaleMarks", function() { return scaleMarks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waterBasicData", function() { return waterBasicData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sectionInfo", function() { return sectionInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sectionList", function() { return sectionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stationInfo", function() { return stationInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upStreamOver", function() { return upStreamOver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lakeSiteList", function() { return lakeSiteList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "querySectionInfo", function() { return querySectionInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stationDes", function() { return stationDes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "riverCourseDetail", function() { return riverCourseDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hourLine", function() { return hourLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waterPollution", function() { return waterPollution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upstreamPollution", function() { return upstreamPollution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUpList", function() { return getUpList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upStreamWater", function() { return upStreamWater; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upstreamSewage", function() { return upstreamSewage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "purificationPlant", function() { return purificationPlant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dataTable", function() { return dataTable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jhcInfo", function() { return jhcInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lyBasin", function() { return lyBasin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lyDetail", function() { return lyDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dcSz", function() { return dcSz; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dcSzList", function() { return dcSzList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yysInfo", function() { return yysInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "skList", function() { return skList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waterBodyList", function() { return waterBodyList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waterPlantList", function() { return waterPlantList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reservoirList", function() { return reservoirList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waterPlantRiver", function() { return waterPlantRiver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waterPlantSite", function() { return waterPlantSite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resourceStat", function() { return resourceStat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waterFunctionList", function() { return waterFunctionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waterFunctionDetail", function() { return waterFunctionDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "involveWater", function() { return involveWater; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sewageDetail", function() { return sewageDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sewagePcDetail", function() { return sewagePcDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sewageSyDetail", function() { return sewageSyDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sewageJcDetail", function() { return sewageJcDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sewageZzDetail", function() { return sewageZzDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pollutionList", function() { return pollutionList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sewageStat", function() { return sewageStat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "riverCourseStat", function() { return riverCourseStat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "riverCourseList", function() { return riverCourseList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "waterList", function() { return waterList; });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./src/api/request.js");

var baseUrl = "/water"; //服务器是water类，本地没有加

/*
大竞赛水治理排名
 */

function ranking(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/competition/ranking",
    method: "get",
    params: data
  });
}
/*
水环境年底排名列表
 */

function yearRankList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/competition/yearRankList",
    method: "get",
    params: data
  });
}
/*
大竞赛水治理排名详情
 */

function rankList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/competition/rankList",
    method: "get",
    params: data
  });
}
/*
大竞赛水治理排名各区域详情
 */

function rankDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/competition/rankDetail",
    method: "get",
    params: data
  });
}
/*
 各县（市）区、开发度假园区季度地表水环境质量评分详情
 */

function scaleMarks(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/competition/scaleMarks",
    method: "get",
    params: data
  });
}
/*
全市水环境概况总体情况
 */

function waterBasicData(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/BasicData",
    method: "get",
    params: data
  });
}
/*
断面信息
 */

function sectionInfo(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/waterBasicData/sectionInfo",
    method: "post",
    data: data
  });
}
/*
断面列表--国、省、市
 */

function sectionList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/BasicData/sectionList",
    method: "post",
    data: data
  });
} // 断面信息--国、省、市

function stationInfo(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section",
    method: "post",
    data: data
  });
} // 断面信息--查询上游超标

function upStreamOver(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section/upStreamOver",
    method: "post",
    data: data
  });
} // 断面信息--查询湖库的监测断面

function lakeSiteList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section/lakeSiteList",
    method: "get",
    params: data
  });
} // 断面-河流时值曲线

function querySectionInfo(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section/querySectionInfo",
    method: "get",
    params: data
  });
} // 断面信息--国、省、市

function stationDes(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section/siteDetail",
    method: "GET",
    params: data
  });
} // 河流详情-河道详情

function riverCourseDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/BasicData/riverCourseDetail",
    method: "GET",
    params: data
  });
} // 断面-时值曲线

function hourLine(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section/curve",
    method: "post",
    data: data
  });
} // 断面信息--周边涉水污染源

function waterPollution(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section/pollution",
    method: "get",
    params: data
  });
}
function upstreamPollution(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section/upstreamPollution",
    method: "get",
    params: data
  });
} // 断面信息--上游断面列表
// export function getUpList(data) {
//   return request({
//     url: baseUrl + "/water/section/upStream",
//     method: "post",
//     data: data,
//   });
// }

function getUpList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section/upstreamSection",
    method: "get",
    params: data
  });
} // 断面信息--上游水库

function upStreamWater(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section/upstreamWater",
    method: "get",
    params: data
  });
} // 断面信息--上游排口

function upstreamSewage(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section/upstreamSewage",
    method: "get",
    params: data
  });
} // 断面信息--上游水质净化厂

function purificationPlant(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section/purificationPlant",
    method: "post",
    data: data
  });
} // 断面--监测详情

function dataTable(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/section/dataTable",
    method: "post",
    data: data
  });
} // 断面--水质净化厂详情

function jhcInfo(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/plant",
    method: "post",
    data: data
  });
} // 昆明水环境-流域水质优良概况

function lyBasin(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/basin",
    method: "get",
    params: data
  });
} // 昆明水环境-流域水质优良概况-详情

function lyDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/basin/details",
    method: "get",
    params: data
  });
} // 首页 - 滇池水质

function dcSz() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/BasicData/dcData",
    method: "get"
  });
} // 首页 - 滇池水质 - 水质列表

function dcSzList() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/lake/dcList",
    method: "get"
  });
} // 首页-饮用水源地

function yysInfo(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/BasicData/drinkSource",
    method: "get",
    params: data
  });
} // 首页-饮用水源地-水库列表

function skList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/lake/drinkSourceList",
    method: "get",
    params: data
  });
} // 昆明市水环境-水库分布及库容

function waterBodyList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/BasicData/waterBodyDistribution",
    method: "get",
    params: data
  });
} // 昆明市水环境-水质净化厂分布

function waterPlantList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/plant",
    method: "get",
    params: data
  });
} // 昆明市水环境-水库分布

function reservoirList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/common/waterList",
    method: "get",
    params: data
  });
} // 水质净化厂河道断面详情

function waterPlantRiver(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/plant/detail",
    method: "get",
    params: data
  });
} // 水质净化厂补水断面

function waterPlantSite(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/plant/sites",
    method: "get",
    params: data
  });
}
/*
首页水资源查询
 */

function resourceStat(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/common/resourceStat",
    method: "get",
    params: data
  });
} // 水功能区列表

function waterFunctionList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/common/waterFuncList",
    method: "get",
    params: data
  });
} // 水功能区详情

function waterFunctionDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/common/waterFuncDetail",
    method: "get",
    params: data
  });
}
/*
首页涉水污染源
 */

function involveWater(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/pollution/stat",
    method: "get",
    params: data
  });
}
/*
首页涉水污染源详情
 */

function sewageDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/pollution/sewageDetail",
    method: "get",
    params: data
  });
}
/*
排口详情-排查列表
 */

function sewagePcDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/pollution/sewagePcDetail",
    method: "get",
    params: data
  });
}
/*
排口详情-溯源列表
 */

function sewageSyDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/pollution/sewageSyDetail",
    method: "get",
    params: data
  });
}
/*
排口详情-监测列表
 */

function sewageJcDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/pollution/sewageJcDetail",
    method: "get",
    params: data
  });
}
/*
排口详情-整治列表
 */

function sewageZzDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/pollution/sewageZzDetail",
    method: "get",
    params: data
  });
}
/*
涉水污染源列表
 */

function pollutionList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/pollution/sswrylb",
    method: "get",
    params: data
  });
}
/*
首页涉水污染源列表tab总数
 */

function sewageStat(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/pollution/sewageStat",
    method: "get",
    params: data
  });
}
/*
流域-河道信息统计
 */

function riverCourseStat(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/BasicData/riverCourseStat",
    method: "get",
    params: data
  });
}
/*
流域-河道情况
 */

function riverCourseList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/BasicData/riverCourseList",
    method: "get",
    params: data
  });
}
/*
流域-根据流域查询河道下拉框
 */

function waterList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + "/water/basin/waterList",
    method: "get",
    params: data
  });
}

/***/ }),

/***/ "./src/assets/waterHomePage/排口.png":
/*!*****************************************!*\
  !*** ./src/assets/waterHomePage/排口.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAOGSURBVFiFtZdNbxtVFIafGaz4gyBZSvhYoYLkVlUQQWKZDbBKoihSJdi2f6IWW1YgUcSCBRIr1C7YQDclIvkDhlIWpYIClXdpUW01pthxXKfi3peF74znjscfIeZIlmfuHfs59573nHMnIGWf1ev53nOFi0JbwJqRlizCCAzCShgJA4lrYUfm47GWtarZkB29Elz9Olh5muQFyZsPH+5fDgKuRPdG4r/B3TyDe+vG3HX127Orn4w48FHz/i7S+kngE+dTcH+Mvb1zb2wAhNHKZ4HbxB9Ng9vxcAxaf+f325cBgg+khXzz/vEscJP482lwb96Hx4ziM81CWGg+uOTDwQjsCeD2BHCbWGD7nxcv5pza3cRwB95aLHNmIY+cc3IfBEII+LixP9k5J1A74hBRiLZywJqnUufxmYU8r+aL6Sz1bLu8zPXHjybCPecScKejtZyVltJwI+KVTzILnC2UULTSeIuJ72/3DrPhg0Uv5dLw6Iez2IXyMhfKyxOfudZq8OXBQxcKD46RCG0KHolmNhem2+vFxVTR8ooSuXEpknTgXr8HJISIUCJMg3E3I7xnf+4djoUbRC4LboYk7vV7XGnuU8mXhvFlmHrpmI/oQGK1tIgFfjrqJArUgJvLyk8rxSu60T6gki/x/ksvnzocXzz6k8+bD7z+EY5LkWh7rQbpNg+71e148FiEabjRUAG/PTlitqScblFYkr0izMpP65B/9HsYxPnCs3Nx4Mdue6R/hBnFId4BIc7NCX7rqJOAEzevMAseifCbxwczF6VZHMgq1+G4/JRLq3fLz8/FgZvdtt9l3XeYBbdu0b/0unOriN8ftoe9Jm5UEEax8DoY4tf+EVbiteLpNXCzmwV3IYhTL5WfEpyfAzyyNDwKRZjZCyS++qsZ1/XT2qeNfQf0O6+A0EIrXRyisKyU5rMDte7fA/Wn4EArZ6SaQdtZh0tJ3ImFqNSxLNEBSXRG+WM/OPVnwCEIajmDdqy0PdCBX5SuHjTGHqeSndMfc/FOzGfCgQB2go16PV8InvRHKuKYg+S84ACd4gv5cLdSObZW1Vnhw9PzdHh0PsiCC6qsrDyNX80263d2jbXrWUVp0okmCfccjvI+A07AXufNt4evZgDfVVY3jKX6f8MF1QjudODbe3fvLjTC/iWD3TJyr+djyrX/AjoW3iIIagHstJu9a2xuHid5/wLUdPL7OavObgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/waterHomePage/涉水.png":
/*!*****************************************!*\
  !*** ./src/assets/waterHomePage/涉水.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAMcSURBVFiFtZdNbExRFMd/986jVjYTqrRKFfGREAlBY0F8tNGNBSISNrYk6CzsuiRtJK0tCxIL1qVlQTdjQ2Il8c20VYmke9Q9x2K+3ryPmfeeuMnk5t55c/7/e87/f95cQ2Do4/E2Z9vPAYNAHyJ5xIEIqJTn6rr60cDa/7yTBdQVEZnIrbB3zanh3348418sPnkwZJSR2kYwWFrwiOdVXGHJ5RujIQJ/ph5Ogvb/G3jlGY0gVIvjQHXKuzo6AGCrJ28NLo2BIvdjwNUHLgLO9S9evzQEYPTNw6VuVn81gidPrVm5Bp0vpS4F6sjNm2XWzer5rOCIoPMlbP9pTHtXKnBEcCsXz9mK2jOLCnXwvYQ9fjZBiQL7KoNexWrx4C2CmfYuzK4D9QymOoDr8xDJNwWJCWbaOzE792M6usv94+V0huxJ3kvrb3vsFGZVV71xzX9FX06jc5/K3+85hM58RGc+xINrPb6XCnzHPlBFHt0HFXTuS81epqMbVGHNeow4tPQuUVa9OGZROtDvJfTVdCiY3X0QVq+Duc/oi6fozPvEpfAag0V0Nh9j/fY1Yt+hs5/Q4pNMLrLRYmteimAwnfmY0EXhbCcWYe7CteCLM3bI/TH0y9smBwtmIIkO0gzRphZuEHbk2yqKcYphunsT68DG2SNUijRj7cbEOrBxzPylqHa7VMMP3kQHNhbctzar0xEw6zbHZDVcimgRhhyhqRNg1m9KZEkblZZwujIQOHQiDB7MRM0FLZqF2Xs4NQGUluBlEbb6A5nWAdUMbNiK6dnSXISqWJwsNAO3e49kIgBgjp6M10G5rAsWpNjIKsC0syc7gd7tmA3bwqWoakopWkQn4upk9x3FrO3NTADADJyJBgewTBgdv9jmzPKfUTowXT31H9VmB2hgX6j1fz9QZdZ3ryPdlOvMtxmAxbFrQ0ZkpHU/yHgTigBXpbDkzrPR+tXsZmES5/oTBftHcNAp7/bz+tUMwLsyMqBOCv8bXJVCFRwCt2MAHR5e6nI/zqMyiP7pQzSfGDzYzCpWQylimcgta7tnbk3+8uP9BX31CmbHpztaAAAAAElFTkSuQmCC"

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

/***/ "./src/views/searchComponents/components/water/waterPollution.vue":
/*!************************************************************************!*\
  !*** ./src/views/searchComponents/components/water/waterPollution.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _waterPollution_vue_vue_type_template_id_19acda0d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./waterPollution.vue?vue&type=template&id=19acda0d&scoped=true& */ "./src/views/searchComponents/components/water/waterPollution.vue?vue&type=template&id=19acda0d&scoped=true&");
/* harmony import */ var _waterPollution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./waterPollution.vue?vue&type=script&lang=js& */ "./src/views/searchComponents/components/water/waterPollution.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _waterPollution_vue_vue_type_style_index_0_id_19acda0d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./waterPollution.vue?vue&type=style&index=0&id=19acda0d&lang=scss&scoped=true& */ "./src/views/searchComponents/components/water/waterPollution.vue?vue&type=style&index=0&id=19acda0d&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _waterPollution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _waterPollution_vue_vue_type_template_id_19acda0d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _waterPollution_vue_vue_type_template_id_19acda0d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "19acda0d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/searchComponents/components/water/waterPollution.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/searchComponents/components/water/waterPollution.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./src/views/searchComponents/components/water/waterPollution.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterPollution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./waterPollution.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/water/waterPollution.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterPollution_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/searchComponents/components/water/waterPollution.vue?vue&type=style&index=0&id=19acda0d&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************!*\
  !*** ./src/views/searchComponents/components/water/waterPollution.vue?vue&type=style&index=0&id=19acda0d&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterPollution_vue_vue_type_style_index_0_id_19acda0d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./waterPollution.vue?vue&type=style&index=0&id=19acda0d&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/water/waterPollution.vue?vue&type=style&index=0&id=19acda0d&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterPollution_vue_vue_type_style_index_0_id_19acda0d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterPollution_vue_vue_type_style_index_0_id_19acda0d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterPollution_vue_vue_type_style_index_0_id_19acda0d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterPollution_vue_vue_type_style_index_0_id_19acda0d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/searchComponents/components/water/waterPollution.vue?vue&type=template&id=19acda0d&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./src/views/searchComponents/components/water/waterPollution.vue?vue&type=template&id=19acda0d&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterPollution_vue_vue_type_template_id_19acda0d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./waterPollution.vue?vue&type=template&id=19acda0d&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/water/waterPollution.vue?vue&type=template&id=19acda0d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterPollution_vue_vue_type_template_id_19acda0d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_waterPollution_vue_vue_type_template_id_19acda0d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/waterHomePage/components/cityWater.vue":
/*!**********************************************************!*\
  !*** ./src/views/waterHomePage/components/cityWater.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cityWater_vue_vue_type_template_id_b074c552_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cityWater.vue?vue&type=template&id=b074c552&scoped=true& */ "./src/views/waterHomePage/components/cityWater.vue?vue&type=template&id=b074c552&scoped=true&");
/* harmony import */ var _cityWater_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cityWater.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/components/cityWater.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _cityWater_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cityWater.vue?vue&type=style&index=0&lang=scss& */ "./src/views/waterHomePage/components/cityWater.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _cityWater_vue_vue_type_style_index_1_id_b074c552_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cityWater.vue?vue&type=style&index=1&id=b074c552&lang=scss&scoped=true& */ "./src/views/waterHomePage/components/cityWater.vue?vue&type=style&index=1&id=b074c552&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _cityWater_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cityWater_vue_vue_type_template_id_b074c552_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cityWater_vue_vue_type_template_id_b074c552_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b074c552",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/components/cityWater.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/components/cityWater.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./src/views/waterHomePage/components/cityWater.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityWater_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./cityWater.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/cityWater.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityWater_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/components/cityWater.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************!*\
  !*** ./src/views/waterHomePage/components/cityWater.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityWater_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./cityWater.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/cityWater.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityWater_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityWater_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityWater_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityWater_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/waterHomePage/components/cityWater.vue?vue&type=style&index=1&id=b074c552&lang=scss&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/components/cityWater.vue?vue&type=style&index=1&id=b074c552&lang=scss&scoped=true& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityWater_vue_vue_type_style_index_1_id_b074c552_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./cityWater.vue?vue&type=style&index=1&id=b074c552&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/cityWater.vue?vue&type=style&index=1&id=b074c552&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityWater_vue_vue_type_style_index_1_id_b074c552_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityWater_vue_vue_type_style_index_1_id_b074c552_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityWater_vue_vue_type_style_index_1_id_b074c552_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityWater_vue_vue_type_style_index_1_id_b074c552_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/waterHomePage/components/cityWater.vue?vue&type=template&id=b074c552&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./src/views/waterHomePage/components/cityWater.vue?vue&type=template&id=b074c552&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityWater_vue_vue_type_template_id_b074c552_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./cityWater.vue?vue&type=template&id=b074c552&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/cityWater.vue?vue&type=template&id=b074c552&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityWater_vue_vue_type_template_id_b074c552_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityWater_vue_vue_type_template_id_b074c552_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/waterHomePage/drinkDetail/components/cityDrink.vue":
/*!**********************************************************************!*\
  !*** ./src/views/waterHomePage/drinkDetail/components/cityDrink.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cityDrink_vue_vue_type_template_id_f6350ac4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cityDrink.vue?vue&type=template&id=f6350ac4&scoped=true& */ "./src/views/waterHomePage/drinkDetail/components/cityDrink.vue?vue&type=template&id=f6350ac4&scoped=true&");
/* harmony import */ var _cityDrink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cityDrink.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/drinkDetail/components/cityDrink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _cityDrink_vue_vue_type_style_index_0_id_f6350ac4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cityDrink.vue?vue&type=style&index=0&id=f6350ac4&lang=scss&scoped=true& */ "./src/views/waterHomePage/drinkDetail/components/cityDrink.vue?vue&type=style&index=0&id=f6350ac4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _cityDrink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cityDrink_vue_vue_type_template_id_f6350ac4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _cityDrink_vue_vue_type_template_id_f6350ac4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f6350ac4",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/drinkDetail/components/cityDrink.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/drinkDetail/components/cityDrink.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./src/views/waterHomePage/drinkDetail/components/cityDrink.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityDrink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./cityDrink.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/drinkDetail/components/cityDrink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityDrink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/drinkDetail/components/cityDrink.vue?vue&type=style&index=0&id=f6350ac4&lang=scss&scoped=true&":
/*!********************************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/drinkDetail/components/cityDrink.vue?vue&type=style&index=0&id=f6350ac4&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityDrink_vue_vue_type_style_index_0_id_f6350ac4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./cityDrink.vue?vue&type=style&index=0&id=f6350ac4&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/drinkDetail/components/cityDrink.vue?vue&type=style&index=0&id=f6350ac4&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityDrink_vue_vue_type_style_index_0_id_f6350ac4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityDrink_vue_vue_type_style_index_0_id_f6350ac4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityDrink_vue_vue_type_style_index_0_id_f6350ac4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityDrink_vue_vue_type_style_index_0_id_f6350ac4_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/waterHomePage/drinkDetail/components/cityDrink.vue?vue&type=template&id=f6350ac4&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/drinkDetail/components/cityDrink.vue?vue&type=template&id=f6350ac4&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityDrink_vue_vue_type_template_id_f6350ac4_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./cityDrink.vue?vue&type=template&id=f6350ac4&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/drinkDetail/components/cityDrink.vue?vue&type=template&id=f6350ac4&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityDrink_vue_vue_type_template_id_f6350ac4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_cityDrink_vue_vue_type_template_id_f6350ac4_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3NlYXJjaENvbXBvbmVudHMvY29tcG9uZW50cy93YXRlci93YXRlclBvbGx1dGlvbi52dWUiLCJ3ZWJwYWNrOi8vL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvY2l0eVdhdGVyLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvZHJpbmtEZXRhaWwvY29tcG9uZW50cy9jaXR5RHJpbmsudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zZWFyY2hDb21wb25lbnRzL2NvbXBvbmVudHMvd2F0ZXIvd2F0ZXJQb2xsdXRpb24udnVlPzRmZTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy9jaXR5V2F0ZXIudnVlPzQ4MDciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvZHJpbmtEZXRhaWwvY29tcG9uZW50cy9jaXR5RHJpbmsudnVlPzZlYWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3NlYXJjaENvbXBvbmVudHMvY29tcG9uZW50cy93YXRlci93YXRlclBvbGx1dGlvbi52dWU/MDkxNCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL2NpdHlXYXRlci52dWU/NTJhZCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL2NpdHlXYXRlci52dWU/MTk5ZCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9kcmlua0RldGFpbC9jb21wb25lbnRzL2NpdHlEcmluay52dWU/NTEyZiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2VhcmNoQ29tcG9uZW50cy9jb21wb25lbnRzL3dhdGVyL3dhdGVyUG9sbHV0aW9uLnZ1ZT9lNzk4Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvY2l0eVdhdGVyLnZ1ZT83MTcxIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvY2l0eVdhdGVyLnZ1ZT85MTA1Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2RyaW5rRGV0YWlsL2NvbXBvbmVudHMvY2l0eURyaW5rLnZ1ZT82YTU1Iiwid2VicGFjazovLy8uL3NyYy9hcGkvd2F0ZXJfZW52aXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy93YXRlckhvbWVQYWdlL+aOkuWPoy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy93YXRlckhvbWVQYWdlL+a2ieawtC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3NldGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3NlYXJjaENvbXBvbmVudHMvY29tcG9uZW50cy93YXRlci93YXRlclBvbGx1dGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3NlYXJjaENvbXBvbmVudHMvY29tcG9uZW50cy93YXRlci93YXRlclBvbGx1dGlvbi52dWU/ZDI0YiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2VhcmNoQ29tcG9uZW50cy9jb21wb25lbnRzL3dhdGVyL3dhdGVyUG9sbHV0aW9uLnZ1ZT8zODYwIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zZWFyY2hDb21wb25lbnRzL2NvbXBvbmVudHMvd2F0ZXIvd2F0ZXJQb2xsdXRpb24udnVlPzU4YjciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy9jaXR5V2F0ZXIudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvY2l0eVdhdGVyLnZ1ZT9hNDg5Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvY2l0eVdhdGVyLnZ1ZT82YTA1Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvY2l0eVdhdGVyLnZ1ZT80NWNjIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvY2l0eVdhdGVyLnZ1ZT9iN2I3Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2RyaW5rRGV0YWlsL2NvbXBvbmVudHMvY2l0eURyaW5rLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9kcmlua0RldGFpbC9jb21wb25lbnRzL2NpdHlEcmluay52dWU/YWMwMCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9kcmlua0RldGFpbC9jb21wb25lbnRzL2NpdHlEcmluay52dWU/YzM5YSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9kcmlua0RldGFpbC9jb21wb25lbnRzL2NpdHlEcmluay52dWU/YTU3MyJdLCJuYW1lcyI6WyJiYXNlVXJsIiwicmFua2luZyIsImRhdGEiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwicGFyYW1zIiwieWVhclJhbmtMaXN0IiwicmFua0xpc3QiLCJyYW5rRGV0YWlsIiwic2NhbGVNYXJrcyIsIndhdGVyQmFzaWNEYXRhIiwic2VjdGlvbkluZm8iLCJzZWN0aW9uTGlzdCIsInN0YXRpb25JbmZvIiwidXBTdHJlYW1PdmVyIiwibGFrZVNpdGVMaXN0IiwicXVlcnlTZWN0aW9uSW5mbyIsInN0YXRpb25EZXMiLCJyaXZlckNvdXJzZURldGFpbCIsImhvdXJMaW5lIiwid2F0ZXJQb2xsdXRpb24iLCJ1cHN0cmVhbVBvbGx1dGlvbiIsImdldFVwTGlzdCIsInVwU3RyZWFtV2F0ZXIiLCJ1cHN0cmVhbVNld2FnZSIsInB1cmlmaWNhdGlvblBsYW50IiwiZGF0YVRhYmxlIiwiamhjSW5mbyIsImx5QmFzaW4iLCJseURldGFpbCIsImRjU3oiLCJkY1N6TGlzdCIsInl5c0luZm8iLCJza0xpc3QiLCJ3YXRlckJvZHlMaXN0Iiwid2F0ZXJQbGFudExpc3QiLCJyZXNlcnZvaXJMaXN0Iiwid2F0ZXJQbGFudFJpdmVyIiwid2F0ZXJQbGFudFNpdGUiLCJyZXNvdXJjZVN0YXQiLCJ3YXRlckZ1bmN0aW9uTGlzdCIsIndhdGVyRnVuY3Rpb25EZXRhaWwiLCJpbnZvbHZlV2F0ZXIiLCJzZXdhZ2VEZXRhaWwiLCJzZXdhZ2VQY0RldGFpbCIsInNld2FnZVN5RGV0YWlsIiwic2V3YWdlSmNEZXRhaWwiLCJzZXdhZ2VaekRldGFpbCIsInBvbGx1dGlvbkxpc3QiLCJzZXdhZ2VTdGF0Iiwicml2ZXJDb3Vyc2VTdGF0Iiwicml2ZXJDb3Vyc2VMaXN0Iiwid2F0ZXJMaXN0IiwiZ2V0VGhpc0RhdGUiLCJlIiwibm93VGltZSIsInRpbWUiLCJEYXRlIiwieSIsImdldEZ1bGxZZWFyIiwibG0iLCJnZXRNb250aCIsIm0iLCJkIiwiZ2V0RGF0ZSIsImgiLCJnZXRIb3VycyIsIk0iLCJnZXRNaW51dGVzIiwicyIsImdldFNlY29uZHMiLCJmb3JtYXREYXRlIiwiZGF0ZSIsIm4iLCJob3VyRGF0ZUZvcm1hdCIsInllYXIiLCJtb250aCIsImRheSIsImhvdXIiLCJtb250aERhdGVGb3JtYXQiLCJmb3VySG91clRpbWUiLCJub3dEYXRlIiwiaG91cnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkJBO0FBQ0E7QUFDQSx3QkFEQTtBQUVBLE1BRkEsa0JBRUE7QUFDQTtBQUNBLG1CQURBO0FBRUE7QUFGQTtBQUlBLEdBUEE7QUFRQSxTQVJBLHFCQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FaQTtBQWFBO0FBQ0EsYUFEQSx1QkFDQTtBQUFBOztBQUNBO0FBQ0E7QUFDQTtBQURBLFNBRUEsSUFGQSxDQUVBO0FBQ0E7QUFDQSxPQUpBO0FBS0EsS0FSQTtBQVNBLGFBVEEscUJBU0EsSUFUQSxFQVNBO0FBQ0E7QUFDQTtBQUNBLHVDQURBO0FBRUE7QUFDQTtBQURBO0FBRkE7QUFNQSxPQVBB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QUN2Q2Y7QUFBQTtBQUFBLHdDQUErVCxDQUFnQiwrVUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FuVjtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvRztBQUN2QztBQUNMO0FBQ2M7QUFDd0I7OztBQUc5RjtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwrRUFBTTtBQUNSLEVBQUUsZ0dBQU07QUFDUixFQUFFLHlHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN4Q2Y7QUFBQTtBQUFBLHdDQUE4UyxDQUFnQiwwVUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FsVTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvRztBQUN2QztBQUNMO0FBQ3NDOzs7QUFHOUY7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsK0VBQU07QUFDUixFQUFFLGdHQUFNO0FBQ1IsRUFBRSx5R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBMFQsQ0FBZ0IsMFVBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBOVU7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvMjcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNhcmQtbm8tYm9yZGVyLXdyYXBwZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLW5vLWJvcmRlci10aXRsZVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPua2ieawtOaxoeafk+a6kDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwic291cmNlLXdyYXBwZXJcIiBzdHlsZT1cImZsZXgtd3JhcDogd3JhcFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic291cmNlLWJveFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzb3VyY2UtbmFtZVwiIEBjbGljaz1cIm9uRGV0YWlscygn5raJ5rC05rGh5p+T5rqQJylcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMvd2F0ZXJIb21lUGFnZS/mtonmsLQucG5nXCIvPua2ieawtOaxoeafk+a6kFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJwYWRkaW5nLWxlZnQ6IDIwcHhcIj5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAyMHB4O2NvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDEpXCI+e3tvYmoud3J5fX08L3NwYW4+5a62XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic291cmNlLWJveFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzb3VyY2UtbmFtZVwiIEBjbGljaz1cIm9uRGV0YWlscygn5o6S5Y+j5qGj5qGIJylcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMvd2F0ZXJIb21lUGFnZS/mjpLlj6MucG5nXCIvPuaOkuWPo+aho+ahiFxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJwYWRkaW5nLWxlZnQ6IDIwcHhcIj5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAyMHB4O2NvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDEpXCI+e3tvYmoucGt9fTwvc3Bhbj7kuKpcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IHtpbnZvbHZlV2F0ZXJ9IGZyb20gJ0AvYXBpL3dhdGVyX2VudmlyJztcclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcIndhdGVyUG9sbHV0aW9uXCIsXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHNlYXJjaE9iajoge30sXHJcbiAgICAgICAgb2JqOiB7fVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgdGhpcy5zZWFyY2hPYmogPSB0aGlzLiRzdG9yZS5zdGF0ZS5zZWFyY2hPYmo7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VhcmNoT2JqKVxyXG4gICAgICB0aGlzLnF1ZXJ5RGF0YSgpXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBxdWVyeURhdGEoKSB7XHJcbiAgICAgICAgbGV0IHF1ZXJ5ID0gdGhpcy5zZWFyY2hPYmoucGFyYW1ldGVyLmluZGV4T2YoJ+a1geWfnycpID4gLTFcclxuICAgICAgICBpbnZvbHZlV2F0ZXIoe1xyXG4gICAgICAgICAgZGl2aXNpb25OYW1lOiB0aGlzLnNlYXJjaE9iai5wYXJhbWV0ZXIsXHJcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgdGhpcy5vYmogPSByZXMuZGF0YTtcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBvbkRldGFpbHMoZmxhZykge1xyXG4gICAgICAgIGlmIChmbGFnID09PSAn5raJ5rC05rGh5p+T5rqQJykge1xyXG4gICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICBuYW1lOiAnaW52b2x2ZVdhdGVyUG9sbHV0aW9uJyxcclxuICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICB4enFoOiB0aGlzLnNlYXJjaE9iai5wYXJhbWV0ZXJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9IGVsc2UgaWYgKGZsYWcgPT09ICfmjpLlj6PmoaPmoYgnKSB7XHJcbiAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgIG5hbWU6ICd1cHN0cmVhbU91dGxldCcsXHJcbiAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgeHpxaDogdGhpcy5zZWFyY2hPYmoucGFyYW1ldGVyXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICBAaW1wb3J0IFwiQC92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvY2FyZE5vQm9yZGVyLnNjc3NcIjtcclxuXHJcbiAgLnNvdXJjZS13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgLnNvdXJjZS1ib3gge1xyXG4gICAgICB3aWR0aDogMjYlO1xyXG4gICAgICBtYXJnaW46IDNweDtcclxuICAgICAgcGFkZGluZzogNnB4IDhweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTAsIDI1MCwgMjU1LCAxKTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMzMsIDIzMywgMjU1LCAxKTtcclxuICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG5cclxuICAgICAgLnNvdXJjZS1uYW1lIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuXHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjYXJkLW5vLWJvcmRlci13cmFwcGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1uby1ib3JkZXItdGl0bGVcIiBAY2xpY2s9XCIkcm91dGVyLnB1c2goe25hbWU6ICd3YXRlckhvbWVQYWdlJ30pXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+e3t0aXRsZX19PC9kaXY+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwidGltZVwiPue0r+iuoeaIquiHs3t7IHRvZGF5IH19IDwvc3Bhbj5cclxuICAgICAgPCEtLTxzcGFuIGNsYXNzPVwidGltZVwiPlxyXG4gICAgICAgIOafpeeci+abtOWkmlxyXG4gICAgICAgIDx2YW4taWNvbiBuYW1lPVwiYXJyb3dcIiAvPlxyXG4gICAgICA8L3NwYW4+LS0+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0tPGRpdiBjbGFzcz1cImZzXCIgc3R5bGU9XCJqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kOyBtYXJnaW4tdG9wOiA1cHhcIj5cclxuICAgICAgPHZhbi1kcm9wZG93bi1tZW51IGFjdGl2ZS1jb2xvcj1cIiMxOTg5ZmFcIiBzdHlsZT1cIndpZHRoOiA1MCVcIj5cclxuICAgICAgICA8dmFuLWRyb3Bkb3duLWl0ZW0gdi1tb2RlbD1cInZhbHVlMVwiIDpvcHRpb25zPVwib3B0aW9uMVwiIC8+XHJcbiAgICAgICAgPHZhbi1kcm9wZG93bi1pdGVtIHYtbW9kZWw9XCJhcmVhXCIgOm9wdGlvbnM9XCJvcHRpb24yXCIgLz5cclxuICAgICAgPC92YW4tZHJvcGRvd24tbWVudT5cclxuICAgIDwvZGl2Pi0tPlxyXG4gICAgPGRpdiBjbGFzcz1cImJhc2Utd3JhcHBlclwiIHYtZm9yPVwiKGl0ZW0sIGkpIGluIHdhdGVyZGF0YVwiIEBjbGljaz1cInRvRGV0YWlsKGl0ZW0udHlwZSlcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImJhc2UtdGl0bGVcIj5cclxuICAgICAgICA8ZGl2IHYtaHRtbD1cImNvbnRyb2xJbWcoaXRlbS50eXBlKVwiLz5cclxuICAgICAgICA8IS0te3tjb250cm9sSW1nKGl0ZW0udHlwZSl9fVxyXG4gICAgICAgIDxpbWcgdi1pZj1cIml0ZW0udHlwZSA9PSAn5Zu95o6nJ1wiIHNyYz1cIkAvYXNzZXRzL+WbvS5wbmdcIiBzdHlsZT1cIndpZHRoOiAyMHB4XCIgLz5cclxuICAgICAgICA8aW1nIHYtaWY9XCJpdGVtLnR5cGUgPT0gJ+ecgeaOpydcIiBzcmM9XCJAL2Fzc2V0cy/nnIEucG5nXCIgc3R5bGU9XCJ3aWR0aDogMjBweFwiIC8+XHJcbiAgICAgICAgPGltZyB2LWlmPVwiaXRlbS50eXBlID09ICfluILmjqcnXCIgc3JjPVwiQC9hc3NldHMv5biCLnBuZ1wiIHN0eWxlPVwid2lkdGg6IDIwcHhcIiAvPi0tPlxyXG4gICAgICAgIDwhLS08ZGl2IHN0eWxlPVwid2lkdGg6IDMwJTsgcGFkZGluZy1sZWZ0OiAxMnB4XCI+XHJcbiAgICAgICAgICDovr7moIcgPHNwYW4gc3R5bGU9XCJmb250LXdlaWdodDogYm9sZFwiPnt7IGl0ZW0udXBUb1N0YW5kYXJkIH19PC9zcGFuXHJcbiAgICAgICAgICA+5LiqXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT1cIndpZHRoOiA3MCU7IHRleHQtYWxpZ246IGNlbnRlclwiPlxyXG4gICAgICAgICAg5oC7IDxzcGFuIHN0eWxlPVwiZm9udC13ZWlnaHQ6IGJvbGRcIj57eyBpdGVtLm51bSB9fTwvc3BhblxyXG4gICAgICAgICAgPuS4qlxyXG4gICAgICAgIDwvZGl2Pi0tPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmc1wiIHN0eWxlPVwibWFyZ2luOiAwIDE3cHggMFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXN1bW1hcnlcIj5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6IHJnYmEoNjgsIDEyMywgMjUyLCAxKVwiPuS8mOiJr+awtOS9kzwvc3Bhbj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9sbHV0ZU51bVwiPnt7IGl0ZW0uZXhjZWxsZW50IH19PC9zcGFuPuS4qlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtc3VtbWFyeVwiPlxyXG4gICAgICAgICAgPHNwYW4gc3R5bGU9XCJjb2xvcjogcmdiYSg2OCwgMTIzLCAyNTIsIDEpXCI+5YqjVuexuzwvc3Bhbj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9sbHV0ZU51bVwiIHN0eWxlPVwiY29sb3I6IHJnYmEoMjU0LCA3OSwgMiwgMSlcIj57eyBpdGVtLnBvb3IgfX08L3NwYW4+5LiqXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1zdW1tYXJ5XCI+XHJcbiAgICAgICAgICA8c3BhbiBzdHlsZT1cImNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSlcIj7mgLs8L3NwYW4+XHJcbiAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvbGx1dGVOdW1cIj57eyBpdGVtLm51bSB9fTwvc3Bhbj7kuKpcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmc1wiIHN0eWxlPVwibWFyZ2luOiAzcHggMTNweCAwIDNweFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcm9ncmVzcy13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhbmRhcmRcIiA6c3R5bGU9XCInd2lkdGg6JyArIGl0ZW0uZXhjZWxsZW50UmF0ZVwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3BhbiBzdHlsZT1cImNvbG9yOiAjMTIxMjM2OyBmb250LXNpemU6IDE0cHg7IGZvbnQtd2VpZ2h0OiBib2xkXCI+e3sgaXRlbS5leGNlbGxlbnRSYXRlIH19PC9zcGFuPjxici8+XHJcbiAgICAgICAgICA8c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMTJweDtjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO2ZvbnQtd2VpZ2h0OiBub3JtYWxcIj7kvJjoia/njoc8L3NwYW4+XHJcbiAgICAgICAgICA8IS0tIDxzcGFuIHN0eWxlPVwiY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtmb250LXNpemU6IDEycHhcIj4lPC9zcGFuPiAtLT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgeyBnZXRUaGlzRGF0ZSB9IGZyb20gXCJAL3V0aWxzL3NldGRhdGVcIjtcclxuaW1wb3J0IHsgd2F0ZXJCYXNpY0RhdGEgfSBmcm9tIFwiQC9hcGkvd2F0ZXJfZW52aXJcIjtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwiY2l0eVdhdGVyXCIsXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRvZGF5OiBnZXRUaGlzRGF0ZSgpLFxyXG4gICAgICBhcmVhOiBcIuaYhuaYjuW4glwiLFxyXG4gICAgICB3YXRlcmRhdGE6IFtdLFxyXG4gICAgICBzZWFyY2hPYmo6IHt9LFxyXG4gICAgICB0aXRsZTogbnVsbCxcclxuICAgICAgY291bnRyeUltZzogcmVxdWlyZSgnLi4vLi4vLi4vYXNzZXRzL+WbvS5wbmcnKSxcclxuICAgICAgcHJvdmluY2VJbWc6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy/nnIEucG5nJyksXHJcbiAgICAgIGNpdHlJbWc6IHJlcXVpcmUoJy4uLy4uLy4uL2Fzc2V0cy/luIIucG5nJyksXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIHRoaXMuc2VhcmNoT2JqID0gdGhpcy4kc3RvcmUuc3RhdGUuc2VhcmNoT2JqO1xyXG4gICAgdGhpcy5sb2FkRGF0YSgpO1xyXG4gICAgaWYodGhpcy5zZWFyY2hPYmoucGFyYW1ldGVyPT09J+aYhuaYjuW4gicpe1xyXG4gICAgICB0aGlzLnRpdGxlID0gJ+WFqOW4guawtOeOr+Wig+amguaLrCdcclxuICAgIH1lbHNle1xyXG4gICAgICB0aGlzLnRpdGxlID0gdGhpcy5zZWFyY2hPYmoucGFyYW1ldGVyKyfmpoLmi6wnXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBsb2FkRGF0YSgpIHtcclxuICAgICAgd2F0ZXJCYXNpY0RhdGEoeyBkYXRhVHlwZTogdGhpcy5zZWFyY2hPYmoucGFyYW1ldGVyIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMud2F0ZXJkYXRhID0gcmVzLmRhdGE7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHRvRGV0YWlsKGZsYWcpIHtcclxuICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgIG5hbWU6IFwiZXhhbWluZVNpdGVMaXN0XCIsXHJcbiAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgIHR5cGU6IGZsYWcsXHJcbiAgICAgICAgICB4enFoOiB0aGlzLnNlYXJjaE9iai5wYXJhbWV0ZXIuaW5kZXhPZign5rWB5Z+fJyk9PT0tMT90aGlzLnNlYXJjaE9iai5wYXJhbWV0ZXI6JycsXHJcbiAgICAgICAgICBseTogdGhpcy5zZWFyY2hPYmoucGFyYW1ldGVyLmluZGV4T2YoJ+a1geWfnycpPi0xP3RoaXMuc2VhcmNoT2JqLnBhcmFtZXRlcjonJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGNvbnRyb2xJbWcodHlwZSl7XHJcbiAgICAgIGlmKHR5cGUpe1xyXG4gICAgICAgIGxldCBpbWdIdG1sID0gJyc7XHJcbiAgICAgICAgZm9yKGxldCBpIGluIHR5cGUpe1xyXG4gICAgICAgICAgaWYodHlwZVtpXT09PSflm70nKXtcclxuICAgICAgICAgICAgaW1nSHRtbCs9JzxpbWcgc3JjPVwiJyt0aGlzLmNvdW50cnlJbWcrJ1wiIHN0eWxlPVwid2lkdGg6IDIwcHhcIi8+J1xyXG4gICAgICAgICAgfWVsc2UgaWYodHlwZVtpXT09PSfnnIEnKXtcclxuICAgICAgICAgICAgaW1nSHRtbCs9JzxpbWcgc3JjPVwiJyt0aGlzLnByb3ZpbmNlSW1nKydcIiBzdHlsZT1cIndpZHRoOiAyMHB4XCIvPidcclxuICAgICAgICAgIH1lbHNlIGlmKHR5cGVbaV09PT0n5biCJyl7XHJcbiAgICAgICAgICAgIGltZ0h0bWwrPSc8aW1nIHNyYz1cIicrdGhpcy5jaXR5SW1nKydcIiBzdHlsZT1cIndpZHRoOiAyMHB4XCIvPidcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGltZ0h0bWxcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIGFyZWEodmFsLCBvbGQpIHtcclxuICAgICAgaWYgKHZhbCAhPSBvbGQpIHtcclxuICAgICAgICB0aGlzLmxvYWREYXRhKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuICBAaW1wb3J0IFwiQC92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvY2FyZE5vQm9yZGVyLnNjc3NcIjtcclxuXHJcbi52YW4tZHJvcGRvd24tbWVudV9fdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG59XHJcbi52YW4tZHJvcGRvd24tbWVudV9fYmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBoZWlnaHQ6IDI4cHg7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG4udmFuLWRyb3Bkb3duLW1lbnVfX2l0ZW0ge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NiwgMjQ2LCAyNDYsIDEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG48L3N0eWxlPlxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbi5iYXNlLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDExcHggMCAwO1xyXG4gIHBhZGRpbmc6IDZweCAzcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI0MiwgMjQ3LCAyNTUsIDEpIDAlLCByZ2JhKDI0MiwgMjQ3LCAyNTUsIDApIDEwMCUpO1xyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHdpZHRoOiAxcHg7XHJcbiAgICBoZWlnaHQ6IDc1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDEwNywgMTU1LCAyNTAsIDAuNSk7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDI0cHg7XHJcbiAgICBsZWZ0OiA2cHg7XHJcbiAgfVxyXG5cclxuICAmOjphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIlwiO1xyXG4gICAgd2lkdGg6IDVweDtcclxuICAgIGhlaWdodDogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxMDcsIDE1NSwgMjUwLCAwLjUpO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBsZWZ0OiA0cHg7XHJcbiAgfVxyXG5cclxuICAuYmFzZS10aXRsZSB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNhcmQtc3VtbWFyeSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHdpZHRoOiAyNyU7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDY4LCAxMjMsIDI1MiwgMC4wNSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDY4LCAxMjMsIDI1MiwgMC4xKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcblxyXG4gICAgLm51bSB7XHJcbiAgICAgIGNvbG9yOiAjNTI3MWZmO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuXHJcbiAgICAucG9sbHV0ZU51bSB7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDEpO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5wcm9ncmVzcy13cmFwcGVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgd2lkdGg6IDgyJTtcclxuICAgIHBhZGRpbmc6IDAgM3B4O1xyXG4gICAgaGVpZ2h0OiAxM3B4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDgsIDI1MSwgMjU1LCAxKTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoODIsIDExMywgMjU1LCAwLjUpO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDA7XHJcblxyXG4gICAgLnN0YW5kYXJkIHtcclxuICAgICAgaGVpZ2h0OiA5cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCByZ2JhKDAsIDIxMCwgMjU1LCAxKSAwJSwgcmdiYSg0NCwgNjAsIDI1NCwgMSkgMTAwJSk7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAxMHB4IDIwcHggcmdiYSgyMCwgMzEsIDE1OSwgMC4xNSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZC1uby1ib3JkZXItd3JhcHBlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtbm8tYm9yZGVyLXRpdGxlIGZzXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+e3tzZWFyY2hPYmoucGFyYW1ldGVyfX3ppa7nlKjmsLTmupDlnLDmg4XlhrU8L2Rpdj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJ0aW1lXCI+MjAyNOW5tCA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwiZnNcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImRyaW5rXCIgQGNsaWNrPVwidG9EZXRhaWwoJ+W4gue6pycpXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjaXJjbGVcIiBzdHlsZT1cImJhY2tncm91bmQ6IHJnYmEoOTksIDg5LCAyMzMsIDEpXCI+PC9zcGFuPlxyXG4gICAgICAgIOW4gue6pyggPHNwYW4gc3R5bGU9XCJjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAxKTsgZm9udC13ZWlnaHQ6IGJvbGRcIj57eyB5eXNJbmZvLmNpdHlUb3RhbCB9fTwvc3Bhbj4g5Liq77yJPGJyIC8+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGFuZGFyZFwiPui+vuagh3t7IHl5c0luZm8uY2l0eVVwIH195LiqPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImRyaW5rXCIgQGNsaWNrPVwidG9EZXRhaWwoJ+WOv+e6p+S7peS4iicpXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJjaXJjbGVcIiBzdHlsZT1cImJhY2tncm91bmQ6IHJnYmEoMTAwLCAyMDcsIDI0NiwgMSlcIj48L3NwYW4+XHJcbiAgICAgICAg5Y6/57qn5Lul5LiKKCA8c3BhbiBzdHlsZT1cImNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDEpOyBmb250LXdlaWdodDogYm9sZFwiPnt7IHl5c0luZm8udG90YWwgfX08L3NwYW4+IOS4qu+8iTxiciAvPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwic3RhbmRhcmRcIj7ovr7moId7eyB5eXNJbmZvLnVwIH195LiqPC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJmc1wiPlxyXG4gICAgICA8ZGl2IHJlZj1cImJhc2luUmVmXCIgc3R5bGU9XCJoZWlnaHQ6IDEwMHB4OyB3aWR0aDogNTAlXCIgQGNsaWNrPVwidG9EZXRhaWwoJ+W4gue6pycpXCIgLz5cclxuICAgICAgPGRpdiByZWY9XCJjb3VudHlSZWZcIiBzdHlsZT1cImhlaWdodDogMTAwcHg7IHdpZHRoOiA1MCVcIiBAY2xpY2s9XCJ0b0RldGFpbCgn5Y6/57qn5Lul5LiKJylcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgKiBhcyBlY2hhcnRzIGZyb20gXCJlY2hhcnRzXCI7XHJcbmltcG9ydCB7IHl5c0luZm8gfSBmcm9tIFwiQC9hcGkvd2F0ZXJfZW52aXJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcImNpdHlEcmlua1wiLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzZWFyY2hPYmo6IHt9LFxyXG4gICAgICBiYXNpblJlZjogbnVsbCxcclxuICAgICAgY291bnR5UmVmOiBudWxsLFxyXG4gICAgICB5eXNJbmZvOiB7fSxcclxuICAgIH07XHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgdGhpcy5zZWFyY2hPYmogPSB0aGlzLiRzdG9yZS5zdGF0ZS5zZWFyY2hPYmo7XHJcbiAgICB0aGlzLmdldFl5cygpO1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgZ2V0WXlzKCkge1xyXG4gICAgICB5eXNJbmZvKHtcclxuICAgICAgICBiYXNpbjogdGhpcy5zZWFyY2hPYmoucGFyYW1ldGVyXHJcbiAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMueXlzSW5mbyA9IHJlcy5kYXRhO1xyXG4gICAgICAgIGlmICghdGhpcy5iYXNpblJlZikge1xyXG4gICAgICAgICAgdGhpcy5iYXNpblJlZiA9IGVjaGFydHMuaW5pdCh0aGlzLiRyZWZzLmJhc2luUmVmKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRDaGFydCh0aGlzLmJhc2luUmVmLCBcIiM2MzU5RTlcIiwgcmVzLmRhdGEuY2l0eVJhdGV8fCcwJScpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5jb3VudHlSZWYpIHtcclxuICAgICAgICAgIHRoaXMuY291bnR5UmVmID0gZWNoYXJ0cy5pbml0KHRoaXMuJHJlZnMuY291bnR5UmVmKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRDaGFydCh0aGlzLmNvdW50eVJlZiwgXCIjNjRDRkY2XCIsIHJlcy5kYXRhLnJhdGV8fCcwJScpO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBpbml0Q2hhcnQoY2hhcnRJbnN0YW5jZSwgY29sb3IsIGRhdGEpIHtcclxuICAgICAgdmFyIHZhbHVlID0gZGF0YS5yZXBsYWNlKFwiJVwiLCBcIlwiKTtcclxuICAgICAgY29uc3Qgb3B0aW9uID0ge1xyXG4gICAgICAgIHRpdGxlOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHRleHQ6IFwi6L6+5qCH546HXCIsXHJcbiAgICAgICAgICAgIHk6IFwiNzUlXCIsXHJcbiAgICAgICAgICAgIHg6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIHRleHRTdHlsZToge1xyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxMixcclxuICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoMTgsIDE4LCA1NCwgMC41KVwiLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICAgIGFuZ2xlQXhpczoge1xyXG4gICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICBtYXg6ICgxMDAgKiAzNjApIC8gMTgwLCAvLy00NeW6puWIsDIyNeW6pu+8jOS6jOiAheWBj+enu+WAvOaYrzI3MOW6pumZpDM2MOW6plxyXG4gICAgICAgICAgdHlwZTogXCJ2YWx1ZVwiLFxyXG4gICAgICAgICAgc3RhcnRBbmdsZTogMTgwLCAvL+aegeWdkOagh+WIneWni+inkuW6plxyXG4gICAgICAgICAgc3BsaXRMaW5lOiB7XHJcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJhck1heFdpZHRoOiAxOCwgLy/lnIbnjq/lrr3luqZcclxuICAgICAgICByYWRpdXNBeGlzOiB7XHJcbiAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgIHR5cGU6IFwiY2F0ZWdvcnlcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8v5ZyG546v5L2N572u5ZKM5aSn5bCPXHJcbiAgICAgICAgcG9sYXI6IHtcclxuICAgICAgICAgIGNlbnRlcjogW1wiNTAlXCIsIFwiNjAlXCJdLFxyXG4gICAgICAgICAgcmFkaXVzOiBcIjE2MCVcIixcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlcmllczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB0eXBlOiBcImJhclwiLFxyXG4gICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy/kuIrlsYLlnIbnjq/vvIzmmL7npLrmlbDmja5cclxuICAgICAgICAgICAgICAgIHZhbHVlOiB2YWx1ZSxcclxuICAgICAgICAgICAgICAgIGl0ZW1TdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogY29sb3IsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGJhckdhcDogXCItMTAwJVwiLCAvL+afsemXtOi3neemuyzkuIrkuIvkuKTlsYLlnIbnjq/ph43lkIhcclxuICAgICAgICAgICAgY29vcmRpbmF0ZVN5c3RlbTogXCJwb2xhclwiLFxyXG4gICAgICAgICAgICByb3VuZENhcDogdHJ1ZSwgLy/pobbnq6/lnIbop5JcclxuICAgICAgICAgICAgejogMywgLy/lnIbnjq/lsYLnuqfvvIzlkIx6aW5kZXhcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIC8v5LiL5bGC5ZyG546v77yM5pi+56S65pyA5aSn5YC8XHJcbiAgICAgICAgICAgIHR5cGU6IFwiYmFyXCIsXHJcbiAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogMTAwLFxyXG4gICAgICAgICAgICAgICAgaXRlbVN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiNFQUVBRUZcIixcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDAsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGJhckdhcDogXCItMTAwJVwiLFxyXG4gICAgICAgICAgICBjb29yZGluYXRlU3lzdGVtOiBcInBvbGFyXCIsXHJcbiAgICAgICAgICAgIHJvdW5kQ2FwOiB0cnVlLFxyXG4gICAgICAgICAgICB6OiAxLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIC8v5Luq6KGo55uYXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiZ2F1Z2VcIixcclxuICAgICAgICAgICAgc3RhcnRBbmdsZTogMjI1LCAvL+i1t+Wni+inkuW6pu+8jOWQjOaegeWdkOagh1xyXG4gICAgICAgICAgICBlbmRBbmdsZTogLTQ1LCAvL+e7iOatouinkuW6pu+8jOWQjOaegeWdkOagh1xyXG4gICAgICAgICAgICBheGlzTGluZToge1xyXG4gICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzcGxpdExpbmU6IHtcclxuICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXhpc1RpY2s6IHtcclxuICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXhpc0xhYmVsOiB7XHJcbiAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNwbGl0TGFiZWw6IHtcclxuICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcG9pbnRlcjoge1xyXG4gICAgICAgICAgICAgIC8vIOWIhumalOe6v1xyXG4gICAgICAgICAgICAgIHNob3c6IGZhbHNlLCAvL+aYr+WQpuaYvuekuuaMh+mSiFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBkZXRhaWw6IHtcclxuICAgICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uIChwYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSArIFwiJVwiO1xyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgY29sb3I6IFwiIzI3NTVGN1wiLFxyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgICAgICAgICBvZmZzZXRDZW50ZXI6IFswLCAxNV0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRpdGxlOiB7XHJcbiAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfTtcclxuICAgICAgY2hhcnRJbnN0YW5jZS5zZXRPcHRpb24ob3B0aW9uKTtcclxuICAgIH0sXHJcbiAgICB0b0RldGFpbCh0eXBlKSB7XHJcbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICBuYW1lOiBcImRyaW5rRGV0YWlsXCIsXHJcbiAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgIHRpdGxlOiB0eXBlICsgXCLppa7nlKjmsLTmupDlnLBcIixcclxuICAgICAgICAgIGJhc2luOiB0aGlzLnNlYXJjaE9iai5wYXJhbWV0ZXJcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIEBpbXBvcnQgXCJAL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy9jYXJkTm9Cb3JkZXIuc2Nzc1wiO1xyXG4uZHJpbmsge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgd2lkdGg6IDUwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XHJcbiAgLmNpcmNsZSB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogOHB4O1xyXG4gICAgaGVpZ2h0OiA4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIH1cclxuICAuc3RhbmRhcmQge1xyXG4gICAgY29sb3I6IHJnYmEoNjcsIDIwNywgMTI0LCAxKTtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIH1cclxufVxyXG48L3N0eWxlPlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtbm8tYm9yZGVyLXdyYXBwZXJcIiB9LCBbXG4gICAgX3ZtLl9tKDApLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwic291cmNlLXdyYXBwZXJcIiwgc3RhdGljU3R5bGU6IHsgXCJmbGV4LXdyYXBcIjogXCJ3cmFwXCIgfSB9LFxuICAgICAgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNvdXJjZS1ib3hcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzb3VyY2UtbmFtZVwiLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uRGV0YWlscyhcIua2ieawtOaxoeafk+a6kFwiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMvd2F0ZXJIb21lUGFnZS/mtonmsLQucG5nXCIpIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCLmtonmsLTmsaHmn5PmupAgXCIpLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNTdHlsZTogeyBcInBhZGRpbmctbGVmdFwiOiBcIjIwcHhcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoMTgsIDE4LCA1NCwgMSlcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ub2JqLndyeSkpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5fdihcIuWutiBcIiksXG4gICAgICAgICAgXSksXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNvdXJjZS1ib3hcIiB9LCBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzb3VyY2UtbmFtZVwiLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uRGV0YWlscyhcIuaOkuWPo+aho+ahiFwiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMvd2F0ZXJIb21lUGFnZS/mjpLlj6MucG5nXCIpIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCLmjpLlj6PmoaPmoYggXCIpLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNTdHlsZTogeyBcInBhZGRpbmctbGVmdFwiOiBcIjIwcHhcIiB9IH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjIwcHhcIixcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoMTgsIDE4LCA1NCwgMSlcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ub2JqLnBrKSldXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwi5LiqIFwiKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXSksXG4gICAgICBdXG4gICAgKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtbm8tYm9yZGVyLXRpdGxlXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuYW1lXCIgfSwgW192bS5fdihcIua2ieawtOaxoeafk+a6kFwiKV0pLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJjYXJkLW5vLWJvcmRlci13cmFwcGVyXCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtbm8tYm9yZGVyLXRpdGxlXCIsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0uJHJvdXRlci5wdXNoKHsgbmFtZTogXCJ3YXRlckhvbWVQYWdlXCIgfSlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmFtZVwiIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXSksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGltZVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIue0r+iuoeaIquiHs1wiICsgX3ZtLl9zKF92bS50b2RheSkgKyBcIiBcIiksXG4gICAgICAgICAgXSksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX2woX3ZtLndhdGVyZGF0YSwgZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYmFzZS13cmFwcGVyXCIsXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0udG9EZXRhaWwoaXRlbS50eXBlKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYmFzZS10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IGlubmVySFRNTDogX3ZtLl9zKF92bS5jb250cm9sSW1nKGl0ZW0udHlwZSkpIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmc1wiLCBzdGF0aWNTdHlsZTogeyBtYXJnaW46IFwiMCAxN3B4IDBcIiB9IH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtc3VtbWFyeVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJyZ2JhKDY4LCAxMjMsIDI1MiwgMSlcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLkvJjoia/msLTkvZNcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJwb2xsdXRlTnVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5leGNlbGxlbnQpKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuS4qiBcIiksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtc3VtbWFyeVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJyZ2JhKDY4LCAxMjMsIDI1MiwgMSlcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLliqNW57G7XCIpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicG9sbHV0ZU51bVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwicmdiYSgyNTQsIDc5LCAyLCAxKVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtLnBvb3IpKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5LiqIFwiKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1zdW1tYXJ5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcInJnYmEoMTgsIDE4LCA1NCwgMC41KVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuaAu1wiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInBvbGx1dGVOdW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLm51bSkpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5LiqIFwiKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZnNcIiwgc3RhdGljU3R5bGU6IHsgbWFyZ2luOiBcIjNweCAxM3B4IDAgM3B4XCIgfSB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwcm9ncmVzcy13cmFwcGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdGFuZGFyZFwiLFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogXCJ3aWR0aDpcIiArIGl0ZW0uZXhjZWxsZW50UmF0ZSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMTIxMjM2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjE0cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC13ZWlnaHRcIjogXCJib2xkXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbS5leGNlbGxlbnRSYXRlKSldXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXCJiclwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoMTgsIDE4LCA1NCwgMC41KVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LXdlaWdodFwiOiBcIm5vcm1hbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLkvJjoia/njodcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgfSksXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtbm8tYm9yZGVyLXdyYXBwZXJcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLW5vLWJvcmRlci10aXRsZSBmc1wiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmFtZVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uc2VhcmNoT2JqLnBhcmFtZXRlcikgKyBcIumlrueUqOawtOa6kOWcsOaDheWGtVwiKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGltZVwiIH0sIFtfdm0uX3YoXCIyMDI05bm0IFwiKV0pLFxuICAgIF0pLFxuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZnNcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRyaW5rXCIsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBfdm0udG9EZXRhaWwoXCLluILnuqdcIilcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjaXJjbGVcIixcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGJhY2tncm91bmQ6IFwicmdiYSg5OSwgODksIDIzMywgMSlcIiB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiDluILnuqcoIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoMTgsIDE4LCA1NCwgMSlcIixcbiAgICAgICAgICAgICAgICBcImZvbnQtd2VpZ2h0XCI6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS55eXNJbmZvLmNpdHlUb3RhbCkpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIOS4qu+8iVwiKSxcbiAgICAgICAgICBfYyhcImJyXCIpLFxuICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInN0YW5kYXJkXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwi6L6+5qCHXCIgKyBfdm0uX3MoX3ZtLnl5c0luZm8uY2l0eVVwKSArIFwi5LiqXCIpLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJkcmlua1wiLFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvRGV0YWlsKFwi5Y6/57qn5Lul5LiKXCIpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2lyY2xlXCIsXG4gICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBiYWNrZ3JvdW5kOiBcInJnYmEoMTAwLCAyMDcsIDI0NiwgMSlcIiB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiDljr/nuqfku6XkuIooIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoMTgsIDE4LCA1NCwgMSlcIixcbiAgICAgICAgICAgICAgICBcImZvbnQtd2VpZ2h0XCI6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS55eXNJbmZvLnRvdGFsKSldXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIg5Liq77yJXCIpLFxuICAgICAgICAgIF9jKFwiYnJcIiksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwic3RhbmRhcmRcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCLovr7moIdcIiArIF92bS5fcyhfdm0ueXlzSW5mby51cCkgKyBcIuS4qlwiKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICBdKSxcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZzXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICByZWY6IFwiYmFzaW5SZWZcIixcbiAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjEwMHB4XCIsIHdpZHRoOiBcIjUwJVwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0udG9EZXRhaWwoXCLluILnuqdcIilcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgIHJlZjogXCJjb3VudHlSZWZcIixcbiAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjEwMHB4XCIsIHdpZHRoOiBcIjUwJVwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0udG9EZXRhaWwoXCLljr/nuqfku6XkuIpcIilcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgXSksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jYXJkLW5vLWJvcmRlci13cmFwcGVyW2RhdGEtdi0xOWFjZGEwZF0ge1xcbiAgbWFyZ2luOiA0cHggMTdweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4uY2FyZC1uby1ib3JkZXItd3JhcHBlciAuY2FyZC1uby1ib3JkZXItdGl0bGVbZGF0YS12LTE5YWNkYTBkXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDEwcHggMDtcXG59XFxuLmNhcmQtbm8tYm9yZGVyLXdyYXBwZXIgLmNhcmQtbm8tYm9yZGVyLXRpdGxlIC5uYW1lW2RhdGEtdi0xOWFjZGEwZF0ge1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5jYXJkLW5vLWJvcmRlci13cmFwcGVyIC5jYXJkLW5vLWJvcmRlci10aXRsZSAudGltZVtkYXRhLXYtMTlhY2RhMGRdIHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5zb3VyY2Utd3JhcHBlcltkYXRhLXYtMTlhY2RhMGRdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5zb3VyY2Utd3JhcHBlciAuc291cmNlLWJveFtkYXRhLXYtMTlhY2RhMGRdIHtcXG4gIHdpZHRoOiAyNiU7XFxuICBtYXJnaW46IDNweDtcXG4gIHBhZGRpbmc6IDZweCA4cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogI2ZhZmFmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlOWU5ZmY7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgZm9udC1zaXplOiAxM3B4O1xcbn1cXG4uc291cmNlLXdyYXBwZXIgLnNvdXJjZS1ib3ggLnNvdXJjZS1uYW1lW2RhdGEtdi0xOWFjZGEwZF0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbn1cXG4uc291cmNlLXdyYXBwZXIgLnNvdXJjZS1ib3ggLnNvdXJjZS1uYW1lIGltZ1tkYXRhLXYtMTlhY2RhMGRdIHtcXG4gIHdpZHRoOiAxNHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA0cHg7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNhcmQtbm8tYm9yZGVyLXdyYXBwZXIge1xcbiAgbWFyZ2luOiA0cHggMTdweDtcXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xcbn1cXG4uY2FyZC1uby1ib3JkZXItd3JhcHBlciAuY2FyZC1uby1ib3JkZXItdGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxufVxcbi5jYXJkLW5vLWJvcmRlci13cmFwcGVyIC5jYXJkLW5vLWJvcmRlci10aXRsZSAubmFtZSB7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXNpemU6IDE4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmNhcmQtbm8tYm9yZGVyLXdyYXBwZXIgLmNhcmQtbm8tYm9yZGVyLXRpdGxlIC50aW1lIHtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi52YW4tZHJvcGRvd24tbWVudV9fdGl0bGUge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG59XFxuLnZhbi1kcm9wZG93bi1tZW51X19iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG4udmFuLWRyb3Bkb3duLW1lbnVfX2l0ZW0ge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuYmFzZS13cmFwcGVyW2RhdGEtdi1iMDc0YzU1Ml0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAxMXB4IDAgMDtcXG4gIHBhZGRpbmc6IDZweCAzcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgI2YyZjdmZiAwJSwgcmdiYSgyNDIsIDI0NywgMjU1LCAwKSAxMDAlKTtcXG59XFxuLmJhc2Utd3JhcHBlcltkYXRhLXYtYjA3NGM1NTJdOjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiA3NXB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgxMDcsIDE1NSwgMjUwLCAwLjUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyNHB4O1xcbiAgbGVmdDogNnB4O1xcbn1cXG4uYmFzZS13cmFwcGVyW2RhdGEtdi1iMDc0YzU1Ml06OmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgd2lkdGg6IDVweDtcXG4gIGhlaWdodDogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZDogcmdiYSgxMDcsIDE1NSwgMjUwLCAwLjUpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAwcHg7XFxuICBsZWZ0OiA0cHg7XFxufVxcbi5iYXNlLXdyYXBwZXIgLmJhc2UtdGl0bGVbZGF0YS12LWIwNzRjNTUyXSB7XFxuICBwYWRkaW5nLWxlZnQ6IDNweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4uYmFzZS13cmFwcGVyIC5iYXNlLXRpdGxlIGRpdltkYXRhLXYtYjA3NGM1NTJdIHtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxufVxcbi5iYXNlLXdyYXBwZXIgLmJhc2UtdGl0bGUgZGl2IHNwYW5bZGF0YS12LWIwNzRjNTUyXSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogIzEyMTIzNjtcXG59XFxuLmJhc2Utd3JhcHBlciAuY2FyZC1zdW1tYXJ5W2RhdGEtdi1iMDc0YzU1Ml0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB3aWR0aDogMjclO1xcbiAgcGFkZGluZzogN3B4O1xcbiAgYmFja2dyb3VuZDogcmdiYSg2OCwgMTIzLCAyNTIsIDAuMDUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg2OCwgMTIzLCAyNTIsIDAuMSk7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbn1cXG4uYmFzZS13cmFwcGVyIC5jYXJkLXN1bW1hcnkgLm51bVtkYXRhLXYtYjA3NGM1NTJdIHtcXG4gIGNvbG9yOiAjNTI3MWZmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5iYXNlLXdyYXBwZXIgLmNhcmQtc3VtbWFyeSAucG9sbHV0ZU51bVtkYXRhLXYtYjA3NGM1NTJdIHtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuLmJhc2Utd3JhcHBlciAucHJvZ3Jlc3Mtd3JhcHBlcltkYXRhLXYtYjA3NGM1NTJdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDgyJTtcXG4gIHBhZGRpbmc6IDAgM3B4O1xcbiAgaGVpZ2h0OiAxM3B4O1xcbiAgYmFja2dyb3VuZDogI2Y4ZmJmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoODIsIDExMywgMjU1LCAwLjUpO1xcbiAgYm9yZGVyLWxlZnQ6IDA7XFxufVxcbi5iYXNlLXdyYXBwZXIgLnByb2dyZXNzLXdyYXBwZXIgLnN0YW5kYXJkW2RhdGEtdi1iMDc0YzU1Ml0ge1xcbiAgaGVpZ2h0OiA5cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjcwZGVnLCAjMDBkMmZmIDAlLCAjMmMzY2ZlIDEwMCUpO1xcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDIwLCAzMSwgMTU5LCAwLjE1KTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2FyZC1uby1ib3JkZXItd3JhcHBlcltkYXRhLXYtZjYzNTBhYzRdIHtcXG4gIG1hcmdpbjogNHB4IDE3cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLmNhcmQtbm8tYm9yZGVyLXdyYXBwZXIgLmNhcmQtbm8tYm9yZGVyLXRpdGxlW2RhdGEtdi1mNjM1MGFjNF0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxufVxcbi5jYXJkLW5vLWJvcmRlci13cmFwcGVyIC5jYXJkLW5vLWJvcmRlci10aXRsZSAubmFtZVtkYXRhLXYtZjYzNTBhYzRdIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uY2FyZC1uby1ib3JkZXItd3JhcHBlciAuY2FyZC1uby1ib3JkZXItdGl0bGUgLnRpbWVbZGF0YS12LWY2MzUwYWM0XSB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4uZHJpbmtbZGF0YS12LWY2MzUwYWM0XSB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgd2lkdGg6IDUwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG59XFxuLmRyaW5rIC5jaXJjbGVbZGF0YS12LWY2MzUwYWM0XSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogOHB4O1xcbiAgaGVpZ2h0OiA4cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uZHJpbmsgLnN0YW5kYXJkW2RhdGEtdi1mNjM1MGFjNF0ge1xcbiAgY29sb3I6ICM0M2NmN2M7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93YXRlclBvbGx1dGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xOWFjZGEwZCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjAwMWI2MjU0XCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vd2F0ZXJQb2xsdXRpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTlhY2RhMGQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi93YXRlclBvbGx1dGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xOWFjZGEwZCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaXR5V2F0ZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIzMGI5YWQ5MlwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NpdHlXYXRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NpdHlXYXRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaXR5V2F0ZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9YjA3NGM1NTImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI1ZDJkOTFhM1wiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NpdHlXYXRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD1iMDc0YzU1MiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NpdHlXYXRlci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD1iMDc0YzU1MiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaXR5RHJpbmsudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZjYzNTBhYzQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI0YzJkNGYwZVwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NpdHlEcmluay52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mNjM1MGFjNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NpdHlEcmluay52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mNjM1MGFjNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcclxubGV0IGJhc2VVcmwgPSBcIi93YXRlclwiOyAvL+acjeWKoeWZqOaYr3dhdGVy57G777yM5pys5Zyw5rKh5pyJ5YqgXHJcbi8qXHJcbuWkp+ernui1m+awtOayu+eQhuaOkuWQjVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmtpbmcoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL2NvbXBldGl0aW9uL3JhbmtpbmdcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG4vKlxyXG7msLTnjq/looPlubTlupXmjpLlkI3liJfooahcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB5ZWFyUmFua0xpc3QoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL2NvbXBldGl0aW9uL3llYXJSYW5rTGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcbi8qXHJcbuWkp+ernui1m+awtOayu+eQhuaOkuWQjeivpuaDhVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmtMaXN0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9jb21wZXRpdGlvbi9yYW5rTGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcbi8qXHJcbuWkp+ernui1m+awtOayu+eQhuaOkuWQjeWQhOWMuuWfn+ivpuaDhVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJhbmtEZXRhaWwoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL2NvbXBldGl0aW9uL3JhbmtEZXRhaWxcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG4vKlxyXG4g5ZCE5Y6/77yI5biC77yJ5Yy644CB5byA5Y+R5bqm5YGH5Zut5Yy65a2j5bqm5Zyw6KGo5rC0546v5aKD6LSo6YeP6K+E5YiG6K+m5oOFXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2NhbGVNYXJrcyhkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvY29tcGV0aXRpb24vc2NhbGVNYXJrc1wiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcbi8qXHJcbuWFqOW4guawtOeOr+Wig+amguWGteaAu+S9k+aDheWGtVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHdhdGVyQmFzaWNEYXRhKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9CYXNpY0RhdGFcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG4vKlxyXG7mlq3pnaLkv6Hmga9cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZWN0aW9uSW5mbyhkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXJCYXNpY0RhdGEvc2VjdGlvbkluZm9cIixcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcbi8qXHJcbuaWremdouWIl+ihqC0t5Zu944CB55yB44CB5biCXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VjdGlvbkxpc3QoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL0Jhc2ljRGF0YS9zZWN0aW9uTGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaWremdouS/oeaBry0t5Zu944CB55yB44CB5biCXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGF0aW9uSW5mbyhkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvc2VjdGlvblwiLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaWremdouS/oeaBry0t5p+l6K+i5LiK5ri46LaF5qCHXHJcbmV4cG9ydCBmdW5jdGlvbiB1cFN0cmVhbU92ZXIoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3NlY3Rpb24vdXBTdHJlYW1PdmVyXCIsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5pat6Z2i5L+h5oGvLS3mn6Xor6LmuZblupPnmoTnm5HmtYvmlq3pnaJcclxuZXhwb3J0IGZ1bmN0aW9uIGxha2VTaXRlTGlzdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvc2VjdGlvbi9sYWtlU2l0ZUxpc3RcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5pat6Z2iLeays+a1geaXtuWAvOabsue6v1xyXG5leHBvcnQgZnVuY3Rpb24gcXVlcnlTZWN0aW9uSW5mbyhkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvc2VjdGlvbi9xdWVyeVNlY3Rpb25JbmZvXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaWremdouS/oeaBry0t5Zu944CB55yB44CB5biCXHJcbmV4cG9ydCBmdW5jdGlvbiBzdGF0aW9uRGVzKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9zZWN0aW9uL3NpdGVEZXRhaWxcIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5rKz5rWB6K+m5oOFLeays+mBk+ivpuaDhVxyXG5leHBvcnQgZnVuY3Rpb24gcml2ZXJDb3Vyc2VEZXRhaWwoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL0Jhc2ljRGF0YS9yaXZlckNvdXJzZURldGFpbFwiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmlq3pnaIt5pe25YC85puy57q/XHJcbmV4cG9ydCBmdW5jdGlvbiBob3VyTGluZShkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvc2VjdGlvbi9jdXJ2ZVwiLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaWremdouS/oeaBry0t5ZGo6L655raJ5rC05rGh5p+T5rqQXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXRlclBvbGx1dGlvbihkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvc2VjdGlvbi9wb2xsdXRpb25cIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwc3RyZWFtUG9sbHV0aW9uKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9zZWN0aW9uL3Vwc3RyZWFtUG9sbHV0aW9uXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaWremdouS/oeaBry0t5LiK5ri45pat6Z2i5YiX6KGoXHJcbi8vIGV4cG9ydCBmdW5jdGlvbiBnZXRVcExpc3QoZGF0YSkge1xyXG4vLyAgIHJldHVybiByZXF1ZXN0KHtcclxuLy8gICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3NlY3Rpb24vdXBTdHJlYW1cIixcclxuLy8gICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbi8vICAgICBkYXRhOiBkYXRhLFxyXG4vLyAgIH0pO1xyXG4vLyB9XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRVcExpc3QoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3NlY3Rpb24vdXBzdHJlYW1TZWN0aW9uXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaWremdouS/oeaBry0t5LiK5ri45rC05bqTXHJcbmV4cG9ydCBmdW5jdGlvbiB1cFN0cmVhbVdhdGVyKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9zZWN0aW9uL3Vwc3RyZWFtV2F0ZXJcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5pat6Z2i5L+h5oGvLS3kuIrmuLjmjpLlj6NcclxuZXhwb3J0IGZ1bmN0aW9uIHVwc3RyZWFtU2V3YWdlKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9zZWN0aW9uL3Vwc3RyZWFtU2V3YWdlXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaWremdouS/oeaBry0t5LiK5ri45rC06LSo5YeA5YyW5Y6CXHJcbmV4cG9ydCBmdW5jdGlvbiBwdXJpZmljYXRpb25QbGFudChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvc2VjdGlvbi9wdXJpZmljYXRpb25QbGFudFwiLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaWremdoi0t55uR5rWL6K+m5oOFXHJcbmV4cG9ydCBmdW5jdGlvbiBkYXRhVGFibGUoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3NlY3Rpb24vZGF0YVRhYmxlXCIsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5pat6Z2iLS3msLTotKjlh4DljJbljoLor6bmg4VcclxuZXhwb3J0IGZ1bmN0aW9uIGpoY0luZm8oZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3BsYW50XCIsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5piG5piO5rC0546v5aKDLea1geWfn+awtOi0qOS8mOiJr+amguWGtVxyXG5leHBvcnQgZnVuY3Rpb24gbHlCYXNpbihkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvYmFzaW5cIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5piG5piO5rC0546v5aKDLea1geWfn+awtOi0qOS8mOiJr+amguWGtS3or6bmg4VcclxuZXhwb3J0IGZ1bmN0aW9uIGx5RGV0YWlsKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9iYXNpbi9kZXRhaWxzXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOmmlumhtSAtIOa7h+axoOawtOi0qFxyXG5leHBvcnQgZnVuY3Rpb24gZGNTeigpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9CYXNpY0RhdGEvZGNEYXRhXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCJcclxuICB9KTtcclxufVxyXG5cclxuLy8g6aaW6aG1IC0g5ruH5rGg5rC06LSoIC0g5rC06LSo5YiX6KGoXHJcbmV4cG9ydCBmdW5jdGlvbiBkY1N6TGlzdCgpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9sYWtlL2RjTGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOmmlumhtS3ppa7nlKjmsLTmupDlnLBcclxuZXhwb3J0IGZ1bmN0aW9uIHl5c0luZm8oZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL0Jhc2ljRGF0YS9kcmlua1NvdXJjZVwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhXHJcbiAgfSk7XHJcbn1cclxuLy8g6aaW6aG1LemlrueUqOawtOa6kOWcsC3msLTlupPliJfooahcclxuZXhwb3J0IGZ1bmN0aW9uIHNrTGlzdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvbGFrZS9kcmlua1NvdXJjZUxpc3RcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YVxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmmIbmmI7luILmsLTnjq/looMt5rC05bqT5YiG5biD5Y+K5bqT5a65XHJcbmV4cG9ydCBmdW5jdGlvbiB3YXRlckJvZHlMaXN0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9CYXNpY0RhdGEvd2F0ZXJCb2R5RGlzdHJpYnV0aW9uXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGFcclxuICB9KTtcclxufVxyXG5cclxuLy8g5piG5piO5biC5rC0546v5aKDLeawtOi0qOWHgOWMluWOguWIhuW4g1xyXG5leHBvcnQgZnVuY3Rpb24gd2F0ZXJQbGFudExpc3QoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3BsYW50XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGFcclxuICB9KTtcclxufVxyXG5cclxuLy8g5piG5piO5biC5rC0546v5aKDLeawtOW6k+WIhuW4g1xyXG5leHBvcnQgZnVuY3Rpb24gcmVzZXJ2b2lyTGlzdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvY29tbW9uL3dhdGVyTGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOawtOi0qOWHgOWMluWOguays+mBk+aWremdouivpuaDhVxyXG5leHBvcnQgZnVuY3Rpb24gd2F0ZXJQbGFudFJpdmVyKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9wbGFudC9kZXRhaWxcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YVxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmsLTotKjlh4DljJbljoLooaXmsLTmlq3pnaJcclxuZXhwb3J0IGZ1bmN0aW9uIHdhdGVyUGxhbnRTaXRlKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9wbGFudC9zaXRlc1wiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qXHJcbummlumhteawtOi1hOa6kOafpeivolxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlc291cmNlU3RhdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvY29tbW9uL3Jlc291cmNlU3RhdFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmsLTlip/og73ljLrliJfooahcclxuZXhwb3J0IGZ1bmN0aW9uIHdhdGVyRnVuY3Rpb25MaXN0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi9jb21tb24vd2F0ZXJGdW5jTGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOawtOWKn+iDveWMuuivpuaDhVxyXG5leHBvcnQgZnVuY3Rpb24gd2F0ZXJGdW5jdGlvbkRldGFpbChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvY29tbW9uL3dhdGVyRnVuY0RldGFpbFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qXHJcbummlumhtea2ieawtOaxoeafk+a6kFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGludm9sdmVXYXRlcihkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvcG9sbHV0aW9uL3N0YXRcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLypcclxu6aaW6aG15raJ5rC05rGh5p+T5rqQ6K+m5oOFXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V3YWdlRGV0YWlsKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi9wb2xsdXRpb24vc2V3YWdlRGV0YWlsXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qXHJcbuaOkuWPo+ivpuaDhS3mjpLmn6XliJfooahcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXdhZ2VQY0RldGFpbChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvcG9sbHV0aW9uL3Nld2FnZVBjRGV0YWlsXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qXHJcbuaOkuWPo+ivpuaDhS3muq/mupDliJfooahcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXdhZ2VTeURldGFpbChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvcG9sbHV0aW9uL3Nld2FnZVN5RGV0YWlsXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qXHJcbuaOkuWPo+ivpuaDhS3nm5HmtYvliJfooahcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXdhZ2VKY0RldGFpbChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvcG9sbHV0aW9uL3Nld2FnZUpjRGV0YWlsXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qXHJcbuaOkuWPo+ivpuaDhS3mlbTmsrvliJfooahcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXdhZ2VaekRldGFpbChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvcG9sbHV0aW9uL3Nld2FnZVp6RGV0YWlsXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qXHJcbua2ieawtOaxoeafk+a6kOWIl+ihqFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHBvbGx1dGlvbkxpc3QoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3BvbGx1dGlvbi9zc3dyeWxiXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qXHJcbummlumhtea2ieawtOaxoeafk+a6kOWIl+ihqHRhYuaAu+aVsFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNld2FnZVN0YXQoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3BvbGx1dGlvbi9zZXdhZ2VTdGF0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qXHJcbua1geWfny3msrPpgZPkv6Hmga/nu5/orqFcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByaXZlckNvdXJzZVN0YXQoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL0Jhc2ljRGF0YS9yaXZlckNvdXJzZVN0YXRcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLypcclxu5rWB5Z+fLeays+mBk+aDheWGtVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJpdmVyQ291cnNlTGlzdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvQmFzaWNEYXRhL3JpdmVyQ291cnNlTGlzdFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vKlxyXG7mtYHln58t5qC55o2u5rWB5Z+f5p+l6K+i5rKz6YGT5LiL5ouJ5qGGXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd2F0ZXJMaXN0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9iYXNpbi93YXRlckxpc3RcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDQUFBQUFnQ0FZQUFBQnplbnIwQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBT0dTVVJCVkZpRnRaZE5ieHRWRklhZkdhejRneUJaU3ZoWW9ZTGtWbFVRUVdLWkRiQktvaWhTSmRpMmY2SVdXMVlnVWNTQ0JSSXIxQzdZUURjbEl2a0RobElXcFlJQ2xYZHBVVzAxcHRoeFhLZmkzcGVGNzR6bmpzY2ZJZVpJbG1mdUhmczU5NTczbkhNbklHV2YxZXY1M25PRmkwSmJ3SnFSbGl6Q0NBekNTaGdKQTRscllVZm00N0dXdGFyWmtCMjlFbHo5T2xoNW11UUZ5WnNQSCs1ZkRnS3VSUGRHNHIvQjNUeURlK3ZHM0hYMTI3T3JuNHc0OEZIei9pN1Mra25nRStkVGNIK012YjF6YjJ3QWhOSEtaNEhieEI5Tmc5dnhjQXhhZitmMzI1Y0JnZytraFh6ei92RXNjSlA0ODJsd2I5Nkh4NHppTTgxQ1dHZyt1T1REd1Fqc0NlRDJCSENiV0dEN254Y3Y1cHphM2NSd0I5NWFMSE5tSVkrY2MzSWZCRUlJK0xpeFA5azVKMUE3NGhCUmlMWnl3SnFuVXVmeG1ZVThyK2FMNlN6MWJMdTh6UFhIanliQ1BlY1NjS2VqdFp5Vmx0SndJK0tWVHpJTG5DMlVVTFRTZUl1SjcyLzNEclBoZzBVdjVkTHc2SWV6MklYeU1oZkt5eE9mdWRacThPWEJReGNLRDQ2UkNHMEtIb2xtTmhlbTIrdkZ4VlRSOG9vU3VYRXBrblRnWHI4SEpJU0lVQ0pNZzNFM0k3eG5mKzRkam9VYlJDNExib1lrN3ZWN1hHbnVVOG1YaHZGbG1IcnBtSS9vUUdLMXRJZ0ZmanJxSkFyVWdKdkx5azhyeFN1NjBUNmdraS94L2tzdm56b2NYeno2azgrYkQ3eitFWTVMa1doN3JRYnBOZys3MWUxNDhGaUVhYmpSVUFHL1BUbGl0cVNjYmxGWWtyMGl6TXBQNjVCLzlIc1l4UG5DczNOeDRNZHVlNlIvaEJuRklkNEJJYzdOQ1g3cnFKT0FFemV2TUFzZWlmQ2J4d2N6RjZWWkhNZ3ExK0c0L0pSTHEzZkx6OC9GZ1p2ZHR0OWwzWGVZQmJkdTBiLzB1bk9yaU44ZnRvZTlKbTVVRUVheDhEb1k0dGYrRVZiaXRlTHBOWEN6bXdWM0lZaFRMNVdmRXB5ZkF6eXlORHdLUlpqWkN5UysrcXNaMS9YVDJxZU5mUWYwTzYrQTBFSXJYUnlpc0t5VTVyTUR0ZTdmQS9XbjRFQXJaNlNhUWR0WmgwdEozSW1GcU5TeExORUJTWFJHK1dNL09QVm53Q0VJYWptRGRxeTBQZENCWDVTdUhqVEdIcWVTbmRNZmMvRk96R2ZDZ1FCMmdvMTZQVjhJbnZSSEt1S1lnK1M4NEFDZDRndjVjTGRTT2JaVzFWbmh3OVB6ZEhoMFBzaUNDNnFzckR5Tlg4MDI2M2QyamJYcldVVnAwb2ttQ2ZjY2p2SStBMDdBWHVmTnQ0ZXZaZ0RmVlZZM2pLWDZmOE1GMVFqdWRPRGJlM2Z2TGpUQy9pV0QzVEp5citkanlyWC9Bam9XM2lJSWFnSHN0SnU5YTJ4dUhpZDUvd0xVZFBMN09hdk9iZ0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBWUFBQUJ6ZW5yMEFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQU1jU1VSQlZGaUZ0WmROYkV4UkZNZC85ODZqVmpZVHFyUktGZkdSRUFsQlkwRjh0TkdOQlNJU05yWWs2Q3pzdWlSdEpLMHRDeElMMXFWbFFUZGpRMklsOGMyMFZZbWtlOVE5eDJLKzNyeVBtZmVldU1uazV0NTVjLzcvZTg3L2Y5NWNRMkRvNC9FMlo5dlBBWU5BSHlKNXhJRUlxSlRuNnJyNjBjRGEvN3lUQmRRVkVabklyYkIzemFuaDMzNDg0MThzUG5rd1pKU1Iya1l3V0Zyd2lPZFZYR0hKNVJ1aklRSi9waDVPZ3ZiL0czamxHWTBnVkl2alFIWEt1em82QUdDckoyOE5MbzJCSXZkandOVUhMZ0xPOVM5ZXZ6UUVZUFROdzZWdVZuODFnaWRQclZtNUJwMHZwUzRGNnNqTm0yWFd6ZXI1ck9DSW9QTWxiUDlwVEh0WEtuQkVjQ3NYejltSzJqT0xDblh3dllROWZqWkJpUUw3S29OZXhXcng0QzJDbWZZdXpLNEQ5UXltT29Ecjh4REpOd1dKQ1diYU96RTc5Mk02dXN2OTQrVjBodXhKM2t2cmIzdnNGR1pWVjcxeHpYOUZYMDZqYzUvSzMrODVoTTU4UkdjK3hJTnJQYjZYQ256SFBsQkZIdDBIRlhUdVM4MWVwcU1iVkdITmVvdzR0UFF1VVZhOU9HWlJPdER2SmZUVmRDaVkzWDBRVnErRHVjL29pNmZvelB2RXBmQWFnMFYwTmg5ai9mWTFZdCtoczUvUTRwTk1MckxSWW10ZWltQXduZm1ZMEVYaGJDY1dZZTdDdGVDTE0zYkkvVEgweTlzbUJ3dG1JSWtPMGd6UnBoWnVFSGJrMnlxS2NZcGh1bnNUNjhERzJTTlVpalJqN2NiRU9yQnh6UHlscUhhN1ZNTVAza1FITmhiY3R6YXIweEV3NnpiSFpEVmNpbWdSaGh5aHFSTmcxbTlLWkVrYmxaWnd1aklRT0hRaURCN01STTBGTFpxRjJYczROUUdVbHVCbEViYjZBNW5XQWRVTWJOaUs2ZG5TWElTcVdKd3NOQU8zZTQ5a0lnQmdqcDZNMTBHNXJBc1dwTmpJS3NDMHN5YzdnZDd0bUEzYndxV29ha29wV2tRbjR1cGs5eDNGck8zTlRBREFESnlKQmdld1RCZ2R2OWptelBLZlVUb3dYVDMxSDlWbUIyaGdYNmoxZno5UVpkWjNyeVBkbE92TXR4bUF4YkZyUTBaa3BIVS95SGdUaWdCWHBiRGt6clBSK3RYc1ptRVM1L29UQmZ0SGNOQXA3L2J6K3RVTXdMc3lNcUJPQ3Y4YlhKVkNGUndDdDJNQUhSNWU2bkkvenFNeWlQN3BRelNmR0R6WXpDcFdReWxpbWNndGE3dG5iazMrOHVQOUJYMzFDbWJIcHp0YUFBQUFBRWxGVGtTdVFtQ0NcIiIsIi8v5b2T5YmN55S16ISR5pe26Ze0LS3lvZPml6VcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRoaXNEYXRlKGUpIHtcclxuLy8rXCIgXCIraCtcIjpcIitNK1wiOlwiK3M7XHJcblx0XHRsZXQgbm93VGltZSA9IFwiXCI7XHJcblx0XHRsZXQgdGltZT0gbmV3IERhdGUoKTtcclxuXHRcdGxldCB5PXRpbWUuZ2V0RnVsbFllYXIoKTtcclxuXHRcdGxldCBsbT10aW1lLmdldE1vbnRoKCk7XHJcblx0XHRcdGxtPWxtPDEwPycwJytsbTpsbTtcclxuXHRcdGxldCBtPXRpbWUuZ2V0TW9udGgoKSsxO1xyXG5cdFx0XHRtPW08MTA/JzAnK206bTtcclxuXHRcdGxldCBkPXRpbWUuZ2V0RGF0ZSgpO1xyXG5cdFx0XHRkPWQ8MTA/JzAnK2Q6ZDtcclxuXHRcdGxldCBoPXRpbWUuZ2V0SG91cnMoKTtcclxuXHRcdFx0aD1oPDEwPycwJytoOmg7XHJcblx0XHRsZXQgTSA9IHRpbWUuZ2V0TWludXRlcygpO1xyXG5cdFx0XHRNPU08MTA/JzAnK006TTtcclxuXHRcdGxldCBzID0gdGltZS5nZXRTZWNvbmRzKCk7XHJcblx0XHRcdHM9czwxMD8nMCcrczpzO1xyXG5cdFx0aWYgKGUgPT09IDEpIHtcclxuXHRcdFx0bm93VGltZT0geStcIi1cIisgbStcIi1cIitkICsgJyAnICsgaCArICc6JyArIE0gKyAnOicgKyBzXHJcblx0XHR9ZWxzZSBpZihlID09IDQpey8v5b2T5pyI55qE56ys5LiA5aSpXHJcblx0XHRcdG5vd1RpbWU9IHkrXCItXCIrIG0rXCItMVwiO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bm93VGltZT0geStcIi1cIisgbStcIi1cIitkXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbm93VGltZTtcclxufVxyXG4vLyDovazljJbml7bpl7RcclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSxuKSB7XHJcblx0XHRsZXQgdGltZT0gbmV3IERhdGUoZGF0ZSk7XHJcblx0XHRsZXQgbm93VGltZT0gXCJcIjtcclxuXHRcdGxldCB5PXRpbWUuZ2V0RnVsbFllYXIoKTtcclxuXHRcdGxldCBtPXRpbWUuZ2V0TW9udGgoKSsxO1xyXG5cdFx0XHRtPW08MTA/JzAnK206bTtcclxuXHRcdGxldCBkPXRpbWUuZ2V0RGF0ZSgpO1xyXG5cdFx0XHRkPWQ8MTA/JzAnK2Q6ZDtcclxuXHRcdGxldCBoPXRpbWUuZ2V0SG91cnMoKTtcclxuXHRcdFx0aD1oPDEwPycwJytoOmg7XHJcblx0XHRsZXQgTSA9IHRpbWUuZ2V0TWludXRlcygpO1xyXG5cdFx0XHRNPU08MTA/JzAnK006TTtcclxuXHRcdGxldCBzID0gdGltZS5nZXRTZWNvbmRzKCk7XHJcblx0XHRcdHM9czwxMD8nMCcrczpzO1xyXG5cdFx0aWYobj09XCJ5XCJ8fG49PVwi5bm0XCIpe1xyXG5cdFx0XHRub3dUaW1lPSB5XHJcblx0XHR9ZWxzZSBpZihuPT1cIk1cInx8bj09XCLmnIhcIil7XHJcblx0XHRcdG5vd1RpbWU9IHkrXCItXCIrIG1cclxuXHRcdH1lbHNlIGlmKG49PVwibVwiKXtcclxuXHRcdFx0bm93VGltZT0geStcIi1cIisgbStcIi1cIitkK1wiIFwiK2grXCI6XCIrTVxyXG5cdFx0fWVsc2UgaWYobj09XCJoXCJ8fG49PVwi5pe2XCIpe1xyXG5cdFx0XHRub3dUaW1lPSB5K1wiLVwiKyBtK1wiLVwiK2QrXCIgXCIraFxyXG5cdFx0fWVsc2UgaWYobj09XCJkXCJ8fG49PVwi5pelXCIpe1xyXG5cdFx0XHRub3dUaW1lPSB5K1wiLVwiKyBtK1wiLVwiK2RcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRub3dUaW1lPSB5K1wiLVwiKyBtK1wiLVwiK2QrXCIgXCIraCtcIjpcIitNK1wiOlwiK3NcclxuXHRcdH1cclxuXHRcdHJldHVybiBub3dUaW1lO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBob3VyRGF0ZUZvcm1hdChkYXRlKSB7XHJcblx0bGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcblx0bGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcclxuXHRsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XHJcblx0bGV0IGhvdXIgPSBkYXRlLmdldEhvdXJzKCk7XHJcblx0ZGF0ZSA9IHllYXIgKyAnLScgKyAobW9udGggPiA5ID8gbW9udGggOiAnMCcgKyBtb250aCkgKyAnLScgKyAoZGF5ID4gOSA/IGRheSA6ICcwJyArIGRheSkgKyAnICcgKyAoaG91ciA+IDkgPyBob3VyIDogJzAnICsgaG91cik7XHJcblx0cmV0dXJuIGRhdGU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIG1vbnRoRGF0ZUZvcm1hdChkYXRlKSB7XHJcblx0bGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcblx0bGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcclxuXHRkYXRlID0geWVhciArICctJyArIChtb250aCA+IDkgPyBtb250aCA6ICcwJyArIG1vbnRoKTtcclxuXHRyZXR1cm4gZGF0ZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZm91ckhvdXJUaW1lKCkge1xyXG5cdGxldCBub3dEYXRlID0gbmV3IERhdGUoKTtcclxuXHRsZXQgeWVhciA9IG5vd0RhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHRsZXQgbW9udGggPSBub3dEYXRlLmdldE1vbnRoKCkgKyAxO1xyXG5cdGxldCBkYXkgPSBub3dEYXRlLmdldERhdGUoKTtcclxuXHRsZXQgaG91cnMgPSBub3dEYXRlLmdldEhvdXJzKCk7XHJcblx0aWYgKGhvdXJzIDwgNCAmJiBob3VycyA+PSAwKSB7XHJcblx0XHRob3VycyA9IDA7XHJcblx0fSBlbHNlIGlmIChob3VycyA8IDggJiYgaG91cnMgPj0gNCkge1xyXG5cdFx0aG91cnMgPSA0O1xyXG5cdH0gZWxzZSBpZiAoaG91cnMgPCAxMiAmJiBob3VycyA+PSA4KSB7XHJcblx0XHRob3VycyA9IDg7XHJcblx0fSBlbHNlIGlmIChob3VycyA8IDE2ICYmIGhvdXJzID49IDEyKSB7XHJcblx0XHRob3VycyA9IDEyO1xyXG5cdH0gZWxzZSBpZiAoaG91cnMgPCAyMCAmJiBob3VycyA+PSAxNikge1xyXG5cdFx0aG91cnMgPSAxNjtcclxuXHR9IGVsc2UgaWYgKGhvdXJzIDw9IDIzICYmIGhvdXJzID49IDIwKSB7XHJcblx0XHRob3VycyA9IDIwO1xyXG5cdH1cclxuXHRtb250aCA9IG1vbnRoIDwgMTAgPyBcIjBcIiArIG1vbnRoIDogbW9udGg7XHJcblx0ZGF5ID0gZGF5IDwgMTAgPyBcIjBcIiArIGRheSA6IGRheTtcclxuXHRob3VycyA9IGhvdXJzIDwgMTAgPyBcIjBcIiArIGhvdXJzIDogaG91cnM7XHJcblx0cmV0dXJuIHllYXIrJy0nK21vbnRoKyctJytkYXkrJyAnK2hvdXJzKyc6MDA6MDAnXHJcbn1cclxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi93YXRlclBvbGx1dGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTlhY2RhMGQmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vd2F0ZXJQb2xsdXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi93YXRlclBvbGx1dGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vd2F0ZXJQb2xsdXRpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTlhY2RhMGQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIxOWFjZGEwZFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcxOWFjZGEwZCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcxOWFjZGEwZCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcxOWFjZGEwZCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vd2F0ZXJQb2xsdXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE5YWNkYTBkJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzE5YWNkYTBkJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3Mvc2VhcmNoQ29tcG9uZW50cy9jb21wb25lbnRzL3dhdGVyL3dhdGVyUG9sbHV0aW9uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vd2F0ZXJQb2xsdXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3dhdGVyUG9sbHV0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3dhdGVyUG9sbHV0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTE5YWNkYTBkJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vd2F0ZXJQb2xsdXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTE5YWNkYTBkJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9jaXR5V2F0ZXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWIwNzRjNTUyJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NpdHlXYXRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NpdHlXYXRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vY2l0eVdhdGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuaW1wb3J0IHN0eWxlMSBmcm9tIFwiLi9jaXR5V2F0ZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9YjA3NGM1NTImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJiMDc0YzU1MlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdiMDc0YzU1MicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdiMDc0YzU1MicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdiMDc0YzU1MicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vY2l0eVdhdGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iMDc0YzU1MiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdiMDc0YzU1MicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy9jaXR5V2F0ZXIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaXR5V2F0ZXIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NpdHlXYXRlci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jaXR5V2F0ZXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2l0eVdhdGVyLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPWIwNzRjNTUyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2l0eVdhdGVyLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iMDc0YzU1MiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY2l0eURyaW5rLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mNjM1MGFjNCZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9jaXR5RHJpbmsudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9jaXR5RHJpbmsudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2NpdHlEcmluay52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mNjM1MGFjNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImY2MzUwYWM0XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2Y2MzUwYWM0JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2Y2MzUwYWM0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2Y2MzUwYWM0JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9jaXR5RHJpbmsudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY2MzUwYWM0JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2Y2MzUwYWM0Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9kcmlua0RldGFpbC9jb21wb25lbnRzL2NpdHlEcmluay52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NpdHlEcmluay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY2l0eURyaW5rLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NpdHlEcmluay52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mNjM1MGFjNCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NpdHlEcmluay52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjYzNTBhYzQmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9