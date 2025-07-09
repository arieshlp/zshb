(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/examineSiteList/components/timeSelect.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/examineSiteList/components/timeSelect.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_setdate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/utils/setdate */ "./src/utils/setdate.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_5__);




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


var first = true;
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "timeSelect",
  components: {},
  props: {
    option: String,
    time: String
  },
  data: function data() {
    return {
      show_type: "时",
      //"时值",
      show_dataTime: "",
      showDate: new Date(),
      nowYear: "",
      nowYearMonth: "",
      nowYearMonthDay: "",
      nowYearMonthDayHours: "",
      leftWords: "前一天",
      rightWords: "后一天",
      show_picker: false
    };
  },
  methods: {
    select: function select() {
      // 选择时间
      this.show_picker = true;
    },
    formatter: function formatter(type, val) {
      if (type === 'year') {
        return "".concat(val, "\u5E74");
      } else if (type === 'month') {
        return "".concat(val, "\u6708");
      } else if (type === 'day') {
        return "".concat(val, "\u65E5");
      } else if (type == 'hour') {
        return "".concat(val, "\u65F6");
      }

      return val;
    },
    confirm: function confirm() {
      if (this.show_type == '年') {
        this.show_dataTime = Object(_utils_setdate__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(this.showDate, 'y');
      } else if (this.show_type == '月') {
        this.show_dataTime = Object(_utils_setdate__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(this.showDate, 'M');
      } else if (this.show_type == '日') {
        this.show_dataTime = Object(_utils_setdate__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(this.showDate, 'd');
      } else if (this.show_type == '时') {
        this.show_dataTime = Object(_utils_setdate__WEBPACK_IMPORTED_MODULE_4__["formatDate"])(this.showDate, 'h') + ":00";
      }

      this.show_picker = false;
    },
    cancel: function cancel() {
      this.show_picker = false;
    },
    // 点击向前
    forward: function forward() {
      if (this.show_type === "日") {
        this.getNextDate(this.show_dataTime, -1);
      } else if (this.show_type === "月") {
        this.getPreMonth(this.show_dataTime);
      } else if (this.show_type === "年") {
        var forward_year = this.show_dataTime - 1;

        if (forward_year < this.nowYear - 10) {
          this.$dialog.alert({
            message: "只能查看近十年的数据"
          });
        } else {
          this.show_dataTime = forward_year;
        }
      } else if (this.show_type === "时") {
        this.getPreHour(this.show_dataTime);
      }
    },
    // 向后推时间
    next: function next() {
      if (this.show_type === "日") {
        var date1 = new Date(this.nowYearMonthDay.replace(/-/g, "/"));
        var date2 = new Date(this.show_dataTime.replace(/-/g, "/"));

        if (date1 > date2) {
          this.getNextDate(this.show_dataTime, +1);
          this.day_time = this.show_dataTime;
        } else {
          this.$dialog.alert({
            message: "日值日期选择不能超过今天"
          });
        }
      } else if (this.show_type === "月") {
        this.getIntervalMonth(this.show_dataTime, this.nowYearMonth);

        if (this.intervalMonth > 0) {
          this.getNextMonth(this.show_dataTime);
        } else {
          this.$dialog.alert({
            message: "月值日期选择不能超过当前月"
          });
        }
      } else if (this.show_type === "时") {
        // 获取当前时间的年月日时分秒
        this.getNextTime(this.show_dataTime);
        var nowDate = new Date();
        var year = nowDate.getFullYear(); //年

        var month = nowDate.getMonth() + 1; //月

        var day = nowDate.getDate(); //日

        var hours = nowDate.getHours(); //小时

        var Minutes = nowDate.getMinutes(); //分

        var Seconds = nowDate.getSeconds();
        month = month < 10 ? "0" + month : month;
        day = day < 10 ? "0" + day : day;
        hours = hours < 10 ? "0" + hours : hours;
        Minutes = Minutes < 10 ? "0" + Minutes : Minutes;
        Seconds = Seconds < 10 ? "0" + Seconds : Seconds;
        var present_time = year + "-" + month + "-" + day + " " + hours + ":" + Minutes + ":" + Seconds;
        var start_time = present_time.replace(/-|\s|:|\//g, "");
        var end_time = this.end_time2.replace(/-|\s|:|\//g, "");

        if (Number(start_time) > Number(end_time)) {
          this.getNextHour(this.show_dataTime);
          this.time = this.show_dataTime + ":00";
        } else {
          this.$dialog.alert({
            message: "时间段选择不能超过当前时间"
          });
        }
      } else if (this.show_type === "年") {
        var next_year = Number(this.show_dataTime) + 1;

        if (next_year > this.nowYear) {
          this.$dialog.alert({
            message: "年值选择不能超过当前年"
          });
        } else {
          this.show_dataTime = next_year;
        }
      }
    },
    // 前一天或者后一天计算方法
    getNextDate: function getNextDate(date, day) {
      var dd = new Date(date);
      dd.setDate(dd.getDate() + day);
      var y = dd.getFullYear();
      var m = dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1;
      var d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate();
      this.show_dataTime = y + "-" + m + "-" + d;
    },
    // 获取上一个月
    getPreMonth: function getPreMonth(date) {
      var arr = date.split("-");
      var year = arr[0]; //获取当前日期的年份

      var month = arr[1]; //获取当前日期的月份

      var year2 = year;
      var month2 = parseInt(month) - 1;

      if (month2 == 0) {
        //如果是1月份，则取上一年的12月份
        year2 = parseInt(year2) - 1;
        month2 = 12;
      }

      if (month2 < 10) {
        month2 = "0" + month2; //月份填补成2位。
      }

      var t2 = year2 + "-" + month2;
      this.show_dataTime = t2;
    },
    // 获取下一个月
    getNextMonth: function getNextMonth(date) {
      var arr = date.split("-");
      var year = arr[0]; //获取当前日期的年份

      var month = arr[1]; //获取当前日期的月份

      var year2 = year;
      var month2 = parseInt(month) + 1;

      if (month2 == 13) {
        year2 = parseInt(year2) + 1;
        month2 = 1;
      }

      if (month2 < 10) {
        month2 = "0" + month2;
      }

      var t2 = year2 + "-" + month2;
      this.show_dataTime = t2;
    },
    // 获取上一个时间段(4小时)
    getPreHour: function getPreHour(date) {
      var sdtime1 = new Date(date + ":00");
      var sdtime2 = sdtime1.setHours(sdtime1.getHours() - 4); //小时

      var NewDate = new Date(sdtime2);
      var year = NewDate.getFullYear(); //年

      var month = NewDate.getMonth() + 1; //月

      var day = NewDate.getDate(); //日

      var hours = NewDate.getHours(); //小时

      var Minutes = NewDate.getMinutes(); //分

      var Seconds = NewDate.getSeconds();
      month = month < 10 ? "0" + month : month;
      day = day < 10 ? "0" + day : day;
      hours = hours < 10 ? "0" + hours : hours;
      Minutes = Minutes < 10 ? "0" + Minutes : Minutes;
      Seconds = Seconds < 10 ? "0" + Seconds : Seconds;
      this.show_dataTime = year + "-" + month + "-" + day + " " + hours + ":" + Minutes;
    },
    // 获取下一个时间段(4小时)
    getNextHour: function getNextHour(date) {
      var sdtime1 = new Date(date + ":00");
      var sdtime2 = sdtime1.setHours(sdtime1.getHours() + 4); //小时

      var NewDate = new Date(sdtime2);
      var year = NewDate.getFullYear(); //年

      var month = NewDate.getMonth() + 1; //月

      var day = NewDate.getDate(); //日

      var hours = NewDate.getHours(); //小时

      var Minutes = NewDate.getMinutes(); //分

      var Seconds = NewDate.getSeconds();
      month = month < 10 ? "0" + month : month;
      day = day < 10 ? "0" + day : day;
      hours = hours < 10 ? "0" + hours : hours;
      Minutes = Minutes < 10 ? "0" + Minutes : Minutes;
      Seconds = Seconds < 10 ? "0" + Seconds : Seconds;
      this.show_dataTime = year + "-" + month + "-" + day + " " + hours + ":" + Minutes;
    },
    getNextTime: function getNextTime(date) {
      var sdtime1 = new Date(date + ":00");
      var sdtime2 = sdtime1.setHours(sdtime1.getHours() + 4); //小时

      var NewDate = new Date(sdtime2);
      var year = NewDate.getFullYear(); //年

      var month = NewDate.getMonth() + 1; //月

      var day = NewDate.getDate(); //日

      var hours = NewDate.getHours(); //小时

      var Minutes = NewDate.getMinutes(); //分

      var Seconds = NewDate.getSeconds();
      month = month < 10 ? "0" + month : month;
      day = day < 10 ? "0" + day : day;
      hours = hours < 10 ? "0" + hours : hours;
      Minutes = Minutes < 10 ? "0" + Minutes : Minutes;
      Seconds = Seconds < 10 ? "0" + Seconds : Seconds;
      this.end_time2 = year + "-" + month + "-" + day + " " + hours + ":" + Minutes + ":" + Seconds;
    },
    // 获取两个月的时间差
    getIntervalMonth: function getIntervalMonth(startDateStr, endDateStr) {
      if (startDateStr == null || endDateStr == null) {
        return 3;
      }

      var startDate = new Date(startDateStr);
      var endDate = new Date(endDateStr);
      var startMonth = startDate.getMonth();
      var endMonth = endDate.getMonth();
      var intervalMonth = endDate.getFullYear() * 12 + endMonth - (startDate.getFullYear() * 12 + startMonth);
      this.intervalMonth = intervalMonth;
    },
    // 获取当前时间
    get_present_data: function get_present_data() {
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
      this.nowYear = year;
      this.nowYearMonth = year + "-" + month;
      this.nowYearMonthDay = year + "-" + month + "-" + day;
      this.nowYearMonthDayHours = year + "-" + month + "-" + day + " " + hours + ":00";

      if (this.show_type == "时") {
        this.show_dataTime = this.nowYearMonthDayHours;
      } else if (this.show_type == "日") {
        this.show_dataTime = this.nowYearMonthDay;
      } else if (this.show_type == "月") {
        this.show_dataTime = this.nowYearMonth;
      } else if (this.show_type == "年") {
        this.show_dataTime = this.nowYear;
      }
    }
  },
  destroyed: function destroyed() {
    first = true;
  },
  watch: {
    option: function option(val) {
      if (val) {
        this.show_type = val; //设置第一次进入页面的默认时间

        if (this.time && first) {
          if (val === "日") {
            this.show_dataTime = dayjs__WEBPACK_IMPORTED_MODULE_5___default()(this.time).format('YYYY-MM-DD');
          } else if (val === "月") {
            this.show_dataTime = dayjs__WEBPACK_IMPORTED_MODULE_5___default()(this.time).format('YYYY-MM');
          } else if (val === "年") {
            this.show_dataTime = dayjs__WEBPACK_IMPORTED_MODULE_5___default()(this.time).format('YYYY');
          } else if (val === '时') {
            this.show_dataTime = this.time;
          }

          first = false;
        } else {
          this.get_present_data();
        }

        if (val == "日") {
          this.leftWords = "前一天";
          this.rightWords = "后一天";
        } else if (val == "月") {
          this.leftWords = "前一月";
          this.rightWords = "后一月";
        } else if (val == "年") {
          this.leftWords = "前一年";
          this.rightWords = "后一年";
        } else if (val == '时') {
          this.leftWords = "前4小时";
          this.rightWords = "后4小时";
        }
      }
    },
    show_dataTime: function show_dataTime(val) {
      if (val) {
        this.$emit("getTime", val);
      }
    }
  },
  mounted: function mounted() {
    this.show_type = this.option;

    if (this.option == "日") {
      this.leftWords = "前一天";
      this.rightWords = "后一天";
    } else if (this.option == "月") {
      this.leftWords = "前一月";
      this.rightWords = "后一月";
    } else if (this.option == "年") {
      this.leftWords = "前一年";
      this.rightWords = "后一年";
    } else if (this.option == '时') {
      this.leftWords = "前4小时";
      this.rightWords = "后4小时";
    }

    this.get_present_data();
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/examineSiteList/components/timeSelect.vue?vue&type=template&id=5c507e85&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/examineSiteList/components/timeSelect.vue?vue&type=template&id=5c507e85&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "timeSelect" },
    [
      _c(
        "div",
        { staticClass: "time-content" },
        [
          _c("van-icon", {
            staticClass: "icon",
            attrs: { name: "arrow-left" },
            on: { click: _vm.forward },
          }),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.show_type != "时",
                  expression: "show_type != '时'",
                },
              ],
              staticClass: "leftWords",
              on: { click: _vm.forward },
            },
            [_vm._v(_vm._s(_vm.leftWords))]
          ),
          _c("img", {
            attrs: { src: __webpack_require__(/*! @/assets/timeImg.png */ "./src/assets/timeImg.png"), alt: "" },
          }),
          _c("div", { staticClass: "time", on: { click: _vm.select } }, [
            _vm._v(_vm._s(_vm.show_dataTime)),
          ]),
          _c(
            "div",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.show_type != "时",
                  expression: "show_type != '时'",
                },
              ],
              staticClass: "rightWords",
              on: { click: _vm.next },
            },
            [_vm._v(_vm._s(_vm.rightWords))]
          ),
          _c("van-icon", {
            staticClass: "icon",
            attrs: { name: "arrow" },
            on: { click: _vm.next },
          }),
        ],
        1
      ),
      _c(
        "van-popup",
        {
          attrs: {
            "get-container": "#app",
            position: "bottom",
            "safe-area-inset-bottom": "",
          },
          model: {
            value: _vm.show_picker,
            callback: function ($$v) {
              _vm.show_picker = $$v
            },
            expression: "show_picker",
          },
        },
        [
          _vm.show_type == "时"
            ? _c("van-datetime-picker", {
                attrs: {
                  formatter: _vm.formatter,
                  type: "datehour",
                  title: "选择年月日小时",
                },
                on: { cancel: _vm.cancel, confirm: _vm.confirm },
                model: {
                  value: _vm.showDate,
                  callback: function ($$v) {
                    _vm.showDate = $$v
                  },
                  expression: "showDate",
                },
              })
            : _vm._e(),
          _vm.show_type == "日"
            ? _c("van-datetime-picker", {
                attrs: {
                  formatter: _vm.formatter,
                  type: "date",
                  title: "选择年月日",
                },
                on: { cancel: _vm.cancel, confirm: _vm.confirm },
                model: {
                  value: _vm.showDate,
                  callback: function ($$v) {
                    _vm.showDate = $$v
                  },
                  expression: "showDate",
                },
              })
            : _vm._e(),
          _vm.show_type == "月"
            ? _c("van-datetime-picker", {
                attrs: {
                  formatter: _vm.formatter,
                  type: "year-month",
                  title: "选择年月",
                },
                on: { cancel: _vm.cancel, confirm: _vm.confirm },
                model: {
                  value: _vm.showDate,
                  callback: function ($$v) {
                    _vm.showDate = $$v
                  },
                  expression: "showDate",
                },
              })
            : _vm._e(),
          _vm.show_type == "年"
            ? _c("van-datetime-picker", {
                attrs: {
                  formatter: _vm.formatter,
                  type: "year",
                  title: "选择年",
                },
                on: { cancel: _vm.cancel, confirm: _vm.confirm },
                model: {
                  value: _vm.showDate,
                  callback: function ($$v) {
                    _vm.showDate = $$v
                  },
                  expression: "showDate",
                },
              })
            : _vm._e(),
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

/***/ "./node_modules/core-js/modules/es.string.split.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.string.split.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var call = __webpack_require__(/*! ../internals/function-call */ "./node_modules/core-js/internals/function-call.js");
var uncurryThis = __webpack_require__(/*! ../internals/function-uncurry-this */ "./node_modules/core-js/internals/function-uncurry-this.js");
var fixRegExpWellKnownSymbolLogic = __webpack_require__(/*! ../internals/fix-regexp-well-known-symbol-logic */ "./node_modules/core-js/internals/fix-regexp-well-known-symbol-logic.js");
var anObject = __webpack_require__(/*! ../internals/an-object */ "./node_modules/core-js/internals/an-object.js");
var isNullOrUndefined = __webpack_require__(/*! ../internals/is-null-or-undefined */ "./node_modules/core-js/internals/is-null-or-undefined.js");
var requireObjectCoercible = __webpack_require__(/*! ../internals/require-object-coercible */ "./node_modules/core-js/internals/require-object-coercible.js");
var speciesConstructor = __webpack_require__(/*! ../internals/species-constructor */ "./node_modules/core-js/internals/species-constructor.js");
var advanceStringIndex = __webpack_require__(/*! ../internals/advance-string-index */ "./node_modules/core-js/internals/advance-string-index.js");
var toLength = __webpack_require__(/*! ../internals/to-length */ "./node_modules/core-js/internals/to-length.js");
var toString = __webpack_require__(/*! ../internals/to-string */ "./node_modules/core-js/internals/to-string.js");
var getMethod = __webpack_require__(/*! ../internals/get-method */ "./node_modules/core-js/internals/get-method.js");
var regExpExec = __webpack_require__(/*! ../internals/regexp-exec-abstract */ "./node_modules/core-js/internals/regexp-exec-abstract.js");
var stickyHelpers = __webpack_require__(/*! ../internals/regexp-sticky-helpers */ "./node_modules/core-js/internals/regexp-sticky-helpers.js");
var fails = __webpack_require__(/*! ../internals/fails */ "./node_modules/core-js/internals/fails.js");

var UNSUPPORTED_Y = stickyHelpers.UNSUPPORTED_Y;
var MAX_UINT32 = 0xFFFFFFFF;
var min = Math.min;
var push = uncurryThis([].push);
var stringSlice = uncurryThis(''.slice);

// Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
// Weex JS has frozen built-in prototypes, so use try / catch wrapper
var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = !fails(function () {
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length !== 2 || result[0] !== 'a' || result[1] !== 'b';
});

var BUGGY = 'abbc'.split(/(b)*/)[1] === 'c' ||
  // eslint-disable-next-line regexp/no-empty-group -- required for testing
  'test'.split(/(?:)/, -1).length !== 4 ||
  'ab'.split(/(?:ab)*/).length !== 2 ||
  '.'.split(/(.?)(.?)/).length !== 4 ||
  // eslint-disable-next-line regexp/no-empty-capturing-group, regexp/no-empty-group -- required for testing
  '.'.split(/()()/).length > 1 ||
  ''.split(/.?/).length;

// @@split logic
fixRegExpWellKnownSymbolLogic('split', function (SPLIT, nativeSplit, maybeCallNative) {
  var internalSplit = '0'.split(undefined, 0).length ? function (separator, limit) {
    return separator === undefined && limit === 0 ? [] : call(nativeSplit, this, separator, limit);
  } : nativeSplit;

  return [
    // `String.prototype.split` method
    // https://tc39.es/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = requireObjectCoercible(this);
      var splitter = isNullOrUndefined(separator) ? undefined : getMethod(separator, SPLIT);
      return splitter
        ? call(splitter, separator, O, limit)
        : call(internalSplit, toString(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.es/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (string, limit) {
      var rx = anObject(this);
      var S = toString(string);

      if (!BUGGY) {
        var res = maybeCallNative(internalSplit, rx, S, limit, internalSplit !== nativeSplit);
        if (res.done) return res.value;
      }

      var C = speciesConstructor(rx, RegExp);
      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (UNSUPPORTED_Y ? 'g' : 'y');
      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(UNSUPPORTED_Y ? '^(?:' + rx.source + ')' : rx, flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return regExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = UNSUPPORTED_Y ? 0 : q;
        var z = regExpExec(splitter, UNSUPPORTED_Y ? stringSlice(S, q) : S);
        var e;
        if (
          z === null ||
          (e = min(toLength(splitter.lastIndex + (UNSUPPORTED_Y ? q : 0)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          push(A, stringSlice(S, p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            push(A, z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      push(A, stringSlice(S, p));
      return A;
    }
  ];
}, BUGGY || !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC, UNSUPPORTED_Y);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/examineSiteList/components/timeSelect.vue?vue&type=style&index=0&id=5c507e85&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/examineSiteList/components/timeSelect.vue?vue&type=style&index=0&id=5c507e85&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".timeSelect[data-v-5c507e85] {\n  /*height: 50px;*/\n  width: 100%;\n  display: flex;\n  justify-content: center;\n}\n.timeSelect .time-content[data-v-5c507e85] {\n  line-height: 50px;\n  display: flex;\n  align-items: center;\n}\n.timeSelect .time-content .icon[data-v-5c507e85] {\n  color: rgba(18, 18, 54, 0.5);\n}\n.timeSelect .time-content img[data-v-5c507e85] {\n  margin-right: 10px;\n  margin-left: 20px;\n}\n.timeSelect .time-content .time[data-v-5c507e85] {\n  font-size: 14px;\n  color: #447bfc;\n  margin-right: 20px;\n}\n.timeSelect .time-content .leftWords[data-v-5c507e85],\n.timeSelect .time-content .rightWords[data-v-5c507e85] {\n  font-size: 12px;\n  color: rgba(18, 18, 54, 0.5);\n  margin: 0 3px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/examineSiteList/components/timeSelect.vue?vue&type=style&index=0&id=5c507e85&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/examineSiteList/components/timeSelect.vue?vue&type=style&index=0&id=5c507e85&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./timeSelect.vue?vue&type=style&index=0&id=5c507e85&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/examineSiteList/components/timeSelect.vue?vue&type=style&index=0&id=5c507e85&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("52334b5b", content, false, {"sourceMap":false,"shadowMode":false});
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

/***/ "./src/assets/timeImg.png":
/*!********************************!*\
  !*** ./src/assets/timeImg.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAYAAABWdVznAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACISURBVCiRlZHdCsMgDEZPin0vB3krhXXQxyronkshu1gdpSz7OVeK50skgQOaeuGEpl40tzjuorktmFzPokOd/pABYjimEbu76l74GRC7beu8fCqtuVVMyuhQATR1e2uLXcYxeA9HtnWuY1LBE7yvvQKaW8Rk7EG+BvaqrjiYAH7cRQQQdzIOD9U5LwaCbHvpAAAAAElFTkSuQmCC"

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

/***/ "./src/views/waterHomePage/examineSiteList/components/timeSelect.vue":
/*!***************************************************************************!*\
  !*** ./src/views/waterHomePage/examineSiteList/components/timeSelect.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _timeSelect_vue_vue_type_template_id_5c507e85_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./timeSelect.vue?vue&type=template&id=5c507e85&scoped=true& */ "./src/views/waterHomePage/examineSiteList/components/timeSelect.vue?vue&type=template&id=5c507e85&scoped=true&");
/* harmony import */ var _timeSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timeSelect.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/examineSiteList/components/timeSelect.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _timeSelect_vue_vue_type_style_index_0_id_5c507e85_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timeSelect.vue?vue&type=style&index=0&id=5c507e85&lang=scss&scoped=true& */ "./src/views/waterHomePage/examineSiteList/components/timeSelect.vue?vue&type=style&index=0&id=5c507e85&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _timeSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _timeSelect_vue_vue_type_template_id_5c507e85_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _timeSelect_vue_vue_type_template_id_5c507e85_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5c507e85",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/examineSiteList/components/timeSelect.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/examineSiteList/components/timeSelect.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./src/views/waterHomePage/examineSiteList/components/timeSelect.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_timeSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./timeSelect.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/examineSiteList/components/timeSelect.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_timeSelect_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/examineSiteList/components/timeSelect.vue?vue&type=style&index=0&id=5c507e85&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/examineSiteList/components/timeSelect.vue?vue&type=style&index=0&id=5c507e85&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_timeSelect_vue_vue_type_style_index_0_id_5c507e85_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./timeSelect.vue?vue&type=style&index=0&id=5c507e85&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/examineSiteList/components/timeSelect.vue?vue&type=style&index=0&id=5c507e85&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_timeSelect_vue_vue_type_style_index_0_id_5c507e85_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_timeSelect_vue_vue_type_style_index_0_id_5c507e85_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_timeSelect_vue_vue_type_style_index_0_id_5c507e85_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_timeSelect_vue_vue_type_style_index_0_id_5c507e85_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/waterHomePage/examineSiteList/components/timeSelect.vue?vue&type=template&id=5c507e85&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/examineSiteList/components/timeSelect.vue?vue&type=template&id=5c507e85&scoped=true& ***!
  \**********************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_timeSelect_vue_vue_type_template_id_5c507e85_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./timeSelect.vue?vue&type=template&id=5c507e85&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/examineSiteList/components/timeSelect.vue?vue&type=template&id=5c507e85&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_timeSelect_vue_vue_type_template_id_5c507e85_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_timeSelect_vue_vue_type_template_id_5c507e85_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvZXhhbWluZVNpdGVMaXN0L2NvbXBvbmVudHMvdGltZVNlbGVjdC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvZXhhbWluZVNpdGVMaXN0L2NvbXBvbmVudHMvdGltZVNlbGVjdC52dWU/NjMwZCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLnN0cmluZy5zcGxpdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9leGFtaW5lU2l0ZUxpc3QvY29tcG9uZW50cy90aW1lU2VsZWN0LnZ1ZT9mMTI2Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2V4YW1pbmVTaXRlTGlzdC9jb21wb25lbnRzL3RpbWVTZWxlY3QudnVlPzAzOTMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS93YXRlcl9lbnZpci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3RpbWVJbWcucG5nIiwid2VicGFjazovLy8uL3NyYy91dGlscy9zZXRkYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2V4YW1pbmVTaXRlTGlzdC9jb21wb25lbnRzL3RpbWVTZWxlY3QudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2V4YW1pbmVTaXRlTGlzdC9jb21wb25lbnRzL3RpbWVTZWxlY3QudnVlPzIyOGMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvZXhhbWluZVNpdGVMaXN0L2NvbXBvbmVudHMvdGltZVNlbGVjdC52dWU/NTYzYiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9leGFtaW5lU2l0ZUxpc3QvY29tcG9uZW50cy90aW1lU2VsZWN0LnZ1ZT9hM2MxIl0sIm5hbWVzIjpbImJhc2VVcmwiLCJyYW5raW5nIiwiZGF0YSIsInJlcXVlc3QiLCJ1cmwiLCJtZXRob2QiLCJwYXJhbXMiLCJ5ZWFyUmFua0xpc3QiLCJyYW5rTGlzdCIsInJhbmtEZXRhaWwiLCJzY2FsZU1hcmtzIiwid2F0ZXJCYXNpY0RhdGEiLCJzZWN0aW9uSW5mbyIsInNlY3Rpb25MaXN0Iiwic3RhdGlvbkluZm8iLCJ1cFN0cmVhbU92ZXIiLCJsYWtlU2l0ZUxpc3QiLCJxdWVyeVNlY3Rpb25JbmZvIiwic3RhdGlvbkRlcyIsInJpdmVyQ291cnNlRGV0YWlsIiwiaG91ckxpbmUiLCJ3YXRlclBvbGx1dGlvbiIsInVwc3RyZWFtUG9sbHV0aW9uIiwiZ2V0VXBMaXN0IiwidXBTdHJlYW1XYXRlciIsInVwc3RyZWFtU2V3YWdlIiwicHVyaWZpY2F0aW9uUGxhbnQiLCJkYXRhVGFibGUiLCJqaGNJbmZvIiwibHlCYXNpbiIsImx5RGV0YWlsIiwiZGNTeiIsImRjU3pMaXN0IiwieXlzSW5mbyIsInNrTGlzdCIsIndhdGVyQm9keUxpc3QiLCJ3YXRlclBsYW50TGlzdCIsInJlc2Vydm9pckxpc3QiLCJ3YXRlclBsYW50Uml2ZXIiLCJ3YXRlclBsYW50U2l0ZSIsInJlc291cmNlU3RhdCIsIndhdGVyRnVuY3Rpb25MaXN0Iiwid2F0ZXJGdW5jdGlvbkRldGFpbCIsImludm9sdmVXYXRlciIsInNld2FnZURldGFpbCIsInNld2FnZVBjRGV0YWlsIiwic2V3YWdlU3lEZXRhaWwiLCJzZXdhZ2VKY0RldGFpbCIsInNld2FnZVp6RGV0YWlsIiwicG9sbHV0aW9uTGlzdCIsInNld2FnZVN0YXQiLCJyaXZlckNvdXJzZVN0YXQiLCJyaXZlckNvdXJzZUxpc3QiLCJ3YXRlckxpc3QiLCJnZXRUaGlzRGF0ZSIsImUiLCJub3dUaW1lIiwidGltZSIsIkRhdGUiLCJ5IiwiZ2V0RnVsbFllYXIiLCJsbSIsImdldE1vbnRoIiwibSIsImQiLCJnZXREYXRlIiwiaCIsImdldEhvdXJzIiwiTSIsImdldE1pbnV0ZXMiLCJzIiwiZ2V0U2Vjb25kcyIsImZvcm1hdERhdGUiLCJkYXRlIiwibiIsImhvdXJEYXRlRm9ybWF0IiwieWVhciIsIm1vbnRoIiwiZGF5IiwiaG91ciIsIm1vbnRoRGF0ZUZvcm1hdCIsImZvdXJIb3VyVGltZSIsIm5vd0RhdGUiLCJob3VycyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQURBO0FBRUEsZ0JBRkE7QUFHQTtBQUNBLGtCQURBO0FBRUE7QUFGQSxHQUhBO0FBT0EsTUFQQSxrQkFPQTtBQUNBO0FBQ0Esb0JBREE7QUFDQTtBQUNBLHVCQUZBO0FBR0EsMEJBSEE7QUFJQSxpQkFKQTtBQUtBLHNCQUxBO0FBTUEseUJBTkE7QUFPQSw4QkFQQTtBQVFBLHNCQVJBO0FBU0EsdUJBVEE7QUFVQTtBQVZBO0FBWUEsR0FwQkE7QUFxQkE7QUFDQSxVQURBLG9CQUNBO0FBQ0E7QUFDQTtBQUNBLEtBSkE7QUFLQSxhQUxBLHFCQUtBLElBTEEsRUFLQSxHQUxBLEVBS0E7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQSxLQWhCQTtBQWlCQSxXQWpCQSxxQkFpQkE7QUFDQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7QUFDQSxPQUZBLE1BRUE7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQSxLQTVCQTtBQTZCQSxVQTdCQSxvQkE2QkE7QUFDQTtBQUNBLEtBL0JBO0FBZ0NBO0FBQ0EsV0FqQ0EscUJBaUNBO0FBQ0E7QUFDQTtBQUNBLE9BRkEsTUFFQTtBQUNBO0FBQ0EsT0FGQSxNQUVBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQSxTQUpBLE1BSUE7QUFDQTtBQUNBO0FBQ0EsT0FUQSxNQVNBO0FBQ0E7QUFDQTtBQUNBLEtBbERBO0FBbURBO0FBQ0EsUUFwREEsa0JBb0RB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QSxTQUFLLEdBQUcsRUFBUjtBQUNBOztBQUNETixPQUFLLEdBQUdBLEtBQUssR0FBRyxFQUFSLEdBQWEsTUFBTUEsS0FBbkIsR0FBMkJBLEtBQW5DO0FBQ0FDLEtBQUcsR0FBR0EsR0FBRyxHQUFHLEVBQU4sR0FBVyxNQUFNQSxHQUFqQixHQUF1QkEsR0FBN0I7QUFDQUssT0FBSyxHQUFHQSxLQUFLLEdBQUcsRUFBUixHQUFhLE1BQU1BLEtBQW5CLEdBQTJCQSxLQUFuQztBQUNBLFNBQU9QLElBQUksR0FBQyxHQUFMLEdBQVNDLEtBQVQsR0FBZSxHQUFmLEdBQW1CQyxHQUFuQixHQUF1QixHQUF2QixHQUEyQkssS0FBM0IsR0FBaUMsUUFBeEM7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUM5RkQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFxRztBQUN2QztBQUNMO0FBQ3NDOzs7QUFHL0Y7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsZ0ZBQU07QUFDUixFQUFFLGlHQUFNO0FBQ1IsRUFBRSwwR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBMlQsQ0FBZ0IsMlVBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBL1U7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PGRpdiBjbGFzcz1cInRpbWVTZWxlY3RcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJ0aW1lLWNvbnRlbnRcIj5cclxuXHRcdFx0PHZhbi1pY29uIG5hbWU9XCJhcnJvdy1sZWZ0XCIgY2xhc3M9XCJpY29uXCIgQGNsaWNrPVwiZm9yd2FyZFwiIC8+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJsZWZ0V29yZHNcIiB2LXNob3c9XCJzaG93X3R5cGUgIT0gJ+aXtidcIiBAY2xpY2s9XCJmb3J3YXJkXCI+e3sgbGVmdFdvcmRzIH19PC9kaXY+XHJcblx0XHRcdDxpbWcgc3JjPVwifkAvYXNzZXRzL3RpbWVJbWcucG5nXCIgYWx0PVwiXCIgLz5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInRpbWVcIiBAY2xpY2s9XCJzZWxlY3RcIj57eyBzaG93X2RhdGFUaW1lIH19PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJyaWdodFdvcmRzXCIgdi1zaG93PVwic2hvd190eXBlICE9ICfml7YnXCIgQGNsaWNrPVwibmV4dFwiPnt7IHJpZ2h0V29yZHMgfX08L2Rpdj5cclxuXHRcdFx0PHZhbi1pY29uIG5hbWU9XCJhcnJvd1wiIGNsYXNzPVwiaWNvblwiIEBjbGljaz1cIm5leHRcIiAvPlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8dmFuLXBvcHVwIHYtbW9kZWw9XCJzaG93X3BpY2tlclwiIGdldC1jb250YWluZXI9XCIjYXBwXCIgcG9zaXRpb249XCJib3R0b21cIiBzYWZlLWFyZWEtaW5zZXQtYm90dG9tPlxyXG5cdFx0XHQ8dmFuLWRhdGV0aW1lLXBpY2tlciB2LWlmPVwic2hvd190eXBlPT0n5pe2J1wiXHJcblx0XHRcdFx0di1tb2RlbD1cInNob3dEYXRlXCIgOmZvcm1hdHRlcj1cImZvcm1hdHRlclwiXHJcblx0XHRcdFx0dHlwZT1cImRhdGVob3VyXCIgQGNhbmNlbD1cImNhbmNlbFwiICBAY29uZmlybT1cImNvbmZpcm1cIlxyXG5cdFx0XHRcdHRpdGxlPVwi6YCJ5oup5bm05pyI5pel5bCP5pe2XCJcclxuXHRcdFx0Lz5cclxuXHRcdFx0PHZhbi1kYXRldGltZS1waWNrZXIgdi1pZj1cInNob3dfdHlwZT09J+aXpSdcIlxyXG5cdFx0XHRcdHYtbW9kZWw9XCJzaG93RGF0ZVwiIDpmb3JtYXR0ZXI9XCJmb3JtYXR0ZXJcIlxyXG5cdFx0XHRcdHR5cGU9XCJkYXRlXCIgQGNhbmNlbD1cImNhbmNlbFwiICBAY29uZmlybT1cImNvbmZpcm1cIlxyXG5cdFx0XHRcdHRpdGxlPVwi6YCJ5oup5bm05pyI5pelXCJcclxuXHRcdFx0Lz5cclxuXHRcdFx0PHZhbi1kYXRldGltZS1waWNrZXIgdi1pZj1cInNob3dfdHlwZT09J+aciCdcIlxyXG5cdFx0XHRcdHYtbW9kZWw9XCJzaG93RGF0ZVwiIDpmb3JtYXR0ZXI9XCJmb3JtYXR0ZXJcIlxyXG5cdFx0XHRcdHR5cGU9XCJ5ZWFyLW1vbnRoXCIgQGNhbmNlbD1cImNhbmNlbFwiICBAY29uZmlybT1cImNvbmZpcm1cIlxyXG5cdFx0XHRcdHRpdGxlPVwi6YCJ5oup5bm05pyIXCJcclxuXHRcdFx0Lz5cclxuXHRcdFx0PHZhbi1kYXRldGltZS1waWNrZXIgdi1pZj1cInNob3dfdHlwZT09J+W5tCdcIlxyXG5cdFx0XHRcdHYtbW9kZWw9XCJzaG93RGF0ZVwiIDpmb3JtYXR0ZXI9XCJmb3JtYXR0ZXJcIlxyXG5cdFx0XHRcdHR5cGU9XCJ5ZWFyXCIgQGNhbmNlbD1cImNhbmNlbFwiICBAY29uZmlybT1cImNvbmZpcm1cIlxyXG5cdFx0XHRcdHRpdGxlPVwi6YCJ5oup5bm0XCJcclxuXHRcdFx0Lz5cclxuXHRcdCA8L3Zhbi1wb3B1cD5cclxuXHQ8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7IGZvcm1hdERhdGUgfSBmcm9tIFwiQC91dGlscy9zZXRkYXRlXCI7XHJcbmltcG9ydCBkYXlqcyBmcm9tICdkYXlqcyc7XHJcbmxldCBmaXJzdCA9IHRydWU7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcInRpbWVTZWxlY3RcIixcclxuICBjb21wb25lbnRzOiB7fSxcclxuICBwcm9wczoge1xyXG4gICAgb3B0aW9uOiBTdHJpbmcsXHJcbiAgICB0aW1lOiBTdHJpbmdcclxuICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzaG93X3R5cGU6IFwi5pe2XCIsLy9cIuaXtuWAvFwiLFxyXG4gICAgICBzaG93X2RhdGFUaW1lOiBcIlwiLFxyXG5cdFx0XHRzaG93RGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgbm93WWVhcjogXCJcIixcclxuICAgICAgbm93WWVhck1vbnRoOiBcIlwiLFxyXG4gICAgICBub3dZZWFyTW9udGhEYXk6IFwiXCIsXHJcbiAgICAgIG5vd1llYXJNb250aERheUhvdXJzOiBcIlwiLFxyXG4gICAgICBsZWZ0V29yZHM6IFwi5YmN5LiA5aSpXCIsXHJcbiAgICAgIHJpZ2h0V29yZHM6IFwi5ZCO5LiA5aSpXCIsXHJcblx0XHRcdHNob3dfcGlja2VyOmZhbHNlXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG5cdFx0c2VsZWN0KCl7XHJcblx0XHRcdC8vIOmAieaLqeaXtumXtFxyXG5cdFx0XHR0aGlzLnNob3dfcGlja2VyID0gdHJ1ZTtcclxuXHRcdH0sXHJcblx0XHRmb3JtYXR0ZXIodHlwZSwgdmFsKSB7XHJcblx0XHQgIGlmICh0eXBlID09PSAneWVhcicpIHtcclxuXHRcdCAgICByZXR1cm4gYCR7dmFsfeW5tGA7XHJcblx0XHQgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ21vbnRoJykge1xyXG5cdFx0ICAgIHJldHVybiBgJHt2YWx95pyIYDtcclxuXHRcdCAgfSBlbHNlIGlmICh0eXBlID09PSAnZGF5Jykge1xyXG5cdFx0ICAgIHJldHVybiBgJHt2YWx95pelYDtcclxuXHRcdCAgfSBlbHNlIGlmKHR5cGUgPT0gJ2hvdXInKXtcclxuXHRcdFx0XHRyZXR1cm4gIGAke3ZhbH3ml7ZgO1xyXG5cdFx0XHR9XHJcblx0XHQgIHJldHVybiB2YWw7XHJcblx0XHR9LFxyXG5cdFx0Y29uZmlybSgpe1xyXG5cdFx0XHQgaWYgKHRoaXMuc2hvd190eXBlID09ICflubQnKSB7XHJcblx0XHRcdFx0dGhpcy5zaG93X2RhdGFUaW1lID0gZm9ybWF0RGF0ZSh0aGlzLnNob3dEYXRlLCd5Jyk7XHJcblx0XHRcdH1lbHNlIGlmICh0aGlzLnNob3dfdHlwZSA9PSAn5pyIJykge1xyXG5cdFx0XHQgIHRoaXMuc2hvd19kYXRhVGltZSA9IGZvcm1hdERhdGUodGhpcy5zaG93RGF0ZSwnTScpO1xyXG5cdFx0XHR9IGVsc2UgaWYgKHRoaXMuc2hvd190eXBlID09ICfml6UnKSB7XHJcblx0XHRcdFx0dGhpcy5zaG93X2RhdGFUaW1lID0gZm9ybWF0RGF0ZSh0aGlzLnNob3dEYXRlLCdkJyk7XHJcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5zaG93X3R5cGUgPT0gJ+aXticpIHtcclxuXHRcdFx0XHR0aGlzLnNob3dfZGF0YVRpbWUgPSBmb3JtYXREYXRlKHRoaXMuc2hvd0RhdGUsJ2gnKStcIjowMFwiO1xyXG5cdFx0XHR9XHJcblx0XHQgIHRoaXMuc2hvd19waWNrZXIgPSBmYWxzZTtcclxuXHRcdH0sXHJcblx0XHRjYW5jZWwoKSB7XHJcblx0XHQgIHRoaXMuc2hvd19waWNrZXIgPSBmYWxzZTtcclxuXHRcdH0sXHJcbiAgICAvLyDngrnlh7vlkJHliY1cclxuICAgIGZvcndhcmQoKSB7XHJcbiAgICAgIGlmICh0aGlzLnNob3dfdHlwZSA9PT0gXCLml6VcIikge1xyXG4gICAgICAgIHRoaXMuZ2V0TmV4dERhdGUodGhpcy5zaG93X2RhdGFUaW1lLCAtMSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG93X3R5cGUgPT09IFwi5pyIXCIpIHtcclxuICAgICAgICB0aGlzLmdldFByZU1vbnRoKHRoaXMuc2hvd19kYXRhVGltZSk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG93X3R5cGUgPT09IFwi5bm0XCIpIHtcclxuICAgICAgICBsZXQgZm9yd2FyZF95ZWFyID0gdGhpcy5zaG93X2RhdGFUaW1lIC0gMTtcclxuICAgICAgICBpZiAoZm9yd2FyZF95ZWFyIDwgdGhpcy5ub3dZZWFyIC0gMTApIHtcclxuICAgICAgICAgIHRoaXMuJGRpYWxvZy5hbGVydCh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwi5Y+q6IO95p+l55yL6L+R5Y2B5bm055qE5pWw5o2uXCIsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zaG93X2RhdGFUaW1lID0gZm9yd2FyZF95ZWFyO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnNob3dfdHlwZSA9PT0gXCLml7ZcIikge1xyXG4gICAgICAgIHRoaXMuZ2V0UHJlSG91cih0aGlzLnNob3dfZGF0YVRpbWUpO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgLy8g5ZCR5ZCO5o6o5pe26Ze0XHJcbiAgICBuZXh0KCkge1xyXG4gICAgICBpZiAodGhpcy5zaG93X3R5cGUgPT09IFwi5pelXCIpIHtcclxuICAgICAgICBsZXQgZGF0ZTEgPSBuZXcgRGF0ZSh0aGlzLm5vd1llYXJNb250aERheS5yZXBsYWNlKC8tL2csIFwiL1wiKSk7XHJcbiAgICAgICAgbGV0IGRhdGUyID0gbmV3IERhdGUodGhpcy5zaG93X2RhdGFUaW1lLnJlcGxhY2UoLy0vZywgXCIvXCIpKTtcclxuICAgICAgICBpZiAoZGF0ZTEgPiBkYXRlMikge1xyXG4gICAgICAgICAgdGhpcy5nZXROZXh0RGF0ZSh0aGlzLnNob3dfZGF0YVRpbWUsICsxKTtcclxuICAgICAgICAgIHRoaXMuZGF5X3RpbWUgPSB0aGlzLnNob3dfZGF0YVRpbWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuJGRpYWxvZy5hbGVydCh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwi5pel5YC85pel5pyf6YCJ5oup5LiN6IO96LaF6L+H5LuK5aSpXCIsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG93X3R5cGUgPT09IFwi5pyIXCIpIHtcclxuICAgICAgICB0aGlzLmdldEludGVydmFsTW9udGgodGhpcy5zaG93X2RhdGFUaW1lLCB0aGlzLm5vd1llYXJNb250aCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaW50ZXJ2YWxNb250aCA+IDApIHtcclxuICAgICAgICAgIHRoaXMuZ2V0TmV4dE1vbnRoKHRoaXMuc2hvd19kYXRhVGltZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuJGRpYWxvZy5hbGVydCh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwi5pyI5YC85pel5pyf6YCJ5oup5LiN6IO96LaF6L+H5b2T5YmN5pyIXCIsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG93X3R5cGUgPT09IFwi5pe2XCIpIHtcclxuICAgICAgICAvLyDojrflj5blvZPliY3ml7bpl7TnmoTlubTmnIjml6Xml7bliIbnp5JcclxuICAgICAgICB0aGlzLmdldE5leHRUaW1lKHRoaXMuc2hvd19kYXRhVGltZSk7XHJcbiAgICAgICAgbGV0IG5vd0RhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGxldCB5ZWFyID0gbm93RGF0ZS5nZXRGdWxsWWVhcigpOyAvL+W5tFxyXG4gICAgICAgIGxldCBtb250aCA9IG5vd0RhdGUuZ2V0TW9udGgoKSArIDE7IC8v5pyIXHJcbiAgICAgICAgbGV0IGRheSA9IG5vd0RhdGUuZ2V0RGF0ZSgpOyAvL+aXpVxyXG4gICAgICAgIGxldCBob3VycyA9IG5vd0RhdGUuZ2V0SG91cnMoKTsgLy/lsI/ml7ZcclxuICAgICAgICBsZXQgTWludXRlcyA9IG5vd0RhdGUuZ2V0TWludXRlcygpOyAvL+WIhlxyXG4gICAgICAgIGxldCBTZWNvbmRzID0gbm93RGF0ZS5nZXRTZWNvbmRzKCk7XHJcbiAgICAgICAgbW9udGggPSBtb250aCA8IDEwID8gXCIwXCIgKyBtb250aCA6IG1vbnRoO1xyXG4gICAgICAgIGRheSA9IGRheSA8IDEwID8gXCIwXCIgKyBkYXkgOiBkYXk7XHJcbiAgICAgICAgaG91cnMgPSBob3VycyA8IDEwID8gXCIwXCIgKyBob3VycyA6IGhvdXJzO1xyXG4gICAgICAgIE1pbnV0ZXMgPSBNaW51dGVzIDwgMTAgPyBcIjBcIiArIE1pbnV0ZXMgOiBNaW51dGVzO1xyXG4gICAgICAgIFNlY29uZHMgPSBTZWNvbmRzIDwgMTAgPyBcIjBcIiArIFNlY29uZHMgOiBTZWNvbmRzO1xyXG4gICAgICAgIGxldCBwcmVzZW50X3RpbWUgPSB5ZWFyICsgXCItXCIgKyBtb250aCArIFwiLVwiICsgZGF5ICsgXCIgXCIgKyBob3VycyArIFwiOlwiICsgTWludXRlcyArIFwiOlwiICsgU2Vjb25kcztcclxuXHJcbiAgICAgICAgbGV0IHN0YXJ0X3RpbWUgPSBwcmVzZW50X3RpbWUucmVwbGFjZSgvLXxcXHN8OnxcXC8vZywgXCJcIik7XHJcbiAgICAgICAgdmFyIGVuZF90aW1lID0gdGhpcy5lbmRfdGltZTIucmVwbGFjZSgvLXxcXHN8OnxcXC8vZywgXCJcIik7XHJcbiAgICAgICAgaWYgKE51bWJlcihzdGFydF90aW1lKSA+IE51bWJlcihlbmRfdGltZSkpIHtcclxuICAgICAgICAgIHRoaXMuZ2V0TmV4dEhvdXIodGhpcy5zaG93X2RhdGFUaW1lKTtcclxuICAgICAgICAgIHRoaXMudGltZSA9IHRoaXMuc2hvd19kYXRhVGltZSArIFwiOjAwXCI7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuJGRpYWxvZy5hbGVydCh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwi5pe26Ze05q616YCJ5oup5LiN6IO96LaF6L+H5b2T5YmN5pe26Ze0XCIsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG93X3R5cGUgPT09IFwi5bm0XCIpIHtcclxuICAgICAgICBsZXQgbmV4dF95ZWFyID0gTnVtYmVyKHRoaXMuc2hvd19kYXRhVGltZSkgKyAxO1xyXG4gICAgICAgIGlmIChuZXh0X3llYXIgPiB0aGlzLm5vd1llYXIpIHtcclxuICAgICAgICAgIHRoaXMuJGRpYWxvZy5hbGVydCh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwi5bm05YC86YCJ5oup5LiN6IO96LaF6L+H5b2T5YmN5bm0XCIsXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zaG93X2RhdGFUaW1lID0gbmV4dF95ZWFyO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8vIOWJjeS4gOWkqeaIluiAheWQjuS4gOWkqeiuoeeul+aWueazlVxyXG4gICAgZ2V0TmV4dERhdGUoZGF0ZSwgZGF5KSB7XHJcbiAgICAgIHZhciBkZCA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgICBkZC5zZXREYXRlKGRkLmdldERhdGUoKSArIGRheSk7XHJcbiAgICAgIHZhciB5ID0gZGQuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgdmFyIG0gPSBkZC5nZXRNb250aCgpICsgMSA8IDEwID8gXCIwXCIgKyAoZGQuZ2V0TW9udGgoKSArIDEpIDogZGQuZ2V0TW9udGgoKSArIDE7XHJcbiAgICAgIHZhciBkID0gZGQuZ2V0RGF0ZSgpIDwgMTAgPyBcIjBcIiArIGRkLmdldERhdGUoKSA6IGRkLmdldERhdGUoKTtcclxuICAgICAgdGhpcy5zaG93X2RhdGFUaW1lID0geSArIFwiLVwiICsgbSArIFwiLVwiICsgZDtcclxuICAgIH0sXHJcbiAgICAvLyDojrflj5bkuIrkuIDkuKrmnIhcclxuICAgIGdldFByZU1vbnRoKGRhdGUpIHtcclxuICAgICAgdmFyIGFyciA9IGRhdGUuc3BsaXQoXCItXCIpO1xyXG4gICAgICB2YXIgeWVhciA9IGFyclswXTsgLy/ojrflj5blvZPliY3ml6XmnJ/nmoTlubTku71cclxuICAgICAgdmFyIG1vbnRoID0gYXJyWzFdOyAvL+iOt+WPluW9k+WJjeaXpeacn+eahOaciOS7vVxyXG4gICAgICB2YXIgeWVhcjIgPSB5ZWFyO1xyXG4gICAgICB2YXIgbW9udGgyID0gcGFyc2VJbnQobW9udGgpIC0gMTtcclxuICAgICAgaWYgKG1vbnRoMiA9PSAwKSB7XHJcbiAgICAgICAgLy/lpoLmnpzmmK8x5pyI5Lu977yM5YiZ5Y+W5LiK5LiA5bm055qEMTLmnIjku71cclxuICAgICAgICB5ZWFyMiA9IHBhcnNlSW50KHllYXIyKSAtIDE7XHJcbiAgICAgICAgbW9udGgyID0gMTI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKG1vbnRoMiA8IDEwKSB7XHJcbiAgICAgICAgbW9udGgyID0gXCIwXCIgKyBtb250aDI7IC8v5pyI5Lu95aGr6KGl5oiQMuS9jeOAglxyXG4gICAgICB9XHJcbiAgICAgIHZhciB0MiA9IHllYXIyICsgXCItXCIgKyBtb250aDI7XHJcbiAgICAgIHRoaXMuc2hvd19kYXRhVGltZSA9IHQyO1xyXG4gICAgfSxcclxuICAgIC8vIOiOt+WPluS4i+S4gOS4quaciFxyXG4gICAgZ2V0TmV4dE1vbnRoKGRhdGUpIHtcclxuICAgICAgdmFyIGFyciA9IGRhdGUuc3BsaXQoXCItXCIpO1xyXG4gICAgICB2YXIgeWVhciA9IGFyclswXTsgLy/ojrflj5blvZPliY3ml6XmnJ/nmoTlubTku71cclxuICAgICAgdmFyIG1vbnRoID0gYXJyWzFdOyAvL+iOt+WPluW9k+WJjeaXpeacn+eahOaciOS7vVxyXG4gICAgICB2YXIgeWVhcjIgPSB5ZWFyO1xyXG4gICAgICB2YXIgbW9udGgyID0gcGFyc2VJbnQobW9udGgpICsgMTtcclxuICAgICAgaWYgKG1vbnRoMiA9PSAxMykge1xyXG4gICAgICAgIHllYXIyID0gcGFyc2VJbnQoeWVhcjIpICsgMTtcclxuICAgICAgICBtb250aDIgPSAxO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChtb250aDIgPCAxMCkge1xyXG4gICAgICAgIG1vbnRoMiA9IFwiMFwiICsgbW9udGgyO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgdDIgPSB5ZWFyMiArIFwiLVwiICsgbW9udGgyO1xyXG4gICAgICB0aGlzLnNob3dfZGF0YVRpbWUgPSB0MjtcclxuICAgIH0sXHJcbiAgICAvLyDojrflj5bkuIrkuIDkuKrml7bpl7TmrrUoNOWwj+aXtilcclxuICAgIGdldFByZUhvdXIoZGF0ZSkge1xyXG4gICAgICBsZXQgc2R0aW1lMSA9IG5ldyBEYXRlKGRhdGUgKyBcIjowMFwiKTtcclxuICAgICAgbGV0IHNkdGltZTIgPSBzZHRpbWUxLnNldEhvdXJzKHNkdGltZTEuZ2V0SG91cnMoKSAtIDQpOyAvL+Wwj+aXtlxyXG4gICAgICBsZXQgTmV3RGF0ZSA9IG5ldyBEYXRlKHNkdGltZTIpO1xyXG4gICAgICBsZXQgeWVhciA9IE5ld0RhdGUuZ2V0RnVsbFllYXIoKTsgLy/lubRcclxuICAgICAgbGV0IG1vbnRoID0gTmV3RGF0ZS5nZXRNb250aCgpICsgMTsgLy/mnIhcclxuICAgICAgbGV0IGRheSA9IE5ld0RhdGUuZ2V0RGF0ZSgpOyAvL+aXpVxyXG4gICAgICBsZXQgaG91cnMgPSBOZXdEYXRlLmdldEhvdXJzKCk7IC8v5bCP5pe2XHJcbiAgICAgIGxldCBNaW51dGVzID0gTmV3RGF0ZS5nZXRNaW51dGVzKCk7IC8v5YiGXHJcbiAgICAgIGxldCBTZWNvbmRzID0gTmV3RGF0ZS5nZXRTZWNvbmRzKCk7XHJcbiAgICAgIG1vbnRoID0gbW9udGggPCAxMCA/IFwiMFwiICsgbW9udGggOiBtb250aDtcclxuICAgICAgZGF5ID0gZGF5IDwgMTAgPyBcIjBcIiArIGRheSA6IGRheTtcclxuICAgICAgaG91cnMgPSBob3VycyA8IDEwID8gXCIwXCIgKyBob3VycyA6IGhvdXJzO1xyXG4gICAgICBNaW51dGVzID0gTWludXRlcyA8IDEwID8gXCIwXCIgKyBNaW51dGVzIDogTWludXRlcztcclxuICAgICAgU2Vjb25kcyA9IFNlY29uZHMgPCAxMCA/IFwiMFwiICsgU2Vjb25kcyA6IFNlY29uZHM7XHJcbiAgICAgIHRoaXMuc2hvd19kYXRhVGltZSA9IHllYXIgKyBcIi1cIiArIG1vbnRoICsgXCItXCIgKyBkYXkgKyBcIiBcIiArIGhvdXJzICsgXCI6XCIgKyBNaW51dGVzO1xyXG4gICAgfSxcclxuICAgIC8vIOiOt+WPluS4i+S4gOS4quaXtumXtOautSg05bCP5pe2KVxyXG4gICAgZ2V0TmV4dEhvdXIoZGF0ZSkge1xyXG4gICAgICBsZXQgc2R0aW1lMSA9IG5ldyBEYXRlKGRhdGUgKyBcIjowMFwiKTtcclxuICAgICAgbGV0IHNkdGltZTIgPSBzZHRpbWUxLnNldEhvdXJzKHNkdGltZTEuZ2V0SG91cnMoKSArIDQpOyAvL+Wwj+aXtlxyXG4gICAgICBsZXQgTmV3RGF0ZSA9IG5ldyBEYXRlKHNkdGltZTIpO1xyXG4gICAgICBsZXQgeWVhciA9IE5ld0RhdGUuZ2V0RnVsbFllYXIoKTsgLy/lubRcclxuICAgICAgbGV0IG1vbnRoID0gTmV3RGF0ZS5nZXRNb250aCgpICsgMTsgLy/mnIhcclxuICAgICAgbGV0IGRheSA9IE5ld0RhdGUuZ2V0RGF0ZSgpOyAvL+aXpVxyXG4gICAgICBsZXQgaG91cnMgPSBOZXdEYXRlLmdldEhvdXJzKCk7IC8v5bCP5pe2XHJcbiAgICAgIGxldCBNaW51dGVzID0gTmV3RGF0ZS5nZXRNaW51dGVzKCk7IC8v5YiGXHJcbiAgICAgIGxldCBTZWNvbmRzID0gTmV3RGF0ZS5nZXRTZWNvbmRzKCk7XHJcbiAgICAgIG1vbnRoID0gbW9udGggPCAxMCA/IFwiMFwiICsgbW9udGggOiBtb250aDtcclxuICAgICAgZGF5ID0gZGF5IDwgMTAgPyBcIjBcIiArIGRheSA6IGRheTtcclxuICAgICAgaG91cnMgPSBob3VycyA8IDEwID8gXCIwXCIgKyBob3VycyA6IGhvdXJzO1xyXG4gICAgICBNaW51dGVzID0gTWludXRlcyA8IDEwID8gXCIwXCIgKyBNaW51dGVzIDogTWludXRlcztcclxuICAgICAgU2Vjb25kcyA9IFNlY29uZHMgPCAxMCA/IFwiMFwiICsgU2Vjb25kcyA6IFNlY29uZHM7XHJcbiAgICAgIHRoaXMuc2hvd19kYXRhVGltZSA9IHllYXIgKyBcIi1cIiArIG1vbnRoICsgXCItXCIgKyBkYXkgKyBcIiBcIiArIGhvdXJzICsgXCI6XCIgKyBNaW51dGVzO1xyXG4gICAgfSxcclxuICAgIGdldE5leHRUaW1lKGRhdGUpIHtcclxuICAgICAgbGV0IHNkdGltZTEgPSBuZXcgRGF0ZShkYXRlICsgXCI6MDBcIik7XHJcbiAgICAgIGxldCBzZHRpbWUyID0gc2R0aW1lMS5zZXRIb3VycyhzZHRpbWUxLmdldEhvdXJzKCkgKyA0KTsgLy/lsI/ml7ZcclxuICAgICAgbGV0IE5ld0RhdGUgPSBuZXcgRGF0ZShzZHRpbWUyKTtcclxuICAgICAgbGV0IHllYXIgPSBOZXdEYXRlLmdldEZ1bGxZZWFyKCk7IC8v5bm0XHJcbiAgICAgIGxldCBtb250aCA9IE5ld0RhdGUuZ2V0TW9udGgoKSArIDE7IC8v5pyIXHJcbiAgICAgIGxldCBkYXkgPSBOZXdEYXRlLmdldERhdGUoKTsgLy/ml6VcclxuICAgICAgbGV0IGhvdXJzID0gTmV3RGF0ZS5nZXRIb3VycygpOyAvL+Wwj+aXtlxyXG4gICAgICBsZXQgTWludXRlcyA9IE5ld0RhdGUuZ2V0TWludXRlcygpOyAvL+WIhlxyXG4gICAgICBsZXQgU2Vjb25kcyA9IE5ld0RhdGUuZ2V0U2Vjb25kcygpO1xyXG4gICAgICBtb250aCA9IG1vbnRoIDwgMTAgPyBcIjBcIiArIG1vbnRoIDogbW9udGg7XHJcbiAgICAgIGRheSA9IGRheSA8IDEwID8gXCIwXCIgKyBkYXkgOiBkYXk7XHJcbiAgICAgIGhvdXJzID0gaG91cnMgPCAxMCA/IFwiMFwiICsgaG91cnMgOiBob3VycztcclxuICAgICAgTWludXRlcyA9IE1pbnV0ZXMgPCAxMCA/IFwiMFwiICsgTWludXRlcyA6IE1pbnV0ZXM7XHJcbiAgICAgIFNlY29uZHMgPSBTZWNvbmRzIDwgMTAgPyBcIjBcIiArIFNlY29uZHMgOiBTZWNvbmRzO1xyXG4gICAgICB0aGlzLmVuZF90aW1lMiA9IHllYXIgKyBcIi1cIiArIG1vbnRoICsgXCItXCIgKyBkYXkgKyBcIiBcIiArIGhvdXJzICsgXCI6XCIgKyBNaW51dGVzICsgXCI6XCIgKyBTZWNvbmRzO1xyXG4gICAgfSxcclxuICAgIC8vIOiOt+WPluS4pOS4quaciOeahOaXtumXtOW3rlxyXG4gICAgZ2V0SW50ZXJ2YWxNb250aChzdGFydERhdGVTdHIsIGVuZERhdGVTdHIpIHtcclxuICAgICAgaWYgKHN0YXJ0RGF0ZVN0ciA9PSBudWxsIHx8IGVuZERhdGVTdHIgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiAzO1xyXG4gICAgICB9XHJcbiAgICAgIHZhciBzdGFydERhdGUgPSBuZXcgRGF0ZShzdGFydERhdGVTdHIpO1xyXG4gICAgICB2YXIgZW5kRGF0ZSA9IG5ldyBEYXRlKGVuZERhdGVTdHIpO1xyXG4gICAgICB2YXIgc3RhcnRNb250aCA9IHN0YXJ0RGF0ZS5nZXRNb250aCgpO1xyXG4gICAgICB2YXIgZW5kTW9udGggPSBlbmREYXRlLmdldE1vbnRoKCk7XHJcbiAgICAgIHZhciBpbnRlcnZhbE1vbnRoID0gZW5kRGF0ZS5nZXRGdWxsWWVhcigpICogMTIgKyBlbmRNb250aCAtIChzdGFydERhdGUuZ2V0RnVsbFllYXIoKSAqIDEyICsgc3RhcnRNb250aCk7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWxNb250aCA9IGludGVydmFsTW9udGg7XHJcbiAgICB9LFxyXG4gICAgLy8g6I635Y+W5b2T5YmN5pe26Ze0XHJcbiAgICBnZXRfcHJlc2VudF9kYXRhKCkge1xyXG4gICAgICBsZXQgbm93RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIGxldCB5ZWFyID0gbm93RGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICBsZXQgbW9udGggPSBub3dEYXRlLmdldE1vbnRoKCkgKyAxO1xyXG4gICAgICBsZXQgZGF5ID0gbm93RGF0ZS5nZXREYXRlKCk7XHJcbiAgICAgIGxldCBob3VycyA9IG5vd0RhdGUuZ2V0SG91cnMoKTtcclxuICAgICAgaWYgKGhvdXJzIDwgNCAmJiBob3VycyA+PSAwKSB7XHJcbiAgICAgICAgaG91cnMgPSAwO1xyXG4gICAgICB9IGVsc2UgaWYgKGhvdXJzIDwgOCAmJiBob3VycyA+PSA0KSB7XHJcbiAgICAgICAgaG91cnMgPSA0O1xyXG4gICAgICB9IGVsc2UgaWYgKGhvdXJzIDwgMTIgJiYgaG91cnMgPj0gOCkge1xyXG4gICAgICAgIGhvdXJzID0gODtcclxuICAgICAgfSBlbHNlIGlmIChob3VycyA8IDE2ICYmIGhvdXJzID49IDEyKSB7XHJcbiAgICAgICAgaG91cnMgPSAxMjtcclxuICAgICAgfSBlbHNlIGlmIChob3VycyA8IDIwICYmIGhvdXJzID49IDE2KSB7XHJcbiAgICAgICAgaG91cnMgPSAxNjtcclxuICAgICAgfSBlbHNlIGlmIChob3VycyA8PSAyMyAmJiBob3VycyA+PSAyMCkge1xyXG4gICAgICAgIGhvdXJzID0gMjA7XHJcbiAgICAgIH1cclxuICAgICAgbW9udGggPSBtb250aCA8IDEwID8gXCIwXCIgKyBtb250aCA6IG1vbnRoO1xyXG4gICAgICBkYXkgPSBkYXkgPCAxMCA/IFwiMFwiICsgZGF5IDogZGF5O1xyXG4gICAgICBob3VycyA9IGhvdXJzIDwgMTAgPyBcIjBcIiArIGhvdXJzIDogaG91cnM7XHJcbiAgICAgIHRoaXMubm93WWVhciA9IHllYXI7XHJcbiAgICAgIHRoaXMubm93WWVhck1vbnRoID0geWVhciArIFwiLVwiICsgbW9udGg7XHJcbiAgICAgIHRoaXMubm93WWVhck1vbnRoRGF5ID0geWVhciArIFwiLVwiICsgbW9udGggKyBcIi1cIiArIGRheTtcclxuICAgICAgdGhpcy5ub3dZZWFyTW9udGhEYXlIb3VycyA9IHllYXIgKyBcIi1cIiArIG1vbnRoICsgXCItXCIgKyBkYXkgKyBcIiBcIiArIGhvdXJzICsgXCI6MDBcIjtcclxuICAgICAgaWYgKHRoaXMuc2hvd190eXBlID09IFwi5pe2XCIpIHtcclxuICAgICAgICB0aGlzLnNob3dfZGF0YVRpbWUgPSB0aGlzLm5vd1llYXJNb250aERheUhvdXJzO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc2hvd190eXBlID09IFwi5pelXCIpIHtcclxuICAgICAgICB0aGlzLnNob3dfZGF0YVRpbWUgPSB0aGlzLm5vd1llYXJNb250aERheTtcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLnNob3dfdHlwZSA9PSBcIuaciFwiKSB7XHJcbiAgICAgICAgdGhpcy5zaG93X2RhdGFUaW1lID0gdGhpcy5ub3dZZWFyTW9udGg7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5zaG93X3R5cGUgPT0gXCLlubRcIikge1xyXG4gICAgICAgIHRoaXMuc2hvd19kYXRhVGltZSA9IHRoaXMubm93WWVhcjtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9LFxyXG5cdGRlc3Ryb3llZCgpIHtcclxuXHRcdGZpcnN0ID0gdHJ1ZTtcclxuXHR9LFxyXG5cdHdhdGNoOiB7XHJcbiAgICBvcHRpb24odmFsKSB7XHJcbiAgICAgIGlmICh2YWwpIHtcclxuICAgICAgICB0aGlzLnNob3dfdHlwZSA9IHZhbDtcclxuXHRcdFx0XHQvL+iuvue9ruesrOS4gOasoei/m+WFpemhtemdoueahOm7mOiupOaXtumXtFxyXG5cdFx0XHRcdGlmKHRoaXMudGltZSYmZmlyc3Qpe1xyXG5cdFx0XHRcdFx0aWYgKHZhbCA9PT0gXCLml6VcIikge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNob3dfZGF0YVRpbWUgPSBkYXlqcyh0aGlzLnRpbWUpLmZvcm1hdCgnWVlZWS1NTS1ERCcpO1xyXG5cdFx0XHRcdFx0fSBlbHNlIGlmICh2YWwgPT09IFwi5pyIXCIpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5zaG93X2RhdGFUaW1lID0gZGF5anModGhpcy50aW1lKS5mb3JtYXQoJ1lZWVktTU0nKTtcclxuXHRcdFx0XHRcdH0gZWxzZSBpZiAodmFsID09PSBcIuW5tFwiKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMuc2hvd19kYXRhVGltZSA9IGRheWpzKHRoaXMudGltZSkuZm9ybWF0KCdZWVlZJyk7XHJcblx0XHRcdFx0XHR9ZWxzZSBpZih2YWwgPT09J+aXticpe1xyXG5cdFx0XHRcdFx0XHR0aGlzLnNob3dfZGF0YVRpbWUgPSB0aGlzLnRpbWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRmaXJzdCA9IGZhbHNlO1xyXG5cdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0dGhpcy5nZXRfcHJlc2VudF9kYXRhKCk7XHJcblx0XHRcdFx0fVxyXG4gICAgICAgIGlmICh2YWwgPT0gXCLml6VcIikge1xyXG4gICAgICAgICAgdGhpcy5sZWZ0V29yZHMgPSBcIuWJjeS4gOWkqVwiO1xyXG4gICAgICAgICAgdGhpcy5yaWdodFdvcmRzID0gXCLlkI7kuIDlpKlcIjtcclxuICAgICAgICB9IGVsc2UgaWYgKHZhbCA9PSBcIuaciFwiKSB7XHJcbiAgICAgICAgICB0aGlzLmxlZnRXb3JkcyA9IFwi5YmN5LiA5pyIXCI7XHJcbiAgICAgICAgICB0aGlzLnJpZ2h0V29yZHMgPSBcIuWQjuS4gOaciFwiO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodmFsID09IFwi5bm0XCIpIHtcclxuICAgICAgICAgIHRoaXMubGVmdFdvcmRzID0gXCLliY3kuIDlubRcIjtcclxuICAgICAgICAgIHRoaXMucmlnaHRXb3JkcyA9IFwi5ZCO5LiA5bm0XCI7XHJcbiAgICAgICAgfWVsc2UgaWYodmFsPT0n5pe2Jyl7XHJcblx0XHRcdFx0XHR0aGlzLmxlZnRXb3JkcyA9IFwi5YmNNOWwj+aXtlwiO1xyXG5cdFx0XHRcdFx0dGhpcy5yaWdodFdvcmRzID0gXCLlkI405bCP5pe2XCI7XHJcblx0XHRcdFx0fVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgc2hvd19kYXRhVGltZSh2YWwpe1xyXG4gICAgICBpZih2YWwpe1xyXG4gICAgICAgIHRoaXMuJGVtaXQoXCJnZXRUaW1lXCIsdmFsKVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgdGhpcy5zaG93X3R5cGUgPSB0aGlzLm9wdGlvbjtcclxuICAgIGlmICh0aGlzLm9wdGlvbiA9PSBcIuaXpVwiKSB7XHJcbiAgICAgIHRoaXMubGVmdFdvcmRzID0gXCLliY3kuIDlpKlcIjtcclxuICAgICAgdGhpcy5yaWdodFdvcmRzID0gXCLlkI7kuIDlpKlcIjtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5vcHRpb24gPT0gXCLmnIhcIikge1xyXG4gICAgICB0aGlzLmxlZnRXb3JkcyA9IFwi5YmN5LiA5pyIXCI7XHJcbiAgICAgIHRoaXMucmlnaHRXb3JkcyA9IFwi5ZCO5LiA5pyIXCI7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMub3B0aW9uID09IFwi5bm0XCIpIHtcclxuICAgICAgdGhpcy5sZWZ0V29yZHMgPSBcIuWJjeS4gOW5tFwiO1xyXG4gICAgICB0aGlzLnJpZ2h0V29yZHMgPSBcIuWQjuS4gOW5tFwiO1xyXG4gICAgfWVsc2UgaWYodGhpcy5vcHRpb249PSfml7YnKXtcclxuXHRcdFx0XHR0aGlzLmxlZnRXb3JkcyA9IFwi5YmNNOWwj+aXtlwiO1xyXG5cdFx0XHRcdHRoaXMucmlnaHRXb3JkcyA9IFwi5ZCONOWwj+aXtlwiO1xyXG5cdFx0fVxyXG5cdFx0dGhpcy5nZXRfcHJlc2VudF9kYXRhKCk7XHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbi50aW1lU2VsZWN0IHtcclxuICAvKmhlaWdodDogNTBweDsqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLnRpbWUtY29udGVudCB7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgLmljb24ge1xyXG4gICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIH1cclxuICAgIC50aW1lIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjb2xvcjogcmdiYSg2OCwgMTIzLCAyNTIsIDEpO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAubGVmdFdvcmRzLFxyXG4gICAgLnJpZ2h0V29yZHMge1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgIG1hcmdpbjogMCAzcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJ0aW1lU2VsZWN0XCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0aW1lLWNvbnRlbnRcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ2YW4taWNvblwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uXCIsXG4gICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcImFycm93LWxlZnRcIiB9LFxuICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5mb3J3YXJkIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zaG93X3R5cGUgIT0gXCLml7ZcIixcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2hvd190eXBlICE9ICfml7YnXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGVmdFdvcmRzXCIsXG4gICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uZm9yd2FyZCB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5sZWZ0V29yZHMpKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL3RpbWVJbWcucG5nXCIpLCBhbHQ6IFwiXCIgfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpbWVcIiwgb246IHsgY2xpY2s6IF92bS5zZWxlY3QgfSB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5zaG93X2RhdGFUaW1lKSksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zaG93X3R5cGUgIT0gXCLml7ZcIixcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2hvd190eXBlICE9ICfml7YnXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicmlnaHRXb3Jkc1wiLFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm5leHQgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0ucmlnaHRXb3JkcykpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXCJ2YW4taWNvblwiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uXCIsXG4gICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcImFycm93XCIgfSxcbiAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ubmV4dCB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwidmFuLXBvcHVwXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgXCJnZXQtY29udGFpbmVyXCI6IFwiI2FwcFwiLFxuICAgICAgICAgICAgcG9zaXRpb246IFwiYm90dG9tXCIsXG4gICAgICAgICAgICBcInNhZmUtYXJlYS1pbnNldC1ib3R0b21cIjogXCJcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLnNob3dfcGlja2VyLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLnNob3dfcGlja2VyID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaG93X3BpY2tlclwiLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uc2hvd190eXBlID09IFwi5pe2XCJcbiAgICAgICAgICAgID8gX2MoXCJ2YW4tZGF0ZXRpbWUtcGlja2VyXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgZm9ybWF0dGVyOiBfdm0uZm9ybWF0dGVyLFxuICAgICAgICAgICAgICAgICAgdHlwZTogXCJkYXRlaG91clwiLFxuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwi6YCJ5oup5bm05pyI5pel5bCP5pe2XCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBjYW5jZWw6IF92bS5jYW5jZWwsIGNvbmZpcm06IF92bS5jb25maXJtIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hvd0RhdGUsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uc2hvd0RhdGUgPSAkJHZcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNob3dEYXRlXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLnNob3dfdHlwZSA9PSBcIuaXpVwiXG4gICAgICAgICAgICA/IF9jKFwidmFuLWRhdGV0aW1lLXBpY2tlclwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogX3ZtLmZvcm1hdHRlcixcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwiZGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwi6YCJ5oup5bm05pyI5pelXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBjYW5jZWw6IF92bS5jYW5jZWwsIGNvbmZpcm06IF92bS5jb25maXJtIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hvd0RhdGUsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uc2hvd0RhdGUgPSAkJHZcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNob3dEYXRlXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLnNob3dfdHlwZSA9PSBcIuaciFwiXG4gICAgICAgICAgICA/IF9jKFwidmFuLWRhdGV0aW1lLXBpY2tlclwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogX3ZtLmZvcm1hdHRlcixcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwieWVhci1tb250aFwiLFxuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwi6YCJ5oup5bm05pyIXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBjYW5jZWw6IF92bS5jYW5jZWwsIGNvbmZpcm06IF92bS5jb25maXJtIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hvd0RhdGUsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uc2hvd0RhdGUgPSAkJHZcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNob3dEYXRlXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLnNob3dfdHlwZSA9PSBcIuW5tFwiXG4gICAgICAgICAgICA/IF9jKFwidmFuLWRhdGV0aW1lLXBpY2tlclwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIGZvcm1hdHRlcjogX3ZtLmZvcm1hdHRlcixcbiAgICAgICAgICAgICAgICAgIHR5cGU6IFwieWVhclwiLFxuICAgICAgICAgICAgICAgICAgdGl0bGU6IFwi6YCJ5oup5bm0XCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBjYW5jZWw6IF92bS5jYW5jZWwsIGNvbmZpcm06IF92bS5jb25maXJtIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hvd0RhdGUsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uc2hvd0RhdGUgPSAkJHZcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNob3dEYXRlXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCIndXNlIHN0cmljdCc7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi1jYWxsJyk7XG52YXIgdW5jdXJyeVRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZnVuY3Rpb24tdW5jdXJyeS10aGlzJyk7XG52YXIgZml4UmVnRXhwV2VsbEtub3duU3ltYm9sTG9naWMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZml4LXJlZ2V4cC13ZWxsLWtub3duLXN5bWJvbC1sb2dpYycpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FuLW9iamVjdCcpO1xudmFyIGlzTnVsbE9yVW5kZWZpbmVkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW51bGwtb3ItdW5kZWZpbmVkJyk7XG52YXIgcmVxdWlyZU9iamVjdENvZXJjaWJsZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZXF1aXJlLW9iamVjdC1jb2VyY2libGUnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIGFkdmFuY2VTdHJpbmdJbmRleCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hZHZhbmNlLXN0cmluZy1pbmRleCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLWxlbmd0aCcpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLXN0cmluZycpO1xudmFyIGdldE1ldGhvZCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9nZXQtbWV0aG9kJyk7XG52YXIgcmVnRXhwRXhlYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtZXhlYy1hYnN0cmFjdCcpO1xudmFyIHN0aWNreUhlbHBlcnMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvcmVnZXhwLXN0aWNreS1oZWxwZXJzJyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZmFpbHMnKTtcblxudmFyIFVOU1VQUE9SVEVEX1kgPSBzdGlja3lIZWxwZXJzLlVOU1VQUE9SVEVEX1k7XG52YXIgTUFYX1VJTlQzMiA9IDB4RkZGRkZGRkY7XG52YXIgbWluID0gTWF0aC5taW47XG52YXIgcHVzaCA9IHVuY3VycnlUaGlzKFtdLnB1c2gpO1xudmFyIHN0cmluZ1NsaWNlID0gdW5jdXJyeVRoaXMoJycuc2xpY2UpO1xuXG4vLyBDaHJvbWUgNTEgaGFzIGEgYnVnZ3kgXCJzcGxpdFwiIGltcGxlbWVudGF0aW9uIHdoZW4gUmVnRXhwI2V4ZWMgIT09IG5hdGl2ZUV4ZWNcbi8vIFdlZXggSlMgaGFzIGZyb3plbiBidWlsdC1pbiBwcm90b3R5cGVzLCBzbyB1c2UgdHJ5IC8gY2F0Y2ggd3JhcHBlclxudmFyIFNQTElUX1dPUktTX1dJVEhfT1ZFUldSSVRURU5fRVhFQyA9ICFmYWlscyhmdW5jdGlvbiAoKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWdleHAvbm8tZW1wdHktZ3JvdXAgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgdmFyIHJlID0gLyg/OikvO1xuICB2YXIgb3JpZ2luYWxFeGVjID0gcmUuZXhlYztcbiAgcmUuZXhlYyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG9yaWdpbmFsRXhlYy5hcHBseSh0aGlzLCBhcmd1bWVudHMpOyB9O1xuICB2YXIgcmVzdWx0ID0gJ2FiJy5zcGxpdChyZSk7XG4gIHJldHVybiByZXN1bHQubGVuZ3RoICE9PSAyIHx8IHJlc3VsdFswXSAhPT0gJ2EnIHx8IHJlc3VsdFsxXSAhPT0gJ2InO1xufSk7XG5cbnZhciBCVUdHWSA9ICdhYmJjJy5zcGxpdCgvKGIpKi8pWzFdID09PSAnYycgfHxcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlZ2V4cC9uby1lbXB0eS1ncm91cCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICAndGVzdCcuc3BsaXQoLyg/OikvLCAtMSkubGVuZ3RoICE9PSA0IHx8XG4gICdhYicuc3BsaXQoLyg/OmFiKSovKS5sZW5ndGggIT09IDIgfHxcbiAgJy4nLnNwbGl0KC8oLj8pKC4/KS8pLmxlbmd0aCAhPT0gNCB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVnZXhwL25vLWVtcHR5LWNhcHR1cmluZy1ncm91cCwgcmVnZXhwL25vLWVtcHR5LWdyb3VwIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gICcuJy5zcGxpdCgvKCkoKS8pLmxlbmd0aCA+IDEgfHxcbiAgJycuc3BsaXQoLy4/LykubGVuZ3RoO1xuXG4vLyBAQHNwbGl0IGxvZ2ljXG5maXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYygnc3BsaXQnLCBmdW5jdGlvbiAoU1BMSVQsIG5hdGl2ZVNwbGl0LCBtYXliZUNhbGxOYXRpdmUpIHtcbiAgdmFyIGludGVybmFsU3BsaXQgPSAnMCcuc3BsaXQodW5kZWZpbmVkLCAwKS5sZW5ndGggPyBmdW5jdGlvbiAoc2VwYXJhdG9yLCBsaW1pdCkge1xuICAgIHJldHVybiBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCAmJiBsaW1pdCA9PT0gMCA/IFtdIDogY2FsbChuYXRpdmVTcGxpdCwgdGhpcywgc2VwYXJhdG9yLCBsaW1pdCk7XG4gIH0gOiBuYXRpdmVTcGxpdDtcblxuICByZXR1cm4gW1xuICAgIC8vIGBTdHJpbmcucHJvdG90eXBlLnNwbGl0YCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXN0cmluZy5wcm90b3R5cGUuc3BsaXRcbiAgICBmdW5jdGlvbiBzcGxpdChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgICB2YXIgTyA9IHJlcXVpcmVPYmplY3RDb2VyY2libGUodGhpcyk7XG4gICAgICB2YXIgc3BsaXR0ZXIgPSBpc051bGxPclVuZGVmaW5lZChzZXBhcmF0b3IpID8gdW5kZWZpbmVkIDogZ2V0TWV0aG9kKHNlcGFyYXRvciwgU1BMSVQpO1xuICAgICAgcmV0dXJuIHNwbGl0dGVyXG4gICAgICAgID8gY2FsbChzcGxpdHRlciwgc2VwYXJhdG9yLCBPLCBsaW1pdClcbiAgICAgICAgOiBjYWxsKGludGVybmFsU3BsaXQsIHRvU3RyaW5nKE8pLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgICB9LFxuICAgIC8vIGBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdYCBtZXRob2RcbiAgICAvLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLXJlZ2V4cC5wcm90b3R5cGUtQEBzcGxpdFxuICAgIC8vXG4gICAgLy8gTk9URTogVGhpcyBjYW5ub3QgYmUgcHJvcGVybHkgcG9seWZpbGxlZCBpbiBlbmdpbmVzIHRoYXQgZG9uJ3Qgc3VwcG9ydFxuICAgIC8vIHRoZSAneScgZmxhZy5cbiAgICBmdW5jdGlvbiAoc3RyaW5nLCBsaW1pdCkge1xuICAgICAgdmFyIHJ4ID0gYW5PYmplY3QodGhpcyk7XG4gICAgICB2YXIgUyA9IHRvU3RyaW5nKHN0cmluZyk7XG5cbiAgICAgIGlmICghQlVHR1kpIHtcbiAgICAgICAgdmFyIHJlcyA9IG1heWJlQ2FsbE5hdGl2ZShpbnRlcm5hbFNwbGl0LCByeCwgUywgbGltaXQsIGludGVybmFsU3BsaXQgIT09IG5hdGl2ZVNwbGl0KTtcbiAgICAgICAgaWYgKHJlcy5kb25lKSByZXR1cm4gcmVzLnZhbHVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3RvcihyeCwgUmVnRXhwKTtcbiAgICAgIHZhciB1bmljb2RlTWF0Y2hpbmcgPSByeC51bmljb2RlO1xuICAgICAgdmFyIGZsYWdzID0gKHJ4Lmlnbm9yZUNhc2UgPyAnaScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgKHJ4Lm11bHRpbGluZSA/ICdtJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAocngudW5pY29kZSA/ICd1JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAoVU5TVVBQT1JURURfWSA/ICdnJyA6ICd5Jyk7XG4gICAgICAvLyBeKD8gKyByeCArICkgaXMgbmVlZGVkLCBpbiBjb21iaW5hdGlvbiB3aXRoIHNvbWUgUyBzbGljaW5nLCB0b1xuICAgICAgLy8gc2ltdWxhdGUgdGhlICd5JyBmbGFnLlxuICAgICAgdmFyIHNwbGl0dGVyID0gbmV3IEMoVU5TVVBQT1JURURfWSA/ICdeKD86JyArIHJ4LnNvdXJjZSArICcpJyA6IHJ4LCBmbGFncyk7XG4gICAgICB2YXIgbGltID0gbGltaXQgPT09IHVuZGVmaW5lZCA/IE1BWF9VSU5UMzIgOiBsaW1pdCA+Pj4gMDtcbiAgICAgIGlmIChsaW0gPT09IDApIHJldHVybiBbXTtcbiAgICAgIGlmIChTLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHJlZ0V4cEV4ZWMoc3BsaXR0ZXIsIFMpID09PSBudWxsID8gW1NdIDogW107XG4gICAgICB2YXIgcCA9IDA7XG4gICAgICB2YXIgcSA9IDA7XG4gICAgICB2YXIgQSA9IFtdO1xuICAgICAgd2hpbGUgKHEgPCBTLmxlbmd0aCkge1xuICAgICAgICBzcGxpdHRlci5sYXN0SW5kZXggPSBVTlNVUFBPUlRFRF9ZID8gMCA6IHE7XG4gICAgICAgIHZhciB6ID0gcmVnRXhwRXhlYyhzcGxpdHRlciwgVU5TVVBQT1JURURfWSA/IHN0cmluZ1NsaWNlKFMsIHEpIDogUyk7XG4gICAgICAgIHZhciBlO1xuICAgICAgICBpZiAoXG4gICAgICAgICAgeiA9PT0gbnVsbCB8fFxuICAgICAgICAgIChlID0gbWluKHRvTGVuZ3RoKHNwbGl0dGVyLmxhc3RJbmRleCArIChVTlNVUFBPUlRFRF9ZID8gcSA6IDApKSwgUy5sZW5ndGgpKSA9PT0gcFxuICAgICAgICApIHtcbiAgICAgICAgICBxID0gYWR2YW5jZVN0cmluZ0luZGV4KFMsIHEsIHVuaWNvZGVNYXRjaGluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcHVzaChBLCBzdHJpbmdTbGljZShTLCBwLCBxKSk7XG4gICAgICAgICAgaWYgKEEubGVuZ3RoID09PSBsaW0pIHJldHVybiBBO1xuICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IHoubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICAgICAgICBwdXNoKEEsIHpbaV0pO1xuICAgICAgICAgICAgaWYgKEEubGVuZ3RoID09PSBsaW0pIHJldHVybiBBO1xuICAgICAgICAgIH1cbiAgICAgICAgICBxID0gcCA9IGU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHB1c2goQSwgc3RyaW5nU2xpY2UoUywgcCkpO1xuICAgICAgcmV0dXJuIEE7XG4gICAgfVxuICBdO1xufSwgQlVHR1kgfHwgIVNQTElUX1dPUktTX1dJVEhfT1ZFUldSSVRURU5fRVhFQywgVU5TVVBQT1JURURfWSk7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnRpbWVTZWxlY3RbZGF0YS12LTVjNTA3ZTg1XSB7XFxuICAvKmhlaWdodDogNTBweDsqL1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi50aW1lU2VsZWN0IC50aW1lLWNvbnRlbnRbZGF0YS12LTVjNTA3ZTg1XSB7XFxuICBsaW5lLWhlaWdodDogNTBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4udGltZVNlbGVjdCAudGltZS1jb250ZW50IC5pY29uW2RhdGEtdi01YzUwN2U4NV0ge1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG59XFxuLnRpbWVTZWxlY3QgLnRpbWUtY29udGVudCBpbWdbZGF0YS12LTVjNTA3ZTg1XSB7XFxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICBtYXJnaW4tbGVmdDogMjBweDtcXG59XFxuLnRpbWVTZWxlY3QgLnRpbWUtY29udGVudCAudGltZVtkYXRhLXYtNWM1MDdlODVdIHtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjNDQ3YmZjO1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbn1cXG4udGltZVNlbGVjdCAudGltZS1jb250ZW50IC5sZWZ0V29yZHNbZGF0YS12LTVjNTA3ZTg1XSxcXG4udGltZVNlbGVjdCAudGltZS1jb250ZW50IC5yaWdodFdvcmRzW2RhdGEtdi01YzUwN2U4NV0ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIG1hcmdpbjogMCAzcHg7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGltZVNlbGVjdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YzUwN2U4NSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjUyMzM0YjViXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGltZVNlbGVjdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YzUwN2U4NSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3RpbWVTZWxlY3QudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWM1MDdlODUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbiAgICAgaWYobmV3Q29udGVudC5fX2VzTW9kdWxlKSBuZXdDb250ZW50ID0gbmV3Q29udGVudC5kZWZhdWx0O1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XHJcbmxldCBiYXNlVXJsID0gXCIvd2F0ZXJcIjsgLy/mnI3liqHlmajmmK93YXRlcuexu++8jOacrOWcsOayoeacieWKoFxyXG4vKlxyXG7lpKfnq57otZvmsLTmsrvnkIbmjpLlkI1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5raW5nKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9jb21wZXRpdGlvbi9yYW5raW5nXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuLypcclxu5rC0546v5aKD5bm05bqV5o6S5ZCN5YiX6KGoXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24geWVhclJhbmtMaXN0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9jb21wZXRpdGlvbi95ZWFyUmFua0xpc3RcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG4vKlxyXG7lpKfnq57otZvmsLTmsrvnkIbmjpLlkI3or6bmg4VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5rTGlzdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvY29tcGV0aXRpb24vcmFua0xpc3RcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG4vKlxyXG7lpKfnq57otZvmsLTmsrvnkIbmjpLlkI3lkITljLrln5/or6bmg4VcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByYW5rRGV0YWlsKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9jb21wZXRpdGlvbi9yYW5rRGV0YWlsXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuLypcclxuIOWQhOWOv++8iOW4gu+8ieWMuuOAgeW8gOWPkeW6puWBh+WbreWMuuWto+W6puWcsOihqOawtOeOr+Wig+i0qOmHj+ivhOWIhuivpuaDhVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNjYWxlTWFya3MoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL2NvbXBldGl0aW9uL3NjYWxlTWFya3NcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG4vKlxyXG7lhajluILmsLTnjq/looPmpoLlhrXmgLvkvZPmg4XlhrVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXRlckJhc2ljRGF0YShkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvQmFzaWNEYXRhXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuLypcclxu5pat6Z2i5L+h5oGvXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2VjdGlvbkluZm8oZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyQmFzaWNEYXRhL3NlY3Rpb25JbmZvXCIsXHJcbiAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9KTtcclxufVxyXG4vKlxyXG7mlq3pnaLliJfooagtLeWbveOAgeecgeOAgeW4glxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNlY3Rpb25MaXN0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9CYXNpY0RhdGEvc2VjdGlvbkxpc3RcIixcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmlq3pnaLkv6Hmga8tLeWbveOAgeecgeOAgeW4glxyXG5leHBvcnQgZnVuY3Rpb24gc3RhdGlvbkluZm8oZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3NlY3Rpb25cIixcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmlq3pnaLkv6Hmga8tLeafpeivouS4iua4uOi2heagh1xyXG5leHBvcnQgZnVuY3Rpb24gdXBTdHJlYW1PdmVyKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9zZWN0aW9uL3VwU3RyZWFtT3ZlclwiLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaWremdouS/oeaBry0t5p+l6K+i5rmW5bqT55qE55uR5rWL5pat6Z2iXHJcbmV4cG9ydCBmdW5jdGlvbiBsYWtlU2l0ZUxpc3QoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3NlY3Rpb24vbGFrZVNpdGVMaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaWremdoi3msrPmtYHml7blgLzmm7Lnur9cclxuZXhwb3J0IGZ1bmN0aW9uIHF1ZXJ5U2VjdGlvbkluZm8oZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3NlY3Rpb24vcXVlcnlTZWN0aW9uSW5mb1wiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmlq3pnaLkv6Hmga8tLeWbveOAgeecgeOAgeW4glxyXG5leHBvcnQgZnVuY3Rpb24gc3RhdGlvbkRlcyhkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvc2VjdGlvbi9zaXRlRGV0YWlsXCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOays+a1geivpuaDhS3msrPpgZPor6bmg4VcclxuZXhwb3J0IGZ1bmN0aW9uIHJpdmVyQ291cnNlRGV0YWlsKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9CYXNpY0RhdGEvcml2ZXJDb3Vyc2VEZXRhaWxcIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5pat6Z2iLeaXtuWAvOabsue6v1xyXG5leHBvcnQgZnVuY3Rpb24gaG91ckxpbmUoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3NlY3Rpb24vY3VydmVcIixcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmlq3pnaLkv6Hmga8tLeWRqOi+uea2ieawtOaxoeafk+a6kFxyXG5leHBvcnQgZnVuY3Rpb24gd2F0ZXJQb2xsdXRpb24oZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3NlY3Rpb24vcG9sbHV0aW9uXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1cHN0cmVhbVBvbGx1dGlvbihkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvc2VjdGlvbi91cHN0cmVhbVBvbGx1dGlvblwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmlq3pnaLkv6Hmga8tLeS4iua4uOaWremdouWIl+ihqFxyXG4vLyBleHBvcnQgZnVuY3Rpb24gZ2V0VXBMaXN0KGRhdGEpIHtcclxuLy8gICByZXR1cm4gcmVxdWVzdCh7XHJcbi8vICAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9zZWN0aW9uL3VwU3RyZWFtXCIsXHJcbi8vICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4vLyAgICAgZGF0YTogZGF0YSxcclxuLy8gICB9KTtcclxuLy8gfVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXBMaXN0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9zZWN0aW9uL3Vwc3RyZWFtU2VjdGlvblwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmlq3pnaLkv6Hmga8tLeS4iua4uOawtOW6k1xyXG5leHBvcnQgZnVuY3Rpb24gdXBTdHJlYW1XYXRlcihkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvc2VjdGlvbi91cHN0cmVhbVdhdGVyXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaWremdouS/oeaBry0t5LiK5ri45o6S5Y+jXHJcbmV4cG9ydCBmdW5jdGlvbiB1cHN0cmVhbVNld2FnZShkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvc2VjdGlvbi91cHN0cmVhbVNld2FnZVwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmlq3pnaLkv6Hmga8tLeS4iua4uOawtOi0qOWHgOWMluWOglxyXG5leHBvcnQgZnVuY3Rpb24gcHVyaWZpY2F0aW9uUGxhbnQoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL3NlY3Rpb24vcHVyaWZpY2F0aW9uUGxhbnRcIixcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmlq3pnaItLeebkea1i+ivpuaDhVxyXG5leHBvcnQgZnVuY3Rpb24gZGF0YVRhYmxlKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9zZWN0aW9uL2RhdGFUYWJsZVwiLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaWremdoi0t5rC06LSo5YeA5YyW5Y6C6K+m5oOFXHJcbmV4cG9ydCBmdW5jdGlvbiBqaGNJbmZvKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9wbGFudFwiLFxyXG4gICAgbWV0aG9kOiBcInBvc3RcIixcclxuICAgIGRhdGE6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaYhuaYjuawtOeOr+Wigy3mtYHln5/msLTotKjkvJjoia/mpoLlhrVcclxuZXhwb3J0IGZ1bmN0aW9uIGx5QmFzaW4oZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL2Jhc2luXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaYhuaYjuawtOeOr+Wigy3mtYHln5/msLTotKjkvJjoia/mpoLlhrUt6K+m5oOFXHJcbmV4cG9ydCBmdW5jdGlvbiBseURldGFpbChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvYmFzaW4vZGV0YWlsc1wiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDpppbpobUgLSDmu4fmsaDmsLTotKhcclxuZXhwb3J0IGZ1bmN0aW9uIGRjU3ooKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvQmFzaWNEYXRhL2RjRGF0YVwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOmmlumhtSAtIOa7h+axoOawtOi0qCAtIOawtOi0qOWIl+ihqFxyXG5leHBvcnQgZnVuY3Rpb24gZGNTekxpc3QoKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvbGFrZS9kY0xpc3RcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIlxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDpppbpobUt6aWu55So5rC05rqQ5ZywXHJcbmV4cG9ydCBmdW5jdGlvbiB5eXNJbmZvKGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9CYXNpY0RhdGEvZHJpbmtTb3VyY2VcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YVxyXG4gIH0pO1xyXG59XHJcbi8vIOmmlumhtS3ppa7nlKjmsLTmupDlnLAt5rC05bqT5YiX6KGoXHJcbmV4cG9ydCBmdW5jdGlvbiBza0xpc3QoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL2xha2UvZHJpbmtTb3VyY2VMaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGFcclxuICB9KTtcclxufVxyXG5cclxuLy8g5piG5piO5biC5rC0546v5aKDLeawtOW6k+WIhuW4g+WPiuW6k+WuuVxyXG5leHBvcnQgZnVuY3Rpb24gd2F0ZXJCb2R5TGlzdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvQmFzaWNEYXRhL3dhdGVyQm9keURpc3RyaWJ1dGlvblwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaYhuaYjuW4guawtOeOr+Wigy3msLTotKjlh4DljJbljoLliIbluINcclxuZXhwb3J0IGZ1bmN0aW9uIHdhdGVyUGxhbnRMaXN0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9wbGFudFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8vIOaYhuaYjuW4guawtOeOr+Wigy3msLTlupPliIbluINcclxuZXhwb3J0IGZ1bmN0aW9uIHJlc2Vydm9pckxpc3QoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL2NvbW1vbi93YXRlckxpc3RcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YVxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmsLTotKjlh4DljJbljoLmsrPpgZPmlq3pnaLor6bmg4VcclxuZXhwb3J0IGZ1bmN0aW9uIHdhdGVyUGxhbnRSaXZlcihkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvcGxhbnQvZGV0YWlsXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGFcclxuICB9KTtcclxufVxyXG5cclxuLy8g5rC06LSo5YeA5YyW5Y6C6KGl5rC05pat6Z2iXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXRlclBsYW50U2l0ZShkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvcGxhbnQvc2l0ZXNcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YVxyXG4gIH0pO1xyXG59XHJcblxyXG4vKlxyXG7pppbpobXmsLTotYTmupDmn6Xor6JcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByZXNvdXJjZVN0YXQoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL2NvbW1vbi9yZXNvdXJjZVN0YXRcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLy8g5rC05Yqf6IO95Yy65YiX6KGoXHJcbmV4cG9ydCBmdW5jdGlvbiB3YXRlckZ1bmN0aW9uTGlzdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvY29tbW9uL3dhdGVyRnVuY0xpc3RcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YVxyXG4gIH0pO1xyXG59XHJcblxyXG4vLyDmsLTlip/og73ljLror6bmg4VcclxuZXhwb3J0IGZ1bmN0aW9uIHdhdGVyRnVuY3Rpb25EZXRhaWwoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL2NvbW1vbi93YXRlckZ1bmNEZXRhaWxcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YVxyXG4gIH0pO1xyXG59XHJcblxyXG4vKlxyXG7pppbpobXmtonmsLTmsaHmn5PmupBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBpbnZvbHZlV2F0ZXIoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3BvbGx1dGlvbi9zdGF0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qXHJcbummlumhtea2ieawtOaxoeafk+a6kOivpuaDhVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNld2FnZURldGFpbChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvcG9sbHV0aW9uL3Nld2FnZURldGFpbFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vKlxyXG7mjpLlj6Por6bmg4Ut5o6S5p+l5YiX6KGoXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V3YWdlUGNEZXRhaWwoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3BvbGx1dGlvbi9zZXdhZ2VQY0RldGFpbFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vKlxyXG7mjpLlj6Por6bmg4Ut5rqv5rqQ5YiX6KGoXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V3YWdlU3lEZXRhaWwoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3BvbGx1dGlvbi9zZXdhZ2VTeURldGFpbFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vKlxyXG7mjpLlj6Por6bmg4Ut55uR5rWL5YiX6KGoXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V3YWdlSmNEZXRhaWwoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3BvbGx1dGlvbi9zZXdhZ2VKY0RldGFpbFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vKlxyXG7mjpLlj6Por6bmg4Ut5pW05rK75YiX6KGoXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gc2V3YWdlWnpEZXRhaWwoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3BvbGx1dGlvbi9zZXdhZ2VaekRldGFpbFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vKlxyXG7mtonmsLTmsaHmn5PmupDliJfooahcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwb2xsdXRpb25MaXN0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi9wb2xsdXRpb24vc3N3cnlsYlwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vKlxyXG7pppbpobXmtonmsLTmsaHmn5PmupDliJfooah0YWLmgLvmlbBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBzZXdhZ2VTdGF0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi9wb2xsdXRpb24vc2V3YWdlU3RhdFwiLFxyXG4gICAgbWV0aG9kOiBcImdldFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59XHJcblxyXG4vKlxyXG7mtYHln58t5rKz6YGT5L+h5oGv57uf6K6hXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcml2ZXJDb3Vyc2VTdGF0KGRhdGEpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IGJhc2VVcmwgKyBcIi93YXRlci9CYXNpY0RhdGEvcml2ZXJDb3Vyc2VTdGF0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuXHJcbi8qXHJcbua1geWfny3msrPpgZPmg4XlhrVcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiByaXZlckNvdXJzZUxpc3QoZGF0YSkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogYmFzZVVybCArIFwiL3dhdGVyL0Jhc2ljRGF0YS9yaXZlckNvdXJzZUxpc3RcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufVxyXG5cclxuLypcclxu5rWB5Z+fLeagueaNrua1geWfn+afpeivouays+mBk+S4i+aLieahhlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHdhdGVyTGlzdChkYXRhKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBiYXNlVXJsICsgXCIvd2F0ZXIvYmFzaW4vd2F0ZXJMaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQXdBQUFBTUNBWUFBQUJXZFZ6bkFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUNJU1VSQlZDaVJsWkhkQ3NNZ0RFWlBpbjB2QjNrcmhYWFF4eXJvbmtzaHUxZ2RwU3o3T1ZlSzUwc2tnUU9hZXVHRXBsNDB0emp1b3JrdG1GelBva09kL3BBQllqaW1FYnU3Nmw3NEdSQzdiZXU4ZkNxdHVWVk15dWhRQVRSMWUydUxYY1l4ZUE5SHRuV3VZMUxCRTd5dnZRS2FXOFJrN0VHK0J2YXFyamlZQUg3Y1JRUVFkeklPRDlVNUx3YUNiSHZwQUFBQUFFbEZUa1N1UW1DQ1wiIiwiLy/lvZPliY3nlLXohJHml7bpl7QtLeW9k+aXpVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VGhpc0RhdGUoZSkge1xyXG4vLytcIiBcIitoK1wiOlwiK00rXCI6XCIrcztcclxuXHRcdGxldCBub3dUaW1lID0gXCJcIjtcclxuXHRcdGxldCB0aW1lPSBuZXcgRGF0ZSgpO1xyXG5cdFx0bGV0IHk9dGltZS5nZXRGdWxsWWVhcigpO1xyXG5cdFx0bGV0IGxtPXRpbWUuZ2V0TW9udGgoKTtcclxuXHRcdFx0bG09bG08MTA/JzAnK2xtOmxtO1xyXG5cdFx0bGV0IG09dGltZS5nZXRNb250aCgpKzE7XHJcblx0XHRcdG09bTwxMD8nMCcrbTptO1xyXG5cdFx0bGV0IGQ9dGltZS5nZXREYXRlKCk7XHJcblx0XHRcdGQ9ZDwxMD8nMCcrZDpkO1xyXG5cdFx0bGV0IGg9dGltZS5nZXRIb3VycygpO1xyXG5cdFx0XHRoPWg8MTA/JzAnK2g6aDtcclxuXHRcdGxldCBNID0gdGltZS5nZXRNaW51dGVzKCk7XHJcblx0XHRcdE09TTwxMD8nMCcrTTpNO1xyXG5cdFx0bGV0IHMgPSB0aW1lLmdldFNlY29uZHMoKTtcclxuXHRcdFx0cz1zPDEwPycwJytzOnM7XHJcblx0XHRpZiAoZSA9PT0gMSkge1xyXG5cdFx0XHRub3dUaW1lPSB5K1wiLVwiKyBtK1wiLVwiK2QgKyAnICcgKyBoICsgJzonICsgTSArICc6JyArIHNcclxuXHRcdH1lbHNlIGlmKGUgPT0gNCl7Ly/lvZPmnIjnmoTnrKzkuIDlpKlcclxuXHRcdFx0bm93VGltZT0geStcIi1cIisgbStcIi0xXCI7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRub3dUaW1lPSB5K1wiLVwiKyBtK1wiLVwiK2RcclxuXHRcdH1cclxuXHRcdHJldHVybiBub3dUaW1lO1xyXG59XHJcbi8vIOi9rOWMluaXtumXtFxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlLG4pIHtcclxuXHRcdGxldCB0aW1lPSBuZXcgRGF0ZShkYXRlKTtcclxuXHRcdGxldCBub3dUaW1lPSBcIlwiO1xyXG5cdFx0bGV0IHk9dGltZS5nZXRGdWxsWWVhcigpO1xyXG5cdFx0bGV0IG09dGltZS5nZXRNb250aCgpKzE7XHJcblx0XHRcdG09bTwxMD8nMCcrbTptO1xyXG5cdFx0bGV0IGQ9dGltZS5nZXREYXRlKCk7XHJcblx0XHRcdGQ9ZDwxMD8nMCcrZDpkO1xyXG5cdFx0bGV0IGg9dGltZS5nZXRIb3VycygpO1xyXG5cdFx0XHRoPWg8MTA/JzAnK2g6aDtcclxuXHRcdGxldCBNID0gdGltZS5nZXRNaW51dGVzKCk7XHJcblx0XHRcdE09TTwxMD8nMCcrTTpNO1xyXG5cdFx0bGV0IHMgPSB0aW1lLmdldFNlY29uZHMoKTtcclxuXHRcdFx0cz1zPDEwPycwJytzOnM7XHJcblx0XHRpZihuPT1cInlcInx8bj09XCLlubRcIil7XHJcblx0XHRcdG5vd1RpbWU9IHlcclxuXHRcdH1lbHNlIGlmKG49PVwiTVwifHxuPT1cIuaciFwiKXtcclxuXHRcdFx0bm93VGltZT0geStcIi1cIisgbVxyXG5cdFx0fWVsc2UgaWYobj09XCJtXCIpe1xyXG5cdFx0XHRub3dUaW1lPSB5K1wiLVwiKyBtK1wiLVwiK2QrXCIgXCIraCtcIjpcIitNXHJcblx0XHR9ZWxzZSBpZihuPT1cImhcInx8bj09XCLml7ZcIil7XHJcblx0XHRcdG5vd1RpbWU9IHkrXCItXCIrIG0rXCItXCIrZCtcIiBcIitoXHJcblx0XHR9ZWxzZSBpZihuPT1cImRcInx8bj09XCLml6VcIil7XHJcblx0XHRcdG5vd1RpbWU9IHkrXCItXCIrIG0rXCItXCIrZFxyXG5cdFx0fWVsc2V7XHJcblx0XHRcdG5vd1RpbWU9IHkrXCItXCIrIG0rXCItXCIrZCtcIiBcIitoK1wiOlwiK00rXCI6XCIrc1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG5vd1RpbWU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGhvdXJEYXRlRm9ybWF0KGRhdGUpIHtcclxuXHRsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHRsZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xyXG5cdGxldCBkYXkgPSBkYXRlLmdldERhdGUoKTtcclxuXHRsZXQgaG91ciA9IGRhdGUuZ2V0SG91cnMoKTtcclxuXHRkYXRlID0geWVhciArICctJyArIChtb250aCA+IDkgPyBtb250aCA6ICcwJyArIG1vbnRoKSArICctJyArIChkYXkgPiA5ID8gZGF5IDogJzAnICsgZGF5KSArICcgJyArIChob3VyID4gOSA/IGhvdXIgOiAnMCcgKyBob3VyKTtcclxuXHRyZXR1cm4gZGF0ZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbW9udGhEYXRlRm9ybWF0KGRhdGUpIHtcclxuXHRsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcclxuXHRsZXQgbW9udGggPSBkYXRlLmdldE1vbnRoKCkgKyAxO1xyXG5cdGRhdGUgPSB5ZWFyICsgJy0nICsgKG1vbnRoID4gOSA/IG1vbnRoIDogJzAnICsgbW9udGgpO1xyXG5cdHJldHVybiBkYXRlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBmb3VySG91clRpbWUoKSB7XHJcblx0bGV0IG5vd0RhdGUgPSBuZXcgRGF0ZSgpO1xyXG5cdGxldCB5ZWFyID0gbm93RGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cdGxldCBtb250aCA9IG5vd0RhdGUuZ2V0TW9udGgoKSArIDE7XHJcblx0bGV0IGRheSA9IG5vd0RhdGUuZ2V0RGF0ZSgpO1xyXG5cdGxldCBob3VycyA9IG5vd0RhdGUuZ2V0SG91cnMoKTtcclxuXHRpZiAoaG91cnMgPCA0ICYmIGhvdXJzID49IDApIHtcclxuXHRcdGhvdXJzID0gMDtcclxuXHR9IGVsc2UgaWYgKGhvdXJzIDwgOCAmJiBob3VycyA+PSA0KSB7XHJcblx0XHRob3VycyA9IDQ7XHJcblx0fSBlbHNlIGlmIChob3VycyA8IDEyICYmIGhvdXJzID49IDgpIHtcclxuXHRcdGhvdXJzID0gODtcclxuXHR9IGVsc2UgaWYgKGhvdXJzIDwgMTYgJiYgaG91cnMgPj0gMTIpIHtcclxuXHRcdGhvdXJzID0gMTI7XHJcblx0fSBlbHNlIGlmIChob3VycyA8IDIwICYmIGhvdXJzID49IDE2KSB7XHJcblx0XHRob3VycyA9IDE2O1xyXG5cdH0gZWxzZSBpZiAoaG91cnMgPD0gMjMgJiYgaG91cnMgPj0gMjApIHtcclxuXHRcdGhvdXJzID0gMjA7XHJcblx0fVxyXG5cdG1vbnRoID0gbW9udGggPCAxMCA/IFwiMFwiICsgbW9udGggOiBtb250aDtcclxuXHRkYXkgPSBkYXkgPCAxMCA/IFwiMFwiICsgZGF5IDogZGF5O1xyXG5cdGhvdXJzID0gaG91cnMgPCAxMCA/IFwiMFwiICsgaG91cnMgOiBob3VycztcclxuXHRyZXR1cm4geWVhcisnLScrbW9udGgrJy0nK2RheSsnICcraG91cnMrJzowMDowMCdcclxufVxyXG4iLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3RpbWVTZWxlY3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVjNTA3ZTg1JnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3RpbWVTZWxlY3QudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi90aW1lU2VsZWN0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi90aW1lU2VsZWN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVjNTA3ZTg1Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNWM1MDdlODVcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNWM1MDdlODUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNWM1MDdlODUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNWM1MDdlODUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3RpbWVTZWxlY3QudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVjNTA3ZTg1JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzVjNTA3ZTg1Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9leGFtaW5lU2l0ZUxpc3QvY29tcG9uZW50cy90aW1lU2VsZWN0LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGltZVNlbGVjdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGltZVNlbGVjdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi90aW1lU2VsZWN0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVjNTA3ZTg1Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdGltZVNlbGVjdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NWM1MDdlODUmc2NvcGVkPXRydWUmXCIiXSwic291cmNlUm9vdCI6IiJ9