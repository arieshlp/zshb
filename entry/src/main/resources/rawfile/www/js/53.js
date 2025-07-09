(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[53],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airQualityRank/components/areaTab.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airQualityRank/components/areaTab.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_airFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/airFilter */ "./src/components/airFilter.vue");
/* harmony import */ var _api_air_quality__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/air_quality */ "./src/api/air_quality.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "areaTab",
  components: {
    airFilter: _components_airFilter__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      info: {
        kind: '优'
      },
      rankTabArr: ['实时排名', '历史排名'],
      rankTabIndex: 0,
      tableData: [],
      dateType: '小时数据',
      showPickerFactor: false,
      timeShow: '',
      timeQuery: '',
      currenTime: new Date(),
      popType: false,
      popTime: false,
      queryFlag: null,
      xzqh: ''
    };
  },
  mounted: function mounted() {
    this.xzqh = this.$route.query.xzqh;
    this.timeShow = dayjs__WEBPACK_IMPORTED_MODULE_3___default()().format('YYYY-MM-DD HH');
    this.timeQuery = dayjs__WEBPACK_IMPORTED_MODULE_3___default()().format('YYYY-MM-DD HH:00:00');
    this.queryFlag = Number(this.$route.query.queryFlag);
    this.queryDes();
    this.queryList();
  },
  methods: {
    //描述信息
    queryDes: function queryDes() {
      var _this = this;

      Object(_api_air_quality__WEBPACK_IMPORTED_MODULE_2__["airRegion"])({
        divisionName: this.xzqh,
        aqi: this.queryFlag === 0 ? '' : 'iaqi'
      }).then(function (res) {
        _this.info = res.data;
      });
    },
    //表格数据
    queryList: function queryList() {
      var _this2 = this;

      Object(_api_air_quality__WEBPACK_IMPORTED_MODULE_2__["regionQualityRanking"])({
        type: this.rankTabIndex === 0 ? 1 : 2,
        //1实时 2历史
        dataType: this.dateType === '小时数据' ? '小时' : '日',
        //小时/日
        time: this.timeQuery,
        // time: '2024-02-21 12:00:00',
        aqi: this.queryFlag === 0 ? '' : 'iaqi'
      }).then(function (res) {
        _this2.tableData = res.data;
      });
    },
    onChangeRankTab: function onChangeRankTab(index) {
      this.rankTabIndex = index;
      this.queryList();
    },
    getColorBg: function getColorBg(key) {
      var status = '';

      if (key == null) {
        status = 'air_whiterbg';
      } else if (key === '优') {
        status = 'air_greenbg';
      } else if (key === '良') {
        status = 'air_yellow_bg';
      } else if (key === '轻度污染') {
        status = 'air_orangebg';
      } else if (key === '中度污染' || key === '重度污染') {
        status = 'air_redbg';
      } else {
        status = 'air_whiterbg';
      }

      return status;
    },
    popTypeSelect: function popTypeSelect(type) {
      this.type = type;
      this.popType = true;
    },
    getType: function getType(obj, type) {
      console.log(obj);
      this.dateType = obj.value;

      if (this.dateType === '小时数据') {
        this.timeQuery = dayjs__WEBPACK_IMPORTED_MODULE_3___default()().format('YYYY-MM-DD HH:00:00');
        this.timeShow = dayjs__WEBPACK_IMPORTED_MODULE_3___default()().format('YYYY-MM-DD HH');
      } else {
        this.timeQuery = dayjs__WEBPACK_IMPORTED_MODULE_3___default()().format('YYYY-MM-DD');
        this.timeShow = dayjs__WEBPACK_IMPORTED_MODULE_3___default()().format('YYYY-MM-DD');
      }

      this.queryList();
    },
    //时间确认
    onConfirmTime: function onConfirmTime(value) {
      if (this.dateType === '小时数据') {
        this.timeQuery = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(value).format('YYYY-MM-DD HH:00:00');
        this.timeShow = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(value).format('YYYY-MM-DD HH');
      } else {
        this.timeQuery = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(value).format('YYYY-MM-DD');
        this.timeShow = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(value).format('YYYY-MM-DD');
      }

      this.popTime = false;
      this.queryList();
    },
    goCalender: function goCalender() {
      this.$router.push({
        name: 'airCalendarQuery',
        query: {
          siteId: "",
          siteName: this.xzqh === '' ? '昆明市' : this.xzqh,
          xzqh: this.xzqh === '' ? '昆明市' : this.xzqh,
          title: "空气质量日历",
          queryFlag: this.queryFlag
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airQualityRank/components/siteTab.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airQualityRank/components/siteTab.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_airFilter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/airFilter */ "./src/components/airFilter.vue");
/* harmony import */ var _api_air_quality__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/air_quality */ "./src/api/air_quality.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_3__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "siteTab",
  components: {
    airFilter: _components_airFilter__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      dateType: '小时数据',
      showPickerFactor: false,
      timeShow: '',
      timeQuery: '',
      currenTime: new Date(),
      popType: false,
      popTime: false,
      tableData: [],
      queryFlag: null,
      xzqh: ''
    };
  },
  mounted: function mounted() {
    this.xzqh = this.$route.query.xzqh;
    this.timeShow = dayjs__WEBPACK_IMPORTED_MODULE_3___default()().format('YYYY-MM-DD HH');
    this.timeQuery = dayjs__WEBPACK_IMPORTED_MODULE_3___default()().format('YYYY-MM-DD HH:00:00');
    this.queryFlag = Number(this.$route.query.queryFlag);
    this.queryData();
  },
  methods: {
    queryData: function queryData() {
      var _this = this;

      Object(_api_air_quality__WEBPACK_IMPORTED_MODULE_2__["airSiteQualityRanking"])({
        type: this.dateType === '小时数据' ? 1 : 2,
        //1小时 2日
        time: this.timeQuery,
        aqi: this.queryFlag === 0 ? '' : 'iaqi',
        divisionName: this.xzqh
      }).then(function (res) {
        _this.tableData = res.data;
      });
    },
    popTypeSelect: function popTypeSelect(type) {
      this.type = type;
      this.popType = true;
    },
    getType: function getType(obj, type) {
      this.dateType = obj.value;

      if (this.dateType === '小时数据') {
        this.timeQuery = dayjs__WEBPACK_IMPORTED_MODULE_3___default()().format('YYYY-MM-DD HH:00:00');
        this.timeShow = dayjs__WEBPACK_IMPORTED_MODULE_3___default()().format('YYYY-MM-DD HH');
      } else {
        this.timeQuery = dayjs__WEBPACK_IMPORTED_MODULE_3___default()().format('YYYY-MM-DD');
        this.timeShow = dayjs__WEBPACK_IMPORTED_MODULE_3___default()().format('YYYY-MM-DD');
      }

      this.queryData();
    },
    //时间确认
    onConfirmTime: function onConfirmTime(value) {
      if (this.dateType === '小时数据') {
        this.timeQuery = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(value).format('YYYY-MM-DD HH:00:00');
        this.timeShow = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(value).format('YYYY-MM-DD HH');
      } else {
        this.timeQuery = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(value).format('YYYY-MM-DD');
        this.timeShow = dayjs__WEBPACK_IMPORTED_MODULE_3___default()(value).format('YYYY-MM-DD');
      }

      this.popTime = false;
      this.queryData();
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airQualityRank/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airQualityRank/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _views_airHomePage_airQualityRank_components_areaTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/views/airHomePage/airQualityRank/components/areaTab */ "./src/views/airHomePage/airQualityRank/components/areaTab.vue");
/* harmony import */ var _views_airHomePage_airQualityRank_components_siteTab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/views/airHomePage/airQualityRank/components/siteTab */ "./src/views/airHomePage/airQualityRank/components/siteTab.vue");
//
//
//
//
//
//
//
//
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
    areaTab: _views_airHomePage_airQualityRank_components_areaTab__WEBPACK_IMPORTED_MODULE_0__["default"],
    siteTab: _views_airHomePage_airQualityRank_components_siteTab__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      titleTabArr: ['区县空气质量排名', '站点空气质量排名'],
      titleTabIndex: 0
    };
  },
  mounted: function mounted() {},
  methods: {
    onChangeTitleTab: function onChangeTitleTab(index) {
      this.titleTabIndex = index;
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airQualityRank/components/areaTab.vue?vue&type=template&id=56b710fc&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airQualityRank/components/areaTab.vue?vue&type=template&id=56b710fc&scoped=true& ***!
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
    [
      _c("div", { staticClass: "air_header" }, [
        _c("div", { staticClass: "fs aqi-wrapper" }, [
          _c("div", { staticClass: "fs" }, [
            _c("div", { staticClass: "number" }, [
              _vm._v(_vm._s(_vm.info.aqi)),
            ]),
            _c(
              "span",
              { staticClass: "type-box", class: _vm.getColorBg(_vm.info.kind) },
              [_vm._v(_vm._s(_vm.info.kind))]
            ),
            _vm._v(" " + _vm._s(_vm.info.region) + " "),
          ]),
          _c(
            "div",
            { staticClass: "fs calendar", on: { click: _vm.goCalender } },
            [
              _c("img", {
                staticStyle: { "margin-right": "8px" },
                attrs: { src: __webpack_require__(/*! @/assets/polluter/calendar.png */ "./src/assets/polluter/calendar.png") },
              }),
              _vm._v(" 空气质量日历 "),
            ]
          ),
        ]),
        _c("div", { staticClass: "aqi-des" }, [
          _vm._v("数据时间：" + _vm._s(_vm.info.time)),
        ]),
        _c("div", { staticClass: "fs aqi-box" }, [
          _c("div", { staticClass: "aqi-box-item" }, [
            _vm._v(" " + _vm._s(_vm.info.pollutants || "-") + " "),
            _c("span", { staticClass: "des" }, [_vm._v("首要污染物")]),
          ]),
          _c("div", { staticClass: "aqi-box-item" }, [
            _vm._v(" " + _vm._s(_vm.info.maxValue || "-") + " "),
            _c("span", { staticClass: "des" }, [_vm._v("最大小时浓度")]),
          ]),
        ]),
      ]),
      _c(
        "div",
        { staticClass: "rank-tab-wrapper" },
        _vm._l(_vm.rankTabArr, function (item, i) {
          return _c(
            "div",
            {
              class: _vm.rankTabIndex === i ? "active" : "",
              on: {
                click: function ($event) {
                  return _vm.onChangeRankTab(i)
                },
              },
            },
            [_vm._v(" " + _vm._s(item) + " ")]
          )
        }),
        0
      ),
      _c(
        "div",
        { staticClass: "table-box" },
        [
          _vm.rankTabIndex === 0
            ? _c(
                "table",
                { staticClass: "table-wrapper", attrs: { width: "100%" } },
                [
                  _vm._m(0),
                  _c(
                    "tbody",
                    [
                      _vm._l(_vm.tableData, function (item) {
                        return _c("tr", [
                          _c("td", [_vm._v(_vm._s(item.region))]),
                          _c("td", [_vm._v(_vm._s(item.aqi))]),
                          _c("td", [_vm._v(_vm._s(item.kind))]),
                          _c(
                            "td",
                            [
                              _vm._v(_vm._s(item.pollutants || "-") + " "),
                              item.pollutants !== "-" &&
                              item.pollutants !== null
                                ? [_vm._v("(" + _vm._s(item.maxValue) + ")")]
                                : _vm._e(),
                            ],
                            2
                          ),
                        ])
                      }),
                      _vm.tableData.length === 0
                        ? _c("tr", [
                            _c("td", { attrs: { colspan: "4" } }, [
                              _vm._v("暂无数据"),
                            ]),
                          ])
                        : _vm._e(),
                    ],
                    2
                  ),
                ]
              )
            : _vm._e(),
          _vm.rankTabIndex === 1
            ? [
                _c(
                  "van-row",
                  { staticClass: "air-search", attrs: { gutter: 10 } },
                  [
                    _c(
                      "van-col",
                      { attrs: { span: "7" } },
                      [
                        _c("van-field", {
                          attrs: {
                            value: _vm.dateType,
                            "right-icon": "arrow-down",
                            readonly: "",
                          },
                          on: {
                            click: function ($event) {
                              return _vm.popTypeSelect("air")
                            },
                          },
                        }),
                      ],
                      1
                    ),
                    _c(
                      "van-col",
                      { attrs: { span: "9" } },
                      [
                        _c("van-field", {
                          attrs: {
                            readonly: "",
                            clickable: "",
                            value: _vm.timeShow,
                            "input-align": "right",
                            "right-icon": "arrow-down",
                          },
                          on: {
                            click: function ($event) {
                              _vm.popTime = true
                            },
                          },
                        }),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                _c(
                  "table",
                  { staticClass: "table-wrapper", attrs: { width: "100%" } },
                  [
                    _vm._m(1),
                    _c(
                      "tbody",
                      [
                        _vm._l(_vm.tableData, function (item) {
                          return _c("tr", [
                            _c("td", [_vm._v(_vm._s(item.region))]),
                            _c("td", [_vm._v(_vm._s(item.aqi))]),
                          ])
                        }),
                        _vm.tableData.length === 0
                          ? _c("tr", [
                              _c("td", { attrs: { colspan: "2" } }, [
                                _vm._v("暂无数据"),
                              ]),
                            ])
                          : _vm._e(),
                      ],
                      2
                    ),
                  ]
                ),
              ]
            : _vm._e(),
        ],
        2
      ),
      _c("airFilter", {
        attrs: { isShow: _vm.popType, type: "air" },
        on: {
          getType: _vm.getType,
          close: function ($event) {
            _vm.popType = false
          },
        },
      }),
      _c(
        "van-popup",
        {
          attrs: { position: "bottom" },
          model: {
            value: _vm.popTime,
            callback: function ($$v) {
              _vm.popTime = $$v
            },
            expression: "popTime",
          },
        },
        [
          _c("van-datetime-picker", {
            attrs: {
              type: _vm.dateType === "小时数据" ? "datehour" : "date",
              title: "选择时间",
            },
            on: {
              confirm: _vm.onConfirmTime,
              cancel: function ($event) {
                _vm.endTimePop = false
              },
            },
            model: {
              value: _vm.currenTime,
              callback: function ($$v) {
                _vm.currenTime = $$v
              },
              expression: "currenTime",
            },
          }),
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
    return _c("thead", [
      _c("tr", { staticClass: "table-header" }, [
        _c("th", [_vm._v("所在区域")]),
        _c("th", [_vm._v("AQI")]),
        _c("th", [_vm._v("空气质量等级")]),
        _c("th", [_vm._v("首要污染物"), _c("br"), _vm._v("(最大小时浓度)")]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", { staticClass: "table-header" }, [
        _c("th", [_vm._v("区域")]),
        _c("th", [_vm._v("AQI")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airQualityRank/components/siteTab.vue?vue&type=template&id=f08445fc&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airQualityRank/components/siteTab.vue?vue&type=template&id=f08445fc&scoped=true& ***!
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
    [
      _c(
        "van-row",
        { staticClass: "air-search", attrs: { gutter: 10 } },
        [
          _c(
            "van-col",
            { attrs: { span: "7" } },
            [
              _c("van-field", {
                attrs: {
                  value: _vm.dateType,
                  "right-icon": "arrow-down",
                  readonly: "",
                },
                on: {
                  click: function ($event) {
                    return _vm.popTypeSelect("air")
                  },
                },
              }),
            ],
            1
          ),
          _c(
            "van-col",
            { attrs: { span: "9" } },
            [
              _c("van-field", {
                attrs: {
                  readonly: "",
                  clickable: "",
                  value: _vm.timeShow,
                  "input-align": "right",
                  "right-icon": "arrow-down",
                },
                on: {
                  click: function ($event) {
                    _vm.popTime = true
                  },
                },
              }),
            ],
            1
          ),
        ],
        1
      ),
      _c("div", { staticClass: "table-box" }, [
        _c(
          "table",
          { staticClass: "table-wrapper", attrs: { width: "100%" } },
          [
            _vm._m(0),
            _c(
              "tbody",
              [
                _vm._l(_vm.tableData, function (item) {
                  return _c("tr", [
                    _c("td", [_vm._v(_vm._s(item.SITE_NAME))]),
                    _c("td", [_vm._v(_vm._s(item.AQI))]),
                    _c("td", [_vm._v(_vm._s(item.KIND))]),
                    _c(
                      "td",
                      [
                        _vm._v(_vm._s(item.PRIMARY_POLLUTANT) + " "),
                        item.PRIMARY_POLLUTANT !== "-" &&
                        item.PRIMARY_POLLUTANT !== null
                          ? [_vm._v("(" + _vm._s(item.MAXVALUE) + ")")]
                          : _vm._e(),
                      ],
                      2
                    ),
                  ])
                }),
                _vm.tableData.length === 0
                  ? _c("tr", [
                      _c("td", { attrs: { colspan: "4" } }, [
                        _vm._v("暂无数据"),
                      ]),
                    ])
                  : _vm._e(),
              ],
              2
            ),
          ]
        ),
      ]),
      _c("airFilter", {
        attrs: { isShow: _vm.popType, type: "air" },
        on: {
          getType: _vm.getType,
          close: function ($event) {
            _vm.popType = false
          },
        },
      }),
      _c(
        "van-popup",
        {
          attrs: { position: "bottom" },
          model: {
            value: _vm.popTime,
            callback: function ($$v) {
              _vm.popTime = $$v
            },
            expression: "popTime",
          },
        },
        [
          _c("van-datetime-picker", {
            attrs: {
              type: _vm.dateType === "小时数据" ? "datehour" : "date",
              title: "选择时间",
            },
            on: {
              confirm: _vm.onConfirmTime,
              cancel: function ($event) {
                _vm.endTimePop = false
              },
            },
            model: {
              value: _vm.currenTime,
              callback: function ($$v) {
                _vm.currenTime = $$v
              },
              expression: "currenTime",
            },
          }),
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
    return _c("thead", [
      _c("tr", { staticClass: "table-header" }, [
        _c("th", [_vm._v("监测站点")]),
        _c("th", [_vm._v("AQI")]),
        _c("th", [_vm._v("空气质量等级")]),
        _c("th", [_vm._v("首要污染物"), _c("br"), _vm._v("(最大小时浓度)")]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airQualityRank/index.vue?vue&type=template&id=49c9bf96&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airQualityRank/index.vue?vue&type=template&id=49c9bf96&scoped=true& ***!
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
  return _c(
    "div",
    [
      _c("van-nav-bar", {
        attrs: { title: "空气质量排名", "left-arrow": "", fixed: "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
      }),
      _c(
        "div",
        { staticClass: "scroll-to-top-wrapper" },
        [
          _c(
            "div",
            { staticClass: "title-tab-wrapper" },
            _vm._l(_vm.titleTabArr, function (item, i) {
              return _c(
                "div",
                {
                  class: _vm.titleTabIndex === i ? "active" : "",
                  on: {
                    click: function ($event) {
                      return _vm.onChangeTitleTab(i)
                    },
                  },
                },
                [_vm._v(" " + _vm._s(item) + " ")]
              )
            }),
            0
          ),
          _vm.titleTabIndex === 0 ? _c("areaTab") : _vm._e(),
          _vm.titleTabIndex === 1 ? _c("siteTab") : _vm._e(),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airQualityRank/components/areaTab.vue?vue&type=style&index=0&id=56b710fc&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airQualityRank/components/areaTab.vue?vue&type=style&index=0&id=56b710fc&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @/assets/polluter/airbg.png */ "./src/assets/polluter/airbg.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".air-search[data-v-56b710fc] {\n  display: flex;\n  align-items: center;\n  padding: 14px;\n}\n.air-search[data-v-56b710fc]  .van-cell {\n  padding: 3px 8px;\n  font-size: 12px;\n  border-radius: 6px;\n  background: #f6f6f6;\n}\n.air-search[data-v-56b710fc]  .van-field__right-icon {\n  color: #C4C4C4;\n  scale: 0.7;\n}\n.air-search[data-v-56b710fc]  .van-field__control {\n  color: rgba(0, 0, 0, 0.8);\n  font-size: 12px;\n  scale: 0.9;\n}\n.air_header[data-v-56b710fc] {\n  margin: 0 10px;\n  padding: 10px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") center no-repeat;\n  background-size: cover;\n  border-radius: 10px;\n  border-top: 1px solid rgba(250, 127, 5, 0.05);\n}\n.air_header .aqi-des[data-v-56b710fc] {\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.air_header .aqi-wrapper[data-v-56b710fc] {\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.air_header .aqi-wrapper .number[data-v-56b710fc] {\n  font-size: 36px;\n  color: #121236;\n  font-weight: bold;\n}\n.air_header .aqi-wrapper .type-box[data-v-56b710fc] {\n  margin: 0 8px 0 13px;\n  padding: 2px 14px;\n  border-radius: 20px;\n  font-size: 16px;\n  color: #fff;\n  font-weight: bold;\n}\n.air_header .aqi-wrapper .calendar[data-v-56b710fc] {\n  padding: 4px 11px;\n  border-radius: 4px;\n  background: rgba(248, 251, 255, 0.5);\n  border: 1px solid rgba(68, 123, 252, 0.3);\n  font-size: 13px;\n  color: #5271ff;\n}\n.air_header .air_greenbg[data-v-56b710fc] {\n  background: #00e400;\n}\n.air_header .air_yellow_bg[data-v-56b710fc] {\n  background: #ffbf00;\n}\n.air_header .air_orangebg[data-v-56b710fc] {\n  background: #ff7e00;\n}\n.air_header .air_redbg[data-v-56b710fc] {\n  background: red;\n}\n.air_header .air_whiterbg[data-v-56b710fc] {\n  background: #cccccc;\n}\n.air_header .aqi-box[data-v-56b710fc] {\n  margin-top: 9px;\n  padding: 5px 0;\n  background: rgba(255, 255, 255, 0.5);\n  border: 1px solid white;\n  border-radius: 10px;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.air_header .aqi-box .aqi-box-item[data-v-56b710fc] {\n  width: 50%;\n  display: inline-flex;\n  flex-direction: column;\n  text-align: center;\n}\n.air_header .aqi-box .aqi-box-item .des[data-v-56b710fc] {\n  padding-top: 5px;\n}\n.rank-tab-wrapper[data-v-56b710fc] {\n  display: flex;\n  align-items: center;\n  width: 70%;\n  margin: 27px auto 16px;\n  border-radius: 10px;\n  background: #f2f5ff;\n}\n.rank-tab-wrapper div[data-v-56b710fc] {\n  width: 50%;\n  padding: 8px 26px;\n  font-size: 14px;\n  color: rgba(0, 0, 0, 0.8);\n  text-align: center;\n}\n.rank-tab-wrapper .active[data-v-56b710fc] {\n  border-radius: 10px;\n  background: #447bfc;\n  color: #fff;\n}\n.table-box[data-v-56b710fc] {\n  margin: 0 12px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airQualityRank/components/siteTab.vue?vue&type=style&index=0&id=f08445fc&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airQualityRank/components/siteTab.vue?vue&type=style&index=0&id=f08445fc&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".table-box[data-v-f08445fc] {\n  margin: 0 12px;\n}\n.air-search[data-v-f08445fc] {\n  display: flex;\n  align-items: center;\n  padding: 14px;\n}\n.air-search[data-v-f08445fc]  .van-cell {\n  padding: 3px 8px;\n  font-size: 12px;\n  border-radius: 6px;\n  background: #f6f6f6;\n}\n.air-search[data-v-f08445fc]  .van-field__right-icon {\n  color: #C4C4C4;\n  scale: 0.7;\n}\n.air-search[data-v-f08445fc]  .van-field__control {\n  color: rgba(0, 0, 0, 0.8);\n  font-size: 12px;\n  scale: 0.9;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airQualityRank/index.vue?vue&type=style&index=0&id=49c9bf96&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airQualityRank/index.vue?vue&type=style&index=0&id=49c9bf96&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".title-tab-wrapper[data-v-49c9bf96] {\n  display: flex;\n  align-items: center;\n  padding: 16px 18px 10px;\n}\n.title-tab-wrapper div[data-v-49c9bf96] {\n  padding: 6px 10px;\n  font-size: 12px;\n  color: #b0b7c2;\n}\n.title-tab-wrapper .active[data-v-49c9bf96] {\n  border-radius: 6px;\n  background: #f2f5ff;\n  color: #5271ff;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airQualityRank/components/areaTab.vue?vue&type=style&index=0&id=56b710fc&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airQualityRank/components/areaTab.vue?vue&type=style&index=0&id=56b710fc&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./areaTab.vue?vue&type=style&index=0&id=56b710fc&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airQualityRank/components/areaTab.vue?vue&type=style&index=0&id=56b710fc&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("497c5669", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airQualityRank/components/siteTab.vue?vue&type=style&index=0&id=f08445fc&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airQualityRank/components/siteTab.vue?vue&type=style&index=0&id=f08445fc&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./siteTab.vue?vue&type=style&index=0&id=f08445fc&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airQualityRank/components/siteTab.vue?vue&type=style&index=0&id=f08445fc&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3e8ef97a", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airQualityRank/index.vue?vue&type=style&index=0&id=49c9bf96&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/airHomePage/airQualityRank/index.vue?vue&type=style&index=0&id=49c9bf96&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=49c9bf96&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airQualityRank/index.vue?vue&type=style&index=0&id=49c9bf96&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("5c7ba408", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/api/air_quality.js":
/*!********************************!*\
  !*** ./src/api/air_quality.js ***!
  \********************************/
/*! exports provided: ranking, airCityData, airCityAssessCondition, airCityAssessTendency, airPollutantRatio, airPollutantSiteRatio, airPollutantYear, airPollutantSiteYear, airQualityRanking, airQualitySiteList, airRanking, overproofAlerts, airRankinasdasdag, airQualitySiteData, airQualitySiteDataType, siteComparison, airQualitySiteDataTypeAnother, getAirSite, airQualitySiteCalendar, iaqiCalendar, airYearCalendar, weatherForecast, getDivisionName, yearAirQualityRatio, airSiteQualityRanking, regionQualityRanking, airRegion, pollSize, typeList, treeList, pollList, regionPrediction, airMl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ranking", function() { return ranking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airCityData", function() { return airCityData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airCityAssessCondition", function() { return airCityAssessCondition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airCityAssessTendency", function() { return airCityAssessTendency; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airPollutantRatio", function() { return airPollutantRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airPollutantSiteRatio", function() { return airPollutantSiteRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airPollutantYear", function() { return airPollutantYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airPollutantSiteYear", function() { return airPollutantSiteYear; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airQualityRanking", function() { return airQualityRanking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airQualitySiteList", function() { return airQualitySiteList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airRanking", function() { return airRanking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "overproofAlerts", function() { return overproofAlerts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airRankinasdasdag", function() { return airRankinasdasdag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airQualitySiteData", function() { return airQualitySiteData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airQualitySiteDataType", function() { return airQualitySiteDataType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "siteComparison", function() { return siteComparison; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airQualitySiteDataTypeAnother", function() { return airQualitySiteDataTypeAnother; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAirSite", function() { return getAirSite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airQualitySiteCalendar", function() { return airQualitySiteCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "iaqiCalendar", function() { return iaqiCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airYearCalendar", function() { return airYearCalendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "weatherForecast", function() { return weatherForecast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getDivisionName", function() { return getDivisionName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "yearAirQualityRatio", function() { return yearAirQualityRatio; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airSiteQualityRanking", function() { return airSiteQualityRanking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regionQualityRanking", function() { return regionQualityRanking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airRegion", function() { return airRegion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pollSize", function() { return pollSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typeList", function() { return typeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "treeList", function() { return treeList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pollList", function() { return pollList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "regionPrediction", function() { return regionPrediction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "airMl", function() { return airMl; });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./src/api/request.js");

var baseUrl =  false ? undefined : "/air"; //服务器是air类，本地没有加

/*
首页空气质量接口
 */

function ranking(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/competition/ranking',
    method: 'get',
    params: data
  });
}
/*
空气质量--小时、日数据
 */

function airCityData(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQuality/airCityData',
    method: 'get',
    params: data
  });
}
/*
空气质量--考核情况
 */

function airCityAssessCondition(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQuality/airCityAssessCondition',
    method: 'get',
    params: data
  });
}
/*
空气质量--趋势统计
 */

function airCityAssessTendency(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQuality/airCityAssessTendency',
    method: 'get',
    params: data
  });
}
/*
空气质量--污染物占比--行政区域的
 */

function airPollutantRatio(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQuality/airPollutantRatio',
    method: 'get',
    params: data
  });
}
/*
空气质量--污染物占比--站点的
 */

function airPollutantSiteRatio(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/airPollutantSiteRatio',
    method: 'get',
    params: data
  });
}
/*
空气质量--污染物年度统计--区域的
 */

function airPollutantYear(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQuality/airPollutantYear',
    method: 'get',
    params: data
  });
}
/*
空气质量--污染物年度统计--单个站点的
 */

function airPollutantSiteYear(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/airPollutantSiteYear',
    method: 'get',
    params: data
  });
}
/*
空气质量--排名
 */

function airQualityRanking(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQuality/airQualityRanking',
    method: 'get',
    params: data
  });
}
/*
空气质量--空气质量站点数据-国考/省考列表
 */

function airQualitySiteList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/airQualitySitesData',
    method: 'get',
    params: data
  });
}
/*
空气质量--空气站点排名
 */

function airRanking(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/airRanking',
    method: 'get',
    params: data
  });
}
/*
空气质量--近24小时超标告警
 */

function overproofAlerts(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/overproofAlerts',
    method: 'get',
    params: data
  });
}
/*
空气质量--空气站点排名
 */

function airRankinasdasdag(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/airRanking',
    method: 'get',
    params: data
  });
}
/*
空气质量--单站点站点数据
 */

function airQualitySiteData(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/airQualitySiteData',
    method: 'get',
    params: data
  });
}
/*
空气质量--单站点站点小时、日数据-模块
 */

function airQualitySiteDataType(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/airQualitySiteDataType',
    method: 'get',
    params: data
  });
}
/*
空气质量--单站点站点小时、日数据-对比数据折线图
 */

function siteComparison(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/siteComparison',
    method: 'get',
    params: data
  });
}
/*
空气质量--单站站点数据 五分钟 同比--折线图和数据列表
 */

function airQualitySiteDataTypeAnother(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/airQualitySiteDataTypeAnother',
    method: 'get',
    params: data
  });
}
/*
空气质量--空气站点
 */

function getAirSite(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/getAirSite',
    method: 'get',
    params: data
  });
}
/*
空气质量--空气站点日历
 */

function airQualitySiteCalendar(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/airQualitySiteCalendar',
    method: 'get',
    params: data
  });
}
/*
空气质量--空气站点日历iaqi
 */

function iaqiCalendar(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/iaqiCalendar',
    method: 'get',
    params: data
  });
}
/*
空气质量--空气站点全年日历
 */

function airYearCalendar(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/airYearCalendar',
    method: 'get',
    params: data
  });
}
/*
空气质量--天气预报
 */

function weatherForecast(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQuality/weatherForecast',
    method: 'get',
    params: data
  });
}
/*
空气质量--行政区划
 */

function getDivisionName(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQuality/getDivisionName',
    method: 'get' // params: data

  });
}
/*
空气质量--全年空气质量占比
 */

function yearAirQualityRatio(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQuality/yearAirQualityRatio',
    method: 'get',
    params: data
  });
}
/*
空气-站点空气质量排名
 */

function airSiteQualityRanking(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQuality/airSiteQualityRanking',
    method: 'get',
    params: data
  });
}
/*
空气-区县空气质量排名
 */

function regionQualityRanking(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQuality/regionQualityRanking',
    method: 'get',
    params: data
  });
}
/*
空气-区县空气描述
 */

function airRegion(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQuality/airRegion',
    method: 'get',
    params: data
  });
}
/*
空气-站点涉气污染源数据
 */

function pollSize(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/pollSize',
    method: 'get',
    params: data
  });
}
/*
空气-站点涉气污染源一级
 */

function typeList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/typeList',
    method: 'get',
    params: data
  });
}
/*
空气-站点涉气污染源子集
 */

function treeList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/treeList',
    method: 'get',
    params: data
  });
}
/*
空气-站点涉气污染源子集站点信息
 */

function pollList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/pollList',
    method: 'get',
    params: data
  });
}
/*
空气-空气预报
 */

function regionPrediction(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/regionPrediction',
    method: 'get',
    params: data
  });
}
/*
空气-站点周边气象站
 */

function airMl(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: baseUrl + '/airQualitySite/airMl',
    method: 'get',
    params: data
  });
}

/***/ }),

/***/ "./src/assets/polluter/airbg.png":
/*!***************************************!*\
  !*** ./src/assets/polluter/airbg.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/airbg.png";

/***/ }),

/***/ "./src/assets/polluter/calendar.png":
/*!******************************************!*\
  !*** ./src/assets/polluter/calendar.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADtSURBVCiRnZA9LwRhFIWf885sSCSIQqnVqCQSBQVm4odIRKmxip2ofCVU/AP/QKXxUaqVKNRK9bw7R7ETmeyym3Wa25zn3idX2aEXnMYdoSPELvid/jgsga+FOmUr3CjrxC9geqD4dz7DmADAbBgTACAFwGrfnyYXo8pbRXkua78HCW8UXkzcvTK6tf0RxEGQjyuHZeFNx2TPRAB+9EIXD7tSpahPDz2c6Q3YbvTu6vkIXNZ6Dei/enVWBXOJmATWY6UJVM0bVn7VezrRKzDTWNBqaLYH9CTnWVFODXtEL1oDSI1ewDlWPhoCxPM3fYte6nzFYdAAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/views/airHomePage/airQualityRank/components/areaTab.vue":
/*!*********************************************************************!*\
  !*** ./src/views/airHomePage/airQualityRank/components/areaTab.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _areaTab_vue_vue_type_template_id_56b710fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./areaTab.vue?vue&type=template&id=56b710fc&scoped=true& */ "./src/views/airHomePage/airQualityRank/components/areaTab.vue?vue&type=template&id=56b710fc&scoped=true&");
/* harmony import */ var _areaTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./areaTab.vue?vue&type=script&lang=js& */ "./src/views/airHomePage/airQualityRank/components/areaTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _areaTab_vue_vue_type_style_index_0_id_56b710fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./areaTab.vue?vue&type=style&index=0&id=56b710fc&lang=scss&scoped=true& */ "./src/views/airHomePage/airQualityRank/components/areaTab.vue?vue&type=style&index=0&id=56b710fc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _areaTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _areaTab_vue_vue_type_template_id_56b710fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _areaTab_vue_vue_type_template_id_56b710fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "56b710fc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/airHomePage/airQualityRank/components/areaTab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/airHomePage/airQualityRank/components/areaTab.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./src/views/airHomePage/airQualityRank/components/areaTab.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_areaTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./areaTab.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airQualityRank/components/areaTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_areaTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/airHomePage/airQualityRank/components/areaTab.vue?vue&type=style&index=0&id=56b710fc&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./src/views/airHomePage/airQualityRank/components/areaTab.vue?vue&type=style&index=0&id=56b710fc&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_areaTab_vue_vue_type_style_index_0_id_56b710fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./areaTab.vue?vue&type=style&index=0&id=56b710fc&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airQualityRank/components/areaTab.vue?vue&type=style&index=0&id=56b710fc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_areaTab_vue_vue_type_style_index_0_id_56b710fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_areaTab_vue_vue_type_style_index_0_id_56b710fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_areaTab_vue_vue_type_style_index_0_id_56b710fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_areaTab_vue_vue_type_style_index_0_id_56b710fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/airHomePage/airQualityRank/components/areaTab.vue?vue&type=template&id=56b710fc&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./src/views/airHomePage/airQualityRank/components/areaTab.vue?vue&type=template&id=56b710fc&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_areaTab_vue_vue_type_template_id_56b710fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./areaTab.vue?vue&type=template&id=56b710fc&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airQualityRank/components/areaTab.vue?vue&type=template&id=56b710fc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_areaTab_vue_vue_type_template_id_56b710fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_areaTab_vue_vue_type_template_id_56b710fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/airHomePage/airQualityRank/components/siteTab.vue":
/*!*********************************************************************!*\
  !*** ./src/views/airHomePage/airQualityRank/components/siteTab.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _siteTab_vue_vue_type_template_id_f08445fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./siteTab.vue?vue&type=template&id=f08445fc&scoped=true& */ "./src/views/airHomePage/airQualityRank/components/siteTab.vue?vue&type=template&id=f08445fc&scoped=true&");
/* harmony import */ var _siteTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./siteTab.vue?vue&type=script&lang=js& */ "./src/views/airHomePage/airQualityRank/components/siteTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _siteTab_vue_vue_type_style_index_0_id_f08445fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./siteTab.vue?vue&type=style&index=0&id=f08445fc&lang=scss&scoped=true& */ "./src/views/airHomePage/airQualityRank/components/siteTab.vue?vue&type=style&index=0&id=f08445fc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _siteTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _siteTab_vue_vue_type_template_id_f08445fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _siteTab_vue_vue_type_template_id_f08445fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f08445fc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/airHomePage/airQualityRank/components/siteTab.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/airHomePage/airQualityRank/components/siteTab.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./src/views/airHomePage/airQualityRank/components/siteTab.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_siteTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./siteTab.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airQualityRank/components/siteTab.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_siteTab_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/airHomePage/airQualityRank/components/siteTab.vue?vue&type=style&index=0&id=f08445fc&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************!*\
  !*** ./src/views/airHomePage/airQualityRank/components/siteTab.vue?vue&type=style&index=0&id=f08445fc&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_siteTab_vue_vue_type_style_index_0_id_f08445fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./siteTab.vue?vue&type=style&index=0&id=f08445fc&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airQualityRank/components/siteTab.vue?vue&type=style&index=0&id=f08445fc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_siteTab_vue_vue_type_style_index_0_id_f08445fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_siteTab_vue_vue_type_style_index_0_id_f08445fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_siteTab_vue_vue_type_style_index_0_id_f08445fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_siteTab_vue_vue_type_style_index_0_id_f08445fc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/airHomePage/airQualityRank/components/siteTab.vue?vue&type=template&id=f08445fc&scoped=true&":
/*!****************************************************************************************************************!*\
  !*** ./src/views/airHomePage/airQualityRank/components/siteTab.vue?vue&type=template&id=f08445fc&scoped=true& ***!
  \****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_siteTab_vue_vue_type_template_id_f08445fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./siteTab.vue?vue&type=template&id=f08445fc&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airQualityRank/components/siteTab.vue?vue&type=template&id=f08445fc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_siteTab_vue_vue_type_template_id_f08445fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_siteTab_vue_vue_type_template_id_f08445fc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/airHomePage/airQualityRank/index.vue":
/*!********************************************************!*\
  !*** ./src/views/airHomePage/airQualityRank/index.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_49c9bf96_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=49c9bf96&scoped=true& */ "./src/views/airHomePage/airQualityRank/index.vue?vue&type=template&id=49c9bf96&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/airHomePage/airQualityRank/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_49c9bf96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=49c9bf96&lang=scss&scoped=true& */ "./src/views/airHomePage/airQualityRank/index.vue?vue&type=style&index=0&id=49c9bf96&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_49c9bf96_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_49c9bf96_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "49c9bf96",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/airHomePage/airQualityRank/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/airHomePage/airQualityRank/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./src/views/airHomePage/airQualityRank/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airQualityRank/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/airHomePage/airQualityRank/index.vue?vue&type=style&index=0&id=49c9bf96&lang=scss&scoped=true&":
/*!******************************************************************************************************************!*\
  !*** ./src/views/airHomePage/airQualityRank/index.vue?vue&type=style&index=0&id=49c9bf96&lang=scss&scoped=true& ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_49c9bf96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=49c9bf96&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airQualityRank/index.vue?vue&type=style&index=0&id=49c9bf96&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_49c9bf96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_49c9bf96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_49c9bf96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_49c9bf96_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/airHomePage/airQualityRank/index.vue?vue&type=template&id=49c9bf96&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./src/views/airHomePage/airQualityRank/index.vue?vue&type=template&id=49c9bf96&scoped=true& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_49c9bf96_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=49c9bf96&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/airHomePage/airQualityRank/index.vue?vue&type=template&id=49c9bf96&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_49c9bf96_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_49c9bf96_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclF1YWxpdHlSYW5rL2NvbXBvbmVudHMvYXJlYVRhYi52dWUiLCJ3ZWJwYWNrOi8vL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJRdWFsaXR5UmFuay9jb21wb25lbnRzL3NpdGVUYWIudnVlIiwid2VicGFjazovLy9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyUXVhbGl0eVJhbmsvaW5kZXgudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJRdWFsaXR5UmFuay9jb21wb25lbnRzL2FyZWFUYWIudnVlP2IyNDQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclF1YWxpdHlSYW5rL2NvbXBvbmVudHMvc2l0ZVRhYi52dWU/ZTc5NCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyUXVhbGl0eVJhbmsvaW5kZXgudnVlPzUyOTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclF1YWxpdHlSYW5rL2NvbXBvbmVudHMvYXJlYVRhYi52dWU/NjgxZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyUXVhbGl0eVJhbmsvY29tcG9uZW50cy9zaXRlVGFiLnZ1ZT9iMDFlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJRdWFsaXR5UmFuay9pbmRleC52dWU/M2E2NCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyUXVhbGl0eVJhbmsvY29tcG9uZW50cy9hcmVhVGFiLnZ1ZT9mODUzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJRdWFsaXR5UmFuay9jb21wb25lbnRzL3NpdGVUYWIudnVlPzg3M2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclF1YWxpdHlSYW5rL2luZGV4LnZ1ZT9kNzAzIiwid2VicGFjazovLy8uL3NyYy9hcGkvYWlyX3F1YWxpdHkuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wb2xsdXRlci9haXJiZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wb2xsdXRlci9jYWxlbmRhci5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclF1YWxpdHlSYW5rL2NvbXBvbmVudHMvYXJlYVRhYi52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclF1YWxpdHlSYW5rL2NvbXBvbmVudHMvYXJlYVRhYi52dWU/ZjZlMyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyUXVhbGl0eVJhbmsvY29tcG9uZW50cy9hcmVhVGFiLnZ1ZT8yYWVhIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJRdWFsaXR5UmFuay9jb21wb25lbnRzL2FyZWFUYWIudnVlPzdmNjIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclF1YWxpdHlSYW5rL2NvbXBvbmVudHMvc2l0ZVRhYi52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclF1YWxpdHlSYW5rL2NvbXBvbmVudHMvc2l0ZVRhYi52dWU/NjgzNyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyUXVhbGl0eVJhbmsvY29tcG9uZW50cy9zaXRlVGFiLnZ1ZT9jMWM5Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJRdWFsaXR5UmFuay9jb21wb25lbnRzL3NpdGVUYWIudnVlPzcwMGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclF1YWxpdHlSYW5rL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvYWlySG9tZVBhZ2UvYWlyUXVhbGl0eVJhbmsvaW5kZXgudnVlP2MxMWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclF1YWxpdHlSYW5rL2luZGV4LnZ1ZT8wNDU3Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9haXJIb21lUGFnZS9haXJRdWFsaXR5UmFuay9pbmRleC52dWU/NWJlNyJdLCJuYW1lcyI6WyJiYXNlVXJsIiwicHJvY2VzcyIsInJhbmtpbmciLCJkYXRhIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInBhcmFtcyIsImFpckNpdHlEYXRhIiwiYWlyQ2l0eUFzc2Vzc0NvbmRpdGlvbiIsImFpckNpdHlBc3Nlc3NUZW5kZW5jeSIsImFpclBvbGx1dGFudFJhdGlvIiwiYWlyUG9sbHV0YW50U2l0ZVJhdGlvIiwiYWlyUG9sbHV0YW50WWVhciIsImFpclBvbGx1dGFudFNpdGVZZWFyIiwiYWlyUXVhbGl0eVJhbmtpbmciLCJhaXJRdWFsaXR5U2l0ZUxpc3QiLCJhaXJSYW5raW5nIiwib3ZlcnByb29mQWxlcnRzIiwiYWlyUmFua2luYXNkYXNkYWciLCJhaXJRdWFsaXR5U2l0ZURhdGEiLCJhaXJRdWFsaXR5U2l0ZURhdGFUeXBlIiwic2l0ZUNvbXBhcmlzb24iLCJhaXJRdWFsaXR5U2l0ZURhdGFUeXBlQW5vdGhlciIsImdldEFpclNpdGUiLCJhaXJRdWFsaXR5U2l0ZUNhbGVuZGFyIiwiaWFxaUNhbGVuZGFyIiwiYWlyWWVhckNhbGVuZGFyIiwid2VhdGhlckZvcmVjYXN0IiwiZ2V0RGl2aXNpb25OYW1lIiwieWVhckFpclF1YWxpdHlSYXRpbyIsImFpclNpdGVRdWFsaXR5UmFua2luZyIsInJlZ2lvblF1YWxpdHlSYW5raW5nIiwiYWlyUmVnaW9uIiwicG9sbFNpemUiLCJ0eXBlTGlzdCIsInRyZWVMaXN0IiwicG9sbExpc3QiLCJyZWdpb25QcmVkaWN0aW9uIiwiYWlyTWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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O0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFrRztBQUN2QztBQUNMO0FBQ3NDOzs7QUFHNUY7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsNkVBQU07QUFDUixFQUFFLDhGQUFNO0FBQ1IsRUFBRSx1R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBd1QsQ0FBZ0Isd1VBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBNVU7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdHO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUcxRjtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSwyRUFBTTtBQUNSLEVBQUUsNEZBQU07QUFDUixFQUFFLHFHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUEwUyxDQUFnQixzVUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0E5VDtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy81My5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJhaXJfaGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmcyBhcWktd3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmc1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm51bWJlclwiPnt7aW5mby5hcWl9fTwvZGl2PlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0eXBlLWJveFwiIDpjbGFzcz1cImdldENvbG9yQmcoaW5mby5raW5kKVwiPnt7aW5mby5raW5kfX08L3NwYW4+XHJcbiAgICAgICAgICB7e2luZm8ucmVnaW9ufX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZnMgY2FsZW5kYXJcIiBAY2xpY2s9XCJnb0NhbGVuZGVyXCI+XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIkAvYXNzZXRzL3BvbGx1dGVyL2NhbGVuZGFyLnBuZ1wiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiA4cHhcIj5cclxuICAgICAgICAgIOepuuawlOi0qOmHj+aXpeWOhlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImFxaS1kZXNcIj7mlbDmja7ml7bpl7TvvJp7e2luZm8udGltZX19PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmcyBhcWktYm94XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImFxaS1ib3gtaXRlbVwiPlxyXG4gICAgICAgICAge3tpbmZvLnBvbGx1dGFudHN8fCctJ319XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc1wiPummluimgeaxoeafk+eJqTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXFpLWJveC1pdGVtXCI+XHJcbiAgICAgICAgICB7e2luZm8ubWF4VmFsdWV8fCctJ319XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImRlc1wiPuacgOWkp+Wwj+aXtua1k+W6pjwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwicmFuay10YWItd3JhcHBlclwiPlxyXG4gICAgICA8ZGl2IHYtZm9yPVwiKGl0ZW0saSkgaW4gcmFua1RhYkFyclwiIDpjbGFzcz1cInJhbmtUYWJJbmRleD09PWk/J2FjdGl2ZSc6JydcIiBAY2xpY2s9XCJvbkNoYW5nZVJhbmtUYWIoaSlcIj5cclxuICAgICAgICB7e2l0ZW19fVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1ib3hcIj5cclxuICAgICAgPHRhYmxlIHYtaWY9XCJyYW5rVGFiSW5kZXg9PT0wXCIgY2xhc3M9XCJ0YWJsZS13cmFwcGVyXCIgd2lkdGg9XCIxMDAlXCI+XHJcbiAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgIDx0ciBjbGFzcz1cInRhYmxlLWhlYWRlclwiPlxyXG4gICAgICAgICAgPHRoPuaJgOWcqOWMuuWfnzwvdGg+XHJcbiAgICAgICAgICA8dGg+QVFJPC90aD5cclxuICAgICAgICAgIDx0aD7nqbrmsJTotKjph4/nrYnnuqc8L3RoPlxyXG4gICAgICAgICAgPHRoPummluimgeaxoeafk+eJqTxici8+KOacgOWkp+Wwj+aXtua1k+W6pik8L3RoPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICAgPC90aGVhZD5cclxuICAgICAgICA8dGJvZHk+XHJcbiAgICAgICAgPHRyIHYtZm9yPVwiaXRlbSBpbiB0YWJsZURhdGFcIj5cclxuICAgICAgICAgIDx0ZD57e2l0ZW0ucmVnaW9ufX08L3RkPlxyXG4gICAgICAgICAgPHRkPnt7aXRlbS5hcWl9fTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e3tpdGVtLmtpbmR9fTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e3tpdGVtLnBvbGx1dGFudHN8fCctJ319XHJcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwiaXRlbS5wb2xsdXRhbnRzIT09Jy0nJiZpdGVtLnBvbGx1dGFudHMhPT1udWxsXCI+KHt7aXRlbS5tYXhWYWx1ZX19KTwvdGVtcGxhdGU+XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICAgPHRyIHYtaWY9XCJ0YWJsZURhdGEubGVuZ3RoPT09MFwiPlxyXG4gICAgICAgICAgPHRkIGNvbHNwYW49XCI0XCI+5pqC5peg5pWw5o2uPC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcblxyXG4gICAgICA8dGVtcGxhdGUgdi1pZj1cInJhbmtUYWJJbmRleD09PTFcIj5cclxuXHJcbiAgICAgICAgPHZhbi1yb3cgY2xhc3M9XCJhaXItc2VhcmNoXCIgOmd1dHRlcj1cIjEwXCI+XHJcbiAgICAgICAgICA8dmFuLWNvbCBzcGFuPVwiN1wiPlxyXG4gICAgICAgICAgICA8dmFuLWZpZWxkXHJcbiAgICAgICAgICAgICAgICA6dmFsdWU9XCJkYXRlVHlwZVwiXHJcbiAgICAgICAgICAgICAgICByaWdodC1pY29uPVwiYXJyb3ctZG93blwiXHJcbiAgICAgICAgICAgICAgICByZWFkb25seVxyXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwicG9wVHlwZVNlbGVjdCgnYWlyJylcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC92YW4tY29sPlxyXG4gICAgICAgICAgPHZhbi1jb2wgc3Bhbj1cIjlcIj5cclxuICAgICAgICAgICAgPHZhbi1maWVsZFxyXG4gICAgICAgICAgICAgICAgcmVhZG9ubHlcclxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxyXG4gICAgICAgICAgICAgICAgOnZhbHVlPVwidGltZVNob3dcIlxyXG4gICAgICAgICAgICAgICAgaW5wdXQtYWxpZ249XCJyaWdodFwiXHJcbiAgICAgICAgICAgICAgICByaWdodC1pY29uPVwiYXJyb3ctZG93blwiXHJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJwb3BUaW1lPXRydWVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC92YW4tY29sPlxyXG4gICAgICAgIDwvdmFuLXJvdz5cclxuXHJcbiAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUtd3JhcHBlclwiIHdpZHRoPVwiMTAwJVwiPlxyXG4gICAgICAgICAgPHRoZWFkPlxyXG4gICAgICAgICAgPHRyIGNsYXNzPVwidGFibGUtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDx0aD7ljLrln588L3RoPlxyXG4gICAgICAgICAgICA8dGg+QVFJPC90aD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgPHRyIHYtZm9yPVwiaXRlbSBpbiB0YWJsZURhdGFcIj5cclxuICAgICAgICAgICAgPHRkPnt7aXRlbS5yZWdpb259fTwvdGQ+XHJcbiAgICAgICAgICAgIDx0ZD57e2l0ZW0uYXFpfX08L3RkPlxyXG4gICAgICAgICAgPC90cj5cclxuICAgICAgICAgIDx0ciB2LWlmPVwidGFibGVEYXRhLmxlbmd0aD09PTBcIj5cclxuICAgICAgICAgICAgPHRkIGNvbHNwYW49XCIyXCI+5pqC5peg5pWw5o2uPC90ZD5cclxuICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcblxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPCEtLeaQnOe0ouW8ueahhuebuOWFsy0tPlxyXG4gICAgPGFpckZpbHRlciA6aXNTaG93PVwicG9wVHlwZVwiIDp0eXBlPVwiJ2FpcidcIiBAZ2V0VHlwZT1cImdldFR5cGVcIiBAY2xvc2U9XCJwb3BUeXBlPWZhbHNlXCIvPlxyXG4gICAgPHZhbi1wb3B1cCB2LW1vZGVsPVwicG9wVGltZVwiIHBvc2l0aW9uPVwiYm90dG9tXCI+XHJcbiAgICAgIDx2YW4tZGF0ZXRpbWUtcGlja2VyIHYtbW9kZWw9XCJjdXJyZW5UaW1lXCIgOnR5cGU9XCJkYXRlVHlwZT09PSflsI/ml7bmlbDmja4nPydkYXRlaG91cic6J2RhdGUnXCIgdGl0bGU9XCLpgInmi6nml7bpl7RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBAY29uZmlybT1cIm9uQ29uZmlybVRpbWVcIiBAY2FuY2VsPVwiZW5kVGltZVBvcD1mYWxzZVwiLz5cclxuICAgIDwvdmFuLXBvcHVwPlxyXG5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IGFpckZpbHRlciBmcm9tIFwiQC9jb21wb25lbnRzL2FpckZpbHRlclwiO1xyXG4gIGltcG9ydCB7YWlyUmVnaW9uLCByZWdpb25RdWFsaXR5UmFua2luZ30gZnJvbSAnQC9hcGkvYWlyX3F1YWxpdHknO1xyXG4gIGltcG9ydCBkYXlqcyBmcm9tICdkYXlqcydcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJhcmVhVGFiXCIsXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgIGFpckZpbHRlclxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5mbzoge1xyXG4gICAgICAgICAga2luZDogJ+S8mCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIHJhbmtUYWJBcnI6IFsn5a6e5pe25o6S5ZCNJywgJ+WOhuWPsuaOkuWQjSddLFxyXG4gICAgICAgIHJhbmtUYWJJbmRleDogMCxcclxuICAgICAgICB0YWJsZURhdGE6IFtdLFxyXG4gICAgICAgIGRhdGVUeXBlOiAn5bCP5pe25pWw5o2uJyxcclxuICAgICAgICBzaG93UGlja2VyRmFjdG9yOiBmYWxzZSxcclxuICAgICAgICB0aW1lU2hvdzogJycsXHJcbiAgICAgICAgdGltZVF1ZXJ5OiAnJyxcclxuICAgICAgICBjdXJyZW5UaW1lOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHBvcFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHBvcFRpbWU6IGZhbHNlLFxyXG4gICAgICAgIHF1ZXJ5RmxhZzogbnVsbCxcclxuICAgICAgICB4enFoOiAnJyxcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgIHRoaXMueHpxaCA9IHRoaXMuJHJvdXRlLnF1ZXJ5Lnh6cWg7XHJcbiAgICAgIHRoaXMudGltZVNob3cgPSBkYXlqcygpLmZvcm1hdCgnWVlZWS1NTS1ERCBISCcpO1xyXG4gICAgICB0aGlzLnRpbWVRdWVyeSA9IGRheWpzKCkuZm9ybWF0KCdZWVlZLU1NLUREIEhIOjAwOjAwJyk7XHJcbiAgICAgIHRoaXMucXVlcnlGbGFnID0gTnVtYmVyKHRoaXMuJHJvdXRlLnF1ZXJ5LnF1ZXJ5RmxhZyk7XHJcbiAgICAgIHRoaXMucXVlcnlEZXMoKTtcclxuICAgICAgdGhpcy5xdWVyeUxpc3QoKTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIC8v5o+P6L+w5L+h5oGvXHJcbiAgICAgIHF1ZXJ5RGVzKCkge1xyXG4gICAgICAgIGFpclJlZ2lvbih7XHJcbiAgICAgICAgICBkaXZpc2lvbk5hbWU6IHRoaXMueHpxaCxcclxuICAgICAgICAgIGFxaTogdGhpcy5xdWVyeUZsYWcgPT09IDAgPyAnJyA6ICdpYXFpJ1xyXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIHRoaXMuaW5mbyA9IHJlcy5kYXRhXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgLy/ooajmoLzmlbDmja5cclxuICAgICAgcXVlcnlMaXN0KCkge1xyXG4gICAgICAgIHJlZ2lvblF1YWxpdHlSYW5raW5nKHtcclxuICAgICAgICAgIHR5cGU6IHRoaXMucmFua1RhYkluZGV4ID09PSAwID8gMSA6IDIsIC8vMeWunuaXtiAy5Y6G5Y+yXHJcbiAgICAgICAgICBkYXRhVHlwZTogdGhpcy5kYXRlVHlwZSA9PT0gJ+Wwj+aXtuaVsOaNric/J+Wwj+aXtic6J+aXpScsIC8v5bCP5pe2L+aXpVxyXG4gICAgICAgICAgdGltZTogdGhpcy50aW1lUXVlcnksXHJcbiAgICAgICAgICAvLyB0aW1lOiAnMjAyNC0wMi0yMSAxMjowMDowMCcsXHJcbiAgICAgICAgICBhcWk6IHRoaXMucXVlcnlGbGFnID09PSAwID8gJycgOiAnaWFxaSdcclxuICAgICAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLnRhYmxlRGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIG9uQ2hhbmdlUmFua1RhYihpbmRleCkge1xyXG4gICAgICAgIHRoaXMucmFua1RhYkluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgdGhpcy5xdWVyeUxpc3QoKVxyXG4gICAgICB9LFxyXG4gICAgICBnZXRDb2xvckJnKGtleSkge1xyXG4gICAgICAgIGxldCBzdGF0dXMgPSAnJztcclxuICAgICAgICBpZiAoa2V5ID09IG51bGwpIHtcclxuICAgICAgICAgIHN0YXR1cyA9ICdhaXJfd2hpdGVyYmcnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAn5LyYJykge1xyXG4gICAgICAgICAgc3RhdHVzID0gJ2Fpcl9ncmVlbmJnJztcclxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ+iJrycpIHtcclxuICAgICAgICAgIHN0YXR1cyA9ICdhaXJfeWVsbG93X2JnJztcclxuICAgICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ+i9u+W6puaxoeafkycpIHtcclxuICAgICAgICAgIHN0YXR1cyA9ICdhaXJfb3JhbmdlYmcnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSAn5Lit5bqm5rGh5p+TJyB8fCBrZXkgPT09ICfph43luqbmsaHmn5MnKSB7XHJcbiAgICAgICAgICBzdGF0dXMgPSAnYWlyX3JlZGJnJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc3RhdHVzID0gJ2Fpcl93aGl0ZXJiZyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdGF0dXM7XHJcbiAgICAgIH0sXHJcbiAgICAgIHBvcFR5cGVTZWxlY3QodHlwZSkge1xyXG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XHJcbiAgICAgICAgdGhpcy5wb3BUeXBlID0gdHJ1ZTtcclxuICAgICAgfSxcclxuICAgICAgZ2V0VHlwZShvYmosIHR5cGUpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhvYmopXHJcbiAgICAgICAgdGhpcy5kYXRlVHlwZSA9IG9iai52YWx1ZTtcclxuICAgICAgICBpZiAodGhpcy5kYXRlVHlwZSA9PT0gJ+Wwj+aXtuaVsOaNricpIHtcclxuICAgICAgICAgIHRoaXMudGltZVF1ZXJ5ID0gZGF5anMoKS5mb3JtYXQoJ1lZWVktTU0tREQgSEg6MDA6MDAnKVxyXG4gICAgICAgICAgdGhpcy50aW1lU2hvdyA9IGRheWpzKCkuZm9ybWF0KCdZWVlZLU1NLUREIEhIJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy50aW1lUXVlcnkgPSBkYXlqcygpLmZvcm1hdCgnWVlZWS1NTS1ERCcpXHJcbiAgICAgICAgICB0aGlzLnRpbWVTaG93ID0gZGF5anMoKS5mb3JtYXQoJ1lZWVktTU0tREQnKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnF1ZXJ5TGlzdCgpXHJcbiAgICAgIH0sXHJcbiAgICAgIC8v5pe26Ze056Gu6K6kXHJcbiAgICAgIG9uQ29uZmlybVRpbWUodmFsdWUpIHtcclxuICAgICAgICBpZiAodGhpcy5kYXRlVHlwZSA9PT0gJ+Wwj+aXtuaVsOaNricpIHtcclxuICAgICAgICAgIHRoaXMudGltZVF1ZXJ5ID0gZGF5anModmFsdWUpLmZvcm1hdCgnWVlZWS1NTS1ERCBISDowMDowMCcpXHJcbiAgICAgICAgICB0aGlzLnRpbWVTaG93ID0gZGF5anModmFsdWUpLmZvcm1hdCgnWVlZWS1NTS1ERCBISCcpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMudGltZVF1ZXJ5ID0gZGF5anModmFsdWUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpXHJcbiAgICAgICAgICB0aGlzLnRpbWVTaG93ID0gZGF5anModmFsdWUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucG9wVGltZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucXVlcnlMaXN0KClcclxuICAgICAgfSxcclxuICAgICAgZ29DYWxlbmRlcigpIHtcclxuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICBuYW1lOiAnYWlyQ2FsZW5kYXJRdWVyeScsXHJcbiAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICBzaXRlSWQ6IFwiXCIsXHJcbiAgICAgICAgICAgIHNpdGVOYW1lOiB0aGlzLnh6cWggPT09ICcnID8gJ+aYhuaYjuW4gicgOiB0aGlzLnh6cWgsXHJcbiAgICAgICAgICAgIHh6cWg6IHRoaXMueHpxaCA9PT0gJycgPyAn5piG5piO5biCJyA6IHRoaXMueHpxaCxcclxuICAgICAgICAgICAgdGl0bGU6IFwi56m65rCU6LSo6YeP5pel5Y6GXCIsXHJcbiAgICAgICAgICAgIHF1ZXJ5RmxhZzogdGhpcy5xdWVyeUZsYWdcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgLmFpci1zZWFyY2gge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxNHB4O1xyXG5cclxuICAgIDo6di1kZWVwIC52YW4tY2VsbCB7XHJcbiAgICAgIHBhZGRpbmc6IDNweCA4cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NiwgMjQ2LCAyNDYsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIDo6di1kZWVwIC52YW4tZmllbGRfX3JpZ2h0LWljb24ge1xyXG4gICAgICBjb2xvcjogI0M0QzRDNDtcclxuICAgICAgc2NhbGU6IDAuNztcclxuICAgIH1cclxuXHJcbiAgICA6OnYtZGVlcCAudmFuLWZpZWxkX19jb250cm9sIHtcclxuICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBzY2FsZTogMC45O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFpcl9oZWFkZXIge1xyXG4gICAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwifkAvYXNzZXRzL3BvbGx1dGVyL2FpcmJnLnBuZ1wiKSBjZW50ZXIgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTAsIDEyNywgNSwgMC4wNSk7XHJcblxyXG4gICAgLmFxaS1kZXMge1xyXG4gICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmFxaS13cmFwcGVyIHtcclxuICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG5cclxuICAgICAgLm51bWJlciB7XHJcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDEpO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAudHlwZS1ib3gge1xyXG4gICAgICAgIG1hcmdpbjogMCA4cHggMCAxM3B4O1xyXG4gICAgICAgIHBhZGRpbmc6IDJweCAxNHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FsZW5kYXIge1xyXG4gICAgICAgIHBhZGRpbmc6IDRweCAxMXB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0OCwgMjUxLCAyNTUsIDAuNSk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg2OCwgMTIzLCAyNTIsIDAuMyk7XHJcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDgyLCAxMTMsIDI1NSwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYWlyX2dyZWVuYmcge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDIyOCwgMCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLmFpcl95ZWxsb3dfYmcge1xyXG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTkxLCAwLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICAuYWlyX29yYW5nZWJnIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDEyNiwgMCwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLmFpcl9yZWRiZyB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAwLCAwLCAxKTtcclxuICAgIH1cclxuXHJcbiAgICAuYWlyX3doaXRlcmJnIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyMDQsIDIwNCwgMjA0LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICAuYXFpLWJveCB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDlweDtcclxuICAgICAgcGFkZGluZzogNXB4IDA7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcclxuICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG5cclxuICAgICAgLmFxaS1ib3gtaXRlbSB7XHJcbiAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgLmRlcyB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnJhbmstdGFiLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgbWFyZ2luOiAyN3B4IGF1dG8gMTZweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0MiwgMjQ1LCAyNTUsIDEpO1xyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgIHBhZGRpbmc6IDhweCAyNnB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuYWN0aXZlIHtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSg2OCwgMTIzLCAyNTIsIDEpO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC50YWJsZS1ib3gge1xyXG4gICAgbWFyZ2luOiAwIDEycHg7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDx2YW4tcm93IGNsYXNzPVwiYWlyLXNlYXJjaFwiIDpndXR0ZXI9XCIxMFwiPlxyXG4gICAgICA8dmFuLWNvbCBzcGFuPVwiN1wiPlxyXG4gICAgICAgIDx2YW4tZmllbGRcclxuICAgICAgICAgICAgOnZhbHVlPVwiZGF0ZVR5cGVcIlxyXG4gICAgICAgICAgICByaWdodC1pY29uPVwiYXJyb3ctZG93blwiXHJcbiAgICAgICAgICAgIHJlYWRvbmx5XHJcbiAgICAgICAgICAgIEBjbGljaz1cInBvcFR5cGVTZWxlY3QoJ2FpcicpXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L3Zhbi1jb2w+XHJcbiAgICAgIDx2YW4tY29sIHNwYW49XCI5XCI+XHJcbiAgICAgICAgPHZhbi1maWVsZFxyXG4gICAgICAgICAgICByZWFkb25seVxyXG4gICAgICAgICAgICBjbGlja2FibGVcclxuICAgICAgICAgICAgOnZhbHVlPVwidGltZVNob3dcIlxyXG4gICAgICAgICAgICBpbnB1dC1hbGlnbj1cInJpZ2h0XCJcclxuICAgICAgICAgICAgcmlnaHQtaWNvbj1cImFycm93LWRvd25cIlxyXG4gICAgICAgICAgICBAY2xpY2s9XCJwb3BUaW1lPXRydWVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvdmFuLWNvbD5cclxuICAgIDwvdmFuLXJvdz5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwidGFibGUtYm94XCI+XHJcbiAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlLXdyYXBwZXJcIiB3aWR0aD1cIjEwMCVcIj5cclxuICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgPHRyIGNsYXNzPVwidGFibGUtaGVhZGVyXCI+XHJcbiAgICAgICAgICA8dGg+55uR5rWL56uZ54K5PC90aD5cclxuICAgICAgICAgIDx0aD5BUUk8L3RoPlxyXG4gICAgICAgICAgPHRoPuepuuawlOi0qOmHj+etiee6pzwvdGg+XHJcbiAgICAgICAgICA8dGg+6aaW6KaB5rGh5p+T54mpPGJyLz4o5pyA5aSn5bCP5pe25rWT5bqmKTwvdGg+XHJcbiAgICAgICAgPC90cj5cclxuICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgIDx0Ym9keT5cclxuICAgICAgICA8dHIgdi1mb3I9XCJpdGVtIGluIHRhYmxlRGF0YVwiPlxyXG4gICAgICAgICAgPHRkPnt7aXRlbS5TSVRFX05BTUV9fTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e3tpdGVtLkFRSX19PC90ZD5cclxuICAgICAgICAgIDx0ZD57e2l0ZW0uS0lORH19PC90ZD5cclxuICAgICAgICAgIDx0ZD57e2l0ZW0uUFJJTUFSWV9QT0xMVVRBTlR9fVxyXG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cIml0ZW0uUFJJTUFSWV9QT0xMVVRBTlQhPT0nLScmJml0ZW0uUFJJTUFSWV9QT0xMVVRBTlQhPT1udWxsXCI+KHt7aXRlbS5NQVhWQUxVRX19KTwvdGVtcGxhdGU+XHJcbiAgICAgICAgICA8L3RkPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICAgPHRyIHYtaWY9XCJ0YWJsZURhdGEubGVuZ3RoPT09MFwiPlxyXG4gICAgICAgICAgPHRkIGNvbHNwYW49XCI0XCI+5pqC5peg5pWw5o2uPC90ZD5cclxuICAgICAgICA8L3RyPlxyXG4gICAgICAgIDwvdGJvZHk+XHJcbiAgICAgIDwvdGFibGU+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0t5pCc57Si5by55qGG55u45YWzLS0+XHJcbiAgICA8YWlyRmlsdGVyIDppc1Nob3c9XCJwb3BUeXBlXCIgOnR5cGU9XCInYWlyJ1wiIEBnZXRUeXBlPVwiZ2V0VHlwZVwiIEBjbG9zZT1cInBvcFR5cGU9ZmFsc2VcIi8+XHJcbiAgICA8dmFuLXBvcHVwIHYtbW9kZWw9XCJwb3BUaW1lXCIgcG9zaXRpb249XCJib3R0b21cIj5cclxuICAgICAgPHZhbi1kYXRldGltZS1waWNrZXIgdi1tb2RlbD1cImN1cnJlblRpbWVcIiA6dHlwZT1cImRhdGVUeXBlPT09J+Wwj+aXtuaVsOaNric/J2RhdGVob3VyJzonZGF0ZSdcIiB0aXRsZT1cIumAieaLqeaXtumXtFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjb25maXJtPVwib25Db25maXJtVGltZVwiIEBjYW5jZWw9XCJlbmRUaW1lUG9wPWZhbHNlXCIvPlxyXG4gICAgPC92YW4tcG9wdXA+XHJcblxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgYWlyRmlsdGVyIGZyb20gXCJAL2NvbXBvbmVudHMvYWlyRmlsdGVyXCI7XHJcbiAgaW1wb3J0IHthaXJTaXRlUXVhbGl0eVJhbmtpbmd9IGZyb20gJ0AvYXBpL2Fpcl9xdWFsaXR5JztcclxuICBpbXBvcnQgZGF5anMgZnJvbSAnZGF5anMnXHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwic2l0ZVRhYlwiLFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICBhaXJGaWx0ZXJcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGRhdGVUeXBlOiAn5bCP5pe25pWw5o2uJyxcclxuICAgICAgICBzaG93UGlja2VyRmFjdG9yOiBmYWxzZSxcclxuICAgICAgICB0aW1lU2hvdzogJycsXHJcbiAgICAgICAgdGltZVF1ZXJ5OiAnJyxcclxuICAgICAgICBjdXJyZW5UaW1lOiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIHBvcFR5cGU6IGZhbHNlLFxyXG4gICAgICAgIHBvcFRpbWU6IGZhbHNlLFxyXG4gICAgICAgIHRhYmxlRGF0YTogW10sXHJcbiAgICAgICAgcXVlcnlGbGFnOiBudWxsLFxyXG4gICAgICAgIHh6cWg6ICcnLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgdGhpcy54enFoID0gdGhpcy4kcm91dGUucXVlcnkueHpxaDtcclxuICAgICAgdGhpcy50aW1lU2hvdyA9IGRheWpzKCkuZm9ybWF0KCdZWVlZLU1NLUREIEhIJyk7XHJcbiAgICAgIHRoaXMudGltZVF1ZXJ5ID0gZGF5anMoKS5mb3JtYXQoJ1lZWVktTU0tREQgSEg6MDA6MDAnKTtcclxuICAgICAgdGhpcy5xdWVyeUZsYWcgPSBOdW1iZXIodGhpcy4kcm91dGUucXVlcnkucXVlcnlGbGFnKTtcclxuICAgICAgdGhpcy5xdWVyeURhdGEoKTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIHF1ZXJ5RGF0YSgpIHtcclxuICAgICAgICBhaXJTaXRlUXVhbGl0eVJhbmtpbmcoe1xyXG4gICAgICAgICAgdHlwZTogdGhpcy5kYXRlVHlwZSA9PT0gJ+Wwj+aXtuaVsOaNricgPyAxIDogMiwgLy8x5bCP5pe2IDLml6VcclxuICAgICAgICAgIHRpbWU6IHRoaXMudGltZVF1ZXJ5LFxyXG4gICAgICAgICAgYXFpOiB0aGlzLnF1ZXJ5RmxhZyA9PT0gMCA/ICcnIDogJ2lhcWknLFxyXG4gICAgICAgICAgZGl2aXNpb25OYW1lOiB0aGlzLnh6cWgsXHJcbiAgICAgICAgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgdGhpcy50YWJsZURhdGEgPSByZXMuZGF0YTtcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBwb3BUeXBlU2VsZWN0KHR5cGUpIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgICAgIHRoaXMucG9wVHlwZSA9IHRydWU7XHJcbiAgICAgIH0sXHJcbiAgICAgIGdldFR5cGUob2JqLCB0eXBlKSB7XHJcbiAgICAgICAgdGhpcy5kYXRlVHlwZSA9IG9iai52YWx1ZTtcclxuICAgICAgICBpZiAodGhpcy5kYXRlVHlwZSA9PT0gJ+Wwj+aXtuaVsOaNricpIHtcclxuICAgICAgICAgIHRoaXMudGltZVF1ZXJ5ID0gZGF5anMoKS5mb3JtYXQoJ1lZWVktTU0tREQgSEg6MDA6MDAnKVxyXG4gICAgICAgICAgdGhpcy50aW1lU2hvdyA9IGRheWpzKCkuZm9ybWF0KCdZWVlZLU1NLUREIEhIJylcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy50aW1lUXVlcnkgPSBkYXlqcygpLmZvcm1hdCgnWVlZWS1NTS1ERCcpXHJcbiAgICAgICAgICB0aGlzLnRpbWVTaG93ID0gZGF5anMoKS5mb3JtYXQoJ1lZWVktTU0tREQnKVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnF1ZXJ5RGF0YSgpXHJcbiAgICAgIH0sXHJcbiAgICAgIC8v5pe26Ze056Gu6K6kXHJcbiAgICAgIG9uQ29uZmlybVRpbWUodmFsdWUpIHtcclxuICAgICAgICBpZiAodGhpcy5kYXRlVHlwZSA9PT0gJ+Wwj+aXtuaVsOaNricpIHtcclxuICAgICAgICAgIHRoaXMudGltZVF1ZXJ5ID0gZGF5anModmFsdWUpLmZvcm1hdCgnWVlZWS1NTS1ERCBISDowMDowMCcpXHJcbiAgICAgICAgICB0aGlzLnRpbWVTaG93ID0gZGF5anModmFsdWUpLmZvcm1hdCgnWVlZWS1NTS1ERCBISCcpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMudGltZVF1ZXJ5ID0gZGF5anModmFsdWUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpXHJcbiAgICAgICAgICB0aGlzLnRpbWVTaG93ID0gZGF5anModmFsdWUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucG9wVGltZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucXVlcnlEYXRhKClcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIC50YWJsZS1ib3gge1xyXG4gICAgbWFyZ2luOiAwIDEycHg7XHJcbiAgfVxyXG5cclxuICAuYWlyLXNlYXJjaCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE0cHg7XHJcblxyXG4gICAgOjp2LWRlZXAgLnZhbi1jZWxsIHtcclxuICAgICAgcGFkZGluZzogM3B4IDhweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ2LCAyNDYsIDI0NiwgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgOjp2LWRlZXAgLnZhbi1maWVsZF9fcmlnaHQtaWNvbiB7XHJcbiAgICAgIGNvbG9yOiAjQzRDNEM0O1xyXG4gICAgICBzY2FsZTogMC43O1xyXG4gICAgfVxyXG5cclxuICAgIDo6di1kZWVwIC52YW4tZmllbGRfX2NvbnRyb2wge1xyXG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIHNjYWxlOiAwLjk7XHJcbiAgICB9XHJcbiAgfVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDx2YW4tbmF2LWJhciB0aXRsZT1cIuepuuawlOi0qOmHj+aOkuWQjVwiIGxlZnQtYXJyb3cgQGNsaWNrLWxlZnQ9XCIkcm91dGVyLmdvKC0xKVwiIGZpeGVkPjwvdmFuLW5hdi1iYXI+XHJcbiAgICA8ZGl2IGNsYXNzPVwic2Nyb2xsLXRvLXRvcC13cmFwcGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZS10YWItd3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgdi1mb3I9XCIoaXRlbSxpKSBpbiB0aXRsZVRhYkFyclwiIDpjbGFzcz1cInRpdGxlVGFiSW5kZXg9PT1pPydhY3RpdmUnOicnXCIgQGNsaWNrPVwib25DaGFuZ2VUaXRsZVRhYihpKVwiPlxyXG4gICAgICAgICAge3tpdGVtfX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8YXJlYVRhYiB2LWlmPVwidGl0bGVUYWJJbmRleD09PTBcIi8+XHJcbiAgICAgIDxzaXRlVGFiIHYtaWY9XCJ0aXRsZVRhYkluZGV4PT09MVwiLz5cclxuXHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IGFyZWFUYWIgZnJvbSBcIkAvdmlld3MvYWlySG9tZVBhZ2UvYWlyUXVhbGl0eVJhbmsvY29tcG9uZW50cy9hcmVhVGFiXCI7XHJcbiAgaW1wb3J0IHNpdGVUYWIgZnJvbSBcIkAvdmlld3MvYWlySG9tZVBhZ2UvYWlyUXVhbGl0eVJhbmsvY29tcG9uZW50cy9zaXRlVGFiXCI7XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJpbmRleFwiLFxyXG4gICAgY29tcG9uZW50czp7XHJcbiAgICAgIGFyZWFUYWIsXHJcbiAgICAgIHNpdGVUYWJcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHRpdGxlVGFiQXJyOiBbJ+WMuuWOv+epuuawlOi0qOmHj+aOkuWQjScsICfnq5nngrnnqbrmsJTotKjph4/mjpLlkI0nXSxcclxuICAgICAgICB0aXRsZVRhYkluZGV4OiAwLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpe1xyXG5cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIG9uQ2hhbmdlVGl0bGVUYWIoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLnRpdGxlVGFiSW5kZXggPSBpbmRleDtcclxuICAgICAgfSxcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIC50aXRsZS10YWItd3JhcHBlciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE2cHggMThweCAxMHB4O1xyXG5cclxuICAgIGRpdiB7XHJcbiAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDE3NiwgMTgzLCAxOTQsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC5hY3RpdmUge1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQyLCAyNDUsIDI1NSwgMSk7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDgyLCAxMTMsIDI1NSwgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhaXJfaGVhZGVyXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZzIGFxaS13cmFwcGVyXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZnNcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm51bWJlclwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaW5mby5hcWkpKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInR5cGUtYm94XCIsIGNsYXNzOiBfdm0uZ2V0Q29sb3JCZyhfdm0uaW5mby5raW5kKSB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uaW5mby5raW5kKSldXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5pbmZvLnJlZ2lvbikgKyBcIiBcIiksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmcyBjYWxlbmRhclwiLCBvbjogeyBjbGljazogX3ZtLmdvQ2FsZW5kZXIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tcmlnaHRcIjogXCI4cHhcIiB9LFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL3BvbGx1dGVyL2NhbGVuZGFyLnBuZ1wiKSB9LFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIOepuuawlOi0qOmHj+aXpeWOhiBcIiksXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgXSksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYXFpLWRlc1wiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXCLmlbDmja7ml7bpl7TvvJpcIiArIF92bS5fcyhfdm0uaW5mby50aW1lKSksXG4gICAgICAgIF0pLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZzIGFxaS1ib3hcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhcWktYm94LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmluZm8ucG9sbHV0YW50cyB8fCBcIi1cIikgKyBcIiBcIiksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJkZXNcIiB9LCBbX3ZtLl92KFwi6aaW6KaB5rGh5p+T54mpXCIpXSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJhcWktYm94LWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLmluZm8ubWF4VmFsdWUgfHwgXCItXCIpICsgXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiZGVzXCIgfSwgW192bS5fdihcIuacgOWkp+Wwj+aXtua1k+W6plwiKV0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicmFuay10YWItd3JhcHBlclwiIH0sXG4gICAgICAgIF92bS5fbChfdm0ucmFua1RhYkFyciwgZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzczogX3ZtLnJhbmtUYWJJbmRleCA9PT0gaSA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uQ2hhbmdlUmFua1RhYihpKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIiBcIiArIF92bS5fcyhpdGVtKSArIFwiIFwiKV1cbiAgICAgICAgICApXG4gICAgICAgIH0pLFxuICAgICAgICAwXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFibGUtYm94XCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5yYW5rVGFiSW5kZXggPT09IDBcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFibGUtd3JhcHBlclwiLCBhdHRyczogeyB3aWR0aDogXCIxMDAlXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRhYmxlRGF0YSwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLnJlZ2lvbikpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoaXRlbS5hcWkpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ua2luZCkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0ucG9sbHV0YW50cyB8fCBcIi1cIikgKyBcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnBvbGx1dGFudHMgIT09IFwiLVwiICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnBvbGx1dGFudHMgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbX3ZtLl92KFwiKFwiICsgX3ZtLl9zKGl0ZW0ubWF4VmFsdWUpICsgXCIpXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0udGFibGVEYXRhLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgY29sc3BhbjogXCI0XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLmmoLml6DmlbDmja5cIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0ucmFua1RhYkluZGV4ID09PSAxXG4gICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidmFuLXJvd1wiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJhaXItc2VhcmNoXCIsIGF0dHJzOiB7IGd1dHRlcjogMTAgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInZhbi1jb2xcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNwYW46IFwiN1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInZhbi1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kYXRlVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInJpZ2h0LWljb25cIjogXCJhcnJvdy1kb3duXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucG9wVHlwZVNlbGVjdChcImFpclwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2YW4tY29sXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBzcGFuOiBcIjlcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2YW4tZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnRpbWVTaG93LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaW5wdXQtYWxpZ25cIjogXCJyaWdodFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmlnaHQtaWNvblwiOiBcImFycm93LWRvd25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnBvcFRpbWUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0YWJsZS13cmFwcGVyXCIsIGF0dHJzOiB7IHdpZHRoOiBcIjEwMCVcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udGFibGVEYXRhLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLnJlZ2lvbikpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLmFxaSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS50YWJsZURhdGEubGVuZ3RoID09PSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0clwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgY29sc3BhbjogXCIyXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuaaguaXoOaVsOaNrlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICAgIF9jKFwiYWlyRmlsdGVyXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgaXNTaG93OiBfdm0ucG9wVHlwZSwgdHlwZTogXCJhaXJcIiB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGdldFR5cGU6IF92bS5nZXRUeXBlLFxuICAgICAgICAgIGNsb3NlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICBfdm0ucG9wVHlwZSA9IGZhbHNlXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwidmFuLXBvcHVwXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBwb3NpdGlvbjogXCJib3R0b21cIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnBvcFRpbWUsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICBfdm0ucG9wVGltZSA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwicG9wVGltZVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInZhbi1kYXRldGltZS1waWNrZXJcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgdHlwZTogX3ZtLmRhdGVUeXBlID09PSBcIuWwj+aXtuaVsOaNrlwiID8gXCJkYXRlaG91clwiIDogXCJkYXRlXCIsXG4gICAgICAgICAgICAgIHRpdGxlOiBcIumAieaLqeaXtumXtFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNvbmZpcm06IF92bS5vbkNvbmZpcm1UaW1lLFxuICAgICAgICAgICAgICBjYW5jZWw6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uZW5kVGltZVBvcCA9IGZhbHNlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5jdXJyZW5UaW1lLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgIF92bS5jdXJyZW5UaW1lID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY3VycmVuVGltZVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgICAgX2MoXCJ0clwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLWhlYWRlclwiIH0sIFtcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5omA5Zyo5Yy65Z+fXCIpXSksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkFRSVwiKV0pLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLnqbrmsJTotKjph4/nrYnnuqdcIildKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi6aaW6KaB5rGh5p+T54mpXCIpLCBfYyhcImJyXCIpLCBfdm0uX3YoXCIo5pyA5aSn5bCP5pe25rWT5bqmKVwiKV0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgICAgX2MoXCJ0clwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLWhlYWRlclwiIH0sIFtcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5Yy65Z+fXCIpXSksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIkFRSVwiKV0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJ2YW4tcm93XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYWlyLXNlYXJjaFwiLCBhdHRyczogeyBndXR0ZXI6IDEwIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2YW4tY29sXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHNwYW46IFwiN1wiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2YW4tZmllbGRcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRhdGVUeXBlLFxuICAgICAgICAgICAgICAgICAgXCJyaWdodC1pY29uXCI6IFwiYXJyb3ctZG93blwiLFxuICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IFwiXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5wb3BUeXBlU2VsZWN0KFwiYWlyXCIpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJ2YW4tY29sXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IHNwYW46IFwiOVwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJ2YW4tZmllbGRcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICByZWFkb25seTogXCJcIixcbiAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udGltZVNob3csXG4gICAgICAgICAgICAgICAgICBcImlucHV0LWFsaWduXCI6IFwicmlnaHRcIixcbiAgICAgICAgICAgICAgICAgIFwicmlnaHQtaWNvblwiOiBcImFycm93LWRvd25cIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0ucG9wVGltZSA9IHRydWVcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLWJveFwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFibGUtd3JhcHBlclwiLCBhdHRyczogeyB3aWR0aDogXCIxMDAlXCIgfSB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInRib2R5XCIsXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRhYmxlRGF0YSwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLlNJVEVfTkFNRSkpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW192bS5fdihfdm0uX3MoaXRlbS5BUUkpKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uS0lORCkpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0uUFJJTUFSWV9QT0xMVVRBTlQpICsgXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5QUklNQVJZX1BPTExVVEFOVCAhPT0gXCItXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uUFJJTUFSWV9QT0xMVVRBTlQgIT09IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBbX3ZtLl92KFwiKFwiICsgX3ZtLl9zKGl0ZW0uTUFYVkFMVUUpICsgXCIpXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0udGFibGVEYXRhLmxlbmd0aCA9PT0gMFxuICAgICAgICAgICAgICAgICAgPyBfYyhcInRyXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIHsgYXR0cnM6IHsgY29sc3BhbjogXCI0XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLmmoLml6DmlbDmja5cIiksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAyXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXCJhaXJGaWx0ZXJcIiwge1xuICAgICAgICBhdHRyczogeyBpc1Nob3c6IF92bS5wb3BUeXBlLCB0eXBlOiBcImFpclwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgZ2V0VHlwZTogX3ZtLmdldFR5cGUsXG4gICAgICAgICAgY2xvc2U6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIF92bS5wb3BUeXBlID0gZmFsc2VcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2YW4tcG9wdXBcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IHBvc2l0aW9uOiBcImJvdHRvbVwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0ucG9wVGltZSxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5wb3BUaW1lID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJwb3BUaW1lXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidmFuLWRhdGV0aW1lLXBpY2tlclwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB0eXBlOiBfdm0uZGF0ZVR5cGUgPT09IFwi5bCP5pe25pWw5o2uXCIgPyBcImRhdGVob3VyXCIgOiBcImRhdGVcIixcbiAgICAgICAgICAgICAgdGl0bGU6IFwi6YCJ5oup5pe26Ze0XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY29uZmlybTogX3ZtLm9uQ29uZmlybVRpbWUsXG4gICAgICAgICAgICAgIGNhbmNlbDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5lbmRUaW1lUG9wID0gZmFsc2VcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmN1cnJlblRpbWUsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmN1cnJlblRpbWUgPSAkJHZcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjdXJyZW5UaW1lXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJ0aGVhZFwiLCBbXG4gICAgICBfYyhcInRyXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGUtaGVhZGVyXCIgfSwgW1xuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLnm5HmtYvnq5nngrlcIildKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwiQVFJXCIpXSksXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIuepuuawlOi0qOmHj+etiee6p1wiKV0pLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLpppbopoHmsaHmn5PnialcIiksIF9jKFwiYnJcIiksIF92bS5fdihcIijmnIDlpKflsI/ml7bmtZPluqYpXCIpXSksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF9jKFwidmFuLW5hdi1iYXJcIiwge1xuICAgICAgICBhdHRyczogeyB0aXRsZTogXCLnqbrmsJTotKjph4/mjpLlkI1cIiwgXCJsZWZ0LWFycm93XCI6IFwiXCIsIGZpeGVkOiBcIlwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgXCJjbGljay1sZWZ0XCI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0uJHJvdXRlci5nbygtMSlcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJzY3JvbGwtdG8tdG9wLXdyYXBwZXJcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0aXRsZS10YWItd3JhcHBlclwiIH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLnRpdGxlVGFiQXJyLCBmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnRpdGxlVGFiSW5kZXggPT09IGkgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkNoYW5nZVRpdGxlVGFiKGkpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIiBcIiArIF92bS5fcyhpdGVtKSArIFwiIFwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0udGl0bGVUYWJJbmRleCA9PT0gMCA/IF9jKFwiYXJlYVRhYlwiKSA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS50aXRsZVRhYkluZGV4ID09PSAxID8gX2MoXCJzaXRlVGFiXCIpIDogX3ZtLl9lKCksXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIkAvYXNzZXRzL3BvbGx1dGVyL2FpcmJnLnBuZ1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmFpci1zZWFyY2hbZGF0YS12LTU2YjcxMGZjXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDE0cHg7XFxufVxcbi5haXItc2VhcmNoW2RhdGEtdi01NmI3MTBmY10gIC52YW4tY2VsbCB7XFxuICBwYWRkaW5nOiAzcHggOHB4O1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcXG59XFxuLmFpci1zZWFyY2hbZGF0YS12LTU2YjcxMGZjXSAgLnZhbi1maWVsZF9fcmlnaHQtaWNvbiB7XFxuICBjb2xvcjogI0M0QzRDNDtcXG4gIHNjYWxlOiAwLjc7XFxufVxcbi5haXItc2VhcmNoW2RhdGEtdi01NmI3MTBmY10gIC52YW4tZmllbGRfX2NvbnRyb2wge1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHNjYWxlOiAwLjk7XFxufVxcbi5haXJfaGVhZGVyW2RhdGEtdi01NmI3MTBmY10ge1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBjZW50ZXIgbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSgyNTAsIDEyNywgNSwgMC4wNSk7XFxufVxcbi5haXJfaGVhZGVyIC5hcWktZGVzW2RhdGEtdi01NmI3MTBmY10ge1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLmFpcl9oZWFkZXIgLmFxaS13cmFwcGVyW2RhdGEtdi01NmI3MTBmY10ge1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLmFpcl9oZWFkZXIgLmFxaS13cmFwcGVyIC5udW1iZXJbZGF0YS12LTU2YjcxMGZjXSB7XFxuICBmb250LXNpemU6IDM2cHg7XFxuICBjb2xvcjogIzEyMTIzNjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uYWlyX2hlYWRlciAuYXFpLXdyYXBwZXIgLnR5cGUtYm94W2RhdGEtdi01NmI3MTBmY10ge1xcbiAgbWFyZ2luOiAwIDhweCAwIDEzcHg7XFxuICBwYWRkaW5nOiAycHggMTRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uYWlyX2hlYWRlciAuYXFpLXdyYXBwZXIgLmNhbGVuZGFyW2RhdGEtdi01NmI3MTBmY10ge1xcbiAgcGFkZGluZzogNHB4IDExcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI0OCwgMjUxLCAyNTUsIDAuNSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDY4LCAxMjMsIDI1MiwgMC4zKTtcXG4gIGZvbnQtc2l6ZTogMTNweDtcXG4gIGNvbG9yOiAjNTI3MWZmO1xcbn1cXG4uYWlyX2hlYWRlciAuYWlyX2dyZWVuYmdbZGF0YS12LTU2YjcxMGZjXSB7XFxuICBiYWNrZ3JvdW5kOiAjMDBlNDAwO1xcbn1cXG4uYWlyX2hlYWRlciAuYWlyX3llbGxvd19iZ1tkYXRhLXYtNTZiNzEwZmNdIHtcXG4gIGJhY2tncm91bmQ6ICNmZmJmMDA7XFxufVxcbi5haXJfaGVhZGVyIC5haXJfb3JhbmdlYmdbZGF0YS12LTU2YjcxMGZjXSB7XFxuICBiYWNrZ3JvdW5kOiAjZmY3ZTAwO1xcbn1cXG4uYWlyX2hlYWRlciAuYWlyX3JlZGJnW2RhdGEtdi01NmI3MTBmY10ge1xcbiAgYmFja2dyb3VuZDogcmVkO1xcbn1cXG4uYWlyX2hlYWRlciAuYWlyX3doaXRlcmJnW2RhdGEtdi01NmI3MTBmY10ge1xcbiAgYmFja2dyb3VuZDogI2NjY2NjYztcXG59XFxuLmFpcl9oZWFkZXIgLmFxaS1ib3hbZGF0YS12LTU2YjcxMGZjXSB7XFxuICBtYXJnaW4tdG9wOiA5cHg7XFxuICBwYWRkaW5nOiA1cHggMDtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5haXJfaGVhZGVyIC5hcWktYm94IC5hcWktYm94LWl0ZW1bZGF0YS12LTU2YjcxMGZjXSB7XFxuICB3aWR0aDogNTAlO1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uYWlyX2hlYWRlciAuYXFpLWJveCAuYXFpLWJveC1pdGVtIC5kZXNbZGF0YS12LTU2YjcxMGZjXSB7XFxuICBwYWRkaW5nLXRvcDogNXB4O1xcbn1cXG4ucmFuay10YWItd3JhcHBlcltkYXRhLXYtNTZiNzEwZmNdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgd2lkdGg6IDcwJTtcXG4gIG1hcmdpbjogMjdweCBhdXRvIDE2cHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogI2YyZjVmZjtcXG59XFxuLnJhbmstdGFiLXdyYXBwZXIgZGl2W2RhdGEtdi01NmI3MTBmY10ge1xcbiAgd2lkdGg6IDUwJTtcXG4gIHBhZGRpbmc6IDhweCAyNnB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnJhbmstdGFiLXdyYXBwZXIgLmFjdGl2ZVtkYXRhLXYtNTZiNzEwZmNdIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiAjNDQ3YmZjO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi50YWJsZS1ib3hbZGF0YS12LTU2YjcxMGZjXSB7XFxuICBtYXJnaW46IDAgMTJweDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudGFibGUtYm94W2RhdGEtdi1mMDg0NDVmY10ge1xcbiAgbWFyZ2luOiAwIDEycHg7XFxufVxcbi5haXItc2VhcmNoW2RhdGEtdi1mMDg0NDVmY10ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxNHB4O1xcbn1cXG4uYWlyLXNlYXJjaFtkYXRhLXYtZjA4NDQ1ZmNdICAudmFuLWNlbGwge1xcbiAgcGFkZGluZzogM3B4IDhweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJhY2tncm91bmQ6ICNmNmY2ZjY7XFxufVxcbi5haXItc2VhcmNoW2RhdGEtdi1mMDg0NDVmY10gIC52YW4tZmllbGRfX3JpZ2h0LWljb24ge1xcbiAgY29sb3I6ICNDNEM0QzQ7XFxuICBzY2FsZTogMC43O1xcbn1cXG4uYWlyLXNlYXJjaFtkYXRhLXYtZjA4NDQ1ZmNdICAudmFuLWZpZWxkX19jb250cm9sIHtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBzY2FsZTogMC45O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50aXRsZS10YWItd3JhcHBlcltkYXRhLXYtNDljOWJmOTZdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMTZweCAxOHB4IDEwcHg7XFxufVxcbi50aXRsZS10YWItd3JhcHBlciBkaXZbZGF0YS12LTQ5YzliZjk2XSB7XFxuICBwYWRkaW5nOiA2cHggMTBweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjYjBiN2MyO1xcbn1cXG4udGl0bGUtdGFiLXdyYXBwZXIgLmFjdGl2ZVtkYXRhLXYtNDljOWJmOTZdIHtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGJhY2tncm91bmQ6ICNmMmY1ZmY7XFxuICBjb2xvcjogIzUyNzFmZjtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hcmVhVGFiLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU2YjcxMGZjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNDk3YzU2NjlcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hcmVhVGFiLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU2YjcxMGZjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYXJlYVRhYi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01NmI3MTBmYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaXRlVGFiLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWYwODQ0NWZjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiM2U4ZWY5N2FcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaXRlVGFiLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWYwODQ0NWZjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vc2l0ZVRhYi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mMDg0NDVmYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00OWM5YmY5NiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjVjN2JhNDA4XCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NDljOWJmOTYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00OWM5YmY5NiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcclxubGV0IGJhc2VVcmwgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gXCJwcm9kdWN0aW9uXCIgPyBcIi9haXJcIiA6IFwiL2FpclwiOyAvL+acjeWKoeWZqOaYr2Fpcuexu++8jOacrOWcsOayoeacieWKoFxyXG4vKlxyXG7pppbpobXnqbrmsJTotKjph4/mjqXlj6NcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5raW5nKGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2NvbXBldGl0aW9uL3JhbmtpbmcnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3lsI/ml7bjgIHml6XmlbDmja5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhaXJDaXR5RGF0YShkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5L2FpckNpdHlEYXRhJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t6ICD5qC45oOF5Ya1XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWlyQ2l0eUFzc2Vzc0NvbmRpdGlvbihkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5L2FpckNpdHlBc3Nlc3NDb25kaXRpb24nLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3otovlir/nu5/orqFcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhaXJDaXR5QXNzZXNzVGVuZGVuY3koZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eS9haXJDaXR5QXNzZXNzVGVuZGVuY3knLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3msaHmn5PnianljaDmr5QtLeihjOaUv+WMuuWfn+eahFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFpclBvbGx1dGFudFJhdGlvKGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHkvYWlyUG9sbHV0YW50UmF0aW8nLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3msaHmn5PnianljaDmr5QtLeermeeCueeahFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFpclBvbGx1dGFudFNpdGVSYXRpbyhkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9haXJQb2xsdXRhbnRTaXRlUmF0aW8nLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3msaHmn5PnianlubTluqbnu5/orqEtLeWMuuWfn+eahFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFpclBvbGx1dGFudFllYXIoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eS9haXJQb2xsdXRhbnRZZWFyJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6ZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3msaHmn5PnianlubTluqbnu5/orqEtLeWNleS4quermeeCueeahFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFpclBvbGx1dGFudFNpdGVZZWFyKGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHlTaXRlL2FpclBvbGx1dGFudFNpdGVZZWFyJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t5o6S5ZCNXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWlyUXVhbGl0eVJhbmtpbmcoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eS9haXJRdWFsaXR5UmFua2luZycsXHJcblx0XHRtZXRob2Q6ICdnZXQnLFxyXG5cdFx0cGFyYW1zOiBkYXRhXHJcblx0fSlcclxufVxyXG4vKlxyXG7nqbrmsJTotKjph48tLeepuuawlOi0qOmHj+ermeeCueaVsOaNri3lm73ogIMv55yB6ICD5YiX6KGoXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWlyUXVhbGl0eVNpdGVMaXN0KGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHlTaXRlL2FpclF1YWxpdHlTaXRlc0RhdGEnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3nqbrmsJTnq5nngrnmjpLlkI1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhaXJSYW5raW5nKGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHlTaXRlL2FpclJhbmtpbmcnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3ov5EyNOWwj+aXtui2heagh+WRiuitplxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIG92ZXJwcm9vZkFsZXJ0cyhkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9vdmVycHJvb2ZBbGVydHMnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3nqbrmsJTnq5nngrnmjpLlkI1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhaXJSYW5raW5hc2Rhc2RhZyhkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9haXJSYW5raW5nJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t5Y2V56uZ54K556uZ54K55pWw5o2uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWlyUXVhbGl0eVNpdGVEYXRhKGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHlTaXRlL2FpclF1YWxpdHlTaXRlRGF0YScsXHJcblx0XHRtZXRob2Q6ICdnZXQnLFxyXG5cdFx0cGFyYW1zOiBkYXRhXHJcblx0fSlcclxufVxyXG4vKlxyXG7nqbrmsJTotKjph48tLeWNleermeeCueermeeCueWwj+aXtuOAgeaXpeaVsOaNri3mqKHlnZdcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhaXJRdWFsaXR5U2l0ZURhdGFUeXBlKGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHlTaXRlL2FpclF1YWxpdHlTaXRlRGF0YVR5cGUnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3ljZXnq5nngrnnq5nngrnlsI/ml7bjgIHml6XmlbDmja4t5a+55q+U5pWw5o2u5oqY57q/5Zu+XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2l0ZUNvbXBhcmlzb24oZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eVNpdGUvc2l0ZUNvbXBhcmlzb24nLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3ljZXnq5nnq5nngrnmlbDmja4g5LqU5YiG6ZKfIOWQjOavlC0t5oqY57q/5Zu+5ZKM5pWw5o2u5YiX6KGoXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWlyUXVhbGl0eVNpdGVEYXRhVHlwZUFub3RoZXIoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eVNpdGUvYWlyUXVhbGl0eVNpdGVEYXRhVHlwZUFub3RoZXInLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3nqbrmsJTnq5nngrlcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBaXJTaXRlKGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHlTaXRlL2dldEFpclNpdGUnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3nqbrmsJTnq5nngrnml6XljoZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhaXJRdWFsaXR5U2l0ZUNhbGVuZGFyKGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHlTaXRlL2FpclF1YWxpdHlTaXRlQ2FsZW5kYXInLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3nqbrmsJTnq5nngrnml6XljoZpYXFpXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gaWFxaUNhbGVuZGFyKGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHlTaXRlL2lhcWlDYWxlbmRhcicsXHJcblx0XHRtZXRob2Q6ICdnZXQnLFxyXG5cdFx0cGFyYW1zOiBkYXRhXHJcblx0fSlcclxufVxyXG4vKlxyXG7nqbrmsJTotKjph48tLeepuuawlOermeeCueWFqOW5tOaXpeWOhlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFpclllYXJDYWxlbmRhcihkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9haXJZZWFyQ2FsZW5kYXInLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3lpKnmsJTpooTmiqVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB3ZWF0aGVyRm9yZWNhc3QoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eS93ZWF0aGVyRm9yZWNhc3QnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3ooYzmlL/ljLrliJJcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREaXZpc2lvbk5hbWUoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eS9nZXREaXZpc2lvbk5hbWUnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdC8vIHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuXHJcbi8qXHJcbuepuuawlOi0qOmHjy0t5YWo5bm056m65rCU6LSo6YeP5Y2g5q+UXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24geWVhckFpclF1YWxpdHlSYXRpbyhkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5L3llYXJBaXJRdWFsaXR5UmF0aW8nLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCULeermeeCueepuuawlOi0qOmHj+aOkuWQjVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFpclNpdGVRdWFsaXR5UmFua2luZyhkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5L2FpclNpdGVRdWFsaXR5UmFua2luZycsXHJcblx0XHRtZXRob2Q6ICdnZXQnLFxyXG5cdFx0cGFyYW1zOiBkYXRhXHJcblx0fSlcclxufVxyXG4vKlxyXG7nqbrmsJQt5Yy65Y6/56m65rCU6LSo6YeP5o6S5ZCNXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVnaW9uUXVhbGl0eVJhbmtpbmcoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eS9yZWdpb25RdWFsaXR5UmFua2luZycsXHJcblx0XHRtZXRob2Q6ICdnZXQnLFxyXG5cdFx0cGFyYW1zOiBkYXRhXHJcblx0fSlcclxufVxyXG4vKlxyXG7nqbrmsJQt5Yy65Y6/56m65rCU5o+P6L+wXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWlyUmVnaW9uKGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHkvYWlyUmVnaW9uJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlC3nq5nngrnmtonmsJTmsaHmn5PmupDmlbDmja5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2xsU2l6ZShkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9wb2xsU2l6ZScsXHJcblx0XHRtZXRob2Q6ICdnZXQnLFxyXG5cdFx0cGFyYW1zOiBkYXRhXHJcblx0fSlcclxufVxyXG4vKlxyXG7nqbrmsJQt56uZ54K55raJ5rCU5rGh5p+T5rqQ5LiA57qnXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gdHlwZUxpc3QoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eVNpdGUvdHlwZUxpc3QnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCULeermeeCuea2ieawlOaxoeafk+a6kOWtkOmbhlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHRyZWVMaXN0KGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHlTaXRlL3RyZWVMaXN0JyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlC3nq5nngrnmtonmsJTmsaHmn5PmupDlrZDpm4bnq5nngrnkv6Hmga9cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2xsTGlzdChkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9wb2xsTGlzdCcsXHJcblx0XHRtZXRob2Q6ICdnZXQnLFxyXG5cdFx0cGFyYW1zOiBkYXRhXHJcblx0fSlcclxufVxyXG4vKlxyXG7nqbrmsJQt56m65rCU6aKE5oqlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmVnaW9uUHJlZGljdGlvbihkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9yZWdpb25QcmVkaWN0aW9uJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlC3nq5nngrnlkajovrnmsJTosaHnq5lcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhaXJNbChkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9haXJNbCcsXHJcblx0XHRtZXRob2Q6ICdnZXQnLFxyXG5cdFx0cGFyYW1zOiBkYXRhXHJcblx0fSlcclxufVxyXG4iLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJpbWcvYWlyYmcucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQTBBQUFBTkNBWUFBQUJ5NitSOEFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUR0U1VSQlZDaVJuWkE5THdSaEZJV2Y4ODVzU0NTSVFxblZxQ1FTQlFWbTRvZElSS214aXAyb2ZDVlUvQVAvUUtYeFVhcVZLTlJLOWJ3N1I3RVRtZXl5bTNXYTI1em4zaWRYMmFFWG5NWWRvU1BFTHZpZC9qZ3NnYStGT21VcjNDanJ4QzlnZXFENGR6N0RtQURBYkJnVEFDQUZ3R3JmbnlZWG84cGJSWGt1YTc4SENXOFVYa3pjdlRLNnRmMFJ4RUdRanl1SFplRk54MlRQUkFCKzlFSVhEN3RTcGFoUER6MmM2UTNZYnZUdTZ2a0lYTlo2RGVpL2VuVldCWE9KbUFUV1k2VUpWTTBiVm43VmV6clJLekRUV05CcWFMWUg5Q1RuV1ZGT0RYdEVMMW9EU0kxZXdEbFdQaG9DeFBNM2ZZdGU2bnpGWWRBQUFBQUFTVVZPUks1Q1lJST1cIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vYXJlYVRhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTZiNzEwZmMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYXJlYVRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2FyZWFUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2FyZWFUYWIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTZiNzEwZmMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1NmI3MTBmY1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1NmI3MTBmYycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1NmI3MTBmYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1NmI3MTBmYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vYXJlYVRhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTZiNzEwZmMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNTZiNzEwZmMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9haXJIb21lUGFnZS9haXJRdWFsaXR5UmFuay9jb21wb25lbnRzL2FyZWFUYWIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hcmVhVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hcmVhVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FyZWFUYWIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTZiNzEwZmMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hcmVhVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01NmI3MTBmYyZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vc2l0ZVRhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjA4NDQ1ZmMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vc2l0ZVRhYi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3NpdGVUYWIudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3NpdGVUYWIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZjA4NDQ1ZmMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJmMDg0NDVmY1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdmMDg0NDVmYycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdmMDg0NDVmYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdmMDg0NDVmYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vc2l0ZVRhYi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjA4NDQ1ZmMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZjA4NDQ1ZmMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9haXJIb21lUGFnZS9haXJRdWFsaXR5UmFuay9jb21wb25lbnRzL3NpdGVUYWIudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaXRlVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaXRlVGFiLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3NpdGVUYWIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZjA4NDQ1ZmMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9zaXRlVGFiLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mMDg0NDVmYyZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ5YzliZjk2JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ5YzliZjk2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNDljOWJmOTZcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDljOWJmOTYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDljOWJmOTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDljOWJmOTYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00OWM5YmY5NiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0OWM5YmY5NicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL2FpckhvbWVQYWdlL2FpclF1YWxpdHlSYW5rL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ5YzliZjk2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ5YzliZjk2JnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==