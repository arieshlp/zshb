(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[73],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/pollutionPunishList/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/pollutionPunishList/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.search.js */ "./node_modules/core-js/modules/es.string.search.js");
/* harmony import */ var core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_search_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _api_pollution_source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/pollution_source */ "./src/api/pollution_source.js");
/* harmony import */ var _components_areaFilter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/areaFilter */ "./src/components/areaFilter.vue");





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    areaFilter: _components_areaFilter__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  data: function data() {
    return {
      search: '',
      publicData: [],
      loading: false,
      finished: false,
      // 是否已加载完成，加载完成后不再触发load事件
      refreshing: false,
      // 下拉状态
      listQuery: {
        page: 1,
        // 当前页码数
        limit: 20 // 一页显示10条

      },
      topTitle: '',
      xqtype: "",
      xzqh: '',
      fsfq: "",
      showFilter: false
    };
  },
  mounted: function mounted() {
    this.topTitle = this.$route.query.title;
    this.xqtype = this.$route.query.xqtype;
    this.xzqh = this.$route.query.xzqh;
    this.xzqydm = this.$route.query.xzqydm;
    this.loadData();
  },
  methods: {
    getDivision: function getDivision(arr, arrdm) {
      if (this.xqtype != '在线监控' && this.xqtype != '监测设备') {
        if (arr.length > 0) {
          this.xzqh = arr.join(',');
          this.publicData = [];
          this.listQuery.page = 1;
          this.loadData();
        }
      } else {
        if (arrdm.length > 0) {
          this.xzqydm = arrdm.join(',');
          this.publicData = [];
          this.listQuery.page = 1;
        } else {
          this.xzqydm = this.$route.query.xzqydm;
        }

        this.loadData();
      }
    },
    onSearch: function onSearch() {
      this.publicData = [];
      this.listQuery.page = 1;
      this.loadData();
    },
    goDetail: function goDetail(row, type) {
      var routerName = '';
      var queryObj = {};

      if (type === '辐射安全') {
        routerName = 'safeDetail';
        queryObj = {
          id: row.fsaqGyqyId,
          title: "辐射安全"
        };
      } else if (type === '建设项目') {
        if (this.topTitle === '环评项目') {
          routerName = 'buildProjectInfo';
          queryObj = {
            id: row.id,
            type: this.$route.query.cs
          };
        } else if (this.topTitle === '备案项目') {
          routerName = 'buildFilingsDetail';
          queryObj = {
            id: row.id,
            type: this.$route.query.cs
          };
        } else if (this.topTitle === '企业自验收项目') {
          routerName = 'buildSelfaccepttInfo';
          queryObj = {
            id: row.id,
            type: this.$route.query.cs
          };
        }
      } else if (type === '行政处罚') {
        routerName = 'penaltyDetail';
        queryObj = {
          id: row.id
        };
      } else if (this.xqtype === '在线监控') {
        var cs = this.$route.query.cs;

        if (cs !== '视频') {
          routerName = 'jcpkDetail';
          queryObj = {
            // pscode: row.pscode,
            // name: row.psname
            pscode: row.QYID,
            name: row.QYMC
          };
        }
      } else if (this.xqtype === '监测设备') {
        routerName = 'portInfoDetail';
        queryObj = {
          // deviceId: row.deviceId,
          // psCode: row.psCode,
          // name: row.deviceName,
          // type: this.fsfq,
          deviceId: row.SBBM,
          psCode: row.QYID,
          sbid: row.SBID,
          name: row.PKMC,
          type: this.fsfq
        };
      } else if (this.xqtype === '第二次污染源普查') {
        if (row.baseId !== '') {
          if (this.topTitle === '工业源企业') {
            routerName = 'industrySource';
            queryObj = {
              id: row.baseId,
              name: row.entName
            };
          } else if (this.topTitle === '集中式污染处理设施') {
            routerName = 'handleFacility';
            queryObj = {
              id: row.baseId,
              name: row.entName
            };
          }
        }
      } else if (type === '危险废物') {
        routerName = 'wasteDetail';
        queryObj = {
          from: "危险废物",
          id: row.id,
          name: row.qymc
        };
      } else if (type === '环保投诉') {
        routerName = 'complaintDetail';
        queryObj = {
          id: row.id
        };
      }

      this.$router.push({
        name: routerName,
        query: queryObj
      });
    },
    loadData: function loadData() {
      this.queryData();
    },
    queryData: function queryData() {
      var _this = this;

      var functionName = '';
      var params = {};

      if (this.xqtype == '辐射安全') {
        params = {
          entName: this.search,
          divisionName: this.xzqh,
          pageNum: this.listQuery.page,
          pageSize: this.listQuery.limit
        };
        functionName = _api_pollution_source__WEBPACK_IMPORTED_MODULE_5__["radiationList"];
      } else if (this.xqtype == '建设项目') {
        params = {
          projectName: this.search,
          type: this.$route.query.cs,
          divisionName: this.xzqh,
          pageNum: this.listQuery.page,
          pageSize: this.listQuery.limit
        };
        functionName = _api_pollution_source__WEBPACK_IMPORTED_MODULE_5__["constructList"];
      } else if (this.xqtype == '行政处罚') {
        params = {
          entName: this.search,
          divisionName: this.xzqh,
          pageNum: this.listQuery.page,
          pageSize: this.listQuery.limit
        };
        functionName = _api_pollution_source__WEBPACK_IMPORTED_MODULE_5__["xzcfList"];
      } else if (this.xqtype == '在线监控' || this.xqtype == '监测设备') {
        this.zxJkAndSb(); // functionName = monitorList;
        // } else if (this.xqtype == '监测设备') {
        //   let sfzd = "";
        //   let cs = this.$route.query.cs;
        //   if (cs == '非重点废水' || cs == '重点废水' || cs == '废水') {
        //     this.fsfq = "废水"
        //   } else {
        //     this.fsfq = "废气"
        //   }
        //   if (cs == '重点废水' || cs == '重点废气') {
        //     sfzd = 1
        //   } else if (cs == '非重点废水' || cs == '非重点废气') {
        //     sfzd = 0
        //   }
        //   params = {
        //     name: this.search,
        //     divisionName: this.xzqh,
        //     type: this.fsfq,
        //     sfzd: sfzd,
        //     pageNum: this.listQuery.page,
        //     pageSize: this.listQuery.limit,
        //   }
        //   functionName = monitorDeviceList;
      } else if (this.xqtype == '第二次污染源普查') {
        params = {
          name: this.search,
          divisionName: this.xzqh,
          type: this.$route.query.cs,
          pageNum: this.listQuery.page,
          pageSize: this.listQuery.limit
        };
        functionName = _api_pollution_source__WEBPACK_IMPORTED_MODULE_5__["sgspsList"];
      } else if (this.xqtype == '危险废物') {
        params = {
          entName: this.search,
          divisionName: this.xzqh,
          pageNum: this.listQuery.page,
          pageSize: this.listQuery.limit
        };
        functionName = _api_pollution_source__WEBPACK_IMPORTED_MODULE_5__["solidEntList"];
      } else if (this.xqtype == '环保投诉') {
        params = {
          name: this.search,
          type: this.topTitle == '12345投诉件' ? '12345' : '12369',
          divisionName: this.xzqh,
          pageNum: this.listQuery.page,
          pageSize: this.listQuery.limit
        };
        functionName = _api_pollution_source__WEBPACK_IMPORTED_MODULE_5__["xftsList"];
      }

      if (this.xqtype != '在线监控' && this.xqtype != '监测设备') {
        functionName(params).then(function (res) {
          var rdata = res.data;

          if (_this.listQuery.page == 1) {
            _this.publicData = rdata.records;
          } else {
            rdata.records.forEach(function (item) {
              _this.publicData.push(item);
            });
          }

          _this.loading = false;

          if (rdata.records.length === _this.listQuery.limit && rdata.total !== _this.listQuery.limit) {
            _this.listQuery.page++;
            _this.loading = false;
          } else {
            _this.finished = true;
          }
        });
      }
    },
    zxJkAndSb: function zxJkAndSb() {
      var _this2 = this;

      var info2 = {
        qymccx: this.search,
        xzqydm: this.xzqydm,
        // divisionName: this.xzqh,
        // type:type,
        qypksbtype: 'qy',
        pageNum: this.listQuery.page,
        pageSize: this.listQuery.limit
      };
      var cs = this.$route.query.cs;

      if (cs == '重点' || cs == '重点废水' || cs == '重点废气') {
        info2.gljb = 'zd';
      } else if (cs == "非重点" || cs == '非重点废水' || cs == '非重点废气') {
        info2.gljb = 'fzd';
      } else {
        info2.gljb = 'all';
      }

      if (cs == '废水' || cs == '重点废水' || cs == '非重点废水') {
        info2.qypksbtype = "pk";
        info2.wrlx = '1';
        this.fsfq = "废水";
      } else if (cs == '废气' || cs == '重点废气' || cs == '非重点废气') {
        info2.qypksbtype = "pk";
        info2.wrlx = '2';
        this.fsfq = "废气";
      }

      if (cs == '医院') {
        info2.hylbdm = '5';
      } else if (cs == '处理厂') {
        info2.hylbdm = '10';
      }

      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_5__["showXttjDetail"])(info2).then(function (res) {
        var rdata = res.list;

        if (_this2.listQuery.page == 1) {
          _this2.publicData = rdata;
        } else {
          rdata.forEach(function (item) {
            _this2.publicData.push(item);
          });
        }

        _this2.loading = false;

        if (rdata.length === _this2.listQuery.limit && res.totalRecord !== _this2.listQuery.limit) {
          _this2.listQuery.page++;
          _this2.loading = false;
        } else {
          _this2.finished = true;
        }
      });
    },
    onLoad: function onLoad() {
      var _this3 = this;

      setTimeout(function () {
        _this3.loadData();
      }, 1000);
    },
    onRefresh: function onRefresh() {
      var _this4 = this;

      setTimeout(function () {
        _this4.listQuery.page = 1;

        _this4.loadData();

        _this4.refreshing = false;
      }, 500);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/pollutionPunishList/index.vue?vue&type=template&id=634c36d1&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/pollutionPunishList/index.vue?vue&type=template&id=634c36d1&scoped=true& ***!
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
  return _c(
    "div",
    [
      _c("van-nav-bar", {
        staticClass: "vantnavbar",
        attrs: { title: _vm.topTitle, "left-arrow": "" },
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
                  {
                    staticClass: "into-map",
                    on: {
                      click: function ($event) {
                        _vm.showFilter = true
                      },
                    },
                  },
                  [_vm._v("筛选")]
                ),
              ]
            },
            proxy: true,
          },
        ]),
      }),
      _c("areaFilter", {
        attrs: { isShow: _vm.showFilter },
        on: {
          getFilter: _vm.getDivision,
          close: function ($event) {
            _vm.showFilter = false
          },
        },
      }),
      _c("van-search", {
        attrs: { shape: "round", placeholder: "" },
        on: { search: _vm.onSearch },
        model: {
          value: _vm.search,
          callback: function ($$v) {
            _vm.search = $$v
          },
          expression: "search",
        },
      }),
      _c(
        "div",
        { staticClass: "refreshbox" },
        [
          _c(
            "van-pull-refresh",
            {
              on: { refresh: _vm.onRefresh },
              model: {
                value: _vm.refreshing,
                callback: function ($$v) {
                  _vm.refreshing = $$v
                },
                expression: "refreshing",
              },
            },
            [
              _c(
                "van-list",
                {
                  attrs: {
                    finished: _vm.finished,
                    "finished-text": "没有更多了",
                    "immediate-check": false,
                    offset: 50,
                  },
                  on: { load: _vm.onLoad },
                  model: {
                    value: _vm.loading,
                    callback: function ($$v) {
                      _vm.loading = $$v
                    },
                    expression: "loading",
                  },
                },
                _vm._l(_vm.publicData, function (item) {
                  return _c(
                    "div",
                    {
                      staticClass: "around-wrapper",
                      on: {
                        click: function ($event) {
                          return _vm.goDetail(item, _vm.xqtype)
                        },
                      },
                    },
                    [
                      _vm.xqtype == "行政处罚"
                        ? [
                            _c("div", { staticClass: "name" }, [
                              _c("img", {
                                staticClass: "liimg",
                                attrs: { src: __webpack_require__(/*! @/assets/审批.png */ "./src/assets/审批.png") },
                              }),
                              _vm._v(" " + _vm._s(item.message) + " "),
                            ]),
                            _c("div", { staticClass: "des" }, [
                              _vm._v(_vm._s(item.entName)),
                            ]),
                          ]
                        : _vm._e(),
                      _vm.xqtype == "辐射安全"
                        ? [
                            _c("div", { staticClass: "name nowrap" }, [
                              _c("img", {
                                attrs: { src: __webpack_require__(/*! @/assets/vocs.png */ "./src/assets/vocs.png") },
                              }),
                              _vm._v(_vm._s(item.entName) + " "),
                            ]),
                          ]
                        : _vm._e(),
                      _vm.xqtype == "建设项目"
                        ? [
                            _c("div", { staticClass: "name nowrap" }, [
                              _c("img", {
                                attrs: { src: __webpack_require__(/*! @/assets/案例.png */ "./src/assets/案例.png") },
                              }),
                              _vm._v(_vm._s(item.projectName) + " "),
                            ]),
                            _c("div", { staticClass: "des" }, [
                              _vm._v(_vm._s(item.entName)),
                            ]),
                          ]
                        : _vm._e(),
                      _vm.xqtype == "在线监控"
                        ? [
                            _c("div", { staticClass: "name nowrap" }, [
                              _c("img", {
                                attrs: { src: __webpack_require__(/*! @/assets/案例.png */ "./src/assets/案例.png") },
                              }),
                              _vm._v(" " + _vm._s(item.QYMC) + " "),
                            ]),
                          ]
                        : _vm._e(),
                      _vm.xqtype == "监测设备"
                        ? [
                            _c("div", { staticClass: "name nowrap" }, [
                              _c("img", {
                                attrs: { src: __webpack_require__(/*! @/assets/案例.png */ "./src/assets/案例.png") },
                              }),
                              _vm._v(" " + _vm._s(item.PKMC) + " "),
                            ]),
                            _c("div", { staticClass: "des" }, [
                              _vm._v(" " + _vm._s(item.QYMC) + " "),
                            ]),
                          ]
                        : _vm._e(),
                      _vm.xqtype == "第二次污染源普查"
                        ? [
                            _c("div", { staticClass: "name nowrap" }, [
                              _c("img", {
                                attrs: { src: __webpack_require__(/*! @/assets/案例.png */ "./src/assets/案例.png") },
                              }),
                              _vm._v(_vm._s(item.entName) + " "),
                            ]),
                          ]
                        : _vm._e(),
                      _vm.xqtype == "危险废物"
                        ? [
                            _c("div", { staticClass: "name nowrap" }, [
                              _c("img", {
                                attrs: { src: __webpack_require__(/*! @/assets/公司.png */ "./src/assets/公司.png") },
                              }),
                              _vm._v(_vm._s(item.qymc) + " "),
                            ]),
                            _c("div", { staticClass: "des" }, [
                              _vm._v(_vm._s(item.hymc)),
                            ]),
                          ]
                        : _vm._e(),
                      _vm.xqtype == "环保投诉"
                        ? [
                            _c("div", { staticClass: "name nowrap" }, [
                              _c("img", {
                                attrs: { src: __webpack_require__(/*! @/assets/案例.png */ "./src/assets/案例.png") },
                              }),
                              _vm._v(_vm._s(item.tsnr) + " "),
                            ]),
                            _c("div", { staticClass: "des" }, [
                              _vm._v(_vm._s(item.szdz)),
                            ]),
                          ]
                        : _vm._e(),
                    ],
                    2
                  )
                }),
                0
              ),
            ],
            1
          ),
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/pollutionPunishList/index.vue?vue&type=style&index=0&id=634c36d1&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/pollutionPunishList/index.vue?vue&type=style&index=0&id=634c36d1&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".refreshbox[data-v-634c36d1] {\n  height: calc(100vh - 106px);\n  overflow-y: auto;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/pollutionPunishList/index.vue?vue&type=style&index=1&id=634c36d1&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/pollutionPunishList/index.vue?vue&type=style&index=1&id=634c36d1&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".into-map[data-v-634c36d1] {\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 14px;\n  font-weight: normal;\n}\n.around-wrapper[data-v-634c36d1] {\n  margin: 0 25px;\n  padding: 8px 0;\n  border-bottom: 1px solid rgba(18, 18, 54, 0.05);\n}\n.around-wrapper[data-v-634c36d1]:last-child {\n  border-bottom: 0;\n}\n.around-wrapper .name[data-v-634c36d1] {\n  display: flex;\n  margin-bottom: 5px;\n  color: #121236;\n  font-size: 14px;\n}\n.around-wrapper .name img[data-v-634c36d1] {\n  width: 16px;\n  margin-right: 7px;\n  vertical-align: bottom;\n}\n.around-wrapper .name .liimg[data-v-634c36d1] {\n  width: 16px;\n  margin-right: 7px;\n  margin-top: 3px;\n  height: 16px;\n}\n.around-wrapper .nowrap[data-v-634c36d1] {\n  display: block;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n.around-wrapper .des[data-v-634c36d1] {\n  font-size: 12px;\n  padding-left: 27px;\n  color: rgba(18, 18, 54, 0.5);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/pollutionPunishList/index.vue?vue&type=style&index=0&id=634c36d1&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/pollutionPunishList/index.vue?vue&type=style&index=0&id=634c36d1&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=634c36d1&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/pollutionPunishList/index.vue?vue&type=style&index=0&id=634c36d1&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("7c27f02c", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/pollutionPunishList/index.vue?vue&type=style&index=1&id=634c36d1&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/pollutionPunishList/index.vue?vue&type=style&index=1&id=634c36d1&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&id=634c36d1&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/pollutionPunishList/index.vue?vue&type=style&index=1&id=634c36d1&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("7ddad16e", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/vocs.png":
/*!*****************************!*\
  !*** ./src/assets/vocs.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAALNSURBVFiF7ZYxb9NAFMf/vnrIBlKHSh2wTZomQ9m697pHVb4B/SZ1vwAzEyoLG1IURTChOgMDUrYwuDWpHYagVEolFmShyGY4n3M+3zmOxIBE35TcPd//d+/e3XvAo/3vZmzj3Oj0bCA5Yf8SR+HiAUDsD72/CrAWThyAhEAyA8yIifUjNr+yAWIJYF4dkI0AjU6XAqAACWN/8JaP30xnLv/dblqu+pvNEJUAjc7ZS7Yj8yr2+1EQhDTd2blAmlLukwKXMkAVuGxEL96lQOLE/tCN/X50M525KSHXoniVxf7Qi/2hK8DUBxBDCLBwG8BFHWGFxAgA1UHoIkCRnV8QhFQUny+WeP3uA+aLZQlaJRL7/QhsI/UA+CI8eVJCrvnceBJg8OmLhhkUAGV5I0MMPYCEKkBFBIiVEeP27ntBfDwJcq/x128laGaJo4JgV5dYNQASh99x0URxgB2FfAxFiJ5dHDMj1XgBgE9m5wae8bJ4DrWOAlVAnGjoCiZFYJXTBUGYLzq/f1B+PF8s8f7jZ1s5KVm+KUEDAEwFUyiPHB8dAEcH+f/9vd3896s3/aeAeVUHInvGCyMSgBkBKyp/JgqKNp4E+HH/8AQQd1hliQNgVkBSuTU6PbvVcryqpYq3YvN5r5OvmOAFgNIuDEMJMV8spcRMnKrnlhk7e1lD9Q6EfEdpmo5US2keI1q+eiXzSmoKgBG/r+2m5abApTirv/sAsDqvgKCqwdItYA3GGY9C1G5a7u10lteC/b1dHL9o5f6/4t8/AXiAGekSkR0PCWN/4Mlzyn4g63DOIRQksSaIpusHiuKgvKeQ55W3QKxgjU6XtlqOd9i0DF1S6sV7NvLKqo6OtiHJqmEOAQCHz5+dGklyCsPwNsGwgrSOos5vi54Q2LQY88+PD7qwbwWgBuGdMZBVOblVr9URbwUggUBV2wEyqvckP9o/ZH8An/hbhxo3DGAAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/公司.png":
/*!***************************!*\
  !*** ./src/assets/公司.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFuSURBVFiF7VdbioQwEKxe9FyrkFsZiILeSph4rgi9HybiqEkm+JqPLZif0e6qdPol8DDoqAMhTQGgAKD7Nte3CBDSFGBSlnjhjZu+zesUX9nHhABmUn57rEE8gEmB6TeFPChgcUqAVyedSBsXcitQpZLvChDV+MLeKQEsSc/Cm4CZ3JESNwBwNqlXAFw2d1l5FeEaP3cRfa2AaBnavNiCeEit+WQBUyluSnACH26icQE2+1OYClGNnNIRr8kBJiWkeUSABnEJQINJiWrkmJB4Ero5sIKvOdn/tZCmtvNBCWngu5JgBOw8eO39RDVyyLZv87rvMgJxE4pGNAmFNI3nsQ7ZLoUIaeCLRvQKzqh166MW1ch2ws4+H++Ejwu4rBXPdpH3jrTiAou79NoF3osKsFWwuxuElpSQXZKAGNEZdo8n4b+AedbPfX+xDSfAfUOEbSf/AHHpcoSAzTp+F3TfZWVmFQ1nrVgfIz3K1+APOTPQdN+wLWUAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/审批.png":
/*!***************************!*\
  !*** ./src/assets/审批.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAN4SURBVFiF1ZdLiBRXFIa/UzOtTms/NLYZk2AGWwUVJIKPpZpFDEiyCBgJZpPsNGJ0pYugIrrIbhIfOxVEFxqXBolGibuQGcgmiKSnIjKhZ8amx+mHbVuOdbLomn7WrS4nhuAPDbdunf9+/63bXfc2/M+S2Ro1m42SKCYhCtE5BZH+J/9pAJ20E1h8hqXbgY0ob7eVjIMOg9zkKVekf8WjVxJAs9koCypHUT0IEgkbGKzvkTnHJf5OftYBtGDvAD0DvBse3KIclu6T2MqrxphGeMneC3o9CK53LqB3LgQFSOHKFS3ah0wFvk9AS/YeXD1rHPbaSZjXV2uXJ2HaASLw+UlzFJHDEk9/2zWAFkY+BG6EggNMjTfd7BLCsj6V2PIfWrpa4DocAU4bB8iPtsKnnbaC5+jdy+YArntKHz9IGgNQTB4B0ia//ty23tVyZ9HfI+YA8CY9L77xDaCZzFzg6yC3LEi0wtufgFMNsnsg9qtm4h0BWCK7gFigt8/zTTv+sw+nCCXZ1RkA+aCbU97/AvJjtW++n54+Q3YfDZGhwWoKoBtCONGB98z3km+FGQJUN/kEYHkYr2zZDZVK55gyL+TsAVimo6N94L0HVMfnUyz7L+qNM5DP1trPPPDcti3BqaKPJiCWgmSq0R9LIR/v9Y8wzTJ5Y8VoLwATQJ9P0YQN+YeN63bwjEoFpAeo5GofT+ooum4LMrC202NZFnhLIP39T4D2twp6/1d/YLPyE8afn+uAPrjn71OdqgfwZHenNcmpwthDI1wdDTBrThalC+0BhkLDy4XazAPkdjzPZlm/1VuNTvmpK7RcqM26NBVYGjx7AK2z6ruhqloUR3Igi1pK716GaMv+0V2pgXrT9wtY0SWydGUOoLdeKOJqaWQQl+PNtfL77dBcjS5GI/OB4VrHwBqfADo4Awff80DmHshqAB36EfnlYji4o77rLlt3Ym3bOXM5hltaIwvX19ewt8Ohsg/hNoBs3IH+OdydHkuhsZTv8aoJDi5fNcPBdCQr2l+ieq47+WUkByWRHuzoNZW/2hByQBLp7/zuGE/FEk+fx+rZhvDHvyD/xQv3IxMcQv4z0qJ9GNiP6tJwXJkE9zTxwgmRDc8DK8MN6AUp2Z+guh1XN4OsQrwtTKiCZIAhVG8Rv3RV5Jj7MmPPSpq7H9N843z3WuofSwpHSP+8iUYAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/案例.png":
/*!***************************!*\
  !*** ./src/assets/案例.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAP1SURBVEiJpZZbTFxVFIa/tc+BDrRFATFAi1oBK9qbLQTEWEZt2qoPfdCofdBo1NAn00c1RIMPxkdMY4yXarUmNl7iJWmaGNNStRSh0SpYCEFiIikkttUWYQbmnL18mDl0ZjgzUPsnO1ln7X/9/9p7zt5nhKVg5M12o7QpuhVYBfyamtkAnBX43lrnKA3tby8mJXlnh956XYTdoBVLagz5S1UP0bDnuSszHHpnt4h0gq3PoveEy2hr1vOYus4O6p4ZXdTQGdr/kEXbc3V4JTBW3vVvf/qTnIZm6L2XUOkEEJETV2uoqneJ2kfTTecN3YGDUd/Yrqs1CYNj7F6v4aluADdIWkeexDqT+Qr3VTbVtRZXlAbPdxSVlr1xfuT3ozMTF764NH4hV531nYeBy4Zm8KO9YqUy+wfdVbK6LIi3FVeWtRRXlDaNHenPbKKxruO6DbXBZn0VblznDhyMeusf75ak4aHTYZ0dW/vgxglNUCkFCHDy0tnzL078PJ7N+2btAxuDeJ1TRPWZz3/J5ghM+use2+m6Ax9HVc0/YYYj/hwxsUzaBB7CsuXXlnfdcl+5qGIQrhGHFRim1aKpmkE/hoTrRdyBT6Ou2oIqDOfCDJvcCJNqSaB4WGLWx0PwUVRhCo9zCgkBB2FWfUrFAUyoHqr3uqhsFzXlYfP1JkIVFotiAeskheNquSg+f/se00BMLZ5aPDEogqgTqqfq3+CKOFUos2GEiAguDmNzM1Prh7/NccsksaukqmzfjZub5tSCSqie4Fa6qNmG4IQRDEIhcGvh8pVjDdvvAbDJ3USDVafFxQgrxAXMjhx9WVdwUhKpm0U1/XTM35EGsQBmfjYZrCqIRID5l0ZRRE0P6ckkvRXAReVE5g238D7/MxGL1f7W3RfW8tc3b7ltZ8n1FUGVIKAmsYCoHE8aYgbFmrowsQA1BUVFc5vub8vHSYdYNx6WV2NHXYNL5trDMT4XnwlW74hQVVBYnNMwx1dPcEZd8ZzP1Ojz+cyG49MXN53p603PddXU1+2pWF0bXhH6DiKenBaAwlPHDqiYm7IJc5u3Lnkb01H403fHw/KJLW1RA2DUPeBYcbPH/zEDCNMy1vkS0l7JZf09Y6Br0gs7qmvoqK65IrP+f6em7h4eWJmRFPljtrF1TYZhwY89Txgj+0n7RoZBhaFkkNKChkV68K0vzyZaWt4HMEE20dz6obHmEVFD/uF4oo4npMaifHklMMtYYYBI36lXUc17LpcOORxvbvwgIxPK6+0tieC+gJD3uOTBDwqvzTY3Hl7QQr6qyMn+KIYoyMtLshG68bUzfmdTd27KEnDZGBBpQ4M4+ccIXzsB8hkF+A/HvIeADxxWAAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/views/pollution/pollutionPunishList/index.vue":
/*!***********************************************************!*\
  !*** ./src/views/pollution/pollutionPunishList/index.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_634c36d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=634c36d1&scoped=true& */ "./src/views/pollution/pollutionPunishList/index.vue?vue&type=template&id=634c36d1&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/pollution/pollutionPunishList/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_634c36d1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=634c36d1&lang=scss&scoped=true& */ "./src/views/pollution/pollutionPunishList/index.vue?vue&type=style&index=0&id=634c36d1&lang=scss&scoped=true&");
/* harmony import */ var _index_vue_vue_type_style_index_1_id_634c36d1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=1&id=634c36d1&lang=scss&scoped=true& */ "./src/views/pollution/pollutionPunishList/index.vue?vue&type=style&index=1&id=634c36d1&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_634c36d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_634c36d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "634c36d1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/pollution/pollutionPunishList/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/pollution/pollutionPunishList/index.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./src/views/pollution/pollutionPunishList/index.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/pollutionPunishList/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/pollution/pollutionPunishList/index.vue?vue&type=style&index=0&id=634c36d1&lang=scss&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./src/views/pollution/pollutionPunishList/index.vue?vue&type=style&index=0&id=634c36d1&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_634c36d1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=634c36d1&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/pollutionPunishList/index.vue?vue&type=style&index=0&id=634c36d1&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_634c36d1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_634c36d1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_634c36d1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_634c36d1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/pollution/pollutionPunishList/index.vue?vue&type=style&index=1&id=634c36d1&lang=scss&scoped=true&":
/*!*********************************************************************************************************************!*\
  !*** ./src/views/pollution/pollutionPunishList/index.vue?vue&type=style&index=1&id=634c36d1&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_634c36d1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=1&id=634c36d1&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/pollutionPunishList/index.vue?vue&type=style&index=1&id=634c36d1&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_634c36d1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_634c36d1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_634c36d1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_1_id_634c36d1_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/pollution/pollutionPunishList/index.vue?vue&type=template&id=634c36d1&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./src/views/pollution/pollutionPunishList/index.vue?vue&type=template&id=634c36d1&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_634c36d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=634c36d1&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/pollutionPunishList/index.vue?vue&type=template&id=634c36d1&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_634c36d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_634c36d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3BvbGx1dGlvbi9wb2xsdXRpb25QdW5pc2hMaXN0L2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL3BvbGx1dGlvblB1bmlzaExpc3QvaW5kZXgudnVlPzU1ODkiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL3NhbWUtdmFsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lcy5zdHJpbmcuc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vcG9sbHV0aW9uUHVuaXNoTGlzdC9pbmRleC52dWU/NzMwZiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL3BvbGx1dGlvblB1bmlzaExpc3QvaW5kZXgudnVlP2ViMWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9wb2xsdXRpb25QdW5pc2hMaXN0L2luZGV4LnZ1ZT9iNjgxIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vcG9sbHV0aW9uUHVuaXNoTGlzdC9pbmRleC52dWU/YTU3YyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3ZvY3MucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMv5YWs5Y+4LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL+WuoeaJuS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy/moYjkvosucG5nIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vcG9sbHV0aW9uUHVuaXNoTGlzdC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9wb2xsdXRpb25QdW5pc2hMaXN0L2luZGV4LnZ1ZT80M2E4Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vcG9sbHV0aW9uUHVuaXNoTGlzdC9pbmRleC52dWU/MGZmNCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL3BvbGx1dGlvblB1bmlzaExpc3QvaW5kZXgudnVlPzNjZDUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9wb2xsdXRpb25QdW5pc2hMaXN0L2luZGV4LnZ1ZT9lMzUzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErRUE7QUFLQTtBQUVBO0FBQ0EsZUFEQTtBQUVBO0FBQ0E7QUFEQSxHQUZBO0FBS0EsTUFMQSxrQkFLQTtBQUNBO0FBQ0EsZ0JBREE7QUFFQSxvQkFGQTtBQUdBLG9CQUhBO0FBSUEscUJBSkE7QUFJQTtBQUNBLHVCQUxBO0FBS0E7QUFDQTtBQUNBLGVBREE7QUFDQTtBQUNBLGlCQUZBLENBRUE7O0FBRkEsT0FOQTtBQVVBLGtCQVZBO0FBV0EsZ0JBWEE7QUFZQSxjQVpBO0FBYUEsY0FiQTtBQWNBO0FBZEE7QUFnQkEsR0F0QkE7QUF1QkEsU0F2QkEscUJBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBN0JBO0FBOEJBO0FBQ0EsZUFEQSx1QkFDQSxHQURBLEVBQ0EsS0FEQSxFQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVBBLE1BT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSkEsTUFJQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBLEtBbkJBO0FBb0JBLFlBcEJBLHNCQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBeEJBO0FBeUJBLFlBekJBLG9CQXlCQSxHQXpCQSxFQXlCQSxJQXpCQSxFQXlCQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBREE7QUFFQTtBQUZBO0FBSUEsT0FOQSxNQU1BO0FBQ0E7QUFDQTtB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QUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDeENmO0FBQUE7QUFBQSx3Q0FBMFMsQ0FBZ0Isc1VBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBOVQ7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy83My5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cbiAgPGRpdj5cbiAgICA8dmFuLW5hdi1iYXIgY2xhc3M9XCJ2YW50bmF2YmFyXCIgOnRpdGxlPVwidG9wVGl0bGVcIiBsZWZ0LWFycm93IEBjbGljay1sZWZ0PVwiJHJvdXRlci5nbygtMSlcIj5cbiAgICAgIDx0ZW1wbGF0ZSAjcmlnaHQ+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwiaW50by1tYXBcIiBAY2xpY2s9XCJzaG93RmlsdGVyID0gdHJ1ZVwiPuetm+mAiTwvc3Bhbj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC92YW4tbmF2LWJhcj5cblxuICAgIDwhLS3ooYzmlL/ljLrliJLnrZvpgInlvLnmoYYtLT5cbiAgICA8YXJlYUZpbHRlciA6aXNTaG93PVwic2hvd0ZpbHRlclwiIEBnZXRGaWx0ZXI9XCJnZXREaXZpc2lvblwiIEBjbG9zZT1cInNob3dGaWx0ZXI9ZmFsc2VcIi8+XG5cbiAgICA8dmFuLXNlYXJjaCB2LW1vZGVsPVwic2VhcmNoXCIgc2hhcGU9XCJyb3VuZFwiIEBzZWFyY2g9XCJvblNlYXJjaFwiIHBsYWNlaG9sZGVyPVwiXCIvPlxuICAgIDxkaXYgY2xhc3M9XCJyZWZyZXNoYm94XCI+XG4gICAgICA8dmFuLXB1bGwtcmVmcmVzaCB2LW1vZGVsPVwicmVmcmVzaGluZ1wiIEByZWZyZXNoPVwib25SZWZyZXNoXCI+XG4gICAgICAgIDx2YW4tbGlzdCB2LW1vZGVsPVwibG9hZGluZ1wiIDpmaW5pc2hlZD1cImZpbmlzaGVkXCIgZmluaXNoZWQtdGV4dD1cIuayoeacieabtOWkmuS6hlwiXG4gICAgICAgICAgICAgICAgICA6aW1tZWRpYXRlLWNoZWNrPVwiZmFsc2VcIiBAbG9hZD1cIm9uTG9hZFwiIDpvZmZzZXQ9JzUwJz5cbiAgICAgICAgICA8ZGl2IHYtZm9yPVwiaXRlbSBpbiBwdWJsaWNEYXRhXCIgY2xhc3M9XCJhcm91bmQtd3JhcHBlclwiIEBjbGljaz1cImdvRGV0YWlsKGl0ZW0seHF0eXBlKVwiPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJ4cXR5cGU9PSfooYzmlL/lpITnvZonXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJAL2Fzc2V0cy/lrqHmibkucG5nXCIgY2xhc3M9XCJsaWltZ1wiPlxuICAgICAgICAgICAgICAgIHt7aXRlbS5tZXNzYWdlfX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNcIj57e2l0ZW0uZW50TmFtZX19PC9kaXY+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJ4cXR5cGU9PSfovpDlsITlronlhagnXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lIG5vd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMvdm9jcy5wbmdcIj57e2l0ZW0uZW50TmFtZX19XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWlmPVwieHF0eXBlPT0n5bu66K6+6aG555uuJ1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZSBub3dyYXBcIj5cbiAgICAgICAgICAgICAgICA8aW1nIHNyYz1cIkAvYXNzZXRzL+ahiOS+iy5wbmdcIj57e2l0ZW0ucHJvamVjdE5hbWV9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc1wiPnt7aXRlbS5lbnROYW1lfX08L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInhxdHlwZT09J+WcqOe6v+ebkeaOpydcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWUgbm93cmFwXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJAL2Fzc2V0cy/moYjkvosucG5nXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8IS0tIHt7aXRlbS5wc25hbWV9fSAtLT5cclxuXHRcdFx0XHRcdFx0XHRcdHt7aXRlbS5RWU1DfX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJ4cXR5cGU9PSfnm5HmtYvorr7lpIcnXCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYW1lIG5vd3JhcFwiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMv5qGI5L6LLnBuZ1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PCEtLSB7e2l0ZW0uZGV2aWNlTmFtZX19IC0tPlxyXG5cdFx0XHRcdFx0XHRcdFx0e3tpdGVtLlBLTUN9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc1wiPlxyXG5cdFx0XHRcdFx0XHRcdDwhLS0ge3tpdGVtLmVudE5hbWV9fSAtLT5cclxuXHRcdFx0XHRcdFx0XHRcdHt7aXRlbS5RWU1DfX1cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInhxdHlwZT09J+esrOS6jOasoeaxoeafk+a6kOaZruafpSdcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWUgbm93cmFwXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJAL2Fzc2V0cy/moYjkvosucG5nXCI+e3tpdGVtLmVudE5hbWV9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInhxdHlwZT09J+WNsemZqeW6n+eJqSdcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWUgbm93cmFwXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJAL2Fzc2V0cy/lhazlj7gucG5nXCI+e3tpdGVtLnF5bWN9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc1wiPnt7aXRlbS5oeW1jfX08L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1pZj1cInhxdHlwZT09J+eOr+S/neaKleiviSdcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hbWUgbm93cmFwXCI+XG4gICAgICAgICAgICAgICAgPGltZyBzcmM9XCJAL2Fzc2V0cy/moYjkvosucG5nXCI+e3tpdGVtLnRzbnJ9fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlc1wiPnt7aXRlbS5zemR6fX08L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdmFuLWxpc3Q+XG4gICAgICA8L3Zhbi1wdWxsLXJlZnJlc2g+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuICBpbXBvcnQge1xuICAgIHh6Y2ZMaXN0LCB4ZnRzTGlzdCwgcmFkaWF0aW9uTGlzdCwgc29saWRFbnRMaXN0LCBjb25zdHJ1Y3RMaXN0LFxuICAgIHNnc3BzTGlzdCwgbW9uaXRvckxpc3QsIG1vbml0b3JEZXZpY2VMaXN0LFxyXG5cdFx0c2hvd1h0dGpEZXRhaWxcbiAgfSBmcm9tICdAL2FwaS9wb2xsdXRpb25fc291cmNlJztcbiAgaW1wb3J0IGFyZWFGaWx0ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9hcmVhRmlsdGVyXCI7XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6IFwiaW5kZXhcIixcbiAgICBjb21wb25lbnRzOiB7XG4gICAgICBhcmVhRmlsdGVyXG4gICAgfSxcbiAgICBkYXRhKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgc2VhcmNoOiAnJyxcbiAgICAgICAgcHVibGljRGF0YTogW10sXG4gICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICBmaW5pc2hlZDogZmFsc2UsIC8vIOaYr+WQpuW3suWKoOi9veWujOaIkO+8jOWKoOi9veWujOaIkOWQjuS4jeWGjeinpuWPkWxvYWTkuovku7ZcbiAgICAgICAgcmVmcmVzaGluZzogZmFsc2UsIC8vIOS4i+aLieeKtuaAgVxuICAgICAgICBsaXN0UXVlcnk6IHtcbiAgICAgICAgICBwYWdlOiAxLCAvLyDlvZPliY3pobXnoIHmlbBcbiAgICAgICAgICBsaW1pdDogMjAsIC8vIOS4gOmhteaYvuekujEw5p2hXG4gICAgICAgIH0sXG4gICAgICAgIHRvcFRpdGxlOiAnJyxcbiAgICAgICAgeHF0eXBlOiBcIlwiLFxuICAgICAgICB4enFoOiAnJyxcbiAgICAgICAgZnNmcTogXCJcIixcbiAgICAgICAgc2hvd0ZpbHRlcjogZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG4gICAgICB0aGlzLnRvcFRpdGxlID0gdGhpcy4kcm91dGUucXVlcnkudGl0bGU7XG4gICAgICB0aGlzLnhxdHlwZSA9IHRoaXMuJHJvdXRlLnF1ZXJ5LnhxdHlwZTtcbiAgICAgIHRoaXMueHpxaCA9IHRoaXMuJHJvdXRlLnF1ZXJ5Lnh6cWg7XHJcblx0XHRcdHRoaXMueHpxeWRtID0gdGhpcy4kcm91dGUucXVlcnkueHpxeWRtO1xuICAgICAgdGhpcy5sb2FkRGF0YSgpO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xuICAgICAgZ2V0RGl2aXNpb24oYXJyLGFycmRtKSB7XG4gICAgICAgIGlmKHRoaXMueHF0eXBlIT0n5Zyo57q/55uR5o6nJyYmdGhpcy54cXR5cGUhPSfnm5HmtYvorr7lpIcnKXtcclxuICAgICAgICBcdGlmKGFyci5sZW5ndGg+MCl7XHJcbiAgICAgICAgXHRcdHRoaXMueHpxaCA9IGFyci5qb2luKCcsJyk7XHJcbiAgICAgICAgXHRcdHRoaXMucHVibGljRGF0YSA9IFtdO1xyXG4gICAgICAgIFx0XHR0aGlzLmxpc3RRdWVyeS5wYWdlID0gMTtcclxuICAgICAgICBcdFx0dGhpcy5sb2FkRGF0YSgpO1xyXG4gICAgICAgIFx0fVxyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgIFx0aWYoYXJyZG0ubGVuZ3RoPjApe1xyXG4gICAgICAgIFx0XHR0aGlzLnh6cXlkbSA9IGFycmRtLmpvaW4oJywnKTtcclxuICAgICAgICBcdFx0dGhpcy5wdWJsaWNEYXRhID0gW107XHJcbiAgICAgICAgXHRcdHRoaXMubGlzdFF1ZXJ5LnBhZ2UgPSAxO1xyXG4gICAgICAgIFx0fWVsc2V7XHJcbiAgICAgICAgXHRcdHRoaXMueHpxeWRtID0gdGhpcy4kcm91dGUucXVlcnkueHpxeWRtO1xyXG4gICAgICAgIFx0fVxyXG4gICAgICAgIFx0dGhpcy5sb2FkRGF0YSgpO1xyXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBvblNlYXJjaCgpIHtcbiAgICAgICAgdGhpcy5wdWJsaWNEYXRhID0gW107XG4gICAgICAgIHRoaXMubGlzdFF1ZXJ5LnBhZ2UgPSAxO1xuICAgICAgICB0aGlzLmxvYWREYXRhKCk7XG4gICAgICB9LFxuICAgICAgZ29EZXRhaWwocm93LCB0eXBlKSB7XG4gICAgICAgIGxldCByb3V0ZXJOYW1lID0gJyc7XG4gICAgICAgIGxldCBxdWVyeU9iaiA9IHt9O1xuICAgICAgICBpZiAodHlwZSA9PT0gJ+i+kOWwhOWuieWFqCcpIHtcbiAgICAgICAgICByb3V0ZXJOYW1lID0gJ3NhZmVEZXRhaWwnO1xuICAgICAgICAgIHF1ZXJ5T2JqID0ge1xuICAgICAgICAgICAgaWQ6IHJvdy5mc2FxR3lxeUlkLFxuICAgICAgICAgICAgdGl0bGU6IFwi6L6Q5bCE5a6J5YWoXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ+W7uuiuvumhueebricpIHtcbiAgICAgICAgICBpZiAodGhpcy50b3BUaXRsZSA9PT0gJ+eOr+ivhOmhueebricpIHtcbiAgICAgICAgICAgIHJvdXRlck5hbWUgPSAnYnVpbGRQcm9qZWN0SW5mbyc7XG4gICAgICAgICAgICBxdWVyeU9iaiA9IHtcbiAgICAgICAgICAgICAgaWQ6IHJvdy5pZCxcbiAgICAgICAgICAgICAgdHlwZTogdGhpcy4kcm91dGUucXVlcnkuY3NcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9wVGl0bGUgPT09ICflpIfmoYjpobnnm64nKSB7XG4gICAgICAgICAgICByb3V0ZXJOYW1lID0gJ2J1aWxkRmlsaW5nc0RldGFpbCc7XG4gICAgICAgICAgICBxdWVyeU9iaiA9IHtcbiAgICAgICAgICAgICAgaWQ6IHJvdy5pZCxcbiAgICAgICAgICAgICAgdHlwZTogdGhpcy4kcm91dGUucXVlcnkuY3NcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9wVGl0bGUgPT09ICfkvIHkuJroh6rpqozmlLbpobnnm64nKSB7XG4gICAgICAgICAgICByb3V0ZXJOYW1lID0gJ2J1aWxkU2VsZmFjY2VwdHRJbmZvJztcbiAgICAgICAgICAgIHF1ZXJ5T2JqID0ge1xuICAgICAgICAgICAgICBpZDogcm93LmlkLFxuICAgICAgICAgICAgICB0eXBlOiB0aGlzLiRyb3V0ZS5xdWVyeS5jc1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAn6KGM5pS/5aSE572aJykge1xuICAgICAgICAgIHJvdXRlck5hbWUgPSAncGVuYWx0eURldGFpbCc7XG4gICAgICAgICAgcXVlcnlPYmogPSB7XG4gICAgICAgICAgICBpZDogcm93LmlkLFxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnhxdHlwZSA9PT0gJ+WcqOe6v+ebkeaOpycpIHtcbiAgICAgICAgICBsZXQgY3MgPSB0aGlzLiRyb3V0ZS5xdWVyeS5jcztcbiAgICAgICAgICBpZiAoY3MgIT09ICfop4bpopEnKSB7XG4gICAgICAgICAgICByb3V0ZXJOYW1lID0gJ2pjcGtEZXRhaWwnO1xuICAgICAgICAgICAgcXVlcnlPYmogPSB7XG4gICAgICAgICAgICAgIC8vIHBzY29kZTogcm93LnBzY29kZSxcbiAgICAgICAgICAgICAgLy8gbmFtZTogcm93LnBzbmFtZVxyXG5cdFx0XHRcdFx0XHRcdHBzY29kZTogcm93LlFZSUQsXHJcblx0XHRcdFx0XHRcdFx0bmFtZTpyb3cuUVlNQ1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnhxdHlwZSA9PT0gJ+ebkea1i+iuvuWkhycpIHtcbiAgICAgICAgICByb3V0ZXJOYW1lID0gJ3BvcnRJbmZvRGV0YWlsJztcbiAgICAgICAgICBxdWVyeU9iaiA9IHtcbiAgICAgICAgICAgIC8vIGRldmljZUlkOiByb3cuZGV2aWNlSWQsXG4gICAgICAgICAgICAvLyBwc0NvZGU6IHJvdy5wc0NvZGUsXG4gICAgICAgICAgICAvLyBuYW1lOiByb3cuZGV2aWNlTmFtZSxcbiAgICAgICAgICAgIC8vIHR5cGU6IHRoaXMuZnNmcSxcclxuXHRcdFx0XHRcdFx0ZGV2aWNlSWQ6IHJvdy5TQkJNLFxyXG5cdFx0XHRcdFx0XHRwc0NvZGU6cm93LlFZSUQsXHJcblx0XHRcdFx0XHRcdHNiaWQ6cm93LlNCSUQsXHJcblx0XHRcdFx0XHRcdG5hbWU6cm93LlBLTUMsXHJcblx0XHRcdFx0XHRcdHR5cGU6dGhpcy5mc2ZxXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMueHF0eXBlID09PSAn56ys5LqM5qyh5rGh5p+T5rqQ5pmu5p+lJykge1xuICAgICAgICAgIGlmIChyb3cuYmFzZUlkICE9PSAnJykge1xuICAgICAgICAgICAgaWYgKHRoaXMudG9wVGl0bGUgPT09ICflt6XkuJrmupDkvIHkuJonKSB7XG4gICAgICAgICAgICAgIHJvdXRlck5hbWUgPSAnaW5kdXN0cnlTb3VyY2UnO1xuICAgICAgICAgICAgICBxdWVyeU9iaiA9IHtcbiAgICAgICAgICAgICAgICBpZDogcm93LmJhc2VJZCxcbiAgICAgICAgICAgICAgICBuYW1lOiByb3cuZW50TmFtZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudG9wVGl0bGUgPT09ICfpm4bkuK3lvI/msaHmn5PlpITnkIborr7mlr0nKSB7XG4gICAgICAgICAgICAgIHJvdXRlck5hbWUgPSAnaGFuZGxlRmFjaWxpdHknO1xuICAgICAgICAgICAgICBxdWVyeU9iaiA9IHtcbiAgICAgICAgICAgICAgICBpZDogcm93LmJhc2VJZCxcbiAgICAgICAgICAgICAgICBuYW1lOiByb3cuZW50TmFtZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICfljbHpmanlup/niaknKSB7XG4gICAgICAgICAgcm91dGVyTmFtZSA9ICd3YXN0ZURldGFpbCc7XG4gICAgICAgICAgcXVlcnlPYmogPSB7XG4gICAgICAgICAgICBmcm9tOiBcIuWNsemZqeW6n+eJqVwiLFxuICAgICAgICAgICAgaWQ6IHJvdy5pZCxcbiAgICAgICAgICAgIG5hbWU6IHJvdy5xeW1jXG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICfnjq/kv53mipXor4knKSB7XG4gICAgICAgICAgcm91dGVyTmFtZSA9ICdjb21wbGFpbnREZXRhaWwnO1xuICAgICAgICAgIHF1ZXJ5T2JqID0ge1xuICAgICAgICAgICAgaWQ6IHJvdy5pZCxcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xuICAgICAgICAgIG5hbWU6IHJvdXRlck5hbWUsXG4gICAgICAgICAgcXVlcnk6IHF1ZXJ5T2JqXG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGxvYWREYXRhKCkge1xuICAgICAgICB0aGlzLnF1ZXJ5RGF0YSgpXG4gICAgICB9LFxuICAgICAgcXVlcnlEYXRhKCkge1xuICAgICAgICBsZXQgZnVuY3Rpb25OYW1lID0gJyc7XG4gICAgICAgIGxldCBwYXJhbXMgPSB7fTtcbiAgICAgICAgaWYgKHRoaXMueHF0eXBlID09ICfovpDlsITlronlhagnKSB7XG4gICAgICAgICAgcGFyYW1zID0ge1xuICAgICAgICAgICAgZW50TmFtZTogdGhpcy5zZWFyY2gsXG4gICAgICAgICAgICBkaXZpc2lvbk5hbWU6IHRoaXMueHpxaCxcbiAgICAgICAgICAgIHBhZ2VOdW06IHRoaXMubGlzdFF1ZXJ5LnBhZ2UsXG4gICAgICAgICAgICBwYWdlU2l6ZTogdGhpcy5saXN0UXVlcnkubGltaXQsXG4gICAgICAgICAgfVxuICAgICAgICAgIGZ1bmN0aW9uTmFtZSA9IHJhZGlhdGlvbkxpc3Q7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy54cXR5cGUgPT0gJ+W7uuiuvumhueebricpIHtcbiAgICAgICAgICBwYXJhbXMgPSB7XG4gICAgICAgICAgICBwcm9qZWN0TmFtZTogdGhpcy5zZWFyY2gsXG4gICAgICAgICAgICB0eXBlOiB0aGlzLiRyb3V0ZS5xdWVyeS5jcyxcbiAgICAgICAgICAgIGRpdmlzaW9uTmFtZTogdGhpcy54enFoLFxuICAgICAgICAgICAgcGFnZU51bTogdGhpcy5saXN0UXVlcnkucGFnZSxcbiAgICAgICAgICAgIHBhZ2VTaXplOiB0aGlzLmxpc3RRdWVyeS5saW1pdCxcbiAgICAgICAgICB9XG4gICAgICAgICAgZnVuY3Rpb25OYW1lID0gY29uc3RydWN0TGlzdDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnhxdHlwZSA9PSAn6KGM5pS/5aSE572aJykge1xuICAgICAgICAgIHBhcmFtcyA9IHtcbiAgICAgICAgICAgIGVudE5hbWU6IHRoaXMuc2VhcmNoLFxuICAgICAgICAgICAgZGl2aXNpb25OYW1lOiB0aGlzLnh6cWgsXG4gICAgICAgICAgICBwYWdlTnVtOiB0aGlzLmxpc3RRdWVyeS5wYWdlLFxuICAgICAgICAgICAgcGFnZVNpemU6IHRoaXMubGlzdFF1ZXJ5LmxpbWl0LFxuICAgICAgICAgIH1cbiAgICAgICAgICBmdW5jdGlvbk5hbWUgPSB4emNmTGlzdDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnhxdHlwZSA9PSAn5Zyo57q/55uR5o6nJ3x8dGhpcy54cXR5cGU9PSfnm5HmtYvorr7lpIcnKSB7XG4gICAgICAgICAgdGhpcy56eEprQW5kU2IoKTtcclxuXHRcdFx0XHRcdC8vIGZ1bmN0aW9uTmFtZSA9IG1vbml0b3JMaXN0O1xuICAgICAgICAvLyB9IGVsc2UgaWYgKHRoaXMueHF0eXBlID09ICfnm5HmtYvorr7lpIcnKSB7XG4gICAgICAgIC8vICAgbGV0IHNmemQgPSBcIlwiO1xuICAgICAgICAvLyAgIGxldCBjcyA9IHRoaXMuJHJvdXRlLnF1ZXJ5LmNzO1xuICAgICAgICAvLyAgIGlmIChjcyA9PSAn6Z2e6YeN54K55bqf5rC0JyB8fCBjcyA9PSAn6YeN54K55bqf5rC0JyB8fCBjcyA9PSAn5bqf5rC0Jykge1xuICAgICAgICAvLyAgICAgdGhpcy5mc2ZxID0gXCLlup/msLRcIlxuICAgICAgICAvLyAgIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICB0aGlzLmZzZnEgPSBcIuW6n+awlFwiXG4gICAgICAgIC8vICAgfVxuICAgICAgICAvLyAgIGlmIChjcyA9PSAn6YeN54K55bqf5rC0JyB8fCBjcyA9PSAn6YeN54K55bqf5rCUJykge1xuICAgICAgICAvLyAgICAgc2Z6ZCA9IDFcbiAgICAgICAgLy8gICB9IGVsc2UgaWYgKGNzID09ICfpnZ7ph43ngrnlup/msLQnIHx8IGNzID09ICfpnZ7ph43ngrnlup/msJQnKSB7XG4gICAgICAgIC8vICAgICBzZnpkID0gMFxuICAgICAgICAvLyAgIH1cbiAgICAgICAgLy8gICBwYXJhbXMgPSB7XG4gICAgICAgIC8vICAgICBuYW1lOiB0aGlzLnNlYXJjaCxcbiAgICAgICAgLy8gICAgIGRpdmlzaW9uTmFtZTogdGhpcy54enFoLFxuICAgICAgICAvLyAgICAgdHlwZTogdGhpcy5mc2ZxLFxuICAgICAgICAvLyAgICAgc2Z6ZDogc2Z6ZCxcbiAgICAgICAgLy8gICAgIHBhZ2VOdW06IHRoaXMubGlzdFF1ZXJ5LnBhZ2UsXG4gICAgICAgIC8vICAgICBwYWdlU2l6ZTogdGhpcy5saXN0UXVlcnkubGltaXQsXG4gICAgICAgIC8vICAgfVxuICAgICAgICAvLyAgIGZ1bmN0aW9uTmFtZSA9IG1vbml0b3JEZXZpY2VMaXN0O1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMueHF0eXBlID09ICfnrKzkuozmrKHmsaHmn5PmupDmma7mn6UnKSB7XG4gICAgICAgICAgcGFyYW1zID0ge1xuICAgICAgICAgICAgbmFtZTogdGhpcy5zZWFyY2gsXG4gICAgICAgICAgICBkaXZpc2lvbk5hbWU6IHRoaXMueHpxaCxcbiAgICAgICAgICAgIHR5cGU6IHRoaXMuJHJvdXRlLnF1ZXJ5LmNzLFxuICAgICAgICAgICAgcGFnZU51bTogdGhpcy5saXN0UXVlcnkucGFnZSxcbiAgICAgICAgICAgIHBhZ2VTaXplOiB0aGlzLmxpc3RRdWVyeS5saW1pdCxcbiAgICAgICAgICB9XG4gICAgICAgICAgZnVuY3Rpb25OYW1lID0gc2dzcHNMaXN0O1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMueHF0eXBlID09ICfljbHpmanlup/niaknKSB7XG4gICAgICAgICAgcGFyYW1zID0ge1xuICAgICAgICAgICAgZW50TmFtZTogdGhpcy5zZWFyY2gsXG4gICAgICAgICAgICBkaXZpc2lvbk5hbWU6IHRoaXMueHpxaCxcbiAgICAgICAgICAgIHBhZ2VOdW06IHRoaXMubGlzdFF1ZXJ5LnBhZ2UsXG4gICAgICAgICAgICBwYWdlU2l6ZTogdGhpcy5saXN0UXVlcnkubGltaXQsXG4gICAgICAgICAgfVxuICAgICAgICAgIGZ1bmN0aW9uTmFtZSA9IHNvbGlkRW50TGlzdDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnhxdHlwZSA9PSAn546v5L+d5oqV6K+JJykge1xuICAgICAgICAgIHBhcmFtcyA9IHtcbiAgICAgICAgICAgIG5hbWU6IHRoaXMuc2VhcmNoLFxuICAgICAgICAgICAgdHlwZTogdGhpcy50b3BUaXRsZSA9PSAnMTIzNDXmipXor4nku7YnID8gJzEyMzQ1JyA6ICcxMjM2OScsXG4gICAgICAgICAgICBkaXZpc2lvbk5hbWU6IHRoaXMueHpxaCxcbiAgICAgICAgICAgIHBhZ2VOdW06IHRoaXMubGlzdFF1ZXJ5LnBhZ2UsXG4gICAgICAgICAgICBwYWdlU2l6ZTogdGhpcy5saXN0UXVlcnkubGltaXQsXG4gICAgICAgICAgfVxuICAgICAgICAgIGZ1bmN0aW9uTmFtZSA9IHhmdHNMaXN0O1xuICAgICAgICB9XHJcblx0XHRcdFx0aWYoKHRoaXMueHF0eXBlICE9ICflnKjnur/nm5HmjqcnJiZ0aGlzLnhxdHlwZSE9J+ebkea1i+iuvuWkhycpKXtcclxuXHRcdFx0XHRcdGZ1bmN0aW9uTmFtZShwYXJhbXMpLnRoZW4ocmVzID0+IHtcclxuXHRcdFx0XHRcdCAgbGV0IHJkYXRhID0gcmVzLmRhdGE7XHJcblx0XHRcdFx0XHQgIGlmICh0aGlzLmxpc3RRdWVyeS5wYWdlID09IDEpIHtcclxuXHRcdFx0XHRcdCAgICB0aGlzLnB1YmxpY0RhdGEgPSByZGF0YS5yZWNvcmRzO1xyXG5cdFx0XHRcdFx0ICB9IGVsc2Uge1xyXG5cdFx0XHRcdFx0ICAgIHJkYXRhLnJlY29yZHMuZm9yRWFjaChpdGVtID0+IHtcclxuXHRcdFx0XHRcdCAgICAgIHRoaXMucHVibGljRGF0YS5wdXNoKGl0ZW0pO1xyXG5cdFx0XHRcdFx0ICAgIH0pO1xyXG5cdFx0XHRcdFx0ICB9XHJcblx0XHRcdFx0XHQgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0ICBpZiAocmRhdGEucmVjb3Jkcy5sZW5ndGggPT09IHRoaXMubGlzdFF1ZXJ5LmxpbWl0ICYmIHJkYXRhLnRvdGFsICE9PSB0aGlzLmxpc3RRdWVyeS5saW1pdCkge1xyXG5cdFx0XHRcdFx0ICAgIHRoaXMubGlzdFF1ZXJ5LnBhZ2UrKztcclxuXHRcdFx0XHRcdCAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRcdCAgfSBlbHNlIHtcclxuXHRcdFx0XHRcdCAgICB0aGlzLmZpbmlzaGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdCAgfVxyXG5cdFx0XHRcdFx0fSlcclxuXHRcdFx0XHR9XG4gICAgICAgIFxuICAgICAgfSxcclxuXHRcdFx0enhKa0FuZFNiKCl7XHJcblx0XHRcdFx0bGV0IGluZm8yID0ge1xyXG5cdFx0XHRcdFx0cXltY2N4OiB0aGlzLnNlYXJjaCxcclxuXHRcdFx0XHRcdHh6cXlkbTogdGhpcy54enF5ZG0sXHJcblx0XHRcdFx0XHQvLyBkaXZpc2lvbk5hbWU6IHRoaXMueHpxaCxcclxuXHRcdFx0XHRcdC8vIHR5cGU6dHlwZSxcclxuXHRcdFx0XHRcdHF5cGtzYnR5cGU6J3F5JyxcclxuXHRcdFx0XHRcdHBhZ2VOdW06IHRoaXMubGlzdFF1ZXJ5LnBhZ2UsXHJcblx0XHRcdFx0XHRwYWdlU2l6ZTogdGhpcy5saXN0UXVlcnkubGltaXQsXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGxldCBjcyA9IHRoaXMuJHJvdXRlLnF1ZXJ5LmNzO1xyXG5cdFx0XHRcdGlmKGNzPT0n6YeN54K5J3x8Y3M9PSfph43ngrnlup/msLQnfHxjcz09J+mHjeeCueW6n+awlCcpe1xyXG5cdFx0XHRcdFx0aW5mbzIuZ2xqYiA9ICd6ZCdcclxuXHRcdFx0XHR9ZWxzZSBpZihjcz09XCLpnZ7ph43ngrlcInx8Y3M9PSfpnZ7ph43ngrnlup/msLQnfHxjcz09J+mdnumHjeeCueW6n+awlCcpe1xyXG5cdFx0XHRcdFx0aW5mbzIuZ2xqYiA9ICdmemQnXHJcblx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRpbmZvMi5nbGpiID0gJ2FsbCdcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYoY3M9PSflup/msLQnfHxjcz09J+mHjeeCueW6n+awtCd8fGNzPT0n6Z2e6YeN54K55bqf5rC0Jyl7XHJcblx0XHRcdFx0XHRpbmZvMi5xeXBrc2J0eXBlPVwicGtcIjtcclxuXHRcdFx0XHRcdGluZm8yLndybHggPSAnMSc7XHJcblx0XHRcdFx0XHR0aGlzLmZzZnEgPSBcIuW6n+awtFwiO1xyXG5cdFx0XHRcdH1lbHNlIGlmKGNzPT0n5bqf5rCUJ3x8Y3M9PSfph43ngrnlup/msJQnfHxjcz09J+mdnumHjeeCueW6n+awlCcpe1xyXG5cdFx0XHRcdFx0aW5mbzIucXlwa3NidHlwZT1cInBrXCI7XHJcblx0XHRcdFx0XHRpbmZvMi53cmx4ID0gJzInO1xyXG5cdFx0XHRcdFx0dGhpcy5mc2ZxID0gXCLlup/msJRcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYoY3M9PSfljLvpmaInKXtcclxuXHRcdFx0XHRcdGluZm8yLmh5bGJkbSA9ICc1J1xyXG5cdFx0XHRcdH1lbHNlIGlmKGNzPT0n5aSE55CG5Y6CJyl7XHJcblx0XHRcdFx0XHRpbmZvMi5oeWxiZG0gPSAnMTAnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHNob3dYdHRqRGV0YWlsKGluZm8yKS50aGVuKHJlcz0+e1xyXG5cdFx0XHRcdFx0bGV0IHJkYXRhID0gcmVzLmxpc3Q7XHJcblx0XHRcdFx0XHRpZiAodGhpcy5saXN0UXVlcnkucGFnZSA9PSAxKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMucHVibGljRGF0YSA9IHJkYXRhO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0cmRhdGEuZm9yRWFjaChpdGVtID0+IHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnB1YmxpY0RhdGEucHVzaChpdGVtKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRcdGlmIChyZGF0YS5sZW5ndGggPT09IHRoaXMubGlzdFF1ZXJ5LmxpbWl0ICYmIHJlcy50b3RhbFJlY29yZCAhPT0gdGhpcy5saXN0UXVlcnkubGltaXQpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5saXN0UXVlcnkucGFnZSsrO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuZmluaXNoZWQgPSB0cnVlO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pXHJcblx0XHRcdH0sXG4gICAgICBvbkxvYWQoKSB7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMubG9hZERhdGEoKTtcbiAgICAgICAgfSwgMTAwMCk7XG4gICAgICB9LFxuICAgICAgb25SZWZyZXNoKCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmxpc3RRdWVyeS5wYWdlID0gMTtcbiAgICAgICAgICB0aGlzLmxvYWREYXRhKCk7XG4gICAgICAgICAgdGhpcy5yZWZyZXNoaW5nID0gZmFsc2U7XG4gICAgICAgIH0sIDUwMCk7XG4gICAgICB9LFxuICAgIH1cbiAgfVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbiAgLnJlZnJlc2hib3gge1xuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDEwNnB4KTtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICB9XG48L3N0eWxlPlxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuICAuaW50by1tYXAge1xuICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIH1cblxuICAuYXJvdW5kLXdyYXBwZXIge1xuICAgIG1hcmdpbjogMCAyNXB4O1xuICAgIHBhZGRpbmc6IDhweCAwO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDE4LCAxOCwgNTQsIDAuMDUpO1xuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgfVxuXG4gICAgLm5hbWUge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDEpO1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA3cHg7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gICAgICB9XG5cbiAgICAgIC5saWltZyB7XG4gICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDdweDtcbiAgICAgICAgbWFyZ2luLXRvcDogM3B4O1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLm5vd3JhcCB7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgfVxuXG4gICAgLmRlcyB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDI3cHg7XG4gICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xuICAgIH1cblxuICB9XG48L3N0eWxlPlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcInZhbi1uYXYtYmFyXCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwidmFudG5hdmJhclwiLFxuICAgICAgICBhdHRyczogeyB0aXRsZTogX3ZtLnRvcFRpdGxlLCBcImxlZnQtYXJyb3dcIjogXCJcIiB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIFwiY2xpY2stbGVmdFwiOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLiRyb3V0ZXIuZ28oLTEpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiBcInJpZ2h0XCIsXG4gICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImludG8tbWFwXCIsXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zaG93RmlsdGVyID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIuetm+mAiVwiKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgXSksXG4gICAgICB9KSxcbiAgICAgIF9jKFwiYXJlYUZpbHRlclwiLCB7XG4gICAgICAgIGF0dHJzOiB7IGlzU2hvdzogX3ZtLnNob3dGaWx0ZXIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBnZXRGaWx0ZXI6IF92bS5nZXREaXZpc2lvbixcbiAgICAgICAgICBjbG9zZTogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgX3ZtLnNob3dGaWx0ZXIgPSBmYWxzZVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIF9jKFwidmFuLXNlYXJjaFwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHNoYXBlOiBcInJvdW5kXCIsIHBsYWNlaG9sZGVyOiBcIlwiIH0sXG4gICAgICAgIG9uOiB7IHNlYXJjaDogX3ZtLm9uU2VhcmNoIH0sXG4gICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gsXG4gICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgIF92bS5zZWFyY2ggPSAkJHZcbiAgICAgICAgICB9LFxuICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoXCIsXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInJlZnJlc2hib3hcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcInZhbi1wdWxsLXJlZnJlc2hcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgb246IHsgcmVmcmVzaDogX3ZtLm9uUmVmcmVzaCB9LFxuICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucmVmcmVzaGluZyxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgX3ZtLnJlZnJlc2hpbmcgPSAkJHZcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicmVmcmVzaGluZ1wiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2YW4tbGlzdFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbmlzaGVkOiBfdm0uZmluaXNoZWQsXG4gICAgICAgICAgICAgICAgICAgIFwiZmluaXNoZWQtdGV4dFwiOiBcIuayoeacieabtOWkmuS6hlwiLFxuICAgICAgICAgICAgICAgICAgICBcImltbWVkaWF0ZS1jaGVja1wiOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiA1MCxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjogeyBsb2FkOiBfdm0ub25Mb2FkIH0sXG4gICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmxvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmxvYWRpbmcgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJsb2FkaW5nXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5wdWJsaWNEYXRhLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYXJvdW5kLXdyYXBwZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nb0RldGFpbChpdGVtLCBfdm0ueHF0eXBlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnhxdHlwZSA9PSBcIuihjOaUv+WkhOe9mlwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hbWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxpaW1nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL+WuoeaJuS5wbmdcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKGl0ZW0ubWVzc2FnZSkgKyBcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJkZXNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0uZW50TmFtZSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS54cXR5cGUgPT0gXCLovpDlsITlronlhahcIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuYW1lIG5vd3JhcFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMvdm9jcy5wbmdcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLmVudE5hbWUpICsgXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS54cXR5cGUgPT0gXCLlu7rorr7pobnnm65cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPyBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJuYW1lIG5vd3JhcFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMv5qGI5L6LLnBuZ1wiKSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0ucHJvamVjdE5hbWUpICsgXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGVzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLmVudE5hbWUpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ueHF0eXBlID09IFwi5Zyo57q/55uR5o6nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmFtZSBub3dyYXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL+ahiOS+iy5wbmdcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKGl0ZW0uUVlNQykgKyBcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnhxdHlwZSA9PSBcIuebkea1i+iuvuWkh1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hbWUgbm93cmFwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy/moYjkvosucG5nXCIpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhpdGVtLlBLTUMpICsgXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGVzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKGl0ZW0uUVlNQykgKyBcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnhxdHlwZSA9PSBcIuesrOS6jOasoeaxoeafk+a6kOaZruafpVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hbWUgbm93cmFwXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy/moYjkvosucG5nXCIpIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5lbnROYW1lKSArIFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ueHF0eXBlID09IFwi5Y2x6Zmp5bqf54mpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmFtZSBub3dyYXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL+WFrOWPuC5wbmdcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLnF5bWMpICsgXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGVzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLmh5bWMpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ueHF0eXBlID09IFwi546v5L+d5oqV6K+JXCJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmFtZSBub3dyYXBcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL+ahiOS+iy5wbmdcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLnRzbnIpICsgXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZGVzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLnN6ZHopKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKSxcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIid1c2Ugc3RyaWN0Jztcbi8vIGBTYW1lVmFsdWVgIGFic3RyYWN0IG9wZXJhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1zYW1ldmFsdWVcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1vYmplY3QtaXMgLS0gc2FmZVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaXMgfHwgZnVuY3Rpb24gaXMoeCwgeSkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlIC0tIE5hTiBjaGVja1xuICByZXR1cm4geCA9PT0geSA/IHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5IDogeCAhPT0geCAmJiB5ICE9PSB5O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHNhbWVWYWx1ZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zYW1lLXZhbHVlJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG5cbi8vIEBAc2VhcmNoIGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnc2VhcmNoJywgZnVuY3Rpb24gKFNFQVJDSCwgbmF0aXZlU2VhcmNoLCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgcmV0dXJuIFtcbiAgICAvLyBgU3RyaW5nLnByb3RvdHlwZS5zZWFyY2hgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zZWFyY2hcbiAgICBmdW5jdGlvbiBzZWFyY2gocmVnZXhwKSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgc2VhcmNoZXIgPSBpc051bGxPclVuZGVmaW5lZChyZWdleHApID8gdW5kZWZpbmVkIDogZ2V0TWV0aG9kKHJlZ2V4cCwgU0VBUkNIKTtcbiAgICAgIHJldHVybiBzZWFyY2hlciA/IGNhbGwoc2VhcmNoZXIsIHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbU0VBUkNIXSh0b1N0cmluZyhPKSk7XG4gICAgfSxcbiAgICAvLyBgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNlYXJjaFxuICAgIGZ1bmN0aW9uIChzdHJpbmcpIHtcbiAgICAgIHZhciByeCA9IGFuT2JqZWN0KHRoaXMpO1xuICAgICAgdmFyIFMgPSB0b1N0cmluZyhzdHJpbmcpO1xuICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShuYXRpdmVTZWFyY2gsIHJ4LCBTKTtcblxuICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuXG4gICAgICB2YXIgcHJldmlvdXNMYXN0SW5kZXggPSByeC5sYXN0SW5kZXg7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShwcmV2aW91c0xhc3RJbmRleCwgMCkpIHJ4Lmxhc3RJbmRleCA9IDA7XG4gICAgICB2YXIgcmVzdWx0ID0gcmVnRXhwRXhlYyhyeCwgUyk7XG4gICAgICBpZiAoIXNhbWVWYWx1ZShyeC5sYXN0SW5kZXgsIHByZXZpb3VzTGFzdEluZGV4KSkgcngubGFzdEluZGV4ID0gcHJldmlvdXNMYXN0SW5kZXg7XG4gICAgICByZXR1cm4gcmVzdWx0ID09PSBudWxsID8gLTEgOiByZXN1bHQuaW5kZXg7XG4gICAgfVxuICBdO1xufSk7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnJlZnJlc2hib3hbZGF0YS12LTYzNGMzNmQxXSB7XFxuICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMDZweCk7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pbnRvLW1hcFtkYXRhLXYtNjM0YzM2ZDFdIHtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG4uYXJvdW5kLXdyYXBwZXJbZGF0YS12LTYzNGMzNmQxXSB7XFxuICBtYXJnaW46IDAgMjVweDtcXG4gIHBhZGRpbmc6IDhweCAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMTgsIDE4LCA1NCwgMC4wNSk7XFxufVxcbi5hcm91bmQtd3JhcHBlcltkYXRhLXYtNjM0YzM2ZDFdOmxhc3QtY2hpbGQge1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG59XFxuLmFyb3VuZC13cmFwcGVyIC5uYW1lW2RhdGEtdi02MzRjMzZkMV0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uYXJvdW5kLXdyYXBwZXIgLm5hbWUgaW1nW2RhdGEtdi02MzRjMzZkMV0ge1xcbiAgd2lkdGg6IDE2cHg7XFxuICBtYXJnaW4tcmlnaHQ6IDdweDtcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxufVxcbi5hcm91bmQtd3JhcHBlciAubmFtZSAubGlpbWdbZGF0YS12LTYzNGMzNmQxXSB7XFxuICB3aWR0aDogMTZweDtcXG4gIG1hcmdpbi1yaWdodDogN3B4O1xcbiAgbWFyZ2luLXRvcDogM3B4O1xcbiAgaGVpZ2h0OiAxNnB4O1xcbn1cXG4uYXJvdW5kLXdyYXBwZXIgLm5vd3JhcFtkYXRhLXYtNjM0YzM2ZDFdIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuLmFyb3VuZC13cmFwcGVyIC5kZXNbZGF0YS12LTYzNGMzNmQxXSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBwYWRkaW5nLWxlZnQ6IDI3cHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYzNGMzNmQxJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiN2MyN2YwMmNcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02MzRjMzZkMSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTYzNGMzNmQxJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPTYzNGMzNmQxJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiN2RkYWQxNmVcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD02MzRjMzZkMSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPTYzNGMzNmQxJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBWUFBQUJ6ZW5yMEFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUxOU1VSQlZGaUY3Wll4YjlOQUZNZi92bnJJQmxLSFNoMndUWm9tUTltNjk3cEhWYjRCL1NaMXZ3QXpFeW9MRzFJVVJUQ2hPZ01EVXJZd3VEV3BIWWFnVkVvbEZtU2h5R1k0bjNNKzN6bU94SUJFMzVUY1BkLy9kKy9lM1h2QW8vM3ZabXpqM09qMGJDQTVZZjhTUitIaUFVRHNENzIvQ3JBV1RoeUFoRUF5QTh5SWlmVWpOcit5QVdJSllGNGRrSTBBalU2WEFxQUFDV04vOEphUDMweG5Mdi9kYmxxdStwdk5FSlVBamM3WlM3WWo4eXIyKzFFUWhEVGQyYmxBbWxMdWt3S1hNa0FWdUd4RUw5NmxRT0xFL3RDTi9YNTBNNTI1S1NIWG9uaVZ4ZjdRaS8yaEs4RFVCeEJEQ0xCd0c4QkZIV0dGeEFnQTFVSG9Ja0NSblY4UWhGUVVueStXZVAzdUErYUxaUWxhSlJMNy9RaHNJL1VBK0NJOGVWSkNydm5jZUJKZzhPbUxoaGtVQUdWNUkwTU1QWUNFS2tCRkJJaVZFZVAyN250QmZEd0pjcS94MTI4bGFHYUpvNEpnVjVkWU5RQVNoOTl4MFVSeGdCMkZmQXhGaUo1ZEhETWoxWGdCZ0U5bTV3YWU4Yko0RHJXT0FsVkFuR2pvQ2laRllKWFRCVUdZTHpxL2YxQitQRjhzOGY3aloxczVLVm0rS1VFREFFd0ZVeWlQSEI4ZEFFY0grZi85dmQzODk2czMvYWVBZVZVSEludkdDeU1TZ0JrQkt5cC9KZ3FLTnA0RStISC84QVFRZDFobGlRTmdWa0JTdVRVNlBidlZjcnlxcFlxM1l2TjVyNU92bU9BRmdOSXVERU1KTVY4c3BjUk1uS3JubGhrN2UxbEQ5UTZFZkVkcG1vNVVTMmtlSTFxK2VpWHpTbW9LZ0JHL3IrMm01YWJBcFRpcnYvc0FzRHF2Z0tDcXdkSXRZQTNHR1k5QzFHNWE3dTEwbHRlQy9iMWRITDlvNWY2LzR0OC9BWGlBR2VrU2tSMFBDV04vNE1senluNGc2M0RPSVJRa3NTYUlwdXNIaXVLZ3ZLZVE1NVczUUt4Z2pVNlh0bHFPZDlpMERGMVM2c1Y3TnZMS3FvNk90aUhKcW1FT0FRQ0h6NStkR2tseUNzUHdOc0d3Z3JTT29zNXZpNTRRMkxRWTg4K1BEN3F3YndXZ0J1R2RNWkJWT2JsVnI5VVJid1VnZ1VCVjJ3RXlxdmNrUDlvL1pIOEFuL2hiaHhvM0RHQUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDQUFBQUFnQ0FZQUFBQnplbnIwQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBRnVTVVJCVkZpRjdWZGJpb1F3RUt4ZTlGeXJrRnNaaUlMZVNwaDRyZ2k5SHliaXFFa20rSnFQTFppZjBlNnFkUG9sOEREb3FBTWhUUUdnQUtEN050ZTNDQkRTRkdCU2xuamhqWnUremVzVVg5bkhoQUJtVW41N3JFRThnRW1CNlRlRlBDaGdjVXFBVnllZFNCc1hjaXRRcFpMdkNoRFYrTUxlS1FFc1NjL0NtNENaM0pFU053QndOcWxYQUZ3MmQxbDVGZUVhUDNjUmZhMkFhQm5hdk5pQ2VFaXQrV1FCVXlsdVNuQUNIMjZpY1FFMisxT1lDbEdObk5JUnI4a0JKaVdrZVVTQUJuRUpRSU5KaVdya21KQjRFcm81c0lLdk9kbi90WkNtdHZOQkNXbmd1NUpnQk93OGVPMzlSRFZ5eUxadjg3cnZNZ0p4RTRwR05BbUZOSTNuc1E3WkxvVUlhZUNMUnZRS3pxaDE2Nk1XMWNoMndzNCtIKytFand1NHJCWFBkcEgzanJUaUFvdTc5Tm9GM29zS3NGV3d1eHVFbHBTUVhaS0FHTkVaZG84bjRiK0FlZGJQZlgreERTZkFmVU9FYlNmL0FISHBjb1NBelRwK0YzVGZaV1ZtRlExbnJWZ2ZJejNLMStBUE9UUFFkTit3TFdVQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNBQUFBQWdDQVlBQUFCemVucjBBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFONFNVUkJWRmlGMVpkTGlCUlhGSWEvVXpPdFRtcy9OTFlaazJBR1d3VVZKSUtQcFpwRkRFaXlDQmdKWnBQc05HSjBwWXVnSXJySWJoSWZPeFZFRnhxWEJvbEdpYnVRR2NnbWlLU25JaktoWjhhbXgrbUhiVnVPZGJMb21uN1dyUzRuaHVBUERiZHVuZjkrLzYzYlhmYzIvTStTMlJvMW00MlNLQ1loQ3RFNUJaSCtKLzlwQUoyMEUxaDhocVhiZ1kwb2I3ZVZqSU1PZzl6a0tWZWtmOFdqVnhKQXM5a29DeXBIVVQwSUVna2JHS3p2a1RuSEpmNU9mdFlCdEdEdkFEMER2QnNlM0tJY2x1NlQyTXFyeHBoR2VNbmVDM285Q0s1M0xxQjNMZ1FGU09IS0ZTM2FoMHdGdms5QVMvWWVYRDFySFBiYVNaalhWMnVYSjJIYUFTTHcrVWx6RkpIREVrOS8yeldBRmtZK0JHNkVnZ05NalRmZDdCTENzajZWMlBJZldycGE0RG9jQVU0YkI4aVB0c0tubmJhQzUramR5K1lBcm50S0h6OUlHZ05RVEI0QjBpYS8vdHkyM3RWeVo5SGZJK1lBOENZOUw3N3hEYUNaekZ6ZzZ5QzNMRWkwd3R1ZmdGTU5zbnNnOXF0bTRoMEJXQ0s3Z0ZpZ3Q4L3pUVHYrc3crbkNDWFoxUmtBK2FDYlU5Ny9BdkpqdFcrK241NCtRM1lmRFpHaHdXb0tvQnRDT05HQjk4ejNrbStGR1FKVU4va0VZSGtZcjJ6WkRaVks1NWd5TCtUc0FWaW1vNk45NEwwSFZNZm5VeXo3TCtxTk01RFAxdHJQUFBEY3RpM0JxYUtQSmlDV2dtU3EwUjlMSVIvdjlZOHd6VEo1WThWb0x3QVRRSjlQMFlRTitZZU42M2J3akVvRnBBZW81R29mVCtvb3VtNExNckMyMDJOWkZuaExJUDM5VDREMnR3cDYvMWQvWUxQeUU4YWZuK3VBUHJqbjcxT2RxZ2Z3Wkhlbk5jbXB3dGhESTF3ZERUQnJUaGFsQyswQmhrTER5NFhhekFQa2RqelBabG0vMVZ1TlR2bXBLN1JjcU0yNk5CVllHang3QUsyejZydWhxbG9VUjNJZ2kxcEs3MTZHYU12KzBWMnBnWHJUOXd0WTBTV3lkR1VPb0xkZUtPSnFhV1FRbCtQTnRmTDc3ZEJjalM1R0kvT0I0VnJId0JxZkFEbzRBd2ZmODBEbUhzaHFBQjM2RWZubFlqaTRvNzdyTGx0M1ltM2JPWE01aGx0YUl3dlgxOWV3dDhPaHNnL2hOb0JzM0lIK09keWRIa3Voc1pUdjhhb0pEaTVmTmNQQmRDUXIybCtpZXE0NytXVWtCeVdSSHV6b05aVy8yaEJ5UUJMcDcvenVHRS9GRWsrZngrclpodkRIdnlEL3hRdjNJeE1jUXY0ejBxSjlHTmlQNnRKd1hKa0U5elR4d2dtUkRjOERLOE1ONkFVcDJaK2d1aDFYTjRPc1Fyd3RUS2lDWklBaFZHOFJ2M1JWNUpqN01tUFBTcHE3SDlOODQzejNXdW9mU3dwSFNQKzhpVVlBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQndBQUFBY0NBWUFBQUJ5RGQrVUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQVAxU1VSQlZFaUpwWlpiVEZ4VkZJYS90YytCRHJSRkFURkFpMW9CSzlxYkxRVEVXRVp0MnFvUGZkQ29mZEJvMU5BbjAwYzFSSU1QeGtkTVk0eVhhclVtTmw3aUpXbWFHTk5TdFJTaDBTcFlDRUZpSWlra3R0VVdZUWJtbkwxOG1EbDBaamd6VVBzbk8xbG43WC85LzlwN3p0NW5oS1ZnNU0xMm83UXB1aFZZQmZ5YW10a0FuQlg0M2xybktBM3RieThtSlhsbmg5NTZYWVRkb0JWTGFnejVTMVVQMGJEbnVTc3pISHBudDRoMGdxM1BvdmVFeTJocjF2T1l1czRPNnA0WlhkVFFHZHIva0VYYmMzVjRKVEJXM3ZWdmYvcVRuSVptNkwyWFVPa0VFSkVUVjJ1b3FuZUoya2ZUVGVjTjNZR0RVZC9ZcnFzMUNZTmo3RjZ2NGFsdUFEZElXa2VleERxVCtRcjNWVGJWdFJaWGxBYlBkeFNWbHIxeGZ1VDNvek1URjc2NE5INGhWNTMxblllQnk0Wm04S085WXFVeSt3ZmRWYks2TElpM0ZWZVd0UlJYbERhTkhlblBiS0t4cnVPNkRiWEJabjBWYmx6bkRoeU1ldXNmNzVhazRhSFRZWjBkVy92Z3hnbE5VQ2tGQ0hEeTB0bnpMMDc4UEo3TisyYnRBeHVEZUoxVFJQV1p6My9KNWdoTSt1c2UyK202QXg5SFZjMC9ZWVlqL2h3eHNVemFCQjdDc3VYWGxuZmRjbCs1cUdJUXJoR0hGUmltMWFLcG1rRS9ob1RyUmR5QlQ2T3Uyb0lxRE9mQ0RKdmNDSk5xU2FCNFdHTFd4MFB3VVZSaENvOXpDZ2tCQjJGV2ZVckZBVXlvSHFyM3VxaHNGelhsWWZQMUprSVZGb3RpQWVza2hlTnF1U2crZi9zZTAwQk1MWjVhUERFb2dxZ1RxcWZxMytDS09GVW9zMkdFaUFndURtTnpNMVByaDcvTmNjc2tzYXVrcW16ZmpadWI1dFNDU3FpZTRGYTZxTm1HNElRUkRFSWhjR3ZoOHBWakRkdnZBYkRKM1VTRFZhZkZ4UWdyeEFYTWpoeDlXVmR3VWhLcG0wVTEvWFRNMzVFR3NRQm1mallackNxSVJJRDVsMFpSUkUwUDZja2t2UlhBUmVWRTVnMjM4RDcvTXhHTDFmN1czUmZXOHRjM2I3bHRaOG4xRlVHVklLQW1zWUNvSEU4YVlnYkZtcm93c1FBMUJVVkZjNXZ1Yjh2SFNZZFlOeDZXVjJOSFhZTkw1dHJETVQ0WG53bFc3NGhRVlZCWW5OTXd4MWRQY0VaZDhaelAxT2p6K2N5RzQ5TVhONTNwNjAzUGRkWFUxKzJwV0YwYlhoSDZEaUtlbkJhQXdsUEhEcWlZbTdJSmM1dTNMbmtiMDFINDAzZkh3L0tKTFcxUkEyRFVQZUJZY2JQSC96RURDTk15MXZrUzBsN0paZjA5WTZCcjBnczdxbXZvcUs2NUlyUCtmNmVtN2g0ZVdKbVJGUGxqdHJGMVRZWmh3WTg5VHhnaiswbjdSb1pCaGFGa2tOS0Noa1Y2OEswdnp5WmFXdDRITUVFMjBkejZvYkhtRVZGRC91RjRvbzRucE1haWZIa2xNTXRZWVlCSTM2bFhVYzE3THBjT09SeHZidndnSXhQSzYrMHRpZUMrZ0pEM3VPVEJEd3F2elRZM0hsN1FRcjZxeU1uK0tJWW95TXRMc2hHNjhiVXpmbWRUZDI3S0VuRFpHQkJwUTRNNCtjY0lYenNCOGhrRitBL0h2SWVBRHh4V0FBQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02MzRjMzZkMSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD02MzRjMzZkMSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzdHlsZTEgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9NjM0YzM2ZDEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCI2MzRjMzZkMVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCc2MzRjMzZkMScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCc2MzRjMzZkMScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCc2MzRjMzZkMScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTYzNGMzNmQxJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzYzNGMzNmQxJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvcG9sbHV0aW9uL3BvbGx1dGlvblB1bmlzaExpc3QvaW5kZXgudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NjM0YzM2ZDEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9NjM0YzM2ZDEmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjM0YzM2ZDEmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9