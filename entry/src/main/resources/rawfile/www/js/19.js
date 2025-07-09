(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[19],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/basinWaterStandard.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/basinWaterStandard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
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
  name: "basinWaterStandard",
  data: function data() {
    return {
      startDate: new Date(),
      lyInfoArr: [],
      xzqh: '',
      searchObj: {}
    };
  },
  mounted: function mounted() {
    this.searchObj = this.$store.state.searchObj;
    this.xzqh = this.searchObj.parameter;
    this.getLyInfo();
  },
  methods: {
    getLyInfo: function getLyInfo() {
      var _this = this;

      var info = {
        basinName: "",
        div: this.xzqh
      };
      Object(_api_water_envir__WEBPACK_IMPORTED_MODULE_0__["lyBasin"])(info).then(function (res) {
        if (res.code == 200) {
          _this.lyInfoArr = res.data;
        }
      });
    },
    toDetail: function toDetail(item) {
      var searchData = {
        moduleName: '',
        resourcePath: '',
        type: '',
        parameter: item.basinName,
        componentName: ''
      };
      this.$store.commit('setSearchObj', searchData);
      this.$router.push({
        name: 'basinHomePage',
        query: {
          lyName: item.basinName
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/competitionGovern.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/competitionGovern.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_water_envir__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/water_envir */ "./src/api/water_envir.js");
/* harmony import */ var _views_waterHomePage_components_yearRank__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/views/waterHomePage/components/yearRank */ "./src/views/waterHomePage/components/yearRank.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "competitionGovern",
  components: {
    yearRank: _views_waterHomePage_components_yearRank__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      searchObj: {},
      time: "",
      competitions: [],
      yearRank: [],
      xzqh: ''
    };
  },
  mounted: function mounted() {
    this.searchObj = this.$store.state.searchObj;

    if (this.detailsParameter) {
      this.xzqh = this.searchObj.parameter;
    } else {
      this.xzqh = this.searchObj.parameter;
    }

    this.loadData();
  },
  methods: {
    loadData: function loadData() {
      var _this = this;

      var date = new Date();
      var y = date.getFullYear() + "年";
      var info = {
        district: this.xzqh,
        time: y
      };
      Object(_api_water_envir__WEBPACK_IMPORTED_MODULE_0__["ranking"])(info).then(function (res) {
        _this.competitions = res.data.rank;
        _this.yearRank = res.data.scores;

        if (res.data.rank.length > 0) {
          _this.time = res.data.rank[0].year;
        }
      });
    },
    toDetail: function toDetail(item) {
      this.$router.push({
        name: "governDetail",
        query: {
          area: item.NAME,
          time: this.time
        }
      });
    },
    toList: function toList() {
      this.$router.push({
        name: 'competitionGovern',
        query: {
          time: this.time
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/echarts/lakeChart.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/echarts/lakeChart.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var echarts_liquidfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! echarts-liquidfill */ "./node_modules/echarts-liquidfill/index.js");
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "lakeEchart",
  data: function data() {
    return {
      countryEchart: null
    };
  },
  mounted: function mounted() {
    var _this = this;

    if (!this.countryEchart) {
      this.countryEchart = echarts__WEBPACK_IMPORTED_MODULE_0__["init"](this.$refs.countryEchart);
      setTimeout(function () {
        _this.initChart(echarts__WEBPACK_IMPORTED_MODULE_0__["init"](_this.$refs.countryEchart));
      });
    }
  },
  methods: {
    initChart: function initChart(chartInstance) {
      var option = {
        series: [{
          name: "优良率",
          type: "liquidFill",
          color: ["rgba(76, 100, 254, 1)", "rgba(109, 181, 252, 0.5)"],
          data: [0.54, {
            value: 0.54,
            direction: "left"
          }],
          radius: "70%",
          outline: {
            borderDistance: 3,
            itemStyle: {
              borderWidth: 3,
              borderColor: "rgba(76, 100, 254, 1)"
            }
          },
          backgroundStyle: {
            color: "transparent"
          },
          itemStyle: {
            opacity: 0.95,
            shadowColor: "rgba(255, 255, 255, 0)"
          },
          label: {
            show: false
          }
        }]
      };
      chartInstance.setOption(option);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/functionZone.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/functionZone.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "functionZone",
  data: function data() {
    return {};
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/purPlant.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/purPlant.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "purPlant",
  data: function data() {
    return {
      list: []
    };
  },
  methods: {
    toList: function toList() {
      this.$router.push({
        name: "purPlant",
        query: {
          title: '水质净化厂列表'
        }
      });
    },
    loadData: function loadData() {
      var _this = this;

      var info = {
        region: "昆明市"
      };
      Object(_api_water_envir__WEBPACK_IMPORTED_MODULE_0__["waterPlantList"])(info).then(function (res) {
        _this.list = res.data;
      });
    }
  },
  mounted: function mounted() {
    this.loadData();
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/reservoir.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/reservoir.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var echarts_liquidfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! echarts-liquidfill */ "./node_modules/echarts-liquidfill/index.js");
/* harmony import */ var _api_water_envir__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/api/water_envir */ "./src/api/water_envir.js");
/* harmony import */ var _views_waterHomePage_components_echarts_lakeChart_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/views/waterHomePage/components/echarts/lakeChart.vue */ "./src/views/waterHomePage/components/echarts/lakeChart.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "reservoir",
  data: function data() {
    return {
      area: "盘龙区",
      option1: [// { text: "昆明市", value: "昆明市" },
      {
        text: "五华区",
        value: "五华区"
      }, {
        text: "盘龙区",
        value: "盘龙区"
      }, {
        text: "官渡区",
        value: "官渡区"
      }, {
        text: "西山区",
        value: "西山区"
      }, {
        text: "呈贡区",
        value: "呈贡区"
      }, {
        text: "经济技术开发区",
        value: "经济技术开发区"
      }, {
        text: "高新技术开发区",
        value: "高新技术开发区"
      }, {
        text: "滇池旅游度假区",
        value: "滇池旅游度假区"
      }, {
        text: "东川区",
        value: "东川区"
      }, {
        text: "晋宁县",
        value: "晋宁县"
      }, {
        text: "富民县",
        value: "富民县"
      }, {
        text: "宜良县",
        value: "宜良县"
      }, {
        text: "石林彝族自治县",
        value: "石林彝族自治县"
      }, {
        text: "嵩明县",
        value: "嵩明县"
      }, {
        text: "禄劝彝族苗族自治县",
        value: "禄劝彝族苗族自治县"
      }, {
        text: "寻甸回族彝族自治县",
        value: "寻甸回族彝族自治县"
      }, {
        text: "阳宗海风景名胜区",
        value: "阳宗海风景名胜区"
      }, {
        text: "安宁市",
        value: "安宁市"
      }, {
        text: "空港经济区",
        value: "空港经济区"
      }],
      countryEchart: null,
      reservoirEchart: null,
      skArr: []
    };
  },
  components: {
    lakeChart: _views_waterHomePage_components_echarts_lakeChart_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  mounted: function mounted() {
    this.loadData();
  },
  methods: {
    loadData: function loadData() {
      var _this = this;

      var info = {
        region: this.area,
        type: "饮用水源地"
      };
      Object(_api_water_envir__WEBPACK_IMPORTED_MODULE_2__["waterBodyList"])(info).then(function (res) {
        _this.skArr = res.data;
      });
    },
    initChart: function initChart(chartInstance) {
      var option = {
        series: [{
          name: "优良率",
          type: "liquidFill",
          color: ["rgba(76, 100, 254, 1)", "rgba(109, 181, 252, 0.5)"],
          data: [0.54, {
            value: 0.54,
            direction: "left"
          }],
          radius: "70%",
          outline: {
            borderDistance: 3,
            itemStyle: {
              borderWidth: 3,
              borderColor: "rgba(76, 100, 254, 1)"
            }
          },
          backgroundStyle: {
            color: "transparent"
          },
          itemStyle: {
            opacity: 0.95,
            shadowColor: "rgba(255, 255, 255, 0)"
          },
          label: {
            show: false
          }
        }]
      };
      chartInstance.setOption(option);
    }
  },
  watch: {
    area: function area(val) {
      if (val) {
        this.loadData();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/riverDis.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/riverDis.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _api_water_envir__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/water_envir */ "./src/api/water_envir.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_4__);


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "riverDis",
  data: function data() {
    return {
      value1: "滇池流域",
      option1: [{
        text: "滇池流域",
        value: "滇池流域"
      }, {
        text: "阳宗海流域",
        value: "阳宗海流域"
      }, {
        text: "普渡河流域",
        value: "普渡河流域"
      }, {
        text: "南盘江流域",
        value: "南盘江流域"
      }, {
        text: "小江流域",
        value: "小江流域"
      }, {
        text: "牛栏江流域",
        value: "牛栏江流域"
      }],
      hlArr: [],
      lyStation: {
        river: []
      }
    };
  },
  methods: {
    toRiverList: function toRiverList() {
      this.$router.push({
        name: "riverDetail",
        query: {
          title: this.value1
        }
      });
    },
    getLyInfo: function getLyInfo() {
      var _this = this;

      var info = {
        // basinName: this.$route.query.lyName,
        basinName: this.value1
      };
      Object(_api_water_envir__WEBPACK_IMPORTED_MODULE_3__["lyDetail"])(info).then(function (res) {
        if (res.code == "200") {
          _this.lyStation = res.data;
        }
      });
    },
    toStation: function toStation(item) {
      this.$router.push({
        name: "stationRiverDetail",
        query: {
          // mc: item.sectionName,
          type: item.monitorMethod == "自动" ? "时" : "月",
          id: item.sectionId,
          time: item.monitorMethod == "自动" ? Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["getSectionTime"])() : dayjs__WEBPACK_IMPORTED_MODULE_4___default()(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["getSectionTime"])()).format('YYYY-MM-DD') // listType: item.type,
          // zdType: item.monitorMethod,

        }
      });
    },
    replaceString: function replaceString(value) {
      if (value) {
        return value.replace("类", "");
      } else {
        return "";
      }
    },
    judgeLevel: function judgeLevel(value) {
      return Object(_utils_utils__WEBPACK_IMPORTED_MODULE_2__["imgJugdeLevel"])(value);
    },
    judgeTargetLevel: function judgeTargetLevel(value) {
      if (value === null) {
        return "target2";
      } else if (value === "Ⅱ") {
        return "target2";
      } else if (value === "Ⅲ") {
        return "target3";
      } else if (value === "Ⅳ") {
        return "target4";
      } else if (value === "Ⅴ") {
        return "target5";
      } else if (value === "劣Ⅴ") {
        return "target6";
      } else {
        return "target0";
      }
    }
  },
  mounted: function mounted() {
    this.getLyInfo();
  },
  watch: {
    value1: function value1(val) {
      if (val) {
        this.getLyInfo();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/yearRank.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/yearRank.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
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
  name: "yearRank",
  props: {
    list: {
      type: Array,
      default: function _default() {}
    }
  },
  data: function data() {
    return {
      searchObj: {}
    };
  },
  mounted: function mounted() {}
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/basinWaterStandard.vue?vue&type=template&id=3c0bf160&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/basinWaterStandard.vue?vue&type=template&id=3c0bf160&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "card-no-border-title" }, [
        _c("div", { staticClass: "name" }, [_vm._v("流域概况")]),
        _c("span", { staticClass: "time" }, [
          _vm._v(
            "累计截至" +
              _vm._s(_vm.dayjs(_vm.startDate).format("YYYY-MM-DD")) +
              " "
          ),
        ]),
      ]),
      _vm._l(_vm.lyInfoArr, function (item) {
        return _c(
          "div",
          {
            staticClass: "standard-wrapper",
            on: {
              click: function ($event) {
                return _vm.toDetail(item)
              },
            },
          },
          [
            _c("div", { staticClass: "standard-title fs" }, [
              _c("div", { staticClass: "fs" }, [
                _c("img", { attrs: { src: __webpack_require__(/*! @/assets/river@2x.png */ "./src/assets/river@2x.png") } }),
                _c("span", { staticClass: "name" }, [
                  _vm._v(_vm._s(item.basinName)),
                ]),
              ]),
              _c("div", [
                _c(
                  "span",
                  { staticStyle: { color: "rgba(84, 117, 248, 1)" } },
                  [_vm._v("入湖河道" + _vm._s(item.riverCourseNumber) + "条")]
                ),
              ]),
            ]),
            _c(
              "div",
              {
                staticClass: "standard-box fs",
                staticStyle: { "font-size": "13px" },
              },
              [
                _c("div", [
                  _c(
                    "span",
                    {
                      staticClass: "site-type",
                      staticStyle: { color: "rgba(68, 123, 252, 1)" },
                    },
                    [_vm._v("国")]
                  ),
                  _c("span", [_vm._v("优良")]),
                  _c("span", { staticClass: "num" }, [
                    _vm._v(_vm._s(item.stateUp)),
                  ]),
                  _vm._v("/" + _vm._s(item.stateTotal) + "个 "),
                ]),
                _c("div", [
                  _c(
                    "span",
                    {
                      staticClass: "site-type",
                      staticStyle: { color: "rgba(0, 186, 173, 1)" },
                    },
                    [_vm._v("省")]
                  ),
                  _c("span", [_vm._v("优良")]),
                  _c("span", { staticClass: "num" }, [
                    _vm._v(_vm._s(item.provinceUp)),
                  ]),
                  _vm._v("/" + _vm._s(item.provinceTotal) + "个 "),
                ]),
                _c("div", [
                  _c(
                    "span",
                    {
                      staticClass: "site-type",
                      staticStyle: { color: "rgba(255, 141, 26, 1)" },
                    },
                    [_vm._v("市")]
                  ),
                  _c("span", [_vm._v("优良")]),
                  _c("span", { staticClass: "num" }, [
                    _vm._v(_vm._s(item.ecologicalUp)),
                  ]),
                  _vm._v("/" + _vm._s(item.ecologicalTotal) + "个 "),
                ]),
              ]
            ),
          ]
        )
      }),
      _vm.lyInfoArr.length === 0
        ? _c(
            "div",
            {
              staticStyle: {
                "text-align": "center",
                color: "rgba(18, 18, 54, 0.5)",
              },
            },
            [_vm._v("暂无数据")]
          )
        : _vm._e(),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/competitionGovern.vue?vue&type=template&id=32ec199d&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/competitionGovern.vue?vue&type=template&id=32ec199d&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    _c(
      "div",
      {
        staticClass: "card-no-border-title",
        on: {
          click: function ($event) {
            return _vm.$router.push({ name: "competitionGovern" })
          },
        },
      },
      [_c("div", { staticClass: "name" }, [_vm._v(_vm._s(_vm.xzqh) + "排名")])]
    ),
    _c(
      "div",
      { staticClass: "fs", staticStyle: { "align-items": "flex-start" } },
      [
        _c(
          "div",
          {
            staticClass: "card-wrapper",
            staticStyle: {
              margin: "0",
              width: "48%",
              "padding-bottom": "10px",
            },
          },
          [
            _c(
              "div",
              { staticClass: "fs", staticStyle: { "margin-bottom": "8px" } },
              [
                _c(
                  "div",
                  {
                    staticClass: "card-title card-title-water",
                    staticStyle: { padding: "5px 10px" },
                  },
                  [_vm._v("大竞赛排名")]
                ),
                _c(
                  "div",
                  {
                    staticClass: "fs competition-title",
                    on: { click: _vm.toList },
                  },
                  [
                    _c(
                      "span",
                      { staticStyle: { color: "rgba(18, 18, 54, 0.5)" } },
                      [_vm._v(_vm._s(_vm.time))]
                    ),
                    _c("van-icon", { attrs: { name: "arrow" } }),
                  ],
                  1
                ),
              ]
            ),
            _vm._l(_vm.competitions, function (item, i) {
              return _c(
                "div",
                {
                  class: ["competition-wrapper", "fs", "numBg" + i],
                  on: {
                    click: function ($event) {
                      return _vm.toDetail(item)
                    },
                  },
                },
                [
                  _c("div", [
                    _c("span", { class: "num" + i }, [_vm._v(_vm._s(i + 1))]),
                    _c("span", { staticClass: "area" }, [
                      _vm._v(_vm._s(item.NAME)),
                    ]),
                  ]),
                  _c("div", { class: "num" + i }, [
                    _vm._v(_vm._s(item.SCORE) + "分"),
                  ]),
                ]
              )
            }),
          ],
          2
        ),
        _c("yearRank", { attrs: { list: _vm.yearRank } }),
      ],
      1
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/echarts/lakeChart.vue?vue&type=template&id=330ba4b6&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/echarts/lakeChart.vue?vue&type=template&id=330ba4b6&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", {
    ref: "countryEchart",
    staticStyle: { height: "70px", width: "70px", margin: "0 auto" },
  })
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/functionZone.vue?vue&type=template&id=78218109&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/functionZone.vue?vue&type=template&id=78218109&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "card-wrapper", staticStyle: { "padding-bottom": "14px" } },
    [
      _vm._m(0),
      _c(
        "div",
        { staticClass: "zone-wrapper fs" },
        _vm._l(4, function (item, i) {
          return _c("div", { staticClass: "zone-item" }, [
            _c("div", { staticClass: "name" }, [_vm._v("保护区")]),
            _vm._m(1, true),
          ])
        }),
        0
      ),
    ]
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "fs", staticStyle: { "margin-bottom": "8px" } },
      [
        _c("div", { staticClass: "card-title card-title-water" }, [
          _vm._v("昆明市水功能区划"),
        ]),
      ]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "fs" }, [
      _c("div", [
        _c("span", { staticStyle: { color: "rgba(18, 18, 54, 1)" } }, [
          _vm._v("39"),
        ]),
        _vm._v(" 个 "),
      ]),
      _c("div", { staticClass: "fs", staticStyle: { "font-weight": "bold" } }, [
        _c("img", {
          staticStyle: { width: "14px" },
          attrs: { src: __webpack_require__(/*! @/assets/饼状图.png */ "./src/assets/饼状图.png") },
        }),
        _c("span", { staticStyle: { color: "rgba(68, 123, 252, 1)" } }, [
          _vm._v("17.5%"),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/purPlant.vue?vue&type=template&id=7aa03a43&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/purPlant.vue?vue&type=template&id=7aa03a43&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "card-wrapper", staticStyle: { "padding-bottom": "14px" } },
    [
      _c(
        "div",
        { staticClass: "fs", staticStyle: { "margin-bottom": "8px" } },
        [
          _c("div", { staticClass: "card-title card-title-water" }, [
            _vm._v("水质净化厂分布情况"),
          ]),
          _c(
            "div",
            { staticClass: "fs", staticStyle: { "padding-right": "13px" } },
            [
              _c("span", { staticClass: "time", on: { click: _vm.toList } }, [
                _vm._v("查看更多"),
              ]),
              _c("img", {
                attrs: { src: __webpack_require__(/*! @/assets/toright.png */ "./src/assets/toright.png"), alt: "" },
              }),
            ]
          ),
        ]
      ),
      _vm._l(_vm.list, function (item, index) {
        return _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: index < 5,
                expression: "index<5",
              },
            ],
            staticClass: "pur-wrapper",
          },
          [_vm._v(_vm._s(item.enterpriseName))]
        )
      }),
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/reservoir.vue?vue&type=template&id=01e1044c&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/reservoir.vue?vue&type=template&id=01e1044c&scoped=true& ***!
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
    { staticClass: "card-wrapper", staticStyle: { "padding-bottom": "14px" } },
    [
      _c(
        "div",
        { staticClass: "fs", staticStyle: { "margin-bottom": "5px" } },
        [
          _c("div", { staticClass: "card-title card-title-water" }, [
            _vm._v("水库分布及库容"),
          ]),
          _c(
            "div",
            { staticClass: "fs", staticStyle: { "padding-right": "13px" } },
            [
              _c(
                "van-dropdown-menu",
                {
                  staticStyle: { width: "100px" },
                  attrs: { "active-color": "#1989fa" },
                },
                [
                  _c("van-dropdown-item", {
                    attrs: { options: _vm.option1 },
                    model: {
                      value: _vm.area,
                      callback: function ($$v) {
                        _vm.area = $$v
                      },
                      expression: "area",
                    },
                  }),
                ],
                1
              ),
            ],
            1
          ),
        ]
      ),
      _c(
        "div",
        { staticClass: "fs-content" },
        _vm._l(_vm.skArr, function (item, index) {
          return _c("div", { staticClass: "re-wrapper" }, [
            _c("span", { staticClass: "name" }, [
              _vm._v(_vm._s(item.bodyName)),
            ]),
            _c(
              "div",
              {
                staticStyle: {
                  height: "70px",
                  width: "70px",
                  margin: "0 auto",
                },
              },
              [_c("lakeChart")],
              1
            ),
            _c("div", { staticStyle: { "font-size": "14px" } }, [
              _c("span", { staticStyle: { color: "rgba(18, 18, 54, 1)" } }, [
                _vm._v(_vm._s(item.storageCapacity || "-")),
              ]),
              _vm._v(" 亿立方米 "),
            ]),
          ])
        }),
        0
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/riverDis.vue?vue&type=template&id=1aabf072&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/riverDis.vue?vue&type=template&id=1aabf072&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "card-wrapper", staticStyle: { "padding-bottom": "14px" } },
    [
      _c(
        "div",
        { staticClass: "fs", staticStyle: { "margin-bottom": "8px" } },
        [
          _c("div", { staticClass: "card-title card-title-water" }, [
            _vm._v("河流分布情况"),
          ]),
          _c(
            "div",
            { staticClass: "fs", staticStyle: { "padding-right": "13px" } },
            [
              _c(
                "van-dropdown-menu",
                {
                  staticStyle: { width: "100px" },
                  attrs: { "active-color": "#1989fa" },
                },
                [
                  _c("van-dropdown-item", {
                    attrs: { options: _vm.option1 },
                    model: {
                      value: _vm.value1,
                      callback: function ($$v) {
                        _vm.value1 = $$v
                      },
                      expression: "value1",
                    },
                  }),
                ],
                1
              ),
              _c(
                "span",
                { staticClass: "time", on: { click: _vm.toRiverList } },
                [_vm._v("查看更多")]
              ),
              _c("img", {
                attrs: { src: __webpack_require__(/*! @/assets/toright.png */ "./src/assets/toright.png"), alt: "" },
              }),
            ],
            1
          ),
        ]
      ),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.lyStation.river.length == 0,
              expression: "lyStation.river.length == 0",
            },
          ],
          staticClass: "site-wrapper",
          staticStyle: { background: "rgba(68, 123, 252, 0.03)" },
        },
        [
          _c(
            "div",
            {
              staticStyle: {
                "font-size": "12px",
                color: "rgba(18, 18, 54, 0.5)",
                width: "100%",
                "text-align": "center",
              },
            },
            [_vm._v("暂无河道信息！")]
          ),
        ]
      ),
      _vm._l(_vm.lyStation.river, function (river, index) {
        return _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: index < 5,
                expression: "index<5",
              },
            ],
            staticClass: "site-wrapper",
            style: {
              background: !river.overStandard
                ? " rgba(68, 123, 252, 0.03)"
                : "rgba(254,79,2,0.03)",
            },
            on: {
              click: function ($event) {
                return _vm.toStation(river)
              },
            },
          },
          [
            _c("div", { staticClass: "fs" }, [
              _c("div", { staticClass: "site-name" }, [
                _vm._v(_vm._s(river.waterBodyName)),
              ]),
              _c(
                "div",
                {
                  staticClass: "site-status",
                  style: {
                    backgroundImage:
                      "url(" +
                      _vm.judgeLevel(_vm.replaceString(river.quality)) +
                      ")",
                    margin: "0 30px 0 16px",
                  },
                },
                [
                  _vm._v(
                    " " + _vm._s(_vm.replaceString(river.quality || "-")) + " "
                  ),
                ]
              ),
              _c("div", { staticClass: "site-target" }, [
                _vm._v(" 目标 "),
                _c(
                  "span",
                  {
                    class: [
                      "target-level",
                      _vm.judgeTargetLevel(
                        _vm.replaceString(river.target || "-")
                      ),
                    ],
                  },
                  [
                    _vm._v(
                      " " + _vm._s(_vm.replaceString(river.target || "-")) + " "
                    ),
                  ]
                ),
              ]),
            ]),
            _c("div", { staticClass: "point fs" }, [
              _vm._v(" 监测断面：" + _vm._s(river.sectionName) + " "),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !river.overStandard,
                      expression: "!river.overStandard",
                    },
                  ],
                  staticStyle: {
                    color: "#447bfc",
                    display: "flex",
                    "align-items": "center",
                  },
                },
                [
                  _c("span", {
                    staticClass: "circle",
                    staticStyle: { background: "#447bfc" },
                  }),
                  _vm._v(" 达标 "),
                ]
              ),
              _c(
                "div",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: river.overStandard,
                      expression: "river.overStandard",
                    },
                  ],
                  staticStyle: {
                    color: "rgba(18, 18, 54, 0.5)",
                    display: "flex",
                    "align-items": "center",
                  },
                },
                [
                  _c("span", {
                    staticClass: "circle",
                    staticStyle: { background: "#ff8d1a" },
                  }),
                  _vm._v(" 超标 "),
                ]
              ),
            ]),
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

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/yearRank.vue?vue&type=template&id=5c6cb76e&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/yearRank.vue?vue&type=template&id=5c6cb76e&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      staticClass: "card-wrapper",
      staticStyle: { margin: "0", width: "50%", "padding-bottom": "10px" },
    },
    [
      _c(
        "div",
        {
          staticClass: "fs",
          staticStyle: { "margin-bottom": "8px" },
          on: {
            click: function ($event) {
              return _vm.$router.push({
                name: "waterEnvRank",
                query: { time: _vm.list[0].YEAR },
              })
            },
          },
        },
        [
          _c(
            "div",
            {
              staticClass: "card-title card-title-water",
              staticStyle: { padding: "5px 10px" },
            },
            [_vm._v("水环境排名")]
          ),
          _c(
            "div",
            { staticClass: "time" },
            [
              _vm.list[0]
                ? _c(
                    "span",
                    { staticStyle: { color: "rgba(18, 18, 54, 0.5)" } },
                    [_vm._v(_vm._s(_vm.list[0].YEAR))]
                  )
                : _vm._e(),
              _c("van-icon", { attrs: { name: "arrow" } }),
            ],
            1
          ),
        ]
      ),
      _vm._l(_vm.list, function (item, i) {
        return _c(
          "div",
          { class: ["competition-wrapper", "fs", "numBg" + i] },
          [
            _c("div", [
              _c("span", { class: "num" + i }, [_vm._v(_vm._s(i + 1))]),
              _c("span", { staticClass: "area" }, [_vm._v(_vm._s(item.NAME))]),
            ]),
            _c("div", { class: "num" + i }, [
              _vm._v(_vm._s(item.SCORE) + "分"),
            ]),
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/basinWaterStandard.vue?vue&type=style&index=0&id=3c0bf160&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/basinWaterStandard.vue?vue&type=style&index=0&id=3c0bf160&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".card-no-border-wrapper[data-v-3c0bf160] {\n  margin: 4px 17px;\n  padding-bottom: 10px;\n}\n.card-no-border-wrapper .card-no-border-title[data-v-3c0bf160] {\n  display: flex;\n  align-items: center;\n  padding: 10px 0;\n}\n.card-no-border-wrapper .card-no-border-title .name[data-v-3c0bf160] {\n  color: black;\n  font-size: 18px;\n  font-weight: bold;\n}\n.card-no-border-wrapper .card-no-border-title .time[data-v-3c0bf160] {\n  padding-left: 10px;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.standard-wrapper[data-v-3c0bf160] {\n  margin: 5px 0;\n  padding: 13px 12px;\n  border-radius: 10px;\n  background: linear-gradient(180deg, rgba(68, 123, 252, 0.1) 0%, rgba(68, 123, 252, 0) 100%), white;\n  color: rgba(18, 18, 54, 0.5);\n  border: 1px solid #eef3ff;\n}\n.standard-wrapper .standard-title[data-v-3c0bf160] {\n  font-size: 12px;\n  font-family: alimamashuheiti;\n  padding-bottom: 6px;\n}\n.standard-wrapper .standard-title img[data-v-3c0bf160] {\n  width: 15px;\n}\n.standard-wrapper .standard-title .name[data-v-3c0bf160] {\n  padding-left: 5px;\n  padding-right: 10px;\n  font-size: 14px;\n  color: #082859;\n}\n.standard-wrapper .score[data-v-3c0bf160] {\n  padding: 0 8px;\n  border-radius: 4px;\n  border: 1px solid #27d043;\n  font-size: 12px;\n  color: #27d043;\n}\n.standard-wrapper .num[data-v-3c0bf160] {\n  color: #121236;\n  font-size: 14px;\n}\n.standard-box[data-v-3c0bf160] {\n  justify-content: flex-start;\n}\n.standard-box div[data-v-3c0bf160] {\n  width: 33%;\n}\n.standard-box .site-type[data-v-3c0bf160] {\n  font-family: alimamashuheiti;\n  padding-right: 5px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/competitionGovern.vue?vue&type=style&index=0&id=32ec199d&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/competitionGovern.vue?vue&type=style&index=0&id=32ec199d&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".card-no-border-wrapper[data-v-32ec199d] {\n  margin: 4px 17px;\n  padding-bottom: 10px;\n}\n.card-no-border-wrapper .card-no-border-title[data-v-32ec199d] {\n  display: flex;\n  align-items: center;\n  padding: 10px 0;\n}\n.card-no-border-wrapper .card-no-border-title .name[data-v-32ec199d] {\n  color: black;\n  font-size: 18px;\n  font-weight: bold;\n}\n.card-no-border-wrapper .card-no-border-title .time[data-v-32ec199d] {\n  padding-left: 10px;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.competition-title[data-v-32ec199d] {\n  padding-right: 8px;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.competition-title .change-tab[data-v-32ec199d] {\n  margin: 0 5px;\n  padding: 6px 8px 6px 8px;\n  background: #f6f6f6;\n  border-radius: 6px;\n  color: rgba(0, 0, 0, 0.8);\n}\n.competition-title .check[data-v-32ec199d] {\n  background: rgba(82, 113, 255, 0.1);\n  color: #5271ff;\n}\n.competition-wrapper[data-v-32ec199d] {\n  margin: 5px 7px 0;\n  padding: 8px 13px;\n  border-radius: 10px;\n  font-size: 14px;\n  background: rgba(18, 18, 54, 0.05);\n}\n.competition-wrapper .area[data-v-32ec199d] {\n  padding-left: 10px;\n  font-size: 14px;\n  color: #121236;\n}\n.competition-wrapper .score[data-v-32ec199d] {\n  padding: 0 8px;\n  font-size: 12px;\n  color: #27d043;\n}\n.numBg0[data-v-32ec199d] {\n  background: rgba(255, 87, 51, 0.05);\n}\n.numBg1[data-v-32ec199d] {\n  background: rgba(255, 141, 26, 0.05);\n}\n.numBg2[data-v-32ec199d] {\n  background: rgba(0, 186, 173, 0.05);\n}\n.numBg3[data-v-32ec199d] {\n  background: rgba(82, 113, 255, 0.05);\n}\n.numBg4[data-v-32ec199d] {\n  background: rgba(18, 18, 54, 0.05);\n}\n.num0[data-v-32ec199d] {\n  color: #ff5733;\n}\n.num1[data-v-32ec199d] {\n  color: #ff8d1a;\n}\n.num2[data-v-32ec199d] {\n  color: #00baad;\n}\n.num3[data-v-32ec199d] {\n  color: rgba(82, 113, 255, 0.8);\n}\n.num4[data-v-32ec199d] {\n  color: rgba(18, 18, 54, 0.5);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/echarts/lakeChart.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/echarts/lakeChart.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".van-dropdown-menu__title {\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.8);\n}\n.van-dropdown-menu__bar {\n  background-color: transparent;\n  height: 28px;\n  box-shadow: none;\n}\n.van-dropdown-menu__item {\n  margin-right: 10px;\n  background-color: #f6f6f6;\n  border-radius: 6px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/echarts/lakeChart.vue?vue&type=style&index=1&id=330ba4b6&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/echarts/lakeChart.vue?vue&type=style&index=1&id=330ba4b6&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fs-content[data-v-330ba4b6] {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: auto;\n  display: inline-block;\n}\n.re-wrapper[data-v-330ba4b6] {\n  text-align: center;\n  width: 44%;\n  margin-left: 4%;\n  margin-top: 10px;\n  padding: 4px 0;\n  float: left;\n  background: #f8fbff;\n  border-radius: 10px;\n  color: rgba(18, 18, 54, 0.5);\n}\n.re-wrapper .name[data-v-330ba4b6] {\n  padding-top: 3px;\n  font-size: 14px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/functionZone.vue?vue&type=style&index=0&id=78218109&lang=scss&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/functionZone.vue?vue&type=style&index=0&id=78218109&lang=scss&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".zone-wrapper[data-v-78218109] {\n  flex-wrap: wrap;\n  margin: 3px 14px;\n}\n.zone-wrapper .zone-item[data-v-78218109] {\n  width: 39%;\n  margin-bottom: 5px;\n  padding: 11px 16px;\n  border-radius: 10px;\n  background: #f8fbff;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 14px;\n}\n.zone-wrapper .zone-item .name[data-v-78218109] {\n  padding-left: 5px;\n  padding-right: 10px;\n  margin-bottom: 10px;\n  border-left: 3px solid #00baad;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/purPlant.vue?vue&type=style&index=0&id=7aa03a43&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/purPlant.vue?vue&type=style&index=0&id=7aa03a43&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".pur-wrapper[data-v-7aa03a43] {\n  margin: 8px;\n  padding: 9px 11px;\n  border-radius: 10px;\n  background: #f8fbff;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 14px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/reservoir.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/reservoir.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".van-dropdown-menu__title {\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.8);\n}\n.van-dropdown-menu__bar {\n  background-color: transparent;\n  height: 28px;\n  box-shadow: none;\n}\n.van-dropdown-menu__item {\n  margin-right: 10px;\n  background-color: #f6f6f6;\n  border-radius: 6px;\n}\n.van-dropdown-menu__title {\n  width: 60px;\n  padding: 0 8px 0 0;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/reservoir.vue?vue&type=style&index=1&id=01e1044c&lang=scss&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/reservoir.vue?vue&type=style&index=1&id=01e1044c&lang=scss&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".fs-content[data-v-01e1044c] {\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  height: auto;\n  display: inline-block;\n}\n.re-wrapper[data-v-01e1044c] {\n  text-align: center;\n  width: 44%;\n  margin-left: 4%;\n  margin-top: 10px;\n  padding: 4px 0;\n  float: left;\n  background: #f8fbff;\n  border-radius: 10px;\n  color: rgba(18, 18, 54, 0.5);\n}\n.re-wrapper .name[data-v-01e1044c] {\n  padding-top: 3px;\n  font-size: 14px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/riverDis.vue?vue&type=style&index=0&lang=scss&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/riverDis.vue?vue&type=style&index=0&lang=scss& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".van-dropdown-menu__title {\n  font-size: 12px;\n  color: rgba(0, 0, 0, 0.8);\n}\n.van-dropdown-menu__bar {\n  background-color: transparent;\n  height: 28px;\n  box-shadow: none;\n}\n.van-dropdown-menu__item {\n  margin-right: 10px;\n  background-color: #f6f6f6;\n  border-radius: 6px;\n}\n.van-dropdown-menu__title {\n  width: 60px;\n  padding: 0 8px 0 0;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/riverDis.vue?vue&type=style&index=1&id=1aabf072&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/riverDis.vue?vue&type=style&index=1&id=1aabf072&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".reservoir-wrapper[data-v-1aabf072] {\n  margin: 5px 23px 14px;\n}\n.reservoir-wrapper .title[data-v-1aabf072] {\n  padding: 0 5px 3px;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 14px;\n}\n.reservoir-wrapper .title .num[data-v-1aabf072] {\n  color: #121236;\n  font-weight: bold;\n  font-size: 14px;\n}\n.reservoir-wrapper .progress-wrapper[data-v-1aabf072] {\n  display: flex;\n  align-items: center;\n  height: 18px;\n  background: #ecf2ff;\n}\n.reservoir-wrapper .progress-wrapper .standard[data-v-1aabf072] {\n  height: 12px;\n  margin-right: 5px;\n  background: linear-gradient(90deg, #3cf0fa 0%, #2a82e4 100%);\n}\n.site-wrapper[data-v-1aabf072] {\n  margin: 8px;\n  padding: 12px 15px;\n  background: #fff;\n  border-radius: 10px;\n  position: relative;\n}\n.site-wrapper .site-name[data-v-1aabf072] {\n  color: #121236;\n  font-size: 14px;\n}\n.site-wrapper .site-name[data-v-1aabf072] {\n  flex: 1;\n}\n.site-wrapper .site-target[data-v-1aabf072] {\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 14px;\n}\n.site-wrapper .point[data-v-1aabf072] {\n  padding-top: 5px;\n  font-size: 12px;\n  color: rgba(18, 18, 54, 0.5);\n}\n.site-wrapper .point .circle[data-v-1aabf072] {\n  display: inline-block;\n  margin-right: 5px;\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n}\n.target-level[data-v-1aabf072] {\n  display: inline-block;\n  margin-left: 5px;\n  width: 30px;\n  height: 18px;\n  line-height: 18px;\n  border-radius: 4px;\n  font-size: 12px;\n  text-align: center;\n  box-sizing: border-box;\n}\n.exceed[data-v-1aabf072] {\n  font-size: 14px;\n  color: #ff8d1a;\n}\n.standard[data-v-1aabf072] {\n  color: #447bfc;\n}\n.num[data-v-1aabf072] {\n  font-size: 14px;\n  color: #121236;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/yearRank.vue?vue&type=style&index=0&id=5c6cb76e&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/yearRank.vue?vue&type=style&index=0&id=5c6cb76e&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".competition-wrapper[data-v-5c6cb76e] {\n  margin: 5px 7px 0;\n  padding: 8px 13px;\n  border-radius: 10px;\n  font-size: 14px;\n  background: rgba(18, 18, 54, 0.05);\n}\n.competition-wrapper .area[data-v-5c6cb76e] {\n  padding-left: 10px;\n  font-size: 14px;\n  color: #121236;\n}\n.competition-wrapper .score[data-v-5c6cb76e] {\n  padding: 0 8px;\n  font-size: 12px;\n  color: #27d043;\n}\n.numBg0[data-v-5c6cb76e] {\n  background: rgba(255, 87, 51, 0.05);\n}\n.numBg1[data-v-5c6cb76e] {\n  background: rgba(255, 141, 26, 0.05);\n}\n.numBg2[data-v-5c6cb76e] {\n  background: rgba(0, 186, 173, 0.05);\n}\n.numBg3[data-v-5c6cb76e] {\n  background: rgba(82, 113, 255, 0.05);\n}\n.numBg4[data-v-5c6cb76e] {\n  background: rgba(18, 18, 54, 0.05);\n}\n.num0[data-v-5c6cb76e] {\n  color: #ff5733;\n}\n.num1[data-v-5c6cb76e] {\n  color: #ff8d1a;\n}\n.num2[data-v-5c6cb76e] {\n  color: #00baad;\n}\n.num3[data-v-5c6cb76e] {\n  color: rgba(82, 113, 255, 0.8);\n}\n.num4[data-v-5c6cb76e] {\n  color: rgba(18, 18, 54, 0.5);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/echarts-liquidfill/index.js":
/*!**************************************************!*\
  !*** ./node_modules/echarts-liquidfill/index.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_liquidFill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/liquidFill */ "./node_modules/echarts-liquidfill/src/liquidFill.js");



/***/ }),

/***/ "./node_modules/echarts-liquidfill/src/liquidFill.js":
/*!***********************************************************!*\
  !*** ./node_modules/echarts-liquidfill/src/liquidFill.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _liquidFillSeries__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./liquidFillSeries */ "./node_modules/echarts-liquidfill/src/liquidFillSeries.js");
/* harmony import */ var _liquidFillView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./liquidFillView */ "./node_modules/echarts-liquidfill/src/liquidFillView.js");



/***/ }),

/***/ "./node_modules/echarts-liquidfill/src/liquidFillSeries.js":
/*!*****************************************************************!*\
  !*** ./node_modules/echarts-liquidfill/src/liquidFillSeries.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! echarts/lib/echarts */ "./node_modules/echarts/lib/echarts.js");


echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_0__["extendSeriesModel"]({

    type: 'series.liquidFill',

    optionUpdated: function () {
        var option = this.option;
        option.gridSize = Math.max(Math.floor(option.gridSize), 4);
    },

    getInitialData: function (option, ecModel) {
        var dimensions = echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_0__["helper"].createDimensions(option.data, {
            coordDimensions: ['value']
        });
        var list = new echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_0__["List"](dimensions, this);
        list.initData(option.data);
        return list;
    },

    defaultOption: {
        color: ['#294D99', '#156ACF', '#1598ED', '#45BDFF'],
        center: ['50%', '50%'],
        radius: '50%',
        amplitude: '8%',
        waveLength: '80%',
        phase: 'auto',
        period: 'auto',
        direction: 'right',
        shape: 'circle',

        waveAnimation: true,
        animationEasing: 'linear',
        animationEasingUpdate: 'linear',
        animationDuration: 2000,
        animationDurationUpdate: 1000,

        outline: {
            show: true,
            borderDistance: 8,
            itemStyle: {
                color: 'none',
                borderColor: '#294D99',
                borderWidth: 8,
                shadowBlur: 20,
                shadowColor: 'rgba(0, 0, 0, 0.25)'
            }
        },

        backgroundStyle: {
            color: '#E3F7FF'
        },

        itemStyle: {
            opacity: 0.95,
            shadowBlur: 50,
            shadowColor: 'rgba(0, 0, 0, 0.4)'
        },

        label: {
            show: true,
            color: '#294D99',
            insideColor: '#fff',
            fontSize: 50,
            fontWeight: 'bold',

            align: 'center',
            baseline: 'middle',
            position: 'inside'
        },

        emphasis: {
            itemStyle: {
                opacity: 0.8
            }
        }
    }
});


/***/ }),

/***/ "./node_modules/echarts-liquidfill/src/liquidFillShape.js":
/*!****************************************************************!*\
  !*** ./node_modules/echarts-liquidfill/src/liquidFillShape.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! echarts/lib/echarts */ "./node_modules/echarts/lib/echarts.js");


/* harmony default export */ __webpack_exports__["default"] = (echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_0__["graphic"].extendShape({
    type: 'ec-liquid-fill',

    shape: {
        waveLength: 0,
        radius: 0,
        radiusY: 0,
        cx: 0,
        cy: 0,
        waterLevel: 0,
        amplitude: 0,
        phase: 0,
        inverse: false
    },

    buildPath: function (ctx, shape) {
        if (shape.radiusY == null) {
            shape.radiusY = shape.radius;
        }

        /**
         * We define a sine wave having 4 waves, and make sure at least 8 curves
         * is drawn. Otherwise, it may cause blank area for some waves when
         * wave length is large enough.
         */
        var curves = Math.max(
            Math.ceil(2 * shape.radius / shape.waveLength * 4) * 2,
            8
        );

        // map phase to [-Math.PI * 2, 0]
        while (shape.phase < -Math.PI * 2) {
            shape.phase += Math.PI * 2;
        }
        while (shape.phase > 0) {
            shape.phase -= Math.PI * 2;
        }
        var phase = shape.phase / Math.PI / 2 * shape.waveLength;

        var left = shape.cx - shape.radius + phase - shape.radius * 2;

        /**
         * top-left corner as start point
         *
         * draws this point
         *  |
         * \|/
         *  ~~~~~~~~
         *  |      |
         *  +------+
         */
        ctx.moveTo(left, shape.waterLevel);

        /**
         * top wave
         *
         * ~~~~~~~~ <- draws this sine wave
         * |      |
         * +------+
         */
        var waveRight = 0;
        for (var c = 0; c < curves; ++c) {
            var stage = c % 4;
            var pos = getWaterPositions(c * shape.waveLength / 4, stage,
                shape.waveLength, shape.amplitude);
            ctx.bezierCurveTo(pos[0][0] + left, -pos[0][1] + shape.waterLevel,
                pos[1][0] + left, -pos[1][1] + shape.waterLevel,
                pos[2][0] + left, -pos[2][1] + shape.waterLevel);

            if (c === curves - 1) {
                waveRight = pos[2][0];
            }
        }

        if (shape.inverse) {
            /**
             * top-right corner
             *                  2. draws this line
             *                          |
             *                       +------+
             * 3. draws this line -> |      | <- 1. draws this line
             *                       ~~~~~~~~
             */
            ctx.lineTo(waveRight + left, shape.cy - shape.radiusY);
            ctx.lineTo(left, shape.cy - shape.radiusY);
            ctx.lineTo(left, shape.waterLevel);
        }
        else {
            /**
             * top-right corner
             *
             *                       ~~~~~~~~
             * 3. draws this line -> |      | <- 1. draws this line
             *                       +------+
             *                          ^
             *                          |
             *                  2. draws this line
             */
            ctx.lineTo(waveRight + left, shape.cy + shape.radiusY);
            ctx.lineTo(left, shape.cy + shape.radiusY);
            ctx.lineTo(left, shape.waterLevel);
        }

        ctx.closePath();
    }
}));



/**
 * Using Bezier curves to fit sine wave.
 * There is 4 control points for each curve of wave,
 * which is at 1/4 wave length of the sine wave.
 *
 * The control points for a wave from (a) to (d) are a-b-c-d:
 *          c *----* d
 *     b *
 *       |
 * ... a * ..................
 *
 * whose positions are a: (0, 0), b: (0.5, 0.5), c: (1, 1), d: (PI / 2, 1)
 *
 * @param {number} x          x position of the left-most point (a)
 * @param {number} stage      0-3, stating which part of the wave it is
 * @param {number} waveLength wave length of the sine wave
 * @param {number} amplitude  wave amplitude
 */
function getWaterPositions(x, stage, waveLength, amplitude) {
    if (stage === 0) {
        return [
            [x + 1 / 2 * waveLength / Math.PI / 2, amplitude / 2],
            [x + 1 / 2 * waveLength / Math.PI,     amplitude],
            [x + waveLength / 4,                   amplitude]
        ];
    }
    else if (stage === 1) {
        return [
            [x + 1 / 2 * waveLength / Math.PI / 2 * (Math.PI - 2),
            amplitude],
            [x + 1 / 2 * waveLength / Math.PI / 2 * (Math.PI - 1),
            amplitude / 2],
            [x + waveLength / 4,                   0]
        ]
    }
    else if (stage === 2) {
        return [
            [x + 1 / 2 * waveLength / Math.PI / 2, -amplitude / 2],
            [x + 1 / 2 * waveLength / Math.PI,     -amplitude],
            [x + waveLength / 4,                   -amplitude]
        ]
    }
    else {
        return [
            [x + 1 / 2 * waveLength / Math.PI / 2 * (Math.PI - 2),
            -amplitude],
            [x + 1 / 2 * waveLength / Math.PI / 2 * (Math.PI - 1),
            -amplitude / 2],
            [x + waveLength / 4,                   0]
        ]
    }
}


/***/ }),

/***/ "./node_modules/echarts-liquidfill/src/liquidFillView.js":
/*!***************************************************************!*\
  !*** ./node_modules/echarts-liquidfill/src/liquidFillView.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! echarts/lib/echarts */ "./node_modules/echarts/lib/echarts.js");
/* harmony import */ var echarts_lib_util_number__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! echarts/lib/util/number */ "./node_modules/echarts/lib/util/number.js");
/* harmony import */ var _liquidFillShape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./liquidFillShape */ "./node_modules/echarts-liquidfill/src/liquidFillShape.js");




var parsePercent = echarts_lib_util_number__WEBPACK_IMPORTED_MODULE_1__["parsePercent"];

function isPathSymbol(symbol) {
    return symbol && symbol.indexOf('path://') === 0
}

echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_0__["extendChartView"]({

    type: 'liquidFill',

    render: function (seriesModel, ecModel, api) {
        var self = this;
        var group = this.group;
        group.removeAll();

        var data = seriesModel.getData();

        var itemModel = data.getItemModel(0);

        var center = itemModel.get('center');
        var radius = itemModel.get('radius');

        var width = api.getWidth();
        var height = api.getHeight();
        var size = Math.min(width, height);
        // itemStyle
        var outlineDistance = 0;
        var outlineBorderWidth = 0;
        var showOutline = seriesModel.get('outline.show');

        if (showOutline) {
            outlineDistance = seriesModel.get('outline.borderDistance');
            outlineBorderWidth = parsePercent(
                seriesModel.get('outline.itemStyle.borderWidth'), size
            );
        }

        var cx = parsePercent(center[0], width);
        var cy = parsePercent(center[1], height);

        var outterRadius;
        var innerRadius;
        var paddingRadius;

        var isFillContainer = false;

        var symbol = seriesModel.get('shape');
        if (symbol === 'container') {
            // a shape that fully fills the container
            isFillContainer = true;

            outterRadius = [
                width / 2,
                height / 2
            ];
            innerRadius = [
                outterRadius[0] - outlineBorderWidth / 2,
                outterRadius[1] - outlineBorderWidth / 2
            ];
            paddingRadius = [
                parsePercent(outlineDistance, width),
                parsePercent(outlineDistance, height)
            ];

            radius = [
                Math.max(innerRadius[0] - paddingRadius[0], 0),
                Math.max(innerRadius[1] - paddingRadius[1], 0)
            ];
        }
        else {
            outterRadius = parsePercent(radius, size) / 2;
            innerRadius = outterRadius - outlineBorderWidth / 2;
            paddingRadius = parsePercent(outlineDistance, size);

            radius = Math.max(innerRadius - paddingRadius, 0);
        }

        if (showOutline) {
            var outline = getOutline();
            outline.style.lineWidth = outlineBorderWidth;
            group.add(getOutline());
        }

        var left = isFillContainer ? 0 : cx - radius;
        var top = isFillContainer ? 0 : cy - radius;

        var wavePath = null;

        group.add(getBackground());

        // each data item for a wave
        var oldData = this._data;
        var waves = [];
        data.diff(oldData)
            .add(function (idx) {
                var wave = getWave(idx, false);

                var waterLevel = wave.shape.waterLevel;
                wave.shape.waterLevel = isFillContainer ? height / 2 : radius;
                echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_0__["graphic"].initProps(wave, {
                    shape: {
                        waterLevel: waterLevel
                    }
                }, seriesModel);

                wave.z2 = 2;
                setWaveAnimation(idx, wave, null);

                group.add(wave);
                data.setItemGraphicEl(idx, wave);
                waves.push(wave);
            })
            .update(function (newIdx, oldIdx) {
                var waveElement = oldData.getItemGraphicEl(oldIdx);

                // new wave is used to calculate position, but not added
                var newWave = getWave(newIdx, false, waveElement);

                // changes with animation
                var shape = {};
                var shapeAttrs = ['amplitude', 'cx', 'cy', 'phase', 'radius', 'radiusY', 'waterLevel', 'waveLength'];
                for (var i = 0; i < shapeAttrs.length; ++i) {
                    var attr = shapeAttrs[i];
                    if (newWave.shape.hasOwnProperty(attr)) {
                        shape[attr] = newWave.shape[attr];
                    }
                }

                var style = {};
                var styleAttrs = ['fill', 'opacity', 'shadowBlur', 'shadowColor'];
                for (var i = 0; i < styleAttrs.length; ++i) {
                    var attr = styleAttrs[i];
                    if (newWave.style.hasOwnProperty(attr)) {
                        style[attr] = newWave.style[attr];
                    }
                }

                if (isFillContainer) {
                    shape.radiusY = height / 2;
                }

                // changes with animation
                echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_0__["graphic"].updateProps(waveElement, {
                    shape: shape,
                    x: newWave.x,
                    y: newWave.y
                }, seriesModel);

                if (seriesModel.isUniversalTransitionEnabled && seriesModel.isUniversalTransitionEnabled()) {
                    echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_0__["graphic"].updateProps(waveElement, {
                        style: style
                    }, seriesModel);
                }
                else {
                    waveElement.useStyle(style);
                }

                // instant changes
                var oldWaveClipPath = waveElement.getClipPath();
                var newWaveClipPath = newWave.getClipPath();

                waveElement.setClipPath(newWave.getClipPath());
                waveElement.shape.inverse = newWave.inverse;

                if (oldWaveClipPath && newWaveClipPath
                    && self._shape === symbol
                    // TODO use zrender morphing to apply complex symbol animation.
                    && !isPathSymbol(symbol)
                ) {
                    // Can be animated.
                    echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_0__["graphic"].updateProps(newWaveClipPath, {
                        shape: oldWaveClipPath.shape
                    }, seriesModel, { isFrom: true });
                }

                setWaveAnimation(newIdx, waveElement, waveElement);
                group.add(waveElement);
                data.setItemGraphicEl(newIdx, waveElement);
                waves.push(waveElement);
            })
            .remove(function (idx) {
                var wave = oldData.getItemGraphicEl(idx);
                group.remove(wave);
            })
            .execute();

        if (itemModel.get('label.show')) {
            group.add(getText(waves));
        }

        this._shape = symbol;
        this._data = data;

        /**
         * Get path for outline, background and clipping
         *
         * @param {number} r outter radius of shape
         * @param {boolean|undefined} isForClipping if the shape is used
         *                                          for clipping
         */
        function getPath(r, isForClipping) {
            if (symbol) {
                // customed symbol path
                if (isPathSymbol(symbol)) {
                    var path = echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_0__["graphic"].makePath(symbol.slice(7), {});
                    var bouding = path.getBoundingRect();
                    var w = bouding.width;
                    var h = bouding.height;
                    if (w > h) {
                        h = r * 2 / w * h;
                        w = r * 2;
                    }
                    else {
                        w = r * 2 / h * w;
                        h = r * 2;
                    }

                    var left = isForClipping ? 0 : cx - w / 2;
                    var top = isForClipping ? 0 : cy - h / 2;
                    path = echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_0__["graphic"].makePath(
                        symbol.slice(7),
                        {},
                        new echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_0__["graphic"].BoundingRect(left, top, w, h)
                    );
                    if (isForClipping) {
                        path.x = -w / 2;
                        path.y = -h / 2;
                    }
                    return path;
                }
                else if (isFillContainer) {
                    // fully fill the container
                    var x = isForClipping ? -r[0] : cx - r[0];
                    var y = isForClipping ? -r[1] : cy - r[1];
                    return echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_0__["helper"].createSymbol(
                        'rect', x, y, r[0] * 2, r[1] * 2
                    );
                }
                else {
                    var x = isForClipping ? -r : cx - r;
                    var y = isForClipping ? -r : cy - r;
                    if (symbol === 'pin') {
                        y += r;
                    }
                    else if (symbol === 'arrow') {
                        y -= r;
                    }
                    return echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_0__["helper"].createSymbol(symbol, x, y, r * 2, r * 2);
                }
            }

            return new echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_0__["graphic"].Circle({
                shape: {
                    cx: isForClipping ? 0 : cx,
                    cy: isForClipping ? 0 : cy,
                    r: r
                }
            });
        }
        /**
         * Create outline
         */
        function getOutline() {
            var outlinePath = getPath(outterRadius);
            outlinePath.style.fill = null;

            outlinePath.setStyle(seriesModel.getModel('outline.itemStyle')
                .getItemStyle());

            return outlinePath;
        }

        /**
         * Create background
         */
        function getBackground() {
            // Seperate stroke and fill, so we can use stroke to cover the alias of clipping.
            var strokePath = getPath(radius);
            strokePath.setStyle(seriesModel.getModel('backgroundStyle')
                .getItemStyle());
            strokePath.style.fill = null;

            // Stroke is front of wave
            strokePath.z2 = 5;

            var fillPath = getPath(radius);
            fillPath.setStyle(seriesModel.getModel('backgroundStyle')
                .getItemStyle());
            fillPath.style.stroke = null;

            var group = new echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_0__["graphic"].Group();
            group.add(strokePath);
            group.add(fillPath);

            return group;
        }

        /**
         * wave shape
         */
        function getWave(idx, isInverse, oldWave) {
            var radiusX = isFillContainer ? radius[0] : radius;
            var radiusY = isFillContainer ? height / 2 : radius;

            var itemModel = data.getItemModel(idx);
            var itemStyleModel = itemModel.getModel('itemStyle');
            var phase = itemModel.get('phase');
            var amplitude = parsePercent(itemModel.get('amplitude'),
                radiusY * 2);
            var waveLength = parsePercent(itemModel.get('waveLength'),
                radiusX * 2);

            var value = data.get('value', idx);
            var waterLevel = radiusY - value * radiusY * 2;
            phase = oldWave ? oldWave.shape.phase
                : (phase === 'auto' ? idx * Math.PI / 4 : phase);
            var normalStyle = itemStyleModel.getItemStyle();
            if (!normalStyle.fill) {
                var seriesColor = seriesModel.get('color');
                var id = idx % seriesColor.length;
                normalStyle.fill = seriesColor[id];
            }

            var x = radiusX * 2;
            var wave = new _liquidFillShape__WEBPACK_IMPORTED_MODULE_2__["default"]({
                shape: {
                    waveLength: waveLength,
                    radius: radiusX,
                    radiusY: radiusY,
                    cx: x,
                    cy: 0,
                    waterLevel: waterLevel,
                    amplitude: amplitude,
                    phase: phase,
                    inverse: isInverse
                },
                style: normalStyle,
                x: cx,
                y: cy,
            });
            wave.shape._waterLevel = waterLevel;

            var hoverStyle = itemModel.getModel('emphasis.itemStyle')
                .getItemStyle();
            hoverStyle.lineWidth = 0;

            wave.ensureState('emphasis').style = hoverStyle;
            echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_0__["helper"].enableHoverEmphasis(wave);

            // clip out the part outside the circle
            var clip = getPath(radius, true);
            // set fill for clipPath, otherwise it will not trigger hover event
            clip.setStyle({
                fill: 'white'
            });
            wave.setClipPath(clip);

            return wave;
        }

        function setWaveAnimation(idx, wave, oldWave) {
            var itemModel = data.getItemModel(idx);

            var maxSpeed = itemModel.get('period');
            var direction = itemModel.get('direction');

            var value = data.get('value', idx);

            var phase = itemModel.get('phase');
            phase = oldWave ? oldWave.shape.phase
                : (phase === 'auto' ? idx * Math.PI / 4 : phase);

            var defaultSpeed = function (maxSpeed) {
                var cnt = data.count();
                return cnt === 0 ? maxSpeed : maxSpeed *
                    (0.2 + (cnt - idx) / cnt * 0.8);
            };
            var speed = 0;
            if (maxSpeed === 'auto') {
                speed = defaultSpeed(5000);
            }
            else {
                speed = typeof maxSpeed === 'function'
                    ? maxSpeed(value, idx) : maxSpeed;
            }

            // phase for moving left/right
            var phaseOffset = 0;
            if (direction === 'right' || direction == null) {
                phaseOffset = Math.PI;
            }
            else if (direction === 'left') {
                phaseOffset = -Math.PI;
            }
            else if (direction === 'none') {
                phaseOffset = 0;
            }
            else {
                console.error('Illegal direction value for liquid fill.');
            }

            // wave animation of moving left/right
            if (direction !== 'none' && itemModel.get('waveAnimation')) {
                wave
                    .animate('shape', true)
                    .when(0, {
                        phase: phase
                    })
                    .when(speed / 2, {
                        phase: phaseOffset + phase
                    })
                    .when(speed, {
                        phase: phaseOffset * 2 + phase
                    })
                    .during(function () {
                        if (wavePath) {
                            wavePath.dirty(true);
                        }
                    })
                    .start();
            }
        }

        /**
         * text on wave
         */
        function getText(waves) {
            var labelModel = itemModel.getModel('label');

            function formatLabel() {
                var formatted = seriesModel.getFormattedLabel(0, 'normal');
                var defaultVal = (data.get('value', 0) * 100);
                var defaultLabel = data.getName(0) || seriesModel.name;
                if (!isNaN(defaultVal)) {
                    defaultLabel = defaultVal.toFixed(0) + '%';
                }
                return formatted == null ? defaultLabel : formatted;
            }

            var textRectOption = {
                z2: 10,
                shape: {
                    x: left,
                    y: top,
                    width: (isFillContainer ? radius[0] : radius) * 2,
                    height: (isFillContainer ? radius[1] : radius) * 2
                },
                style: {
                    fill: 'transparent'
                },
                textConfig: {
                    position: labelModel.get('position') || 'inside'
                },
                silent: true
            };
            var textOption = {
                style: {
                    text: formatLabel(),
                    textAlign: labelModel.get('align'),
                    textVerticalAlign: labelModel.get('baseline')
                }
            };
            Object.assign(textOption.style, echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_0__["helper"].createTextStyle(labelModel));

            var outsideTextRect = new echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_0__["graphic"].Rect(textRectOption);
            var insideTextRect = new echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_0__["graphic"].Rect(textRectOption);
            insideTextRect.disableLabelAnimation = true;
            outsideTextRect.disableLabelAnimation = true;

            var outsideText = new echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_0__["graphic"].Text(textOption);
            var insideText = new echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_0__["graphic"].Text(textOption);
            outsideTextRect.setTextContent(outsideText);

            insideTextRect.setTextContent(insideText);
            var insColor = labelModel.get('insideColor');
            insideText.style.fill = insColor;

            var group = new echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_0__["graphic"].Group();
            group.add(outsideTextRect);
            group.add(insideTextRect);

            // clip out waves for insideText
            var boundingCircle = getPath(radius, true);

            wavePath = new echarts_lib_echarts__WEBPACK_IMPORTED_MODULE_0__["graphic"].CompoundPath({
                shape: {
                    paths: waves
                },
                x: cx,
                y: cy
            });

            wavePath.setClipPath(boundingCircle);
            insideTextRect.setClipPath(wavePath);

            return group;
        }
    },

    dispose: function () {
        // dispose nothing here
    }
});


/***/ }),

/***/ "./node_modules/echarts/lib/echarts.js":
/*!*********************************************!*\
  !*** ./node_modules/echarts/lib/echarts.js ***!
  \*********************************************/
/*! exports provided: version, dependencies, PRIORITY, init, connect, disconnect, disConnect, dispose, getInstanceByDom, getInstanceById, registerTheme, registerPreprocessor, registerProcessor, registerPostInit, registerPostUpdate, registerUpdateLifecycle, registerAction, registerCoordinateSystem, getCoordinateSystemDimensions, registerLocale, registerLayout, registerVisual, registerLoading, setCanvasCreator, registerMap, getMap, registerTransform, dataTool, zrender, matrix, vector, zrUtil, color, throttle, helper, use, setPlatformAPI, parseGeoJSON, parseGeoJson, number, time, graphic, format, util, env, List, Model, Axis, ComponentModel, ComponentView, SeriesModel, ChartView, innerDrawElementOnCanvas, extendComponentModel, extendComponentView, extendSeriesModel, extendChartView, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _export_core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./export/core.js */ "./node_modules/echarts/lib/export/core.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "version", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["version"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dependencies", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["dependencies"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PRIORITY", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["PRIORITY"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "init", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["init"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "connect", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["connect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disconnect", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["disconnect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "disConnect", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["disConnect"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dispose", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["dispose"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInstanceByDom", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["getInstanceByDom"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getInstanceById", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["getInstanceById"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerTheme", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["registerTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerPreprocessor", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["registerPreprocessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerProcessor", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["registerProcessor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerPostInit", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["registerPostInit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerPostUpdate", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["registerPostUpdate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerUpdateLifecycle", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["registerUpdateLifecycle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerAction", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["registerAction"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerCoordinateSystem", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["registerCoordinateSystem"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getCoordinateSystemDimensions", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["getCoordinateSystemDimensions"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerLocale", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["registerLocale"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerLayout", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["registerLayout"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerVisual", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["registerVisual"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerLoading", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["registerLoading"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setCanvasCreator", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["setCanvasCreator"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerMap", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["registerMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "getMap", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["getMap"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerTransform", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["registerTransform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "dataTool", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["dataTool"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zrender", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["zrender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "matrix", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["matrix"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "vector", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["vector"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "zrUtil", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["zrUtil"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "color", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["color"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "throttle", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["throttle"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "helper", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["helper"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "use", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["use"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setPlatformAPI", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["setPlatformAPI"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseGeoJSON", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["parseGeoJSON"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseGeoJson", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["parseGeoJson"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "number", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["number"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "time", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["time"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "graphic", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["graphic"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "format", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["format"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "util", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["util"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "env", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["env"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "List", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["List"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["Model"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Axis", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["Axis"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentModel", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["ComponentModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ComponentView", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["ComponentView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SeriesModel", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["SeriesModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ChartView", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["ChartView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "innerDrawElementOnCanvas", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["innerDrawElementOnCanvas"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendComponentModel", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["extendComponentModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendComponentView", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["extendComponentView"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendSeriesModel", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["extendSeriesModel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "extendChartView", function() { return _export_core_js__WEBPACK_IMPORTED_MODULE_0__["extendChartView"]; });

/* harmony import */ var _extension_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./extension.js */ "./node_modules/echarts/lib/extension.js");
/* harmony import */ var _core_echarts_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/echarts.js */ "./node_modules/echarts/lib/core/echarts.js");
/* harmony import */ var _renderer_installCanvasRenderer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderer/installCanvasRenderer.js */ "./node_modules/echarts/lib/renderer/installCanvasRenderer.js");
/* harmony import */ var _component_dataset_install_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/dataset/install.js */ "./node_modules/echarts/lib/component/dataset/install.js");
/* harmony import */ var _label_installLabelLayout_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./label/installLabelLayout.js */ "./node_modules/echarts/lib/label/installLabelLayout.js");

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/


/**
 * AUTO-GENERATED FILE. DO NOT MODIFY.
 */

/*
* Licensed to the Apache Software Foundation (ASF) under one
* or more contributor license agreements.  See the NOTICE file
* distributed with this work for additional information
* regarding copyright ownership.  The ASF licenses this file
* to you under the Apache License, Version 2.0 (the
* "License"); you may not use this file except in compliance
* with the License.  You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing,
* software distributed under the License is distributed on an
* "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
* KIND, either express or implied.  See the License for the
* specific language governing permissions and limitations
* under the License.
*/





// Default to have canvas renderer and dataset for compitatble reason.
Object(_extension_js__WEBPACK_IMPORTED_MODULE_1__["use"])([_renderer_installCanvasRenderer_js__WEBPACK_IMPORTED_MODULE_3__["install"], _component_dataset_install_js__WEBPACK_IMPORTED_MODULE_4__["install"]]);
// TODO: Compatitable with the following code
// import echarts from 'echarts/lib/echarts.js'
/* harmony default export */ __webpack_exports__["default"] = ({
  init: function () {
    if (true) {
      /* eslint-disable-next-line */
      console.error("\"import echarts from 'echarts/lib/echarts.js'\" is not supported anymore. Use \"import * as echarts from 'echarts/lib/echarts.js'\" instead;");
    }
    // @ts-ignore
    return _core_echarts_js__WEBPACK_IMPORTED_MODULE_2__["init"].apply(null, arguments);
  }
});
// Import label layout by default.
// TODO remove

Object(_extension_js__WEBPACK_IMPORTED_MODULE_1__["use"])(_label_installLabelLayout_js__WEBPACK_IMPORTED_MODULE_5__["installLabelLayout"]);

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/basinWaterStandard.vue?vue&type=style&index=0&id=3c0bf160&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/basinWaterStandard.vue?vue&type=style&index=0&id=3c0bf160&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./basinWaterStandard.vue?vue&type=style&index=0&id=3c0bf160&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/basinWaterStandard.vue?vue&type=style&index=0&id=3c0bf160&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("c29a26ae", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/competitionGovern.vue?vue&type=style&index=0&id=32ec199d&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/competitionGovern.vue?vue&type=style&index=0&id=32ec199d&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./competitionGovern.vue?vue&type=style&index=0&id=32ec199d&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/competitionGovern.vue?vue&type=style&index=0&id=32ec199d&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2a9d77d0", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/echarts/lakeChart.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/echarts/lakeChart.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./lakeChart.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/echarts/lakeChart.vue?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("853084a4", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/echarts/lakeChart.vue?vue&type=style&index=1&id=330ba4b6&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/echarts/lakeChart.vue?vue&type=style&index=1&id=330ba4b6&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./lakeChart.vue?vue&type=style&index=1&id=330ba4b6&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/echarts/lakeChart.vue?vue&type=style&index=1&id=330ba4b6&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("fc833f0e", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/functionZone.vue?vue&type=style&index=0&id=78218109&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/functionZone.vue?vue&type=style&index=0&id=78218109&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./functionZone.vue?vue&type=style&index=0&id=78218109&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/functionZone.vue?vue&type=style&index=0&id=78218109&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("0b1a2180", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/purPlant.vue?vue&type=style&index=0&id=7aa03a43&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/purPlant.vue?vue&type=style&index=0&id=7aa03a43&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./purPlant.vue?vue&type=style&index=0&id=7aa03a43&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/purPlant.vue?vue&type=style&index=0&id=7aa03a43&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("466c1060", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/reservoir.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/reservoir.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./reservoir.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/reservoir.vue?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("b8816ad2", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/reservoir.vue?vue&type=style&index=1&id=01e1044c&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/reservoir.vue?vue&type=style&index=1&id=01e1044c&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./reservoir.vue?vue&type=style&index=1&id=01e1044c&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/reservoir.vue?vue&type=style&index=1&id=01e1044c&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("41b126ae", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/riverDis.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/riverDis.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./riverDis.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/riverDis.vue?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("1bd9b4a2", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/riverDis.vue?vue&type=style&index=1&id=1aabf072&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/riverDis.vue?vue&type=style&index=1&id=1aabf072&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./riverDis.vue?vue&type=style&index=1&id=1aabf072&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/riverDis.vue?vue&type=style&index=1&id=1aabf072&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("2cd0d6a7", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/yearRank.vue?vue&type=style&index=0&id=5c6cb76e&lang=scss&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/waterHomePage/components/yearRank.vue?vue&type=style&index=0&id=5c6cb76e&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./yearRank.vue?vue&type=style&index=0&id=5c6cb76e&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/yearRank.vue?vue&type=style&index=0&id=5c6cb76e&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("441f33cd", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/river@2x.png":
/*!*********************************!*\
  !*** ./src/assets/river@2x.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/toright.png":
/*!********************************!*\
  !*** ./src/assets/toright.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACnSURBVCiRhVJtCsMgDH0J814WeqsVZsHdSlju1YH7MW3Tktj3T3xfiRIumJctotKrHSOorgBQckiaR4YgXs0Odl27ATVRUiljUJ1KDsIAYIjEFTYumWltLrcF1YlHrruBcc+u642YMZrHR7Sr6iSrEdWVzSp3y0F/x+f3g/PDCwYfobwfxKeEA66ocxkASg7irl63+P+atFfVmJctAejzSU8pOYjm/QD4UUteaLTw6wAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/饼状图.png":
/*!****************************!*\
  !*** ./src/assets/饼状图.png ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAL3SURBVFiFzZdPTNNQHMe/r+3aDcYEVBIO/iFRIxpjpoQQDQcOogeuIngnmqgHPCkxsQSMF01EY0w8ecNw8KDxoIFlCYIRIeoFyKIihED4N7YBXfen7+cBWDa24dZN9Htq2vd7n0/fa19fgX8clmsHNHb5NASugmMJAjww+BA71tObab1kFqwOU4FaxbR1CzSAASAAggAab1oC0QuEI4/YyVfT2/WT8QhcfTvVapXEi1aLdFyxSA5JFDC16L/2/HDbJzA+nKYsAmK3WWX3w3T9/nEEWt/N3Lcplus2WbJnKhsXCxg9oLHmKlbZ3ZyVQOfA8gFfMDSyq0DZbQKcGEZNNNZUiqMvLzAGir8kpGp/5fXkjTDnnrzAYxKoh6epe+vpJIHOD0s15aX2xxZRkPMGB4CoBu4dvcSHqt+kFVAH/aU6J5copBwY0yF9Edw7CkTWQPpSA32trU4psKYF3Yok2vIKX50CBSaAuKknXXuWJHBv0H/eUaCcyBvZ0MGXx0HaXLJUJOCkHogJAoGQ/iRfbAp5N4Z8JU0DznhF9Z2YwN1+7367Ih/OC3x1GuT/AZCxbTtmGOdiArO+ldzvnodBPg9Im82oOfFoBbCxENmtcnkubAr5QCu/AB7JoijqiAnIklBimh6cKCaDVCjFpsrXl2JiZWb57NTHPgB9pusB4JZr3l9otTiyLR75OYtAMJQ1VADqeluc7o1jIMqNLCYv92zCYwIGx/edFIiPAAAcZHoOTaQ9SaCksKhrBwUSIgCAerZo3rsaXNgJoKvFqSYJAICmRzp2gN++9UTCpvTm+5nPJXZbVaa9ZfsaulqcSZvghP1Aja+8Rgun+4TlnKS7TxJobGSGIrKqcNTQ8w3fOvcpBQBArd3rsUmyMxiOrv5teEoBAGg74xjfI+tlfk3/YpZKgFsA6raDAxn8GXUM+OrXwqGnhYp8aOu1VA8hAW4RaI9fbnMS2Izav3BkPqB32a2WfaIgHJQlsfDb5Bz8wVAMlA34v8lvE8oqY/VvbdEAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/views/waterHomePage/components/basinWaterStandard.vue":
/*!*******************************************************************!*\
  !*** ./src/views/waterHomePage/components/basinWaterStandard.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _basinWaterStandard_vue_vue_type_template_id_3c0bf160_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./basinWaterStandard.vue?vue&type=template&id=3c0bf160&scoped=true& */ "./src/views/waterHomePage/components/basinWaterStandard.vue?vue&type=template&id=3c0bf160&scoped=true&");
/* harmony import */ var _basinWaterStandard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./basinWaterStandard.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/components/basinWaterStandard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _basinWaterStandard_vue_vue_type_style_index_0_id_3c0bf160_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./basinWaterStandard.vue?vue&type=style&index=0&id=3c0bf160&lang=scss&scoped=true& */ "./src/views/waterHomePage/components/basinWaterStandard.vue?vue&type=style&index=0&id=3c0bf160&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _basinWaterStandard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _basinWaterStandard_vue_vue_type_template_id_3c0bf160_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _basinWaterStandard_vue_vue_type_template_id_3c0bf160_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3c0bf160",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/components/basinWaterStandard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/components/basinWaterStandard.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./src/views/waterHomePage/components/basinWaterStandard.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_basinWaterStandard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./basinWaterStandard.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/basinWaterStandard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_basinWaterStandard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/components/basinWaterStandard.vue?vue&type=style&index=0&id=3c0bf160&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/components/basinWaterStandard.vue?vue&type=style&index=0&id=3c0bf160&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_basinWaterStandard_vue_vue_type_style_index_0_id_3c0bf160_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./basinWaterStandard.vue?vue&type=style&index=0&id=3c0bf160&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/basinWaterStandard.vue?vue&type=style&index=0&id=3c0bf160&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_basinWaterStandard_vue_vue_type_style_index_0_id_3c0bf160_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_basinWaterStandard_vue_vue_type_style_index_0_id_3c0bf160_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_basinWaterStandard_vue_vue_type_style_index_0_id_3c0bf160_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_basinWaterStandard_vue_vue_type_style_index_0_id_3c0bf160_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/waterHomePage/components/basinWaterStandard.vue?vue&type=template&id=3c0bf160&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/components/basinWaterStandard.vue?vue&type=template&id=3c0bf160&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_basinWaterStandard_vue_vue_type_template_id_3c0bf160_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./basinWaterStandard.vue?vue&type=template&id=3c0bf160&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/basinWaterStandard.vue?vue&type=template&id=3c0bf160&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_basinWaterStandard_vue_vue_type_template_id_3c0bf160_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_basinWaterStandard_vue_vue_type_template_id_3c0bf160_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/waterHomePage/components/competitionGovern.vue":
/*!******************************************************************!*\
  !*** ./src/views/waterHomePage/components/competitionGovern.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _competitionGovern_vue_vue_type_template_id_32ec199d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./competitionGovern.vue?vue&type=template&id=32ec199d&scoped=true& */ "./src/views/waterHomePage/components/competitionGovern.vue?vue&type=template&id=32ec199d&scoped=true&");
/* harmony import */ var _competitionGovern_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./competitionGovern.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/components/competitionGovern.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _competitionGovern_vue_vue_type_style_index_0_id_32ec199d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./competitionGovern.vue?vue&type=style&index=0&id=32ec199d&lang=scss&scoped=true& */ "./src/views/waterHomePage/components/competitionGovern.vue?vue&type=style&index=0&id=32ec199d&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _competitionGovern_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _competitionGovern_vue_vue_type_template_id_32ec199d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _competitionGovern_vue_vue_type_template_id_32ec199d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "32ec199d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/components/competitionGovern.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/components/competitionGovern.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./src/views/waterHomePage/components/competitionGovern.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_competitionGovern_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./competitionGovern.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/competitionGovern.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_competitionGovern_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/components/competitionGovern.vue?vue&type=style&index=0&id=32ec199d&lang=scss&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/components/competitionGovern.vue?vue&type=style&index=0&id=32ec199d&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_competitionGovern_vue_vue_type_style_index_0_id_32ec199d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./competitionGovern.vue?vue&type=style&index=0&id=32ec199d&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/competitionGovern.vue?vue&type=style&index=0&id=32ec199d&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_competitionGovern_vue_vue_type_style_index_0_id_32ec199d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_competitionGovern_vue_vue_type_style_index_0_id_32ec199d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_competitionGovern_vue_vue_type_style_index_0_id_32ec199d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_competitionGovern_vue_vue_type_style_index_0_id_32ec199d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/waterHomePage/components/competitionGovern.vue?vue&type=template&id=32ec199d&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/components/competitionGovern.vue?vue&type=template&id=32ec199d&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_competitionGovern_vue_vue_type_template_id_32ec199d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./competitionGovern.vue?vue&type=template&id=32ec199d&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/competitionGovern.vue?vue&type=template&id=32ec199d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_competitionGovern_vue_vue_type_template_id_32ec199d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_competitionGovern_vue_vue_type_template_id_32ec199d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/waterHomePage/components/echarts/lakeChart.vue":
/*!******************************************************************!*\
  !*** ./src/views/waterHomePage/components/echarts/lakeChart.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lakeChart_vue_vue_type_template_id_330ba4b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lakeChart.vue?vue&type=template&id=330ba4b6&scoped=true& */ "./src/views/waterHomePage/components/echarts/lakeChart.vue?vue&type=template&id=330ba4b6&scoped=true&");
/* harmony import */ var _lakeChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lakeChart.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/components/echarts/lakeChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _lakeChart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lakeChart.vue?vue&type=style&index=0&lang=scss& */ "./src/views/waterHomePage/components/echarts/lakeChart.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _lakeChart_vue_vue_type_style_index_1_id_330ba4b6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lakeChart.vue?vue&type=style&index=1&id=330ba4b6&lang=scss&scoped=true& */ "./src/views/waterHomePage/components/echarts/lakeChart.vue?vue&type=style&index=1&id=330ba4b6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _lakeChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _lakeChart_vue_vue_type_template_id_330ba4b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _lakeChart_vue_vue_type_template_id_330ba4b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "330ba4b6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/components/echarts/lakeChart.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/components/echarts/lakeChart.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./src/views/waterHomePage/components/echarts/lakeChart.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lakeChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./lakeChart.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/echarts/lakeChart.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lakeChart_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/components/echarts/lakeChart.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************!*\
  !*** ./src/views/waterHomePage/components/echarts/lakeChart.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lakeChart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./lakeChart.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/echarts/lakeChart.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lakeChart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lakeChart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lakeChart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lakeChart_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/waterHomePage/components/echarts/lakeChart.vue?vue&type=style&index=1&id=330ba4b6&lang=scss&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/components/echarts/lakeChart.vue?vue&type=style&index=1&id=330ba4b6&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lakeChart_vue_vue_type_style_index_1_id_330ba4b6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./lakeChart.vue?vue&type=style&index=1&id=330ba4b6&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/echarts/lakeChart.vue?vue&type=style&index=1&id=330ba4b6&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lakeChart_vue_vue_type_style_index_1_id_330ba4b6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lakeChart_vue_vue_type_style_index_1_id_330ba4b6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lakeChart_vue_vue_type_style_index_1_id_330ba4b6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lakeChart_vue_vue_type_style_index_1_id_330ba4b6_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/waterHomePage/components/echarts/lakeChart.vue?vue&type=template&id=330ba4b6&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/components/echarts/lakeChart.vue?vue&type=template&id=330ba4b6&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lakeChart_vue_vue_type_template_id_330ba4b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./lakeChart.vue?vue&type=template&id=330ba4b6&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/echarts/lakeChart.vue?vue&type=template&id=330ba4b6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lakeChart_vue_vue_type_template_id_330ba4b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_lakeChart_vue_vue_type_template_id_330ba4b6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/waterHomePage/components/functionZone.vue":
/*!*************************************************************!*\
  !*** ./src/views/waterHomePage/components/functionZone.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _functionZone_vue_vue_type_template_id_78218109_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functionZone.vue?vue&type=template&id=78218109&scoped=true& */ "./src/views/waterHomePage/components/functionZone.vue?vue&type=template&id=78218109&scoped=true&");
/* harmony import */ var _functionZone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functionZone.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/components/functionZone.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _functionZone_vue_vue_type_style_index_0_id_78218109_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functionZone.vue?vue&type=style&index=0&id=78218109&lang=scss&scoped=true& */ "./src/views/waterHomePage/components/functionZone.vue?vue&type=style&index=0&id=78218109&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _functionZone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _functionZone_vue_vue_type_template_id_78218109_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _functionZone_vue_vue_type_template_id_78218109_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "78218109",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/components/functionZone.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/components/functionZone.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./src/views/waterHomePage/components/functionZone.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_functionZone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./functionZone.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/functionZone.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_functionZone_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/components/functionZone.vue?vue&type=style&index=0&id=78218109&lang=scss&scoped=true&":
/*!***********************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/components/functionZone.vue?vue&type=style&index=0&id=78218109&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_functionZone_vue_vue_type_style_index_0_id_78218109_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./functionZone.vue?vue&type=style&index=0&id=78218109&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/functionZone.vue?vue&type=style&index=0&id=78218109&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_functionZone_vue_vue_type_style_index_0_id_78218109_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_functionZone_vue_vue_type_style_index_0_id_78218109_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_functionZone_vue_vue_type_style_index_0_id_78218109_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_functionZone_vue_vue_type_style_index_0_id_78218109_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/waterHomePage/components/functionZone.vue?vue&type=template&id=78218109&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./src/views/waterHomePage/components/functionZone.vue?vue&type=template&id=78218109&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_functionZone_vue_vue_type_template_id_78218109_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./functionZone.vue?vue&type=template&id=78218109&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/functionZone.vue?vue&type=template&id=78218109&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_functionZone_vue_vue_type_template_id_78218109_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_functionZone_vue_vue_type_template_id_78218109_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/waterHomePage/components/purPlant.vue":
/*!*********************************************************!*\
  !*** ./src/views/waterHomePage/components/purPlant.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _purPlant_vue_vue_type_template_id_7aa03a43_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./purPlant.vue?vue&type=template&id=7aa03a43&scoped=true& */ "./src/views/waterHomePage/components/purPlant.vue?vue&type=template&id=7aa03a43&scoped=true&");
/* harmony import */ var _purPlant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./purPlant.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/components/purPlant.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _purPlant_vue_vue_type_style_index_0_id_7aa03a43_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./purPlant.vue?vue&type=style&index=0&id=7aa03a43&lang=scss&scoped=true& */ "./src/views/waterHomePage/components/purPlant.vue?vue&type=style&index=0&id=7aa03a43&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _purPlant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _purPlant_vue_vue_type_template_id_7aa03a43_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _purPlant_vue_vue_type_template_id_7aa03a43_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "7aa03a43",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/components/purPlant.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/components/purPlant.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./src/views/waterHomePage/components/purPlant.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_purPlant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./purPlant.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/purPlant.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_purPlant_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/components/purPlant.vue?vue&type=style&index=0&id=7aa03a43&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/components/purPlant.vue?vue&type=style&index=0&id=7aa03a43&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_purPlant_vue_vue_type_style_index_0_id_7aa03a43_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./purPlant.vue?vue&type=style&index=0&id=7aa03a43&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/purPlant.vue?vue&type=style&index=0&id=7aa03a43&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_purPlant_vue_vue_type_style_index_0_id_7aa03a43_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_purPlant_vue_vue_type_style_index_0_id_7aa03a43_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_purPlant_vue_vue_type_style_index_0_id_7aa03a43_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_purPlant_vue_vue_type_style_index_0_id_7aa03a43_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/waterHomePage/components/purPlant.vue?vue&type=template&id=7aa03a43&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./src/views/waterHomePage/components/purPlant.vue?vue&type=template&id=7aa03a43&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_purPlant_vue_vue_type_template_id_7aa03a43_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./purPlant.vue?vue&type=template&id=7aa03a43&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/purPlant.vue?vue&type=template&id=7aa03a43&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_purPlant_vue_vue_type_template_id_7aa03a43_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_purPlant_vue_vue_type_template_id_7aa03a43_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/waterHomePage/components/reservoir.vue":
/*!**********************************************************!*\
  !*** ./src/views/waterHomePage/components/reservoir.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reservoir_vue_vue_type_template_id_01e1044c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reservoir.vue?vue&type=template&id=01e1044c&scoped=true& */ "./src/views/waterHomePage/components/reservoir.vue?vue&type=template&id=01e1044c&scoped=true&");
/* harmony import */ var _reservoir_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reservoir.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/components/reservoir.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _reservoir_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reservoir.vue?vue&type=style&index=0&lang=scss& */ "./src/views/waterHomePage/components/reservoir.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _reservoir_vue_vue_type_style_index_1_id_01e1044c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reservoir.vue?vue&type=style&index=1&id=01e1044c&lang=scss&scoped=true& */ "./src/views/waterHomePage/components/reservoir.vue?vue&type=style&index=1&id=01e1044c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _reservoir_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _reservoir_vue_vue_type_template_id_01e1044c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _reservoir_vue_vue_type_template_id_01e1044c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "01e1044c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/components/reservoir.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/components/reservoir.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./src/views/waterHomePage/components/reservoir.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reservoir_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./reservoir.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/reservoir.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reservoir_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/components/reservoir.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************!*\
  !*** ./src/views/waterHomePage/components/reservoir.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reservoir_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./reservoir.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/reservoir.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reservoir_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reservoir_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reservoir_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reservoir_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/waterHomePage/components/reservoir.vue?vue&type=style&index=1&id=01e1044c&lang=scss&scoped=true&":
/*!********************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/components/reservoir.vue?vue&type=style&index=1&id=01e1044c&lang=scss&scoped=true& ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reservoir_vue_vue_type_style_index_1_id_01e1044c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./reservoir.vue?vue&type=style&index=1&id=01e1044c&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/reservoir.vue?vue&type=style&index=1&id=01e1044c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reservoir_vue_vue_type_style_index_1_id_01e1044c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reservoir_vue_vue_type_style_index_1_id_01e1044c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reservoir_vue_vue_type_style_index_1_id_01e1044c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reservoir_vue_vue_type_style_index_1_id_01e1044c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/waterHomePage/components/reservoir.vue?vue&type=template&id=01e1044c&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./src/views/waterHomePage/components/reservoir.vue?vue&type=template&id=01e1044c&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reservoir_vue_vue_type_template_id_01e1044c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./reservoir.vue?vue&type=template&id=01e1044c&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/reservoir.vue?vue&type=template&id=01e1044c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reservoir_vue_vue_type_template_id_01e1044c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_reservoir_vue_vue_type_template_id_01e1044c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/waterHomePage/components/riverDis.vue":
/*!*********************************************************!*\
  !*** ./src/views/waterHomePage/components/riverDis.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _riverDis_vue_vue_type_template_id_1aabf072_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./riverDis.vue?vue&type=template&id=1aabf072&scoped=true& */ "./src/views/waterHomePage/components/riverDis.vue?vue&type=template&id=1aabf072&scoped=true&");
/* harmony import */ var _riverDis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./riverDis.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/components/riverDis.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _riverDis_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./riverDis.vue?vue&type=style&index=0&lang=scss& */ "./src/views/waterHomePage/components/riverDis.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _riverDis_vue_vue_type_style_index_1_id_1aabf072_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./riverDis.vue?vue&type=style&index=1&id=1aabf072&lang=scss&scoped=true& */ "./src/views/waterHomePage/components/riverDis.vue?vue&type=style&index=1&id=1aabf072&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _riverDis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _riverDis_vue_vue_type_template_id_1aabf072_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _riverDis_vue_vue_type_template_id_1aabf072_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1aabf072",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/components/riverDis.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/components/riverDis.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./src/views/waterHomePage/components/riverDis.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_riverDis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./riverDis.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/riverDis.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_riverDis_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/components/riverDis.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************!*\
  !*** ./src/views/waterHomePage/components/riverDis.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_riverDis_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./riverDis.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/riverDis.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_riverDis_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_riverDis_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_riverDis_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_riverDis_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/waterHomePage/components/riverDis.vue?vue&type=style&index=1&id=1aabf072&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/components/riverDis.vue?vue&type=style&index=1&id=1aabf072&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_riverDis_vue_vue_type_style_index_1_id_1aabf072_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./riverDis.vue?vue&type=style&index=1&id=1aabf072&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/riverDis.vue?vue&type=style&index=1&id=1aabf072&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_riverDis_vue_vue_type_style_index_1_id_1aabf072_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_riverDis_vue_vue_type_style_index_1_id_1aabf072_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_riverDis_vue_vue_type_style_index_1_id_1aabf072_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_riverDis_vue_vue_type_style_index_1_id_1aabf072_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/waterHomePage/components/riverDis.vue?vue&type=template&id=1aabf072&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./src/views/waterHomePage/components/riverDis.vue?vue&type=template&id=1aabf072&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_riverDis_vue_vue_type_template_id_1aabf072_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./riverDis.vue?vue&type=template&id=1aabf072&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/riverDis.vue?vue&type=template&id=1aabf072&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_riverDis_vue_vue_type_template_id_1aabf072_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_riverDis_vue_vue_type_template_id_1aabf072_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/waterHomePage/components/yearRank.vue":
/*!*********************************************************!*\
  !*** ./src/views/waterHomePage/components/yearRank.vue ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _yearRank_vue_vue_type_template_id_5c6cb76e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./yearRank.vue?vue&type=template&id=5c6cb76e&scoped=true& */ "./src/views/waterHomePage/components/yearRank.vue?vue&type=template&id=5c6cb76e&scoped=true&");
/* harmony import */ var _yearRank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./yearRank.vue?vue&type=script&lang=js& */ "./src/views/waterHomePage/components/yearRank.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _yearRank_vue_vue_type_style_index_0_id_5c6cb76e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./yearRank.vue?vue&type=style&index=0&id=5c6cb76e&lang=scss&scoped=true& */ "./src/views/waterHomePage/components/yearRank.vue?vue&type=style&index=0&id=5c6cb76e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _yearRank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _yearRank_vue_vue_type_template_id_5c6cb76e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _yearRank_vue_vue_type_template_id_5c6cb76e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5c6cb76e",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/waterHomePage/components/yearRank.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/waterHomePage/components/yearRank.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./src/views/waterHomePage/components/yearRank.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_yearRank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./yearRank.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/yearRank.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_yearRank_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/waterHomePage/components/yearRank.vue?vue&type=style&index=0&id=5c6cb76e&lang=scss&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./src/views/waterHomePage/components/yearRank.vue?vue&type=style&index=0&id=5c6cb76e&lang=scss&scoped=true& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_yearRank_vue_vue_type_style_index_0_id_5c6cb76e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./yearRank.vue?vue&type=style&index=0&id=5c6cb76e&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/yearRank.vue?vue&type=style&index=0&id=5c6cb76e&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_yearRank_vue_vue_type_style_index_0_id_5c6cb76e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_yearRank_vue_vue_type_style_index_0_id_5c6cb76e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_yearRank_vue_vue_type_style_index_0_id_5c6cb76e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_yearRank_vue_vue_type_style_index_0_id_5c6cb76e_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/waterHomePage/components/yearRank.vue?vue&type=template&id=5c6cb76e&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./src/views/waterHomePage/components/yearRank.vue?vue&type=template&id=5c6cb76e&scoped=true& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_yearRank_vue_vue_type_template_id_5c6cb76e_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./yearRank.vue?vue&type=template&id=5c6cb76e&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/waterHomePage/components/yearRank.vue?vue&type=template&id=5c6cb76e&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_yearRank_vue_vue_type_template_id_5c6cb76e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_yearRank_vue_vue_type_template_id_5c6cb76e_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy9iYXNpbldhdGVyU3RhbmRhcmQudnVlIiwid2VicGFjazovLy9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL2NvbXBldGl0aW9uR292ZXJuLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy9lY2hhcnRzL2xha2VDaGFydC52dWUiLCJ3ZWJwYWNrOi8vL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvZnVuY3Rpb25ab25lLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy9wdXJQbGFudC52dWUiLCJ3ZWJwYWNrOi8vL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvcmVzZXJ2b2lyLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy9yaXZlckRpcy52dWUiLCJ3ZWJwYWNrOi8vL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMveWVhclJhbmsudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvYmFzaW5XYXRlclN0YW5kYXJkLnZ1ZT9lN2EwIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvY29tcGV0aXRpb25Hb3Zlcm4udnVlPzIzZWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy9lY2hhcnRzL2xha2VDaGFydC52dWU/ZTcwYiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL2Z1bmN0aW9uWm9uZS52dWU/OWQxZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL3B1clBsYW50LnZ1ZT80N2Y0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvcmVzZXJ2b2lyLnZ1ZT82MjczIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvcml2ZXJEaXMudnVlP2JlMDEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy95ZWFyUmFuay52dWU/Y2I2MyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL2Jhc2luV2F0ZXJTdGFuZGFyZC52dWU/NTkxNCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL2NvbXBldGl0aW9uR292ZXJuLnZ1ZT9iNzg5Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvZWNoYXJ0cy9sYWtlQ2hhcnQudnVlPzc1YjYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy9lY2hhcnRzL2xha2VDaGFydC52dWU/MDg3ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL2Z1bmN0aW9uWm9uZS52dWU/NDhlMyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL3B1clBsYW50LnZ1ZT8zZWNiIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvcmVzZXJ2b2lyLnZ1ZT84MGFmIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvcmVzZXJ2b2lyLnZ1ZT85YTRmIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvcml2ZXJEaXMudnVlP2U2YmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy9yaXZlckRpcy52dWU/NmExMiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL3llYXJSYW5rLnZ1ZT9iMmU4Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lY2hhcnRzLWxpcXVpZGZpbGwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VjaGFydHMtbGlxdWlkZmlsbC9zcmMvbGlxdWlkRmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZWNoYXJ0cy1saXF1aWRmaWxsL3NyYy9saXF1aWRGaWxsU2VyaWVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lY2hhcnRzLWxpcXVpZGZpbGwvc3JjL2xpcXVpZEZpbGxTaGFwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZWNoYXJ0cy1saXF1aWRmaWxsL3NyYy9saXF1aWRGaWxsVmlldy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZWNoYXJ0cy9saWIvZWNoYXJ0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL2Jhc2luV2F0ZXJTdGFuZGFyZC52dWU/MGNlNyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL2NvbXBldGl0aW9uR292ZXJuLnZ1ZT9mZjI5Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvZWNoYXJ0cy9sYWtlQ2hhcnQudnVlPzdiOTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy9lY2hhcnRzL2xha2VDaGFydC52dWU/YTRjZiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL2Z1bmN0aW9uWm9uZS52dWU/OWE0YyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL3B1clBsYW50LnZ1ZT9hNzcwIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvcmVzZXJ2b2lyLnZ1ZT80YmZjIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvcmVzZXJ2b2lyLnZ1ZT9lZjI0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvcml2ZXJEaXMudnVlPzk4YTciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy9yaXZlckRpcy52dWU/ZjM4MiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL3llYXJSYW5rLnZ1ZT81NmM3Iiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcml2ZXJAMngucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvdG9yaWdodC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy/ppbznirblm74ucG5nIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvYmFzaW5XYXRlclN0YW5kYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL2Jhc2luV2F0ZXJTdGFuZGFyZC52dWU/MDU3MSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL2Jhc2luV2F0ZXJTdGFuZGFyZC52dWU/NmUyOSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL2Jhc2luV2F0ZXJTdGFuZGFyZC52dWU/YmZlZiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL2NvbXBldGl0aW9uR292ZXJuLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL2NvbXBldGl0aW9uR292ZXJuLnZ1ZT84ZDdkIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvY29tcGV0aXRpb25Hb3Zlcm4udnVlP2E5NWIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy9jb21wZXRpdGlvbkdvdmVybi52dWU/NWFlNiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL2VjaGFydHMvbGFrZUNoYXJ0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL2VjaGFydHMvbGFrZUNoYXJ0LnZ1ZT8wMDY2Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvZWNoYXJ0cy9sYWtlQ2hhcnQudnVlPzgwYmYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy9lY2hhcnRzL2xha2VDaGFydC52dWU/ODllMiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL2VjaGFydHMvbGFrZUNoYXJ0LnZ1ZT9iMDdiIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvZnVuY3Rpb25ab25lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL2Z1bmN0aW9uWm9uZS52dWU/YzYzYiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL2Z1bmN0aW9uWm9uZS52dWU/MDVlNSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL2Z1bmN0aW9uWm9uZS52dWU/NTE3MCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL3B1clBsYW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL3B1clBsYW50LnZ1ZT80ZTIyIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvcHVyUGxhbnQudnVlPzBhNzYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy9wdXJQbGFudC52dWU/MzA2MCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL3Jlc2Vydm9pci52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy9yZXNlcnZvaXIudnVlPzRjZjAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy9yZXNlcnZvaXIudnVlPzM4M2EiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy9yZXNlcnZvaXIudnVlPzg0ZTciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy9yZXNlcnZvaXIudnVlPzRhYTgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy9yaXZlckRpcy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy9yaXZlckRpcy52dWU/MjhmNCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL3JpdmVyRGlzLnZ1ZT85MDU0Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvcml2ZXJEaXMudnVlPzc2OTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy9yaXZlckRpcy52dWU/OGRlMCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL3llYXJSYW5rLnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL3llYXJSYW5rLnZ1ZT9hYmVjIiwid2VicGFjazovLy8uL3NyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMveWVhclJhbmsudnVlPzExOWMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy95ZWFyUmFuay52dWU/OTFkMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBDQTtBQUVBO0FBQ0EsNEJBREE7QUFFQSxNQUZBLGtCQUVBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLG1CQUZBO0FBR0EsY0FIQTtBQUlBO0FBSkE7QUFNQSxHQVRBO0FBVUEsU0FWQSxxQkFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBZEE7QUFlQTtBQUNBLGFBREEsdUJBQ0E7QUFBQTs7QUFDQTtBQUNBLHFCQURBO0FBRUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FKQTtBQUtBLEtBWEE7QUFZQSxZQVpBLG9CQVlBLElBWkEsRUFZQTtBQUNBO0FBQ0Esc0JBREE7QUFFQSx3QkFGQTtBQUdBLGdCQUhBO0FBSUEsaUNBSkE7QUFLQTtBQUxBO0FBT0E7QUFDQTtBQUNBLDZCQURBO0FBRUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQXpCQTtBQWZBLEc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFFQTtBQUNBLDJCQURBO0FBRUE7QUFDQTtBQURBLEdBRkE7QUFLQSxNQUxBLGtCQUtBO0FBQ0E7QUFDQSxtQkFEQTtBQUVBLGNBRkE7QUFHQSxzQkFIQTtBQUlBLGtCQUpBO0FBS0E7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QUFDYztBQUN3Qjs7O0FBRzdGO0FBQ2dHO0FBQ2hHLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDhFQUFNO0FBQ1IsRUFBRSwrRkFBTTtBQUNSLEVBQUUsd0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3hDZjtBQUFBO0FBQUEsd0NBQTZTLENBQWdCLHlVQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWpVO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1HO0FBQ3ZDO0FBQ0w7QUFDc0M7OztBQUc3RjtBQUNnRztBQUNoRyxnQkFBZ0IsMkdBQVU7QUFDMUIsRUFBRSw4RUFBTTtBQUNSLEVBQUUsK0ZBQU07QUFDUixFQUFFLHdHQUFlO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsSUFBSSxLQUFVLEVBQUUsWUFpQmY7QUFDRDtBQUNlLGdGOzs7Ozs7Ozs7Ozs7QUN2Q2Y7QUFBQTtBQUFBLHdDQUE2UyxDQUFnQix5VUFBRyxFQUFDLEM7Ozs7Ozs7Ozs7OztBQ0FqVTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJqcy8xOS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZC1uby1ib3JkZXItd3JhcHBlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtbm8tYm9yZGVyLXRpdGxlXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJuYW1lXCI+5rWB5Z+f5qaC5Ya1PC9kaXY+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwidGltZVwiPue0r+iuoeaIquiHs3t7IGRheWpzKHN0YXJ0RGF0ZSkuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKSB9fSA8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwic3RhbmRhcmQtd3JhcHBlclwiIHYtZm9yPVwiaXRlbSBpbiBseUluZm9BcnJcIlxyXG4gICAgICAgICBAY2xpY2s9XCJ0b0RldGFpbChpdGVtKVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwic3RhbmRhcmQtdGl0bGUgZnNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZnNcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMvcml2ZXJAMngucG5nXCIvPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJuYW1lXCI+e3sgaXRlbS5iYXNpbk5hbWUgfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6IHJnYmEoODQsIDExNywgMjQ4LCAxKVwiPuWFpea5luays+mBk3t7aXRlbS5yaXZlckNvdXJzZU51bWJlcn195p2hPC9zcGFuPlxyXG48IS0tICAgICAgICAgIDxzcGFuIGNsYXNzPVwibnVtXCI+e3sgaXRlbS53YXRlclNvdXJjZVVwIH19PC9zcGFuPi97eyBpdGVtLndhdGVyU291cmNlVG90YWwgfX3kuKotLT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzdGFuZGFyZC1ib3ggZnNcIiBzdHlsZT1cImZvbnQtc2l6ZTogMTNweFwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInNpdGUtdHlwZVwiIHN0eWxlPVwiY29sb3I6IHJnYmEoNjgsIDEyMywgMjUyLCAxKTtcIj7lm708L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj7kvJjoia88L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm51bVwiPnt7IGl0ZW0uc3RhdGVVcCB9fTwvc3Bhbj4ve3sgaXRlbS5zdGF0ZVRvdGFsIH195LiqXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2l0ZS10eXBlXCIgc3R5bGU9XCJjb2xvcjogcmdiYSgwLCAxODYsIDE3MywgMSk7XCI+55yBPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4+5LyY6ImvPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJudW1cIj57eyBpdGVtLnByb3ZpbmNlVXAgfX08L3NwYW4+L3t7IGl0ZW0ucHJvdmluY2VUb3RhbCB9feS4qlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInNpdGUtdHlwZVwiIHN0eWxlPVwiY29sb3I6IHJnYmEoMjU1LCAxNDEsIDI2LCAxKTtcIj7luII8L3NwYW4+XHJcbiAgICAgICAgICA8c3Bhbj7kvJjoia88L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm51bVwiPnt7IGl0ZW0uZWNvbG9naWNhbFVwIH19PC9zcGFuPi97eyBpdGVtLmVjb2xvZ2ljYWxUb3RhbCB9feS4qlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiB2LWlmPVwibHlJbmZvQXJyLmxlbmd0aD09PTBcIiBzdHlsZT1cInRleHQtYWxpZ246IGNlbnRlcjtjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpXCI+5pqC5peg5pWw5o2uPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCB7bHlCYXNpbn0gZnJvbSBcIkAvYXBpL3dhdGVyX2VudmlyXCI7XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiYmFzaW5XYXRlclN0YW5kYXJkXCIsXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHN0YXJ0RGF0ZTogbmV3IERhdGUoKSxcclxuICAgICAgICBseUluZm9BcnI6IFtdLFxyXG4gICAgICAgIHh6cWg6ICcnLFxyXG4gICAgICAgIHNlYXJjaE9iajoge31cclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICB0aGlzLnNlYXJjaE9iaiA9IHRoaXMuJHN0b3JlLnN0YXRlLnNlYXJjaE9iajtcclxuICAgICAgdGhpcy54enFoID0gdGhpcy5zZWFyY2hPYmoucGFyYW1ldGVyXHJcbiAgICAgIHRoaXMuZ2V0THlJbmZvKCk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBnZXRMeUluZm8oKSB7XHJcbiAgICAgICAgbGV0IGluZm8gPSB7XHJcbiAgICAgICAgICBiYXNpbk5hbWU6IFwiXCIsXHJcbiAgICAgICAgICBkaXY6IHRoaXMueHpxaFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbHlCYXNpbihpbmZvKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIGlmIChyZXMuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgdGhpcy5seUluZm9BcnIgPSByZXMuZGF0YTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgdG9EZXRhaWwoaXRlbSl7XHJcbiAgICAgICAgbGV0IHNlYXJjaERhdGEgPSB7XHJcbiAgICAgICAgICBtb2R1bGVOYW1lOiAnJyxcclxuICAgICAgICAgIHJlc291cmNlUGF0aDogJycsXHJcbiAgICAgICAgICB0eXBlOiAnJyxcclxuICAgICAgICAgIHBhcmFtZXRlcjogaXRlbS5iYXNpbk5hbWUsXHJcbiAgICAgICAgICBjb21wb25lbnROYW1lOiAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3NldFNlYXJjaE9iaicsIHNlYXJjaERhdGEpO1xyXG4gICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgIG5hbWU6ICdiYXNpbkhvbWVQYWdlJyxcclxuICAgICAgICAgIHF1ZXJ5OiB7IGx5TmFtZTogaXRlbS5iYXNpbk5hbWUgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIEBpbXBvcnQgXCJAL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy9jYXJkTm9Cb3JkZXIuc2Nzc1wiO1xyXG4gIC5zdGFuZGFyZC13cmFwcGVyIHtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICBwYWRkaW5nOiAxM3B4IDEycHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSg2OCwgMTIzLCAyNTIsIDAuMSkgMCUsIHJnYmEoNjgsIDEyMywgMjUyLCAwKSAxMDAlKSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDIzOCwgMjQzLCAyNTUsIDEpO1xyXG5cclxuICAgIC5zdGFuZGFyZC10aXRsZSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgZm9udC1mYW1pbHk6IGFsaW1hbWFzaHVoZWl0aTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDZweDtcclxuXHJcbiAgICAgIGltZ3tcclxuICAgICAgICB3aWR0aDogMTVweDtcclxuICAgICAgfVxyXG5cclxuICAgICAgLm5hbWUge1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDgsIDQwLCA4OSwgMSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuc2NvcmUge1xyXG4gICAgICBwYWRkaW5nOiAwIDhweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDM5LCAyMDgsIDY3LCAxKTtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBjb2xvcjogcmdiYSgzOSwgMjA4LCA2NywgMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLm51bSB7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDEpO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc3RhbmRhcmQtYm94e1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgZGl2e1xyXG4gICAgICB3aWR0aDogMzMlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zaXRlLXR5cGV7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBhbGltYW1hc2h1aGVpdGk7XHJcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIH1cclxuICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZC1uby1ib3JkZXItd3JhcHBlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtbm8tYm9yZGVyLXRpdGxlXCIgQGNsaWNrPVwiJHJvdXRlci5wdXNoKHtuYW1lOiAnY29tcGV0aXRpb25Hb3Zlcm4nfSlcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cIm5hbWVcIj57e3h6cWh9feaOkuWQjTwvZGl2PlxyXG4gICAgICA8IS0tPGRpdiBjbGFzcz1cImZzIGNvbXBldGl0aW9uLXRpdGxlXCI+XHJcbiAgICAgICAgPHNwYW4gc3R5bGU9XCJjb2xvcjpyZ2JhKDE4LCAxOCwgNTQsIDAuNSkgXCI+e3tqZH19PC9zcGFuPlxyXG4gICAgICAgIDx2YW4taWNvbiBuYW1lPVwiYXJyb3dcIi8+XHJcbiAgICAgIDwvZGl2Pi0tPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImZzXCIgc3R5bGU9XCJhbGlnbi1pdGVtczogZmxleC1zdGFydFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC13cmFwcGVyXCIgc3R5bGU9XCJtYXJnaW46IDA7d2lkdGg6IDQ4JTtwYWRkaW5nLWJvdHRvbTogMTBweFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmc1wiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogOHB4O1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGl0bGUgY2FyZC10aXRsZS13YXRlclwiIHN0eWxlPVwicGFkZGluZzogNXB4IDEwcHhcIj7lpKfnq57otZvmjpLlkI08L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmcyBjb21wZXRpdGlvbi10aXRsZVwiIEBjbGljaz1cInRvTGlzdFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBzdHlsZT1cImNvbG9yOnJnYmEoMTgsIDE4LCA1NCwgMC41KSBcIj57e3RpbWV9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPHZhbi1pY29uIG5hbWU9XCJhcnJvd1wiLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgdi1mb3I9XCIoaXRlbSxpKSBpbiBjb21wZXRpdGlvbnNcIiA6Y2xhc3M9XCJbJ2NvbXBldGl0aW9uLXdyYXBwZXInLCdmcycsICdudW1CZycraV1cIlxyXG4gICAgICAgICAgICAgQGNsaWNrPVwidG9EZXRhaWwoaXRlbSlcIj5cclxuICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxzcGFuIDpjbGFzcz1cIidudW0nK2lcIj57e2krMX19PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImFyZWFcIj57e2l0ZW0uTkFNRX19PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IDpjbGFzcz1cIidudW0nK2lcIj57e2l0ZW0uU0NPUkV9feWIhjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDwhLS3msLTnjq/looPlubTlupXmjpLlkI0tLT5cclxuICAgICAgPHllYXJSYW5rIDpsaXN0PVwieWVhclJhbmtcIi8+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCB7cmFua2luZ30gZnJvbSAnQC9hcGkvd2F0ZXJfZW52aXInO1xyXG4gIGltcG9ydCB5ZWFyUmFuayBmcm9tIFwiQC92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMveWVhclJhbmtcIjtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJjb21wZXRpdGlvbkdvdmVyblwiLFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICB5ZWFyUmFua1xyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgc2VhcmNoT2JqOiB7fSxcclxuICAgICAgICB0aW1lOiBcIlwiLFxyXG4gICAgICAgIGNvbXBldGl0aW9uczogW10sXHJcbiAgICAgICAgeWVhclJhbms6IFtdLFxyXG4gICAgICAgIHh6cWg6ICcnLFxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuICAgICAgdGhpcy5zZWFyY2hPYmogPSB0aGlzLiRzdG9yZS5zdGF0ZS5zZWFyY2hPYmo7XHJcbiAgICAgIGlmICh0aGlzLmRldGFpbHNQYXJhbWV0ZXIpIHtcclxuICAgICAgICB0aGlzLnh6cWggPSB0aGlzLnNlYXJjaE9iai5wYXJhbWV0ZXI7XHJcbiAgICAgIH1lbHNle1xyXG4gICAgICAgIHRoaXMueHpxaCA9IHRoaXMuc2VhcmNoT2JqLnBhcmFtZXRlcjtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmxvYWREYXRhKCk7XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBsb2FkRGF0YSgpIHtcclxuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgbGV0IHkgPSBkYXRlLmdldEZ1bGxZZWFyKCkgKyBcIuW5tFwiO1xyXG4gICAgICAgIGxldCBpbmZvID0ge1xyXG4gICAgICAgICAgZGlzdHJpY3Q6IHRoaXMueHpxaCxcclxuICAgICAgICAgIHRpbWU6IHlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmFua2luZyhpbmZvKS50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNvbXBldGl0aW9ucyA9IHJlcy5kYXRhLnJhbms7XHJcbiAgICAgICAgICB0aGlzLnllYXJSYW5rID0gcmVzLmRhdGEuc2NvcmVzO1xyXG4gICAgICAgICAgaWYocmVzLmRhdGEucmFuay5sZW5ndGg+MCl7XHJcbiAgICAgICAgICAgIHRoaXMudGltZSA9IHJlcy5kYXRhLnJhbmtbMF0ueWVhcjtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICB0b0RldGFpbChpdGVtKSB7XHJcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgbmFtZTogXCJnb3Zlcm5EZXRhaWxcIixcclxuICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgIGFyZWE6IGl0ZW0uTkFNRSxcclxuICAgICAgICAgICAgdGltZTogdGhpcy50aW1lXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIHRvTGlzdCgpIHtcclxuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICBuYW1lOiAnY29tcGV0aXRpb25Hb3Zlcm4nLFxyXG4gICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgdGltZTogdGhpcy50aW1lLFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIEBpbXBvcnQgXCJAL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy9jYXJkTm9Cb3JkZXIuc2Nzc1wiO1xyXG5cclxuICAuY29tcGV0aXRpb24tdGl0bGUge1xyXG4gICAgcGFkZGluZy1yaWdodDogOHB4O1xyXG4gICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuXHJcbiAgICAuY2hhbmdlLXRhYiB7XHJcbiAgICAgIG1hcmdpbjogMCA1cHg7XHJcbiAgICAgIHBhZGRpbmc6IDZweCA4cHggNnB4IDhweDtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgyNDYsIDI0NiwgMjQ2LCAxKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gICAgfVxyXG5cclxuICAgIC5jaGVjayB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoODIsIDExMywgMjU1LCAwLjEpO1xyXG4gICAgICBjb2xvcjogcmdiYSg4MiwgMTEzLCAyNTUsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvbXBldGl0aW9uLXdyYXBwZXIge1xyXG4gICAgbWFyZ2luOiA1cHggN3B4IDA7XHJcbiAgICBwYWRkaW5nOiA4cHggMTNweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE4LCAxOCwgNTQsIDAuMDUpO1xyXG5cclxuICAgIC5hcmVhIHtcclxuICAgICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDEpO1xyXG4gICAgfVxyXG5cclxuICAgIC5zY29yZSB7XHJcbiAgICAgIHBhZGRpbmc6IDAgOHB4O1xyXG4gICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDM5LCAyMDgsIDY3LCAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAubnVtQmcwIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCA4NywgNTEsIDAuMDUpO1xyXG4gIH1cclxuXHJcbiAgLm51bUJnMSB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTQxLCAyNiwgMC4wNSk7XHJcbiAgfVxyXG5cclxuICAubnVtQmcyIHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMTg2LCAxNzMsIDAuMDUpO1xyXG4gIH1cclxuXHJcbiAgLm51bUJnMyB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDgyLCAxMTMsIDI1NSwgMC4wNSk7XHJcbiAgfVxyXG5cclxuICAubnVtQmc0IHtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMTgsIDE4LCA1NCwgMC4wNSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgLm51bTAge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCA4NywgNTEsIDEpO1xyXG4gIH1cclxuXHJcbiAgLm51bTEge1xyXG4gICAgY29sb3I6IHJnYmEoMjU1LCAxNDEsIDI2LCAxKTtcclxuICB9XHJcblxyXG4gIC5udW0yIHtcclxuICAgIGNvbG9yOiByZ2JhKDAsIDE4NiwgMTczLCAxKTtcclxuICB9XHJcblxyXG4gIC5udW0zIHtcclxuICAgIGNvbG9yOiByZ2JhKDgyLCAxMTMsIDI1NSwgMC44KTtcclxuICB9XHJcblxyXG4gIC5udW00IHtcclxuICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiByZWY9XCJjb3VudHJ5RWNoYXJ0XCIgc3R5bGU9XCJoZWlnaHQ6IDcwcHg7IHdpZHRoOiA3MHB4OyBtYXJnaW46IDAgYXV0b1wiIC8+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgKiBhcyBlY2hhcnRzIGZyb20gXCJlY2hhcnRzXCI7XHJcbmltcG9ydCBcImVjaGFydHMtbGlxdWlkZmlsbFwiO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJsYWtlRWNoYXJ0XCIsXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNvdW50cnlFY2hhcnQ6IG51bGwsXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIGlmICghdGhpcy5jb3VudHJ5RWNoYXJ0KSB7XHJcbiAgICAgIHRoaXMuY291bnRyeUVjaGFydCA9IGVjaGFydHMuaW5pdCh0aGlzLiRyZWZzLmNvdW50cnlFY2hhcnQpO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmluaXRDaGFydChlY2hhcnRzLmluaXQodGhpcy4kcmVmcy5jb3VudHJ5RWNoYXJ0KSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGluaXRDaGFydChjaGFydEluc3RhbmNlKSB7XHJcbiAgICAgIGNvbnN0IG9wdGlvbiA9IHtcclxuICAgICAgICBzZXJpZXM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCLkvJjoia/njodcIixcclxuICAgICAgICAgICAgdHlwZTogXCJsaXF1aWRGaWxsXCIsXHJcbiAgICAgICAgICAgIGNvbG9yOiBbXCJyZ2JhKDc2LCAxMDAsIDI1NCwgMSlcIiwgXCJyZ2JhKDEwOSwgMTgxLCAyNTIsIDAuNSlcIl0sXHJcbiAgICAgICAgICAgIGRhdGE6IFtcclxuICAgICAgICAgICAgICAwLjU0LFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAwLjU0LFxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBcImxlZnRcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICByYWRpdXM6IFwiNzAlXCIsXHJcbiAgICAgICAgICAgIG91dGxpbmU6IHtcclxuICAgICAgICAgICAgICBib3JkZXJEaXN0YW5jZTogMyxcclxuICAgICAgICAgICAgICBpdGVtU3R5bGU6IHtcclxuICAgICAgICAgICAgICAgIGJvcmRlcldpZHRoOiAzLFxyXG4gICAgICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFwicmdiYSg3NiwgMTAwLCAyNTQsIDEpXCIsXHJcbiAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZFN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgY29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaXRlbVN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgb3BhY2l0eTogMC45NSxcclxuICAgICAgICAgICAgICBzaGFkb3dDb2xvcjogXCJyZ2JhKDI1NSwgMjU1LCAyNTUsIDApXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH07XHJcbiAgICAgIGNoYXJ0SW5zdGFuY2Uuc2V0T3B0aW9uKG9wdGlvbik7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cclxuLnZhbi1kcm9wZG93bi1tZW51X190aXRsZSB7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbn1cclxuXHJcbi52YW4tZHJvcGRvd24tbWVudV9fYmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBoZWlnaHQ6IDI4cHg7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLnZhbi1kcm9wZG93bi1tZW51X19pdGVtIHtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNDYsIDI0NiwgMjQ2LCAxKTtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbn1cclxuPC9zdHlsZT5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4uZnMtY29udGVudCB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4ucmUtd3JhcHBlciB7XHJcbiAgLy8gZGlzcGxheTogZmxleDtcclxuICAvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogNDQlO1xyXG4gIG1hcmdpbi1sZWZ0OiA0JTtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDRweCAwO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ4LCAyNTEsIDI1NSwgMSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gIC5uYW1lIHtcclxuICAgIHBhZGRpbmctdG9wOiAzcHg7XHJcblxyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICAubnVtIHtcclxuICB9XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjYXJkLXdyYXBwZXJcIiBzdHlsZT1cInBhZGRpbmctYm90dG9tOiAxNHB4XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZnNcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDhweDtcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGl0bGUgY2FyZC10aXRsZS13YXRlclwiPuaYhuaYjuW4guawtOWKn+iDveWMuuWIkjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiem9uZS13cmFwcGVyIGZzXCI+XHJcbiAgICAgIDxkaXYgdi1mb3I9XCIoaXRlbSxpKSBpbiA0XCIgY2xhc3M9XCJ6b25lLWl0ZW1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiPuS/neaKpOWMujwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmc1wiPlxyXG4gICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAxKVwiPjM5PC9zcGFuPlxyXG4gICAgICAgICAgICDkuKpcclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZzXCIgc3R5bGU9XCJmb250LXdlaWdodDogYm9sZDtcIj5cclxuICAgICAgICAgICAgPGltZyBzcmM9XCJAL2Fzc2V0cy/ppbznirblm74ucG5nXCIgc3R5bGU9XCJ3aWR0aDogMTRweDtcIj5cclxuICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJjb2xvcjogcmdiYSg2OCwgMTIzLCAyNTIsIDEpO1wiPjE3LjUlPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiZnVuY3Rpb25ab25lXCIsXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge31cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG5cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIC56b25lLXdyYXBwZXIge1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWFyZ2luOiAzcHggMTRweDtcclxuXHJcbiAgICAuem9uZS1pdGVtIHtcclxuICAgICAgd2lkdGg6IDM5JTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICBwYWRkaW5nOiAxMXB4IDE2cHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ4LCAyNTEsIDI1NSwgMSk7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuXHJcbiAgICAgIC5uYW1lIHtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCByZ2JhKDAsIDE4NiwgMTczLCAxKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjYXJkLXdyYXBwZXJcIiBzdHlsZT1cInBhZGRpbmctYm90dG9tOiAxNHB4XCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZnNcIiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDhweFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10aXRsZSBjYXJkLXRpdGxlLXdhdGVyXCI+5rC06LSo5YeA5YyW5Y6C5YiG5biD5oOF5Ya1PC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmc1wiIHN0eWxlPVwicGFkZGluZy1yaWdodDogMTNweFwiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwidGltZVwiIEBjbGljaz1cInRvTGlzdFwiPuafpeeci+abtOWkmjwvc3Bhbj5cclxuICAgICAgICA8aW1nIHNyYz1cIn5AL2Fzc2V0cy90b3JpZ2h0LnBuZ1wiIGFsdD1cIlwiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJwdXItd3JhcHBlclwiIHYtZm9yPVwiKGl0ZW0saW5kZXgpIGluIGxpc3RcIiB2LXNob3c9XCJpbmRleDw1XCI+e3sgaXRlbS5lbnRlcnByaXNlTmFtZSB9fTwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQge3dhdGVyUGxhbnRMaXN0fSBmcm9tIFwiQC9hcGkvd2F0ZXJfZW52aXJcIjtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJwdXJQbGFudFwiLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBsaXN0OiBbXSxcclxuICAgICAgfTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIHRvTGlzdCgpIHtcclxuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICBuYW1lOiBcInB1clBsYW50XCIsXHJcbiAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICB0aXRsZTogJ+awtOi0qOWHgOWMluWOguWIl+ihqCdcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH0sXHJcbiAgICAgIGxvYWREYXRhKCkge1xyXG4gICAgICAgIGxldCBpbmZvID0ge1xyXG4gICAgICAgICAgcmVnaW9uOiBcIuaYhuaYjuW4glwiLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2F0ZXJQbGFudExpc3QoaW5mbykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmxpc3QgPSByZXMuZGF0YTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICB0aGlzLmxvYWREYXRhKCk7XHJcbiAgICB9LFxyXG4gIH07XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbiAgLnB1ci13cmFwcGVyIHtcclxuICAgIG1hcmdpbjogOHB4O1xyXG4gICAgcGFkZGluZzogOXB4IDExcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDgsIDI1MSwgMjU1LCAxKTtcclxuICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNhcmQtd3JhcHBlclwiIHN0eWxlPVwicGFkZGluZy1ib3R0b206IDE0cHhcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmc1wiIHN0eWxlPVwibWFyZ2luLWJvdHRvbTogNXB4XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRpdGxlIGNhcmQtdGl0bGUtd2F0ZXJcIj7msLTlupPliIbluIPlj4rlupPlrrk8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImZzXCIgc3R5bGU9XCJwYWRkaW5nLXJpZ2h0OiAxM3B4XCI+XHJcbiAgICAgICAgPHZhbi1kcm9wZG93bi1tZW51IGFjdGl2ZS1jb2xvcj1cIiMxOTg5ZmFcIiBzdHlsZT1cIndpZHRoOiAxMDBweFwiPlxyXG4gICAgICAgICAgPHZhbi1kcm9wZG93bi1pdGVtIHYtbW9kZWw9XCJhcmVhXCIgOm9wdGlvbnM9XCJvcHRpb24xXCIvPlxyXG4gICAgICAgIDwvdmFuLWRyb3Bkb3duLW1lbnU+XHJcbiAgICAgICAgPCEtLSA8c3BhbiBzdHlsZT1cImNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7IGZvbnQtc2l6ZTogMTRweDsgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmVcIiBAY2xpY2s9XCIkcm91dGVyLnB1c2goJy9Bcm91bmRQb2xsdXRpb24nKVwiPui/m+WFpeWcsOWbvjwvc3Bhbj5cclxuICAgICAgICA8aW1nIHNyYz1cIkAvYXNzZXRzL21vcmVNYXAucG5nXCIgc3R5bGU9XCJ3aWR0aDogMjBweFwiIC8+IC0tPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJmcy1jb250ZW50XCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyZS13cmFwcGVyXCIgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIHNrQXJyXCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJuYW1lXCI+e3sgaXRlbS5ib2R5TmFtZSB9fTwvc3Bhbj5cclxuICAgICAgICA8ZGl2IHN0eWxlPVwiaGVpZ2h0OiA3MHB4OyB3aWR0aDogNzBweDsgbWFyZ2luOiAwIGF1dG9cIj5cclxuICAgICAgICAgIDxsYWtlQ2hhcnQvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgc3R5bGU9XCJmb250LXNpemU6IDE0cHhcIj5cclxuICAgICAgICAgIDxzcGFuIHN0eWxlPVwiY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMSlcIj57eyBpdGVtLnN0b3JhZ2VDYXBhY2l0eSB8fCBcIi1cIiB9fTwvc3Bhbj5cclxuICAgICAgICAgIOS6v+eri+aWueexs1xyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgKiBhcyBlY2hhcnRzIGZyb20gXCJlY2hhcnRzXCI7XHJcbiAgaW1wb3J0IFwiZWNoYXJ0cy1saXF1aWRmaWxsXCI7XHJcbiAgaW1wb3J0IHt3YXRlckJvZHlMaXN0fSBmcm9tIFwiQC9hcGkvd2F0ZXJfZW52aXJcIjtcclxuICBpbXBvcnQgbGFrZUNoYXJ0IGZyb20gXCJAL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy9lY2hhcnRzL2xha2VDaGFydC52dWVcIjtcclxuXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJyZXNlcnZvaXJcIixcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYXJlYTogXCLnm5jpvpnljLpcIixcclxuICAgICAgICBvcHRpb24xOiBbXHJcbiAgICAgICAgICAvLyB7IHRleHQ6IFwi5piG5piO5biCXCIsIHZhbHVlOiBcIuaYhuaYjuW4glwiIH0sXHJcbiAgICAgICAgICB7dGV4dDogXCLkupTljY7ljLpcIiwgdmFsdWU6IFwi5LqU5Y2O5Yy6XCJ9LFxyXG4gICAgICAgICAge3RleHQ6IFwi55uY6b6Z5Yy6XCIsIHZhbHVlOiBcIuebmOm+meWMulwifSxcclxuICAgICAgICAgIHt0ZXh0OiBcIuWumOa4oeWMulwiLCB2YWx1ZTogXCLlrpjmuKHljLpcIn0sXHJcbiAgICAgICAgICB7dGV4dDogXCLopb/lsbHljLpcIiwgdmFsdWU6IFwi6KW/5bGx5Yy6XCJ9LFxyXG4gICAgICAgICAge3RleHQ6IFwi5ZGI6LSh5Yy6XCIsIHZhbHVlOiBcIuWRiOi0oeWMulwifSxcclxuICAgICAgICAgIHt0ZXh0OiBcIue7j+a1juaKgOacr+W8gOWPkeWMulwiLCB2YWx1ZTogXCLnu4/mtY7mioDmnK/lvIDlj5HljLpcIn0sXHJcbiAgICAgICAgICB7dGV4dDogXCLpq5jmlrDmioDmnK/lvIDlj5HljLpcIiwgdmFsdWU6IFwi6auY5paw5oqA5pyv5byA5Y+R5Yy6XCJ9LFxyXG4gICAgICAgICAge3RleHQ6IFwi5ruH5rGg5peF5ri45bqm5YGH5Yy6XCIsIHZhbHVlOiBcIua7h+axoOaXhea4uOW6puWBh+WMulwifSxcclxuICAgICAgICAgIHt0ZXh0OiBcIuS4nOW3neWMulwiLCB2YWx1ZTogXCLkuJzlt53ljLpcIn0sXHJcbiAgICAgICAgICB7dGV4dDogXCLmmYvlroHljr9cIiwgdmFsdWU6IFwi5pmL5a6B5Y6/XCJ9LFxyXG4gICAgICAgICAge3RleHQ6IFwi5a+M5rCR5Y6/XCIsIHZhbHVlOiBcIuWvjOawkeWOv1wifSxcclxuICAgICAgICAgIHt0ZXh0OiBcIuWunOiJr+WOv1wiLCB2YWx1ZTogXCLlrpzoia/ljr9cIn0sXHJcbiAgICAgICAgICB7dGV4dDogXCLnn7PmnpflvZ3ml4/oh6rmsrvljr9cIiwgdmFsdWU6IFwi55+z5p6X5b2d5peP6Ieq5rK75Y6/XCJ9LFxyXG4gICAgICAgICAge3RleHQ6IFwi5bWp5piO5Y6/XCIsIHZhbHVlOiBcIuW1qeaYjuWOv1wifSxcclxuICAgICAgICAgIHt0ZXh0OiBcIuemhOWKneW9neaXj+iLl+aXj+iHquayu+WOv1wiLCB2YWx1ZTogXCLnpoTlip3lvZ3ml4/oi5fml4/oh6rmsrvljr9cIn0sXHJcbiAgICAgICAgICB7dGV4dDogXCLlr7vnlLjlm57ml4/lvZ3ml4/oh6rmsrvljr9cIiwgdmFsdWU6IFwi5a+755S45Zue5peP5b2d5peP6Ieq5rK75Y6/XCJ9LFxyXG4gICAgICAgICAge3RleHQ6IFwi6Ziz5a6X5rW36aOO5pmv5ZCN6IOc5Yy6XCIsIHZhbHVlOiBcIumYs+Wul+a1t+mjjuaZr+WQjeiDnOWMulwifSxcclxuICAgICAgICAgIHt0ZXh0OiBcIuWuieWugeW4glwiLCB2YWx1ZTogXCLlronlroHluIJcIn0sXHJcbiAgICAgICAgICB7dGV4dDogXCLnqbrmuK/nu4/mtY7ljLpcIiwgdmFsdWU6IFwi56m65riv57uP5rWO5Yy6XCJ9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgY291bnRyeUVjaGFydDogbnVsbCxcclxuICAgICAgICByZXNlcnZvaXJFY2hhcnQ6IG51bGwsXHJcbiAgICAgICAgc2tBcnI6IFtdLFxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgbGFrZUNoYXJ0LFxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgIHRoaXMubG9hZERhdGEoKTtcclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGxvYWREYXRhKCkge1xyXG4gICAgICAgIGxldCBpbmZvID0ge1xyXG4gICAgICAgICAgcmVnaW9uOiB0aGlzLmFyZWEsXHJcbiAgICAgICAgICB0eXBlOiBcIumlrueUqOawtOa6kOWcsFwiLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgd2F0ZXJCb2R5TGlzdChpbmZvKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2tBcnIgPSByZXMuZGF0YTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSxcclxuICAgICAgaW5pdENoYXJ0KGNoYXJ0SW5zdGFuY2UpIHtcclxuICAgICAgICBjb25zdCBvcHRpb24gPSB7XHJcbiAgICAgICAgICBzZXJpZXM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG5hbWU6IFwi5LyY6Imv546HXCIsXHJcbiAgICAgICAgICAgICAgdHlwZTogXCJsaXF1aWRGaWxsXCIsXHJcbiAgICAgICAgICAgICAgY29sb3I6IFtcInJnYmEoNzYsIDEwMCwgMjU0LCAxKVwiLCBcInJnYmEoMTA5LCAxODEsIDI1MiwgMC41KVwiXSxcclxuICAgICAgICAgICAgICBkYXRhOiBbXHJcbiAgICAgICAgICAgICAgICAwLjU0LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogMC41NCxcclxuICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBcImxlZnRcIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICByYWRpdXM6IFwiNzAlXCIsXHJcbiAgICAgICAgICAgICAgb3V0bGluZToge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyRGlzdGFuY2U6IDMsXHJcbiAgICAgICAgICAgICAgICBpdGVtU3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDMsXHJcbiAgICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInJnYmEoNzYsIDEwMCwgMjU0LCAxKVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGJhY2tncm91bmRTdHlsZToge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwidHJhbnNwYXJlbnRcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGl0ZW1TdHlsZToge1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC45NSxcclxuICAgICAgICAgICAgICAgIHNoYWRvd0NvbG9yOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMClcIixcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgIGxhYmVsOiB7XHJcbiAgICAgICAgICAgICAgICBzaG93OiBmYWxzZSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNoYXJ0SW5zdGFuY2Uuc2V0T3B0aW9uKG9wdGlvbik7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgYXJlYSh2YWwpIHtcclxuICAgICAgICBpZiAodmFsKSB7XHJcbiAgICAgICAgICB0aGlzLmxvYWREYXRhKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSxcclxuICB9O1xyXG48L3NjcmlwdD5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcbiAgLnZhbi1kcm9wZG93bi1tZW51X190aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gIH1cclxuXHJcbiAgLnZhbi1kcm9wZG93bi1tZW51X19iYXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLnZhbi1kcm9wZG93bi1tZW51X19pdGVtIHtcclxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjQ2LCAyNDYsIDI0NiwgMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgfVxyXG5cclxuICAudmFuLWRyb3Bkb3duLW1lbnVfX3RpdGxlIHtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgcGFkZGluZzogMCA4cHggMCAwO1xyXG4gIH1cclxuPC9zdHlsZT5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIC5mcy1jb250ZW50IHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB9XHJcblxyXG4gIC5yZS13cmFwcGVyIHtcclxuICAgIC8vIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDQ0JTtcclxuICAgIG1hcmdpbi1sZWZ0OiA0JTtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICBwYWRkaW5nOiA0cHggMDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNDgsIDI1MSwgMjU1LCAxKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG5cclxuICAgIC5uYW1lIHtcclxuICAgICAgcGFkZGluZy10b3A6IDNweDtcclxuXHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuXHJcbiAgICAubnVtIHtcclxuICAgIH1cclxuICB9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZC13cmFwcGVyXCIgc3R5bGU9XCJwYWRkaW5nLWJvdHRvbTogMTRweFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZzXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiA4cHhcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGl0bGUgY2FyZC10aXRsZS13YXRlclwiPuays+a1geWIhuW4g+aDheWGtTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZnNcIiBzdHlsZT1cInBhZGRpbmctcmlnaHQ6IDEzcHhcIj5cclxuICAgICAgICA8dmFuLWRyb3Bkb3duLW1lbnUgYWN0aXZlLWNvbG9yPVwiIzE5ODlmYVwiIHN0eWxlPVwid2lkdGg6IDEwMHB4XCI+XHJcbiAgICAgICAgICA8dmFuLWRyb3Bkb3duLWl0ZW0gdi1tb2RlbD1cInZhbHVlMVwiIDpvcHRpb25zPVwib3B0aW9uMVwiIC8+XHJcbiAgICAgICAgPC92YW4tZHJvcGRvd24tbWVudT5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInRpbWVcIiBAY2xpY2s9XCJ0b1JpdmVyTGlzdFwiPuafpeeci+abtOWkmjwvc3Bhbj5cclxuICAgICAgICA8aW1nIHNyYz1cIn5AL2Fzc2V0cy90b3JpZ2h0LnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgPCEtLSA8aW1nIHNyYz1cIkAvYXNzZXRzL21vcmVNYXAucG5nXCIgc3R5bGU9XCJ3aWR0aDogMjBweFwiIC8+IC0tPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInNpdGUtd3JhcHBlclwiIHN0eWxlPVwiYmFja2dyb3VuZDogcmdiYSg2OCwgMTIzLCAyNTIsIDAuMDMpXCIgdi1zaG93PVwibHlTdGF0aW9uLnJpdmVyLmxlbmd0aCA9PSAwXCI+XHJcbiAgICAgIDxkaXYgc3R5bGU9XCJmb250LXNpemU6IDEycHg7IGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7IHdpZHRoOiAxMDAlOyB0ZXh0LWFsaWduOiBjZW50ZXJcIj7mmoLml6DmsrPpgZPkv6Hmga/vvIE8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cInNpdGUtd3JhcHBlclwiIDpzdHlsZT1cInsgYmFja2dyb3VuZDogIXJpdmVyLm92ZXJTdGFuZGFyZCA/ICcgcmdiYSg2OCwgMTIzLCAyNTIsIDAuMDMpJyA6ICdyZ2JhKDI1NCw3OSwyLDAuMDMpJyB9XCIgdi1mb3I9XCIocml2ZXIsaW5kZXgpIGluIGx5U3RhdGlvbi5yaXZlclwiIHYtc2hvdz1cImluZGV4PDVcIiBAY2xpY2s9XCJ0b1N0YXRpb24ocml2ZXIpXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJzaXRlLW5hbWVcIj57eyByaXZlci53YXRlckJvZHlOYW1lIH19PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNpdGUtc3RhdHVzXCIgOnN0eWxlPVwieyBiYWNrZ3JvdW5kSW1hZ2U6ICd1cmwoJyArIGp1ZGdlTGV2ZWwocmVwbGFjZVN0cmluZyhyaXZlci5xdWFsaXR5KSkgKyAnKScsIG1hcmdpbjogJzAgMzBweCAwIDE2cHgnIH1cIj5cclxuICAgICAgICAgIHt7IHJlcGxhY2VTdHJpbmcocml2ZXIucXVhbGl0eSB8fCBcIi1cIikgfX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic2l0ZS10YXJnZXRcIj5cclxuICAgICAgICAgIOebruagh1xyXG4gICAgICAgICAgPHNwYW4gOmNsYXNzPVwiWyd0YXJnZXQtbGV2ZWwnLCBqdWRnZVRhcmdldExldmVsKHJlcGxhY2VTdHJpbmcocml2ZXIudGFyZ2V0IHx8ICctJykpXVwiPlxyXG4gICAgICAgICAgICB7eyByZXBsYWNlU3RyaW5nKHJpdmVyLnRhcmdldCB8fCBcIi1cIikgfX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJwb2ludCBmc1wiPlxyXG4gICAgICAgIOebkea1i+aWremdou+8mnt7IHJpdmVyLnNlY3Rpb25OYW1lIH19XHJcbiAgICAgICAgPGRpdiBzdHlsZT1cImNvbG9yOiAjNDQ3YmZjOyBkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyXCIgdi1zaG93PVwiIXJpdmVyLm92ZXJTdGFuZGFyZFwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaXJjbGVcIiBzdHlsZT1cImJhY2tncm91bmQ6ICM0NDdiZmNcIj48L3NwYW4+XHJcbiAgICAgICAgICDovr7moIdcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHN0eWxlPVwiY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTsgZGlzcGxheTogZmxleDsgYWxpZ24taXRlbXM6IGNlbnRlclwiIHYtc2hvdz1cInJpdmVyLm92ZXJTdGFuZGFyZFwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjaXJjbGVcIiBzdHlsZT1cImJhY2tncm91bmQ6ICNmZjhkMWFcIj48L3NwYW4+XHJcbiAgICAgICAgICDotoXmoIdcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7IGltZ0p1Z2RlTGV2ZWwgfSBmcm9tIFwiQC91dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgeyBseURldGFpbCB9IGZyb20gXCJAL2FwaS93YXRlcl9lbnZpclwiO1xyXG5pbXBvcnQge2dldFNlY3Rpb25UaW1lfSBmcm9tICdAL3V0aWxzL3V0aWxzJztcclxuaW1wb3J0IGRheWpzIGZyb20gJ2RheWpzJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwicml2ZXJEaXNcIixcclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgdmFsdWUxOiBcIua7h+axoOa1geWfn1wiLFxyXG4gICAgICBvcHRpb24xOiBbXHJcbiAgICAgICAgeyB0ZXh0OiBcIua7h+axoOa1geWfn1wiLCB2YWx1ZTogXCLmu4fmsaDmtYHln59cIiB9LFxyXG4gICAgICAgIHsgdGV4dDogXCLpmLPlrpfmtbfmtYHln59cIiwgdmFsdWU6IFwi6Ziz5a6X5rW35rWB5Z+fXCIgfSxcclxuICAgICAgICB7IHRleHQ6IFwi5pmu5rih5rKz5rWB5Z+fXCIsIHZhbHVlOiBcIuaZrua4oeays+a1geWfn1wiIH0sXHJcbiAgICAgICAgeyB0ZXh0OiBcIuWNl+ebmOaxn+a1geWfn1wiLCB2YWx1ZTogXCLljZfnm5jmsZ/mtYHln59cIiB9LFxyXG4gICAgICAgIHsgdGV4dDogXCLlsI/msZ/mtYHln59cIiwgdmFsdWU6IFwi5bCP5rGf5rWB5Z+fXCIgfSxcclxuICAgICAgICB7IHRleHQ6IFwi54mb5qCP5rGf5rWB5Z+fXCIsIHZhbHVlOiBcIueJm+agj+axn+a1geWfn1wiIH0sXHJcbiAgICAgIF0sXHJcbiAgICAgIGhsQXJyOiBbXSxcclxuICAgICAgbHlTdGF0aW9uOiB7XHJcbiAgICAgICAgcml2ZXI6IFtdXHJcbiAgICAgIH0sXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgdG9SaXZlckxpc3QoKXtcclxuICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgIG5hbWU6IFwicml2ZXJEZXRhaWxcIixcclxuICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgdGl0bGU6IHRoaXMudmFsdWUxXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0THlJbmZvKCkge1xyXG4gICAgICBsZXQgaW5mbyA9IHtcclxuICAgICAgICAvLyBiYXNpbk5hbWU6IHRoaXMuJHJvdXRlLnF1ZXJ5Lmx5TmFtZSxcclxuICAgICAgICBiYXNpbk5hbWU6IHRoaXMudmFsdWUxLFxyXG4gICAgICB9O1xyXG4gICAgICBseURldGFpbChpbmZvKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBpZiAocmVzLmNvZGUgPT0gXCIyMDBcIikge1xyXG4gICAgICAgICAgdGhpcy5seVN0YXRpb24gPSByZXMuZGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIHRvU3RhdGlvbihpdGVtKSB7XHJcbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICBuYW1lOiBcInN0YXRpb25SaXZlckRldGFpbFwiLFxyXG4gICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAvLyBtYzogaXRlbS5zZWN0aW9uTmFtZSxcclxuICAgICAgICAgIHR5cGU6IGl0ZW0ubW9uaXRvck1ldGhvZCA9PSBcIuiHquWKqFwiID8gXCLml7ZcIiA6IFwi5pyIXCIsXHJcbiAgICAgICAgICBpZDogaXRlbS5zZWN0aW9uSWQsXHJcbiAgICAgICAgICB0aW1lOiBpdGVtLm1vbml0b3JNZXRob2QgPT0gXCLoh6rliqhcIj9nZXRTZWN0aW9uVGltZSgpOmRheWpzKGdldFNlY3Rpb25UaW1lKCkpLmZvcm1hdCgnWVlZWS1NTS1ERCcpXHJcbiAgICAgICAgICAvLyBsaXN0VHlwZTogaXRlbS50eXBlLFxyXG4gICAgICAgICAgLy8gemRUeXBlOiBpdGVtLm1vbml0b3JNZXRob2QsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgcmVwbGFjZVN0cmluZyh2YWx1ZSkge1xyXG4gICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZShcIuexu1wiLCBcIlwiKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGp1ZGdlTGV2ZWwodmFsdWUpIHtcclxuICAgICAgcmV0dXJuIGltZ0p1Z2RlTGV2ZWwodmFsdWUpO1xyXG4gICAgfSxcclxuICAgIGp1ZGdlVGFyZ2V0TGV2ZWwodmFsdWUpIHtcclxuICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIFwidGFyZ2V0MlwiO1xyXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIuKFoVwiKSB7XHJcbiAgICAgICAgcmV0dXJuIFwidGFyZ2V0MlwiO1xyXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIuKFolwiKSB7XHJcbiAgICAgICAgcmV0dXJuIFwidGFyZ2V0M1wiO1xyXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIuKFo1wiKSB7XHJcbiAgICAgICAgcmV0dXJuIFwidGFyZ2V0NFwiO1xyXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIuKFpFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIFwidGFyZ2V0NVwiO1xyXG4gICAgICB9IGVsc2UgaWYgKHZhbHVlID09PSBcIuWKo+KFpFwiKSB7XHJcbiAgICAgICAgcmV0dXJuIFwidGFyZ2V0NlwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBcInRhcmdldDBcIjtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9LFxyXG4gIG1vdW50ZWQoKSB7XHJcbiAgICB0aGlzLmdldEx5SW5mbygpO1xyXG4gIH0sXHJcbiAgd2F0Y2g6IHtcclxuICAgIHZhbHVlMSh2YWwpIHtcclxuICAgICAgaWYgKHZhbCkge1xyXG4gICAgICAgIHRoaXMuZ2V0THlJbmZvKCk7XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG4udmFuLWRyb3Bkb3duLW1lbnVfX3RpdGxlIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxufVxyXG5cclxuLnZhbi1kcm9wZG93bi1tZW51X19iYXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGhlaWdodDogMjhweDtcclxuICBib3gtc2hhZG93OiBub25lO1xyXG59XHJcblxyXG4udmFuLWRyb3Bkb3duLW1lbnVfX2l0ZW0ge1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0NiwgMjQ2LCAyNDYsIDEpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxufVxyXG4udmFuLWRyb3Bkb3duLW1lbnVfX3RpdGxlIHtcclxuICB3aWR0aDogNjBweDtcclxuICBwYWRkaW5nOiAwIDhweCAwIDA7XHJcbn1cclxuPC9zdHlsZT5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4ucmVzZXJ2b2lyLXdyYXBwZXIge1xyXG4gIG1hcmdpbjogNXB4IDIzcHggMTRweDtcclxuXHJcbiAgLnRpdGxlIHtcclxuICAgIHBhZGRpbmc6IDAgNXB4IDNweDtcclxuICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcblxyXG4gICAgLm51bSB7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDEpO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnByb2dyZXNzLXdyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDIzNiwgMjQyLCAyNTUsIDEpO1xyXG5cclxuICAgIC5zdGFuZGFyZCB7XHJcbiAgICAgIGhlaWdodDogMTJweDtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg2MCwgMjQwLCAyNTAsIDEpIDAlLCByZ2JhKDQyLCAxMzAsIDIyOCwgMSkgMTAwJSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uc2l0ZS13cmFwcGVyIHtcclxuICBtYXJnaW46IDhweDtcclxuICBwYWRkaW5nOiAxMnB4IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogI2ZmZjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgLnNpdGUtbmFtZSB7XHJcbiAgICBjb2xvcjogIzEyMTIzNjtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcblxyXG4gIC5zaXRlLW5hbWUge1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcblxyXG4gIC5zaXRlLXRhcmdldCB7XHJcbiAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgLnBvaW50IHtcclxuICAgIHBhZGRpbmctdG9wOiA1cHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG5cclxuICAgIC5jaXJjbGUge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICB3aWR0aDogNnB4O1xyXG4gICAgICBoZWlnaHQ6IDZweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnRhcmdldC1sZXZlbCB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgd2lkdGg6IDMwcHg7XHJcbiAgaGVpZ2h0OiAxOHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbi5leGNlZWQge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBjb2xvcjogI2ZmOGQxYTtcclxufVxyXG5cclxuLnN0YW5kYXJkIHtcclxuICBjb2xvcjogIzQ0N2JmYztcclxufVxyXG5cclxuLm51bSB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDEpO1xyXG59XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZC13cmFwcGVyXCIgc3R5bGU9XCJtYXJnaW46IDA7d2lkdGg6IDUwJTtwYWRkaW5nLWJvdHRvbTogMTBweFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZzXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiA4cHg7XCIgQGNsaWNrPVwiJHJvdXRlci5wdXNoKHtuYW1lOiAnd2F0ZXJFbnZSYW5rJyxxdWVyeToge3RpbWU6IGxpc3RbMF0uWUVBUn19KVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10aXRsZSBjYXJkLXRpdGxlLXdhdGVyXCIgc3R5bGU9XCJwYWRkaW5nOiA1cHggMTBweFwiPuawtOeOr+Wig+aOkuWQjTwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwidGltZVwiPlxyXG4gICAgICAgIDxzcGFuIHYtaWY9XCJsaXN0WzBdXCIgc3R5bGU9XCIgY29sb3I6cmdiYSgxOCwgMTgsIDU0LCAwLjUpIFwiPnt7bGlzdFswXS5ZRUFSfX08L3NwYW4+XHJcbiAgICAgICAgPHZhbi1pY29uIG5hbWU9XCJhcnJvd1wiLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgdi1mb3I9XCIoaXRlbSxpKSBpbiBsaXN0XCIgOmNsYXNzPVwiWydjb21wZXRpdGlvbi13cmFwcGVyJywnZnMnLCAnbnVtQmcnK2ldXCI+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPHNwYW4gOmNsYXNzPVwiJ251bScraVwiPnt7aSsxfX08L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJhcmVhXCI+e3tpdGVtLk5BTUV9fTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgOmNsYXNzPVwiJ251bScraVwiPnt7aXRlbS5TQ09SRX195YiGPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJ5ZWFyUmFua1wiLFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbGlzdDoge1xyXG4gICAgICAgIHR5cGU6IEFycmF5LFxyXG4gICAgICAgIGRlZmF1bHQ6ICgpPT57fVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBzZWFyY2hPYmo6IHt9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG5cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gIC5jb21wZXRpdGlvbi13cmFwcGVyIHtcclxuICAgIG1hcmdpbjogNXB4IDdweCAwO1xyXG4gICAgcGFkZGluZzogOHB4IDEzcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxOCwgMTgsIDU0LCAwLjA1KTtcclxuXHJcbiAgICAuYXJlYSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogMTBweDtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICAuc2NvcmUge1xyXG4gICAgICBwYWRkaW5nOiAwIDhweDtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBjb2xvcjogcmdiYSgzOSwgMjA4LCA2NywgMSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLm51bUJnMCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgODcsIDUxLCAwLjA1KTtcclxuICB9XHJcblxyXG4gIC5udW1CZzEge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE0MSwgMjYsIDAuMDUpO1xyXG4gIH1cclxuXHJcbiAgLm51bUJnMiB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDE4NiwgMTczLCAwLjA1KTtcclxuICB9XHJcblxyXG4gIC5udW1CZzMge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg4MiwgMTEzLCAyNTUsIDAuMDUpO1xyXG4gIH1cclxuXHJcbiAgLm51bUJnNCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE4LCAxOCwgNTQsIDAuMDUpO1xyXG4gIH1cclxuXHJcblxyXG4gIC5udW0wIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgODcsIDUxLCAxKTtcclxuICB9XHJcblxyXG4gIC5udW0xIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMTQxLCAyNiwgMSk7XHJcbiAgfVxyXG5cclxuICAubnVtMiB7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAxODYsIDE3MywgMSk7XHJcbiAgfVxyXG5cclxuICAubnVtMyB7XHJcbiAgICBjb2xvcjogcmdiYSg4MiwgMTEzLCAyNTUsIDAuOCk7XHJcbiAgfVxyXG5cclxuICAubnVtNCB7XHJcbiAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gIH1cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtbm8tYm9yZGVyLXdyYXBwZXJcIiB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1uby1ib3JkZXItdGl0bGVcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmFtZVwiIH0sIFtfdm0uX3YoXCLmtYHln5/mpoLlhrVcIildKSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGltZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIue0r+iuoeaIquiHs1wiICtcbiAgICAgICAgICAgICAgX3ZtLl9zKF92bS5kYXlqcyhfdm0uc3RhcnREYXRlKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpKSArXG4gICAgICAgICAgICAgIFwiIFwiXG4gICAgICAgICAgKSxcbiAgICAgICAgXSksXG4gICAgICBdKSxcbiAgICAgIF92bS5fbChfdm0ubHlJbmZvQXJyLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdGFuZGFyZC13cmFwcGVyXCIsXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0udG9EZXRhaWwoaXRlbSlcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInN0YW5kYXJkLXRpdGxlIGZzXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZzXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMvcml2ZXJAMngucG5nXCIpIH0gfSksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5iYXNpbk5hbWUpKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJyZ2JhKDg0LCAxMTcsIDI0OCwgMSlcIiB9IH0sXG4gICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5YWl5rmW5rKz6YGTXCIgKyBfdm0uX3MoaXRlbS5yaXZlckNvdXJzZU51bWJlcikgKyBcIuadoVwiKV1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdGFuZGFyZC1ib3ggZnNcIixcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcImZvbnQtc2l6ZVwiOiBcIjEzcHhcIiB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2l0ZS10eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwicmdiYSg2OCwgMTIzLCAyNTIsIDEpXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuWbvVwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuS8mOiJr1wiKV0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibnVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0uc3RhdGVVcCkpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIvXCIgKyBfdm0uX3MoaXRlbS5zdGF0ZVRvdGFsKSArIFwi5LiqIFwiKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzaXRlLXR5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJyZ2JhKDAsIDE4NiwgMTczLCAxKVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLnnIFcIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLkvJjoia9cIildKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm51bVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLnByb3ZpbmNlVXApKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiL1wiICsgX3ZtLl9zKGl0ZW0ucHJvdmluY2VUb3RhbCkgKyBcIuS4qiBcIiksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2l0ZS10eXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwicmdiYSgyNTUsIDE0MSwgMjYsIDEpXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuW4glwiKV1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuS8mOiJr1wiKV0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibnVtXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0uZWNvbG9naWNhbFVwKSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIi9cIiArIF92bS5fcyhpdGVtLmVjb2xvZ2ljYWxUb3RhbCkgKyBcIuS4qiBcIiksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICB9KSxcbiAgICAgIF92bS5seUluZm9BcnIubGVuZ3RoID09PSAwXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgIFwidGV4dC1hbGlnblwiOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoMTgsIDE4LCA1NCwgMC41KVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX3YoXCLmmoLml6DmlbDmja5cIildXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLW5vLWJvcmRlci13cmFwcGVyXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1uby1ib3JkZXItdGl0bGVcIixcbiAgICAgICAgb246IHtcbiAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLnB1c2goeyBuYW1lOiBcImNvbXBldGl0aW9uR292ZXJuXCIgfSlcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFtfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hbWVcIiB9LCBbX3ZtLl92KF92bS5fcyhfdm0ueHpxaCkgKyBcIuaOkuWQjVwiKV0pXVxuICAgICksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJmc1wiLCBzdGF0aWNTdHlsZTogeyBcImFsaWduLWl0ZW1zXCI6IFwiZmxleC1zdGFydFwiIH0gfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJkLXdyYXBwZXJcIixcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgIG1hcmdpbjogXCIwXCIsXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjQ4JVwiLFxuICAgICAgICAgICAgICBcInBhZGRpbmctYm90dG9tXCI6IFwiMTBweFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZzXCIsIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLWJvdHRvbVwiOiBcIjhweFwiIH0gfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZSBjYXJkLXRpdGxlLXdhdGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHBhZGRpbmc6IFwiNXB4IDEwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLlpKfnq57otZvmjpLlkI1cIildXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZzIGNvbXBldGl0aW9uLXRpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udG9MaXN0IH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcInJnYmEoMTgsIDE4LCA1NCwgMC41KVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0udGltZSkpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInZhbi1pY29uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJhcnJvd1wiIH0gfSksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX2woX3ZtLmNvbXBldGl0aW9ucywgZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcImNvbXBldGl0aW9uLXdyYXBwZXJcIiwgXCJmc1wiLCBcIm51bUJnXCIgKyBpXSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS50b0RldGFpbChpdGVtKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgY2xhc3M6IFwibnVtXCIgKyBpIH0sIFtfdm0uX3YoX3ZtLl9zKGkgKyAxKSldKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYXJlYVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0uTkFNRSkpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBjbGFzczogXCJudW1cIiArIGkgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0uU0NPUkUpICsgXCLliIZcIiksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgMlxuICAgICAgICApLFxuICAgICAgICBfYyhcInllYXJSYW5rXCIsIHsgYXR0cnM6IHsgbGlzdDogX3ZtLnllYXJSYW5rIH0gfSksXG4gICAgICBdLFxuICAgICAgMVxuICAgICksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwge1xuICAgIHJlZjogXCJjb3VudHJ5RWNoYXJ0XCIsXG4gICAgc3RhdGljU3R5bGU6IHsgaGVpZ2h0OiBcIjcwcHhcIiwgd2lkdGg6IFwiNzBweFwiLCBtYXJnaW46IFwiMCBhdXRvXCIgfSxcbiAgfSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC13cmFwcGVyXCIsIHN0YXRpY1N0eWxlOiB7IFwicGFkZGluZy1ib3R0b21cIjogXCIxNHB4XCIgfSB9LFxuICAgIFtcbiAgICAgIF92bS5fbSgwKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInpvbmUtd3JhcHBlciBmc1wiIH0sXG4gICAgICAgIF92bS5fbCg0LCBmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInpvbmUtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibmFtZVwiIH0sIFtfdm0uX3YoXCLkv53miqTljLpcIildKSxcbiAgICAgICAgICAgIF92bS5fbSgxLCB0cnVlKSxcbiAgICAgICAgICBdKVxuICAgICAgICB9KSxcbiAgICAgICAgMFxuICAgICAgKSxcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IHN0YXRpY0NsYXNzOiBcImZzXCIsIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLWJvdHRvbVwiOiBcIjhweFwiIH0gfSxcbiAgICAgIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlIGNhcmQtdGl0bGUtd2F0ZXJcIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwi5piG5piO5biC5rC05Yqf6IO95Yy65YiSXCIpLFxuICAgICAgICBdKSxcbiAgICAgIF1cbiAgICApXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZzXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJyZ2JhKDE4LCAxOCwgNTQsIDEpXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiMzlcIiksXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIg5LiqIFwiKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmc1wiLCBzdGF0aWNTdHlsZTogeyBcImZvbnQtd2VpZ2h0XCI6IFwiYm9sZFwiIH0gfSwgW1xuICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMTRweFwiIH0sXG4gICAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiQC9hc3NldHMv6aW854q25Zu+LnBuZ1wiKSB9LFxuICAgICAgICB9KSxcbiAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwicmdiYSg2OCwgMTIzLCAyNTIsIDEpXCIgfSB9LCBbXG4gICAgICAgICAgX3ZtLl92KFwiMTcuNSVcIiksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtd3JhcHBlclwiLCBzdGF0aWNTdHlsZTogeyBcInBhZGRpbmctYm90dG9tXCI6IFwiMTRweFwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmc1wiLCBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi1ib3R0b21cIjogXCI4cHhcIiB9IH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGUgY2FyZC10aXRsZS13YXRlclwiIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIuawtOi0qOWHgOWMluWOguWIhuW4g+aDheWGtVwiKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZzXCIsIHN0YXRpY1N0eWxlOiB7IFwicGFkZGluZy1yaWdodFwiOiBcIjEzcHhcIiB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRpbWVcIiwgb246IHsgY2xpY2s6IF92bS50b0xpc3QgfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwi5p+l55yL5pu05aSaXCIpLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL3RvcmlnaHQucG5nXCIpLCBhbHQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fbChfdm0ubGlzdCwgZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IGluZGV4IDwgNSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImluZGV4PDVcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwdXItd3JhcHBlclwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbS5lbnRlcnByaXNlTmFtZSkpXVxuICAgICAgICApXG4gICAgICB9KSxcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJjYXJkLXdyYXBwZXJcIiwgc3RhdGljU3R5bGU6IHsgXCJwYWRkaW5nLWJvdHRvbVwiOiBcIjE0cHhcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZnNcIiwgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tYm90dG9tXCI6IFwiNXB4XCIgfSB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlIGNhcmQtdGl0bGUtd2F0ZXJcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXCLmsLTlupPliIbluIPlj4rlupPlrrlcIiksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmc1wiLCBzdGF0aWNTdHlsZTogeyBcInBhZGRpbmctcmlnaHRcIjogXCIxM3B4XCIgfSB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInZhbi1kcm9wZG93bi1tZW51XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMTAwcHhcIiB9LFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhY3RpdmUtY29sb3JcIjogXCIjMTk4OWZhXCIgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidmFuLWRyb3Bkb3duLWl0ZW1cIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBvcHRpb25zOiBfdm0ub3B0aW9uMSB9LFxuICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uYXJlYSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmFyZWEgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYXJlYVwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmcy1jb250ZW50XCIgfSxcbiAgICAgICAgX3ZtLl9sKF92bS5za0FyciwgZnVuY3Rpb24gKGl0ZW0sIGluZGV4KSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicmUtd3JhcHBlclwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm5hbWVcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5ib2R5TmFtZSkpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiNzBweFwiLFxuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiNzBweFwiLFxuICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjAgYXV0b1wiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfYyhcImxha2VDaGFydFwiKV0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY1N0eWxlOiB7IFwiZm9udC1zaXplXCI6IFwiMTRweFwiIH0gfSwgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJyZ2JhKDE4LCAxOCwgNTQsIDEpXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLnN0b3JhZ2VDYXBhY2l0eSB8fCBcIi1cIikpLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIOS6v+eri+aWueexsyBcIiksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKVxuICAgICAgICB9KSxcbiAgICAgICAgMFxuICAgICAgKSxcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC13cmFwcGVyXCIsIHN0YXRpY1N0eWxlOiB7IFwicGFkZGluZy1ib3R0b21cIjogXCIxNHB4XCIgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZzXCIsIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLWJvdHRvbVwiOiBcIjhweFwiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZSBjYXJkLXRpdGxlLXdhdGVyXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFwi5rKz5rWB5YiG5biD5oOF5Ya1XCIpLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZnNcIiwgc3RhdGljU3R5bGU6IHsgXCJwYWRkaW5nLXJpZ2h0XCI6IFwiMTNweFwiIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ2YW4tZHJvcGRvd24tbWVudVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjEwMHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYWN0aXZlLWNvbG9yXCI6IFwiIzE5ODlmYVwiIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInZhbi1kcm9wZG93bi1pdGVtXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgb3B0aW9uczogX3ZtLm9wdGlvbjEgfSxcbiAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnZhbHVlMSxcbiAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnZhbHVlMSA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJ2YWx1ZTFcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRpbWVcIiwgb246IHsgY2xpY2s6IF92bS50b1JpdmVyTGlzdCB9IH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIuafpeeci+abtOWkmlwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL3RvcmlnaHQucG5nXCIpLCBhbHQ6IFwiXCIgfSxcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0ubHlTdGF0aW9uLnJpdmVyLmxlbmd0aCA9PSAwLFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImx5U3RhdGlvbi5yaXZlci5sZW5ndGggPT0gMFwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNpdGUtd3JhcHBlclwiLFxuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGJhY2tncm91bmQ6IFwicmdiYSg2OCwgMTIzLCAyNTIsIDAuMDMpXCIgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2JhKDE4LCAxOCwgNTQsIDAuNSlcIixcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICAgICAgICAgICAgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihcIuaaguaXoOays+mBk+S/oeaBr++8gVwiKV1cbiAgICAgICAgICApLFxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl9sKF92bS5seVN0YXRpb24ucml2ZXIsIGZ1bmN0aW9uIChyaXZlciwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogaW5kZXggPCA1LFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaW5kZXg8NVwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNpdGUtd3JhcHBlclwiLFxuICAgICAgICAgICAgc3R5bGU6IHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogIXJpdmVyLm92ZXJTdGFuZGFyZFxuICAgICAgICAgICAgICAgID8gXCIgcmdiYSg2OCwgMTIzLCAyNTIsIDAuMDMpXCJcbiAgICAgICAgICAgICAgICA6IFwicmdiYSgyNTQsNzksMiwwLjAzKVwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS50b1N0YXRpb24ocml2ZXIpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmc1wiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzaXRlLW5hbWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhyaXZlci53YXRlckJvZHlOYW1lKSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNpdGUtc3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6XG4gICAgICAgICAgICAgICAgICAgICAgXCJ1cmwoXCIgK1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5qdWRnZUxldmVsKF92bS5yZXBsYWNlU3RyaW5nKHJpdmVyLnF1YWxpdHkpKSArXG4gICAgICAgICAgICAgICAgICAgICAgXCIpXCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIwIDMwcHggMCAxNnB4XCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIiBcIiArIF92bS5fcyhfdm0ucmVwbGFjZVN0cmluZyhyaXZlci5xdWFsaXR5IHx8IFwiLVwiKSkgKyBcIiBcIlxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic2l0ZS10YXJnZXRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIOebruaghyBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgICBcInRhcmdldC1sZXZlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5qdWRnZVRhcmdldExldmVsKFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlcGxhY2VTdHJpbmcocml2ZXIudGFyZ2V0IHx8IFwiLVwiKVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCIgXCIgKyBfdm0uX3MoX3ZtLnJlcGxhY2VTdHJpbmcocml2ZXIudGFyZ2V0IHx8IFwiLVwiKSkgKyBcIiBcIlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBvaW50IGZzXCIgfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCIg55uR5rWL5pat6Z2i77yaXCIgKyBfdm0uX3Mocml2ZXIuc2VjdGlvbk5hbWUpICsgXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICFyaXZlci5vdmVyU3RhbmRhcmQsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIhcml2ZXIub3ZlclN0YW5kYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzQ0N2JmY1wiLFxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhbGlnbi1pdGVtc1wiOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNpcmNsZVwiLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBiYWNrZ3JvdW5kOiBcIiM0NDdiZmNcIiB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIg6L6+5qCHIFwiKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcml2ZXIub3ZlclN0YW5kYXJkLFxuICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicml2ZXIub3ZlclN0YW5kYXJkXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwicmdiYSgxOCwgMTgsIDU0LCAwLjUpXCIsXG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICBcImFsaWduLWl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2lyY2xlXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IGJhY2tncm91bmQ6IFwiI2ZmOGQxYVwiIH0sXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiDotoXmoIcgXCIpLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgfSksXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtd3JhcHBlclwiLFxuICAgICAgc3RhdGljU3R5bGU6IHsgbWFyZ2luOiBcIjBcIiwgd2lkdGg6IFwiNTAlXCIsIFwicGFkZGluZy1ib3R0b21cIjogXCIxMHB4XCIgfSxcbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZnNcIixcbiAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi1ib3R0b21cIjogXCI4cHhcIiB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gX3ZtLiRyb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogXCJ3YXRlckVudlJhbmtcIixcbiAgICAgICAgICAgICAgICBxdWVyeTogeyB0aW1lOiBfdm0ubGlzdFswXS5ZRUFSIH0sXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGUgY2FyZC10aXRsZS13YXRlclwiLFxuICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBwYWRkaW5nOiBcIjVweCAxMHB4XCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwi5rC0546v5aKD5o6S5ZCNXCIpXVxuICAgICAgICAgICksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0aW1lXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLmxpc3RbMF1cbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJyZ2JhKDE4LCAxOCwgNTQsIDAuNSlcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5saXN0WzBdLllFQVIpKV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfYyhcInZhbi1pY29uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJhcnJvd1wiIH0gfSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX2woX3ZtLmxpc3QsIGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgY2xhc3M6IFtcImNvbXBldGl0aW9uLXdyYXBwZXJcIiwgXCJmc1wiLCBcIm51bUJnXCIgKyBpXSB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgY2xhc3M6IFwibnVtXCIgKyBpIH0sIFtfdm0uX3YoX3ZtLl9zKGkgKyAxKSldKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYXJlYVwiIH0sIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uTkFNRSkpXSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgY2xhc3M6IFwibnVtXCIgKyBpIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLlNDT1JFKSArIFwi5YiGXCIpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICB9KSxcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2FyZC1uby1ib3JkZXItd3JhcHBlcltkYXRhLXYtM2MwYmYxNjBdIHtcXG4gIG1hcmdpbjogNHB4IDE3cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLmNhcmQtbm8tYm9yZGVyLXdyYXBwZXIgLmNhcmQtbm8tYm9yZGVyLXRpdGxlW2RhdGEtdi0zYzBiZjE2MF0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxufVxcbi5jYXJkLW5vLWJvcmRlci13cmFwcGVyIC5jYXJkLW5vLWJvcmRlci10aXRsZSAubmFtZVtkYXRhLXYtM2MwYmYxNjBdIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uY2FyZC1uby1ib3JkZXItd3JhcHBlciAuY2FyZC1uby1ib3JkZXItdGl0bGUgLnRpbWVbZGF0YS12LTNjMGJmMTYwXSB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4uc3RhbmRhcmQtd3JhcHBlcltkYXRhLXYtM2MwYmYxNjBdIHtcXG4gIG1hcmdpbjogNXB4IDA7XFxuICBwYWRkaW5nOiAxM3B4IDEycHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSg2OCwgMTIzLCAyNTIsIDAuMSkgMCUsIHJnYmEoNjgsIDEyMywgMjUyLCAwKSAxMDAlKSwgd2hpdGU7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZjNmZjtcXG59XFxuLnN0YW5kYXJkLXdyYXBwZXIgLnN0YW5kYXJkLXRpdGxlW2RhdGEtdi0zYzBiZjE2MF0ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC1mYW1pbHk6IGFsaW1hbWFzaHVoZWl0aTtcXG4gIHBhZGRpbmctYm90dG9tOiA2cHg7XFxufVxcbi5zdGFuZGFyZC13cmFwcGVyIC5zdGFuZGFyZC10aXRsZSBpbWdbZGF0YS12LTNjMGJmMTYwXSB7XFxuICB3aWR0aDogMTVweDtcXG59XFxuLnN0YW5kYXJkLXdyYXBwZXIgLnN0YW5kYXJkLXRpdGxlIC5uYW1lW2RhdGEtdi0zYzBiZjE2MF0ge1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgY29sb3I6ICMwODI4NTk7XFxufVxcbi5zdGFuZGFyZC13cmFwcGVyIC5zY29yZVtkYXRhLXYtM2MwYmYxNjBdIHtcXG4gIHBhZGRpbmc6IDAgOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzI3ZDA0MztcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiAjMjdkMDQzO1xcbn1cXG4uc3RhbmRhcmQtd3JhcHBlciAubnVtW2RhdGEtdi0zYzBiZjE2MF0ge1xcbiAgY29sb3I6ICMxMjEyMzY7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi5zdGFuZGFyZC1ib3hbZGF0YS12LTNjMGJmMTYwXSB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxufVxcbi5zdGFuZGFyZC1ib3ggZGl2W2RhdGEtdi0zYzBiZjE2MF0ge1xcbiAgd2lkdGg6IDMzJTtcXG59XFxuLnN0YW5kYXJkLWJveCAuc2l0ZS10eXBlW2RhdGEtdi0zYzBiZjE2MF0ge1xcbiAgZm9udC1mYW1pbHk6IGFsaW1hbWFzaHVoZWl0aTtcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2FyZC1uby1ib3JkZXItd3JhcHBlcltkYXRhLXYtMzJlYzE5OWRdIHtcXG4gIG1hcmdpbjogNHB4IDE3cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcXG59XFxuLmNhcmQtbm8tYm9yZGVyLXdyYXBwZXIgLmNhcmQtbm8tYm9yZGVyLXRpdGxlW2RhdGEtdi0zMmVjMTk5ZF0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxufVxcbi5jYXJkLW5vLWJvcmRlci13cmFwcGVyIC5jYXJkLW5vLWJvcmRlci10aXRsZSAubmFtZVtkYXRhLXYtMzJlYzE5OWRdIHtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uY2FyZC1uby1ib3JkZXItd3JhcHBlciAuY2FyZC1uby1ib3JkZXItdGl0bGUgLnRpbWVbZGF0YS12LTMyZWMxOTlkXSB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4uY29tcGV0aXRpb24tdGl0bGVbZGF0YS12LTMyZWMxOTlkXSB7XFxuICBwYWRkaW5nLXJpZ2h0OiA4cHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbn1cXG4uY29tcGV0aXRpb24tdGl0bGUgLmNoYW5nZS10YWJbZGF0YS12LTMyZWMxOTlkXSB7XFxuICBtYXJnaW46IDAgNXB4O1xcbiAgcGFkZGluZzogNnB4IDhweCA2cHggOHB4O1xcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVxcbi5jb21wZXRpdGlvbi10aXRsZSAuY2hlY2tbZGF0YS12LTMyZWMxOTlkXSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDgyLCAxMTMsIDI1NSwgMC4xKTtcXG4gIGNvbG9yOiAjNTI3MWZmO1xcbn1cXG4uY29tcGV0aXRpb24td3JhcHBlcltkYXRhLXYtMzJlYzE5OWRdIHtcXG4gIG1hcmdpbjogNXB4IDdweCAwO1xcbiAgcGFkZGluZzogOHB4IDEzcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgxOCwgMTgsIDU0LCAwLjA1KTtcXG59XFxuLmNvbXBldGl0aW9uLXdyYXBwZXIgLmFyZWFbZGF0YS12LTMyZWMxOTlkXSB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogIzEyMTIzNjtcXG59XFxuLmNvbXBldGl0aW9uLXdyYXBwZXIgLnNjb3JlW2RhdGEtdi0zMmVjMTk5ZF0ge1xcbiAgcGFkZGluZzogMCA4cHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogIzI3ZDA0MztcXG59XFxuLm51bUJnMFtkYXRhLXYtMzJlYzE5OWRdIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCA4NywgNTEsIDAuMDUpO1xcbn1cXG4ubnVtQmcxW2RhdGEtdi0zMmVjMTk5ZF0ge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE0MSwgMjYsIDAuMDUpO1xcbn1cXG4ubnVtQmcyW2RhdGEtdi0zMmVjMTk5ZF0ge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAxODYsIDE3MywgMC4wNSk7XFxufVxcbi5udW1CZzNbZGF0YS12LTMyZWMxOTlkXSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDgyLCAxMTMsIDI1NSwgMC4wNSk7XFxufVxcbi5udW1CZzRbZGF0YS12LTMyZWMxOTlkXSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDE4LCAxOCwgNTQsIDAuMDUpO1xcbn1cXG4ubnVtMFtkYXRhLXYtMzJlYzE5OWRdIHtcXG4gIGNvbG9yOiAjZmY1NzMzO1xcbn1cXG4ubnVtMVtkYXRhLXYtMzJlYzE5OWRdIHtcXG4gIGNvbG9yOiAjZmY4ZDFhO1xcbn1cXG4ubnVtMltkYXRhLXYtMzJlYzE5OWRdIHtcXG4gIGNvbG9yOiAjMDBiYWFkO1xcbn1cXG4ubnVtM1tkYXRhLXYtMzJlYzE5OWRdIHtcXG4gIGNvbG9yOiByZ2JhKDgyLCAxMTMsIDI1NSwgMC44KTtcXG59XFxuLm51bTRbZGF0YS12LTMyZWMxOTlkXSB7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi52YW4tZHJvcGRvd24tbWVudV9fdGl0bGUge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG59XFxuLnZhbi1kcm9wZG93bi1tZW51X19iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG4udmFuLWRyb3Bkb3duLW1lbnVfX2l0ZW0ge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZnMtY29udGVudFtkYXRhLXYtMzMwYmE0YjZdIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLnJlLXdyYXBwZXJbZGF0YS12LTMzMGJhNGI2XSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogNDQlO1xcbiAgbWFyZ2luLWxlZnQ6IDQlO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIHBhZGRpbmc6IDRweCAwO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBiYWNrZ3JvdW5kOiAjZjhmYmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxufVxcbi5yZS13cmFwcGVyIC5uYW1lW2RhdGEtdi0zMzBiYTRiNl0ge1xcbiAgcGFkZGluZy10b3A6IDNweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuem9uZS13cmFwcGVyW2RhdGEtdi03ODIxODEwOV0ge1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luOiAzcHggMTRweDtcXG59XFxuLnpvbmUtd3JhcHBlciAuem9uZS1pdGVtW2RhdGEtdi03ODIxODEwOV0ge1xcbiAgd2lkdGg6IDM5JTtcXG4gIG1hcmdpbi1ib3R0b206IDVweDtcXG4gIHBhZGRpbmc6IDExcHggMTZweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZjhmYmZmO1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLnpvbmUtd3JhcHBlciAuem9uZS1pdGVtIC5uYW1lW2RhdGEtdi03ODIxODEwOV0ge1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgIzAwYmFhZDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucHVyLXdyYXBwZXJbZGF0YS12LTdhYTAzYTQzXSB7XFxuICBtYXJnaW46IDhweDtcXG4gIHBhZGRpbmc6IDlweCAxMXB4O1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6ICNmOGZiZmY7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi52YW4tZHJvcGRvd24tbWVudV9fdGl0bGUge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcXG59XFxuLnZhbi1kcm9wZG93bi1tZW51X19iYXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBib3gtc2hhZG93OiBub25lO1xcbn1cXG4udmFuLWRyb3Bkb3duLW1lbnVfX2l0ZW0ge1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y2ZjZmNjtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG59XFxuLnZhbi1kcm9wZG93bi1tZW51X190aXRsZSB7XFxuICB3aWR0aDogNjBweDtcXG4gIHBhZGRpbmc6IDAgOHB4IDAgMDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZnMtY29udGVudFtkYXRhLXYtMDFlMTA0NGNdIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogYXV0bztcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLnJlLXdyYXBwZXJbZGF0YS12LTAxZTEwNDRjXSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogNDQlO1xcbiAgbWFyZ2luLWxlZnQ6IDQlO1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIHBhZGRpbmc6IDRweCAwO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBiYWNrZ3JvdW5kOiAjZjhmYmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxufVxcbi5yZS13cmFwcGVyIC5uYW1lW2RhdGEtdi0wMWUxMDQ0Y10ge1xcbiAgcGFkZGluZy10b3A6IDNweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIudmFuLWRyb3Bkb3duLW1lbnVfX3RpdGxlIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVxcbi52YW4tZHJvcGRvd24tbWVudV9fYmFyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgYm94LXNoYWRvdzogbm9uZTtcXG59XFxuLnZhbi1kcm9wZG93bi1tZW51X19pdGVtIHtcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNmY2ZjY7XFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxufVxcbi52YW4tZHJvcGRvd24tbWVudV9fdGl0bGUge1xcbiAgd2lkdGg6IDYwcHg7XFxuICBwYWRkaW5nOiAwIDhweCAwIDA7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnJlc2Vydm9pci13cmFwcGVyW2RhdGEtdi0xYWFiZjA3Ml0ge1xcbiAgbWFyZ2luOiA1cHggMjNweCAxNHB4O1xcbn1cXG4ucmVzZXJ2b2lyLXdyYXBwZXIgLnRpdGxlW2RhdGEtdi0xYWFiZjA3Ml0ge1xcbiAgcGFkZGluZzogMCA1cHggM3B4O1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLnJlc2Vydm9pci13cmFwcGVyIC50aXRsZSAubnVtW2RhdGEtdi0xYWFiZjA3Ml0ge1xcbiAgY29sb3I6ICMxMjEyMzY7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLnJlc2Vydm9pci13cmFwcGVyIC5wcm9ncmVzcy13cmFwcGVyW2RhdGEtdi0xYWFiZjA3Ml0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICBiYWNrZ3JvdW5kOiAjZWNmMmZmO1xcbn1cXG4ucmVzZXJ2b2lyLXdyYXBwZXIgLnByb2dyZXNzLXdyYXBwZXIgLnN0YW5kYXJkW2RhdGEtdi0xYWFiZjA3Ml0ge1xcbiAgaGVpZ2h0OiAxMnB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsICMzY2YwZmEgMCUsICMyYTgyZTQgMTAwJSk7XFxufVxcbi5zaXRlLXdyYXBwZXJbZGF0YS12LTFhYWJmMDcyXSB7XFxuICBtYXJnaW46IDhweDtcXG4gIHBhZGRpbmc6IDEycHggMTVweDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uc2l0ZS13cmFwcGVyIC5zaXRlLW5hbWVbZGF0YS12LTFhYWJmMDcyXSB7XFxuICBjb2xvcjogIzEyMTIzNjtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XFxuLnNpdGUtd3JhcHBlciAuc2l0ZS1uYW1lW2RhdGEtdi0xYWFiZjA3Ml0ge1xcbiAgZmxleDogMTtcXG59XFxuLnNpdGUtd3JhcHBlciAuc2l0ZS10YXJnZXRbZGF0YS12LTFhYWJmMDcyXSB7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG4uc2l0ZS13cmFwcGVyIC5wb2ludFtkYXRhLXYtMWFhYmYwNzJdIHtcXG4gIHBhZGRpbmctdG9wOiA1cHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbn1cXG4uc2l0ZS13cmFwcGVyIC5wb2ludCAuY2lyY2xlW2RhdGEtdi0xYWFiZjA3Ml0ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICB3aWR0aDogNnB4O1xcbiAgaGVpZ2h0OiA2cHg7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxufVxcbi50YXJnZXQtbGV2ZWxbZGF0YS12LTFhYWJmMDcyXSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogNXB4O1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDE4cHg7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5leGNlZWRbZGF0YS12LTFhYWJmMDcyXSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogI2ZmOGQxYTtcXG59XFxuLnN0YW5kYXJkW2RhdGEtdi0xYWFiZjA3Ml0ge1xcbiAgY29sb3I6ICM0NDdiZmM7XFxufVxcbi5udW1bZGF0YS12LTFhYWJmMDcyXSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogIzEyMTIzNjtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY29tcGV0aXRpb24td3JhcHBlcltkYXRhLXYtNWM2Y2I3NmVdIHtcXG4gIG1hcmdpbjogNXB4IDdweCAwO1xcbiAgcGFkZGluZzogOHB4IDEzcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgYmFja2dyb3VuZDogcmdiYSgxOCwgMTgsIDU0LCAwLjA1KTtcXG59XFxuLmNvbXBldGl0aW9uLXdyYXBwZXIgLmFyZWFbZGF0YS12LTVjNmNiNzZlXSB7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBjb2xvcjogIzEyMTIzNjtcXG59XFxuLmNvbXBldGl0aW9uLXdyYXBwZXIgLnNjb3JlW2RhdGEtdi01YzZjYjc2ZV0ge1xcbiAgcGFkZGluZzogMCA4cHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogIzI3ZDA0MztcXG59XFxuLm51bUJnMFtkYXRhLXYtNWM2Y2I3NmVdIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMjU1LCA4NywgNTEsIDAuMDUpO1xcbn1cXG4ubnVtQmcxW2RhdGEtdi01YzZjYjc2ZV0ge1xcbiAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDE0MSwgMjYsIDAuMDUpO1xcbn1cXG4ubnVtQmcyW2RhdGEtdi01YzZjYjc2ZV0ge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAxODYsIDE3MywgMC4wNSk7XFxufVxcbi5udW1CZzNbZGF0YS12LTVjNmNiNzZlXSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDgyLCAxMTMsIDI1NSwgMC4wNSk7XFxufVxcbi5udW1CZzRbZGF0YS12LTVjNmNiNzZlXSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDE4LCAxOCwgNTQsIDAuMDUpO1xcbn1cXG4ubnVtMFtkYXRhLXYtNWM2Y2I3NmVdIHtcXG4gIGNvbG9yOiAjZmY1NzMzO1xcbn1cXG4ubnVtMVtkYXRhLXYtNWM2Y2I3NmVdIHtcXG4gIGNvbG9yOiAjZmY4ZDFhO1xcbn1cXG4ubnVtMltkYXRhLXYtNWM2Y2I3NmVdIHtcXG4gIGNvbG9yOiAjMDBiYWFkO1xcbn1cXG4ubnVtM1tkYXRhLXYtNWM2Y2I3NmVdIHtcXG4gIGNvbG9yOiByZ2JhKDgyLCAxMTMsIDI1NSwgMC44KTtcXG59XFxuLm51bTRbZGF0YS12LTVjNmNiNzZlXSB7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiaW1wb3J0ICcuL3NyYy9saXF1aWRGaWxsJztcbiIsImltcG9ydCAnLi9saXF1aWRGaWxsU2VyaWVzJztcbmltcG9ydCAnLi9saXF1aWRGaWxsVmlldyc7IiwiaW1wb3J0ICogYXMgZWNoYXJ0cyBmcm9tICdlY2hhcnRzL2xpYi9lY2hhcnRzJztcblxuZWNoYXJ0cy5leHRlbmRTZXJpZXNNb2RlbCh7XG5cbiAgICB0eXBlOiAnc2VyaWVzLmxpcXVpZEZpbGwnLFxuXG4gICAgb3B0aW9uVXBkYXRlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgb3B0aW9uID0gdGhpcy5vcHRpb247XG4gICAgICAgIG9wdGlvbi5ncmlkU2l6ZSA9IE1hdGgubWF4KE1hdGguZmxvb3Iob3B0aW9uLmdyaWRTaXplKSwgNCk7XG4gICAgfSxcblxuICAgIGdldEluaXRpYWxEYXRhOiBmdW5jdGlvbiAob3B0aW9uLCBlY01vZGVsKSB7XG4gICAgICAgIHZhciBkaW1lbnNpb25zID0gZWNoYXJ0cy5oZWxwZXIuY3JlYXRlRGltZW5zaW9ucyhvcHRpb24uZGF0YSwge1xuICAgICAgICAgICAgY29vcmREaW1lbnNpb25zOiBbJ3ZhbHVlJ11cbiAgICAgICAgfSk7XG4gICAgICAgIHZhciBsaXN0ID0gbmV3IGVjaGFydHMuTGlzdChkaW1lbnNpb25zLCB0aGlzKTtcbiAgICAgICAgbGlzdC5pbml0RGF0YShvcHRpb24uZGF0YSk7XG4gICAgICAgIHJldHVybiBsaXN0O1xuICAgIH0sXG5cbiAgICBkZWZhdWx0T3B0aW9uOiB7XG4gICAgICAgIGNvbG9yOiBbJyMyOTREOTknLCAnIzE1NkFDRicsICcjMTU5OEVEJywgJyM0NUJERkYnXSxcbiAgICAgICAgY2VudGVyOiBbJzUwJScsICc1MCUnXSxcbiAgICAgICAgcmFkaXVzOiAnNTAlJyxcbiAgICAgICAgYW1wbGl0dWRlOiAnOCUnLFxuICAgICAgICB3YXZlTGVuZ3RoOiAnODAlJyxcbiAgICAgICAgcGhhc2U6ICdhdXRvJyxcbiAgICAgICAgcGVyaW9kOiAnYXV0bycsXG4gICAgICAgIGRpcmVjdGlvbjogJ3JpZ2h0JyxcbiAgICAgICAgc2hhcGU6ICdjaXJjbGUnLFxuXG4gICAgICAgIHdhdmVBbmltYXRpb246IHRydWUsXG4gICAgICAgIGFuaW1hdGlvbkVhc2luZzogJ2xpbmVhcicsXG4gICAgICAgIGFuaW1hdGlvbkVhc2luZ1VwZGF0ZTogJ2xpbmVhcicsXG4gICAgICAgIGFuaW1hdGlvbkR1cmF0aW9uOiAyMDAwLFxuICAgICAgICBhbmltYXRpb25EdXJhdGlvblVwZGF0ZTogMTAwMCxcblxuICAgICAgICBvdXRsaW5lOiB7XG4gICAgICAgICAgICBzaG93OiB0cnVlLFxuICAgICAgICAgICAgYm9yZGVyRGlzdGFuY2U6IDgsXG4gICAgICAgICAgICBpdGVtU3R5bGU6IHtcbiAgICAgICAgICAgICAgICBjb2xvcjogJ25vbmUnLFxuICAgICAgICAgICAgICAgIGJvcmRlckNvbG9yOiAnIzI5NEQ5OScsXG4gICAgICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDgsXG4gICAgICAgICAgICAgICAgc2hhZG93Qmx1cjogMjAsXG4gICAgICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuMjUpJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGJhY2tncm91bmRTdHlsZToge1xuICAgICAgICAgICAgY29sb3I6ICcjRTNGN0ZGJ1xuICAgICAgICB9LFxuXG4gICAgICAgIGl0ZW1TdHlsZToge1xuICAgICAgICAgICAgb3BhY2l0eTogMC45NSxcbiAgICAgICAgICAgIHNoYWRvd0JsdXI6IDUwLFxuICAgICAgICAgICAgc2hhZG93Q29sb3I6ICdyZ2JhKDAsIDAsIDAsIDAuNCknXG4gICAgICAgIH0sXG5cbiAgICAgICAgbGFiZWw6IHtcbiAgICAgICAgICAgIHNob3c6IHRydWUsXG4gICAgICAgICAgICBjb2xvcjogJyMyOTREOTknLFxuICAgICAgICAgICAgaW5zaWRlQ29sb3I6ICcjZmZmJyxcbiAgICAgICAgICAgIGZvbnRTaXplOiA1MCxcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6ICdib2xkJyxcblxuICAgICAgICAgICAgYWxpZ246ICdjZW50ZXInLFxuICAgICAgICAgICAgYmFzZWxpbmU6ICdtaWRkbGUnLFxuICAgICAgICAgICAgcG9zaXRpb246ICdpbnNpZGUnXG4gICAgICAgIH0sXG5cbiAgICAgICAgZW1waGFzaXM6IHtcbiAgICAgICAgICAgIGl0ZW1TdHlsZToge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOFxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSk7XG4iLCJpbXBvcnQgKiBhcyBlY2hhcnRzIGZyb20gJ2VjaGFydHMvbGliL2VjaGFydHMnO1xuXG5leHBvcnQgZGVmYXVsdCBlY2hhcnRzLmdyYXBoaWMuZXh0ZW5kU2hhcGUoe1xuICAgIHR5cGU6ICdlYy1saXF1aWQtZmlsbCcsXG5cbiAgICBzaGFwZToge1xuICAgICAgICB3YXZlTGVuZ3RoOiAwLFxuICAgICAgICByYWRpdXM6IDAsXG4gICAgICAgIHJhZGl1c1k6IDAsXG4gICAgICAgIGN4OiAwLFxuICAgICAgICBjeTogMCxcbiAgICAgICAgd2F0ZXJMZXZlbDogMCxcbiAgICAgICAgYW1wbGl0dWRlOiAwLFxuICAgICAgICBwaGFzZTogMCxcbiAgICAgICAgaW52ZXJzZTogZmFsc2VcbiAgICB9LFxuXG4gICAgYnVpbGRQYXRoOiBmdW5jdGlvbiAoY3R4LCBzaGFwZSkge1xuICAgICAgICBpZiAoc2hhcGUucmFkaXVzWSA9PSBudWxsKSB7XG4gICAgICAgICAgICBzaGFwZS5yYWRpdXNZID0gc2hhcGUucmFkaXVzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFdlIGRlZmluZSBhIHNpbmUgd2F2ZSBoYXZpbmcgNCB3YXZlcywgYW5kIG1ha2Ugc3VyZSBhdCBsZWFzdCA4IGN1cnZlc1xuICAgICAgICAgKiBpcyBkcmF3bi4gT3RoZXJ3aXNlLCBpdCBtYXkgY2F1c2UgYmxhbmsgYXJlYSBmb3Igc29tZSB3YXZlcyB3aGVuXG4gICAgICAgICAqIHdhdmUgbGVuZ3RoIGlzIGxhcmdlIGVub3VnaC5cbiAgICAgICAgICovXG4gICAgICAgIHZhciBjdXJ2ZXMgPSBNYXRoLm1heChcbiAgICAgICAgICAgIE1hdGguY2VpbCgyICogc2hhcGUucmFkaXVzIC8gc2hhcGUud2F2ZUxlbmd0aCAqIDQpICogMixcbiAgICAgICAgICAgIDhcbiAgICAgICAgKTtcblxuICAgICAgICAvLyBtYXAgcGhhc2UgdG8gWy1NYXRoLlBJICogMiwgMF1cbiAgICAgICAgd2hpbGUgKHNoYXBlLnBoYXNlIDwgLU1hdGguUEkgKiAyKSB7XG4gICAgICAgICAgICBzaGFwZS5waGFzZSArPSBNYXRoLlBJICogMjtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAoc2hhcGUucGhhc2UgPiAwKSB7XG4gICAgICAgICAgICBzaGFwZS5waGFzZSAtPSBNYXRoLlBJICogMjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcGhhc2UgPSBzaGFwZS5waGFzZSAvIE1hdGguUEkgLyAyICogc2hhcGUud2F2ZUxlbmd0aDtcblxuICAgICAgICB2YXIgbGVmdCA9IHNoYXBlLmN4IC0gc2hhcGUucmFkaXVzICsgcGhhc2UgLSBzaGFwZS5yYWRpdXMgKiAyO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiB0b3AtbGVmdCBjb3JuZXIgYXMgc3RhcnQgcG9pbnRcbiAgICAgICAgICpcbiAgICAgICAgICogZHJhd3MgdGhpcyBwb2ludFxuICAgICAgICAgKiAgfFxuICAgICAgICAgKiBcXHwvXG4gICAgICAgICAqICB+fn5+fn5+flxuICAgICAgICAgKiAgfCAgICAgIHxcbiAgICAgICAgICogICstLS0tLS0rXG4gICAgICAgICAqL1xuICAgICAgICBjdHgubW92ZVRvKGxlZnQsIHNoYXBlLndhdGVyTGV2ZWwpO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiB0b3Agd2F2ZVxuICAgICAgICAgKlxuICAgICAgICAgKiB+fn5+fn5+fiA8LSBkcmF3cyB0aGlzIHNpbmUgd2F2ZVxuICAgICAgICAgKiB8ICAgICAgfFxuICAgICAgICAgKiArLS0tLS0tK1xuICAgICAgICAgKi9cbiAgICAgICAgdmFyIHdhdmVSaWdodCA9IDA7XG4gICAgICAgIGZvciAodmFyIGMgPSAwOyBjIDwgY3VydmVzOyArK2MpIHtcbiAgICAgICAgICAgIHZhciBzdGFnZSA9IGMgJSA0O1xuICAgICAgICAgICAgdmFyIHBvcyA9IGdldFdhdGVyUG9zaXRpb25zKGMgKiBzaGFwZS53YXZlTGVuZ3RoIC8gNCwgc3RhZ2UsXG4gICAgICAgICAgICAgICAgc2hhcGUud2F2ZUxlbmd0aCwgc2hhcGUuYW1wbGl0dWRlKTtcbiAgICAgICAgICAgIGN0eC5iZXppZXJDdXJ2ZVRvKHBvc1swXVswXSArIGxlZnQsIC1wb3NbMF1bMV0gKyBzaGFwZS53YXRlckxldmVsLFxuICAgICAgICAgICAgICAgIHBvc1sxXVswXSArIGxlZnQsIC1wb3NbMV1bMV0gKyBzaGFwZS53YXRlckxldmVsLFxuICAgICAgICAgICAgICAgIHBvc1syXVswXSArIGxlZnQsIC1wb3NbMl1bMV0gKyBzaGFwZS53YXRlckxldmVsKTtcblxuICAgICAgICAgICAgaWYgKGMgPT09IGN1cnZlcyAtIDEpIHtcbiAgICAgICAgICAgICAgICB3YXZlUmlnaHQgPSBwb3NbMl1bMF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2hhcGUuaW52ZXJzZSkge1xuICAgICAgICAgICAgLyoqXG4gICAgICAgICAgICAgKiB0b3AtcmlnaHQgY29ybmVyXG4gICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgIDIuIGRyYXdzIHRoaXMgbGluZVxuICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICArLS0tLS0tK1xuICAgICAgICAgICAgICogMy4gZHJhd3MgdGhpcyBsaW5lIC0+IHwgICAgICB8IDwtIDEuIGRyYXdzIHRoaXMgbGluZVxuICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgIH5+fn5+fn5+XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGN0eC5saW5lVG8od2F2ZVJpZ2h0ICsgbGVmdCwgc2hhcGUuY3kgLSBzaGFwZS5yYWRpdXNZKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8obGVmdCwgc2hhcGUuY3kgLSBzaGFwZS5yYWRpdXNZKTtcbiAgICAgICAgICAgIGN0eC5saW5lVG8obGVmdCwgc2hhcGUud2F0ZXJMZXZlbCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIHRvcC1yaWdodCBjb3JuZXJcbiAgICAgICAgICAgICAqXG4gICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgfn5+fn5+fn5cbiAgICAgICAgICAgICAqIDMuIGRyYXdzIHRoaXMgbGluZSAtPiB8ICAgICAgfCA8LSAxLiBkcmF3cyB0aGlzIGxpbmVcbiAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICArLS0tLS0tK1xuICAgICAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgIF5cbiAgICAgICAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gICAgICAgICAgICAgKiAgICAgICAgICAgICAgICAgIDIuIGRyYXdzIHRoaXMgbGluZVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBjdHgubGluZVRvKHdhdmVSaWdodCArIGxlZnQsIHNoYXBlLmN5ICsgc2hhcGUucmFkaXVzWSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKGxlZnQsIHNoYXBlLmN5ICsgc2hhcGUucmFkaXVzWSk7XG4gICAgICAgICAgICBjdHgubGluZVRvKGxlZnQsIHNoYXBlLndhdGVyTGV2ZWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3R4LmNsb3NlUGF0aCgpO1xuICAgIH1cbn0pO1xuXG5cblxuLyoqXG4gKiBVc2luZyBCZXppZXIgY3VydmVzIHRvIGZpdCBzaW5lIHdhdmUuXG4gKiBUaGVyZSBpcyA0IGNvbnRyb2wgcG9pbnRzIGZvciBlYWNoIGN1cnZlIG9mIHdhdmUsXG4gKiB3aGljaCBpcyBhdCAxLzQgd2F2ZSBsZW5ndGggb2YgdGhlIHNpbmUgd2F2ZS5cbiAqXG4gKiBUaGUgY29udHJvbCBwb2ludHMgZm9yIGEgd2F2ZSBmcm9tIChhKSB0byAoZCkgYXJlIGEtYi1jLWQ6XG4gKiAgICAgICAgICBjICotLS0tKiBkXG4gKiAgICAgYiAqXG4gKiAgICAgICB8XG4gKiAuLi4gYSAqIC4uLi4uLi4uLi4uLi4uLi4uLlxuICpcbiAqIHdob3NlIHBvc2l0aW9ucyBhcmUgYTogKDAsIDApLCBiOiAoMC41LCAwLjUpLCBjOiAoMSwgMSksIGQ6IChQSSAvIDIsIDEpXG4gKlxuICogQHBhcmFtIHtudW1iZXJ9IHggICAgICAgICAgeCBwb3NpdGlvbiBvZiB0aGUgbGVmdC1tb3N0IHBvaW50IChhKVxuICogQHBhcmFtIHtudW1iZXJ9IHN0YWdlICAgICAgMC0zLCBzdGF0aW5nIHdoaWNoIHBhcnQgb2YgdGhlIHdhdmUgaXQgaXNcbiAqIEBwYXJhbSB7bnVtYmVyfSB3YXZlTGVuZ3RoIHdhdmUgbGVuZ3RoIG9mIHRoZSBzaW5lIHdhdmVcbiAqIEBwYXJhbSB7bnVtYmVyfSBhbXBsaXR1ZGUgIHdhdmUgYW1wbGl0dWRlXG4gKi9cbmZ1bmN0aW9uIGdldFdhdGVyUG9zaXRpb25zKHgsIHN0YWdlLCB3YXZlTGVuZ3RoLCBhbXBsaXR1ZGUpIHtcbiAgICBpZiAoc3RhZ2UgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIFt4ICsgMSAvIDIgKiB3YXZlTGVuZ3RoIC8gTWF0aC5QSSAvIDIsIGFtcGxpdHVkZSAvIDJdLFxuICAgICAgICAgICAgW3ggKyAxIC8gMiAqIHdhdmVMZW5ndGggLyBNYXRoLlBJLCAgICAgYW1wbGl0dWRlXSxcbiAgICAgICAgICAgIFt4ICsgd2F2ZUxlbmd0aCAvIDQsICAgICAgICAgICAgICAgICAgIGFtcGxpdHVkZV1cbiAgICAgICAgXTtcbiAgICB9XG4gICAgZWxzZSBpZiAoc3RhZ2UgPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIFt4ICsgMSAvIDIgKiB3YXZlTGVuZ3RoIC8gTWF0aC5QSSAvIDIgKiAoTWF0aC5QSSAtIDIpLFxuICAgICAgICAgICAgYW1wbGl0dWRlXSxcbiAgICAgICAgICAgIFt4ICsgMSAvIDIgKiB3YXZlTGVuZ3RoIC8gTWF0aC5QSSAvIDIgKiAoTWF0aC5QSSAtIDEpLFxuICAgICAgICAgICAgYW1wbGl0dWRlIC8gMl0sXG4gICAgICAgICAgICBbeCArIHdhdmVMZW5ndGggLyA0LCAgICAgICAgICAgICAgICAgICAwXVxuICAgICAgICBdXG4gICAgfVxuICAgIGVsc2UgaWYgKHN0YWdlID09PSAyKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBbeCArIDEgLyAyICogd2F2ZUxlbmd0aCAvIE1hdGguUEkgLyAyLCAtYW1wbGl0dWRlIC8gMl0sXG4gICAgICAgICAgICBbeCArIDEgLyAyICogd2F2ZUxlbmd0aCAvIE1hdGguUEksICAgICAtYW1wbGl0dWRlXSxcbiAgICAgICAgICAgIFt4ICsgd2F2ZUxlbmd0aCAvIDQsICAgICAgICAgICAgICAgICAgIC1hbXBsaXR1ZGVdXG4gICAgICAgIF1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBbeCArIDEgLyAyICogd2F2ZUxlbmd0aCAvIE1hdGguUEkgLyAyICogKE1hdGguUEkgLSAyKSxcbiAgICAgICAgICAgIC1hbXBsaXR1ZGVdLFxuICAgICAgICAgICAgW3ggKyAxIC8gMiAqIHdhdmVMZW5ndGggLyBNYXRoLlBJIC8gMiAqIChNYXRoLlBJIC0gMSksXG4gICAgICAgICAgICAtYW1wbGl0dWRlIC8gMl0sXG4gICAgICAgICAgICBbeCArIHdhdmVMZW5ndGggLyA0LCAgICAgICAgICAgICAgICAgICAwXVxuICAgICAgICBdXG4gICAgfVxufVxuIiwiaW1wb3J0ICogYXMgZWNoYXJ0cyBmcm9tICdlY2hhcnRzL2xpYi9lY2hhcnRzJztcbmltcG9ydCAqIGFzIG51bWJlclV0aWwgZnJvbSAnZWNoYXJ0cy9saWIvdXRpbC9udW1iZXInO1xuaW1wb3J0IExpcXVpZFNoYXBlIGZyb20gJy4vbGlxdWlkRmlsbFNoYXBlJztcblxudmFyIHBhcnNlUGVyY2VudCA9IG51bWJlclV0aWwucGFyc2VQZXJjZW50O1xuXG5mdW5jdGlvbiBpc1BhdGhTeW1ib2woc3ltYm9sKSB7XG4gICAgcmV0dXJuIHN5bWJvbCAmJiBzeW1ib2wuaW5kZXhPZigncGF0aDovLycpID09PSAwXG59XG5cbmVjaGFydHMuZXh0ZW5kQ2hhcnRWaWV3KHtcblxuICAgIHR5cGU6ICdsaXF1aWRGaWxsJyxcblxuICAgIHJlbmRlcjogZnVuY3Rpb24gKHNlcmllc01vZGVsLCBlY01vZGVsLCBhcGkpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB2YXIgZ3JvdXAgPSB0aGlzLmdyb3VwO1xuICAgICAgICBncm91cC5yZW1vdmVBbGwoKTtcblxuICAgICAgICB2YXIgZGF0YSA9IHNlcmllc01vZGVsLmdldERhdGEoKTtcblxuICAgICAgICB2YXIgaXRlbU1vZGVsID0gZGF0YS5nZXRJdGVtTW9kZWwoMCk7XG5cbiAgICAgICAgdmFyIGNlbnRlciA9IGl0ZW1Nb2RlbC5nZXQoJ2NlbnRlcicpO1xuICAgICAgICB2YXIgcmFkaXVzID0gaXRlbU1vZGVsLmdldCgncmFkaXVzJyk7XG5cbiAgICAgICAgdmFyIHdpZHRoID0gYXBpLmdldFdpZHRoKCk7XG4gICAgICAgIHZhciBoZWlnaHQgPSBhcGkuZ2V0SGVpZ2h0KCk7XG4gICAgICAgIHZhciBzaXplID0gTWF0aC5taW4od2lkdGgsIGhlaWdodCk7XG4gICAgICAgIC8vIGl0ZW1TdHlsZVxuICAgICAgICB2YXIgb3V0bGluZURpc3RhbmNlID0gMDtcbiAgICAgICAgdmFyIG91dGxpbmVCb3JkZXJXaWR0aCA9IDA7XG4gICAgICAgIHZhciBzaG93T3V0bGluZSA9IHNlcmllc01vZGVsLmdldCgnb3V0bGluZS5zaG93Jyk7XG5cbiAgICAgICAgaWYgKHNob3dPdXRsaW5lKSB7XG4gICAgICAgICAgICBvdXRsaW5lRGlzdGFuY2UgPSBzZXJpZXNNb2RlbC5nZXQoJ291dGxpbmUuYm9yZGVyRGlzdGFuY2UnKTtcbiAgICAgICAgICAgIG91dGxpbmVCb3JkZXJXaWR0aCA9IHBhcnNlUGVyY2VudChcbiAgICAgICAgICAgICAgICBzZXJpZXNNb2RlbC5nZXQoJ291dGxpbmUuaXRlbVN0eWxlLmJvcmRlcldpZHRoJyksIHNpemVcbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY3ggPSBwYXJzZVBlcmNlbnQoY2VudGVyWzBdLCB3aWR0aCk7XG4gICAgICAgIHZhciBjeSA9IHBhcnNlUGVyY2VudChjZW50ZXJbMV0sIGhlaWdodCk7XG5cbiAgICAgICAgdmFyIG91dHRlclJhZGl1cztcbiAgICAgICAgdmFyIGlubmVyUmFkaXVzO1xuICAgICAgICB2YXIgcGFkZGluZ1JhZGl1cztcblxuICAgICAgICB2YXIgaXNGaWxsQ29udGFpbmVyID0gZmFsc2U7XG5cbiAgICAgICAgdmFyIHN5bWJvbCA9IHNlcmllc01vZGVsLmdldCgnc2hhcGUnKTtcbiAgICAgICAgaWYgKHN5bWJvbCA9PT0gJ2NvbnRhaW5lcicpIHtcbiAgICAgICAgICAgIC8vIGEgc2hhcGUgdGhhdCBmdWxseSBmaWxscyB0aGUgY29udGFpbmVyXG4gICAgICAgICAgICBpc0ZpbGxDb250YWluZXIgPSB0cnVlO1xuXG4gICAgICAgICAgICBvdXR0ZXJSYWRpdXMgPSBbXG4gICAgICAgICAgICAgICAgd2lkdGggLyAyLFxuICAgICAgICAgICAgICAgIGhlaWdodCAvIDJcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBpbm5lclJhZGl1cyA9IFtcbiAgICAgICAgICAgICAgICBvdXR0ZXJSYWRpdXNbMF0gLSBvdXRsaW5lQm9yZGVyV2lkdGggLyAyLFxuICAgICAgICAgICAgICAgIG91dHRlclJhZGl1c1sxXSAtIG91dGxpbmVCb3JkZXJXaWR0aCAvIDJcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBwYWRkaW5nUmFkaXVzID0gW1xuICAgICAgICAgICAgICAgIHBhcnNlUGVyY2VudChvdXRsaW5lRGlzdGFuY2UsIHdpZHRoKSxcbiAgICAgICAgICAgICAgICBwYXJzZVBlcmNlbnQob3V0bGluZURpc3RhbmNlLCBoZWlnaHQpXG4gICAgICAgICAgICBdO1xuXG4gICAgICAgICAgICByYWRpdXMgPSBbXG4gICAgICAgICAgICAgICAgTWF0aC5tYXgoaW5uZXJSYWRpdXNbMF0gLSBwYWRkaW5nUmFkaXVzWzBdLCAwKSxcbiAgICAgICAgICAgICAgICBNYXRoLm1heChpbm5lclJhZGl1c1sxXSAtIHBhZGRpbmdSYWRpdXNbMV0sIDApXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb3V0dGVyUmFkaXVzID0gcGFyc2VQZXJjZW50KHJhZGl1cywgc2l6ZSkgLyAyO1xuICAgICAgICAgICAgaW5uZXJSYWRpdXMgPSBvdXR0ZXJSYWRpdXMgLSBvdXRsaW5lQm9yZGVyV2lkdGggLyAyO1xuICAgICAgICAgICAgcGFkZGluZ1JhZGl1cyA9IHBhcnNlUGVyY2VudChvdXRsaW5lRGlzdGFuY2UsIHNpemUpO1xuXG4gICAgICAgICAgICByYWRpdXMgPSBNYXRoLm1heChpbm5lclJhZGl1cyAtIHBhZGRpbmdSYWRpdXMsIDApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNob3dPdXRsaW5lKSB7XG4gICAgICAgICAgICB2YXIgb3V0bGluZSA9IGdldE91dGxpbmUoKTtcbiAgICAgICAgICAgIG91dGxpbmUuc3R5bGUubGluZVdpZHRoID0gb3V0bGluZUJvcmRlcldpZHRoO1xuICAgICAgICAgICAgZ3JvdXAuYWRkKGdldE91dGxpbmUoKSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbGVmdCA9IGlzRmlsbENvbnRhaW5lciA/IDAgOiBjeCAtIHJhZGl1cztcbiAgICAgICAgdmFyIHRvcCA9IGlzRmlsbENvbnRhaW5lciA/IDAgOiBjeSAtIHJhZGl1cztcblxuICAgICAgICB2YXIgd2F2ZVBhdGggPSBudWxsO1xuXG4gICAgICAgIGdyb3VwLmFkZChnZXRCYWNrZ3JvdW5kKCkpO1xuXG4gICAgICAgIC8vIGVhY2ggZGF0YSBpdGVtIGZvciBhIHdhdmVcbiAgICAgICAgdmFyIG9sZERhdGEgPSB0aGlzLl9kYXRhO1xuICAgICAgICB2YXIgd2F2ZXMgPSBbXTtcbiAgICAgICAgZGF0YS5kaWZmKG9sZERhdGEpXG4gICAgICAgICAgICAuYWRkKGZ1bmN0aW9uIChpZHgpIHtcbiAgICAgICAgICAgICAgICB2YXIgd2F2ZSA9IGdldFdhdmUoaWR4LCBmYWxzZSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgd2F0ZXJMZXZlbCA9IHdhdmUuc2hhcGUud2F0ZXJMZXZlbDtcbiAgICAgICAgICAgICAgICB3YXZlLnNoYXBlLndhdGVyTGV2ZWwgPSBpc0ZpbGxDb250YWluZXIgPyBoZWlnaHQgLyAyIDogcmFkaXVzO1xuICAgICAgICAgICAgICAgIGVjaGFydHMuZ3JhcGhpYy5pbml0UHJvcHMod2F2ZSwge1xuICAgICAgICAgICAgICAgICAgICBzaGFwZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2F0ZXJMZXZlbDogd2F0ZXJMZXZlbFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSwgc2VyaWVzTW9kZWwpO1xuXG4gICAgICAgICAgICAgICAgd2F2ZS56MiA9IDI7XG4gICAgICAgICAgICAgICAgc2V0V2F2ZUFuaW1hdGlvbihpZHgsIHdhdmUsIG51bGwpO1xuXG4gICAgICAgICAgICAgICAgZ3JvdXAuYWRkKHdhdmUpO1xuICAgICAgICAgICAgICAgIGRhdGEuc2V0SXRlbUdyYXBoaWNFbChpZHgsIHdhdmUpO1xuICAgICAgICAgICAgICAgIHdhdmVzLnB1c2god2F2ZSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnVwZGF0ZShmdW5jdGlvbiAobmV3SWR4LCBvbGRJZHgpIHtcbiAgICAgICAgICAgICAgICB2YXIgd2F2ZUVsZW1lbnQgPSBvbGREYXRhLmdldEl0ZW1HcmFwaGljRWwob2xkSWR4KTtcblxuICAgICAgICAgICAgICAgIC8vIG5ldyB3YXZlIGlzIHVzZWQgdG8gY2FsY3VsYXRlIHBvc2l0aW9uLCBidXQgbm90IGFkZGVkXG4gICAgICAgICAgICAgICAgdmFyIG5ld1dhdmUgPSBnZXRXYXZlKG5ld0lkeCwgZmFsc2UsIHdhdmVFbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIC8vIGNoYW5nZXMgd2l0aCBhbmltYXRpb25cbiAgICAgICAgICAgICAgICB2YXIgc2hhcGUgPSB7fTtcbiAgICAgICAgICAgICAgICB2YXIgc2hhcGVBdHRycyA9IFsnYW1wbGl0dWRlJywgJ2N4JywgJ2N5JywgJ3BoYXNlJywgJ3JhZGl1cycsICdyYWRpdXNZJywgJ3dhdGVyTGV2ZWwnLCAnd2F2ZUxlbmd0aCddO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2hhcGVBdHRycy5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYXR0ciA9IHNoYXBlQXR0cnNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZXdXYXZlLnNoYXBlLmhhc093blByb3BlcnR5KGF0dHIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFwZVthdHRyXSA9IG5ld1dhdmUuc2hhcGVbYXR0cl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgc3R5bGUgPSB7fTtcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGVBdHRycyA9IFsnZmlsbCcsICdvcGFjaXR5JywgJ3NoYWRvd0JsdXInLCAnc2hhZG93Q29sb3InXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlQXR0cnMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF0dHIgPSBzdHlsZUF0dHJzW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAobmV3V2F2ZS5zdHlsZS5oYXNPd25Qcm9wZXJ0eShhdHRyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGVbYXR0cl0gPSBuZXdXYXZlLnN0eWxlW2F0dHJdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGlzRmlsbENvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgICAgICBzaGFwZS5yYWRpdXNZID0gaGVpZ2h0IC8gMjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBjaGFuZ2VzIHdpdGggYW5pbWF0aW9uXG4gICAgICAgICAgICAgICAgZWNoYXJ0cy5ncmFwaGljLnVwZGF0ZVByb3BzKHdhdmVFbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgICAgIHNoYXBlOiBzaGFwZSxcbiAgICAgICAgICAgICAgICAgICAgeDogbmV3V2F2ZS54LFxuICAgICAgICAgICAgICAgICAgICB5OiBuZXdXYXZlLnlcbiAgICAgICAgICAgICAgICB9LCBzZXJpZXNNb2RlbCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2VyaWVzTW9kZWwuaXNVbml2ZXJzYWxUcmFuc2l0aW9uRW5hYmxlZCAmJiBzZXJpZXNNb2RlbC5pc1VuaXZlcnNhbFRyYW5zaXRpb25FbmFibGVkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZWNoYXJ0cy5ncmFwaGljLnVwZGF0ZVByb3BzKHdhdmVFbGVtZW50LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogc3R5bGVcbiAgICAgICAgICAgICAgICAgICAgfSwgc2VyaWVzTW9kZWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgd2F2ZUVsZW1lbnQudXNlU3R5bGUoc3R5bGUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGluc3RhbnQgY2hhbmdlc1xuICAgICAgICAgICAgICAgIHZhciBvbGRXYXZlQ2xpcFBhdGggPSB3YXZlRWxlbWVudC5nZXRDbGlwUGF0aCgpO1xuICAgICAgICAgICAgICAgIHZhciBuZXdXYXZlQ2xpcFBhdGggPSBuZXdXYXZlLmdldENsaXBQYXRoKCk7XG5cbiAgICAgICAgICAgICAgICB3YXZlRWxlbWVudC5zZXRDbGlwUGF0aChuZXdXYXZlLmdldENsaXBQYXRoKCkpO1xuICAgICAgICAgICAgICAgIHdhdmVFbGVtZW50LnNoYXBlLmludmVyc2UgPSBuZXdXYXZlLmludmVyc2U7XG5cbiAgICAgICAgICAgICAgICBpZiAob2xkV2F2ZUNsaXBQYXRoICYmIG5ld1dhdmVDbGlwUGF0aFxuICAgICAgICAgICAgICAgICAgICAmJiBzZWxmLl9zaGFwZSA9PT0gc3ltYm9sXG4gICAgICAgICAgICAgICAgICAgIC8vIFRPRE8gdXNlIHpyZW5kZXIgbW9ycGhpbmcgdG8gYXBwbHkgY29tcGxleCBzeW1ib2wgYW5pbWF0aW9uLlxuICAgICAgICAgICAgICAgICAgICAmJiAhaXNQYXRoU3ltYm9sKHN5bWJvbClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2FuIGJlIGFuaW1hdGVkLlxuICAgICAgICAgICAgICAgICAgICBlY2hhcnRzLmdyYXBoaWMudXBkYXRlUHJvcHMobmV3V2F2ZUNsaXBQYXRoLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFwZTogb2xkV2F2ZUNsaXBQYXRoLnNoYXBlXG4gICAgICAgICAgICAgICAgICAgIH0sIHNlcmllc01vZGVsLCB7IGlzRnJvbTogdHJ1ZSB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBzZXRXYXZlQW5pbWF0aW9uKG5ld0lkeCwgd2F2ZUVsZW1lbnQsIHdhdmVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICBncm91cC5hZGQod2F2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGRhdGEuc2V0SXRlbUdyYXBoaWNFbChuZXdJZHgsIHdhdmVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB3YXZlcy5wdXNoKHdhdmVFbGVtZW50KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAucmVtb3ZlKGZ1bmN0aW9uIChpZHgpIHtcbiAgICAgICAgICAgICAgICB2YXIgd2F2ZSA9IG9sZERhdGEuZ2V0SXRlbUdyYXBoaWNFbChpZHgpO1xuICAgICAgICAgICAgICAgIGdyb3VwLnJlbW92ZSh3YXZlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuZXhlY3V0ZSgpO1xuXG4gICAgICAgIGlmIChpdGVtTW9kZWwuZ2V0KCdsYWJlbC5zaG93JykpIHtcbiAgICAgICAgICAgIGdyb3VwLmFkZChnZXRUZXh0KHdhdmVzKSk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9zaGFwZSA9IHN5bWJvbDtcbiAgICAgICAgdGhpcy5fZGF0YSA9IGRhdGE7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEdldCBwYXRoIGZvciBvdXRsaW5lLCBiYWNrZ3JvdW5kIGFuZCBjbGlwcGluZ1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge251bWJlcn0gciBvdXR0ZXIgcmFkaXVzIG9mIHNoYXBlXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbnx1bmRlZmluZWR9IGlzRm9yQ2xpcHBpbmcgaWYgdGhlIHNoYXBlIGlzIHVzZWRcbiAgICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgY2xpcHBpbmdcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGdldFBhdGgociwgaXNGb3JDbGlwcGluZykge1xuICAgICAgICAgICAgaWYgKHN5bWJvbCkge1xuICAgICAgICAgICAgICAgIC8vIGN1c3RvbWVkIHN5bWJvbCBwYXRoXG4gICAgICAgICAgICAgICAgaWYgKGlzUGF0aFN5bWJvbChzeW1ib2wpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXRoID0gZWNoYXJ0cy5ncmFwaGljLm1ha2VQYXRoKHN5bWJvbC5zbGljZSg3KSwge30pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgYm91ZGluZyA9IHBhdGguZ2V0Qm91bmRpbmdSZWN0KCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciB3ID0gYm91ZGluZy53aWR0aDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGggPSBib3VkaW5nLmhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHcgPiBoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoID0gciAqIDIgLyB3ICogaDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHcgPSByICogMjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHcgPSByICogMiAvIGggKiB3O1xuICAgICAgICAgICAgICAgICAgICAgICAgaCA9IHIgKiAyO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIGxlZnQgPSBpc0ZvckNsaXBwaW5nID8gMCA6IGN4IC0gdyAvIDI7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0b3AgPSBpc0ZvckNsaXBwaW5nID8gMCA6IGN5IC0gaCAvIDI7XG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSBlY2hhcnRzLmdyYXBoaWMubWFrZVBhdGgoXG4gICAgICAgICAgICAgICAgICAgICAgICBzeW1ib2wuc2xpY2UoNyksXG4gICAgICAgICAgICAgICAgICAgICAgICB7fSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBlY2hhcnRzLmdyYXBoaWMuQm91bmRpbmdSZWN0KGxlZnQsIHRvcCwgdywgaClcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzRm9yQ2xpcHBpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGgueCA9IC13IC8gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGgueSA9IC1oIC8gMjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaXNGaWxsQ29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGZ1bGx5IGZpbGwgdGhlIGNvbnRhaW5lclxuICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IGlzRm9yQ2xpcHBpbmcgPyAtclswXSA6IGN4IC0gclswXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBpc0ZvckNsaXBwaW5nID8gLXJbMV0gOiBjeSAtIHJbMV07XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlY2hhcnRzLmhlbHBlci5jcmVhdGVTeW1ib2woXG4gICAgICAgICAgICAgICAgICAgICAgICAncmVjdCcsIHgsIHksIHJbMF0gKiAyLCByWzFdICogMlxuICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBpc0ZvckNsaXBwaW5nID8gLXIgOiBjeCAtIHI7XG4gICAgICAgICAgICAgICAgICAgIHZhciB5ID0gaXNGb3JDbGlwcGluZyA/IC1yIDogY3kgLSByO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3ltYm9sID09PSAncGluJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgeSArPSByO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHN5bWJvbCA9PT0gJ2Fycm93Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgeSAtPSByO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBlY2hhcnRzLmhlbHBlci5jcmVhdGVTeW1ib2woc3ltYm9sLCB4LCB5LCByICogMiwgciAqIDIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIG5ldyBlY2hhcnRzLmdyYXBoaWMuQ2lyY2xlKHtcbiAgICAgICAgICAgICAgICBzaGFwZToge1xuICAgICAgICAgICAgICAgICAgICBjeDogaXNGb3JDbGlwcGluZyA/IDAgOiBjeCxcbiAgICAgICAgICAgICAgICAgICAgY3k6IGlzRm9yQ2xpcHBpbmcgPyAwIDogY3ksXG4gICAgICAgICAgICAgICAgICAgIHI6IHJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlIG91dGxpbmVcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGdldE91dGxpbmUoKSB7XG4gICAgICAgICAgICB2YXIgb3V0bGluZVBhdGggPSBnZXRQYXRoKG91dHRlclJhZGl1cyk7XG4gICAgICAgICAgICBvdXRsaW5lUGF0aC5zdHlsZS5maWxsID0gbnVsbDtcblxuICAgICAgICAgICAgb3V0bGluZVBhdGguc2V0U3R5bGUoc2VyaWVzTW9kZWwuZ2V0TW9kZWwoJ291dGxpbmUuaXRlbVN0eWxlJylcbiAgICAgICAgICAgICAgICAuZ2V0SXRlbVN0eWxlKCkpO1xuXG4gICAgICAgICAgICByZXR1cm4gb3V0bGluZVBhdGg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogQ3JlYXRlIGJhY2tncm91bmRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGdldEJhY2tncm91bmQoKSB7XG4gICAgICAgICAgICAvLyBTZXBlcmF0ZSBzdHJva2UgYW5kIGZpbGwsIHNvIHdlIGNhbiB1c2Ugc3Ryb2tlIHRvIGNvdmVyIHRoZSBhbGlhcyBvZiBjbGlwcGluZy5cbiAgICAgICAgICAgIHZhciBzdHJva2VQYXRoID0gZ2V0UGF0aChyYWRpdXMpO1xuICAgICAgICAgICAgc3Ryb2tlUGF0aC5zZXRTdHlsZShzZXJpZXNNb2RlbC5nZXRNb2RlbCgnYmFja2dyb3VuZFN0eWxlJylcbiAgICAgICAgICAgICAgICAuZ2V0SXRlbVN0eWxlKCkpO1xuICAgICAgICAgICAgc3Ryb2tlUGF0aC5zdHlsZS5maWxsID0gbnVsbDtcblxuICAgICAgICAgICAgLy8gU3Ryb2tlIGlzIGZyb250IG9mIHdhdmVcbiAgICAgICAgICAgIHN0cm9rZVBhdGguejIgPSA1O1xuXG4gICAgICAgICAgICB2YXIgZmlsbFBhdGggPSBnZXRQYXRoKHJhZGl1cyk7XG4gICAgICAgICAgICBmaWxsUGF0aC5zZXRTdHlsZShzZXJpZXNNb2RlbC5nZXRNb2RlbCgnYmFja2dyb3VuZFN0eWxlJylcbiAgICAgICAgICAgICAgICAuZ2V0SXRlbVN0eWxlKCkpO1xuICAgICAgICAgICAgZmlsbFBhdGguc3R5bGUuc3Ryb2tlID0gbnVsbDtcblxuICAgICAgICAgICAgdmFyIGdyb3VwID0gbmV3IGVjaGFydHMuZ3JhcGhpYy5Hcm91cCgpO1xuICAgICAgICAgICAgZ3JvdXAuYWRkKHN0cm9rZVBhdGgpO1xuICAgICAgICAgICAgZ3JvdXAuYWRkKGZpbGxQYXRoKTtcblxuICAgICAgICAgICAgcmV0dXJuIGdyb3VwO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHdhdmUgc2hhcGVcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIGdldFdhdmUoaWR4LCBpc0ludmVyc2UsIG9sZFdhdmUpIHtcbiAgICAgICAgICAgIHZhciByYWRpdXNYID0gaXNGaWxsQ29udGFpbmVyID8gcmFkaXVzWzBdIDogcmFkaXVzO1xuICAgICAgICAgICAgdmFyIHJhZGl1c1kgPSBpc0ZpbGxDb250YWluZXIgPyBoZWlnaHQgLyAyIDogcmFkaXVzO1xuXG4gICAgICAgICAgICB2YXIgaXRlbU1vZGVsID0gZGF0YS5nZXRJdGVtTW9kZWwoaWR4KTtcbiAgICAgICAgICAgIHZhciBpdGVtU3R5bGVNb2RlbCA9IGl0ZW1Nb2RlbC5nZXRNb2RlbCgnaXRlbVN0eWxlJyk7XG4gICAgICAgICAgICB2YXIgcGhhc2UgPSBpdGVtTW9kZWwuZ2V0KCdwaGFzZScpO1xuICAgICAgICAgICAgdmFyIGFtcGxpdHVkZSA9IHBhcnNlUGVyY2VudChpdGVtTW9kZWwuZ2V0KCdhbXBsaXR1ZGUnKSxcbiAgICAgICAgICAgICAgICByYWRpdXNZICogMik7XG4gICAgICAgICAgICB2YXIgd2F2ZUxlbmd0aCA9IHBhcnNlUGVyY2VudChpdGVtTW9kZWwuZ2V0KCd3YXZlTGVuZ3RoJyksXG4gICAgICAgICAgICAgICAgcmFkaXVzWCAqIDIpO1xuXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhLmdldCgndmFsdWUnLCBpZHgpO1xuICAgICAgICAgICAgdmFyIHdhdGVyTGV2ZWwgPSByYWRpdXNZIC0gdmFsdWUgKiByYWRpdXNZICogMjtcbiAgICAgICAgICAgIHBoYXNlID0gb2xkV2F2ZSA/IG9sZFdhdmUuc2hhcGUucGhhc2VcbiAgICAgICAgICAgICAgICA6IChwaGFzZSA9PT0gJ2F1dG8nID8gaWR4ICogTWF0aC5QSSAvIDQgOiBwaGFzZSk7XG4gICAgICAgICAgICB2YXIgbm9ybWFsU3R5bGUgPSBpdGVtU3R5bGVNb2RlbC5nZXRJdGVtU3R5bGUoKTtcbiAgICAgICAgICAgIGlmICghbm9ybWFsU3R5bGUuZmlsbCkge1xuICAgICAgICAgICAgICAgIHZhciBzZXJpZXNDb2xvciA9IHNlcmllc01vZGVsLmdldCgnY29sb3InKTtcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBpZHggJSBzZXJpZXNDb2xvci5sZW5ndGg7XG4gICAgICAgICAgICAgICAgbm9ybWFsU3R5bGUuZmlsbCA9IHNlcmllc0NvbG9yW2lkXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHggPSByYWRpdXNYICogMjtcbiAgICAgICAgICAgIHZhciB3YXZlID0gbmV3IExpcXVpZFNoYXBlKHtcbiAgICAgICAgICAgICAgICBzaGFwZToge1xuICAgICAgICAgICAgICAgICAgICB3YXZlTGVuZ3RoOiB3YXZlTGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICByYWRpdXM6IHJhZGl1c1gsXG4gICAgICAgICAgICAgICAgICAgIHJhZGl1c1k6IHJhZGl1c1ksXG4gICAgICAgICAgICAgICAgICAgIGN4OiB4LFxuICAgICAgICAgICAgICAgICAgICBjeTogMCxcbiAgICAgICAgICAgICAgICAgICAgd2F0ZXJMZXZlbDogd2F0ZXJMZXZlbCxcbiAgICAgICAgICAgICAgICAgICAgYW1wbGl0dWRlOiBhbXBsaXR1ZGUsXG4gICAgICAgICAgICAgICAgICAgIHBoYXNlOiBwaGFzZSxcbiAgICAgICAgICAgICAgICAgICAgaW52ZXJzZTogaXNJbnZlcnNlXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzdHlsZTogbm9ybWFsU3R5bGUsXG4gICAgICAgICAgICAgICAgeDogY3gsXG4gICAgICAgICAgICAgICAgeTogY3ksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdhdmUuc2hhcGUuX3dhdGVyTGV2ZWwgPSB3YXRlckxldmVsO1xuXG4gICAgICAgICAgICB2YXIgaG92ZXJTdHlsZSA9IGl0ZW1Nb2RlbC5nZXRNb2RlbCgnZW1waGFzaXMuaXRlbVN0eWxlJylcbiAgICAgICAgICAgICAgICAuZ2V0SXRlbVN0eWxlKCk7XG4gICAgICAgICAgICBob3ZlclN0eWxlLmxpbmVXaWR0aCA9IDA7XG5cbiAgICAgICAgICAgIHdhdmUuZW5zdXJlU3RhdGUoJ2VtcGhhc2lzJykuc3R5bGUgPSBob3ZlclN0eWxlO1xuICAgICAgICAgICAgZWNoYXJ0cy5oZWxwZXIuZW5hYmxlSG92ZXJFbXBoYXNpcyh3YXZlKTtcblxuICAgICAgICAgICAgLy8gY2xpcCBvdXQgdGhlIHBhcnQgb3V0c2lkZSB0aGUgY2lyY2xlXG4gICAgICAgICAgICB2YXIgY2xpcCA9IGdldFBhdGgocmFkaXVzLCB0cnVlKTtcbiAgICAgICAgICAgIC8vIHNldCBmaWxsIGZvciBjbGlwUGF0aCwgb3RoZXJ3aXNlIGl0IHdpbGwgbm90IHRyaWdnZXIgaG92ZXIgZXZlbnRcbiAgICAgICAgICAgIGNsaXAuc2V0U3R5bGUoe1xuICAgICAgICAgICAgICAgIGZpbGw6ICd3aGl0ZSdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgd2F2ZS5zZXRDbGlwUGF0aChjbGlwKTtcblxuICAgICAgICAgICAgcmV0dXJuIHdhdmU7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzZXRXYXZlQW5pbWF0aW9uKGlkeCwgd2F2ZSwgb2xkV2F2ZSkge1xuICAgICAgICAgICAgdmFyIGl0ZW1Nb2RlbCA9IGRhdGEuZ2V0SXRlbU1vZGVsKGlkeCk7XG5cbiAgICAgICAgICAgIHZhciBtYXhTcGVlZCA9IGl0ZW1Nb2RlbC5nZXQoJ3BlcmlvZCcpO1xuICAgICAgICAgICAgdmFyIGRpcmVjdGlvbiA9IGl0ZW1Nb2RlbC5nZXQoJ2RpcmVjdGlvbicpO1xuXG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhLmdldCgndmFsdWUnLCBpZHgpO1xuXG4gICAgICAgICAgICB2YXIgcGhhc2UgPSBpdGVtTW9kZWwuZ2V0KCdwaGFzZScpO1xuICAgICAgICAgICAgcGhhc2UgPSBvbGRXYXZlID8gb2xkV2F2ZS5zaGFwZS5waGFzZVxuICAgICAgICAgICAgICAgIDogKHBoYXNlID09PSAnYXV0bycgPyBpZHggKiBNYXRoLlBJIC8gNCA6IHBoYXNlKTtcblxuICAgICAgICAgICAgdmFyIGRlZmF1bHRTcGVlZCA9IGZ1bmN0aW9uIChtYXhTcGVlZCkge1xuICAgICAgICAgICAgICAgIHZhciBjbnQgPSBkYXRhLmNvdW50KCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNudCA9PT0gMCA/IG1heFNwZWVkIDogbWF4U3BlZWQgKlxuICAgICAgICAgICAgICAgICAgICAoMC4yICsgKGNudCAtIGlkeCkgLyBjbnQgKiAwLjgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHZhciBzcGVlZCA9IDA7XG4gICAgICAgICAgICBpZiAobWF4U3BlZWQgPT09ICdhdXRvJykge1xuICAgICAgICAgICAgICAgIHNwZWVkID0gZGVmYXVsdFNwZWVkKDUwMDApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc3BlZWQgPSB0eXBlb2YgbWF4U3BlZWQgPT09ICdmdW5jdGlvbidcbiAgICAgICAgICAgICAgICAgICAgPyBtYXhTcGVlZCh2YWx1ZSwgaWR4KSA6IG1heFNwZWVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBwaGFzZSBmb3IgbW92aW5nIGxlZnQvcmlnaHRcbiAgICAgICAgICAgIHZhciBwaGFzZU9mZnNldCA9IDA7XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAncmlnaHQnIHx8IGRpcmVjdGlvbiA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcGhhc2VPZmZzZXQgPSBNYXRoLlBJO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgICAgICAgICAgICBwaGFzZU9mZnNldCA9IC1NYXRoLlBJO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZGlyZWN0aW9uID09PSAnbm9uZScpIHtcbiAgICAgICAgICAgICAgICBwaGFzZU9mZnNldCA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbGxlZ2FsIGRpcmVjdGlvbiB2YWx1ZSBmb3IgbGlxdWlkIGZpbGwuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIHdhdmUgYW5pbWF0aW9uIG9mIG1vdmluZyBsZWZ0L3JpZ2h0XG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uICE9PSAnbm9uZScgJiYgaXRlbU1vZGVsLmdldCgnd2F2ZUFuaW1hdGlvbicpKSB7XG4gICAgICAgICAgICAgICAgd2F2ZVxuICAgICAgICAgICAgICAgICAgICAuYW5pbWF0ZSgnc2hhcGUnLCB0cnVlKVxuICAgICAgICAgICAgICAgICAgICAud2hlbigwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwaGFzZTogcGhhc2VcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgLndoZW4oc3BlZWQgLyAyLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwaGFzZTogcGhhc2VPZmZzZXQgKyBwaGFzZVxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAud2hlbihzcGVlZCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGhhc2U6IHBoYXNlT2Zmc2V0ICogMiArIHBoYXNlXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5kdXJpbmcoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHdhdmVQYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2F2ZVBhdGguZGlydHkodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5zdGFydCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHRleHQgb24gd2F2ZVxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gZ2V0VGV4dCh3YXZlcykge1xuICAgICAgICAgICAgdmFyIGxhYmVsTW9kZWwgPSBpdGVtTW9kZWwuZ2V0TW9kZWwoJ2xhYmVsJyk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGZvcm1hdExhYmVsKCkge1xuICAgICAgICAgICAgICAgIHZhciBmb3JtYXR0ZWQgPSBzZXJpZXNNb2RlbC5nZXRGb3JtYXR0ZWRMYWJlbCgwLCAnbm9ybWFsJyk7XG4gICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRWYWwgPSAoZGF0YS5nZXQoJ3ZhbHVlJywgMCkgKiAxMDApO1xuICAgICAgICAgICAgICAgIHZhciBkZWZhdWx0TGFiZWwgPSBkYXRhLmdldE5hbWUoMCkgfHwgc2VyaWVzTW9kZWwubmFtZTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzTmFOKGRlZmF1bHRWYWwpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRMYWJlbCA9IGRlZmF1bHRWYWwudG9GaXhlZCgwKSArICclJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZvcm1hdHRlZCA9PSBudWxsID8gZGVmYXVsdExhYmVsIDogZm9ybWF0dGVkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgdGV4dFJlY3RPcHRpb24gPSB7XG4gICAgICAgICAgICAgICAgejI6IDEwLFxuICAgICAgICAgICAgICAgIHNoYXBlOiB7XG4gICAgICAgICAgICAgICAgICAgIHg6IGxlZnQsXG4gICAgICAgICAgICAgICAgICAgIHk6IHRvcCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IChpc0ZpbGxDb250YWluZXIgPyByYWRpdXNbMF0gOiByYWRpdXMpICogMixcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAoaXNGaWxsQ29udGFpbmVyID8gcmFkaXVzWzFdIDogcmFkaXVzKSAqIDJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpbGw6ICd0cmFuc3BhcmVudCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRleHRDb25maWc6IHtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGxhYmVsTW9kZWwuZ2V0KCdwb3NpdGlvbicpIHx8ICdpbnNpZGUnXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzaWxlbnQ6IHRydWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICB2YXIgdGV4dE9wdGlvbiA9IHtcbiAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiBmb3JtYXRMYWJlbCgpLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IGxhYmVsTW9kZWwuZ2V0KCdhbGlnbicpLFxuICAgICAgICAgICAgICAgICAgICB0ZXh0VmVydGljYWxBbGlnbjogbGFiZWxNb2RlbC5nZXQoJ2Jhc2VsaW5lJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih0ZXh0T3B0aW9uLnN0eWxlLCBlY2hhcnRzLmhlbHBlci5jcmVhdGVUZXh0U3R5bGUobGFiZWxNb2RlbCkpO1xuXG4gICAgICAgICAgICB2YXIgb3V0c2lkZVRleHRSZWN0ID0gbmV3IGVjaGFydHMuZ3JhcGhpYy5SZWN0KHRleHRSZWN0T3B0aW9uKTtcbiAgICAgICAgICAgIHZhciBpbnNpZGVUZXh0UmVjdCA9IG5ldyBlY2hhcnRzLmdyYXBoaWMuUmVjdCh0ZXh0UmVjdE9wdGlvbik7XG4gICAgICAgICAgICBpbnNpZGVUZXh0UmVjdC5kaXNhYmxlTGFiZWxBbmltYXRpb24gPSB0cnVlO1xuICAgICAgICAgICAgb3V0c2lkZVRleHRSZWN0LmRpc2FibGVMYWJlbEFuaW1hdGlvbiA9IHRydWU7XG5cbiAgICAgICAgICAgIHZhciBvdXRzaWRlVGV4dCA9IG5ldyBlY2hhcnRzLmdyYXBoaWMuVGV4dCh0ZXh0T3B0aW9uKTtcbiAgICAgICAgICAgIHZhciBpbnNpZGVUZXh0ID0gbmV3IGVjaGFydHMuZ3JhcGhpYy5UZXh0KHRleHRPcHRpb24pO1xuICAgICAgICAgICAgb3V0c2lkZVRleHRSZWN0LnNldFRleHRDb250ZW50KG91dHNpZGVUZXh0KTtcblxuICAgICAgICAgICAgaW5zaWRlVGV4dFJlY3Quc2V0VGV4dENvbnRlbnQoaW5zaWRlVGV4dCk7XG4gICAgICAgICAgICB2YXIgaW5zQ29sb3IgPSBsYWJlbE1vZGVsLmdldCgnaW5zaWRlQ29sb3InKTtcbiAgICAgICAgICAgIGluc2lkZVRleHQuc3R5bGUuZmlsbCA9IGluc0NvbG9yO1xuXG4gICAgICAgICAgICB2YXIgZ3JvdXAgPSBuZXcgZWNoYXJ0cy5ncmFwaGljLkdyb3VwKCk7XG4gICAgICAgICAgICBncm91cC5hZGQob3V0c2lkZVRleHRSZWN0KTtcbiAgICAgICAgICAgIGdyb3VwLmFkZChpbnNpZGVUZXh0UmVjdCk7XG5cbiAgICAgICAgICAgIC8vIGNsaXAgb3V0IHdhdmVzIGZvciBpbnNpZGVUZXh0XG4gICAgICAgICAgICB2YXIgYm91bmRpbmdDaXJjbGUgPSBnZXRQYXRoKHJhZGl1cywgdHJ1ZSk7XG5cbiAgICAgICAgICAgIHdhdmVQYXRoID0gbmV3IGVjaGFydHMuZ3JhcGhpYy5Db21wb3VuZFBhdGgoe1xuICAgICAgICAgICAgICAgIHNoYXBlOiB7XG4gICAgICAgICAgICAgICAgICAgIHBhdGhzOiB3YXZlc1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeDogY3gsXG4gICAgICAgICAgICAgICAgeTogY3lcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB3YXZlUGF0aC5zZXRDbGlwUGF0aChib3VuZGluZ0NpcmNsZSk7XG4gICAgICAgICAgICBpbnNpZGVUZXh0UmVjdC5zZXRDbGlwUGF0aCh3YXZlUGF0aCk7XG5cbiAgICAgICAgICAgIHJldHVybiBncm91cDtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIGRpc3Bvc2Ugbm90aGluZyBoZXJlXG4gICAgfVxufSk7XG4iLCJcbi8qXG4qIExpY2Vuc2VkIHRvIHRoZSBBcGFjaGUgU29mdHdhcmUgRm91bmRhdGlvbiAoQVNGKSB1bmRlciBvbmVcbiogb3IgbW9yZSBjb250cmlidXRvciBsaWNlbnNlIGFncmVlbWVudHMuICBTZWUgdGhlIE5PVElDRSBmaWxlXG4qIGRpc3RyaWJ1dGVkIHdpdGggdGhpcyB3b3JrIGZvciBhZGRpdGlvbmFsIGluZm9ybWF0aW9uXG4qIHJlZ2FyZGluZyBjb3B5cmlnaHQgb3duZXJzaGlwLiAgVGhlIEFTRiBsaWNlbnNlcyB0aGlzIGZpbGVcbiogdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZVxuKiBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Vcbiogd2l0aCB0aGUgTGljZW5zZS4gIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuKlxuKiAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuKlxuKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsXG4qIHNvZnR3YXJlIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuXG4qIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXG4qIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuICBTZWUgdGhlIExpY2Vuc2UgZm9yIHRoZVxuKiBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zXG4qIHVuZGVyIHRoZSBMaWNlbnNlLlxuKi9cblxuXG4vKipcbiAqIEFVVE8tR0VORVJBVEVEIEZJTEUuIERPIE5PVCBNT0RJRlkuXG4gKi9cblxuLypcbiogTGljZW5zZWQgdG8gdGhlIEFwYWNoZSBTb2Z0d2FyZSBGb3VuZGF0aW9uIChBU0YpIHVuZGVyIG9uZVxuKiBvciBtb3JlIGNvbnRyaWJ1dG9yIGxpY2Vuc2UgYWdyZWVtZW50cy4gIFNlZSB0aGUgTk9USUNFIGZpbGVcbiogZGlzdHJpYnV0ZWQgd2l0aCB0aGlzIHdvcmsgZm9yIGFkZGl0aW9uYWwgaW5mb3JtYXRpb25cbiogcmVnYXJkaW5nIGNvcHlyaWdodCBvd25lcnNoaXAuICBUaGUgQVNGIGxpY2Vuc2VzIHRoaXMgZmlsZVxuKiB0byB5b3UgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlXG4qIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZVxuKiB3aXRoIHRoZSBMaWNlbnNlLiAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4qXG4qICAgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4qXG4qIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZyxcbiogc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW5cbiogXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcbiogS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlXG4qIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnNcbiogdW5kZXIgdGhlIExpY2Vuc2UuXG4qL1xuZXhwb3J0ICogZnJvbSAnLi9leHBvcnQvY29yZS5qcyc7XG5pbXBvcnQgeyB1c2UgfSBmcm9tICcuL2V4dGVuc2lvbi5qcyc7XG5pbXBvcnQgeyBpbml0IH0gZnJvbSAnLi9jb3JlL2VjaGFydHMuanMnO1xuaW1wb3J0IHsgaW5zdGFsbCBhcyBDYW52YXNSZW5kZXJlciB9IGZyb20gJy4vcmVuZGVyZXIvaW5zdGFsbENhbnZhc1JlbmRlcmVyLmpzJztcbmltcG9ydCB7IGluc3RhbGwgYXMgRGF0YXNldENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50L2RhdGFzZXQvaW5zdGFsbC5qcyc7XG4vLyBEZWZhdWx0IHRvIGhhdmUgY2FudmFzIHJlbmRlcmVyIGFuZCBkYXRhc2V0IGZvciBjb21waXRhdGJsZSByZWFzb24uXG51c2UoW0NhbnZhc1JlbmRlcmVyLCBEYXRhc2V0Q29tcG9uZW50XSk7XG4vLyBUT0RPOiBDb21wYXRpdGFibGUgd2l0aCB0aGUgZm9sbG93aW5nIGNvZGVcbi8vIGltcG9ydCBlY2hhcnRzIGZyb20gJ2VjaGFydHMvbGliL2VjaGFydHMuanMnXG5leHBvcnQgZGVmYXVsdCB7XG4gIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovXG4gICAgICBjb25zb2xlLmVycm9yKFwiXFxcImltcG9ydCBlY2hhcnRzIGZyb20gJ2VjaGFydHMvbGliL2VjaGFydHMuanMnXFxcIiBpcyBub3Qgc3VwcG9ydGVkIGFueW1vcmUuIFVzZSBcXFwiaW1wb3J0ICogYXMgZWNoYXJ0cyBmcm9tICdlY2hhcnRzL2xpYi9lY2hhcnRzLmpzJ1xcXCIgaW5zdGVhZDtcIik7XG4gICAgfVxuICAgIC8vIEB0cy1pZ25vcmVcbiAgICByZXR1cm4gaW5pdC5hcHBseShudWxsLCBhcmd1bWVudHMpO1xuICB9XG59O1xuLy8gSW1wb3J0IGxhYmVsIGxheW91dCBieSBkZWZhdWx0LlxuLy8gVE9ETyByZW1vdmVcbmltcG9ydCB7IGluc3RhbGxMYWJlbExheW91dCB9IGZyb20gJy4vbGFiZWwvaW5zdGFsbExhYmVsTGF5b3V0LmpzJztcbnVzZShpbnN0YWxsTGFiZWxMYXlvdXQpOyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9iYXNpbldhdGVyU3RhbmRhcmQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2MwYmYxNjAmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJjMjlhMjZhZVwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Jhc2luV2F0ZXJTdGFuZGFyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zYzBiZjE2MCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Jhc2luV2F0ZXJTdGFuZGFyZC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zYzBiZjE2MCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb21wZXRpdGlvbkdvdmVybi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zMmVjMTk5ZCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjJhOWQ3N2QwXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29tcGV0aXRpb25Hb3Zlcm4udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MzJlYzE5OWQmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb21wZXRpdGlvbkdvdmVybi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zMmVjMTk5ZCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sYWtlQ2hhcnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI4NTMwODRhNFwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xha2VDaGFydC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xha2VDaGFydC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sYWtlQ2hhcnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9MzMwYmE0YjYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJmYzgzM2YwZVwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xha2VDaGFydC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD0zMzBiYTRiNiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xha2VDaGFydC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD0zMzBiYTRiNiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9mdW5jdGlvblpvbmUudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NzgyMTgxMDkmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCIwYjFhMjE4MFwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Z1bmN0aW9uWm9uZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03ODIxODEwOSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Z1bmN0aW9uWm9uZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03ODIxODEwOSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wdXJQbGFudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YWEwM2E0MyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjQ2NmMxMDYwXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcHVyUGxhbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2FhMDNhNDMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wdXJQbGFudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YWEwM2E0MyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZXNlcnZvaXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJiODgxNmFkMlwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Jlc2Vydm9pci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Jlc2Vydm9pci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZXNlcnZvaXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9MDFlMTA0NGMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCI0MWIxMjZhZVwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Jlc2Vydm9pci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD0wMWUxMDQ0YyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Jlc2Vydm9pci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD0wMWUxMDQ0YyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yaXZlckRpcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjFiZDliNGEyXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcml2ZXJEaXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yaXZlckRpcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yaXZlckRpcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD0xYWFiZjA3MiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjJjZDBkNmE3XCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcml2ZXJEaXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9MWFhYmYwNzImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yaXZlckRpcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD0xYWFiZjA3MiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi95ZWFyUmFuay52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YzZjYjc2ZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjQ0MWYzM2NkXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4veWVhclJhbmsudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9NWM2Y2I3NmUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi95ZWFyUmFuay52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YzZjYjc2ZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNnQUFBQW9DQVlBQUFDTS9yaHRBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFaU1NVUkJWRmlGdGRoN2FCMVpIY0R4NzVrNzkvM096VzFNMGtkc3U5SUUxdDJpOXVIcU5zVzFQaERaaGYxRC8xcFpGQkZFZGhjRkViUVJCV0VwZGFGc3NRYVdYVVFFVVpCU3U3dUNOQlhjYklYYXVwUWF0OTIwbGFacHNrbm1QbWR5WDNQOFkrN2N6TDI1NzhRZmhKazU1OHljei8yZE0zTW1JK2d6cHJQYUpJQVVuSFFVVDFhM013QlNjaG5nMitINFZMLzlpRjVQT0pmVnBvVGdtQVBUYmN4SXllVmVzVjBEcTdDVG5WdDJEaW41YWJmUWpzRHByRFlwQlplMnJHb1MzVUNWZHBYbnN0clUvd3NISUFRbnoyVzFxYlp0V2xWczU1QjJpbmFaYkFwc2g0c3IxaW1hS2JjRkZ4U0NwQ0lvUzNuNXk0SFlaRWRnTTF4Y0VleDFpUnJPanZtS1JEUGxsckE3RkFzSWtEWTNJK3Q2dkpCUHYyNEkrWnl6dzdnaStJUzc3VlJsdmlLWkw1czl3ZXpNQlJ0U3BKbm1pMThKeEY5cENwd3ZaV295dTlPbnZLNnVPcnhhTXJ2TzVKaEwyUVN6SXkvaGhEOWFxNjN0eks2blpvWmN5ckd1ZW1nVG1pblJKQzB6Nmh6U1Z1RWM2bHBMWi9hMkk1ekRiZytudGQvZCthWTBqMy9XSDU5UndjcmVkdUlBOXJvRW1pbUlpczN6ckp0NGFQSU5ZRWJBOW1mUGppVlQwdThOYmlCVFQvbGljWEdubEoyVXlLYXJ4WVA4TEFDcDR2c1V6Ylc2T284eVFNenpNVWFDUjF0M0lpRzFoVWVRWnBvdmlqZlgvblpkS2QxL0xGVzhoVm14S25MbCt3QVVTam9BWG5lZ3V2WFh0bllaZ0NvSG1JZy8xN1NUbklSc24waEQ4b2I0L2NMMDNlWE16SjUrTGhBSkpJZ0VFaDJoL1NBenhpeEZXVEhFYTNkK2JPanI4NzUrZ00yZ1pzVWEva2JvWXFVN1lNYVlwVkMrQWtDNWdsVGRRbEczZ2dQSTZLdGs5RlVpZ1FSZXR4L0ZCVGUxTitxUUhnSEZOc2FNTVV1K2NBVzFmbDBRYXRxNHZXV2dFMnFIMXgzZ3ZZZC94S2g4R2dXUTFUK0FrZEFISkVNcFBzeXRFZmF1NGxiMTJubDZ3YUJRTXFyWDhLTWFSUVdqVUwvVytyMG1mazl2YTZ0UnRLNFJNM2V4THI3RzFkVWg0b0g2QjZCWnVjMnUwS3RVeXZBd1paV2x5cTJ2V1NqcHFGb3VWRFlLeGJvc2Fya3F0SXIwVmJkK3I3VzFmOUI2RldVVUZmYUhobEhWcjNKVjMwTThJSWdISE5mVEpVUHVkMGhHL3REVGp4YWUzU2sxVTZpSU5kMGtYNWJrU3BLUEp6YXNoZ1BnaER0amYyaVlFM3NPY2owOXdaK1g0d3pINnJPbTZSSnZaWW54NUx1czlEWW9JSTJVK2lCZmx1bjFqVFBuTXhWeUpXdTJoTnlDb0NvSXVrWHR1QTQyZkpBYksvdjR3VDhIaUlVOURNYzJwb3BSa2l5bXJPdis1RUNaaTZrSCtEMjkrWVE2ZWs4ZEhSaThrSDZ3OUxSZGFPUHMvVnhKRWlvTGR2aVZPdGorMEREZmZ6ZktCOFV3WHArYm1HUEIxWFNKbHJkd3o0Nm04Q2gzMExJcS9rU3hOeUZRRzA5bmRvQWF5QzUzd29BNlhEeW80SysyYytJSzZ5V2VIZFU0ZStzYVJsRmhMYXN5RUc1elZ6U0VPL0hOS2ZYTUV5OC84Nk8vZjZmVWVLUFlFQ2ZLaHIydktiaUNRYncrTjBEdGJuWGlBSTRsclVsN083ZG8xZWVzTHJwQkNuZnk3cmZDMWRldFR5YjNYWHZVLzlGUE5lS2NjVFBqNDdXYlhtNW1mVVFTZ2JvNlRiZW1oUk9YU2V1OGNDaFZ3OVhhZG9rVTZ1ZzljTHl3U3UyZHBzOTVPMk5hdmtJNDZpY1NEVFJyVmhlWnRNNUVlSjFUUjlLY3ZYVnhFeEtzUjloSW9zaEtYdkR2WldzNkRRWWx5YUJrTUNqNTd2aHZCVGptNEMvbkN0bUYxSTd3aDBVVkxXK2k1U3MyblhEVXcranV6akFibDAwYm5QcDhCcUFwRHF4SDF6L3V1bG5JYmVSbEpTK1lBNDQrc3Z0ZmRsa04rTkxSNDVIUFROK1FVQUxBNjNQajhhcGRaYXdSZDNpbmFJdXp3NGx6eHM4Zi85bmptNEFBaisyVmN5dmx3UU5kaTVyZzRrRVhwNDVvQVB4bDhWckw5czdIbVRNTzdZbS8vVmZIY2QwaS9Pcm5IaDBmamMzZDZ4Y0g4UHg0b1ZiZW1FRWJsU3RKbG8zTnk4cStvY1M5WHh4NjVZdk9zazF2TXFjUEh4OTc2Y3FsdXd1cEF4MWZZcDB3Z01NN0JVK1A2WnR3UzdySlVoTlFJKzdYVDU0ZWF5eHYrc25nOU9Ialk1MHkyWWpiR1JHY09wS3VIZHZEdXhWY1MyQXJaQ2F0azBuckxQeDN0UTRYRDdyNDNZa04zTzNjWWkyRFc4RzFCZHJJOGFHMzNuYWluREN3aHZYOGw3UzZNbWYyMnNYRXlOQ2YydUdnaDAvQVgzL3pSblo1eFIwcXJKZnFjTTVoQlN0N1oyOWQ1TDNWMWl2RnJxZy8vZnFKWDhXNjZiZm4vL20vZCtuS21xbjdvczgvVWxBT0p1c1JOcTdWdkJ1SmVKWis4NFhwai9UU1h4OGZKYXk0a1o1NzRmckMrUjgrR1orSVNzcWVpaW5GbWY5Y0VBQWxYSlg3dVpJaUpITG5ZUEk4d0prblhuNm1uMzcrQjFReEhDWUxQbHFpQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQTRBQUFBT0NBWUFBQUFmU0MzUkFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUNuU1VSQlZDaVJoVkp0Q3NNZ0RIMEo4MTRXZXFzVlpzSGRTbGp1MVlIN01XM1RrdGozVDN4ZmlSSXVtSmN0b3RLckhTT29yZ0JRY2tpYVI0WWdYczBPZGwyN0FUVlJVaWxqVUoxS0RzSUFZSWpFRlRZdW1XbHRMcmNGMVlsSHJydUJjYyt1NjQyWU1ackhSN1NyNmlTckVkV1Z6U3AzeTBGL3grZjNnL1BEQ3dZZm9id2Z4S2VFQTY2b2N4a0FTZzdpcmw2MytQK2F0RmZWbUpjdEFlanpTVThwT1lqbS9RRDRVVXRlYUxUdzZ3QUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDQUFBQUFnQ0FZQUFBQnplbnIwQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBTDNTVVJCVkZpRnpaZFBUTk5RSE1lL3IrM2FEY1lFVkJJTy9pRlJJeHBqcG9RUURRY09vZ2V1SW5nbm1xZ0hQQ2t4c1FTTUYwMUVZMHc4ZWNOdzhLRHhvSUZsQ1lJUkllb0Z5S0lpaEVENE43WUJYZmVuNytjQldEYTI0ZFpOOUh0cTJ2ZDduMC9mYTE5ZmdYOGNsbXNITkhiNU5BU3VnbU1KQWp3dytCQTcxdE9iYWIxa0Zxd09VNEZheGJSMUN6U0FBU0FBZ2dBYWIxb0MwUXVFSTQvWXlWZlQyL1dUOFFoY2ZUdlZhcFhFaTFhTGRGeXhTQTVKRkRDMTZMLzIvSERiSnpBK25LWXNBbUszV1dYM3czVDkvbkVFV3QvTjNMY3BsdXMyV2JKbktoc1hDeGc5b0xIbUtsYlozWnlWUU9mQThnRmZNRFN5cTBEWmJRS2NHRVpOTk5aVWlxTXZMekFHaXI4a3BHcC81ZlhralREbm5yekFZeEtvaDZlcGUrdnBKSUhPRDBzMTVhWDJ4eFpSa1BNR0I0Q29CdTRkdmNTSHF0K2tGVkFIL2FVNko1Y29wQndZMHlGOUVkdzdDa1RXUVBwU0EzMnRyVTRwc0tZRjNZb2sydklLWDUwQ0JTYUF1S2tuWFh1V0pIQnYwSC9lVWFDY3lCdlowTUdYeDBIYVhMSlVKT0NrSG9nSkFvR1EvaVJmYkFwNU40WjhKVTBEem5oRjlaMll3TjErNzM2N0loL09DM3gxR3VUL0FaQ3hiVHRtR09kaUFyTytsZHp2bm9kQlBnOUltODJvT2ZGb0JiQ3hFTm10Y25rdWJBcjVRQ3UvQUI3Sm9panFpQW5Ja2xCaW1oNmNLQ2FEVkNqRnBzclhsMkppWldiNTdOVEhQZ0I5cHVzQjRKWnIzbDlvdFRpeUxSNzVPWXRBTUpRMVZBRHFlbHVjN28xaklNcU5MQ1l2OTJ6Q1l3SUd4L2VkRklpUEFBQWNaSG9PVGFROVNhQ2tzS2hyQndVU0lnQ0FlclpvM3JzYVhOZ0pvS3ZGcVNZSkFJQ21SenAyZ04rKzlVVENwdlRtKzVuUEpYWmJWYWE5WmZzYXVscWNTWnZnaFAxQWphKzhSZ3VuKzRUbG5LUzdUeEpvYkdTR0lyS3FjTlRROHczZk92Y3BCUUJBcmQzcnNVbXlNeGlPcnY1dGVFb0JBR2c3NHhqZkkrdGxmazMvWXBaS2dGc0E2cmFEQXhuOEdYVU0rT3JYd3FHbmhZcDhhT3UxVkE4aEFXNFJhSTlmYm5NUzJJemF2M0JrUHFCMzJhMldmYUlnSEpRbHNmRGI1Qno4d1ZBTWxBMzR2OGx2RThvcVkvVnZiZEVBQUFBQVNVVk9SSzVDWUlJPVwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9iYXNpbldhdGVyU3RhbmRhcmQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNjMGJmMTYwJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2Jhc2luV2F0ZXJTdGFuZGFyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2Jhc2luV2F0ZXJTdGFuZGFyZC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vYmFzaW5XYXRlclN0YW5kYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNjMGJmMTYwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiM2MwYmYxNjBcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnM2MwYmYxNjAnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnM2MwYmYxNjAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnM2MwYmYxNjAnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2Jhc2luV2F0ZXJTdGFuZGFyZC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2MwYmYxNjAmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignM2MwYmYxNjAnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvYmFzaW5XYXRlclN0YW5kYXJkLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYmFzaW5XYXRlclN0YW5kYXJkLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9iYXNpbldhdGVyU3RhbmRhcmQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYmFzaW5XYXRlclN0YW5kYXJkLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNjMGJmMTYwJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYmFzaW5XYXRlclN0YW5kYXJkLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYzBiZjE2MCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY29tcGV0aXRpb25Hb3Zlcm4udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTMyZWMxOTlkJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2NvbXBldGl0aW9uR292ZXJuLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vY29tcGV0aXRpb25Hb3Zlcm4udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2NvbXBldGl0aW9uR292ZXJuLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTMyZWMxOTlkJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMzJlYzE5OWRcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzJlYzE5OWQnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzJlYzE5OWQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzJlYzE5OWQnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2NvbXBldGl0aW9uR292ZXJuLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMmVjMTk5ZCZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczMmVjMTk5ZCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy9jb21wZXRpdGlvbkdvdmVybi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbXBldGl0aW9uR292ZXJuLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb21wZXRpdGlvbkdvdmVybi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb21wZXRpdGlvbkdvdmVybi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zMmVjMTk5ZCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbXBldGl0aW9uR292ZXJuLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMmVjMTk5ZCZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vbGFrZUNoYXJ0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMzBiYTRiNiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9sYWtlQ2hhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9sYWtlQ2hhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2xha2VDaGFydC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCJcbmltcG9ydCBzdHlsZTEgZnJvbSBcIi4vbGFrZUNoYXJ0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPTMzMGJhNGI2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMzMwYmE0YjZcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMzMwYmE0YjYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMzMwYmE0YjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMzMwYmE0YjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2xha2VDaGFydC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzMwYmE0YjYmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMzMwYmE0YjYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvZWNoYXJ0cy9sYWtlQ2hhcnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sYWtlQ2hhcnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2xha2VDaGFydC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9sYWtlQ2hhcnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGFrZUNoYXJ0LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPTMzMGJhNGI2Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vbGFrZUNoYXJ0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zMzBiYTRiNiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vZnVuY3Rpb25ab25lLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03ODIxODEwOSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9mdW5jdGlvblpvbmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9mdW5jdGlvblpvbmUudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2Z1bmN0aW9uWm9uZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03ODIxODEwOSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjc4MjE4MTA5XCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzc4MjE4MTA5JykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzc4MjE4MTA5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzc4MjE4MTA5JywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9mdW5jdGlvblpvbmUudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTc4MjE4MTA5JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzc4MjE4MTA5Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL2Z1bmN0aW9uWm9uZS52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Z1bmN0aW9uWm9uZS52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vZnVuY3Rpb25ab25lLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Z1bmN0aW9uWm9uZS52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03ODIxODEwOSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2Z1bmN0aW9uWm9uZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NzgyMTgxMDkmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3B1clBsYW50LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YWEwM2E0MyZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9wdXJQbGFudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3B1clBsYW50LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9wdXJQbGFudC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD03YWEwM2E0MyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjdhYTAzYTQzXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzdhYTAzYTQzJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzdhYTAzYTQzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzdhYTAzYTQzJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9wdXJQbGFudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2FhMDNhNDMmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignN2FhMDNhNDMnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy93YXRlckhvbWVQYWdlL2NvbXBvbmVudHMvcHVyUGxhbnQudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wdXJQbGFudC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcHVyUGxhbnQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcHVyUGxhbnQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9N2FhMDNhNDMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wdXJQbGFudC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9N2FhMDNhNDMmc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3Jlc2Vydm9pci52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDFlMTA0NGMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcmVzZXJ2b2lyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vcmVzZXJ2b2lyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9yZXNlcnZvaXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5pbXBvcnQgc3R5bGUxIGZyb20gXCIuL3Jlc2Vydm9pci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD0wMWUxMDQ0YyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjAxZTEwNDRjXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzAxZTEwNDRjJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzAxZTEwNDRjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzAxZTEwNDRjJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9yZXNlcnZvaXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAxZTEwNDRjJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzAxZTEwNDRjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3Mvd2F0ZXJIb21lUGFnZS9jb21wb25lbnRzL3Jlc2Vydm9pci52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Jlc2Vydm9pci52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVzZXJ2b2lyLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3Jlc2Vydm9pci52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZXNlcnZvaXIudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9MDFlMTA0NGMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZXNlcnZvaXIudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTAxZTEwNDRjJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9yaXZlckRpcy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MWFhYmYwNzImc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcml2ZXJEaXMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9yaXZlckRpcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vcml2ZXJEaXMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5pbXBvcnQgc3R5bGUxIGZyb20gXCIuL3JpdmVyRGlzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPTFhYWJmMDcyJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMWFhYmYwNzJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMWFhYmYwNzInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMWFhYmYwNzInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMWFhYmYwNzInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3JpdmVyRGlzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYWFiZjA3MiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcxYWFiZjA3MicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy9yaXZlckRpcy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JpdmVyRGlzLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yaXZlckRpcy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yaXZlckRpcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yaXZlckRpcy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD0xYWFiZjA3MiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JpdmVyRGlzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xYWFiZjA3MiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4veWVhclJhbmsudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTVjNmNiNzZlJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3llYXJSYW5rLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4veWVhclJhbmsudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3llYXJSYW5rLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTVjNmNiNzZlJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNWM2Y2I3NmVcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNWM2Y2I3NmUnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNWM2Y2I3NmUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNWM2Y2I3NmUnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL3llYXJSYW5rLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YzZjYjc2ZSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc1YzZjYjc2ZScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL3dhdGVySG9tZVBhZ2UvY29tcG9uZW50cy95ZWFyUmFuay52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3llYXJSYW5rLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi95ZWFyUmFuay52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi95ZWFyUmFuay52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD01YzZjYjc2ZSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3llYXJSYW5rLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD01YzZjYjc2ZSZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=