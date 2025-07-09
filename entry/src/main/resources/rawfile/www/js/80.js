(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[80],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/inHand/index.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--13-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/inHand/index.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api_clue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../api/clue */ "./src/api/clue.js");
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vant */ "./node_modules/vant/es/index.js");


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "MineClue",
  data: function data() {
    return {
      navTitle: '我的审批',
      searchKeyword: '',
      tabArr: ['待审核', '待处理', '已处理'],
      activeIndex: 0,
      loading: false,
      clueList: [],
      showCheck: false,
      clueId: '',
      flowId: '',
      clueState: '',
      title: '审核',
      status: '是',
      opinion: '',
      approvalInfo: {
        joint_status: '是',
        joint_department: '',
        leader_user_id: '',
        leader_user: ''
      },
      bmList: ['昆明市发展和改革委员会', '昆明市工业和信息化局', '昆明市科学技术局', '昆明市民族宗教事务委员会', '昆明市公安局', '昆明市民政局', '昆明市司法局', '昆明市财政局', '昆明市人力资源和社会保障局', '昆明市自然资源和规划局', '昆明市住房和城乡建设局', '昆明市交通运输局', '昆明市农业农村局'],
      showPickerType: false,
      leaderList: [],
      showPickerDept: false,
      btnLoading: false,
      func: null,
      // 分发
      checkboxValue: [],
      checkedAll: false,
      show: false,
      showDistribute: false,
      distributeInfo: {
        type: '支队',
        leader_user_id: '',
        leader_user: '',
        dept: '',
        dept_id: ''
      },
      broanchs: [],
      persons: [],
      showPickerLeader: false,
      showPickerLeader2: false,
      // 办结
      finishInfo: {
        rectification_status: '是',
        rectification_content: ''
      },
      task: '',
      // '' 表示从【待办事项】进入;'线索' 表示从【待办应用】的线索进入;'闭环' 表示从【待办应用】的闭环进入
      taskType: '' //为空或者null 是线索，有值的 是闭环

    };
  },
  mounted: function mounted() {
    if (this.$store.state.type === '我的审批-线索') {
      this.navTitle = '我的审批';
      this.tabArr = ['待审核', '待处理', '已处理'];
      this.task = '线索';
    } else if (this.$store.state.type === '我的审批-闭环') {
      this.navTitle = '我的审批';
      this.tabArr = ['待审核', '待处理', '已处理'];
      this.task = '闭环';
    } else {
      this.navTitle = '待办事项';
      this.tabArr = ['待审核', '待处理'];
      this.task = '';
    }

    this.queryMineClues();
  },
  methods: {
    onChangeTab: function onChangeTab(idx) {
      this.activeIndex = idx;
      this.queryMineClues();
    },
    queryMineClues: function queryMineClues() {
      var _this = this;

      this.loading = true;
      var params = {
        name: this.searchKeyword,
        type: this.activeIndex === 0 ? '待审核' : this.activeIndex === 1 ? '待处理' : '已处理',
        user_id: localStorage.getItem('userId'),
        task: this.task
      };
      Object(_api_clue__WEBPACK_IMPORTED_MODULE_2__["getMineClueList"])(params).then(function (res) {
        _this.clueList = res.data;
      }).finally(function (re) {
        _this.loading = false;
      });
    },
    getStyleColor: function getStyleColor(state) {
      if (state === '待填写') {
        return 'background: rgba(244, 131, 0, 0.1);color:rgba(244, 131, 0, 1);';
      } else if (state === '待审核' || state === '待审批' || state === '待分发' || state === '待核实') {
        return 'background: rgba(255, 141, 26, 0.1);color:rgba(255, 141, 26, 1);';
      } else if (state === '待办结') {
        return 'background: rgba(227, 218, 0, 0.1);color:rgba(227, 218, 0, 1);';
      } else if (state === '已办结') {
        return 'background: rgba(2, 217, 127, 0.1);color:rgba(2, 217, 127, 1);';
      }
    },
    changeJoint: function changeJoint() {
      if (this.approvalInfo.joint_status === '否') {
        this.approvalInfo.joint_department = '';
      }
    },
    // 联合执法单位多选
    onConfirmDept: function onConfirmDept() {
      this.approvalInfo.joint_department = this.checkboxValue.toString();
      this.showPickerDept = !this.showPickerDept;
    },
    cancel: function cancel() {
      this.showPickerDept = !this.showPickerDept;
    },
    toggle: function toggle(index) {
      this.$refs.checkboxes[index].toggle();
    },
    // 分发支队/分局下拉
    queryLawDept: function queryLawDept() {
      var _this2 = this;

      Object(_api_clue__WEBPACK_IMPORTED_MODULE_2__["queryDepartmentList"])({
        type: this.distributeInfo.type
      }).then(function (res) {
        _this2.broanchs = res.data;
        _this2.distributeInfo.dept = '';
        _this2.distributeInfo.dept_id = '';
        _this2.checkboxValue = [];
        _this2.distributeInfo.leader_user_id = '';
        _this2.distributeInfo.leader_user = '';
      });
    },
    onConfirmDeptLeader: function onConfirmDeptLeader(value) {
      this.showPickerLeader = false;
      this.distributeInfo.dept = value.SSBM;
      this.distributeInfo.dept_id = value.DEPT_ID;

      if (this.distributeInfo.type === '支队') {
        this.changeDept();
      }
    },
    //切换支队查询支队人员
    changeDept: function changeDept() {
      this.queryDeptPerson();
      this.checkboxValue = [];
      this.distributeInfo.leader_user_id = '';
      this.distributeInfo.leader_user = '';
    },
    //获取支队人员下拉
    queryDeptPerson: function queryDeptPerson() {
      var _this3 = this;

      Object(_api_clue__WEBPACK_IMPORTED_MODULE_2__["queryDeptPersonList"])({
        dept: this.distributeInfo.dept_id
      }).then(function (res) {
        _this3.persons = res.data;
      });
    },
    onConfirmLeader: function onConfirmLeader() {
      if (this.checkboxValue.length > 2) {
        Object(vant__WEBPACK_IMPORTED_MODULE_3__["Toast"])('最多只能选择两个人分发！');
      } else {
        this.distributeInfo.leader_user = this.checkboxValue.toString();
        var chooseId = [];

        for (var i = 0; i < this.persons.length; i++) {
          for (var j = 0; j < this.checkboxValue.length; j++) {
            if (this.checkboxValue[j] === this.persons[i].MC) {
              chooseId.push(this.persons[i].OBJECTID);
            }
          }
        }

        this.distributeInfo.leader_user_id = chooseId.toString();
        this.showPickerLeader2 = !this.showPickerLeader2;
      }
    },
    cancel2: function cancel2() {
      this.distributeInfo.leader_user_id = '';
      this.distributeInfo.leader_user = '';
      this.checkboxValue = [];
      this.showPickerLeader2 = !this.showPickerLeader2;
    },
    //审核picker确认
    onConfirmType: function onConfirmType(value) {
      this.showPickerType = false;
      this.approvalInfo.leader_user = value.mc;
      this.approvalInfo.leader_user_id = value.objectid;
    },
    //分管领导下拉
    queryLeaderDatas: function queryLeaderDatas() {
      var _this4 = this;

      Object(_api_clue__WEBPACK_IMPORTED_MODULE_2__["queryLeaderList"])().then(function (res) {
        _this4.leaderList = res.data;
      });
    },
    // ============================== 审核/审批/办结
    checkData: function checkData(state, data) {
      this.queryLeaderDatas();
      this.approvalInfo = {
        joint_status: '是',
        joint_department: '',
        leader_user_id: '',
        leader_user: ''
      };
      this.opinion = '';
      this.checkboxValue = [];
      this.showCheck = true;
      this.status = state;
      this.clueId = data.id;
      this.clueState = data.status;
      this.flowId = data.flow_id;
      this.taskType = data.task_type;
      this.title = this.clueState === '待审核' ? '审核' : this.clueState === '待审批' ? '审批' : '办结';

      if (this.taskType !== '') {
        this.func = this.clueState === '待办结' ? _api_clue__WEBPACK_IMPORTED_MODULE_2__["hbmFinishFlow"] : _api_clue__WEBPACK_IMPORTED_MODULE_2__["hbmLeaderCheck"];
      } else {
        this.func = this.clueState === '待办结' ? _api_clue__WEBPACK_IMPORTED_MODULE_2__["finishFlow"] : this.clueState === '待审核' ? _api_clue__WEBPACK_IMPORTED_MODULE_2__["deptApproval"] : data.business_unit === "" ? _api_clue__WEBPACK_IMPORTED_MODULE_2__["leaderCheck"] : _api_clue__WEBPACK_IMPORTED_MODULE_2__["leaderCheckTwo"];
      }
    },
    validApproval: function validApproval() {
      if (this.clueState === '待审批') {
        if (this.status === '否' && this.opinion === '') {
          Object(vant__WEBPACK_IMPORTED_MODULE_3__["Toast"])('请填写不同意原因！');
        } else {
          this.onSureCheck();
        }
      } else if (this.clueState === '待办结') {
        if (this.status === '否' && this.opinion === '') {
          Object(vant__WEBPACK_IMPORTED_MODULE_3__["Toast"])('请填写不同意原因！');
        } else {
          if (this.taskType !== '' && this.taskType !== null) {
            if (this.finishInfo.rectification_status === '是' && this.finishInfo.rectification_content === '') {
              Object(vant__WEBPACK_IMPORTED_MODULE_3__["Toast"])('请填写整改内容！');
            } else {
              this.onSureCheck();
            }
          } else {
            this.onSureCheck();
          }
        }
      } else {
        if (this.status === '是') {
          if (this.approvalInfo.leader_user_id === '') {
            Object(vant__WEBPACK_IMPORTED_MODULE_3__["Toast"])('请选择分管局长！');
          } else {
            if (this.approvalInfo.joint_status === '是') {
              if (this.approvalInfo.joint_department === '') {
                Object(vant__WEBPACK_IMPORTED_MODULE_3__["Toast"])('请选择联合执法单位！');
              } else {
                this.onSureCheck();
              }
            } else {
              this.onSureCheck();
            }
          }
        } else {
          if (this.opinion === '') {
            Object(vant__WEBPACK_IMPORTED_MODULE_3__["Toast"])('请填写不同意原因！');
          } else {
            if (this.approvalInfo.joint_status === '是') {
              if (this.approvalInfo.joint_department === '') {
                Object(vant__WEBPACK_IMPORTED_MODULE_3__["Toast"])('请选择联合执法单位！');
              } else {
                this.onSureCheck();
              }
            } else {
              this.onSureCheck();
            }
          }
        }
      }
    },
    //提交
    onSureCheck: function onSureCheck() {
      var _this5 = this;

      this.btnLoading = true;
      var params = {};

      if (this.clueState === '待审核') {
        params = {
          clue_id: this.clueId,
          flow_path_id: this.flowId,
          //当前流程id--详情接口会返回
          joint_status: this.approvalInfo.joint_status,
          joint_department: this.approvalInfo.joint_department,
          leader_user: this.approvalInfo.leader_user,
          leader_user_id: this.approvalInfo.leader_user_id,
          examine_status: this.status,
          opinion: this.opinion,
          sender_uer: localStorage.getItem("userName"),
          sender_uer_id: localStorage.getItem("userId")
        };
      } else if (this.clueState === '待办结') {
        params = {
          clue_id: this.clueId,
          flow_path_id: this.flowId,
          opinion: this.opinion,
          completion_status: this.status,
          rectification_status: this.finishInfo.rectification_status,
          rectification_content: this.finishInfo.rectification_content,
          sender_uer: localStorage.getItem("userName"),
          sender_uer_id: localStorage.getItem("userId")
        };
      } else {
        params = {
          clue_id: this.clueId,
          flow_path_id: this.flowId,
          //当前流程id--详情接口会返回
          approve_status: this.status,
          opinion: this.opinion,
          sender_uer: localStorage.getItem("userName"),
          sender_uer_id: localStorage.getItem("userId")
        };
      }

      this.func(params).then(function (res) {
        if (res.code === '200') {
          Object(vant__WEBPACK_IMPORTED_MODULE_3__["Toast"])(_this5.title + '成功!');
          _this5.showCheck = false;

          _this5.queryMineClues();
        } else {
          Object(vant__WEBPACK_IMPORTED_MODULE_3__["Toast"])('失败!');
        }
      }).finally(function (re) {
        _this5.btnLoading = false;
      });
    },
    // ============================ 处理
    dealData: function dealData(data) {
      if (data.status === '待分发') {
        this.queryLawDept();
        this.clueId = data.id;
        this.flowId = data.flow_id;
        this.distributeInfo = {
          type: '支队',
          leader_user_id: '',
          leader_user: '',
          dept: '',
          dept_id: ''
        };
        this.checkboxValue = [];
        this.showDistribute = true;
      } else {
        this.toDetail(data);
      }
    },
    validDistribute: function validDistribute() {
      if (this.distributeInfo.type === '支队') {
        if (this.distributeInfo.dept === '') {
          Object(vant__WEBPACK_IMPORTED_MODULE_3__["Toast"])('选择一个支队分发！');
        } else {
          if (this.distributeInfo.leader_user_id === '') {
            Object(vant__WEBPACK_IMPORTED_MODULE_3__["Toast"])('至少选择一个支队人员分发！');
          } else {
            this.onSureDistribute();
          }
        }
      } else {
        if (this.distributeInfo.dept === '') {
          Object(vant__WEBPACK_IMPORTED_MODULE_3__["Toast"])('至少选择一个分局分发！');
        } else {
          this.onSureDistribute();
        }
      }
    },
    // 分发
    onSureDistribute: function onSureDistribute() {
      var _this6 = this;

      var params = {
        clue_id: this.clueId,
        flow_path_id: this.flowId,
        //当前流程id--详情接口会返回
        dept: this.distributeInfo.dept_id,
        type: this.distributeInfo.type,
        leader_user: this.distributeInfo.leader_user,
        leader_user_id: this.distributeInfo.leader_user_id,
        sender_uer: localStorage.getItem("userName"),
        sender_uer_id: localStorage.getItem("userId")
      };
      Object(_api_clue__WEBPACK_IMPORTED_MODULE_2__["broanchDistribute"])(params).then(function (res) {
        if (res.code === '200') {
          Object(vant__WEBPACK_IMPORTED_MODULE_3__["Toast"])('分发成功！');
          _this6.showDistribute = false;

          _this6.queryMineClues();
        } else {
          Object(vant__WEBPACK_IMPORTED_MODULE_3__["Toast"])(res.msg);
        }
      });
    },
    // 详情
    toDetail: function toDetail(item) {
      var title = this.activeIndex === 0 ? '待审核详情' : this.activeIndex === 1 ? '待处理详情' : '线索详情';
      this.$router.push({
        name: 'inHandDetail',
        params: {
          flag: title,
          clueId: item.id
        }
      });
    },
    goSearch: function goSearch() {
      this.show = true;
    },
    onSearch: function onSearch() {
      this.queryMineClues();
      this.show = false;
    },
    //跳转待办应用
    goToHandleList: function goToHandleList() {
      this.$router.push({
        name: 'inHandApply',
        params: {}
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/inHand/index.vue?vue&type=template&id=243897d1&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/inHand/index.vue?vue&type=template&id=243897d1&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
        attrs: { title: _vm.navTitle, "left-arrow": "" },
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
                _vm.navTitle === "待办事项"
                  ? _c("img", {
                      attrs: { src: __webpack_require__(/*! ../../assets/clue/待办应用.png */ "./src/assets/clue/待办应用.png") },
                      on: { click: _vm.goToHandleList },
                    })
                  : _c("van-search", {
                      staticStyle: { width: "60px", padding: "5px 10px" },
                      attrs: { shape: "round", placeholder: "" },
                      on: { click: _vm.goSearch },
                      model: {
                        value: _vm.searchKeyword,
                        callback: function ($$v) {
                          _vm.searchKeyword = $$v
                        },
                        expression: "searchKeyword",
                      },
                    }),
              ]
            },
            proxy: true,
          },
        ]),
      }),
      _vm.navTitle === "待办事项"
        ? _c(
            "div",
            { staticClass: "clue-tab-wrapper" },
            _vm._l(_vm.tabArr, function (item, i) {
              return _c(
                "div",
                {
                  class: _vm.activeIndex === i ? "activeItem text" : "text",
                  on: {
                    click: function ($event) {
                      return _vm.onChangeTab(i)
                    },
                  },
                },
                [_c("span", [_vm._v(_vm._s(item))])]
              )
            }),
            0
          )
        : _c(
            "div",
            { staticClass: "clue-tab-wrapper" },
            _vm._l(_vm.tabArr, function (item, i) {
              return _c(
                "span",
                {
                  class: _vm.activeIndex === i ? "active tabText" : "tabText",
                  on: {
                    click: function ($event) {
                      return _vm.onChangeTab(i)
                    },
                  },
                },
                [_vm._v(_vm._s(item))]
              )
            }),
            0
          ),
      _vm.loading
        ? _c(
            "van-loading",
            {
              staticStyle: { "margin-top": "50%" },
              attrs: { size: "24px", color: "#0094ff", vertical: "" },
            },
            [_vm._v("加载中...")]
          )
        : _vm._e(),
      (_vm.activeIndex === 0 || _vm.activeIndex === 1) && _vm.loading === false
        ? _c(
            "div",
            { staticClass: "list-wrapper" },
            _vm._l(_vm.clueList, function (item) {
              return _c("div", { staticClass: "clue-wrapper" }, [
                _c(
                  "div",
                  {
                    staticClass: "clue-wrapper-item",
                    on: {
                      click: function ($event) {
                        return _vm.toDetail(item)
                      },
                    },
                  },
                  [
                    _c("div", { staticClass: "title_image" }, [
                      _c("img", {
                        attrs: {
                          src: __webpack_require__(/*! ../../assets/clue/title_left.png */ "./src/assets/clue/title_left.png"),
                        },
                      }),
                      _c("span", [
                        _vm._v(
                          _vm._s(
                            item.task_type === "" ? "线索管理" : "闭环管理"
                          )
                        ),
                      ]),
                    ]),
                    _c("div", { staticClass: "title_time" }, [
                      _c(
                        "span",
                        {
                          staticClass: "state",
                          style: _vm.getStyleColor(item.status),
                        },
                        [_vm._v(_vm._s(item.status))]
                      ),
                      _c("span", [
                        _vm._v("填报时间：" + _vm._s(item.create_time)),
                      ]),
                    ]),
                    _c("div", { staticClass: "title" }, [
                      _c("span", [_vm._v(_vm._s(item.type))]),
                    ]),
                    _c("div", { staticClass: "title_content" }, [
                      _c("span", [
                        _vm._v("线索基本情况：" + _vm._s(item.basic_info)),
                      ]),
                    ]),
                    _c(
                      "div",
                      {
                        staticClass: "title_content",
                        staticStyle: { color: "rgba(68, 123, 252, 1)" },
                      },
                      [
                        _c("span", [
                          _vm._v("对应企业：" + _vm._s(item.enterprise_name)),
                        ]),
                      ]
                    ),
                  ]
                ),
                _c("div", { staticClass: "title_bottom" }, [
                  _c("div", { staticStyle: { display: "flex" } }, [
                    _c("span", [_vm._v("由")]),
                    _c(
                      "div",
                      {
                        staticStyle: {
                          "text-overflow": "ellipsis",
                          overflow: "hidden",
                          "white-space": "nowrap",
                          "max-width": "120px",
                        },
                      },
                      [_c("label", [_vm._v(_vm._s(item.ssbm))])]
                    ),
                    _c("span", [_vm._v("提交")]),
                  ]),
                  _vm.activeIndex === 0
                    ? _c("div", { staticClass: "bottom_btn" }, [
                        _c(
                          "div",
                          {
                            staticClass: "yes",
                            on: {
                              click: function ($event) {
                                return _vm.checkData("是", item)
                              },
                            },
                          },
                          [_vm._v("同意")]
                        ),
                        _c(
                          "div",
                          {
                            staticClass: "no",
                            on: {
                              click: function ($event) {
                                return _vm.checkData("否", item)
                              },
                            },
                          },
                          [_vm._v("不同意")]
                        ),
                      ])
                    : _c("div", { staticClass: "bottom_btn" }, [
                        _c(
                          "div",
                          {
                            staticClass: "yes",
                            on: {
                              click: function ($event) {
                                return _vm.dealData(item)
                              },
                            },
                          },
                          [_vm._v("处理")]
                        ),
                      ]),
                ]),
              ])
            }),
            0
          )
        : _vm._e(),
      _vm.activeIndex === 2 && _vm.loading === false
        ? _c(
            "div",
            { staticClass: "list-wrapper" },
            _vm._l(_vm.clueList, function (item) {
              return _c(
                "div",
                {
                  staticClass: "clue-wrapper",
                  on: {
                    click: function ($event) {
                      return _vm.toDetail(item)
                    },
                  },
                },
                [
                  _c("div", { staticClass: "clue-finish-item" }, [
                    _c("div", { staticClass: "finish_title" }, [
                      _c("span", { staticClass: "name" }, [
                        _vm._v(_vm._s(item.type)),
                      ]),
                      _c(
                        "div",
                        {
                          staticClass: "state",
                          style: _vm.getStyleColor(item.status),
                        },
                        [_vm._v(_vm._s(item.status))]
                      ),
                      _c("span", { staticClass: "time" }, [
                        _vm._v(_vm._s(item.create_time)),
                      ]),
                    ]),
                    _c("div", { staticClass: "finish_content" }, [
                      _c("span", [
                        _vm._v("线索基本情况：" + _vm._s(item.basic_info)),
                      ]),
                    ]),
                    _c("div", { staticClass: "finish_content" }, [
                      _c("span", [
                        _vm._v("对应企业：" + _vm._s(item.enterprise_name)),
                      ]),
                    ]),
                  ]),
                  _vm._m(0, true),
                ]
              )
            }),
            0
          )
        : _vm._e(),
      _c(
        "van-popup",
        {
          attrs: { closeable: false, round: "" },
          model: {
            value: _vm.showCheck,
            callback: function ($$v) {
              _vm.showCheck = $$v
            },
            expression: "showCheck",
          },
        },
        [
          _c("div", { staticClass: "popTitle" }, [_vm._v(_vm._s(_vm.title))]),
          _vm.clueState === "待审批"
            ? _c("div", { staticClass: "popWrapper" }, [
                _c("div", { staticClass: "popItem" }, [
                  _c("span", { staticStyle: { width: "80px" } }, [
                    _vm._v(
                      _vm._s(_vm.status === "是" ? "意见：" : "驳回原因：")
                    ),
                  ]),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.opinion,
                        expression: "opinion",
                      },
                    ],
                    staticClass: "inputW",
                    attrs: { rows: "6", placeholder: "请输入" },
                    domProps: { value: _vm.opinion },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.opinion = $event.target.value
                      },
                    },
                  }),
                ]),
              ])
            : _vm._e(),
          _vm.clueState === "待审核"
            ? _c("div", { staticClass: "popWrapper" }, [
                _c(
                  "div",
                  { staticClass: "popItem" },
                  [
                    _c("span", { staticClass: "label" }, [
                      _vm._v("是否联合执法："),
                    ]),
                    _c(
                      "van-radio-group",
                      {
                        staticStyle: { "margin-left": "-35px" },
                        attrs: { direction: "horizontal" },
                        on: { change: _vm.changeJoint },
                        model: {
                          value: _vm.approvalInfo.joint_status,
                          callback: function ($$v) {
                            _vm.$set(_vm.approvalInfo, "joint_status", $$v)
                          },
                          expression: "approvalInfo.joint_status",
                        },
                      },
                      [
                        _c(
                          "van-radio",
                          { attrs: { name: "是", "icon-size": "16px" } },
                          [_vm._v("是")]
                        ),
                        _c(
                          "van-radio",
                          { attrs: { name: "否", "icon-size": "16px" } },
                          [_vm._v("否")]
                        ),
                      ],
                      1
                    ),
                  ],
                  1
                ),
                _vm.approvalInfo.joint_status === "是"
                  ? _c(
                      "div",
                      {
                        staticClass: "popItem",
                        staticStyle: { "align-items": "center" },
                      },
                      [
                        _c("span", { staticClass: "label" }, [
                          _vm._v("联合执法单位："),
                        ]),
                        _c("van-field", {
                          attrs: {
                            "is-link": "",
                            readonly: "",
                            name: "picker",
                            label: "",
                            "input-align": "left",
                            placeholder: "点击选择联合执法单位",
                          },
                          on: {
                            click: function ($event) {
                              _vm.showPickerDept = true
                            },
                          },
                          model: {
                            value: _vm.approvalInfo.joint_department,
                            callback: function ($$v) {
                              _vm.$set(
                                _vm.approvalInfo,
                                "joint_department",
                                $$v
                              )
                            },
                            expression: "approvalInfo.joint_department",
                          },
                        }),
                        _c(
                          "van-popup",
                          {
                            attrs: { position: "bottom" },
                            model: {
                              value: _vm.showPickerDept,
                              callback: function ($$v) {
                                _vm.showPickerDept = $$v
                              },
                              expression: "showPickerDept",
                            },
                          },
                          [
                            _c("div", { staticClass: "van-picker__toolbar" }, [
                              _c(
                                "button",
                                {
                                  staticClass: "van-picker__cancel",
                                  attrs: { type: "button" },
                                  on: { click: _vm.cancel },
                                },
                                [_vm._v("取消")]
                              ),
                              _c(
                                "button",
                                {
                                  staticClass: "van-picker__confirm",
                                  attrs: { type: "button" },
                                  on: { click: _vm.onConfirmDept },
                                },
                                [_vm._v("确认")]
                              ),
                            ]),
                            _c(
                              "div",
                              {
                                staticStyle: {
                                  "max-height": "265px",
                                  "overflow-y": "auto",
                                },
                              },
                              [
                                _c(
                                  "van-checkbox-group",
                                  {
                                    ref: "checkboxGroup",
                                    model: {
                                      value: _vm.checkboxValue,
                                      callback: function ($$v) {
                                        _vm.checkboxValue = $$v
                                      },
                                      expression: "checkboxValue",
                                    },
                                  },
                                  [
                                    _c(
                                      "van-cell-group",
                                      _vm._l(
                                        _vm.bmList,
                                        function (item, index) {
                                          return _c("van-cell", {
                                            attrs: {
                                              title: item,
                                              clickable: "",
                                            },
                                            on: {
                                              click: function ($event) {
                                                return _vm.toggle(index)
                                              },
                                            },
                                            scopedSlots: _vm._u(
                                              [
                                                {
                                                  key: "right-icon",
                                                  fn: function () {
                                                    return [
                                                      _c(
                                                        "div",
                                                        {
                                                          on: {
                                                            click: function (
                                                              $event
                                                            ) {
                                                              return _vm.toggle(
                                                                index
                                                              )
                                                            },
                                                          },
                                                        },
                                                        [
                                                          _c("van-checkbox", {
                                                            ref: "checkboxes",
                                                            refInFor: true,
                                                            attrs: {
                                                              name: item,
                                                            },
                                                          }),
                                                        ],
                                                        1
                                                      ),
                                                    ]
                                                  },
                                                  proxy: true,
                                                },
                                              ],
                                              null,
                                              true
                                            ),
                                          })
                                        }
                                      ),
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ],
                              1
                            ),
                          ]
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm.status === "是"
                  ? _c(
                      "div",
                      {
                        staticClass: "popItem",
                        staticStyle: { "align-items": "center" },
                      },
                      [
                        _c("span", { staticClass: "label" }, [
                          _vm._v("分管局长："),
                        ]),
                        _c("van-field", {
                          attrs: {
                            "is-link": "",
                            readonly: "",
                            name: "picker",
                            label: "",
                            "input-align": "left",
                            placeholder: "点击选择分管局长",
                          },
                          on: {
                            click: function ($event) {
                              _vm.showPickerType = true
                            },
                          },
                          model: {
                            value: _vm.approvalInfo.leader_user,
                            callback: function ($$v) {
                              _vm.$set(_vm.approvalInfo, "leader_user", $$v)
                            },
                            expression: "approvalInfo.leader_user",
                          },
                        }),
                        _c(
                          "van-popup",
                          {
                            attrs: { position: "bottom" },
                            model: {
                              value: _vm.showPickerType,
                              callback: function ($$v) {
                                _vm.showPickerType = $$v
                              },
                              expression: "showPickerType",
                            },
                          },
                          [
                            _c("van-picker", {
                              attrs: {
                                "show-toolbar": "",
                                columns: _vm.leaderList,
                                "value-key": "mc",
                              },
                              on: {
                                confirm: _vm.onConfirmType,
                                cancel: function ($event) {
                                  _vm.showPickerType = false
                                },
                              },
                            }),
                          ],
                          1
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
                _c("div", { staticClass: "popItem" }, [
                  _c("span", { staticStyle: { width: "80px" } }, [
                    _vm._v(
                      _vm._s(_vm.status === "是" ? "意见：" : "驳回原因：")
                    ),
                  ]),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.opinion,
                        expression: "opinion",
                      },
                    ],
                    staticClass: "inputW",
                    attrs: { rows: "6", placeholder: "请输入" },
                    domProps: { value: _vm.opinion },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.opinion = $event.target.value
                      },
                    },
                  }),
                ]),
              ])
            : _vm._e(),
          _vm.clueState === "待办结"
            ? _c("div", { staticClass: "popWrapper" }, [
                _c("div", { staticClass: "popItem" }, [
                  _c("span", { staticStyle: { width: "80px" } }, [
                    _vm._v(
                      _vm._s(_vm.status === "是" ? "意见：" : "驳回原因：")
                    ),
                  ]),
                  _c("textarea", {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.opinion,
                        expression: "opinion",
                      },
                    ],
                    staticClass: "inputW",
                    attrs: { rows: "6", placeholder: "请输入" },
                    domProps: { value: _vm.opinion },
                    on: {
                      input: function ($event) {
                        if ($event.target.composing) {
                          return
                        }
                        _vm.opinion = $event.target.value
                      },
                    },
                  }),
                ]),
                _vm.taskType !== "" &&
                _vm.taskType !== null &&
                _vm.status === "是"
                  ? _c(
                      "div",
                      { staticClass: "popItem" },
                      [
                        _c("span", { staticStyle: { width: "80px" } }, [
                          _vm._v("是否整改："),
                        ]),
                        _c(
                          "van-radio-group",
                          {
                            attrs: { direction: "horizontal" },
                            model: {
                              value: _vm.finishInfo.rectification_status,
                              callback: function ($$v) {
                                _vm.$set(
                                  _vm.finishInfo,
                                  "rectification_status",
                                  $$v
                                )
                              },
                              expression: "finishInfo.rectification_status",
                            },
                          },
                          [
                            _c(
                              "van-radio",
                              { attrs: { name: "是", "icon-size": "16px" } },
                              [_vm._v("是")]
                            ),
                            _c(
                              "van-radio",
                              { attrs: { name: "否", "icon-size": "16px" } },
                              [_vm._v("否")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    )
                  : _vm._e(),
                _vm.taskType !== "" &&
                _vm.taskType !== null &&
                _vm.status === "是" &&
                _vm.finishInfo.rectification_status === "是"
                  ? _c("div", { staticClass: "popItem" }, [
                      _c("span", { staticStyle: { width: "80px" } }, [
                        _vm._v("整改内容："),
                      ]),
                      _c("textarea", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.finishInfo.rectification_content,
                            expression: "finishInfo.rectification_content",
                          },
                        ],
                        staticClass: "inputW",
                        attrs: { rows: "6", placeholder: "请输入" },
                        domProps: {
                          value: _vm.finishInfo.rectification_content,
                        },
                        on: {
                          input: function ($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(
                              _vm.finishInfo,
                              "rectification_content",
                              $event.target.value
                            )
                          },
                        },
                      }),
                    ])
                  : _vm._e(),
              ])
            : _vm._e(),
          _c("div", { staticClass: "popFooter" }, [
            _c(
              "div",
              {
                on: {
                  click: function ($event) {
                    _vm.showCheck = false
                  },
                },
              },
              [_vm._v("取消")]
            ),
            _c(
              "div",
              {
                staticStyle: {
                  color: "#1989fa",
                  "border-left": "1px solid #ebedf0",
                },
                attrs: { loading: _vm.btnLoading },
                on: { click: _vm.validApproval },
              },
              [_vm._v("确认 ")]
            ),
          ]),
        ]
      ),
      _c(
        "van-popup",
        {
          attrs: { closeable: false, round: "" },
          model: {
            value: _vm.showDistribute,
            callback: function ($$v) {
              _vm.showDistribute = $$v
            },
            expression: "showDistribute",
          },
        },
        [
          _c("div", { staticClass: "popTitle" }, [_vm._v("分发")]),
          _c("div", { staticClass: "popWrapper" }, [
            _c(
              "div",
              {
                staticClass: "popItem",
                staticStyle: { "align-items": "center" },
              },
              [
                _c("span", { staticClass: "label" }, [_vm._v("分发去向：")]),
                _c(
                  "van-radio-group",
                  {
                    staticStyle: { "margin-left": "-50px" },
                    attrs: { direction: "horizontal" },
                    on: { change: _vm.queryLawDept },
                    model: {
                      value: _vm.distributeInfo.type,
                      callback: function ($$v) {
                        _vm.$set(_vm.distributeInfo, "type", $$v)
                      },
                      expression: "distributeInfo.type",
                    },
                  },
                  [
                    _c(
                      "van-radio",
                      { attrs: { name: "支队", "icon-size": "16px" } },
                      [_vm._v("支队")]
                    ),
                    _c(
                      "van-radio",
                      { attrs: { name: "分局", "icon-size": "16px" } },
                      [_vm._v("分局")]
                    ),
                  ],
                  1
                ),
              ],
              1
            ),
            _c(
              "div",
              {
                staticClass: "popItem",
                staticStyle: { "align-items": "center" },
              },
              [
                _c("span", { staticClass: "label" }, [_vm._v("分发科室：")]),
                _c("van-field", {
                  attrs: {
                    required: "",
                    "is-link": "",
                    readonly: "",
                    name: "picker",
                    "input-align": "left",
                    placeholder: "点击选择分发科室",
                  },
                  on: {
                    click: function ($event) {
                      _vm.showPickerLeader = true
                    },
                  },
                  model: {
                    value: _vm.distributeInfo.dept,
                    callback: function ($$v) {
                      _vm.$set(_vm.distributeInfo, "dept", $$v)
                    },
                    expression: "distributeInfo.dept",
                  },
                }),
                _c(
                  "van-popup",
                  {
                    attrs: { position: "bottom" },
                    model: {
                      value: _vm.showPickerLeader,
                      callback: function ($$v) {
                        _vm.showPickerLeader = $$v
                      },
                      expression: "showPickerLeader",
                    },
                  },
                  [
                    _c("van-picker", {
                      attrs: {
                        "show-toolbar": "",
                        columns: _vm.broanchs,
                        "value-key": "SSBM",
                      },
                      on: {
                        confirm: _vm.onConfirmDeptLeader,
                        cancel: function ($event) {
                          _vm.showPickerLeader = false
                        },
                      },
                    }),
                  ],
                  1
                ),
              ],
              1
            ),
            _vm.distributeInfo.type === "支队" && _vm.distributeInfo.dept !== ""
              ? _c(
                  "div",
                  {
                    staticClass: "popItem",
                    staticStyle: { "align-items": "center" },
                  },
                  [
                    _c("span", { staticClass: "label" }, [
                      _vm._v("支队人员："),
                    ]),
                    _c("van-field", {
                      attrs: {
                        required: "",
                        "is-link": "",
                        readonly: "",
                        name: "picker",
                        label: "",
                        "input-align": "left",
                        placeholder: "点击选择支队人员",
                      },
                      on: {
                        click: function ($event) {
                          _vm.showPickerLeader2 = true
                        },
                      },
                      model: {
                        value: _vm.distributeInfo.leader_user,
                        callback: function ($$v) {
                          _vm.$set(_vm.distributeInfo, "leader_user", $$v)
                        },
                        expression: "distributeInfo.leader_user",
                      },
                    }),
                    _c(
                      "van-popup",
                      {
                        attrs: { position: "bottom" },
                        model: {
                          value: _vm.showPickerLeader2,
                          callback: function ($$v) {
                            _vm.showPickerLeader2 = $$v
                          },
                          expression: "showPickerLeader2",
                        },
                      },
                      [
                        _c("div", { staticClass: "van-picker__toolbar" }, [
                          _c(
                            "button",
                            {
                              staticClass: "van-picker__cancel",
                              attrs: { type: "button" },
                              on: { click: _vm.cancel2 },
                            },
                            [_vm._v("取消")]
                          ),
                          _c(
                            "button",
                            {
                              staticClass: "van-picker__confirm",
                              attrs: { type: "button" },
                              on: { click: _vm.onConfirmLeader },
                            },
                            [_vm._v("确认")]
                          ),
                        ]),
                        _c(
                          "div",
                          {
                            staticStyle: {
                              "max-height": "265px",
                              "overflow-y": "auto",
                            },
                          },
                          [
                            _c(
                              "van-checkbox-group",
                              {
                                ref: "checkboxGroup",
                                model: {
                                  value: _vm.checkboxValue,
                                  callback: function ($$v) {
                                    _vm.checkboxValue = $$v
                                  },
                                  expression: "checkboxValue",
                                },
                              },
                              [
                                _c(
                                  "van-cell-group",
                                  _vm._l(_vm.persons, function (item, index) {
                                    return _c("van-cell", {
                                      attrs: { title: item.MC, clickable: "" },
                                      on: {
                                        click: function ($event) {
                                          return _vm.toggle(index)
                                        },
                                      },
                                      scopedSlots: _vm._u(
                                        [
                                          {
                                            key: "right-icon",
                                            fn: function () {
                                              return [
                                                _c(
                                                  "div",
                                                  {
                                                    on: {
                                                      click: function ($event) {
                                                        return _vm.toggle(index)
                                                      },
                                                    },
                                                  },
                                                  [
                                                    _c("van-checkbox", {
                                                      ref: "checkboxes",
                                                      refInFor: true,
                                                      attrs: { name: item.MC },
                                                    }),
                                                  ],
                                                  1
                                                ),
                                              ]
                                            },
                                            proxy: true,
                                          },
                                        ],
                                        null,
                                        true
                                      ),
                                    })
                                  }),
                                  1
                                ),
                              ],
                              1
                            ),
                          ],
                          1
                        ),
                      ]
                    ),
                  ],
                  1
                )
              : _vm._e(),
          ]),
          _c("div", { staticClass: "popFooter" }, [
            _c(
              "div",
              {
                on: {
                  click: function ($event) {
                    _vm.showDistribute = false
                  },
                },
              },
              [_vm._v("取消")]
            ),
            _c(
              "div",
              {
                staticStyle: {
                  color: "#1989fa",
                  "border-left": "1px solid #ebedf0",
                },
                attrs: { loading: _vm.btnLoading },
                on: { click: _vm.validDistribute },
              },
              [_vm._v("确认 ")]
            ),
          ]),
        ]
      ),
      _c(
        "van-overlay",
        { attrs: { show: _vm.show } },
        [
          _c("van-search", {
            ref: "search",
            staticStyle: { width: "100%" },
            attrs: {
              shape: "round",
              placeholder: "线索来源 / 基本情况 / 对应企业 / 人员 / 时间",
              "show-action": "",
            },
            scopedSlots: _vm._u([
              {
                key: "action",
                fn: function () {
                  return [
                    _c(
                      "div",
                      {
                        staticStyle: { color: "#447BFC" },
                        on: { click: _vm.onSearch },
                      },
                      [_vm._v("搜索")]
                    ),
                  ]
                },
                proxy: true,
              },
            ]),
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
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "finish_bottom" }, [
      _c("span", [_vm._v("已处理")]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/inHand/index.vue?vue&type=style&index=0&id=243897d1&scoped=true&lang=scss&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/inHand/index.vue?vue&type=style&index=0&id=243897d1&scoped=true&lang=scss& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! @/assets/clue/矩形 1.png */ "./src/assets/clue/矩形 1.png");
var ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ../../assets/clue/title_backImg.png */ "./src/assets/clue/title_backImg.png");
var ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ../../assets/clue/bottom.png */ "./src/assets/clue/bottom.png");
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);
// Module
exports.push([module.i, "@charset \"UTF-8\";\n.clue-tab-wrapper[data-v-243897d1] {\n  padding: 15px 10px;\n  background: #fff;\n  display: flex;\n  align-items: center;\n}\n.clue-tab-wrapper .active[data-v-243897d1] {\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") no-repeat center bottom;\n  background-size: 100% 30%;\n  color: #121236 !important;\n}\n.clue-tab-wrapper .activeItem[data-v-243897d1] {\n  width: 105px;\n  height: 30px;\n  line-height: 30px;\n  opacity: 1;\n  border-radius: 28px;\n  color: #ffffff !important;\n  background: linear-gradient(225deg, #4975ec 0%, #97b3ff 100%);\n  box-shadow: 0 4px 34px rgba(84, 125, 239, 0.4);\n}\n.clue-tab-wrapper .text[data-v-243897d1] {\n  width: 105px;\n  color: rgba(18, 18, 54, 0.5);\n  margin-right: 20px;\n  text-align: center;\n}\n.clue-tab-wrapper .tabText[data-v-243897d1] {\n  margin: 0 40px 0 10px;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 18px;\n}\n.list-wrapper[data-v-243897d1] {\n  height: calc(100vh - 110px);\n  overflow-y: auto;\n}\n.list-wrapper .clue-wrapper[data-v-243897d1] {\n  margin: 25px 10px;\n  background: #fff;\n  border-radius: 25px;\n  color: rgba(18, 18, 54, 0.5);\n  font-size: 12px;\n}\n.list-wrapper .clue-wrapper .clue-wrapper-item[data-v-243897d1] {\n  padding: 15px 15px 5px 15px;\n  line-height: 30px;\n}\n.list-wrapper .clue-wrapper .clue-wrapper-item .title_image[data-v-243897d1] {\n  position: relative;\n  top: -37px;\n  left: -35px;\n  height: 0;\n}\n.list-wrapper .clue-wrapper .clue-wrapper-item .title_image span[data-v-243897d1] {\n  position: relative;\n  left: -77px;\n  top: -31px;\n  font-size: 12px;\n  color: #fff;\n}\n.list-wrapper .clue-wrapper .clue-wrapper-item .title_time[data-v-243897d1] {\n  text-align: right;\n}\n.list-wrapper .clue-wrapper .clue-wrapper-item .title_time .state[data-v-243897d1] {\n  padding: 3px 10px;\n  margin-right: 10px;\n}\n.list-wrapper .clue-wrapper .clue-wrapper-item .title[data-v-243897d1] {\n  font-size: 18px;\n  color: #000000;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n.list-wrapper .clue-wrapper .clue-wrapper-item .finish[data-v-243897d1] {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-repeat: no-repeat;\n}\n.list-wrapper .clue-wrapper .title_bottom[data-v-243897d1] {\n  height: 45px;\n  line-height: 45px;\n  padding: 0 15px;\n  font-size: 14px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  display: flex;\n  justify-content: space-between;\n}\n.list-wrapper .clue-wrapper .title_bottom label[data-v-243897d1] {\n  margin: 0 5px;\n  color: #121236;\n}\n.list-wrapper .clue-wrapper .title_bottom .bottom_btn[data-v-243897d1] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.list-wrapper .clue-wrapper .title_bottom .bottom_btn .yes[data-v-243897d1] {\n  width: 80px;\n  height: 26px;\n  line-height: 26px;\n  opacity: 1;\n  border-radius: 20px;\n  background: linear-gradient(142.91deg, #447bfc 0%, #7ca1f7 100%);\n  text-align: center;\n  color: #fff;\n}\n.list-wrapper .clue-wrapper .title_bottom .bottom_btn .no[data-v-243897d1] {\n  width: 80px;\n  height: 26px;\n  line-height: 26px;\n  opacity: 1;\n  border-radius: 20px;\n  background: linear-gradient(142.91deg, rgba(250, 138, 57, 0.05) 0%, rgba(18, 18, 54, 0.01) 100%);\n  border: 1px solid #ff8d1a;\n  text-align: center;\n  color: #ff8d1a;\n  margin-left: 10px;\n}\n.list-wrapper .clue-wrapper .clue-finish-item[data-v-243897d1] {\n  line-height: 30px;\n}\n.list-wrapper .clue-wrapper .clue-finish-item .finish_title[data-v-243897d1] {\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  background-repeat: no-repeat;\n  font-size: 12px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 50px;\n  padding: 0 15px;\n}\n.list-wrapper .clue-wrapper .clue-finish-item .finish_title .name[data-v-243897d1] {\n  font-size: 18px;\n  color: #000000;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n  width: calc(100% - 170px);\n}\n.list-wrapper .clue-wrapper .clue-finish-item .finish_title .state[data-v-243897d1] {\n  width: 50px;\n  height: 20px;\n  line-height: 20px;\n  border-radius: 4px;\n  text-align: center;\n  margin-right: 5px;\n}\n.list-wrapper .clue-wrapper .clue-finish-item .finish_title .time[data-v-243897d1] {\n  color: rgba(18, 18, 54, 0.5);\n  width: 115px;\n}\n.list-wrapper .clue-wrapper .clue-finish-item .finish_content[data-v-243897d1] {\n  padding: 0 15px;\n}\n.list-wrapper .clue-wrapper .finish_bottom[data-v-243897d1] {\n  height: 35px;\n  line-height: 35px;\n  padding: 0 15px;\n  font-size: 14px;\n  text-align: right;\n  color: #447bfc;\n}\n.popTitle[data-v-243897d1] {\n  text-align: center;\n  font-weight: bold;\n  line-height: 50px;\n}\n.popWrapper[data-v-243897d1] {\n  max-height: 50vh;\n}\n.popWrapper .popItem[data-v-243897d1] {\n  display: flex;\n  width: 330px;\n  padding: 10px;\n  font-size: 14px;\n  color: #999;\n}\n.popWrapper .popItem .label[data-v-243897d1] {\n  width: 160px;\n}\n.popWrapper .popItem .inputW[data-v-243897d1] {\n  border: 1px solid #ebedf0;\n  padding-left: 5px;\n  width: calc(100% - 85px);\n}\n.popFooter[data-v-243897d1] {\n  display: flex;\n  border-top: 1px solid #ebedf0;\n}\n.popFooter div[data-v-243897d1] {\n  width: 50%;\n  padding: 14px 0;\n  text-align: center;\n  font-size: 16px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/inHand/index.vue?vue&type=style&index=0&id=243897d1&scoped=true&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--9-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--9-oneOf-1-2!./node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!./node_modules/cache-loader/dist/cjs.js??ref--1-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/inHand/index.vue?vue&type=style&index=0&id=243897d1&scoped=true&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=243897d1&scoped=true&lang=scss& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/inHand/index.vue?vue&type=style&index=0&id=243897d1&scoped=true&lang=scss&");
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("d86eca8c", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

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

/***/ "./src/assets/clue/bottom.png":
/*!************************************!*\
  !*** ./src/assets/clue/bottom.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXYAAAAsCAYAAABxPJNAAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAAOrSURBVHic7d3NbltFGIfxZ8Z2aJKSBASqkPqRql2VFeoN9Ca4njRXwTVUbFiAKnbdIj42oEqgICqECAgUaOmHmvicYeE5zsSJ2zRxcTs8v03+noxn3nMSvbKOnZOQ7v+0wVhM0OYc9nOMaRTbUW666aTx9BgSbTGfNq83VuSY2F+k2LOb3xZ75n266b1U5JhoptQI0JYZiKnIFPmIeg8cWypyL9E0h/fvdeelHWWAphnNf+7+vdH5aCieW6wz+sbhcxljom2KuvLcXpmLn1ePg3l/6SKXteQ87HI+pvL4xuPFmmWNo80SDCfqmsjDPLWfikyR+4lhftCfrGuY9++P9hwO85wu94/Iea9xzvXuAYOcU57LHtDlIQz6ib2c+/1j1E6eT35ufjAYTMkTc3ZzDQtd3s3z8/hgkGsbJPY3SowmAwsT+WmR83qpy0+BN4r8vPHRmSpSMZ6m/D7k8TNnEk8AnsDi4hH58Sg/znlpqciLiUc5Ly/lDCynxMOcz1LkvOc/wJsUOY8/AFZyvg+s5vw3sNYdx1v56w7wds5/Au/k/Afwbs6/A+dy3gbey/kX4HzO94D1nLeAqznfBa7l/DVwPec7wI2cPwY+zHkT2Mg5EAIpIkmqio1dkipjY5ekytjYJakyNnZJqoyNXZIqY2OXpMrY2CWpMjZ2SaqMjV2SKmNjl6TK2NglqTI2dkmqjI1dkipjY5ekytjYJakyNnZJqoyNXZIqY2OXpMrY2CWpMjZ2SaqMjV2SKmNjl6TK2NglqTKRxO68i5AkzU4kxIfzLkKSNDsR0s68i5Ckl+LsvAuYj0gv/DbvIiRJsxNp4s/zLkKSNDuRlfNbvoEqSa+/EEgAMYSQiPHbeRckSZqN0efYe+GbOdchSZqRCBCWL/5K2/qqXZJeW2Gc9v/yNC7cIaZ2DtVIkk6pu74ORWMPqxd2aJvP51OSJOmkQgipfHzgXjFh9cqXhOj1dkl1+F/8Xf1Gmhw5dBOwsHLpUxLf/zcFSZJOIU2+Wocpd3cMa5dvkdIPL78mSdLJbB66BNOZetvesHb5FnhZRpJeOZt3Uwg3p37Y5Zn3Yw+r65/R798m4adlJOnV0Iab05s6HOMfbYTli1/Rho8I6bvZ1SVJejE32hBCM+3yS6l/nOXC2qW/gE/So3tfMOQDIu/TsnDqOiVJz3A9AS1T3iSd5liNvROW17eB7ZTSbR78eIWmf4GYzhF7a6R2GWz2kvTCtoCrACS4dqJmXvoXRcGFUUXI3lUAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/clue/title_backImg.png":
/*!*******************************************!*\
  !*** ./src/assets/clue/title_backImg.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAXYAAAAsCAYAAABxPJNAAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAALQSURBVHic7dzBThpBHMfx/86yCyywFK0xJiZtGk9eeQEOXhrjcZ/Fo3jy3ltfoX2JvoBXL22aNjWpjW21KlpXzPSgbsVZYVAIMvl+DjA7O3/mn5D8QiaAJw/0+o0uBmcSnp8dBSqM/UCL6l6Il7e2Ip2e60JQ0Xa7dIyZQmhbe2LWFqsWtWZdMKCulo2OjXthqWbZ77ExLFrVHhkzxXJsuecfY6YU1S1rD42ZqPpMy8HgyoM7i6Jqw3LP38ZMJZ7Jr/11d+KnsaQWP7fcd7/nqj4zl1+3d/X0o2ey96oxO2+5p4jI956r2fkFLd9sa3dl93o0t7Bot+cXYyCLiy+taj9mo0/Z6MXSkpYdq52vXS1eXl7O9ty+fXtb+ri62Ww2+/b7IXswZqXValm/N+9vPSRJMsR7+t/m5qZsbGzk1nqe96DXvFEYZnHzrQ4anyWKYimd752qbhhpX2KRVKT7mC4AABmtdfYh+SEhbxXsyTvtX+xI7ezraVl8kXPzgzQAYAxuQn6YgB8Y7GttHXV2JL5MT3OPWQAA4zdMwPcN9pV1XU9TiUbVGADgcbTW3qBwV/fdWN3SDd8n1AHgqdGS/0WVG7nBvrqlG91jKY2nJQDAOBnBvrKu64Q6AEyvnmBfa+uI4xcAmG5ZsCeJ9i9F4kk2AwB4vCzYD15J9TLtfyAPAHj6lIhIq60LHMEAgBuUiEhZCHUAcIUSEUnTTnnSjQAARkMlbR0WpHLvD5UAANNF7YuEk24CADA6qvtXgkk3AQAYHVXzTob6T3YAwNOmUq/K+ToAOEQV+vzDIwBg+hDqAOAYgh0AHEOwA4BjCHYAcAzBDgCOIdgBwDEEOwA4hmAHAMcQ7ADgGIIdABxDsAOAYwh2AHAMwQ4AjiHYAcAxBDsAOIZgBwDHEOwA4BiCHQAcQ7ADgGMIdgBwDMEOAI4h2AHAMQQ7ADiGYAcAx/wDsNKXPk7kfpoAAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/clue/title_left.png":
/*!****************************************!*\
  !*** ./src/assets/clue/title_left.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/clue/待办应用.png":
/*!**********************************!*\
  !*** ./src/assets/clue/待办应用.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADhSURBVDiNrVJBCsMgEJwt8V014K8M1ID5laB9l4HtoZqq1bSFzinrzo4TZ0ktUYLpBkCiBPHqrDC5bHgBxHdnhSGldwbxCiAU408y8eysCGqJJg3XIF6n9BmcFaVAUHq/Hrf1hgGA6XbpNgqoJcqz/keBxtnvAgl9kfQGAUxe6b0lSWfFnIlgAuqkgrPCEACoJZrera399B6y7FHRqDAYfuPQMGMAbpteDgd7cCxSuXUAoPTu04IBTD4vVeWIyecUKrsFDtvtL+X62xiH+JuA7PSqszaFXJ+lENw2zYk8TOEBmOJ9zbHx+B8AAAAASUVORK5CYII="

/***/ }),

/***/ "./src/assets/clue/矩形 1.png":
/*!**********************************!*\
  !*** ./src/assets/clue/矩形 1.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAICAYAAACLUr1bAAAAAXNSR0IArs4c6QAAAARzQklUCAgICHwIZIgAAADBSURBVDiNzZKxTQNREETf7N1+ZByAZJsCaMEpDdCIMwqgAYoCWUhUgdwBFVig7xuCwzjw5d9PGq12tMELVgDrjfN2WR+Ifm4fMkxajDNID0ORSNylRNqkdexIKdJ2MaQg+bsRLqAExojELuMep55j958CBOg5AG5W+zuin3Nx+D4A5NmitcoUMh8B0EVdtpaZYqB76x+ffPUD161lzvFu+6KvYMGqtcoUst4BYjhwkf+H2AJErd/71i7n+NO1ewX4BWpOOkkAPfLyAAAAAElFTkSuQmCC"

/***/ }),

/***/ "./src/views/inHand/index.vue":
/*!************************************!*\
  !*** ./src/views/inHand/index.vue ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_243897d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=243897d1&scoped=true& */ "./src/views/inHand/index.vue?vue&type=template&id=243897d1&scoped=true&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./src/views/inHand/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _index_vue_vue_type_style_index_0_id_243897d1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=243897d1&scoped=true&lang=scss& */ "./src/views/inHand/index.vue?vue&type=style&index=0&id=243897d1&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_243897d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_243897d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "243897d1",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/views/inHand/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/inHand/index.vue?vue&type=script&lang=js&":
/*!*************************************************************!*\
  !*** ./src/views/inHand/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--13-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/inHand/index.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_13_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/inHand/index.vue?vue&type=style&index=0&id=243897d1&scoped=true&lang=scss&":
/*!**********************************************************************************************!*\
  !*** ./src/views/inHand/index.vue?vue&type=style&index=0&id=243897d1&scoped=true&lang=scss& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_243897d1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--9-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--9-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--9-oneOf-1-2!../../../node_modules/sass-loader/dist/cjs.js??ref--9-oneOf-1-3!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=style&index=0&id=243897d1&scoped=true&lang=scss& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/inHand/index.vue?vue&type=style&index=0&id=243897d1&scoped=true&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_243897d1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_243897d1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_243897d1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_9_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_9_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_9_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_9_oneOf_1_3_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_243897d1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/views/inHand/index.vue?vue&type=template&id=243897d1&scoped=true&":
/*!*******************************************************************************!*\
  !*** ./src/views/inHand/index.vue?vue&type=template&id=243897d1&scoped=true& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_243897d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"4bae0482-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--1-0!../../../node_modules/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=243897d1&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"4bae0482-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/inHand/index.vue?vue&type=template&id=243897d1&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_243897d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_cache_loader_dist_cjs_js_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_4bae0482_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_1_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_243897d1_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL3ZpZXdzL2luSGFuZC9pbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2luSGFuZC9pbmRleC52dWU/N2U2NyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvaW5IYW5kL2luZGV4LnZ1ZT9mMjA1Iiwid2VicGFjazovLy8uL3NyYy92aWV3cy9pbkhhbmQvaW5kZXgudnVlPzk4NGUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaS9jbHVlLmpzIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvY2x1ZS9ib3R0b20ucG5nIiwid2VicGFjazovLy8uL3NyYy9hc3NldHMvY2x1ZS90aXRsZV9iYWNrSW1nLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvYXNzZXRzL2NsdWUvdGl0bGVfbGVmdC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9jbHVlL+W+heWKnuW6lOeUqC5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2Fzc2V0cy9jbHVlL+efqeW9oiAxLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvaW5IYW5kL2luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9zcmMvdmlld3MvaW5IYW5kL2luZGV4LnZ1ZT9hNDdlIiwid2VicGFjazovLy8uL3NyYy92aWV3cy9pbkhhbmQvaW5kZXgudnVlP2I3ODgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3ZpZXdzL2luSGFuZC9pbmRleC52dWU/YjM3OSJdLCJuYW1lcyI6WyJnZXRJbkhhbmRDb3VudCIsImRhdGEiLCJyZXF1ZXN0IiwidXJsIiwibWV0aG9kIiwicGFyYW1zIiwiZ2V0SW5IYW5kQ2hlY2tMaXN0IiwiZ2V0Q2x1ZURldGFpbCIsImdldE1pbmVDbHVlTGlzdCIsImxlYWRlckNoZWNrIiwiaGJtTGVhZGVyQ2hlY2siLCJsZWFkZXJDaGVja1R3byIsImRlcHRBcHByb3ZhbCIsInF1ZXJ5TGVhZGVyTGlzdCIsInF1ZXJ5RGVwYXJ0bWVudExpc3QiLCJxdWVyeURlcHRQZXJzb25MaXN0IiwicXVlcnlMYXdMaXN0IiwiYnJvYW5jaERpc3RyaWJ1dGUiLCJzYXZlQ2hlY2tSZWNvcmQiLCJ1cGxvYWRGaWxlcyIsImhlYWRlcnMiLCJhZGRWZXJpZnkiLCJicm9hbmNoVmVyaWZ5IiwiZmluaXNoRmxvdyIsImhibUZpbmlzaEZsb3ciLCJmZWVkQmFjayIsImdldFhzIiwieHNEZXRhaWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzUUE7QUFLQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxNQUZBLGtCQUVBO0FBQ0E7QUFDQSxzQkFEQTtBQUVBLHVCQUZBO0FBR0EsbUNBSEE7QUFJQSxvQkFKQTtBQUtBLG9CQUxBO0FBTUEsa0JBTkE7QUFPQSxzQkFQQTtBQVFBLGdCQVJBO0FBU0EsZ0JBVEE7QUFVQSxtQkFWQTtBQVdBLGlCQVhBO0FBWUEsaUJBWkE7QUFhQSxpQkFiQTtBQWNBO0FBQ0EseUJBREE7QUFFQSw0QkFGQTtBQUdBLDBCQUhBO0FBSUE7QUFKQSxPQWRBO0FBb0JBLHdFQUNBLFFBREEsRUFDQSxRQURBLEVBQ0EsUUFEQSxFQUNBLFFBREEsRUFDQSxlQURBLEVBRUEsYUFGQSxFQUVBLGFBRkEsRUFFQSxVQUZBLEVBRUEsVUFGQSxDQXBCQTtBQXdCQSwyQkF4QkE7QUF5QkEsb0JBekJBO0FBMEJBLDJCQTFCQTtBQTJCQSx1QkEzQkE7QUE0QkEsZ0JBNUJBO0FBNkJBO0FBQ0EsdUJBOUJBO0FBK0JBLHVCQS9CQTtBQWdD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QUFDTyxJQUFNMEIsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQzFCLElBQUQsRUFBUztBQUM3QixTQUFPQyx3REFBTyxDQUFDO0FBQ1hDLE9BQUcsRUFBRSx3QkFETTtBQUVYQyxVQUFNLEVBQUUsS0FGRztBQUdYQyxVQUFNLEVBQUVKO0FBSEcsR0FBRCxDQUFkO0FBS0gsQ0FOTSxDOzs7Ozs7Ozs7OztBQ25MUCxpQ0FBaUMsZzJDOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsNGpDOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsd2pFOzs7Ozs7Ozs7OztBQ0FqQyxpQ0FBaUMsd2E7Ozs7Ozs7Ozs7O0FDQWpDLGlDQUFpQyw0WDs7Ozs7Ozs7Ozs7O0FDQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0c7QUFDdkM7QUFDTDtBQUNzQzs7O0FBRzFGO0FBQzZGO0FBQzdGLGdCQUFnQiwyR0FBVTtBQUMxQixFQUFFLDJFQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLEtBQVUsRUFBRSxZQWlCZjtBQUNEO0FBQ2UsZ0Y7Ozs7Ozs7Ozs7OztBQ3ZDZjtBQUFBO0FBQUEsd0NBQThSLENBQWdCLHNVQUFHLEVBQUMsQzs7Ozs7Ozs7Ozs7O0FDQWxUO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBIiwiZmlsZSI6ImpzLzgwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdj5cclxuICAgICAgICA8dmFuLW5hdi1iYXIgOnRpdGxlPVwibmF2VGl0bGVcIiBsZWZ0LWFycm93IEBjbGljay1sZWZ0PVwiJHJvdXRlci5nbygtMSlcIj5cclxuICAgICAgICAgICAgPHRlbXBsYXRlICNyaWdodD5cclxuICAgICAgICAgICAgICAgIDxpbWcgdi1pZj1cIm5hdlRpdGxlID09PSAn5b6F5Yqe5LqL6aG5J1wiIHNyYz1cIi4uLy4uL2Fzc2V0cy9jbHVlL+W+heWKnuW6lOeUqC5wbmdcIiBAY2xpY2s9XCJnb1RvSGFuZGxlTGlzdFwiPlxyXG4gICAgICAgICAgICAgICAgPHZhbi1zZWFyY2ggdi1lbHNlIHYtbW9kZWw9XCJzZWFyY2hLZXl3b3JkXCIgc2hhcGU9XCJyb3VuZFwiIHBsYWNlaG9sZGVyPVwiXCIgc3R5bGU9XCJ3aWR0aDogNjBweDtwYWRkaW5nOiA1cHggMTBweDtcIiBAY2xpY2s9XCJnb1NlYXJjaFwiLz5cclxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICA8L3Zhbi1uYXYtYmFyPlxyXG4gICAgICAgIDwhLS3lpLTpg6h0YWItLT5cclxuICAgICAgICA8ZGl2IHYtaWY9XCJuYXZUaXRsZSA9PT0gJ+W+heWKnuS6i+mhuSdcIiBjbGFzcz1cImNsdWUtdGFiLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdiB2LWZvcj1cIihpdGVtLGkpIGluIHRhYkFyclwiIDpjbGFzcz1cImFjdGl2ZUluZGV4PT09aT8nYWN0aXZlSXRlbSB0ZXh0JzondGV4dCdcIiBAY2xpY2s9XCJvbkNoYW5nZVRhYihpKVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3tpdGVtfX08L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwiY2x1ZS10YWItd3JhcHBlclwiPlxyXG4gICAgICAgICAgICA8c3BhbiB2LWZvcj1cIihpdGVtLGkpIGluIHRhYkFyclwiIDpjbGFzcz1cImFjdGl2ZUluZGV4PT09aT8nYWN0aXZlIHRhYlRleHQnOid0YWJUZXh0J1wiIEBjbGljaz1cIm9uQ2hhbmdlVGFiKGkpXCI+e3tpdGVtfX08L3NwYW4+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHZhbi1sb2FkaW5nIHYtaWY9XCJsb2FkaW5nXCIgc2l6ZT1cIjI0cHhcIiBjb2xvcj1cIiMwMDk0ZmZcIiB2ZXJ0aWNhbCBzdHlsZT1cIm1hcmdpbi10b3A6IDUwJVwiPuWKoOi9veS4rS4uLjwvdmFuLWxvYWRpbmc+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LXdyYXBwZXJcIiB2LWlmPVwiKGFjdGl2ZUluZGV4PT09MCB8fCBhY3RpdmVJbmRleD09PTEpJiZsb2FkaW5nPT09ZmFsc2VcIj5cclxuICAgICAgICAgICAgPGRpdiB2LWZvcj1cIml0ZW0gaW4gY2x1ZUxpc3RcIiBjbGFzcz1cImNsdWUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNsdWUtd3JhcHBlci1pdGVtXCIgQGNsaWNrPVwidG9EZXRhaWwoaXRlbSlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGl0bGVfaW1hZ2VcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi8uLi9hc3NldHMvY2x1ZS90aXRsZV9sZWZ0LnBuZ1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3tpdGVtLnRhc2tfdHlwZSA9PT0gJycgPyAn57q/57Si566h55CGJzon6Zet546v566h55CGJ319PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZV90aW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdGVcIiA6c3R5bGU9XCJnZXRTdHlsZUNvbG9yKGl0ZW0uc3RhdHVzKVwiPnt7IGl0ZW0uc3RhdHVzIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7loavmiqXml7bpl7TvvJp7eyBpdGVtLmNyZWF0ZV90aW1lIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBpdGVtLnR5cGUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+57q/57Si5Z+65pys5oOF5Ya177yae3sgaXRlbS5iYXNpY19pbmZvIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZV9jb250ZW50XCIgc3R5bGU9XCJjb2xvcjogcmdiYSg2OCwgMTIzLCAyNTIsIDEpO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7lr7nlupTkvIHkuJrvvJp7eyBpdGVtLmVudGVycHJpc2VfbmFtZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlX2JvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7nlLE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJ0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztvdmVyZmxvdzogaGlkZGVuO3doaXRlLXNwYWNlOiBub3dyYXA7bWF4LXdpZHRoOjEyMHB4O1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnt7IGl0ZW0uc3NibSB9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7mj5DkuqQ8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiYWN0aXZlSW5kZXg9PT0wXCIgY2xhc3M9XCJib3R0b21fYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ5ZXNcIiBAY2xpY2s9XCJjaGVja0RhdGEoJ+aYrycsaXRlbSlcIj7lkIzmhI88L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5vXCIgQGNsaWNrPVwiY2hlY2tEYXRhKCflkKYnLGl0ZW0pXCI+5LiN5ZCM5oSPPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJib3R0b21fYnRuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ5ZXNcIiBAY2xpY2s9XCJkZWFsRGF0YShpdGVtKVwiPuWkhOeQhjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0LXdyYXBwZXJcIiB2LWlmPVwiYWN0aXZlSW5kZXg9PT0yICYmIGxvYWRpbmc9PT1mYWxzZVwiPlxyXG4gICAgICAgICAgICA8ZGl2IHYtZm9yPVwiaXRlbSBpbiBjbHVlTGlzdFwiIGNsYXNzPVwiY2x1ZS13cmFwcGVyXCIgQGNsaWNrPVwidG9EZXRhaWwoaXRlbSlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjbHVlLWZpbmlzaC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbmlzaF90aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm5hbWVcIj57eyBpdGVtLnR5cGUgfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0ZVwiIDpzdHlsZT1cImdldFN0eWxlQ29sb3IoaXRlbS5zdGF0dXMpXCI+e3sgaXRlbS5zdGF0dXMgfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0aW1lXCI+e3sgaXRlbS5jcmVhdGVfdGltZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmluaXNoX2NvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+57q/57Si5Z+65pys5oOF5Ya177yae3sgaXRlbS5iYXNpY19pbmZvIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaW5pc2hfY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj7lr7nlupTkvIHkuJrvvJp7eyBpdGVtLmVudGVycHJpc2VfbmFtZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpbmlzaF9ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj7lt7LlpITnkIY8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPCEtLeWuoeaguOW8ueahhi0tPlxyXG4gICAgICAgIDx2YW4tcG9wdXAgdi1tb2RlbD1cInNob3dDaGVja1wiIDpjbG9zZWFibGU9XCJmYWxzZVwiIHJvdW5kPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wVGl0bGVcIj57eyB0aXRsZSB9fTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJjbHVlU3RhdGUgPT09ICflvoXlrqHmibknXCIgY2xhc3M9XCJwb3BXcmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wSXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPVwid2lkdGg6IDgwcHg7XCI+e3sgc3RhdHVzID09PSAn5pivJyA/ICfmhI/op4HvvJonIDogJ+mps+WbnuWOn+WboO+8mid9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcm93cz1cIjZcIiB2LW1vZGVsPVwib3BpbmlvblwiIHBsYWNlaG9sZGVyPVwi6K+36L6T5YWlXCIgY2xhc3M9XCJpbnB1dFdcIj48L3RleHRhcmVhPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJjbHVlU3RhdGUgPT09ICflvoXlrqHmoLgnXCIgY2xhc3M9XCJwb3BXcmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wSXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj7mmK/lkKbogZTlkIjmiafms5XvvJo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZhbi1yYWRpby1ncm91cCB2LW1vZGVsPVwiYXBwcm92YWxJbmZvLmpvaW50X3N0YXR1c1wiIEBjaGFuZ2U9XCJjaGFuZ2VKb2ludFwiIGRpcmVjdGlvbj1cImhvcml6b250YWxcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAtMzVweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dmFuLXJhZGlvIG5hbWU9XCLmmK9cIiBpY29uLXNpemU9XCIxNnB4XCI+5pivPC92YW4tcmFkaW8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2YW4tcmFkaW8gbmFtZT1cIuWQplwiIGljb24tc2l6ZT1cIjE2cHhcIj7lkKY8L3Zhbi1yYWRpbz5cclxuICAgICAgICAgICAgICAgICAgICA8L3Zhbi1yYWRpby1ncm91cD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwiYXBwcm92YWxJbmZvLmpvaW50X3N0YXR1cyA9PT0gJ+aYrydcIiBjbGFzcz1cInBvcEl0ZW1cIiBzdHlsZT1cImFsaWduLWl0ZW1zOiBjZW50ZXI7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPuiBlOWQiOaJp+azleWNleS9je+8mjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8dmFuLWZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiYXBwcm92YWxJbmZvLmpvaW50X2RlcGFydG1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXMtbGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwaWNrZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQtYWxpZ249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi54K55Ye76YCJ5oup6IGU5ZCI5omn5rOV5Y2V5L2NXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInNob3dQaWNrZXJEZXB0ID0gdHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8dmFuLXBvcHVwIHYtbW9kZWw9XCJzaG93UGlja2VyRGVwdFwiIHBvc2l0aW9uPVwiYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2YW4tcGlja2VyX190b29sYmFyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInZhbi1waWNrZXJfX2NhbmNlbFwiIEBjbGljaz1cImNhbmNlbFwiPuWPlua2iDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ2YW4tcGlja2VyX19jb25maXJtXCIgQGNsaWNrPVwib25Db25maXJtRGVwdFwiPuehruiupDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT1cIm1heC1oZWlnaHQ6IDI2NXB4O292ZXJmbG93LXk6IGF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2YW4tY2hlY2tib3gtZ3JvdXAgcmVmPVwiY2hlY2tib3hHcm91cFwiIHYtbW9kZWw9XCJjaGVja2JveFZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZhbi1jZWxsLWdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dmFuLWNlbGwgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIGJtTGlzdFwiIDp0aXRsZT1cIml0ZW1cIiBjbGlja2FibGUgQGNsaWNrPVwidG9nZ2xlKGluZGV4KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlICNyaWdodC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgQGNsaWNrPVwidG9nZ2xlKGluZGV4KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dmFuLWNoZWNrYm94IHJlZj1cImNoZWNrYm94ZXNcIiA6bmFtZT1cIml0ZW1cIj48L3Zhbi1jaGVja2JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdmFuLWNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92YW4tY2VsbC1ncm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdmFuLWNoZWNrYm94LWdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L3Zhbi1wb3B1cD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiB2LWlmPVwic3RhdHVzID09PSAn5pivJ1wiIGNsYXNzPVwicG9wSXRlbVwiIHN0eWxlPVwiYWxpZ24taXRlbXM6IGNlbnRlcjtcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+5YiG566h5bGA6ZW/77yaPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2YW4tZmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJhcHByb3ZhbEluZm8ubGVhZGVyX3VzZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXMtbGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwaWNrZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQtYWxpZ249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi54K55Ye76YCJ5oup5YiG566h5bGA6ZW/XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInNob3dQaWNrZXJUeXBlID0gdHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8dmFuLXBvcHVwIHYtbW9kZWw9XCJzaG93UGlja2VyVHlwZVwiIHBvc2l0aW9uPVwiYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2YW4tcGlja2VyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdy10b29sYmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNvbHVtbnM9XCJsZWFkZXJMaXN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS1rZXk9XCJtY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNvbmZpcm09XCJvbkNvbmZpcm1UeXBlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2FuY2VsPVwic2hvd1BpY2tlclR5cGUgPSBmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC92YW4tcG9wdXA+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3BJdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJ3aWR0aDogODBweDtcIj57eyBzdGF0dXMgPT09ICfmmK8nID8gJ+aEj+inge+8micgOiAn6amz5Zue5Y6f5Zug77yaJ319PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSByb3dzPVwiNlwiIHYtbW9kZWw9XCJvcGluaW9uXCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaVcIiBjbGFzcz1cImlucHV0V1wiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgdi1pZj1cImNsdWVTdGF0ZSA9PT0gJ+W+heWKnue7kydcIiBjbGFzcz1cInBvcFdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3BJdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJ3aWR0aDogODBweDtcIj57eyBzdGF0dXMgPT09ICfmmK8nID8gJ+aEj+inge+8micgOiAn6amz5Zue5Y6f5Zug77yaJ319PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSByb3dzPVwiNlwiIHYtbW9kZWw9XCJvcGluaW9uXCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaVcIiBjbGFzcz1cImlucHV0V1wiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInRhc2tUeXBlICE9PSAnJyAmJiB0YXNrVHlwZSAhPT0gbnVsbCAmJiBzdGF0dXMgPT09ICfmmK8nXCIgY2xhc3M9XCJwb3BJdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJ3aWR0aDogODBweDtcIj7mmK/lkKbmlbTmlLnvvJo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZhbi1yYWRpby1ncm91cCB2LW1vZGVsPVwiZmluaXNoSW5mby5yZWN0aWZpY2F0aW9uX3N0YXR1c1wiIGRpcmVjdGlvbj1cImhvcml6b250YWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHZhbi1yYWRpbyBuYW1lPVwi5pivXCIgaWNvbi1zaXplPVwiMTZweFwiPuaYrzwvdmFuLXJhZGlvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dmFuLXJhZGlvIG5hbWU9XCLlkKZcIiBpY29uLXNpemU9XCIxNnB4XCI+5ZCmPC92YW4tcmFkaW8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC92YW4tcmFkaW8tZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cInRhc2tUeXBlICE9PSAnJyAmJiB0YXNrVHlwZSAhPT0gbnVsbCAmJiBzdGF0dXMgPT09ICfmmK8nICYmIGZpbmlzaEluZm8ucmVjdGlmaWNhdGlvbl9zdGF0dXMgPT09ICfmmK8nXCIgY2xhc3M9XCJwb3BJdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9XCJ3aWR0aDogODBweDtcIj7mlbTmlLnlhoXlrrnvvJo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIHJvd3M9XCI2XCIgdi1tb2RlbD1cImZpbmlzaEluZm8ucmVjdGlmaWNhdGlvbl9jb250ZW50XCIgcGxhY2Vob2xkZXI9XCLor7fovpPlhaVcIiBjbGFzcz1cImlucHV0V1wiPjwvdGV4dGFyZWE+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3BGb290ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgQGNsaWNrPVwic2hvd0NoZWNrID0gZmFsc2VcIj7lj5bmtog8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgOmxvYWRpbmc9XCJidG5Mb2FkaW5nXCIgQGNsaWNrPVwidmFsaWRBcHByb3ZhbFwiIHN0eWxlPVwiY29sb3I6ICMxOTg5ZmE7Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWJlZGYwXCI+56Gu6K6kXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC92YW4tcG9wdXA+XHJcbiAgICAgICAgPCEtLeWIhuWPkeW8ueahhi0tPlxyXG4gICAgICAgIDx2YW4tcG9wdXAgdi1tb2RlbD1cInNob3dEaXN0cmlidXRlXCIgOmNsb3NlYWJsZT1cImZhbHNlXCIgcm91bmQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwb3BUaXRsZVwiPuWIhuWPkTwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wV3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcEl0ZW1cIiBzdHlsZT1cImFsaWduLWl0ZW1zOiBjZW50ZXI7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPuWIhuWPkeWOu+WQke+8mjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8dmFuLXJhZGlvLWdyb3VwIHYtbW9kZWw9XCJkaXN0cmlidXRlSW5mby50eXBlXCIgQGNoYW5nZT1cInF1ZXJ5TGF3RGVwdFwiIGRpcmVjdGlvbj1cImhvcml6b250YWxcIiBzdHlsZT1cIm1hcmdpbi1sZWZ0OiAtNTBweFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dmFuLXJhZGlvIG5hbWU9XCLmlK/pmJ9cIiBpY29uLXNpemU9XCIxNnB4XCI+5pSv6ZifPC92YW4tcmFkaW8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx2YW4tcmFkaW8gbmFtZT1cIuWIhuWxgFwiIGljb24tc2l6ZT1cIjE2cHhcIj7liIblsYA8L3Zhbi1yYWRpbz5cclxuICAgICAgICAgICAgICAgICAgICA8L3Zhbi1yYWRpby1ncm91cD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcEl0ZW1cIiBzdHlsZT1cImFsaWduLWl0ZW1zOiBjZW50ZXI7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPuWIhuWPkeenkeWupO+8mjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8dmFuLWZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZGlzdHJpYnV0ZUluZm8uZGVwdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXMtbGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwaWNrZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQtYWxpZ249XCJsZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwi54K55Ye76YCJ5oup5YiG5Y+R56eR5a6kXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInNob3dQaWNrZXJMZWFkZXIgPSB0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2YW4tcG9wdXAgdi1tb2RlbD1cInNob3dQaWNrZXJMZWFkZXJcIiBwb3NpdGlvbj1cImJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dmFuLXBpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3ctdG9vbGJhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjb2x1bW5zPVwiYnJvYW5jaHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLWtleT1cIlNTQk1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjb25maXJtPVwib25Db25maXJtRGVwdExlYWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNhbmNlbD1cInNob3dQaWNrZXJMZWFkZXIgPSBmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC92YW4tcG9wdXA+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgdi1pZj1cImRpc3RyaWJ1dGVJbmZvLnR5cGUgPT09ICfmlK/pmJ8nICYmIGRpc3RyaWJ1dGVJbmZvLmRlcHQgIT09ICcnXCIgY2xhc3M9XCJwb3BJdGVtXCIgc3R5bGU9XCJhbGlnbi1pdGVtczogY2VudGVyO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj7mlK/pmJ/kurrlkZjvvJo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPHZhbi1maWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImRpc3RyaWJ1dGVJbmZvLmxlYWRlcl91c2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpcy1saW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWFkb25seVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBpY2tlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dC1hbGlnbj1cImxlZnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCLngrnlh7vpgInmi6nmlK/pmJ/kurrlkZhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwic2hvd1BpY2tlckxlYWRlcjIgPSB0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDx2YW4tcG9wdXAgdi1tb2RlbD1cInNob3dQaWNrZXJMZWFkZXIyXCIgcG9zaXRpb249XCJib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZhbi1waWNrZXJfX3Rvb2xiYXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwidmFuLXBpY2tlcl9fY2FuY2VsXCIgQGNsaWNrPVwiY2FuY2VsMlwiPuWPlua2iDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJ2YW4tcGlja2VyX19jb25maXJtXCIgQGNsaWNrPVwib25Db25maXJtTGVhZGVyXCI+56Gu6K6kPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPVwibWF4LWhlaWdodDogMjY1cHg7b3ZlcmZsb3cteTogYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZhbi1jaGVja2JveC1ncm91cCByZWY9XCJjaGVja2JveEdyb3VwXCIgdi1tb2RlbD1cImNoZWNrYm94VmFsdWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dmFuLWNlbGwtZ3JvdXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2YW4tY2VsbCB2LWZvcj1cIihpdGVtLCBpbmRleCkgaW4gcGVyc29uc1wiIDp0aXRsZT1cIml0ZW0uTUNcIiBjbGlja2FibGUgQGNsaWNrPVwidG9nZ2xlKGluZGV4KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlICNyaWdodC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgQGNsaWNrPVwidG9nZ2xlKGluZGV4KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dmFuLWNoZWNrYm94IHJlZj1cImNoZWNrYm94ZXNcIiA6bmFtZT1cIml0ZW0uTUNcIj48L3Zhbi1jaGVja2JveD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdmFuLWNlbGw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92YW4tY2VsbC1ncm91cD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdmFuLWNoZWNrYm94LWdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L3Zhbi1wb3B1cD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcEZvb3RlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBAY2xpY2s9XCJzaG93RGlzdHJpYnV0ZSA9IGZhbHNlXCI+5Y+W5raIPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IDpsb2FkaW5nPVwiYnRuTG9hZGluZ1wiIEBjbGljaz1cInZhbGlkRGlzdHJpYnV0ZVwiIHN0eWxlPVwiY29sb3I6ICMxOTg5ZmE7Ym9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZWJlZGYwXCI+56Gu6K6kXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC92YW4tcG9wdXA+XHJcbiAgICAgICAgPCEtLSDlhajlsYDmkJzntKIgLS0+XHJcbiAgICAgICAgPHZhbi1vdmVybGF5IDpzaG93PVwic2hvd1wiPlxyXG4gICAgICAgICAgICA8dmFuLXNlYXJjaCB2LW1vZGVsPVwic2VhcmNoS2V5d29yZFwiIHNoYXBlPVwicm91bmRcIiBwbGFjZWhvbGRlcj1cIue6v+e0ouadpea6kCAvIOWfuuacrOaDheWGtSAvIOWvueW6lOS8geS4miAvIOS6uuWRmCAvIOaXtumXtFwiIHN0eWxlPVwid2lkdGg6IDEwMCVcIiByZWY9XCJzZWFyY2hcIiBzaG93LWFjdGlvbiA+XHJcbiAgICAgICAgICAgICAgICA8dGVtcGxhdGUgI2FjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IEBjbGljaz1cIm9uU2VhcmNoXCIgc3R5bGU9XCJjb2xvcjogIzQ0N0JGQ1wiPuaQnOe0ojwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPC92YW4tc2VhcmNoPlxyXG4gICAgICAgIDwvdmFuLW92ZXJsYXk+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgICBpbXBvcnQge1xyXG4gICAgICAgIGdldE1pbmVDbHVlTGlzdCwgcXVlcnlMZWFkZXJMaXN0LCBsZWFkZXJDaGVjaywgbGVhZGVyQ2hlY2tUd28sIGRlcHRBcHByb3ZhbCxcclxuICAgICAgICBxdWVyeURlcGFydG1lbnRMaXN0LCBxdWVyeURlcHRQZXJzb25MaXN0LCBicm9hbmNoRGlzdHJpYnV0ZSwgZmluaXNoRmxvdyxcclxuICAgICAgICBoYm1MZWFkZXJDaGVjaywgaGJtRmluaXNoRmxvd1xyXG4gICAgfSBmcm9tIFwiLi4vLi4vYXBpL2NsdWVcIjtcclxuICAgIGltcG9ydCB7VG9hc3R9IGZyb20gXCJ2YW50XCI7XHJcbiAgICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICAgICAgbmFtZTogXCJNaW5lQ2x1ZVwiLFxyXG4gICAgICAgIGRhdGEgKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbmF2VGl0bGU6ICfmiJHnmoTlrqHmibknLFxyXG4gICAgICAgICAgICAgICAgc2VhcmNoS2V5d29yZDogJycsXHJcbiAgICAgICAgICAgICAgICB0YWJBcnI6IFsn5b6F5a6h5qC4JywgJ+W+heWkhOeQhicsICflt7LlpITnkIYnXSxcclxuICAgICAgICAgICAgICAgIGFjdGl2ZUluZGV4OiAwLFxyXG4gICAgICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBjbHVlTGlzdDogW10sXHJcbiAgICAgICAgICAgICAgICBzaG93Q2hlY2s6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgY2x1ZUlkOiAnJyxcclxuICAgICAgICAgICAgICAgIGZsb3dJZDogJycsXHJcbiAgICAgICAgICAgICAgICBjbHVlU3RhdGU6ICcnLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICflrqHmoLgnLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAn5pivJyxcclxuICAgICAgICAgICAgICAgIG9waW5pb246ICcnLFxyXG4gICAgICAgICAgICAgICAgYXBwcm92YWxJbmZvOntcclxuICAgICAgICAgICAgICAgICAgICBqb2ludF9zdGF0dXM6ICfmmK8nLFxyXG4gICAgICAgICAgICAgICAgICAgIGpvaW50X2RlcGFydG1lbnQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlYWRlcl91c2VyX2lkOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBsZWFkZXJfdXNlcjogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBibUxpc3Q6IFsn5piG5piO5biC5Y+R5bGV5ZKM5pS56Z2p5aeU5ZGY5LyaJywn5piG5piO5biC5bel5Lia5ZKM5L+h5oGv5YyW5bGAJywn5piG5piO5biC56eR5a2m5oqA5pyv5bGAJywn5piG5piO5biC5rCR5peP5a6X5pWZ5LqL5Yqh5aeU5ZGY5LyaJyxcclxuICAgICAgICAgICAgICAgICAgICAn5piG5piO5biC5YWs5a6J5bGAJywn5piG5piO5biC5rCR5pS/5bGAJywn5piG5piO5biC5Y+45rOV5bGAJywn5piG5piO5biC6LSi5pS/5bGAJywn5piG5piO5biC5Lq65Yqb6LWE5rqQ5ZKM56S+5Lya5L+d6Zqc5bGAJyxcclxuICAgICAgICAgICAgICAgICAgICAn5piG5piO5biC6Ieq54S26LWE5rqQ5ZKM6KeE5YiS5bGAJywn5piG5piO5biC5L2P5oi/5ZKM5Z+O5Lmh5bu66K6+5bGAJywn5piG5piO5biC5Lqk6YCa6L+Q6L6T5bGAJywn5piG5piO5biC5Yac5Lia5Yac5p2R5bGAJ1xyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIHNob3dQaWNrZXJUeXBlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGxlYWRlckxpc3Q6IFtdLFxyXG4gICAgICAgICAgICAgICAgc2hvd1BpY2tlckRlcHQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYnRuTG9hZGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBmdW5jOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgLy8g5YiG5Y+RXHJcbiAgICAgICAgICAgICAgICBjaGVja2JveFZhbHVlOiBbXSxcclxuICAgICAgICAgICAgICAgIGNoZWNrZWRBbGw6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaG93RGlzdHJpYnV0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBkaXN0cmlidXRlSW5mbzoge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICfmlK/pmJ8nLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlYWRlcl91c2VyX2lkOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBsZWFkZXJfdXNlcjogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVwdDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVwdF9pZDogJydcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBicm9hbmNoczpbXSxcclxuICAgICAgICAgICAgICAgIHBlcnNvbnM6IFtdLFxyXG4gICAgICAgICAgICAgICAgc2hvd1BpY2tlckxlYWRlcjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBzaG93UGlja2VyTGVhZGVyMjogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAvLyDlip7nu5NcclxuICAgICAgICAgICAgICAgIGZpbmlzaEluZm86IHtcclxuICAgICAgICAgICAgICAgICAgICByZWN0aWZpY2F0aW9uX3N0YXR1czogJ+aYrycsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVjdGlmaWNhdGlvbl9jb250ZW50OiAnJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHRhc2s6ICcnLCAvLyAnJyDooajnpLrku47jgJDlvoXlip7kuovpobnjgJHov5vlhaU7J+e6v+e0oicg6KGo56S65LuO44CQ5b6F5Yqe5bqU55So44CR55qE57q/57Si6L+b5YWlOyfpl63njq8nIOihqOekuuS7juOAkOW+heWKnuW6lOeUqOOAkeeahOmXreeOr+i/m+WFpVxyXG4gICAgICAgICAgICAgICAgdGFza1R5cGU6ICcnIC8v5Li656m65oiW6ICFbnVsbCDmmK/nur/ntKLvvIzmnInlgLznmoQg5piv6Zet546vXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuJHN0b3JlLnN0YXRlLnR5cGUgPT09ICfmiJHnmoTlrqHmibkt57q/57SiJyl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hdlRpdGxlID0gJ+aIkeeahOWuoeaJuSc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhYkFyciA9IFsn5b6F5a6h5qC4JywgJ+W+heWkhOeQhicsICflt7LlpITnkIYnXTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFzayA9ICfnur/ntKInO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYodGhpcy4kc3RvcmUuc3RhdGUudHlwZSA9PT0gJ+aIkeeahOWuoeaJuS3pl63njq8nKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubmF2VGl0bGUgPSAn5oiR55qE5a6h5om5JztcclxuICAgICAgICAgICAgICAgIHRoaXMudGFiQXJyID0gWyflvoXlrqHmoLgnLCAn5b6F5aSE55CGJywgJ+W3suWkhOeQhiddO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrID0gJ+mXreeOryc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5hdlRpdGxlID0gJ+W+heWKnuS6i+mhuSc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhYkFyciA9IFsn5b6F5a6h5qC4JywgJ+W+heWkhOeQhiddO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrID0gJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5xdWVyeU1pbmVDbHVlcygpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbWV0aG9kczoge1xyXG4gICAgICAgICAgICBvbkNoYW5nZVRhYihpZHgpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hY3RpdmVJbmRleCA9IGlkeDtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVlcnlNaW5lQ2x1ZXMoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcXVlcnlNaW5lQ2x1ZXMoKXtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuc2VhcmNoS2V5d29yZCxcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiB0aGlzLmFjdGl2ZUluZGV4ID09PSAwID8gJ+W+heWuoeaguCcgOiAgdGhpcy5hY3RpdmVJbmRleCA9PT0gMSA/ICflvoXlpITnkIYnOiflt7LlpITnkIYnLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZXJfaWQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySWQnKSxcclxuICAgICAgICAgICAgICAgICAgICB0YXNrOiB0aGlzLnRhc2tcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBnZXRNaW5lQ2x1ZUxpc3QocGFyYW1zKS50aGVuKHJlcyA9PntcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsdWVMaXN0ID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICB9KS5maW5hbGx5KHJlID0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0U3R5bGVDb2xvcihzdGF0ZSl7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09ICflvoXloavlhpknKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdiYWNrZ3JvdW5kOiByZ2JhKDI0NCwgMTMxLCAwLCAwLjEpO2NvbG9yOnJnYmEoMjQ0LCAxMzEsIDAsIDEpOyc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSAn5b6F5a6h5qC4JyB8fHN0YXRlID09PSAn5b6F5a6h5om5JyB8fCBzdGF0ZSA9PT0gJ+W+heWIhuWPkScgfHwgc3RhdGUgPT09ICflvoXmoLjlrp4nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTQxLCAyNiwgMC4xKTtjb2xvcjpyZ2JhKDI1NSwgMTQxLCAyNiwgMSk7JztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RhdGUgPT09ICflvoXlip7nu5MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICdiYWNrZ3JvdW5kOiByZ2JhKDIyNywgMjE4LCAwLCAwLjEpO2NvbG9yOnJnYmEoMjI3LCAyMTgsIDAsIDEpOyc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHN0YXRlID09PSAn5bey5Yqe57uTJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnYmFja2dyb3VuZDogcmdiYSgyLCAyMTcsIDEyNywgMC4xKTtjb2xvcjpyZ2JhKDIsIDIxNywgMTI3LCAxKTsnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjaGFuZ2VKb2ludCgpe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5hcHByb3ZhbEluZm8uam9pbnRfc3RhdHVzID09PSAn5ZCmJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHByb3ZhbEluZm8uam9pbnRfZGVwYXJ0bWVudCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyDogZTlkIjmiafms5XljZXkvY3lpJrpgIlcclxuICAgICAgICAgICAgb25Db25maXJtRGVwdCgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwcm92YWxJbmZvLmpvaW50X2RlcGFydG1lbnQgPSB0aGlzLmNoZWNrYm94VmFsdWUudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BpY2tlckRlcHQgPSAhdGhpcy5zaG93UGlja2VyRGVwdDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY2FuY2VsKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQaWNrZXJEZXB0ID0gIXRoaXMuc2hvd1BpY2tlckRlcHQ7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHRvZ2dsZShpbmRleCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRyZWZzLmNoZWNrYm94ZXNbaW5kZXhdLnRvZ2dsZSgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvLyDliIblj5HmlK/pmJ8v5YiG5bGA5LiL5ouJXHJcbiAgICAgICAgICAgIHF1ZXJ5TGF3RGVwdCgpe1xyXG4gICAgICAgICAgICAgICAgcXVlcnlEZXBhcnRtZW50TGlzdCh7IHR5cGU6IHRoaXMuZGlzdHJpYnV0ZUluZm8udHlwZSB9KS50aGVuKHJlcyA9PntcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJyb2FuY2hzID0gcmVzLmRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXN0cmlidXRlSW5mby5kZXB0ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXN0cmlidXRlSW5mby5kZXB0X2lkID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja2JveFZhbHVlID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXN0cmlidXRlSW5mby5sZWFkZXJfdXNlcl9pZCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzdHJpYnV0ZUluZm8ubGVhZGVyX3VzZXIgPSAnJztcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uQ29uZmlybURlcHRMZWFkZXIodmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UGlja2VyTGVhZGVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3RyaWJ1dGVJbmZvLmRlcHQgPSB2YWx1ZS5TU0JNO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXN0cmlidXRlSW5mby5kZXB0X2lkID0gdmFsdWUuREVQVF9JRDtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuZGlzdHJpYnV0ZUluZm8udHlwZSA9PT0gJ+aUr+mYnycpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhbmdlRGVwdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvL+WIh+aNouaUr+mYn+afpeivouaUr+mYn+S6uuWRmFxyXG4gICAgICAgICAgICBjaGFuZ2VEZXB0KCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXJ5RGVwdFBlcnNvbigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2JveFZhbHVlID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3RyaWJ1dGVJbmZvLmxlYWRlcl91c2VyX2lkID0gJyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3RyaWJ1dGVJbmZvLmxlYWRlcl91c2VyID0gJyc7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8v6I635Y+W5pSv6Zif5Lq65ZGY5LiL5ouJXHJcbiAgICAgICAgICAgIHF1ZXJ5RGVwdFBlcnNvbigpe1xyXG4gICAgICAgICAgICAgICAgcXVlcnlEZXB0UGVyc29uTGlzdCh7IGRlcHQ6IHRoaXMuZGlzdHJpYnV0ZUluZm8uZGVwdF9pZCB9KS50aGVuKHJlcyA9PntcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBlcnNvbnMgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uQ29uZmlybUxlYWRlcigpe1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5jaGVja2JveFZhbHVlLmxlbmd0aCA+IDIpe1xyXG4gICAgICAgICAgICAgICAgICAgIFRvYXN0KCfmnIDlpJrlj6rog73pgInmi6nkuKTkuKrkurrliIblj5HvvIEnKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXN0cmlidXRlSW5mby5sZWFkZXJfdXNlciA9IHRoaXMuY2hlY2tib3hWYWx1ZS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBjaG9vc2VJZCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaT0wO2k8dGhpcy5wZXJzb25zLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGo9MDtqPHRoaXMuY2hlY2tib3hWYWx1ZS5sZW5ndGg7aisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja2JveFZhbHVlW2pdID09PSB0aGlzLnBlcnNvbnNbaV0uTUMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaG9vc2VJZC5wdXNoKHRoaXMucGVyc29uc1tpXS5PQkpFQ1RJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXN0cmlidXRlSW5mby5sZWFkZXJfdXNlcl9pZCA9IGNob29zZUlkLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UGlja2VyTGVhZGVyMiA9ICF0aGlzLnNob3dQaWNrZXJMZWFkZXIyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjYW5jZWwyKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3RyaWJ1dGVJbmZvLmxlYWRlcl91c2VyX2lkID0gICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXN0cmlidXRlSW5mby5sZWFkZXJfdXNlciA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2JveFZhbHVlID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQaWNrZXJMZWFkZXIyID0gIXRoaXMuc2hvd1BpY2tlckxlYWRlcjI7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8v5a6h5qC4cGlja2Vy56Gu6K6kXHJcbiAgICAgICAgICAgIG9uQ29uZmlybVR5cGUodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BpY2tlclR5cGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwcm92YWxJbmZvLmxlYWRlcl91c2VyID0gdmFsdWUubWM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcHJvdmFsSW5mby5sZWFkZXJfdXNlcl9pZCA9IHZhbHVlLm9iamVjdGlkO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvL+WIhueuoemihuWvvOS4i+aLiVxyXG4gICAgICAgICAgICBxdWVyeUxlYWRlckRhdGFzKCl7XHJcbiAgICAgICAgICAgICAgICBxdWVyeUxlYWRlckxpc3QoKS50aGVuKHJlcyA9PntcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxlYWRlckxpc3QgPSByZXMuZGF0YTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSDlrqHmoLgv5a6h5om5L+WKnue7k1xyXG4gICAgICAgICAgICBjaGVja0RhdGEoc3RhdGUsZGF0YSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnF1ZXJ5TGVhZGVyRGF0YXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwcm92YWxJbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGpvaW50X3N0YXR1czogJ+aYrycsXHJcbiAgICAgICAgICAgICAgICAgICAgam9pbnRfZGVwYXJ0bWVudDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgbGVhZGVyX3VzZXJfaWQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxlYWRlcl91c2VyOiAnJ1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3BpbmlvbiA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2JveFZhbHVlID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDaGVjayA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXR1cyA9IHN0YXRlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbHVlSWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbHVlU3RhdGUgPSBkYXRhLnN0YXR1cztcclxuICAgICAgICAgICAgICAgIHRoaXMuZmxvd0lkID0gZGF0YS5mbG93X2lkO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50YXNrVHlwZSA9IGRhdGEudGFza190eXBlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aXRsZSA9IHRoaXMuY2x1ZVN0YXRlID09PSAn5b6F5a6h5qC4JyA/ICflrqHmoLgnIDogdGhpcy5jbHVlU3RhdGUgPT09ICflvoXlrqHmibknID8gJ+WuoeaJuScgOiAn5Yqe57uTJztcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMudGFza1R5cGUgIT09ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZ1bmMgPSB0aGlzLmNsdWVTdGF0ZSA9PT0gJ+W+heWKnue7kycgPyBoYm1GaW5pc2hGbG93IDogaGJtTGVhZGVyQ2hlY2s7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZnVuYyA9IHRoaXMuY2x1ZVN0YXRlID09PSAn5b6F5Yqe57uTJyA/IGZpbmlzaEZsb3cgOiB0aGlzLmNsdWVTdGF0ZSA9PT0gJ+W+heWuoeaguCcgPyBkZXB0QXBwcm92YWwgOiBkYXRhLmJ1c2luZXNzX3VuaXQgPT09IFwiXCIgPyBsZWFkZXJDaGVjayA6IGxlYWRlckNoZWNrVHdvO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB2YWxpZEFwcHJvdmFsKCl7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmNsdWVTdGF0ZSA9PT0gJ+W+heWuoeaJuScpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuc3RhdHVzID09PSAn5ZCmJyAmJiB0aGlzLm9waW5pb24gPT09ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+ivt+Whq+WGmeS4jeWQjOaEj+WOn+WboO+8gScpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vblN1cmVDaGVjaygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jbHVlU3RhdGUgPT09ICflvoXlip7nu5MnKXtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnN0YXR1cyA9PT0gJ+WQpicgJiYgdGhpcy5vcGluaW9uID09PSAnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KCfor7floavlhpnkuI3lkIzmhI/ljp/lm6DvvIEnKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMudGFza1R5cGUgIT09ICcnICYmIHRoaXMudGFza1R5cGUgIT09IG51bGwpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5maW5pc2hJbmZvLnJlY3RpZmljYXRpb25fc3RhdHVzID09PSAn5pivJyAmJiB0aGlzLmZpbmlzaEluZm8ucmVjdGlmaWNhdGlvbl9jb250ZW50ID09PSAnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+ivt+Whq+WGmeaVtOaUueWGheWuue+8gScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU3VyZUNoZWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU3VyZUNoZWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuc3RhdHVzID09PSAn5pivJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuYXBwcm92YWxJbmZvLmxlYWRlcl91c2VyX2lkID09PSAnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn6K+36YCJ5oup5YiG566h5bGA6ZW/77yBJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuYXBwcm92YWxJbmZvLmpvaW50X3N0YXR1cyA9PT0gJ+aYrycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFwcHJvdmFsSW5mby5qb2ludF9kZXBhcnRtZW50ID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn6K+36YCJ5oup6IGU5ZCI5omn5rOV5Y2V5L2N77yBJylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU3VyZUNoZWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU3VyZUNoZWNrKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLm9waW5pb24gPT09ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KCfor7floavlhpnkuI3lkIzmhI/ljp/lm6DvvIEnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5hcHByb3ZhbEluZm8uam9pbnRfc3RhdHVzID09PSAn5pivJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYXBwcm92YWxJbmZvLmpvaW50X2RlcGFydG1lbnQgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KCfor7fpgInmi6nogZTlkIjmiafms5XljZXkvY3vvIEnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25TdXJlQ2hlY2soKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25TdXJlQ2hlY2soKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8v5o+Q5LqkXHJcbiAgICAgICAgICAgIG9uU3VyZUNoZWNrKCl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtcyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5jbHVlU3RhdGUgPT09ICflvoXlrqHmoLgnKXtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsdWVfaWQ6IHRoaXMuY2x1ZUlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG93X3BhdGhfaWQ6IHRoaXMuZmxvd0lkLCAvL+W9k+WJjea1geeoi2lkLS3or6bmg4XmjqXlj6PkvJrov5Tlm55cclxuICAgICAgICAgICAgICAgICAgICAgICAgam9pbnRfc3RhdHVzOiB0aGlzLmFwcHJvdmFsSW5mby5qb2ludF9zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGpvaW50X2RlcGFydG1lbnQ6IHRoaXMuYXBwcm92YWxJbmZvLmpvaW50X2RlcGFydG1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlYWRlcl91c2VyOiB0aGlzLmFwcHJvdmFsSW5mby5sZWFkZXJfdXNlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVhZGVyX3VzZXJfaWQ6IHRoaXMuYXBwcm92YWxJbmZvLmxlYWRlcl91c2VyX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBleGFtaW5lX3N0YXR1czogdGhpcy5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9waW5pb246IHRoaXMub3BpbmlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZGVyX3VlcjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyTmFtZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZGVyX3Vlcl9pZDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIilcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMuY2x1ZVN0YXRlID09PSAn5b6F5Yqe57uTJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFyYW1zID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbHVlX2lkOiB0aGlzLmNsdWVJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxvd19wYXRoX2lkOiB0aGlzLmZsb3dJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3BpbmlvbjogdGhpcy5vcGluaW9uLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wbGV0aW9uX3N0YXR1czogdGhpcy5zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY3RpZmljYXRpb25fc3RhdHVzOiB0aGlzLmZpbmlzaEluZm8ucmVjdGlmaWNhdGlvbl9zdGF0dXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY3RpZmljYXRpb25fY29udGVudDogdGhpcy5maW5pc2hJbmZvLnJlY3RpZmljYXRpb25fY29udGVudCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZGVyX3VlcjogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyTmFtZVwiKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZGVyX3Vlcl9pZDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VySWRcIilcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsdWVfaWQ6IHRoaXMuY2x1ZUlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbG93X3BhdGhfaWQ6IHRoaXMuZmxvd0lkLCAvL+W9k+WJjea1geeoi2lkLS3or6bmg4XmjqXlj6PkvJrov5Tlm55cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBwcm92ZV9zdGF0dXM6IHRoaXMuc3RhdHVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGluaW9uOiB0aGlzLm9waW5pb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRlcl91ZXI6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlck5hbWVcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRlcl91ZXJfaWQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuZnVuYyhwYXJhbXMpLnRoZW4ocmVzID0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlcy5jb2RlID09PSAnMjAwJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KHRoaXMudGl0bGUgKyAn5oiQ5YqfIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dDaGVjayA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnF1ZXJ5TWluZUNsdWVzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+Wksei0pSEnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KS5maW5hbGx5KHJlID0+e1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnRuTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PSDlpITnkIZcclxuICAgICAgICAgICAgZGVhbERhdGEoZGF0YSl7XHJcbiAgICAgICAgICAgICAgICBpZihkYXRhLnN0YXR1cyA9PT0gJ+W+heWIhuWPkScpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucXVlcnlMYXdEZXB0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jbHVlSWQgPSBkYXRhLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmxvd0lkID0gZGF0YS5mbG93X2lkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzdHJpYnV0ZUluZm8gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICfmlK/pmJ8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZWFkZXJfdXNlcl9pZDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlYWRlcl91c2VyOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVwdDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcHRfaWQ6ICcnXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrYm94VmFsdWUgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dEaXN0cmlidXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50b0RldGFpbChkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdmFsaWREaXN0cmlidXRlKCl7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmRpc3RyaWJ1dGVJbmZvLnR5cGUgPT09ICfmlK/pmJ8nKXtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmRpc3RyaWJ1dGVJbmZvLmRlcHQgPT09ICcnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+mAieaLqeS4gOS4quaUr+mYn+WIhuWPke+8gScpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5kaXN0cmlidXRlSW5mby5sZWFkZXJfdXNlcl9pZCA9PT0gJycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVG9hc3QoJ+iHs+WwkemAieaLqeS4gOS4quaUr+mYn+S6uuWRmOWIhuWPke+8gScpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU3VyZURpc3RyaWJ1dGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5kaXN0cmlidXRlSW5mby5kZXB0ID09PSAnJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KCfoh7PlsJHpgInmi6nkuIDkuKrliIblsYDliIblj5HvvIEnKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25TdXJlRGlzdHJpYnV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgLy8g5YiG5Y+RXHJcbiAgICAgICAgICAgIG9uU3VyZURpc3RyaWJ1dGUoKXtcclxuICAgICAgICAgICAgICAgIGxldCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2x1ZV9pZDogdGhpcy5jbHVlSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZmxvd19wYXRoX2lkOiB0aGlzLmZsb3dJZCwgLy/lvZPliY3mtYHnqItpZC0t6K+m5oOF5o6l5Y+j5Lya6L+U5ZueXHJcbiAgICAgICAgICAgICAgICAgICAgZGVwdDogdGhpcy5kaXN0cmlidXRlSW5mby5kZXB0X2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHRoaXMuZGlzdHJpYnV0ZUluZm8udHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBsZWFkZXJfdXNlcjogdGhpcy5kaXN0cmlidXRlSW5mby5sZWFkZXJfdXNlcixcclxuICAgICAgICAgICAgICAgICAgICBsZWFkZXJfdXNlcl9pZDogdGhpcy5kaXN0cmlidXRlSW5mby5sZWFkZXJfdXNlcl9pZCxcclxuICAgICAgICAgICAgICAgICAgICBzZW5kZXJfdWVyOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJOYW1lXCIpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbmRlcl91ZXJfaWQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlcklkXCIpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgYnJvYW5jaERpc3RyaWJ1dGUocGFyYW1zKS50aGVuKHJlcyA9PntcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXMuY29kZSA9PT0gJzIwMCcpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUb2FzdCgn5YiG5Y+R5oiQ5Yqf77yBJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Rpc3RyaWJ1dGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWVyeU1pbmVDbHVlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFRvYXN0KHJlcy5tc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIC8vIOivpuaDhVxyXG4gICAgICAgICAgICB0b0RldGFpbChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGl0bGUgPSB0aGlzLmFjdGl2ZUluZGV4ID09PSAwID8gJ+W+heWuoeaguOivpuaDhScgOiB0aGlzLmFjdGl2ZUluZGV4ID09PSAxID8gJ+W+heWkhOeQhuivpuaDhScgOiAn57q/57Si6K+m5oOFJztcclxuICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtuYW1lOiAnaW5IYW5kRGV0YWlsJywgcGFyYW1zOiB7ZmxhZzp0aXRsZSxjbHVlSWQ6aXRlbS5pZH19KVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnb1NlYXJjaCgpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25TZWFyY2goKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucXVlcnlNaW5lQ2x1ZXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAvL+i3s+i9rOW+heWKnuW6lOeUqFxyXG4gICAgICAgICAgICBnb1RvSGFuZGxlTGlzdCgpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe25hbWU6ICdpbkhhbmRBcHBseScsIHBhcmFtczoge319KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQgbGFuZz1cInNjc3NcIj5cclxuICAgIC5jbHVlLXRhYi13cmFwcGVyIHtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDEwcHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgLmFjdGl2ZSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybChcIn5AL2Fzc2V0cy9jbHVlL+efqeW9oiAxLnBuZ1wiKSBuby1yZXBlYXQgY2VudGVyIGJvdHRvbTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDMwJTtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMSkhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYWN0aXZlSXRlbSB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDVweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgICAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMjhweDtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmZmZmYhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjI1ZGVnLCByZ2JhKDczLCAxMTcsIDIzNiwgMSkgMCUsIHJnYmEoMTUxLCAxNzksIDI1NSwgMSkgMTAwJSk7XHJcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDM0cHggIHJnYmEoODQsIDEyNSwgMjM5LCAwLjQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDVweDtcclxuICAgICAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50YWJUZXh0IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwIDQwcHggMCAxMHB4O1xyXG4gICAgICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmxpc3Qtd3JhcHBlcntcclxuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMTBweCk7XHJcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAuY2x1ZS13cmFwcGVyIHtcclxuICAgICAgICAgICAgbWFyZ2luOiAyNXB4IDEwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgLmNsdWUtd3JhcHBlci1pdGVtIHtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE1cHggMTVweCA1cHggMTVweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgICAgICAgICAgICAgLnRpdGxlX2ltYWdlIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAtMzdweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAtMzVweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogLTc3cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvcDogLTMxcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnRpdGxlX3RpbWUge1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIC5zdGF0ZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweCAxMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6MTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuZmluaXNoIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvY2x1ZS90aXRsZV9iYWNrSW1nLnBuZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC50aXRsZV9ib3R0b20ge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0NXB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQ1cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvY2x1ZS9ib3R0b20ucG5nXCIpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIGxhYmVsIHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46MCA1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuYm90dG9tX2J0biB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAueWVzIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDIuOTFkZWcsICM0NDdiZmMgMCUsICM3Y2ExZjcgMTAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC5ubyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQyLjkxZGVnLCByZ2JhKDI1MCwgMTM4LCA1NywgMC4wNSkgMCUsIHJnYmEoMTgsIDE4LCA1NCwgMC4wMSkgMTAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAxNDEsIDI2LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgyNTUsIDE0MSwgMjYsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmNsdWUtZmluaXNoLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICAgICAgICAgICAgICAuZmluaXNoX3RpdGxlIHtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvY2x1ZS90aXRsZV9iYWNrSW1nLnBuZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgLm5hbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE3MHB4KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnN0YXRlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMjBweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnRpbWUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTE1cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLmZpbmlzaF9jb250ZW50IHtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmZpbmlzaF9ib3R0b20ge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzNXB4O1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDY4LCAxMjMsIDI1MiwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAucG9wVGl0bGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIH1cclxuICAgIC5wb3BXcmFwcGVyIHtcclxuICAgICAgICBtYXgtaGVpZ2h0OiBjYWxjKDUwdmgpO1xyXG4gICAgICAgIC5wb3BJdGVtIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgd2lkdGg6IDMzMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjOTk5O1xyXG4gICAgICAgICAgICAubGFiZWwge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5pbnB1dFcge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ViZWRmMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDg1cHgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnBvcEZvb3RlciB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2ViZWRmMDtcclxuICAgICAgICBkaXYge1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAxNHB4IDA7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuPC9zdHlsZT5cclxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfYyhcInZhbi1uYXYtYmFyXCIsIHtcbiAgICAgICAgYXR0cnM6IHsgdGl0bGU6IF92bS5uYXZUaXRsZSwgXCJsZWZ0LWFycm93XCI6IFwiXCIgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcImNsaWNrLWxlZnRcIjogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS4kcm91dGVyLmdvKC0xKVxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogXCJyaWdodFwiLFxuICAgICAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICBfdm0ubmF2VGl0bGUgPT09IFwi5b6F5Yqe5LqL6aG5XCJcbiAgICAgICAgICAgICAgICAgID8gX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNyYzogcmVxdWlyZShcIi4uLy4uL2Fzc2V0cy9jbHVlL+W+heWKnuW6lOeUqC5wbmdcIikgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmdvVG9IYW5kbGVMaXN0IH0sXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICA6IF9jKFwidmFuLXNlYXJjaFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiNjBweFwiLCBwYWRkaW5nOiBcIjVweCAxMHB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzaGFwZTogXCJyb3VuZFwiLCBwbGFjZWhvbGRlcjogXCJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uZ29TZWFyY2ggfSxcbiAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2hLZXl3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNlYXJjaEtleXdvcmQgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaEtleXdvcmRcIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0pLFxuICAgICAgfSksXG4gICAgICBfdm0ubmF2VGl0bGUgPT09IFwi5b6F5Yqe5LqL6aG5XCJcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNsdWUtdGFiLXdyYXBwZXJcIiB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS50YWJBcnIsIGZ1bmN0aW9uIChpdGVtLCBpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uYWN0aXZlSW5kZXggPT09IGkgPyBcImFjdGl2ZUl0ZW0gdGV4dFwiIDogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0ub25DaGFuZ2VUYWIoaSlcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0pKV0pXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApXG4gICAgICAgIDogX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjbHVlLXRhYi13cmFwcGVyXCIgfSxcbiAgICAgICAgICAgIF92bS5fbChfdm0udGFiQXJyLCBmdW5jdGlvbiAoaXRlbSwgaSkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5hY3RpdmVJbmRleCA9PT0gaSA/IFwiYWN0aXZlIHRhYlRleHRcIiA6IFwidGFiVGV4dFwiLFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLm9uQ2hhbmdlVGFiKGkpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoaXRlbSkpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApLFxuICAgICAgX3ZtLmxvYWRpbmdcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwidmFuLWxvYWRpbmdcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tdG9wXCI6IFwiNTAlXCIgfSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgc2l6ZTogXCIyNHB4XCIsIGNvbG9yOiBcIiMwMDk0ZmZcIiwgdmVydGljYWw6IFwiXCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl92KFwi5Yqg6L295LitLi4uXCIpXVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIChfdm0uYWN0aXZlSW5kZXggPT09IDAgfHwgX3ZtLmFjdGl2ZUluZGV4ID09PSAxKSAmJiBfdm0ubG9hZGluZyA9PT0gZmFsc2VcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxpc3Qtd3JhcHBlclwiIH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLmNsdWVMaXN0LCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjbHVlLXdyYXBwZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjbHVlLXdyYXBwZXItaXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvRGV0YWlsKGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVfaW1hZ2VcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbWdcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjOiByZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2NsdWUvdGl0bGVfbGVmdC5wbmdcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnRhc2tfdHlwZSA9PT0gXCJcIiA/IFwi57q/57Si566h55CGXCIgOiBcIumXreeOr+euoeeQhlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlX3RpbWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwic3RhdGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU6IF92bS5nZXRTdHlsZUNvbG9yKGl0ZW0uc3RhdHVzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhpdGVtLnN0YXR1cykpXVxuICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuWhq+aKpeaXtumXtO+8mlwiICsgX3ZtLl9zKGl0ZW0uY3JlYXRlX3RpbWUpKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKGl0ZW0udHlwZSkpXSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlX2NvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIue6v+e0ouWfuuacrOaDheWGte+8mlwiICsgX3ZtLl9zKGl0ZW0uYmFzaWNfaW5mbykpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0aXRsZV9jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZTogeyBjb2xvcjogXCJyZ2JhKDY4LCAxMjMsIDI1MiwgMSlcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5a+55bqU5LyB5Lia77yaXCIgKyBfdm0uX3MoaXRlbS5lbnRlcnByaXNlX25hbWUpKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGVfYm90dG9tXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNTdHlsZTogeyBkaXNwbGF5OiBcImZsZXhcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLnlLFcIildKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcInRleHQtb3ZlcmZsb3dcIjogXCJlbGxpcHNpc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogXCJoaWRkZW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aGl0ZS1zcGFjZVwiOiBcIm5vd3JhcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIm1heC13aWR0aFwiOiBcIjEyMHB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW19jKFwibGFiZWxcIiwgW192bS5fdihfdm0uX3MoaXRlbS5zc2JtKSldKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCLmj5DkuqRcIildKSxcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLmFjdGl2ZUluZGV4ID09PSAwXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3R0b21fYnRuXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ5ZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5jaGVja0RhdGEoXCLmmK9cIiwgaXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuWQjOaEj1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm5vXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0uY2hlY2tEYXRhKFwi5ZCmXCIsIGl0ZW0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLkuI3lkIzmhI9cIildXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3R0b21fYnRuXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ5ZXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS5kZWFsRGF0YShpdGVtKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5aSE55CGXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgMFxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5hY3RpdmVJbmRleCA9PT0gMiAmJiBfdm0ubG9hZGluZyA9PT0gZmFsc2VcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxpc3Qtd3JhcHBlclwiIH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLmNsdWVMaXN0LCBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjbHVlLXdyYXBwZXJcIixcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS50b0RldGFpbChpdGVtKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2x1ZS1maW5pc2gtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaW5pc2hfdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibmFtZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoaXRlbS50eXBlKSksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzdGF0ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZTogX3ZtLmdldFN0eWxlQ29sb3IoaXRlbS5zdGF0dXMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKGl0ZW0uc3RhdHVzKSldXG4gICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0aW1lXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhpdGVtLmNyZWF0ZV90aW1lKSksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbmlzaF9jb250ZW50XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCLnur/ntKLln7rmnKzmg4XlhrXvvJpcIiArIF92bS5fcyhpdGVtLmJhc2ljX2luZm8pKSxcbiAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmluaXNoX2NvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuWvueW6lOS8geS4mu+8mlwiICsgX3ZtLl9zKGl0ZW0uZW50ZXJwcmlzZV9uYW1lKSksXG4gICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX20oMCwgdHJ1ZSksXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIDBcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2YW4tcG9wdXBcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IGNsb3NlYWJsZTogZmFsc2UsIHJvdW5kOiBcIlwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hvd0NoZWNrLFxuICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgX3ZtLnNob3dDaGVjayA9ICQkdlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2hvd0NoZWNrXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicG9wVGl0bGVcIiB9LCBbX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKV0pLFxuICAgICAgICAgIF92bS5jbHVlU3RhdGUgPT09IFwi5b6F5a6h5om5XCJcbiAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwb3BXcmFwcGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicG9wSXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjgwcHhcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uc3RhdHVzID09PSBcIuaYr1wiID8gXCLmhI/op4HvvJpcIiA6IFwi6amz5Zue5Y6f5Zug77yaXCIpXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLm9waW5pb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcIm9waW5pb25cIixcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFdcIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93czogXCI2XCIsIHBsYWNlaG9sZGVyOiBcIuivt+i+k+WFpVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ub3BpbmlvbiB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3BpbmlvbiA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5jbHVlU3RhdGUgPT09IFwi5b6F5a6h5qC4XCJcbiAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwb3BXcmFwcGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicG9wSXRlbVwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuaYr+WQpuiBlOWQiOaJp+azle+8mlwiKSxcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidmFuLXJhZGlvLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJtYXJnaW4tbGVmdFwiOiBcIi0zNXB4XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpcmVjdGlvbjogXCJob3Jpem9udGFsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLmNoYW5nZUpvaW50IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmFwcHJvdmFsSW5mby5qb2ludF9zdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmFwcHJvdmFsSW5mbywgXCJqb2ludF9zdGF0dXNcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImFwcHJvdmFsSW5mby5qb2ludF9zdGF0dXNcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YW4tcmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBuYW1lOiBcIuaYr1wiLCBcImljb24tc2l6ZVwiOiBcIjE2cHhcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLmmK9cIildXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFuLXJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbmFtZTogXCLlkKZcIiwgXCJpY29uLXNpemVcIjogXCIxNnB4XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5ZCmXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uYXBwcm92YWxJbmZvLmpvaW50X3N0YXR1cyA9PT0gXCLmmK9cIlxuICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBvcEl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiYWxpZ24taXRlbXNcIjogXCJjZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIuiBlOWQiOaJp+azleWNleS9je+8mlwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ2YW4tZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtbGlua1wiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwicGlja2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpbnB1dC1hbGlnblwiOiBcImxlZnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCLngrnlh7vpgInmi6nogZTlkIjmiafms5XljZXkvY1cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3dQaWNrZXJEZXB0ID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5hcHByb3ZhbEluZm8uam9pbnRfZGVwYXJ0bWVudCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hcHByb3ZhbEluZm8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiam9pbnRfZGVwYXJ0bWVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiYXBwcm92YWxJbmZvLmpvaW50X2RlcGFydG1lbnRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFuLXBvcHVwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBwb3NpdGlvbjogXCJib3R0b21cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnNob3dQaWNrZXJEZXB0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3dQaWNrZXJEZXB0ID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaG93UGlja2VyRGVwdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbi1waWNrZXJfX3Rvb2xiYXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInZhbi1waWNrZXJfX2NhbmNlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNhbmNlbCB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5Y+W5raIXCIpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidmFuLXBpY2tlcl9fY29uZmlybVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwiYnV0dG9uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9uQ29uZmlybURlcHQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuehruiupFwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWF4LWhlaWdodFwiOiBcIjI2NXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJvdmVyZmxvdy15XCI6IFwiYXV0b1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YW4tY2hlY2tib3gtZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6IFwiY2hlY2tib3hHcm91cFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jaGVja2JveFZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jaGVja2JveFZhbHVlID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY2hlY2tib3hWYWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInZhbi1jZWxsLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYm1MaXN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidmFuLWNlbGxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBpdGVtLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrYWJsZTogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF92bS50b2dnbGUoaW5kZXgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJyaWdodC1pY29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udG9nZ2xlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidmFuLWNoZWNrYm94XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJjaGVja2JveGVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZJbkZvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uc3RhdHVzID09PSBcIuaYr1wiXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicG9wSXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJhbGlnbi1pdGVtc1wiOiBcImNlbnRlclwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5YiG566h5bGA6ZW/77yaXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcInZhbi1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1saW5rXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJwaWNrZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlucHV0LWFsaWduXCI6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIueCueWHu+mAieaLqeWIhueuoeWxgOmVv1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hvd1BpY2tlclR5cGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmFwcHJvdmFsSW5mby5sZWFkZXJfdXNlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmFwcHJvdmFsSW5mbywgXCJsZWFkZXJfdXNlclwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImFwcHJvdmFsSW5mby5sZWFkZXJfdXNlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YW4tcG9wdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBvc2l0aW9uOiBcImJvdHRvbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hvd1BpY2tlclR5cGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hvd1BpY2tlclR5cGUgPSAkJHZcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNob3dQaWNrZXJUeXBlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidmFuLXBpY2tlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNob3ctdG9vbGJhclwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW5zOiBfdm0ubGVhZGVyTGlzdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZS1rZXlcIjogXCJtY1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm06IF92bS5vbkNvbmZpcm1UeXBlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWw6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hvd1BpY2tlclR5cGUgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBvcEl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCI4MHB4XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnN0YXR1cyA9PT0gXCLmmK9cIiA/IFwi5oSP6KeB77yaXCIgOiBcIumps+WbnuWOn+WboO+8mlwiKVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5vcGluaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJvcGluaW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRXXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvd3M6IFwiNlwiLCBwbGFjZWhvbGRlcjogXCLor7fovpPlhaVcIiB9LFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLm9waW5pb24gfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9waW5pb24gPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uY2x1ZVN0YXRlID09PSBcIuW+heWKnue7k1wiXG4gICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicG9wV3JhcHBlclwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBvcEl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCI4MHB4XCIgfSB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnN0YXR1cyA9PT0gXCLmmK9cIiA/IFwi5oSP6KeB77yaXCIgOiBcIumps+WbnuWOn+WboO+8mlwiKVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5vcGluaW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJvcGluaW9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRXXCIsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHJvd3M6IFwiNlwiLCBwbGFjZWhvbGRlcjogXCLor7fovpPlhaVcIiB9LFxuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLm9waW5pb24gfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9waW5pb24gPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS50YXNrVHlwZSAhPT0gXCJcIiAmJlxuICAgICAgICAgICAgICAgIF92bS50YXNrVHlwZSAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgIF92bS5zdGF0dXMgPT09IFwi5pivXCJcbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBvcEl0ZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY1N0eWxlOiB7IHdpZHRoOiBcIjgwcHhcIiB9IH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5piv5ZCm5pW05pS577yaXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YW4tcmFkaW8tZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpcmVjdGlvbjogXCJob3Jpem9udGFsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5maW5pc2hJbmZvLnJlY3RpZmljYXRpb25fc3RhdHVzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmZpbmlzaEluZm8sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJyZWN0aWZpY2F0aW9uX3N0YXR1c1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQkdlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaW5pc2hJbmZvLnJlY3RpZmljYXRpb25fc3RhdHVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YW4tcmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbmFtZTogXCLmmK9cIiwgXCJpY29uLXNpemVcIjogXCIxNnB4XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuaYr1wiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YW4tcmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgbmFtZTogXCLlkKZcIiwgXCJpY29uLXNpemVcIjogXCIxNnB4XCIgfSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuWQplwiKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS50YXNrVHlwZSAhPT0gXCJcIiAmJlxuICAgICAgICAgICAgICAgIF92bS50YXNrVHlwZSAhPT0gbnVsbCAmJlxuICAgICAgICAgICAgICAgIF92bS5zdGF0dXMgPT09IFwi5pivXCIgJiZcbiAgICAgICAgICAgICAgICBfdm0uZmluaXNoSW5mby5yZWN0aWZpY2F0aW9uX3N0YXR1cyA9PT0gXCLmmK9cIlxuICAgICAgICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInBvcEl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljU3R5bGU6IHsgd2lkdGg6IFwiODBweFwiIH0gfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5pW05pS55YaF5a6577yaXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwidGV4dGFyZWFcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmluaXNoSW5mby5yZWN0aWZpY2F0aW9uX2NvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaW5pc2hJbmZvLnJlY3RpZmljYXRpb25fY29udGVudFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0V1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm93czogXCI2XCIsIHBsYWNlaG9sZGVyOiBcIuivt+i+k+WFpVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZpbmlzaEluZm8ucmVjdGlmaWNhdGlvbl9jb250ZW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbiAoJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZmluaXNoSW5mbyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicmVjdGlmaWNhdGlvbl9jb250ZW50XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicG9wRm9vdGVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3dDaGVjayA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCLlj5bmtohcIildXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNTdHlsZToge1xuICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzE5ODlmYVwiLFxuICAgICAgICAgICAgICAgICAgXCJib3JkZXItbGVmdFwiOiBcIjFweCBzb2xpZCAjZWJlZGYwXCIsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhdHRyczogeyBsb2FkaW5nOiBfdm0uYnRuTG9hZGluZyB9LFxuICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udmFsaWRBcHByb3ZhbCB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwi56Gu6K6kIFwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2YW4tcG9wdXBcIixcbiAgICAgICAge1xuICAgICAgICAgIGF0dHJzOiB7IGNsb3NlYWJsZTogZmFsc2UsIHJvdW5kOiBcIlwiIH0sXG4gICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hvd0Rpc3RyaWJ1dGUsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCQkdikge1xuICAgICAgICAgICAgICBfdm0uc2hvd0Rpc3RyaWJ1dGUgPSAkJHZcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcInNob3dEaXN0cmlidXRlXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwicG9wVGl0bGVcIiB9LCBbX3ZtLl92KFwi5YiG5Y+RXCIpXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwb3BXcmFwcGVyXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwb3BJdGVtXCIsXG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJhbGlnbi1pdGVtc1wiOiBcImNlbnRlclwiIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtfdm0uX3YoXCLliIblj5HljrvlkJHvvJpcIildKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidmFuLXJhZGlvLWdyb3VwXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwibWFyZ2luLWxlZnRcIjogXCItNTBweFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGRpcmVjdGlvbjogXCJob3Jpem9udGFsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgY2hhbmdlOiBfdm0ucXVlcnlMYXdEZXB0IH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5kaXN0cmlidXRlSW5mby50eXBlLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZGlzdHJpYnV0ZUluZm8sIFwidHlwZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImRpc3RyaWJ1dGVJbmZvLnR5cGVcIixcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidmFuLXJhZGlvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBhdHRyczogeyBuYW1lOiBcIuaUr+mYn1wiLCBcImljb24tc2l6ZVwiOiBcIjE2cHhcIiB9IH0sXG4gICAgICAgICAgICAgICAgICAgICAgW192bS5fdihcIuaUr+mYn1wiKV1cbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ2YW4tcmFkaW9cIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IG5hbWU6IFwi5YiG5bGAXCIsIFwiaWNvbi1zaXplXCI6IFwiMTZweFwiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5YiG5bGAXCIpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwb3BJdGVtXCIsXG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgXCJhbGlnbi1pdGVtc1wiOiBcImNlbnRlclwiIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtfdm0uX3YoXCLliIblj5Hnp5HlrqTvvJpcIildKSxcbiAgICAgICAgICAgICAgICBfYyhcInZhbi1maWVsZFwiLCB7XG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgXCJpcy1saW5rXCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBpY2tlclwiLFxuICAgICAgICAgICAgICAgICAgICBcImlucHV0LWFsaWduXCI6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcjogXCLngrnlh7vpgInmi6nliIblj5Hnp5HlrqRcIixcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5zaG93UGlja2VyTGVhZGVyID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZGlzdHJpYnV0ZUluZm8uZGVwdCxcbiAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZGlzdHJpYnV0ZUluZm8sIFwiZGVwdFwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZGlzdHJpYnV0ZUluZm8uZGVwdFwiLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwidmFuLXBvcHVwXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHBvc2l0aW9uOiBcImJvdHRvbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5zaG93UGlja2VyTGVhZGVyLFxuICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uc2hvd1BpY2tlckxlYWRlciA9ICQkdlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJzaG93UGlja2VyTGVhZGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInZhbi1waWNrZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcInNob3ctdG9vbGJhclwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uczogX3ZtLmJyb2FuY2hzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZS1rZXlcIjogXCJTU0JNXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlybTogX3ZtLm9uQ29uZmlybURlcHRMZWFkZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWw6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3dQaWNrZXJMZWFkZXIgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF92bS5kaXN0cmlidXRlSW5mby50eXBlID09PSBcIuaUr+mYn1wiICYmIF92bS5kaXN0cmlidXRlSW5mby5kZXB0ICE9PSBcIlwiXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwb3BJdGVtXCIsXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY1N0eWxlOiB7IFwiYWxpZ24taXRlbXNcIjogXCJjZW50ZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwibGFiZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwi5pSv6Zif5Lq65ZGY77yaXCIpLFxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJ2YW4tZmllbGRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZDogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtbGlua1wiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInBpY2tlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBcImlucHV0LWFsaWduXCI6IFwibGVmdFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI6IFwi54K55Ye76YCJ5oup5pSv6Zif5Lq65ZGYXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3dQaWNrZXJMZWFkZXIyID0gdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmRpc3RyaWJ1dGVJbmZvLmxlYWRlcl91c2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmRpc3RyaWJ1dGVJbmZvLCBcImxlYWRlcl91c2VyXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImRpc3RyaWJ1dGVJbmZvLmxlYWRlcl91c2VyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwidmFuLXBvcHVwXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcG9zaXRpb246IFwiYm90dG9tXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2hvd1BpY2tlckxlYWRlcjIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3dQaWNrZXJMZWFkZXIyID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2hvd1BpY2tlckxlYWRlcjJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInZhbi1waWNrZXJfX3Rvb2xiYXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidmFuLXBpY2tlcl9fY2FuY2VsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImJ1dHRvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmNhbmNlbDIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLlj5bmtohcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidmFuLXBpY2tlcl9fY29uZmlybVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJidXR0b25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5vbkNvbmZpcm1MZWFkZXIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoXCLnoa7orqRcIildXG4gICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibWF4LWhlaWdodFwiOiBcIjI2NXB4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIm92ZXJmbG93LXlcIjogXCJhdXRvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YW4tY2hlY2tib3gtZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVmOiBcImNoZWNrYm94R3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNoZWNrYm94VmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jaGVja2JveFZhbHVlID0gJCR2XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImNoZWNrYm94VmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFuLWNlbGwtZ3JvdXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnBlcnNvbnMsIGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwidmFuLWNlbGxcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0aXRsZTogaXRlbS5NQywgY2xpY2thYmxlOiBcIlwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uICgkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdm0udG9nZ2xlKGluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwicmlnaHQtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLnRvZ2dsZShpbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwidmFuLWNoZWNrYm94XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogXCJjaGVja2JveGVzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZJbkZvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IG5hbWU6IGl0ZW0uTUMgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3h5OiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG51bGwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJwb3BGb290ZXJcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0uc2hvd0Rpc3RyaWJ1dGUgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwi5Y+W5raIXCIpXVxuICAgICAgICAgICAgKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHtcbiAgICAgICAgICAgICAgICAgIGNvbG9yOiBcIiMxOTg5ZmFcIixcbiAgICAgICAgICAgICAgICAgIFwiYm9yZGVyLWxlZnRcIjogXCIxcHggc29saWQgI2ViZWRmMFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgbG9hZGluZzogX3ZtLmJ0bkxvYWRpbmcgfSxcbiAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnZhbGlkRGlzdHJpYnV0ZSB9LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwi56Gu6K6kIFwiKV1cbiAgICAgICAgICAgICksXG4gICAgICAgICAgXSksXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfYyhcbiAgICAgICAgXCJ2YW4tb3ZlcmxheVwiLFxuICAgICAgICB7IGF0dHJzOiB7IHNob3c6IF92bS5zaG93IH0gfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwidmFuLXNlYXJjaFwiLCB7XG4gICAgICAgICAgICByZWY6IFwic2VhcmNoXCIsXG4gICAgICAgICAgICBzdGF0aWNTdHlsZTogeyB3aWR0aDogXCIxMDAlXCIgfSxcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHNoYXBlOiBcInJvdW5kXCIsXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBcIue6v+e0ouadpea6kCAvIOWfuuacrOaDheWGtSAvIOWvueW6lOS8geS4miAvIOS6uuWRmCAvIOaXtumXtFwiLFxuICAgICAgICAgICAgICBcInNob3ctYWN0aW9uXCI6IFwiXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBrZXk6IFwiYWN0aW9uXCIsXG4gICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3R5bGU6IHsgY29sb3I6IFwiIzQ0N0JGQ1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLm9uU2VhcmNoIH0sXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KFwi5pCc57SiXCIpXVxuICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgcHJveHk6IHRydWUsXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoS2V5d29yZCxcbiAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uICgkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2VhcmNoS2V5d29yZCA9ICQkdlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaEtleXdvcmRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpbmlzaF9ib3R0b21cIiB9LCBbXG4gICAgICBfYyhcInNwYW5cIiwgW192bS5fdihcIuW3suWkhOeQhlwiKV0pLFxuICAgIF0pXG4gIH0sXG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbnZhciBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSByZXF1aXJlKFwiQC9hc3NldHMvY2x1ZS/nn6nlvaIgMS5wbmdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSByZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2NsdWUvdGl0bGVfYmFja0ltZy5wbmdcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gPSByZXF1aXJlKFwiLi4vLi4vYXNzZXRzL2NsdWUvYm90dG9tLnBuZ1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAY2hhcnNldCBcXFwiVVRGLThcXFwiO1xcbi5jbHVlLXRhYi13cmFwcGVyW2RhdGEtdi0yNDM4OTdkMV0ge1xcbiAgcGFkZGluZzogMTVweCAxMHB4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG4uY2x1ZS10YWItd3JhcHBlciAuYWN0aXZlW2RhdGEtdi0yNDM4OTdkMV0ge1xcbiAgYmFja2dyb3VuZDogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBuby1yZXBlYXQgY2VudGVyIGJvdHRvbTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJSAzMCU7XFxuICBjb2xvcjogIzEyMTIzNiAhaW1wb3J0YW50O1xcbn1cXG4uY2x1ZS10YWItd3JhcHBlciAuYWN0aXZlSXRlbVtkYXRhLXYtMjQzODk3ZDFdIHtcXG4gIHdpZHRoOiAxMDVweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcbiAgb3BhY2l0eTogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDI4cHg7XFxuICBjb2xvcjogI2ZmZmZmZiAhaW1wb3J0YW50O1xcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDIyNWRlZywgIzQ5NzVlYyAwJSwgIzk3YjNmZiAxMDAlKTtcXG4gIGJveC1zaGFkb3c6IDAgNHB4IDM0cHggcmdiYSg4NCwgMTI1LCAyMzksIDAuNCk7XFxufVxcbi5jbHVlLXRhYi13cmFwcGVyIC50ZXh0W2RhdGEtdi0yNDM4OTdkMV0ge1xcbiAgd2lkdGg6IDEwNXB4O1xcbiAgY29sb3I6IHJnYmEoMTgsIDE4LCA1NCwgMC41KTtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmNsdWUtdGFiLXdyYXBwZXIgLnRhYlRleHRbZGF0YS12LTI0Mzg5N2QxXSB7XFxuICBtYXJnaW46IDAgNDBweCAwIDEwcHg7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG4ubGlzdC13cmFwcGVyW2RhdGEtdi0yNDM4OTdkMV0ge1xcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTEwcHgpO1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuLmxpc3Qtd3JhcHBlciAuY2x1ZS13cmFwcGVyW2RhdGEtdi0yNDM4OTdkMV0ge1xcbiAgbWFyZ2luOiAyNXB4IDEwcHg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcXG4gIGNvbG9yOiByZ2JhKDE4LCAxOCwgNTQsIDAuNSk7XFxuICBmb250LXNpemU6IDEycHg7XFxufVxcbi5saXN0LXdyYXBwZXIgLmNsdWUtd3JhcHBlciAuY2x1ZS13cmFwcGVyLWl0ZW1bZGF0YS12LTI0Mzg5N2QxXSB7XFxuICBwYWRkaW5nOiAxNXB4IDE1cHggNXB4IDE1cHg7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG59XFxuLmxpc3Qtd3JhcHBlciAuY2x1ZS13cmFwcGVyIC5jbHVlLXdyYXBwZXItaXRlbSAudGl0bGVfaW1hZ2VbZGF0YS12LTI0Mzg5N2QxXSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IC0zN3B4O1xcbiAgbGVmdDogLTM1cHg7XFxuICBoZWlnaHQ6IDA7XFxufVxcbi5saXN0LXdyYXBwZXIgLmNsdWUtd3JhcHBlciAuY2x1ZS13cmFwcGVyLWl0ZW0gLnRpdGxlX2ltYWdlIHNwYW5bZGF0YS12LTI0Mzg5N2QxXSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAtNzdweDtcXG4gIHRvcDogLTMxcHg7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmxpc3Qtd3JhcHBlciAuY2x1ZS13cmFwcGVyIC5jbHVlLXdyYXBwZXItaXRlbSAudGl0bGVfdGltZVtkYXRhLXYtMjQzODk3ZDFdIHtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbn1cXG4ubGlzdC13cmFwcGVyIC5jbHVlLXdyYXBwZXIgLmNsdWUtd3JhcHBlci1pdGVtIC50aXRsZV90aW1lIC5zdGF0ZVtkYXRhLXYtMjQzODk3ZDFdIHtcXG4gIHBhZGRpbmc6IDNweCAxMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG4ubGlzdC13cmFwcGVyIC5jbHVlLXdyYXBwZXIgLmNsdWUtd3JhcHBlci1pdGVtIC50aXRsZVtkYXRhLXYtMjQzODk3ZDFdIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG59XFxuLmxpc3Qtd3JhcHBlciAuY2x1ZS13cmFwcGVyIC5jbHVlLXdyYXBwZXItaXRlbSAuZmluaXNoW2RhdGEtdi0yNDM4OTdkMV0ge1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XFxufVxcbi5saXN0LXdyYXBwZXIgLmNsdWUtd3JhcHBlciAudGl0bGVfYm90dG9tW2RhdGEtdi0yNDM4OTdkMV0ge1xcbiAgaGVpZ2h0OiA0NXB4O1xcbiAgbGluZS1oZWlnaHQ6IDQ1cHg7XFxuICBwYWRkaW5nOiAwIDE1cHg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG59XFxuLmxpc3Qtd3JhcHBlciAuY2x1ZS13cmFwcGVyIC50aXRsZV9ib3R0b20gbGFiZWxbZGF0YS12LTI0Mzg5N2QxXSB7XFxuICBtYXJnaW46IDAgNXB4O1xcbiAgY29sb3I6ICMxMjEyMzY7XFxufVxcbi5saXN0LXdyYXBwZXIgLmNsdWUtd3JhcHBlciAudGl0bGVfYm90dG9tIC5ib3R0b21fYnRuW2RhdGEtdi0yNDM4OTdkMV0ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5saXN0LXdyYXBwZXIgLmNsdWUtd3JhcHBlciAudGl0bGVfYm90dG9tIC5ib3R0b21fYnRuIC55ZXNbZGF0YS12LTI0Mzg5N2QxXSB7XFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogMjZweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNnB4O1xcbiAgb3BhY2l0eTogMTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQyLjkxZGVnLCAjNDQ3YmZjIDAlLCAjN2NhMWY3IDEwMCUpO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5saXN0LXdyYXBwZXIgLmNsdWUtd3JhcHBlciAudGl0bGVfYm90dG9tIC5ib3R0b21fYnRuIC5ub1tkYXRhLXYtMjQzODk3ZDFdIHtcXG4gIHdpZHRoOiA4MHB4O1xcbiAgaGVpZ2h0OiAyNnB4O1xcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XFxuICBvcGFjaXR5OiAxO1xcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNDIuOTFkZWcsIHJnYmEoMjUwLCAxMzgsIDU3LCAwLjA1KSAwJSwgcmdiYSgxOCwgMTgsIDU0LCAwLjAxKSAxMDAlKTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZjhkMWE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjb2xvcjogI2ZmOGQxYTtcXG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xcbn1cXG4ubGlzdC13cmFwcGVyIC5jbHVlLXdyYXBwZXIgLmNsdWUtZmluaXNoLWl0ZW1bZGF0YS12LTI0Mzg5N2QxXSB7XFxuICBsaW5lLWhlaWdodDogMzBweDtcXG59XFxuLmxpc3Qtd3JhcHBlciAuY2x1ZS13cmFwcGVyIC5jbHVlLWZpbmlzaC1pdGVtIC5maW5pc2hfdGl0bGVbZGF0YS12LTI0Mzg5N2QxXSB7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbn1cXG4ubGlzdC13cmFwcGVyIC5jbHVlLXdyYXBwZXIgLmNsdWUtZmluaXNoLWl0ZW0gLmZpbmlzaF90aXRsZSAubmFtZVtkYXRhLXYtMjQzODk3ZDFdIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG4gIGNvbG9yOiAjMDAwMDAwO1xcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAxNzBweCk7XFxufVxcbi5saXN0LXdyYXBwZXIgLmNsdWUtd3JhcHBlciAuY2x1ZS1maW5pc2gtaXRlbSAuZmluaXNoX3RpdGxlIC5zdGF0ZVtkYXRhLXYtMjQzODk3ZDFdIHtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW4tcmlnaHQ6IDVweDtcXG59XFxuLmxpc3Qtd3JhcHBlciAuY2x1ZS13cmFwcGVyIC5jbHVlLWZpbmlzaC1pdGVtIC5maW5pc2hfdGl0bGUgLnRpbWVbZGF0YS12LTI0Mzg5N2QxXSB7XFxuICBjb2xvcjogcmdiYSgxOCwgMTgsIDU0LCAwLjUpO1xcbiAgd2lkdGg6IDExNXB4O1xcbn1cXG4ubGlzdC13cmFwcGVyIC5jbHVlLXdyYXBwZXIgLmNsdWUtZmluaXNoLWl0ZW0gLmZpbmlzaF9jb250ZW50W2RhdGEtdi0yNDM4OTdkMV0ge1xcbiAgcGFkZGluZzogMCAxNXB4O1xcbn1cXG4ubGlzdC13cmFwcGVyIC5jbHVlLXdyYXBwZXIgLmZpbmlzaF9ib3R0b21bZGF0YS12LTI0Mzg5N2QxXSB7XFxuICBoZWlnaHQ6IDM1cHg7XFxuICBsaW5lLWhlaWdodDogMzVweDtcXG4gIHBhZGRpbmc6IDAgMTVweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcbiAgY29sb3I6ICM0NDdiZmM7XFxufVxcbi5wb3BUaXRsZVtkYXRhLXYtMjQzODk3ZDFdIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XFxufVxcbi5wb3BXcmFwcGVyW2RhdGEtdi0yNDM4OTdkMV0ge1xcbiAgbWF4LWhlaWdodDogNTB2aDtcXG59XFxuLnBvcFdyYXBwZXIgLnBvcEl0ZW1bZGF0YS12LTI0Mzg5N2QxXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDMzMHB4O1xcbiAgcGFkZGluZzogMTBweDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGNvbG9yOiAjOTk5O1xcbn1cXG4ucG9wV3JhcHBlciAucG9wSXRlbSAubGFiZWxbZGF0YS12LTI0Mzg5N2QxXSB7XFxuICB3aWR0aDogMTYwcHg7XFxufVxcbi5wb3BXcmFwcGVyIC5wb3BJdGVtIC5pbnB1dFdbZGF0YS12LTI0Mzg5N2QxXSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWJlZGYwO1xcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XFxuICB3aWR0aDogY2FsYygxMDAlIC0gODVweCk7XFxufVxcbi5wb3BGb290ZXJbZGF0YS12LTI0Mzg5N2QxXSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlYmVkZjA7XFxufVxcbi5wb3BGb290ZXIgZGl2W2RhdGEtdi0yNDM4OTdkMV0ge1xcbiAgd2lkdGg6IDUwJTtcXG4gIHBhZGRpbmc6IDE0cHggMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMTZweDtcXG59XCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNDM4OTdkMSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuaWYoY29udGVudC5fX2VzTW9kdWxlKSBjb250ZW50ID0gY29udGVudC5kZWZhdWx0O1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciBhZGQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikuZGVmYXVsdFxudmFyIHVwZGF0ZSA9IGFkZChcImQ4NmVjYThjXCIsIGNvbnRlbnQsIGZhbHNlLCB7XCJzb3VyY2VNYXBcIjpmYWxzZSxcInNoYWRvd01vZGVcIjpmYWxzZX0pO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3JlZi0tOS1vbmVPZi0xLTIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjQzODk3ZDEmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cmVmLS05LW9uZU9mLTEtMiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tOS1vbmVPZi0xLTMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xLTAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD0yNDM4OTdkMSZzY29wZWQ9dHJ1ZSZsYW5nPXNjc3MmXCIpO1xuICAgICBpZihuZXdDb250ZW50Ll9fZXNNb2R1bGUpIG5ld0NvbnRlbnQgPSBuZXdDb250ZW50LmRlZmF1bHQ7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCByZXF1ZXN0IGZyb20gXCIuL3JlcXVlc3RcIjtcclxuXHJcbi8qKlxyXG4gKiDmn6Xor6LlvoXlip7mlbDph49cclxuICogKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEluSGFuZENvdW50KGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvbWFuYWdlL3FyX2NsdWUvdXNlcl9jb3VudCcsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IGRhdGFcclxuICAgIH0pXHJcbn1cclxuLy/lvoXlip7kuovpobktLeW+heWKnuWuoeaguOWIl+ihqFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5IYW5kQ2hlY2tMaXN0KGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvbWFuYWdlL3FyX2NsdWUvYXVkaXRfbGlzdCcsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IGRhdGFcclxuICAgIH0pXHJcbn1cclxuLy/nur/ntKLor6bmg4VcclxuZXhwb3J0IGZ1bmN0aW9uIGdldENsdWVEZXRhaWwoZGF0YSkge1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9tYW5hZ2UvcXJfY2x1ZS9vbmVfZGV0YWlsJyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczogZGF0YVxyXG4gICAgfSlcclxufVxyXG4vL+aIkeeahOWuoeaJueWIl+ihqFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWluZUNsdWVMaXN0KGRhdGEpIHtcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvbWFuYWdlL3FyX2NsdWUvbGlzdCcsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IGRhdGFcclxuICAgIH0pXHJcbn1cclxuLy8g5rWB56iLMe+8muWIhueuoeWxgOmVv+WuoeaJuVxyXG5leHBvcnQgY29uc3QgbGVhZGVyQ2hlY2sgPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL21hbmFnZS9xcl9jbHVlL29uZV9sZWFkZXJfYXBwcm92ZScsXHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgfSlcclxufTtcclxuLy8g6Zet546v77ya5YiG566h5bGA6ZW/5a6h5om5XHJcbmV4cG9ydCBjb25zdCBoYm1MZWFkZXJDaGVjayA9IChkYXRhKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL3FyX2NsdWUvb25lX2xlYWRlcl9hcHByb3ZlJyxcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICB9KVxyXG59O1xyXG4vLyDmtYHnqIsy77ya5YiG566h5bGA6ZW/5a6h5om5XHJcbmV4cG9ydCBjb25zdCBsZWFkZXJDaGVja1R3byA9IChkYXRhKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvbWFuYWdlL3FyX2NsdWUvdHdvX2xlYWRlcl9hcHByb3ZlJyxcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICB9KVxyXG59O1xyXG4vLyDmtYHnqIsy77ya5a+55Y+j5Lia5Yqh6YOo6Zeo5a6h5qC4XHJcbmV4cG9ydCBjb25zdCBkZXB0QXBwcm92YWwgPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL21hbmFnZS9xcl9jbHVlL21hbmFnZV9kZXB0X2V4YW1pbmUnLFxyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIGRhdGE6IGRhdGFcclxuICAgIH0pXHJcbn07XHJcbi8vIOWIhueuoemihuWvvC0t5LiL5ouJ5qGGXHJcbmV4cG9ydCBjb25zdCBxdWVyeUxlYWRlckxpc3QgPSAoKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvbWFuYWdlL3FyX2NsdWUvdXNlcl9pbmZvJyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczoge31cclxuICAgIH0pXHJcbn07XHJcbi8v5YiG5Y+R6YOo6Zeo5LiL5ouJXHJcbmV4cG9ydCBjb25zdCBxdWVyeURlcGFydG1lbnRMaXN0ID0gKGRhdGEpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9tYW5hZ2UvcXJfY2x1ZS9kaXN0cmlidXRpb25fZGVwdCcsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IGRhdGFcclxuICAgIH0pXHJcbn07XHJcbi8v5YiG5Y+R6YOo6ZeoLS3kurrlkZjkuIvmi4lcclxuZXhwb3J0IGNvbnN0IHF1ZXJ5RGVwdFBlcnNvbkxpc3QgPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL21hbmFnZS9xcl9jbHVlL2Rpc3RyaWJ1dGlvbl91c2VyJyxcclxuICAgICAgICBtZXRob2Q6ICdnZXQnLFxyXG4gICAgICAgIHBhcmFtczogZGF0YVxyXG4gICAgfSlcclxufTtcclxuLy/miafms5XmlK/pmJ/kurrlkZjkuIvmi4lcclxuZXhwb3J0IGNvbnN0IHF1ZXJ5TGF3TGlzdCA9ICgpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9tYW5hZ2UvcXJfY2x1ZS9kZXRhY2htZW50X3VzZXInLFxyXG4gICAgICAgIG1ldGhvZDogJ2dldCcsXHJcbiAgICAgICAgcGFyYW1zOiB7fVxyXG4gICAgfSlcclxufTtcclxuLy8g5pSv6Zif5YiG5Y+RXHJcbmV4cG9ydCBjb25zdCBicm9hbmNoRGlzdHJpYnV0ZSA9IChkYXRhKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvbWFuYWdlL3FyX2NsdWUvZGlzdHJpYnV0aW9uJyxcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICB9KVxyXG59O1xyXG4vL+S/neWtmOeOsOWcuuebkeafpeiusOW9lVxyXG5leHBvcnQgY29uc3Qgc2F2ZUNoZWNrUmVjb3JkID0gKGRhdGEpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9tYW5hZ2UvcXJfY2x1ZS9yZWNvcmRfZXhhbWluYXRpb24nLFxyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIGRhdGE6IGRhdGFcclxuICAgIH0pXHJcbn07XHJcbi8v5LiK5Lyg6ZmE5Lu2XHJcbmV4cG9ydCBmdW5jdGlvbiB1cGxvYWRGaWxlcyhkYXRhKSB7XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiBcIi9taW5pby91cGxvYWRcIixcclxuICAgICAgICBtZXRob2Q6IFwicG9zdFwiLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgXCJjb250ZW50LXR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIGRhdGE6ZGF0YVxyXG4gICAgfSk7XHJcbn1cclxuLy/mlrDlop7moLjlrp7kv6Hmga9cclxuZXhwb3J0IGNvbnN0IGFkZFZlcmlmeSA9IChkYXRhKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvbWFuYWdlL3FyX2NsdWUvY2hlY2tpbmcnLFxyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIGRhdGE6IGRhdGFcclxuICAgIH0pXHJcbn07XHJcbi8v5pSv6Zif5qC45a6eXHJcbmV4cG9ydCBjb25zdCBicm9hbmNoVmVyaWZ5ID0gKGRhdGEpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9tYW5hZ2UvcXJfY2x1ZS92ZXJpZnknLFxyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIGRhdGE6IGRhdGFcclxuICAgIH0pXHJcbn07XHJcbi8v5Yqe57uTXHJcbmV4cG9ydCBjb25zdCBmaW5pc2hGbG93ID0gKGRhdGEpID0+e1xyXG4gICAgcmV0dXJuIHJlcXVlc3Qoe1xyXG4gICAgICAgIHVybDogJy9tYW5hZ2UvcXJfY2x1ZS9jb21wbGV0aW9uJyxcclxuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcclxuICAgICAgICBkYXRhOiBkYXRhXHJcbiAgICB9KVxyXG59O1xyXG4vLyDpl63njq/vvJrliIbnrqHlsYDplb/lrqHmiblcclxuZXhwb3J0IGNvbnN0IGhibUZpbmlzaEZsb3cgPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL2hlYWx0aC9xcl9jbHVlL2NvbXBsZXRpb24nLFxyXG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxyXG4gICAgICAgIGRhdGE6IGRhdGFcclxuICAgIH0pXHJcbn07XHJcbi8v5pW05pS55oOF5Ya15Y+N6aaIXHJcbmV4cG9ydCBjb25zdCBmZWVkQmFjayA9IChkYXRhKSA9PntcclxuICAgIHJldHVybiByZXF1ZXN0KHtcclxuICAgICAgICB1cmw6ICcvaGVhbHRoL3FyX2NsdWUvcmVjdGlmaWNhdGlvbicsXHJcbiAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgZGF0YTogZGF0YVxyXG4gICAgfSlcclxufTtcclxuXHJcblxyXG4vL+e6v+e0ouWIl+ihqFxyXG5leHBvcnQgY29uc3QgZ2V0WHMgPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL21hbmFnZS9xcl9jbHVlL2NsdWVfbGlzdCcsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IGRhdGFcclxuICAgIH0pXHJcbn07XHJcblxyXG4vL+e6v+e0ouivpuaDhVxyXG5leHBvcnQgY29uc3QgeHNEZXRhaWwgPSAoZGF0YSkgPT57XHJcbiAgICByZXR1cm4gcmVxdWVzdCh7XHJcbiAgICAgICAgdXJsOiAnL21hbmFnZS9xcl9jbHVlL2RldGFpbCcsXHJcbiAgICAgICAgbWV0aG9kOiAnZ2V0JyxcclxuICAgICAgICBwYXJhbXM6IGRhdGFcclxuICAgIH0pXHJcbn07XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQVhZQUFBQXNDQVlBQUFCeFBKTkFBQUFBQVhOU1IwSUFyczRjNlFBQUFBUnpRa2xVQ0FnSUNId0laSWdBQUFPclNVUkJWSGljN2QzTmJsdEZHSWZ4WjhaMmFKS1NCQVNxa1BxUnFsMlZGZW9OOUNhNG5qUlh3VFZVYkZpQUtuYmRJajQyb0VxZ0lDcUVDQWdVYU9tSG12aWNZZUU1enNTSjJ6UnhjVHM4djAzK25veG4zbk1TdmJLT25aT1E3diswd1ZoTTBPWWM5bk9NYVJUYlVXNjY2YVR4OUJnU2JUR2ZOcTgzVnVTWTJGK2syTE9iM3haNzVuMjY2YjFVNUpob3B0UUkwSllaaUtuSUZQbUllZzhjV3lweUw5RTBoL2Z2ZGVlbEhXV0FwaG5OZis3K3ZkSDVhQ2llVzZ3eitzYmhjeGxqb20yS3V2TGNYcG1MbjFlUGczbC82U0tYdGVRODdISStwdkw0eHVQRm1tV05vODBTRENmcW1zakRQTFdmaWt5Uis0bGhmdENmckd1WTkrK1A5aHdPODV3dTk0L0llYTl4enZYdUFZT2NVNTdMSHREbElRejZpYjJjKy8xajFFNmVUMzV1ZmpBWVRNa1RjM1p6RFF0ZDNzM3o4L2hna0dzYkpQWTNTb3dtQXdzVCtXbVI4M3FweTArQk40cjh2UEhSbVNwU01aNm0vRDdrOFRObkVrOEFuc0RpNGhINThTZy96bmxwcWNpTGlVYzVMeS9sREN5bnhNT2N6MUxrdk9jL3dKc1VPWTgvQUZaeXZnK3M1dnczc05ZZHgxdjU2dzd3ZHM1L0F1L2svQWZ3YnM2L0ErZHkzZ2JleS9rWDRIek85NEQxbkxlQXF6bmZCYTdsL0RWd1BlYzd3STJjUHdZK3pIa1QyTWc1RUFJcElrbXFpbzFka2lwalk1ZWt5dGpZSmFreU5uWkpxb3lOWFpJcVkyT1hwTXJZMkNXcE1qWjJTYXFNalYyU0ttTmpsNlRLMk5nbHFUSTJka21xakkxZGtpcGpZNWVreXRqWUpha3lOblpKcW95TlhaSXFZMk9YcE1yWTJDV3BNaloyU2FxTWpWMlNLbU5qbDZUSzJOZ2xxVEtSeE82OGk1QWt6VTRreElmekxrS1NORHNSMHM2OGk1Q2tsK0xzdkF1WWowZ3YvRGJ2SWlSSnN4TnA0cy96TGtLU05EdVJsZk5idm9FcVNhKy9FRWdBTVlTUWlQSGJlUmNrU1pxTjBlZlllK0diT2RjaFNacVJDQkNXTC81SzIvcXFYWkplVzJHYzl2L3lOQzdjSWFaMkR0VklrazZwdTc0T1JXTVBxeGQyYUp2UDUxT1NKT21rUWdpcGZIemdYakZoOWNxWGhPajFka2wxK0YvOFhmMUdtaHc1ZEJPd3NITHBVeExmL3pjRlNaSk9JVTIrV29jcGQzY01hNWR2a2RJUEw3OG1TZExKYkI2NkJOT1pldHZlc0hiNUZuaFpScEplT1p0M1V3ZzNwMzdZNVpuM1l3K3I2NS9SNzk4bTRhZGxKT25WMElhYjA1czZIT01mYllUbGkxL1JobzhJNmJ2WjFTVkplakUzMmhCQ00rM3lTNmwvbk9YQzJxVy9nRS9TbzN0Zk1PUURJdS9Uc25EcU9pVkp6M0E5QVMxVDNpU2Q1bGlOdlJPVzE3ZUI3WlRTYlI3OGVJV21mNEdZemhGN2E2UjJHV3oya3ZUQ3RvQ3JBQ1M0ZHFKbVh2b1hSY0dGVVVYSTNsVUFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFYWUFBQUFzQ0FZQUFBQnhQSk5BQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBTFFTVVJCVkhpYzdkekJUaHBCSE1meC84NnlDeXl3RksweEppWnRHazllZVFFT1hocmpjWi9GbzNqeTNsdGZvWDJKdm9CWEwyMmFOaldwalcyMUtscFh6UFNnYnNWWllWQUlNdmwrRGpBN08zL21uNUQ4UWlhQUp3LzArbzB1Qm1jU25wOGRCU3FNL1VDTDZsNklsN2UySXAyZTYwSlEwWGE3ZEl5WlFtaGJlMkxXRnFzV3RXWmRNS0N1bG8yT2pYdGhxV2JaNzdFeExGclZIaGt6eFhKc3VlY2ZZNllVMVMxckQ0MlpxUHBNeThIZ3lvTTdpNkpxdzNMUDM4Wk1KWjdKci8xMWQrS25zYVFXUDdmY2Q3L25xajR6bDErM2QvWDBvMmV5OTZveE8yKzVwNGpJOTU2cjJma0ZMZDlzYTNkbDkzbzB0N0JvdCtjWFl5Q0xpeSt0YWo5bW8wL1o2TVhTa3BZZHE1MnZYUzFlWGw3Tzl0eStmWHRiK3JpNjJXdzIrL2I3SVhzd1pxWFZhbG0vTis5dlBTUkpNc1I3K3QvbTVxWnNiR3prMW5xZTk2RFh2RkVZWm5IenJRNGFueVdLWWltZDc1MnFiaGhwWDJLUlZLVDdtQzRBQUJtdGRmWWgrU0VoYnhYc3lUdnRYK3hJN2V6cmFWbDhrWFB6Z3pRQVlBeHVRbjZZZ0I4WTdHdHRIWFYySkw1TVQzT1BXUUFBNHpkTXdQY045cFYxWFU5VGlVYlZHQURnY2JUVzNxQndWL2ZkV04zU0RkOG4xQUhncWRHUy8wV1ZHN25CdnJxbEc5MWpLWTJuSlFEQU9CbkJ2ckt1NjRRNkFFeXZubUJmYSt1STR4Y0FtRzVac0NlSjlpOUY0a2syQXdCNHZDellEMTVKOVRMdGZ5QVBBSGo2bEloSXE2MExITUVBZ0J1VWlFaFpDSFVBY0lVU0VVblRUbm5TalFBQVJrTWxiUjBXcEhMdkQ1VUFBTk5GN1l1RWsyNENBREE2cXZ0WGdrazNBUUFZSFZYelRvYjZUM1lBd05PbVVxL0srVG9BT0VRVit2ekRJd0JnK2hEcUFPQVlnaDBBSEVPd0E0QmpDSFlBY0F6QkRnQ09JZGdCd0RFRU93QTRobUFIQU1jUTdBRGdHSUlkQUJ4RHNBT0FZd2gyQUhBTXdRNEFqaUhZQWNBeEJEc0FPSVpnQndESEVPd0E0QmlDSFFBY1E3QURnR01JZGdCd0RNRU9BSTRoMkFIQU1RUTdBRGlHWUFjQXgvd0RzTktYUGs3a2Zwb0FBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFHNEFBQUJBQ0FZQUFBRDcvVUs5QUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBWE1TVVJCVkhpYzdWdE5pMVJIRkwzMW5pUWhZMURjU0pnTUxvVEpOcmhSQ01rL2lHVG5PbUVVWEV2aUloR3pDNGhqVnVZdmhJQkNrT0RISWtOY0pwdTRFOHdpb09CR0l4aUdpV0s2YmhZOTNmTmUxYTJxVzFXM1hsZTNmVURzcm8vemJ0OVQ1MWE5TjkwQVN5eXh4SEJRc3c1QUFLVS9BeGJtVDBLdHd0VWFsdytEQ2x4RGdtcUlvUVNLQ2ptcnBDMnFXRDZJQ2psMEFsOUh3VXlJQ0RoRUlwZGkwY2dTc0dSU1N3czIxSUlvdVZjbGM1ZjY4Qks4OCtUVUhIR1Q1a29uSjVWdm5rVGlJRVdNcURtU0NZdmxXalN4S01TSU1SUGhZbmdXUmVCU29yREdEcmtYU1krckRaeUVTNDNKU3BLVUVQT3lMMHE1UmtTODBzTDV4cFFTZEVpRUV1enF6eGF2NUdwM2pTSGJkMjUrY2FKVitxTld3UWVvOWZzSzlTcWlQZ1NJTFdvTmdCb1F4LzlQWDJ0bUcyb1ljMkMvTFltajI0WkVHODN4N3JmYnJmR1JVMFVIQUlCOWdja1VVcDFpdFQvOStjdjFBMisybjdjQXAxRHJOVUFBUkEwS09sRWo3cjdyL0VNMDJpZGorL3dJNWhBRWRISjAyM3djZEd4ZVhuYytmT0o0KzJPRkV4SHQyWTN6cXdkVzNyaWdBRGVtSzVNVWgyQ2ltaEVCWFFLYkNVUVhSN2ZOSndJdHNKZDNQSllTSWlTZUV5bU9jNEVsMnVpWEM2ZVZhallCOEczUW9kVmR6aUYrY2NCS0o4M3JXaUFtYnk4WE1lSTUrMktFU3psbzlFWGJ1dmg5bzlTWitYQklTRnhreGphNW1DeTR3cVVjWXJwekZHNTljeDBVbkRRSE9SMkN3SGJJZEh5UU44NGhZVjZHd0hiSkYzRmQ0eGdjQTByVWdHZ01oMHdFTWFlWVY2SUVsbkJJSURacnBYbDVyWjdzV3gyT2NMRWxzaWZhYU92aVZWTTBya1BvWkEzdUVIZFZZTVUyblNSNlh5cmh1QzdNZzhoR285U1ozb2hjaDVDcm0rUGVXSWN3cWdJck5pZE1JYU9FRFFrWDQ3YmUrOGZYejczWE5Qc3UyOU15SFdLMElkTWg0dzYrUTNoVndSOGJjU2dTYzUyMDR5WlFody91L3hvQVYraHVPWWYwQmdSNW1RN3gzbnAwYmxFQ3NUR2RsNFJVNGJ4dSsvdW5jK3ROb3pic2FUSU93VUlPUWRzaEpPOGVGYys5QUtBSmhoaFlUaTNoT0hYd25mMmZrVDBCaDZDVldOb2hOcStNUTZ3TFNaeDZ4M2pTZWEwY3I2UGdFeTZkdEdsTzBUMGRoemhGNkxiUHdpRkl4a1pYQldac0NoN1ErVWhIaXVOOFpWTDljK3VyRXdDNDVtVUlKRERvRUY4Q25lNk51QzlreFliTTJBQzBodCs5K1VpQWVLbGNlYXY5a082UmNRajFxSXpuM3QwRzFyN0ppUTNBNUNBZjJRSEF5MWQ0bTJESmd2d2VoK29ZM1c2K1NYTUl6UnZoRUVjb0ZpbkZFYnR2am5IdjZIY3Y3dEpkNlJBWFRpbTFUdmZVNXhEYXZYWlYyQ09uZVAwY294RnVlcGdjV29maEVpNzVZS0lBVnIwRE9nbjByK1R5RHJIaUVxNEtHdUhhMnVVWFAxSVJSOEthTC9uM3VBa09VZGVsSE9JdGYwTTd4R29MeGRacFFJcEQzZi9qVVh1V1lCQkJDZUhNNzFhNEhjSnlIaERKb3RyeUhkS1BONjRxR1BQdlA5b2VmZnJKRHp2UGlWNFJsSHJrWlNEZElVNlhpVHZFVVJVOHNWRlZZYVQxdFY4ZnRoOGZ2L3J5TDJLMjY3WHJLazZVY0J3TnEwcDZWckl2Z1dVYzRxNEt3WDF6ZHpUQ3ZWZi9xU3RITHUxSTdHbldwelBoRWc0aDdZQkNXb24rbW9JakpFY0MyUTd4OENMaEVEZXZOemFOQ0U4UTRFOUUvRzM3WDMxbmZmUDVYV3RVSWJjQnBIOWgxZnYwaERrdWRBMU9mMm40RWhwYWRqRkN4VjZIT0Vqc0lmbHZjUkFuWHVoYXRZRlRKMktFaUJZTlFFNDRzeTNIYWJXSkdDcGpNVzRTMi90OHdnSEl1YzdGTmVzZmZLUW1rclU3UTFpMFpDRWxoYVBhWXNTcXpXa21YRWxPRlNUV3lUM2tDT2ZxNTViRjJuN2dHTHY2cFlXTUdoOFNEa0RnRzh3WlBMVWg1NVRKNVdFaDl6ZHV2bjdKa2ppVXNDa0pqUlVucTBST01NU3ZTaGZCYVNhU2p2Q0JQazcvRkpLL3k1YThtYTVGMEJnSDVnZ1dleTNXSGplQmhIamNNZk1DY1VHNEtIV3ltMGQzY1NEbHdKeXhBRkQrb0ZCYUZLRUg0YUlRUC9wVEdPckp4VHk1S2dXU3AxRVdjaEk2cTdrMUlOZTFnOXpIbFp4Zm1pOEhKVXFxR0tkVW9tcEtlSzBRWFFpTDdKZ2FVT3dnVkNMUlMvSEtuMXdIU2ZMckltUnhzYm9ZT3FtTEpPS2dRcG1vTFpFMXhUTlRZWlpZWW9tYThEL3BJbHl4elpHdjhnQUFBQUJKUlU1RXJrSmdnZz09XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFRQ0FZQUFBQWY4LzloQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBRGhTVVJCVkRpTnJWSkJDc01nRUp3dDhWMDE0SzhNMUlENWxhQjlsNEh0b1pxcTFiU0Z6aW5yem80VFowa3RVWUxwQmtDaUJQSHFyREM1YkhnQnhIZG5oU0dsZHdieENpQVU0MDh5OGV5c0NHcUpKZzNYSUY2bjlCbWNGYVZBVUhxL0hyZjFoZ0dBNlhicE5ncW9KY3F6L2tlQnh0bnZBZ2w5a2ZRR0FVeGU2YjBsU1dmRm5JbGdBdXFrZ3JQQ0VBQ29KWnJlcmEzOTlCNnk3RkhScURBWWZ1UFFNR01BYnB0ZURnZDdjQ3hTdVhVQW9QVHUwNElCVEQ0dlZlV0l5ZWNVS3JzRkR0dnRMK1g2MnhpSCtKdUE3UFNxc3phRlhKK2xFTncyellrOFRPRUJtT0o5emJIeCtCOEFBQUFBU1VWT1JLNUNZSUk9XCIiLCJtb2R1bGUuZXhwb3J0cyA9IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFDZ0FBQUFJQ0FZQUFBQ0xVcjFiQUFBQUFYTlNSMElBcnM0YzZRQUFBQVJ6UWtsVUNBZ0lDSHdJWklnQUFBREJTVVJCVkRpTnpaS3hUUU5SRUVUZjdOMStaQnlBWkpzQ2FNRXBEZENJTXdxZ0FZb0NXVWhVZ2R3QkZWaWc3eHVDd3pqdzVkOVBHcTEydE1FTFZnRHJqZk4yV1IrSWZtNGZNa3hhakROSUQwT1JTTnlsUk5xa2RleElLZEoyTWFRZytic1JMcUFFeG9qRUx1TWVwNTVqOTU4Q0JPZzVBRzVXK3p1aW4zTngrRDRBNU5taXRjb1VNaDhCMEVWZHRwYVpZcUI3NngrZmZQVUQxNjFsenZGdSs2S3ZZTUdxdGNvVXN0NEJZamh3a2YrSDJBSkVyZC83MWk3bitOTzFld1g0QldwT09ra0FQZkx5QUFBQUFFbEZUa1N1UW1DQ1wiIiwiaW1wb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MjQzODk3ZDEmc2NvcGVkPXRydWUmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmltcG9ydCBzdHlsZTAgZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9MjQzODk3ZDEmc2NvcGVkPXRydWUmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgXCIyNDM4OTdkMVwiLFxuICBudWxsXG4gIFxuKVxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkge1xuICB2YXIgYXBpID0gcmVxdWlyZShcIkQ6XFxcXGhlbGlwaW5nV29ya1xcXFxBUFBcXFxca21FbnZQb3J0YWJsZVxcXFx3ZWJhcHBPU1xcXFxub2RlX21vZHVsZXNcXFxcdnVlLWhvdC1yZWxvYWQtYXBpXFxcXGRpc3RcXFxcaW5kZXguanNcIilcbiAgYXBpLmluc3RhbGwocmVxdWlyZSgndnVlJykpXG4gIGlmIChhcGkuY29tcGF0aWJsZSkge1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgICBpZiAoIWFwaS5pc1JlY29yZGVkKCcyNDM4OTdkMScpKSB7XG4gICAgICBhcGkuY3JlYXRlUmVjb3JkKCcyNDM4OTdkMScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVsb2FkKCcyNDM4OTdkMScsIGNvbXBvbmVudC5vcHRpb25zKVxuICAgIH1cbiAgICBtb2R1bGUuaG90LmFjY2VwdChcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI0Mzg5N2QxJnNjb3BlZD10cnVlJlwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICBhcGkucmVyZW5kZXIoJzI0Mzg5N2QxJywge1xuICAgICAgICByZW5kZXI6IHJlbmRlcixcbiAgICAgICAgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnNcbiAgICAgIH0pXG4gICAgfSlcbiAgfVxufVxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJzcmMvdmlld3MvaW5IYW5kL2luZGV4LnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyIsImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2NhY2hlLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS0xMy0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMTMtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTktb25lT2YtMS0xIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9yZWYtLTktb25lT2YtMS0yIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcz8/cmVmLS05LW9uZU9mLTEtMyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY2FjaGUtbG9hZGVyL2Rpc3QvY2pzLmpzPz9yZWYtLTEtMCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2luZGV4LnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTI0Mzg5N2QxJnNjb3BlZD10cnVlJmxhbmc9c2NzcyZcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6XFxcIm5vZGVfbW9kdWxlcy8uY2FjaGUvdnVlLWxvYWRlclxcXCIsXFxcImNhY2hlSWRlbnRpZmllclxcXCI6XFxcIjRiYWUwNDgyLXZ1ZS1sb2FkZXItdGVtcGxhdGVcXFwifSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy90ZW1wbGF0ZUxvYWRlci5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jYWNoZS1sb2FkZXIvZGlzdC9janMuanM/P3JlZi0tMS0wIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTI0Mzg5N2QxJnNjb3BlZD10cnVlJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==