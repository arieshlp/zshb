(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[92],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/buildProjectInfo.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/buildProjectInfo.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_setdate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/utils/setdate */ "./src/utils/setdate.js");
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vant */ "./node_modules/vant/es/index.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _api_pollution_source__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/api/pollution_source */ "./src/api/pollution_source.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "buildProjectInfo",
  components: {},
  data: function data() {
    return {
      id: "",
      showMore: true,
      showMore2: true,
      showMore3: true,
      typename: "废水",
      qyinfo: {},
      xminfo: {},
      wrwpfl: [],
      hpwrwpfl: [],
      detailInfo: {},
      token: '',
      wrwLength: 0
    };
  },
  mounted: function mounted() {
    this.id = this.$route.query.id;
    this.loadData();
  },
  methods: {
    toMap: function toMap(row, type) {
      var info = null;

      if (type == 'js') {
        info = {
          id: this.id,
          siteName: row.jsdw,
          JD: row.jd,
          WD: row.wd,
          creditCode: row.jsdwtyshxydm,
          legalMan: row.jsdwfrdb,
          legalManTel: row.jsdwlxdh,
          category: row.hymc,
          address: row.jsdd,
          types: 'build'
        };
      } else {
        info = {
          id: this.id,
          siteName: row.hpdwmc,
          JD: row.jd,
          WD: row.wd,
          creditCode: row.hpdwtyshxydm,
          legalMan: row.hpdwfddbr,
          legalManTel: row.hpdwlxdh,
          category: row.hymc,
          address: row.hpdwdz,
          // types:'hpdw'
          types: 'build'
        };
      }

      if (row.jd) {
        this.$router.push({
          name: "locationMap",
          query: info
        });
      } else {
        Object(vant__WEBPACK_IMPORTED_MODULE_4__["Toast"])('未获取到定位');
      }
    },
    getMore: function getMore() {
      this.showMore = !this.showMore;
    },
    getMore2: function getMore2() {
      this.showMore2 = !this.showMore2;
    },
    checkFile: function checkFile(row) {
      // openBrowser(row.showPath);
      this.$router.push({
        // path: "/pdf-view",
        name: "pdfH5",
        query: {
          url: row.showPath,
          name: row.wjmc
        }
      });
    },
    changeType: function changeType(type) {
      var _this = this;

      this.typename = type;
      this.hpwrwpfl = [];
      this.wrwpfl.forEach(function (item) {
        if (item.wrwlx == type) {
          _this.hpwrwpfl.push(item);
        }
      });
      this.wrwLength = this.hpwrwpfl.length;
      console.log(this.wrwLength);
    },
    loadData: function loadData() {
      var _this2 = this;

      var info = {
        id: this.$route.query.id,
        type: this.$route.query.type
      };
      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_6__["constructDetail"])(info).then(function (res) {
        if (res.code == 200) {
          var rdata = res.data;
          _this2.qyinfo = rdata.qyxx;
          _this2.xminfo = rdata.xmxx;
          _this2.wrwpfl = rdata.wrwpfl;

          _this2.wrwpfl.forEach(function (item) {
            if (item.wrwlx == _this2.typename) {
              _this2.hpwrwpfl.push(item);
            }
          });

          _this2.wrwLength = _this2.hpwrwpfl.length;
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/buildProjectInfo.vue?vue&type=template&id=cf8e7ff0&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/buildProjectInfo.vue?vue&type=template&id=cf8e7ff0& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "buildprjinfo", staticStyle: { background: "#fff" } },
    [
      _c("van-nav-bar", {
        attrs: { title: "环评项目", "left-arrow": "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
      }),
      _c(
        "div",
        { staticStyle: { height: "calc(100vh - 9vh)", "overflow-y": "auto" } },
        [
          _c(
            "div",
            {
              staticClass: "company-info",
              staticStyle: { background: "#fff" },
            },
            [
              _c(
                "div",
                {
                  staticClass: "main_content",
                  staticStyle: { "padding-top": "10px" },
                },
                [
                  _c("div", { staticClass: "build_info" }, [
                    _c("div", [
                      _c("span", { staticClass: "build_label build_purple" }, [
                        _vm._v("环评"),
                      ]),
                      _c("span", { staticStyle: { "font-weight": "600" } }, [
                        _vm._v(_vm._s(_vm.xminfo.xmmc)),
                      ]),
                    ]),
                  ]),
                ]
              ),
              _vm.xminfo.jsdd != "" && _vm.xminfo.jsdd != null
                ? _c(
                    "div",
                    {
                      staticClass: "main_footer",
                      on: {
                        click: function ($event) {
                          return _vm.toMap(_vm.xminfo, "js")
                        },
                      },
                    },
                    [
                      _c("img", {
                        attrs: {
                          src: __webpack_require__(/*! ../../../assets/polluter/position.png */ "./src/assets/polluter/position.png"),
                        },
                      }),
                      _c("span", [_vm._v(_vm._s(_vm.xminfo.jsdd))]),
                    ]
                  )
                : _vm._e(),
            ]
          ),
          _c(
            "div",
            {
              staticClass: "company-info",
              staticStyle: { margin: "6px 10px 0px" },
            },
            [
              _c(
                "div",
                {
                  staticClass: "main_content",
                  staticStyle: { "padding-top": "10px" },
                },
                [
                  _c("div", { staticClass: "third_width" }, [
                    _c("span", [_vm._v("受理日期")]),
                    _c("span", [
                      _vm._v(
                        _vm._s(
                          _vm.xminfo.slrq
                            ? _vm
                                .dayjs(new Date(_vm.xminfo.slrq))
                                .format("YYYY-MM-DD")
                            : ""
                        )
                      ),
                    ]),
                  ]),
                  _c("div", { staticClass: "third_width" }, [
                    _c("span", [_vm._v("批复日期")]),
                    _c("span", [
                      _vm._v(
                        _vm._s(
                          _vm.xminfo.pfrq
                            ? _vm
                                .dayjs(new Date(_vm.xminfo.pfrq))
                                .format("YYYY-MM-DD")
                            : ""
                        )
                      ),
                    ]),
                  ]),
                  _c("div", { staticClass: "third_width" }, [
                    _c("span", [_vm._v("计划开工")]),
                    _c("span", [
                      _vm._v(
                        _vm._s(
                          _vm.xminfo.jhkgsj
                            ? _vm
                                .dayjs(new Date(_vm.xminfo.jhkgsj))
                                .format("YYYY-MM-DD")
                            : ""
                        )
                      ),
                    ]),
                  ]),
                  _c("div", { staticClass: "third_width" }, [
                    _c("span", [_vm._v("项目建设周期")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.xmjszq) + "个月")]),
                  ]),
                  _c("div", { staticClass: "third_width" }, [
                    _c("span", [_vm._v("项目总投资")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.xmztz) + "万元")]),
                  ]),
                  _c("div", { staticClass: "third_width" }, [
                    _c("span", [_vm._v("环保总投资")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.hbztz) + "万元")]),
                  ]),
                  _c("div", { staticClass: "third_width" }, [
                    _c("span", [_vm._v("所占比率")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.szbl) + "%")]),
                  ]),
                  _c("div", { staticClass: "third_width" }, [
                    _c("span", [_vm._v("计划投产")]),
                    _c("span", [
                      _vm._v(
                        _vm._s(
                          _vm.xminfo.yjtcrq
                            ? _vm
                                .dayjs(new Date(_vm.xminfo.yjtcrq))
                                .format("YYYY-MM-DD")
                            : ""
                        )
                      ),
                    ]),
                  ]),
                ]
              ),
            ]
          ),
          _c(
            "div",
            {
              staticClass: "company-info",
              class: _vm.showMore ? "moreheight" : "",
              staticStyle: { margin: "6px 10px 0px" },
            },
            [
              _vm._m(0),
              _vm._m(1),
              _c(
                "div",
                {
                  staticClass: "main_content",
                  staticStyle: { "padding-top": "10px" },
                },
                [
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("建设单位")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.jsdw))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("统一信用代码")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.jsdwtyshxydm))]),
                  ]),
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("法定代表人")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.jsdwfrdb))]),
                  ]),
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("行业类别")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.hymc))]),
                  ]),
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("联系人")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.jsdwlxr))]),
                  ]),
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("联系电话")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.jsdwlxdh))]),
                  ]),
                ]
              ),
              _vm._m(2),
              _c(
                "div",
                {
                  staticClass: "main_content",
                  staticStyle: { "padding-top": "10px" },
                },
                [
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("项目名称")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.xmmc))]),
                  ]),
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("项目申请类别")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.xmsqlbmc))]),
                  ]),
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("项目经办人")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.xmjbr))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("建设地点")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.jsdd))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("建设内容及规模")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.jsnrjgm))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("项目名称")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.xmmc))]),
                  ]),
                ]
              ),
              _vm._m(3),
              _c(
                "div",
                {
                  staticClass: "main_content",
                  staticStyle: { "padding-top": "10px" },
                },
                [
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("环评单位名称")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.hpdwmc))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("地址")]),
                    _c(
                      "span",
                      {
                        staticStyle: {
                          color: "rgba(68, 123, 252, 1)",
                          "text-decoration-line": "underline",
                        },
                        on: {
                          click: function ($event) {
                            return _vm.toMap(_vm.xminfo, "hp")
                          },
                        },
                      },
                      [_vm._v(_vm._s(_vm.xminfo.hpdwdz))]
                    ),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("统一信用代码")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.hpdwtyshxydm))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("环评审批机关")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.hpspjg))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("规划环评审查机关")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.ghhpscjg))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("规划环评审查意见文号")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.ghhpscyjwh))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("环评文件类别")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.hpwjlbmc))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("批复文号")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.pfwh))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("规划环评开展情况")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.ghhpkzqkmc))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("主持人")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.bzzcrxm))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("环境影响评行业类别")]),
                    _c("span", [_vm._v(_vm._s(_vm.xminfo.hjyxpjhylb))]),
                  ]),
                ]
              ),
              _vm._m(4),
              _c(
                "div",
                { staticStyle: { "padding-top": "10px" } },
                _vm._l(_vm.xminfo.fjxx, function (item) {
                  return _c(
                    "div",
                    {
                      staticClass: "file_content",
                      on: {
                        click: function ($event) {
                          return _vm.checkFile(item)
                        },
                      },
                    },
                    [_c("span", [_vm._v(_vm._s(item.wjmc))])]
                  )
                }),
                0
              ),
            ]
          ),
          _c(
            "div",
            {
              staticClass: "company-info",
              staticStyle: { margin: "0px 10px 6px", "text-align": "center" },
              on: {
                click: function ($event) {
                  return _vm.getMore()
                },
              },
            },
            [
              _c("span", { staticClass: "more" }, [
                _vm._v(_vm._s(_vm.showMore ? "查看更多" : "收起")),
              ]),
            ]
          ),
          _c(
            "div",
            {
              staticClass: "company-info",
              class: _vm.showMore2 && _vm.wrwLength > 2 ? "moreheight" : "",
              staticStyle: { margin: "6px 10px 0px" },
            },
            [
              _vm._m(5),
              _vm.hpwrwpfl.length > 0
                ? _c("div", { staticClass: "rad_title" }, [
                    _c(
                      "span",
                      {
                        class: _vm.typename == "废水" ? "active" : "",
                        on: {
                          click: function ($event) {
                            return _vm.changeType("废水")
                          },
                        },
                      },
                      [_vm._v("废水")]
                    ),
                    _c(
                      "span",
                      {
                        class: _vm.typename == "废气" ? "active" : "",
                        on: {
                          click: function ($event) {
                            return _vm.changeType("废气")
                          },
                        },
                      },
                      [_vm._v("废气")]
                    ),
                  ])
                : _vm._e(),
              _vm._l(_vm.hpwrwpfl, function (item) {
                return _c(
                  "div",
                  {
                    staticClass: "main_content mshadow",
                    staticStyle: { "padding-top": "10px" },
                  },
                  [
                    _c("div", { staticClass: "whole_width" }, [
                      _c("span", [_vm._v("污染物名称")]),
                      _c("span", [_vm._v(_vm._s(item.wrwlx))]),
                    ]),
                    _c("div", { staticClass: "whole_width" }, [
                      _c("span", [_vm._v("排放方式")]),
                      _c("span", [_vm._v(_vm._s(item.pffs))]),
                    ]),
                    _c("div", { staticClass: "half_width" }, [
                      _c("span", [_vm._v("现有工程实际排放量")]),
                      _c("span", [_vm._v(_vm._s(item.sjpfl) + "吨/年")]),
                    ]),
                    _c("div", { staticClass: "half_width" }, [
                      _c("span", [_vm._v("现有工程许可排放量")]),
                      _c("span", [_vm._v(_vm._s(item.xkpfl) + "吨/年")]),
                    ]),
                    _c("div", { staticClass: "half_width" }, [
                      _c("span", [_vm._v("本工程预测排放量")]),
                      _c("span", [_vm._v(_vm._s(item.ycpfl) + "吨/年")]),
                    ]),
                    _c("div", { staticClass: "half_width" }, [
                      _c("span", [_vm._v("总体工程“以新带老”削减量")]),
                      _c("span", [_vm._v(_vm._s(item.yxdlxjl) + "吨/年")]),
                    ]),
                    _c("div", { staticClass: "half_width" }, [
                      _c("span", [_vm._v("总体工程预测排放总量")]),
                      _c("span", [_vm._v(_vm._s(item.ycpfzl) + "吨/年")]),
                    ]),
                    _c("div", { staticClass: "half_width" }, [
                      _c("span", [_vm._v("总体工程排放增减量")]),
                      _c("span", [_vm._v(_vm._s(item.pfzjl) + "吨/年")]),
                    ]),
                    _c("div", { staticClass: "whole_width" }, [
                      _c("span", [_vm._v("总体工程区域平衡替代本工程削减量")]),
                      _c("span", [_vm._v(_vm._s(item.qyphtdxjl) + "吨/年")]),
                    ]),
                  ]
                )
              }),
            ],
            2
          ),
          _vm.wrwLength > 2
            ? _c(
                "div",
                {
                  staticClass: "company-info",
                  staticStyle: {
                    margin: "0px 10px 6px",
                    "text-align": "center",
                  },
                  on: {
                    click: function ($event) {
                      return _vm.getMore2()
                    },
                  },
                },
                [
                  _c("span", { staticClass: "more" }, [
                    _vm._v(_vm._s(_vm.showMore2 ? "查看更多" : "收起")),
                  ]),
                ]
              )
            : _vm._e(),
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
    return _c("div", { staticClass: "company_title" }, [
      _c("span", [_vm._v("环评审批项目信息")]),
      _c(
        "span",
        {
          staticClass: "title_tips green_tips",
          staticStyle: { "margin-left": "auto" },
        },
        [_vm._v("新建(迁建)")]
      ),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "rad_title" }, [
      _c("span", { staticClass: "active" }, [_vm._v("建设单位信息")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "rad_title" }, [
      _c("span", { staticClass: "active" }, [_vm._v("项目信息")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "rad_title" }, [
      _c("span", { staticClass: "active" }, [_vm._v("环评单位信息")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "rad_title" }, [
      _c("span", { staticClass: "active" }, [_vm._v("环评审批项目附件信息")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "company_title" }, [
      _c("span", [_vm._v("环评审批污染物排放量")]),
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/buildProjectInfo.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/buildProjectInfo.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".buildprjinfo .moreheight {\n  max-height: 404px;\n  overflow: hidden;\n}\n.buildprjinfo .mshadow + .mshadow {\n  margin-top: 8px;\n}\n.buildprjinfo .mshadow {\n  border-radius: 10px;\n  background: linear-gradient(0deg, rgba(68, 123, 252, 0) 70%, rgba(68, 123, 252, 0.06) 100%), white;\n  border: 1px solid white;\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);\n}\n.buildprjinfo .fqstitle {\n  width: 100%;\n  height: auto;\n  display: flex;\n  padding-left: 20px;\n  align-items: center;\n  position: relative;\n  box-sizing: border-box;\n  border-top: 1px solid #ddd;\n}\n.buildprjinfo .fqstitle p {\n  float: left;\n  font-size: 12px;\n  font-family: Arial Normal, Arial;\n  font-weight: 400;\n  font-style: normal;\n  color: #333;\n}\n.buildprjinfo .fqstitle .type-wrap {\n  float: left;\n  width: auto;\n  height: 5vh;\n}\n.buildprjinfo .fqstitle .type-wrap > div {\n  float: left;\n  padding: 3px 10px;\n  margin-left: 6px;\n  margin-top: 0.9vh;\n  font-size: 12px;\n  border: 1px solid #ddd;\n  text-align: center;\n  border-radius: 8px;\n  color: #666;\n}\n.buildprjinfo .fqstitle .type-wrap .active {\n  background: rgba(109, 95, 253, 0.4);\n  color: #fff;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/buildProjectInfo.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/buildProjectInfo.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./buildProjectInfo.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/buildProjectInfo.vue?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2f004da7", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/polluter/position.png":
/*!******************************************!*\
  !*** ./src/assets/polluter/position.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFDSURBVFiF7VbRbsMgDDzvx+p815CaSs13xfky9wWmtAMbw6btofcUgey72AcYeOOPQdEATsoAoIprWSLCLX+L3El+TcDlU3cAbCYk3ORO648K4KSsir03aUSIK4CTrqdyh0CExWvJh5dklLw31hTASddR8pIi+2ZMgPMHAkBOJ6ApwtpsesAyXs1gllcsL1gV4NZGzd2O45u5XBPW+KN7qriEBVhBBri2SIQjLMAwF5fr+Glx8MSMtACq2M+E2bDeianCvAl77v4eHBs1ecwKdJxxF14O9y2YrIIcGy1TAiZEuORApwmPjZZgO7rIgeBAUpxvOF7yNS29OcMjWRHyKiI6CU0JeBUxSj4NTrrOzgyjLeDaenQiNgVkEj49SlVSAwJ8PUTNcb0qYGQK9tAaSswWlCoA355nboQ8EXh//8a/wAPOMZzQDFhjNgAAAABJRU5ErkJggg=="

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

/***/ "./src/views/pollution/detail/buildProjectInfo.vue":
/*!*********************************************************!*\
  !*** ./src/views/pollution/detail/buildProjectInfo.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buildProjectInfo_vue_vue_type_template_id_cf8e7ff0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buildProjectInfo.vue?vue&type=template&id=cf8e7ff0& */ "./src/views/pollution/detail/buildProjectInfo.vue?vue&type=template&id=cf8e7ff0&");
/* harmony import */ var _buildProjectInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buildProjectInfo.vue?vue&type=script&lang=js& */ "./src/views/pollution/detail/buildProjectInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _buildProjectInfo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./buildProjectInfo.vue?vue&type=style&index=0&lang=scss& */ "./src/views/pollution/detail/buildProjectInfo.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _buildProjectInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _buildProjectInfo_vue_vue_type_template_id_cf8e7ff0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _buildProjectInfo_vue_vue_type_template_id_cf8e7ff0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/pollution/detail/buildProjectInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/pollution/detail/buildProjectInfo.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./src/views/pollution/detail/buildProjectInfo.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_buildProjectInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./buildProjectInfo.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/buildProjectInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_buildProjectInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/pollution/detail/buildProjectInfo.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************!*\
  !*** ./src/views/pollution/detail/buildProjectInfo.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_buildProjectInfo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./buildProjectInfo.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/buildProjectInfo.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_buildProjectInfo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_buildProjectInfo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_buildProjectInfo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_buildProjectInfo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/pollution/detail/buildProjectInfo.vue?vue&type=template&id=cf8e7ff0&":
/*!****************************************************************************************!*\
  !*** ./src/views/pollution/detail/buildProjectInfo.vue?vue&type=template&id=cf8e7ff0& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_buildProjectInfo_vue_vue_type_template_id_cf8e7ff0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./buildProjectInfo.vue?vue&type=template&id=cf8e7ff0& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/buildProjectInfo.vue?vue&type=template&id=cf8e7ff0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_buildProjectInfo_vue_vue_type_template_id_cf8e7ff0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_buildProjectInfo_vue_vue_type_template_id_cf8e7ff0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvYnVpbGRQcm9qZWN0SW5mby52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvYnVpbGRQcm9qZWN0SW5mby52dWU/YmUwMiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvYXJyYXktZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLWNvbGxlY3Rpb25zLmZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2J1aWxkUHJvamVjdEluZm8udnVlPzU1ZjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvYnVpbGRQcm9qZWN0SW5mby52dWU/MTY3ZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BvbGx1dGVyL3Bvc2l0aW9uLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc2V0ZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9idWlsZFByb2plY3RJbmZvLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9idWlsZFByb2plY3RJbmZvLnZ1ZT8wNjc3Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2J1aWxkUHJvamVjdEluZm8udnVlP2U0ZGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvYnVpbGRQcm9qZWN0SW5mby52dWU/Y2QxZiJdLCJuYW1lcyI6WyJnZXRUaGlzRGF0ZSIsImUiLCJub3dUaW1lIiwidGltZSIsIkRhdGUiLCJ5IiwiZ2V0RnVsbFllYXIiLCJsbSIsImdldE1vbnRoIiwibSIsImQiLCJnZXREYXRlIiwiaCIsImdldEhvdXJzIiwiTSIsImdldE1pbnV0ZXMiLCJzIiwiZ2V0U2Vjb25kcyIsImZvcm1hdERhdGUiLCJkYXRlIiwibiIsImhvdXJEYXRlRm9ybWF0IiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1vbnRoRGF0ZUZvcm1hdCIsImZvdXJIb3VyVGltZSIsIm5vd0RhdGUiLCJob3VycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0EsMEJBREE7QUFFQSxnQkFGQTtBQUtBLE1BTEEsa0JBS0E7QUFDQTtBQUNBLFlBREE7QUFFQSxvQkFGQTtBQUdBLHFCQUhBO0FBSUEscUJBSkE7QUFLQSxvQkFMQTtBQU1BLGdCQU5BO0FBT0EsZ0JBUEE7QUFRQSxnQkFSQTtBQVNBLGtCQVRBO0FBVUEsb0JBVkE7QUFXQSxlQVhBO0FBWUE7QUFaQTtBQWNBLEdBcEJBO0FBcUJBLFNBckJBLHFCQXFCQTtBQUNBO0FBRUE7QUFDQSxHQXpCQTtBQTBCQTtBQUNBLFNBREEsaUJBQ0EsR0FEQSxFQUNBLElBREEsRUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBLDRCQUZBO0FBR0Esb0JBSEE7QUFJQSxvQkFKQTtBQUtBLHNDQUxBO0FBTUEsZ0NBTkE7QUFPQSxtQ0FQQTtBQVFBLDRCQVJBO0FBU0EsMkJBVEE7QUFVQTtBQVZBO0FBWUEsT0FiQSxNQWFBO0FBQ0E7QUFDQSxxQkFEQTtBQUVBLDhCQUZBO0FBR0Esb0JBSEE7QUFJQSxvQkFKQTtBQUtBLHNDQUxBO0FBTUEsaUNBTkE7QUFPQSxtQ0FQQTtBQVFBLDRCQVJBO0FBU0EsNkJBVEE7QUFVQTtBQUNBO0FBWEE7QUFhQTs7QUFDQTtBQUNBO0FBQ0EsNkJBREE7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QWYsR0FBbUJDLEdBQW5CLEdBQXVCLEdBQXZCLEdBQTJCSyxLQUEzQixHQUFpQyxRQUF4QztBQUNBLEM7Ozs7Ozs7Ozs7OztBQzlGRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStGO0FBQzNCO0FBQ0w7QUFDYzs7O0FBRzdFO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQXFULENBQWdCLGlWQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXpVO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzLzkyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImJ1aWxkcHJqaW5mb1wiIHN0eWxlPVwiYmFja2dyb3VuZDogI2ZmZlwiPlxyXG4gICAgICAgIDx2YW4tbmF2LWJhclxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCLnjq/or4Tpobnnm65cIlxyXG4gICAgICAgICAgICAgICAgbGVmdC1hcnJvd1xyXG4gICAgICAgICAgICAgICAgQGNsaWNrLWxlZnQ9XCIkcm91dGVyLmdvKC0xKVwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgIDwvdmFuLW5hdi1iYXI+XHJcbiAgICAgICAgPGRpdiBzdHlsZT1cImhlaWdodDogY2FsYygxMDB2aCAtIDl2aCk7b3ZlcmZsb3cteTogYXV0bztcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXBhbnktaW5mb1wiIHN0eWxlPVwiYmFja2dyb3VuZDogI2ZmZjtcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluX2NvbnRlbnRcIiBzdHlsZT1cInBhZGRpbmctdG9wOiAxMHB4O1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidWlsZF9pbmZvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJidWlsZF9sYWJlbCBidWlsZF9wdXJwbGVcIj7njq/or4Q8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gc3R5bGU9XCJmb250LXdlaWdodDo2MDBcIj57e3htaW5mby54bW1jfX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHYtaWY9XCJ4bWluZm8uanNkZCE9JycmJnhtaW5mby5qc2RkIT1udWxsXCIgY2xhc3M9XCJtYWluX2Zvb3RlclwiIEBjbGljaz1cInRvTWFwKHhtaW5mbywnanMnKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vLi4vYXNzZXRzL3BvbGx1dGVyL3Bvc2l0aW9uLnBuZ1wiLz5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57e3htaW5mby5qc2RkfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcGFueS1pbmZvXCIgc3R5bGU9XCJtYXJnaW46NnB4IDEwcHggMHB4O1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5fY29udGVudFwiIHN0eWxlPVwicGFkZGluZy10b3A6IDEwcHg7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRoaXJkX3dpZHRoXCI+PHNwYW4+5Y+X55CG5pel5pyfPC9zcGFuPjxzcGFuPnt7eG1pbmZvLnNscnE/ZGF5anMobmV3IERhdGUoeG1pbmZvLnNscnEpKS5mb3JtYXQoJ1lZWVktTU0tREQnKTonJ319PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aGlyZF93aWR0aFwiPjxzcGFuPuaJueWkjeaXpeacnzwvc3Bhbj48c3Bhbj57e3htaW5mby5wZnJxP2RheWpzKG5ldyBEYXRlKHhtaW5mby5wZnJxKSkuZm9ybWF0KCdZWVlZLU1NLUREJyk6Jyd9fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGhpcmRfd2lkdGhcIj48c3Bhbj7orqHliJLlvIDlt6U8L3NwYW4+PHNwYW4+e3t4bWluZm8uamhrZ3NqP2RheWpzKG5ldyBEYXRlKHhtaW5mby5qaGtnc2opKS5mb3JtYXQoJ1lZWVktTU0tREQnKTonJ319PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aGlyZF93aWR0aFwiPjxzcGFuPumhueebruW7uuiuvuWRqOacnzwvc3Bhbj48c3Bhbj57e3htaW5mby54bWpzenF9feS4quaciDwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGhpcmRfd2lkdGhcIj48c3Bhbj7pobnnm67mgLvmipXotYQ8L3NwYW4+PHNwYW4+e3t4bWluZm8ueG16dHp9feS4h+WFgzwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGhpcmRfd2lkdGhcIj48c3Bhbj7njq/kv53mgLvmipXotYQ8L3NwYW4+PHNwYW4+e3t4bWluZm8uaGJ6dHp9feS4h+WFgzwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGhpcmRfd2lkdGhcIj48c3Bhbj7miYDljaDmr5Tnjoc8L3NwYW4+PHNwYW4+e3t4bWluZm8uc3pibH19JTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGhpcmRfd2lkdGhcIj48c3Bhbj7orqHliJLmipXkuqc8L3NwYW4+PHNwYW4+e3t4bWluZm8ueWp0Y3JxP2RheWpzKG5ldyBEYXRlKHhtaW5mby55anRjcnEpKS5mb3JtYXQoJ1lZWVktTU0tREQnKTonJ319PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXBhbnktaW5mb1wiIHN0eWxlPVwibWFyZ2luOjZweCAxMHB4IDBweDtcIiA6Y2xhc3M9XCJzaG93TW9yZT8nbW9yZWhlaWdodCc6JydcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wYW55X3RpdGxlXCI+PHNwYW4+546v6K+E5a6h5om56aG555uu5L+h5oGvPC9zcGFuPjxzcGFuIGNsYXNzPVwidGl0bGVfdGlwcyBncmVlbl90aXBzXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogYXV0b1wiPuaWsOW7uijov4Hlu7opPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJhZF90aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYWN0aXZlXCI+5bu66K6+5Y2V5L2N5L+h5oGvPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gPHNwYW4gY2xhc3M9XCJyaWdodF9zcGFuXCI+55Sz6K+35pel5pyfICDvvJoyMDIzLTA5LTEyPC9zcGFuPiAtLT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5fY29udGVudFwiIHN0eWxlPVwicGFkZGluZy10b3A6IDEwcHg7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndob2xlX3dpZHRoXCI+PHNwYW4+5bu66K6+5Y2V5L2NPC9zcGFuPjxzcGFuPnt7eG1pbmZvLmpzZHd9fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2hvbGVfd2lkdGhcIj48c3Bhbj7nu5/kuIDkv6HnlKjku6PnoIE8L3NwYW4+PHNwYW4+e3t4bWluZm8uanNkd3R5c2h4eWRtfX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhhbGZfd2lkdGhcIj48c3Bhbj7ms5Xlrprku6Pooajkuro8L3NwYW4+PHNwYW4+e3t4bWluZm8uanNkd2ZyZGJ9fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFsZl93aWR0aFwiPjxzcGFuPuihjOS4muexu+WIqzwvc3Bhbj48c3Bhbj57e3htaW5mby5oeW1jfX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhhbGZfd2lkdGhcIj48c3Bhbj7ogZTns7vkuro8L3NwYW4+PHNwYW4+e3t4bWluZm8uanNkd2x4cn19PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoXCI+PHNwYW4+6IGU57O755S16K+dPC9zcGFuPjxzcGFuPnt7eG1pbmZvLmpzZHdseGRofX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyYWRfdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFjdGl2ZVwiPumhueebruS/oeaBrzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5fY29udGVudFwiIHN0eWxlPVwicGFkZGluZy10b3A6IDEwcHg7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndob2xlX3dpZHRoXCI+PHNwYW4+6aG555uu5ZCN56ewPC9zcGFuPjxzcGFuPnt7eG1pbmZvLnhtbWN9fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFsZl93aWR0aFwiPjxzcGFuPumhueebrueUs+ivt+exu+WIqzwvc3Bhbj48c3Bhbj57e3htaW5mby54bXNxbGJtY319PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoXCI+PHNwYW4+6aG555uu57uP5Yqe5Lq6PC9zcGFuPjxzcGFuPnt7eG1pbmZvLnhtamJyfX08L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIndob2xlX3dpZHRoXCI+PHNwYW4+5bu66K6+5Zyw54K5PC9zcGFuPjxzcGFuPnt7eG1pbmZvLmpzZGR9fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2hvbGVfd2lkdGhcIj48c3Bhbj7lu7rorr7lhoXlrrnlj4rop4TmqKE8L3NwYW4+PHNwYW4+e3t4bWluZm8uanNucmpnbX19PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ3aG9sZV93aWR0aFwiPjxzcGFuPumhueebruWQjeensDwvc3Bhbj48c3Bhbj57e3htaW5mby54bW1jfX08L3NwYW4+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmFkX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhY3RpdmVcIj7njq/or4TljZXkvY3kv6Hmga88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluX2NvbnRlbnRcIiBzdHlsZT1cInBhZGRpbmctdG9wOiAxMHB4O1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aG9sZV93aWR0aFwiPjxzcGFuPueOr+ivhOWNleS9jeWQjeensDwvc3Bhbj48c3Bhbj57e3htaW5mby5ocGR3bWN9fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2hvbGVfd2lkdGhcIj48c3Bhbj7lnLDlnYA8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gIEBjbGljaz1cInRvTWFwKHhtaW5mbywnaHAnKVwiIHN0eWxlPVwiY29sb3I6IHJnYmEoNjgsIDEyMywgMjUyLCAxKTt0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO1wiPnt7eG1pbmZvLmhwZHdken19PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aG9sZV93aWR0aFwiPjxzcGFuPue7n+S4gOS/oeeUqOS7o+eggTwvc3Bhbj48c3Bhbj57e3htaW5mby5ocGR3dHlzaHh5ZG19fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2hvbGVfd2lkdGhcIj48c3Bhbj7njq/or4TlrqHmibnmnLrlhbM8L3NwYW4+PHNwYW4+e3t4bWluZm8uaHBzcGpnfX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndob2xlX3dpZHRoXCI+PHNwYW4+6KeE5YiS546v6K+E5a6h5p+l5py65YWzPC9zcGFuPjxzcGFuPnt7eG1pbmZvLmdoaHBzY2pnfX08L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIndob2xlX3dpZHRoXCI+PHNwYW4+6KeE5YiS546v6K+E5a6h5p+l5oSP6KeB5paH5Y+3PC9zcGFuPjxzcGFuPnt7eG1pbmZvLmdoaHBzY3lqd2h9fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2hvbGVfd2lkdGhcIj48c3Bhbj7njq/or4Tmlofku7bnsbvliKs8L3NwYW4+PHNwYW4+e3t4bWluZm8uaHB3amxibWN9fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2hvbGVfd2lkdGhcIj48c3Bhbj7mibnlpI3mloflj7c8L3NwYW4+PHNwYW4+e3t4bWluZm8ucGZ3aH19PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aG9sZV93aWR0aFwiPjxzcGFuPuinhOWIkueOr+ivhOW8gOWxleaDheWGtTwvc3Bhbj48c3Bhbj57e3htaW5mby5naGhwa3pxa21jfX08L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndob2xlX3dpZHRoXCI+PHNwYW4+5Li75oyB5Lq6PC9zcGFuPjxzcGFuPnt7eG1pbmZvLmJ6emNyeG19fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2hvbGVfd2lkdGhcIj48c3Bhbj7njq/looPlvbHlk43or4TooYzkuJrnsbvliKs8L3NwYW4+PHNwYW4+e3t4bWluZm8uaGp5eHBqaHlsYn19PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwicmFkX3RpdGxlXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQgICAgPHNwYW4gY2xhc3M9XCJhY3RpdmVcIj7njq/or4TlrqHmibnpobnnm67pmYTku7bkv6Hmga88L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJcIiBzdHlsZT1cInBhZGRpbmctdG9wOiAxMHB4O1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZmlsZV9jb250ZW50XCIgdi1mb3I9XCJpdGVtIGluIHhtaW5mby5manh4XCIgQGNsaWNrPVwiY2hlY2tGaWxlKGl0ZW0pXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICA8c3Bhbj57e2l0ZW0ud2ptY319PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PCEtLSA8ZGl2IGNsYXNzPVwiZmlsZV9jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICA8c3Bhbj7pobnnm67lpIfmoYjor4HmiJbmipXotYTkuLvnrqHpg6jpl6jlkIzmhI/lvIDlsZXliY3mnJ/lt6XkvZznmoTmlofku7bvvIzmiJbnm7jlhbPmlK/mkpHmlofku7YgKOacieaKlei1hOS4u+euoemDqOmXqOeahCkgLnBkZjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+IC0tPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29tcGFueS1pbmZvXCIgc3R5bGU9XCJtYXJnaW46MHB4IDEwcHggNnB4O3RleHQtYWxpZ246IGNlbnRlcjtcIiBAY2xpY2s9XCJnZXRNb3JlKClcIj5cclxuXHRcdFx0XHRcdFx0ICAgIDxzcGFuIGNsYXNzPVwibW9yZVwiPnt7c2hvd01vcmU/J+afpeeci+abtOWkmic6J+aUtui1tyd9fTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29tcGFueS1pbmZvXCIgc3R5bGU9XCJtYXJnaW46NnB4IDEwcHggMHB4O1wiIDpjbGFzcz1cInNob3dNb3JlMiYmd3J3TGVuZ3RoPjI/J21vcmVoZWlnaHQnOicnXCI+XHJcblx0XHRcdFx0XHRcdCAgICA8ZGl2IGNsYXNzPVwiY29tcGFueV90aXRsZVwiPjxzcGFuPueOr+ivhOWuoeaJueaxoeafk+eJqeaOkuaUvumHjzwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJyYWRfdGl0bGVcIiB2LWlmPVwiaHB3cndwZmwubGVuZ3RoPjBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdCAgICA8c3BhbiA6Y2xhc3M9XCJ0eXBlbmFtZT09J+W6n+awtCc/J2FjdGl2ZSc6JydcIiBAY2xpY2s9XCJjaGFuZ2VUeXBlKCflup/msLQnKVwiPuW6n+awtDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdCAgICA8c3BhbiA6Y2xhc3M9XCJ0eXBlbmFtZT09J+W6n+awlCc/J2FjdGl2ZSc6JydcIiBAY2xpY2s9XCJjaGFuZ2VUeXBlKCflup/msJQnKVwiPuW6n+awlDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PCEtLSA8ZGl2IGNsYXNzPVwiZnFzdGl0bGVcIiB2LWlmPVwiaHB3cndwZmwubGVuZ3RoPjBcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHA+5rGh5p+T54mp57G75Z6LPC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidHlwZS13cmFwXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiA6Y2xhc3M9XCJ0eXBlbmFtZT09J+W6n+awtCc/J2FjdGl2ZSc6JydcIiBAY2xpY2s9XCJjaGFuZ2VUeXBlKCflup/msLQnKVwiPuW6n+awtDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgOmNsYXNzPVwidHlwZW5hbWU9PSflup/msJQnPydhY3RpdmUnOicnXCIgQGNsaWNrPVwiY2hhbmdlVHlwZSgn5bqf5rCUJylcIj7lup/msJQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4gLS0+XHJcblx0XHRcdFx0XHRcdCAgICA8ZGl2IGNsYXNzPVwibWFpbl9jb250ZW50IG1zaGFkb3dcIiBzdHlsZT1cInBhZGRpbmctdG9wOiAxMHB4O1wiIHYtZm9yPVwiaXRlbSBpbiBocHdyd3BmbFwiPlxyXG5cdFx0XHRcdFx0XHQgICAgICAgIDxkaXYgY2xhc3M9XCJ3aG9sZV93aWR0aFwiPjxzcGFuPuaxoeafk+eJqeWQjeensDwvc3Bhbj48c3Bhbj57e2l0ZW0ud3J3bHh9fTwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0ICAgICAgICA8ZGl2IGNsYXNzPVwid2hvbGVfd2lkdGhcIj48c3Bhbj7mjpLmlL7mlrnlvI88L3NwYW4+PHNwYW4+e3tpdGVtLnBmZnN9fTwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0ICAgICAgICA8ZGl2IGNsYXNzPVwiaGFsZl93aWR0aFwiPjxzcGFuPueOsOacieW3peeoi+WunumZheaOkuaUvumHjzwvc3Bhbj48c3Bhbj57e2l0ZW0uc2pwZmx9feWQqC/lubQ8L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHRcdCAgICAgICAgPGRpdiBjbGFzcz1cImhhbGZfd2lkdGhcIj48c3Bhbj7njrDmnInlt6XnqIvorrjlj6/mjpLmlL7ph488L3NwYW4+PHNwYW4+e3tpdGVtLnhrcGZsfX3lkKgv5bm0PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQgICAgICAgIDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoXCI+PHNwYW4+5pys5bel56iL6aKE5rWL5o6S5pS+6YePPC9zcGFuPjxzcGFuPnt7aXRlbS55Y3BmbH195ZCoL+W5tDwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0ICAgICAgICA8ZGl2IGNsYXNzPVwiaGFsZl93aWR0aFwiPjxzcGFuPuaAu+S9k+W3peeoi+KAnOS7peaWsOW4puiAgeKAneWJiuWHj+mHjzwvc3Bhbj48c3Bhbj57e2l0ZW0ueXhkbHhqbH195ZCoL+W5tDwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0ICAgICAgICA8ZGl2IGNsYXNzPVwiaGFsZl93aWR0aFwiPjxzcGFuPuaAu+S9k+W3peeoi+mihOa1i+aOkuaUvuaAu+mHjzwvc3Bhbj48c3Bhbj57e2l0ZW0ueWNwZnpsfX3lkKgv5bm0PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQgICAgICAgIDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoXCI+PHNwYW4+5oC75L2T5bel56iL5o6S5pS+5aKe5YeP6YePPC9zcGFuPjxzcGFuPnt7aXRlbS5wZnpqbH195ZCoL+W5tDwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0ICAgICAgICA8ZGl2IGNsYXNzPVwid2hvbGVfd2lkdGhcIj48c3Bhbj7mgLvkvZPlt6XnqIvljLrln5/lubPooaHmm7/ku6PmnKzlt6XnqIvliYrlh4/ph488L3NwYW4+PHNwYW4+e3tpdGVtLnF5cGh0ZHhqbH195ZCoL+W5tDwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0ICAgIDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiB2LWlmPVwid3J3TGVuZ3RoPjJcIiBjbGFzcz1cImNvbXBhbnktaW5mb1wiIHN0eWxlPVwibWFyZ2luOjBweCAxMHB4IDZweDt0ZXh0LWFsaWduOiBjZW50ZXI7XCIgQGNsaWNrPVwiZ2V0TW9yZTIoKVwiPlxyXG5cdFx0XHRcdFx0XHQgICAgPHNwYW4gY2xhc3M9XCJtb3JlXCI+e3tzaG93TW9yZTI/J+afpeeci+abtOWkmic6J+aUtui1tyd9fTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cdGltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuXHRpbXBvcnQgeyBnZXRUaGlzRGF0ZSxmb3JtYXREYXRlIH0gZnJvbSAnQC91dGlscy9zZXRkYXRlJztcclxuXHRpbXBvcnQge1RvYXN0fSBmcm9tIFwidmFudFwiO1xyXG5cdGltcG9ydCB7b3BlbkJyb3dzZXJ9IGZyb20gXCJAL3V0aWxzL3V0aWxzXCI7XHJcbmltcG9ydCB7XHJcblx0XHRjb25zdHJ1Y3REZXRhaWxcclxuXHR9IGZyb20gXCJAL2FwaS9wb2xsdXRpb25fc291cmNlXCI7XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbmFtZTogXCJidWlsZFByb2plY3RJbmZvXCIsXHJcbiAgICAgICAgY29tcG9uZW50czoge1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGEoKXtcclxuICAgICAgICAgICAgcmV0dXJue1xyXG5cdFx0XHRcdFx0XHRcdGlkOlwiXCIsXHJcblx0XHRcdFx0XHRcdFx0c2hvd01vcmU6dHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRzaG93TW9yZTI6dHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRzaG93TW9yZTM6dHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHR0eXBlbmFtZTpcIuW6n+awtFwiLFxyXG5cdFx0XHRcdFx0XHRcdHF5aW5mbzp7fSxcclxuXHRcdFx0XHRcdFx0XHR4bWluZm86e30sXHJcblx0XHRcdFx0XHRcdFx0d3J3cGZsOltdLFxyXG5cdFx0XHRcdFx0XHRcdGhwd3J3cGZsOltdLFxyXG5cdFx0XHRcdFx0XHRcdGRldGFpbEluZm86e30sXHJcblx0XHRcdFx0XHRcdFx0dG9rZW46ICcnLFxyXG5cdFx0XHRcdFx0XHRcdHdyd0xlbmd0aDowXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdW50ZWQoKXtcclxuICAgICAgICBcdHRoaXMuaWQgPSB0aGlzLiRyb3V0ZS5xdWVyeS5pZDtcclxuXHJcbiAgICAgICAgXHR0aGlzLmxvYWREYXRhKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBtZXRob2RzOiB7XHJcblx0XHRcdFx0XHR0b01hcChyb3csdHlwZSkge1xyXG5cdFx0XHRcdFx0XHRsZXQgaW5mbyA9IG51bGxcclxuXHRcdFx0XHRcdFx0aWYodHlwZT09J2pzJyl7XHJcblx0XHRcdFx0XHRcdFx0aW5mbyA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0aWQ6dGhpcy5pZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0c2l0ZU5hbWU6cm93LmpzZHcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdEpEOiByb3cuamQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFdEOiByb3cud2QsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNyZWRpdENvZGU6cm93LmpzZHd0eXNoeHlkbSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0bGVnYWxNYW46cm93LmpzZHdmcmRiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRsZWdhbE1hblRlbDpyb3cuanNkd2x4ZGgsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNhdGVnb3J5OnJvdy5oeW1jLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhZGRyZXNzOnJvdy5qc2RkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlczonYnVpbGQnXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0XHRpbmZvID0ge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZDp0aGlzLmlkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzaXRlTmFtZTpyb3cuaHBkd21jLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRKRDogcm93LmpkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRXRDogcm93LndkLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjcmVkaXRDb2RlOnJvdy5ocGR3dHlzaHh5ZG0sXHJcblx0XHRcdFx0XHRcdFx0XHRcdGxlZ2FsTWFuOnJvdy5ocGR3ZmRkYnIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGxlZ2FsTWFuVGVsOnJvdy5ocGR3bHhkaCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y2F0ZWdvcnk6cm93Lmh5bWMsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGFkZHJlc3M6cm93LmhwZHdkeixcclxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gdHlwZXM6J2hwZHcnXHJcblx0XHRcdFx0XHRcdFx0XHRcdHR5cGVzOididWlsZCdcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdCAgICBpZiAocm93LmpkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLiRyb3V0ZXIucHVzaCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0bmFtZTogXCJsb2NhdGlvbk1hcFwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHF1ZXJ5OiBpbmZvXHJcblx0XHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0VG9hc3QoJ+acquiOt+WPluWIsOWumuS9jScpXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRnZXRNb3JlKCl7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2hvd01vcmUgPSAhdGhpcy5zaG93TW9yZTtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRnZXRNb3JlMigpe1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNob3dNb3JlMiA9ICF0aGlzLnNob3dNb3JlMjtcclxuXHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRjaGVja0ZpbGUocm93KXtcclxuXHRcdFx0XHRcdFx0Ly8gb3BlbkJyb3dzZXIocm93LnNob3dQYXRoKTtcclxuXHRcdFx0XHRcdFx0dGhpcy4kcm91dGVyLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gcGF0aDogXCIvcGRmLXZpZXdcIixcclxuICAgICAgICAgICAgICBuYW1lOiBcInBkZkg1XCIsXHJcblx0XHRcdFx0XHRcdFx0XHRxdWVyeToge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVybDogcm93LnNob3dQYXRoLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5hbWU6IHJvdy53am1jXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0Y2hhbmdlVHlwZSh0eXBlKXtcclxuXHRcdFx0XHRcdFx0dGhpcy50eXBlbmFtZSA9IHR5cGU7XHJcblx0XHRcdFx0XHRcdHRoaXMuaHB3cndwZmw9W107XHJcblx0XHRcdFx0XHRcdHRoaXMud3J3cGZsLmZvckVhY2goaXRlbT0+e1xyXG5cdFx0XHRcdFx0XHRcdGlmKGl0ZW0ud3J3bHg9PXR5cGUpe1xyXG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5ocHdyd3BmbC5wdXNoKGl0ZW0pXHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHR0aGlzLndyd0xlbmd0aCA9IHRoaXMuaHB3cndwZmwubGVuZ3RoO1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyh0aGlzLndyd0xlbmd0aClcclxuXHRcdFx0XHRcdH0sXHJcbiAgICAgICAgXHRsb2FkRGF0YSgpe1xyXG5cdFx0XHRcdFx0XHRsZXQgaW5mbyA9e1xyXG5cdFx0XHRcdFx0XHRcdGlkOiB0aGlzLiRyb3V0ZS5xdWVyeS5pZCxcclxuXHRcdFx0XHRcdFx0XHR0eXBlOnRoaXMuJHJvdXRlLnF1ZXJ5LnR5cGVcclxuXHRcdFx0XHRcdFx0fVxyXG4gICAgICAgIFx0XHRjb25zdHJ1Y3REZXRhaWwoaW5mbykudGhlbihyZXM9PntcclxuICAgICAgICBcdFx0XHRpZihyZXMuY29kZT09MjAwKXtcclxuXHRcdFx0XHRcdFx0XHRcdGxldCByZGF0YT0gcmVzLmRhdGE7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnF5aW5mbyA9IHJkYXRhLnF5eHg7XHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLnhtaW5mbyA9IHJkYXRhLnhteHg7XHJcbiAgICAgICAgXHRcdFx0XHR0aGlzLndyd3BmbCA9IHJkYXRhLndyd3BmbDtcclxuXHRcdFx0XHRcdFx0XHRcdHRoaXMud3J3cGZsLmZvckVhY2goaXRlbT0+e1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZihpdGVtLndyd2x4PT10aGlzLnR5cGVuYW1lKXtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmhwd3J3cGZsLnB1c2goaXRlbSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHJcblx0XHRcdFx0XHRcdFx0XHR0aGlzLndyd0xlbmd0aCA9IHRoaXMuaHB3cndwZmwubGVuZ3RoO1xyXG4gICAgICAgIFx0XHRcdH1cclxuXHJcbiAgICAgICAgXHRcdH0pXHJcbiAgICAgICAgXHR9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG4uYnVpbGRwcmppbmZve1xyXG5cdC5tb3JlaGVpZ2h0e1xyXG5cdFx0bWF4LWhlaWdodDogNDA0cHg7XHJcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdH1cclxuXHQubXNoYWRvdysubXNoYWRvd3tcclxuXHRcdG1hcmdpbi10b3A6IDhweDtcclxuXHR9XHJcblx0Lm1zaGFkb3d7XHJcblx0XHRib3JkZXItcmFkaXVzOiAxMHB4O1xyXG5cdFx0ICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDY4LCAxMjMsIDI1MiwgMCkgNzAlLCByZ2JhKDY4LCAxMjMsIDI1MiwgMC4wNikgMTAwJSksIHdoaXRlO1xyXG5cdFx0ICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG5cdFx0ICAgIGJveC1zaGFkb3c6IDBweCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xyXG5cclxuXHR9XHJcblx0LmZxc3RpdGxle1xyXG5cdFx0d2lkdGg6IDEwMCU7XHJcblx0XHRoZWlnaHQ6IGF1dG87XHJcblx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0cGFkZGluZy1sZWZ0OiAyMHB4O1xyXG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0XHRib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcclxuXHRcdHB7XHJcblx0XHRcdC8vIHdpZHRoOiAycmVtO1xyXG5cdFx0XHRmbG9hdDogbGVmdDtcclxuXHRcdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0XHRmb250LWZhbWlseTogQXJpYWwgTm9ybWFsLEFyaWFsO1xyXG5cdFx0XHRmb250LXdlaWdodDogNDAwO1xyXG5cdFx0XHRmb250LXN0eWxlOiBub3JtYWw7XHJcblx0XHRcdGNvbG9yOiAjMzMzO1xyXG5cdFx0fVxyXG5cdFx0LnR5cGUtd3JhcHtcclxuXHRcdFx0ZmxvYXQ6IGxlZnQ7XHJcblx0XHRcdHdpZHRoOiBhdXRvO1xyXG5cdFx0XHRoZWlnaHQ6IDV2aDtcclxuXHRcdFx0PmRpdntcclxuXHRcdFx0XHRmbG9hdDogbGVmdDtcclxuXHRcdFx0XHQvLyB3aWR0aDogMS4ycmVtO1xyXG5cdFx0XHRcdC8vIGhlaWdodDogMy4ydmg7XHJcblx0XHRcdFx0ICAgIHBhZGRpbmc6IDNweCAxMHB4O1xyXG5cdFx0XHRcdG1hcmdpbi1sZWZ0OiA2cHg7XHJcblx0XHRcdFx0bWFyZ2luLXRvcDogMC45dmg7XHJcblx0XHRcdFx0Zm9udC1zaXplOiAxMnB4O1xyXG5cdFx0XHRcdGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcblx0XHRcdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0XHRcdGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHRcdFx0XHRjb2xvcjogIzY2NjtcclxuXHRcdFx0fVxyXG5cdFx0XHQuYWN0aXZle1xyXG5cdFx0XHRcdGJhY2tncm91bmQ6IHJnYmEoMTA5LDk1LDI1MywuNCk7XHJcblx0XHRcdFx0Y29sb3I6ICNmZmY7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImJ1aWxkcHJqaW5mb1wiLCBzdGF0aWNTdHlsZTogeyBiYWNrZ3JvdW5kOiBcIiNmZmZcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXCJ2YW4tbmF2LWJhclwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHRpdGxlOiBcIueOr+ivhOmhueebrlwiLCBcImxlZnQtYXJyb3dcIjogXCJcIiB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIFwiY2xpY2stbGVmdFwiOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLiRyb3V0ZXIuZ28oLTEpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcImNhbGMoMTAwdmggLSA5dmgpXCIsIFwib3ZlcmZsb3cteVwiOiBcImF1dG9cIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbXBhbnktaW5mb1wiLFxuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBiYWNrZ3JvdW5kOiBcIiNmZmZcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYWluX2NvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwicGFkZGluZy10b3BcIjogXCIxMHB4XCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYnVpbGRfaW5mb1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJ1aWxkX2xhYmVsIGJ1aWxkX3B1cnBsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIueOr+ivhFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNTdHlsZTogeyBcImZvbnQtd2VpZ2h0XCI6IFwiNjAwXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS54bWluZm8ueG1tYykpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLnhtaW5mby5qc2RkICE9IFwiXCIgJiYgX3ZtLnhtaW5mby5qc2RkICE9IG51bGxcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWFpbl9mb290ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS50b01hcChfdm0ueG1pbmZvLCBcImpzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM6IHJlcXVpcmUoXCIuLi8uLi8uLi9hc3NldHMvcG9sbHV0ZXIvcG9zaXRpb24ucG5nXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnhtaW5mby5qc2RkKSldKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbXBhbnktaW5mb1wiLFxuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBtYXJnaW46IFwiNnB4IDEwcHggMHB4XCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWFpbl9jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcInBhZGRpbmctdG9wXCI6IFwiMTBweFwiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRoaXJkX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuWPl+eQhuaXpeacn1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnhtaW5mby5zbHJxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRheWpzKG5ldyBEYXRlKF92bS54bWluZm8uc2xycSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJZWVlZLU1NLUREXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGhpcmRfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5om55aSN5pel5pyfXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ueG1pbmZvLnBmcnFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZGF5anMobmV3IERhdGUoX3ZtLnhtaW5mby5wZnJxKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChcIllZWVktTU0tRERcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aGlyZF93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLorqHliJLlvIDlt6VcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS54bWluZm8uamhrZ3NqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRheWpzKG5ldyBEYXRlKF92bS54bWluZm8uamhrZ3NqKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChcIllZWVktTU0tRERcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aGlyZF93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLpobnnm67lu7rorr7lkajmnJ9cIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS54bWluZm8ueG1qc3pxKSArIFwi5Liq5pyIXCIpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGhpcmRfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6aG555uu5oC75oqV6LWEXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0ueG1pbmZvLnhtenR6KSArIFwi5LiH5YWDXCIpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGhpcmRfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi546v5L+d5oC75oqV6LWEXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0ueG1pbmZvLmhienR6KSArIFwi5LiH5YWDXCIpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGhpcmRfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5omA5Y2g5q+U546HXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0ueG1pbmZvLnN6YmwpICsgXCIlXCIpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGhpcmRfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6K6h5YiS5oqV5LqnXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ueG1pbmZvLnlqdGNycVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5kYXlqcyhuZXcgRGF0ZShfdm0ueG1pbmZvLnlqdGNycSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJZWVlZLU1NLUREXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbXBhbnktaW5mb1wiLFxuICAgICAgICAgICAgICBjbGFzczogX3ZtLnNob3dNb3JlID8gXCJtb3JlaGVpZ2h0XCIgOiBcIlwiLFxuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBtYXJnaW46IFwiNnB4IDEwcHggMHB4XCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgX3ZtLl9tKDEpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1haW5fY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJwYWRkaW5nLXRvcFwiOiBcIjEwcHhcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aG9sZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlu7rorr7ljZXkvY1cIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS54bWluZm8uanNkdykpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2hvbGVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi57uf5LiA5L+h55So5Luj56CBXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0ueG1pbmZvLmpzZHd0eXNoeHlkbSkpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGFsZl93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLms5Xlrprku6PooajkurpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS54bWluZm8uanNkd2ZyZGIpKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhhbGZfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6KGM5Lia57G75YirXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0ueG1pbmZvLmh5bWMpKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhhbGZfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6IGU57O75Lq6XCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0ueG1pbmZvLmpzZHdseHIpKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhhbGZfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6IGU57O755S16K+dXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0ueG1pbmZvLmpzZHdseGRoKSldKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1haW5fY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJwYWRkaW5nLXRvcFwiOiBcIjEwcHhcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aG9sZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLpobnnm67lkI3np7BcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS54bWluZm8ueG1tYykpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGFsZl93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLpobnnm67nlLPor7fnsbvliKtcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS54bWluZm8ueG1zcWxibWMpKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhhbGZfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6aG555uu57uP5Yqe5Lq6XCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0ueG1pbmZvLnhtamJyKSldKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aG9sZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlu7rorr7lnLDngrlcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS54bWluZm8uanNkZCkpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2hvbGVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5bu66K6+5YaF5a655Y+K6KeE5qihXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0ueG1pbmZvLmpzbnJqZ20pKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndob2xlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIumhueebruWQjeensFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnhtaW5mby54bW1jKSldKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl9tKDMpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1haW5fY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJwYWRkaW5nLXRvcFwiOiBcIjEwcHhcIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aG9sZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLnjq/or4TljZXkvY3lkI3np7BcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS54bWluZm8uaHBkd21jKSldKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aG9sZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlnLDlnYBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmdiYSg2OCwgMTIzLCAyNTIsIDEpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1kZWNvcmF0aW9uLWxpbmVcIjogXCJ1bmRlcmxpbmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udG9NYXAoX3ZtLnhtaW5mbywgXCJocFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS54bWluZm8uaHBkd2R6KSldXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2hvbGVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi57uf5LiA5L+h55So5Luj56CBXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0ueG1pbmZvLmhwZHd0eXNoeHlkbSkpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2hvbGVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi546v6K+E5a6h5om55py65YWzXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0ueG1pbmZvLmhwc3BqZykpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2hvbGVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6KeE5YiS546v6K+E5a6h5p+l5py65YWzXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0ueG1pbmZvLmdoaHBzY2pnKSldKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aG9sZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLop4TliJLnjq/or4TlrqHmn6XmhI/op4Hmloflj7dcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS54bWluZm8uZ2hocHNjeWp3aCkpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2hvbGVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi546v6K+E5paH5Lu257G75YirXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0ueG1pbmZvLmhwd2psYm1jKSldKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aG9sZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmibnlpI3mloflj7dcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS54bWluZm8ucGZ3aCkpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2hvbGVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6KeE5YiS546v6K+E5byA5bGV5oOF5Ya1XCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0ueG1pbmZvLmdoaHBrenFrbWMpKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndob2xlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuS4u+aMgeS6ulwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnhtaW5mby5ienpjcnhtKSldKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aG9sZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLnjq/looPlvbHlk43or4TooYzkuJrnsbvliKtcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS54bWluZm8uaGp5eHBqaHlsYikpXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fbSg0KSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IFwicGFkZGluZy10b3BcIjogXCIxMHB4XCIgfSB9LFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0ueG1pbmZvLmZqeHgsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmaWxlX2NvbnRlbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGVja0ZpbGUoaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW19jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLndqbWMpKV0pXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29tcGFueS1pbmZvXCIsXG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCIwcHggMTBweCA2cHhcIiwgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nZXRNb3JlKClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibW9yZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5zaG93TW9yZSA/IFwi5p+l55yL5pu05aSaXCIgOiBcIuaUtui1t1wiKSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb21wYW55LWluZm9cIixcbiAgICAgICAgICAgICAgY2xhc3M6IF92bS5zaG93TW9yZTIgJiYgX3ZtLndyd0xlbmd0aCA+IDIgPyBcIm1vcmVoZWlnaHRcIiA6IFwiXCIsXG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCI2cHggMTBweCAwcHhcIiB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl9tKDUpLFxuICAgICAgICAgICAgICBfdm0uaHB3cndwZmwubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyYWRfdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0udHlwZW5hbWUgPT0gXCLlup/msLRcIiA/IFwiYWN0aXZlXCIgOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoYW5nZVR5cGUoXCLlup/msLRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5bqf5rC0XCIpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnR5cGVuYW1lID09IFwi5bqf5rCUXCIgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFuZ2VUeXBlKFwi5bqf5rCUXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuW6n+awlFwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5ocHdyd3BmbCwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYWluX2NvbnRlbnQgbXNoYWRvd1wiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcInBhZGRpbmctdG9wXCI6IFwiMTBweFwiIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndob2xlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5rGh5p+T54mp5ZCN56ewXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ud3J3bHgpKV0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aG9sZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaOkuaUvuaWueW8j1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLnBmZnMpKV0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYWxmX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi546w5pyJ5bel56iL5a6e6ZmF5o6S5pS+6YePXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uc2pwZmwpICsgXCLlkKgv5bm0XCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhhbGZfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLnjrDmnInlt6XnqIvorrjlj6/mjpLmlL7ph49cIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS54a3BmbCkgKyBcIuWQqC/lubRcIildKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGFsZl93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuacrOW3peeoi+mihOa1i+aOkuaUvumHj1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLnljcGZsKSArIFwi5ZCoL+W5tFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYWxmX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5oC75L2T5bel56iL4oCc5Lul5paw5bim6ICB4oCd5YmK5YeP6YePXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ueXhkbHhqbCkgKyBcIuWQqC/lubRcIildKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGFsZl93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaAu+S9k+W3peeoi+mihOa1i+aOkuaUvuaAu+mHj1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLnljcGZ6bCkgKyBcIuWQqC/lubRcIildKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGFsZl93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaAu+S9k+W3peeoi+aOkuaUvuWinuWHj+mHj1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLnBmempsKSArIFwi5ZCoL+W5tFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aG9sZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaAu+S9k+W3peeoi+WMuuWfn+W5s+ihoeabv+S7o+acrOW3peeoi+WJiuWHj+mHj1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLnF5cGh0ZHhqbCkgKyBcIuWQqC/lubRcIildKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0ud3J3TGVuZ3RoID4gMlxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbXBhbnktaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjBweCAxMHB4IDZweFwiLFxuICAgICAgICAgICAgICAgICAgICBcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ2V0TW9yZTIoKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vcmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnNob3dNb3JlMiA/IFwi5p+l55yL5pu05aSaXCIgOiBcIuaUtui1t1wiKSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbXBhbnlfdGl0bGVcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIueOr+ivhOWuoeaJuemhueebruS/oeaBr1wiKV0pLFxuICAgICAgX2MoXG4gICAgICAgIFwic3BhblwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGl0bGVfdGlwcyBncmVlbl90aXBzXCIsXG4gICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tbGVmdFwiOiBcImF1dG9cIiB9LFxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwi5paw5bu6KOi/geW7uilcIildXG4gICAgICApLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJhZF90aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImFjdGl2ZVwiIH0sIFtfdm0uX3YoXCLlu7rorr7ljZXkvY3kv6Hmga9cIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyYWRfdGl0bGVcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJhY3RpdmVcIiB9LCBbX3ZtLl92KFwi6aG555uu5L+h5oGvXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicmFkX3RpdGxlXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYWN0aXZlXCIgfSwgW192bS5fdihcIueOr+ivhOWNleS9jeS/oeaBr1wiKV0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJhZF90aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImFjdGl2ZVwiIH0sIFtfdm0uX3YoXCLnjq/or4TlrqHmibnpobnnm67pmYTku7bkv6Hmga9cIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb21wYW55X3RpdGxlXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLnjq/or4TlrqHmibnmsaHmn5PnianmjpLmlL7ph49cIildKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIndXNlIHN0cmljdCc7XG52YXIgJGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZm9yRWFjaDtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdmb3JFYWNoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG5tb2R1bGUuZXhwb3J0cyA9ICFTVFJJQ1RfTUVUSE9EID8gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICByZXR1cm4gJGZvckVhY2godGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcbn0gOiBbXS5mb3JFYWNoO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBET01JdGVyYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcycpO1xudmFyIERPTVRva2VuTGlzdFByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20tdG9rZW4tbGlzdC1wcm90b3R5cGUnKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xuXG52YXIgaGFuZGxlUHJvdG90eXBlID0gZnVuY3Rpb24gKENvbGxlY3Rpb25Qcm90b3R5cGUpIHtcbiAgLy8gc29tZSBDaHJvbWUgdmVyc2lvbnMgaGF2ZSBub24tY29uZmlndXJhYmxlIG1ldGhvZHMgb24gRE9NVG9rZW5MaXN0XG4gIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlICYmIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCAhPT0gZm9yRWFjaCkgdHJ5IHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ29sbGVjdGlvblByb3RvdHlwZSwgJ2ZvckVhY2gnLCBmb3JFYWNoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggPSBmb3JFYWNoO1xuICB9XG59O1xuXG5mb3IgKHZhciBDT0xMRUNUSU9OX05BTUUgaW4gRE9NSXRlcmFibGVzKSB7XG4gIGlmIChET01JdGVyYWJsZXNbQ09MTEVDVElPTl9OQU1FXSkge1xuICAgIGhhbmRsZVByb3RvdHlwZShnbG9iYWxUaGlzW0NPTExFQ1RJT05fTkFNRV0gJiYgZ2xvYmFsVGhpc1tDT0xMRUNUSU9OX05BTUVdLnByb3RvdHlwZSk7XG4gIH1cbn1cblxuaGFuZGxlUHJvdG90eXBlKERPTVRva2VuTGlzdFByb3RvdHlwZSk7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmJ1aWxkcHJqaW5mbyAubW9yZWhlaWdodCB7XFxuICBtYXgtaGVpZ2h0OiA0MDRweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5idWlsZHByamluZm8gLm1zaGFkb3cgKyAubXNoYWRvdyB7XFxuICBtYXJnaW4tdG9wOiA4cHg7XFxufVxcbi5idWlsZHByamluZm8gLm1zaGFkb3cge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgwZGVnLCByZ2JhKDY4LCAxMjMsIDI1MiwgMCkgNzAlLCByZ2JhKDY4LCAxMjMsIDI1MiwgMC4wNikgMTAwJSksIHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBib3gtc2hhZG93OiAwcHggNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG59XFxuLmJ1aWxkcHJqaW5mbyAuZnFzdGl0bGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IGF1dG87XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcXG59XFxuLmJ1aWxkcHJqaW5mbyAuZnFzdGl0bGUgcCB7XFxuICBmbG9hdDogbGVmdDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCBOb3JtYWwsIEFyaWFsO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG4gIGNvbG9yOiAjMzMzO1xcbn1cXG4uYnVpbGRwcmppbmZvIC5mcXN0aXRsZSAudHlwZS13cmFwIHtcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgd2lkdGg6IGF1dG87XFxuICBoZWlnaHQ6IDV2aDtcXG59XFxuLmJ1aWxkcHJqaW5mbyAuZnFzdGl0bGUgLnR5cGUtd3JhcCA+IGRpdiB7XFxuICBmbG9hdDogbGVmdDtcXG4gIHBhZGRpbmc6IDNweCAxMHB4O1xcbiAgbWFyZ2luLWxlZnQ6IDZweDtcXG4gIG1hcmdpbi10b3A6IDAuOXZoO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGNvbG9yOiAjNjY2O1xcbn1cXG4uYnVpbGRwcmppbmZvIC5mcXN0aXRsZSAudHlwZS13cmFwIC5hY3RpdmUge1xcbiAgYmFja2dyb3VuZDogcmdiYSgxMDksIDk1LCAyNTMsIDAuNCk7XFxuICBjb2xvcjogI2ZmZjtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9idWlsZFByb2plY3RJbmZvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMmYwMDRkYTdcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9idWlsZFByb2plY3RJbmZvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYnVpbGRQcm9qZWN0SW5mby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWdDQVlBQUFCemVucjBBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFGRFNVUkJWRmlGN1ZiUmJzTWdERHp2eCtwODE1Q2FTczEzeGZreTl3V210QU1idzZidG9mY1VnZXk3MkFjWWVPT1BRZEVBVHNvQW9JcHJXU0xDTFgrTDNFbCtUY0RsVTNjQWJDWWszT1JPNjQ4SzRLU3NpcjAzYVVTSUs0Q1RycWR5aDBDRXhXdkpoNWRrbEx3MzFoVEFTZGRSOHBJaSsyWk1nUE1IQWtCT0o2QXB3dHBzZXNBeVhzMWdsbGNzTDFnVjROWkd6ZDJPNDV1NVhCUFcrS043cXJpRUJWaEJCcmkyU0lRakxNQXdGNWZyK0dseDhNU010QUNxMk0rRTJiRGVpYW5DdkFsNzd2NGVIQnMxZWN3S2RKeHhGMTRPOXkyWXJJSWNHeTFUQWlaRXVPUkFwd21QalpaZ083cklnZUJBVXB4dk9GN3lOUzI5T2NNaldSSHlLaUk2Q1UwSmVCVXhTajROVHJyT3pneWpMZURhZW5RaU5nVmtFajQ5U2xWU0F3SjhQVVROY2IwcVlHUUs5dEFhU3N3V2xDb0EzNTVuYm9ROEVYaC8vOGEvd0FQT01aelFERmhqTmdBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIi8v5b2T5YmN55S16ISR5pe26Ze0LS3lvZPml6VcclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRoaXNEYXRlKGUpIHtcclxuLy8rXCIgXCIraCtcIjpcIitNK1wiOlwiK3M7XHJcblx0XHRsZXQgbm93VGltZSA9IFwiXCI7XHJcblx0XHRsZXQgdGltZT0gbmV3IERhdGUoKTtcclxuXHRcdGxldCB5PXRpbWUuZ2V0RnVsbFllYXIoKTtcclxuXHRcdGxldCBsbT10aW1lLmdldE1vbnRoKCk7XHJcblx0XHRcdGxtPWxtPDEwPycwJytsbTpsbTtcclxuXHRcdGxldCBtPXRpbWUuZ2V0TW9udGgoKSsxO1xyXG5cdFx0XHRtPW08MTA/JzAnK206bTtcclxuXHRcdGxldCBkPXRpbWUuZ2V0RGF0ZSgpO1xyXG5cdFx0XHRkPWQ8MTA/JzAnK2Q6ZDtcclxuXHRcdGxldCBoPXRpbWUuZ2V0SG91cnMoKTtcclxuXHRcdFx0aD1oPDEwPycwJytoOmg7XHJcblx0XHRsZXQgTSA9IHRpbWUuZ2V0TWludXRlcygpO1xyXG5cdFx0XHRNPU08MTA/JzAnK006TTtcclxuXHRcdGxldCBzID0gdGltZS5nZXRTZWNvbmRzKCk7XHJcblx0XHRcdHM9czwxMD8nMCcrczpzO1xyXG5cdFx0aWYgKGUgPT09IDEpIHtcclxuXHRcdFx0bm93VGltZT0geStcIi1cIisgbStcIi1cIitkICsgJyAnICsgaCArICc6JyArIE0gKyAnOicgKyBzXHJcblx0XHR9ZWxzZSBpZihlID09IDQpey8v5b2T5pyI55qE56ys5LiA5aSpXHJcblx0XHRcdG5vd1RpbWU9IHkrXCItXCIrIG0rXCItMVwiO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bm93VGltZT0geStcIi1cIisgbStcIi1cIitkXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbm93VGltZTtcclxufVxyXG4vLyDovazljJbml7bpl7RcclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSxuKSB7XHJcblx0XHRsZXQgdGltZT0gbmV3IERhdGUoZGF0ZSk7XHJcblx0XHRsZXQgbm93VGltZT0gXCJcIjtcclxuXHRcdGxldCB5PXRpbWUuZ2V0RnVsbFllYXIoKTtcclxuXHRcdGxldCBtPXRpbWUuZ2V0TW9udGgoKSsxO1xyXG5cdFx0XHRtPW08MTA/JzAnK206bTtcclxuXHRcdGxldCBkPXRpbWUuZ2V0RGF0ZSgpO1xyXG5cdFx0XHRkPWQ8MTA/JzAnK2Q6ZDtcclxuXHRcdGxldCBoPXRpbWUuZ2V0SG91cnMoKTtcclxuXHRcdFx0aD1oPDEwPycwJytoOmg7XHJcblx0XHRsZXQgTSA9IHRpbWUuZ2V0TWludXRlcygpO1xyXG5cdFx0XHRNPU08MTA/JzAnK006TTtcclxuXHRcdGxldCBzID0gdGltZS5nZXRTZWNvbmRzKCk7XHJcblx0XHRcdHM9czwxMD8nMCcrczpzO1xyXG5cdFx0aWYobj09XCJ5XCJ8fG49PVwi5bm0XCIpe1xyXG5cdFx0XHRub3dUaW1lPSB5XHJcblx0XHR9ZWxzZSBpZihuPT1cIk1cInx8bj09XCLmnIhcIil7XHJcblx0XHRcdG5vd1RpbWU9IHkrXCItXCIrIG1cclxuXHRcdH1lbHNlIGlmKG49PVwibVwiKXtcclxuXHRcdFx0bm93VGltZT0geStcIi1cIisgbStcIi1cIitkK1wiIFwiK2grXCI6XCIrTVxyXG5cdFx0fWVsc2UgaWYobj09XCJoXCJ8fG49PVwi5pe2XCIpe1xyXG5cdFx0XHRub3dUaW1lPSB5K1wiLVwiKyBtK1wiLVwiK2QrXCIgXCIraFxyXG5cdFx0fWVsc2UgaWYobj09XCJkXCJ8fG49PVwi5pelXCIpe1xyXG5cdFx0XHRub3dUaW1lPSB5K1wiLVwiKyBtK1wiLVwiK2RcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRub3dUaW1lPSB5K1wiLVwiKyBtK1wiLVwiK2QrXCIgXCIraCtcIjpcIitNK1wiOlwiK3NcclxuXHRcdH1cclxuXHRcdHJldHVybiBub3dUaW1lO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBob3VyRGF0ZUZvcm1hdChkYXRlKSB7XHJcblx0bGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcblx0bGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcclxuXHRsZXQgZGF5ID0gZGF0ZS5nZXREYXRlKCk7XHJcblx0bGV0IGhvdXIgPSBkYXRlLmdldEhvdXJzKCk7XHJcblx0ZGF0ZSA9IHllYXIgKyAnLScgKyAobW9udGggPiA5ID8gbW9udGggOiAnMCcgKyBtb250aCkgKyAnLScgKyAoZGF5ID4gOSA/IGRheSA6ICcwJyArIGRheSkgKyAnICcgKyAoaG91ciA+IDkgPyBob3VyIDogJzAnICsgaG91cik7XHJcblx0cmV0dXJuIGRhdGU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIG1vbnRoRGF0ZUZvcm1hdChkYXRlKSB7XHJcblx0bGV0IHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XHJcblx0bGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMTtcclxuXHRkYXRlID0geWVhciArICctJyArIChtb250aCA+IDkgPyBtb250aCA6ICcwJyArIG1vbnRoKTtcclxuXHRyZXR1cm4gZGF0ZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZm91ckhvdXJUaW1lKCkge1xyXG5cdGxldCBub3dEYXRlID0gbmV3IERhdGUoKTtcclxuXHRsZXQgeWVhciA9IG5vd0RhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHRsZXQgbW9udGggPSBub3dEYXRlLmdldE1vbnRoKCkgKyAxO1xyXG5cdGxldCBkYXkgPSBub3dEYXRlLmdldERhdGUoKTtcclxuXHRsZXQgaG91cnMgPSBub3dEYXRlLmdldEhvdXJzKCk7XHJcblx0aWYgKGhvdXJzIDwgNCAmJiBob3VycyA+PSAwKSB7XHJcblx0XHRob3VycyA9IDA7XHJcblx0fSBlbHNlIGlmIChob3VycyA8IDggJiYgaG91cnMgPj0gNCkge1xyXG5cdFx0aG91cnMgPSA0O1xyXG5cdH0gZWxzZSBpZiAoaG91cnMgPCAxMiAmJiBob3VycyA+PSA4KSB7XHJcblx0XHRob3VycyA9IDg7XHJcblx0fSBlbHNlIGlmIChob3VycyA8IDE2ICYmIGhvdXJzID49IDEyKSB7XHJcblx0XHRob3VycyA9IDEyO1xyXG5cdH0gZWxzZSBpZiAoaG91cnMgPCAyMCAmJiBob3VycyA+PSAxNikge1xyXG5cdFx0aG91cnMgPSAxNjtcclxuXHR9IGVsc2UgaWYgKGhvdXJzIDw9IDIzICYmIGhvdXJzID49IDIwKSB7XHJcblx0XHRob3VycyA9IDIwO1xyXG5cdH1cclxuXHRtb250aCA9IG1vbnRoIDwgMTAgPyBcIjBcIiArIG1vbnRoIDogbW9udGg7XHJcblx0ZGF5ID0gZGF5IDwgMTAgPyBcIjBcIiArIGRheSA6IGRheTtcclxuXHRob3VycyA9IGhvdXJzIDwgMTAgPyBcIjBcIiArIGhvdXJzIDogaG91cnM7XHJcblx0cmV0dXJuIHllYXIrJy0nK21vbnRoKyctJytkYXkrJyAnK2hvdXJzKyc6MDA6MDAnXHJcbn1cclxuIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9idWlsZFByb2plY3RJbmZvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jZjhlN2ZmMCZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9idWlsZFByb2plY3RJbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vYnVpbGRQcm9qZWN0SW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vYnVpbGRQcm9qZWN0SW5mby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdjZjhlN2ZmMCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdjZjhlN2ZmMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdjZjhlN2ZmMCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vYnVpbGRQcm9qZWN0SW5mby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9Y2Y4ZTdmZjAmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignY2Y4ZTdmZjAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2J1aWxkUHJvamVjdEluZm8udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9idWlsZFByb2plY3RJbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9idWlsZFByb2plY3RJbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2J1aWxkUHJvamVjdEluZm8udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9idWlsZFByb2plY3RJbmZvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1jZjhlN2ZmMCZcIiJdLCJzb3VyY2VSb290IjoiIn0=