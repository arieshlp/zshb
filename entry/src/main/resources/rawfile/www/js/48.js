(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[48],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/FloatButton.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/FloatButton.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);

//
//
//
//
//
//
//
//
//
//
//
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
  name: "FloatButton",
  props: {
    distanceRight: {
      type: Number,
      default: 16
    },
    distanceBottom: {
      type: Number,
      default: 100
    },
    isScrollHidden: {
      type: Boolean,
      default: false
    },
    isCanDraggable: {
      type: Boolean,
      default: true
    },
    zIndex: {
      type: Number,
      default: 50
    },
    value: {
      type: String,
      default: "悬浮球！"
    }
  },
  //data 域
  data: function data() {
    return {
      clientWidth: null,
      clientHeight: null,
      left: null,
      top: null,
      right: null,
      timer: null,
      currentTop: 0,
      mousedownX: 0,
      mousedownY: 0
    };
  },
  created: function created() {
    this.clientWidth = document.documentElement.clientWidth;
    this.clientHeight = document.documentElement.clientHeight;
  },
  mounted: function mounted() {
    var _this = this;

    this.isCanDraggable && this.$nextTick(function () {
      _this.floatDrag = _this.$refs.floatDrag; // 获取元素位置属性

      _this.floatDragDom = _this.floatDrag.getBoundingClientRect(); // 设置初始位置
      // this.left = this.clientWidth - this.floatDragDom.width - this.distanceRight;

      _this.right = 0;
      _this.top = _this.clientHeight - _this.floatDragDom.height - _this.distanceBottom; // this.initDraggable();
    }); // this.isScrollHidden && window.addEventListener('scroll', this.handleScroll);

    window.addEventListener("resize", this.handleResize);
  },
  beforeUnmount: function beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    /**
     * 窗口resize监听
     */
    handleResize: function handleResize() {
      // this.clientWidth = document.documentElement.clientWidth;
      // this.clientHeight = document.documentElement.clientHeight;
      // console.log(window.innerWidth);
      // console.log(document.documentElement.clientWidth);
      this.checkDraggablePosition();
    },

    /**
     * 初始化draggable
     */
    initDraggable: function initDraggable() {
      var _this2 = this;

      this.floatDrag.addEventListener("touchstart", this.toucheStart);
      this.floatDrag.addEventListener("touchmove", function (e) {
        return _this2.touchMove(e);
      });
      this.floatDrag.addEventListener("touchend", this.touchEnd);
    },
    mouseDown: function mouseDown(e) {
      var event = e || window.event;
      this.mousedownX = event.screenX;
      this.mousedownY = event.screenY;
      var that = this;
      var floatDragWidth = this.floatDragDom.width / 2;
      var floatDragHeight = this.floatDragDom.height / 2;

      if (event.preventDefault) {
        event.preventDefault();
      }

      this.canClick = false;
      this.floatDrag.style.transition = "none";

      document.onmousemove = function (e) {
        var event = e || window.event;
        that.left = event.clientX - floatDragWidth;
        that.top = event.clientY - floatDragHeight;
        if (that.left < 0) that.left = 0;
        if (that.top < 0) that.top = 0; // 鼠标移出可视区域后给按钮还原

        if (event.clientY < 0 || event.clientY > Number(this.clientHeight) || event.clientX > Number(this.clientWidth) || event.clientX < 0) {
          this.right = 0;
          this.top = this.clientHeight - this.floatDragDom.height - this.distanceBottom;
          document.onmousemove = null;
          this.floatDrag.style.transition = "all 0.3s";
          return;
        }

        if (that.left >= document.documentElement.clientWidth - floatDragWidth * 2) {
          that.left = document.documentElement.clientWidth - floatDragWidth * 2;
        }

        if (that.top >= that.clientHeight - floatDragHeight * 2) {
          that.top = that.clientHeight - floatDragHeight * 2;
        }
      };
    },
    mouseUp: function mouseUp(e) {
      var event = e || window.event; //判断只是单纯的点击，没有拖拽

      if (this.mousedownY == event.screenY && this.mousedownX == event.screenX) {
        this.$emit("handlepaly");
      }

      document.onmousemove = null;
      this.checkDraggablePosition();
      this.floatDrag.style.transition = "all 0.3s";
    },
    toucheStart: function toucheStart() {
      this.canClick = false;
      this.floatDrag.style.transition = "none";
    },
    touchMove: function touchMove(e) {
      this.canClick = true;

      if (e.targetTouches.length === 1) {
        // 单指拖动
        var touch = event.targetTouches[0];
        this.left = touch.clientX - this.floatDragDom.width / 2;
        this.top = touch.clientY - this.floatDragDom.height / 2;
      }
    },
    touchEnd: function touchEnd() {
      if (!this.canClick) return; // 解决点击事件和touch事件冲突的问题

      this.floatDrag.style.transition = "all 0.3s";
      this.checkDraggablePosition();
    },

    /**
     * 判断元素显示位置
     * 在窗口改变和move end时调用
     */
    checkDraggablePosition: function checkDraggablePosition() {
      this.clientWidth = document.documentElement.clientWidth;
      this.clientHeight = document.documentElement.clientHeight;

      if (this.left + this.floatDragDom.width / 2 >= this.clientWidth / 2) {
        // 判断位置是往左往右滑动
        this.left = this.clientWidth - this.floatDragDom.width;
      } else {
        this.left = 0;
      }

      if (this.top < 0) {
        // 判断是否超出屏幕上沿
        this.top = 0;
      }

      if (this.top + this.floatDragDom.height >= this.clientHeight) {
        // 判断是否超出屏幕下沿
        this.top = this.clientHeight - this.floatDragDom.height;
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/homePage/components/airWaterWarning.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/homePage/components/airWaterWarning.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "airWaterWarning",
  data: function data() {
    return {};
  },
  mounted: function mounted() {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/homePage/index.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/homePage/index.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.string.split.js */ "./node_modules/core-js/modules/es.string.split.js");
/* harmony import */ var core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_split_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_common_FloatButton_vue__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @/components/common/FloatButton.vue */ "./src/components/common/FloatButton.vue");
/* harmony import */ var _api_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @/api/api */ "./src/api/api.js");
/* harmony import */ var _api_air_quality__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @/api/air_quality */ "./src/api/air_quality.js");
/* harmony import */ var _api_clue__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../api/clue */ "./src/api/clue.js");
/* harmony import */ var _api_login__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @/api/login */ "./src/api/login.js");
/* harmony import */ var _api_case__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../api/case */ "./src/api/case.js");
/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @/utils/utils */ "./src/utils/utils.js");
/* harmony import */ var _views_homePage_components_cityWater__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @/views/homePage/components/cityWater */ "./src/views/homePage/components/cityWater.vue");
/* harmony import */ var _views_homePage_components_cityAir__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @/views/homePage/components/cityAir */ "./src/views/homePage/components/cityAir.vue");
/* harmony import */ var _views_homePage_components_airWaterWarning__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @/views/homePage/components/airWaterWarning */ "./src/views/homePage/components/airWaterWarning.vue");
/* harmony import */ var _views_homePage_components_areaStatis__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @/views/homePage/components/areaStatis */ "./src/views/homePage/components/areaStatis.vue");
/* harmony import */ var _views_homePage_components_mediaStatis__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @/views/homePage/components/mediaStatis */ "./src/views/homePage/components/mediaStatis.vue");
/* harmony import */ var _views_searchComponents_components_pollution_pollutionOverview__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @/views/searchComponents/components/pollution/pollutionOverview */ "./src/views/searchComponents/components/pollution/pollutionOverview.vue");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_23__);










//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    FloatButton: _components_common_FloatButton_vue__WEBPACK_IMPORTED_MODULE_10__["default"],
    cityWater: _views_homePage_components_cityWater__WEBPACK_IMPORTED_MODULE_17__["default"],
    // basinWaterStandard,
    // competitionGovern,
    // cityDrink,
    cityAir: _views_homePage_components_cityAir__WEBPACK_IMPORTED_MODULE_18__["default"],
    // airCalendar,
    // buildProject,
    // dangerWaste,
    // envComplain,
    // executivePunish,
    // focusCompany,
    // healthRecord,
    // lawExamine,
    // onlineMonitor,
    // pollutionStatis,
    // radiateSecurity,
    // secnodPollute,
    airWaterWarning: _views_homePage_components_airWaterWarning__WEBPACK_IMPORTED_MODULE_19__["default"],
    pollutionOverview: _views_searchComponents_components_pollution_pollutionOverview__WEBPACK_IMPORTED_MODULE_22__["default"],
    areaStatis: _views_homePage_components_areaStatis__WEBPACK_IMPORTED_MODULE_20__["default"],
    mediaStatis: _views_homePage_components_mediaStatis__WEBPACK_IMPORTED_MODULE_21__["default"]
  },
  data: function data() {
    return {
      searchKeyword: "",
      token: "",
      warningAir: 0,
      warningWater: 0,
      headerFixed: false,
      handle: 0,
      indexRole: {},
      menuList: [],
      userDeptFlag: false,
      userDept: "",
      currentComponent: [],
      xzqh: "昆明市",
      caseUndoNum: 0,
      moreBtnShow: false,
      noticeNumber: 0,
      currentLocation: null
    };
  },
  computed: {
    warningInfoShow: function warningInfoShow() {
      var tempArr = this.currentComponent.filter(function (item) {
        if (item) {
          return item.name === "airWaterWarning";
        }
      });
      return tempArr.length > 0;
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    document.addEventListener("deviceready", this.onDeviceReady, false);
    this.$refs.page.addEventListener("scroll", this.handleScroll, true);
    var url = window.location.href;
    var param = url.split("=").length > 1 ? url.split("=")[1] : "";
    console.log(param, this.$store.state.token);

    if (param) {
      console.log(param);

      if (param.indexOf("#/") > -1) {
        this.$store.commit("setToken", param.split("#/")[0]);
      } else {
        this.$store.commit("setToken", param);
      }
    }

    if (this.$store.state.token) {
      this.token = this.$store.state.token;
    } else {
      this.token = param === "" ? "" : param.split("#")[0];
    }

    if (this.token === null || this.token === "") {
      setTimeout(function () {
        _this2.$stor.dispatch("unUserPassLogin", _this2.$store.state.uuid);
      });
    }

    this.getUserInfo();
    this.queryHandleClue();
    this.queryWarningData();
    this.queryUserNotice();

    try {
      // 注册推送
      huaweiPush.register(function (token) {
        axios__WEBPACK_IMPORTED_MODULE_23___default()({
          url: "http://10.221.29.4:7301/harmony/notice/setToken",
          method: 'POST',
          data: {
            phone: '',
            token: token
          }
        }).then(function (res) {// alert(res.data.code)
        });
      }, function (err) {// alert(err);
      }, []);
    } catch (e) {}
  },
  destroyed: function destroyed() {
    window.removeEventListener("scroll", this.handleScroll, true);
  },
  methods: {
    //我的跳转
    onFabClick: function onFabClick() {
      this.$router.push("/mine");
    },
    //消息通知跳转
    onMessageCenter: function onMessageCenter() {
      this.$router.push({
        name: "messageCenter"
      });
    },
    onDeviceReady: function onDeviceReady() {
      localStorage.setItem("uuid", device.uuid);

      var _this = this;

      var options = {
        enableHighAccuracy: true,
        // 是否使用 GPS
        maximumAge: 30000,
        // 缓存时间
        timeout: 27000,
        // 超时时间
        coorType: 'wgs84' // 默认是 gcj02，可填 bd09ll wgs84、gcj02以获取百度经纬度用于访问百度 API

      };
      navigator.geolocation.getCurrentPosition(function (info) {
        _this.currentLocation = info;
      }, function (error) {
        alert('失败');
      }, options);
    },
    //获取用户组件订阅信息
    queryUserSubscribe: function queryUserSubscribe() {
      var _this3 = this;

      //获取用户组件订阅信息
      Object(_api_api__WEBPACK_IMPORTED_MODULE_11__["userSubscribe"])(this.token).then(function (res) {
        var tempComponent = res.data.map(function (item) {
          return item.componentPath;
        });
        _this3.currentComponent = _this3.getComponent(tempComponent);
      });
    },
    //获取用户信息
    getUserInfo: function getUserInfo() {
      var _this4 = this;

      Object(_api_api__WEBPACK_IMPORTED_MODULE_11__["login"])(this.token).then(function (res) {
        if (res.code === "200") {
          localStorage.setItem("token", _this4.token);
          localStorage.setItem("userName", res.data.user.mc);
          localStorage.setItem("userId", res.data.user.objectid);
          localStorage.setItem("dept", res.data.user.ssbm);
          localStorage.setItem("division_code", res.data.user.ssqx || "昆明市");
          var searchData = {
            moduleName: "",
            resourcePath: "",
            type: "",
            parameter: res.data.user.ssqx || "昆明市",
            componentName: ""
          };

          _this4.$store.commit("setSearchObj", searchData); // let depArr = ['局领导', '监控中心', '宣教中心']


          var depArr = ["生态环境监控中心"];
          _this4.userDeptFlag = depArr.indexOf(res.data.user.ssbm) > -1;
        }

        _this4.queryUserBtn(res.data.user.objectid);

        _this4.queryUserSubscribe();
      }); //线索登录

      Object(_api_api__WEBPACK_IMPORTED_MODULE_11__["login_clue"])(this.token).then(function (res) {});
    },
    //查询用户关联的menu
    queryUserBtn: function queryUserBtn(id) {
      var _this5 = this;

      Object(_api_login__WEBPACK_IMPORTED_MODULE_14__["getUserBtnList"])({
        userId: id
      }).then(function (res) {
        var tempD = res.data.filter(function (item) {
          if (item.flag && item.name === "案件审批") {
            _this5.initCaseUndoNum();
          }

          return item.name !== "GIS";
        });
        var finalD = tempD.filter(function (item) {
          return item.flag;
        });

        if (finalD.length > 9) {
          _this5.menuList = finalD.slice(0, 9);
          _this5.moreBtnShow = true;
        } else if (finalD.length === 9) {
          _this5.menuList = finalD.slice(0, 8);
          _this5.moreBtnShow = true;
        } else {
          _this5.menuList = finalD;
        }
      });
    },
    //用户消息通知
    queryUserNotice: function queryUserNotice() {
      var _this6 = this;

      Object(_api_api__WEBPACK_IMPORTED_MODULE_11__["sysNoticeInfo"])().then(function (res) {
        console.log(res.data);
        _this6.noticeNumber = res.data.length;
      });
    },
    initCaseUndoNum: function initCaseUndoNum() {
      var _this7 = this;

      var search = {
        pageNum: 1,
        pageSize: 9999,
        type: "",
        year: "",
        status: "待审批"
      };
      Object(_api_case__WEBPACK_IMPORTED_MODULE_15__["queryTypeCaseList"])(search).then(function (res) {
        _this7.caseUndoNum = res.data.total;
      });
    },
    onLink: function onLink(item) {
      var otherArr = ["自由裁量", "环保标准", "法律法规", "调度平台", "水环境"];
      var url = "";

      if (otherArr.indexOf(item.name) > -1) {
        url = item.url + "?token=" + this.token;
        Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["openBrowser"])(url);
      } else {
        if (item.name === "气环境") {
          url = "http://10.221.29.4:17000/kqzl/#/Home" + "?phone=" + localStorage.getItem("phone");
          Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["openBrowser"])(url);
        } else if (item.name === "污染源") {
          url = "http://10.221.29.4:17001/wrygj/index.html#/sso?title=首页&token=" + this.token + '&jd=' + this.currentLocation.coords.longitude + '&wd=' + this.currentLocation.coords.latitude;
          Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["openBrowser"])(url);
        } else if (item.name === "执法监测") {
          url = "http://10.221.29.4:17001/wrygj/index.html#/sso?title=执法监测&token=" + this.token;
          Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["openBrowser"])(url);
        } else if (item.name === "督办事项") {
          url = "http://10.221.29.4:17001/wrygj/index.html#/sso?title=督办事项&token=" + this.token;
          Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["openBrowser"])(url);
        } else if (item.name === "任务下达") {
          url = "http://10.221.29.4:17001/wrygj/index.html#/sso?title=任务下达&token=" + this.token + '&jd=' + this.currentLocation.coords.longitude + '&wd=' + this.currentLocation.coords.latitude;
          Object(_utils_utils__WEBPACK_IMPORTED_MODULE_16__["openBrowser"])(url);
        } else {
          this.$router.push(item.url);
        }
      }
    },
    queryWarningData: function queryWarningData() {
      var _this8 = this;

      return Object(D_helipingWork_APP_kmEnvPortable_webappOS_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var tempD, tempDWater;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this8.getWarningAir();

              case 2:
                tempD = _context.sent;
                _context.next = 5;
                return _this8.getWarningWater();

              case 5:
                tempDWater = _context.sent;
                _this8.warningAir = tempD; // this.warningAir = tempD.waringCount;
                // this.warningWater = tempDWater

                _this8.warningWater = tempDWater.fifth.length + tempDWater.fourth.length + tempDWater.thrid.length + tempDWater.second.length + tempDWater.fisrt.length;

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getWarningAir: function getWarningAir() {
      // return new Promise(((resolve, reject) => {
      //   warningAir().then(res => {
      //     resolve(res.data)
      //   })
      // }))
      var info = {
        divisionName: localStorage.getItem("division_code")
      };
      return new Promise(function (resolve, reject) {
        Object(_api_air_quality__WEBPACK_IMPORTED_MODULE_12__["overproofAlerts"])(info).then(function (res) {
          resolve(res.data.length);
        });
      });
    },
    getWarningWater: function getWarningWater() {
      return new Promise(function (resolve, reject) {
        Object(_api_api__WEBPACK_IMPORTED_MODULE_11__["warningWater"])().then(function (res) {
          resolve(res);
        });
      });
    },
    onToSiteList: function onToSiteList(flag) {
      switch (flag) {
        case 0:
          this.$router.push({
            name: "exceedWarning",
            query: {
              flag: flag
            }
          });
          break;

        case 1:
          this.$router.push({
            name: "airAlarm",
            query: {
              xzqh: this.xzqh
            }
          });
          break;
      }
    },
    onToClueList: function onToClueList() {
      this.$store.state.type = "待办事项";
      this.$router.push({
        name: "MineClue",
        params: {}
      });
    },
    onFunction: function onFunction(flag) {
      var url = "";

      if (flag === "水环境") {
        url = "http://10.221.29.4:17001/kmshj/#/sso?token=" + this.token;
      } else if (flag === "气环境") {
        url = "http://10.221.29.4:17000/kqzl/#/Home" + "?phone=" + localStorage.getItem("phone");
      } else if (flag === "污染源") {
        url = "http://10.221.29.4:17001/wrygj/index.html#/sso?title=首页&token=" + this.token;
      } else if (flag === "法律法规") {
        url = "http://10.221.29.4:17001/wrygj/index.html#/law1?title=环境保护法律法规汇编";
      } else if (flag === "环保标准") {
        url = "http://10.221.29.4:17001/wrygj/index.html#/stand1?title=环境保护标准";
      } else if (flag === "自由裁量权") {
        url = "http://10.221.29.4:17001/wrygj/index.html#/zyclIndex1?title=自由裁量计算器";
      } else if (flag === "任务下达") {
        // url ='http://10.221.29.4:17001/wrygj/index.html#/newZfjcrw1?title=任务下达'
        url = "http://10.221.29.4:17001/wrygj/index.html#/sso?title=任务下达&token=" + this.token;
      } else if (flag === "执法监测") {
        url = "http://10.221.29.4:17001/wrygj/index.html#/sso?title=执法监测&token=" + this.token;
      } else if (flag === "督办事项") {
        url = "http://10.221.29.4:17001/wrygj/index.html#/sso?title=督办事项&token=" + this.token;
      } // openBrowser(url)

    },
    handleScroll: function handleScroll(e) {
      var y = this.$refs.page.scrollTop;

      if (y > 85) {
        this.headerFixed = true;
      } else {
        this.headerFixed = false;
      }
    },
    //查询线索待办数量
    queryHandleClue: function queryHandleClue() {
      var _this9 = this;

      Object(_api_clue__WEBPACK_IMPORTED_MODULE_13__["getInHandCount"])({
        user_id: localStorage.getItem("userId")
      }).then(function (res) {
        _this9.handle = res.data.count;
      });
    },
    //得到当前组件
    getComponent: function getComponent(path) {
      var componentObj = {
        "/cityWater": _views_homePage_components_cityWater__WEBPACK_IMPORTED_MODULE_17__["default"],
        "/airWaterWarning": _views_homePage_components_airWaterWarning__WEBPACK_IMPORTED_MODULE_19__["default"],
        //水气告警信息
        "/cityAir": _views_homePage_components_cityAir__WEBPACK_IMPORTED_MODULE_18__["default"],
        //全市空气质量
        "/pollutionStatis": _views_searchComponents_components_pollution_pollutionOverview__WEBPACK_IMPORTED_MODULE_22__["default"] //排污许可污染源统计情况

      };
      var componetArr = [];

      if (path.length > 0) {
        path.forEach(function (item) {
          componetArr.push(componentObj[item]);
        });
        return componetArr;
      } else {
        return [];
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/pollution/pollutionOverview.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/searchComponents/components/pollution/pollutionOverview.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _environCode__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./environCode */ "./src/views/searchComponents/components/pollution/environCode.vue");
/* harmony import */ var _pollutionSource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pollutionSource */ "./src/views/searchComponents/components/pollution/pollutionSource.vue");
//
//
//
//
//
//
//
//
//
//
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
  name: "pollutionOverview",
  components: {
    environCode: _environCode__WEBPACK_IMPORTED_MODULE_0__["default"],
    pollutionSource: _pollutionSource__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  props: {
    detailsParameter: String
  },
  data: function data() {
    return {
      xzqh: "",
      searchObj: ''
    };
  },
  mounted: function mounted() {
    if (this.detailsParameter) {
      this.xzqh = this.detailsParameter;
    } else {
      this.searchObj = this.$store.state.searchObj;
      this.xzqh = this.searchObj.parameter;
    }
  },
  methods: {
    goPath: function goPath(title) {
      this.$router.push({
        name: 'pollutionStatisList',
        query: {
          xzqh: this.xzqh,
          xqtype: '污染源列表',
          title: title
        }
      });
    },
    showCityPollution: function showCityPollution() {
      this.$router.push({
        name: 'wholeCityPollution',
        query: {
          xzqh: this.xzqh,
          xqtype: this.xzqh + '污染源'
        }
      });
    },
    showEnvironmentCode: function showEnvironmentCode() {
      this.$router.push({
        name: 'environmentCode'
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/FloatButton.vue?vue&type=template&id=4b32b77a&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/FloatButton.vue?vue&type=template&id=4b32b77a&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      ref: "floatDrag",
      staticClass: "float-position",
      on: {
        touchmove: function ($event) {
          $event.preventDefault()
        },
        mousemove: function ($event) {
          $event.preventDefault()
        },
        mousedown: _vm.mouseDown,
        mouseup: _vm.mouseUp,
      },
    },
    [
      _c("img", {
        staticStyle: { width: "20px" },
        attrs: { src: __webpack_require__(/*! @/assets/我的80.png */ "./src/assets/我的80.png"), alt: "" },
      }),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/homePage/components/airWaterWarning.vue?vue&type=template&id=8927f626&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/homePage/components/airWaterWarning.vue?vue&type=template&id=8927f626&scoped=true& ***!
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
  return _c("div")
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/homePage/index.vue?vue&type=template&id=47d753ab&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/homePage/index.vue?vue&type=template&id=47d753ab&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
    { ref: "page", staticClass: "home-page" },
    [
      _c("div", { staticClass: "home-header" }, [
        _c(
          "div",
          { staticClass: "user-box" },
          [
            _vm.noticeNumber === 0
              ? _c("van-icon", {
                  attrs: { name: "bell", size: "16" },
                  on: { click: _vm.onMessageCenter },
                })
              : _c(
                  "van-badge",
                  { attrs: { content: _vm.noticeNumber } },
                  [
                    _c("van-icon", {
                      attrs: { name: "bell", size: "16" },
                      on: { click: _vm.onMessageCenter },
                    }),
                  ],
                  1
                ),
            _c("img", {
              staticStyle: { width: "20px", "margin-left": "10px" },
              attrs: { src: __webpack_require__(/*! @/assets/我的80.png */ "./src/assets/我的80.png"), alt: "" },
              on: { click: _vm.onFabClick },
            }),
          ],
          1
        ),
        _c("div", { staticClass: "app-name" }, [_vm._v("掌上环保")]),
        _c(
          "div",
          {
            staticClass: "fs",
            class: _vm.headerFixed ? "fixed" : "",
            staticStyle: { margin: "0 10px" },
          },
          [
            _c("van-search", {
              staticStyle: { width: "100%" },
              attrs: {
                shape: "round",
                placeholder:
                  "请输入空气质量站点名称 / 水质断面名称 / 污染源企业名称",
              },
              on: {
                focus: function ($event) {
                  return _vm.$router.push("/search")
                },
              },
              model: {
                value: _vm.searchKeyword,
                callback: function ($$v) {
                  _vm.searchKeyword = $$v
                },
                expression: "searchKeyword",
              },
            }),
          ],
          1
        ),
        _c(
          "div",
          { staticClass: "function-wrapper" },
          [
            _vm._l(_vm.menuList, function (item) {
              return _c(
                "div",
                {
                  staticClass: "function-item",
                  on: {
                    click: function ($event) {
                      return _vm.onLink(item)
                    },
                  },
                },
                [
                  item.icon
                    ? _c("img", { attrs: { src: item.icon } })
                    : _vm._e(),
                  _vm._v(" " + _vm._s(item.name) + " "),
                  item.name === "案件审批"
                    ? _c("div", { staticClass: "number" }, [
                        _c("span", [_vm._v(_vm._s(_vm.caseUndoNum))]),
                      ])
                    : _vm._e(),
                ]
              )
            }),
            _vm.moreBtnShow
              ? _c(
                  "div",
                  {
                    staticClass: "function-item",
                    on: {
                      click: function ($event) {
                        return _vm.$router.push("/commonFunction")
                      },
                    },
                  },
                  [
                    _c("img", { attrs: { src: __webpack_require__(/*! @/assets/更多.png */ "./src/assets/更多.png") } }),
                    _vm._v(" 更多 "),
                  ]
                )
              : _vm._e(),
          ],
          2
        ),
      ]),
      _vm.warningInfoShow
        ? _c("div", { staticClass: "warning-wrapper fs" }, [
            _vm._m(0),
            _c(
              "div",
              {
                staticClass: "fs",
                staticStyle: { "justify-content": "right" },
              },
              [
                _c(
                  "div",
                  {
                    staticClass: "warning-water fs",
                    on: {
                      click: function ($event) {
                        return _vm.onToSiteList(0)
                      },
                    },
                  },
                  [
                    _vm._v(" 水环境 "),
                    _c("span", { staticClass: "num" }, [
                      _vm._v(_vm._s(_vm.warningWater)),
                    ]),
                    _vm._v("个 "),
                  ]
                ),
                _c(
                  "div",
                  {
                    staticClass: "warning-water fs",
                    on: {
                      click: function ($event) {
                        return _vm.onToSiteList(1)
                      },
                    },
                  },
                  [
                    _vm._v(" 空气质量 "),
                    _c("span", { staticClass: "num" }, [
                      _vm._v(_vm._s(_vm.warningAir)),
                    ]),
                    _vm._v("个 "),
                  ]
                ),
              ]
            ),
          ])
        : _vm._e(),
      _vm._l(_vm.currentComponent, function (item, i) {
        return _c(item, { key: i, tag: "component" })
      }),
      _vm.userDeptFlag ? _c("mediaStatis") : _vm._e(),
      _vm.userDeptFlag ? _c("areaStatis") : _vm._e(),
      _c("div", { staticStyle: { "margin-bottom": "60px" } }),
      _vm._m(1),
    ],
    2
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "warning-title fs" }, [
      _c("div", { staticClass: "warning-name fs" }, [
        _c("img", {
          staticStyle: { "margin-right": "10px" },
          attrs: { src: __webpack_require__(/*! @/assets/warning.png */ "./src/assets/warning.png"), width: "14" },
        }),
        _vm._v(" 超标告警 "),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "support" }, [
      _vm._v(" @昆明市生态环境监控中心建设开发"),
      _c("br"),
      _vm._v(" 联系人：朱 "),
      _c(
        "a",
        {
          staticClass: "phone",
          attrs: { href: "javascript:openTel('15198848243')" },
        },
        [_vm._v("15198848243")]
      ),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/pollution/pollutionOverview.vue?vue&type=template&id=d01faa68&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/searchComponents/components/pollution/pollutionOverview.vue?vue&type=template&id=d01faa68&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "fs" }, [
        _c("div", { staticClass: "card-title card-title-pollute" }, [
          _vm._v(_vm._s(_vm.xzqh) + "污染源概况"),
        ]),
      ]),
      _c(
        "div",
        [
          _c("div", { staticClass: "hbm_title" }, [
            _c("span", [_vm._v("环保码")]),
            _c("span", { on: { click: _vm.showEnvironmentCode } }, [
              _vm._v("查看更多"),
            ]),
          ]),
          _c(
            "div",
            { staticStyle: { padding: "0px 8px" } },
            [_c("environ-code")],
            1
          ),
          _c("div", { staticClass: "split" }),
          _c("div", { staticClass: "hbm_title" }, [
            _c("span", [_vm._v("污染源档案")]),
            _c("span", { on: { click: _vm.showCityPollution } }, [
              _vm._v("查看更多"),
            ]),
          ]),
          _c("pollution-source"),
        ],
        1
      ),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/core-js/modules/es.array.filter.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es.array.filter.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $ = __webpack_require__(/*! ../internals/export */ "./node_modules/core-js/internals/export.js");
var $filter = __webpack_require__(/*! ../internals/array-iteration */ "./node_modules/core-js/internals/array-iteration.js").filter;
var arrayMethodHasSpeciesSupport = __webpack_require__(/*! ../internals/array-method-has-species-support */ "./node_modules/core-js/internals/array-method-has-species-support.js");

var HAS_SPECIES_SUPPORT = arrayMethodHasSpeciesSupport('filter');

// `Array.prototype.filter` method
// https://tc39.es/ecma262/#sec-array.prototype.filter
// with adding support of @@species
$({ target: 'Array', proto: true, forced: !HAS_SPECIES_SUPPORT }, {
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});


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

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/FloatButton.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/FloatButton.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\nhtml,\r\nbody {\r\n  overflow: hidden;\n}\r\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/FloatButton.vue?vue&type=style&index=1&id=4b32b77a&scoped=true&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/FloatButton.vue?vue&type=style&index=1&id=4b32b77a&scoped=true&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".float-position[data-v-4b32b77a] {\n  position: absolute;\n  right: 0;\n  top: 10px;\n  width: 60px;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/homePage/index.vue?vue&type=style&index=0&id=47d753ab&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/homePage/index.vue?vue&type=style&index=0&id=47d753ab&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @/assets/home-header2.png */ "./src/assets/home-header2.png");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! @/assets/warning-bg-left.png */ "./src/assets/warning-bg-left.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
// Module
exports.push([module.i, ".van-search[data-v-47d753ab] {\n  background: transparent;\n  padding: 10px 0;\n}\n.van-search .van-cell[data-v-47d753ab] {\n  padding: 8px 8px 8px 0;\n  font-size: 12px;\n}\n.van-search__content[data-v-47d753ab] {\n  background-color: #fff;\n  box-shadow: 0px 4px 24px #2d7b99;\n}\n.home-page[data-v-47d753ab] {\n  width: 100vw;\n  height: 100vh;\n  overflow: auto;\n  background: #f5f6f8;\n}\n.fs[data-v-47d753ab] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.home-header[data-v-47d753ab] {\n  position: relative;\n  padding-top: 10px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-repeat: no-repeat;\n  background-size: 100% 77%;\n  background-position: 0 -86%;\n}\n.home-header[data-v-47d753ab]::before {\n  content: \"\";\n  position: absolute;\n  bottom: 27%;\n  width: 100%;\n  height: 70px;\n  z-index: 0;\n  background: linear-gradient(to bottom, #7eeaf3, #f5f6f8);\n}\n.home-header .home-header-des[data-v-47d753ab] {\n  padding: 48px 24px 0;\n  color: #fff;\n}\n.home-header .home-header-des .home-header-weather[data-v-47d753ab] {\n  padding: 6px 10px;\n  background: linear-gradient(to right, rgba(255, 255, 255, 0.8), white);\n  border-radius: 10px;\n  color: #447bfc;\n  font-size: 12px;\n}\n.warning-wrapper[data-v-47d753ab] {\n  position: relative;\n  margin: 12px 12px;\n  background-color: #fff7f6;\n  height: 28px;\n  border-radius: 10px;\n}\n.warning-wrapper .warning-title[data-v-47d753ab] {\n  padding-right: 5px;\n  font-size: 12px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-size: auto 28px;\n  background-position: left center;\n  background-repeat: no-repeat;\n}\n.warning-wrapper .warning-title .warning-name[data-v-47d753ab] {\n  height: 28px;\n  padding: 5px 30px 5px 10px;\n  margin-right: 5px;\n  color: #fff;\n  font-size: 12px;\n  border-radius: 10px;\n}\n.warning-wrapper .warning-water[data-v-47d753ab] {\n  border-radius: 4px;\n  color: #f55b02;\n  font-size: 12px;\n  height: 28px;\n  padding: 0 8px;\n  background-color: rgba(254, 90, 70, 0.1);\n  margin-right: 16px;\n}\n.warning-wrapper .warning-water .num[data-v-47d753ab] {\n  padding-left: 5px;\n  color: #f55b02;\n  font-size: 15px;\n  font-weight: bold;\n}\n.line[data-v-47d753ab] {\n  position: absolute;\n  left: -15px;\n  top: 5px;\n  width: 6px;\n  height: 14px;\n  background: #588bf9;\n  border-radius: 10px;\n}\n.function-wrapper[data-v-47d753ab] {\n  position: relative;\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  z-index: 9;\n  margin: 0 13px;\n  min-height: 110px;\n  padding: 0 0 13px;\n  border: 1px solid white;\n  background: linear-gradient(to bottom, #f5fdff, white);\n  border-radius: 10px;\n}\n.function-item[data-v-47d753ab] {\n  display: flex;\n  justify-content: flex-start;\n  text-align: center;\n  flex-direction: column;\n  width: 20%;\n  font-size: 12px;\n  margin: 3px 0;\n}\n.function-item img[data-v-47d753ab] {\n  margin: 7px auto;\n  height: 28px;\n}\n.function-item .old-app-icon[data-v-47d753ab] {\n  transform: scale(1.2);\n  border-radius: 5px;\n}\n.function-item .number[data-v-47d753ab] {\n  background: red;\n  color: white;\n  width: 18px;\n  height: 18px;\n  border-radius: 18px;\n  line-height: 18px;\n  position: absolute;\n  margin-left: 40px;\n}\n.monitor-title[data-v-47d753ab] {\n  position: relative;\n  padding: 14px 22px 0;\n  border-top: 8px solid #f5f6f8;\n  font-size: 20px;\n  color: #121236;\n}\n.fixed[data-v-47d753ab] {\n  position: fixed;\n  top: 0;\n  z-index: 999;\n  left: 0;\n  right: 0;\n  background-color: #f5f6f8;\n  padding: 0 10px;\n  margin: 0 !important;\n  box-shadow: 0px 2px 5px rgba(0, 29, 176, 0.2);\n}\n.fixed .van-search__content[data-v-47d753ab] {\n  background-color: #fff;\n  box-shadow: none;\n  border: 1px solid rgba(18, 18, 54, 0.5);\n  box-sizing: content-box;\n}\n.support[data-v-47d753ab] {\n  position: fixed;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  padding: 8px;\n  text-align: center;\n  background-color: white;\n  box-shadow: -4px 0px 24px rgba(0, 0, 0, 0.05);\n  font-size: 12px;\n  color: rgba(18, 18, 54, 0.5);\n  z-index: 99;\n}\n.support .phone[data-v-47d753ab] {\n  color: #447bfc;\n  text-decoration: underline;\n}\n.app-name[data-v-47d753ab] {\n  padding-top: 40px;\n  padding-left: 30px;\n  font-size: 22px;\n  color: #fff;\n}\n.user-box[data-v-47d753ab] {\n  position: absolute;\n  top: 17px;\n  right: 21px;\n  color: #fff;\n  display: flex;\n  align-items: center;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/pollution/pollutionOverview.vue?vue&type=style&index=0&id=d01faa68&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/searchComponents/components/pollution/pollutionOverview.vue?vue&type=style&index=0&id=d01faa68&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".hbm_title[data-v-d01faa68] {\n  display: flex;\n  padding: 10px 10px 8px;\n}\n.hbm_title > span[data-v-d01faa68] {\n  font-size: 14px;\n  font-weight: bold;\n}\n.hbm_title > span[data-v-d01faa68]:last-child {\n  margin-left: auto;\n  font-size: 12px;\n  color: rgba(18, 18, 54, 0.5);\n}\n.split[data-v-d01faa68] {\n  height: 4px;\n  opacity: 0.5;\n  background: #dfe4ed;\n  margin: 10px 0px 0px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/FloatButton.vue?vue&type=style&index=0&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--7-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/FloatButton.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FloatButton.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/FloatButton.vue?vue&type=style&index=0&lang=css&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("8a02ba7e", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/FloatButton.vue?vue&type=style&index=1&id=4b32b77a&scoped=true&lang=scss&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/common/FloatButton.vue?vue&type=style&index=1&id=4b32b77a&scoped=true&lang=scss& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FloatButton.vue?vue&type=style&index=1&id=4b32b77a&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/FloatButton.vue?vue&type=style&index=1&id=4b32b77a&scoped=true&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("218c94b2", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/homePage/index.vue?vue&type=style&index=0&id=47d753ab&scoped=true&lang=scss&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/homePage/index.vue?vue&type=style&index=0&id=47d753ab&scoped=true&lang=scss& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=47d753ab&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/homePage/index.vue?vue&type=style&index=0&id=47d753ab&scoped=true&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("17faff52", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/pollution/pollutionOverview.vue?vue&type=style&index=0&id=d01faa68&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/searchComponents/components/pollution/pollutionOverview.vue?vue&type=style&index=0&id=d01faa68&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pollutionOverview.vue?vue&type=style&index=0&id=d01faa68&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/pollution/pollutionOverview.vue?vue&type=style&index=0&id=d01faa68&lang=scss&scoped=true&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("153ff83a", content, false, {"sourceMap":false,"shadowMode":false});
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

/***/ "./src/api/clue.js":
/*!*************************!*\
  !*** ./src/api/clue.js ***!
  \*************************/
/*! exports provided: getInHandCount, getInHandCheckList, getClueDetail, getMineClueList, leaderCheck, hbmLeaderCheck, leaderCheckTwo, deptApproval, queryLeaderList, queryDepartmentList, queryDeptPersonList, queryLawList, broanchDistribute, saveCheckRecord, uploadFiles, addVerify, broanchVerify, finishFlow, hbmFinishFlow, feedBack, getXs, xsDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInHandCount", function() { return getInHandCount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getInHandCheckList", function() { return getInHandCheckList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getClueDetail", function() { return getClueDetail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMineClueList", function() { return getMineClueList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leaderCheck", function() { return leaderCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hbmLeaderCheck", function() { return hbmLeaderCheck; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leaderCheckTwo", function() { return leaderCheckTwo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deptApproval", function() { return deptApproval; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryLeaderList", function() { return queryLeaderList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryDepartmentList", function() { return queryDepartmentList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryDeptPersonList", function() { return queryDeptPersonList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "queryLawList", function() { return queryLawList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "broanchDistribute", function() { return broanchDistribute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveCheckRecord", function() { return saveCheckRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadFiles", function() { return uploadFiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addVerify", function() { return addVerify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "broanchVerify", function() { return broanchVerify; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "finishFlow", function() { return finishFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hbmFinishFlow", function() { return hbmFinishFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "feedBack", function() { return feedBack; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getXs", function() { return getXs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "xsDetail", function() { return xsDetail; });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./request */ "./src/api/request.js");

/**
 * 查询待办数量
 * */

function getInHandCount(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/manage/qr_clue/user_count',
    method: 'get',
    params: data
  });
} //待办事项--待办审核列表

function getInHandCheckList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/manage/qr_clue/audit_list',
    method: 'get',
    params: data
  });
} //线索详情

function getClueDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/manage/qr_clue/one_detail',
    method: 'get',
    params: data
  });
} //我的审批列表

function getMineClueList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/manage/qr_clue/list',
    method: 'get',
    params: data
  });
} // 流程1：分管局长审批

var leaderCheck = function leaderCheck(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/manage/qr_clue/one_leader_approve',
    method: 'post',
    data: data
  });
}; // 闭环：分管局长审批

var hbmLeaderCheck = function hbmLeaderCheck(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/qr_clue/one_leader_approve',
    method: 'post',
    data: data
  });
}; // 流程2：分管局长审批

var leaderCheckTwo = function leaderCheckTwo(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/manage/qr_clue/two_leader_approve',
    method: 'post',
    data: data
  });
}; // 流程2：对口业务部门审核

var deptApproval = function deptApproval(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/manage/qr_clue/manage_dept_examine',
    method: 'post',
    data: data
  });
}; // 分管领导--下拉框

var queryLeaderList = function queryLeaderList() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/manage/qr_clue/user_info',
    method: 'get',
    params: {}
  });
}; //分发部门下拉

var queryDepartmentList = function queryDepartmentList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/manage/qr_clue/distribution_dept',
    method: 'get',
    params: data
  });
}; //分发部门--人员下拉

var queryDeptPersonList = function queryDeptPersonList(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/manage/qr_clue/distribution_user',
    method: 'get',
    params: data
  });
}; //执法支队人员下拉

var queryLawList = function queryLawList() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/manage/qr_clue/detachment_user',
    method: 'get',
    params: {}
  });
}; // 支队分发

var broanchDistribute = function broanchDistribute(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/manage/qr_clue/distribution',
    method: 'post',
    data: data
  });
}; //保存现场监查记录

var saveCheckRecord = function saveCheckRecord(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/manage/qr_clue/record_examination',
    method: 'post',
    data: data
  });
}; //上传附件

function uploadFiles(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: "/minio/upload",
    method: "post",
    headers: {
      "content-type": "multipart/form-data"
    },
    data: data
  });
} //新增核实信息

var addVerify = function addVerify(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/manage/qr_clue/checking',
    method: 'post',
    data: data
  });
}; //支队核实

var broanchVerify = function broanchVerify(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/manage/qr_clue/verify',
    method: 'post',
    data: data
  });
}; //办结

var finishFlow = function finishFlow(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/manage/qr_clue/completion',
    method: 'post',
    data: data
  });
}; // 闭环：分管局长审批

var hbmFinishFlow = function hbmFinishFlow(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/qr_clue/completion',
    method: 'post',
    data: data
  });
}; //整改情况反馈

var feedBack = function feedBack(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/health/qr_clue/rectification',
    method: 'post',
    data: data
  });
}; //线索列表

var getXs = function getXs(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/manage/qr_clue/clue_list',
    method: 'get',
    params: data
  });
}; //线索详情

var xsDetail = function xsDetail(data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/manage/qr_clue/detail',
    method: 'get',
    params: data
  });
};

/***/ }),

/***/ "./src/assets/home-header2.png":
/*!*************************************!*\
  !*** ./src/assets/home-header2.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/home-header2.png";

/***/ }),

/***/ "./src/assets/warning-bg-left.png":
/*!****************************************!*\
  !*** ./src/assets/warning-bg-left.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/warning-bg-left.png";

/***/ }),

/***/ "./src/assets/warning.png":
/*!********************************!*\
  !*** ./src/assets/warning.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAYAAAByDd+UAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAHkSURBVEiJrZW9bhRBEIS/sngNnsK+s2xjJJ4BISFiBAgwAdZBCDm+4ywkJEgAkRDzBCTG9tnnlICc1yiCmzXL3szsjvdGau1fdVdX9YwWCpftddsXth+V5gKsXSFHITZWRhhUnLfkKZH71PZeESGwHpIfRL6pFk2yIbAHDDPNxpfteWpWtge2B5H3X23/tr2Zqpub4UcWKpaslXQm6SySI2Am6TRTt3wF6660FOY0lzTPEAxYzGUAbPJvhrNwfZdTZXsLQNKxwm4UcAF8kHTeAD8BHvP/ZonFDDiUdNLI3wf2A+a2bG8AD0P3Au5X87H9qaGoS0wlvY2QjSUdXG7tYNtA0vvw/DnYWEKmhXO6HmpsA9uSDiqe1OEdAl8yRU/DdSvxfSJpHKudIvzVouIe8K0FM5H0pln7WkLdGulChwGaw0SFVEkp5an5TFuIqtiJFV5SCDzLdH+30WyOcLcrYarAiaTjGu5O7X4UFLXaWkI4vQTUiG2PgBuJnM6EMbue267ux5J+2t4BXmSa7KWwbtkkYEcZfG+F9Z16FNTtlhLGjkWXLQ/wvSOut8Ij2y/bXCglbDtfNwuc6K2wJJYJwz+LGmBVZLL9ql5b0mvZ/tOSuIoGqnVL4SdJ40Pf56idkn78BdHwuyudBj+rAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/我的80.png":
/*!*****************************!*\
  !*** ./src/assets/我的80.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAH/SURBVHic7ZpBdsMgDERFL1ZyspKTmZxsunD8XpPn1k0QA4b5u2wQGksKCJkJIYQQQgghhBBzEVpvYA8A8cfPaGbZzCyEkPm7OQkAIoAFxyQAqfV+u+EF4XbFbL3/ptyjqZTU2o8mFETdHktrf6jAJ/LmFLGSeBuJ7Q/9GAMAlU1cmMedD5YhszX6CGa+CDb4YD2usIgsv5gRGIm2aFFIq4GE2vdACIHiG7UGMmGlMUVAZk1iM2wEGqnmjiwghZEFzAwjFAFHboQyIzATbdE+2qgpfGUZYgpIc2pY4NtE/Q1qX5CdwowovBFstAODNVSbUEnE1NovKs4izvEe8oyTiKm1H815U8gFA3d5XgZry/9IyKU34bocLjLb7yGOfKeelmYReI+waGafhUvdzMxCCKlwnf5B2STWf1gw4r8yQbhnxpkhRN2r26GQrf0vorF4G6m1Dm+BPsTbONdVD32Jt5Fq+Op+jMF6POn1i7uPvtVoqMYKa3rR9+gb+kzdZ6Knz6O+yv2FaxS61kCAO8JWgFstdItAnPW8VciMKWzmmMazCuiGp4ClbSkm0WshRWAhswqYvRbyFPBMw0Nu4x+zRmCf4BxXueTpc41uzGL9NhRyCOHiuaB7Ct832GM9vHqLZ1bxWROPz5axlp0Dsq1/GFmP8kIIIYQQQgghhOiCbxC12OjVmqJMAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/assets/更多.png":
/*!***************************!*\
  !*** ./src/assets/更多.png ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAsCAYAAAAehFoBAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAGTSURBVFiF7Zm9S8QwGId/6ddBuGxB6Lk4uTmIg0P//pvd3bUOdcqR4XpQh5d6rU2VfAmFPGMoT96+KeXtrwwApGwE0NcAE7BmUEB/6rqX97Ur/PwAcG5Hfy7l4wFgdwDbucnYDsgF5zdM6w9luoLzw4O7HyD/rdD67TMDyr27aEpVm1apISFgQspGZO7HtISO/ifmG3ElCymLjxYbK3hzHU4FxycVHJtUcGxSwbHZYsGDcSR0oeuOBlc4P8BVBvSnMLJza14vV9ZtGVTXHVVGk/zaZjYy8xcHdd3fP944my6b59m/MT8KS2L7E4ktwIBpbgDYf5Ta5BL+/pxkl3vKDVyyA5tcwt9fAFoAlb1nQVUDWHR5nktQt+y85Z5OpaqlbFQRMjeQshHLd+YY1FzjJlsncPl+jP5h+PELauYNSLlEfFLBsUkFxyYVHJtUcGy2WHDI3MDE6Hf7WzWf9rgqaNyrAvxJotxguV62NG0xIeXzk88OQXOJtcAkXC5RvAKTXILmTm3Zaa6uRf2Om5/2mPq/ADiBrX5nQ19iAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/components/common/FloatButton.vue":
/*!***********************************************!*\
  !*** ./src/components/common/FloatButton.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _FloatButton_vue_vue_type_template_id_4b32b77a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FloatButton.vue?vue&type=template&id=4b32b77a&scoped=true& */ "./src/components/common/FloatButton.vue?vue&type=template&id=4b32b77a&scoped=true&");
/* harmony import */ var _FloatButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FloatButton.vue?vue&type=script&lang=js& */ "./src/components/common/FloatButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _FloatButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FloatButton.vue?vue&type=style&index=0&lang=css& */ "./src/components/common/FloatButton.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _FloatButton_vue_vue_type_style_index_1_id_4b32b77a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FloatButton.vue?vue&type=style&index=1&id=4b32b77a&scoped=true&lang=scss& */ "./src/components/common/FloatButton.vue?vue&type=style&index=1&id=4b32b77a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");







/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_4__["default"])(
  _FloatButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _FloatButton_vue_vue_type_template_id_4b32b77a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _FloatButton_vue_vue_type_template_id_4b32b77a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "4b32b77a",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/common/FloatButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/common/FloatButton.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./src/components/common/FloatButton.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FloatButton.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/FloatButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/common/FloatButton.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************!*\
  !*** ./src/components/common/FloatButton.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--7-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--7-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--7-oneOf-1-2!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FloatButton.vue?vue&type=style&index=0&lang=css& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/FloatButton.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatButton_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/common/FloatButton.vue?vue&type=style&index=1&id=4b32b77a&scoped=true&lang=scss&":
/*!*********************************************************************************************************!*\
  !*** ./src/components/common/FloatButton.vue?vue&type=style&index=1&id=4b32b77a&scoped=true&lang=scss& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatButton_vue_vue_type_style_index_1_id_4b32b77a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FloatButton.vue?vue&type=style&index=1&id=4b32b77a&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/FloatButton.vue?vue&type=style&index=1&id=4b32b77a&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatButton_vue_vue_type_style_index_1_id_4b32b77a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatButton_vue_vue_type_style_index_1_id_4b32b77a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatButton_vue_vue_type_style_index_1_id_4b32b77a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatButton_vue_vue_type_style_index_1_id_4b32b77a_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/components/common/FloatButton.vue?vue&type=template&id=4b32b77a&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./src/components/common/FloatButton.vue?vue&type=template&id=4b32b77a&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatButton_vue_vue_type_template_id_4b32b77a_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./FloatButton.vue?vue&type=template&id=4b32b77a&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/common/FloatButton.vue?vue&type=template&id=4b32b77a&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatButton_vue_vue_type_template_id_4b32b77a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_FloatButton_vue_vue_type_template_id_4b32b77a_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/homePage/components/airWaterWarning.vue":
/*!***********************************************************!*\
  !*** ./src/views/homePage/components/airWaterWarning.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _airWaterWarning_vue_vue_type_template_id_8927f626_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./airWaterWarning.vue?vue&type=template&id=8927f626&scoped=true& */ "./src/views/homePage/components/airWaterWarning.vue?vue&type=template&id=8927f626&scoped=true&");
/* harmony import */ var _airWaterWarning_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./airWaterWarning.vue?vue&type=script&lang=js& */ "./src/views/homePage/components/airWaterWarning.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _airWaterWarning_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _airWaterWarning_vue_vue_type_template_id_8927f626_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _airWaterWarning_vue_vue_type_template_id_8927f626_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8927f626",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/homePage/components/airWaterWarning.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/homePage/components/airWaterWarning.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./src/views/homePage/components/airWaterWarning.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airWaterWarning_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../node_modules/babel-loader/lib!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./airWaterWarning.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/homePage/components/airWaterWarning.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airWaterWarning_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/homePage/components/airWaterWarning.vue?vue&type=template&id=8927f626&scoped=true&":
/*!******************************************************************************************************!*\
  !*** ./src/views/homePage/components/airWaterWarning.vue?vue&type=template&id=8927f626&scoped=true& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airWaterWarning_vue_vue_type_template_id_8927f626_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./airWaterWarning.vue?vue&type=template&id=8927f626&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/homePage/components/airWaterWarning.vue?vue&type=template&id=8927f626&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airWaterWarning_vue_vue_type_template_id_8927f626_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_airWaterWarning_vue_vue_type_template_id_8927f626_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/homePage/index.vue":
/*!**************************************!*\
  !*** ./src/views/homePage/index.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_47d753ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=47d753ab&scoped=true& */ "./src/views/homePage/index.vue?vue&type=template&id=47d753ab&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/homePage/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_47d753ab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=47d753ab&scoped=true&lang=scss& */ "./src/views/homePage/index.vue?vue&type=style&index=0&id=47d753ab&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_47d753ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_47d753ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "47d753ab",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/homePage/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/homePage/index.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./src/views/homePage/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/homePage/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/homePage/index.vue?vue&type=style&index=0&id=47d753ab&scoped=true&lang=scss&":
/*!************************************************************************************************!*\
  !*** ./src/views/homePage/index.vue?vue&type=style&index=0&id=47d753ab&scoped=true&lang=scss& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_47d753ab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=47d753ab&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/homePage/index.vue?vue&type=style&index=0&id=47d753ab&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_47d753ab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_47d753ab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_47d753ab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_47d753ab_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/homePage/index.vue?vue&type=template&id=47d753ab&scoped=true&":
/*!*********************************************************************************!*\
  !*** ./src/views/homePage/index.vue?vue&type=template&id=47d753ab&scoped=true& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_47d753ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=47d753ab&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/homePage/index.vue?vue&type=template&id=47d753ab&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_47d753ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_47d753ab_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/searchComponents/components/pollution/pollutionOverview.vue":
/*!*******************************************************************************!*\
  !*** ./src/views/searchComponents/components/pollution/pollutionOverview.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _pollutionOverview_vue_vue_type_template_id_d01faa68_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pollutionOverview.vue?vue&type=template&id=d01faa68&scoped=true& */ "./src/views/searchComponents/components/pollution/pollutionOverview.vue?vue&type=template&id=d01faa68&scoped=true&");
/* harmony import */ var _pollutionOverview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pollutionOverview.vue?vue&type=script&lang=js& */ "./src/views/searchComponents/components/pollution/pollutionOverview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _pollutionOverview_vue_vue_type_style_index_0_id_d01faa68_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pollutionOverview.vue?vue&type=style&index=0&id=d01faa68&lang=scss&scoped=true& */ "./src/views/searchComponents/components/pollution/pollutionOverview.vue?vue&type=style&index=0&id=d01faa68&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _pollutionOverview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _pollutionOverview_vue_vue_type_template_id_d01faa68_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _pollutionOverview_vue_vue_type_template_id_d01faa68_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "d01faa68",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/searchComponents/components/pollution/pollutionOverview.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/searchComponents/components/pollution/pollutionOverview.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./src/views/searchComponents/components/pollution/pollutionOverview.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionOverview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pollutionOverview.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/pollution/pollutionOverview.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionOverview_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/searchComponents/components/pollution/pollutionOverview.vue?vue&type=style&index=0&id=d01faa68&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************!*\
  !*** ./src/views/searchComponents/components/pollution/pollutionOverview.vue?vue&type=style&index=0&id=d01faa68&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionOverview_vue_vue_type_style_index_0_id_d01faa68_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pollutionOverview.vue?vue&type=style&index=0&id=d01faa68&lang=scss&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/pollution/pollutionOverview.vue?vue&type=style&index=0&id=d01faa68&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionOverview_vue_vue_type_style_index_0_id_d01faa68_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionOverview_vue_vue_type_style_index_0_id_d01faa68_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionOverview_vue_vue_type_style_index_0_id_d01faa68_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionOverview_vue_vue_type_style_index_0_id_d01faa68_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/searchComponents/components/pollution/pollutionOverview.vue?vue&type=template&id=d01faa68&scoped=true&":
/*!**************************************************************************************************************************!*\
  !*** ./src/views/searchComponents/components/pollution/pollutionOverview.vue?vue&type=template&id=d01faa68&scoped=true& ***!
  \**************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionOverview_vue_vue_type_template_id_d01faa68_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./pollutionOverview.vue?vue&type=template&id=d01faa68&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/searchComponents/components/pollution/pollutionOverview.vue?vue&type=template&id=d01faa68&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionOverview_vue_vue_type_template_id_d01faa68_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_pollutionOverview_vue_vue_type_template_id_d01faa68_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL2NvbXBvbmVudHMvY29tbW9uL0Zsb2F0QnV0dG9uLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2hvbWVQYWdlL2NvbXBvbmVudHMvYWlyV2F0ZXJXYXJuaW5nLnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2hvbWVQYWdlL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL3NlYXJjaENvbXBvbmVudHMvY29tcG9uZW50cy9wb2xsdXRpb24vcG9sbHV0aW9uT3ZlcnZpZXcudnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9GbG9hdEJ1dHRvbi52dWU/NTgxMyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvaG9tZVBhZ2UvY29tcG9uZW50cy9haXJXYXRlcldhcm5pbmcudnVlPzdjYzIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2hvbWVQYWdlL2luZGV4LnZ1ZT8zMGExIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zZWFyY2hDb21wb25lbnRzL2NvbXBvbmVudHMvcG9sbHV0aW9uL3BvbGx1dGlvbk92ZXJ2aWV3LnZ1ZT8zZGUyIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuYXJyYXkuZmlsdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXMuc3RyaW5nLnNwbGl0LmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9GbG9hdEJ1dHRvbi52dWU/YWYwNSIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vRmxvYXRCdXR0b24udnVlP2M4MTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2hvbWVQYWdlL2luZGV4LnZ1ZT83ZWI1Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zZWFyY2hDb21wb25lbnRzL2NvbXBvbmVudHMvcG9sbHV0aW9uL3BvbGx1dGlvbk92ZXJ2aWV3LnZ1ZT83NjllIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9GbG9hdEJ1dHRvbi52dWU/Y2VjMCIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vRmxvYXRCdXR0b24udnVlPzg4ZGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2hvbWVQYWdlL2luZGV4LnZ1ZT84MjM2Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9zZWFyY2hDb21wb25lbnRzL2NvbXBvbmVudHMvcG9sbHV0aW9uL3BvbGx1dGlvbk92ZXJ2aWV3LnZ1ZT8xZGI3Iiwid2VicGFjazovLy8uL3NyYy9hcGkvY2FzZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBpL2NsdWUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9ob21lLWhlYWRlcjIucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvd2FybmluZy1iZy1sZWZ0LnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL3dhcm5pbmcucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMv5oiR55qEODAucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMv5pu05aSaLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vRmxvYXRCdXR0b24udnVlIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9GbG9hdEJ1dHRvbi52dWU/NDMxNyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9jb21tb24vRmxvYXRCdXR0b24udnVlPzgwNTkiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvY29tbW9uL0Zsb2F0QnV0dG9uLnZ1ZT80MGU1Iiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2NvbW1vbi9GbG9hdEJ1dHRvbi52dWU/YWRiOSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvaG9tZVBhZ2UvY29tcG9uZW50cy9haXJXYXRlcldhcm5pbmcudnVlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9ob21lUGFnZS9jb21wb25lbnRzL2FpcldhdGVyV2FybmluZy52dWU/ODk0MyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvaG9tZVBhZ2UvY29tcG9uZW50cy9haXJXYXRlcldhcm5pbmcudnVlP2NhOGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2hvbWVQYWdlL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvaG9tZVBhZ2UvaW5kZXgudnVlPzgxMDEiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2hvbWVQYWdlL2luZGV4LnZ1ZT84NjVjIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9ob21lUGFnZS9pbmRleC52dWU/N2JkOCIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3Mvc2VhcmNoQ29tcG9uZW50cy9jb21wb25lbnRzL3BvbGx1dGlvbi9wb2xsdXRpb25PdmVydmlldy52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3NlYXJjaENvbXBvbmVudHMvY29tcG9uZW50cy9wb2xsdXRpb24vcG9sbHV0aW9uT3ZlcnZpZXcudnVlPzBmNDciLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3NlYXJjaENvbXBvbmVudHMvY29tcG9uZW50cy9wb2xsdXRpb24vcG9sbHV0aW9uT3ZlcnZpZXcudnVlPzllNTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL3NlYXJjaENvbXBvbmVudHMvY29tcG9uZW50cy9wb2xsdXRpb24vcG9sbHV0aW9uT3ZlcnZpZXcudnVlP2E3YTMiXSwibmFtZXMiOlsicXVlcnlTZWxlY3RCeUlkIiwiaWQiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwiZGlzY3Vzc1NlbGVjdEJ5Q2FzZUlkIiwic3VwZXJ2aXNlU2VsZWN0QnlDYXNlSWQiLCJsZWdhbFNlbGVjdEJ5Q2FzZUlkIiwic2VsZWN0QnlDYXNlSWQiLCJwdW5pc2hTZWxlY3RCeUNhc2VJZCIsImdldEhlYXJpbmdCeUNhc2VJZCIsInN0YWdlU2VsZWN0QnlDYXNlSWQiLCJnZXRVc2VySW5mbyIsImRhdGEiLCJwYXJhbXMiLCJnZXRVc2VyTGlzdCIsInF1ZXJ5VHlwZUNhc2VMaXN0IiwiYWRkUmVwb3J0IiwiZ2V0UmVwb3J0RGV0YWlsIiwic2lnblJlcG9ydCIsInR5cGUiLCJjb3VudEluZm8iLCJnZXRBbGxSZXBvcnQiLCJjaGVja1B3ZCIsInF1ZXJ5RGl2aXNpb24iLCJnZXRTdXBlckJhdGNoIiwiZ2V0U3VwZXJMaXN0IiwiaW5mbyIsImdldFN1cGVyTGlzdERldGFpbCIsImJvYXJkIiwiY291bnR5TGlzdCIsImluZm9MaXN0IiwiYmFzZUluZm8iLCJkaXN0cmlidXRlIiwiaGFuZGxlIiwiZmluYWwiLCJjb21wYW55IiwicHJvYmxlbSIsInRpbWVHcm91cCIsInVuaXQiLCJwcm9ibGVtTGlzdCIsImdldEluSGFuZENvdW50IiwiZ2V0SW5IYW5kQ2hlY2tMaXN0IiwiZ2V0Q2x1ZURldGFpbCIsImdldE1pbmVDbHVlTGlzdCIsImxlYWRlckNoZWNrIiwiaGJtTGVhZGVyQ2hlY2siLCJsZWFkZXJDaGVja1R3byIsImRlcHRBcHByb3ZhbCIsInF1ZXJ5TGVhZGVyTGlzdCIsInF1ZXJ5RGVwYXJ0bWVudExpc3QiLCJxdWVyeURlcHRQZXJzb25MaXN0IiwicXVlcnlMYXdMaXN0IiwiYnJvYW5jaERpc3RyaWJ1dGUiLCJzYXZlQ2hlY2tSZWNvcmQiLCJ1cGxvYWRGaWxlcyIsImhlYWRlcnMiLCJhZGRWZXJpZnkiLCJicm9hbmNoVmVyaWZ5IiwiZmluaXNoRmxvdyIsImhibUZpbmlzaEZsb3ciLCJmZWVkQmFjayIsImdldFhzIiwieHNEZXRhaWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFxQkE7QUFDQSxxQkFEQTtBQUVBO0FBQ0E7QUFDQSxrQkFEQTtBQUVBO0FBRkEsS0FEQTtBQUtBO0FBQ0Esa0JBREE7QUFFQTtBQUZBLEtBTEE7QUFTQTtBQUNBLG1CQURBO0FBRUE7QUFGQSxLQVRBO0FBYUE7QUFDQSxtQkFEQTtBQUVBO0FBRkEsS0FiQTtBQWlCQTtBQUNBLGtC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Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE0RztBQUN2QztBQUNMO0FBQ3NDOzs7QUFHdEc7QUFDbUc7QUFDbkcsZ0JBQWdCLDJHQUFVO0FBQzFCLEVBQUUsdUZBQU07QUFDUixFQUFFLHdHQUFNO0FBQ1IsRUFBRSxpSEFBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLElBQUksS0FBVSxFQUFFLFlBaUJmO0FBQ0Q7QUFDZSxnRjs7Ozs7Ozs7Ozs7O0FDdkNmO0FBQUE7QUFBQSx3Q0FBa1UsQ0FBZ0Isa1ZBQUcsRUFBQyxDOzs7Ozs7Ozs7Ozs7QUNBdFY7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoianMvNDguanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgPGRpdlxyXG4gICAgcmVmPVwiZmxvYXREcmFnXCJcclxuICAgIGNsYXNzPVwiZmxvYXQtcG9zaXRpb25cIlxyXG5cclxuICAgIEB0b3VjaG1vdmUucHJldmVudFxyXG4gICAgQG1vdXNlbW92ZS5wcmV2ZW50XHJcbiAgICBAbW91c2Vkb3duPVwibW91c2VEb3duXCJcclxuICAgIEBtb3VzZXVwPVwibW91c2VVcFwiXHJcbiAgPjwhLS1cclxuICAgICAgOnN0eWxlPVwie1xyXG4gICAgICBsZWZ0OiBsZWZ0ICsgJ3B4JyxcclxuICAgICAgdG9wOiB0b3AgKyAncHgnLFxyXG4gICAgICByaWdodDogcmlnaHQgKyAncHggIWltcG9ydGFudCcsXHJcbiAgICAgIHpJbmRleDogekluZGV4LFxyXG4gICAgfVwiLS0+XHJcbiAgICA8aW1nIHNyYz1cIkAvYXNzZXRzL+aIkeeahDgwLnBuZ1wiIGFsdD1cIlwiIHN0eWxlPVwid2lkdGg6MjBweFwiIC8+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJGbG9hdEJ1dHRvblwiLFxyXG4gIHByb3BzOiB7XHJcbiAgICBkaXN0YW5jZVJpZ2h0OiB7XHJcbiAgICAgIHR5cGU6IE51bWJlcixcclxuICAgICAgZGVmYXVsdDogMTYsXHJcbiAgICB9LFxyXG4gICAgZGlzdGFuY2VCb3R0b206IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICBkZWZhdWx0OiAxMDAsXHJcbiAgICB9LFxyXG4gICAgaXNTY3JvbGxIaWRkZW46IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgZGVmYXVsdDogZmFsc2UsXHJcbiAgICB9LFxyXG4gICAgaXNDYW5EcmFnZ2FibGU6IHtcclxuICAgICAgdHlwZTogQm9vbGVhbixcclxuICAgICAgZGVmYXVsdDogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB6SW5kZXg6IHtcclxuICAgICAgdHlwZTogTnVtYmVyLFxyXG4gICAgICBkZWZhdWx0OiA1MCxcclxuICAgIH0sXHJcbiAgICB2YWx1ZToge1xyXG4gICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgIGRlZmF1bHQ6IFwi5oKs5rWu55CD77yBXCIsXHJcbiAgICB9LFxyXG4gIH0sXHJcblxyXG4gIC8vZGF0YSDln59cclxuICBkYXRhKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2xpZW50V2lkdGg6IG51bGwsXHJcbiAgICAgIGNsaWVudEhlaWdodDogbnVsbCxcclxuICAgICAgbGVmdDogbnVsbCxcclxuICAgICAgdG9wOiBudWxsLFxyXG4gICAgICByaWdodDogbnVsbCxcclxuICAgICAgdGltZXI6IG51bGwsXHJcbiAgICAgIGN1cnJlbnRUb3A6IDAsXHJcbiAgICAgIG1vdXNlZG93blg6IDAsXHJcbiAgICAgIG1vdXNlZG93blk6IDAsXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgY3JlYXRlZCgpIHtcclxuICAgIHRoaXMuY2xpZW50V2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICB0aGlzLmNsaWVudEhlaWdodCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQ7XHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgdGhpcy5pc0NhbkRyYWdnYWJsZSAmJlxyXG4gICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5mbG9hdERyYWcgPSB0aGlzLiRyZWZzLmZsb2F0RHJhZztcclxuICAgICAgICAvLyDojrflj5blhYPntKDkvY3nva7lsZ7mgKdcclxuICAgICAgICB0aGlzLmZsb2F0RHJhZ0RvbSA9IHRoaXMuZmxvYXREcmFnLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgICAgIC8vIOiuvue9ruWIneWni+S9jee9rlxyXG4gICAgICAgIC8vIHRoaXMubGVmdCA9IHRoaXMuY2xpZW50V2lkdGggLSB0aGlzLmZsb2F0RHJhZ0RvbS53aWR0aCAtIHRoaXMuZGlzdGFuY2VSaWdodDtcclxuICAgICAgICB0aGlzLnJpZ2h0ID0gMDtcclxuICAgICAgICB0aGlzLnRvcCA9XHJcbiAgICAgICAgICB0aGlzLmNsaWVudEhlaWdodCAtIHRoaXMuZmxvYXREcmFnRG9tLmhlaWdodCAtIHRoaXMuZGlzdGFuY2VCb3R0b207XHJcbiAgICAgICAgLy8gdGhpcy5pbml0RHJhZ2dhYmxlKCk7XHJcbiAgICAgIH0pO1xyXG4gICAgLy8gdGhpcy5pc1Njcm9sbEhpZGRlbiAmJiB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5oYW5kbGVTY3JvbGwpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgdGhpcy5oYW5kbGVSZXNpemUpO1xyXG4gIH0sXHJcbiAgYmVmb3JlVW5tb3VudCgpIHtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHRoaXMuaGFuZGxlU2Nyb2xsKTtcclxuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIHRoaXMuaGFuZGxlUmVzaXplKTtcclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIC8qKlxyXG4gICAgICog56qX5Y+jcmVzaXpl55uR5ZCsXHJcbiAgICAgKi9cclxuICAgIGhhbmRsZVJlc2l6ZSgpIHtcclxuICAgICAgLy8gdGhpcy5jbGllbnRXaWR0aCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aDtcclxuICAgICAgLy8gdGhpcy5jbGllbnRIZWlnaHQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyh3aW5kb3cuaW5uZXJXaWR0aCk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCk7XHJcblxyXG4gICAgICB0aGlzLmNoZWNrRHJhZ2dhYmxlUG9zaXRpb24oKTtcclxuICAgIH0sXHJcbiAgICAvKipcclxuICAgICAqIOWIneWni+WMlmRyYWdnYWJsZVxyXG4gICAgICovXHJcbiAgICBpbml0RHJhZ2dhYmxlKCkge1xyXG4gICAgICB0aGlzLmZsb2F0RHJhZy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLnRvdWNoZVN0YXJ0KTtcclxuICAgICAgdGhpcy5mbG9hdERyYWcuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCAoZSkgPT4gdGhpcy50b3VjaE1vdmUoZSkpO1xyXG4gICAgICB0aGlzLmZsb2F0RHJhZy5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcy50b3VjaEVuZCk7XHJcbiAgICB9LFxyXG4gICAgbW91c2VEb3duKGUpIHtcclxuICAgICAgY29uc3QgZXZlbnQgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuICAgICAgdGhpcy5tb3VzZWRvd25YID0gZXZlbnQuc2NyZWVuWDtcclxuICAgICAgdGhpcy5tb3VzZWRvd25ZID0gZXZlbnQuc2NyZWVuWTtcclxuICAgICAgY29uc3QgdGhhdCA9IHRoaXM7XHJcbiAgICAgIGxldCBmbG9hdERyYWdXaWR0aCA9IHRoaXMuZmxvYXREcmFnRG9tLndpZHRoIC8gMjtcclxuICAgICAgbGV0IGZsb2F0RHJhZ0hlaWdodCA9IHRoaXMuZmxvYXREcmFnRG9tLmhlaWdodCAvIDI7XHJcbiAgICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5jYW5DbGljayA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmZsb2F0RHJhZy5zdHlsZS50cmFuc2l0aW9uID0gXCJub25lXCI7XHJcbiAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICB2YXIgZXZlbnQgPSBlIHx8IHdpbmRvdy5ldmVudDtcclxuICAgICAgICB0aGF0LmxlZnQgPSBldmVudC5jbGllbnRYIC0gZmxvYXREcmFnV2lkdGg7XHJcbiAgICAgICAgdGhhdC50b3AgPSBldmVudC5jbGllbnRZIC0gZmxvYXREcmFnSGVpZ2h0O1xyXG4gICAgICAgIGlmICh0aGF0LmxlZnQgPCAwKSB0aGF0LmxlZnQgPSAwO1xyXG4gICAgICAgIGlmICh0aGF0LnRvcCA8IDApIHRoYXQudG9wID0gMDtcclxuICAgICAgICAvLyDpvKDmoIfnp7vlh7rlj6/op4bljLrln5/lkI7nu5nmjInpkq7ov5jljp9cclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICBldmVudC5jbGllbnRZIDwgMCB8fFxyXG4gICAgICAgICAgZXZlbnQuY2xpZW50WSA+IE51bWJlcih0aGlzLmNsaWVudEhlaWdodCkgfHxcclxuICAgICAgICAgIGV2ZW50LmNsaWVudFggPiBOdW1iZXIodGhpcy5jbGllbnRXaWR0aCkgfHxcclxuICAgICAgICAgIGV2ZW50LmNsaWVudFggPCAwXHJcbiAgICAgICAgKSB7XHJcbiAgICAgICAgICB0aGlzLnJpZ2h0ID0gMDtcclxuICAgICAgICAgIHRoaXMudG9wID1cclxuICAgICAgICAgICAgdGhpcy5jbGllbnRIZWlnaHQgLSB0aGlzLmZsb2F0RHJhZ0RvbS5oZWlnaHQgLSB0aGlzLmRpc3RhbmNlQm90dG9tO1xyXG4gICAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBudWxsO1xyXG4gICAgICAgICAgdGhpcy5mbG9hdERyYWcuc3R5bGUudHJhbnNpdGlvbiA9IFwiYWxsIDAuM3NcIjtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKFxyXG4gICAgICAgICAgdGhhdC5sZWZ0ID49XHJcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGggLSBmbG9hdERyYWdXaWR0aCAqIDJcclxuICAgICAgICApIHtcclxuICAgICAgICAgIHRoYXQubGVmdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCAtIGZsb2F0RHJhZ1dpZHRoICogMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoYXQudG9wID49IHRoYXQuY2xpZW50SGVpZ2h0IC0gZmxvYXREcmFnSGVpZ2h0ICogMikge1xyXG4gICAgICAgICAgdGhhdC50b3AgPSB0aGF0LmNsaWVudEhlaWdodCAtIGZsb2F0RHJhZ0hlaWdodCAqIDI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9O1xyXG4gICAgfSxcclxuICAgIG1vdXNlVXAoZSkge1xyXG4gICAgICBjb25zdCBldmVudCA9IGUgfHwgd2luZG93LmV2ZW50O1xyXG4gICAgICAvL+WIpOaWreWPquaYr+WNlee6r+eahOeCueWHu++8jOayoeacieaLluaLvVxyXG4gICAgICBpZiAoXHJcbiAgICAgICAgdGhpcy5tb3VzZWRvd25ZID09IGV2ZW50LnNjcmVlblkgJiZcclxuICAgICAgICB0aGlzLm1vdXNlZG93blggPT0gZXZlbnQuc2NyZWVuWFxyXG4gICAgICApIHtcclxuICAgICAgICB0aGlzLiRlbWl0KFwiaGFuZGxlcGFseVwiKTtcclxuICAgICAgfVxyXG4gICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG51bGw7XHJcbiAgICAgIHRoaXMuY2hlY2tEcmFnZ2FibGVQb3NpdGlvbigpO1xyXG4gICAgICB0aGlzLmZsb2F0RHJhZy5zdHlsZS50cmFuc2l0aW9uID0gXCJhbGwgMC4zc1wiO1xyXG4gICAgfSxcclxuICAgIHRvdWNoZVN0YXJ0KCkge1xyXG4gICAgICB0aGlzLmNhbkNsaWNrID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuZmxvYXREcmFnLnN0eWxlLnRyYW5zaXRpb24gPSBcIm5vbmVcIjtcclxuICAgIH0sXHJcbiAgICB0b3VjaE1vdmUoZSkge1xyXG4gICAgICB0aGlzLmNhbkNsaWNrID0gdHJ1ZTtcclxuICAgICAgaWYgKGUudGFyZ2V0VG91Y2hlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAvLyDljZXmjIfmi5bliqhcclxuICAgICAgICBsZXQgdG91Y2ggPSBldmVudC50YXJnZXRUb3VjaGVzWzBdO1xyXG4gICAgICAgIHRoaXMubGVmdCA9IHRvdWNoLmNsaWVudFggLSB0aGlzLmZsb2F0RHJhZ0RvbS53aWR0aCAvIDI7XHJcbiAgICAgICAgdGhpcy50b3AgPSB0b3VjaC5jbGllbnRZIC0gdGhpcy5mbG9hdERyYWdEb20uaGVpZ2h0IC8gMjtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHRvdWNoRW5kKCkge1xyXG4gICAgICBpZiAoIXRoaXMuY2FuQ2xpY2spIHJldHVybjsgLy8g6Kej5Yaz54K55Ye75LqL5Lu25ZKMdG91Y2jkuovku7blhrLnqoHnmoTpl67pophcclxuICAgICAgdGhpcy5mbG9hdERyYWcuc3R5bGUudHJhbnNpdGlvbiA9IFwiYWxsIDAuM3NcIjtcclxuICAgICAgdGhpcy5jaGVja0RyYWdnYWJsZVBvc2l0aW9uKCk7XHJcbiAgICB9LFxyXG4gICAgLyoqXHJcbiAgICAgKiDliKTmlq3lhYPntKDmmL7npLrkvY3nva5cclxuICAgICAqIOWcqOeql+WPo+aUueWPmOWSjG1vdmUgZW5k5pe26LCD55SoXHJcbiAgICAgKi9cclxuICAgIGNoZWNrRHJhZ2dhYmxlUG9zaXRpb24oKSB7XHJcbiAgICAgIHRoaXMuY2xpZW50V2lkdGggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGg7XHJcbiAgICAgIHRoaXMuY2xpZW50SGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcclxuICAgICAgaWYgKHRoaXMubGVmdCArIHRoaXMuZmxvYXREcmFnRG9tLndpZHRoIC8gMiA+PSB0aGlzLmNsaWVudFdpZHRoIC8gMikge1xyXG4gICAgICAgIC8vIOWIpOaWreS9jee9ruaYr+W+gOW3puW+gOWPs+a7keWKqFxyXG4gICAgICAgIHRoaXMubGVmdCA9IHRoaXMuY2xpZW50V2lkdGggLSB0aGlzLmZsb2F0RHJhZ0RvbS53aWR0aDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmxlZnQgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnRvcCA8IDApIHtcclxuICAgICAgICAvLyDliKTmlq3mmK/lkKbotoXlh7rlsY/luZXkuIrmsr9cclxuICAgICAgICB0aGlzLnRvcCA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMudG9wICsgdGhpcy5mbG9hdERyYWdEb20uaGVpZ2h0ID49IHRoaXMuY2xpZW50SGVpZ2h0KSB7XHJcbiAgICAgICAgLy8g5Yik5pat5piv5ZCm6LaF5Ye65bGP5bmV5LiL5rK/XHJcbiAgICAgICAgdGhpcy50b3AgPSB0aGlzLmNsaWVudEhlaWdodCAtIHRoaXMuZmxvYXREcmFnRG9tLmhlaWdodDtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuPHN0eWxlPlxyXG5odG1sLFxyXG5ib2R5IHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbjwvc3R5bGU+XHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuLmZsb2F0LXBvc2l0aW9uIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgLy90b3A6IDcwJTtcclxuICB0b3A6IDEwcHg7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgaGVpZ2h0OiA2MHB4O1xyXG4gIC8vIGJhY2tncm91bmQ6ICM3MTZhZjI7XHJcbiAgLy8gYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDJweCAjYTI5OWZmO1xyXG4gIC8vIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAvLyBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxufVxyXG48L3N0eWxlPlxyXG4iLCI8dGVtcGxhdGU+XHJcbiAgPGRpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiYWlyV2F0ZXJXYXJuaW5nXCIsXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICByZXR1cm4ge307XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZCgpIHtcclxuXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge30sXHJcbiAgfTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbjwvc3R5bGU+XHJcbiIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiaG9tZS1wYWdlXCIgcmVmPVwicGFnZVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImhvbWUtaGVhZGVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJ1c2VyLWJveFwiPlxyXG4gICAgICAgIDx2YW4taWNvbiB2LWlmPVwibm90aWNlTnVtYmVyID09PSAwXCIgbmFtZT1cImJlbGxcIiBzaXplPVwiMTZcIiBAY2xpY2s9XCJvbk1lc3NhZ2VDZW50ZXJcIiAvPlxyXG4gICAgICAgIDx2YW4tYmFkZ2Ugdi1lbHNlIDpjb250ZW50PVwibm90aWNlTnVtYmVyXCI+XHJcbiAgICAgICAgICA8dmFuLWljb24gbmFtZT1cImJlbGxcIiBzaXplPVwiMTZcIiBAY2xpY2s9XCJvbk1lc3NhZ2VDZW50ZXJcIiAvPlxyXG4gICAgICAgIDwvdmFuLWJhZGdlPlxyXG4gICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMv5oiR55qEODAucG5nXCIgYWx0PVwiXCIgc3R5bGU9XCJ3aWR0aDogMjBweDsgbWFyZ2luLWxlZnQ6IDEwcHhcIiBAY2xpY2s9XCJvbkZhYkNsaWNrXCIgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDwhLS08ZmxvYXQtYnV0dG9uIEBjbGljay5uYXRpdmU9XCJvbkZhYkNsaWNrXCI+PC9mbG9hdC1idXR0b24+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJob21lLWhlYWRlci1kZXMgZnNcIj5cclxuICAgICAgICA8c3BhbiBzdHlsZT1cImZvbnQtc2l6ZTogMjhweDtcIj4mbmJzcDs8L3NwYW4+XHJcbiAgICAgIDwvZGl2Pi0tPlxyXG5cclxuICAgICAgPGRpdiBjbGFzcz1cImFwcC1uYW1lXCI+5o6M5LiK546v5L+dPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmc1wiIHN0eWxlPVwibWFyZ2luOiAwIDEwcHhcIiA6Y2xhc3M9XCJoZWFkZXJGaXhlZCA/ICdmaXhlZCcgOiAnJ1wiPlxyXG4gICAgICAgIDx2YW4tc2VhcmNoIHYtbW9kZWw9XCJzZWFyY2hLZXl3b3JkXCIgc2hhcGU9XCJyb3VuZFwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWl56m65rCU6LSo6YeP56uZ54K55ZCN56ewIC8g5rC06LSo5pat6Z2i5ZCN56ewIC8g5rGh5p+T5rqQ5LyB5Lia5ZCN56ewXCIgc3R5bGU9XCJ3aWR0aDogMTAwJVwiIEBmb2N1cz1cIiRyb3V0ZXIucHVzaCgnL3NlYXJjaCcpXCIgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZnVuY3Rpb24td3JhcHBlclwiPlxyXG4gICAgICAgIDxkaXYgdi1mb3I9XCJpdGVtIGluIG1lbnVMaXN0XCIgY2xhc3M9XCJmdW5jdGlvbi1pdGVtXCIgQGNsaWNrPVwib25MaW5rKGl0ZW0pXCI+XHJcbiAgICAgICAgICA8aW1nIHYtaWY9XCJpdGVtLmljb25cIiA6c3JjPVwiaXRlbS5pY29uXCIgLz5cclxuICAgICAgICAgIHt7IGl0ZW0ubmFtZSB9fVxyXG4gICAgICAgICAgPCEtLSDmoYjku7blvoXlrqHmibnmlbDph48gLS0+XHJcbiAgICAgICAgICA8ZGl2IHYtaWY9XCJpdGVtLm5hbWUgPT09ICfmoYjku7blrqHmibknXCIgY2xhc3M9XCJudW1iZXJcIj5cclxuICAgICAgICAgICAgPHNwYW4+e3sgY2FzZVVuZG9OdW0gfX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHYtaWY9XCJtb3JlQnRuU2hvd1wiIGNsYXNzPVwiZnVuY3Rpb24taXRlbVwiIEBjbGljaz1cIiRyb3V0ZXIucHVzaCgnL2NvbW1vbkZ1bmN0aW9uJylcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMv5pu05aSaLnBuZ1wiIC8+XHJcbiAgICAgICAgICDmm7TlpJpcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwid2FybmluZy13cmFwcGVyIGZzXCIgdi1pZj1cIndhcm5pbmdJbmZvU2hvd1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwid2FybmluZy10aXRsZSBmc1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3YXJuaW5nLW5hbWUgZnNcIj5cclxuICAgICAgICAgIDxpbWcgc3JjPVwiQC9hc3NldHMvd2FybmluZy5wbmdcIiB3aWR0aD1cIjE0XCIgc3R5bGU9XCJtYXJnaW4tcmlnaHQ6IDEwcHhcIiAvPlxyXG4gICAgICAgICAg6LaF5qCH5ZGK6K2mXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZnNcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogcmlnaHRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwid2FybmluZy13YXRlciBmc1wiIEBjbGljaz1cIm9uVG9TaXRlTGlzdCgwKVwiPlxyXG4gICAgICAgICAg5rC0546v5aKDXHJcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm51bVwiPnt7IHdhcm5pbmdXYXRlciB9fTwvc3BhblxyXG4gICAgICAgICAgPuS4qlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3YXJuaW5nLXdhdGVyIGZzXCIgQGNsaWNrPVwib25Ub1NpdGVMaXN0KDEpXCI+XHJcbiAgICAgICAgICDnqbrmsJTotKjph49cclxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwibnVtXCI+e3sgd2FybmluZ0FpciB9fTwvc3BhblxyXG4gICAgICAgICAgPuS4qlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDwhLS3lvZPliY3nlKjmiLforqLpmIXnmoTnu4Tku7bliJfooagtLT5cclxuICAgIDxjb21wb25lbnQgdi1mb3I9XCIoaXRlbSwgaSkgaW4gY3VycmVudENvbXBvbmVudFwiIDppcz1cIml0ZW1cIiA6a2V5PVwiaVwiIC8+XHJcblxyXG4gICAgPCEtLTxjaXR5QWlyLz5cclxuICAgIDxwb2xsdXRpb25PdmVydmlldy8+LS0+XHJcblxyXG4gICAgPCEtLeWxgOmihuWvvOOAgeebkeaOp+S4reW/g+OAgeWuo+aVmeS4reW/g+eahOiIhuaDhS0tPlxyXG4gICAgPG1lZGlhU3RhdGlzIHYtaWY9XCJ1c2VyRGVwdEZsYWdcIiAvPlxyXG4gICAgPGFyZWFTdGF0aXMgdi1pZj1cInVzZXJEZXB0RmxhZ1wiIC8+XHJcblxyXG4gICAgPGRpdiBzdHlsZT1cIm1hcmdpbi1ib3R0b206IDYwcHhcIj48L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzPVwic3VwcG9ydFwiPlxyXG4gICAgICBA5piG5piO5biC55Sf5oCB546v5aKD55uR5o6n5Lit5b+D5bu66K6+5byA5Y+RPGJyIC8+XHJcbiAgICAgIOiBlOezu+S6uu+8muacsSA8YSBjbGFzcz1cInBob25lXCIgaHJlZj1cImphdmFzY3JpcHQ6b3BlblRlbCgnMTUxOTg4NDgyNDMnKVwiPjE1MTk4ODQ4MjQzPC9hPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgRmxvYXRCdXR0b24gZnJvbSBcIkAvY29tcG9uZW50cy9jb21tb24vRmxvYXRCdXR0b24udnVlXCI7XHJcbmltcG9ydCB7IGxvZ2luLCBsb2dpbl9jbHVlLCB3YXJuaW5nV2F0ZXIsIHVzZXJTdWJzY3JpYmUgfSBmcm9tIFwiQC9hcGkvYXBpXCI7XHJcbmltcG9ydCB7IG92ZXJwcm9vZkFsZXJ0cyB9IGZyb20gXCJAL2FwaS9haXJfcXVhbGl0eVwiO1xyXG5pbXBvcnQgeyBnZXRJbkhhbmRDb3VudCB9IGZyb20gXCIuLi8uLi9hcGkvY2x1ZVwiO1xyXG5pbXBvcnQgeyBnZXRVc2VyQnRuTGlzdCB9IGZyb20gXCJAL2FwaS9sb2dpblwiO1xyXG5pbXBvcnQgeyBxdWVyeVR5cGVDYXNlTGlzdCB9IGZyb20gXCIuLi8uLi9hcGkvY2FzZVwiO1xyXG5pbXBvcnQgeyBvcGVuQnJvd3NlciB9IGZyb20gXCJAL3V0aWxzL3V0aWxzXCI7XHJcbmltcG9ydCBjaXR5V2F0ZXIgZnJvbSBcIkAvdmlld3MvaG9tZVBhZ2UvY29tcG9uZW50cy9jaXR5V2F0ZXJcIjtcclxuaW1wb3J0IGNpdHlBaXIgZnJvbSBcIkAvdmlld3MvaG9tZVBhZ2UvY29tcG9uZW50cy9jaXR5QWlyXCI7XHJcbmltcG9ydCBhaXJXYXRlcldhcm5pbmcgZnJvbSBcIkAvdmlld3MvaG9tZVBhZ2UvY29tcG9uZW50cy9haXJXYXRlcldhcm5pbmdcIjtcclxuaW1wb3J0IGFyZWFTdGF0aXMgZnJvbSBcIkAvdmlld3MvaG9tZVBhZ2UvY29tcG9uZW50cy9hcmVhU3RhdGlzXCI7XHJcbmltcG9ydCBtZWRpYVN0YXRpcyBmcm9tIFwiQC92aWV3cy9ob21lUGFnZS9jb21wb25lbnRzL21lZGlhU3RhdGlzXCI7XHJcblxyXG5pbXBvcnQgcG9sbHV0aW9uT3ZlcnZpZXcgZnJvbSBcIkAvdmlld3Mvc2VhcmNoQ29tcG9uZW50cy9jb21wb25lbnRzL3BvbGx1dGlvbi9wb2xsdXRpb25PdmVydmlld1wiO1xyXG5cclxuaW1wb3J0IHsgc3lzTm90aWNlSW5mbyB9IGZyb20gXCIuLi8uLi9hcGkvYXBpXCI7XHJcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBuYW1lOiBcImluZGV4XCIsXHJcbiAgY29tcG9uZW50czoge1xyXG4gICAgRmxvYXRCdXR0b24sXHJcbiAgICBjaXR5V2F0ZXIsXHJcbiAgICAvLyBiYXNpbldhdGVyU3RhbmRhcmQsXHJcbiAgICAvLyBjb21wZXRpdGlvbkdvdmVybixcclxuICAgIC8vIGNpdHlEcmluayxcclxuICAgIGNpdHlBaXIsXHJcbiAgICAvLyBhaXJDYWxlbmRhcixcclxuICAgIC8vIGJ1aWxkUHJvamVjdCxcclxuICAgIC8vIGRhbmdlcldhc3RlLFxyXG4gICAgLy8gZW52Q29tcGxhaW4sXHJcbiAgICAvLyBleGVjdXRpdmVQdW5pc2gsXHJcbiAgICAvLyBmb2N1c0NvbXBhbnksXHJcbiAgICAvLyBoZWFsdGhSZWNvcmQsXHJcbiAgICAvLyBsYXdFeGFtaW5lLFxyXG4gICAgLy8gb25saW5lTW9uaXRvcixcclxuICAgIC8vIHBvbGx1dGlvblN0YXRpcyxcclxuICAgIC8vIHJhZGlhdGVTZWN1cml0eSxcclxuICAgIC8vIHNlY25vZFBvbGx1dGUsXHJcbiAgICBhaXJXYXRlcldhcm5pbmcsXHJcbiAgICBwb2xsdXRpb25PdmVydmlldyxcclxuICAgIGFyZWFTdGF0aXMsXHJcbiAgICBtZWRpYVN0YXRpcyxcclxuICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBzZWFyY2hLZXl3b3JkOiBcIlwiLFxyXG4gICAgICB0b2tlbjogXCJcIixcclxuICAgICAgd2FybmluZ0FpcjogMCxcclxuICAgICAgd2FybmluZ1dhdGVyOiAwLFxyXG4gICAgICBoZWFkZXJGaXhlZDogZmFsc2UsXHJcbiAgICAgIGhhbmRsZTogMCxcclxuICAgICAgaW5kZXhSb2xlOiB7fSxcclxuICAgICAgbWVudUxpc3Q6IFtdLFxyXG4gICAgICB1c2VyRGVwdEZsYWc6IGZhbHNlLFxyXG4gICAgICB1c2VyRGVwdDogXCJcIixcclxuICAgICAgY3VycmVudENvbXBvbmVudDogW10sXHJcbiAgICAgIHh6cWg6IFwi5piG5piO5biCXCIsXHJcbiAgICAgIGNhc2VVbmRvTnVtOiAwLFxyXG4gICAgICBtb3JlQnRuU2hvdzogZmFsc2UsXHJcbiAgICAgIG5vdGljZU51bWJlcjogMCxcclxuICAgICAgY3VycmVudExvY2F0aW9uOiBudWxsXHJcbiAgICB9O1xyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIHdhcm5pbmdJbmZvU2hvdygpIHtcclxuICAgICAgbGV0IHRlbXBBcnIgPSB0aGlzLmN1cnJlbnRDb21wb25lbnQuZmlsdGVyKChpdGVtKSA9PiB7XHJcbiAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgIHJldHVybiBpdGVtLm5hbWUgPT09IFwiYWlyV2F0ZXJXYXJuaW5nXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHRlbXBBcnIubGVuZ3RoID4gMDtcclxuICAgIH0sXHJcbiAgfSxcclxuICBtb3VudGVkKCkge1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImRldmljZXJlYWR5XCIsIHRoaXMub25EZXZpY2VSZWFkeSwgZmFsc2UpO1xyXG4gICAgdGhpcy4kcmVmcy5wYWdlLmFkZEV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5oYW5kbGVTY3JvbGwsIHRydWUpO1xyXG5cclxuICAgIGxldCB1cmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxuICAgIGxldCBwYXJhbSA9IHVybC5zcGxpdChcIj1cIikubGVuZ3RoID4gMSA/IHVybC5zcGxpdChcIj1cIilbMV0gOiBcIlwiO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKHBhcmFtLCB0aGlzLiRzdG9yZS5zdGF0ZS50b2tlbik7XHJcblxyXG4gICAgaWYgKHBhcmFtKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHBhcmFtKTtcclxuICAgICAgaWYgKHBhcmFtLmluZGV4T2YoXCIjL1wiKSA+IC0xKSB7XHJcbiAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KFwic2V0VG9rZW5cIiwgcGFyYW0uc3BsaXQoXCIjL1wiKVswXSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KFwic2V0VG9rZW5cIiwgcGFyYW0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuJHN0b3JlLnN0YXRlLnRva2VuKSB7XHJcbiAgICAgIHRoaXMudG9rZW4gPSB0aGlzLiRzdG9yZS5zdGF0ZS50b2tlbjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudG9rZW4gPSBwYXJhbSA9PT0gXCJcIiA/IFwiXCIgOiBwYXJhbS5zcGxpdChcIiNcIilbMF07XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMudG9rZW4gPT09IG51bGwgfHwgdGhpcy50b2tlbiA9PT0gXCJcIikge1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICB0aGlzLiRzdG9yLmRpc3BhdGNoKFwidW5Vc2VyUGFzc0xvZ2luXCIsIHRoaXMuJHN0b3JlLnN0YXRlLnV1aWQpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmdldFVzZXJJbmZvKCk7XHJcbiAgICB0aGlzLnF1ZXJ5SGFuZGxlQ2x1ZSgpO1xyXG4gICAgdGhpcy5xdWVyeVdhcm5pbmdEYXRhKCk7XHJcbiAgICB0aGlzLnF1ZXJ5VXNlck5vdGljZSgpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIC8vIOazqOWGjOaOqOmAgVxyXG4gICAgICBodWF3ZWlQdXNoLnJlZ2lzdGVyKGZ1bmN0aW9uKHRva2VuKSB7XHJcbiAgICAgICAgYXhpb3Moe1xyXG4gICAgICAgICAgdXJsOiBcImh0dHA6Ly8xMC4yMjEuMjkuNDo3MzAxL2hhcm1vbnkvbm90aWNlL3NldFRva2VuXCIsXHJcbiAgICAgICAgICBtZXRob2Q6J1BPU1QnLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBwaG9uZTogJycsXHJcbiAgICAgICAgICAgIHRva2VuOiB0b2tlblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pLnRoZW4ocmVzPT57XHJcbiAgICAgICAgICAvLyBhbGVydChyZXMuZGF0YS5jb2RlKVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LCBmdW5jdGlvbihlcnIpIHtcclxuICAgICAgICAvLyBhbGVydChlcnIpO1xyXG4gICAgICB9LCBbXSk7XHJcbiAgICB9Y2F0Y2ggKGUpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gIH0sXHJcbiAgZGVzdHJveWVkKCkge1xyXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgdGhpcy5oYW5kbGVTY3JvbGwsIHRydWUpO1xyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgLy/miJHnmoTot7PovaxcclxuICAgIG9uRmFiQ2xpY2soKSB7XHJcbiAgICAgIHRoaXMuJHJvdXRlci5wdXNoKFwiL21pbmVcIik7XHJcbiAgICB9LFxyXG4gICAgLy/mtojmga/pgJrnn6Xot7PovaxcclxuICAgIG9uTWVzc2FnZUNlbnRlcigpIHtcclxuICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgIG5hbWU6IFwibWVzc2FnZUNlbnRlclwiLFxyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvbkRldmljZVJlYWR5KCkge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInV1aWRcIiwgZGV2aWNlLnV1aWQpO1xyXG5cclxuICAgICAgbGV0IF90aGlzID0gdGhpcztcclxuICAgICAgdmFyIG9wdGlvbnMgPSB7XHJcbiAgICAgICAgZW5hYmxlSGlnaEFjY3VyYWN5OiB0cnVlLCAgLy8g5piv5ZCm5L2/55SoIEdQU1xyXG4gICAgICAgIG1heGltdW1BZ2U6IDMwMDAwLCAgICAgICAgIC8vIOe8k+WtmOaXtumXtFxyXG4gICAgICAgIHRpbWVvdXQ6IDI3MDAwLCAgICAgICAgICAgIC8vIOi2heaXtuaXtumXtFxyXG4gICAgICAgIGNvb3JUeXBlOiAnd2dzODQnICAgICAgICAgLy8g6buY6K6k5pivIGdjajAy77yM5Y+v5aGrIGJkMDlsbCB3Z3M4NOOAgWdjajAy5Lul6I635Y+W55m+5bqm57uP57qs5bqm55So5LqO6K6/6Zeu55m+5bqmIEFQSVxyXG4gICAgICB9XHJcbiAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi5nZXRDdXJyZW50UG9zaXRpb24oZnVuY3Rpb24oaW5mbyl7XHJcbiAgICAgICAgX3RoaXMuY3VycmVudExvY2F0aW9uID0gaW5mbztcclxuICAgICAgfSwgZnVuY3Rpb24oZXJyb3Ipe1xyXG4gICAgICAgIGFsZXJ0KCflpLHotKUnKVxyXG4gICAgICB9LCBvcHRpb25zKTtcclxuICAgIH0sXHJcbiAgICAvL+iOt+WPlueUqOaIt+e7hOS7tuiuoumYheS/oeaBr1xyXG4gICAgcXVlcnlVc2VyU3Vic2NyaWJlKCkge1xyXG4gICAgICAvL+iOt+WPlueUqOaIt+e7hOS7tuiuoumYheS/oeaBr1xyXG4gICAgICB1c2VyU3Vic2NyaWJlKHRoaXMudG9rZW4pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGxldCB0ZW1wQ29tcG9uZW50ID0gcmVzLmRhdGEubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gaXRlbS5jb21wb25lbnRQYXRoO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuY3VycmVudENvbXBvbmVudCA9IHRoaXMuZ2V0Q29tcG9uZW50KHRlbXBDb21wb25lbnQpO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICAvL+iOt+WPlueUqOaIt+S/oeaBr1xyXG4gICAgZ2V0VXNlckluZm8oKSB7XHJcbiAgICAgIGxvZ2luKHRoaXMudG9rZW4pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGlmIChyZXMuY29kZSA9PT0gXCIyMDBcIikge1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCB0aGlzLnRva2VuKTtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidXNlck5hbWVcIiwgcmVzLmRhdGEudXNlci5tYyk7XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInVzZXJJZFwiLCByZXMuZGF0YS51c2VyLm9iamVjdGlkKTtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGVwdFwiLCByZXMuZGF0YS51c2VyLnNzYm0pO1xyXG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJkaXZpc2lvbl9jb2RlXCIsIHJlcy5kYXRhLnVzZXIuc3NxeCB8fCBcIuaYhuaYjuW4glwiKTtcclxuXHJcbiAgICAgICAgICBsZXQgc2VhcmNoRGF0YSA9IHtcclxuICAgICAgICAgICAgbW9kdWxlTmFtZTogXCJcIixcclxuICAgICAgICAgICAgcmVzb3VyY2VQYXRoOiBcIlwiLFxyXG4gICAgICAgICAgICB0eXBlOiBcIlwiLFxyXG4gICAgICAgICAgICBwYXJhbWV0ZXI6IHJlcy5kYXRhLnVzZXIuc3NxeCB8fCBcIuaYhuaYjuW4glwiLFxyXG4gICAgICAgICAgICBjb21wb25lbnROYW1lOiBcIlwiLFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdChcInNldFNlYXJjaE9ialwiLCBzZWFyY2hEYXRhKTtcclxuXHJcbiAgICAgICAgICAvLyBsZXQgZGVwQXJyID0gWyflsYDpooblr7wnLCAn55uR5o6n5Lit5b+DJywgJ+Wuo+aVmeS4reW/gyddXHJcbiAgICAgICAgICBsZXQgZGVwQXJyID0gW1wi55Sf5oCB546v5aKD55uR5o6n5Lit5b+DXCJdO1xyXG4gICAgICAgICAgdGhpcy51c2VyRGVwdEZsYWcgPSBkZXBBcnIuaW5kZXhPZihyZXMuZGF0YS51c2VyLnNzYm0pID4gLTE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnF1ZXJ5VXNlckJ0bihyZXMuZGF0YS51c2VyLm9iamVjdGlkKTtcclxuXHJcbiAgICAgICAgdGhpcy5xdWVyeVVzZXJTdWJzY3JpYmUoKTtcclxuICAgICAgfSk7XHJcbiAgICAgIC8v57q/57Si55m75b2VXHJcbiAgICAgIGxvZ2luX2NsdWUodGhpcy50b2tlbikudGhlbigocmVzKSA9PiB7fSk7XHJcbiAgICB9LFxyXG4gICAgLy/mn6Xor6LnlKjmiLflhbPogZTnmoRtZW51XHJcbiAgICBxdWVyeVVzZXJCdG4oaWQpIHtcclxuICAgICAgZ2V0VXNlckJ0bkxpc3QoeyB1c2VySWQ6IGlkIH0pLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgIGxldCB0ZW1wRCA9IHJlcy5kYXRhLmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgaWYgKGl0ZW0uZmxhZyAmJiBpdGVtLm5hbWUgPT09IFwi5qGI5Lu25a6h5om5XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0Q2FzZVVuZG9OdW0oKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiBpdGVtLm5hbWUgIT09IFwiR0lTXCI7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IGZpbmFsRCA9IHRlbXBELmZpbHRlcigoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIGl0ZW0uZmxhZztcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoZmluYWxELmxlbmd0aCA+IDkpIHtcclxuICAgICAgICAgIHRoaXMubWVudUxpc3QgPSBmaW5hbEQuc2xpY2UoMCwgOSk7XHJcbiAgICAgICAgICB0aGlzLm1vcmVCdG5TaG93ID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYgKGZpbmFsRC5sZW5ndGggPT09IDkpIHtcclxuICAgICAgICAgIHRoaXMubWVudUxpc3QgPSBmaW5hbEQuc2xpY2UoMCwgOCk7XHJcbiAgICAgICAgICB0aGlzLm1vcmVCdG5TaG93ID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5tZW51TGlzdCA9IGZpbmFsRDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIC8v55So5oi35raI5oGv6YCa55+lXHJcbiAgICBxdWVyeVVzZXJOb3RpY2UoKSB7XHJcbiAgICAgIHN5c05vdGljZUluZm8oKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhyZXMuZGF0YSk7XHJcbiAgICAgICAgdGhpcy5ub3RpY2VOdW1iZXIgPSByZXMuZGF0YS5sZW5ndGg7XHJcbiAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGluaXRDYXNlVW5kb051bSgpIHtcclxuICAgICAgbGV0IHNlYXJjaCA9IHtcclxuICAgICAgICBwYWdlTnVtOiAxLFxyXG4gICAgICAgIHBhZ2VTaXplOiA5OTk5LFxyXG4gICAgICAgIHR5cGU6IFwiXCIsXHJcbiAgICAgICAgeWVhcjogXCJcIixcclxuICAgICAgICBzdGF0dXM6IFwi5b6F5a6h5om5XCIsXHJcbiAgICAgIH07XHJcbiAgICAgIHF1ZXJ5VHlwZUNhc2VMaXN0KHNlYXJjaCkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5jYXNlVW5kb051bSA9IHJlcy5kYXRhLnRvdGFsO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvbkxpbmsoaXRlbSkge1xyXG4gICAgICBsZXQgb3RoZXJBcnIgPSBbXCLoh6rnlLHoo4Hph49cIiwgXCLnjq/kv53moIflh4ZcIiwgXCLms5Xlvovms5Xop4RcIiwgXCLosIPluqblubPlj7BcIiwgXCLmsLTnjq/looNcIl07XHJcbiAgICAgIGxldCB1cmwgPSBcIlwiO1xyXG4gICAgICBpZiAob3RoZXJBcnIuaW5kZXhPZihpdGVtLm5hbWUpID4gLTEpIHtcclxuICAgICAgICB1cmwgPSBpdGVtLnVybCArIFwiP3Rva2VuPVwiICsgdGhpcy50b2tlbjtcclxuICAgICAgICBvcGVuQnJvd3Nlcih1cmwpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChpdGVtLm5hbWUgPT09IFwi5rCU546v5aKDXCIpIHtcclxuICAgICAgICAgIHVybCA9IFwiaHR0cDovLzEwLjIyMS4yOS40OjE3MDAwL2txemwvIy9Ib21lXCIgKyBcIj9waG9uZT1cIiArIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicGhvbmVcIik7XHJcbiAgICAgICAgICBvcGVuQnJvd3Nlcih1cmwpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS5uYW1lID09PSBcIuaxoeafk+a6kFwiKSB7XHJcbiAgICAgICAgICB1cmwgPSBcImh0dHA6Ly8xMC4yMjEuMjkuNDoxNzAwMS93cnlnai9pbmRleC5odG1sIy9zc28/dGl0bGU96aaW6aG1JnRva2VuPVwiICsgdGhpcy50b2tlbisnJmpkPScrdGhpcy5jdXJyZW50TG9jYXRpb24uY29vcmRzLmxvbmdpdHVkZSsnJndkPScrdGhpcy5jdXJyZW50TG9jYXRpb24uY29vcmRzLmxhdGl0dWRlO1xyXG4gICAgICAgICAgb3BlbkJyb3dzZXIodXJsKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGl0ZW0ubmFtZSA9PT0gXCLmiafms5Xnm5HmtYtcIikge1xyXG4gICAgICAgICAgdXJsID0gXCJodHRwOi8vMTAuMjIxLjI5LjQ6MTcwMDEvd3J5Z2ovaW5kZXguaHRtbCMvc3NvP3RpdGxlPeaJp+azleebkea1iyZ0b2tlbj1cIiArIHRoaXMudG9rZW47XHJcbiAgICAgICAgICBvcGVuQnJvd3Nlcih1cmwpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbS5uYW1lID09PSBcIuedo+WKnuS6i+mhuVwiKSB7XHJcbiAgICAgICAgICB1cmwgPSBcImh0dHA6Ly8xMC4yMjEuMjkuNDoxNzAwMS93cnlnai9pbmRleC5odG1sIy9zc28/dGl0bGU9552j5Yqe5LqL6aG5JnRva2VuPVwiICsgdGhpcy50b2tlbjtcclxuICAgICAgICAgIG9wZW5Ccm93c2VyKHVybCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpdGVtLm5hbWUgPT09IFwi5Lu75Yqh5LiL6L6+XCIpIHtcclxuICAgICAgICAgIHVybCA9IFwiaHR0cDovLzEwLjIyMS4yOS40OjE3MDAxL3dyeWdqL2luZGV4Lmh0bWwjL3Nzbz90aXRsZT3ku7vliqHkuIvovr4mdG9rZW49XCIgKyB0aGlzLnRva2VuKycmamQ9Jyt0aGlzLmN1cnJlbnRMb2NhdGlvbi5jb29yZHMubG9uZ2l0dWRlKycmd2Q9Jyt0aGlzLmN1cnJlbnRMb2NhdGlvbi5jb29yZHMubGF0aXR1ZGU7XHJcbiAgICAgICAgICBvcGVuQnJvd3Nlcih1cmwpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaChpdGVtLnVybCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgYXN5bmMgcXVlcnlXYXJuaW5nRGF0YSgpIHtcclxuICAgICAgbGV0IHRlbXBEID0gYXdhaXQgdGhpcy5nZXRXYXJuaW5nQWlyKCk7XHJcbiAgICAgIGxldCB0ZW1wRFdhdGVyID0gYXdhaXQgdGhpcy5nZXRXYXJuaW5nV2F0ZXIoKTtcclxuICAgICAgdGhpcy53YXJuaW5nQWlyID0gdGVtcEQ7XHJcbiAgICAgIC8vIHRoaXMud2FybmluZ0FpciA9IHRlbXBELndhcmluZ0NvdW50O1xyXG4gICAgICAvLyB0aGlzLndhcm5pbmdXYXRlciA9IHRlbXBEV2F0ZXJcclxuICAgICAgdGhpcy53YXJuaW5nV2F0ZXIgPSB0ZW1wRFdhdGVyLmZpZnRoLmxlbmd0aCArIHRlbXBEV2F0ZXIuZm91cnRoLmxlbmd0aCArIHRlbXBEV2F0ZXIudGhyaWQubGVuZ3RoICsgdGVtcERXYXRlci5zZWNvbmQubGVuZ3RoICsgdGVtcERXYXRlci5maXNydC5sZW5ndGg7XHJcbiAgICB9LFxyXG4gICAgZ2V0V2FybmluZ0FpcigpIHtcclxuICAgICAgLy8gcmV0dXJuIG5ldyBQcm9taXNlKCgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgIC8vICAgd2FybmluZ0FpcigpLnRoZW4ocmVzID0+IHtcclxuICAgICAgLy8gICAgIHJlc29sdmUocmVzLmRhdGEpXHJcbiAgICAgIC8vICAgfSlcclxuICAgICAgLy8gfSkpXHJcbiAgICAgIGxldCBpbmZvID0ge1xyXG4gICAgICAgIGRpdmlzaW9uTmFtZTogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJkaXZpc2lvbl9jb2RlXCIpLFxyXG4gICAgICB9O1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIG92ZXJwcm9vZkFsZXJ0cyhpbmZvKS50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgIHJlc29sdmUocmVzLmRhdGEubGVuZ3RoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0V2FybmluZ1dhdGVyKCkge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIHdhcm5pbmdXYXRlcigpLnRoZW4oKHJlcykgPT4ge1xyXG4gICAgICAgICAgcmVzb2x2ZShyZXMpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH0sXHJcbiAgICBvblRvU2l0ZUxpc3QoZmxhZykge1xyXG4gICAgICBzd2l0Y2ggKGZsYWcpIHtcclxuICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6IFwiZXhjZWVkV2FybmluZ1wiLCBxdWVyeTogeyBmbGFnOiBmbGFnIH0gfSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiYWlyQWxhcm1cIixcclxuICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICB4enFoOiB0aGlzLnh6cWgsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgb25Ub0NsdWVMaXN0KCkge1xyXG4gICAgICB0aGlzLiRzdG9yZS5zdGF0ZS50eXBlID0gXCLlvoXlip7kuovpoblcIjtcclxuICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiBcIk1pbmVDbHVlXCIsIHBhcmFtczoge30gfSk7XHJcbiAgICB9LFxyXG4gICAgb25GdW5jdGlvbihmbGFnKSB7XHJcbiAgICAgIGxldCB1cmwgPSBcIlwiO1xyXG4gICAgICBpZiAoZmxhZyA9PT0gXCLmsLTnjq/looNcIikge1xyXG4gICAgICAgIHVybCA9IFwiaHR0cDovLzEwLjIyMS4yOS40OjE3MDAxL2ttc2hqLyMvc3NvP3Rva2VuPVwiICsgdGhpcy50b2tlbjtcclxuICAgICAgfSBlbHNlIGlmIChmbGFnID09PSBcIuawlOeOr+Wig1wiKSB7XHJcbiAgICAgICAgdXJsID0gXCJodHRwOi8vMTAuMjIxLjI5LjQ6MTcwMDAva3F6bC8jL0hvbWVcIiArIFwiP3Bob25lPVwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJwaG9uZVwiKTtcclxuICAgICAgfSBlbHNlIGlmIChmbGFnID09PSBcIuaxoeafk+a6kFwiKSB7XHJcbiAgICAgICAgdXJsID0gXCJodHRwOi8vMTAuMjIxLjI5LjQ6MTcwMDEvd3J5Z2ovaW5kZXguaHRtbCMvc3NvP3RpdGxlPemmlumhtSZ0b2tlbj1cIiArIHRoaXMudG9rZW47XHJcbiAgICAgIH0gZWxzZSBpZiAoZmxhZyA9PT0gXCLms5Xlvovms5Xop4RcIikge1xyXG4gICAgICAgIHVybCA9IFwiaHR0cDovLzEwLjIyMS4yOS40OjE3MDAxL3dyeWdqL2luZGV4Lmh0bWwjL2xhdzE/dGl0bGU9546v5aKD5L+d5oqk5rOV5b6L5rOV6KeE5rGH57yWXCI7XHJcbiAgICAgIH0gZWxzZSBpZiAoZmxhZyA9PT0gXCLnjq/kv53moIflh4ZcIikge1xyXG4gICAgICAgIHVybCA9IFwiaHR0cDovLzEwLjIyMS4yOS40OjE3MDAxL3dyeWdqL2luZGV4Lmh0bWwjL3N0YW5kMT90aXRsZT3njq/looPkv53miqTmoIflh4ZcIjtcclxuICAgICAgfSBlbHNlIGlmIChmbGFnID09PSBcIuiHqueUseijgemHj+adg1wiKSB7XHJcbiAgICAgICAgdXJsID0gXCJodHRwOi8vMTAuMjIxLjI5LjQ6MTcwMDEvd3J5Z2ovaW5kZXguaHRtbCMvenljbEluZGV4MT90aXRsZT3oh6rnlLHoo4Hph4/orqHnrpflmahcIjtcclxuICAgICAgfSBlbHNlIGlmIChmbGFnID09PSBcIuS7u+WKoeS4i+i+vlwiKSB7XHJcbiAgICAgICAgLy8gdXJsID0naHR0cDovLzEwLjIyMS4yOS40OjE3MDAxL3dyeWdqL2luZGV4Lmh0bWwjL25ld1pmamNydzE/dGl0bGU95Lu75Yqh5LiL6L6+J1xyXG4gICAgICAgIHVybCA9IFwiaHR0cDovLzEwLjIyMS4yOS40OjE3MDAxL3dyeWdqL2luZGV4Lmh0bWwjL3Nzbz90aXRsZT3ku7vliqHkuIvovr4mdG9rZW49XCIgKyB0aGlzLnRva2VuO1xyXG4gICAgICB9IGVsc2UgaWYgKGZsYWcgPT09IFwi5omn5rOV55uR5rWLXCIpIHtcclxuICAgICAgICB1cmwgPSBcImh0dHA6Ly8xMC4yMjEuMjkuNDoxNzAwMS93cnlnai9pbmRleC5odG1sIy9zc28/dGl0bGU95omn5rOV55uR5rWLJnRva2VuPVwiICsgdGhpcy50b2tlbjtcclxuICAgICAgfSBlbHNlIGlmIChmbGFnID09PSBcIuedo+WKnuS6i+mhuVwiKSB7XHJcbiAgICAgICAgdXJsID0gXCJodHRwOi8vMTAuMjIxLjI5LjQ6MTcwMDEvd3J5Z2ovaW5kZXguaHRtbCMvc3NvP3RpdGxlPeedo+WKnuS6i+mhuSZ0b2tlbj1cIiArIHRoaXMudG9rZW47XHJcbiAgICAgIH1cclxuICAgICAgLy8gb3BlbkJyb3dzZXIodXJsKVxyXG4gICAgfSxcclxuICAgIGhhbmRsZVNjcm9sbChlKSB7XHJcbiAgICAgIGxldCB5ID0gdGhpcy4kcmVmcy5wYWdlLnNjcm9sbFRvcDtcclxuICAgICAgaWYgKHkgPiA4NSkge1xyXG4gICAgICAgIHRoaXMuaGVhZGVyRml4ZWQgPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaGVhZGVyRml4ZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIC8v5p+l6K+i57q/57Si5b6F5Yqe5pWw6YePXHJcbiAgICBxdWVyeUhhbmRsZUNsdWUoKSB7XHJcbiAgICAgIGdldEluSGFuZENvdW50KHsgdXNlcl9pZDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIikgfSkudGhlbigocmVzKSA9PiB7XHJcbiAgICAgICAgdGhpcy5oYW5kbGUgPSByZXMuZGF0YS5jb3VudDtcclxuICAgICAgfSk7XHJcbiAgICB9LFxyXG4gICAgLy/lvpfliLDlvZPliY3nu4Tku7ZcclxuICAgIGdldENvbXBvbmVudChwYXRoKSB7XHJcbiAgICAgIGxldCBjb21wb25lbnRPYmogPSB7XHJcbiAgICAgICAgXCIvY2l0eVdhdGVyXCI6IGNpdHlXYXRlcixcclxuICAgICAgICBcIi9haXJXYXRlcldhcm5pbmdcIjogYWlyV2F0ZXJXYXJuaW5nLCAvL+awtOawlOWRiuitpuS/oeaBr1xyXG4gICAgICAgIFwiL2NpdHlBaXJcIjogY2l0eUFpciwgLy/lhajluILnqbrmsJTotKjph49cclxuICAgICAgICBcIi9wb2xsdXRpb25TdGF0aXNcIjogcG9sbHV0aW9uT3ZlcnZpZXcsIC8v5o6S5rGh6K645Y+v5rGh5p+T5rqQ57uf6K6h5oOF5Ya1XHJcbiAgICAgIH07XHJcbiAgICAgIGxldCBjb21wb25ldEFyciA9IFtdO1xyXG4gICAgICBpZiAocGF0aC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgcGF0aC5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICBjb21wb25ldEFyci5wdXNoKGNvbXBvbmVudE9ialtpdGVtXSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGNvbXBvbmV0QXJyO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgICAgfVxyXG4gICAgfSxcclxuICB9LFxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuLnZhbi1zZWFyY2gge1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIHBhZGRpbmc6IDEwcHggMDtcclxufVxyXG5cclxuLnZhbi1zZWFyY2ggLnZhbi1jZWxsIHtcclxuICBwYWRkaW5nOiA4cHggOHB4IDhweCAwO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLnZhbi1zZWFyY2hfX2NvbnRlbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCAyNHB4IHJnYmEoNDUsIDEyMywgMTUzLCAxKTtcclxufVxyXG5cclxuLmhvbWUtcGFnZSB7XHJcbiAgd2lkdGg6IDEwMHZ3O1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgYmFja2dyb3VuZDogI2Y1ZjZmODtcclxufVxyXG5cclxuLmZzIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uaG9tZS1oZWFkZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJ+QC9hc3NldHMvaG9tZS1oZWFkZXIyLnBuZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSA3NyU7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtODYlO1xyXG5cclxuICAmOjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMjclO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDcwcHg7XHJcbiAgICB6LWluZGV4OiAwO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiYSgxMjYsIDIzNCwgMjQzLCAxKSwgI2Y1ZjZmOCk7XHJcbiAgfVxyXG5cclxuICAuaG9tZS1oZWFkZXItZGVzIHtcclxuICAgIHBhZGRpbmc6IDQ4cHggMjRweCAwO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcblxyXG4gICAgLmhvbWUtaGVhZGVyLXdlYXRoZXIge1xyXG4gICAgICBwYWRkaW5nOiA2cHggMTBweDtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCksIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgICBjb2xvcjogIzQ0N2JmYztcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLndhcm5pbmctd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1hcmdpbjogMTJweCAxMnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNDcsIDI0NiwgMSk7XHJcbiAgaGVpZ2h0OiAyOHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gIC53YXJuaW5nLXRpdGxlIHtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIn5AL2Fzc2V0cy93YXJuaW5nLWJnLWxlZnQucG5nXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDI4cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcblxyXG4gICAgLndhcm5pbmctbmFtZSB7XHJcbiAgICAgIGhlaWdodDogMjhweDtcclxuICAgICAgcGFkZGluZzogNXB4IDMwcHggNXB4IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLndhcm5pbmctd2F0ZXIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgY29sb3I6ICNmNTViMDI7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDI4cHg7XHJcbiAgICBwYWRkaW5nOiAwIDhweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU0LCA5MCwgNzAsIDAuMSk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcblxyXG4gICAgLm51bSB7XHJcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICBjb2xvcjogI2Y1NWIwMjtcclxuICAgICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5saW5lIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogLTE1cHg7XHJcbiAgdG9wOiA1cHg7XHJcbiAgd2lkdGg6IDZweDtcclxuICBoZWlnaHQ6IDE0cHg7XHJcbiAgYmFja2dyb3VuZDogIzU4OGJmOTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4uZnVuY3Rpb24td3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB6LWluZGV4OiA5O1xyXG4gIG1hcmdpbjogMCAxM3B4O1xyXG4gIG1pbi1oZWlnaHQ6IDExMHB4O1xyXG4gIHBhZGRpbmc6IDAgMCAxM3B4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgcmdiKDI0NSwgMjUzLCAyNTUpLCByZ2IoMjU1LCAyNTUsIDI1NSkpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5mdW5jdGlvbi1pdGVtIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogMjAlO1xyXG4gIGZvbnQtc2l6ZTogMTJweDtcclxuICBtYXJnaW46IDNweCAwO1xyXG5cclxuICBpbWcge1xyXG4gICAgbWFyZ2luOiA3cHggYXV0bztcclxuICAgIGhlaWdodDogMjhweDtcclxuICB9XHJcblxyXG4gIC5vbGQtYXBwLWljb24ge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIH1cclxuXHJcbiAgLm51bWJlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgd2lkdGg6IDE4cHg7XHJcbiAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxOHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE4cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBtYXJnaW4tbGVmdDogNDBweDtcclxuICB9XHJcbn1cclxuXHJcbi5tb25pdG9yLXRpdGxlIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMTRweCAyMnB4IDA7XHJcbiAgYm9yZGVyLXRvcDogOHB4IHNvbGlkIHJnYmEoMjQ1LCAyNDYsIDI0OCwgMSk7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGNvbG9yOiAjMTIxMjM2O1xyXG59XHJcblxyXG4uZml4ZWQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGxlZnQ6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjZmODtcclxuICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCA1cHggcmdiYSgwLCAyOSwgMTc2LCAwLjIpO1xyXG5cclxuICAudmFuLXNlYXJjaF9fY29udGVudCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xyXG4gIH1cclxufVxyXG5cclxuLnN1cHBvcnQge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBib3R0b206IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBwYWRkaW5nOiA4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IC00cHggMHB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjA1KTtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICB6LWluZGV4OiA5OTtcclxuXHJcbiAgLnBob25lIHtcclxuICAgIGNvbG9yOiAjNDQ3YmZjO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uYXBwLW5hbWUge1xyXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi51c2VyLWJveCB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTdweDtcclxuICByaWdodDogMjFweDtcclxuICBjb2xvcjogI2ZmZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuPC9zdHlsZT5cclxuIiwiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtd3JhcHBlclwiIHN0eWxlPVwicGFkZGluZy1ib3R0b206IDE0cHhcIj5cclxuICAgICAgICA8IS0tICRyb3V0ZXIucHVzaCh7bmFtZTogJ1BvbGx1dGlvbkxpc3QnLHBhcmFtczoge3RpdGxlOiAn6YeN54K5566h55CGJ319KSAtLT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZnNcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtdGl0bGUgY2FyZC10aXRsZS1wb2xsdXRlXCI+e3t4enFofX3msaHmn5PmupDmpoLlhrU8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8IS0tIDxkaXYgQGNsaWNrPVwiaW5pdFwiPueCueWHuzwvZGl2PiAtLT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGJtX3RpdGxlXCI+PHNwYW4+546v5L+d56CBPC9zcGFuPjxzcGFuIEBjbGljaz1cInNob3dFbnZpcm9ubWVudENvZGVcIj7mn6XnnIvmm7TlpJo8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJwYWRkaW5nOiAwcHggOHB4O1wiPlxyXG4gICAgICAgICAgICAgICAgPGVudmlyb24tY29kZS8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3BsaXRcIj48L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhibV90aXRsZVwiPjxzcGFuPuaxoeafk+a6kOaho+ahiDwvc3Bhbj48c3BhbiBAY2xpY2s9XCJzaG93Q2l0eVBvbGx1dGlvblwiPuafpeeci+abtOWkmjwvc3Bhbj48L2Rpdj5cclxuICAgICAgICAgICAgPHBvbGx1dGlvbi1zb3VyY2UvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gICAgaW1wb3J0IGVudmlyb25Db2RlIGZyb20gXCIuL2Vudmlyb25Db2RlXCI7XHJcbiAgICBpbXBvcnQgcG9sbHV0aW9uU291cmNlIGZyb20gXCIuL3BvbGx1dGlvblNvdXJjZVwiO1xyXG4gICAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgICAgIG5hbWU6IFwicG9sbHV0aW9uT3ZlcnZpZXdcIixcclxuICAgICAgICBjb21wb25lbnRzIDp7XHJcbiAgICAgICAgICAgIGVudmlyb25Db2RlLFxyXG4gICAgICAgICAgICBwb2xsdXRpb25Tb3VyY2VcclxuICAgICAgICB9LFxyXG4gICAgICAgIHByb3BzOntcclxuICAgICAgICAgICAgZGV0YWlsc1BhcmFtZXRlcjpTdHJpbmdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGEoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB4enFoOlwiXCIsXHJcbiAgICAgICAgICAgICAgICBzZWFyY2hPYmo6ICcnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZGV0YWlsc1BhcmFtZXRlcil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnh6cWggPSB0aGlzLmRldGFpbHNQYXJhbWV0ZXJcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaE9iaiA9IHRoaXMuJHN0b3JlLnN0YXRlLnNlYXJjaE9iajtcclxuICAgICAgICAgICAgICAgIHRoaXMueHpxaCA9IHRoaXMuc2VhcmNoT2JqLnBhcmFtZXRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBnb1BhdGgodGl0bGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOidwb2xsdXRpb25TdGF0aXNMaXN0JyxcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB4enFoOnRoaXMueHpxaCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeHF0eXBlOiAn5rGh5p+T5rqQ5YiX6KGoJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHRpdGxlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNob3dDaXR5UG9sbHV0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6J3dob2xlQ2l0eVBvbGx1dGlvbicsXHJcbiAgICAgICAgICAgICAgICAgICAgcXVlcnk6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeHpxaDogdGhpcy54enFoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4cXR5cGU6IHRoaXMueHpxaCsn5rGh5p+T5rqQJ1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzaG93RW52aXJvbm1lbnRDb2RlKCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6J2Vudmlyb25tZW50Q29kZSdcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuICAgIC5oYm1fdGl0bGV7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDEwcHggOHB4O1xyXG4gICAgICAgID5zcGFue1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTRweDtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMTgsMTgsNTQsMC41KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5zcGxpdHtcclxuICAgICAgICBoZWlnaHQ6IDRweDtcclxuICAgICAgICBvcGFjaXR5OiAwLjU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyMjMsIDIyOCwgMjM3LCAxKTtcclxuICAgICAgICBtYXJnaW46IDEwcHggMHB4IDBweDtcclxuICAgIH1cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICByZWY6IFwiZmxvYXREcmFnXCIsXG4gICAgICBzdGF0aWNDbGFzczogXCJmbG9hdC1wb3NpdGlvblwiLFxuICAgICAgb246IHtcbiAgICAgICAgdG91Y2htb3ZlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgfSxcbiAgICAgICAgbW91c2Vtb3ZlOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgfSxcbiAgICAgICAgbW91c2Vkb3duOiBfdm0ubW91c2VEb3duLFxuICAgICAgICBtb3VzZXVwOiBfdm0ubW91c2VVcCxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjIwcHhcIiB9LFxuICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy/miJHnmoQ4MC5wbmdcIiksIGFsdDogXCJcIiB9LFxuICAgICAgfSksXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIilcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cbmV4cG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0iLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24gKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgcmVmOiBcInBhZ2VcIiwgc3RhdGljQ2xhc3M6IFwiaG9tZS1wYWdlXCIgfSxcbiAgICBbXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhvbWUtaGVhZGVyXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidXNlci1ib3hcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5ub3RpY2VOdW1iZXIgPT09IDBcbiAgICAgICAgICAgICAgPyBfYyhcInZhbi1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IFwiYmVsbFwiLCBzaXplOiBcIjE2XCIgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0ub25NZXNzYWdlQ2VudGVyIH0sXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgOiBfYyhcbiAgICAgICAgICAgICAgICAgIFwidmFuLWJhZGdlXCIsXG4gICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IGNvbnRlbnQ6IF92bS5ub3RpY2VOdW1iZXIgfSB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInZhbi1pY29uXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBuYW1lOiBcImJlbGxcIiwgc2l6ZTogXCIxNlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vbk1lc3NhZ2VDZW50ZXIgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICBfYyhcImltZ1wiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjIwcHhcIiwgXCJtYXJnaW4tbGVmdFwiOiBcIjEwcHhcIiB9LFxuICAgICAgICAgICAgICBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy/miJHnmoQ4MC5wbmdcIiksIGFsdDogXCJcIiB9LFxuICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9uRmFiQ2xpY2sgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgIF0sXG4gICAgICAgICAgMVxuICAgICAgICApLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImFwcC1uYW1lXCIgfSwgW192bS5fdihcIuaOjOS4iueOr+S/nVwiKV0pLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZzXCIsXG4gICAgICAgICAgICBjbGFzczogX3ZtLmhlYWRlckZpeGVkID8gXCJmaXhlZFwiIDogXCJcIixcbiAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IG1hcmdpbjogXCIwIDEwcHhcIiB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJ2YW4tc2VhcmNoXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiMTAwJVwiIH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgc2hhcGU6IFwicm91bmRcIixcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjpcbiAgICAgICAgICAgICAgICAgIFwi6K+36L6T5YWl56m65rCU6LSo6YeP56uZ54K55ZCN56ewIC8g5rC06LSo5pat6Z2i5ZCN56ewIC8g5rGh5p+T5rqQ5LyB5Lia5ZCN56ewXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgZm9jdXM6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uJHJvdXRlci5wdXNoKFwiL3NlYXJjaFwiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2hLZXl3b3JkLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uc2VhcmNoS2V5d29yZCA9ICQkdlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzZWFyY2hLZXl3b3JkXCIsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImZ1bmN0aW9uLXdyYXBwZXJcIiB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS5fbChfdm0ubWVudUxpc3QsIGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZ1bmN0aW9uLWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5vbkxpbmsoaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBpdGVtLmljb25cbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogaXRlbS5pY29uIH0gfSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiArIF92bS5fcyhpdGVtLm5hbWUpICsgXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgaXRlbS5uYW1lID09PSBcIuahiOS7tuWuoeaJuVwiXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJudW1iZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmNhc2VVbmRvTnVtKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0ubW9yZUJ0blNob3dcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZ1bmN0aW9uLWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLnB1c2goXCIvY29tbW9uRnVuY3Rpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwgeyBhdHRyczogeyBzcmM6IHJlcXVpcmUoXCJAL2Fzc2V0cy/mm7TlpJoucG5nXCIpIH0gfSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiDmm7TlpJogXCIpLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIDJcbiAgICAgICAgKSxcbiAgICAgIF0pLFxuICAgICAgX3ZtLndhcm5pbmdJbmZvU2hvd1xuICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwid2FybmluZy13cmFwcGVyIGZzXCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmc1wiLFxuICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwianVzdGlmeS1jb250ZW50XCI6IFwicmlnaHRcIiB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3YXJuaW5nLXdhdGVyIGZzXCIsXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25Ub1NpdGVMaXN0KDApXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiDmsLTnjq/looMgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJudW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ud2FybmluZ1dhdGVyKSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLkuKogXCIpLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ3YXJuaW5nLXdhdGVyIGZzXCIsXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25Ub1NpdGVMaXN0KDEpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiDnqbrmsJTotKjph48gXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJudW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ud2FybmluZ0FpcikpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5LiqIFwiKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApLFxuICAgICAgICAgIF0pXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX2woX3ZtLmN1cnJlbnRDb21wb25lbnQsIGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICAgIHJldHVybiBfYyhpdGVtLCB7IGtleTogaSwgdGFnOiBcImNvbXBvbmVudFwiIH0pXG4gICAgICB9KSxcbiAgICAgIF92bS51c2VyRGVwdEZsYWcgPyBfYyhcIm1lZGlhU3RhdGlzXCIpIDogX3ZtLl9lKCksXG4gICAgICBfdm0udXNlckRlcHRGbGFnID8gX2MoXCJhcmVhU3RhdGlzXCIpIDogX3ZtLl9lKCksXG4gICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLWJvdHRvbVwiOiBcIjYwcHhcIiB9IH0pLFxuICAgICAgX3ZtLl9tKDEpLFxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3YXJuaW5nLXRpdGxlIGZzXCIgfSwgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ3YXJuaW5nLW5hbWUgZnNcIiB9LCBbXG4gICAgICAgIF9jKFwiaW1nXCIsIHtcbiAgICAgICAgICBzdGF0aWNTdHlsZTogeyBcIm1hcmdpbi1yaWdodFwiOiBcIjEwcHhcIiB9LFxuICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIkAvYXNzZXRzL3dhcm5pbmcucG5nXCIpLCB3aWR0aDogXCIxNFwiIH0sXG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIg6LaF5qCH5ZGK6K2mIFwiKSxcbiAgICAgIF0pLFxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInN1cHBvcnRcIiB9LCBbXG4gICAgICBfdm0uX3YoXCIgQOaYhuaYjuW4gueUn+aAgeeOr+Wig+ebkeaOp+S4reW/g+W7uuiuvuW8gOWPkVwiKSxcbiAgICAgIF9jKFwiYnJcIiksXG4gICAgICBfdm0uX3YoXCIg6IGU57O75Lq677ya5pyxIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImFcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBob25lXCIsXG4gICAgICAgICAgYXR0cnM6IHsgaHJlZjogXCJqYXZhc2NyaXB0Om9wZW5UZWwoJzE1MTk4ODQ4MjQzJylcIiB9LFxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwiMTUxOTg4NDgyNDNcIildXG4gICAgICApLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsInZhciByZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJjYXJkLXdyYXBwZXJcIiwgc3RhdGljU3R5bGU6IHsgXCJwYWRkaW5nLWJvdHRvbVwiOiBcIjE0cHhcIiB9IH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmc1wiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlIGNhcmQtdGl0bGUtcG9sbHV0ZVwiIH0sIFtcbiAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS54enFoKSArIFwi5rGh5p+T5rqQ5qaC5Ya1XCIpLFxuICAgICAgICBdKSxcbiAgICAgIF0pLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhibV90aXRsZVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi546v5L+d56CBXCIpXSksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBvbjogeyBjbGljazogX3ZtLnNob3dFbnZpcm9ubWVudENvZGUgfSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcIuafpeeci+abtOWkmlwiKSxcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljU3R5bGU6IHsgcGFkZGluZzogXCIwcHggOHB4XCIgfSB9LFxuICAgICAgICAgICAgW19jKFwiZW52aXJvbi1jb2RlXCIpXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwic3BsaXRcIiB9KSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhibV90aXRsZVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KFwi5rGh5p+T5rqQ5qGj5qGIXCIpXSksXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBvbjogeyBjbGljazogX3ZtLnNob3dDaXR5UG9sbHV0aW9uIH0gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXCLmn6XnnIvmm7TlpJpcIiksXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfYyhcInBvbGx1dGlvbi1zb3VyY2VcIiksXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5leHBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvZXhwb3J0Jyk7XG52YXIgJGZpbHRlciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1pdGVyYXRpb24nKS5maWx0ZXI7XG52YXIgYXJyYXlNZXRob2RIYXNTcGVjaWVzU3VwcG9ydCA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9hcnJheS1tZXRob2QtaGFzLXNwZWNpZXMtc3VwcG9ydCcpO1xuXG52YXIgSEFTX1NQRUNJRVNfU1VQUE9SVCA9IGFycmF5TWV0aG9kSGFzU3BlY2llc1N1cHBvcnQoJ2ZpbHRlcicpO1xuXG4vLyBgQXJyYXkucHJvdG90eXBlLmZpbHRlcmAgbWV0aG9kXG4vLyBodHRwczovL3RjMzkuZXMvZWNtYTI2Mi8jc2VjLWFycmF5LnByb3RvdHlwZS5maWx0ZXJcbi8vIHdpdGggYWRkaW5nIHN1cHBvcnQgb2YgQEBzcGVjaWVzXG4kKHsgdGFyZ2V0OiAnQXJyYXknLCBwcm90bzogdHJ1ZSwgZm9yY2VkOiAhSEFTX1NQRUNJRVNfU1VQUE9SVCB9LCB7XG4gIGZpbHRlcjogZnVuY3Rpb24gZmlsdGVyKGNhbGxiYWNrZm4gLyogLCB0aGlzQXJnICovKSB7XG4gICAgcmV0dXJuICRmaWx0ZXIodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjYWxsID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2Z1bmN0aW9uLWNhbGwnKTtcbnZhciB1bmN1cnJ5VGhpcyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mdW5jdGlvbi11bmN1cnJ5LXRoaXMnKTtcbnZhciBmaXhSZWdFeHBXZWxsS25vd25TeW1ib2xMb2dpYyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9maXgtcmVnZXhwLXdlbGwta25vd24tc3ltYm9sLWxvZ2ljJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvYW4tb2JqZWN0Jyk7XG52YXIgaXNOdWxsT3JVbmRlZmluZWQgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvaXMtbnVsbC1vci11bmRlZmluZWQnKTtcbnZhciByZXF1aXJlT2JqZWN0Q29lcmNpYmxlID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlcXVpcmUtb2JqZWN0LWNvZXJjaWJsZScpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgYWR2YW5jZVN0cmluZ0luZGV4ID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2FkdmFuY2Utc3RyaW5nLWluZGV4Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tbGVuZ3RoJyk7XG52YXIgdG9TdHJpbmcgPSByZXF1aXJlKCcuLi9pbnRlcm5hbHMvdG8tc3RyaW5nJyk7XG52YXIgZ2V0TWV0aG9kID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL2dldC1tZXRob2QnKTtcbnZhciByZWdFeHBFeGVjID0gcmVxdWlyZSgnLi4vaW50ZXJuYWxzL3JlZ2V4cC1leGVjLWFic3RyYWN0Jyk7XG52YXIgc3RpY2t5SGVscGVycyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9yZWdleHAtc3RpY2t5LWhlbHBlcnMnKTtcbnZhciBmYWlscyA9IHJlcXVpcmUoJy4uL2ludGVybmFscy9mYWlscycpO1xuXG52YXIgVU5TVVBQT1JURURfWSA9IHN0aWNreUhlbHBlcnMuVU5TVVBQT1JURURfWTtcbnZhciBNQVhfVUlOVDMyID0gMHhGRkZGRkZGRjtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbnZhciBwdXNoID0gdW5jdXJyeVRoaXMoW10ucHVzaCk7XG52YXIgc3RyaW5nU2xpY2UgPSB1bmN1cnJ5VGhpcygnJy5zbGljZSk7XG5cbi8vIENocm9tZSA1MSBoYXMgYSBidWdneSBcInNwbGl0XCIgaW1wbGVtZW50YXRpb24gd2hlbiBSZWdFeHAjZXhlYyAhPT0gbmF0aXZlRXhlY1xuLy8gV2VleCBKUyBoYXMgZnJvemVuIGJ1aWx0LWluIHByb3RvdHlwZXMsIHNvIHVzZSB0cnkgLyBjYXRjaCB3cmFwcGVyXG52YXIgU1BMSVRfV09SS1NfV0lUSF9PVkVSV1JJVFRFTl9FWEVDID0gIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHJlZ2V4cC9uby1lbXB0eS1ncm91cCAtLSByZXF1aXJlZCBmb3IgdGVzdGluZ1xuICB2YXIgcmUgPSAvKD86KS87XG4gIHZhciBvcmlnaW5hbEV4ZWMgPSByZS5leGVjO1xuICByZS5leGVjID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gb3JpZ2luYWxFeGVjLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gIHZhciByZXN1bHQgPSAnYWInLnNwbGl0KHJlKTtcbiAgcmV0dXJuIHJlc3VsdC5sZW5ndGggIT09IDIgfHwgcmVzdWx0WzBdICE9PSAnYScgfHwgcmVzdWx0WzFdICE9PSAnYic7XG59KTtcblxudmFyIEJVR0dZID0gJ2FiYmMnLnNwbGl0KC8oYikqLylbMV0gPT09ICdjJyB8fFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVnZXhwL25vLWVtcHR5LWdyb3VwIC0tIHJlcXVpcmVkIGZvciB0ZXN0aW5nXG4gICd0ZXN0Jy5zcGxpdCgvKD86KS8sIC0xKS5sZW5ndGggIT09IDQgfHxcbiAgJ2FiJy5zcGxpdCgvKD86YWIpKi8pLmxlbmd0aCAhPT0gMiB8fFxuICAnLicuc3BsaXQoLyguPykoLj8pLykubGVuZ3RoICE9PSA0IHx8XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWdleHAvbm8tZW1wdHktY2FwdHVyaW5nLWdyb3VwLCByZWdleHAvbm8tZW1wdHktZ3JvdXAgLS0gcmVxdWlyZWQgZm9yIHRlc3RpbmdcbiAgJy4nLnNwbGl0KC8oKSgpLykubGVuZ3RoID4gMSB8fFxuICAnJy5zcGxpdCgvLj8vKS5sZW5ndGg7XG5cbi8vIEBAc3BsaXQgbG9naWNcbmZpeFJlZ0V4cFdlbGxLbm93blN5bWJvbExvZ2ljKCdzcGxpdCcsIGZ1bmN0aW9uIChTUExJVCwgbmF0aXZlU3BsaXQsIG1heWJlQ2FsbE5hdGl2ZSkge1xuICB2YXIgaW50ZXJuYWxTcGxpdCA9ICcwJy5zcGxpdCh1bmRlZmluZWQsIDApLmxlbmd0aCA/IGZ1bmN0aW9uIChzZXBhcmF0b3IsIGxpbWl0KSB7XG4gICAgcmV0dXJuIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkICYmIGxpbWl0ID09PSAwID8gW10gOiBjYWxsKG5hdGl2ZVNwbGl0LCB0aGlzLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgfSA6IG5hdGl2ZVNwbGl0O1xuXG4gIHJldHVybiBbXG4gICAgLy8gYFN0cmluZy5wcm90b3R5cGUuc3BsaXRgIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtc3RyaW5nLnByb3RvdHlwZS5zcGxpdFxuICAgIGZ1bmN0aW9uIHNwbGl0KHNlcGFyYXRvciwgbGltaXQpIHtcbiAgICAgIHZhciBPID0gcmVxdWlyZU9iamVjdENvZXJjaWJsZSh0aGlzKTtcbiAgICAgIHZhciBzcGxpdHRlciA9IGlzTnVsbE9yVW5kZWZpbmVkKHNlcGFyYXRvcikgPyB1bmRlZmluZWQgOiBnZXRNZXRob2Qoc2VwYXJhdG9yLCBTUExJVCk7XG4gICAgICByZXR1cm4gc3BsaXR0ZXJcbiAgICAgICAgPyBjYWxsKHNwbGl0dGVyLCBzZXBhcmF0b3IsIE8sIGxpbWl0KVxuICAgICAgICA6IGNhbGwoaW50ZXJuYWxTcGxpdCwgdG9TdHJpbmcoTyksIHNlcGFyYXRvciwgbGltaXQpO1xuICAgIH0sXG4gICAgLy8gYFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF1gIG1ldGhvZFxuICAgIC8vIGh0dHBzOi8vdGMzOS5lcy9lY21hMjYyLyNzZWMtcmVnZXhwLnByb3RvdHlwZS1AQHNwbGl0XG4gICAgLy9cbiAgICAvLyBOT1RFOiBUaGlzIGNhbm5vdCBiZSBwcm9wZXJseSBwb2x5ZmlsbGVkIGluIGVuZ2luZXMgdGhhdCBkb24ndCBzdXBwb3J0XG4gICAgLy8gdGhlICd5JyBmbGFnLlxuICAgIGZ1bmN0aW9uIChzdHJpbmcsIGxpbWl0KSB7XG4gICAgICB2YXIgcnggPSBhbk9iamVjdCh0aGlzKTtcbiAgICAgIHZhciBTID0gdG9TdHJpbmcoc3RyaW5nKTtcblxuICAgICAgaWYgKCFCVUdHWSkge1xuICAgICAgICB2YXIgcmVzID0gbWF5YmVDYWxsTmF0aXZlKGludGVybmFsU3BsaXQsIHJ4LCBTLCBsaW1pdCwgaW50ZXJuYWxTcGxpdCAhPT0gbmF0aXZlU3BsaXQpO1xuICAgICAgICBpZiAocmVzLmRvbmUpIHJldHVybiByZXMudmFsdWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBDID0gc3BlY2llc0NvbnN0cnVjdG9yKHJ4LCBSZWdFeHApO1xuICAgICAgdmFyIHVuaWNvZGVNYXRjaGluZyA9IHJ4LnVuaWNvZGU7XG4gICAgICB2YXIgZmxhZ3MgPSAocnguaWdub3JlQ2FzZSA/ICdpJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAocngubXVsdGlsaW5lID8gJ20nIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChyeC51bmljb2RlID8gJ3UnIDogJycpICtcbiAgICAgICAgICAgICAgICAgIChVTlNVUFBPUlRFRF9ZID8gJ2cnIDogJ3knKTtcbiAgICAgIC8vIF4oPyArIHJ4ICsgKSBpcyBuZWVkZWQsIGluIGNvbWJpbmF0aW9uIHdpdGggc29tZSBTIHNsaWNpbmcsIHRvXG4gICAgICAvLyBzaW11bGF0ZSB0aGUgJ3knIGZsYWcuXG4gICAgICB2YXIgc3BsaXR0ZXIgPSBuZXcgQyhVTlNVUFBPUlRFRF9ZID8gJ14oPzonICsgcnguc291cmNlICsgJyknIDogcngsIGZsYWdzKTtcbiAgICAgIHZhciBsaW0gPSBsaW1pdCA9PT0gdW5kZWZpbmVkID8gTUFYX1VJTlQzMiA6IGxpbWl0ID4+PiAwO1xuICAgICAgaWYgKGxpbSA9PT0gMCkgcmV0dXJuIFtdO1xuICAgICAgaWYgKFMubGVuZ3RoID09PSAwKSByZXR1cm4gcmVnRXhwRXhlYyhzcGxpdHRlciwgUykgPT09IG51bGwgPyBbU10gOiBbXTtcbiAgICAgIHZhciBwID0gMDtcbiAgICAgIHZhciBxID0gMDtcbiAgICAgIHZhciBBID0gW107XG4gICAgICB3aGlsZSAocSA8IFMubGVuZ3RoKSB7XG4gICAgICAgIHNwbGl0dGVyLmxhc3RJbmRleCA9IFVOU1VQUE9SVEVEX1kgPyAwIDogcTtcbiAgICAgICAgdmFyIHogPSByZWdFeHBFeGVjKHNwbGl0dGVyLCBVTlNVUFBPUlRFRF9ZID8gc3RyaW5nU2xpY2UoUywgcSkgOiBTKTtcbiAgICAgICAgdmFyIGU7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB6ID09PSBudWxsIHx8XG4gICAgICAgICAgKGUgPSBtaW4odG9MZW5ndGgoc3BsaXR0ZXIubGFzdEluZGV4ICsgKFVOU1VQUE9SVEVEX1kgPyBxIDogMCkpLCBTLmxlbmd0aCkpID09PSBwXG4gICAgICAgICkge1xuICAgICAgICAgIHEgPSBhZHZhbmNlU3RyaW5nSW5kZXgoUywgcSwgdW5pY29kZU1hdGNoaW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwdXNoKEEsIHN0cmluZ1NsaWNlKFMsIHAsIHEpKTtcbiAgICAgICAgICBpZiAoQS5sZW5ndGggPT09IGxpbSkgcmV0dXJuIEE7XG4gICAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPD0gei5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgICAgICAgIHB1c2goQSwgeltpXSk7XG4gICAgICAgICAgICBpZiAoQS5sZW5ndGggPT09IGxpbSkgcmV0dXJuIEE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHEgPSBwID0gZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcHVzaChBLCBzdHJpbmdTbGljZShTLCBwKSk7XG4gICAgICByZXR1cm4gQTtcbiAgICB9XG4gIF07XG59LCBCVUdHWSB8fCAhU1BMSVRfV09SS1NfV0lUSF9PVkVSV1JJVFRFTl9FWEVDLCBVTlNVUFBPUlRFRF9ZKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxyXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuZmxvYXQtcG9zaXRpb25bZGF0YS12LTRiMzJiNzdhXSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHRvcDogMTBweDtcXG4gIHdpZHRoOiA2MHB4O1xcbiAgaGVpZ2h0OiA2MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gcmVxdWlyZShcIkAvYXNzZXRzL2hvbWUtaGVhZGVyMi5wbmdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSByZXF1aXJlKFwiQC9hc3NldHMvd2FybmluZy1iZy1sZWZ0LnBuZ1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi52YW4tc2VhcmNoW2RhdGEtdi00N2Q3NTNhYl0ge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBwYWRkaW5nOiAxMHB4IDA7XFxufVxcbi52YW4tc2VhcmNoIC52YW4tY2VsbFtkYXRhLXYtNDdkNzUzYWJdIHtcXG4gIHBhZGRpbmc6IDhweCA4cHggOHB4IDA7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi52YW4tc2VhcmNoX19jb250ZW50W2RhdGEtdi00N2Q3NTNhYl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGJveC1zaGFkb3c6IDBweCA0cHggMjRweCAjMmQ3Yjk5O1xcbn1cXG4uaG9tZS1wYWdlW2RhdGEtdi00N2Q3NTNhYl0ge1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZDogI2Y1ZjZmODtcXG59XFxuLmZzW2RhdGEtdi00N2Q3NTNhYl0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5ob21lLWhlYWRlcltkYXRhLXYtNDdkNzUzYWJdIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxuICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgNzclO1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAtODYlO1xcbn1cXG4uaG9tZS1oZWFkZXJbZGF0YS12LTQ3ZDc1M2FiXTo6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm90dG9tOiAyNyU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNzBweDtcXG4gIHotaW5kZXg6IDA7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjN2VlYWYzLCAjZjVmNmY4KTtcXG59XFxuLmhvbWUtaGVhZGVyIC5ob21lLWhlYWRlci1kZXNbZGF0YS12LTQ3ZDc1M2FiXSB7XFxuICBwYWRkaW5nOiA0OHB4IDI0cHggMDtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uaG9tZS1oZWFkZXIgLmhvbWUtaGVhZGVyLWRlcyAuaG9tZS1oZWFkZXItd2VhdGhlcltkYXRhLXYtNDdkNzUzYWJdIHtcXG4gIHBhZGRpbmc6IDZweCAxMHB4O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCksIHdoaXRlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBjb2xvcjogIzQ0N2JmYztcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG59XFxuLndhcm5pbmctd3JhcHBlcltkYXRhLXYtNDdkNzUzYWJdIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG1hcmdpbjogMTJweCAxMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjdmNjtcXG4gIGhlaWdodDogMjhweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi53YXJuaW5nLXdyYXBwZXIgLndhcm5pbmctdGl0bGVbZGF0YS12LTQ3ZDc1M2FiXSB7XFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1zaXplOiBhdXRvIDI4cHg7XFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBsZWZ0IGNlbnRlcjtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcbi53YXJuaW5nLXdyYXBwZXIgLndhcm5pbmctdGl0bGUgLndhcm5pbmctbmFtZVtkYXRhLXYtNDdkNzUzYWJdIHtcXG4gIGhlaWdodDogMjhweDtcXG4gIHBhZGRpbmc6IDVweCAzMHB4IDVweCAxMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiA1cHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi53YXJuaW5nLXdyYXBwZXIgLndhcm5pbmctd2F0ZXJbZGF0YS12LTQ3ZDc1M2FiXSB7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBjb2xvcjogI2Y1NWIwMjtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGhlaWdodDogMjhweDtcXG4gIHBhZGRpbmc6IDAgOHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTQsIDkwLCA3MCwgMC4xKTtcXG4gIG1hcmdpbi1yaWdodDogMTZweDtcXG59XFxuLndhcm5pbmctd3JhcHBlciAud2FybmluZy13YXRlciAubnVtW2RhdGEtdi00N2Q3NTNhYl0ge1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICBjb2xvcjogI2Y1NWIwMjtcXG4gIGZvbnQtc2l6ZTogMTVweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4ubGluZVtkYXRhLXYtNDdkNzUzYWJdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IC0xNXB4O1xcbiAgdG9wOiA1cHg7XFxuICB3aWR0aDogNnB4O1xcbiAgaGVpZ2h0OiAxNHB4O1xcbiAgYmFja2dyb3VuZDogIzU4OGJmOTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5mdW5jdGlvbi13cmFwcGVyW2RhdGEtdi00N2Q3NTNhYl0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHotaW5kZXg6IDk7XFxuICBtYXJnaW46IDAgMTNweDtcXG4gIG1pbi1oZWlnaHQ6IDExMHB4O1xcbiAgcGFkZGluZzogMCAwIDEzcHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNmNWZkZmYsIHdoaXRlKTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcbi5mdW5jdGlvbi1pdGVtW2RhdGEtdi00N2Q3NTNhYl0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogMjAlO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgbWFyZ2luOiAzcHggMDtcXG59XFxuLmZ1bmN0aW9uLWl0ZW0gaW1nW2RhdGEtdi00N2Q3NTNhYl0ge1xcbiAgbWFyZ2luOiA3cHggYXV0bztcXG4gIGhlaWdodDogMjhweDtcXG59XFxuLmZ1bmN0aW9uLWl0ZW0gLm9sZC1hcHAtaWNvbltkYXRhLXYtNDdkNzUzYWJdIHtcXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yKTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG59XFxuLmZ1bmN0aW9uLWl0ZW0gLm51bWJlcltkYXRhLXYtNDdkNzUzYWJdIHtcXG4gIGJhY2tncm91bmQ6IHJlZDtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHdpZHRoOiAxOHB4O1xcbiAgaGVpZ2h0OiAxOHB4O1xcbiAgYm9yZGVyLXJhZGl1czogMThweDtcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XFxufVxcbi5tb25pdG9yLXRpdGxlW2RhdGEtdi00N2Q3NTNhYl0ge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMTRweCAyMnB4IDA7XFxuICBib3JkZXItdG9wOiA4cHggc29saWQgI2Y1ZjZmODtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG4gIGNvbG9yOiAjMTIxMjM2O1xcbn1cXG4uZml4ZWRbZGF0YS12LTQ3ZDc1M2FiXSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB0b3A6IDA7XFxuICB6LWluZGV4OiA5OTk7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNmY4O1xcbiAgcGFkZGluZzogMCAxMHB4O1xcbiAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XFxuICBib3gtc2hhZG93OiAwcHggMnB4IDVweCByZ2JhKDAsIDI5LCAxNzYsIDAuMik7XFxufVxcbi5maXhlZCAudmFuLXNlYXJjaF9fY29udGVudFtkYXRhLXYtNDdkNzUzYWJdIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgYm94LXNpemluZzogY29udGVudC1ib3g7XFxufVxcbi5zdXBwb3J0W2RhdGEtdi00N2Q3NTNhYl0ge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgYm90dG9tOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgcGFkZGluZzogOHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBib3gtc2hhZG93OiAtNHB4IDBweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC4wNSk7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgei1pbmRleDogOTk7XFxufVxcbi5zdXBwb3J0IC5waG9uZVtkYXRhLXYtNDdkNzUzYWJdIHtcXG4gIGNvbG9yOiAjNDQ3YmZjO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcbi5hcHAtbmFtZVtkYXRhLXYtNDdkNzUzYWJdIHtcXG4gIHBhZGRpbmctdG9wOiA0MHB4O1xcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi51c2VyLWJveFtkYXRhLXYtNDdkNzUzYWJdIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMTdweDtcXG4gIHJpZ2h0OiAyMXB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaGJtX3RpdGxlW2RhdGEtdi1kMDFmYWE2OF0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDEwcHggMTBweCA4cHg7XFxufVxcbi5oYm1fdGl0bGUgPiBzcGFuW2RhdGEtdi1kMDFmYWE2OF0ge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5oYm1fdGl0bGUgPiBzcGFuW2RhdGEtdi1kMDFmYWE2OF06bGFzdC1jaGlsZCB7XFxuICBtYXJnaW4tbGVmdDogYXV0bztcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxufVxcbi5zcGxpdFtkYXRhLXYtZDAxZmFhNjhdIHtcXG4gIGhlaWdodDogNHB4O1xcbiAgb3BhY2l0eTogMC41O1xcbiAgYmFja2dyb3VuZDogI2RmZTRlZDtcXG4gIG1hcmdpbjogMTBweCAwcHggMHB4O1xcbn1cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTctb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTctb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmxvYXRCdXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1jc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcIjhhMDJiYTdlXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNy1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy1vbmVPZi0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GbG9hdEJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tNy1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tNy1vbmVPZi0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GbG9hdEJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Zsb2F0QnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPTRiMzJiNzdhJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMjE4Yzk0YjJcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GbG9hdEJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD00YjMyYjc3YSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Zsb2F0QnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0xJmlkPTRiMzJiNzdhJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ3ZDc1M2FiJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMTdmYWZmNTJcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD00N2Q3NTNhYiZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ3ZDc1M2FiJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BvbGx1dGlvbk92ZXJ2aWV3LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWQwMWZhYTY4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG5pZihjb250ZW50Ll9fZXNNb2R1bGUpIGNvbnRlbnQgPSBjb250ZW50LmRlZmF1bHQ7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIGFkZCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKS5kZWZhdWx0XG52YXIgdXBkYXRlID0gYWRkKFwiMTUzZmY4M2FcIiwgY29udGVudCwgZmFsc2UsIHtcInNvdXJjZU1hcFwiOmZhbHNlLFwic2hhZG93TW9kZVwiOmZhbHNlfSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wb2xsdXRpb25PdmVydmlldy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kMDFmYWE2OCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BvbGx1dGlvbk92ZXJ2aWV3LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPWQwMWZhYTY4Jmxhbmc9c2NzcyZzY29wZWQ9dHJ1ZSZcIik7XG4gICAgIGlmKG5ld0NvbnRlbnQuX19lc01vZHVsZSkgbmV3Q29udGVudCA9IG5ld0NvbnRlbnQuZGVmYXVsdDtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwiaW1wb3J0IHJlcXVlc3QgZnJvbSBcIi4vcmVxdWVzdFwiO1xyXG5cclxuLyoqXHJcbiAqIOahiOS7tuivpuaDhVxyXG4gKiAqL1xyXG5leHBvcnQgY29uc3QgcXVlcnlTZWxlY3RCeUlkID0oaWQpPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcGkvY2FzZS9zZWxlY3RCeUlkLycraWQsXHJcbiAgICBtZXRob2Q6ICdnZXQnLFxyXG4gIH0pXHJcbn1cclxuLy8g6ZuG5L2T6K6o6K666K+m5oOFXHJcbmV4cG9ydCBjb25zdCBkaXNjdXNzU2VsZWN0QnlDYXNlSWQgPSAoaWQpID0+e1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcGkvZGlzY3Vzcy9zZWxlY3RCeUNhc2VJZC8nK2lkLFxyXG4gICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgfSlcclxufTtcclxuLy8g6K+m5oOFXHJcbmV4cG9ydCBjb25zdCBzdXBlcnZpc2VTZWxlY3RCeUNhc2VJZCA9IChpZCkgPT57XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwaS9zdXBlcnZpc2Uvc2VsZWN0QnlDYXNlSWQvJytpZCxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgfSlcclxufTtcclxuLy8g5ZGK55+l6K+m5oOFXHJcbmV4cG9ydCBjb25zdCBsZWdhbFNlbGVjdEJ5Q2FzZUlkID0gKGlkKSA9PntcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBpL2xlZ2FsL3NlbGVjdEJ5Q2FzZUlkLycraWQsXHJcbiAgICBtZXRob2Q6ICdwb3N0JyxcclxuICB9KVxyXG59O1xyXG4vLyDlkYrnn6Xor6bmg4VcclxuZXhwb3J0IGNvbnN0IHNlbGVjdEJ5Q2FzZUlkID0gKGlkKSA9PntcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6ICcvYXBpL2luZm9ybS9zZWxlY3RCeUNhc2VJZC8nK2lkLFxyXG4gICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgfSlcclxufTtcclxuLy8g6K+m5oOFXHJcbmV4cG9ydCBjb25zdCBwdW5pc2hTZWxlY3RCeUNhc2VJZCA9IChpZCkgPT57XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwaS9wdW5pc2gvc2VsZWN0QnlDYXNlSWQvJytpZCxcclxuICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgfSlcclxufTtcclxuLy8g6K+m5oOFXHJcbmV4cG9ydCBjb25zdCBnZXRIZWFyaW5nQnlDYXNlSWQgPSAoaWQpID0+e1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogJy9hcGkvaGVhcmluZy9nZXRIZWFyaW5nQnlDYXNlSWQvJytpZCxcclxuICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gIH0pXHJcbn07XHJcbi8vIOivpuaDhVxyXG5leHBvcnQgY29uc3Qgc3RhZ2VTZWxlY3RCeUNhc2VJZCA9IChpZCkgPT57XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiAnL2FwaS9zdGFnZS9zZWxlY3RCeUNhc2VJZC8nK2lkLFxyXG4gICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgfSlcclxufTtcclxuXHJcbi8v5qC55o2udG9rZW7ojrflj5bkvIHkuJrkv6Hmga9cclxuZXhwb3J0IGNvbnN0IGdldFVzZXJJbmZvID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL3JhL3VzZXIvZ2V0SW5mb1wiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4vL+iOt+WPlueUqOaIt1xyXG5leHBvcnQgY29uc3QgZ2V0VXNlckxpc3QgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvdXNlclwiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgcGFyYW1zOiBkYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4vL+afpeeci+WuoeaJueWtkOmhueWIl+ihqFxyXG5leHBvcnQgY29uc3QgcXVlcnlUeXBlQ2FzZUxpc3QgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvYXBwcm92YWwvcXVlcnlBcHBMaXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v5paw5bu65a6h5om56KGoXHJcbmV4cG9ydCBjb25zdCBhZGRSZXBvcnQgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvYXBwcm92YWwvaW5zXCIsXHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBkYXRhOiBkYXRhLFxyXG4gIH0pO1xyXG59O1xyXG4vL+iOt+WPluWNleS4quWuoeaJueihqOS/oeaBr1xyXG5leHBvcnQgY29uc3QgZ2V0UmVwb3J0RGV0YWlsID0gKGRhdGEpID0+IHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL3JhL2FwcHJvdmFsXCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v562+5ZCN5a6h5om5XHJcbmV4cG9ydCBjb25zdCBzaWduUmVwb3J0ID0gKGRhdGEsdHlwZSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvYXBwcm92YWwvc2lnbj90eXBlPVwiK3R5cGUsXHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgZGF0YTogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/nu5/orqFcclxuZXhwb3J0IGNvbnN0IGNvdW50SW5mbyA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS9hcHByb3ZhbC9nZXRTdGF0XCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v6K+m5oOFXHJcbmV4cG9ydCBjb25zdCBnZXRBbGxSZXBvcnQgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvcmEvYXBwcm92YWwvZGV0YWlsXCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v5qCh6aqM5a+G56CBXHJcbmV4cG9ydCBjb25zdCBjaGVja1B3ZCA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS91c2VyL2NoZWNrUHdkXCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGEsXHJcbiAgfSk7XHJcbn07XHJcbi8v5pSv6ZifL+WIhuWxgOS4i+aLieahhlxyXG5leHBvcnQgY29uc3QgcXVlcnlEaXZpc2lvbiA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9yYS91c2VyL2RpdlwiLFxyXG4gICAgbWV0aG9kOiBcIkdFVFwiXHJcbiAgfSk7XHJcbn07XHJcbi8v546v5L+d552j5a+fLeiOt+WPluaJueasoeWIl+ihqFxyXG5leHBvcnQgY29uc3QgZ2V0U3VwZXJCYXRjaCA9IChkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9iYXRjaExpc3RcIixcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIHBhcmFtczogZGF0YSxcclxuICB9KTtcclxufTtcclxuLy/njq/kv53nnaPlr58t6I635Y+W5om55qyh5YiX6KGoXHJcbmV4cG9ydCBjb25zdCBnZXRTdXBlckxpc3QgPSAoaW5mbyxkYXRhKSA9PiB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9saXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgcGFyYW1zOiBpbmZvLFxyXG4gICAgZGF0YSA6IGRhdGFcclxuICB9KTtcclxufTtcclxuLy/njq/kv53nnaPlr58t6I635Y+W5om55qyh5YiX6KGoXHJcbmV4cG9ydCBjb25zdCBnZXRTdXBlckxpc3REZXRhaWwgPSAoZGF0YSkgPT4ge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvXCIsXHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBwYXJhbXM6IGRhdGFcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBib2FyZCgpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2JvYXJkXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb3VudHlMaXN0KHBhcmFtcykge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvYm9hcmQvZ2V0Q291bnR5XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IHBhcmFtcyxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluZm9MaXN0KHBhcmFtcykge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5mby9saXN0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IHBhcmFtcyxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGJhc2VJbmZvKHBhcmFtcykge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5mby9nZXRCeUlkXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgICBwYXJhbXM6IHBhcmFtcyxcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3RyaWJ1dGUocGFyYW1zKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbmZvL2Rpc3RyaWJ1dGUvXCIgKyBwYXJhbXMsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBoYW5kbGUocGFyYW1zKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbmZvL2hhbmRsZS9cIiArIHBhcmFtcyxcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmFsKHBhcmFtcykge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5mby9maW5hbC9cIiArIHBhcmFtcyxcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNvbXBhbnkocGFyYW1zKSB7XHJcbiAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgdXJsOiBcIi9lcy9pbmZvL3F5QnlJbmZvSWRcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICAgIHBhcmFtczogcGFyYW1zLFxyXG4gIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJvYmxlbSgpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luc3BlY3Rpb25Jc3N1ZXNcIixcclxuICAgIG1ldGhvZDogXCJnZXRcIixcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHRpbWVHcm91cCgpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luc3BlY3Rpb25Jc3N1ZXMvdGltZUdyb3VwXCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1bml0KCkge1xyXG4gIHJldHVybiByZXF1ZXN0KHtcclxuICAgIHVybDogXCIvZXMvaW5zcGVjdGlvbklzc3Vlcy9nZXRVbml0XCIsXHJcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9ibGVtTGlzdChwYXJhbXMpIHtcclxuICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICB1cmw6IFwiL2VzL2luc3BlY3Rpb25Jc3N1ZXMvcGFnZUxpc3RcIixcclxuICAgIG1ldGhvZDogXCJwb3N0XCIsXHJcbiAgICBkYXRhOiBwYXJhbXMsXHJcbiAgfSk7XHJcbn1cclxuXHJcbiIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcclxuXHJcbi8qKlxyXG4gKiDmn6Xor6LlvoXlip7mlbDph49cclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEluSGFuZENvdW50KGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvbWFuYWdlL3FyX2NsdWUvdXNlcl9jb3VudCcsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IGRhdGFcclxuICAgIH0pXHJcbn1cclxuLy/lvoXlip7kuovpobktLeW+heWKnuWuoeaguOWIl+ihqFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5IYW5kQ2hlY2tMaXN0KGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvbWFuYWdlL3FyX2NsdWUvYXVkaXRfbGlzdCcsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IGRhdGFcclxuICAgIH0pXHJcbn1cclxuLy/nur/ntKLor6bmg4VcclxuZXhwb3J0IGZ1bmN0aW9uIGdldENsdWVEZXRhaWwoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9tYW5hZ2UvcXJfY2x1ZS9vbmVfZGV0YWlsJyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczogZGF0YVxyXG4gICAgfSlcclxufVxyXG4vL+aIkeeahOWuoeaJueWIl+ihqFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWluZUNsdWVMaXN0KGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvbWFuYWdlL3FyX2NsdWUvbGlzdCcsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IGRhdGFcclxuICAgIH0pXHJcbn1cclxuLy8g5rWB56iLMe+8muWIhueuoeWxgOmVv+WuoeaJuVxyXG5leHBvcnQgY29uc3QgbGVhZGVyQ2hlY2sgPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL21hbmFnZS9xcl9jbHVlL29uZV9sZWFkZXJfYXBwcm92ZScsXHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgfSlcclxufTtcclxuLy8g6Zet546v77ya5YiG566h5bGA6ZW/5a6h5om5XHJcbmV4cG9ydCBjb25zdCBoYm1MZWFkZXJDaGVjayA9IChkYXRhKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL3FyX2NsdWUvb25lX2xlYWRlcl9hcHByb3ZlJyxcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICB9KVxyXG59O1xyXG4vLyDmtYHnqIsy77ya5YiG566h5bGA6ZW/5a6h5om5XHJcbmV4cG9ydCBjb25zdCBsZWFkZXJDaGVja1R3byA9IChkYXRhKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvbWFuYWdlL3FyX2NsdWUvdHdvX2xlYWRlcl9hcHByb3ZlJyxcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICB9KVxyXG59O1xyXG4vLyDmtYHnqIsy77ya5a+55Y+j5Lia5Yqh6YOo6Zeo5a6h5qC4XHJcbmV4cG9ydCBjb25zdCBkZXB0QXBwcm92YWwgPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL21hbmFnZS9xcl9jbHVlL21hbmFnZV9kZXB0X2V4YW1pbmUnLFxyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIGRhdGE6IGRhdGFcclxuICAgIH0pXHJcbn07XHJcbi8vIOWIhueuoemihuWvvC0t5LiL5ouJ5qGGXHJcbmV4cG9ydCBjb25zdCBxdWVyeUxlYWRlckxpc3QgPSAoKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvbWFuYWdlL3FyX2NsdWUvdXNlcl9pbmZvJyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczoge31cclxuICAgIH0pXHJcbn07XHJcbi8v5YiG5Y+R6YOo6Zeo5LiL5ouJXHJcbmV4cG9ydCBjb25zdCBxdWVyeURlcGFydG1lbnRMaXN0ID0gKGRhdGEpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9tYW5hZ2UvcXJfY2x1ZS9kaXN0cmlidXRpb25fZGVwdCcsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IGRhdGFcclxuICAgIH0pXHJcbn07XHJcbi8v5YiG5Y+R6YOo6ZeoLS3kurrlkZjkuIvmi4lcclxuZXhwb3J0IGNvbnN0IHF1ZXJ5RGVwdFBlcnNvbkxpc3QgPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL21hbmFnZS9xcl9jbHVlL2Rpc3RyaWJ1dGlvbl91c2VyJyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczogZGF0YVxyXG4gICAgfSlcclxufTtcclxuLy/miafms5XmlK/pmJ/kurrlkZjkuIvmi4lcclxuZXhwb3J0IGNvbnN0IHF1ZXJ5TGF3TGlzdCA9ICgpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9tYW5hZ2UvcXJfY2x1ZS9kZXRhY2htZW50X3VzZXInLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiB7fVxyXG4gICAgfSlcclxufTtcclxuLy8g5pSv6Zif5YiG5Y+RXHJcbmV4cG9ydCBjb25zdCBicm9hbmNoRGlzdHJpYnV0ZSA9IChkYXRhKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvbWFuYWdlL3FyX2NsdWUvZGlzdHJpYnV0aW9uJyxcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICB9KVxyXG59O1xyXG4vL+S/neWtmOeOsOWcuuebkeafpeiusOW9lVxyXG5leHBvcnQgY29uc3Qgc2F2ZUNoZWNrUmVjb3JkID0gKGRhdGEpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9tYW5hZ2UvcXJfY2x1ZS9yZWNvcmRfZXhhbWluYXRpb24nLFxyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIGRhdGE6IGRhdGFcclxuICAgIH0pXHJcbn07XHJcbi8v5LiK5Lyg6ZmE5Lu2XHJcbmV4cG9ydCBmdW5jdGlvbiB1cGxvYWRGaWxlcyhkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiBcIi9taW5pby91cGxvYWRcIixcclxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGE6ZGF0YVxyXG4gICAgfSk7XHJcbn1cclxuLy/mlrDlop7moLjlrp7kv6Hmga9cclxuZXhwb3J0IGNvbnN0IGFkZFZlcmlmeSA9IChkYXRhKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvbWFuYWdlL3FyX2NsdWUvY2hlY2tpbmcnLFxyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIGRhdGE6IGRhdGFcclxuICAgIH0pXHJcbn07XHJcbi8v5pSv6Zif5qC45a6eXHJcbmV4cG9ydCBjb25zdCBicm9hbmNoVmVyaWZ5ID0gKGRhdGEpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9tYW5hZ2UvcXJfY2x1ZS92ZXJpZnknLFxyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIGRhdGE6IGRhdGFcclxuICAgIH0pXHJcbn07XHJcbi8v5Yqe57uTXHJcbmV4cG9ydCBjb25zdCBmaW5pc2hGbG93ID0gKGRhdGEpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9tYW5hZ2UvcXJfY2x1ZS9jb21wbGV0aW9uJyxcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICB9KVxyXG59O1xyXG4vLyDpl63njq/vvJrliIbnrqHlsYDplb/lrqHmiblcclxuZXhwb3J0IGNvbnN0IGhibUZpbmlzaEZsb3cgPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9xcl9jbHVlL2NvbXBsZXRpb24nLFxyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIGRhdGE6IGRhdGFcclxuICAgIH0pXHJcbn07XHJcbi8v5pW05pS55oOF5Ya15Y+N6aaIXHJcbmV4cG9ydCBjb25zdCBmZWVkQmFjayA9IChkYXRhKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL3FyX2NsdWUvcmVjdGlmaWNhdGlvbicsXHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgfSlcclxufTtcclxuXHJcblxyXG4vL+e6v+e0ouWIl+ihqFxyXG5leHBvcnQgY29uc3QgZ2V0WHMgPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL21hbmFnZS9xcl9jbHVlL2NsdWVfbGlzdCcsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IGRhdGFcclxuICAgIH0pXHJcbn07XHJcblxyXG4vL+e6v+e0ouivpuaDhVxyXG5leHBvcnQgY29uc3QgeHNEZXRhaWwgPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL21hbmFnZS9xcl9jbHVlL2RldGFpbCcsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IGRhdGFcclxuICAgIH0pXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImltZy9ob21lLWhlYWRlcjIucG5nXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiaW1nL3dhcm5pbmctYmctbGVmdC5wbmdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCd0FBQUFjQ0FZQUFBQnlEZCtVQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBSGtTVVJCVkVpSnJaVzliaFJCRUlTL3NuZ05uc0srczJ4akpKNEJJU0ZpQkFnd0FkWkJDRG0rNHl3a0pFZ0FrUkR6QkNURzl0bm5sSUNjMXlpQ216WEwzc3pzanZkR2F1MWZkVmRYOVl3V0NwZnRkZHNYdGgrVjVnS3NYU0ZISVRaV1JoaFVuTGZrS1pINzFQWmVFU0d3SHBJZlJMNnBGazJ5SWJBSEREUE54cGZ0ZVdwV3RnZTJCNUgzWDIzL3RyMlpxcHViNFVjV0twYXNsWFFtNlN5U0kyQW02VFJUdDN3RjY2NjBGT1kwbHpUUEVBeFl6R1VBYlBKdmhyTndmWmRUWlhzTFFOS3h3bTRVY0FGOGtIVGVBRDhCSHZQL1pvbkZERGlVZE5MSTN3ZjJBK2EyYkc4QUQwUDNBdTVYODdIOXFhR29TMHdsdlkyUWpTVWRYRzd0WU50QTB2dncvRG5ZV0VLbWhYTzZIbXBzQTl1U0RpcWUxT0VkQWw4eVJVL0RkU3Z4ZlNKcEhLdWRJdnpWb3VJZThLMEZNNUgwcGxuN1drTGRHdWxDaHdHYXcwU0ZWRWtwNWFuNVRGdUlxdGlKRlY1U0NEekxkSCszMFd5T2NMY3JZYXJBaWFUakd1NU83WDRVRkxYYVdrSTR2UVRVaUcyUGdCdUpuTTZFTWJ1ZTI2N3V4NUorMnQ0QlhtU2E3S1d3YnRra1lFY1pmRytGOVoxNkZOVHRsaExHamtXWExRL3d2U091dDhJajJ5L2JYQ2dsYkR0Zk53dWM2SzJ3SkpZSnd6K0xHbUJWWkxMOXFsNWIwbXZaL3RPU3VJb0dxblZMNFNkSjQwUGY1Nmlka243OEJkSHd1eXVkQmorckFBQUFBRWxGVGtTdVFtQ0NcIiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUZBQUFBQlFDQVlBQUFDT0VmS3RBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFIL1NVUkJWSGljN1pwQmRzTWdERVJGTDFaeXNwS1RtWnhzdW5EOFhwUG4xazBRQTRiNXUyd1FHa3NLQ0prSklZUVFRZ2doaEJCekVWcHZZQThBOGNmUGFHYlp6Q3lFa1BtN09Ra0FJb0FGeHlRQXFmVit1K0VGNFhiRmJMMy9wdHlqcVpUVTJvOG1GRVRkSGt0cmY2akFKL0xtRkxHU2VCdUo3US85R0FNQWxVMWNtTWVkRDVZaHN6WDZDR2ErQ0RiNFlEMnVzSWdzdjVnUkdJbTJhRkZJcTRHRTJ2ZEFDSUhpRzdVR01tR2xNVVZBWmsxaU0yd0VHcW5taml3Z2haRUZ6QXdqRkFGSGJvUXlJekFUYmRFKzJxZ3BmR1VaWWdwSWMycFk0TnRFL1ExcVg1Q2R3b3dvdkJGc3RBT0ROVlNiVUVuRTFOb3ZLczRpenZFZThveVRpS20xSDgxNVU4Z0ZBM2Q1WGdacnkvOUl5S1UzNGJvY0xqTGI3eUdPZktlZWxtWVJlSSt3YUdhZmhVdmR6TXhDQ0tsd25mNUIyU1RXZjFndzRyOHlRYmhueHBraFJOMnIyNkdRcmYwdm9yRjRHNm0xRG0rQlBzVGJPTmRWRDMySnQ1RnErT3Arak1GNlBPbjFpN3VQdnRWb3FNWUthM3JSOStnYitremRaNktuejZPK3l2MkZheFM2MWtDQU84SldnRnN0ZEl0QW5QVzhWY2lNS1d6bW1NYXpDdWlHcDRDbGJTa20wV3NoUldBaHN3cVl2UmJ5RlBCTXcwTnU0eCt6Um1DZjRCeFh1ZVRwYzQxdXpHTDlOaFJ5Q09IaXVhQjdDdDgzMkdNOXZIcUxaMWJ4V1JPUHo1YXhscDBEc3ExL0dGbVA4a0lJSVlRUVFnZ2hoT2lDYnhDMTJPalZtcUpNQUFBQUFFbEZUa1N1UW1DQ1wiIiwibW9kdWxlLmV4cG9ydHMgPSBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQ3dBQUFBc0NBWUFBQUFlaEZvQkFBQUFBWE5TUjBJQXJzNGM2UUFBQUFSelFrbFVDQWdJQ0h3SVpJZ0FBQUdUU1VSQlZGaUY3Wm05UzhRd0dJZC82ZGRCdUd4QjZMazR1VG1JZzBQLy9wdmQzYlVPZGNxUjRYcFFoNWQ2clUyVmZBbUZQR01vVDk2K0tlWHRyd3dBcEd3RTBOY0FFN0JtVUVCLzZycVg5N1VyL1B3QWNHNUhmeTdsNHdGZ2R3RGJ1Y25ZRHNnRjV6ZE02dzlsdW9Menc0TzdIeUQvcmRENjdUTUR5cjI3YUVwVm0xYXBJU0ZnUXNwR1pPN0h0SVNPL2lmbUczRWxDeW1ManhZYkszaHpIVTRGeHljVkhKdFVjR3hTd2JIWllzR0RjU1Iwb2V1T0JsYzRQOEJWQnZTbk1MSnphMTR2VjladEdWVFhIVlZHay96YVpqWXk4eGNIZGQzZlA5NDRteTZiNTltL01UOEtTMkw3RTRrdHdJQnBiZ0RZZjVUYTVCTCsvcHhrbDN2S0RWeXlBNXRjd3Q5ZkFGb0FsYjFuUVZVRFdIUjVua3RRdCt5ODVaNU9wYXFsYkZRUk1qZVFzaEhMZCtZWTFGempKbHNuY1BsK2pQNWgrUEVMYXVZTlNMbEVmRkxCc1VrRnh5WVZISnRVY0d5MldIREkzTURFNkhmN1d6V2Y5cmdxYU55ckF2eEpvdHhndVY2Mk5HMHhJZVh6azg4T1FYT0p0Y0FrWEM1UnZBS1RYSUxtVG0zWmFhNnVSZjJPbTUvMm1QcS9BRGlCclg1blExOWlBQUFBQUVsRlRrU3VRbUNDXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL0Zsb2F0QnV0dG9uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00YjMyYjc3YSZzY29wZWQ9dHJ1ZSZcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9GbG9hdEJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL0Zsb2F0QnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuaW1wb3J0IHN0eWxlMCBmcm9tIFwiLi9GbG9hdEJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPWNzcyZcIlxuaW1wb3J0IHN0eWxlMSBmcm9tIFwiLi9GbG9hdEJ1dHRvbi52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MSZpZD00YjMyYjc3YSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBcIjRiMzJiNzdhXCIsXG4gIG51bGxcbiAgXG4pXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIHZhciBhcGkgPSByZXF1aXJlKFwiRDpcXFxcaGVsaXBpbmdXb3JrXFxcXEFQUFxcXFxrbUVudlBvcnRhYmxlXFxcXHdlYmFwcE9TXFxcXG5vZGVfbW9kdWxlc1xcXFx2dWUtaG90LXJlbG9hZC1hcGlcXFxcZGlzdFxcXFxpbmRleC5qc1wiKVxuICBhcGkuaW5zdGFsbChyZXF1aXJlKCd2dWUnKSlcbiAgaWYgKGFwaS5jb21wYXRpYmxlKSB7XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICAgIGlmICghYXBpLmlzUmVjb3JkZWQoJzRiMzJiNzdhJykpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzRiMzJiNzdhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzRiMzJiNzdhJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9GbG9hdEJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGIzMmI3N2Emc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignNGIzMmI3N2EnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy9jb21wb25lbnRzL2NvbW1vbi9GbG9hdEJ1dHRvbi52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Zsb2F0QnV0dG9uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GbG9hdEJ1dHRvbi52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS03LW9uZU9mLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS03LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS03LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL0Zsb2F0QnV0dG9uLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9Y3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vRmxvYXRCdXR0b24udnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTEmaWQ9NGIzMmI3N2Emc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjpcXFwibm9kZV9tb2R1bGVzLy5jYWNoZS92dWUtbG9hZGVyXFxcIixcXFwiY2FjaGVJZGVudGlmaWVyXFxcIjpcXFwiNGJhZTA0ODItdnVlLWxvYWRlci10ZW1wbGF0ZVxcXCJ9IS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3RlbXBsYXRlTG9hZGVyLmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9GbG9hdEJ1dHRvbi52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NGIzMmI3N2Emc2NvcGVkPXRydWUmXCIiLCJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucyB9IGZyb20gXCIuL2FpcldhdGVyV2FybmluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODkyN2Y2MjYmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYWlyV2F0ZXJXYXJuaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vYWlyV2F0ZXJXYXJuaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiODkyN2Y2MjZcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnODkyN2Y2MjYnKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnODkyN2Y2MjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnODkyN2Y2MjYnLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2FpcldhdGVyV2FybmluZy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ODkyN2Y2MjYmc2NvcGVkPXRydWUmXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGFwaS5yZXJlbmRlcignODkyN2Y2MjYnLCB7XG4gICAgICAgIHJlbmRlcjogcmVuZGVyLFxuICAgICAgICBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZuc1xuICAgICAgfSlcbiAgICB9KVxuICB9XG59XG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInNyYy92aWV3cy9ob21lUGFnZS9jb21wb25lbnRzL2FpcldhdGVyV2FybmluZy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FpcldhdGVyV2FybmluZy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCI7IGV4cG9ydCBkZWZhdWx0IG1vZDsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYWlyV2F0ZXJXYXJuaW5nLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYWlyV2F0ZXJXYXJuaW5nLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04OTI3ZjYyNiZzY29wZWQ9dHJ1ZSZcIiIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ3ZDc1M2FiJnNjb3BlZD10cnVlJlwiXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ3ZDc1M2FiJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIFwiNDdkNzUzYWJcIixcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCJEOlxcXFxoZWxpcGluZ1dvcmtcXFxcQVBQXFxcXGttRW52UG9ydGFibGVcXFxcd2ViYXBwT1NcXFxcbm9kZV9tb2R1bGVzXFxcXHZ1ZS1ob3QtcmVsb2FkLWFwaVxcXFxkaXN0XFxcXGluZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFhcGkuaXNSZWNvcmRlZCgnNDdkNzUzYWInKSkge1xuICAgICAgYXBpLmNyZWF0ZVJlY29yZCgnNDdkNzUzYWInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbG9hZCgnNDdkNzUzYWInLCBjb21wb25lbnQub3B0aW9ucylcbiAgICB9XG4gICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIuL2luZGV4LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD00N2Q3NTNhYiZzY29wZWQ9dHJ1ZSZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc0N2Q3NTNhYicsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL3ZpZXdzL2hvbWVQYWdlL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTQ3ZDc1M2FiJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTQ3ZDc1M2FiJnNjb3BlZD10cnVlJlwiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9wb2xsdXRpb25PdmVydmlldy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZDAxZmFhNjgmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vcG9sbHV0aW9uT3ZlcnZpZXcudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9wb2xsdXRpb25PdmVydmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vcG9sbHV0aW9uT3ZlcnZpZXcudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZDAxZmFhNjgmbGFuZz1zY3NzJnNjb3BlZD10cnVlJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCJkMDFmYWE2OFwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCdkMDFmYWE2OCcpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCdkMDFmYWE2OCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCdkMDFmYWE2OCcsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vcG9sbHV0aW9uT3ZlcnZpZXcudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWQwMWZhYTY4JnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJ2QwMWZhYTY4Jywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3Mvc2VhcmNoQ29tcG9uZW50cy9jb21wb25lbnRzL3BvbGx1dGlvbi9wb2xsdXRpb25PdmVydmlldy52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BvbGx1dGlvbk92ZXJ2aWV3LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEzLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wb2xsdXRpb25PdmVydmlldy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9wb2xsdXRpb25PdmVydmlldy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1kMDFmYWE2OCZsYW5nPXNjc3Mmc2NvcGVkPXRydWUmXCIiLCJleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOlxcXCJub2RlX21vZHVsZXMvLmNhY2hlL3Z1ZS1sb2FkZXJcXFwiLFxcXCJjYWNoZUlkZW50aWZpZXJcXFwiOlxcXCI0YmFlMDQ4Mi12dWUtbG9hZGVyLXRlbXBsYXRlXFxcIn0hLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvdGVtcGxhdGVMb2FkZXIuanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3BvbGx1dGlvbk92ZXJ2aWV3LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1kMDFmYWE2OCZzY29wZWQ9dHJ1ZSZcIiJdLCJzb3VyY2VSb290IjoiIn0=