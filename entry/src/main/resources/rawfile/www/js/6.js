(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

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

/***/ "./src/utils/airUtils.js":
/*!*******************************!*\
  !*** ./src/utils/airUtils.js ***!
  \*******************************/
/*! exports provided: AQIJugdeBgColor, AQIJugdeTextColor, AQIJugdeFilterColor, getMark, getCalenderBgColor, factorHTML, getColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AQIJugdeBgColor", function() { return AQIJugdeBgColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AQIJugdeTextColor", function() { return AQIJugdeTextColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AQIJugdeFilterColor", function() { return AQIJugdeFilterColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMark", function() { return getMark; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCalenderBgColor", function() { return getCalenderBgColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "factorHTML", function() { return factorHTML; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColor", function() { return getColor; });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_2__);



//日历字体颜色
var textColors = ['rgba(204, 204, 204, 1)', 'rgba(0, 228, 0, 1)', 'rgba(255, 191, 0, 1)', 'rgba(255, 126, 0, 1)', 'rgba(255, 0, 0, 1)', 'rgba(153, 0, 76, 1)', 'rgba(126, 0, 75, 1)']; //日历背景颜色

var bgColors = ['rgba(204, 204, 204, 0.3)', 'rgba(0, 228, 0, 0.3)', 'rgba(255, 191, 0, 0.3)', 'rgba(255, 126, 0, 0.3)', 'rgba(255, 0, 0, 0.3)', 'rgba(153, 0, 76, 0.3)', 'rgba(126, 0, 75, 0.3)'];
/**
 * 判断AQI背景颜色
 * @param value 值
 * */

var AQIJugdeBgColor = function AQIJugdeBgColor(value) {
  if (value <= 50) {
    return 'background: ' + textColors[1];
  } else if (value <= 100 && value > 50) {
    return 'background: ' + textColors[2];
  } else if (value <= 150 && value > 100) {
    return 'background: ' + textColors[3];
  } else if (value <= 200 && value > 150) {
    return 'background: ' + textColors[4];
  } else if (value <= 300 && value > 200) {
    return 'background: ' + textColors[5];
  } else if (value > 300) {
    return 'background: ' + textColors[6];
  } else {
    return 'background: ' + textColors[0];
  }
};
/**
 * 判断AQI字体颜色
 * @param value 值
 * */

var AQIJugdeTextColor = function AQIJugdeTextColor(value) {
  if (value <= 50) {
    return 'color:' + textColors[1];
  } else if (value <= 100 && value > 50) {
    return 'color:' + textColors[2];
  } else if (value <= 150 && value > 100) {
    return 'color:' + textColors[3];
  } else if (value <= 200 && value > 150) {
    return 'color:' + textColors[4];
  } else if (value <= 300 && value > 200) {
    return 'color:' + textColors[5];
  } else if (value > 300) {
    return 'color:' + textColors[6];
  } else {
    return 'color:' + textColors[0];
  }
};
/**
 * 判断AQI背景半透明颜色
 * @param value 值
 * */

var AQIJugdeFilterColor = function AQIJugdeFilterColor(value) {
  if (value <= 50) {
    return 'background:' + bgColors[1];
  } else if (value <= 100 && value > 50) {
    return 'background:' + bgColors[2];
  } else if (value <= 150 && value > 100) {
    return 'background:' + bgColors[3];
  } else if (value <= 200 && value > 150) {
    return 'background:' + bgColors[4];
  } else if (value <= 300 && value > 200) {
    return 'background:' + bgColors[5];
  } else if (value > 300) {
    return 'background:' + bgColors[6];
  } else {
    return 'background:' + bgColors[0];
  }
};
var standard = {
  PM25: [0, 35, 75, 115, 150, 250, 350, 500],
  PM10: [0, 50, 150, 250, 350, 420, 500, 600],
  SO2: [0, 50, 150, 475, 800, 1600, 2100, 2620],
  NO2: [0, 40, 80, 180, 280, 565, 750, 940],
  CO: [0, 2, 4, 14, 24, 36, 48, 60],
  O3_1H: [0, 160, 200, 300, 400, 800, 1000, 1200],
  O3_8H: [0, 100, 160, 215, 265, 800],
  O3: [0, 100, 160, 215, 265, 800, 1000, 1200],
  AQI: [0, 50, 100, 150, 200, 300, 400, 500],
  pm25: [0, 35, 75, 115, 150, 250, 350, 500],
  pm10: [0, 50, 150, 250, 350, 420, 500, 600],
  so2: [0, 50, 150, 475, 800, 1600, 2100, 2620],
  no2: [0, 40, 80, 180, 280, 565, 750, 940],
  co: [0, 2, 4, 14, 24, 36, 48, 60],
  OZONE: [0, 100, 160, 215, 265, 800, 1000, 1200],
  ozone: [0, 100, 160, 215, 265, 800, 1000, 1200],
  aqi: [0, 50, 100, 150, 200, 300]
};
var levels = ['-', '优', '良', '轻度污染', '中度污染', '重度污染', '严重污染', '-'];
var colors = ['#AAA', '#49E07F', '#FEC400', '#f6960e', '#DC6A59', '#7A66D2', '#9F4A7C', '#6c6c6c']; // 设置标准值

var getMark = function getMark(factor) {
  // factor = factor === "O3" ? "O3_8H" :factor === "PM2.5"?'PM25': factor;
  factor = factor === "PM2.5" ? 'PM25' : factor;
  var vals = factor.indexOf("IAQI") === -1 ? standard[factor] : standard.AQI;
  var markLine = [];

  for (var i = 0; i < levels.length; i++) {
    markLine.push({
      // name: standard[i],
      yAxis: vals[i],
      label: {
        // 显示基准线名称
        show: true,
        padding: levels[i] == '优' || levels[i] == '良' ? [-13, -10, 15, -10] : [-13, -10, 15, -40],
        // 标签位置上右下左
        position: 'end',
        // 标签的位置
        formatter: levels[i],
        color: colors[i],
        fontSize: 12
      },
      lineStyle: {
        color: colors[i]
      }
    });
  }

  return markLine;
};
/***
 * （内部调用）获取因子值对应的index
 * @param factor
 * @param value
 * @return {number} index
 */

function getLevelIndex(factor, value) {
  var stands = standard[factor];

  for (var i = 0; i < stands.length; i++) {
    if (stands[i] >= value) {
      return i;
    }
  }
}

function getLevelIndex2(value) {
  var stands = levels[value];

  for (var i = 0; i < stands.length; i++) {
    if (stands[i] == value) {
      return i;
    }
  }
}
/**
 * 获取因子值对应的日历块背景色
 * @param factor 因子名称
 */


var getCalenderBgColor = function getCalenderBgColor(factor, value) {
  if (value === '') {
    var _color = 'rgba(201, 255, 201, 0.5)';
    return "background-color:".concat(_color, ";color:rgba(4, 199, 4, 0.5)");
  }

  if (factor === 'PM2.5') {
    factor = 'PM25';
  }

  var color = bgColors[getLevelIndex(factor, value)]; // let color = bgColors[getLevelIndex2(value.state)];

  var fontColor = '';

  if (color === '#ffcc00') {
    fontColor = '#000';
  } else {
    fontColor = textColors[getLevelIndex(factor, value)]; // fontColor = textColors[getLevelIndex2(value.state)];
  }

  return "background-color:".concat(color, ";color:").concat(fontColor);
};
/***
 * 转换AQI因子格式
 * @param {string} factor
 * @return {string}
 */

var factorHTML = function factorHTML(factor) {
  var str = "";
  if (!factor) return str;

  switch (factor.toUpperCase().replace('IAQI', '')) {
    case 'AQI':
      str = "AQI";
      break;

    case 'PM25':
      str = "PM2.5";
      break;

    case 'PM10':
      str = "PM10";
      break;

    case 'SO2':
      str = "SO2";
      break;

    case 'NO2':
      str = "NO2";
      break;

    case 'CO':
      str = "CO";
      break;

    case 'O3':
      str = "O3";
      break;

    case 'O31H':
      str = "O3";
      break;

    case 'O38H':
      str = "O3";
      break;

    case 'O3_1H':
      str = "O3";
      break;

    case 'O3_8H':
      str = "O3";
      break;
  }

  return str;
};
/***
 * 获取因子值对应的类别
 * @param factor
 * @param value
 * @return {string} level
 */

var getColor = function getColor(factor, value) {
  if (value === "-") return "-";
  return levels[getLevelIndex(factor, value)];
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2Fpcl9xdWFsaXR5LmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9haXJVdGlscy5qcyJdLCJuYW1lcyI6WyJiYXNlVXJsIiwicHJvY2VzcyIsInJhbmtpbmciLCJkYXRhIiwicmVxdWVzdCIsInVybCIsIm1ldGhvZCIsInBhcmFtcyIsImFpckNpdHlEYXRhIiwiYWlyQ2l0eUFzc2Vzc0NvbmRpdGlvbiIsImFpckNpdHlBc3Nlc3NUZW5kZW5jeSIsImFpclBvbGx1dGFudFJhdGlvIiwiYWlyUG9sbHV0YW50U2l0ZVJhdGlvIiwiYWlyUG9sbHV0YW50WWVhciIsImFpclBvbGx1dGFudFNpdGVZZWFyIiwiYWlyUXVhbGl0eVJhbmtpbmciLCJhaXJRdWFsaXR5U2l0ZUxpc3QiLCJhaXJSYW5raW5nIiwib3ZlcnByb29mQWxlcnRzIiwiYWlyUmFua2luYXNkYXNkYWciLCJhaXJRdWFsaXR5U2l0ZURhdGEiLCJhaXJRdWFsaXR5U2l0ZURhdGFUeXBlIiwic2l0ZUNvbXBhcmlzb24iLCJhaXJRdWFsaXR5U2l0ZURhdGFUeXBlQW5vdGhlciIsImdldEFpclNpdGUiLCJhaXJRdWFsaXR5U2l0ZUNhbGVuZGFyIiwiaWFxaUNhbGVuZGFyIiwiYWlyWWVhckNhbGVuZGFyIiwid2VhdGhlckZvcmVjYXN0IiwiZ2V0RGl2aXNpb25OYW1lIiwieWVhckFpclF1YWxpdHlSYXRpbyIsImFpclNpdGVRdWFsaXR5UmFua2luZyIsInJlZ2lvblF1YWxpdHlSYW5raW5nIiwiYWlyUmVnaW9uIiwicG9sbFNpemUiLCJ0eXBlTGlzdCIsInRyZWVMaXN0IiwicG9sbExpc3QiLCJyZWdpb25QcmVkaWN0aW9uIiwiYWlyTWwiLCJ0ZXh0Q29sb3JzIiwiYmdDb2xvcnMiLCJBUUlKdWdkZUJnQ29sb3IiLCJ2YWx1ZSIsIkFRSUp1Z2RlVGV4dENvbG9yIiwiQVFJSnVnZGVGaWx0ZXJDb2xvciIsInN0YW5kYXJkIiwiUE0yNSIsIlBNMTAiLCJTTzIiLCJOTzIiLCJDTyIsIk8zXzFIIiwiTzNfOEgiLCJPMyIsIkFRSSIsInBtMjUiLCJwbTEwIiwic28yIiwibm8yIiwiY28iLCJPWk9ORSIsIm96b25lIiwiYXFpIiwibGV2ZWxzIiwiY29sb3JzIiwiZ2V0TWFyayIsImZhY3RvciIsInZhbHMiLCJpbmRleE9mIiwibWFya0xpbmUiLCJpIiwibGVuZ3RoIiwicHVzaCIsInlBeGlzIiwibGFiZWwiLCJzaG93IiwicGFkZGluZyIsInBvc2l0aW9uIiwiZm9ybWF0dGVyIiwiY29sb3IiLCJmb250U2l6ZSIsImxpbmVTdHlsZSIsImdldExldmVsSW5kZXgiLCJzdGFuZHMiLCJnZXRMZXZlbEluZGV4MiIsImdldENhbGVuZGVyQmdDb2xvciIsImZvbnRDb2xvciIsImZhY3RvckhUTUwiLCJzdHIiLCJ0b1VwcGVyQ2FzZSIsInJlcGxhY2UiLCJnZXRDb2xvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBLElBQUlBLE9BQU8sR0FBR0MsTUFBQSxHQUF3QyxTQUF4QyxHQUFpRCxNQUEvRCxDLENBQXVFOztBQUN2RTtBQUNBO0FBQ0E7O0FBQ08sU0FBU0MsT0FBVCxDQUFpQkMsSUFBakIsRUFBdUI7QUFDN0IsU0FBT0Msd0RBQU8sQ0FBQztBQUNkQyxPQUFHLEVBQUVMLE9BQU8sR0FBRyxzQkFERDtBQUVkTSxVQUFNLEVBQUUsS0FGTTtBQUdkQyxVQUFNLEVBQUVKO0FBSE0sR0FBRCxDQUFkO0FBS0E7QUFDRDtBQUNBO0FBQ0E7O0FBQ08sU0FBU0ssV0FBVCxDQUFxQkwsSUFBckIsRUFBMkI7QUFDakMsU0FBT0Msd0RBQU8sQ0FBQztBQUNkQyxP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Q2hCLE1BQUQsRUFBU3hCLEtBQVQsQ0FBZCxDQUFiO0FBQ0QsQ0FITSxDIiwiZmlsZSI6ImpzLzYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVxdWVzdCBmcm9tIFwiLi9yZXF1ZXN0XCI7XHJcbmxldCBiYXNlVXJsID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09IFwicHJvZHVjdGlvblwiID8gXCIvYWlyXCIgOiBcIi9haXJcIjsgLy/mnI3liqHlmajmmK9haXLnsbvvvIzmnKzlnLDmsqHmnInliqBcclxuLypcclxu6aaW6aG156m65rCU6LSo6YeP5o6l5Y+jXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcmFua2luZyhkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9jb21wZXRpdGlvbi9yYW5raW5nJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t5bCP5pe244CB5pel5pWw5o2uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWlyQ2l0eURhdGEoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eS9haXJDaXR5RGF0YScsXHJcblx0XHRtZXRob2Q6ICdnZXQnLFxyXG5cdFx0cGFyYW1zOiBkYXRhXHJcblx0fSlcclxufVxyXG4vKlxyXG7nqbrmsJTotKjph48tLeiAg+aguOaDheWGtVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFpckNpdHlBc3Nlc3NDb25kaXRpb24oZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eS9haXJDaXR5QXNzZXNzQ29uZGl0aW9uJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t6LaL5Yq/57uf6K6hXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWlyQ2l0eUFzc2Vzc1RlbmRlbmN5KGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHkvYWlyQ2l0eUFzc2Vzc1RlbmRlbmN5JyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t5rGh5p+T54mp5Y2g5q+ULS3ooYzmlL/ljLrln5/nmoRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhaXJQb2xsdXRhbnRSYXRpbyhkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5L2FpclBvbGx1dGFudFJhdGlvJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t5rGh5p+T54mp5Y2g5q+ULS3nq5nngrnnmoRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhaXJQb2xsdXRhbnRTaXRlUmF0aW8oZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eVNpdGUvYWlyUG9sbHV0YW50U2l0ZVJhdGlvJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t5rGh5p+T54mp5bm05bqm57uf6K6hLS3ljLrln5/nmoRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhaXJQb2xsdXRhbnRZZWFyKGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHkvYWlyUG9sbHV0YW50WWVhcicsXHJcblx0XHRtZXRob2Q6ICdnZXQnLFxyXG5cdFx0cGFyYW1zOmRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t5rGh5p+T54mp5bm05bqm57uf6K6hLS3ljZXkuKrnq5nngrnnmoRcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhaXJQb2xsdXRhbnRTaXRlWWVhcihkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9haXJQb2xsdXRhbnRTaXRlWWVhcicsXHJcblx0XHRtZXRob2Q6ICdnZXQnLFxyXG5cdFx0cGFyYW1zOiBkYXRhXHJcblx0fSlcclxufVxyXG4vKlxyXG7nqbrmsJTotKjph48tLeaOkuWQjVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFpclF1YWxpdHlSYW5raW5nKGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHkvYWlyUXVhbGl0eVJhbmtpbmcnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3nqbrmsJTotKjph4/nq5nngrnmlbDmja4t5Zu96ICDL+ecgeiAg+WIl+ihqFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFpclF1YWxpdHlTaXRlTGlzdChkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9haXJRdWFsaXR5U2l0ZXNEYXRhJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t56m65rCU56uZ54K55o6S5ZCNXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWlyUmFua2luZyhkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9haXJSYW5raW5nJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t6L+RMjTlsI/ml7botoXmoIflkYroraZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBvdmVycHJvb2ZBbGVydHMoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eVNpdGUvb3ZlcnByb29mQWxlcnRzJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t56m65rCU56uZ54K55o6S5ZCNXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWlyUmFua2luYXNkYXNkYWcoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eVNpdGUvYWlyUmFua2luZycsXHJcblx0XHRtZXRob2Q6ICdnZXQnLFxyXG5cdFx0cGFyYW1zOiBkYXRhXHJcblx0fSlcclxufVxyXG4vKlxyXG7nqbrmsJTotKjph48tLeWNleermeeCueermeeCueaVsOaNrlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFpclF1YWxpdHlTaXRlRGF0YShkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9haXJRdWFsaXR5U2l0ZURhdGEnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3ljZXnq5nngrnnq5nngrnlsI/ml7bjgIHml6XmlbDmja4t5qih5Z2XXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWlyUXVhbGl0eVNpdGVEYXRhVHlwZShkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9haXJRdWFsaXR5U2l0ZURhdGFUeXBlJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t5Y2V56uZ54K556uZ54K55bCP5pe244CB5pel5pWw5o2uLeWvueavlOaVsOaNruaKmOe6v+WbvlxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHNpdGVDb21wYXJpc29uKGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHlTaXRlL3NpdGVDb21wYXJpc29uJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t5Y2V56uZ56uZ54K55pWw5o2uIOS6lOWIhumSnyDlkIzmr5QtLeaKmOe6v+WbvuWSjOaVsOaNruWIl+ihqFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFpclF1YWxpdHlTaXRlRGF0YVR5cGVBbm90aGVyKGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHlTaXRlL2FpclF1YWxpdHlTaXRlRGF0YVR5cGVBbm90aGVyJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t56m65rCU56uZ54K5XHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWlyU2l0ZShkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9nZXRBaXJTaXRlJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t56m65rCU56uZ54K55pel5Y6GXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWlyUXVhbGl0eVNpdGVDYWxlbmRhcihkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9haXJRdWFsaXR5U2l0ZUNhbGVuZGFyJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t56m65rCU56uZ54K55pel5Y6GaWFxaVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlhcWlDYWxlbmRhcihkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS9pYXFpQ2FsZW5kYXInLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCU6LSo6YePLS3nqbrmsJTnq5nngrnlhajlubTml6XljoZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhaXJZZWFyQ2FsZW5kYXIoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eVNpdGUvYWlyWWVhckNhbGVuZGFyJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t5aSp5rCU6aKE5oqlXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gd2VhdGhlckZvcmVjYXN0KGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHkvd2VhdGhlckZvcmVjYXN0JyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlOi0qOmHjy0t6KGM5pS/5Yy65YiSXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGl2aXNpb25OYW1lKGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHkvZ2V0RGl2aXNpb25OYW1lJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHQvLyBwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcblxyXG4vKlxyXG7nqbrmsJTotKjph48tLeWFqOW5tOepuuawlOi0qOmHj+WNoOavlFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHllYXJBaXJRdWFsaXR5UmF0aW8oZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eS95ZWFyQWlyUXVhbGl0eVJhdGlvJyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlC3nq5nngrnnqbrmsJTotKjph4/mjpLlkI1cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBhaXJTaXRlUXVhbGl0eVJhbmtpbmcoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eS9haXJTaXRlUXVhbGl0eVJhbmtpbmcnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCULeWMuuWOv+epuuawlOi0qOmHj+aOkuWQjVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lvblF1YWxpdHlSYW5raW5nKGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHkvcmVnaW9uUXVhbGl0eVJhbmtpbmcnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCULeWMuuWOv+epuuawlOaPj+i/sFxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGFpclJlZ2lvbihkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5L2FpclJlZ2lvbicsXHJcblx0XHRtZXRob2Q6ICdnZXQnLFxyXG5cdFx0cGFyYW1zOiBkYXRhXHJcblx0fSlcclxufVxyXG4vKlxyXG7nqbrmsJQt56uZ54K55raJ5rCU5rGh5p+T5rqQ5pWw5o2uXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcG9sbFNpemUoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eVNpdGUvcG9sbFNpemUnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCULeermeeCuea2ieawlOaxoeafk+a6kOS4gOe6p1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHR5cGVMaXN0KGRhdGEpIHtcclxuXHRyZXR1cm4gcmVxdWVzdCh7XHJcblx0XHR1cmw6IGJhc2VVcmwgKyAnL2FpclF1YWxpdHlTaXRlL3R5cGVMaXN0JyxcclxuXHRcdG1ldGhvZDogJ2dldCcsXHJcblx0XHRwYXJhbXM6IGRhdGFcclxuXHR9KVxyXG59XHJcbi8qXHJcbuepuuawlC3nq5nngrnmtonmsJTmsaHmn5PmupDlrZDpm4ZcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmVlTGlzdChkYXRhKSB7XHJcblx0cmV0dXJuIHJlcXVlc3Qoe1xyXG5cdFx0dXJsOiBiYXNlVXJsICsgJy9haXJRdWFsaXR5U2l0ZS90cmVlTGlzdCcsXHJcblx0XHRtZXRob2Q6ICdnZXQnLFxyXG5cdFx0cGFyYW1zOiBkYXRhXHJcblx0fSlcclxufVxyXG4vKlxyXG7nqbrmsJQt56uZ54K55raJ5rCU5rGh5p+T5rqQ5a2Q6ZuG56uZ54K55L+h5oGvXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcG9sbExpc3QoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eVNpdGUvcG9sbExpc3QnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuLypcclxu56m65rCULeepuuawlOmihOaKpVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIHJlZ2lvblByZWRpY3Rpb24oZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eVNpdGUvcmVnaW9uUHJlZGljdGlvbicsXHJcblx0XHRtZXRob2Q6ICdnZXQnLFxyXG5cdFx0cGFyYW1zOiBkYXRhXHJcblx0fSlcclxufVxyXG4vKlxyXG7nqbrmsJQt56uZ54K55ZGo6L655rCU6LGh56uZXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gYWlyTWwoZGF0YSkge1xyXG5cdHJldHVybiByZXF1ZXN0KHtcclxuXHRcdHVybDogYmFzZVVybCArICcvYWlyUXVhbGl0eVNpdGUvYWlyTWwnLFxyXG5cdFx0bWV0aG9kOiAnZ2V0JyxcclxuXHRcdHBhcmFtczogZGF0YVxyXG5cdH0pXHJcbn1cclxuIiwiLy/ml6XljoblrZfkvZPpopzoibJcbmNvbnN0IHRleHRDb2xvcnMgPSBbXG4gICdyZ2JhKDIwNCwgMjA0LCAyMDQsIDEpJyxcbiAgJ3JnYmEoMCwgMjI4LCAwLCAxKScsXG4gICdyZ2JhKDI1NSwgMTkxLCAwLCAxKScsXG4gICdyZ2JhKDI1NSwgMTI2LCAwLCAxKScsXG4gICdyZ2JhKDI1NSwgMCwgMCwgMSknLFxuICAncmdiYSgxNTMsIDAsIDc2LCAxKScsXG4gICdyZ2JhKDEyNiwgMCwgNzUsIDEpJ107XG4vL+aXpeWOhuiDjOaZr+minOiJslxuY29uc3QgYmdDb2xvcnMgPSBbXG4gICdyZ2JhKDIwNCwgMjA0LCAyMDQsIDAuMyknLFxuICAncmdiYSgwLCAyMjgsIDAsIDAuMyknLFxuICAncmdiYSgyNTUsIDE5MSwgMCwgMC4zKScsXG4gICdyZ2JhKDI1NSwgMTI2LCAwLCAwLjMpJyxcbiAgJ3JnYmEoMjU1LCAwLCAwLCAwLjMpJyxcbiAgJ3JnYmEoMTUzLCAwLCA3NiwgMC4zKScsXG4gICdyZ2JhKDEyNiwgMCwgNzUsIDAuMyknXG5dO1xuXG4vKipcbiAqIOWIpOaWrUFRSeiDjOaZr+minOiJslxuICogQHBhcmFtIHZhbHVlIOWAvFxuICogKi9cbmV4cG9ydCBjb25zdCBBUUlKdWdkZUJnQ29sb3IgPSAodmFsdWUpID0+IHtcbiAgaWYgKHZhbHVlIDw9IDUwKSB7XG4gICAgcmV0dXJuICdiYWNrZ3JvdW5kOiAnICsgdGV4dENvbG9yc1sxXTtcbiAgfSBlbHNlIGlmICh2YWx1ZSA8PSAxMDAgJiYgdmFsdWUgPiA1MCkge1xuICAgIHJldHVybiAnYmFja2dyb3VuZDogJyArIHRleHRDb2xvcnNbMl07XG4gIH0gZWxzZSBpZiAodmFsdWUgPD0gMTUwICYmIHZhbHVlID4gMTAwKSB7XG4gICAgcmV0dXJuICdiYWNrZ3JvdW5kOiAnICsgdGV4dENvbG9yc1szXTtcbiAgfSBlbHNlIGlmICh2YWx1ZSA8PSAyMDAgJiYgdmFsdWUgPiAxNTApIHtcbiAgICByZXR1cm4gJ2JhY2tncm91bmQ6ICcgKyB0ZXh0Q29sb3JzWzRdO1xuICB9IGVsc2UgaWYgKHZhbHVlIDw9IDMwMCAmJiB2YWx1ZSA+IDIwMCkge1xuICAgIHJldHVybiAnYmFja2dyb3VuZDogJyArIHRleHRDb2xvcnNbNV07XG4gIH0gZWxzZSBpZiAodmFsdWUgPiAzMDApIHtcbiAgICByZXR1cm4gJ2JhY2tncm91bmQ6ICcgKyB0ZXh0Q29sb3JzWzZdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnYmFja2dyb3VuZDogJyArIHRleHRDb2xvcnNbMF07XG4gIH1cbn1cblxuLyoqXG4gKiDliKTmlq1BUUnlrZfkvZPpopzoibJcbiAqIEBwYXJhbSB2YWx1ZSDlgLxcbiAqICovXG5leHBvcnQgY29uc3QgQVFJSnVnZGVUZXh0Q29sb3IgPSAodmFsdWUpID0+IHtcbiAgaWYgKHZhbHVlIDw9IDUwKSB7XG4gICAgcmV0dXJuICdjb2xvcjonICsgdGV4dENvbG9yc1sxXTtcbiAgfSBlbHNlIGlmICh2YWx1ZSA8PSAxMDAgJiYgdmFsdWUgPiA1MCkge1xuICAgIHJldHVybiAnY29sb3I6JyArIHRleHRDb2xvcnNbMl07XG4gIH0gZWxzZSBpZiAodmFsdWUgPD0gMTUwICYmIHZhbHVlID4gMTAwKSB7XG4gICAgcmV0dXJuICdjb2xvcjonICsgdGV4dENvbG9yc1szXTtcbiAgfSBlbHNlIGlmICh2YWx1ZSA8PSAyMDAgJiYgdmFsdWUgPiAxNTApIHtcbiAgICByZXR1cm4gJ2NvbG9yOicgKyB0ZXh0Q29sb3JzWzRdO1xuICB9IGVsc2UgaWYgKHZhbHVlIDw9IDMwMCAmJiB2YWx1ZSA+IDIwMCkge1xuICAgIHJldHVybiAnY29sb3I6JyArIHRleHRDb2xvcnNbNV07XG4gIH0gZWxzZSBpZiAodmFsdWUgPiAzMDApIHtcbiAgICByZXR1cm4gJ2NvbG9yOicgKyB0ZXh0Q29sb3JzWzZdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnY29sb3I6JyArIHRleHRDb2xvcnNbMF07XG4gIH1cbn1cblxuLyoqXG4gKiDliKTmlq1BUUnog4zmma/ljYrpgI/mmI7popzoibJcbiAqIEBwYXJhbSB2YWx1ZSDlgLxcbiAqICovXG5leHBvcnQgY29uc3QgQVFJSnVnZGVGaWx0ZXJDb2xvciA9ICh2YWx1ZSkgPT4ge1xuICBpZiAodmFsdWUgPD0gNTApIHtcbiAgICByZXR1cm4gJ2JhY2tncm91bmQ6JyArIGJnQ29sb3JzWzFdO1xuICB9IGVsc2UgaWYgKHZhbHVlIDw9IDEwMCAmJiB2YWx1ZSA+IDUwKSB7XG4gICAgcmV0dXJuICdiYWNrZ3JvdW5kOicgKyBiZ0NvbG9yc1syXTtcbiAgfSBlbHNlIGlmICh2YWx1ZSA8PSAxNTAgJiYgdmFsdWUgPiAxMDApIHtcbiAgICByZXR1cm4gJ2JhY2tncm91bmQ6JyArIGJnQ29sb3JzWzNdO1xuICB9IGVsc2UgaWYgKHZhbHVlIDw9IDIwMCAmJiB2YWx1ZSA+IDE1MCkge1xuICAgIHJldHVybiAnYmFja2dyb3VuZDonICsgYmdDb2xvcnNbNF07XG4gIH0gZWxzZSBpZiAodmFsdWUgPD0gMzAwICYmIHZhbHVlID4gMjAwKSB7XG4gICAgcmV0dXJuICdiYWNrZ3JvdW5kOicgKyBiZ0NvbG9yc1s1XTtcbiAgfSBlbHNlIGlmICh2YWx1ZSA+IDMwMCkge1xuICAgIHJldHVybiAnYmFja2dyb3VuZDonICsgYmdDb2xvcnNbNl07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICdiYWNrZ3JvdW5kOicgKyBiZ0NvbG9yc1swXTtcbiAgfVxufVxuXG5cbmNvbnN0IHN0YW5kYXJkID0ge1xuICBQTTI1OiBbMCwgMzUsIDc1LCAxMTUsIDE1MCwgMjUwLCAzNTAsIDUwMF0sXG4gIFBNMTA6IFswLCA1MCwgMTUwLCAyNTAsIDM1MCwgNDIwLCA1MDAsIDYwMF0sXG4gIFNPMjogWzAsIDUwLCAxNTAsIDQ3NSwgODAwLCAxNjAwLCAyMTAwLCAyNjIwXSxcbiAgTk8yOiBbMCwgNDAsIDgwLCAxODAsIDI4MCwgNTY1LCA3NTAsIDk0MF0sXG4gIENPOiBbMCwgMiwgNCwgMTQsIDI0LCAzNiwgNDgsIDYwXSxcbiAgTzNfMUg6IFswLCAxNjAsIDIwMCwgMzAwLCA0MDAsIDgwMCwgMTAwMCwgMTIwMF0sXG4gIE8zXzhIOiBbMCwgMTAwLCAxNjAsIDIxNSwgMjY1LCA4MDBdLFxuICBPMzogWzAsIDEwMCwgMTYwLCAyMTUsIDI2NSwgODAwLCAxMDAwLCAxMjAwXSxcblx0QVFJOiBbMCwgNTAsIDEwMCwgMTUwLCAyMDAsIDMwMCwgNDAwLCA1MDBdLFxuXHRwbTI1OiBbMCwgMzUsIDc1LCAxMTUsIDE1MCwgMjUwLCAzNTAsIDUwMF0sXG5cdHBtMTA6IFswLCA1MCwgMTUwLCAyNTAsIDM1MCwgNDIwLCA1MDAsIDYwMF0sXG5cdHNvMjogWzAsIDUwLCAxNTAsIDQ3NSwgODAwLCAxNjAwLCAyMTAwLCAyNjIwXSxcblx0bm8yOiBbMCwgNDAsIDgwLCAxODAsIDI4MCwgNTY1LCA3NTAsIDk0MF0sXG5cdGNvOiBbMCwgMiwgNCwgMTQsIDI0LCAzNiwgNDgsIDYwXSxcblx0T1pPTkU6IFswLCAxMDAsIDE2MCwgMjE1LCAyNjUsIDgwMCwgMTAwMCwgMTIwMF0sXG5cdG96b25lOiBbMCwgMTAwLCAxNjAsIDIxNSwgMjY1LCA4MDAsIDEwMDAsIDEyMDBdLFxuXHRhcWk6IFswLCA1MCwgMTAwLCAxNTAsIDIwMCwgMzAwXVxufVxuXG5jb25zdCBsZXZlbHMgPSBbJy0nLCAn5LyYJywgJ+iJrycsICfovbvluqbmsaHmn5MnLCAn5Lit5bqm5rGh5p+TJywgJ+mHjeW6puaxoeafkycsICfkuKXph43msaHmn5MnLCAnLSddO1xuY29uc3QgY29sb3JzID0gWycjQUFBJywgJyM0OUUwN0YnLCcjRkVDNDAwJywnI2Y2OTYwZScsJyNEQzZBNTknLCcjN0E2NkQyJywnIzlGNEE3QycsJyM2YzZjNmMnXTtcblxuLy8g6K6+572u5qCH5YeG5YC8XG5leHBvcnQgY29uc3QgZ2V0TWFyaz0gKGZhY3Rvcik9PiB7XG5cdC8vIGZhY3RvciA9IGZhY3RvciA9PT0gXCJPM1wiID8gXCJPM184SFwiIDpmYWN0b3IgPT09IFwiUE0yLjVcIj8nUE0yNSc6IGZhY3Rvcjtcblx0ZmFjdG9yID0gZmFjdG9yID09PSBcIlBNMi41XCI/J1BNMjUnOiBmYWN0b3I7XG5cdGxldCB2YWxzID0gZmFjdG9yLmluZGV4T2YoXCJJQVFJXCIpID09PSAtMSA/IHN0YW5kYXJkW2ZhY3Rvcl0gOiBzdGFuZGFyZC5BUUk7XG5cdGxldCBtYXJrTGluZSA9IFtdO1xuXG5cdGZvciAobGV0IGkgPSAwOyBpIDwgbGV2ZWxzLmxlbmd0aDsgaSArKyl7XG5cdFx0bWFya0xpbmUucHVzaCh7XG5cdFx0XHQvLyBuYW1lOiBzdGFuZGFyZFtpXSxcblx0XHRcdHlBeGlzOiB2YWxzW2ldLFxuXHRcdFx0bGFiZWw6IHsgLy8g5pi+56S65Z+65YeG57q/5ZCN56ewXG5cdFx0XHRcdHNob3c6IHRydWUsXG5cdFx0XHRcdHBhZGRpbmc6IGxldmVsc1tpXT09J+S8mCd8fGxldmVsc1tpXT09J+iJryc/Wy0xMywgLTEwLCAxNSwgLTEwXTpbLTEzLCAtMTAsIDE1LCAtNDBdLCAvLyDmoIfnrb7kvY3nva7kuIrlj7PkuIvlt6Zcblx0XHRcdFx0cG9zaXRpb246ICdlbmQnLCAgICAgICAgLy8g5qCH562+55qE5L2N572uXG5cdFx0XHRcdGZvcm1hdHRlcjogbGV2ZWxzW2ldLFxuXHRcdFx0XHRjb2xvcjogY29sb3JzW2ldLFxuXHRcdFx0XHRmb250U2l6ZTogMTIsXG5cdFx0XHR9LFxuXHRcdFx0bGluZVN0eWxlOiB7Y29sb3I6IGNvbG9yc1tpXX1cblx0XHR9KVxuXHR9XG5cdHJldHVybiBtYXJrTGluZTtcbn1cbi8qKipcbiAqIO+8iOWGhemDqOiwg+eUqO+8ieiOt+WPluWboOWtkOWAvOWvueW6lOeahGluZGV4XG4gKiBAcGFyYW0gZmFjdG9yXG4gKiBAcGFyYW0gdmFsdWVcbiAqIEByZXR1cm4ge251bWJlcn0gaW5kZXhcbiAqL1xuZnVuY3Rpb24gZ2V0TGV2ZWxJbmRleChmYWN0b3IsIHZhbHVlKSB7XG4gIGxldCBzdGFuZHMgPSBzdGFuZGFyZFtmYWN0b3JdO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IHN0YW5kcy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdGFuZHNbaV0gPj0gdmFsdWUpIHtcbiAgICAgIHJldHVybiBpO1xuICAgIH1cbiAgfVxufVxuZnVuY3Rpb24gZ2V0TGV2ZWxJbmRleDIodmFsdWUpIHtcbiAgbGV0IHN0YW5kcyA9IGxldmVsc1t2YWx1ZV07XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhbmRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0YW5kc1tpXSA9PSB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGk7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICog6I635Y+W5Zug5a2Q5YC85a+55bqU55qE5pel5Y6G5Z2X6IOM5pmv6ImyXG4gKiBAcGFyYW0gZmFjdG9yIOWboOWtkOWQjeensFxuICovXG5leHBvcnQgY29uc3QgZ2V0Q2FsZW5kZXJCZ0NvbG9yID0gKGZhY3RvciwgdmFsdWUpID0+IHtcbiAgaWYgKHZhbHVlID09PSAnJykge1xuICAgIGxldCBjb2xvciA9ICdyZ2JhKDIwMSwgMjU1LCAyMDEsIDAuNSknO1xuICAgIHJldHVybiBgYmFja2dyb3VuZC1jb2xvcjoke2NvbG9yfTtjb2xvcjpyZ2JhKDQsIDE5OSwgNCwgMC41KWA7XG4gIH1cbiAgaWYgKGZhY3RvciA9PT0gJ1BNMi41Jykge1xuICAgIGZhY3RvciA9ICdQTTI1JztcbiAgfVxuICBsZXQgY29sb3IgPSBiZ0NvbG9yc1tnZXRMZXZlbEluZGV4KGZhY3RvciwgdmFsdWUpXTtcbiAgLy8gbGV0IGNvbG9yID0gYmdDb2xvcnNbZ2V0TGV2ZWxJbmRleDIodmFsdWUuc3RhdGUpXTtcbiAgbGV0IGZvbnRDb2xvciA9ICcnO1xuICBpZiAoY29sb3IgPT09ICcjZmZjYzAwJykge1xuICAgIGZvbnRDb2xvciA9ICcjMDAwJztcbiAgfSBlbHNlIHtcbiAgICBmb250Q29sb3IgPSB0ZXh0Q29sb3JzW2dldExldmVsSW5kZXgoZmFjdG9yLCB2YWx1ZSldO1xuICAgIC8vIGZvbnRDb2xvciA9IHRleHRDb2xvcnNbZ2V0TGV2ZWxJbmRleDIodmFsdWUuc3RhdGUpXTtcbiAgfVxuICByZXR1cm4gYGJhY2tncm91bmQtY29sb3I6JHtjb2xvcn07Y29sb3I6JHtmb250Q29sb3J9YDtcbn1cblxuLyoqKlxuICog6L2s5o2iQVFJ5Zug5a2Q5qC85byPXG4gKiBAcGFyYW0ge3N0cmluZ30gZmFjdG9yXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBjb25zdCBmYWN0b3JIVE1MID0gKGZhY3RvcikgPT4ge1xuICBsZXQgc3RyID0gYGA7XG4gIGlmICghZmFjdG9yKSByZXR1cm4gc3RyO1xuICBzd2l0Y2ggKGZhY3Rvci50b1VwcGVyQ2FzZSgpLnJlcGxhY2UoJ0lBUUknLCAnJykpIHtcbiAgICBjYXNlICdBUUknOlxuICAgICAgc3RyID0gYEFRSWA7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdQTTI1JzpcbiAgICAgIHN0ciA9IGBQTTIuNWA7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdQTTEwJzpcbiAgICAgIHN0ciA9IGBQTTEwYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ1NPMic6XG4gICAgICBzdHIgPSBgU08yYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ05PMic6XG4gICAgICBzdHIgPSBgTk8yYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0NPJzpcbiAgICAgIHN0ciA9IGBDT2A7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdPMyc6XG4gICAgICBzdHIgPSBgTzNgO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnTzMxSCc6XG4gICAgICBzdHIgPSBgTzNgO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnTzM4SCc6XG4gICAgICBzdHIgPSBgTzNgO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnTzNfMUgnOlxuICAgICAgc3RyID0gYE8zYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ08zXzhIJzpcbiAgICAgIHN0ciA9IGBPM2A7XG4gICAgICBicmVhaztcbiAgfVxuICByZXR1cm4gc3RyO1xufVxuXG5cbi8qKipcbiAqIOiOt+WPluWboOWtkOWAvOWvueW6lOeahOexu+WIq1xuICogQHBhcmFtIGZhY3RvclxuICogQHBhcmFtIHZhbHVlXG4gKiBAcmV0dXJuIHtzdHJpbmd9IGxldmVsXG4gKi9cbmV4cG9ydCBjb25zdCBnZXRDb2xvciA9IChmYWN0b3IsIHZhbHVlKSA9PiB7XG4gIGlmICh2YWx1ZSA9PT0gXCItXCIpIHJldHVybiBcIi1cIjtcbiAgcmV0dXJuIGxldmVsc1tnZXRMZXZlbEluZGV4KGZhY3RvciwgdmFsdWUpXTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=