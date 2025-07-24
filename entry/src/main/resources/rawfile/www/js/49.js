(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/companyDetail.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/companyDetail.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_qrbaseInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/qrbaseInfo */ "./src/views/pollution/detail/components/qrbaseInfo.vue");
/* harmony import */ var _components_redCodeInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/redCodeInfo */ "./src/views/pollution/detail/components/redCodeInfo.vue");
/* harmony import */ var _components_healthCondition__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/healthCondition */ "./src/views/pollution/detail/components/healthCondition.vue");
/* harmony import */ var _api_pollution_source__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/api/pollution_source */ "./src/api/pollution_source.js");
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vant */ "./node_modules/vant/es/index.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// 云南弘祥化工有限公司





/* harmony default export */ __webpack_exports__["default"] = ({
  name: "companyDetail",
  components: {
    qrbaseInfo: _components_qrbaseInfo__WEBPACK_IMPORTED_MODULE_2__["default"],
    redCodeInfo: _components_redCodeInfo__WEBPACK_IMPORTED_MODULE_3__["default"],
    healthCondition: _components_healthCondition__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      dwid: "",
      wrybm: "",
      isShow: {},
      envCodeInfo: {},
      entInfo: {},
      license: {},
      consInfos: {},
      //建设项目
      monitorInfos: {},
      standNum: 0,
      totalNum: 0,
      jdstandNum: 0,
      jdtotalNum: 0,
      supeMonitorInfos: {},
      //监督性监测
      punishInfos: {},
      tsgspsInfos: {},
      //二次污普
      radiationInfo: {},
      //辐射安全
      solidWasteInfos: {},
      //固废，危废信息
      ydzfInfos: {},
      //执法检查
      envCaseInfos: {},
      //突发环境事件
      licenseRpt: {},
      //排污许可证执行报告
      type: 'red',
      showMore: true,
      showMore1: true,
      showMore2: true,
      showMore3: true,
      showMore4: true,
      behaviorlabels: '',
      taskInfo: [] //申诉整改信息

    };
  },
  watch: {
    $route: {
      handler: function handler(route) {
        this.type = route.query.type;
      },
      immediate: true
    }
  },
  mounted: function mounted() {
    this.dwid = this.$route.query.id;
    this.wrybm = this.$route.query.wrybm || '';
    this.loadData();
  },
  filters: {
    getStatus: function getStatus(key) {
      var status = "";

      if (key == '01') {
        status = "工业源";
      } else if (key == '02') {
        status = "农业源";
      } else if (key == '02') {
        status = "生活源";
      } else if (key == '02') {
        status = "集中式污染治理设施";
      }

      return status;
    },
    filterColor: function filterColor(key) {
      var status = "";

      if (key == '健康') {
        status = 'greenfont';
      } else if (key == '预警') {
        status = 'gryellowfonteenfont';
      } else if (key == '异常') {
        status = 'redfont';
      } else {
        status = 'blackfont';
      }

      return status;
    }
  },
  methods: {
    getMore: function getMore() {
      this.showMore = !this.showMore;
    },
    getMore1: function getMore1() {
      this.showMore1 = !this.showMore1;
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
    loadData: function loadData() {
      var _this = this;

      var info = {
        id: this.dwid
      };
      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_5__["pwInfo"])(info).then(function (res) {
        if (res.code == 200) {
          var rdata = res.data;
          _this.isShow = rdata.index;
          _this.envCodeInfo = rdata.envCodeInfo;
          _this.entInfo = rdata.entInfo;
          _this.behaviorlabels = _this.entInfo.behaviorLabels[0];
          _this.license = rdata.license;
          _this.consInfos = rdata.consInfos;
          _this.monitorInfos = rdata.monitorInfos;

          _this.monitorInfos.forEach(function (item) {
            _this.standNum += item.standardNum;
            _this.totalNum += item.total;
          });

          _this.supeMonitorInfos = rdata.supeMonitorInfos;

          _this.supeMonitorInfos.forEach(function (item) {
            _this.jdstandNum += item.standardNum;
            _this.jdtotalNum += item.total;
          });

          _this.punishInfos = rdata.punishInfos;
          _this.tsgspsInfos = rdata.tsgspsInfos;
          _this.radiationInfo = rdata.radiationInfo;
          _this.solidWasteInfos = rdata.solidWasteInfos;
          _this.ydzfInfos = rdata.ydzfInfos;
          _this.envCaseInfos = rdata.envCaseInfos;
          _this.licenseRpt = rdata.licenseImplReportInfo;
        }
      });
      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_5__["getHbmCheckRecord"])(this.dwid).then(function (res) {
        _this.taskInfo = res.data;
        console.log(res.data.length);

        if (res.data.length > 0) {
          _this.isShow.taskInfo = true;
        } else {
          _this.isShow.taskInfo = false;
        }
      });
    },
    toMap: function toMap() {
      if (this.entInfo.longitude) {
        this.$router.push({
          // path: '/GeoMap',
          name: "locationMap",
          query: {
            id: this.dwid,
            siteName: this.entInfo.entName,
            JD: this.entInfo.longitude,
            WD: this.entInfo.latitude,
            types: 'basic'
          }
        });
      } else {
        Object(vant__WEBPACK_IMPORTED_MODULE_6__["Toast"])('未获取到定位');
      }
    },
    //企业基本信息
    baseInfo: function baseInfo() {
      this.$router.push({
        name: "companyBaseInfo",
        query: {
          id: this.dwid
        }
      });
    },
    //申诉整改信息
    showTaskInfo: function showTaskInfo(item) {
      this.$router.push({
        name: 'ClueDetail',
        params: {
          flag: '闭环管理整改信息详情',
          clueId: item.ID
        }
      });
    },
    //许可证详情
    licenceInfo: function licenceInfo(item) {
      this.$router.push({
        name: "licenceDetail",
        query: {
          // id: item.licenseNo,
          id: this.dwid
        }
      });
    },
    //建设项目
    buildInfo: function buildInfo(row) {
      // if(flag == 'filings'){
      console.log(row.type);

      if (row.type == '备案') {
        this.$router.push({
          name: "buildFilingsDetail",
          query: {
            // id: this.dwid,
            id: row.id,
            type: row.type
          }
        });
      } else if (row.type == '自验收') {
        this.$router.push({
          name: "buildSelfaccepttInfo",
          query: {
            id: row.id,
            type: row.type
          }
        });
      } else {
        this.$router.push({
          name: "buildProjectInfo",
          query: {
            // id: this.dwid,
            id: row.id,
            type: row.type
          }
        });
      }
    },
    //在线监控
    monitorInfo: function monitorInfo() {
      this.$router.push({
        name: "portInfoDetail",
        query: {
          id: this.dwid
        }
      }); // this.$router.push({
      // 	path: "/MonitorLimitDes",
      // 	query: {
      // 		id: this.dwid,
      // 	}
      // });
    },
    //废气排口
    portInfo: function portInfo(item, type) {
      this.$router.push({
        name: "portInfoDetail",
        query: {
          // id: this.dwid,
          deviceId: item.deviceId,
          psCode: item.psCode,
          name: item.deviceName,
          type: type
        }
      });
    },
    //危废、固废信息
    wasteInfo: function wasteInfo() {
      this.$router.push({
        name: "wasteDetail",
        query: {
          from: "污染源",
          id: this.dwid,
          name: this.envCodeInfo.entName
        }
      });
    },
    //行政处罚
    penaltyInfo: function penaltyInfo(item) {
      this.$router.push({
        name: "penaltyDetail",
        query: {
          // id: this.dwid,
          id: item.id,
          title: "行政处罚详情"
        }
      });
    },
    //执法检查
    lawInfo: function lawInfo(item) {
      this.$router.push({
        name: "lawCheckDetail",
        query: {
          id: item.id
        }
      });
    },
    //辐射安全
    safeInfo: function safeInfo(id) {
      this.$router.push({
        name: "safeDetail",
        query: {
          type: 0,
          id: this.dwid,
          // id: id,
          title: "辐射安全"
        }
      });
    },
    //第二次污染普查
    twoPollution: function twoPollution() {// this.$router.push({path: "/complaintDetail"});
    },
    //排污许可证执行报告
    pollutionReport: function pollutionReport() {// this.$router.push({path: "/registeDetail"});
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/components/healthCondition.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/components/healthCondition.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_pollution_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/pollution_source */ "./src/api/pollution_source.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "healthCondition",
  props: {
    id: String
  },
  data: function data() {
    return {
      total: [],
      srcList: [{
        src: __webpack_require__(/*! @/assets/polluter/purple.png */ "./src/assets/polluter/purple.png"),
        background: 'rgba(128, 78, 245, 0.05)'
      }, {
        src: __webpack_require__(/*! @/assets/polluter/blue.png */ "./src/assets/polluter/blue.png"),
        background: 'rgba(42, 130, 228, 0.05)'
      }, {
        src: __webpack_require__(/*! @/assets/polluter/light_green.png */ "./src/assets/polluter/light_green.png"),
        background: 'rgba(6, 194, 181, 0.05)'
      }, {
        src: __webpack_require__(/*! @/assets/polluter/orange.png */ "./src/assets/polluter/orange.png"),
        background: 'rgba(255, 175, 0, 0.05)'
      }, {
        src: __webpack_require__(/*! @/assets/polluter/red.png */ "./src/assets/polluter/red.png"),
        background: 'rgba(229, 108, 108, 0.05)'
      }, {
        src: __webpack_require__(/*! @/assets/polluter/green.png */ "./src/assets/polluter/green.png"),
        background: 'rgba(43, 210, 110, 0.05)'
      }]
    };
  },
  watch: {
    'id': function id() {
      this.getInfoData();
    }
  },
  mounted: function mounted() {},
  methods: {
    //查询所有企业相关详情
    getInfoData: function getInfoData() {
      var _this = this;

      //总体情况
      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_1__["questionByCompanyCode"])(this.id).then(function (res) {
        _this.total = res.data || [];
      }).finally(function (a) {});
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/components/redCodeInfo.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/components/redCodeInfo.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api_pollution_source__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api/pollution_source */ "./src/api/pollution_source.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "redCodeInfo",
  props: {
    id: String
  },
  data: function data() {
    return {
      // ======================= 红码赋码情况
      redCodeInfos: [],
      showClue: false,
      // anchorList : [],
      clueStatus: '',
      detail: {},
      active: 1,
      anchorList: [{
        name: "基本信息",
        type: 0,
        user: '填报人：张三',
        time: '填报时间：2023-12-34'
      }, {
        name: "分管局长审批",
        type: 1,
        time: ''
      }, {
        name: "支队分发",
        type: 2,
        time: ''
      }, {
        name: "分局指派",
        type: 3,
        time: ''
      }, {
        name: "分局核实",
        type: 4,
        time: ''
      }, {
        name: "填报人办结",
        type: 5,
        time: ''
      }, {
        name: "结束",
        type: 6,
        time: ''
      }]
    };
  },
  watch: {
    'id': function id() {
      this.getInfoData();
    }
  },
  mounted: function mounted() {},
  methods: {
    //查询所有企业相关详情
    getInfoData: function getInfoData() {
      var _this = this;

      //红码赋码情况
      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_1__["redCodeByCompanyId"])(this.id).then(function (res) {
        _this.redCodeInfos = res.data;
      });
    },
    showPopup: function showPopup(item) {
      this.showClue = true;
      this.getDetailData(item.clue_id);
    },
    //获取详情
    getDetailData: function getDetailData(clueId) {
      var _this2 = this;

      Object(_api_pollution_source__WEBPACK_IMPORTED_MODULE_1__["queryClueDetail"])({
        id: clueId
      }).then(function (res) {
        if (res.code === '200') {
          _this2.clueStatus = res.data.detail_info.status;
          _this2.detail = res.data.detail_list.length > 0 ? res.data.detail_list[res.data.detail_list.length - 1] : {};

          if (res.data.distribution.length > 0 && res.data.distribution[res.data.distribution.length - 1].TYPE === '分局') {
            _this2.anchorList = [{
              name: "基本信息",
              type: 1,
              time: ''
            }, {
              name: "分管局长审批",
              type: 2,
              time: ''
            }, {
              name: "支队分发",
              type: 3,
              time: ''
            }, {
              name: "分局指派",
              type: 4,
              time: ''
            }, {
              name: "分局核实",
              type: 5,
              time: ''
            }, {
              name: "填报人办结",
              type: 6,
              time: ''
            }, {
              name: "结束",
              type: 7,
              time: ''
            }];
            _this2.anchorList[0].user = '填报人：' + _this2.detail.create_user;
            _this2.anchorList[0].time = '填报时间：' + _this2.detail.create_time;
            _this2.active = _this2.clueStatus === '重新填写' ? 1 : _this2.clueStatus === '待审批' ? 2 : _this2.clueStatus === '待分发' ? 3 : _this2.clueStatus === '待指派' ? 4 : _this2.clueStatus === '待核实' ? 5 : _this2.clueStatus === '待办结' ? 6 : 7;
            _this2.anchorList[1].user = _this2.active > 2 && res.data.approve.length > 0 ? '审批人：' + res.data.approve[res.data.approve.length - 1].USER_NAME : '';
            _this2.anchorList[1].time = _this2.active > 2 && res.data.approve.length > 0 ? '审批时间：' + res.data.approve[res.data.approve.length - 1].TIME : '';
            _this2.anchorList[2].user = _this2.active > 3 && res.data.distribution.length > 0 ? '分发人：' + res.data.distribution[res.data.distribution.length - 1].USER_NAME : '';
            _this2.anchorList[2].time = _this2.active > 3 && res.data.distribution.length > 0 ? '分发时间：' + res.data.distribution[res.data.distribution.length - 1].TIME : '';
            _this2.anchorList[3].user = _this2.active > 4 && res.data.bureau_assign.length > 0 ? '指派人：' + res.data.bureau_assign[res.data.bureau_assign.length - 1].USER_NAME : '';
            _this2.anchorList[3].time = _this2.active > 4 && res.data.bureau_assign.length > 0 ? '指派时间：' + res.data.bureau_assign[res.data.bureau_assign.length - 1].TIME : '';
            _this2.anchorList[4].user = _this2.active > 5 && res.data.verify.length > 0 ? '核实人：' + res.data.verify[res.data.verify.length - 1].USER_NAME : '';
            _this2.anchorList[4].time = _this2.active > 5 && res.data.verify.length > 0 ? '核实时间：' + res.data.verify[res.data.verify.length - 1].TIME : '';
            _this2.anchorList[5].user = _this2.active > 6 && res.data.completion.length > 0 ? '办结人：' + res.data.completion[res.data.completion.length - 1].USER_NAME : '';
            _this2.anchorList[5].time = _this2.active > 6 && res.data.completion.length > 0 ? '办结时间：' + res.data.completion[res.data.completion.length - 1].TIME : '';
          } else {
            _this2.anchorList = [{
              name: "基本信息",
              type: 1,
              time: ''
            }, {
              name: "分管局长审批",
              type: 2,
              time: ''
            }, {
              name: "支队分发",
              type: 3,
              time: ''
            }, {
              name: "支队/分局核实",
              type: 4,
              time: ''
            }, {
              name: "填报人办结",
              type: 5,
              time: ''
            }, {
              name: "结束",
              type: 6,
              time: ''
            }];

            if (res.data.distribution.length > 0) {
              _this2.anchorList[3].name = '支队核实';
            }

            _this2.anchorList[0].user = '填报人：' + _this2.detail.create_user;
            _this2.anchorList[0].time = '填报时间：' + _this2.detail.create_time;
            _this2.active = _this2.clueStatus === '重新填写' ? 1 : _this2.clueStatus === '待审批' ? 2 : _this2.clueStatus === '待分发' ? 3 : _this2.clueStatus === '待核实' ? 4 : _this2.clueStatus === '待办结' ? 5 : 6;
            _this2.anchorList[1].user = _this2.active > 2 && res.data.approve.length > 0 ? '审批人：' + res.data.approve[res.data.approve.length - 1].USER_NAME : '';
            _this2.anchorList[1].time = _this2.active > 2 && res.data.approve.length > 0 ? '审批时间：' + res.data.approve[res.data.approve.length - 1].TIME : '';
            _this2.anchorList[2].user = _this2.active > 3 && res.data.distribution.length > 0 ? '分发人：' + res.data.distribution[res.data.distribution.length - 1].USER_NAME : '';
            _this2.anchorList[2].time = _this2.active > 3 && res.data.distribution.length > 0 ? '分发时间：' + res.data.distribution[res.data.distribution.length - 1].TIME : '';
            _this2.anchorList[3].user = _this2.active > 4 && res.data.verify.length > 0 ? '核实人：' + res.data.verify[res.data.verify.length - 1].USER_NAME : '';
            _this2.anchorList[3].time = _this2.active > 4 && res.data.verify.length > 0 ? '核实时间：' + res.data.verify[res.data.verify.length - 1].TIME : '';
            _this2.anchorList[4].user = _this2.active > 5 && res.data.completion.length > 0 ? '办结人：' + res.data.completion[res.data.completion.length - 1].USER_NAME : '';
            _this2.anchorList[4].time = _this2.active > 5 && res.data.completion.length > 0 ? '办结时间：' + res.data.completion[res.data.completion.length - 1].TIME : '';
          }

          if (_this2.clueStatus === '重新填写') {
            _this2.active = 0;
          }
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/companyDetail.vue?vue&type=template&id=81d1bf62&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/companyDetail.vue?vue&type=template&id=81d1bf62& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "companydetail", staticStyle: { background: "#fff" } },
    [
      _c("van-nav-bar", {
        attrs: { title: "企业详情", "left-arrow": "" },
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
          _c("qrbase-info", {
            attrs: { type: _vm.type, envCodeInfo: _vm.envCodeInfo },
          }),
          _vm.type == "red"
            ? _c("red-code-info", { attrs: { id: _vm.dwid } })
            : _vm._e(),
          _c("health-condition", { attrs: { id: _vm.wrybm } }),
          _c("div", { staticClass: "company-info" }, [
            _c("div", { staticClass: "company_title" }, [
              _c("span", [_vm._v("企业基本信息")]),
              _c("span", { staticClass: "title_tips green_tips" }, [
                _vm._v("健康状态"),
                _c(
                  "span",
                  { class: _vm._f("filterColor")(_vm.behaviorlabels) },
                  [_vm._v(_vm._s(_vm.behaviorlabels || "-"))]
                ),
              ]),
              _c(
                "span",
                { staticClass: "detail_title", on: { click: _vm.baseInfo } },
                [_vm._v("详情 >")]
              ),
            ]),
            _c("div", { staticClass: "main_content" }, [
              _c("div", [
                _c("span", [_vm._v("污染类别")]),
                _c("span", [_vm._v(_vm._s(_vm.entInfo.ptype))]),
              ]),
              _c("div", [
                _c("span", [_vm._v("行业类别")]),
                _c("span", [_vm._v(_vm._s(_vm.entInfo.category))]),
              ]),
              _c("div", [
                _c("span", [_vm._v("环保联系人")]),
                _c("span", [_vm._v(_vm._s(_vm.entInfo.contact))]),
              ]),
              _c("div", [
                _c("span", [_vm._v("联系方式")]),
                _c("span", [_vm._v(_vm._s(_vm.entInfo.contactTel))]),
              ]),
            ]),
            _c("div", { staticClass: "main_footer mainflex" }, [
              _c(
                "div",
                {
                  staticClass: "main_f_l",
                  on: {
                    click: function ($event) {
                      return _vm.toMap()
                    },
                  },
                },
                [
                  _c("img", {
                    attrs: {
                      src: __webpack_require__(/*! ../../../assets/polluter/position.png */ "./src/assets/polluter/position.png"),
                    },
                  }),
                  _c("span", [_vm._v("地址：" + _vm._s(_vm.entInfo.address))]),
                ]
              ),
            ]),
          ]),
          _vm.isShow.license
            ? _c("div", { staticClass: "company-info" }, [
                _c("div", { staticClass: "company_title" }, [
                  _c("span", [_vm._v("排污许可证")]),
                  _c(
                    "span",
                    {
                      staticClass: "detail_title",
                      on: {
                        click: function ($event) {
                          return _vm.licenceInfo(_vm.license)
                        },
                      },
                    },
                    [_vm._v("详情 >")]
                  ),
                ]),
                _c("div", { staticClass: "main_content" }, [
                  _c("div", { staticClass: "half_width" }, [
                    _c("span", [_vm._v("主要污染物类别")]),
                    _c("span", [_vm._v(_vm._s(_vm.license.mainPolCate))]),
                  ]),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            _vm.license.mainPolCate &&
                            _vm.license.mainPolCate.includes("废气"),
                          expression:
                            "license.mainPolCate&&license.mainPolCate.includes('废气')",
                        },
                      ],
                      staticClass: "half_width",
                    },
                    [
                      _c("span", [_vm._v("大气污染物排放规律")]),
                      _c("span", [_vm._v(_vm._s(_vm.license.gasDisLaw))]),
                    ]
                  ),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            _vm.license.mainPolCate &&
                            _vm.license.mainPolCate.includes("废气"),
                          expression:
                            "license.mainPolCate&&license.mainPolCate.includes('废气')",
                        },
                      ],
                      staticClass: "whole_width",
                    },
                    [
                      _c("span", [_vm._v("大气主要污染物种类")]),
                      _c("span", [_vm._v(_vm._s(_vm.license.gasMainPolCate))]),
                    ]
                  ),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            _vm.license.mainPolCate &&
                            _vm.license.mainPolCate.includes("废气"),
                          expression:
                            "license.mainPolCate&&license.mainPolCate.includes('废气')",
                        },
                      ],
                      staticClass: "whole_width",
                    },
                    [
                      _c("span", [_vm._v("大气污染物排放执行标准")]),
                      _c("span", [_vm._v(_vm._s(_vm.license.gasDisStandard))]),
                    ]
                  ),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            _vm.license.mainPolCate &&
                            _vm.license.mainPolCate.includes("废水"),
                          expression:
                            "license.mainPolCate&&license.mainPolCate.includes('废水')",
                        },
                      ],
                      staticClass: "half_width",
                    },
                    [
                      _c("span", [_vm._v("废水污染物排放规律")]),
                      _c("span", [_vm._v(_vm._s(_vm.license.waterDisLaw))]),
                    ]
                  ),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            _vm.license.mainPolCate &&
                            _vm.license.mainPolCate.includes("废水"),
                          expression:
                            "license.mainPolCate&&license.mainPolCate.includes('废水')",
                        },
                      ],
                      staticClass: "whole_width",
                    },
                    [
                      _c("span", [_vm._v("废水主要污染物种类")]),
                      _c("span", [
                        _vm._v(_vm._s(_vm.license.waterMainPolCate)),
                      ]),
                    ]
                  ),
                  _c(
                    "div",
                    {
                      directives: [
                        {
                          name: "show",
                          rawName: "v-show",
                          value:
                            _vm.license.mainPolCate &&
                            _vm.license.mainPolCate.includes("废水"),
                          expression:
                            "license.mainPolCate&&license.mainPolCate.includes('废水')",
                        },
                      ],
                      staticClass: "whole_width",
                    },
                    [
                      _c("span", [_vm._v("废水污染物排放执行标准")]),
                      _c("span", [
                        _vm._v(_vm._s(_vm.license.waterDisStandard)),
                      ]),
                    ]
                  ),
                ]),
              ])
            : _vm._e(),
          _vm.isShow.consInfos
            ? _c(
                "div",
                {
                  staticClass: "company-info",
                  class:
                    _vm.showMore1 && _vm.consInfos.length > 2
                      ? "moreheight"
                      : "",
                },
                [
                  _c("div", { staticClass: "company_title" }, [
                    _c("span", [_vm._v("建设项目")]),
                    _c("span", { staticClass: "title_tips brown_tips" }, [
                      _vm._v("（" + _vm._s(_vm.consInfos.length) + "个）项目"),
                    ]),
                  ]),
                  _c(
                    "div",
                    { staticClass: "main_content" },
                    _vm._l(_vm.consInfos, function (jsitem, jsi) {
                      return _c(
                        "div",
                        {
                          staticClass: "build_info",
                          on: {
                            click: function ($event) {
                              return _vm.buildInfo(jsitem)
                            },
                          },
                        },
                        [
                          _c("div", [
                            _c(
                              "span",
                              {
                                staticClass: "build_label",
                                class:
                                  jsitem.type == "备案"
                                    ? "build_green"
                                    : jsitem.type == "环评"
                                    ? "build_purple"
                                    : "build_blue",
                              },
                              [_vm._v(_vm._s(jsitem.type))]
                            ),
                            _c("span", [_vm._v(_vm._s(jsitem.projectName))]),
                          ]),
                          _c("div", [
                            _c("span", [
                              _vm._v("建设性质：" + _vm._s(jsitem.attr)),
                            ]),
                            _c("span", [
                              _vm._v(
                                "环评时间：" + _vm._s(jsitem.date.substr(0, 10))
                              ),
                            ]),
                          ]),
                          jsi != _vm.consInfos.length - 1
                            ? _c("div", { staticClass: "bulid_hr" })
                            : _vm._e(),
                        ]
                      )
                    }),
                    0
                  ),
                ]
              )
            : _vm._e(),
          _vm.isShow.consInfos && _vm.consInfos.length > 2
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
                      return _vm.getMore1()
                    },
                  },
                },
                [
                  _c("span", { staticClass: "more" }, [
                    _vm._v(_vm._s(_vm.showMore1 ? "查看更多" : "收起")),
                  ]),
                ]
              )
            : _vm._e(),
          _vm.isShow.monitorInfos
            ? _c(
                "div",
                {
                  staticClass: "company-info",
                  class:
                    _vm.showMore2 && _vm.monitorInfos.length > 2
                      ? "moreheight"
                      : "",
                },
                [
                  _c("div", { staticClass: "company_title" }, [
                    _c("span", [_vm._v("在线监控")]),
                    _c("span", { staticClass: "title_tips brown_tips" }, [
                      _vm._v(
                        "达" +
                          _vm._s(_vm.standNum) +
                          "个/总" +
                          _vm._s(_vm.totalNum) +
                          "个"
                      ),
                    ]),
                  ]),
                  _vm._l(_vm.monitorInfos, function (item) {
                    return [
                      _c("div", { staticClass: "online_blue" }, [
                        _c("span", [_vm._v(_vm._s(item.type) + "排口")]),
                        _c("span", [
                          _vm._v(
                            "排放总量 " + _vm._s(item.disEmissions) + "kg"
                          ),
                        ]),
                      ]),
                      _vm._l(item.outs, function (item2) {
                        return [
                          _c(
                            "div",
                            {
                              staticClass: "online_white",
                              on: {
                                click: function ($event) {
                                  return _vm.portInfo(item2, item.type)
                                },
                              },
                            },
                            [
                              _c("span", [_vm._v(_vm._s(item2.deviceName))]),
                              _c(
                                "span",
                                {
                                  staticClass: "title_tips",
                                  class:
                                    item2.status == "在线"
                                      ? "green_tips"
                                      : "grey_tips",
                                },
                                [_vm._v(_vm._s(item2.status))]
                              ),
                              _c(
                                "span",
                                { class: item2.standard ? "" : "red_tip" },
                                [_vm._v(_vm._s(item2.standard ? "达" : "超"))]
                              ),
                            ]
                          ),
                          _c(
                            "div",
                            {
                              staticClass: "online_data",
                              staticStyle: {
                                background: "rgba(250, 250, 250, 1)",
                              },
                            },
                            [
                              _c("div", { staticClass: "online_data_title" }, [
                                _c("span", [
                                  _vm._v("数据时间：" + _vm._s(item2.dateTime)),
                                ]),
                                _c(
                                  "span",
                                  {
                                    on: {
                                      click: function ($event) {
                                        return _vm.portInfo(item2, item.type)
                                      },
                                    },
                                  },
                                  [_vm._v("详情>")]
                                ),
                              ]),
                              item.type == "废水"
                                ? _c(
                                    "div",
                                    { staticClass: "online_data_info" },
                                    [
                                      _c("div", [
                                        _c("span", [_vm._v("化学需氧量：")]),
                                        _c("span", [
                                          _vm._v(_vm._s(item2.cod) + "mg/L"),
                                        ]),
                                        _c("span", [_vm._v("PH：")]),
                                        _c("span", [_vm._v(_vm._s(item2.ph))]),
                                      ]),
                                      _c("div", [
                                        _c("span", [_vm._v("氨氮：")]),
                                        _c("span", [
                                          _vm._v(_vm._s(item2.nh3) + "mg/L"),
                                        ]),
                                        _c("span", [_vm._v("总氮：")]),
                                        _c("span", [
                                          _vm._v(_vm._s(item2.zd) + "mg/L"),
                                        ]),
                                      ]),
                                      _c("div", [
                                        _c("span", [_vm._v("总磷：")]),
                                        _c("span", [
                                          _vm._v(_vm._s(item2.zl) + "mg/L"),
                                        ]),
                                        _c("span", [_vm._v("悬浮物：")]),
                                        _c("span", [
                                          _vm._v(_vm._s(item2.xfw) + "mg/L"),
                                        ]),
                                      ]),
                                      _c("div", [
                                        _c("span", [_vm._v("总铜：")]),
                                        _c("span", [
                                          _vm._v(_vm._s(item2.zt) + "mg/L"),
                                        ]),
                                        _c("span", [_vm._v("总镍：")]),
                                        _c("span", [
                                          _vm._v(_vm._s(item2.zm) + "mg/L"),
                                        ]),
                                      ]),
                                      _c("div", [
                                        _c("span", [_vm._v("三价铬：")]),
                                        _c("span", [
                                          _vm._v(_vm._s(item2.sjg) + "mg/L"),
                                        ]),
                                        _c("span", [_vm._v("六价铬：")]),
                                        _c("span", [
                                          _vm._v(_vm._s(item2.ljg) + "mg/L"),
                                        ]),
                                      ]),
                                      _c("div", [
                                        _c("span", [_vm._v("氟离子：")]),
                                        _c("span", [
                                          _vm._v(_vm._s(item2.flz) + "mg/L"),
                                        ]),
                                        _c("span", [_vm._v("总余氯：")]),
                                        _c("span", [
                                          _vm._v(_vm._s(item2.zyl) + "mg/L"),
                                        ]),
                                      ]),
                                    ]
                                  )
                                : _vm._e(),
                              item.type == "废气"
                                ? _c(
                                    "div",
                                    { staticClass: "online_data_info" },
                                    [
                                      _c("div", [
                                        _c("span", [_vm._v("烟尘：")]),
                                        _c("span", [
                                          _vm._v(_vm._s(item2.soot) + "mg/m³"),
                                        ]),
                                        _c("span", [_vm._v("二氧化硫：")]),
                                        _c("span", [
                                          _vm._v(_vm._s(item2.so2) + "ug/m³"),
                                        ]),
                                      ]),
                                      _c("div", [
                                        _c("span", [_vm._v("氮氧化物：")]),
                                        _c("span", [
                                          _vm._v(_vm._s(item2.nox) + "ug/m³"),
                                        ]),
                                        _c("span", [_vm._v("一氧化碳：")]),
                                        _c("span", [
                                          _vm._v(_vm._s(item2.co) + "mg/m³"),
                                        ]),
                                      ]),
                                      _c("div", [
                                        _c("span", [_vm._v("氧气：")]),
                                        _c("span", [
                                          _vm._v(_vm._s(item2.o2) + "ug/m³"),
                                        ]),
                                        _c("span", [_vm._v("氯化氢：")]),
                                        _c("span", [
                                          _vm._v(_vm._s(item2.hcl) + "mg/m³"),
                                        ]),
                                      ]),
                                    ]
                                  )
                                : _vm._e(),
                            ]
                          ),
                        ]
                      }),
                    ]
                  }),
                ],
                2
              )
            : _vm._e(),
          _vm.isShow.monitorInfos && _vm.monitorInfos.length > 2
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
          _vm.isShow.supeMonitorInfos
            ? _c(
                "div",
                { staticClass: "company-info" },
                [
                  _c("div", { staticClass: "company_title" }, [
                    _c("span", [_vm._v("监督性监控")]),
                    _c("span", { staticClass: "title_tips brown_tips" }, [
                      _vm._v(
                        "达" +
                          _vm._s(_vm.jdstandNum) +
                          "个/总" +
                          _vm._s(_vm.jdtotalNum) +
                          "个"
                      ),
                    ]),
                    _c(
                      "span",
                      {
                        staticClass: "detail_title",
                        on: { click: _vm.monitorInfo },
                      },
                      [_vm._v("详情 >")]
                    ),
                  ]),
                  _vm._l(_vm.supeMonitorInfos, function (item) {
                    return [
                      _c("div", { staticClass: "online_blue" }, [
                        _c("span", [_vm._v(_vm._s(item.type) + "排口")]),
                        _c("span", [
                          _vm._v(
                            "排放总量 " + _vm._s(item.disEmissions) + "kg"
                          ),
                        ]),
                      ]),
                      _vm._l(item.outs, function (item2) {
                        return [
                          _c(
                            "div",
                            {
                              staticClass: "online_white",
                              on: {
                                click: function ($event) {
                                  return _vm.portInfo(item2, item.type)
                                },
                              },
                            },
                            [
                              _c("span", [_vm._v(_vm._s(item2.deviceName))]),
                              _c(
                                "span",
                                {
                                  staticClass: "title_tips",
                                  class:
                                    item2.status == "在线"
                                      ? "green_tips"
                                      : "grey_tips",
                                },
                                [_vm._v(_vm._s(item2.status))]
                              ),
                              _c(
                                "span",
                                { class: item2.standard ? "" : "red_tip" },
                                [_vm._v(_vm._s(item2.standard ? "达" : "超"))]
                              ),
                            ]
                          ),
                          _c(
                            "div",
                            {
                              staticClass: "online_data",
                              staticStyle: {
                                background: "rgba(250, 250, 250, 1)",
                              },
                            },
                            [
                              _c("div", { staticClass: "online_data_title" }, [
                                _c("span", [
                                  _vm._v("数据时间：" + _vm._s(item2.dateTime)),
                                ]),
                                _c(
                                  "span",
                                  {
                                    on: {
                                      click: function ($event) {
                                        return _vm.portInfo(item2)
                                      },
                                    },
                                  },
                                  [_vm._v("详情>")]
                                ),
                              ]),
                              item.type == "废水"
                                ? _c(
                                    "div",
                                    { staticClass: "online_data_info" },
                                    [
                                      _c("div", [
                                        _c("span", [_vm._v("化学需氧量：")]),
                                        _c("span", [
                                          _vm._v(_vm._s(item2.cod) + "mg/L"),
                                        ]),
                                        _c("span", [_vm._v("PH：")]),
                                        _c("span", [_vm._v(_vm._s(item2.ph))]),
                                      ]),
                                      _c("div", [
                                        _c("span", [_vm._v("氨氮：")]),
                                        _c("span", [
                                          _vm._v(_vm._s(item2.nh3) + "mg/L"),
                                        ]),
                                        _c("span", [_vm._v("总氮：")]),
                                        _c("span", [
                                          _vm._v(_vm._s(item2.zd) + "mg/L"),
                                        ]),
                                      ]),
                                      _c("div", [
                                        _c("span", [_vm._v("总磷：")]),
                                        _c("span", [
                                          _vm._v(_vm._s(item2.zl) + "mg/L"),
                                        ]),
                                        _c("span", [_vm._v("悬浮物：")]),
                                        _c("span", [
                                          _vm._v(_vm._s(item2.xfw) + "mg/L"),
                                        ]),
                                      ]),
                                      _c("div", [
                                        _c("span", [_vm._v("总铜：")]),
                                        _c("span", [
                                          _vm._v(_vm._s(item2.zt) + "mg/L"),
                                        ]),
                                        _c("span", [_vm._v("总镍：")]),
                                        _c("span", [
                                          _vm._v(_vm._s(item2.zm) + "mg/L"),
                                        ]),
                                      ]),
                                      _c("div", [
                                        _c("span", [_vm._v("三价铬：")]),
                                        _c("span", [
                                          _vm._v(_vm._s(item2.sjg) + "mg/L"),
                                        ]),
                                        _c("span", [_vm._v("六价铬：")]),
                                        _c("span", [
                                          _vm._v(_vm._s(item2.ljg) + "mg/L"),
                                        ]),
                                      ]),
                                      _c("div", [
                                        _c("span", [_vm._v("氟离子：")]),
                                        _c("span", [
                                          _vm._v(_vm._s(item2.flz) + "mg/L"),
                                        ]),
                                        _c("span", [_vm._v("总余氯：")]),
                                        _c("span", [
                                          _vm._v(_vm._s(item2.zyl) + "mg/L"),
                                        ]),
                                      ]),
                                    ]
                                  )
                                : _vm._e(),
                              item.type == "废气"
                                ? _c(
                                    "div",
                                    { staticClass: "online_data_info" },
                                    [
                                      _c("div", [
                                        _c("span", [_vm._v("烟尘：")]),
                                        _c("span", [
                                          _vm._v(_vm._s(item2.soot) + "mg/m³"),
                                        ]),
                                        _c("span", [_vm._v("二氧化硫：")]),
                                        _c("span", [
                                          _vm._v(_vm._s(item2.so2) + "ug/m³"),
                                        ]),
                                      ]),
                                      _c("div", [
                                        _c("span", [_vm._v("氮氧化物：")]),
                                        _c("span", [
                                          _vm._v(_vm._s(item2.nox) + "ug/m³"),
                                        ]),
                                        _c("span", [_vm._v("一氧化碳：")]),
                                        _c("span", [
                                          _vm._v(_vm._s(item2.co) + "mg/m³"),
                                        ]),
                                      ]),
                                      _c("div", [
                                        _c("span", [_vm._v("氧气：")]),
                                        _c("span", [
                                          _vm._v(_vm._s(item2.o2) + "ug/m³"),
                                        ]),
                                        _c("span", [_vm._v("氯化氢：")]),
                                        _c("span", [
                                          _vm._v(_vm._s(item2.hcl) + "mg/m³"),
                                        ]),
                                      ]),
                                    ]
                                  )
                                : _vm._e(),
                            ]
                          ),
                        ]
                      }),
                    ]
                  }),
                ],
                2
              )
            : _vm._e(),
          _vm.isShow.punishInfos
            ? _c("div", { staticClass: "company-info" }, [
                _c("div", { staticClass: "company_title" }, [
                  _c("span", [_vm._v("行政处罚")]),
                  _c("span", { staticClass: "title_tips brown_tips" }, [
                    _vm._v(_vm._s(_vm.punishInfos.length) + "件"),
                  ]),
                ]),
                _c(
                  "div",
                  { staticClass: "main_content" },
                  _vm._l(_vm.punishInfos, function (cfitem, i) {
                    return _c(
                      "div",
                      {
                        staticClass: "admin_info",
                        on: {
                          click: function ($event) {
                            return _vm.penaltyInfo(cfitem)
                          },
                        },
                      },
                      [
                        _c("div", { staticClass: "grey_font" }, [
                          _c("span", [_vm._v("违法行为")]),
                          _c("span", [_vm._v("时间：" + _vm._s(cfitem.time))]),
                        ]),
                        _c("div", [
                          _c("span", { staticClass: "normal_font" }, [
                            _vm._v(_vm._s(cfitem.message)),
                          ]),
                        ]),
                        i != _vm.punishInfos.length - 1
                          ? _c("div", { staticClass: "bulid_hr" })
                          : _vm._e(),
                      ]
                    )
                  }),
                  0
                ),
              ])
            : _vm._e(),
          _vm.isShow.tsgspsInfos
            ? _c("div", { staticClass: "company-info" }, [
                _c("div", { staticClass: "company_title" }, [
                  _c("span", [_vm._v("第二次污染普查")]),
                  _c("span", { staticClass: "title_tips brown_tips" }, [
                    _vm._v(_vm._s(_vm._f("getStatus")(_vm.tsgspsInfos.type))),
                  ]),
                ]),
                _vm._m(0),
                _c("div", { staticClass: "main_content" }, [
                  _c("div", { staticClass: "no_bottom" }, [
                    _c("span", [_vm._v("工业废气")]),
                    _c("span", [
                      _vm._v(_vm._s(_vm.tsgspsInfos.gasDisInfo.gas) + " 吨"),
                    ]),
                  ]),
                  _c("div", { staticClass: "no_bottom" }, [
                    _c("span", [_vm._v("氮氧化物")]),
                    _c("span", [
                      _vm._v(_vm._s(_vm.tsgspsInfos.gasDisInfo.nox) + " 吨"),
                    ]),
                  ]),
                  _c("div", { staticClass: "no_bottom" }, [
                    _c("span", [_vm._v("二氧化硫")]),
                    _c("span", [
                      _vm._v(_vm._s(_vm.tsgspsInfos.gasDisInfo.so2) + " 吨"),
                    ]),
                  ]),
                  _c("div", { staticClass: "no_bottom" }, [
                    _c("span", [_vm._v("挥发性有机物")]),
                    _c("span", [
                      _vm._v(_vm._s(_vm.tsgspsInfos.gasDisInfo.voc) + " 吨"),
                    ]),
                  ]),
                ]),
                _vm._m(1),
                _c("div", { staticClass: "main_content" }, [
                  _c("div", { staticClass: "no_bottom" }, [
                    _c("span", [_vm._v("化学需氧量")]),
                    _c("span", [
                      _vm._v(_vm._s(_vm.tsgspsInfos.waterDisInfo.cod) + " 吨"),
                    ]),
                  ]),
                  _c("div", { staticClass: "no_bottom" }, [
                    _c("span", [_vm._v("氨氮")]),
                    _c("span", [
                      _vm._v(_vm._s(_vm.tsgspsInfos.waterDisInfo.nh3n) + " 吨"),
                    ]),
                  ]),
                  _c("div", { staticClass: "no_bottom" }, [
                    _c("span", [_vm._v("总磷")]),
                    _c("span", [
                      _vm._v(_vm._s(_vm.tsgspsInfos.waterDisInfo.tp) + " 吨"),
                    ]),
                  ]),
                  _c("div", { staticClass: "no_bottom" }, [
                    _c("span", [_vm._v("总氮")]),
                    _c("span", [
                      _vm._v(_vm._s(_vm.tsgspsInfos.waterDisInfo.tn) + " 吨"),
                    ]),
                  ]),
                ]),
              ])
            : _vm._e(),
          _vm.isShow.radiationInfo
            ? _c("div", { staticClass: "company-info" }, [
                _c("div", { staticClass: "company_title" }, [
                  _c("span", [_vm._v("辐射安全")]),
                  _c(
                    "span",
                    {
                      staticClass: "detail_title",
                      on: {
                        click: function ($event) {
                          return _vm.safeInfo(_vm.radiationInfo.fsaqGyqyId)
                        },
                      },
                    },
                    [
                      _c("span", { staticStyle: { "margin-right": "8px" } }, [
                        _vm._v(
                          "有效期限：" +
                            _vm._s(_vm.radiationInfo.beginDate) +
                            "~" +
                            _vm._s(_vm.radiationInfo.endDate)
                        ),
                      ]),
                      _vm._v(" 详情 >"),
                    ]
                  ),
                ]),
                _c("div", { staticClass: "online_blue" }, [
                  _c("span", [_vm._v("辐射安全许可证编号")]),
                  _c(
                    "span",
                    {
                      staticStyle: {
                        "font-size": "14px",
                        color: "rgba(68, 123, 252, 1)",
                      },
                    },
                    [_vm._v(_vm._s(_vm.radiationInfo.licenseNo))]
                  ),
                ]),
                _vm._m(2),
                _c("div", { staticClass: "rad_content" }, [
                  _c("div", [
                    _c("span", [_vm._v("Ⅰ类源")]),
                    _c("span", [
                      _vm._v(_vm._s(_vm.radiationInfo.type1) + " 颗"),
                    ]),
                  ]),
                  _c("div", [
                    _c("span", [_vm._v("Ⅱ类源")]),
                    _c("span", [
                      _vm._v(_vm._s(_vm.radiationInfo.type2) + " 颗"),
                    ]),
                  ]),
                  _c("div", [
                    _c("span", [_vm._v("Ⅲ类源")]),
                    _c("span", [
                      _vm._v(_vm._s(_vm.radiationInfo.type3) + " 颗"),
                    ]),
                  ]),
                  _c("div", [
                    _c("span", [_vm._v("Ⅳ类源")]),
                    _c("span", [
                      _vm._v(_vm._s(_vm.radiationInfo.type4) + " 颗"),
                    ]),
                  ]),
                  _c("div", [
                    _c("span", [_vm._v("Ⅴ类源")]),
                    _c("span", [
                      _vm._v(_vm._s(_vm.radiationInfo.type5) + " 颗"),
                    ]),
                  ]),
                ]),
                _vm._m(3),
                _c("div", { staticClass: "rad_content" }, [
                  _c(
                    "div",
                    {
                      staticStyle: {
                        width: "calc(50% - 10px)",
                        "text-align": "left",
                        "padding-left": "20px",
                      },
                    },
                    [
                      _c("span", [_vm._v("Ⅰ类源")]),
                      _c("span", [
                        _vm._v(_vm._s(_vm.radiationInfo.zzType2) + " 颗"),
                      ]),
                    ]
                  ),
                  _c(
                    "div",
                    {
                      staticStyle: {
                        width: "calc(50% - 10px)",
                        "text-align": "left",
                        "padding-left": "20px",
                      },
                    },
                    [
                      _c("span", [_vm._v("Ⅱ类源")]),
                      _c("span", [
                        _vm._v(_vm._s(_vm.radiationInfo.zzType3) + " 颗"),
                      ]),
                    ]
                  ),
                ]),
              ])
            : _vm._e(),
          _vm.isShow.solidWasteInfos
            ? _c(
                "div",
                {
                  staticClass: "company-info",
                  class:
                    _vm.showMore3 && _vm.solidWasteInfos.length > 2
                      ? "moreheight"
                      : "",
                },
                [
                  _c("div", { staticClass: "company_title" }, [
                    _c("span", [_vm._v("危废、固废信息")]),
                    _c("span", { staticClass: "title_tips brown_tips" }, [
                      _vm._v(_vm._s(_vm.solidWasteInfos.length) + "种"),
                    ]),
                    _c(
                      "span",
                      {
                        staticClass: "detail_title",
                        on: { click: _vm.wasteInfo },
                      },
                      [_vm._v("详情 >")]
                    ),
                  ]),
                  _vm._l(_vm.solidWasteInfos, function (itemgf, index) {
                    return [
                      _c("div", { staticClass: "online_yellow" }, [
                        _c("span", [
                          _vm._v(
                            _vm._s(index + 1) + "." + _vm._s(itemgf.wasteName)
                          ),
                        ]),
                        _c("span"),
                      ]),
                      _c("div", { staticClass: "main_content" }, [
                        _c("div", { staticClass: "third_width no_bottom" }, [
                          _c("span", [_vm._v("产生量")]),
                          _c("span", [_vm._v(_vm._s(itemgf.product) + " 吨")]),
                        ]),
                        _c("div", { staticClass: "third_width no_bottom" }, [
                          _c("span", [_vm._v("自行利用量")]),
                          _c("span", [_vm._v(_vm._s(itemgf.use) + " 吨")]),
                        ]),
                        _c("div", { staticClass: "third_width no_bottom" }, [
                          _c("span", [_vm._v("总自行处置量")]),
                          _c("span", [_vm._v(_vm._s(itemgf.manage) + " 吨")]),
                        ]),
                      ]),
                      _c("div", { staticClass: "bulid_main_hr" }),
                      _c("div", { staticClass: "main_content" }, [
                        _c("div", { staticClass: "half_width no_bottom" }, [
                          _c("span", [_vm._v("委托利用量")]),
                          _c("span", [_vm._v(_vm._s(itemgf.wtUse) + " 吨")]),
                        ]),
                        _c("div", { staticClass: "half_width no_bottom" }, [
                          _c("span", [_vm._v("委托处置量")]),
                          _c("span", [_vm._v(_vm._s(itemgf.wtManage) + "吨")]),
                        ]),
                      ]),
                      _c("div", { staticClass: "bulid_main_hr" }),
                      _c("div", { staticClass: "main_content" }, [
                        _c("div", { staticClass: "half_width no_bottom" }, [
                          _c("span", [_vm._v("上年度末本单位实际贮存量")]),
                          _c("span", [
                            _vm._v(_vm._s(itemgf.storageLast) + " 吨"),
                          ]),
                        ]),
                        _c("div", { staticClass: "half_width no_bottom" }, [
                          _c("span", [_vm._v("本年末本单位实际贮存量")]),
                          _c("span", [_vm._v(_vm._s(itemgf.storage) + " 吨")]),
                        ]),
                      ]),
                    ]
                  }),
                ],
                2
              )
            : _vm._e(),
          _vm.isShow.solidWasteInfos && _vm.solidWasteInfos.length > 2
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
          _vm.isShow.ydzfInfos
            ? _c(
                "div",
                {
                  staticClass: "company-info",
                  class:
                    _vm.showMore4 && _vm.ydzfInfos.length > 3
                      ? "moreheight"
                      : "",
                },
                [
                  _c("div", { staticClass: "company_title" }, [
                    _c("span", [_vm._v("执法检查")]),
                    _c("span", { staticClass: "title_tips brown_tips" }, [
                      _vm._v(_vm._s(_vm.ydzfInfos.length) + "个现场执法信息"),
                    ]),
                  ]),
                  _c(
                    "div",
                    { staticClass: "main_content" },
                    _vm._l(_vm.ydzfInfos, function (itemzf, zfi) {
                      return _c(
                        "div",
                        {
                          staticClass: "admin_info",
                          on: {
                            click: function ($event) {
                              return _vm.lawInfo(itemzf)
                            },
                          },
                        },
                        [
                          _c("div", [
                            _c("span", { staticClass: "normal_font" }, [
                              _vm._v(
                                _vm._s(
                                  itemzf.caseName || "现场执法案件" + (zfi + 1)
                                )
                              ),
                            ]),
                          ]),
                          _c("div", { staticClass: "grey_font" }, [
                            _c(
                              "span",
                              { class: itemzf.sfwf ? "fontorg" : "" },
                              [_vm._v(_vm._s(itemzf.msg))]
                            ),
                            _c("span", [_vm._v(_vm._s(itemzf.time))]),
                          ]),
                          zfi != _vm.ydzfInfos.length - 1
                            ? _c("div", { staticClass: "bulid_hr" })
                            : _vm._e(),
                        ]
                      )
                    }),
                    0
                  ),
                ]
              )
            : _vm._e(),
          _vm.isShow.ydzfInfos && _vm.ydzfInfos.length > 3
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
          _vm.isShow.envCaseInfos
            ? _c("div", { staticClass: "company-info" }, [
                _c("div", { staticClass: "company_title" }, [
                  _c("span", [_vm._v("突发环境事件")]),
                  _c("span", { staticClass: "title_tips brown_tips" }, [
                    _vm._v(_vm._s(_vm.envCaseInfos.length) + "件"),
                  ]),
                ]),
                _c(
                  "div",
                  { staticClass: "main_content" },
                  _vm._l(_vm.envCaseInfos, function (item) {
                    return _c("div", { staticClass: "admin_info" }, [
                      _c("div", [
                        _c("span", { staticClass: "normal_font" }, [
                          _vm._v(_vm._s(item.caseName)),
                        ]),
                      ]),
                      _c("div", { staticClass: "grey_font" }, [
                        _c("span", [_vm._v(_vm._s(item.msg))]),
                        _c("span", [_vm._v(_vm._s(item.time))]),
                      ]),
                    ])
                  }),
                  0
                ),
              ])
            : _vm._e(),
          _vm.isShow.licenseImplReportInfo
            ? _c("div", { staticClass: "company-info" }, [
                _vm._m(4),
                _c("div", { staticClass: "main_content" }, [
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("执行报告要求")]),
                    _c("span", [_vm._v(_vm._s(_vm.licenseRpt.msg))]),
                  ]),
                  _c("div", { staticClass: "whole_width" }, [
                    _c("span", [_vm._v("其他")]),
                    _c("span", [_vm._v(_vm._s(_vm.licenseRpt.other || "-"))]),
                  ]),
                ]),
              ])
            : _vm._e(),
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
    return _c("div", { staticClass: "online_blue" }, [
      _c("span", [_vm._v("废气污染源排放量（全厂合计）")]),
      _c("span"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "online_blue" }, [
      _c("span", [_vm._v("废水污染源排放量（全厂合计）")]),
      _c("span"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "rad_title" }, [
      _c("span", { staticClass: "active" }, [_vm._v("放射源活动种类")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "rad_title" }, [
      _c("span", { staticClass: "active" }, [_vm._v("射线装置活动种类")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "company_title" }, [
      _c("span", [_vm._v("排污许可证执行报告")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/components/healthCondition.vue?vue&type=template&id=3a0df5d5&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/components/healthCondition.vue?vue&type=template&id=3a0df5d5&scoped=true& ***!
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
  return _c("div", { staticStyle: { "margin-top": "10px" } }, [
    _vm.total.length > 0
      ? _c("span", { staticClass: "center_item_title" }, [_vm._v("健康状况")])
      : _vm._e(),
    _c(
      "div",
      { staticClass: "center_item_content" },
      _vm._l(_vm.total, function (item, index) {
        return _c(
          "div",
          {
            staticClass: "content_items",
            style: "background-color:" + _vm.srcList[index].background,
          },
          [
            _c("img", { attrs: { src: _vm.srcList[index].src } }),
            _c(
              "div",
              {
                staticStyle: {
                  width: "calc(100% - 10px)",
                  "line-height": "30px",
                  "font-size": "12px",
                  "margin-left": "-10px",
                },
              },
              [
                _c(
                  "div",
                  {
                    staticStyle: {
                      display: "flex",
                      "justify-content": "space-between",
                      padding: "2px 8px",
                      "align-items": "center",
                      "line-height": "normal",
                    },
                  },
                  [
                    _c("span", { staticStyle: { "font-weight": "600" } }, [
                      _vm._v(_vm._s(item.name)),
                    ]),
                    item.name === "排污许可证有效期" ||
                    item.name === "排污许可证限期整改" ||
                    item.name === "排污许可证和在线监控排放总量汇总统计" ||
                    item.name === "辐射安全许可证有效期"
                      ? _c("span", { staticClass: "state" }, [
                          _vm._v(_vm._s(item.day)),
                        ])
                      : _vm._e(),
                  ]
                ),
                _c(
                  "div",
                  {
                    staticStyle: {
                      display: "flex",
                      "justify-content": "space-between",
                      padding: "2px 8px",
                      "align-items": "center",
                      "line-height": "normal",
                    },
                  },
                  [
                    item.name === "排污许可证有效期" ||
                    item.name === "排污许可证限期整改" ||
                    item.name === "排污许可证和在线监控排放总量汇总统计" ||
                    item.name === "辐射安全许可证有效期"
                      ? _c(
                          "span",
                          { staticStyle: { color: "rgba(247, 127, 7, 1)" } },
                          [_vm._v("到期时间：" + _vm._s(item.time))]
                        )
                      : _c(
                          "span",
                          {
                            staticStyle: {
                              color: "rgba(247, 127, 7, 1)",
                              "font-weight": "700",
                            },
                          },
                          [_vm._v(_vm._s(item.count) + "件")]
                        ),
                  ]
                ),
              ]
            ),
          ]
        )
      }),
      0
    ),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/components/redCodeInfo.vue?vue&type=template&id=3f80cfbc&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/components/redCodeInfo.vue?vue&type=template&id=3f80cfbc&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "red_code" },
    [
      _c("div", { staticClass: "center_title" }, [
        _vm._m(0),
        _c("span", { staticClass: "num" }, [
          _vm._v(_vm._s(_vm.redCodeInfos.length) + " 件"),
        ]),
      ]),
      _vm._m(1),
      _c(
        "div",
        _vm._l(_vm.redCodeInfos, function (item) {
          return _c("div", [
            _c("div", { staticClass: "center_left_top_div" }, [
              _c("div", { staticClass: "top_item" }, [
                _c(
                  "div",
                  {
                    staticStyle: {
                      display: "flex",
                      "justify-content": "space-between",
                    },
                  },
                  [
                    _c(
                      "div",
                      {
                        staticStyle: {
                          display: "flex",
                          "align-items": "center",
                        },
                      },
                      [
                        _c("img", {
                          attrs: {
                            src:
                              item.qr_code_color === "绿色"
                                ? __webpack_require__(/*! @/assets/polluter/green_code.png */ "./src/assets/polluter/green_code.png")
                                : item.qr_code_color === "黄色"
                                ? __webpack_require__(/*! @/assets/polluter/yellow_code.png */ "./src/assets/polluter/yellow_code.png")
                                : item.qr_code_color === "红色"
                                ? __webpack_require__(/*! @/assets/polluter/red_code.png */ "./src/assets/polluter/red_code.png")
                                : "",
                          },
                        }),
                        _c(
                          "span",
                          {
                            staticStyle: {
                              "margin-left": "5px",
                              "font-weight": "600",
                              "font-size": "14px",
                            },
                          },
                          [_vm._v(_vm._s(item.cause))]
                        ),
                      ]
                    ),
                    item.clue_id !== "" &&
                    item.clue_id !== "null" &&
                    item.clue_id !== null &&
                    item.clue_id !== "undefined" &&
                    item.clue_id !== undefined
                      ? _c(
                          "span",
                          {
                            staticClass: "red_situation green",
                            on: {
                              click: function ($event) {
                                return _vm.showPopup(item)
                              },
                            },
                          },
                          [_vm._v("已转为执法线索")]
                        )
                      : _c("span", { staticClass: "red_situation yellow" }, [
                          _vm._v("未转为执法线索"),
                        ]),
                  ]
                ),
                _c(
                  "div",
                  {
                    staticStyle: {
                      display: "flex",
                      "justify-content": "space-between",
                      "margin-top": "5px",
                    },
                  },
                  [
                    _c(
                      "span",
                      { staticStyle: { color: "rgba(255, 87, 51, 1)" } },
                      [_vm._v("许可证到期时间：" + _vm._s(item.day))]
                    ),
                    _c("span", [
                      _vm._v("持续时长："),
                      _c("label", { staticStyle: { "font-weight": "600" } }, [
                        _vm._v(_vm._s(item.day)),
                      ]),
                    ]),
                  ]
                ),
              ]),
              _c(
                "div",
                {
                  staticStyle: {
                    display: "flex",
                    "justify-content": "space-between",
                    padding: "2px 8px",
                    color: "rgba(23, 28, 33, 0.5)",
                  },
                },
                [
                  _c("span", [_vm._v("赋码时间：" + _vm._s(item.time))]),
                  _c("span", [_vm._v("审核人：" + _vm._s(item.reviewer))]),
                ]
              ),
            ]),
          ])
        }),
        0
      ),
      _c(
        "van-popup",
        {
          attrs: { closeable: false },
          model: {
            value: _vm.showClue,
            callback: function ($$v) {
              _vm.showClue = $$v
            },
            expression: "showClue",
          },
        },
        [
          _c("div", { staticClass: "red_title" }, [
            _c("img", {
              attrs: { src: __webpack_require__(/*! @/assets/polluter/flow.png */ "./src/assets/polluter/flow.png") },
            }),
            _c("span", [_vm._v("执法线索流程情况")]),
          ]),
          _c(
            "div",
            { staticClass: "red_content" },
            [
              _c(
                "van-steps",
                { attrs: { direction: "vertical", active: _vm.active } },
                _vm._l(_vm.anchorList, function (item, index) {
                  return _c("van-step", { key: index }, [
                    _c(
                      "div",
                      {
                        staticClass: "steps_title",
                        style: {
                          color:
                            Number(_vm.active) >= Number(item.type)
                              ? "rgba(8, 40, 89, 1)"
                              : "rgba(8, 40, 89, 0.5)",
                        },
                      },
                      [
                        _vm._v(_vm._s(item.name)),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: index != _vm.anchorList.length - 1,
                                expression: "index!=anchorList.length-1",
                              },
                            ],
                            style: {
                              color:
                                Number(_vm.active) > Number(item.type)
                                  ? "rgba(8, 40, 89, 1)"
                                  : Number(_vm.active) == Number(item.type)
                                  ? "rgba(67, 207, 124, 1)"
                                  : "",
                            },
                          },
                          [
                            _vm._v(
                              _vm._s(
                                Number(_vm.active) > Number(item.type)
                                  ? "已处理"
                                  : Number(_vm.active) == Number(item.type)
                                  ? "待处理"
                                  : ""
                              )
                            ),
                          ]
                        ),
                      ]
                    ),
                    _c("div", { staticClass: "steps_flow" }, [
                      _vm._v(_vm._s(item.user)),
                    ]),
                    _c("div", { staticClass: "steps_flow" }, [
                      _vm._v(_vm._s(item.time)),
                    ]),
                  ])
                }),
                1
              ),
            ],
            1
          ),
          _c(
            "div",
            { staticClass: "red_button" },
            [
              _c(
                "van-button",
                {
                  attrs: { round: "", type: "info" },
                  on: {
                    click: function ($event) {
                      _vm.showClue = false
                    },
                  },
                },
                [_vm._v("知道了")]
              ),
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
    return _c("div", [_c("span", [_vm._v("红码赋码原因")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "health_notice" }, [
      _c("img", { attrs: { src: __webpack_require__(/*! @/assets/polluter/notice.png */ "./src/assets/polluter/notice.png") } }),
      _c("span", [_vm._v("若案件转为执法线索则提示案件审批流程情况。")]),
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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/companyDetail.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/companyDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".companydetail .moreheight {\n  max-height: 270px;\n  overflow: hidden;\n}\n.companydetail .grey_font span.fontorg {\n  color: #ff5733;\n}\n.companydetail .greenfont {\n  color: #06b82f;\n}\n.companydetail .yellowfont {\n  color: #ffa200;\n}\n.companydetail .redfont {\n  color: #ff5733;\n}\n.companydetail .blackfont {\n  color: #606266;\n}\n.companydetail .company-info .online_yellow {\n  height: auto;\n}\n.companydetail .company-info .online_yellow > span {\n  line-height: normal;\n  padding: 4px 0;\n}\n.companydetail .online_data_info > div {\n  justify-content: space-around;\n}\n.companydetail .online_data_info > div > span {\n  flex: 1;\n}\n.companydetail .mainflex {\n  display: flex;\n  padding-right: 5px;\n}\n.companydetail .mainflex .main_f_l > img {\n  margin-right: 5px;\n  vertical-align: middle;\n  width: 14px;\n}\n.companydetail .mainflex .main_f_l > span {\n  font-size: 12px;\n  font-weight: 400;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: #447bfc;\n  text-align: left;\n  vertical-align: top;\n}\n.companydetail .mainflex .main_f_r {\n  font-size: 12px;\n  width: 102px;\n  color: rgba(18, 18, 54, 0.5);\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/components/healthCondition.vue?vue&type=style&index=0&id=3a0df5d5&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/components/healthCondition.vue?vue&type=style&index=0&id=3a0df5d5&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".center_item_title[data-v-3a0df5d5] {\n  font-size: 14px;\n  font-weight: 700;\n  color: black;\n  margin-left: 15px;\n}\n.center_item_content[data-v-3a0df5d5] {\n  overflow-y: auto;\n  margin-top: 5px;\n  display: flex;\n  justify-content: space-between;\n}\n.center_item_content .content_items[data-v-3a0df5d5] {\n  width: calc(50% - 10px);\n  height: 70px;\n  border-radius: 10px;\n  margin: 0 0px 10px 10px;\n  display: flex;\n  align-items: center;\n}\n.center_item_content .content_items img[data-v-3a0df5d5] {\n  margin-top: -15px;\n  margin-left: -22px;\n}\n.center_item_content .content_items .state[data-v-3a0df5d5] {\n  /*height: 22px;*/\n  background: #ffeede;\n  -webkit-backdrop-filter: blur(20px);\n          backdrop-filter: blur(20px);\n  border-radius: 0 10px 0 10px;\n  font-size: 11px;\n  color: #ff8d1a;\n  padding: 0 6px;\n  /*line-height: 22px;*/\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/components/redCodeInfo.vue?vue&type=style&index=0&id=3f80cfbc&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/components/redCodeInfo.vue?vue&type=style&index=0&id=3f80cfbc&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".health_notice[data-v-3f80cfbc] {\n  border-radius: 10px;\n  background: #f8fbff;\n  font-size: 11px;\n  font-weight: 400;\n  color: rgba(23, 28, 33, 0.4);\n  margin: 6px 10px;\n  padding: 5px 0px;\n}\n.health_notice > img[data-v-3f80cfbc] {\n  vertical-align: bottom;\n  margin-left: 8px;\n  margin-right: 2px;\n}\n.red_code[data-v-3f80cfbc] {\n  margin: 20px 0px 10px;\n}\n.center_title[data-v-3f80cfbc] {\n  display: flex;\n  margin: 10px 10px 10px;\n}\n.center_title div[data-v-3f80cfbc] {\n  width: 90px;\n  height: 26px;\n  opacity: 1;\n  border-radius: 20px;\n  background: linear-gradient(135.12deg, #fdae9d 0%, #e374ca 100%);\n  text-align: center;\n  color: #fff;\n  align-items: center;\n  display: grid;\n  font-size: 12px;\n}\n.center_title .num[data-v-3f80cfbc] {\n  font-size: 18px;\n  font-weight: 600;\n  margin-left: 15px;\n  letter-spacing: -2px;\n  color: #5475f8;\n  font-family: \"YouSheBiaoTiHei\";\n}\n.center_left_top_div[data-v-3f80cfbc] {\n  /*width: 350px;*/\n  /*height: 85px;*/\n  margin: 5px 10px;\n  border-radius: 10px;\n  width: calc(100% - 20px);\n  background: white;\n  border: 1px solid #fcccc5;\n  box-shadow: 0px 4px 10px -5px rgba(37, 57, 111, 0.1);\n  align-items: center;\n  font-size: 12px;\n}\n.center_left_top_div .top_item[data-v-3f80cfbc] {\n  height: 75%;\n  line-height: 25px;\n  background: rgba(251, 170, 160, 0.1);\n  padding: 8px;\n}\n.center_left_top_div .red_situation[data-v-3f80cfbc] {\n  border-radius: 10px 10px 0px 10px;\n  padding: 0px 7px 0px 7px;\n  font-size: 11px;\n  font-weight: 400;\n  color: white;\n}\n.center_left_top_div .green[data-v-3f80cfbc] {\n  background: linear-gradient(90deg, #43cf7c 0%, #84e0a9 100%);\n}\n.center_left_top_div .yellow[data-v-3f80cfbc] {\n  background: linear-gradient(90deg, #ff5733 0%, #f3b8ab 100%);\n}\n[data-v-3f80cfbc] .van-popup--center {\n  width: 80%;\n  border-radius: 10px;\n  background: linear-gradient(180deg, rgba(68, 123, 252, 0.1) 0%, rgba(68, 123, 252, 0) 100%), white;\n  border: 1px solid #eef3ff;\n}\n.red_title[data-v-3f80cfbc] {\n  font-size: 16px;\n  font-weight: 500;\n  color: black;\n  padding: 10px;\n}\n.red_title > img[data-v-3f80cfbc] {\n  margin-right: 8px;\n}\n[data-v-3f80cfbc] .van-steps {\n  background-color: transparent;\n}\n[data-v-3f80cfbc] .van-step {\n  color: rgba(8, 40, 89, 0.5);\n  font-size: 14px;\n}\n[data-v-3f80cfbc] .van-step__title--active {\n  color: #082859;\n}\n.red_content[data-v-3f80cfbc] {\n  padding: 10px 10px;\n}\n.steps_title[data-v-3f80cfbc] {\n  font-size: 14px;\n  font-weight: 700;\n  line-height: 20.27px;\n  margin-bottom: 5px;\n  display: flex;\n  justify-content: space-between;\n}\n.steps_title > span[data-v-3f80cfbc] {\n  font-size: 12px;\n  font-weight: 400;\n  margin-right: 30px;\n}\n.steps_flow[data-v-3f80cfbc] {\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 17.38px;\n  color: #ff8d1a;\n  margin-top: 5px;\n}\n.red_button[data-v-3f80cfbc] {\n  width: 100%;\n  text-align: center;\n  margin: 10px auto;\n}\n[data-v-3f80cfbc] .van-button {\n  width: 150px;\n  height: 35px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/companyDetail.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/companyDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./companyDetail.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/companyDetail.vue?vue&type=style&index=0&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("c1ec85a6", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/components/healthCondition.vue?vue&type=style&index=0&id=3a0df5d5&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/components/healthCondition.vue?vue&type=style&index=0&id=3a0df5d5&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./healthCondition.vue?vue&type=style&index=0&id=3a0df5d5&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/components/healthCondition.vue?vue&type=style&index=0&id=3a0df5d5&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("397662c9", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/components/redCodeInfo.vue?vue&type=style&index=0&id=3f80cfbc&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/pollution/detail/components/redCodeInfo.vue?vue&type=style&index=0&id=3f80cfbc&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./redCodeInfo.vue?vue&type=style&index=0&id=3f80cfbc&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/components/redCodeInfo.vue?vue&type=style&index=0&id=3f80cfbc&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("443f6536", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/assets/polluter/blue.png":
/*!**************************************!*\
  !*** ./src/assets/polluter/blue.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAABACAYAAABoWTVaAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACgSURBVGiB7c6xDQJBEENRz1IHDdAEdHa3nR1N0ACFDBESsAmshwDxX+jA+hIAAMAvi2+cHvp1VcSS0haZ58uyX2e/ygPvcU9jZp+NbBVRjzLiOIyvwR8oDwzpVPlXHliNQBeBLgJdBLoIdBHoItBFoItAF4EuAl0Eugh0Eegi0EWgi0AXgS4CXQS6CHT9YWBmHyZpm70rD2xtjNnFGP2uGzDbGOuu+0XkAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/polluter/flow.png":
/*!**************************************!*\
  !*** ./src/assets/polluter/flow.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGOSURBVCiRbZI/qhRBEMZ/vbuoi3/gBd7BQwg7Ax5A8BIewEA3mRkwEcw20FhMRANTQdje/CEmHsEDqLBdVT07ZTDbO/ueFnTQRf2+76umA9fq+SZXgdDk3isxEBk6y/Du5c32fC5cB4BKs6MKYo6aI+Uo3de3y/YErje59RFCdBx6s74RAJ48k63o6K7mSA715ftlDAAvNr0PDqpFHUQPtfRgwrb0ju7xx6c7dVhvctsfQnMeS41ObECURouQ+UnYeuqF9awmwEnmUdVRYxL7Z1+aWVKqpE5SZy8eP766Ve+FmGzoRIh7ofv+4XYoM0mdJAMLEY9iXh0Vq0dPUyvqKzUqsSGm7BEgaYkKlmGx1wEtOxiI+vm+lRi7+/XvbZKx1x8gBN/NUvZuinAWR52kIDKc7v1h+gCzz6+XMYnH/0Ddzy93Q1JfJXWGYQTcicO3i3YGIBK6pEyuo8jquNvOfXKaz7278uUePP5TJaWZHgrUPIZAVZzmc+/6y4t4BSx17+GvVgxyHh2LSwFK/QWB154GNpCzqQAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/polluter/green.png":
/*!***************************************!*\
  !*** ./src/assets/polluter/green.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAABACAYAAABoWTVaAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACnSURBVGiB7dDBDYJAEIXhmaUdEkuQimhBaMGK1hJM7Gc4isJB9w0H4/8d5/D2z5oBAAD8Mj9itL+PU7hdzKJ6+O1xuk6tW+mBz7jVI2Fza2RJqVoJj/P29hr8jfRAMx8y1w4IzEWgikAVgSoCVQSqCFQRqCJQRaCKQBWBKgJVBKoIVBGoIlBFoIpAFYEqAlUEqv4v0MPm7TVq617+D5ZS30/u3U70ZxZQlxjrzjcUUwAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/polluter/green_code.png":
/*!********************************************!*\
  !*** ./src/assets/polluter/green_code.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAB8SURBVCiRjVLBEcAgCINeF3IG1uLpWs7ASPSFx1HSysdwBkgUFlOnEmtMznnHuSsxkzKunAt1FVNfYzJqugsrIXI0lZFHVPyK7hL5JSJiRI6pnY0NIjk9j2XWYjH19nH+pK4xGXZGUgPDBeikx0KIqbcT0Tdk/LkAnb/AD/QinbBh4zm2AAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/polluter/light_green.png":
/*!*********************************************!*\
  !*** ./src/assets/polluter/light_green.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAABACAYAAABoWTVaAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACiSURBVGiB7c4xDsJADERRe5G4VuhzKJJDpd9cCwmcCgmyTdgxBeK/corRNwMAAPhl/o3T87pM5nYN8+oR620Yp96v9MBn3NsYNvdGloyoV+E+NOM++APpgW5xyfxLD8xGoIpAFYEqAlUEqghUEagiUEWgikAVgSoCVQSqCFQRqCJQRaCKQBWBKgJVBKr+MDBsbievvXfpgaU86n47+b2JPmoDJI4Y5yQaYGAAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/polluter/notice.png":
/*!****************************************!*\
  !*** ./src/assets/polluter/notice.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADnSURBVDiN3VHBkcIwDFw5VwSpJs4DRg8KoIIwVBGnigxUEP55eOARpxqqSMTjkMeXCxSAXmt5d7Wyge+uLV+GHZ/dJ45ZazK3dsdnIcgooCK9e+wPNj3/KEgnTaAiw1T+4qxQYd53gSD1C7uYgLm1AioM5mAwh7uvSu9PIZ2kwk1/LQlS/1uBIKP3p7AUagmoSYRBV1l9gzdlBTQum38MmFvL3No1NUHSx7R534VooLFnGDshq7d8GZZGAmryvnOP/cEJqNF+/IWbP7o0yQwzAIhEnfjCkUtrcdVkQlYDwN1X5TveF9QT4kFfyPzhQlcAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/polluter/orange.png":
/*!****************************************!*\
  !*** ./src/assets/polluter/orange.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAABACAYAAABoWTVaAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACQSURBVGiB7c6xDYNAEAXRxY2ZFlyRoaIrATpbJ5aD0waIuYs8L/zB10RIkiSpky22bJHZ4sgWG/laBjX9fIPe3bwvr3uhDxpUeBZbH3zZjMB15NmMwKEMpAykDKQMpAykDKQMpAykDKQMpAykDKQMpAykDKQMpAykDKQMpAykDKT+MnAvtvPu2YzAs9iq6Es++yQRWFm7Qa8AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/polluter/position.png":
/*!******************************************!*\
  !*** ./src/assets/polluter/position.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAFDSURBVFiF7VbRbsMgDDzvx+p815CaSs13xfky9wWmtAMbw6btofcUgey72AcYeOOPQdEATsoAoIprWSLCLX+L3El+TcDlU3cAbCYk3ORO648K4KSsir03aUSIK4CTrqdyh0CExWvJh5dklLw31hTASddR8pIi+2ZMgPMHAkBOJ6ApwtpsesAyXs1gllcsL1gV4NZGzd2O45u5XBPW+KN7qriEBVhBBri2SIQjLMAwF5fr+Glx8MSMtACq2M+E2bDeianCvAl77v4eHBs1ecwKdJxxF14O9y2YrIIcGy1TAiZEuORApwmPjZZgO7rIgeBAUpxvOF7yNS29OcMjWRHyKiI6CU0JeBUxSj4NTrrOzgyjLeDaenQiNgVkEj49SlVSAwJ8PUTNcb0qYGQK9tAaSswWlCoA355nboQ8EXh//8a/wAPOMZzQDFhjNgAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/polluter/purple.png":
/*!****************************************!*\
  !*** ./src/assets/polluter/purple.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAABACAYAAABoWTVaAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACdSURBVGiB7c6xDQIxFATR7yOkKKiAlvC1RAVHUYSHyZDABCfPJ0DMCzdYTYQkSdIvK984radbjYhztLJEadd62dfRr/TAZ9yreTRyokGdVg4f1vfgzfIDSztm3uUHJjOQMpAykDKQMpAykDKQMpAykDKQMpAykDKQMpAykDKQMpAykDKQMpAykPrLwLlbWllGz/IDp/vSbbu1j97oAYJIFeMlk9X7AAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/polluter/red.png":
/*!*************************************!*\
  !*** ./src/assets/polluter/red.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAABACAYAAABoWTVaAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAACcSURBVGiB7c6xEcIwAATBF21QDBTkHrB7cEGmGMoAE5FoFHh0ImC4DT/4uUSSJOmXlW+cPqZpTnIrybYn9/O6zr1fwwM/cdW89EaeaFCtJJfGXAcfNjxwT64j/4YHjmYgZSBlIGUgZSBlIGUgZSBlIGUgZSBlIGUgZSBlIGUgZSBlIGUgZSBlIPWXgUs9lGTrPRse+GrEPBvRR70Bt+AS31uTWpsAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/polluter/red_code.png":
/*!******************************************!*\
  !*** ./src/assets/polluter/red_code.png ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAB5SURBVCiRjVLBEcAgCCO9bsQwzOgwzpS+6FlKWvkIZ4BEA4bTSmBMrHWHOStwBa15xRxqKsOJMaGG3o0VkLXaCqVRNb+iu1R6zcygwLm1k3EnWeye2zRrM8PZPs4fVYwJOVlRzVwaoKOehmA4243qGx5m+DJApy/zC1FonRCgoYXFAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/polluter/yellow_code.png":
/*!*********************************************!*\
  !*** ./src/assets/polluter/yellow_code.png ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAOCAYAAAAfSC3RAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAB5SURBVCiRjVLBDQAhCIOLY7Ca07GaY5BwLwxBeicfSyzQKmwqTiXGXJzzllOJmZRx5Tyoq6n4mItR011YCZGjqYw8ouIjukvkl4iIETmmdjY2iOT2vJZZi03F28f5kzrmYtgZSQ0MF6CTHgthKt5ORN+Q8ecCdP4Cv/XVo1AdwmtuAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/views/pollution/detail/companyDetail.vue":
/*!******************************************************!*\
  !*** ./src/views/pollution/detail/companyDetail.vue ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _companyDetail_vue_vue_type_template_id_81d1bf62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./companyDetail.vue?vue&type=template&id=81d1bf62& */ "./src/views/pollution/detail/companyDetail.vue?vue&type=template&id=81d1bf62&");
/* harmony import */ var _companyDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./companyDetail.vue?vue&type=script&lang=js& */ "./src/views/pollution/detail/companyDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _companyDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./companyDetail.vue?vue&type=style&index=0&lang=scss& */ "./src/views/pollution/detail/companyDetail.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _companyDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _companyDetail_vue_vue_type_template_id_81d1bf62___WEBPACK_IMPORTED_MODULE_0__["render"],
  _companyDetail_vue_vue_type_template_id_81d1bf62___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/pollution/detail/companyDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/pollution/detail/companyDetail.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./src/views/pollution/detail/companyDetail.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_companyDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./companyDetail.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/companyDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_companyDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/pollution/detail/companyDetail.vue?vue&type=style&index=0&lang=scss&":
/*!****************************************************************************************!*\
  !*** ./src/views/pollution/detail/companyDetail.vue?vue&type=style&index=0&lang=scss& ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_companyDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./companyDetail.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/companyDetail.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_companyDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_companyDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_companyDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_companyDetail_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/pollution/detail/companyDetail.vue?vue&type=template&id=81d1bf62&":
/*!*************************************************************************************!*\
  !*** ./src/views/pollution/detail/companyDetail.vue?vue&type=template&id=81d1bf62& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_companyDetail_vue_vue_type_template_id_81d1bf62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./companyDetail.vue?vue&type=template&id=81d1bf62& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/companyDetail.vue?vue&type=template&id=81d1bf62&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_companyDetail_vue_vue_type_template_id_81d1bf62___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_companyDetail_vue_vue_type_template_id_81d1bf62___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/pollution/detail/components/healthCondition.vue":
/*!*******************************************************************!*\
  !*** ./src/views/pollution/detail/components/healthCondition.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _healthCondition_vue_vue_type_template_id_3a0df5d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./healthCondition.vue?vue&type=template&id=3a0df5d5&scoped=true& */ "./src/views/pollution/detail/components/healthCondition.vue?vue&type=template&id=3a0df5d5&scoped=true&");
/* harmony import */ var _healthCondition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./healthCondition.vue?vue&type=script&lang=js& */ "./src/views/pollution/detail/components/healthCondition.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _healthCondition_vue_vue_type_style_index_0_id_3a0df5d5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./healthCondition.vue?vue&type=style&index=0&id=3a0df5d5&lang=scss&scoped=true& */ "./src/views/pollution/detail/components/healthCondition.vue?vue&type=style&index=0&id=3a0df5d5&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _healthCondition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _healthCondition_vue_vue_type_template_id_3a0df5d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _healthCondition_vue_vue_type_template_id_3a0df5d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3a0df5d5",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/pollution/detail/components/healthCondition.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/pollution/detail/components/healthCondition.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./src/views/pollution/detail/components/healthCondition.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_healthCondition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./healthCondition.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/components/healthCondition.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_healthCondition_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/pollution/detail/components/healthCondition.vue?vue&type=style&index=0&id=3a0df5d5&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************!*\
  !*** ./src/views/pollution/detail/components/healthCondition.vue?vue&type=style&index=0&id=3a0df5d5&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_healthCondition_vue_vue_type_style_index_0_id_3a0df5d5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./healthCondition.vue?vue&type=style&index=0&id=3a0df5d5&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/components/healthCondition.vue?vue&type=style&index=0&id=3a0df5d5&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_healthCondition_vue_vue_type_style_index_0_id_3a0df5d5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_healthCondition_vue_vue_type_style_index_0_id_3a0df5d5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_healthCondition_vue_vue_type_style_index_0_id_3a0df5d5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_healthCondition_vue_vue_type_style_index_0_id_3a0df5d5_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/pollution/detail/components/healthCondition.vue?vue&type=template&id=3a0df5d5&scoped=true&":
/*!**************************************************************************************************************!*\
  !*** ./src/views/pollution/detail/components/healthCondition.vue?vue&type=template&id=3a0df5d5&scoped=true& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_healthCondition_vue_vue_type_template_id_3a0df5d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./healthCondition.vue?vue&type=template&id=3a0df5d5&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/components/healthCondition.vue?vue&type=template&id=3a0df5d5&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_healthCondition_vue_vue_type_template_id_3a0df5d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_healthCondition_vue_vue_type_template_id_3a0df5d5_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/pollution/detail/components/redCodeInfo.vue":
/*!***************************************************************!*\
  !*** ./src/views/pollution/detail/components/redCodeInfo.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _redCodeInfo_vue_vue_type_template_id_3f80cfbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./redCodeInfo.vue?vue&type=template&id=3f80cfbc&scoped=true& */ "./src/views/pollution/detail/components/redCodeInfo.vue?vue&type=template&id=3f80cfbc&scoped=true&");
/* harmony import */ var _redCodeInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./redCodeInfo.vue?vue&type=script&lang=js& */ "./src/views/pollution/detail/components/redCodeInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _redCodeInfo_vue_vue_type_style_index_0_id_3f80cfbc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./redCodeInfo.vue?vue&type=style&index=0&id=3f80cfbc&lang=scss&scoped=true& */ "./src/views/pollution/detail/components/redCodeInfo.vue?vue&type=style&index=0&id=3f80cfbc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _redCodeInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _redCodeInfo_vue_vue_type_template_id_3f80cfbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _redCodeInfo_vue_vue_type_template_id_3f80cfbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "3f80cfbc",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/pollution/detail/components/redCodeInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/pollution/detail/components/redCodeInfo.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./src/views/pollution/detail/components/redCodeInfo.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_redCodeInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./redCodeInfo.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/components/redCodeInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_redCodeInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/pollution/detail/components/redCodeInfo.vue?vue&type=style&index=0&id=3f80cfbc&lang=scss&scoped=true&":
/*!*************************************************************************************************************************!*\
  !*** ./src/views/pollution/detail/components/redCodeInfo.vue?vue&type=style&index=0&id=3f80cfbc&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_redCodeInfo_vue_vue_type_style_index_0_id_3f80cfbc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./redCodeInfo.vue?vue&type=style&index=0&id=3f80cfbc&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/components/redCodeInfo.vue?vue&type=style&index=0&id=3f80cfbc&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_redCodeInfo_vue_vue_type_style_index_0_id_3f80cfbc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_redCodeInfo_vue_vue_type_style_index_0_id_3f80cfbc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_redCodeInfo_vue_vue_type_style_index_0_id_3f80cfbc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_redCodeInfo_vue_vue_type_style_index_0_id_3f80cfbc_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/pollution/detail/components/redCodeInfo.vue?vue&type=template&id=3f80cfbc&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./src/views/pollution/detail/components/redCodeInfo.vue?vue&type=template&id=3f80cfbc&scoped=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_redCodeInfo_vue_vue_type_template_id_3f80cfbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./redCodeInfo.vue?vue&type=template&id=3f80cfbc&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/pollution/detail/components/redCodeInfo.vue?vue&type=template&id=3f80cfbc&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_redCodeInfo_vue_vue_type_template_id_3f80cfbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_redCodeInfo_vue_vue_type_template_id_3f80cfbc_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvY29tcGFueURldGFpbC52dWUiLCJ3ZWJwYWNrOi8vL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2NvbXBvbmVudHMvaGVhbHRoQ29uZGl0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvY29tcG9uZW50cy9yZWRDb2RlSW5mby52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvY29tcGFueURldGFpbC52dWU/YTdjMiIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9jb21wb25lbnRzL2hlYWx0aENvbmRpdGlvbi52dWU/NjUzNyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9jb21wb25lbnRzL3JlZENvZGVJbmZvLnZ1ZT9kNGFlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL2ludGVybmFscy9hcnJheS1mb3ItZWFjaC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL3dlYi5kb20tY29sbGVjdGlvbnMuZm9yLWVhY2guanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvY29tcGFueURldGFpbC52dWU/YTk5ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9jb21wb25lbnRzL2hlYWx0aENvbmRpdGlvbi52dWU/NDFlYSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9jb21wb25lbnRzL3JlZENvZGVJbmZvLnZ1ZT83ZGZlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2NvbXBhbnlEZXRhaWwudnVlPzUwOGQiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvY29tcG9uZW50cy9oZWFsdGhDb25kaXRpb24udnVlPzJlNjEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvY29tcG9uZW50cy9yZWRDb2RlSW5mby52dWU/NzNmMyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BvbGx1dGVyL2JsdWUucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcG9sbHV0ZXIvZmxvdy5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wb2xsdXRlci9ncmVlbi5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wb2xsdXRlci9ncmVlbl9jb2RlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BvbGx1dGVyL2xpZ2h0X2dyZWVuLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BvbGx1dGVyL25vdGljZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wb2xsdXRlci9vcmFuZ2UucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcG9sbHV0ZXIvcG9zaXRpb24ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvcG9sbHV0ZXIvcHVycGxlLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3BvbGx1dGVyL3JlZC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wb2xsdXRlci9yZWRfY29kZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9wb2xsdXRlci95ZWxsb3dfY29kZS5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvY29tcGFueURldGFpbC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvY29tcGFueURldGFpbC52dWU/MmZmOSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9jb21wYW55RGV0YWlsLnZ1ZT81OWRjIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2NvbXBhbnlEZXRhaWwudnVlPzZkY2IiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvY29tcG9uZW50cy9oZWFsdGhDb25kaXRpb24udnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2NvbXBvbmVudHMvaGVhbHRoQ29uZGl0aW9uLnZ1ZT84YTJhIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2NvbXBvbmVudHMvaGVhbHRoQ29uZGl0aW9uLnZ1ZT84NjMwIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2NvbXBvbmVudHMvaGVhbHRoQ29uZGl0aW9uLnZ1ZT9lNTVhIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2NvbXBvbmVudHMvcmVkQ29kZUluZm8udnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9wb2xsdXRpb24vZGV0YWlsL2NvbXBvbmVudHMvcmVkQ29kZUluZm8udnVlPzQwMDkiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvY29tcG9uZW50cy9yZWRDb2RlSW5mby52dWU/ZWE0YSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9jb21wb25lbnRzL3JlZENvZGVJbmZvLnZ1ZT82Y2VjIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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RSwyR0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBNFQsQ0FBZ0IsNFVBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBaFY7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvNDkuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcblx0PGRpdiBzdHlsZT1cImJhY2tncm91bmQ6ICNmZmZcIiBjbGFzcz1cImNvbXBhbnlkZXRhaWxcIj5cclxuXHRcdDx2YW4tbmF2LWJhciB0aXRsZT1cIuS8geS4muivpuaDhVwiIGxlZnQtYXJyb3cgQGNsaWNrLWxlZnQ9XCIkcm91dGVyLmdvKC0xKVwiPlxyXG5cdFx0XHQ8IS0tIDx0ZW1wbGF0ZSAjcmlnaHQ+XHJcblx0XHRcdFx0PGltZyBzcmM9XCJAL2Fzc2V0cy9wb2xsdXRlci90YXNrLnBuZ1wiIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiAzcHhcIj5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cImludG8tdGFza1wiPuS7u+WKoeS4i+i+vjwvc3Bhbj5cclxuXHRcdFx0PC90ZW1wbGF0ZT4gLS0+XHJcblx0XHQ8L3Zhbi1uYXYtYmFyPlxyXG5cdFx0PGRpdiBzdHlsZT1cImhlaWdodDogY2FsYygxMDB2aCAtIDl2aCk7b3ZlcmZsb3cteTogYXV0bztcIj5cclxuXHJcblx0XHRcdDxxcmJhc2UtaW5mbyA6dHlwZT1cInR5cGVcIiA6ZW52Q29kZUluZm89XCJlbnZDb2RlSW5mb1wiIC8+XHJcblxyXG5cdFx0XHQ8cmVkLWNvZGUtaW5mbyA6aWQ9XCJkd2lkXCIgdi1pZj1cInR5cGU9PSdyZWQnXCIvPlxyXG5cclxuXHRcdFx0PGhlYWx0aC1jb25kaXRpb24gOmlkPVwid3J5Ym1cIi8+XHJcblxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY29tcGFueS1pbmZvXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbXBhbnlfdGl0bGVcIj48c3Bhbj7kvIHkuJrln7rmnKzkv6Hmga88L3NwYW4+PHNwYW5cclxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJ0aXRsZV90aXBzIGdyZWVuX3RpcHNcIj7lgaXlurfnirbmgIE8c3BhbiA6Y2xhc3M9XCJiZWhhdmlvcmxhYmVsc3xmaWx0ZXJDb2xvcigpXCI+e3tiZWhhdmlvcmxhYmVsc3x8Jy0nfX08L3NwYW4+PC9zcGFuPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJkZXRhaWxfdGl0bGVcIiBAY2xpY2s9XCJiYXNlSW5mb1wiPuivpuaDhSA+PC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtYWluX2NvbnRlbnRcIj5cclxuXHRcdFx0XHRcdDxkaXY+PHNwYW4+5rGh5p+T57G75YirPC9zcGFuPjxzcGFuPnt7ZW50SW5mby5wdHlwZX19PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdj48c3Bhbj7ooYzkuJrnsbvliKs8L3NwYW4+PHNwYW4+e3tlbnRJbmZvLmNhdGVnb3J5fX08L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2PjxzcGFuPueOr+S/neiBlOezu+S6ujwvc3Bhbj48c3Bhbj57e2VudEluZm8uY29udGFjdH19PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdj48c3Bhbj7ogZTns7vmlrnlvI88L3NwYW4+PHNwYW4+e3tlbnRJbmZvLmNvbnRhY3RUZWx9fTwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWFpbl9mb290ZXIgbWFpbmZsZXhcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtYWluX2ZfbFwiIEBjbGljaz1cInRvTWFwKClcIj5cclxuXHRcdFx0XHRcdFx0PGltZyBzcmM9XCIuLi8uLi8uLi9hc3NldHMvcG9sbHV0ZXIvcG9zaXRpb24ucG5nXCIgLz5cclxuXHRcdFx0XHRcdFx0PHNwYW4+5Zyw5Z2A77yae3tlbnRJbmZvLmFkZHJlc3N9fTwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PCEtLSA8ZGl2IGNsYXNzPVwibWFpbl9mX3JcIiBAY2xpY2s9XCJiYXNlSW5mb1wiPlxyXG5cdFx0XHRcdFx0XHTmm7TlpJrln7rmnKzkv6Hmga8gPlxyXG5cdFx0XHRcdFx0PC9kaXY+IC0tPlxyXG5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDwhLS08ZGl2IGNsYXNzPVwiY29tcGFueS1pbmZvXCIgIDpjbGFzcz1cInNob3dNb3JlJiZ0YXNrSW5mby5sZW5ndGg+Mj8nbW9yZWhlaWdodCc6JydcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29tcGFueV90aXRsZVwiPjxzcGFuPumXreeOr+euoeeQhuaVtOaUueS/oeaBrzwvc3Bhbj48c3BhbiBjbGFzcz1cInRpdGxlX3RpcHMgYnJvd25fdGlwc1wiPu+8iHt7dGFza0luZm8ubGVuZ3RofX3kuKrvvIk8L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1haW5fY29udGVudFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ1aWxkX2luZm9cIiB2LWZvcj1cIihpdGVtLGpzaSkgaW4gdGFza0luZm9cIiBAY2xpY2s9XCJzaG93VGFza0luZm8oaXRlbSlcIj5cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiBjbGFzcz1cImJ1aWxkX2xhYmVsIGJ1aWxkX2JsdWVcIiA+e3tpdGVtLlNUQVRVU319PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuPnt7aXRlbS5UQVNLX1RZUEV9fTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4+5byA5aeL5pe26Ze077yae3tpdGVtLkNSRUFURV9USU1FfX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4+57uT5p2f5pe26Ze077yae3tpdGVtLkVORF9USU1FfX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IHN0eWxlPVwiZm9udC1zaXplOiAxMnB4OyBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuPuiAl+aXtu+8mnt7aXRlbS5EQVl9fTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJidWxpZF9oclwiIHYtaWY9XCJqc2khPXRhc2tJbmZvLmxlbmd0aC0xXCI+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgIHYtaWY9XCJ0YXNrSW5mby5sZW5ndGg+MlwiIGNsYXNzPVwiY29tcGFueS1pbmZvXCIgc3R5bGU9XCJtYXJnaW46MHB4IDEwcHggNnB4O3RleHQtYWxpZ246IGNlbnRlcjtcIiBAY2xpY2s9XCJnZXRNb3JlKClcIj5cclxuXHRcdFx0ICAgIDxzcGFuIGNsYXNzPVwibW9yZVwiPnt7c2hvd01vcmU/J+afpeeci+abtOWkmic6J+aUtui1tyd9fTwvc3Bhbj5cclxuXHRcdFx0PC9kaXY+LS0+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb21wYW55LWluZm9cIiB2LWlmPVwiaXNTaG93LmxpY2Vuc2VcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29tcGFueV90aXRsZVwiPjxzcGFuPuaOkuaxoeiuuOWPr+ivgTwvc3Bhbj48c3BhbiBjbGFzcz1cImRldGFpbF90aXRsZVwiIEBjbGljaz1cImxpY2VuY2VJbmZvKGxpY2Vuc2UpXCI+6K+m5oOFID48L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1haW5fY29udGVudFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImhhbGZfd2lkdGhcIj48c3Bhbj7kuLvopoHmsaHmn5PniannsbvliKs8L3NwYW4+PHNwYW4+e3tsaWNlbnNlLm1haW5Qb2xDYXRlfX08L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiaGFsZl93aWR0aFwiIHYtc2hvdz1cImxpY2Vuc2UubWFpblBvbENhdGUmJmxpY2Vuc2UubWFpblBvbENhdGUuaW5jbHVkZXMoJ+W6n+awlCcpXCI+XHJcblx0XHRcdFx0XHRcdDxzcGFuPuWkp+awlOaxoeafk+eJqeaOkuaUvuinhOW+izwvc3Bhbj48c3Bhbj57e2xpY2Vuc2UuZ2FzRGlzTGF3fX08L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwid2hvbGVfd2lkdGhcIiB2LXNob3c9XCJsaWNlbnNlLm1haW5Qb2xDYXRlJiZsaWNlbnNlLm1haW5Qb2xDYXRlLmluY2x1ZGVzKCflup/msJQnKVwiPlxyXG5cdFx0XHRcdFx0XHQ8c3Bhbj7lpKfmsJTkuLvopoHmsaHmn5Pniannp43nsbs8L3NwYW4+PHNwYW4+e3tsaWNlbnNlLmdhc01haW5Qb2xDYXRlfX08L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwid2hvbGVfd2lkdGhcIiB2LXNob3c9XCJsaWNlbnNlLm1haW5Qb2xDYXRlJiZsaWNlbnNlLm1haW5Qb2xDYXRlLmluY2x1ZGVzKCflup/msJQnKVwiPlxyXG5cdFx0XHRcdFx0XHQ8c3Bhbj7lpKfmsJTmsaHmn5PnianmjpLmlL7miafooYzmoIflh4Y8L3NwYW4+PHNwYW4+e3tsaWNlbnNlLmdhc0Rpc1N0YW5kYXJkfX08L3NwYW4+PC9kaXY+XHJcblxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImhhbGZfd2lkdGhcIiB2LXNob3c9XCJsaWNlbnNlLm1haW5Qb2xDYXRlJiZsaWNlbnNlLm1haW5Qb2xDYXRlLmluY2x1ZGVzKCflup/msLQnKVwiPlxyXG5cdFx0XHRcdFx0XHQ8c3Bhbj7lup/msLTmsaHmn5PnianmjpLmlL7op4Tlvos8L3NwYW4+PHNwYW4+e3tsaWNlbnNlLndhdGVyRGlzTGF3fX08L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwid2hvbGVfd2lkdGhcIiB2LXNob3c9XCJsaWNlbnNlLm1haW5Qb2xDYXRlJiZsaWNlbnNlLm1haW5Qb2xDYXRlLmluY2x1ZGVzKCflup/msLQnKVwiPlxyXG5cdFx0XHRcdFx0XHQ8c3Bhbj7lup/msLTkuLvopoHmsaHmn5Pniannp43nsbs8L3NwYW4+PHNwYW4+e3tsaWNlbnNlLndhdGVyTWFpblBvbENhdGV9fTwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ3aG9sZV93aWR0aFwiIHYtc2hvdz1cImxpY2Vuc2UubWFpblBvbENhdGUmJmxpY2Vuc2UubWFpblBvbENhdGUuaW5jbHVkZXMoJ+W6n+awtCcpXCI+XHJcblx0XHRcdFx0XHRcdDxzcGFuPuW6n+awtOaxoeafk+eJqeaOkuaUvuaJp+ihjOagh+WHhjwvc3Bhbj48c3Bhbj57e2xpY2Vuc2Uud2F0ZXJEaXNTdGFuZGFyZH19PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb21wYW55LWluZm9cIiB2LWlmPVwiaXNTaG93LmNvbnNJbmZvc1wiIDpjbGFzcz1cInNob3dNb3JlMSYmY29uc0luZm9zLmxlbmd0aD4yPydtb3JlaGVpZ2h0JzonJ1wiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb21wYW55X3RpdGxlXCI+PHNwYW4+5bu66K6+6aG555uuPC9zcGFuPjxzcGFuIGNsYXNzPVwidGl0bGVfdGlwcyBicm93bl90aXBzXCI+77yIe3tjb25zSW5mb3MubGVuZ3RofX3kuKrvvInpobnnm648L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1haW5fY29udGVudFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImJ1aWxkX2luZm9cIiB2LWZvcj1cIihqc2l0ZW0sanNpKSBpbiBjb25zSW5mb3NcIiBAY2xpY2s9XCJidWlsZEluZm8oanNpdGVtKVwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiYnVpbGRfbGFiZWxcIlxyXG5cdFx0XHRcdFx0XHRcdFx0OmNsYXNzPVwianNpdGVtLnR5cGU9PSflpIfmoYgnPydidWlsZF9ncmVlbic6anNpdGVtLnR5cGU9PSfnjq/or4QnPydidWlsZF9wdXJwbGUnOididWlsZF9ibHVlJ1wiPnt7anNpdGVtLnR5cGV9fTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj57e2pzaXRlbS5wcm9qZWN0TmFtZX19PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj7lu7rorr7mgKfotKjvvJp7e2pzaXRlbS5hdHRyfX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4+546v6K+E5pe26Ze077yae3tqc2l0ZW0uZGF0ZS5zdWJzdHIoMCwxMCl9fTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJidWxpZF9oclwiIHYtaWY9XCJqc2khPWNvbnNJbmZvcy5sZW5ndGgtMVwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8IS0tIDxkaXYgY2xhc3M9XCJidWlsZF9pbmZvXCIgQGNsaWNrPVwiYnVpbGRJbmZvKCdwcm9qZWN0JylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48c3BhbiBjbGFzcz1cImJ1aWxkX2xhYmVsIGJ1aWxkX3B1cnBsZVwiPueOr+ivhDwvc3Bhbj48c3Bhbj7kupHljZfpk63liKnoo4XppbDlu7rmnZDnlJ/kuqfnur/lu7rorr7pobnnm648L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4+5bu66K6+5oCn6LSo77ya5paw5bu677yI6L+B5bu677yJPC9zcGFuPjxzcGFuPueOr+ivhOaXtumXtO+8mjIwMjMtMDktMTI8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+IC0tPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiB2LWlmPVwiaXNTaG93LmNvbnNJbmZvcyYmY29uc0luZm9zLmxlbmd0aD4yXCIgY2xhc3M9XCJjb21wYW55LWluZm9cIiBzdHlsZT1cIm1hcmdpbjowcHggMTBweCA2cHg7dGV4dC1hbGlnbjogY2VudGVyO1wiIEBjbGljaz1cImdldE1vcmUxKClcIj5cclxuXHRcdFx0ICAgIDxzcGFuIGNsYXNzPVwibW9yZVwiPnt7c2hvd01vcmUxPyfmn6XnnIvmm7TlpJonOifmlLbotbcnfX08L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbXBhbnktaW5mb1wiIHYtaWY9XCJpc1Nob3cubW9uaXRvckluZm9zXCIgOmNsYXNzPVwic2hvd01vcmUyJiZtb25pdG9ySW5mb3MubGVuZ3RoPjI/J21vcmVoZWlnaHQnOicnXCI+XHJcblx0XHRcdFx0PCEtLSBtb25pdG9ySW5mb3MgLS0+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbXBhbnlfdGl0bGVcIj5cclxuXHRcdFx0XHRcdDxzcGFuPuWcqOe6v+ebkeaOpzwvc3Bhbj48c3BhbiBjbGFzcz1cInRpdGxlX3RpcHMgYnJvd25fdGlwc1wiPui+vnt7c3RhbmROdW19feS4qi/mgLt7e3RvdGFsTnVtfX3kuKo8L3NwYW4+XHJcblx0XHRcdFx0XHQ8IS0tIDxzcGFuIGNsYXNzPVwiZGV0YWlsX3RpdGxlXCIgQGNsaWNrPVwibW9uaXRvckluZm9cIj7or6bmg4UgPjwvc3Bhbj4gLS0+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PHRlbXBsYXRlIHYtZm9yPVwiaXRlbSBpbiBtb25pdG9ySW5mb3NcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvbmxpbmVfYmx1ZVwiPlxyXG5cdFx0XHRcdFx0XHQ8c3Bhbj57e2l0ZW0udHlwZX195o6S5Y+jPC9zcGFuPjxzcGFuPuaOkuaUvuaAu+mHjyB7e2l0ZW0uZGlzRW1pc3Npb25zfX1rZzwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PCEtLSA8ZGl2IGNsYXNzPVwib25saW5lX3doaXRlXCIgQGNsaWNrPVwicG9ydEluZm8oKVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+56qR5aS0PC9zcGFuPjxzcGFuIGNsYXNzPVwidGl0bGVfdGlwcyBncmV5X3RpcHNcIj7pgJrkv6HkuK3mlq08L3NwYW4+PHNwYW4+6L6+PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj4gLS0+XHJcblx0XHRcdFx0XHQ8IS0tICRyb3V0ZXIucHVzaCgnL3BvcnRJbmZvRGV0YWlsJykgLS0+XHJcblx0XHRcdFx0PHRlbXBsYXRlIHYtZm9yPVwiaXRlbTIgaW4gaXRlbS5vdXRzXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvbmxpbmVfd2hpdGVcIiBAY2xpY2s9XCJwb3J0SW5mbyhpdGVtMixpdGVtLnR5cGUpXCI+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4+e3tpdGVtMi5kZXZpY2VOYW1lfX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ0aXRsZV90aXBzXCIgOmNsYXNzPVwiaXRlbTIuc3RhdHVzPT0n5Zyo57q/Jz8nZ3JlZW5fdGlwcyc6J2dyZXlfdGlwcydcIj57e2l0ZW0yLnN0YXR1c319PC9zcGFuPjxzcGFuIDpjbGFzcz1cIml0ZW0yLnN0YW5kYXJkPycnOidyZWRfdGlwJ1wiPnt7aXRlbTIuc3RhbmRhcmQ/J+i+vic6J+i2hSd9fTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvbmxpbmVfZGF0YVwiIHN0eWxlPVwiYmFja2dyb3VuZDogcmdiYSgyNTAsIDI1MCwgMjUwLCAxKVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvbmxpbmVfZGF0YV90aXRsZVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4+5pWw5o2u5pe26Ze077yae3tpdGVtMi5kYXRlVGltZX19PC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHNwYW4gQGNsaWNrPVwicG9ydEluZm8oaXRlbTIsaXRlbS50eXBlKVwiPuivpuaDhT48L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm9ubGluZV9kYXRhX2luZm9cIiB2LWlmPVwiaXRlbS50eXBlPT0n5bqf5rC0J1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+5YyW5a2m6ZyA5rCn6YeP77yaPC9zcGFuPjxzcGFuPnt7aXRlbTIuY29kfX1tZy9MPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5QSO+8mjwvc3Bhbj48c3Bhbj57e2l0ZW0yLnBofX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+PHNwYW4+5rCo5rCu77yaPC9zcGFuPjxzcGFuPnt7aXRlbTIubmgzfX1tZy9MPC9zcGFuPjxzcGFuPuaAu+awru+8mjwvc3Bhbj48c3Bhbj57e2l0ZW0yLnpkfX1tZy9MPC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdj48c3Bhbj7mgLvno7fvvJo8L3NwYW4+PHNwYW4+e3tpdGVtMi56bH19bWcvTDwvc3Bhbj48c3Bhbj7mgqzmta7nianvvJo8L3NwYW4+PHNwYW4+e3tpdGVtMi54Znd9fW1nL0w8L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PjxzcGFuPuaAu+mTnO+8mjwvc3Bhbj48c3Bhbj57e2l0ZW0yLnp0fX1tZy9MPC9zcGFuPjxzcGFuPuaAu+mVje+8mjwvc3Bhbj48c3Bhbj57e2l0ZW0yLnptfX1tZy9MPC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdj48c3Bhbj7kuInku7fpk6zvvJo8L3NwYW4+PHNwYW4+e3tpdGVtMi5zamd9fW1nL0w8L3NwYW4+PHNwYW4+5YWt5Lu36ZOs77yaPC9zcGFuPjxzcGFuPnt7aXRlbTIubGpnfX1tZy9MPC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdj48c3Bhbj7msJ/nprvlrZDvvJo8L3NwYW4+PHNwYW4+e3tpdGVtMi5mbHp9fW1nL0w8L3NwYW4+PHNwYW4+5oC75L2Z5rCv77yaPC9zcGFuPjxzcGFuPnt7aXRlbTIuenlsfX1tZy9MPC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvbmxpbmVfZGF0YV9pbmZvXCIgdi1pZj1cIml0ZW0udHlwZT09J+W6n+awlCdcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+PHNwYW4+54Of5bCY77yaPC9zcGFuPjxzcGFuPnt7aXRlbTIuc29vdH19bWcvbcKzPC9zcGFuPjxzcGFuPuS6jOawp+WMluehq++8mjwvc3Bhbj48c3Bhbj57e2l0ZW0yLnNvMn19dWcvbcKzPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PjxzcGFuPuawruawp+WMlueJqe+8mjwvc3Bhbj48c3Bhbj57e2l0ZW0yLm5veH19dWcvbcKzPC9zcGFuPjxzcGFuPuS4gOawp+WMlueis++8mjwvc3Bhbj48c3Bhbj57e2l0ZW0yLmNvfX1tZy9twrM8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+PHNwYW4+5rCn5rCU77yaPC9zcGFuPjxzcGFuPnt7aXRlbTIubzJ9fXVnL23Cszwvc3Bhbj48c3Bhbj7msK/ljJbmsKLvvJo8L3NwYW4+PHNwYW4+e3tpdGVtMi5oY2x9fW1nL23Cszwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvdGVtcGxhdGU+XHJcblxyXG5cdFx0XHRcdDwvdGVtcGxhdGU+XHJcblxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiAgdi1pZj1cImlzU2hvdy5tb25pdG9ySW5mb3MmJm1vbml0b3JJbmZvcy5sZW5ndGg+MlwiIGNsYXNzPVwiY29tcGFueS1pbmZvXCIgc3R5bGU9XCJtYXJnaW46MHB4IDEwcHggNnB4O3RleHQtYWxpZ246IGNlbnRlcjtcIiBAY2xpY2s9XCJnZXRNb3JlMigpXCI+XHJcblx0XHRcdCAgICA8c3BhbiBjbGFzcz1cIm1vcmVcIj57e3Nob3dNb3JlMj8n5p+l55yL5pu05aSaJzon5pS26LW3J319PC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb21wYW55LWluZm9cIiB2LWlmPVwiaXNTaG93LnN1cGVNb25pdG9ySW5mb3NcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29tcGFueV90aXRsZVwiPjxzcGFuPuebkeedo+aAp+ebkeaOpzwvc3Bhbj48c3BhbiBjbGFzcz1cInRpdGxlX3RpcHMgYnJvd25fdGlwc1wiPui+vnt7amRzdGFuZE51bX195LiqL+aAu3t7amR0b3RhbE51bX195LiqPC9zcGFuPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJkZXRhaWxfdGl0bGVcIiBAY2xpY2s9XCJtb25pdG9ySW5mb1wiPuivpuaDhSA+PC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDx0ZW1wbGF0ZSB2LWZvcj1cIml0ZW0gaW4gc3VwZU1vbml0b3JJbmZvc1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm9ubGluZV9ibHVlXCI+XHJcblx0XHRcdFx0XHRcdDwhLS0gPHNwYW4+5bqf5rCU5o6S5Y+jPC9zcGFuPjxzcGFuPuaOkuaUvuaAu+mHjyAxMjk1Ljgza2c8L3NwYW4+IC0tPlxyXG5cdFx0XHRcdFx0XHQ8c3Bhbj57e2l0ZW0udHlwZX195o6S5Y+jPC9zcGFuPjxzcGFuPuaOkuaUvuaAu+mHjyB7e2l0ZW0uZGlzRW1pc3Npb25zfX1rZzwvc3Bhbj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PHRlbXBsYXRlIHYtZm9yPVwiaXRlbTIgaW4gaXRlbS5vdXRzXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvbmxpbmVfd2hpdGVcIiBAY2xpY2s9XCJwb3J0SW5mbyhpdGVtMixpdGVtLnR5cGUpXCI+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4+e3tpdGVtMi5kZXZpY2VOYW1lfX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ0aXRsZV90aXBzXCIgOmNsYXNzPVwiaXRlbTIuc3RhdHVzPT0n5Zyo57q/Jz8nZ3JlZW5fdGlwcyc6J2dyZXlfdGlwcydcIj57e2l0ZW0yLnN0YXR1c319PC9zcGFuPjxzcGFuIDpjbGFzcz1cIml0ZW0yLnN0YW5kYXJkPycnOidyZWRfdGlwJ1wiPnt7aXRlbTIuc3RhbmRhcmQ/J+i+vic6J+i2hSd9fTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwhLS0gPGRpdiBjbGFzcz1cIm9ubGluZV93aGl0ZVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxzcGFuPueqkeWktDwvc3Bhbj48c3BhbiBjbGFzcz1cInRpdGxlX3RpcHMgZ3JleV90aXBzXCI+6YCa5L+h5Lit5patPC9zcGFuPjxzcGFuPui+vjwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+IC0tPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwib25saW5lX2RhdGFcIiBzdHlsZT1cImJhY2tncm91bmQ6IHJnYmEoMjUwLCAyNTAsIDI1MCwgMSlcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwib25saW5lX2RhdGFfdGl0bGVcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuPuaVsOaNruaXtumXtO+8mnt7aXRlbTIuZGF0ZVRpbWV9fTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDxzcGFuIEBjbGljaz1cInBvcnRJbmZvKGl0ZW0yKVwiPuivpuaDhT48L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm9ubGluZV9kYXRhX2luZm9cIiB2LWlmPVwiaXRlbS50eXBlPT0n5bqf5rC0J1wiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHNwYW4+5YyW5a2m6ZyA5rCn6YeP77yaPC9zcGFuPjxzcGFuPnt7aXRlbTIuY29kfX1tZy9MPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8c3Bhbj5QSO+8mjwvc3Bhbj48c3Bhbj57e2l0ZW0yLnBofX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+PHNwYW4+5rCo5rCu77yaPC9zcGFuPjxzcGFuPnt7aXRlbTIubmgzfX1tZy9MPC9zcGFuPjxzcGFuPuaAu+awru+8mjwvc3Bhbj48c3Bhbj57e2l0ZW0yLnpkfX1tZy9MPC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdj48c3Bhbj7mgLvno7fvvJo8L3NwYW4+PHNwYW4+e3tpdGVtMi56bH19bWcvTDwvc3Bhbj48c3Bhbj7mgqzmta7nianvvJo8L3NwYW4+PHNwYW4+e3tpdGVtMi54Znd9fW1nL0w8L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PjxzcGFuPuaAu+mTnO+8mjwvc3Bhbj48c3Bhbj57e2l0ZW0yLnp0fX1tZy9MPC9zcGFuPjxzcGFuPuaAu+mVje+8mjwvc3Bhbj48c3Bhbj57e2l0ZW0yLnptfX1tZy9MPC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdj48c3Bhbj7kuInku7fpk6zvvJo8L3NwYW4+PHNwYW4+e3tpdGVtMi5zamd9fW1nL0w8L3NwYW4+PHNwYW4+5YWt5Lu36ZOs77yaPC9zcGFuPjxzcGFuPnt7aXRlbTIubGpnfX1tZy9MPC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdj48c3Bhbj7msJ/nprvlrZDvvJo8L3NwYW4+PHNwYW4+e3tpdGVtMi5mbHp9fW1nL0w8L3NwYW4+PHNwYW4+5oC75L2Z5rCv77yaPC9zcGFuPjxzcGFuPnt7aXRlbTIuenlsfX1tZy9MPC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJvbmxpbmVfZGF0YV9pbmZvXCIgdi1pZj1cIml0ZW0udHlwZT09J+W6n+awlCdcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+PHNwYW4+54Of5bCY77yaPC9zcGFuPjxzcGFuPnt7aXRlbTIuc29vdH19bWcvbcKzPC9zcGFuPjxzcGFuPuS6jOawp+WMluehq++8mjwvc3Bhbj48c3Bhbj57e2l0ZW0yLnNvMn19dWcvbcKzPC9zcGFuPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2PjxzcGFuPuawruawp+WMlueJqe+8mjwvc3Bhbj48c3Bhbj57e2l0ZW0yLm5veH19dWcvbcKzPC9zcGFuPjxzcGFuPuS4gOawp+WMlueis++8mjwvc3Bhbj48c3Bhbj57e2l0ZW0yLmNvfX1tZy9twrM8L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXY+PHNwYW4+5rCn5rCU77yaPC9zcGFuPjxzcGFuPnt7aXRlbTIubzJ9fXVnL23Cszwvc3Bhbj48c3Bhbj7msK/ljJbmsKLvvJo8L3NwYW4+PHNwYW4+e3tpdGVtMi5oY2x9fW1nL23Cszwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvdGVtcGxhdGU+XHJcblx0XHRcdFx0PC90ZW1wbGF0ZT5cclxuXHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb21wYW55LWluZm9cIiB2LWlmPVwiaXNTaG93LnB1bmlzaEluZm9zXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbXBhbnlfdGl0bGVcIj48c3Bhbj7ooYzmlL/lpITnvZo8L3NwYW4+PHNwYW4gY2xhc3M9XCJ0aXRsZV90aXBzIGJyb3duX3RpcHNcIj57e3B1bmlzaEluZm9zLmxlbmd0aH195Lu2PC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtYWluX2NvbnRlbnRcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJhZG1pbl9pbmZvXCIgdi1mb3I9XCIoY2ZpdGVtLGkpIGluIHB1bmlzaEluZm9zXCIgQGNsaWNrPVwicGVuYWx0eUluZm8oY2ZpdGVtKVwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ3JleV9mb250XCI+PHNwYW4+6L+d5rOV6KGM5Li6PC9zcGFuPjxzcGFuPuaXtumXtO+8mnt7Y2ZpdGVtLnRpbWV9fTwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdj48c3BhbiBjbGFzcz1cIm5vcm1hbF9mb250XCI+e3tjZml0ZW0ubWVzc2FnZX19PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnVsaWRfaHJcIiB2LWlmPVwiaSE9cHVuaXNoSW5mb3MubGVuZ3RoLTFcIj48L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PCEtLSAgICAgPGRpdiBjbGFzcz1cImFkbWluX2luZm9cIiBAY2xpY2s9XCJwZW5hbHR5SW5mb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZ3JleV9mb250XCI+PHNwYW4+6L+d5rOV6KGM5Li6PC9zcGFuPjxzcGFuPuaXtumXtO+8mjIwMjMtMDktMTI8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+PHNwYW4gY2xhc3M9XCJub3JtYWxfZm9udFwiPuaxoeawtOWkhOeQhuS4jeWmpeW9k++8jOaxoeawtOWkhOeQhuS4jeWmpeW9k++8jOaxoeawtOWkhOeQhuS4jeWmpeW9kzwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gLS0+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbXBhbnktaW5mb1wiIHYtaWY9XCJpc1Nob3cudHNnc3BzSW5mb3NcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29tcGFueV90aXRsZVwiPjxzcGFuPuesrOS6jOasoeaxoeafk+aZruafpTwvc3Bhbj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwidGl0bGVfdGlwcyBicm93bl90aXBzXCI+e3t0c2dzcHNJbmZvcy50eXBlfGdldFN0YXR1cygpfX08L3NwYW4+XHJcblx0XHRcdFx0XHQ8IS0tIDxzcGFuIGNsYXNzPVwiZGV0YWlsX3RpdGxlXCIgQGNsaWNrPVwidHdvUG9sbHV0aW9uXCI+6K+m5oOFID48L3NwYW4+IC0tPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJvbmxpbmVfYmx1ZVwiPlxyXG5cdFx0XHRcdFx0PHNwYW4+5bqf5rCU5rGh5p+T5rqQ5o6S5pS+6YeP77yI5YWo5Y6C5ZCI6K6h77yJPC9zcGFuPjxzcGFuPjwvc3Bhbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWFpbl9jb250ZW50XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibm9fYm90dG9tXCI+PHNwYW4+5bel5Lia5bqf5rCUPC9zcGFuPjxzcGFuPnt7dHNnc3BzSW5mb3MuZ2FzRGlzSW5mby5nYXN9fSDlkKg8L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibm9fYm90dG9tXCI+PHNwYW4+5rCu5rCn5YyW54mpPC9zcGFuPjxzcGFuPnt7dHNnc3BzSW5mb3MuZ2FzRGlzSW5mby5ub3h9fSDlkKg8L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibm9fYm90dG9tXCI+PHNwYW4+5LqM5rCn5YyW56GrPC9zcGFuPjxzcGFuPnt7dHNnc3BzSW5mb3MuZ2FzRGlzSW5mby5zbzJ9fSDlkKg8L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibm9fYm90dG9tXCI+PHNwYW4+5oyl5Y+R5oCn5pyJ5py654mpPC9zcGFuPjxzcGFuPnt7dHNnc3BzSW5mb3MuZ2FzRGlzSW5mby52b2N9fSDlkKg8L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm9ubGluZV9ibHVlXCI+XHJcblx0XHRcdFx0XHQ8c3Bhbj7lup/msLTmsaHmn5PmupDmjpLmlL7ph4/vvIjlhajljoLlkIjorqHvvIk8L3NwYW4+PHNwYW4+PC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtYWluX2NvbnRlbnRcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJub19ib3R0b21cIj48c3Bhbj7ljJblrabpnIDmsKfph488L3NwYW4+PHNwYW4+e3t0c2dzcHNJbmZvcy53YXRlckRpc0luZm8uY29kfX0g5ZCoPC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm5vX2JvdHRvbVwiPjxzcGFuPuawqOawrjwvc3Bhbj48c3Bhbj57e3RzZ3Nwc0luZm9zLndhdGVyRGlzSW5mby5uaDNufX0g5ZCoPC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIm5vX2JvdHRvbVwiPjxzcGFuPuaAu+ejtzwvc3Bhbj48c3Bhbj57e3RzZ3Nwc0luZm9zLndhdGVyRGlzSW5mby50cH19IOWQqDwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJub19ib3R0b21cIj48c3Bhbj7mgLvmsK48L3NwYW4+PHNwYW4+e3t0c2dzcHNJbmZvcy53YXRlckRpc0luZm8udG59fSDlkKg8L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNvbXBhbnktaW5mb1wiIHYtaWY9XCJpc1Nob3cucmFkaWF0aW9uSW5mb1wiPlxyXG5cdFx0XHRcdDwhLS1yYWRpYXRpb25JbmZvICAtLT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiY29tcGFueV90aXRsZVwiPlxyXG5cdFx0XHRcdFx0PHNwYW4+6L6Q5bCE5a6J5YWoPC9zcGFuPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJkZXRhaWxfdGl0bGVcIiBAY2xpY2s9XCJzYWZlSW5mbyhyYWRpYXRpb25JbmZvLmZzYXFHeXF5SWQpXCI+XHJcblx0XHRcdFx0XHRcdDxzcGFuIHN0eWxlPVwibWFyZ2luLXJpZ2h0OiA4cHg7XCI+5pyJ5pWI5pyf6ZmQ77yae3tyYWRpYXRpb25JbmZvLmJlZ2luRGF0ZX19fnt7cmFkaWF0aW9uSW5mby5lbmREYXRlfX08L3NwYW4+IOivpuaDhVxyXG5cdFx0XHRcdFx0XHQ+PC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJvbmxpbmVfYmx1ZVwiPlxyXG5cdFx0XHRcdFx0PHNwYW4+6L6Q5bCE5a6J5YWo6K645Y+v6K+B57yW5Y+3PC9zcGFuPjxzcGFuXHJcblx0XHRcdFx0XHRcdHN0eWxlPVwiZm9udC1zaXplOiAxNHB4O2NvbG9yOiByZ2JhKDY4LCAxMjMsIDI1MiwgMSk7XCI+e3tyYWRpYXRpb25JbmZvLmxpY2Vuc2VOb319PC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJyYWRfdGl0bGVcIj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiYWN0aXZlXCI+5pS+5bCE5rqQ5rS75Yqo56eN57G7PC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJyYWRfY29udGVudFwiPlxyXG5cdFx0XHRcdFx0PGRpdj48c3Bhbj7ihaDnsbvmupA8L3NwYW4+PHNwYW4+e3tyYWRpYXRpb25JbmZvLnR5cGUxfX0g6aKXPC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdj48c3Bhbj7ihaHnsbvmupA8L3NwYW4+PHNwYW4+e3tyYWRpYXRpb25JbmZvLnR5cGUyfX0g6aKXPC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdj48c3Bhbj7ihaLnsbvmupA8L3NwYW4+PHNwYW4+e3tyYWRpYXRpb25JbmZvLnR5cGUzfX0g6aKXPC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdj48c3Bhbj7ihaPnsbvmupA8L3NwYW4+PHNwYW4+e3tyYWRpYXRpb25JbmZvLnR5cGU0fX0g6aKXPC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdj48c3Bhbj7ihaTnsbvmupA8L3NwYW4+PHNwYW4+e3tyYWRpYXRpb25JbmZvLnR5cGU1fX0g6aKXPC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJyYWRfdGl0bGVcIj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiYWN0aXZlXCI+5bCE57q/6KOF572u5rS75Yqo56eN57G7PC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJyYWRfY29udGVudFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBzdHlsZT1cIndpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO3RleHQtYWxpZ246IGxlZnQ7cGFkZGluZy1sZWZ0OiAyMHB4O1wiPlxyXG5cdFx0XHRcdFx0XHQ8c3Bhbj7ihaDnsbvmupA8L3NwYW4+PHNwYW4+e3tyYWRpYXRpb25JbmZvLnp6VHlwZTJ9fSDpopc8L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgc3R5bGU9XCJ3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTt0ZXh0LWFsaWduOiBsZWZ0O3BhZGRpbmctbGVmdDogMjBweDtcIj5cclxuXHRcdFx0XHRcdFx0PHNwYW4+4oWh57G75rqQPC9zcGFuPjxzcGFuPnt7cmFkaWF0aW9uSW5mby56elR5cGUzfX0g6aKXPC9zcGFuPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvZGl2PlxyXG5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb21wYW55LWluZm9cIiB2LWlmPVwiaXNTaG93LnNvbGlkV2FzdGVJbmZvc1wiIDpjbGFzcz1cInNob3dNb3JlMyYmc29saWRXYXN0ZUluZm9zLmxlbmd0aD4yPydtb3JlaGVpZ2h0JzonJ1wiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb21wYW55X3RpdGxlXCI+PHNwYW4+5Y2x5bqf44CB5Zu65bqf5L+h5oGvPC9zcGFuPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ0aXRsZV90aXBzIGJyb3duX3RpcHNcIj57e3NvbGlkV2FzdGVJbmZvcy5sZW5ndGh9feenjTwvc3Bhbj5cclxuXHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwiZGV0YWlsX3RpdGxlXCIgQGNsaWNrPVwid2FzdGVJbmZvXCI+6K+m5oOFID48L3NwYW4+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PHRlbXBsYXRlIHYtZm9yPVwiKGl0ZW1nZixpbmRleCkgaW4gc29saWRXYXN0ZUluZm9zXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwib25saW5lX3llbGxvd1wiPlxyXG5cdFx0XHRcdFx0XHQ8c3Bhbj57e2luZGV4KzF9fS57e2l0ZW1nZi53YXN0ZU5hbWV9fTwvc3Bhbj48c3Bhbj48L3NwYW4+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJtYWluX2NvbnRlbnRcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRoaXJkX3dpZHRoIG5vX2JvdHRvbVwiPjxzcGFuPuS6p+eUn+mHjzwvc3Bhbj48c3Bhbj57e2l0ZW1nZi5wcm9kdWN0fX0g5ZCoPC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwidGhpcmRfd2lkdGggbm9fYm90dG9tXCI+PHNwYW4+6Ieq6KGM5Yip55So6YePPC9zcGFuPjxzcGFuPnt7aXRlbWdmLnVzZX19IOWQqDwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInRoaXJkX3dpZHRoIG5vX2JvdHRvbVwiPjxzcGFuPuaAu+iHquihjOWkhOe9rumHjzwvc3Bhbj48c3Bhbj57e2l0ZW1nZi5tYW5hZ2V9fSDlkKg8L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJidWxpZF9tYWluX2hyXCI+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWFpbl9jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoIG5vX2JvdHRvbVwiPjxzcGFuPuWnlOaJmOWIqeeUqOmHjzwvc3Bhbj48c3Bhbj57e2l0ZW1nZi53dFVzZX19IOWQqDwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImhhbGZfd2lkdGggbm9fYm90dG9tXCI+PHNwYW4+5aeU5omY5aSE572u6YePPC9zcGFuPjxzcGFuPnt7aXRlbWdmLnd0TWFuYWdlfX3lkKg8L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJidWxpZF9tYWluX2hyXCI+PC9kaXY+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWFpbl9jb250ZW50XCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJoYWxmX3dpZHRoIG5vX2JvdHRvbVwiPjxzcGFuPuS4iuW5tOW6puacq+acrOWNleS9jeWunumZhei0ruWtmOmHjzwvc3Bhbj48c3Bhbj57e2l0ZW1nZi5zdG9yYWdlTGFzdH19IOWQqDwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImhhbGZfd2lkdGggbm9fYm90dG9tXCI+PHNwYW4+5pys5bm05pyr5pys5Y2V5L2N5a6e6ZmF6LSu5a2Y6YePPC9zcGFuPjxzcGFuPnt7aXRlbWdmLnN0b3JhZ2V9fSDlkKg8L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L3RlbXBsYXRlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PGRpdiAgdi1pZj1cImlzU2hvdy5zb2xpZFdhc3RlSW5mb3MmJnNvbGlkV2FzdGVJbmZvcy5sZW5ndGg+MlwiIGNsYXNzPVwiY29tcGFueS1pbmZvXCIgc3R5bGU9XCJtYXJnaW46MHB4IDEwcHggNnB4O3RleHQtYWxpZ246IGNlbnRlcjtcIiBAY2xpY2s9XCJnZXRNb3JlMygpXCI+XHJcblx0XHRcdCAgICA8c3BhbiBjbGFzcz1cIm1vcmVcIj57e3Nob3dNb3JlMz8n5p+l55yL5pu05aSaJzon5pS26LW3J319PC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb21wYW55LWluZm9cIiB2LWlmPVwiaXNTaG93LnlkemZJbmZvc1wiIDpjbGFzcz1cInNob3dNb3JlNCYmeWR6ZkluZm9zLmxlbmd0aD4zPydtb3JlaGVpZ2h0JzonJ1wiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb21wYW55X3RpdGxlXCI+PHNwYW4+5omn5rOV5qOA5p+lPC9zcGFuPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ0aXRsZV90aXBzIGJyb3duX3RpcHNcIj57e3lkemZJbmZvcy5sZW5ndGh9feS4queOsOWcuuaJp+azleS/oeaBrzwvc3Bhbj5cclxuXHRcdFx0XHRcdDwhLS0gPHNwYW4gY2xhc3M9XCJkZXRhaWxfdGl0bGVcIiBAY2xpY2s9XCJsYXdJbmZvXCI+6K+m5oOFID48L3NwYW4+IC0tPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtYWluX2NvbnRlbnRcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJhZG1pbl9pbmZvXCIgdi1mb3I9XCIoaXRlbXpmLHpmaSkgaW4geWR6ZkluZm9zXCIgQGNsaWNrPVwibGF3SW5mbyhpdGVtemYpXCI+XHJcblx0XHRcdFx0XHRcdDxkaXY+PHNwYW4gY2xhc3M9XCJub3JtYWxfZm9udFwiPnt7aXRlbXpmLmNhc2VOYW1lfHwn546w5Zy65omn5rOV5qGI5Lu2JysoemZpKzEpfX08L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJncmV5X2ZvbnRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8c3BhbiA6Y2xhc3M9XCJpdGVtemYuc2Z3Zj8nZm9udG9yZyc6JydcIj57e2l0ZW16Zi5tc2d9fTwvc3Bhbj5cclxuXHRcdFx0XHRcdFx0XHQ8c3Bhbj57e2l0ZW16Zi50aW1lfX08L3NwYW4+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYnVsaWRfaHJcIiB2LWlmPVwiemZpIT15ZHpmSW5mb3MubGVuZ3RoLTFcIj48L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PCEtLSA8ZGl2IGNsYXNzPVwiYWRtaW5faW5mb1wiIEBjbGljaz1cImxhd0luZm9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj48c3BhbiBjbGFzcz1cIm5vcm1hbF9mb250XCI+546w5Zy65omn5rOV5qGI5Lu2MTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImdyZXlfZm9udFwiPjxzcGFuIGNsYXNzPVwiZm9udG9yZ1wiPui/neWPjeWNsemZqeW6n+eJqeeuoeeQhumYsuayu+acieWFs+inhOWumjwvc3Bhbj48c3Bhbj4yMDIzLTA5LTEyIDEwOjAwOjAwPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAtLT5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb21wYW55LWluZm9cIiB2LWlmPVwiaXNTaG93LnlkemZJbmZvcyYmeWR6ZkluZm9zLmxlbmd0aD4zXCIgc3R5bGU9XCJtYXJnaW46MHB4IDEwcHggNnB4O3RleHQtYWxpZ246IGNlbnRlcjtcIiBAY2xpY2s9XCJnZXRNb3JlNCgpXCI+XHJcblx0XHRcdCAgICA8c3BhbiBjbGFzcz1cIm1vcmVcIj57e3Nob3dNb3JlND8n5p+l55yL5pu05aSaJzon5pS26LW3J319PC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb21wYW55LWluZm9cIiB2LWlmPVwiaXNTaG93LmVudkNhc2VJbmZvc1wiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb21wYW55X3RpdGxlXCI+PHNwYW4+56qB5Y+R546v5aKD5LqL5Lu2PC9zcGFuPlxyXG5cdFx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ0aXRsZV90aXBzIGJyb3duX3RpcHNcIj57e2VudkNhc2VJbmZvcy5sZW5ndGh9feS7tjwvc3Bhbj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwibWFpbl9jb250ZW50XCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiYWRtaW5faW5mb1wiIHYtZm9yPVwiaXRlbSBpbiBlbnZDYXNlSW5mb3NcIj5cclxuXHRcdFx0XHRcdFx0PGRpdj48c3BhbiBjbGFzcz1cIm5vcm1hbF9mb250XCI+e3tpdGVtLmNhc2VOYW1lfX08L3NwYW4+PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJncmV5X2ZvbnRcIj48c3Bhbj57e2l0ZW0ubXNnfX08L3NwYW4+PHNwYW4+e3tpdGVtLnRpbWV9fTwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjb21wYW55LWluZm9cIiB2LWlmPVwiaXNTaG93LmxpY2Vuc2VJbXBsUmVwb3J0SW5mb1wiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb21wYW55X3RpdGxlXCI+PHNwYW4+5o6S5rGh6K645Y+v6K+B5omn6KGM5oql5ZGKPC9zcGFuPlxyXG5cdFx0XHRcdDwhLS0gPHNwYW4gY2xhc3M9XCJkZXRhaWxfdGl0bGVcIiBAY2xpY2s9XCJwb2xsdXRpb25SZXBvcnRcIj7or6bmg4UgPjwvc3Bhbj4gLS0+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cIm1haW5fY29udGVudFwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cIndob2xlX3dpZHRoXCI+PHNwYW4+5omn6KGM5oql5ZGK6KaB5rGCPC9zcGFuPjxzcGFuPnt7bGljZW5zZVJwdC5tc2d9fTwvc3Bhbj48L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ3aG9sZV93aWR0aFwiPjxzcGFuPuWFtuS7ljwvc3Bhbj48c3Bhbj57e2xpY2Vuc2VScHQub3RoZXJ8fCctJ319PC9zcGFuPjwvZGl2PlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblx0Ly8g5LqR5Y2X5byY56Wl5YyW5bel5pyJ6ZmQ5YWs5Y+4XHJcblx0aW1wb3J0IHFyYmFzZUluZm8gZnJvbSBcIi4vY29tcG9uZW50cy9xcmJhc2VJbmZvXCI7XHJcblx0aW1wb3J0IHJlZENvZGVJbmZvIGZyb20gXCIuL2NvbXBvbmVudHMvcmVkQ29kZUluZm9cIjtcclxuXHRpbXBvcnQgaGVhbHRoQ29uZGl0aW9uIGZyb20gXCIuL2NvbXBvbmVudHMvaGVhbHRoQ29uZGl0aW9uXCI7XHJcblx0aW1wb3J0IHtcclxuXHRcdHB3SW5mbywgZ2V0SGJtQ2hlY2tSZWNvcmRcclxuXHR9IGZyb20gXCJAL2FwaS9wb2xsdXRpb25fc291cmNlXCI7XHJcblx0aW1wb3J0IHtUb2FzdH0gZnJvbSBcInZhbnRcIjtcclxuXHRleHBvcnQgZGVmYXVsdCB7XHJcblx0XHRuYW1lOiBcImNvbXBhbnlEZXRhaWxcIixcclxuXHRcdGNvbXBvbmVudHM6IHtcclxuXHRcdFx0cXJiYXNlSW5mbyxcclxuXHRcdFx0cmVkQ29kZUluZm8sXHJcblx0XHRcdGhlYWx0aENvbmRpdGlvblxyXG5cdFx0fSxcclxuXHRcdGRhdGEoKSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0ZHdpZDogXCJcIixcclxuXHRcdFx0XHR3cnlibSA6IFwiXCIsXHJcblx0XHRcdFx0aXNTaG93OiB7fSxcclxuXHRcdFx0XHRlbnZDb2RlSW5mbzoge30sXHJcblx0XHRcdFx0ZW50SW5mbzoge30sXHJcblx0XHRcdFx0bGljZW5zZToge30sXHJcblx0XHRcdFx0Y29uc0luZm9zOiB7fSwgLy/lu7rorr7pobnnm65cclxuXHRcdFx0XHRtb25pdG9ySW5mb3M6IHt9LFxyXG5cdFx0XHRcdHN0YW5kTnVtOjAsXHJcblx0XHRcdFx0dG90YWxOdW06MCxcclxuXHRcdFx0XHRqZHN0YW5kTnVtOjAsXHJcblx0XHRcdFx0amR0b3RhbE51bTowLFxyXG5cdFx0XHRcdHN1cGVNb25pdG9ySW5mb3M6IHt9LCAvL+ebkeedo+aAp+ebkea1i1xyXG5cdFx0XHRcdHB1bmlzaEluZm9zOiB7fSxcclxuXHRcdFx0XHR0c2dzcHNJbmZvczoge30sIC8v5LqM5qyh5rGh5pmuXHJcblx0XHRcdFx0cmFkaWF0aW9uSW5mbzoge30sIC8v6L6Q5bCE5a6J5YWoXHJcblx0XHRcdFx0c29saWRXYXN0ZUluZm9zOiB7fSwgLy/lm7rlup/vvIzljbHlup/kv6Hmga9cclxuXHRcdFx0XHR5ZHpmSW5mb3M6IHt9LCAvL+aJp+azleajgOafpVxyXG5cdFx0XHRcdGVudkNhc2VJbmZvczoge30sIC8v56qB5Y+R546v5aKD5LqL5Lu2XHJcblx0XHRcdFx0bGljZW5zZVJwdDoge30sIC8v5o6S5rGh6K645Y+v6K+B5omn6KGM5oql5ZGKXHJcblx0XHRcdFx0dHlwZTogJ3JlZCcsXHJcblx0XHRcdFx0c2hvd01vcmU6dHJ1ZSxcclxuXHRcdFx0XHRzaG93TW9yZTE6dHJ1ZSxcclxuXHRcdFx0XHRzaG93TW9yZTI6dHJ1ZSxcclxuXHRcdFx0XHRzaG93TW9yZTM6dHJ1ZSxcclxuXHRcdFx0XHRzaG93TW9yZTQ6dHJ1ZSxcclxuXHRcdFx0XHRiZWhhdmlvcmxhYmVsczonJyxcclxuXHRcdFx0XHR0YXNrSW5mbzogW10sLy/nlLPor4nmlbTmlLnkv6Hmga9cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHRcdHdhdGNoOiB7XHJcblx0XHRcdCRyb3V0ZToge1xyXG5cdFx0XHRcdGhhbmRsZXI6IGZ1bmN0aW9uKHJvdXRlKSB7XHJcblx0XHRcdFx0XHR0aGlzLnR5cGUgPSByb3V0ZS5xdWVyeS50eXBlO1xyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0aW1tZWRpYXRlOiB0cnVlXHJcblx0XHRcdH0sXHJcblx0XHR9LFxyXG5cdFx0bW91bnRlZCgpIHtcclxuXHRcdFx0dGhpcy5kd2lkID0gdGhpcy4kcm91dGUucXVlcnkuaWQ7XHJcblx0XHRcdHRoaXMud3J5Ym0gPSB0aGlzLiRyb3V0ZS5xdWVyeS53cnlibXx8Jyc7XHJcblx0XHRcdHRoaXMubG9hZERhdGEoKTtcclxuXHRcdH0sXHJcblx0XHRmaWx0ZXJzOiB7XHJcblx0XHRcdGdldFN0YXR1cyhrZXkpIHtcclxuXHRcdFx0XHRsZXQgc3RhdHVzID0gXCJcIjtcclxuXHRcdFx0XHRpZiAoa2V5ID09ICcwMScpIHtcclxuXHRcdFx0XHRcdHN0YXR1cyA9IFwi5bel5Lia5rqQXCI7XHJcblx0XHRcdFx0fSBlbHNlIGlmIChrZXkgPT0gJzAyJykge1xyXG5cdFx0XHRcdFx0c3RhdHVzID0gXCLlhpzkuJrmupBcIjtcclxuXHRcdFx0XHR9IGVsc2UgaWYgKGtleSA9PSAnMDInKSB7XHJcblx0XHRcdFx0XHRzdGF0dXMgPSBcIueUn+a0u+a6kFwiO1xyXG5cdFx0XHRcdH0gZWxzZSBpZiAoa2V5ID09ICcwMicpIHtcclxuXHRcdFx0XHRcdHN0YXR1cyA9IFwi6ZuG5Lit5byP5rGh5p+T5rK755CG6K6+5pa9XCI7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBzdGF0dXM7XHJcblx0XHRcdH0sXHJcblx0XHRcdGZpbHRlckNvbG9yKGtleSl7XHJcblx0XHRcdFx0bGV0IHN0YXR1cyA9IFwiXCI7XHJcblx0XHRcdFx0aWYoa2V5ID09ICflgaXlurcnKXtcclxuXHRcdFx0XHRcdHN0YXR1cyA9ICdncmVlbmZvbnQnXHJcblx0XHRcdFx0fWVsc2UgaWYoa2V5ID09ICfpooToraYnKXtcclxuXHRcdFx0XHRcdHN0YXR1cyA9ICdncnllbGxvd2ZvbnRlZW5mb250J1xyXG5cdFx0XHRcdH1lbHNlIGlmKGtleSA9PSAn5byC5bi4Jyl7XHJcblx0XHRcdFx0XHRzdGF0dXMgPSAncmVkZm9udCdcclxuXHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdHN0YXR1cyA9ICdibGFja2ZvbnQnXHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHJldHVybiBzdGF0dXM7XHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblx0XHRtZXRob2RzOiB7XHJcblx0XHRcdGdldE1vcmUoKXtcclxuXHRcdFx0XHR0aGlzLnNob3dNb3JlID0gIXRoaXMuc2hvd01vcmU7XHJcblx0XHRcdH0sXHJcblx0XHRcdGdldE1vcmUxKCl7XHJcblx0XHRcdFx0dGhpcy5zaG93TW9yZTEgPSAhdGhpcy5zaG93TW9yZTE7XHJcblx0XHRcdH0sXHJcblx0XHRcdGdldE1vcmUyKCl7XHJcblx0XHRcdFx0dGhpcy5zaG93TW9yZTIgPSAhdGhpcy5zaG93TW9yZTI7XHJcblx0XHRcdH0sXHJcblx0XHRcdGdldE1vcmUzKCl7XHJcblx0XHRcdFx0dGhpcy5zaG93TW9yZTMgPSAhdGhpcy5zaG93TW9yZTM7XHJcblx0XHRcdH0sXHJcblx0XHRcdGdldE1vcmU0KCl7XHJcblx0XHRcdFx0dGhpcy5zaG93TW9yZTQgPSAhdGhpcy5zaG93TW9yZTQ7XHJcblx0XHRcdH0sXHJcblx0XHRcdGxvYWREYXRhKCkge1xyXG5cdFx0XHRcdGxldCBpbmZvID0ge1xyXG5cdFx0XHRcdFx0aWQ6IHRoaXMuZHdpZFxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRwd0luZm8oaW5mbykudGhlbihyZXMgPT4ge1xyXG5cdFx0XHRcdFx0aWYgKHJlcy5jb2RlID09IDIwMCkge1xyXG5cdFx0XHRcdFx0XHRsZXQgcmRhdGEgPSByZXMuZGF0YTtcclxuXHRcdFx0XHRcdFx0dGhpcy5pc1Nob3cgPSByZGF0YS5pbmRleDtcclxuXHRcdFx0XHRcdFx0dGhpcy5lbnZDb2RlSW5mbyA9IHJkYXRhLmVudkNvZGVJbmZvO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmVudEluZm8gPSByZGF0YS5lbnRJbmZvO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmJlaGF2aW9ybGFiZWxzID0gdGhpcy5lbnRJbmZvLmJlaGF2aW9yTGFiZWxzWzBdO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmxpY2Vuc2UgPSByZGF0YS5saWNlbnNlO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmNvbnNJbmZvcyA9IHJkYXRhLmNvbnNJbmZvcztcclxuXHRcdFx0XHRcdFx0dGhpcy5tb25pdG9ySW5mb3MgPSByZGF0YS5tb25pdG9ySW5mb3M7XHJcblx0XHRcdFx0XHRcdHRoaXMubW9uaXRvckluZm9zLmZvckVhY2goaXRlbT0+e1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RhbmROdW0gKz0gaXRlbS5zdGFuZGFyZE51bTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnRvdGFsTnVtICs9IGl0ZW0udG90YWw7XHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdHRoaXMuc3VwZU1vbml0b3JJbmZvcyA9IHJkYXRhLnN1cGVNb25pdG9ySW5mb3M7XHJcblx0XHRcdFx0XHRcdHRoaXMuc3VwZU1vbml0b3JJbmZvcy5mb3JFYWNoKGl0ZW09PntcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmpkc3RhbmROdW0gKz0gaXRlbS5zdGFuZGFyZE51bTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLmpkdG90YWxOdW0gKz0gaXRlbS50b3RhbDtcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0dGhpcy5wdW5pc2hJbmZvcyA9IHJkYXRhLnB1bmlzaEluZm9zO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnRzZ3Nwc0luZm9zID0gcmRhdGEudHNnc3BzSW5mb3M7XHJcblx0XHRcdFx0XHRcdHRoaXMucmFkaWF0aW9uSW5mbyA9IHJkYXRhLnJhZGlhdGlvbkluZm87XHJcblx0XHRcdFx0XHRcdHRoaXMuc29saWRXYXN0ZUluZm9zID0gcmRhdGEuc29saWRXYXN0ZUluZm9zO1xyXG5cdFx0XHRcdFx0XHR0aGlzLnlkemZJbmZvcyA9IHJkYXRhLnlkemZJbmZvcztcclxuXHJcblx0XHRcdFx0XHRcdHRoaXMuZW52Q2FzZUluZm9zID0gcmRhdGEuZW52Q2FzZUluZm9zO1xyXG5cdFx0XHRcdFx0XHR0aGlzLmxpY2Vuc2VScHQgPSByZGF0YS5saWNlbnNlSW1wbFJlcG9ydEluZm87XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0Z2V0SGJtQ2hlY2tSZWNvcmQodGhpcy5kd2lkKS50aGVuKHJlcyA9PntcclxuXHRcdFx0XHRcdHRoaXMudGFza0luZm8gPSByZXMuZGF0YTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlcy5kYXRhLmxlbmd0aClcclxuXHRcdFx0XHRcdGlmKHJlcy5kYXRhLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5pc1Nob3cudGFza0luZm8gPSB0cnVlO1xyXG5cdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5pc1Nob3cudGFza0luZm8gPSBmYWxzZTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0b01hcCgpIHtcclxuXHRcdFx0ICAgIGlmICh0aGlzLmVudEluZm8ubG9uZ2l0dWRlKSB7XHJcblx0XHRcdCAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG5cdFx0XHQgICAgICAgICAgICAvLyBwYXRoOiAnL0dlb01hcCcsXHJcblx0XHRcdFx0XHRcdFx0XHRcdG5hbWU6IFwibG9jYXRpb25NYXBcIixcclxuXHRcdFx0ICAgICAgICAgICAgcXVlcnk6IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGlkOnRoaXMuZHdpZCxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHNpdGVOYW1lOnRoaXMuZW50SW5mby5lbnROYW1lLFxyXG5cdFx0XHQgICAgICAgICAgICAgICAgSkQ6IHRoaXMuZW50SW5mby5sb25naXR1ZGUsXHJcblx0XHRcdCAgICAgICAgICAgICAgICBXRDogdGhpcy5lbnRJbmZvLmxhdGl0dWRlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZXM6J2Jhc2ljJ1xyXG5cdFx0XHQgICAgICAgICAgICB9XHJcblx0XHRcdCAgICAgICAgfSlcclxuXHRcdFx0ICAgIH0gZWxzZSB7XHJcblx0XHRcdCAgICAgICAgVG9hc3QoJ+acquiOt+WPluWIsOWumuS9jScpXHJcblx0XHRcdCAgICB9XHJcblx0XHRcdH0sXHJcblx0XHRcdC8v5LyB5Lia5Z+65pys5L+h5oGvXHJcblx0XHRcdGJhc2VJbmZvKCkge1xyXG5cdFx0XHRcdHRoaXMuJHJvdXRlci5wdXNoKHtcclxuXHRcdFx0XHRcdG5hbWU6IFwiY29tcGFueUJhc2VJbmZvXCIsXHJcblx0XHRcdFx0XHRxdWVyeToge1xyXG5cdFx0XHRcdFx0XHRpZDogdGhpcy5kd2lkLFxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+eUs+ivieaVtOaUueS/oeaBr1xyXG5cdFx0XHRzaG93VGFza0luZm8oaXRlbSl7XHJcblx0XHRcdFx0dGhpcy4kcm91dGVyLnB1c2goe1xyXG5cdFx0XHRcdFx0bmFtZTogJ0NsdWVEZXRhaWwnLFxyXG5cdFx0XHRcdFx0cGFyYW1zOiB7XHJcblx0XHRcdFx0XHRcdGZsYWc6J+mXreeOr+euoeeQhuaVtOaUueS/oeaBr+ivpuaDhScsXHJcblx0XHRcdFx0XHRcdGNsdWVJZDppdGVtLklEXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8v6K645Y+v6K+B6K+m5oOFXHJcblx0XHRcdGxpY2VuY2VJbmZvKGl0ZW0pIHtcclxuXHRcdFx0XHR0aGlzLiRyb3V0ZXIucHVzaCh7XHJcblx0XHRcdFx0XHRuYW1lOiBcImxpY2VuY2VEZXRhaWxcIixcclxuXHRcdFx0XHRcdHF1ZXJ5OiB7XHJcblx0XHRcdFx0XHRcdC8vIGlkOiBpdGVtLmxpY2Vuc2VObyxcclxuXHRcdFx0XHRcdFx0aWQ6IHRoaXMuZHdpZCxcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/lu7rorr7pobnnm65cclxuXHRcdFx0YnVpbGRJbmZvKHJvdykge1xyXG5cdFx0XHRcdC8vIGlmKGZsYWcgPT0gJ2ZpbGluZ3MnKXtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKHJvdy50eXBlKVxyXG5cdFx0XHRcdGlmIChyb3cudHlwZSA9PSAn5aSH5qGIJykge1xyXG5cdFx0XHRcdFx0dGhpcy4kcm91dGVyLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRuYW1lOiBcImJ1aWxkRmlsaW5nc0RldGFpbFwiLFxyXG5cdFx0XHRcdFx0XHRxdWVyeToge1xyXG5cdFx0XHRcdFx0XHRcdC8vIGlkOiB0aGlzLmR3aWQsXHJcblx0XHRcdFx0XHRcdFx0aWQ6IHJvdy5pZCxcclxuXHRcdFx0XHRcdFx0XHR0eXBlOnJvdy50eXBlXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1lbHNlIGlmIChyb3cudHlwZSA9PSAn6Ieq6aqM5pS2Jykge1xyXG5cdFx0XHRcdFx0dGhpcy4kcm91dGVyLnB1c2goe1xyXG5cdFx0XHRcdFx0XHRuYW1lOiBcImJ1aWxkU2VsZmFjY2VwdHRJbmZvXCIsXHJcblx0XHRcdFx0XHRcdHF1ZXJ5OiB7XHJcblx0XHRcdFx0XHRcdFx0aWQ6IHJvdy5pZCxcclxuXHRcdFx0XHRcdFx0XHR0eXBlOnJvdy50eXBlXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR0aGlzLiRyb3V0ZXIucHVzaCh7XHJcblx0XHRcdFx0XHRcdG5hbWU6IFwiYnVpbGRQcm9qZWN0SW5mb1wiLFxyXG5cdFx0XHRcdFx0XHRxdWVyeToge1xyXG5cdFx0XHRcdFx0XHRcdC8vIGlkOiB0aGlzLmR3aWQsXHJcblx0XHRcdFx0XHRcdFx0aWQ6IHJvdy5pZCxcclxuXHRcdFx0XHRcdFx0XHR0eXBlOnJvdy50eXBlXHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/lnKjnur/nm5HmjqdcclxuXHRcdFx0bW9uaXRvckluZm8oKSB7XHJcblx0XHRcdFx0dGhpcy4kcm91dGVyLnB1c2goe1xyXG5cdFx0XHRcdFx0bmFtZTogXCJwb3J0SW5mb0RldGFpbFwiLFxyXG5cdFx0XHRcdFx0cXVlcnk6IHtcclxuXHRcdFx0XHRcdFx0aWQ6IHRoaXMuZHdpZCxcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHQvLyB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcblx0XHRcdFx0Ly8gXHRwYXRoOiBcIi9Nb25pdG9yTGltaXREZXNcIixcclxuXHRcdFx0XHQvLyBcdHF1ZXJ5OiB7XHJcblx0XHRcdFx0Ly8gXHRcdGlkOiB0aGlzLmR3aWQsXHJcblx0XHRcdFx0Ly8gXHR9XHJcblx0XHRcdFx0Ly8gfSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8v5bqf5rCU5o6S5Y+jXHJcblx0XHRcdHBvcnRJbmZvKGl0ZW0sdHlwZSkge1xyXG5cdFx0XHRcdHRoaXMuJHJvdXRlci5wdXNoKHtcclxuXHRcdFx0XHRcdG5hbWU6IFwicG9ydEluZm9EZXRhaWxcIixcclxuXHRcdFx0XHRcdHF1ZXJ5OiB7XHJcblx0XHRcdFx0XHRcdC8vIGlkOiB0aGlzLmR3aWQsXHJcblx0XHRcdFx0XHRcdGRldmljZUlkOiBpdGVtLmRldmljZUlkLFxyXG5cdFx0XHRcdFx0XHRwc0NvZGU6aXRlbS5wc0NvZGUsXHJcblx0XHRcdFx0XHRcdG5hbWU6aXRlbS5kZXZpY2VOYW1lLFxyXG5cdFx0XHRcdFx0XHR0eXBlOnR5cGVcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/ljbHlup/jgIHlm7rlup/kv6Hmga9cclxuXHRcdFx0d2FzdGVJbmZvKCkge1xyXG5cdFx0XHRcdHRoaXMuJHJvdXRlci5wdXNoKHtcclxuXHRcdFx0XHRcdG5hbWU6IFwid2FzdGVEZXRhaWxcIixcclxuXHRcdFx0XHRcdHF1ZXJ5OiB7XHJcblx0XHRcdFx0XHRcdGZyb206XCLmsaHmn5PmupBcIixcclxuXHRcdFx0XHRcdFx0aWQ6IHRoaXMuZHdpZCxcclxuXHRcdFx0XHRcdFx0bmFtZTp0aGlzLmVudkNvZGVJbmZvLmVudE5hbWVcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/ooYzmlL/lpITnvZpcclxuXHRcdFx0cGVuYWx0eUluZm8oaXRlbSkge1xyXG5cdFx0XHRcdHRoaXMuJHJvdXRlci5wdXNoKHtcclxuXHRcdFx0XHRcdG5hbWU6IFwicGVuYWx0eURldGFpbFwiLFxyXG5cdFx0XHRcdFx0cXVlcnk6IHtcclxuXHRcdFx0XHRcdFx0Ly8gaWQ6IHRoaXMuZHdpZCxcclxuXHRcdFx0XHRcdFx0aWQ6aXRlbS5pZCxcclxuXHRcdFx0XHRcdFx0dGl0bGU6XCLooYzmlL/lpITnvZror6bmg4VcIlxyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHR9LFxyXG5cdFx0XHQvL+aJp+azleajgOafpVxyXG5cdFx0XHRsYXdJbmZvKGl0ZW0pIHtcclxuXHRcdFx0XHR0aGlzLiRyb3V0ZXIucHVzaCh7XHJcblx0XHRcdFx0XHRuYW1lOiBcImxhd0NoZWNrRGV0YWlsXCIsXHJcblx0XHRcdFx0XHRxdWVyeToge1xyXG5cdFx0XHRcdFx0XHRpZDogaXRlbS5pZCxcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/ovpDlsITlronlhahcclxuXHRcdFx0c2FmZUluZm8oaWQpIHtcclxuXHRcdFx0XHR0aGlzLiRyb3V0ZXIucHVzaCh7XHJcblx0XHRcdFx0XHRuYW1lOiBcInNhZmVEZXRhaWxcIixcclxuXHRcdFx0XHRcdHF1ZXJ5OiB7XHJcblx0XHRcdFx0XHRcdHR5cGU6MCxcclxuXHRcdFx0XHRcdFx0aWQ6IHRoaXMuZHdpZCxcclxuXHRcdFx0XHRcdFx0Ly8gaWQ6IGlkLFxyXG5cdFx0XHRcdFx0XHR0aXRsZTpcIui+kOWwhOWuieWFqFwiXHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0sXHJcblx0XHRcdC8v56ys5LqM5qyh5rGh5p+T5pmu5p+lXHJcblx0XHRcdHR3b1BvbGx1dGlvbigpIHtcclxuXHRcdFx0XHQvLyB0aGlzLiRyb3V0ZXIucHVzaCh7cGF0aDogXCIvY29tcGxhaW50RGV0YWlsXCJ9KTtcclxuXHRcdFx0fSxcclxuXHRcdFx0Ly/mjpLmsaHorrjlj6/or4HmiafooYzmiqXlkYpcclxuXHRcdFx0cG9sbHV0aW9uUmVwb3J0KCkge1xyXG5cdFx0XHRcdC8vIHRoaXMuJHJvdXRlci5wdXNoKHtwYXRoOiBcIi9yZWdpc3RlRGV0YWlsXCJ9KTtcclxuXHRcdFx0fSxcclxuXHRcdH1cclxuXHR9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XHJcblx0LmNvbXBhbnlkZXRhaWwge1xyXG5cdFx0Lm1vcmVoZWlnaHR7XHJcblx0XHRcdG1heC1oZWlnaHQ6IDI3MHB4O1xyXG5cdFx0XHRvdmVyZmxvdzogaGlkZGVuO1xyXG5cdFx0fVxyXG5cdFx0LmdyZXlfZm9udCB7XHJcblx0XHRcdHNwYW4uZm9udG9yZyB7XHJcblx0XHRcdFx0Y29sb3I6IHJnYmEoMjU1LCA4NywgNTEsIDEpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHQuZ3JlZW5mb250e1xyXG5cdFx0XHQvLyBiYWNrZ3JvdW5kOiAjZWRmZmVkO1xyXG5cdFx0XHRjb2xvcjogIzA2YjgyZjtcclxuXHRcdH1cclxuXHRcdC55ZWxsb3dmb250e1xyXG5cdFx0XHQvLyBiYWNrZ3JvdW5kOiAjZmVmN2U1O1xyXG5cdFx0XHRjb2xvcjogI2ZmYTIwMDtcclxuXHRcdH1cclxuXHRcdC5yZWRmb250e1xyXG5cdFx0XHQvLyBiYWNrZ3JvdW5kOiByZ2JhKDI1NSw4Nyw1MSwuMSk7XHJcblx0XHRcdGNvbG9yOiAjZmY1NzMzO1xyXG5cdFx0fVxyXG5cdFx0LmJsYWNrZm9udHtcclxuXHRcdFx0Y29sb3I6ICM2MDYyNjY7XHJcblx0XHR9XHJcblxyXG5cdFx0LmNvbXBhbnktaW5mbyB7XHJcblx0XHRcdC5vbmxpbmVfeWVsbG93IHtcclxuXHRcdFx0XHRoZWlnaHQ6IGF1dG87XHJcblxyXG5cdFx0XHRcdD5zcGFuIHtcclxuXHRcdFx0XHRcdGxpbmUtaGVpZ2h0OiBub3JtYWw7XHJcblx0XHRcdFx0XHRwYWRkaW5nOiA0cHggMDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdC5vbmxpbmVfZGF0YV9pbmZve1xyXG5cdFx0XHQ+ZGl2e1xyXG5cdFx0XHRcdGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG5cdFx0XHRcdD5zcGFue1xyXG5cdFx0XHRcdFx0ZmxleDoxO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0Lm1haW5mbGV4e1xyXG5cdFx0XHRkaXNwbGF5OiBmbGV4O1xyXG5cdFx0XHRwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcblx0XHRcdC5tYWluX2ZfbHtcclxuXHRcdFx0XHQ+aW1ne1xyXG5cdFx0XHRcdCAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcblx0XHRcdFx0ICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG5cdFx0XHRcdCAgd2lkdGg6IDE0cHg7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdD5zcGFue1xyXG5cdFx0XHRcdCAgZm9udC1zaXplOiAxMnB4O1xyXG5cdFx0XHRcdCAgZm9udC13ZWlnaHQ6IDQwMDtcclxuXHRcdFx0XHQgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XHJcblx0XHRcdFx0ICBjb2xvcjogcmdiYSg2OCwgMTIzLCAyNTIsIDEpO1xyXG5cdFx0XHRcdCAgdGV4dC1hbGlnbjogbGVmdDtcclxuXHRcdFx0XHQgIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdC5tYWluX2ZfcntcclxuXHRcdFx0XHRmb250LXNpemU6IDEycHg7XHJcblx0XHRcdFx0Ly8gbWFyZ2luLWxlZnQ6IGF1dG87XHJcblx0XHRcdFx0d2lkdGg6IDEwMnB4O1xyXG5cdFx0XHRcdGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgc3R5bGU9XCJtYXJnaW4tdG9wOiAxMHB4O1wiPlxyXG4gICAgICAgIDxzcGFuIGNsYXNzPVwiY2VudGVyX2l0ZW1fdGl0bGVcIiB2LWlmPVwidG90YWwubGVuZ3RoPjBcIj7lgaXlurfnirblhrU8L3NwYW4+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNlbnRlcl9pdGVtX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRfaXRlbXNcIiB2LWZvcj1cIihpdGVtLGluZGV4KSBpbiB0b3RhbFwiIDpzdHlsZT1cIidiYWNrZ3JvdW5kLWNvbG9yOicrIHNyY0xpc3RbaW5kZXhdLmJhY2tncm91bmRcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cInNyY0xpc3RbaW5kZXhdLnNyY1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cIndpZHRoOiBjYWxjKDEwMCUgLSAxMHB4KTtsaW5lLWhlaWdodDogMzBweDtmb250LXNpemU6IDEycHg7bWFyZ2luLWxlZnQ6IC0xMHB4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6IGZsZXg7anVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO3BhZGRpbmc6MnB4IDhweDthbGlnbi1pdGVtczogY2VudGVyO2xpbmUtaGVpZ2h0OiBub3JtYWw7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwiZm9udC13ZWlnaHQ6IDYwMFwiPnt7IGl0ZW0ubmFtZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gIHYtaWY9XCJpdGVtLm5hbWUgPT09ICfmjpLmsaHorrjlj6/or4HmnInmlYjmnJ8nIHx8IGl0ZW0ubmFtZSA9PT0gJ+aOkuaxoeiuuOWPr+ivgemZkOacn+aVtOaUuScgfHwgaXRlbS5uYW1lID09PSAn5o6S5rGh6K645Y+v6K+B5ZKM5Zyo57q/55uR5o6n5o6S5pS+5oC76YeP5rGH5oC757uf6K6hJyB8fCBpdGVtLm5hbWUgPT09ICfovpDlsITlronlhajorrjlj6/or4HmnInmlYjmnJ8nXCIgY2xhc3M9XCJzdGF0ZVwiPnt7IGl0ZW0uZGF5IH19PC9zcGFuPlxyXG48IS0tICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJ0ZXh0LWRlY29yYXRpb24tbGluZTogdW5kZXJsaW5lO2NvbG9yOiByZ2JhKDg0LCAxMTcsIDI0OCwgMSk7Y3Vyc29yOiBwb2ludGVyO1wiPuafpeeci+ivpuaDhTwvc3Bhbj4tLT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47cGFkZGluZzoycHggOHB4O2FsaWduLWl0ZW1zOiBjZW50ZXI7bGluZS1oZWlnaHQ6IG5vcm1hbDtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJpdGVtLm5hbWUgPT09ICfmjpLmsaHorrjlj6/or4HmnInmlYjmnJ8nIHx8IGl0ZW0ubmFtZSA9PT0gJ+aOkuaxoeiuuOWPr+ivgemZkOacn+aVtOaUuSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgaXRlbS5uYW1lID09PSAn5o6S5rGh6K645Y+v6K+B5ZKM5Zyo57q/55uR5o6n5o6S5pS+5oC76YeP5rGH5oC757uf6K6hJyB8fCBpdGVtLm5hbWUgPT09ICfovpDlsITlronlhajorrjlj6/or4HmnInmlYjmnJ8nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJjb2xvcjogcmdiYSgyNDcsIDEyNywgNywgMSk7XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID7liLDmnJ/ml7bpl7TvvJp7eyBpdGVtLnRpbWUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZSBzdHlsZT1cImNvbG9yOnJnYmEoMjQ3LCAxMjcsIDcsIDEpO2ZvbnQtd2VpZ2h0OiA3MDA7XCI+e3sgaXRlbS5jb3VudCB9feS7tjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAgIGltcG9ydCB7cXVlc3Rpb25CeUNvbXBhbnlDb2RlfSBmcm9tIFwiQC9hcGkvcG9sbHV0aW9uX3NvdXJjZVwiO1xyXG5cclxuICAgIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgICAgICBuYW1lOiBcImhlYWx0aENvbmRpdGlvblwiLFxyXG4gICAgICAgIHByb3BzIDoge1xyXG4gICAgICAgICAgICBpZCA6IFN0cmluZ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZGF0YSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHRvdGFsOiBbXSxcclxuICAgICAgICAgICAgICAgIHNyY0xpc3Q6IFtcclxuICAgICAgICAgICAgICAgICAgICB7c3JjOiByZXF1aXJlKCdAL2Fzc2V0cy9wb2xsdXRlci9wdXJwbGUucG5nJyksYmFja2dyb3VuZDoncmdiYSgxMjgsIDc4LCAyNDUsIDAuMDUpJ30sXHJcbiAgICAgICAgICAgICAgICAgICAge3NyYzogcmVxdWlyZSgnQC9hc3NldHMvcG9sbHV0ZXIvYmx1ZS5wbmcnKSxiYWNrZ3JvdW5kOidyZ2JhKDQyLCAxMzAsIDIyOCwgMC4wNSknfSxcclxuICAgICAgICAgICAgICAgICAgICB7c3JjOiByZXF1aXJlKCdAL2Fzc2V0cy9wb2xsdXRlci9saWdodF9ncmVlbi5wbmcnKSxiYWNrZ3JvdW5kOidyZ2JhKDYsIDE5NCwgMTgxLCAwLjA1KSd9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtzcmM6IHJlcXVpcmUoJ0AvYXNzZXRzL3BvbGx1dGVyL29yYW5nZS5wbmcnKSxiYWNrZ3JvdW5kOidyZ2JhKDI1NSwgMTc1LCAwLCAwLjA1KSd9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtzcmM6IHJlcXVpcmUoJ0AvYXNzZXRzL3BvbGx1dGVyL3JlZC5wbmcnKSxiYWNrZ3JvdW5kOidyZ2JhKDIyOSwgMTA4LCAxMDgsIDAuMDUpJ30sXHJcbiAgICAgICAgICAgICAgICAgICAge3NyYzogcmVxdWlyZSgnQC9hc3NldHMvcG9sbHV0ZXIvZ3JlZW4ucG5nJyksYmFja2dyb3VuZDoncmdiYSg0MywgMjEwLCAxMTAsIDAuMDUpJ31cclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3YXRjaCA6IHtcclxuICAgICAgICAgICAgJ2lkJzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJbmZvRGF0YSgpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHMgOntcclxuICAgICAgICAgICAgLy/mn6Xor6LmiYDmnInkvIHkuJrnm7jlhbPor6bmg4VcclxuICAgICAgICAgICAgZ2V0SW5mb0RhdGEoKSB7XHJcbiAgICAgICAgICAgICAgICAvL+aAu+S9k+aDheWGtVxyXG4gICAgICAgICAgICAgICAgcXVlc3Rpb25CeUNvbXBhbnlDb2RlKHRoaXMuaWQpLnRoZW4ocmVzID0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG90YWwgPSByZXMuZGF0YXx8W107XHJcbiAgICAgICAgICAgICAgICB9KS5maW5hbGx5KGEgPT57fSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4gICAgLmNlbnRlcl9pdGVtX3RpdGxlIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAxKTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTVweDtcclxuICAgIH1cclxuICAgIC5jZW50ZXJfaXRlbV9jb250ZW50IHtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAuY29udGVudF9pdGVtcyB7XHJcbiAgICAgICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAwcHggMTBweCAxMHB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBpbWcge1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTIycHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnN0YXRlIHtcclxuICAgICAgICAgICAgICAgIC8qaGVpZ2h0OiAyMnB4OyovXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyMzgsIDIyMik7XHJcbiAgICAgICAgICAgICAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDEwcHggMCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDE0MSwgMjYpO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCA2cHg7XHJcbiAgICAgICAgICAgICAgICAvKmxpbmUtaGVpZ2h0OiAyMnB4OyovXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwicmVkX2NvZGVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2VudGVyX3RpdGxlXCI+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj7nuqLnoIHotYvnoIHljp/lm6A8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm51bVwiPnt7IHJlZENvZGVJbmZvcy5sZW5ndGggfX0g5Lu2PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZWFsdGhfbm90aWNlXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMvcG9sbHV0ZXIvbm90aWNlLnBuZ1wiLz5cclxuICAgICAgICAgICAgPHNwYW4+6Iul5qGI5Lu26L2s5Li65omn5rOV57q/57Si5YiZ5o+Q56S65qGI5Lu25a6h5om55rWB56iL5oOF5Ya144CCPC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJpdGVtIGluIHJlZENvZGVJbmZvc1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiAgY2xhc3M9XCJjZW50ZXJfbGVmdF90b3BfZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvcF9pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4OyBhbGlnbi1pdGVtczogY2VudGVyO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cIml0ZW0ucXJfY29kZV9jb2xvciA9PT0gJ+e7v+iJsicgPyByZXF1aXJlKCdAL2Fzc2V0cy9wb2xsdXRlci9ncmVlbl9jb2RlLnBuZycpIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5xcl9jb2RlX2NvbG9yID09PSAn6buE6ImyJyA/IHJlcXVpcmUoJ0AvYXNzZXRzL3BvbGx1dGVyL3llbGxvd19jb2RlLnBuZycpIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5xcl9jb2RlX2NvbG9yID09PSAn57qi6ImyJyA/IHJlcXVpcmUoJ0AvYXNzZXRzL3BvbGx1dGVyL3JlZF9jb2RlLnBuZycpIDogJydcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiA1cHg7Zm9udC13ZWlnaHQ6IDYwMDtmb250LXNpemU6IDE0cHg7XCI+e3sgaXRlbS5jYXVzZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZWRfc2l0dWF0aW9uIGdyZWVuXCIgQGNsaWNrPVwic2hvd1BvcHVwKGl0ZW0pXCIgdi1pZj1cIml0ZW0uY2x1ZV9pZCAhPT0gJycgJiYgaXRlbS5jbHVlX2lkICE9PSAnbnVsbCcgJiYgaXRlbS5jbHVlX2lkICE9PSBudWxsICYmIGl0ZW0uY2x1ZV9pZCAhPT0gJ3VuZGVmaW5lZCcgJiYgaXRlbS5jbHVlX2lkICE9PSB1bmRlZmluZWRcIj7lt7LovazkuLrmiafms5Xnur/ntKI8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlZF9zaXR1YXRpb24geWVsbG93XCIgdi1lbHNlPuacqui9rOS4uuaJp+azlee6v+e0ojwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjttYXJnaW4tdG9wOiA1cHg7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBzdHlsZT1cImNvbG9yOnJnYmEoMjU1LCA4NywgNTEsIDEpO1wiPuiuuOWPr+ivgeWIsOacn+aXtumXtO+8mnt7IGl0ZW0uZGF5IH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+5oyB57ut5pe26ZW/77yaPGxhYmVsIHN0eWxlPVwiZm9udC13ZWlnaHQ6IDYwMDtcIj57eyBpdGVtLmRheSB9fTwvbGFiZWw+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47cGFkZGluZzoycHggOHB4O2NvbG9yOiByZ2JhKDIzLCAyOCwgMzMsIDAuNSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+6LWL56CB5pe26Ze077yae3sgaXRlbS50aW1lIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7lrqHmoLjkurrvvJp7eyBpdGVtLnJldmlld2VyIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS3miafms5Xnur/ntKLmtYHnqIstLT5cclxuICAgICAgICA8dmFuLXBvcHVwIHYtbW9kZWw9XCJzaG93Q2x1ZVwiIDpjbG9zZWFibGU9XCJmYWxzZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicmVkX3RpdGxlXCI+PGltZyBzcmM9XCJAL2Fzc2V0cy9wb2xsdXRlci9mbG93LnBuZ1wiLz48c3Bhbj7miafms5Xnur/ntKLmtYHnqIvmg4XlhrU8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWRfY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgPHZhbi1zdGVwcyBkaXJlY3Rpb249XCJ2ZXJ0aWNhbFwiIDphY3RpdmU9XCJhY3RpdmVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dmFuLXN0ZXAgdi1mb3I9XCIoaXRlbSxpbmRleCkgaW4gYW5jaG9yTGlzdFwiIDprZXk9XCJpbmRleFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RlcHNfdGl0bGVcIiA6c3R5bGU9XCJ7Y29sb3I6TnVtYmVyKGFjdGl2ZSkgPj0gTnVtYmVyKGl0ZW0udHlwZSk/J3JnYmEoOCwgNDAsIDg5LCAxKSc6ICdyZ2JhKDgsIDQwLCA4OSwgMC41KSd9XCI+e3tpdGVtLm5hbWV9fTxzcGFuIHYtc2hvdz1cImluZGV4IT1hbmNob3JMaXN0Lmxlbmd0aC0xXCIgOnN0eWxlPVwie2NvbG9yOk51bWJlcihhY3RpdmUpID4gTnVtYmVyKGl0ZW0udHlwZSk/J3JnYmEoOCwgNDAsIDg5LCAxKSc6IE51bWJlcihhY3RpdmUpID09IE51bWJlcihpdGVtLnR5cGUpPydyZ2JhKDY3LCAyMDcsIDEyNCwgMSknOicnfVwiPnt7TnVtYmVyKGFjdGl2ZSkgPiBOdW1iZXIoaXRlbS50eXBlKT8n5bey5aSE55CGJzogTnVtYmVyKGFjdGl2ZSkgPT0gTnVtYmVyKGl0ZW0udHlwZSk/J+W+heWkhOeQhic6Jyd9fTwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0ZXBzX2Zsb3dcIj57e2l0ZW0udXNlcn19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGVwc19mbG93XCI+e3tpdGVtLnRpbWV9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdmFuLXN0ZXA+XHJcbiAgICAgICAgICAgICAgICA8L3Zhbi1zdGVwcz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyZWRfYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICA8dmFuLWJ1dHRvbiByb3VuZCB0eXBlPVwiaW5mb1wiIEBjbGljaz1cInNob3dDbHVlPWZhbHNlXCI+55+l6YGT5LqGPC92YW4tYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L3Zhbi1wb3B1cD5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbiAgICBpbXBvcnQge3JlZENvZGVCeUNvbXBhbnlJZCxxdWVyeUNsdWVEZXRhaWx9IGZyb20gXCJAL2FwaS9wb2xsdXRpb25fc291cmNlXCI7XHJcblxyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG5hbWU6IFwicmVkQ29kZUluZm9cIixcclxuICAgICAgICBwcm9wcyA6IHtcclxuICAgICAgICAgICAgaWQgOiBTdHJpbmdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PSDnuqLnoIHotYvnoIHmg4XlhrVcclxuICAgICAgICAgICAgICAgIHJlZENvZGVJbmZvczogW10sXHJcbiAgICAgICAgICAgICAgICBzaG93Q2x1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgLy8gYW5jaG9yTGlzdCA6IFtdLFxyXG4gICAgICAgICAgICAgICAgY2x1ZVN0YXR1czogJycsXHJcbiAgICAgICAgICAgICAgICBkZXRhaWw6IHt9LFxyXG4gICAgICAgICAgICAgICAgYWN0aXZlOiAxLFxyXG4gICAgICAgICAgICAgICAgYW5jaG9yTGlzdCA6IFtcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFwi5Z+65pys5L+h5oGvXCIsIHR5cGU6IDAsdXNlcjon5aGr5oql5Lq677ya5byg5LiJJywgdGltZTogJ+Whq+aKpeaXtumXtO+8mjIwMjMtMTItMzQnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBcIuWIhueuoeWxgOmVv+WuoeaJuVwiLCB0eXBlOiAxLCB0aW1lOiAnJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogXCLmlK/pmJ/liIblj5FcIiwgdHlwZTogMiwgdGltZTogJycgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFwi5YiG5bGA5oyH5rS+XCIsIHR5cGU6IDMsICB0aW1lOiAnJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHsgbmFtZTogXCLliIblsYDmoLjlrp5cIiwgdHlwZTogNCwgIHRpbWU6ICcnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBcIuWhq+aKpeS6uuWKnue7k1wiLCB0eXBlOiA1LCAgdGltZTogJycgfSxcclxuICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFwi57uT5p2fXCIsIHR5cGU6IDYsIHRpbWU6ICcnIH0sXHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSxcclxuICAgICAgICB3YXRjaCA6IHtcclxuICAgICAgICAgICAgJ2lkJzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRJbmZvRGF0YSgpXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSxcclxuICAgICAgICBtb3VudGVkKCkge1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1ldGhvZHMgOntcclxuICAgICAgICAgICAgLy/mn6Xor6LmiYDmnInkvIHkuJrnm7jlhbPor6bmg4VcclxuICAgICAgICAgICAgZ2V0SW5mb0RhdGEoKSB7XHJcbiAgICAgICAgICAgICAgICAvL+e6oueggei1i+eggeaDheWGtVxyXG4gICAgICAgICAgICAgICAgcmVkQ29kZUJ5Q29tcGFueUlkKHRoaXMuaWQpLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZENvZGVJbmZvcyA9IHJlcy5kYXRhO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNob3dQb3B1cChpdGVtKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0NsdWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXREZXRhaWxEYXRhKGl0ZW0uY2x1ZV9pZCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8v6I635Y+W6K+m5oOFXHJcbiAgICAgICAgICAgIGdldERldGFpbERhdGEoY2x1ZUlkKXtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5Q2x1ZURldGFpbCh7IGlkOiBjbHVlSWQgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzLmNvZGUgPT09ICcyMDAnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2x1ZVN0YXR1cyA9IHJlcy5kYXRhLmRldGFpbF9pbmZvLnN0YXR1cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZXRhaWwgPSByZXMuZGF0YS5kZXRhaWxfbGlzdC5sZW5ndGggPiAwID8gcmVzLmRhdGEuZGV0YWlsX2xpc3RbcmVzLmRhdGEuZGV0YWlsX2xpc3QubGVuZ3RoIC0gMV0gOiB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEuZGlzdHJpYnV0aW9uLmxlbmd0aCA+IDAgJiYgcmVzLmRhdGEuZGlzdHJpYnV0aW9uW3Jlcy5kYXRhLmRpc3RyaWJ1dGlvbi5sZW5ndGggLSAxXS5UWVBFID09PSAn5YiG5bGAJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuY2hvckxpc3QgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBcIuWfuuacrOS/oeaBr1wiLCB0eXBlOiAxLCB0aW1lOiAnJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogXCLliIbnrqHlsYDplb/lrqHmiblcIiwgdHlwZTogMiwgdGltZTogJycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFwi5pSv6Zif5YiG5Y+RXCIsIHR5cGU6IDMsIHRpbWU6ICcnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBcIuWIhuWxgOaMh+a0vlwiLCB0eXBlOiA0LCAgdGltZTogJycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFwi5YiG5bGA5qC45a6eXCIsIHR5cGU6IDUsICB0aW1lOiAnJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogXCLloavmiqXkurrlip7nu5NcIiwgdHlwZTogNiwgIHRpbWU6ICcnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBcIue7k+adn1wiLCB0eXBlOiA3LCB0aW1lOiAnJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5jaG9yTGlzdFswXS51c2VyID0gJ+Whq+aKpeS6uu+8micgKyB0aGlzLmRldGFpbC5jcmVhdGVfdXNlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5jaG9yTGlzdFswXS50aW1lID0gJ+Whq+aKpeaXtumXtO+8micgKyB0aGlzLmRldGFpbC5jcmVhdGVfdGltZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlID0gdGhpcy5jbHVlU3RhdHVzID09PSAn6YeN5paw5aGr5YaZJyA/IDEgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2x1ZVN0YXR1cyA9PT0gJ+W+heWuoeaJuScgPyAyIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbHVlU3RhdHVzID09PSAn5b6F5YiG5Y+RJyA/IDMgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbHVlU3RhdHVzID09PSAn5b6F5oyH5rS+JyA/IDQgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2x1ZVN0YXR1cyA9PT0gJ+W+heaguOWunicgPyA1IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbHVlU3RhdHVzID09PSAn5b6F5Yqe57uTJyA/IDYgOiA3IDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5jaG9yTGlzdFsxXS51c2VyID0gKHRoaXMuYWN0aXZlID4gMiAmJiByZXMuZGF0YS5hcHByb3ZlLmxlbmd0aCA+IDApID8gJ+WuoeaJueS6uu+8micgKyByZXMuZGF0YS5hcHByb3ZlW3Jlcy5kYXRhLmFwcHJvdmUubGVuZ3RoIC0gMV0uVVNFUl9OQU1FIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuY2hvckxpc3RbMV0udGltZSA9ICh0aGlzLmFjdGl2ZSA+IDIgJiYgcmVzLmRhdGEuYXBwcm92ZS5sZW5ndGggPiAwKSAgPyAn5a6h5om55pe26Ze077yaJyArIHJlcy5kYXRhLmFwcHJvdmVbcmVzLmRhdGEuYXBwcm92ZS5sZW5ndGggLSAxXS5USU1FIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuY2hvckxpc3RbMl0udXNlciA9ICh0aGlzLmFjdGl2ZSA+IDMgJiYgcmVzLmRhdGEuZGlzdHJpYnV0aW9uLmxlbmd0aCA+IDApID8gJ+WIhuWPkeS6uu+8micgKyByZXMuZGF0YS5kaXN0cmlidXRpb25bcmVzLmRhdGEuZGlzdHJpYnV0aW9uLmxlbmd0aCAtIDFdLlVTRVJfTkFNRSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmNob3JMaXN0WzJdLnRpbWUgPSAodGhpcy5hY3RpdmUgPiAzICYmIHJlcy5kYXRhLmRpc3RyaWJ1dGlvbi5sZW5ndGggPiAwKSA/ICfliIblj5Hml7bpl7TvvJonICsgcmVzLmRhdGEuZGlzdHJpYnV0aW9uW3Jlcy5kYXRhLmRpc3RyaWJ1dGlvbi5sZW5ndGggLSAxXS5USU1FIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuY2hvckxpc3RbM10udXNlciA9ICh0aGlzLmFjdGl2ZSA+IDQgJiYgcmVzLmRhdGEuYnVyZWF1X2Fzc2lnbi5sZW5ndGggPiAwKSA/ICfmjIfmtL7kurrvvJonICsgcmVzLmRhdGEuYnVyZWF1X2Fzc2lnbltyZXMuZGF0YS5idXJlYXVfYXNzaWduLmxlbmd0aCAtIDFdLlVTRVJfTkFNRSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmNob3JMaXN0WzNdLnRpbWUgPSAodGhpcy5hY3RpdmUgPiA0ICYmIHJlcy5kYXRhLmJ1cmVhdV9hc3NpZ24ubGVuZ3RoID4gMCkgPyAn5oyH5rS+5pe26Ze077yaJyArIHJlcy5kYXRhLmJ1cmVhdV9hc3NpZ25bcmVzLmRhdGEuYnVyZWF1X2Fzc2lnbi5sZW5ndGggLSAxXS5USU1FIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuY2hvckxpc3RbNF0udXNlciA9ICh0aGlzLmFjdGl2ZSA+IDUgJiYgcmVzLmRhdGEudmVyaWZ5Lmxlbmd0aCA+IDApID8gJ+aguOWunuS6uu+8micgKyByZXMuZGF0YS52ZXJpZnlbcmVzLmRhdGEudmVyaWZ5Lmxlbmd0aCAtIDFdLlVTRVJfTkFNRSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmNob3JMaXN0WzRdLnRpbWUgPSAodGhpcy5hY3RpdmUgPiA1ICYmIHJlcy5kYXRhLnZlcmlmeS5sZW5ndGggPiAwKSA/ICfmoLjlrp7ml7bpl7TvvJonICsgcmVzLmRhdGEudmVyaWZ5W3Jlcy5kYXRhLnZlcmlmeS5sZW5ndGggLSAxXS5USU1FIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuY2hvckxpc3RbNV0udXNlciA9ICh0aGlzLmFjdGl2ZSA+IDYgJiYgcmVzLmRhdGEuY29tcGxldGlvbi5sZW5ndGggPiAwKSA/ICflip7nu5PkurrvvJonICsgcmVzLmRhdGEuY29tcGxldGlvbltyZXMuZGF0YS5jb21wbGV0aW9uLmxlbmd0aCAtIDFdLlVTRVJfTkFNRSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmNob3JMaXN0WzVdLnRpbWUgPSAodGhpcy5hY3RpdmUgPiA2ICYmIHJlcy5kYXRhLmNvbXBsZXRpb24ubGVuZ3RoID4gMCkgPyAn5Yqe57uT5pe26Ze077yaJyArIHJlcy5kYXRhLmNvbXBsZXRpb25bcmVzLmRhdGEuY29tcGxldGlvbi5sZW5ndGggLSAxXS5USU1FIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuY2hvckxpc3QgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBcIuWfuuacrOS/oeaBr1wiLCB0eXBlOiAxLCB0aW1lOiAnJyB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgbmFtZTogXCLliIbnrqHlsYDplb/lrqHmiblcIiwgdHlwZTogMiwgdGltZTogJycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFwi5pSv6Zif5YiG5Y+RXCIsIHR5cGU6IDMsIHRpbWU6ICcnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBcIuaUr+mYny/liIblsYDmoLjlrp5cIiwgdHlwZTogNCwgIHRpbWU6ICcnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBuYW1lOiBcIuWhq+aKpeS6uuWKnue7k1wiLCB0eXBlOiA1LCAgdGltZTogJycgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IG5hbWU6IFwi57uT5p2fXCIsIHR5cGU6IDYsIHRpbWU6ICcnIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLmRhdGEuZGlzdHJpYnV0aW9uLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5jaG9yTGlzdFszXS5uYW1lID0gJ+aUr+mYn+aguOWunic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuY2hvckxpc3RbMF0udXNlciA9ICfloavmiqXkurrvvJonICsgdGhpcy5kZXRhaWwuY3JlYXRlX3VzZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuY2hvckxpc3RbMF0udGltZSA9ICfloavmiqXml7bpl7TvvJonICsgdGhpcy5kZXRhaWwuY3JlYXRlX3RpbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZSA9IHRoaXMuY2x1ZVN0YXR1cyA9PT0gJ+mHjeaWsOWhq+WGmScgPyAxIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsdWVTdGF0dXMgPT09ICflvoXlrqHmibknID8gMiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2x1ZVN0YXR1cyA9PT0gJ+W+heWIhuWPkScgPyAzIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2x1ZVN0YXR1cyA9PT0gJ+W+heaguOWunicgPyA0IDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsdWVTdGF0dXMgPT09ICflvoXlip7nu5MnID8gNSA6IDYgO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbmNob3JMaXN0WzFdLnVzZXIgPSAodGhpcy5hY3RpdmUgPiAyICYmIHJlcy5kYXRhLmFwcHJvdmUubGVuZ3RoID4gMCkgPyAn5a6h5om55Lq677yaJyArIHJlcy5kYXRhLmFwcHJvdmVbcmVzLmRhdGEuYXBwcm92ZS5sZW5ndGggLSAxXS5VU0VSX05BTUUgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5jaG9yTGlzdFsxXS50aW1lID0gKHRoaXMuYWN0aXZlID4gMiAmJiByZXMuZGF0YS5hcHByb3ZlLmxlbmd0aCA+IDApICA/ICflrqHmibnml7bpl7TvvJonICsgcmVzLmRhdGEuYXBwcm92ZVtyZXMuZGF0YS5hcHByb3ZlLmxlbmd0aCAtIDFdLlRJTUUgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5jaG9yTGlzdFsyXS51c2VyID0gKHRoaXMuYWN0aXZlID4gMyAmJiByZXMuZGF0YS5kaXN0cmlidXRpb24ubGVuZ3RoID4gMCkgPyAn5YiG5Y+R5Lq677yaJyArIHJlcy5kYXRhLmRpc3RyaWJ1dGlvbltyZXMuZGF0YS5kaXN0cmlidXRpb24ubGVuZ3RoIC0gMV0uVVNFUl9OQU1FIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuY2hvckxpc3RbMl0udGltZSA9ICh0aGlzLmFjdGl2ZSA+IDMgJiYgcmVzLmRhdGEuZGlzdHJpYnV0aW9uLmxlbmd0aCA+IDApID8gJ+WIhuWPkeaXtumXtO+8micgKyByZXMuZGF0YS5kaXN0cmlidXRpb25bcmVzLmRhdGEuZGlzdHJpYnV0aW9uLmxlbmd0aCAtIDFdLlRJTUUgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5jaG9yTGlzdFszXS51c2VyID0gKHRoaXMuYWN0aXZlID4gNCAmJiByZXMuZGF0YS52ZXJpZnkubGVuZ3RoID4gMCkgPyAn5qC45a6e5Lq677yaJyArIHJlcy5kYXRhLnZlcmlmeVtyZXMuZGF0YS52ZXJpZnkubGVuZ3RoIC0gMV0uVVNFUl9OQU1FIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuY2hvckxpc3RbM10udGltZSA9ICh0aGlzLmFjdGl2ZSA+IDQgJiYgcmVzLmRhdGEudmVyaWZ5Lmxlbmd0aCA+IDApID8gJ+aguOWunuaXtumXtO+8micgKyByZXMuZGF0YS52ZXJpZnlbcmVzLmRhdGEudmVyaWZ5Lmxlbmd0aCAtIDFdLlRJTUUgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYW5jaG9yTGlzdFs0XS51c2VyID0gKHRoaXMuYWN0aXZlID4gNSAmJiByZXMuZGF0YS5jb21wbGV0aW9uLmxlbmd0aCA+IDApID8gJ+WKnue7k+S6uu+8micgKyByZXMuZGF0YS5jb21wbGV0aW9uW3Jlcy5kYXRhLmNvbXBsZXRpb24ubGVuZ3RoIC0gMV0uVVNFUl9OQU1FIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFuY2hvckxpc3RbNF0udGltZSA9ICh0aGlzLmFjdGl2ZSA+IDUgJiYgcmVzLmRhdGEuY29tcGxldGlvbi5sZW5ndGggPiAwKSA/ICflip7nu5Pml7bpl7TvvJonICsgcmVzLmRhdGEuY29tcGxldGlvbltyZXMuZGF0YS5jb21wbGV0aW9uLmxlbmd0aCAtIDFdLlRJTUUgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jbHVlU3RhdHVzID09PSAn6YeN5paw5aGr5YaZJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3RpdmUgPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICAgIC5oZWFsdGhfbm90aWNle1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNDgsIDI1MSwgMjU1LCAxKTtcclxuICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBjb2xvcjogcmdiYSgyMywgMjgsIDMzLCAwLjQpO1xyXG4gICAgICAgIG1hcmdpbjogNnB4IDEwcHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDBweDtcclxuICAgICAgICA+aW1ne1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDJweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucmVkX2NvZGV7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IDBweCAxMHB4O1xyXG4gICAgfVxyXG4gICAgLmNlbnRlcl90aXRsZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW46IDEwcHggMTBweCAxMHB4O1xyXG4gICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA5MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxMzUuMTJkZWcsIHJnYmEoMjUzLCAxNzQsIDE1NywgMSkgMCUsIHJnYmEoMjI3LCAxMTYsIDIwMiwgMSkgMTAwJSk7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLm51bSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAtMnB4O1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiKDg0LCAxMTcsIDI0OCk7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnWW91U2hlQmlhb1RpSGVpJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2VudGVyX2xlZnRfdG9wX2RpdiB7XHJcbiAgICAgICAgLyp3aWR0aDogMzUwcHg7Ki9cclxuICAgICAgICAvKmhlaWdodDogODVweDsqL1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDEwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1MiwgMjA0LCAxOTcsIDEpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTBweCAtNXB4IHJnYmEoMzcsIDU3LCAxMTEsIDAuMSk7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgLnRvcF9pdGVtIHtcclxuICAgICAgICAgICAgaGVpZ2h0OiA3NSU7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1MSwgMTcwLCAxNjAsIDAuMSk7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDhweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnJlZF9zaXR1YXRpb257XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMTBweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMHB4IDdweCAwcHggN3B4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZ3JlZW57XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgcmdiYSg2NywgMjA3LCAxMjQsIDEpIDAlLCByZ2JhKDEzMiwgMjI0LCAxNjksIDEpIDEwMCUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAueWVsbG93e1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHJnYmEoMjU1LCA4NywgNTEsIDEpIDAlLCByZ2IoMjQzLCAxODQsIDE3MSkgMTAwJSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgOjp2LWRlZXAgLnZhbi1wb3B1cC0tY2VudGVye1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDY4LCAxMjMsIDI1MiwgMC4xKSAwJSwgcmdiYSg2OCwgMTIzLCAyNTIsIDApIDEwMCUpLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDEpO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjM4LCAyNDMsIDI1NSwgMSk7XHJcbiAgICB9XHJcbiAgICAucmVkX3RpdGxle1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDEpO1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgPmltZ3tcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgOjp2LWRlZXAgLnZhbi1zdGVwc3tcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIH1cclxuICAgIDo6di1kZWVwIC52YW4tc3RlcHtcclxuICAgICAgICBjb2xvcjogcmdiYSg4LCA0MCwgODksIDAuNSk7XHJcbiAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICB9XHJcbiAgICA6OnYtZGVlcCAudmFuLXN0ZXBfX3RpdGxlLS1hY3RpdmV7XHJcbiAgICAgICAgY29sb3I6IHJnYmEoOCwgNDAsIDg5LCAxKTtcclxuICAgIH1cclxuICAgIC5yZWRfY29udGVudHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICB9XHJcbiAgICAuc3RlcHNfdGl0bGV7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwLjI3cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgID5zcGFue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuc3RlcHNfZmxvd3tcclxuICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTcuMzhweDtcclxuICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDE0MSwgMjYsIDEpO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIH1cclxuICAgIC5yZWRfYnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgIH1cclxuICAgIDo6di1kZWVwIC52YW4tYnV0dG9ue1xyXG4gICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICB9XHJcbjwvc3R5bGU+XHJcbiIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJjb21wYW55ZGV0YWlsXCIsIHN0YXRpY1N0eWxlOiB7IGJhY2tncm91bmQ6IFwiI2ZmZlwiIH0gfSxcbiAgICBbXG4gICAgICBfYyhcInZhbi1uYXYtYmFyXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgdGl0bGU6IFwi5LyB5Lia6K+m5oOFXCIsIFwibGVmdC1hcnJvd1wiOiBcIlwiIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgXCJjbGljay1sZWZ0XCI6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0uJHJvdXRlci5nbygtMSlcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNTdHlsZTogeyBoZWlnaHQ6IFwiY2FsYygxMDB2aCAtIDl2aClcIiwgXCJvdmVyZmxvdy15XCI6IFwiYXV0b1wiIH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwicXJiYXNlLWluZm9cIiwge1xuICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogX3ZtLnR5cGUsIGVudkNvZGVJbmZvOiBfdm0uZW52Q29kZUluZm8gfSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0udHlwZSA9PSBcInJlZFwiXG4gICAgICAgICAgICA/IF9jKFwicmVkLWNvZGUtaW5mb1wiLCB7IGF0dHJzOiB7IGlkOiBfdm0uZHdpZCB9IH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF9jKFwiaGVhbHRoLWNvbmRpdGlvblwiLCB7IGF0dHJzOiB7IGlkOiBfdm0ud3J5Ym0gfSB9KSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbXBhbnktaW5mb1wiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tcGFueV90aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLkvIHkuJrln7rmnKzkv6Hmga9cIildKSxcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVfdGlwcyBncmVlbl90aXBzXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcIuWBpeW6t+eKtuaAgVwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgeyBjbGFzczogX3ZtLl9mKFwiZmlsdGVyQ29sb3JcIikoX3ZtLmJlaGF2aW9ybGFiZWxzKSB9LFxuICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLmJlaGF2aW9ybGFiZWxzIHx8IFwiLVwiKSldXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZGV0YWlsX3RpdGxlXCIsIG9uOiB7IGNsaWNrOiBfdm0uYmFzZUluZm8gfSB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLor6bmg4UgPlwiKV1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtYWluX2NvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaxoeafk+exu+WIq1wiKV0pLFxuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uZW50SW5mby5wdHlwZSkpXSksXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLooYzkuJrnsbvliKtcIildKSxcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmVudEluZm8uY2F0ZWdvcnkpKV0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi546v5L+d6IGU57O75Lq6XCIpXSksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5lbnRJbmZvLmNvbnRhY3QpKV0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6IGU57O75pa55byPXCIpXSksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5lbnRJbmZvLmNvbnRhY3RUZWwpKV0pLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtYWluX2Zvb3RlciBtYWluZmxleFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtYWluX2ZfbFwiLFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvTWFwKClcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vLi4vYXNzZXRzL3BvbGx1dGVyL3Bvc2l0aW9uLnBuZ1wiKSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlnLDlnYDvvJpcIiArIF92bS5fcyhfdm0uZW50SW5mby5hZGRyZXNzKSldKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uaXNTaG93LmxpY2Vuc2VcbiAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb21wYW55LWluZm9cIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb21wYW55X3RpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmjpLmsaHorrjlj6/or4FcIildKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRldGFpbF90aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmxpY2VuY2VJbmZvKF92bS5saWNlbnNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi6K+m5oOFID5cIildXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWFpbl9jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYWxmX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuS4u+imgeaxoeafk+eJqeexu+WIq1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmxpY2Vuc2UubWFpblBvbENhdGUpKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5saWNlbnNlLm1haW5Qb2xDYXRlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmxpY2Vuc2UubWFpblBvbENhdGUuaW5jbHVkZXMoXCLlup/msJRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaWNlbnNlLm1haW5Qb2xDYXRlJiZsaWNlbnNlLm1haW5Qb2xDYXRlLmluY2x1ZGVzKCflup/msJQnKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhhbGZfd2lkdGhcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5aSn5rCU5rGh5p+T54mp5o6S5pS+6KeE5b6LXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5saWNlbnNlLmdhc0Rpc0xhdykpXSksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5saWNlbnNlLm1haW5Qb2xDYXRlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmxpY2Vuc2UubWFpblBvbENhdGUuaW5jbHVkZXMoXCLlup/msJRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaWNlbnNlLm1haW5Qb2xDYXRlJiZsaWNlbnNlLm1haW5Qb2xDYXRlLmluY2x1ZGVzKCflup/msJQnKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIndob2xlX3dpZHRoXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuWkp+awlOS4u+imgeaxoeafk+eJqeenjeexu1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0ubGljZW5zZS5nYXNNYWluUG9sQ2F0ZSkpXSksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5saWNlbnNlLm1haW5Qb2xDYXRlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmxpY2Vuc2UubWFpblBvbENhdGUuaW5jbHVkZXMoXCLlup/msJRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaWNlbnNlLm1haW5Qb2xDYXRlJiZsaWNlbnNlLm1haW5Qb2xDYXRlLmluY2x1ZGVzKCflup/msJQnKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIndob2xlX3dpZHRoXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuWkp+awlOaxoeafk+eJqeaOkuaUvuaJp+ihjOagh+WHhlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0ubGljZW5zZS5nYXNEaXNTdGFuZGFyZCkpXSksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5saWNlbnNlLm1haW5Qb2xDYXRlICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmxpY2Vuc2UubWFpblBvbENhdGUuaW5jbHVkZXMoXCLlup/msLRcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaWNlbnNlLm1haW5Qb2xDYXRlJiZsaWNlbnNlLm1haW5Qb2xDYXRlLmluY2x1ZGVzKCflup/msLQnKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhhbGZfd2lkdGhcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5bqf5rC05rGh5p+T54mp5o6S5pS+6KeE5b6LXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5saWNlbnNlLndhdGVyRGlzTGF3KSldKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmxpY2Vuc2UubWFpblBvbENhdGUgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubGljZW5zZS5tYWluUG9sQ2F0ZS5pbmNsdWRlcyhcIuW6n+awtFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpY2Vuc2UubWFpblBvbENhdGUmJmxpY2Vuc2UubWFpblBvbENhdGUuaW5jbHVkZXMoJ+W6n+awtCcpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwid2hvbGVfd2lkdGhcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5bqf5rC05Li76KaB5rGh5p+T54mp56eN57G7XCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmxpY2Vuc2Uud2F0ZXJNYWluUG9sQ2F0ZSkpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubGljZW5zZS5tYWluUG9sQ2F0ZSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5saWNlbnNlLm1haW5Qb2xDYXRlLmluY2x1ZGVzKFwi5bqf5rC0XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGljZW5zZS5tYWluUG9sQ2F0ZSYmbGljZW5zZS5tYWluUG9sQ2F0ZS5pbmNsdWRlcygn5bqf5rC0JylcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3aG9sZV93aWR0aFwiLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlup/msLTmsaHmn5PnianmjpLmlL7miafooYzmoIflh4ZcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ubGljZW5zZS53YXRlckRpc1N0YW5kYXJkKSksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5pc1Nob3cuY29uc0luZm9zXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29tcGFueS1pbmZvXCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3dNb3JlMSAmJiBfdm0uY29uc0luZm9zLmxlbmd0aCA+IDJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwibW9yZWhlaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb21wYW55X3RpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuW7uuiuvumhueebrlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZV90aXBzIGJyb3duX3RpcHNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi77yIXCIgKyBfdm0uX3MoX3ZtLmNvbnNJbmZvcy5sZW5ndGgpICsgXCLkuKrvvInpobnnm65cIiksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYWluX2NvbnRlbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmNvbnNJbmZvcywgZnVuY3Rpb24gKGpzaXRlbSwganNpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnVpbGRfaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmJ1aWxkSW5mbyhqc2l0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidWlsZF9sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc2l0ZW0udHlwZSA9PSBcIuWkh+ahiFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYnVpbGRfZ3JlZW5cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBqc2l0ZW0udHlwZSA9PSBcIueOr+ivhFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiYnVpbGRfcHVycGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJidWlsZF9ibHVlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoanNpdGVtLnR5cGUpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhqc2l0ZW0ucHJvamVjdE5hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLlu7rorr7mgKfotKjvvJpcIiArIF92bS5fcyhqc2l0ZW0uYXR0cikpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi546v6K+E5pe26Ze077yaXCIgKyBfdm0uX3MoanNpdGVtLmRhdGUuc3Vic3RyKDAsIDEwKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBqc2kgIT0gX3ZtLmNvbnNJbmZvcy5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJ1bGlkX2hyXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5pc1Nob3cuY29uc0luZm9zICYmIF92bS5jb25zSW5mb3MubGVuZ3RoID4gMlxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbXBhbnktaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjBweCAxMHB4IDZweFwiLFxuICAgICAgICAgICAgICAgICAgICBcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ2V0TW9yZTEoKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vcmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnNob3dNb3JlMSA/IFwi5p+l55yL5pu05aSaXCIgOiBcIuaUtui1t1wiKSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLmlzU2hvdy5tb25pdG9ySW5mb3NcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb21wYW55LWluZm9cIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOlxuICAgICAgICAgICAgICAgICAgICBfdm0uc2hvd01vcmUyICYmIF92bS5tb25pdG9ySW5mb3MubGVuZ3RoID4gMlxuICAgICAgICAgICAgICAgICAgICAgID8gXCJtb3JlaGVpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbXBhbnlfdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5Zyo57q/55uR5o6nXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlX3RpcHMgYnJvd25fdGlwc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIui+vlwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5zdGFuZE51bSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIuS4qi/mgLtcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udG90YWxOdW0pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCLkuKpcIlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLm1vbml0b3JJbmZvcywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm9ubGluZV9ibHVlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0udHlwZSkgKyBcIuaOkuWPo1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwi5o6S5pS+5oC76YePIFwiICsgX3ZtLl9zKGl0ZW0uZGlzRW1pc3Npb25zKSArIFwia2dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKGl0ZW0ub3V0cywgZnVuY3Rpb24gKGl0ZW0yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm9ubGluZV93aGl0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnBvcnRJbmZvKGl0ZW0yLCBpdGVtLnR5cGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0yLmRldmljZU5hbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGl0bGVfdGlwc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbTIuc3RhdHVzID09IFwi5Zyo57q/XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcImdyZWVuX3RpcHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiZ3JleV90aXBzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl0ZW0yLnN0YXR1cykpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBjbGFzczogaXRlbTIuc3RhbmRhcmQgPyBcIlwiIDogXCJyZWRfdGlwXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbTIuc3RhbmRhcmQgPyBcIui+vlwiIDogXCLotoVcIikpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwib25saW5lX2RhdGFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IFwicmdiYSgyNTAsIDI1MCwgMjUwLCAxKVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwib25saW5lX2RhdGFfdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5pWw5o2u5pe26Ze077yaXCIgKyBfdm0uX3MoaXRlbTIuZGF0ZVRpbWUpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5wb3J0SW5mbyhpdGVtMiwgaXRlbS50eXBlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLor6bmg4U+XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnR5cGUgPT0gXCLlup/msLRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwib25saW5lX2RhdGFfaW5mb1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuWMluWtpumcgOawp+mHj++8mlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0yLmNvZCkgKyBcIm1nL0xcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJQSO+8mlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtMi5waCkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmsKjmsK7vvJpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtMi5uaDMpICsgXCJtZy9MXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5oC75rCu77yaXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbTIuemQpICsgXCJtZy9MXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5oC756O377yaXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbTIuemwpICsgXCJtZy9MXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5oKs5rWu54mp77yaXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbTIueGZ3KSArIFwibWcvTFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaAu+mTnO+8mlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0yLnp0KSArIFwibWcvTFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaAu+mVje+8mlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0yLnptKSArIFwibWcvTFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuS4ieS7t+mTrO+8mlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0yLnNqZykgKyBcIm1nL0xcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlha3ku7fpk6zvvJpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtMi5samcpICsgXCJtZy9MXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5rCf56a75a2Q77yaXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbTIuZmx6KSArIFwibWcvTFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaAu+S9meawr++8mlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0yLnp5bCkgKyBcIm1nL0xcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udHlwZSA9PSBcIuW6n+awlFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJvbmxpbmVfZGF0YV9pbmZvXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi54Of5bCY77yaXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbTIuc29vdCkgKyBcIm1nL23Cs1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuS6jOawp+WMluehq++8mlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0yLnNvMikgKyBcInVnL23Cs1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuawruawp+WMlueJqe+8mlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0yLm5veCkgKyBcInVnL23Cs1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuS4gOawp+WMlueis++8mlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0yLmNvKSArIFwibWcvbcKzXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5rCn5rCU77yaXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbTIubzIpICsgXCJ1Zy9twrNcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmsK/ljJbmsKLvvJpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtMi5oY2wpICsgXCJtZy9twrNcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5pc1Nob3cubW9uaXRvckluZm9zICYmIF92bS5tb25pdG9ySW5mb3MubGVuZ3RoID4gMlxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbXBhbnktaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjBweCAxMHB4IDZweFwiLFxuICAgICAgICAgICAgICAgICAgICBcInRleHQtYWxpZ25cIjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uZ2V0TW9yZTIoKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vcmVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnNob3dNb3JlMiA/IFwi5p+l55yL5pu05aSaXCIgOiBcIuaUtui1t1wiKSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLmlzU2hvdy5zdXBlTW9uaXRvckluZm9zXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb21wYW55LWluZm9cIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tcGFueV90aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLnm5HnnaPmgKfnm5HmjqdcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVfdGlwcyBicm93bl90aXBzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwi6L6+XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmpkc3RhbmROdW0pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCLkuKov5oC7XCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmpkdG90YWxOdW0pICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCLkuKpcIlxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZXRhaWxfdGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ubW9uaXRvckluZm8gfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLor6bmg4UgPlwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5zdXBlTW9uaXRvckluZm9zLCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwib25saW5lX2JsdWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS50eXBlKSArIFwi5o6S5Y+jXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCLmjpLmlL7mgLvph48gXCIgKyBfdm0uX3MoaXRlbS5kaXNFbWlzc2lvbnMpICsgXCJrZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woaXRlbS5vdXRzLCBmdW5jdGlvbiAoaXRlbTIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwib25saW5lX3doaXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucG9ydEluZm8oaXRlbTIsIGl0ZW0udHlwZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbTIuZGV2aWNlTmFtZSkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0aXRsZV90aXBzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtMi5zdGF0dXMgPT0gXCLlnKjnur9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiZ3JlZW5fdGlwc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJncmV5X3RpcHNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbTIuc3RhdHVzKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGNsYXNzOiBpdGVtMi5zdGFuZGFyZCA/IFwiXCIgOiBcInJlZF90aXBcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtMi5zdGFuZGFyZCA/IFwi6L6+XCIgOiBcIui2hVwiKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJvbmxpbmVfZGF0YVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogXCJyZ2JhKDI1MCwgMjUwLCAyNTAsIDEpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJvbmxpbmVfZGF0YV90aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLmlbDmja7ml7bpl7TvvJpcIiArIF92bS5fcyhpdGVtMi5kYXRlVGltZSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnBvcnRJbmZvKGl0ZW0yKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLor6bmg4U+XCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnR5cGUgPT0gXCLlup/msLRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwib25saW5lX2RhdGFfaW5mb1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuWMluWtpumcgOawp+mHj++8mlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0yLmNvZCkgKyBcIm1nL0xcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJQSO+8mlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtMi5waCkpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmsKjmsK7vvJpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtMi5uaDMpICsgXCJtZy9MXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5oC75rCu77yaXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbTIuemQpICsgXCJtZy9MXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5oC756O377yaXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbTIuemwpICsgXCJtZy9MXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5oKs5rWu54mp77yaXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbTIueGZ3KSArIFwibWcvTFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaAu+mTnO+8mlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0yLnp0KSArIFwibWcvTFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaAu+mVje+8mlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0yLnptKSArIFwibWcvTFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuS4ieS7t+mTrO+8mlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0yLnNqZykgKyBcIm1nL0xcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLlha3ku7fpk6zvvJpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtMi5samcpICsgXCJtZy9MXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5rCf56a75a2Q77yaXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbTIuZmx6KSArIFwibWcvTFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaAu+S9meawr++8mlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0yLnp5bCkgKyBcIm1nL0xcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0udHlwZSA9PSBcIuW6n+awlFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJvbmxpbmVfZGF0YV9pbmZvXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi54Of5bCY77yaXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbTIuc29vdCkgKyBcIm1nL23Cs1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuS6jOawp+WMluehq++8mlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0yLnNvMikgKyBcInVnL23Cs1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuawruawp+WMlueJqe+8mlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0yLm5veCkgKyBcInVnL23Cs1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuS4gOawp+WMlueis++8mlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0yLmNvKSArIFwibWcvbcKzXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5rCn5rCU77yaXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbTIubzIpICsgXCJ1Zy9twrNcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmsK/ljJbmsKLvvJpcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtMi5oY2wpICsgXCJtZy9twrNcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5pc1Nob3cucHVuaXNoSW5mb3NcbiAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb21wYW55LWluZm9cIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb21wYW55X3RpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLooYzmlL/lpITnvZpcIildKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlX3RpcHMgYnJvd25fdGlwc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucHVuaXNoSW5mb3MubGVuZ3RoKSArIFwi5Lu2XCIpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYWluX2NvbnRlbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5wdW5pc2hJbmZvcywgZnVuY3Rpb24gKGNmaXRlbSwgaSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJhZG1pbl9pbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ucGVuYWx0eUluZm8oY2ZpdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZ3JleV9mb250XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIui/neazleihjOS4ulwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaXtumXtO+8mlwiICsgX3ZtLl9zKGNmaXRlbS50aW1lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJub3JtYWxfZm9udFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGNmaXRlbS5tZXNzYWdlKSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBpICE9IF92bS5wdW5pc2hJbmZvcy5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidWxpZF9oclwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uaXNTaG93LnRzZ3Nwc0luZm9zXG4gICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tcGFueS1pbmZvXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tcGFueV90aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi56ys5LqM5qyh5rGh5p+T5pmu5p+lXCIpXSksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZV90aXBzIGJyb3duX3RpcHNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLl9mKFwiZ2V0U3RhdHVzXCIpKF92bS50c2dzcHNJbmZvcy50eXBlKSkpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWFpbl9jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJub19ib3R0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5bel5Lia5bqf5rCUXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udHNnc3BzSW5mb3MuZ2FzRGlzSW5mby5nYXMpICsgXCIg5ZCoXCIpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJub19ib3R0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5rCu5rCn5YyW54mpXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udHNnc3BzSW5mb3MuZ2FzRGlzSW5mby5ub3gpICsgXCIg5ZCoXCIpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJub19ib3R0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5LqM5rCn5YyW56GrXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udHNnc3BzSW5mb3MuZ2FzRGlzSW5mby5zbzIpICsgXCIg5ZCoXCIpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJub19ib3R0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5oyl5Y+R5oCn5pyJ5py654mpXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udHNnc3BzSW5mb3MuZ2FzRGlzSW5mby52b2MpICsgXCIg5ZCoXCIpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1haW5fY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibm9fYm90dG9tXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuWMluWtpumcgOawp+mHj1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnRzZ3Nwc0luZm9zLndhdGVyRGlzSW5mby5jb2QpICsgXCIg5ZCoXCIpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJub19ib3R0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5rCo5rCuXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udHNnc3BzSW5mb3Mud2F0ZXJEaXNJbmZvLm5oM24pICsgXCIg5ZCoXCIpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJub19ib3R0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5oC756O3XCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0udHNnc3BzSW5mb3Mud2F0ZXJEaXNJbmZvLnRwKSArIFwiIOWQqFwiKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibm9fYm90dG9tXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaAu+awrlwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnRzZ3Nwc0luZm9zLndhdGVyRGlzSW5mby50bikgKyBcIiDlkKhcIiksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5pc1Nob3cucmFkaWF0aW9uSW5mb1xuICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbXBhbnktaW5mb1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbXBhbnlfdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIui+kOWwhOWuieWFqFwiKV0pLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGV0YWlsX3RpdGxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2FmZUluZm8oX3ZtLnJhZGlhdGlvbkluZm8uZnNhcUd5cXlJZClcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLXJpZ2h0XCI6IFwiOHB4XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwi5pyJ5pWI5pyf6ZmQ77yaXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucmFkaWF0aW9uSW5mby5iZWdpbkRhdGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIn5cIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5yYWRpYXRpb25JbmZvLmVuZERhdGUpXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiDor6bmg4UgPlwiKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm9ubGluZV9ibHVlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLovpDlsITlronlhajorrjlj6/or4HnvJblj7dcIildKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjE0cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoNjgsIDEyMywgMjUyLCAxKVwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5yYWRpYXRpb25JbmZvLmxpY2Vuc2VObykpXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX20oMiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyYWRfY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLihaDnsbvmupBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5yYWRpYXRpb25JbmZvLnR5cGUxKSArIFwiIOmil1wiKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLihaHnsbvmupBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5yYWRpYXRpb25JbmZvLnR5cGUyKSArIFwiIOmil1wiKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLihaLnsbvmupBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5yYWRpYXRpb25JbmZvLnR5cGUzKSArIFwiIOmil1wiKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLihaPnsbvmupBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5yYWRpYXRpb25JbmZvLnR5cGU0KSArIFwiIOmil1wiKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLihaTnsbvmupBcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5yYWRpYXRpb25JbmZvLnR5cGU1KSArIFwiIOmil1wiKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX20oMyksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyYWRfY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcImNhbGMoNTAlIC0gMTBweClcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidGV4dC1hbGlnblwiOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicGFkZGluZy1sZWZ0XCI6IFwiMjBweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuKFoOexu+a6kFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5yYWRpYXRpb25JbmZvLnp6VHlwZTIpICsgXCIg6aKXXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiY2FsYyg1MCUgLSAxMHB4KVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWFsaWduXCI6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwYWRkaW5nLWxlZnRcIjogXCIyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi4oWh57G75rqQXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnJhZGlhdGlvbkluZm8uenpUeXBlMykgKyBcIiDpopdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5pc1Nob3cuc29saWRXYXN0ZUluZm9zXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29tcGFueS1pbmZvXCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczpcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3dNb3JlMyAmJiBfdm0uc29saWRXYXN0ZUluZm9zLmxlbmd0aCA+IDJcbiAgICAgICAgICAgICAgICAgICAgICA/IFwibW9yZWhlaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgOiBcIlwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb21wYW55X3RpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuWNseW6n+OAgeWbuuW6n+S/oeaBr1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZV90aXBzIGJyb3duX3RpcHNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uc29saWRXYXN0ZUluZm9zLmxlbmd0aCkgKyBcIuenjVwiKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRldGFpbF90aXRsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS53YXN0ZUluZm8gfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLor6bmg4UgPlwiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5zb2xpZFdhc3RlSW5mb3MsIGZ1bmN0aW9uIChpdGVtZ2YsIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJvbmxpbmVfeWVsbG93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpbmRleCArIDEpICsgXCIuXCIgKyBfdm0uX3MoaXRlbWdmLndhc3RlTmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWFpbl9jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aGlyZF93aWR0aCBub19ib3R0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5Lqn55Sf6YePXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtZ2YucHJvZHVjdCkgKyBcIiDlkKhcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0aGlyZF93aWR0aCBub19ib3R0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6Ieq6KGM5Yip55So6YePXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtZ2YudXNlKSArIFwiIOWQqFwiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRoaXJkX3dpZHRoIG5vX2JvdHRvbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmgLvoh6rooYzlpITnva7ph49cIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW1nZi5tYW5hZ2UpICsgXCIg5ZCoXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJ1bGlkX21haW5faHJcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1haW5fY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGFsZl93aWR0aCBub19ib3R0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5aeU5omY5Yip55So6YePXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtZ2Yud3RVc2UpICsgXCIg5ZCoXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaGFsZl93aWR0aCBub19ib3R0b21cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5aeU5omY5aSE572u6YePXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtZ2Yud3RNYW5hZ2UpICsgXCLlkKhcIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYnVsaWRfbWFpbl9oclwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibWFpbl9jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYWxmX3dpZHRoIG5vX2JvdHRvbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLkuIrlubTluqbmnKvmnKzljZXkvY3lrp7pmYXotK7lrZjph49cIildKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW1nZi5zdG9yYWdlTGFzdCkgKyBcIiDlkKhcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhhbGZfd2lkdGggbm9fYm90dG9tXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuacrOW5tOacq+acrOWNleS9jeWunumZhei0ruWtmOmHj1wiKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbWdmLnN0b3JhZ2UpICsgXCIg5ZCoXCIpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLmlzU2hvdy5zb2xpZFdhc3RlSW5mb3MgJiYgX3ZtLnNvbGlkV2FzdGVJbmZvcy5sZW5ndGggPiAyXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29tcGFueS1pbmZvXCIsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IFwiMHB4IDEwcHggNnB4XCIsXG4gICAgICAgICAgICAgICAgICAgIFwidGV4dC1hbGlnblwiOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5nZXRNb3JlMygpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibW9yZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uc2hvd01vcmUzID8gXCLmn6XnnIvmm7TlpJpcIiA6IFwi5pS26LW3XCIpKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uaXNTaG93LnlkemZJbmZvc1xuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbXBhbnktaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIF92bS5zaG93TW9yZTQgJiYgX3ZtLnlkemZJbmZvcy5sZW5ndGggPiAzXG4gICAgICAgICAgICAgICAgICAgICAgPyBcIm1vcmVoZWlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgIDogXCJcIixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tcGFueV90aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmiafms5Xmo4Dmn6VcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVfdGlwcyBicm93bl90aXBzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnlkemZJbmZvcy5sZW5ndGgpICsgXCLkuKrnjrDlnLrmiafms5Xkv6Hmga9cIiksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtYWluX2NvbnRlbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnlkemZJbmZvcywgZnVuY3Rpb24gKGl0ZW16ZiwgemZpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYWRtaW5faW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmxhd0luZm8oaXRlbXpmKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibm9ybWFsX2ZvbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtemYuY2FzZU5hbWUgfHwgXCLnjrDlnLrmiafms5XmoYjku7ZcIiArICh6ZmkgKyAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJncmV5X2ZvbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgY2xhc3M6IGl0ZW16Zi5zZndmID8gXCJmb250b3JnXCIgOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtemYubXNnKSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbXpmLnRpbWUpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgemZpICE9IF92bS55ZHpmSW5mb3MubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJidWxpZF9oclwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uaXNTaG93LnlkemZJbmZvcyAmJiBfdm0ueWR6ZkluZm9zLmxlbmd0aCA+IDNcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb21wYW55LWluZm9cIixcbiAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCIwcHggMTBweCA2cHhcIixcbiAgICAgICAgICAgICAgICAgICAgXCJ0ZXh0LWFsaWduXCI6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLmdldE1vcmU0KClcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJtb3JlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5zaG93TW9yZTQgPyBcIuafpeeci+abtOWkmlwiIDogXCLmlLbotbdcIikpLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5pc1Nob3cuZW52Q2FzZUluZm9zXG4gICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tcGFueS1pbmZvXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tcGFueV90aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi56qB5Y+R546v5aKD5LqL5Lu2XCIpXSksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZV90aXBzIGJyb3duX3RpcHNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmVudkNhc2VJbmZvcy5sZW5ndGgpICsgXCLku7ZcIiksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1haW5fY29udGVudFwiIH0sXG4gICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLmVudkNhc2VJbmZvcywgZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYWRtaW5faW5mb1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJub3JtYWxfZm9udFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLmNhc2VOYW1lKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImdyZXlfZm9udFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhpdGVtLm1zZykpXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoaXRlbS50aW1lKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5pc1Nob3cubGljZW5zZUltcGxSZXBvcnRJbmZvXG4gICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tcGFueS1pbmZvXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fbSg0KSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1haW5fY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2hvbGVfd2lkdGhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5omn6KGM5oql5ZGK6KaB5rGCXCIpXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0ubGljZW5zZVJwdC5tc2cpKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIndob2xlX3dpZHRoXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuWFtuS7llwiKV0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmxpY2Vuc2VScHQub3RoZXIgfHwgXCItXCIpKV0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJvbmxpbmVfYmx1ZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5bqf5rCU5rGh5p+T5rqQ5o6S5pS+6YeP77yI5YWo5Y6C5ZCI6K6h77yJXCIpXSksXG4gICAgICBfYyhcInNwYW5cIiksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwib25saW5lX2JsdWVcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuW6n+awtOaxoeafk+a6kOaOkuaUvumHj++8iOWFqOWOguWQiOiuoe+8iVwiKV0pLFxuICAgICAgX2MoXCJzcGFuXCIpLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInJhZF90aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImFjdGl2ZVwiIH0sIFtfdm0uX3YoXCLmlL7lsITmupDmtLvliqjnp43nsbtcIildKSxcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJyYWRfdGl0bGVcIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJhY3RpdmVcIiB9LCBbX3ZtLl92KFwi5bCE57q/6KOF572u5rS75Yqo56eN57G7XCIpXSksXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24gKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29tcGFueV90aXRsZVwiIH0sIFtcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5o6S5rGh6K645Y+v6K+B5omn6KGM5oql5ZGKXCIpXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi10b3BcIjogXCIxMHB4XCIgfSB9LCBbXG4gICAgX3ZtLnRvdGFsLmxlbmd0aCA+IDBcbiAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyX2l0ZW1fdGl0bGVcIiB9LCBbX3ZtLl92KFwi5YGl5bq354q25Ya1XCIpXSlcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJjZW50ZXJfaXRlbV9jb250ZW50XCIgfSxcbiAgICAgIF92bS5fbChfdm0udG90YWwsIGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb250ZW50X2l0ZW1zXCIsXG4gICAgICAgICAgICBzdHlsZTogXCJiYWNrZ3JvdW5kLWNvbG9yOlwiICsgX3ZtLnNyY0xpc3RbaW5kZXhdLmJhY2tncm91bmQsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogX3ZtLnNyY0xpc3RbaW5kZXhdLnNyYyB9IH0pLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiY2FsYygxMDAlIC0gMTBweClcIixcbiAgICAgICAgICAgICAgICAgIFwibGluZS1oZWlnaHRcIjogXCIzMHB4XCIsXG4gICAgICAgICAgICAgICAgICBcImZvbnQtc2l6ZVwiOiBcIjEycHhcIixcbiAgICAgICAgICAgICAgICAgIFwibWFyZ2luLWxlZnRcIjogXCItMTBweFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJqdXN0aWZ5LWNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCIycHggOHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJhbGlnbi1pdGVtc1wiOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwibGluZS1oZWlnaHRcIjogXCJub3JtYWxcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY1N0eWxlOiB7IFwiZm9udC13ZWlnaHRcIjogXCI2MDBcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0ubmFtZSkpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5uYW1lID09PSBcIuaOkuaxoeiuuOWPr+ivgeacieaViOacn1wiIHx8XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ubmFtZSA9PT0gXCLmjpLmsaHorrjlj6/or4HpmZDmnJ/mlbTmlLlcIiB8fFxuICAgICAgICAgICAgICAgICAgICBpdGVtLm5hbWUgPT09IFwi5o6S5rGh6K645Y+v6K+B5ZKM5Zyo57q/55uR5o6n5o6S5pS+5oC76YeP5rGH5oC757uf6K6hXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5uYW1lID09PSBcIui+kOWwhOWuieWFqOiuuOWPr+ivgeacieaViOacn1wiXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJzdGF0ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLmRheSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwianVzdGlmeS1jb250ZW50XCI6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMnB4IDhweFwiLFxuICAgICAgICAgICAgICAgICAgICAgIFwiYWxpZ24taXRlbXNcIjogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBcImxpbmUtaGVpZ2h0XCI6IFwibm9ybWFsXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBpdGVtLm5hbWUgPT09IFwi5o6S5rGh6K645Y+v6K+B5pyJ5pWI5pyfXCIgfHxcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5uYW1lID09PSBcIuaOkuaxoeiuuOWPr+ivgemZkOacn+aVtOaUuVwiIHx8XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0ubmFtZSA9PT0gXCLmjpLmsaHorrjlj6/or4HlkozlnKjnur/nm5HmjqfmjpLmlL7mgLvph4/msYfmgLvnu5/orqFcIiB8fFxuICAgICAgICAgICAgICAgICAgICBpdGVtLm5hbWUgPT09IFwi6L6Q5bCE5a6J5YWo6K645Y+v6K+B5pyJ5pWI5pyfXCJcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJyZ2JhKDI0NywgMTI3LCA3LCAxKVwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuWIsOacn+aXtumXtO+8mlwiICsgX3ZtLl9zKGl0ZW0udGltZSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBcInJnYmEoMjQ3LCAxMjcsIDcsIDEpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZvbnQtd2VpZ2h0XCI6IFwiNzAwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbS5jb3VudCkgKyBcIuS7tlwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIH0pLFxuICAgICAgMFxuICAgICksXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcInJlZF9jb2RlXCIgfSxcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNlbnRlcl90aXRsZVwiIH0sIFtcbiAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJudW1cIiB9LCBbXG4gICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucmVkQ29kZUluZm9zLmxlbmd0aCkgKyBcIiDku7ZcIiksXG4gICAgICAgIF0pLFxuICAgICAgXSksXG4gICAgICBfdm0uX20oMSksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgX3ZtLl9sKF92bS5yZWRDb2RlSW5mb3MsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2VudGVyX2xlZnRfdG9wX2RpdlwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0b3BfaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJqdXN0aWZ5LWNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImFsaWduLWl0ZW1zXCI6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucXJfY29kZV9jb2xvciA9PT0gXCLnu7/oibJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHJlcXVpcmUoXCJAL2Fzc2V0cy9wb2xsdXRlci9ncmVlbl9jb2RlLnBuZ1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGl0ZW0ucXJfY29kZV9jb2xvciA9PT0gXCLpu4ToibJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IHJlcXVpcmUoXCJAL2Fzc2V0cy9wb2xsdXRlci95ZWxsb3dfY29kZS5wbmdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBpdGVtLnFyX2NvZGVfY29sb3IgPT09IFwi57qi6ImyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyByZXF1aXJlKFwiQC9hc3NldHMvcG9sbHV0ZXIvcmVkX2NvZGUucG5nXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWFyZ2luLWxlZnRcIjogXCI1cHhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC13ZWlnaHRcIjogXCI2MDBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9udC1zaXplXCI6IFwiMTRweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uY2F1c2UpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsdWVfaWQgIT09IFwiXCIgJiZcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbHVlX2lkICE9PSBcIm51bGxcIiAmJlxuICAgICAgICAgICAgICAgICAgICBpdGVtLmNsdWVfaWQgIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5jbHVlX2lkICE9PSBcInVuZGVmaW5lZFwiICYmXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uY2x1ZV9pZCAhPT0gdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJyZWRfc2l0dWF0aW9uIGdyZWVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uc2hvd1BvcHVwKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLlt7LovazkuLrmiafms5Xnur/ntKJcIildXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJyZWRfc2l0dWF0aW9uIHllbGxvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5pyq6L2s5Li65omn5rOV57q/57SiXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJqdXN0aWZ5LWNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgXCJtYXJnaW4tdG9wXCI6IFwiNXB4XCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY1N0eWxlOiB7IGNvbG9yOiBcInJnYmEoMjU1LCA4NywgNTEsIDEpXCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLorrjlj6/or4HliLDmnJ/ml7bpl7TvvJpcIiArIF92bS5fcyhpdGVtLmRheSkpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuaMgee7reaXtumVv++8mlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgc3RhdGljU3R5bGU6IHsgXCJmb250LXdlaWdodFwiOiBcIjYwMFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLmRheSkpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgXCJqdXN0aWZ5LWNvbnRlbnRcIjogXCJzcGFjZS1iZXR3ZWVuXCIsXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMnB4IDhweFwiLFxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCJyZ2JhKDIzLCAyOCwgMzMsIDAuNSlcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIui1i+eggeaXtumXtO+8mlwiICsgX3ZtLl9zKGl0ZW0udGltZSkpXSksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuWuoeaguOS6uu+8mlwiICsgX3ZtLl9zKGl0ZW0ucmV2aWV3ZXIpKV0pLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pXG4gICAgICAgIH0pLFxuICAgICAgICAwXG4gICAgICApLFxuICAgICAgX2MoXG4gICAgICAgIFwidmFuLXBvcHVwXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBhdHRyczogeyBjbG9zZWFibGU6IGZhbHNlIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hvd0NsdWUsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICBfdm0uc2hvd0NsdWUgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcInNob3dDbHVlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicmVkX3RpdGxlXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy9wb2xsdXRlci9mbG93LnBuZ1wiKSB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuaJp+azlee6v+e0oua1geeoi+aDheWGtVwiKV0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicmVkX2NvbnRlbnRcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInZhbi1zdGVwc1wiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgZGlyZWN0aW9uOiBcInZlcnRpY2FsXCIsIGFjdGl2ZTogX3ZtLmFjdGl2ZSB9IH0sXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5hbmNob3JMaXN0LCBmdW5jdGlvbiAoaXRlbSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcInZhbi1zdGVwXCIsIHsga2V5OiBpbmRleCB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3RlcHNfdGl0bGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihfdm0uYWN0aXZlKSA+PSBOdW1iZXIoaXRlbS50eXBlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoOCwgNDAsIDg5LCAxKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwicmdiYSg4LCA0MCwgODksIDAuNSlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0ubmFtZSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXNob3dcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGluZGV4ICE9IF92bS5hbmNob3JMaXN0Lmxlbmd0aCAtIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiaW5kZXghPWFuY2hvckxpc3QubGVuZ3RoLTFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE51bWJlcihfdm0uYWN0aXZlKSA+IE51bWJlcihpdGVtLnR5cGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcInJnYmEoOCwgNDAsIDg5LCAxKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBOdW1iZXIoX3ZtLmFjdGl2ZSkgPT0gTnVtYmVyKGl0ZW0udHlwZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwicmdiYSg2NywgMjA3LCAxMjQsIDEpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTnVtYmVyKF92bS5hY3RpdmUpID4gTnVtYmVyKGl0ZW0udHlwZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwi5bey5aSE55CGXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IE51bWJlcihfdm0uYWN0aXZlKSA9PSBOdW1iZXIoaXRlbS50eXBlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCLlvoXlpITnkIZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInN0ZXBzX2Zsb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLnVzZXIpKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3RlcHNfZmxvd1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGl0ZW0udGltZSkpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicmVkX2J1dHRvblwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidmFuLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvdW5kOiBcIlwiLCB0eXBlOiBcImluZm9cIiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hvd0NsdWUgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLnn6XpgZPkuoZcIildXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLnuqLnoIHotYvnoIHljp/lm6BcIildKV0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWx0aF9ub3RpY2VcIiB9LCBbXG4gICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL3BvbGx1dGVyL25vdGljZS5wbmdcIikgfSB9KSxcbiAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi6Iul5qGI5Lu26L2s5Li65omn5rOV57q/57Si5YiZ5o+Q56S65qGI5Lu25a6h5om55rWB56iL5oOF5Ya144CCXCIpXSksXG4gICAgXSlcbiAgfSxcbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiJ3VzZSBzdHJpY3QnO1xudmFyICRmb3JFYWNoID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FycmF5LWl0ZXJhdGlvbicpLmZvckVhY2g7XG52YXIgYXJyYXlNZXRob2RJc1N0cmljdCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaXMtc3RyaWN0Jyk7XG5cbnZhciBTVFJJQ1RfTUVUSE9EID0gYXJyYXlNZXRob2RJc1N0cmljdCgnZm9yRWFjaCcpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZCBpbXBsZW1lbnRhdGlvblxuLy8gaHR0cHM6Ly90YzM5LmVzL2VjbWEyNjIvI3NlYy1hcnJheS5wcm90b3R5cGUuZm9yZWFjaFxubW9kdWxlLmV4cG9ydHMgPSAhU1RSSUNUX01FVEhPRCA/IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoaXNBcmcgKi8pIHtcbiAgcmV0dXJuICRmb3JFYWNoKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcy9uby1hcnJheS1wcm90b3R5cGUtZm9yZWFjaCAtLSBzYWZlXG59IDogW10uZm9yRWFjaDtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWxUaGlzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dsb2JhbC10aGlzJyk7XG52YXIgRE9NSXRlcmFibGVzID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2RvbS1pdGVyYWJsZXMnKTtcbnZhciBET01Ub2tlbkxpc3RQcm90b3R5cGUgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZG9tLXRva2VuLWxpc3QtcHJvdG90eXBlJyk7XG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1mb3ItZWFjaCcpO1xudmFyIGNyZWF0ZU5vbkVudW1lcmFibGVQcm9wZXJ0eSA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9jcmVhdGUtbm9uLWVudW1lcmFibGUtcHJvcGVydHknKTtcblxudmFyIGhhbmRsZVByb3RvdHlwZSA9IGZ1bmN0aW9uIChDb2xsZWN0aW9uUHJvdG90eXBlKSB7XG4gIC8vIHNvbWUgQ2hyb21lIHZlcnNpb25zIGhhdmUgbm9uLWNvbmZpZ3VyYWJsZSBtZXRob2RzIG9uIERPTVRva2VuTGlzdFxuICBpZiAoQ29sbGVjdGlvblByb3RvdHlwZSAmJiBDb2xsZWN0aW9uUHJvdG90eXBlLmZvckVhY2ggIT09IGZvckVhY2gpIHRyeSB7XG4gICAgY3JlYXRlTm9uRW51bWVyYWJsZVByb3BlcnR5KENvbGxlY3Rpb25Qcm90b3R5cGUsICdmb3JFYWNoJywgZm9yRWFjaCk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgQ29sbGVjdGlvblByb3RvdHlwZS5mb3JFYWNoID0gZm9yRWFjaDtcbiAgfVxufTtcblxuZm9yICh2YXIgQ09MTEVDVElPTl9OQU1FIGluIERPTUl0ZXJhYmxlcykge1xuICBpZiAoRE9NSXRlcmFibGVzW0NPTExFQ1RJT05fTkFNRV0pIHtcbiAgICBoYW5kbGVQcm90b3R5cGUoZ2xvYmFsVGhpc1tDT0xMRUNUSU9OX05BTUVdICYmIGdsb2JhbFRoaXNbQ09MTEVDVElPTl9OQU1FXS5wcm90b3R5cGUpO1xuICB9XG59XG5cbmhhbmRsZVByb3RvdHlwZShET01Ub2tlbkxpc3RQcm90b3R5cGUpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5jb21wYW55ZGV0YWlsIC5tb3JlaGVpZ2h0IHtcXG4gIG1heC1oZWlnaHQ6IDI3MHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmNvbXBhbnlkZXRhaWwgLmdyZXlfZm9udCBzcGFuLmZvbnRvcmcge1xcbiAgY29sb3I6ICNmZjU3MzM7XFxufVxcbi5jb21wYW55ZGV0YWlsIC5ncmVlbmZvbnQge1xcbiAgY29sb3I6ICMwNmI4MmY7XFxufVxcbi5jb21wYW55ZGV0YWlsIC55ZWxsb3dmb250IHtcXG4gIGNvbG9yOiAjZmZhMjAwO1xcbn1cXG4uY29tcGFueWRldGFpbCAucmVkZm9udCB7XFxuICBjb2xvcjogI2ZmNTczMztcXG59XFxuLmNvbXBhbnlkZXRhaWwgLmJsYWNrZm9udCB7XFxuICBjb2xvcjogIzYwNjI2NjtcXG59XFxuLmNvbXBhbnlkZXRhaWwgLmNvbXBhbnktaW5mbyAub25saW5lX3llbGxvdyB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbi5jb21wYW55ZGV0YWlsIC5jb21wYW55LWluZm8gLm9ubGluZV95ZWxsb3cgPiBzcGFuIHtcXG4gIGxpbmUtaGVpZ2h0OiBub3JtYWw7XFxuICBwYWRkaW5nOiA0cHggMDtcXG59XFxuLmNvbXBhbnlkZXRhaWwgLm9ubGluZV9kYXRhX2luZm8gPiBkaXYge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxufVxcbi5jb21wYW55ZGV0YWlsIC5vbmxpbmVfZGF0YV9pbmZvID4gZGl2ID4gc3BhbiB7XFxuICBmbGV4OiAxO1xcbn1cXG4uY29tcGFueWRldGFpbCAubWFpbmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmctcmlnaHQ6IDVweDtcXG59XFxuLmNvbXBhbnlkZXRhaWwgLm1haW5mbGV4IC5tYWluX2ZfbCA+IGltZyB7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB3aWR0aDogMTRweDtcXG59XFxuLmNvbXBhbnlkZXRhaWwgLm1haW5mbGV4IC5tYWluX2ZfbCA+IHNwYW4ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcXG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uLWxpbmU6IHVuZGVybGluZTtcXG4gIGNvbG9yOiAjNDQ3YmZjO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxufVxcbi5jb21wYW55ZGV0YWlsIC5tYWluZmxleCAubWFpbl9mX3Ige1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgd2lkdGg6IDEwMnB4O1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuY2VudGVyX2l0ZW1fdGl0bGVbZGF0YS12LTNhMGRmNWQ1XSB7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XFxufVxcbi5jZW50ZXJfaXRlbV9jb250ZW50W2RhdGEtdi0zYTBkZjVkNV0ge1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxufVxcbi5jZW50ZXJfaXRlbV9jb250ZW50IC5jb250ZW50X2l0ZW1zW2RhdGEtdi0zYTBkZjVkNV0ge1xcbiAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XFxuICBoZWlnaHQ6IDcwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgbWFyZ2luOiAwIDBweCAxMHB4IDEwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLmNlbnRlcl9pdGVtX2NvbnRlbnQgLmNvbnRlbnRfaXRlbXMgaW1nW2RhdGEtdi0zYTBkZjVkNV0ge1xcbiAgbWFyZ2luLXRvcDogLTE1cHg7XFxuICBtYXJnaW4tbGVmdDogLTIycHg7XFxufVxcbi5jZW50ZXJfaXRlbV9jb250ZW50IC5jb250ZW50X2l0ZW1zIC5zdGF0ZVtkYXRhLXYtM2EwZGY1ZDVdIHtcXG4gIC8qaGVpZ2h0OiAyMnB4OyovXFxuICBiYWNrZ3JvdW5kOiAjZmZlZWRlO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XFxuICAgICAgICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMTBweCAwIDEwcHg7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBjb2xvcjogI2ZmOGQxYTtcXG4gIHBhZGRpbmc6IDAgNnB4O1xcbiAgLypsaW5lLWhlaWdodDogMjJweDsqL1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi5oZWFsdGhfbm90aWNlW2RhdGEtdi0zZjgwY2ZiY10ge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIGJhY2tncm91bmQ6ICNmOGZiZmY7XFxuICBmb250LXNpemU6IDExcHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgY29sb3I6IHJnYmEoMjMsIDI4LCAzMywgMC40KTtcXG4gIG1hcmdpbjogNnB4IDEwcHg7XFxuICBwYWRkaW5nOiA1cHggMHB4O1xcbn1cXG4uaGVhbHRoX25vdGljZSA+IGltZ1tkYXRhLXYtM2Y4MGNmYmNdIHtcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxuICBtYXJnaW4tbGVmdDogOHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAycHg7XFxufVxcbi5yZWRfY29kZVtkYXRhLXYtM2Y4MGNmYmNdIHtcXG4gIG1hcmdpbjogMjBweCAwcHggMTBweDtcXG59XFxuLmNlbnRlcl90aXRsZVtkYXRhLXYtM2Y4MGNmYmNdIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDEwcHggMTBweCAxMHB4O1xcbn1cXG4uY2VudGVyX3RpdGxlIGRpdltkYXRhLXYtM2Y4MGNmYmNdIHtcXG4gIHdpZHRoOiA5MHB4O1xcbiAgaGVpZ2h0OiAyNnB4O1xcbiAgb3BhY2l0eTogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTM1LjEyZGVnLCAjZmRhZTlkIDAlLCAjZTM3NGNhIDEwMCUpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNmZmY7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLmNlbnRlcl90aXRsZSAubnVtW2RhdGEtdi0zZjgwY2ZiY10ge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xcbiAgbGV0dGVyLXNwYWNpbmc6IC0ycHg7XFxuICBjb2xvcjogIzU0NzVmODtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiWW91U2hlQmlhb1RpSGVpXFxcIjtcXG59XFxuLmNlbnRlcl9sZWZ0X3RvcF9kaXZbZGF0YS12LTNmODBjZmJjXSB7XFxuICAvKndpZHRoOiAzNTBweDsqL1xcbiAgLypoZWlnaHQ6IDg1cHg7Ki9cXG4gIG1hcmdpbjogNXB4IDEwcHg7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgd2lkdGg6IGNhbGMoMTAwJSAtIDIwcHgpO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZmNjY2M1O1xcbiAgYm94LXNoYWRvdzogMHB4IDRweCAxMHB4IC01cHggcmdiYSgzNywgNTcsIDExMSwgMC4xKTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5jZW50ZXJfbGVmdF90b3BfZGl2IC50b3BfaXRlbVtkYXRhLXYtM2Y4MGNmYmNdIHtcXG4gIGhlaWdodDogNzUlO1xcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1MSwgMTcwLCAxNjAsIDAuMSk7XFxuICBwYWRkaW5nOiA4cHg7XFxufVxcbi5jZW50ZXJfbGVmdF90b3BfZGl2IC5yZWRfc2l0dWF0aW9uW2RhdGEtdi0zZjgwY2ZiY10ge1xcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDBweCAxMHB4O1xcbiAgcGFkZGluZzogMHB4IDdweCAwcHggN3B4O1xcbiAgZm9udC1zaXplOiAxMXB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuLmNlbnRlcl9sZWZ0X3RvcF9kaXYgLmdyZWVuW2RhdGEtdi0zZjgwY2ZiY10ge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjNDNjZjdjIDAlLCAjODRlMGE5IDEwMCUpO1xcbn1cXG4uY2VudGVyX2xlZnRfdG9wX2RpdiAueWVsbG93W2RhdGEtdi0zZjgwY2ZiY10ge1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCAjZmY1NzMzIDAlLCAjZjNiOGFiIDEwMCUpO1xcbn1cXG5bZGF0YS12LTNmODBjZmJjXSAudmFuLXBvcHVwLS1jZW50ZXIge1xcbiAgd2lkdGg6IDgwJTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDY4LCAxMjMsIDI1MiwgMC4xKSAwJSwgcmdiYSg2OCwgMTIzLCAyNTIsIDApIDEwMCUpLCB3aGl0ZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWYzZmY7XFxufVxcbi5yZWRfdGl0bGVbZGF0YS12LTNmODBjZmJjXSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgcGFkZGluZzogMTBweDtcXG59XFxuLnJlZF90aXRsZSA+IGltZ1tkYXRhLXYtM2Y4MGNmYmNdIHtcXG4gIG1hcmdpbi1yaWdodDogOHB4O1xcbn1cXG5bZGF0YS12LTNmODBjZmJjXSAudmFuLXN0ZXBzIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbn1cXG5bZGF0YS12LTNmODBjZmJjXSAudmFuLXN0ZXAge1xcbiAgY29sb3I6IHJnYmEoOCwgNDAsIDg5LCAwLjUpO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cXG5bZGF0YS12LTNmODBjZmJjXSAudmFuLXN0ZXBfX3RpdGxlLS1hY3RpdmUge1xcbiAgY29sb3I6ICMwODI4NTk7XFxufVxcbi5yZWRfY29udGVudFtkYXRhLXYtM2Y4MGNmYmNdIHtcXG4gIHBhZGRpbmc6IDEwcHggMTBweDtcXG59XFxuLnN0ZXBzX3RpdGxlW2RhdGEtdi0zZjgwY2ZiY10ge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGxpbmUtaGVpZ2h0OiAyMC4yN3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLnN0ZXBzX3RpdGxlID4gc3BhbltkYXRhLXYtM2Y4MGNmYmNdIHtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxufVxcbi5zdGVwc19mbG93W2RhdGEtdi0zZjgwY2ZiY10ge1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxNy4zOHB4O1xcbiAgY29sb3I6ICNmZjhkMWE7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxufVxcbi5yZWRfYnV0dG9uW2RhdGEtdi0zZjgwY2ZiY10ge1xcbiAgd2lkdGg6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDEwcHggYXV0bztcXG59XFxuW2RhdGEtdi0zZjgwY2ZiY10gLnZhbi1idXR0b24ge1xcbiAgd2lkdGg6IDE1MHB4O1xcbiAgaGVpZ2h0OiAzNXB4O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbXBhbnlEZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbmlmKGNvbnRlbnQuX19lc01vZHVsZSkgY29udGVudCA9IGNvbnRlbnQuZGVmYXVsdDtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgYWRkID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpLmRlZmF1bHRcbnZhciB1cGRhdGUgPSBhZGQoXCJjMWVjODVhNlwiLCBjb250ZW50LCBmYWxzZSwge1wic291cmNlTWFwXCI6ZmFsc2UsXCJzaGFkb3dNb2RlXCI6ZmFsc2V9KTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2NvbXBhbnlEZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb21wYW55RGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hlYWx0aENvbmRpdGlvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zYTBkZjVkNSZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjM5NzY2MmM5XCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaGVhbHRoQ29uZGl0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNhMGRmNWQ1Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaGVhbHRoQ29uZGl0aW9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNhMGRmNWQ1Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlZENvZGVJbmZvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNmODBjZmJjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiNDQzZjY1MzZcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9yZWRDb2RlSW5mby52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0zZjgwY2ZiYyZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlZENvZGVJbmZvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNmODBjZmJjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ2dBQUFCQUNBWUFBQUJvV1RWYUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUNnU1VSQlZHaUI3YzZ4RFFKQkVFTlJ6MUlIRGRBRWRIYTNuUjFOMEFDRkRCRVNzQW1zaHdEeFgrakEraElBQU1BdmkyK2NIdnAxVmNTUzBoYVo1OHV5WDJlL3lnUHZjVTlqWnArTmJCVlJqekxpT0l5dndSOG9Ed3pwVlBsWEhsaU5RQmVCTGdKZEJMb0lkQkhvSXRCRm9JdEFGNEV1QWwwRXVnaDBFZWdpMEVXZ2kwQVhnUzRDWFFTNkNIVDlZV0JtSHlacG03MHJEMnh0ak5uRkdQMnVHekRiR091dSswWGtBQUFBQUVsRlRrU3VRbUNDXCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBNEFBQUFPQ0FZQUFBQWZTQzNSQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBR09TVVJCVkNpUmJaSS9xaFJCRU1aL3ZidW9pMy9nQmQ3QlF3ZzdBeDVBOEJJZXdFQTNtUmt3RWN3MjBGaE1SQU5UUWRqZS9DRW1Ic0VEcUxCZFZUMDdaVERiTy91ZUZuVFFSZjIrNzZ1bUE5ZnErU1pYZ2REazNpc3hFQms2eS9EdTVjMzJmQzVjQjRCS3M2TUtZbzZhSStVbzNkZTN5L1lFcmplNTlSRkNkQng2czc0UkFKNDhrNjNvNks3bVNBNzE1ZnRsREFBdk5yMFBEcXBGSFVRUHRmUmd3cmIwanU3eHg2YzdkVmh2Y3RzZlFuTWVTNDFPYkVDVVJvdVErVW5ZZXVxRjlhd213RW5tVWRWUll4TDdaMSthV1ZLcXBFNVNaeThlUDc2NlZlK0ZtR3pvUkloN29mdis0WFlvTTBtZEpBTUxFWTlpWGgwVnEwZFBVeXZxS3pVcXNTR203QkVnYVlrS2xtR3gxd0V0T3hpSSt2bStsUmk3Ky9YdmJaS3gxeDhnQk4vTlV2WnVpbkFXUjUya0lES2M3djFoK2dDeno2K1hNWW5ILzBEZHp5OTNRMUpmSlhXR1lRVGNpY08zaTNZR0lCSzZwRXl1bzhqcXVOdk9mWEthejcyNzh1VWVQUDVUSmFXWkhnclVQSVpBVlp6bWMrLzZ5NHQ0QlN4MTcrR3ZWZ3h5SGgyTFN3RksvUVdCMTU0R05wQ3pxUUFBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ2dBQUFCQUNBWUFBQUJvV1RWYUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUNuU1VSQlZHaUI3ZERCRFlKQUVJWGhtYVVkRWt1UWltaEJhTUdLMWhKTTdHYzRpc0pCOXcwSDQvOGQ1L0QyejVvQkFBRDhNajlpdEwrUFU3aGR6S0o2K08xeHVrNnRXK21CejdqVkkyRnphMlJKcVZvSmovUDI5aHI4amZSQU14OHkxdzRJekVXZ2lrQVZnU29DVlFTcUNGUVJxQ0pRUmFDS1FCV0JLZ0pWQktvSVZCR29JbEJGb0lwQUZZRXFBbFVFcXY0djBNUG03VFZxNjE3K0Q1WlMzMC91M1U3MFp4WlFseGpyempjVVV3QUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBNEFBQUFPQ0FZQUFBQWZTQzNSQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBQjhTVVJCVkNpUmpWTEJFY0FnQ0lOZUYzSUcxdUxwV3M3QVNQU0Z4MUhTeXNkd0JrZ1VGbE9uRW10TXpubkh1U3N4a3pLdW5BdDFGVk5mWXpKcXVnc3JJWEkwbFpGSFZQeUs3aEw1SlNKaVJJNnBuWTBOSWprOWoyWFdZakgxOW5IK3BLNHhHWFpHVWdQREJlaWt4MEtJcWJjVDBUZGsvTGtBbmIvQUQvUWluYkJoNHptMkFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNnQUFBQkFDQVlBQUFCb1dUVmFBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFDaVNVUkJWR2lCN2M0eERzSkFERVJSZTVHNFZ1aHpLSkpEcGQ5Y0N3bWNDZ215VGRneEJlSy9jb3JSTndNQUFQaGwvbzNUODdwTTVuWU44K29SNjIwWXA5NnY5TUJuM05zWU52ZEdsb3lvVitFK05PTSsrQVBwZ1c1eHlmeExEOHhHb0lwQUZZRXFBbFVFcWdoVUVhZ2lVRVdnaWtBVmdTb0NWUVNxQ0ZRUnFDSlFSYUNLUUJXQktnSlZCS3IrTURCc2JpZXZ2WGZwZ2FVODZuNDcrYjJKUG1vREpJNFk1eVFhWUdBQUFBQUFTVVZPUks1Q1lJST1cIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQVFDQVlBQUFBZjgvOWhBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFEblNVUkJWRGlOM1ZIQmtjSXdERnc1VndTcEpzNERSZzhLb0lJd1ZCR25pZ3hVRVA1NWVPQVJweHFxU01UamtNZVhDeFNBWG10NWQ3V3lnZSt1TFYrR0haL2RKNDVaYXpLM2RzZG5JY2dvb0NLOWUrd1BOajMvS0VnblRhQWl3MVQrNHF4UVlkNTNnU0QxQzd1WWdMbTFBaW9NNW1Bd2g3dXZTdTlQSVoya3drMS9MUWxTLzF1QklLUDNwN0FVYWdtb1NZUkJWMWw5Z3pkbEJUUXVtMzhNbUZ2TDNObzFOVUhTeDdSNTM0Vm9vTEZuR0RzaHE3ZDhHWlpHQW1yeXZuT1AvY0VKcU5GKy9JV2JQN28weVF3ekFJaEVuZmpDa1V0cmNkVmtRbFlEd04xWDVUdmVGOVFUNGtGZnlQemhRbGNBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ2dBQUFCQUNBWUFBQUJvV1RWYUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUNRU1VSQlZHaUI3YzZ4RFlOQUVBWFJ4WTJaRmx5Um9hSXJBVHBiSjVhRDB3YUl1WXM4TC96QjEwUklraVNwa3kyMmJKSFo0c2dXRy9sYUJqWDlmSVBlM2J3dnIzdWhEeHBVZUJaYkgzelpqTUIxNU5tTXdLRU1wQXlrREtRTXBBeWtES1FNcEF5a0RLUU1wQXlrREtRTXBBeWtES1FNcEF5a0RLUU1wQXlrREtUK01uQXZ0dlB1Mll6QXM5aXE2RXMrK3lRUldGbTdRYThBQUFBQVNVVk9SSzVDWUlJPVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ0FBQUFBZ0NBWUFBQUJ6ZW5yMEFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUZEU1VSQlZGaUY3VmJSYnNNZ0REenZ4K3A4MTVDYVNzMTN4Zmt5OXdXbXRBTWJ3NmJ0b2ZjVWdleTcyQWNZZU9PUFFkRUFUc29Bb0lwcldTTENMWCtMM0VsK1RjRGxVM2NBYkNZazNPUk82NDhLNEtTc2lyMDNhVVNJSzRDVHJxZHloMENFeFd2Smg1ZGtsTHczMWhUQVNkZFI4cElpKzJaTWdQTUhBa0JPSjZBcHd0cHNlc0F5WHMxZ2xsY3NMMWdWNE5aR3pkMk80NXU1WEJQVytLTjdxcmlFQlZoQkJyaTJTSVFqTE1Bd0Y1ZnIrR2x4OE1TTXRBQ3EyTStFMmJEZWlhbkN2QWw3N3Y0ZUhCczFlY3dLZEp4eEYxNE85eTJZcklJY0d5MVRBaVpFdU9SQXB3bVBqWlpnTzdySWdlQkFVcHh2T0Y3eU5TMjlPY01qV1JIeUtpSTZDVTBKZUJVeFNqNE5UcnJPemd5akxlRGFlblFpTmdWa0VqNDlTbFZTQXdKOFBVVE5jYjBxWUdRSzl0QWFTc3dXbENvQTM1NW5ib1E4RVhoLy84YS93QVBPTVp6UURGaGpOZ0FBQUFCSlJVNUVya0pnZ2c9PVwiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ2dBQUFCQUNBWUFBQUJvV1RWYUFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUNkU1VSQlZHaUI3YzZ4RFFJeEZBVFI3eU9rS0tpQWx2QzFSQVZIVVlTSHlaREFCQ2ZQSjBETUN6ZFlUWVFrU2RJdks5ODRyYWRialloenRMSkVhZGQ2MmRmUnIvVEFaOXlyZVRSeW9rR2RWZzRmMXZmZ3pmSURTenRtM3VVSEpqT1FNcEF5a0RLUU1wQXlrREtRTXBBeWtES1FNcEF5a0RLUU1wQXlrREtRTXBBeWtES1FNcEF5a1ByTHdMbGJXbGxHei9JRHAvdlNiYnUxajk3b0FZSklGZU1sazlYN0FBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUNnQUFBQkFDQVlBQUFCb1dUVmFBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFDY1NVUkJWR2lCN2M2eEVjSXdBQVRCRjIxUURCVGtIckI3Y0VHbUdNb0FFNUZvRkhoMEltQzREVC80dVVTU0pPbVhsVytjUHFacFRuSXJ5YlluOS9PNnpyMWZ3d00vY2RXODlFYWVhRkN0SkpmR1hBY2ZOanh3VDY0ai80WUhqbVlnWlNCbElHVWdaU0JsSUdVZ1pTQmxJR1VnWlNCbElHVWdaU0JsSUdVZ1pTQmxJR1VnWlNCbElQV1hnVXM5bEdUclBSc2UrR3JFUEJ2UlI3MEJ0K0FTMzF1VFdwc0FBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBNEFBQUFPQ0FZQUFBQWZTQzNSQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBQjVTVVJCVkNpUmpWTEJFY0FnQ0NPOWJzUXd6T2d3enBTKzZGbEtXdmtJWjRCRUE0YlRTbUJNckhXSE9TdHdCYTE1eFJ4cUtzT0pNYUdHM28wVmtMWGFDcVZSTmIraXUxUjZ6Y3lnd0xtMWszRW5XZXllMnpSck04UFpQczRmVll3Sk9WbFJ6Vndhb0tPZWhtQTQyNDNxR3g1bStESkFweS96QzFGb25SQ2dvWVhGQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQTRBQUFBT0NBWUFBQUFmU0MzUkFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUI1U1VSQlZDaVJqVkxCRFFBaENJT0xZN0NhMDdHYVk1QndMd3hCZWljZlN5elFLbXdxVGlYR1hKenpsbE9KbVpSeDVUeW9xNm40bUl0UjAxMVlDWkdqcVl3OG91SWp1a3ZrbDRpSUVUbW1kalkyaU9UMnZKWlppMDNGMjhmNWt6cm1ZdGdaU1EwTUY2Q1RIZ3RoS3Q1T1JOK1E4ZWNDZFA0Q3YvWFZvMUFkd210dUFBQUFBRWxGVGtTdVFtQ0NcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vY29tcGFueURldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODFkMWJmNjImXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vY29tcGFueURldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2NvbXBhbnlEZXRhaWwudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2NvbXBhbnlEZXRhaWwudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnODFkMWJmNjInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnODFkMWJmNjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnODFkMWJmNjInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2NvbXBhbnlEZXRhaWwudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTgxZDFiZjYyJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzgxZDFiZjYyJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9jb21wYW55RGV0YWlsLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29tcGFueURldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29tcGFueURldGFpbC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9jb21wYW55RGV0YWlsLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vY29tcGFueURldGFpbC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODFkMWJmNjImXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2hlYWx0aENvbmRpdGlvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2EwZGY1ZDUmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaGVhbHRoQ29uZGl0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaGVhbHRoQ29uZGl0aW9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9oZWFsdGhDb25kaXRpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2EwZGY1ZDUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIzYTBkZjVkNVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczYTBkZjVkNScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczYTBkZjVkNScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczYTBkZjVkNScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaGVhbHRoQ29uZGl0aW9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0zYTBkZjVkNSZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCczYTBkZjVkNScsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL3BvbGx1dGlvbi9kZXRhaWwvY29tcG9uZW50cy9oZWFsdGhDb25kaXRpb24udnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oZWFsdGhDb25kaXRpb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2hlYWx0aENvbmRpdGlvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oZWFsdGhDb25kaXRpb24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2EwZGY1ZDUmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9oZWFsdGhDb25kaXRpb24udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNhMGRmNWQ1JnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9yZWRDb2RlSW5mby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9M2Y4MGNmYmMmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcmVkQ29kZUluZm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9yZWRDb2RlSW5mby52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vcmVkQ29kZUluZm8udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9M2Y4MGNmYmMmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIzZjgwY2ZiY1wiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCczZjgwY2ZiYycpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCczZjgwY2ZiYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCczZjgwY2ZiYycsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcmVkQ29kZUluZm8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNmODBjZmJjJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzNmODBjZmJjJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvcG9sbHV0aW9uL2RldGFpbC9jb21wb25lbnRzL3JlZENvZGVJbmZvLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVkQ29kZUluZm8udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlZENvZGVJbmZvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3JlZENvZGVJbmZvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTNmODBjZmJjJmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vcmVkQ29kZUluZm8udnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTNmODBjZmJjJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==