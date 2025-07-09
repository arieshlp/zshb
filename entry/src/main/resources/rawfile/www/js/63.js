(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[63],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/environmentCode/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_setdate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/setdate */ "./src/utils/setdate.js");
/* harmony import */ var _api_index__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../api/index */ "./src/api/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var coordtransform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! coordtransform */ "./node_modules/coordtransform/index.js");
/* harmony import */ var coordtransform__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(coordtransform__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _searchComponents_components_pollution_environCode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../searchComponents/components/pollution/environCode */ "./src/views/searchComponents/components/pollution/environCode.vue");
/* harmony import */ var _views_searchComponents_components_pollution_healthRecord__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/views/searchComponents/components/pollution/healthRecord */ "./src/views/searchComponents/components/pollution/healthRecord.vue");






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    environCode: _searchComponents_components_pollution_environCode__WEBPACK_IMPORTED_MODULE_10__["default"],
    healthRecord: _views_searchComponents_components_pollution_healthRecord__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  data: function data() {
    return {
      nowDate: Object(_utils_setdate__WEBPACK_IMPORTED_MODULE_6__["hourDateFormat"])(new Date()),
      nowMonth: Object(_utils_setdate__WEBPACK_IMPORTED_MODULE_6__["monthDateFormat"])(new Date()),
      today: Object(_utils_setdate__WEBPACK_IMPORTED_MODULE_6__["getThisDate"])(),
      info: {},
      taskInfo: {
        month_total: 0,
        not_complete: 0,
        complete_count: 0
      },
      riskInfo: {
        high_risk: 0,
        medium_risk: 0,
        risk: 0,
        total: 0
      },
      type: '近一月',
      typeData: ['近一月', '近一年'],
      reasonType: '近一月',
      typesData: ['近一月', '近一年'],
      mtype: '红码'
    };
  },
  watch: {
    'type': function type() {
      this.getData();
    },
    'reasonType': function reasonType() {
      this.getReasonData();
    },
    'mtype': function mtype() {
      this.getReasonData();
    }
  },
  mounted: function mounted() {
    // this.queryHbmNumbers();
    this.queryTaskInfo();
    this.queryRiskInfo();
    this.getData();
    this.getReasonData();
    this.getRiskProblem();
  },
  methods: {
    //跳转待审核列表
    toCheck: function toCheck() {
      this.$router.push({
        name: 'codeToCheck'
      });
    },
    queryHbmNumbers: function queryHbmNumbers() {
      var _this = this;

      Object(_api_index__WEBPACK_IMPORTED_MODULE_7__["querySupervision"])().then(function (res) {
        _this.info = res.data;
      });
    },
    //赋码与整改
    queryTaskInfo: function queryTaskInfo() {
      var _this2 = this;

      Object(_api_index__WEBPACK_IMPORTED_MODULE_7__["getTaskInfo"])().then(function (res) {
        _this2.taskInfo = res.data;
      });
    },
    //风险概括
    queryRiskInfo: function queryRiskInfo() {
      var _this3 = this;

      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth() + 1;
      var time = year + '-' + (month > 9 ? month : '0' + month);
      Object(_api_index__WEBPACK_IMPORTED_MODULE_7__["getEvaluateInfo"])({
        time: time
      }).then(function (res) {
        _this3.riskInfo = res.data.left;
      });
    },
    //环保码变化趋势
    getData: function getData() {
      var _this4 = this;

      var params = {
        time: 1,
        type: this.type === '近一月' ? 'month' : 'year'
      };
      Object(_api_index__WEBPACK_IMPORTED_MODULE_7__["queryHbmTrend"])(params).then(function (res) {
        var data = {
          recordtime: [],
          yellownumber: [],
          rednumber: []
        };

        for (var i = 0; i < res.data.length; i++) {
          data.recordtime.push(res.data[i].SUB_TIME);
          data.yellownumber.push(res.data[i].yellow);
          data.rednumber.push(res.data[i].red);
        }

        _this4.drawLine(data);
      });
    },
    drawLine: function drawLine(data) {
      var chart = echarts__WEBPACK_IMPORTED_MODULE_8__["init"](document.getElementById('trendChart'), null, {
        devicePixelRatio: 2
      });
      chart.setOption({
        grid: {
          top: '18%',
          bottom: '12%',
          right: '3%',
          left: '10%'
        },
        xAxis: {
          type: 'category',
          data: data.recordtime,
          axisTick: {
            show: false
          },
          axisLabel: {// interval: 0,
            // rotate: 20,
          }
        },
        legend: {
          data: ['绿码', '黄码', '红码'],
          top: "2%",
          textStyle: {
            color: "#000"
          },
          right: 10
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            lineStyle: {
              color: {
                type: 'linear',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [{
                  offset: 0,
                  color: 'rgba(255,255,255,0)' // 0% 处的颜色

                }, {
                  offset: 0.5,
                  color: 'rgba(255,255,255,1)' // 100% 处的颜色

                }, {
                  offset: 1,
                  color: 'rgba(255,255,255,0)' // 100% 处的颜色

                }],
                global: false // 缺省为 false

              }
            }
          },
          formatter: function formatter(params, ticket, callback) {
            var showHtm = "";
            var title = params[0].name + '<br>';

            for (var i = 0; i < params.length; i++) {
              //图标
              var marker = params[i].marker; //名称

              var name = params[i].seriesName; //值

              var count = params[i].value + '家';
              showHtm += marker + name + ':' + count + '<br>';
            }

            return title + showHtm;
          }
        },
        yAxis: {
          name: "单位: 家",
          type: 'value',
          minInterval: 1,
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          splitLine: {
            lineStyle: {
              type: 'dashed'
            }
          }
        },
        series: [{
          name: '黄码',
          color: '#FFC420',
          data: data.yellownumber,
          type: 'line',
          smooth: true,
          symbol: 'none'
        }, {
          name: '红码',
          color: '#FF2424',
          data: data.rednumber,
          type: 'line',
          smooth: true,
          symbol: 'none'
        }]
      });
    },
    changeHbm: function changeHbm(flag) {
      this.mtype = flag;
    },
    //环保码原因分析
    getReasonData: function getReasonData() {
      var _this5 = this;

      var params = {
        time: 1,
        color: this.mtype === '红码' ? '红色' : '黄色',
        type: this.reasonType === '近一月' ? 'month' : 'year'
      };
      Object(_api_index__WEBPACK_IMPORTED_MODULE_7__["queryHbmAnalysis"])(params).then(function (res) {
        var data = res.data;

        _this5.drawPie(data);
      });
    },
    drawPie: function drawPie(data) {
      var pieData = [];
      var colors = ['#807ffb', '#62b8ff', '#00b8c3', '#ffbd43', '#fe9167'];

      for (var i = 0; i < data.length; i++) {
        pieData.push({
          value: data[i].VALUE,
          //data[i].NUM,
          show: true,
          name: data[i].TYPE,
          itemStyle: {
            normal: {
              color: colors[i]
            }
          }
        });
      }

      var chart = echarts__WEBPACK_IMPORTED_MODULE_8__["init"](document.getElementById("reasonChart"), null, {
        devicePixelRatio: 2
      });
      chart.setOption({
        legend: {
          selectedMode: false,
          // 取消图例上的点击事件
          type: 'scroll',
          orient: 'vertical',
          left: '40%',
          top: '3%',
          itemGap: 8,
          itemWidth: 10,
          // 设置宽度
          itemHeight: 10,
          // 设置高度
          textStyle: {
            color: '#000',
            rich: {
              name: {
                verticalAlign: 'right',
                align: 'left',
                width: 100,
                color: "#000"
              },
              value: {
                align: 'left',
                color: "#000"
              },
              per: {
                align: 'left',
                color: "#000"
              }
            }
          },
          data: pieData.map(function (item) {
            if (item.show) {
              return item.name;
            }
          }),
          formatter: function formatter(name) {
            if (data && data.length) {
              for (var _i = 0; _i < data.length; _i++) {
                if (name === data[_i].TYPE) {
                  return '{name| ' + name + '}  ' + '{value| ' + data[_i].VALUE + '}' + '{per|(' + data[_i].PERCENTAGE + '%)}';
                }
              }
            }
          }
        },
        series: [{
          name: '数量',
          type: 'pie',
          radius: ['35%', '50%'],
          center: ['20%', '40%'],
          hoverAnimation: false,
          avoidLabelOverlap: false,
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true
            }
          },
          labelLine: {
            show: false
          },
          data: pieData
        }]
      });
    },
    //风险问题类型
    getRiskProblem: function getRiskProblem() {
      var _this6 = this;

      Object(_api_index__WEBPACK_IMPORTED_MODULE_7__["getRiskType"])().then(function (res) {
        var arr = [];
        var arr1 = [];
        var arr2 = [];
        res.data.forEach(function (item) {
          arr.push(item.COUNT_VALUE);
          arr1.push(item.TYPE);
          arr2.push({
            name: item.TYPE,
            max: item.COUNT_VALUE + 10
          });
        });

        _this6.drawRadar(arr, arr1, arr2);
      });
    },
    drawRadar: function drawRadar(echartData, yzArr, maxArr) {
      this.chart = echarts__WEBPACK_IMPORTED_MODULE_8__["init"](document.getElementById('riskChart'));
      var labels = yzArr;
      this.chart.setOption({
        tooltip: {
          formatter: function formatter(params) {
            var results = "";

            for (var i = 0; i < labels.length; i++) {
              results += labels[i] + "：" + params.value[i] + "个<br>";
            }

            return results;
          },
          textStyle: {
            fontSize: 14
          }
        },
        radar: {
          name: {
            textStyle: {
              color: "#333333",
              fontSize: 14,
              fontWeight: 600
            }
          },
          splitArea: {
            // 雷达图背景颜色
            areaStyle: {
              color: ["#EAF4FA", "#ffffff"]
            }
          },
          indicator: maxArr
        },
        series: [{
          type: "radar",
          symbol: "circle",
          symbolSize: 8,
          data: [{
            value: echartData,
            name: '风险问题类型',
            itemStyle: {
              normal: {
                color: "rgba(255,255,255,1)",
                borderColor: "rgba(10,154,234,0.9)",
                borderWidth: 5,
                lineStyle: {
                  color: "#0A9AEA"
                }
              }
            },
            areaStyle: {
              normal: {
                color: "#0A9AEA",
                width: 2,
                opacity: 0.6
              }
            }
          }]
        }]
      });
    },
    showMore: function showMore(flag) {
      this.$router.push({
        name: 'gradeControl',
        query: {
          type: flag
        }
      });
    },
    goOthers: function goOthers(routerName) {
      this.$router.push({
        name: routerName
      });
    },
    goToMap: function goToMap() {
      var _this7 = this;

      return Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this7.locate();

              case 2:
                result = _context.sent;

                if (!(result === '定位失败')) {
                  _context.next = 12;
                  break;
                }

                console.log(result);
                _this7.message = result;
                _this7.error = true;
                _this7.loading = false;
                _context.next = 10;
                return _this7.$router.push({
                  name: 'mapMng',
                  query: {
                    longitude: '102.82940170108701',
                    latitude: '24.888009177961806'
                  }
                });

              case 10:
                _context.next = 16;
                break;

              case 12:
                console.log(result);
                _this7.location = result;
                _context.next = 16;
                return _this7.$router.push({
                  name: 'mapMng',
                  query: {
                    longitude: _this7.location[0],
                    latitude: _this7.location[1]
                  }
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    locate: function locate() {
      return new Promise(function (resolve) {
        try {
          window.suc.locate.locate(function (location) {
            console.log([location.Longitude, location.Latitude]);
            resolve([location.Longitude, location.Latitude]);
          }, function (error) {
            console.log(error);
            resolve('定位失败');
          });
        } catch (e) {
          console.log(e); // resolve('定位失败')

          resolve(coordtransform__WEBPACK_IMPORTED_MODULE_9___default.a.wgs84togcj02(102.82797786933142, 24.89106777437279));
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/index.vue?vue&type=template&id=b8602d0e&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/environmentCode/index.vue?vue&type=template&id=b8602d0e&scoped=true& ***!
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
    [
      _c("van-nav-bar", {
        attrs: {
          title: "环保码",
          "left-arrow": "",
          fixed: "",
          "right-text": "消息",
        },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
          "click-right": _vm.toCheck,
        },
      }),
      _c(
        "div",
        { staticClass: "scroll-to-top-wrapper" },
        [
          _c("div", { staticClass: "contentTop" }, [
            _vm._m(0),
            _c(
              "div",
              {
                staticStyle: {
                  width: "100%",
                  display: "flex",
                  "justify-content": "space-between",
                },
              },
              [
                _c(
                  "div",
                  { staticClass: "btn_div", on: { click: _vm.goToMap } },
                  [
                    _c("img", {
                      attrs: { src: __webpack_require__(/*! @/assets/polluter/map.png */ "./src/assets/polluter/map.png") },
                    }),
                    _c("span", [_vm._v("地图")]),
                  ]
                ),
                _c(
                  "div",
                  {
                    staticClass: "btn_div",
                    on: {
                      click: function ($event) {
                        return _vm.goOthers("codeStatis")
                      },
                    },
                  },
                  [
                    _c("img", {
                      attrs: { src: __webpack_require__(/*! @/assets/polluter/report.png */ "./src/assets/polluter/report.png") },
                    }),
                    _c("span", [_vm._v("统计报表")]),
                  ]
                ),
                _c(
                  "div",
                  {
                    staticClass: "btn_div",
                    on: {
                      click: function ($event) {
                        return _vm.goOthers("codeRules")
                      },
                    },
                  },
                  [
                    _c("img", {
                      attrs: { src: __webpack_require__(/*! @/assets/polluter/rule.png */ "./src/assets/polluter/rule.png") },
                    }),
                    _c("span", [_vm._v("赋码规则")]),
                  ]
                ),
                _c(
                  "div",
                  {
                    staticClass: "btn_div",
                    on: {
                      click: function ($event) {
                        return _vm.goOthers("evaluate")
                      },
                    },
                  },
                  [
                    _c("img", {
                      attrs: { src: __webpack_require__(/*! @/assets/polluter/info.png */ "./src/assets/polluter/info.png") },
                    }),
                    _c("span", [_vm._v("动态评价")]),
                  ]
                ),
              ]
            ),
          ]),
          _c(
            "div",
            { staticClass: "contentTop" },
            [
              _c("div", { staticClass: "contentTitle" }, [
                _c("span", [_vm._v("环保码概况")]),
                _c(
                  "span",
                  {
                    staticStyle: {
                      color: "rgba(18, 18, 54, 0.5)",
                      "font-size": "12px",
                      "margin-left": "10px",
                      "font-weight": "400",
                    },
                  },
                  [_vm._v("累计截至" + _vm._s(_vm.today))]
                ),
                _c(
                  "span",
                  {
                    staticStyle: {
                      color: "#1677ff",
                      "font-size": "12px",
                      cursor: "pointer",
                      "margin-left": "auto",
                    },
                    on: {
                      click: function ($event) {
                        return _vm.showMore("3")
                      },
                    },
                  },
                  [_vm._v("更多")]
                ),
              ]),
              _c("environ-code"),
            ],
            1
          ),
          _c("health-record"),
          _c("div", { staticClass: "contentTop" }, [
            _c("div", { staticClass: "contentTitle" }, [
              _c("span", [_vm._v("赋码与整改")]),
              _c(
                "span",
                {
                  staticStyle: {
                    color: "rgba(18, 18, 54, 0.5)",
                    "font-size": "12px",
                    "margin-left": "10px",
                    "font-weight": "400",
                  },
                },
                [_vm._v(_vm._s(_vm.nowMonth))]
              ),
            ]),
            _c(
              "div",
              {
                staticStyle: {
                  width: "100%",
                  display: "flex",
                  "justify-content": "space-between",
                },
              },
              [
                _c("div", { staticClass: "topCard2" }, [
                  _vm._m(1),
                  _c(
                    "div",
                    {
                      staticClass: "topLine2",
                      staticStyle: { "margin-top": "5px" },
                    },
                    [
                      _c(
                        "span",
                        {
                          staticClass: "num",
                          staticStyle: { color: "rgba(255, 141, 26, 1)" },
                        },
                        [_vm._v(_vm._s(_vm.taskInfo.not_complete) + "个")]
                      ),
                    ]
                  ),
                ]),
                _c("div", { staticClass: "topCard2" }, [
                  _vm._m(2),
                  _c(
                    "div",
                    {
                      staticClass: "topLine2",
                      staticStyle: { "margin-top": "5px" },
                    },
                    [
                      _c(
                        "span",
                        {
                          staticClass: "num",
                          staticStyle: { color: "rgba(6, 194, 81, 1)" },
                        },
                        [_vm._v(_vm._s(_vm.taskInfo.complete_count) + "个")]
                      ),
                    ]
                  ),
                ]),
                _c("div", { staticClass: "topCard2" }, [
                  _vm._m(3),
                  _c(
                    "div",
                    {
                      staticClass: "topLine2",
                      staticStyle: { "margin-top": "5px" },
                    },
                    [
                      _c(
                        "span",
                        {
                          staticClass: "num",
                          staticStyle: { color: "rgba(100, 145, 255, 1)" },
                        },
                        [_vm._v(_vm._s(_vm.taskInfo.month_total) + "个")]
                      ),
                    ]
                  ),
                ]),
              ]
            ),
          ]),
          _c(
            "div",
            { staticClass: "contentTop", staticStyle: { height: "100px" } },
            [
              _vm._m(4),
              _c(
                "div",
                {
                  staticStyle: {
                    width: "100%",
                    display: "flex",
                    "justify-content": "space-between",
                  },
                },
                [
                  _c("div", { staticClass: "topCard3" }, [
                    _c("div", { staticClass: "topLine3" }, [
                      _c("span", { staticClass: "num" }, [
                        _vm._v(_vm._s(_vm.riskInfo.high_risk) + "个"),
                      ]),
                    ]),
                    _vm._m(5),
                  ]),
                  _c("div", { staticClass: "topCard3" }, [
                    _c("div", { staticClass: "topLine3" }, [
                      _c("span", { staticClass: "num " }, [
                        _vm._v(_vm._s(_vm.riskInfo.medium_risk) + "个"),
                      ]),
                    ]),
                    _vm._m(6),
                  ]),
                  _c("div", { staticClass: "topCard3" }, [
                    _c("div", { staticClass: "topLine3" }, [
                      _c("span", { staticClass: "num" }, [
                        _vm._v(_vm._s(_vm.riskInfo.risk) + "个"),
                      ]),
                    ]),
                    _vm._m(7),
                  ]),
                  _c("div", { staticClass: "topCard3" }, [
                    _c("div", { staticClass: "topLine3" }, [
                      _c("span", { staticClass: "num" }, [
                        _vm._v(_vm._s(_vm.riskInfo.total) + "个"),
                      ]),
                    ]),
                    _vm._m(8),
                  ]),
                ]
              ),
            ]
          ),
          _c(
            "div",
            { staticClass: "contentTop", staticStyle: { height: "250px" } },
            [
              _c(
                "div",
                {
                  staticClass: "contentTitle",
                  staticStyle: { "justify-content": "space-between" },
                },
                [
                  _c("span", [_vm._v("环保码变化趋势")]),
                  _c(
                    "van-radio-group",
                    {
                      staticStyle: {
                        margin: "10px 0",
                        "font-size": "12px",
                        "font-weight": "400",
                      },
                      attrs: { direction: "horizontal" },
                      model: {
                        value: _vm.type,
                        callback: function ($$v) {
                          _vm.type = $$v
                        },
                        expression: "type",
                      },
                    },
                    _vm._l(_vm.typeData, function (item) {
                      return _c(
                        "van-radio",
                        {
                          key: item,
                          attrs: { name: item, "icon-size": "12px" },
                        },
                        [_vm._v(_vm._s(item))]
                      )
                    }),
                    1
                  ),
                ],
                1
              ),
              _vm._m(9),
            ]
          ),
          _c(
            "div",
            { staticClass: "contentTop", staticStyle: { height: "310px" } },
            [
              _c(
                "div",
                {
                  staticClass: "contentTitle",
                  staticStyle: { "justify-content": "space-between" },
                },
                [
                  _c("span", [_vm._v("环保码原因分析")]),
                  _c(
                    "van-radio-group",
                    {
                      staticStyle: {
                        margin: "10px 0",
                        "font-size": "12px",
                        "font-weight": "400",
                      },
                      attrs: { direction: "horizontal" },
                      model: {
                        value: _vm.reasonType,
                        callback: function ($$v) {
                          _vm.reasonType = $$v
                        },
                        expression: "reasonType",
                      },
                    },
                    _vm._l(_vm.typeData, function (item) {
                      return _c(
                        "van-radio",
                        {
                          key: item,
                          attrs: { name: item, "icon-size": "12px" },
                        },
                        [_vm._v(_vm._s(item))]
                      )
                    }),
                    1
                  ),
                ],
                1
              ),
              _c(
                "div",
                { staticStyle: { width: "100%", height: "calc(100% - 30px)" } },
                [
                  _c("div", { staticClass: "hbmRadioBtn" }, [
                    _c("ul", [
                      _c(
                        "li",
                        {
                          class: _vm.mtype === "红码" ? "active" : "",
                          on: {
                            click: function ($event) {
                              return _vm.changeHbm("红码")
                            },
                          },
                        },
                        [_vm._v("红码")]
                      ),
                      _c(
                        "li",
                        {
                          class: _vm.mtype === "黄码" ? "active" : "",
                          on: {
                            click: function ($event) {
                              return _vm.changeHbm("黄码")
                            },
                          },
                        },
                        [_vm._v("黄码")]
                      ),
                    ]),
                  ]),
                  _c("div", {
                    staticStyle: { width: "100%", height: "calc(100% - 40px)" },
                    attrs: { id: "reasonChart" },
                  }),
                ]
              ),
            ]
          ),
          _vm._m(10),
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
    return _c("div", { staticClass: "contentTitle" }, [
      _c("span", [_vm._v("快捷入口")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "topLine2" }, [
      _c("img", {
        attrs: { src: __webpack_require__(/*! @/assets/polluter/yellow_com.png */ "./src/assets/polluter/yellow_com.png") },
      }),
      _c("span", [_vm._v("未完成")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "topLine2" }, [
      _c("img", { attrs: { src: __webpack_require__(/*! @/assets/polluter/blue_com.png */ "./src/assets/polluter/blue_com.png") } }),
      _c("span", [_vm._v("已完成")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "topLine2" }, [
      _c("img", { attrs: { src: __webpack_require__(/*! @/assets/polluter/green_com.png */ "./src/assets/polluter/green_com.png") } }),
      _c("span", [_vm._v("全部任务")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "contentTitle" }, [
      _c("span", { staticStyle: { color: "#1d1f24" } }, [_vm._v("风险总览")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "topLine3", staticStyle: { "margin-top": "5px" } },
      [_c("span", { staticClass: "red" }, [_vm._v("高风险")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "topLine3", staticStyle: { "margin-top": "5px" } },
      [_c("span", { staticClass: "yellow" }, [_vm._v("中风险")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "topLine3", staticStyle: { "margin-top": "5px" } },
      [_c("span", { staticClass: "green" }, [_vm._v("低风险")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "topLine3", staticStyle: { "margin-top": "5px" } },
      [_c("span", { staticClass: "blue" }, [_vm._v("预警总数")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticStyle: { width: "100%", height: "calc(100% - 30px)" } },
      [
        _c("div", {
          staticStyle: { width: "100%", height: "100%" },
          attrs: { id: "trendChart" },
        }),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "contentTop",
        staticStyle: { height: "310px", "margin-bottom": "10px" },
      },
      [
        _c("div", { staticClass: "contentTitle" }, [
          _c("span", [_vm._v("风险问题类型(前六)")]),
        ]),
        _c(
          "div",
          {
            staticStyle: {
              width: "100%",
              height: "calc(100% - 30px)",
              "margin-top": "10px",
            },
          },
          [
            _c("div", {
              staticStyle: { width: "100%", height: "calc(100% - 40px)" },
              attrs: { id: "riskChart" },
            }),
          ]
        ),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/coordtransform/index.js":
/*!**********************************************!*\
  !*** ./node_modules/coordtransform/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Created by Wandergis on 2015/7/8.
 * 提供了百度坐标（BD09）、国测局坐标（火星坐标，GCJ02）、和WGS84坐标系之间的转换
 */
//UMD魔法代码
// if the module has no dependencies, the above pattern can be simplified to
(function (root, factory) {
  if (true) {
    // AMD. Register as an anonymous module.
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(this, function () {
  //定义一些常量
  var x_PI = 3.14159265358979324 * 3000.0 / 180.0;
  var PI = 3.1415926535897932384626;
  var a = 6378245.0;
  var ee = 0.00669342162296594323;
  /**
   * 百度坐标系 (BD-09) 与 火星坐标系 (GCJ-02)的转换
   * 即 百度 转 谷歌、高德
   * @param bd_lon
   * @param bd_lat
   * @returns {*[]}
   */
  var bd09togcj02 = function bd09togcj02(bd_lon, bd_lat) {
    var bd_lon = +bd_lon;
    var bd_lat = +bd_lat;
    var x = bd_lon - 0.0065;
    var y = bd_lat - 0.006;
    var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_PI);
    var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_PI);
    var gg_lng = z * Math.cos(theta);
    var gg_lat = z * Math.sin(theta);
    return [gg_lng, gg_lat]
  };

  /**
   * 火星坐标系 (GCJ-02) 与百度坐标系 (BD-09) 的转换
   * 即谷歌、高德 转 百度
   * @param lng
   * @param lat
   * @returns {*[]}
   */
  var gcj02tobd09 = function gcj02tobd09(lng, lat) {
    var lat = +lat;
    var lng = +lng;
    var z = Math.sqrt(lng * lng + lat * lat) + 0.00002 * Math.sin(lat * x_PI);
    var theta = Math.atan2(lat, lng) + 0.000003 * Math.cos(lng * x_PI);
    var bd_lng = z * Math.cos(theta) + 0.0065;
    var bd_lat = z * Math.sin(theta) + 0.006;
    return [bd_lng, bd_lat]
  };

  /**
   * WGS84转GCj02
   * @param lng
   * @param lat
   * @returns {*[]}
   */
  var wgs84togcj02 = function wgs84togcj02(lng, lat) {
    var lat = +lat;
    var lng = +lng;
    if (out_of_china(lng, lat)) {
      return [lng, lat]
    } else {
      var dlat = transformlat(lng - 105.0, lat - 35.0);
      var dlng = transformlng(lng - 105.0, lat - 35.0);
      var radlat = lat / 180.0 * PI;
      var magic = Math.sin(radlat);
      magic = 1 - ee * magic * magic;
      var sqrtmagic = Math.sqrt(magic);
      dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI);
      dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI);
      var mglat = lat + dlat;
      var mglng = lng + dlng;
      return [mglng, mglat]
    }
  };

  /**
   * GCJ02 转换为 WGS84
   * @param lng
   * @param lat
   * @returns {*[]}
   */
  var gcj02towgs84 = function gcj02towgs84(lng, lat) {
    var lat = +lat;
    var lng = +lng;
    if (out_of_china(lng, lat)) {
      return [lng, lat]
    } else {
      var dlat = transformlat(lng - 105.0, lat - 35.0);
      var dlng = transformlng(lng - 105.0, lat - 35.0);
      var radlat = lat / 180.0 * PI;
      var magic = Math.sin(radlat);
      magic = 1 - ee * magic * magic;
      var sqrtmagic = Math.sqrt(magic);
      dlat = (dlat * 180.0) / ((a * (1 - ee)) / (magic * sqrtmagic) * PI);
      dlng = (dlng * 180.0) / (a / sqrtmagic * Math.cos(radlat) * PI);
      var mglat = lat + dlat;
      var mglng = lng + dlng;
      return [lng * 2 - mglng, lat * 2 - mglat]
    }
  };

  var transformlat = function transformlat(lng, lat) {
    var lat = +lat;
    var lng = +lng;
    var ret = -100.0 + 2.0 * lng + 3.0 * lat + 0.2 * lat * lat + 0.1 * lng * lat + 0.2 * Math.sqrt(Math.abs(lng));
    ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(lat * PI) + 40.0 * Math.sin(lat / 3.0 * PI)) * 2.0 / 3.0;
    ret += (160.0 * Math.sin(lat / 12.0 * PI) + 320 * Math.sin(lat * PI / 30.0)) * 2.0 / 3.0;
    return ret
  };

  var transformlng = function transformlng(lng, lat) {
    var lat = +lat;
    var lng = +lng;
    var ret = 300.0 + lng + 2.0 * lat + 0.1 * lng * lng + 0.1 * lng * lat + 0.1 * Math.sqrt(Math.abs(lng));
    ret += (20.0 * Math.sin(6.0 * lng * PI) + 20.0 * Math.sin(2.0 * lng * PI)) * 2.0 / 3.0;
    ret += (20.0 * Math.sin(lng * PI) + 40.0 * Math.sin(lng / 3.0 * PI)) * 2.0 / 3.0;
    ret += (150.0 * Math.sin(lng / 12.0 * PI) + 300.0 * Math.sin(lng / 30.0 * PI)) * 2.0 / 3.0;
    return ret
  };

  /**
   * 判断是否在国内，不在国内则不做偏移
   * @param lng
   * @param lat
   * @returns {boolean}
   */
  var out_of_china = function out_of_china(lng, lat) {
    var lat = +lat;
    var lng = +lng;
    // 纬度3.86~53.55,经度73.66~135.05 
    return !(lng > 73.66 && lng < 135.05 && lat > 3.86 && lat < 53.55);
  };

  return {
    bd09togcj02: bd09togcj02,
    gcj02tobd09: gcj02tobd09,
    wgs84togcj02: wgs84togcj02,
    gcj02towgs84: gcj02towgs84
  }
}));


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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/index.vue?vue&type=style&index=0&id=b8602d0e&scoped=true&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/environmentCode/index.vue?vue&type=style&index=0&id=b8602d0e&scoped=true&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".contentTop[data-v-b8602d0e] {\n  padding: 5px 10px 0px;\n  margin: 10px 5px 0px;\n  /*background-color: #fff;*/\n  border-radius: 10px;\n  /*box-shadow: 0 2px 5px rgba(0, 29, 176, 0.2);*/\n}\n.contentTop .contentTitle[data-v-b8602d0e] {\n  /*border-left: 5px solid #1677ff;*/\n  width: 100%;\n  /*font-size: 14px;*/\n  display: flex;\n  /*justify-content: space-between;*/\n  margin: 5px 0 10px 0;\n  height: 20px;\n  align-items: center;\n  font-size: 18px;\n  font-weight: 700;\n  color: black;\n}\n.contentTop .topCard[data-v-b8602d0e] {\n  width: 26%;\n  height: 70px;\n  border-radius: 1px;\n  background-color: #ffffff;\n  border: 1px solid #f0f0f0;\n  box-shadow: 2px 2px 2px rgba(21, 49, 90, 0.16);\n  padding: 10px;\n}\n.contentTop .topCard .topLine[data-v-b8602d0e] {\n  align-items: center;\n  display: flex;\n  height: 33%;\n}\n.contentTop .topCard .topLine .num[data-v-b8602d0e] {\n  font-size: 14px;\n  color: #0071FF;\n  margin-right: 5px;\n  font-weight: 400;\n  border-bottom: 1px solid;\n  display: inline-block;\n  width: 70px;\n  text-align: center;\n}\n.contentTop .topCard .topLine > input[data-v-b8602d0e] {\n  width: 35px;\n  border-top: none;\n  border-left: none;\n  border-right: none;\n  margin-right: 10px;\n  color: #1677ff;\n  border-bottom: 1px solid #4a62e7;\n}\n.contentTop .topCard2[data-v-b8602d0e] {\n  width: 26%;\n  height: 40px;\n  padding: 10px;\n  border-radius: 10px;\n}\n.contentTop .topCard2[data-v-b8602d0e]:nth-child(1) {\n  background: linear-gradient(180deg, rgba(255, 141, 26, 0.1) 0%, rgba(255, 141, 26, 0) 100%), white;\n  border: 1px solid rgba(252, 235, 217, 0.5);\n}\n.contentTop .topCard2[data-v-b8602d0e]:nth-child(2) {\n  background: linear-gradient(180deg, rgba(6, 194, 81, 0.1) 0%, rgba(6, 194, 81, 0) 100%), white;\n  border: 1px solid #dcfae8;\n}\n.contentTop .topCard2[data-v-b8602d0e]:nth-child(3) {\n  background: linear-gradient(180deg, rgba(68, 123, 252, 0.1) 0%, rgba(68, 123, 252, 0) 100%), white;\n  border: 1px solid #eef3ff;\n}\n.contentTop .topCard2 .topLine2[data-v-b8602d0e] {\n  height: 50%;\n}\n.contentTop .topCard2 .topLine2 > img[data-v-b8602d0e] {\n  vertical-align: middle;\n  margin-right: 3px;\n}\n.contentTop .topCard2 .topLine2 > span[data-v-b8602d0e] {\n  color: #171c21;\n  font-size: 14px;\n  font-weight: 600;\n}\n.contentTop .topCard2 .topLine2 .num[data-v-b8602d0e] {\n  /*font-size: 14px;*/\n  /*color: #0071FF;*/\n  /*margin-right: 5px;*/\n  /*border-bottom: 1px solid;*/\n  display: inline-block;\n  /*width: 70px;*/\n  text-align: center;\n  font-size: 16px;\n  font-weight: 600;\n  margin-left: 22px;\n}\n.contentTop .topCard3[data-v-b8602d0e] {\n  width: 20%;\n  height: 40px;\n  padding: 10px 5px;\n  border-radius: 4px;\n  background: #f8f9fb;\n  text-align: center;\n}\n.contentTop .topCard3 .topLine3[data-v-b8602d0e] {\n  height: 50%;\n  font-size: 12px;\n  font-weight: 400;\n}\n.contentTop .topCard3 .topLine3 .num[data-v-b8602d0e] {\n  text-align: center;\n  font-size: 14px;\n  font-weight: 700;\n}\n.contentTop .topCard3 .topLine3 .red[data-v-b8602d0e] {\n  color: #ff5554;\n}\n.contentTop .topCard3 .topLine3 .yellow[data-v-b8602d0e] {\n  color: #f4be00;\n}\n.contentTop .topCard3 .topLine3 .green[data-v-b8602d0e] {\n  color: #4ae37b;\n}\n.contentTop .topCard3 .topLine3 .blue[data-v-b8602d0e] {\n  color: #5475f8;\n}\n.contentTop .hbmRadioBtn[data-v-b8602d0e] {\n  text-align: center;\n}\n.contentTop .hbmRadioBtn > ul > li[data-v-b8602d0e] {\n  padding: 10px 30px;\n  display: inline-block;\n  cursor: pointer;\n  margin-left: 10px;\n  border-radius: 3px;\n  font-size: 12px;\n  background-color: #f5f5f5;\n}\n.contentTop .hbmRadioBtn > ul > li.active[data-v-b8602d0e] {\n  background-color: #f4f8ff;\n  color: #1677ff;\n  font-weight: bold;\n}\n.contentTop .btn_div[data-v-b8602d0e] {\n  padding: 5px 0px;\n  /*background-color: #f4f8ff;*/\n  color: #1677ff;\n  font-size: 14px;\n  border-radius: 4px;\n  cursor: pointer;\n  width: 25%;\n  text-align: center;\n}\n.contentTop .btn_div > span[data-v-b8602d0e] {\n  display: block;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/index.vue?vue&type=style&index=0&id=b8602d0e&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/environmentCode/index.vue?vue&type=style&index=0&id=b8602d0e&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=b8602d0e&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/index.vue?vue&type=style&index=0&id=b8602d0e&scoped=true&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("9b556f2a", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/api/index.js":
/*!**************************!*\
  !*** ./src/api/index.js ***!
  \**************************/
/*! exports provided: querySupervision, queryHbmTrend, queryHbmAnalysis, queryHbmCodeAnalysis, queryApprovalList, submitDeptApproval, queryClueTypes, queryWRYList, queryAreas, getTaskInfo, getEvaluateInfo, getRiskType, queryRuleList, queryHbmDepartment, checkRules, editRules, queryWRYMap, queryStatistics, complaintProportion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "querySupervision", function() { return querySupervision; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryHbmTrend", function() { return queryHbmTrend; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryHbmAnalysis", function() { return queryHbmAnalysis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryHbmCodeAnalysis", function() { return queryHbmCodeAnalysis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryApprovalList", function() { return queryApprovalList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "submitDeptApproval", function() { return submitDeptApproval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryClueTypes", function() { return queryClueTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryWRYList", function() { return queryWRYList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryAreas", function() { return queryAreas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaskInfo", function() { return getTaskInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEvaluateInfo", function() { return getEvaluateInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRiskType", function() { return getRiskType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryRuleList", function() { return queryRuleList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryHbmDepartment", function() { return queryHbmDepartment; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkRules", function() { return checkRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editRules", function() { return editRules; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryWRYMap", function() { return queryWRYMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryStatistics", function() { return queryStatistics; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "complaintProportion", function() { return complaintProportion; });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./src/api/request.js");
 // ======================================== 首页 =====================================
//环保码

var querySupervision = function querySupervision() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/home/supervision',
    method: 'get',
    params: {}
  });
}; //环保码变化趋势

var queryHbmTrend = function queryHbmTrend(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/home/changing_trends',
    method: 'get',
    params: params
  });
}; //环保码原因分析

var queryHbmAnalysis = function queryHbmAnalysis(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/home/cause_analysis',
    method: 'get',
    params: params
  });
}; //环保码原因详情

var queryHbmCodeAnalysis = function queryHbmCodeAnalysis(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/home/pollution_detail',
    method: 'get',
    params: params
  });
}; //待审核列表

var queryApprovalList = function queryApprovalList(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/examine/pending_review_list',
    method: 'get',
    params: params
  });
}; //审核

var submitDeptApproval = function submitDeptApproval(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/examine/department_approval',
    method: 'post',
    data: params
  });
}; // 赋码类型下拉框

var queryClueTypes = function queryClueTypes() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/examine/type_list',
    method: 'get',
    params: {}
  });
}; //污染源列表

var queryWRYList = function queryWRYList(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/home/pollution_list',
    method: 'get',
    params: params
  });
}; //区域下拉框

var queryAreas = function queryAreas() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/home/division_list',
    method: 'get',
    params: {}
  });
}; //任务概括

var getTaskInfo = function getTaskInfo() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/law/task_summarize',
    method: 'get',
    params: {}
  });
}; //风险总览

var getEvaluateInfo = function getEvaluateInfo(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/evaluate/region_map',
    method: 'get',
    params: data
  });
}; // 风险问题类型

var getRiskType = function getRiskType() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/evaluate/top_info',
    method: 'get',
    params: {}
  });
}; // ==================================== 赋码规则 ====================================
//环保码规则查询

var queryRuleList = function queryRuleList(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/evaluate/rule_list',
    method: 'get',
    params: params
  });
}; //部门下拉框

var queryHbmDepartment = function queryHbmDepartment() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/interface/dept/dept_tree',
    method: 'GET',
    params: {}
  });
}; //校验

var checkRules = function checkRules(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/evaluate/check',
    method: 'get',
    params: params
  });
}; // 修改规则

var editRules = function editRules(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/evaluate/update',
    method: 'post',
    data: params
  });
}; // ====================================== 地图 ===================================
// 地图点位

var queryWRYMap = function queryWRYMap(params) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/home/pollution_map',
    method: 'get',
    params: params
  });
}; // ====================================== 统计报表 ===================================

var queryStatistics = function queryStatistics() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/app/statistics/division_pie',
    method: 'get',
    params: {}
  });
}; // ====================================== 动态评价 ===================================
//各区域投诉占比

var complaintProportion = function complaintProportion(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/cluster/airQuality/complaintProportion',
    method: 'get',
    params: data
  });
};

/***/ }),

/***/ "./src/assets/polluter/blue_com.png":
/*!******************************************!*\
  !*** ./src/assets/polluter/blue_com.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAMVSURBVDiNpZVLa11VFMd/a+19z7mPREhMoOlAEREkh34CY8nAoaPC7cRP4EAUKsXiwJORAwdCO3Us1ED9ACpUTUHHcpORE5UkENvEel/nnL33cnATc6O1KK7hevzXc/+3cEFMMCi3kMEAOSqQTWB/DQG4fIDdB1YHWFFg5QfYzCJ2hiDzYGU5A1p6Dc0rtHqE86vodDjzay9geUUMnlTlpOMvSdufkeZBZR7sPuiVZdxJhe88g08VN8UQg1sifG0GmviILjtAc3xAYJ1Y7GJliYGYnLW5uYW7sowbTchCjyw3bljiFk+Wb2rHtQWhcpHm8BJhu09CxBSgfx1dBY2OlnVoZ5F7TwEDuJpF3g0T2tHRYhfXv46CiZblbGZLa/ihkXtjA7h6IVy4LfCmwM6c9r3U4sbQyJfAFwWCgQ4GSF6hHNOipm3wzvmeeGDC65L4AuMXgw8v5kG9kY+W8Q+XceUWovTBB3S6gM9aZPObF/hUDIuOGB3xVH3nPB83FXKntA4DOlhHtNhFfo1oFvApkgGvnh8SLychKFQKVRICwt5cid9KTavrcO2IFruI7q8hi11EDVVDBT6e6+otFQJGg9GoEEi88WdCQ0xx04QudpH9NUSfsslZUGJL4CUS10h8hfDKmc3BJ3/195cPsB97WN4iiSeGwF0vqMHbp3PcMGNj/k2d6neisKeJ2FbS70PsxRGmg3VsxZFqTzCjUaVOxj2MB/9YtnA7Ge9rpLaMZhyJK440WMdcQandFxAZoTFDveBMcAY7Ct9hLAE/IzwH3EH4nsjnKowbzxgYN8Y0V8LzPxF9UWD7OYmcJjRUMmWiiksegD0RShIOg6hESdQqTIIyyiLjqafqPSQ8y+ysBEz6fZQCt9ghtw5tremKo2uOtkBuEQfghBCV2gkTImMCY99henREzYC4vU16Ijl4R65KXgs5Qst0BiiJiNHgmQah+js5gIIYApuQfnhE7HWoJ8Yk9Rj6yONU85sIJyKcKJz4yGM/YtRuMTk6oj68RCh2z4n2PxFso6QVR/oXBHsO+n+/gD8AiC6LnMzvTPYAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/polluter/green_com.png":
/*!*******************************************!*\
  !*** ./src/assets/polluter/green_com.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAANoSURBVDiNrZXNi5xFEMZ/Vd3vOzO7s7tZYRYMRknAKNmT5CCYjca7p8BeVPwHRBSEQBBxc/IoJFcPOQmyqDcvIkzUXPTsRnKQgBKDA8kmO7PvZ1d5mMl+hNWTBU1Dd/XD83RVPy0cDsGBKwhn1oXBSAC4vTOdTy84AKOBs7XpfIIz3fF9gINgGzOgB78rJ1aUFAP9rpJV07ym43RIbI+NP/42lk8Z65t2EDQcAnvtgqIeeaqbERfzfJ7LQf3V4PKtoq8EsTcz87+Sd+9yqgfHIwxXYXULhvsMpzKHFwJFL7CY5ZQhz3P5EPwyR4TDD03NRUKsKMYN4347Y+oBEFbXlZPzgTrPkdjLgn0l8PZRYDMWz4WIJat/IZtzTuIMV2Fzi8AGSuwFBr2Mgm4ufl6ES4cAhKsO1xGOCTw7W14LQS019jOj2lh+YFy/48qZdeHEivKgm/Ukdl39gwPSbgryBi3faeJPNf30Ca46Z6nDYDFS9AJsiAJwrK9IGz2SIwcqb/IFLo54QjxN5cq1/cv0S9bxDuPdjHFf2fxVlMFI2OnqPCl6qnJxzj/OV+VFSK2IVCJSQWoNubWHJ/zoGrN+j8DSQ2UwEuX2jpCX4nlUD0EFPtuX7O8J0rZuTeuhEaQFe+tAucWN4HVU8iXh9s5M8n9EUq6IxOeD2kUTvhc4t7ep+vmT+ZHTC07ddQkPTTohWaNfambqzvsA4qwhtuZPHHThJyzdEpUksTXGfef0giujgbNQ2oTQisWGQJ1Mvna4+W+sRbjqJh+RqMXaZlyQWCiN0cAjANtjI+u3GqrKmqwgWBZMP07qLzBrcIFzglxD3FPr34hIIYRSK6tYnGu4f99Yf9mFDZSnzwbOHs/Yjr2uSN9E+h7TvCO9KJK5SwCQ5KlVanEK0TDRqhiXkk0o2oL+Ts2NoQWGwDtr04feNtJq5lkyR3HQ5AkzpXWoPUgpLoW4TDTIpCTtonnFM7Hhzrzx7pYfbQ6Nd3qdbsdT6riEzG3qSqIkKVOj3bbcLUN1hDmg024CbgyNXpF41NTUVVFMGJdt8yg2PIxltf14lKF5tFt0JhxrC1aoGfdbtjb3jDbslW4InLwDSy859+4a/SxRaWry2DTdVDcZdVMtVcxRsztu+O1eYmd5arCvz9qcw44N/8MX8A86XL02EoZuEwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/polluter/info.png":
/*!**************************************!*\
  !*** ./src/assets/polluter/info.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAIXSURBVEiJvZdbsqQgDIb/0LOJttzLwS1pzbP4bNlbkt7LlK6iyTw0KM3F25wzebFQki+BECLhoHBfStxe7fqCJACAWNvxE0Zo+v1HH7FHu8ChUADavXmBdNRM6hJ4idBFdk2yDiTBF6M8BY/A3wzNwj/Ah6F+QhF/HdyOD/gC3oUSa7xu3VbW7towonL6Ppj3gDwUKhlhOOctsQPEmuq5AgDheZqEUj1XEEZax9JZziQhzMiP+wgjNDWTWrYjmOdYtBUtNRNxX0oIMyYdy0tHzaS27AruyzgCqwwAF6CAW2YjqtRH7kspIEwSTM2k+HG/An0bHwqVTcTbqxUg/oqpif0BuuB9OP585+ymbeFX2l162qd0ylTPCrD54I8f9xFM0j8qPBS86L5tyRicytJwFZikTTIZjdkafX/T2RMS2EtHvEoHlyhhksVJ1/JQrGfXX3KOrwSRO287Du3L69ZlbRFrkdPjoVC2tnYXsGEViyQLBtByX8psFcoJsbbFQyFXt5meYlmSpFtm5L6UVM8VjKgOONBRPVe2KG1dFnqzZH4YtFfaUulc/7XuYbcbqRVqJnLg3cnOeNjQeblw1E5HzaTWa9EVghNCzfR2/ER/5nTW5Nra6w3hoVAQ5qjTC+Na67Nosz6xSunW5zL8AjQJ/gF4sr1NFpB/qFieEdYwojrV0Pvy339hIgfcNeiuzPCnDcBe++vLXyBMW0hooaKqAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/polluter/map.png":
/*!*************************************!*\
  !*** ./src/assets/polluter/map.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAALESURBVEiJxZdPTNNQHMe/7dq5DSaDFaYGCDPROP9GLyYDBV2iNxMTL3JVwbDL1JF4IxgTNRj0gtFgYrwYbx48KIkJLga8iAYjAzECIoLABpVB59YCHmrZSjvW1SLfpHmvv9/7vc/7vb732hLQKH87F3C4zE0AYGdMjnRfLLLIxueFXgBorbXUaOmPyNbg8pPfr0sqNlVrHSAATI0kQtkGkBHsb+cCZXusd3IB5jIAVbCeLHOFK8BGQteCy8B6oFXOFpRZu1Fu68Yo50XXTCNGOW9W+ApYD7Tc1o2zpacV9luDk6rtv/fFL7VdsN0FAFIy6pneyqIWVXuVU92evlhJQMw2VyggZqwKsKrb01kUoMz24QexdP89JtyFwHbZkQF4mMwDCk14McQqY9JZVKZsh1jxAgCMiMX5g8CVw6k2UQThXL6tiH0UrkRoXKz7KgCfW+73t3MBUhFlgELjqVU9zCr9Dpe5ibTmUwf0AqJoRJQIymzXeoIZWstFrj7w9cA5eFegze8as8bYGZOD+heopDHiGQbHWjRBJRn2jJ//0A41FJyryFhkUWXdra9ikUV2QzKOzwu9JDuZbN4IOCm9Lf6nWmstNRQAdHwUBopLqF2S49BWoKwAmF4Q78MRsfwykwru/CaWw2zqdDrjAcLTYn2aE69YEnj/MxU3NSl8BqT38c3lAgcFdi5heHIyufKAiQBBANJ2ukr82k/zbeuLBY5u5nukuuzT59h9vj8UTU25kTrJCJ9e1NP7VMEAcOQeP9g1S+0wEnqcEfpf1dO7022Kffymgd5Z7RQGjIKeKOb7VkNVwQDQeZH2nHLxvUVW/cAt+YDPzre+rDPvVfNn/YXxPeDDY0uUJ30rrSUPA5QSQl9HHa0K1AyWdO5x4u1XjiycXTa5JxKEeS4BkARgNwPbLEvJUhuEvIXkjacN1uta+vsDFJP29dLvmKcAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/polluter/report.png":
/*!****************************************!*\
  !*** ./src/assets/polluter/report.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAMJSURBVEiJtZfLTxNRFIe/Mx0UQaMpRmtErKkEMCpBIxiJoSYmvhaKrlzA1o2JJmIiK8paN0T/AlgZY3RjYtyICw2wAMcXMaWoIEYlIBLFF+11MR3p0JnplOJv086dc893zpk7954RfGoorqISUB0AKKK2m0KvUuoRQF0kEPPjT3ICE8mYIB1+AzTjUp25AnAFD8VVVDT1MB9gPgFojtBEMlYoFECQjqFE0hGclfFSSptLTpnbwJnQVSshEhLEsSa5NT8Pbz8rfvxyhv8DL850R4VQpMPwBMx8zw+6rhRqNkMyBS/eqn/jKiWH6iqlF0BfiMBe3iIdBhJw435+UEvnj0J9xD6WXjcC6cXltgAmpuzX7aeguR72huFApTd48VxLFkuH7Gyd1H7KLB/ACoHyoGJLULjZDzXFBtXFBtXFz7g708Lwz1pXP2lWTHfLNlPN9QtQS6HJHkLAiXCPbbw/tZth3MFg7hG6p0VadwZgatb8vyllcOJ3m6vt1zkYm/H2JwHVoYlIkx94VUixb5uiPLIbo+YB30qcs2oIPvPjDi1rw3fR7A/7XpPYetXRbn/Q4OtcDmeKqO/t4Ukc3k8vwCPvLvud6ijf4PFpuNkPLycEbbSH1XOG7X7XSAt902b5a4oNJxc2+VpcmVo11s2udfaV3DXSQtdIKwAXtnf78qMj9Pp5zta72uwFPQa3+lr58AX2fPJwJvT6yrg91JZVvkxgxXo42wjnDsOveXj82tufUuqRrpLSKZqKehleGb1GWDOYTL/L1rM8XQ/lZTD4xm6/tgQiG73hmnVaeKmxCrou1dJ0sJaTR2oZvW5meKYBLh7PNTtbdZFATAPzrMx/unmC5SuLpVsRPE2ksg6KzWXm74txuN0PfXEoXQkIjE/BvUF4Pmba9MVh/RrTNnPuYlnNwEIjsKi52xkWAlphjcCfeXg1ltEIZHQhnq1PeIOgL6GcACoFiY8+Wh8n+HIpZ7P3P+BuvbV7Q78M8Mzmzje4kAAK+oRxCgBARJqcPtoAVFI6/WxIAH8BQ9o23dYl7u4AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/polluter/rule.png":
/*!**************************************!*\
  !*** ./src/assets/polluter/rule.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGcSURBVEiJxZdRjoQgDIZ/zF6IE2yNHotkNOFYGDsn4Ejsg2gYVsbCzOz2hYRgv7a0tCoIZfSGAnBLtiiuDAAKuANgpy1L9CkBcMqAEqWz03ZqAiceUg1UasApuMXLWvgv8Duhz+AP4E9AS/ADXICyAuZGVl4FUEC/Z/3XvnkGXbTtR28IDQnmtJ1GbzgAa8bgaMS5t9HThw8rhRdt+8GbkOt12k5dYkm14pZr2FldDGU1dNG2RwxbYki+dyqjN9RBcH8KmKPSAxofmDXdi7ou9QXg1gXgW3Dw22nLCuhL0NpS7ITnaPBmddryO6DAVk5UAQ9JijZDAZDU41xegQLYQs0vQtOyYqE+rvX41FOn7bQnXhwILqUGXAovjd5QkniXoVfAvZO+PgqYS41kh8YGwBInOumMFIC14A0N3qwBWAdvRO+603a74xda3wFPViqeSlhHP47Wph8dd9poDOOkJy/aKiDpxwqYwyOYIpQbwcif4zSy/z/6fBJ+Oex9Ai4eb98I5wjlgkHP5c9/YU4MIGzlsWcqxZUzIEMgP2u2ClDMobQ9AAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/polluter/yellow_com.png":
/*!********************************************!*\
  !*** ./src/assets/polluter/yellow_com.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAL6SURBVDiNpZVBayRFFMd/71VX9/RM1N3Ayo4HQRhBJh/BdU8ePS1kL34CD6Kwsrh4cHLy4EFwr54FFdYPoB7ULOgHyOwlJxUDLsRJzExPd1fV8zAT0hOCIhYUBVXv/arqvVf/EjrNQDBgD+EAYQcBYLgejzAADjB2MD7EEBDW87A2PIdN1qDXUeqRcrxw0CqlrewqMZ4tIlkvURwmviXxJakLlQ0YKNsjR/1XRhxkZPV9BAF7gMj3GJDix8T+PteXLUfXAuNpZIoxwQRMOtd0bI8c1SxnUOTU3AN7wNXtBwq5gzQ18bmWm4eBXZIIpgDcRWGsuBNPzHrU9ugfYAC3aew9Kt/DnXimY8dd1ECUyTpmw1mG5QU9uQXc3nAXPsXsLWC/k8H3Ue5xkhcwy9hZ3VQ5QKhHyp+Vp5EeJu92UI9J8gYm3yD6G+hHGxsZitOC7WXG9sixhyi7QFgqW/2M2ObdzCN8jkbDYsRihADwsIO8jzYFZ6UnLJUxokwRYquENiO5HHitc4JXEA04V+NcjWgAedIB/ohmHh8csVWmiDJE6CfBSiU3ReSTjsPbRAlYarHUIhLA3tyIriaHJaWfhCGiF2vzq/OptofJy5jeIdl3wKsXOPnssnnGEcZADW+JqJEkX+BQzN5Z29xadbvsuw/xCclFRBMLjDmmjDGcT2Q+kEKLpgZNj4DHVx+Z8zL6gOAaUmhps4jziTHmJqC89LwwP1UoFTEH5kD3EfsJ5DrwK/Ai8BDhZ2L6Gs8CkwXJLxgslugzgV+Oo9gEZYiDFzytlCzTFmpbkA0glIh6ojkAnETEGrCKwJygZySZ01gFvzdAWr3lXZSdsaP8oyBmPXLp4+iTpAdSoGugaCCmBqMiY0FgQdkueXqj4WAa+eoceFkcXF6gWiBtgThPSCtgphGLLU2+ZJDqy+KAgAorkQQSx4eR8lqDxYomPyO6U5r2hOhnRD+DMCO6U+xsjreKpzcabh4GphdC+98EVl1aVcS/COwG9H9+AX8DWbx3p+KivdUAAAAASUVORK5CYII="

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

/***/ "./src/views/environmentCode/index.vue":
/*!*********************************************!*\
  !*** ./src/views/environmentCode/index.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_b8602d0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=b8602d0e&scoped=true& */ "./src/views/environmentCode/index.vue?vue&type=template&id=b8602d0e&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/environmentCode/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_b8602d0e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=b8602d0e&scoped=true&lang=scss& */ "./src/views/environmentCode/index.vue?vue&type=style&index=0&id=b8602d0e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_b8602d0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_b8602d0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "b8602d0e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/environmentCode/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/environmentCode/index.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./src/views/environmentCode/index.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/environmentCode/index.vue?vue&type=style&index=0&id=b8602d0e&scoped=true&lang=scss&":
/*!*******************************************************************************************************!*\
  !*** ./src/views/environmentCode/index.vue?vue&type=style&index=0&id=b8602d0e&scoped=true&lang=scss& ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b8602d0e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=b8602d0e&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/index.vue?vue&type=style&index=0&id=b8602d0e&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b8602d0e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b8602d0e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b8602d0e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_b8602d0e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/environmentCode/index.vue?vue&type=template&id=b8602d0e&scoped=true&":
/*!****************************************************************************************!*\
  !*** ./src/views/environmentCode/index.vue?vue&type=template&id=b8602d0e&scoped=true& ***!
  \****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b8602d0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=b8602d0e&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/environmentCode/index.vue?vue&type=template&id=b8602d0e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b8602d0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_b8602d0e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2Vudmlyb25tZW50Q29kZS9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Vudmlyb25tZW50Q29kZS9pbmRleC52dWU/OGNhOCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29vcmR0cmFuc2Zvcm0vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZW52aXJvbm1lbnRDb2RlL2luZGV4LnZ1ZT80YTNhIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9lbnZpcm9ubWVudENvZGUvaW5kZXgudnVlPzJiNTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BvbGx1dGVyL2JsdWVfY29tLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BvbGx1dGVyL2dyZWVuX2NvbS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wb2xsdXRlci9pbmZvLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BvbGx1dGVyL21hcC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wb2xsdXRlci9yZXBvcnQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcG9sbHV0ZXIvcnVsZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wb2xsdXRlci95ZWxsb3dfY29tLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvc2V0ZGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZW52aXJvbm1lbnRDb2RlL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvZW52aXJvbm1lbnRDb2RlL2luZGV4LnZ1ZT9hZDAyIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9lbnZpcm9ubWVudENvZGUvaW5kZXgudnVlP2Q2NDYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2Vudmlyb25tZW50Q29kZS9pbmRleC52dWU/MmRlZSJdLCJuYW1lcyI6WyJxdWVyeVN1cGVydmlzaW9uIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInBhcmFtcyIsInF1ZXJ5SGJtVHJlbmQiLCJxdWVyeUhibUFuYWx5c2lzIiwicXVlcnlIYm1Db2RlQW5hbHlzaXMiLCJxdWVyeUFwcHJvdmFsTGlzdCIsInN1Ym1pdERlcHRBcHByb3ZhbCIsImRhdGEiLCJxdWVyeUNsdWVUeXBlcyIsInF1ZXJ5V1JZTGlzdCIsInF1ZXJ5QXJlYXMiLCJnZXRUYXNrSW5mbyIsImdldEV2YWx1YXRlSW5mbyIsImdldFJpc2tUeXBlIiwicXVlcnlSdWxlTGlzdCIsInF1ZXJ5SGJtRGVwYXJ0bWVudCIsImNoZWNrUnVsZXMiLCJlZGl0UnVsZXMiLCJxdWVyeVdSWU1hcCIsInF1ZXJ5U3RhdGlzdGljcyIsImNvbXBsYWludFByb3BvcnRpb24iLCJnZXRUaGlzRGF0ZSIsImUiLCJub3dUaW1lIiwidGltZSIsIkRhdGUiLCJ5IiwiZ2V0RnVsbFllYXIiLCJsbSIsImdldE1vbnRoIiwibSIsImQiLCJnZXREYXRlIiwiaCIsImdldEhvdXJzIiwiTSIsImdldE1pbnV0ZXMiLCJzIiwiZ2V0U2Vjb25kcyIsImZvcm1hdERhdGUiLCJkYXRlIiwibiIsImhvdXJEYXRlRm9ybWF0IiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1vbnRoRGF0ZUZvcm1hdCIsImZvdXJIb3VyVGltZSIsIm5vd0RhdGUiLCJob3VycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFmLEdBQW1CQyxHQUFuQixHQUF1QixHQUF2QixHQUEyQkssS0FBM0IsR0FBaUMsUUFBeEM7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUM5RkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFnRztBQUN2QztBQUNMO0FBQ3NDOzs7QUFHMUY7QUFDNkY7QUFDN0YsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsMkVBQU07QUFDUixFQUFFLDRGQUFNO0FBQ1IsRUFBRSxxR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBOFIsQ0FBZ0Isc1VBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBbFQ7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvNjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICAgIDx2YW4tbmF2LWJhciB0aXRsZT1cIueOr+S/neeggVwiIGxlZnQtYXJyb3cgZml4ZWQgQGNsaWNrLWxlZnQ9XCIkcm91dGVyLmdvKC0xKVwiIHJpZ2h0LXRleHQ9XCLmtojmga9cIiBAY2xpY2stcmlnaHQ9XCJ0b0NoZWNrXCI+XHJcbiAgICA8L3Zhbi1uYXYtYmFyPlxyXG4gICAgPGRpdiBjbGFzcz1cInNjcm9sbC10by10b3Atd3JhcHBlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFRvcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50VGl0bGVcIj5cclxuICAgICAgICAgIDxzcGFuPuW/q+aNt+WFpeWPozwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPVwid2lkdGg6MTAwJTtkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG5fZGl2XCIgQGNsaWNrPVwiZ29Ub01hcFwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIkAvYXNzZXRzL3BvbGx1dGVyL21hcC5wbmdcIi8+XHJcbiAgICAgICAgICAgIDxzcGFuPuWcsOWbvjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImJ0bl9kaXZcIiBAY2xpY2s9XCJnb090aGVycygnY29kZVN0YXRpcycpXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMvcG9sbHV0ZXIvcmVwb3J0LnBuZ1wiLz5cclxuICAgICAgICAgICAgPHNwYW4+57uf6K6h5oql6KGoPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnRuX2RpdlwiIEBjbGljaz1cImdvT3RoZXJzKCdjb2RlUnVsZXMnKVwiPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIkAvYXNzZXRzL3BvbGx1dGVyL3J1bGUucG5nXCIvPlxyXG4gICAgICAgICAgICA8c3Bhbj7otYvnoIHop4TliJk8L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJidG5fZGl2XCIgQGNsaWNrPVwiZ29PdGhlcnMoJ2V2YWx1YXRlJylcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJAL2Fzc2V0cy9wb2xsdXRlci9pbmZvLnBuZ1wiLz5cclxuICAgICAgICAgICAgPHNwYW4+5Yqo5oCB6K+E5Lu3PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFRvcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50VGl0bGVcIj5cclxuICAgICAgICAgIDxzcGFuPueOr+S/neeggeamguWGtTwvc3Bhbj5cclxuPCEtLSAgICAgICAgICA8ZGl2Pi0tPlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cImNvbG9yOnJnYmEoMTgsIDE4LCA1NCwgMC41KTtmb250LXNpemU6IDEycHg7bWFyZ2luLWxlZnQ6IDEwcHg7Zm9udC13ZWlnaHQ6IDQwMDtcIj7ntK/orqHmiKroh7N7e3RvZGF5fX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6IzE2NzdmZjtmb250LXNpemU6IDEycHg7Y3Vyc29yOiBwb2ludGVyO21hcmdpbi1sZWZ0OiBhdXRvO1wiIEBjbGljaz1cInNob3dNb3JlKCczJylcIj7mm7TlpJo8L3NwYW4+XHJcbjwhLS0gICAgICAgICAgPC9kaXY+LS0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGVudmlyb24tY29kZS8+XHJcbjwhLS0gICAgICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDoxMDAlO2Rpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1wiPi0tPlxyXG48IS0tICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3BDYXJkXCIgQGNsaWNrPVwic2hvd01vcmUoJzMnKVwiPi0tPlxyXG48IS0tICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvcExpbmVcIj4tLT5cclxuPCEtLSAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi9hc3NldHMvY29kZS9yZWQucG5nXCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDEwcHg7XCI+LS0+XHJcbjwhLS0gICAgICAgICAgICAgIDxzcGFuPue6oueggTwvc3Bhbj4tLT5cclxuPCEtLSAgICAgICAgICAgIDwvZGl2Pi0tPlxyXG48IS0tICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvcExpbmVcIj4tLT5cclxuPCEtLSAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJudW1cIj57e2luZm8ucmVkfX08L3NwYW4+LS0+XHJcbjwhLS0gICAgICAgICAgICAgIDxzcGFuPuWutjwvc3Bhbj4tLT5cclxuPCEtLSAgICAgICAgICAgIDwvZGl2Pi0tPlxyXG48IS0tICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvcExpbmVcIj4tLT5cclxuPCEtLSAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJjb2xvcjogIzE2NzdmZjtcIj57e2luZm8ucmVkX3BlcmNlbnRhZ2V9fSU8L3NwYW4+LS0+XHJcbjwhLS0gICAgICAgICAgICA8L2Rpdj4tLT5cclxuPCEtLSAgICAgICAgICA8L2Rpdj4tLT5cclxuPCEtLSAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9wQ2FyZFwiIEBjbGljaz1cInNob3dNb3JlKCcyJylcIj4tLT5cclxuPCEtLSAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3BMaW5lXCI+LS0+XHJcbjwhLS0gICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vYXNzZXRzL2NvZGUveWVsbG93LnBuZ1wiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAxMHB4O1wiPi0tPlxyXG48IS0tICAgICAgICAgICAgICA8c3Bhbj7pu4TnoIE8L3NwYW4+LS0+XHJcbjwhLS0gICAgICAgICAgICA8L2Rpdj4tLT5cclxuPCEtLSAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3BMaW5lXCI+LS0+XHJcbjwhLS0gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibnVtXCI+e3tpbmZvLnllbGxvd319PC9zcGFuPi0tPlxyXG48IS0tICAgICAgICAgICAgICA8c3Bhbj7lrrY8L3NwYW4+LS0+XHJcbjwhLS0gICAgICAgICAgICA8L2Rpdj4tLT5cclxuPCEtLSAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3BMaW5lXCI+LS0+XHJcbjwhLS0gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6ICMxNjc3ZmY7XCI+e3tpbmZvLnllbGxvd19wZXJjZW50YWdlfX0lPC9zcGFuPi0tPlxyXG48IS0tICAgICAgICAgICAgPC9kaXY+LS0+XHJcbjwhLS0gICAgICAgICAgPC9kaXY+LS0+XHJcbjwhLS0gICAgICAgICAgPGRpdiBjbGFzcz1cInRvcENhcmRcIiBAY2xpY2s9XCJzaG93TW9yZSgnMScpXCI+LS0+XHJcbjwhLS0gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9wTGluZVwiPi0tPlxyXG48IS0tICAgICAgICAgICAgICA8aW1nIHNyYz1cIi4uLy4uL2Fzc2V0cy9jb2RlL2dyZWVuLnBuZ1wiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAxMHB4O1wiPi0tPlxyXG48IS0tICAgICAgICAgICAgICA8c3Bhbj7nu7/noIE8L3NwYW4+LS0+XHJcbjwhLS0gICAgICAgICAgICA8L2Rpdj4tLT5cclxuPCEtLSAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3BMaW5lXCI+LS0+XHJcbjwhLS0gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibnVtXCI+e3tpbmZvLmdyZWVufX08L3NwYW4+LS0+XHJcbjwhLS0gICAgICAgICAgICAgIDxzcGFuPuWutjwvc3Bhbj4tLT5cclxuPCEtLSAgICAgICAgICAgIDwvZGl2Pi0tPlxyXG48IS0tICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvcExpbmVcIj4tLT5cclxuPCEtLSAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJjb2xvcjogIzE2NzdmZjtcIj57e2luZm8uZ3JlZW5fcGVyY2VudGFnZX19JTwvc3Bhbj4tLT5cclxuPCEtLSAgICAgICAgICAgIDwvZGl2Pi0tPlxyXG48IS0tICAgICAgICAgIDwvZGl2Pi0tPlxyXG48IS0tICAgICAgICA8L2Rpdj4tLT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8aGVhbHRoLXJlY29yZC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFRvcFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50VGl0bGVcIj5cclxuICAgICAgICAgIDxzcGFuPui1i+eggeS4juaVtOaUuTwvc3Bhbj5cclxuPCEtLSAgICAgICAgICA8ZGl2Pi0tPlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cImNvbG9yOnJnYmEoMTgsIDE4LCA1NCwgMC41KTtmb250LXNpemU6IDEycHg7bWFyZ2luLWxlZnQ6IDEwcHg7Zm9udC13ZWlnaHQ6IDQwMDtcIj57e25vd01vbnRofX08L3NwYW4+XHJcbjwhLS0gICAgICAgICAgPC9kaXY+LS0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT1cIndpZHRoOjEwMCU7ZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9wQ2FyZDJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvcExpbmUyXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJAL2Fzc2V0cy9wb2xsdXRlci95ZWxsb3dfY29tLnBuZ1wiLz5cclxuICAgICAgICAgICAgICA8c3Bhbj7mnKrlrozmiJA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9wTGluZTJcIiBzdHlsZT1cIm1hcmdpbi10b3A6NXB4O1wiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibnVtXCIgc3R5bGU9XCJjb2xvcjogcmdiYSgyNTUsIDE0MSwgMjYsIDEpO1wiPnt7dGFza0luZm8ubm90X2NvbXBsZXRlfX3kuKo8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9wQ2FyZDJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvcExpbmUyXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCJAL2Fzc2V0cy9wb2xsdXRlci9ibHVlX2NvbS5wbmdcIi8+XHJcbiAgICAgICAgICAgICAgPHNwYW4+5bey5a6M5oiQPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvcExpbmUyXCIgc3R5bGU9XCJtYXJnaW4tdG9wOjVweDtcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm51bVwiIHN0eWxlPVwiY29sb3I6IHJnYmEoNiwgMTk0LCA4MSwgMSk7XCI+e3t0YXNrSW5mby5jb21wbGV0ZV9jb3VudH195LiqPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRvcENhcmQyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3BMaW5lMlwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMvcG9sbHV0ZXIvZ3JlZW5fY29tLnBuZ1wiLz5cclxuICAgICAgICAgICAgICA8c3Bhbj7lhajpg6jku7vliqE8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9wTGluZTJcIiBzdHlsZT1cIm1hcmdpbi10b3A6NXB4O1wiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibnVtXCIgc3R5bGU9XCJjb2xvcjogcmdiYSgxMDAsIDE0NSwgMjU1LCAxKTtcIj57e3Rhc2tJbmZvLm1vbnRoX3RvdGFsfX3kuKo8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFRvcFwiIHN0eWxlPVwiaGVpZ2h0OiAxMDBweDtcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFRpdGxlXCI+XHJcbiAgICAgICAgICA8c3BhbiBzdHlsZT1cImNvbG9yOiMxZDFmMjQ7XCI+6aOO6Zmp5oC76KeIPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDoxMDAlO2Rpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRvcENhcmQzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3BMaW5lM1wiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibnVtXCI+e3tyaXNrSW5mby5oaWdoX3Jpc2t9feS4qjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3BMaW5lM1wiIHN0eWxlPVwibWFyZ2luLXRvcDo1cHg7XCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZWRcIj7pq5jpo47pmak8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9wQ2FyZDNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvcExpbmUzXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJudW0gXCI+e3tyaXNrSW5mby5tZWRpdW1fcmlza3195LiqPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvcExpbmUzXCIgc3R5bGU9XCJtYXJnaW4tdG9wOjVweDtcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInllbGxvd1wiPuS4remjjumZqTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3BDYXJkM1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9wTGluZTNcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm51bVwiPnt7cmlza0luZm8ucmlza3195LiqPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvcExpbmUzXCIgc3R5bGU9XCJtYXJnaW4tdG9wOjVweDtcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImdyZWVuXCI+5L2O6aOO6ZmpPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRvcENhcmQzXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b3BMaW5lM1wiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibnVtXCI+e3tyaXNrSW5mby50b3RhbH195LiqPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvcExpbmUzXCIgc3R5bGU9XCJtYXJnaW4tdG9wOjVweDtcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJsdWVcIj7pooTorabmgLvmlbA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFRvcFwiIHN0eWxlPVwiaGVpZ2h0OiAyNTBweDtcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFRpdGxlXCIgc3R5bGU9XCJqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW5cIj5cclxuICAgICAgICAgIDxzcGFuPueOr+S/neeggeWPmOWMlui2i+WKvzwvc3Bhbj5cclxuICAgICAgICAgIDx2YW4tcmFkaW8tZ3JvdXAgdi1tb2RlbD1cInR5cGVcIiBzdHlsZT1cIm1hcmdpbjogMTBweCAwO2ZvbnQtc2l6ZTogMTJweDtmb250LXdlaWdodDogNDAwO1wiIGRpcmVjdGlvbj1cImhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgPHZhbi1yYWRpbyB2LWZvcj1cIml0ZW0gaW4gdHlwZURhdGFcIiA6bmFtZT1cIml0ZW1cIiA6a2V5PVwiaXRlbVwiIGljb24tc2l6ZT1cIjEycHhcIj57e2l0ZW19fTwvdmFuLXJhZGlvPlxyXG4gICAgICAgICAgPC92YW4tcmFkaW8tZ3JvdXA+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBzdHlsZT1cIndpZHRoOjEwMCU7aGVpZ2h0OiBjYWxjKDEwMCUgLSAzMHB4KTtcIj5cclxuICAgICAgICAgIDxkaXYgaWQ9XCJ0cmVuZENoYXJ0XCIgc3R5bGU9XCJ3aWR0aDoxMDAlO2hlaWdodDoxMDAlO1wiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRUb3BcIiBzdHlsZT1cImhlaWdodDogMzEwcHg7XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRUaXRsZVwiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuXCI+XHJcbiAgICAgICAgICA8c3Bhbj7njq/kv53noIHljp/lm6DliIbmnpA8L3NwYW4+XHJcbiAgICAgICAgICA8dmFuLXJhZGlvLWdyb3VwIHYtbW9kZWw9XCJyZWFzb25UeXBlXCIgc3R5bGU9XCJtYXJnaW46IDEwcHggMDtmb250LXNpemU6IDEycHg7Zm9udC13ZWlnaHQ6IDQwMDtcIiBkaXJlY3Rpb249XCJob3Jpem9udGFsXCI+XHJcbiAgICAgICAgICAgIDx2YW4tcmFkaW8gdi1mb3I9XCJpdGVtIGluIHR5cGVEYXRhXCIgOm5hbWU9XCJpdGVtXCIgOmtleT1cIml0ZW1cIiBpY29uLXNpemU9XCIxMnB4XCI+e3tpdGVtfX08L3Zhbi1yYWRpbz5cclxuICAgICAgICAgIDwvdmFuLXJhZGlvLWdyb3VwPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJ3aWR0aDoxMDAlO2hlaWdodDogY2FsYygxMDAlIC0gMzBweCk7XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGJtUmFkaW9CdG5cIj5cclxuICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgIDxsaSA6Y2xhc3M9XCJtdHlwZSA9PT0gJ+e6oueggScgPyAnYWN0aXZlJyA6ICcnXCIgQGNsaWNrPVwiY2hhbmdlSGJtKCfnuqLnoIEnKVwiPue6oueggTwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpIDpjbGFzcz1cIm10eXBlID09PSAn6buE56CBJyA/ICdhY3RpdmUnIDogJydcIiBAY2xpY2s9XCJjaGFuZ2VIYm0oJ+m7hOeggScpXCI+6buE56CBPC9saT5cclxuICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBpZD1cInJlYXNvbkNoYXJ0XCIgc3R5bGU9XCJ3aWR0aDoxMDAlO2hlaWdodDpjYWxjKDEwMCUgLSA0MHB4KTtcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50VG9wXCIgc3R5bGU9XCJoZWlnaHQ6IDMxMHB4O21hcmdpbi1ib3R0b206IDEwcHhcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFRpdGxlXCI+XHJcbiAgICAgICAgICA8c3Bhbj7po47pmanpl67popjnsbvlnoso5YmN5YWtKTwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPVwid2lkdGg6MTAwJTtoZWlnaHQ6IGNhbGMoMTAwJSAtIDMwcHgpO21hcmdpbi10b3A6IDEwcHg7XCI+XHJcbiAgICAgICAgICA8ZGl2IGlkPVwicmlza0NoYXJ0XCIgc3R5bGU9XCJ3aWR0aDoxMDAlO2hlaWdodDpjYWxjKDEwMCUgLSA0MHB4KTtcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCB7aG91ckRhdGVGb3JtYXQsIG1vbnRoRGF0ZUZvcm1hdCxnZXRUaGlzRGF0ZX0gZnJvbSBcIi4uLy4uL3V0aWxzL3NldGRhdGVcIjtcclxuICBpbXBvcnQge1xyXG4gICAgcXVlcnlTdXBlcnZpc2lvbixcclxuICAgIGdldFRhc2tJbmZvLFxyXG4gICAgZ2V0RXZhbHVhdGVJbmZvLFxyXG4gICAgcXVlcnlIYm1UcmVuZCxcclxuICAgIHF1ZXJ5SGJtQW5hbHlzaXMsXHJcbiAgICBnZXRSaXNrVHlwZVxyXG4gIH0gZnJvbSAnLi4vLi4vYXBpL2luZGV4JztcclxuICBpbXBvcnQgKiBhcyBlY2hhcnRzIGZyb20gJ2VjaGFydHMnO1xyXG4gIGltcG9ydCBjb29yZHRyYW5zZm9ybSBmcm9tIFwiY29vcmR0cmFuc2Zvcm1cIjtcclxuICBpbXBvcnQgZW52aXJvbkNvZGUgZnJvbSBcIi4uL3NlYXJjaENvbXBvbmVudHMvY29tcG9uZW50cy9wb2xsdXRpb24vZW52aXJvbkNvZGVcIjtcclxuICBpbXBvcnQgaGVhbHRoUmVjb3JkIGZyb20gXCJAL3ZpZXdzL3NlYXJjaENvbXBvbmVudHMvY29tcG9uZW50cy9wb2xsdXRpb24vaGVhbHRoUmVjb3JkXCI7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiaW5kZXhcIixcclxuICAgIGNvbXBvbmVudHMgOiB7XHJcbiAgICAgIGVudmlyb25Db2RlLFxyXG4gICAgICBoZWFsdGhSZWNvcmRcclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG5vd0RhdGU6IGhvdXJEYXRlRm9ybWF0KG5ldyBEYXRlKCkpLFxyXG4gICAgICAgIG5vd01vbnRoOiBtb250aERhdGVGb3JtYXQobmV3IERhdGUoKSksXHJcbiAgICAgICAgdG9kYXk6Z2V0VGhpc0RhdGUoKSxcclxuICAgICAgICBpbmZvOiB7fSxcclxuICAgICAgICB0YXNrSW5mbzoge1xyXG4gICAgICAgICAgbW9udGhfdG90YWw6IDAsXHJcbiAgICAgICAgICBub3RfY29tcGxldGU6IDAsXHJcbiAgICAgICAgICBjb21wbGV0ZV9jb3VudDogMFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmlza0luZm86IHtcclxuICAgICAgICAgIGhpZ2hfcmlzazogMCxcclxuICAgICAgICAgIG1lZGl1bV9yaXNrOiAwLFxyXG4gICAgICAgICAgcmlzazogMCxcclxuICAgICAgICAgIHRvdGFsOiAwXHJcbiAgICAgICAgfSxcclxuICAgICAgICB0eXBlOiAn6L+R5LiA5pyIJyxcclxuICAgICAgICB0eXBlRGF0YTogWyfov5HkuIDmnIgnLCAn6L+R5LiA5bm0J10sXHJcbiAgICAgICAgcmVhc29uVHlwZTogJ+i/keS4gOaciCcsXHJcbiAgICAgICAgdHlwZXNEYXRhOiBbJ+i/keS4gOaciCcsICfov5HkuIDlubQnXSxcclxuICAgICAgICBtdHlwZTogJ+e6oueggSdcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgICd0eXBlJzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZ2V0RGF0YSgpXHJcbiAgICAgIH0sXHJcbiAgICAgICdyZWFzb25UeXBlJzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHRoaXMuZ2V0UmVhc29uRGF0YSgpO1xyXG4gICAgICB9LFxyXG4gICAgICAnbXR5cGUnOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRSZWFzb25EYXRhKCk7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgLy8gdGhpcy5xdWVyeUhibU51bWJlcnMoKTtcclxuICAgICAgdGhpcy5xdWVyeVRhc2tJbmZvKCk7XHJcbiAgICAgIHRoaXMucXVlcnlSaXNrSW5mbygpO1xyXG4gICAgICB0aGlzLmdldERhdGEoKTtcclxuICAgICAgdGhpcy5nZXRSZWFzb25EYXRhKCk7XHJcbiAgICAgIHRoaXMuZ2V0Umlza1Byb2JsZW0oKTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIC8v6Lez6L2s5b6F5a6h5qC45YiX6KGoXHJcbiAgICAgIHRvQ2hlY2soKSB7XHJcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6ICdjb2RlVG9DaGVjayd9KTtcclxuICAgICAgfSxcclxuICAgICAgcXVlcnlIYm1OdW1iZXJzKCkge1xyXG4gICAgICAgIHF1ZXJ5U3VwZXJ2aXNpb24oKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLmluZm8gPSByZXMuZGF0YTtcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICAvL+i1i+eggeS4juaVtOaUuVxyXG4gICAgICBxdWVyeVRhc2tJbmZvKCkge1xyXG4gICAgICAgIGdldFRhc2tJbmZvKCkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgdGhpcy50YXNrSW5mbyA9IHJlcy5kYXRhO1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIC8v6aOO6Zmp5qaC5ousXHJcbiAgICAgIHF1ZXJ5Umlza0luZm8oKSB7XHJcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcbiAgICAgICAgbGV0IHRpbWUgPSB5ZWFyICsgJy0nICsgKG1vbnRoID4gOSA/IG1vbnRoIDogJzAnICsgbW9udGgpO1xyXG4gICAgICAgIGdldEV2YWx1YXRlSW5mbyh7IHRpbWU6IHRpbWUgfSkudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgdGhpcy5yaXNrSW5mbyA9IHJlcy5kYXRhLmxlZnQ7XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgLy/njq/kv53noIHlj5jljJbotovlir9cclxuICAgICAgZ2V0RGF0YSgpIHtcclxuICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgdGltZTogMSxcclxuICAgICAgICAgIHR5cGU6IHRoaXMudHlwZSA9PT0gJ+i/keS4gOaciCcgPyAnbW9udGgnIDogJ3llYXInXHJcbiAgICAgICAgfTtcclxuICAgICAgICBxdWVyeUhibVRyZW5kKHBhcmFtcykudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgbGV0IGRhdGEgPSB7XHJcbiAgICAgICAgICAgIHJlY29yZHRpbWU6IFtdLFxyXG4gICAgICAgICAgICB5ZWxsb3dudW1iZXI6IFtdLFxyXG4gICAgICAgICAgICByZWRudW1iZXI6IFtdXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXMuZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBkYXRhLnJlY29yZHRpbWUucHVzaChyZXMuZGF0YVtpXS5TVUJfVElNRSk7XHJcbiAgICAgICAgICAgIGRhdGEueWVsbG93bnVtYmVyLnB1c2gocmVzLmRhdGFbaV0ueWVsbG93KTtcclxuICAgICAgICAgICAgZGF0YS5yZWRudW1iZXIucHVzaChyZXMuZGF0YVtpXS5yZWQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy5kcmF3TGluZShkYXRhKTtcclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBkcmF3TGluZShkYXRhKSB7XHJcbiAgICAgICAgbGV0IGNoYXJ0ID0gZWNoYXJ0cy5pbml0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0cmVuZENoYXJ0JyksIG51bGwsIHtkZXZpY2VQaXhlbFJhdGlvOiAyfSk7XHJcbiAgICAgICAgY2hhcnQuc2V0T3B0aW9uKHtcclxuICAgICAgICAgIGdyaWQ6IHtcclxuICAgICAgICAgICAgdG9wOiAnMTglJyxcclxuICAgICAgICAgICAgYm90dG9tOiAnMTIlJyxcclxuICAgICAgICAgICAgcmlnaHQ6ICczJScsXHJcbiAgICAgICAgICAgIGxlZnQ6ICcxMCUnXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgeEF4aXM6IHtcclxuICAgICAgICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcclxuICAgICAgICAgICAgZGF0YTogZGF0YS5yZWNvcmR0aW1lLFxyXG4gICAgICAgICAgICBheGlzVGljazoge1xyXG4gICAgICAgICAgICAgIHNob3c6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGF4aXNMYWJlbDoge1xyXG4gICAgICAgICAgICAgIC8vIGludGVydmFsOiAwLFxyXG4gICAgICAgICAgICAgIC8vIHJvdGF0ZTogMjAsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgIGRhdGE6IFsn57u/56CBJywgJ+m7hOeggScsICfnuqLnoIEnXSxcclxuICAgICAgICAgICAgdG9wOiBcIjIlXCIsXHJcbiAgICAgICAgICAgIHRleHRTdHlsZToge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBcIiMwMDBcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmlnaHQ6IDEwXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgICB0cmlnZ2VyOiAnYXhpcycsXHJcbiAgICAgICAgICAgIGF4aXNQb2ludGVyOiB7XHJcbiAgICAgICAgICAgICAgbGluZVN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjoge1xyXG4gICAgICAgICAgICAgICAgICB0eXBlOiAnbGluZWFyJyxcclxuICAgICAgICAgICAgICAgICAgeDogMCxcclxuICAgICAgICAgICAgICAgICAgeTogMCxcclxuICAgICAgICAgICAgICAgICAgeDI6IDAsXHJcbiAgICAgICAgICAgICAgICAgIHkyOiAxLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvclN0b3BzOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICdyZ2JhKDI1NSwyNTUsMjU1LDApJywgLy8gMCUg5aSE55qE6aKc6ImyXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IDAuNSxcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAncmdiYSgyNTUsMjU1LDI1NSwxKScsIC8vIDEwMCUg5aSE55qE6aKc6ImyXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJ3JnYmEoMjU1LDI1NSwyNTUsMCknLCAvLyAxMDAlIOWkhOeahOminOiJslxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICAgIGdsb2JhbDogZmFsc2UsIC8vIOe8uuecgeS4uiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uIChwYXJhbXMsIHRpY2tldCwgY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICB2YXIgc2hvd0h0bSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgbGV0IHRpdGxlID0gcGFyYW1zWzBdLm5hbWUgKyAnPGJyPic7XHJcbiAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXJhbXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIC8v5Zu+5qCHXHJcbiAgICAgICAgICAgICAgICBsZXQgbWFya2VyID0gcGFyYW1zW2ldLm1hcmtlcjtcclxuICAgICAgICAgICAgICAgIC8v5ZCN56ewXHJcbiAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IHBhcmFtc1tpXS5zZXJpZXNOYW1lO1xyXG4gICAgICAgICAgICAgICAgLy/lgLxcclxuICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IHBhcmFtc1tpXS52YWx1ZSArICflrrYnO1xyXG4gICAgICAgICAgICAgICAgc2hvd0h0bSArPSBtYXJrZXIgKyBuYW1lICsgJzonICsgY291bnQgKyAnPGJyPidcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHRpdGxlICsgc2hvd0h0bTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHlBeGlzOiB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwi5Y2V5L2NOiDlrrZcIixcclxuICAgICAgICAgICAgdHlwZTogJ3ZhbHVlJyxcclxuICAgICAgICAgICAgbWluSW50ZXJ2YWw6IDEsXHJcbiAgICAgICAgICAgIGF4aXNUaWNrOiB7XHJcbiAgICAgICAgICAgICAgc2hvdzogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXhpc0xpbmU6IHtcclxuICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzcGxpdExpbmU6IHtcclxuICAgICAgICAgICAgICBsaW5lU3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdkYXNoZWQnXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgc2VyaWVzOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBuYW1lOiAn6buE56CBJyxcclxuICAgICAgICAgICAgICBjb2xvcjogJyNGRkM0MjAnLFxyXG4gICAgICAgICAgICAgIGRhdGE6IGRhdGEueWVsbG93bnVtYmVyLFxyXG4gICAgICAgICAgICAgIHR5cGU6ICdsaW5lJyxcclxuICAgICAgICAgICAgICBzbW9vdGg6IHRydWUsXHJcbiAgICAgICAgICAgICAgc3ltYm9sOiAnbm9uZSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG5hbWU6ICfnuqLnoIEnLFxyXG4gICAgICAgICAgICAgIGNvbG9yOiAnI0ZGMjQyNCcsXHJcbiAgICAgICAgICAgICAgZGF0YTogZGF0YS5yZWRudW1iZXIsXHJcbiAgICAgICAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgICAgICAgICAgIHNtb290aDogdHJ1ZSxcclxuICAgICAgICAgICAgICBzeW1ib2w6ICdub25lJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgY2hhbmdlSGJtKGZsYWcpIHtcclxuICAgICAgICB0aGlzLm10eXBlID0gZmxhZztcclxuICAgICAgfSxcclxuICAgICAgLy/njq/kv53noIHljp/lm6DliIbmnpBcclxuICAgICAgZ2V0UmVhc29uRGF0YSgpIHtcclxuICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgdGltZTogMSxcclxuICAgICAgICAgIGNvbG9yOiB0aGlzLm10eXBlID09PSAn57qi56CBJyA/ICfnuqLoibInIDogJ+m7hOiJsicsXHJcbiAgICAgICAgICB0eXBlOiB0aGlzLnJlYXNvblR5cGUgPT09ICfov5HkuIDmnIgnID8gJ21vbnRoJyA6ICd5ZWFyJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcXVlcnlIYm1BbmFseXNpcyhwYXJhbXMpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICB0aGlzLmRyYXdQaWUoZGF0YSk7XHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgZHJhd1BpZShkYXRhKSB7XHJcbiAgICAgICAgbGV0IHBpZURhdGEgPSBbXTtcclxuICAgICAgICBjb25zdCBjb2xvcnMgPSBbJyM4MDdmZmInLCAnIzYyYjhmZicsICcjMDBiOGMzJywgJyNmZmJkNDMnLCAnI2ZlOTE2NyddO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgcGllRGF0YS5wdXNoKFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgdmFsdWU6IGRhdGFbaV0uVkFMVUUsICAgIC8vZGF0YVtpXS5OVU0sXHJcbiAgICAgICAgICAgICAgc2hvdzogdHJ1ZSxcclxuICAgICAgICAgICAgICBuYW1lOiBkYXRhW2ldLlRZUEUsXHJcbiAgICAgICAgICAgICAgaXRlbVN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBub3JtYWw6IHtcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yc1tpXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgY2hhcnQgPSBlY2hhcnRzLmluaXQoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJyZWFzb25DaGFydFwiKSwgbnVsbCwge2RldmljZVBpeGVsUmF0aW86IDJ9KTtcclxuICAgICAgICBjaGFydC5zZXRPcHRpb24oe1xyXG4gICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgIHNlbGVjdGVkTW9kZTogZmFsc2UsIC8vIOWPlua2iOWbvuS+i+S4iueahOeCueWHu+S6i+S7tlxyXG4gICAgICAgICAgICB0eXBlOiAnc2Nyb2xsJyxcclxuICAgICAgICAgICAgb3JpZW50OiAndmVydGljYWwnLFxyXG4gICAgICAgICAgICBsZWZ0OiAnNDAlJyxcclxuICAgICAgICAgICAgdG9wOiAnMyUnLFxyXG4gICAgICAgICAgICBpdGVtR2FwOiA4LFxyXG4gICAgICAgICAgICBpdGVtV2lkdGg6IDEwLCAvLyDorr7nva7lrr3luqZcclxuICAgICAgICAgICAgaXRlbUhlaWdodDogMTAsIC8vIOiuvue9rumrmOW6plxyXG4gICAgICAgICAgICB0ZXh0U3R5bGU6IHtcclxuICAgICAgICAgICAgICBjb2xvcjogJyMwMDAnLFxyXG4gICAgICAgICAgICAgIHJpY2g6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IHtcclxuICAgICAgICAgICAgICAgICAgdmVydGljYWxBbGlnbjogJ3JpZ2h0JyxcclxuICAgICAgICAgICAgICAgICAgYWxpZ246ICdsZWZ0JyxcclxuICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzAwMFwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgICAgICAgICAgIGFsaWduOiAnbGVmdCcsXHJcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwMDBcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwZXI6IHtcclxuICAgICAgICAgICAgICAgICAgYWxpZ246ICdsZWZ0JyxcclxuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzAwMFwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGRhdGE6IHBpZURhdGEubWFwKGl0ZW0gPT4ge1xyXG4gICAgICAgICAgICAgIGlmIChpdGVtLnNob3cpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtLm5hbWVcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBmb3JtYXR0ZXI6IGZ1bmN0aW9uIChuYW1lKSB7XHJcbiAgICAgICAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICBpZiAobmFtZSA9PT0gZGF0YVtpXS5UWVBFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgICAgICAgICAgICd7bmFtZXwgJyArIG5hbWUgKyAnfSAgJyArICd7dmFsdWV8ICcgKyBkYXRhW2ldLlZBTFVFICsgJ30nICsgJ3twZXJ8KCcgKyBkYXRhW2ldLlBFUkNFTlRBR0UgKyAnJSl9J1xyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHNlcmllczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbmFtZTogJ+aVsOmHjycsXHJcbiAgICAgICAgICAgICAgdHlwZTogJ3BpZScsXHJcbiAgICAgICAgICAgICAgcmFkaXVzOiBbJzM1JScsICc1MCUnXSxcclxuICAgICAgICAgICAgICBjZW50ZXI6IFsnMjAlJywgJzQwJSddLFxyXG4gICAgICAgICAgICAgIGhvdmVyQW5pbWF0aW9uOiBmYWxzZSxcclxuICAgICAgICAgICAgICBhdm9pZExhYmVsT3ZlcmxhcDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgbGFiZWw6IHtcclxuICAgICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246ICdjZW50ZXInXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBlbXBoYXNpczoge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IHtcclxuICAgICAgICAgICAgICAgICAgc2hvdzogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgbGFiZWxMaW5lOiB7XHJcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZVxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgZGF0YTogcGllRGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgLy/po47pmanpl67popjnsbvlnotcclxuICAgICAgZ2V0Umlza1Byb2JsZW0oKSB7XHJcbiAgICAgICAgZ2V0Umlza1R5cGUoKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICBsZXQgYXJyID0gW107XHJcbiAgICAgICAgICBsZXQgYXJyMSA9IFtdO1xyXG4gICAgICAgICAgbGV0IGFycjIgPSBbXTtcclxuICAgICAgICAgIHJlcy5kYXRhLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgYXJyLnB1c2goaXRlbS5DT1VOVF9WQUxVRSk7XHJcbiAgICAgICAgICAgIGFycjEucHVzaChpdGVtLlRZUEUpO1xyXG4gICAgICAgICAgICBhcnIyLnB1c2goe25hbWU6IGl0ZW0uVFlQRSwgbWF4OiBpdGVtLkNPVU5UX1ZBTFVFICsgMTB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGhpcy5kcmF3UmFkYXIoYXJyLCBhcnIxLCBhcnIyKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgZHJhd1JhZGFyKGVjaGFydERhdGEsIHl6QXJyLCBtYXhBcnIpIHtcclxuICAgICAgICB0aGlzLmNoYXJ0ID0gZWNoYXJ0cy5pbml0KGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyaXNrQ2hhcnQnKSk7XHJcbiAgICAgICAgbGV0IGxhYmVscyA9IHl6QXJyO1xyXG4gICAgICAgIHRoaXMuY2hhcnQuc2V0T3B0aW9uKHtcclxuICAgICAgICAgIHRvb2x0aXA6IHtcclxuICAgICAgICAgICAgZm9ybWF0dGVyOiBmdW5jdGlvbiAocGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSBcIlwiO1xyXG4gICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFiZWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRzICs9IGxhYmVsc1tpXSArIFwi77yaXCIgKyBwYXJhbXMudmFsdWVbaV0gKyBcIuS4qjxicj5cIjtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdHM7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRleHRTdHlsZToge1xyXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxNCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICByYWRhcjoge1xyXG4gICAgICAgICAgICBuYW1lOiB7XHJcbiAgICAgICAgICAgICAgdGV4dFN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCIjMzMzMzMzXCIsXHJcbiAgICAgICAgICAgICAgICBmb250U2l6ZTogMTQsXHJcbiAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiA2MDAsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc3BsaXRBcmVhOiB7XHJcbiAgICAgICAgICAgICAgLy8g6Zu36L6+5Zu+6IOM5pmv6aKc6ImyXHJcbiAgICAgICAgICAgICAgYXJlYVN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogW1wiI0VBRjRGQVwiLCBcIiNmZmZmZmZcIl0sXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaW5kaWNhdG9yOiBtYXhBcnJcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBzZXJpZXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwicmFkYXJcIixcclxuICAgICAgICAgICAgICBzeW1ib2w6IFwiY2lyY2xlXCIsXHJcbiAgICAgICAgICAgICAgc3ltYm9sU2l6ZTogOCxcclxuICAgICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBlY2hhcnREYXRhLFxyXG4gICAgICAgICAgICAgICAgICBuYW1lOiAn6aOO6Zmp6Zeu6aKY57G75Z6LJyxcclxuICAgICAgICAgICAgICAgICAgaXRlbVN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2JhKDI1NSwyNTUsMjU1LDEpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3JkZXJDb2xvcjogXCJyZ2JhKDEwLDE1NCwyMzQsMC45KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDUsXHJcbiAgICAgICAgICAgICAgICAgICAgICBsaW5lU3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzBBOUFFQVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICBhcmVhU3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBub3JtYWw6IHtcclxuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMwQTlBRUFcIixcclxuICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC42LFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICBdLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgICBzaG93TW9yZShmbGFnKSB7XHJcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgbmFtZTogJ2dyYWRlQ29udHJvbCcsXHJcbiAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICB0eXBlOiBmbGFnXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGdvT3RoZXJzKHJvdXRlck5hbWUpIHtcclxuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7bmFtZTogcm91dGVyTmFtZX0pO1xyXG4gICAgICB9LFxyXG4gICAgICBhc3luYyBnb1RvTWFwKCkge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRoaXMubG9jYXRlKCk7XHJcbiAgICAgICAgaWYgKHJlc3VsdCA9PT0gJ+WumuS9jeWksei0pScpIHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3VsdClcclxuICAgICAgICAgIHRoaXMubWVzc2FnZSA9IHJlc3VsdDtcclxuICAgICAgICAgIHRoaXMuZXJyb3IgPSB0cnVlO1xyXG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICBhd2FpdCB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdtYXBNbmcnLFxyXG4gICAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICAgIGxvbmdpdHVkZTogJzEwMi44Mjk0MDE3MDEwODcwMScsXHJcbiAgICAgICAgICAgICAgbGF0aXR1ZGU6ICcyNC44ODgwMDkxNzc5NjE4MDYnLFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpXHJcbiAgICAgICAgICB0aGlzLmxvY2F0aW9uID0gcmVzdWx0O1xyXG4gICAgICAgICAgYXdhaXQgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICBuYW1lOiAnbWFwTW5nJyxcclxuICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICBsb25naXR1ZGU6IHRoaXMubG9jYXRpb25bMF0sXHJcbiAgICAgICAgICAgICAgbGF0aXR1ZGU6IHRoaXMubG9jYXRpb25bMV0sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGdvVG9NYXAoKXtcclxuICAgICAgICAvLyAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgIC8vICAgICAgICAgcGF0aDogJy9tYXBNbmcnLFxyXG4gICAgICAgIC8vICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBsb25naXR1ZGU6ICcxMDIuODI5NDAxNzAxMDg3MDEnLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGxhdGl0dWRlOiAnMjQuODg4MDA5MTc3OTYxODA2JyxcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgbG9jYXRlKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHdpbmRvdy5zdWMubG9jYXRlLmxvY2F0ZShsb2NhdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coW2xvY2F0aW9uLkxvbmdpdHVkZSwgbG9jYXRpb24uTGF0aXR1ZGVdKTtcclxuICAgICAgICAgICAgICByZXNvbHZlKFtsb2NhdGlvbi5Mb25naXR1ZGUsIGxvY2F0aW9uLkxhdGl0dWRlXSlcclxuICAgICAgICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcclxuICAgICAgICAgICAgICByZXNvbHZlKCflrprkvY3lpLHotKUnKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlKVxyXG4gICAgICAgICAgICAvLyByZXNvbHZlKCflrprkvY3lpLHotKUnKVxyXG4gICAgICAgICAgICByZXNvbHZlKGNvb3JkdHJhbnNmb3JtLndnczg0dG9nY2owMigxMDIuODI3OTc3ODY5MzMxNDIsIDI0Ljg5MTA2Nzc3NDM3Mjc5KSlcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJzY3NzXCI+XHJcbiAgLmNvbnRlbnRUb3Age1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHggMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDVweCAwcHg7XHJcbiAgICAvKmJhY2tncm91bmQtY29sb3I6ICNmZmY7Ki9cclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAvKmJveC1zaGFkb3c6IDAgMnB4IDVweCByZ2JhKDAsIDI5LCAxNzYsIDAuMik7Ki9cclxuXHJcbiAgICAuY29udGVudFRpdGxlIHtcclxuICAgICAgLypib3JkZXItbGVmdDogNXB4IHNvbGlkICMxNjc3ZmY7Ki9cclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIC8qZm9udC1zaXplOiAxNHB4OyovXHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIC8qanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuOyovXHJcbiAgICAgIG1hcmdpbjogNXB4IDAgMTBweCAwO1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC50b3BDYXJkIHtcclxuICAgICAgd2lkdGg6IDI2JTtcclxuICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7XHJcbiAgICAgIGJveC1zaGFkb3c6IDJweCAycHggMnB4IHJnYmEoMjEsIDQ5LCA5MCwgMC4xNik7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcblxyXG4gICAgICAudG9wTGluZSB7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGhlaWdodDogMzMlO1xyXG5cclxuICAgICAgICAubnVtIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGNvbG9yOiAjMDA3MUZGO1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAudG9wTGluZSA+IGlucHV0IHtcclxuICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICBib3JkZXItdG9wOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgY29sb3I6ICMxNjc3ZmY7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICM0YTYyZTc7XHJcblxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnRvcENhcmQyIHtcclxuICAgICAgd2lkdGg6IDI2JTtcclxuICAgICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICAmOm50aC1jaGlsZCgxKXtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwgMTQxLCAyNiwgMC4xKSAwJSwgcmdiYSgyNTUsIDE0MSwgMjYsIDApIDEwMCUpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjUyLCAyMzUsIDIxNywgMC41KTtcclxuICAgICAgfVxyXG4gICAgICAmOm50aC1jaGlsZCgyKXtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDYsIDE5NCwgODEsIDAuMSkgMCUsIHJnYmEoNiwgMTk0LCA4MSwgMCkgMTAwJSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgyMjAsIDI1MCwgMjMyLCAxKTtcclxuICAgICAgfVxyXG4gICAgICAmOm50aC1jaGlsZCgzKXtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDY4LCAxMjMsIDI1MiwgMC4xKSAwJSwgcmdiYSg2OCwgMTIzLCAyNTIsIDApIDEwMCUpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjM4LCAyNDMsIDI1NSwgMSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC50b3BMaW5lMiB7XHJcbiAgICAgICAgaGVpZ2h0OiA1MCU7XHJcbiAgICAgICAgPmltZ3tcclxuICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDNweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgPnNwYW57XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSgyMywgMjgsIDMzLCAxKTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5udW0ge1xyXG4gICAgICAgICAgLypmb250LXNpemU6IDE0cHg7Ki9cclxuICAgICAgICAgIC8qY29sb3I6ICMwMDcxRkY7Ki9cclxuICAgICAgICAgIC8qbWFyZ2luLXJpZ2h0OiA1cHg7Ki9cclxuICAgICAgICAgIC8qYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkOyovXHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAvKndpZHRoOiA3MHB4OyovXHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIycHg7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC50b3BDYXJkMyB7XHJcbiAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgcGFkZGluZzogMTBweCA1cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNDgsIDI0OSwgMjUxLCAxKTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAudG9wTGluZTMge1xyXG4gICAgICAgIGhlaWdodDogNTAlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgIC5udW0ge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yZWQge1xyXG4gICAgICAgICAgY29sb3I6ICNmZjU1NTQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAueWVsbG93IHtcclxuICAgICAgICAgIGNvbG9yOiAjZjRiZTAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmdyZWVuIHtcclxuICAgICAgICAgIGNvbG9yOiAjNGFlMzdiO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYmx1ZSB7XHJcbiAgICAgICAgICBjb2xvcjogcmdiYSg4NCwgMTE3LCAyNDgsIDEpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmhibVJhZGlvQnRuIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5oYm1SYWRpb0J0biA+IHVsID4gbGkge1xyXG4gICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XHJcbiAgICB9XHJcblxyXG4gICAgLmhibVJhZGlvQnRuID4gdWwgPiBsaS5hY3RpdmUge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmOGZmO1xyXG4gICAgICBjb2xvcjogIzE2NzdmZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGRcclxuICAgIH1cclxuXHJcbiAgICAuYnRuX2RpdiB7XHJcbiAgICAgIHBhZGRpbmc6IDVweCAwcHg7XHJcbiAgICAgIC8qYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjhmZjsqL1xyXG4gICAgICBjb2xvcjogIzE2NzdmZjtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICA+c3BhbntcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcInZhbi1uYXYtYmFyXCIsIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0aXRsZTogXCLnjq/kv53noIFcIixcbiAgICAgICAgICBcImxlZnQtYXJyb3dcIjogXCJcIixcbiAgICAgICAgICBmaXhlZDogXCJcIixcbiAgICAgICAgICBcInJpZ2h0LXRleHRcIjogXCLmtojmga9cIixcbiAgICAgICAgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcImNsaWNrLWxlZnRcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLmdvKC0xKVxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCJjbGljay1yaWdodFwiOiBfdm0udG9DaGVjayxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwic2Nyb2xsLXRvLXRvcC13cmFwcGVyXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFRvcFwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgXCJqdXN0aWZ5LWNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYnRuX2RpdlwiLCBvbjogeyBjbGljazogX3ZtLmdvVG9NYXAgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMvcG9sbHV0ZXIvbWFwLnBuZ1wiKSB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlnLDlm75cIildKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuX2RpdlwiLFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdvT3RoZXJzKFwiY29kZVN0YXRpc1wiKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMvcG9sbHV0ZXIvcmVwb3J0LnBuZ1wiKSB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLnu5/orqHmiqXooahcIildKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuX2RpdlwiLFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdvT3RoZXJzKFwiY29kZVJ1bGVzXCIpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy9wb2xsdXRlci9ydWxlLnBuZ1wiKSB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLotYvnoIHop4TliJlcIildKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnRuX2RpdlwiLFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdvT3RoZXJzKFwiZXZhbHVhdGVcIilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL3BvbGx1dGVyL2luZm8ucG5nXCIpIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuWKqOaAgeivhOS7t1wiKV0pLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb250ZW50VG9wXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50VGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLnjq/kv53noIHmpoLlhrVcIildKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoMTgsIDE4LCA1NCwgMC41KVwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwibWFyZ2luLWxlZnRcIjogXCIxMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJmb250LXdlaWdodFwiOiBcIjQwMFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLntK/orqHmiKroh7NcIiArIF92bS5fcyhfdm0udG9kYXkpKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzE2NzdmZlwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW4tbGVmdFwiOiBcImF1dG9cIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5zaG93TW9yZShcIjNcIilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLmm7TlpJpcIildXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFwiZW52aXJvbi1jb2RlXCIpLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwiaGVhbHRoLXJlY29yZFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRUb3BcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRUaXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLotYvnoIHkuI7mlbTmlLlcIildKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmdiYSgxOCwgMTgsIDU0LCAwLjUpXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hcmdpbi1sZWZ0XCI6IFwiMTBweFwiLFxuICAgICAgICAgICAgICAgICAgICBcImZvbnQtd2VpZ2h0XCI6IFwiNDAwXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLm5vd01vbnRoKSldXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgXCJqdXN0aWZ5LWNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wQ2FyZDJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRvcExpbmUyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tdG9wXCI6IFwiNXB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm51bVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJyZ2JhKDI1NSwgMTQxLCAyNiwgMSlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS50YXNrSW5mby5ub3RfY29tcGxldGUpICsgXCLkuKpcIildXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRvcENhcmQyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0b3BMaW5lMlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLXRvcFwiOiBcIjVweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJudW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwicmdiYSg2LCAxOTQsIDgxLCAxKVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLnRhc2tJbmZvLmNvbXBsZXRlX2NvdW50KSArIFwi5LiqXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3BDYXJkMlwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fbSgzKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidG9wTGluZTJcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi10b3BcIjogXCI1cHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibnVtXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcInJnYmEoMTAwLCAxNDUsIDI1NSwgMSlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS50YXNrSW5mby5tb250aF90b3RhbCkgKyBcIuS4qlwiKV1cbiAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFRvcFwiLCBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMTAwcHhcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fbSg0KSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICBcImp1c3RpZnktY29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRvcENhcmQzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRvcExpbmUzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm51bVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnJpc2tJbmZvLmhpZ2hfcmlzaykgKyBcIuS4qlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbSg1KSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3BDYXJkM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3BMaW5lM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJudW0gXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucmlza0luZm8ubWVkaXVtX3Jpc2spICsgXCLkuKpcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX20oNiksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wQ2FyZDNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wTGluZTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibnVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucmlza0luZm8ucmlzaykgKyBcIuS4qlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbSg3KSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3BDYXJkM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3BMaW5lM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJudW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5yaXNrSW5mby50b3RhbCkgKyBcIuS4qlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbSg4KSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFRvcFwiLCBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMjUwcHhcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29udGVudFRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImp1c3RpZnktY29udGVudFwiOiBcInNwYWNlLWJldHdlZW5cIiB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLnjq/kv53noIHlj5jljJbotovlir9cIildKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInZhbi1yYWRpby1ncm91cFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIxMHB4IDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMTJweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJmb250LXdlaWdodFwiOiBcIjQwMFwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlyZWN0aW9uOiBcImhvcml6b250YWxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udHlwZSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwidHlwZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udHlwZURhdGEsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YW4tcmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBpdGVtLCBcImljb24tc2l6ZVwiOiBcIjEycHhcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl0ZW0pKV1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX20oOSksXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRlbnRUb3BcIiwgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjMxMHB4XCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbnRlbnRUaXRsZVwiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJqdXN0aWZ5LWNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi546v5L+d56CB5Y6f5Zug5YiG5p6QXCIpXSksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ2YW4tcmFkaW8tZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMTBweCAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC13ZWlnaHRcIjogXCI0MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpcmVjdGlvbjogXCJob3Jpem9udGFsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5yZWFzb25UeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlYXNvblR5cGUgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInJlYXNvblR5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnR5cGVEYXRhLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidmFuLXJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogaXRlbSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgbmFtZTogaXRlbSwgXCJpY29uLXNpemVcIjogXCIxMnB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtKSldXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcImNhbGMoMTAwJSAtIDMwcHgpXCIgfSB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGJtUmFkaW9CdG5cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwidWxcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLm10eXBlID09PSBcIue6oueggVwiID8gXCJhY3RpdmVcIiA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hhbmdlSGJtKFwi57qi56CBXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi57qi56CBXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0ubXR5cGUgPT09IFwi6buE56CBXCIgPyBcImFjdGl2ZVwiIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFuZ2VIYm0oXCLpu4TnoIFcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLpu4TnoIFcIildXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiY2FsYygxMDAlIC0gNDBweClcIiB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJyZWFzb25DaGFydFwiIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX20oMTApLFxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50VGl0bGVcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuW/q+aNt+WFpeWPo1wiKV0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRvcExpbmUyXCIgfSwgW1xuICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy9wb2xsdXRlci95ZWxsb3dfY29tLnBuZ1wiKSB9LFxuICAgICAgfSksXG4gICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuacquWujOaIkFwiKV0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRvcExpbmUyXCIgfSwgW1xuICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy9wb2xsdXRlci9ibHVlX2NvbS5wbmdcIikgfSB9KSxcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5bey5a6M5oiQXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidG9wTGluZTJcIiB9LCBbXG4gICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL3BvbGx1dGVyL2dyZWVuX2NvbS5wbmdcIikgfSB9KSxcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5YWo6YOo5Lu75YqhXCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udGVudFRpdGxlXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwiIzFkMWYyNFwiIH0gfSwgW192bS5fdihcIumjjumZqeaAu+iniFwiKV0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcInRvcExpbmUzXCIsIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLXRvcFwiOiBcIjVweFwiIH0gfSxcbiAgICAgIFtfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJyZWRcIiB9LCBbX3ZtLl92KFwi6auY6aOO6ZmpXCIpXSldXG4gICAgKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJ0b3BMaW5lM1wiLCBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi10b3BcIjogXCI1cHhcIiB9IH0sXG4gICAgICBbX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwieWVsbG93XCIgfSwgW192bS5fdihcIuS4remjjumZqVwiKV0pXVxuICAgIClcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwidG9wTGluZTNcIiwgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tdG9wXCI6IFwiNXB4XCIgfSB9LFxuICAgICAgW19jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImdyZWVuXCIgfSwgW192bS5fdihcIuS9jumjjumZqVwiKV0pXVxuICAgIClcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwidG9wTGluZTNcIiwgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tdG9wXCI6IFwiNXB4XCIgfSB9LFxuICAgICAgW19jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImJsdWVcIiB9LCBbX3ZtLl92KFwi6aKE6K2m5oC75pWwXCIpXSldXG4gICAgKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCJjYWxjKDEwMCUgLSAzMHB4KVwiIH0gfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9LFxuICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInRyZW5kQ2hhcnRcIiB9LFxuICAgICAgICB9KSxcbiAgICAgIF1cbiAgICApXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbnRlbnRUb3BcIixcbiAgICAgICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjMxMHB4XCIsIFwibWFyZ2luLWJvdHRvbVwiOiBcIjEwcHhcIiB9LFxuICAgICAgfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb250ZW50VGl0bGVcIiB9LCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLpo47pmanpl67popjnsbvlnoso5YmN5YWtKVwiKV0pLFxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgIGhlaWdodDogXCJjYWxjKDEwMCUgLSAzMHB4KVwiLFxuICAgICAgICAgICAgICBcIm1hcmdpbi10b3BcIjogXCIxMHB4XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCJjYWxjKDEwMCUgLSA0MHB4KVwiIH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcInJpc2tDaGFydFwiIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdXG4gICAgICAgICksXG4gICAgICBdXG4gICAgKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIvKipcbiAqIENyZWF0ZWQgYnkgV2FuZGVyZ2lzIG9uIDIwMTUvNy84LlxuICog5o+Q5L6b5LqG55m+5bqm5Z2Q5qCH77yIQkQwOe+8ieOAgeWbvea1i+WxgOWdkOagh++8iOeBq+aYn+WdkOagh++8jEdDSjAy77yJ44CB5ZKMV0dTODTlnZDmoIfns7vkuYvpl7TnmoTovazmjaJcbiAqL1xuLy9VTUTprZTms5Xku6PnoIFcbi8vIGlmIHRoZSBtb2R1bGUgaGFzIG5vIGRlcGVuZGVuY2llcywgdGhlIGFib3ZlIHBhdHRlcm4gY2FuIGJlIHNpbXBsaWZpZWQgdG9cbihmdW5jdGlvbiAocm9vdCwgZmFjdG9yeSkge1xuICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgLy8gQU1ELiBSZWdpc3RlciBhcyBhbiBhbm9ueW1vdXMgbW9kdWxlLlxuICAgIGRlZmluZShbXSwgZmFjdG9yeSk7XG4gIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAvLyBOb2RlLiBEb2VzIG5vdCB3b3JrIHdpdGggc3RyaWN0IENvbW1vbkpTLCBidXRcbiAgICAvLyBvbmx5IENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHRoYXQgc3VwcG9ydCBtb2R1bGUuZXhwb3J0cyxcbiAgICAvLyBsaWtlIE5vZGUuXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIH0gZWxzZSB7XG4gICAgLy8gQnJvd3NlciBnbG9iYWxzIChyb290IGlzIHdpbmRvdylcbiAgICByb290LmNvb3JkdHJhbnNmb3JtID0gZmFjdG9yeSgpO1xuICB9XG59KHRoaXMsIGZ1bmN0aW9uICgpIHtcbiAgLy/lrprkuYnkuIDkupvluLjph49cbiAgdmFyIHhfUEkgPSAzLjE0MTU5MjY1MzU4OTc5MzI0ICogMzAwMC4wIC8gMTgwLjA7XG4gIHZhciBQSSA9IDMuMTQxNTkyNjUzNTg5NzkzMjM4NDYyNjtcbiAgdmFyIGEgPSA2Mzc4MjQ1LjA7XG4gIHZhciBlZSA9IDAuMDA2NjkzNDIxNjIyOTY1OTQzMjM7XG4gIC8qKlxuICAgKiDnmb7luqblnZDmoIfns7sgKEJELTA5KSDkuI4g54Gr5pif5Z2Q5qCH57O7IChHQ0otMDIp55qE6L2s5o2iXG4gICAqIOWNsyDnmb7luqYg6L2sIOiwt+atjOOAgemrmOW+t1xuICAgKiBAcGFyYW0gYmRfbG9uXG4gICAqIEBwYXJhbSBiZF9sYXRcbiAgICogQHJldHVybnMgeypbXX1cbiAgICovXG4gIHZhciBiZDA5dG9nY2owMiA9IGZ1bmN0aW9uIGJkMDl0b2djajAyKGJkX2xvbiwgYmRfbGF0KSB7XG4gICAgdmFyIGJkX2xvbiA9ICtiZF9sb247XG4gICAgdmFyIGJkX2xhdCA9ICtiZF9sYXQ7XG4gICAgdmFyIHggPSBiZF9sb24gLSAwLjAwNjU7XG4gICAgdmFyIHkgPSBiZF9sYXQgLSAwLjAwNjtcbiAgICB2YXIgeiA9IE1hdGguc3FydCh4ICogeCArIHkgKiB5KSAtIDAuMDAwMDIgKiBNYXRoLnNpbih5ICogeF9QSSk7XG4gICAgdmFyIHRoZXRhID0gTWF0aC5hdGFuMih5LCB4KSAtIDAuMDAwMDAzICogTWF0aC5jb3MoeCAqIHhfUEkpO1xuICAgIHZhciBnZ19sbmcgPSB6ICogTWF0aC5jb3ModGhldGEpO1xuICAgIHZhciBnZ19sYXQgPSB6ICogTWF0aC5zaW4odGhldGEpO1xuICAgIHJldHVybiBbZ2dfbG5nLCBnZ19sYXRdXG4gIH07XG5cbiAgLyoqXG4gICAqIOeBq+aYn+WdkOagh+ezuyAoR0NKLTAyKSDkuI7nmb7luqblnZDmoIfns7sgKEJELTA5KSDnmoTovazmjaJcbiAgICog5Y2z6LC35q2M44CB6auY5b63IOi9rCDnmb7luqZcbiAgICogQHBhcmFtIGxuZ1xuICAgKiBAcGFyYW0gbGF0XG4gICAqIEByZXR1cm5zIHsqW119XG4gICAqL1xuICB2YXIgZ2NqMDJ0b2JkMDkgPSBmdW5jdGlvbiBnY2owMnRvYmQwOShsbmcsIGxhdCkge1xuICAgIHZhciBsYXQgPSArbGF0O1xuICAgIHZhciBsbmcgPSArbG5nO1xuICAgIHZhciB6ID0gTWF0aC5zcXJ0KGxuZyAqIGxuZyArIGxhdCAqIGxhdCkgKyAwLjAwMDAyICogTWF0aC5zaW4obGF0ICogeF9QSSk7XG4gICAgdmFyIHRoZXRhID0gTWF0aC5hdGFuMihsYXQsIGxuZykgKyAwLjAwMDAwMyAqIE1hdGguY29zKGxuZyAqIHhfUEkpO1xuICAgIHZhciBiZF9sbmcgPSB6ICogTWF0aC5jb3ModGhldGEpICsgMC4wMDY1O1xuICAgIHZhciBiZF9sYXQgPSB6ICogTWF0aC5zaW4odGhldGEpICsgMC4wMDY7XG4gICAgcmV0dXJuIFtiZF9sbmcsIGJkX2xhdF1cbiAgfTtcblxuICAvKipcbiAgICogV0dTODTovaxHQ2owMlxuICAgKiBAcGFyYW0gbG5nXG4gICAqIEBwYXJhbSBsYXRcbiAgICogQHJldHVybnMgeypbXX1cbiAgICovXG4gIHZhciB3Z3M4NHRvZ2NqMDIgPSBmdW5jdGlvbiB3Z3M4NHRvZ2NqMDIobG5nLCBsYXQpIHtcbiAgICB2YXIgbGF0ID0gK2xhdDtcbiAgICB2YXIgbG5nID0gK2xuZztcbiAgICBpZiAob3V0X29mX2NoaW5hKGxuZywgbGF0KSkge1xuICAgICAgcmV0dXJuIFtsbmcsIGxhdF1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGRsYXQgPSB0cmFuc2Zvcm1sYXQobG5nIC0gMTA1LjAsIGxhdCAtIDM1LjApO1xuICAgICAgdmFyIGRsbmcgPSB0cmFuc2Zvcm1sbmcobG5nIC0gMTA1LjAsIGxhdCAtIDM1LjApO1xuICAgICAgdmFyIHJhZGxhdCA9IGxhdCAvIDE4MC4wICogUEk7XG4gICAgICB2YXIgbWFnaWMgPSBNYXRoLnNpbihyYWRsYXQpO1xuICAgICAgbWFnaWMgPSAxIC0gZWUgKiBtYWdpYyAqIG1hZ2ljO1xuICAgICAgdmFyIHNxcnRtYWdpYyA9IE1hdGguc3FydChtYWdpYyk7XG4gICAgICBkbGF0ID0gKGRsYXQgKiAxODAuMCkgLyAoKGEgKiAoMSAtIGVlKSkgLyAobWFnaWMgKiBzcXJ0bWFnaWMpICogUEkpO1xuICAgICAgZGxuZyA9IChkbG5nICogMTgwLjApIC8gKGEgLyBzcXJ0bWFnaWMgKiBNYXRoLmNvcyhyYWRsYXQpICogUEkpO1xuICAgICAgdmFyIG1nbGF0ID0gbGF0ICsgZGxhdDtcbiAgICAgIHZhciBtZ2xuZyA9IGxuZyArIGRsbmc7XG4gICAgICByZXR1cm4gW21nbG5nLCBtZ2xhdF1cbiAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIEdDSjAyIOi9rOaNouS4uiBXR1M4NFxuICAgKiBAcGFyYW0gbG5nXG4gICAqIEBwYXJhbSBsYXRcbiAgICogQHJldHVybnMgeypbXX1cbiAgICovXG4gIHZhciBnY2owMnRvd2dzODQgPSBmdW5jdGlvbiBnY2owMnRvd2dzODQobG5nLCBsYXQpIHtcbiAgICB2YXIgbGF0ID0gK2xhdDtcbiAgICB2YXIgbG5nID0gK2xuZztcbiAgICBpZiAob3V0X29mX2NoaW5hKGxuZywgbGF0KSkge1xuICAgICAgcmV0dXJuIFtsbmcsIGxhdF1cbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGRsYXQgPSB0cmFuc2Zvcm1sYXQobG5nIC0gMTA1LjAsIGxhdCAtIDM1LjApO1xuICAgICAgdmFyIGRsbmcgPSB0cmFuc2Zvcm1sbmcobG5nIC0gMTA1LjAsIGxhdCAtIDM1LjApO1xuICAgICAgdmFyIHJhZGxhdCA9IGxhdCAvIDE4MC4wICogUEk7XG4gICAgICB2YXIgbWFnaWMgPSBNYXRoLnNpbihyYWRsYXQpO1xuICAgICAgbWFnaWMgPSAxIC0gZWUgKiBtYWdpYyAqIG1hZ2ljO1xuICAgICAgdmFyIHNxcnRtYWdpYyA9IE1hdGguc3FydChtYWdpYyk7XG4gICAgICBkbGF0ID0gKGRsYXQgKiAxODAuMCkgLyAoKGEgKiAoMSAtIGVlKSkgLyAobWFnaWMgKiBzcXJ0bWFnaWMpICogUEkpO1xuICAgICAgZGxuZyA9IChkbG5nICogMTgwLjApIC8gKGEgLyBzcXJ0bWFnaWMgKiBNYXRoLmNvcyhyYWRsYXQpICogUEkpO1xuICAgICAgdmFyIG1nbGF0ID0gbGF0ICsgZGxhdDtcbiAgICAgIHZhciBtZ2xuZyA9IGxuZyArIGRsbmc7XG4gICAgICByZXR1cm4gW2xuZyAqIDIgLSBtZ2xuZywgbGF0ICogMiAtIG1nbGF0XVxuICAgIH1cbiAgfTtcblxuICB2YXIgdHJhbnNmb3JtbGF0ID0gZnVuY3Rpb24gdHJhbnNmb3JtbGF0KGxuZywgbGF0KSB7XG4gICAgdmFyIGxhdCA9ICtsYXQ7XG4gICAgdmFyIGxuZyA9ICtsbmc7XG4gICAgdmFyIHJldCA9IC0xMDAuMCArIDIuMCAqIGxuZyArIDMuMCAqIGxhdCArIDAuMiAqIGxhdCAqIGxhdCArIDAuMSAqIGxuZyAqIGxhdCArIDAuMiAqIE1hdGguc3FydChNYXRoLmFicyhsbmcpKTtcbiAgICByZXQgKz0gKDIwLjAgKiBNYXRoLnNpbig2LjAgKiBsbmcgKiBQSSkgKyAyMC4wICogTWF0aC5zaW4oMi4wICogbG5nICogUEkpKSAqIDIuMCAvIDMuMDtcbiAgICByZXQgKz0gKDIwLjAgKiBNYXRoLnNpbihsYXQgKiBQSSkgKyA0MC4wICogTWF0aC5zaW4obGF0IC8gMy4wICogUEkpKSAqIDIuMCAvIDMuMDtcbiAgICByZXQgKz0gKDE2MC4wICogTWF0aC5zaW4obGF0IC8gMTIuMCAqIFBJKSArIDMyMCAqIE1hdGguc2luKGxhdCAqIFBJIC8gMzAuMCkpICogMi4wIC8gMy4wO1xuICAgIHJldHVybiByZXRcbiAgfTtcblxuICB2YXIgdHJhbnNmb3JtbG5nID0gZnVuY3Rpb24gdHJhbnNmb3JtbG5nKGxuZywgbGF0KSB7XG4gICAgdmFyIGxhdCA9ICtsYXQ7XG4gICAgdmFyIGxuZyA9ICtsbmc7XG4gICAgdmFyIHJldCA9IDMwMC4wICsgbG5nICsgMi4wICogbGF0ICsgMC4xICogbG5nICogbG5nICsgMC4xICogbG5nICogbGF0ICsgMC4xICogTWF0aC5zcXJ0KE1hdGguYWJzKGxuZykpO1xuICAgIHJldCArPSAoMjAuMCAqIE1hdGguc2luKDYuMCAqIGxuZyAqIFBJKSArIDIwLjAgKiBNYXRoLnNpbigyLjAgKiBsbmcgKiBQSSkpICogMi4wIC8gMy4wO1xuICAgIHJldCArPSAoMjAuMCAqIE1hdGguc2luKGxuZyAqIFBJKSArIDQwLjAgKiBNYXRoLnNpbihsbmcgLyAzLjAgKiBQSSkpICogMi4wIC8gMy4wO1xuICAgIHJldCArPSAoMTUwLjAgKiBNYXRoLnNpbihsbmcgLyAxMi4wICogUEkpICsgMzAwLjAgKiBNYXRoLnNpbihsbmcgLyAzMC4wICogUEkpKSAqIDIuMCAvIDMuMDtcbiAgICByZXR1cm4gcmV0XG4gIH07XG5cbiAgLyoqXG4gICAqIOWIpOaWreaYr+WQpuWcqOWbveWGhe+8jOS4jeWcqOWbveWGheWImeS4jeWBmuWBj+enu1xuICAgKiBAcGFyYW0gbG5nXG4gICAqIEBwYXJhbSBsYXRcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICB2YXIgb3V0X29mX2NoaW5hID0gZnVuY3Rpb24gb3V0X29mX2NoaW5hKGxuZywgbGF0KSB7XG4gICAgdmFyIGxhdCA9ICtsYXQ7XG4gICAgdmFyIGxuZyA9ICtsbmc7XG4gICAgLy8g57qs5bqmMy44Nn41My41NSznu4/luqY3My42Nn4xMzUuMDUgXG4gICAgcmV0dXJuICEobG5nID4gNzMuNjYgJiYgbG5nIDwgMTM1LjA1ICYmIGxhdCA+IDMuODYgJiYgbGF0IDwgNTMuNTUpO1xuICB9O1xuXG4gIHJldHVybiB7XG4gICAgYmQwOXRvZ2NqMDI6IGJkMDl0b2djajAyLFxuICAgIGdjajAydG9iZDA5OiBnY2owMnRvYmQwOSxcbiAgICB3Z3M4NHRvZ2NqMDI6IHdnczg0dG9nY2owMixcbiAgICBnY2owMnRvd2dzODQ6IGdjajAydG93Z3M4NFxuICB9XG59KSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZm9yRWFjaDtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdmb3JFYWNoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG5tb2R1bGUuZXhwb3J0cyA9ICFTVFJJQ1RfTUVUSE9EID8gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICByZXR1cm4gJGZvckVhY2godGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcbn0gOiBbXS5mb3JFYWNoO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBET01JdGVyYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcycpO1xudmFyIERPTVRva2VuTGlzdFByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20tdG9rZW4tbGlzdC1wcm90b3R5cGUnKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xuXG52YXIgaGFuZGxlUHJvdG90eXBlID0gZnVuY3Rpb24gKENvbGxlY3Rpb25Qcm90b3R5cGUpIHtcbiAgLy8gc29tZSBDaHJvbWUgdmVyc2lvbnMgaGF2ZSBub24tY29uZmlndXJhYmxlIG1ldGhvZHMgb24gRE9NVG9rZW5MaXN0XG4gIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlICYmIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCAhPT0gZm9yRWFjaCkgdHJ5IHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ29sbGVjdGlvblByb3RvdHlwZSwgJ2ZvckVhY2gnLCBmb3JFYWNoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggPSBmb3JFYWNoO1xuICB9XG59O1xuXG5mb3IgKHZhciBDT0xMRUNUSU9OX05BTUUgaW4gRE9NSXRlcmFibGVzKSB7XG4gIGlmIChET01JdGVyYWJsZXNbQ09MTEVDVElPTl9OQU1FXSkge1xuICAgIGhhbmRsZVByb3RvdHlwZShnbG9iYWxUaGlzW0NPTExFQ1RJT05fTkFNRV0gJiYgZ2xvYmFsVGhpc1tDT0xMRUNUSU9OX05BTUVdLnByb3RvdHlwZSk7XG4gIH1cbn1cblxuaGFuZGxlUHJvdG90eXBlKERPTVRva2VuTGlzdFByb3RvdHlwZSk7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLmNvbnRlbnRUb3BbZGF0YS12LWI4NjAyZDBlXSB7XFxuICBwYWRkaW5nOiA1cHggMTBweCAwcHg7XFxuICBtYXJnaW46IDEwcHggNXB4IDBweDtcXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogI2ZmZjsqL1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIC8qYm94LXNoYWRvdzogMCAycHggNXB4IHJnYmEoMCwgMjksIDE3NiwgMC4yKTsqL1xcbn1cXG4uY29udGVudFRvcCAuY29udGVudFRpdGxlW2RhdGEtdi1iODYwMmQwZV0ge1xcbiAgLypib3JkZXItbGVmdDogNXB4IHNvbGlkICMxNjc3ZmY7Ki9cXG4gIHdpZHRoOiAxMDAlO1xcbiAgLypmb250LXNpemU6IDE0cHg7Ki9cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAvKmp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjsqL1xcbiAgbWFyZ2luOiA1cHggMCAxMHB4IDA7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiBibGFjaztcXG59XFxuLmNvbnRlbnRUb3AgLnRvcENhcmRbZGF0YS12LWI4NjAyZDBlXSB7XFxuICB3aWR0aDogMjYlO1xcbiAgaGVpZ2h0OiA3MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmMGYwZjA7XFxuICBib3gtc2hhZG93OiAycHggMnB4IDJweCByZ2JhKDIxLCA0OSwgOTAsIDAuMTYpO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuLmNvbnRlbnRUb3AgLnRvcENhcmQgLnRvcExpbmVbZGF0YS12LWI4NjAyZDBlXSB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMzMlO1xcbn1cXG4uY29udGVudFRvcCAudG9wQ2FyZCAudG9wTGluZSAubnVtW2RhdGEtdi1iODYwMmQwZV0ge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6ICMwMDcxRkY7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB3aWR0aDogNzBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmNvbnRlbnRUb3AgLnRvcENhcmQgLnRvcExpbmUgPiBpbnB1dFtkYXRhLXYtYjg2MDJkMGVdIHtcXG4gIHdpZHRoOiAzNXB4O1xcbiAgYm9yZGVyLXRvcDogbm9uZTtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgY29sb3I6ICMxNjc3ZmY7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzRhNjJlNztcXG59XFxuLmNvbnRlbnRUb3AgLnRvcENhcmQyW2RhdGEtdi1iODYwMmQwZV0ge1xcbiAgd2lkdGg6IDI2JTtcXG4gIGhlaWdodDogNDBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG4uY29udGVudFRvcCAudG9wQ2FyZDJbZGF0YS12LWI4NjAyZDBlXTpudGgtY2hpbGQoMSkge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyNTUsIDE0MSwgMjYsIDAuMSkgMCUsIHJnYmEoMjU1LCAxNDEsIDI2LCAwKSAxMDAlKSwgd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1MiwgMjM1LCAyMTcsIDAuNSk7XFxufVxcbi5jb250ZW50VG9wIC50b3BDYXJkMltkYXRhLXYtYjg2MDJkMGVdOm50aC1jaGlsZCgyKSB7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDYsIDE5NCwgODEsIDAuMSkgMCUsIHJnYmEoNiwgMTk0LCA4MSwgMCkgMTAwJSksIHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RjZmFlODtcXG59XFxuLmNvbnRlbnRUb3AgLnRvcENhcmQyW2RhdGEtdi1iODYwMmQwZV06bnRoLWNoaWxkKDMpIHtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoNjgsIDEyMywgMjUyLCAwLjEpIDAlLCByZ2JhKDY4LCAxMjMsIDI1MiwgMCkgMTAwJSksIHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZjNmZjtcXG59XFxuLmNvbnRlbnRUb3AgLnRvcENhcmQyIC50b3BMaW5lMltkYXRhLXYtYjg2MDJkMGVdIHtcXG4gIGhlaWdodDogNTAlO1xcbn1cXG4uY29udGVudFRvcCAudG9wQ2FyZDIgLnRvcExpbmUyID4gaW1nW2RhdGEtdi1iODYwMmQwZV0ge1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIG1hcmdpbi1yaWdodDogM3B4O1xcbn1cXG4uY29udGVudFRvcCAudG9wQ2FyZDIgLnRvcExpbmUyID4gc3BhbltkYXRhLXYtYjg2MDJkMGVdIHtcXG4gIGNvbG9yOiAjMTcxYzIxO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuLmNvbnRlbnRUb3AgLnRvcENhcmQyIC50b3BMaW5lMiAubnVtW2RhdGEtdi1iODYwMmQwZV0ge1xcbiAgLypmb250LXNpemU6IDE0cHg7Ki9cXG4gIC8qY29sb3I6ICMwMDcxRkY7Ki9cXG4gIC8qbWFyZ2luLXJpZ2h0OiA1cHg7Ki9cXG4gIC8qYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkOyovXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICAvKndpZHRoOiA3MHB4OyovXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgbWFyZ2luLWxlZnQ6IDIycHg7XFxufVxcbi5jb250ZW50VG9wIC50b3BDYXJkM1tkYXRhLXYtYjg2MDJkMGVdIHtcXG4gIHdpZHRoOiAyMCU7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBwYWRkaW5nOiAxMHB4IDVweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGJhY2tncm91bmQ6ICNmOGY5ZmI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5jb250ZW50VG9wIC50b3BDYXJkMyAudG9wTGluZTNbZGF0YS12LWI4NjAyZDBlXSB7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5jb250ZW50VG9wIC50b3BDYXJkMyAudG9wTGluZTMgLm51bVtkYXRhLXYtYjg2MDJkMGVdIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxufVxcbi5jb250ZW50VG9wIC50b3BDYXJkMyAudG9wTGluZTMgLnJlZFtkYXRhLXYtYjg2MDJkMGVdIHtcXG4gIGNvbG9yOiAjZmY1NTU0O1xcbn1cXG4uY29udGVudFRvcCAudG9wQ2FyZDMgLnRvcExpbmUzIC55ZWxsb3dbZGF0YS12LWI4NjAyZDBlXSB7XFxuICBjb2xvcjogI2Y0YmUwMDtcXG59XFxuLmNvbnRlbnRUb3AgLnRvcENhcmQzIC50b3BMaW5lMyAuZ3JlZW5bZGF0YS12LWI4NjAyZDBlXSB7XFxuICBjb2xvcjogIzRhZTM3YjtcXG59XFxuLmNvbnRlbnRUb3AgLnRvcENhcmQzIC50b3BMaW5lMyAuYmx1ZVtkYXRhLXYtYjg2MDJkMGVdIHtcXG4gIGNvbG9yOiAjNTQ3NWY4O1xcbn1cXG4uY29udGVudFRvcCAuaGJtUmFkaW9CdG5bZGF0YS12LWI4NjAyZDBlXSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5jb250ZW50VG9wIC5oYm1SYWRpb0J0biA+IHVsID4gbGlbZGF0YS12LWI4NjAyZDBlXSB7XFxuICBwYWRkaW5nOiAxMHB4IDMwcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7XFxufVxcbi5jb250ZW50VG9wIC5oYm1SYWRpb0J0biA+IHVsID4gbGkuYWN0aXZlW2RhdGEtdi1iODYwMmQwZV0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjhmZjtcXG4gIGNvbG9yOiAjMTY3N2ZmO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5jb250ZW50VG9wIC5idG5fZGl2W2RhdGEtdi1iODYwMmQwZV0ge1xcbiAgcGFkZGluZzogNXB4IDBweDtcXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjhmZjsqL1xcbiAgY29sb3I6ICMxNjc3ZmY7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB3aWR0aDogMjUlO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uY29udGVudFRvcCAuYnRuX2RpdiA+IHNwYW5bZGF0YS12LWI4NjAyZDBlXSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1iODYwMmQwZSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjliNTU2ZjJhXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9Yjg2MDJkMGUmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1iODYwMmQwZSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSDpppbpobUgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vL+eOr+S/neeggVxyXG5leHBvcnQgY29uc3QgcXVlcnlTdXBlcnZpc2lvbiA9ICgpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvaG9tZS9zdXBlcnZpc2lvbicsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHt9XHJcbiAgICB9KVxyXG59O1xyXG4vL+eOr+S/neeggeWPmOWMlui2i+WKv1xyXG5leHBvcnQgY29uc3QgcXVlcnlIYm1UcmVuZCA9IChwYXJhbXMpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvaG9tZS9jaGFuZ2luZ190cmVuZHMnLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgIH0pXHJcbn07XHJcbi8v546v5L+d56CB5Y6f5Zug5YiG5p6QXHJcbmV4cG9ydCBjb25zdCBxdWVyeUhibUFuYWx5c2lzID0gKHBhcmFtcykgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9ob21lL2NhdXNlX2FuYWx5c2lzJyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICB9KVxyXG59O1xyXG4vL+eOr+S/neeggeWOn+WboOivpuaDhVxyXG5leHBvcnQgY29uc3QgcXVlcnlIYm1Db2RlQW5hbHlzaXMgPSAocGFyYW1zKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2hvbWUvcG9sbHV0aW9uX2RldGFpbCcsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHBhcmFtc1xyXG4gICAgfSlcclxufTtcclxuLy/lvoXlrqHmoLjliJfooahcclxuZXhwb3J0IGNvbnN0IHF1ZXJ5QXBwcm92YWxMaXN0ID0gKHBhcmFtcykgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9leGFtaW5lL3BlbmRpbmdfcmV2aWV3X2xpc3QnLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgIH0pXHJcbn07XHJcbi8v5a6h5qC4XHJcbmV4cG9ydCBjb25zdCBzdWJtaXREZXB0QXBwcm92YWwgPSAocGFyYW1zKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2V4YW1pbmUvZGVwYXJ0bWVudF9hcHByb3ZhbCcsXHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgZGF0YTogcGFyYW1zXHJcbiAgICB9KVxyXG59O1xyXG4vLyDotYvnoIHnsbvlnovkuIvmi4nmoYZcclxuZXhwb3J0IGNvbnN0IHF1ZXJ5Q2x1ZVR5cGVzID0gKCkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9leGFtaW5lL3R5cGVfbGlzdCcsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHt9XHJcbiAgICB9KVxyXG59O1xyXG4vL+axoeafk+a6kOWIl+ihqFxyXG5leHBvcnQgY29uc3QgcXVlcnlXUllMaXN0ID0gKHBhcmFtcykgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9ob21lL3BvbGx1dGlvbl9saXN0JyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICB9KVxyXG59O1xyXG4vL+WMuuWfn+S4i+aLieahhlxyXG5leHBvcnQgY29uc3QgcXVlcnlBcmVhcyA9ICgpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvaG9tZS9kaXZpc2lvbl9saXN0JyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczoge31cclxuICAgIH0pXHJcbn07XHJcbi8v5Lu75Yqh5qaC5ousXHJcbmV4cG9ydCBjb25zdCBnZXRUYXNrSW5mbyA9ICgpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvbGF3L3Rhc2tfc3VtbWFyaXplJyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczoge31cclxuICAgIH0pXHJcbn07XHJcbi8v6aOO6Zmp5oC76KeIXHJcbmV4cG9ydCBjb25zdCBnZXRFdmFsdWF0ZUluZm8gPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9ldmFsdWF0ZS9yZWdpb25fbWFwJyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczogZGF0YVxyXG4gICAgfSlcclxufTtcclxuLy8g6aOO6Zmp6Zeu6aKY57G75Z6LXHJcbmV4cG9ydCBjb25zdCBnZXRSaXNrVHlwZSA9ICgpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvZXZhbHVhdGUvdG9wX2luZm8nLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiB7fVxyXG4gICAgfSlcclxufTtcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IOi1i+eggeinhOWImSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy/njq/kv53noIHop4TliJnmn6Xor6JcclxuZXhwb3J0IGNvbnN0IHF1ZXJ5UnVsZUxpc3QgPSAocGFyYW1zKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2V2YWx1YXRlL3J1bGVfbGlzdCcsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHBhcmFtc1xyXG4gICAgfSlcclxufTtcclxuLy/pg6jpl6jkuIvmi4nmoYZcclxuZXhwb3J0IGNvbnN0IHF1ZXJ5SGJtRGVwYXJ0bWVudCA9ICgpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9pbnRlcmZhY2UvZGVwdC9kZXB0X3RyZWUnLFxyXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXHJcbiAgICAgICAgcGFyYW1zOiB7fVxyXG4gICAgfSlcclxufTtcclxuLy/moKHpqoxcclxuZXhwb3J0IGNvbnN0IGNoZWNrUnVsZXMgPSAocGFyYW1zKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL2V2YWx1YXRlL2NoZWNrJyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczogcGFyYW1zXHJcbiAgICB9KVxyXG59O1xyXG4vLyDkv67mlLnop4TliJlcclxuZXhwb3J0IGNvbnN0IGVkaXRSdWxlcyA9IChwYXJhbXMpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9oZWFsdGgvZXZhbHVhdGUvdXBkYXRlJyxcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICBkYXRhOiBwYXJhbXNcclxuICAgIH0pXHJcbn07XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IOWcsOWbviA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyDlnLDlm77ngrnkvY1cclxuZXhwb3J0IGNvbnN0IHF1ZXJ5V1JZTWFwID0gKHBhcmFtcykgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9ob21lL3BvbGx1dGlvbl9tYXAnLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiBwYXJhbXNcclxuICAgIH0pXHJcbn07XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IOe7n+iuoeaKpeihqCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgY29uc3QgcXVlcnlTdGF0aXN0aWNzID0gKCkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2FwcC9zdGF0aXN0aWNzL2RpdmlzaW9uX3BpZScsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IHt9XHJcbiAgICB9KVxyXG59O1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSDliqjmgIHor4Tku7cgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy/lkITljLrln5/mipXor4nljaDmr5RcclxuZXhwb3J0IGNvbnN0IGNvbXBsYWludFByb3BvcnRpb24gPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOicvY2x1c3Rlci9haXJRdWFsaXR5L2NvbXBsYWludFByb3BvcnRpb24nLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiBkYXRhXHJcbiAgICB9KVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJRQUFBQVVDQVlBQUFDTmlSME5BQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFNVlNVUkJWRGlOcFpWTGExMVZGTWQvYSsxOXo3bVBSRWhNb09sQUVSRWtoMzRDWThuQW9hUEM3Y1JQNEVBVUtzWGl3Sk9SQXdkQ08zVXMxRUQ5QUNwVVRVSEhjcE9SRTVVa0VOdkVlbC9ubkwzM2NuQVRjNk8xS0s3aGV2elhjLyszY0VGTU1DaTNrTUVBT1NxUVRXQi9EUUc0ZklEZEIxWUhXRkZnNVFmWXpDSjJoaUR6WUdVNUExcDZEYzBydEhxRTg2dm9kRGp6YXk5Z2VVVU1ubFRscE9NdlNkdWZrZVpCWlI3c1B1aVZaZHhKaGU4OGcwOFZOOFVRZzFzaWZHMEdtdmlJTGp0QWMzeEFZSjFZN0dKbGlZR1luTFc1dVlXN3Nvd2JUY2hDanl3M2JsamlGaytXYjJySHRRV2hjcEhtOEJKaHUwOUN4QlNnZngxZEJZMk9sblZvWjVGN1R3RUR1SnBGM2cwVDJ0SFJZaGZYdjQ2Q2laYmxiR1pMYS9paGtYdGpBN2g2SVZ5NExmQ213TTZjOXIzVTRzYlF5SmZBRndXQ2dRNEdTRjZoSE5PaXBtM3d6dm1lZUdEQzY1TDRBdU1YZ3c4djVrRzlrWStXOFErWGNlVVdvdlRCQjNTNmdNOWFaUE9iRi9oVURJdU9HQjN4VkgzblBCODNGWEtudEE0RE9saEh0TmhGZm8xb0Z2QXBrZ0d2bmg4U0x5Y2hLRlFLVlJJQ3d0NWNpZDlLVGF2cmNPMklGcnVJN3E4aGkxMUVEVlZEQlQ2ZTYrb3RGUUpHZzlHb0VFaTg4V2RDUTB4eDA0UXVkcEg5TlVTZnNzbFpVR0pMNENVUzEwaDhoZkRLbWMzQkozLzE5NWNQc0I5N1dONGlpU2VHd0YwdnFNSGJwM1BjTUdOai9rMmQ2bmVpc0tlSjJGYlM3MFBzeFJHbWczVnN4WkZxVHpDalVhVk94ajJNQi85WXRuQTdHZTlycExhTVpoeUpLNDQwV01kY1FhbmRGeEFab1RGRHZlQk1jQVk3Q3Q5aExBRS9JendIM0VING5zam5Lb3dienhnWU44WTBWOEx6UHhGOVVXRDdPWW1jSmpSVU1tV2lpa3NlZ0QwUlNoSU9nNmhFU2RRcVRJSXl5aUxqcWFmcVBTUTh5K3lzQkV6NmZaUUN0OWdodHc1dHJlbUtvMnVPdGtCdUVRZmdoQkNWMmdrVEltTUNZOTloZW5SRXpZQzR2VTE2SWpsNFI2NUtYZ3M1UXN0MEJpaUppTkhnbVFhaCtqczVnSUlZQXB1UWZuaEU3SFdvSjhZazlSajZ5T05VODVzSUp5S2NLSno0eUdNL1l0UnVNVGs2b2o2OFJDaDJ6NG4yUHhGc282UVZSL29YQkhzTytuKy9nRDhBaUM2TG5NenZUUFlBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBWUFBQUNOaVIwTkFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQU5vU1VSQlZEaU5yWlhOaTV4RkVNWi9WZDN2T3pPN3M3dFpZUllNUmtuQUtObVQ1Q0NZamNhN3A4QmVWUHdIUkJTRVFCQnhjL0lvSkZjUE9RbXlxRGN2SWt6VVhQVHNSbktRZ0JLREE4a21PN1B2WjFkNW1NbCtoTldUQlUxRGQvWEQ4M1JWUHkwY0RzR0JLd2huMW9YQlNBQzR2VE9kVHk4NEFLT0JzN1hwZklJejNmRjlnSU5nR3pPZ0I3OHJKMWFVRkFQOXJwSlYwN3ltNDNSSWJJK05QLzQybGs4WjY1dDJFRFFjQW52dGdxSWVlYXFiRVJmemZKN0xRZjNWNFBLdG9xOEVzVGN6ODcrU2QrOXlxZ2ZISXd4WFlYVUxodnNNcHpLSEZ3SkZMN0NZNVpRaHozUDVFUHd5UjRUREQwM05SVUtzS01ZTjQzNDdZK29CRUZiWGxaUHpnVHJQa2RqTGduMGw4UFpSWURNV3o0V0lKYXQvSVp0elR1SU1WMkZ6aThBR1N1d0ZCcjJNZ200dWZsNkVTNGNBaEtzTzF4R09DVHc3VzE0TFFTMDE5ak9qMmxoK1lGeS80OHFaZGVIRWl2S2dtL1VrZGwzOWd3UFNiZ3J5QmkzZmFlSlBOZjMwQ2E0Nlo2bkRZREZTOUFKc2lBSndySzlJR3oyU0l3Y3FiL0lGTG81NFFqeE41Y3ExL2N2MFM5YnhEdVBkakhGZjJmeFZsTUZJMk9ucVBDbDZxbkp4emovT1YrVkZTSzJJVkNKU1FXb051YldISi96b0dyTitqOERTUTJVd0V1WDJqcENYNG5sVUQwRUZQdHVYN084SjByWnVUZXVoRWFRRmUrdEF1Y1dONEhWVThpWGg5czVNOG45RVVxNkl4T2VEMmtVVHZoYzR0N2VwK3ZtVCtaSFRDMDdkZFFrUFRUb2hXYU5mYW1icXp2c0E0cXdodHVaUEhIVGhKeXpkRXBVa3NUWEdmZWYwZ2l1amdiTlEyb1RRaXNXR1FKMU12bmE0K1crc1JianFKaCtScU1YYVpseVFXQ2lOMGNBakFOdGpJK3UzR3FyS21xd2dXQlpNUDA3cUx6QnJjSUZ6Z2x4RDNGUHIzNGhJSVlSU0s2dFluR3U0Zjk5WWY5bUZEWlNuendiT0hzL1lqcjJ1U045RStoN1R2Q085S0pLNVN3Q1E1S2xWYW5FSzBURFJxaGlYa2swbzJvTCtUczJOb1FXR3dEdHIwNGZlTnRKcTVsa3lSM0hRNUFrenBYV29QVWdwTG9XNFREVElwQ1R0b25uRk03SGh6cnp4N3BZZmJRNk5kM3FkYnNkVDZyaUV6RzNxU3FJa0tWT2ozYmJjTFVOMWhEbWcwMjRDYmd5TlhwRjQxTlRVVlZGTUdKZHQ4eWcyUEl4bHRmMTRsS0Y1dEZ0MEpoeHJDMWFvR2ZkYnRqYjNqRGJzbFc0SW5Md0RTeTg1OSs0YS9TeFJhV3J5MkRUZFZEY1pkVk10VmN4UnN6dHUrTzFlWW1kNWFyQ3Z6OXFjdzQ0Ti84TVg4QTg2WEwwMkVvWnVFd0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQjRBQUFBZUNBWUFBQUE3TUs2aUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUlYU1VSQlZFaUp2WmRic3FRZ0RJYi8wTE9KdHR6THdTMXB6YlA0Yk5sYmt0N0xsSzZpeVR3MEtNM0YyNXd6ZWJGUWtpK0JFQ0xob0hCZlN0eGU3ZnFDSkFDQVdOdnhFMFpvK3YxSEg3Rkh1OENoVUFEYXZYbUJkTlJNNmhKNGlkQkZkazJ5RGlUQkY2TThCWS9BM3d6TndqL0FoNkYrUWhGL0hkeU9EL2dDM29VU2E3eHUzVmJXN3Rvd29uTDZQcGozZ0R3VUtobGhPT2N0c1FQRW11cTVBZ0RoZVpxRVVqMVhFRVpheDlKWnppUWh6TWlQK3dnak5EV1RXcllqbU9kWXRCVXROUk54WDBvSU15WWR5MHRIemFTMjdBcnV5emdDcXd3QUY2Q0FXMllqcXRSSDdrc3BJRXdTVE0yaytIRy9BbjBiSHdxVlRjVGJxeFVnL29xcGlmMEJ1dUI5T1A1ODUreW1iZUZYMmwxNjJxZDB5bFRQQ3JENTRJOGY5eEZNMGo4cVBCUzg2TDV0eVJpY3l0SndGWmlrVFRJWmpka2FmWC9UMlJNUzJFdEh2RW9IbHloaGtzVkoxL0pRckdmWFgzS09yd1NSTzI4N0R1M0w2OVpsYlJGcmtkUGpvVkMydG5ZWHNHRVZpeVFMQnRCeVg4cHNGY29Kc2JiRlF5Rlh0NW1lWWxtU3BGdG01TDZVVk04VmpLZ09PTkJSUFZlMktHMWRGbnF6Wkg0WXRGZmFVdWxjLzdYdVliY2JxUlZxSm5MZzNjbk9lTmpRZWJsdzFFNUh6YVRXYTlFVmdoTkN6ZlIyL0VSLzVuVFc1TnJhNnczaG9WQVE1cWpUQytOYTY3Tm9zejZ4U3VuVzV6TDhBalFKL2dGNHNyMU5GcEIvcUZpZUVkWXdvanJWMFB2eTMzOWhJZ2ZjTmVpdXpQQ25EY0JlKyt2TFh5Qk1XMGhvb2FLcUFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUI0QUFBQWVDQVlBQUFBN01LNmlBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFMRVNVUkJWRWlKeFpkUFROTlFITWUvN2RxNURTYURGYVlHQ0RQUk9QOUdMeVlEQlYyaU54TVRMM0pWd2JETDFKRjRJeGdUTlJqMGd0RmdZcndZYng0OEtJa0pMZ2E4aUFZakF6RUNJb0xBQnBWQjU5WUNIbXJaU2p2VzFTTGZwSG12djkvN3ZjLzd2YjczMmhMUUtIODdGM0M0ekUwQVlHZE1qblJmTExMSXh1ZUZYZ0JvcmJYVWFPbVB5TmJnOHBQZnIwc3FObFZySFNBQVRJMGtRdGtHa0JIc2IrY0NaWHVzZDNJQjVqSUFWYkNlTEhPRks4QkdRdGVDeThCNm9GWE9GcFJadTFGdTY4WW81MFhYVENOR09XOVcrQXBZRDdUYzFvMnpwYWNWOWx1RGs2cnR2L2ZGTDdWZHNOMEZBRkl5NnBuZXlxSVdWWHVWVTkyZXZsaEpRTXcyVnlnZ1pxd0tzS3JiMDFrVW9NejI0UWV4ZFA4OUp0eUZ3SGJaa1FGNG1Nd0RDazE0TWNRcVk5SlpWS1pzaDFqeEFnQ01pTVg1ZzhDVnc2azJVUVRoWEw2dGlIMFVya1JvWEt6N0tnQ2ZXKzczdDNNQlVoRmxnRUxqcVZVOXpDcjlEcGU1aWJUbVV3ZjBBcUpvUkpRSXltelhlb0laV3N0RnJqN3c5Y0E1ZUZlZ3plOGFzOGJZR1pPRCtoZW9wREhpR1FiSFdqUkJKUm4yakovLzBBNDFGSnlyeUZoa1VXWGRyYTlpa1VWMlF6S096d3U5SkR1WmJONElPQ205TGY2bldtc3ROUlFBZEh3VUJvcExxRjJTNDlCV29Ld0FtRjRRNzhNUnNmd3lrd3J1L0NhV3cyenFkRHJqQWNMVFluMmFFNjlZRW5qL014VTNOU2w4QnFUMzhjM2xBZ2NGZGk1aGVISXl1ZktBaVFCQkFOSjJ1a3I4MmsvemJldUxCWTV1NW51a3V1elQ1OWg5dmo4VVRVMjVrVHJKQ0o5ZTFOUDdWTUVBY09RZVA5ZzFTKzB3RW5xY0VmcGYxZE83MDIyS2ZmeW1nZDVaN1JRR2pJS2VLT2I3VmtOVndRRFFlWkgybkhMeHZVVlcvY0F0K1lEUHpyZStyRFB2VmZObi9ZWHhQZUREWTB1VUozMHJyU1VQQTVRU1FsOUhIYTBLMUF5V2RPNXg0dTFYaml5Y1hUYTVKeEtFZVM0QmtBUmdOd1BiTEV2SlVodUV2SVhramFjTjF1dGErdnNERkpQMjlkTHZtS2NBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQjRBQUFBZUNBWUFBQUE3TUs2aUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQU1KU1VSQlZFaUp0WmZMVHhOUkZJZS9NeDBVUWFNcFJtdEVyS2tFTUNwQkl4aUpvU1ltdmhhS3JsekExbzJKSm1JaUs4cGFOMFQvQWxnWlkzUmpZdHlJQ3cyd0FNY1hNYVdvSUVZbElCTEZGKzExTVIzcDBKbnBsT0p2MDg2ZGM4OTN6cGs3OTU0UmZHb29ycUlTVUIwQUtLSzJtMEt2VXVvUlFGMGtFUFBqVDNJQ0U4bVlJQjErQXpUalVwMjVBbkFGRDhWVlZEVDFNQjlnUGdGb2p0QkVNbFlvRkVDUWpxRkUwaEdjbGZGU1NwdExUcG5id0puUVZTc2hFaExFc1NhNU5UOFBiejhyZnZ4eWh2OERMODUwUjRWUXBNUHdCTXg4encrNnJoUnFOa015QlMvZXFuL2pLaVdINmlxbEYwQmZpTUJlM2lJZEJoSnc0MzUrVUV2bmowSjl4RDZXWGpjQzZjWGx0Z0FtcHV6WDdhZWd1UjcyaHVGQXBUZDQ4VnhMRmt1SDdHeWQxSDdLTEIvQUNvSHlvR0pMVUxqWkR6WEZCdFhGQnRYRno3ZzcwOEx3ejFwWFAybFdUSGZMTmxQTjlRdFFTNkhKSGtMQWlYQ1BiYncvdFp0aDNNRmc3aEc2cDBWYWR3WmdhdGI4dnlsbGNPSjNtNnZ0MXprWW0vSDJKd0hWb1lsSWt4OTRWVWl4YjV1aVBMSWJvK1lCMzBxY3Myb0lQdlBqRGkxcnczZlI3QS83WHBQWWV0WFJibi9RNE90Y0RtZUtxTy90NFVrYzNrOHZ3Q1B2THZ1ZDZpamY0UEZwdU5rUEx5Y0ViYlNIMVhPRzdYN1hTQXQ5MDJiNWE0b05KeGMyK1ZwY21WbzExczJ1ZGZhVjNEWFNRdGRJS3dBWHRuZjc4cU1qOVBwNXp0YTcydXdGUFFhMytscjU4QVgyZlBKd0p2VDZ5cmc5MUpaVnZreGd4WG80MndqbkRzT3ZlWGo4MnR1ZlV1cVJycExTS1pxS2VobGVHYjFHV0RPWVRML0wxck04WFEvbFpURDR4bTYvdGdRaUc3M2htblZhZUtteENyb3UxZEowc0phVFIyb1p2VzVtZUtZQkxoN1BOVHRiZFpGQVRBUHpyTXgvdW5tQzVTdUxwVnNSUEUya3NnNkt6V1htNzR0eHVOMFBmWEVvWFFrSWpFL0J2VUY0UG1iYTlNVmgvUnJUTm5QdVlsbk53RUlqc0tpNTJ4a1dBbHBoamNDZmVYZzFsdEVJWkhRaG5xMVBlSU9nTDZHY0FDb0ZpWTgrV2g4bitISXBaN1AzUCtCdXZiVjdRNzhNOE16bXpqZTRrQUFLK29SeENnQkFSSnFjUHRvQVZGSTYvV3hJQUg4QlE5bzIzZFlsN3U0QUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUI0QUFBQWVDQVlBQUFBN01LNmlBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFHY1NVUkJWRWlKeFpkUmpvUWdESVovekY2SUUyeU5Ib3RrTk9GWUdEc240RWpzZzJnWVZzYkN6T3oyaFlSZ3Y3YTB0Q29JWmZTR0FuQkx0aWl1REFBS3VBTmdweTFMOUNrQmNNcUFFcVd6MDNacUFpY2VVZzFVYXNBcHVNWExXdmd2OER1aHorQVA0RTlBUy9BRFhJQ3lBdVpHVmw0RlVFQy9aLzNYdm5rR1hiVHRSMjhJRFFubXRKMUdiemdBYThiZ2FNUzV0OUhUaHc4cmhSZHQrOEdia090MTJrNWRZa20xNHBacjJGbGRER1UxZE5HMlJ3eGJZa2krZHlxak45UkJjSDhLbUtQU0F4b2ZtRFhkaTdvdTlRWGcxZ1hnVzNEdzIybkxDdWhMME5wUzdJVG5hUEJtZGRyeU82REFWazVVQVE5SmlqWkRBWkRVNDF4ZWdRTFlRczB2UXRPeVlxRStydlg0MUZPbjdiUW5YaHdJTHFVR1hBb3ZqZDVRa25pWG9WZkF2Wk8rUGdxWVM0MWtoOFlHd0JJbk91bU1GSUMxNEEwTjNxd0JXQWR2Uk8rNjAzYTc0eGRhM3dGUFZpcWVTbGhIUDQ3V3BoOGRkOXBvRE9Pa0p5L2FLaURweHdxWXd5T1lJcFFid2NpZjR6U3kvei82ZkJKK09leDlBaTRlYjk4STV3amxna0hQNWM5L1lVNE1JR3psc1djcXhaVXpJRU1nUDJ1MkNsRE1vYlE5QUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQlFBQUFBVUNBWUFBQUNOaVIwTkFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUw2U1VSQlZEaU5wWlZCYXlSRkZNZC83MVZYOS9STTFOM0F5bzRIUVJoQkpoL0JkVThlUFMxa0wzNENENkt3c3JoNGNITHk0RUZ3cjU0RkZkWVBvQjdVTE9nSHlPd2xKeFVETHNSSnpFeFBkMWZWOHpBVDBoT0NJaFlVQlZYdi9hcnF2VmYvRWpyTlFEQmdEK0VBWVFjQllMZ2VqekFBRGpCMk1EN0VFQkRXODdBMlBJZE4xcURYVWVxUmNyeHcwQ3FscmV3cU1aNHRJbGt2VVJ3bXZpWHhKYWtMbFEwWUtOc2pSLzFYUmh4a1pQVjlCQUY3Z01qM0dKRGl4OFQrUHRlWExVZlhBdU5wWklveHdRUk1PdGQwYkk4YzFTeG5VT1RVM0FON3dOWHRCd3E1Z3pRMThibVdtNGVCWFpJSXBnRGNSV0dzdUJOUHpIclU5dWdmWUFDM2FldzlLdC9EblhpbVk4ZGQxRUNVeVRwbXcxbUc1UVU5dVFYYzNuQVhQc1hzTFdDL2s4SDNVZTV4a2hjd3k5aFozVlE1UUtoSHlwK1ZwNUVlSnU5MlVJOUo4Z1ltM3lENkcraEhHeHNaaXRPQzdXWEc5c2l4aHlpN1FGZ3FXLzJNMk9iZHpDTjhqa2JEWXNSaWhBRHdzSU84anpZRlo2VW5MSlV4b2t3UllxdUVOaU81SEhpdGM0SlhFQTA0VitOY2pXZ0FlZElCL29obUhoOGNzVldtaURKRTZDZkJTaVUzUmVTVGpzUGJSQWxZYXJIVUloTEEzdHlJcmlhSEphV2ZoQ0dpRjJ2enEvT3B0b2ZKeTVqZUlkbDN3S3NYT1Buc3NubkdFY1pBRFcrSnFKRWtYK0JRek41WjI5eGFkYnZzdXcveENjbEZSQk1MakRtbWpER2NUMlEra0VLTHBnWk5qNERIVngrWjh6TDZnT0FhVW1ocHM0anppVEhtSnFDODlMd3dQMVVvRlRFSDVrRDNFZnNKNURyd0svQWk4QkRoWjJMNkdzOENrd1hKTHhnc2x1Z3pnVitPbzlnRVpZaURGenl0bEN6VEZtcGJrQTBnbEloNm9qa0FuRVRFR3JDS3dKeWdaeVNaMDFnRnZ6ZEFXcjNsWFpTZHNhUDhveUJtUFhMcDQraVRwQWRTb0d1Z2FDQ21CcU1pWTBGZ1Fka3VlWHFqNFdBYStlb2NlRmtjWEY2Z1dpQnRnVGhQU0N0Z3BoR0xMVTIrWkpEcXkrS0FnQW9ya1FRU3g0ZVI4bHFEeFlvbVB5TzZVNXIyaE9oblJEK0RNQ082VSt4c2pyZUtwemNhYmg0R3BoZEMrOThFVmwxYVZjUy9DT3dHOUg5K0FYOERXYngzcCtLaXZkVUFBQUFBU1VWT1JLNUNZSUk9XCIiLCIvL+W9k+WJjeeUteiEkeaXtumXtC0t5b2T5pelXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUaGlzRGF0ZShlKSB7XHJcbi8vK1wiIFwiK2grXCI6XCIrTStcIjpcIitzO1xyXG5cdFx0bGV0IG5vd1RpbWUgPSBcIlwiO1xyXG5cdFx0bGV0IHRpbWU9IG5ldyBEYXRlKCk7XHJcblx0XHRsZXQgeT10aW1lLmdldEZ1bGxZZWFyKCk7XHJcblx0XHRsZXQgbG09dGltZS5nZXRNb250aCgpO1xyXG5cdFx0XHRsbT1sbTwxMD8nMCcrbG06bG07XHJcblx0XHRsZXQgbT10aW1lLmdldE1vbnRoKCkrMTtcclxuXHRcdFx0bT1tPDEwPycwJyttOm07XHJcblx0XHRsZXQgZD10aW1lLmdldERhdGUoKTtcclxuXHRcdFx0ZD1kPDEwPycwJytkOmQ7XHJcblx0XHRsZXQgaD10aW1lLmdldEhvdXJzKCk7XHJcblx0XHRcdGg9aDwxMD8nMCcraDpoO1xyXG5cdFx0bGV0IE0gPSB0aW1lLmdldE1pbnV0ZXMoKTtcclxuXHRcdFx0TT1NPDEwPycwJytNOk07XHJcblx0XHRsZXQgcyA9IHRpbWUuZ2V0U2Vjb25kcygpO1xyXG5cdFx0XHRzPXM8MTA/JzAnK3M6cztcclxuXHRcdGlmIChlID09PSAxKSB7XHJcblx0XHRcdG5vd1RpbWU9IHkrXCItXCIrIG0rXCItXCIrZCArICcgJyArIGggKyAnOicgKyBNICsgJzonICsgc1xyXG5cdFx0fWVsc2UgaWYoZSA9PSA0KXsvL+W9k+aciOeahOesrOS4gOWkqVxyXG5cdFx0XHRub3dUaW1lPSB5K1wiLVwiKyBtK1wiLTFcIjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG5vd1RpbWU9IHkrXCItXCIrIG0rXCItXCIrZFxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG5vd1RpbWU7XHJcbn1cclxuLy8g6L2s5YyW5pe26Ze0XHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUsbikge1xyXG5cdFx0bGV0IHRpbWU9IG5ldyBEYXRlKGRhdGUpO1xyXG5cdFx0bGV0IG5vd1RpbWU9IFwiXCI7XHJcblx0XHRsZXQgeT10aW1lLmdldEZ1bGxZZWFyKCk7XHJcblx0XHRsZXQgbT10aW1lLmdldE1vbnRoKCkrMTtcclxuXHRcdFx0bT1tPDEwPycwJyttOm07XHJcblx0XHRsZXQgZD10aW1lLmdldERhdGUoKTtcclxuXHRcdFx0ZD1kPDEwPycwJytkOmQ7XHJcblx0XHRsZXQgaD10aW1lLmdldEhvdXJzKCk7XHJcblx0XHRcdGg9aDwxMD8nMCcraDpoO1xyXG5cdFx0bGV0IE0gPSB0aW1lLmdldE1pbnV0ZXMoKTtcclxuXHRcdFx0TT1NPDEwPycwJytNOk07XHJcblx0XHRsZXQgcyA9IHRpbWUuZ2V0U2Vjb25kcygpO1xyXG5cdFx0XHRzPXM8MTA/JzAnK3M6cztcclxuXHRcdGlmKG49PVwieVwifHxuPT1cIuW5tFwiKXtcclxuXHRcdFx0bm93VGltZT0geVxyXG5cdFx0fWVsc2UgaWYobj09XCJNXCJ8fG49PVwi5pyIXCIpe1xyXG5cdFx0XHRub3dUaW1lPSB5K1wiLVwiKyBtXHJcblx0XHR9ZWxzZSBpZihuPT1cIm1cIil7XHJcblx0XHRcdG5vd1RpbWU9IHkrXCItXCIrIG0rXCItXCIrZCtcIiBcIitoK1wiOlwiK01cclxuXHRcdH1lbHNlIGlmKG49PVwiaFwifHxuPT1cIuaXtlwiKXtcclxuXHRcdFx0bm93VGltZT0geStcIi1cIisgbStcIi1cIitkK1wiIFwiK2hcclxuXHRcdH1lbHNlIGlmKG49PVwiZFwifHxuPT1cIuaXpVwiKXtcclxuXHRcdFx0bm93VGltZT0geStcIi1cIisgbStcIi1cIitkXHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0bm93VGltZT0geStcIi1cIisgbStcIi1cIitkK1wiIFwiK2grXCI6XCIrTStcIjpcIitzXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbm93VGltZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaG91ckRhdGVGb3JtYXQoZGF0ZSkge1xyXG5cdGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cdGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcblx0bGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG5cdGxldCBob3VyID0gZGF0ZS5nZXRIb3VycygpO1xyXG5cdGRhdGUgPSB5ZWFyICsgJy0nICsgKG1vbnRoID4gOSA/IG1vbnRoIDogJzAnICsgbW9udGgpICsgJy0nICsgKGRheSA+IDkgPyBkYXkgOiAnMCcgKyBkYXkpICsgJyAnICsgKGhvdXIgPiA5ID8gaG91ciA6ICcwJyArIGhvdXIpO1xyXG5cdHJldHVybiBkYXRlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBtb250aERhdGVGb3JtYXQoZGF0ZSkge1xyXG5cdGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cdGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcblx0ZGF0ZSA9IHllYXIgKyAnLScgKyAobW9udGggPiA5ID8gbW9udGggOiAnMCcgKyBtb250aCk7XHJcblx0cmV0dXJuIGRhdGU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZvdXJIb3VyVGltZSgpIHtcclxuXHRsZXQgbm93RGF0ZSA9IG5ldyBEYXRlKCk7XHJcblx0bGV0IHllYXIgPSBub3dEYXRlLmdldEZ1bGxZZWFyKCk7XHJcblx0bGV0IG1vbnRoID0gbm93RGF0ZS5nZXRNb250aCgpICsgMTtcclxuXHRsZXQgZGF5ID0gbm93RGF0ZS5nZXREYXRlKCk7XHJcblx0bGV0IGhvdXJzID0gbm93RGF0ZS5nZXRIb3VycygpO1xyXG5cdGlmIChob3VycyA8IDQgJiYgaG91cnMgPj0gMCkge1xyXG5cdFx0aG91cnMgPSAwO1xyXG5cdH0gZWxzZSBpZiAoaG91cnMgPCA4ICYmIGhvdXJzID49IDQpIHtcclxuXHRcdGhvdXJzID0gNDtcclxuXHR9IGVsc2UgaWYgKGhvdXJzIDwgMTIgJiYgaG91cnMgPj0gOCkge1xyXG5cdFx0aG91cnMgPSA4O1xyXG5cdH0gZWxzZSBpZiAoaG91cnMgPCAxNiAmJiBob3VycyA+PSAxMikge1xyXG5cdFx0aG91cnMgPSAxMjtcclxuXHR9IGVsc2UgaWYgKGhvdXJzIDwgMjAgJiYgaG91cnMgPj0gMTYpIHtcclxuXHRcdGhvdXJzID0gMTY7XHJcblx0fSBlbHNlIGlmIChob3VycyA8PSAyMyAmJiBob3VycyA+PSAyMCkge1xyXG5cdFx0aG91cnMgPSAyMDtcclxuXHR9XHJcblx0bW9udGggPSBtb250aCA8IDEwID8gXCIwXCIgKyBtb250aCA6IG1vbnRoO1xyXG5cdGRheSA9IGRheSA8IDEwID8gXCIwXCIgKyBkYXkgOiBkYXk7XHJcblx0aG91cnMgPSBob3VycyA8IDEwID8gXCIwXCIgKyBob3VycyA6IGhvdXJzO1xyXG5cdHJldHVybiB5ZWFyKyctJyttb250aCsnLScrZGF5KycgJytob3VycysnOjAwOjAwJ1xyXG59XHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWI4NjAyZDBlJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWI4NjAyZDBlJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiYjg2MDJkMGVcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnYjg2MDJkMGUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnYjg2MDJkMGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnYjg2MDJkMGUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iODYwMmQwZSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCdiODYwMmQwZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL2Vudmlyb25tZW50Q29kZS9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1iODYwMmQwZSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1iODYwMmQwZSZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=