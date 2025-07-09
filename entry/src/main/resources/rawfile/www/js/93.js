(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[93],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/exceedDes.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/exceedDes.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var _api_pollution_source__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/pollution_source */ "./src/api/pollution_source.js");






//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "exceedDes",
  data: function data() {
    return {
      currentDate: new Date(),
      columns: ['日数据', '月数据'],
      yearSelect: null,
      yearColumns: [],
      typePop: false,
      type: '日数据',
      endPop: false,
      endPop2: false,
      endTime: dayjs__WEBPACK_IMPORTED_MODULE_6___default()(new Date()).format('YYYY-MM'),
      deviceId: "",
      name: "",
      fsfqtype: '',
      chartdata: [],
      cbList: []
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.name = this.$route.query.name;
    this.fsfqtype = this.$route.query.type;
    this.deviceId = this.$route.query.deviceId;

    if (!this.basinRef) {
      this.basinRef = echarts__WEBPACK_IMPORTED_MODULE_7__["init"](this.$refs.basinRef);
      setTimeout(function () {
        _this.initChart(_this.basinRef);
      });
    }

    this.yearData();
  },
  methods: {
    yearData: function yearData() {
      //年数据
      // 获取默认显示的时间
      var nowTime = new Date();
      var year = nowTime.getFullYear();
      var month = nowTime.getMonth();
      var day = nowTime.getDate(); // 循环数组 填写最小时间和最大时间范围

      for (var i = 2010; i < 2099; i++) {
        this.yearColumns.push(i);
      } // 格式化时间并截取


      var years = this.formatDate(new Date(year, month, day));
      var Year = years.slice(0, 4); // 将截取的年份赋值给绑定值 用于点击弹出日期窗口后显示当前的时间

      this.yearSelect = this.yearColumns.indexOf(Number(Year));
    },
    //日期格式
    formatDate: function formatDate(date) {
      return "".concat(date.getFullYear(), "-").concat(date.getMonth() + 1, "-").concat(date.getDate());
    },
    onConfirmType: function onConfirmType(value) {
      this.type = value;

      if (value == "日数据") {
        this.endTime = dayjs__WEBPACK_IMPORTED_MODULE_6___default()(this.endTime).format('YYYY-MM');
      } else {
        this.endTime = dayjs__WEBPACK_IMPORTED_MODULE_6___default()(this.endTime).format('YYYY');
      }

      this.typePop = false;
      this.initChart(this.basinRef);
    },
    onConfirmEndTime: function onConfirmEndTime(value) {
      this.endTime = dayjs__WEBPACK_IMPORTED_MODULE_6___default()(value).format('YYYY-MM');
      this.endPop = false;
      this.initChart(this.basinRef);
    },
    onConfirmEndTime2: function onConfirmEndTime2(value) {
      this.endTime = value;
      this.endPop2 = false;
    },
    endOpen: function endOpen(flag) {
      if (flag == "日数据") {
        this.endPop = true;
      } else {
        this.endPop2 = true;
      }
    },
    initChart: function initChart(chartInstance) {
      var _this2 = this;

      var option = {
        color: ['#06B5F6'],
        legend: {
          show: false
        },
        grid: {
          top: '15%',
          left: '8%',
          right: '5%',
          bottom: '20%'
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            color: '#B0B7C2',
            fontSize: 12,
            margin: 20
          },
          boundaryGap: false,
          data: []
        },
        yAxis: {
          type: 'value',
          name: '',
          splitLine: {
            lineStyle: {
              type: 'solid',
              color: '#E4E9F2'
            }
          },
          axisLabel: {
            color: '#B0B7C2',
            fontSize: 12
          }
        },
        series: [{
          name: '次数',
          data: [20, 32, 91, 34, 29, 30],
          type: 'bar',
          barWidth: '10',
          itemStyle: {
            normal: {
              color: new echarts__WEBPACK_IMPORTED_MODULE_7__["graphic"].LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#4F8AFF' // 0% 处的颜色

              }, {
                offset: 1,
                color: '#4A5CFF' // 100% 处的颜色

              }], false),
              barBorderRadius: [30, 30, 0, 0]
            }
          }
        }]
      };
      var info = {
        begin: this.endTime,
        end: this.endTime,
        sbid: this.$route.query.sbid,
        type: this.type == '日数据' ? 'day' : 'month'
      };
      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_8__["gasExceed"])(info).then(function (res) {
        var rdata = res.data;
        _this2.cbList = rdata;
      });
      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_8__["gasExceedStat"])(info).then(function (res) {
        var xArr = [],
            sArr = [],
            sArr2 = [];
        var rdata = res.data; // this.cbList = rdata.data;

        _this2.chartdata = rdata.stat;

        if (_this2.chartdata.length > 0) {
          _this2.chartdata.forEach(function (item) {
            xArr.push(item.NAME.slice(5));
            sArr.push(item.NUM);
          });
        }

        option.series[0].data = sArr;
        option.xAxis.data = xArr;
        chartInstance.setOption(option);
      }); // if(this.fsfqtype=="废水"){
      // 	waterOverDetail(info).then(res=>{
      // 		let xArr = [],sArr=[],sArr2=[];
      // 		let rdata = res.data;
      // 		this.cbList = rdata.data;
      // 		this.chartdata = rdata.stat;
      // 		if(this.chartdata.length>0){
      // 			this.chartdata.forEach(item=>{
      // 				xArr.push(item.name);
      // 				sArr.push(item.value)
      // 			})
      // 		}
      // 		option.series[0].data = sArr;
      // 		option.xAxis.data = xArr;
      // 		chartInstance.setOption(option)
      // 	})
      // }else{
      // 	gasOverDetail(info).then(res=>{
      // 		let xArr = [],sArr=[],sArr2=[];
      // 		let rdata = res.data;
      // 		this.cbList = rdata.data;
      // 		this.chartdata = rdata.stat;
      // 		if(this.chartdata.length>0){
      // 			this.chartdata.forEach(item=>{
      // 				xArr.push(item.name);
      // 				sArr.push(item.value)
      // 			})
      // 		}
      // 		option.series[0].data = sArr;
      // 		option.xAxis.data = xArr;
      // 		chartInstance.setOption(option)
      // 	})
      // }
      // chartInstance.setOption(option)
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/exceedDes.vue?vue&type=template&id=0391515f&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/exceedDes.vue?vue&type=template&id=0391515f&scoped=true& ***!
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
    {
      staticStyle: {
        height: "calc(100vh)",
        "overflow-y": "auto",
        background: "#fff",
      },
    },
    [
      _c("van-nav-bar", {
        attrs: { title: "超标详情", "left-arrow": "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
      }),
      _c("div", { staticClass: "name" }, [
        _vm._v(" " + _vm._s(_vm.name) + " "),
      ]),
      _c("div", { staticClass: "search-content fs" }, [
        _vm._v(" 次数 "),
        _c(
          "div",
          {
            staticClass: "search-item fs",
            on: {
              click: function ($event) {
                _vm.typePop = true
              },
            },
          },
          [
            _c("van-icon", { attrs: { name: "notes-o" } }),
            _vm._v(" " + _vm._s(_vm.type) + " "),
            _c("van-icon", { attrs: { name: "arrow-down" } }),
          ],
          1
        ),
        _vm._v(" -- "),
        _c(
          "div",
          {
            staticClass: "search-item fs",
            on: {
              click: function ($event) {
                return _vm.endOpen(_vm.type)
              },
            },
          },
          [
            _c("van-icon", { attrs: { name: "notes-o" } }),
            _vm._v(" " + _vm._s(_vm.endTime) + " "),
            _c("van-icon", { attrs: { name: "arrow-down" } }),
          ],
          1
        ),
      ]),
      _c("div", {
        ref: "basinRef",
        staticStyle: { height: "200px", width: "90%", margin: "0 auto" },
      }),
      _c("div", { staticClass: "offline-content" }, [
        _c("div", { staticClass: "title" }, [_vm._v(" 超标详情 ")]),
        _c(
          "table",
          { staticClass: "table-wrapper", attrs: { width: "100%" } },
          [
            _vm._m(0),
            _c(
              "tbody",
              _vm._l(_vm.cbList, function (item) {
                return _c("tr", [
                  _c("td", [_vm._v(_vm._s(item.YCRQ))]),
                  _c("td", [_vm._v(_vm._s(item.JCYZMC))]),
                  _c("td", [_vm._v(_vm._s(item.FZ))]),
                ])
              }),
              0
            ),
          ]
        ),
      ]),
      _c(
        "van-popup",
        {
          attrs: { position: "bottom" },
          model: {
            value: _vm.typePop,
            callback: function ($$v) {
              _vm.typePop = $$v
            },
            expression: "typePop",
          },
        },
        [
          _c("van-picker", {
            attrs: {
              title: "数据类型",
              "show-toolbar": "",
              columns: _vm.columns,
            },
            on: {
              cancel: function ($event) {
                _vm.typePop = false
              },
              confirm: _vm.onConfirmType,
            },
          }),
        ],
        1
      ),
      _c(
        "van-popup",
        {
          attrs: { position: "bottom" },
          model: {
            value: _vm.endPop,
            callback: function ($$v) {
              _vm.endPop = $$v
            },
            expression: "endPop",
          },
        },
        [
          _c("van-datetime-picker", {
            attrs: { type: "date", title: "选择日期" },
            on: {
              confirm: _vm.onConfirmEndTime,
              cancel: function ($event) {
                _vm.endPop = false
              },
            },
            model: {
              value: _vm.currentDate,
              callback: function ($$v) {
                _vm.currentDate = $$v
              },
              expression: "currentDate",
            },
          }),
        ],
        1
      ),
      _c(
        "van-popup",
        {
          attrs: { position: "bottom" },
          model: {
            value: _vm.endPop2,
            callback: function ($$v) {
              _vm.endPop2 = $$v
            },
            expression: "endPop2",
          },
        },
        [
          _c("van-picker", {
            attrs: {
              "show-toolbar": "",
              columns: _vm.yearColumns,
              title: "选择年",
              "default-index": _vm.yearSelect,
            },
            on: {
              confirm: _vm.onConfirmEndTime2,
              cancel: function ($event) {
                _vm.endPop2 = false
              },
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
        _c("th", [_vm._v("超标时间")]),
        _c("th", [_vm._v("超标因子")]),
        _c("th", [_vm._v("数值")]),
      ]),
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

/***/ "./node_modules/core-js/internals/does-not-exceed-safe-integer.js":
/*!************************************************************************!*\
  !*** ./node_modules/core-js/internals/does-not-exceed-safe-integer.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $TypeError = TypeError;
var MAX_SAFE_INTEGER = 0x1FFFFFFFFFFFFF; // 2 ** 53 - 1 == 9007199254740991

module.exports = function (it) {
  if (it > MAX_SAFE_INTEGER) throw $TypeError('Maximum allowed index exceeded');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es.array.concat.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.concat.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");
var isArray = __webpack_require__(/*! ../internals/is-array */ "./node_modules/core-js/internals/is-array.js");
var isObject = __webpack_require__(/*! ../internals/is-object */ "./node_modules/core-js/internals/is-object.js");
var toObject = __webpack_require__(/*! ../internals/to-object */ "./node_modules/core-js/internals/to-object.js");
var lengthOfArrayLike = __webpack_require__(/*! ../internals/length-of-array-like */ "./node_modules/core-js/internals/length-of-array-like.js");
var doesNotExceedSafeInteger = __webpack_require__(/*! ../internals/does-not-exceed-safe-integer */ "./node_modules/core-js/internals/does-not-exceed-safe-integer.js");
var createProperty = __webpack_require__(/*! ../internals/create-property */ "./node_modules/core-js/internals/create-property.js");
var arraySpeciesCreate = __webpack_require__(/*! ../internals/array-species-create */ "./node_modules/core-js/internals/array-species-create.js");
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");
var wellKnownSymbol = __webpack_require__(/*! ../internals/well-known-symbol */ "./node_modules/core-js/internals/well-known-symbol.js");
var V8_VERSION = __webpack_require__(/*! ../internals/environment-v8-version */ "./node_modules/core-js/internals/environment-v8-version.js");

var IS_CONCAT_SPREADABLE = wellKnownSymbol('isConcatSpreadable');

// We can't use this feature detection in V8 since it causes
// deoptimization and serious performance degradation
// https://github.com/zloirock/core-js/issues/679
var IS_CONCAT_SPREADABLE_SUPPORT = V8_VERSION >= 51 || !fails(function () {
  var array = [];
  array[IS_CONCAT_SPREADABLE] = false;
  return array.concat()[0] !== array;
});

var isConcatSpreadable = function (O) {
  if (!isObject(O)) return false;
  var spreadable = O[IS_CONCAT_SPREADABLE];
  return spreadable !== undefined ? !!spreadable : isArray(O);
};

var FORCED = !IS_CONCAT_SPREADABLE_SUPPORT || !arrayMethodHasSpeciesSupport('concat');

// `Array.prototype.concat` method
// https://tc39.es/ecma262/#sec-array.prototype.concat
// with adding support of @@isConcatSpreadable and @@species
$({ target: 'Array', proto: true, arity: 1, forced: FORCED }, {
  // eslint-disable-next-line no-unused-vars -- required for `.length`
  concat: function concat(arg) {
    var O = toObject(this);
    var A = arraySpeciesCreate(O, 0);
    var n = 0;
    var i, k, length, len, E;
    for (i = -1, length = arguments.length; i < length; i++) {
      E = i === -1 ? O : arguments[i];
      if (isConcatSpreadable(E)) {
        len = lengthOfArrayLike(E);
        doesNotExceedSafeInteger(n + len);
        for (k = 0; k < len; k++, n++) if (k in E) createProperty(A, n, E[k]);
      } else {
        doesNotExceedSafeInteger(n + 1);
        createProperty(A, n++, E);
      }
    }
    A.length = n;
    return A;
  }
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/exceedDes.vue?vue&type=style&index=0&id=0391515f&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/exceedDes.vue?vue&type=style&index=0&id=0391515f&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".name[data-v-0391515f] {\n  margin: 20px 30px 23px;\n  color: #121236;\n  font-weight: bold;\n  font-size: 14px;\n}\n.search-content[data-v-0391515f] {\n  display: flex;\n  align-items: center;\n  margin: 0 30px 0 40px;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.search-content .search-item[data-v-0391515f] {\n  width: 35%;\n  padding: 6px;\n  background: #f6f6f6;\n  border-radius: 6px;\n  color: rgba(0, 0, 0, 0.8);\n}\n.offline-des[data-v-0391515f] {\n  margin: 23px 10px;\n  padding: 10px 23px;\n  border-radius: 10px;\n  background: linear-gradient(180deg, rgba(68, 123, 252, 0) 0%, rgba(68, 123, 252, 0.06) 100%), white;\n  border: 1px solid white;\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);\n  color: #121236;\n  font-size: 14px;\n}\n.offline-content[data-v-0391515f] {\n  margin: 10px 7px 36px;\n  padding-bottom: 20px;\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);\n  border-radius: 10px;\n}\n.offline-content .title[data-v-0391515f] {\n  padding: 13px 21px;\n  background: rgba(68, 123, 252, 0.06);\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: bold;\n  color: #447bfc;\n}\n.offline-content .search-content[data-v-0391515f] {\n  margin: 0 21px 18px;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.offline-content .search-content .search-item[data-v-0391515f] {\n  width: 30%;\n  padding: 6px;\n  background: white;\n  border-radius: 6px;\n  color: rgba(18, 18, 54, 0.5);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/exceedDes.vue?vue&type=style&index=0&id=0391515f&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/exceedDes.vue?vue&type=style&index=0&id=0391515f&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./exceedDes.vue?vue&type=style&index=0&id=0391515f&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/exceedDes.vue?vue&type=style&index=0&id=0391515f&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1ceb5e66", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/views/pollution/detail/exceedDes.vue":
/*!**************************************************!*\
  !*** ./src/views/pollution/detail/exceedDes.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _exceedDes_vue_vue_type_template_id_0391515f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./exceedDes.vue?vue&type=template&id=0391515f&scoped=true& */ "./src/views/pollution/detail/exceedDes.vue?vue&type=template&id=0391515f&scoped=true&");
/* harmony import */ var _exceedDes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exceedDes.vue?vue&type=script&lang=js& */ "./src/views/pollution/detail/exceedDes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _exceedDes_vue_vue_type_style_index_0_id_0391515f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./exceedDes.vue?vue&type=style&index=0&id=0391515f&lang=scss&scoped=true& */ "./src/views/pollution/detail/exceedDes.vue?vue&type=style&index=0&id=0391515f&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _exceedDes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _exceedDes_vue_vue_type_template_id_0391515f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _exceedDes_vue_vue_type_template_id_0391515f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "0391515f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/pollution/detail/exceedDes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/pollution/detail/exceedDes.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./src/views/pollution/detail/exceedDes.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_exceedDes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./exceedDes.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/exceedDes.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_exceedDes_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/pollution/detail/exceedDes.vue?vue&type=style&index=0&id=0391515f&lang=scss&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./src/views/pollution/detail/exceedDes.vue?vue&type=style&index=0&id=0391515f&lang=scss&scoped=true& ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_exceedDes_vue_vue_type_style_index_0_id_0391515f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./exceedDes.vue?vue&type=style&index=0&id=0391515f&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/exceedDes.vue?vue&type=style&index=0&id=0391515f&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_exceedDes_vue_vue_type_style_index_0_id_0391515f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_exceedDes_vue_vue_type_style_index_0_id_0391515f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_exceedDes_vue_vue_type_style_index_0_id_0391515f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_exceedDes_vue_vue_type_style_index_0_id_0391515f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/pollution/detail/exceedDes.vue?vue&type=template&id=0391515f&scoped=true&":
/*!*********************************************************************************************!*\
  !*** ./src/views/pollution/detail/exceedDes.vue?vue&type=template&id=0391515f&scoped=true& ***!
  \*********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_exceedDes_vue_vue_type_template_id_0391515f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./exceedDes.vue?vue&type=template&id=0391515f&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/exceedDes.vue?vue&type=template&id=0391515f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_exceedDes_vue_vue_type_template_id_0391515f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_exceedDes_vue_vue_type_template_id_0391515f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvZXhjZWVkRGVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9leGNlZWREZXMudnVlP2EzMWQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9kb2VzLW5vdC1leGNlZWQtc2FmZS1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuY29uY2F0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS1jb2xsZWN0aW9ucy5mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9leGNlZWREZXMudnVlP2VjYTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvZXhjZWVkRGVzLnZ1ZT83ZWM5Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2V4Y2VlZERlcy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvZXhjZWVkRGVzLnZ1ZT8xZGZhIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2V4Y2VlZERlcy52dWU/NDYwZCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9leGNlZWREZXMudnVlP2JjMmIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LEdBQUcsaUNBQWlDLHNCQUFzQix1QkFBdUIsd0JBQXdCLHdHQUF3Ryw0QkFBNEIsaURBQWlELG1CQUFtQixvQkFBb0IsR0FBRyxxQ0FBcUMsMEJBQTBCLHlCQUF5QixpREFBaUQsd0JBQXdCLEdBQUcsNENBQTRDLHVCQUF1Qix5Q0FBeUMsd0JBQXdCLG9CQUFvQixzQkFBc0IsbUJBQW1CLEdBQUcscURBQXFELHdCQUF3QixpQ0FBaUMsb0JBQW9CLEdBQUcsa0VBQWtFLGVBQWUsaUJBQWlCLHNCQUFzQix1QkFBdUIsaUNBQWlDLEdBQUc7QUFDbjdDO0FBQ0E7Ozs7Ozs7Ozs7OztBQ05BOztBQUVBO0FBQ0EsY0FBYyxtQkFBTyxDQUFDLDJ6QkFBNmQ7QUFDbmY7QUFDQSw0Q0FBNEMsUUFBUztBQUNyRDtBQUNBO0FBQ0EsVUFBVSxtQkFBTyxDQUFDLGdJQUFtRTtBQUNyRiw4Q0FBOEMscUNBQXFDO0FBQ25GO0FBQ0EsR0FBRyxLQUFVLEVBQUUsRTs7Ozs7Ozs7Ozs7O0FDWGY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFvRztBQUN2QztBQUNMO0FBQ3NDOzs7QUFHOUY7QUFDZ0c7QUFDaEcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsK0VBQU07QUFDUixFQUFFLGdHQUFNO0FBQ1IsRUFBRSx5R0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBOFMsQ0FBZ0IsMFVBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBbFU7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvOTMuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IGNhbGMoMTAwdmgpO292ZXJmbG93LXk6IGF1dG87YmFja2dyb3VuZDogI2ZmZlwiPlxuICAgIDx2YW4tbmF2LWJhclxuICAgICAgICB0aXRsZT1cIui2heagh+ivpuaDhVwiXG4gICAgICAgIGxlZnQtYXJyb3dcbiAgICAgICAgQGNsaWNrLWxlZnQ9XCIkcm91dGVyLmdvKC0xKVwiXG4gICAgPlxuICAgIDwvdmFuLW5hdi1iYXI+XG5cbiAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPlxuICAgICAge3tuYW1lfX1cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtY29udGVudCBmc1wiPlxuICAgICAg5qyh5pWwXG4gICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLWl0ZW0gZnNcIiBAY2xpY2s9XCJ0eXBlUG9wPSB0cnVlXCI+XG4gICAgICAgIDx2YW4taWNvbiBuYW1lPVwibm90ZXMtb1wiLz5cbiAgICAgICAge3t0eXBlfX1cbiAgICAgICAgPHZhbi1pY29uIG5hbWU9XCJhcnJvdy1kb3duXCIvPlxuICAgICAgPC9kaXY+XG4gICAgICAtLVxuICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1pdGVtIGZzXCIgQGNsaWNrPVwiZW5kT3Blbih0eXBlKVwiPlxuICAgICAgICA8dmFuLWljb24gbmFtZT1cIm5vdGVzLW9cIi8+XG4gICAgICAgIHt7ZW5kVGltZX19XG4gICAgICAgIDx2YW4taWNvbiBuYW1lPVwiYXJyb3ctZG93blwiLz5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiByZWY9XCJiYXNpblJlZlwiIHN0eWxlPVwiaGVpZ2h0OiAyMDBweDt3aWR0aDo5MCU7bWFyZ2luOiAwIGF1dG9cIi8+XG5cbiAgICA8ZGl2IGNsYXNzPVwib2ZmbGluZS1jb250ZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGl0bGVcIj5cbiAgICAgICAg6LaF5qCH6K+m5oOFXG4gICAgICA8L2Rpdj5cblxuICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUtd3JhcHBlclwiIHdpZHRoPVwiMTAwJVwiPlxuICAgICAgICA8dGhlYWQ+XG4gICAgICAgIDx0ciBjbGFzcz1cInRhYmxlLWhlYWRlclwiPlxuICAgICAgICAgIDx0aD7otoXmoIfml7bpl7Q8L3RoPlxuICAgICAgICAgIDx0aD7otoXmoIflm6DlrZA8L3RoPlxuICAgICAgICAgIDx0aD7mlbDlgLw8L3RoPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+XG4gICAgICAgIDx0ciB2LWZvcj1cIml0ZW0gaW4gY2JMaXN0XCI+XHJcbiAgICAgICAgICA8dGQ+e3tpdGVtLllDUlF9fTwvdGQ+XHJcbiAgICAgICAgICA8dGQ+e3tpdGVtLkpDWVpNQ319PC90ZD5cclxuICAgICAgICAgIDx0ZD57e2l0ZW0uRlp9fTwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuXG4gICAgPCEtLeexu+Wei+mAieaLqS0tPlxuICAgIDx2YW4tcG9wdXAgdi1tb2RlbD1cInR5cGVQb3BcIiBwb3NpdGlvbj1cImJvdHRvbVwiPlxuICAgICAgPHZhbi1waWNrZXJcbiAgICAgICAgICB0aXRsZT1cIuaVsOaNruexu+Wei1wiXG4gICAgICAgICAgc2hvdy10b29sYmFyXG4gICAgICAgICAgOmNvbHVtbnM9XCJjb2x1bW5zXCJcbiAgICAgICAgICBAY2FuY2VsPVwidHlwZVBvcD1mYWxzZVwiXG4gICAgICAgICAgQGNvbmZpcm09XCJvbkNvbmZpcm1UeXBlXCJcbiAgICAgIC8+XG4gICAgPC92YW4tcG9wdXA+XG5cbiAgICA8IS0t5pe26Ze0LS0+XG4gICAgPHZhbi1wb3B1cCB2LW1vZGVsPVwiZW5kUG9wXCIgcG9zaXRpb249XCJib3R0b21cIj5cbiAgICAgIDx2YW4tZGF0ZXRpbWUtcGlja2VyIHYtbW9kZWw9XCJjdXJyZW50RGF0ZVwiXG4gICAgICAgICAgdHlwZT1cImRhdGVcIlxuICAgICAgICAgIHRpdGxlPVwi6YCJ5oup5pel5pyfXCJcbiAgICAgICAgICBAY29uZmlybT1cIm9uQ29uZmlybUVuZFRpbWVcIlxuICAgICAgICAgIEBjYW5jZWw9XCJlbmRQb3A9ZmFsc2VcIlxuICAgICAgLz5cbiAgICA8L3Zhbi1wb3B1cD5cblx0XHQ8IS0t5pe26Ze0LS0+XHJcblx0XHQ8dmFuLXBvcHVwIHYtbW9kZWw9XCJlbmRQb3AyXCIgcG9zaXRpb249XCJib3R0b21cIj5cclxuXHRcdCAgPHZhbi1waWNrZXJcclxuXHRcdCAgICAgICAgICBzaG93LXRvb2xiYXIgOmNvbHVtbnM9XCJ5ZWFyQ29sdW1uc1wiXHJcblx0XHQgICAgICAgICAgdGl0bGU9XCLpgInmi6nlubRcIiA6ZGVmYXVsdC1pbmRleD1cInllYXJTZWxlY3RcIlxyXG5cdFx0ICAgICAgICAgIEBjb25maXJtPVwib25Db25maXJtRW5kVGltZTJcIlxyXG5cdFx0ICAgICAgICAgIEBjYW5jZWw9XCJlbmRQb3AyPWZhbHNlXCJcclxuXHRcdCAgLz5cclxuXHRcdDwvdmFuLXBvcHVwPlxuXHRcdDwhLS0gPHZhbi1wb3B1cCB2LW1vZGVsPVwiZW5kUG9wMlwiIHBvc2l0aW9uPVwiYm90dG9tXCI+XG5cdFx0ICA8dmFuLWRhdGV0aW1lLXBpY2tlciB2LW1vZGVsPVwiY3VycmVudERhdGVcIlxuXHRcdCAgICAgIHR5cGU9XCJ5ZWFyLW1vbnRoXCJcblx0XHQgICAgICB0aXRsZT1cIumAieaLqeW5tOaciFwiXG5cdFx0ICAgICAgQGNvbmZpcm09XCJvbkNvbmZpcm1FbmRUaW1lXCJcblx0XHQgICAgICBAY2FuY2VsPVwiZW5kUG9wMj1mYWxzZVwiXG5cdFx0ICAvPlxuXHRcdDwvdmFuLXBvcHVwPiAtLT5cblxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG4gIGltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XG4gIGltcG9ydCAqIGFzIGVjaGFydHMgZnJvbSAnZWNoYXJ0cyc7XG5pbXBvcnQge1xuXHRcdFx0d2F0ZXJPdmVyU3RhdCxnYXNPdmVyU3RhdCxcblx0XHRcdHdhdGVyT3ZlckRldGFpbCxnYXNPdmVyRGV0YWlsLFxyXG5cdFx0XHRnYXNFeGNlZWRTdGF0LGdhc0V4Y2VlZFxuXHRcdH0gZnJvbSAnQC9hcGkvcG9sbHV0aW9uX3NvdXJjZSc7XG4gIGV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiBcImV4Y2VlZERlc1wiLFxuICAgIGRhdGEoKSB7XG4gICAgICByZXR1cm4ge1xuXHRcdFx0XHRjdXJyZW50RGF0ZTpuZXcgRGF0ZSgpLFxuICAgICAgICBjb2x1bW5zOiBbJ+aXpeaVsOaNricsJ+aciOaVsOaNriddLFxyXG5cdFx0XHRcdHllYXJTZWxlY3Q6bnVsbCxcclxuXHRcdFx0XHR5ZWFyQ29sdW1uczpbXSxcbiAgICAgICAgdHlwZVBvcDogZmFsc2UsXG4gICAgICAgIHR5cGU6ICfml6XmlbDmja4nLFxuICAgICAgICBlbmRQb3A6IGZhbHNlLFxuICAgICAgICBlbmRQb3AyOiBmYWxzZSxcclxuICAgICAgICBlbmRUaW1lOiBkYXlqcyhuZXcgRGF0ZSgpKS5mb3JtYXQoJ1lZWVktTU0nKSxcblx0XHRcdFx0ZGV2aWNlSWQ6XCJcIixcblx0XHRcdFx0bmFtZTpcIlwiLFxuXHRcdFx0XHRmc2ZxdHlwZTonJyxcblx0XHRcdFx0Y2hhcnRkYXRhOltdLFxuXHRcdFx0XHRjYkxpc3Q6W11cbiAgICAgIH1cbiAgICB9LFxuICAgIG1vdW50ZWQoKSB7XG5cdFx0XHR0aGlzLm5hbWUgPSB0aGlzLiRyb3V0ZS5xdWVyeS5uYW1lO1xuXHRcdFx0dGhpcy5mc2ZxdHlwZSA9IHRoaXMuJHJvdXRlLnF1ZXJ5LnR5cGU7XG5cdFx0XHR0aGlzLmRldmljZUlkID0gdGhpcy4kcm91dGUucXVlcnkuZGV2aWNlSWQ7XG4gICAgICBpZiAoIXRoaXMuYmFzaW5SZWYpIHtcbiAgICAgICAgdGhpcy5iYXNpblJlZiA9IGVjaGFydHMuaW5pdCh0aGlzLiRyZWZzLmJhc2luUmVmKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5pbml0Q2hhcnQodGhpcy5iYXNpblJlZilcbiAgICAgICAgfSlcbiAgICAgIH1cclxuXHRcdFx0dGhpcy55ZWFyRGF0YSgpO1xuICAgIH0sXG4gICAgbWV0aG9kczoge1xyXG5cdFx0XHR5ZWFyRGF0YSgpIHtcdC8v5bm05pWw5o2uXHJcblx0XHRcdFx0XHQvLyDojrflj5bpu5jorqTmmL7npLrnmoTml7bpl7RcclxuXHRcdFx0XHR2YXIgbm93VGltZSA9IG5ldyBEYXRlKCk7XHJcblx0XHRcdFx0bGV0IHllYXIgPSBub3dUaW1lLmdldEZ1bGxZZWFyKCk7XHJcblx0XHRcdFx0bGV0IG1vbnRoID0gbm93VGltZS5nZXRNb250aCgpO1xyXG5cdFx0XHRcdGxldCBkYXkgPSBub3dUaW1lLmdldERhdGUoKTtcclxuXHRcdFx0XHQvLyDlvqrnjq/mlbDnu4Qg5aGr5YaZ5pyA5bCP5pe26Ze05ZKM5pyA5aSn5pe26Ze06IyD5Zu0XHJcblx0XHRcdFx0Zm9yIChsZXQgaSA9IDIwMTA7IGkgPCAyMDk5OyBpKyspIHtcclxuXHRcdFx0XHRcdFx0dGhpcy55ZWFyQ29sdW1ucy5wdXNoKGkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHQvLyDmoLzlvI/ljJbml7bpl7TlubbmiKrlj5ZcclxuXHRcdFx0XHR2YXIgeWVhcnMgPSB0aGlzLmZvcm1hdERhdGUoIG5ldyBEYXRlKHllYXIsIG1vbnRoICxkYXkpKTtcclxuXHRcdFx0XHR2YXIgWWVhciA9IHllYXJzLnNsaWNlKDAsNCk7XHJcblx0XHRcdFx0Ly8g5bCG5oiq5Y+W55qE5bm05Lu96LWL5YC857uZ57uR5a6a5YC8IOeUqOS6jueCueWHu+W8ueWHuuaXpeacn+eql+WPo+WQjuaYvuekuuW9k+WJjeeahOaXtumXtFxyXG5cdFx0XHRcdHRoaXMueWVhclNlbGVjdCA9IHRoaXMueWVhckNvbHVtbnMuaW5kZXhPZihOdW1iZXIoWWVhcikpO1xyXG5cdFx0XHR9LFx0XHRcclxuXHRcdFx0Ly/ml6XmnJ/moLzlvI9cclxuXHRcdFx0Zm9ybWF0RGF0ZShkYXRlKSB7XHJcblx0XHRcdFx0cmV0dXJuIGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHtkYXRlLmdldE1vbnRoKCkrMX0tJHtkYXRlLmdldERhdGUoKX1gO1xyXG5cdFx0XHR9LFxuICAgICAgb25Db25maXJtVHlwZSh2YWx1ZSkge1xuXHRcdFx0XHR0aGlzLnR5cGUgPSB2YWx1ZTtcblx0XHRcdFx0aWYodmFsdWU9PVwi5pel5pWw5o2uXCIpe1xyXG5cdFx0XHRcdFx0dGhpcy5lbmRUaW1lID0gZGF5anModGhpcy5lbmRUaW1lKS5mb3JtYXQoJ1lZWVktTU0nKTtcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHRoaXMuZW5kVGltZSA9IGRheWpzKHRoaXMuZW5kVGltZSkuZm9ybWF0KCdZWVlZJylcclxuXHRcdFx0XHR9XG4gICAgICAgIHRoaXMudHlwZVBvcCA9IGZhbHNlO1xyXG5cdFx0XHRcdHRoaXMuaW5pdENoYXJ0KHRoaXMuYmFzaW5SZWYpXG4gICAgICB9LFxuICAgICAgb25Db25maXJtRW5kVGltZSh2YWx1ZSkge1xuXHRcdFx0XHR0aGlzLmVuZFRpbWUgPSBkYXlqcyh2YWx1ZSkuZm9ybWF0KCdZWVlZLU1NJylcclxuXHRcdFx0XHR0aGlzLmVuZFBvcCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmluaXRDaGFydCh0aGlzLmJhc2luUmVmKVxuICAgICAgfSxcclxuXHRcdFx0b25Db25maXJtRW5kVGltZTIodmFsdWUpe1xyXG5cdFx0XHRcdHRoaXMuZW5kVGltZSA9IHZhbHVlO1xyXG5cdFx0XHRcdHRoaXMuZW5kUG9wMj0gZmFsc2U7XHJcblx0XHRcdH0sXG5cdFx0XHRlbmRPcGVuKGZsYWcpe1xuXHRcdFx0XHRpZihmbGFnPT1cIuaXpeaVsOaNrlwiKXtcblx0XHRcdFx0XHR0aGlzLmVuZFBvcCA9IHRydWU7XG5cdFx0XHRcdH1lbHNle1xuXHRcdFx0XHRcdHRoaXMuZW5kUG9wMj0gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcbiAgICAgIGluaXRDaGFydChjaGFydEluc3RhbmNlKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IHtcbiAgICAgICAgICBjb2xvcjogWycjMDZCNUY2J10sXG4gICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGdyaWQ6IHtcbiAgICAgICAgICAgIHRvcDogJzE1JScsXG4gICAgICAgICAgICBsZWZ0OiAnOCUnLFxuICAgICAgICAgICAgcmlnaHQ6ICc1JScsXG4gICAgICAgICAgICBib3R0b206ICcyMCUnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdG9vbHRpcDoge1xuICAgICAgICAgICAgdHJpZ2dlcjogJ2F4aXMnXG4gICAgICAgICAgfSxcbiAgICAgICAgICB4QXhpczoge1xuICAgICAgICAgICAgdHlwZTogJ2NhdGVnb3J5JyxcbiAgICAgICAgICAgIGF4aXNUaWNrOiB7XG4gICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF4aXNMaW5lOiB7XG4gICAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGF4aXNMYWJlbDoge1xuICAgICAgICAgICAgICBjb2xvcjogJyNCMEI3QzInLFxuICAgICAgICAgICAgICBmb250U2l6ZTogMTIsXG4gICAgICAgICAgICAgIG1hcmdpbjogMjAsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYm91bmRhcnlHYXA6IGZhbHNlLFxuICAgICAgICAgICAgZGF0YTogW11cbiAgICAgICAgICB9LFxuICAgICAgICAgIHlBeGlzOiB7XG4gICAgICAgICAgICB0eXBlOiAndmFsdWUnLFxuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBzcGxpdExpbmU6IHtcbiAgICAgICAgICAgICAgbGluZVN0eWxlOiB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ3NvbGlkJyxcbiAgICAgICAgICAgICAgICBjb2xvcjogJyNFNEU5RjInXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXhpc0xhYmVsOiB7XG4gICAgICAgICAgICAgIGNvbG9yOiAnI0IwQjdDMicsXG4gICAgICAgICAgICAgIGZvbnRTaXplOiAxMixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBzZXJpZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogJ+asoeaVsCcsXG4gICAgICAgICAgICAgIGRhdGE6IFsyMCwgMzIsIDkxLCAzNCwgMjksIDMwXSxcbiAgICAgICAgICAgICAgdHlwZTogJ2JhcicsXG4gICAgICAgICAgICAgIGJhcldpZHRoOiAnMTAnLFxuICAgICAgICAgICAgICBpdGVtU3R5bGU6IHtcbiAgICAgICAgICAgICAgICBub3JtYWw6IHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBuZXcgZWNoYXJ0cy5ncmFwaGljLkxpbmVhckdyYWRpZW50KDAsIDAsIDAsIDEsIFt7XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICcjNEY4QUZGJyAvLyAwJSDlpITnmoTpopzoibJcbiAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0OiAxLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyM0QTVDRkYnIC8vIDEwMCUg5aSE55qE6aKc6ImyXG4gICAgICAgICAgICAgICAgICB9XSwgZmFsc2UpLFxuICAgICAgICAgICAgICAgICAgYmFyQm9yZGVyUmFkaXVzOiBbMzAsIDMwLCAwLCAwXSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9O1xuXHRcdFx0XHRsZXQgaW5mbz17XHJcblx0XHRcdFx0XHRiZWdpbjp0aGlzLmVuZFRpbWUsXHJcblx0XHRcdFx0XHRlbmQ6dGhpcy5lbmRUaW1lLFxyXG5cdFx0XHRcdFx0c2JpZDogdGhpcy4kcm91dGUucXVlcnkuc2JpZCxcclxuXHRcdFx0XHRcdHR5cGU6dGhpcy50eXBlPT0n5pel5pWw5o2uJz8nZGF5JzonbW9udGgnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGdhc0V4Y2VlZChpbmZvKS50aGVuKHJlcz0+e1xyXG5cdFx0XHRcdFx0bGV0IHJkYXRhID0gcmVzLmRhdGE7XHJcblx0XHRcdFx0XHR0aGlzLmNiTGlzdCA9IHJkYXRhO1xyXG5cdFx0XHRcdH0pXHJcblx0XHRcdFx0Z2FzRXhjZWVkU3RhdChpbmZvKS50aGVuKHJlcz0+e1xyXG5cdFx0XHRcdFx0bGV0IHhBcnIgPSBbXSxzQXJyPVtdLHNBcnIyPVtdO1xyXG5cdFx0XHRcdFx0bGV0IHJkYXRhID0gcmVzLmRhdGE7XHJcblx0XHRcdFx0XHQvLyB0aGlzLmNiTGlzdCA9IHJkYXRhLmRhdGE7XHJcblx0XHRcdFx0XHR0aGlzLmNoYXJ0ZGF0YSA9IHJkYXRhLnN0YXQ7XHJcblx0XHRcdFx0XHRpZih0aGlzLmNoYXJ0ZGF0YS5sZW5ndGg+MCl7XHJcblx0XHRcdFx0XHRcdHRoaXMuY2hhcnRkYXRhLmZvckVhY2goaXRlbT0+e1xyXG5cdFx0XHRcdFx0XHRcdHhBcnIucHVzaChpdGVtLk5BTUUuc2xpY2UoNSkpO1xyXG5cdFx0XHRcdFx0XHRcdHNBcnIucHVzaChpdGVtLk5VTSlcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdG9wdGlvbi5zZXJpZXNbMF0uZGF0YSA9IHNBcnI7XHJcblx0XHRcdFx0XHRvcHRpb24ueEF4aXMuZGF0YSA9IHhBcnI7XHJcblx0XHRcdFx0XHRjaGFydEluc3RhbmNlLnNldE9wdGlvbihvcHRpb24pXHJcblx0XHRcdFx0fSlcblx0XHRcdFx0Ly8gaWYodGhpcy5mc2ZxdHlwZT09XCLlup/msLRcIil7XG5cdFx0XHRcdC8vIFx0d2F0ZXJPdmVyRGV0YWlsKGluZm8pLnRoZW4ocmVzPT57XG5cdFx0XHRcdC8vIFx0XHRsZXQgeEFyciA9IFtdLHNBcnI9W10sc0FycjI9W107XG5cdFx0XHRcdC8vIFx0XHRsZXQgcmRhdGEgPSByZXMuZGF0YTtcblx0XHRcdFx0Ly8gXHRcdHRoaXMuY2JMaXN0ID0gcmRhdGEuZGF0YTtcblx0XHRcdFx0Ly8gXHRcdHRoaXMuY2hhcnRkYXRhID0gcmRhdGEuc3RhdDtcblx0XHRcdFx0Ly8gXHRcdGlmKHRoaXMuY2hhcnRkYXRhLmxlbmd0aD4wKXtcblx0XHRcdFx0Ly8gXHRcdFx0dGhpcy5jaGFydGRhdGEuZm9yRWFjaChpdGVtPT57XG5cdFx0XHRcdC8vIFx0XHRcdFx0eEFyci5wdXNoKGl0ZW0ubmFtZSk7XG5cdFx0XHRcdC8vIFx0XHRcdFx0c0Fyci5wdXNoKGl0ZW0udmFsdWUpXG5cdFx0XHRcdC8vIFx0XHRcdH0pXG5cdFx0XHRcdC8vIFx0XHR9XG5cdFx0XHRcdC8vIFx0XHRvcHRpb24uc2VyaWVzWzBdLmRhdGEgPSBzQXJyO1xuXHRcdFx0XHQvLyBcdFx0b3B0aW9uLnhBeGlzLmRhdGEgPSB4QXJyO1xuXHRcdFx0XHQvLyBcdFx0Y2hhcnRJbnN0YW5jZS5zZXRPcHRpb24ob3B0aW9uKVxuXHRcdFx0XHQvLyBcdH0pXG5cdFx0XHRcdC8vIH1lbHNle1xuXHRcdFx0XHQvLyBcdGdhc092ZXJEZXRhaWwoaW5mbykudGhlbihyZXM9Pntcblx0XHRcdFx0Ly8gXHRcdGxldCB4QXJyID0gW10sc0Fycj1bXSxzQXJyMj1bXTtcblx0XHRcdFx0Ly8gXHRcdGxldCByZGF0YSA9IHJlcy5kYXRhO1xuXHRcdFx0XHQvLyBcdFx0dGhpcy5jYkxpc3QgPSByZGF0YS5kYXRhO1xuXHRcdFx0XHQvLyBcdFx0dGhpcy5jaGFydGRhdGEgPSByZGF0YS5zdGF0O1xuXHRcdFx0XHQvLyBcdFx0aWYodGhpcy5jaGFydGRhdGEubGVuZ3RoPjApe1xuXHRcdFx0XHQvLyBcdFx0XHR0aGlzLmNoYXJ0ZGF0YS5mb3JFYWNoKGl0ZW09Pntcblx0XHRcdFx0Ly8gXHRcdFx0XHR4QXJyLnB1c2goaXRlbS5uYW1lKTtcblx0XHRcdFx0Ly8gXHRcdFx0XHRzQXJyLnB1c2goaXRlbS52YWx1ZSlcblx0XHRcdFx0Ly8gXHRcdFx0fSlcblx0XHRcdFx0Ly8gXHRcdH1cblx0XHRcdFx0Ly8gXHRcdG9wdGlvbi5zZXJpZXNbMF0uZGF0YSA9IHNBcnI7XG5cdFx0XHRcdC8vIFx0XHRvcHRpb24ueEF4aXMuZGF0YSA9IHhBcnI7XG5cdFx0XHRcdC8vIFx0XHRjaGFydEluc3RhbmNlLnNldE9wdGlvbihvcHRpb24pXG5cdFx0XHRcdC8vIFx0fSlcblx0XHRcdFx0Ly8gfVxuICAgICAgICAvLyBjaGFydEluc3RhbmNlLnNldE9wdGlvbihvcHRpb24pXG4gICAgICB9XG4gICAgfVxuICB9XG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxuICAubmFtZSB7XG4gICAgbWFyZ2luOiAyMHB4IDMwcHggMjNweDtcbiAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAxKTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE0cHg7XG4gIH1cblxuICAuc2VhcmNoLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDAgMzBweCAwIDQwcHg7XG4gICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcbiAgICBmb250LXNpemU6IDEycHg7XG5cbiAgICAuc2VhcmNoLWl0ZW0ge1xuICAgICAgd2lkdGg6IDM1JTtcbiAgICAgIHBhZGRpbmc6IDZweDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ2LCAyNDYsIDI0NiwgMSk7XG4gICAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xuICAgIH1cbiAgfVxuXG5cbiAgLm9mZmxpbmUtZGVzIHtcbiAgICBtYXJnaW46IDIzcHggMTBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDIzcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDY4LCAxMjMsIDI1MiwgMCkgMCUsIHJnYmEoNjgsIDEyMywgMjUyLCAwLjA2KSAxMDAlKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xuICAgIGJveC1zaGFkb3c6IDBweCA0cHggMjBweCByZ2JhKDAsIDAsIDAsIDAuMDUpO1xuICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDEpO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgfVxuXG4gIC5vZmZsaW5lLWNvbnRlbnQge1xuICAgIG1hcmdpbjogMTBweCA3cHggMzZweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuXG4gICAgLnRpdGxlIHtcbiAgICAgIHBhZGRpbmc6IDEzcHggMjFweDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoNjgsIDEyMywgMjUyLCAwLjA2KTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgIGNvbG9yOiByZ2JhKDY4LCAxMjMsIDI1MiwgMSk7XG4gICAgfVxuXG4gICAgLnNlYXJjaC1jb250ZW50IHtcbiAgICAgIG1hcmdpbjogMCAyMXB4IDE4cHg7XG4gICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuXG4gICAgICAuc2VhcmNoLWl0ZW0ge1xuICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICBwYWRkaW5nOiA2cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbjwvc3R5bGU+XG4iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgIGhlaWdodDogXCJjYWxjKDEwMHZoKVwiLFxuICAgICAgICBcIm92ZXJmbG93LXlcIjogXCJhdXRvXCIsXG4gICAgICAgIGJhY2tncm91bmQ6IFwiI2ZmZlwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwidmFuLW5hdi1iYXJcIiwge1xuICAgICAgICBhdHRyczogeyB0aXRsZTogXCLotoXmoIfor6bmg4VcIiwgXCJsZWZ0LWFycm93XCI6IFwiXCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcImNsaWNrLWxlZnRcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLmdvKC0xKVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmFtZVwiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5uYW1lKSArIFwiIFwiKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzZWFyY2gtY29udGVudCBmc1wiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiIOasoeaVsCBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2VhcmNoLWl0ZW0gZnNcIixcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnR5cGVQb3AgPSB0cnVlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJ2YW4taWNvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwibm90ZXMtb1wiIH0gfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIgKyBfdm0uX3MoX3ZtLnR5cGUpICsgXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJ2YW4taWNvblwiLCB7IGF0dHJzOiB7IG5hbWU6IFwiYXJyb3ctZG93blwiIH0gfSksXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgICksXG4gICAgICAgIF92bS5fdihcIiAtLSBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2VhcmNoLWl0ZW0gZnNcIixcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5lbmRPcGVuKF92bS50eXBlKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwidmFuLWljb25cIiwgeyBhdHRyczogeyBuYW1lOiBcIm5vdGVzLW9cIiB9IH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5lbmRUaW1lKSArIFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidmFuLWljb25cIiwgeyBhdHRyczogeyBuYW1lOiBcImFycm93LWRvd25cIiB9IH0pLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgXSksXG4gICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgIHJlZjogXCJiYXNpblJlZlwiLFxuICAgICAgICBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMjAwcHhcIiwgd2lkdGg6IFwiOTAlXCIsIG1hcmdpbjogXCIwIGF1dG9cIiB9LFxuICAgICAgfSksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm9mZmxpbmUtY29udGVudFwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZVwiIH0sIFtfdm0uX3YoXCIg6LaF5qCH6K+m5oOFIFwiKV0pLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcInRhYmxlXCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0YWJsZS13cmFwcGVyXCIsIGF0dHJzOiB7IHdpZHRoOiBcIjEwMCVcIiB9IH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5jYkxpc3QsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidHJcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLllDUlEpKV0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLkpDWVpNQykpXSksXG4gICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uRlopKV0pLFxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXG4gICAgICAgIFwidmFuLXBvcHVwXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBwb3NpdGlvbjogXCJib3R0b21cIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnR5cGVQb3AsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICBfdm0udHlwZVBvcCA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwidHlwZVBvcFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInZhbi1waWNrZXJcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgdGl0bGU6IFwi5pWw5o2u57G75Z6LXCIsXG4gICAgICAgICAgICAgIFwic2hvdy10b29sYmFyXCI6IFwiXCIsXG4gICAgICAgICAgICAgIGNvbHVtbnM6IF92bS5jb2x1bW5zLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNhbmNlbDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS50eXBlUG9wID0gZmFsc2VcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgY29uZmlybTogX3ZtLm9uQ29uZmlybVR5cGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwidmFuLXBvcHVwXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBwb3NpdGlvbjogXCJib3R0b21cIiB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmVuZFBvcCxcbiAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5lbmRQb3AgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImVuZFBvcFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInZhbi1kYXRldGltZS1waWNrZXJcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJkYXRlXCIsIHRpdGxlOiBcIumAieaLqeaXpeacn1wiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjb25maXJtOiBfdm0ub25Db25maXJtRW5kVGltZSxcbiAgICAgICAgICAgICAgY2FuY2VsOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmVuZFBvcCA9IGZhbHNlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5jdXJyZW50RGF0ZSxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uY3VycmVudERhdGUgPSAkJHZcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjdXJyZW50RGF0ZVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcInZhbi1wb3B1cFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgcG9zaXRpb246IFwiYm90dG9tXCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5lbmRQb3AyLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLmVuZFBvcDIgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImVuZFBvcDJcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ2YW4tcGlja2VyXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIFwic2hvdy10b29sYmFyXCI6IFwiXCIsXG4gICAgICAgICAgICAgIGNvbHVtbnM6IF92bS55ZWFyQ29sdW1ucyxcbiAgICAgICAgICAgICAgdGl0bGU6IFwi6YCJ5oup5bm0XCIsXG4gICAgICAgICAgICAgIFwiZGVmYXVsdC1pbmRleFwiOiBfdm0ueWVhclNlbGVjdCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjb25maXJtOiBfdm0ub25Db25maXJtRW5kVGltZTIsXG4gICAgICAgICAgICAgIGNhbmNlbDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5lbmRQb3AyID0gZmFsc2VcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInRoZWFkXCIsIFtcbiAgICAgIF9jKFwidHJcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZS1oZWFkZXJcIiB9LCBbXG4gICAgICAgIF9jKFwidGhcIiwgW192bS5fdihcIui2heagh+aXtumXtFwiKV0pLFxuICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLotoXmoIflm6DlrZBcIildKSxcbiAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi5pWw5YC8XCIpXSksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIndXNlIHN0cmljdCc7XG52YXIgJGZvckVhY2ggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktaXRlcmF0aW9uJykuZm9yRWFjaDtcbnZhciBhcnJheU1ldGhvZElzU3RyaWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1pcy1zdHJpY3QnKTtcblxudmFyIFNUUklDVF9NRVRIT0QgPSBhcnJheU1ldGhvZElzU3RyaWN0KCdmb3JFYWNoJyk7XG5cbi8vIGBBcnJheS5wcm90b3R5cGUuZm9yRWFjaGAgbWV0aG9kIGltcGxlbWVudGF0aW9uXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5mb3JlYWNoXG5tb2R1bGUuZXhwb3J0cyA9ICFTVFJJQ1RfTUVUSE9EID8gZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qICwgdGhpc0FyZyAqLykge1xuICByZXR1cm4gJGZvckVhY2godGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVzL25vLWFycmF5LXByb3RvdHlwZS1mb3JlYWNoIC0tIHNhZmVcbn0gOiBbXS5mb3JFYWNoO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRUeXBlRXJyb3IgPSBUeXBlRXJyb3I7XG52YXIgTUFYX1NBRkVfSU5URUdFUiA9IDB4MUZGRkZGRkZGRkZGRkY7IC8vIDIgKiogNTMgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID4gTUFYX1NBRkVfSU5URUdFUikgdGhyb3cgJFR5cGVFcnJvcignTWF4aW11bSBhbGxvd2VkIGluZGV4IGV4Y2VlZGVkJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9leHBvcnQnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xudmFyIGlzQXJyYXkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtYXJyYXknKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1vYmplY3QnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy90by1vYmplY3QnKTtcbnZhciBsZW5ndGhPZkFycmF5TGlrZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9sZW5ndGgtb2YtYXJyYXktbGlrZScpO1xudmFyIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb2VzLW5vdC1leGNlZWQtc2FmZS1pbnRlZ2VyJyk7XG52YXIgY3JlYXRlUHJvcGVydHkgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvY3JlYXRlLXByb3BlcnR5Jyk7XG52YXIgYXJyYXlTcGVjaWVzQ3JlYXRlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xudmFyIHdlbGxLbm93blN5bWJvbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy93ZWxsLWtub3duLXN5bWJvbCcpO1xudmFyIFY4X1ZFUlNJT04gPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZW52aXJvbm1lbnQtdjgtdmVyc2lvbicpO1xuXG52YXIgSVNfQ09OQ0FUX1NQUkVBREFCTEUgPSB3ZWxsS25vd25TeW1ib2woJ2lzQ29uY2F0U3ByZWFkYWJsZScpO1xuXG4vLyBXZSBjYW4ndCB1c2UgdGhpcyBmZWF0dXJlIGRldGVjdGlvbiBpbiBWOCBzaW5jZSBpdCBjYXVzZXNcbi8vIGRlb3B0aW1pemF0aW9uIGFuZCBzZXJpb3VzIHBlcmZvcm1hbmNlIGRlZ3JhZGF0aW9uXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvNjc5XG52YXIgSVNfQ09OQ0FUX1NQUkVBREFCTEVfU1VQUE9SVCA9IFY4X1ZFUlNJT04gPj0gNTEgfHwgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIGFycmF5ID0gW107XG4gIGFycmF5W0lTX0NPTkNBVF9TUFJFQURBQkxFXSA9IGZhbHNlO1xuICByZXR1cm4gYXJyYXkuY29uY2F0KClbMF0gIT09IGFycmF5O1xufSk7XG5cbnZhciBpc0NvbmNhdFNwcmVhZGFibGUgPSBmdW5jdGlvbiAoTykge1xuICBpZiAoIWlzT2JqZWN0KE8pKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzcHJlYWRhYmxlID0gT1tJU19DT05DQVRfU1BSRUFEQUJMRV07XG4gIHJldHVybiBzcHJlYWRhYmxlICE9PSB1bmRlZmluZWQgPyAhIXNwcmVhZGFibGUgOiBpc0FycmF5KE8pO1xufTtcblxudmFyIEZPUkNFRCA9ICFJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUIHx8ICFhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0KCdjb25jYXQnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5jb25jYXRgIG1ldGhvZFxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuY29uY2F0XG4vLyB3aXRoIGFkZGluZyBzdXBwb3J0IG9mIEBAaXNDb25jYXRTcHJlYWRhYmxlIGFuZCBAQHNwZWNpZXNcbiQoeyB0YXJnZXQ6ICdBcnJheScsIHByb3RvOiB0cnVlLCBhcml0eTogMSwgZm9yY2VkOiBGT1JDRUQgfSwge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnMgLS0gcmVxdWlyZWQgZm9yIGAubGVuZ3RoYFxuICBjb25jYXQ6IGZ1bmN0aW9uIGNvbmNhdChhcmcpIHtcbiAgICB2YXIgTyA9IHRvT2JqZWN0KHRoaXMpO1xuICAgIHZhciBBID0gYXJyYXlTcGVjaWVzQ3JlYXRlKE8sIDApO1xuICAgIHZhciBuID0gMDtcbiAgICB2YXIgaSwgaywgbGVuZ3RoLCBsZW4sIEU7XG4gICAgZm9yIChpID0gLTEsIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgRSA9IGkgPT09IC0xID8gTyA6IGFyZ3VtZW50c1tpXTtcbiAgICAgIGlmIChpc0NvbmNhdFNwcmVhZGFibGUoRSkpIHtcbiAgICAgICAgbGVuID0gbGVuZ3RoT2ZBcnJheUxpa2UoRSk7XG4gICAgICAgIGRvZXNOb3RFeGNlZWRTYWZlSW50ZWdlcihuICsgbGVuKTtcbiAgICAgICAgZm9yIChrID0gMDsgayA8IGxlbjsgaysrLCBuKyspIGlmIChrIGluIEUpIGNyZWF0ZVByb3BlcnR5KEEsIG4sIEVba10pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyKG4gKyAxKTtcbiAgICAgICAgY3JlYXRlUHJvcGVydHkoQSwgbisrLCBFKTtcbiAgICAgIH1cbiAgICB9XG4gICAgQS5sZW5ndGggPSBuO1xuICAgIHJldHVybiBBO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgRE9NSXRlcmFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS1pdGVyYWJsZXMnKTtcbnZhciBET01Ub2tlbkxpc3RQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLXRva2VuLWxpc3QtcHJvdG90eXBlJyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcblxudmFyIGhhbmRsZVByb3RvdHlwZSA9IGZ1bmN0aW9uIChDb2xsZWN0aW9uUHJvdG90eXBlKSB7XG4gIC8vIHNvbWUgQ2hyb21lIHZlcnNpb25zIGhhdmUgbm9uLWNvbmZpZ3VyYWJsZSBtZXRob2RzIG9uIERPTVRva2VuTGlzdFxuICBpZiAoQ29sbGVjdGlvblByb3RvdHlwZSAmJiBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggIT09IGZvckVhY2gpIHRyeSB7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KENvbGxlY3Rpb25Qcm90b3R5cGUsICdmb3JFYWNoJywgZm9yRWFjaCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoID0gZm9yRWFjaDtcbiAgfVxufTtcblxuZm9yICh2YXIgQ09MTEVDVElPTl9OQU1FIGluIERPTUl0ZXJhYmxlcykge1xuICBpZiAoRE9NSXRlcmFibGVzW0NPTExFQ1RJT05fTkFNRV0pIHtcbiAgICBoYW5kbGVQcm90b3R5cGUoZ2xvYmFsVGhpc1tDT0xMRUNUSU9OX05BTUVdICYmIGdsb2JhbFRoaXNbQ09MTEVDVElPTl9OQU1FXS5wcm90b3R5cGUpO1xuICB9XG59XG5cbmhhbmRsZVByb3RvdHlwZShET01Ub2tlbkxpc3RQcm90b3R5cGUpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5uYW1lW2RhdGEtdi0wMzkxNTE1Zl0ge1xcbiAgbWFyZ2luOiAyMHB4IDMwcHggMjNweDtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi5zZWFyY2gtY29udGVudFtkYXRhLXYtMDM5MTUxNWZdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgbWFyZ2luOiAwIDMwcHggMCA0MHB4O1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLnNlYXJjaC1jb250ZW50IC5zZWFyY2gtaXRlbVtkYXRhLXYtMDM5MTUxNWZdIHtcXG4gIHdpZHRoOiAzNSU7XFxuICBwYWRkaW5nOiA2cHg7XFxuICBiYWNrZ3JvdW5kOiAjZjZmNmY2O1xcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG59XFxuLm9mZmxpbmUtZGVzW2RhdGEtdi0wMzkxNTE1Zl0ge1xcbiAgbWFyZ2luOiAyM3B4IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4IDIzcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSg2OCwgMTIzLCAyNTIsIDApIDAlLCByZ2JhKDY4LCAxMjMsIDI1MiwgMC4wNikgMTAwJSksIHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBib3gtc2hhZG93OiAwcHggNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4ub2ZmbGluZS1jb250ZW50W2RhdGEtdi0wMzkxNTE1Zl0ge1xcbiAgbWFyZ2luOiAxMHB4IDdweCAzNnB4O1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XFxuICBib3gtc2hhZG93OiAwcHggNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5vZmZsaW5lLWNvbnRlbnQgLnRpdGxlW2RhdGEtdi0wMzkxNTE1Zl0ge1xcbiAgcGFkZGluZzogMTNweCAyMXB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSg2OCwgMTIzLCAyNTIsIDAuMDYpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY29sb3I6ICM0NDdiZmM7XFxufVxcbi5vZmZsaW5lLWNvbnRlbnQgLnNlYXJjaC1jb250ZW50W2RhdGEtdi0wMzkxNTE1Zl0ge1xcbiAgbWFyZ2luOiAwIDIxcHggMThweDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5vZmZsaW5lLWNvbnRlbnQgLnNlYXJjaC1jb250ZW50IC5zZWFyY2gtaXRlbVtkYXRhLXYtMDM5MTUxNWZdIHtcXG4gIHdpZHRoOiAzMCU7XFxuICBwYWRkaW5nOiA2cHg7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZXhjZWVkRGVzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTAzOTE1MTVmJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMWNlYjVlNjZcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9leGNlZWREZXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDM5MTUxNWYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9leGNlZWREZXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDM5MTUxNWYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2V4Y2VlZERlcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDM5MTUxNWYmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vZXhjZWVkRGVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vZXhjZWVkRGVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9leGNlZWREZXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MDM5MTUxNWYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIwMzkxNTE1ZlwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcwMzkxNTE1ZicpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcwMzkxNTE1ZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcwMzkxNTE1ZicsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vZXhjZWVkRGVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMzkxNTE1ZiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcwMzkxNTE1ZicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvZXhjZWVkRGVzLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZXhjZWVkRGVzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9leGNlZWREZXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZXhjZWVkRGVzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTAzOTE1MTVmJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZXhjZWVkRGVzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0wMzkxNTE1ZiZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=