(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[61],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/supervision/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/supervision/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _api_case__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api/case */ "./src/api/case.js");




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  components: {},
  data: function data() {
    return {
      tabArr: ['中央环保督察', '省级环保督察', '市级环保督察'],
      btnArr: [],
      tableList: [],
      tabIndex: 0,
      btnIndex: 0,
      searchKeyword: '',
      showPickerSelect: false,
      search: {
        changeCompSituation: "",
        content: "",
        leadingUnit: "",
        no: "",
        pollutionType: [],
        repeat: "",
        selfCheckSituation: ""
      }
    };
  },
  mounted: function mounted() {
    this.initBatch();
  },
  methods: {
    changeTab: function changeTab(index) {
      this.tabIndex = index;
      this.btnIndex = 0;
      this.initBatch();
    },
    changeBtnTab: function changeBtnTab(index) {
      this.btnIndex = index;
      this.queryList();
    },
    resetSearch: function resetSearch() {
      this.search = {
        changeCompSituation: "",
        content: "",
        leadingUnit: "",
        no: "",
        pollutionType: [],
        repeat: "",
        selfCheckSituation: ""
      };
    },
    initBatch: function initBatch() {
      var _this = this;

      var search = {
        type: this.tabIndex == 0 ? 'center' : this.tabIndex == 1 ? 'province' : 'city'
      };
      Object(_api_case__WEBPACK_IMPORTED_MODULE_4__["getSuperBatch"])(search).then(function (res) {
        _this.btnArr = res.data;

        if (res.data.length > 0) {
          _this.queryList();
        }
      });
    },
    queryList: function queryList() {
      var _this2 = this;

      var tabIndex = this.tabIndex,
          btnArr = this.btnArr,
          btnIndex = this.btnIndex,
          search = this.search;
      search.batch = btnArr.length > 0 ? btnArr[btnIndex] : '';
      var info = {
        type: tabIndex == 0 ? 'center' : tabIndex == 1 ? 'province' : 'city',
        pageNum: 1,
        pageSize: 9999
      };
      this.tableList = [];
      Object(_api_case__WEBPACK_IMPORTED_MODULE_4__["getSuperList"])(info, search).then(function (res) {
        var data = res.data.records;
        data.forEach(function (item) {
          if (item.isCancel == '是') {
            item.situationText = '已销号';
          } else if (item.isComp == '是' && item.selfCheckSituation == '是') {
            item.situationText = '整改完成，已完成自查自验';
          } else if (item.isComp == '是' && item.selfCheckSituation == '否') {
            item.situationText = '整改完成，未完成自查自验';
          } else if (item.isComp == '否' && item.selfCheckSituation == '否') {
            item.situationText = '整改中';
          }
        });
        _this2.tableList = data;
        _this2.showPickerSelect = false;
      });
    },
    showDetail: function showDetail(row) {
      var tabIndex = this.tabIndex;
      var path = tabIndex == 0 ? 'superDetail' : 'provinceDetail';
      this.$router.push({
        name: path,
        query: {
          tabIndex: this.tabIndex,
          id: row.id,
          situationText: row.situationText
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/supervision/index.vue?vue&type=template&id=57ce3d88&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/supervision/index.vue?vue&type=template&id=57ce3d88&scoped=true& ***!
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
  return _c(
    "div",
    { staticStyle: { background: "#E7EDFA" } },
    [
      _c("van-nav-bar", {
        attrs: { title: "环保督察", "left-arrow": "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
      }),
      _c(
        "div",
        {
          staticStyle: {
            height: "calc(100vh - 9vh)",
            "overflow-y": "auto",
            "overflow-x": "hidden",
          },
        },
        [
          _c(
            "div",
            { staticClass: "tab-wrapper fs" },
            _vm._l(_vm.tabArr, function (item, i) {
              return _c(
                "div",
                {
                  class: ["tab-item", i === _vm.tabIndex ? "active" : ""],
                  on: {
                    click: function ($event) {
                      return _vm.changeTab(i)
                    },
                  },
                },
                [_vm._v(_vm._s(item) + " ")]
              )
            }),
            0
          ),
          _c("div", { staticClass: "btn-tips" }, [
            _c(
              "div",
              _vm._l(_vm.btnArr, function (item, i) {
                return _c(
                  "div",
                  {
                    class: [i === _vm.btnIndex ? "active" : ""],
                    on: {
                      click: function ($event) {
                        return _vm.changeBtnTab(i)
                      },
                    },
                  },
                  [
                    _vm._v(_vm._s(item)),
                    i === _vm.btnIndex
                      ? _c("img", {
                          attrs: {
                            src: __webpack_require__(/*! @/assets/supervision/sup-sure.png */ "./src/assets/supervision/sup-sure.png"),
                          },
                        })
                      : _vm._e(),
                  ]
                )
              }),
              0
            ),
            _c(
              "div",
              {
                on: {
                  click: function ($event) {
                    _vm.showPickerSelect = true
                  },
                },
              },
              [_vm._v("筛选")]
            ),
          ]),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.tabIndex != 2,
                  expression: "tabIndex!=2",
                },
              ],
              staticClass: "first-content",
            },
            [
              _c("div", { staticClass: "total" }, [
                _c("span", [
                  _vm._v("涉及昆明市总"),
                  _c("span", [_c("font", [_vm._v("33")]), _vm._v("项")], 1),
                ]),
                _c("span", [
                  _vm._v("已完成"),
                  _c("span", [_c("font", [_vm._v("13")]), _vm._v("项")], 1),
                ]),
              ]),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.tabIndex == 1,
                      expression: "tabIndex==1",
                    },
                  ],
                  staticClass: "total-bg",
                  staticStyle: { "margin-bottom": "30px" },
                },
                [_vm._m(0), _vm._m(1), _vm._m(2)]
              ),
              _c("div", { staticClass: "split" }),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.tabIndex == 0,
                      expression: "tabIndex==0",
                    },
                  ],
                  staticClass: "total-num",
                },
                [
                  _vm._m(3),
                  _c("div", { staticClass: "split" }),
                  _vm._m(4),
                  _c("div", { staticClass: "split" }),
                  _vm._m(5),
                ]
              ),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.tabIndex == 0,
                      expression: "tabIndex==0",
                    },
                  ],
                  staticClass: "total-bg",
                },
                [_vm._m(6), _vm._m(7), _vm._m(8)]
              ),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.tabIndex == 1,
                      expression: "tabIndex==1",
                    },
                  ],
                  staticClass: "total-other",
                },
                [_vm._m(9), _vm._m(10), _vm._m(11)]
              ),
            ]
          ),
          _c(
            "div",
            { staticClass: "sup-main" },
            [
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.tableList.length == 0,
                      expression: "tableList.length==0",
                    },
                  ],
                  staticClass: "no-data",
                },
                [_vm._v("暂无数据")]
              ),
              _vm._l(_vm.tableList, function (item) {
                return _c("div", [
                  _c("div", { staticClass: "sup-title" }, [
                    _c(
                      "span",
                      {
                        class: [
                          item.situationText.indexOf("已完成") > -1
                            ? "blue-bg"
                            : item.situationText.indexOf("未完成") > -1
                            ? "green-bg"
                            : item.situationText.indexOf("整改中") > -1
                            ? "yellow-bg"
                            : "cancel-bg",
                        ],
                      },
                      [_vm._v(_vm._s(item.situationText))]
                    ),
                    _c(
                      "span",
                      { class: [item.repeat == "是" ? "repeat" : "norepeat"] },
                      [_vm._v(_vm._s(item.repeat == "是" ? "重复" : "不重复"))]
                    ),
                    _c("span", [
                      _vm._v(
                        _vm._s(_vm.tabIndex == 0 ? "完成时限" : "受理时间") +
                          "：" +
                          _vm._s(
                            _vm.tabIndex == 0
                              ? item.compLimitDate
                              : item.acceptDate
                          )
                      ),
                    ]),
                  ]),
                  _c("div", { staticClass: "sup-detail" }, [
                    _c(
                      "div",
                      {
                        on: {
                          click: function ($event) {
                            return _vm.showDetail(item)
                          },
                        },
                      },
                      [_vm._v(_vm._s(item.content))]
                    ),
                    _c("div", [
                      _vm._v("举报内容关键字："),
                      _c("span", [_vm._v(_vm._s(item.keyWord))]),
                    ]),
                    _c("div", { staticClass: "sup-bottom" }, [
                      _c("span", [
                        _vm._v("污染类型"),
                        _c("span", [_vm._v(_vm._s(item.pollutionType))]),
                      ]),
                      _c("span", [
                        _vm._v("主办单位"),
                        _c("span", [_vm._v(_vm._s(item.leadingUnit))]),
                      ]),
                    ]),
                  ]),
                ])
              }),
            ],
            2
          ),
        ]
      ),
      _c(
        "van-popup",
        {
          staticStyle: { width: "72%", height: "100%" },
          attrs: { position: "right" },
          model: {
            value: _vm.showPickerSelect,
            callback: function ($$v) {
              _vm.showPickerSelect = $$v
            },
            expression: "showPickerSelect",
          },
        },
        [
          _c(
            "div",
            { staticClass: "pop-content" },
            [
              _c("div", { staticClass: "pop-title" }, [
                _c("img", {
                  attrs: { src: __webpack_require__(/*! @/assets/supervision/search.png */ "./src/assets/supervision/search.png") },
                }),
                _vm._v("筛选"),
              ]),
              _c("p", [_vm._v("受理编号")]),
              _c("van-search", {
                attrs: { shape: "round" },
                model: {
                  value: _vm.search.no,
                  callback: function ($$v) {
                    _vm.$set(_vm.search, "no", $$v)
                  },
                  expression: "search.no",
                },
              }),
              _c("p", [_vm._v("举报主要内容")]),
              _c("van-search", {
                attrs: { shape: "round" },
                model: {
                  value: _vm.search.content,
                  callback: function ($$v) {
                    _vm.$set(_vm.search, "content", $$v)
                  },
                  expression: "search.content",
                },
              }),
              _c("p", [_vm._v("污染类型")]),
              _c(
                "van-checkbox-group",
                {
                  attrs: { direction: "horizontal" },
                  model: {
                    value: _vm.search.pollutionType,
                    callback: function ($$v) {
                      _vm.$set(_vm.search, "pollutionType", $$v)
                    },
                    expression: "search.pollutionType",
                  },
                },
                [
                  _c("van-checkbox", {
                    attrs: { name: "噪声" },
                    scopedSlots: _vm._u([
                      {
                        key: "icon",
                        fn: function (props) {
                          return [_c("span", [_vm._v("噪声")])]
                        },
                      },
                    ]),
                  }),
                  _c("van-checkbox", {
                    attrs: { name: "大气" },
                    scopedSlots: _vm._u([
                      {
                        key: "icon",
                        fn: function (props) {
                          return [_c("span", [_vm._v("大气")])]
                        },
                      },
                    ]),
                  }),
                  _c("van-checkbox", {
                    attrs: { name: "土壤" },
                    scopedSlots: _vm._u([
                      {
                        key: "icon",
                        fn: function (props) {
                          return [_c("span", [_vm._v("土壤")])]
                        },
                      },
                    ]),
                  }),
                  _c("van-checkbox", {
                    attrs: { name: "生态" },
                    scopedSlots: _vm._u([
                      {
                        key: "icon",
                        fn: function (props) {
                          return [_c("span", [_vm._v("生态")])]
                        },
                      },
                    ]),
                  }),
                  _c("van-checkbox", {
                    attrs: { name: "水" },
                    scopedSlots: _vm._u([
                      {
                        key: "icon",
                        fn: function (props) {
                          return [_c("span", [_vm._v("水")])]
                        },
                      },
                    ]),
                  }),
                  _c("van-checkbox", {
                    attrs: { name: "其他污染" },
                    scopedSlots: _vm._u([
                      {
                        key: "icon",
                        fn: function (props) {
                          return [_c("span", [_vm._v("其他污染")])]
                        },
                      },
                    ]),
                  }),
                  _c("van-checkbox", {
                    attrs: { name: "辐射" },
                    scopedSlots: _vm._u([
                      {
                        key: "icon",
                        fn: function (props) {
                          return [_c("span", [_vm._v("辐射")])]
                        },
                      },
                    ]),
                  }),
                ],
                1
              ),
              _c("p", [_vm._v("主办单位")]),
              _c("van-search", {
                attrs: { shape: "round" },
                model: {
                  value: _vm.search.leadingUnit,
                  callback: function ($$v) {
                    _vm.$set(_vm.search, "leadingUnit", $$v)
                  },
                  expression: "search.leadingUnit",
                },
              }),
              _c("p", [_vm._v("是否重复")]),
              _c(
                "van-radio-group",
                {
                  attrs: { direction: "horizontal" },
                  model: {
                    value: _vm.search.repeat,
                    callback: function ($$v) {
                      _vm.$set(_vm.search, "repeat", $$v)
                    },
                    expression: "search.repeat",
                  },
                },
                [
                  _c("van-radio", {
                    attrs: { name: "是" },
                    scopedSlots: _vm._u([
                      {
                        key: "icon",
                        fn: function (props) {
                          return [_c("span", [_vm._v("是")])]
                        },
                      },
                    ]),
                  }),
                  _c("van-radio", {
                    attrs: { name: "否" },
                    scopedSlots: _vm._u([
                      {
                        key: "icon",
                        fn: function (props) {
                          return [_c("span", [_vm._v("否")])]
                        },
                      },
                    ]),
                  }),
                ],
                1
              ),
              _c("p", [_vm._v("完成整改情况")]),
              _c(
                "van-radio-group",
                {
                  attrs: { direction: "horizontal" },
                  model: {
                    value: _vm.search.changeCompSituation,
                    callback: function ($$v) {
                      _vm.$set(_vm.search, "changeCompSituation", $$v)
                    },
                    expression: "search.changeCompSituation",
                  },
                },
                [
                  _c("van-radio", {
                    attrs: { name: "是" },
                    scopedSlots: _vm._u([
                      {
                        key: "icon",
                        fn: function (props) {
                          return [_c("span", [_vm._v("是")])]
                        },
                      },
                    ]),
                  }),
                  _c("van-radio", {
                    attrs: { name: "否" },
                    scopedSlots: _vm._u([
                      {
                        key: "icon",
                        fn: function (props) {
                          return [_c("span", [_vm._v("否")])]
                        },
                      },
                    ]),
                  }),
                ],
                1
              ),
              _c("p", [_vm._v("自查自验情况")]),
              _c(
                "van-radio-group",
                {
                  attrs: { direction: "horizontal" },
                  model: {
                    value: _vm.search.selfCheckSituation,
                    callback: function ($$v) {
                      _vm.$set(_vm.search, "selfCheckSituation", $$v)
                    },
                    expression: "search.selfCheckSituation",
                  },
                },
                [
                  _c("van-radio", {
                    attrs: { name: "是" },
                    scopedSlots: _vm._u([
                      {
                        key: "icon",
                        fn: function (props) {
                          return [_c("span", [_vm._v("是")])]
                        },
                      },
                    ]),
                  }),
                  _c("van-radio", {
                    attrs: { name: "否" },
                    scopedSlots: _vm._u([
                      {
                        key: "icon",
                        fn: function (props) {
                          return [_c("span", [_vm._v("否")])]
                        },
                      },
                    ]),
                  }),
                ],
                1
              ),
              _c("div", { staticClass: "pop-bottom" }, [
                _c("span", { on: { click: _vm.resetSearch } }, [
                  _vm._v("重置"),
                ]),
                _c("span", { on: { click: _vm.queryList } }, [_vm._v("确定")]),
              ]),
            ],
            1
          ),
        ]
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
    return _c("div", [
      _c("div", [_vm._v("20项")]),
      _c("div", { staticStyle: { "margin-top": "8px" } }, [
        _vm._v("未完成达到序时进度"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", [_vm._v("2项")]),
      _c("div", [_vm._v("未达到序时进度")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", [_vm._v("1项")]),
      _c("div", { staticStyle: { "margin-top": "8px" } }, [_vm._v("未启动")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", [
        _c("img", { attrs: { src: __webpack_require__(/*! @/assets/supervision/pie1.png */ "./src/assets/supervision/pie1.png") } }),
        _vm._v("20项"),
      ]),
      _c("div", [_vm._v("未完成达到序时进度")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", [
        _c("img", { attrs: { src: __webpack_require__(/*! @/assets/supervision/pie2.png */ "./src/assets/supervision/pie2.png") } }),
        _vm._v("0项"),
      ]),
      _c("div", [_vm._v("未达到序时进度")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", [
        _c("img", { attrs: { src: __webpack_require__(/*! @/assets/supervision/pie3.png */ "./src/assets/supervision/pie3.png") } }),
        _vm._v("0项"),
      ]),
      _c("div", [_vm._v("未启动")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", [_vm._v("需完成23项")]),
      _c("div", { staticStyle: { "margin-top": "8px" } }, [_vm._v("2023年")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", [_vm._v("需完成28项")]),
      _c("div", [_vm._v("2024年")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", [_vm._v("需完成23项")]),
      _c("div", { staticStyle: { "margin-top": "8px" } }, [_vm._v("2025年")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", [
        _c("img", {
          attrs: { src: __webpack_require__(/*! @/assets/supervision/cicly.png */ "./src/assets/supervision/cicly.png") },
        }),
        _vm._v("2023年需完成"),
      ]),
      _c("div", [_vm._v("23项")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", [
        _c("img", {
          attrs: { src: __webpack_require__(/*! @/assets/supervision/cicly.png */ "./src/assets/supervision/cicly.png") },
        }),
        _vm._v("2024年需完成"),
      ]),
      _c("div", [_vm._v("23项")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", [
      _c("div", [
        _c("img", {
          attrs: { src: __webpack_require__(/*! @/assets/supervision/cicly.png */ "./src/assets/supervision/cicly.png") },
        }),
        _vm._v("2025年需完成"),
      ]),
      _c("div", [_vm._v("23项")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/core-js/internals/array-for-each.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/internals/array-for-each.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $forEach = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").forEach;
var arrayMethodIsStrict = __webpack_require__(/*! ../internals/array-method-is-strict */ "./node_modules/core-js/internals/array-method-is-strict.js");

var STRICT_METHOD = arrayMethodIsStrict('forEach');

// `Array.prototype.forEach` method implementation
// https://tc39.es/ecma262/#sec-array.prototype.foreach
module.exports = !STRICT_METHOD ? function forEach(callbackfn /* , thisArg */) {
  return $forEach(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
// eslint-disable-next-line es/no-array-prototype-foreach -- safe
} : [].forEach;


/***/ }),

/***/ "./node_modules/core-js/internals/same-value.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/internals/same-value.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// `SameValue` abstract operation
// https://tc39.es/ecma262/#sec-samevalue
// eslint-disable-next-line es/no-object-is -- safe
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare -- NaN check
  return x === y ? x !== 0 || 1 / x === 1 / y : x !== x && y !== y;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.string.search.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.search.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/core-js/internals/is-null-or-undefined.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var sameValue = __webpack_require__(/*! ../internals/same-value */ "./node_modules/core-js/internals/same-value.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");

// @@search logic
fixRegExpWellKnownSymbolLogic('search', function (SEARCH, nativeSearch, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.es/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = requireObjectCoercible(this);
      var searcher = isNullOrUndefined(regexp) ? undefined : getMethod(regexp, SEARCH);
      return searcher ? call(searcher, regexp, O) : new RegExp(regexp)[SEARCH](toString(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@search
    function (string) {
      var rx = anObject(this);
      var S = toString(string);
      var res = maybeCallNative(nativeSearch, rx, S);

      if (res.done) return res.value;

      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom-collections.for-each.js":
/*!**********************************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom-collections.for-each.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var globalThis = __webpack_require__(/*! ../internals/global-this */ "./node_modules/core-js/internals/global-this.js");
var DOMIterables = __webpack_require__(/*! ../internals/dom-iterables */ "./node_modules/core-js/internals/dom-iterables.js");
var DOMTokenListPrototype = __webpack_require__(/*! ../internals/dom-token-list-prototype */ "./node_modules/core-js/internals/dom-token-list-prototype.js");
var forEach = __webpack_require__(/*! ../internals/array-for-each */ "./node_modules/core-js/internals/array-for-each.js");
var createNonEnumerableProperty = __webpack_require__(/*! ../internals/create-non-enumerable-property */ "./node_modules/core-js/internals/create-non-enumerable-property.js");

var handlePrototype = function (CollectionPrototype) {
  // some Chrome versions have non-configurable methods on DOMTokenList
  if (CollectionPrototype && CollectionPrototype.forEach !== forEach) try {
    createNonEnumerableProperty(CollectionPrototype, 'forEach', forEach);
  } catch (error) {
    CollectionPrototype.forEach = forEach;
  }
};

for (var COLLECTION_NAME in DOMIterables) {
  if (DOMIterables[COLLECTION_NAME]) {
    handlePrototype(globalThis[COLLECTION_NAME] && globalThis[COLLECTION_NAME].prototype);
  }
}

handlePrototype(DOMTokenListPrototype);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/supervision/index.vue?vue&type=style&index=0&id=57ce3d88&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/supervision/index.vue?vue&type=style&index=0&id=57ce3d88&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @/assets/pollution-tab-bg.png */ "./src/assets/pollution-tab-bg.png");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! @/assets/supervision/sup-right.png */ "./src/assets/supervision/sup-right.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, "[data-v-57ce3d88] .van-search__content {\n  background-color: #fff;\n}\n[data-v-57ce3d88] .van-search {\n  padding-bottom: 5px;\n  background-color: transparent;\n}\n.tab-wrapper[data-v-57ce3d88] {\n  margin: 10px 0;\n  padding: 0px 0px 10px;\n}\n.tab-wrapper .tab-item[data-v-57ce3d88] {\n  width: 50%;\n  text-align: center;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 14px;\n}\n.tab-wrapper .active[data-v-57ce3d88] {\n  color: rgba(18, 18, 54, 0.8);\n  font-weight: bold;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n  background-position: center bottom;\n  background-size: 27px 8px;\n}\n.btn-tips[data-v-57ce3d88] {\n  display: flex;\n}\n.btn-tips > div[data-v-57ce3d88]:first-child {\n  width: calc(100% - 50px);\n  display: flex;\n  overflow-x: auto;\n}\n.btn-tips > div > div[data-v-57ce3d88] {\n  width: 70px;\n  height: 30px;\n  border-radius: 4px;\n  background: white;\n  border: 1px solid #dae0f2;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 30px;\n  color: rgba(37, 57, 111, 0.5);\n  text-align: center;\n  margin-left: 10px;\n  flex-grow: 0;\n  flex-shrink: 0;\n  position: relative;\n}\n.btn-tips > div[data-v-57ce3d88]:last-child {\n  width: 60px;\n  height: 30px;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 30px;\n  color: rgba(37, 57, 111, 0.5);\n  text-align: center;\n  margin-left: auto;\n}\n.btn-tips .active[data-v-57ce3d88] {\n  background: rgba(220, 226, 252, 0.5);\n  font-weight: 500;\n  color: #5475f8;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") no-repeat;\n  background-position: right bottom;\n  border: none;\n  background-color: rgba(220, 226, 252, 0.5);\n}\n.btn-tips .active > img[data-v-57ce3d88] {\n  position: absolute;\n  margin-left: 4px;\n  margin-top: 21px;\n}\n.first-content[data-v-57ce3d88] {\n  background-color: #fff;\n  border-radius: 10px;\n  margin: 5px;\n  padding: 5px;\n}\n.first-content .total[data-v-57ce3d88] {\n  height: 40px;\n  border-radius: 10px;\n  background: #ebeeff;\n  display: flex;\n  justify-content: space-between;\n  padding: 0px 20px 0px 10px;\n}\n.first-content .total > span[data-v-57ce3d88] {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 40px;\n  color: rgba(37, 57, 111, 0.5);\n}\n.first-content .total > span > span[data-v-57ce3d88] {\n  font-size: 16px;\n  font-weight: 400;\n  color: #25396f;\n  margin-left: 5px;\n}\n.first-content .total > span > span > font[data-v-57ce3d88] {\n  font-size: 20px;\n  font-weight: 500;\n}\n.first-content .total > span:last-child > span[data-v-57ce3d88] {\n  color: #5271ff;\n}\n.first-content .split[data-v-57ce3d88] {\n  margin: 10px;\n  height: 0px;\n  border: 1px dashed rgba(37, 57, 111, 0.1);\n}\n.first-content .total-num[data-v-57ce3d88] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0px 10px;\n}\n.first-content .total-num > div[data-v-57ce3d88] {\n  text-align: center;\n}\n.first-content .total-num > div > div > img[data-v-57ce3d88] {\n  margin-right: 8px;\n  vertical-align: text-bottom;\n}\n.first-content .total-num > div > div[data-v-57ce3d88]:last-child {\n  margin-top: 6px;\n  font-size: 10px;\n  font-weight: 400;\n  line-height: 14.59px;\n  color: rgba(37, 57, 111, 0.5);\n}\n.first-content .total-num .split[data-v-57ce3d88] {\n  width: 0px;\n  height: 20.01px;\n  margin: 10px 2px;\n  border: 1px solid rgba(37, 57, 111, 0.1);\n}\n.first-content .total-bg[data-v-57ce3d88] {\n  display: flex;\n  margin: 10px 10px 15px;\n  height: 35px;\n  align-items: center;\n}\n.first-content .total-bg > div[data-v-57ce3d88] {\n  height: 16px;\n  font-size: 11px;\n  font-weight: 400;\n  line-height: 16px;\n  color: white;\n  text-align: center;\n}\n.first-content .total-bg > div[data-v-57ce3d88]:first-child {\n  width: 40%;\n  background-color: #5475f8;\n}\n.first-content .total-bg > div[data-v-57ce3d88]:nth-child(2) {\n  width: 35%;\n  height: 26px;\n  line-height: 26px;\n  background: #fec473;\n}\n.first-content .total-bg > div[data-v-57ce3d88]:nth-child(3) {\n  width: 25%;\n  background-color: #ff965c;\n}\n.first-content .total-bg > div > div[data-v-57ce3d88]:last-child {\n  margin-top: 3px;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 16px;\n  color: rgba(23, 28, 33, 0.5);\n}\n.first-content .total-other[data-v-57ce3d88] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0px 10px;\n  margin-bottom: 5px;\n}\n.first-content .total-other > div[data-v-57ce3d88] {\n  text-align: center;\n}\n.first-content .total-other > div > div > img[data-v-57ce3d88] {\n  margin-right: 8px;\n  vertical-align: text-bottom;\n}\n.first-content .total-other > div > div[data-v-57ce3d88]:first-child {\n  margin-top: 6px;\n  font-size: 10px;\n  font-weight: 400;\n  line-height: 14.59px;\n  color: rgba(37, 57, 111, 0.5);\n}\n.first-content .total-other > div > div[data-v-57ce3d88]:last-child {\n  text-align: left;\n  margin-left: 22px;\n  margin-top: 3px;\n}\n.sup-main[data-v-57ce3d88] {\n  border-radius: 20px 20px 0px 0px;\n  background: white linear-gradient(180deg, rgba(240, 241, 245, 0.01) 0%, #f2f7ff 100%);\n  border: 1px solid white;\n  padding: 10px 5px;\n  margin-top: 8px;\n}\n.sup-main > div[data-v-57ce3d88] {\n  border-radius: 10px;\n  background: white;\n  box-shadow: 0px 10px 20px rgba(37, 57, 111, 0.05);\n  margin-bottom: 6px;\n}\n.sup-main > div .sup-title[data-v-57ce3d88] {\n  border-radius: 10px 10px 0px 0px;\n  background: white;\n  box-shadow: 0px 6px 20px rgba(37, 57, 111, 0.05);\n  display: flex;\n  align-items: center;\n  padding: 8px 5px;\n}\n.sup-main > div .sup-title > span[data-v-57ce3d88] {\n  font-size: 12px;\n  font-weight: 400;\n  color: rgba(37, 57, 111, 0.5);\n}\n.sup-main > div .sup-title > span[data-v-57ce3d88]:first-child {\n  border-radius: 10px 10px 0px 10px;\n  padding: 2px 8px;\n  font-size: 11px;\n  color: white;\n}\n.sup-main > div .sup-title > span[data-v-57ce3d88]:nth-child(2) {\n  border-radius: 4px;\n  font-size: 10px;\n  padding: 0px 4px;\n  margin-left: 5px;\n}\n.sup-main > div .sup-title > span[data-v-57ce3d88]:last-child {\n  margin-left: auto;\n}\n.sup-main > div .sup-title .blue-bg[data-v-57ce3d88] {\n  background: linear-gradient(90deg, #6daafd 0%, #4378ee 100%);\n}\n.sup-main > div .sup-title .green-bg[data-v-57ce3d88] {\n  background: linear-gradient(90deg, #40d6cc 0%, #08cfc1 100%);\n}\n.sup-main > div .sup-title .yellow-bg[data-v-57ce3d88] {\n  background: linear-gradient(90deg, #fabe82 0%, #ff8d1a 100%);\n}\n.sup-main > div .sup-title .cancel-bg[data-v-57ce3d88] {\n  background: linear-gradient(90deg, #a3b0d4 0%, #4f649c 100%);\n}\n.sup-main > div .sup-title .repeat[data-v-57ce3d88] {\n  background: #fceae6;\n  color: #ff5733;\n  border: 1px solid #ffcbbf;\n}\n.sup-main > div .sup-title .norepeat[data-v-57ce3d88] {\n  background: rgba(0, 186, 173, 0.1);\n  border: 1px solid rgba(0, 186, 173, 0.2);\n  color: #00baad;\n}\n.sup-main > div .sup-detail[data-v-57ce3d88] {\n  padding: 10px 10px 5px;\n}\n.sup-main > div .sup-detail > div[data-v-57ce3d88] {\n  font-size: 12px;\n  font-weight: 400;\n  letter-spacing: 0px;\n  line-height: 18px;\n  color: rgba(37, 57, 111, 0.5);\n  margin-bottom: 5px;\n}\n.sup-main > div .sup-detail > div > span[data-v-57ce3d88] {\n  color: #25396f;\n}\n.sup-main > div .sup-detail > div[data-v-57ce3d88]:first-child {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 20px;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: #447bfc;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.sup-main > div .sup-detail .sup-bottom[data-v-57ce3d88] {\n  display: flex;\n  /*justify-content: space-between;*/\n}\n.sup-main > div .sup-detail .sup-bottom > span[data-v-57ce3d88] {\n  display: inline-block;\n  width: 50%;\n  font-size: 12px;\n  font-weight: 400;\n  letter-spacing: 0px;\n  line-height: 18px;\n  color: rgba(37, 57, 111, 0.5);\n}\n.sup-main > div .sup-detail .sup-bottom > span > span[data-v-57ce3d88] {\n  color: #25396f;\n  margin-left: 5px;\n}\n.sup-main .no-data[data-v-57ce3d88] {\n  display: inline-block;\n  width: 100%;\n  text-align: center;\n  font-size: 12px;\n  color: #909399;\n  background-color: transparent;\n}\n.pop-content[data-v-57ce3d88] {\n  padding: 30px 10px 10px;\n  height: 100%;\n}\n.pop-content .pop-title[data-v-57ce3d88] {\n  font-size: 14px;\n  font-weight: 500;\n  line-height: 21px;\n  color: #25396f;\n}\n.pop-content .pop-title > img[data-v-57ce3d88] {\n  margin-right: 10px;\n}\n.pop-content > p[data-v-57ce3d88] {\n  font-size: 12px;\n  font-weight: 600;\n  line-height: 18px;\n  color: #25396f;\n  margin: 20px 5px 5px;\n}\n.pop-content[data-v-57ce3d88]  .van-search {\n  padding: 0px;\n}\n.pop-content[data-v-57ce3d88]  .van-search__content {\n  background-color: #f5f6f9;\n}\n.pop-content[data-v-57ce3d88]  .van-field__control {\n  color: rgba(37, 57, 111, 0.5);\n}\n.pop-content[data-v-57ce3d88]  .van-radio {\n  width: calc(50% - 12px);\n  margin-bottom: 8px;\n}\n.pop-content[data-v-57ce3d88]  .van-radio__icon {\n  display: inline-block;\n  width: 100%;\n  border-radius: 30px;\n  background: #f5f6f9;\n  font-size: 12px;\n  color: rgba(37, 57, 111, 0.5);\n  text-align: center;\n  line-height: 30px;\n  height: 30px;\n}\n.pop-content[data-v-57ce3d88]  .van-radio__icon--checked {\n  background-color: #1989fa;\n  border-color: #1989fa;\n  color: #fff;\n}\n.pop-content[data-v-57ce3d88]  .van-checkbox {\n  width: calc(50% - 12px);\n  margin-bottom: 8px;\n}\n.pop-content[data-v-57ce3d88]  .van-checkbox__icon {\n  display: inline-block;\n  width: 100%;\n  border-radius: 30px;\n  background: #f5f6f9;\n  font-size: 12px;\n  color: rgba(37, 57, 111, 0.5);\n  text-align: center;\n  line-height: 30px;\n  height: 30px;\n}\n.pop-content[data-v-57ce3d88]  .van-checkbox__icon--checked {\n  background-color: #1989fa;\n  border-color: #1989fa;\n  color: #fff;\n}\n.pop-content .pop-bottom[data-v-57ce3d88] {\n  display: flex;\n  justify-content: space-between;\n  margin: 30px 0px 10px;\n}\n.pop-content .pop-bottom > span[data-v-57ce3d88] {\n  display: inline-block;\n  width: calc(50% - 12px);\n  margin-right: 12px;\n  line-height: 36px;\n  text-align: center;\n  background-color: #f5f6f9;\n  color: #5475f8;\n  border-radius: 30px;\n}\n.pop-content .pop-bottom > span[data-v-57ce3d88]:last-child {\n  background-color: #5475f8;\n  color: #fff;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/supervision/index.vue?vue&type=style&index=0&id=57ce3d88&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/supervision/index.vue?vue&type=style&index=0&id=57ce3d88&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=57ce3d88&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/supervision/index.vue?vue&type=style&index=0&id=57ce3d88&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("6c2f9cd0", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/api/case.js":
/*!*************************!*\
  !*** ./src/api/case.js ***!
  \*************************/
/*! exports provided: querySelectById, discussSelectByCaseId, superviseSelectByCaseId, legalSelectByCaseId, selectByCaseId, punishSelectByCaseId, getHearingByCaseId, stageSelectByCaseId, getUserInfo, getUserList, queryTypeCaseList, addReport, getReportDetail, signReport, countInfo, getAllReport, checkPwd, queryDivision, getSuperBatch, getSuperList, getSuperListDetail, board, countyList, infoList, baseInfo, distribute, handle, final, company, problem, timeGroup, unit, problemList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "querySelectById", function() { return querySelectById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "discussSelectByCaseId", function() { return discussSelectByCaseId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "superviseSelectByCaseId", function() { return superviseSelectByCaseId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "legalSelectByCaseId", function() { return legalSelectByCaseId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectByCaseId", function() { return selectByCaseId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "punishSelectByCaseId", function() { return punishSelectByCaseId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getHearingByCaseId", function() { return getHearingByCaseId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stageSelectByCaseId", function() { return stageSelectByCaseId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return getUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserList", function() { return getUserList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryTypeCaseList", function() { return queryTypeCaseList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addReport", function() { return addReport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getReportDetail", function() { return getReportDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signReport", function() { return signReport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countInfo", function() { return countInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAllReport", function() { return getAllReport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkPwd", function() { return checkPwd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryDivision", function() { return queryDivision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuperBatch", function() { return getSuperBatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuperList", function() { return getSuperList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSuperListDetail", function() { return getSuperListDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "board", function() { return board; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "countyList", function() { return countyList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "infoList", function() { return infoList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseInfo", function() { return baseInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "distribute", function() { return distribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handle", function() { return handle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "final", function() { return final; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "company", function() { return company; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "problem", function() { return problem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeGroup", function() { return timeGroup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unit", function() { return unit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "problemList", function() { return problemList; });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./src/api/request.js");

/**
 * 案件详情
 * */

var querySelectById = function querySelectById(id) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/case/selectById/' + id,
    method: 'get'
  });
}; // 集体讨论详情

var discussSelectByCaseId = function discussSelectByCaseId(id) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/discuss/selectByCaseId/' + id,
    method: 'post'
  });
}; // 详情

var superviseSelectByCaseId = function superviseSelectByCaseId(id) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/supervise/selectByCaseId/' + id,
    method: 'get'
  });
}; // 告知详情

var legalSelectByCaseId = function legalSelectByCaseId(id) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/legal/selectByCaseId/' + id,
    method: 'post'
  });
}; // 告知详情

var selectByCaseId = function selectByCaseId(id) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/inform/selectByCaseId/' + id,
    method: 'post'
  });
}; // 详情

var punishSelectByCaseId = function punishSelectByCaseId(id) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/punish/selectByCaseId/' + id,
    method: 'get'
  });
}; // 详情

var getHearingByCaseId = function getHearingByCaseId(id) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/hearing/getHearingByCaseId/' + id,
    method: 'post'
  });
}; // 详情

var stageSelectByCaseId = function stageSelectByCaseId(id) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/stage/selectByCaseId/' + id,
    method: 'post'
  });
}; //根据token获取企业信息

var getUserInfo = function getUserInfo(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/user/getInfo",
    method: "GET",
    params: data
  });
}; //获取用户

var getUserList = function getUserList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/user",
    method: "GET",
    params: data
  });
}; //查看审批子项列表

var queryTypeCaseList = function queryTypeCaseList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/approval/queryAppList",
    method: "GET",
    params: data
  });
}; //新建审批表

var addReport = function addReport(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/approval/ins",
    method: "PUT",
    data: data
  });
}; //获取单个审批表信息

var getReportDetail = function getReportDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/approval",
    method: "GET",
    params: data
  });
}; //签名审批

var signReport = function signReport(data, type) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/approval/sign?type=" + type,
    method: "POST",
    data: data
  });
}; //统计

var countInfo = function countInfo(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/approval/getStat",
    method: "GET",
    params: data
  });
}; //详情

var getAllReport = function getAllReport(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/approval/detail",
    method: "GET",
    params: data
  });
}; //校验密码

var checkPwd = function checkPwd(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/user/checkPwd",
    method: "GET",
    params: data
  });
}; //支队/分局下拉框

var queryDivision = function queryDivision(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/ra/user/div",
    method: "GET"
  });
}; //环保督察-获取批次列表

var getSuperBatch = function getSuperBatch(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/batchList",
    method: "GET",
    params: data
  });
}; //环保督察-获取批次列表

var getSuperList = function getSuperList(info, data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/list",
    method: "POST",
    params: info,
    data: data
  });
}; //环保督察-获取批次列表

var getSuperListDetail = function getSuperListDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/",
    method: "GET",
    params: data
  });
};
function board() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/board",
    method: "get"
  });
}
function countyList(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/board/getCounty",
    method: "get",
    params: params
  });
}
function infoList(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/info/list",
    method: "get",
    params: params
  });
}
function baseInfo(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/info/getById",
    method: "get",
    params: params
  });
}
function distribute(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/info/distribute/" + params,
    method: "get"
  });
}
function handle(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/info/handle/" + params,
    method: "get"
  });
}
function final(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/info/final/" + params,
    method: "get"
  });
}
function company(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/info/qyByInfoId",
    method: "get",
    params: params
  });
}
function problem() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/inspectionIssues",
    method: "get"
  });
}
function timeGroup() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/inspectionIssues/timeGroup",
    method: "get"
  });
}
function unit() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/inspectionIssues/getUnit",
    method: "get"
  });
}
function problemList(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/es/inspectionIssues/pageList",
    method: "post",
    data: params
  });
}

/***/ }),

/***/ "./src/assets/pollution-tab-bg.png":
/*!*****************************************!*\
  !*** ./src/assets/pollution-tab-bg.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAQCAYAAACycufIAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADnSURBVEiJ3ZTRacRADETfaNekgOvheshfwlWVj4ATDNeUA5c20sMVEIitfKwVu4A7TDSw7EqsBg0SIzY4vfojzsGYzCcqokoUoLqoQGWaK1YKLDFzu90K2sSy9mf2StRKBby958ixcin+a8lp5WPhi/rg803cjiF/G4eu15+w3o/8cAT49+IA5M9GXjyt4iYOOzZyF6ziPJe4ceh6Azi9eCphgTa5h1xTAy6wXctMkH9CiEtoJhDikpkJmddyHLoLgGV1SgDL6pSQcS0XpwQwvrnu2cs9YR9nXal87d3ITeD+Pg5dH+EvPNFNNRNXy44AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/supervision/cicly.png":
/*!******************************************!*\
  !*** ./src/assets/supervision/cicly.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAEISURBVCiRnZIxTsNAEEX/jCIQdkojSucAqSKli1LlArFbK4dDtCwXoLLokKg4QFwiXNqJoJhPYUy8trCi/Gr1d95+zewIeirKY0azRBRrAKAhF6WLo+lDt07aw748JELeAwj7j/2qpsludhe4P3D/cUhE+fgP4Iki6SwKnABA8VlXI0mD5Pg2nE6KsspAH3p6Vry+N10s58R2Y93rsCiP2YQmiYgPvbydjOasHkyzRNvptWqTxjxRrPWcpr6+h57SkHeN5ZyDotXC92jIVVRd19xuDKsFcX11gnrDgSgv/w4FAIrszoRAa2oVAGZR4GiSAqjHkiiSeivXVVFWGU16S64ujm68Jf8B8wBryfeQQpYAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/supervision/pie1.png":
/*!*****************************************!*\
  !*** ./src/assets/supervision/pie1.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADKSURBVDiNnZI7EoIwEIa/7KDn8CixAGomF/Am4E3onQw1UMhROIfOBAvkpSJD/m5f3+5mA2u6FyfqQgNQ2ozSZr/S1Jenshc6TqMdm4zKdqPdcSU2IyxYdHw6vSj+3TKltAwQGQMPd9ksXkJmgGHXPVKkE8C5/QCA+qbFq/sgJzrYzgIi832ttxR1ob1XEGmEgNareGBwTvwBYdL0V1AeU4g0/QQAkcl3Q8JkBgA49MRNKVqOkk/mp/5dRdESmXzpWtP8gwW0a4/9AqRYQTGUCrLsAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/supervision/pie2.png":
/*!*****************************************!*\
  !*** ./src/assets/supervision/pie2.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADPSURBVDiNnZLNDYMwDIWfo7RDUA6MklFYATEA9FxFrMAoGSUHyhCtFPcQCGlpxM+7xbE/v8QGEuKuKLjLFQCwzlrWWfsvj1aF+lYCXISEemxZZxyl3KkeA0zGHeHeKi5OqGGdYYaIEHavckdxDFkA81sPqlkcOHcGAH7kSpzs7iWckttZANXjalqzNgGp+XsHwghA2j0ukgyq7GkAVYOZ9oCOQ4QwwDRGqp/9UQhVwwLwxIvZWWohrn04/V5zl6v0YpH1bqNIqs/3gkmb+uwPCYNJcmpOVXwAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/supervision/pie3.png":
/*!*****************************************!*\
  !*** ./src/assets/supervision/pie3.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADGSURBVDiNnZIxEoMgEEX/MkzO4RkSipTeIpTeRHMTS3ILyxQkZ+AcmYybQgSMGiNbMbP73374ACvF+lywVuVwVg1r1SzN0Vx4rABRhAFjG76cOCroSsYGmEw3Aq8yFS9b45q1wggRsfOuNsVTSASMd91VzHXqYD/ALxZZ22OVcnsGoNtjllboeQe5LjoBSJcpBgAIMvdsABnb+RT6HEgH+BjJPNu9EDI2AoY6dP9JewfINoC+279T6d3gNnGytmf6waRbe+wPIMFI2GFTyUsAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/supervision/search.png":
/*!*******************************************!*\
  !*** ./src/assets/supervision/search.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAMCAYAAAC0qUeeAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACrSURBVCiRjZC7FYMwEATneASoKkMPKgVIESm4FPUArkpEPgd8BBj8fOFqbnd1YqtJ+XNSYARAtb2lRIaNs9Wktg7uirN1cGt6Mm9qi0pjy5CfQVQaZE6V7aGaBgDfZwWALUOOyIBo6zvjonPsnG/uJ/AA+6cZFyVWeTPaOrj1P+ntBbZEaZb+uxq/Zzx2jk6PL0305TvjkpPYwnz3K/sD7DvjfJ8V69K+AsAHHgpJnYQ3GNYAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/supervision/sup-right.png":
/*!**********************************************!*\
  !*** ./src/assets/supervision/sup-right.png ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABiSURBVDiNpcw5EYAwFADRTWxgAjP0mMAZOhDEMIQqDEeOf2z/FhxNyz4GD06cq2mQMTCoB08MoBp8sWpQwuJBDYsGLdwd9HBzIMHVgRQXBxr8G2jxa2DB98CKE2zBg2M85gtTfE4jGYSHTAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/supervision/sup-sure.png":
/*!*********************************************!*\
  !*** ./src/assets/supervision/sup-sure.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAYAAADA+m62AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAA5SURBVBiVY2DAA/7//+/w/////fjUwBTBQAPxitCNx2nS////90MF9xO0DkkxfjehKcatCNl9uOQAufJ1zqgJQooAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/views/supervision/index.vue":
/*!*****************************************!*\
  !*** ./src/views/supervision/index.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_57ce3d88_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=57ce3d88&scoped=true& */ "./src/views/supervision/index.vue?vue&type=template&id=57ce3d88&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/supervision/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_57ce3d88_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=57ce3d88&lang=scss&scoped=true& */ "./src/views/supervision/index.vue?vue&type=style&index=0&id=57ce3d88&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_57ce3d88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_57ce3d88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "57ce3d88",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/supervision/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/supervision/index.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./src/views/supervision/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/supervision/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/supervision/index.vue?vue&type=style&index=0&id=57ce3d88&lang=scss&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./src/views/supervision/index.vue?vue&type=style&index=0&id=57ce3d88&lang=scss&scoped=true& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_57ce3d88_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=57ce3d88&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/supervision/index.vue?vue&type=style&index=0&id=57ce3d88&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_57ce3d88_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_57ce3d88_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_57ce3d88_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_57ce3d88_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/supervision/index.vue?vue&type=template&id=57ce3d88&scoped=true&":
/*!************************************************************************************!*\
  !*** ./src/views/supervision/index.vue?vue&type=template&id=57ce3d88&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_57ce3d88_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=57ce3d88&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/supervision/index.vue?vue&type=template&id=57ce3d88&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_57ce3d88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_57ce3d88_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3N1cGVydmlzaW9uL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc3VwZXJ2aXNpb24vaW5kZXgudnVlPzA3NzAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9zYW1lLXZhbHVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnNlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3N1cGVydmlzaW9uL2luZGV4LnZ1ZT82YTg4Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zdXBlcnZpc2lvbi9pbmRleC52dWU/MTQ2NSIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2Nhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wb2xsdXRpb24tdGFiLWJnLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N1cGVydmlzaW9uL2NpY2x5LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N1cGVydmlzaW9uL3BpZTEucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc3VwZXJ2aXNpb24vcGllMi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdXBlcnZpc2lvbi9waWUzLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3N1cGVydmlzaW9uL3NlYXJjaC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9zdXBlcnZpc2lvbi9zdXAtcmlnaHQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvc3VwZXJ2aXNpb24vc3VwLXN1cmUucG5nIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zdXBlcnZpc2lvbi9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3N1cGVydmlzaW9uL2luZGV4LnZ1ZT83M2IzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zdXBlcnZpc2lvbi9pbmRleC52dWU/NjBkMiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc3VwZXJ2aXNpb24vaW5kZXgudnVlPzZhMzciXSwibmFtZXMiOlsicXVlcnlTZWxlY3RCeUlkIiwiaWQiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiZGlzY3Vzc1NlbGVjdEJ5Q2FzZUlkIiwic3VwZXJ2aXNlU2VsZWN0QnlDYXNlSWQiLCJsZWdhbFNlbGVjdEJ5Q2FzZUlkIiwic2VsZWN0QnlDYXNlSWQiLCJwdW5pc2hTZWxlY3RCeUNhc2VJZCIsImdldEhlYXJpbmdCeUNhc2VJZCIsInN0YWdlU2VsZWN0QnlDYXNlSWQiLCJnZXRVc2VySW5mbyIsImRhdGEiLCJwYXJhbXMiLCJnZXRVc2VyTGlzdCIsInF1ZXJ5VHlwZUNhc2VMaXN0IiwiYWRkUmVwb3J0IiwiZ2V0UmVwb3J0RGV0YWlsIiwic2lnblJlcG9ydCIsInR5cGUiLCJjb3VudEluZm8iLCJnZXRBbGxSZXBvcnQiLCJjaGVja1B3ZCIsInF1ZXJ5RGl2aXNpb24iLCJnZXRTdXBlckJhdGNoIiwiZ2V0U3VwZXJMaXN0IiwiaW5mbyIsImdldFN1cGVyTGlzdERldGFpbCIsImJvYXJkIiwiY291bnR5TGlzdCIsImluZm9MaXN0IiwiYmFzZUluZm8iLCJkaXN0cmlidXRlIiwiaGFuZGxlIiwiZmluYWwiLCJjb21wYW55IiwicHJvYmxlbSIsInRpbWVHcm91cCIsInVuaXQiLCJwcm9ibGVtTGlzdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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aUNBQWlDLG9ZOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsZ1c7Ozs7Ozs7Ozs7O0FDQWpDLGlDQUFpQyxnUTs7Ozs7Ozs7Ozs7QUNBakMsaUNBQWlDLHdNOzs7Ozs7Ozs7Ozs7QUNBakM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnRztBQUN2QztBQUNMO0FBQ3NDOzs7QUFHMUY7QUFDNkY7QUFDN0YsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLDRGQUFNO0FBQ1IsRUFBRSxxR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBOFIsQ0FBZ0Isc1VBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBbFQ7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvNjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDogI0U3RURGQVwiPlxyXG4gICAgICAgIDx2YW4tbmF2LWJhclxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCLnjq/kv53nnaPlr59cIlxyXG4gICAgICAgICAgICAgICAgbGVmdC1hcnJvd1xyXG4gICAgICAgICAgICAgICAgQGNsaWNrLWxlZnQ9XCIkcm91dGVyLmdvKC0xKVwiPjwvdmFuLW5hdi1iYXI+XHJcblxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IGNhbGMoMTAwdmggLSA5dmgpO292ZXJmbG93LXk6IGF1dG87b3ZlcmZsb3cteDogaGlkZGVuO1wiPlxyXG48IS0tICAgICAgICAgICAgPHZhbi1zZWFyY2ggdi1tb2RlbD1cInNlYXJjaEtleXdvcmRcIiBzaGFwZT1cInJvdW5kXCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaXlhbPplK7lrZfmkJzntKJcIiBzdHlsZT1cIndpZHRoOiAxMDAlO2JhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50XCIvPi0tPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFiLXdyYXBwZXIgZnNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCIoaXRlbSxpKSBpbiB0YWJBcnJcIiA6Y2xhc3M9XCJbJ3RhYi1pdGVtJywgaT09PXRhYkluZGV4PydhY3RpdmUnOicnXVwiIEBjbGljaz1cImNoYW5nZVRhYihpKVwiPnt7aXRlbX19XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG4tdGlwc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwiKGl0ZW0saSkgaW4gYnRuQXJyXCIgOmNsYXNzPVwiW2k9PT1idG5JbmRleD8nYWN0aXZlJzonJ11cIiBAY2xpY2s9XCJjaGFuZ2VCdG5UYWIoaSlcIj57e2l0ZW19fTxpbWcgdi1pZj1cImk9PT1idG5JbmRleFwiIHNyYz1cIn5AL2Fzc2V0cy9zdXBlcnZpc2lvbi9zdXAtc3VyZS5wbmdcIi8+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgQGNsaWNrPVwic2hvd1BpY2tlclNlbGVjdCA9IHRydWVcIj7nrZvpgIk8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaXJzdC1jb250ZW50XCIgdi1zaG93PVwidGFiSW5kZXghPTJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3RhbFwiPjxzcGFuPua2ieWPiuaYhuaYjuW4guaAuzxzcGFuPjxmb250PjMzPC9mb250PumhuTwvc3Bhbj48L3NwYW4+PHNwYW4+5bey5a6M5oiQPHNwYW4+PGZvbnQ+MTM8L2ZvbnQ+6aG5PC9zcGFuPjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3RhbC1iZ1wiIHYtc2hvdz1cInRhYkluZGV4PT0xXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAzMHB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4yMOmhuTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLXRvcDogOHB4O1wiPuacquWujOaIkOi+vuWIsOW6j+aXtui/m+W6pjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+MumhuTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2Puacqui+vuWIsOW6j+aXtui/m+W6pjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+MemhuTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwibWFyZ2luLXRvcDogOHB4O1wiPuacquWQr+WKqDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BsaXRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3RhbC1udW1cIiB2LXNob3c9XCJ0YWJJbmRleD09MFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGltZyBzcmM9XCJ+QC9hc3NldHMvc3VwZXJ2aXNpb24vcGllMS5wbmdcIi8+MjDpobk8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj7mnKrlrozmiJDovr7liLDluo/ml7bov5vluqY8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BsaXRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbWcgc3JjPVwifkAvYXNzZXRzL3N1cGVydmlzaW9uL3BpZTIucG5nXCIvPjDpobk8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj7mnKrovr7liLDluo/ml7bov5vluqY8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BsaXRcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjxpbWcgc3JjPVwifkAvYXNzZXRzL3N1cGVydmlzaW9uL3BpZTMucG5nXCIvPjDpobk8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj7mnKrlkK/liqg8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvdGFsLWJnXCIgdi1zaG93PVwidGFiSW5kZXg9PTBcIj5cclxuICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgPGRpdj7pnIDlrozmiJAyM+mhuTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tdG9wOiA4cHg7XCI+MjAyM+W5tDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj7pnIDlrozmiJAyOOmhuTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PjIwMjTlubQ8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PumcgOWujOaIkDIz6aG5PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tdG9wOiA4cHg7XCI+MjAyNeW5tDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG90YWwtb3RoZXJcIiB2LXNob3c9XCJ0YWJJbmRleD09MVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGltZyBzcmM9XCJ+QC9hc3NldHMvc3VwZXJ2aXNpb24vY2ljbHkucG5nXCIvPjIwMjPlubTpnIDlrozmiJA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4yM+mhuTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGltZyBzcmM9XCJ+QC9hc3NldHMvc3VwZXJ2aXNpb24vY2ljbHkucG5nXCIvPjIwMjTlubTpnIDlrozmiJA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4yM+mhuTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PGltZyBzcmM9XCJ+QC9hc3NldHMvc3VwZXJ2aXNpb24vY2ljbHkucG5nXCIvPjIwMjXlubTpnIDlrozmiJA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj4yM+mhuTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1cC1tYWluXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5vLWRhdGFcIiB2LXNob3c9XCJ0YWJsZUxpc3QubGVuZ3RoPT0wXCI+5pqC5peg5pWw5o2uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cIml0ZW0gaW4gdGFibGVMaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN1cC10aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiA6Y2xhc3M9XCJbaXRlbS5zaXR1YXRpb25UZXh0LmluZGV4T2YoJ+W3suWujOaIkCcpPi0xPydibHVlLWJnJzppdGVtLnNpdHVhdGlvblRleHQuaW5kZXhPZign5pyq5a6M5oiQJyk+LTE/J2dyZWVuLWJnJzppdGVtLnNpdHVhdGlvblRleHQuaW5kZXhPZign5pW05pS55LitJyk+LTE/J3llbGxvdy1iZyc6J2NhbmNlbC1iZyddXCI+e3tpdGVtLnNpdHVhdGlvblRleHR9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gOmNsYXNzPVwiW2l0ZW0ucmVwZWF0PT0n5pivJz8ncmVwZWF0Jzonbm9yZXBlYXQnXVwiPnt7aXRlbS5yZXBlYXQ9PSfmmK8nPyfph43lpI0nOifkuI3ph43lpI0nfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7dGFiSW5kZXg9PTA/J+WujOaIkOaXtumZkCc6J+WPl+eQhuaXtumXtCd9fe+8mnt7dGFiSW5kZXg9PTA/aXRlbS5jb21wTGltaXREYXRlOml0ZW0uYWNjZXB0RGF0ZX19PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdXAtZGV0YWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgQGNsaWNrPVwic2hvd0RldGFpbChpdGVtKVwiPnt7aXRlbS5jb250ZW50fX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj7kuL7miqXlhoXlrrnlhbPplK7lrZfvvJo8c3Bhbj57e2l0ZW0ua2V5V29yZH19PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3VwLWJvdHRvbVwiPjxzcGFuPuaxoeafk+exu+WeizxzcGFuPnt7aXRlbS5wb2xsdXRpb25UeXBlfX08L3NwYW4+PC9zcGFuPjxzcGFuPuS4u+WKnuWNleS9jTxzcGFuPnt7aXRlbS5sZWFkaW5nVW5pdH19PC9zcGFuPjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHZhbi1wb3B1cCB2LW1vZGVsPVwic2hvd1BpY2tlclNlbGVjdFwiIHBvc2l0aW9uPVwicmlnaHRcIiBzdHlsZT1cIndpZHRoOjcyJTtoZWlnaHQ6IDEwMCU7XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3AtY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcC10aXRsZVwiPjxpbWcgc3JjPVwifkAvYXNzZXRzL3N1cGVydmlzaW9uL3NlYXJjaC5wbmdcIi8+562b6YCJPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8cD7lj5fnkIbnvJblj7c8L3A+XHJcbiAgICAgICAgICAgICAgICA8dmFuLXNlYXJjaCB2LW1vZGVsPVwic2VhcmNoLm5vXCIgc2hhcGU9XCJyb3VuZFwiLz5cclxuICAgICAgICAgICAgICAgIDxwPuS4vuaKpeS4u+imgeWGheWuuTwvcD5cclxuICAgICAgICAgICAgICAgIDx2YW4tc2VhcmNoIHYtbW9kZWw9XCJzZWFyY2guY29udGVudFwiIHNoYXBlPVwicm91bmRcIi8+XHJcbiAgICAgICAgICAgICAgICA8cD7msaHmn5Pnsbvlnos8L3A+XHJcbiAgICAgICAgICAgICAgICA8dmFuLWNoZWNrYm94LWdyb3VwIHYtbW9kZWw9XCJzZWFyY2gucG9sbHV0aW9uVHlwZVwiIGRpcmVjdGlvbj1cImhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dmFuLWNoZWNrYm94IG5hbWU9XCLlmarlo7BcIj48dGVtcGxhdGUgI2ljb249XCJwcm9wc1wiPjxzcGFuPuWZquWjsDwvc3Bhbj48L3RlbXBsYXRlPjwvdmFuLWNoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDx2YW4tY2hlY2tib3ggbmFtZT1cIuWkp+awlFwiPjx0ZW1wbGF0ZSAjaWNvbj1cInByb3BzXCI+PHNwYW4+5aSn5rCUPC9zcGFuPjwvdGVtcGxhdGU+PC92YW4tY2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZhbi1jaGVja2JveCBuYW1lPVwi5Zyf5aOkXCI+PHRlbXBsYXRlICNpY29uPVwicHJvcHNcIj48c3Bhbj7lnJ/lo6Q8L3NwYW4+PC90ZW1wbGF0ZT48L3Zhbi1jaGVja2JveD5cclxuICAgICAgICAgICAgICAgICAgICA8dmFuLWNoZWNrYm94IG5hbWU9XCLnlJ/mgIFcIj48dGVtcGxhdGUgI2ljb249XCJwcm9wc1wiPjxzcGFuPueUn+aAgTwvc3Bhbj48L3RlbXBsYXRlPjwvdmFuLWNoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDx2YW4tY2hlY2tib3ggbmFtZT1cIuawtFwiPjx0ZW1wbGF0ZSAjaWNvbj1cInByb3BzXCI+PHNwYW4+5rC0PC9zcGFuPjwvdGVtcGxhdGU+PC92YW4tY2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZhbi1jaGVja2JveCBuYW1lPVwi5YW25LuW5rGh5p+TXCI+PHRlbXBsYXRlICNpY29uPVwicHJvcHNcIj48c3Bhbj7lhbbku5bmsaHmn5M8L3NwYW4+PC90ZW1wbGF0ZT48L3Zhbi1jaGVja2JveD5cclxuICAgICAgICAgICAgICAgICAgICA8dmFuLWNoZWNrYm94IG5hbWU9XCLovpDlsIRcIj48dGVtcGxhdGUgI2ljb249XCJwcm9wc1wiPjxzcGFuPui+kOWwhDwvc3Bhbj48L3RlbXBsYXRlPjwvdmFuLWNoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgPC92YW4tY2hlY2tib3gtZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8cD7kuLvlip7ljZXkvY08L3A+XHJcbiAgICAgICAgICAgICAgICA8dmFuLXNlYXJjaCB2LW1vZGVsPVwic2VhcmNoLmxlYWRpbmdVbml0XCIgc2hhcGU9XCJyb3VuZFwiLz5cclxuICAgICAgICAgICAgICAgIDxwPuaYr+WQpumHjeWkjTwvcD5cclxuICAgICAgICAgICAgICAgIDx2YW4tcmFkaW8tZ3JvdXAgdi1tb2RlbD1cInNlYXJjaC5yZXBlYXRcIiBkaXJlY3Rpb249XCJob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZhbi1yYWRpbyBuYW1lPVwi5pivXCI+PHRlbXBsYXRlICNpY29uPVwicHJvcHNcIj48c3Bhbj7mmK88L3NwYW4+PC90ZW1wbGF0ZT48L3Zhbi1yYWRpbz5cclxuICAgICAgICAgICAgICAgICAgICA8dmFuLXJhZGlvIG5hbWU9XCLlkKZcIj48dGVtcGxhdGUgI2ljb249XCJwcm9wc1wiPjxzcGFuPuWQpjwvc3Bhbj48L3RlbXBsYXRlPjwvdmFuLXJhZGlvPlxyXG4gICAgICAgICAgICAgICAgPC92YW4tcmFkaW8tZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8cD7lrozmiJDmlbTmlLnmg4XlhrU8L3A+XHJcbiAgICAgICAgICAgICAgICA8dmFuLXJhZGlvLWdyb3VwIHYtbW9kZWw9XCJzZWFyY2guY2hhbmdlQ29tcFNpdHVhdGlvblwiIGRpcmVjdGlvbj1cImhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dmFuLXJhZGlvIG5hbWU9XCLmmK9cIj48dGVtcGxhdGUgI2ljb249XCJwcm9wc1wiPjxzcGFuPuaYrzwvc3Bhbj48L3RlbXBsYXRlPjwvdmFuLXJhZGlvPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2YW4tcmFkaW8gbmFtZT1cIuWQplwiPjx0ZW1wbGF0ZSAjaWNvbj1cInByb3BzXCI+PHNwYW4+5ZCmPC9zcGFuPjwvdGVtcGxhdGU+PC92YW4tcmFkaW8+XHJcbiAgICAgICAgICAgICAgICA8L3Zhbi1yYWRpby1ncm91cD5cclxuICAgICAgICAgICAgICAgIDxwPuiHquafpeiHqumqjOaDheWGtTwvcD5cclxuICAgICAgICAgICAgICAgIDx2YW4tcmFkaW8tZ3JvdXAgdi1tb2RlbD1cInNlYXJjaC5zZWxmQ2hlY2tTaXR1YXRpb25cIiBkaXJlY3Rpb249XCJob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZhbi1yYWRpbyBuYW1lPVwi5pivXCI+PHRlbXBsYXRlICNpY29uPVwicHJvcHNcIj48c3Bhbj7mmK88L3NwYW4+PC90ZW1wbGF0ZT48L3Zhbi1yYWRpbz5cclxuICAgICAgICAgICAgICAgICAgICA8dmFuLXJhZGlvIG5hbWU9XCLlkKZcIj48dGVtcGxhdGUgI2ljb249XCJwcm9wc1wiPjxzcGFuPuWQpjwvc3Bhbj48L3RlbXBsYXRlPjwvdmFuLXJhZGlvPlxyXG4gICAgICAgICAgICAgICAgPC92YW4tcmFkaW8tZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wLWJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIEBjbGljaz1cInJlc2V0U2VhcmNoXCI+6YeN572uPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIEBjbGljaz1cInF1ZXJ5TGlzdFwiPuehruWumjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3Zhbi1wb3B1cD5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IHtnZXRTdXBlckJhdGNoLCBnZXRTdXBlckxpc3R9IGZyb20gXCJAL2FwaS9jYXNlXCJcclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiBcImluZGV4XCIsXHJcbiAgICAgICAgY29tcG9uZW50cyA6IHtcclxuXHJcbiAgICAgICAgfSxcclxuICAgICAgICBkYXRhKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgdGFiQXJyOiBbJ+S4reWkrueOr+S/needo+WvnycsICfnnIHnuqfnjq/kv53nnaPlr58nLCAn5biC57qn546v5L+d552j5a+fJ10sXHJcbiAgICAgICAgICAgICAgICBidG5BcnI6IFtdLFxyXG4gICAgICAgICAgICAgICAgdGFibGVMaXN0IDogW10sXHJcbiAgICAgICAgICAgICAgICB0YWJJbmRleDogMCxcclxuICAgICAgICAgICAgICAgIGJ0bkluZGV4IDogMCxcclxuICAgICAgICAgICAgICAgIHNlYXJjaEtleXdvcmQgOiAnJyxcclxuICAgICAgICAgICAgICAgIHNob3dQaWNrZXJTZWxlY3QgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHNlYXJjaCA6IHtcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VDb21wU2l0dWF0aW9uOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVhZGluZ1VuaXQ6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbm86IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9sbHV0aW9uVHlwZTogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVwZWF0OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGZDaGVja1NpdHVhdGlvbjogXCJcIlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRCYXRjaCgpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBjaGFuZ2VUYWIoaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFiSW5kZXggPSBpbmRleDtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuSW5kZXggPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0QmF0Y2goKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2hhbmdlQnRuVGFiKGluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkluZGV4ID0gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXJ5TGlzdCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICByZXNldFNlYXJjaCgpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2ggPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlQ29tcFNpdHVhdGlvbjogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlYWRpbmdVbml0OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vOiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvbGx1dGlvblR5cGU6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcGVhdDogXCJcIixcclxuICAgICAgICAgICAgICAgICAgICBzZWxmQ2hlY2tTaXR1YXRpb246IFwiXCJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5pdEJhdGNoKCl7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2VhcmNoID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgOiB0aGlzLnRhYkluZGV4PT0wPydjZW50ZXInOnRoaXMudGFiSW5kZXg9PTE/J3Byb3ZpbmNlJzonY2l0eSdcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGdldFN1cGVyQmF0Y2goc2VhcmNoKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5BcnIgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXMuZGF0YS5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucXVlcnlMaXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHF1ZXJ5TGlzdCgpe1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge3RhYkluZGV4LGJ0bkFycixidG5JbmRleCxzZWFyY2h9ID0gdGhpcztcclxuICAgICAgICAgICAgICAgIHNlYXJjaC5iYXRjaCA9IGJ0bkFyci5sZW5ndGg+MD9idG5BcnJbYnRuSW5kZXhdOicnO1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZm8gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA6IHRhYkluZGV4PT0wPydjZW50ZXInOnRhYkluZGV4PT0xPydwcm92aW5jZSc6J2NpdHknLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VOdW0gOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VTaXplIDogOTk5OVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy50YWJsZUxpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgIGdldFN1cGVyTGlzdChpbmZvLHNlYXJjaCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGEucmVjb3JkcztcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2goaXRlbT0+e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpdGVtLmlzQ2FuY2VsID09ICfmmK8nKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc2l0dWF0aW9uVGV4dCA9ICflt7LplIDlj7cnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNlIGlmKGl0ZW0uaXNDb21wPT0n5pivJyAmJiBpdGVtLnNlbGZDaGVja1NpdHVhdGlvbj09J+aYrycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zaXR1YXRpb25UZXh0ID0gJ+aVtOaUueWujOaIkO+8jOW3suWujOaIkOiHquafpeiHqumqjCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2UgaWYoaXRlbS5pc0NvbXA9PSfmmK8nICYmIGl0ZW0uc2VsZkNoZWNrU2l0dWF0aW9uPT0n5ZCmJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnNpdHVhdGlvblRleHQgPSAn5pW05pS55a6M5oiQ77yM5pyq5a6M5oiQ6Ieq5p+l6Ieq6aqMJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9ZWxzZSBpZihpdGVtLmlzQ29tcD09J+WQpicgJiYgaXRlbS5zZWxmQ2hlY2tTaXR1YXRpb249PSflkKYnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uc2l0dWF0aW9uVGV4dCA9ICfmlbTmlLnkuK0nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYmxlTGlzdCA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UGlja2VyU2VsZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hvd0RldGFpbChyb3cpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHRhYkluZGV4ID0gdGhpcy50YWJJbmRleDtcclxuICAgICAgICAgICAgICAgIGxldCBwYXRoID0gdGFiSW5kZXg9PTA/J3N1cGVyRGV0YWlsJzoncHJvdmluY2VEZXRhaWwnXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcGF0aCxcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeSA6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFiSW5kZXggOiB0aGlzLnRhYkluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZCA6IHJvdy5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2l0dWF0aW9uVGV4dCA6IHJvdy5zaXR1YXRpb25UZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcblxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gICAgOjp2LWRlZXAgLnZhbi1zZWFyY2hfX2NvbnRlbnR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICAgIDo6di1kZWVwIC52YW4tc2VhcmNoe1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICB9XHJcbiAgICAudGFiLXdyYXBwZXIge1xyXG4gICAgICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAwcHggMTBweDtcclxuICAgICAgICAudGFiLWl0ZW0ge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuOCk7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCJ+QC9hc3NldHMvcG9sbHV0aW9uLXRhYi1iZy5wbmdcIikgbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDI3cHggOHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5idG4tdGlwc3tcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgID5kaXZ7XHJcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNTBweCk7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA+ZGl2e1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMTgsIDIyNCwgMjQyLCAxKTtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWdyb3c6IDA7XHJcbiAgICAgICAgICAgICAgICBmbGV4LXNocmluazogMDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDAuNSk7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuYWN0aXZlIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMjAsIDIyNiwgMjUyLCAwLjUpO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSg4NCwgMTE3LCAyNDgsIDEpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoXCJ+QC9hc3NldHMvc3VwZXJ2aXNpb24vc3VwLXJpZ2h0LnBuZ1wiKSBuby1yZXBlYXQ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGJvdHRvbTtcclxuICAgICAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIwLCAyMjYsIDI1MiwgMC41KTtcclxuICAgICAgICAgICAgPmltZ3tcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmZpcnN0LWNvbnRlbnR7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbjogNXB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAudG90YWx7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMzUsIDIzOCwgMjU1LCAxKTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMjBweCAwcHggMTBweDtcclxuICAgICAgICAgICAgPnNwYW57XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMC41KTtcclxuICAgICAgICAgICAgICAgID5zcGFue1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgICAgID5mb250e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgID5zcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSg4MiwgMTEzLCAyNTUsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc3BsaXR7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMTBweCA7XHJcbiAgICAgICAgICAgIGhlaWdodDogMHB4O1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgcmdiYSgzNywgNTcsIDExMSwgMC4xKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvdGFsLW51bXtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcclxuICAgICAgICAgICAgPmRpdntcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgID5kaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgPmltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE0LjU5cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuc3BsaXR7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAyMC4wMXB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxMHB4IDJweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMzcsIDU3LCAxMTEsIDAuMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRvdGFsLWJne1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBtYXJnaW46IDEwcHggMTBweCAxNXB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgID5kaXZ7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDg0LCAxMTcsIDI0OCwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgyKXtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzUlO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjZweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjZweDtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NCwgMTk2LCAxMTUsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMyl7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTUwLCA5MiwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA+ZGl2e1xyXG4gICAgICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgyMywgMjgsIDMzLCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAudG90YWwtb3RoZXJ7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgICAgICAgICAgPmRpdntcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgID5kaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgPmltZ3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNC41OXB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMC41KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMjJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zdXAtbWFpbntcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4IDIwcHggMHB4IDBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpIGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjQwLCAyNDEsIDI0NSwgMC4wMSkgMCUsIHJnYmEoMjQyLCAyNDcsIDI1NSwgMSkgMTAwJSk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDVweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgPmRpdntcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICAgICAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCAgcmdiYSgzNywgNTcsIDExMSwgMC4wNSk7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcclxuICAgICAgICAgICAgLnN1cC10aXRsZXtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA2cHggMjBweCAgcmdiYSgzNywgNTcsIDExMSwgMC4wNSk7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDhweCA1cHg7XHJcbiAgICAgICAgICAgICAgICA+c3BhbntcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMC41KTtcclxuICAgICAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDEwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDJweCA4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMHB4IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYmx1ZS1iZ3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTA5LCAxNzAsIDI1MywgMSkgMCUsIHJnYmEoNjcsIDEyMCwgMjM4LCAxKSAxMDAlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5ncmVlbi1iZ3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoNjQsIDIxNCwgMjA0LCAxKSAwJSwgcmdiYSg4LCAyMDcsIDE5MywgMSkgMTAwJSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAueWVsbG93LWJne1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSgyNTAsIDE5MCwgMTMwLCAxKSAwJSwgcmdiYSgyNTUsIDE0MSwgMjYsIDEpIDEwMCUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmNhbmNlbC1iZ3tcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMTYzLCAxNzYsIDIxMiwgMSkgMCUsIHJnYmEoNzksIDEwMCwgMTU2LCAxKSAxMDAlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5yZXBlYXR7XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTIsIDIzNCwgMjMwLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDg3LCA1MSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDIwMywgMTkxLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5ub3JlcGVhdHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDE4NiwgMTczLCAwLjEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMTg2LCAxNzMsIDAuMik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMCwgMTg2LCAxNzMsIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5zdXAtZGV0YWlse1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMTBweCAxMHB4IDVweDtcclxuICAgICAgICAgICAgICAgID5kaXZ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMC41KTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgPnNwYW57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoNjgsIDEyMywgMjUyLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnN1cC1ib3R0b217XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAvKmp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsqL1xyXG4gICAgICAgICAgICAgICAgICAgID5zcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA+c3BhbntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm5vLWRhdGF7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogIzkwOTM5OTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnBvcC1jb250ZW50e1xyXG4gICAgICAgIHBhZGRpbmc6IDMwcHggMTBweCAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAucG9wLXRpdGxle1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMXB4O1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMSk7XHJcbiAgICAgICAgICAgID5pbWd7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgPnB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAxKTtcclxuICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDVweCA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDo6di1kZWVwIC52YW4tc2VhcmNoe1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDo6di1kZWVwIC52YW4tc2VhcmNoX19jb250ZW50e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NSwgMjQ2LCAyNDksIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICA6OnYtZGVlcCAudmFuLWZpZWxkX19jb250cm9se1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMC41KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgOjp2LWRlZXAgLnZhbi1yYWRpb3tcclxuICAgICAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMTJweCk7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgOjp2LWRlZXAgLnZhbi1yYWRpb19faWNvbntcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNDUsIDI0NiwgMjQ5LCAxKTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMC41KTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICA6OnYtZGVlcCAudmFuLXJhZGlvX19pY29uLS1jaGVja2Vke1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk4OWZhO1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICMxOTg5ZmE7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIH1cclxuICAgICAgICA6OnYtZGVlcCAudmFuLWNoZWNrYm94e1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMnB4KTtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICA6OnYtZGVlcCAudmFuLWNoZWNrYm94X19pY29ue1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI0NSwgMjQ2LCAyNDksIDEpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAwLjUpO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDo6di1kZWVwIC52YW4tY2hlY2tib3hfX2ljb24tLWNoZWNrZWR7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTg5ZmE7XHJcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogIzE5ODlmYTtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wb3AtYm90dG9te1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgIG1hcmdpbjogMzBweCAwcHggMTBweDtcclxuICAgICAgICAgICAgPnNwYW57XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMnB4KTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDUsIDI0NiwgMjQ5LCAxKTtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDg0LCAxMTcsIDI0OCwgMSk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoODQsIDExNywgMjQ4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG48L3N0eWxlPlxyXG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljU3R5bGU6IHsgYmFja2dyb3VuZDogXCIjRTdFREZBXCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFwidmFuLW5hdi1iYXJcIiwge1xuICAgICAgICBhdHRyczogeyB0aXRsZTogXCLnjq/kv53nnaPlr59cIiwgXCJsZWZ0LWFycm93XCI6IFwiXCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcImNsaWNrLWxlZnRcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLmdvKC0xKVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgIGhlaWdodDogXCJjYWxjKDEwMHZoIC0gOXZoKVwiLFxuICAgICAgICAgICAgXCJvdmVyZmxvdy15XCI6IFwiYXV0b1wiLFxuICAgICAgICAgICAgXCJvdmVyZmxvdy14XCI6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFiLXdyYXBwZXIgZnNcIiB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS50YWJBcnIsIGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXCJ0YWItaXRlbVwiLCBpID09PSBfdm0udGFiSW5kZXggPyBcImFjdGl2ZVwiIDogXCJcIl0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hhbmdlVGFiKGkpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbSkgKyBcIiBcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgMFxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidG4tdGlwc1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLmJ0bkFyciwgZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogW2kgPT09IF92bS5idG5JbmRleCA/IFwiYWN0aXZlXCIgOiBcIlwiXSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFuZ2VCdG5UYWIoaSlcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtKSksXG4gICAgICAgICAgICAgICAgICAgIGkgPT09IF92bS5idG5JbmRleFxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL3N1cGVydmlzaW9uL3N1cC1zdXJlLnBuZ1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3dQaWNrZXJTZWxlY3QgPSB0cnVlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCLnrZvpgIlcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udGFiSW5kZXggIT0gMixcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGFiSW5kZXghPTJcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmaXJzdC1jb250ZW50XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRvdGFsXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCLmtonlj4rmmIbmmI7luILmgLtcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW19jKFwiZm9udFwiLCBbX3ZtLl92KFwiMzNcIildKSwgX3ZtLl92KFwi6aG5XCIpXSwgMSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIuW3suWujOaIkFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX2MoXCJmb250XCIsIFtfdm0uX3YoXCIxM1wiKV0pLCBfdm0uX3YoXCLpoblcIildLCAxKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnRhYkluZGV4ID09IDEsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0YWJJbmRleD09MVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRvdGFsLWJnXCIsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi1ib3R0b21cIjogXCIzMHB4XCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX20oMCksIF92bS5fbSgxKSwgX3ZtLl9tKDIpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInNwbGl0XCIgfSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnRhYkluZGV4ID09IDAsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ0YWJJbmRleD09MFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRvdGFsLW51bVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl9tKDMpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzcGxpdFwiIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl9tKDQpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzcGxpdFwiIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl9tKDUpLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udGFiSW5kZXggPT0gMCxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInRhYkluZGV4PT0wXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidG90YWwtYmdcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX20oNiksIF92bS5fbSg3KSwgX3ZtLl9tKDgpXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS50YWJJbmRleCA9PSAxLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGFiSW5kZXg9PTFcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0b3RhbC1vdGhlclwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fbSg5KSwgX3ZtLl9tKDEwKSwgX3ZtLl9tKDExKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic3VwLW1haW5cIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0udGFibGVMaXN0Lmxlbmd0aCA9PSAwLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidGFibGVMaXN0Lmxlbmd0aD09MFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5vLWRhdGFcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLmmoLml6DmlbDmja5cIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fbChfdm0udGFibGVMaXN0LCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInN1cC10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zaXR1YXRpb25UZXh0LmluZGV4T2YoXCLlt7LlrozmiJBcIikgPiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJibHVlLWJnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW0uc2l0dWF0aW9uVGV4dC5pbmRleE9mKFwi5pyq5a6M5oiQXCIpID4gLTFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiZ3JlZW4tYmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogaXRlbS5zaXR1YXRpb25UZXh0LmluZGV4T2YoXCLmlbTmlLnkuK1cIikgPiAtMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJ5ZWxsb3ctYmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJjYW5jZWwtYmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtLnNpdHVhdGlvblRleHQpKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBjbGFzczogW2l0ZW0ucmVwZWF0ID09IFwi5pivXCIgPyBcInJlcGVhdFwiIDogXCJub3JlcGVhdFwiXSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ucmVwZWF0ID09IFwi5pivXCIgPyBcIumHjeWkjVwiIDogXCLkuI3ph43lpI1cIikpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udGFiSW5kZXggPT0gMCA/IFwi5a6M5oiQ5pe26ZmQXCIgOiBcIuWPl+eQhuaXtumXtFwiKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwi77yaXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRhYkluZGV4ID09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gaXRlbS5jb21wTGltaXREYXRlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW0uYWNjZXB0RGF0ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3VwLWRldGFpbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2hvd0RldGFpbChpdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uY29udGVudCkpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5Li+5oql5YaF5a655YWz6ZSu5a2X77yaXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLmtleVdvcmQpKV0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzdXAtYm90dG9tXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLmsaHmn5PnsbvlnotcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS5wb2xsdXRpb25UeXBlKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5Li75Yqe5Y2V5L2NXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ubGVhZGluZ1VuaXQpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApLFxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwidmFuLXBvcHVwXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCI3MiVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9LFxuICAgICAgICAgIGF0dHJzOiB7IHBvc2l0aW9uOiBcInJpZ2h0XCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5zaG93UGlja2VyU2VsZWN0LFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLnNob3dQaWNrZXJTZWxlY3QgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcInNob3dQaWNrZXJTZWxlY3RcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwb3AtY29udGVudFwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicG9wLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL3N1cGVydmlzaW9uL3NlYXJjaC5wbmdcIikgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCLnrZvpgIlcIiksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIuWPl+eQhue8luWPt1wiKV0pLFxuICAgICAgICAgICAgICBfYyhcInZhbi1zZWFyY2hcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNoYXBlOiBcInJvdW5kXCIgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gubm8sXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcIm5vXCIsICQkdilcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5ub1wiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIuS4vuaKpeS4u+imgeWGheWuuVwiKV0pLFxuICAgICAgICAgICAgICBfYyhcInZhbi1zZWFyY2hcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNoYXBlOiBcInJvdW5kXCIgfSxcbiAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2guY29udGVudCxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwiY29udGVudFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2guY29udGVudFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfYyhcInBcIiwgW192bS5fdihcIuaxoeafk+exu+Wei1wiKV0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInZhbi1jaGVja2JveC1ncm91cFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpcmVjdGlvbjogXCJob3Jpem9udGFsXCIgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLnBvbGx1dGlvblR5cGUsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLnNlYXJjaCwgXCJwb2xsdXRpb25UeXBlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2gucG9sbHV0aW9uVHlwZVwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidmFuLWNoZWNrYm94XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCLlmarlo7BcIiB9LFxuICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW19jKFwic3BhblwiLCBbX3ZtLl92KFwi5Zmq5aOwXCIpXSldXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcInZhbi1jaGVja2JveFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwi5aSn5rCUXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtfYyhcInNwYW5cIiwgW192bS5fdihcIuWkp+awlFwiKV0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2YW4tY2hlY2tib3hcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcIuWcn+WjpFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlnJ/lo6RcIildKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidmFuLWNoZWNrYm94XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCLnlJ/mgIFcIiB9LFxuICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW19jKFwic3BhblwiLCBbX3ZtLl92KFwi55Sf5oCBXCIpXSldXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfYyhcInZhbi1jaGVja2JveFwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwi5rC0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcImljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAocHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtfYyhcInNwYW5cIiwgW192bS5fdihcIuawtFwiKV0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ2YW4tY2hlY2tib3hcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcIuWFtuS7luaxoeafk1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlhbbku5bmsaHmn5NcIildKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidmFuLWNoZWNrYm94XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCLovpDlsIRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW19jKFwic3BhblwiLCBbX3ZtLl92KFwi6L6Q5bCEXCIpXSldXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwi5Li75Yqe5Y2V5L2NXCIpXSksXG4gICAgICAgICAgICAgIF9jKFwidmFuLXNlYXJjaFwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgc2hhcGU6IFwicm91bmRcIiB9LFxuICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNlYXJjaC5sZWFkaW5nVW5pdCxcbiAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwibGVhZGluZ1VuaXRcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoLmxlYWRpbmdVbml0XCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwi5piv5ZCm6YeN5aSNXCIpXSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidmFuLXJhZGlvLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlyZWN0aW9uOiBcImhvcml6b250YWxcIiB9LFxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gucmVwZWF0LFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwicmVwZWF0XCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2gucmVwZWF0XCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2YW4tcmFkaW9cIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcIuaYr1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmmK9cIildKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidmFuLXJhZGlvXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCLlkKZcIiB9LFxuICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW19jKFwic3BhblwiLCBbX3ZtLl92KFwi5ZCmXCIpXSldXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwi5a6M5oiQ5pW05pS55oOF5Ya1XCIpXSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidmFuLXJhZGlvLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlyZWN0aW9uOiBcImhvcml6b250YWxcIiB9LFxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2guY2hhbmdlQ29tcFNpdHVhdGlvbixcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uc2VhcmNoLCBcImNoYW5nZUNvbXBTaXR1YXRpb25cIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaC5jaGFuZ2VDb21wU2l0dWF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2YW4tcmFkaW9cIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcIuaYr1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmmK9cIildKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidmFuLXJhZGlvXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCLlkKZcIiB9LFxuICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW19jKFwic3BhblwiLCBbX3ZtLl92KFwi5ZCmXCIpXSldXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwicFwiLCBbX3ZtLl92KFwi6Ieq5p+l6Ieq6aqM5oOF5Ya1XCIpXSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidmFuLXJhZGlvLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlyZWN0aW9uOiBcImhvcml6b250YWxcIiB9LFxuICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2guc2VsZkNoZWNrU2l0dWF0aW9uLFxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5zZWFyY2gsIFwic2VsZkNoZWNrU2l0dWF0aW9uXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2guc2VsZkNoZWNrU2l0dWF0aW9uXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ2YW4tcmFkaW9cIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcIuaYr1wiIH0sXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmmK9cIildKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidmFuLXJhZGlvXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogXCLlkKZcIiB9LFxuICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwiaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uIChwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW19jKFwic3BhblwiLCBbX3ZtLl92KFwi5ZCmXCIpXSldXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicG9wLWJvdHRvbVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBvbjogeyBjbGljazogX3ZtLnJlc2V0U2VhcmNoIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi6YeN572uXCIpLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IG9uOiB7IGNsaWNrOiBfdm0ucXVlcnlMaXN0IH0gfSwgW192bS5fdihcIuehruWumlwiKV0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCIyMOmhuVwiKV0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi10b3BcIjogXCI4cHhcIiB9IH0sIFtcbiAgICAgICAgX3ZtLl92KFwi5pyq5a6M5oiQ6L6+5Yiw5bqP5pe26L+b5bqmXCIpLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCIy6aG5XCIpXSksXG4gICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwi5pyq6L6+5Yiw5bqP5pe26L+b5bqmXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCIx6aG5XCIpXSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLXRvcFwiOiBcIjhweFwiIH0gfSwgW192bS5fdihcIuacquWQr+WKqFwiKV0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMvc3VwZXJ2aXNpb24vcGllMS5wbmdcIikgfSB9KSxcbiAgICAgICAgX3ZtLl92KFwiMjDpoblcIiksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCLmnKrlrozmiJDovr7liLDluo/ml7bov5vluqZcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL3N1cGVydmlzaW9uL3BpZTIucG5nXCIpIH0gfSksXG4gICAgICAgIF92bS5fdihcIjDpoblcIiksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCLmnKrovr7liLDluo/ml7bov5vluqZcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL3N1cGVydmlzaW9uL3BpZTMucG5nXCIpIH0gfSksXG4gICAgICAgIF92bS5fdihcIjDpoblcIiksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCLmnKrlkK/liqhcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcIumcgOWujOaIkDIz6aG5XCIpXSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLXRvcFwiOiBcIjhweFwiIH0gfSwgW192bS5fdihcIjIwMjPlubRcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgICAgX2MoXCJkaXZcIiwgW192bS5fdihcIumcgOWujOaIkDI46aG5XCIpXSksXG4gICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwiMjAyNOW5tFwiKV0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgICBfYyhcImRpdlwiLCBbX3ZtLl92KFwi6ZyA5a6M5oiQMjPpoblcIildKSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tdG9wXCI6IFwiOHB4XCIgfSB9LCBbX3ZtLl92KFwiMjAyNeW5tFwiKV0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy9zdXBlcnZpc2lvbi9jaWNseS5wbmdcIikgfSxcbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIjIwMjPlubTpnIDlrozmiJBcIiksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCIyM+mhuVwiKV0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy9zdXBlcnZpc2lvbi9jaWNseS5wbmdcIikgfSxcbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIjIwMjTlubTpnIDlrozmiJBcIiksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCIyM+mhuVwiKV0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy9zdXBlcnZpc2lvbi9jaWNseS5wbmdcIikgfSxcbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIjIwMjXlubTpnIDlrozmiJBcIiksXG4gICAgICBdKSxcbiAgICAgIF9jKFwiZGl2XCIsIFtfdm0uX3YoXCIyM+mhuVwiKV0pLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIid1c2Ugc3RyaWN0JztcbnZhciAkZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5mb3JFYWNoO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2ZvckVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbm1vZHVsZS5leHBvcnRzID0gIVNUUklDVF9NRVRIT0QgPyBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gIHJldHVybiAkZm9yRWFjaCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWZvcmVhY2ggLS0gc2FmZVxufSA6IFtdLmZvckVhY2g7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBgU2FtZVZhbHVlYCBhYnN0cmFjdCBvcGVyYXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc2FtZXZhbHVlXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tb2JqZWN0LWlzIC0tIHNhZmVcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmlzIHx8IGZ1bmN0aW9uIGlzKHgsIHkpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZSAtLSBOYU4gY2hlY2tcbiAgcmV0dXJuIHggPT09IHkgPyB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSA6IHggIT09IHggJiYgeSAhPT0geTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBzYW1lVmFsdWUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc2FtZS12YWx1ZScpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xuXG4vLyBAQHNlYXJjaCBsb2dpY1xuZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMoJ3NlYXJjaCcsIGZ1bmN0aW9uIChTRUFSQ0gsIG5hdGl2ZVNlYXJjaCwgbWF5YmVDYWxsTmF0aXZlKSB7XG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc2VhcmNoYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc2VhcmNoXG4gICAgZnVuY3Rpb24gc2VhcmNoKHJlZ2V4cCkge1xuICAgICAgdmFyIE8gPSByZXF1aXJlT2JqZWN0Q29lcmNpYmxlKHRoaXMpO1xuICAgICAgdmFyIHNlYXJjaGVyID0gaXNOdWxsT3JVbmRlZmluZWQocmVnZXhwKSA/IHVuZGVmaW5lZCA6IGdldE1ldGhvZChyZWdleHAsIFNFQVJDSCk7XG4gICAgICByZXR1cm4gc2VhcmNoZXIgPyBjYWxsKHNlYXJjaGVyLCByZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW1NFQVJDSF0odG9TdHJpbmcoTykpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzZWFyY2hcbiAgICBmdW5jdGlvbiAoc3RyaW5nKSB7XG4gICAgICB2YXIgcnggPSBhbk9iamVjdCh0aGlzKTtcbiAgICAgIHZhciBTID0gdG9TdHJpbmcoc3RyaW5nKTtcbiAgICAgIHZhciByZXMgPSBtYXliZUNhbGxOYXRpdmUobmF0aXZlU2VhcmNoLCByeCwgUyk7XG5cbiAgICAgIGlmIChyZXMuZG9uZSkgcmV0dXJuIHJlcy52YWx1ZTtcblxuICAgICAgdmFyIHByZXZpb3VzTGFzdEluZGV4ID0gcngubGFzdEluZGV4O1xuICAgICAgaWYgKCFzYW1lVmFsdWUocHJldmlvdXNMYXN0SW5kZXgsIDApKSByeC5sYXN0SW5kZXggPSAwO1xuICAgICAgdmFyIHJlc3VsdCA9IHJlZ0V4cEV4ZWMocngsIFMpO1xuICAgICAgaWYgKCFzYW1lVmFsdWUocngubGFzdEluZGV4LCBwcmV2aW91c0xhc3RJbmRleCkpIHJ4Lmxhc3RJbmRleCA9IHByZXZpb3VzTGFzdEluZGV4O1xuICAgICAgcmV0dXJuIHJlc3VsdCA9PT0gbnVsbCA/IC0xIDogcmVzdWx0LmluZGV4O1xuICAgIH1cbiAgXTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBET01JdGVyYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcycpO1xudmFyIERPTVRva2VuTGlzdFByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20tdG9rZW4tbGlzdC1wcm90b3R5cGUnKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xuXG52YXIgaGFuZGxlUHJvdG90eXBlID0gZnVuY3Rpb24gKENvbGxlY3Rpb25Qcm90b3R5cGUpIHtcbiAgLy8gc29tZSBDaHJvbWUgdmVyc2lvbnMgaGF2ZSBub24tY29uZmlndXJhYmxlIG1ldGhvZHMgb24gRE9NVG9rZW5MaXN0XG4gIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlICYmIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCAhPT0gZm9yRWFjaCkgdHJ5IHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ29sbGVjdGlvblByb3RvdHlwZSwgJ2ZvckVhY2gnLCBmb3JFYWNoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggPSBmb3JFYWNoO1xuICB9XG59O1xuXG5mb3IgKHZhciBDT0xMRUNUSU9OX05BTUUgaW4gRE9NSXRlcmFibGVzKSB7XG4gIGlmIChET01JdGVyYWJsZXNbQ09MTEVDVElPTl9OQU1FXSkge1xuICAgIGhhbmRsZVByb3RvdHlwZShnbG9iYWxUaGlzW0NPTExFQ1RJT05fTkFNRV0gJiYgZ2xvYmFsVGhpc1tDT0xMRUNUSU9OX05BTUVdLnByb3RvdHlwZSk7XG4gIH1cbn1cblxuaGFuZGxlUHJvdG90eXBlKERPTVRva2VuTGlzdFByb3RvdHlwZSk7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIkAvYXNzZXRzL3BvbGx1dGlvbi10YWItYmcucG5nXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gcmVxdWlyZShcIkAvYXNzZXRzL3N1cGVydmlzaW9uL3N1cC1yaWdodC5wbmdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJbZGF0YS12LTU3Y2UzZDg4XSAudmFuLXNlYXJjaF9fY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbn1cXG5bZGF0YS12LTU3Y2UzZDg4XSAudmFuLXNlYXJjaCB7XFxuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi50YWItd3JhcHBlcltkYXRhLXYtNTdjZTNkODhdIHtcXG4gIG1hcmdpbjogMTBweCAwO1xcbiAgcGFkZGluZzogMHB4IDBweCAxMHB4O1xcbn1cXG4udGFiLXdyYXBwZXIgLnRhYi1pdGVtW2RhdGEtdi01N2NlM2Q4OF0ge1xcbiAgd2lkdGg6IDUwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi50YWItd3JhcHBlciAuYWN0aXZlW2RhdGEtdi01N2NlM2Q4OF0ge1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC44KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xcbiAgYmFja2dyb3VuZC1zaXplOiAyN3B4IDhweDtcXG59XFxuLmJ0bi10aXBzW2RhdGEtdi01N2NlM2Q4OF0ge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuLmJ0bi10aXBzID4gZGl2W2RhdGEtdi01N2NlM2Q4OF06Zmlyc3QtY2hpbGQge1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwcHgpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxufVxcbi5idG4tdGlwcyA+IGRpdiA+IGRpdltkYXRhLXYtNTdjZTNkODhdIHtcXG4gIHdpZHRoOiA3MHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGFlMGYyO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDAuNSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIGZsZXgtZ3JvdzogMDtcXG4gIGZsZXgtc2hyaW5rOiAwO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uYnRuLXRpcHMgPiBkaXZbZGF0YS12LTU3Y2UzZDg4XTpsYXN0LWNoaWxkIHtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDAuNSk7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuLmJ0bi10aXBzIC5hY3RpdmVbZGF0YS12LTU3Y2UzZDg4XSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDIyMCwgMjI2LCAyNTIsIDAuNSk7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6ICM1NDc1Zjg7XFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IGJvdHRvbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjIwLCAyMjYsIDI1MiwgMC41KTtcXG59XFxuLmJ0bi10aXBzIC5hY3RpdmUgPiBpbWdbZGF0YS12LTU3Y2UzZDg4XSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBtYXJnaW4tbGVmdDogNHB4O1xcbiAgbWFyZ2luLXRvcDogMjFweDtcXG59XFxuLmZpcnN0LWNvbnRlbnRbZGF0YS12LTU3Y2UzZDg4XSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIG1hcmdpbjogNXB4O1xcbiAgcGFkZGluZzogNXB4O1xcbn1cXG4uZmlyc3QtY29udGVudCAudG90YWxbZGF0YS12LTU3Y2UzZDg4XSB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogI2ViZWVmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwcHggMjBweCAwcHggMTBweDtcXG59XFxuLmZpcnN0LWNvbnRlbnQgLnRvdGFsID4gc3BhbltkYXRhLXYtNTdjZTNkODhdIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG4gIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAwLjUpO1xcbn1cXG4uZmlyc3QtY29udGVudCAudG90YWwgPiBzcGFuID4gc3BhbltkYXRhLXYtNTdjZTNkODhdIHtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBjb2xvcjogIzI1Mzk2ZjtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcbi5maXJzdC1jb250ZW50IC50b3RhbCA+IHNwYW4gPiBzcGFuID4gZm9udFtkYXRhLXYtNTdjZTNkODhdIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxufVxcbi5maXJzdC1jb250ZW50IC50b3RhbCA+IHNwYW46bGFzdC1jaGlsZCA+IHNwYW5bZGF0YS12LTU3Y2UzZDg4XSB7XFxuICBjb2xvcjogIzUyNzFmZjtcXG59XFxuLmZpcnN0LWNvbnRlbnQgLnNwbGl0W2RhdGEtdi01N2NlM2Q4OF0ge1xcbiAgbWFyZ2luOiAxMHB4O1xcbiAgaGVpZ2h0OiAwcHg7XFxuICBib3JkZXI6IDFweCBkYXNoZWQgcmdiYSgzNywgNTcsIDExMSwgMC4xKTtcXG59XFxuLmZpcnN0LWNvbnRlbnQgLnRvdGFsLW51bVtkYXRhLXYtNTdjZTNkODhdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwcHggMTBweDtcXG59XFxuLmZpcnN0LWNvbnRlbnQgLnRvdGFsLW51bSA+IGRpdltkYXRhLXYtNTdjZTNkODhdIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmZpcnN0LWNvbnRlbnQgLnRvdGFsLW51bSA+IGRpdiA+IGRpdiA+IGltZ1tkYXRhLXYtNTdjZTNkODhdIHtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xcbn1cXG4uZmlyc3QtY29udGVudCAudG90YWwtbnVtID4gZGl2ID4gZGl2W2RhdGEtdi01N2NlM2Q4OF06bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tdG9wOiA2cHg7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IDE0LjU5cHg7XFxuICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMC41KTtcXG59XFxuLmZpcnN0LWNvbnRlbnQgLnRvdGFsLW51bSAuc3BsaXRbZGF0YS12LTU3Y2UzZDg4XSB7XFxuICB3aWR0aDogMHB4O1xcbiAgaGVpZ2h0OiAyMC4wMXB4O1xcbiAgbWFyZ2luOiAxMHB4IDJweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMzcsIDU3LCAxMTEsIDAuMSk7XFxufVxcbi5maXJzdC1jb250ZW50IC50b3RhbC1iZ1tkYXRhLXYtNTdjZTNkODhdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDEwcHggMTBweCAxNXB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmZpcnN0LWNvbnRlbnQgLnRvdGFsLWJnID4gZGl2W2RhdGEtdi01N2NlM2Q4OF0ge1xcbiAgaGVpZ2h0OiAxNnB4O1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZmlyc3QtY29udGVudCAudG90YWwtYmcgPiBkaXZbZGF0YS12LTU3Y2UzZDg4XTpmaXJzdC1jaGlsZCB7XFxuICB3aWR0aDogNDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0NzVmODtcXG59XFxuLmZpcnN0LWNvbnRlbnQgLnRvdGFsLWJnID4gZGl2W2RhdGEtdi01N2NlM2Q4OF06bnRoLWNoaWxkKDIpIHtcXG4gIHdpZHRoOiAzNSU7XFxuICBoZWlnaHQ6IDI2cHg7XFxuICBsaW5lLWhlaWdodDogMjZweDtcXG4gIGJhY2tncm91bmQ6ICNmZWM0NzM7XFxufVxcbi5maXJzdC1jb250ZW50IC50b3RhbC1iZyA+IGRpdltkYXRhLXYtNTdjZTNkODhdOm50aC1jaGlsZCgzKSB7XFxuICB3aWR0aDogMjUlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmOTY1YztcXG59XFxuLmZpcnN0LWNvbnRlbnQgLnRvdGFsLWJnID4gZGl2ID4gZGl2W2RhdGEtdi01N2NlM2Q4OF06bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tdG9wOiAzcHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICBjb2xvcjogcmdiYSgyMywgMjgsIDMzLCAwLjUpO1xcbn1cXG4uZmlyc3QtY29udGVudCAudG90YWwtb3RoZXJbZGF0YS12LTU3Y2UzZDg4XSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMHB4IDEwcHg7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcbi5maXJzdC1jb250ZW50IC50b3RhbC1vdGhlciA+IGRpdltkYXRhLXYtNTdjZTNkODhdIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmZpcnN0LWNvbnRlbnQgLnRvdGFsLW90aGVyID4gZGl2ID4gZGl2ID4gaW1nW2RhdGEtdi01N2NlM2Q4OF0ge1xcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XFxufVxcbi5maXJzdC1jb250ZW50IC50b3RhbC1vdGhlciA+IGRpdiA+IGRpdltkYXRhLXYtNTdjZTNkODhdOmZpcnN0LWNoaWxkIHtcXG4gIG1hcmdpbi10b3A6IDZweDtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMTQuNTlweDtcXG4gIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAwLjUpO1xcbn1cXG4uZmlyc3QtY29udGVudCAudG90YWwtb3RoZXIgPiBkaXYgPiBkaXZbZGF0YS12LTU3Y2UzZDg4XTpsYXN0LWNoaWxkIHtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBtYXJnaW4tbGVmdDogMjJweDtcXG4gIG1hcmdpbi10b3A6IDNweDtcXG59XFxuLnN1cC1tYWluW2RhdGEtdi01N2NlM2Q4OF0ge1xcbiAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDBweCAwcHg7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZSBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI0MCwgMjQxLCAyNDUsIDAuMDEpIDAlLCAjZjJmN2ZmIDEwMCUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gIG1hcmdpbi10b3A6IDhweDtcXG59XFxuLnN1cC1tYWluID4gZGl2W2RhdGEtdi01N2NlM2Q4OF0ge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMHB4IDEwcHggMjBweCByZ2JhKDM3LCA1NywgMTExLCAwLjA1KTtcXG4gIG1hcmdpbi1ib3R0b206IDZweDtcXG59XFxuLnN1cC1tYWluID4gZGl2IC5zdXAtdGl0bGVbZGF0YS12LTU3Y2UzZDg4XSB7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4IDEwcHggMHB4IDBweDtcXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgYm94LXNoYWRvdzogMHB4IDZweCAyMHB4IHJnYmEoMzcsIDU3LCAxMTEsIDAuMDUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA4cHggNXB4O1xcbn1cXG4uc3VwLW1haW4gPiBkaXYgLnN1cC10aXRsZSA+IHNwYW5bZGF0YS12LTU3Y2UzZDg4XSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6IHJnYmEoMzcsIDU3LCAxMTEsIDAuNSk7XFxufVxcbi5zdXAtbWFpbiA+IGRpdiAuc3VwLXRpdGxlID4gc3BhbltkYXRhLXYtNTdjZTNkODhdOmZpcnN0LWNoaWxkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMTBweDtcXG4gIHBhZGRpbmc6IDJweCA4cHg7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcbi5zdXAtbWFpbiA+IGRpdiAuc3VwLXRpdGxlID4gc3BhbltkYXRhLXYtNTdjZTNkODhdOm50aC1jaGlsZCgyKSB7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBmb250LXNpemU6IDEwcHg7XFxuICBwYWRkaW5nOiAwcHggNHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG59XFxuLnN1cC1tYWluID4gZGl2IC5zdXAtdGl0bGUgPiBzcGFuW2RhdGEtdi01N2NlM2Q4OF06bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuLnN1cC1tYWluID4gZGl2IC5zdXAtdGl0bGUgLmJsdWUtYmdbZGF0YS12LTU3Y2UzZDg4XSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICM2ZGFhZmQgMCUsICM0Mzc4ZWUgMTAwJSk7XFxufVxcbi5zdXAtbWFpbiA+IGRpdiAuc3VwLXRpdGxlIC5ncmVlbi1iZ1tkYXRhLXYtNTdjZTNkODhdIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgIzQwZDZjYyAwJSwgIzA4Y2ZjMSAxMDAlKTtcXG59XFxuLnN1cC1tYWluID4gZGl2IC5zdXAtdGl0bGUgLnllbGxvdy1iZ1tkYXRhLXYtNTdjZTNkODhdIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZhYmU4MiAwJSwgI2ZmOGQxYSAxMDAlKTtcXG59XFxuLnN1cC1tYWluID4gZGl2IC5zdXAtdGl0bGUgLmNhbmNlbC1iZ1tkYXRhLXYtNTdjZTNkODhdIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2EzYjBkNCAwJSwgIzRmNjQ5YyAxMDAlKTtcXG59XFxuLnN1cC1tYWluID4gZGl2IC5zdXAtdGl0bGUgLnJlcGVhdFtkYXRhLXYtNTdjZTNkODhdIHtcXG4gIGJhY2tncm91bmQ6ICNmY2VhZTY7XFxuICBjb2xvcjogI2ZmNTczMztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmNiYmY7XFxufVxcbi5zdXAtbWFpbiA+IGRpdiAuc3VwLXRpdGxlIC5ub3JlcGVhdFtkYXRhLXYtNTdjZTNkODhdIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMTg2LCAxNzMsIDAuMSk7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDE4NiwgMTczLCAwLjIpO1xcbiAgY29sb3I6ICMwMGJhYWQ7XFxufVxcbi5zdXAtbWFpbiA+IGRpdiAuc3VwLWRldGFpbFtkYXRhLXYtNTdjZTNkODhdIHtcXG4gIHBhZGRpbmc6IDEwcHggMTBweCA1cHg7XFxufVxcbi5zdXAtbWFpbiA+IGRpdiAuc3VwLWRldGFpbCA+IGRpdltkYXRhLXYtNTdjZTNkODhdIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMC41KTtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG59XFxuLnN1cC1tYWluID4gZGl2IC5zdXAtZGV0YWlsID4gZGl2ID4gc3BhbltkYXRhLXYtNTdjZTNkODhdIHtcXG4gIGNvbG9yOiAjMjUzOTZmO1xcbn1cXG4uc3VwLW1haW4gPiBkaXYgLnN1cC1kZXRhaWwgPiBkaXZbZGF0YS12LTU3Y2UzZDg4XTpmaXJzdC1jaGlsZCB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XFxuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XFxuICBjb2xvcjogIzQ0N2JmYztcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxufVxcbi5zdXAtbWFpbiA+IGRpdiAuc3VwLWRldGFpbCAuc3VwLWJvdHRvbVtkYXRhLXYtNTdjZTNkODhdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAvKmp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsqL1xcbn1cXG4uc3VwLW1haW4gPiBkaXYgLnN1cC1kZXRhaWwgLnN1cC1ib3R0b20gPiBzcGFuW2RhdGEtdi01N2NlM2Q4OF0ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDUwJTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxuICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMC41KTtcXG59XFxuLnN1cC1tYWluID4gZGl2IC5zdXAtZGV0YWlsIC5zdXAtYm90dG9tID4gc3BhbiA+IHNwYW5bZGF0YS12LTU3Y2UzZDg4XSB7XFxuICBjb2xvcjogIzI1Mzk2ZjtcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxufVxcbi5zdXAtbWFpbiAubm8tZGF0YVtkYXRhLXYtNTdjZTNkODhdIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6ICM5MDkzOTk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuLnBvcC1jb250ZW50W2RhdGEtdi01N2NlM2Q4OF0ge1xcbiAgcGFkZGluZzogMzBweCAxMHB4IDEwcHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbi5wb3AtY29udGVudCAucG9wLXRpdGxlW2RhdGEtdi01N2NlM2Q4OF0ge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xcbiAgY29sb3I6ICMyNTM5NmY7XFxufVxcbi5wb3AtY29udGVudCAucG9wLXRpdGxlID4gaW1nW2RhdGEtdi01N2NlM2Q4OF0ge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4ucG9wLWNvbnRlbnQgPiBwW2RhdGEtdi01N2NlM2Q4OF0ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgY29sb3I6ICMyNTM5NmY7XFxuICBtYXJnaW46IDIwcHggNXB4IDVweDtcXG59XFxuLnBvcC1jb250ZW50W2RhdGEtdi01N2NlM2Q4OF0gIC52YW4tc2VhcmNoIHtcXG4gIHBhZGRpbmc6IDBweDtcXG59XFxuLnBvcC1jb250ZW50W2RhdGEtdi01N2NlM2Q4OF0gIC52YW4tc2VhcmNoX19jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY2Zjk7XFxufVxcbi5wb3AtY29udGVudFtkYXRhLXYtNTdjZTNkODhdICAudmFuLWZpZWxkX19jb250cm9sIHtcXG4gIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAwLjUpO1xcbn1cXG4ucG9wLWNvbnRlbnRbZGF0YS12LTU3Y2UzZDg4XSAgLnZhbi1yYWRpbyB7XFxuICB3aWR0aDogY2FsYyg1MCUgLSAxMnB4KTtcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXG59XFxuLnBvcC1jb250ZW50W2RhdGEtdi01N2NlM2Q4OF0gIC52YW4tcmFkaW9fX2ljb24ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBib3JkZXItcmFkaXVzOiAzMHB4O1xcbiAgYmFja2dyb3VuZDogI2Y1ZjZmOTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiByZ2JhKDM3LCA1NywgMTExLCAwLjUpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxufVxcbi5wb3AtY29udGVudFtkYXRhLXYtNTdjZTNkODhdICAudmFuLXJhZGlvX19pY29uLS1jaGVja2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxOTg5ZmE7XFxuICBib3JkZXItY29sb3I6ICMxOTg5ZmE7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLnBvcC1jb250ZW50W2RhdGEtdi01N2NlM2Q4OF0gIC52YW4tY2hlY2tib3gge1xcbiAgd2lkdGg6IGNhbGMoNTAlIC0gMTJweCk7XFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxufVxcbi5wb3AtY29udGVudFtkYXRhLXYtNTdjZTNkODhdICAudmFuLWNoZWNrYm94X19pY29uIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG4gIGJhY2tncm91bmQ6ICNmNWY2Zjk7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogcmdiYSgzNywgNTcsIDExMSwgMC41KTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgaGVpZ2h0OiAzMHB4O1xcbn1cXG4ucG9wLWNvbnRlbnRbZGF0YS12LTU3Y2UzZDg4XSAgLnZhbi1jaGVja2JveF9faWNvbi0tY2hlY2tlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk4OWZhO1xcbiAgYm9yZGVyLWNvbG9yOiAjMTk4OWZhO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5wb3AtY29udGVudCAucG9wLWJvdHRvbVtkYXRhLXYtNTdjZTNkODhdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW46IDMwcHggMHB4IDEwcHg7XFxufVxcbi5wb3AtY29udGVudCAucG9wLWJvdHRvbSA+IHNwYW5bZGF0YS12LTU3Y2UzZDg4XSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogY2FsYyg1MCUgLSAxMnB4KTtcXG4gIG1hcmdpbi1yaWdodDogMTJweDtcXG4gIGxpbmUtaGVpZ2h0OiAzNnB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmOTtcXG4gIGNvbG9yOiAjNTQ3NWY4O1xcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcXG59XFxuLnBvcC1jb250ZW50IC5wb3AtYm90dG9tID4gc3BhbltkYXRhLXYtNTdjZTNkODhdOmxhc3QtY2hpbGQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0NzVmODtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU3Y2UzZDg4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNmMyZjljZDBcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01N2NlM2Q4OCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTU3Y2UzZDg4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xyXG5cclxuLyoqXHJcbiAqIOahiOS7tuivpuaDhVxyXG4gKiAqL1xyXG5leHBvcnQgY29uc3QgcXVlcnlTZWxlY3RCeUlkID0oaWQpPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcGkvY2FzZS9zZWxlY3RCeUlkLycraWQsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gIH0pXHJcbn1cclxuLy8g6ZuG5L2T6K6o6K666K+m5oOFXHJcbmV4cG9ydCBjb25zdCBkaXNjdXNzU2VsZWN0QnlDYXNlSWQgPSAoaWQpID0+e1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcGkvZGlzY3Vzcy9zZWxlY3RCeUNhc2VJZC8nK2lkLFxyXG4gICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgfSlcclxufTtcclxuLy8g6K+m5oOFXHJcbmV4cG9ydCBjb25zdCBzdXBlcnZpc2VTZWxlY3RCeUNhc2VJZCA9IChpZCkgPT57XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwaS9zdXBlcnZpc2Uvc2VsZWN0QnlDYXNlSWQvJytpZCxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgfSlcclxufTtcclxuLy8g5ZGK55+l6K+m5oOFXHJcbmV4cG9ydCBjb25zdCBsZWdhbFNlbGVjdEJ5Q2FzZUlkID0gKGlkKSA9PntcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBpL2xlZ2FsL3NlbGVjdEJ5Q2FzZUlkLycraWQsXHJcbiAgICBtZXRob2Q6ICdwb3N0JyxcclxuICB9KVxyXG59O1xyXG4vLyDlkYrnn6Xor6bmg4VcclxuZXhwb3J0IGNvbnN0IHNlbGVjdEJ5Q2FzZUlkID0gKGlkKSA9PntcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBpL2luZm9ybS9zZWxlY3RCeUNhc2VJZC8nK2lkLFxyXG4gICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgfSlcclxufTtcclxuLy8g6K+m5oOFXHJcbmV4cG9ydCBjb25zdCBwdW5pc2hTZWxlY3RCeUNhc2VJZCA9IChpZCkgPT57XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwaS9wdW5pc2gvc2VsZWN0QnlDYXNlSWQvJytpZCxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgfSlcclxufTtcclxuLy8g6K+m5oOFXHJcbmV4cG9ydCBjb25zdCBnZXRIZWFyaW5nQnlDYXNlSWQgPSAoaWQpID0+e1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcGkvaGVhcmluZy9nZXRIZWFyaW5nQnlDYXNlSWQvJytpZCxcclxuICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gIH0pXHJcbn07XHJcbi8vIOivpuaDhVxyXG5leHBvcnQgY29uc3Qgc3RhZ2VTZWxlY3RCeUNhc2VJZCA9IChpZCkgPT57XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwaS9zdGFnZS9zZWxlY3RCeUNhc2VJZC8nK2lkLFxyXG4gICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgfSlcclxufTtcclxuXHJcbi8v5qC55o2udG9rZW7ojrflj5bkvIHkuJrkv6Hmga9cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJJbmZvID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL3JhL3VzZXIvZ2V0SW5mb1wiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4vL+iOt+WPlueUqOaIt1xyXG5leHBvcnQgY29uc3QgZ2V0VXNlckxpc3QgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvdXNlclwiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4vL+afpeeci+WuoeaJueWtkOmhueWIl+ihqFxyXG5leHBvcnQgY29uc3QgcXVlcnlUeXBlQ2FzZUxpc3QgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvYXBwcm92YWwvcXVlcnlBcHBMaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v5paw5bu65a6h5om56KGoXHJcbmV4cG9ydCBjb25zdCBhZGRSZXBvcnQgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvYXBwcm92YWwvaW5zXCIsXHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4vL+iOt+WPluWNleS4quWuoeaJueihqOS/oeaBr1xyXG5leHBvcnQgY29uc3QgZ2V0UmVwb3J0RGV0YWlsID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL3JhL2FwcHJvdmFsXCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v562+5ZCN5a6h5om5XHJcbmV4cG9ydCBjb25zdCBzaWduUmVwb3J0ID0gKGRhdGEsdHlwZSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvYXBwcm92YWwvc2lnbj90eXBlPVwiK3R5cGUsXHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/nu5/orqFcclxuZXhwb3J0IGNvbnN0IGNvdW50SW5mbyA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS9hcHByb3ZhbC9nZXRTdGF0XCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v6K+m5oOFXHJcbmV4cG9ydCBjb25zdCBnZXRBbGxSZXBvcnQgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvYXBwcm92YWwvZGV0YWlsXCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v5qCh6aqM5a+G56CBXHJcbmV4cG9ydCBjb25zdCBjaGVja1B3ZCA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS91c2VyL2NoZWNrUHdkXCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v5pSv6ZifL+WIhuWxgOS4i+aLieahhlxyXG5leHBvcnQgY29uc3QgcXVlcnlEaXZpc2lvbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS91c2VyL2RpdlwiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiXHJcbiAgfSk7XHJcbn07XHJcbi8v546v5L+d552j5a+fLeiOt+WPluaJueasoeWIl+ihqFxyXG5leHBvcnQgY29uc3QgZ2V0U3VwZXJCYXRjaCA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9iYXRjaExpc3RcIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/njq/kv53nnaPlr58t6I635Y+W5om55qyh5YiX6KGoXHJcbmV4cG9ydCBjb25zdCBnZXRTdXBlckxpc3QgPSAoaW5mbyxkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9saXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgcGFyYW1zOiBpbmZvLFxyXG4gICAgZGF0YSA6IGRhdGFcclxuICB9KTtcclxufTtcclxuLy/njq/kv53nnaPlr58t6I635Y+W5om55qyh5YiX6KGoXHJcbmV4cG9ydCBjb25zdCBnZXRTdXBlckxpc3REZXRhaWwgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvXCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGFcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBib2FyZCgpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2JvYXJkXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3VudHlMaXN0KHBhcmFtcykge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvYm9hcmQvZ2V0Q291bnR5XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IHBhcmFtcyxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluZm9MaXN0KHBhcmFtcykge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5mby9saXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IHBhcmFtcyxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJhc2VJbmZvKHBhcmFtcykge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5mby9nZXRCeUlkXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IHBhcmFtcyxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3RyaWJ1dGUocGFyYW1zKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbmZvL2Rpc3RyaWJ1dGUvXCIgKyBwYXJhbXMsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGUocGFyYW1zKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbmZvL2hhbmRsZS9cIiArIHBhcmFtcyxcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmFsKHBhcmFtcykge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5mby9maW5hbC9cIiArIHBhcmFtcyxcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhbnkocGFyYW1zKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbmZvL3F5QnlJbmZvSWRcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogcGFyYW1zLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJvYmxlbSgpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luc3BlY3Rpb25Jc3N1ZXNcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVHcm91cCgpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luc3BlY3Rpb25Jc3N1ZXMvdGltZUdyb3VwXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1bml0KCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5zcGVjdGlvbklzc3Vlcy9nZXRVbml0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9ibGVtTGlzdChwYXJhbXMpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luc3BlY3Rpb25Jc3N1ZXMvcGFnZUxpc3RcIixcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBwYXJhbXMsXHJcbiAgfSk7XHJcbn1cclxuXHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQURjQUFBQVFDQVlBQUFDeWN1ZklBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFEblNVUkJWRWlKM1pUUmFjUkFERVRmYU5la2dPdmhlc2hmd2xXVmo0QVRETmVVQTVjMjBzTVZFSWl0Zkt3VnU0QTdURFN3N0Vxc0JnMFNJelk0dmZvanpzR1l6Q2Nxb2tvVW9McW9RR1dhSzFZS0xERnp1OTBLMnNTeTltZjJTdFJLQmJ5OTU4aXhjaW4rYThscDVXUGhpL3JnODAzY2ppRi9HNGV1MTUrdzNvLzhjQVQ0OStJQTVNOUdYanl0NGlZT096WnlGNnppUEplNGNlaDZBemk5ZUNwaGdUYTVoMXhUQXk2d1hjdE1rSDlDaUV0b0poRGlrcGtKbWRkeUhMb0xnR1YxU2dETDZwU1FjUzBYcHdRd3ZybnUyY3M5WVI5blhhbDg3ZDNJVGVEK1BnNWRIK0V2UE5GTk5STlh5NDRBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQTRBQUFBT0NBWUFBQUFmU0MzUkFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUVJU1VSQlZDaVJuWkl4VHNOQUVFWC9qQ0lRZGtvalN1Y0FxU0tsaTFMbEFyRmJLNGREdEN3WG9MTG9rS2c0UUZ3aVhOcUpvSmhQWVV5OHRyQ2kvR3IxZDk1K3pld0llaXJLWTBhelJCUnJBS0FoRjZXTG8rbER0MDdhdzc0OEpFTGVBd2o3ai8ycXBzbHVkaGU0UDNEL2NVaEUrZmdQNElraTZTd0tuQUJBOFZsWEkwbUQ1UGcybkU2S3NzcEFIM3A2VnJ5K04xMHM1OFIyWTkzcnNDaVAyWVFtaVlnUHZieWRqT2FzSGt5elJOdnB0V3FUeGp4UnJQV2NwcjYraDU3U2tIZU41WnlEb3RYQzkyaklWVlJkMTl4dURLc0ZjWDExZ25yRGdTZ3YvdzRGQUlyc3pvUkFhMm9WQUdaUjRHaVNBcWpIa2lpU2VpdlhWVkZXR1UxNlM2NHVqbTY4SmY4Qjh3QnJ5ZmVRUXBZQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQVFDQVlBQUFBZjgvOWhBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFES1NVUkJWRGlOblpJN0VvSXdFSWEvN0tEbjhDaXhBR29tRi9BbTRFM29uUXcxVU1oUk9JZk9CQXZrcFNKRC9tNWYzKzVtQTJ1NkZ5ZnFRZ05RMm96U1pyL1MxSmVuc2hjNlRxTWRtNHpLZHFQZGNTVTJJeXhZZEh3NnZTaiszVEtsdEF3UUdRTVBkOWtzWGtKbWdHSFhQVktrRThDNS9RQ0ErcWJGcS9zZ0p6cll6Z0lpODMydHR4UjFvYjFYRUdtRWdOYXJlR0J3VHZ3QllkTDBWMUFlVTRnMC9RUUFrY2wzUThKa0JnQTQ5TVJOS1ZxT2trL21wLzVkUmRFU21YenBXdFA4Z3dXMGE0LzlBcVJZUVRHVUNyTHNBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFRQ0FZQUFBQWY4LzloQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBRFBTVVJCVkRpTm5aTE5EWU13RElXZm83UkRVQTZNa2xGWUFURUE5RnhGck1Bb0dTVUh5aEN0RlBjUUNHbHB4TSs3eGJFL3Y4UUdFdUt1S0xqTEZRQ3d6bHJXV2ZzdmoxYUYrbFlDWElTRWVteFpaeHlsM0trZUEwekdIZUhlS2k1T3FHR2RZWWFJRUhhdmNrZHhERmtBODFzUHFsa2NPSGNHQUg3a1NwenM3aVdja3R0WkFOWGphbHF6TmdHcCtYc0h3Z2hBMmowdWtneXE3R2tBVllPWjlvQ09RNFF3d0RSR3FwLzlVUWhWd3dMd3hJdlpXV29ocm4wNC9WNXpsNnYwWXBIMWJxTklxcy8zZ2ttYit1d1BDWU5KY21wT1ZYd0FBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFRQ0FZQUFBQWY4LzloQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBREdTVVJCVkRpTm5aSXhFb01nRUVYL01rek80UmtTaXBUZUlwVGVSSE1UUzNJTHl4UWtaK0FjbVl5YlFnU01HaU5iTWJQNzMzNzRBQ3ZGK2x5d1Z1VndWZzFyMVN6TjBWeDRyQUJSaEFGakc3NmNPQ3JvU3NZR21FdzNBcTh5RlM5YjQ1cTF3Z2dSc2ZPdU5zVlRTQVNNZDkxVnpIWHFZRC9BTHhaWjIyT1ZjbnNHb050amxsYm9lUWU1TGpvQlNKY3BCZ0FJTXZkc0FCbmIrUlQ2SEVnSCtCakpQTnU5RURJMkFvWTZkUDlKZXdmSU5vQysyNzlUNmQzZ05uR3l0bWY2d2FSYmUrd1BJTUZJMkdGVHlVc0FBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBc0FBQUFNQ0FZQUFBQzBxVWVlQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBQ3JTVVJCVkNpUmpaQzdGWU13RUFUbmVBU29La01QS2dWSUVTbTRGUFVBcmtwRVBnZDhCQmo4Zk9GcWJuZDFZcXRKK1hOU1lBUkF0YjJsUklhTnM5V2t0Zzd1aXJOMWNHdDZNbTlxaTBwank1Q2ZRVlFhWkU2VjdhR2FCZ0RmWndXQUxVT095SUJvNnp2am9uUHNuRy91Si9BQSs2Y1pGeVZXZVRQYU9yajFQK250QmJaRWFaYit1eHEvWnp4MmprNlBMMDMwNVR2amtwUFl3bnozSy9zRDdEdmpmSjhWNjlLK0FzQUhIZ3BKbllRM0dOWUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFRQ0FZQUFBQWY4LzloQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBQmlTVVJCVkRpTnBjdzVFWUF3RkFEUlRXeGdBalAwbU1BWk9oREVNSVFxREVlT2Yyei9GaHhOeXo0R0QwNmNxMm1RTVRDb0IwOE1vQnA4c1dwUXd1SkJEWXNHTGR3ZDlIQnpJTUhWZ1JRWEJ4cjhHMmp4YTJEQjk4Q0tFMnpCZzJNODVndFRmRTRqR1lTSFRBQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBb0FBQUFJQ0FZQUFBREErbTYyQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBQTVTVVJCVkJpVlkyREFBLzcvLysvdy8vLy8vZmpVd0JUQlFBUHhpdENOeDJuUy8vLy85ME1GOXhPMERra3hmamVoS2NhdENObDl1T1FBdWZKMXpxZ0pRb29BQUFBQVNVVk9SSzVDWUlJPVwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTdjZTNkODgmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTdjZTNkODgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI1N2NlM2Q4OFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc1N2NlM2Q4OCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc1N2NlM2Q4OCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc1N2NlM2Q4OCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTU3Y2UzZDg4JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzU3Y2UzZDg4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3Mvc3VwZXJ2aXNpb24vaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NTdjZTNkODgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NTdjZTNkODgmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9