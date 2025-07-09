(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[50],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/components/onlineSiteInfo.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/components/onlineSiteInfo.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! dayjs */ "./node_modules/dayjs/dayjs.min.js");
/* harmony import */ var dayjs__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(dayjs__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var _api_pollution_source__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/api/pollution_source */ "./src/api/pollution_source.js");
/* harmony import */ var _utils_setdate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/utils/setdate */ "./src/utils/setdate.js");







//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "onlineSiteInfo",
  data: function data() {
    return {
      currentDate: Object(_utils_setdate__WEBPACK_IMPORTED_MODULE_10__["getThisDate"])(4),
      currentDate2: new Date(),
      yearSelect: null,
      yearColumns: [],
      dateArr: [{
        text: "实时数据",
        val: "real"
      }, {
        text: "时均值",
        val: "hour"
      }, {
        text: "日均值",
        val: "day"
      } // { text:'月值',val:'月' },{ text:'年值',val:'年'},
      ],
      wArr: [{
        text: "化学需氧量",
        val: "cod"
      }, {
        text: "氨氮",
        val: "nh3"
      }, {
        text: "总氮",
        val: "zd"
      }, {
        text: "总磷",
        val: "zl"
      }, {
        text: "PH值",
        val: "ph"
      }, {
        text: "流量",
        val: "avgflow"
      }],
      aArr: [{
        text: "烟尘",
        val: "soot"
      }, {
        text: "氮氧化物",
        val: "nox"
      }, {
        text: "二氧化硫",
        val: "so2"
      }, {
        text: "氧气含量",
        val: "o2"
      }, {
        text: "一氧化碳",
        val: "co"
      }, {
        text: "烟气流量",
        val: "avgflow"
      }],
      factorArr: [],
      // '烟尘','氯化物','氮氧化物','颗粒物','氧气','二氧化碳','总有机碳'
      dateTabIndex: 1,
      timetype: "hour",
      factorTabIndex: 0,
      factor: "",
      search: "",
      startTime: dayjs__WEBPACK_IMPORTED_MODULE_7___default()(new Date()).format("YYYY-MM-DD 00:00"),
      // startTime:'2021-10-10',
      endTime: dayjs__WEBPACK_IMPORTED_MODULE_7___default()(new Date()).format("YYYY-MM-DD HH:mm"),
      endPop: false,
      endPop2: false,
      type: "",
      psCode: "",
      option: {},
      deviceId: "",
      tableList: [],
      tableList1: [],
      chartdata: [],
      title: "",
      dxtime: 0,
      cbtime: 0,
      cbddList: [],
      cbddSum: 0,
      ypList: [],
      yptotal: 0,
      loading: false,
      finished: false,
      // 是否已加载完成，加载完成后不再触发load事件
      refreshing: false,
      // 下拉状态
      listQuery: {
        page: 1,
        // 当前页码数
        limit: 6 // 一页显示10条

      },
      slectYear: false,
      yzList: ""
    };
  },
  filters: {
    getTimeType: function getTimeType(key) {
      var status = "";

      if (key == "hour") {
        status = "datetime";
      } else if (key == "real") {
        status = "datetime";
      } else if (key == "day") {
        status = "date";
      } else if (key == "月") {
        status = "year-month";
      }

      return status;
    }
  },
  computed: {
    maxDate: {
      get: function get() {
        return new Date(this.currentDate2);
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.type = this.$route.query.type; // this.title = this.$route.query.name+"_"+this.type;
    // if(this.type=='废水'){
    // 	this.factorArr = this.wArr;
    // 	this.factor = this.factorArr[0].val;
    // }else{
    // 	this.factorArr = this.aArr;
    // 	this.factor = this.factorArr[0].val;
    // }

    this.deviceId = this.$route.query.deviceId;
    this.sbid = this.$route.query.sbid;
    this.psCode = this.$route.query.psCode;
    this.yzList = this.$route.query.yzList;

    if (!this.factorRef) {
      this.factorRef = echarts__WEBPACK_IMPORTED_MODULE_8__["init"](this.$refs.factorRef);
      setTimeout(function () {
        _this.initChart(_this.factorRef);
      });
    }

    this.currentDate = new Date(this.startTime);
    this.currentDate2 = new Date(this.endTime);
    this.loadData(); // this.getYp();
    // this.yearData();
  },
  methods: {
    //年数据
    yearData: function yearData() {
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
    filterTime: function filterTime(from) {
      if (this.slectYear) {
        this.startTime = this.startTime + "-01";
        this.endTime = this.endTime + "-01";
      }

      if (this.timetype == "real") {
        if (from == 1) {
          this.startTime = dayjs__WEBPACK_IMPORTED_MODULE_7___default()(new Date()).format("YYYY-MM-DD 00:00");
        } else {
          this.startTime = dayjs__WEBPACK_IMPORTED_MODULE_7___default()(new Date(this.startTime)).format("YYYY-MM-DD HH:mm");
        }

        this.endTime = dayjs__WEBPACK_IMPORTED_MODULE_7___default()(new Date(this.endTime)).format("YYYY-MM-DD HH:mm");
      } else if (this.timetype == "hour") {
        if (from == 1) {
          this.startTime = dayjs__WEBPACK_IMPORTED_MODULE_7___default()(new Date()).format("YYYY-MM-DD 00:00");
        } else {
          this.startTime = dayjs__WEBPACK_IMPORTED_MODULE_7___default()(new Date(this.startTime)).format("YYYY-MM-DD HH:mm");
        }

        this.endTime = dayjs__WEBPACK_IMPORTED_MODULE_7___default()(new Date(this.endTime)).format("YYYY-MM-DD HH:mm");
      } else if (this.timetype == "day") {
        // .subtract(7,'day')
        if (from == 1) {
          this.startTime = dayjs__WEBPACK_IMPORTED_MODULE_7___default()(new Date()).subtract(7, "day").format("YYYY-MM-DD");
        } else {
          this.startTime = dayjs__WEBPACK_IMPORTED_MODULE_7___default()(new Date(this.startTime)).format("YYYY-MM-DD");
        }

        this.endTime = dayjs__WEBPACK_IMPORTED_MODULE_7___default()(new Date(this.endTime)).format("YYYY-MM-DD");
      } else if (this.timetype == "月") {
        this.startTime = dayjs__WEBPACK_IMPORTED_MODULE_7___default()(new Date(this.startTime)).format("YYYY-MM");
        this.endTime = dayjs__WEBPACK_IMPORTED_MODULE_7___default()(new Date(this.endTime)).format("YYYY-MM");
      } else {
        this.startTime = dayjs__WEBPACK_IMPORTED_MODULE_7___default()(new Date(this.startTime)).format("YYYY");
        this.endTime = dayjs__WEBPACK_IMPORTED_MODULE_7___default()(new Date(this.endTime)).format("YYYY");
      }

      this.currentDate = new Date(this.startTime);
      this.currentDate2 = new Date(this.endTime);
    },
    changeDateTab: function changeDateTab(obj, index) {
      this.dateTabIndex = index;
      this.timetype = obj.val;
      this.filterTime(1);
      this.initChart(this.factorRef);
    },
    changeFactorTab: function changeFactorTab(obj, index) {
      var _this2 = this;

      this.factorTabIndex = index;
      this.factor = obj.yzmc;
      var sArr = [];

      if (this.timetype != "real") {
        this.chartdata.forEach(function (item) {
          // sArr.push(item[this.factor])
          sArr.push(item["AVG_" + _this2.factor]);
        });
      } else {
        this.tableList1.forEach(function (item) {
          sArr.push(item[index].value);
        });
      }

      this.option.series[0].data = sArr;
      this.factorRef.setOption(this.option);
    },
    onConfirmEndTime: function onConfirmEndTime(value) {
      if (this.currentDate.getTime() > new Date(this.endTime).getTime()) {
        this.$notify({
          type: "warning",
          message: "开始时间不能大于结束时间！"
        });
        return false;
      }

      this.startTime = value;
      this.slectYear = false;

      if (this.timetype != "年") {
        this.filterTime(2);
      } else {
        this.slectYear = true;
      }

      this.endPop = false;
      this.initChart(this.factorRef);
    },
    onConfirmEndTime2: function onConfirmEndTime2(value) {
      if (new Date(this.startTime).getTime() > this.currentDate2.getTime()) {
        this.$notify({
          type: "warning",
          message: "结束时间不能小于开始时间！"
        });
        return false;
      }

      this.endTime = value;
      this.slectYear = false;

      if (this.timetype != "年") {
        this.filterTime(2);
      } else {
        this.slectYear = true;
      }

      this.endPop2 = false;
      this.initChart(this.factorRef);
    },
    loadData: function loadData() {
      // if(this.type=="废水"){
      // 	this.getWater();
      // }else{
      // 	this.getAir()
      // }
      this.getAirWater();
      this.getCbdb();
    },
    getAirWater: function getAirWater() {
      var _this3 = this;

      var info = {
        begin: "",
        end: "",
        sbid: this.sbid
      };
      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_9__["gasDisconnectStat"])(info).then(function (res) {
        _this3.dxtime = res.data.total;
      });
      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_9__["gasExceedStat"])({
        begin: "",
        end: "",
        sbid: this.sbid // type:""

      }).then(function (res) {
        _this3.cbtime = res.data.total;
      });
    },
    getWater: function getWater() {
      var _this4 = this;

      var info = {
        // begin:this.startTime,
        // end:this.endTime,
        begin: "",
        end: "",
        deviceId: this.deviceId
      };
      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_9__["waterDisconnectStat"])(info).then(function (res) {
        _this4.dxtime = res.data.total;
      });
      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_9__["waterOverStat"])({
        // begin:this.startTime,
        // end:this.endTime,
        begin: "",
        end: "",
        deviceId: this.deviceId,
        type: this.timetype
      }).then(function (res) {
        _this4.dcbtime = res.data;
      });
    },
    getAir: function getAir() {
      var _this5 = this;

      var info = {
        begin: "",
        end: "",
        deviceId: this.deviceId
      };
      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_9__["gasDisconnectStat"])(info).then(function (res) {
        _this5.dxtime = res.data.total;
      });
      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_9__["gasOverStat"])({
        begin: "",
        end: "",
        deviceId: this.deviceId,
        type: this.timetype
      }).then(function (res) {
        _this5.dcbtime = res.data;
      });
    },
    getCbdb: function getCbdb() {
      var _this6 = this;

      var info = {
        begin: "",
        end: "",
        sbid: this.sbid // deviceId:this.deviceId,
        // psCode:this.psCode,
        // deviceId:"399435X0207202",
        // psCode:"12251",

      };
      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_9__["getDbdStat"])(info).then(function (res) {
        _this6.cbddSum = res.data.total;
        _this6.cbddList = res.data.data;
      }); // cbdbList(info).then(res=>{
      //  this.cbddList = res.data;
      // })
    },
    getYp: function getYp() {
      var _this7 = this;

      var info = {
        deviceId: this.deviceId,
        psCode: this.psCode,
        type: this.type,
        // deviceId:"399435X0207202",
        // psCode:"12251",
        // type:"废水",
        pageNum: this.listQuery.page,
        pageSize: this.listQuery.limit
      };
      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_9__["ypList"])(info).then(function (res) {
        // this.ypList = res.data;
        _this7.yptotal = res.data.total;

        if (res.code == 200) {
          var rdata = res.data; // 是否是第一次进入页面page==1 直接赋值

          if (_this7.listQuery.page == 1) {
            _this7.ypList = rdata.records;
          } else {
            // 如果不是则在后面追加数据，
            rdata.records.forEach(function (item) {
              _this7.ypList.push(item);
            });
          } // 关闭loading


          _this7.loading = false; // 当还有数据是page++

          if (rdata.records.length === _this7.listQuery.limit && rdata.total !== _this7.listQuery.limit) {
            _this7.listQuery.page++;
            _this7.loading = false;
          } else {
            _this7.finished = true;
          } // this.ypList = res.data.records;


          _this7.total = res.data.total;
        }
      });
    },
    onLoad: function onLoad() {
      var _this8 = this;

      setTimeout(function () {
        _this8.getYp();
      }, 1000);
    },
    onRefresh: function onRefresh() {
      var _this9 = this;

      // this.pollutData = [];
      // this.loading = true;
      setTimeout(function () {
        _this9.listQuery.page = 1;

        _this9.getYp();

        _this9.refreshing = false;
      }, 500);
    },
    //掉线
    disconnectInfo: function disconnectInfo() {
      this.$router.push({
        name: "offlineDes",
        query: {
          // deviceId:this.deviceId,
          // type:this.type,
          // name:this.$route.query.name
          deviceId: this.deviceId,
          sbid: this.sbid,
          type: this.type,
          name: this.$route.query.name
        }
      });
    },
    //超标
    exceedInfo: function exceedInfo() {
      this.$router.push({
        name: "exceedDes",
        query: {
          // deviceId:this.deviceId,
          // type:this.type,
          // name:this.$route.query.name
          deviceId: this.deviceId,
          sbid: this.sbid,
          type: this.type,
          name: this.$route.query.name
        }
      });
    },
    //督办
    upervisionInfo: function upervisionInfo(row) {
      this.$router.push({
        name: "upervisionDetail",
        query: {
          lxdid: row.LXDID,
          // deviceId:this.deviceId,
          // id:row.id,
          name: this.$route.query.name
        }
      });
    },
    //研判
    //     judgeInfo(row){
    //         this.$router.push({
    // 	name: "judgeDetail",
    // 	query:{
    // 		deviceId:this.deviceId,
    // 		type:this.type,
    // 		// deviceId:"399435X0207202",
    // 		// type:"废水",
    // 		id:row.id,
    // 		name:this.$route.query.name
    // 	}
    // });
    //     },
    initChart: function initChart(chartInstance) {
      var _this10 = this;

      this.option = {
        color: ["rgba(82, 113, 255, 1)"],
        legend: {
          show: false
        },
        grid: {
          top: "15%",
          left: "8%",
          right: "5%",
          bottom: "20%"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          } // backgroundColor : 'rgba(18, 18, 54, 1)',
          // textStyle : {
          //     color : '#fff'
          // }

        },
        xAxis: {
          type: "category",
          axisTick: {
            show: false
          },
          axisLine: {
            show: false
          },
          axisLabel: {
            color: "#B0B7C2",
            fontSize: 12,
            margin: 20
          },
          boundaryGap: false,
          data: []
        },
        yAxis: {
          type: "value",
          name: "",
          splitLine: {
            lineStyle: {
              type: "solid",
              color: "#E4E9F2"
            }
          },
          axisLabel: {
            color: "#B0B7C2",
            fontSize: 12
          }
        },
        series: [{
          data: [],
          type: "line",
          showSymbol: false,
          smooth: true,
          areaStyle: {
            color: new echarts__WEBPACK_IMPORTED_MODULE_8__["graphic"].LinearGradient(0, 0, 0, 1, [{
              offset: 1,
              color: "rgba(68, 123, 252, 0.1)"
            }, {
              offset: 0,
              color: "rgba(68, 123, 252, 0.2)"
            }])
          }
        }]
      };

      if (this.timetype != "real") {
        var info = {
          begin: this.startTime,
          end: this.endTime,
          sbid: this.sbid,
          sjlx: this.timetype // deviceId:this.deviceId,
          // psCode:this.psCode,
          // type:this.timetype

        }; // if(this.type=="废水"){

        Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_9__["getAppDataList"])(info).then(function (res) {
          var rdata = res.data;
          var xArr = [],
              sArr = [];
          _this10.factorArr = rdata.headers;
          var yzArr = [];
          rdata.headers.forEach(function (item) {
            yzArr.push(item.yzmc);
          });
          _this10.yzList = yzArr.join(",");

          if (_this10.factorArr.length > 0) {
            _this10.factor = _this10.factorArr[0].yzmc;
          } // this.$emit("getDataId", rdata.dataId);


          _this10.tableList = rdata.datas;
          _this10.chartdata = rdata.datas;

          if (_this10.chartdata && _this10.chartdata.length > 0) {
            _this10.chartdata.forEach(function (item) {
              if (_this10.timetype == "hour" || _this10.timetype == "real") {
                xArr.push(dayjs__WEBPACK_IMPORTED_MODULE_7___default()(new Date(item.RECORD_TIME)).format("MM-DD HH") + "时");
              } else if (_this10.timetype == "day") {
                xArr.push(dayjs__WEBPACK_IMPORTED_MODULE_7___default()(new Date(item.RECORD_TIME)).format("MM-DD") + "日");
              } else if (_this10.timetype == "月") {
                xArr.push(dayjs__WEBPACK_IMPORTED_MODULE_7___default()(new Date(item.RECORD_TIME)).format("YYYY-MM") + "月");
              } else {
                xArr.push(dayjs__WEBPACK_IMPORTED_MODULE_7___default()(new Date(item.RECORD_TIME)).format("YYYY") + "年");
              }

              sArr.push(item["AVG_" + _this10.factor]);
            });
          } else {
            xArr = [];
            sArr = [];
          }

          _this10.option.xAxis.data = xArr;
          _this10.option.series[0].data = sArr;
          chartInstance.setOption(_this10.option);
        });
      } else {
        var _info = {
          autoSign: "N,A,D,M,C,T,Td,K",
          begin: this.startTime + ":00",
          dataPartOrALL: "avg,cou",
          end: this.endTime + ":00",
          jcyzlist: this.yzList,
          mark: "单站详情-数据曲线",
          sbid: this.sbid,
          sjzt: "",
          timetype: this.timetype,
          use_historyback: "yssj",
          wrlx: this.type == "废水" ? "1" : "2" // deviceId:this.deviceId,
          // psCode:this.psCode,
          // type:this.timetype

        }; // if(this.type=="废水"){

        Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_9__["getReal"])(_info).then(function (res) {
          var rdata = res;
          var xArr = [],
              sArr = []; // this.factorArr = rdata.jcyzlist;

          if (_this10.factorArr.length > 0) {
            _this10.factor = res.jcyzlist[0];
          }

          var arr = [];
          res.basedatalist.forEach(function (item) {
            var arr1 = [];
            item.datalist.forEach(function (e, index) {
              if (index % 2 != 1) {
                var obj = {
                  value: e,
                  status: item.statulist[index / 2],
                  time: item.rowlist[1],
                  yzName: res.jcyzlist[index / 2]
                };
                arr1.push(obj);
              }
            });
            arr.push(arr1);
          });
          _this10.tableList1 = arr; // this.$emit("getDataId", rdata.dataId);
          // this.tableList = rdata.datas;
          // this.chartdata = rdata.datas;

          if (_this10.tableList1 && _this10.tableList1.length > 0) {
            _this10.tableList1.forEach(function (item) {
              xArr.push(dayjs__WEBPACK_IMPORTED_MODULE_7___default()(new Date(item[_this10.factorTabIndex].time)).format("MM-DD HH:mm"));
              sArr.push(item[_this10.factorTabIndex].value);
            });
          } else {
            xArr = [];
            sArr = [];
          }

          _this10.option.xAxis.data = xArr;
          _this10.option.series[0].data = sArr;
          chartInstance.setOption(_this10.option);
        });
      } // }else{
      // 	// info.psCode = "3028";
      // 	// info.deviceId = "399435XKM12003";
      // 	gasDeviceDetail(info).then(res=>{
      // 		let rdata = res.data;
      // 		this.$emit("getDataId", rdata.dataId);
      // 		let xArr = [],sArr=[];
      // 		this.tableList = rdata.data;
      // 		this.chartdata = rdata.data;
      // 		if(this.chartdata&&this.chartdata.length>0){
      // 			this.chartdata.forEach(item=>{
      // 				if(this.timetype=='时'){
      // 					xArr.push(dayjs(new Date(item.monitortime)).format('MM-DD HH')+'时');
      // 				}else if(this.timetype=='日'){
      // 					xArr.push(dayjs(new Date(item.monitortime)).format('MM-DD')+'日');
      // 				}else if(this.timetype=='月'){
      // 					xArr.push(dayjs(new Date(item.monitortime)).format('YYYY-MM')+'月');
      // 				}else{
      // 					xArr.push(dayjs(new Date(item.monitortime)).format('YYYY')+'年');
      // 				}
      // 				sArr.push(item[this.factor])
      // 			})
      // 		}else{
      // 			console.log(123)
      // 			xArr = [];
      // 			sArr =[]
      // 		}
      // 		this.option.xAxis.data = xArr;
      // 		this.option.series[0].data = sArr;
      // 		chartInstance.setOption(this.option)
      // 	})
      // }
      // chartInstance.setOption(option)

    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/components/pollutionLicenceInfo.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/components/pollutionLicenceInfo.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_pollution_source__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api/pollution_source */ "./src/api/pollution_source.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "pollutionLicenceInfo",
  components: {},
  props: {
    dataId: String
  },
  data: function data() {
    return {
      tabArr: ["要求1", "要求2"],
      tabIndex: 0,
      type: "",
      showMore: true,
      showMore3: true,
      showMore4: true,
      showMore2: true,
      showMore5: true,
      youzztotal: [],
      youzzfl: [],
      wzz: [],
      tshjyq: [],
      tshjzwr: [],
      pfbzList: [],
      zxjcList: []
    };
  },
  mounted: function mounted() {
    this.type = this.$route.query.type;
    this.getPfbz();
    this.getZxjc();
  },
  methods: {
    getMore: function getMore() {
      this.showMore = !this.showMore;
    },
    getMore2: function getMore2() {
      this.showMore2 = !this.showMore2;
    },
    getMore3: function getMore3() {
      this.showMore3 = !this.showMore3;
    },
    getMore4: function getMore4() {
      this.showMore4 = !this.showMore4;
    },
    getMore5: function getMore5() {
      this.showMore5 = !this.showMore5;
    },
    getPfbz: function getPfbz() {
      var _this = this;

      var info = {
        dataId: this.dataId,
        //"0b323fc8b0f643e1b8566a697ef7cd22",
        type: this.type == "废气" ? "气" : "水"
      };
      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_0__["licenseStandard"])(info).then(function (res) {
        var rdata = res.data;
        _this.pfbzList = res.data;
        var yzz = rdata.youzz;
        _this.youzztotal = yzz.total.details;
        _this.youzzfl = yzz.infos;
        _this.wzz = rdata.wzz.infos;
        _this.tshjyq = rdata.tshjyq.infos;
        _this.tshjzwr = rdata.tshjzwr.infos;
      });
    },
    getZxjc: function getZxjc() {
      var _this2 = this;

      var info = {
        dataId: this.dataId,
        //"0b323fc8b0f643e1b8566a697ef7cd22",
        type: this.type
      };
      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_0__["monitorRequire"])(info).then(function (res) {
        _this2.zxjcList = res.data;
      });
    },
    changeTab: function changeTab(index) {
      this.tabIndex = index;
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/portInfoDetail.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/portInfoDetail.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_onlineSiteInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/onlineSiteInfo */ "./src/views/pollution/detail/components/onlineSiteInfo.vue");
/* harmony import */ var _components_pollutionLicenceInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/pollutionLicenceInfo */ "./src/views/pollution/detail/components/pollutionLicenceInfo.vue");
/* harmony import */ var _api_pollution_source__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api/pollution_source */ "./src/api/pollution_source.js");

//
//
//
//
//
//
//
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
  name: "portInfoDetail",
  components: {
    onlineSiteInfo: _components_onlineSiteInfo__WEBPACK_IMPORTED_MODULE_1__["default"],
    pollutionLicenceInfo: _components_pollutionLicenceInfo__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  data: function data() {
    return {
      tabArr: ["站点监测信息", "排污许可证排放标准"],
      tabIndex: 0,
      dataId: "",
      title: ""
    };
  },
  mounted: function mounted() {
    this.title = this.$route.query.name; //+"_"+this.$route.query.type;

    this.dataId = this.$route.query.xkzid;
  },
  methods: {
    changeTab: function changeTab(index) {
      this.tabIndex = index;
    } // getDataId(id){
    // 	console.log(id)
    // 	this.dataId = id;
    // }

  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/components/onlineSiteInfo.vue?vue&type=template&id=2af0837c&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/components/onlineSiteInfo.vue?vue&type=template&id=2af0837c&scoped=true& ***!
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
  return _c(
    "div",
    [
      _c(
        "div",
        { staticClass: "port_tab" },
        _vm._l(_vm.dateArr, function (item, i) {
          return _c(
            "div",
            {
              class: [i === _vm.dateTabIndex ? "active" : ""],
              on: {
                click: function ($event) {
                  return _vm.changeDateTab(item, i)
                },
              },
            },
            [_c("span", [_vm._v(_vm._s(item.text))])]
          )
        }),
        0
      ),
      _c("div", { staticClass: "search-content fs" }, [
        _vm._v(" 数据时间 "),
        _c(
          "div",
          {
            staticClass: "search-item fs",
            on: {
              click: function ($event) {
                _vm.endPop = true
              },
            },
          },
          [
            _c("van-icon", { attrs: { name: "notes-o" } }),
            _vm._v(" " + _vm._s(_vm.startTime) + " "),
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
                _vm.endPop2 = true
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
      _c(
        "div",
        {
          staticClass: "company-info",
          staticStyle: { margin: "6px 10px 0px" },
        },
        [
          _vm._m(0),
          _c(
            "div",
            { staticClass: "factor" },
            _vm._l(_vm.factorArr, function (item, i) {
              return _c(
                "div",
                {
                  class: [i === _vm.factorTabIndex ? "active" : ""],
                  on: {
                    click: function ($event) {
                      return _vm.changeFactorTab(item, i)
                    },
                  },
                },
                [_vm._v(_vm._s(item.yzmc))]
              )
            }),
            0
          ),
          _c("div", {
            ref: "factorRef",
            staticStyle: { height: "200px", width: "90%", margin: "0 auto" },
          }),
        ]
      ),
      _c("div", { staticStyle: { display: "flex" } }, [
        _c(
          "div",
          {
            staticClass: "company-info site-module",
            staticStyle: {
              margin: "6px 10px 0px",
              width: "50%",
              display: "flex",
              padding: "10px",
            },
            on: { click: _vm.disconnectInfo },
          },
          [
            _vm._m(1),
            _c("span", { staticClass: "site_date" }, [
              _vm._v(_vm._s(_vm.dxtime) + "小时"),
            ]),
            _vm._m(2),
          ]
        ),
        _c(
          "div",
          {
            staticClass: "company-info site-module",
            staticStyle: {
              margin: "6px 10px 0px 0px",
              width: "50%",
              display: "flex",
              padding: "10px",
            },
            on: { click: _vm.exceedInfo },
          },
          [
            _vm._m(3),
            _c("span", { staticClass: "site_date" }, [
              _vm._v(_vm._s(_vm.cbtime) + "次"),
            ]),
            _vm._m(4),
          ]
        ),
      ]),
      _c(
        "div",
        {
          staticClass: "qrCode-info redBg",
          staticStyle: { "margin-top": "5px" },
        },
        [
          _c("div", { staticClass: "company_title" }, [
            _c("img", {
              attrs: { src: __webpack_require__(/*! ../../../../assets/polluter/exceed.png */ "./src/assets/polluter/exceed.png") },
            }),
            _vm._m(5),
            _c(
              "div",
              { staticClass: "tips", staticStyle: { "margin-left": "auto" } },
              [
                _c("span", { staticClass: "tips_color" }, [
                  _vm._v(_vm._s(_vm.cbddSum) + "件"),
                ]),
              ]
            ),
          ]),
          _c(
            "div",
            { staticClass: "site_exceed_content tips" },
            [
              _vm._l(_vm.cbddList, function (item) {
                return _c(
                  "div",
                  {
                    staticClass: "site_exceed_li",
                    on: {
                      click: function ($event) {
                        return _vm.upervisionInfo(item)
                      },
                    },
                  },
                  [
                    _c("span", [_vm._v(_vm._s(item.JCYZMC) + " ")]),
                    _c("span", { staticClass: "tips_color" }, [
                      _vm._v(_vm._s(item.LX) + " "),
                    ]),
                    _c("span", [_vm._v(_vm._s(item.FQSJ))]),
                    _c("img", {
                      attrs: {
                        src: __webpack_require__(/*! ../../../../assets/polluter/right.png */ "./src/assets/polluter/right.png"),
                      },
                    }),
                  ]
                )
              }),
              _vm.cbddSum == 0
                ? _c("div", { staticClass: "nodata" }, [_vm._v("暂无数据")])
                : _vm._e(),
            ],
            2
          ),
        ]
      ),
      _c(
        "div",
        {
          staticClass: "company-info",
          staticStyle: { margin: "6px 10px 0px" },
        },
        [
          _vm._m(6),
          _c("div", { staticClass: "company_title_tip" }, [
            _vm._v(
              "正常-N 调试-A 故障-D 日常维护-M 校准-C 超量程-T 温度传感器故障-Td 核查对比-K"
            ),
          ]),
          _vm.timetype != "real"
            ? _c("div", { staticStyle: { width: "100%", overflow: "auto" } }, [
                _c("table", { staticClass: "table-wrapper" }, [
                  _c("thead", [
                    _c(
                      "tr",
                      { staticClass: "table-header" },
                      [
                        _c("th", [_vm._v("监测时间")]),
                        _vm._l(_vm.factorArr, function (item) {
                          return [_c("th", [_vm._v(_vm._s(item.yzmc))])]
                        }),
                      ],
                      2
                    ),
                  ]),
                  _c(
                    "tbody",
                    [
                      _vm._l(_vm.tableList, function (item) {
                        return _c(
                          "tr",
                          [
                            _c("td", [
                              _vm._v(
                                _vm._s(
                                  item.RECORD_TIME
                                    ? _vm
                                        .dayjs(new Date(item.RECORD_TIME))
                                        .format("MM-DD HH:mm")
                                    : ""
                                )
                              ),
                            ]),
                            _vm._l(_vm.factorArr, function (column) {
                              return [
                                _c("td", [
                                  _vm._v(
                                    _vm._s(item["AVG_" + column.yzmc]) +
                                      " " +
                                      _vm._s(item["FLAG_" + column.yzmc])
                                  ),
                                ]),
                              ]
                            }),
                          ],
                          2
                        )
                      }),
                      _vm.tableList.length == 0
                        ? _c("div", { staticClass: "nodata" }, [
                            _vm._v("暂无数据"),
                          ])
                        : _vm._e(),
                    ],
                    2
                  ),
                ]),
              ])
            : _vm._e(),
          _vm.timetype == "real"
            ? _c("div", { staticStyle: { width: "100%", overflow: "auto" } }, [
                _c("table", { staticClass: "table-wrapper" }, [
                  _c("thead", [
                    _c(
                      "tr",
                      { staticClass: "table-header" },
                      [
                        _c("th", [_vm._v("监测时间")]),
                        _vm._l(_vm.factorArr, function (item) {
                          return [_c("th", [_vm._v(_vm._s(item.yzmc))])]
                        }),
                      ],
                      2
                    ),
                  ]),
                  _c(
                    "tbody",
                    [
                      _vm._l(_vm.tableList1, function (item, index) {
                        return _c(
                          "tr",
                          [
                            _c("td", [
                              _vm._v(
                                _vm._s(
                                  item[0].time
                                    ? _vm
                                        .dayjs(new Date(item[0].time))
                                        .format("MM-DD HH:mm")
                                    : ""
                                )
                              ),
                            ]),
                            _vm._l(item, function (column) {
                              return [
                                _c("td", [
                                  _vm._v(
                                    _vm._s(
                                      column.status == "WYZ"
                                        ? "-"
                                        : column.value
                                    ) +
                                      "    " +
                                      _vm._s(column.status)
                                  ),
                                ]),
                              ]
                            }),
                          ],
                          2
                        )
                      }),
                      _vm.tableList.length == 0
                        ? _c("div", { staticClass: "nodata" }, [
                            _vm._v("暂无数据"),
                          ])
                        : _vm._e(),
                    ],
                    2
                  ),
                ]),
              ])
            : _vm._e(),
        ]
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
          _vm.timetype != "年"
            ? _c("van-datetime-picker", {
                attrs: {
                  type: _vm._f("getTimeType")(_vm.timetype),
                  title: "选择年月日",
                  "max-date": _vm.maxDate,
                },
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
              })
            : _c("van-picker", {
                attrs: {
                  "show-toolbar": "",
                  columns: _vm.yearColumns,
                  title: "选择年",
                  "default-index": _vm.yearSelect,
                },
                on: {
                  confirm: _vm.onConfirmEndTime,
                  cancel: function ($event) {
                    _vm.endPop = false
                  },
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
          _vm.timetype != "年"
            ? _c("van-datetime-picker", {
                attrs: {
                  type: _vm._f("getTimeType")(_vm.timetype),
                  title: "选择年月日",
                },
                on: {
                  confirm: _vm.onConfirmEndTime2,
                  cancel: function ($event) {
                    _vm.endPop2 = false
                  },
                },
                model: {
                  value: _vm.currentDate2,
                  callback: function ($$v) {
                    _vm.currentDate2 = $$v
                  },
                  expression: "currentDate2",
                },
              })
            : _c("van-picker", {
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
    return _c("div", { staticClass: "company_title" }, [
      _c("span", [_vm._v("监测因子")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "site_content" }, [
      _vm._v("掉线时长"),
      _c("br"),
      _c("span", { staticStyle: { "font-size": "10px" } }, [
        _vm._v("（本年度）"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "site_right" }, [
      _c("img", {
        attrs: { src: __webpack_require__(/*! ../../../../assets/polluter/right.png */ "./src/assets/polluter/right.png") },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "site_content" }, [
      _vm._v("历史超标"),
      _c("br"),
      _c("span", { staticStyle: { "font-size": "10px" } }, [
        _vm._v("（本年度）"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "site_right" }, [
      _c("img", {
        attrs: { src: __webpack_require__(/*! ../../../../assets/polluter/right.png */ "./src/assets/polluter/right.png") },
      }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "black_content" }, [
      _vm._v("监控任务办理单"),
      _c("span", { staticStyle: { "font-size": "10px" } }, [
        _vm._v("（本年度）"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "company_title" }, [
      _c("span", [_vm._v("监测数据")]),
      _c("div", { staticClass: "site_square" }, [
        _c("div", { staticStyle: { width: "30%" } }, [
          _c("span", { staticClass: "red_square" }),
          _c("span", [_vm._v("超标")]),
        ]),
        _c("div", { staticStyle: { width: "30%" } }, [
          _c("span", { staticClass: "blue_square" }),
          _c("span", [_vm._v("故障")]),
        ]),
        _c("div", { staticStyle: { width: "40%" } }, [
          _c("span", { staticClass: "green_square" }),
          _c("span", [_vm._v("运行维护")]),
        ]),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/components/pollutionLicenceInfo.vue?vue&type=template&id=f9013462&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/components/pollutionLicenceInfo.vue?vue&type=template&id=f9013462&scoped=true& ***!
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
  return _c("div", { staticClass: "pollutionLicenceInfo" }, [
    _vm._m(0),
    _vm._m(1),
    _c(
      "div",
      {
        staticClass: "company-info",
        staticStyle: {
          margin: "6px 10px 0px",
          background: "rgba(250, 250, 250, 1)",
        },
      },
      [
        _c(
          "div",
          { staticClass: "main_content" },
          [
            _vm._m(2),
            _vm._l(_vm.youzztotal, function (item) {
              return _c(
                "div",
                { staticClass: "third_w no_bottom" },
                [
                  _vm.youzztotal.length > 0
                    ? [
                        _c("span", { staticClass: "pol_factor" }, [
                          _vm._v(_vm._s(item.code)),
                        ]),
                        _c("span", { staticClass: "pol_factor" }, [
                          _vm._v(_vm._s(item.name)),
                        ]),
                        _c("span", { staticClass: "pol_factor" }, [
                          _vm._v(_vm._s(item.value)),
                        ]),
                      ]
                    : _vm._e(),
                ],
                2
              )
            }),
            _vm.youzztotal.length == 0
              ? _c(
                  "div",
                  {
                    staticClass: "whole_width pol_factor",
                    staticStyle: { "text-align": "center" },
                  },
                  [_vm._v("暂无数据")]
                )
              : _vm._e(),
          ],
          2
        ),
      ]
    ),
    _c(
      "div",
      { class: _vm.showMore ? "moreheight" : "" },
      [
        _vm._l(_vm.youzzfl, function (item) {
          return [
            _c(
              "div",
              {
                staticClass: "company-info",
                staticStyle: { margin: "6px 10px 0px" },
              },
              [
                _c("div", { staticClass: "pol_other" }, [
                  _c("span", { staticClass: "pol_first" }, [
                    _vm._v("排放口编号"),
                  ]),
                  _c("span", { staticClass: "pol_second" }, [
                    _vm._v(_vm._s(item.code)),
                  ]),
                  _c("span", { staticClass: "pol_thrid" }, [
                    _vm._v(_vm._s(item.name)),
                  ]),
                ]),
              ]
            ),
            _c(
              "div",
              {
                staticClass: "company-info",
                staticStyle: {
                  margin: "6px 10px 0px",
                  background: "rgba(250, 250, 250, 1)",
                },
              },
              [
                _c(
                  "div",
                  { staticClass: "main_content" },
                  [
                    _vm._m(3, true),
                    _vm._l(item.details, function (item2) {
                      return _c("div", { staticClass: "half_w no_bottom" }, [
                        _c("span", { staticClass: "pol_factor" }, [
                          _vm._v(_vm._s(item2.name)),
                        ]),
                        _c("span", { staticClass: "pol_factor" }, [
                          _vm._v(_vm._s(item2.value)),
                        ]),
                      ])
                    }),
                  ],
                  2
                ),
              ]
            ),
          ]
        }),
      ],
      2
    ),
    _vm.youzzfl.length > 0
      ? _c(
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
        )
      : _vm._e(),
    _vm._m(4),
    _c(
      "div",
      { class: _vm.showMore2 ? "moreheight" : "" },
      [
        _vm._l(_vm.tshjyq, function (item) {
          return [
            _c(
              "div",
              {
                staticClass: "company-info",
                staticStyle: { margin: "6px 10px 0px" },
              },
              [
                _c("div", { staticClass: "pol_other" }, [
                  _c("span", { staticClass: "pol_first" }, [_vm._v("排放口")]),
                  _c("span", { staticClass: "pol_second" }, [
                    _vm._v(_vm._s(item.type)),
                  ]),
                ]),
              ]
            ),
            _c(
              "div",
              {
                staticClass: "company-info",
                staticStyle: {
                  margin: "6px 10px 0px",
                  background: "rgba(250, 250, 250, 1)",
                },
              },
              [
                _c(
                  "div",
                  { staticClass: "main_content" },
                  [
                    _vm._m(5, true),
                    _vm._l(item.details, function (item) {
                      return _c("div", { staticClass: "third_w no_bottom" }, [
                        _c("span", { staticClass: "pol_factor" }, [
                          _vm._v(_vm._s(item.code)),
                        ]),
                        _c("span", { staticClass: "pol_factor" }, [
                          _vm._v(_vm._s(item.name)),
                        ]),
                        _c("span", { staticClass: "pol_factor" }, [
                          _vm._v(_vm._s(item.value)),
                        ]),
                      ])
                    }),
                  ],
                  2
                ),
              ]
            ),
          ]
        }),
        _vm.tshjyq.length == 0
          ? _c("div", { staticClass: "nodata" }, [_vm._v("暂无数据")])
          : _vm._e(),
      ],
      2
    ),
    _vm.tshjyq.length > 0
      ? _c(
          "div",
          {
            staticClass: "company-info",
            staticStyle: { margin: "0px 10px 6px", "text-align": "center" },
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
    _vm._m(6),
    _c(
      "div",
      { class: _vm.showMore3 ? "moreheight" : "" },
      [
        _vm._l(_vm.tshjzwr, function (item) {
          return [
            _c(
              "div",
              {
                staticClass: "company-info",
                staticStyle: { margin: "6px 10px 0px" },
              },
              [
                _c("div", { staticClass: "pol_other" }, [
                  _c("span", { staticClass: "pol_first" }, [_vm._v("排放口")]),
                  _c("span", { staticClass: "pol_second" }, [
                    _vm._v(_vm._s(item.type)),
                  ]),
                ]),
              ]
            ),
            _c(
              "div",
              {
                staticClass: "company-info",
                staticStyle: {
                  margin: "6px 10px 0px",
                  background: "rgba(250, 250, 250, 1)",
                },
              },
              [
                _c(
                  "div",
                  { staticClass: "main_content" },
                  [
                    _vm._m(7, true),
                    _vm._l(item.details, function (item) {
                      return _c("div", { staticClass: "third_w no_bottom" }, [
                        _c("span", { staticClass: "pol_factor" }, [
                          _vm._v(_vm._s(item.code)),
                        ]),
                        _c("span", { staticClass: "pol_factor" }, [
                          _vm._v(_vm._s(item.name)),
                        ]),
                        _c("span", { staticClass: "pol_factor" }, [
                          _vm._v(_vm._s(item.value)),
                        ]),
                      ])
                    }),
                  ],
                  2
                ),
              ]
            ),
          ]
        }),
        _vm.tshjzwr.length == 0
          ? _c("div", { staticClass: "nodata" }, [_vm._v("暂无数据")])
          : _vm._e(),
      ],
      2
    ),
    _vm.tshjzwr.length > 0
      ? _c(
          "div",
          {
            staticClass: "company-info",
            staticStyle: { margin: "0px 10px 6px", "text-align": "center" },
            on: {
              click: function ($event) {
                return _vm.getMore3()
              },
            },
          },
          [
            _c("span", { staticClass: "more" }, [
              _vm._v(_vm._s(_vm.showMore3 ? "查看更多" : "收起")),
            ]),
          ]
        )
      : _vm._e(),
    _vm._m(8),
    _c(
      "div",
      { class: _vm.showMore4 ? "moreheight" : "" },
      [
        _vm._l(_vm.wzz, function (item) {
          return [
            _c(
              "div",
              {
                staticClass: "company-info",
                staticStyle: { margin: "6px 10px 0px" },
              },
              [
                _c("div", { staticClass: "pol_other" }, [
                  _c("span", { staticClass: "pol_first" }, [
                    _vm._v("无组织排放口"),
                  ]),
                  _c("span", { staticClass: "pol_second" }, [
                    _vm._v(_vm._s(item.type)),
                  ]),
                ]),
              ]
            ),
            _c(
              "div",
              {
                staticClass: "company-info",
                staticStyle: {
                  margin: "6px 10px 0px",
                  background: "rgba(250, 250, 250, 1)",
                },
              },
              [
                _c(
                  "div",
                  { staticClass: "main_content" },
                  [
                    _vm._m(9, true),
                    _vm._l(item.details, function (item) {
                      return _c("div", { staticClass: "third_w no_bottom" }, [
                        _c("span", { staticClass: "pol_factor" }, [
                          _vm._v(_vm._s(item.code)),
                        ]),
                        _c("span", { staticClass: "pol_factor" }, [
                          _vm._v(_vm._s(item.name)),
                        ]),
                        _c("span", { staticClass: "pol_factor" }, [
                          _vm._v(_vm._s(item.value)),
                        ]),
                      ])
                    }),
                  ],
                  2
                ),
              ]
            ),
          ]
        }),
        _vm.wzz.length == 0
          ? _c("div", { staticClass: "nodata" }, [_vm._v("暂无数据")])
          : _vm._e(),
      ],
      2
    ),
    _vm.wzz.length > 0
      ? _c(
          "div",
          {
            staticClass: "company-info",
            staticStyle: { margin: "0px 10px 6px", "text-align": "center" },
            on: {
              click: function ($event) {
                return _vm.getMore4()
              },
            },
          },
          [
            _c("span", { staticClass: "more" }, [
              _vm._v(_vm._s(_vm.showMore4 ? "查看更多" : "收起")),
            ]),
          ]
        )
      : _vm._e(),
    _vm._m(10),
    _c(
      "div",
      { class: _vm.showMore5 ? "moreheight" : "" },
      [
        _vm._l(_vm.zxjcList, function (item) {
          return [
            _c(
              "div",
              {
                staticClass: "company-info",
                staticStyle: { margin: "6px 10px 0px" },
              },
              [
                _c("div", { staticClass: "main_content" }, [
                  _c("div", { staticClass: "whole_width no_bottom" }, [
                    _c(
                      "span",
                      {
                        staticStyle: {
                          display: "inline-block",
                          "margin-right": "8px",
                        },
                      },
                      [_vm._v("排放口编号")]
                    ),
                    _c("span", { staticStyle: { display: "inline-block" } }, [
                      _vm._v(_vm._s(item.outCode)),
                    ]),
                  ]),
                  _c("div", { staticClass: "whole_width no_bottom" }, [
                    _c(
                      "span",
                      {
                        staticStyle: {
                          display: "inline-block",
                          "margin-right": "8px",
                        },
                      },
                      [_vm._v("监测内容")]
                    ),
                    _c("span", { staticStyle: { display: "inline-block" } }, [
                      _vm._v(_vm._s(item.list[0].moncontent)),
                    ]),
                  ]),
                ]),
              ]
            ),
            _vm._l(item.list, function (item2, i) {
              return _c(
                "div",
                {
                  staticClass: "company-info",
                  staticStyle: {
                    margin: "6px 10px 0px",
                    background: "rgba(250, 250, 250, 1)",
                  },
                },
                [
                  _c("div", { staticClass: "rad_title" }, [
                    _c(
                      "span",
                      {
                        staticClass: "active",
                        on: {
                          click: function ($event) {
                            return _vm.changeTab(i)
                          },
                        },
                      },
                      [_vm._v(_vm._s(item2.sjlx))]
                    ),
                  ]),
                  _c(
                    "div",
                    {
                      staticClass: "main_content",
                      staticStyle: { padding: "5px 0px 5px 20px" },
                    },
                    [
                      _c("div", { staticClass: "half_width" }, [
                        _c("span", [_vm._v("污染物种类")]),
                        _c("span", [_vm._v(_vm._s(item2.wrwname))]),
                      ]),
                      _c("div", { staticClass: "half_width" }, [
                        _c("span", [_vm._v("监测设施")]),
                        _c("span", [_vm._v(_vm._s(item2.monitorname))]),
                      ]),
                      _c("div", { staticClass: "half_width" }, [
                        _c("span", [_vm._v("自动监测是否联网")]),
                        _c("span", [_vm._v(_vm._s(item2.islinkscode))]),
                      ]),
                      _c("div", { staticClass: "half_width" }, [
                        _c("span", [_vm._v("自动监测仪器名称")]),
                        _c("span", [_vm._v(_vm._s(item2.instrument))]),
                      ]),
                      _c("div", { staticClass: "half_width" }, [
                        _c("span", [_vm._v("自动监测设施安转位置")]),
                        _c("span", [_vm._v(_vm._s(item2.position))]),
                      ]),
                      _c("div", { staticClass: "half_width" }, [
                        _c("span", [_vm._v("自动监测设施是否符合管理要求")]),
                        _c("span", [_vm._v(_vm._s(item2.issafe))]),
                      ]),
                      _c("div", { staticClass: "half_width" }, [
                        _c("span", [_vm._v("手工监测采样方法及个数")]),
                        _c("span", [_vm._v(_vm._s(item2.qtmonitorsampname))]),
                      ]),
                      _c("div", { staticClass: "half_width" }, [
                        _c("span", [_vm._v("手工监测频次")]),
                        _c("span", [_vm._v(_vm._s(item2.qtmonitorfreqname))]),
                      ]),
                      _c("div", { staticClass: "whole_width" }, [
                        _c("span", [_vm._v("手动测定方法")]),
                        _c("span", [_vm._v(_vm._s(item2.testmethodname))]),
                      ]),
                    ]
                  ),
                ]
              )
            }),
          ]
        }),
        _vm.zxjcList.length == 0
          ? _c("div", { staticClass: "nodata" }, [_vm._v("暂无数据")])
          : _vm._e(),
      ],
      2
    ),
    _vm.zxjcList.length > 0
      ? _c(
          "div",
          {
            staticClass: "company-info",
            staticStyle: { margin: "0px 10px 6px", "text-align": "center" },
            on: {
              click: function ($event) {
                return _vm.getMore5()
              },
            },
          },
          [
            _c("span", { staticClass: "more" }, [
              _vm._v(_vm._s(_vm.showMore5 ? "查看更多" : "收起")),
            ]),
          ]
        )
      : _vm._e(),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "online_blue" }, [
      _c("span", [_vm._v("大气污染有组织排放许可限值")]),
      _c("span"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "company-info", staticStyle: { margin: "6px 10px 0px" } },
      [_c("span", { staticClass: "pol_title" }, [_vm._v("主要排放口合计")])]
    )
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "third_w no_bottom tabtletitle" }, [
      _c("span", [_vm._v("排放口编号")]),
      _c("span", [_vm._v("污染物种类")]),
      _c("span", [_vm._v("许可年排放限值")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "half_w no_bottom tabtletitle" }, [
      _c("span", [_vm._v("污染物种类")]),
      _c("span", [_vm._v("许可排放小时限值")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "online_blue" }, [
      _c("span", [_vm._v("特殊情况下环境质量限期达标规划要求")]),
      _c("span"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "third_w no_bottom tabtletitle" }, [
      _c("span", [_vm._v("排放口编号")]),
      _c("span", [_vm._v("污染物种类")]),
      _c("span", [_vm._v("许可排放小时限值")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "online_blue" }, [
      _c("span", [_vm._v("特殊情况下重污染天气应对要求")]),
      _c("span"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "third_w no_bottom tabtletitle" }, [
      _c("span", [_vm._v("排放口编号")]),
      _c("span", [_vm._v("污染物种类")]),
      _c("span", [_vm._v("许可排放小时限值")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "online_blue" }, [
      _c("span", [_vm._v("大气无组织排放许可条件")]),
      _c("span"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "third_w no_bottom tabtletitle" }, [
      _c("span", [_vm._v("排放口编号")]),
      _c("span", [_vm._v("污染物种类")]),
      _c("span", [_vm._v("日均浓度限值")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "online_blue" }, [
      _c("span", [_vm._v("自行监测要求")]),
      _c("span"),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/portInfoDetail.vue?vue&type=template&id=1121142f&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/portInfoDetail.vue?vue&type=template&id=1121142f&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticStyle: { background: "rgba(255, 255, 255, 1)" } },
    [
      _c("van-nav-bar", {
        attrs: { title: _vm.title + "详情", "left-arrow": "" },
        on: {
          "click-left": function ($event) {
            return _vm.$router.go(-1)
          },
        },
      }),
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
            [_vm._v(_vm._s(item))]
          )
        }),
        0
      ),
      _c(
        "div",
        {
          staticStyle: {
            height: "calc(100vh - 17vh)",
            "overflow-y": "auto",
            "overflow-x": "hidden",
          },
        },
        [
          _vm.tabIndex == 0 ? _c("online-site-info") : _vm._e(),
          _vm.tabIndex == 1
            ? _c("pollution-licence-info", { attrs: { dataId: _vm.dataId } })
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/components/onlineSiteInfo.vue?vue&type=style&index=0&id=2af0837c&lang=scss&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/components/onlineSiteInfo.vue?vue&type=style&index=0&id=2af0837c&lang=scss&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "tr[data-v-2af0837c] {\n  display: flex;\n}\ntd[data-v-2af0837c],\nth[data-v-2af0837c] {\n  display: inline-block;\n  width: 90px;\n}\n.into-map[data-v-2af0837c] {\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 14px;\n  font-weight: normal;\n}\n.port_tab[data-v-2af0837c] {\n  margin: 10px 20px;\n  display: flex;\n}\n.port_tab > div[data-v-2af0837c] {\n  width: 33%;\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 20px;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: center;\n  vertical-align: top;\n}\n.port_tab > div > span[data-v-2af0837c] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 4px 18px 4px 18px;\n}\n.port_tab .active > span[data-v-2af0837c] {\n  display: inline-block;\n  width: 52%;\n  opacity: 1;\n  border-radius: 28px;\n  background: linear-gradient(225deg, #4975ec 0%, #97b3ff 100%);\n  box-shadow: 0px 2px 10px rgba(84, 125, 239, 0.4);\n  color: #fff;\n}\n.search-content[data-v-2af0837c] {\n  display: flex;\n  align-items: center;\n  margin: 0 30px 10px 35px;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.search-content .search-item[data-v-2af0837c] {\n  width: 35%;\n  padding: 6px;\n  background: #f6f6f6;\n  border-radius: 6px;\n  color: rgba(0, 0, 0, 0.8);\n}\n.factor[data-v-2af0837c] {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 0px 10px;\n}\n.factor > div[data-v-2af0837c] {\n  margin: 5px;\n  border-radius: 4px;\n  background: linear-gradient(180deg, rgba(68, 123, 252, 0) 0%, rgba(68, 123, 252, 0.06) 100%), white;\n  border: 1px solid white;\n  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.05);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 3px 13px 3px 13px;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 18px;\n  color: rgba(18, 18, 54, 0.8);\n}\n.factor .active[data-v-2af0837c] {\n  color: white;\n  background: #447bfc;\n}\n.site-module[data-v-2af0837c] {\n  align-items: center;\n}\n.site_content[data-v-2af0837c] {\n  font-size: 14px;\n  font-weight: 400;\n  letter-spacing: 0px;\n  line-height: 20.27px;\n  color: #121236;\n  margin: 0px 12px 0 5px;\n}\n.site_date[data-v-2af0837c] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #447bfc;\n  text-align: left;\n  vertical-align: top;\n}\n.site_right[data-v-2af0837c] {\n  margin-left: auto;\n}\n.company_title_tip[data-v-2af0837c] {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 20px;\n  padding: 0 6px;\n}\n.nodata[data-v-2af0837c] {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 22px;\n  color: #121236;\n  text-align: center;\n  vertical-align: top;\n  margin: 5px 0px;\n}\n.site_exceed_content[data-v-2af0837c] {\n  display: block;\n  width: 100%;\n}\n.site_exceed_content .van-list[data-v-2af0837c] {\n  width: 100%;\n}\n.site_exceed_content .site_exceed_li[data-v-2af0837c] {\n  display: flex;\n  padding: 5px 10px;\n  height: 25px;\n}\n.site_exceed_content .site_exceed_li > span[data-v-2af0837c] {\n  display: inline-block;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 20px;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: left;\n  vertical-align: middle;\n  margin-top: 2px;\n}\n.site_exceed_content .site_exceed_li > span[data-v-2af0837c]:nth-child(2n) {\n  padding: 1px 5px;\n  margin-left: 10px;\n  margin-top: 0px;\n}\n.site_exceed_content .site_exceed_li > span[data-v-2af0837c]:nth-child(3) {\n  margin-left: auto;\n}\n.site_exceed_content .site_exceed_li > img[data-v-2af0837c] {\n  height: 10px;\n  margin: 7px 15px 0px 8px;\n}\n.site_square[data-v-2af0837c] {\n  width: calc(100% - 90px);\n  display: flex;\n  margin-left: 20px;\n}\n.site_square > div[data-v-2af0837c] {\n  text-align: right;\n}\n.site_square > div > span[data-v-2af0837c] {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 20px;\n  color: #121236;\n  text-align: left;\n  vertical-align: top;\n  margin-top: 2px;\n}\n.site_square > div > span[data-v-2af0837c]:first-child {\n  width: 14px;\n  height: 14px;\n  border-radius: 2px;\n  display: inline-block;\n  margin-right: 6px;\n}\n.site_square > div .red_square[data-v-2af0837c] {\n  background: #ff5733;\n}\n.site_square > div .blue_square[data-v-2af0837c] {\n  background: #7948ea;\n}\n.site_square > div .green_square[data-v-2af0837c] {\n  background: #00baad;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/components/pollutionLicenceInfo.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/components/pollutionLicenceInfo.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".pollutionLicenceInfo .main_content > div.third_w,\n.pollutionLicenceInfo .main_content > div.half_w {\n  display: flex;\n  width: 100%;\n}\n.pollutionLicenceInfo .main_content > div.third_w > span,\n.pollutionLicenceInfo .main_content > div.half_w > span {\n  flex: 1;\n  color: #121236;\n}\n.pollutionLicenceInfo .main_content > div.tabtletitle > span {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 20px;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: left;\n  vertical-align: top;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/components/pollutionLicenceInfo.vue?vue&type=style&index=1&id=f9013462&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/components/pollutionLicenceInfo.vue?vue&type=style&index=1&id=f9013462&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".moreheight[data-v-f9013462] {\n  max-height: 270px;\n  overflow: hidden;\n}\n.nodata[data-v-f9013462] {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 22px;\n  color: #121236;\n  text-align: center;\n  vertical-align: top;\n  margin: 5px 0px;\n}\n.pol_title[data-v-f9013462] {\n  display: inline-block;\n  padding: 5px 20px;\n  font-size: 14px;\n  font-weight: 500;\n  letter-spacing: 0px;\n  line-height: 22px;\n  color: #121236;\n  text-align: left;\n  vertical-align: top;\n}\n.pol_factor[data-v-f9013462] {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 22px;\n  color: #121236;\n  text-align: left;\n  vertical-align: top;\n  margin: 5px 0px;\n}\n.pol_other[data-v-f9013462] {\n  display: flex;\n  padding: 10px 20px 5px;\n}\n.pol_other .pol_first[data-v-f9013462] {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 22px;\n  color: rgba(18, 18, 54, 0.5);\n  text-align: left;\n  vertical-align: bottom;\n}\n.pol_other .pol_second[data-v-f9013462] {\n  font-size: 14px;\n  font-weight: 400;\n  line-height: 22px;\n  color: #121236;\n  text-align: left;\n  vertical-align: bottom;\n  margin-left: 20px;\n}\n.pol_other .pol_thrid[data-v-f9013462] {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 22px;\n  color: #447bfc;\n  text-align: left;\n  vertical-align: bottom;\n  margin-left: auto;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/portInfoDetail.vue?vue&type=style&index=0&id=1121142f&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/portInfoDetail.vue?vue&type=style&index=0&id=1121142f&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @/assets/pollution-tab-bg.png */ "./src/assets/pollution-tab-bg.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, ".into-map[data-v-1121142f] {\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 14px;\n  font-weight: normal;\n}\n.tab-wrapper[data-v-1121142f] {\n  margin: 10px 0;\n  background: #fff;\n  padding: 0px 0px 10px;\n  box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.03);\n}\n.tab-wrapper .tab-item[data-v-1121142f] {\n  width: 50%;\n  text-align: center;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 14px;\n}\n.tab-wrapper .active[data-v-1121142f] {\n  color: rgba(18, 18, 54, 0.8);\n  font-weight: bold;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat;\n  background-position: center bottom;\n  background-size: 27px 8px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/components/onlineSiteInfo.vue?vue&type=style&index=0&id=2af0837c&lang=scss&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/components/onlineSiteInfo.vue?vue&type=style&index=0&id=2af0837c&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./onlineSiteInfo.vue?vue&type=style&index=0&id=2af0837c&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/components/onlineSiteInfo.vue?vue&type=style&index=0&id=2af0837c&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("77ed1ab9", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/components/pollutionLicenceInfo.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/components/pollutionLicenceInfo.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pollutionLicenceInfo.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/components/pollutionLicenceInfo.vue?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("48f12830", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/components/pollutionLicenceInfo.vue?vue&type=style&index=1&id=f9013462&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/components/pollutionLicenceInfo.vue?vue&type=style&index=1&id=f9013462&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pollutionLicenceInfo.vue?vue&type=style&index=1&id=f9013462&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/components/pollutionLicenceInfo.vue?vue&type=style&index=1&id=f9013462&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("7cda8c4b", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/portInfoDetail.vue?vue&type=style&index=0&id=1121142f&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/portInfoDetail.vue?vue&type=style&index=0&id=1121142f&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./portInfoDetail.vue?vue&type=style&index=0&id=1121142f&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/portInfoDetail.vue?vue&type=style&index=0&id=1121142f&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("3a4fc1a4", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/polluter/exceed.png":
/*!****************************************!*\
  !*** ./src/assets/polluter/exceed.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAAOCAYAAAD0f5bSAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAD7SURBVCiRjc+9SsRAFMXx/5lNRK1t3dZKC0W2sBGDhQg+gFpvbWXAD9hGUMQHsLFZwSewS2Ehtj6CsCCWNhbLJpNrs0UyayS3m8v5nZkRwSTnxZHQKdgq4o28c5jdaFTNuBq4nGwKHsHWAGFsEfmHsLiGVOogDADJ9sCWGpHhvv5AOfDTiOa9ewI+A3T/MtC4ET1f6xvprrpbiDtpeLULFzLbq57Hud//F+2cTdYNdqu7EqUbfYtrxclFMRQsAw6jB8yFzYgR8DFtuY1kHM+EwjG6QHf6/veZP7WZyFAqlYuthZFFkbmhV7nSEhTZVfwaFc73hE7aGTyQ/AKb7ka+///D8AAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/polluter/right.png":
/*!***************************************!*\
  !*** ./src/assets/polluter/right.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAICAYAAADeM14FAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAABgSURBVAiZRYsxDkBAFAXnEwoJ4q+QOIJ2E/9GDqDUOgGHcxaFhEJ2vW4m81C1TdUq/o25qu1BCsAw+OK60gNkkdA1ja9F0j0J4r7JnocTgLL0rXPTCghdZ32E72tzBOAFPykPToGYVDcAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/pollution-tab-bg.png":
/*!*****************************************!*\
  !*** ./src/assets/pollution-tab-bg.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADcAAAAQCAYAAACycufIAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADnSURBVEiJ3ZTRacRADETfaNekgOvheshfwlWVj4ATDNeUA5c20sMVEIitfKwVu4A7TDSw7EqsBg0SIzY4vfojzsGYzCcqokoUoLqoQGWaK1YKLDFzu90K2sSy9mf2StRKBby958ixcin+a8lp5WPhi/rg803cjiF/G4eu15+w3o/8cAT49+IA5M9GXjyt4iYOOzZyF6ziPJe4ceh6Azi9eCphgTa5h1xTAy6wXctMkH9CiEtoJhDikpkJmddyHLoLgGV1SgDL6pSQcS0XpwQwvrnu2cs9YR9nXal87d3ITeD+Pg5dH+EvPNFNNRNXy44AAAAASUVORK5CYII="

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

/***/ "./src/views/pollution/detail/components/onlineSiteInfo.vue":
/*!******************************************************************!*\
  !*** ./src/views/pollution/detail/components/onlineSiteInfo.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _onlineSiteInfo_vue_vue_type_template_id_2af0837c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./onlineSiteInfo.vue?vue&type=template&id=2af0837c&scoped=true& */ "./src/views/pollution/detail/components/onlineSiteInfo.vue?vue&type=template&id=2af0837c&scoped=true&");
/* harmony import */ var _onlineSiteInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./onlineSiteInfo.vue?vue&type=script&lang=js& */ "./src/views/pollution/detail/components/onlineSiteInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _onlineSiteInfo_vue_vue_type_style_index_0_id_2af0837c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./onlineSiteInfo.vue?vue&type=style&index=0&id=2af0837c&lang=scss&scoped=true& */ "./src/views/pollution/detail/components/onlineSiteInfo.vue?vue&type=style&index=0&id=2af0837c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _onlineSiteInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _onlineSiteInfo_vue_vue_type_template_id_2af0837c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _onlineSiteInfo_vue_vue_type_template_id_2af0837c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2af0837c",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/pollution/detail/components/onlineSiteInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/pollution/detail/components/onlineSiteInfo.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./src/views/pollution/detail/components/onlineSiteInfo.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_onlineSiteInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./onlineSiteInfo.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/components/onlineSiteInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_onlineSiteInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/pollution/detail/components/onlineSiteInfo.vue?vue&type=style&index=0&id=2af0837c&lang=scss&scoped=true&":
/*!****************************************************************************************************************************!*\
  !*** ./src/views/pollution/detail/components/onlineSiteInfo.vue?vue&type=style&index=0&id=2af0837c&lang=scss&scoped=true& ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_onlineSiteInfo_vue_vue_type_style_index_0_id_2af0837c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./onlineSiteInfo.vue?vue&type=style&index=0&id=2af0837c&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/components/onlineSiteInfo.vue?vue&type=style&index=0&id=2af0837c&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_onlineSiteInfo_vue_vue_type_style_index_0_id_2af0837c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_onlineSiteInfo_vue_vue_type_style_index_0_id_2af0837c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_onlineSiteInfo_vue_vue_type_style_index_0_id_2af0837c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_onlineSiteInfo_vue_vue_type_style_index_0_id_2af0837c_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/pollution/detail/components/onlineSiteInfo.vue?vue&type=template&id=2af0837c&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./src/views/pollution/detail/components/onlineSiteInfo.vue?vue&type=template&id=2af0837c&scoped=true& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_onlineSiteInfo_vue_vue_type_template_id_2af0837c_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./onlineSiteInfo.vue?vue&type=template&id=2af0837c&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/components/onlineSiteInfo.vue?vue&type=template&id=2af0837c&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_onlineSiteInfo_vue_vue_type_template_id_2af0837c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_onlineSiteInfo_vue_vue_type_template_id_2af0837c_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/pollution/detail/components/pollutionLicenceInfo.vue":
/*!************************************************************************!*\
  !*** ./src/views/pollution/detail/components/pollutionLicenceInfo.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pollutionLicenceInfo_vue_vue_type_template_id_f9013462_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pollutionLicenceInfo.vue?vue&type=template&id=f9013462&scoped=true& */ "./src/views/pollution/detail/components/pollutionLicenceInfo.vue?vue&type=template&id=f9013462&scoped=true&");
/* harmony import */ var _pollutionLicenceInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pollutionLicenceInfo.vue?vue&type=script&lang=js& */ "./src/views/pollution/detail/components/pollutionLicenceInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _pollutionLicenceInfo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pollutionLicenceInfo.vue?vue&type=style&index=0&lang=scss& */ "./src/views/pollution/detail/components/pollutionLicenceInfo.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _pollutionLicenceInfo_vue_vue_type_style_index_1_id_f9013462_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pollutionLicenceInfo.vue?vue&type=style&index=1&id=f9013462&lang=scss&scoped=true& */ "./src/views/pollution/detail/components/pollutionLicenceInfo.vue?vue&type=style&index=1&id=f9013462&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _pollutionLicenceInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pollutionLicenceInfo_vue_vue_type_template_id_f9013462_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pollutionLicenceInfo_vue_vue_type_template_id_f9013462_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "f9013462",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/pollution/detail/components/pollutionLicenceInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/pollution/detail/components/pollutionLicenceInfo.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./src/views/pollution/detail/components/pollutionLicenceInfo.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionLicenceInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pollutionLicenceInfo.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/components/pollutionLicenceInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionLicenceInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/pollution/detail/components/pollutionLicenceInfo.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************!*\
  !*** ./src/views/pollution/detail/components/pollutionLicenceInfo.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionLicenceInfo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pollutionLicenceInfo.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/components/pollutionLicenceInfo.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionLicenceInfo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionLicenceInfo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionLicenceInfo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionLicenceInfo_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/pollution/detail/components/pollutionLicenceInfo.vue?vue&type=style&index=1&id=f9013462&lang=scss&scoped=true&":
/*!**********************************************************************************************************************************!*\
  !*** ./src/views/pollution/detail/components/pollutionLicenceInfo.vue?vue&type=style&index=1&id=f9013462&lang=scss&scoped=true& ***!
  \**********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionLicenceInfo_vue_vue_type_style_index_1_id_f9013462_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pollutionLicenceInfo.vue?vue&type=style&index=1&id=f9013462&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/components/pollutionLicenceInfo.vue?vue&type=style&index=1&id=f9013462&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionLicenceInfo_vue_vue_type_style_index_1_id_f9013462_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionLicenceInfo_vue_vue_type_style_index_1_id_f9013462_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionLicenceInfo_vue_vue_type_style_index_1_id_f9013462_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionLicenceInfo_vue_vue_type_style_index_1_id_f9013462_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/pollution/detail/components/pollutionLicenceInfo.vue?vue&type=template&id=f9013462&scoped=true&":
/*!*******************************************************************************************************************!*\
  !*** ./src/views/pollution/detail/components/pollutionLicenceInfo.vue?vue&type=template&id=f9013462&scoped=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionLicenceInfo_vue_vue_type_template_id_f9013462_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pollutionLicenceInfo.vue?vue&type=template&id=f9013462&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/components/pollutionLicenceInfo.vue?vue&type=template&id=f9013462&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionLicenceInfo_vue_vue_type_template_id_f9013462_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionLicenceInfo_vue_vue_type_template_id_f9013462_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/pollution/detail/portInfoDetail.vue":
/*!*******************************************************!*\
  !*** ./src/views/pollution/detail/portInfoDetail.vue ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _portInfoDetail_vue_vue_type_template_id_1121142f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./portInfoDetail.vue?vue&type=template&id=1121142f&scoped=true& */ "./src/views/pollution/detail/portInfoDetail.vue?vue&type=template&id=1121142f&scoped=true&");
/* harmony import */ var _portInfoDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./portInfoDetail.vue?vue&type=script&lang=js& */ "./src/views/pollution/detail/portInfoDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _portInfoDetail_vue_vue_type_style_index_0_id_1121142f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./portInfoDetail.vue?vue&type=style&index=0&id=1121142f&lang=scss&scoped=true& */ "./src/views/pollution/detail/portInfoDetail.vue?vue&type=style&index=0&id=1121142f&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _portInfoDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _portInfoDetail_vue_vue_type_template_id_1121142f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _portInfoDetail_vue_vue_type_template_id_1121142f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "1121142f",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/pollution/detail/portInfoDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/pollution/detail/portInfoDetail.vue?vue&type=script&lang=js&":
/*!********************************************************************************!*\
  !*** ./src/views/pollution/detail/portInfoDetail.vue?vue&type=script&lang=js& ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_portInfoDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./portInfoDetail.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/portInfoDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_portInfoDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/pollution/detail/portInfoDetail.vue?vue&type=style&index=0&id=1121142f&lang=scss&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./src/views/pollution/detail/portInfoDetail.vue?vue&type=style&index=0&id=1121142f&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_portInfoDetail_vue_vue_type_style_index_0_id_1121142f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./portInfoDetail.vue?vue&type=style&index=0&id=1121142f&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/portInfoDetail.vue?vue&type=style&index=0&id=1121142f&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_portInfoDetail_vue_vue_type_style_index_0_id_1121142f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_portInfoDetail_vue_vue_type_style_index_0_id_1121142f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_portInfoDetail_vue_vue_type_style_index_0_id_1121142f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_portInfoDetail_vue_vue_type_style_index_0_id_1121142f_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/pollution/detail/portInfoDetail.vue?vue&type=template&id=1121142f&scoped=true&":
/*!**************************************************************************************************!*\
  !*** ./src/views/pollution/detail/portInfoDetail.vue?vue&type=template&id=1121142f&scoped=true& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_portInfoDetail_vue_vue_type_template_id_1121142f_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./portInfoDetail.vue?vue&type=template&id=1121142f&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/portInfoDetail.vue?vue&type=template&id=1121142f&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_portInfoDetail_vue_vue_type_template_id_1121142f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_portInfoDetail_vue_vue_type_template_id_1121142f_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvY29tcG9uZW50cy9vbmxpbmVTaXRlSW5mby52dWUiLCJ3ZWJwYWNrOi8vL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2NvbXBvbmVudHMvcG9sbHV0aW9uTGljZW5jZUluZm8udnVlIiwid2VicGFjazovLy9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9wb3J0SW5mb0RldGFpbC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvY29tcG9uZW50cy9vbmxpbmVTaXRlSW5mby52dWU/ODJhMSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9jb21wb25lbnRzL3BvbGx1dGlvbkxpY2VuY2VJbmZvLnZ1ZT85MzYyIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL3BvcnRJbmZvRGV0YWlsLnZ1ZT9mNWE2Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9pbnRlcm5hbHMvZG9lcy1ub3QtZXhjZWVkLXNhZmUtaW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzLmFycmF5LmNvbmNhdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvY29tcG9uZW50cy9vbmxpbmVTaXRlSW5mby52dWU/YzA4YiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9jb21wb25lbnRzL3BvbGx1dGlvbkxpY2VuY2VJbmZvLnZ1ZT8xYmZjIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2NvbXBvbmVudHMvcG9sbHV0aW9uTGljZW5jZUluZm8udnVlPzExMTQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvcG9ydEluZm9EZXRhaWwudnVlP2E4NjQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvY29tcG9uZW50cy9vbmxpbmVTaXRlSW5mby52dWU/MjU3MSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9jb21wb25lbnRzL3BvbGx1dGlvbkxpY2VuY2VJbmZvLnZ1ZT8zNzIxIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2NvbXBvbmVudHMvcG9sbHV0aW9uTGljZW5jZUluZm8udnVlPzY4OTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvcG9ydEluZm9EZXRhaWwudnVlP2I3OTciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wb2xsdXRlci9leGNlZWQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcG9sbHV0ZXIvcmlnaHQucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcG9sbHV0aW9uLXRhYi1iZy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWxzL3NldGRhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvY29tcG9uZW50cy9vbmxpbmVTaXRlSW5mby52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvY29tcG9uZW50cy9vbmxpbmVTaXRlSW5mby52dWU/MTUyNiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9jb21wb25lbnRzL29ubGluZVNpdGVJbmZvLnZ1ZT84YWYyIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2NvbXBvbmVudHMvb25saW5lU2l0ZUluZm8udnVlP2MwZGEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvY29tcG9uZW50cy9wb2xsdXRpb25MaWNlbmNlSW5mby52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvY29tcG9uZW50cy9wb2xsdXRpb25MaWNlbmNlSW5mby52dWU/ODk3NyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9jb21wb25lbnRzL3BvbGx1dGlvbkxpY2VuY2VJbmZvLnZ1ZT8xMjMwIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2NvbXBvbmVudHMvcG9sbHV0aW9uTGljZW5jZUluZm8udnVlPzhhZTUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvY29tcG9uZW50cy9wb2xsdXRpb25MaWNlbmNlSW5mby52dWU/ZWJhMyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9wb3J0SW5mb0RldGFpbC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvcG9ydEluZm9EZXRhaWwudnVlP2FkMzYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvcG9ydEluZm9EZXRhaWwudnVlP2E1MjgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvcG9ydEluZm9EZXRhaWwudnVlP2MwYWIiXSwibmFtZXMiOlsiZ2V0VGhpc0RhdGUiLCJlIiwibm93VGltZSIsInRpbWUiLCJEYXRlIiwieSIsImdldEZ1bGxZZWFyIiwibG0iLCJnZXRNb250aCIsIm0iLCJkIiwiZ2V0RGF0ZSIsImgiLCJnZXRIb3VycyIsIk0iLCJnZXRNaW51dGVzIiwicyIsImdldFNlY29uZHMiLCJmb3JtYXREYXRlIiwiZGF0ZSIsIm4iLCJob3VyRGF0ZUZvcm1hdCIsInllYXIiLCJtb250aCIsImRheSIsImhvdXIiLCJtb250aERhdGVGb3JtYXQiLCJmb3VySG91clRpbWUiLCJub3dEYXRlIiwiaG91cnMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFvTUE7QUFDQTtBQUNBO0FBY0E7QUFDQTtBQUNBLHdCQURBO0FBRUEsTUFGQSxrQkFFQTtBQUNBO0FBQ0EseUZBREE7QUFFQSw4QkFGQTtBQUdBLHNCQUhBO0FBSUEscUJBSkE7QUFLQSxnQkFDQTtBQUFBO0FBQUE7QUFBQSxPQURBLEVBRUE7QUFBQTtBQUFBO0FBQUEsT0FGQSxFQUdBO0FBQUE7QUFBQTtBQUFBLE9BSEEsQ0FJQTtBQUpBLE9BTEE7QUFXQSxhQUNBO0FBQUE7QUFBQTtBQUFBLE9BREEsRUFFQTtBQUFBO0FBQUE7QUFBQSxPQUZBLEVBR0E7QUFBQTtBQUFBO0FBQUEsT0FIQSxFQUlBO0FBQUE7QUFBQTtBQUFBLE9BSkEsRUFLQTtBQUFBO0FBQUE7QUFBQSxPQUxBLEVBTUE7QUFBQTtBQUFBO0FBQUEsT0FOQSxDQVhBO0FBbUJBLGFBQ0E7QUFBQTtBQUFBO0FBQUEsT0FEQSxFQUVBO0FBQUE7QUFBQTtBQUFBLE9BRkEsRUFHQTtBQUFBO0FBQUE7QUFBQSxPQUhBLEVBSUE7QUFBQTtBQUFBO0FBQUEsT0FKQSxFQUtBO0FBQUE7QUFBQTtBQUFBLE9BTEEsRUFNQTtBQUFBO0FBQUE7QUFBQSxPQU5BLENBbkJBO0FBMkJBLG1CQTNCQTtBQTRCQTtBQUNBLHFCQTdCQTtBQThCQSxzQkE5QkE7QUErQkEsdUJBL0JBO0FBZ0NB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QUFBO0FBQUEsd0NBQW1ULENBQWdCLCtVQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQXZVO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzLzUwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gIDxkaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwicG9ydF90YWJcIj5cclxuICAgICAgPGRpdiB2LWZvcj1cIihpdGVtLCBpKSBpbiBkYXRlQXJyXCIgOmNsYXNzPVwiW2kgPT09IGRhdGVUYWJJbmRleCA/ICdhY3RpdmUnIDogJyddXCIgQGNsaWNrPVwiY2hhbmdlRGF0ZVRhYihpdGVtLCBpKVwiPlxyXG4gICAgICAgIDxzcGFuPnt7IGl0ZW0udGV4dCB9fTwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLWNvbnRlbnQgZnNcIj5cclxuICAgICAg5pWw5o2u5pe26Ze0XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtaXRlbSBmc1wiIEBjbGljaz1cImVuZFBvcCA9IHRydWVcIj5cclxuICAgICAgICA8dmFuLWljb24gbmFtZT1cIm5vdGVzLW9cIiAvPlxyXG4gICAgICAgIHt7IHN0YXJ0VGltZSB9fVxyXG4gICAgICAgIDx2YW4taWNvbiBuYW1lPVwiYXJyb3ctZG93blwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAtLVxyXG4gICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLWl0ZW0gZnNcIiBAY2xpY2s9XCJlbmRQb3AyID0gdHJ1ZVwiPlxyXG4gICAgICAgIDx2YW4taWNvbiBuYW1lPVwibm90ZXMtb1wiIC8+XHJcbiAgICAgICAge3sgZW5kVGltZSB9fVxyXG4gICAgICAgIDx2YW4taWNvbiBuYW1lPVwiYXJyb3ctZG93blwiIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImNvbXBhbnktaW5mb1wiIHN0eWxlPVwibWFyZ2luOiA2cHggMTBweCAwcHhcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbXBhbnlfdGl0bGVcIj5cclxuICAgICAgICA8c3Bhbj7nm5HmtYvlm6DlrZA8L3NwYW4+XHJcbiAgICAgICAgPCEtLSA8c3BhbiBjbGFzcz1cInRpdGxlX3RpcHMgYmx1ZV90aXBzXCI+5Li76KaB5o6S5pS+5Y+jKOe8luWPt0RBMjg0KTwvc3Bhbj4gLS0+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZmFjdG9yXCI+XHJcbiAgICAgICAgPGRpdiB2LWZvcj1cIihpdGVtLCBpKSBpbiBmYWN0b3JBcnJcIiA6Y2xhc3M9XCJbaSA9PT0gZmFjdG9yVGFiSW5kZXggPyAnYWN0aXZlJyA6ICcnXVwiIEBjbGljaz1cImNoYW5nZUZhY3RvclRhYihpdGVtLCBpKVwiPnt7IGl0ZW0ueXptYyB9fTwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiByZWY9XCJmYWN0b3JSZWZcIiBzdHlsZT1cImhlaWdodDogMjAwcHg7IHdpZHRoOiA5MCU7IG1hcmdpbjogMCBhdXRvXCIgLz5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4XCI+XHJcbiAgICAgIDxkaXYgQGNsaWNrPVwiZGlzY29ubmVjdEluZm9cIiBjbGFzcz1cImNvbXBhbnktaW5mbyBzaXRlLW1vZHVsZVwiIHN0eWxlPVwibWFyZ2luOiA2cHggMTBweCAwcHg7d2lkdGg6IDUwJTtkaXNwbGF5OiBmbGV4O3BhZGRpbmc6IDEwcHg7IDVweDtcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInNpdGVfY29udGVudFwiPuaOiee6v+aXtumVvzxiciAvPjxzcGFuIHN0eWxlPVwiZm9udC1zaXplOiAxMHB4XCI+77yI5pys5bm05bqm77yJPC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInNpdGVfZGF0ZVwiPnt7IGR4dGltZSB9feWwj+aXtjwvc3Bhbj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInNpdGVfcmlnaHRcIj48aW1nIHNyYz1cIi4uLy4uLy4uLy4uL2Fzc2V0cy9wb2xsdXRlci9yaWdodC5wbmdcIiAvPjwvc3Bhbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgQGNsaWNrPVwiZXhjZWVkSW5mb1wiIGNsYXNzPVwiY29tcGFueS1pbmZvIHNpdGUtbW9kdWxlXCIgc3R5bGU9XCJtYXJnaW46IDZweCAxMHB4IDBweCAwcHg7d2lkdGg6IDUwJTtkaXNwbGF5OiBmbGV4O3BhZGRpbmc6IDEwcHg7NXB4XCI+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzaXRlX2NvbnRlbnRcIj7ljoblj7LotoXmoIc8YnIgLz48c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMTBweFwiPu+8iOacrOW5tOW6pu+8iTwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzaXRlX2RhdGVcIj57eyBjYnRpbWUgfX3mrKE8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzaXRlX3JpZ2h0XCI+PGltZyBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvcG9sbHV0ZXIvcmlnaHQucG5nXCIgLz48L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cInFyQ29kZS1pbmZvIHJlZEJnXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiA1cHhcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbXBhbnlfdGl0bGVcIj5cclxuICAgICAgICA8aW1nIHNyYz1cIi4uLy4uLy4uLy4uL2Fzc2V0cy9wb2xsdXRlci9leGNlZWQucG5nXCIgLz5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cImJsYWNrX2NvbnRlbnRcIj7nm5Hmjqfku7vliqHlip7nkIbljZU8c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMTBweFwiPu+8iOacrOW5tOW6pu+8iTwvc3Bhbj48L3NwYW4+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRpcHNcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiBhdXRvXCI+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRpcHNfY29sb3JcIj57eyBjYmRkU3VtIH195Lu2PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cInNpdGVfZXhjZWVkX2NvbnRlbnQgdGlwc1wiPlxyXG4gICAgICAgIDxkaXYgQGNsaWNrPVwidXBlcnZpc2lvbkluZm8oaXRlbSlcIiB2LWZvcj1cIml0ZW0gaW4gY2JkZExpc3RcIiBjbGFzcz1cInNpdGVfZXhjZWVkX2xpXCI+XHJcbiAgICAgICAgICA8c3Bhbj57eyBpdGVtLkpDWVpNQyB9fSA8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInRpcHNfY29sb3JcIj57eyBpdGVtLkxYIH19IDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuPnt7IGl0ZW0uRlFTSiB9fTwvc3BhblxyXG4gICAgICAgICAgPjxpbWcgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3BvbGx1dGVyL3JpZ2h0LnBuZ1wiIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIm5vZGF0YVwiIHYtaWY9XCJjYmRkU3VtID09IDBcIj7mmoLml6DmlbDmja48L2Rpdj5cclxuICAgICAgICA8IS0tIDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuPuawruawp+WMlueJqSAo5pe25YC8Ke+8jOeDn+WwmCAo5pe25YC8KTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ0aXBzX2NvbG9yXCI+5pWw5o2u6LaF5qCHPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj4yMDIzLTktMTI8L3NwYW4+PGltZyBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvcG9sbHV0ZXIvcmlnaHQucG5nXCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+IC0tPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPCEtLSBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwicXJDb2RlLWluZm8geWVsbG93QmdcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbXBhbnlfdGl0bGVcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL3BvbGx1dGVyL2p1ZGdlLnBuZ1wiLz5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxhY2tfY29udGVudFwiPueglOWIpOS/oeaBrzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXBzXCIgc3R5bGU9XCJtYXJnaW4tbGVmdDogYXV0bztcIj48c3BhbiBjbGFzcz1cInRpcHNfY29sb3JfeWVsbG93XCI+e3t5cHRvdGFsfX3mnaE8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2l0ZV9leGNlZWRfY29udGVudCB0aXBzXCIgc3R5bGU9XCJoZWlnaHQ6IDE4MHB4O292ZXJmbG93LXk6IGF1dG87XCI+XHJcblx0XHRcdFx0XHRcdFx0PHZhbi1wdWxsLXJlZnJlc2ggdi1tb2RlbD1cInJlZnJlc2hpbmdcIiBAcmVmcmVzaD1cIm9uUmVmcmVzaFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHZhbi1saXN0IHYtbW9kZWw9XCJsb2FkaW5nXCIgOmZpbmlzaGVkPVwiZmluaXNoZWRcIiA6ZmluaXNoZWQtdGV4dD1cInlwTGlzdC5sZW5ndGg9PT0wPycnOifmsqHmnInmm7TlpJrkuoYnXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0OmltbWVkaWF0ZS1jaGVjaz1cImZhbHNlXCIgQGxvYWQ9XCJvbkxvYWRcIiA6b2Zmc2V0PSc1MCc+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgdi1mb3I9XCJpdGVtIGluIHlwTGlzdFwiIEBjbGljaz1cImp1ZGdlSW5mbyhpdGVtKVwiIGNsYXNzPVwic2l0ZV9leGNlZWRfbGlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj57e2l0ZW0ubmFtZX19IDwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cInRpcHNfY29sb3JfeWVsbG93XCI+e3tpdGVtLnR5cGV9fSA8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+e3tpdGVtLmRhdGV9fSA8L3NwYW4+PGltZyBzcmM9XCIuLi8uLi8uLi8uLi9hc3NldHMvcG9sbHV0ZXIvcmlnaHQucG5nXCIvPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvdmFuLWxpc3Q+XHJcblx0XHRcdFx0XHRcdFx0PC92YW4tcHVsbC1yZWZyZXNoPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj4gLS0+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImNvbXBhbnktaW5mb1wiIHN0eWxlPVwibWFyZ2luOiA2cHggMTBweCAwcHhcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNvbXBhbnlfdGl0bGVcIj5cclxuICAgICAgICA8c3Bhbj7nm5HmtYvmlbDmja48L3NwYW4+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNpdGVfc3F1YXJlXCI+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPVwid2lkdGg6IDMwJVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlZF9zcXVhcmVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuPui2heaghzwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBzdHlsZT1cIndpZHRoOiAzMCVcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibHVlX3NxdWFyZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+5pWF6ZqcPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPVwid2lkdGg6IDQwJVwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImdyZWVuX3NxdWFyZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4+6L+Q6KGM57u05oqkPC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY29tcGFueV90aXRsZV90aXBcIj7mraPluLgtTiDosIPor5UtQSDmlYXpmpwtRCDml6XluLjnu7TmiqQtTSDmoKHlh4YtQyDotoXph4/nqIstVCDmuKnluqbkvKDmhJ/lmajmlYXpmpwtVGQg5qC45p+l5a+55q+ULUs8L2Rpdj5cclxuICAgICAgPGRpdiBzdHlsZT1cIndpZHRoOiAxMDAlOyBvdmVyZmxvdzogYXV0b1wiIHYtaWY9XCJ0aW1ldHlwZSAhPSAncmVhbCdcIj5cclxuICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICA8dGhlYWQ+XHJcbiAgICAgICAgICAgIDx0ciBjbGFzcz1cInRhYmxlLWhlYWRlclwiPlxyXG4gICAgICAgICAgICAgIDx0aD7nm5HmtYvml7bpl7Q8L3RoPlxyXG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIml0ZW0gaW4gZmFjdG9yQXJyXCI+XHJcbiAgICAgICAgICAgICAgICA8dGg+e3sgaXRlbS55em1jIH19PC90aD5cclxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC90aGVhZD5cclxuICAgICAgICAgIDx0Ym9keT5cclxuICAgICAgICAgICAgPHRyIHYtZm9yPVwiaXRlbSBpbiB0YWJsZUxpc3RcIj5cclxuICAgICAgICAgICAgICA8dGQ+e3sgaXRlbS5SRUNPUkRfVElNRSA/IGRheWpzKG5ldyBEYXRlKGl0ZW0uUkVDT1JEX1RJTUUpKS5mb3JtYXQoXCJNTS1ERCBISDptbVwiKSA6IFwiXCIgfX08L3RkPlxyXG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cImNvbHVtbiBpbiBmYWN0b3JBcnJcIj5cclxuICAgICAgICAgICAgICAgIDx0ZD57eyBpdGVtW1wiQVZHX1wiICsgY29sdW1uLnl6bWNdIH19Jm5ic3A7e3sgaXRlbVtcIkZMQUdfXCIgKyBjb2x1bW4ueXptY10gfX08L3RkPlxyXG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJub2RhdGFcIiB2LWlmPVwidGFibGVMaXN0Lmxlbmd0aCA9PSAwXCI+5pqC5peg5pWw5o2uPC9kaXY+XHJcbiAgICAgICAgICA8L3Rib2R5PlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IHN0eWxlPVwid2lkdGg6IDEwMCU7IG92ZXJmbG93OiBhdXRvXCIgdi1pZj1cInRpbWV0eXBlID09ICdyZWFsJ1wiPlxyXG4gICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlLXdyYXBwZXJcIj5cclxuICAgICAgICAgIDx0aGVhZD5cclxuICAgICAgICAgICAgPHRyIGNsYXNzPVwidGFibGUtaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgPHRoPuebkea1i+aXtumXtDwvdGg+XHJcbiAgICAgICAgICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiaXRlbSBpbiBmYWN0b3JBcnJcIj5cclxuICAgICAgICAgICAgICAgIDx0aD57eyBpdGVtLnl6bWMgfX08L3RoPlxyXG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDwvdHI+XHJcbiAgICAgICAgICA8L3RoZWFkPlxyXG4gICAgICAgICAgPHRib2R5PlxyXG4gICAgICAgICAgICA8dHIgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIHRhYmxlTGlzdDFcIj5cclxuICAgICAgICAgICAgICA8dGQ+e3sgaXRlbVswXS50aW1lID8gZGF5anMobmV3IERhdGUoaXRlbVswXS50aW1lKSkuZm9ybWF0KFwiTU0tREQgSEg6bW1cIikgOiBcIlwiIH19PC90ZD5cclxuICAgICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCJjb2x1bW4gaW4gaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgPHRkPnt7IGNvbHVtbi5zdGF0dXM9PSdXWVonPyctJzpjb2x1bW4udmFsdWUgfX0mbmJzcDsmbmJzcDsmbmJzcDsmbmJzcDt7eyBjb2x1bW4uc3RhdHVzIH19PC90ZD5cclxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibm9kYXRhXCIgdi1pZj1cInRhYmxlTGlzdC5sZW5ndGggPT0gMFwiPuaaguaXoOaVsOaNrjwvZGl2PlxyXG4gICAgICAgICAgPC90Ym9keT5cclxuICAgICAgICA8L3RhYmxlPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPCEtLSA8ZGl2IHN0eWxlPVwid2lkdGg6IDEwMCU7b3ZlcmZsb3c6IGF1dG9cIiB2LWVsc2U+XHJcblx0XHRcdFx0XHRcdFx0PHRhYmxlIGNsYXNzPVwidGFibGUtd3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHRcdCAgICA8dGhlYWQ+XHJcblx0XHRcdFx0XHRcdFx0ICAgIDx0ciBjbGFzcz1cInRhYmxlLWhlYWRlclwiPlxyXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgPHRoIHN0eWxlPVwid2lkdGg6MTEwcHhcIj7nm5HmtYvml7bpl7Q8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgPHRoPueDn+WwmDwvdGg+XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICA8dGg+5rCu5rCn5YyW54mpPC90aD5cclxuXHRcdFx0XHRcdFx0XHQgICAgICAgIDx0aD7kuozmsKfljJbnoas8L3RoPlxyXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgPHRoPuawp+awlOWQq+mHjzwvdGg+XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICA8dGg+5LiA5rCn5YyW56KzPC90aD5cclxuXHRcdFx0XHRcdFx0XHQgICAgICAgIDx0aD7ng5/msJTmtYHph488L3RoPlxyXG5cdFx0XHRcdFx0XHRcdCAgICA8L3RyPlxyXG5cdFx0XHRcdFx0XHRcdCAgICA8L3RoZWFkPlxyXG5cdFx0XHRcdFx0XHRcdCAgICA8dGJvZHk+XHJcblx0XHRcdFx0XHRcdFx0ICAgIDx0ciB2LWZvcj1cIml0ZW0gaW4gdGFibGVMaXN0XCI+XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICA8dGQgc3R5bGU9XCJ3aWR0aDoxMTBweFwiPnt7aXRlbS5tb25pdG9ydGltZT9kYXlqcyhuZXcgRGF0ZShpdGVtLm1vbml0b3J0aW1lKSkuZm9ybWF0KCdNTS1ERCBISDptbScpOicnfX08L3RkPlxyXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgPHRkPnt7aXRlbS5zb290fX08L3RkPlxyXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgPHRkPnt7aXRlbS5ub3h9fTwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICA8dGQ+e3tpdGVtLnNvMn19PC90ZD5cclxuXHRcdFx0XHRcdFx0XHQgICAgICAgIDx0ZD57e2l0ZW0ubzJ9fTwvdGQ+XHJcblx0XHRcdFx0XHRcdFx0ICAgICAgICA8dGQ+e3tpdGVtLmNvfX08L3RkPlxyXG5cdFx0XHRcdFx0XHRcdCAgICAgICAgPHRkPnt7aXRlbS5hdmdmbG93fX08L3RkPlxyXG5cdFx0XHRcdFx0XHRcdCAgICA8L3RyPlxyXG5cdFx0XHRcdFx0XHRcdCAgICA8L3Rib2R5PlxyXG5cdFx0XHRcdFx0XHRcdDwvdGFibGU+XHJcblx0XHRcdFx0XHRcdDwvZGl2PiAtLT5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwhLS3ml7bpl7QtLT5cclxuICAgIDx2YW4tcG9wdXAgdi1tb2RlbD1cImVuZFBvcFwiIHBvc2l0aW9uPVwiYm90dG9tXCI+XHJcbiAgICAgIDwhLS0gOnR5cGU9XCInZGF0ZXRpbWUnOidkYXRlJ1wiIC0tPlxyXG4gICAgICA8dmFuLWRhdGV0aW1lLXBpY2tlciB2LWlmPVwidGltZXR5cGUgIT0gJ+W5tCdcIiB2LW1vZGVsPVwiY3VycmVudERhdGVcIiA6dHlwZT1cInRpbWV0eXBlIHwgZ2V0VGltZVR5cGUoKVwiIHRpdGxlPVwi6YCJ5oup5bm05pyI5pelXCIgOm1heC1kYXRlPVwibWF4RGF0ZVwiIEBjb25maXJtPVwib25Db25maXJtRW5kVGltZVwiIEBjYW5jZWw9XCJlbmRQb3AgPSBmYWxzZVwiIC8+XHJcbiAgICAgIDx2YW4tcGlja2VyIHYtZWxzZSBzaG93LXRvb2xiYXIgOmNvbHVtbnM9XCJ5ZWFyQ29sdW1uc1wiIHRpdGxlPVwi6YCJ5oup5bm0XCIgOmRlZmF1bHQtaW5kZXg9XCJ5ZWFyU2VsZWN0XCIgQGNvbmZpcm09XCJvbkNvbmZpcm1FbmRUaW1lXCIgQGNhbmNlbD1cImVuZFBvcCA9IGZhbHNlXCIgLz5cclxuICAgIDwvdmFuLXBvcHVwPlxyXG5cclxuICAgIDwhLS3ml7bpl7QtLT5cclxuICAgIDx2YW4tcG9wdXAgdi1tb2RlbD1cImVuZFBvcDJcIiBwb3NpdGlvbj1cImJvdHRvbVwiPlxyXG4gICAgICA8dmFuLWRhdGV0aW1lLXBpY2tlciB2LW1vZGVsPVwiY3VycmVudERhdGUyXCIgOnR5cGU9XCJ0aW1ldHlwZSB8IGdldFRpbWVUeXBlKClcIiB2LWlmPVwidGltZXR5cGUgIT0gJ+W5tCdcIiB0aXRsZT1cIumAieaLqeW5tOaciOaXpVwiIEBjb25maXJtPVwib25Db25maXJtRW5kVGltZTJcIiBAY2FuY2VsPVwiZW5kUG9wMiA9IGZhbHNlXCIgLz5cclxuICAgICAgPHZhbi1waWNrZXIgdi1lbHNlIHNob3ctdG9vbGJhciA6Y29sdW1ucz1cInllYXJDb2x1bW5zXCIgdGl0bGU9XCLpgInmi6nlubRcIiA6ZGVmYXVsdC1pbmRleD1cInllYXJTZWxlY3RcIiBAY29uZmlybT1cIm9uQ29uZmlybUVuZFRpbWUyXCIgQGNhbmNlbD1cImVuZFBvcDIgPSBmYWxzZVwiIC8+XHJcbiAgICA8L3Zhbi1wb3B1cD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcclxuaW1wb3J0ICogYXMgZWNoYXJ0cyBmcm9tIFwiZWNoYXJ0c1wiO1xyXG5pbXBvcnQge1xyXG4gIHdhdGVyRGV2aWNlRGV0YWlsLFxyXG4gIGdhc0RldmljZURldGFpbCxcclxuICBnYXNPdmVyU3RhdCxcclxuICB3YXRlck92ZXJTdGF0LFxyXG4gIGdhc0Rpc2Nvbm5lY3RTdGF0LFxyXG4gIHdhdGVyRGlzY29ubmVjdFN0YXQsXHJcbiAgY2JkYkxpc3QsXHJcbiAgeXBMaXN0LFxyXG4gIGdldEFwcERhdGFMaXN0LFxyXG4gIGdhc0V4Y2VlZFN0YXQsXHJcbiAgZ2V0RGJkU3RhdCxcclxuICBnZXRSZWFsLFxyXG59IGZyb20gXCJAL2FwaS9wb2xsdXRpb25fc291cmNlXCI7XHJcbmltcG9ydCB7IGdldFRoaXNEYXRlIH0gZnJvbSBcIkAvdXRpbHMvc2V0ZGF0ZVwiO1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJvbmxpbmVTaXRlSW5mb1wiLFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjdXJyZW50RGF0ZTogZ2V0VGhpc0RhdGUoNCksXHJcbiAgICAgIGN1cnJlbnREYXRlMjogbmV3IERhdGUoKSxcclxuICAgICAgeWVhclNlbGVjdDogbnVsbCxcclxuICAgICAgeWVhckNvbHVtbnM6IFtdLFxyXG4gICAgICBkYXRlQXJyOiBbXHJcbiAgICAgICAgeyB0ZXh0OiBcIuWunuaXtuaVsOaNrlwiLCB2YWw6IFwicmVhbFwiIH0sXHJcbiAgICAgICAgeyB0ZXh0OiBcIuaXtuWdh+WAvFwiLCB2YWw6IFwiaG91clwiIH0sXHJcbiAgICAgICAgeyB0ZXh0OiBcIuaXpeWdh+WAvFwiLCB2YWw6IFwiZGF5XCIgfSxcclxuICAgICAgICAvLyB7IHRleHQ6J+aciOWAvCcsdmFsOifmnIgnIH0seyB0ZXh0OiflubTlgLwnLHZhbDon5bm0J30sXHJcbiAgICAgIF0sXHJcbiAgICAgIHdBcnI6IFtcclxuICAgICAgICB7IHRleHQ6IFwi5YyW5a2m6ZyA5rCn6YePXCIsIHZhbDogXCJjb2RcIiB9LFxyXG4gICAgICAgIHsgdGV4dDogXCLmsKjmsK5cIiwgdmFsOiBcIm5oM1wiIH0sXHJcbiAgICAgICAgeyB0ZXh0OiBcIuaAu+awrlwiLCB2YWw6IFwiemRcIiB9LFxyXG4gICAgICAgIHsgdGV4dDogXCLmgLvno7dcIiwgdmFsOiBcInpsXCIgfSxcclxuICAgICAgICB7IHRleHQ6IFwiUEjlgLxcIiwgdmFsOiBcInBoXCIgfSxcclxuICAgICAgICB7IHRleHQ6IFwi5rWB6YePXCIsIHZhbDogXCJhdmdmbG93XCIgfSxcclxuICAgICAgXSxcclxuICAgICAgYUFycjogW1xyXG4gICAgICAgIHsgdGV4dDogXCLng5/lsJhcIiwgdmFsOiBcInNvb3RcIiB9LFxyXG4gICAgICAgIHsgdGV4dDogXCLmsK7msKfljJbnialcIiwgdmFsOiBcIm5veFwiIH0sXHJcbiAgICAgICAgeyB0ZXh0OiBcIuS6jOawp+WMluehq1wiLCB2YWw6IFwic28yXCIgfSxcclxuICAgICAgICB7IHRleHQ6IFwi5rCn5rCU5ZCr6YePXCIsIHZhbDogXCJvMlwiIH0sXHJcbiAgICAgICAgeyB0ZXh0OiBcIuS4gOawp+WMlueis1wiLCB2YWw6IFwiY29cIiB9LFxyXG4gICAgICAgIHsgdGV4dDogXCLng5/msJTmtYHph49cIiwgdmFsOiBcImF2Z2Zsb3dcIiB9LFxyXG4gICAgICBdLFxyXG4gICAgICBmYWN0b3JBcnI6IFtdLFxyXG4gICAgICAvLyAn54Of5bCYJywn5rCv5YyW54mpJywn5rCu5rCn5YyW54mpJywn6aKX57KS54mpJywn5rCn5rCUJywn5LqM5rCn5YyW56KzJywn5oC75pyJ5py656KzJ1xyXG4gICAgICBkYXRlVGFiSW5kZXg6IDEsXHJcbiAgICAgIHRpbWV0eXBlOiBcImhvdXJcIixcclxuICAgICAgZmFjdG9yVGFiSW5kZXg6IDAsXHJcbiAgICAgIGZhY3RvcjogXCJcIixcclxuICAgICAgc2VhcmNoOiBcIlwiLFxyXG4gICAgICBzdGFydFRpbWU6IGRheWpzKG5ldyBEYXRlKCkpLmZvcm1hdChcIllZWVktTU0tREQgMDA6MDBcIiksXHJcbiAgICAgIC8vIHN0YXJ0VGltZTonMjAyMS0xMC0xMCcsXHJcbiAgICAgIGVuZFRpbWU6IGRheWpzKG5ldyBEYXRlKCkpLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW1cIiksXHJcbiAgICAgIGVuZFBvcDogZmFsc2UsXHJcbiAgICAgIGVuZFBvcDI6IGZhbHNlLFxyXG4gICAgICB0eXBlOiBcIlwiLFxyXG4gICAgICBwc0NvZGU6IFwiXCIsXHJcbiAgICAgIG9wdGlvbjoge30sXHJcbiAgICAgIGRldmljZUlkOiBcIlwiLFxyXG4gICAgICB0YWJsZUxpc3Q6IFtdLFxyXG4gICAgICB0YWJsZUxpc3QxOiBbXSxcclxuICAgICAgY2hhcnRkYXRhOiBbXSxcclxuICAgICAgdGl0bGU6IFwiXCIsXHJcbiAgICAgIGR4dGltZTogMCxcclxuICAgICAgY2J0aW1lOiAwLFxyXG4gICAgICBjYmRkTGlzdDogW10sXHJcbiAgICAgIGNiZGRTdW06IDAsXHJcbiAgICAgIHlwTGlzdDogW10sXHJcbiAgICAgIHlwdG90YWw6IDAsXHJcbiAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICBmaW5pc2hlZDogZmFsc2UsIC8vIOaYr+WQpuW3suWKoOi9veWujOaIkO+8jOWKoOi9veWujOaIkOWQjuS4jeWGjeinpuWPkWxvYWTkuovku7ZcclxuICAgICAgcmVmcmVzaGluZzogZmFsc2UsIC8vIOS4i+aLieeKtuaAgVxyXG4gICAgICBsaXN0UXVlcnk6IHtcclxuICAgICAgICBwYWdlOiAxLCAvLyDlvZPliY3pobXnoIHmlbBcclxuICAgICAgICBsaW1pdDogNiwgLy8g5LiA6aG15pi+56S6MTDmnaFcclxuICAgICAgfSxcclxuICAgICAgc2xlY3RZZWFyOiBmYWxzZSxcclxuICAgICAgeXpMaXN0OiBcIlwiLFxyXG4gICAgfTtcclxuICB9LFxyXG4gIGZpbHRlcnM6IHtcclxuICAgIGdldFRpbWVUeXBlKGtleSkge1xyXG4gICAgICBsZXQgc3RhdHVzID0gXCJcIjtcclxuICAgICAgaWYgKGtleSA9PSBcImhvdXJcIikge1xyXG4gICAgICAgIHN0YXR1cyA9IFwiZGF0ZXRpbWVcIjtcclxuICAgICAgfSBlbHNlIGlmIChrZXkgPT0gXCJyZWFsXCIpIHtcclxuICAgICAgICBzdGF0dXMgPSBcImRhdGV0aW1lXCI7XHJcbiAgICAgIH0gZWxzZSBpZiAoa2V5ID09IFwiZGF5XCIpIHtcclxuICAgICAgICBzdGF0dXMgPSBcImRhdGVcIjtcclxuICAgICAgfSBlbHNlIGlmIChrZXkgPT0gXCLmnIhcIikge1xyXG4gICAgICAgIHN0YXR1cyA9IFwieWVhci1tb250aFwiO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBzdGF0dXM7XHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIG1heERhdGU6IHtcclxuICAgICAgZ2V0KCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmN1cnJlbnREYXRlMik7XHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbW91bnRlZCgpIHtcclxuICAgIHRoaXMudHlwZSA9IHRoaXMuJHJvdXRlLnF1ZXJ5LnR5cGU7XHJcbiAgICAvLyB0aGlzLnRpdGxlID0gdGhpcy4kcm91dGUucXVlcnkubmFtZStcIl9cIit0aGlzLnR5cGU7XHJcbiAgICAvLyBpZih0aGlzLnR5cGU9PSflup/msLQnKXtcclxuICAgIC8vIFx0dGhpcy5mYWN0b3JBcnIgPSB0aGlzLndBcnI7XHJcbiAgICAvLyBcdHRoaXMuZmFjdG9yID0gdGhpcy5mYWN0b3JBcnJbMF0udmFsO1xyXG4gICAgLy8gfWVsc2V7XHJcbiAgICAvLyBcdHRoaXMuZmFjdG9yQXJyID0gdGhpcy5hQXJyO1xyXG4gICAgLy8gXHR0aGlzLmZhY3RvciA9IHRoaXMuZmFjdG9yQXJyWzBdLnZhbDtcclxuICAgIC8vIH1cclxuICAgIHRoaXMuZGV2aWNlSWQgPSB0aGlzLiRyb3V0ZS5xdWVyeS5kZXZpY2VJZDtcclxuICAgIHRoaXMuc2JpZCA9IHRoaXMuJHJvdXRlLnF1ZXJ5LnNiaWQ7XHJcbiAgICB0aGlzLnBzQ29kZSA9IHRoaXMuJHJvdXRlLnF1ZXJ5LnBzQ29kZTtcclxuICAgIHRoaXMueXpMaXN0ID0gdGhpcy4kcm91dGUucXVlcnkueXpMaXN0O1xyXG4gICAgaWYgKCF0aGlzLmZhY3RvclJlZikge1xyXG4gICAgICB0aGlzLmZhY3RvclJlZiA9IGVjaGFydHMuaW5pdCh0aGlzLiRyZWZzLmZhY3RvclJlZik7XHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuaW5pdENoYXJ0KHRoaXMuZmFjdG9yUmVmKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmN1cnJlbnREYXRlID0gbmV3IERhdGUodGhpcy5zdGFydFRpbWUpO1xyXG4gICAgdGhpcy5jdXJyZW50RGF0ZTIgPSBuZXcgRGF0ZSh0aGlzLmVuZFRpbWUpO1xyXG4gICAgdGhpcy5sb2FkRGF0YSgpO1xyXG4gICAgLy8gdGhpcy5nZXRZcCgpO1xyXG5cclxuICAgIC8vIHRoaXMueWVhckRhdGEoKTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIC8v5bm05pWw5o2uXHJcbiAgICB5ZWFyRGF0YSgpIHtcclxuICAgICAgLy8g6I635Y+W6buY6K6k5pi+56S655qE5pe26Ze0XHJcbiAgICAgIHZhciBub3dUaW1lID0gbmV3IERhdGUoKTtcclxuICAgICAgbGV0IHllYXIgPSBub3dUaW1lLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgIGxldCBtb250aCA9IG5vd1RpbWUuZ2V0TW9udGgoKTtcclxuICAgICAgbGV0IGRheSA9IG5vd1RpbWUuZ2V0RGF0ZSgpO1xyXG4gICAgICAvLyDlvqrnjq/mlbDnu4Qg5aGr5YaZ5pyA5bCP5pe26Ze05ZKM5pyA5aSn5pe26Ze06IyD5Zu0XHJcbiAgICAgIGZvciAobGV0IGkgPSAyMDEwOyBpIDwgMjA5OTsgaSsrKSB7XHJcbiAgICAgICAgdGhpcy55ZWFyQ29sdW1ucy5wdXNoKGkpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIOagvOW8j+WMluaXtumXtOW5tuaIquWPllxyXG4gICAgICB2YXIgeWVhcnMgPSB0aGlzLmZvcm1hdERhdGUobmV3IERhdGUoeWVhciwgbW9udGgsIGRheSkpO1xyXG4gICAgICB2YXIgWWVhciA9IHllYXJzLnNsaWNlKDAsIDQpO1xyXG4gICAgICAvLyDlsIbmiKrlj5bnmoTlubTku73otYvlgLznu5nnu5HlrprlgLwg55So5LqO54K55Ye75by55Ye65pel5pyf56qX5Y+j5ZCO5pi+56S65b2T5YmN55qE5pe26Ze0XHJcbiAgICAgIHRoaXMueWVhclNlbGVjdCA9IHRoaXMueWVhckNvbHVtbnMuaW5kZXhPZihOdW1iZXIoWWVhcikpO1xyXG4gICAgfSxcclxuICAgIC8v5pel5pyf5qC85byPXHJcbiAgICBmb3JtYXREYXRlKGRhdGUpIHtcclxuICAgICAgcmV0dXJuIGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHtkYXRlLmdldE1vbnRoKCkgKyAxfS0ke2RhdGUuZ2V0RGF0ZSgpfWA7XHJcbiAgICB9LFxyXG4gICAgZmlsdGVyVGltZShmcm9tKSB7XHJcbiAgICAgIGlmICh0aGlzLnNsZWN0WWVhcikge1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gdGhpcy5zdGFydFRpbWUgKyBcIi0wMVwiO1xyXG4gICAgICAgIHRoaXMuZW5kVGltZSA9IHRoaXMuZW5kVGltZSArIFwiLTAxXCI7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMudGltZXR5cGUgPT0gXCJyZWFsXCIpIHtcclxuICAgICAgICBpZiAoZnJvbSA9PSAxKSB7XHJcbiAgICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IGRheWpzKG5ldyBEYXRlKCkpLmZvcm1hdChcIllZWVktTU0tREQgMDA6MDBcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc3RhcnRUaW1lID0gZGF5anMobmV3IERhdGUodGhpcy5zdGFydFRpbWUpKS5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVuZFRpbWUgPSBkYXlqcyhuZXcgRGF0ZSh0aGlzLmVuZFRpbWUpKS5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMudGltZXR5cGUgPT0gXCJob3VyXCIpIHtcclxuICAgICAgICBpZiAoZnJvbSA9PSAxKSB7XHJcbiAgICAgICAgICB0aGlzLnN0YXJ0VGltZSA9IGRheWpzKG5ldyBEYXRlKCkpLmZvcm1hdChcIllZWVktTU0tREQgMDA6MDBcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuc3RhcnRUaW1lID0gZGF5anMobmV3IERhdGUodGhpcy5zdGFydFRpbWUpKS5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVuZFRpbWUgPSBkYXlqcyhuZXcgRGF0ZSh0aGlzLmVuZFRpbWUpKS5mb3JtYXQoXCJZWVlZLU1NLUREIEhIOm1tXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMudGltZXR5cGUgPT0gXCJkYXlcIikge1xyXG4gICAgICAgIC8vIC5zdWJ0cmFjdCg3LCdkYXknKVxyXG4gICAgICAgIGlmIChmcm9tID09IDEpIHtcclxuICAgICAgICAgIHRoaXMuc3RhcnRUaW1lID0gZGF5anMobmV3IERhdGUoKSkuc3VidHJhY3QoNywgXCJkYXlcIikuZm9ybWF0KFwiWVlZWS1NTS1ERFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBkYXlqcyhuZXcgRGF0ZSh0aGlzLnN0YXJ0VGltZSkpLmZvcm1hdChcIllZWVktTU0tRERcIik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmVuZFRpbWUgPSBkYXlqcyhuZXcgRGF0ZSh0aGlzLmVuZFRpbWUpKS5mb3JtYXQoXCJZWVlZLU1NLUREXCIpO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMudGltZXR5cGUgPT0gXCLmnIhcIikge1xyXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lID0gZGF5anMobmV3IERhdGUodGhpcy5zdGFydFRpbWUpKS5mb3JtYXQoXCJZWVlZLU1NXCIpO1xyXG4gICAgICAgIHRoaXMuZW5kVGltZSA9IGRheWpzKG5ldyBEYXRlKHRoaXMuZW5kVGltZSkpLmZvcm1hdChcIllZWVktTU1cIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zdGFydFRpbWUgPSBkYXlqcyhuZXcgRGF0ZSh0aGlzLnN0YXJ0VGltZSkpLmZvcm1hdChcIllZWVlcIik7XHJcbiAgICAgICAgdGhpcy5lbmRUaW1lID0gZGF5anMobmV3IERhdGUodGhpcy5lbmRUaW1lKSkuZm9ybWF0KFwiWVlZWVwiKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmN1cnJlbnREYXRlID0gbmV3IERhdGUodGhpcy5zdGFydFRpbWUpO1xyXG4gICAgICB0aGlzLmN1cnJlbnREYXRlMiA9IG5ldyBEYXRlKHRoaXMuZW5kVGltZSk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlRGF0ZVRhYihvYmosIGluZGV4KSB7XHJcbiAgICAgIHRoaXMuZGF0ZVRhYkluZGV4ID0gaW5kZXg7XHJcbiAgICAgIHRoaXMudGltZXR5cGUgPSBvYmoudmFsO1xyXG4gICAgICB0aGlzLmZpbHRlclRpbWUoMSk7XHJcbiAgICAgIHRoaXMuaW5pdENoYXJ0KHRoaXMuZmFjdG9yUmVmKTtcclxuICAgIH0sXHJcbiAgICBjaGFuZ2VGYWN0b3JUYWIob2JqLCBpbmRleCkge1xyXG4gICAgICB0aGlzLmZhY3RvclRhYkluZGV4ID0gaW5kZXg7XHJcbiAgICAgIHRoaXMuZmFjdG9yID0gb2JqLnl6bWM7XHJcbiAgICAgIGxldCBzQXJyID0gW107XHJcbiAgICAgIGlmICh0aGlzLnRpbWV0eXBlICE9IFwicmVhbFwiKSB7XHJcbiAgICAgICAgdGhpcy5jaGFydGRhdGEuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgLy8gc0Fyci5wdXNoKGl0ZW1bdGhpcy5mYWN0b3JdKVxyXG4gICAgICAgICAgc0Fyci5wdXNoKGl0ZW1bXCJBVkdfXCIgKyB0aGlzLmZhY3Rvcl0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGFibGVMaXN0MS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICBzQXJyLnB1c2goaXRlbVtpbmRleF0udmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLm9wdGlvbi5zZXJpZXNbMF0uZGF0YSA9IHNBcnI7XHJcbiAgICAgIHRoaXMuZmFjdG9yUmVmLnNldE9wdGlvbih0aGlzLm9wdGlvbik7XHJcbiAgICB9LFxyXG4gICAgb25Db25maXJtRW5kVGltZSh2YWx1ZSkge1xyXG4gICAgICBpZiAodGhpcy5jdXJyZW50RGF0ZS5nZXRUaW1lKCkgPiBuZXcgRGF0ZSh0aGlzLmVuZFRpbWUpLmdldFRpbWUoKSkge1xyXG4gICAgICAgIHRoaXMuJG5vdGlmeSh7XHJcbiAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgIG1lc3NhZ2U6IFwi5byA5aeL5pe26Ze05LiN6IO95aSn5LqO57uT5p2f5pe26Ze077yBXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc3RhcnRUaW1lID0gdmFsdWU7XHJcbiAgICAgIHRoaXMuc2xlY3RZZWFyID0gZmFsc2U7XHJcbiAgICAgIGlmICh0aGlzLnRpbWV0eXBlICE9IFwi5bm0XCIpIHtcclxuICAgICAgICB0aGlzLmZpbHRlclRpbWUoMik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zbGVjdFllYXIgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZW5kUG9wID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuaW5pdENoYXJ0KHRoaXMuZmFjdG9yUmVmKTtcclxuICAgIH0sXHJcbiAgICBvbkNvbmZpcm1FbmRUaW1lMih2YWx1ZSkge1xyXG4gICAgICBpZiAobmV3IERhdGUodGhpcy5zdGFydFRpbWUpLmdldFRpbWUoKSA+IHRoaXMuY3VycmVudERhdGUyLmdldFRpbWUoKSkge1xyXG4gICAgICAgIHRoaXMuJG5vdGlmeSh7XHJcbiAgICAgICAgICB0eXBlOiBcIndhcm5pbmdcIixcclxuICAgICAgICAgIG1lc3NhZ2U6IFwi57uT5p2f5pe26Ze05LiN6IO95bCP5LqO5byA5aeL5pe26Ze077yBXCIsXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZW5kVGltZSA9IHZhbHVlO1xyXG4gICAgICB0aGlzLnNsZWN0WWVhciA9IGZhbHNlO1xyXG4gICAgICBpZiAodGhpcy50aW1ldHlwZSAhPSBcIuW5tFwiKSB7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJUaW1lKDIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2xlY3RZZWFyID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmVuZFBvcDIgPSBmYWxzZTtcclxuICAgICAgdGhpcy5pbml0Q2hhcnQodGhpcy5mYWN0b3JSZWYpO1xyXG4gICAgfSxcclxuICAgIGxvYWREYXRhKCkge1xyXG4gICAgICAvLyBpZih0aGlzLnR5cGU9PVwi5bqf5rC0XCIpe1xyXG4gICAgICAvLyBcdHRoaXMuZ2V0V2F0ZXIoKTtcclxuICAgICAgLy8gfWVsc2V7XHJcbiAgICAgIC8vIFx0dGhpcy5nZXRBaXIoKVxyXG4gICAgICAvLyB9XHJcbiAgICAgIHRoaXMuZ2V0QWlyV2F0ZXIoKTtcclxuICAgICAgdGhpcy5nZXRDYmRiKCk7XHJcbiAgICB9LFxyXG4gICAgZ2V0QWlyV2F0ZXIoKSB7XHJcbiAgICAgIGxldCBpbmZvID0ge1xyXG4gICAgICAgIGJlZ2luOiBcIlwiLFxyXG4gICAgICAgIGVuZDogXCJcIixcclxuICAgICAgICBzYmlkOiB0aGlzLnNiaWQsXHJcbiAgICAgIH07XHJcbiAgICAgIGdhc0Rpc2Nvbm5lY3RTdGF0KGluZm8pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMuZHh0aW1lID0gcmVzLmRhdGEudG90YWw7XHJcbiAgICAgIH0pO1xyXG4gICAgICBnYXNFeGNlZWRTdGF0KHtcclxuICAgICAgICBiZWdpbjogXCJcIixcclxuICAgICAgICBlbmQ6IFwiXCIsXHJcbiAgICAgICAgc2JpZDogdGhpcy5zYmlkLFxyXG4gICAgICAgIC8vIHR5cGU6XCJcIlxyXG4gICAgICB9KS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICB0aGlzLmNidGltZSA9IHJlcy5kYXRhLnRvdGFsO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBnZXRXYXRlcigpIHtcclxuICAgICAgbGV0IGluZm8gPSB7XHJcbiAgICAgICAgLy8gYmVnaW46dGhpcy5zdGFydFRpbWUsXHJcbiAgICAgICAgLy8gZW5kOnRoaXMuZW5kVGltZSxcclxuICAgICAgICBiZWdpbjogXCJcIixcclxuICAgICAgICBlbmQ6IFwiXCIsXHJcbiAgICAgICAgZGV2aWNlSWQ6IHRoaXMuZGV2aWNlSWQsXHJcbiAgICAgIH07XHJcbiAgICAgIHdhdGVyRGlzY29ubmVjdFN0YXQoaW5mbykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5keHRpbWUgPSByZXMuZGF0YS50b3RhbDtcclxuICAgICAgfSk7XHJcbiAgICAgIHdhdGVyT3ZlclN0YXQoe1xyXG4gICAgICAgIC8vIGJlZ2luOnRoaXMuc3RhcnRUaW1lLFxyXG4gICAgICAgIC8vIGVuZDp0aGlzLmVuZFRpbWUsXHJcbiAgICAgICAgYmVnaW46IFwiXCIsXHJcbiAgICAgICAgZW5kOiBcIlwiLFxyXG4gICAgICAgIGRldmljZUlkOiB0aGlzLmRldmljZUlkLFxyXG4gICAgICAgIHR5cGU6IHRoaXMudGltZXR5cGUsXHJcbiAgICAgIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMuZGNidGltZSA9IHJlcy5kYXRhO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBnZXRBaXIoKSB7XHJcbiAgICAgIGxldCBpbmZvID0ge1xyXG4gICAgICAgIGJlZ2luOiBcIlwiLFxyXG4gICAgICAgIGVuZDogXCJcIixcclxuICAgICAgICBkZXZpY2VJZDogdGhpcy5kZXZpY2VJZCxcclxuICAgICAgfTtcclxuICAgICAgZ2FzRGlzY29ubmVjdFN0YXQoaW5mbykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5keHRpbWUgPSByZXMuZGF0YS50b3RhbDtcclxuICAgICAgfSk7XHJcbiAgICAgIGdhc092ZXJTdGF0KHtcclxuICAgICAgICBiZWdpbjogXCJcIixcclxuICAgICAgICBlbmQ6IFwiXCIsXHJcbiAgICAgICAgZGV2aWNlSWQ6IHRoaXMuZGV2aWNlSWQsXHJcbiAgICAgICAgdHlwZTogdGhpcy50aW1ldHlwZSxcclxuICAgICAgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5kY2J0aW1lID0gcmVzLmRhdGE7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGdldENiZGIoKSB7XHJcbiAgICAgIGxldCBpbmZvID0ge1xyXG4gICAgICAgIGJlZ2luOiBcIlwiLFxyXG4gICAgICAgIGVuZDogXCJcIixcclxuICAgICAgICBzYmlkOiB0aGlzLnNiaWQsXHJcbiAgICAgICAgLy8gZGV2aWNlSWQ6dGhpcy5kZXZpY2VJZCxcclxuICAgICAgICAvLyBwc0NvZGU6dGhpcy5wc0NvZGUsXHJcbiAgICAgICAgLy8gZGV2aWNlSWQ6XCIzOTk0MzVYMDIwNzIwMlwiLFxyXG4gICAgICAgIC8vIHBzQ29kZTpcIjEyMjUxXCIsXHJcbiAgICAgIH07XHJcbiAgICAgIGdldERiZFN0YXQoaW5mbykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jYmRkU3VtID0gcmVzLmRhdGEudG90YWw7XHJcbiAgICAgICAgdGhpcy5jYmRkTGlzdCA9IHJlcy5kYXRhLmRhdGE7XHJcbiAgICAgIH0pO1xyXG4gICAgICAvLyBjYmRiTGlzdChpbmZvKS50aGVuKHJlcz0+e1xyXG4gICAgICAvLyAgdGhpcy5jYmRkTGlzdCA9IHJlcy5kYXRhO1xyXG4gICAgICAvLyB9KVxyXG4gICAgfSxcclxuICAgIGdldFlwKCkge1xyXG4gICAgICBsZXQgaW5mbyA9IHtcclxuICAgICAgICBkZXZpY2VJZDogdGhpcy5kZXZpY2VJZCxcclxuICAgICAgICBwc0NvZGU6IHRoaXMucHNDb2RlLFxyXG4gICAgICAgIHR5cGU6IHRoaXMudHlwZSxcclxuICAgICAgICAvLyBkZXZpY2VJZDpcIjM5OTQzNVgwMjA3MjAyXCIsXHJcbiAgICAgICAgLy8gcHNDb2RlOlwiMTIyNTFcIixcclxuICAgICAgICAvLyB0eXBlOlwi5bqf5rC0XCIsXHJcbiAgICAgICAgcGFnZU51bTogdGhpcy5saXN0UXVlcnkucGFnZSxcclxuICAgICAgICBwYWdlU2l6ZTogdGhpcy5saXN0UXVlcnkubGltaXQsXHJcbiAgICAgIH07XHJcbiAgICAgIHlwTGlzdChpbmZvKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAvLyB0aGlzLnlwTGlzdCA9IHJlcy5kYXRhO1xyXG4gICAgICAgIHRoaXMueXB0b3RhbCA9IHJlcy5kYXRhLnRvdGFsO1xyXG4gICAgICAgIGlmIChyZXMuY29kZSA9PSAyMDApIHtcclxuICAgICAgICAgIGxldCByZGF0YSA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgLy8g5piv5ZCm5piv56ys5LiA5qyh6L+b5YWl6aG16Z2icGFnZT09MSDnm7TmjqXotYvlgLxcclxuICAgICAgICAgIGlmICh0aGlzLmxpc3RRdWVyeS5wYWdlID09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy55cExpc3QgPSByZGF0YS5yZWNvcmRzO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8g5aaC5p6c5LiN5piv5YiZ5Zyo5ZCO6Z2i6L+95Yqg5pWw5o2u77yMXHJcbiAgICAgICAgICAgIHJkYXRhLnJlY29yZHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgIHRoaXMueXBMaXN0LnB1c2goaXRlbSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy8g5YWz6ZetbG9hZGluZ1xyXG4gICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAvLyDlvZPov5jmnInmlbDmja7mmK9wYWdlKytcclxuICAgICAgICAgIGlmIChyZGF0YS5yZWNvcmRzLmxlbmd0aCA9PT0gdGhpcy5saXN0UXVlcnkubGltaXQgJiYgcmRhdGEudG90YWwgIT09IHRoaXMubGlzdFF1ZXJ5LmxpbWl0KSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdFF1ZXJ5LnBhZ2UrKztcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZpbmlzaGVkID0gdHJ1ZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIC8vIHRoaXMueXBMaXN0ID0gcmVzLmRhdGEucmVjb3JkcztcclxuICAgICAgICAgIHRoaXMudG90YWwgPSByZXMuZGF0YS50b3RhbDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5nZXRZcCgpO1xyXG4gICAgICB9LCAxMDAwKTtcclxuICAgIH0sXHJcbiAgICBvblJlZnJlc2goKSB7XHJcbiAgICAgIC8vIHRoaXMucG9sbHV0RGF0YSA9IFtdO1xyXG4gICAgICAvLyB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLmxpc3RRdWVyeS5wYWdlID0gMTtcclxuICAgICAgICB0aGlzLmdldFlwKCk7XHJcbiAgICAgICAgdGhpcy5yZWZyZXNoaW5nID0gZmFsc2U7XHJcbiAgICAgIH0sIDUwMCk7XHJcbiAgICB9LFxyXG4gICAgLy/mjonnur9cclxuICAgIGRpc2Nvbm5lY3RJbmZvKCkge1xyXG4gICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgbmFtZTogXCJvZmZsaW5lRGVzXCIsXHJcbiAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgIC8vIGRldmljZUlkOnRoaXMuZGV2aWNlSWQsXHJcbiAgICAgICAgICAvLyB0eXBlOnRoaXMudHlwZSxcclxuICAgICAgICAgIC8vIG5hbWU6dGhpcy4kcm91dGUucXVlcnkubmFtZVxyXG4gICAgICAgICAgZGV2aWNlSWQ6IHRoaXMuZGV2aWNlSWQsXHJcbiAgICAgICAgICBzYmlkOiB0aGlzLnNiaWQsXHJcbiAgICAgICAgICB0eXBlOiB0aGlzLnR5cGUsXHJcbiAgICAgICAgICBuYW1lOiB0aGlzLiRyb3V0ZS5xdWVyeS5uYW1lLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIC8v6LaF5qCHXHJcbiAgICBleGNlZWRJbmZvKCkge1xyXG4gICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgbmFtZTogXCJleGNlZWREZXNcIixcclxuICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgLy8gZGV2aWNlSWQ6dGhpcy5kZXZpY2VJZCxcclxuICAgICAgICAgIC8vIHR5cGU6dGhpcy50eXBlLFxyXG4gICAgICAgICAgLy8gbmFtZTp0aGlzLiRyb3V0ZS5xdWVyeS5uYW1lXHJcbiAgICAgICAgICBkZXZpY2VJZDogdGhpcy5kZXZpY2VJZCxcclxuICAgICAgICAgIHNiaWQ6IHRoaXMuc2JpZCxcclxuICAgICAgICAgIHR5cGU6IHRoaXMudHlwZSxcclxuICAgICAgICAgIG5hbWU6IHRoaXMuJHJvdXRlLnF1ZXJ5Lm5hbWUsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgLy/nnaPlip5cclxuICAgIHVwZXJ2aXNpb25JbmZvKHJvdykge1xyXG4gICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgbmFtZTogXCJ1cGVydmlzaW9uRGV0YWlsXCIsXHJcbiAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgIGx4ZGlkOiByb3cuTFhESUQsXHJcbiAgICAgICAgICAvLyBkZXZpY2VJZDp0aGlzLmRldmljZUlkLFxyXG4gICAgICAgICAgLy8gaWQ6cm93LmlkLFxyXG4gICAgICAgICAgbmFtZTogdGhpcy4kcm91dGUucXVlcnkubmFtZSxcclxuICAgICAgICB9LFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICAvL+eglOWIpFxyXG4gICAgLy8gICAgIGp1ZGdlSW5mbyhyb3cpe1xyXG4gICAgLy8gICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcbiAgICAvLyBcdG5hbWU6IFwianVkZ2VEZXRhaWxcIixcclxuICAgIC8vIFx0cXVlcnk6e1xyXG4gICAgLy8gXHRcdGRldmljZUlkOnRoaXMuZGV2aWNlSWQsXHJcbiAgICAvLyBcdFx0dHlwZTp0aGlzLnR5cGUsXHJcbiAgICAvLyBcdFx0Ly8gZGV2aWNlSWQ6XCIzOTk0MzVYMDIwNzIwMlwiLFxyXG4gICAgLy8gXHRcdC8vIHR5cGU6XCLlup/msLRcIixcclxuICAgIC8vIFx0XHRpZDpyb3cuaWQsXHJcbiAgICAvLyBcdFx0bmFtZTp0aGlzLiRyb3V0ZS5xdWVyeS5uYW1lXHJcbiAgICAvLyBcdH1cclxuICAgIC8vIH0pO1xyXG4gICAgLy8gICAgIH0sXHJcbiAgICBpbml0Q2hhcnQoY2hhcnRJbnN0YW5jZSkge1xyXG4gICAgICB0aGlzLm9wdGlvbiA9IHtcclxuICAgICAgICBjb2xvcjogW1wicmdiYSg4MiwgMTEzLCAyNTUsIDEpXCJdLFxyXG4gICAgICAgIGxlZ2VuZDoge1xyXG4gICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgfSxcclxuICAgICAgICBncmlkOiB7XHJcbiAgICAgICAgICB0b3A6IFwiMTUlXCIsXHJcbiAgICAgICAgICBsZWZ0OiBcIjglXCIsXHJcbiAgICAgICAgICByaWdodDogXCI1JVwiLFxyXG4gICAgICAgICAgYm90dG9tOiBcIjIwJVwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG9vbHRpcDoge1xyXG4gICAgICAgICAgdHJpZ2dlcjogXCJheGlzXCIsXHJcbiAgICAgICAgICBheGlzUG9pbnRlcjoge1xyXG4gICAgICAgICAgICB0eXBlOiBcInNoYWRvd1wiLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIC8vIGJhY2tncm91bmRDb2xvciA6ICdyZ2JhKDE4LCAxOCwgNTQsIDEpJyxcclxuICAgICAgICAgIC8vIHRleHRTdHlsZSA6IHtcclxuICAgICAgICAgIC8vICAgICBjb2xvciA6ICcjZmZmJ1xyXG4gICAgICAgICAgLy8gfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgeEF4aXM6IHtcclxuICAgICAgICAgIHR5cGU6IFwiY2F0ZWdvcnlcIixcclxuICAgICAgICAgIGF4aXNUaWNrOiB7XHJcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGF4aXNMaW5lOiB7XHJcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIGF4aXNMYWJlbDoge1xyXG4gICAgICAgICAgICBjb2xvcjogXCIjQjBCN0MyXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiAxMixcclxuICAgICAgICAgICAgbWFyZ2luOiAyMCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICBib3VuZGFyeUdhcDogZmFsc2UsXHJcbiAgICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHlBeGlzOiB7XHJcbiAgICAgICAgICB0eXBlOiBcInZhbHVlXCIsXHJcbiAgICAgICAgICBuYW1lOiBcIlwiLFxyXG4gICAgICAgICAgc3BsaXRMaW5lOiB7XHJcbiAgICAgICAgICAgIGxpbmVTdHlsZToge1xyXG4gICAgICAgICAgICAgIHR5cGU6IFwic29saWRcIixcclxuICAgICAgICAgICAgICBjb2xvcjogXCIjRTRFOUYyXCIsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAgYXhpc0xhYmVsOiB7XHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiNCMEI3QzJcIixcclxuICAgICAgICAgICAgZm9udFNpemU6IDEyLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlcmllczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBkYXRhOiBbXSxcclxuICAgICAgICAgICAgdHlwZTogXCJsaW5lXCIsXHJcbiAgICAgICAgICAgIHNob3dTeW1ib2w6IGZhbHNlLFxyXG4gICAgICAgICAgICBzbW9vdGg6IHRydWUsXHJcbiAgICAgICAgICAgIGFyZWFTdHlsZToge1xyXG4gICAgICAgICAgICAgIGNvbG9yOiBuZXcgZWNoYXJ0cy5ncmFwaGljLkxpbmVhckdyYWRpZW50KDAsIDAsIDAsIDEsIFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgb2Zmc2V0OiAxLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2JhKDY4LCAxMjMsIDI1MiwgMC4xKVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgb2Zmc2V0OiAwLFxyXG4gICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2JhKDY4LCAxMjMsIDI1MiwgMC4yKVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICBdKSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfTtcclxuICAgICAgaWYgKHRoaXMudGltZXR5cGUgIT0gXCJyZWFsXCIpIHtcclxuICAgICAgICBsZXQgaW5mbyA9IHtcclxuICAgICAgICAgIGJlZ2luOiB0aGlzLnN0YXJ0VGltZSxcclxuICAgICAgICAgIGVuZDogdGhpcy5lbmRUaW1lLFxyXG4gICAgICAgICAgc2JpZDogdGhpcy5zYmlkLFxyXG4gICAgICAgICAgc2pseDogdGhpcy50aW1ldHlwZSxcclxuICAgICAgICAgIC8vIGRldmljZUlkOnRoaXMuZGV2aWNlSWQsXHJcbiAgICAgICAgICAvLyBwc0NvZGU6dGhpcy5wc0NvZGUsXHJcbiAgICAgICAgICAvLyB0eXBlOnRoaXMudGltZXR5cGVcclxuICAgICAgICB9O1xyXG4gICAgICAgIC8vIGlmKHRoaXMudHlwZT09XCLlup/msLRcIil7XHJcbiAgICAgICAgZ2V0QXBwRGF0YUxpc3QoaW5mbykudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICBsZXQgcmRhdGEgPSByZXMuZGF0YTtcclxuICAgICAgICAgIGxldCB4QXJyID0gW10sXHJcbiAgICAgICAgICAgIHNBcnIgPSBbXTtcclxuICAgICAgICAgIHRoaXMuZmFjdG9yQXJyID0gcmRhdGEuaGVhZGVycztcclxuICAgICAgICAgIGxldCB5ekFyciA9IFtdO1xyXG4gICAgICAgICAgcmRhdGEuaGVhZGVycy5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHl6QXJyLnB1c2goaXRlbS55em1jKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgdGhpcy55ekxpc3QgPSB5ekFyci5qb2luKFwiLFwiKTtcclxuXHJcbiAgICAgICAgICBpZiAodGhpcy5mYWN0b3JBcnIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZhY3RvciA9IHRoaXMuZmFjdG9yQXJyWzBdLnl6bWM7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgLy8gdGhpcy4kZW1pdChcImdldERhdGFJZFwiLCByZGF0YS5kYXRhSWQpO1xyXG4gICAgICAgICAgdGhpcy50YWJsZUxpc3QgPSByZGF0YS5kYXRhcztcclxuICAgICAgICAgIHRoaXMuY2hhcnRkYXRhID0gcmRhdGEuZGF0YXM7XHJcbiAgICAgICAgICBpZiAodGhpcy5jaGFydGRhdGEgJiYgdGhpcy5jaGFydGRhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJ0ZGF0YS5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMudGltZXR5cGUgPT0gXCJob3VyXCIgfHwgdGhpcy50aW1ldHlwZSA9PSBcInJlYWxcIikge1xyXG4gICAgICAgICAgICAgICAgeEFyci5wdXNoKGRheWpzKG5ldyBEYXRlKGl0ZW0uUkVDT1JEX1RJTUUpKS5mb3JtYXQoXCJNTS1ERCBISFwiKSArIFwi5pe2XCIpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy50aW1ldHlwZSA9PSBcImRheVwiKSB7XHJcbiAgICAgICAgICAgICAgICB4QXJyLnB1c2goZGF5anMobmV3IERhdGUoaXRlbS5SRUNPUkRfVElNRSkpLmZvcm1hdChcIk1NLUREXCIpICsgXCLml6VcIik7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnRpbWV0eXBlID09IFwi5pyIXCIpIHtcclxuICAgICAgICAgICAgICAgIHhBcnIucHVzaChkYXlqcyhuZXcgRGF0ZShpdGVtLlJFQ09SRF9USU1FKSkuZm9ybWF0KFwiWVlZWS1NTVwiKSArIFwi5pyIXCIpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB4QXJyLnB1c2goZGF5anMobmV3IERhdGUoaXRlbS5SRUNPUkRfVElNRSkpLmZvcm1hdChcIllZWVlcIikgKyBcIuW5tFwiKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgc0Fyci5wdXNoKGl0ZW1bXCJBVkdfXCIgKyB0aGlzLmZhY3Rvcl0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHhBcnIgPSBbXTtcclxuICAgICAgICAgICAgc0FyciA9IFtdO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHRoaXMub3B0aW9uLnhBeGlzLmRhdGEgPSB4QXJyO1xyXG4gICAgICAgICAgdGhpcy5vcHRpb24uc2VyaWVzWzBdLmRhdGEgPSBzQXJyO1xyXG4gICAgICAgICAgY2hhcnRJbnN0YW5jZS5zZXRPcHRpb24odGhpcy5vcHRpb24pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBpbmZvID0ge1xyXG4gICAgICAgICAgYXV0b1NpZ246IFwiTixBLEQsTSxDLFQsVGQsS1wiLFxyXG4gICAgICAgICAgYmVnaW46IHRoaXMuc3RhcnRUaW1lICsgXCI6MDBcIixcclxuICAgICAgICAgIGRhdGFQYXJ0T3JBTEw6IFwiYXZnLGNvdVwiLFxyXG4gICAgICAgICAgZW5kOiB0aGlzLmVuZFRpbWUgKyBcIjowMFwiLFxyXG4gICAgICAgICAgamN5emxpc3Q6IHRoaXMueXpMaXN0LFxyXG4gICAgICAgICAgbWFyazogXCLljZXnq5nor6bmg4Ut5pWw5o2u5puy57q/XCIsXHJcbiAgICAgICAgICBzYmlkOiB0aGlzLnNiaWQsXHJcbiAgICAgICAgICBzanp0OiBcIlwiLFxyXG4gICAgICAgICAgdGltZXR5cGU6IHRoaXMudGltZXR5cGUsXHJcbiAgICAgICAgICB1c2VfaGlzdG9yeWJhY2s6IFwieXNzalwiLFxyXG4gICAgICAgICAgd3JseDogdGhpcy50eXBlID09IFwi5bqf5rC0XCIgPyBcIjFcIiA6IFwiMlwiLFxyXG4gICAgICAgICAgLy8gZGV2aWNlSWQ6dGhpcy5kZXZpY2VJZCxcclxuICAgICAgICAgIC8vIHBzQ29kZTp0aGlzLnBzQ29kZSxcclxuICAgICAgICAgIC8vIHR5cGU6dGhpcy50aW1ldHlwZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgLy8gaWYodGhpcy50eXBlPT1cIuW6n+awtFwiKXtcclxuICAgICAgICBnZXRSZWFsKGluZm8pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgbGV0IHJkYXRhID0gcmVzO1xyXG5cclxuICAgICAgICAgIGxldCB4QXJyID0gW10sXHJcbiAgICAgICAgICAgIHNBcnIgPSBbXTtcclxuICAgICAgICAgIC8vIHRoaXMuZmFjdG9yQXJyID0gcmRhdGEuamN5emxpc3Q7XHJcbiAgICAgICAgICBpZiAodGhpcy5mYWN0b3JBcnIubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZhY3RvciA9IHJlcy5qY3l6bGlzdFswXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGxldCBhcnIgPSBbXTtcclxuICAgICAgICAgIHJlcy5iYXNlZGF0YWxpc3QuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYXJyMSA9IFtdO1xyXG4gICAgICAgICAgICBpdGVtLmRhdGFsaXN0LmZvckVhY2goKGUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgaWYgKGluZGV4ICUgMiAhPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogZSxcclxuICAgICAgICAgICAgICAgICAgc3RhdHVzOiBpdGVtLnN0YXR1bGlzdFtpbmRleCAvIDJdLFxyXG4gICAgICAgICAgICAgICAgICB0aW1lOiBpdGVtLnJvd2xpc3RbMV0sXHJcbiAgICAgICAgICAgICAgICAgIHl6TmFtZTogcmVzLmpjeXpsaXN0W2luZGV4IC8gMl0sXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgYXJyMS5wdXNoKG9iaik7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgYXJyLnB1c2goYXJyMSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIHRoaXMudGFibGVMaXN0MSA9IGFycjtcclxuXHJcbiAgICAgICAgICAvLyB0aGlzLiRlbWl0KFwiZ2V0RGF0YUlkXCIsIHJkYXRhLmRhdGFJZCk7XHJcbiAgICAgICAgICAvLyB0aGlzLnRhYmxlTGlzdCA9IHJkYXRhLmRhdGFzO1xyXG4gICAgICAgICAgLy8gdGhpcy5jaGFydGRhdGEgPSByZGF0YS5kYXRhcztcclxuICAgICAgICAgIGlmICh0aGlzLnRhYmxlTGlzdDEgJiYgdGhpcy50YWJsZUxpc3QxLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy50YWJsZUxpc3QxLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICB4QXJyLnB1c2goZGF5anMobmV3IERhdGUoaXRlbVt0aGlzLmZhY3RvclRhYkluZGV4XS50aW1lKSkuZm9ybWF0KFwiTU0tREQgSEg6bW1cIikpO1xyXG4gICAgICAgICAgICAgIHNBcnIucHVzaChpdGVtW3RoaXMuZmFjdG9yVGFiSW5kZXhdLnZhbHVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB4QXJyID0gW107XHJcbiAgICAgICAgICAgIHNBcnIgPSBbXTtcclxuICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICB0aGlzLm9wdGlvbi54QXhpcy5kYXRhID0geEFycjtcclxuICAgICAgICAgIHRoaXMub3B0aW9uLnNlcmllc1swXS5kYXRhID0gc0FycjtcclxuICAgICAgICAgIGNoYXJ0SW5zdGFuY2Uuc2V0T3B0aW9uKHRoaXMub3B0aW9uKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gfWVsc2V7XHJcbiAgICAgIC8vIFx0Ly8gaW5mby5wc0NvZGUgPSBcIjMwMjhcIjtcclxuICAgICAgLy8gXHQvLyBpbmZvLmRldmljZUlkID0gXCIzOTk0MzVYS00xMjAwM1wiO1xyXG4gICAgICAvLyBcdGdhc0RldmljZURldGFpbChpbmZvKS50aGVuKHJlcz0+e1xyXG4gICAgICAvLyBcdFx0bGV0IHJkYXRhID0gcmVzLmRhdGE7XHJcbiAgICAgIC8vIFx0XHR0aGlzLiRlbWl0KFwiZ2V0RGF0YUlkXCIsIHJkYXRhLmRhdGFJZCk7XHJcbiAgICAgIC8vIFx0XHRsZXQgeEFyciA9IFtdLHNBcnI9W107XHJcbiAgICAgIC8vIFx0XHR0aGlzLnRhYmxlTGlzdCA9IHJkYXRhLmRhdGE7XHJcbiAgICAgIC8vIFx0XHR0aGlzLmNoYXJ0ZGF0YSA9IHJkYXRhLmRhdGE7XHJcbiAgICAgIC8vIFx0XHRpZih0aGlzLmNoYXJ0ZGF0YSYmdGhpcy5jaGFydGRhdGEubGVuZ3RoPjApe1xyXG4gICAgICAvLyBcdFx0XHR0aGlzLmNoYXJ0ZGF0YS5mb3JFYWNoKGl0ZW09PntcclxuICAgICAgLy8gXHRcdFx0XHRpZih0aGlzLnRpbWV0eXBlPT0n5pe2Jyl7XHJcbiAgICAgIC8vIFx0XHRcdFx0XHR4QXJyLnB1c2goZGF5anMobmV3IERhdGUoaXRlbS5tb25pdG9ydGltZSkpLmZvcm1hdCgnTU0tREQgSEgnKSsn5pe2Jyk7XHJcbiAgICAgIC8vIFx0XHRcdFx0fWVsc2UgaWYodGhpcy50aW1ldHlwZT09J+aXpScpe1xyXG4gICAgICAvLyBcdFx0XHRcdFx0eEFyci5wdXNoKGRheWpzKG5ldyBEYXRlKGl0ZW0ubW9uaXRvcnRpbWUpKS5mb3JtYXQoJ01NLUREJykrJ+aXpScpO1xyXG4gICAgICAvLyBcdFx0XHRcdH1lbHNlIGlmKHRoaXMudGltZXR5cGU9PSfmnIgnKXtcclxuICAgICAgLy8gXHRcdFx0XHRcdHhBcnIucHVzaChkYXlqcyhuZXcgRGF0ZShpdGVtLm1vbml0b3J0aW1lKSkuZm9ybWF0KCdZWVlZLU1NJykrJ+aciCcpO1xyXG4gICAgICAvLyBcdFx0XHRcdH1lbHNle1xyXG4gICAgICAvLyBcdFx0XHRcdFx0eEFyci5wdXNoKGRheWpzKG5ldyBEYXRlKGl0ZW0ubW9uaXRvcnRpbWUpKS5mb3JtYXQoJ1lZWVknKSsn5bm0Jyk7XHJcbiAgICAgIC8vIFx0XHRcdFx0fVxyXG4gICAgICAvLyBcdFx0XHRcdHNBcnIucHVzaChpdGVtW3RoaXMuZmFjdG9yXSlcclxuICAgICAgLy8gXHRcdFx0fSlcclxuICAgICAgLy8gXHRcdH1lbHNle1xyXG4gICAgICAvLyBcdFx0XHRjb25zb2xlLmxvZygxMjMpXHJcbiAgICAgIC8vIFx0XHRcdHhBcnIgPSBbXTtcclxuICAgICAgLy8gXHRcdFx0c0FyciA9W11cclxuICAgICAgLy8gXHRcdH1cclxuICAgICAgLy8gXHRcdHRoaXMub3B0aW9uLnhBeGlzLmRhdGEgPSB4QXJyO1xyXG4gICAgICAvLyBcdFx0dGhpcy5vcHRpb24uc2VyaWVzWzBdLmRhdGEgPSBzQXJyO1xyXG4gICAgICAvLyBcdFx0Y2hhcnRJbnN0YW5jZS5zZXRPcHRpb24odGhpcy5vcHRpb24pXHJcbiAgICAgIC8vIFx0fSlcclxuICAgICAgLy8gfVxyXG4gICAgICAvLyBjaGFydEluc3RhbmNlLnNldE9wdGlvbihvcHRpb24pXHJcbiAgICB9LFxyXG4gIH0sXHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG50ciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG50ZCxcclxudGgge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB3aWR0aDogOTBweDtcclxufVxyXG4uaW50by1tYXAge1xyXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbn1cclxuLnBvcnRfdGFiIHtcclxuICBtYXJnaW46IDEwcHggMjBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gID4gZGl2IHtcclxuICAgIHdpZHRoOiAzMyU7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgID4gc3BhbiB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBwYWRkaW5nOiA0cHggMThweCA0cHggMThweDtcclxuICAgIH1cclxuICB9XHJcbiAgLmFjdGl2ZSB7XHJcbiAgICA+IHNwYW4ge1xyXG4gICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgIHdpZHRoOiA1MiU7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDI4cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyMjVkZWcsIHJnYmEoNzMsIDExNywgMjM2LCAxKSAwJSwgcmdiYSgxNTEsIDE3OSwgMjU1LCAxKSAxMDAlKTtcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDJweCAxMHB4IHJnYmEoODQsIDEyNSwgMjM5LCAwLjQpO1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLnNlYXJjaC1jb250ZW50IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIDMwcHggMTBweCAzNXB4O1xyXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG5cclxuICAuc2VhcmNoLWl0ZW0ge1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjQ2LCAyNDYsIDI0NiwgMSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG4gIH1cclxufVxyXG4uZmFjdG9yIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBtYXJnaW46IDBweCAxMHB4O1xyXG4gID4gZGl2IHtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSg2OCwgMTIzLCAyNTIsIDApIDAlLCByZ2JhKDY4LCAxMjMsIDI1MiwgMC4wNikgMTAwJSksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDRweCAyMHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogM3B4IDEzcHggM3B4IDEzcHg7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjgpO1xyXG4gIH1cclxuICAuYWN0aXZlIHtcclxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSg2OCwgMTIzLCAyNTIsIDEpO1xyXG4gIH1cclxufVxyXG4uc2l0ZS1tb2R1bGUge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnNpdGVfY29udGVudCB7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICBsaW5lLWhlaWdodDogMjAuMjdweDtcclxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAxKTtcclxuICBtYXJnaW46IDBweCAxMnB4IDAgNXB4O1xyXG59XHJcbi5zaXRlX2RhdGUge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGNvbG9yOiByZ2JhKDY4LCAxMjMsIDI1MiwgMSk7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG59XHJcbi5zaXRlX3JpZ2h0IHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxufVxyXG4udmFuLXB1bGwtcmVmcmVzaCB7XHJcbn1cclxuLmNvbXBhbnlfdGl0bGVfdGlwIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBwYWRkaW5nOiAwIDZweDtcclxufVxyXG4ubm9kYXRhIHtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAxKTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBtYXJnaW46IDVweCAwcHg7XHJcbn1cclxuLnNpdGVfZXhjZWVkX2NvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIC52YW4tbGlzdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbiAgLnNpdGVfZXhjZWVkX2xpIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgID4gc3BhbiB7XHJcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgbWFyZ2luLXRvcDogMnB4O1xyXG4gICAgICAmOm50aC1jaGlsZCgybikge1xyXG4gICAgICAgIHBhZGRpbmc6IDFweCA1cHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICB9XHJcbiAgICAgICY6bnRoLWNoaWxkKDMpIHtcclxuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgPiBpbWcge1xyXG4gICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgIG1hcmdpbjogN3B4IDE1cHggMHB4IDhweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLnNpdGVfc3F1YXJlIHtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gOTBweCk7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICA+IGRpdiB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgID4gc3BhbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDEpO1xyXG4gICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gICAgICBtYXJnaW4tdG9wOiAycHg7XHJcbiAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgICAgIGhlaWdodDogMTRweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAucmVkX3NxdWFyZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCA4NywgNTEsIDEpO1xyXG4gICAgfVxyXG4gICAgLmJsdWVfc3F1YXJlIHtcclxuICAgICAgYmFja2dyb3VuZDogcmdiYSgxMjEsIDcyLCAyMzQsIDEpO1xyXG4gICAgfVxyXG4gICAgLmdyZWVuX3NxdWFyZSB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMCwgMTg2LCAxNzMsIDEpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cInBvbGx1dGlvbkxpY2VuY2VJbmZvXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwib25saW5lX2JsdWVcIj48c3Bhbj7lpKfmsJTmsaHmn5PmnInnu4Tnu4fmjpLmlL7orrjlj6/pmZDlgLw8L3NwYW4+PHNwYW4+PC9zcGFuPjwvZGl2PlxyXG4gICAgPCEtLSA8ZGl2IGNsYXNzPVwiY29tcGFueS1pbmZvXCI+IC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbXBhbnktaW5mb1wiIHN0eWxlPVwibWFyZ2luOiA2cHggMTBweCAwcHhcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJwb2xfdGl0bGVcIj7kuLvopoHmjpLmlL7lj6PlkIjorqE8L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjb21wYW55LWluZm9cIiBzdHlsZT1cIm1hcmdpbjogNnB4IDEwcHggMHB4OyBiYWNrZ3JvdW5kOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDEpXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJtYWluX2NvbnRlbnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGhpcmRfdyBub19ib3R0b20gdGFidGxldGl0bGVcIj48c3Bhbj7mjpLmlL7lj6PnvJblj7c8L3NwYW4+PHNwYW4+5rGh5p+T54mp56eN57G7PC9zcGFuPjxzcGFuPuiuuOWPr+W5tOaOkuaUvumZkOWAvDwvc3Bhbj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidGhpcmRfdyBub19ib3R0b21cIiB2LWZvcj1cIml0ZW0gaW4geW91enp0b3RhbFwiPlxyXG4gICAgICAgICAgPHRlbXBsYXRlIHYtaWY9XCJ5b3V6enRvdGFsLmxlbmd0aCA+IDBcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb2xfZmFjdG9yXCI+e3sgaXRlbS5jb2RlIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvbF9mYWN0b3JcIj57eyBpdGVtLm5hbWUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9sX2ZhY3RvclwiPnt7IGl0ZW0udmFsdWUgfX08L3NwYW4+XHJcbiAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3aG9sZV93aWR0aCBwb2xfZmFjdG9yXCIgc3R5bGU9XCJ0ZXh0LWFsaWduOiBjZW50ZXJcIiB2LWlmPVwieW91enp0b3RhbC5sZW5ndGggPT0gMFwiPuaaguaXoOaVsOaNrjwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiA6Y2xhc3M9XCJzaG93TW9yZSA/ICdtb3JlaGVpZ2h0JyA6ICcnXCI+XHJcbiAgICAgIDx0ZW1wbGF0ZSB2LWZvcj1cIml0ZW0gaW4geW91enpmbFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb21wYW55LWluZm9cIiBzdHlsZT1cIm1hcmdpbjogNnB4IDEwcHggMHB4XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9sX290aGVyXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9sX2ZpcnN0XCI+5o6S5pS+5Y+j57yW5Y+3PC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvbF9zZWNvbmRcIj57eyBpdGVtLmNvZGUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9sX3RocmlkXCI+e3sgaXRlbS5uYW1lIH19PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbXBhbnktaW5mb1wiIHN0eWxlPVwibWFyZ2luOiA2cHggMTBweCAwcHg7IGJhY2tncm91bmQ6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMSlcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhhbGZfdyBub19ib3R0b20gdGFidGxldGl0bGVcIj48c3Bhbj7msaHmn5Pniannp43nsbs8L3NwYW4+PHNwYW4+6K645Y+v5o6S5pS+5bCP5pe26ZmQ5YC8PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFsZl93IG5vX2JvdHRvbVwiIHYtZm9yPVwiaXRlbTIgaW4gaXRlbS5kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb2xfZmFjdG9yXCI+e3sgaXRlbTIubmFtZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvbF9mYWN0b3JcIj57eyBpdGVtMi52YWx1ZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbXBhbnktaW5mb1wiIHYtaWY9XCJ5b3V6emZsLmxlbmd0aCA+IDBcIiBzdHlsZT1cIm1hcmdpbjogMHB4IDEwcHggNnB4OyB0ZXh0LWFsaWduOiBjZW50ZXJcIiBAY2xpY2s9XCJnZXRNb3JlKClcIj5cclxuICAgICAgPHNwYW4gY2xhc3M9XCJtb3JlXCI+e3sgc2hvd01vcmUgPyBcIuafpeeci+abtOWkmlwiIDogXCLmlLbotbdcIiB9fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIm9ubGluZV9ibHVlXCI+PHNwYW4+54m55q6K5oOF5Ya15LiL546v5aKD6LSo6YeP6ZmQ5pyf6L6+5qCH6KeE5YiS6KaB5rGCPC9zcGFuPjxzcGFuPjwvc3Bhbj48L2Rpdj5cclxuICAgIDxkaXYgOmNsYXNzPVwic2hvd01vcmUyID8gJ21vcmVoZWlnaHQnIDogJydcIj5cclxuICAgICAgPHRlbXBsYXRlIHYtZm9yPVwiaXRlbSBpbiB0c2hqeXFcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcGFueS1pbmZvXCIgc3R5bGU9XCJtYXJnaW46IDZweCAxMHB4IDBweFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBvbF9vdGhlclwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvbF9maXJzdFwiPuaOkuaUvuWPozwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb2xfc2Vjb25kXCI+e3sgaXRlbS50eXBlIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8IS0tIDxzcGFuIGNsYXNzPVwicG9sX3RocmlkXCI+5Li76KaB5o6S5pS+5Y+jPC9zcGFuPiAtLT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb21wYW55LWluZm9cIiBzdHlsZT1cIm1hcmdpbjogNnB4IDEwcHggMHB4OyBiYWNrZ3JvdW5kOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDEpXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbl9jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aGlyZF93IG5vX2JvdHRvbSB0YWJ0bGV0aXRsZVwiPjxzcGFuPuaOkuaUvuWPo+e8luWPtzwvc3Bhbj48c3Bhbj7msaHmn5Pniannp43nsbs8L3NwYW4+PHNwYW4+6K645Y+v5o6S5pS+5bCP5pe26ZmQ5YC8PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGhpcmRfdyBub19ib3R0b21cIiB2LWZvcj1cIml0ZW0gaW4gaXRlbS5kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb2xfZmFjdG9yXCI+e3sgaXRlbS5jb2RlIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9sX2ZhY3RvclwiPnt7IGl0ZW0ubmFtZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvbF9mYWN0b3JcIj57eyBpdGVtLnZhbHVlIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibm9kYXRhXCIgdi1pZj1cInRzaGp5cS5sZW5ndGggPT0gMFwiPuaaguaXoOaVsOaNrjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29tcGFueS1pbmZvXCIgdi1pZj1cInRzaGp5cS5sZW5ndGggPiAwXCIgc3R5bGU9XCJtYXJnaW46IDBweCAxMHB4IDZweDsgdGV4dC1hbGlnbjogY2VudGVyXCIgQGNsaWNrPVwiZ2V0TW9yZTIoKVwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cIm1vcmVcIj57eyBzaG93TW9yZTIgPyBcIuafpeeci+abtOWkmlwiIDogXCLmlLbotbdcIiB9fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwhLS0gPHNwYW4+54m55q6K5oOF5Ya15LiL5aSn5rCU5rGh5p+T54mp5o6S5pS+6K645Y+v6ZmQ5YC8PC9zcGFuPjxzcGFuPjwvc3Bhbj4gLS0+XHJcbiAgICA8ZGl2IGNsYXNzPVwib25saW5lX2JsdWVcIj48c3Bhbj7nibnmrormg4XlhrXkuIvph43msaHmn5PlpKnmsJTlupTlr7nopoHmsYI8L3NwYW4+PHNwYW4+PC9zcGFuPjwvZGl2PlxyXG4gICAgPGRpdiA6Y2xhc3M9XCJzaG93TW9yZTMgPyAnbW9yZWhlaWdodCcgOiAnJ1wiPlxyXG4gICAgICA8dGVtcGxhdGUgdi1mb3I9XCJpdGVtIGluIHRzaGp6d3JcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcGFueS1pbmZvXCIgc3R5bGU9XCJtYXJnaW46IDZweCAxMHB4IDBweFwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBvbF9vdGhlclwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvbF9maXJzdFwiPuaOkuaUvuWPozwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb2xfc2Vjb25kXCI+e3sgaXRlbS50eXBlIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8IS0tIDxzcGFuIGNsYXNzPVwicG9sX3RocmlkXCI+5Li76KaB5o6S5pS+5Y+jPC9zcGFuPiAtLT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb21wYW55LWluZm9cIiBzdHlsZT1cIm1hcmdpbjogNnB4IDEwcHggMHB4OyBiYWNrZ3JvdW5kOiByZ2JhKDI1MCwgMjUwLCAyNTAsIDEpXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpbl9jb250ZW50XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aGlyZF93IG5vX2JvdHRvbSB0YWJ0bGV0aXRsZVwiPjxzcGFuPuaOkuaUvuWPo+e8luWPtzwvc3Bhbj48c3Bhbj7msaHmn5Pniannp43nsbs8L3NwYW4+PHNwYW4+6K645Y+v5o6S5pS+5bCP5pe26ZmQ5YC8PC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGhpcmRfdyBub19ib3R0b21cIiB2LWZvcj1cIml0ZW0gaW4gaXRlbS5kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb2xfZmFjdG9yXCI+e3sgaXRlbS5jb2RlIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9sX2ZhY3RvclwiPnt7IGl0ZW0ubmFtZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvbF9mYWN0b3JcIj57eyBpdGVtLnZhbHVlIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibm9kYXRhXCIgdi1pZj1cInRzaGp6d3IubGVuZ3RoID09IDBcIj7mmoLml6DmlbDmja48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbXBhbnktaW5mb1wiIHYtaWY9XCJ0c2hqendyLmxlbmd0aCA+IDBcIiBzdHlsZT1cIm1hcmdpbjogMHB4IDEwcHggNnB4OyB0ZXh0LWFsaWduOiBjZW50ZXJcIiBAY2xpY2s9XCJnZXRNb3JlMygpXCI+XHJcbiAgICAgIDxzcGFuIGNsYXNzPVwibW9yZVwiPnt7IHNob3dNb3JlMyA/IFwi5p+l55yL5pu05aSaXCIgOiBcIuaUtui1t1wiIH19PC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwib25saW5lX2JsdWVcIj48c3Bhbj7lpKfmsJTml6Dnu4Tnu4fmjpLmlL7orrjlj6/mnaHku7Y8L3NwYW4+PHNwYW4+PC9zcGFuPjwvZGl2PlxyXG4gICAgPGRpdiA6Y2xhc3M9XCJzaG93TW9yZTQgPyAnbW9yZWhlaWdodCcgOiAnJ1wiPlxyXG4gICAgICA8dGVtcGxhdGUgdi1mb3I9XCJpdGVtIGluIHd6elwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb21wYW55LWluZm9cIiBzdHlsZT1cIm1hcmdpbjogNnB4IDEwcHggMHB4XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9sX290aGVyXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9sX2ZpcnN0XCI+5peg57uE57uH5o6S5pS+5Y+jPC9zcGFuPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvbF9zZWNvbmRcIj57eyBpdGVtLnR5cGUgfX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcGFueS1pbmZvXCIgc3R5bGU9XCJtYXJnaW46IDZweCAxMHB4IDBweDsgYmFja2dyb3VuZDogcmdiYSgyNTAsIDI1MCwgMjUwLCAxKVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5fY29udGVudFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGhpcmRfdyBub19ib3R0b20gdGFidGxldGl0bGVcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj7mjpLmlL7lj6PnvJblj7c8L3NwYW4+PHNwYW4+5rGh5p+T54mp56eN57G7PC9zcGFuPjxzcGFuPuaXpeWdh+a1k+W6pumZkOWAvDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8IS0tIDxzcGFuPuS4u+imgeaxoeafk+mYsuayu+aOquaWvTwvc3Bhbj4gLS0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGhpcmRfdyBub19ib3R0b21cIiB2LWZvcj1cIml0ZW0gaW4gaXRlbS5kZXRhaWxzXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwb2xfZmFjdG9yXCI+e3sgaXRlbS5jb2RlIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicG9sX2ZhY3RvclwiPnt7IGl0ZW0ubmFtZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBvbF9mYWN0b3JcIj57eyBpdGVtLnZhbHVlIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwibm9kYXRhXCIgdi1pZj1cInd6ei5sZW5ndGggPT0gMFwiPuaaguaXoOaVsOaNrjwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY29tcGFueS1pbmZvXCIgdi1pZj1cInd6ei5sZW5ndGggPiAwXCIgc3R5bGU9XCJtYXJnaW46IDBweCAxMHB4IDZweDsgdGV4dC1hbGlnbjogY2VudGVyXCIgQGNsaWNrPVwiZ2V0TW9yZTQoKVwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cIm1vcmVcIj57eyBzaG93TW9yZTQgPyBcIuafpeeci+abtOWkmlwiIDogXCLmlLbotbdcIiB9fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwhLS0gPC9kaXY+IC0tPlxyXG5cclxuICAgIDxkaXYgY2xhc3M9XCJvbmxpbmVfYmx1ZVwiPjxzcGFuPuiHquihjOebkea1i+imgeaxgjwvc3Bhbj48c3Bhbj48L3NwYW4+PC9kaXY+XHJcblxyXG4gICAgPGRpdiA6Y2xhc3M9XCJzaG93TW9yZTUgPyAnbW9yZWhlaWdodCcgOiAnJ1wiPlxyXG4gICAgICA8dGVtcGxhdGUgdi1mb3I9XCJpdGVtIGluIHp4amNMaXN0XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbXBhbnktaW5mb1wiIHN0eWxlPVwibWFyZ2luOiA2cHggMTBweCAwcHhcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndob2xlX3dpZHRoIG5vX2JvdHRvbVwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiZGlzcGxheTogaW5saW5lLWJsb2NrOyBtYXJnaW4tcmlnaHQ6IDhweFwiPuaOkuaUvuWPo+e8luWPtzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9ja1wiPnt7IGl0ZW0ub3V0Q29kZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aG9sZV93aWR0aCBub19ib3R0b21cIj5cclxuICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cImRpc3BsYXk6IGlubGluZS1ibG9jazsgbWFyZ2luLXJpZ2h0OiA4cHhcIj7nm5HmtYvlhoXlrrk8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJkaXNwbGF5OiBpbmxpbmUtYmxvY2tcIj57eyBpdGVtLmxpc3RbMF0ubW9uY29udGVudCB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbXBhbnktaW5mb1wiIHN0eWxlPVwibWFyZ2luOiA2cHggMTBweCAwcHg7IGJhY2tncm91bmQ6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMSlcIiB2LWZvcj1cIihpdGVtMiwgaSkgaW4gaXRlbS5saXN0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmFkX3RpdGxlXCI+XHJcbiAgICAgICAgICAgIDwhLS0gOmNsYXNzPVwiWyBpPT0wPydhY3RpdmUnOid0YWJJbmRleCddXCIgLS0+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYWN0aXZlXCIgQGNsaWNrPVwiY2hhbmdlVGFiKGkpXCI+e3sgaXRlbTIuc2pseCB9fTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5fY29udGVudFwiIHN0eWxlPVwicGFkZGluZzogNXB4IDBweCA1cHggMjBweFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFsZl93aWR0aFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPuaxoeafk+eJqeenjeexuzwvc3Bhbj48c3Bhbj57eyBpdGVtMi53cnduYW1lIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhhbGZfd2lkdGhcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj7nm5HmtYvorr7mlr08L3NwYW4+PHNwYW4+e3sgaXRlbTIubW9uaXRvcm5hbWUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFsZl93aWR0aFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPuiHquWKqOebkea1i+aYr+WQpuiBlOe9kTwvc3Bhbj48c3Bhbj57eyBpdGVtMi5pc2xpbmtzY29kZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+6Ieq5Yqo55uR5rWL5Luq5Zmo5ZCN56ewPC9zcGFuPjxzcGFuPnt7IGl0ZW0yLmluc3RydW1lbnQgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFsZl93aWR0aFwiPlxyXG4gICAgICAgICAgICAgIDxzcGFuPuiHquWKqOebkea1i+iuvuaWveWuiei9rOS9jee9rjwvc3Bhbj48c3Bhbj57eyBpdGVtMi5wb3NpdGlvbiB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+6Ieq5Yqo55uR5rWL6K6+5pa95piv5ZCm56ym5ZCI566h55CG6KaB5rGCPC9zcGFuPjxzcGFuPnt7IGl0ZW0yLmlzc2FmZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+5omL5bel55uR5rWL6YeH5qC35pa55rOV5Y+K5Liq5pWwPC9zcGFuPjxzcGFuPnt7IGl0ZW0yLnF0bW9uaXRvcnNhbXBuYW1lIH19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhhbGZfd2lkdGhcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj7miYvlt6Xnm5HmtYvpopHmrKE8L3NwYW4+PHNwYW4+e3sgaXRlbTIucXRtb25pdG9yZnJlcW5hbWUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2hvbGVfd2lkdGhcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj7miYvliqjmtYvlrprmlrnms5U8L3NwYW4+PHNwYW4+e3sgaXRlbTIudGVzdG1ldGhvZG5hbWUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJub2RhdGFcIiB2LWlmPVwienhqY0xpc3QubGVuZ3RoID09IDBcIj7mmoLml6DmlbDmja48L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbXBhbnktaW5mb1wiIHYtaWY9XCJ6eGpjTGlzdC5sZW5ndGggPiAwXCIgc3R5bGU9XCJtYXJnaW46IDBweCAxMHB4IDZweDsgdGV4dC1hbGlnbjogY2VudGVyXCIgQGNsaWNrPVwiZ2V0TW9yZTUoKVwiPlxyXG4gICAgICA8c3BhbiBjbGFzcz1cIm1vcmVcIj57eyBzaG93TW9yZTUgPyBcIuafpeeci+abtOWkmlwiIDogXCLmlLbotbdcIiB9fTwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHsgbGljZW5zZVN0YW5kYXJkLCBtb25pdG9yUmVxdWlyZSB9IGZyb20gXCJAL2FwaS9wb2xsdXRpb25fc291cmNlXCI7XHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcInBvbGx1dGlvbkxpY2VuY2VJbmZvXCIsXHJcbiAgY29tcG9uZW50czoge30sXHJcbiAgcHJvcHM6IHtcclxuICAgIGRhdGFJZDogU3RyaW5nLFxyXG4gIH0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRhYkFycjogW1wi6KaB5rGCMVwiLCBcIuimgeaxgjJcIl0sXHJcbiAgICAgIHRhYkluZGV4OiAwLFxyXG4gICAgICB0eXBlOiBcIlwiLFxyXG4gICAgICBzaG93TW9yZTogdHJ1ZSxcclxuICAgICAgc2hvd01vcmUzOiB0cnVlLFxyXG4gICAgICBzaG93TW9yZTQ6IHRydWUsXHJcbiAgICAgIHNob3dNb3JlMjogdHJ1ZSxcclxuICAgICAgc2hvd01vcmU1OiB0cnVlLFxyXG4gICAgICB5b3V6enRvdGFsOiBbXSxcclxuICAgICAgeW91enpmbDogW10sXHJcbiAgICAgIHd6ejogW10sXHJcbiAgICAgIHRzaGp5cTogW10sXHJcbiAgICAgIHRzaGp6d3I6IFtdLFxyXG4gICAgICBwZmJ6TGlzdDogW10sXHJcbiAgICAgIHp4amNMaXN0OiBbXSxcclxuICAgIH07XHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgdGhpcy50eXBlID0gdGhpcy4kcm91dGUucXVlcnkudHlwZTtcclxuICAgIHRoaXMuZ2V0UGZieigpO1xyXG4gICAgdGhpcy5nZXRaeGpjKCk7XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBnZXRNb3JlKCkge1xyXG4gICAgICB0aGlzLnNob3dNb3JlID0gIXRoaXMuc2hvd01vcmU7XHJcbiAgICB9LFxyXG4gICAgZ2V0TW9yZTIoKSB7XHJcbiAgICAgIHRoaXMuc2hvd01vcmUyID0gIXRoaXMuc2hvd01vcmUyO1xyXG4gICAgfSxcclxuICAgIGdldE1vcmUzKCkge1xyXG4gICAgICB0aGlzLnNob3dNb3JlMyA9ICF0aGlzLnNob3dNb3JlMztcclxuICAgIH0sXHJcbiAgICBnZXRNb3JlNCgpIHtcclxuICAgICAgdGhpcy5zaG93TW9yZTQgPSAhdGhpcy5zaG93TW9yZTQ7XHJcbiAgICB9LFxyXG4gICAgZ2V0TW9yZTUoKSB7XHJcbiAgICAgIHRoaXMuc2hvd01vcmU1ID0gIXRoaXMuc2hvd01vcmU1O1xyXG4gICAgfSxcclxuICAgIGdldFBmYnooKSB7XHJcbiAgICAgIGxldCBpbmZvID0ge1xyXG4gICAgICAgIGRhdGFJZDogdGhpcy5kYXRhSWQsIC8vXCIwYjMyM2ZjOGIwZjY0M2UxYjg1NjZhNjk3ZWY3Y2QyMlwiLFxyXG4gICAgICAgIHR5cGU6IHRoaXMudHlwZSA9PSBcIuW6n+awlFwiID8gXCLmsJRcIiA6IFwi5rC0XCIsXHJcbiAgICAgIH07XHJcbiAgICAgIGxpY2Vuc2VTdGFuZGFyZChpbmZvKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBsZXQgcmRhdGEgPSByZXMuZGF0YTtcclxuICAgICAgICB0aGlzLnBmYnpMaXN0ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgbGV0IHl6eiA9IHJkYXRhLnlvdXp6O1xyXG4gICAgICAgIHRoaXMueW91enp0b3RhbCA9IHl6ei50b3RhbC5kZXRhaWxzO1xyXG4gICAgICAgIHRoaXMueW91enpmbCA9IHl6ei5pbmZvcztcclxuICAgICAgICB0aGlzLnd6eiA9IHJkYXRhLnd6ei5pbmZvcztcclxuICAgICAgICB0aGlzLnRzaGp5cSA9IHJkYXRhLnRzaGp5cS5pbmZvcztcclxuICAgICAgICB0aGlzLnRzaGp6d3IgPSByZGF0YS50c2hqendyLmluZm9zO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBnZXRaeGpjKCkge1xyXG4gICAgICBsZXQgaW5mbyA9IHtcclxuICAgICAgICBkYXRhSWQ6IHRoaXMuZGF0YUlkLCAvL1wiMGIzMjNmYzhiMGY2NDNlMWI4NTY2YTY5N2VmN2NkMjJcIixcclxuICAgICAgICB0eXBlOiB0aGlzLnR5cGUsXHJcbiAgICAgIH07XHJcbiAgICAgIG1vbml0b3JSZXF1aXJlKGluZm8pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIHRoaXMuenhqY0xpc3QgPSByZXMuZGF0YTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgY2hhbmdlVGFiKGluZGV4KSB7XHJcbiAgICAgIHRoaXMudGFiSW5kZXggPSBpbmRleDtcclxuICAgIH0sXHJcbiAgfSxcclxufTtcclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxyXG4ucG9sbHV0aW9uTGljZW5jZUluZm8ge1xyXG4gIC5tYWluX2NvbnRlbnQge1xyXG4gICAgPiBkaXYudGhpcmRfdyxcclxuICAgID4gZGl2LmhhbGZfdyB7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICA+IHNwYW4ge1xyXG4gICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgY29sb3I6ICMxMjEyMzY7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgID4gZGl2LnRhYnRsZXRpdGxlIHtcclxuICAgICAgPiBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG48L3N0eWxlPlxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbi5tb3JlaGVpZ2h0IHtcclxuICBtYXgtaGVpZ2h0OiAyNzBweDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5ub2RhdGEge1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDEpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xyXG4gIG1hcmdpbjogNXB4IDBweDtcclxufVxyXG4ucG9sX3RpdGxlIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZzogNXB4IDIwcHg7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcclxuICBsaW5lLWhlaWdodDogMjJweDtcclxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAxKTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbn1cclxuLnBvbF9mYWN0b3Ige1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDEpO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBtYXJnaW46IDVweCAwcHg7XHJcbn1cclxuLnBvbF9vdGhlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiAxMHB4IDIwcHggNXB4O1xyXG4gIC5wb2xfZmlyc3Qge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIH1cclxuICAucG9sX3NlY29uZCB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIycHg7XHJcbiAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAxKTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgfVxyXG4gIC5wb2xfdGhyaWQge1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xyXG4gICAgY29sb3I6IHJnYmEoNjgsIDEyMywgMjUyLCAxKTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IHN0eWxlPVwiYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKVwiPlxyXG4gICAgPHZhbi1uYXYtYmFyIDp0aXRsZT1cInRpdGxlICsgJ+ivpuaDhSdcIiBsZWZ0LWFycm93IEBjbGljay1sZWZ0PVwiJHJvdXRlci5nbygtMSlcIj4gPC92YW4tbmF2LWJhcj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwidGFiLXdyYXBwZXIgZnNcIj5cclxuICAgICAgPGRpdiB2LWZvcj1cIihpdGVtLCBpKSBpbiB0YWJBcnJcIiA6Y2xhc3M9XCJbJ3RhYi1pdGVtJywgaSA9PT0gdGFiSW5kZXggPyAnYWN0aXZlJyA6ICcnXVwiIEBjbGljaz1cImNoYW5nZVRhYihpKVwiPnt7IGl0ZW0gfX08L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgc3R5bGU9XCJoZWlnaHQ6IGNhbGMoMTAwdmggLSAxN3ZoKTsgb3ZlcmZsb3cteTogYXV0bzsgb3ZlcmZsb3cteDogaGlkZGVuXCI+XHJcbiAgICAgIDwhLS0gIEBnZXREYXRhSWQ9XCJnZXREYXRhSWRcIiAtLT5cclxuICAgICAgPG9ubGluZS1zaXRlLWluZm8gdi1pZj1cInRhYkluZGV4ID09IDBcIiAvPlxyXG4gICAgICA8cG9sbHV0aW9uLWxpY2VuY2UtaW5mbyA6ZGF0YUlkPVwiZGF0YUlkXCIgdi1pZj1cInRhYkluZGV4ID09IDFcIiAvPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgb25saW5lU2l0ZUluZm8gZnJvbSBcIi4vY29tcG9uZW50cy9vbmxpbmVTaXRlSW5mb1wiO1xyXG5pbXBvcnQgcG9sbHV0aW9uTGljZW5jZUluZm8gZnJvbSBcIi4vY29tcG9uZW50cy9wb2xsdXRpb25MaWNlbmNlSW5mb1wiO1xyXG5pbXBvcnQgeyB3YXRlckRldmljZURldGFpbCwgZ2FzRGV2aWNlRGV0YWlsIH0gZnJvbSBcIkAvYXBpL3BvbGx1dGlvbl9zb3VyY2VcIjtcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwicG9ydEluZm9EZXRhaWxcIixcclxuICBjb21wb25lbnRzOiB7XHJcbiAgICBvbmxpbmVTaXRlSW5mbyxcclxuICAgIHBvbGx1dGlvbkxpY2VuY2VJbmZvLFxyXG4gIH0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIHRhYkFycjogW1wi56uZ54K555uR5rWL5L+h5oGvXCIsIFwi5o6S5rGh6K645Y+v6K+B5o6S5pS+5qCH5YeGXCJdLFxyXG4gICAgICB0YWJJbmRleDogMCxcclxuICAgICAgZGF0YUlkOiBcIlwiLFxyXG4gICAgICB0aXRsZTogXCJcIixcclxuICAgIH07XHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgdGhpcy50aXRsZSA9IHRoaXMuJHJvdXRlLnF1ZXJ5Lm5hbWU7IC8vK1wiX1wiK3RoaXMuJHJvdXRlLnF1ZXJ5LnR5cGU7XHJcbiAgICB0aGlzLmRhdGFJZCA9IHRoaXMuJHJvdXRlLnF1ZXJ5LnhremlkO1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgY2hhbmdlVGFiKGluZGV4KSB7XHJcbiAgICAgIHRoaXMudGFiSW5kZXggPSBpbmRleDtcclxuICAgIH0sXHJcbiAgICAvLyBnZXREYXRhSWQoaWQpe1xyXG4gICAgLy8gXHRjb25zb2xlLmxvZyhpZClcclxuICAgIC8vIFx0dGhpcy5kYXRhSWQgPSBpZDtcclxuICAgIC8vIH1cclxuICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuLmludG8tbWFwIHtcclxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG59XHJcblxyXG4udGFiLXdyYXBwZXIge1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgcGFkZGluZzogMHB4IDBweCAxMHB4O1xyXG4gIGJveC1zaGFkb3c6IDBweCA1cHggNXB4IHJnYmEoMCwgMCwgMCwgMC4wMyk7XHJcbiAgLnRhYi1pdGVtIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjgpO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCJ+QC9hc3NldHMvcG9sbHV0aW9uLXRhYi1iZy5wbmdcIikgbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGJvdHRvbTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMjdweCA4cHg7XHJcbiAgfVxyXG59XHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicG9ydF90YWJcIiB9LFxuICAgICAgICBfdm0uX2woX3ZtLmRhdGVBcnIsIGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xhc3M6IFtpID09PSBfdm0uZGF0ZVRhYkluZGV4ID8gXCJhY3RpdmVcIiA6IFwiXCJdLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoYW5nZURhdGVUYWIoaXRlbSwgaSlcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS50ZXh0KSldKV1cbiAgICAgICAgICApXG4gICAgICAgIH0pLFxuICAgICAgICAwXG4gICAgICApLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzZWFyY2gtY29udGVudCBmc1wiIH0sIFtcbiAgICAgICAgX3ZtLl92KFwiIOaVsOaNruaXtumXtCBcIiksXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2VhcmNoLWl0ZW0gZnNcIixcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmVuZFBvcCA9IHRydWVcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInZhbi1pY29uXCIsIHsgYXR0cnM6IHsgbmFtZTogXCJub3Rlcy1vXCIgfSB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhfdm0uc3RhcnRUaW1lKSArIFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidmFuLWljb25cIiwgeyBhdHRyczogeyBuYW1lOiBcImFycm93LWRvd25cIiB9IH0pLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgLS0gXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNlYXJjaC1pdGVtIGZzXCIsXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5lbmRQb3AyID0gdHJ1ZVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwidmFuLWljb25cIiwgeyBhdHRyczogeyBuYW1lOiBcIm5vdGVzLW9cIiB9IH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiICsgX3ZtLl9zKF92bS5lbmRUaW1lKSArIFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwidmFuLWljb25cIiwgeyBhdHRyczogeyBuYW1lOiBcImFycm93LWRvd25cIiB9IH0pLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgXSksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbXBhbnktaW5mb1wiLFxuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCI2cHggMTBweCAwcHhcIiB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmFjdG9yXCIgfSxcbiAgICAgICAgICAgIF92bS5fbChfdm0uZmFjdG9yQXJyLCBmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBjbGFzczogW2kgPT09IF92bS5mYWN0b3JUYWJJbmRleCA/IFwiYWN0aXZlXCIgOiBcIlwiXSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFuZ2VGYWN0b3JUYWIoaXRlbSwgaSlcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtLnl6bWMpKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAwXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICByZWY6IFwiZmFjdG9yUmVmXCIsXG4gICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiMjAwcHhcIiwgd2lkdGg6IFwiOTAlXCIsIG1hcmdpbjogXCIwIGF1dG9cIiB9LFxuICAgICAgICAgIH0pLFxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNTdHlsZTogeyBkaXNwbGF5OiBcImZsZXhcIiB9IH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb21wYW55LWluZm8gc2l0ZS1tb2R1bGVcIixcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgIG1hcmdpbjogXCI2cHggMTBweCAwcHhcIixcbiAgICAgICAgICAgICAgd2lkdGg6IFwiNTAlXCIsXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmRpc2Nvbm5lY3RJbmZvIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJzaXRlX2RhdGVcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmR4dGltZSkgKyBcIuWwj+aXtlwiKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb21wYW55LWluZm8gc2l0ZS1tb2R1bGVcIixcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgIG1hcmdpbjogXCI2cHggMTBweCAwcHggMHB4XCIsXG4gICAgICAgICAgICAgIHdpZHRoOiBcIjUwJVwiLFxuICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgcGFkZGluZzogXCIxMHB4XCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5leGNlZWRJbmZvIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfdm0uX20oMyksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJzaXRlX2RhdGVcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmNidGltZSkgKyBcIuasoVwiKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl9tKDQpLFxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJxckNvZGUtaW5mbyByZWRCZ1wiLFxuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLXRvcFwiOiBcIjVweFwiIH0sXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbXBhbnlfdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIi4uLy4uLy4uLy4uL2Fzc2V0cy9wb2xsdXRlci9leGNlZWQucG5nXCIpIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fbSg1KSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRpcHNcIiwgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tbGVmdFwiOiBcImF1dG9cIiB9IH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0aXBzX2NvbG9yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uY2JkZFN1bSkgKyBcIuS7tlwiKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInNpdGVfZXhjZWVkX2NvbnRlbnQgdGlwc1wiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fbChfdm0uY2JkZExpc3QsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic2l0ZV9leGNlZWRfbGlcIixcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS51cGVydmlzaW9uSW5mbyhpdGVtKVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS5KQ1laTUMpICsgXCIgXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRpcHNfY29sb3JcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLkxYKSArIFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLkZRU0opKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogcmVxdWlyZShcIi4uLy4uLy4uLy4uL2Fzc2V0cy9wb2xsdXRlci9yaWdodC5wbmdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLmNiZGRTdW0gPT0gMFxuICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJub2RhdGFcIiB9LCBbX3ZtLl92KFwi5pqC5peg5pWw5o2uXCIpXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApLFxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb21wYW55LWluZm9cIixcbiAgICAgICAgICBzdGF0aWNTdHlsZTogeyBtYXJnaW46IFwiNnB4IDEwcHggMHB4XCIgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fbSg2KSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbXBhbnlfdGl0bGVfdGlwXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIuato+W4uC1OIOiwg+ivlS1BIOaVhemanC1EIOaXpeW4uOe7tOaKpC1NIOagoeWHhi1DIOi2hemHj+eoiy1UIOa4qeW6puS8oOaEn+WZqOaVhemanC1UZCDmoLjmn6Xlr7nmr5QtS1wiXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS50aW1ldHlwZSAhPSBcInJlYWxcIlxuICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjEwMCVcIiwgb3ZlcmZsb3c6IFwiYXV0b1wiIH0gfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwidGFibGVcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZS13cmFwcGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0aGVhZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidHJcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLWhlYWRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0aFwiLCBbX3ZtLl92KFwi55uR5rWL5pe26Ze0XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmZhY3RvckFyciwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtfYyhcInRoXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0ueXptYykpXSldXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwidGJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udGFibGVMaXN0LCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0uUkVDT1JEX1RJTUVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRheWpzKG5ldyBEYXRlKGl0ZW0uUkVDT1JEX1RJTUUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5mb3JtYXQoXCJNTS1ERCBISDptbVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5mYWN0b3JBcnIsIGZ1bmN0aW9uIChjb2x1bW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtW1wiQVZHX1wiICsgY29sdW1uLnl6bWNdKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiwqBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpdGVtW1wiRkxBR19cIiArIGNvbHVtbi55em1jXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS50YWJsZUxpc3QubGVuZ3RoID09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJub2RhdGFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5pqC5peg5pWw5o2uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLnRpbWV0eXBlID09IFwicmVhbFwiXG4gICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMTAwJVwiLCBvdmVyZmxvdzogXCJhdXRvXCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJ0YWJsZVwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLXdyYXBwZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInRoZWFkXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFibGUtaGVhZGVyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRoXCIsIFtfdm0uX3YoXCLnm5HmtYvml7bpl7RcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0uZmFjdG9yQXJyLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW19jKFwidGhcIiwgW192bS5fdihfdm0uX3MoaXRlbS55em1jKSldKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJ0Ym9keVwiLFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS50YWJsZUxpc3QxLCBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtWzBdLnRpbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmRheWpzKG5ldyBEYXRlKGl0ZW1bMF0udGltZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmZvcm1hdChcIk1NLUREIEhIOm1tXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woaXRlbSwgZnVuY3Rpb24gKGNvbHVtbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4uc3RhdHVzID09IFwiV1laXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiLVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBjb2x1bW4udmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIsKgwqDCoMKgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoY29sdW1uLnN0YXR1cylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS50YWJsZUxpc3QubGVuZ3RoID09IDBcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJub2RhdGFcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5pqC5peg5pWw5o2uXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2YW4tcG9wdXBcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IHBvc2l0aW9uOiBcImJvdHRvbVwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uZW5kUG9wLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLmVuZFBvcCA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZW5kUG9wXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS50aW1ldHlwZSAhPSBcIuW5tFwiXG4gICAgICAgICAgICA/IF9jKFwidmFuLWRhdGV0aW1lLXBpY2tlclwiLCB7XG4gICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgIHR5cGU6IF92bS5fZihcImdldFRpbWVUeXBlXCIpKF92bS50aW1ldHlwZSksXG4gICAgICAgICAgICAgICAgICB0aXRsZTogXCLpgInmi6nlubTmnIjml6VcIixcbiAgICAgICAgICAgICAgICAgIFwibWF4LWRhdGVcIjogX3ZtLm1heERhdGUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY29uZmlybTogX3ZtLm9uQ29uZmlybUVuZFRpbWUsXG4gICAgICAgICAgICAgICAgICBjYW5jZWw6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmVuZFBvcCA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY3VycmVudERhdGUsXG4gICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICBfdm0uY3VycmVudERhdGUgPSAkJHZcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImN1cnJlbnREYXRlXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX2MoXCJ2YW4tcGlja2VyXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgXCJzaG93LXRvb2xiYXJcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IF92bS55ZWFyQ29sdW1ucyxcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIumAieaLqeW5tFwiLFxuICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0LWluZGV4XCI6IF92bS55ZWFyU2VsZWN0LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNvbmZpcm06IF92bS5vbkNvbmZpcm1FbmRUaW1lLFxuICAgICAgICAgICAgICAgICAgY2FuY2VsOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5lbmRQb3AgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF9jKFxuICAgICAgICBcInZhbi1wb3B1cFwiLFxuICAgICAgICB7XG4gICAgICAgICAgYXR0cnM6IHsgcG9zaXRpb246IFwiYm90dG9tXCIgfSxcbiAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgdmFsdWU6IF92bS5lbmRQb3AyLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLmVuZFBvcDIgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImVuZFBvcDJcIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLnRpbWV0eXBlICE9IFwi5bm0XCJcbiAgICAgICAgICAgID8gX2MoXCJ2YW4tZGF0ZXRpbWUtcGlja2VyXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgdHlwZTogX3ZtLl9mKFwiZ2V0VGltZVR5cGVcIikoX3ZtLnRpbWV0eXBlKSxcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIumAieaLqeW5tOaciOaXpVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNvbmZpcm06IF92bS5vbkNvbmZpcm1FbmRUaW1lMixcbiAgICAgICAgICAgICAgICAgIGNhbmNlbDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0uZW5kUG9wMiA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uY3VycmVudERhdGUyLFxuICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmN1cnJlbnREYXRlMiA9ICQkdlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY3VycmVudERhdGUyXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX2MoXCJ2YW4tcGlja2VyXCIsIHtcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgXCJzaG93LXRvb2xiYXJcIjogXCJcIixcbiAgICAgICAgICAgICAgICAgIGNvbHVtbnM6IF92bS55ZWFyQ29sdW1ucyxcbiAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIumAieaLqeW5tFwiLFxuICAgICAgICAgICAgICAgICAgXCJkZWZhdWx0LWluZGV4XCI6IF92bS55ZWFyU2VsZWN0LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNvbmZpcm06IF92bS5vbkNvbmZpcm1FbmRUaW1lMixcbiAgICAgICAgICAgICAgICAgIGNhbmNlbDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0uZW5kUG9wMiA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb21wYW55X3RpdGxlXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLnm5HmtYvlm6DlrZBcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwic2l0ZV9jb250ZW50XCIgfSwgW1xuICAgICAgX3ZtLl92KFwi5o6J57q/5pe26ZW/XCIpLFxuICAgICAgX2MoXCJiclwiKSxcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY1N0eWxlOiB7IFwiZm9udC1zaXplXCI6IFwiMTBweFwiIH0gfSwgW1xuICAgICAgICBfdm0uX3YoXCLvvIjmnKzlubTluqbvvIlcIiksXG4gICAgICBdKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwic2l0ZV9yaWdodFwiIH0sIFtcbiAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgc3JjOiByZXF1aXJlKFwiLi4vLi4vLi4vLi4vYXNzZXRzL3BvbGx1dGVyL3JpZ2h0LnBuZ1wiKSB9LFxuICAgICAgfSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInNpdGVfY29udGVudFwiIH0sIFtcbiAgICAgIF92bS5fdihcIuWOhuWPsui2heagh1wiKSxcbiAgICAgIF9jKFwiYnJcIiksXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNTdHlsZTogeyBcImZvbnQtc2l6ZVwiOiBcIjEwcHhcIiB9IH0sIFtcbiAgICAgICAgX3ZtLl92KFwi77yI5pys5bm05bqm77yJXCIpLFxuICAgICAgXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInNpdGVfcmlnaHRcIiB9LCBbXG4gICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIi4uLy4uLy4uLy4uL2Fzc2V0cy9wb2xsdXRlci9yaWdodC5wbmdcIikgfSxcbiAgICAgIH0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJibGFja19jb250ZW50XCIgfSwgW1xuICAgICAgX3ZtLl92KFwi55uR5o6n5Lu75Yqh5Yqe55CG5Y2VXCIpLFxuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljU3R5bGU6IHsgXCJmb250LXNpemVcIjogXCIxMHB4XCIgfSB9LCBbXG4gICAgICAgIF92bS5fdihcIu+8iOacrOW5tOW6pu+8iVwiKSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbXBhbnlfdGl0bGVcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuebkea1i+aVsOaNrlwiKV0pLFxuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJzaXRlX3NxdWFyZVwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCIzMCVcIiB9IH0sIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJyZWRfc3F1YXJlXCIgfSksXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLotoXmoIdcIildKSxcbiAgICAgICAgXSksXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMzAlXCIgfSB9LCBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiYmx1ZV9zcXVhcmVcIiB9KSxcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaVhemanFwiKV0pLFxuICAgICAgICBdKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCI0MCVcIiB9IH0sIFtcbiAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJncmVlbl9zcXVhcmVcIiB9KSxcbiAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIui/kOihjOe7tOaKpFwiKV0pLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicG9sbHV0aW9uTGljZW5jZUluZm9cIiB9LCBbXG4gICAgX3ZtLl9tKDApLFxuICAgIF92bS5fbSgxKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbXBhbnktaW5mb1wiLFxuICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgIG1hcmdpbjogXCI2cHggMTBweCAwcHhcIixcbiAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMjUwLCAyNTAsIDI1MCwgMSlcIixcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYWluX2NvbnRlbnRcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgIF92bS5fbChfdm0ueW91enp0b3RhbCwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0aGlyZF93IG5vX2JvdHRvbVwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLnlvdXp6dG90YWwubGVuZ3RoID4gMFxuICAgICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInBvbF9mYWN0b3JcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5jb2RlKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInBvbF9mYWN0b3JcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5uYW1lKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInBvbF9mYWN0b3JcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS52YWx1ZSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS55b3V6enRvdGFsLmxlbmd0aCA9PSAwXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3aG9sZV93aWR0aCBwb2xfZmFjdG9yXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwidGV4dC1hbGlnblwiOiBcImNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihcIuaaguaXoOaVsOaNrlwiKV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgXSxcbiAgICAgICAgICAyXG4gICAgICAgICksXG4gICAgICBdXG4gICAgKSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IGNsYXNzOiBfdm0uc2hvd01vcmUgPyBcIm1vcmVoZWlnaHRcIiA6IFwiXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX3ZtLl9sKF92bS55b3V6emZsLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbXBhbnktaW5mb1wiLFxuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCI2cHggMTBweCAwcHhcIiB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwb2xfb3RoZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJwb2xfZmlyc3RcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuaOkuaUvuWPo+e8luWPt1wiKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwicG9sX3NlY29uZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLmNvZGUpKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwicG9sX3RocmlkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0ubmFtZSkpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbXBhbnktaW5mb1wiLFxuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IFwiNnB4IDEwcHggMHB4XCIsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMjUwLCAyNTAsIDI1MCwgMSlcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYWluX2NvbnRlbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX20oMywgdHJ1ZSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChpdGVtLmRldGFpbHMsIGZ1bmN0aW9uIChpdGVtMikge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhhbGZfdyBub19ib3R0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJwb2xfZmFjdG9yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0yLm5hbWUpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwicG9sX2ZhY3RvclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtMi52YWx1ZSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXVxuICAgICAgICB9KSxcbiAgICAgIF0sXG4gICAgICAyXG4gICAgKSxcbiAgICBfdm0ueW91enpmbC5sZW5ndGggPiAwXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29tcGFueS1pbmZvXCIsXG4gICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBtYXJnaW46IFwiMHB4IDEwcHggNnB4XCIsIFwidGV4dC1hbGlnblwiOiBcImNlbnRlclwiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ2V0TW9yZSgpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibW9yZVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uc2hvd01vcmUgPyBcIuafpeeci+abtOWkmlwiIDogXCLmlLbotbdcIikpLFxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICA6IF92bS5fZSgpLFxuICAgIF92bS5fbSg0KSxcbiAgICBfYyhcbiAgICAgIFwiZGl2XCIsXG4gICAgICB7IGNsYXNzOiBfdm0uc2hvd01vcmUyID8gXCJtb3JlaGVpZ2h0XCIgOiBcIlwiIH0sXG4gICAgICBbXG4gICAgICAgIF92bS5fbChfdm0udHNoanlxLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbXBhbnktaW5mb1wiLFxuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCI2cHggMTBweCAwcHhcIiB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwb2xfb3RoZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJwb2xfZmlyc3RcIiB9LCBbX3ZtLl92KFwi5o6S5pS+5Y+jXCIpXSksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJwb2xfc2Vjb25kXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0udHlwZSkpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbXBhbnktaW5mb1wiLFxuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IFwiNnB4IDEwcHggMHB4XCIsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMjUwLCAyNTAsIDI1MCwgMSlcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYWluX2NvbnRlbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX20oNSwgdHJ1ZSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChpdGVtLmRldGFpbHMsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGhpcmRfdyBub19ib3R0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJwb2xfZmFjdG9yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0uY29kZSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJwb2xfZmFjdG9yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0ubmFtZSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJwb2xfZmFjdG9yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0udmFsdWUpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS50c2hqeXEubGVuZ3RoID09IDBcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibm9kYXRhXCIgfSwgW192bS5fdihcIuaaguaXoOaVsOaNrlwiKV0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF0sXG4gICAgICAyXG4gICAgKSxcbiAgICBfdm0udHNoanlxLmxlbmd0aCA+IDBcbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb21wYW55LWluZm9cIixcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCIwcHggMTBweCA2cHhcIiwgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nZXRNb3JlMigpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibW9yZVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uc2hvd01vcmUyID8gXCLmn6XnnIvmm7TlpJpcIiA6IFwi5pS26LW3XCIpKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgOiBfdm0uX2UoKSxcbiAgICBfdm0uX20oNiksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBjbGFzczogX3ZtLnNob3dNb3JlMyA/IFwibW9yZWhlaWdodFwiIDogXCJcIiB9LFxuICAgICAgW1xuICAgICAgICBfdm0uX2woX3ZtLnRzaGp6d3IsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29tcGFueS1pbmZvXCIsXG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgbWFyZ2luOiBcIjZweCAxMHB4IDBweFwiIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBvbF9vdGhlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInBvbF9maXJzdFwiIH0sIFtfdm0uX3YoXCLmjpLmlL7lj6NcIildKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInBvbF9zZWNvbmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS50eXBlKSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29tcGFueS1pbmZvXCIsXG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCI2cHggMTBweCAwcHhcIixcbiAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTAsIDI1MCwgMjUwLCAxKVwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1haW5fY29udGVudFwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbSg3LCB0cnVlKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKGl0ZW0uZGV0YWlscywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aGlyZF93IG5vX2JvdHRvbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInBvbF9mYWN0b3JcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5jb2RlKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInBvbF9mYWN0b3JcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS5uYW1lKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInBvbF9mYWN0b3JcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS52YWx1ZSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLnRzaGp6d3IubGVuZ3RoID09IDBcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibm9kYXRhXCIgfSwgW192bS5fdihcIuaaguaXoOaVsOaNrlwiKV0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF0sXG4gICAgICAyXG4gICAgKSxcbiAgICBfdm0udHNoanp3ci5sZW5ndGggPiAwXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29tcGFueS1pbmZvXCIsXG4gICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBtYXJnaW46IFwiMHB4IDEwcHggNnB4XCIsIFwidGV4dC1hbGlnblwiOiBcImNlbnRlclwiIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ2V0TW9yZTMoKVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vcmVcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnNob3dNb3JlMyA/IFwi5p+l55yL5pu05aSaXCIgOiBcIuaUtui1t1wiKSksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl9tKDgpLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgY2xhc3M6IF92bS5zaG93TW9yZTQgPyBcIm1vcmVoZWlnaHRcIiA6IFwiXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX3ZtLl9sKF92bS53enosIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29tcGFueS1pbmZvXCIsXG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgbWFyZ2luOiBcIjZweCAxMHB4IDBweFwiIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBvbF9vdGhlclwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInBvbF9maXJzdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5peg57uE57uH5o6S5pS+5Y+jXCIpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJwb2xfc2Vjb25kXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0udHlwZSkpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbXBhbnktaW5mb1wiLFxuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICBtYXJnaW46IFwiNnB4IDEwcHggMHB4XCIsXG4gICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBcInJnYmEoMjUwLCAyNTAsIDI1MCwgMSlcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYWluX2NvbnRlbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX20oOSwgdHJ1ZSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fbChpdGVtLmRldGFpbHMsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGhpcmRfdyBub19ib3R0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJwb2xfZmFjdG9yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0uY29kZSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJwb2xfZmFjdG9yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0ubmFtZSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJwb2xfZmFjdG9yXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0udmFsdWUpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF1cbiAgICAgICAgfSksXG4gICAgICAgIF92bS53enoubGVuZ3RoID09IDBcbiAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibm9kYXRhXCIgfSwgW192bS5fdihcIuaaguaXoOaVsOaNrlwiKV0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF0sXG4gICAgICAyXG4gICAgKSxcbiAgICBfdm0ud3p6Lmxlbmd0aCA+IDBcbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb21wYW55LWluZm9cIixcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCIwcHggMTBweCA2cHhcIiwgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nZXRNb3JlNCgpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibW9yZVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uc2hvd01vcmU0ID8gXCLmn6XnnIvmm7TlpJpcIiA6IFwi5pS26LW3XCIpKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgOiBfdm0uX2UoKSxcbiAgICBfdm0uX20oMTApLFxuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgY2xhc3M6IF92bS5zaG93TW9yZTUgPyBcIm1vcmVoZWlnaHRcIiA6IFwiXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX3ZtLl9sKF92bS56eGpjTGlzdCwgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb21wYW55LWluZm9cIixcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBtYXJnaW46IFwiNnB4IDEwcHggMHB4XCIgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWFpbl9jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aG9sZV93aWR0aCBub19ib3R0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibWFyZ2luLXJpZ2h0XCI6IFwiOHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuaOkuaUvuWPo+e8luWPt1wiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljU3R5bGU6IHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0ub3V0Q29kZSkpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aG9sZV93aWR0aCBub19ib3R0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibWFyZ2luLXJpZ2h0XCI6IFwiOHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuebkea1i+WGheWuuVwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljU3R5bGU6IHsgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0ubGlzdFswXS5tb25jb250ZW50KSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX2woaXRlbS5saXN0LCBmdW5jdGlvbiAoaXRlbTIsIGkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29tcGFueS1pbmZvXCIsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiNnB4IDEwcHggMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTAsIDI1MCwgMjUwLCAxKVwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicmFkX3RpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhY3RpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGFuZ2VUYWIoaSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtMi5zamx4KSldXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwibWFpbl9jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgcGFkZGluZzogXCI1cHggMHB4IDVweCAyMHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGFsZl93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5rGh5p+T54mp56eN57G7XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbTIud3J3bmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYWxmX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLnm5HmtYvorr7mlr1cIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtMi5tb25pdG9ybmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYWxmX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLoh6rliqjnm5HmtYvmmK/lkKbogZTnvZFcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtMi5pc2xpbmtzY29kZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYWxmX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLoh6rliqjnm5HmtYvku6rlmajlkI3np7BcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtMi5pbnN0cnVtZW50KSldKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhhbGZfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuiHquWKqOebkea1i+iuvuaWveWuiei9rOS9jee9rlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0yLnBvc2l0aW9uKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhhbGZfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuiHquWKqOebkea1i+iuvuaWveaYr+WQpuespuWQiOeuoeeQhuimgeaxglwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0yLmlzc2FmZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYWxmX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmiYvlt6Xnm5HmtYvph4fmoLfmlrnms5Xlj4rkuKrmlbBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtMi5xdG1vbml0b3JzYW1wbmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYWxmX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmiYvlt6Xnm5HmtYvpopHmrKFcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtMi5xdG1vbml0b3JmcmVxbmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3aG9sZV93aWR0aFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5omL5Yqo5rWL5a6a5pa55rOVXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbTIudGVzdG1ldGhvZG5hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgXVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLnp4amNMaXN0Lmxlbmd0aCA9PSAwXG4gICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm5vZGF0YVwiIH0sIFtfdm0uX3YoXCLmmoLml6DmlbDmja5cIildKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBdLFxuICAgICAgMlxuICAgICksXG4gICAgX3ZtLnp4amNMaXN0Lmxlbmd0aCA+IDBcbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb21wYW55LWluZm9cIixcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCIwcHggMTBweCA2cHhcIiwgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCIgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nZXRNb3JlNSgpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibW9yZVwiIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uc2hvd01vcmU1ID8gXCLmn6XnnIvmm7TlpJpcIiA6IFwi5pS26LW3XCIpKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgOiBfdm0uX2UoKSxcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm9ubGluZV9ibHVlXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlpKfmsJTmsaHmn5PmnInnu4Tnu4fmjpLmlL7orrjlj6/pmZDlgLxcIildKSxcbiAgICAgIF9jKFwic3BhblwiKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJjb21wYW55LWluZm9cIiwgc3RhdGljU3R5bGU6IHsgbWFyZ2luOiBcIjZweCAxMHB4IDBweFwiIH0gfSxcbiAgICAgIFtfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJwb2xfdGl0bGVcIiB9LCBbX3ZtLl92KFwi5Li76KaB5o6S5pS+5Y+j5ZCI6K6hXCIpXSldXG4gICAgKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aGlyZF93IG5vX2JvdHRvbSB0YWJ0bGV0aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5o6S5pS+5Y+j57yW5Y+3XCIpXSksXG4gICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaxoeafk+eJqeenjeexu1wiKV0pLFxuICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLorrjlj6/lubTmjpLmlL7pmZDlgLxcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYWxmX3cgbm9fYm90dG9tIHRhYnRsZXRpdGxlXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmsaHmn5Pniannp43nsbtcIildKSxcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6K645Y+v5o6S5pS+5bCP5pe26ZmQ5YC8XCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwib25saW5lX2JsdWVcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIueJueauiuaDheWGteS4i+eOr+Wig+i0qOmHj+mZkOacn+i+vuagh+inhOWIkuimgeaxglwiKV0pLFxuICAgICAgX2MoXCJzcGFuXCIpLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRoaXJkX3cgbm9fYm90dG9tIHRhYnRsZXRpdGxlXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmjpLmlL7lj6PnvJblj7dcIildKSxcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5rGh5p+T54mp56eN57G7XCIpXSksXG4gICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuiuuOWPr+aOkuaUvuWwj+aXtumZkOWAvFwiKV0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm9ubGluZV9ibHVlXCIgfSwgW1xuICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLnibnmrormg4XlhrXkuIvph43msaHmn5PlpKnmsJTlupTlr7nopoHmsYJcIildKSxcbiAgICAgIF9jKFwic3BhblwiKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aGlyZF93IG5vX2JvdHRvbSB0YWJ0bGV0aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5o6S5pS+5Y+j57yW5Y+3XCIpXSksXG4gICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaxoeafk+eJqeenjeexu1wiKV0pLFxuICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLorrjlj6/mjpLmlL7lsI/ml7bpmZDlgLxcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJvbmxpbmVfYmx1ZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5aSn5rCU5peg57uE57uH5o6S5pS+6K645Y+v5p2h5Lu2XCIpXSksXG4gICAgICBfYyhcInNwYW5cIiksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGhpcmRfdyBub19ib3R0b20gdGFidGxldGl0bGVcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaOkuaUvuWPo+e8luWPt1wiKV0pLFxuICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmsaHmn5Pniannp43nsbtcIildKSxcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5pel5Z2H5rWT5bqm6ZmQ5YC8XCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwib25saW5lX2JsdWVcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuiHquihjOebkea1i+imgeaxglwiKV0pLFxuICAgICAgX2MoXCJzcGFuXCIpLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNTdHlsZTogeyBiYWNrZ3JvdW5kOiBcInJnYmEoMjU1LCAyNTUsIDI1NSwgMSlcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXCJ2YW4tbmF2LWJhclwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHRpdGxlOiBfdm0udGl0bGUgKyBcIuivpuaDhVwiLCBcImxlZnQtYXJyb3dcIjogXCJcIiB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIFwiY2xpY2stbGVmdFwiOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gX3ZtLiRyb3V0ZXIuZ28oLTEpXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFiLXdyYXBwZXIgZnNcIiB9LFxuICAgICAgICBfdm0uX2woX3ZtLnRhYkFyciwgZnVuY3Rpb24gKGl0ZW0sIGkpIHtcbiAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGFzczogW1widGFiLWl0ZW1cIiwgaSA9PT0gX3ZtLnRhYkluZGV4ID8gXCJhY3RpdmVcIiA6IFwiXCJdLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmNoYW5nZVRhYihpKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbSkpXVxuICAgICAgICAgIClcbiAgICAgICAgfSksXG4gICAgICAgIDBcbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICBoZWlnaHQ6IFwiY2FsYygxMDB2aCAtIDE3dmgpXCIsXG4gICAgICAgICAgICBcIm92ZXJmbG93LXlcIjogXCJhdXRvXCIsXG4gICAgICAgICAgICBcIm92ZXJmbG93LXhcIjogXCJoaWRkZW5cIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLnRhYkluZGV4ID09IDAgPyBfYyhcIm9ubGluZS1zaXRlLWluZm9cIikgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0udGFiSW5kZXggPT0gMVxuICAgICAgICAgICAgPyBfYyhcInBvbGx1dGlvbi1saWNlbmNlLWluZm9cIiwgeyBhdHRyczogeyBkYXRhSWQ6IF92bS5kYXRhSWQgfSB9KVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIid1c2Ugc3RyaWN0JztcbnZhciAkZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5mb3JFYWNoO1xudmFyIGFycmF5TWV0aG9kSXNTdHJpY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktbWV0aG9kLWlzLXN0cmljdCcpO1xuXG52YXIgU1RSSUNUX01FVEhPRCA9IGFycmF5TWV0aG9kSXNTdHJpY3QoJ2ZvckVhY2gnKTtcblxuLy8gYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCBtZXRob2QgaW1wbGVtZW50YXRpb25cbi8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtYXJyYXkucHJvdG90eXBlLmZvcmVhY2hcbm1vZHVsZS5leHBvcnRzID0gIVNUUklDVF9NRVRIT0QgPyBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gIHJldHVybiAkZm9yRWFjaCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXMvbm8tYXJyYXktcHJvdG90eXBlLWZvcmVhY2ggLS0gc2FmZVxufSA6IFtdLmZvckVhY2g7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJFR5cGVFcnJvciA9IFR5cGVFcnJvcjtcbnZhciBNQVhfU0FGRV9JTlRFR0VSID0gMHgxRkZGRkZGRkZGRkZGRjsgLy8gMiAqKiA1MyAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPiBNQVhfU0FGRV9JTlRFR0VSKSB0aHJvdyAkVHlwZUVycm9yKCdNYXhpbXVtIGFsbG93ZWQgaW5kZXggZXhjZWVkZWQnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2V4cG9ydCcpO1xudmFyIGZhaWxzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2ZhaWxzJyk7XG52YXIgaXNBcnJheSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9pcy1hcnJheScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2lzLW9iamVjdCcpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3RvLW9iamVjdCcpO1xudmFyIGxlbmd0aE9mQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2xlbmd0aC1vZi1hcnJheS1saWtlJyk7XG52YXIgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvZXMtbm90LWV4Y2VlZC1zYWZlLWludGVnZXInKTtcbnZhciBjcmVhdGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtcHJvcGVydHknKTtcbnZhciBhcnJheVNwZWNpZXNDcmVhdGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbnZhciBhcnJheU1ldGhvZEhhc1NwZWNpZXNTdXBwb3J0ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LW1ldGhvZC1oYXMtc3BlY2llcy1zdXBwb3J0Jyk7XG52YXIgd2VsbEtub3duU3ltYm9sID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3dlbGwta25vd24tc3ltYm9sJyk7XG52YXIgVjhfVkVSU0lPTiA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9lbnZpcm9ubWVudC12OC12ZXJzaW9uJyk7XG5cbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRSA9IHdlbGxLbm93blN5bWJvbCgnaXNDb25jYXRTcHJlYWRhYmxlJyk7XG5cbi8vIFdlIGNhbid0IHVzZSB0aGlzIGZlYXR1cmUgZGV0ZWN0aW9uIGluIFY4IHNpbmNlIGl0IGNhdXNlc1xuLy8gZGVvcHRpbWl6YXRpb24gYW5kIHNlcmlvdXMgcGVyZm9ybWFuY2UgZGVncmFkYXRpb25cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy82NzlcbnZhciBJU19DT05DQVRfU1BSRUFEQUJMRV9TVVBQT1JUID0gVjhfVkVSU0lPTiA+PSA1MSB8fCAhZmFpbHMoZnVuY3Rpb24gKCkge1xuICB2YXIgYXJyYXkgPSBbXTtcbiAgYXJyYXlbSVNfQ09OQ0FUX1NQUkVBREFCTEVdID0gZmFsc2U7XG4gIHJldHVybiBhcnJheS5jb25jYXQoKVswXSAhPT0gYXJyYXk7XG59KTtcblxudmFyIGlzQ29uY2F0U3ByZWFkYWJsZSA9IGZ1bmN0aW9uIChPKSB7XG4gIGlmICghaXNPYmplY3QoTykpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNwcmVhZGFibGUgPSBPW0lTX0NPTkNBVF9TUFJFQURBQkxFXTtcbiAgcmV0dXJuIHNwcmVhZGFibGUgIT09IHVuZGVmaW5lZCA/ICEhc3ByZWFkYWJsZSA6IGlzQXJyYXkoTyk7XG59O1xuXG52YXIgRk9SQ0VEID0gIUlTX0NPTkNBVF9TUFJFQURBQkxFX1NVUFBPUlQgfHwgIWFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2NvbmNhdCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmNvbmNhdGAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5jb25jYXRcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBpc0NvbmNhdFNwcmVhZGFibGUgYW5kIEBAc3BlY2llc1xuJCh7IHRhcmdldDogJ0FycmF5JywgcHJvdG86IHRydWUsIGFyaXR5OiAxLCBmb3JjZWQ6IEZPUkNFRCB9LCB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFycyAtLSByZXF1aXJlZCBmb3IgYC5sZW5ndGhgXG4gIGNvbmNhdDogZnVuY3Rpb24gY29uY2F0KGFyZykge1xuICAgIHZhciBPID0gdG9PYmplY3QodGhpcyk7XG4gICAgdmFyIEEgPSBhcnJheVNwZWNpZXNDcmVhdGUoTywgMCk7XG4gICAgdmFyIG4gPSAwO1xuICAgIHZhciBpLCBrLCBsZW5ndGgsIGxlbiwgRTtcbiAgICBmb3IgKGkgPSAtMSwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICBFID0gaSA9PT0gLTEgPyBPIDogYXJndW1lbnRzW2ldO1xuICAgICAgaWYgKGlzQ29uY2F0U3ByZWFkYWJsZShFKSkge1xuICAgICAgICBsZW4gPSBsZW5ndGhPZkFycmF5TGlrZShFKTtcbiAgICAgICAgZG9lc05vdEV4Y2VlZFNhZmVJbnRlZ2VyKG4gKyBsZW4pO1xuICAgICAgICBmb3IgKGsgPSAwOyBrIDwgbGVuOyBrKyssIG4rKykgaWYgKGsgaW4gRSkgY3JlYXRlUHJvcGVydHkoQSwgbiwgRVtrXSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2VzTm90RXhjZWVkU2FmZUludGVnZXIobiArIDEpO1xuICAgICAgICBjcmVhdGVQcm9wZXJ0eShBLCBuKyssIEUpO1xuICAgICAgfVxuICAgIH1cbiAgICBBLmxlbmd0aCA9IG47XG4gICAgcmV0dXJuIEE7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbFRoaXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZ2xvYmFsLXRoaXMnKTtcbnZhciBET01JdGVyYWJsZXMgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLWl0ZXJhYmxlcycpO1xudmFyIERPTVRva2VuTGlzdFByb3RvdHlwZSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9kb20tdG9rZW4tbGlzdC1wcm90b3R5cGUnKTtcbnZhciBmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWZvci1lYWNoJyk7XG52YXIgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2NyZWF0ZS1ub24tZW51bWVyYWJsZS1wcm9wZXJ0eScpO1xuXG52YXIgaGFuZGxlUHJvdG90eXBlID0gZnVuY3Rpb24gKENvbGxlY3Rpb25Qcm90b3R5cGUpIHtcbiAgLy8gc29tZSBDaHJvbWUgdmVyc2lvbnMgaGF2ZSBub24tY29uZmlndXJhYmxlIG1ldGhvZHMgb24gRE9NVG9rZW5MaXN0XG4gIGlmIChDb2xsZWN0aW9uUHJvdG90eXBlICYmIENvbGxlY3Rpb25Qcm90b3R5cGUuZm9yRWFjaCAhPT0gZm9yRWFjaCkgdHJ5IHtcbiAgICBjcmVhdGVOb25FbnVtZXJhYmxlUHJvcGVydHkoQ29sbGVjdGlvblByb3RvdHlwZSwgJ2ZvckVhY2gnLCBmb3JFYWNoKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggPSBmb3JFYWNoO1xuICB9XG59O1xuXG5mb3IgKHZhciBDT0xMRUNUSU9OX05BTUUgaW4gRE9NSXRlcmFibGVzKSB7XG4gIGlmIChET01JdGVyYWJsZXNbQ09MTEVDVElPTl9OQU1FXSkge1xuICAgIGhhbmRsZVByb3RvdHlwZShnbG9iYWxUaGlzW0NPTExFQ1RJT05fTkFNRV0gJiYgZ2xvYmFsVGhpc1tDT0xMRUNUSU9OX05BTUVdLnByb3RvdHlwZSk7XG4gIH1cbn1cblxuaGFuZGxlUHJvdG90eXBlKERPTVRva2VuTGlzdFByb3RvdHlwZSk7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwidHJbZGF0YS12LTJhZjA4MzdjXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG50ZFtkYXRhLXYtMmFmMDgzN2NdLFxcbnRoW2RhdGEtdi0yYWYwODM3Y10ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDkwcHg7XFxufVxcbi5pbnRvLW1hcFtkYXRhLXYtMmFmMDgzN2NdIHtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG4ucG9ydF90YWJbZGF0YS12LTJhZjA4MzdjXSB7XFxuICBtYXJnaW46IDEwcHggMjBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcbi5wb3J0X3RhYiA+IGRpdltkYXRhLXYtMmFmMDgzN2NdIHtcXG4gIHdpZHRoOiAzMyU7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XFxuLnBvcnRfdGFiID4gZGl2ID4gc3BhbltkYXRhLXYtMmFmMDgzN2NdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiA0cHggMThweCA0cHggMThweDtcXG59XFxuLnBvcnRfdGFiIC5hY3RpdmUgPiBzcGFuW2RhdGEtdi0yYWYwODM3Y10ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgd2lkdGg6IDUyJTtcXG4gIG9wYWNpdHk6IDE7XFxuICBib3JkZXItcmFkaXVzOiAyOHB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyNWRlZywgIzQ5NzVlYyAwJSwgIzk3YjNmZiAxMDAlKTtcXG4gIGJveC1zaGFkb3c6IDBweCAycHggMTBweCByZ2JhKDg0LCAxMjUsIDIzOSwgMC40KTtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uc2VhcmNoLWNvbnRlbnRbZGF0YS12LTJhZjA4MzdjXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMCAzMHB4IDEwcHggMzVweDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5zZWFyY2gtY29udGVudCAuc2VhcmNoLWl0ZW1bZGF0YS12LTJhZjA4MzdjXSB7XFxuICB3aWR0aDogMzUlO1xcbiAgcGFkZGluZzogNnB4O1xcbiAgYmFja2dyb3VuZDogI2Y2ZjZmNjtcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuOCk7XFxufVxcbi5mYWN0b3JbZGF0YS12LTJhZjA4MzdjXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAgbWFyZ2luOiAwcHggMTBweDtcXG59XFxuLmZhY3RvciA+IGRpdltkYXRhLXYtMmFmMDgzN2NdIHtcXG4gIG1hcmdpbjogNXB4O1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSg2OCwgMTIzLCAyNTIsIDApIDAlLCByZ2JhKDY4LCAxMjMsIDI1MiwgMC4wNikgMTAwJSksIHdoaXRlO1xcbiAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XFxuICBib3gtc2hhZG93OiAwcHggNHB4IDIwcHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAzcHggMTNweCAzcHggMTNweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMThweDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuOCk7XFxufVxcbi5mYWN0b3IgLmFjdGl2ZVtkYXRhLXYtMmFmMDgzN2NdIHtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGJhY2tncm91bmQ6ICM0NDdiZmM7XFxufVxcbi5zaXRlLW1vZHVsZVtkYXRhLXYtMmFmMDgzN2NdIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5zaXRlX2NvbnRlbnRbZGF0YS12LTJhZjA4MzdjXSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMC4yN3B4O1xcbiAgY29sb3I6ICMxMjEyMzY7XFxuICBtYXJnaW46IDBweCAxMnB4IDAgNXB4O1xcbn1cXG4uc2l0ZV9kYXRlW2RhdGEtdi0yYWYwODM3Y10ge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGNvbG9yOiAjNDQ3YmZjO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbi5zaXRlX3JpZ2h0W2RhdGEtdi0yYWYwODM3Y10ge1xcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XFxufVxcbi5jb21wYW55X3RpdGxlX3RpcFtkYXRhLXYtMmFmMDgzN2NdIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIHBhZGRpbmc6IDAgNnB4O1xcbn1cXG4ubm9kYXRhW2RhdGEtdi0yYWYwODM3Y10ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xcbiAgY29sb3I6ICMxMjEyMzY7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcbiAgbWFyZ2luOiA1cHggMHB4O1xcbn1cXG4uc2l0ZV9leGNlZWRfY29udGVudFtkYXRhLXYtMmFmMDgzN2NdIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5zaXRlX2V4Y2VlZF9jb250ZW50IC52YW4tbGlzdFtkYXRhLXYtMmFmMDgzN2NdIHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uc2l0ZV9leGNlZWRfY29udGVudCAuc2l0ZV9leGNlZWRfbGlbZGF0YS12LTJhZjA4MzdjXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgcGFkZGluZzogNXB4IDEwcHg7XFxuICBoZWlnaHQ6IDI1cHg7XFxufVxcbi5zaXRlX2V4Y2VlZF9jb250ZW50IC5zaXRlX2V4Y2VlZF9saSA+IHNwYW5bZGF0YS12LTJhZjA4MzdjXSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBtYXJnaW4tdG9wOiAycHg7XFxufVxcbi5zaXRlX2V4Y2VlZF9jb250ZW50IC5zaXRlX2V4Y2VlZF9saSA+IHNwYW5bZGF0YS12LTJhZjA4MzdjXTpudGgtY2hpbGQoMm4pIHtcXG4gIHBhZGRpbmc6IDFweCA1cHg7XFxuICBtYXJnaW4tbGVmdDogMTBweDtcXG4gIG1hcmdpbi10b3A6IDBweDtcXG59XFxuLnNpdGVfZXhjZWVkX2NvbnRlbnQgLnNpdGVfZXhjZWVkX2xpID4gc3BhbltkYXRhLXYtMmFmMDgzN2NdOm50aC1jaGlsZCgzKSB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XFxuLnNpdGVfZXhjZWVkX2NvbnRlbnQgLnNpdGVfZXhjZWVkX2xpID4gaW1nW2RhdGEtdi0yYWYwODM3Y10ge1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgbWFyZ2luOiA3cHggMTVweCAwcHggOHB4O1xcbn1cXG4uc2l0ZV9zcXVhcmVbZGF0YS12LTJhZjA4MzdjXSB7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gOTBweCk7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcbi5zaXRlX3NxdWFyZSA+IGRpdltkYXRhLXYtMmFmMDgzN2NdIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG4uc2l0ZV9zcXVhcmUgPiBkaXYgPiBzcGFuW2RhdGEtdi0yYWYwODM3Y10ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgY29sb3I6ICMxMjEyMzY7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIG1hcmdpbi10b3A6IDJweDtcXG59XFxuLnNpdGVfc3F1YXJlID4gZGl2ID4gc3BhbltkYXRhLXYtMmFmMDgzN2NdOmZpcnN0LWNoaWxkIHtcXG4gIHdpZHRoOiAxNHB4O1xcbiAgaGVpZ2h0OiAxNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLXJpZ2h0OiA2cHg7XFxufVxcbi5zaXRlX3NxdWFyZSA+IGRpdiAucmVkX3NxdWFyZVtkYXRhLXYtMmFmMDgzN2NdIHtcXG4gIGJhY2tncm91bmQ6ICNmZjU3MzM7XFxufVxcbi5zaXRlX3NxdWFyZSA+IGRpdiAuYmx1ZV9zcXVhcmVbZGF0YS12LTJhZjA4MzdjXSB7XFxuICBiYWNrZ3JvdW5kOiAjNzk0OGVhO1xcbn1cXG4uc2l0ZV9zcXVhcmUgPiBkaXYgLmdyZWVuX3NxdWFyZVtkYXRhLXYtMmFmMDgzN2NdIHtcXG4gIGJhY2tncm91bmQ6ICMwMGJhYWQ7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLnBvbGx1dGlvbkxpY2VuY2VJbmZvIC5tYWluX2NvbnRlbnQgPiBkaXYudGhpcmRfdyxcXG4ucG9sbHV0aW9uTGljZW5jZUluZm8gLm1haW5fY29udGVudCA+IGRpdi5oYWxmX3cge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ucG9sbHV0aW9uTGljZW5jZUluZm8gLm1haW5fY29udGVudCA+IGRpdi50aGlyZF93ID4gc3BhbixcXG4ucG9sbHV0aW9uTGljZW5jZUluZm8gLm1haW5fY29udGVudCA+IGRpdi5oYWxmX3cgPiBzcGFuIHtcXG4gIGZsZXg6IDE7XFxuICBjb2xvcjogIzEyMTIzNjtcXG59XFxuLnBvbGx1dGlvbkxpY2VuY2VJbmZvIC5tYWluX2NvbnRlbnQgPiBkaXYudGFidGxldGl0bGUgPiBzcGFuIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubW9yZWhlaWdodFtkYXRhLXYtZjkwMTM0NjJdIHtcXG4gIG1heC1oZWlnaHQ6IDI3MHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLm5vZGF0YVtkYXRhLXYtZjkwMTM0NjJdIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMjJweDtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIG1hcmdpbjogNXB4IDBweDtcXG59XFxuLnBvbF90aXRsZVtkYXRhLXYtZjkwMTM0NjJdIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XFxuICBsaW5lLWhlaWdodDogMjJweDtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbi5wb2xfZmFjdG9yW2RhdGEtdi1mOTAxMzQ2Ml0ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xcbiAgY29sb3I6ICMxMjEyMzY7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXG4gIG1hcmdpbjogNXB4IDBweDtcXG59XFxuLnBvbF9vdGhlcltkYXRhLXYtZjkwMTM0NjJdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAxMHB4IDIwcHggNXB4O1xcbn1cXG4ucG9sX290aGVyIC5wb2xfZmlyc3RbZGF0YS12LWY5MDEzNDYyXSB7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxufVxcbi5wb2xfb3RoZXIgLnBvbF9zZWNvbmRbZGF0YS12LWY5MDEzNDYyXSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxuICBjb2xvcjogIzEyMTIzNjtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XFxufVxcbi5wb2xfb3RoZXIgLnBvbF90aHJpZFtkYXRhLXYtZjkwMTM0NjJdIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBsaW5lLWhlaWdodDogMjJweDtcXG4gIGNvbG9yOiAjNDQ3YmZjO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiQC9hc3NldHMvcG9sbHV0aW9uLXRhYi1iZy5wbmdcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5pbnRvLW1hcFtkYXRhLXYtMTEyMTE0MmZdIHtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbn1cXG4udGFiLXdyYXBwZXJbZGF0YS12LTExMjExNDJmXSB7XFxuICBtYXJnaW46IDEwcHggMDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBwYWRkaW5nOiAwcHggMHB4IDEwcHg7XFxuICBib3gtc2hhZG93OiAwcHggNXB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMDMpO1xcbn1cXG4udGFiLXdyYXBwZXIgLnRhYi1pdGVtW2RhdGEtdi0xMTIxMTQyZl0ge1xcbiAgd2lkdGg6IDUwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVxcbi50YWItd3JhcHBlciAuYWN0aXZlW2RhdGEtdi0xMTIxMTQyZl0ge1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC44KTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgYm90dG9tO1xcbiAgYmFja2dyb3VuZC1zaXplOiAyN3B4IDhweDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9vbmxpbmVTaXRlSW5mby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yYWYwODM3YyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjc3ZWQxYWI5XCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vb25saW5lU2l0ZUluZm8udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MmFmMDgzN2MmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9vbmxpbmVTaXRlSW5mby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yYWYwODM3YyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wb2xsdXRpb25MaWNlbmNlSW5mby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjQ4ZjEyODMwXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcG9sbHV0aW9uTGljZW5jZUluZm8udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wb2xsdXRpb25MaWNlbmNlSW5mby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wb2xsdXRpb25MaWNlbmNlSW5mby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD1mOTAxMzQ2MiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjdjZGE4YzRiXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcG9sbHV0aW9uTGljZW5jZUluZm8udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9ZjkwMTM0NjImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wb2xsdXRpb25MaWNlbmNlSW5mby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD1mOTAxMzQ2MiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wb3J0SW5mb0RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xMTIxMTQyZiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjNhNGZjMWE0XCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcG9ydEluZm9EZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MTEyMTE0MmYmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wb3J0SW5mb0RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xMTIxMTQyZiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUEwQUFBQU9DQVlBQUFEMGY1YlNBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFEN1NVUkJWQ2lSamMrOVNzUkFGTVh4LzVsTlJLMXQzZFpLQzBXMnNCR0RoUWcrZ0ZwdmJXWEFEOWhHVU1RSHNMRlp3U2V3UzJFaHRqNkNzQ0NXTmhiTEpwTnJzMFV5YXlTM204djVuWmtSd1NUbnhaSFFLZGdxNG8yOGM1amRhRlROdUJxNG5Hd0tIc0hXQUdGc0VmbUhzTGlHVk9vZ0RBREo5c0NXR3BIaHZ2NUFPZkRUaU9hOWV3SStBM1QvTXRDNEVUMWY2eHZwcnJwYmlEdHBlTFVMRnpMYnE1N0h1ZC8vRisyY1RkWU5kcXU3RXFVYmZZdHJ4Y2xGTVJRc0F3NmpCOHlGellnUjhERnR1WTFrSE0rRXdqRzZRSGY2L3ZlWlA3V1p5RkFxbFl1dGhaRkZrYm1oVjduU0VoVFpWZndhRmM3M2hFN2FHVHlRL0FLYjdrYSsvLy9EOEFBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFRQUFBQUlDQVlBQUFEZU0xNEZBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFCZ1NVUkJWQWlaUllzeERrQkFGQVhuRXdvSjRxK1FPSUoyRS85R0RxRFVPZ0dIY3hhRmhFSjJ2VzRtODFDMVRkVXEvbzI1cXUxQkNzQXcrT0s2MGdOa2tkQTFqYTlGMGowSjRyN0pub2NUZ0xMMHJYUFRDZ2hkWjMyRTcydHpCT0FGUHlrUFRvR1lWRGNBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBRGNBQUFBUUNBWUFBQUN5Y3VmSUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQURuU1VSQlZFaUozWlRSYWNSQURFVGZhTmVrZ092aGVzaGZ3bFdWajRBVEROZVVBNWMyMHNNVkVJaXRmS3dWdTRBN1REU3c3RXFzQmcwU0l6WTR2Zm9qenNHWXpDY3Fva29Vb0xxb1FHV2FLMVlLTERGenU5MEsyc1N5OW1mMlN0UktCYnk5NThpeGNpbithOGxwNVdQaGkvcmc4MDNjamlGL0c0ZXUxNSt3M28vOGNBVDQ5K0lBNU05R1hqeXQ0aVlPT3paeUY2emlQSmU0Y2VoNkF6aTllQ3BoZ1RhNWgxeFRBeTZ3WGN0TWtIOUNpRXRvSmhEaWtwa0ptZGR5SExvTGdHVjFTZ0RMNnBTUWNTMFhwd1F3dnJudTJjczlZUjluWGFsODdkM0lUZUQrUGc1ZEgrRXZQTkZOTlJOWHk0NEFBQUFBU1VWT1JLNUNZSUk9XCIiLCIvL+W9k+WJjeeUteiEkeaXtumXtC0t5b2T5pelXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRUaGlzRGF0ZShlKSB7XHJcbi8vK1wiIFwiK2grXCI6XCIrTStcIjpcIitzO1xyXG5cdFx0bGV0IG5vd1RpbWUgPSBcIlwiO1xyXG5cdFx0bGV0IHRpbWU9IG5ldyBEYXRlKCk7XHJcblx0XHRsZXQgeT10aW1lLmdldEZ1bGxZZWFyKCk7XHJcblx0XHRsZXQgbG09dGltZS5nZXRNb250aCgpO1xyXG5cdFx0XHRsbT1sbTwxMD8nMCcrbG06bG07XHJcblx0XHRsZXQgbT10aW1lLmdldE1vbnRoKCkrMTtcclxuXHRcdFx0bT1tPDEwPycwJyttOm07XHJcblx0XHRsZXQgZD10aW1lLmdldERhdGUoKTtcclxuXHRcdFx0ZD1kPDEwPycwJytkOmQ7XHJcblx0XHRsZXQgaD10aW1lLmdldEhvdXJzKCk7XHJcblx0XHRcdGg9aDwxMD8nMCcraDpoO1xyXG5cdFx0bGV0IE0gPSB0aW1lLmdldE1pbnV0ZXMoKTtcclxuXHRcdFx0TT1NPDEwPycwJytNOk07XHJcblx0XHRsZXQgcyA9IHRpbWUuZ2V0U2Vjb25kcygpO1xyXG5cdFx0XHRzPXM8MTA/JzAnK3M6cztcclxuXHRcdGlmIChlID09PSAxKSB7XHJcblx0XHRcdG5vd1RpbWU9IHkrXCItXCIrIG0rXCItXCIrZCArICcgJyArIGggKyAnOicgKyBNICsgJzonICsgc1xyXG5cdFx0fWVsc2UgaWYoZSA9PSA0KXsvL+W9k+aciOeahOesrOS4gOWkqVxyXG5cdFx0XHRub3dUaW1lPSB5K1wiLVwiKyBtK1wiLTFcIjtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdG5vd1RpbWU9IHkrXCItXCIrIG0rXCItXCIrZFxyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG5vd1RpbWU7XHJcbn1cclxuLy8g6L2s5YyW5pe26Ze0XHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUsbikge1xyXG5cdFx0bGV0IHRpbWU9IG5ldyBEYXRlKGRhdGUpO1xyXG5cdFx0bGV0IG5vd1RpbWU9IFwiXCI7XHJcblx0XHRsZXQgeT10aW1lLmdldEZ1bGxZZWFyKCk7XHJcblx0XHRsZXQgbT10aW1lLmdldE1vbnRoKCkrMTtcclxuXHRcdFx0bT1tPDEwPycwJyttOm07XHJcblx0XHRsZXQgZD10aW1lLmdldERhdGUoKTtcclxuXHRcdFx0ZD1kPDEwPycwJytkOmQ7XHJcblx0XHRsZXQgaD10aW1lLmdldEhvdXJzKCk7XHJcblx0XHRcdGg9aDwxMD8nMCcraDpoO1xyXG5cdFx0bGV0IE0gPSB0aW1lLmdldE1pbnV0ZXMoKTtcclxuXHRcdFx0TT1NPDEwPycwJytNOk07XHJcblx0XHRsZXQgcyA9IHRpbWUuZ2V0U2Vjb25kcygpO1xyXG5cdFx0XHRzPXM8MTA/JzAnK3M6cztcclxuXHRcdGlmKG49PVwieVwifHxuPT1cIuW5tFwiKXtcclxuXHRcdFx0bm93VGltZT0geVxyXG5cdFx0fWVsc2UgaWYobj09XCJNXCJ8fG49PVwi5pyIXCIpe1xyXG5cdFx0XHRub3dUaW1lPSB5K1wiLVwiKyBtXHJcblx0XHR9ZWxzZSBpZihuPT1cIm1cIil7XHJcblx0XHRcdG5vd1RpbWU9IHkrXCItXCIrIG0rXCItXCIrZCtcIiBcIitoK1wiOlwiK01cclxuXHRcdH1lbHNlIGlmKG49PVwiaFwifHxuPT1cIuaXtlwiKXtcclxuXHRcdFx0bm93VGltZT0geStcIi1cIisgbStcIi1cIitkK1wiIFwiK2hcclxuXHRcdH1lbHNlIGlmKG49PVwiZFwifHxuPT1cIuaXpVwiKXtcclxuXHRcdFx0bm93VGltZT0geStcIi1cIisgbStcIi1cIitkXHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0bm93VGltZT0geStcIi1cIisgbStcIi1cIitkK1wiIFwiK2grXCI6XCIrTStcIjpcIitzXHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbm93VGltZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaG91ckRhdGVGb3JtYXQoZGF0ZSkge1xyXG5cdGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cdGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcblx0bGV0IGRheSA9IGRhdGUuZ2V0RGF0ZSgpO1xyXG5cdGxldCBob3VyID0gZGF0ZS5nZXRIb3VycygpO1xyXG5cdGRhdGUgPSB5ZWFyICsgJy0nICsgKG1vbnRoID4gOSA/IG1vbnRoIDogJzAnICsgbW9udGgpICsgJy0nICsgKGRheSA+IDkgPyBkYXkgOiAnMCcgKyBkYXkpICsgJyAnICsgKGhvdXIgPiA5ID8gaG91ciA6ICcwJyArIGhvdXIpO1xyXG5cdHJldHVybiBkYXRlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBtb250aERhdGVGb3JtYXQoZGF0ZSkge1xyXG5cdGxldCB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xyXG5cdGxldCBtb250aCA9IGRhdGUuZ2V0TW9udGgoKSArIDE7XHJcblx0ZGF0ZSA9IHllYXIgKyAnLScgKyAobW9udGggPiA5ID8gbW9udGggOiAnMCcgKyBtb250aCk7XHJcblx0cmV0dXJuIGRhdGU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZvdXJIb3VyVGltZSgpIHtcclxuXHRsZXQgbm93RGF0ZSA9IG5ldyBEYXRlKCk7XHJcblx0bGV0IHllYXIgPSBub3dEYXRlLmdldEZ1bGxZZWFyKCk7XHJcblx0bGV0IG1vbnRoID0gbm93RGF0ZS5nZXRNb250aCgpICsgMTtcclxuXHRsZXQgZGF5ID0gbm93RGF0ZS5nZXREYXRlKCk7XHJcblx0bGV0IGhvdXJzID0gbm93RGF0ZS5nZXRIb3VycygpO1xyXG5cdGlmIChob3VycyA8IDQgJiYgaG91cnMgPj0gMCkge1xyXG5cdFx0aG91cnMgPSAwO1xyXG5cdH0gZWxzZSBpZiAoaG91cnMgPCA4ICYmIGhvdXJzID49IDQpIHtcclxuXHRcdGhvdXJzID0gNDtcclxuXHR9IGVsc2UgaWYgKGhvdXJzIDwgMTIgJiYgaG91cnMgPj0gOCkge1xyXG5cdFx0aG91cnMgPSA4O1xyXG5cdH0gZWxzZSBpZiAoaG91cnMgPCAxNiAmJiBob3VycyA+PSAxMikge1xyXG5cdFx0aG91cnMgPSAxMjtcclxuXHR9IGVsc2UgaWYgKGhvdXJzIDwgMjAgJiYgaG91cnMgPj0gMTYpIHtcclxuXHRcdGhvdXJzID0gMTY7XHJcblx0fSBlbHNlIGlmIChob3VycyA8PSAyMyAmJiBob3VycyA+PSAyMCkge1xyXG5cdFx0aG91cnMgPSAyMDtcclxuXHR9XHJcblx0bW9udGggPSBtb250aCA8IDEwID8gXCIwXCIgKyBtb250aCA6IG1vbnRoO1xyXG5cdGRheSA9IGRheSA8IDEwID8gXCIwXCIgKyBkYXkgOiBkYXk7XHJcblx0aG91cnMgPSBob3VycyA8IDEwID8gXCIwXCIgKyBob3VycyA6IGhvdXJzO1xyXG5cdHJldHVybiB5ZWFyKyctJyttb250aCsnLScrZGF5KycgJytob3VycysnOjAwOjAwJ1xyXG59XHJcbiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vb25saW5lU2l0ZUluZm8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJhZjA4MzdjJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL29ubGluZVNpdGVJbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vb25saW5lU2l0ZUluZm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL29ubGluZVNpdGVJbmZvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTJhZjA4MzdjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiMmFmMDgzN2NcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnMmFmMDgzN2MnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnMmFmMDgzN2MnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnMmFmMDgzN2MnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL29ubGluZVNpdGVJbmZvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYWYwODM3YyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCcyYWYwODM3YycsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvY29tcG9uZW50cy9vbmxpbmVTaXRlSW5mby52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL29ubGluZVNpdGVJbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9vbmxpbmVTaXRlSW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9vbmxpbmVTaXRlSW5mby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yYWYwODM3YyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL29ubGluZVNpdGVJbmZvLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0yYWYwODM3YyZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vcG9sbHV0aW9uTGljZW5jZUluZm8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWY5MDEzNDYyJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3BvbGx1dGlvbkxpY2VuY2VJbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vcG9sbHV0aW9uTGljZW5jZUluZm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL3BvbGx1dGlvbkxpY2VuY2VJbmZvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIlxuaW1wb3J0IHN0eWxlMSBmcm9tIFwiLi9wb2xsdXRpb25MaWNlbmNlSW5mby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD1mOTAxMzQ2MiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcImY5MDEzNDYyXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJ2Y5MDEzNDYyJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJ2Y5MDEzNDYyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJ2Y5MDEzNDYyJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9wb2xsdXRpb25MaWNlbmNlSW5mby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjkwMTM0NjImc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignZjkwMTM0NjInLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2NvbXBvbmVudHMvcG9sbHV0aW9uTGljZW5jZUluZm8udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wb2xsdXRpb25MaWNlbmNlSW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcG9sbHV0aW9uTGljZW5jZUluZm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcG9sbHV0aW9uTGljZW5jZUluZm8udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcG9sbHV0aW9uTGljZW5jZUluZm8udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9ZjkwMTM0NjImbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wb2xsdXRpb25MaWNlbmNlSW5mby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZjkwMTM0NjImc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL3BvcnRJbmZvRGV0YWlsLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xMTIxMTQyZiZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9wb3J0SW5mb0RldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL3BvcnRJbmZvRGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9wb3J0SW5mb0RldGFpbC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0xMTIxMTQyZiZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjExMjExNDJmXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzExMjExNDJmJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzExMjExNDJmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzExMjExNDJmJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9wb3J0SW5mb0RldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MTEyMTE0MmYmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignMTEyMTE0MmYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL3BvcnRJbmZvRGV0YWlsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcG9ydEluZm9EZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BvcnRJbmZvRGV0YWlsLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BvcnRJbmZvRGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTExMjExNDJmJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcG9ydEluZm9EZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTExMjExNDJmJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==